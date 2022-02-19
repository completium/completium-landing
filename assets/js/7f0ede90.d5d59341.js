"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[8151],{2052:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return f},default:function(){return m}});var n=t(7462),i=t(3366),l=(t(7294),t(3905)),r=(t(9960),t(4996)),c=t(9750),d=["components"],o={id:"template18",title:"Raffle",sidebar_label:"Raffle",slug:"/templates/raffle"},s=void 0,p={unversionedId:"templates/template18",id:"templates/template18",title:"Raffle",description:"A raffle is a gambling game, where players buy tickets; a winning ticket is randomly picked and its owner gets the jackpot prize.",source:"@site/docs/templates/template18.md",sourceDirName:"templates",slug:"/templates/raffle",permalink:"/docs/templates/raffle",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/templates/template18.md",tags:[],version:"current",frontMatter:{id:"template18",title:"Raffle",sidebar_label:"Raffle",slug:"/templates/raffle"},sidebar:"templates",previous:{title:"Multisig",permalink:"/docs/templates/multisig"},next:{title:"Idea box",permalink:"/docs/templates/ideabox"}},f=[{value:"Picking the winning ticket",id:"picking-the-winning-ticket",children:[],level:2},{value:"Chest value",id:"chest-value",children:[],level:2},{value:"Raffle storage",id:"raffle-storage",children:[{value:"State",id:"state",children:[],level:3},{value:"Other",id:"other",children:[],level:3}],level:2},{value:"Entrypoints",id:"entrypoints",children:[{value:"<code>initialise</code>",id:"initialise",children:[],level:3},{value:"<code>buy</code>",id:"buy",children:[],level:3},{value:"<code>reveal</code>",id:"reveal",children:[],level:3},{value:"<code>transfer</code>",id:"transfer",children:[],level:3}],level:2}],h={toc:f};function m(e){var a=e.components,t=(0,i.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A raffle is a gambling game, where players buy tickets; a winning ticket is ",(0,l.kt)("em",{parentName:"p"},"randomly")," picked and its owner gets the jackpot prize."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://tezos.b9lab.com/michelson"},"Michelson")," language does ",(0,l.kt)("strong",{parentName:"p"},"not")," provide an instruction to generate a random number. We can't use the current date (value of ",(0,l.kt)("inlineCode",{parentName:"p"},"now"),") as a source of randomness either. Indeed, bakers have some control on this value for the blocks they produce, and could therefore influence the result."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The source code of the raffle contract and the orresponding test scenario are available in this ",(0,l.kt)("a",{parentName:"p",href:"https://gitlab.com/completium/archetype-raffle"},"repository"),"."))),(0,l.kt)("h2",{id:"picking-the-winning-ticket"},"Picking the winning ticket"),(0,l.kt)("p",null,"The winning ticket ",(0,l.kt)("em",{parentName:"p"},"id")," is obtained as the remainder of the euclidean division of an arbitraly large number, called here the ",(0,l.kt)("em",{parentName:"p"},"raffle key"),", by the number of ticket buyers, called here ",(0,l.kt)("em",{parentName:"p"},"players"),". For example, if the raffle key is 2022, and the number of raffle players is 87, then the winning ticket id is 21 (typically the 21st ticket)."),(0,l.kt)("p",null,"The constraint is that this raffle key must not be known by anyone, nor the players or even the admin. Indeed if someone knows in advance the raffle key, it is then possible to influence the outcome of the game by buying tickets until one of them is the winning one (there is only one ticket per address, but someone can have several addresses). As a consequence:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("em",{parentName:"li"},"raffle key")," cannot be simply stored in the contract."),(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("em",{parentName:"li"},"raffle key")," cannot be a secret that only the admin knows (for the reason above), and that the admin would pass to the contract when it is time to announce the winner. Indeed, the admin could disappear, and no winner would ever be announced.")),(0,l.kt)("p",null,"For the admin not to be the only one to know the key, each player must possess a part of the key (called here ",(0,l.kt)("em",{parentName:"p"},"partial key"),"), such that the raffle key is the sum of each player's partial key. For the player's partial key not to be known by the other players, it must be ",(0,l.kt)("em",{parentName:"p"},"encrpypted")," by the player. When it comes to selecting the winning ticket, the user is required to ",(0,l.kt)("em",{parentName:"p"},"reveal")," its key for the contract to compute the raffle key."),(0,l.kt)("p",null,"Moreover, the contract offers the possiblity for anyone to reveal a player's key. This feature may be required when the reveal operation is critical to the process: for example in a voting process, it is important to take all votes into account, even votes from users who didn't/couldn't reveal their key. A reward is sent to an account that reveals a key."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://tezos.gitlab.io/alpha/timelock.html?highlight=timelock"},"timelock")," encryption feature of the Michelson ",(0,l.kt)("inlineCode",{parentName:"p"},"chest")," data type provides the required property: a ",(0,l.kt)("em",{parentName:"p"},"timelocked")," value is encrypted strongly enough that even the most powerful computer will take more than a certain amount of time to crack it, but weakly enough that given a bit more time, any decent computer will manage to crack it. That is to say that, beyond a certain amount of time, the value may be considered public."),(0,l.kt)("h2",{id:"chest-value"},"Chest value"),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"https://gitlab.com/completium/archetype-raffle/-/blob/main/tests/00-test.js"},"raffle test example"),", the ",(0,l.kt)("em",{parentName:"p"},"chest time")," parameter imposed by the contract is ",(0,l.kt)("inlineCode",{parentName:"p"},"10000000"),"."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Note that it's probably ",(0,l.kt)("em",{parentName:"p"},"not")," a decent ",(0,l.kt)("em",{parentName:"p"},"chest time")," value since it takes only 20s to break on a standard computer ..."))),(0,l.kt)("p",null,"Player Alice's partial key is ",(0,l.kt)("inlineCode",{parentName:"p"},"123456")," and Player Jack's is ",(0,l.kt)("inlineCode",{parentName:"p"},"234567"),"."),(0,l.kt)("p",null,"To get the timelocked value, the value is first packed (turned into bytes) with the following tezos client command ",(0,l.kt)("inlineCode",{parentName:"p"},"hash data"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ tezos-client -E https://hangzhounet.smartpy.io hash data '123456' of type nat\nWarning:\n\n                 This is NOT the Tezos Mainnet.\n\n           Do NOT use your fundraiser keys on this network.\n\nRaw packed data: 0x050080890f\n")),(0,l.kt)("p",null,"We then use the Completium ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/completium/timelock-utils"},"timelock-utils")," tool to timelock the packed data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ timelock-utils --lock --data 050080890f --time 100000\n{\n  "chest":\n    "c5ecdde89eb8c1e7aaeb85abb8f5e5cef3b4fa80c4aee2fccbf0a78ce0debaa5e9ddede3ddfbd9abdea28cc7dc99e6d3a9baf3cbae9adaaabc89cbc39e97e2c7a6cba99197d19ba09ddfd181afc997ffbcc5acb2d29ecbb698c2cacbdd83d1b4ced0bffe9cd78295b3fba4d9f9d5f4d4ec9ad3c7e1a8eeb9dba5cbd8a2dbf29af8e4a4c1e4b1edacf98fccefaef9fea4f0bacdd38ecbfe81c3f9839b9e9ab8fbf5f1eabac48a9f8ca7c588eefe94d1f18bd9bcee9aecde8dd285cf9098f4e1a7eec787f3a0e0ff9cd0ce8ec5a2a4e5ecb08fce899eb5baa397fabf90de9397cebc81bbdfb386e6b4da9fd8fdd19ed9f8d684c782b0aacfeebae4f6e7d1c5c1e6a093c68081cf83b991b4ecd7b38aee92deddcad79eb9abe0a0a0c6b5909dc58495f69445fff5ae9cefe8b8beb2fb86ccf5c9ad91989bdad8a3cfbedaffa2de8bf19dc6ac8cbc8a9584fa9f85f9ba958fc6bbc09ac8e7d5f0fdb98b86c1c7d59ad7c6dfc2d2cefaf5d9db909bf0e3acd3ccc792bc9bccbab4a4febda9b685dbc39ea2a4a7b69990d3abd8b9b3d7dbc581b984f3e08a98f7f7f0e697cc8dfd88edc8c3ca8dc3b2a9ccf6cdd6d0efcc848bc8ead5858bbabfcfc1c8ecea84fd9b96a5e4eabb8c918dafe6f78d83e8e1c2e5f8ee88a4ee8dcaeeafffebfcbbfda1e9eb86c582f2eedd9299cbc0a7fce083ced8c8ddb0e7eaacb696c1fccdadcdc8e3c6f7b9de84eece9bb7919094fef4fdf6efd8b1ba8bbecb9380add4f59ddbf9a19f95facc84e9d0a99bfa93f1fcc3a0fbde9b9ce0c7e8dec6e8d1dfa7dda6f490bb9580abfdbcc0e202e5ff731c3c17d080ee430edd30979a47aa653656e11e593800000015c2ca2a23b732a72932611618ad9ea324986377591e"\n  "key":\n    "a0aceddfb3c9fbe1b8c382c7d5a7dedbe2e5adf9edcfc3e9d084caa6aeb9818ff1e985cb9efe8fa089ceeaa0f5d0bcb583e2f29196f2d3908fffffdcda868faffcb78fb697e7eaf3e7dca9d4b5dda2c3e4f8adf8abf484ecae85f7d6e0f2d28cb69af1d7b19082e8d8d7ba96e7e1e0bb8ac9b9fcf0a9e5b7c1a499c4faf4c8a3a9c8e4d09aa780eac6cee1b78a97a3e983abf9a5f1e8d2a2a2b5e3bcb8c4effeb7a3a68a85a497cd91c9a2c096c3f596deb8d1aca3a5aff28effb8cfc9c7ced892e3a7c09deeb8c8ec9387a3b384b5c8bccaafc7a9a2c1cfd8c7becfd7d6828a9af8f4988fe4ead3b59ecfb8ff8cabf8be90d4c8bdbddfce9cd7c2bb81edc4b7ad80a59a978f8c9debe7aaf08cf0c588f3eaade6b9f4e4e6edf1ed9c9988e48d9ba0aa8f01d18bac92b886db9dd798b5f6fdc891a28da2c4c48da1918897a2b7c2dfa0b78ab8e291b68fb1a2bfa5e8b88e9cabb0b5b0feabcffc9cfeee888ac4afeed9dc8bf5a4eaa9ae89a3838cf6cfd4f8acff8fa7aef7a9889fbbc7d8f6dde4edf3e58096e580e299e5b082b9cf85f3fe8ac6c0998eb1bcbab9bfb8fba39faea7bce0f6fed9ea86dfdad58cf7cbc7fcc4ecf7e2e898d3b19582e38c8092b7e4a0cddc83eb8bc38d91fefed6be869496b8e4fc99d5fae5c6a2b2dcabe2a4ea85b68b87b182d7e8cac29fe0b9efd6d0eb999ffa98aaaf9bf09fe7c4b39d81db97e4e7bbaef0e3bfedd69d9089bc8d91b292afa6c8b389fc9fb7aaa8decab6d9b493a6eafaa5baffe8fb85f2d483ecd1f2d1e58f938df9d8d5e385fe96c5f58ae1e0b09bf2b3c2931f"\n}\n')),(0,l.kt)("p",null,"The timelock encryption generates a chest value, and the key to unlock it."),(0,l.kt)("h2",{id:"raffle-storage"},"Raffle storage"),(0,l.kt)("p",null,"The contract is originated with the following parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"owner")," is the address of the contract administrator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"jackpot")," is the prize in tez"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ticket_price")," speaks for itslef")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype raffle(\n  owner        : address,\n  jackpot      : tez,\n  ticket_price : tez)\n")),(0,l.kt)("h3",{id:"state"},"State"),(0,l.kt)("p",null,"The contract holds:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a state with 3 possible values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Created")," is the initial state during which tickets cannot be bought yet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Initialised")," is the state when the administrator initialises the raffle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Transferred")," is the state when prize has been transferred to the winner")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"states =\n| Created initial\n| Initialised\n| Transferred\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the open date beyond which tickets can be bought, initialized to ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),":"),(0,l.kt)("li",{parentName:"ul"},"the date beyond which tickets cannot be bought, initialized to ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),":"),(0,l.kt)("li",{parentName:"ul"},"the date beyond which player's partial key cannot be revealed, initialized to ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"variable open_buy     : option<date> = none\nvariable close_buy    : option<date> = none\nvariable close_reveal : option<date> = none\n")),(0,l.kt)("p",null,"The schema below illustrates the periods defined by these dates, and the contract's states:"),(0,l.kt)(c.Z,{alt:"Raffle schema",width:"80%",sources:{light:(0,r.Z)("img/schema.light.svg"),dark:(0,r.Z)("img/schema.dark.svg")},mdxType:"ThemedImage"}),(0,l.kt)("h3",{id:"other"},"Other"),(0,l.kt)("p",null,"The contract also holds:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the reveal fee, initialized to ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"variable reveal_fee : option<rational> = none\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the time used to generate the timelocked value of the raffle key (it should be high enough to be compliant with the close date), initialized to ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"variable chest_time : option<nat> = none\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a collection that will contain the addresses of all players and their raffle key:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"asset player {\n  id                 : address;\n  locked_raffle_key  : chest;        (* partial key *)\n  revealed           : bool = false;\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the raffle key, updated when a player's partial key is revealed:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},"variable raffle_key  : nat = 0\n")),(0,l.kt)("h2",{id:"entrypoints"},"Entrypoints"),(0,l.kt)("h3",{id:"initialise"},(0,l.kt)("inlineCode",{parentName:"h3"},"initialise")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"initialise"),' entrypoint is called by the contract admin (called "',(0,l.kt)("em",{parentName:"p"},"owner"),'") to set the main raffle parameters:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"open buy")," is the date beyond which players can buy ticket"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"close buy")," is the date beyond which players cannot buy ticket"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"close reveal")," is the date beyond which players cannot reveal key"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"chest time")," is the difficulty to break players' partial raffle key encryption"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"reveal fee")," the pourcentage of ticket price transferred when revealing a player's raffle key")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Currently you may count from a chest time of 500","\xa0","000 per second on a standard computer, to a chest time value of 500","\xa0","000","\xa0","000 per second on dedicated hardware."))),(0,l.kt)("p",null,"It requires that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the reveal period duration be greater or equal to the buy period duration"),(0,l.kt)("li",{parentName:"ul"},"th reveal fee be equal to or less than 1"),(0,l.kt)("li",{parentName:"ul"},"the transferred amount of tez be equal to the ",(0,l.kt)("inlineCode",{parentName:"li"},"jackpot")," storage value")),(0,l.kt)("p",null,"It transitions from ",(0,l.kt)("inlineCode",{parentName:"p"},"Created")," state to ",(0,l.kt)("inlineCode",{parentName:"p"},"Initialised"),", and sets the raffle parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'transition initialise(ob : date, cb : date, cr : date, t : nat, rf : rational) {\n  called by owner\n  require {\n    r0 : now <= ob < cb and cb - ob <= cr - cb otherwise "INVALID_OPEN_CLOSE_BUY_REVEAL";\n    r1 : rf <= 1                               otherwise "INVALID_REVEAL_FEE";\n    r2 : transferred = jackpot                 otherwise "INVALID_AMOUNT"\n  }\n  from Created to Initialised\n  with effect {\n    open_buy     := some(ob);\n    close_buy    := some(cb);\n    close_reveal := some(cr);\n    chest_time   := some(t);\n    reveal_fee   := some(rf)\n  }\n}\n')),(0,l.kt)("h3",{id:"buy"},(0,l.kt)("inlineCode",{parentName:"h3"},"buy")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"buy")," entrypoint may be called by anyone to buy a ticket. The player must transfer the encrypted value of the partial raffle key, so that the partial key value may be potentially publically known when it comes to declaring the winner ticket."),(0,l.kt)("p",null,"It requires that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the contract be in ",(0,l.kt)("inlineCode",{parentName:"li"},"Initialised")," state"),(0,l.kt)("li",{parentName:"ul"},"the transferred amount of tez be equal to the ticket price"),(0,l.kt)("li",{parentName:"ul"},"the close date not be reached")),(0,l.kt)("p",null,"It records the caller's address in the ",(0,l.kt)("inlineCode",{parentName:"p"},"player")," collection."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'entry buy (lrk : chest) {\n  state is Initialised\n  require {\n    r3 : transferred = ticket_price                     otherwise "INVALID_TICKET_PRICE";\n    r4 : opt_get(open_buy) < now < opt_get(close_buy)   otherwise "BUY_CLOSED"\n  }\n  effect { player.add({ id = caller; locked_raffle_key = lrk }) }\n}\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"add")," method ",(0,l.kt)("em",{parentName:"p"},"fails")," with ",(0,l.kt)("inlineCode",{parentName:"p"},'(Pair "KeyExists" "player")')," if the caller is already in the collection."))),(0,l.kt)("h3",{id:"reveal"},(0,l.kt)("inlineCode",{parentName:"h3"},"reveal")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"reveal")," entry point may be called by anyone to reveal a player's ",(0,l.kt)("em",{parentName:"p"},"partial")," key and contribute to the computation of the raffle key. The caller receives a percentage of the ticket price as a reward."),(0,l.kt)("p",null,"It requires that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the contract be in ",(0,l.kt)("inlineCode",{parentName:"li"},"Initialised")," state"),(0,l.kt)("li",{parentName:"ul"},"the close date has been reached")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'entry reveal(addr : address, k : chest_key) {\n  state is Initialised\n  require {\n    r5 : opt_get(close_buy) < now < opt_get(close_reveal) otherwise "REVEAL_CLOSED";\n    r6 : not player[addr].revealed                        otherwise "PLAYER_ALREADY_REVEALED"\n  }\n  effect {\n    match open_chest(k, player[addr].locked_raffle_key, opt_get(chest_time)) with\n    | left (unlocked) -> raffle_key += opt_get(unpack<nat>(unlocked))\n    | right(error)    -> fail("INVALID_TIMELOCK")\n    end;\n    player[addr].revealed := true;\n    transfer (opt_get(reveal_fee) * ticket_price) to caller;\n  }\n}\n')),(0,l.kt)("h3",{id:"transfer"},(0,l.kt)("inlineCode",{parentName:"h3"},"transfer")),(0,l.kt)("p",null,"When the reveal period is over, anyone can call the ",(0,l.kt)("inlineCode",{parentName:"p"},"transfer")," entrypoint to transfer the jackpot to the the winning ticket; not revealed players are ignored. It transitions to ",(0,l.kt)("inlineCode",{parentName:"p"},"Transferred")," state:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype"},'transition %transfer() {\n  require {\n    r7: opt_get(close_reveal) < now otherwise "TRANSFER_CLOSED"\n  }\n  from Initialised to Transferred\n  with effect {\n    player.removeif(not the.revealed);\n    transfer balance to player.nth(raffle_key % player.count());\n  }\n}\n')))}m.isMDXComponent=!0}}]);