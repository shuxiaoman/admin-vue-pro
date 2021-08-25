import{P as o,s as e,h as l,_ as n,C as c}from"./debounce.53224f53.js";import{W as a}from"./wave.fd760b9f.js";import{P as i,a as t}from"./EllipsisOutlined.78e82d0a.js";import{d as s,s as u,i as r,p as v,A as d,F as p}from"./vendor.6f72d5fc.js";var f=s({name:"ACheckableTag",props:{prefixCls:o.string,checked:o.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(o,c){var a=c.slots,i=c.emit,t=e("tag",o).prefixCls,s=function(e){var l=o.checked;i("update:checked",!l),i("change",!l),i("click",e)},v=u((function(){var e;return l(t.value,(n(e={},"".concat(t.value,"-checkable"),!0),n(e,"".concat(t.value,"-checkable-checked"),o.checked),e))}));return function(){var o;return r("span",{class:v.value,onClick:s},[null===(o=a.default)||void 0===o?void 0:o.call(a)])}}}),h=new RegExp("^(".concat(i.join("|"),")(-inverse)?$")),k=new RegExp("^(".concat(t.join("|"),")$")),m=s({name:"ATag",props:{prefixCls:o.string,color:{type:String},closable:o.looseBool.def(!1),closeIcon:o.VNodeChild,visible:o.looseBool,onClose:{type:Function},icon:o.VNodeChild},emits:["update:visible","close"],slots:["closeIcon","icon"],setup:function(o,i){var t=i.slots,s=i.emit,f=i.attrs,m=e("tag",o),C=m.prefixCls,b=m.direction,g=v(!0);d((function(){void 0!==o.visible&&(g.value=o.visible)}));var x=function(e){e.stopPropagation(),s("update:visible",!1),s("close",e),e.defaultPrevented||void 0===o.visible&&(g.value=!1)},j=u((function(){var e=o.color;return!!e&&(h.test(e)||k.test(e))})),y=u((function(){var e;return l(C.value,(n(e={},"".concat(C.value,"-").concat(o.color),j.value),n(e,"".concat(C.value,"-has-color"),o.color&&!j.value),n(e,"".concat(C.value,"-hidden"),!g.value),n(e,"".concat(C.value,"-rtl"),"rtl"===b.value),e))}));return function(){var e,l,n,i=o.icon,s=void 0===i?null===(e=t.icon)||void 0===e?void 0:e.call(t):i,u=o.color,v=o.closeIcon,d=void 0===v?null===(l=t.closeIcon)||void 0===l?void 0:l.call(t):v,h=o.closable,k=void 0!==h&&h,m={backgroundColor:u&&!j.value?u:void 0},b=s||null,g=null===(n=t.default)||void 0===n?void 0:n.call(t),F=b?r(p,null,[b,r("span",null,[g])]):g,I="onClick"in f,P=r("span",{class:y.value,style:m},[F,k?d?r("div",{class:"".concat(C,"-close-icon"),onClick:x},[d]):r(c,{class:"".concat(C,"-close-icon"),onClick:x},null):null]);return I?r(a,null,{default:function(){return[P]}}):P}}});m.CheckableTag=f,m.install=function(o){return o.component(m.name,m),o.component(f.name,f),o};export{m as T};
