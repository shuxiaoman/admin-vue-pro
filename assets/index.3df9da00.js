import{B as t,P as e,b as n,f as i,u as o,p as s,n as c,e as r,t as a,d as l,C as f}from"./toNumber.5775a339.js";import{i as p}from"./initDefaultProps.f4792837.js";import{d as u}from"./debounce.284ffcec.js";import{d as h,i as d,s as m}from"./vendor.d7feebf9.js";import{C as g}from"./CheckOutlined.dd11a829.js";function v(){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var t=window.document.documentElement;return"flex"in t.style||"webkitFlex"in t.style||"Flex"in t.style||"msFlex"in t.style}return!1}function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=h({name:"Steps",mixins:[t],props:{type:e.string.def("default"),prefixCls:e.string.def("rc-steps"),iconPrefix:e.string.def("rc"),direction:e.string.def("horizontal"),labelPlacement:e.string.def("horizontal"),status:e.string.def("process"),size:e.string.def(""),progressDot:n(e.oneOfType([e.looseBool,e.func])),initial:e.number.def(0),current:e.number.def(0),icons:e.shape({finish:e.any,error:e.any}).loose,canClick:e.looseBool},data:function(){return this.calcStepOffsetWidth=u(this.calcStepOffsetWidth,150),{flexSupported:!0,lastStepOffsetWidth:0}},mounted:function(){var t=this;this.$nextTick((function(){t.calcStepOffsetWidth(),v()||t.setState({flexSupported:!1})}))},updated:function(){var t=this;this.$nextTick((function(){t.calcStepOffsetWidth()}))},beforeUnmount:function(){this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcStepOffsetWidth&&this.calcStepOffsetWidth.cancel&&this.calcStepOffsetWidth.cancel()},methods:{onStepClick:function(t){this.$props.current!==t&&this.__emit("change",t)},calcStepOffsetWidth:function(){var t=this;if(!v()){var e=this.$data.lastStepOffsetWidth,n=this.$refs.vcStepsRef;n.children.length>0&&(this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcTimeout=setTimeout((function(){var i=(n.lastChild.offsetWidth||0)+1;e===i||Math.abs(e-i)<=3||t.setState({lastStepOffsetWidth:i})})))}}},render:function(){var t,e=this,n=this.prefixCls,c=this.direction,r=this.type,a=this.labelPlacement,l=this.iconPrefix,f=this.status,p=this.size,u=this.current,h=this.progressDot,m=this.initial,g=this.icons,v=this.canClick,y="navigation"===r,x=this.lastStepOffsetWidth,C=this.flexSupported,S=i(this),P=S.length-1,j=h?"vertical":a,w=(O(t={},n,!0),O(t,"".concat(n,"-").concat(c),!0),O(t,"".concat(n,"-").concat(p),p),O(t,"".concat(n,"-label-").concat(j),"horizontal"===c),O(t,"".concat(n,"-dot"),!!h),O(t,"".concat(n,"-navigation"),y),O(t,"".concat(n,"-flex-not-supported"),!C),t);return d("div",{class:w,ref:"vcStepsRef"},[S.map((function(t,i){var r=o(t),a=m+i,p=b({stepNumber:"".concat(a+1),stepIndex:a,prefixCls:n,iconPrefix:l,progressDot:h,icons:g},r);return v&&(p.onStepClick=e.onStepClick),C||"vertical"===c||(y?(p.itemWidth="".concat(100/(P+1),"%"),p.adjustMarginRight=0):i!==P&&(p.itemWidth="".concat(100/P,"%"),p.adjustMarginRight="".concat(-Math.round(x/P+1),"px"))),"error"===f&&i===u-1&&(p.class="".concat(n,"-next-error")),r.status||(p.status=a===u?f:a<u?"finish":"wait"),p.active=a===u,s(t,p)}))])}});function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){return"string"==typeof t}function j(){}var w=h({name:"Step",mixins:[t],props:{prefixCls:e.string,wrapperStyle:e.object,itemWidth:e.string,active:e.looseBool,disabled:e.looseBool,status:e.string,iconPrefix:e.string,icon:e.any,adjustMarginRight:e.string,stepNumber:e.string,stepIndex:e.number,description:e.any,title:e.any,subTitle:e.any,progressDot:n(e.oneOfType([e.looseBool,e.func])),tailContent:e.any,icons:e.shape({finish:e.any,error:e.any}).loose,onClick:e.func,onStepClick:e.func},methods:{onItemClick:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.__emit.apply(this,["click"].concat(e)),this.__emit("stepClick",this.stepIndex)},renderIconNode:function(){var t,e=c(this),n=e.prefixCls,i=e.stepNumber,o=e.status,s=e.iconPrefix,a=e.icons,l=e.progressDot,f=r(this,"icon"),p=r(this,"title"),u=r(this,"description"),h=(S(t={},"".concat(n,"-icon"),!0),S(t,"".concat(s,"icon"),!0),S(t,"".concat(s,"icon-").concat(f),f&&P(f)),S(t,"".concat(s,"icon-check"),!f&&"finish"===o&&a&&!a.finish),S(t,"".concat(s,"icon-close"),!f&&"error"===o&&a&&!a.error),t),m=d("span",{class:"".concat(n,"-icon-dot")},null);return l?d("span",{class:"".concat(n,"-icon")},"function"==typeof l?[l({index:i-1,status:o,title:p,description:u,prefixCls:n})]:[m]):f&&!P(f)?d("span",{class:"".concat(n,"-icon")},[f]):a&&a.finish&&"finish"===o?d("span",{class:"".concat(n,"-icon")},[a.finish]):a&&a.error&&"error"===o?d("span",{class:"".concat(n,"-icon")},[a.error]):f||"finish"===o||"error"===o?d("span",{class:h},null):d("span",{class:"".concat(n,"-icon")},[i])}},render:function(){var t,e=c(this),n=e.prefixCls,i=e.itemWidth,o=e.active,s=e.status,a=void 0===s?"wait":s,l=e.tailContent,f=e.adjustMarginRight,p=e.disabled,u=e.onClick,h=e.onStepClick,m=r(this,"title"),g=r(this,"subTitle"),v=r(this,"description"),b={class:(S(t={},"".concat(n,"-item"),!0),S(t,"".concat(n,"-item-").concat(a),!0),S(t,"".concat(n,"-item-custom"),r(this,"icon")),S(t,"".concat(n,"-item-active"),o),S(t,"".concat(n,"-item-disabled"),!0===p),t)},O={};i&&(O.width=i),f&&(O.marginRight=f);var y={onClick:u||j};return h&&!p&&(y.role="button",y.tabindex=0,y.onClick=this.onItemClick),d("div",C(C({},b),{},{style:O}),[d("div",C(C({},y),{},{class:"".concat(n,"-item-container")}),[d("div",{class:"".concat(n,"-item-tail")},[l]),d("div",{class:"".concat(n,"-item-icon")},[this.renderIconNode()]),d("div",{class:"".concat(n,"-item-content")},[d("div",{class:"".concat(n,"-item-title")},[m,g&&d("div",{title:g,class:"".concat(n,"-item-subtitle")},[g])]),v&&d("div",{class:"".concat(n,"-item-description")},[v])])])])}});function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}y.Step=w;var W=h({name:"ASteps",inheritAttrs:!1,props:p({prefixCls:e.string,iconPrefix:e.string,current:e.number,initial:e.number,labelPlacement:e.oneOf(a("horizontal","vertical")).def("horizontal"),status:e.oneOf(a("wait","process","finish","error")),size:e.oneOf(a("default","small")),direction:e.oneOf(a("horizontal","vertical")),progressDot:n(e.oneOfType([e.looseBool,e.func])),type:e.oneOf(a("default","navigation")),onChange:e.func,"onUpdate:current":e.func},{current:0}),emits:["update:current","change"],setup:function(){return{configProvider:m("configProvider",l)}},Step:k(k({},y.Step),{name:"AStep"}),methods:{handleChange:function(t){this.$emit("update:current",t),this.$emit("change",t)}},render:function(){var t=this,e=k(k({},c(this)),this.$attrs),n=e.prefixCls,o=e.iconPrefix,s=this.configProvider.getPrefixCls,a=s("steps",n),l=s("",o),p=r(this,"progressDot",this,!1),u=k(k({icons:{finish:d(g,{class:"".concat(a,"-finish-icon")},null),error:d(f,{class:"".concat(a,"-error-icon")},null)},iconPrefix:l,prefixCls:a,progressDot:p},e),{canClick:!(!this.onChange&&!this["onUpdate:current"]),onChange:this.handleChange});return d(y,u,{default:function(){return[i(t)]}})}});W.install=function(t){return t.component(W.name,W),t.component(W.Step.name,W.Step),t};export{W as S};