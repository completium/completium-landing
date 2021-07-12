(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),c=(n(0),n(238)),i=n(241),l=n(239);const r={id:"tuto6",title:"State Machine",sidebar_label:"6. State Machine",slug:"/contract/tuto/archetype-statem",hide_title:!0},o={unversionedId:"contract/tuto/tuto6",id:"contract/tuto/tuto6",isDocsHomePage:!1,title:"State Machine",description:"State machine",source:"@site/docs/contract/tuto/tuto6.md",slug:"/contract/tuto/archetype-statem",permalink:"/docs/contract/tuto/archetype-statem",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/contract/tuto/tuto6.md",version:"current",sidebar_label:"6. State Machine",sidebar:"contract",previous:{title:"Date arithmetic",permalink:"/docs/contract/tuto/archetype-datearith"},next:{title:"Assets",permalink:"/docs/contract/tuto/archetype-assets"}},s=[{value:"State machine",id:"state-machine",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Call entry points",id:"call-entry-points",children:[]},{value:"Next",id:"next",children:[]}]}],p={toc:s};function b({components:e,...t}){return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"state-machine"},"State machine"),Object(c.b)("p",null,"It is possible to design the smart contract as a state machine which is convenient for ease of read."),Object(c.b)("p",null,"In this exercise, the machine has 4 states and 3 transitions as illustrated in the shcema below:"),Object(c.b)(i.a,{img:"tuto_statem.svg",width:"60%",mdxType:"DappFigure"}),Object(c.b)("p",null,"Transitions have conditions:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"goes in InProgress state if balance is greater than 3tz"),Object(c.b)("li",{parentName:"ul"},"complete if internal ",Object(c.b)("inlineCode",{parentName:"li"},"value")," is strictly greater than 1 (requires calls to ",Object(c.b)("inlineCode",{parentName:"li"},"inc_value"),")")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-archetype",metastring:'title="6-state_machine.arl"',title:'"6-state_machine.arl"'},"archetype state_machine\n\nstates =\n| Created initial\n| InProgress\n| Interrupted\n| Completed\n\nvariable value : nat = 0\n\nentry inc_value () {\n  value += 1\n}\n\ntransition init () {\n  from Created to InProgress\n  when { transferred > 3tz }\n  with effect { () /* nothing */}\n}\n\ntransition complete () {\n  from InProgress to Completed\n  when { value > 1 }\n  with effect { transfer balance to caller }\n}\n\ntransition interrupt () {\n  from InProgress to Interrupted\n  with effect { transfer (50% * balance) to caller }\n}\n")),Object(c.b)("p",null,"Each transition is a contract entry point."),Object(c.b)("h3",{id:"deploy"},"Deploy"),Object(c.b)("p",null,"The following ",Object(c.b)(l.a,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"completium-cli deploy 6-state_machine.arl\n")),Object(c.b)("h3",{id:"call-entry-points"},"Call entry points"),Object(c.b)("p",null,"In this example it is necessary to call specific entry points. A contract's entrypoints may be listed with:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"completium-cli show entries 6-state_machine\n")),Object(c.b)("p",null,"The goal here is to set the state machine to ",Object(c.b)("inlineCode",{parentName:"p"},"Completed")," state. Use the following commands to transit the machine:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"completium-cli call 6-state_machine --entry init --amount 5tz\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"completium-cli call 6-state_machine --entry inc_value\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"completium-cli call 6-state_machine --entry inc_value\n")),Object(c.b)("p",null,"At this stage, ",Object(c.b)("inlineCode",{parentName:"p"},"value")," is ",Object(c.b)("inlineCode",{parentName:"p"},"2"),", which allows transiting to ",Object(c.b)("inlineCode",{parentName:"p"},"Completed"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"completium-cli call 6-state_machine --entry complete\n")),Object(c.b)("p",null,"This last call may be replaced by the following command to go to ",Object(c.b)("inlineCode",{parentName:"p"},"Interrupted")," state:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"completium-cli call 6-state_machine --entry interrupt\n")),Object(c.b)("h3",{id:"next"},"Next"),Object(c.b)("p",null,"Open '7-assets.arl' and click on \"Next: Assets\" below."))}b.isMDXComponent=!0}}]);