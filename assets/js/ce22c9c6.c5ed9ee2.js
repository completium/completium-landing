(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[294],{3079:function(e,t,n){"use strict";var a=n(7294),o=n(282),i=n(9277),d=n(3457),r=n(6742),p=n(4996);t.Z=function(e){var t=a.useMemo((function(){return(0,i.Z)({palette:{type:"dark"}})}),[!0]);return a.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},a.createElement(d.Z,{theme:t},e.internal?a.createElement(o.Z,{variant:"outlined",size:"large",component:r.Z,to:(0,p.Z)("docs/"+e.url+"/")},e.txt):a.createElement(o.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(e.url,"_blank")}},e.txt)))}},807:function(e,t,n){"use strict";n(7294),n(4996)},7796:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return b}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),d=(n(807),n(7134)),r=n(3079),p=n(6742),l=["components"],c={id:"ideabox10",title:"Add an Idea or Vote",sidebar_label:"Add idea or vote",slug:"/dapp-ideabox/addidea"},s=void 0,u={unversionedId:"dapp-ideabox/ideabox10",id:"dapp-ideabox/ideabox10",isDocsHomePage:!1,title:"Add an Idea or Vote",description:"Vote for or add a new idea in the DApp web interface:",source:"@site/docs/dapp-ideabox/ideabox10.md",sourceDirName:"dapp-ideabox",slug:"/dapp-ideabox/addidea",permalink:"/docs/dapp-ideabox/addidea",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-ideabox/ideabox10.md",version:"current",frontMatter:{id:"ideabox10",title:"Add an Idea or Vote",sidebar_label:"Add idea or vote",slug:"/dapp-ideabox/addidea"},sidebar:"dapps",previous:{title:"Register voter",permalink:"/docs/dapp-ideabox/registervoter"},next:{title:"Technical guide",permalink:"/docs/dapp-ideabox/tg-presentation"}},m=[{value:"Connect to wallet",id:"connect-to-wallet",children:[]},{value:"Vote",id:"vote",children:[]},{value:"Add an Idea",id:"add-an-idea",children:[]}],h={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vote for or add a new idea in the DApp web interface:"),(0,i.kt)(r.Z,{url:"https://edukera.github.io/completium-dapp-ideabox/",txt:"open dapp",mdxType:"DappButton"}),(0,i.kt)("h2",{id:"connect-to-wallet"},"Connect to wallet"),(0,i.kt)("p",null,'Connect to the wallet by clicking the "Connect" button:'),(0,i.kt)(d.Z,{img:"ideabox-connect1.png",width:"35%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"Then select the user account. If you don't have a dedicated user account, go to the ",(0,i.kt)(p.Z,{to:"/docs/dapp-ideabox/presentation#create-a-user-account",mdxType:"Link"},"Presentation")," page."),(0,i.kt)("p",null,"Once connected, the account address and the number of remmaining votes (max. is 5) is displayed:"),(0,i.kt)(d.Z,{img:"ideabox-connect2.png",width:"100%",mdxType:"DappFigure"}),(0,i.kt)("p",null,'If the Thanos wallet is not installed (as a browser extension), then the "Install Thanos" button is displayed.'),(0,i.kt)("h2",{id:"vote"},"Vote"),(0,i.kt)("p",null,'We first want to check ideas with the highest number of votes. Click on the "Sort by votes" button to do so:'),(0,i.kt)(d.Z,{img:"ideabox-sort.png",width:"20%",mdxType:"DappFigure"}),(0,i.kt)("p",null,'The idea with highest number of votes (at the time of writing) is "Huge gigantic banner". Click on the blue thumb-up icon to vote for it:'),(0,i.kt)(d.Z,{img:"ideabox-top.png",width:"60%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"You may check the json parameters, the first parameter of the ",(0,i.kt)(p.Z,{to:"/docs/dapp-ideabox/interface#vote",mdxType:"Link"},"vote")," entry point is the idea's id (7):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{12}","{12}":!0},'[\n    {\n        "kind":"transaction"\n        "to":"KT1QMowNVCUngertU7bAeoZmU7XYm3gphE69"\n        "amount":0\n        "mutez":true\n        "parameter":{\n            "entrypoint":"vote"\n            "value":{\n            "prim":"Pair"\n            "args":[{\n                    "int":"7"\n                }, {\n                    "int":"1"\n                }\n            ]\n            }\n        }\n    }\n]\n')),(0,i.kt)("h2",{id:"add-an-idea"},"Add an Idea"),(0,i.kt)("p",null,"You may add a new idea and you don't need to be regsitered for that."),(0,i.kt)("p",null,'Click the "+" button at the bottom of the DApp:'),(0,i.kt)(d.Z,{img:"ideabox-add.png",width:"30%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"This displays the form to create an idea:"),(0,i.kt)(d.Z,{img:"ideabox-form.png",width:"80%",mdxType:"DappFigure"}),(0,i.kt)("p",null,'Click the "Submit" button to add the idea. You may check the json parameters, the first parameter of the ',(0,i.kt)(p.Z,{to:"/docs/dapp-ideabox/implementation#add-idea",mdxType:"Link"},"add-idea")," entry point is the idea's title and the second is the idea's body :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{11,13}","{11,13}":!0},'[{\n    "kind":"transaction"\n    "to":"KT1QMowNVCUngertU7bAeoZmU7XYm3gphE69"\n    "amount":0\n    "mutez":true\n    "parameter":{\n    "entrypoint":"add_idea"\n    "value":{\n        "prim":"Pair"\n        "args":[{\n            "bytes":"20813100810dc01d21cc0a6e01981ec04eb0..."\n        } {\n            "bytes":"248170040ee0f60ae0360133008c0a660398..."\n        }]\n    }\n    }\n}]\n')),(0,i.kt)("p",null,"Note that the idea's title and body are are sent to the contract in zipped and encoded format."))}b.isMDXComponent=!0}}]);