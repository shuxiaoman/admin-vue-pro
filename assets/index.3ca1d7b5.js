import{e as t,P as e,d as r,W as n,X as o}from"./toNumber.5775a339.js";import{i as u}from"./initDefaultProps.f4792837.js";import{e as i,f as a}from"./identity.d1328b1c.js";import{b as f}from"./index.eb409cea.js";import{b as c}from"./_baseProperty.74f89655.js";import{t as s}from"./toInteger.3f41bba0.js";import{i as l,d,s as p}from"./vendor.d7feebf9.js";var v=Math.floor;function m(t,e){var r="";if(!t||e<1||e>9007199254740991)return r;do{e%2&&(r+=t),(e=v(e/2))&&(t+=t)}while(e);return r}var b=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function h(t){return b.test(t)}var y=c("length"),g="[\\ud800-\\udfff]",O="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",j="\\ud83c[\\udffb-\\udfff]",w="[^\\ud800-\\udfff]",P="(?:\\ud83c[\\udde6-\\uddff]){2}",S="[\\ud800-\\udbff][\\udc00-\\udfff]",x="(?:"+O+"|"+j+")"+"?",C="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+[w,P,S].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),D="(?:"+[w+O+"?",O,P,S,g].join("|")+")",I=RegExp(j+"(?="+j+")|"+D+C,"g");function $(t){return h(t)?function(t){for(var e=I.lastIndex=0;I.test(t);)++e;return e}(t):y(t)}var T="[\\ud800-\\udfff]",E="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",R="\\ud83c[\\udffb-\\udfff]",A="[^\\ud800-\\udfff]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",M="[\\ud800-\\udbff][\\udc00-\\udfff]",H="(?:"+E+"|"+R+")"+"?",k="[\\ufe0e\\ufe0f]?"+H+("(?:\\u200d(?:"+[A,N,M].join("|")+")[\\ufe0e\\ufe0f]?"+H+")*"),U="(?:"+[A+E+"?",E,N,M,T].join("|")+")",V=RegExp(R+"(?="+R+")|"+U+k,"g");function B(t){return h(t)?function(t){return t.match(V)||[]}(t):function(t){return t.split("")}(t)}var F=Math.ceil;function W(t,e){var r=(e=void 0===e?" ":i(e)).length;if(r<2)return r?m(e,t):e;var n=m(e,F(t/$(e)));return h(e)?function(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:f(t,e,r)}(B(n),0,t).join(""):n.slice(0,t)}var X=function(t){var e,r=t.value,n=t.formatter,o=t.precision,u=t.decimalSeparator,i=t.groupSeparator,f=void 0===i?"":i,c=t.prefixCls;if("function"==typeof n)e=n({value:r});else{var d=String(r),p=d.match(/^(-?)(\d*)(\.(\d+))?$/);if(p){var v=p[1],m=p[2]||"0",b=p[4]||"";m=m.replace(/\B(?=(\d{3})+(?!\d))/g,f),"number"==typeof o&&(b=function(t,e,r){t=a(t);var n=(e=s(e))?$(t):0;return e&&n<e?t+W(e-n,r):t}(b,o,"0").slice(0,o)),b&&(b="".concat(u).concat(b)),e=[l("span",{key:"int",class:"".concat(c,"-content-value-int")},[v,m]),b&&l("span",{key:"decimal",class:"".concat(c,"-content-value-decimal")},[b])]}else e=d}return l("span",{class:"".concat(c,"-content-value")},[e])};function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function q(){return(q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}X.displayName="StatisticNumber";var z={prefixCls:e.string,decimalSeparator:e.string,groupSeparator:e.string,format:e.string,value:{type:[String,Number,Object]},valueStyle:e.style,valueRender:e.any,formatter:e.any,precision:e.number,prefix:e.VNodeChild,suffix:e.VNodeChild,title:e.VNodeChild,onFinish:e.func},G=d({name:"AStatistic",props:u(z,{decimalSeparator:".",groupSeparator:","}),setup:function(){return{configProvider:p("configProvider",r)}},render:function(){var e=this.$props,r=e.prefixCls,n=e.value,o=void 0===n?0:n,u=e.valueStyle,i=e.valueRender,a=(0,this.configProvider.getPrefixCls)("statistic",r),f=t(this,"title"),c=t(this,"prefix"),s=t(this,"suffix"),d=t(this,"formatter",{},!1),p=q(q({},this.$props),{prefixCls:a,value:o,formatter:d}),v=l(X,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"data-for-update":Date.now()},p),null);return i&&(v=i(v)),l("div",{class:a},[f&&l("div",{class:"".concat(a,"-title")},[f]),l("div",{style:u,class:"".concat(a,"-content")},[c&&l("span",{class:"".concat(a,"-content-prefix")},[c]),v,s&&l("span",{class:"".concat(a,"-content-suffix")},[s])])])}});function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==r)return;var n,o,u=[],i=!0,a=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(u.push(n.value),!e||u.length!==e);i=!0);}catch(f){a=!0,o=f}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return K(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var L=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function Q(t,e){var r=t,n=/\[[^\]]*\]/g,o=(e.match(n)||[]).map((function(t){return t.slice(1,-1)})),u=e.replace(n,"[]"),i=L.reduce((function(t,e){var n=J(e,2),o=n[0],u=n[1];if(-1!==t.indexOf(o)){var i=Math.floor(r/u);return r-=i*u,t.replace(new RegExp("".concat(o,"+"),"g"),(function(t){var e=t.length;return function(t,e,r){t=a(t);var n=(e=s(e))?$(t):0;return e&&n<e?W(e-n,r)+t:t}(i.toString(),e,"0")}))}return t}),u),f=0;return i.replace(n,(function(){var t=o[f];return f+=1,t}))}function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function tt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function et(){return(et=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function rt(t){return n(o)(t).valueOf()}var nt=d({name:"AStatisticCountdown",props:u(z,{format:"HH:mm:ss"}),setup:function(){return{countdownId:void 0}},mounted:function(){this.syncTimer()},updated:function(){this.syncTimer()},beforeUnmount:function(){this.stopTimer()},methods:{syncTimer:function(){rt(this.$props.value)>=Date.now()?this.startTimer():this.stopTimer()},startTimer:function(){var t=this;this.countdownId||(this.countdownId=window.setInterval((function(){t.$refs.statistic.$forceUpdate(),t.syncTimer()}),33.333333333333336))},stopTimer:function(){var t=this.$props.value;this.countdownId&&(clearInterval(this.countdownId),this.countdownId=void 0,rt(t)<Date.now()&&this.$emit("finish"))},formatCountdown:function(t){var e=t.value,r=t.config,u=this.$props.format;return function(t,e){var r=e.format,u=void 0===r?"":r,i=n(o)(t).valueOf(),a=n(o)().valueOf();return Q(Math.max(i-a,0),u)}(e,et(et({},r),{format:u}))},valueRenderHtml:function(t){return t}},render:function(){return l(G,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){tt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:"statistic"},et(et({},this.$props),{valueRender:this.valueRenderHtml,formatter:this.formatCountdown})),null)}});G.Countdown=nt,G.install=function(t){return t.component(G.name,G),t.component(G.Countdown.name,G.Countdown),t};export{G as S};
