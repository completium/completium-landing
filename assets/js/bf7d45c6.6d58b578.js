"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[3622],{807:function(e,t,r){r(7294),r(4996)},8909:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return h},toc:function(){return u},default:function(){return k}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=(r(807),r(7134)),o=r(3079),l=r(9960),c=["components"],p={id:"escrow1",title:"Online Purchase",sidebar_label:"Introduction",slug:"/dapp-escrow"},d=void 0,h={unversionedId:"dapp-escrow/escrow1",id:"dapp-escrow/escrow1",title:"Online Purchase",description:"Introduction",source:"@site/docs/dapp-escrow/escrow1.md",sourceDirName:"dapp-escrow",slug:"/dapp-escrow",permalink:"/docs/dapp-escrow",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-escrow/escrow1.md",tags:[],version:"current",frontMatter:{id:"escrow1",title:"Online Purchase",sidebar_label:"Introduction",slug:"/dapp-escrow"},sidebar:"dapps",previous:{title:"Interactions",permalink:"/docs/dapp-game/interactions"},next:{title:"Presentation",permalink:"/docs/dapp-escrow/Presentation"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"DApp",id:"dapp",children:[{value:"Architecture",id:"architecture",children:[],level:3},{value:"Benefits",id:"benefits",children:[],level:3},{value:"Discussion",id:"discussion",children:[],level:3}],level:2}],m={toc:u};function k(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{img:"escrow-screen.png",width:"100%",mdxType:"DappFigure"}),(0,a.kt)(o.Z,{url:"https://edukera.github.io/completium-dapp-escrow/",txt:"open dapp",mdxType:"DappButton"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"An online retailer provides a centralized payment process: the payment (or an authorization to withdraw) is first received from the buyer and then is transferred (or is withdrawn from the buyer account) to the seller via the retailer when the purchased item is delivered."),(0,a.kt)("p",null,"How to decentralize the payment process with the blockchain technology? That is how to replace the centralized retailer organization which serves as a trusted third party to transfer the payment from the buyer to the seller?"),(0,a.kt)("p",null,"The challenges to address are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"how to ensure the seller that the buyer is willing to purchase?"),(0,a.kt)("li",{parentName:"ul"},"who is responsible for transferring the payment to the seller?"),(0,a.kt)("li",{parentName:"ul"},"how to manage item delivery failures?"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("h2",{id:"dapp"},"DApp"),(0,a.kt)("p",null,"In this example DApp a ",(0,a.kt)(l.Z,{to:"/docs/dapp-tools/tezos#smart-contract",mdxType:"Link"},"smart contract"),", called an ",(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Escrow",target:"_blank"},"escrow")," contract, is used to implement the payment transfer process."),(0,a.kt)("p",null,"The basic principle of an escrow contract is to hold the payment transferred by the buyer and to relase it to the seller when the delivering process is achieved."),(0,a.kt)("p",null,"The purchase process starts when the buyer creates the escrow contract and transfers or the payment to it (ie. ",(0,a.kt)("em",{parentName:"p"},"funds")," it). The seller is notified thanks to a dedicated ",(0,a.kt)("em",{parentName:"p"},"contract indexer"),". A contract indexer is an off-chain permanent process that monitors and analyses newly created contracts."),(0,a.kt)("p",null,"At this stage the seller may ",(0,a.kt)("em",{parentName:"p"},"abort")," the contract for any reason, typically when the retailing web page is not synchronized with the seller's reality (out of stock situation, change in price, and so on):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("em",{parentName:"li"},"aborted")," by the seller, the escrow contract transfers the payment back to the buyer"),(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("em",{parentName:"li"},"accepted")," by the seller, then transit of the purchased item may occur")),(0,a.kt)("p",null,"The next step is to transfer the payment to the seller when the item is delivered. For simplicity purpose, we consider the item is properly delivered. The situation of delivery failure is addressed in the ",(0,a.kt)(l.Z,{to:"/docs/dapp-escrow#discussion",mdxType:"Link"},"discussion")," section below."),(0,a.kt)("p",null,"Ideally the buyer transfers the payment to the seller when the item is delivered. However what does prevent the buyer from not transferring the payment?"),(0,a.kt)("p",null,"In order to address this issue, the idea is to create a ",(0,a.kt)("u",null,"security deposit")," that is transferred at contract creation. In this DApp the security deposit is ",(0,a.kt)("em",{parentName:"p"},"110%")," of the item price. That is that in order to purchase a 100\ua729 item, a total transfer of 210\ua729 is required. In order to get back the security deposit, the buyer has to transfer the payment to the seller."),(0,a.kt)("p",null,"The figure below illustrates the main payment process:"),(0,a.kt)(s.Z,{img:"escrow-schema.svg",width:"60%",mdxType:"DappFigure"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"contract origination and funding with payment and security deposit"),(0,a.kt)("li",{parentName:"ol"},"seller accepts the contract (with ",(0,a.kt)("inlineCode",{parentName:"li"},"accept")," contract entry point)"),(0,a.kt)("li",{parentName:"ol"},"buyer finalizes the contract (with ",(0,a.kt)("inlineCode",{parentName:"li"},"finalize")," contract entry point):",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"payment is transferred to seller"),(0,a.kt)("li",{parentName:"ol"},"security deposit is transferred back to buyer")))),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The DApp architecture is 4-tier:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)(l.Z,{to:"/docs/templates/escrow",mdxType:"Link"},"escrow")," smart contract"),(0,a.kt)("li",{parentName:"ol"},"off-chain retailing web pages and content servers"),(0,a.kt)("li",{parentName:"ol"},"off-chain contract indexer"),(0,a.kt)("li",{parentName:"ol"},"off-chain seller's back office")),(0,a.kt)(s.Z,{img:"escrow-archi.svg",width:"70%",mdxType:"DappFigure"}),(0,a.kt)("p",null,"For simplicity purpose, the contract indexer and seller back office interface are not provided in this DApp example."),(0,a.kt)("h3",{id:"benefits"},"Benefits"),(0,a.kt)("p",null,"The main operational benefit is the cost reduction due to the absence of centralized process. Plus the orginiation (deployment) and operation costs of the smart contract are very low."),(0,a.kt)("p",null,"Moreover the payment process is transparent since transfer rules are publically available as the smart contract execution code."),(0,a.kt)("h3",{id:"discussion"},"Discussion"),(0,a.kt)("p",null,"The payment process presented here does not handle the failure of delivery: indeed if the item is not delivered, the buyer cannot transfer payment, nor abort it (because the seller has sent the item)."),(0,a.kt)("p",null,"In order to fix that, we need the ",(0,a.kt)("u",null,"delivery thrid party")," to ensure the payment process in case of failure: the delivery third party is given the authority to abort the payment and funds the contract with a ",(0,a.kt)("em",{parentName:"p"},"insurance deposit"),"; this deposit is transferred to the seller in case of delivery failure, and paid back to the delivery third party when the buyer finalizes the process, as illustrated below:"),(0,a.kt)(s.Z,{img:"escrow-schema2.svg",width:"60%",mdxType:"DappFigure"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the delivery third party (DTP) transfer the insurance deposit once the escrow is accepted by the seller"),(0,a.kt)("li",{parentName:"ol"},"3 transfers when the delivery fails: buyer is paid back and insurance deposit is transferred to seller")))}k.isMDXComponent=!0}}]);