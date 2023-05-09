---
title: CSS 笔记
tags: Web
categories: 笔记
description: CSS 笔记
top_img: https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/95/9582wd.jpg?w=400&h=200&fmt=webp
cover: https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/95/9582wd.jpg?w=400&h=200&fmt=webp
abbrlink: 196ce872
date: 2023-04-04 13:52:10
---

# 认识CSS

CSS又称**层叠样式表**，一般用于给HTMl结构文档添加样式效果，如：颜色、宽度、高度、背景等。



# CSS是如何运行的

当浏览器展示一个文件的时候，它必须兼顾文件的内容和文件的样式信息，下面会了解到它处理文件的标准的流程。需要知道的是，下面的步骤是浏览加载网页的简化版本，而且不同的浏览器在处理文件的时候会有不同的方式，但是下面的步骤基本都会出现。

1. 浏览器载入 HTML 文件（比如从网络上获取）。
2. 将 HTML 文件转化成一个 DOM（Document Object Model），DOM 是文件在计算机内存中的表现形式。
3. 接下来，浏览器会拉取该 HTML 相关的大部分资源，比如嵌入到页面的图片、视频和 CSS 样式。JavaScript 则会稍后进行处理，简单起见，同时此节主讲 CSS，所以这里对如何加载 JavaScript 不会展开叙述。
4. 浏览器拉取到 CSS 之后会进行解析，根据选择器的不同类型（比如 element、class、id 等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id 选择器等）应用在对应的 DOM 的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。
5. 上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行布局。
6. 网页展示在屏幕上（这一步被称为着色）。

结合下面的图示更形象：

![image-20230404144817125](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230404144817125.png)



## 关于DOM

一个 DOM 有一个树形结构，标记语言中的每一个元素、属性以及每一段文字都对应着结构树中的一个节点（Node/DOM 或 DOM node）。节点由节点本身和其他 DOM 节点的关系定义，有些节点有父节点，有些节点有兄弟节点（同级节点）。

对于 DOM 的理解会很大程度上帮助你设计、调试和维护你的 CSS，因为 DOM 是你的 CSS 样式和文件内容的结合。当你使用浏览器 F12 调试的时候你需要操作 DOM 以查看使用了哪些规则。



## 一个真实的DOM案例

不同于很长且枯燥的案例，这里我们通过一个 HTML 片段来了解 HTML 怎么转化成 DOM

以下列 HTML 代码为例：

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

在这个 DOM 中，`<p>`元素对应了父节点，它的子节点是一个 text 节点和三个对应了`<span>`元素的节点，`SPAN`节点同时也是他们中的 Text 节点的父节点。

```markdown
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
    └─ "Sheets"
```

上图就是浏览器怎么解析之前那个 HTML 片段——它生成上图的 DOM 树形结构并将它按照如下输出到浏览器：

![image-20230404145126885](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230404145126885.png)



## 应用CSS到DOM

接下来让我们看看添加一些 CSS 到文件里加以渲染，同样的 HTML 代码：

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

以下为 CSS 代码：

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

浏览器会解析 HTML 并创造一个 DOM，然后解析 CSS。可以看到唯一的选择器就是`span`元素选择器，浏览器处理规则会非常快！把同样的规则直接使用在三个`<span>`标签上，然后渲染出图像到屏幕。

现在的显示如下：

<iframe class="sample-code-frame" title="应用 CSS 到 DOM sample" id="frame_应用_css_到_dom" width="100%" height="60" src="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works/_sample_.%E5%BA%94%E7%94%A8_css_%E5%88%B0_dom.html" loading="lazy" style="box-sizing: content-box; border: 1px solid var(--border-primary); max-width: 100%; width: calc((100% - 2rem) - 2px); background: rgb(255, 255, 255); border-radius: var(--elem-radius); padding: 1rem; color: rgb(27, 27, 27); font-family: Inter, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"></iframe>



# CSS的用法

CSS在HTML里有三种引入方式，分为内嵌式、行内式、外链式。

一般比较常用于内嵌和外链式。接下介绍各方法的使用：

+ **内嵌式**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .box {
          /* css注释 */
          /* 结构为选择器与样式 */
          /* .box为类选择器 */
          width: 100px;
          height: 100px;
          background: pink;
        }
      </style>
    </head>
    <body>
      <div class="box"></div>
    </body>
  </html>
  
  ```

  内嵌式在`head`标签内起一行写`style`标签，`style`标签是双标签，标签内容为样式内容。

  其中`.box`为标签选择器，其含义为寻找类名叫`box`的标签使用其`{}`花括号中的样式。

+ **行内式**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div class="box" style="width: 100px; height: 100px; background: pink;"></div>
    </body>
  </html>
  ```

  行内式在标签内部添加属性值`style="[样式]"`其中在`""`范围内的样式格式为`属性名: 属性值;`各个属性值之间需要分号隔开。

  其样式内容与内嵌式例子相同，为设置宽度和高度为100像素，背景颜色为粉色。

