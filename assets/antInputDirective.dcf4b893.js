function a(t){t.target.composing=!0}function i(t){!t.target.composing||(t.target.composing=!1,c(t.target,"input"))}function c(t,n){var e=document.createEvent("HTMLEvents");e.initEvent(n,!0,!0),t.dispatchEvent(e)}function o(t,n,e,r){t.addEventListener(n,e,r)}var s={created:function(n,e){(!e.modifiers||!e.modifiers.lazy)&&(o(n,"compositionstart",a),o(n,"compositionend",i),o(n,"change",i))}},u=s;export{u as a};
