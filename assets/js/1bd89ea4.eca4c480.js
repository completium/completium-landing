(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[4157],{3079:function(e,n,t){"use strict";var i=t(7294),a=t(282),r=t(9277),s=t(3457),l=t(6742),o=t(4996);n.Z=function(e){var n=i.useMemo((function(){return(0,r.Z)({palette:{type:"dark"}})}),[!0]);return i.createElement("div",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"40px"}},i.createElement(s.Z,{theme:n},e.internal?i.createElement(a.Z,{variant:"outlined",size:"large",component:l.Z,to:(0,o.Z)("docs/"+e.url+"/")},e.txt):i.createElement(a.Z,{variant:"outlined",size:"large",onClick:function(){return window.open(e.url,"_blank")}},e.txt)))}},807:function(e,n,t){"use strict";t(7294),t(4996)},3398:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var i=t(2122),a=t(9756),r=(t(7294),t(3905)),s=(t(807),t(7134),t(3079),["components"]),l={id:"zcb9",title:"Implementation",sidebar_label:"Implementation",slug:"/dapp-zcb/implementation"},o=void 0,d={unversionedId:"dapp-zcb/zcb9",id:"dapp-zcb/zcb9",isDocsHomePage:!1,title:"Implementation",description:"Sign",source:"@site/docs/dapp-zcb/zcb9.md",sourceDirName:"dapp-zcb",slug:"/dapp-zcb/implementation",permalink:"/docs/dapp-zcb/implementation",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-zcb/zcb9.md",version:"current",frontMatter:{id:"zcb9",title:"Implementation",sidebar_label:"Implementation",slug:"/dapp-zcb/implementation"}},u=[{value:"Sign",id:"sign",children:[]},{value:"Terminate",id:"terminate",children:[]},{value:"Dispute",id:"dispute",children:[]}],p={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sign"},"Sign"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," entry point tests whether the caller is a signer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype",metastring:"{2,4,11}","{2,4,11}":!0},'entry sign () {\n  if caller = issuer then\n    issuersigned := true\n  else if caller = subscriber then begin\n    subscribersigned := true;\n    var presentvalue = (1 - discount) * facevalue;\n    dorequire(transferred >= presentvalue, "SUBSCRIBER_INVALID_TRANSFERRED");\n    transfer presentvalue to issuer;\n  end else fail("CALLER_NOT_A_SIGNER");\n  if issuersigned and subscribersigned then\n    transfer 0tz to entry self.toSigned();\n}\n')),(0,r.kt)("p",null,"If parties have signed, the transition to ",(0,r.kt)("em",{parentName:"p"},"Signed")," is triggered with an internal call to ",(0,r.kt)("inlineCode",{parentName:"p"},"toSigned")," (line 12)."),(0,r.kt)("h2",{id:"terminate"},"Terminate"),(0,r.kt)("p",null,"Transition to ",(0,r.kt)("em",{parentName:"p"},"Terminated")," is validated if transferred amount and date are valid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype",metastring:"{6,7}","{6,7}":!0},"transition terminate () {\n  called by issuer\n  from Signed to Terminated when {\n    match signaturedate with\n    | some(s) ->\n      s + maturityduration <= now <= s + maturityduration + paybackduration and\n      transferred >= facevalue\n    | none -> false\n    end\n  } with effect {\n    transfer facevalue to subscriber\n  }\n}\n")),(0,r.kt)("h2",{id:"dispute"},"Dispute"),(0,r.kt)("p",null,"Transition to 'Disputed' is possible if in ",(0,r.kt)("em",{parentName:"p"},"Signed")," state after payback period:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype",metastring:"{6}","{6}":!0},"transition dispute () {\n  called by subscriber\n  from Signed to Disputed when {\n    match signaturedate with\n    | some(d) ->\n      d + maturityduration + paybackduration <=  now\n    | none -> false\n    end\n  }\n}\n")))}c.isMDXComponent=!0}}]);