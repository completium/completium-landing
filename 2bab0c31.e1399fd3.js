(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{188:function(e,n,t){"use strict";t(0),t(192)},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(7),r=(t(0),t(187)),c=(t(188),t(189),t(191),{id:"game7",title:"Interactions",sidebar_label:"Interactions",slug:"/dapp-game/interactions"}),s={unversionedId:"dapp-game/game7",id:"dapp-game/game7",isDocsHomePage:!1,title:"Interactions",description:"Load records",source:"@site/docs/dapp-game/game7.md",slug:"/dapp-game/interactions",permalink:"/docs/dapp-game/interactions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-game/game7.md",version:"current",sidebar_label:"Interactions",sidebar:"game",previous:{title:"Contract Origination",permalink:"/docs/dapp-game/origination"},next:{title:"Interface",permalink:"/docs/dapp-game/interface"}},i=[{value:"Load records",id:"load-records",children:[]},{value:"Encrypt",id:"encrypt",children:[]},{value:"Submit score",id:"submit-score",children:[]}],p={toc:i};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"load-records"},"Load records"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"async function loadRecords() {\n  try {\n   ///////////////////////////////////////////////////////////////////////////\n   // FIX ME\n   // read contract storage, mainly submission and call DApp's 'setRecords'\n   ///////////////////////////////////////////////////////////////////////////\n  } catch (error) {\n   console.log(`Error: ${error}`);\n  }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const Tezos = new TezosToolkit('https://delphinet-tezos.giganode.io');\nconsole.log(contractAddress);\nvar contract  = await Tezos.contract.at(contractAddress);\nvar cstorage  = await contract.storage();\nvar recs      = [];\ncstorage.submission.forEach((s, k, m) => {\n  recs.push({\n    score: parseInt('0'+s.score),\n    account: k\n  });\n});\nsetRecords(sortByScore(recs));\nsetStatus(parseInt('0'+cstorage._state));\n")),Object(r.b)("h2",{id:"encrypt"},"Encrypt"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"src/components/Competition.js")," line 25"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const handleEncrypt = () => {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // Encrypt score:\n    // * invoke RPC call 'packData'\n    // * sign with Oracle's private key\n    // NB: this should be done via game server\n    ///////////////////////////////////////////////////////////////////////////\n  }\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'var oracle = new InMemorySigner(\'edsk3eFocAKYDy2GfkFXFnj19ocDFwJ4M4cvrPURgaeyWp19LFzvHE\');\nvar nonce = new Uint8Array(8);\nwindow.crypto.getRandomValues(nonce);\nconsole.log(`score: ${props.score.score}`);\nconst Tezos = new TezosToolkit(\'https://delphinet-tezos.giganode.io\');\nTezos.rpc.packData({\n  data: {\n    prim: "Pair",\n    args: [\n      { string: accountAddress },\n      { int: props.score.score.toString() }\n    ]\n  }, type: {\n    prim: "pair",\n    args: [\n      { prim: "address" },\n      { prim: "nat" }\n    ]\n  }\n}).then(wrappedPacked => {\n  const hexScore = wrappedPacked.packed;\n  oracle.sign(hexScore).then(s => {\n    console.log(`score: ${props.score.score.toString(16)}`);\n    console.log(`signed: ${s.sbytes}`);\n    console.log(`sig: ${s.sig}`);\n    console.log(`prefix: ${s.prefixSig}`);\n    props.setSigned({ packed: wrappedPacked.packed, value: s.prefixSig });\n  });\n})\n')),Object(r.b)("h2",{id:"submit-score"},"Submit score"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"src/components/Competition.js")," line 34"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const submit = () => {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // Submit score:\n    ///////////////////////////////////////////////////////////////////////////\n  }\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"tezos.wallet.at(contractAddress).then(contract => {\n    contract.methods.submit(props.signed.packed, props.signed.value).send().then(op => {\n      props.openSnack();\n      op.receipt().then(() => {\n        props.closeSnack();\n        props.loadRecords();\n      });\n    }).catch(e => console.log(e));\n});\n")))}d.isMDXComponent=!0}}]);