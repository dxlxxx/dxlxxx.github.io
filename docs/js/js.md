---
title: JavaScript进阶
date: 2022/2/28
tags:
  - Js
categories:
  - Js
---

# JavaScript进阶

## 几个常见方法的区别

1. slice

​ 数组和字符串都有的方法大，用于截取，arr.slice(start, end) 不改变原数组，返回一个新数组

2. splice

​ 数组的方法，可以用来删除和更改（会修改原数组）

- 删除

  arr.splice(start, 删除个数)

- 更改

​ arr.splice(start,删除的个数,插入的内容（逗号连接 item1， item2）)

3. split

   字符串的方法，将字符串转成数组

## 数据类型

### 数据类型分类

1. 基本数据类型
   1. String：所有字符串
   2. Number：所有数字（包括 NaN）
   3. Boolean: true/false
   4. undefined: undefined
   5. null：null
2. 对象（引用）类型
   1. Object：任意对象
   2. Function：一种特殊的对象（可以执行）
   3. Array：一种特别的对象（数值下标，内部数据是有序的）

### 判断数据类型

1. typeof：

   - 可以判断：undefined、数值、字符串、布尔值、function

   - 不能判断：null 与 object、object 与 array、null 与 array

2. instanceof

   - 判断对象的具体类型

3. ===

   - 可以判断 null、undefined

### 注意事项

1. undefined 与 null 的区别
   - undefined 是定义了未赋值
   - null 是定义并赋值为 null
2. 什么时候给变量赋值为 null
   - 初始赋值，表明将要赋值为对象
   - 结束赋值，让对象成为垃圾对象（引用没有变量存储，被垃圾回收器回收）
3. 区分变量类型与数据类型
   - 数据的类型
     - 基本类型
     - 对象类型
   - 变量的类型
     - 基本类型：保存的就是基本类型的数据
     - 引用类型：保存的是地址值

## 数据、变量、内存

### 在 js 调用函数时传递变量参数时，是值传递还是引用传递？

- 理解一：都是值传递（基本/地址值）
- 理解二：可能是值传递，也有可能是引用传递（地址值）

### 释放内存

- 全局变量无法释放
- 局部变量：函数执行完自动释放
- 对象成为垃圾对象，垃圾回收器自动回收

## 函数

### 调用方法

- fn()
- obj.fn()
- call 和 apply

```js
// fn.call(obj, '参数') fn.apply(obj, '参数')
// 将对象obj临时绑定一个fn方法
const obj = {};
function fn(name) {
  this.name = name;
}
// obj.fn('dxl') obj没有fn方法
fn.call(obj, "dxl");
console.log(obj.name); // dxl
```

#### call()和 apply()的区别

传参数的方式不同

```js
fn.apply(obj, [1, 2, 3]);
fn.call(obj, 1, 2, 3);
```

### IIFE(立即执行函数)

```js
fn()(function () {
  function test() {
    console.log("----");
  }
  // 将内部的函数导出到全局
  window.$ = function () {
    return {
      test,
    };
  };
})({});
$().test();
```

### this 指向问题

#### this 是什么？

- 任何函数本质上都是通过某个对象来调用的，如果没有直接指定就是 window
- 所有函数内部都有一个变量 this
- 它的值是调用函数的当前对象

#### 如何确定 this 的值？

- this(): window
- p.this(): p
- var a = new test():a
- p.call(obj): obj

#### bind 的用法

绑定函数的 this 指向

```js
function fn() {
  console.log(this)
}.bind('aaa')
fn() // 'aaa'
```

#### 绑定的优先级

> 直接调用叫默认绑定，obj.foo()叫隐式绑定，call，apply，bind 叫显示绑定，显示绑定传入的 this 是 null 和 undefined 时，默认为 window

1. 默认绑定优先级最低
1. 显示绑定高于隐式绑定
1. new 高于显示绑定，不能跟 call，apply 连用
1. bind 优先级大于 obj.foo()
1. bind 的优先级**小于**new 绑定 new Foo()
1. 箭头函数不绑定 this，不管是显示绑定还是隐式绑定

#### arguments

arguments 是一个对应于传递给函数参数的类数组对象，在 AO 里被定义（函数执行上下文）

##### 为什么是类数组

1. 它又可以通过 index 来访问，有 length 属性
2. 它没有数组的一些方法，map，foreach 等

## 函数高级

### 执行上下文

#### 全局执行上下文

在执行全局代码时会生成一个 window 的执行上下文对象（GO）

