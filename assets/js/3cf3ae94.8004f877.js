(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[2371],{3079:function(t,e,a){"use strict";var n=a(7294),o=a(282),l=a(9277),i=a(3457),c=a(6742),u=a(4996);e.Z=function(t){var e=n.useMemo((function(){return(0,l.Z)({palette:{type:"dark"}})}),[!0]);return n.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},n.createElement(i.Z,{theme:e},t.internal?n.createElement(o.Z,{variant:"outlined",size:"large",component:c.Z,to:(0,u.Z)("docs/"+t.url+"/")},t.txt):n.createElement(o.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(t.url,"_blank")}},t.txt)))}},807:function(t,e,a){"use strict";a(7294),a(4996)},7152:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var n=a(2122),o=a(9756),l=(a(7294),a(3905)),i=(a(807),a(7134),a(3079)),c=a(6742),u=["components"],s={id:"tools4",title:"Faucet",sidebar_label:"Faucet",slug:"/dapp-tools/faucet"},r=void 0,p={unversionedId:"dapp-tools/tools4",id:"dapp-tools/tools4",isDocsHomePage:!1,title:"Faucet",description:"A Dapp require an admin account and one (or several) user accounts to be tested. This page explains how to retrieve the admin faucet file, and how to download a faucet account for test.",source:"@site/docs/dapp-tools/tools4.md",sourceDirName:"dapp-tools",slug:"/dapp-tools/faucet",permalink:"/docs/dapp-tools/faucet",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-tools/tools4.md",version:"current",frontMatter:{id:"tools4",title:"Faucet",sidebar_label:"Faucet",slug:"/dapp-tools/faucet"},sidebar:"tools",previous:{title:"Better Call Dev",permalink:"/docs/dapp-tools/bcd"},next:{title:"Gitpod",permalink:"/docs/dapp-tools/gitpod"}},d=[{value:"Admin account",id:"admin-account",children:[]},{value:"Create a test account",id:"create-a-test-account",children:[]}],m={toc:d};function h(t){var e=t.components,a=(0,o.Z)(t,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Dapp require an admin account and one (or several) user accounts to be tested. This page explains how to retrieve the admin faucet file, and how to download a faucet account for test."),(0,l.kt)("h2",{id:"admin-account"},"Admin account"),(0,l.kt)("p",null,"Some Dapps' use cases require to interact with the smart contract as the admin role (declared by the contract). Every Dapp's admin uses the same account."),(0,l.kt)("p",null,"Follow the instructions below to get the admin faucet file:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"click the button below to open the admin faucet file in a new tab"),(0,l.kt)("li",{parentName:"ul"},'save the admin faucet file as "admin.json"')),(0,l.kt)(i.Z,{url:"https://raw.githubusercontent.com/edukera/completium-dapp-utils/master/admin.json",txt:"open admin faucet file",mdxType:"DappButton"}),(0,l.kt)("p",null,"Instructions to import a faucet account in the wallet is available in the section below."),(0,l.kt)("p",null,"Below is a copy of the admin faucet file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pkh": "tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P",\n    "mnemonic": [\n        "bike",\n        "museum",\n        "tourist",\n        "saddle",\n        "caught",\n        "spell",\n        "scrap",\n        "layer",\n        "task",\n        "blossom",\n        "shallow",\n        "express",\n        "emerge",\n        "camp",\n        "carry"\n    ],\n    "email": "qfhbbfev.dpdgypeb@teztnets.xyz",\n    "password": "DnvGIoUo8S",\n    "amount": "181059715372",\n    "activation_code": "043703f8bc62d205a283e6c13ac04d289013dda1"\n}\n')),(0,l.kt)("p",null,'You may also copy-paste the json above in a "admin.json" file.'),(0,l.kt)("p",null,"Follow ",(0,l.kt)("u",null,(0,l.kt)(c.Z,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"this link"))," for instructions to import the admin account in the Thanos wallet."),(0,l.kt)("h2",{id:"create-a-test-account"},"Create a test account"),(0,l.kt)("p",null,"This section describes how to download and import in Completium-cli a test account from the faucet."),(0,l.kt)(i.Z,{url:"https://teztnets.xyz/ithacanet-faucet",txt:"open faucet",mdxType:"DappButton"}),(0,l.kt)("p",null,"Follow the instructions below to donwload a new test account file:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'click the "open faucet" button above to open the faucet web page'),(0,l.kt)("li",{parentName:"ul"},"on the faucet page:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"solve the CAPTCHA"),(0,l.kt)("li",{parentName:"ul"},'click on the "Get Hagzhounet Tz" button'),(0,l.kt)("li",{parentName:"ul"},'click the "Copy to clipboard" button'))),(0,l.kt)("li",{parentName:"ul"},"Create a file ",(0,l.kt)("inlineCode",{parentName:"li"},"faucet.json")," and paste the faucet data in this file"),(0,l.kt)("li",{parentName:"ul"},"Run the following command to use the account with Completium-cli :")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli import faucet faucet.json as <ACCOUNT_ALIAS>\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},"<ACCOUNT_ALIAS>")," is replaced by the logical name of the account (for example 'owner', 'admin', ...)."),(0,l.kt)("p",null,"Instructions to import the faucet file in the temple wallet are available in this ",(0,l.kt)(c.Z,{to:"/docs/dapp-tools/thanos#import-faucet-file",mdxType:"Link"},"section"),"."))}h.isMDXComponent=!0}}]);