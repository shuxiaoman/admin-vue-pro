import{P as i,t as q,k as D,H as G,d as l,j as P,_ as d,b as J,X as K}from"./debounce.63695ae7.js";import{u as Q}from"./useBreakpoint.256f6e5f.js";import{R as U}from"./_Set.ed75c1de.js";import{u as Y}from"./useSize.9fcd18e3.js";import{d as Z,r as g,h as $,w as I,x as ee,n as _,a as m}from"./index.e1409c94.js";var ae={prefixCls:i.string,shape:i.oneOf(q("circle","square")).def("circle"),size:{type:[Number,String,Object],default:function(){return"default"}},src:i.string,srcset:i.string,icon:i.VNodeChild,alt:i.string,gap:i.number,draggable:i.bool,loadError:{type:Function}},re=Z({name:"AAvatar",inheritAttrs:!1,props:ae,slots:["icon"],setup:function(a,j){var S=j.slots,h=j.attrs,p=g(!0),A=g(!1),x=g(1),z=g(null),y=g(null),k=D("avatar",a),T=k.prefixCls,W=Y(),w=Q(),o=$(function(){if(J(a.size)==="object"){var r=K.find(function(t){return w.value[t]}),e=a.size[r];return e}}),H=function(e){return o.value?{width:"".concat(o.value,"px"),height:"".concat(o.value,"px"),lineHeight:"".concat(o.value,"px"),fontSize:"".concat(e?o.value/2:18,"px")}:{}},b=function(){if(!(!z.value||!y.value)){var e=z.value.offsetWidth,t=y.value.offsetWidth;if(e!==0&&t!==0){var u=a.gap,c=u===void 0?4:u;c*2<t&&(x.value=t-c*2<e?(t-c*2)/e:1)}}},N=function(){var e=a.loadError,t=e==null?void 0:e();t!==!1&&(p.value=!1)};return I(function(){return a.src},function(){_(function(){p.value=!0,x.value=1})}),I(function(){return a.gap},function(){_(function(){b()})}),ee(function(){_(function(){b(),A.value=!0})}),function(){var r,e,t=a.shape,u=a.size,c=a.src,O=a.alt,B=a.srcset,F=a.draggable,v=G(S,a,"icon"),s=T.value,n=u==="default"?W.value:u,L=(r={},l(r,"".concat(h.class),!!h.class),l(r,s,!0),l(r,"".concat(s,"-lg"),n==="large"),l(r,"".concat(s,"-sm"),n==="small"),l(r,"".concat(s,"-").concat(t),t),l(r,"".concat(s,"-image"),c&&p.value),l(r,"".concat(s,"-icon"),v),r),M=typeof n=="number"?{width:"".concat(n,"px"),height:"".concat(n,"px"),lineHeight:"".concat(n,"px"),fontSize:v?"".concat(n/2,"px"):"18px"}:{},E=(e=S.default)===null||e===void 0?void 0:e.call(S),f;if(c&&p.value)f=m("img",{draggable:F,src:c,srcset:B,onError:N,alt:O},null);else if(v)f=v;else if(A.value||x.value!==1){var C="scale(".concat(x.value,") translateX(-50%)"),V={msTransform:C,WebkitTransform:C,transform:C},X=typeof n=="number"?{lineHeight:"".concat(n,"px")}:{};f=m(U,{onResize:b},{default:function(){return[m("span",{class:"".concat(s,"-string"),ref:z,style:d(d({},X),V)},[E])]}})}else f=m("span",{class:"".concat(s,"-string"),ref:z,style:{opacity:0}},[E]);return m("span",P(P({},h),{},{ref:y,class:L,style:d(d(d({},M),H(!!v)),h.style)}),[f])}}}),oe=re;export{oe as A,ae as a};
