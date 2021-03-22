(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),i=n(7),a=(n(0),n(196)),l=n(198),c={id:"tuto2",title:"Execution Conditions",sidebar_label:"2. Execution conditions",slug:"/dapp-tools/tutorials/archetype-execcond"},r={unversionedId:"dapp-tools/tutorials/tuto2",id:"dapp-tools/tutorials/tuto2",isDocsHomePage:!1,title:"Execution Conditions",description:"One of the key requirements of a smart contract's entry point is to establish execution conditions:",source:"@site/docs/dapp-tools/tutorials/tuto2.md",slug:"/dapp-tools/tutorials/archetype-execcond",permalink:"/docs/dapp-tools/tutorials/archetype-execcond",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-tools/tutorials/tuto2.md",version:"current",sidebar_label:"2. Execution conditions",sidebar:"tools",previous:{title:"Hello Tezos world",permalink:"/docs/dapp-tools/tutorials/archetype-hello"},next:{title:"Rationals and transfers",permalink:"/docs/dapp-tools/tutorials/archetype-rattrans"}},s=[{value:"Code",id:"code",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Call entry point",id:"call-entry-point",children:[]}],d={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One of the key requirements of a smart contract's entry point is to establish execution conditions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Who can call the contract?"),Object(a.b)("li",{parentName:"ul"},"Under which logical conditions?")),Object(a.b)("p",null,"Archetype provides dedicated syntax to make execution conditions very explicit and non ambiguous."),Object(a.b)("h2",{id:"code"},"Code"),Object(a.b)("p",null,"In the following example, the entry point may only be called by the ",Object(a.b)("inlineCode",{parentName:"p"},"admin")," address; it also requires that the argument value ",Object(a.b)("inlineCode",{parentName:"p"},"v")," be between 10 (included) and 20 (strictly) and be even otherwise; if not even, it must be failed with this following message : ",Object(a.b)("inlineCode",{parentName:"p"},"Expected even value"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-archetype",metastring:"{8,10,11}","{8,10,11}":!0}),'archetype exec_condition\n\nvariable value : nat = 0\n\nconstant admin : address = @tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw\n\nentry main(v : nat) {\n  called by admin\n  require {\n      r1: 10 <= v < 20;\n      r2 otherwise "EXPECTED EVEN VALUE": v%2 = 0\n  }\n  effect {\n     value := v;\n  }\n}\n')),Object(a.b)("p",null,"It is also possible to establish execution conditions with a ",Object(a.b)("inlineCode",{parentName:"p"},"failif")," section.\nExecution conditions have identifiers (here ",Object(a.b)("inlineCode",{parentName:"p"},"r1")," and ",Object(a.b)("inlineCode",{parentName:"p"},"r2"),") used for fail message when no ",Object(a.b)("inlineCode",{parentName:"p"},"otherwise")," is established, and to name the property in contract formal verification."),Object(a.b)("h2",{id:"deploy"},"Deploy"),Object(a.b)("p",null,"The following ",Object(a.b)(l.a,{to:"/docs/dapp-tools/completium-cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"completium-cli deploy 2-exec_condition.arl\n")),Object(a.b)("h2",{id:"call-entry-point"},"Call entry point"),Object(a.b)("p",null,"The following command calls the unique entry point:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"completium call 2-exec-condition --with '14'\n")))}p.isMDXComponent=!0}}]);