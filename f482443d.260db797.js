(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{211:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return d})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(224)),c=n(225),i={id:"tuto4",title:"Dates and durations",sidebar_label:"4. Dates & Durations",slug:"/contract/tuto/archetype-datedur",hide_title:!0},d={unversionedId:"contract/tuto/tuto4",id:"contract/tuto/tuto4",isDocsHomePage:!1,title:"Dates and durations",description:"Dates & durations",source:"@site/docs/contract/tuto/tuto4.md",slug:"/contract/tuto/archetype-datedur",permalink:"/docs/contract/tuto/archetype-datedur",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/contract/tuto/tuto4.md",version:"current",sidebar_label:"4. Dates & Durations",sidebar:"contract",previous:{title:"Rationals and transfers",permalink:"/docs/contract/tuto/archetype-rattrans"},next:{title:"Date arithmetic",permalink:"/docs/contract/tuto/archetype-datearith"}},l=[{value:"Dates &amp; durations",id:"dates--durations",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Call entry point",id:"call-entry-point",children:[]},{value:"Next",id:"next",children:[]}]}],s={toc:l};function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"dates--durations"},"Dates & durations"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"date")," and ",Object(r.b)("inlineCode",{parentName:"p"},"duration")," types are convenient to establish time related business logic."),Object(r.b)("p",null,"The call to the entry point succeeds if the contract was created more than 5 minutes and 10 seconds ago; the contract balance must be transferred to caller:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype",metastring:'{6-11} title="4-time_window.arl"',"{6-11}":!0,title:'"4-time_window.arl"'}),"archetype time_window\n\nvariable creation : date = now\n\nentry payback_after_period () {\n  require {\n      r1: now > creation + 5m10s\n  }\n  effect {\n      transfer balance to caller\n  }\n}\n")),Object(r.b)("p",null,"We note that durations may be added or subtracted to dates, and can be compared."),Object(r.b)("p",null,"There are several ways to initialize dates and durations:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype"}),"var d : duration = 3w8d4h34m18s; (* 3 weeks 8 days 4 hours 34 minutes 18 seconds *)\nvar date0 : date = 2019-01-01;                (* iso 8601 *)\nvar date1 : date = 2019-01-01T01:02:03;       (* iso 8601 *)\nvar date2 : date = 2019-01-01T01:02:03Z;      (* iso 8601 *)\nvar date3 : date = 2019-01-01T00:00:00+01:00; (* iso 8601 *)\nvar date4 : date = 2019-01-01T00:00:00-05:30; (* iso 8601 *)\n")),Object(r.b)("h3",{id:"deploy"},"Deploy"),Object(r.b)("p",null,"The following ",Object(r.b)(c.a,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli deploy 4-time_window.arl --amount 5tz\n")),Object(r.b)("p",null,"Note here that the contract's balance is intialized to 5tz."),Object(r.b)("h3",{id:"call-entry-point"},"Call entry point"),Object(r.b)("p",null,"The following command calls the unique entry point:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli call 4-time_window\n")),Object(r.b)("p",null,"If you try this command before valid timelapse of 5 minutes and 10 seconds, it returns an error displayed below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{})," completium-cli call 4-time_window\n? Confirm call to entrypoint default of contract 4-time_window by 'admin' with 0 \ua729 and argument {\"prim\":\"Unit\"} on edo? Yes\nAccount 'tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw' is calling default of KT1GKryAWodQmVPQV4fMsW9FHBmWNgpEu7fF with 0 \ua729...\n{\n  errors: '...',\n  name: 'TezosOperationError',\n  id: 'proto.008-PtEdo2Zk.michelson_v1.script_rejected',\n  kind: 'temporary',\n  message: 'InvalidCondition: r1'\n}\n")),Object(r.b)("h3",{id:"next"},"Next"),Object(r.b)("p",null,"Open '5-weekday.arl' and click on \"Next: Dates arithmetic\" below."))}u.isMDXComponent=!0}}]);