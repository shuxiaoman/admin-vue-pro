import{_ as i,g as D,k as q,m as at,o as K,P as u,j as I,t as Y,d as g,H as nt,n as rt,b as lt,l as ot,T as ut}from"./debounce.63695ae7.js";import{d as z,h as x,f as st,r as R,w as Q,l as ct,a as d,t as it,v as vt}from"./index.e1409c94.js";import{P as ft}from"./EllipsisOutlined.90a80699.js";import{i as dt}from"./isNumeric.2da33d93.js";function J(r){var t=r.prefixCls,l=r.value,e=r.current,a=r.offset,C=a===void 0?0:a,n;return C&&(n={position:"absolute",top:"".concat(C,"00%"),left:0}),d("p",{style:n,class:D("".concat(t,"-only-unit"),{current:e})},[l])}function mt(r,t,l){for(var e=r,a=0;(e+10)%10!==t;)e+=l,a+=l;return a}var bt=z({name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup:function(t){var l=x(function(){return Number(t.value)}),e=x(function(){return Math.abs(t.count)}),a=st({prevValue:l.value,prevCount:e.value}),C=function(){a.prevValue=l.value,a.prevCount=e.value},n=R();return Q(l,function(){clearTimeout(n.value),n.value=setTimeout(function(){C()},1e3)},{flush:"post"}),ct(function(){clearTimeout(n.value)}),function(){var m,s={},c=l.value;if(a.prevValue===c||Number.isNaN(c)||Number.isNaN(a.prevValue))m=[J(i(i({},t),{current:!0}))],s={transition:"none"};else{m=[];for(var f=c+10,v=[],b=c;b<=f;b+=1)v.push(b);var N=v.findIndex(function(y){return y%10===a.prevValue});m=v.map(function(y,p){var _=y%10;return J(i(i({},t),{value:_,offset:p-N,current:p===N}))});var h=a.prevCount<e.value?1:-1;s={transform:"translateY(".concat(-mt(a.prevValue,c,h),"00%)")}}return d("span",{class:"".concat(t.prefixCls,"-only"),style:s,onTransitionend:function(){return C()}},[m])}}}),yt=globalThis&&globalThis.__rest||function(r,t){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(l[e[a]]=r[e[a]]);return l},gt={prefixCls:u.string,count:u.any,component:u.string,title:u.oneOfType([u.number,u.string,null]),show:Boolean},Ct=z({name:"ScrollNumber",inheritAttrs:!1,props:gt,setup:function(t,l){var e=l.attrs,a=l.slots,C=q("scroll-number",t),n=C.prefixCls;return function(){var m,s=i(i({},t),e);s.prefixCls;var c=s.count,f=s.title;s.show;var v=s.component,b=v===void 0?"sup":v,N=s.class,h=s.style,y=yt(s,["prefixCls","count","title","show","component","class","style"]),p=i(i({},y),{style:h,"data-show":t.show,class:D(n.value,N),title:f}),_=c;if(c&&Number(c)%1===0){var A=String(c).split("");_=A.map(function(o,j){return d(bt,{prefixCls:n.value,count:Number(c),value:o,key:A.length-j},null)})}h&&h.borderColor&&(p.style=i(i({},h),{boxShadow:"0 0 0 1px ".concat(h.borderColor," inset")}));var T=at((m=a.default)===null||m===void 0?void 0:m.call(a));return T&&T.length?K(T,{class:D("".concat(n.value,"-custom-component"))},!1):d(b,p,{default:function(){return[_]}})}}});function V(r){return ft.indexOf(r)!==-1}var pt=globalThis&&globalThis.__rest||function(r,t){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(l[e[a]]=r[e[a]]);return l},xt={prefix:u.string,color:{type:String},text:u.any,placement:u.oneOf(Y("start","end")).def("end")},ht=z({name:"ABadgeRibbon",inheritAttrs:!1,props:xt,slots:["text"],setup:function(t,l){var e=l.attrs,a=l.slots,C=q("ribbon",t),n=C.prefixCls,m=C.direction,s=x(function(){return V(t.color)}),c=x(function(){var f;return[n.value,"".concat(n.value,"-placement-").concat(t.placement),(f={},g(f,"".concat(n.value,"-rtl"),m.value==="rtl"),g(f,"".concat(n.value,"-color-").concat(t.color),s.value),f)]});return function(){var f,v,b=e.class,N=e.style,h=pt(e,["class","style"]),y={},p={};return t.color&&!s.value&&(y.background=t.color,p.color=t.color),d("div",I({class:"".concat(n.value,"-wrapper")},h),[(f=a.default)===null||f===void 0?void 0:f.call(a),d("div",{class:[c.value,b],style:i(i({},y),N)},[d("span",{class:"".concat(n.value,"-text")},[t.text||((v=a.text)===null||v===void 0?void 0:v.call(a))]),d("div",{class:"".concat(n.value,"-corner"),style:p},null)])])}}}),Nt={count:u.any,showZero:u.looseBool,overflowCount:u.number.def(99),dot:u.looseBool,prefixCls:u.string,scrollNumberPrefixCls:u.string,status:u.oneOf(Y("success","processing","default","error","warning")),size:u.oneOf(Y("default","small")).def("default"),color:u.string,text:u.VNodeChild,offset:u.arrayOf(u.oneOfType([String,Number])),numberStyle:u.style,title:u.string},Tt=z({name:"ABadge",Ribbon:ht,inheritAttrs:!1,props:Nt,slots:["text","count"],setup:function(t,l){var e=l.slots,a=l.attrs,C=q("badge",t),n=C.prefixCls,m=C.direction,s=x(function(){return t.count>t.overflowCount?"".concat(t.overflowCount,"+"):t.count}),c=x(function(){return t.status!==null&&t.status!==void 0||t.color!==null&&t.color!==void 0}),f=x(function(){return s.value==="0"||s.value===0}),v=x(function(){return t.dot&&!f.value||c.value}),b=x(function(){return v.value?"":s.value}),N=x(function(){var o=b.value===null||b.value===void 0||b.value==="";return(o||f.value&&!t.showZero)&&!v.value}),h=R(t.count),y=R(b.value),p=R(v.value);Q([function(){return t.count},b,v],function(){N.value||(h.value=t.count,y.value=b.value,p.value=v.value)},{immediate:!0});var _=x(function(){var o;return o={},g(o,"".concat(n.value,"-status-dot"),c.value),g(o,"".concat(n.value,"-status-").concat(t.status),!!t.status),g(o,"".concat(n.value,"-status-").concat(t.color),V(t.color)),o}),A=x(function(){return t.color&&!V(t.color)?{background:t.color}:{}}),T=x(function(){var o;return o={},g(o,"".concat(n.value,"-dot"),p.value),g(o,"".concat(n.value,"-count"),!p.value),g(o,"".concat(n.value,"-count-sm"),t.size==="small"),g(o,"".concat(n.value,"-multiple-words"),!p.value&&y.value&&y.value.toString().length>1),g(o,"".concat(n.value,"-status-").concat(t.status),!!t.status),g(o,"".concat(n.value,"-status-").concat(t.color),V(t.color)),o});return function(){var o,j,U,P=t.offset,Z=t.title,$=t.color,F=a.style,H=nt(e,t,"text"),S=n.value,w=h.value,O=rt((j=e.default)===null||j===void 0?void 0:j.call(e));O=O.length?O:null;var M=!!(!N.value||e.count),B=function(){if(!P)return i({},F);var k={marginTop:dt(P[1])?"".concat(P[1],"px"):P[1]};return m.value==="rtl"?k.left="".concat(parseInt(P[0],10),"px"):k.right="".concat(-parseInt(P[0],10),"px"),i(i({},k),F)}(),W=Z!=null?Z:typeof w=="string"||typeof w=="number"?w:void 0,X=M||!H?null:d("span",{class:"".concat(S,"-status-text")},[H]),L=lt(w)==="object"||w===void 0&&e.count?K(w!=null?w:(U=e.count)===null||U===void 0?void 0:U.call(e),{style:B},!1):null,G=D(S,(o={},g(o,"".concat(S,"-status"),c.value),g(o,"".concat(S,"-not-a-wrapper"),!O),g(o,"".concat(S,"-rtl"),m.value==="rtl"),o),a.class);if(!O&&c.value){var tt=B.color;return d("span",I(I({},a),{},{class:G,style:B}),[d("span",{class:_.value,style:A.value},null),d("span",{style:{color:tt},class:"".concat(S,"-status-text")},[H])])}var et=ot(O?"".concat(S,"-zoom"):"",{appear:!1}),E=i(i({},B),t.numberStyle);return $&&!V($)&&(E=E||{},E.background=$),d("span",I(I({},a),{},{class:G}),[O,d(ut,et,{default:function(){return[it(d(Ct,{prefixCls:t.scrollNumberPrefixCls,show:M,class:T.value,count:y.value,title:W,style:E,key:"scrollNumber"},{default:function(){return[L]}}),[[vt,M]])]}}),X])}}});export{Tt as B,ht as R};
