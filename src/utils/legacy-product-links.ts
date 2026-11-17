// QR bao bì cũ dùng slug tên sản phẩm kết thúc bằng mã MOL.
// Chỉ chuyển mã đang có thật, không đoán từ tên hoặc chuyển tất cả về trang chủ.
// Một số QR đã in sai mã: chỉ chuyển đúng slug đã gặp thật, không suy rộng mã sai.
const MISPRINTED_SLUGS: Readonly<Record<string, string>> = {
 'tui-tru-sua-200ml-30pcs-hop-mol2011': 'MOL3011',
};

export function legacyProductTarget(pathname: string, codes: ReadonlySet<string>): string | null {
 const misprint = /^\/san-pham\/([a-z0-9-]+)\/?$/i.exec(pathname);
 const aliased = misprint ? MISPRINTED_SLUGS[misprint[1].toLowerCase()] : undefined;
 if (aliased && codes.has(aliased)) return `/san-pham/${aliased.toLowerCase()}/`;
 const match = /^\/san-pham\/[a-z0-9]+(?:-[a-z0-9]+)*-(mol\d{4})\/?$/i.exec(pathname);
 if (!match || !codes.has(match[1].toUpperCase())) return null;
 return `/san-pham/${match[1].toLowerCase()}/`;
}
