(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[6751],{2483:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var i=n(2122),o=n(9756),a=(n(7294),n(3905)),c=n(6742),l=["components"],r={id:"tuto2",title:"Execution Conditions",sidebar_label:"2. Execution conditions",slug:"/contract/tuto/archetype-execcond",hide_title:!0},d=void 0,u={unversionedId:"contract/tuto/tuto2",id:"contract/tuto/tuto2",isDocsHomePage:!1,title:"Execution Conditions",description:"Execution conditions",source:"@site/docs/contract/tuto/tuto2.md",sourceDirName:"contract/tuto",slug:"/contract/tuto/archetype-execcond",permalink:"/docs/contract/tuto/archetype-execcond",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/contract/tuto/tuto2.md",version:"current",frontMatter:{id:"tuto2",title:"Execution Conditions",sidebar_label:"2. Execution conditions",slug:"/contract/tuto/archetype-execcond",hide_title:!0},sidebar:"contract",previous:{title:"1. Hello Tezos world",permalink:"/docs/contract/tuto/archetype-hello"},next:{title:"3. Rationals & Transfers",permalink:"/docs/contract/tuto/archetype-rattrans"}},s=[{value:"Execution conditions",id:"execution-conditions",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Call entry point",id:"call-entry-point",children:[]}]},{value:"View contract",id:"view-contract",children:[{value:"Next",id:"next",children:[]}]}],p={toc:s};function m(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"execution-conditions"},"Execution conditions"),(0,a.kt)("p",null,"In this exercise, the entry point may only be called by the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," address; it also requires:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"that the argument value ",(0,a.kt)("inlineCode",{parentName:"li"},"v")," be between 10 (included) and 20 (strictly)"),(0,a.kt)("li",{parentName:"ul"},"be even")),(0,a.kt)("p",null,"If not even, it must fail with this following message : ",(0,a.kt)("inlineCode",{parentName:"p"},"Expected even value"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype",metastring:'{8,10,11} title="2-exec-condition.arl"',"{8,10,11}":!0,title:'"2-exec-condition.arl"'},'archetype exec_condition\n\nvariable value : nat = 0\n\nconstant admin : address = @tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P\n\nentry main(v : nat) {\n  called by admin\n  require {\n      r1: 10 <= v < 20;\n      r2 otherwise "EXPECTED EVEN VALUE": v % 2 = 0\n  }\n  effect {\n     value := v;\n  }\n}\n')),(0,a.kt)("p",null,"It is also possible to establish execution conditions with a ",(0,a.kt)("inlineCode",{parentName:"p"},"failif")," section.\nExecution conditions have identifiers (here ",(0,a.kt)("inlineCode",{parentName:"p"},"r1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"r2"),") used for fail message when no ",(0,a.kt)("inlineCode",{parentName:"p"},"otherwise")," is established, and to name the property in contract formal verification."),(0,a.kt)("p",null,"One of the key requirements of a smart contract's entry point is to establish execution conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Who can call the contract?"),(0,a.kt)("li",{parentName:"ul"},"Under which logical conditions?")),(0,a.kt)("p",null,"Archetype provides dedicated syntax to make execution conditions very explicit and non ambiguous."),(0,a.kt)("h3",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"The following ",(0,a.kt)(c.Z,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"completium-cli deploy 2-exec_condition.arl\n")),(0,a.kt)("h3",{id:"call-entry-point"},"Call entry point"),(0,a.kt)("p",null,"The following command calls the unique entry point with the argument ",(0,a.kt)("inlineCode",{parentName:"p"},"14")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--with")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"completium-cli call 2-exec-condition --entry main --arg '{ \"v\" : 14 }'\n")),(0,a.kt)("h2",{id:"view-contract"},"View contract"),(0,a.kt)("p",null,"The following command generates the URL to view the contract in Better call Dev:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"completium-cli show contract 2-exec-condition\n")),(0,a.kt)("h3",{id:"next"},"Next"),(0,a.kt)("p",null,"Open '3-rat_transfer.arl' and click on \"Next: Rationals & transfers\" below."))}m.isMDXComponent=!0}}]);