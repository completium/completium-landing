(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),a=(n(0),n(238)),i=n(242),c=(n(241),n(239));const r={id:"ideabox6",title:"Contract Origination",sidebar_label:"Contract Origination",slug:"/dapp-ideabox/origination"},d={unversionedId:"dapp-ideabox/ideabox6",id:"dapp-ideabox/ideabox6",isDocsHomePage:!1,title:"Contract Origination",description:"The smart contract is written in Archetype language. Go to the Smart contract section for a detailed presentation.",source:"@site/docs/dapp-ideabox/ideabox6.md",slug:"/dapp-ideabox/origination",permalink:"/docs/dapp-ideabox/origination",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-ideabox/ideabox6.md",version:"current",sidebar_label:"Contract Origination",sidebar:"dapps",previous:{title:"Technical guide",permalink:"/docs/dapp-ideabox/tg-presentation"},next:{title:"Interactions",permalink:"/docs/dapp-ideabox/interactions"}},p=[],s={toc:p};function l({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The smart contract is written in ",Object(a.b)("a",{href:"https://archetype-lang.org/"},"Archetype")," language. Go to the ",Object(a.b)(c.a,{to:"",mdxType:"Link"},"Smart contract")," section for a detailed presentation."),Object(a.b)("p",null,"In VSCode, open the ",Object(a.b)(c.a,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"terminal")," and enter the following command line to originate (deploy) the smart contract is:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"completium-cli deploy ./contract/ideasbox.arl --named ideabox\n")),Object(a.b)("p",null,"The ",Object(a.b)(c.a,{to:"/docs/cli/contract#deploy--originate",mdxType:"Link"},"originate command")," triggers two operations:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the contract compilation to Michelson with archetype compiler"),Object(a.b)("li",{parentName:"ul"},"the Michelson contract origination with Tezos client")),Object(a.b)("p",null,"The contract may then be referred to as ",Object(a.b)("inlineCode",{parentName:"p"},"ideabox")," in future interactions."),Object(a.b)("p",null,"If you are using the preset ",Object(a.b)(c.a,{to:"/docs/dapp-tools/gitpod",mdxType:"Link"},"Gitpod")," environement, note that ",Object(a.b)(c.a,{to:"/docs/cli",mdxType:"Link"},"completium-cli")," is pre-installed with the ",Object(a.b)(c.a,{to:"/docs/dapp-tools/faucet#admin-account",mdxType:"Link"},"admin")," account. See this section for more information."),Object(a.b)("p",null,"The address of the newly originated contract is visible with this command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"completium-cli show contract ideabox\n")),Object(a.b)("p",null,"A smart contract address starts with ",Object(a.b)("inlineCode",{parentName:"p"},"KT1"),". In the situation above, the new contract's address is ",Object(a.b)("inlineCode",{parentName:"p"},"KT1QNURPMuFJSmTLRttRutb4gfJ6NS4BfsM6"),"."),Object(a.b)("p",null,"You may got to ",Object(a.b)(c.a,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better call dev")," contract explorer to check it:"),Object(a.b)(i.a,{url:"https://better-call.dev/",txt:"go to better call dev",mdxType:"DappButton"}),Object(a.b)("p",null,"The new contract address needs to be set in the DApp's ",Object(a.b)("inlineCode",{parentName:"p"},"src/settings.js")," file, like for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'export const contractAddress = "KT1QNURPMuFJSmTLRttRutb4gfJ6NS4BfsM6"\n')))}l.isMDXComponent=!0}}]);