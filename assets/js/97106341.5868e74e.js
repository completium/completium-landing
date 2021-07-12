(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),o=(n(0),n(238)),i=n(241),r=n(239);const s={id:"first4",title:"Bid button",sidebar_label:"4. Bid button",slug:"/dapp-first/bid-button"},c={unversionedId:"dapp-first/first4",id:"dapp-first/first4",isDocsHomePage:!1,title:"Bid button",description:"The goal is to add a Post Bid button to call the contract.",source:"@site/docs/dapp-first/first4.md",slug:"/dapp-first/bid-button",permalink:"/docs/dapp-first/bid-button",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-first/first4.md",version:"current",sidebar_label:"4. Bid button",sidebar:"first",previous:{title:"Display contract data",permalink:"/docs/dapp-first/display-storage"},next:{title:"Make a bid",permalink:"/docs/dapp-first/make-bid"}},p=[{value:"Button&#39;s code",id:"buttons-code",children:[]},{value:"Wallet button",id:"wallet-button",children:[]},{value:"<code>App.js</code> code",id:"appjs-code",children:[]}],l={toc:p};function d({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The goal is to add a ",Object(o.b)("em",{parentName:"p"},"Post Bid")," button to call the contract."),Object(o.b)("h2",{id:"buttons-code"},"Button's code"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Replace")," in ",Object(o.b)("inlineCode",{parentName:"p"},"~/src/App.js")," the comment below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"/* FIXME: Step 4.1 */\n")),Object(o.b)("p",null,"with the code below (click 'copy' in the upper-right-hand corner):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{8-9,12}","{8-9,12}":!0},'const BidButton = () => {\n  const tezos = useTezos();\n  const account = useAccountPkh();\n  const { settings } = useSettingsContext();\n  const { setInfoSnack, setErrorSnack, hideSnack } = useSnackContext();\n  const bid = async () => {\n    try {\n      const contract  = await tezos.wallet.at(settings.contract);\n      const operation = await contract.methods.bid(UnitValue).send({ amount: 10 });\n      const shorthash = operation.opHash.substring(0, 10) + "...";\n      setInfoSnack(`waiting for ${ shorthash } to be confirmed ...`);\n      await operation.receipt();\n      hideSnack();\n    } catch (error) {\n      setErrorSnack(error.message);\n      setTimeout(hideSnack, 4000);\n    }\n  }\n  return (\n    <Button onClick={ bid } variant="outlined" disabled={ account === null }>\n      post bid\n    </Button>);\n}\n')),Object(o.b)("p",null,"The highlighted lines above show the interactions with the wallet:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the contract is retrieved through the ",Object(o.b)("inlineCode",{parentName:"li"},"Tezos")," object provided by the wallet"),Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("inlineCode",{parentName:"li"},"bid")," method defined in the ",Object(o.b)(r.a,{to:"/docs/dapp-first/contract#entrypoints",mdxType:"Link"},"contract"),", is invoked to forge and sign the operation, which is posted to the blockchain with ",Object(o.b)("inlineCode",{parentName:"li"},"send")),Object(o.b)("li",{parentName:"ul"},"the operation handler returns a ",Object(o.b)("inlineCode",{parentName:"li"},"receipt")," when the transaction is confirmed")),Object(o.b)("p",null,"Note that the contract's ",Object(o.b)("inlineCode",{parentName:"p"},"bid")," method does not take any argument, and that its javascript counterpart takes the default ",Object(o.b)("inlineCode",{parentName:"p"},"UnitValue")," value."),Object(o.b)("p",null,"Note that 10 tezies are sent to the contract with the ",Object(o.b)("inlineCode",{parentName:"p"},"send")," argument ",Object(o.b)("inlineCode",{parentName:"p"},"{ amount: 10 }"),". It is the value of the bid. This amount is refered to with the ",Object(o.b)("a",{href:"https://archetype-lang.org/"},"Archetype")," keyword ",Object(o.b)("inlineCode",{parentName:"p"},"transferred")," in the contract ",Object(o.b)(r.a,{to:"/docs/dapp-first/contract#copy-contract-code",mdxType:"Link"},"code"),"."),Object(o.b)("p",null,"Now ",Object(o.b)("strong",{parentName:"p"},"replace")," in ",Object(o.b)("inlineCode",{parentName:"p"},"~/src/App.js")," the comment below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{ /* FIXME: Step 4.2 */ }\n")),Object(o.b)("p",null,"with the code below (click 'copy' in the upper-right-hand corner):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<Grid item xs={12}>\n  <BidButton />\n</Grid>\n")),Object(o.b)("h2",{id:"wallet-button"},"Wallet button"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"Bid")," button is disabled if the DApp is not connected to the ",Object(o.b)(r.a,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"Temple wallet")," (see ",Object(o.b)("inlineCode",{parentName:"p"},"disabled={account === null}")," above)."),Object(o.b)("p",null,"The project provides a utility button ",Object(o.b)("inlineCode",{parentName:"p"},"WalletButton")," to connect to the wallet. It is defined in ",Object(o.b)("inlineCode",{parentName:"p"},"~/src/components/WalletButton.js"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Replace")," in ",Object(o.b)("inlineCode",{parentName:"p"},"~/src/App.js")," the comment below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{ /* FIXME: Step 4.3 */ }\n")),Object(o.b)("p",null,"with the code below (click 'copy' in the upper-right-hand corner):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<Grid item xs={12}>\n  <WalletButton />\n</Grid>\n")),Object(o.b)("p",null,"If the ",Object(o.b)(r.a,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"Temple wallet")," is not installed, the button displays as below:"),Object(o.b)(i.a,{img:"wallet_button1.png",width:"50%",mdxType:"DappFigure"}),Object(o.b)("p",null,"Click the button to go to the install page."),Object(o.b)("p",null,"When/If the ",Object(o.b)(r.a,{to:"/docs/dapp-tools/thanos",mdxType:"Link"},"Temple wallet")," is installed, the button displays as below:"),Object(o.b)(i.a,{img:"wallet_button2.png",width:"50%",mdxType:"DappFigure"}),Object(o.b)("h2",{id:"appjs-code"},Object(o.b)("inlineCode",{parentName:"h2"},"App.js")," code"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This section is for information only, no action is required."))),Object(o.b)("p",null,"This section presents the code of ",Object(o.b)("inlineCode",{parentName:"p"},"~/src/App.js")," at the end of this step:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{62-84,112-114,118-120}","{62-84,112-114,118-120}":!0},"import './App.css';\nimport React from 'react';\nimport useMediaQuery from '@material-ui/core/useMediaQuery';\nimport { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';\nimport CssBaseline from '@material-ui/core/CssBaseline';\nimport Container from '@material-ui/core/Container';\nimport Typography from '@material-ui/core/Typography';\nimport Link from '@material-ui/core/Link';\nimport Grid from '@material-ui/core/Grid';\n\nimport { DAppProvider } from './dappstate';\nimport { SnackProvider } from './snackstate';\nimport { appName, alegreya } from './settings';\nimport Snack from './components/Snack';\nimport WalletButton from './components/WalletButton';\n\nimport { TezosToolkit } from '@taquito/taquito';\nimport { endpoint, contractAddress, courier } from './settings.js';\nimport { useState } from 'react';\n\nimport Button from '@material-ui/core/Button';\nimport { useTezos, useAccountPkh } from './dappstate';\nimport { useSnackContext } from './snackstate';\nimport { UnitValue } from '@taquito/taquito';\n\nconst Cell = (props) => {\n  return (<Grid item xs={6}><Typography align=\"left\" variant=\"subtitle2\"\n    style={ props.data ? { fontFamily: courier } : { } }> { props.val }\n  </Typography></Grid>)\n}\n\nconst OwnershipData = (props) => {\n  const { settings } = useSettingsContext();\n  const [{ assetid, owner, forsale }, setData] = useState(() => ({\n      assetid : \"\",\n      owner   : \"\",\n      forsale : \"\",\n    }));\n  const loadStorage = React.useCallback(async () => {\n    const tezos     = new TezosToolkit(settings.endpoint);\n    const contract  = await tezos.contract.at(settings.contract);\n    const storage   = await contract.storage();\n    console.log(storage);\n    setData({\n      assetid : storage.assetid,\n      owner   : storage.owner,\n      forsale : storage._state.toNumber() > 0 ? \"For Sale\" : \"Not For Sale\",\n    });\n  }, [assetid, owner, forsale]);\n  if (assetid === \"\") loadStorage();\n  return (\n    <Container maxWidth='xs'>\n    <Grid container direction=\"row\" alignItems=\"center\" spacing={1}>\n      <Cell val=\"Asset Id\"/><Cell val={ assetid.substring(0, 20) + \"...\" } data/>\n      <Cell val=\"Owner\"   /><Cell val={ owner.substring(0, 20) + \"...\" } data/>\n      <Cell val=\"Status\"  /><Cell val={ forsale }/>\n    </Grid>\n    </Container>\n  );\n}\n\nconst BidButton = () => {\n  const tezos = useTezos();\n  const account = useAccountPkh();\n  const { settings } = useSettingsContext();\n  const { setInfoSnack, setErrorSnack, hideSnack } = useSnackContext();\n  const bid = async () => {\n    try {\n      const contract  = await tezos.wallet.at(contract);\n      const operation = await contract.methods.bid(UnitValue).send({ amount: 10 });\n      const shorthash = operation.opHash.substring(0, 10) + \"...\";\n      setInfoSnack(`waiting for ${ shorthash } to be confirmed ...`);\n      await operation.receipt();\n      hideSnack();\n    } catch (error) {\n      setErrorSnack(error.message);\n      setTimeout(hideSnack, 4000);\n    }\n  }\n  return (\n    <Button onClick={ bid } variant=\"outlined\" disabled={ account === null }>\n      post bid\n    </Button>);\n}\n\n/* FIXME: Step 6.1 */\n\nfunction App() {\n  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');\n  const theme = React.useMemo(\n    () =>\n      createMuiTheme({\n        palette: {\n          type: prefersDarkMode ? 'dark' : 'light',\n        },\n      }),\n    [prefersDarkMode],\n  );\n  return (\n    <DAppProvider appName={ appName }>\n      <SettingsProvider>\n      <SnackProvider>\n      <ThemeProvider theme={ theme }>\n      <CssBaseline />\n      <div className=\"App\">\n        <Container style={{ marginTop: 50 }}>\n          <Grid container spacing={3}>\n            <Grid item xs={12}>\n                <OwnershipData />\n            </Grid>\n\n            <Grid item xs={12}>\n                <BidButton />\n            </Grid>\n\n            { /* FIXME: Step 6.2 */ }\n\n            <Grid item xs={12}>\n                <WalletButton />\n            </Grid>\n          </Grid>\n        </Container>\n      </div>\n      <SettingsPanel/>\n      <Snack />\n      </ThemeProvider>\n      </SnackProvider>\n      </SettingsProvider>\n    </DAppProvider>\n  );\n}\n\nexport default App;\n")))}d.isMDXComponent=!0}}]);