"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[8992],{3079:function(t,e,n){var a=n(7294),o=n(282),c=n(8500),r=n(3457),i=n(9960),p=n(4996);e.Z=function(t){var e=a.useMemo((function(){return(0,c.Z)({palette:{type:"dark"}})}),[!0]);return a.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},a.createElement(r.Z,{theme:e},t.internal?a.createElement(o.Z,{variant:"outlined",size:"large",component:i.Z,to:(0,p.Z)("docs/"+t.url+"/")},t.txt):a.createElement(o.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(t.url,"_blank")}},t.txt)))}},8230:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var a=n(7462),o=n(3366),c=(n(7294),n(3905)),r=(n(3079),n(7134),n(9960)),i=["components"],p={id:"zcb6",title:"Contract Compilation",sidebar_label:"Contract compilation",slug:"/dapp-zcb/compilation"},s=void 0,l={unversionedId:"dapp-zcb/zcb6",id:"dapp-zcb/zcb6",title:"Contract Compilation",description:"The smart contract is written in Archetype language. Go to the Smart contract section for a detailed presentation.",source:"@site/docs/dapp-zcb/zcb6.md",sourceDirName:"dapp-zcb",slug:"/dapp-zcb/compilation",permalink:"/docs/dapp-zcb/compilation",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-zcb/zcb6.md",tags:[],version:"current",frontMatter:{id:"zcb6",title:"Contract Compilation",sidebar_label:"Contract compilation",slug:"/dapp-zcb/compilation"},sidebar:"dapps",previous:{title:"Technical guide",permalink:"/docs/dapp-zcb/tg-presentation"},next:{title:"Interactions",permalink:"/docs/dapp-zcb/interactions"}},d=[],u={toc:d};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,c.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The smart contract is written in ",(0,c.kt)("a",{href:"https://archetype-lang.org/"},"Archetype")," language. Go to the ",(0,c.kt)(r.Z,{to:"",mdxType:"Link"},"Smart contract")," section for a detailed presentation."),(0,c.kt)("p",null,"In order to generate the javascript, used in the dapp, here is the ",(0,c.kt)(r.Z,{to:"/docs/cli/contract#generate-javascript",mdxType:"Link"},"command"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli generate javascript ./contract/zero_coupon_bond.arl > ./src/contract.js\n")),(0,c.kt)("p",null,"you can now use contract as below:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"import { code, getStorage } from '../contract';\n...\ntezos.wallet.originate({\n      code: code,\n      init: getStorage(\n        zcbState.contractInfo.issueraccount,                         // issuer           : address,\n        zcbState.contractInfo.subscriberaccount,                     // subscriber       : address,\n        zcbState.contractInfo.faceprice * 1000000,                   // facevalue        : tez,\n        mk_rational (parseInt(zcbState.contractInfo.discount), 100), // discount         : rational,\n        zcbState.contractInfo.duration * 60,                         // maturityduration : duration,\n        zcbState.contractInfo.period * 60,                           // paybackduration  : duration,\n        false,                                                       // issuersigned     : bool,\n        false                                                        // subscribersigned : bool\n        )},\n        ).send().then(op => {\n...\n\n")))}m.isMDXComponent=!0}}]);