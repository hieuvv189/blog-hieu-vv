import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync(new URL('../src/data/molli.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { paperPagesOf } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const provenance = JSON.parse(readFileSync(new URL('../src/data/product-media-sources.json', import.meta.url)));
for (const [code, record] of Object.entries(provenance.papers)) {
  if (!record.testPages) continue;
  const expected = [...record.pages, ...record.testPages].map(n => String(n).padStart(2, '0'));
  const actual = paperPagesOf(code).map(p => p.src.match(/\/(\d+)\.webp$/)?.[1]);
  assert.deepEqual(actual, expected, `${code}: chỉ hiển thị hồ sơ chung và phiếu đúng sản phẩm`);
  assert.equal(new Set(paperPagesOf(code).map(p => p.src)).size, actual.length, `${code}: không lặp trang`);
}
console.log('Đạt: mỗi mã có đúng các trang hồ sơ và phiếu liên quan.');
