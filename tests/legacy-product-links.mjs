import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync('src/utils/legacy-product-links.ts', 'utf8');
const js = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const { legacyProductTarget } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const codes = new Set(['MOL3002','MOL3011','MOL3019']);
assert.equal(legacyProductTarget('/san-pham/gac-ve-sinh-rang-mieng-molli-cho-be-tu-0-3-tuoi-30pcs-hop-mol3002',codes),'/san-pham/mol3002/');
assert.equal(legacyProductTarget('/san-pham/lot-chong-tham-mol3019/',codes),'/san-pham/mol3019/');
// QR túi trữ sữa 200ml in nhầm mã mol2011, phải về MOL3011.
assert.equal(legacyProductTarget('/san-pham/tui-tru-sua-200ml-30pcs-hop-mol2011',codes),'/san-pham/mol3011/');
assert.equal(legacyProductTarget('/san-pham/tui-tru-sua-200ml-30pcs-hop-mol2011/',codes),'/san-pham/mol3011/');
// Không có MOL2011 thật: mọi link QR kết thúc mol2011 đều về MOL3011.
for (const p of ['/san-pham/abc-mol2011','/san-pham/mol2011/','/san-pham/MOL2011','/san-pham/tui-tru-sua-mol2011/']) assert.equal(legacyProductTarget(p,codes),'/san-pham/mol3011/',p);
// Nếu sau này có MOL2011 thật thì link mới /san-pham/mol2011/ không bị chuyển, slug cũ về đúng MOL2011.
const withReal = new Set([...codes,'MOL2011']);
assert.equal(legacyProductTarget('/san-pham/mol2011/',withReal),null);
assert.equal(legacyProductTarget('/san-pham/abc-mol2011',withReal),'/san-pham/mol2011/');
// Link QR cũ anh Hiếu điền trong file Excel (18/11/2026): mã in nhầm và slug không có mã.
const all = new Set([...codes,'MOL3010','MOL3012','MOL0035','MOL3026','MOL3025','MOL2015','MOL2030','MOL2059','MOL2026','MOL2002','MOL2003']);
const qr = {
 '/san-pham/tui-tru-sua-150ml-30pcs-hop-mol2010':'/san-pham/mol3010/',
 '/san-pham/tui-tru-sua-250ml-30pcs-hop-mol2012/':'/san-pham/mol3012/',
 '/san-pham/tui-tru-sua-bot-di-dong-molli-mol3005':'/san-pham/mol0035/',
 '/san-pham/tam-bong-tre-em':'/san-pham/mol3026/',
 '/san-pham/mieng-lot-chong-tham-dung-1-lan-cho-phu-nu-sau-sinh-va-nguoi-cao-tuoi/':'/san-pham/mol3025/',
 '/san-pham/hop-5-khan-sua-muslin-molli-kich-thuoc-30x30cm-mol2015-2':'/san-pham/mol2015/',
 '/san-pham/khan-sua-soi-tre-molli-6-pcs-hop-kich-thuoc-30x30cm-mol20230':'/san-pham/mol2030/',
 '/san-pham/khan-sua-6-lop-cho-be':'/san-pham/mol2059/',
 '/san-pham/chan-u-xo-3-lop-molli-kich-thuoc-90x90cm':'/san-pham/mol2026/',
 '/san-pham/goi-cao-su-non-molli-cho-be-kich-thuoc-25x35x2cm':'/san-pham/mol2002/',
 '/san-pham/lot-chong-tham-cho-be-molli-45x70-cm-tam-lot-thay-bim-hoa-tiet-cao-cap':'/san-pham/mol2003/',
};
for (const [p, t] of Object.entries(qr)) assert.equal(legacyProductTarget(p,all),t,p);
// Slug cũ chỉ khớp đúng nguyên văn, không bắt slug dài hơn.
assert.equal(legacyProductTarget('/san-pham/tam-bong-tre-em-xyz',all),null);
for (const p of ['/san-pham/mol3002/','/san-pham/mol3002','/san-pham/abc-mol9999','/san-pham/abc-mol3002-extra','/san-pham/foo/bar-mol3002','/blog/foo-mol3002']) assert.equal(legacyProductTarget(p,codes),null,p);
console.log('Đạt: QR cũ chuyển đúng mã, không chuyển nhầm hoặc lặp.');
