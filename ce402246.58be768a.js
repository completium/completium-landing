(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(118)),c=n(129),o={id:"miles4",title:"Design",sidebar_label:"Design",slug:"/dapp-miles/miles-design"},l={unversionedId:"dapp-miles/miles4",id:"dapp-miles/miles4",isDocsHomePage:!1,title:"Design",description:"A smart contract on the Tezos blockchain is used to store and manage customers' miles lifecycle, namely miles creation and consumption operations.",source:"@site/docs/dapp-miles/miles4.md",slug:"/dapp-miles/miles-design",permalink:"/completium-landing/docs/dapp-miles/miles-design",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-miles/miles4.md",version:"current",sidebar_label:"Design",sidebar:"miles",previous:{title:"Fidelity program",permalink:"/completium-landing/docs/dapp-miles"},next:{title:"Prerequisites",permalink:"/completium-landing/docs/dapp-miles/miles-use-case1"}},s=[{value:"Architecure",id:"architecure",children:[]},{value:"User Interface",id:"user-interface",children:[]},{value:"Benefits",id:"benefits",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A smart contract on the Tezos blockchain is used to store and manage customers' miles lifecycle, namely miles creation and consumption operations."),Object(a.b)("h2",{id:"architecure"},"Architecure"),Object(a.b)("p",null,"The Dapp architecture is 3-tier:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Tezos' smart contract (to store and manage miles' lifecycle)"),Object(a.b)("li",{parentName:"ul"},"User web interface for customer to exchange miles (consume) for rewards"),Object(a.b)("li",{parentName:"ul"},"Standard application server to create miles according to customer activity")),Object(a.b)("p",null,"Interactions between these three elements are illustrated in the schema below:"),Object(a.b)(c.a,{img:"miles-dapp-architecture.svg",width:"60%",mdxType:"DappFigure"}),Object(a.b)("p",null,"The User Interface straightforwardly interacts with the smart contract to consume miles. The resulting blockchain's hash operation is sent to the App Server with other operation informations (selected product(s) id(s))."),Object(a.b)("p",null,"It uses a wallet technology (hardware or sofware) to forge, sign and send the operations to the blockchain."),Object(a.b)("p",null,"The Application Server interacts with the blockchain through a dedicated library that provides a high level API. It is ",Object(a.b)("u",null,"not provided")," in this example Dapp though."),Object(a.b)("h2",{id:"user-interface"},"User Interface"),Object(a.b)("p",null,"Below is a screenshot of the user interface once the wallet's account connected:"),Object(a.b)(c.a,{img:"miles_screenshot_help.png",width:"80%",mdxType:"DappFigure"}),Object(a.b)("p",null,"\u2460 User's Miles information:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Total number of owned miles"),Object(a.b)("li",{parentName:"ul"},"Time left til next miles' expiration")),Object(a.b)("p",null,"\u2461 Button to see the list of miles and their expiration date"),Object(a.b)("p",null,"\u2462 Reward item data:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"overview photo"),Object(a.b)("li",{parentName:"ul"},"cost in miles"),Object(a.b)("li",{parentName:"ul"},"title")),Object(a.b)("p",null,"Click on \"Get it!\" button to order it. This is calling the smart contract's 'consume' entrypoint."),Object(a.b)("h2",{id:"benefits"},"Benefits"),Object(a.b)("p",null,"The benefits of the on-chain miles' lifecycle management are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"reliability of miles' management: the consumption rule is publically available to the customer in the smart contract code"),Object(a.b)("li",{parentName:"ul"},"the quantity of miles a customer has acquired may be used to prove activity to any other third party")),Object(a.b)("p",null,"A blockchain based miles registry is especially suited for mutualising activity accross mulitple brands and services since it solves miles ownership and miles management issues."))}p.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||a;return n?i.a.createElement(d,o(o({ref:t},s),{},{components:n})):i.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(22),i=n(124);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},124:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},129:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(119);t.a=function(e){return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",{alt:"Docusaurus with Keytar",style:{width:e.width,paddingTop:"40px",paddingBottom:"40px"},src:Object(a.a)("img/"+e.img)}))}}}]);