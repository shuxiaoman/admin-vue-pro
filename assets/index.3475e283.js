import{a as t}from"./Content.0d71ca3d.js";import{A as e}from"./index.396e6931.js";import{B as r}from"./index.bf116e58.js";import{C as n}from"./index.bcd08af7.js";import{R as o,C as a}from"./index.f18c0985.js";import"./index.f9bd59fe.js";import{I as s}from"./index.e7364c5a.js";import{L as i}from"./index.bec2790f.js";import{p as c,e as l,M as u}from"./index.6e873003.js";import{P as p,b as f,N as d,t as m,n as b,c as h,d as g,C as v,w as y}from"./toNumber.5775a339.js";import{i as j}from"./initDefaultProps.f4792837.js";import{i as O,d as x,s as k,l as P,G as w,F as C,j as S}from"./vendor.d7feebf9.js";import{C as I}from"./CloseCircleFilled.411ac2a4.js";import{C as D}from"./ExclamationCircleFilled.d25e78d8.js";import{C as _}from"./CheckOutlined.dd11a829.js";import{R as L}from"./index.791c7395.js";import{a as A}from"./style.module.03301349.js";import{R as E}from"./oauth.60470a4b.js";import{f as T}from"./index.3829553f.js";import{D as W}from"./dropdown.a4bd35d8.js";import{P as $}from"./index.de35a10b.js";import"./wave.ccb9ab60.js";import"./Event.c36f22c9.js";import"./raf.edade736.js";import"./LoadingOutlined.926f7c5c.js";import"./Col.b85f2d2f.js";import"./SearchOutlined.698c58ba.js";import"./index.9563d230.js";import"./isMobile.69f1a0da.js";import"./index.43b65888.js";import"./debounce.284ffcec.js";import"./index.eb409cea.js";import"./Trigger.c296f716.js";import"./identity.d1328b1c.js";import"./_Uint8Array.b94435ea.js";import"./toInteger.3f41bba0.js";import"./colors.ce005b5d.js";import"./index.02e8fda9.js";import"./createChainedFunction.2d5d7d53.js";import"./CloseCircleOutlined.17243ee6.js";import"./InfoCircleOutlined.6283f567.js";import"./code.aa7872b2.js";import"./index.adc74ecd.js";import"./lodash.6027cdf2.js";import"./EllipsisOutlined.aff4ca99.js";function B(t){return!t||t<0?0:t>100?100:t}function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==r)return;var n,o,a=[],s=!0,i=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(c){i=!0,o=c}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var F=function(t){var e=t.from,r=void 0===e?"#1890ff":e,n=t.to,o=void 0===n?"#1890ff":n,a=t.direction,s=void 0===a?"to right":a,i=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["from","to","direction"]);if(0!==Object.keys(i).length){var c=function(t){for(var e=[],r=0,n=Object.entries(t);r<n.length;r++){var o=N(n[r],2),a=o[0],s=o[1],i=parseFloat(a.replace(/%/g,""));if(isNaN(i))return{};e.push({key:i,value:s})}return(e=e.sort((function(t,e){return t.key-e.key}))).map((function(t){var e=t.key,r=t.value;return"".concat(r," ").concat(e,"%")})).join(", ")}(i);return{backgroundImage:"linear-gradient(".concat(s,", ").concat(c,")")}}return{backgroundImage:"linear-gradient(".concat(s,", ").concat(r,", ").concat(o,")")}},R=function(t,e){var r,n=e.attrs,o=e.slots,a=n.prefixCls,s=n.percent,i=n.successPercent,c=n.strokeWidth,l=n.size,u=n.strokeColor,p=n.strokeLinecap;r=u&&"string"!=typeof u?F(u):{background:u};var f=M({width:"".concat(B(s),"%"),height:"".concat(c||("small"===l?6:8),"px"),background:u,borderRadius:"square"===p?0:"100px"},r),d={width:"".concat(B(i),"%"),height:"".concat(c||("small"===l?6:8),"px"),borderRadius:"square"===p?0:""},m=void 0!==i?O("div",{class:"".concat(a,"-success-bg"),style:d},null):null;return O("div",null,[O("div",{class:"".concat(a,"-outer")},[O("div",{class:"".concat(a,"-inner")},[O("div",{class:"".concat(a,"-bg"),style:f},null),m])]),null==o?void 0:o.default()])};function G(){return(G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){V(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function V(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function H(){return(H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var J=H(H({},c),{gapPosition:p.oneOf(["top","bottom","left","right"]),gapDegree:f(p.oneOfType([p.number,p.string,p.looseBool]))}),K=H(H({},l),{gapPosition:"top"}),Q=0;function X(t){return+t.replace("%","")}function Y(t){return Array.isArray(t)?t:[t]}function Z(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5?arguments[5]:void 0,s=50-n/2,i=0,c=-s,l=0,u=-2*s;switch(a){case"left":i=-s,c=0,l=2*s,u=0;break;case"right":i=s,c=0,l=-2*s,u=0;break;case"bottom":c=s,u=2*s}var p="M 50,50 m ".concat(i,",").concat(c,"\n   a ").concat(s,",").concat(s," 0 1 1 ").concat(l,",").concat(-u,"\n   a ").concat(s,",").concat(s," 0 1 1 ").concat(-l,",").concat(u),f=2*Math.PI*s,d={stroke:r,strokeDasharray:"".concat(e/100*(f-o),"px ").concat(f,"px"),strokeDashoffset:"-".concat(o/2+t/100*(f-o),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:p,pathStyle:d}}var tt=x({name:"Circle",props:d(J,K),created:function(){this.paths={},this.gradientId=Q,Q+=1},methods:{getStokeList:function(){var t=this,e=this.$props,r=e.prefixCls,n=e.percent,o=e.strokeColor,a=e.strokeWidth,s=e.strokeLinecap,i=e.gapDegree,c=e.gapPosition,l=Y(n),u=Y(o),p=0;return l.map((function(e,n){var o=u[n]||u[u.length-1],l="[object Object]"===Object.prototype.toString.call(o)?"url(#".concat(r,"-gradient-").concat(t.gradientId,")"):"",f=Z(p,e,o,a,i,c),d=f.pathString,m=f.pathStyle;p+=e;var b={key:n,d:d,stroke:l,"stroke-linecap":s,"stroke-width":a,opacity:0===e?0:1,"fill-opacity":"0",class:"".concat(r,"-circle-path"),style:m};return O("path",U({ref:function(e){return t.paths[n]=e}},b),null)}))}},render:function(){var t=this.$props,e=t.prefixCls,r=t.strokeWidth,n=t.trailWidth,o=t.gapDegree,a=t.gapPosition,s=t.trailColor,i=t.strokeLinecap,c=t.strokeColor,l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","strokeColor"]),u=Z(0,100,s,r,o,a),p=u.pathString,f=u.pathStyle;delete l.percent;var d=Y(c).find((function(t){return"[object Object]"===Object.prototype.toString.call(t)})),m={d:p,stroke:s,"stroke-linecap":i,"stroke-width":n||r,"fill-opacity":"0",class:"".concat(e,"-circle-trail"),style:f};return O("svg",U({class:"".concat(e,"-circle"),viewBox:"0 0 100 100"},l),[d&&O("defs",null,[O("linearGradient",{id:"".concat(e,"-gradient-").concat(this.gradientId),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[Object.keys(d).sort((function(t,e){return X(t)-X(e)})).map((function(t,e){return O("stop",{key:e,offset:t,"stop-color":d[t]},null)}))])]),O("path",m,null),this.getStokeList().reverse()])}}),et=G(G({},tt),{updated:function(){var t=this,e=Date.now(),r=!1;Object.keys(this.paths).forEach((function(n){var o=t.paths[n];if(o){r=!0;var a=o.style;a.transitionDuration=".3s, .3s, .3s, .06s",t.prevTimeStamp&&e-t.prevTimeStamp<100&&(a.transitionDuration="0s, 0s")}})),r&&(this.prevTimeStamp=Date.now())}}),rt=m("normal","exception","active","success"),nt=p.oneOf(m("line","circle","dashboard")),ot=p.oneOf(m("default","small")),at={prefixCls:p.string,type:nt,percent:p.number,successPercent:p.number,format:p.func,status:p.oneOf(rt),showInfo:p.looseBool,strokeWidth:p.number,strokeLinecap:p.oneOf(["butt","round","square"]),strokeColor:p.oneOfType([p.string,p.object]),trailColor:p.string,width:p.number,gapDegree:p.number,gapPosition:p.oneOf(m("top","bottom","left","right")),size:ot};function st(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function it(){return(it=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var ct=it(it({},at),{progressStatus:p.string}),lt={normal:"#108ee9",exception:"#ff5500",success:"#87d068"};function ut(t){var e=t.percent,r=t.successPercent,n=B(e);if(!r)return n;var o=B(r);return[r,B(n-o)]}var pt=x({props:ct,setup:function(t,e){var r=e.slots;return function(){var e,n,o,a,s,i=t.prefixCls,c=t.width,l=t.strokeWidth,u=t.trailColor,p=t.strokeLinecap,f=t.gapPosition,d=t.gapDegree,m=t.type,b=c||120,h={width:"number"==typeof b?"".concat(b,"px"):b,height:"number"==typeof b?"".concat(b,"px"):b,fontSize:"".concat(.15*b+6,"px")},g=l||6,v=f||"dashboard"===m&&"bottom"||"top",y=d||"dashboard"===m&&75,j=(o=(n=t).progressStatus,a=n.successPercent,s=n.strokeColor||lt[o],a?[lt.success,s]:s),x="[object Object]"===Object.prototype.toString.call(j),k=(st(e={},"".concat(i,"-inner"),!0),st(e,"".concat(i,"-circle-gradient"),x),e);return O("div",{class:k,style:h},[O(et,{percent:ut(t),strokeWidth:g,trailWidth:g,strokeColor:j,strokeLinecap:p,trailColor:u,prefixCls:i,gapDegree:y,gapPosition:v},null),null==r?void 0:r.default()])}}});function ft(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function dt(){return(dt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var mt=y(x({name:"AProgress",props:j(at,{type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",gapDegree:0,strokeLinecap:"round"}),setup:function(){return{configProvider:k("configProvider",g)}},methods:{getPercentNumber:function(){var t=this.$props,e=t.successPercent,r=t.percent,n=void 0===r?0:r;return parseInt(void 0!==e?e.toString():n.toString(),10)},getProgressStatus:function(){var t=this.$props.status;return rt.indexOf(t)<0&&this.getPercentNumber()>=100?"success":t||"normal"},renderProcessInfo:function(t,e){var r,n=this.$props,o=n.showInfo,a=n.format,s=n.type,i=n.percent,c=n.successPercent;if(!o)return null;var l=a||this.$slots.format||function(t){return"".concat(t,"%")},u="line"===s;return a||this.$slots.format||"exception"!==e&&"success"!==e?r=l(B(i),B(c)):"exception"===e?r=O(u?I:v,null,null):"success"===e&&(r=O(u?D:_,null,null)),O("span",{class:"".concat(t,"-text"),title:"string"==typeof r?r:void 0},[r])}},render:function(){var t,e,r=b(this),n=r.prefixCls,o=r.size,a=r.type,s=r.showInfo,i=(0,this.configProvider.getPrefixCls)("progress",n),c=this.getProgressStatus(),l=this.renderProcessInfo(i,c);if("line"===a){var u=dt(dt({},r),{prefixCls:i});e=O(R,u,{default:function(){return[l]}})}else if("circle"===a||"dashboard"===a){var p=dt(dt({},r),{prefixCls:i,progressStatus:c});e=O(pt,p,{default:function(){return[l]}})}var f=h(i,(ft(t={},"".concat(i,"-").concat("dashboard"===a?"circle":a),!0),ft(t,"".concat(i,"-status-").concat(c),!0),ft(t,"".concat(i,"-show-info"),s),ft(t,"".concat(i,"-").concat(o),o),t));return O("div",{class:f},[e])}})),bt="_basic-list-header-info_2v1yb_1",ht="_extra-content_2v1yb_26",gt="_list-content_2v1yb_29",vt="_list-content-item_2v1yb_32";const yt={xs:24,sm:8},jt=({lable:t,text:e,noDivider:r=!1})=>O("div",{class:bt},[O("span",null,[t]),O("p",null,[e]),!r&&O("em",null,null)]),Ot=()=>O("div",{class:ht},[O(L.Group,{defaultValue:"a"},{default:()=>[O(L.Button,{value:"a"},{default:()=>[S("全部")]}),O(L.Button,{value:"b"},{default:()=>[S("进行中")]}),O(L.Button,{value:"c"},{default:()=>[S("等待中")]})]}),O(s.Search,{placeholder:"请输入",style:"width: 272px;margin-left:16px"},null)]),xt=({item:t})=>O("div",{class:gt},[O("div",{class:vt},[O("span",null,[S("Owner")]),O("p",null,[t.owner])]),O("div",{class:vt},[O("span",null,[S("开始时间")]),O("p",null,[T(t.startTime)])]),O("div",{class:vt},[O(mt,{percent:t.process,status:t.status,style:"width:180px"},null)])]);var kt=x({setup(){const s=P([]),c=async()=>{const{list:t}=await async function(){return E({url:"/list/basic",method:"GET"})}();s.splice(0),s.push(...t)};return w((()=>{c()})),()=>O(C,null,[O(t,null,{default:()=>[O(n,{class:A["av-card"]},{default:()=>[O(o,null,{default:()=>[O(a,yt,{default:()=>[O(jt,{lable:"我的待办",text:"8个任务"},null)]}),O(a,yt,{default:()=>[O(jt,{lable:"本周任务平均处理时间",text:"32分钟"},null)]}),O(a,yt,{default:()=>[O(jt,{lable:"本周完成任务数",text:"24个任务",noDivider:!0},null)]})]})]}),O(n,{title:"基础列表",class:A["av-card"]},{extra:()=>O(Ot,null,null),default:()=>O(C,null,[O(r,{type:"dashed",style:"width: 100%;margin-top:10px"},{default:()=>[O($,null,null),S("添加")]}),O(i,{dataSource:s},{renderItem:({item:t})=>O(i.Item,null,{actions:()=>O(C,null,[O("a",null,[S("编辑")]),O(W,null,{default:()=>O("a",null,[S("更多")]),overlay:()=>O(u,null,{default:()=>[O(u.Item,null,{default:()=>[O("a",null,[S("编辑")])]}),O(u.Item,null,{default:()=>[O("a",null,[S("删除")])]})]})})]),default:()=>O(C,null,[O(i.Item.Meta,{description:t.metaDesc},{title:()=>O("a",null,[t.metaTitle]),avatar:()=>O(e,{src:t.avatar},null)}),O(xt,{item:t},null)])})})])})]})])}});export default kt;