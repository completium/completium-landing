(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(196)),l=n(199),c=n(198),r={id:"tuto6",title:"State Machine",sidebar_label:"6. State Machine",slug:"/dapp-tools/tutorials/archetype-statem"},s={unversionedId:"dapp-tools/tutorials/tuto6",id:"dapp-tools/tutorials/tuto6",isDocsHomePage:!1,title:"State Machine",description:"It is possible to design the smart contract as a state machine which is convenient for ease of read.",source:"@site/docs/dapp-tools/tutorials/tuto6.md",slug:"/dapp-tools/tutorials/archetype-statem",permalink:"/docs/dapp-tools/tutorials/archetype-statem",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-tools/tutorials/tuto6.md",version:"current",sidebar_label:"6. State Machine",sidebar:"tools",previous:{title:"Date arithmetic",permalink:"/docs/dapp-tools/tutorials/archetype-datearith"},next:{title:"Assets",permalink:"/docs/dapp-tools/tutorials/archetype-assets"}},p=[{value:"Code",id:"code",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Call entry points",id:"call-entry-points",children:[]}],b={toc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is possible to design the smart contract as a state machine which is convenient for ease of read."),Object(o.b)("h2",{id:"code"},"Code"),Object(o.b)("p",null,"In this example, the machine has 4 states and 3 transitions as illustrated in the shcema below:"),Object(o.b)(l.a,{img:"tuto_statem.svg",width:"60%",mdxType:"DappFigure"}),Object(o.b)("p",null,"Transitions have conditions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"goes in InProgress state if balance is greater than 3tz"),Object(o.b)("li",{parentName:"ul"},"complete if internal ",Object(o.b)("inlineCode",{parentName:"li"},"value")," is strictly greater than 1 (requires calls to ",Object(o.b)("inlineCode",{parentName:"li"},"inc_value"),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype"}),"archetype state_machine\n\nstates =\n| Created initial\n| InProgress\n| Interrupted\n| Completed\n\nvariable value : nat = 0\n\nentry inc_value () {\n  value += 1\n}\n\ntransition init () {\n  from Created to InProgress\n  when { transferred > 3tz }\n  with effect { () /* nothing */}\n}\n\ntransition complete () {\n  from InProgress to Completed\n  when { value > 1 }\n  with effect { transfer balance to caller }\n}\n\ntransition interrupt () {\n  from InProgress to Interrupted\n  with effect { transfer (50% * balance) to caller }\n}\n")),Object(o.b)("p",null,"Each transition is a contract entry point."),Object(o.b)("h2",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"The following ",Object(o.b)(c.a,{to:"/docs/dapp-tools/completium-cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli deploy 6-state_machine.arl\n")),Object(o.b)("h2",{id:"call-entry-points"},"Call entry points"),Object(o.b)("p",null,"In this example it is necessary to call specific entry points. A contract's entrypoints may be listed with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli show entries of 6-state_machine.arl\n")),Object(o.b)("p",null,"The goal here is to set the state machine to ",Object(o.b)("inlineCode",{parentName:"p"},"Completed")," state. Use the following commands to transit the machine:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli call 6-state_machine --entry init --amount 5tz\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli call 6-state_machine --entry inc_value\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli call 6-state_machine --entry inc_value\n")),Object(o.b)("p",null,"At this stage, ",Object(o.b)("inlineCode",{parentName:"p"},"value")," is ",Object(o.b)("inlineCode",{parentName:"p"},"2"),", which allows transiting to ",Object(o.b)("inlineCode",{parentName:"p"},"Completed"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli call 6-state_machine --entry complete\n")),Object(o.b)("p",null,"This last call may be replaced by the following command to go to ",Object(o.b)("inlineCode",{parentName:"p"},"Interrupted")," state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli call 6-state_machine --entry interrupt\n")))}d.isMDXComponent=!0}}]);