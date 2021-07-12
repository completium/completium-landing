(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return I})),a.d(t,"metadata",(function(){return A})),a.d(t,"toc",(function(){return F})),a.d(t,"default",(function(){return S}));var n=a(3),o=a(0),i=a.n(o),s=a(238),c=a(564),l=a(602),r=a(452),d=a(393),m=a(392),p=a(454),u=a(245),b=a(607),g=a(243),f=(a(1),a(246)),h=a(247),v=a(616),x=a(289),j=a(257),O=a(394),y=a(25),w="undefined"==typeof window?o.useEffect:o.useLayoutEffect,C=o.forwardRef((function(e,t){var a=e.alignItems,i=void 0===a?"center":a,s=e.autoFocus,c=void 0!==s&&s,l=e.button,r=void 0!==l&&l,d=e.children,m=e.classes,p=e.className,u=e.component,b=e.ContainerComponent,h=void 0===b?"li":b,C=e.ContainerProps,E=(C=void 0===C?{}:C).className,k=Object(g.a)(C,["className"]),N=e.dense,T=void 0!==N&&N,I=e.disabled,A=void 0!==I&&I,F=e.disableGutters,z=void 0!==F&&F,S=e.divider,_=void 0!==S&&S,D=e.focusVisibleClassName,P=e.selected,M=void 0!==P&&P,B=Object(g.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),L=o.useContext(O.a),R={dense:T||L.dense||!1,alignItems:i},V=o.useRef(null);w((function(){c&&V.current&&V.current.focus()}),[c]);var W=o.Children.toArray(d),G=W.length&&Object(x.a)(W[W.length-1],["ListItemSecondaryAction"]),H=o.useCallback((function(e){V.current=y.findDOMNode(e)}),[]),$=Object(j.a)(H,t),X=Object(n.a)({className:Object(f.a)(m.root,p,R.dense&&m.dense,!z&&m.gutters,_&&m.divider,A&&m.disabled,r&&m.button,"center"!==i&&m.alignItemsFlexStart,G&&m.secondaryAction,M&&m.selected),disabled:A},B),J=u||"li";return r&&(X.component=u||"div",X.focusVisibleClassName=Object(f.a)(m.focusVisible,D),J=v.a),G?(J=X.component||u?J:"div","li"===h&&("li"===J?J="div":"li"===X.component&&(X.component="div")),o.createElement(O.a.Provider,{value:R},o.createElement(h,Object(n.a)({className:Object(f.a)(m.container,E),ref:$},k),o.createElement(J,X,W),W.pop()))):o.createElement(O.a.Provider,{value:R},o.createElement(J,Object(n.a)({ref:$},X),W))})),E=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(C),k=a(239);const N={fungible:{title:"Fungible Token",subtitle:"Fungible tokens can be exchanged among individuals for trading, sale and purchase of goods and services.",image:"img/template_ft.svg",items:[{name:"FA 1.2",desc:"FA 1.2 specification for Tezos Fungible Token.",to:"/docs/templates/fa12"},{name:"ERC20",desc:"Transcription to Tezos World of Ethereum ERC20 norm.",to:"/docs/templates/erc20"}]},nft:{title:"NFT",subtitle:"A Non-Fungible Token is a unit of data on a digital ledger called a blockchain, where each NFT can represent a unique digital item. NFTs can represent digital files such as art, audio, videos, items in video games and other forms of creative work. ",image:"img/template_nft.svg",items:[{name:"FA 2",desc:"FA 2 specification for Tezos Non Fungible Token",to:"/docs/templates/nft"}]},defi:{title:"DeFi",subtitle:"DeFi is short for \u201cdecentralized finance\u201d, an umbrella term for a variety of financial applications.",image:"img/template_defi.svg",items:[{name:"Zero-Coupon Bond",desc:"A transcription to Tezos of a Zero-Coupon bond.",to:"/docs/templates/zcb"},{name:"DEX",desc:"A Uniswap-like decentralized exchange.",to:"/docs/templates/dex"},{name:"ICO",desc:"An example of ICO process.",to:"/docs/templates/ico"},{name:"Autocallable note",desc:"A transcription to the Tezos blockchain of an auto-callable note from Goldman Sachs.",to:"/docs/templates/acn"}]},payment:{title:"Payment",subtitle:"Implement decentralised payment process for retail, marketing, insurance, ... with the blockchain.",image:"img/template_payment.svg",items:[{name:"Escrow",desc:"Escrow the purchase amount and transfer it to seller under conditions.",to:"/docs/templates/escrow"},{name:"Miles",desc:"Collect and consume miles.",to:"/docs/templates/miles"},{name:"Connected Object",desc:"Switch on a connected object for a certain duration against payment.",to:"/docs/templates/iot"},{name:"Health Care",desc:"Payments between patient, insurer, and doctors.",to:"/docs/templates/healthcare"}]},governance:{title:"Governance",subtitle:"Blockchain traceability and immutability makes it especially suitable for process whose goal is to establish a consensus.",image:"img/template_governance.svg",items:[{name:"Idea Box",desc:"Collect and determine best ideas to improve a process.",to:"/docs/templates/ideabox"},{name:"Competition",desc:"Collect submissions and declare the best one.",to:"/docs/templates/competition"},{name:"Auction",desc:"Auction process to transfer ownership of FA2 NFTs.",to:"/docs/templates/auction"},{name:"A 2",desc:"Whitelisting process to define transfer permissions per group of users.",to:"/docs/templates/a2"}]}};var T=function(e){const t=N[e.data],a=i.a.useMemo((()=>Object(c.a)({palette:{type:"dark"}})),[!0]);return i.a.createElement(l.a,{theme:a},i.a.createElement(r.a,{style:{marginBottom:"40px",backgroundColor:"transparent",border:"1px solid #606770",paddingBottom:"8px"}},i.a.createElement(m.a,{container:!0},i.a.createElement(m.a,{item:!0,xs:8},i.a.createElement(m.a,{container:!0,spacing:3,direction:"column",justify:"center",alignItems:"flex-start",style:{padding:"22px"}},i.a.createElement(m.a,{item:!0},i.a.createElement(d.a,{variant:"h4",style:{fontWeight:"bold"}},t.title)),i.a.createElement(m.a,{item:!0},i.a.createElement(d.a,null,t.subtitle)))),i.a.createElement(m.a,{item:!0,xs:4,style:{textAlign:"center"}},i.a.createElement("img",{alt:"Docusaurus with Keytar",style:{width:"65%",paddingTop:"0px"},src:Object(u.a)(t.image)})),i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(p.a,null)),i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(b.a,{component:"nav"},t.items.map((e=>i.a.createElement(E,{button:!0,divider:!0,component:k.a,to:Object(u.a)(e.to)},i.a.createElement(m.a,{container:!0,spacing:2},i.a.createElement(m.a,{item:!0,xs:4},i.a.createElement(d.a,{style:{fontWeight:"bold",marginLeft:"8px"}},e.name)),i.a.createElement(m.a,{item:!0,xs:8},i.a.createElement(d.a,null,e.desc)))))))))))};const I={id:"template0",title:"Presentation",sidebar_label:"Presentation",slug:"/templates",hide_table_of_contents:!1,hide_side_bar:!0,hide_title:!0},A={unversionedId:"templates/template0",id:"templates/template0",isDocsHomePage:!1,title:"Presentation",description:"If you need a specific version of a contract, or a contract not listed here, please contact us.",source:"@site/docs/templates/template0.md",slug:"/templates",permalink:"/docs/templates",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/templates/template0.md",version:"current",sidebar_label:"Presentation",sidebar:"templates",next:{title:"FA 1.2",permalink:"/docs/templates/fa12"}},F=[{value:"Install",id:"install",children:[]}],z={toc:F};function S({components:e,...t}){return Object(s.b)("wrapper",Object(n.a)({},z,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)(T,{data:"fungible",mdxType:"TemplateSection"}),Object(s.b)(T,{data:"nft",mdxType:"TemplateSection"}),Object(s.b)(T,{data:"defi",mdxType:"TemplateSection"}),Object(s.b)(T,{data:"payment",mdxType:"TemplateSection"}),Object(s.b)(T,{data:"governance",mdxType:"TemplateSection"}),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"If you need a specific version of a contract, or a contract not listed here, please ",Object(s.b)(k.a,{to:"/#contact",mdxType:"Link"},"contact us"),"."))),Object(s.b)("h2",{id:"install"},"Install"),Object(s.b)("p",null,"Install contract templates with the following command:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"git clone https://github.com/edukera/completium-contract-templates.git\n")))}S.isMDXComponent=!0},454:function(e,t,a){"use strict";var n=a(3),o=a(243),i=a(0),s=(a(1),a(246)),c=a(247),l=a(272),r=i.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,l=e.classes,r=e.className,d=e.component,m=void 0===d?"hr":d,p=e.flexItem,u=void 0!==p&&p,b=e.light,g=void 0!==b&&b,f=e.orientation,h=void 0===f?"horizontal":f,v=e.role,x=void 0===v?"hr"!==m?"separator":void 0:v,j=e.variant,O=void 0===j?"fullWidth":j,y=Object(o.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,Object(n.a)({className:Object(s.a)(l.root,r,"fullWidth"!==O&&l[O],c&&l.absolute,u&&l.flexItem,g&&l.light,"vertical"===h&&l.vertical),role:x,ref:t},y))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(r)}}]);