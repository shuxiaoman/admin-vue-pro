import{P as u,_ as c,j as d,K as b}from"./debounce.b47df357.js";import{d as S,l as T,E as j,i as K}from"./vendor.0aef34f5.js";var h=globalThis&&globalThis.__rest||function(t,l){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)l.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]]);return r},x={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},E=S({name:"TransButton",inheritAttrs:!1,props:{noStyle:u.looseBool,onClick:u.func,disabled:u.looseBool,autofocus:u.looseBool},setup:function(l,r){var e=r.slots,o=r.emit,y=r.attrs,p=r.expose,i=T(),m=function(n){var s=n.keyCode;s===b.ENTER&&n.preventDefault()},k=function(n){var s=n.keyCode;s===b.ENTER&&o("click",n)},C=function(n){o("click",n)},v=function(){i.value&&i.value.focus()},g=function(){i.value&&i.value.blur()};return j(function(){l.autofocus&&v()}),p({focus:v,blur:g}),function(){var a,n=l.noStyle,s=l.disabled,O=h(l,["noStyle","disabled"]),f={};return n||(f=c({},x)),s&&(f.pointerEvents="none"),K("div",d(d(d({role:"button",tabindex:0,ref:i},O),y),{},{onClick:C,onKeydown:m,onKeyup:k,style:c(c({},f),y.style||{})}),[(a=e.default)===null||a===void 0?void 0:a.call(e)])}}}),P=E;export{P as T};
