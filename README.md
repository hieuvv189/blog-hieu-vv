# Blog Hiếu VV

Website: https://blog-hieu-vv.hieuvv189.workers.dev

## Tự triển khai từ GitHub

Trong Cloudflare, mở Worker `blog-hieu-vv`, vào Settings → Builds → Connect.
Cấp quyền GitHub cho repo `hieuvv189/blog-hieu-vv` rồi chọn:

- Nhánh triển khai: `main`.
- Thư mục gốc: `/`.
- Lệnh build: `npm run build`.
- Lệnh triển khai: `npx wrangler deploy`.
- Phiên bản Node.js: `22` hoặc mới hơn.

Sau khi kết nối thành công, mỗi thay đổi được đẩy lên `main` sẽ kích hoạt build và triển khai.
Bài viết nằm trong `src/content/blog/`. Khi gắn tên miền riêng, cập nhật `site` trong `astro.config.mjs`.

Kiểm tra trước khi triển khai: `npm ci` rồi `npm run check`.

## Template gốc

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template)

![Astro Template Preview](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

<!-- dash-content-start -->

Create a blog with Astro and deploy it on Cloudflare Workers as a [static website](https://developers.cloudflare.com/workers/static-assets/).

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Built-in Observability logging

<!-- dash-content-end -->

## Getting Started

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/astro-blog-starter-template
```

A live public deployment of this template is available at [https://astro-blog-starter-template.templates.workers.dev](https://astro-blog-starter-template.templates.workers.dev)

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |
| `npm wrangler tail`               | View real-time logs for all Workers              |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
