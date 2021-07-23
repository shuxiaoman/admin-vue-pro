import{N as e,a as t}from"./index.02e8fda9.js";import{C as n}from"./toNumber.5775a339.js";import{C as r,a as o,E as a}from"./CloseCircleOutlined.17243ee6.js";import{I as s}from"./InfoCircleOutlined.6283f567.js";import{i}from"./vendor.d7feebf9.js";import{E as c,H as u}from"./code.aa7872b2.js";import{r as f}from"./index.ce4fa7ca.js";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p={},d=4.5,h="24px",m="24px",g="topRight",v=function(){return document.body},y=null;function b(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m;switch(e){case"topLeft":t={left:"0px",top:n,bottom:"auto"};break;case"topRight":t={right:"0px",top:n,bottom:"auto"};break;case"bottomLeft":t={left:"0px",top:"auto",bottom:r};break;default:t={right:"0px",top:"auto",bottom:r}}return t}var w={success:r,info:s,error:o,warning:a};var x={open:function(t){var r=t.icon,o=t.type,a=t.description,s=t.message,c=t.btn,u=t.prefixCls||"ant-notification",f="".concat(u,"-notice"),l=void 0===t.duration?d:t.duration,h=null;if(r)h=function(){return i("span",{class:"".concat(f,"-icon")},[r])};else if(o){var m=w[o];h=function(){return i(m,{class:"".concat(f,"-icon ").concat(f,"-icon-").concat(o)},null)}}!function(t,r){var o=t.prefixCls,a=t.placement,s=void 0===a?g:a,c=t.getContainer,u=void 0===c?v:c,f=t.top,l=t.bottom,d=t.closeIcon,h=void 0===d?y:d,m="".concat(o,"-").concat(s);p[m]?r(p[m]):e.newInstance({prefixCls:o,class:"".concat(o,"-").concat(s),style:b(s,f,l),getContainer:u,closeIcon:function(){return i("span",{class:"".concat(o,"-close-x")},[h||i(n,{class:"".concat(o,"-close-icon")},null)])}},(function(e){p[m]=e,r(e)}))}({prefixCls:u,placement:t.placement,top:t.top,bottom:t.bottom,getContainer:t.getContainer,closeIcon:t.closeIcon},(function(e){e.notice({content:function(){return i("div",{class:h?"".concat(f,"-with-icon"):""},[h&&h(),i("div",{class:"".concat(f,"-message")},[!a&&h?i("span",{class:"".concat(f,"-message-single-line-auto-margin")},null):null,s]),i("div",{class:"".concat(f,"-description")},[a]),c?i("span",{class:"".concat(f,"-btn")},[c]):null])},duration:l,closable:!0,onClose:t.onClose,onClick:t.onClick,key:t.key,style:t.style||{},class:t.class})}))},close:function(e){Object.keys(p).forEach((function(t){return p[t].removeNotice(e)}))},config:function(e){var t=e.duration,n=e.placement,r=e.bottom,o=e.top,a=e.getContainer,s=e.closeIcon;void 0!==t&&(d=t),void 0!==n&&(g=n),void 0!==r&&(m="number"==typeof r?"".concat(r,"px"):r),void 0!==o&&(h="number"==typeof o?"".concat(o,"px"):o),void 0!==a&&(v=a),void 0!==s&&(y=s)},destroy:function(){Object.keys(p).forEach((function(e){p[e].destroy(),delete p[e]}))}};["success","info","warning","error"].forEach((function(e){x[e]=function(t){return x.open(l(l({},t),{type:e}))}})),x.warn=x.warning;var C={exports:{}},k=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},E=k,j=Object.prototype.toString;function S(e){return"[object Array]"===j.call(e)}function O(e){return void 0===e}function R(e){return null!==e&&"object"==typeof e}function T(e){if("[object Object]"!==j.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function A(e){return"[object Function]"===j.call(e)}function N(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),S(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var U={isArray:S,isArrayBuffer:function(e){return"[object ArrayBuffer]"===j.call(e)},isBuffer:function(e){return null!==e&&!O(e)&&null!==e.constructor&&!O(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:R,isPlainObject:T,isUndefined:O,isDate:function(e){return"[object Date]"===j.call(e)},isFile:function(e){return"[object File]"===j.call(e)},isBlob:function(e){return"[object Blob]"===j.call(e)},isFunction:A,isStream:function(e){return R(e)&&A(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:N,merge:function e(){var t={};function n(n,r){T(t[r])&&T(n)?t[r]=e(t[r],n):T(n)?t[r]=e({},n):S(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)N(arguments[r],n);return t},extend:function(e,t,n){return N(t,(function(t,r){e[r]=n&&"function"==typeof t?E(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},P=U;function B(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var L=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(P.isURLSearchParams(t))r=t.toString();else{var o=[];P.forEach(t,(function(e,t){null!=e&&(P.isArray(e)?t+="[]":e=[e],P.forEach(e,(function(e){P.isDate(e)?e=e.toISOString():P.isObject(e)&&(e=JSON.stringify(e)),o.push(B(t)+"="+B(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},_=U;function I(){this.handlers=[]}I.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},I.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},I.prototype.forEach=function(e){_.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var q=I,D=U,F=function(e){return!(!e||!e.__CANCEL__)},H=U,z=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},M=function(e,t,n,r,o){var a=new Error(e);return z(a,t,n,r,o)},X=M,$=U,J=$.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),$.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),$.isString(r)&&s.push("path="+r),$.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},V=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},K=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},G=U,Q=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],W=U,Y=W.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=W.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},Z=U,ee=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(X("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},te=J,ne=L,re=function(e,t){return e&&!V(t)?K(e,t):t},oe=function(e){var t,n,r,o={};return e?(G.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=G.trim(e.substr(0,r)).toLowerCase(),n=G.trim(e.substr(r+1)),t){if(o[t]&&Q.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},ae=Y,se=M,ie=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;Z.isFormData(r)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+i)}var c=re(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),ne(c,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in a?oe(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:r,config:e,request:a};ee(t,n,o),a=null}},a.onabort=function(){a&&(n(se("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(se("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(se(t,e,"ECONNABORTED",a)),a=null},Z.isStandardBrowserEnv()){var u=(e.withCredentials||ae(c))&&e.xsrfCookieName?te.read(e.xsrfCookieName):void 0;u&&(o[e.xsrfHeaderName]=u)}if("setRequestHeader"in a&&Z.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),Z.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),n(e),a=null)})),r||(r=null),a.send(r)}))},ce=U,ue=function(e,t){H.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},fe={"Content-Type":"application/x-www-form-urlencoded"};function le(e,t){!ce.isUndefined(e)&&ce.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var pe,de={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(pe=ie),pe),transformRequest:[function(e,t){return ue(t,"Accept"),ue(t,"Content-Type"),ce.isFormData(e)||ce.isArrayBuffer(e)||ce.isBuffer(e)||ce.isStream(e)||ce.isFile(e)||ce.isBlob(e)?e:ce.isArrayBufferView(e)?e.buffer:ce.isURLSearchParams(e)?(le(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ce.isObject(e)?(le(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};de.headers={common:{Accept:"application/json, text/plain, */*"}},ce.forEach(["delete","get","head"],(function(e){de.headers[e]={}})),ce.forEach(["post","put","patch"],(function(e){de.headers[e]=ce.merge(fe)}));var he=de,me=U,ge=function(e,t,n){return D.forEach(n,(function(n){e=n(e,t)})),e},ve=F,ye=he;function be(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var we=U,xe=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return we.isPlainObject(e)&&we.isPlainObject(t)?we.merge(e,t):we.isPlainObject(t)?we.merge({},t):we.isArray(t)?t.slice():t}function c(r){we.isUndefined(t[r])?we.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(e[r],t[r])}we.forEach(r,(function(e){we.isUndefined(t[e])||(n[e]=i(void 0,t[e]))})),we.forEach(o,c),we.forEach(a,(function(r){we.isUndefined(t[r])?we.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(void 0,t[r])})),we.forEach(s,(function(r){r in t?n[r]=i(e[r],t[r]):r in e&&(n[r]=i(void 0,e[r]))}));var u=r.concat(o).concat(a).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return we.forEach(f,c),n},Ce=U,ke=L,Ee=q,je=function(e){return be(e),e.headers=e.headers||{},e.data=ge(e.data,e.headers,e.transformRequest),e.headers=me.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),me.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ye.adapter)(e).then((function(t){return be(e),t.data=ge(t.data,t.headers,e.transformResponse),t}),(function(t){return ve(t)||(be(e),t&&t.response&&(t.response.data=ge(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Se=xe;function Oe(e){this.defaults=e,this.interceptors={request:new Ee,response:new Ee}}Oe.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Se(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[je,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},Oe.prototype.getUri=function(e){return e=Se(this.defaults,e),ke(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Ce.forEach(["delete","get","head","options"],(function(e){Oe.prototype[e]=function(t,n){return this.request(Se(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ce.forEach(["post","put","patch"],(function(e){Oe.prototype[e]=function(t,n,r){return this.request(Se(r||{},{method:e,url:t,data:n}))}}));var Re=Oe;function Te(e){this.message=e}Te.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Te.prototype.__CANCEL__=!0;var Ae=Te,Ne=Ae;function Ue(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new Ne(e),t(n.reason))}))}Ue.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ue.source=function(){var e;return{token:new Ue((function(t){e=t})),cancel:e}};var Pe=Ue,Be=U,Le=k,_e=Re,Ie=xe;function qe(e){var t=new _e(e),n=Le(_e.prototype.request,t);return Be.extend(n,_e.prototype,t),Be.extend(n,t),n}var De=qe(he);De.Axios=_e,De.create=function(e){return qe(Ie(De.defaults,e))},De.Cancel=Ae,De.CancelToken=Pe,De.isCancel=F,De.all=function(e){return Promise.all(e)},De.spread=function(e){return function(t){return e.apply(null,t)}},De.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},C.exports=De,C.exports.default=De;var Fe=C.exports;let He=!1;const ze=new Map,Me=()=>({accessToken:localStorage.getItem("access_token_key")||void 0,refreshToken:localStorage.getItem("refresh_token_key")||void 0}),Xe=e=>{try{return localStorage.setItem("access_token_key",e.accessToken||""),localStorage.setItem("refresh_token_key",e.refreshToken||""),!0}catch(t){return alert("设置token失败"),!1}},$e=()=>{localStorage.removeItem("access_token_key"),localStorage.removeItem("refresh_token_key")},Je=()=>{He=!1,ze.clear()},Ve=(e,t)=>{ze.set(e,t),He||(He=!0,async function(e){return Ge({url:"/oauth/refresh_token",method:"POST",data:e})}(Me()).then((e=>{(e=>{try{localStorage.setItem("access_token_key",e.accessToken||"")}catch(t){return alert("设置token失败"),!1}})(e),ze.forEach(((e,t)=>{Ge(t).then((t=>e(t)))})),Je()})).catch((e=>{var t;x.error({message:"刷新令牌",content:null==(t=e.error)?void 0:t.msg}),Je()})))},Ke=Fe.create({baseURL:"/api/",timeout:5e3});Ke.interceptors.request.use((e=>{const t=Me().accessToken;return t&&(e.headers.authorization=t),e}),(e=>{Promise.reject(e)}));const Ge=e=>new Promise(((n,r)=>{Ke(e).then((o=>{const a=o.data,{data:s,success:i,error:u}=a;if(i)n(s);else if(10008!==(null==u?void 0:u.code)){if(10010===(null==u?void 0:u.code))return Je(),void f.push("/user/login");t.error({content:(null==u?void 0:u.msg)||c[null==u?void 0:u.code]||"错误"}),r(a)}else Ve(e,n)})).catch((t=>{const n=t.response;if(!n)return void x.error({message:e.url,description:t.message});const{status:r}=n;x.error({message:e.url,description:u[r]||`${r}：请求失败`})}))}));async function Qe(e){return Ge({url:"/oauth/login",method:"POST",data:e})}async function We(){return Ge({url:"/oauth/logout",method:"POST"})}export{Ge as R,We as a,Qe as l,$e as r,Xe as s};
