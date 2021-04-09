(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{160:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),c=(o(0),o(224)),r=(o(228),o(227),o(225)),i={id:"escrow6",title:"Contract Compilation",sidebar_label:"Contract Compilation",slug:"/dapp-escrow/compilation"},s={unversionedId:"dapp-escrow/escrow6",id:"dapp-escrow/escrow6",isDocsHomePage:!1,title:"Contract Compilation",description:"The smart contract is written in Archetype language. Go to the Smart contract section for a detailed presentation.",source:"@site/docs/dapp-escrow/escrow6.md",slug:"/dapp-escrow/compilation",permalink:"/docs/dapp-escrow/compilation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-escrow/escrow6.md",version:"current",sidebar_label:"Contract Compilation",sidebar:"dapps",previous:{title:"Technical guide",permalink:"/docs/dapp-escrow/tg-presentation"},next:{title:"Interactions",permalink:"/docs/dapp-escrow/interactions"}},p=[],l={toc:p};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The smart contract is written in ",Object(c.b)("a",{href:"https://archetype-lang.org/"},"Archetype")," language. Go to the ",Object(c.b)(r.a,{to:"",mdxType:"Link"},"Smart contract")," section for a detailed presentation."),Object(c.b)("p",null,"In order to generate the javascript, used in the dapp, here is the ",Object(c.b)(r.a,{to:"/docs/cli/contract#generate-javascript",mdxType:"Link"},"command"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"completium-cli generate javascript ./contract/escrow.arl > ./src/contract.js\n")),Object(c.b)("p",null,"you can now use contract as below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { code, getStorage } from '../contract';\n...\ntezos.wallet.originate({\n      code: code,\n      init: getStorage(\n        seller,                                // seller\n        account,                               // buyer\n        taxCollector,                          // taxcollector\n        (parseInt(price) * 1000000).toString() // price\n      )\n    }).send().then(op => {\n...\n\n")))}d.isMDXComponent=!0}}]);