(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{216:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return c}));var i=t(3),a=t(7),r=(t(0),t(224)),o={id:"template7",title:"Autocallable note",sidebar_label:"Autocallable note",slug:"/templates/acn"},s={unversionedId:"templates/template7",id:"templates/template7",isDocsHomePage:!1,title:"Autocallable note",description:"Introduction",source:"@site/docs/templates/template7.md",slug:"/templates/acn",permalink:"/docs/templates/acn",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/templates/template7.md",version:"current",sidebar_label:"Autocallable note",sidebar:"templates",previous:{title:"Zero-Coupon bond",permalink:"/docs/templates/zcb"},next:{title:"Idea box",permalink:"/docs/templates/ideabox"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"API",id:"api",children:[{value:"Storage",id:"storage",children:[]},{value:"Entrypoints",id:"entrypoints",children:[]}]},{value:"Code",id:"code",children:[]}],l={toc:d};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"storage"},"Storage"),Object(r.b)("h3",{id:"entrypoints"},"Entrypoints"),Object(r.b)("h2",{id:"code"},"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-archetype"}),"archetype autocallable(\n  issuer  : role,\n  owner   : role,\n  oracle  : role,\n  nominal : tez,\n  trade   : date,\n  init    : date,\n  final   : date,\n  gredemption : date,\n  (* UNDERLYINGS *)\n  bac_initial : rational,\n  sg_initial  : rational,\n  ubs_initial : rational,\n  bac_strike  : rational,\n  sg_strike   : rational,\n  ubs_strike  : rational\n)\n\n(* CONTRACT DATA *)\nasset early identified by eobservation {\n  eobservation : date;\n  redemption   : date;\n  trigger      : rational;\n  value        : rational;\n}\n\nasset interest identified by iobservation {\n  iobservation : date;\n  payment     : date;\n  barrier     : rational;\n  rate        : rational;\n}\n\n(* underlyings values *)\nasset fixing identified by fobservation {\n  fobservation : date;\n  bac : rational;  (* Bank of America Corporation *)\n  sg  : rational;  (* Societe Generale *)\n  ubs : rational;  (* Union des Banques Suisses *)\n}\n\n(* EXPECTED PAYMENT COMPUTATION *)\nfunction compute_expected (d : date) : tez {\n  var expected = 0tz;\n  var terminated = false;\n  var redeem_date = final;\n  (* early redemption *)\n  for e in early do\n    if early[e].redemption <= d then begin\n      (* is there early redemption ? *)\n      var ee = early[e].eobservation;\n      if     fixing[ee].bac >= early[e].trigger * bac_initial\n         and fixing[ee].sg  >= early[e].trigger * sg_initial\n         and fixing[ee].ubs >= early[e].trigger * ubs_initial\n      then begin\n         expected += early[e].value * nominal;\n         redeem_date := early[e].eobservation;\n         terminated := true\n      end\n    end\n  done;\n  (* redemption *)\n  if not terminated and gredemption <= d then\n    if     fixing[gredemption].bac >= bac_strike\n       and fixing[gredemption].sg  >= sg_strike\n       and fixing[gredemption].ubs >= ubs_strike\n    then\n       expected += nominal\n    else begin\n       var bac_trigger = fixing[gredemption].bac / bac_strike;\n       var sg_trigger  = fixing[gredemption].sg  / sg_strike;\n       var ubs_trigger = fixing[gredemption].ubs / ubs_strike;\n       var worst = min ((min (bac_trigger, sg_trigger)), ubs_trigger);\n       expected += worst * nominal\n    end;\n  (* expected interests *)\n  var exp_interests = 0tz;\n  for i in interest do\n    if interest[i].iobservation <= redeem_date and interest[i].payment <= d\n    then begin\n      var ii = interest[i].iobservation;\n      if     fixing[ii].bac >= interest[i].barrier * bac_initial\n         and fixing[ii].sg  >= interest[i].barrier * sg_initial\n         and fixing[ii].ubs >= interest[i].barrier * ubs_initial\n      then exp_interests := interest[i].rate * nominal\n    end\n  done;\n  expected += exp_interests;\n  return expected\n}\n\n(* PAYMENT action *)\nvariable actual_payment : tez = 0tz\n\nentry pay_note () {\n   called by issuer\n   effect {\n      actual_payment += transferred\n   }\n}\n\nentry add_fixing (\n  ffobservation : date,\n  fbac : rational,\n  fsg : rational,\n  fubs : rational) {\n  fixing.add({ffobservation; fbac; fsg; fubs})\n}\n\n(* STATE MACHINE *)\nstates =\n | Created initial (* doc initial state. *)\n | Canceled        (* owner or issuer has canceled the transaction. *)\n | Confirmed       (* owner has confirmed. *)\n | Defaulted\n | Terminated\n\n(* Used by owner to confirm transaction.\n   It transfers the price of contract (nominal) *)\ntransition confirm () {\n  called by owner\n  from Created\n  to Confirmed when { transferred = nominal }\n}\n\ntransition cancel () {\n  called by owner or issuer\n  from Created\n  to Canceled\n}\n\ntransition check () {\n  called by owner\n  from Confirmed\n  to Defaulted when { actual_payment < compute_expected(now) }\n}\n\ntransition terminate () {\n  called by issuer\n  from Confirmed\n  to Terminated when { actual_payment >= compute_expected(now) }\n}\n")))}c.isMDXComponent=!0}}]);