(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[102],{3906:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),c=(n(3079),n(7134),n(6742)),i=["components"],s={id:"escrow6",title:"Contract Compilation",sidebar_label:"Contract Compilation",slug:"/dapp-escrow/compilation"},p=void 0,l={unversionedId:"dapp-escrow/escrow6",id:"dapp-escrow/escrow6",isDocsHomePage:!1,title:"Contract Compilation",description:"The smart contract is written in Archetype language. Go to the Smart contract section for a detailed presentation.",source:"@site/docs/dapp-escrow/escrow6.md",sourceDirName:"dapp-escrow",slug:"/dapp-escrow/compilation",permalink:"/docs/dapp-escrow/compilation",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-escrow/escrow6.md",version:"current",frontMatter:{id:"escrow6",title:"Contract Compilation",sidebar_label:"Contract Compilation",slug:"/dapp-escrow/compilation"},sidebar:"dapps",previous:{title:"Technical guide",permalink:"/docs/dapp-escrow/tg-presentation"},next:{title:"Interactions",permalink:"/docs/dapp-escrow/interactions"}},d=[],u={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The smart contract is written in ",(0,a.kt)("a",{href:"https://archetype-lang.org/"},"Archetype")," language. Go to the ",(0,a.kt)(c.Z,{to:"",mdxType:"Link"},"Smart contract")," section for a detailed presentation."),(0,a.kt)("p",null,"In order to generate the javascript, used in the dapp, here is the ",(0,a.kt)(c.Z,{to:"/docs/cli/contract#generate-javascript",mdxType:"Link"},"command"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli generate javascript ./contract/escrow.arl > ./src/contract.js\n")),(0,a.kt)("p",null,"you can now use contract as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { code, getStorage } from '../contract';\n...\ntezos.wallet.originate({\n      code: code,\n      init: getStorage(\n        seller,                                // seller\n        account,                               // buyer\n        taxCollector,                          // taxcollector\n        (parseInt(price) * 1000000).toString() // price\n      )\n    }).send().then(op => {\n...\n\n")))}m.isMDXComponent=!0}}]);