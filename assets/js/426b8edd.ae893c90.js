(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[6698],{3079:function(e,t,a){"use strict";var i=a(7294),n=a(282),o=a(9277),r=a(3457),s=a(6742),l=a(4996);t.Z=function(e){var t=i.useMemo((function(){return(0,o.Z)({palette:{type:"dark"}})}),[!0]);return i.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},i.createElement(r.Z,{theme:t},e.internal?i.createElement(n.Z,{variant:"outlined",size:"large",component:s.Z,to:(0,l.Z)("docs/"+e.url+"/")},e.txt):i.createElement(n.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(e.url,"_blank")}},e.txt)))}},807:function(e,t,a){"use strict";a(7294),a(4996)},5392:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return k}});var i=a(2122),n=a(9756),o=(a(7294),a(3905)),r=(a(807),a(7134)),s=a(3079),l=a(6742),p=["components"],c={id:"game1",title:"2048 Competition",sidebar_label:"Introduction",slug:"/dapp-game"},d=void 0,u={unversionedId:"dapp-game/game1",id:"dapp-game/game1",isDocsHomePage:!1,title:"2048 Competition",description:"Introduction",source:"@site/docs/dapp-game/game1.md",sourceDirName:"dapp-game",slug:"/dapp-game",permalink:"/docs/dapp-game",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-game/game1.md",version:"current",frontMatter:{id:"game1",title:"2048 Competition",sidebar_label:"Introduction",slug:"/dapp-game"},sidebar:"dapps",previous:{title:"Interactions",permalink:"/docs/dapp-ideabox/interactions"},next:{title:"Presentation",permalink:"/docs/dapp-game/Presentation"}},m=[{value:"Introduction",id:"introduction",children:[]},{value:"DApp",id:"dapp",children:[{value:"Architecture",id:"architecture",children:[]},{value:"Benefits",id:"benefits",children:[]},{value:"Discussion",id:"discussion",children:[]}]}],h={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{img:"2048-screen.png",width:"100%",mdxType:"DappFigure"}),(0,o.kt)(s.Z,{url:"https://edukera.github.io/completium-dapp-2048/",txt:"open dapp",mdxType:"DappButton"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Win the competion of the famous ",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/2048_(video_game)",target:"_blank"},"2048")," game by obtaining the highest score."),(0,o.kt)("p",null,"The 2048 game consists in sliding numbered tiles that pops up at ",(0,o.kt)("em",{parentName:"p"},"random")," position on the grid after each sliding move. Sliding a tile on top of another make the tiles merge and increases the value of the resulting tile. The goal is to obtain a 2048 valued tile."),(0,o.kt)("p",null,"The challenge is to guarantee contestants that the competition is fair, that is that the highest submitted score gets the prize, and that scores cannot be artificially manufactured."),(0,o.kt)("h2",{id:"dapp"},"DApp"),(0,o.kt)("p",null,"This example DApp illustrates how to organize a fair competition with the help of the Tezos blockchain."),(0,o.kt)("p",null,"A new score is stored in the DApp's ",(0,o.kt)(l.Z,{to:"/docs/templates/competition",mdxType:"Link"},"smart contract")," storage by invoking the ",(0,o.kt)(l.Z,{to:"/docs/dapp-game/interface#submit",mdxType:"Link"},"submit")," entry point. How to prevent anyone from storing any arbitrary score ?"),(0,o.kt)("p",null,"A standard solution is to use an ",(0,o.kt)("em",{parentName:"p"},"Oracle")," which is an off-chain process whose role is to guaranty the validity of the data stored in the smart contract by ",(0,o.kt)(l.Z,{to:"/docs/dapp-tools/tezos#signing-data",mdxType:"Link"},"signing")," the data."),(0,o.kt)("p",null,"In order to accept a score, the smart contract verifies that the score is signed by the Oracle."),(0,o.kt)("p",null,"How does the ",(0,o.kt)("em",{parentName:"p"},"Oracle")," guarantee that the score is correct?"),(0,o.kt)(r.Z,{img:"game-oracle.png",width:"60%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"For that, the Oracle needs to get the list of moves to compute the score and sign it. However what does prevent anyone to build an artificial session with highest score and have it signed?"),(0,o.kt)("p",null,"The solution is that the Oracle generates the random tiles positions from a ",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Random_seed",target:"_blank"},"seeded")," Random Number Generator: the request to sign a score requires to provide the oracle with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a unique session id"),(0,o.kt)("li",{parentName:"ul"},"the list of moves")),(0,o.kt)("p",null,"The unique session id is internally associated with a seed for the Oracle to regenerate the session and compute score with the gamer's moves."),(0,o.kt)("p",null,"As a consequence each game is associated to a unique session id provided by the Oracle. It is displayed in the upper right hand corner of the DApp's web interface:"),(0,o.kt)(r.Z,{img:"game-sessionid.png",width:"60%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"Note that the random seed is not (and must no be) known by the player. Note also this implies that the Orcale is solicited at each player move for the next tile position."),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The Dapp architecture is 3-tier:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)(l.Z,{to:"/docs/templates/competition",mdxType:"Link"},"smart contract")," to store Oracle-signed scores and declare winner"),(0,o.kt)("li",{parentName:"ul"},"User web interface for customer to exchange miles (consume) for rewards"),(0,o.kt)("li",{parentName:"ul"},"Game ",(0,o.kt)("em",{parentName:"li"},"oracle")," that:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"provides a new unique session id at each new game session"),(0,o.kt)("li",{parentName:"ul"},"provides with random tile position"),(0,o.kt)("li",{parentName:"ul"},"sign score from list of moves")))),(0,o.kt)("p",null,"Interactions between these three elements are illustrated in the schema below:"),(0,o.kt)(r.Z,{img:"game-archi.svg",width:"80%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"The smart contract provides other entry points for administration purpose. The complete interface is presented ",(0,o.kt)(l.Z,{to:"/docs/dapp-game/interface",mdxType:"Link"},"here"),"."),(0,o.kt)("p",null,"In this DApp example, for simplicity purpose, the Oracle server is ",(0,o.kt)("u",null,"not provided")," as a separate entity, but rather embedded in the web interface. You are invited to implement a stand alone operational version of the Oracle."),(0,o.kt)("p",null,"Inspect the smart contract transactions in ",(0,o.kt)(l.Z,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better Call Dev"),":"),(0,o.kt)(s.Z,{url:"https://better-call.dev/edo2net/KT1UTJoUXgyXPW34wca92dGfiP4tjQyrG64f/operations",txt:"inspect smart contract",mdxType:"DappButton"}),(0,o.kt)("h3",{id:"benefits"},"Benefits"),(0,o.kt)("p",null,"The DApp architecture provides out a the box a high level of security and an auditable process to figure out the origin of a score."),(0,o.kt)("p",null,"Beside the blockchain security features (immutability, transparent business logic), the remaining security challenges are on the Oracle part:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"keep Oracle's private key private"),(0,o.kt)("li",{parentName:"ul"},"keep the random seeds private"),(0,o.kt)("li",{parentName:"ul"},"provide activity log and code source for anyone to be able to reproduce score computation")),(0,o.kt)("p",null,"Indeed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"anyone with the private key could sign any score in place of the Oracle"),(0,o.kt)("li",{parentName:"ul"},"anyone with the random seed could build a game session with arbitrary high score")),(0,o.kt)("h3",{id:"discussion"},"Discussion"),(0,o.kt)("p",null,"Could the score computation process be performed by the smart contract?"),(0,o.kt)("p",null,"Why not? Indeed this would almost remove the need for an Oracle to sign the score."),(0,o.kt)("p",null,"However this does not remove the need for a secure Random Number Generator that is kept secret. Moreover, due to its highly replicated nature, a blockchain is not designed for intensive CPU/storage tasks: indeed each node runs the call to smart contracts; that's why such tasks are controlled in several ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"smart contract storage (including execution code) is limited"),(0,o.kt)("li",{parentName:"ul"},"transaction cost is proportional to execution complexity")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The blockchain is not designed for CPU/storage intensive tasks. Such tasks are handled by off-chain ",(0,o.kt)("em",{parentName:"p"},"Oracle")," process."))))}k.isMDXComponent=!0}}]);