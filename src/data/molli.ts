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
	address: '126 Chiến Thắng, Hà Đông, Hà Nội',
};

export const zaloLink = `https://zalo.me/${CONTACT.zaloPhone}`;
export const callLink = `tel:${CONTACT.callPhone}`;

export const formatPhone = (p: string) => p.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
export const formatPrice = (n: number) => `${n.toLocaleString('vi-VN')}đ`;

export type CategoryKey = 've-sinh' | 'me-sua' | 'lot' | 'khan' | 'chan-goi' | 'an-dam';

export const CATEGORIES: { key: CategoryKey; label: string }[] = [
	{ key: 've-sinh', label: 'Vệ sinh cho bé' },
	{ key: 'me-sua', label: 'Mẹ & sữa' },
	{ key: 'lot', label: 'Lót chống thấm' },
	{ key: 'khan', label: 'Khăn' },
	{ key: 'chan-goi', label: 'Chăn, gối' },
	{ key: 'an-dam', label: 'Bình sữa, ăn dặm' },
];

export interface Product {
	code: string;
	name: string;
	spec: string;
	price: number;
	cat: CategoryKey;
	featured?: boolean;
}

export const PRODUCTS: Product[] = [
	{ code: 'MOL3002', name: 'Gạc rơ lưỡi cho bé', spec: '30 cái/hộp · 0-36 tháng', price: 80000, cat: 've-sinh', featured: true },
	{ code: 'MOL3050', name: 'Tăm bông sơ sinh đầu hồ lô', spec: '110 que/hộp', price: 38000, cat: 've-sinh', featured: true },
	{ code: 'MOL3045', name: 'Tăm bông sơ sinh đầu tròn nhỏ', spec: '200 que/hộp', price: 30000, cat: 've-sinh' },
	{ code: 'MOL3007', name: 'Tăm bông trẻ em', spec: '400 que/hộp', price: 45000, cat: 've-sinh' },
	{ code: 'MOL3022', name: 'Băng dán tai chống nước', spec: '30 miếng/hộp', price: 83000, cat: 've-sinh' },

	{ code: 'MOL3015', name: 'Túi trữ sữa 100ml', spec: '30 túi/hộp · zip đôi', price: 91000, cat: 'me-sua', featured: true },
	{ code: 'MOL3010', name: 'Túi trữ sữa 150ml', spec: '30 túi/hộp · zip đôi', price: 95000, cat: 'me-sua' },
	{ code: 'MOL0035', name: 'Túi trữ sữa bột 50g', spec: '30 túi/hộp', price: 86000, cat: 'me-sua' },
	{ code: 'MOL3013', name: 'Miếng lót thấm sữa', spec: '50 miếng/túi', price: 85000, cat: 'me-sua' },
	{ code: 'MOL3006', name: 'Phễu hứng sữa silicon', spec: '2 cái/hộp', price: 108000, cat: 'me-sua' },

	{ code: 'MOL3051', name: 'Tấm lót phân su sơ sinh', spec: '30 miếng/túi · 19x21cm', price: 40000, cat: 'lot', featured: true },
	{ code: 'MOL2031', name: 'Tấm lót chống thấm 4 lớp', spec: '50x70cm · 1 tấm', price: 122000, cat: 'lot' },

	{ code: 'MOL3036', name: 'Khăn vải khô đa năng 600g', spec: 'Khoảng 416 tờ · 20x14cm', price: 104000, cat: 'khan', featured: true },
	{ code: 'MOL3041', name: 'Khăn vải khô đa năng 300g', spec: 'Khoảng 208 tờ · 20x14cm', price: 61000, cat: 'khan' },
	{ code: 'MOL2059', name: 'Khăn sữa 6 lớp', spec: '3 khăn/hộp · 27x27cm', price: 107000, cat: 'khan', featured: true },
	{ code: 'MOL2030', name: 'Khăn sữa Premium Bamboo', spec: '6 khăn/hộp · 30x30cm', price: 105000, cat: 'khan' },
	{ code: 'MOL2028', name: 'Khăn xô Premium Bamboo', spec: '120x120cm · 1 khăn', price: 154000, cat: 'khan' },

	{ code: 'MOL2053', name: 'Chăn lông hạt đậu', spec: '100x120cm · từ 3 tháng', price: 302000, cat: 'chan-goi', featured: true },
	{ code: 'MOL2058', name: 'Chăn xô 6 lớp', spec: '80x100cm · từ 3 tháng', price: 192000, cat: 'chan-goi' },
	{ code: 'MOL2026', name: 'Chăn xô ủ 3 lớp in hình', spec: '90x90cm · từ 0 tháng', price: 260000, cat: 'chan-goi' },
	{ code: 'MOL2023', name: 'Chăn xô 3 lớp in hình', spec: '100x120cm · từ 0 tháng', price: 270000, cat: 'chan-goi' },
	{ code: 'MOL2029', name: 'Lót gối sơ sinh xô 6 lớp', spec: '1 gối/túi', price: 64000, cat: 'chan-goi' },

	{ code: 'MOL3048', name: 'Set hộp đựng thực phẩm', spec: '3 hộp/bộ · có vạch ml', price: 135000, cat: 'an-dam', featured: true },
	{ code: 'MOL3008', name: 'Bộ cọ rửa bình sữa 4 chi tiết', spec: '4 món/vỉ', price: 86000, cat: 'an-dam' },
	{ code: 'MOL3046', name: 'Bộ cọ rửa bình sữa 3 chi tiết', spec: '3 món/vỉ', price: 102000, cat: 'an-dam' },
];

