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
for (const p of ['/san-pham/abc-mol2011','/san-pham/mol2011/']) assert.equal(legacyProductTarget(p,codes),null,p);
for (const p of ['/san-pham/mol3002/','/san-pham/mol3002','/san-pham/abc-mol9999','/san-pham/abc-mol3002-extra','/san-pham/foo/bar-mol3002','/blog/foo-mol3002']) assert.equal(legacyProductTarget(p,codes),null,p);
console.log('Đạt: QR cũ chuyển đúng mã, không chuyển nhầm hoặc lặp.');
