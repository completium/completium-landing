(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(224)),b=a(225),l=a(240),c=a(241),o={id:"template8",title:"Idea box",sidebar_label:"Idea box",slug:"/templates/ideabox"},d={unversionedId:"templates/template8",id:"templates/template8",isDocsHomePage:!1,title:"Idea box",description:"Introduction",source:"@site/docs/templates/template8.md",slug:"/templates/ideabox",permalink:"/docs/templates/ideabox",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/templates/template8.md",version:"current",sidebar_label:"Idea box",sidebar:"templates",previous:{title:"Autocallable note",permalink:"/docs/templates/acn"},next:{title:"Competition",permalink:"/docs/templates/competition"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"API",id:"api",children:[{value:"Storage",id:"storage",children:[]},{value:"Entrypoints",id:"entrypoints",children:[]}]},{value:"Code",id:"code",children:[]}],m={toc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This contract is a process to propose ideas and to select the best ones. You can see this contract in action in the ",Object(r.b)(b.a,{to:"/docs/dapp-ideabox/",mdxType:"Link"},"Idea Box")," DApp example."),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"storage"},"Storage"),Object(r.b)("p",null,"Ideas data (title and description) are stored as ",Object(r.b)("inlineCode",{parentName:"p"},"bytes"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"chairman")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"address")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of the box's chairman")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"maxvotes")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"nat")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of votes per voter.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"idea")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"collection")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An idea is defined by:",Object(r.b)("ul",null,Object(r.b)("li",null,"an identifier (key)"),Object(r.b)("li",null,"a title"),Object(r.b)("li",null,"a description"),Object(r.b)("li",null,"a number of votes"),Object(r.b)("li",null,"a creation date"),Object(r.b)("li",null,"the author's address")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"voter")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"collection")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A voter is defined by:",Object(r.b)("ul",null,Object(r.b)("li",null,"an address (key)"),Object(r.b)("li",null,"a number of remaining votes")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"selected")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"collecter")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the collection of selected ideas.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"_state")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"states")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Box state, one of ",Object(r.b)("inlineCode",{parentName:"td"},"Activated"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Terminated"),".")))),Object(r.b)("h3",{id:"entrypoints"},"Entrypoints"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"register")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"a")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called by ",Object(r.b)("inlineCode",{parentName:"td"},"chairman")," to register a new voter at address ",Object(r.b)("inlineCode",{parentName:"td"},"a")," and remaining votes at ",Object(r.b)("inlineCode",{parentName:"td"},"maxvotes"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"add_idea")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ititle"),", ",Object(r.b)("inlineCode",{parentName:"td"},"description")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adds an idea in the box if box not terminated (",Object(r.b)("em",{parentName:"td"},"anyone")," can add an idea).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"vote")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"n"),", ",Object(r.b)("inlineCode",{parentName:"td"},"weight")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called by a voter to increment by ",Object(r.b)("inlineCode",{parentName:"td"},"weight")," the number of votes of idea ",Object(r.b)("inlineCode",{parentName:"td"},"n"),". It fails if box is terminated.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"terminate")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called by ",Object(r.b)("inlineCode",{parentName:"td"},"chairman")," to close the box and select the top 3 best ideas with numbers of votes above ",Object(r.b)("inlineCode",{parentName:"td"},"maxvotes"),".")))),Object(r.b)("h2",{id:"code"},"Code"),Object(r.b)(l.a,{defaultValue:"archetype",values:[{label:"Archetype",value:"archetype"},{label:"Michelson",value:"michelson"},{label:"Specification",value:"specification"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"archetype",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:'title="ideabox.arl"',title:'"ideabox.arl"'}),"archetype ideasbox(chairman : address, maxvotes : nat)\n\nstates =\n| Activated initial\n| Terminated\n\nasset idea {\n  id       : nat;\n  title    : bytes;\n  desc     : bytes;\n  nbvotes  : nat = 0;\n  creation : date;\n  author   : address;\n}\n\nasset voter {\n  addr      : address;\n  remaining : nat = maxvotes;\n}\n\nasset selected {\n  sid : nat;\n}\n\nentry register (a_voter : address) {\n  called by chairman\n  require {\n    r0 : state = Activated;\n  }\n  effect { voter.add({ addr = a_voter }) }\n}\n\nentry add_idea(ititle : bytes, description : bytes) {\n  require {\n    r1 : state = Activated;\n  }\n  effect {\n    idea.add({\n            id = idea.count();\n      title = ititle;\n            desc = description;\n            creation = now;\n            author = caller\n        })\n  }\n}\n\nentry vote(n : nat, weight : nat) {\n  require {\n    r2 : voter.contains(caller);\n    r3 : voter[caller].remaining >= weight;\n    r4 : state = Activated;\n  }\n  effect {\n    voter[caller].remaining -= weight;\n    idea[n].nbvotes += weight;\n  }\n}\n\ntransition terminate () {\n  called by chairman\n  from Activated\n  to Terminated\n  with effect {\n    for i in idea.select(the.nbvotes > maxvotes).sort(desc(nbvotes)).head(3) do\n        selected.add({i})\n    done\n  }\n}\n"))),Object(r.b)(c.a,{value:"michelson",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),""))),Object(r.b)(c.a,{value:"specification",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype"}),"specification entry vote (n : nat, weight : nat) {\n  postcondition p1 {\n    let some v = voter[caller] in\n    let some bv = before.voter[caller] in\n      v.remaining = bv.remaining - weight\n    otherwise true otherwise true\n  }\n}\n\nspecification {\n  i1 : 5 * voter.count() = idea.sum(nbvotes) + voter.sum(remaining)\n}\n")))))}p.isMDXComponent=!0},233:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},238:function(e,t,a){"use strict";var n=a(0),i=a(239);t.a=function(){const e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},239:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)(void 0);t.a=i},240:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(238),b=a(233),l=a(56),c=a.n(l);const o=37,d=39;t.a=function(e){const{lazy:t,block:a,defaultValue:l,values:s,groupId:m,className:p}=e,{tabGroupChoices:u,setTabGroupChoices:j}=Object(r.a)(),[O,N]=Object(n.useState)(l),h=n.Children.toArray(e.children);if(null!=m){const e=u[m];null!=e&&e!==O&&s.some((t=>t.value===e))&&N(e)}const v=e=>{N(e),null!=m&&j(m,e)},g=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},p)},s.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(b.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case o:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},t)))),t?Object(n.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},241:function(e,t,a){"use strict";var n=a(3),i=a(0),r=a.n(i);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}}}]);