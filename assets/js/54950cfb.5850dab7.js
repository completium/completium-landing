(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[7994],{807:function(n,t,o){"use strict";o(7294),o(4996)},5306:function(n,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var e=o(2122),c=o(9756),r=(o(7294),o(3905)),a=(o(807),o(7134),o(3079),["components"]),i={id:"zcb7",title:"Interactions",sidebar_label:"Interactions",slug:"/dapp-zcb/interactions"},s=void 0,p={unversionedId:"dapp-zcb/zcb7",id:"dapp-zcb/zcb7",isDocsHomePage:!1,title:"Interactions",description:"Contract origination",source:"@site/docs/dapp-zcb/zcb7.md",sourceDirName:"dapp-zcb",slug:"/dapp-zcb/interactions",permalink:"/docs/dapp-zcb/interactions",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-zcb/zcb7.md",version:"current",frontMatter:{id:"zcb7",title:"Interactions",sidebar_label:"Interactions",slug:"/dapp-zcb/interactions"},sidebar:"dapps",previous:{title:"Contract compilation",permalink:"/docs/dapp-zcb/compilation"}},d=[{value:"Contract origination",id:"contract-origination",children:[]}],l={toc:d};function u(n){var t=n.components,o=(0,c.Z)(n,a);return(0,r.kt)("wrapper",(0,e.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contract-origination"},"Contract origination"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/components/EditorBar.js")," line 42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const handleClick = () => {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // Origination 'contract'\n    ///////////////////////////////////////////////////////////////////////////\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'tezos.wallet.originate({\n  code: ZCBContractCode,\n  init: getStorage(\n    zcbState.contractInfo.issueraccount,\n    zcbState.contractInfo.subscriberaccount,\n    (parseInt(zcbState.contractInfo.faceprice)*1000000).toString(),\n    zcbState.contractInfo.discount,\n    "100",\n    (parseInt(zcbState.contractInfo.duration)*60).toString(),\n    (parseInt(zcbState.contractInfo.period)*60).toString())\n}).send().then(op => {\n  console.log(`Waiting for confirmation of origination...`);\n  props.openSnack();\n  return op.contract()\n}).then (contract => {\n  props.closeSnack();\n  setContractAddress(contract.address);\n  console.log(`Origination completed for ${contract.address}.`);\n}).catch(error => console.log(`Error: ${JSON.stringify(error, null, 2)}`));\n')))}u.isMDXComponent=!0}}]);