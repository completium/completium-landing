(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[3231],{807:function(e,a,t){"use strict";t(7294),t(4996)},4697:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return o}});var n=t(2122),r=t(9756),i=(t(7294),t(3905)),c=(t(807),t(7134),t(3079),["components"]),l={id:"zcb8",title:"Interface",sidebar_label:"Interface",slug:"/dapp-zcb/interface"},s=void 0,p={unversionedId:"dapp-zcb/zcb8",id:"dapp-zcb/zcb8",isDocsHomePage:!1,title:"Interface",description:"Storage",source:"@site/docs/dapp-zcb/zcb8.md",sourceDirName:"dapp-zcb",slug:"/dapp-zcb/interface",permalink:"/docs/dapp-zcb/interface",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-zcb/zcb8.md",version:"current",frontMatter:{id:"zcb8",title:"Interface",sidebar_label:"Interface",slug:"/dapp-zcb/interface"}},d=[{value:"Storage",id:"storage",children:[]},{value:"Entry points",id:"entry-points",children:[{value:"To signed",id:"to-signed",children:[]},{value:"Sign",id:"sign",children:[]},{value:"Terminate",id:"terminate",children:[]},{value:"Dispute",id:"dispute",children:[]}]}],u={toc:d};function o(e){var a=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable issuer     : address = @tz1bfVgcJC4ukaQSHUe1EbrUd5SekXeP9CWk\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable subscriber : address = @tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable facevalue : tez = 10tz\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable discount : rational = 14%\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable maturityduration : duration = 1m\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable paybackduration  : duration = 1m\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable issuersigned     : bool = false\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable subscribersigned : bool = false\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable signaturedate    : option<date> = none\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"states =\n  | Created initial\n  | Signed\n  | Terminated\n  | Disputed\n")),(0,i.kt)("h2",{id:"entry-points"},"Entry points"),(0,i.kt)("h3",{id:"to-signed"},"To signed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition toSigned() {\n  called by selfaddress\n  from Created to Signed with effect {\n    signaturedate := some(now)\n  }\n}\n")),(0,i.kt)("h3",{id:"sign"},"Sign"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"entry sign () {\n  ...\n}\n")),(0,i.kt)("h3",{id:"terminate"},"Terminate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition terminate () {\n ...\n}\n")),(0,i.kt)("h3",{id:"dispute"},"Dispute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition dispute () {\n  ...\n}\n")))}o.isMDXComponent=!0}}]);