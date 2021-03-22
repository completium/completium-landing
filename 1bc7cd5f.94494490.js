(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{82:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return r})),n.d(a,"metadata",(function(){return c})),n.d(a,"toc",(function(){return d})),n.d(a,"default",(function(){return b}));var l=n(3),t=n(7),o=(n(0),n(196)),r={id:"dex13",title:"Specification",sidebar_label:"Specification",slug:"/dapp-dex/specification"},c={unversionedId:"dapp-dex/dex13",id:"dapp-dex/dex13",isDocsHomePage:!1,title:"Specification",description:"Invariant",source:"@site/docs/dapp-dex/dex13.md",slug:"/dapp-dex/specification",permalink:"/docs/dapp-dex/specification",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-dex/dex13.md",version:"current",sidebar_label:"Specification",sidebar:"dex",previous:{title:"Implementation",permalink:"/docs/dapp-dex/fa12implementation"}},d=[{value:"Invariant",id:"invariant",children:[]},{value:"Transfer",id:"transfer",children:[{value:"Effect on <code>ledger</code>",id:"effect-on-ledger",children:[]},{value:"Effect on <code>allowance</code>",id:"effect-on-allowance",children:[]},{value:"Explicit fail",id:"explicit-fail",children:[]},{value:"Effect on operations",id:"effect-on-operations",children:[]}]},{value:"Approve",id:"approve",children:[{value:"Effect on <code>ledger</code>",id:"effect-on-ledger-1",children:[]},{value:"Effect on <code>allowance</code>",id:"effect-on-allowance-1",children:[]},{value:"Explicit fail",id:"explicit-fail-1",children:[]},{value:"Effect on operations",id:"effect-on-operations-1",children:[]}]},{value:"Get allowance",id:"get-allowance",children:[{value:"Effect on <code>ledger</code>",id:"effect-on-ledger-2",children:[]},{value:"Effect on <code>allowance</code>",id:"effect-on-allowance-2",children:[]},{value:"Explicit fail",id:"explicit-fail-2",children:[]},{value:"Effect on operations",id:"effect-on-operations-2",children:[]}]},{value:"Get balance",id:"get-balance",children:[{value:"Effect on <code>ledger</code>",id:"effect-on-ledger-3",children:[]},{value:"Effect on <code>allowance</code>",id:"effect-on-allowance-3",children:[]},{value:"Explicit fail",id:"explicit-fail-3",children:[]},{value:"Effect on operations",id:"effect-on-operations-3",children:[]}]},{value:"Get total supply",id:"get-total-supply",children:[{value:"Effect on <code>ledger</code>",id:"effect-on-ledger-4",children:[]},{value:"Effect on <code>allowance</code>",id:"effect-on-allowance-4",children:[]},{value:"Explicit fail",id:"explicit-fail-4",children:[]},{value:"Effect on operations",id:"effect-on-operations-4",children:[]}]}],i={toc:d};function b(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},i,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"invariant"},"Invariant"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"ledger.sum(tokens) = totalsupply\n")),Object(o.b)("p",null,"No token is minted: the total number of tokens is equal to the initial totalsupply number of tokens, regardless of the state of the storage."),Object(o.b)("h2",{id:"transfer"},"Transfer"),Object(o.b)("p",null,"When the ",Object(o.b)("inlineCode",{parentName:"p"},"%to")," address is different from the ",Object(o.b)("inlineCode",{parentName:"p"},"%from")," address, the number of tokens ",Object(o.b)("inlineCode",{parentName:"p"},"%to")," possesses is decread by value."),Object(o.b)("h3",{id:"effect-on-ledger"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"ledger")),Object(o.b)("h4",{id:"effect-on-from-token-holder"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h4"},"%from")," token holder"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"%from <> %to ->\nlet some before_ledger_from = before.ledger[%from] in\nlet some after_ledger_from  = ledger[%from] in\n  after_ledger_from = { before_ledger_from with\n    tokens = abs (before_ledger_from.tokens - value)\n  }\notherwise false\notherwise false\n")),Object(o.b)("h4",{id:"effect-on-to-token-holder"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h4"},"%to")," token holder"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"%from <> %to ->\nlet some after_ledger_to = ledger[%to] in\nlet some before_ledger_to = before.ledger[%to] in\n  after_ledger_to = { before_ledger_to with\n    tokens = (before_ledger_to.tokens + value)\n  }\notherwise\n  after_ledger_to = { holder = %to; tokens = value }\notherwise false\n")),Object(o.b)("p",null,"When the ",Object(o.b)("inlineCode",{parentName:"p"},"%to")," address is different from the ",Object(o.b)("inlineCode",{parentName:"p"},"%from")," address, the number of tokens ",Object(o.b)("inlineCode",{parentName:"p"},"%to")," possesses is increased by value when ",Object(o.b)("inlineCode",{parentName:"p"},"%to")," is already registered in the ledger, and set to value otherwise. Anyway, ",Object(o.b)("inlineCode",{parentName:"p"},"%to")," is registered in ledger."),Object(o.b)("h4",{id:"no-effect-on-ledger"},"No effect on ",Object(o.b)("inlineCode",{parentName:"h4"},"ledger")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"%from = %to -> ledger = before.ledger\n")),Object(o.b)("p",null,"No effect on ledger when ",Object(o.b)("inlineCode",{parentName:"p"},"%from")," is equal to ",Object(o.b)("inlineCode",{parentName:"p"},"%to"),"."),Object(o.b)("h4",{id:"unchanged-ledger-records"},"Unchanged ",Object(o.b)("inlineCode",{parentName:"h4"},"ledger")," records"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"forall tokenholder in ledger,\ntokenholder.holder <> %from ->\ntokenholder.holder <> %to ->\nbefore.ledger[tokenholder.holder] = some(tokenholder)\n")),Object(o.b)("p",null,"Tokenholders other than ",Object(o.b)("inlineCode",{parentName:"p"},"%from")," and ",Object(o.b)("inlineCode",{parentName:"p"},"%to"),", are not modified nor added to ledger."),Object(o.b)("h4",{id:"removed-ledger-records"},"Removed ",Object(o.b)("inlineCode",{parentName:"h4"},"ledger")," records"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"removed.ledger.isempty()\n")),Object(o.b)("p",null,"No record is removed from ledger."),Object(o.b)("h4",{id:"added-ledger-records"},"Added ",Object(o.b)("inlineCode",{parentName:"h4"},"ledger")," records"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"let some before_to = before.ledger[%to] in\n  added.ledger.isempty()\notherwise\n  added.ledger = [ { holder = %to; tokens = value } ]\n")),Object(o.b)("p",null,"The added record in 'ledger', if any, is the %to record."),Object(o.b)("h3",{id:"effect-on-allowance"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"allowance")),Object(o.b)("h4",{id:"effect-on-fromcaller-allowance-record"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h4"},"(%from,caller)")," allowance record"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"caller <> %from ->\nlet some before_from_caller = before.allowance[(%from,caller)] in\nlet some after_from_caller = allowance[(%from,caller)] in\n  before_from_caller.amount > value ->\n  after_from_caller = { before_from_caller with\n    amount = abs (before_from_caller.amount - value)\n  }\notherwise false\notherwise true\n")),Object(o.b)("p",null,"When caller is different from ",Object(o.b)("inlineCode",{parentName:"p"},"%from"),", the amount caller is authorised to spend on the behalf of ",Object(o.b)("inlineCode",{parentName:"p"},"%from")," is decreased by value if value is striclty greated than the authorized amount."),Object(o.b)("h4",{id:"no-effect-on-allowance"},"No effect on allowance"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"caller = %from -> allowance = before.allowance\n")),Object(o.b)("p",null,"No effect on allowance when caller is equal to ",Object(o.b)("inlineCode",{parentName:"p"},"%from"),"."),Object(o.b)("h4",{id:"unchanged-allowance-records"},"Unchanged allowance records"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"forall a in allowance,\na.addr_owner <> %from and a.addr_spender <> caller ->\nbefore.allowance[(a.addr_owner,a.addr_spender)] = some(a)\n")),Object(o.b)("p",null,"Allowed amounts other than those associated to ",Object(o.b)("inlineCode",{parentName:"p"},"%from")," and caller are identical."),Object(o.b)("h4",{id:"added-and-removed-allowance-records"},"Added and removed allowance records"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"removed.allowance.isempty() and added.allowance.isempty()\n")),Object(o.b)("p",null,"No allowance record is added or removed."),Object(o.b)("h3",{id:"explicit-fail"},"Explicit fail"),Object(o.b)("h4",{id:"not-enough-balance"},"Not Enough Balance"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),'fails with (msg : string) :\n  let some after_ledger_from = ledger[%from] in\n    msg = "NotEnoughBalance" and\n    after_ledger_from.tokens < value\n  otherwise true\n')),Object(o.b)("p",null,'When the entry fails with message "NotEnoughBalance", value is stricly greater than the number of tokens of ',Object(o.b)("inlineCode",{parentName:"p"},"%to"),". Cannot spend more than you own."),Object(o.b)("h4",{id:"not-enough-allowance"},"Not Enough Allowance"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),'fails with (msg : string * (nat * nat)) :\n  let some after_allowance_from_caller = allowance[(%from,caller)] in\n    msg = ("NotEnoughAllowance", (value, after_allowance_from_caller.amount)) and\n    caller <> %from and\n    after_allowance_from_caller.amount < value\n  otherwise false\n')),Object(o.b)("p",null,'When the entry fails with message "NotEnoughAllowance", caller is different from ',Object(o.b)("inlineCode",{parentName:"p"},"%from")," and value is stricly greater than the allowed amount for ",Object(o.b)("inlineCode",{parentName:"p"},"%from")," and caller. A spender cannot spend more than allowed."),Object(o.b)("h3",{id:"effect-on-operations"},"Effect on operations"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"length (operations) = 0\n")),Object(o.b)("p",null,"No operation generated."),Object(o.b)("h2",{id:"approve"},"Approve"),Object(o.b)("h3",{id:"effect-on-ledger-1"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"ledger")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"ledger = before.ledger\n")),Object(o.b)("p",null,"No effect on ledger."),Object(o.b)("h3",{id:"effect-on-allowance-1"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"allowance")),Object(o.b)("h4",{id:"effect-on-callerspender-allowance-record"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h4"},"(caller,spender)")," allowance record"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"let some after_allowance_caller_spender = allowance[(caller,spender)] in\nlet some before_allowance_caller_spender = before.allowance[(caller,spender)] in\n  after_allowance_caller_spender = { before_allowance_caller_spender with\n    amount = value\n  }\notherwise\n  after_allowance_caller_spender = {\n    addr_owner = caller;\n    addr_spender = spender;\n    amount = value\n  }\notherwise false\n")),Object(o.b)("p",null,"Allowed amount of tokens spendable by spender on the behalf of caller is set to value."),Object(o.b)("h4",{id:"unchanged-allowance-records-1"},"Unchanged allowance records"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"forall a in allowance,\n(a.addr_owner, a.addr_spender) <> (caller, spender) ->\nbefore.allowance[(a.addr_owner, a.addr_spender)] = some(a)\n")),Object(o.b)("p",null,"Other allowed amounts than the allowed amount of tokens spendable by spender on the behalf of caller, are unchanged."),Object(o.b)("h4",{id:"added-allowance-records"},"Added allowance records"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"let some allowance_caller_spender = before.allowance[(caller, spender)] in\n  added.allowance.isempty()\notherwise\n  added.allowance = [ { addr_owner = caller; addr_spender = spender; amount = value } ]\nThe added allowance record, if any, is the caller and spender one.\n")),Object(o.b)("h4",{id:"removed-allowance-records"},"Removed allowance records"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"removed.allowance.isempty()\n")),Object(o.b)("p",null,"No record is removed from allowance."),Object(o.b)("h3",{id:"explicit-fail-1"},"Explicit fail"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),'fails with (msg : (string * nat)) :\nlet some allowance_caller_spender = allowance[(caller,spender)] in\n  msg = ("UnsafeAllowanceChange", allowance_caller_spender.amount) and\n  value > 0 and\n  allowance_caller_spender.amount > 0\notherwise false\n')),Object(o.b)("p",null,'When the entry fails with message "UnsafeAllowanceChange", value is strictly greater than 0 and the allowed amount of tokens spendable by spender on the behalf of caller is not equal to zero.\nNote that in that case, it may be set back to 0 by having spender call the transfer entry to transfer a number of tokens equal to the remaining allowed amount, from the approver address (ie caller above) to the approver address (ie to itself).\nIndeed, according to properties 1.3 and 2.1 of the transfer entry, this has no effect on ledger and sets allowance record to 0.'),Object(o.b)("h3",{id:"effect-on-operations-1"},"Effect on operations"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"length (operations) = 0\n")),Object(o.b)("p",null,"No operation generated."),Object(o.b)("h2",{id:"get-allowance"},"Get allowance"),Object(o.b)("h3",{id:"effect-on-ledger-2"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"ledger")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"ledger = before.ledger\n")),Object(o.b)("p",null,"No effect on ledger."),Object(o.b)("h3",{id:"effect-on-allowance-2"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"allowance")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"allowance = before.allowance\n")),Object(o.b)("p",null,"No effect on allowance."),Object(o.b)("h3",{id:"explicit-fail-2"},"Explicit fail"),Object(o.b)("p",null,"No explicit fail. The entry implicitely fails though if the provided callback is invalid."),Object(o.b)("h3",{id:"effect-on-operations-2"},"Effect on operations"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"length (operations) = 1\n")),Object(o.b)("p",null,"Creates one callback operation."),Object(o.b)("h2",{id:"get-balance"},"Get balance"),Object(o.b)("h3",{id:"effect-on-ledger-3"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"ledger")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"ledger = before.ledger\n")),Object(o.b)("p",null,"No effect on ledger."),Object(o.b)("h3",{id:"effect-on-allowance-3"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"allowance")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"allowance = before.allowance\n")),Object(o.b)("p",null,"No effect on allowance."),Object(o.b)("h3",{id:"explicit-fail-3"},"Explicit fail"),Object(o.b)("p",null,"No explicit fail. The entry implicitely fails though if the provided callback is invalid."),Object(o.b)("h3",{id:"effect-on-operations-3"},"Effect on operations"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"length (operations) = 1\n")),Object(o.b)("p",null,"Creates one callback operation."),Object(o.b)("h2",{id:"get-total-supply"},"Get total supply"),Object(o.b)("h3",{id:"effect-on-ledger-4"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"ledger")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"ledger = before.ledger\n")),Object(o.b)("p",null,"No effect on ledger."),Object(o.b)("h3",{id:"effect-on-allowance-4"},"Effect on ",Object(o.b)("inlineCode",{parentName:"h3"},"allowance")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"allowance = before.allowance\n")),Object(o.b)("p",null,"No effect on allowance."),Object(o.b)("h3",{id:"explicit-fail-4"},"Explicit fail"),Object(o.b)("p",null,"No explicit fail. The entry implicitely fails though if the provided callback is invalid."),Object(o.b)("h3",{id:"effect-on-operations-4"},"Effect on operations"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-archetype"}),"length (operations) = 1\n")),Object(o.b)("p",null,"Creates one callback operation."))}b.isMDXComponent=!0}}]);