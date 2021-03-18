(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),c=(n(0),n(187)),i=n(190),s={id:"miles8",title:"Interactions with contract",sidebar_label:"Interactions",slug:"/dapp-miles/miles-tg-interactions"},r={unversionedId:"dapp-miles/miles8",id:"dapp-miles/miles8",isDocsHomePage:!1,title:"Interactions with contract",description:"This page presents how to implement the DApp's interactions with the smart contract.",source:"@site/docs/dapp-miles/miles8.md",slug:"/dapp-miles/miles-tg-interactions",permalink:"/docs/dapp-miles/miles-tg-interactions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-miles/miles8.md",version:"current",sidebar_label:"Interactions",sidebar:"miles",previous:{title:"Contract setup",permalink:"/docs/dapp-miles/miles-tg-contract"},next:{title:"Interface",permalink:"/docs/dapp-miles/miles-contract-interface"}},l=[{value:"Connect to Thanos&#39; utilities",id:"connect-to-thanos-utilities",children:[]},{value:"Read contract storage",id:"read-contract-storage",children:[]},{value:"Call entry point",id:"call-entry-point",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This page presents how to implement the DApp's interactions with the smart contract."),Object(c.b)("h2",{id:"connect-to-thanos-utilities"},"Connect to Thanos' utilities"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"src/dapp.js")," file defines the necessary utilities to connect the DApp to the blockchain via the Thanos wallet:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"check whether wallet is connected"),Object(c.b)("li",{parentName:"ul"},"get the Taquito's object"),Object(c.b)("li",{parentName:"ul"},"...")),Object(c.b)("p",null,"In order to make it available accross the React project, these methods are managed with a ",Object(c.b)("a",{href:"https://www.npmjs.com/package/constate"},"Constate")," storage. Constate provides a local centralized storage for React project with minimum effort."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"dapp.js")," defines a node ",Object(c.b)("inlineCode",{parentName:"p"},"DAppProvider")," that needs to be wrap the App node. The ",Object(c.b)("em",{parentName:"p"},"FIX ME")," section is to be found line 53 in   ",Object(c.b)("inlineCode",{parentName:"p"},"src/DApp.js")," file:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function App() {\n  return (\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // Wrap the App's body with <DAppProvider> tag/function in order to benefit\n    // from wallet's service as defined in dapp.js\n    ///////////////////////////////////////////////////////////////////////////\n    <React.Suspense fallback={null}>\n      <PageRouter />\n    </React.Suspense>\n  );\n}\n")),Object(c.b)("p",null,"The code below shows how to declare the ",Object(c.b)("inlineCode",{parentName:"p"},"DAppProvider")," so that it makes the Thanos utilities available to the DApp:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function App() {\n  return (\n    <DAppProvider appName={appName}>\n      <React.Suspense fallback={null}>\n        <PageRouter />\n      </React.Suspense>\n    </DAppProvider>\n  );\n}\n")),Object(c.b)("p",null,"Copy-paste the code above."),Object(c.b)("h2",{id:"read-contract-storage"},"Read contract storage"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Miles")," component defined in ",Object(c.b)("inlineCode",{parentName:"p"},"src/components/Miles.js")," displays the time before next expiration date. The first step defines a React ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," ",Object(c.b)("a",{href:"https://reactjs.org/docs/hooks-reference.html#useeffect"},"hook")," to read the miles's data for the connected account:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Miles = (props) => {\n\n  /////////////////////////////////////////////////////////////////////////////\n  // The 'account' variable retrieved from 'dapp.js' is the connected account\n  // address\n  /////////////////////////////////////////////////////////////////////////////\n  const account = useAccountPkh();\n  /////////////////////////////////////////////////////////////////////////////\n  // The 'tezos' variable retrieved from 'dapp.js' is used to interact with the\n  // blockchain\n  /////////////////////////////////////////////////////////////////////////////\n  const tezos = useTezos();\n\n  useEffect(() => {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME:\n    // the goal here is to read the contract storage to extract miles' info\n    // for the connected 'account' and invoke the 'props.handleMiles' function\n    // defined in App.js; it takes 2 arguments:\n    // * contract object itself\n    // * list of miles data { id; amount; expration } for the account 'address'\n    ///////////////////////////////////////////////////////////////////////////\n  }, [props.nbMiles]);\n\n  return (\n    <Container style={{ height: '300px'}}>\n    ...\n    </Container>);\n}\n")),Object(c.b)("p",null,"The goal of the hook is to build an array of objects providing ",Object(c.b)("em",{parentName:"p"},"for the current connected account"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"miles' id"),Object(c.b)("li",{parentName:"ul"},"amount of miles"),Object(c.b)("li",{parentName:"ul"},"expiration date of the miles")),Object(c.b)("p",null,"The role of the ",Object(c.b)(i.a,{to:"/docs/dapp-tools/taquito",mdxType:"Link"},"Taquito")," library is to retrieve the contract data and provide it as a plain javascript object that is straightforward to read."),Object(c.b)("p",null,"Here the javascript object of the smart contract's storage provides the following members:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"owner")," is the list of miles' owners providing:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"address"),Object(c.b)("li",{parentName:"ul"},"list of miles'ids"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"mile")," is the list of miles providing:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"miles id"),Object(c.b)("li",{parentName:"ul"},"amount"),Object(c.b)("li",{parentName:"ul"},"expiration")))),Object(c.b)("p",null,"The code below tests if the connected account ",Object(c.b)("inlineCode",{parentName:"p"},"account")," is present in the storage. If it exists, miles' data is retrieved in ",Object(c.b)("inlineCode",{parentName:"p"},"mile")," member for each of the ",Object(c.b)("inlineCode",{parentName:"p"},"account"),"'s miles'id:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"})," useEffect(() => {\n    tezos.wallet.at(contractAddress).then(contract => {\n      contract.storage().then(storage => {\n        var dappMiles = [];\n        if (storage.owner.has(account)) {\n          storage.owner.get(account).forEach(mid => {\n            var mile = storage.mile.get(mid);\n            dappMiles.push({\n              id         : mid,\n              amount     : mile.amount,\n              expiration : mile.expiration\n            });\n          });\n        }\n        props.handleMiles(contract, dappMiles);\n      })\n    });\n  }, [props.nbMiles]);\n")),Object(c.b)("p",null,"Copy-paste the code above for the DApp to read the contract storage."),Object(c.b)("p",null,"The Taquito's contract object is retrieved with the following code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"tezos.wallet.at(contractAddress).then(contract => {\n    ...\n});\n")),Object(c.b)("p",null,"The Taquito's contract's storage object is retrieved with the following code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"contract.storage().then(storage => {\n    ...\n}\n")),Object(c.b)("h2",{id:"call-entry-point"},"Call entry point"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"ProductButton")," component defined in ",Object(c.b)("inlineCode",{parentName:"p"},"/src/components/Products.js")," is the 'Get it' button at the bottom of the product item.\nWhen clicked, the ",Object(c.b)("inlineCode",{parentName:"p"},"handleClick")," method is executed."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function ProductButton(props) {\n\n  const handleClick = () => {\n    ///////////////////////////////////////////////////////////////////////////\n    // FIX ME\n    // The goal is to call the 'consume' contract's entry point. The number of\n    // miles to consume is 'props.nbmiles'.\n    // On the UI front, the snack bar should be opened whith 'props.openSnack()'\n    // while the transaction is confirmed, and closed when confirmed with\n    // 'props.closeSnack()'.\n    // The 'receipt()' method of the operation is used to know when the\n    // transaction is confirmed.\n    ///////////////////////////////////////////////////////////////////////////\n  }\n  return (\n      ...\n  );\n}\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"consume")," entry point must be invoked by the connected account; it takes one parameter that is the number of miles to subtract or delete."),Object(c.b)("p",null,"The ",Object(c.b)(i.a,{to:"/docs/dapp-tools/taquito",mdxType:"Link"},"Taquito")," library provides methods named as the contract's entry points to make it very simple to call the contract. These methods/entry point take the same arguments as the contract's."),Object(c.b)("p",null,"The code below calls the ",Object(c.b)("inlineCode",{parentName:"p"},"consume")," entry point:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const handleClick = () => {\n    props.contract.methods.consume(props.nbmiles).send().then(op => {\n      console.log(`waiting for ${op.opHash} to be confirmed`);\n      props.openSnack();\n      op.receipt().then(() => {\n        props.handleReceipt();\n      });\n    })\n}\n")),Object(c.b)("p",null,"Copy-paste the code above to call the contract."),Object(c.b)("p",null,"Note that calling the ",Object(c.b)("inlineCode",{parentName:"p"},"consume")," entry point returns an ",Object(c.b)("em",{parentName:"p"},"Operation")," object. This object provides the ",Object(c.b)("inlineCode",{parentName:"p"},"receipt")," method which returns when the operation is confirmed."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"openSnack")," and ",Object(c.b)("inlineCode",{parentName:"p"},"closeSnack")," methods open and close (via ",Object(c.b)("inlineCode",{parentName:"p"},"handleReceipt"),") the snack popup to inform the user that a confirmation is waited for."))}b.isMDXComponent=!0}}]);