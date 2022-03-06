"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[310],{8471:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4e0a41c6",path:"/docs/react/react-hook.html",title:"react-hook",lang:"en-US",frontmatter:{title:"react-hook",date:"2022/3/6",tags:["React-hook"],categories:["react"]},excerpt:"",headers:[{level:2,title:"基础hook",slug:"基础hook",children:[{level:3,title:"useState",slug:"usestate",children:[]},{level:3,title:"useEffect",slug:"useeffect",children:[]},{level:3,title:"useContext",slug:"usecontext",children:[]}]}],git:{createdTime:1646574404e3,updatedTime:1646574404e3,contributors:[{name:"dxlxxx",email:"1271704084@qq.com",commits:1}]},filePathRelative:"docs/react/react-hook.md"}},7002:(n,s,a)=>{a.r(s),a.d(s,{default:()=>En});var t=a(6252);const e=(0,t._)("h1",{id:"react-hook",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#react-hook","aria-hidden":"true"},"#"),(0,t.Uk)(" React hook")],-1),p={class:"table-of-contents"},o=(0,t.Uk)("基础hook"),c=(0,t.Uk)("useState"),l=(0,t.Uk)("useEffect"),u=(0,t.Uk)("useContext"),r=(0,t.uE)('<h2 id="基础hook" tabindex="-1"><a class="header-anchor" href="#基础hook" aria-hidden="true">#</a> 基础hook</h2><h3 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> <code>useState</code></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>返回一个 state，以及更新 state 的函数。</p><p>在初始渲染期间，返回的状态 (<code>state</code>) 与传入的第一个参数 (<code>initialState</code>) 值相同。</p><p><code>setState</code> 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。</p><h4 id="函数式更新" tabindex="-1"><a class="header-anchor" href="#函数式更新" aria-hidden="true">#</a> 函数式更新</h4><p>如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 <code>setState</code>。该函数将接收先前的 state，并返回一个更新后的值。下面的计数器组件示例展示了 <code>setState</code> 的两种用法：</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">UseState</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>initialCount<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialCount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        Count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">setCount</span><span class="token punctuation">(</span>initialCount<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Reset</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">prevState</span> <span class="token operator">=&gt;</span> prevState <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">-</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">prevState</span> <span class="token operator">=&gt;</span> prevState <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',9),i=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,t._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,t._)("circle",{cx:"12",cy:"12",r:"9"}),(0,t._)("path",{d:"M12 8v4"}),(0,t._)("path",{d:"M12 16h.01"})])]),(0,t._)("p",{class:"custom-container-title"},"WARNING"),(0,t._)("p",null,[(0,t.Uk)("与 class 组件中的 "),(0,t._)("code",null,"setState"),(0,t.Uk)(" 方法不同，"),(0,t._)("code",null,"useState"),(0,t.Uk)(" 不会自动合并更新对象。你可以用函数式的 "),(0,t._)("code",null,"setState"),(0,t.Uk)(" 结合展开运算符来达到合并更新对象的效果。")]),(0,t._)("div",{class:"language-jsx ext-jsx line-numbers-mode"},[(0,t._)("pre",{class:"language-jsx"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"setState"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"prevState"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token comment"},"// 也可以使用 Object.assign"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)("prevState"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)("updatedValues"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br")])]),(0,t._)("p",null,[(0,t._)("code",null,"useReducer"),(0,t.Uk)(" 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象。")])],-1),k=(0,t.uE)('<h4 id="惰性初始-state" tabindex="-1"><a class="header-anchor" href="#惰性初始-state" aria-hidden="true">#</a> 惰性初始 state</h4><p><code>initialState</code> 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token function">someExpensiveComputation</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> initialState<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> <code>useEffect</code></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span>didUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>该 Hook 接收一个包含命令式、且可能有副作用代码的函数。</p><p>在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。</p><p>使用 <code>useEffect</code> 完成副作用操作。赋值给 <code>useEffect</code> 的函数会在组件渲染到屏幕之后执行。你可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道。</p>',8),d=(0,t.Uk)("默认情况下，effect 将在每轮渲染结束后执行，但你可以选择让它 "),b={href:"https://react.docschina.org/docs/hooks-reference.html#conditionally-firing-an-effect",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("在只有某些值改变的时候"),g=(0,t.Uk)(" 才执行。"),f=(0,t.uE)('<h4 id="清除-effect" tabindex="-1"><a class="header-anchor" href="#清除-effect" aria-hidden="true">#</a> 清除 effect</h4><p>通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，<code>useEffect</code> 函数需返回一个清除函数。以下就是一个创建订阅的例子：</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> subscription <span class="token operator">=</span> props<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 清除订阅</span>\n    subscription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则<strong>在执行下一个 effect 之前，上一个 effect 就已被清除</strong>。在上述示例中，意味着组件的每一次更新都会创建新的订阅。若想避免每次更新都触发 effect 的执行，请参阅下一小节。</p><h4 id="effect-的执行时机" tabindex="-1"><a class="header-anchor" href="#effect-的执行时机" aria-hidden="true">#</a> effect 的执行时机</h4><p>与 <code>componentDidMount</code>、<code>componentDidUpdate</code> 不同的是，在浏览器完成布局与绘制<strong>之后</strong>，传给 <code>useEffect</code> 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。</p>',6),h=(0,t.Uk)("然而，并非所有 effect 都可以被延迟执行。例如，在浏览器执行下一次绘制前，用户可见的 DOM 变更就必须同步执行，这样用户才不会感觉到视觉上的不一致。（概念上类似于被动监听事件和主动监听事件的区别。）React 为此提供了一个额外的 "),x={href:"https://react.docschina.org/docs/hooks-reference.html#uselayouteffect",target:"_blank",rel:"noopener noreferrer"},_=(0,t._)("code",null,"useLayoutEffect",-1),v=(0,t.Uk)(" Hook 来处理这类 effect。它和 "),U=(0,t._)("code",null,"useEffect",-1),w=(0,t.Uk)(" 的结构相同，区别只是调用时机不同。"),y=(0,t.uE)('<p>虽然 <code>useEffect</code> 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行。React 将在组件更新前刷新上一轮渲染的 effect。</p><h4 id="effect-的条件执行" tabindex="-1"><a class="header-anchor" href="#effect-的条件执行" aria-hidden="true">#</a> effect 的条件执行</h4><p>默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。</p><p>然而，在某些场景下这么做可能会矫枉过正。比如，在上一章节的订阅示例中，我们不需要在每次组件更新时都创建新的订阅，而是仅需要在 <code>source</code> prop 改变时重新创建。</p><p>要实现这一点，可以给 <code>useEffect</code> 传递第二个参数，它是 effect 所依赖的值数组。更新后的示例如下：</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> subscription <span class="token operator">=</span> props<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      subscription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>props<span class="token punctuation">.</span>source<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>此时，只有当 <code>props.source</code> 改变后才会重新创建订阅。</p>',7),C={class:"custom-container warning"},j=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,t._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,t._)("circle",{cx:"12",cy:"12",r:"9"}),(0,t._)("path",{d:"M12 8v4"}),(0,t._)("path",{d:"M12 16h.01"})])],-1),S=(0,t._)("p",{class:"custom-container-title"},"WARNING",-1),E=(0,t.Uk)("如果你要使用此优化方式，请确保数组中包含了"),M=(0,t._)("strong",null,"所有外部作用域中会发生变化且在 effect 中使用的变量",-1),R=(0,t.Uk)("，否则你的代码会引用到先前渲染中的旧变量。请参阅文档，了解更多关于"),W={href:"https://react.docschina.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies",target:"_blank",rel:"noopener noreferrer"},q=(0,t.Uk)("如何处理函数"),P=(0,t.Uk)(" 以及"),D={href:"https://react.docschina.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("数组频繁变化时的措施"),I=(0,t.Uk)(" 的内容。"),N=(0,t._)("p",null,[(0,t.Uk)("如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（"),(0,t._)("code",null,"[]"),(0,t.Uk)("）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循输入数组的工作方式。")],-1),L=(0,t.Uk)("如果你传入了一个空数组（"),H=(0,t._)("code",null,"[]",-1),A=(0,t.Uk)("），effect 内部的 props 和 state 就会一直持有其初始值。尽管传入 "),B=(0,t._)("code",null,"[]",-1),G=(0,t.Uk)(" 作为第二个参数有点类似于 "),O=(0,t._)("code",null,"componentDidMount",-1),z=(0,t.Uk)(" 和 "),V=(0,t._)("code",null,"componentWillUnmount",-1),Y=(0,t.Uk)(" 的思维模式，但我们有 "),Z={href:"https://react.docschina.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies",target:"_blank",rel:"noopener noreferrer"},F=(0,t.Uk)("更好的"),J=(0,t.Uk)(),K={href:"https://react.docschina.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often",target:"_blank",rel:"noopener noreferrer"},Q=(0,t.Uk)("方式"),X=(0,t.Uk)(" 来避免过于频繁的重复调用 effect。除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 "),$=(0,t._)("code",null,"useEffect",-1),nn=(0,t.Uk)("，因此会使得处理额外操作很方便"),sn=(0,t.uE)('<h3 id="usecontext" tabindex="-1"><a class="header-anchor" href="#usecontext" aria-hidden="true">#</a> <code>useContext</code></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>接收一个 context 对象（<code>React.createContext</code> 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <code>&lt;MyContext.Provider&gt;</code> 的 <code>value</code> prop 决定。</p>',3),an=(0,t.Uk)("当组件上层最近的 "),tn=(0,t._)("code",null,"<MyContext.Provider>",-1),en=(0,t.Uk)(" 更新时，该 Hook 会触发重渲染，并使用最新传递给 "),pn=(0,t._)("code",null,"MyContext",-1),on=(0,t.Uk)(" provider 的 context "),cn=(0,t._)("code",null,"value",-1),ln=(0,t.Uk)(" 值。即使祖先使用 "),un={href:"https://react.docschina.org/docs/react-api.html#reactmemo",target:"_blank",rel:"noopener noreferrer"},rn=(0,t._)("code",null,"React.memo",-1),kn=(0,t.Uk)(" 或 "),dn={href:"https://react.docschina.org/docs/react-component.html#shouldcomponentupdate",target:"_blank",rel:"noopener noreferrer"},bn=(0,t._)("code",null,"shouldComponentUpdate",-1),mn=(0,t.Uk)("，也会在组件本身使用 "),gn=(0,t._)("code",null,"useContext",-1),fn=(0,t.Uk)(" 时重新渲染。"),hn=(0,t.uE)("<p>别忘记 <code>useContext</code> 的参数必须是 <em>context 对象本身</em>：</p><ul><li><strong>正确：</strong> <code>useContext(MyContext)</code></li><li><strong>错误：</strong> <code>useContext(MyContext.Consumer)</code></li><li><strong>错误：</strong> <code>useContext(MyContext.Provider)</code></li></ul>",2),xn=(0,t.Uk)("调用了 "),_n=(0,t._)("code",null,"useContext",-1),vn=(0,t.Uk)(" 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，你可以 "),Un={href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693",target:"_blank",rel:"noopener noreferrer"},wn=(0,t.Uk)("通过使用 memoization 来优化"),yn=(0,t.Uk)("。"),Cn=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[(0,t._)("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,t._)("circle",{cx:"12",cy:"12",r:"9"}),(0,t._)("path",{d:"M12 8v4"}),(0,t._)("path",{d:"M12 16h.01"})])]),(0,t._)("p",{class:"custom-container-title"},"WARNING"),(0,t._)("p",null,[(0,t._)("code",null,"useContext(MyContext)"),(0,t.Uk)(" 只是让你能够"),(0,t._)("em",null,"读取"),(0,t.Uk)(" context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 "),(0,t._)("code",null,"<MyContext.Provider>"),(0,t.Uk)(" 来为下层组件"),(0,t._)("em",null,"提供"),(0,t.Uk)(" context。")])],-1),jn=(0,t.uE)('<p><strong>把如下代码与 Context.Provider 放在一起</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> themes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;#eeeeee&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;#222222&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>themes<span class="token punctuation">.</span>light<span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">Light</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">background</span><span class="token operator">:</span> theme<span class="token punctuation">.</span>background<span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> theme<span class="token punctuation">.</span>foreground<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">没有Provide使用createContext的默认值</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>themes<span class="token punctuation">.</span>dark<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dark</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ThemeContext.Provider</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Dark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">background</span><span class="token operator">:</span> theme<span class="token punctuation">.</span>background<span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> theme<span class="token punctuation">.</span>foreground<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">有Provider使用Provider的value值</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">UseContext</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Light</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>',2),Sn={},En=(0,a(3744).Z)(Sn,[["render",function(n,s){const a=(0,t.up)("RouterLink"),Sn=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("nav",p,[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#基础hook"},{default:(0,t.w5)((()=>[o])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#usestate"},{default:(0,t.w5)((()=>[c])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#useeffect"},{default:(0,t.w5)((()=>[l])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#usecontext"},{default:(0,t.w5)((()=>[u])),_:1})])])])])]),r,i,k,(0,t._)("p",null,[d,(0,t._)("a",b,[m,(0,t.Wm)(Sn)]),g]),f,(0,t._)("p",null,[h,(0,t._)("a",x,[_,(0,t.Wm)(Sn)]),v,U,w]),y,(0,t._)("div",C,[j,S,(0,t._)("p",null,[E,M,R,(0,t._)("a",W,[q,(0,t.Wm)(Sn)]),P,(0,t._)("a",D,[T,(0,t.Wm)(Sn)]),I]),N,(0,t._)("p",null,[L,H,A,B,G,O,z,V,Y,(0,t._)("a",Z,[F,(0,t.Wm)(Sn)]),J,(0,t._)("a",K,[Q,(0,t.Wm)(Sn)]),X,$,nn])]),sn,(0,t._)("p",null,[an,tn,en,pn,on,cn,ln,(0,t._)("a",un,[rn,(0,t.Wm)(Sn)]),kn,(0,t._)("a",dn,[bn,(0,t.Wm)(Sn)]),mn,gn,fn]),hn,(0,t._)("p",null,[xn,_n,vn,(0,t._)("a",Un,[wn,(0,t.Wm)(Sn)]),yn]),Cn,jn],64)}]])}}]);