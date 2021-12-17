"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[6314],{7760:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=a(7134),s=a(9960),l=["components"],p={id:"tools9",title:"Taquito",sidebar_label:"Taquito",slug:"/dapp-tools/taquito"},c=void 0,d={unversionedId:"dapp-tools/tools9",id:"dapp-tools/tools9",title:"Taquito",description:"Taquito is a TypeScript library suite for development on the Tezos blockchain.",source:"@site/docs/dapp-tools/tools9.md",sourceDirName:"dapp-tools",slug:"/dapp-tools/taquito",permalink:"/docs/dapp-tools/taquito",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-tools/tools9.md",tags:[],version:"current",frontMatter:{id:"tools9",title:"Taquito",sidebar_label:"Taquito",slug:"/dapp-tools/taquito"},sidebar:"tools",previous:{title:"React",permalink:"/docs/dapp-tools/react"},next:{title:"Temple Wallet",permalink:"/docs/dapp-tools/thanos"}},u=[{value:"Integration in DApps",id:"integration-in-dapps",children:[],level:2},{value:"Contract origination",id:"contract-origination",children:[],level:2},{value:"Call contract",id:"call-contract",children:[{value:"Basics",id:"basics",children:[],level:3},{value:"Transfer amount",id:"transfer-amount",children:[],level:3},{value:"Several Transactions",id:"several-transactions",children:[],level:3}],level:2},{value:"Read contract storage",id:"read-contract-storage",children:[{value:"Variables",id:"variables",children:[],level:3},{value:"Collection of assets",id:"collection-of-assets",children:[],level:3}],level:2}],m={toc:u};function h(t){var e=t.components,a=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:"https://tezostaquito.io/"},"Taquito")," is a TypeScript library suite for development on the Tezos blockchain.",(0,r.kt)(i.Z,{img:"taquito-logo.png",width:"50%",mdxType:"DappFigure"}),(0,r.kt)("h2",{id:"integration-in-dapps"},"Integration in DApps"),(0,r.kt)("p",null,"The ",(0,r.kt)(s.Z,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"Temple")," wallet, used in the ",(0,r.kt)(s.Z,{to:"/dapps",mdxType:"Link"},"DApps"),", integrates Taquito which is then used to interact with the smart contract."),(0,r.kt)("p",null,"The Taquito object is retrieved with a mecanism defined in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/dapps.js"),". All DApps use a global state managed with the ",(0,r.kt)("a",{href:"https://www.npmjs.com/package/constate",target:"_blank"},"constate")," library."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dapp.js")," registers in the constate global state an accessor ",(0,r.kt)("inlineCode",{parentName:"p"},"useTezos"),", so that any module can retrieve it easily, without passing it down from root ",(0,r.kt)(s.Z,{to:"/docs/dapp-tools/react",mdxType:"Link"},"React")," element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},"import { useTezos } from '../dapp';\n\nconst ReactComponent = (props) => {\n  const tezos = useTezos();\n  ...\n}\n")),(0,r.kt)("p",null,"As a side note, here is the way to retrieve the account address (public key) the user has signed in with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},"import { useAccountPkh } from '../dapp';\n\nconst ReactComponent = (props) => {\n  const account = useAccountPkh();\n  ...\n}\n")),(0,r.kt)("p",null,"Note that the user account is managed by the ",(0,r.kt)(s.Z,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"Temple")," wallet, not by Taquito. The wallet internally passes the account's private key to Taquito to sign transactions."),(0,r.kt)("h2",{id:"contract-origination"},"Contract origination"),(0,r.kt)("p",null,"Taquito originates contracts provided in the Micheline format, a json version of ",(0,r.kt)(s.Z,{to:"/docs/contract#micheslon",mdxType:"Link"},"Michelson"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)(s.Z,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," command to generate Micheline from ",(0,r.kt)("inlineCode",{parentName:"p"},"contract.arl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ completium-cli generate javascript contract.arl > contract.js\n")),(0,r.kt)("p",null,"The generated ",(0,r.kt)("inlineCode",{parentName:"p"},"contract.js")," file exports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Micheline/Json ",(0,r.kt)("inlineCode",{parentName:"li"},"code")," of the contract"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"getStorage")," methode to build the initial storage")),(0,r.kt)("p",null,"These two elements are passed to the Taquito's originate method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-7}","{4-7}":!0},"import { code, getStorage } from 'contract.js';\n\ntry {\n  const operation = await tezos.wallet.originate({\n    code: code,\n    init: getStorage(...)\n  }).send();\n  console.log(`Waiting for confirmation of origination...`);\n  const contract = await operation.contract();\n  console.log(`Origination completed for ${contract.address}.`);\n} catch (error) {\n  console.log(`Error: ${JSON.stringify(error, null, 2)}`);\n}\n")),(0,r.kt)("p",null,"Examples of contract origination are found is the following DApps:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"DApp"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Origination description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s.Z,{to:"/docs/dapp-escrow/interactions#contract-origination",mdxType:"Link"},"Online purchase")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The escrow contract for payment is originated when customers decides to purchase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s.Z,{to:"/docs/dapp-zcb/interactions#contract-origination",mdxType:"Link"},"Zero-coupon-bond")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Zero-coupon bond contract is originated when contract parameters are set in the editor.")))),(0,r.kt)("h2",{id:"call-contract"},"Call contract"),(0,r.kt)("p",null,"It is very straightforward to call contracts entry points with Taquito."),(0,r.kt)("h3",{id:"basics"},"Basics"),(0,r.kt)("p",null,"For example, the ",(0,r.kt)(s.Z,{to:"/docs/dapp-ideabox/",mdxType:"Link"},"Idea Box")," DApp's smart contract, developed in ",(0,r.kt)("a",{href:"https://archetype-lang.org/"},"Archetype")," language, defines an entry point ",(0,r.kt)("inlineCode",{parentName:"p"},"vote")," to vote for an idea:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"entry vote(n : nat, weight : nat) {\n  require {\n    r2 : voter.contains(caller);\n    r3 : voter[caller].remaining >= weight;\n    r4 : state = Activated;\n  }\n  effect {\n    voter[caller].remaining -= weight;\n    idea[n].nbvotes += weight;\n  }\n}\n")),(0,r.kt)("p",null,"The entry point requires two natural integer parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the idea identifier"),(0,r.kt)("li",{parentName:"ul"},"the weight the user wishes to associate to the vote (max. 5)")),(0,r.kt)("p",null,"The following code calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"vote")," entry point:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"const contract  = await tezos.wallet.at(contractAddress);\nconst operation = await contract.methods.vote(id, weight).send();\nconsole.log(`waiting for ${operation.opHash} to be confirmed`);\nawait operation.receipt();\n")),(0,r.kt)("p",null,"Note that while the contract defines parameters as ",(0,r.kt)("inlineCode",{parentName:"p"},"nat")," (natural integers), the javascript type is simply ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),"; Taquito emits an error if the conversion to Michelson type is not possible."),(0,r.kt)("p",null,"Typically here an error is emitted if ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," is passed as argument for example."),(0,r.kt)("h3",{id:"transfer-amount"},"Transfer amount"),(0,r.kt)("p",null,"Some entry points require to send an amount of tez for the contract to execute properly according to the business logic."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," entry point of the ",(0,r.kt)(s.Z,{to:"/docs/dapp-iot/",mdxType:"Link"},"Connected Object")," DApp requires to transfer some Tez to switch on the bulb. The amount is passed as argument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},"import { UnitValue } from '@taquito/taquito';\n\nconst contract  = await tezos.wallet.at(contractAddress);\nconst operation = await contract.methods.start(UnitValue).send({ amount : price });\nconsole.log(`waiting for ${operation.opHash} to be confirmed`);\nawait operation.receipt();\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitValue")," is necessary to pass when the entry point does not have any argument."),(0,r.kt)("p",null,"The default amount unit is Tez. It is possible to pass Mutez (1 Tez = 10^6 Mutez) by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"mutez: true")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," argument."),(0,r.kt)("h3",{id:"several-transactions"},"Several Transactions"),(0,r.kt)("p",null,"It is possible to execute several transactions in one operation."),(0,r.kt)("p",null,"For example in the ",(0,r.kt)(s.Z,{to:"/docs/dapp-dex/",mdxType:"Link"},"DEX")," DApp, the exchange process requires calling two contracts: the ",(0,r.kt)("em",{parentName:"p"},"FA 1.2")," and the ",(0,r.kt)("em",{parentName:"p"},"DEX"),". The following code illustrates how to execute that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// FA 1.2 transaction definition\nconst fa12 = await tezos.wallet.at(fa12address);\nconst fa12params = fa12.methods.approve(UnitValue).toTransferParams();\nfa12params.kind = OpKind.TRANSACTION;\n\n// DEX transaction definition\nconst dex = await tezos.wallet.at(dexaddress);\nconst dexparams = dex.methods.exchange(UnitValue).toTransferParams();\ndexparams.kind = OpKind.TRANSACTION;\n\n// Group them in a batch operation and send\nconst batch     = await tezos.wallet.batch([fa12params, dexparams]);\nconst operation = await batch.send();\nawait operation.receipt();\n")),(0,r.kt)("p",null,"The parameters of ",(0,r.kt)("inlineCode",{parentName:"p"},"approve")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exchange")," have been simplified to ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitValue")," for demo purpose."),(0,r.kt)("h2",{id:"read-contract-storage"},"Read contract storage"),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("p",null,"For example in the ",(0,r.kt)(s.Z,{to:"/docs/dapp-iot/",mdxType:"Link"},"Connected Object")," DApp, it is necessary to read the dates of service to know whether the object is currently in use."),(0,r.kt)("p",null,"These variables are declared in the smart contract with the ",(0,r.kt)("a",{href:"https://archetype-lang.org/"},"Archetype")," language:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"variable dateofstop   : date = now\n\nvariable dateofstart  : date = now\n\nvariable value : int = 0tz\n")),(0,r.kt)("p",null,"These values are stored in the contract storage (click ",(0,r.kt)("a",{href:"https://better-call.dev/edo2net/KT19ZQUnVrDT5xnfvPqYhn1DeM489875oWGU/storage",target:"_blank"},"here")," to view an instance in ",(0,r.kt)(s.Z,{to:"",mdxType:"Link"},"Better Call dev")," indexer)."),(0,r.kt)("p",null,"Taquito provides the contract storage as a ",(0,r.kt)("em",{parentName:"p"},"POJO")," for direct access to the contract data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-6}","{4-6}":!0},"var contract  = await tezos.contract.at(contractAddress);\nvar storage   = await contract.storage();\n\nconst dateofstart = new Date(storage.dateofstart);\nconst dateofstop  = new Date(storage.dateofstop);\nconst value       = storage.value.toNumber();\n")),(0,r.kt)("p",null,"Since Tezos can store arbitrary large number values, Taquito provides the number values as ",(0,r.kt)("a",{href:"https://mikemcl.github.io/bignumber.js/",target:"_blank"},"bignumber")," objects to be converted with ",(0,r.kt)("inlineCode",{parentName:"p"},"toNumber"),"."),(0,r.kt)("h3",{id:"collection-of-assets"},"Collection of assets"),(0,r.kt)("p",null,"For example in the the ",(0,r.kt)(s.Z,{to:"/docs/dapp-ideabox/",mdxType:"Link"},"Idea Box")," DApp, the smart contract stores the idea and the votes."),(0,r.kt)("p",null,"The collection of ideas is declared in ",(0,r.kt)("a",{href:"https://archetype-lang.org/"},"Archetype")," language the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"asset idea {\n  id       : nat;\n  title    : bytes;\n  desc     : bytes;\n  nbvotes  : nat = 0;\n  creation : date;\n  author   : address;\n}\n")),(0,r.kt)("p",null,"The asset collection is compiled to a (Michelson) map from ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," to a 'record' ",(0,r.kt)("inlineCode",{parentName:"p"},"{ title; desc; nbvotes; creation; author }"),". It is possible to iterate over the map with the ",(0,r.kt)("a",{href:"https://tezostaquito.io/docs/michelsonmap/#the-keyvalue-methods",target:"_blank"},"forEach")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var contract  = await Tezos.contract.at(contractAddress);\nvar storage   = await contract.storage();\n\nstorage.idea.forEach((i, k, _) => {\n  ids.push({\n    id:       k,\n    title:    fromHexString(i.title),\n    desc:     fromHexString(i.desc),\n    author:   i.author,\n    nbvotes:  parseInt(i.nbvotes,10),\n    creation: (i.creation+'').substring(0,10),\n    winner:   false\n  });\n});\n")),(0,r.kt)("p",null,"The code above stores each id in a local javascript list of records ",(0,r.kt)("inlineCode",{parentName:"p"},"ids"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," is the idea identifier (named ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in the Archetype contract)."))}h.isMDXComponent=!0}}]);