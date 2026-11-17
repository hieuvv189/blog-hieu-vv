// QR bao bì cũ dùng slug tên sản phẩm kết thúc bằng mã MOL.
// Chỉ chuyển mã đang có thật, không đoán từ tên hoặc chuyển tất cả về trang chủ.
// Một số QR đã in sai mã. Mã in sai không phải mã thật nên chuyển cả mã đó về mã đúng,
// trừ khi sau này web có mã thật trùng tên.
const MISPRINTED_CODES: Readonly<Record<string, string>> = {
 MOL2011: 'MOL3011', // QR túi trữ sữa 200ml
};

export function legacyProductTarget(pathname: string, codes: ReadonlySet<string>): string | null {
 const match = /^\/san-pham\/(?:[a-z0-9]+(?:-[a-z0-9]+)*-)?(mol\d{4})\/?$/i.exec(pathname);
 if (!match) return null;
 const printed = match[1].toUpperCase();
 const bare = !pathname.slice('/san-pham/'.length).includes('-');
 if (codes.has(printed)) return bare ? null : `/san-pham/${printed.toLowerCase()}/`;
 const aliased = MISPRINTED_CODES[printed];
 if (aliased && codes.has(aliased)) return `/san-pham/${aliased.toLowerCase()}/`;
 return null;
}
