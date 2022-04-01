(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[9691],{3079:function(t,e,n){"use strict";var r=n(7294),o=n(282),i=n(9277),a=n(3457),u=n(6742),c=n(4996);e.Z=function(t){var e=r.useMemo((function(){return(0,i.Z)({palette:{type:"dark"}})}),[!0]);return r.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},r.createElement(a.Z,{theme:e},t.internal?r.createElement(o.Z,{variant:"outlined",size:"large",component:u.Z,to:(0,c.Z)("docs/"+t.url+"/")},t.txt):r.createElement(o.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(t.url,"_blank")}},t.txt)))}},807:function(t,e,n){"use strict";n(7294),n(4996)},716:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=(n(807),n(7134)),u=(n(3079),n(6742)),c=n(8820),s=["components"],l={id:"zcb4",title:"Issue & Sign",sidebar_label:"Issue & Sign",slug:"/dapp-zcb/usecase"},p=void 0,d={unversionedId:"dapp-zcb/zcb4",id:"dapp-zcb/zcb4",isDocsHomePage:!1,title:"Issue & Sign",description:"Set contract parameters",source:"@site/docs/dapp-zcb/zcb4.md",sourceDirName:"dapp-zcb",slug:"/dapp-zcb/usecase",permalink:"/docs/dapp-zcb/usecase",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-zcb/zcb4.md",version:"current",frontMatter:{id:"zcb4",title:"Issue & Sign",sidebar_label:"Issue & Sign",slug:"/dapp-zcb/usecase"},sidebar:"dapps",previous:{title:"Presentation",permalink:"/docs/dapp-zcb/Presentation"},next:{title:"Technical guide",permalink:"/docs/dapp-zcb/tg-presentation"}},f=[{value:"Set contract parameters",id:"set-contract-parameters",children:[]},{value:"Issue Contract (Origination)",id:"issue-contract-origination",children:[]},{value:"Sign contract",id:"sign-contract",children:[]}],h={toc:f};function m(t){var e=t.components,n=(0,o.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-contract-parameters"},"Set contract parameters"),(0,i.kt)("p",null,"The first step is to fill the Zero-Coupon bond's parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Issuer name"),(0,i.kt)("li",{parentName:"ul"},"Issuer Tezos address"),(0,i.kt)("li",{parentName:"ul"},"Subscriber name (or bond holder)"),(0,i.kt)("li",{parentName:"ul"},"Subscriber Tezos address"),(0,i.kt)("li",{parentName:"ul"},"Face value (redeem value)"),(0,i.kt)("li",{parentName:"ul"},"Discount rate (to compute value at trade time)"),(0,i.kt)("li",{parentName:"ul"},"Bond duration before maturity"),(0,i.kt)("li",{parentName:"ul"},"Payback period during which redeem is possible")),(0,i.kt)("p",null,"Below is an example parameters setting:"),(0,i.kt)(a.Z,{img:"zcb-set.png",width:"40%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"Check that the contract text is updated accordingly:"),(0,i.kt)(a.Z,{img:"zcb-set2.png",width:"80%",mdxType:"DappFigure"}),(0,i.kt)("h2",{id:"issue-contract-origination"},"Issue Contract (Origination)"),(0,i.kt)("p",null,"Once parameters are set, connect to the ",(0,i.kt)(u.Z,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"Temple wallet"),' and click on the "originate" button:'),(0,i.kt)(a.Z,{img:"zcb-issue.png",width:"50%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"The following popup is displayed; it is an 'origination' transaction with the smart contract's ",(0,i.kt)(u.Z,{to:"/docs/dapp-tools/tezos#micheslon",mdxType:"Link"},"Michelson")," code:"),(0,i.kt)(a.Z,{img:"zcb-set3.png",width:"50%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"Once originated, the smart contract address is displayed; click on it to open it ",(0,i.kt)(u.Z,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev"),":"),(0,i.kt)(a.Z,{img:"zcb-set4.png",width:"90%",mdxType:"DappFigure"}),(0,i.kt)("h2",{id:"sign-contract"},"Sign contract"),(0,i.kt)("p",null,"Now the contract is issued, issuer and holder must sign it; go to ",(0,i.kt)(u.Z,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev")," (see above) in the 'INTERACT' tab:"),(0,i.kt)(a.Z,{img:"zcb-bcd1.png",width:"100%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"If signing with the holder address, you need to tranfer the present value (pv):"),(0,i.kt)(c.Z.Provider,null,(0,i.kt)(c.Z.Node,{formula:"pv = (1 - dr) * fv"})),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fv: face value"),(0,i.kt)("li",{parentName:"ul"},"dr: discount rate")),(0,i.kt)("p",null,"You can follow contract events in the ",(0,i.kt)("em",{parentName:"p"},"Timeline")," tab of the DApp interface:"),(0,i.kt)(a.Z,{img:"zcb-sign1.png",width:"40%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"When the 'Sign' transaction is validated, the event appears in the contract timeline:"),(0,i.kt)(a.Z,{img:"zcb-sign2.png",width:"40%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"Signatures also appear at the bottom of the contract:"),(0,i.kt)(a.Z,{img:"zcb-sign3.png",width:"90%",mdxType:"DappFigure"}))}m.isMDXComponent=!0},9090:function(t){function e(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function n(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,r,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof r&&(o=r,r={}),r=r||{},o=o||function(){},a.type=r.type||"text/javascript",a.charset=r.charset||"utf8",a.async=!("async"in r)||!!r.async,a.src=t,r.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(a,r.attrs),r.text&&(a.text=""+r.text),("onload"in a?e:n)(a,o),a.onload||e(a,o),i.appendChild(a)}},2470:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(7294)),a=c(n(8195)),u=c(n(7680));function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var d=function(t){function e(){var t,n,r;s(this,e);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=l(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),r.container=i.createRef(),l(r,n)}return p(e,t),o(e,[{key:"componentDidMount",value:function(){this.typeset()}},{key:"componentDidUpdate",value:function(t){var e=t.inline!=this.props.inline;this.typeset(e)}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"clear",value:function(){var t=this.props.MathJax;if(this.script&&t){var e=t.Hub.getJaxFor(this.script);e&&e.Remove()}}},{key:"typeset",value:function(t){var e=this,n=this.props,r=n.MathJax,o=n.formula,i=n.onRender;if(r)if(t&&this.clear(),!t&&this.script)r.Hub.Queue((function(){var t=r.Hub.getJaxFor(e.script);if(t)t.Text(o,i);else{var n=e.setScriptText(o);(0,u.default)(r,n,i)}}));else{var a=this.setScriptText(o);(0,u.default)(r,a,i)}}},{key:"setScriptText",value:function(t){var e=this.props.inline;return this.script||(this.script=document.createElement("script"),this.script.type="math/tex; "+(e?"":"mode=display"),this.container.current.appendChild(this.script)),"text"in this.script?this.script.text=t:this.script.textContent=t,this.script}},{key:"render",value:function(){var t=this.props,e=(t.MathJax,t.formula,t.inline,t.onRender,function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["MathJax","formula","inline","onRender"]));return this.props.inline?i.createElement("span",r({ref:this.container},e)):i.createElement("div",r({ref:this.container},e))}}]),e}(i.Component);d.defaultProps={inline:!1,onRender:function(){}};var f=function(t){function e(){return s(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,t),o(e,[{key:"render",value:function(){var t=this;return i.createElement(a.default.Consumer,null,(function(e){var n=e.MathJax;return(0,e.registerNode)(),n?i.createElement(d,r({},t.props,{MathJax:n})):null}))}}]),e}(i.PureComponent);e.default=f},4741:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(7294)),i=u(n(9090)),a=u(n(8195));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.hasNodes=!1,n.loaded=!1,n.registerNode=function(){n.hasNodes=!0},n.load=function(){var t=n.props.script;!n.loaded&&n.hasNodes&&(n.loaded=!0,t?(0,i.default)(t,n.onLoad):n.onLoad(null))},n.onLoad=function(t){var e=n.props.options;MathJax.Hub.Config(e),n.setState({MathJax:MathJax})},n.state={MathJax:null,registerNode:n.registerNode},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.load()}},{key:"componentDidUpdate",value:function(){this.load()}},{key:"render",value:function(){var t=this.props.children;return o.createElement(a.default.Provider,{value:this.state},t)}}]),e}(o.Component);c.defaultProps={script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML",options:{tex2jax:{inlineMath:[]},showMathMenu:!1,showMathMenuMSIE:!1}},e.default=c},8195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(7294)).createContext({MathJax:null,registerNode:function(){}});e.default=r},8820:function(t,e,n){"use strict";var r=i(n(4741)),o=i(n(2470));function i(t){return t&&t.__esModule?t:{default:t}}var a={Provider:r.default,Node:o.default};e.Z=a},7680:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=[],r=[],o=!1;e.default=function(t,e,i){n.push(e),r.push(i),o||(o=!0,setTimeout((function(){return function(t){t.Hub.Queue((function(){var e=t.Hub.elementScripts;t.Hub.elementScripts=function(t){return n};try{return t.Hub.Process(null,(function(){r.forEach((function(t){t()})),n=[],r=[],o=!1}))}catch(i){throw i}finally{t.Hub.elementScripts=e}}))}(t)}),0))}}}]);