(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[227],{807:function(n,t,e){"use strict";e(7294),e(4996)},3714:function(n,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var a=e(2122),i=e(9756),o=(e(7294),e(3905)),r=(e(807),e(7134)),p=(e(3079),e(6742)),c=["components"],l={id:"dex4",title:"Exchange",sidebar_label:"Exchange",slug:"/dapp-dex/exchange"},d=void 0,s={unversionedId:"dapp-dex/dex4",id:"dapp-dex/dex4",isDocsHomePage:!1,title:"Exchange",description:"From XTZ to city coin",source:"@site/docs/dapp-dex/dex4.md",sourceDirName:"dapp-dex",slug:"/dapp-dex/exchange",permalink:"/docs/dapp-dex/exchange",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/dapp-dex/dex4.md",version:"current",frontMatter:{id:"dex4",title:"Exchange",sidebar_label:"Exchange",slug:"/dapp-dex/exchange"},sidebar:"dapps",previous:{title:"Presentation",permalink:"/docs/dapp-dex/presentation"},next:{title:"Liquidity",permalink:"/docs/dapp-dex/liquidity"}},u=[{value:"From XTZ to city coin",id:"from-xtz-to-city-coin",children:[]},{value:"From city coin to city coin",id:"from-city-coin-to-city-coin",children:[]}],m={toc:u};function g(n){var t=n.components,e=(0,i.Z)(n,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"from-xtz-to-city-coin"},"From XTZ to city coin"),(0,o.kt)("p",null,"Your are going to London during the week end. You need to buy some London City Coin with XTZ (Tezos currency) to visit museums:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select 'XTZ' currency"),(0,o.kt)("li",{parentName:"ol"},"Enter the amount of XTZ to spend"),(0,o.kt)("li",{parentName:"ol"},"Select 'XLD' token"),(0,o.kt)("li",{parentName:"ol"},"Quantity of XLD to get in exchange of the XTZ amount")),(0,o.kt)(r.Z,{img:"dex-exchange1.png",width:"100%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"Click on the 'Exchange button'; the temple wallet popup is displayed:"),(0,o.kt)(r.Z,{img:"dex-exchange2.png",width:"50%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"The transaction parameter specifies a call to the smart contract's entry point ",(0,o.kt)("inlineCode",{parentName:"p"},"exchange"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[{\n    "kind":"transaction"\n    "to":"KT1J48AfBi8NwNaFQM1AXTvordRgSRJxK313"\n    "amount":144000000\n    "mutez":true\n    "parameter":{\n        "entrypoint":"exchange"\n        "value":{\n            "prim":"Pair"\n            "args":[{\n                "string":"XTZ"\n            } {\n                "prim":"Pair"\n                "args":[{\n                    "int":"144000000"\n                } {\n                    "prim":"Pair"\n                    "args":[{\n                        "string":"XLD"\n                    } {\n                        "int":"661"\n                    }]\n                }]\n            }]\n        }\n    }\n}]\n')),(0,o.kt)("p",null,"This will generate a sub-transaction from the DEX contract to XLD FA 1.2 contract (see ",(0,o.kt)(p.Z,{to:"/docs/dapp-dex",mdxType:"Link"},"DApp presentation"),")."),(0,o.kt)("h2",{id:"from-city-coin-to-city-coin"},"From city coin to city coin"),(0,o.kt)("p",null,"It is time to come back to Paris. Exchange the XLD tokens you have not spent to XPA tokens:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select 'XLD' token"),(0,o.kt)("li",{parentName:"ol"},"Enter the quantity of XLD tokens"),(0,o.kt)("li",{parentName:"ol"},"Select 'XPA' token"),(0,o.kt)("li",{parentName:"ol"},"Quantity of XPA to get in exchange of the XLD amount")),(0,o.kt)(r.Z,{img:"dex-exchange3.png",width:"100%",mdxType:"DappFigure"}),(0,o.kt)("p",null,"Click on the 'Exchange button'; the temple wallet popup is displayed:"),(0,o.kt)(r.Z,{img:"dex-exchange4.png",width:"50%",mdxType:"DappFigure"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[{\n    "kind":"transaction"\n    "to":"KT1H8JUiFbvEMycCuG5sZfCGHkN7vgfLAs3n"\n    "amount":0\n    "mutez":true\n    "parameter":{\n        "entrypoint":"approve"\n        "value":{\n            "prim":"Pair"\n            "args":[{\n                "string":"KT1J48AfBi8NwNaFQM1AXTvordRgSRJxK313"\n            } {\n                "int":"6"\n            }]\n        }\n    }\n} {\n    "kind":"transaction"\n    "to":"KT1J48AfBi8NwNaFQM1AXTvordRgSRJxK313"\n    "amount":0\n    "mutez":true\n    "parameter":{\n        "entrypoint":"exchange"\n        "value":{\n        "prim":"Pair"\n        "args":[{\n            "string":"XLD"\n        } {\n            "prim":"Pair"\n            "args":[{\n                "int":"6"\n            } {\n                "prim":"Pair"\n                "args":[{\n                    "string":"XPA"\n                } {\n                    "int":"16"\n                }]\n            }]\n        }]\n        }\n    }\n}]\n')),(0,o.kt)("p",null,"We note that two transactions are generated:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"a call to the ",(0,o.kt)("inlineCode",{parentName:"li"},"approve")," entry point of the XLD FA 1.2 smart contract to authorize the DEX to transfer XLD ownership"),(0,o.kt)("li",{parentName:"ol"},"a call to the ",(0,o.kt)("inlineCode",{parentName:"li"},"exchange")," entry point of the DEX smart contract")))}g.isMDXComponent=!0}}]);