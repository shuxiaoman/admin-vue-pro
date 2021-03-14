import{d as e,V as n,z as o,A as c,M as l,c as t,b9 as a,ba as i,r,aQ as s,J as u,aI as d,b6 as v,a3 as f}from"./index.227883cc.js";function p(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var b=e({name:"ACheckableTag",props:{prefixCls:n.string,checked:n.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(e,n){var a=n.slots,i=n.emit,r=o("configProvider",c).getPrefixCls,s=function(n){var o=e.checked;i("update:checked",!o),i("change",!o),i("click",n)};return function(){var n,o,c=e.checked,i=e.prefixCls,u=r("tag",i),d=l(u,(p(n={},"".concat(u,"-checkable"),!0),p(n,"".concat(u,"-checkable-checked"),c),n));return t("span",{class:d,onClick:s},[null===(o=a.default)||void 0===o?void 0:o.call(a)])}}});function g(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function k(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!u(e)}var C=new RegExp("^(".concat(a.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(i.join("|"),")$")),m={prefixCls:n.string,color:{type:String},closable:n.looseBool.def(!1),closeIcon:n.VNodeChild,visible:n.looseBool,onClose:{type:Function},icon:n.VNodeChild},x=e({name:"ATag",emits:["update:visible","close"],setup:function(e,n){var a=n.slots,i=n.emit,u=n.attrs,p=o("configProvider",c).getPrefixCls,b=r(!0);s((function(){void 0!==e.visible&&(b.value=e.visible)}));var m=function(n){n.stopPropagation(),i("update:visible",!1),i("close",n),n.defaultPrevented||void 0===e.visible&&(b.value=!1)},x=function(){var n=e.color;return!!n&&(C.test(n)||h.test(n))};return function(){var n,o,c,i,r=e.prefixCls,s=e.icon,C=void 0===s?null===(o=a.icon)||void 0===o?void 0:o.call(a):s,h=e.color,y=e.closeIcon,j=void 0===y?null===(c=a.closeIcon)||void 0===c?void 0:c.call(a):y,P=e.closable,w=void 0!==P&&P,I=x(),O=p("tag",r),T={backgroundColor:h&&!x()?h:void 0},A=l(O,(g(n={},"".concat(O,"-").concat(h),I),g(n,"".concat(O,"-has-color"),h&&!I),g(n,"".concat(O,"-hidden"),!b.value),n)),B=C||null,F=null===(i=a.default)||void 0===i?void 0:i.call(a),V=B?t(d,null,[B,t("span",null,k(F)?F:{default:function(){return[F]}})]):F,E="onClick"in u,N=t("span",{class:A,style:T},[V,w?j?t("div",{class:"".concat(O,"-close-icon"),onClick:m},k(j)?j:{default:function(){return[j]}}):t(f,{class:"".concat(O,"-close-icon"),onClick:m},null):null]);return E?t(v,null,k(N)?N:{default:function(){return[N]}}):N}}});x.props=m,x.CheckableTag=b,x.install=function(e){return e.component(x.name,x),e.component(b.name,b),e};export{x as T};
