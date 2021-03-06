import{d as e,P as n,f as o,h as c,b as l,c as t,b0 as i,b1 as a,r,au as s,i as u,F as d,aZ as f,aX as v}from"./index.0bbf6337.js";function p(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var b=e({name:"ACheckableTag",props:{prefixCls:n.string,checked:n.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(e,n){var i=n.slots,a=n.emit,r=o("configProvider",c).getPrefixCls,s=function(n){var o=e.checked;a("update:checked",!o),a("change",!o),a("click",n)};return function(){var n,o,c=e.checked,a=e.prefixCls,u=r("tag",a),d=l(u,(p(n={},"".concat(u,"-checkable"),!0),p(n,"".concat(u,"-checkable-checked"),c),n));return t("span",{class:d,onClick:s},[null===(o=i.default)||void 0===o?void 0:o.call(i)])}}});function g(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function h(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!u(e)}var k=new RegExp("^(".concat(i.join("|"),")(-inverse)?$")),C=new RegExp("^(".concat(a.join("|"),")$")),m={prefixCls:n.string,color:{type:String},closable:n.looseBool.def(!1),closeIcon:n.VNodeChild,visible:n.looseBool,onClose:{type:Function},icon:n.VNodeChild},x=e({name:"ATag",emits:["update:visible","close"],setup:function(e,n){var i=n.slots,a=n.emit,u=n.attrs,p=o("configProvider",c).getPrefixCls,b=r(!0);s((function(){void 0!==e.visible&&(b.value=e.visible)}));var m=function(n){n.stopPropagation(),a("update:visible",!1),a("close",n),n.defaultPrevented||void 0===e.visible&&(b.value=!1)},x=function(){var n=e.color;return!!n&&(k.test(n)||C.test(n))};return function(){var n,o,c,a,r=e.prefixCls,s=e.icon,k=void 0===s?null===(o=i.icon)||void 0===o?void 0:o.call(i):s,C=e.color,y=e.closeIcon,P=void 0===y?null===(c=i.closeIcon)||void 0===c?void 0:c.call(i):y,j=e.closable,w=void 0!==j&&j,F=x(),O=p("tag",r),T={backgroundColor:C&&!x()?C:void 0},B=l(O,(g(n={},"".concat(O,"-").concat(C),F),g(n,"".concat(O,"-has-color"),C&&!F),g(n,"".concat(O,"-hidden"),!b.value),n)),I=k||null,A=null===(a=i.default)||void 0===a?void 0:a.call(i),E=I?t(d,null,[I,t("span",null,h(A)?A:{default:function(){return[A]}})]):A,N="onClick"in u,R=t("span",{class:B,style:T},[E,w?P?t("div",{class:"".concat(O,"-close-icon"),onClick:m},h(P)?P:{default:function(){return[P]}}):t(v,{class:"".concat(O,"-close-icon"),onClick:m},null):null]);return N?t(f,null,h(R)?R:{default:function(){return[R]}}):R}}});x.props=m,x.CheckableTag=b,x.install=function(e){return e.component(x.name,x),e.component(b.name,b),e};export{x as T};
