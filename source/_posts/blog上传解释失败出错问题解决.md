---
title: Blog上传报错问题解决
date: 2023-03-16 20:31:24
description: Nunjucks渲染问题
top_img: https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230317174229199.png
cover: https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230317174229199.png
tags: Blog
categories: Blog
abbrlink: '0'
---
### 1. 问题记录

当上传时，`hexo s`与`hexo g`都会报错，报错详情如图：

![image-20230317174229199](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230317174229199.png)

错误代码：`Nunjucks Error: _posts/Java Notes.md [Line 91, Column 39] tag name expected`

### 2. 解决方法

按照官网文档描述([Troubleshooting | Hexo](https://hexo.io/docs/troubleshooting))

![image-20230317174801224](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230317174801224.png)

**其他方法**

**其他方法**

`{ {`和`} }`之间**加上空格**变成`{ {`和`} }` （这里看不出区别，知道这个意思就行…） `{ %`和`% }`之间**加上空格**变成`{ %`和`% }`
