function e(){return(e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var n,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(d){l=!0,i=d}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var n=/iPhone/i,i=/iPod/i,o=/iPad/i,a=/\bAndroid(?:.+)Mobile\b/i,l=/Android/i,d=/\bAndroid(?:.+)SD4930UR\b/i,u=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,b=/Windows Phone/i,c=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,f=/BB10/i,h=/Opera Mini/i,s=/\b(CriOS|Chrome)(?:.+)Mobile/i,v=/Mobile(?:.+)Firefox\b/i;function y(e,r){return e.test(r)}function w(e){var t=e||("undefined"!=typeof navigator?navigator.userAgent:""),w=t.split("[FBAN");void 0!==w[1]&&(t=r(w,1)[0]);void 0!==(w=t.split("Twitter"))[1]&&(t=r(w,1)[0]);var A={apple:{phone:y(n,t)&&!y(b,t),ipod:y(i,t),tablet:!y(n,t)&&y(o,t)&&!y(b,t),device:(y(n,t)||y(i,t)||y(o,t))&&!y(b,t)},amazon:{phone:y(d,t),tablet:!y(d,t)&&y(u,t),device:y(d,t)||y(u,t)},android:{phone:!y(b,t)&&y(d,t)||!y(b,t)&&y(a,t),tablet:!y(b,t)&&!y(d,t)&&!y(a,t)&&(y(u,t)||y(l,t)),device:!y(b,t)&&(y(d,t)||y(u,t)||y(a,t)||y(l,t))||y(/\bokhttp\b/i,t)},windows:{phone:y(b,t),tablet:y(c,t),device:y(b,t)||y(c,t)},other:{blackberry:y(p,t),blackberry10:y(f,t),opera:y(h,t),firefox:y(v,t),chrome:y(s,t),device:y(p,t)||y(f,t)||y(h,t)||y(v,t)||y(s,t)},any:null,phone:null,tablet:null};return A.any=A.apple.device||A.android.device||A.windows.device||A.other.device,A.phone=A.apple.phone||A.android.phone||A.windows.phone,A.tablet=A.apple.tablet||A.android.tablet||A.windows.tablet,A}var A=e(e({},w()),{isMobile:w});export{A as d};
