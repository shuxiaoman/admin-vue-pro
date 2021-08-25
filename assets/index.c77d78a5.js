import{P as o,k as e,g as l,d as c,C as n}from"./debounce.67102cb7.js";import{W as a}from"./wave.210dcc9a.js";import{P as i,a as t}from"./EllipsisOutlined.88c23d2d.js";import{d as s,p as u,i as r,l as v,y as d,F as p}from"./vendor.1bd2b8e6.js";var f=s({name:"ACheckableTag",props:{prefixCls:o.string,checked:o.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(o,n){var a=n.slots,i=n.emit,t=e("tag",o).prefixCls,s=function(e){var l=o.checked;i("update:checked",!l),i("change",!l),i("click",e)},v=u((function(){var e;return l(t.value,(c(e={},"".concat(t.value,"-checkable"),!0),c(e,"".concat(t.value,"-checkable-checked"),o.checked),e))}));return function(){var o;return r("span",{class:v.value,onClick:s},[null===(o=a.default)||void 0===o?void 0:o.call(a)])}}}),k=new RegExp("^(".concat(i.join("|"),")(-inverse)?$")),m=new RegExp("^(".concat(t.join("|"),")$")),b=s({name:"ATag",props:{prefixCls:o.string,color:{type:String},closable:o.looseBool.def(!1),closeIcon:o.VNodeChild,visible:o.looseBool,onClose:{type:Function},icon:o.VNodeChild},emits:["update:visible","close"],slots:["closeIcon","icon"],setup:function(o,i){var t=i.slots,s=i.emit,f=i.attrs,b=e("tag",o),h=b.prefixCls,C=b.direction,g=v(!0);d((function(){void 0!==o.visible&&(g.value=o.visible)}));var x=function(e){e.stopPropagation(),s("update:visible",!1),s("close",e),e.defaultPrevented||void 0===o.visible&&(g.value=!1)},j=u((function(){var e=o.color;return!!e&&(k.test(e)||m.test(e))})),y=u((function(){var e;return l(h.value,(c(e={},"".concat(h.value,"-").concat(o.color),j.value),c(e,"".concat(h.value,"-has-color"),o.color&&!j.value),c(e,"".concat(h.value,"-hidden"),!g.value),c(e,"".concat(h.value,"-rtl"),"rtl"===C.value),e))}));return function(){var e,l,c,i=o.icon,s=void 0===i?null===(e=t.icon)||void 0===e?void 0:e.call(t):i,u=o.color,v=o.closeIcon,d=void 0===v?null===(l=t.closeIcon)||void 0===l?void 0:l.call(t):v,k=o.closable,m=void 0!==k&&k,b={backgroundColor:u&&!j.value?u:void 0},C=s||null,g=null===(c=t.default)||void 0===c?void 0:c.call(t),F=C?r(p,null,[C,r("span",null,[g])]):g,I="onClick"in f,P=r("span",{class:y.value,style:b},[F,m?d?r("div",{class:"".concat(h,"-close-icon"),onClick:x},[d]):r(n,{class:"".concat(h,"-close-icon"),onClick:x},null):null]);return I?r(a,null,{default:function(){return[P]}}):P}}});b.CheckableTag=f,b.install=function(o){return o.component(b.name,b),o.component(f.name,f),o};export{b as T};
