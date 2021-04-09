(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),c=(a(0),a(224)),i=(a(226),a(227)),r=a(228),d=a(225),p={id:"zcb1",title:"Zero Coupon Bond",sidebar_label:"Introduction",slug:"/dapp-zcb/"},s={unversionedId:"dapp-zcb/zcb1",id:"dapp-zcb/zcb1",isDocsHomePage:!1,title:"Zero Coupon Bond",description:"Introduction",source:"@site/docs/dapp-zcb/zcb1.md",slug:"/dapp-zcb/",permalink:"/docs/dapp-zcb/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-zcb/zcb1.md",version:"current",sidebar_label:"Introduction",sidebar:"dapps",previous:{title:"Interactions",permalink:"/docs/dapp-dex/interactions"},next:{title:"Use Case Presentation",permalink:"/docs/dapp-zcb/Presentation"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"DApp",id:"dapp",children:[]},{value:"Smart contract",id:"smart-contract",children:[]},{value:"Architecture",id:"architecture",children:[]}],l={toc:b};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.a,{img:"zcb-screen.png",width:"100%",mdxType:"DappFigure"}),Object(c.b)(r.a,{url:"https://edukera.github.io/completium-dapp-zerocouponbond/",txt:"open dapp",mdxType:"DappButton"}),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"You work in the business department of a law company which uses an online solution to deploy DeFi contracts on the Tezos blockchain."),Object(c.b)("p",null,"Today you are deploying a Zero-Coupon Bond contract from the tailord template. Fill in the contract parameters and deploy the smart contract."),Object(c.b)("p",null,"The holder (or subscriber) of a ",Object(c.b)("a",{href:"https://en.wikipedia.org/wiki/Zero-coupon_bond",target:"_blank"},"Zero-Coupon bond")," provides the bond's present value to the issuer and gets redeemed at maturity date of its face value."),Object(c.b)("p",null,"In this example DApp, the ",Object(c.b)("em",{parentName:"p"},"present")," value of the bond (value at which the bond is traded) is computed as the face value (value at which the bond is redeemed at maturity date) minus a ",Object(c.b)("em",{parentName:"p"},"discount")," percent of face value."),Object(c.b)("p",null,"The schema below illustrates the two steps of the bond:"),Object(c.b)(i.a,{img:"zcb-schema.svg",width:"60%",mdxType:"DappFigure"}),Object(c.b)("h2",{id:"dapp"},"DApp"),Object(c.b)("h2",{id:"smart-contract"},"Smart contract"),Object(c.b)("p",null,"The Zero-coupon bond's business logic is anchored with a ",Object(c.b)(d.a,{to:"/docs/templates/zcb",mdxType:"Link"},"smart contract")," on the ",Object(c.b)(d.a,{to:"/docs/dapp-tools/tezos",mdxType:"Link"},"Tezos")," blockchain."),Object(c.b)("p",null,"The smart contract is designed with the ",Object(c.b)("a",{href:"https://archetype-lang.org/"},"Archetype")," language as a simple state machine for clarity purpose toward involved parties:"),Object(c.b)(i.a,{img:"zcb-schema2.svg",width:"60%",mdxType:"DappFigure"}),Object(c.b)("p",null,"The smart contract's entry points are the state machine's transitions:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("u",null,"sign"),": called by parties, transitions from *Created* to *Signed* when both parties have signed; holder must transfer *present value*"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("u",null,"terminate"),": transition is validated when called by issuer after maturity date and before end of payback perdiod"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("u",null,"dispute"),": transition is validated when called by holder after end of payback period")),Object(c.b)("p",null,"Dates and periods are illustrated in the schema below:"),Object(c.b)(i.a,{img:"zcb-schema3.svg",width:"80%",mdxType:"DappFigure"}),Object(c.b)("p",null,"The smart contract's implementation is presented in this ",Object(c.b)(d.a,{to:"/docs/dapp-zcb/interface",mdxType:"Link"},"section"),"."),Object(c.b)("h2",{id:"architecture"},"Architecture"),Object(c.b)("p",null,"The DApp is made of:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"an online editor and its content servers"),Object(c.b)("li",{parentName:"ul"},"deployed smart contracts")),Object(c.b)(i.a,{img:"zcb-schema4.svg",width:"40%",mdxType:"DappFigure"}))}u.isMDXComponent=!0},226:function(e,t,a){"use strict";a(0),a(230)}}]);