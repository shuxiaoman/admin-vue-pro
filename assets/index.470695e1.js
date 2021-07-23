import{_ as e,o as t,d as i,x as n,y as o,a,g as r,z as s,B as l,C as u,D as c,j as d,U as f,h as p,E as v,p as m,F as g,G as h,H as y,f as x,I as w,s as F,i as b,e as j,t as O,c as C,J as k,K as A,L as S,M as R,n as L,N as M,P as G,O as E}from"./workspace.0a4a7fda.js";import{a as P}from"./Content.0d71ca3d.js";import{C as W}from"./index.bcd08af7.js";import{I as D}from"./index.e7364c5a.js";import{d as I,G as N,A as B,i as V,k as z}from"./vendor.d7feebf9.js";import"./oauth.646ef414.js";import"./index.02e8fda9.js";import"./toNumber.5775a339.js";import"./createChainedFunction.2d5d7d53.js";import"./ExclamationCircleFilled.d25e78d8.js";import"./CloseCircleFilled.411ac2a4.js";import"./LoadingOutlined.926f7c5c.js";import"./CloseCircleOutlined.17243ee6.js";import"./InfoCircleOutlined.6283f567.js";import"./code.aa7872b2.js";import"./index.ad121f42.js";import"./index.de35a10b.js";import"./debounce.284ffcec.js";import"./index.f18c0985.js";import"./Col.b85f2d2f.js";import"./SearchOutlined.698c58ba.js";import"./index.9563d230.js";import"./isMobile.69f1a0da.js";import"./index.bf116e58.js";import"./wave.ccb9ab60.js";import"./Event.c36f22c9.js";import"./raf.edade736.js";function H(e,t){return e.views.find((function(e){return e.id===t}))}function T(e){return"number"==typeof e&&!isNaN(e)}function U(s){var l=s.options,u=l.xField,c=l.yField,d=l.interval,f=l.seriesField,p=l.tooltip,v=l.minColumnWidth,m=l.maxColumnWidth,g=l.columnBackground,h=l.dodgePadding,y=l.intervalPadding,x=a(p,[u,c,f]),w=x.fields,F=x.formatter,b=(d?r(i({},s,{options:{type:"interval",colorField:f,tooltipFields:w,mapping:e({tooltip:F},d),args:{dodgePadding:h,intervalPadding:y,minColumnWidth:v,maxColumnWidth:m,background:g}}})):s).ext;return function(e){var a=e.chart,r=e.options,s=e.ext,l=r.seriesField,u=r.isGroup,c=r.isStack,d=r.marginRatio,f=r.widthRatio,p=r.groupField,v=r.theme,m=[];return l&&(u&&m.push({type:"dodge",dodgeBy:p||l,marginRatio:d}),c&&m.push({type:"stack",marginRatio:d})),m.length&&(null==s?void 0:s.geometry)&&(null==s?void 0:s.geometry).adjust(m),t(f)||a.theme(i({},n(v)?v:o(v),{columnWidthRatio:f})),e}(e(e({},s),{ext:b}))}var q,J,K,X;(J=q||(q={})).Left="Left",J.Right="Right",(X=K||(K={})).Line="line",X.Column="column";var $={nice:!0,label:{autoHide:!0,autoRotate:!1}},_=e(e({},$),{position:"left"}),Q=e(e({},$),{position:"right",grid:null});function Y(e){return u(e,"geometry")===K.Line}function Z(e){return u(e,"geometry")===K.Column}function ee(t,n,o){return Z(o)?i({},{geometry:K.Column,label:o.label&&o.isRange?{content:function(e){var t;return null===(t=e[n])||void 0===t?void 0:t.join("-")}}:void 0},o):e({geometry:K.Line},o)}function te(e,t){var i=e[0],n=e[1];return c(t)?[t[0],t[1]]:[u(t,i),u(t,n)]}function ie(e,t){return t===q.Left?!1!==e&&i({},_,e):t===q.Right?!1!==e&&i({},Q,e):e}function ne(e){var t=e.view,i=e.geometryOption,n=e.yField,o=e.legend,a=u(o,"marker"),r=d(t,Y(i)?"line":"interval");if(!i.seriesField){var s=r.getAttribute("color").values[0],c=a||(Y(i)?{symbol:function(e,t,i){return[["M",e-i,t],["L",e+i,t]]},style:{lineWidth:2,r:6,stroke:s}}:{symbol:"square",style:{fill:s}});return[{value:n,name:u(t,"options.scales."+n+".alias")||n,marker:c,isGeometry:!0,viewId:t.id}]}var p=r.getGroupAttributes();return l(p,(function(e,i){var n=f.getLegendItems(t,r,i,t.getTheme(),a);return e.concat(n)}),[])}var oe=function(e,t){var i=t[0],n=t[1],o=e.getOptions().data,a=e.getXScale(),r=h(o);if(a&&r){var s=y(o,a.field),l=h(s),u=Math.floor(i*(l-1)),c=Math.floor(n*(l-1));e.filter(a.field,(function(e){var t=s.indexOf(e);return!(t>-1)||function(e,t,i){var n=Math.min(t,i),o=Math.max(t,i);return e>=n&&e<=o}(t,u,c)})),e.render(!0)}};function ae(e){var t,n=e.options,o=n.geometryOptions,a=void 0===o?[]:o,r=n.xField,s=n.yField,l=w(a,(function(e){var t=e.geometry;return t===K.Line||void 0===t}));return i({},{options:{geometryOptions:[],meta:(t={},t[r]={type:"cat",sync:!0,range:l?[0,1]:void 0},t),tooltip:{showMarkers:l,showCrosshairs:l,shared:!0,crosshairs:{type:"x"}},interactions:l?[{type:"legend-visible-filter"}]:[{type:"legend-visible-filter"},{type:"active-region"}],legend:{position:"top-left"}}},e,{options:{yAxis:te(s,n.yAxis),geometryOptions:[ee(0,s[0],a[0]),ee(0,s[1],a[1])],annotations:te(s,n.annotations)}})}function re(t){var n=t.chart,o=t.options,a=o.xField,r=o.yField,u=o.geometryOptions,c=o.data,d=o.tooltip,f={line:0,column:1};return[e(e({},u[0]),{id:"left-axes-view",data:c[0],yField:r[0]}),e(e({},u[1]),{id:"right-axes-view",data:c[1],yField:r[1]})].sort((function(e,t){return-f[e.geometry]+f[t.geometry]})).forEach((function(t){var o=t.id,r=t.data,u=t.yField,c=Z(t)&&t.isPercent,f=c?function(t,i,n,o){var a=l(t,(function(e,t){var o=t[n],a=e.has(o)?e.get(o):0,r=t[i];return a=T(r)?a+r:a,e.set(o,a),e}),new Map);return s(t,(function(t){var r,s=t[i],l=t[n],u=T(s)?s/a.get(l):0;return e(e({},t),((r={})[o]=u,r))}))}(r,u,a,u):r,h=n.createView({id:o}).data(f),y=c?e({formatter:function(e){return{name:e[t.seriesField]||u,value:(100*Number(e[u])).toFixed(2)+"%"}}},d):d;!function(t){var n=t.options,o=t.chart,a=n.geometryOption,r=a.isStack,s=a.color,l=a.seriesField,u=a.groupField,c=a.isGroup,d=["xField","yField"];if(Y(a)){p(i({},t,{options:e(e(e({},v(n,d)),a),{line:{color:a.color,style:a.lineStyle}})})),m(i({},t,{options:e(e(e({},v(n,d)),a),{point:a.point&&e({color:s,shape:"circle"},a.point)})}));var f=[];c&&f.push({type:"dodge",dodgeBy:u||l,customOffset:0}),r&&f.push({type:"stack"}),f.length&&g(o.geometries,(function(e){e.adjust(f)}))}Z(a)&&U(i({},t,{options:e(e(e({},v(n,d)),a),{widthRatio:a.columnWidthRatio,interval:e(e({},v(a,["color"])),{style:a.columnStyle})})}))}({chart:h,options:{xField:a,yField:u,tooltip:y,geometryOption:t}})})),t}function se(e){var t,i=e.chart,n=e.options.geometryOptions,o=(null===(t=i.getTheme())||void 0===t?void 0:t.colors10)||[],a=0;return i.once("beforepaint",(function(){g(n,(function(e,t){var n=H(i,0===t?"left-axes-view":"right-axes-view");if(!e.color){var r=n.getGroupScales(),s=u(r,[0,"values","length"],1),l=o.slice(a,a+s).concat(0===t?[]:o);n.geometries.forEach((function(t){e.seriesField?t.color(e.seriesField,l):t.color(l[0])})),a+=s}})),i.render(!0)})),e}function le(e){var t,n,o=e.chart,a=e.options,r=a.xAxis,s=a.yAxis,l=a.xField,u=a.yField;return F(((t={})[l]=r,t[u[0]]=s[0],t))(i({},e,{chart:H(o,"left-axes-view")})),F(((n={})[l]=r,n[u[1]]=s[1],n))(i({},e,{chart:H(o,"right-axes-view")})),e}function ue(e){var t=e.chart,i=e.options,n=H(t,"left-axes-view"),o=H(t,"right-axes-view"),a=i.xField,r=i.yField,s=i.xAxis,l=i.yAxis;return t.axis(a,!1),t.axis(r[0],!1),t.axis(r[1],!1),n.axis(a,s),n.axis(r[0],ie(l[0],q.Left)),o.axis(a,!1),o.axis(r[1],ie(l[1],q.Right)),e}function ce(e){var t=e.chart,i=e.options.tooltip,n=H(t,"left-axes-view"),o=H(t,"right-axes-view");return t.tooltip(i),n.tooltip({shared:!0}),o.tooltip({shared:!0}),e}function de(e){var t=e.chart;return b(i({},e,{chart:H(t,"left-axes-view")})),b(i({},e,{chart:H(t,"right-axes-view")})),e}function fe(e){var t=e.chart,n=e.options.annotations,o=u(n,[0]),a=u(n,[1]);return j(o)(i({},e,{chart:H(t,"left-axes-view"),options:{annotations:o}})),j(a)(i({},e,{chart:H(t,"right-axes-view"),options:{annotations:a}})),e}function pe(e){var t=e.chart;return O(i({},e,{chart:H(t,"left-axes-view")})),O(i({},e,{chart:H(t,"right-axes-view")})),O(e),e}function ve(e){var t=e.chart;return C(i({},e,{chart:H(t,"left-axes-view")})),C(i({},e,{chart:H(t,"right-axes-view")})),e}function me(e){var t=e.chart,n=e.options.yAxis;return k(i({},e,{chart:H(t,"left-axes-view"),options:{yAxis:n[0]}})),k(i({},e,{chart:H(t,"right-axes-view"),options:{yAxis:n[1]}})),e}function ge(e){var t=e.chart,o=e.options,a=o.legend,r=o.geometryOptions,s=o.yField,l=o.data,c=H(t,"left-axes-view"),d=H(t,"right-axes-view");return!1===a?t.legend(!1):n(a)&&!0===a.custom?t.legend(a):(t.once("beforepaint",(function(){var e=l[0].length?ne({view:c,geometryOption:r[0],yField:s[0],legend:a}):[],n=l[1].length?ne({view:d,geometryOption:r[1],yField:s[1],legend:a}):[];t.legend(i({},a,{custom:!0,items:e.concat(n)}))})),t.on("legend-item:click",(function(e){var i=u(e,"gEvent.delegateObject",{});if(i&&i.item){var n=i.item,o=n.value,a=n.isGeometry,r=n.viewId;if(a){if(function(e,t,i){void 0===i&&(i=0);for(var n=i;n<e.length;n++)if(t(e[n],n))return n;return-1}(s,(function(e){return e===o}))>-1){var l=u(H(t,r),"geometries");g(l,(function(e){e.changeVisible(!i.item.unchecked)}))}}else{var c=u(t.getController("legend"),"option.items",[]);g(t.views,(function(e){var i=e.getGroupScales();g(i,(function(t){t.values&&t.values.indexOf(o)>-1&&e.filter(t.field,(function(e){return!A(c,(function(t){return t.value===e})).unchecked}))})),t.render(!0)}))}}}))),e}function he(e){var t=e.chart,i=e.options.slider,n=H(t,"left-axes-view"),o=H(t,"right-axes-view");return i&&(n.option("slider",i),n.on("slider:valuechanged",(function(e){var t=e.event,i=t.value,n=t.originValue;S(i,n)||oe(o,i)})),t.once("afterpaint",(function(){if(!R(i)){var e=i.start,t=i.end;(e||t)&&oe(o,[e,t])}}))),e}function ye(e){return x(ae,re,le,ue,me,ce,de,fe,pe,ve,se,ge,he)(e)}var xe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="dual-axes",t}return L(t,e),t.prototype.getDefaultOptions=function(){return i({},e.prototype.getDefaultOptions.call(this),{yAxis:[],syncViewPadding:!0})},t.prototype.getSchemaAdaptor=function(){return ye},t.prototype.setState=function(e,t,i){void 0===i&&(i=!0);var n=M(this.chart);g(n,(function(n){t(n.getData())&&n.setState(e,i)}))},t.prototype.getStates=function(){var e=M(this.chart),t=[];return g(e,(function(e){var i=e.getData(),n=e.getStates();g(n,(function(n){t.push({data:i,state:n,geometry:e.geometry,element:e})}))})),t},t}(G),we=I({props:{data:{type:Object,default:()=>({column:[],line:[]})}},setup(e){let t;const i={data:[e.data.column,e.data.line],xField:"date",yField:["value","count"],geometryOptions:[{geometry:"column",isStack:!0,seriesField:"type"},{geometry:"line",label:{style:{fill:"#626681"}}}]};return N((()=>{t=new xe("columnContainer",i),t.render()})),B(e.data,(e=>{t.changeData([e.column,e.line])})),()=>V("div",{id:"columnContainer"},null)}});var Fe=I({setup(){const e=z(!0),t=z({column:[],line:[]}),i=z(""),n=async()=>{const i=await E();t.value.column.splice(0,i.length,...i),t.value.line=(e=>{const t={};return e.forEach((e=>{t[e.date]>=0?t[e.date]=t[e.date]+e.value:t[e.date]=e.value})),Object.entries(t).map((([e,t])=>({date:e,count:t})))})(t.value.column),e.value=!1};return N((()=>{e.value=!1})),B(i,(e=>{"MzMz"===btoa(e)&&n()})),()=>V(P,null,{default:()=>{return[V(D,{value:i.value,"onUpdate:value":e=>i.value=e},null),V(W,{title:`总计营收：${n=[...t.value.column],n.reduce(((e,t)=>e+t.value),0)}`,style:{"margin-bottom":"24px"},loading:e.value,bordered:!1,"body-style":{padding:0}},{default:()=>[V("div",{style:"min-height: 400px;margin:12px 24px"},[V(we,{data:t.value},null)])]})];var n}})}});export default Fe;
