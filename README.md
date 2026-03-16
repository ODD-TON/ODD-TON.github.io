# oddton.link

一个极简的个人博客站点，只有首页、博客集合页和关于页。

## 页面说明

- 首页：昵称、个人简介和插图
- 博客：按时间顺序列出文章
- 关于：简单介绍站点用途和内容目录

## 内容目录

- `src/content/blog/`
  存放博客文章，直接新建 `.md` 文件即可。
- `public/blog-media/<slug>/`
  存放某篇文章用到的图片或附件，按文章 slug 建子目录。
- `src/assets/site/`
  存放首页或全站共用图片。

## 新增文章

1. 在 `src/content/blog/` 新建文章文件，例如 `my-first-post.md`
2. 如果文章需要图片，把图片放到 `public/blog-media/my-first-post/`
3. 在文章里通过 `/blog-media/my-first-post/文件名.jpg` 引用图片
4. push 到 `main` 后 GitHub Pages 会自动更新

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```