1. var 定义的全局变量会赋值为 undefined，添加为 window 的属性
2. function 声明的函数会赋值为函数本身，添加为 window 的属性
3. this = window

#### 函数执行上下文

在**调用函数时**，**执行函数体前**会生产一个函数上下文对象（AO）。

1. 形参赋值为实参，添加为函数执行上下文的属性
2. argument 赋值为实参列表，添加为函数执行上下文的属性
3. var 定义的局部变量赋值为 undefined，添加为函数执行上下文的属性
4. function 声明的函数赋值为函数本身，添加为函数执行上下文的方法
5. this 赋值为调用函数的对象
6. 函数执行完会销毁（闭包除外）

#### 执行上下文栈

1. 全局代码执行前。js 引擎将创建一个栈来管理存储所有的执行上下文对象
2. 在全局执行上下文（window）确定后，将它添加在栈中，（VO = GO）
3. 在函数执行上下文创建后，将它添加在栈中，（VO = AO）
4. 当函数执行完后，将栈顶的对象移除
5. 所有代码执行完了，栈中只剩下 window
6. 执行上下文栈中的对象个数是 N+1（N 是调用函数的个数）

### 变量提升和函数提升

#### 变量提升

- 用**var**声明的变量可以提前访问

- 值为 0

#### 函数提升

- 通过**function**声明的函数在声明前就可以调用
- 值为函数本身

### 作用域

作用域在函数定义时就确定了，作用域的个数为 N+1（N 时声明函数的个数），寻找变量时会从内到外依次寻找。

### 闭包（内函数和引用的变量一起组成）

#### 闭包产生的条件

1. 嵌套的函数
2. 内函数引用外函数的数据
3. 调用外函数

```js
var btns = document.querySelectorAll("button");
for (var i = 0; i < btns.length; i++) {
  (function (i) {
    btns[i].addEventListener("click", () => {
      console.log(i);
    });
  })(i);
}
```

#### 闭包的作用

1. 延长局部变量的生命周期
2. 让函数外部可以操作函数内部的数据

```js
function fn() {
  var a = 1;
  function fn2() {
    a++;
    console.log(a);
  }
  return fn2;
}
// fn()() 必须找个变量指向fn2 不然调用结束后就是垃圾对象自动回收了 fn2就被销毁了
var f = fn(); // a被销毁，但是fn2没被销毁，仍然可以访问a
f();
f();
```

#### 闭包的生命周期

1. 嵌套函数在定义时，闭包就产生了
2. 嵌套函数成为垃圾对象时，闭包就销毁了

#### 利用闭包封装模块

1. 利用立即执行函数，再往 window 上绑定 moudle 属性

```js
(function (window) {
  const msg = "hello";
  const age = 18;
  function getMsg() {
    console.log(msg);
  }
  function getAge() {
    console.log(age);
  }
  window.moudle = {
    getMsg,
    getAge,
  };
})(window);
```

2. 直接调用`window.moudle.fun`

```HTML
<script src="moudle.js"></script>
<script>
  moudle.getAge()
  moudle.getMsg()
</script>
```

#### 闭包缺点

1. 函数执行完后函数的内部变量没有即时释放，占用时间变长
2. 导致内存泄漏
3. 解决方法 fn=null（指向内部函数指的变量指向 null ）

### 函数柯里化

#### 什么是函数柯里化

这里不好说明，直接看代码

```js
// 原函数
function foo(a, b, c) {
  console.log(a + b + c);
}
// 进行柯里化
function fn1(a) {
  return function fn2(b) {
    return function fn3(c) {
      console.log(a + b + c);
    };
  };
}
```

`foo(10, 20, 30)变成了fn1(10)(20)(30)`

#### 手写函数转柯里化函数

这个比较复杂在代码里面

### 面试题

#### 执行上下文栈

```js
var i = 1;
console.log("window begin:", i);
function fn(i) {
  if (i === 4) {
    return;
  }
  console.log("fn begin:", i);
  fn(i + 1);
  console.log("fn end:", i);
}
fn(i);
console.log("window end:", i);
/*
window begin: 1
fn begin: 1
fn begin: 2
fn begin: 3
fn end: 3
fn end: 2
fn end: 1
window end: 1
*/
```

#### 变量提升和函数提升

> 先执行变量提升在执行函数提升

```js
// 1 'function' 先执行变量提升被后面执行的函数提升覆盖
function fn() {}
var fn;
console.log(typeof fn);
// 2 undefined var a 被提升了 a in window === true
if (!(a in window)) {
  var a = 1;
}
console.log(a);
// 3 报错 执行函数提升后被赋值覆盖 fn = 1 不是一个函数
var fn = 1;
function fn(fn) {
  console.log(fn);
}
fn(2);
```

