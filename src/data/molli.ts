// Dữ liệu dùng chung cho website Molli.
// Giá lẻ lấy từ Molli/bang-gia-ban-le.md (bản cập nhật 13/11/2026).
// Thông tin sản phẩm lấy từ Molli/thong-tin-san-pham.md. Không đưa giá đại lý lên web.

export const CONTACT = {
	zaloPhone: '0396712733',
	zaloLabel: 'Zalo Molli - Tiểu Vũ',
	callPhone: '0942265268',
	shopee: 'https://s.shopee.vn/20wrFc349T',
	tiktok: 'https://www.tiktok.com/@mollivn',
	facebook: 'https://www.facebook.com/284239018098473',
	youtube: 'https://www.youtube.com/channel/UCPYcsRbvpwo8QMc7S6aDrHQ',
	zaloOA: 'https://zalo.me/2503627525426511732',
	company: 'Công ty TNHH Thương mại Vinabi Việt Nam',
	address: 'Số 126 đường Chiến Thắng, phường Hà Đông, TP. Hà Nội',
	taxCode: '0109162658',
};

export const zaloLink = `https://zalo.me/${CONTACT.zaloPhone}`;
export const callLink = `tel:${CONTACT.callPhone}`;

export const formatPhone = (p: string) => p.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
export const formatPrice = (n: number) => `${n.toLocaleString('vi-VN')}đ`;

export type CategoryKey = 've-sinh' | 'sau-sinh' | 'tru-sua' | 'giac-ngu' | 'diu' | 'ca-nha';

// Nhóm hàng theo bản mẫu website-mau/molli-trang-chu anh Hiếu chọn, thêm nhóm Địu riêng.
export const CATEGORIES: { key: CategoryKey; label: string; desc: string; cover: string }[] = [
	{ key: 've-sinh', label: 'Vệ sinh cho bé', desc: 'Tăm bông, gạc rơ lưỡi, lót chống thấm, bông viên, băng dán tai', cover: 'MOL3019' },
	{ key: 'sau-sinh', label: 'Mẹ sau sinh', desc: 'Lót thấm sữa, BVS dạng quần, lót chống thấm 1 lần', cover: 'MOL3013' },
	{ key: 'tru-sua', label: 'Trữ sữa và ăn dặm', desc: 'Túi trữ sữa 100-250ml, cọ bình, hộp ăn dặm', cover: 'MOL3012' },
	{ key: 'giac-ngu', label: 'Giấc ngủ của bé', desc: 'Lót chống thấm vải, khăn xô, chăn, gối', cover: 'MOL2023' },
	{ key: 'diu', label: 'Địu em bé', desc: 'Địu ngồi, địu ngồi hông', cover: 'MOL3043' },
	{ key: 'ca-nha', label: 'Cả nhà cùng dùng', desc: 'Khăn khô, khăn ướt, khăn rửa mặt dùng 1 lần', cover: 'MOL3035' },
];

// Link Shopee của từng mã, lấy từ file "Molli - Danh sách link Shopee.xlsx" trên Drive (anh Hiếu cập nhật 13/11/2026).
// Mã chưa có link thì nút "Mua ngay" dẫn về gian hàng Molli.
export const SHOPEE_LINKS: Record<string, string> = {
	MOL3001: 'https://shopee.vn/product/335593706/25155432590',
	MOL3018: 'https://shopee.vn/product/335593706/25155432590',
	MOL3045: 'https://shopee.vn/product/335593706/25155432590',
	MOL3007: 'https://shopee.vn/product/335593706/25155432590',
	MOL3026: 'https://shopee.vn/product/335593706/29485359459',
	MOL3002: 'https://shopee.vn/product/335593706/24855459853',
	MOL3022: 'https://shopee.vn/product/335593706/26984747370',
	MOL3031: 'https://shopee.vn/product/335593706/41451873963',
	MOL3030: 'https://shopee.vn/product/335593706/41451873963',
	MOL3015: 'https://shopee.vn/product/335593706/25987918331',
	MOL3010: 'https://shopee.vn/product/335593706/25987918331',
	MOL3011: 'https://shopee.vn/product/335593706/25987918331',
	MOL3012: 'https://shopee.vn/product/335593706/25987918331',
	MOL0035: 'https://shopee.vn/product/335593706/28566025158',
	MOL3013: 'https://shopee.vn/product/335593706/25889707749',
	MOL3014: 'https://shopee.vn/product/335593706/25889707749',
	MOL3006: 'https://shopee.vn/product/335593706/25455502627',
	MOL3028: 'https://shopee.vn/product/335593706/41910982336',
	MOL3029: 'https://shopee.vn/product/335593706/41910982336',
	MOL3025: 'https://shopee.vn/product/335593706/25133437831',
	MOL3038: 'https://shopee.vn/product/335593706/29330476199',
	MOL3039: 'https://shopee.vn/product/335593706/29330476199',
	MOL3040: 'https://shopee.vn/product/335593706/29330476199',
	MOL3023: 'https://shopee.vn/product/335593706/29330476199',
	MOL3019: 'https://shopee.vn/product/335593706/29330476199',
	MOL3020: 'https://shopee.vn/product/335593706/29330476199',
	MOL3016: 'https://shopee.vn/product/335593706/29323251587',
	MOL3036: 'https://shopee.vn/product/335593706/29323251587',
	MOL3041: 'https://shopee.vn/product/335593706/29323251587',
	MOL3032: 'https://shopee.vn/product/335593706/41652617890',
	MOL3033: 'https://shopee.vn/product/335593706/41652617890',
	MOL3035: 'https://shopee.vn/product/335593706/41652617890',
	MOL3008: 'https://shopee.vn/product/335593706/24822962361',
	MOL3046: 'https://shopee.vn/product/335593706/47013056614',
	MOL3048: 'https://shopee.vn/product/335593706/49813051374',
	MOL3042: 'https://shopee.vn/product/335593706/44909373087',
	MOL2014: 'https://shopee.vn/product/335593706/24304672212',
	MOL2028: 'https://shopee.vn/product/335593706/25805570655',
	MOL2015: 'https://shopee.vn/product/335593706/25008571951',
	MOL2016: 'https://shopee.vn/product/335593706/24214523044',
	MOL2059: 'https://shopee.vn/product/335593706/43858067762',
	MOL2030: 'https://shopee.vn/product/335593706/24705485756',
	MOL2003: 'https://shopee.vn/product/335593706/25518538710',
	MOL2031: 'https://shopee.vn/product/335593706/25455519452',
	MOL2023: 'https://shopee.vn/product/335593706/25806609775',
	MOL2026: 'https://shopee.vn/product/335593706/24605106510',
	MOL2058: 'https://shopee.vn/product/335593706/25504598770',
	MOL2053: 'https://shopee.vn/product/335593706/25256240410',
	MOL2002: 'https://shopee.vn/product/335593706/25663588820',
	MOL2029: 'https://shopee.vn/product/335593706/25406615893',
	MOL3003: 'https://shopee.vn/product/335593706/27305802149',
	MOL3043: 'https://shopee.vn/product/335593706/50709308514',
};

