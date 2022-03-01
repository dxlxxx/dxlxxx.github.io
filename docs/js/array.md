---
title: 数组的常用方法
date: 2022/3/1
tags:
  - Js
categories:
  - Js
---

# 字符串和数组的常用方法

## slice

​ 数组和字符串都有的方法大，用于截取，arr.slice(start, end) 不改变原数组，返回一个新数组

## splice

​ 数组的方法，可以用来删除和更改（会修改原数组）

- 删除

  arr.splice(start, 删除个数)

- 更改

​ arr.splice(start,删除的个数,插入的内容（逗号连接 item1， item2）)
