"use strict";(self.webpackChunkchoice_champs=self.webpackChunkchoice_champs||[]).push([[123],{6123:function(e,o,n){n.r(o);var t=n(4165),a=n(5861),r=n(1413),i=n(885),c=n(2791),s=n(1614),d=n(890),l=n(4554),u=n(6151),p=n(1889),v=n(7621),m=n(2169),f=n(9504),h=n(2363),g=n(9062),x=n(3504),b=n(2151),Z=n(184);o.default=function(){var e=c.useState([]),o=(0,i.Z)(e,2),n=o[0],S=o[1];c.useEffect((function(){var e=(0,g.IO)((0,g.hJ)(b.db,"Presidents"),(0,g.Xo)("year","desc")),o=(0,g.cf)(e,(function(e){var o=[];e.forEach((function(e){o.push((0,r.Z)((0,r.Z)({},e.data()),{},{id:e.id}))})),S(o)}));return function(){return o()}}),[]);var C=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(o){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.oe)((0,g.JU)(b.db,"Presidents",o));case 2:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}();return(0,Z.jsx)("div",{children:(0,Z.jsxs)(s.Z,{maxWidth:"lg",children:[(0,Z.jsx)(d.Z,{align:"center",variant:"h5",sx:{fontWeight:"bold"},children:"Presidents"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(x.rU,{to:"/mambo/presidents/add",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,Z.jsx)(l.Z,{textAlign:"center",justifyContent:"center",sx:{padding:"20px"},children:(0,Z.jsx)(u.Z,{variant:"outlined",sx:{backgroundColor:"#f36a11",color:"#fff",borderRadius:"10px"},children:"Add President"})})}),(0,Z.jsx)(p.ZP,{container:!0,spacing:3,justifyContent:"center",children:n.map((function(e){return(0,Z.jsx)(p.ZP,{item:!0,lg:3,md:3,sm:12,xs:12,children:(0,Z.jsxs)(v.Z,{children:[(0,Z.jsx)(m.Z,{component:"img",image:null===e||void 0===e?void 0:e.imageUrl,alt:null===e||void 0===e?void 0:e.name,height:"200px"}),(0,Z.jsxs)(f.Z,{children:[(0,Z.jsx)(d.Z,{align:"center",variant:"subtitle1",children:null===e||void 0===e?void 0:e.name}),(0,Z.jsx)(d.Z,{align:"center",variant:"subtitle2",children:null===e||void 0===e?void 0:e.year})]}),(0,Z.jsx)(h.Z,{sx:{justifyContent:"center"},children:(0,Z.jsx)(u.Z,{variant:"outlined",sx:{backgroundColor:"#f36a11",color:"#fff"},onClick:function(){return C(null===e||void 0===e?void 0:e.id)},children:"Delete"})})]})},null===e||void 0===e?void 0:e.id)}))})]})})}},2151:function(e,o,n){n.d(o,{db:function(){return s},t:function(){return d}});var t=n(9062),a=n(2426),r=n(4453),i=n(6905),c=(0,a.ZF)({apiKey:"AIzaSyCQvJRPMbo0s4F1zlG5HLbcAR4H4Fm84HE",authDomain:"choice-champs.firebaseapp.com",projectId:"choice-champs",storageBucket:"choice-champs.appspot.com",messagingSenderId:"56028321553",appId:"1:56028321553:web:21169da173232efcd89eb0",measurementId:"G-8JRFRS2CBQ"}),s=(0,t.ad)(),d=(0,r.cF)(c);(0,i.v0)(c)},6151:function(e,o,n){n.d(o,{Z:function(){return R}});var t=n(4942),a=n(3366),r=n(7462),i=n(2791),c=n(8182),s=n(5735),d=n(4419),l=n(2065),u=n(6934),p=n(1402),v=n(3701),m=n(4036),f=n(1217);function h(e){return(0,f.Z)("MuiButton",e)}var g=(0,n(5878).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=i.createContext({}),b=n(184),Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=["root"],C=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},y=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,o[n.variant],o["".concat(n.variant).concat((0,m.Z)(n.color))],o["size".concat((0,m.Z)(n.size))],o["".concat(n.variant,"Size").concat((0,m.Z)(n.size))],"inherit"===n.color&&o.colorInherit,n.disableElevation&&o.disableElevation,n.fullWidth&&o.fullWidth]}})((function(e){var o,n,a,i=e.theme,c=e.ownerState;return(0,r.Z)({},i.typography.button,(o={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,t.Z)(o,"&.".concat(g.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,t.Z)(o,"&.".concat(g.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===c.variant&&"secondary"===c.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),o),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,l.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(n=(a=i.palette).getContrastText)?void 0:n.call(a,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var o;return e.ownerState.disableElevation&&(o={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,t.Z)(o,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,t.Z)(o,"&:active",{boxShadow:"none"}),(0,t.Z)(o,"&.".concat(g.disabled),{boxShadow:"none"}),o)})),z=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,o){var n=e.ownerState;return[o.startIcon,o["iconSize".concat((0,m.Z)(n.size))]]}})((function(e){var o=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},C(o))})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,o){var n=e.ownerState;return[o.endIcon,o["iconSize".concat((0,m.Z)(n.size))]]}})((function(e){var o=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},C(o))})),R=i.forwardRef((function(e,o){var n=i.useContext(x),t=(0,s.Z)(n,e),l=(0,p.Z)({props:t,name:"MuiButton"}),u=l.children,v=l.color,f=void 0===v?"primary":v,g=l.component,C=void 0===g?"button":g,R=l.className,I=l.disabled,M=void 0!==I&&I,k=l.disableElevation,j=void 0!==k&&k,N=l.disableFocusRipple,P=void 0!==N&&N,E=l.endIcon,F=l.focusVisibleClassName,W=l.fullWidth,B=void 0!==W&&W,L=l.size,O=void 0===L?"medium":L,A=l.startIcon,T=l.type,V=l.variant,q=void 0===V?"text":V,D=(0,a.Z)(l,Z),J=(0,r.Z)({},l,{color:f,component:C,disabled:M,disableElevation:j,disableFocusRipple:P,fullWidth:B,size:O,type:T,variant:q}),H=function(e){var o=e.color,n=e.disableElevation,t=e.fullWidth,a=e.size,i=e.variant,c=e.classes,s={root:["root",i,"".concat(i).concat((0,m.Z)(o)),"size".concat((0,m.Z)(a)),"".concat(i,"Size").concat((0,m.Z)(a)),"inherit"===o&&"colorInherit",n&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,m.Z)(a))],endIcon:["endIcon","iconSize".concat((0,m.Z)(a))]},l=(0,d.Z)(s,h,c);return(0,r.Z)({},c,l)}(J),U=H.root,_=(0,a.Z)(H,S),G=A&&(0,b.jsx)(z,{className:_.startIcon,ownerState:J,children:A}),Q=E&&(0,b.jsx)(w,{className:_.endIcon,ownerState:J,children:E});return(0,b.jsxs)(y,(0,r.Z)({ownerState:J,className:(0,c.default)(n.className,U,R),component:C,disabled:M,focusRipple:!P,focusVisibleClassName:(0,c.default)(_.focusVisible,F),ref:o,type:T},D,{classes:_,children:[G,u,Q]}))}))},2363:function(e,o,n){n.d(o,{Z:function(){return f}});var t=n(3366),a=n(7462),r=n(2791),i=n(8182),c=n(4419),s=n(6934),d=n(1402),l=n(1217);function u(e){return(0,l.Z)("MuiCardActions",e)}(0,n(5878).Z)("MuiCardActions",["root","spacing"]);var p=n(184),v=["disableSpacing","className"],m=(0,s.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,!n.disableSpacing&&o.spacing]}})((function(e){var o=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=r.forwardRef((function(e,o){var n=(0,d.Z)({props:e,name:"MuiCardActions"}),r=n.disableSpacing,s=void 0!==r&&r,l=n.className,f=(0,t.Z)(n,v),h=(0,a.Z)({},n,{disableSpacing:s}),g=function(e){var o=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,c.Z)(n,u,o)}(h);return(0,p.jsx)(m,(0,a.Z)({className:(0,i.default)(g.root,l),ownerState:h,ref:o},f))}))},9504:function(e,o,n){n.d(o,{Z:function(){return f}});var t=n(7462),a=n(3366),r=n(2791),i=n(8182),c=n(4419),s=n(6934),d=n(1402),l=n(1217);function u(e){return(0,l.Z)("MuiCardContent",e)}(0,n(5878).Z)("MuiCardContent",["root"]);var p=n(184),v=["className","component"],m=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=r.forwardRef((function(e,o){var n=(0,d.Z)({props:e,name:"MuiCardContent"}),r=n.className,s=n.component,l=void 0===s?"div":s,f=(0,a.Z)(n,v),h=(0,t.Z)({},n,{component:l}),g=function(e){var o=e.classes;return(0,c.Z)({root:["root"]},u,o)}(h);return(0,p.jsx)(m,(0,t.Z)({as:l,className:(0,i.default)(g.root,r),ownerState:h,ref:o},f))}))},2169:function(e,o,n){n.d(o,{Z:function(){return g}});var t=n(3366),a=n(7462),r=n(2791),i=n(8182),c=n(4419),s=n(1402),d=n(6934),l=n(1217);function u(e){return(0,l.Z)("MuiCardMedia",e)}(0,n(5878).Z)("MuiCardMedia",["root","media","img"]);var p=n(184),v=["children","className","component","image","src","style"],m=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState,t=n.isMediaComponent,a=n.isImageComponent;return[o.root,t&&o.media,a&&o.img]}})((function(e){var o=e.ownerState;return(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})})),f=["video","audio","picture","iframe","img"],h=["picture","img"],g=r.forwardRef((function(e,o){var n=(0,s.Z)({props:e,name:"MuiCardMedia"}),r=n.children,d=n.className,l=n.component,g=void 0===l?"div":l,x=n.image,b=n.src,Z=n.style,S=(0,t.Z)(n,v),C=-1!==f.indexOf(g),y=!C&&x?(0,a.Z)({backgroundImage:'url("'.concat(x,'")')},Z):Z,z=(0,a.Z)({},n,{component:g,isMediaComponent:C,isImageComponent:-1!==h.indexOf(g)}),w=function(e){var o=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,c.Z)(n,u,o)}(z);return(0,p.jsx)(m,(0,a.Z)({className:(0,i.default)(w.root,d),as:g,role:!C&&x?"img":void 0,ref:o,style:y,ownerState:z,src:C?x||b:void 0},S,{children:r}))}))},7621:function(e,o,n){n.d(o,{Z:function(){return h}});var t=n(7462),a=n(3366),r=n(2791),i=n(8182),c=n(4419),s=n(6934),d=n(1402),l=n(703),u=n(1217);function p(e){return(0,u.Z)("MuiCard",e)}(0,n(5878).Z)("MuiCard",["root"]);var v=n(184),m=["className","raised"],f=(0,s.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(){return{overflow:"hidden"}})),h=r.forwardRef((function(e,o){var n=(0,d.Z)({props:e,name:"MuiCard"}),r=n.className,s=n.raised,l=void 0!==s&&s,u=(0,a.Z)(n,m),h=(0,t.Z)({},n,{raised:l}),g=function(e){var o=e.classes;return(0,c.Z)({root:["root"]},p,o)}(h);return(0,v.jsx)(f,(0,t.Z)({className:(0,i.default)(g.root,r),elevation:l?8:void 0,ref:o,ownerState:h},u))}))}}]);
//# sourceMappingURL=123.3f287d09.chunk.js.map