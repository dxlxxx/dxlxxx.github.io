# React

## React创建组件的方式

1. 函数式组件

```jsx
function MyComponent(props) {
	return (
  	<div>
    	<h1>hello, world</h1>
    </div>
  )
}
```

2. 类组件

```jsx
class MyComponent extends React.Component {
	render() {
    return (
			<div>
      	<h1>hello, world</h1>
      </div>
    )
  }
}
```

## 渲染组件

```jsx
ReactDOM.render(
	<MyComponent/>,
  document.getElementById("root")
)
```

## 组件的状态

在hook出来之前，只有类组件有状态

```jsx
class MyComponent extends React.Component {
  constructor(props) {
		super(props)
    this.state = {
      message: "hello, world"
    }
  }
	render() {
    return (
			<div>
      	<h1>{this.state.message}</h1>
      </div>
    )
  }
}
// 简写方式
class MyComponent extends React.Component {
  // 在组件实例上添加state属性
  state = {
    message: "hello, world"
  }
	render() {
    return (
			<div>
      	<h1>{this.state.message}</h1>
      </div>
    )
  }
}
```

## 组件通讯

### 父向子传递

```jsx
// 函数组件
function MyComponent(props) {
	return (
  	<div>
    	<h1>hello, world {props.name}</h1>
    </div>
  )
}
ReactDOM.render(
	<MyComponent name="Deng"/>,
  document.getElementById("root")
)
// 类组件
class MyComponent extends React.Component {
	render() {
    return (
			<div>
      	<h1>hello, world {this.props.name}</h1>
      </div>
    )
  }
}
ReactDOM.render(
	<MyComponent name="Deng"/>,
  document.getElementById("root")
)
```

#### 对props进行类型限制

```jsx
//  需要导入 prop-types库
import PropTypes from "prop-types"
Person.propTypes = {
	name: PropTypes.string,
  age: PropTypes.number,
  sex: PrppTypes.string
}
```

对props赋默认值

```jsx
Person.defaultProps = {
	sex: "男"
}
```

### 子向父传递

同样是props，需要父组件向子组件传递一个回调函数

```jsx
// 计数器案例，把加减封装成一个子组件
import React, { Component } from "react";

export default class Demo extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <Son
          increment={() => {
            this.setState({ count: this.state.count + 1 });
          }}
          decrement={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        />
      </div>
    );
  }
}

class Son extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

```

