"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[294],{807:function(e,t,n){n(7294),n(4996)},6425:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return b}});var a=n(7462),d=n(3366),o=(n(7294),n(3905)),i=(n(807),n(7134)),r=n(3079),p=n(9960),l=["components"],s={id:"ideabox10",title:"Add an Idea or Vote",sidebar_label:"Add idea or vote",slug:"/dapp-ideabox/addidea"},c=void 0,u={unversionedId:"dapp-ideabox/ideabox10",id:"dapp-ideabox/ideabox10",title:"Add an Idea or Vote",description:"Vote for or add a new idea in the DApp web interface:",source:"@site/docs/dapp-ideabox/ideabox10.md",sourceDirName:"dapp-ideabox",slug:"/dapp-ideabox/addidea",permalink:"/docs/dapp-ideabox/addidea",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-ideabox/ideabox10.md",tags:[],version:"current",frontMatter:{id:"ideabox10",title:"Add an Idea or Vote",sidebar_label:"Add idea or vote",slug:"/dapp-ideabox/addidea"},sidebar:"dapps",previous:{title:"Register voter",permalink:"/docs/dapp-ideabox/registervoter"},next:{title:"Technical guide",permalink:"/docs/dapp-ideabox/tg-presentation"}},m=[{value:"Connect to wallet",id:"connect-to-wallet",children:[],level:2},{value:"Vote",id:"vote",children:[],level:2},{value:"Add an Idea",id:"add-an-idea",children:[],level:2}],h={toc:m};function b(e){var t=e.components,n=(0,d.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vote for or add a new idea in the DApp web interface:"),(0,o.kt)(r.Z,{url:"https://edukera.github.io/completium-dapp-ideabox/",txt:"open dapp",mdxType:"DappButton"}),(0,o.kt)("h2",{id:"connect-to-wallet"},"Connect to wallet"),(0,o.kt)("p",null,'Connect to the wallet by clicking the "Connect" button:'),(0,o.kt)(i.Z,{img:"ideabox-connect1.png",width:"35%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"Then select the user account. If you don't have a dedicated user account, go to the ",(0,o.kt)(p.Z,{to:"/docs/dapp-ideabox/presentation#create-a-user-account",mdxType:"Link"},"Presentation")," page."),(0,o.kt)("p",null,"Once connected, the account address and the number of remmaining votes (max. is 5) is displayed:"),(0,o.kt)(i.Z,{img:"ideabox-connect2.png",width:"100%",mdxType:"DappFigure"}),(0,o.kt)("p",null,'If the Thanos wallet is not installed (as a browser extension), then the "Install Thanos" button is displayed.'),(0,o.kt)("h2",{id:"vote"},"Vote"),(0,o.kt)("p",null,'We first want to check ideas with the highest number of votes. Click on the "Sort by votes" button to do so:'),(0,o.kt)(i.Z,{img:"ideabox-sort.png",width:"20%",mdxType:"DappFigure"}),(0,o.kt)("p",null,'The idea with highest number of votes (at the time of writing) is "Huge gigantic banner". Click on the blue thumb-up icon to vote for it:'),(0,o.kt)(i.Z,{img:"ideabox-top.png",width:"60%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"You may check the json parameters, the first parameter of the ",(0,o.kt)(p.Z,{to:"/docs/dapp-ideabox/interface#vote",mdxType:"Link"},"vote")," entry point is the idea's id (7):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{12}","{12}":!0},'[\n    {\n        "kind":"transaction"\n        "to":"KT1QMowNVCUngertU7bAeoZmU7XYm3gphE69"\n        "amount":0\n        "mutez":true\n        "parameter":{\n            "entrypoint":"vote"\n            "value":{\n            "prim":"Pair"\n            "args":[{\n                    "int":"7"\n                }, {\n                    "int":"1"\n                }\n            ]\n            }\n        }\n    }\n]\n')),(0,o.kt)("h2",{id:"add-an-idea"},"Add an Idea"),(0,o.kt)("p",null,"You may add a new idea and you don't need to be regsitered for that."),(0,o.kt)("p",null,'Click the "+" button at the bottom of the DApp:'),(0,o.kt)(i.Z,{img:"ideabox-add.png",width:"30%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"This displays the form to create an idea:"),(0,o.kt)(i.Z,{img:"ideabox-form.png",width:"80%",mdxType:"DappFigure"}),(0,o.kt)("p",null,'Click the "Submit" button to add the idea. You may check the json parameters, the first parameter of the ',(0,o.kt)(p.Z,{to:"/docs/dapp-ideabox/implementation#add-idea",mdxType:"Link"},"add-idea")," entry point is the idea's title and the second is the idea's body :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{11,13}","{11,13}":!0},'[{\n    "kind":"transaction"\n    "to":"KT1QMowNVCUngertU7bAeoZmU7XYm3gphE69"\n    "amount":0\n    "mutez":true\n    "parameter":{\n    "entrypoint":"add_idea"\n    "value":{\n        "prim":"Pair"\n        "args":[{\n            "bytes":"20813100810dc01d21cc0a6e01981ec04eb0..."\n        } {\n            "bytes":"248170040ee0f60ae0360133008c0a660398..."\n        }]\n    }\n    }\n}]\n')),(0,o.kt)("p",null,"Note that the idea's title and body are are sent to the contract in zipped and encoded format."))}b.isMDXComponent=!0}}]);