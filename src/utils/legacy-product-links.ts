// QR bao bì cũ dùng slug tên sản phẩm kết thúc bằng mã MOL.
// Chỉ chuyển mã đang có thật, không đoán từ tên hoặc chuyển tất cả về trang chủ.
// Một số QR đã in sai mã. Mã in sai không phải mã thật nên chuyển cả mã đó về mã đúng,
// trừ khi sau này web có mã thật trùng tên.
const MISPRINTED_CODES: Readonly<Record<string, string>> = {
 MOL2010: 'MOL3010', // QR túi trữ sữa 150ml
 MOL2011: 'MOL3011', // QR túi trữ sữa 200ml
 MOL2012: 'MOL3012', // QR túi trữ sữa 250ml
 MOL3005: 'MOL0035', // QR túi trữ sữa bột di động
};

// Slug QR cũ không kết thúc bằng mã 4 số, khớp nguyên văn (anh Hiếu điền trong Excel 18/11/2026).
const LEGACY_SLUGS: Readonly<Record<string, string>> = {
 'tam-bong-tre-em': 'MOL3026',
 'mieng-lot-chong-tham-dung-1-lan-cho-phu-nu-sau-sinh-va-nguoi-cao-tuoi': 'MOL3025',
 'hop-5-khan-sua-muslin-molli-kich-thuoc-30x30cm-mol2015-2': 'MOL2015',
 'khan-sua-soi-tre-molli-6-pcs-hop-kich-thuoc-30x30cm-mol20230': 'MOL2030',
 'khan-sua-6-lop-cho-be': 'MOL2059',
 'chan-u-xo-3-lop-molli-kich-thuoc-90x90cm': 'MOL2026',
 'goi-cao-su-non-molli-cho-be-kich-thuoc-25x35x2cm': 'MOL2002',
 'lot-chong-tham-cho-be-molli-45x70-cm-tam-lot-thay-bim-hoa-tiet-cao-cap': 'MOL2003',
};

export function legacyProductTarget(pathname: string, codes: ReadonlySet<string>): string | null {
 const slug = /^\/san-pham\/([a-z0-9-]+)\/?$/i.exec(pathname)?.[1].toLowerCase();
 const fixed = slug ? LEGACY_SLUGS[slug] : undefined;
 if (fixed && codes.has(fixed)) return `/san-pham/${fixed.toLowerCase()}/`;
 const match = /^\/san-pham\/(?:[a-z0-9]+(?:-[a-z0-9]+)*-)?(mol\d{4})\/?$/i.exec(pathname);
 if (!match) return null;
 const printed = match[1].toUpperCase();
 const bare = !pathname.slice('/san-pham/'.length).includes('-');
 if (codes.has(printed)) return bare ? null : `/san-pham/${printed.toLowerCase()}/`;
 const aliased = MISPRINTED_CODES[printed];
 if (aliased && codes.has(aliased)) return `/san-pham/${aliased.toLowerCase()}/`;
 return null;
}
