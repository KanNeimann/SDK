(()=>{"use strict";var e,t,n,r,o,a,i,c,s,u,d,l,p,f,v={371:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(256),o=n.n(r),a=n(615),i=n.n(a)()(o());i.push([e.id,"body{\r\n    background-color: rgb(190, 134, 134);\r\n}",""]);const c=i},615:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},256:e=>{e.exports=function(e){return e[1]}},182:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},322:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},228:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},98:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},18:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},251:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},m={};function h(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return v[e](n,n.exports,h),n.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=h(182),t=h.n(e),n=h(18),r=h.n(n),o=h(322),a=h.n(o),i=h(98),c=h.n(i),s=h(228),u=h.n(s),d=h(251),l=h.n(d),p=h(371),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(e){var t,n=function(e){t=e,r.write("customer_saas",t),console.log("Instanciando?",t),n.prototype.builderBubble(),n.prototype.loadListeners()};n.prototype.builderBubble=function(){if(!document.getElementById("lm-chat-open")){const e=['   <iframe src="" id="my-iframe" frameborder="0" style="width:500px; height:700px; position: absolute; bottom: 0; right: 0;"></iframe>'].join(""),t=document.createElement("div");return t.innerHTML=e,void document.body.appendChild(t)}console.log("Construir burbuja")},n.prototype.loadListeners=function(){document.querySelector("#my-iframe").src="http://localhost:3000"};var r={write:function(e,t,n,r,o){var a=new Date;n=n||730,o=o||"/",a.setTime(a.getTime()+24*n*60*60*1e3);var i=e+"="+t+"; expires="+a.toGMTString()+"; path="+o;r&&(i+="; domain="+r),document.cookie=i},read:function(e){var t=""+document.cookie,n=t.indexOf(e);if(void 0===e||""===e||-1===n)return"";var r=t.indexOf(";",n);return-1==r&&(r=t.length),unescape(t.substring(n+e.length+1,r))},remove:function(e){this.read(e)&&this.write(e,"",-1,"/")}};const o=e.SDK?e.SDK.config:`${"MISSING_ENV_VAR".CUSTOMER}`;new n(o)}(window)})();