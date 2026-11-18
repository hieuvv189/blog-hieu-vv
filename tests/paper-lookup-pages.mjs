// Trang tra cứu giấy kiểm định: mục lục liệt kê đúng mọi mã có giấy, mỗi mã có trang riêng hiện đủ ảnh.
// Chạy sau `astro build` (đọc dist).
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync(new URL('../src/data/molli.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { PRODUCTS, paperPagesOf, paperLookupUrl } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const root = ['../dist/client/', '../dist/'].map((d) => new URL(d, import.meta.url)).find((u) => existsSync(new URL('giay-kiem-dinh/index.html', u)));
assert.ok(root, 'Chưa build: thiếu dist/.../giay-kiem-dinh/index.html');
const index = readFileSync(new URL('giay-kiem-dinh/index.html', root), 'utf8');
const withPapers = PRODUCTS.filter((p) => paperPagesOf(p.code).length > 0);
assert.ok(withPapers.length >= 30, 'phải có ít nhất 30 mã có giấy');
for (const p of withPapers) {
	const url = paperLookupUrl(p.code);
	assert.ok(index.includes(`href="${url}"`), `${p.code}: mục lục phải có link ${url}`);
	const page = readFileSync(new URL(`${url.slice(1)}index.html`, root), 'utf8');
	for (const pg of paperPagesOf(p.code)) assert.ok(page.includes(`src="${pg.src}"`), `${p.code}: thiếu ảnh ${pg.src}`);
	assert.ok(page.includes(`href="/san-pham/${p.code.toLowerCase()}/"`), `${p.code}: phải link về trang sản phẩm`);
}
for (const p of PRODUCTS.filter((x) => paperPagesOf(x.code).length === 0)) {
	assert.ok(!index.includes(`href="${paperLookupUrl(p.code)}"`), `${p.code}: chưa có giấy thì không đưa vào mục lục`);
}
const built = readdirSync(new URL('giay-kiem-dinh/', root)).filter((n) => n !== 'index.html');
assert.equal(built.length, withPapers.length, 'số trang giấy đúng bằng số mã có giấy');
console.log(`Đạt: mục lục giấy kiểm định có ${withPapers.length} mã, mỗi mã có trang ảnh đủ trang.`);
