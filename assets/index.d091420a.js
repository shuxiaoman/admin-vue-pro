import{w as e,M as t,d as n}from"./toNumber.5775a339.js";import{d as a,n as r,i as o,s as i}from"./vendor.d7feebf9.js";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=e(a({name:"ADivider",props:{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"}},setup:function(e,a){var s=a.slots,u=i("configProvider",n).getPrefixCls,c=r((function(){return u("divider",e.prefixCls)})),d=r((function(){var t,n=e.type,a=e.dashed,r=e.orientation,o=r.length>0?"-"+r:r,i=c.value;return l(t={},i,!0),l(t,"".concat(i,"-").concat(n),!0),l(t,"".concat(i,"-with-text").concat(o),s.default),l(t,"".concat(i,"-dashed"),!!a),t}));return function(){var e,n=t(null===(e=s.default)||void 0===e?void 0:e.call(s));return o("div",{class:d.value,role:"separator"},[n.length?o("span",{class:"".concat(c.value,"-inner-text")},[n]):null])}}}));export{s as D};
