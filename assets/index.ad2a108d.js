import{d as _,s as oe,an as ae,a1 as re,_ as y,P as c,t as Q,k as se,R as W,b as X,n as ce,N as Y,o as ie,q as ue}from"./debounce.b47df357.js";import{i as a,t as de,l as V,F as ve,d as Z,E as fe,v as ye,s as be,a4 as ee,p as me}from"./vendor.0aef34f5.js";function L(l){return l!=null}var pe=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,o=e.labelStyle,d=e.contentStyle,p=e.bordered,i=e.label,u=e.content,s=e.colon,C=t;if(p){var v;return a(C,{class:[(v={},_(v,"".concat(n,"-item-label"),L(i)),_(v,"".concat(n,"-item-content"),L(u)),v)],colSpan:r},{default:function(){return[L(i)&&a("span",{style:o},[i]),L(u)&&a("span",{style:d},[u])]}})}return a(C,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[a("div",{class:"".concat(n,"-item-container")},[i&&a("span",{class:["".concat(n,"-item-label"),_({},"".concat(n,"-item-no-colon"),!s)],style:o},[i]),u&&a("span",{class:"".concat(n,"-item-content"),style:d},[u])])]}})},B=pe,Se=function(e){var n=function(v,b,m){var $=b.colon,N=b.prefixCls,x=b.bordered,h=m.component,k=m.type,z=m.showLabel,R=m.showContent,w=m.labelStyle,j=m.contentStyle;return v.map(function(f,D){var g,I,S=f.props||{},M=S.prefixCls,A=M===void 0?N:M,U=S.span,T=U===void 0?1:U,q=S.labelStyle,G=S.contentStyle,H=S.label,J=H===void 0?(I=(g=f.children)===null||g===void 0?void 0:g.label)===null||I===void 0?void 0:I.call(g):H,K=oe(f),E=ae(f),O=re(f),F=f.key;return typeof h=="string"?a(B,{key:"".concat(k,"-").concat(String(F)||D),class:E,style:O,labelStyle:y(y({},w.value),q),contentStyle:y(y({},j.value),G),span:T,colon:$,component:h,itemPrefixCls:A,bordered:x,label:z?J:null,content:R?K:null},null):[a(B,{key:"label-".concat(String(F)||D),class:E,style:y(y(y({},w.value),O),q),span:1,colon:$,component:h[0],itemPrefixCls:A,bordered:x,label:J},null),a(B,{key:"content-".concat(String(F)||D),class:E,style:y(y(y({},j.value),O),G),span:T*2-1,component:h[1],itemPrefixCls:A,bordered:x,content:K},null)]})},t=e.prefixCls,r=e.vertical,o=e.row,d=e.index,p=e.bordered,i=de(le,{labelStyle:V({}),contentStyle:V({})}),u=i.labelStyle,s=i.contentStyle;return r?a(ve,null,[a("tr",{key:"label-".concat(d),class:"".concat(t,"-row")},[n(o,e,{component:"th",type:"label",showLabel:!0,labelStyle:u,contentStyle:s})]),a("tr",{key:"content-".concat(d),class:"".concat(t,"-row")},[n(o,e,{component:"td",type:"content",showContent:!0,labelStyle:u,contentStyle:s})])]):a("tr",{key:d,class:"".concat(t,"-row")},[n(o,e,{component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:u,contentStyle:s})])},Ce=Se;c.string,c.any,c.number;var xe={prefixCls:c.string,label:c.VNodeChild,labelStyle:c.style,contentStyle:c.style,span:c.number.def(1)},he=Z({name:"ADescriptionsItem",props:xe,slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),te={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function we(l,e){if(typeof l=="number")return l;if(X(l)==="object")for(var n=0;n<Y.length;n++){var t=Y[n];if(e[t]&&l[t]!==void 0)return l[t]||te[t]}return 3}function ne(l,e,n){var t=l;return(e===void 0||e>n)&&(t=ie(l,{span:n}),ue(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function ge(l,e){var n=ce(l),t=[],r=[],o=e;return n.forEach(function(d,p){var i,u=(i=d.props)===null||i===void 0?void 0:i.span,s=u||1;if(p===n.length-1){r.push(ne(d,u,o)),t.push(r);return}s<o?(o-=s,r.push(d)):(r.push(ne(d,s,o)),t.push(r),o=e,r=[])}),t}var _e={prefixCls:c.string,bordered:c.looseBool,size:c.oneOf(Q("default","middle","small")).def("default"),title:c.VNodeChild,extra:c.VNodeChild,column:{type:[Number,Object],default:function(){return te}},layout:c.oneOf(Q("horizontal","vertical")),colon:c.looseBool,labelStyle:c.style,contentStyle:c.style},le=Symbol("descriptionsContext"),P=Z({name:"ADescriptions",props:_e,slots:["title","extra"],Item:he,setup:function(e,n){var t=n.slots,r=se("descriptions",e),o=r.prefixCls,d=r.direction,p,i=V({});fe(function(){p=W.subscribe(function(s){X(e.column)==="object"&&(i.value=s)})}),ye(function(){W.unsubscribe(p)}),be(le,{labelStyle:ee(e,"labelStyle"),contentStyle:ee(e,"contentStyle")});var u=me(function(){return we(e.column,i.value)});return function(){var s,C,v,b,m=e.size,$=e.bordered,N=$===void 0?!1:$,x=e.layout,h=x===void 0?"horizontal":x,k=e.colon,z=k===void 0?!0:k,R=e.title,w=R===void 0?(C=t.title)===null||C===void 0?void 0:C.call(t):R,j=e.extra,f=j===void 0?(v=t.extra)===null||v===void 0?void 0:v.call(t):j,D=(b=t.default)===null||b===void 0?void 0:b.call(t),g=ge(D,u.value);return a("div",{class:[o.value,(s={},_(s,"".concat(o.value,"-").concat(m),m!=="default"),_(s,"".concat(o.value,"-bordered"),!!N),_(s,"".concat(o.value,"-rtl"),d.value==="rtl"),s)]},[(w||f)&&a("div",{class:"".concat(o.value,"-header")},[w&&a("div",{class:"".concat(o.value,"-title")},[w]),f&&a("div",{class:"".concat(o.value,"-extra")},[f])]),a("div",{class:"".concat(o.value,"-view")},[a("table",null,[a("tbody",null,[g.map(function(I,S){return a(Ce,{key:S,index:S,colon:z,prefixCls:o.value,vertical:h==="vertical",bordered:N,row:I},null)})])])])])}}});P.install=function(l){return l.component(P.name,P),l.component(P.Item.name,P.Item),l};var je=P;export{je as D};
