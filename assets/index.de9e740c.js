import{a as e,A as t}from"./Avatar.d844643d.js";import{r,_ as a,P as n,F as o,E as s,x as l,s as i,t as u,k as c,d as p,G as m,n as f,o as v,j as d,D as y,q as b,b as h,a as g}from"./debounce.67102cb7.js";import{b as x,T as A,M as C}from"./Menu.5318a6ec.js";import{d as R,s as j,i as O,q as P}from"./vendor.1bd2b8e6.js";import{a as _}from"./useSize.851ed957.js";import{D as B}from"./index.f1687d16.js";var k=x(),E=r(R({name:"APopover",props:a(a({},k),{prefixCls:n.string,transitionName:n.string.def("zoom-big"),content:n.any,title:n.any}),setup:function(){return{configProvider:j("configProvider",o)}},methods:{getPopupDomNode:function(){return this.$refs.tooltip.getPopupDomNode()}},render:function(){var e=this,t=this.title,r=this.prefixCls,n=this.$slots,o=(0,this.configProvider.getPrefixCls)("popover",r),u=s(this);delete u.title,delete u.content;var c=a(a({},u),{prefixCls:o,ref:"tooltip",title:O("div",null,[(t||n.title)&&O("div",{class:"".concat(o,"-title")},[l(this,"title")]),O("div",{class:"".concat(o,"-inner-content")},[l(this,"content")])])});return O(A,c,{default:function(){return[i(e)]}})}})),N=R({name:"AAvatarGroup",inheritAttrs:!1,props:{prefixCls:n.string,maxCount:n.number,maxStyle:{type:Object,default:function(){return{}}},maxPopoverPlacement:n.oneOf(u("top","bottom")).def("top"),size:e.size},setup:function(e,r){var a=r.slots,n=r.attrs,o=c("avatar-group",e),s=o.prefixCls,l=o.direction;return _(e),function(){var r,o=e.maxPopoverPlacement,i=void 0===o?"top":o,u=e.maxCount,c=e.maxStyle,y=(p(r={},s.value,!0),p(r,"".concat(s.value,"-rtl"),"rtl"===l.value),p(r,"".concat(n.class),!!n.class),r),b=m(a,e),h=f(b).map((function(e,t){return v(e,{key:"avatar-key-".concat(t)})})),g=h.length;if(u&&u<g){var x=h.slice(0,u),A=h.slice(u,g);return x.push(O(E,{key:"avatar-popover-key",content:A,trigger:"hover",placement:i,overlayClassName:"".concat(s.value,"-popover")},{default:function(){return[O(t,{style:c},{default:function(){return["+".concat(g-u)]}})]}})),O("div",d(d({},n),{},{class:y,style:n.style}),[x])}return O("div",d(d({},n),{},{class:y,style:n.style}),[h])}}});t.Group=N,t.install=function(e){return e.component(t.name,t),e.component(N.name,N),e};var S=R({name:"ABreadcrumbItem",__ANT_BREADCRUMB_ITEM:!0,props:{prefixCls:n.string,href:n.string,separator:n.any,overlay:n.any},slots:["separator","overlay"],setup:function(e,t){var r=t.slots,a=c("breadcrumb",e).prefixCls;return function(){var t,n,o,s,l,i=null!==(t=m(r,e,"separator"))&&void 0!==t?t:"/",u=m(r,e);return n=void 0!==e.href?O("a",{class:"".concat(a.value,"-link")},[u]):O("span",{class:"".concat(a.value,"-link")},[u]),o=n,s=a.value,n=(l=m(r,e,"overlay"))?O(B,{overlay:l,placement:"bottomCenter"},{default:function(){return[O("span",{class:"".concat(s,"-overlay-link")},[o,O(y,null,null)])]}}):o,u?O("span",null,[n,i&&O("span",{class:"".concat(a.value,"-separator")},[i])]):null}}});function T(e){var t=e.route,r=e.params,a=e.routes,n=e.paths,o=a.indexOf(t)===a.length-1,s=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return t[r]||e}))}(t,r);return o?O("span",null,[s]):O("a",{href:"#/".concat(n.join("/"))},[s])}var D=R({name:"ABreadcrumb",props:{prefixCls:n.string,routes:{type:Array},params:n.any,separator:n.any,itemRender:{type:Function}},slots:["separator","itemRender"],setup:function(e,t){var r=t.slots,a=c("breadcrumb",e),n=a.prefixCls,o=a.direction,s=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(r){e=e.replace(":".concat(r),t[r])})),e},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=g(e),n=s(t,r);return n&&a.push(n),a};return function(){var t,a,i,u=e.routes,c=e.params,v=void 0===c?{}:c,d=f(m(r,e)),y=null!==(a=m(r,e,"separator"))&&void 0!==a?a:"/",g=e.itemRender||r.itemRender||T;u&&u.length>0?i=function(e){var t=e.routes,r=void 0===t?[]:t,a=e.params,n=void 0===a?{}:a,o=e.separator,i=e.itemRender,u=void 0===i?T:i,c=[];return r.map((function(e){var t=s(e.path,n);t&&c.push(t);var a=[].concat(c),i=null;return e.children&&e.children.length&&(i=O(C,null,{default:function(){return[e.children.map((function(e){return O(C.Item,{key:e.path||e.breadcrumbName},{default:function(){return[u({route:e,params:n,routes:r,paths:l(a,e.path,n)})]}})}))]}})),O(S,{overlay:i,separator:o,key:t||e.breadcrumbName},{default:function(){return[u({route:e,params:n,routes:r,paths:a})]}})}))}({routes:u,params:v,separator:y,itemRender:g}):d.length&&(i=d.map((function(e,t){return b("object"===h(e.type)&&(e.type.__ANT_BREADCRUMB_ITEM||e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),P(e,{separator:y,key:t})})));var x=(p(t={},n.value,!0),p(t,"".concat(n.value,"-rtl"),"rtl"===o.value),t);return O("div",{class:x},[i])}}}),M=R({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:{prefixCls:n.string},setup:function(e,t){var r=t.slots,a=t.attrs,n=c("breadcrumb",e).prefixCls;return function(){var e;a.separator;var t=a.class,o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(a,["separator","class"]),s=f(null===(e=r.default)||void 0===e?void 0:e.call(r));return O("span",d({class:["".concat(n.value,"-separator"),t]},o),[s.length>0?s:"/"])}}});D.Item=S,D.Separator=M,D.install=function(e){return e.component(D.name,D),e.component(S.name,S),e.component(M.name,M),e};export{D as B};