+ **外链式**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
     <div class="box"></div>
    </body>
  </html>
  
  ```

  其中`style.css`的内容为

  ```css
  .box {
      width: 100px;
      height: 100px;
      background: pink;
  }
  ```

  外链式比较常用，代码` <link rel="stylesheet" href="css/style.css">`为引入css里的`style.css`的样式文件。

  其一般项目结构为单独建立`image`文件夹存放图片素材，`css`文件夹存放样式文件，`js`文件夹存放`javascript`文件。

  例图：![image-20230404135615107](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230404135615107.png)



## 总结

CSS样式一般用于给HTML文档设置样式效果，如颜色、字体大小、背景等样式效果。

一般开发中三种使用方法灵活运用，但常用于外链式与内嵌式。

CSS的语法格式：

- 每个规则集（除了选择器的部分）都应该包含在成对的大括号里（`{}`）。
- 在每个声明里要用冒号（`:`）将属性与属性值分隔开。
- 在每个规则集里要用分号（`;`）将各个声明分隔开。



# CSS基础选择器

选择器为查找HTML文档中的标签，为其设置样式。

选择器可分为：标签选择器、类选择器、id选择器、伪类选择器。



## 标签选择器

标签选择器的结构为：

```css
标签 {
    属性名: 属性值;
}
```

如某css文件中：

```css
p {
    color: pink;
}
```

其含义为文档中的所有`p`标签的字体颜色为`pink`色。



## 类选择器

类选择器的结构为：

```css
.box {
    color: red;
}
```

其HTML文档结构为：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
   <div class="box"></div>
  </body>
</html>

```

其中在HTML文档中定义了一个类名叫`box`的`div`标签，其css样式的含义为查找类名叫`box`的标签，HTML文档有一个标签符合，该标签使用其样式，字体颜色为红色`red`。类选择器可重复定义与重复使用，HTML文档中可以有多个叫`box`的标签，都可以使用其样式。

类选择器可以继承，如在css中定义了一个`red`的类名和一个`bgColorPink`的类名，那我们可以这样使用：

```css
.red {
    color: red;
}

.bgColorPink {
    width: 100px;
    height: 100px;
    background: pink;
}
```

其文档结构为：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="red bgColorPink">我是红色的，背景是粉色</div>
  </body>
</html>

```

可以看到文档中的`div`标签的类名设置了两个，其用了空格隔开，标签在使用类的时候可以定义多个类，其使用也是多个类的样式，文档中的`div`使用两个类的样式。根据样式看这个标签设置了字体颜色为红色，背景颜色为粉色，宽度高度均为100像素。

![image-20230404142455623](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230404142455623.png)



## id选择器

id选择器结构：

```css
#box {
    color: pink;
}
```

其HTML文档结构为：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
   <div id="box"></div>
  </body>
</html>

```

其功能和类选择器相似，不同之处为类选择器可以重复使用，id选择器只能唯一，也就是说HTML文档中只能有一个`id`为`box`的标签。



## 属性选择器

可以查找拥有特定元素属性的元素标签使用其样式。

CSS结构：

```css
div[id] {
    width: 100px;
    height: 100px;
    background: pink;
}
```

HTML结构：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div id="box">1</div>
    <div>2</div>
  </body>
</html>

```

其含义为查找具有`id`属性的`div`元素标签。故此第一个`box`使用其样式。



## 多元素选择器

可以选择多个元素标签并为它们添加统一的样式效果，将不同的选择器用逗号隔开：

```css
p, li, h1 {
  color: red;
}
```

其中的选择器均可以使用标签、类、id选择器。



## 选择器的权重

在页面中使用 CSS 选择器选中元素时，经常都是一个元素同时被多个选择器选中。如果两个选择器设置的样式不一致那还好不会产生冲突，但是如果两个选择器设置的是同一个样式，这样元素到底要应用那个样式呢？CSS 中会默认使用权重较大的样式，权重又是如何计算的呢？

### 权重的计算

不同的选择器有不同的权重值：

- !important：优先级最高 但不能提升继承的优先级。
- 行内样式：1000
- ID：100
- 类、伪类、属性：10
- 元素、伪元素：1
- 继承：0

当多个选择器应用于同一元素时，它们之间将按照上述规则进行比较

假如权重相同，则选择最后的样式。

例如：

```css
body h1 {
  color: red;
}

h1 {
  color: blue;
}
```

在上面这个例子中，`h1` 元素将应用红色颜色，因为 `body h1` 的权重值为 `101`（100 + 1），而 `h1` 的权重值为 `1`。



## 后代选择器

根据HTML标签的嵌套关系， 选择父元素后代中的元素。

语法：父代选择器 后代选择器 {css}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div p {
        color: pink;
      }
    </style>
  </head>
  <body>
    <div>
      <p>0</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
  </body>
</html>

```

其中，`div`后面的`p`都会应用到样式。



### 子代选择器

根据HTML标签的嵌套关系，选择父元素的子代元素。

语法：父选择器>子选择器 {css}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div>p {
        color: pink;
      }
    </style>
  </head>
  <body>
    <div>
      <p>太好了我是粉色的</p>
      <em>
        <p>我好像不能变成粉色哎</p>
      </em>
      <p>太好了我也是粉色的</p>
    </div>
  </body>
</html>
```

如此只会根据`div`下面的`p`元素应用样式，但由于18行的`p`是`em`子元素，所以不能被应用样式。



### 并集选择器

同时选择多组标签设置样式。

语法：

```css
div,
p {
    color: pink;
}
```



### 并集选择器

选择多个选择器选中的元素。

如：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 如果要选择第二个p标签，可以使用交集 */
      p.box {
        color: pink;
      }
    </style>
  </head>
  <body>
    <div>
      <p class="box">我是box的p</p>
      <p>我没有类名哎</p>
      <div class="box">我是有box的div</div>
    </div>
  </body>
</html>
```



### 结构伪类选择器

能在HTML中快速定位元素，常用于查找某个父选择器下的子元素。

例如：

| 选择器                   | 说明                              |
| ------------------------ | --------------------------------- |
| `E:first-child {}`       | 选择父元素下排序后的第一个E元素   |
| `E:last-child {}`        | 选择父元素下排序后的最后一个E元素 |
| `E:nth-child(n) {}`      | 选择父元素下排序后的第n个E元素    |
| `E:nth-last-child(n) {}` | 选择父元素下倒数第n个E元素        |
| `E:nth-of-type(n) {}`    | 选择父元素下的E元素，先寻找再排序 |



