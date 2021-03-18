(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),d=(n(0),n(187)),r=(n(188),n(189),n(191),{id:"ideabox9",title:"Implementation",sidebar_label:"Implementation",slug:"/dapp-ideabox/implementation"}),o={unversionedId:"dapp-ideabox/ideabox9",id:"dapp-ideabox/ideabox9",isDocsHomePage:!1,title:"Implementation",description:"Register",source:"@site/docs/dapp-ideabox/ideabox9.md",slug:"/dapp-ideabox/implementation",permalink:"/docs/dapp-ideabox/implementation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-ideabox/ideabox9.md",version:"current",sidebar_label:"Implementation",sidebar:"ideabox",previous:{title:"Interface",permalink:"/docs/dapp-ideabox/interface"}},c=[{value:"Register",id:"register",children:[]},{value:"Add idea",id:"add-idea",children:[]},{value:"Vote",id:"vote",children:[]},{value:"Terminate",id:"terminate",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(d.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)("h2",{id:"register"},"Register"),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype"}),"entry register (a_voter : address) {\n  called by chairman\n  require {\n    r0 : state = Activated;\n  }\n  effect { voter.add({ addr = a_voter }) }\n}\n")),Object(d.b)("h2",{id:"add-idea"},"Add idea"),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype"}),"entry add_idea(ititle : bytes, description : bytes) {\n  require {\n    r1 : state = Activated;\n  }\n  effect {\n    idea.add({\n      id = idea.count();\n      title = ititle;\n      desc = description;\n      creation = now;\n      author = caller\n    })\n  }\n}\n")),Object(d.b)("h2",{id:"vote"},"Vote"),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype"}),"entry vote(n : nat, weight : nat) {\n  require {\n    r2 : voter.contains(caller);\n    r3 : voter[caller].remaining >= weight;\n    r4 : state = Activated;\n  }\n  effect {\n    voter[caller].remaining -= weight;\n    idea[n].nbvotes += weight;\n  }\n}\n")),Object(d.b)("h2",{id:"terminate"},"Terminate"),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype"}),"transition terminate () {\n  called by chairman\n  from Activated to Terminated\n  with effect {\n    for i in idea.select(the.nbvotes >= 5).sort(desc(nbvotes)).head(3) do\n        selected.add({i})\n    done\n  }\n}\n")))}b.isMDXComponent=!0},188:function(e,t,n){"use strict";n(0),n(192)}}]);