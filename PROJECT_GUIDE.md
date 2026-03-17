# 项目说明文档

## 项目定位

这是一个极简的 Astro 个人博客站点，只保留三类页面：

- 首页
- 博客集合页
- 关于页

站点当前域名为 `oddton.link`，通过 GitHub Pages 自动部署。

## 关键页面

- `src/pages/index.astro`
  首页，展示昵称、简短介绍和插图。
- `src/pages/blog/index.astro`
  博客列表页，按发布时间倒序展示文章。
- `src/pages/about.astro`
  关于页，说明站点用途和内容目录。
- `src/pages/blog/[...slug].astro`
  文章详情路由。

## 内容目录约定

- `src/content/blog/`
  存放博客正文。每篇文章一个 `.md` 或 `.mdx` 文件。
- `public/blog-media/<slug>/`
  存放某篇文章的图片或附件。`<slug>` 建议和文章文件名保持一致。
- `src/assets/site/`
  存放首页或全站通用图片。
- `public/favicon/`
  存放站点 favicon。

## 文章写法

文章 frontmatter 当前支持以下字段：

- `title`
- `description`
- `pubDate`
- `updatedDate` 可选
- `heroImage` 可选

示例：

```md
---
title: '文章标题'
description: '一句摘要'
pubDate: 2026-03-17
---

正文内容。
```

## 新增文章流程

1. 在 `src/content/blog/` 下创建新的 Markdown 文件。
2. 如果文章有图片或附件，在 `public/blog-media/<slug>/` 下新建对应文件夹。
3. 在正文里通过 `/blog-media/<slug>/文件名.jpg` 引用图片。
4. 提交并 push 到 `main`，GitHub Pages 会自动重新部署。

## 可直接修改的常量

`src/consts.ts` 集中维护：

- 站点标题
- 站点简介
- 作者名
- 首页简介文案
- 页脚社交链接

如果只是改昵称、简介或联系方式，优先从这里改。

## 主题与样式

- 全局样式在 `src/styles/global.css`
- 当前主题强调色为 `#b2916e`
- 页面已经做过“减少空白和无意义滚动”的收紧处理

## SEO 与站点元信息

- 头部元信息在 `src/components/BaseHead.astro`
- 域名配置在 `astro.config.mjs`
- 自定义域名文件在 `public/CNAME`
- RSS 输出在 `src/pages/rss.xml.js`

## 部署说明

GitHub Actions 工作流文件：

- `.github/workflows/deploy.yml`

当前逻辑：

1. push 到 `main`
2. Actions 执行 `npm ci`
3. Actions 执行 `npm run build`
4. 构建产物 `dist/` 发布到 GitHub Pages

## 本地开发命令

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 维护建议

- 保持页面数量精简，不要再扩展成作品集或开发者主页。
- 文章图片统一放到 `public/blog-media/<slug>/`，避免后续资源散乱。
- 如果只想替换站点视觉，优先修改 `src/styles/global.css` 和 `src/consts.ts`。