n可以为公式，常见公式如下：

|       功能       |      公式       |
| :--------------: | :-------------: |
|       偶数       |    2n、even     |
|       奇数       | 2n+1、2n-1、odd |
|    找到前五个    |      -n+5       |
| 找到从第五个往后 |       n+5       |

注意：不带类型`type`的选择器会进行排序序号，先排序再寻找。

例如：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      section div:nth-child(1) {
        color: pink;
      }
    </style>
  </head>
  <body>
    <section>
      <p>一</p>
      <div>二</div>
      <div>三</div>
    </section>
  </body>
</html>
```

当`nth-child()`进行排序序号，`p`标签序号就会为`1`，后面的标签往后继续排序，当排序完成后，开始寻找序号为`1`的`div`标签。

因为`1`为`p`标签所以没有匹配到，样式没生效。

![image-20230423214306915](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230423214306915.png)

而`nth-of-type`会先寻找到指定元素在排序。



### 伪元素

用伪元素可在标签元素左右插入内容，且不需要HTML标签，简化HTML结构。

| 伪元素     | 作用                           |
| ---------- | ------------------------------ |
| `::before` | 在父元素内容的最前添加一个内容 |
| `::after`  | 在父元素内容的最后添加一个内容 |

伪元素需要设置`content`属性才生效。

伪元素默认是行内元素。



# CSS常记样式

## 字体样式 font-family

选择元素的**字体**，常见的字体系列有非衬线字体（**sans-serif**）、衬线字体（**serif**）、等宽字体（**monospace**）。

`font-family`可以设置多个值，可以为字体，也可为字体系列。其取用的规则为当用户计算机本地有安装此字体，则使用，如没有则往下取值，直至适配。

例如：

```css
div {
    font-family: "Microsoft YaHei", 黑体, 宋体, serif;
}
```

如果字体名称中存在多个单词，推荐使用引号包裹。

最后一项字体系列不需要引号包裹。



## 字体样式 font复合写法

利用`font`属性将多个属性一并写上。

取值格式：`font: style weight size family`

只能省略前两个的值，省略了即相当于设置了默认值。如果需要同时设置单独和连写形式，要么单独的样式写在连写下面，要么写在连写里面。

例如：

```css
div {
    font: 
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      p {
        font: italic 700 12px serif;
      }
    </style>
  </head>
  <body>
    <p>这里是测试字体样式的</p>
  </body>
</html>
```

图例：![image-20230406211218911](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230406211218911.png)



## 文本样式 text-align

`text-align`可以作用于`span`、`a`、`input`、`img`标签，需设置在父元素作用于子元素。



## 文本样式 text-decoration

用于修改文本样式，如添加下划线或去除`a`标签的下划线。

属性值：

|    属性值    |   说明   |
| :----------: | :------: |
|  underline   |  下划线  |
| line-through |  删除线  |
|   overline   |  上划线  |
|     none     | 无装饰线 |



## 文本样式 line-height

修改文本段落之间的行高。

取值可为像素，如单写数字则为倍数，例：`line-height: 1.5;`

行高可用于`font`的复合写法，如：`font: style weight size/line-height family;`

行高可用于垂直居中，值与父元素高度时则垂直居中。



## 背景 background

设置背景图片可使用`background-image`。

设置背景平铺可使用`background-repeat`，其属性值有：

|  属性值   |         说明         |
| :-------: | :------------------: |
|  repeat   | 水平和垂直方向都平铺 |
| no-repeat |        不平铺        |
| repeat-x  |   沿着水平方向平铺   |
| repeat-y  |   沿着垂直方向平铺   |

设置背景位置可使用`background-position`，其属性值有：

![image-20230409170159716](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230409170159716.png)

### 背景属性的连写形式

顺序：`background: color image repeat position/size;`

可以按照需求省略。



### background-size 属性

设置背景图的大小。

语法：`background-size: 宽度 高度;`

**其常见的属性值：**

|  取值   |                             场景                             |
| :-----: | :----------------------------------------------------------: |
| 数字+px |                          简单方便。                          |
| 百分比  |                相对当前盒子自身的宽高百分比。                |
| contain | 包含，将背景图片等比例缩放，直到不会超出盒子的最大；如果和盒子的宽或高尺寸相同，即另一个方向停止缩放。 |
|  cover  | 覆盖，将背景图片等比例缩放，直到刚好填满整个盒子没有空白；要保证宽或高和此盒子相同，不然图片显示不全。 |



### 精灵图

可以将项目中的多张小图片合并成一张大图片，这张大图片叫做精灵图。这样做可以减少服务器发送次数，减轻服务器的压力，提高加载速度。

利用`background-position`属性设置背景图片的位置，取值可为正负数。



## 边框 border

为元素添加边框。

属性值：单个取值的连写，取值之间以空格隔开。

+ `border: 10px solid red;`

边框样式可设置实线(**solid**)、虚线(**dashed**)、点线(**dotted**)。



# CSS继承

能影响文字的样式都基本能继承给后代元素，但超链接`a`与`h`标签不能被父元素的样式继承。



# CSS层叠性

给同一个标签设置相同的样式，会被层叠覆盖，最终写在后面的样式会生效。

给同一个标签设置不同的样式，会被层叠叠加，共同作用于标签上。



# CSS初始化

在开发网页时，经常会将一些元素自带的样式设置为方便开发的样式，例如把`a`标签的下划线以及字体颜色设置为其他，`li`标签左侧圆点设置为清除等等样式。故此需要以需求设置初始化加载样式，以方便开发网页。

例如：

**照顾低版本浏览器，如果图片外面包含了链接，则会有边框的问题，取消图片底侧有空白缝隙的问题：**

```css
img {
    /* 清除边框 */
    border: 0;
    /* 清除缝隙 */
    vertical-align: middle;
}
```



**清除`li`标签的左侧圆点：**

```css
li {
    list-style: none;
}
```



又比如，在网页开发时需要设置指定的字体，那么在设置初始化的时候可以为其设置，但由于编码问题导致的中文不兼容，在使用中文字体例如宋体、黑体等中文字体时，就需要用`Unicode`编码字体来表示其中文字体。

如：黑体`\9ED1\4F53`



# 盒子模型的问题

## 盒子被撑开问题

当定义了一个固定宽高的盒子，设置了边框(**border**)或者内边距(**padding**)的时候，需要计算减掉其边框与内边距的大小。否则盒子宽高将被撑开。

可以利用`box-sizing: border-box;`实现自动计算多余大小，在内容中减去。



## 外边距塌陷现象

**合并问题**

当两个块级元素处于垂直排列时，上下的`margin`会合并。且两者的距离为`margin`的最大值。

解决方法：只给其中一个盒子设置即可。

**塌陷问题**

当互相嵌套的两个元素，给子代元素设置外边距会造成塌陷问题。

例如下面的情况，父元素是天蓝色大盒子，子元素是粉色小盒子。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .father {
        width: 300px;
        height: 300px;
        background-color: skyblue;
      }

      .son {
        width: 100px;
        height: 100px;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div class="father">
      <div class="son"></div>
    </div>
  </body>
</html>
```

<img src="https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230411215157137.png" alt="image-20230411215157137"  />当我给小粉添加上或左外边距时就变成下面这样：

```css
      .son {
        width: 100px;
        height: 100px;
        margin-top: 50px;
        background-color: pink;
      }
```

![image-20230411215301334](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230411215301334.png)

小粉并没有像想象中被推开，而是带着父元素一起移动。

这样的问题我们称为塌陷问题。

**解决方法：**

1. 给父元素设置`border-top`或者`padding-top`	（分隔开父子元素）。
2. 给父元素设置`overflow: hidden`，这个方法比较完美。
3. 转换为行内块元素。
4. 设置浮动。



## 行内标签内外边距问题

通过`margin`和`padding`设置行内标签的的垂直位置是无效生效的。

例如`margin-top`、`margin-bottom`、`padding-top`、`padding-bottom`。



# 浮动

我们在设置两个块级元素在同一行时，可能会想到将块级元素设置为`inline-block`，当设置时，我们会发现在两个块级元素之间会遗落一个空格，如下：

```html
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      div {
        display: inline-block;
        width: 200px;
        height: 200px;
      }

      .father {
        background-color: pink;
      }

      .son {
        background-color: skyblue;
      }
    </style>
  </head>
  <body>
    <div class="father"></div>
    <div class="son"></div>
  </body>
```

![image-20230412142702582](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230412142702582.png)

这是因为在代码23~24行之间两个块级元素进行了换行，所以在变成`inline-block`或`时，浏览器会将换行渲染成空格。如果要避免需要将换行删除，共同一行，但这样代码可读性差，所以最好的方法就是用浮动。

**浮动的特点：**

+ 当元素设置了浮动，那么它会脱离标准流，在标准流中不再占用位置。

+ 浮动元素比标准流元素高，它会覆盖标准流中的元素。

+ 浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右浮动。

例如：

```html
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      div {
        width: 200px;
        height: 200px;
      }

      .boxA {
        width: 100px;
        height: 100px;
        background-color: pink;
      }

      .boxB {
        background-color: skyblue;
      }

      .boxC {
        width: 300px;
        height: 200px;
        background-color: green;
      }
    </style>
  </head>
  <body>
    <div class="boxA">A</div>
    <div class="boxB">B</div>
    <div class="boxC">C</div>
  </body>
```

在上面的代码中显示了三个盒子，依次小到大以列排序。![image-20230412144358461](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230412144358461.png)

当我给B盒子添加了浮动时，那么它会脱离标准流，即情况会是B盒子浮动，C盒子会跑道B盒子位置且被B盒子覆盖，如图：![image-20230412144601653](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230412144601653.png)

那么浮动找浮动是怎么一回事呢？例如我们给C盒子添加浮动，那么C盒子也会脱离标准流浮动，且浮动位置在上一个浮动元素的左右。例如：![image-20230412144849168](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230412144849168.png)



## 清除浮动

有时候设置元素的宽高我们通常为了方便添加新内容，会不给高度，那么这时如果给子元素设置了浮动，父元素会因为子元素的浮动导致父元素的高度为零。这时候我们就需要清除浮动带来的影响。

常见的清除浮动的方法有三种：

### **第一种** 额外标签法：

在父元素内容的最后添加一个块级元素，再给添加的块级元素添加`clear: both;`。

例如：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .bigBox {
        width: 400px;
        /* height: 400px; */
        background-color: skyblue;
        border: 1px solid red;
      }

      .bigBox .box {
        float: left;
        width: 200px;
        height: 200px;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div class="bigBox">
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </body>
</html>
```

![image-20230413215629337](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230413215629337.png)

可以看到代码中设置一个没有高度的大盒子，其放入两个小盒子，这时因为 小盒子设置了左浮动效果所以脱离标准流，导致了大盒子没有了高度(1.6为边框高度)。

那么当我们在给浮动元素的最后一处添加一个标签，且在标签样式设置`clear: both;`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .bigBox {
        width: 400px;
        /* height: 400px; */
        background-color: skyblue;
        border: 1px solid red;
      }

      .bigBox .box {
        float: left;
        width: 200px;
        height: 200px;
        background-color: pink;
      }

      .clear {
        clear: both;
      }
    </style>
  </head>
  <body>
    <div class="bigBox">
      <div class="box"></div>
      <div class="box"></div>
      <div class="clear"></div>
    </div>
  </body>
</html>
```

![image-20230413215842432](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230413215842432.png)

这时我们可以看到父元素有了高度，这个方法需添加的标签为块级元素。



### 第二种 单伪元素清除法

和额外标签方法类似，同样是使用标签来隔断，但用伪元素来代替额外的标签。

**基本写法：**

```css
.clearFix::after {
    content: '';
    display: block;
    clear: both;
}
```

**补充写法：**

```css
.clearFix::after {
	content: '';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}
```

将需要清除浮动的标签使用即可。



### 第三种 双伪元素清除法

和单伪元素类似，只不过增加了`before`。

**基本写法：**

```css
.clearFix::after,
.clearFix::before {
    content: '';
    display: table;
}

.clearFix::after {
    clear: both;
}
```

这个方法简单，比单伪元素的写法简洁好记。

`before`的作用是用于外边距塌陷的问题。



### 第四种 overflow方法

直接给需要清除浮动的元素设置`overflow: hidden;`

这个方法方便，但会导致盒子里的内容超出时被隐藏。



# 定位

定位可以使元素层级变成最高并且脱离标准流，直接页面定位。

**定位的方式：**

设置定位方式

属性名：`position`

常见的属性值：

| 定位方式 |  属性值  |
| :------: | :------: |
| 静态定位 |  static  |
| 相对定位 | relative |
| 绝对定位 | absolute |
| 固定定位 |  fixed   |

当确定了定位方式，就可设置偏移值来设置元素的位置，

偏移值设置分为两个方向，水平和垂直方向各选一个。

例如要设置距离左边的10px：`left: 10px;`，数值可以为负，则是为反方向。

常见属性：`left`、`right`、`top`、`bottom`。

如果`left`和`right`共同存在则以`left`为准，垂直也一样为`top`为准。

下面将逐一介绍`position`的定位方式的使用:

## 相对定位 relative

相对定位是对于自身元素对于浏览器窗口的位置，并且不改变元素自身的显示模式。对于相对定位的元素，会保留在标准流的位置。



## 绝对定位 absolute

绝对定位先查找有定位的父级以上的元素并以其为参照物定位；如果没找到具有定位的父级以上的元素，则按照浏览器窗口定位。

绝对定位会脱离标准流，不在标准流保留位置，并且会改变元素的显示模式，变成行内块元素。

当使用了绝对定位的盒子就不能使用`margin: 0 auto;`来居中。

例如：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 0 auto;
        background: pink;
      }

      .left,
      .right {
        width: 100px;
        height: 50px;
        background: skyblue;
      }

      .left {
        position: absolute;
        top: 0;
        left: 0;
      }

      .right {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </body>
</html>
```

![image-20230417165245801](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230417165245801.png)



### 案例 子绝父相水平居中

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -150px;
        margin-top: -150px;
        width: 300px;
        height: 300px;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```



### 案例 位移居中

解决上一案例的问题，当盒子大小改变，则定位偏移值也需要更改。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```



## 固定定位 fixed

相对于浏览器进行定位移动。

例如一些网页里的返回顶部或者导航栏固定到某个位置。

固定定位脱标，不保留位置。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: fixed;
        right: 0;
        top: 50%;
      }
    </style>
  </head>
  <body>
    <div class="box">返回顶部</div>
  </body>
