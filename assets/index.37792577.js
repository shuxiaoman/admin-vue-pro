import{P as e,q as t,am as n,F as o,s as a,_ as i,g as r,d as s,j as l,G as c,a as u}from"./debounce.7c4b284f.js";import{C as d}from"./index.3ddb4e49.js";import{d as h,t as f,z as p,i as v,s as g}from"./vendor.13fa0854.js";var b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};function x(){}var m=h({name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:{prefixCls:e.string,defaultChecked:e.looseBool,checked:e.looseBool,disabled:e.looseBool,isGroup:e.looseBool,value:e.any,name:e.string,id:e.string,indeterminate:e.looseBool,type:e.string.def("checkbox"),autofocus:e.looseBool,onChange:e.func,"onUpdate:checked":e.func},emits:["change","update:checked"],setup:function(){return{configProvider:f("configProvider",c),checkboxGroupContext:f("checkboxGroupContext",void 0)}},watch:{value:function(e,t){var n=this;p((function(){var o=n.checkboxGroupContext,a=void 0===o?{}:o;a.registerValue&&a.cancelValue&&(a.cancelValue(t),a.registerValue(e))}))}},mounted:function(){var e=this.value,o=this.checkboxGroupContext,a=void 0===o?{}:o;a.registerValue&&a.registerValue(e),t(n(this,"checked")||this.checkboxGroupContext||!n(this,"value"),"Checkbox","`value` is not validate prop, do you mean `checked`?")},beforeUnmount:function(){var e=this.value,t=this.checkboxGroupContext,n=void 0===t?{}:t;n.cancelValue&&n.cancelValue(e)},methods:{handleChange:function(e){var t=e.target.checked;this.$emit("update:checked",t),this.$emit("change",e)},focus:function(){this.$refs.vcCheckbox.focus()},blur:function(){this.$refs.vcCheckbox.blur()}},render:function(){var e,t=this,n=o(this),c=this.checkboxGroupContext,u=this.$attrs,h=a(this),f=n.indeterminate,p=n.prefixCls,g=b(n,["indeterminate","prefixCls"]),m=(0,this.configProvider.getPrefixCls)("checkbox",p),C=u.onMouseenter,k=void 0===C?x:C,y=u.onMouseleave,V=void 0===y?x:y;u.onInput;var O=u.class,G=u.style,P=b(u,["onMouseenter","onMouseleave","onInput","class","style"]),$=i(i(i({},g),{prefixCls:m}),P);c?($.onChange=function(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];t.$emit.apply(t,["change"].concat(o)),c.toggleOption({label:h,value:n.value})},$.name=c.name,$.checked=-1!==c.sValue.indexOf(n.value),$.disabled=n.disabled||c.disabled,$.indeterminate=f):$.onChange=this.handleChange;var w=r((s(e={},"".concat(m,"-wrapper"),!0),s(e,"".concat(m,"-wrapper-checked"),$.checked),s(e,"".concat(m,"-wrapper-disabled"),$.disabled),e),O),j=r(s({},"".concat(m,"-indeterminate"),f));return v("label",{class:w,style:G,onMouseenter:k,onMouseleave:V},[v(d,l(l({},$),{},{class:j,ref:"vcCheckbox"}),null),h.length?v("span",null,[h]):null])}});function C(){}var k=h({name:"ACheckboxGroup",props:{name:e.string,prefixCls:e.string,defaultValue:{type:Array},value:{type:Array},options:{type:Array},disabled:e.looseBool,onChange:e.func},emits:["change","update:value"],setup:function(){return{configProvider:f("configProvider",c)}},data:function(){var e=this.value,t=this.defaultValue;return{sValue:e||t||[],registeredValues:[]}},watch:{value:function(e){this.sValue=e||[]}},created:function(){g("checkboxGroupContext",this)},methods:{getOptions:function(){var e=this.options,t=void 0===e?[]:e,n=this.$slots;return t.map((function(e){if("string"==typeof e)return{label:e,value:e};var t=e.label;return void 0===t&&n.label&&(t=n.label(e)),i(i({},e),{label:t})}))},cancelValue:function(e){this.registeredValues=this.registeredValues.filter((function(t){return t!==e}))},registerValue:function(e){this.registeredValues=[].concat(u(this.registeredValues),[e])},toggleOption:function(e){var t=this.registeredValues,o=this.sValue.indexOf(e.value),a=u(this.sValue);-1===o?a.push(e.value):a.splice(o,1),n(this,"value")||(this.sValue=a);var i=this.getOptions(),r=a.filter((function(e){return-1!==t.indexOf(e)})).sort((function(e,t){return i.findIndex((function(t){return t.value===e}))-i.findIndex((function(e){return e.value===t}))}));this.$emit("update:value",r),this.$emit("change",r)}},render:function(){var e=this.$props,t=this.$data,n=e.prefixCls,o=e.options,i=(0,this.configProvider.getPrefixCls)("checkbox",n),r=a(this),s="".concat(i,"-group");return o&&o.length>0&&(r=this.getOptions().map((function(n){return v(m,{prefixCls:i,key:n.value.toString(),disabled:"disabled"in n?n.disabled:e.disabled,indeterminate:n.indeterminate,value:n.value,checked:-1!==t.sValue.indexOf(n.value),onChange:n.onChange||C,class:"".concat(s,"-item")},{default:function(){return[n.label]}})}))),v("div",{class:s},[r])}});m.Group=k,m.install=function(e){return e.component(m.name,m),e.component(k.name,k),e};export{m as C};