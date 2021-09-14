(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[5263],{1173:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return h}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l=n(6742),o=n(7134),p=n(3079),s=["components"],d={id:"miles7",title:"Contract setup",sidebar_label:"Contract setup",slug:"/dapp-miles/miles-tg-contract"},c=void 0,m={unversionedId:"dapp-miles/miles7",id:"dapp-miles/miles7",isDocsHomePage:!1,title:"Contract setup",description:"The smart contract is at this location:",source:"@site/docs/dapp-miles/miles7.md",sourceDirName:"dapp-miles",slug:"/dapp-miles/miles-tg-contract",permalink:"/docs/dapp-miles/miles-tg-contract",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-miles/miles7.md",version:"current",frontMatter:{id:"miles7",title:"Contract setup",sidebar_label:"Contract setup",slug:"/dapp-miles/miles-tg-contract"},sidebar:"dapps",previous:{title:"Presentation",permalink:"/docs/dapp-miles/miles-tg-overview"},next:{title:"Interactions",permalink:"/docs/dapp-miles/miles-tg-interactions"}},u=[{value:"Origination",id:"origination",children:[]},{value:"Add miles",id:"add-miles",children:[]},{value:"Skip this step?",id:"skip-this-step",children:[]}],k={toc:u};function h(t){var e=t.components,n=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The smart contract is at this location:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"~/completium-dapp-miles/contract/miles_with_expiration.arl")),(0,r.kt)("p",null,"The contract is written in ",(0,r.kt)("a",{href:"https://archetype-lang.org/"},"Archetype")," language. Go to the Smart contract section for a detailed presentation."),(0,r.kt)("p",null,"The setup consists in deploying the contract and adding mile to the user account."),(0,r.kt)("h2",{id:"origination"},"Origination"),(0,r.kt)("p",null,"Open the ",(0,r.kt)(l.Z,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"terminal")," and enter the following command line to originate (deploy) the smart contract is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli deploy ./contract/miles_with_expiration.arl --named miles\n")),(0,r.kt)("p",null,"The ",(0,r.kt)(l.Z,{to:"/docs/cli/contract#deploy--originate",mdxType:"Link"},"originate command")," triggers two operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the contract compilation to Michelson with archetype compiler"),(0,r.kt)("li",{parentName:"ul"},"the Michelson contract origination with Tezos client")),(0,r.kt)("p",null,"The contract may then be referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"miles")," in future interactions."),(0,r.kt)("p",null,"If you are using the preset ",(0,r.kt)(l.Z,{to:"/docs/dapp-tools/gitpod",mdxType:"Link"},"Gitpod")," environement, note that ",(0,r.kt)(l.Z,{to:"/docs/cli",mdxType:"Link"},"completium-cli")," is pre-installed with the ",(0,r.kt)(l.Z,{to:"/docs/dapp-tools/faucet#admin-account",mdxType:"Link"},"admin")," account. See this section for more information."),(0,r.kt)("p",null,"The address of the newly originated contract is visible in the command output, as illustrated below:"),(0,r.kt)(o.Z,{img:"miles-newcontract.png",mdxType:"DappFigure"}),(0,r.kt)("p",null,"A smart contract address starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"KT1"),". In the situation above, the new contract's address is ",(0,r.kt)("inlineCode",{parentName:"p"},"KT19TYkVxnUb1m9DoWbSASqY6XQdVLQFCK8F"),"."),(0,r.kt)("p",null,"You may got to ",(0,r.kt)(l.Z,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better call dev")," contract explorer to check it:"),(0,r.kt)(p.Z,{url:"https://better-call.dev/",txt:"go to better call dev",mdxType:"DappButton"}),(0,r.kt)("p",null,"The new contract address needs to be set in the DApp's ",(0,r.kt)("inlineCode",{parentName:"p"},"src/settings.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/////////////////////////////////////////////////////////////////////////////\n// FIX ME\n// set new contract address\n/////////////////////////////////////////////////////////////////////////////\nexport const  contractAddress = "KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86"\n')),(0,r.kt)("h2",{id:"add-miles"},"Add miles"),(0,r.kt)("p",null,"In order to provide miles to a user, the amdin must call the 'add' entry point of the contract."),(0,r.kt)("p",null,"If you don't have a user account, follow these ",(0,r.kt)(l.Z,{to:"/docs/dapp-tools/faucet#create-test-account",mdxType:"Link"},"instructions")," to get one."),(0,r.kt)("p",null,"The entry point signature is presented below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"entry add (ow                 : address,\n           newmile_id         : string,\n           newmile_amount     : int,\n           newmile_expiration : date) {\n   called by admin\n   effect {\n     ...\n   }\n}\n")),(0,r.kt)("p",null,"Parameters are presented below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ow"),(0,r.kt)("td",{parentName:"tr",align:"center"},"USER_ADDRESS"),(0,r.kt)("td",{parentName:"tr",align:"right"},"address of the miles' owner, for example '@tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newmile_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},'USER_ADDRESS + "_0"'),(0,r.kt)("td",{parentName:"tr",align:"right"},"a unique identifier for the created miles, for example 'tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw_0'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newmile_amount"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"right"},"number of miles to create")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newmile_expiration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TOMORROW"),(0,r.kt)("td",{parentName:"tr",align:"right"},"date beyond which miles are expired, for example '2021-06-28'")))),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"USER_ADDRESS is replaced by the DApp user account to receive the miles"),(0,r.kt)("li",{parentName:"ul"},"TOMORROW is replaced by a date in the future, for example tomorrow")),(0,r.kt)("p",null,"In the ",(0,r.kt)(l.Z,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"terminal")," enter the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli call miles --entry add\n        --with '(<USER_ADDRESS>, \"mileid\", 20, 2021-06-28)'\n")),(0,r.kt)("h2",{id:"skip-this-step"},"Skip this step?"),(0,r.kt)("p",null,"It is possible to skip this phase and use the contract already deployed for the demo, and available at the following address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86\n")),(0,r.kt)(p.Z,{url:"https://better-call.dev/delphinet/KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86/operations",txt:"open in better call dev",mdxType:"DappButton"}),(0,r.kt)("p",null,"Go to the ",(0,r.kt)(l.Z,{to:"/docs/dapp-miles/create-miles#miles-creation-transaction",mdxType:"Link"},"use case")," section to know how to add miles for your user account."))}h.isMDXComponent=!0}}]);