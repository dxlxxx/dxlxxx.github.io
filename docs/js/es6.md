---
title: ES6
date: 2022/3/1
tags:
  - Js
categories:
  - Js
---

# es6

## let

用 let 声明的特点：

1. 不能重复声明
2. 具有块级作用域
3. 不会变量提升
4. 不会绑定到 window 上

## const

用 const 声明常量：

1. 一定要赋初始值
2. 一般常量名大写
3. 常量的值不能修改
4. 具有块级作用域
5. 可以对数组和对象进行修改

## 解构

### 数组解构

用`[]`进行解构

```js
const array = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = array;
console.log(a, b, c, d, e);
```

### 对象解构

用`{}`进行解构

```JS
const obj = {
  name: 'dxl',
  age: 18,
  sex: 'man',
  setAge: function (age) {
    this.age = age;
  },
};
let { name, age, sex, setAge } = obj;
setAge(20); // 这样调用没用，this指向window
console.log(name, age, sex, setAge);
```

## 模板字符串

```js
let str1 = `
我
可以
换行
`;
let str2 = "dxl";
console.log(`${str2}是帅哥`);
```

## 对象的简化写法

```JS
let name = 'dxl'
let age = 18
const obj = {
  name,
  age,
  setAge(age){
    this.age=age
  }
}
obj.setAge(20)
console.log(obj);
```

## 箭头函数

不会指定 this 和 arguments，不能作为构造函数

### this 的指向问题

箭头函数的 this 是静态的，它的 this 的值等于**声明箭头函数的位置**所在的**作用域**的 this 值

```js
function fn1() {
  console.log(this.name);
}
let fn2 = () => {
  console.log(this.name);
};
window.name = "dxl";
const obj = {
  name: "zh",
};
fn1(); // dxl
fn2(); // dxl
fn1.call(obj); // zh
fn2.call(obj); // dxl
```

### 简写

```js
let add = (n) => n + n;
```

**参数只有一个**可以省略括号，**返回值只有一行**，可以省略 return 和大括号

return 一个对象的简写需要加括号

```js
() => ({ name: "dxl", age: 18 });
```

### 注意事项

1. 箭头函数不能作为构造函数
2. 箭头函数没有 arguments 变量
3. this 的指向问题
4. 箭头函数不适合与 this 有关的回调：事件回调，对象的方法
5. 箭头函数适合与 this 无关的回调：定时器，数组的方法

## 函数参数默认值

带默认值的参数一般写在末尾

```js
function fn(n, m = 10) {
  console.log(n + m);
}
fn(10);
```

默认值和结构结合

```js
const obj = {
  name: "dxl",
  age: 15,
  sex: "man",
};
function fn2({ name, age, sex = "wman" }) {
  console.log(name, age, sex);
}
fn2(obj);
```

## promise

promise 构造函数时同步的，.then 是异步的

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});
promise.then(() => {
  console.log(4);
});
console.log(5);

// 运行结果是： 1,2,5,4
// 解释：promise的构造函数是同步执行，promise.then中的函数是异步执行。
```

```js
const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });
// 运行结果：then: success1
// 解释：构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何
// 作用。promise 状态一旦改变则不能再变。
// promise 有 3 种状 态： pending、fulfilled 或 rejected。
// 状态改变只能是 pending->fulfilled 或者 pending-> rejected，
// 状态一旦改变则不能再变。
```

## 数组的高阶函数

可以接受第二个参数用来绑定 this 默认值 window，但是不能使用箭头函数

```js
// 1.filter 筛选
const newNum1 = num.filter((item) => item % 2 === 0);
console.log(newNum1);
// 2.map 映射
const newNum2 = num.map((item) => item * 2);
console.log(newNum2);
// 3.reduce 累加 preValue, 上次调用的值，在回调函数后面传初始值
const newNum3 = num.reduce((preValue, item) => preValue + item, 1);
console.log(newNum3);
// 4.forEach 迭代
num.forEach((item) => console.log(item));
// 5.find 和filter的区别 查找第一个满足的值 返回值为值本身，不是一个数组 findIndex是返回index
const newNum4 = num.find((item) => item === 85);
```

## 展开语法

在 es6 中可以通过`...args`进行展开，用于调用函数，创建数组和对象

**展开语法进行的是一个浅拷贝**

```js
// 用于函数调用或者数组构造 在ES9中可以用来构建字面量对象
// 1.调用函数
const arr = ["a", "b", "c"];
function foo(x, y, z) {
  console.log(x, y, z);
}
foo(...arr);
// 2.构建数组
const array = [...arr];
console.log(array);
// 3.构建对象
const obj = {
  name: "dxl",
  age: 18,
};
const object = { ...obj, addrees: "成都市" };
console.log(object);
```
