(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{119:function(t,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return i})),o.d(n,"toc",(function(){return s})),o.d(n,"default",(function(){return d}));var c=o(3),e=o(7),r=(o(0),o(196)),a=(o(197),o(199),o(200),{id:"zcb7",title:"Interactions",sidebar_label:"Interactions",slug:"/dapp-zcb/interactions"}),i={unversionedId:"dapp-zcb/zcb7",id:"dapp-zcb/zcb7",isDocsHomePage:!1,title:"Interactions",description:"Contract origination",source:"@site/docs/dapp-zcb/zcb7.md",slug:"/dapp-zcb/interactions",permalink:"/docs/dapp-zcb/interactions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-zcb/zcb7.md",version:"current",sidebar_label:"Interactions",sidebar:"zcb",previous:{title:"Contract Compilation",permalink:"/docs/dapp-zcb/compilation"},next:{title:"Interface",permalink:"/docs/dapp-zcb/interface"}},s=[{value:"Contract origination",id:"contract-origination",children:[]}],p={toc:s};function d(t){var n=t.components,o=Object(e.a)(t,["components"]);return Object(r.b)("wrapper",Object(c.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"contract-origination"},"Contract origination"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"src/components/EditorBar.js")," line 42"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-js"}),"const handleClick = () => {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // Origination 'contract'\n    ///////////////////////////////////////////////////////////////////////////\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-js"}),'tezos.wallet.originate({\n  code: ZCBContractCode,\n  init: getStorage(\n    zcbState.contractInfo.issueraccount,\n    zcbState.contractInfo.subscriberaccount,\n    (parseInt(zcbState.contractInfo.faceprice)*1000000).toString(),\n    zcbState.contractInfo.discount,\n    "100",\n    (parseInt(zcbState.contractInfo.duration)*60).toString(),\n    (parseInt(zcbState.contractInfo.period)*60).toString())\n}).send().then(op => {\n  console.log(`Waiting for confirmation of origination...`);\n  props.openSnack();\n  return op.contract()\n}).then (contract => {\n  props.closeSnack();\n  setContractAddress(contract.address);\n  console.log(`Origination completed for ${contract.address}.`);\n}).catch(error => console.log(`Error: ${JSON.stringify(error, null, 2)}`));\n')))}d.isMDXComponent=!0},197:function(t,n,o){"use strict";o(0),o(201)}}]);