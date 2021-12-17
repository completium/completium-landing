"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[3785],{5544:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=a(9960),c=["components"],o={id:"cli4",title:"JS library",sidebar_label:"JS library",slug:"/cli/jslibrary"},p=void 0,s={unversionedId:"cli/cli4",id:"cli/cli4",title:"JS library",description:"$completium-cli also comes as a Javascript library to implement test scenarios.",source:"@site/docs/cli/cli4.md",sourceDirName:"cli",slug:"/cli/jslibrary",permalink:"/docs/cli/jslibrary",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/cli/cli4.md",tags:[],version:"current",frontMatter:{id:"cli4",title:"JS library",sidebar_label:"JS library",slug:"/cli/jslibrary"},sidebar:"cli",previous:{title:"Contract",permalink:"/docs/cli/contract"}},m=[{value:"deploy / originate",id:"deploy--originate",children:[],level:2},{value:"call",id:"call",children:[],level:2},{value:"transfer",id:"transfer",children:[],level:2},{value:"getBalance",id:"getbalance",children:[],level:2},{value:"getStorage",id:"getstorage",children:[],level:2},{value:"getContract",id:"getcontract",children:[],level:2},{value:"setAccount",id:"setaccount",children:[],level:2},{value:"setEndpoint",id:"setendpoint",children:[],level:2},{value:"getAddress",id:"getaddress",children:[],level:2},{value:"getAccount",id:"getaccount",children:[],level:2},{value:"pack",id:"pack",children:[],level:2},{value:"packTyped",id:"packtyped",children:[],level:2},{value:"blake2b",id:"blake2b",children:[],level:2},{value:"keccak",id:"keccak",children:[],level:2},{value:"sign",id:"sign",children:[],level:2},{value:"exprMichelineToJson",id:"exprmichelinetojson",children:[],level:2},{value:"jsonMichelineToExpr",id:"jsonmichelinetoexpr",children:[],level:2},{value:"setQuiet",id:"setquiet",children:[],level:2},{value:"checkBalanceDelta",id:"checkbalancedelta",children:[],level:2},{value:"getValueFromBigMap",id:"getvaluefrombigmap",children:[],level:2},{value:"expectToThrow",id:"expecttothrow",children:[],level:2}],u={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$completium-cli")," also comes as a Javascript library to implement test scenarios."),(0,r.kt)("p",null,"It provides a subset of commands as programming functions. The benefit is that you can use endpoints and accounts already configured with the CLI, which simplifies the writing of scenarios."),(0,r.kt)("p",null,"An example of test scenario is available ",(0,r.kt)(i.Z,{to:"/docs/contract/test-scenario#example",mdxType:"Link"},"here"),"."),(0,r.kt)("h2",{id:"deploy--originate"},"deploy / originate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { deploy } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const [mycontract, op] = await deploy('./mycontract.arl', {\n  as: 'admin',\n  parameters: {\n    n: 0,\n    s: 'hello'\n  }\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mycontract")," is the contract object to call entrypoints (see below).",(0,r.kt)("p",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"op")," is the operation object from which to retrieve operation costs for example."),(0,r.kt)("p",null,"The second argument object may have the following entries:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Entry"),(0,r.kt)("th",{parentName:"tr",align:null},"JS type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"as")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Deploys with specified account. Default account is the one returned by command ",(0,r.kt)("inlineCode",{parentName:"td"},"completium-cli show account"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Names deployed contract with specified logical name. Logical name is used to refer to contract when calling or displaying contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parameters")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies archetype parameter values (only with archetype contract)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of XTZ to sent when deploying contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata-storage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds metadata to contract from json file (only with archetype contract).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata-uri")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds metadata to contract from uri (only with archetype contract).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"init")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overwrites contract initial storage with Michelson value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"test")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Generates entrypoint ",(0,r.kt)("inlineCode",{parentName:"td"},"_set_now")," to set ",(0,r.kt)("inlineCode",{parentName:"td"},"now")," value (only with archetype contract, to be used only on testnet)")))),(0,r.kt)("h2",{id:"call"},"call"),(0,r.kt)("p",null,"Suppose the ",(0,r.kt)("inlineCode",{parentName:"p"},"escrow.arl")," has several entrypoints among wich the ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit")," entrypoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { deploy } = require('@completium/completium-cli');\nconst [escrow, op] = await deploy('./escrow.arl');\nconst op = await escrow.deposit({ amount: '50tz', as: 'admin' });\n")),(0,r.kt)("p",null,"The parameter object may have the following entries:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Entry"),(0,r.kt)("th",{parentName:"tr",align:null},"JS type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"as")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Deploys with specified account. Default account is the one returned by command ",(0,r.kt)("inlineCode",{parentName:"td"},"completium-cli show account"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"arg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies entrypoints parameter values (see example below).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"arg-michelson")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies entrypoints parameter values in Michelson format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of XTZ to sent when calling contract.")))),(0,r.kt)("p",null,"For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"mycontract.arl")," defines a (non-unique) entry point ",(0,r.kt)("inlineCode",{parentName:"p"},"payback"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"entry payback (i : int, n : nat) {\n  // ...\n}\n")),(0,r.kt)("p",null,"The command to call the entry is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { deploy, call } = require('@completium/completium-cli');\nconst [contract, op] = await deploy('./contract.arl');\nconst op = await contract.payback({ arg : { i : -5, n : 8 },  as: 'admin' });\n")),(0,r.kt)("p",null,"This ",(0,r.kt)(i.Z,{to:"/docs/cli/contract#argument",mdxType:"Link"},"Argument")," section presents examples of values for each type."),(0,r.kt)("h2",{id:"transfer"},"transfer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { transfer } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await transfer('alice', 'bob', '5tz');\n")),(0,r.kt)("h2",{id:"getbalance"},"getBalance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { getBalance } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const balance_alice = await getBalance('alice');\nconsole.log(balance_alice.toNumber());\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"balance_alice")," is a ",(0,r.kt)(i.Z,{to:"https://www.npmjs.com/package/bignumber.js",mdxType:"Link"},"big number"),"."),(0,r.kt)("h2",{id:"getstorage"},"getStorage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { getStorage } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const storage = await getStorage('escrow');\n")),(0,r.kt)("h2",{id:"getcontract"},"getContract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { getContract } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const escrow = await getContract('escrow');\n")),(0,r.kt)("h2",{id:"setaccount"},"setAccount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { setAccount } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await setAccount('alice');\n")),(0,r.kt)("p",null,"Set default account."),(0,r.kt)("h2",{id:"setendpoint"},"setEndpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { setEndpoint } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await setEndpoint('https://testnet-tezos.giganode.io');\n")),(0,r.kt)("p",null,"Set the endpoint rpc."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that endpoint must be registered in completium."))),(0,r.kt)("h2",{id:"getaddress"},"getAddress"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { getAddress } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const pkh_alice = await getAddress('alice');\nconsole.log(pkh_alice); // \"tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb\"\nconst addr_escrow = await getAddress('escrow');\nconsole.log(addr_escrow); // \"KT1Tt4d4Hq2wA6ZAo54KrSXtHnKsPZArixu2\"\n")),(0,r.kt)("h2",{id:"getaccount"},"getAccount"),(0,r.kt)("p",null,"Returns the account object from account alias or address. The account object has the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," : account alias"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkh"),' : public key hash ("tz1...")'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pubk"),' : public key ("edpk...")')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { getAccount } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const alice = await getAccount(\'alice\');\nconsole.log(alice.name); // "alice"\nconsole.log(alice.pkh); // "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb"\n')),(0,r.kt)("h2",{id:"pack"},"pack"),(0,r.kt)("p",null,"Packs simple literal values (int, string)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { pack } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const valueInt = 42;\n  const packedInt = pack(valueInt);\n  console.log(packedInt); // "05002a"\n  const valueString = "archetype";\n  const packedString = pack(valueString);\n  console.log(packedString); // "050100000009617263686574797065"\n  const valueByte = "0x01abff";\n  const packedByte = pack(valueByte);\n  console.log(packedByte); // "050a0000000301abff"\n')),(0,r.kt)("p",null,"Returns a string which represents the packed value."),(0,r.kt)("h2",{id:"packtyped"},"packTyped"),(0,r.kt)("p",null,"Packs Micheline JSON object. The object's Michelson JSON type is required as second argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { packTyped } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const value = {"int": 42};\n  const type = {"prim": "int"};\n  const packedValue = packTyped(value, type);\n  console.log(packedValue); // "05002a"\n')),(0,r.kt)("p",null,"Returns a string, which represents the packed value from michelson objects."),(0,r.kt)("h2",{id:"blake2b"},"blake2b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { blake2b } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const value = "archetype";\n  const packed = pack(value);\n  const hash = blake2b(packed);\n  console.log(hash); // "7835e68df26e5f2c75a13fb03dd9a84a1d1f88729d4e26259793d1071a450168"\n')),(0,r.kt)("p",null,"Returns a string."),(0,r.kt)("h2",{id:"keccak"},"keccak"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { keccak } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const value = "archetype";\n  const packed = pack(value);\n  const hash = keccak(packed);\n  console.log(hash); // "3350e998289574faa196b4677e8f77fc74d67937e9059b987f69b542ef6587a0"\n')),(0,r.kt)("p",null,"Returns a string."),(0,r.kt)("h2",{id:"sign"},"sign"),(0,r.kt)("p",null,"Signs packed data. Returns an object with the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefixSig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sbytes"))),(0,r.kt)("p",null,"see ",(0,r.kt)("a",{parentName:"p",href:"https://tezostaquito.io/docs/signing/"},"here")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { sign } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const packed = packTyped(data, datatype);\n  const signed = await sign(packed, { as: myaccounttz1 });\n  console.log(signed.prefixSig); // prints "edsig..."\n')),(0,r.kt)("h2",{id:"exprmichelinetojson"},"exprMichelineToJson"),(0,r.kt)("p",null,"Converts Micheline expression to JSON object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { exprMichelineToJson } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const a = exprMichelineToJson(\'(Pair 0 "archetype")\');\n  console.log(JSON.stringify(a)) // {"prim":"Pair","args":[{"int":"0"},{"string":"archetype"}]}\n')),(0,r.kt)("h2",{id:"jsonmichelinetoexpr"},"jsonMichelineToExpr"),(0,r.kt)("p",null,"Converts Micheline JSON object to Micheline expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { jsonMichelineToExpr } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const b = jsonMichelineToExpr({prim:"Pair",args:[{int:"0"},{string:"archetype"}]});\n  console.log(b); // \'(Pair 0 "archetype")\'\n')),(0,r.kt)("h2",{id:"setquiet"},"setQuiet"),(0,r.kt)("p",null,"Expects boolean to turn on or off information traces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setQuiet = require('@completium/completium-cli')\n")),(0,r.kt)("h2",{id:"checkbalancedelta"},"checkBalanceDelta"),(0,r.kt)("p",null,"Checks the delta of an account's balance. Arguments are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"account address"),(0,r.kt)("li",{parentName:"ul"},"expected balance delta (balance after - balance before)"),(0,r.kt)("li",{parentName:"ul"},"operation(s)")),(0,r.kt)("p",null,"Throws exception if actual delta is different from expected delta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { checkBalanceDelta } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  await checkBalanceDelta(account.pkh, -50, async () => {\n    // call contract\n  })\n")),(0,r.kt)("p",null,"It is possible to pass an explicit function to decide:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  await checkBalanceDelta(account.pkh, d => { return (d == -50) }, async () => {\n    // call contract\n  })\n")),(0,r.kt)("h2",{id:"getvaluefrombigmap"},"getValueFromBigMap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { getValueFromBigMap } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  const tbm = await getContract(\'test_big_map\');\n  const storage = await tbm.getStorage();\n  const res = await getValueFromBigMap(storage, {"string" : "archetype"}, {prim : "string"});\n  console.log(JSON.stringify(res)); // {"int":"123"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype test_big_map\n\nvariable n : big_map<string, nat> = [("archetype", 123)]\n\nentry empty () {\n  ()\n}\n')),(0,r.kt)("h2",{id:"expecttothrow"},"expectToThrow"),(0,r.kt)("p",null,"Throws an exception if the argument operation does not throw an exception"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { expectToThrow } = require('@completium/completium-cli')\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  await expectToThrow( async () => {\n    // execute something\n  })\n")),(0,r.kt)("p",null,'In mockup mode, it is possible to check the error message: for example the following expects the call to fail with "InvalidCaller":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  await expectToThrow( async () => {\n    // execute something\n  }, '\"InvalidCaller\"')\n")))}d.isMDXComponent=!0}}]);