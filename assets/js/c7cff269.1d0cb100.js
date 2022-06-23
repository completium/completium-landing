"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[1078],{3079:function(e,t,n){var a=n(7294),r=n(282),o=n(8500),i=n(3457),c=n(9960),s=n(4996);t.Z=function(e){var t=a.useMemo((function(){return(0,o.Z)({palette:{type:"dark"}})}),[!0]);return a.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},a.createElement(i.Z,{theme:t},e.internal?a.createElement(r.Z,{variant:"outlined",size:"large",component:c.Z,to:(0,s.Z)("docs/"+e.url+"/")},e.txt):a.createElement(r.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(e.url,"_blank")}},e.txt)))}},920:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=(n(7134),n(3079),n(9960)),c=["components"],s={id:"contract2",title:"Programming language",sidebar_label:"Programming language",slug:"/contract/programming-language",hide_title:!0},l=void 0,u={unversionedId:"contract/contract2",id:"contract/contract2",title:"Programming language",description:"Michelson",source:"@site/docs/contract/contract2.md",sourceDirName:"contract",slug:"/contract/programming-language",permalink:"/docs/contract/programming-language",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/contract/contract2.md",tags:[],version:"current",frontMatter:{id:"contract2",title:"Programming language",sidebar_label:"Programming language",slug:"/contract/programming-language",hide_title:!0},sidebar:"contract",previous:{title:"Introduction",permalink:"/docs/contract"},next:{title:"Archetype tutorial",permalink:"/docs/contract/tuto/archetype-tutorial"}},d=[{value:"Michelson",id:"michelson",children:[],level:2},{value:"Register languages",id:"register-languages",children:[],level:2}],g={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"michelson"},"Michelson"),(0,o.kt)("p",null,"Michelson is the default language to write smart contracts on the ",(0,o.kt)(i.Z,{to:"/docs/dapp-tools/tezos",mdxType:"Link"},"Tezos")," blockchain. You can find the language reference ",(0,o.kt)("a",{href:"https://tezos.gitlab.io/michelson-reference/"},"here"),"."),(0,o.kt)("p",null,"Michelson is a ",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Stack_machine#:~:text=In%20computer%20science%2C%20computer%20engineering,buffer%2C%20known%20as%20a%20stack%2C",target:"_blank"},"stack machine")," language. Here is an example of a Michelson contract deployed on the mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"parameter (pair (option %admin (list address))\n                (pair (string %oldhash) (string %newhash)));\nstorage (pair (list %admin address) (string %hash));\ncode { { UNPAIR ;\n         UNPAIR ;\n         DIP { UNPAIR @oldhash @newhash } ;\n         DIP { DIP { DIP { UNPAIR @storedadmin @storedhash } } } } ;\n       SWAP ;\n       { DIP { DIP { DIP { SWAP } } } } ;\n       { DIP { DIP { SWAP } } } ;\n       DIP { SWAP } ;\n       { DIP { DIP { DIP { SWAP } } } } ;\n       { DIP { DIP { SWAP ; DUP ; DIP { SWAP } } } } ;\n       ASSERT_CMPEQ ;\n       SENDER ;\n       SWAP ;\n       { DIP { DIP { PUSH @admin bool False } } } ;\n       ITER { DIP { DUP } ; CMPEQ ; SWAP ; DIP { OR @admin } } ;\n       DROP ;\n       ASSERT ;\n       IF_NONE {} { DIP { DROP } } ;\n       NIL operation ;\n       { DIP { PAIR %admin %hash } ; PAIR %op } }\n")),(0,o.kt)("p",null,"The contract is available at the address ",(0,o.kt)("a",{parentName:"p",href:"https://better-call.dev/mainnet/KT1Gbu1Gm2U47Pmq9VP7ZMy3ZLKecodquAh4/code"},"KT1Gbu1Gm2U47Pmq9VP7ZMy3ZLKecodquAh4")),(0,o.kt)("h2",{id:"register-languages"},"Register languages"),(0,o.kt)("p",null,"A smart contract is a public object. As such it is required to convey confidence in the business process it implements. It is then suggested to use register languages which make the code easier to read, write and ",(0,o.kt)(i.Z,{to:"/docs/dapp-tools/tezos#formal-verification",mdxType:"Link"},"verify"),"."),(0,o.kt)("p",null,"Several register languages are available and listed ",(0,o.kt)("a",{href:"https://tezos.com/developer-portal/#2-write-a-smart-contract"},"here"),". They compile contracts to Michelson."))}m.isMDXComponent=!0}}]);