(this["webpackJsonpbeancount-web"]=this["webpackJsonpbeancount-web"]||[]).push([[5],{103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(23),a=n.n(o),i=(n(93),n(40)),s=n(41),l=n(43),h=n(42),u=n(29),d=(n(94),n(44)),b="\u6211\u7684\u8d26\u672c",j="https://github.com/BaoXuebin/beancount-gs",m="https://www.yuque.com/chuyi-ble7p/beancount-gs",g="https://github.com/BaoXuebin/beancount-gs/issues",f=n(59),p=(n(98),n(3)),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={version:""},e.handleOut=function(){localStorage.clear(),window.location.href="/web/#/ledger"},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(f.b)("/api/version").then((function(t){localStorage.setItem("version",t),e.setState({version:t})}))}},{key:"render",value:function(){var e=this.context.theme,t=window.localStorage.getItem("ledgerTitle")||b;return Object(p.jsx)("div",{className:"".concat(e,"-theme"),children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("header",{children:Object(p.jsx)("nav",{className:"navbar",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"navbar-header header-logo",to:"/",children:Object(p.jsx)(u.b,{to:"/",children:t})}),Object(p.jsxs)("div",{className:"menu navbar-right",children:[Object(p.jsx)(u.b,{to:"/account",children:"\u8d26\u6237"}),Object(p.jsx)(u.b,{to:"/stats",children:"\u7edf\u8ba1"}),Object(p.jsx)("a",{onClick:this.handleOut,children:"\u9000\u51fa"}),Object(p.jsx)("a",{href:j,children:Object(p.jsx)("img",{src:"https://img.shields.io/github/stars/BaoXuebin/beancount-gs?style=social"})})]})]})})}),Object(p.jsx)("div",{className:"main",children:Object(p.jsx)("div",{className:"main-wrap",children:this.props.children})}),Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("div",{className:"copyright",children:["\xa9 2021\xa0\xa0",this.state.version,"\xa0\xa0",Object(p.jsx)("a",{href:m,target:"_blank",children:"\u4f7f\u7528\u6587\u6863"}),"\xa0\xa0",Object(p.jsx)("a",{href:g,target:"_blank",children:"\u53cd\u9988BUG"}),"\xa0\xa0"]})})]})})}}]),n}(r.Component);O.contextType=d.a;var x=O,v=n(25),w=n.n(v),y=n(7),N=(n(103),function(){return Object(p.jsx)("div",{style:{width:"100%"},className:"lds-rolling",children:Object(p.jsx)("div",{})})}),k=w()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(13)]).then(n.bind(null,474))},loading:N}),S=w()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,476))},loading:N}),I=w()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,473))},loading:N}),P=w()({loader:function(){return n.e(14).then(n.bind(null,470))},loading:N}),T=w()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,477))},loading:N}),B=w()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(7),n.e(15)]).then(n.bind(null,471))},loading:N}),C=w()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(12)]).then(n.bind(null,472))},loading:N}),A=function(){return Object(p.jsx)(c.a.Fragment,{children:Object(p.jsxs)(y.c,{children:[Object(p.jsx)(y.a,{exact:!0,path:"/",component:S}),Object(p.jsx)(y.a,{exact:!0,path:"/init",component:C}),Object(p.jsx)(y.a,{exact:!0,path:"/ledger",component:k}),Object(p.jsx)(y.a,{exact:!0,path:"/account",component:I}),Object(p.jsx)(y.a,{exact:!0,path:"/about",component:P}),Object(p.jsx)(y.a,{exact:!0,path:"/edit",component:B}),Object(p.jsx)(y.a,{exact:!0,path:"/stats",component:T}),Object(p.jsx)(y.a,{component:S})]})})},J=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={theme:localStorage.getItem("theme")||"light"},e.toggleTheme=function(t){e.setState({theme:t})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(d.a.Provider,{value:{theme:this.state.theme,toggleTheme:this.toggleTheme},children:Object(p.jsx)(u.a,{children:Object(p.jsx)(x,{children:Object(p.jsx)(A,{})})})})})}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,n){"use strict";var r=n(0),c=n.n(r).a.createContext({theme:"light",toggleTheme:function(){}});t.a=c},59:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(22),c=(n(68),n(82)),o=n.n(c),a=function(e){var t=e.split(":");return t&&t.length>=1?e.split(":")[0]:""},i=function(e){return e.split(":").join("_")},s=function(e){var t=e.split(":");return t&&t.length>=2?e.split(":")[t.length-1]:""},l={Income:"\u6536\u5165",Expenses:"\u652f\u51fa",Liabilities:"\u8d1f\u503a",Assets:"\u8d44\u4ea7"},h=function(e){return e},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.method,c=t.headers,a=t.body,i={"Content-Type":"application/json",ledgerId:window.localStorage.getItem("ledgerId")};return new Promise((function(t,s){o()(e,{method:n,headers:Object.assign({},i,c),body:JSON.stringify(a)}).then(h).then((function(e){return e.json()})).then((function(e){var n=e.code;200===n?t(e.data):200!==n&&(400===n?r.b.error("\u8bf7\u6c42\u53c2\u6570\u9519\u8bef"):1001===n?r.b.error("\u8d26\u76ee\u4e0d\u5e73\u8861"):1003===n?r.b.error("\u65e0\u6548\u8d26\u6237"):1005===n?r.b.error("\u65e0\u6548\u547d\u4ee4"):1006===n?r.b.error("\u5bc6\u7801\u9519\u8bef"):1007===n?r.b.error("\u8d26\u6237\u5df2\u5b58\u5728"):1008===n?r.b.error("\u5bc6\u94a5\u4e0d\u5339\u914d"):1010===n||401===n?window.location.href="/web/#/ledger":r.b.error("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"),s(e))})).catch((function(e){r.b.error("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"),s(e)}))}))}},93:function(e,t,n){},94:function(e,t,n){},98:function(e,t,n){}},[[104,6,8]]]);