#### 作用域

1. 定义是作用域就确定了，和调用位置无关

```js
var x = 10;
function fn() {
  console.log(x);
}
function fn2(f) {
  var x = 100;
  f();
}
fn2(fn); // 输出10
```

2. 要输出对象里的属性需要 this.fn

```js
var fn3 = function () {
  console.log(fn3);
};
fn3();
var obj = {
  fn: function () {
    console.log(fn);
    console.log(this.fn);
  },
};
obj.fn(); // 输出fn3 报错 fn
```

#### 闭包

1. 方法里面 return 的函数在调用时相当于直接调用`fn2()`,所以 this 指向 window，需要添加一个`var that = this;`存储指向 object 的 this

```js
var len = "window";
const obj = {
  len: "object",
  fn1() {
    var that = this;
    var len = "hello";
    function fn2() {
      console.log(this.len);
      console.log(that.len);
      console.log(len);
    }
    return fn2;
  },
};
obj.fn1()();
```

2. 究极面试题，这里每调用一次就会产生一个新的闭包，如果不存起来闭包就会销毁，闭包的值还是上一次的值

```js
function fun(n, o) {
  console.log(o);
  return {
    fun(m) {
      return fun(m, n);
    },
  };
}
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3); // undefined 0 0 0
var b = fun(0).fun(1).fun(2).fun(3); // undefined 0 1 2
var c = fun(0).fun(1); // undefined 0
c.fun(2); // 1
c.fun(3); // 1
```

## 对象

### 对象的创建方法

1. Object 模式

   > 用于属性未知的情况

```js
var obj1 = new Object();
obj1.name = "Bob";
obj1.age = 18;
console.log(obj1);
```

2. 字面量模式

   > 创建多个对象会有重复代码

```js
var obj2 = {
  name: "Tom",
  age: 18,
};
console.log(obj2);
```

3. 工厂模式

   > 没有具体类型，都是 object 类型

```js
function createObj(name, age) {
  var obj = {
    name: name,
    age: age,
  };
  return obj;
}
var p1 = createObj("Jack", 18);
console.log(p1);
```

4. 构造函数模式

   > 每个实例都会添加上相同的方法，占用内存

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.setAge = function (age) {
    this.age = age;
  };
}
var p2 = new Person("Andy", 18);
console.log(p2);
p2.setAge(20);
console.log(p2);
```

5. 构造函数加原型模式

   > 构造函数模式的改进，把相同的属性添加到构造函数的原型上面，这样每个实例都有一个隐式原型指向相同的显示原型，不会有相同的属性

```js
function Student(name, price) {
  this.name = name;
  this.price = price;
}
Student.prototype.setPrice = function (price) {
  this.price = price;
};
var s1 = new Student("Anna", 1000);
s1.setPrice(1200);
console.log(s1);
```

### 什么时候必须使用['属性名']的方式？

- 属性名包含特殊字符串：- 空格
- 属性名不确定（是个变量）

### 删除一个属性

`delete obj.name`

### 对象的继承

让要继承的构造方法的显示原型等于 new 【被继承的构造方法】

【继承的构造方法】.prototype = new【被继承的构造方法】

`【继承的构造方法】.prototype.__proto__ === 【被继承的构造方法】.prototype `

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.setAge = function (age) {
    this.age = age;
  };
}
function Student(name, age, grade) {
  Person.call(this, name, age); // 获取Person的属性（假继承）相当于 this.Person(name, age)
  this.grade = grade;
}
Student.prototype = new Person(); // 真继承，获得方法
Student.prototype.constructor = Student; // 修正构造方法指向Student
var s = new Student("Bob", 18, 1000);
s.setAge(20);
console.log(s);
```

为什么要用`Person.call(this, name, age)`

不用的弊端

1. 直接打印 s 看不到继承的属性,需要 s.name
2. 不能单独给 s 对象赋值
3. 会相互影响对象间的属性

### 浅拷贝和深拷贝

1. 浅拷贝

当拷贝对象的属性也是一个对象时，进行浅拷贝拷贝的是地址值。拷贝对象的（嵌套对象）值发生改变时，被拷贝对象的（嵌套对象）值也会发生改变

```js
// es6语法糖实现浅拷贝 Object对象的assign方法
const obj1 = {
  name: 1,
  obj: {
    age: 1,
    sex: "m",
  },
};
const obj2 = {};
Object.assign(obj2, obj1);
```

