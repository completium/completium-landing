(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(224)),b=n(225),l=n(240),c=n(241),o={id:"template5",title:"ICO",sidebar_label:"ICO",slug:"/templates/ico"},d={unversionedId:"templates/template5",id:"templates/template5",isDocsHomePage:!1,title:"ICO",description:"Introduction",source:"@site/docs/templates/template5.md",slug:"/templates/ico",permalink:"/docs/templates/ico",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/templates/template5.md",version:"current",sidebar_label:"ICO",sidebar:"templates",previous:{title:"DEX",permalink:"/docs/templates/dex"},next:{title:"Zero-Coupon bond",permalink:"/docs/templates/zcb"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"API",id:"api",children:[{value:"Storage",id:"storage",children:[]},{value:"Entrypoints",id:"entrypoints",children:[]}]},{value:"Code",id:"code",children:[]}],u={toc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This ICO process is inspired by the 2018 BCDiploma's ICO described in this ",Object(i.b)("a",{href:"https://github.com/VinceBCD/BCDiploma/tree/master/sources/BCDT/contracts/BCDToken"},"document"),"."),Object(i.b)("p",null,"Contributors are whitlisted with their address to participate in the ICO. Two whitelists are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"silver")," whitelist, with a contribution limit of 10 XTZ maximum"),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"gold")," whitelist, without contribution limit")),Object(i.b)("p",null,"The minimum transaction is 0.1 XTZ. 100,000,000 tokens go on sale. The ICO takes place in 3 rounds, with a contribution limit for each, and gives rise to different bonuses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Presale"),", limited to 1800 XTZ, grant 20% more tokens at the time of the contribution"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Round 1"),", limited to the presale cap + 1800 XTZ, grant 10% more tokens during the contribution"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Round 2")," does not give rise to a bonus, limited to the 100 000 000 tokens put up for sale. The XTZ/TOKEN rate is set at 80.")),Object(i.b)("p",null,"If the cap is reached for each of these rounds, the round is automatically completed. Otherwise, the round can be completed manually by the owner of the smartcontract."),Object(i.b)("p",null,"Token ownership is handled by a ",Object(i.b)(b.a,{to:"/docs/templates/fa12",mdxType:"Link"},"FA 1.2 fungible token")," smart contract. Initial tokens are owned by the ICO contract owner."),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"storage"},"Storage"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"owner")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"address")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Address of the contract and intital tokens owner.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"token")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"address")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Address of the FA 1.2 fungible token.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"min_contribution")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"tez")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Minimum contribution")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"max_contribution_silver")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"tez")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maximum contribution for ",Object(i.b)("em",{parentName:"td"},"Silver")," contributors")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"max_token_to_sell")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"nat")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of tokens to sell.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"exchange_rate_tez_tok")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"nat")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of tokens to receive for 1 tez")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"presale_cap")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"tez")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of tezies raised at the end of ",Object(i.b)("em",{parentName:"td"},"presale")," phase")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"round1_cap")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"tez")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of tezies raised at the end of ",Object(i.b)("em",{parentName:"td"},"Round 1")," phase")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"nb_tok_sold")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"nat")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of tokens sold.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"nb_tez_raised")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"tez")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of tezis raised.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"contributor")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"collection")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A contributor is defined by:",Object(i.b)("ul",null,Object(i.b)("li",null,"address"),Object(i.b)("li",null,"type ",Object(i.b)("em",{parentName:"td"},"Silver")," or ",Object(i.b)("em",{parentName:"td"},"Gold")),Object(i.b)("li",null,"Contribution in tezis")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"vstate")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"gstate")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Contract state")))),Object(i.b)("h3",{id:"entrypoints"},"Entrypoints"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"register")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"a"),", ",Object(i.b)("inlineCode",{parentName:"td"},"t")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Registers address ",Object(i.b)("inlineCode",{parentName:"td"},"a")," as contributor in whitelist type ",Object(i.b)("inlineCode",{parentName:"td"},"t"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"startpresale")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"owner")," can start ",Object(i.b)("em",{parentName:"td"},"Presale")," phase.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"startround1")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"owner")," can start ",Object(i.b)("em",{parentName:"td"},"Round 1")," phase.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"startround2")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"owner")," can start ",Object(i.b)("em",{parentName:"td"},"Round 2")," phase.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"finishphase")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"owner")," can finish ICO phase.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"contribute")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A registered contributor tranfers tezies to this entrypoint and receive tokens in exchange.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"collectraised")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"owner")," can collect contract balance.")))),Object(i.b)("h2",{id:"code"},"Code"),Object(i.b)(l.a,{defaultValue:"archetype",values:[{label:"Archetype",value:"archetype"},{label:"Michelson",value:"michelson"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"archetype",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype",metastring:'title="ico.arl"',title:'"ico.arl"'}),'archetype ico(owner : address, token : address)\n\nvariable min_contribution : tez        = 0.1tz\nvariable max_contribution_silver : tez = 10tz\n\nvariable max_token_to_sell     : nat = 100_000_000\nvariable exchange_rate_tez_tok : nat = 80 (* one tez is 80 tokens *)\n\nvariable presales_cap : tez = 1800tz\nvariable round1_cap   : tez = 3600tz\n\nvariable nb_tok_sold   : nat = 0\nvariable nb_tez_raised : tez = 0tz\n\nenum whitelist =\n| Silver\n| Gold\n\nasset contributor identified by id {\n   id           : address;\n   typ          : whitelist;\n   contribution : tez = 0tz;\n}\n\nenum gstate =\n| Init initial\n| PresaleRunning\n| PresaleFinished\n| Round1Running\n| Round1Finished\n| Round2Running\n| Round2Finished\n\nvariable vstate : gstate = Init\n\n\nfunction is_running () : bool {\n  return\n    match vstate with\n    | PresaleRunning | Round1Running | Round2Running -> true\n    | _ -> false\n    end\n}\n\nfunction get_rate () : rational {\n  var coeff : rational =\n    match vstate with\n    | PresaleRunning  -> 1.2\n    | Round1Running   -> 1.1\n    | _               -> 1\n    end;\n  return (coeff * exchange_rate_tez_tok)\n}\n\nfunction get_remaining_tez_to_raise () : tez {\n  return\n    match vstate with\n    | PresaleRunning | PresaleFinished -> presales_cap - nb_tez_raised\n    | Round1Running  | Round1Finished  -> round1_cap - nb_tez_raised\n    | _ -> (((max_token_to_sell - nb_tok_sold) / exchange_rate_tez_tok) * 1tz)\n    end\n}\n\nfunction transition_to_finished () : gstate {\n  return\n    match vstate with\n    | PresaleRunning -> PresaleFinished\n    | Round1Running  -> Round1Finished\n    | Round1Finished -> Round2Running\n    | _              -> Round2Finished\n    end\n}\n\nentry register(a : address, t : whitelist) {\n  called by owner\n  require { r0 : vstate = Init }\n  effect { contributor.add({ id = a; typ = t }) }\n}\n\nentry startpresales() {\n  called by owner\n  require { r1 : vstate = Init }\n  effect { vstate := PresaleRunning }\n}\n\nentry startround1() {\n    called by owner\n    require { r2: vstate = PresaleFinished }\n    effect { vstate := Round1Running }\n}\n\nentry startround2() {\n    called by owner\n    require { r3: vstate = Round1Finished }\n    effect { vstate := Round2Running }\n}\n\nentry finishphase () {\n  called by owner\n  require { r4: is_running() }\n  effect { vstate := transition_to_finished() }\n}\n\nentry contribute () {\n  require {\n     c1 : contributor.contains(caller);\n     c2 : is_running ();\n     c3 : transferred >= min_contribution;\n  }\n  effect {\n    (* cap contribution to max_contrib if necessary *)\n    var contrib = transferred;\n    if    contributor[caller].typ = Silver\n      and contributor[caller].contribution + contrib >= max_contribution_silver\n    then contrib := max_contribution_silver - contributor[caller].contribution;\n    (* cap contribution to round cap if necessary *)\n    var remaining_tez : tez = get_remaining_tez_to_raise ();\n    if remaining_tez <= contrib\n    then (\n      contrib := remaining_tez;\n      vstate := transition_to_finished ()\n    );\n    (* convert contribution to nb of bcd tokens *)\n    var nb_tokens : nat = get_rate() * contrib;\n    (* transfer tokens to contributor *)\n    match entrypoint<(address * address * nat)>("%transfer", token) with\n      | some(transferTok) ->\n        transfer 0tz to entry transferTok((owner, caller, nb_tokens))\n      | none -> fail("INVALID_ENTRY")\n    end;\n    (* update ico stats *)\n    nb_tok_sold   += nb_tokens;\n    nb_tez_raised += contrib;\n    (* update caller\'s contribution *)\n    contributor[caller].contribution += contrib;\n    if contrib <= transferred\n    then transfer (transferred - contrib) to caller\n  }\n}\n\nentry collectraised () {\n    called by owner\n    require { r5: vstate = Round2Finished }\n    effect { transfer balance to owner }\n}\n'))),Object(i.b)(c.a,{value:"michelson",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"")))))}m.isMDXComponent=!0},233:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},238:function(e,t,n){"use strict";var a=n(0),r=n(239);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},239:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},240:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(238),b=n(233),l=n(56),c=n.n(l);const o=37,d=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:s,groupId:u,className:m}=e,{tabGroupChoices:p,setTabGroupChoices:O}=Object(i.a)(),[j,N]=Object(a.useState)(l),h=a.Children.toArray(e.children);if(null!=u){const e=p[u];null!=e&&e!==j&&s.some((t=>t.value===e))&&N(e)}const g=e=>{N(e),null!=u&&O(u,e)},f=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},m)},s.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(b.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case o:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(a.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},241:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);