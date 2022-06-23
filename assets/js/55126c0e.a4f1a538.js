"use strict";(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[4823],{2847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=n(9960),o=["components"],s={id:"tuto7",title:"Assets",sidebar_label:"7. Assets",slug:"/contract/tuto/archetype-assets",hide_title:!0},c=void 0,p={unversionedId:"contract/tuto/tuto7",id:"contract/tuto/tuto7",title:"Assets",description:"Assets",source:"@site/docs/contract/tuto/tuto7.md",sourceDirName:"contract/tuto",slug:"/contract/tuto/archetype-assets",permalink:"/docs/contract/tuto/archetype-assets",editUrl:"https://github.com/edukera/completium-landing/tree/master/docs/contract/tuto/tuto7.md",tags:[],version:"current",frontMatter:{id:"tuto7",title:"Assets",sidebar_label:"7. Assets",slug:"/contract/tuto/archetype-assets",hide_title:!0},sidebar:"contract",previous:{title:"6. State Machine",permalink:"/docs/contract/tuto/archetype-statem"},next:{title:"8. Call a contract",permalink:"/docs/contract/tuto/archetype-callcontr"}},d=[{value:"Assets",id:"assets",children:[{value:"Deploy",id:"deploy",children:[],level:3},{value:"Call entry point",id:"call-entry-point",children:[],level:3},{value:"Next",id:"next",children:[],level:3}],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"assets"},"Assets"),(0,i.kt)("p",null,"A collection of assets is a convenient way to store indexed records of data; it comes with a rich API to read and write data to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add, remove, update, addupdate"),(0,i.kt)("li",{parentName:"ul"},"head, tail, sort, select"),(0,i.kt)("li",{parentName:"ul"},"sum"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("p",null,"A detailed presentation of the asset API is available ",(0,i.kt)("a",{href:"https://archetype-lang.org/docs/asset",target:"_blank"},"here"),"."),(0,i.kt)("p",null,"In this exercise, a vehicle dealer manages his stock of rental cars on-chain for maximal transparency with customers and mechanical service suppliers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a car has a unique identifier, the ",(0,i.kt)("em",{parentName:"li"},"vin"),", and is described with a color, the number of repairs and the last repair date."),(0,i.kt)("li",{parentName:"ul"},"each time a car is repaired, the ",(0,i.kt)("inlineCode",{parentName:"li"},"repair")," entry point is called to update the vehicle's repair data; it increments the number of repairs and updates the last date of repair."),(0,i.kt)("li",{parentName:"ul"},"a mechanical service supplier is specialised in repainting cars which have been repaired at least once. A dedicated entry point ",(0,i.kt)("inlineCode",{parentName:"li"},"repaint_repaired")," is designed.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype",metastring:'{30,34,38-38} title="7-assets.arl"',"{30,34,38-38}":!0,title:'"7-assets.arl"'},'archetype assets\n\nenum Color =\n| White\n| Yellow\n| Red\n| Blue\n\nasset vehicle {\n   vin        : string;\n   color      : Color = Yellow;\n   nbrepairs  : nat   = 0;\n   lastrepair : date  = now;\n} initialized by {\n  {"vin00"; White;  0; 2020-01-01};\n  {"vin01"; Yellow; 0; 2020-01-01};\n  {"vin02"; White;  0; 2020-01-01};\n  {"vin03"; Red;    0; 2020-01-01};\n  {"vin04"; Red;    0; 2020-01-01};\n  {"vin05"; Yellow; 0; 2020-01-01};\n  {"vin06"; White;  0; 2020-01-01};\n  {"vin07"; Yellow; 0; 2020-01-01};\n  {"vin08"; Yellow; 1; 2019-01-01};\n  {"vin09"; Red;    3; 2019-04-01};\n  {"vin10"; White;  2; 2019-03-01};\n  {"vin11"; Yellow; 2; 2019-02-01}\n}\n\nentry add_vehicle (pvin : string) {\n  vehicle.add({ vin = pvin })\n}\n\nentry repair (k : string) {\n  vehicle.update(k, { nbrepairs += 1; lastrepair = now})\n}\n\nentry repaint_repaired (newc : Color) {\n  vehicle.select(the.nbrepairs >= 1).update_all({ color := newc })\n}\n')),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"add_vehicle")," entry point, the only necessary data to create the new asset is the vin because all other data have a default value. If no default value was set, the following would be necessary to create a new asset:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"}," vehicle.add({ pvin; pcolor; 0; now })\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"repaint_repaired")," entry point, all vehicles with a number of repairs above or equal to 1 are turned to ",(0,i.kt)("inlineCode",{parentName:"p"},"newc")," color."),(0,i.kt)("h3",{id:"deploy"},"Deploy"),(0,i.kt)("p",null,"The following ",(0,i.kt)(r.Z,{to:"/docs/cli",mdxType:"Link"},"Completium CLI")," command deploys the contract on the Tezos network:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"completium-cli deploy 7-assets.arl\n")),(0,i.kt)("h3",{id:"call-entry-point"},"Call entry point"),(0,i.kt)("p",null,"The following command adds a vehicle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'completium-cli call 7-assets --entry add_vehicle --arg \'{ "pvin" : "vin12" }\'\n')),(0,i.kt)("p",null,"The following command repairs vehicle with vin ",(0,i.kt)("inlineCode",{parentName:"p"},"vin05"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'completium-cli call 7-assets --entry repair --arg \'{ "k" : "vin05" }\'\n')),(0,i.kt)("p",null,"Finally, repaint repaired vehicles in blue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"completium-cli call 7-assets --entry repaint_repaired --arg '{ \"newc\" : 3 }'\n")),(0,i.kt)("p",null,"Enums are implemented with integer values starting from 0."),(0,i.kt)("h3",{id:"next"},"Next"),(0,i.kt)("p",null,"Open '8-1-contract_called.arl' and click on \"Next: Call a Contract\" below."))}h.isMDXComponent=!0}}]);