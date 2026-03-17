---
title: '图片素材路径示例'
description: '用一篇测试文章说明博客图片应该放在哪里，以及正文里如何引用。'
pubDate: 2026-03-17
---

这是一篇测试文章，用来确认博客里的图片素材已经能正常暴露出来。

## 图片素材目录

这篇文章对应的图片目录是：

`public/blog-media/image-path-demo/`

也就是说，文章发布到站点之后，可以直接通过下面这些路径访问图片：

- `/blog-media/image-path-demo/test-1.jpg`
- `/blog-media/image-path-demo/test-2.jpg`
- `/blog-media/image-path-demo/test-3.jpg`

## 测试图片

第一张：

![测试图片 1](/blog-media/image-path-demo/test-1.jpg)

第二张：

![测试图片 2](/blog-media/image-path-demo/test-2.jpg)

第三张：

![测试图片 3](/blog-media/image-path-demo/test-3.jpg)

## 后续写文章怎么放图

如果以后新增一篇文章，比如文件名叫 `my-trip.md`，那就建议把图片统一放到：

`public/blog-media/my-trip/`

然后在正文里直接这样写：

```md
![图片说明](/blog-media/my-trip/cover.jpg)
```

这样目录会很清楚，后续维护也最省事。
