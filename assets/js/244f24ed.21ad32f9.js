"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[5478],{8215:function(n,e,t){var a=t(7294);e.Z=function(n){var e=n.children,t=n.hidden,r=n.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},6396:function(n,e,t){t.d(e,{Z:function(){return I}});var a=t(7462),r=t(7294),l=t(2389),i=t(9443);var o=function(){var n=(0,r.useContext)(i.Z);if(null==n)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return n},d=t(1968),u=t(6010),s="tabItem_1uMI";function P(n){var e,t,a,l=n.lazy,i=n.block,P=n.defaultValue,I=n.values,p=n.groupId,c=n.className,D=r.Children.map(n.children,(function(n){if((0,r.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=I?I:D.map((function(n){var e=n.props;return{value:e.value,label:e.label}})),m=(0,d.lx)(N,(function(n,e){return n.value===e.value}));if(m.length>0)throw new Error('Docusaurus error: Duplicate values "'+m.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===P?P:null!=(e=null!=P?P:null==(t=D.find((function(n){return n.props.default})))?void 0:t.props.value)?e:null==(a=D[0])?void 0:a.props.value;if(null!==A&&!N.some((function(n){return n.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+N.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var U=o(),R=U.tabGroupChoices,k=U.setTabGroupChoices,S=(0,r.useState)(A),b=S[0],E=S[1],h=[],G=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var f=R[p];null!=f&&f!==b&&N.some((function(n){return n.value===f}))&&E(f)}var y=function(n){var e=n.currentTarget,t=h.indexOf(e),a=N[t].value;a!==b&&(G(e),E(a),null!=p&&k(p,a))},T=function(n){var e,t=null;switch(n.key){case"ArrowRight":var a=h.indexOf(n.currentTarget)+1;t=h[a]||h[0];break;case"ArrowLeft":var r=h.indexOf(n.currentTarget)-1;t=h[r]||h[h.length-1]}null==(e=t)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},c)},N.map((function(n){var e=n.value,t=n.label;return r.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":b===e}),key:e,ref:function(n){return h.push(n)},onKeyDown:T,onFocus:y,onClick:y},null!=t?t:e)}))),l?(0,r.cloneElement)(D.filter((function(n){return n.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},D.map((function(n,e){return(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==b})}))))}function I(n){var e=(0,l.Z)();return r.createElement(P,(0,a.Z)({key:String(e)},n))}},8508:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return P},toc:function(){return I},default:function(){return c}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=(t(9960),t(6396)),o=t(8215),d=["components"],u={id:"template11",title:"Escrow",sidebar_label:"Escrow",slug:"/templates/escrow"},s=void 0,P={unversionedId:"templates/template11",id:"templates/template11",title:"Escrow",description:"Introduction",source:"@site/docs/templates/template11.md",sourceDirName:"templates",slug:"/templates/escrow",permalink:"/docs/templates/escrow",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/templates/template11.md",tags:[],version:"current",frontMatter:{id:"template11",title:"Escrow",sidebar_label:"Escrow",slug:"/templates/escrow"},sidebar:"templates",previous:{title:"Autocallable note",permalink:"/docs/templates/acn"},next:{title:"Miles",permalink:"/docs/templates/miles"}},I=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"API",id:"api",children:[{value:"Storage",id:"storage",children:[],level:3},{value:"Entrypoints",id:"entrypoints",children:[],level:3}],level:2},{value:"Code",id:"code",children:[],level:2}],p={toc:I};function c(n){var e=n.components,t=(0,r.Z)(n,d);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"The escrow smart contract establishes a decentralized purchase process between the seller and buyer. The principle is that the price amount is escrowed in the smart contract and released when the purchased item is received by buyer."),(0,l.kt)("p",null,"The critical point of the process is that it requires actions from the buyer and the seller to complete the process:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"if the seller does not send the item, buyer's fund are locked in the escrow"),(0,l.kt)("li",{parentName:"ul"},"if the buyer does not complete the process, even if the item is received, then the seller does not reveive payment")),(0,l.kt)("p",null,"In order to motivate both the seller and the buyer to execute the process, the basic idea is that they fund the escrow with ",(0,l.kt)("em",{parentName:"p"},"security deposits")," that are transferred back only if the process is complete. In the escrow presented here, security deposits are a proportion of the price of the item."),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"storage"},"Storage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seller")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"Seller's address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buyer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"Buyer's address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"taxcollecter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"Tax collector's address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"price")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tez")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of transaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"taxrate")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rational")),(0,l.kt)("td",{parentName:"tr",align:null},"Tax rate applied to ",(0,l.kt)("inlineCode",{parentName:"td"},"price"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"securityrate")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rational")),(0,l.kt)("td",{parentName:"tr",align:null},"Security rate applied to ",(0,l.kt)("inlineCode",{parentName:"td"},"price")," for security deposit.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_state")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"states")),(0,l.kt)("td",{parentName:"tr",align:null},"Escrow state, one of ",(0,l.kt)("inlineCode",{parentName:"td"},"Create"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Aborted"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Funded"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Completed"))))),(0,l.kt)("h3",{id:"entrypoints"},"Entrypoints"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"abort")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buyer")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"seller")," can abort escrow in ",(0,l.kt)("inlineCode",{parentName:"td"},"Created")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toFunded")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Internally called by escrow to go to ",(0,l.kt)("inlineCode",{parentName:"td"},"Funded")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fund")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called by ",(0,l.kt)("inlineCode",{parentName:"td"},"buyer")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"seller")," to provide funds:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"buyer")," must transfer price, security deposit and taxes "),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"seller")," must transfer security deposit.")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"complete")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called by ",(0,l.kt)("inlineCode",{parentName:"td"},"buyer")," when purchased item is received. This transfers:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"item price and security deposit to ",(0,l.kt)("inlineCode",{parentName:"td"},"seller")),(0,l.kt)("li",null,"security deposit to ",(0,l.kt)("inlineCode",{parentName:"td"},"buyer")),(0,l.kt)("li",null,"tax to ",(0,l.kt)("inlineCode",{parentName:"td"},"taxcollector"))))))),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)(i.Z,{defaultValue:"archetype",values:[{label:"Archetype",value:"archetype"},{label:"Michelson",value:"michelson"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"archetype",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-archetype",metastring:'title="escrow.arl"',title:'"escrow.arl"'},'archetype escrow(\nseller       : address,\nbuyer        : address,\ntaxcollector : address,\nprice        : tez,\ntaxrate      : rational,\nsecurityrate : rational,\n)\n\nvariable buyer_funded  : bool = false\nvariable seller_funded : bool = false\n\n(* states *)\nstates =\n | Created initial\n | Aborted\n | Funded\n | Completed\n\ntransition abort () {\n  called by buyer or seller\n  from Created to Aborted\n}\n\ntransition toFunded () {\n  called by selfaddress\n  from Created to Funded\n}\n\nentry fund () {\n  called by buyer or seller\n  effect {\n    if caller = buyer then begin\n      dorequire(transferred >= (1 + taxrate + securityrate) * price, "NOT_ENOUGH_FUND");\n      buyer_funded := true\n    end else if caller = seller then begin\n      dorequire(transferred >= securityrate * price, "NOT_ENOUGH_FUND");\n      seller_funded := true\n    end;\n    if buyer_funded and seller_funded then\n      transfer 0tz to entry self.toFunded()\n  }\n}\n\ntransition complete () {\n  called by buyer\n  from Funded to Completed\n  with effect {\n    transfer ((1 + securityrate) * price) to seller;\n    transfer (securityrate * price)       to buyer;\n    if taxrate > 0 then\n      transfer (taxrate * price)          to taxcollector;\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"michelson",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'# (Pair seller (Pair buyer (Pair taxcollector (Pair price (Pair taxrate (Pair securityrate (Pair False (Pair False 0))))))))\n{\n  storage (pair (address %seller) (pair (address %buyer) (pair (address %taxcollector) (pair (mutez %price) (pair (pair %taxrate int nat) (pair (pair %securityrate int nat) (pair (bool %buyer_funded) (pair (bool %seller_funded) (nat %_state)))))))));\n  parameter (or (unit %abort) (or (unit %toFunded) (or (unit %fund) (unit %complete))));\n  code { LAMBDA\n           (pair (pair (pair int nat) (pair int nat)) (or unit (or (or unit unit) (or unit unit))))\n           bool\n           { UNPAIR;\n             UNPAIR;\n             DIP { UNPAIR };\n             UNPAIR;\n             DUG 3;\n             MUL;\n             DIP { MUL };\n             SWAP;\n             COMPARE;\n             SWAP;\n             IF_LEFT\n               { DROP;\n                 EQ }\n               { IF_LEFT\n                   { IF_LEFT\n                       { DROP;\n                         LT }\n                       { DROP;\n                         LE } }\n                   { IF_LEFT\n                       { DROP;\n                         GT }\n                       { DROP;\n                         GE } } } };\n         NIL operation;\n         DIG 2;\n         UNPAIR;\n         DIP { UNPAIR; SWAP; UNPAIR; SWAP; UNPAIR; SWAP; UNPAIR; SWAP; UNPAIR; SWAP; UNPAIR; SWAP; UNPAIR; SWAP; UNPAIR; SWAP };\n         IF_LEFT\n           { DROP;\n             DIG 8;\n             DUP;\n             DUG 9;\n             SENDER;\n             COMPARE;\n             EQ;\n             DIG 8;\n             DUP;\n             DUG 9;\n             SENDER;\n             COMPARE;\n             EQ;\n             OR;\n             NOT;\n             IF\n               { PUSH string "InvalidCaller";\n                 FAILWITH }\n               {  };\n             DUP;\n             DUP;\n             PUSH nat 0;\n             COMPARE;\n             EQ;\n             IF\n               { PUSH nat 1;\n                 DIP { DIG 1; DROP };\n                 DUG 1 }\n               { PUSH string "InvalidState";\n                 FAILWITH };\n             DROP;\n             SWAP;\n             PAIR;\n             SWAP;\n             PAIR;\n             SWAP;\n             PAIR;\n             SWAP;\n             PAIR;\n             SWAP;\n             PAIR;\n             SWAP;\n             PAIR;\n             SWAP;\n             PAIR;\n             SWAP;\n             PAIR;\n             DIG 1;\n             PAIR }\n           { IF_LEFT\n               { DROP;\n                 SELF;\n                 ADDRESS;\n                 SENDER;\n                 COMPARE;\n                 EQ;\n                 NOT;\n                 IF\n                   { PUSH string "InvalidCaller";\n                     FAILWITH }\n                   {  };\n                 DUP;\n                 DUP;\n                 PUSH nat 0;\n                 COMPARE;\n                 EQ;\n                 IF\n                   { PUSH nat 2;\n                     DIP { DIG 1; DROP };\n                     DUG 1 }\n                   { PUSH string "InvalidState";\n                     FAILWITH };\n                 DROP;\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 DIG 1;\n                 PAIR }\n               { IF_LEFT\n                   { DROP;\n                     DIG 8;\n                     DUP;\n                     DUG 9;\n                     SENDER;\n                     COMPARE;\n                     EQ;\n                     DIG 8;\n                     DUP;\n                     DUG 9;\n                     SENDER;\n                     COMPARE;\n                     EQ;\n                     OR;\n                     NOT;\n                     IF\n                       { PUSH string "InvalidCaller";\n                         FAILWITH }\n                       {  };\n                     DIG 7;\n                     DUP;\n                     DUG 8;\n                     SENDER;\n                     COMPARE;\n                     EQ;\n                     IF\n                       { DIG 5;\n                         DUP;\n                         DUG 6;\n                         UNIT;\n                         LEFT unit;\n                         DIG 5;\n                         DUP;\n                         DUG 6;\n                         UNIT;\n                         LEFT unit;\n                         DIG 8;\n                         DUP;\n                         DUG 9;\n                         PUSH nat 1;\n                         PUSH nat 1;\n                         INT;\n                         PAIR;\n                         PAIR;\n                         PAIR;\n                         UNPAIR;\n                         UNPAIR;\n                         DIP { UNPAIR; SWAP; DUP };\n                         UNPAIR;\n                         SWAP;\n                         DUP;\n                         DIG 3;\n                         MUL;\n                         DUG 4;\n                         DIG 3;\n                         MUL;\n                         DIP { MUL };\n                         DIG 3;\n                         IF_LEFT\n                           { DROP;\n                             ADD }\n                           { DROP;\n                             SWAP;\n                             SUB };\n                         PAIR;\n                         PAIR;\n                         PAIR;\n                         UNPAIR;\n                         UNPAIR;\n                         DIP { UNPAIR; SWAP; DUP };\n                         UNPAIR;\n                         SWAP;\n                         DUP;\n                         DIG 3;\n                         MUL;\n                         DUG 4;\n                         DIG 3;\n                         MUL;\n                         DIP { MUL };\n                         DIG 3;\n                         IF_LEFT\n                           { DROP;\n                             ADD }\n                           { DROP;\n                             SWAP;\n                             SUB };\n                         PAIR;\n                         PAIR;\n                         UNPAIR;\n                         UNPAIR;\n                         ABS;\n                         DIG 2;\n                         MUL;\n                         EDIV;\n                         IF_NONE\n                           { PUSH string "DivByZero";\n                             FAILWITH }\n                           {  };\n                         CAR;\n                         AMOUNT;\n                         COMPARE;\n                         GE;\n                         NOT;\n                         IF\n                           { PUSH string "NOT_ENOUGH_FUND";\n                             FAILWITH }\n                           {  };\n                         PUSH bool True;\n                         DIP { DIG 2; DROP };\n                         DUG 2 }\n                       { DIG 8;\n                         DUP;\n                         DUG 9;\n                         SENDER;\n                         COMPARE;\n                         EQ;\n                         IF\n                           { DIG 5;\n                             DUP;\n                             DUG 6;\n                             DIG 4;\n                             DUP;\n                             DUG 5;\n                             PAIR;\n                             UNPAIR;\n                             UNPAIR;\n                             ABS;\n                             DIG 2;\n                             MUL;\n                             EDIV;\n                             IF_NONE\n                               { PUSH string "DivByZero";\n                                 FAILWITH }\n                               {  };\n                             CAR;\n                             AMOUNT;\n                             COMPARE;\n                             GE;\n                             NOT;\n                             IF\n                               { PUSH string "NOT_ENOUGH_FUND";\n                                 FAILWITH }\n                               {  };\n                             PUSH bool True;\n                             DIP { DIG 1; DROP };\n                             DUG 1 }\n                           {  } };\n                     DIG 1;\n                     DUP;\n                     DUG 2;\n                     DIG 3;\n                     DUP;\n                     DUG 4;\n                     AND;\n                     IF\n                       { DIG 9;\n                         DUP;\n                         DUG 10;\n                         SELF;\n                         ADDRESS;\n                         CONTRACT %toFunded unit;\n                         IF_NONE\n                           { PUSH string "BadContract";\n                             FAILWITH }\n                           {  };\n                         PUSH mutez 0;\n                         UNIT;\n                         TRANSFER_TOKENS;\n                         CONS;\n                         DIP { DIG 9; DROP };\n                         DUG 9 }\n                       {  };\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     DIG 1;\n                     PAIR }\n                   { DROP;\n                     DIG 7;\n                     DUP;\n                     DUG 8;\n                     SENDER;\n                     COMPARE;\n                     EQ;\n                     NOT;\n                     IF\n                       { PUSH string "InvalidCaller";\n                         FAILWITH }\n                       {  };\n                     DUP;\n                     DUP;\n                     PUSH nat 2;\n                     COMPARE;\n                     EQ;\n                     IF\n                       { DIG 10;\n                         DUP;\n                         DUG 11;\n                         DIG 10;\n                         DUP;\n                         DUG 11;\n                         CONTRACT unit;\n                         IF_NONE\n                           { PUSH string "BadContract";\n                             FAILWITH }\n                           {  };\n                         DIG 8;\n                         DUP;\n                         DUG 9;\n                         UNIT;\n                         LEFT unit;\n                         DIG 8;\n                         DUP;\n                         DUG 9;\n                         PUSH nat 1;\n                         PUSH nat 1;\n                         INT;\n                         PAIR;\n                         PAIR;\n                         PAIR;\n                         UNPAIR;\n                         UNPAIR;\n                         DIP { UNPAIR; SWAP; DUP };\n                         UNPAIR;\n                         SWAP;\n                         DUP;\n                         DIG 3;\n                         MUL;\n                         DUG 4;\n                         DIG 3;\n                         MUL;\n                         DIP { MUL };\n                         DIG 3;\n                         IF_LEFT\n                           { DROP;\n                             ADD }\n                           { DROP;\n                             SWAP;\n                             SUB };\n                         PAIR;\n                         PAIR;\n                         UNPAIR;\n                         UNPAIR;\n                         ABS;\n                         DIG 2;\n                         MUL;\n                         EDIV;\n                         IF_NONE\n                           { PUSH string "DivByZero";\n                             FAILWITH }\n                           {  };\n                         CAR;\n                         UNIT;\n                         TRANSFER_TOKENS;\n                         CONS;\n                         DIP { DIG 10; DROP };\n                         DUG 10;\n                         DIG 10;\n                         DUP;\n                         DUG 11;\n                         DIG 9;\n                         DUP;\n                         DUG 10;\n                         CONTRACT unit;\n                         IF_NONE\n                           { PUSH string "BadContract";\n                             FAILWITH }\n                           {  };\n                         DIG 8;\n                         DUP;\n                         DUG 9;\n                         DIG 7;\n                         DUP;\n                         DUG 8;\n                         PAIR;\n                         UNPAIR;\n                         UNPAIR;\n                         ABS;\n                         DIG 2;\n                         MUL;\n                         EDIV;\n                         IF_NONE\n                           { PUSH string "DivByZero";\n                             FAILWITH }\n                           {  };\n                         CAR;\n                         UNIT;\n                         TRANSFER_TOKENS;\n                         CONS;\n                         DIP { DIG 10; DROP };\n                         DUG 10;\n                         DIG 11;\n                         DUP;\n                         DUG 12;\n                         UNIT;\n                         LEFT unit;\n                         RIGHT (or unit unit);\n                         RIGHT unit;\n                         PUSH nat 1;\n                         PUSH int 0;\n                         PAIR;\n                         DIG 8;\n                         DUP;\n                         DUG 9;\n                         PAIR;\n                         PAIR;\n                         EXEC;\n                         IF\n                           { DIG 10;\n                             DUP;\n                             DUG 11;\n                             DIG 8;\n                             DUP;\n                             DUG 9;\n                             CONTRACT unit;\n                             IF_NONE\n                               { PUSH string "BadContract";\n                                 FAILWITH }\n                               {  };\n                             DIG 8;\n                             DUP;\n                             DUG 9;\n                             DIG 8;\n                             DUP;\n                             DUG 9;\n                             PAIR;\n                             UNPAIR;\n                             UNPAIR;\n                             ABS;\n                             DIG 2;\n                             MUL;\n                             EDIV;\n                             IF_NONE\n                               { PUSH string "DivByZero";\n                                 FAILWITH }\n                               {  };\n                             CAR;\n                             UNIT;\n                             TRANSFER_TOKENS;\n                             CONS;\n                             DIP { DIG 10; DROP };\n                             DUG 10 }\n                           {  };\n                         PUSH nat 3;\n                         DIP { DIG 1; DROP };\n                         DUG 1 }\n                       { PUSH string "InvalidState";\n                         FAILWITH };\n                     DROP;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     SWAP;\n                     PAIR;\n                     DIG 1;\n                     PAIR } } };\n         DIP { DROP } };\n}\n')))))}c.isMDXComponent=!0}}]);