(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),a=(n(0),n(238)),r=(n(242),n(241),n(239));const c={id:"escrow6",title:"Contract Compilation",sidebar_label:"Contract Compilation",slug:"/dapp-escrow/compilation"},i={unversionedId:"dapp-escrow/escrow6",id:"dapp-escrow/escrow6",isDocsHomePage:!1,title:"Contract Compilation",description:"The smart contract is written in Archetype language. Go to the Smart contract section for a detailed presentation.",source:"@site/docs/dapp-escrow/escrow6.md",slug:"/dapp-escrow/compilation",permalink:"/docs/dapp-escrow/compilation",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-escrow/escrow6.md",version:"current",sidebar_label:"Contract Compilation",sidebar:"dapps",previous:{title:"Technical guide",permalink:"/docs/dapp-escrow/tg-presentation"},next:{title:"Interactions",permalink:"/docs/dapp-escrow/interactions"}},s=[],p={toc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The smart contract is written in ",Object(a.b)("a",{href:"https://archetype-lang.org/"},"Archetype")," language. Go to the ",Object(a.b)(r.a,{to:"",mdxType:"Link"},"Smart contract")," section for a detailed presentation."),Object(a.b)("p",null,"In order to generate the javascript, used in the dapp, here is the ",Object(a.b)(r.a,{to:"/docs/cli/contract#generate-javascript",mdxType:"Link"},"command"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"completium-cli generate javascript ./contract/escrow.arl > ./src/contract.js\n")),Object(a.b)("p",null,"you can now use contract as below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { code, getStorage } from '../contract';\n...\ntezos.wallet.originate({\n      code: code,\n      init: getStorage(\n        seller,                                // seller\n        account,                               // buyer\n        taxCollector,                          // taxcollector\n        (parseInt(price) * 1000000).toString() // price\n      )\n    }).send().then(op => {\n...\n\n")))}l.isMDXComponent=!0}}]);