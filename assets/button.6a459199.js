import{t as x,P as o,k as G,n as J,H as D,_ as E,d as r,j as b,b as K}from"./debounce.63695ae7.js";import{W as Q}from"./wave.af64de9e.js";import{e as X}from"./_setToArray.0ddff03f.js";import{L as Y}from"./LoadingOutlined.3103cde2.js";import{d as Z,r as m,h as N,w as ee,m as te,x as ae,y as ne,o as oe,a as v,T as re}from"./index.e1409c94.js";var ie=x("default","primary","ghost","dashed","link","text"),le=x("circle","round"),ue=x("submit","button","reset");function me(u){return u==="danger"?{danger:!0}:{type:u}}var se=function(){return{prefixCls:o.string,type:o.oneOf(ie),htmlType:o.oneOf(ue).def("button"),shape:o.oneOf(le),size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:o.looseBool,ghost:o.looseBool,block:o.looseBool,danger:o.looseBool,icon:o.VNodeChild,href:o.string,target:o.string,title:o.string,onClick:{type:Function}}},ce=se,H=/^[\u4e00-\u9fa5]{2}$/,M=H.test.bind(H),fe=ce();function y(u){return u==="text"||u==="link"}var ye=Z({name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:fe,slots:["icon"],emits:["click"],setup:function(e,C){var S=C.slots,_=C.attrs,R=C.emit,T=G("btn",e),P=T.prefixCls,I=T.autoInsertSpaceInButton,V=T.direction,p=m(null),g=m(void 0),k=!1,s=m(!1),f=m(!1),j=N(function(){return I.value!==!1}),B=N(function(){return K(e.loading)==="object"&&e.loading.delay?e.loading.delay||!0:!!e.loading});ee(B,function(t){clearTimeout(g.value),typeof B.value=="number"?g.value=window.setTimeout(function(){s.value=t},B.value):s.value=t},{immediate:!0});var F=N(function(){var t,a=e.type,i=e.shape,d=e.size,l=e.ghost,h=e.block,w=e.danger,n=P.value,c="";switch(d){case"large":c="lg";break;case"small":c="sm";break}return t={},r(t,"".concat(n),!0),r(t,"".concat(n,"-").concat(a),a),r(t,"".concat(n,"-").concat(i),i),r(t,"".concat(n,"-").concat(c),c),r(t,"".concat(n,"-loading"),s.value),r(t,"".concat(n,"-background-ghost"),l&&!y(a)),r(t,"".concat(n,"-two-chinese-chars"),f.value&&j.value),r(t,"".concat(n,"-block"),h),r(t,"".concat(n,"-dangerous"),!!w),r(t,"".concat(n,"-rtl"),V.value==="rtl"),t}),O=function(){var a=p.value;if(!(!a||I.value===!1)){var i=a.textContent;k&&M(i)?f.value||(f.value=!0):f.value&&(f.value=!1)}},$=function(a){if(s.value||e.disabled){a.preventDefault();return}R("click",a)},q=function(a,i){var d=i?" ":"";if(a.type===re){var l=a.children.trim();return M(l)&&(l=l.split("").join(d)),v("span",null,[l])}return a};return te(function(){X(!(e.ghost&&y(e.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),ae(O),ne(O),oe(function(){g.value&&clearTimeout(g.value)}),function(){var t=J(D(S,e)),a=D(S,e,"icon");k=t.length===1&&!a&&!y(e.type);var i=e.type,d=e.htmlType,l=e.disabled,h=e.href,w=e.title,n=e.target,c=s.value?"loading":a,L=E(E({},_),{title:w,disabled:l,class:[F.value,_.class,r({},"".concat(P.value,"-icon-only"),t.length===0&&!!c)],onClick:$}),z=s.value?v(Y,null,null):a,A=t.map(function(W){return q(W,k&&j.value)});if(h!==void 0)return v("a",b(b({},L),{},{href:h,target:n,ref:p}),[z,A]);var U=v("button",b(b({},L),{},{ref:p,type:d}),[z,A]);return y(i)?U:v(Q,{ref:"wave"},{default:function(){return[U]}})}}});export{ye as B,ce as b,me as c};