export const imageOf = (code: string) => `/images/molli/sp/${code.toLowerCase()}.webp`;

// Gợi ý theo giai đoạn: chỉ gộp sản phẩm lẻ, tổng là giá lẻ cộng lại, không phải combo giảm giá.
export interface Bundle {
	stage: string;
	title: string;
	note: string;
	items: { name: string; price: number }[];
}

export const STAGES = [
	{ key: 'di-sinh', label: 'Chuẩn bị đi sinh' },
	{ key: 'so-sinh', label: 'Bé sơ sinh' },
	{ key: 'cho-bu', label: 'Mẹ cho con bú' },
	{ key: 'an-dam', label: 'Bé ăn dặm' },
] as const;

export const BUNDLES: Bundle[] = [
	{
		stage: 'di-sinh',
		title: 'Túi đồ cho mẹ',
		note: 'Đồ dùng mấy ngày đầu sau sinh',
		items: [
			{ name: 'Băng vệ sinh dạng quần sau sinh (5 miếng)', price: 86000 },
			{ name: 'Lót chống thấm cho mẹ 60x90 (10 miếng)', price: 94000 },
			{ name: 'Miếng lót thấm sữa (50 miếng)', price: 85000 },
			{ name: 'Khăn vải khô đa năng 300g', price: 61000 },
		],
	},
	{
		stage: 'di-sinh',
		title: 'Túi đồ cho bé',
		note: 'Những món nhỏ dễ quên',
		items: [
			{ name: 'Tấm lót phân su sơ sinh (30 miếng)', price: 40000 },
			{ name: 'Tăm bông sơ sinh đầu hồ lô (110 que)', price: 38000 },
			{ name: 'Gạc rơ lưỡi (30 cái)', price: 80000 },
			{ name: 'Khăn sữa 6 lớp (3 khăn)', price: 107000 },
		],
	},
	{
		stage: 'so-sinh',
		title: 'Vệ sinh hằng ngày',
		note: 'Tắm, lau, rơ lưỡi cho bé',
		items: [
			{ name: 'Gạc rơ lưỡi (30 cái)', price: 80000 },
			{ name: 'Tăm bông sơ sinh đầu tròn nhỏ (200 que)', price: 30000 },
			{ name: 'Viên bông ngọc trai 0,5g (200 viên)', price: 52000 },
			{ name: 'Khăn vải khô đa năng 600g', price: 104000 },
		],
	},
	{
		stage: 'so-sinh',
		title: 'Giấc ngủ êm',
		note: 'Ủ ấm và giữ ga giường khô',
		items: [
			{ name: 'Chăn xô ủ 3 lớp in hình 90x90', price: 260000 },
			{ name: 'Lót gối sơ sinh xô 6 lớp', price: 64000 },
			{ name: 'Lót chống thấm 1 lần size M (20 miếng)', price: 84000 },
		],
	},
	{
		stage: 'cho-bu',
		title: 'Trữ sữa gọn gàng',
		note: 'Hứng và trữ sữa mẹ',
		items: [
			{ name: 'Túi trữ sữa 150ml (30 túi)', price: 95000 },
			{ name: 'Túi trữ sữa 250ml (30 túi)', price: 105000 },
			{ name: 'Phễu hứng sữa silicon (2 cái)', price: 108000 },
		],
	},
	{
		stage: 'cho-bu',
		title: 'Khô thoáng cả ngày',
		note: 'Cho mẹ đi làm, đi chơi',
		items: [
			{ name: 'Miếng lót thấm sữa (100 miếng)', price: 145000 },
			{ name: 'Khăn sữa Premium Bamboo (6 khăn)', price: 105000 },
		],
	},
	{
		stage: 'an-dam',
		title: 'Bình sữa sạch',
		note: 'Rửa bình, chia sữa bột',
		items: [
			{ name: 'Bộ cọ rửa bình sữa 4 chi tiết', price: 86000 },
			{ name: 'Túi trữ sữa bột 50g (30 túi)', price: 86000 },
		],
	},
	{
		stage: 'an-dam',
		title: 'Bữa ăn dặm tiện',
		note: 'Chia phần, lau tay miệng',
		items: [
			{ name: 'Set hộp đựng thực phẩm (3 hộp)', price: 135000 },
			{ name: 'Hộp 3 khăn yếm xô Muslin 2 in 1', price: 90000 },
			{ name: 'Khăn ướt Molli (80 tờ)', price: 31000 },
		],
	},
];
