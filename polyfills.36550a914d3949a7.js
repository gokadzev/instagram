(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3461],{4050:(ee,J,he)=>{"use strict";he(6876),he(6935)},6876:()=>{window.__Zone_disable_customElements=!0},6935:()=>{"use strict";const ee=globalThis;function J(t){return(ee.__Zone_symbol_prefix||"__zone_symbol__")+t}const _e=Object.getOwnPropertyDescriptor,ke=Object.defineProperty,Re=Object.getPrototypeOf,ht=Object.create,dt=Array.prototype.slice,Me="addEventListener",Ze="removeEventListener",Ae=J(Me),je=J(Ze),ce="true",ae="false",ve=J("");function He(t,r){return Zone.current.wrap(t,r)}function xe(t,r,c,n,i){return Zone.current.scheduleMacroTask(t,r,c,n,i)}const H=J,Ce=typeof window<"u",Ee=Ce?window:void 0,K=Ce&&Ee||globalThis,_t="removeAttribute";function Ge(t,r){for(let c=t.length-1;c>=0;c--)"function"==typeof t[c]&&(t[c]=He(t[c],r+"_"+c));return t}function ze(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const Xe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,De=!("nw"in K)&&typeof K.process<"u"&&"[object process]"===K.process.toString(),Ve=!De&&!Xe&&!(!Ce||!Ee.HTMLElement),qe=typeof K.process<"u"&&"[object process]"===K.process.toString()&&!Xe&&!(!Ce||!Ee.HTMLElement),Oe={},Ye=function(t){if(!(t=t||K.event))return;let r=Oe[t.type];r||(r=Oe[t.type]=H("ON_PROPERTY"+t.type));const c=this||t.target||K,n=c[r];let i;return Ve&&c===Ee&&"error"===t.type?(i=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===i&&t.preventDefault()):(i=n&&n.apply(this,arguments),null!=i&&!i&&t.preventDefault()),i};function $e(t,r,c){let n=_e(t,r);if(!n&&c&&_e(c,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const i=H("on"+r+"patched");if(t.hasOwnProperty(i)&&t[i])return;delete n.writable,delete n.value;const u=n.get,_=n.set,E=r.slice(2);let y=Oe[E];y||(y=Oe[E]=H("ON_PROPERTY"+E)),n.set=function(C){let T=this;!T&&t===K&&(T=K),T&&("function"==typeof T[y]&&T.removeEventListener(E,Ye),_&&_.call(T,null),T[y]=C,"function"==typeof C&&T.addEventListener(E,Ye,!1))},n.get=function(){let C=this;if(!C&&t===K&&(C=K),!C)return null;const T=C[y];if(T)return T;if(u){let Z=u.call(this);if(Z)return n.set.call(this,Z),"function"==typeof C[_t]&&C.removeAttribute(r),Z}return null},ke(t,r,n),t[i]=!0}function Ke(t,r,c){if(r)for(let n=0;n<r.length;n++)$e(t,"on"+r[n],c);else{const n=[];for(const i in t)"on"==i.slice(0,2)&&n.push(i);for(let i=0;i<n.length;i++)$e(t,n[i],c)}}const ne=H("originalInstance");function be(t){const r=K[t];if(!r)return;K[H(t)]=r,K[t]=function(){const i=Ge(arguments,t);switch(i.length){case 0:this[ne]=new r;break;case 1:this[ne]=new r(i[0]);break;case 2:this[ne]=new r(i[0],i[1]);break;case 3:this[ne]=new r(i[0],i[1],i[2]);break;case 4:this[ne]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},ue(K[t],r);const c=new r(function(){});let n;for(n in c)"XMLHttpRequest"===t&&"responseBlob"===n||function(i){"function"==typeof c[i]?K[t].prototype[i]=function(){return this[ne][i].apply(this[ne],arguments)}:ke(K[t].prototype,i,{set:function(u){"function"==typeof u?(this[ne][i]=He(u,t+"."+i),ue(this[ne][i],u)):this[ne][i]=u},get:function(){return this[ne][i]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&(K[t][n]=r[n])}function le(t,r,c){let n=t;for(;n&&!n.hasOwnProperty(r);)n=Re(n);!n&&t[r]&&(n=t);const i=H(r);let u=null;if(n&&(!(u=n[i])||!n.hasOwnProperty(i))&&(u=n[i]=n[r],ze(n&&_e(n,r)))){const E=c(u,i,r);n[r]=function(){return E(this,arguments)},ue(n[r],u)}return u}function Tt(t,r,c){let n=null;function i(u){const _=u.data;return _.args[_.cbIdx]=function(){u.invoke.apply(this,arguments)},n.apply(_.target,_.args),u}n=le(t,r,u=>function(_,E){const y=c(_,E);return y.cbIdx>=0&&"function"==typeof E[y.cbIdx]?xe(y.name,E[y.cbIdx],y,i):u.apply(_,E)})}function ue(t,r){t[H("OriginalDelegate")]=r}let Je=!1,Be=!1;function pt(){if(Je)return Be;Je=!0;try{const t=Ee.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(Be=!0)}catch{}return Be}let Te=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){Te=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{Te=!1}const yt={useG:!0},te={},Qe={},et=new RegExp("^"+ve+"(\\w+)(true|false)$"),tt=H("propagationStopped");function nt(t,r){const c=(r?r(t):t)+ae,n=(r?r(t):t)+ce,i=ve+c,u=ve+n;te[t]={},te[t][ae]=i,te[t][ce]=u}function mt(t,r,c,n){const i=n&&n.add||Me,u=n&&n.rm||Ze,_=n&&n.listeners||"eventListeners",E=n&&n.rmAll||"removeAllListeners",y=H(i),C="."+i+":",T="prependListener",Z="."+T+":",P=function(b,h,B){if(b.isRemoved)return;const z=b.callback;let Y;"object"==typeof z&&z.handleEvent&&(b.callback=g=>z.handleEvent(g),b.originalDelegate=z);try{b.invoke(b,h,[B])}catch(g){Y=g}const U=b.options;return U&&"object"==typeof U&&U.once&&h[u].call(h,B.type,b.originalDelegate?b.originalDelegate:b.callback,U),Y};function j(b,h,B){if(!(h=h||t.event))return;const z=b||h.target||t,Y=z[te[h.type][B?ce:ae]];if(Y){const U=[];if(1===Y.length){const g=P(Y[0],z,h);g&&U.push(g)}else{const g=Y.slice();for(let F=0;F<g.length&&(!h||!0!==h[tt]);F++){const S=P(g[F],z,h);S&&U.push(S)}}if(1===U.length)throw U[0];for(let g=0;g<U.length;g++){const F=U[g];r.nativeScheduleMicroTask(()=>{throw F})}}}const W=function(b){return j(this,b,!1)},x=function(b){return j(this,b,!0)};function re(b,h){if(!b)return!1;let B=!0;h&&void 0!==h.useG&&(B=h.useG);const z=h&&h.vh;let Y=!0;h&&void 0!==h.chkDup&&(Y=h.chkDup);let U=!1;h&&void 0!==h.rt&&(U=h.rt);let g=b;for(;g&&!g.hasOwnProperty(i);)g=Re(g);if(!g&&b[i]&&(g=b),!g||g[y])return!1;const F=h&&h.eventNameToString,S={},w=g[y]=g[i],v=g[H(u)]=g[u],D=g[H(_)]=g[_],Q=g[H(E)]=g[E];let X;h&&h.prepend&&(X=g[H(h.prepend)]=g[h.prepend]);const $=B?function(s){if(!S.isExisting)return w.call(S.target,S.eventName,S.capture?x:W,S.options)}:function(s){return w.call(S.target,S.eventName,s.invoke,S.options)},A=B?function(s){if(!s.isRemoved){const l=te[s.eventName];let k;l&&(k=l[s.capture?ce:ae]);const R=k&&s.target[k];if(R)for(let p=0;p<R.length;p++)if(R[p]===s){R.splice(p,1),s.isRemoved=!0,s.removeAbortListener&&(s.removeAbortListener(),s.removeAbortListener=null),0===R.length&&(s.allRemoved=!0,s.target[k]=null);break}}if(s.allRemoved)return v.call(s.target,s.eventName,s.capture?x:W,s.options)}:function(s){return v.call(s.target,s.eventName,s.invoke,s.options)},Pe=h&&h.diff?h.diff:function(s,l){const k=typeof l;return"function"===k&&s.callback===l||"object"===k&&s.originalDelegate===l},de=Zone[H("UNPATCHED_EVENTS")],Ie=t[H("PASSIVE_EVENTS")],a=function(s,l,k,R,p=!1,I=!1){return function(){const L=this||t;let M=arguments[0];h&&h.transferEventName&&(M=h.transferEventName(M));let G=arguments[1];if(!G)return s.apply(this,arguments);if(De&&"uncaughtException"===M)return s.apply(this,arguments);let V=!1;if("function"!=typeof G){if(!G.handleEvent)return s.apply(this,arguments);V=!0}if(z&&!z(s,G,L,arguments))return;const fe=Te&&!!Ie&&-1!==Ie.indexOf(M),se=function f(s){if("object"==typeof s&&null!==s){const l={...s};return s.signal&&(l.signal=s.signal),l}return s}(function N(s,l){return!Te&&"object"==typeof s&&s?!!s.capture:Te&&l?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],fe)),pe=se?.signal;if(pe?.aborted)return;if(de)for(let ie=0;ie<de.length;ie++)if(M===de[ie])return fe?s.call(L,M,G,se):s.apply(this,arguments);const Fe=!!se&&("boolean"==typeof se||se.capture),ct=!(!se||"object"!=typeof se)&&se.once,Lt=Zone.current;let We=te[M];We||(nt(M,F),We=te[M]);const at=We[Fe?ce:ae];let Le,ye=L[at],lt=!1;if(ye){if(lt=!0,Y)for(let ie=0;ie<ye.length;ie++)if(Pe(ye[ie],G))return}else ye=L[at]=[];const ut=L.constructor.name,ft=Qe[ut];ft&&(Le=ft[M]),Le||(Le=ut+l+(F?F(M):M)),S.options=se,ct&&(S.options.once=!1),S.target=L,S.capture=Fe,S.eventName=M,S.isExisting=lt;const we=B?yt:void 0;we&&(we.taskData=S),pe&&(S.options.signal=void 0);const oe=Lt.scheduleEventTask(Le,G,we,k,R);if(pe){S.options.signal=pe;const ie=()=>oe.zone.cancelTask(oe);s.call(pe,"abort",ie,{once:!0}),oe.removeAbortListener=()=>pe.removeEventListener("abort",ie)}return S.target=null,we&&(we.taskData=null),ct&&(S.options.once=!0),!Te&&"boolean"==typeof oe.options||(oe.options=se),oe.target=L,oe.capture=Fe,oe.eventName=M,V&&(oe.originalDelegate=G),I?ye.unshift(oe):ye.push(oe),p?L:void 0}};return g[i]=a(w,C,$,A,U),X&&(g[T]=a(X,Z,function(s){return X.call(S.target,S.eventName,s.invoke,S.options)},A,U,!0)),g[u]=function(){const s=this||t;let l=arguments[0];h&&h.transferEventName&&(l=h.transferEventName(l));const k=arguments[2],R=!!k&&("boolean"==typeof k||k.capture),p=arguments[1];if(!p)return v.apply(this,arguments);if(z&&!z(v,p,s,arguments))return;const I=te[l];let L;I&&(L=I[R?ce:ae]);const M=L&&s[L];if(M)for(let G=0;G<M.length;G++){const V=M[G];if(Pe(V,p))return M.splice(G,1),V.isRemoved=!0,0!==M.length||(V.allRemoved=!0,s[L]=null,R||"string"!=typeof l)||(s[ve+"ON_PROPERTY"+l]=null),V.zone.cancelTask(V),U?s:void 0}return v.apply(this,arguments)},g[_]=function(){const s=this||t;let l=arguments[0];h&&h.transferEventName&&(l=h.transferEventName(l));const k=[],R=rt(s,F?F(l):l);for(let p=0;p<R.length;p++){const I=R[p];k.push(I.originalDelegate?I.originalDelegate:I.callback)}return k},g[E]=function(){const s=this||t;let l=arguments[0];if(l){h&&h.transferEventName&&(l=h.transferEventName(l));const k=te[l];if(k){const I=s[k[ae]],L=s[k[ce]];if(I){const M=I.slice();for(let G=0;G<M.length;G++){const V=M[G];this[u].call(this,l,V.originalDelegate?V.originalDelegate:V.callback,V.options)}}if(L){const M=L.slice();for(let G=0;G<M.length;G++){const V=M[G];this[u].call(this,l,V.originalDelegate?V.originalDelegate:V.callback,V.options)}}}}else{const k=Object.keys(s);for(let R=0;R<k.length;R++){const I=et.exec(k[R]);let L=I&&I[1];L&&"removeListener"!==L&&this[E].call(this,L)}this[E].call(this,"removeListener")}if(U)return this},ue(g[i],w),ue(g[u],v),Q&&ue(g[E],Q),D&&ue(g[_],D),!0}let q=[];for(let b=0;b<c.length;b++)q[b]=re(c[b],n);return q}function rt(t,r){if(!r){const u=[];for(let _ in t){const E=et.exec(_);let y=E&&E[1];if(y&&(!r||y===r)){const C=t[_];if(C)for(let T=0;T<C.length;T++)u.push(C[T])}}return u}let c=te[r];c||(nt(r),c=te[r]);const n=t[c[ae]],i=t[c[ce]];return n?i?n.concat(i):n.slice():i?i.slice():[]}function kt(t,r){const c=t.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(i,u){i[tt]=!0,n&&n.apply(i,u)})}const Se=H("zoneTask");function ge(t,r,c,n){let i=null,u=null;c+=n;const _={};function E(C){const T=C.data;return T.args[0]=function(){return C.invoke.apply(this,arguments)},T.handleId=i.apply(t,T.args),C}function y(C){return u.call(t,C.data.handleId)}i=le(t,r+=n,C=>function(T,Z){if("function"==typeof Z[0]){const P={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?Z[1]||0:void 0,args:Z},j=Z[0];Z[0]=function(){try{return j.apply(this,arguments)}finally{P.isPeriodic||("number"==typeof P.handleId?delete _[P.handleId]:P.handleId&&(P.handleId[Se]=null))}};const W=xe(r,Z[0],P,E,y);if(!W)return W;const x=W.data.handleId;return"number"==typeof x?_[x]=W:x&&(x[Se]=W),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(W.ref=x.ref.bind(x),W.unref=x.unref.bind(x)),"number"==typeof x||x?x:W}return C.apply(t,Z)}),u=le(t,c,C=>function(T,Z){const P=Z[0];let j;"number"==typeof P?j=_[P]:(j=P&&P[Se],j||(j=P)),j&&"string"==typeof j.type?"notScheduled"!==j.state&&(j.cancelFn&&j.data.isPeriodic||0===j.runCount)&&("number"==typeof P?delete _[P]:P&&(P[Se]=null),j.zone.cancelTask(j)):C.apply(t,Z)})}function ot(t,r,c){if(!c||0===c.length)return r;const n=c.filter(u=>u.target===t);if(!n||0===n.length)return r;const i=n[0].ignoreProperties;return r.filter(u=>-1===i.indexOf(u))}function st(t,r,c,n){t&&Ke(t,ot(t,r,c),n)}function Ue(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function St(t,r,c,n,i){const u=Zone.__symbol__(n);if(r[u])return;const _=r[u]=r[n];r[n]=function(E,y,C){return y&&y.prototype&&i.forEach(function(T){const Z=`${c}.${n}::`+T,P=y.prototype;try{if(P.hasOwnProperty(T)){const j=t.ObjectGetOwnPropertyDescriptor(P,T);j&&j.value?(j.value=t.wrapWithCurrentZone(j.value,Z),t._redefineProperty(y.prototype,T,j)):P[T]&&(P[T]=t.wrapWithCurrentZone(P[T],Z))}else P[T]&&(P[T]=t.wrapWithCurrentZone(P[T],Z))}catch{}}),_.call(r,E,y,C)},t.attachOriginToPatched(r[n],_)}const it=function me(){const t=globalThis,r=!0===t[J("forceDuplicateZoneCheck")];if(t.Zone&&(r||"function"!=typeof t.Zone.__symbol__))throw new Error("Zone already loaded.");return t.Zone??=function he(){const t=ee.performance;function r(N){t&&t.mark&&t.mark(N)}function c(N,d){t&&t.measure&&t.measure(N,d)}r("Zone");let n=(()=>{class N{static#e=this.__symbol__=J;static assertZonePatched(){if(ee.Promise!==S.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=N.current;for(;e.parent;)e=e.parent;return e}static get current(){return v.zone}static get currentTask(){return D}static __load_patch(e,o,m=!1){if(S.hasOwnProperty(e)){const O=!0===ee[J("forceDuplicateZoneCheck")];if(!m&&O)throw Error("Already loaded patch: "+e)}else if(!ee["__Zone_disable_"+e]){const O="Zone:"+e;r(O),S[e]=o(ee,N,w),c(O,O)}}get parent(){return this._parent}get name(){return this._name}constructor(e,o){this._parent=e,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,o)}get(e){const o=this.getZoneWith(e);if(o)return o._properties[e]}getZoneWith(e){let o=this;for(;o;){if(o._properties.hasOwnProperty(e))return o;o=o._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,o){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const m=this._zoneDelegate.intercept(this,e,o),O=this;return function(){return O.runGuarded(m,this,arguments,o)}}run(e,o,m,O){v={parent:v,zone:this};try{return this._zoneDelegate.invoke(this,e,o,m,O)}finally{v=v.parent}}runGuarded(e,o=null,m,O){v={parent:v,zone:this};try{try{return this._zoneDelegate.invoke(this,e,o,m,O)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{v=v.parent}}runTask(e,o,m){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||re).name+"; Execution: "+this.name+")");if(e.state===q&&(e.type===F||e.type===g))return;const O=e.state!=B;O&&e._transitionTo(B,h),e.runCount++;const $=D;D=e,v={parent:v,zone:this};try{e.type==g&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,o,m)}catch(A){if(this._zoneDelegate.handleError(this,A))throw A}}finally{e.state!==q&&e.state!==Y&&(e.type==F||e.data&&e.data.isPeriodic?O&&e._transitionTo(h,B):(e.runCount=0,this._updateTaskCount(e,-1),O&&e._transitionTo(q,B,q))),v=v.parent,D=$}}scheduleTask(e){if(e.zone&&e.zone!==this){let m=this;for(;m;){if(m===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);m=m.parent}}e._transitionTo(b,q);const o=[];e._zoneDelegates=o,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(m){throw e._transitionTo(Y,b,q),this._zoneDelegate.handleError(this,m),m}return e._zoneDelegates===o&&this._updateTaskCount(e,1),e.state==b&&e._transitionTo(h,b),e}scheduleMicroTask(e,o,m,O){return this.scheduleTask(new _(U,e,o,m,O,void 0))}scheduleMacroTask(e,o,m,O,$){return this.scheduleTask(new _(g,e,o,m,O,$))}scheduleEventTask(e,o,m,O,$){return this.scheduleTask(new _(F,e,o,m,O,$))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||re).name+"; Execution: "+this.name+")");if(e.state===h||e.state===B){e._transitionTo(z,h,B);try{this._zoneDelegate.cancelTask(this,e)}catch(o){throw e._transitionTo(Y,z),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(e,-1),e._transitionTo(q,z),e.runCount=0,e}}_updateTaskCount(e,o){const m=e._zoneDelegates;-1==o&&(e._zoneDelegates=null);for(let O=0;O<m.length;O++)m[O]._updateTaskCount(e.type,o)}}return N})();const i={name:"",onHasTask:(N,d,e,o)=>N.hasTask(e,o),onScheduleTask:(N,d,e,o)=>N.scheduleTask(e,o),onInvokeTask:(N,d,e,o,m,O)=>N.invokeTask(e,o,m,O),onCancelTask:(N,d,e,o)=>N.cancelTask(e,o)};class u{get zone(){return this._zone}constructor(d,e,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=d,this._parentDelegate=e,this._forkZS=o&&(o&&o.onFork?o:e._forkZS),this._forkDlgt=o&&(o.onFork?e:e._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:e._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:e._interceptZS),this._interceptDlgt=o&&(o.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:e._invokeZS),this._invokeDlgt=o&&(o.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:e._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:e._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:e._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:e._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const m=o&&o.onHasTask;(m||e&&e._hasTaskZS)&&(this._hasTaskZS=m?o:i,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(d,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,e):new n(d,e)}intercept(d,e,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,e,o):e}invoke(d,e,o,m,O){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,e,o,m,O):e.apply(o,m)}handleError(d,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,e)}scheduleTask(d,e){let o=e;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,e),o||(o=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=U)throw new Error("Task is missing scheduleFn.");W(e)}return o}invokeTask(d,e,o,m){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,e,o,m):e.callback.apply(o,m)}cancelTask(d,e){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");o=e.cancelFn(e)}return o}hasTask(d,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,e)}catch(o){this.handleError(d,o)}}_updateTaskCount(d,e){const o=this._taskCounts,m=o[d],O=o[d]=m+e;if(O<0)throw new Error("More tasks executed then were scheduled.");0!=m&&0!=O||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:d})}}class _{constructor(d,e,o,m,O,$){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=e,this.data=m,this.scheduleFn=O,this.cancelFn=$,!o)throw new Error("callback is not defined");this.callback=o;const A=this;this.invoke=d===F&&m&&m.useG?_.invokeTask:function(){return _.invokeTask.call(ee,A,this,arguments)}}static invokeTask(d,e,o){d||(d=this),Q++;try{return d.runCount++,d.zone.runTask(d,e,o)}finally{1==Q&&x(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,b)}_transitionTo(d,e,o){if(this._state!==e&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${e}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=d,d==q&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const E=J("setTimeout"),y=J("Promise"),C=J("then");let P,T=[],Z=!1;function j(N){if(P||ee[y]&&(P=ee[y].resolve(0)),P){let d=P[C];d||(d=P.then),d.call(P,N)}else ee[E](N,0)}function W(N){0===Q&&0===T.length&&j(x),N&&T.push(N)}function x(){if(!Z){for(Z=!0;T.length;){const N=T;T=[];for(let d=0;d<N.length;d++){const e=N[d];try{e.zone.runTask(e,null,null)}catch(o){w.onUnhandledError(o)}}}w.microtaskDrainDone(),Z=!1}}const re={name:"NO ZONE"},q="notScheduled",b="scheduling",h="scheduled",B="running",z="canceling",Y="unknown",U="microTask",g="macroTask",F="eventTask",S={},w={symbol:J,currentZoneFrame:()=>v,onUnhandledError:X,microtaskDrainDone:X,scheduleMicroTask:W,showUncaughtError:()=>!n[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:X,patchMethod:()=>X,bindArguments:()=>[],patchThen:()=>X,patchMacroTask:()=>X,patchEventPrototype:()=>X,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>X,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>X,wrapWithCurrentZone:()=>X,filterProperties:()=>[],attachOriginToPatched:()=>X,_redefineProperty:()=>X,patchCallbacks:()=>X,nativeScheduleMicroTask:j};let v={parent:null,zone:new n(null,null)},D=null,Q=0;function X(){}return c("Zone","Zone"),n}(),t.Zone}();(function It(t){(function Dt(t){t.__load_patch("ZoneAwarePromise",(r,c,n)=>{const i=Object.getOwnPropertyDescriptor,u=Object.defineProperty,E=n.symbol,y=[],C=!1!==r[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],T=E("Promise"),Z=E("then"),P="__creationTrace__";n.onUnhandledError=f=>{if(n.showUncaughtError()){const a=f&&f.rejection;a?console.error("Unhandled Promise rejection:",a instanceof Error?a.message:a,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",a,a instanceof Error?a.stack:void 0):console.error(f)}},n.microtaskDrainDone=()=>{for(;y.length;){const f=y.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(a){W(a)}}};const j=E("unhandledPromiseRejectionHandler");function W(f){n.onUnhandledError(f);try{const a=c[j];"function"==typeof a&&a.call(this,f)}catch{}}function x(f){return f&&f.then}function re(f){return f}function q(f){return A.reject(f)}const b=E("state"),h=E("value"),B=E("finally"),z=E("parentPromiseValue"),Y=E("parentPromiseState"),U="Promise.then",g=null,F=!0,S=!1,w=0;function v(f,a){return s=>{try{N(f,a,s)}catch(l){N(f,!1,l)}}}const D=function(){let f=!1;return function(s){return function(){f||(f=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",X=E("currentTaskTrace");function N(f,a,s){const l=D();if(f===s)throw new TypeError(Q);if(f[b]===g){let k=null;try{("object"==typeof s||"function"==typeof s)&&(k=s&&s.then)}catch(R){return l(()=>{N(f,!1,R)})(),f}if(a!==S&&s instanceof A&&s.hasOwnProperty(b)&&s.hasOwnProperty(h)&&s[b]!==g)e(s),N(f,s[b],s[h]);else if(a!==S&&"function"==typeof k)try{k.call(s,l(v(f,a)),l(v(f,!1)))}catch(R){l(()=>{N(f,!1,R)})()}else{f[b]=a;const R=f[h];if(f[h]=s,f[B]===B&&a===F&&(f[b]=f[Y],f[h]=f[z]),a===S&&s instanceof Error){const p=c.currentTask&&c.currentTask.data&&c.currentTask.data[P];p&&u(s,X,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<R.length;)o(f,R[p++],R[p++],R[p++],R[p++]);if(0==R.length&&a==S){f[b]=w;let p=s;try{throw new Error("Uncaught (in promise): "+function _(f){return f&&f.toString===Object.prototype.toString?(f.constructor&&f.constructor.name||"")+": "+JSON.stringify(f):f?f.toString():Object.prototype.toString.call(f)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(I){p=I}C&&(p.throwOriginal=!0),p.rejection=s,p.promise=f,p.zone=c.current,p.task=c.currentTask,y.push(p),n.scheduleMicroTask()}}}return f}const d=E("rejectionHandledHandler");function e(f){if(f[b]===w){try{const a=c[d];a&&"function"==typeof a&&a.call(this,{rejection:f[h],promise:f})}catch{}f[b]=S;for(let a=0;a<y.length;a++)f===y[a].promise&&y.splice(a,1)}}function o(f,a,s,l,k){e(f);const R=f[b],p=R?"function"==typeof l?l:re:"function"==typeof k?k:q;a.scheduleMicroTask(U,()=>{try{const I=f[h],L=!!s&&B===s[B];L&&(s[z]=I,s[Y]=R);const M=a.run(p,void 0,L&&p!==q&&p!==re?[]:[I]);N(s,!0,M)}catch(I){N(s,!1,I)}},s)}const O=function(){},$=r.AggregateError;class A{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(a){return a instanceof A?a:N(new this(null),F,a)}static reject(a){return N(new this(null),S,a)}static withResolvers(){const a={};return a.promise=new A((s,l)=>{a.resolve=s,a.reject=l}),a}static any(a){if(!a||"function"!=typeof a[Symbol.iterator])return Promise.reject(new $([],"All promises were rejected"));const s=[];let l=0;try{for(let p of a)l++,s.push(A.resolve(p))}catch{return Promise.reject(new $([],"All promises were rejected"))}if(0===l)return Promise.reject(new $([],"All promises were rejected"));let k=!1;const R=[];return new A((p,I)=>{for(let L=0;L<s.length;L++)s[L].then(M=>{k||(k=!0,p(M))},M=>{R.push(M),l--,0===l&&(k=!0,I(new $(R,"All promises were rejected")))})})}static race(a){let s,l,k=new this((I,L)=>{s=I,l=L});function R(I){s(I)}function p(I){l(I)}for(let I of a)x(I)||(I=this.resolve(I)),I.then(R,p);return k}static all(a){return A.allWithCallback(a)}static allSettled(a){return(this&&this.prototype instanceof A?this:A).allWithCallback(a,{thenCallback:l=>({status:"fulfilled",value:l}),errorCallback:l=>({status:"rejected",reason:l})})}static allWithCallback(a,s){let l,k,R=new this((M,G)=>{l=M,k=G}),p=2,I=0;const L=[];for(let M of a){x(M)||(M=this.resolve(M));const G=I;try{M.then(V=>{L[G]=s?s.thenCallback(V):V,p--,0===p&&l(L)},V=>{s?(L[G]=s.errorCallback(V),p--,0===p&&l(L)):k(V)})}catch(V){k(V)}p++,I++}return p-=2,0===p&&l(L),R}constructor(a){const s=this;if(!(s instanceof A))throw new Error("Must be an instanceof Promise.");s[b]=g,s[h]=[];try{const l=D();a&&a(l(v(s,F)),l(v(s,S)))}catch(l){N(s,!1,l)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return A}then(a,s){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=this.constructor||A);const k=new l(O),R=c.current;return this[b]==g?this[h].push(R,k,a,s):o(this,R,k,a,s),k}catch(a){return this.then(null,a)}finally(a){let s=this.constructor?.[Symbol.species];(!s||"function"!=typeof s)&&(s=A);const l=new s(O);l[B]=B;const k=c.current;return this[b]==g?this[h].push(k,l,a,a):o(this,k,l,a,a),l}}A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;const Ne=r[T]=r.Promise;r.Promise=A;const Pe=E("thenPatched");function de(f){const a=f.prototype,s=i(a,"then");if(s&&(!1===s.writable||!s.configurable))return;const l=a.then;a[Z]=l,f.prototype.then=function(k,R){return new A((I,L)=>{l.call(this,I,L)}).then(k,R)},f[Pe]=!0}return n.patchThen=de,Ne&&(de(Ne),le(r,"fetch",f=>function Ie(f){return function(a,s){let l=f.apply(a,s);if(l instanceof A)return l;let k=l.constructor;return k[Pe]||de(k),l}}(f))),Promise[c.__symbol__("uncaughtPromiseErrors")]=y,A})})(t),function Ot(t){t.__load_patch("toString",r=>{const c=Function.prototype.toString,n=H("OriginalDelegate"),i=H("Promise"),u=H("Error"),_=function(){if("function"==typeof this){const T=this[n];if(T)return"function"==typeof T?c.call(T):Object.prototype.toString.call(T);if(this===Promise){const Z=r[i];if(Z)return c.call(Z)}if(this===Error){const Z=r[u];if(Z)return c.call(Z)}}return c.call(this)};_[n]=c,Function.prototype.toString=_;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}})}(t),function Nt(t){t.__load_patch("util",(r,c,n)=>{const i=Ue(r);n.patchOnProperties=Ke,n.patchMethod=le,n.bindArguments=Ge,n.patchMacroTask=Tt;const u=c.__symbol__("BLACK_LISTED_EVENTS"),_=c.__symbol__("UNPATCHED_EVENTS");r[_]&&(r[u]=r[_]),r[u]&&(c[u]=c[_]=r[u]),n.patchEventPrototype=kt,n.patchEventTarget=mt,n.isIEOrEdge=pt,n.ObjectDefineProperty=ke,n.ObjectGetOwnPropertyDescriptor=_e,n.ObjectCreate=ht,n.ArraySlice=dt,n.patchClass=be,n.wrapWithCurrentZone=He,n.filterProperties=ot,n.attachOriginToPatched=ue,n._redefineProperty=Object.defineProperty,n.patchCallbacks=St,n.getGlobalObjects=()=>({globalSources:Qe,zoneSymbolEventNames:te,eventNames:i,isBrowser:Ve,isMix:qe,isNode:De,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Ze})})}(t)})(it),function Ct(t){t.__load_patch("legacy",r=>{const c=r[t.__symbol__("legacyPatch")];c&&c()}),t.__load_patch("timers",r=>{const c="set",n="clear";ge(r,c,n,"Timeout"),ge(r,c,n,"Interval"),ge(r,c,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{ge(r,"request","cancel","AnimationFrame"),ge(r,"mozRequest","mozCancel","AnimationFrame"),ge(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,c)=>{const n=["alert","prompt","confirm"];for(let i=0;i<n.length;i++)le(r,n[i],(_,E,y)=>function(C,T){return c.current.run(_,r,T,y)})}),t.__load_patch("EventTarget",(r,c,n)=>{(function wt(t,r){r.patchEventPrototype(t,r)})(r,n),function Pt(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:i,FALSE_STR:u,ZONE_SYMBOL_PREFIX:_}=r.getGlobalObjects();for(let y=0;y<c.length;y++){const C=c[y],P=_+(C+u),j=_+(C+i);n[C]={},n[C][u]=P,n[C][i]=j}const E=t.EventTarget;E&&E.prototype&&r.patchEventTarget(t,r,[E&&E.prototype])}(r,n);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&n.patchEventTarget(r,n,[i.prototype])}),t.__load_patch("MutationObserver",(r,c,n)=>{be("MutationObserver"),be("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,c,n)=>{be("IntersectionObserver")}),t.__load_patch("FileReader",(r,c,n)=>{be("FileReader")}),t.__load_patch("on_property",(r,c,n)=>{!function Rt(t,r){if(De&&!qe||Zone[t.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let n=[];if(Ve){const i=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const u=function gt(){try{const t=Ee.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];st(i,Ue(i),c&&c.concat(u),Re(i))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<n.length;i++){const u=r[n[i]];u&&u.prototype&&st(u.prototype,Ue(u.prototype),c)}}(n,r)}),t.__load_patch("customElements",(r,c,n)=>{!function bt(t,r){const{isBrowser:c,isMix:n}=r.getGlobalObjects();(c||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,c)=>{!function C(T){const Z=T.XMLHttpRequest;if(!Z)return;const P=Z.prototype;let W=P[Ae],x=P[je];if(!W){const w=T.XMLHttpRequestEventTarget;if(w){const v=w.prototype;W=v[Ae],x=v[je]}}const re="readystatechange",q="scheduled";function b(w){const v=w.data,D=v.target;D[_]=!1,D[y]=!1;const Q=D[u];W||(W=D[Ae],x=D[je]),Q&&x.call(D,re,Q);const X=D[u]=()=>{if(D.readyState===D.DONE)if(!v.aborted&&D[_]&&w.state===q){const d=D[c.__symbol__("loadfalse")];if(0!==D.status&&d&&d.length>0){const e=w.invoke;w.invoke=function(){const o=D[c.__symbol__("loadfalse")];for(let m=0;m<o.length;m++)o[m]===w&&o.splice(m,1);!v.aborted&&w.state===q&&e.call(w)},d.push(w)}else w.invoke()}else!v.aborted&&!1===D[_]&&(D[y]=!0)};return W.call(D,re,X),D[n]||(D[n]=w),F.apply(D,v.args),D[_]=!0,w}function h(){}function B(w){const v=w.data;return v.aborted=!0,S.apply(v.target,v.args)}const z=le(P,"open",()=>function(w,v){return w[i]=0==v[2],w[E]=v[1],z.apply(w,v)}),U=H("fetchTaskAborting"),g=H("fetchTaskScheduling"),F=le(P,"send",()=>function(w,v){if(!0===c.current[g]||w[i])return F.apply(w,v);{const D={target:w,url:w[E],isPeriodic:!1,args:v,aborted:!1},Q=xe("XMLHttpRequest.send",h,D,b,B);w&&!0===w[y]&&!D.aborted&&Q.state===q&&Q.invoke()}}),S=le(P,"abort",()=>function(w,v){const D=function j(w){return w[n]}(w);if(D&&"string"==typeof D.type){if(null==D.cancelFn||D.data&&D.data.aborted)return;D.zone.cancelTask(D)}else if(!0===c.current[U])return S.apply(w,v)})}(r);const n=H("xhrTask"),i=H("xhrSync"),u=H("xhrListener"),_=H("xhrScheduled"),E=H("xhrURL"),y=H("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function Et(t,r){const c=t.constructor.name;for(let n=0;n<r.length;n++){const i=r[n],u=t[i];if(u){if(!ze(_e(t,i)))continue;t[i]=(E=>{const y=function(){return E.apply(this,Ge(arguments,c+"."+i))};return ue(y,E),y})(u)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,c)=>{function n(i){return function(u){rt(r,i).forEach(E=>{const y=r.PromiseRejectionEvent;if(y){const C=new y(i,{promise:u.promise,reason:u.rejection});E.invoke(C)}})}}r.PromiseRejectionEvent&&(c[H("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[H("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,c,n)=>{!function vt(t,r){r.patchMethod(t,"queueMicrotask",c=>function(n,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,n)})}(it)}},ee=>{ee(ee.s=4050)}]);