# AJAX

## express

> express是基于node.js的框架，用于写一个本地服务器。

```js
// 导入express
const express = require('express')

// 创建应用对象
const app = express()
// 设置路由规则
app.get('/', (request, response) => {
  // 设置响应
  response.send('hello express')
})

// 监听端口启动服务
app.listen(8000, () => {
  console.log("服务启动成功，8000端口监听中。。。")
})
```

## 发送基本的AJAX请求

### 发送GET请求

```js
{
    // 创建对象
    const xhr = new XMLHttpRequest()
    // 初始化 方法+请求的url ?后面可以拼接参数
    xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200')
    // 发送
    xhr.send()
    // 事件绑定
    xhr.addEventListener("readystatechange", () => {
        // 判断 （服务器返回所有结果 readyState=4）
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                //  处理结果 行 头 空行 体
                //  响应头
                console.log(xhr.status); // 状态码
                console.log(xhr.statusText); // 状态字符串
                console.log(xhr.getAllResponseHeaders()); // 所有的请求头
                console.log(xhr.response); // 请求体
                result.innerHTML = xhr.response
            }
        }
    }
}
```

### 发送POST请求

```js
{
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://127.0.0.1:8000/server')
    // 设置请求头 (校验用户信息)
    xhr.setRequestHeader('name', 'dxl')
    
    xhr.send('a=100;b=300')
    xhr.addEventListener("readystatechange", () => {
        // 判断
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.status);
                console.log(xhr.statusText);
                console.log(xhr.getAllResponseHeaders());
                console.log(xhr.response);
                app.innerHTML = xhr.response
            }
        }
    }
}
```

### 传参数

1. GET传参
   - 在url后面+? +参数

 	2. POST传参
      - 	在`send()`里面传参	

### 设置请求头

```js
// 设置请求头 (校验用户信息)
xhr.setRequestHeader('name', 'dxl')
```

### 处理JSON数据

1. 将响应体转成JSON格式

```js
let data = JSON.parse(xhr.response) // 手动转换
hr.responseType = 'json' // 自动转换
```

2. 在服务器中的对象转成字符串格式（`response.send()`只能接受字符串）

```js
let str = JSON.stringify(obj)
```

### 取消请求

```js
xhr.abort()
```

### 设置超时

```js
timeout：2000
xhr.ontimeout = () => {
    alert('网络请求超时')
}
xhr.onerror = () => {
    alert('网络错误')
}
```

### 阻止发送重复的网络请求

设置节流阀，默认为false，发送成功（open后）为true，readyState === 4 时改为false，为true时取消发送

```js
let isSend = false
let xhr = null
btn.addEventListener('click', () => {
    if (isSend) xhr.abort()
    xhr = new XMLHttpRequest()
    isSend = true
    xhr.open('GET', 'http://127.0.0.1:8000/timeout')
    xhr.send()
    xhr.timeout = 5000
    xhr.onerror = () => {
        alert('网络错误')
    }
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4) {
            isSend = false
            if (xhr.status >= 200 && xhr.status < 300) {
                result.innerHTML = xhr.response
            }
        }
    })
})
```

## 用Jq发送Ajax请求

### 发送GET请求

```js
$.get('http://localhost:8080/jQ-server', {a: 100, b: 200}, (data) => {
    console.log(data)
}, 'json')
```

参数顺序：url， query， 回调函数， 响应体类型

### 发送POST请求

```js
$.post('http://localhost:8080/jQ-server', (data) => {
console.log(data)
})
```

### 发送常规请求

```js
$.ajax({
url: 'http://localhost:8000/jQ-server',
// 参数
data: {
a: 100,
b: 200
},
// 请求的方式
type: 'POST',
// 设置请求头信息
headers: {
name: 'dxl'
},
// 设置响应头类型
dataType: 'json',
// timeout: 2000,
success(data) {
console.log(data)
},
error() {
console.log('请求失败，检查网络')
}
```

## 发送Axios请求

### 设置baseURL

```js
axios.defaults.baseURL = 'http://localhost:8080'
```

### 发送GET请求

```js
axios.get('/axios-server', {
  // 设置参数（query）
  params: {
    a: 100,
    b: 200
  },
  // 设置请求头
  headers: {
    username: 'dxl'
  }
}).then((data) => {
  console.log(data)
})
```

### 发送POST请求

```js
// post 请求 参数 url， 请求体， 其他参数
axios.post('/axios-server', data, config)
```

### 发送常规请求

```js
// 发送通用请求
axios({
  url: '/axios-server',
  method: 'POST',
  headers: config.headers,
  params: config.params,
  data
})
```
