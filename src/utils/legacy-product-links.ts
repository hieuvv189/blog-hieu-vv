// QR bao bì cũ dùng slug tên sản phẩm kết thúc bằng mã MOL.
// Chỉ chuyển mã đang có thật, không đoán từ tên hoặc chuyển tất cả về trang chủ.
export function legacyProductTarget(pathname: string, codes: ReadonlySet<string>): string | null {
 const match = /^\/san-pham\/[a-z0-9]+(?:-[a-z0-9]+)*-(mol\d{4})\/?$/i.exec(pathname);
 if (!match || !codes.has(match[1].toUpperCase())) return null;
 return `/san-pham/${match[1].toLowerCase()}/`;
}