</html>
```



# 元素层级关系

文档中的层级关系为：标准流 < 浮动 < 定位。

定位中的层级关系相同，且层级顺序为书写顺序。

`z-index`可以设置将元素的层级权重，属性值位数字，数字越大层级越大，定位元素默认层级为0。此属性只可配合定位生效。



# 装饰样式

## vertical-align 属性

用于更改元素的基线对齐方式。

**因为浏览器遇到行内和行内块元素会当做文字处理，默认文字是按基线对齐，所以会导致位置差异。**

**常见的属性值：**

|  属性值  |      效果      |
| :------: | :------------: |
| baseline | 默认，基线对齐 |
|   top    |    顶部对齐    |
|  middle  |    中部对齐    |
|  bottom  |    底部对齐    |

这个属性可以配合行高`line-hight`来实现图片垂直居中。



## cursor 属性

可以更改鼠标光标在元素上显示的样式。

 **常见的属性值：**

| 属性值  |             效果             |
| :-----: | :--------------------------: |
| default |      默认值，通常是箭头      |
| pointer |  小手效果，提示用户可以点击  |
|  text   | 工字型，提示用户可以选择文字 |
|  move   |   十字光标，提示用户可移动   |



## overflow 属性

可以实现元素内容的可视状态。

**常见属性值：**

| 属性值  | 效果                               |
| ------- | ---------------------------------- |
| visible | 默认值，溢出部分可见               |
| hidden  | 溢出部分不可见                     |
| scroll  | 无论是否溢出，都显示滚动条         |
| auto    | 根据是否溢出，自动显示或隐藏滚动条 |



## 元素本身隐藏

使某些元素不可见。

常见属性：`display: none;`、`visibility: hidden`。

`visibility`会使元素保留位置，但元素隐藏。

`display: none`会使元素完全隐藏，不占位。

`visibility`常见属性值：

| 属性值   | 效果                                                         |
| -------- | ------------------------------------------------------------ |
| visible  | 元素框可见                                                   |
| hidden   | 元素框不可见，但仍然影响常规布局                             |
| collapse | 对于`table`将会隐藏其指定行列，且不占用空间，但对于其他元素将视为与`hidden`相同。 |



## opacity 属性

可以改变元素自身以及内容(包括子元素)的透明度。

属性值为0`1之间的数字，0表示完全透明，1表示完全不透明。



