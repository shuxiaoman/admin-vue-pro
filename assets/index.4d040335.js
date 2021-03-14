import{a2 as e,W as n,d as t,V as o,z as a,A as c,r,M as s,c as l,J as i,a3 as u,v as f,w as p,K as d,a4 as v,a5 as b,L as g,X as O,a6 as h,Z as y,Y as j,a7 as w,a8 as m,a9 as x,aa as C}from"./index.227883cc.js";function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){V(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!i(e)}function N(){}function B(e,n,t){var o,a;return null!==(a=null===(o=e[t])||void 0===o?void 0:o.call(e))&&void 0!==a?a:n[t]}var E={success:O,info:h,error:y,warning:j},S={success:w,info:m,error:x,warning:C},k=n("success","info","warning","error"),H=e(t({name:"AAlert",inheritAttrs:!1,props:{type:o.oneOf(k),closable:o.looseBool,closeText:o.VNodeChild,message:o.VNodeChild,description:o.VNodeChild,afterClose:o.func.def(N),showIcon:o.looseBool,prefixCls:o.string,banner:o.looseBool,icon:o.VNodeChild,onClose:o.VNodeChild},emits:["close"],setup:function(e,n){var t=n.slots,o=n.emit,i=n.attrs,O=n.expose,h=a("configProvider",c),y=r(!1),j=r(!1),w=r(),m=function(e){e.preventDefault();var n=w.value;n.style.height="".concat(n.offsetHeight,"px"),n.style.height="".concat(n.offsetHeight,"px"),y.value=!0,o("close",e)},x=function(){var n;y.value=!1,j.value=!0,null===(n=e.afterClose)||void 0===n||n.call(e)};return O({animationEnd:x}),function(){var n,o,a=e.prefixCls,c=e.banner,r=(0,h.getPrefixCls)("alert",a),O=e.closable,C=e.type,P=e.showIcon,N=B(t,e,"closeText"),k=B(t,e,"description"),H=B(t,e,"message"),I=B(t,e,"icon");P=!(!c||void 0!==P)||P;var L=(k?S:E)[C=c&&void 0===C?"warning":C||"info"]||null;N&&(O=!0);var T=s(r,(V(o={},"".concat(r,"-").concat(C),!0),V(o,"".concat(r,"-closing"),y.value),V(o,"".concat(r,"-with-description"),!!k),V(o,"".concat(r,"-no-icon"),!P),V(o,"".concat(r,"-banner"),!!c),V(o,"".concat(r,"-closable"),O),o)),z=O?l("button",{type:"button",onClick:m,class:"".concat(r,"-close-icon"),tabindex:0},[N?l("span",{class:"".concat(r,"-close-text")},D(N)?N:{default:function(){return[N]}}):l(u,null,null)]):null,J=I&&(f(I)?p(I,{class:"".concat(r,"-icon")}):l("span",{class:"".concat(r,"-icon")},D(I)?I:{default:function(){return[I]}}))||l(L,{class:"".concat(r,"-icon")},null),K=d("".concat(r,"-slide-up"),{appear:!1,onAfterLeave:x});return j.value?null:l(g,K,D(n=v(l("div",A(A({},i),{},{class:[i.class,T],"data-show":!y.value,ref:w}),[P?J:null,l("span",{class:"".concat(r,"-message")},D(H)?H:{default:function(){return[H]}}),l("span",{class:"".concat(r,"-description")},D(k)?k:{default:function(){return[k]}}),z]),[[b,!y.value]]))?n:{default:function(){return[n]}})}}}));export{H as A};
