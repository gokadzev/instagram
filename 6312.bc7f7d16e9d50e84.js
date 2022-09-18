"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6312],{6312:(G,A,_)=>{_.r(A),_.d(A,{startInputShims:()=>Y});var D=_(7036),y=_(8078),v=_(2045);const L=new WeakMap,b=(e,n,t,o=0)=>{L.has(e)!==t&&(t?C(e,n,o):M(e,n))},I=e=>e===e.getRootNode().activeElement,C=(e,n,t)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),L.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${t}px,0) scale(0)`},M=(e,n)=>{const t=L.get(e);t&&(L.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},w="input, textarea, [no-blur], [contenteditable]",U=function(){var e=(0,D.Z)(function*(n,t,o,r,i){if(!o&&!r)return;const s=((e,n,t)=>((e,n,t,o)=>{const r=e.top,i=e.bottom,s=n.top,a=s+15,f=.75*Math.min(n.bottom,o-t)-i,m=a-r,d=Math.round(f<0?-f:m>0?-m:0),c=Math.min(d,r-s),S=Math.abs(c)/.3;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,S)),scrollPadding:t,inputSafeY:4-(r-a)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight))(n,o||r,i);if(o&&Math.abs(s.scrollAmount)<4)t.focus();else if(b(n,t,!0,s.inputSafeY),t.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let u;const a=function(){var f=(0,D.Z)(function*(){void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",a),o&&(yield(0,y.c)(o,0,s.scrollAmount,s.scrollDuration)),b(n,t,!1,s.inputSafeY),t.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",a)};if(o){const f=yield(0,y.g)(o);if(s.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",a),void(u=setTimeout(a,1e3))}a()}});return function(t,o,r,i,s){return e.apply(this,arguments)}}(),T="$ionPaddingTimer",P=(e,n)=>{var t,o;if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===o?void 0:o.tagName))return;const r=(0,y.f)(e);if(null===r)return;const i=r[T];i&&clearTimeout(i),n>0?r.style.setProperty("--keyboard-offset",`${n}px`):r[T]=setTimeout(()=>{r.style.setProperty("--keyboard-offset","0px")},120)},Y=e=>{const n=document,t=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),r=e.getBoolean("hideCaretOnScroll",!0),i=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),u=Array.from(n.querySelectorAll("ion-input, ion-textarea")),a=new WeakMap,l=new WeakMap,f=function(){var d=(0,D.Z)(function*(c){yield new Promise(g=>(0,v.c)(c,g));const p=c.shadowRoot||c,S=p.querySelector("input")||p.querySelector("textarea"),h=(0,y.f)(c),B=h?null:c.closest("ion-footer");if(S){if(h&&r&&!a.has(c)){const g=((e,n,t)=>{if(!t||!n)return()=>{};const o=u=>{I(n)&&b(e,n,u)},r=()=>b(e,n,!1),i=()=>o(!0),s=()=>o(!1);return(0,v.a)(t,"ionScrollStart",i),(0,v.a)(t,"ionScrollEnd",s),n.addEventListener("blur",r),()=>{(0,v.b)(t,"ionScrollStart",i),(0,v.b)(t,"ionScrollEnd",s),n.addEventListener("ionBlur",r)}})(c,S,h);a.set(c,g)}if("date"!==S.type&&"datetime-local"!==S.type&&(h||B)&&o&&!l.has(c)){const g=((e,n,t,o,r)=>{let i;const s=a=>{i=(0,v.p)(a)},u=a=>{if(!i)return;const l=(0,v.p)(a);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,r=n.y-t.y;return o*o+r*r>e*e}return!1})(6,i,l)&&!I(n)&&U(e,n,t,o,r)};return e.addEventListener("touchstart",s,{capture:!0,passive:!0}),e.addEventListener("touchend",u,!0),()=>{e.removeEventListener("touchstart",s,!0),e.removeEventListener("touchend",u,!0)}})(c,S,h,B,t);l.set(c,g)}}});return function(p){return d.apply(this,arguments)}}();i&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",s=>{if(n)return void(n=!1);const u=t.activeElement;if(!u||u.matches(w))return;const a=s.target;a!==u&&(a.matches(w)||a.closest(w)||(e=!1,setTimeout(()=>{e||u.blur()},50)))},!1)})(),s&&(e=>{const n=document;n.addEventListener("focusin",r=>{P(r.target,e)}),n.addEventListener("focusout",r=>{P(r.target,0)})})(t);for(const d of u)f(d);n.addEventListener("ionInputDidLoad",d=>{f(d.detail)}),n.addEventListener("ionInputDidUnload",d=>{(d=>{if(r){const c=a.get(d);c&&c(),a.delete(d)}if(o){const c=l.get(d);c&&c(),l.delete(d)}})(d.detail)})}}}]);