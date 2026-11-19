// Sản phẩm sắp ra mắt (MOL3052): có trang riêng, hiện "Sắp ra mắt" thay giá, không có nút mua Shopee.
// Chạy sau `astro build`.
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
const root = ['../dist/client/', '../dist/'].map((d) => new URL(d, import.meta.url)).find((u) => existsSync(new URL('san-pham/mol3052/index.html', u)));
assert.ok(root, 'Thiếu trang /san-pham/mol3052/');
const page = readFileSync(new URL('san-pham/mol3052/index.html', root), 'utf8');
assert.match(page, /Yếm ăn dặm Măm Măm tiện lợi/);
assert.match(page, /class="price"[^>]*>Sắp ra mắt</, 'giá phải hiện Sắp ra mắt');
assert.ok(!page.includes('Mua ngay trên Shopee'), 'chưa bán thì không có nút mua Shopee');
assert.ok(!page.includes('>0đ<'), 'không hiện giá 0đ');
assert.ok(page.includes('/images/molli/sp/mol3052.webp'));
assert.ok(existsSync(new URL('../public/images/molli/sp/mol3052.webp', import.meta.url)));
const home = readFileSync(new URL('index.html', root), 'utf8');
assert.ok(home.includes('href="/san-pham/mol3052/"'), 'trang chủ có thẻ MOL3052');
assert.ok(!home.includes('>0đ<'), 'trang chủ không hiện giá 0đ');
console.log('Đạt: MOL3052 có link riêng, hiện Sắp ra mắt, không có nút mua.');
