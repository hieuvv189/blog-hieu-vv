import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync(new URL('../src/data/molli.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { paperPagesOf } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const provenance = JSON.parse(readFileSync(new URL('../src/data/product-media-sources.json', import.meta.url)));
for (const [code, record] of Object.entries(provenance.papers)) {
  if (!record.testPages) continue;
  const expected = [1, ...record.testPages].map(n => String(n).padStart(2, '0'));
  const actual = paperPagesOf(code).map(p => p.src.match(/\/(\d+)\.webp$/)?.[1]);
  assert.deepEqual(actual, expected, `${code}: chỉ hiển thị giấy chứng nhận và phiếu đúng sản phẩm`);
  assert.equal(new Set(paperPagesOf(code).map(p => p.src)).size, actual.length, `${code}: không lặp trang`);
}
console.log('Đạt: mỗi mã có đúng các trang hồ sơ và phiếu liên quan.');
for (const code of ['MOL3041', 'MOL3036', 'MOL3016']) {
  assert.deepEqual(paperPagesOf(code).map(p => p.src), [8, 9, 7, 6].map(n => `/images/molli/giay/khan-kho-uot/${String(n).padStart(2, '0')}.webp`), `${code}: phiếu kiểm nghiệm đủ 2 trang và chứng nhận Việt/Anh`);
}
for (const code of ['MOL3019','MOL3020','MOL3023','MOL3025','MOL3038','MOL3039','MOL3040']) {
 assert.deepEqual(paperPagesOf(code).map(p => p.src), [5,6,7].map(n => `/images/molli/giay/lot-1-lan/${String(n).padStart(2,'0')}.webp`), `${code}: chỉ chứng nhận và phiếu lót dùng chung`);
}
assert.deepEqual(paperPagesOf('MOL3042').map(p => p.src), [7,6].map(n => `/images/molli/giay/khan-kho-uot/${String(n).padStart(2,'0')}.webp`), 'Khăn ướt không được hiện phiếu thử khăn khô hoặc trang hành chính');
