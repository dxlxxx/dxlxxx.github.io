---
title: Vue的补充
date: 2022/2/28
tags:
  - Vue
categories:
  - Vue
---

# Vue

## vue补充

### v-bind.sync

在修改父组件的props的时候我们需要在父组件中监听子组件的$emit事件，在父组件中改变props

`v-bind.sync`就是这个方式的语法糖，类似于双向绑定



#### Vue中 key 值的作用 

1. 有相同父元素的子元素必须有独特的 key，重复的 key 会造成渲染错误。

2. index不能作为key值，因为在数组的个数发生改变时，index的值会发生改变。

#### Vue 组件中 data 为什么必须是函数

1. 每个实例可以维护一份被返回对象的独立的拷贝（每个实例有自己独有的data）

2. 如果 Vue 没有这条规则，点击一个按钮就会影响到其它所有实例。

#### Vue的响应式原理

Vue的响应式需要做三件事情

1. 数据劫持：当数据变化时，我们可以做一些特定的事情

2. 依赖收集：我们要知道那些视图层的内容（DOM）依赖了那些数据（state）

3. 派发更新：数据变化后，如何通知依赖这些数据的DOM

##### 数据劫持

> 讲到数据劫持就需要了解`Object.defineProperty()`这个方法

`Object.defineProperty()`这个方法会直接在一个对象上定义一个新的属性，或者修改一个现有的属性，并返回此对象。它的主要作用是定义一些对象隐藏的属性和方法如：`get(), set()`

```js
let obj = {};
let val = 1;
// get不能直接知道a属性发生了改变，所以需要创建一个变量，保存这个属性的值
// 这相当于我们自定义了obj.a取值和赋值的行为，使用自定义的getter和setter来重写了原有的行为，这也就是数据劫持的含义。
Object.defineProperty(obj, 'a', {
    // getter
    get() {
        console.log('你访问了a属性');
        return val;
    },
    // setter
    set(newValue) {
        if (val === newValue) return;
        console.log(`你改变了a属性a=${newValue}`);
        val = newValue;
    },
});
```

由于上面打方法需要写一个全局变量，所以我们一般将它封装成一个函数

~~~ js
function defineReactive(data, key, value = data[key]) {
    Object.defineProperty(data, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue === value) return;
            value = newValue;
        },
    });
}
~~~

当对象里面有多个属性时，就需要建一个Observer（观察者）类，来遍历对象里的每一个属性，设置`get(), set()`监听属性的改变。

```JS
class Observer {
  constructor(value) {
    this.value = value;
    this.walk();
  }
  walk() {
    Object.keys(this.value).forEach(key => defineReactive(this.value, key));
  }
}
```

当对象的属性是一个对象时，我们可以使用递归来完成嵌套属性的数据劫持。

```js
class Observer {
  constructor(value) {
    this.value = value;
    this.walk();
  }
  walk() {
    Object.keys(this.value).forEach(key => defineReactive(this.value, key));
  }
}
// 入口函数
function observe (data) {
  if (typeof data !== 'object') return
  new Observer(data)
}
function defineReactive (data, key, value = data[key]) {
  // 如果value是对象，递归调用observe来监测该对象
  // 如果value不是对象，observe函数会直接返回
  observe(value)
  Object.defineProperty(data, key, {
    get () {
      console.log('你访问了' + key);
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      console.log('你更改了' + key);
      value = newValue;
      observe(newValue) // 设置的新值也要被监听
    },
  });
}
```

