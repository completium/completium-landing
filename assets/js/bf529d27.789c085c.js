(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[7776],{144:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return k}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r=n(3079),c=(n(7134),n(6742)),d=["components"],p={id:"ideabox6",title:"Contract Origination",sidebar_label:"Contract Origination",slug:"/dapp-ideabox/origination"},l=void 0,s={unversionedId:"dapp-ideabox/ideabox6",id:"dapp-ideabox/ideabox6",isDocsHomePage:!1,title:"Contract Origination",description:"The smart contract is written in Archetype language. Go to the Smart contract section for a detailed presentation.",source:"@site/docs/dapp-ideabox/ideabox6.md",sourceDirName:"dapp-ideabox",slug:"/dapp-ideabox/origination",permalink:"/docs/dapp-ideabox/origination",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-ideabox/ideabox6.md",version:"current",frontMatter:{id:"ideabox6",title:"Contract Origination",sidebar_label:"Contract Origination",slug:"/dapp-ideabox/origination"},sidebar:"dapps",previous:{title:"Technical guide",permalink:"/docs/dapp-ideabox/tg-presentation"},next:{title:"Interactions",permalink:"/docs/dapp-ideabox/interactions"}},m=[],u={toc:m};function k(t){var e=t.components,n=(0,a.Z)(t,d);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The smart contract is written in ",(0,i.kt)("a",{href:"https://archetype-lang.org/"},"Archetype")," language. Go to the ",(0,i.kt)(c.Z,{to:"",mdxType:"Link"},"Smart contract")," section for a detailed presentation."),(0,i.kt)("p",null,"In VSCode, open the ",(0,i.kt)(c.Z,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"terminal")," and enter the following command line to originate (deploy) the smart contract is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli deploy ./contract/ideasbox.arl --named ideabox\n")),(0,i.kt)("p",null,"The ",(0,i.kt)(c.Z,{to:"/docs/cli/contract#deploy--originate",mdxType:"Link"},"originate command")," triggers two operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the contract compilation to Michelson with archetype compiler"),(0,i.kt)("li",{parentName:"ul"},"the Michelson contract origination with Tezos client")),(0,i.kt)("p",null,"The contract may then be referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"ideabox")," in future interactions."),(0,i.kt)("p",null,"If you are using the preset ",(0,i.kt)(c.Z,{to:"/docs/dapp-tools/gitpod",mdxType:"Link"},"Gitpod")," environement, note that ",(0,i.kt)(c.Z,{to:"/docs/cli",mdxType:"Link"},"completium-cli")," is pre-installed with the ",(0,i.kt)(c.Z,{to:"/docs/dapp-tools/faucet#admin-account",mdxType:"Link"},"admin")," account. See this section for more information."),(0,i.kt)("p",null,"The address of the newly originated contract is visible with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"completium-cli show contract ideabox\n")),(0,i.kt)("p",null,"A smart contract address starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"KT1"),". In the situation above, the new contract's address is ",(0,i.kt)("inlineCode",{parentName:"p"},"KT1QNURPMuFJSmTLRttRutb4gfJ6NS4BfsM6"),"."),(0,i.kt)("p",null,"You may got to ",(0,i.kt)(c.Z,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better call dev")," contract explorer to check it:"),(0,i.kt)(r.Z,{url:"https://better-call.dev/",txt:"go to better call dev",mdxType:"DappButton"}),(0,i.kt)("p",null,"The new contract address needs to be set in the DApp's ",(0,i.kt)("inlineCode",{parentName:"p"},"src/settings.js")," file, like for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export const contractAddress = "KT1QNURPMuFJSmTLRttRutb4gfJ6NS4BfsM6"\n')))}k.isMDXComponent=!0}}]);