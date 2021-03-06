import{d as e,P as t,f as n,h as r,n as o,x as i,j as a,k as c,m as u,b as s,c as l,i as f,U as p,V as h}from"./index.0bbf6337.js";import{C as d}from"./index.b84041b8.js";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function O(){}var x=e({name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:{prefixCls:t.string,defaultChecked:t.looseBool,checked:t.looseBool,disabled:t.looseBool,isGroup:t.looseBool,value:t.any,name:t.string,id:t.string,indeterminate:t.looseBool,type:t.string.def("checkbox"),autofocus:t.looseBool,onChange:t.func,"onUpdate:checked":t.func},emits:["change","update:checked"],setup:function(){return{configProvider:n("configProvider",r),checkboxGroupContext:n("checkboxGroupContext",void 0)}},watch:{value:function(e,t){var n=this;o((function(){var r=n.checkboxGroupContext,o=void 0===r?{}:r;o.registerValue&&o.cancelValue&&(o.cancelValue(t),o.registerValue(e))}))}},mounted:function(){var e=this.value,t=this.checkboxGroupContext,n=void 0===t?{}:t;n.registerValue&&n.registerValue(e),i(a(this,"checked")||this.checkboxGroupContext||!a(this,"value"),"Checkbox","`value` is not validate prop, do you mean `checked`?")},beforeUnmount:function(){var e=this.value,t=this.checkboxGroupContext,n=void 0===t?{}:t;n.cancelValue&&n.cancelValue(e)},methods:{handleChange:function(e){var t=e.target.checked;this.$emit("update:checked",t),this.$emit("change",e)},focus:function(){this.$refs.vcCheckbox.focus()},blur:function(){this.$refs.vcCheckbox.blur()}},render:function(){var e,t=this,n=c(this),r=this.checkboxGroupContext,o=this.$attrs,i=u(this),a=n.indeterminate,p=n.prefixCls,h=m(n,["indeterminate","prefixCls"]),b=(0,this.configProvider.getPrefixCls)("checkbox",p),x=o.onMouseenter,j=void 0===x?O:x,C=o.onMouseleave,k=void 0===C?O:C;o.onInput;var V=o.class,P=o.style,w=m(o,["onMouseenter","onMouseleave","onInput","class","style"]),S=g(g(g({},h),{prefixCls:b}),w);r?(S.onChange=function(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];t.$emit.apply(t,["change"].concat(o)),r.toggleOption({label:i,value:n.value})},S.name=r.name,S.checked=-1!==r.sValue.indexOf(n.value),S.disabled=n.disabled||r.disabled,S.indeterminate=a):S.onChange=this.handleChange;var A,$=s((y(e={},"".concat(b,"-wrapper"),!0),y(e,"".concat(b,"-wrapper-checked"),S.checked),y(e,"".concat(b,"-wrapper-disabled"),S.disabled),e),V),G=s(y({},"".concat(b,"-indeterminate"),a));return l("label",{class:$,style:P,onMouseenter:j,onMouseleave:k},[l(d,v(v({},S),{},{class:G,ref:"vcCheckbox"}),null),i.length?l("span",null,(A=i,"function"==typeof A||"[object Object]"===Object.prototype.toString.call(A)&&!f(A)?i:{default:function(){return[i]}})):null])}});function j(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(){}var P=e({name:"ACheckboxGroup",props:{name:t.string,prefixCls:t.string,defaultValue:{type:Array},value:{type:Array},options:{type:Array},disabled:t.looseBool,onChange:t.func},emits:["change","update:value"],setup:function(){return{configProvider:n("configProvider",r)}},data:function(){var e=this.value,t=this.defaultValue;return{sValue:e||t||[],registeredValues:[]}},watch:{value:function(e){this.sValue=e||[]}},created:function(){p("checkboxGroupContext",this)},methods:{getOptions:function(){var e=this.options,t=void 0===e?[]:e,n=this.$slots;return t.map((function(e){if("string"==typeof e)return{label:e,value:e};var t=e.label;return void 0===t&&n.label&&(t=n.label(e)),k(k({},e),{label:t})}))},cancelValue:function(e){this.registeredValues=this.registeredValues.filter((function(t){return t!==e}))},registerValue:function(e){this.registeredValues=[].concat(j(this.registeredValues),[e])},toggleOption:function(e){var t=this.registeredValues,n=this.sValue.indexOf(e.value),r=j(this.sValue);-1===n?r.push(e.value):r.splice(n,1),a(this,"value")||(this.sValue=r);var o=this.getOptions(),i=r.filter((function(e){return-1!==t.indexOf(e)})).sort((function(e,t){return o.findIndex((function(t){return t.value===e}))-o.findIndex((function(e){return e.value===t}))}));this.$emit("update:value",i),this.$emit("change",i)}},render:function(){var e,t=this.$props,n=this.$data,r=t.prefixCls,o=t.options,i=(0,this.configProvider.getPrefixCls)("checkbox",r),a=u(this),c="".concat(i,"-group");return o&&o.length>0&&(a=this.getOptions().map((function(e){return l(x,{prefixCls:i,key:e.value.toString(),disabled:"disabled"in e?e.disabled:t.disabled,indeterminate:e.indeterminate,value:e.value,checked:-1!==n.sValue.indexOf(e.value),onChange:e.onChange||V,class:"".concat(c,"-item")},{default:function(){return[e.label]}})}))),l("div",{class:c},"function"==typeof(e=a)||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)?a:{default:function(){return[a]}})}});function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r){return function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==w(e)||!e||"object"!==w(t)||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var s=i[u];if(!c(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}(h(e),h(t),n,r)}x.Group=P,x.install=function(e){return e.component(x.name,x),e.component(P.name,P),e};export{x as C,S as s};