# 盒子阴影

给盒子添加阴影效果。

属性名：`box-shadow`

**取值：**

| 参数       | 作用                         |
| ---------- | ---------------------------- |
| `h-shadow` | 必须，水平偏移量，允许负值。 |
| `v-shadow` | 必须，垂直偏移量，允许负值。 |
| `blur`     | 可选，模糊度。               |
| `spread`   | 可选，阴影扩大。             |
| `color`    | 可选，阴影颜色。             |
| `inset`    | 可选，将阴影改为内部阴影。   |

**写法：**

`box-shadow: 5px 10px 20px 10px red;`

![image-20230418120339816](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230418120339816.png)



# 过渡动画效果

让元素的样式产生过渡效果，一般配合`hover`使用，增强网页交互感。

属性名：`transition`

**常见取值：**

| 参数       | 取值                                                         |
| ---------- | ------------------------------------------------------------ |
| 过渡的属性 | `all`: 所有能过渡的属性都过渡、具体属性名如:`width`则只有`width`过渡。 |
| 过渡的时长 | 数字+ s （秒）                                               |

**注意事项：**

1. 过渡需要：默认状态和`hover`状态样式不同，才能有过渡效果。
2. `transition`属性给需要过渡的元素本身加。
3. `transition`属性设置在不同状态中，效果不同。
   1. 给默认状态设置，鼠标移出移入都有过渡效果。
   2. 给`hover`状态设置，鼠标移入有过渡效果，移出没有。

