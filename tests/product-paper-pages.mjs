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
assert.deepEqual(paperPagesOf('MOL3048').map(p => p.src), [1,2,3,4].map(n => `/images/molli/giay/mol3048/${String(n).padStart(2,'0')}.webp`), 'MOL3048: phiếu kiểm nghiệm ATTP 2 trang và bản tự công bố 2 trang');
console.log('Đạt: MOL3048 có đủ kiểm nghiệm ATTP và tự công bố.');

const tb = (ns) => ns.map(n => `/images/molli/giay/tam-bong/${String(n).padStart(2,'0')}.webp`);
assert.deepEqual(paperPagesOf('MOL3026').map(p => p.src), tb([9,1,2]), 'MOL3026 (600 que): giấy chứng nhận và phiếu thử nghiệm 600 que');
assert.deepEqual(paperPagesOf('MOL3007').map(p => p.src), tb([9,3,4]), 'MOL3007 (400 que): giấy chứng nhận và phiếu thử nghiệm 400 que');
for (const code of ['MOL3001', 'MOL3018', 'MOL3045']) {
	assert.deepEqual(paperPagesOf(code).map(p => p.src), tb([9,5,6,7,8]), `${code} (200 que): giấy chứng nhận và hai phiếu thử nghiệm 200 que`);
}
assert.deepEqual(paperPagesOf('MOL3050'), [], 'MOL3050 (110 que) chưa có phiếu riêng nên chưa gắn giấy');
console.log('Đạt: các mã tăm bông có đúng giấy chứng nhận và phiếu thử nghiệm theo quy cách.');
