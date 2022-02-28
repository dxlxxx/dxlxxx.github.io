# SASS

## 变量和嵌套

### 变量

#### 变量的声明

```scss
$highlight-color: #F90;
```

#### 变量的引用

```scss
$highlight-color: #F90;
.selected {
  border: 1px solid $highlight-color;
}
```

### 嵌套CSS

### 嵌套CSS规则

```scss
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
```

### 父选择器的标识符&

sass的嵌套会以空格进行链接，而css3的伪选择器不能用空格链接，就用&符号代替父选择器进行链接

```scss
article a {
  color: blue;
  &:hover { color: red }
}    
```

### 群组选择器的嵌套

同时对父选择器下的多个标签设置相同属性

```scss
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
```

### 子组合选择器和同层组合选择器

#### 子组合选择器`>`

选择亲儿子

```scss
article > section { border: 1px solid #ccc }
```

#### 同层选择器

选择同级

```scss
header + p { font-size: 1.1em } 
// 选择紧挨着header的p
article ~ article { border-top: 1px dashed #ccc }
//选择article后面的所有同级article
```

### 嵌套属性

```scss
nav {
  border: {
  style: solid;
  width: 1px;
  color: #ccc;
  }
}
//指明例外规则
nav {
  border: 1px solid #ccc {
    left: 0;
    right: 0;
  }
}
```

## 混合器和继承

混合器使用`@mixin`标识符定义，这个标识符给一大段样式赋予一个名字，
这样你就可以轻易地通过引用这                                                                                                                                                                                                                                                                                                                                     个名字重用这段样式