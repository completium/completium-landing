"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[9200],{4481:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),d=["components"],p={id:"dex11",title:"Interface",sidebar_label:"Interface",slug:"/dapp-dex/fa12interface"},o=void 0,s={unversionedId:"dapp-dex/dex11",id:"dapp-dex/dex11",title:"Interface",description:"Storage",source:"@site/docs/dapp-dex/dex11.md",sourceDirName:"dapp-dex",slug:"/dapp-dex/fa12interface",permalink:"/docs/dapp-dex/fa12interface",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-dex/dex11.md",tags:[],version:"current",frontMatter:{id:"dex11",title:"Interface",sidebar_label:"Interface",slug:"/dapp-dex/fa12interface"}},i=[{value:"Storage",id:"storage",children:[],level:2},{value:"Entry points",id:"entry-points",children:[{value:"Transfer",id:"transfer",children:[],level:3},{value:"Approve",id:"approve",children:[],level:3},{value:"Get balance",id:"get-balance",children:[],level:3},{value:"Get allowance",id:"get-allowance",children:[],level:3},{value:"Get total supply",id:"get-total-supply",children:[],level:3}],level:2}],c={toc:i};function u(e){var t=e.components,a=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"storage"},"Storage"),(0,l.kt)("p",null,"The contract declares two ",(0,l.kt)("a",{parentName:"p",href:"https://docs.archetype-lang.org/archetype-language/data-model"},"assets"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"asset ledger identified by holder to big_map {\n  holder     : address;\n  tokens     : nat = 0;\n} initialized by {\n  { holder = caller; tokens = totalsupply }\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ledger")," asset is the cap table: it holds the number of tokens for each token holder.\n",(0,l.kt)("inlineCode",{parentName:"p"},"totalsupply")," is the initial number of tokens held by the originator of the contract."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"asset allowance identified by addr_owner addr_spender to big_map {\n  addr_owner       : address;\n  addr_spender     : address;\n  amount           : nat;\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"allowance")," asset stores the amount of tokens that can be spent by ",(0,l.kt)("inlineCode",{parentName:"p"},"addr_spender")," on the behalf of ",(0,l.kt)("inlineCode",{parentName:"p"},"addr_owner"),"."),(0,l.kt)("h2",{id:"entry-points"},"Entry points"),(0,l.kt)("h3",{id:"transfer"},"Transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"entry %transfer (%from : address, %to : address, value : nat) {\n  ...\n}\n")),(0,l.kt)("h3",{id:"approve"},"Approve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"entry approve() {\n    ...\n}\n")),(0,l.kt)("h3",{id:"get-balance"},"Get balance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"getter getAllowance (owner : address, spender : address) : nat {\n  return (allowance[(owner, spender)].amount)\n}\n")),(0,l.kt)("h3",{id:"get-allowance"},"Get allowance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"getter getBalance (owner : address) : nat {\n  return (ledger[owner].tokens)\n}\n")),(0,l.kt)("h3",{id:"get-total-supply"},"Get total supply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"getter getTotalSupply () : nat {\n  return totalsupply\n}\n")))}u.isMDXComponent=!0}}]);