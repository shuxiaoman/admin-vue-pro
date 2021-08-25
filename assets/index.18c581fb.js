import{r as e,t as n,P as o,q as a,k as c,d as l,j as u,H as d,K as i}from"./debounce.7c4b284f.js";import{W as t}from"./wave.b2e2f908.js";import{o as s}from"./index.9563d230.js";import{d as r,a6 as h,l as f,p as k,w as v,E as p,z as C,i as m}from"./vendor.13fa0854.js";import{L as b}from"./LoadingOutlined.13f3bbc7.js";var y=n("small","default"),g=e(r({name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:{prefixCls:o.string,size:o.oneOf(y),disabled:o.looseBool,checkedChildren:o.VNodeChild,unCheckedChildren:o.VNodeChild,tabindex:o.oneOfType([o.string,o.number]),autofocus:o.looseBool,loading:o.looseBool,checked:o.oneOfType([o.string,o.number,o.looseBool]),checkedValue:o.oneOfType([o.string,o.number,o.looseBool]).def(!0),unCheckedValue:o.oneOfType([o.string,o.number,o.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function}},slots:["checkedChildren","unCheckedChildren"],emits:["update:checked","mouseup","change","click","keydown"],setup:function(e,n){var o=n.attrs,r=n.slots,y=n.expose,g=n.emit;h((function(){a(!("defaultChecked"in o),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),a(!("value"in o),"Switch","`value` is not validate prop, do you mean `checked`?")}));var w=f(void 0!==e.checked?e.checked:o.defaultChecked),V=k((function(){return w.value===e.checkedValue}));v((function(){return e.checked}),(function(){w.value=e.checked}));var x=c("switch",e).prefixCls,T=f(),j=function(){var e;null===(e=T.value)||void 0===e||e.focus()};y({focus:j,blur:function(){var e;null===(e=T.value)||void 0===e||e.blur()}}),p((function(){C((function(){e.autofocus&&!e.disabled&&T.value.focus()}))}));var B=function(n,o){e.disabled||(g("update:checked",n),g("change",n,o))},F=function(n){j();var o=V.value?e.unCheckedValue:e.checkedValue;B(o,n),g("click",o,n)},O=function(n){n.keyCode===i.LEFT?B(e.unCheckedValue,n):n.keyCode===i.RIGHT&&B(e.checkedValue,n),g("keydown",n)},S=function(e){var n;null===(n=T.value)||void 0===n||n.blur(),g("mouseup",e)},N=k((function(){var n;return l(n={},"".concat(x.value,"-small"),"small"===e.size),l(n,"".concat(x.value,"-loading"),e.loading),l(n,"".concat(x.value,"-checked"),V.value),l(n,"".concat(x.value,"-disabled"),e.disabled),l(n,x.value,!0),n}));return function(){return m(t,{insertExtraNode:!0},{default:function(){return[m("button",u(u(u({},s(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","defaultChecked","checkedValue","unCheckedValue"])),o),{},{onKeydown:O,onClick:F,onMouseup:S,type:"button",role:"switch","aria-checked":w.value,disabled:e.disabled||e.loading,class:[o.class,N.value],ref:T}),[e.loading?m(b,{class:"".concat(x.value,"-loading-icon")},null):null,m("span",{class:"".concat(x.value,"-inner")},[w.value?d(r,e,"checkedChildren"):d(r,e,"unCheckedChildren")])])]}})}}}));export{g as S};