export const shopeeLink = (code: string) => SHOPEE_LINKS[code] ?? CONTACT.shopee;

export interface Product {
	code: string;
	name: string;
	spec: string;
	note: string;
	price: number;
	cat: CategoryKey;
	/** Thứ tự trong tab Nổi bật (1 = đầu tiên). Bỏ trống = không nổi bật. */
	featured?: number;
}

// Chỉ ghi điều có trong file thông tin sản phẩm; không ghi "100%" và các câu còn chờ xác minh.
export const PRODUCTS: Product[] = [
	{ code: 'MOL3001', name: 'Tăm bông xoắn ốc và đầu dẹt', spec: '200 que/hộp', note: 'Thân giấy, cho trẻ em và người lớn.', price: 28000, cat: 've-sinh', featured: 4 },
	{ code: 'MOL3018', name: 'Tăm bông hai đầu tròn', spec: '200 que/hộp', note: 'Làm từ bông tự nhiên, cho trẻ sơ sinh và trẻ em.', price: 30000, cat: 've-sinh' },
	{ code: 'MOL3045', name: 'Tăm bông sơ sinh đầu tròn nhỏ', spec: '200 que/hộp', note: 'Đầu nhỏ, dành cho trẻ sơ sinh.', price: 30000, cat: 've-sinh' },
	{ code: 'MOL3007', name: 'Tăm bông trẻ em', spec: '400 que/hộp', note: 'Hai đầu dẹt và xoắn ốc. Trẻ em và người lớn.', price: 45000, cat: 've-sinh' },
	{ code: 'MOL3050', name: 'Tăm bông sơ sinh đầu hồ lô', spec: '110 que/hộp', note: 'Làm từ bông tự nhiên, thân giấy.', price: 38000, cat: 've-sinh' },
	{ code: 'MOL3026', name: 'Tăm bông trẻ em', spec: '600 que/hộp', note: 'Hai đầu dẹt và xoắn ốc riêng. Trẻ em và người lớn.', price: 61000, cat: 've-sinh' },
	{ code: 'MOL3002', name: 'Gạc rơ lưỡi cho bé', spec: '30 cái/hộp', note: 'Đầu sóng 3D, dùng một lần. Bé 0-36 tháng.', price: 80000, cat: 've-sinh', featured: 2 },
	{ code: 'MOL3038', name: 'Lót chống thấm 1 lần size S', spec: '32 miếng/túi · 25x33cm', note: 'Túi nhỏ tiện mang đi. Viền cách ly 3cm, giữ khô thoáng.', price: 84000, cat: 've-sinh' },
	{ code: 'MOL3039', name: 'Lót chống thấm 1 lần size M', spec: '20 miếng/túi · 33x45cm', note: 'Túi nhỏ tiện mang đi. Viền cách ly 3cm, giữ khô thoáng.', price: 84000, cat: 've-sinh' },
	{ code: 'MOL3040', name: 'Lót chống thấm 1 lần size L', spec: '12 miếng/túi · 45x60cm', note: 'Túi nhỏ tiện mang đi. Viền cách ly 3cm, giữ khô thoáng.', price: 84000, cat: 've-sinh' },
	{ code: 'MOL3023', name: 'Lót chống thấm 1 lần size S', spec: '100 miếng/túi · 25x33cm', note: 'Túi lớn dùng ở nhà. Viền cách ly 3cm, giữ khô thoáng.', price: 198000, cat: 've-sinh' },
	{ code: 'MOL3019', name: 'Lót chống thấm 1 lần size M', spec: '60 miếng/túi · 33x45cm', note: 'Túi lớn dùng ở nhà. Viền cách ly 3cm, giữ khô thoáng.', price: 198000, cat: 've-sinh', featured: 1 },
	{ code: 'MOL3020', name: 'Lót chống thấm 1 lần size L', spec: '35 miếng/túi · 45x60cm', note: 'Túi lớn dùng ở nhà. Viền cách ly 3cm, giữ khô thoáng.', price: 198000, cat: 've-sinh' },
	{ code: 'MOL3051', name: 'Tấm lót phân su sơ sinh', spec: '30 miếng/túi · 19x21cm', note: 'Lót trong tã những ngày đầu, sản xuất tại Việt Nam.', price: 40000, cat: 've-sinh' },
	{ code: 'MOL3031', name: 'Viên bông ngọc trai 1g', spec: '100 viên/túi', note: 'Bông thiên nhiên, đã tiệt trùng, cả nhà dùng được.', price: 52000, cat: 've-sinh' },
	{ code: 'MOL3030', name: 'Viên bông ngọc trai 0,5g', spec: '200 viên/túi', note: 'Viên nhỏ, bông thiên nhiên, đã tiệt trùng.', price: 52000, cat: 've-sinh' },
	{ code: 'MOL3022', name: 'Băng dán tai chống nước', spec: '30 miếng/hộp · 4,5x7cm', note: 'Dán vành tai cho bé khi tắm, khi bơi.', price: 83000, cat: 've-sinh' },
	{ code: 'MOL3041', name: 'Khăn vải khô đa năng 300g', spec: 'Khoảng 208 tờ · 20x14cm', note: 'Túi nhỏ gọn, sản xuất tại Việt Nam.', price: 61000, cat: 'ca-nha' },
	{ code: 'MOL3036', name: 'Khăn vải khô đa năng 600g', spec: 'Khoảng 416 tờ · 20x14cm', note: 'Vải không dệt, sản xuất tại Việt Nam.', price: 104000, cat: 'ca-nha' },
	{ code: 'MOL3016', name: 'Khăn vải khô đa năng 900g', spec: 'Khoảng 620 tờ · 20x14cm', note: 'Thấm nước lạnh và ấm, túi zip.', price: 154000, cat: 'ca-nha', featured: 5 },
	{ code: 'MOL3042', name: 'Khăn ướt Molli', spec: '80 tờ/túi · 18x14cm', note: 'Vải không dệt, không cồn, không paraben. Sản xuất tại Việt Nam.', price: 31000, cat: 'ca-nha', featured: 6 },
	{ code: 'MOL3032', name: 'Khăn rửa mặt dùng 1 lần', spec: '60 tờ/bịch · 20x20cm', note: 'Sợi thực vật, không dệt. Dạng rút tiện mang đi.', price: 72000, cat: 'ca-nha' },
	{ code: 'MOL3033', name: 'Khăn rửa mặt dùng 1 lần', spec: '200g/túi · 20x20cm', note: 'Sợi thực vật, không dệt. Túi rút dây để bàn.', price: 76000, cat: 'ca-nha' },
	{ code: 'MOL3035', name: 'Khăn rửa mặt dùng 1 lần', spec: '160 tờ/bịch · 19x20cm', note: 'Sợi thực vật, không dệt. Bịch lớn cho cả nhà.', price: 161000, cat: 'ca-nha' },

	{ code: 'MOL3013', name: 'Miếng lót thấm sữa', spec: '50 miếng/túi', note: '6 lớp, 3 lớp chống thấm ngược, gói riêng từng miếng.', price: 85000, cat: 'sau-sinh' },
	{ code: 'MOL3014', name: 'Miếng lót thấm sữa', spec: '100 miếng/túi', note: '6 lớp, 3 lớp chống thấm ngược, gói riêng từng miếng.', price: 145000, cat: 'sau-sinh', featured: 7 },
	{ code: 'MOL3006', name: 'Phễu hứng sữa silicon', spec: '2 cái/hộp · 100ml', note: 'Silicon, tiệt trùng được.', price: 108000, cat: 'sau-sinh' },
	{ code: 'MOL3028', name: 'BVS dạng quần sau sinh size L', spec: '5 miếng/túi · vòng hông 85-110cm', note: 'Mặc như quần lót, ôm bụng.', price: 86000, cat: 'sau-sinh' },
	{ code: 'MOL3029', name: 'BVS dạng quần sau sinh size XL', spec: '5 miếng/túi · vòng hông 105-125cm', note: 'Mặc như quần lót, cỡ lớn cho mẹ sau sinh.', price: 86000, cat: 'sau-sinh' },
	{ code: 'MOL3025', name: 'Lót chống thấm cho mẹ sau sinh và người già', spec: '10 miếng/túi · 60x90cm', note: 'Dùng 1 lần, thấm nhanh, chống thấm ngược.', price: 94000, cat: 'sau-sinh' },

	{ code: 'MOL3015', name: 'Túi trữ sữa 100ml', spec: '30 túi/hộp', note: 'Khóa zip đôi, có vòi đổ, không BPA.', price: 91000, cat: 'tru-sua' },
	{ code: 'MOL3010', name: 'Túi trữ sữa 150ml', spec: '30 túi/hộp', note: 'Khóa zip đôi, có vòi đổ, không BPA.', price: 95000, cat: 'tru-sua' },
	{ code: 'MOL3011', name: 'Túi trữ sữa 200ml', spec: '30 túi/hộp', note: 'Khóa zip đôi, có vòi đổ, không BPA.', price: 100000, cat: 'tru-sua' },
	{ code: 'MOL3012', name: 'Túi trữ sữa 250ml', spec: '30 túi/hộp', note: 'Khóa zip đôi, có vòi đổ, không BPA.', price: 105000, cat: 'tru-sua', featured: 3 },
	{ code: 'MOL0035', name: 'Túi trữ sữa bột 50g', spec: '30 túi/hộp', note: 'Khoảng 5 thìa sữa mỗi túi, bé 0-12 tháng.', price: 86000, cat: 'tru-sua' },
	{ code: 'MOL3048', name: 'Set hộp đựng thực phẩm', spec: '3 hộp/bộ', note: 'Nhựa PP không BPA, lồng gọn, có vạch chia ml.', price: 135000, cat: 'tru-sua' },
	{ code: 'MOL3008', name: 'Bộ cọ rửa bình sữa 4 chi tiết', spec: '4 món/vỉ', note: 'Cọ bình, cọ núm ti, cọ cổ chữ U, cọ ống hút.', price: 86000, cat: 'tru-sua' },
	{ code: 'MOL3046', name: 'Bộ cọ rửa bình sữa 3 chi tiết', spec: '3 món/vỉ', note: 'Cọ bình, cọ núm ti, cọ ống hút. Không BPA.', price: 102000, cat: 'tru-sua', featured: 8 },

	{ code: 'MOL2015', name: 'Khăn sữa xô Muslin', spec: '5 khăn/hộp · 30x30cm', note: 'Muslin 2 lớp, viền ren. Bé 0-36 tháng.', price: 101000, cat: 'giac-ngu' },
	{ code: 'MOL2016', name: 'Khăn yếm xô Muslin 2 in 1', spec: '3 khăn/hộp · 25x25cm', note: 'Muslin 4 lớp, có cúc bấm, vừa làm khăn vừa làm yếm.', price: 90000, cat: 'giac-ngu' },
	{ code: 'MOL2030', name: 'Khăn sữa Premium Bamboo', spec: '6 khăn/hộp · 30x30cm', note: 'Làm từ sợi tre, không nhuộm màu.', price: 105000, cat: 'giac-ngu' },
	{ code: 'MOL2059', name: 'Khăn sữa 6 lớp', spec: '3 khăn/hộp · 27x27cm', note: 'Làm từ cotton 6 lớp. Bé 0-36 tháng.', price: 107000, cat: 'giac-ngu' },
	{ code: 'MOL2014', name: 'Khăn xô Muslin đa năng', spec: '100x100cm · 1 khăn', note: 'Làm từ cotton 2 lớp. Từ 0 tháng.', price: 131000, cat: 'giac-ngu' },
	{ code: 'MOL2028', name: 'Khăn xô Premium Bamboo', spec: '120x120cm · 1 khăn', note: 'Làm từ sợi tre. Từ 0 tháng.', price: 154000, cat: 'giac-ngu' },
	{ code: 'MOL2058', name: 'Chăn xô 6 lớp', spec: '80x100cm', note: 'Làm từ cotton 6 lớp. Từ 3 tháng.', price: 192000, cat: 'giac-ngu' },
	{ code: 'MOL2023', name: 'Chăn xô 3 lớp in hình', spec: '100x120cm', note: 'Làm từ cotton 3 lớp, có lỗ thoáng khí.', price: 270000, cat: 'giac-ngu' },
	{ code: 'MOL2026', name: 'Chăn xô ủ 3 lớp in hình', spec: '90x90cm', note: 'Làm từ cotton 3 lớp. Từ 0 tháng.', price: 260000, cat: 'giac-ngu' },
	{ code: 'MOL2053', name: 'Chăn lông hạt đậu', spec: '100x120cm', note: 'Vải lông nhung hạt đậu. Từ 3 tháng.', price: 302000, cat: 'giac-ngu' },
	{ code: 'MOL2029', name: 'Lót gối sơ sinh xô 6 lớp', spec: '25x40cm · 1 gối', note: 'Làm từ cotton 6 lớp. Bé 0-36 tháng.', price: 64000, cat: 'giac-ngu' },
	{ code: 'MOL2002', name: 'Gối cao su non in hình, thêu hình', spec: '22x38x3cm · 1 gối', note: 'Vỏ cotton chần bông, ruột cao su non. Từ 3 tuổi.', price: 265000, cat: 'giac-ngu' },
	{ code: 'MOL2003', name: 'Lót chống thấm vải in hình, thêu hình', spec: '50x70cm · 1 tấm', note: 'Mặt trên cotton chần bông, mặt dưới chống thấm. Bé 0-36 tháng.', price: 169000, cat: 'giac-ngu' },
	{ code: 'MOL2031', name: 'Tấm lót chống thấm 4 lớp', spec: '50x70cm · 1 tấm', note: 'Hai lớp ngoài làm từ cotton, lớp TPU chống thấm.', price: 122000, cat: 'giac-ngu' },

	// Địu: chỉ ghi thông số trùng khớp giữa bảng giá và file thông tin sản phẩm.
	// Độ tuổi và tải trọng hai nguồn đang lệch nhau nên chưa đưa lên web.
	{ code: 'MOL3003', name: 'Địu ngồi cho bé', spec: '1 địu/hộp', note: 'Đệm mút, bệ xốp cứng, ghế và dây đeo tháo rời.', price: 414000, cat: 'diu' },
	{ code: 'MOL3043', name: 'Địu ngồi hông cao cấp', spec: '1 địu/hộp · 4 màu', note: 'Có ngăn đựng đồ. Màu kem, xám, đen, hồng.', price: 615000, cat: 'diu' },
];

