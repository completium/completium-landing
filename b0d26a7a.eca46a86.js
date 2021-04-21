(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{182:function(e,t,c){"use strict";c.r(t),c.d(t,"frontMatter",(function(){return l})),c.d(t,"metadata",(function(){return u})),c.d(t,"toc",(function(){return b})),c.d(t,"default",(function(){return d}));var n,a=c(3),o=c(7),i=(c(0),c(235)),r=c(236),l={id:"cli2",title:"Account",sidebar_label:"Account",slug:"/cli/account"},u={unversionedId:"cli/cli2",id:"cli/cli2",isDocsHomePage:!1,title:"Account",description:"Interacting with a contract requires a Tezos account to sign the transactions. An account is identified by an account address starting by tz1, like for example tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw.",source:"@site/docs/cli/cli2.md",slug:"/cli/account",permalink:"/docs/cli/account",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/cli/cli2.md",version:"current",sidebar_label:"Account",sidebar:"cli",previous:{title:"Network",permalink:"/docs/cli/network"},next:{title:"Contract",permalink:"/docs/cli/contract"}},b=[{value:"Import account",id:"import-account",children:[{value:"Faucet",id:"faucet",children:[]},{value:"Private key",id:"private-key",children:[]}]},{value:"Show current account",id:"show-current-account",children:[]},{value:"Switch account",id:"switch-account",children:[]},{value:"Set account",id:"set-account",children:[]},{value:"Transfer",id:"transfer",children:[]},{value:"Remove account",id:"remove-account",children:[]}],s=(n="DappButton",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),p={toc:b};function d(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Interacting with a contract requires a Tezos account to sign the transactions. An account is identified by an account address starting by ",Object(i.b)("inlineCode",{parentName:"p"},"tz1"),", like for example ",Object(i.b)("inlineCode",{parentName:"p"},"tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"$completium-cli")," provides a convenient account management system to register, list and switch account. Each account is associated with an alias."),Object(i.b)("h2",{id:"import-account"},"Import account"),Object(i.b)("h3",{id:"faucet"},"Faucet"),Object(i.b)("p",null,"When working with the test network, you need ",Object(i.b)("em",{parentName:"p"},"fake")," currencies to interact and test the contracts. There exists a faucet from which you can ",Object(i.b)(r.a,{to:"/docs/dapp-tools/faucet#create-test-account",mdxType:"Link"},"download")," a faucet file to generate a test account from."),Object(i.b)(s,{url:"https://faucet.tzalpha.net/",txt:"open faucet",mdxType:"DappButton"}),Object(i.b)("p",null,"Once the faucet file (a ",Object(i.b)("inlineCode",{parentName:"p"},".json")," file) downloaded, the following command generates the account from it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"completium-cli import faucet <FAUCET_FILE> as <ACCOUNT_ALIAS>\n")),Object(i.b)("h3",{id:"private-key"},"Private key"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"completium-cli import privatekey <PRIVATE_KEY> as <ACCOUNT_ALIAS>\n")),Object(i.b)("h2",{id:"show-current-account"},"Show current account"),Object(i.b)("p",null,"The following command displays the account ",Object(i.b)("inlineCode",{parentName:"p"},"$completium-cli")," is currently using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli show account\n")),Object(i.b)("h2",{id:"switch-account"},"Switch account"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli switch account\n")),Object(i.b)("h2",{id:"set-account"},"Set account"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli set account <ACCOUNT_ALIAS>\n")),Object(i.b)("h2",{id:"transfer"},"Transfer"),Object(i.b)("p",null,"The following command transfers tez from one account to another:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli transfer <AMOUNT>(tz|utz) from <ACCOUNT_ALIAS> to <ACCOUNT_ALIAS|ACCOUNT_ADDRESS>\n")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ completium-cli transfer 5.2tz from bob to alice\n")),Object(i.b)("h2",{id:"remove-account"},"Remove account"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"completium-cli remove account <ACCOUNT_ALIAS>\n")))}d.isMDXComponent=!0}}]);