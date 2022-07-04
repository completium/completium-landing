"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[5197],{7738:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return g}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(7134),p=n(3079),s=n(9960),u=["components"],d={id:"iot40",title:"Interrupt",sidebar_label:"Interrupt",slug:"/dapp-iot/interrupt"},c=void 0,l={unversionedId:"dapp-iot/iot40",id:"dapp-iot/iot40",title:"Interrupt",description:'It is possible to interrupt the service by clicking the "Interrupt" button:',source:"@site/docs/dapp-iot/iot40.md",sourceDirName:"dapp-iot",slug:"/dapp-iot/interrupt",permalink:"/docs/dapp-iot/interrupt",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-iot/iot40.md",tags:[],version:"current",frontMatter:{id:"iot40",title:"Interrupt",sidebar_label:"Interrupt",slug:"/dapp-iot/interrupt"},sidebar:"dapps",previous:{title:"Switch on",permalink:"/docs/dapp-iot/switchon"},next:{title:"Presentation",permalink:"/docs/dapp-iot/tg-presentation"}},m=[],k={toc:m};function g(t){var e=t.components,n=(0,i.Z)(t,u);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'It is possible to interrupt the service by clicking the "Interrupt" button:'),(0,o.kt)(a.Z,{img:"iot-duration.png",width:"60%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"It generates the following transaction parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[{\n    "kind":"transaction"\n    "to":"KT1CxHBiCSvmXn9kXCbhPfdGDAggGG9ktQEX"\n    "amount":0\n    "mutez":true\n    "parameter":{\n        "entrypoint":"interrupt"\n        "value":{\n            "prim":"Unit"\n        }\n    }\n}]\n')),(0,o.kt)("p",null,"It is possible to check the corresponding transactions in the ",(0,o.kt)(s.Z,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev")," indexer:"),(0,o.kt)(a.Z,{img:"iot-bcd.png",width:"100%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"We note in the screenshot above that the smart contract pays back to the ",(0,o.kt)("em",{parentName:"p"},"caller")," an amount in prorata of the session duration, as formulated in the smart contract ",(0,o.kt)(s.Z,{to:"/docs/dapp-iot/implementation#interrupt",mdxType:"Link"},"interrupt")," entry point:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype",metastring:"{2,11}","{2,11}":!0},"function get_return_tz () : tez {\n    var res : int = 1 / get_rate_in_s_by_utz() * (dateofstop - now);\n    return (res * 1utz)\n}\n\nentry interrupt () {\n    require {\n        r2: caller = opt_get(user) and now < dateofstop\n    }\n    effect {\n        transfer (get_return_tz()) to caller;\n        dateofstop  := now - read_interval;\n        dateofstart := now - read_interval;\n    }\n}\n")),(0,o.kt)(p.Z,{url:"https://better-call.dev/ithacanet/KT1CxHBiCSvmXn9kXCbhPfdGDAggGG9ktQEX/operations",txt:"open contract",mdxType:"DappButton"}))}g.isMDXComponent=!0}}]);