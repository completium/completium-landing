(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return m})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return f}));var n=r(3),a=r(7),i=r(0),o=r.n(i),c=r(106),l=r(112);var s=function(e){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",{alt:"Docusaurus with Keytar",style:{width:"55%",marginTop:"60px"},src:Object(l.a)("img/"+e.img+".svg")}))};var u=function(e){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",{alt:"Docusaurus with Keytar",style:{width:e.width,paddingTop:"40px",paddingBottom:"40px"},src:Object(l.a)("img/"+e.img+".svg")}))},p={id:"miles1",title:"Fidelity program",sidebar_label:"Fidelity program",slug:"/dapp-miles"},m={unversionedId:"dapp-miles/miles1",id:"dapp-miles/miles1",isDocsHomePage:!1,title:"Fidelity program",description:"Introduction",source:"@site/docs/dapp-miles/miles1.md",slug:"/dapp-miles",permalink:"/completium-landing/docs/dapp-miles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-miles/miles1.md",version:"current",sidebar_label:"Fidelity program",sidebar:"miles"},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Dapp example",id:"dapp-example",children:[]},{value:"Benefits",id:"benefits",children:[]}],h={rightToc:d};function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},h,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)(s,{img:"streamline-icon-takeoff-ticket",mdxType:"DappIcon"}),Object(c.a)("h2",{id:"introduction"},"Introduction"),Object(c.a)("p",null,"Customers of a service (transport, gaming, grocery, ...) receive miles in reward for their activity with the service: miles are received for examples, for each travel in proportion of the distance traveled; or when completing an achievement in a game; or when achieving a certain amount of purchase; and so on. Miles may then for example be traded in for gifts or cash-back, or any kind of reward."),Object(c.a)("p",null,"Such miles rewarding program are put in place by Marketing departments to retain customers."),Object(c.a)("h2",{id:"architecture"},"Architecture"),Object(c.a)("p",null,"A smart contract on the Tezos blockchain is used to store and manage customers' miles lifecycle, namely creation and consumption operations."),Object(c.a)("p",null,"The Dapp architecture is 3-tier:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"Tezos' smart contract (to store and manage miles' lifecycle)"),Object(c.a)("li",{parentName:"ul"},"User web interface for customer to exchange miles (consume) for rewards"),Object(c.a)("li",{parentName:"ul"},"Standard application server to create miles according to customer activity")),Object(c.a)("p",null,"Interactions between these three elements are illustrated in the schema below:"),Object(c.a)(u,{img:"miles-dapp-architecture",width:"60%",mdxType:"DappFigure"}),Object(c.a)("p",null,"The User Interface straightforwardly interacts with the smart contract to consume miles. The resulting blockchain's hash operation is sent to the App Server with other operation informations (selected product(s) id(s))."),Object(c.a)("p",null,"It uses a wallet technology (hardware or sofware) to forge, sign and send the operations to the blockchain."),Object(c.a)("p",null,"The Application Server interacts with the blockchain through a dedicated library that provides a high level API."),Object(c.a)("h2",{id:"dapp-example"},"Dapp example"),Object(c.a)("p",null,"This Dapp example provides the Tezos's smart contract for miles management, and a web interface to interact with the contract. It does not provide the App Server."),Object(c.a)("p",null,"In this example, each mile has an ",Object(c.a)("em",{parentName:"p"},"expiration date")," beyond which it cannot be consumed."),Object(c.a)("h2",{id:"benefits"},"Benefits"),Object(c.a)("p",null,"The benefits of the on-chain miles' lifecycle management are:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"reliability of miles' management: the consumption rule is publically available to the customer in the smart contract code"),Object(c.a)("li",{parentName:"ul"},"the quantity of miles a customer has acquired may be used to prove activity to any other third party")),Object(c.a)("p",null,"A blockchain based miles registry is especially suited for mutualising activity accross mulitple brands and services since it solves miles ownership and miles management issues."))}f.isMDXComponent=!0},106:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return r?a.a.createElement(h,c(c({ref:t},s),{},{components:r})):a.a.createElement(h,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},112:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(22),a=r(117);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},117:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);