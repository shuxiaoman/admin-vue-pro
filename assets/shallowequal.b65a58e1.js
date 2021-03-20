import{d as e,g as t,n,c as r,i as o,p as i,E as a}from"./index.7252bc7e.js";import{P as c,s as u,h as s,n as l,o as f,m as p,r as d}from"./index.3bfd92be.js";import{C as h}from"./index.3bc05a3e.js";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function O(){}var x=e({name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:{prefixCls:c.string,defaultChecked:c.looseBool,checked:c.looseBool,disabled:c.looseBool,isGroup:c.looseBool,value:c.any,name:c.string,id:c.string,indeterminate:c.looseBool,type:c.string.def("checkbox"),autofocus:c.looseBool,onChange:c.func,"onUpdate:checked":c.func},emits:["change","update:checked"],setup:function(){return{configProvider:t("configProvider",d),checkboxGroupContext:t("checkboxGroupContext",void 0)}},watch:{value:function(e,t){var r=this;n((function(){var n=r.checkboxGroupContext,o=void 0===n?{}:n;o.registerValue&&o.cancelValue&&(o.cancelValue(t),o.registerValue(e))}))}},mounted:function(){var e=this.value,t=this.checkboxGroupContext,n=void 0===t?{}:t;n.registerValue&&n.registerValue(e),u(s(this,"checked")||this.checkboxGroupContext||!s(this,"value"),"Checkbox","`value` is not validate prop, do you mean `checked`?")},beforeUnmount:function(){var e=this.value,t=this.checkboxGroupContext,n=void 0===t?{}:t;n.cancelValue&&n.cancelValue(e)},methods:{handleChange:function(e){var t=e.target.checked;this.$emit("update:checked",t),this.$emit("change",e)},focus:function(){this.$refs.vcCheckbox.focus()},blur:function(){this.$refs.vcCheckbox.blur()}},render:function(){var e,t=this,n=l(this),i=this.checkboxGroupContext,a=this.$attrs,c=f(this),u=n.indeterminate,s=n.prefixCls,d=m(n,["indeterminate","prefixCls"]),b=(0,this.configProvider.getPrefixCls)("checkbox",s),x=a.onMouseenter,j=void 0===x?O:x,C=a.onMouseleave,k=void 0===C?O:C;a.onInput;var V=a.class,P=a.style,w=m(a,["onMouseenter","onMouseleave","onInput","class","style"]),S=y(y(y({},d),{prefixCls:b}),w);i?(S.onChange=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];t.$emit.apply(t,["change"].concat(r)),i.toggleOption({label:c,value:n.value})},S.name=i.name,S.checked=-1!==i.sValue.indexOf(n.value),S.disabled=n.disabled||i.disabled,S.indeterminate=u):S.onChange=this.handleChange;var A,$=p((g(e={},"".concat(b,"-wrapper"),!0),g(e,"".concat(b,"-wrapper-checked"),S.checked),g(e,"".concat(b,"-wrapper-disabled"),S.disabled),e),V),G=p(g({},"".concat(b,"-indeterminate"),u));return r("label",{class:$,style:P,onMouseenter:j,onMouseleave:k},[r(h,v(v({},S),{},{class:G,ref:"vcCheckbox"}),null),c.length?r("span",null,(A=c,"function"==typeof A||"[object Object]"===Object.prototype.toString.call(A)&&!o(A)?c:{default:function(){return[c]}})):null])}});function j(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(){}var P=e({name:"ACheckboxGroup",props:{name:c.string,prefixCls:c.string,defaultValue:{type:Array},value:{type:Array},options:{type:Array},disabled:c.looseBool,onChange:c.func},emits:["change","update:value"],setup:function(){return{configProvider:t("configProvider",d)}},data:function(){var e=this.value,t=this.defaultValue;return{sValue:e||t||[],registeredValues:[]}},watch:{value:function(e){this.sValue=e||[]}},created:function(){i("checkboxGroupContext",this)},methods:{getOptions:function(){var e=this.options,t=void 0===e?[]:e,n=this.$slots;return t.map((function(e){if("string"==typeof e)return{label:e,value:e};var t=e.label;return void 0===t&&n.label&&(t=n.label(e)),k(k({},e),{label:t})}))},cancelValue:function(e){this.registeredValues=this.registeredValues.filter((function(t){return t!==e}))},registerValue:function(e){this.registeredValues=[].concat(j(this.registeredValues),[e])},toggleOption:function(e){var t=this.registeredValues,n=this.sValue.indexOf(e.value),r=j(this.sValue);-1===n?r.push(e.value):r.splice(n,1),s(this,"value")||(this.sValue=r);var o=this.getOptions(),i=r.filter((function(e){return-1!==t.indexOf(e)})).sort((function(e,t){return o.findIndex((function(t){return t.value===e}))-o.findIndex((function(e){return e.value===t}))}));this.$emit("update:value",i),this.$emit("change",i)}},render:function(){var e,t=this.$props,n=this.$data,i=t.prefixCls,a=t.options,c=(0,this.configProvider.getPrefixCls)("checkbox",i),u=f(this),s="".concat(c,"-group");return a&&a.length>0&&(u=this.getOptions().map((function(e){return r(x,{prefixCls:c,key:e.value.toString(),disabled:"disabled"in e?e.disabled:t.disabled,indeterminate:e.indeterminate,value:e.value,checked:-1!==n.sValue.indexOf(e.value),onChange:e.onChange||V,class:"".concat(s,"-item")},{default:function(){return[e.label]}})}))),r("div",{class:s},"function"==typeof(e=u)||"[object Object]"===Object.prototype.toString.call(e)&&!o(e)?u:{default:function(){return[u]}})}});function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r){return function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==w(e)||!e||"object"!==w(t)||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var s=i[u];if(!c(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}(a(e),a(t),n,r)}x.Group=P,x.install=function(e){return e.component(x.name,x),e.component(P.name,P),e};export{x as C,S as s};