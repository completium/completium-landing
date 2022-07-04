"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[1442],{807:function(e,t,n){n(7294),n(4996)},2660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),o=(n(807),n(7134)),c=(n(3079),n(9960)),r=["components"],d={id:"game4",title:"Sign & Submit score",sidebar_label:"Sign&Submit",slug:"/dapp-game/usecase"},l=void 0,p={unversionedId:"dapp-game/game4",id:"dapp-game/game4",title:"Sign & Submit score",description:"Connect to wallet",source:"@site/docs/dapp-game/game4.md",sourceDirName:"dapp-game",slug:"/dapp-game/usecase",permalink:"/docs/dapp-game/usecase",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-game/game4.md",tags:[],version:"current",frontMatter:{id:"game4",title:"Sign & Submit score",sidebar_label:"Sign&Submit",slug:"/dapp-game/usecase"},sidebar:"dapps",previous:{title:"Presentation",permalink:"/docs/dapp-game/Presentation"},next:{title:"Technical guide",permalink:"/docs/dapp-game/tg-presentation"}},u=[{value:"Connect to wallet",id:"connect-to-wallet",children:[],level:2},{value:"Sign score",id:"sign-score",children:[],level:2},{value:"Submit score",id:"submit-score",children:[],level:2}],m={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"connect-to-wallet"},"Connect to wallet"),(0,s.kt)("p",null,'Connect to the wallet by clicking the "Connect to wallet" button:'),(0,s.kt)(o.Z,{img:"game-connect1.png",width:"35%",mdxType:"DappFigure"}),(0,s.kt)("p",null,"Then select the user account. If you don't have a dedicated user account, go to the ",(0,s.kt)(c.Z,{to:"/docs/dapp-game/presentation#create-a-user-account",mdxType:"Link"},"Presentation")," page."),(0,s.kt)("p",null,"Once connected, the account address and a unique game session id are displayed:"),(0,s.kt)(o.Z,{img:"game-connect2.png",width:"50%",mdxType:"DappFigure"}),(0,s.kt)("p",null,'If the Thanos wallet is not installed (as a browser extension), then the "Install Thanos" button is displayed.'),(0,s.kt)("h2",{id:"sign-score"},"Sign score"),(0,s.kt)("p",null,'Click the "Compute & sign score" button.'),(0,s.kt)("p",null,"The Orcale recieves the list played actions (direction keys) and the session id."),(0,s.kt)("p",null,"On the Oracle side, the session id is associated to the initial board configuration. With the list of actions, the oracle is able to compute the score, sign it with its private key and send it back to the DApp's user interface."),(0,s.kt)("p",null,'When received, the signed score value and actions is displayed abve the "Submit" button:'),(0,s.kt)(o.Z,{img:"game-send.png",width:"100%",mdxType:"DappFigure"}),(0,s.kt)("h2",{id:"submit-score"},"Submit score"),(0,s.kt)("p",null,"Click the submit button to send it to the smart contract. The transaction information pops up:"),(0,s.kt)(o.Z,{img:"game-send2.png",width:"60%",mdxType:"DappFigure"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:"{11,13}","{11,13}":!0},'[{\n    "kind":"transaction"\n    "to":"KT1WXMx4kQmDpPTCFEqgtthRuQR6udy7965k"\n    "amount":0\n    "mutez":true\n    "parameter":{\n        "entrypoint":"submit"\n        "value":{\n        "prim":"Pair"\n        "args":[{\n            "bytes":"0507070a000000160000c4ae0cdc2736e665..."\n        }{\n            "string":"edsigtn1sDfLLjeifhqWoGLyQmkpoLN9Fmf4..."\n        }]\n        }\n    }\n}]\n')),(0,s.kt)("p",null,"Note that 2 arguments are passed to the ",(0,s.kt)(c.Z,{to:"/docs/dapp-game/interface#submit",mdxType:"Link"},"submit")," entry point:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"encoded data"),(0,s.kt)("li",{parentName:"ol"},"signed data (by the Oracle)")),(0,s.kt)("p",null,"The smart contract checks that the signed data is the encoded data signed by the Oracle."))}g.isMDXComponent=!0}}]);