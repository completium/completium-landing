(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{130:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,O=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return a?r.a.createElement(O,i(i({ref:t},b),{},{components:a})):r.a.createElement(O,i({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},131:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(22),r=a(134);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},132:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),c=a(134),i=a(11);const l=Object(n.createContext)({collectLink:()=>{}});var b=a(131),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:s,href:d,activeClassName:u,isActive:O,"data-noBrokenLinkCheck":m,autoAddBaseUrl:j=!0}=e,f=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(b.b)(),h=Object(n.useContext)(l),y=s||d,v=Object(c.a)(y),N=null==y?void 0:y.replace("pathname://",""),w=void 0!==N?(T=N,j&&(e=>e.startsWith("/"))(T)?g(T):T):void 0;var T;const k=Object(n.useRef)(!1),x=a?o.e:o.c,D=i.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!D&&v&&window.docusaurus.prefetch(w),()=>{D&&E&&E.disconnect()})),[w,D,v]);const L=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,P=!w||!v||L;return w&&v&&!L&&!m&&h.collectLink(w),P?r.a.createElement("a",Object.assign({href:w},y&&!v&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(x,Object.assign({},f,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(w),k.current=!0)},innerRef:e=>{var t,a;D&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(w)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),a())}))})),E.observe(t))},to:w||""},a&&{isActive:O,activeClassName:u}))}},134:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},135:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(131);t.a=function(e){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{alt:"Docusaurus with Keytar",style:{width:e.width,paddingTop:"40px",paddingBottom:"40px"},src:Object(o.a)("img/"+e.img)}))}},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(130)),c=a(135),i=a(132),l={id:"tools1",title:"Technical Stack",sidebar_label:"Technical Stack",slug:"/dapp-tools"},b={unversionedId:"dapp-tools/tools1",id:"dapp-tools/tools1",isDocsHomePage:!1,title:"Technical Stack",description:"The technologies below have been used to developp the Dapps.",source:"@site/docs/dapp-tools/tools1.md",slug:"/dapp-tools",permalink:"/completium-landing/docs/dapp-tools",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-tools/tools1.md",version:"current",sidebar_label:"Technical Stack",sidebar:"tools",next:{title:"React",permalink:"/completium-landing/docs/dapp-tools/react"}},p=[{value:"User Interface",id:"user-interface",children:[]},{value:"Blockchain",id:"blockchain",children:[]},{value:"Tools",id:"tools",children:[]}],s={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The technologies below have been used to developp the Dapps."),Object(o.b)("h2",{id:"user-interface"},"User Interface"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Logo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:"/docs/dapp-tools/react",mdxType:"Link"},"React")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(c.a,{img:"react-icon.svg",width:"20%",mdxType:"DappFigure"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A JavaScript library for building user interfaces.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:"/docs/dapp-tools/taquito",mdxType:"Link"},"Taquito")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(c.a,{img:"taquito-logo.png",width:"40%",mdxType:"DappFigure"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A TypeScript library suite for development on the Tezos blockchain.")))),Object(o.b)("h2",{id:"blockchain"},"Blockchain"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Logo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:"/docs/dapp-tools/tezos",mdxType:"Link"},"Tezos")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(c.a,{img:"tezos-logo.svg",width:"100%",mdxType:"DappFigure"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tezos is an open-source platform for assets and applications backed by a global community of validators, researchers, and builders.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:"/docs/dapp-tools/archetype",mdxType:"Link"},"Archetype")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(c.a,{img:"archetype.svg",width:"100%",mdxType:"DappFigure"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Archetype is a high level DSL to developp smart contract on the Tezos blockchain.")))),Object(o.b)("h2",{id:"tools"},"Tools"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Logo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"Thanos")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(c.a,{img:"thanos-logo.png",width:"20%",mdxType:"DappFigure"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Thanos is a cryptocurrency wallet for Tezos blockchain that comes as a web extension for the browser")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(c.a,{img:"bcd-logo.png",width:"70%",mdxType:"DappFigure"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Smart contract indexer/explorer")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:"/docs/dapp-tools/gitpod",mdxType:"Link"},"Gitpod")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)(c.a,{img:"gitpod-ddd.svg",width:"60%",mdxType:"DappFigure"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gitpod is an open source platform for automated and ready-to-code development environments")))))}d.isMDXComponent=!0}}]);