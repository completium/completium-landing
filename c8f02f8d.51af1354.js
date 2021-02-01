(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(130)),i=n(135),c=n(138),l=n(132),p={id:"tools5",title:"Gitpod",sidebar_label:"Gitpod",slug:"/dapp-tools/gitpod"},u={unversionedId:"dapp-tools/tools5",id:"dapp-tools/tools5",isDocsHomePage:!1,title:"Gitpod",description:"Gitpod is an open source platform for automated and ready-to-code development environments. It is bascially a VS Code development interface in a browser, connected to a Git (Github, Gitlab, Bitbucket) repository.",source:"@site/docs/dapp-tools/tools5.md",slug:"/dapp-tools/gitpod",permalink:"/completium-landing/docs/dapp-tools/gitpod",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-tools/tools5.md",version:"current",sidebar_label:"Gitpod",sidebar:"tools",previous:{title:"Faucet accounts",permalink:"/completium-landing/docs/dapp-tools/accounts"},next:{title:"Better Call Dev",permalink:"/completium-landing/docs/dapp-tools/bcd"}},s=[{value:"Create account",id:"create-account",children:[]},{value:"User interface",id:"user-interface",children:[]},{value:"Open terminal",id:"open-terminal",children:[]}],d={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.gitpod.io/docs/"}),"Gitpod")," is an open source platform for automated and ready-to-code development environments. It is bascially a ",Object(a.b)("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VS Code")," development interface in a browser, connected to a Git (Github, Gitlab, Bitbucket) repository."),Object(a.b)("h2",{id:"create-account"},"Create account"),Object(a.b)("p",null,"Opening DApp project in Gitpod requires to create a Gitpod account. Creating a Gitpod account requires an existing account on github, gitlab or bitbucket as illustrated below:"),Object(a.b)(i.a,{img:"gitpod-login.png",width:"100%",mdxType:"DappFigure"}),Object(a.b)(c.a,{url:"https://gitpod.io/workspaces/",txt:"go to gitpod",mdxType:"DappButton"}),Object(a.b)("p",null,"The free plan allows the use of 30 hours per month, which largely covers the need for these DApps projects."),Object(a.b)("h2",{id:"user-interface"},"User interface"),Object(a.b)("p",null,"Below is a screenshot of the gitpod user interface (for the ",Object(a.b)(l.a,{to:"/docs/dapp-miles/",mdxType:"Link"},"Fidelity Program")," DApp):"),Object(a.b)(i.a,{img:"gitpod-screen.png",width:"100%",mdxType:"DappFigure"}),Object(a.b)("p",null,"\u2460 Files tree (navigate down to a file and click on it to display)"),Object(a.b)("p",null,"\u2461 Terminal"),Object(a.b)("p",null,"\u2462 File view"),Object(a.b)("p",null,"\u2463 Menu bar"),Object(a.b)("p",null,"\u2464 Project preview"),Object(a.b)("h2",{id:"open-terminal"},"Open terminal"),Object(a.b)("p",null,"VS Code provides a full featured terminal. It is used in Dapps' technical guides to trigger completium-cli commands to deploy and interact with smart contracts."),Object(a.b)("p",null,'To open the terminal, click on the "New Terminal" in the "Terminal" menu, illustrated below:'),Object(a.b)(i.a,{img:"open-vscode-terminal.png",width:"100%",mdxType:"DappFigure"}),Object(a.b)("p",null,"The terminal is available"))}b.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},135:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(131);t.a=function(e){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",{alt:"Docusaurus with Keytar",style:{width:e.width,paddingTop:"40px",paddingBottom:"40px"},src:Object(a.a)("img/"+e.img)}))}},138:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(245),i=n(220),c=n(243),l=n(132),p=n(131);t.a=function(e){const t=o.a.useMemo((()=>Object(i.a)({palette:{type:"dark"}})),[!0]);return o.a.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},o.a.createElement(c.a,{theme:t},e.internal?o.a.createElement(a.a,{variant:"outlined",size:"large",component:l.a,to:Object(p.a)("docs/"+e.url+"/")},e.txt):o.a.createElement(a.a,{variant:"outlined",size:"large",onClick:()=>window.open(e.url,"_blank")},e.txt)))}}}]);