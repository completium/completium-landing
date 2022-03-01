"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[6810],{3079:function(e,n,t){var a=t(7294),o=t(282),r=t(8500),i=t(3457),c=t(9960),d=t(4996);n.Z=function(e){var n=a.useMemo((function(){return(0,r.Z)({palette:{type:"dark"}})}),[!0]);return a.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},a.createElement(i.Z,{theme:n},e.internal?a.createElement(o.Z,{variant:"outlined",size:"large",component:c.Z,to:(0,d.Z)("docs/"+e.url+"/")},e.txt):a.createElement(o.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(e.url,"_blank")}},e.txt)))}},807:function(e,n,t){t(7294),t(4996)},7481:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=(t(807),t(7134),t(3079),["components"]),c={id:"dex7",title:"Interactions",sidebar_label:"Interactions",slug:"/dapp-dex/interactions"},d=void 0,l={unversionedId:"dapp-dex/dex7",id:"dapp-dex/dex7",title:"Interactions",description:"Exchange",source:"@site/docs/dapp-dex/dex7.md",sourceDirName:"dapp-dex",slug:"/dapp-dex/interactions",permalink:"/docs/dapp-dex/interactions",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-dex/dex7.md",tags:[],version:"current",frontMatter:{id:"dex7",title:"Interactions",sidebar_label:"Interactions",slug:"/dapp-dex/interactions"},sidebar:"dapps",previous:{title:"Contract Origination",permalink:"/docs/dapp-dex/origination"},next:{title:"Introduction",permalink:"/docs/dapp-zcb/"}},s=[{value:"Exchange",id:"exchange",children:[{value:"from city coin",id:"from-city-coin",children:[],level:3},{value:"from XTZ",id:"from-xtz",children:[],level:3}],level:2},{value:"Provide liquidity",id:"provide-liquidity",children:[],level:2},{value:"Redeem liquidity",id:"redeem-liquidity",children:[],level:2}],p={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"exchange"},"Exchange"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Dex.js")," line 230"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (lcoin === 'XTZ') {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // call 'approve' & tranfer entry points\n    ///////////////////////////////////////////////////////////////////////////\n  } else {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // call 'exchange' entry point\n    ///////////////////////////////////////////////////////////////////////////\n  }\n}\n")),(0,r.kt)("h3",{id:"from-city-coin"},"from city coin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const dex = await tezos.wallet.at(dexContract);\nconst op = await dex.methods.exchange(\n  dexState.left.coin,\n  dexState.left.amount * 1000000,\n  dexState.right.coin,\n  dexState.right.amount).send({ amount: dexState.left.amount });\nprops.openSnack();\nresetDexCoins();\nop.receipt().then(() => {\n  props.closeSnack();\n  loadDexTokens();\n  forceRetrieveTokenBalance(rcoin);\n  Tezos.tz\n  .getBalance(account)\n  .then((balance) => { setBalance(balance / 1000000) })\n  .catch((error) => console.log(JSON.stringify(error)));\n})\n")),(0,r.kt)("h3",{id:"from-xtz"},"from XTZ"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fa12 = await tezos.wallet.at(dexState.token[lcoin].addr);\nconst fa12params = fa12.methods.approve(dexContract,dexState.left.amount).toTransferParams();\nfa12params.kind = OpKind.TRANSACTION;\nconst dexparams = dex.methods.exchange(\n  dexState.left.coin,\n  dexState.left.amount,\n  dexState.right.coin,\n  dexState.right.amount).toTransferParams();\ndexparams.kind = OpKind.TRANSACTION;\nconst batch = await tezos.wallet.batch([fa12params, dexparams]);\nconst op = await batch.send();\nprops.openSnack();\nresetDexCoins();\nop.receipt().then(() => {\n  props.closeSnack();\n  loadDexTokens();\n  forceRetrieveTokenBalance(lcoin);\n  if (rcoin != 'XTZ') {\n    forceRetrieveTokenBalance(rcoin);\n  }\n  Tezos.tz\n  .getBalance(account)\n  .then((balance) => { setBalance(balance / 1000000) })\n  .catch((error) => console.log(JSON.stringify(error)));\n})\n")),(0,r.kt)("h2",{id:"provide-liquidity"},"Provide liquidity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Provider.js")," line 191"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function handleProvide() {\n    const fa12 = await tezos.wallet.at(dexState.token[coin].addr);\n    const dex = await tezos.wallet.at(dexContract);\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // call 'approve' & 'addLiquidity' entry points\n    ///////////////////////////////////////////////////////////////////////////\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fa12params = fa12.methods.approve(dexContract,dexState.provider.amount).toTransferParams();\nfa12params.kind = OpKind.TRANSACTION;\nconst dexparams = dex.methods.addLiquidity(coin,dexState.provider.amount).toTransferParams();\ndexparams.kind = OpKind.TRANSACTION;\ndexparams.amount = dexState.provider.xtzamount;\nconst batch = await tezos.wallet.batch([fa12params, dexparams]);\nconst op = await batch.send();\nprops.openSnack();\nresetProvider();\nop.receipt().then(() => {\n    props.closeSnack();\n    loadDexTokens();\n    loadLiquidity();\n    Tezos.tz\n    .getBalance(account)\n    .then((balance) => { setBalance(balance / 1000000) })\n    .catch((error) => console.log(JSON.stringify(error)));\n})\n")),(0,r.kt)("h2",{id:"redeem-liquidity"},"Redeem liquidity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Redeemer.js")," line 165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function handleRedeem() {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // call 'removeLiquidity' entry point\n    ///////////////////////////////////////////////////////////////////////////\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const dex = await tezos.wallet.at(dexContract);\nconst op = await dex.methods.removeLiquidity(coin,dexState.redeemer.amount).send();\nprops.openSnack();\nresetRedeemer();\nop.receipt().then(() => {\n    props.closeSnack();\n    loadDexTokens();\n    loadLiquidity();\n    Tezos.tz\n    .getBalance(account)\n    .then((balance) => { setBalance(balance / 1000000) })\n    .catch((error) => console.log(JSON.stringify(error)));\n})\n")))}m.isMDXComponent=!0}}]);