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
	{ key: 've-sinh', label: 'Vệ sinh cho bé', desc: 'Gạc rơ lưỡi, tăm bông, khăn, lót chống thấm 1 lần', cover: 'MOL3019' },
	{ key: 'sau-sinh', label: 'Mẹ sau sinh', desc: 'Lót thấm sữa, BVS dạng quần, lót chống thấm 1 lần', cover: 'MOL3013' },
	{ key: 'tru-sua', label: 'Trữ sữa và ăn dặm', desc: 'Túi trữ sữa 100-250ml, cọ bình, hộp ăn dặm', cover: 'MOL3012' },
	{ key: 'giac-ngu', label: 'Giấc ngủ của bé', desc: 'Lót chống thấm vải, khăn xô, chăn, gối', cover: 'MOL2023' },
	{ key: 'diu', label: 'Địu em bé', desc: 'Địu ngồi, địu ngồi hông', cover: 'MOL3043' },
	{ key: 'ca-nha', label: 'Cả nhà cùng dùng', desc: 'Khăn rửa mặt dùng 1 lần cho cả gia đình', cover: 'MOL3035' },
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
	{ code: 'MOL3002', name: 'Gạc rơ lưỡi cho bé', spec: '30 cái/hộp', note: 'Đầu sóng 3D, dùng một lần. Bé 0-36 tháng.', price: 80000, cat: 've-sinh', featured: 2 },
	{ code: 'MOL3018', name: 'Tăm bông hai đầu tròn', spec: '200 que/hộp', note: 'Làm từ bông tự nhiên, cho trẻ sơ sinh và trẻ em.', price: 30000, cat: 've-sinh' },
	{ code: 'MOL3050', name: 'Tăm bông sơ sinh đầu hồ lô', spec: '110 que/hộp', note: 'Làm từ bông tự nhiên, thân giấy.', price: 38000, cat: 've-sinh' },
	{ code: 'MOL3045', name: 'Tăm bông sơ sinh đầu tròn nhỏ', spec: '200 que/hộp', note: 'Đầu nhỏ, dành cho trẻ sơ sinh.', price: 30000, cat: 've-sinh' },
	{ code: 'MOL3001', name: 'Tăm bông xoắn ốc và đầu dẹt', spec: '200 que/hộp', note: 'Thân giấy, cho trẻ em và người lớn.', price: 28000, cat: 've-sinh', featured: 4 },
	{ code: 'MOL3007', name: 'Tăm bông trẻ em', spec: '400 que/hộp', note: 'Hai đầu dẹt và xoắn ốc. Trẻ em và người lớn.', price: 45000, cat: 've-sinh' },
	{ code: 'MOL3031', name: 'Viên bông ngọc trai 1g', spec: '100 viên/túi', note: 'Bông thiên nhiên, đã tiệt trùng, cả nhà dùng được.', price: 52000, cat: 've-sinh' },
	{ code: 'MOL3016', name: 'Khăn vải khô đa năng 900g', spec: 'Khoảng 620 tờ · 20x14cm', note: 'Thấm nước lạnh và ấm, túi zip.', price: 154000, cat: 've-sinh', featured: 5 },
	{ code: 'MOL3036', name: 'Khăn vải khô đa năng 600g', spec: 'Khoảng 416 tờ · 20x14cm', note: 'Vải không dệt, sản xuất tại Việt Nam.', price: 104000, cat: 've-sinh' },
	{ code: 'MOL3041', name: 'Khăn vải khô đa năng 300g', spec: 'Khoảng 208 tờ · 20x14cm', note: 'Túi nhỏ gọn, sản xuất tại Việt Nam.', price: 61000, cat: 've-sinh' },
	{ code: 'MOL3042', name: 'Khăn ướt Molli', spec: '80 tờ/túi · 18x14cm', note: 'Vải không dệt, không cồn, không paraben. Sản xuất tại Việt Nam.', price: 31000, cat: 've-sinh', featured: 6 },
	{ code: 'MOL3032', name: 'Khăn rửa mặt dùng 1 lần', spec: '60 tờ/bịch · 20x20cm', note: 'Sợi thực vật, không dệt. Dạng rút tiện mang đi.', price: 72000, cat: 'ca-nha' },
	{ code: 'MOL3033', name: 'Khăn rửa mặt dùng 1 lần', spec: '200g/túi · 20x20cm', note: 'Sợi thực vật, không dệt. Túi rút dây để bàn.', price: 76000, cat: 'ca-nha' },
	{ code: 'MOL3035', name: 'Khăn rửa mặt dùng 1 lần', spec: '160 tờ/bịch · 19x20cm', note: 'Sợi thực vật, không dệt. Bịch lớn cho cả nhà.', price: 161000, cat: 'ca-nha' },
	{ code: 'MOL3022', name: 'Băng dán tai chống nước', spec: '30 miếng/hộp · 4,5x7cm', note: 'Dán vành tai cho bé khi tắm, khi bơi.', price: 83000, cat: 've-sinh' },
	{ code: 'MOL3051', name: 'Tấm lót phân su sơ sinh', spec: '30 miếng/túi · 19x21cm', note: 'Lót trong tã những ngày đầu, sản xuất tại Việt Nam.', price: 40000, cat: 've-sinh' },
	{ code: 'MOL3038', name: 'Lót chống thấm 1 lần size S', spec: '32 miếng/túi · 25x33cm', note: 'Túi nhỏ tiện mang đi. Viền cách ly 3cm, giữ khô thoáng.', price: 84000, cat: 've-sinh' },
	{ code: 'MOL3039', name: 'Lót chống thấm 1 lần size M', spec: '20 miếng/túi · 33x45cm', note: 'Túi nhỏ tiện mang đi. Viền cách ly 3cm, giữ khô thoáng.', price: 84000, cat: 've-sinh' },
	{ code: 'MOL3040', name: 'Lót chống thấm 1 lần size L', spec: '12 miếng/túi · 45x60cm', note: 'Túi nhỏ tiện mang đi. Viền cách ly 3cm, giữ khô thoáng.', price: 84000, cat: 've-sinh' },
	{ code: 'MOL3023', name: 'Lót chống thấm 1 lần size S', spec: '100 miếng/túi · 25x33cm', note: 'Túi lớn dùng ở nhà. Viền cách ly 3cm, giữ khô thoáng.', price: 198000, cat: 've-sinh' },
	{ code: 'MOL3019', name: 'Lót chống thấm 1 lần size M', spec: '60 miếng/túi · 33x45cm', note: 'Túi lớn dùng ở nhà. Viền cách ly 3cm, giữ khô thoáng.', price: 198000, cat: 've-sinh', featured: 1 },
	{ code: 'MOL3020', name: 'Lót chống thấm 1 lần size L', spec: '35 miếng/túi · 45x60cm', note: 'Túi lớn dùng ở nhà. Viền cách ly 3cm, giữ khô thoáng.', price: 198000, cat: 've-sinh' },

	{ code: 'MOL3014', name: 'Miếng lót thấm sữa', spec: '100 miếng/túi', note: '6 lớp, 3 lớp chống thấm ngược, gói riêng từng miếng.', price: 145000, cat: 'sau-sinh', featured: 7 },
	{ code: 'MOL3013', name: 'Miếng lót thấm sữa', spec: '50 miếng/túi', note: '6 lớp, 3 lớp chống thấm ngược, gói riêng từng miếng.', price: 85000, cat: 'sau-sinh' },
	{ code: 'MOL3028', name: 'BVS dạng quần sau sinh size L', spec: '5 miếng/túi · vòng hông 85-110cm', note: 'Mặc như quần lót, ôm bụng.', price: 86000, cat: 'sau-sinh' },
	{ code: 'MOL3029', name: 'BVS dạng quần sau sinh size XL', spec: '5 miếng/túi · vòng hông 105-125cm', note: 'Mặc như quần lót, cỡ lớn cho mẹ sau sinh.', price: 86000, cat: 'sau-sinh' },
	{ code: 'MOL3006', name: 'Phễu hứng sữa silicon', spec: '2 cái/hộp · 100ml', note: 'Silicon, tiệt trùng được.', price: 108000, cat: 'sau-sinh' },
	{ code: 'MOL3025', name: 'Lót chống thấm cho mẹ sau sinh và người già', spec: '10 miếng/túi · 60x90cm', note: 'Dùng 1 lần, thấm nhanh, chống thấm ngược.', price: 94000, cat: 'sau-sinh' },

	{ code: 'MOL3015', name: 'Túi trữ sữa 100ml', spec: '30 túi/hộp', note: 'Khóa zip đôi, có vòi đổ, không BPA.', price: 91000, cat: 'tru-sua' },
	{ code: 'MOL3010', name: 'Túi trữ sữa 150ml', spec: '30 túi/hộp', note: 'Khóa zip đôi, có vòi đổ, không BPA.', price: 95000, cat: 'tru-sua' },
	{ code: 'MOL3011', name: 'Túi trữ sữa 200ml', spec: '30 túi/hộp', note: 'Khóa zip đôi, có vòi đổ, không BPA.', price: 100000, cat: 'tru-sua' },
	{ code: 'MOL3012', name: 'Túi trữ sữa 250ml', spec: '30 túi/hộp', note: 'Khóa zip đôi, có vòi đổ, không BPA.', price: 105000, cat: 'tru-sua', featured: 3 },
	{ code: 'MOL0035', name: 'Túi trữ sữa bột 50g', spec: '30 túi/hộp', note: 'Khoảng 5 thìa sữa mỗi túi, bé 0-12 tháng.', price: 86000, cat: 'tru-sua' },
	{ code: 'MOL3048', name: 'Set hộp đựng thực phẩm', spec: '3 hộp/bộ', note: 'Nhựa PP không BPA, lồng gọn, có vạch chia ml.', price: 135000, cat: 'tru-sua' },
	{ code: 'MOL3008', name: 'Bộ cọ rửa bình sữa 4 chi tiết', spec: '4 món/vỉ', note: 'Cọ bình, cọ núm ti, cọ cổ chữ U, cọ ống hút.', price: 86000, cat: 'tru-sua' },
	{ code: 'MOL3046', name: 'Bộ cọ rửa bình sữa 3 chi tiết', spec: '3 món/vỉ', note: 'Cọ bình, cọ núm ti, cọ ống hút. Không BPA.', price: 102000, cat: 'tru-sua', featured: 8 },

	{ code: 'MOL2031', name: 'Tấm lót chống thấm 4 lớp', spec: '50x70cm · 1 tấm', note: 'Hai lớp ngoài làm từ cotton, lớp TPU chống thấm.', price: 122000, cat: 'giac-ngu' },
	{ code: 'MOL2059', name: 'Khăn sữa 6 lớp', spec: '3 khăn/hộp · 27x27cm', note: 'Làm từ cotton 6 lớp. Bé 0-36 tháng.', price: 107000, cat: 'giac-ngu' },
	{ code: 'MOL2030', name: 'Khăn sữa Premium Bamboo', spec: '6 khăn/hộp · 30x30cm', note: 'Làm từ sợi tre, không nhuộm màu.', price: 105000, cat: 'giac-ngu' },
	{ code: 'MOL2028', name: 'Khăn xô Premium Bamboo', spec: '120x120cm · 1 khăn', note: 'Làm từ sợi tre. Từ 0 tháng.', price: 154000, cat: 'giac-ngu' },
	{ code: 'MOL2023', name: 'Chăn xô 3 lớp in hình', spec: '100x120cm', note: 'Làm từ cotton 3 lớp, có lỗ thoáng khí.', price: 270000, cat: 'giac-ngu' },
	{ code: 'MOL2026', name: 'Chăn xô ủ 3 lớp in hình', spec: '90x90cm', note: 'Làm từ cotton 3 lớp. Từ 0 tháng.', price: 260000, cat: 'giac-ngu' },
	{ code: 'MOL2058', name: 'Chăn xô 6 lớp', spec: '80x100cm', note: 'Làm từ cotton 6 lớp. Từ 3 tháng.', price: 192000, cat: 'giac-ngu' },
	{ code: 'MOL2053', name: 'Chăn lông hạt đậu', spec: '100x120cm', note: 'Vải lông nhung hạt đậu. Từ 3 tháng.', price: 302000, cat: 'giac-ngu' },
	{ code: 'MOL2029', name: 'Lót gối sơ sinh xô 6 lớp', spec: '25x40cm · 1 gối', note: 'Làm từ cotton 6 lớp. Bé 0-36 tháng.', price: 64000, cat: 'giac-ngu' },

	// Địu: chỉ ghi thông số trùng khớp giữa bảng giá và file thông tin sản phẩm.
	// Độ tuổi và tải trọng hai nguồn đang lệch nhau nên chưa đưa lên web.
	{ code: 'MOL3003', name: 'Địu ngồi cho bé', spec: '1 địu/hộp', note: 'Đệm mút, bệ xốp cứng, ghế và dây đeo tháo rời.', price: 414000, cat: 'diu' },
	{ code: 'MOL3043', name: 'Địu ngồi hông cao cấp', spec: '1 địu/hộp · 4 màu', note: 'Có ngăn đựng đồ. Màu kem, xám, đen, hồng.', price: 615000, cat: 'diu' },
];

export const imageOf = (code: string) => `/images/molli/sp/${code.toLowerCase()}.webp`;

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