例：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 300px;
        height: 300px;
        margin: 10% auto;
        transition: box-shadow 2s, width 2s;
      }

      .box:hover {
        width: 100px;
        box-shadow: 5px 10px 20px 10px red;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

如果`transition`设置到元素自身就为移入移出都为过渡效果。

若是给`hover`添加，则只有移入有过渡效果。

以上案例设置的是元素自身，并且阴影和宽度发生过渡变化。



# CSS3 滤镜效果

`filter`将其模糊或颜色偏移等图形效果应用于元素。

语法: `filter: 函数();`

例如：`filter: blur(5px);` blur模糊处理 数值越大越模糊。

`filter`有许多属性值，具体可查看手册。



# CSS3 calc函数

可以在声明CSS属性值的时候执行一些计算。

`width: calc(100% - 30px);`可以实现比父元素小30px。

可以进行加减乘除等四则运算。



# transform 2D转换效果

`transform`是css3中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果。

2D转换是改变标签在二维平面坐标系的位置。



## translate 位移效果

实现元素在页面的x/y轴移动。

语法格式：`transform: translate(x, y);`

或者分开写：`transform: translateX(n);` `transform: translateY(n);`

`translate`的特点不会影响到其他元素的位置，且保留位置。但对于行内元素不生效。

`translate`的值可以为百分比，其会根据元素自身大小进行移动。

配合定位使用`translate`可以设置为`50%`的值变成居中效果。

<br>

例如：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 100px;
        height: 200px;
        background-color: pink;
      }

      .box:nth-child(1):hover {
        transition: all 1s ease;
        transform: translate(30px, 30px);
        background-color: skyblue;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
    <div class="box"></div>
  </body>
</html>
```



## rotate 旋转效果

该样式可以让元素在二维平面进行顺时针旋转或者逆时针旋转。

语法：`transform: rotate(n);`

`n`为数值，可为正负，且单位为`deg`。正为顺时针，负为逆时针。默认旋转中心点是元素中心点。且效果不影响布局。

`rotate`还有其他语法效果，例如：

+ `rotateX(n)`则是以X轴为中心进行旋转，`rotateY(n)`同理。
+ `rotate3d(x, y, z);`则是以三轴进行旋转。

例如：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        margin: 100px auto;
        background-color: skyblue;
        transition: all 1s ease;
      }

      .box:hover {
        background-color: green;
        transform: rotate(360deg);
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```



## transform-origin 设置中心点

此样式可以设置元素转换的中心点。

语法：`transform-origin: x y;`

注意点：

+ x y 默认值为元素的中心点(50% 50%)。
+ 可以给x y 设置像素或者方位名词(top bottom left right center)。



## scale 缩放效果

实现元素缩放，进行放大或者缩小。

语法：`transform: scale(x, y);`

注意点：

+ `transform: scale(1, 1); `宽高放大一倍，相对于没放大。
+ `transform: scale(2, 2);`宽高都放大了2倍。
+ `transform: scale(2);`只写了一个参数，第二个则统一样。
+ `transform: scale(0.5, 0.5);`缩小。
+ 最大的优势可设置转换中心点缩放，默认中心点缩放的，而且不影响其他元素。



## transform 连写

可以实现多个效果的连写。

例如：`transform: translate(50px, 50px) rotate(180deg);`

但要注意的是，其连写有顺序问题，执行的效果会被顺序影响（先旋转会影响到坐标轴方向）。故此当同时有位移和其他属性的时候，记得要将位移放到最前。



# transform 3D转换效果

可以实现元素在三维的效果，也就是比2D多了一个坐标值。

+ x轴：水平向右，x右边正值，左边是负值。
+ y轴：垂直向下，y下面是正值，上面是负值。
+ z轴：垂直屏幕，往外面是正值，往里面是负值。

![image-20230505210611170](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/image-20230505210611170.png)

## translate3D 位移效果

比2D多了个z轴

`transform: translate3d(x, y, z);`

其在书写过程，如有需要省略则填写0px。

z轴需要带透视才能看见效果。



## perspective 透视效果

在2D平面产生近大远小视觉立体，但只是二维。

透视的单位是像素。

透视写在被观察元素的父盒子上面的，d就是视距，z是z轴，物体距离屏幕的距离，值越大物体越大。



## 3D旋转 rotate3d

3D旋转可以让其元素在三维平面内沿着x, y, z轴或自定义轴进行旋转。

**语法**：`transform: rotate3d(x, y, z, deg);`

沿着自定义轴旋转，deg为角度。

例如：

+ `transform: rotate3d(1, 0, 0, 45deg);`表示沿着x轴旋转45deg。
+ `transform: rotate3d(1, 1, 0, 45deg);`表示沿着对角旋转45deg。

**语法**：`transform: rotateX();`

沿着X轴旋转，Y轴，Z轴同理。



## 3D呈现 transfrom-style

控制子元素是否开启三维立体环境。

`transform-style: flat`子元素不开启立体空间，默认的。

`transform-style: preserve-3d;`子元素开启立体空间。

需要用给父级元素，但是影响的是子元素。



## 3D案例效果 两面翻转的盒子

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .bigBod {
      }

      .box {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 0 auto;
        transition: all 1s;
        transform-style: preserve-3d;
      }

      .box:hover {
        transform: rotateY(180deg);
      }

      .box div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 300px;
        border-radius: 50%;
        background: linear-gradient(to bottom, #f5a1ff, #a0f1ea);
      }

      .box .front {
        background: linear-gradient(to bottom right, #f5a1ff, #ffb357);
        transform: translateZ(-1px) rotateY(180deg);
      }
    </style>
  </head>
  <body>
    <div class="bigBox">
      <div class="box">
        <div class="front">欢迎你</div>
        <div class="back">重庆</div>
      </div>
    </div>
  </body>
</html>
```



## 3D案例效果 正方体旋转

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>如何搞懂3d</title>
    <style>
      .box {
        position: relative;
        width: 100px;
        height: 100px;
        margin: 100px auto;
        /* 启用子元素3d效果 */
        transform-style: preserve-3d;
      }

      /* 鼠标移动则开始动画 */
      .box:hover {
        animation: rotation 10s linear 0s infinite alternate;
      }

      /* 旋转动画开始 */
      @keyframes rotation {
        0% {
          transform: rotate3d(1, 0, 0, 0deg) rotateX(0deg);
        }

        100% {
          transform: rotate3d(1, 1, 0, 360deg) rotateX(360deg);
        }
      }
      /* 旋转动画结束 */

      /* 四面盒子样式 */
      .box div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        line-height: 100px;
        text-align: center;
      }

      /* 四面盒子位置 */
      .top {
        background-image: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);
        transform: translateY(-50px) rotateX(90deg);
      }

      .left {
        background-image: linear-gradient(
          to left bottom,
          #1fa2ff,
          #12d8fa,
          #a6ffcb
        );
        transform: translateX(-50px) rotateY(270deg);
      }

      .bottom {
        background-image: linear-gradient(to right bottom, #00c9ff, #92fe9d);
        transform: translateY(50px) rotateX(270deg);
      }

      .right {
        background-image: linear-gradient(to left top, #304352, #d7d2cc);
        transform: translateX(50px) rotateY(-270deg);
      }

      .back {
        background-image: linear-gradient(to top, #ee9ca7, #ffdde1);
        transform: translateZ(-50px) rotateX(180deg);
      }

      .front {
        background-image: linear-gradient(to bottom, #1fa2ff, #cfa6ff, #c2f78c);
        transform: translateZ(50px);
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="top">上面</div>
      <div class="left">左面</div>
      <div class="bottom">下面</div>
      <div class="right">右面</div>
      <div class="front">前面</div>
      <div class="back">背面</div>
    </div>
  </body>
</html>
```

其效果GIF：![立体效果（压缩后）](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/立体效果-1683368207141-2.gif)



## 3D案例效果 旋转相册

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>旋转相册效果</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        user-select: none;
      }

      .contentContainer {
        position: relative;
        width: 300px;
        height: 150px;
        margin: 150px auto;
        perspective: 800px;
      }

      @keyframes rotation {
        0% {
          transform: rotateY(0deg);
        }

        100% {
          transform: rotateY(360deg);
        }
      }

      .contentContainer ul {
        transform-style: preserve-3d;
        animation: rotation 10s linear infinite;
      }

      .contentContainer li {
        position: absolute;
        top: 0;
        left: 0;
        list-style: none;
      }

      .contentContainer li img {
        border-radius: 10px;
        border: 1px solid red;
      }

      .contentContainer li:nth-child(1) {
        transform: translateZ(300px);
      }

      .contentContainer li:nth-child(2) {
        transform: rotateY(60deg) translateZ(300px);
      }

      .contentContainer li:nth-child(3) {
        transform: rotateY(120deg) translateZ(300px);
      }

      .contentContainer li:nth-child(4) {
        transform: rotateY(180deg) translateZ(300px);
      }

      .contentContainer li:nth-child(5) {
        transform: rotateY(240deg) translateZ(300px);
      }

      .contentContainer li:nth-child(6) {
        transform: rotateY(300deg) translateZ(300px);
      }
    </style>
  </head>
  <body>
    <div class="contentContainer">
      <ul>
        <li>
          <img
            src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1682334288172-88e43f2d7d59?ixid=Mnw0MjI2NjN8MHwxfHRvcGljfHxibzhqUUtUYUUwWXx8fHx8Mnx8MTY4MjkyNDU0NQ&ixlib=rb-4.0.3&w=300&h=150&fmt=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1682370992900-d2ba92e09d7b?ixid=Mnw0MjI2NjN8MHwxfHRvcGljfHxibzhqUUtUYUUwWXx8fHx8Mnx8MTY4MjkyNDU0NQ&ixlib=rb-4.0.3&w=300&h=150&fmt=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1682343161292-abeebabf3e86?ixid=Mnw0MjI2NjN8MHwxfHRvcGljfHxibzhqUUtUYUUwWXx8fHx8Mnx8MTY4MjkyNDU0NQ&ixlib=rb-4.0.3&w=300&h=150&fmt=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1682364284611-b3201041f7d8?ixid=Mnw0MjI2NjN8MHwxfHRvcGljfHxibzhqUUtUYUUwWXx8fHx8Mnx8MTY4MjkyNDU0NQ&ixlib=rb-4.0.3&w=300&h=150&fmt=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1682007049179-ea0223283a90?ixid=Mnw0MjI2NjN8MHwxfHRvcGljfHxibzhqUUtUYUUwWXx8fHx8Mnx8MTY4MjkyNDU0NQ&ixlib=rb-4.0.3&w=300&h=150&fmt=webp"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1681829495534-f118398aca40?ixid=Mnw0MjI2NjN8MHwxfHRvcGljfHxibzhqUUtUYUUwWXx8fHx8Mnx8MTY4MjkyNDU0NQ&ixlib=rb-4.0.3&w=300&h=150&fmt=webp"
            alt=""
          />
        </li>
      </ul>
    </div>
  </body>
</html>

```

其效果GIF：![旋转相册效果](https://typora-xjw.oss-cn-chengdu.aliyuncs.com/img/旋转相册效果.gif)

# CSS3动画效果

动画（animation）是CSS3中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。

相比较过渡，动画可以实现更多变化、控制、连续自动播放等效果。

**动画的基本使用**：

+ 先定义动画
+ 再使用动画

**使用`keyframes`定义动画**：

```css
@keyframes name {
    0% {
        width: 100px
    }
    
    100% {
        width: 200px
    }
}
```

`name`为动画名称。0% ~ 100%是动画序列，前者是开始，后者是完成。在`@keyframes`中规定了某项CSS样式，就能创建由当前样式逐渐改为新样式的动画效果。

较常用百分比来规定变化的时间，或用`from`和`to`，等同于`0%`和`100%`。其次动画序列的时间为**序列×时间**得出其动画帧时。

例如定义了`25%`，其动画持续时间为10s，则`25%`的帧时为2.5s。



**元素调用动画**：

+ `animation-name: 动画名称;`来调用动画。

+ `animation-duration: 持续时间;`设置动画的持续时间。



**动画常见效果**：

| 属性                        | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ |
| `@keyframes`                | 规定动画                                                     |
| `animation`                 | 动画属性的简写属性，除了`animation-play-state`属性           |
| `animation-duration`        | 规定动画完成一个周期所花费的时间                             |
| `animation-timing-function` | 规定动画的速度曲线，默认是`ease`                             |
| `animation-delay`           | 规定动画何时开始                                             |
| `animation-iteration-count` | 规定动画被播放的次数，默认是1，还有`infinite`                |
| `animation-direction`       | 规定动画是否在下一个周期逆向播放，默认是`normal`，`alternate`逆播放 |
| `animation-play-state`      | 规定动画是否正在运行或暂停。默认是`running`，还有`pause`     |
| `animation-fill-mode`       | 规定动画结束后状态，保持`forwards`回到起始`backwards`        |
| `animation-name`            | 规定动画的名称                                               |



## animation 动画简写

`animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态;` 



## animation-timing-function 速度曲线调节

`animation-timing-function` 规定动画的速度曲线，默认是`ease`。

**常用值**:

| 值            | 说明                                           |
| ------------- | ---------------------------------------------- |
| `linear`      | 动画从头到尾的速度是相同。匀速                 |
| `ease`        | 默认。动画以低俗开始，然后加快，在结束前减慢。 |
| `ease-in`     | 动画以低速开始                                 |
| `ease-out`    | 动画以低速结束                                 |
| `ease-in-out` | 动画以低速开始和结束                           |
| `steps()`     | 指定了时间函数中的间隔数量(步长)               |

使用`steps()`可以实现文字打字出现效果。

例如：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 0px;
        /* 强制在一行 */
        white-space: nowrap;
        overflow: hidden;
        font-size: 12px;
        animation: step 4s steps(28) forwards;
      }

      @keyframes step {
        0% {
          width: 0;
        }

        100% {
          width: 338px;
        }
      }
    </style>
  </head>
  <body>
    <div>北京交通委提醒您开车不规范亲人两行泪</div>
  </body>
</html>
```



# 浏览器私有前缀

浏览器私有前缀是为了兼容老版本的写法，新版本的浏览器无需添加。

**私有前缀**：

+ `-moz-` ：代表firefox浏览器私有属性。
+ `-ms-` ：代表ie浏览器私有属性。
+ `-webkit-` ：代表safari、chrome私有前缀。
+ `-o-` ：代表Opera私有前缀。

**提倡的写法**：

```css
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
-o-border-radius: 10px;
border-radius: 10px;
```



# 笔记总结

关于CSS的内容是非常多的，在前端的学习中需要大量的查阅官方文档，了解其用法和相关属性。目前这篇笔记是以我的复习思路写的，且内容是以[pink老师](https://www.bilibili.com/video/BV14J4114768/?p=1 "比较好的教程视频")的教学视频跟进的，学习html+css的时候也是跟的pink老师，比较适合我查阅，因此内容也较为混乱，各个内容章节都是无序的 ，故此并不适合其他人。此篇笔记往后还会继续添加更新内容。

