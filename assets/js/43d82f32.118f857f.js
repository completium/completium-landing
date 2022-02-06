"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[475],{3585:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=(a(7134),a(9960)),l=["components"],d={id:"first2",title:"Deploy Smart Contract",sidebar_label:"2. Deploy Smart contract",slug:"/dapp-first/contract"},s=void 0,p={unversionedId:"dapp-first/first2",id:"dapp-first/first2",title:"Deploy Smart Contract",description:"The first step is to originate (deploy) the ownership Smart Contract with completium CLI.",source:"@site/docs/dapp-first/first2.md",sourceDirName:"dapp-first",slug:"/dapp-first/contract",permalink:"/docs/dapp-first/contract",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-first/first2.md",tags:[],version:"current",frontMatter:{id:"first2",title:"Deploy Smart Contract",sidebar_label:"2. Deploy Smart contract",slug:"/dapp-first/contract"},sidebar:"first",previous:{title:"1. Technical environment",permalink:"/docs/dapp-first/gitpod"},next:{title:"3. Display contract data",permalink:"/docs/dapp-first/display-storage"}},m=[{value:"Smart contract code",id:"smart-contract-code",children:[],level:2},{value:"Originate contract",id:"originate-contract",children:[{value:"From Archetype",id:"from-archetype",children:[],level:3},{value:"From Michelson",id:"from-michelson",children:[],level:3}],level:2},{value:"Contract API",id:"contract-api",children:[{value:"Storage",id:"storage",children:[],level:3},{value:"Entrypoints",id:"entrypoints",children:[],level:3}],level:2}],c={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The first step is to originate (deploy) the ownership ",(0,i.kt)(o.Z,{to:"/docs/dapp-tools/tezos#smart-contract",mdxType:"Link"},"Smart Contract")," with ",(0,i.kt)(o.Z,{to:"/docs/cli",mdxType:"Link"},"completium CLI"),"."),(0,i.kt)("p",null,"Before anything, follow these ",(0,i.kt)(o.Z,{to:"/docs/dapp-tools/faucet#create-a-test-account",mdxType:"Link"},"instructions")," to import a new test account:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"copy paste (or upload to gitpod) in ",(0,i.kt)("inlineCode",{parentName:"li"},"faucet.json")," file a test account retrieved from ",(0,i.kt)(o.Z,{to:"https://teztnets.xyz/hangzhounet-faucet",mdxType:"Link"},"teztnets.xyz")),(0,i.kt)("li",{parentName:"ul"},"in order to import the faucet account with ",(0,i.kt)("inlineCode",{parentName:"li"},"completium-cli"),", enter the following command in a VS code ",(0,i.kt)(o.Z,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"Terminal")," tab:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"completium-cli import faucet faucet.json as owner\n")),(0,i.kt)("h2",{id:"smart-contract-code"},"Smart contract code"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is for information only, no action is required."))),(0,i.kt)("p",null,"The contract is written in ",(0,i.kt)(o.Z,{to:"http://archetype-lang.org/",mdxType:"Link"},"Archetype")," language. The source code is available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"contract")," folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype asset_ownership(owner : address)\n\nvariable assetid : bytes =\n  0x68746ecbcd72793aefda48f1b67a3190fc380a7633055d2336fb90cd990582a2\n\nvariable bestbidder : address = owner\nvariable bestbid    : tez = 0tz\n\nvariable endofbid   : date = now\n\nstates =\n| Owned initial\n| ForSale\n\ntransition upforsale (price : tez) {\n   called by owner\n   from Owned to ForSale\n   with effect {\n      bestbid := price;\n      endofbid := now + 5m;\n   }\n}\n\nentry bid() {\n   require {\n      r1: state = ForSale       otherwise "Asset Not For Sale";\n      r2: now < endofbid        otherwise "Bid Period Is Over";\n      r3: caller <> bestbidder  otherwise "Called By Best Bidder";\n      r4: transferred > bestbid otherwise "Invalid Transferred Amount";\n   }\n   effect {\n     if balance <> transferred then\n       transfer bestbid to bestbidder;\n     bestbidder := caller;\n     bestbid := transferred;\n     endofbid := now + 2m;\n   }\n}\n\ntransition claim () {\n  require { r5: now > endofbid otherwise "Bid Period Is Still On" }\n  from ForSale to Owned\n  with effect {\n     if balance > 0tz then\n         transfer balance to owner;\n     owner := bestbidder;\n  }\n}\n')),(0,i.kt)("h2",{id:"originate-contract"},"Originate contract"),(0,i.kt)("h3",{id:"from-archetype"},"From Archetype"),(0,i.kt)("p",null,"Enter this command in the ",(0,i.kt)(o.Z,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"Terminal"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'completium-cli deploy ./contract/ownership.arl --as owner --parameters \'{ "owner" : "tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw" }\'\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Replace address ",(0,i.kt)("inlineCode",{parentName:"p"},"tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw")," by the faucet address you imported\n(run ",(0,i.kt)("inlineCode",{parentName:"p"},"completium-cli show account")," to display the address - Public Key hash)."))),(0,i.kt)("p",null,"It displays the main origination parameters and asks for confirmation. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Y")," and press enter."),(0,i.kt)("p",null,"The output should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ completium-cli deploy ./contract/ownership.arl --as owner --parameters \'{ "owner" : "tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw" }\' --force\nOriginate settings:\n  network   : granada\n  contract  : ownership\n  as        : admin\n  send      : 0 \ua729\n  storage   : (Pair "tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw" (Pair 0x68746ecbcd72793aefda48f1b67a3190fc380a7633055d2336fb90cd990582a2 (Pair "tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw" (Pair 0 (Pair 1635064614 0)))))\n  total cost    : 0.42918 \ua729\nWaiting for confirmation of origination for KT1PPMXvCQh2g3b4YP4ovha5ZwpbKhh5xNh5 ...\nOrigination completed for KT1PPMXvCQh2g3b4YP4ovha5ZwpbKhh5xNh5 named ownership.\nhttps://better-call.dev/granadanet/KT1PPMXvCQh2g3b4YP4ovha5ZwpbKhh5xNh5\n')),(0,i.kt)("p",null,"Click on the generated link to display the contract in ",(0,i.kt)(o.Z,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev")," indexer (it may take up to a dozen of seconds for BCD to synchronize with the blockchain). It shows the origination cost of 0.39\ua729."),(0,i.kt)("h3",{id:"from-michelson"},"From Michelson"),(0,i.kt)("p",null,"In order to originate from the Michelson version (available in ",(0,i.kt)("inlineCode",{parentName:"p"},"contract")," folder), enter the following command :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'completium-cli originate ./contract/ownership.tz --init \'(Pair "tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw" (Pair 0x68746ecbcd72793aefda48f1b67a3190fc380a7633055d2336fb90cd990582a2 (Pair "tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw" (Pair 0 (Pair 1624952132 0)))))\'\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Replace ",(0,i.kt)("em",{parentName:"p"},"twice")," address ",(0,i.kt)("inlineCode",{parentName:"p"},"tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw")," by the faucet address you imported\n(run ",(0,i.kt)("inlineCode",{parentName:"p"},"completium-cli show account")," to display the address - Public Key hash)."))),(0,i.kt)("h2",{id:"contract-api"},"Contract API"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is for information only, no action is required."))),(0,i.kt)("p",null,"This section presents the ",(0,i.kt)(o.Z,{to:"/docs/dapp-first/contract#copy-contract-code",mdxType:"Link"},"contract")," API."),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"The contract stores the asset id and the owner address:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Initial Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"assetId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Hash code of the asset."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x68746e...")," (see below)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"owner")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"Address of the current asset owner."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tz1M...ACw")," (see below)")))),(0,i.kt)("p",null,"It stores 4 extra variables used to implement the transfer of ownership process:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Initial Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bestbidder")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"Address of the best bidder; it is equal to the owner address when asset is not for sale."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"owner"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bestbid")),(0,i.kt)("td",{parentName:"tr",align:"left"},"tez"),(0,i.kt)("td",{parentName:"tr",align:null},"Best bid amount."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0tz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"endofbid")),(0,i.kt)("td",{parentName:"tr",align:"left"},"date"),(0,i.kt)("td",{parentName:"tr",align:null},"Date of the end of bid."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"now")," (date of origination)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_state")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Value is either 0 (not for sale) or 1 (for sale)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")," (not for sale)")))),(0,i.kt)("h3",{id:"entrypoints"},"Entrypoints"),(0,i.kt)("p",null,"The ownership contract provides three entrypoints:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter(s)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"upforsale")),(0,i.kt)("td",{parentName:"tr",align:null},"minimum selling price"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Called by current owner to open bid process. Resulting contract state is ",(0,i.kt)("inlineCode",{parentName:"td"},"ForSale"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bid")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Called by anyone. It requires: ",(0,i.kt)("ul",null," ",(0,i.kt)("li",null,"the asset to be up for sale"),(0,i.kt)("li",null,"the bid period is not over"),(0,i.kt)("li",null,"the transferred amount is above the current best bid amount"))," If these conditions are met, it transfers back the previous best bid amount to the previous best bidder, and updates the ",(0,i.kt)("inlineCode",{parentName:"td"},"bestbidder")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"bestbid")," variables with new values; ",(0,i.kt)("inlineCode",{parentName:"td"},"endofbid")," is incremented by 2 minutes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"claim")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Called by anyone. It requires: ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"the asset to be up for sale"),(0,i.kt)("li",null,"the bid period to be over")),"If these condidions are met, it transfers the best bid value to the previous owner, and sets the ",(0,i.kt)("inlineCode",{parentName:"td"},"owner"),' variable to the best bidder address. Contract state is set back to "not for sale".')))))}k.isMDXComponent=!0}}]);