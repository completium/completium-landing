"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[4513],{807:function(e,t,n){n(7294),n(4996)},9906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),d=(n(807),n(7134),n(3079),["components"]),o={id:"ideabox9",title:"Implementation",sidebar_label:"Implementation",slug:"/dapp-ideabox/implementation"},l=void 0,c={unversionedId:"dapp-ideabox/ideabox9",id:"dapp-ideabox/ideabox9",title:"Implementation",description:"Register",source:"@site/docs/dapp-ideabox/ideabox9.md",sourceDirName:"dapp-ideabox",slug:"/dapp-ideabox/implementation",permalink:"/docs/dapp-ideabox/implementation",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-ideabox/ideabox9.md",tags:[],version:"current",frontMatter:{id:"ideabox9",title:"Implementation",sidebar_label:"Implementation",slug:"/dapp-ideabox/implementation"}},p=[{value:"Register",id:"register",children:[],level:2},{value:"Add idea",id:"add-idea",children:[],level:2},{value:"Vote",id:"vote",children:[],level:2},{value:"Terminate",id:"terminate",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"register"},"Register"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"entry register (a_voter : address) {\n  called by chairman\n  require {\n    r0 : state = Activated;\n  }\n  effect { voter.add({ addr = a_voter }) }\n}\n")),(0,r.kt)("h2",{id:"add-idea"},"Add idea"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"entry add_idea(ititle : bytes, description : bytes) {\n  require {\n    r1 : state = Activated;\n  }\n  effect {\n    idea.add({\n      id = idea.count();\n      title = ititle;\n      desc = description;\n      creation = now;\n      author = caller\n    })\n  }\n}\n")),(0,r.kt)("h2",{id:"vote"},"Vote"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"entry vote(n : nat, weight : nat) {\n  require {\n    r2 : voter.contains(caller);\n    r3 : voter[caller].remaining >= weight;\n    r4 : state = Activated;\n  }\n  effect {\n    voter[caller].remaining -= weight;\n    idea[n].nbvotes += weight;\n  }\n}\n")),(0,r.kt)("h2",{id:"terminate"},"Terminate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"transition terminate () {\n  called by chairman\n  from Activated to Terminated\n  with effect {\n    for i in idea.select(the.nbvotes >= 5).sort(desc(nbvotes)).head(3) do\n        selected.add({i})\n    done\n  }\n}\n")))}m.isMDXComponent=!0}}]);