(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{208:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var s=t(3),r=t(7),i=(t(0),t(235)),a=(t(237),t(238),t(239),{id:"game9",title:"Implementation",sidebar_label:"Implementation",slug:"/dapp-game/implementation"}),o={unversionedId:"dapp-game/game9",id:"dapp-game/game9",isDocsHomePage:!1,title:"Implementation",description:"Submit",source:"@site/docs/dapp-game/game9.md",slug:"/dapp-game/implementation",permalink:"/docs/dapp-game/implementation",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-game/game9.md",version:"current",sidebar_label:"Implementation"},c=[{value:"Submit",id:"submit",children:[]},{value:"Decide",id:"decide",children:[]}],m={toc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"submit"},"Submit"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-archetype"}),'entry submit (packed_score : bytes, signed_score : signature) {\n  require {\n    c1 : state = InProgress;\n  }\n\n  effect {\n    if check_signature(oracle, signed_score, packed_score) then (\n      match_option unpack<address * nat>(packed_score) with\n      | some(s) ->\n        if (s[0] <> caller) then fail ("bad caller");\n        submission.addupdate(caller, {\n          score = s[1];\n          timestamp = now\n        })\n      | none -> fail("cannot unpack score")\n      end\n    ) else fail("not signed by oracle");\n  }\n}\n')),Object(i.b)("h2",{id:"decide"},"Decide"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-archetype"}),"transition decide () {\n  called by organizer\n  from InProgress\n  to Done\n  with effect {\n    var submissions = submission.sort(desc(score), timestamp);\n      if submissions.count() >= 3\n      then (\n        var first  = submissions.nth(0);\n        var second = submissions.nth(1);\n        var third  = submissions.nth(2);\n        var q1 = 0.5 * prize;\n        var q2 = 0.3 * prize;\n        var q3 = 0.2 * prize;\n        transfer q1 to first;\n        transfer q2 to second;\n        transfer q3 to third;\n        transfer (prize - q1 - q2 - q3) to organizer)\n        else if (submissions.count() >= 2)\n             then (\n               var first  = submissions.nth(0);\n               var second = submissions.nth(1);\n               var q1 = 0.6 * prize;\n               var q2 = 0.4 * prize;\n               transfer q1 to first;\n               transfer q2 to second;\n               transfer (prize - q1 - q2) to organizer)\n             else if (submissions.count() >= 1)\n               then (\n                 var first = submissions.nth(0);\n                 transfer prize to first)\n               else transfer prize to organizer\n  }\n}\n")))}d.isMDXComponent=!0},237:function(e,n,t){"use strict";t(0),t(242)}}]);