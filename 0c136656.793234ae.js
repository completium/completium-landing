(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return p})),i.d(t,"metadata",(function(){return b})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return d}));var n=i(3),o=i(7),a=(i(0),i(184)),c=i(185),l=(i(186),i(187)),p={id:"iot4",title:"Switch on",sidebar_label:"Switch on",slug:"/dapp-iot/switchon"},b={unversionedId:"dapp-iot/iot4",id:"dapp-iot/iot4",isDocsHomePage:!1,title:"Switch on",description:"Connect to wallet",source:"@site/docs/dapp-iot/iot4.md",slug:"/dapp-iot/switchon",permalink:"/completium-landing/docs/dapp-iot/switchon",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-iot/iot4.md",version:"current",sidebar_label:"Switch on",sidebar:"iot",previous:{title:"Use Case Presentation",permalink:"/completium-landing/docs/dapp-iot/presentation"},next:{title:"Interrupt",permalink:"/completium-landing/docs/dapp-iot/interrupt"}},s=[{value:"Connect to wallet",id:"connect-to-wallet",children:[]},{value:"Display bulb on mobile device",id:"display-bulb-on-mobile-device",children:[]},{value:"Select service duration",id:"select-service-duration",children:[]},{value:"Start Service",id:"start-service",children:[]},{value:"Display bulb in a browser",id:"display-bulb-in-a-browser",children:[]}],r={toc:s};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},r,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"connect-to-wallet"},"Connect to wallet"),Object(a.b)(l.a,{to:"/docs/dapp-tools/thanos#connect-to-a-dapp",mdxType:"Link"},"Connect"),' to the DApp by clicking the "Connect to wallet" button:',Object(a.b)(c.a,{img:"iot-connect.png",width:"40%",mdxType:"DappFigure"}),Object(a.b)("p",null,"Then select the user account. If you don't have a dedicated user account, go to the ",Object(a.b)(l.a,{to:"/docs/dapp-tools/accounts#create-test-account",mdxType:"Link"},"help")," page."),Object(a.b)("p",null,"Once connected, the address and balance of the connected account is displayed:"),Object(a.b)(c.a,{img:"iot-account.png",width:"100%",mdxType:"DappFigure"}),Object(a.b)("h2",{id:"display-bulb-on-mobile-device"},"Display bulb on mobile device"),Object(a.b)("p",null,"Click on the QR code area to display the QR code:"),Object(a.b)(c.a,{img:"iot-qr.png",width:"60%",mdxType:"DappFigure"}),Object(a.b)("p",null,"Scan the QR code and open encoded link. It is likely that the bulb is off, unless someone has already switched it on. Below is the display of the builb in off state:"),Object(a.b)(c.a,{img:"iot-off.jpg",width:"30%",mdxType:"DappFigure"}),Object(a.b)("p",null,"It is also possible to display the bulb ",Object(a.b)(l.a,{to:"/docs/dapp-iot/switchon#display-bulb-in-a-browser",mdxType:"Link"},"in a browser"),"."),Object(a.b)("h2",{id:"select-service-duration"},"Select service duration"),Object(a.b)("p",null,"Use the slider to select the duration. The corresponding price is displayed. It is basically computed as the duration multiplied by the price per minute:"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Session Price")," = ",Object(a.b)("em",{parentName:"p"},"Session Duration")," * ",Object(a.b)("em",{parentName:"p"},"Price per Minute")),Object(a.b)("p",null,"In the DApp the ",Object(a.b)("em",{parentName:"p"},"Price per Minute")," is 0.82\ua729. Hence for a duration of 4 minutes, the session price is 4*0.82 = 3.32\ua729:"),Object(a.b)(c.a,{img:"iot-price.png",width:"60%",mdxType:"DappFigure"}),Object(a.b)("h2",{id:"start-service"},"Start Service"),Object(a.b)("p",null,'Once connected Click the "SWITCH ON" button. The'),Object(a.b)(c.a,{img:"iot-start.png",width:"50%",mdxType:"DappFigure"}),Object(a.b)("p",null,'The transaction parameter may be displayed by clicking "Raw":'),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"{4,9}","{4,9}":!0}),'[{\n    "kind":"transaction"\n    "to":"KT1CxHBiCSvmXn9kXCbhPfdGDAggGG9ktQEX"\n    "amount":3333333\n    "mutez":true\n    "parameter":{\n        "entrypoint":"start"\n        "value":{\n            "prim":"Unit"\n        }\n    }\n}]\n')),Object(a.b)("p",null,"We note that:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the amount sent to the contract is ",Object(a.b)("inlineCode",{parentName:"li"},"3333333")," in ",Object(a.b)("em",{parentName:"li"},"mutez")," (a mutez is 1 million tez)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Unit")," is the parameter value when no argument is required.")),Object(a.b)("p",null,"The bulb switches on when the transaction is validated:"),Object(a.b)(c.a,{img:"bulb.jpg",width:"30%",mdxType:"DappFigure"}),Object(a.b)("p",null,"The DApp displays the remaining time before the service stops:"),Object(a.b)(c.a,{img:"iot-duration.png",width:"60%",mdxType:"DappFigure"}),Object(a.b)("h2",{id:"display-bulb-in-a-browser"},"Display bulb in a browser"),Object(a.b)("p",null,"If you don't have a mobile phone to display the bulb, it is still possible to display it in a browser:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"duplicate the DApp tab"),Object(a.b)("li",{parentName:"ol"},"open 'More Tools/Development tools'"),Object(a.b)("li",{parentName:"ol"},"switch on 'Mobile Device' menu")),Object(a.b)("p",null,"The bulb is then displayed:"),Object(a.b)(c.a,{img:"iot-bulbbrowser.png",width:"60%",mdxType:"DappFigure"}))}d.isMDXComponent=!0}}]);