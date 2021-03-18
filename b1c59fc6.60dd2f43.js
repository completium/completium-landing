(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var i=n(3),o=n(7),a=(n(0),n(187)),s=n(191),c=n(189),p=n(190),l={id:"miles5",title:"Consume Miles",sidebar_label:"Consume Miles",slug:"/dapp-miles/consume-miles"},r={unversionedId:"dapp-miles/miles5",id:"dapp-miles/miles5",isDocsHomePage:!1,title:"Consume Miles",description:"Miles are consumed on the DApp user interface. Click the button below to open the DApp:",source:"@site/docs/dapp-miles/miles5.md",slug:"/dapp-miles/consume-miles",permalink:"/docs/dapp-miles/consume-miles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-miles/miles5.md",version:"current",sidebar_label:"Consume Miles",sidebar:"miles",previous:{title:"Create Miles",permalink:"/docs/dapp-miles/create-miles"},next:{title:"Presentation",permalink:"/docs/dapp-miles/miles-tg-overview"}},u=[{value:"Connect to the Dapp",id:"connect-to-the-dapp",children:[]},{value:"Pick reward item",id:"pick-reward-item",children:[]}],d={toc:u};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Miles are consumed on the DApp user interface. Click the button below to open the DApp:"),Object(a.b)(s.a,{url:"https://edukera.github.io/completium-dapp-miles/",txt:"open dapp",mdxType:"DappButton"}),Object(a.b)("h2",{id:"connect-to-the-dapp"},"Connect to the Dapp"),Object(a.b)("p",null,'Connect to the DApp by clicking the "Connect" button:'),Object(a.b)(c.a,{img:"miles-connect1.png",width:"35%",mdxType:"DappFigure"}),Object(a.b)("p",null,"Then select the user account. If you don't have a dedicated user account, go to the ",Object(a.b)(p.a,{to:"/docs/dapp-miles/usecase-presentation#create-a-user-account",mdxType:"Link"},"Presentation")," page."),Object(a.b)("p",null,"Once connected, the number of valid miles (ie. with expiration date in the future) is displayed:"),Object(a.b)(c.a,{img:"miles-connect3.png",width:"100%",mdxType:"DappFigure"}),Object(a.b)("p",null,'If the Thanos wallet is not installed (as a browser extension), then the "Install Thanos" button is displayed.'),Object(a.b)("h2",{id:"pick-reward-item"},"Pick reward item"),Object(a.b)("p",null,'When the connected account has enough miles, the "Get it!" button of the reward item is enabled. Clicking this button generates the miles\'s consumption transaction to the smart contract.'),Object(a.b)("p",null,"For example, clicking the \"Get it!\" button on the 'Tezos phone case' item generates the transaction popup issued by the Thanos wallet."),Object(a.b)(c.a,{img:"miles-consume.png",width:"70%",mdxType:"DappFigure"}),Object(a.b)("p",null,'You may check the transaction parameters in the "Operations" section:'),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "kind":"transaction"\n        "to":"KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86"\n        "amount":0\n        "mutez":true\n        "parameter":{\n            "entrypoint":"consume"\n            "value":{\n                "int":"5"\n            }\n        }\n    }\n]\n')),Object(a.b)("p",null,'Once the transaction is confirmed, you can verify the transaction online with the "Better Call Dev" indexer:'),Object(a.b)(s.a,{url:"https://better-call.dev/delphinet/KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86/operations",txt:"open smart contract",mdxType:"DappButton"}))}m.isMDXComponent=!0}}]);