"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[5652],{3263:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var o=n(7462),l=n(3366),a=(n(7294),n(3905)),i=n(9960),r=["components"],c={id:"tuto1",title:"Hello Tezos world",sidebar_label:"1. Hello Tezos world",slug:"/contract/tuto/archetype-hello",hide_title:!0},d=void 0,s={unversionedId:"contract/tuto/tuto1",id:"contract/tuto/tuto1",title:"Hello Tezos world",description:"Welcome!",source:"@site/docs/contract/tuto/tuto1.md",sourceDirName:"contract/tuto",slug:"/contract/tuto/archetype-hello",permalink:"/docs/contract/tuto/archetype-hello",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/contract/tuto/tuto1.md",tags:[],version:"current",frontMatter:{id:"tuto1",title:"Hello Tezos world",sidebar_label:"1. Hello Tezos world",slug:"/contract/tuto/archetype-hello",hide_title:!0},sidebar:"contract",previous:{title:"Programming language",permalink:"/docs/contract/programming-language"},next:{title:"2. Execution conditions",permalink:"/docs/contract/tuto/archetype-execcond"}},p=[{value:"Welcome!",id:"welcome",children:[{value:"Deploy",id:"deploy",children:[],level:3},{value:"Call entry point",id:"call-entry-point",children:[],level:3},{value:"View contract",id:"view-contract",children:[],level:3},{value:"Next",id:"next",children:[],level:3}],level:2}],u={toc:p};function m(t){var e=t.components,n=(0,l.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"welcome"},"Welcome!"),(0,a.kt)("p",null,"In this first exercise, the storage is a single string value, initialised to ",(0,a.kt)("inlineCode",{parentName:"p"},'""'),"; the unique entry point is called to set the value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype",metastring:'{6} title="1-hello.arl"',"{6}":!0,title:'"1-hello.arl"'},'archetype hello\n\nvariable value : string = ""\n\nentry main () {\n  value := "Hello Tezos world!"\n}\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Do not forget to save the file with Ctrl+s (or Cmd+s)"))),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},":=")," operator to assign value to storage variable."),(0,a.kt)("h3",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"First, check whether the test account has enough balance to run the tutorial; entrer this command in the ",(0,a.kt)(i.Z,{to:"/docs/dapp-tools/gitpod#user-interface",mdxType:"Link"},"Terminal"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"completium-cli show account\n")),(0,a.kt)("p",null,"It displays the balance of the account named 'admin'."),(0,a.kt)("p",null,"If this balance is below 10 \ua729, then follow these ",(0,a.kt)(i.Z,{to:"/docs/dapp-tools/gitpod#check-admin-account",mdxType:"Link"},"instructions")," to import a new account (or transfer 100 \ua729 to the admin address on testnet)."),(0,a.kt)("p",null,"The following ",(0,a.kt)(i.Z,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"completium-cli deploy 1-hello.arl\n")),(0,a.kt)("p",null,"This command must be run in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorial")," directory, so enter this command first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd tutorial\n")),(0,a.kt)("h3",{id:"call-entry-point"},"Call entry point"),(0,a.kt)("p",null,"The following command calls the unique entry point:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"completium-cli call 1-hello --entry main\n")),(0,a.kt)("h3",{id:"view-contract"},"View contract"),(0,a.kt)("p",null,"The following command generates the URL to view the contract in Better call Dev:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"completium-cli show contract 1-hello\n")),(0,a.kt)("h3",{id:"next"},"Next"),(0,a.kt)("p",null,"Open '2-exec-condition.arl' and click on \"Next: Executions conditions\" below."))}m.isMDXComponent=!0}}]);