(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{86:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return p})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return b}));var o=n(3),a=n(7),i=(n(0),n(187)),c=n(189),r=(n(188),n(190)),p={id:"iot6",title:"Contract Origination",sidebar_label:"Contract origination",slug:"/dapp-iot/origination"},s={unversionedId:"dapp-iot/iot6",id:"dapp-iot/iot6",isDocsHomePage:!1,title:"Contract Origination",description:"The smart contract is written in Archetype language. Go to the Smart contract section for a detailed presentation.",source:"@site/docs/dapp-iot/iot6.md",slug:"/dapp-iot/origination",permalink:"/completium-landing/docs/dapp-iot/origination",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-iot/iot6.md",version:"current",sidebar_label:"Contract origination",sidebar:"iot",previous:{title:"Technical guide presentation",permalink:"/completium-landing/docs/dapp-iot/tg-presentation"},next:{title:"Contract Interactions",permalink:"/completium-landing/docs/dapp-iot/interactions"}},l=[],d={toc:l};function b(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The smart contract is written in ",Object(i.b)(r.a,{to:"/docs/dapp-tools/archetype",mdxType:"Link"},"Archetype")," language. Go to the ",Object(i.b)(r.a,{to:"",mdxType:"Link"},"Smart contract")," section for a detailed presentation."),Object(i.b)("p",null,"In VSCode, open the ",Object(i.b)(r.a,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"terminal")," and enter the following command line to originate (deploy) the smart contract is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"completium-cli deploy ./contract/switch.arl --as admin --named iot\n")),Object(i.b)("p",null,"The ",Object(i.b)(r.a,{to:"/docs/dapp-tools/completium-cli#deploy",mdxType:"Link"},"originate command")," triggers two operations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the contract compilation to Michelson with archetype compiler"),Object(i.b)("li",{parentName:"ul"},"the Michelson contract origination with Tezos client")),Object(i.b)("p",null,"The contract may then be referred to as ",Object(i.b)("inlineCode",{parentName:"p"},"iot")," in future interactions."),Object(i.b)("p",null,"If you are using the preset ",Object(i.b)(r.a,{to:"/docs/dapp-tools/gitpod",mdxType:"Link"},"Gitpod")," environement, note that ",Object(i.b)(r.a,{to:"/docs/dapp-tools/completium-cli",mdxType:"Link"},"completium-cli")," is pre-installed with the ",Object(i.b)(r.a,{to:"/docs/dapp-tools/accounts#admin-account",mdxType:"Link"},"admin")," account. See this section for more information."),Object(i.b)("p",null,"The address of the newly originated contract is visible with this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"completium-cli show contract iot\n")),Object(i.b)("p",null,"A smart contract address starts with ",Object(i.b)("inlineCode",{parentName:"p"},"KT1"),". In the situation above, the new contract's address is ",Object(i.b)("inlineCode",{parentName:"p"},"KT19ZQUnVrDT5xnfvPqYhn1DeM489875oWGU"),"."),Object(i.b)("p",null,"You may got to ",Object(i.b)(r.a,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better call dev")," contract explorer to check it:"),Object(i.b)(c.a,{url:"https://better-call.dev/KT19ZQUnVrDT5xnfvPqYhn1DeM489875oWGU/operations",txt:"go to better call dev",mdxType:"DappButton"}),Object(i.b)("p",null,"The new contract address needs to be set in the DApp's ",Object(i.b)("inlineCode",{parentName:"p"},"src/settings.js")," file, like for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'/////////////////////////////////////////////////////////////////////////////\n// FIX ME\n// set new contract address\n/////////////////////////////////////////////////////////////////////////////\nexport const contractAddress = "KT19ZQUnVrDT5xnfvPqYhn1DeM489875oWGU"\n')))}b.isMDXComponent=!0}}]);