// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://molli.vn",
	integrations: [mdx(), sitemap()],
	markdown: {
		// Khối mã đổi màu theo giao diện Sáng/Tối của blog.
		shikiConfig: {
			themes: { light: "github-light", dark: "github-dark" },
			defaultColor: "light",
		},
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
