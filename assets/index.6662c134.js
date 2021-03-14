import{c as e,m as t,I as n,bD as a,d as r,e as l,aA as i,bG as s,bI as c,a as o,B as u,a8 as d,bl as f,aL as m,aI as p}from"./index.227883cc.js";import{P as b,a as v}from"./Content.bfad3bcf.js";import{E as y}from"./EditOutlined.2d995d15.js";import{A as g}from"./index.3a61e55d.js";import{L as h}from"./index.e1481eaa.js";import{C as j}from"./index.839f26ee.js";import"./vendor.60046542.js";import"./transButton.d83df3c4.js";import"./index.b0fcb83c.js";import"./index.df1ac239.js";import"./SearchOutlined.b0563332.js";import"./CheckOutlined.be2a93c2.js";import"./Col.08641336.js";import"./index.85b3c61e.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(a,r){var l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){x(e,t,n[t])}))}return e}({},a,r.attrs);return e(n,t(l,{icon:O}),null)};w.displayName="FileTextOutlined",w.inheritAttrs=!1;var z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"};function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(a,r){var l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){k(e,t,n[t])}))}return e}({},a,r.attrs);return e(n,t(l,{icon:z}),null)};P.displayName="SendOutlined",P.inheritAttrs=!1;var L="_card-description_16h20_1",M="_new-btn_16h20_12";const{Meta:S}=j,{Item:_}=h;var E=r({setup(){const t=l([]),n=async()=>{const{list:e}=await async function(){return a({url:"/list/card",method:"GET"})}();t.splice(0),t.push({}),t.push(...e)};i((async()=>{n()}));const r=[e(s,{key:"setting"},null),e(y,{key:"edit"},null),e(c,{key:"ellipsis"},null)];return()=>e(p,null,[e(b,null,{default:()=>[e(g,{title:"卡片列表"},{default:()=>[o("段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。"),e("div",null,[e(u,{type:"link",size:"large"},{icon:()=>e(P,null,null),default:()=>"快速开始"}),e(u,{type:"link",size:"large"},{icon:()=>e(d,null,null),default:()=>"产品简介"}),e(u,{type:"link",size:"large"},{icon:()=>e(w,null,null),default:()=>"产品文档"})])]})]}),e(v,null,{default:()=>[e(h,{grid:{column:24,gutter:0,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:t},{renderItem:({item:t,index:n})=>e(_,{style:"padding:0 8px"},{default:()=>[0===n?e(u,{class:M,type:"dashed"},{default:()=>[e(f,null,null),o("新增产品")]}):e(j,{hoverable:!0,actions:r},{default:()=>[e(S,{title:t.metaTitle,avatar:[e(m,{src:t.avatar},null)],description:e("div",{class:L},[t.metaDesc])},null)]})]})})]})])}});export default E;
