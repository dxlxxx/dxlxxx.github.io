# CSS

## 元素分类

### 块级元素

> div、p、ol、ul、dl、form、h1~h6、menu、table

1. 无论宽度独占一行
2. 可以设置高度，宽度，内外边距
3. 默认宽度和父级一样宽
4. 是一个盒子,里面可以放块级和行内元素
5. **放文字的块级元素不能放块级元素如：(`<p></p>`, `<h1></h1>`)**

### 行内元素

> a、b、em、i、img、input、label、span、textarea

1. 行内元素不能设置高度和宽度
2. 行内元素的高度和宽度就是他**内容本身**的宽度和高度
3. 行内元素**只能容纳行内元素和文字**
5. **`<a></a>`里面不能放`<a></a>`，但是能放块级元素**

### 行内块元素

具有行内元素和块级元素的特点

1. 可以设置高度和宽度
2. 一行可以显示多个**（多个标签之间有空格）**
3. 默认宽度是本身内容的宽度

## font的复合属性写法

`font: initial 400 25px '微软雅黑';`
**必须按照 font-style font-weight font-size font-family的顺序写，font-size font-family是必备的**

## text文本样式

添加下划线 `text-decoration: underline;`
去掉下划线（a标签） `text-decoration: none;`
首行缩进（em单位是一个字符） `text-indent: 2em;`

## 伪类选择器

```css
/* 未访问的链接 a:link  */
a:link {
  color: #333;
  text-decoration: none;
}
/* 访问过的链接 a:visited  */
a:visited {
  color: orange;
}
/* 鼠标经过的链接 a:hover  */
a:hover {
  color: skyblue;
}
/* 处于活跃的链接 a:active (按下未弹起)  */
a:active {
  color: pink;
}
/* 处于焦点时input:focus */
input:focus {
  background-color: pink;
}
```

必须按照上面的**顺序**

## a标签的常用写法

```css
a {
  text-decoration: none;
}
a:hover {
  color: skyblue;
}
```
## 设置背景

### background-image

多用于小图片和特大图片，方便调位置

### background-position

1. 参数可以为方位名词，不讲究顺序(center, left)
2. 参数可以是具体位置(20px, 10px)先x后y
3. 参数可以是混合单位(center, 40px)先x后y, 王者荣耀官网背景图片做法

### background-attachment

1.scroll跟随滚动
2.fixed固定

### background复合写法

无固定位置一般为color, url, repeat, position

## 行高的继承性

如果父元素指定了行高没带单位(1.5)那么它的子元素的行高就是子元素文字大小的1.5倍

## 内边距padding(margin)

特别注意跟3个值是**上 左右 下**， 跟4个值是 **上 右 下 左 (顺时针)**

## 块级盒子水平居中

`margin: 0, auto`
**块级盒子必须要有宽度**

## 行内元素(行内块元素)水平居中

给**父级元素**设置`text-align: center;`

## 嵌套块元素塌陷(外边距合并)

对于两个嵌套关系的块元素，父元素有上边距同时子元素也有上边距，此时父元素会塌陷**较大**的外边距值。

1. 可以为父元素定义上边距
2. 可以为父元素定义上内边距
3. 可以为父元素添加`overflow: hidden;`

当外边距塌陷时，外边距之间的计算方式是怎样的？

1. 两个都是正数，取**较大**的值
2. 两个都是负数，取绝对值较大的值
3. 一正一负，取两个值得和

## 浮动

`float: right/left`

1. 脱离标准流(脱标)
2. 浮动的盒子不再保留原先的位置
3. 任何元素都能进行浮动，浮动后具有**行内块**元素的特征

   - 如果块级盒子没有设置宽度，默认宽度和父级一样宽，但浮动后大小根据内容来决定
   - 和行内块不同，**浮动元素间没有缝隙**

**浮动只影响后面的标准流**

### 清除浮动(用于父盒子没有高度的情况)

