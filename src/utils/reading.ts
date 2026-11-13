// Ước lượng thời gian đọc: khoảng 220 từ mỗi phút, tối thiểu 1 phút.
export function readingMinutes(body: string | undefined): number {
	if (!body) return 1;
	const text = body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/^import .*$/gm, ' ')
		.replace(/[#>*_`\[\]()!|-]/g, ' ');
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 220));
}
