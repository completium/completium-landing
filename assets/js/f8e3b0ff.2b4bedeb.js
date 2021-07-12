(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),o=(n(0),n(238)),a=(n(240),n(241)),i=(n(242),n(239)),c=n(284),s=n.n(c);const u={id:"zcb4",title:"Issue & Sign",sidebar_label:"Issue & Sign",slug:"/dapp-zcb/usecase"},l={unversionedId:"dapp-zcb/zcb4",id:"dapp-zcb/zcb4",isDocsHomePage:!1,title:"Issue & Sign",description:"Set contract parameters",source:"@site/docs/dapp-zcb/zcb4.md",slug:"/dapp-zcb/usecase",permalink:"/docs/dapp-zcb/usecase",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-zcb/zcb4.md",version:"current",sidebar_label:"Issue & Sign",sidebar:"dapps",previous:{title:"Use Case Presentation",permalink:"/docs/dapp-zcb/Presentation"},next:{title:"Technical guide",permalink:"/docs/dapp-zcb/tg-presentation"}},p=[{value:"Set contract parameters",id:"set-contract-parameters",children:[]},{value:"Issue Contract (Origination)",id:"issue-contract-origination",children:[]},{value:"Sign contract",id:"sign-contract",children:[]}],d={toc:p};function b({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"set-contract-parameters"},"Set contract parameters"),Object(o.b)("p",null,"The first step is to fill the Zero-Coupon bond's parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Issuer name"),Object(o.b)("li",{parentName:"ul"},"Issuer Tezos address"),Object(o.b)("li",{parentName:"ul"},"Subscriber name (or bond holder)"),Object(o.b)("li",{parentName:"ul"},"Subscriber Tezos address"),Object(o.b)("li",{parentName:"ul"},"Face value (redeem value)"),Object(o.b)("li",{parentName:"ul"},"Discount rate (to compute value at trade time)"),Object(o.b)("li",{parentName:"ul"},"Bond duration before maturity"),Object(o.b)("li",{parentName:"ul"},"Payback period during which redeem is possible")),Object(o.b)("p",null,"Below is an example parameters setting:"),Object(o.b)(a.a,{img:"zcb-set.png",width:"40%",mdxType:"DappFigure"}),Object(o.b)("p",null,"Check that the contract text is updated accordingly:"),Object(o.b)(a.a,{img:"zcb-set2.png",width:"80%",mdxType:"DappFigure"}),Object(o.b)("h2",{id:"issue-contract-origination"},"Issue Contract (Origination)"),Object(o.b)("p",null,"Once parameters are set, connect to the ",Object(o.b)(i.a,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"Temple wallet"),' and click on the "originate" button:'),Object(o.b)(a.a,{img:"zcb-issue.png",width:"50%",mdxType:"DappFigure"}),Object(o.b)("p",null,"The following popup is displayed; it is an 'origination' transaction with the smart contract's ",Object(o.b)(i.a,{to:"/docs/dapp-tools/tezos#micheslon",mdxType:"Link"},"Michelson")," code:"),Object(o.b)(a.a,{img:"zcb-set3.png",width:"50%",mdxType:"DappFigure"}),Object(o.b)("p",null,"Once originated, the smart contract address is displayed; click on it to open it ",Object(o.b)(i.a,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev"),":"),Object(o.b)(a.a,{img:"zcb-set4.png",width:"90%",mdxType:"DappFigure"}),Object(o.b)("h2",{id:"sign-contract"},"Sign contract"),Object(o.b)("p",null,"Now the contract is issued, issuer and holder must sign it; go to ",Object(o.b)(i.a,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev")," (see above) in the 'INTERACT' tab:"),Object(o.b)(a.a,{img:"zcb-bcd1.png",width:"100%",mdxType:"DappFigure"}),Object(o.b)("p",null,"If signing with the holder address, you need to tranfer the present value (pv):"),Object(o.b)(s.a.Provider,null,Object(o.b)(s.a.Node,{formula:"pv = (1 - dr) * fv"})),Object(o.b)("p",null,"where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"fv: face value"),Object(o.b)("li",{parentName:"ul"},"dr: discount rate")),Object(o.b)("p",null,"You can follow contract events in the ",Object(o.b)("em",{parentName:"p"},"Timeline")," tab of the DApp interface:"),Object(o.b)(a.a,{img:"zcb-sign1.png",width:"40%",mdxType:"DappFigure"}),Object(o.b)("p",null,"When the 'Sign' transaction is validated, the event appears in the contract timeline:"),Object(o.b)(a.a,{img:"zcb-sign2.png",width:"40%",mdxType:"DappFigure"}),Object(o.b)("p",null,"Signatures also appear at the bottom of the contract:"),Object(o.b)(a.a,{img:"zcb-sign3.png",width:"90%",mdxType:"DappFigure"}))}b.isMDXComponent=!0},240:function(e,t,n){"use strict";n(0),n(245)},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)).createContext({MathJax:null,registerNode:function(){}});t.default=r},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(285)),o=a(n(287));function a(e){return e&&e.__esModule?e:{default:e}}var i={Provider:r.default,Node:o.default};t.default=i},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),a=c(n(286)),i=c(n(263));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.hasNodes=!1,n.loaded=!1,n.registerNode=function(){n.hasNodes=!0},n.load=function(){var e=n.props.script;!n.loaded&&n.hasNodes&&(n.loaded=!0,e?(0,a.default)(e,n.onLoad):n.onLoad(null))},n.onLoad=function(e){var t=n.props.options;MathJax.Hub.Config(t),n.setState({MathJax:MathJax})},n.state={MathJax:null,registerNode:n.registerNode},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.load()}},{key:"componentDidUpdate",value:function(){this.load()}},{key:"render",value:function(){var e=this.props.children;return o.createElement(i.default.Provider,{value:this.state},e)}}]),t}(o.Component);s.defaultProps={script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML",options:{tex2jax:{inlineMath:[]},showMathMenu:!1,showMathMenuMSIE:!1}},t.default=s},286:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=s(n(263)),c=s(n(288));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){function t(){var e,n,r;u(this,t);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.container=a.createRef(),l(r,n)}return p(t,e),o(t,[{key:"componentDidMount",value:function(){this.typeset()}},{key:"componentDidUpdate",value:function(e){var t=e.inline!=this.props.inline;this.typeset(t)}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"clear",value:function(){var e=this.props.MathJax;if(this.script&&e){var t=e.Hub.getJaxFor(this.script);t&&t.Remove()}}},{key:"typeset",value:function(e){var t=this,n=this.props,r=n.MathJax,o=n.formula,a=n.onRender;if(r)if(e&&this.clear(),!e&&this.script)r.Hub.Queue((function(){var e=r.Hub.getJaxFor(t.script);if(e)e.Text(o,a);else{var n=t.setScriptText(o);(0,c.default)(r,n,a)}}));else{var i=this.setScriptText(o);(0,c.default)(r,i,a)}}},{key:"setScriptText",value:function(e){var t=this.props.inline;return this.script||(this.script=document.createElement("script"),this.script.type="math/tex; "+(t?"":"mode=display"),this.container.current.appendChild(this.script)),"text"in this.script?this.script.text=e:this.script.textContent=e,this.script}},{key:"render",value:function(){var e=this.props,t=(e.MathJax,e.formula,e.inline,e.onRender,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["MathJax","formula","inline","onRender"]));return this.props.inline?a.createElement("span",r({ref:this.container},t)):a.createElement("div",r({ref:this.container},t))}}]),t}(a.Component);d.defaultProps={inline:!1,onRender:function(){}};var b=function(e){function t(){return u(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),o(t,[{key:"render",value:function(){var e=this;return a.createElement(i.default.Consumer,null,(function(t){var n=t.MathJax;return(0,t.registerNode)(),n?a.createElement(d,r({},e.props,{MathJax:n})):null}))}}]),t}(a.PureComponent);t.default=b},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[],o=[],a=!1;t.default=function(e,t,n){r.push(t),o.push(n),a||(a=!0,setTimeout((function(){return function(e){e.Hub.Queue((function(){var t=e.Hub.elementScripts;e.Hub.elementScripts=function(e){return r};try{return e.Hub.Process(null,(function(){o.forEach((function(e){e()})),r=[],o=[],a=!1}))}catch(n){throw n}finally{e.Hub.elementScripts=t}}))}(e)}),0))}}}]);