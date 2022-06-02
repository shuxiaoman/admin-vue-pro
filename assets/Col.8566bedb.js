import{t as T,P as a,k as B,W as P,b as C,X as I,g as D,d as s,_ as N}from"./debounce.63695ae7.js";import{r as U,x as W,k as V,h as d,p as $,d as k,o as H,a as K}from"./index.e1409c94.js";function J(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}var M=function(){return J()&&window.document.documentElement},A,X=function(){if(!M())return!1;if(A!==void 0)return A;var t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t),A=t.scrollHeight===1,document.body.removeChild(t),A},q=function(){var c=U(!1);return W(function(){c.value=X()}),c},L=Symbol("rowContextKey"),z=function(t){$(L,t)},Q=function(){return V(L,{gutter:d(function(){}),wrap:d(function(){}),supportFlexGap:d(function(){})})},Y=T("top","middle","bottom","stretch"),Z=T("start","end","center","space-around","space-between"),ee={type:a.oneOf(["flex"]),align:a.oneOf(Y),justify:a.oneOf(Z),prefixCls:a.string,gutter:a.oneOfType([a.object,a.number,a.array]).def(0),wrap:a.looseBool},te=k({name:"ARow",props:ee,setup:function(t,O){var w=O.slots,x=B("row",t),v=x.prefixCls,E=x.direction,j,b=U({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),R=q();W(function(){j=P.subscribe(function(e){var r=t.gutter||0;(!Array.isArray(r)&&C(r)==="object"||Array.isArray(r)&&(C(r[0])==="object"||C(r[1])==="object"))&&(b.value=e)})}),H(function(){P.unsubscribe(j)});var G=d(function(){var e=[0,0],r=t.gutter,n=r===void 0?0:r,l=Array.isArray(n)?n:[n,0];return l.forEach(function(f,h){if(C(f)==="object")for(var o=0;o<I.length;o++){var m=I[o];if(b.value[m]&&f[m]!==void 0){e[h]=f[m];break}}else e[h]=f||0}),e});z({gutter:G,supportFlexGap:R,wrap:d(function(){return t.wrap})});var F=d(function(){var e;return D(v.value,(e={},s(e,"".concat(v.value,"-no-wrap"),t.wrap===!1),s(e,"".concat(v.value,"-").concat(t.justify),t.justify),s(e,"".concat(v.value,"-").concat(t.align),t.align),s(e,"".concat(v.value,"-rtl"),E.value==="rtl"),e))}),S=d(function(){var e=G.value,r={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,l=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(r.marginLeft=n,r.marginRight=n),R.value?r.rowGap="".concat(e[1],"px"):l&&(r.marginTop=l,r.marginBottom=l),r});return function(){var e;return K("div",{class:F.value,style:S.value},[(e=w.default)===null||e===void 0?void 0:e.call(w)])}}}),ce=te;function re(c){return typeof c=="number"?"".concat(c," ").concat(c," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(c)?"0 0 ".concat(c):c}var i=a.oneOfType([a.string,a.number]),ne=a.shape({span:i,order:i,offset:i,push:i,pull:i}).loose,y=a.oneOfType([a.string,a.number,ne]),ae={span:i,order:i,offset:i,push:i,pull:i,xs:y,sm:y,md:y,lg:y,xl:y,xxl:y,prefixCls:a.string,flex:i},se=k({name:"ACol",props:ae,setup:function(t,O){var w=O.slots,x=Q(),v=x.gutter,E=x.supportFlexGap,j=x.wrap,b=B("col",t),R=b.prefixCls,G=b.direction,F=d(function(){var e,r=t.span,n=t.order,l=t.offset,f=t.push,h=t.pull,o=R.value,m={};return["xs","sm","md","lg","xl","xxl"].forEach(function(g){var p,u={},_=t[g];typeof _=="number"?u.span=_:C(_)==="object"&&(u=_||{}),m=N(N({},m),(p={},s(p,"".concat(o,"-").concat(g,"-").concat(u.span),u.span!==void 0),s(p,"".concat(o,"-").concat(g,"-order-").concat(u.order),u.order||u.order===0),s(p,"".concat(o,"-").concat(g,"-offset-").concat(u.offset),u.offset||u.offset===0),s(p,"".concat(o,"-").concat(g,"-push-").concat(u.push),u.push||u.push===0),s(p,"".concat(o,"-").concat(g,"-pull-").concat(u.pull),u.pull||u.pull===0),s(p,"".concat(o,"-rtl"),G.value==="rtl"),p))}),D(o,(e={},s(e,"".concat(o,"-").concat(r),r!==void 0),s(e,"".concat(o,"-order-").concat(n),n),s(e,"".concat(o,"-offset-").concat(l),l),s(e,"".concat(o,"-push-").concat(f),f),s(e,"".concat(o,"-pull-").concat(h),h),e),m)}),S=d(function(){var e=t.flex,r=v.value,n={};if(r&&r[0]>0){var l="".concat(r[0]/2,"px");n.paddingLeft=l,n.paddingRight=l}if(r&&r[1]>0&&!E.value){var f="".concat(r[1]/2,"px");n.paddingTop=f,n.paddingBottom=f}return e&&(n.flex=re(e),e==="auto"&&j.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return K("div",{class:F.value,style:S.value},[(e=w.default)===null||e===void 0?void 0:e.call(w)])}}});export{se as C,ce as R,q as u};
