(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return l})),n.d(e,"toc",(function(){return i})),n.d(e,"default",(function(){return p}));var a=n(3),r=(n(0),n(238)),o=n(239);const c={id:"tuto3",title:"Rationals and transfers",sidebar_label:"3. Rationals & Transfers",slug:"/contract/tuto/archetype-rattrans",hide_title:!0},l={unversionedId:"contract/tuto/tuto3",id:"contract/tuto/tuto3",isDocsHomePage:!1,title:"Rationals and transfers",description:"Rationals & transfers",source:"@site/docs/contract/tuto/tuto3.md",slug:"/contract/tuto/archetype-rattrans",permalink:"/docs/contract/tuto/archetype-rattrans",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/contract/tuto/tuto3.md",version:"current",sidebar_label:"3. Rationals & Transfers",sidebar:"contract",previous:{title:"Execution Conditions",permalink:"/docs/contract/tuto/archetype-execcond"},next:{title:"Dates and durations",permalink:"/docs/contract/tuto/archetype-datedur"}},i=[{value:"Rationals &amp; transfers",id:"rationals--transfers",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Call entry point",id:"call-entry-point",children:[]},{value:"View contract",id:"view-contract",children:[]},{value:"Next",id:"next",children:[]}]}],s={toc:i};function p({components:t,...e}){return Object(r.b)("wrapper",Object(a.a)({},s,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"rationals--transfers"},"Rationals & transfers"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"rational")," type is very convenient to implement business formulas."),Object(r.b)("p",null,"In this exercise, the ",Object(r.b)("inlineCode",{parentName:"p"},"payback")," entrypoint transfers back to the caller 70% of the transferred amount:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-archetype",metastring:'{4} title="3-rat_transfer.arl"',"{4}":!0,title:'"3-rat_transfer.arl"'},"archetype rat_transfer\n\nentry payback () {\n  transfer (70% * transferred) to caller\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"caller")," refers to the account address that is calling the entry point, and ",Object(r.b)("inlineCode",{parentName:"p"},"transferred")," refers to the amount of tez sent to call the entry point."),Object(r.b)("p",null,"There are many ways to specify a rational value:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-archetype"},"var f : rational = 1.1;\nvar g : rational = -1.1;\nvar r : rational = 2 / 6;\nvar t : rational = -2 / 6;\nvar u : rational = 80%;\nvar v : rational = 4.2%;\n")),Object(r.b)("h3",{id:"deploy"},"Deploy"),Object(r.b)("p",null,"The following ",Object(r.b)(o.a,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"completium-cli deploy 3-rat_transfer.arl\n")),Object(r.b)("h3",{id:"call-entry-point"},"Call entry point"),Object(r.b)("p",null,"The following command calls the unique entry point and sends ",Object(r.b)("em",{parentName:"p"},"10tz")," to the contract with the ",Object(r.b)("inlineCode",{parentName:"p"},"--amount")," option:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"completium-cli call 3-rat_transfer --amount 10tz\n")),Object(r.b)("h3",{id:"view-contract"},"View contract"),Object(r.b)("p",null,"The following command generates the URL to view the contract in Better call Dev:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"completium-cli show contract 3-rat_transfer\n")),Object(r.b)("h3",{id:"next"},"Next"),Object(r.b)("p",null,"Open '4-time_window.arl' and click on \"Next: Dates & Durations\" below."))}p.isMDXComponent=!0}}]);