export const productUrl = (code: string) => `/san-pham/${code.toLowerCase()}/`;

// Video feedback thật của khách (bản gốc trong brain: Molli/video-feedback.md), mã theo bảng video-feedback.
export const FEEDBACK_VIDEOS: { slug: string; codes: string[]; label: string; text: string }[] = [
	{ codes: ['MOL3001'], slug: 'tam-bong-mol3001', label: 'Tăm bông xoắn ốc 200 que', text: 'Mẹ dùng vệ sinh tai cho bé hằng ngày.' },
	{"slug": "verified-mol3048-1DB9CpWDA76X7fynvdRJ6jFTUr7HZgVqj", "codes": ["MOL3048"], "label": "Set hộp đựng thực phẩm MOL3048", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol2059-1GxTmyl5tgyp3kOfa1oFi12IeluTeT6my", "codes": ["MOL2059"], "label": "Khăn sữa 6 lớp MOL2059", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3014-182zab6VsyWpSroB6CG882QdtdBPA8fhp", "codes": ["MOL3014"], "label": "Miếng lót thấm sữa MOL3014", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3022-1_C59tc1WVZOoR1gooDU06a2ISLKhdIeQ", "codes": ["MOL3022"], "label": "Băng dán tai chống nước MOL3022", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3002-1Fba2X7GhBNn0sCoS0o6zA8A3D8rKA-0D", "codes": ["MOL3002"], "label": "Gạc rơ lưỡi cho bé MOL3002", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3042-1UgzXOEvMe3z9LF_KYOvqBhK8e4DgP_Rp", "codes": ["MOL3042"], "label": "Khăn ướt Molli MOL3042", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3046-1AJ1Aj5TiXSaF1lG5hZ1SvEU1qfWEEN_m", "codes": ["MOL3046"], "label": "Bộ cọ rửa bình sữa 3 chi tiết MOL3046", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3011-1Zq1--VV1xR9MTu0y7naBCBDrW7_xrwNX", "codes": ["MOL3011"], "label": "Túi trữ sữa 200ml MOL3011", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3010-12A0zdGbfS4YY1h78xs7UVhi82q2KuwZd", "codes": ["MOL3010"], "label": "Túi trữ sữa 150ml MOL3010", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3039-1riF2_nLagpnF1PH9wmC9OHejV3_ruV65", "codes": ["MOL3039"], "label": "Lót chống thấm 1 lần size M MOL3039", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3019-16c4beaTF1-_EKkLi8VvS-Om38rFyRGoI", "codes": ["MOL3019"], "label": "Lót chống thấm 1 lần size M MOL3019", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3023-1T98NnY8UvbpAyxxakBbIhwUAnJHH6YSi", "codes": ["MOL3023"], "label": "Lót chống thấm 1 lần size S MOL3023", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3020-1lhI-YQq7t9_u9XdqGZV-G3mOq36PMGZl", "codes": ["MOL3020"], "label": "Lót chống thấm 1 lần size L MOL3020", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol2014-1xuLCeov7TvxwkIX2uxqZZfPq16TbQn7T", "codes": ["MOL2014"], "label": "Khăn xô Muslin đa năng MOL2014", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3031-1oO7p98-KBJtXQhLWNuJcR5iHpzh1GHbN", "codes": ["MOL3031"], "label": "Viên bông ngọc trai 1g MOL3031", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3028-1XkUBlVD6k4BCN-Z2nHnWgsrhUl5j4fV5", "codes": ["MOL3028"], "label": "BVS dạng quần sau sinh size L MOL3028", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3025-1Qbb0fEjfv-DahxIL0muMfdu4KE5qNWWt", "codes": ["MOL3025"], "label": "Lót chống thấm cho mẹ sau sinh và người già MOL3025", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3003-1uMTWRLn7-iMylLyf2HFUQU4amQmtuEFi", "codes": ["MOL3003"], "label": "Địu ngồi cho bé MOL3003", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol2028-1QxtyktXitufpSP3qDphXPqudlkE4Ducy", "codes": ["MOL2028"], "label": "Khăn xô Premium Bamboo MOL2028", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol0035-1xljVh6qfIx9nTD_oNAoxUvp4Zjqtug4u", "codes": ["MOL0035"], "label": "Túi trữ sữa bột 50g MOL0035", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3035-1YjXmphOQrNCSBijKvDmP4i6qX7MZ-iBX", "codes": ["MOL3035"], "label": "Khăn rửa mặt dùng 1 lần MOL3035", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3030-12LA36_0cyujsqkvPZDe5yu5ol-pbZeFP", "codes": ["MOL3030"], "label": "Viên bông ngọc trai 0,5g MOL3030", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol2058-1LjWVOZpbEKoEpXPMJYzZx4KT0ovht3kO", "codes": ["MOL2058"], "label": "Chăn xô 6 lớp MOL2058", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3012-11d3UK6qVKXYwTXegYqRy8CQ-zzlmXMLT", "codes": ["MOL3012"], "label": "Túi trữ sữa 250ml MOL3012", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3040-1LSyjhoQq08P4Dqx-QMGYk7fuJ2-6-NOR", "codes": ["MOL3040"], "label": "Lót chống thấm 1 lần size L MOL3040", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol2030-1Zt-Q98GzeX_eWYeyuAEEXhsoYtkVwhjI", "codes": ["MOL2030"], "label": "Khăn sữa Premium Bamboo MOL2030", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol2053-1YsZ1dsc8n-1Kv1e3mOYBYOifORl-Qmam", "codes": ["MOL2053"], "label": "Chăn lông hạt đậu MOL2053", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3038-1Js0N2KzcexIDjPdCZNc3oTfZbC97V_Vq", "codes": ["MOL3038"], "label": "Lót chống thấm 1 lần size S MOL3038", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3029-1fCxYCMt51QBcs994wL1jm2hm9gNKyBaL", "codes": ["MOL3029"], "label": "BVS dạng quần sau sinh size XL MOL3029", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3013-1qX6dptnESLGmq3QFQmSkh3b-SxDotBrm", "codes": ["MOL3013"], "label": "Miếng lót thấm sữa MOL3013", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3033-1UvHNh2TwTL0E4TKDB_du0EvlaiPt6gb-", "codes": ["MOL3033"], "label": "Khăn rửa mặt dùng 1 lần MOL3033", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3008-1WC29Ll1pB1eAQoy8Yy3M7ghkIlt4PogA", "codes": ["MOL3008"], "label": "Bộ cọ rửa bình sữa 4 chi tiết MOL3008", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3016-1360iad9b-8xwfo0Mh_f7XhG2JNBgnAdW", "codes": ["MOL3016"], "label": "Khăn vải khô đa năng 900g MOL3016", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3015-1gWzk-LULdnrBtzCSCMoy6gHodM974jBU", "codes": ["MOL3015"], "label": "Túi trữ sữa 100ml MOL3015", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
	{"slug": "verified-mol3026-1lRFi5WHaeXSi4sfoE-Wr77gi2YONKjl_", "codes": ["MOL3026"], "label": "Tăm bông trẻ em MOL3026", "text": "Video mở hộp và trải nghiệm sản phẩm Molli."},
];

export const PAPERS: { code: string; label: string; alt: string }[] = [
	{ code: 'MOL3002', label: 'MOL3002 Gạc rơ lưỡi', alt: 'Giấy chứng nhận hợp quy MOL3002' },
	{ code: 'MOL3012', label: 'MOL3012 Túi trữ sữa', alt: 'Phiếu kiểm nghiệm MOL3012' },
	{ code: 'MOL3013', label: 'MOL3013 Lót thấm sữa', alt: 'Phiếu thử nghiệm MOL3013' },
	{ code: 'MOL3019', label: 'MOL3019 Lót chống thấm', alt: 'Phiếu thử nghiệm lót chống thấm dùng 1 lần' },
	{ code: 'MOL3016', label: 'MOL3016 Khăn khô', alt: 'Giấy chứng nhận hợp quy khăn vải khô' },
	{ code: 'MOL3042', label: 'MOL3042 Khăn ướt', alt: 'Bản công bố hợp quy khăn ướt' },
	{ code: 'MOL3003', label: 'MOL3003 Địu em bé', alt: 'Phiếu thử nghiệm địu em bé' },
	{ code: 'MOL2058', label: 'MOL2058 Chăn xô 6 lớp', alt: 'Phiếu thử nghiệm chăn xô 6 lớp' },
	{ code: 'MOL0035', label: 'MOL0035 Túi trữ sữa bột', alt: 'Phiếu kiểm nghiệm túi trữ sữa bột' },
];

// Bản gốc nhiều trang của giấy kiểm nghiệm/tự công bố, theo từng mã.
type PaperPage = { src: string; alt: string };
const TUI_TRU_SUA: PaperPage[] = [
	{ src: '/images/molli/giay/tui-tru-sua/01.webp', alt: 'Phiếu kết quả kiểm nghiệm túi trữ sữa, Viện Kiểm nghiệm an toàn vệ sinh thực phẩm quốc gia, trang 1' },
	{ src: '/images/molli/giay/tui-tru-sua/02.webp', alt: 'Phiếu kết quả kiểm nghiệm túi trữ sữa, trang 2' },
	{ src: '/images/molli/giay/tui-tru-sua/03.webp', alt: 'Bản tự công bố sản phẩm túi trữ sữa, trang 1' },
	{ src: '/images/molli/giay/tui-tru-sua/04.webp', alt: 'Bản tự công bố sản phẩm túi trữ sữa, trang 2' },
];
const khanMat = (code: string): PaperPage[] => [
	{ src: `/images/molli/giay/${code.toLowerCase()}/01.webp`, alt: `Phiếu kết quả thử nghiệm khăn mặt dùng 1 lần ${code}, trang 1` },
	{ src: `/images/molli/giay/${code.toLowerCase()}/02.webp`, alt: `Phiếu kết quả thử nghiệm khăn mặt dùng 1 lần ${code}, trang 2` },
];
// Ba quy cách khăn khô dùng chung phiếu thử nghiệm và chứng nhận hai ngôn ngữ.
const KHAN_KHO_PAPERS: PaperPage[] = [
 { src: '/images/molli/giay/khan-kho-uot/08.webp', alt: 'Phiếu kiểm nghiệm khăn khô, trang 1/2' },
 { src: '/images/molli/giay/khan-kho-uot/09.webp', alt: 'Phiếu kiểm nghiệm khăn khô, trang 2/2' },
 { src: '/images/molli/giay/khan-kho-uot/07.webp', alt: 'Giấy chứng nhận khăn khô, bản tiếng Việt' },
 { src: '/images/molli/giay/khan-kho-uot/06.webp', alt: 'Giấy chứng nhận khăn khô, bản tiếng Anh' },
];
export const PAPER_PAGES: Record<string, PaperPage[]> = {
	"MOL3002": [{"src": "/images/molli/giay/det-may/01.webp", "alt": "Giấy chứng nhận áp dụng MOL3002"}, {"src": "/images/molli/giay/det-may/06.webp", "alt": "Phiếu thử nghiệm MOL3002, trang gốc 6"}, {"src": "/images/molli/giay/det-may/07.webp", "alt": "Phiếu thử nghiệm MOL3002, trang gốc 7"}],
	"MOL2014": [{"src": "/images/molli/giay/det-may/01.webp", "alt": "Giấy chứng nhận áp dụng MOL2014"}, {"src": "/images/molli/giay/det-may/12.webp", "alt": "Phiếu thử nghiệm MOL2014, trang gốc 12"}, {"src": "/images/molli/giay/det-may/13.webp", "alt": "Phiếu thử nghiệm MOL2014, trang gốc 13"}],
	"MOL2015": [{"src": "/images/molli/giay/det-may/01.webp", "alt": "Giấy chứng nhận áp dụng MOL2015"}, {"src": "/images/molli/giay/det-may/10.webp", "alt": "Phiếu thử nghiệm MOL2015, trang gốc 10"}, {"src": "/images/molli/giay/det-may/11.webp", "alt": "Phiếu thử nghiệm MOL2015, trang gốc 11"}],
	"MOL2058": [{"src": "/images/molli/giay/det-may/01.webp", "alt": "Giấy chứng nhận áp dụng MOL2058"}, {"src": "/images/molli/giay/det-may/08.webp", "alt": "Phiếu thử nghiệm MOL2058, trang gốc 8"}, {"src": "/images/molli/giay/det-may/09.webp", "alt": "Phiếu thử nghiệm MOL2058, trang gốc 9"}],
	"MOL3003": [{"src": "/images/molli/giay/det-may/01.webp", "alt": "Giấy chứng nhận áp dụng MOL3003"}, {"src": "/images/molli/giay/det-may/14.webp", "alt": "Phiếu thử nghiệm MOL3003, trang gốc 14"}, {"src": "/images/molli/giay/det-may/15.webp", "alt": "Phiếu thử nghiệm MOL3003, trang gốc 15"}, {"src": "/images/molli/giay/det-may/16.webp", "alt": "Phiếu thử nghiệm MOL3003, trang gốc 16"}, {"src": "/images/molli/giay/det-may/17.webp", "alt": "Phiếu thử nghiệm MOL3003, trang gốc 17"}],
	"MOL3043": [{"src": "/images/molli/giay/det-may/01.webp", "alt": "Giấy chứng nhận áp dụng MOL3043"}, {"src": "/images/molli/giay/det-may/14.webp", "alt": "Phiếu thử nghiệm MOL3043, trang gốc 14"}, {"src": "/images/molli/giay/det-may/15.webp", "alt": "Phiếu thử nghiệm MOL3043, trang gốc 15"}, {"src": "/images/molli/giay/det-may/16.webp", "alt": "Phiếu thử nghiệm MOL3043, trang gốc 16"}, {"src": "/images/molli/giay/det-may/17.webp", "alt": "Phiếu thử nghiệm MOL3043, trang gốc 17"}],
	"MOL3013": [{"src": "/images/molli/giay/det-may/01.webp", "alt": "Giấy chứng nhận áp dụng MOL3013"}, {"src": "/images/molli/giay/det-may/18.webp", "alt": "Phiếu thử nghiệm MOL3013, trang gốc 18"}, {"src": "/images/molli/giay/det-may/19.webp", "alt": "Phiếu thử nghiệm MOL3013, trang gốc 19"}],
	"MOL3014": [{"src": "/images/molli/giay/det-may/01.webp", "alt": "Giấy chứng nhận áp dụng MOL3014"}, {"src": "/images/molli/giay/det-may/18.webp", "alt": "Phiếu thử nghiệm MOL3014, trang gốc 18"}, {"src": "/images/molli/giay/det-may/19.webp", "alt": "Phiếu thử nghiệm MOL3014, trang gốc 19"}],
	"MOL3019": [{"src": "/images/molli/giay/lot-1-lan/05.webp", "alt": "Giấy chứng nhận lót chống thấm"}, {"src": "/images/molli/giay/lot-1-lan/06.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 1/2"}, {"src": "/images/molli/giay/lot-1-lan/07.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 2/2"}],
	"MOL3020": [{"src": "/images/molli/giay/lot-1-lan/05.webp", "alt": "Giấy chứng nhận lót chống thấm"}, {"src": "/images/molli/giay/lot-1-lan/06.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 1/2"}, {"src": "/images/molli/giay/lot-1-lan/07.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 2/2"}],
	"MOL3023": [{"src": "/images/molli/giay/lot-1-lan/05.webp", "alt": "Giấy chứng nhận lót chống thấm"}, {"src": "/images/molli/giay/lot-1-lan/06.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 1/2"}, {"src": "/images/molli/giay/lot-1-lan/07.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 2/2"}],
	"MOL3025": [{"src": "/images/molli/giay/lot-1-lan/05.webp", "alt": "Giấy chứng nhận lót chống thấm"}, {"src": "/images/molli/giay/lot-1-lan/06.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 1/2"}, {"src": "/images/molli/giay/lot-1-lan/07.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 2/2"}],
	"MOL3038": [{"src": "/images/molli/giay/lot-1-lan/05.webp", "alt": "Giấy chứng nhận lót chống thấm"}, {"src": "/images/molli/giay/lot-1-lan/06.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 1/2"}, {"src": "/images/molli/giay/lot-1-lan/07.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 2/2"}],
	"MOL3039": [{"src": "/images/molli/giay/lot-1-lan/05.webp", "alt": "Giấy chứng nhận lót chống thấm"}, {"src": "/images/molli/giay/lot-1-lan/06.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 1/2"}, {"src": "/images/molli/giay/lot-1-lan/07.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 2/2"}],
	"MOL3040": [{"src": "/images/molli/giay/lot-1-lan/05.webp", "alt": "Giấy chứng nhận lót chống thấm"}, {"src": "/images/molli/giay/lot-1-lan/06.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 1/2"}, {"src": "/images/molli/giay/lot-1-lan/07.webp", "alt": "Phiếu thử nghiệm mẫu gộp lót chống thấm, trang 2/2"}],
	"MOL3016": KHAN_KHO_PAPERS,
	"MOL3036": KHAN_KHO_PAPERS,
	"MOL3041": KHAN_KHO_PAPERS,
	"MOL3042": [{"src": "/images/molli/giay/khan-kho-uot/07.webp", "alt": "Giấy chứng nhận khăn ướt, bản tiếng Việt"}, {"src": "/images/molli/giay/khan-kho-uot/06.webp", "alt": "Giấy chứng nhận khăn ướt, bản tiếng Anh"}],

	MOL3010: TUI_TRU_SUA,
	MOL3011: TUI_TRU_SUA,
	MOL3012: TUI_TRU_SUA,
	MOL3015: TUI_TRU_SUA,
	MOL0035: [
		{ src: '/images/molli/giay/tui-tru-sua-bot/01.webp', alt: 'Phiếu kết quả kiểm nghiệm túi trữ sữa bột, Viện Kiểm nghiệm an toàn vệ sinh thực phẩm quốc gia, trang 1' },
		{ src: '/images/molli/giay/tui-tru-sua-bot/02.webp', alt: 'Phiếu kết quả kiểm nghiệm túi trữ sữa bột, trang 2' },
		{ src: '/images/molli/giay/tui-tru-sua-bot/03.webp', alt: 'Bản tự công bố sản phẩm túi trữ sữa bột, trang 1' },
		{ src: '/images/molli/giay/tui-tru-sua-bot/04.webp', alt: 'Bản tự công bố sản phẩm túi trữ sữa bột, trang 2' },
	],
	MOL3032: khanMat('MOL3032'),
	MOL3033: khanMat('MOL3033'),
	MOL3035: khanMat('MOL3035'),
};

// Các trang giấy tờ của một mã: bản gốc nhiều trang nếu có, không thì ảnh đơn cũ trong PAPERS.
export const paperPagesOf = (code: string): PaperPage[] => {
	if (PAPER_PAGES[code]) return PAPER_PAGES[code];
	const one = PAPERS.find((x) => x.code === code);
	return one ? [{ src: `/images/molli/giay/${code.toLowerCase()}.webp`, alt: one.alt }] : [];
};

// Ánh xạ mã tường minh; tài nguyên dùng chung khai báo mọi mã đã xác minh trong codes.
export const videosOf = (code: string) => FEEDBACK_VIDEOS.filter((v) => v.codes.includes(code));

export const imageOf = (code: string) => code.toUpperCase() === 'MOL3002'
	? '/images/molli/sp/mol3002-light-v2.webp'
	: `/images/molli/sp/${code.toLowerCase()}.webp`;

// Gợi ý theo giai đoạn (theo bản mẫu). Tổng tiền là giá lẻ cộng lại, không phải combo giảm giá.
export const STAGES: { step: string; title: string; items: { code: string; name: string; price: number }[] }[] = [
	{
		step: 'Chặng 1',
		title: 'Túi đi sinh',
		items: [
			{ code: 'MOL3002', name: 'Gạc rơ lưỡi 30 cái', price: 80000 },
			{ code: 'MOL3018', name: 'Tăm bông đầu tròn 200 que', price: 30000 },
			{ code: 'MOL3028', name: 'BVS dạng quần size L', price: 86000 },
			{ code: 'MOL3013', name: 'Lót thấm sữa 50 miếng', price: 85000 },
			{ code: 'MOL3039', name: 'Lót chống thấm M 20 miếng', price: 84000 },
			{ code: 'MOL2059', name: 'Khăn sữa 6 lớp', price: 107000 },
		],
	},
	{
		step: 'Chặng 2',
		title: 'Tháng đầu ở nhà',
		items: [
			{ code: 'MOL3031', name: 'Bông viên ngọc trai', price: 52000 },
			{ code: 'MOL3016', name: 'Khăn vải khô 900g', price: 154000 },
			{ code: 'MOL3014', name: 'Lót thấm sữa 100 miếng', price: 145000 },
			{ code: 'MOL3019', name: 'Lót chống thấm M 60 miếng', price: 198000 },
			{ code: 'MOL2030', name: 'Khăn sữa sợi tre', price: 105000 },
		],
	},
	{
		step: 'Chặng 3',
		title: 'Mẹ đi làm, trữ sữa',
		items: [
			{ code: 'MOL3012', name: 'Túi trữ sữa 250ml', price: 105000 },
			{ code: 'MOL3010', name: 'Túi trữ sữa 150ml', price: 95000 },
			{ code: 'MOL3015', name: 'Túi trữ sữa 100ml', price: 91000 },
			{ code: 'MOL3006', name: 'Phễu hứng sữa silicon', price: 108000 },
			{ code: 'MOL3008', name: 'Bộ cọ rửa bình 4 chi tiết', price: 86000 },
		],
	},
	{
		step: 'Chặng 4',
		title: 'Bé ăn dặm',
		items: [
			{ code: 'MOL3048', name: 'Set 3 hộp đựng thực phẩm', price: 135000 },
			{ code: 'MOL0035', name: 'Túi trữ sữa bột 50g', price: 86000 },
			{ code: 'MOL3046', name: 'Bộ cọ rửa bình 3 chi tiết', price: 102000 },
			{ code: 'MOL2016', name: 'Hộp 3 yếm xô Muslin', price: 90000 },
		],
	},
];