2. 深拷贝

   深拷贝会拷贝多层，不会把地址值直接拷贝给拷贝对象的属性

   ```js
   // s
   function deepCopy(newObj, oldObj) {
     // 获得oldObj的item
     for (const k in oldObj) {
       item = oldObj[k];
       // 判断类型
       if (item instanceof Array) {
         newObj[k] = [];
         // 是对象类型 进行递归
         deepCopy(newObj[k], item);
       } else if (item instanceof Object) {
         newObj[k] = {};
         deepCopy(newObj[k], item);
       } else {
         newObj[k] = item;
       }
     }
   }
   ```

## 原型链

#### 原型（prototype）

- 作用：每个函数的实例对象都自动拥有原型中的属性（方法）

- 特点：

  1. 默认为空对象
  2. 原型中的 constructor 指向函数对象（调用者）

- 绑定：通过`Fun.prototype.test`动态绑定到原型上

  ```js
  Fun.prototype.test = function () {
    console.log("test()");
  };
  ```

- 函数创建的示例可以访问原型上的属性（方法）

  ```js
  const fn = new Fun();
  fn.test();
  ```

#### 隐式原型（`__proto__`）和显示原型（Prototype）

每个对象都有隐式原型

<img src="C:\Users\dxl\AppData\Roaming\Typora\typora-user-images\image-20211023133953538.png" style="zoom: 67%; margin-left:0" />

#### 原型链图解

![](https://i.loli.net/2021/10/25/Y9XKPhrqtbfm1IF.png)

#### 原型链补充

1. 函数的显示原型指向的对象默认是空 Object 实例（Object 除外）

   ```js
   console.log(Object.prototype instanceof Object); // false
   ```

2. 所有的函数都是 Function 的实例（包括 Function）

   ```js
   console.log(Function.__proto__ === Function.prototype); // true
   ```

3. Object 的原型对象是原型链的尽头

   ```js
   console.log(Object.prototype.__proto__); // null
   ```

#### instanceof 原理

A instanceof B 就是去寻找 A 和 B 在原型链上有没有交点

B 只走一条路（走到 B.prototype），A 需要沿着 proto 一直走到走不通为止

```js
console.log(Object instanceof Function); // true
console.log(Function instanceof Function); // true
console.log(Function instanceof Object); // true
console.log(Object instanceof Object); // true
function Foo() {}
console.log(Foo instanceof Function); // true
console.log(Object instanceof Foo); // false
```

###

## 进程和线程

### 进程

1. 进程是程序的一次执行
2. 进程是一个程序及其数据在处理机上顺序执行时所发送的活动
3. 进程是具有**独立功能**的程序在一个数据集合上运行的过程，它是系统进行资源分配和调度的一个**独立单位**

### 线程

线程是进程里 cpu 调度的最小单位

**js 是单线程**

### 事件循环模型

![](F:\Desktop\Snipaste_2021-10-31_16-36-25.png)

js 会先执行初始化代码包括特殊的 DOM 监听，Ajax，定时器，然后把这些回调函数放到回调队列里面，等初始化代码执行完之后才循环遍历回调队列，按先后顺序依次执行

### H5 的 Web Words

通过`postMessage`来进行线程通信，`onmessage`来设置回调函数，接受数据后进行操作

> H5 中实现多线程的方式，把一些复杂的计算放到子线程里面去
>
> 因为 js 是单线程的，如果计算在主线程中执行，那么计算途中**不能进行网页的交互**
>
> 子线程中不能访问 window，不能操作 DOM

1. 主线程的代码

```html
<input type="text" name="" id="number" />
<button>计算</button>
<script>
  var inp = document.querySelector("#number");
  var btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    var number = inp.value;
    var worker = new Worker("worker.js");
    console.log("主线程发送数据给子线程:", number);
    worker.postMessage(number);
    // console.log(worker);
    worker.onmessage = function (event) {
      console.log("接收worker发送的数据:", event.data);
    };
    // var result = fubulaxi(number)
    // console.log(result);
  });
</script>
```

2. 子线程代码

```js
function fubulaxi(n) {
  return n <= 2 ? 1 : fubulaxi(n - 1) + fubulaxi(n - 2);
}
var onmessage = function (event) {
  // console.log(event.data);
  console.log("worker接收到了数据:", event.data);
  var result = fubulaxi(event.data);
  console.log("worker返回结果:", result);
  postMessage(result);
};
```

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
