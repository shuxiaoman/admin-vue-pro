import{c as t,m as e,d as n,g as r,i as a}from"./index.f70780cc.js";import{I as o,A as c,P as i,n as s,g as l,o as u,r as f,ac as d}from"./index.29576476.js";import{B as b}from"./index.e282d12b.js";import{A as g}from"./index.e5490732.js";import{T as h}from"./transButton.f9cf9937.js";var p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function(n,r){var a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){v(t,e,n[e])}))}return t}({},n,r.attrs);return t(o,e(a,{icon:p}),null)};function j(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!a(t)}m.displayName="ArrowLeftOutlined",m.inheritAttrs=!1;var y={backIcon:i.VNodeChild,prefixCls:i.string,title:i.VNodeChild,subTitle:i.VNodeChild,breadcrumb:i.object,tags:i.any,footer:i.VNodeChild,extra:i.VNodeChild,avatar:i.object,ghost:i.looseBool,onBack:i.func},O=function(e,n){var r=n.avatar,a=l(n,"title"),o=l(n,"subTitle"),c=l(n,"tags"),i=l(n,"extra"),s=void 0!==l(n,"backIcon")?l(n,"backIcon"):t(m,null,null),u=n.onBack,f="".concat(e,"-heading");if(a||o||c||i){var b=function(e,n,r,a){return r&&a?t(d,{componentName:"PageHeader",children:function(a){var o=a.back;return t("div",{class:"".concat(n,"-back")},[t(h,{onClick:function(t){e.$emit("back",t)},class:"".concat(n,"-back-button"),"aria-label":o},j(r)?r:{default:function(){return[r]}})])}},null):null}(n,e,s,u);return t("div",{class:f},[b,r&&t(g,r,null),a&&t("span",{class:"".concat(f,"-title")},j(a)?a:{default:function(){return[a]}}),o&&t("span",{class:"".concat(f,"-sub-title")},j(o)?o:{default:function(){return[o]}}),c&&t("span",{class:"".concat(f,"-tags")},j(c)?c:{default:function(){return[c]}}),i&&t("span",{class:"".concat(f,"-extra")},j(i)?i:{default:function(){return[i]}})])}return null},x=function(e,n){return n?t("div",{class:"".concat(e,"-footer")},j(n)?n:{default:function(){return[n]}}):null},P=function(e,n){return t("div",{class:"".concat(e,"-content")},j(n)?n:{default:function(){return[n]}})},k=c(n({name:"APageHeader",props:y,setup:function(){return{configProvider:r("configProvider",f)}},render:function(){var e=this.configProvider,n=e.getPrefixCls,r=e.pageHeader,a=s(this),o=a.prefixCls,c=a.breadcrumb,i=l(this,"footer"),f=u(this),d=!0;"ghost"in a?d=a.ghost:r&&"ghost"in r&&(d=r.ghost);var g,h,p,v=n("page-header",o),m=c&&c.routes?function(e){return t(b,e,null)}(c):null,j=[v,(g={"has-breadcrumb":m,"has-footer":i},h="".concat(v,"-ghost"),p=d,h in g?Object.defineProperty(g,h,{value:p,enumerable:!0,configurable:!0,writable:!0}):g[h]=p,g)];return t("div",{class:j},[m,O(v,this),f.length?P(v,f):null,x(v,i)])}}));export{k as A};
