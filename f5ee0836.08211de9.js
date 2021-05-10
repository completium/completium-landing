(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{223:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return U})),t.d(e,"metadata",(function(){return G})),t.d(e,"toc",(function(){return I})),t.d(e,"default",(function(){return c}));var a=t(3),D=t(7),i=(t(0),t(236)),r=t(237),l=t(249),o=t(250),U={id:"template12",title:"Miles",sidebar_label:"Miles",slug:"/templates/miles"},G={unversionedId:"templates/template12",id:"templates/template12",isDocsHomePage:!1,title:"Miles",description:"Introduction",source:"@site/docs/templates/template12.md",slug:"/templates/miles",permalink:"/docs/templates/miles",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/templates/template12.md",version:"current",sidebar_label:"Miles",sidebar:"templates",previous:{title:"Escrow",permalink:"/docs/templates/escrow"},next:{title:"Connected Object",permalink:"/docs/templates/iot"}},I=[{value:"Introduction",id:"introduction",children:[]},{value:"API",id:"api",children:[{value:"Storage",id:"storage",children:[]},{value:"Entrypoints",id:"entrypoints",children:[]}]},{value:"Code",id:"code",children:[]}],P={toc:I};function c(n){var e=n.components,t=Object(D.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},P,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This contract stores miles per owners. Miles have an expiration date and valid miles can be consumed."),Object(i.b)("p",null,"See this contract in action in the ",Object(i.b)(r.a,{to:"/docs/dapp-miles/",mdxType:"Link"},"Fidelity Program")," Dapp example."),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"storage"},"Storage"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"admin")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"address")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Admin address to call ",Object(i.b)("inlineCode",{parentName:"td"},"add")," entrypoint.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mile")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"collection")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A mile is defined by:",Object(i.b)("ul",null,Object(i.b)("li",null,"id"),Object(i.b)("li",null,"amount"),Object(i.b)("li",null,"expiration date")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"owner")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"collection")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A mile owner is defined by:",Object(i.b)("ul",null,Object(i.b)("li",null,"an address"),Object(i.b)("li",null,"a collection of ",Object(i.b)("inlineCode",{parentName:"td"},"mile"))),Object(i.b)("p",null),"A mile is owned by one and only one owner: this is ensured by the use of ",Object(i.b)("inlineCode",{parentName:"td"},"partition")," collection type (see ",Object(i.b)(r.a,{to:"/docs/templates/miles#code",mdxType:"Link"},"code")," below).")))),Object(i.b)("h3",{id:"entrypoints"},"Entrypoints"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"add")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ow"),", ",Object(i.b)("inlineCode",{parentName:"td"},"nm_id"),", ",Object(i.b)("inlineCode",{parentName:"td"},"nm_amount"),", ",Object(i.b)("inlineCode",{parentName:"td"},"nm_exp")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called by ",Object(i.b)("inlineCode",{parentName:"td"},"admin")," to grant owner ",Object(i.b)("inlineCode",{parentName:"td"},"ow")," with ",Object(i.b)("inlineCode",{parentName:"td"},"nm_amount")," miles that expire on ",Object(i.b)("inlineCode",{parentName:"td"},"nm_exp"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"consume")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ow"),", ",Object(i.b)("inlineCode",{parentName:"td"},"quantity")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called by ",Object(i.b)("inlineCode",{parentName:"td"},"admin")," to consume ",Object(i.b)("inlineCode",{parentName:"td"},"quantity")," valid miles (ie. miles with expiration date in the future) from owner ",Object(i.b)("inlineCode",{parentName:"td"},"ow"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"clear_expired")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Removes expired miles.")))),Object(i.b)("h2",{id:"code"},"Code"),Object(i.b)(l.a,{defaultValue:"archetype",values:[{label:"Archetype",value:"archetype"},{label:"Michelson",value:"michelson"},{label:"Specification",value:"specification"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"archetype",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype",metastring:'title="miles.arl"',title:'"miles.arl"'}),'archetype miles(admin : address)\n\nasset mile identified by id {\n   id         : string;\n   amount     : nat;\n   expiration : date\n}\n\nasset owner identified by addr {\n  addr  : address;\n  miles : partition<mile> = []\n}\n\nentry add (\n  ow        : address,\n  nm_id     : string,\n  nm_amount : nat,\n  nm_exp    : date) {\n   called by admin\n   failif {\n     c2 : mile.contains(nm_id);\n   }\n   effect {\n     owner.addupdate (ow, { miles += [{\n       id         = nm_id;\n       amount     = nm_amount;\n       expiration = nm_exp\n      }] })\n   }\n}\n\nentry consume (ow : address, quantity : nat) {\n  called by admin\n  effect {\n    var lview = owner[ow].miles.sort(expiration).select(the.expiration >= now);\n    dorequire (lview.sum(the.amount) >= quantity, "NotEnoughMiles");\n    var remainder = quantity;\n    for : loop m in lview do\n      if remainder > 0 then begin\n        if mile[m].amount > remainder then begin\n          mile.update(m, { amount -= remainder });\n          remainder := 0\n        end else if mile[m].amount = remainder then begin\n          remainder := 0;\n          owner[ow].miles.remove(m)\n        end else begin\n          remainder -= mile[m].amount;\n          owner[ow].miles.remove(m)\n        end\n      end\n    done;\n    assert p1\n  }\n}\n\nentry clear_expired () {\n  for : loop2 o in owner do\n    owner[o].miles.removeif(the.expiration < now)\n  done\n}\n'))),Object(i.b)(o.a,{value:"michelson",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'# (Pair admin (Pair {  } {  }))\n{\n  storage (pair (address %admin) (pair (map %mile string (pair (nat %amount) (timestamp %expiration))) (map %owner address (set string))));\n  parameter (or (pair %add (address %ow) (pair (string %nm_id) (pair (nat %nm_amount) (timestamp %nm_exp)))) (or (pair %consume (address %ow) (nat %quantity)) (unit %clear_expired)));\n  code { UNPAIR;\n         DIP { UNPAIR; SWAP; UNPAIR; SWAP };\n         IF_LEFT\n           { UNPAIR;\n             SWAP;\n             UNPAIR;\n             SWAP;\n             UNPAIR;\n             SWAP;\n             DIG 6;\n             DUP;\n             DUG 7;\n             SENDER;\n             COMPARE;\n             EQ;\n             NOT;\n             IF\n               { PUSH string "InvalidCaller";\n                 FAILWITH }\n               {  };\n             DIG 5;\n             DUP;\n             DUG 6;\n             DIG 3;\n             DUP;\n             DUG 4;\n             MEM;\n             IF\n               { PUSH string "InvalidCondition: c2";\n                 FAILWITH }\n               {  };\n             DIG 4;\n             DUP;\n             DUG 5;\n             DIG 4;\n             DUP;\n             DUG 5;\n             MEM;\n             IF\n               { DIG 5;\n                 DUP;\n                 DUG 6;\n                 DIG 3;\n                 DUP;\n                 DUG 4;\n                 MEM;\n                 NOT;\n                 IF\n                   { DIG 4;\n                     DUP;\n                     DUG 5;\n                     DIG 4;\n                     DUP;\n                     DUG 5;\n                     GET;\n                     IF_NONE\n                       { PUSH string "GetNoneValue";\n                         FAILWITH }\n                       {  };\n                     DIG 5;\n                     DUP;\n                     DUG 6;\n                     DIG 1;\n                     DUP;\n                     DUG 2;\n                     PUSH bool True;\n                     DIG 6;\n                     DUP;\n                     DUG 7;\n                     UPDATE;\n                     SOME;\n                     DIG 6;\n                     DUP;\n                     DUG 7;\n                     UPDATE;\n                     DIP { DIG 5; DROP };\n                     DUG 5;\n                     DIG 6;\n                     DUP;\n                     DUG 7;\n                     DIG 2;\n                     DUP;\n                     DUG 3;\n                     DIG 4;\n                     DUP;\n                     DUG 5;\n                     PAIR;\n                     SOME;\n                     DIG 5;\n                     DUP;\n                     DUG 6;\n                     UPDATE;\n                     DIP { DIG 6; DROP };\n                     DUG 6;\n                     DROP }\n                   { PUSH string "KeyAlreadyExists";\n                     FAILWITH } }\n               { DIG 4;\n                 DUP;\n                 DUG 5;\n                 DIG 4;\n                 DUP;\n                 DUG 5;\n                 MEM;\n                 IF\n                   { PUSH string "KeyAlreadyExists";\n                     FAILWITH }\n                   { DIG 5;\n                     DUP;\n                     DUG 6;\n                     DIG 3;\n                     DUP;\n                     DUG 4;\n                     MEM;\n                     IF\n                       { PUSH string "KeyAlreadyExists";\n                         FAILWITH }\n                       { DIG 4;\n                         DUP;\n                         DUG 5;\n                         EMPTY_SET string;\n                         PUSH bool True;\n                         DIG 5;\n                         DUP;\n                         DUG 6;\n                         UPDATE;\n                         SOME;\n                         DIG 5;\n                         DUP;\n                         DUG 6;\n                         UPDATE;\n                         DIP { DIG 4; DROP };\n                         DUG 4;\n                         DIG 5;\n                         DUP;\n                         DUG 6;\n                         DIG 1;\n                         DUP;\n                         DUG 2;\n                         DIG 3;\n                         DUP;\n                         DUG 4;\n                         PAIR;\n                         SOME;\n                         DIG 4;\n                         DUP;\n                         DUG 5;\n                         UPDATE;\n                         DIP { DIG 5; DROP };\n                         DUG 5 } } };\n             DROP 4;\n             SWAP;\n             PAIR;\n             SWAP;\n             PAIR;\n             NIL operation;\n             PAIR }\n           { IF_LEFT\n               { UNPAIR;\n                 SWAP;\n                 DIG 4;\n                 DUP;\n                 DUG 5;\n                 SENDER;\n                 COMPARE;\n                 EQ;\n                 NOT;\n                 IF\n                   { PUSH string "InvalidCaller";\n                     FAILWITH }\n                   {  };\n                 NIL string;\n                 NIL string;\n                 NIL string;\n                 DIG 5;\n                 DUP;\n                 DUG 6;\n                 DIG 5;\n                 DUP;\n                 DUG 6;\n                 GET;\n                 IF_NONE\n                   { PUSH string "GetNoneValue";\n                     FAILWITH }\n                   {  };\n                 ITER { DIG 7;\n                        DUP;\n                        DUG 8;\n                        DIG 1;\n                        DUP;\n                        DUG 2;\n                        GET;\n                        IF_NONE\n                          { PUSH string "GetNoneValue";\n                            FAILWITH }\n                          {  };\n                        NIL string;\n                        DIG 2;\n                        DUP;\n                        DUG 3;\n                        SOME;\n                        PAIR;\n                        DIG 3;\n                        DUP;\n                        DUG 4;\n                        ITER { DIG 1;\n                               DUP;\n                               DUG 2;\n                               CAR;\n                               DIG 2;\n                               DUP;\n                               DUG 3;\n                               CDR;\n                               DIG 1;\n                               DUP;\n                               DUG 2;\n                               IF_NONE\n                                 { DUP;\n                                   DIG 3;\n                                   DUP;\n                                   DUG 4;\n                                   CONS;\n                                   DIG 2;\n                                   DUP;\n                                   DUG 3;\n                                   PAIR }\n                                 { PUSH int 0;\n                                   DIG 14;\n                                   DUP;\n                                   DUG 15;\n                                   DIG 5;\n                                   DUP;\n                                   DUG 6;\n                                   GET;\n                                   IF_NONE\n                                     { PUSH string "GetNoneValue";\n                                       FAILWITH }\n                                     {  };\n                                   DIG 7;\n                                   DUP;\n                                   DUG 8;\n                                   CDR;\n                                   DIG 1;\n                                   DUP;\n                                   DUG 2;\n                                   CDR;\n                                   COMPARE;\n                                   GT;\n                                   IF\n                                     { PUSH int 1 }\n                                     { PUSH int 0 };\n                                   DIP { DROP };\n                                   COMPARE;\n                                   GT;\n                                   IF\n                                     { DIG 1;\n                                       DUP;\n                                       DUG 2;\n                                       DIG 7;\n                                       DUP;\n                                       DUG 8;\n                                       CONS;\n                                       DIG 4;\n                                       DUP;\n                                       DUG 5;\n                                       CONS;\n                                       NONE string;\n                                       PAIR }\n                                     { DIG 1;\n                                       DUP;\n                                       DUG 2;\n                                       DIG 4;\n                                       DUP;\n                                       DUG 5;\n                                       CONS;\n                                       DIG 3;\n                                       DUP;\n                                       DUG 4;\n                                       PAIR };\n                                   SWAP;\n                                   DROP };\n                               DIP { DROP };\n                               DIP { DROP };\n                               DIP { DIG 1; DROP };\n                               DUG 1;\n                               DROP };\n                        DUP;\n                        CAR;\n                        DIG 1;\n                        DUP;\n                        DUG 2;\n                        CDR;\n                        NIL string;\n                        DIG 2;\n                        DUP;\n                        DUG 3;\n                        IF_NONE\n                          { DIG 1;\n                            DUP;\n                            DUG 2 }\n                          { DIG 2;\n                            DUP;\n                            DUG 3;\n                            DIG 7;\n                            DUP;\n                            DUG 8;\n                            CONS;\n                            SWAP;\n                            DROP };\n                        ITER { DIG 1;\n                               DUP;\n                               DUG 2;\n                               DIG 1;\n                               DUP;\n                               DUG 2;\n                               CONS;\n                               DIP { DIG 1; DROP };\n                               DUG 1;\n                               DROP };\n                        DIP { DROP };\n                        DIP { DROP };\n                        DIP { DROP };\n                        DIP { DROP };\n                        DIP { DIG 1; DROP };\n                        DUG 1;\n                        DROP };\n                 ITER { DIG 6;\n                        DUP;\n                        DUG 7;\n                        DIG 1;\n                        DUP;\n                        DUG 2;\n                        GET;\n                        IF_NONE\n                          { PUSH string "GetNoneValue";\n                            FAILWITH }\n                          {  };\n                        NOW;\n                        DIG 1;\n                        DUP;\n                        DUG 2;\n                        CDR;\n                        COMPARE;\n                        GE;\n                        IF\n                          { DIG 2;\n                            DUP;\n                            DUG 3;\n                            DIG 2;\n                            DUP;\n                            DUG 3;\n                            CONS }\n                          { DIG 2;\n                            DUP;\n                            DUG 3 };\n                        DIP { DROP };\n                        DIP { DIG 1; DROP };\n                        DUG 1;\n                        DROP };\n                 ITER { DIG 1;\n                        DUP;\n                        DUG 2;\n                        DIG 1;\n                        DUP;\n                        DUG 2;\n                        CONS;\n                        DIP { DIG 1; DROP };\n                        DUG 1;\n                        DROP };\n                 DIG 1;\n                 DUP;\n                 DUG 2;\n                 PUSH nat 0;\n                 DIG 2;\n                 DUP;\n                 DUG 3;\n                 ITER { DIG 7;\n                        DUP;\n                        DUG 8;\n                        DIG 1;\n                        DUP;\n                        DUG 2;\n                        GET;\n                        IF_NONE\n                          { PUSH string "GetNoneValue";\n                            FAILWITH }\n                          {  };\n                        DUP;\n                        CAR;\n                        DIG 3;\n                        DUP;\n                        DUG 4;\n                        ADD;\n                        DIP { DROP };\n                        DIP { DIG 1; DROP };\n                        DUG 1;\n                        DROP };\n                 COMPARE;\n                 GE;\n                 NOT;\n                 IF\n                   { PUSH string "NotEnoughMiles";\n                     FAILWITH }\n                   {  };\n                 DIG 1;\n                 DUP;\n                 DUG 2;\n                 DIG 1;\n                 DUP;\n                 DUG 2;\n                 ITER { PUSH nat 0;\n                        DIG 2;\n                        DUP;\n                        DUG 3;\n                        COMPARE;\n                        GT;\n                        IF\n                          { DIG 1;\n                            DUP;\n                            DUG 2;\n                            DIG 7;\n                            DUP;\n                            DUG 8;\n                            DIG 2;\n                            DUP;\n                            DUG 3;\n                            GET;\n                            IF_NONE\n                              { PUSH string "GetNoneValue";\n                                FAILWITH }\n                              {  };\n                            CAR;\n                            COMPARE;\n                            GT;\n                            IF\n                              { DIG 6;\n                                DUP;\n                                DUG 7;\n                                DIG 1;\n                                DUP;\n                                DUG 2;\n                                GET;\n                                IF_NONE\n                                  { PUSH string "GetNoneValue";\n                                    FAILWITH }\n                                  {  };\n                                DIG 7;\n                                DUP;\n                                DUG 8;\n                                DIG 8;\n                                DUP;\n                                DUG 9;\n                                DIG 3;\n                                DUP;\n                                DUG 4;\n                                GET;\n                                IF_NONE\n                                  { PUSH string "GetNoneValue";\n                                    FAILWITH }\n                                  {  };\n                                UNPAIR;\n                                DROP;\n                                PUSH int 0;\n                                DIG 5;\n                                DUP;\n                                DUG 6;\n                                INT;\n                                DIG 4;\n                                DUP;\n                                DUG 5;\n                                CAR;\n                                SUB;\n                                COMPARE;\n                                GE;\n                                IF\n                                  { DIG 4;\n                                    DUP;\n                                    DUG 5;\n                                    INT;\n                                    DIG 3;\n                                    DUP;\n                                    DUG 4;\n                                    CAR;\n                                    SUB;\n                                    ABS }\n                                  { PUSH string "AssignNat";\n                                    FAILWITH };\n                                PAIR;\n                                SOME;\n                                DIG 3;\n                                DUP;\n                                DUG 4;\n                                UPDATE;\n                                DIP { DIG 7; DROP };\n                                DUG 7;\n                                DROP;\n                                PUSH nat 0;\n                                DIP { DIG 1; DROP };\n                                DUG 1 }\n                              { DIG 1;\n                                DUP;\n                                DUG 2;\n                                DIG 7;\n                                DUP;\n                                DUG 8;\n                                DIG 2;\n                                DUP;\n                                DUG 3;\n                                GET;\n                                IF_NONE\n                                  { PUSH string "GetNoneValue";\n                                    FAILWITH }\n                                  {  };\n                                CAR;\n                                COMPARE;\n                                EQ;\n                                IF\n                                  { PUSH nat 0;\n                                    DIP { DIG 1; DROP };\n                                    DUG 1;\n                                    DIG 6;\n                                    DUP;\n                                    DUG 7;\n                                    NONE (pair nat timestamp);\n                                    DIG 2;\n                                    DUP;\n                                    DUG 3;\n                                    UPDATE;\n                                    DIP { DIG 6; DROP };\n                                    DUG 6;\n                                    DIG 5;\n                                    DUP;\n                                    DUG 6;\n                                    DIG 6;\n                                    DUP;\n                                    DUG 7;\n                                    DIG 6;\n                                    DUP;\n                                    DUG 7;\n                                    GET;\n                                    IF_NONE\n                                      { PUSH string "GetNoneValue";\n                                        FAILWITH }\n                                      {  };\n                                    PUSH bool False;\n                                    DIG 3;\n                                    DUP;\n                                    DUG 4;\n                                    UPDATE;\n                                    SOME;\n                                    DIG 6;\n                                    DUP;\n                                    DUG 7;\n                                    UPDATE;\n                                    DIP { DIG 5; DROP };\n                                    DUG 5 }\n                                  { PUSH int 0;\n                                    DIG 7;\n                                    DUP;\n                                    DUG 8;\n                                    DIG 2;\n                                    DUP;\n                                    DUG 3;\n                                    GET;\n                                    IF_NONE\n                                      { PUSH string "GetNoneValue";\n                                        FAILWITH }\n                                      {  };\n                                    CAR;\n                                    INT;\n                                    DIG 3;\n                                    DUP;\n                                    DUG 4;\n                                    SUB;\n                                    COMPARE;\n                                    GE;\n                                    IF\n                                      { DIG 6;\n                                        DUP;\n                                        DUG 7;\n                                        DIG 1;\n                                        DUP;\n                                        DUG 2;\n                                        GET;\n                                        IF_NONE\n                                          { PUSH string "GetNoneValue";\n                                            FAILWITH }\n                                          {  };\n                                        CAR;\n                                        INT;\n                                        DIG 2;\n                                        DUP;\n                                        DUG 3;\n                                        SUB;\n                                        ABS }\n                                      { PUSH string "AssignNat";\n                                        FAILWITH };\n                                    DIP { DIG 1; DROP };\n                                    DUG 1;\n                                    DIG 6;\n                                    DUP;\n                                    DUG 7;\n                                    NONE (pair nat timestamp);\n                                    DIG 2;\n                                    DUP;\n                                    DUG 3;\n                                    UPDATE;\n                                    DIP { DIG 6; DROP };\n                                    DUG 6;\n                                    DIG 5;\n                                    DUP;\n                                    DUG 6;\n                                    DIG 6;\n                                    DUP;\n                                    DUG 7;\n                                    DIG 6;\n                                    DUP;\n                                    DUG 7;\n                                    GET;\n                                    IF_NONE\n                                      { PUSH string "GetNoneValue";\n                                        FAILWITH }\n                                      {  };\n                                    PUSH bool False;\n                                    DIG 3;\n                                    DUP;\n                                    DUG 4;\n                                    UPDATE;\n                                    SOME;\n                                    DIG 6;\n                                    DUP;\n                                    DUG 7;\n                                    UPDATE;\n                                    DIP { DIG 5; DROP };\n                                    DUG 5 } } }\n                          {  };\n                        DROP };\n                 DROP 4;\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 NIL operation;\n                 PAIR }\n               { DROP;\n                 DUP;\n                 ITER { UNPAIR;\n                        DIG 2;\n                        DUP;\n                        DUG 3;\n                        DIG 1;\n                        DUP;\n                        DUG 2;\n                        GET;\n                        IF_NONE\n                          { PUSH string "GetNoneValue";\n                            FAILWITH }\n                          {  };\n                        ITER { DIG 4;\n                               DUP;\n                               DUG 5;\n                               DIG 1;\n                               DUP;\n                               DUG 2;\n                               GET;\n                               IF_NONE\n                                 { PUSH string "GetNoneValue";\n                                   FAILWITH }\n                                 {  };\n                               NOW;\n                               DIG 1;\n                               DUP;\n                               DUG 2;\n                               CDR;\n                               COMPARE;\n                               LT;\n                               IF\n                                 { DIG 5;\n                                   DUP;\n                                   DUG 6;\n                                   NONE (pair nat timestamp);\n                                   DIG 3;\n                                   DUP;\n                                   DUG 4;\n                                   UPDATE;\n                                   DIP { DIG 5; DROP };\n                                   DUG 5;\n                                   DIG 4;\n                                   DUP;\n                                   DUG 5;\n                                   DIG 5;\n                                   DUP;\n                                   DUG 6;\n                                   DIG 4;\n                                   DUP;\n                                   DUG 5;\n                                   GET;\n                                   IF_NONE\n                                     { PUSH string "GetNoneValue";\n                                       FAILWITH }\n                                     {  };\n                                   PUSH bool False;\n                                   DIG 4;\n                                   DUP;\n                                   DUG 5;\n                                   UPDATE;\n                                   SOME;\n                                   DIG 4;\n                                   DUP;\n                                   DUG 5;\n                                   UPDATE;\n                                   DIP { DIG 4; DROP };\n                                   DUG 4 }\n                                 {  };\n                               DROP 2 };\n                        DROP 2 };\n                 SWAP;\n                 PAIR;\n                 SWAP;\n                 PAIR;\n                 NIL operation;\n                 PAIR } } };\n}\n'))),Object(i.b)(o.a,{value:"specification",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-archetype",metastring:'title="miles.arl"',title:'"miles.arl"'}),"specification asset mile {\n  m1: amount > 0;\n}\n\nspecification entry consume (quantity : int) {\n  assert p1 {\n      remainder = 0\n  }\n  postcondition p2 {\n    mile.sum(the.amount) = before.mile.sum(the.amount) - quantity\n    invariant for loop {\n      0 <= remainder <= toiterate.sum(the.amount);\n        before.mile.sum(the.amount) = mile.sum(the.amount) + quantity - remainder\n    }\n  }\n  postcondition p3 {\n    forall m in removed.mile, m.expiration >= now\n    invariant for loop {\n      removed.mile.subsetof(by_expiration)\n    }\n  }\n  postcondition p4 {\n    added.mile.isempty()\n  }\n}\n\nspecification entry clear_expired () {\n  postcondition s3 {\n    forall m in removed.mile, m.expiration < now\n    invariant for loop2 {\n      forall m in removed.mile, m.expiration < now\n    }\n  }\n}\n")))))}c.isMDXComponent=!0},242:function(n,e,t){"use strict";function a(n){var e,t,D="";if("string"==typeof n||"number"==typeof n)D+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=a(n[e]))&&(D&&(D+=" "),D+=t);else for(e in n)n[e]&&(D&&(D+=" "),D+=e);return D}e.a=function(){for(var n,e,t=0,D="";t<arguments.length;)(n=arguments[t++])&&(e=a(n))&&(D&&(D+=" "),D+=e);return D}},247:function(n,e,t){"use strict";var a=t(0),D=t(248);e.a=function(){const n=Object(a.useContext)(D.a);if(null==n)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return n}},248:function(n,e,t){"use strict";var a=t(0);const D=Object(a.createContext)(void 0);e.a=D},249:function(n,e,t){"use strict";var a=t(0),D=t.n(a),i=t(247),r=t(242),l=t(56),o=t.n(l);const U=37,G=39;e.a=function(n){const{lazy:e,block:t,defaultValue:l,values:I,groupId:P,className:c}=n,{tabGroupChoices:d,setTabGroupChoices:s}=Object(i.a)(),[b,m]=Object(a.useState)(l),O=a.Children.toArray(n.children);if(null!=P){const n=d[P];null!=n&&n!==b&&I.some((e=>e.value===n))&&m(n)}const p=n=>{m(n),null!=P&&s(P,n)},u=[];return D.a.createElement("div",null,D.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},c)},I.map((({value:n,label:e})=>D.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":b===n,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":b===n}),key:n,ref:n=>u.push(n),onKeyDown:n=>{((n,e,t)=>{switch(t.keyCode){case G:((n,e)=>{const t=n.indexOf(e)+1;n[t]?n[t].focus():n[0].focus()})(n,e);break;case U:((n,e)=>{const t=n.indexOf(e)-1;n[t]?n[t].focus():n[n.length-1].focus()})(n,e)}})(u,n.target,n)},onFocus:()=>p(n),onClick:()=>{p(n)}},e)))),e?Object(a.cloneElement)(O.filter((n=>n.props.value===b))[0],{className:"margin-vert--md"}):D.a.createElement("div",{className:"margin-vert--md"},O.map(((n,e)=>Object(a.cloneElement)(n,{key:e,hidden:n.props.value!==b})))))}},250:function(n,e,t){"use strict";var a=t(3),D=t(0),i=t.n(D);e.a=function({children:n,hidden:e,className:t}){return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:e,className:t}),n)}}}]);