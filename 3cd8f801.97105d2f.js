(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(119);t.a=function(e){return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",{alt:"Docusaurus with Keytar",style:{width:e.width,paddingTop:"40px",paddingBottom:"40px"},src:Object(i.a)("img/"+e.img)}))}},131:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(233),o=n(208),c=n(231),p=n(120),l=n(119);t.a=function(e){const t=a.a.useMemo((()=>Object(o.a)({palette:{type:"dark"}})),[!0]);return a.a.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},a.a.createElement(c.a,{theme:t},e.internal?a.a.createElement(i.a,{variant:"outlined",size:"large",component:p.a,to:Object(l.a)("docs/"+e.url+"/")},e.txt):a.a.createElement(i.a,{variant:"outlined",size:"large",onClick:()=>window.open(e.url,"_blank")},e.txt)))}},142:function(e,t,n){"use strict";n(0),n(119)},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(118)),o=(n(142),n(129)),c=n(131),p={id:"miles1",title:"Fidelity program",sidebar_label:"Fidelity program",slug:"/dapp-miles"},l={unversionedId:"dapp-miles/miles1",id:"dapp-miles/miles1",isDocsHomePage:!1,title:"Fidelity program",description:"Introduction",source:"@site/docs/dapp-miles/miles1.md",slug:"/dapp-miles",permalink:"/completium-landing/docs/dapp-miles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-miles/miles1.md",version:"current",sidebar_label:"Fidelity program",sidebar:"miles",next:{title:"Design",permalink:"/completium-landing/docs/dapp-miles/miles-design"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Dapp",id:"dapp",children:[]}],u={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{img:"miles_screenshot.png",width:"100%",mdxType:"DappFigure"}),Object(i.b)(c.a,{url:"https://edukera.github.io/completium-dapp-miles/",txt:"open dapp",mdxType:"DappButton"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Customers of a service (transport, gaming, grocery, ...) receive miles in reward for their activity with the service: miles are received for examples, for each travel in proportion of the distance traveled; or when completing an achievement in a game; or when achieving a certain amount of purchase; and so on. Miles may then for example be traded in for gifts or cash-back, or any kind of reward."),Object(i.b)("p",null,"Such miles rewarding program are put in place by Marketing departments to retain customers."),Object(i.b)("h2",{id:"dapp"},"Dapp"),Object(i.b)("p",null,"This Dapp example provides the Tezos's smart contract for miles management, and a web interface to interact with the contract."),Object(i.b)("p",null,"In this example, each mile has an ",Object(i.b)("em",{parentName:"p"},"expiration date")," beyond which it cannot be consumed. The smart contract guarantees that only valid miles can be consumed."))}d.isMDXComponent=!0}}]);