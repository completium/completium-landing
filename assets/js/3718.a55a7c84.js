(self.webpackChunkcompletium_landing=self.webpackChunkcompletium_landing||[]).push([[3718],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},862:function(e,n,t){var r=t(8);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o();if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(t,a,u):t[a]=e[a]}return t.default=e,n&&n.set(e,t),t}},8:function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},7708:function(e,n,t){"use strict";t.d(n,{Z:function(){return R}});var r=t(2122),o=t(9968),i=t(6410),a=t(2961),u=t(8970);var s=t(8481),c=t(1253),d=t(7294),l=(t(9864),t(5697),t(3636)),f=t(2666),p=t(4670),m=t(3366),b=t(5653),g=t(8920),h=t(3834),v=d.forwardRef((function(e,n){var t=e.children,o=e.classes,i=e.className,a=e.collapsedHeight,u=void 0===a?"0px":a,p=e.component,v=void 0===p?"div":p,x=e.disableStrictModeCompat,y=void 0!==x&&x,Z=e.in,E=e.onEnter,C=e.onEntered,R=e.onEntering,w=e.onExit,k=e.onExited,M=e.onExiting,N=e.style,P=e.timeout,I=void 0===P?m.x9.standard:P,S=e.TransitionComponent,T=void 0===S?f.ZP:S,B=(0,c.Z)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),O=(0,g.Z)(),D=d.useRef(),H=d.useRef(null),_=d.useRef(),$="number"==typeof u?"".concat(u,"px"):u;d.useEffect((function(){return function(){clearTimeout(D.current)}}),[]);var j=O.unstable_strictMode&&!y,A=d.useRef(null),F=(0,h.Z)(n,j?A:void 0),L=function(e){return function(n,t){if(e){var r=j?[A.current,n]:[n,t],o=(0,s.Z)(r,2),i=o[0],a=o[1];void 0===a?e(i):e(i,a)}}},q=L((function(e,n){e.style.height=$,E&&E(e,n)})),V=L((function(e,n){var t=H.current?H.current.clientHeight:0,r=(0,b.C)({style:N,timeout:I},{mode:"enter"}).duration;if("auto"===I){var o=O.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),_.current=o}else e.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");e.style.height="".concat(t,"px"),R&&R(e,n)})),W=L((function(e,n){e.style.height="auto",C&&C(e,n)})),z=L((function(e){var n=H.current?H.current.clientHeight:0;e.style.height="".concat(n,"px"),w&&w(e)})),G=L(k),J=L((function(e){var n=H.current?H.current.clientHeight:0,t=(0,b.C)({style:N,timeout:I},{mode:"exit"}).duration;if("auto"===I){var r=O.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(r,"ms"),_.current=r}else e.style.transitionDuration="string"==typeof t?t:"".concat(t,"ms");e.style.height=$,M&&M(e)}));return d.createElement(T,(0,r.Z)({in:Z,onEnter:q,onEntered:W,onEntering:V,onExit:z,onExited:G,onExiting:J,addEndListener:function(e,n){var t=j?e:n;"auto"===I&&(D.current=setTimeout(t,_.current||0))},nodeRef:j?A:void 0,timeout:"auto"===I?null:I},B),(function(e,n){return d.createElement(v,(0,r.Z)({className:(0,l.Z)(o.container,i,{entered:o.entered,exited:!Z&&"0px"===$&&o.hidden}[e]),style:(0,r.Z)({minHeight:$},N),ref:F},n),d.createElement("div",{className:o.wrapper,ref:H},d.createElement("div",{className:o.wrapperInner},t)))}))}));v.muiSupportAuto=!0;var x=(0,p.Z)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(v),y=t(9895),Z=t(8078),E=t(2775),C=d.forwardRef((function(e,n){var t,f=e.children,p=e.classes,m=e.className,b=e.defaultExpanded,g=void 0!==b&&b,h=e.disabled,v=void 0!==h&&h,C=e.expanded,R=e.onChange,w=e.square,k=void 0!==w&&w,M=e.TransitionComponent,N=void 0===M?x:M,P=e.TransitionProps,I=(0,c.Z)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),S=(0,E.Z)({controlled:C,default:g,name:"Accordion",state:"expanded"}),T=(0,s.Z)(S,2),B=T[0],O=T[1],D=d.useCallback((function(e){O(!B),R&&R(e,!B)}),[B,R,O]),H=d.Children.toArray(f),_=(t=H,(0,o.Z)(t)||(0,i.Z)(t)||(0,a.Z)(t)||(0,u.Z)()),$=_[0],j=_.slice(1),A=d.useMemo((function(){return{expanded:B,disabled:v,toggle:D}}),[B,v,D]);return d.createElement(y.Z,(0,r.Z)({className:(0,l.Z)(p.root,m,B&&p.expanded,v&&p.disabled,!k&&p.rounded),ref:n,square:k},I),d.createElement(Z.Z.Provider,{value:A},$),d.createElement(N,(0,r.Z)({in:B,timeout:"auto"},P),d.createElement("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region"},j)))})),R=(0,p.Z)((function(e){var n={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],n),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(C)},8078:function(e,n,t){"use strict";var r=t(7294).createContext({});n.Z=r},1201:function(e,n,t){"use strict";var r=t(2122),o=t(1253),i=t(7294),a=(t(5697),t(3636)),u=t(4670),s=i.forwardRef((function(e,n){var t=e.classes,u=e.className,s=(0,o.Z)(e,["classes","className"]);return i.createElement("div",(0,r.Z)({className:(0,a.Z)(t.root,u),ref:n},s))}));n.Z=(0,u.Z)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(s)},743:function(e,n,t){"use strict";var r=t(2122),o=t(1253),i=t(7294),a=(t(5697),t(3636)),u=t(4720),s=t(7812),c=t(4670),d=t(8078),l=i.forwardRef((function(e,n){var t=e.children,c=e.classes,l=e.className,f=e.expandIcon,p=e.IconButtonProps,m=e.onBlur,b=e.onClick,g=e.onFocusVisible,h=(0,o.Z)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),v=i.useState(!1),x=v[0],y=v[1],Z=i.useContext(d.Z),E=Z.disabled,C=void 0!==E&&E,R=Z.expanded,w=Z.toggle;return i.createElement(u.Z,(0,r.Z)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":R,className:(0,a.Z)(c.root,l,C&&c.disabled,R&&c.expanded,x&&c.focused),onFocusVisible:function(e){y(!0),g&&g(e)},onBlur:function(e){y(!1),m&&m(e)},onClick:function(e){w&&w(e),b&&b(e)},ref:n},h),i.createElement("div",{className:(0,a.Z)(c.content,R&&c.expanded)},t),f&&i.createElement(s.Z,(0,r.Z)({className:(0,a.Z)(c.expandIcon,R&&c.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},p),f))}));n.Z=(0,c.Z)((function(e){var n={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],n),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],n),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",n),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(l)},8731:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return r.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return s.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return l},setRef:function(){return f.Z},unstable_useId:function(){return v},unsupportedProp:function(){return p},useControlled:function(){return m.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return x.Z}});var r=t(3871),o=t(2568),i=t(5209),a=t(9437);function u(e,n){return function(){return null}}var s=t(3711),c=t(626),d=t(713);function l(e){return function(){return null}}var f=t(4236);function p(e,n,t,r,o){return null}var m=t(2775),b=t(5192),g=t(3834),h=t(7294);function v(e){var n=h.useState(e),t=n[0],r=n[1],o=e||t;return h.useEffect((function(){null==t&&r("mui-".concat(Math.round(1e5*Math.random())))}),[t]),o}var x=t(4896)},4566:function(e,n,t){"use strict";var r=t(5318),o=t(862);n.Z=void 0;var i=o(t(7294)),a=(0,r(t(2108)).default)(i.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=a},2108:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(8731)}}]);