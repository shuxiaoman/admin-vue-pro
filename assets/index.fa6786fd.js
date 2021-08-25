import{A as t,B as n,P as e,d as o,x as i,s as r,L as s,M as a,j as c,_ as l}from"./debounce.7c4b284f.js";import{i as u,m as f,d,f as m}from"./vendor.13fa0854.js";import{c as p}from"./createChainedFunction.2d5d7d53.js";import{C as h,E as y}from"./ExclamationCircleFilled.5fde2de7.js";import{C as v}from"./CloseCircleFilled.b1621eba.js";import{L as C}from"./LoadingOutlined.13f3bbc7.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var x=function(n,e){var o=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?Object(arguments[n]):{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),o.forEach((function(n){g(t,n,e[n])}))}return t}({},n,e.attrs);return u(t,f(o,{icon:b}),null)};x.displayName="InfoCircleFilled",x.inheritAttrs=!1;var O=x,T={mixins:[n],props:{duration:e.number.def(1.5),closable:e.looseBool,prefixCls:e.string,update:e.looseBool,closeIcon:e.any,onClose:e.func},watch:{duration:function(){this.restartCloseTimer()}},mounted:function(){this.startCloseTimer()},updated:function(){this.update&&this.restartCloseTimer()},beforeUnmount:function(){this.clearCloseTimer(),this.willDestroy=!0},methods:{close:function(t){t&&t.stopPropagation(),this.clearCloseTimer(),this.__emit("close")},startCloseTimer:function(){var t=this;this.clearCloseTimer(),!this.willDestroy&&this.duration&&(this.closeTimer=setTimeout((function(){t.close()}),1e3*this.duration))},clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},restartCloseTimer:function(){this.clearCloseTimer(),this.startCloseTimer()}},render:function(){var t,n=this.prefixCls,e=this.closable,s=this.clearCloseTimer,a=this.startCloseTimer,c=this.close,l=this.$attrs,f="".concat(n,"-notice"),d=(o(t={},"".concat(f),1),o(t,"".concat(f,"-closable"),e),t),m=i(this,"closeIcon");return u("div",{class:d,style:l.style||{right:"50%"},onMouseenter:s,onMouseleave:a},[u("div",{class:"".concat(f,"-content")},[r(this)]),e?u("a",{tabindex:"0",onClick:c,class:"".concat(f,"-close")},[m||u("span",{class:"".concat(f,"-close-x")},null)]):null])}};function j(){}var w=0,k=Date.now();var N=d({mixins:[n],props:{prefixCls:e.string.def("rc-notification"),transitionName:e.string,animation:e.oneOfType([e.string,e.object]).def("fade"),maxCount:e.number,closeIcon:e.any},data:function(){return{notices:[]}},methods:{getTransitionName:function(){var t=this.$props,n=t.transitionName;return!n&&t.animation&&(n="".concat(t.prefixCls,"-").concat(t.animation)),n},add:function(t){var n=t.key=t.key||"rcNotification_".concat(k,"_").concat(w++),e=this.$props.maxCount;this.setState((function(o){var i=o.notices,r=i.map((function(t){return t.key})).indexOf(n),s=i.concat();return-1!==r?s.splice(r,1,t):(e&&i.length>=e&&(t.updateKey=s[0].updateKey||s[0].key,s.shift()),s.push(t)),{notices:s}}))},remove:function(t){this.setState((function(n){return{notices:n.notices.filter((function(n){return n.key!==t}))}}))}},render:function(){var t=this,n=this.prefixCls,e=this.notices,r=this.remove,l=this.getTransitionName,f=this.$attrs,d=s(l()),m=e.map((function(o,s){var a=Boolean(s===e.length-1&&o.updateKey),c=o.updateKey?o.updateKey:o.key,l=o.content,f=o.duration,d=o.closable,m=o.onClose,h=o.style,y=o.class,v=p(r.bind(t,o.key),m),C={prefixCls:n,duration:f,closable:d,update:a,closeIcon:i(t,"closeIcon"),onClose:v,onClick:o.onClick||j,style:h,class:y,key:c};return u(T,C,{default:function(){return["function"==typeof l?l():l]}})})),h=o({},n,1);return u("div",{class:h,style:f.style||{top:"65px",left:"50%"}},[u(a,c({tag:"span"},d),{default:function(){return[m]}})])}});N.newInstance=function(t,n){var e=t||{},o=e.getContainer,i=e.style,r=e.class,s=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(e[o[i]]=t[o[i]])}return e}(e,["getContainer","style","class"]),a=document.createElement("div");o?o().appendChild(a):document.body.appendChild(a);var c=m({mounted:function(){var t=this;this.$nextTick((function(){n({notice:function(n){t.$refs.notification.add(n)},removeNotice:function(n){t.$refs.notification.remove(n)},component:t,destroy:function(){c.unmount(a),a.parentNode&&a.parentNode.removeChild(a)}})}))},render:function(){var t=l(l({},s),{ref:"notification",style:i,class:r});return u(N,t,null)}});c.mount(a)};var I,P,S,$=N,E=3,B=1,K="ant-message",_="move-up",D=function(){return document.body};var F={info:O,success:h,error:v,warning:y,loading:C};var M={open:function(t){var n=void 0!==t.duration?t.duration:E,e=F[t.type],o=e?u(e,null,null):"",i=t.key||B++,r=new Promise((function(e){var r=function(){return"function"==typeof t.onClose&&t.onClose(),e(!0)};!function(t){P?t(P):$.newInstance({prefixCls:K,transitionName:_,style:{top:I},getContainer:D,maxCount:S},(function(n){P?t(P):(P=n,t(n))}))}((function(e){e.notice({key:i,duration:n,style:t.style||{},class:t.class,content:function(){return u("div",{class:"".concat(K,"-custom-content").concat(t.type?" ".concat(K,"-").concat(t.type):"")},[t.icon||o,u("span",null,[t.content])])},onClose:r})}))})),s=function(){P&&P.removeNotice(i)};return s.then=function(t,n){return r.then(t,n)},s.promise=r,s},config:function(t){void 0!==t.top&&(I=t.top,P=null),void 0!==t.duration&&(E=t.duration),void 0!==t.prefixCls&&(K=t.prefixCls),void 0!==t.getContainer&&(D=t.getContainer),void 0!==t.transitionName&&(_=t.transitionName,P=null),void 0!==t.maxCount&&(S=t.maxCount,P=null)},destroy:function(){P&&(P.destroy(),P=null)}};["success","info","warning","error","loading"].forEach((function(t){M[t]=function(n,e,o){return function(t){return"[object Object]"===Object.prototype.toString.call(t)&&!!t.content}(n)?M.open(l(l({},n),{type:t})):("function"==typeof e&&(o=e,e=void 0),M.open({content:n,duration:e,type:t,onClose:o}))}})),M.warn=M.warning;var z=M;export{O as I,$ as N,z as m};