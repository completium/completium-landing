"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[8428],{315:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),c=(n(7134),n(9960)),o=["components"],i={id:"tuto8",title:"Call another Contract",sidebar_label:"8. Call a contract",slug:"/contract/tuto/archetype-callcontr",hide_title:!0},p=void 0,d={unversionedId:"contract/tuto/tuto8",id:"contract/tuto/tuto8",title:"Call another Contract",description:"Call a contract",source:"@site/docs/contract/tuto/tuto8.md",sourceDirName:"contract/tuto",slug:"/contract/tuto/archetype-callcontr",permalink:"/docs/contract/tuto/archetype-callcontr",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/contract/tuto/tuto8.md",tags:[],version:"current",frontMatter:{id:"tuto8",title:"Call another Contract",sidebar_label:"8. Call a contract",slug:"/contract/tuto/archetype-callcontr",hide_title:!0},sidebar:"contract",previous:{title:"7. Assets",permalink:"/docs/contract/tuto/archetype-assets"},next:{title:"Test Scenario",permalink:"/docs/contract/test-scenario"}},s=[{value:"Call a contract",id:"call-a-contract",children:[],level:2},{value:"Deploy",id:"deploy",children:[],level:2},{value:"Call entry point",id:"call-entry-point",children:[],level:2}],u={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"call-a-contract"},"Call a contract"),(0,l.kt)("p",null,"Archetype provides a high-level instruction to call another contract."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype",metastring:'title="8-1-contract_called.arl"',title:'"8-1-contract_called.arl"'},"archetype contract_called\n\nvariable n : nat = 42\n\nentry set_n(p : nat) {\n  n := p\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"caller")," contract uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"transfer")," instruction to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_n")," entry point. The address of the called contract is passed as parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype",metastring:'{10} title="8-2-contract_caller.arl"',"{10}":!0,title:'"8-2-contract_caller.arl"'},"archetype contract_caller\n\nvariable r : nat = 0\n\nentry set_r(p : nat) {\n  r := p\n}\n\nentry set_n(addr : address) {\n  transfer 0tz to addr call set_n<nat>(r)\n}\n")),(0,l.kt)("p",null,"A detailed presentation of the ",(0,l.kt)("inlineCode",{parentName:"p"},"transfer")," instruction may be found ",(0,l.kt)("a",{href:"https://archetype-lang.org/docs/reference/instructions/operation#transfer",target:"_blank"},"here"),"."),(0,l.kt)("h2",{id:"deploy"},"Deploy"),(0,l.kt)("p",null,"The following ",(0,l.kt)(c.Z,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," commands deploy the contract on the Tezos network:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"completium-cli deploy 8-1-contract_called.arl\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"completium-cli deploy 8-2-contract_caller.arl\n")),(0,l.kt)("h2",{id:"call-entry-point"},"Call entry point"),(0,l.kt)("p",null,"The following command calls the unique entry point:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'completium-cli call 8-2-contract_caller --entry set_n --arg "{\\"addr\\": \\"`completium-cli show address 8-1-contract_called`\\"}"\n')),(0,l.kt)("p",null,"You can retrieve the address of the called contract with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"completium-cli show contract 8-1-contract_called\n")))}m.isMDXComponent=!0}}]);