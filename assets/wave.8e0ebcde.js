import{d as t,g as e,n}from"./index.a3c59761.js";import{T as i}from"./Event.c36f22c9.js";import{w as a}from"./LoadingOutlined.baa40532.js";import{f as r,l as o}from"./index.96161519.js";var s;function c(t){return!t||null===t.offsetParent}var d=t({name:"Wave",props:["insertExtraNode"],setup:function(){return{configProvider:e("configProvider",o)}},mounted:function(){var t=this;n((function(){var e=r(t);1===e.nodeType&&(t.instance=t.bindAnimationEvent(e))}))},beforeUnmount:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId)},methods:{onClick:function(t,e){if(!(!t||c(t)||t.className.indexOf("-leave")>=0)){var n=this.$props.insertExtraNode;this.extraNode=document.createElement("div");var a=this.extraNode;a.className="ant-click-animating-node";var r,o=this.getAttributeName();t.removeAttribute(o),t.setAttribute(o,"true"),s=s||document.createElement("style"),!e||"#ffffff"===e||"rgb(255, 255, 255)"===e||(r=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/))&&r[1]&&r[2]&&r[3]&&r[1]===r[2]&&r[2]===r[3]||/rgba\(\d*, \d*, \d*, 0\)/.test(e)||"transparent"===e||(this.csp&&this.csp.nonce&&(s.nonce=this.csp.nonce),a.style.borderColor=e,s.innerHTML="\n        [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n          --antd-wave-shadow-color: ".concat(e,";\n        }"),document.body.contains(s)||document.body.appendChild(s)),n&&t.appendChild(a),i.addStartEventListener(t,this.onTransitionStart),i.addEndEventListener(t,this.onTransitionEnd)}},onTransitionStart:function(t){if(!this._.isUnmounted){var e=r(this);t&&t.target===e&&(this.animationStart||this.resetEffect(e))}},onTransitionEnd:function(t){t&&"fadeEffect"===t.animationName&&this.resetEffect(t.target)},getAttributeName:function(){return this.$props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"},bindAnimationEvent:function(t){var e=this;if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!c(n.target)){e.resetEffect(t);var i=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,i)}),0),a.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=a((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},resetEffect:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var e=this.$props.insertExtraNode,n=this.getAttributeName();t.setAttribute(n,"false"),s&&(s.innerHTML=""),e&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),i.removeStartEventListener(t,this.onTransitionStart),i.removeEndEventListener(t,this.onTransitionEnd)}}},render:function(){var t,e,n=this.configProvider.csp;return n&&(this.csp=n),null===(e=(t=this.$slots).default)||void 0===e?void 0:e.call(t)[0]}});export{d as W};
