(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(224)),l=a(225),c={id:"tuto7",title:"Assets",sidebar_label:"7. Assets",slug:"/contract/tuto/archetype-assets"},o={unversionedId:"contract/tuto/tuto7",id:"contract/tuto/tuto7",isDocsHomePage:!1,title:"Assets",description:"A collection of assets is a convenient way to store indexed records of data; it comes with a rich API to read and write data to:",source:"@site/docs/contract/tuto/tuto7.md",slug:"/contract/tuto/archetype-assets",permalink:"/docs/contract/tuto/archetype-assets",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/contract/tuto/tuto7.md",version:"current",sidebar_label:"7. Assets",sidebar:"contract",previous:{title:"State Machine",permalink:"/docs/contract/tuto/archetype-statem"},next:{title:"Call another Contract",permalink:"/docs/contract/tuto/archetype-callcontr"}},s=[{value:"Code",id:"code",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Call entry point",id:"call-entry-point",children:[]}],p={toc:s};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A collection of assets is a convenient way to store indexed records of data; it comes with a rich API to read and write data to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add, remove, update, addupdate"),Object(r.b)("li",{parentName:"ul"},"head, tail, sort, select"),Object(r.b)("li",{parentName:"ul"},"sum"),Object(r.b)("li",{parentName:"ul"},"...")),Object(r.b)("p",null,"A detailed presentation of the asset API is available ",Object(r.b)("a",{href:"https://docs.archetype-lang.org/archetype-language/data-model",target:"_blank"},"here"),"."),Object(r.b)("h2",{id:"code"},"Code"),Object(r.b)("p",null,"A vehicle dealer manages his stock of rental cars on-chain for maximal transparency with customers and mechanical service suppliers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a car has a unique identifier, the ",Object(r.b)("em",{parentName:"li"},"vin"),", and is described with a color, the number of repairs and the last repair date."),Object(r.b)("li",{parentName:"ul"},"each time a car is repaired, the ",Object(r.b)("inlineCode",{parentName:"li"},"repair")," entry point is called to update the vehicle's repair data; it increments the number of repairs and updates the last date of repair."),Object(r.b)("li",{parentName:"ul"},"a mechanical service supplier specializes on repairing the 3 cars with olded repair dates; a dedicated entry point ",Object(r.b)("inlineCode",{parentName:"li"},"repair_oldest")," has been designed to ease the update process."),Object(r.b)("li",{parentName:"ul"},"a nother mechanical service supplier is specialised in repainting cars which have been repaired at least once. A dedicated entry point ",Object(r.b)("inlineCode",{parentName:"li"},"repaint_repaired")," has been designed.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{30,34,38-40,44-46}","{30,34,38-40,44-46}":!0}),'archetype assets\n\nenum color =\n| White\n| Yellow\n| Red\n| Blue\n\nasset vehicle {\n   vin        : string;\n   c          : color = Yellow;\n   nbrepairs  : nat   = 0;\n   lastrepair : date  = now;\n} initialized by {\n  {"vin0000"; White;  0; 2020-01-01};\n  {"vin0001"; Yellow; 0; 2020-01-01};\n  {"vin0002"; White;  0; 2020-01-01};\n  {"vin0003"; Red;    0; 2020-01-01};\n  {"vin0004"; Red;    0; 2020-01-01};\n  {"vin0005"; Yellow; 0; 2020-01-01};\n  {"vin0006"; White;  0; 2020-01-01};\n  {"vin0007"; Yellow; 0; 2020-01-01};\n  {"vin0008"; Yellow; 1; 2019-01-01};\n  {"vin0009"; Red;    3; 2019-04-01};\n  {"vin0010"; White;  2; 2019-03-01};\n  {"vin0011"; Yellow; 2; 2019-02-01}\n}\n\nentry addvehicle (pvin : string) {\n  vehicle.add({ vin = pvin })\n}\n\nentry repair (k : string) {\n  vehicle.update(k, { nbrepairs += 1; lastrepair = now})\n}\n\nentry repair_oldest() {\n  for v in vehicle.sort(lastrepair).head(3) do\n    vehicle.update(v, { nbrepairs += 1; lastrepair = now })\n  done\n}\n\nentry repaint_repaired (newc : color) {\n  for v in vehicle.select(the.nbrepairs >= 1) do\n    vehicle[v].c := newc\n  done\n}\n')),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"addvehicle")," entry point, the only necessary data to create the new asset is the vin because all other data have a default value. If no default value was set, the following would be necessary to create a new asset:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype"})," vehicle.add({ pvin; pcolor; 0; now })\n")),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"repaint_repaired")," entry point, this update syntax is adapted when a single field is updated; otherwize the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," operator is preferred for performance reason:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"vehicle.update(v, { color := newc })\n")),Object(r.b)("p",null,"At last, note that the ",Object(r.b)("inlineCode",{parentName:"p"},"sort")," function sorts in ascending order. Another way to implement that is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),"  for v in vehicle.sort(desc(lastrepair)).tail(3) do\n    vehicle.update(v, { nbrepairs += 1; lastrepair = now })\n  done\n")),Object(r.b)("h2",{id:"deploy"},"Deploy"),Object(r.b)("p",null,"The following ",Object(r.b)(l.a,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"completium-cli deploy 7-assets.arl\n")),Object(r.b)("h2",{id:"call-entry-point"},"Call entry point"),Object(r.b)("p",null,"The following command adds a vehicle:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"completium-cli call 7-assets --entry addvehicle --with '\"vin0012\"'\n")),Object(r.b)("p",null,"The following command repairs vehicle with vin ",Object(r.b)("inlineCode",{parentName:"p"},"vin0005"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"completium-cli call 7-assets --entry repair --with '\"vin0005\"'\n")),Object(r.b)("p",null,"The following repairs the 3 oldest vehicles:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"completium-cli call 7-assets --entry repair_oldest\n")),Object(r.b)("p",null,"Finally, repaint repaired vehicles in blue:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"completium-cli call 7-assets --entry repaint_repaired --with '3'\n")),Object(r.b)("p",null,"Enums are implemented with integer values starting from 0."))}d.isMDXComponent=!0}}]);