由于父级盒子很多情况下，不方便给高度，但是，子盒子浮动又不占有位置，最后父级盒子高度为0时，就会影响下面的标准流盒子。

1. 隔墙法
   给最后一个浮动的元素添加一个块级元素，设置它的属性`clear: both;`(不常用)
2. overflow
   给父盒子添加属性`overflow: hidden`
3. 伪元素(单伪元素，双伪元素before，after)
   给父盒子添加

## 定位

### 相对定位

`position: relative `

1. 移动位置参考点是 自己原来的位置(不脱标)
2. 不脱标，**继续保留原来的位置**
3. 最典型的应用是**给绝对定位当爹**

### 绝对定位

`position: absolute`

1. 如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位
2. 如果祖先元素有定位(相对，绝对，固定定位)，则以最近一级的有定位祖先元素为参考点移动位置
3. 绝对定位会脱标

#### 子绝父相

因为父级需要占用位置，因此是相对定位，子盒子不需要占有位置，则是绝对定位

### 固定定位

position:fixed;

1. 以浏览器可视窗口为参照点移动元素

   - 跟父元素没有任何关系
   - 不随滚动条滚动
2. 固定定位**不占有原先的位置**
   固定定位也是脱标的，是一种特殊的绝对定位
   特殊用法：固定在版心的右侧
     1. 让固定盒子`left: 50%`版心中间。
     2. 再用`margin-left:版心宽度的一半距离`。多走版心宽度的一半位置就可以让固定盒子贴着版心右侧对齐了

### 绝对定位和固定定位要居中的方法

1. 让固定盒子`left: 50%`版心中间。
2. 再用`margin-left: 负的盒子宽度的一半距离`。少走盒子宽度的一半位置就可以让盒子居中对齐了

### 绝对定位和固定定位也和浮动类似

1. 行内元素添加绝对定位或者固定定位，可以直接设置高度和宽度
2. 块级元素添加绝对定位或者固定定位，如果不给宽度或者高度，默认大小是内容的大小

### 注意事项

1. 浮动只会压住标准流的盒子，不会压住标准流盒子里的文字
2. 定位会

### z-index

设置盒子的z轴，**不带单位**

**只有定位的盒子有这个属性**

### CSS画三角形和梯形

1. 三角形

``` css
width: 0;
height: 0;
border: 50px solid transparent;
border-bottom-color: pink;
```

2. 梯形

   1. 先画直角三角形

   ```css
   width: 0;
   height: 0;
   border: 50px solid transparent;
   border-bottom: 0 
   border-right-color: pink;
   ```

   2. 把直角三角形定位到矩形旁边

   ```css
   position: absolute;
   left: 50px;
   ```

## flex布局

### 父项flex属性

#### flex-direction

设置主轴的方向

```css
flex-direction: row; /*默认x*/
flex-direction: column; /*设置y*/
```

#### justify-content

设置主轴上的子元素排列方式

```css
justify-content: center;  /*居中*/
justify-content: flex-start; /*居左*/
justify-content: flex-end; /*居右*/
justify-content: space-around;/*平均分配剩余空间*/
justify-content: space-between;/*第一个和最后一个居左和居右，其余分配剩余空间*/ 重点
```

#### flex-wrap

flex布局默认是不换行的，如果装不下会缩小子盒子的大小

设置子元素换行

```css
flex-wrap: wrap; 
```

#### align-content

设置侧轴上的子元素排列方式（多行）

属性和justify-content完全一样，多个stretch（拉伸高度，不能设置高度）

#### align-items

设置侧轴上的子元素排列方式（单行）

子元素只有一行

属性和justify-content差不多,没有space-around和space-between，多个stretch（拉伸高度，不能设置高度）

#### flex-flow

flex-direction，flex-wrap的复合属性

### 子项flex属性

#### flex属性

控制子项占的份数

**只会占用剩余空间**

#### align-self

单独设置子项的侧轴样式

#### order

数值越小，排列顺序越靠前，默认是0

## 设置超出部分省略号

```css
 span {
      float: left;
      width: 100px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

```

