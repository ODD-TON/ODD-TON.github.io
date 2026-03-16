# ODD-TON.github.io

ODD-TON 的个人主页与开发记录站点，使用 Astro 构建，并通过 GitHub Pages 自动发布。

## 当前包含内容

- 一个重新整理过的首页，用来介绍站点定位与当前更新重点
- 博客归档页，用来收录项目记录、部署笔记和学习总结
- 关于页，用来说明站点用途、技术栈和维护方式
- GitHub Actions 工作流，用于自动部署到 GitHub Pages

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址为 `http://localhost:4321`。

## 构建

```bash
npm run build
npm run preview
```

构建产物会输出到 `dist/`。

## GitHub Pages 部署

仓库中已经包含工作流文件 `.github/workflows/deploy.yml`。

如果这是这个仓库第一次启用 GitHub Pages，请确认仓库设置中的 Pages 已切换到 GitHub Actions。之后只要将变更推送到 `main` 分支，工作流就会自动构建并发布站点。

## 内容维护

- 页面入口位于 `src/pages/`
- 博客文章位于 `src/content/blog/`
- 站点常量位于 `src/consts.ts`

当前内容以中文为主，适合继续扩展为个人主页、项目展示页或开发日志站点。
