function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequireff1f;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequireff1f=o),o.register("27Lyk",(function(t,r){var n,o;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var l={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)l[t[r]]=e[t[r]]},o=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"6evGa":"index.13078443.js","dzHpM":"calc-img.10586a0a.jpeg"}')),console.log("hej");const l=document.createElement("img");document.body.append(l);var a;a=new URL(o("27Lyk").resolve("dzHpM"),import.meta.url).toString();const i=new URL(a);l.src=i.href,l.classList.add("img");const c=document.querySelector(".result"),s=document.querySelectorAll(".btn");let u="",f="",d="";s.forEach((e=>{e.addEventListener("click",(()=>{const t=e.textContent;"C"===t?(c.value="",u="",f="",d=""):"="===t?function(){const e=parseInt(u),t=parseInt(f);let r="";switch(d){case"+":r=(e+t).toString(),c.value=r;break;case"-":r=(e-t).toString(),c.value=r;break;case"×":r=(e*t).toString(),c.value=r;break;case"÷":r=(e/t).toString(),c.value=r}r=c.value,u="",f="",d=""}():"+"===t||"-"===t||"×"===t||"÷"===t?(d=t,u=c.value,f=""):""===d?(console.log("klick1"),u+=t,c.value=u):(f+=t,c.value=f)}))}));
//# sourceMappingURL=index.13078443.js.map
