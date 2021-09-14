(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[754],{4313:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return h}});var n=o(2122),c=o(9756),r=(o(7294),o(3905)),a=o(6742),s=["components"],i={id:"tuto9",title:"Testing a contract",sidebar_label:"9. Testing a contract",slug:"/contract/tuto/archetype-test"},u=void 0,l={unversionedId:"contract/tuto/tuto9",id:"contract/tuto/tuto9",isDocsHomePage:!1,title:"Testing a contract",description:"In this exercise, a test is written to test the asset contract (step 7).",source:"@site/docs/contract/tuto/tuto9.md",sourceDirName:"contract/tuto",slug:"/contract/tuto/archetype-test",permalink:"/docs/contract/tuto/archetype-test",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/contract/tuto/tuto9.md",version:"current",frontMatter:{id:"tuto9",title:"Testing a contract",sidebar_label:"9. Testing a contract",slug:"/contract/tuto/archetype-test"}},d=[{value:"Code",id:"code",children:[]},{value:"Excute",id:"excute",children:[]}],p={toc:d};function h(t){var e=t.components,o=(0,c.Z)(t,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this exercise, a test is written to test the ",(0,r.kt)(a.Z,{to:"/docs/contract/tuto/archetype-assets",mdxType:"Link"},"asset")," contract (step 7)."),(0,r.kt)("p",null,"The test is written in javascript with the ",(0,r.kt)(a.Z,{to:"/docs/dapp-tools/taquito",mdxType:"Link"},"Taquito")," library and executed with node."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("p",null,"The goal is to originate the contract from archetype source and to call the entry points in order to check the resulating contract storage. The test succeeds if the storage has in a specific state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { TezosToolkit } = require('@taquito/taquito');\nconst tezos = new TezosToolkit('https://api.tez.ie/rpc/edonet');\n\ntezos.tz\n  .getBalance('tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY')\n  .then((balance) => console.log(`${balance.toNumber() / 1000000} \ua729`))\n  .catch((error) => console.log(JSON.stringify(error)));\n")),(0,r.kt)("h2",{id:"excute"},"Excute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}h.isMDXComponent=!0}}]);