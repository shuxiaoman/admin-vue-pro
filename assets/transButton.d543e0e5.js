import{d as e,P as t,Y as r,c as n}from"./index.0bbf6337.js";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},u=e({name:"TransButton",inheritAttrs:!1,props:{noStyle:t.looseBool,onClick:t.func},methods:{onKeyDown:function(e){e.keyCode===r.ENTER&&e.preventDefault()},onKeyUp:function(e){e.keyCode===r.ENTER&&this.$emit("click",e)},setRef:function(e){this.$refs.div=e},focus:function(){this.$refs.div&&this.$refs.div.focus()},blur:function(){this.$refs.div&&this.$refs.div.blur()}},render:function(){var e,t,r=this.$props,o=r.noStyle,s=r.onClick;return n("div",i(i({role:"button",tabindex:0,ref:"div"},this.$attrs),{},{onClick:s,onKeydown:this.onKeyDown,onKeyup:this.onKeyUp,style:c({},o?null:l)}),[null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e)])}});export{u as T};
