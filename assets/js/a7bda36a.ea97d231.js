"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[2441],{807:function(e,t,n){n(7294),n(4996)},9975:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),d=(n(7294),n(3905)),o=(n(807),n(7134),n(3079),["components"]),l={id:"dex9",title:"Implementation",sidebar_label:"Implementation",slug:"/dapp-dex/implementation"},i=void 0,s={unversionedId:"dapp-dex/dex9",id:"dapp-dex/dex9",title:"Implementation",description:"Add/Remove token",source:"@site/docs/dapp-dex/dex9.md",sourceDirName:"dapp-dex",slug:"/dapp-dex/implementation",permalink:"/docs/dapp-dex/implementation",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-dex/dex9.md",tags:[],version:"current",frontMatter:{id:"dex9",title:"Implementation",sidebar_label:"Implementation",slug:"/dapp-dex/implementation"}},p=[{value:"Add/Remove token",id:"addremove-token",children:[],level:2},{value:"Exchange",id:"exchange",children:[],level:2},{value:"Add liquidity",id:"add-liquidity",children:[],level:2},{value:"Remove liquidity",id:"remove-liquidity",children:[],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,d.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"addremove-token"},"Add/Remove token"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-archetype"},"entry registertoken (i : string, a : address, n : string, u : string) {\n  called by admin\n  effect {\n    token.addupdate(i, { addr = a; name = n; iconurl = u }); }\n}\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-archetype"},"entry deletetoken (i : string) {\n  called by admin\n  effect { token.remove(i) }\n}\n")),(0,d.kt)("h2",{id:"exchange"},"Exchange"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-archetype"},"function compute_exchanged(aA : nat, qA : nat, qB : nat) : rational {\n  return (qB * gamma * aA / (qA + gamma * aA))\n}\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-archetype",metastring:"{6,19,31}","{6,19,31}":!0},'entry exchange(tA : string, aA: nat, tB : string, aB : nat) {\n  require {\n    r0 otherwise "SRC_EQ_DST" : tA <> tB;\n  }\n  effect {\n    if tA = "XTZ" then begin\n      var qA = token[tB].poolvalue;\n      var qB = token[tB].totalqty;\n      var expectedB = compute_exchanged(aA,qA,qB);\n      if (abs(expectedB - aB) > epsilon) then fail(("INVALID_B_AMOUNT",expectedB));\n      var xtzin : nat = transferred;\n      if aA <> xtzin then fail(("INVALID_A_AMOUNT",xtzin));\n      match entrypoint<(address * address * nat)>("%transfer",token[tB].addr) with\n      | some(transferB) ->\n        transfer 0tz to entry transferB((selfaddress, caller, aB))\n      | none -> fail("INVALID_B_ENTRY")\n      end;\n      token.update(tB, { poolvalue += xtzin; totalqty -= aB });\n    end else if tB = "XTZ" then begin\n      var qA = token[tA].totalqty;\n      var qB = token[tA].poolvalue;\n      var expectedB = compute_exchanged(aA,qA,qB);\n      if (abs(expectedB - aB) > epsilon) then fail(("INVALID_B_AMOUNT",expectedB));\n      match entrypoint<(address * address * nat)>("%transfer",token[tA].addr) with\n      | some(transferA) ->\n        transfer 0tz to entry transferA((caller, selfaddress, aA))\n      | none -> fail("INVALID_A_ENTRY")\n      end;\n      transfer (aB * 1utz) to caller;\n      token.update(tA, { poolvalue -= aB; totalqty += aA });\n    end else begin\n      var qA  = token[tA].totalqty;\n      var qTA = token[tA].poolvalue;\n      var aT  = abs(floor(compute_exchanged(aA,qA,qTA)));\n      var qTB = token[tB].poolvalue;\n      var qB  = token[tB].totalqty;\n      var expectedB = compute_exchanged(aT,qTB,qB);\n      if (abs(expectedB - aB) > epsilon) then fail(("INVALID_B_AMOUNT",expectedB));\n      match entrypoint<(address * address * nat)>("%transfer",token[tA].addr) with\n      | some(transferA) ->\n        transfer 0tz to entry transferA((caller, selfaddress, aA))\n      | none -> fail("INVALID_A_ENTRY")\n      end;\n      match entrypoint<(address * address * nat)>("%transfer",token[tB].addr) with\n      | some(transferA) ->\n        transfer 0tz to entry transferA((selfaddress, caller, aB))\n      | none -> fail("INVALID_B_ENTRY")\n      end;\n      token.update(tA, { poolvalue -= aT; totalqty += aA });\n      token.update(tB, { poolvalue += aT; totalqty -= aB });\n    end\n  }\n}\n')),(0,d.kt)("h2",{id:"add-liquidity"},"Add liquidity"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-archetype"},'entry addLiquidity(tL : string, qL : nat) {\n  match entrypoint<(address * address * nat)>("%transfer",token[tL].addr) with\n   | some(transfer_src) ->\n     transfer 0tz to entry transfer_src((caller, selfaddress, qL))\n   | none -> fail("INVALID_DST_ENTRY")\n  end;\n  /* mint LQT tokens */\n  var xtzin : nat = transferred;\n  var mintedLTQ =\n    if token[tL].poolvalue = 0 then initialminted\n    else abs(floor(token[tL].totallqt * xtzin / token[tL].poolvalue));\n  liquidity.addupdate((tL, caller), { lqt += mintedLTQ });\n  token.update(tL, { poolvalue += xtzin; totalqty += qL; totallqt += mintedLTQ })\n}\n')),(0,d.kt)("h2",{id:"remove-liquidity"},"Remove liquidity"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-archetype"},'entry removeLiquidity(qL : nat, tA : string) {\n  require {\n    r1 otherwise "NOT_ENOUGHT_LQT": qL <= liquidity[(tA, caller)].lqt\n  }\n  effect {\n    var lqtratio = qL / token[tA].totallqt;\n    var xtzout = abs(floor(lqtratio * token[tA].poolvalue));\n    transfer (xtzout * 1utz) to caller;\n    match entrypoint<(address * address * nat)>("%transfer",token[tA].addr) with\n    | some(transfer_src) ->\n      var qty = abs(floor(lqtratio * token[tA].totalqty));\n      transfer 0tz to entry transfer_src((selfaddress, caller, qty));\n      liquidity.addupdate((tA, caller), { lqt -= qL });\n      token.update(tA, { poolvalue -= xtzout; totalqty -= qty; totallqt -= qL })\n    | none -> fail("INVALID_DST_ENTRY")\n    end;\n  }\n}\n')))}u.isMDXComponent=!0}}]);