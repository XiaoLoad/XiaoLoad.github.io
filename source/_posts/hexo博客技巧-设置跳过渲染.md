---
title: hexo博客-跳过渲染某些文件
tags: hexo
categories: hexo
description: 讲述skip_render的用法，用来指定不渲染某些文件或文件夹
top_img: >-
  https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/2k/2kom16.jpg?w=400&h=200&fmt=webp
cover: >-
  https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/2k/2kom16.jpg?w=400&h=200&fmt=webp
abbrlink: 6073fc3a
date: 2023-05-07 23:12:36
---

# 前言

由于自己在练习HTML的时候写的一些静态网页，或者有时候存一些有趣的特效。

就想着部署在博客里，实现过程也很简单，这个文章只是简单记录下方法。

hexo有提供其不渲染指定文件或文件夹的方法`skip_render`

所以我们只需要在`_config.yml`配置文件进行添加其路径即可。

下面是方法



# 具体过程

由于`skip_render`默认处理的路径是`source`目录下的文件，所以只需要添加路径就行。

1.单个文件夹下的全部文件：

`skip_render: 文件夹名/*`

> 即表示为 source/demo/*

2.单个文件夹里的指定文件：

`skip_render: 文件夹名/xxx.html`

3.单个文件夹下全部文件以及子目录:

`skip_render: 文件夹名/**`

4.多个文件夹以及各种复杂情况：

```yaml
skip_render:
    - 'demo/*.html'
    - 'demo/**'
```

