(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[1091],{3079:function(e,t,n){"use strict";var a=n(7294),o=n(282),i=n(9277),r=n(3457),s=n(6742),c=n(4996);t.Z=function(e){var t=a.useMemo((function(){return(0,i.Z)({palette:{type:"dark"}})}),[!0]);return a.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},a.createElement(r.Z,{theme:t},e.internal?a.createElement(o.Z,{variant:"outlined",size:"large",component:s.Z,to:(0,c.Z)("docs/"+e.url+"/")},e.txt):a.createElement(o.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(e.url,"_blank")}},e.txt)))}},807:function(e,t,n){"use strict";n(7294),n(4996)},123:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return h},default:function(){return k}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=(n(807),n(7134)),s=n(3079),c=n(6742),p=["components"],l={id:"escrow4",title:"Purchase process",sidebar_label:"Purchase process",slug:"/dapp-escrow/usecase"},d=void 0,u={unversionedId:"dapp-escrow/escrow4",id:"dapp-escrow/escrow4",isDocsHomePage:!1,title:"Purchase process",description:"The payment process requires a escrow contract to be originated.",source:"@site/docs/dapp-escrow/escrow4.md",sourceDirName:"dapp-escrow",slug:"/dapp-escrow/usecase",permalink:"/docs/dapp-escrow/usecase",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-escrow/escrow4.md",version:"current",frontMatter:{id:"escrow4",title:"Purchase process",sidebar_label:"Purchase process",slug:"/dapp-escrow/usecase"},sidebar:"dapps",previous:{title:"Presentation",permalink:"/docs/dapp-escrow/Presentation"},next:{title:"Technical guide",permalink:"/docs/dapp-escrow/tg-presentation"}},h=[{value:"Connect to wallet",id:"connect-to-wallet",children:[]},{value:"Escrow origination",id:"escrow-origination",children:[]},{value:"Fund escrow",id:"fund-escrow",children:[]},{value:"Finalize purchase",id:"finalize-purchase",children:[]}],m={toc:h};function k(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The payment process requires a ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Escrow"},"escrow")," contract to be originated."),(0,i.kt)("h2",{id:"connect-to-wallet"},"Connect to wallet"),(0,i.kt)("p",null,'Connect to the wallet by clicking the "Connect to wallet" button:'),(0,i.kt)(r.Z,{img:"escrow-connect1.png",width:"35%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"Then select the user account. If you don't have a dedicated user account, go to the ",(0,i.kt)(c.Z,{to:"/docs/dapp-game/presentation#create-a-user-account",mdxType:"Link"},"Presentation")," page."),(0,i.kt)("p",null,"Once connected, the account address is displayed in the purchase panel:"),(0,i.kt)(r.Z,{img:"escrow-connect2.png",width:"80%",mdxType:"DappFigure"}),(0,i.kt)("p",null,'If the Thanos wallet is not installed (as a browser extension), then the "Install Thanos" button is displayed.'),(0,i.kt)("h2",{id:"escrow-origination"},"Escrow origination"),(0,i.kt)("p",null,"A payment contract is originated by the purchaser to start the purchase process. It supposes the seller is equipped with a contract indexer to be notified when a new purchase contract is originated."),(0,i.kt)("p",null,'Click the "Create escrow" button to trigger the contract creation (aka origination):'),(0,i.kt)(r.Z,{img:"escrow-origination.png",width:"100%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"In this example, the following parameters are hardcoded in the contract:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"seller address"),(0,i.kt)("li",{parentName:"ul"},"tax collector address"),(0,i.kt)("li",{parentName:"ul"},"tax rate"),(0,i.kt)("li",{parentName:"ul"},"security deposit (equal to 110% of the face value of the item)")),(0,i.kt)("p",null,"The contract code is embedded in origination transaction's json parameter in the ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," section, split in ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"storage")," sections."),(0,i.kt)("p",null,"This json format of the ",(0,i.kt)(c.Z,{to:"/docs/dapp-tools/tezos#micheslon",mdxType:"Link"},"Michelson")," contract code (called ",(0,i.kt)("em",{parentName:"p"},"Micheline"),") is ",(0,i.kt)(c.Z,{to:"/docs/dapp-escrow/compilation",mdxType:"Link"},"generated")," by the ",(0,i.kt)("a",{href:"https://archetype-lang.org/"},"Archetype")," compiler."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "kind":"origination"\n        "balance":"0"\n        "script":{\n            "code":[...]\n            "storage":{...}\n        }\n    }\n]\n')),(0,i.kt)("p",null,"Once created, the new contract address is displayed and links to the ",(0,i.kt)(c.Z,{to:"docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev")," indexer for inspection. For example:"),(0,i.kt)(r.Z,{img:"escrow-origination2.png",width:"100%",mdxType:"DappFigure"}),(0,i.kt)("h2",{id:"fund-escrow"},"Fund escrow"),(0,i.kt)("p",null,"The newly created escrow contract needs to be funded for the purchase query to be completed. Click the 'Fund escrow' button:"),(0,i.kt)(r.Z,{img:"escrow-fund.png",width:"100%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"The json's transaction parameter is displayed by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Raw")," button:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[{\n    "kind":"transaction"\n    "to":"KT1Ta6tPZiY7299CRtEEoSByW56pz4jCc9vj"\n    "amount":195500000\n    "mutez":true\n    "parameter":{\n        "entrypoint":"fund"\n        "value":{\n            "prim":"Unit"\n        }\n    }\n}]\n')),(0,i.kt)("p",null,"Note that the amount transeferred ",(0,i.kt)("inlineCode",{parentName:"p"},"195500000")," is in mutez unit, which is 195.5\ua729 as expected."),(0,i.kt)("p",null,"Once validated, the balance of the escrow is displayed:"),(0,i.kt)(r.Z,{img:"escrow-fund2.png",width:"100%",mdxType:"DappFigure"}),(0,i.kt)("h2",{id:"finalize-purchase"},"Finalize purchase"),(0,i.kt)("p",null,"When the escrow is funded, the seller may send the item to the buyer's address."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that only the buyer may transfer the fund to the seller. The incentive for the buyer to do so is to get back the security deposit. This may be done when the item is received."))),(0,i.kt)("p",null,"In this example, the transit process is materialized with the following popup:"),(0,i.kt)(r.Z,{img:"escrow-transfer.png",width:"50%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"Fill in the buyer address and click on 'Set Address'. When the address is set, the transit takes a about 20 seconds for the sake of the demonstration."),(0,i.kt)("p",null,"When the transit is complete, you may click on the 'Transfer fund' button in order to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"transfer 85\ua729 to the sellet"),(0,i.kt)("li",{parentName:"ol"},"transfer back the security deposit of 85\ua729 back to you"),(0,i.kt)("li",{parentName:"ol"},"transfer the tax to the tax collector")),(0,i.kt)(r.Z,{img:"escrow-transfer2.png",width:"100%",mdxType:"DappFigure"}),(0,i.kt)("p",null,"The ",(0,i.kt)(c.Z,{to:"/docs/dapp-escrow/interface#complete",mdxType:"Link"},"complete")," entry point of the escrow contract is called. Below is an example of the 3 generated internal transactions as shown in ",(0,i.kt)(c.Z,{to:"docs/dapp-tools/bcd",mdxType:"Link"},"Better call Dev")," indexer:"),(0,i.kt)(r.Z,{img:"escrow-transfer3.png",width:"100%",mdxType:"DappFigure"}),(0,i.kt)(s.Z,{url:"https://better-call.dev/hangzhounet/opg/ooBNEg5t2UeoHcBkC32GgNjUVvbracxnhGvD5nmyBuL1efFgDMQ/contents",txt:"open in BCD",mdxType:"DappButton"}))}k.isMDXComponent=!0}}]);