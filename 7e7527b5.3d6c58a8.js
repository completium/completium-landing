(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),c=(n(0),n(224)),s=(n(226),n(227)),o=(n(228),n(225)),d={id:"game4",title:"Sign & Submit score",sidebar_label:"Sign&Submit",slug:"/dapp-game/usecase"},r={unversionedId:"dapp-game/game4",id:"dapp-game/game4",isDocsHomePage:!1,title:"Sign & Submit score",description:"Connect to wallet",source:"@site/docs/dapp-game/game4.md",slug:"/dapp-game/usecase",permalink:"/docs/dapp-game/usecase",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-game/game4.md",version:"current",sidebar_label:"Sign&Submit",sidebar:"dapps",previous:{title:"Use Case Presentation",permalink:"/docs/dapp-game/Presentation"},next:{title:"Technical guide",permalink:"/docs/dapp-game/tg-presentation"}},p=[{value:"Connect to wallet",id:"connect-to-wallet",children:[]},{value:"Sign score",id:"sign-score",children:[]},{value:"Submit score",id:"submit-score",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"connect-to-wallet"},"Connect to wallet"),Object(c.b)("p",null,'Connect to the wallet by clicking the "Connect to wallet" button:'),Object(c.b)(s.a,{img:"game-connect1.png",width:"35%",mdxType:"DappFigure"}),Object(c.b)("p",null,"Then select the user account. If you don't have a dedicated user account, go to the ",Object(c.b)(o.a,{to:"/docs/dapp-game/presentation#create-a-user-account",mdxType:"Link"},"Presentation")," page."),Object(c.b)("p",null,"Once connected, the account address and a unique game session id are displayed:"),Object(c.b)(s.a,{img:"game-connect2.png",width:"50%",mdxType:"DappFigure"}),Object(c.b)("p",null,'If the Thanos wallet is not installed (as a browser extension), then the "Install Thanos" button is displayed.'),Object(c.b)("h2",{id:"sign-score"},"Sign score"),Object(c.b)("p",null,'Click the "Compute & sign score" button.'),Object(c.b)("p",null,"The Orcale recieves the list played actions (direction keys) and the session id."),Object(c.b)("p",null,"On the Oracle side, the session id is associated to the initial board configuration. With the list of actions, the oracle is able to compute the score, sign it with its private key and send it back to the DApp's user interface."),Object(c.b)("p",null,'When received, the signed score value and actions is displayed abve the "Submit" button:'),Object(c.b)(s.a,{img:"game-send.png",width:"100%",mdxType:"DappFigure"}),Object(c.b)("h2",{id:"submit-score"},"Submit score"),Object(c.b)("p",null,"Click the submit button to send it to the smart contract. The transaction information pops up:"),Object(c.b)(s.a,{img:"game-send2.png",width:"60%",mdxType:"DappFigure"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{11,13}","{11,13}":!0}),'[{\n    "kind":"transaction"\n    "to":"KT1WXMx4kQmDpPTCFEqgtthRuQR6udy7965k"\n    "amount":0\n    "mutez":true\n    "parameter":{\n        "entrypoint":"submit"\n        "value":{\n        "prim":"Pair"\n        "args":[{\n            "bytes":"0507070a000000160000c4ae0cdc2736e665..."\n        }{\n            "string":"edsigtn1sDfLLjeifhqWoGLyQmkpoLN9Fmf4..."\n        }]\n        }\n    }\n}]\n')),Object(c.b)("p",null,"Note that 2 arguments are passed to the ",Object(c.b)(o.a,{to:"/docs/dapp-game/interface#submit",mdxType:"Link"},"submit")," entry point:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"encoded data"),Object(c.b)("li",{parentName:"ol"},"signed data (by the Oracle)")),Object(c.b)("p",null,"The smart contract checks that the signed data is the encoded data signed by the Oracle."))}u.isMDXComponent=!0},226:function(e,t,n){"use strict";n(0),n(230)}}]);