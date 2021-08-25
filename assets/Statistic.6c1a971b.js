import{g as e,d as a,P as t,t as r,_ as n,k as o,j as i,a as u,A as l,a0 as f,b as s}from"./debounce.67102cb7.js";import{i as c}from"./initDefaultProps.472cb804.js";import{x as d,y as p,w as v}from"./SearchOutlined.533be71d.js";import{b as m}from"./_baseProperty.74f89655.js";import{t as g}from"./toInteger.c61af842.js";import{i as h,d as x,p as y}from"./vendor.1bd2b8e6.js";import{o as b}from"./index.9563d230.js";var C=Math.floor;function S(e,a){var t="";if(!e||a<1||a>9007199254740991)return t;do{a%2&&(t+=e),(a=C(a/2))&&(e+=e)}while(a);return t}var w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function j(e){return w.test(e)}var O=m("length"),k="[\\ud800-\\udfff]",A="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",B="\\ud83c[\\udffb-\\udfff]",T="[^\\ud800-\\udfff]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",q="[\\ud800-\\udbff][\\udc00-\\udfff]",z="(?:"+A+"|"+B+")"+"?",R="[\\ufe0e\\ufe0f]?"+z+("(?:\\u200d(?:"+[T,N,q].join("|")+")[\\ufe0e\\ufe0f]?"+z+")*"),E="(?:"+[T+A+"?",A,N,q,k].join("|")+")",P=RegExp(B+"(?="+B+")|"+E+R,"g");function V(e){return j(e)?function(e){for(var a=P.lastIndex=0;P.test(e);)++a;return a}(e):O(e)}var D="[\\ud800-\\udfff]",I="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",M="\\ud83c[\\udffb-\\udfff]",_="[^\\ud800-\\udfff]",F="(?:\\ud83c[\\udde6-\\uddff]){2}",H="[\\ud800-\\udbff][\\udc00-\\udfff]",$="(?:"+I+"|"+M+")"+"?",G="[\\ufe0e\\ufe0f]?"+$+("(?:\\u200d(?:"+[_,F,H].join("|")+")[\\ufe0e\\ufe0f]?"+$+")*"),J="(?:"+[_+I+"?",I,F,H,D].join("|")+")",K=RegExp(M+"(?="+M+")|"+J+G,"g");function L(e){return j(e)?function(e){return e.match(K)||[]}(e):function(e){return e.split("")}(e)}var Q=Math.ceil;function U(e,a){var t=(a=void 0===a?" ":p(a)).length;if(t<2)return t?S(a,e):a;var r=S(a,Q(e/V(a)));return j(a)?function(e,a,t){var r=e.length;return t=void 0===t?r:t,!a&&t>=r?e:d(e,a,t)}(L(r),0,e).join(""):r.slice(0,e)}var W=function(e){var a,t=e.value,r=e.formatter,n=e.precision,o=e.decimalSeparator,i=e.groupSeparator,u=void 0===i?"":i,l=e.prefixCls;if("function"==typeof r)a=r({value:t});else{var f=String(t),s=f.match(/^(-?)(\d*)(\.(\d+))?$/);if(s){var c=s[1],d=s[2]||"0",p=s[4]||"";d=d.replace(/\B(?=(\d{3})+(?!\d))/g,u),"number"==typeof n&&(p=function(e,a,t){e=v(e);var r=(a=g(a))?V(e):0;return a&&r<a?e+U(a-r,t):e}(p,n,"0").slice(0,n)),p&&(p="".concat(o).concat(p)),a=[h("span",{key:"int",class:"".concat(l,"-content-value-int")},[c,d]),p&&h("span",{key:"decimal",class:"".concat(l,"-content-value-decimal")},[p])]}else a=f}return h("span",{class:"".concat(l,"-content-value")},[a])};W.displayName="StatisticNumber";var X=function(t){var r,n,o=t.prefixCls,i=t.size,u=t.shape,l=e((a(r={},"".concat(o,"-lg"),"large"===i),a(r,"".concat(o,"-sm"),"small"===i),r)),f=e((a(n={},"".concat(o,"-circle"),"circle"===u),a(n,"".concat(o,"-square"),"square"===u),a(n,"".concat(o,"-round"),"round"===u),n)),s="number"==typeof i?{width:"".concat(i,"px"),height:"".concat(i,"px"),lineHeight:"".concat(i,"px")}:{};return h("span",{class:e(o,l,f),style:s},null)};X.displayName="SkeletonElement";var Y=c(n(n({},{prefixCls:t.string,size:t.oneOfType([t.oneOf(r("large","small","default")),t.number]),shape:t.oneOf(r("circle","square","round")),active:t.looseBool}),{shape:t.oneOf(r("circle","square"))}),{size:"large"});x({name:"ASkeletonAvatar",props:Y,setup:function(t){var r=o("skeleton",t).prefixCls,n=y((function(){return e(r.value,"".concat(r.value,"-element"),a({},"".concat(r.value,"-active"),t.active))}));return function(){return h("div",{class:n.value},[h(X,i(i({},t),{},{prefixCls:"".concat(r.value,"-avatar")}),null)])}}});var Z={prefixCls:t.string,width:t.oneOfType([t.number,t.string])},ee=x({name:"SkeletonTitle",props:Z,setup:function(e){return function(){var a=e.prefixCls,t=e.width,r="number"==typeof t?"".concat(t,"px"):t;return h("h3",{class:a,style:{width:r}},null)}}}),ae=t.oneOfType([t.number,t.string]),te={prefixCls:t.string,width:t.oneOfType([ae,t.arrayOf(ae)]),rows:t.number},re=x({name:"SkeletonParagraph",props:te,setup:function(e){return function(){var a=e.prefixCls,t=e.rows,r=u(Array(t)).map((function(a,t){var r=function(a){var t=e.width,r=e.rows,n=void 0===r?2:r;return Array.isArray(t)?t[a]:n-1===a?t:void 0}(t);return h("li",{key:t,style:{width:"number"==typeof r?"".concat(r,"px"):r}},null)}));return h("ul",{class:a},[r])}}});function ne(e){return e&&"object"===s(e)?e:{}}var oe=x({name:"ASkeleton",props:f({active:t.looseBool,loading:t.looseBool,prefixCls:t.string,avatar:l(t.oneOfType([t.string,t.shape(b(Y,["active"])).loose,t.looseBool])),title:l(t.oneOfType([t.looseBool,t.string,t.shape(Z).loose])),paragraph:l(t.oneOfType([t.looseBool,t.string,t.shape(te).loose]))},{avatar:!1,title:!0,paragraph:!0}),setup:function(t,r){var i=r.slots,u=o("skeleton",t),l=u.prefixCls,f=u.direction;return function(){var r,o=t.loading,u=t.avatar,s=t.title,c=t.paragraph,d=t.active,p=t.round,v=l.value;if(o||void 0===t.loading){var m,g,x,y=!!u||""===u,b=!!s||""===s,C=!!c||""===c;if(y){var S=n(n({prefixCls:"".concat(v,"-avatar")},function(e,a){return e&&!a?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(b,C)),ne(u));g=h("div",{class:"".concat(v,"-header")},[h(X,S,null)])}if(b||C){var w,j;if(b){var O=n(n({prefixCls:"".concat(v,"-title")},function(e,a){return!e&&a?{width:"38%"}:e&&a?{width:"50%"}:{}}(y,C)),ne(s));w=h(ee,O,null)}if(C){var k=n(n({prefixCls:"".concat(v,"-paragraph")},function(e,a){var t={};return e&&a||(t.width="61%"),t.rows=!e&&a?3:2,t}(y,b)),ne(c));j=h(re,k,null)}x=h("div",{class:"".concat(v,"-content")},[w,j])}var A=e(v,(a(m={},"".concat(v,"-with-avatar"),y),a(m,"".concat(v,"-active"),d),a(m,"".concat(v,"-rtl"),"rtl"===f.value),a(m,"".concat(v,"-round"),p),m));return h("div",{class:A},[g,x])}return null===(r=i.default)||void 0===r?void 0:r.call(i)}}}),ie={prefixCls:t.string,decimalSeparator:t.string,groupSeparator:t.string,format:t.string,value:{type:[String,Number,Object]},valueStyle:t.style,valueRender:t.any,formatter:t.any,precision:t.number,prefix:t.VNodeChild,suffix:t.VNodeChild,title:t.VNodeChild,onFinish:t.func,loading:t.looseBool},ue=x({name:"AStatistic",props:c(ie,{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,t){var r=t.slots,u=o("statistic",e),l=u.prefixCls,f=u.direction;return function(){var t,o,u,s,c,d,p,v=e.value,m=void 0===v?0:v,g=e.valueStyle,x=e.valueRender,y=l.value,b=null!==(t=e.title)&&void 0!==t?t:null===(o=r.title)||void 0===o?void 0:o.call(r),C=null!==(u=e.prefix)&&void 0!==u?u:null===(s=r.prefix)||void 0===s?void 0:s.call(r),S=null!==(c=e.suffix)&&void 0!==c?c:null===(d=r.suffix)||void 0===d?void 0:d.call(r),w=null!==(p=e.formatter)&&void 0!==p?p:r.formatter,j=h(W,i({"data-for-update":Date.now()},n(n({},e),{prefixCls:y,value:m,formatter:w})),null);return x&&(j=x(j)),h("div",{class:[y,a({},"".concat(y,"-rtl"),"rtl"===f.value)]},[b&&h("div",{class:"".concat(y,"-title")},[b]),h(oe,{paragraph:!1,loading:e.loading},{default:function(){return[h("div",{style:g,class:"".concat(y,"-content")},[C&&h("span",{class:"".concat(y,"-content-prefix")},[C]),j,S&&h("span",{class:"".concat(y,"-content-suffix")},[S])])]}})])}}});export{ue as S,ie as a,U as c,V as s};