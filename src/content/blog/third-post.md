---
title: 'GitHub Pages 部署配置记录'
description: '把仓库接上 GitHub Actions 之后，主分支更新就可以自动发布到 Pages。'
pubDate: 2026-03-16
---

这次部署选择了最直接的方案：保留 Astro 的静态输出，构建工作交给 GitHub Actions，产物再发布到 GitHub Pages。

## 这样做的好处

- 本地开发和线上构建使用同一套命令。
- 仓库里不需要额外维护手工发布脚本。
- 以后改页面或写文章，只要 push 就能触发部署。

## 关键步骤

1. 在 `astro.config.mjs` 中配置正式站点地址。
2. 在仓库中加入 Pages 工作流。
3. 让 Actions 运行 `npm ci` 和 `npm run build`。
4. 将 `dist/` 作为 Pages Artifact 发布。

## 适合这个仓库的原因

这个项目本身就是一个静态内容站，没有服务端需求，所以 GitHub Pages 已经足够稳定，也足够省心。
