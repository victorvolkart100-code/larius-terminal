(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function iv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gu={exports:{}},Po={},vu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function rv(){if(yp)return ft;yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(O,ie,De){this.props=O,this.context=ie,this.refs=T,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=y.prototype;function A(O,ie,De){this.props=O,this.context=ie,this.refs=T,this.updater=De||S}var L=A.prototype=new v;L.constructor=A,E(L,y.prototype),L.isPureReactComponent=!0;var b=Array.isArray,V=Object.prototype.hasOwnProperty,U={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function H(O,ie,De){var K,ue={},Ee=null,xe=null;if(ie!=null)for(K in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)V.call(ie,K)&&!F.hasOwnProperty(K)&&(ue[K]=ie[K]);var Ae=arguments.length-2;if(Ae===1)ue.children=De;else if(1<Ae){for(var Ie=Array(Ae),Qe=0;Qe<Ae;Qe++)Ie[Qe]=arguments[Qe+2];ue.children=Ie}if(O&&O.defaultProps)for(K in Ae=O.defaultProps,Ae)ue[K]===void 0&&(ue[K]=Ae[K]);return{$$typeof:s,type:O,key:Ee,ref:xe,props:ue,_owner:U.current}}function P(O,ie){return{$$typeof:s,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function z(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(De){return ie[De]})}var se=/\/+/g;function J(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):ie.toString(36)}function le(O,ie,De,K,ue){var Ee=typeof O;(Ee==="undefined"||Ee==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case s:case e:xe=!0}}if(xe)return xe=O,ue=ue(xe),O=K===""?"."+J(xe,0):K,b(ue)?(De="",O!=null&&(De=O.replace(se,"$&/")+"/"),le(ue,ie,De,"",function(Qe){return Qe})):ue!=null&&(C(ue)&&(ue=P(ue,De+(!ue.key||xe&&xe.key===ue.key?"":(""+ue.key).replace(se,"$&/")+"/")+O)),ie.push(ue)),1;if(xe=0,K=K===""?".":K+":",b(O))for(var Ae=0;Ae<O.length;Ae++){Ee=O[Ae];var Ie=K+J(Ee,Ae);xe+=le(Ee,ie,De,Ie,ue)}else if(Ie=g(O),typeof Ie=="function")for(O=Ie.call(O),Ae=0;!(Ee=O.next()).done;)Ee=Ee.value,Ie=K+J(Ee,Ae++),xe+=le(Ee,ie,De,Ie,ue);else if(Ee==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function me(O,ie,De){if(O==null)return O;var K=[],ue=0;return le(O,K,"","",function(Ee){return ie.call(De,Ee,ue++)}),K}function ae(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(De){(O._status===0||O._status===-1)&&(O._status=1,O._result=De)},function(De){(O._status===0||O._status===-1)&&(O._status=2,O._result=De)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var de={current:null},k={transition:null},ce={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:k,ReactCurrentOwner:U};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:me,forEach:function(O,ie,De){me(O,function(){ie.apply(this,arguments)},De)},count:function(O){var ie=0;return me(O,function(){ie++}),ie},toArray:function(O){return me(O,function(ie){return ie})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=A,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ft.act=re,ft.cloneElement=function(O,ie,De){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var K=E({},O.props),ue=O.key,Ee=O.ref,xe=O._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,xe=U.current),ie.key!==void 0&&(ue=""+ie.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(Ie in ie)V.call(ie,Ie)&&!F.hasOwnProperty(Ie)&&(K[Ie]=ie[Ie]===void 0&&Ae!==void 0?Ae[Ie]:ie[Ie])}var Ie=arguments.length-2;if(Ie===1)K.children=De;else if(1<Ie){Ae=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)Ae[Qe]=arguments[Qe+2];K.children=Ae}return{$$typeof:s,type:O.type,key:ue,ref:Ee,props:K,_owner:xe}},ft.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},ft.createElement=H,ft.createFactory=function(O){var ie=H.bind(null,O);return ie.type=O,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(O){return{$$typeof:u,render:O}},ft.isValidElement=C,ft.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:ae}},ft.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},ft.startTransition=function(O){var ie=k.transition;k.transition={};try{O()}finally{k.transition=ie}},ft.unstable_act=re,ft.useCallback=function(O,ie){return de.current.useCallback(O,ie)},ft.useContext=function(O){return de.current.useContext(O)},ft.useDebugValue=function(){},ft.useDeferredValue=function(O){return de.current.useDeferredValue(O)},ft.useEffect=function(O,ie){return de.current.useEffect(O,ie)},ft.useId=function(){return de.current.useId()},ft.useImperativeHandle=function(O,ie,De){return de.current.useImperativeHandle(O,ie,De)},ft.useInsertionEffect=function(O,ie){return de.current.useInsertionEffect(O,ie)},ft.useLayoutEffect=function(O,ie){return de.current.useLayoutEffect(O,ie)},ft.useMemo=function(O,ie){return de.current.useMemo(O,ie)},ft.useReducer=function(O,ie,De){return de.current.useReducer(O,ie,De)},ft.useRef=function(O){return de.current.useRef(O)},ft.useState=function(O){return de.current.useState(O)},ft.useSyncExternalStore=function(O,ie,De){return de.current.useSyncExternalStore(O,ie,De)},ft.useTransition=function(){return de.current.useTransition()},ft.version="18.3.1",ft}var Sp;function Bd(){return Sp||(Sp=1,vu.exports=rv()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function sv(){if(Mp)return Po;Mp=1;var s=Bd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(u,p,m){var _,x={},g=null,S=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(x[_]=p[_]);if(u&&u.defaultProps)for(_ in p=u.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:u,key:g,ref:S,props:x,_owner:a.current}}return Po.Fragment=n,Po.jsx=d,Po.jsxs=d,Po}var Ep;function ov(){return Ep||(Ep=1,gu.exports=sv()),gu.exports}var w=ov(),Xe=Bd();const av=iv(Xe);var el={},_u={exports:{}},An={},xu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function lv(){return wp||(wp=1,(function(s){function e(k,ce){var re=k.length;k.push(ce);e:for(;0<re;){var O=re-1>>>1,ie=k[O];if(0<a(ie,ce))k[O]=ce,k[re]=ie,re=O;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ce=k[0],re=k.pop();if(re!==ce){k[0]=re;e:for(var O=0,ie=k.length,De=ie>>>1;O<De;){var K=2*(O+1)-1,ue=k[K],Ee=K+1,xe=k[Ee];if(0>a(ue,re))Ee<ie&&0>a(xe,ue)?(k[O]=xe,k[Ee]=re,O=Ee):(k[O]=ue,k[K]=re,O=K);else if(Ee<ie&&0>a(xe,re))k[O]=xe,k[Ee]=re,O=Ee;else break e}}return ce}function a(k,ce){var re=k.sortIndex-ce.sortIndex;return re!==0?re:k.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,u=d.now();s.unstable_now=function(){return d.now()-u}}var p=[],m=[],_=1,x=null,g=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=k)r(m),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(m)}}function b(k){if(T=!1,L(k),!E)if(n(p)!==null)E=!0,ae(V);else{var ce=n(m);ce!==null&&de(b,ce.startTime-k)}}function V(k,ce){E=!1,T&&(T=!1,v(H),H=-1),S=!0;var re=g;try{for(L(ce),x=n(p);x!==null&&(!(x.expirationTime>ce)||k&&!z());){var O=x.callback;if(typeof O=="function"){x.callback=null,g=x.priorityLevel;var ie=O(x.expirationTime<=ce);ce=s.unstable_now(),typeof ie=="function"?x.callback=ie:x===n(p)&&r(p),L(ce)}else r(p);x=n(p)}if(x!==null)var De=!0;else{var K=n(m);K!==null&&de(b,K.startTime-ce),De=!1}return De}finally{x=null,g=re,S=!1}}var U=!1,F=null,H=-1,P=5,C=-1;function z(){return!(s.unstable_now()-C<P)}function se(){if(F!==null){var k=s.unstable_now();C=k;var ce=!0;try{ce=F(!0,k)}finally{ce?J():(U=!1,F=null)}}else U=!1}var J;if(typeof A=="function")J=function(){A(se)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=se,J=function(){me.postMessage(null)}}else J=function(){y(se,0)};function ae(k){F=k,U||(U=!0,J())}function de(k,ce){H=y(function(){k(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ae(V))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var re=g;g=ce;try{return k()}finally{g=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,ce){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=g;g=k;try{return ce()}finally{g=re}},s.unstable_scheduleCallback=function(k,ce,re){var O=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=re+ie,k={id:_++,callback:ce,priorityLevel:k,startTime:re,expirationTime:ie,sortIndex:-1},re>O?(k.sortIndex=re,e(m,k),n(p)===null&&k===n(m)&&(T?(v(H),H=-1):T=!0,de(b,re-O))):(k.sortIndex=ie,e(p,k),E||S||(E=!0,ae(V))),k},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(k){var ce=g;return function(){var re=g;g=ce;try{return k.apply(this,arguments)}finally{g=re}}}})(yu)),yu}var Tp;function cv(){return Tp||(Tp=1,xu.exports=lv()),xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function uv(){if(Ap)return An;Ap=1;var s=Bd(),e=cv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function g(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,f,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function A(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,A);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,A);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,A);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,l)&&(o=null),l||f===null?g(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),k=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,O;function ie(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var De=!1;function K(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),h=l.stack.split(`
`),M=f.length-1,I=h.length-1;1<=M&&0<=I&&f[M]!==h[I];)I--;for(;1<=M&&0<=I;M--,I--)if(f[M]!==h[I]){if(M!==1||I!==1)do if(M--,I--,0>I||f[M]!==h[I]){var B=`
`+f[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=I);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case U:return"Portal";case P:return"Profiler";case H:return"StrictMode";case J:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ie(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Qe(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function hn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){ht(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Tt(t,i,o){(i!=="number"||Nt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var qe=Array.isArray;function D(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function R(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(qe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function pe(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Re,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ct(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,oe=null,he=null;function Ne(t){if(t=mo(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ma(i),Ce(t.stateNode,t.type,i))}}function Pe(t){oe?he?he.push(t):he=[t]:oe=t}function st(){if(oe){var t=oe,i=he;if(he=oe=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function Dt(t,i){return t(i)}function jt(){}var vt=!1;function xn(t,i,o){if(vt)return t(i,o);vt=!0;try{return Dt(t,i,o)}finally{vt=!1,(oe!==null||he!==null)&&(jt(),st())}}function pn(t,i){var o=t.stateNode;if(o===null)return null;var l=ma(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var es=!1;if(u)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){es=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{es=!1}function Ei(t,i,o,l,f,h,M,I,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(_e){this.onError(_e)}}var wi=!1,Tr=null,Ar=!1,Yi=null,Yo={onError:function(t){wi=!0,Tr=t}};function ts(t,i,o,l,f,h,M,I,B){wi=!1,Tr=null,Ei.apply(Yo,arguments)}function Ko(t,i,o,l,f,h,M,I,B){if(ts.apply(this,arguments),wi){if(wi){var ee=Tr;wi=!1,Tr=null}else throw Error(n(198));Ar||(Ar=!0,Yi=ee)}}function fi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Zo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qo(t){if(fi(t)!==t)throw Error(n(188))}function kl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return Qo(f),t;if(h===l)return Qo(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var M=!1,I=f.child;I;){if(I===o){M=!0,o=f,l=h;break}if(I===l){M=!0,l=f,o=h;break}I=I.sibling}if(!M){for(I=h.child;I;){if(I===o){M=!0,o=h,l=f;break}if(I===l){M=!0,l=h,o=f;break}I=I.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function N(t){return t=kl(t),t!==null?j(t):null}function j(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=j(t);if(i!==null)return i;t=t.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,X=e.unstable_shouldYield,Te=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Et=null,mt=null;function sn(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Et,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:yt,$e=Math.log,Qn=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-($e(t)/Qn|0)|0}var on=64,Jn=4194304;function Xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var I=M&~f;I!==0?l=Xt(I):(h&=M,h!==0&&(l=Xt(h)))}else M=o&~f,M!==0?l=Xt(M):h!==0&&(l=Xt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ot(i),f=1<<o,l|=t[o],i&=~f;return l}function Pt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ot(h),I=1<<M,B=f[M];B===-1?((I&o)===0||(I&l)!==0)&&(f[M]=Pt(I,i)):B<=i&&(t.expiredLanes|=I),h&=~I}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mn(){var t=on;return on<<=1,(on&4194240)===0&&(on=64),t}function Hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function yn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ot(i),t[i]=o}function Jo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ot(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function zl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ot(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var At=0;function Zd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Qd,Bl,Jd,ef,tf,Vl=!1,ea=[],Ki=null,Zi=null,Qi=null,Qs=new Map,Js=new Map,Ji=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nf(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function eo(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=mo(i),i!==null&&Bl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ag(t,i,o,l,f){switch(i){case"focusin":return Ki=eo(Ki,t,i,o,l,f),!0;case"dragenter":return Zi=eo(Zi,t,i,o,l,f),!0;case"mouseover":return Qi=eo(Qi,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return Qs.set(h,eo(Qs.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Js.set(h,eo(Js.get(h)||null,t,i,o,l,f)),!0}return!1}function rf(t){var i=Rr(t.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=Zo(o),i!==null){t.blockedOn=i,tf(t.priority,function(){Jd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ta(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Gl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);wt=l,o.target.dispatchEvent(l),wt=null}else return i=mo(o),i!==null&&Bl(i),t.blockedOn=o,!1;i.shift()}return!0}function sf(t,i,o){ta(t)&&o.delete(i)}function Rg(){Vl=!1,Ki!==null&&ta(Ki)&&(Ki=null),Zi!==null&&ta(Zi)&&(Zi=null),Qi!==null&&ta(Qi)&&(Qi=null),Qs.forEach(sf),Js.forEach(sf)}function to(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rg)))}function no(t){function i(f){return to(f,t)}if(0<ea.length){to(ea[0],t);for(var o=1;o<ea.length;o++){var l=ea[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Ki!==null&&to(Ki,t),Zi!==null&&to(Zi,t),Qi!==null&&to(Qi,t),Qs.forEach(i),Js.forEach(i),o=0;o<Ji.length;o++)l=Ji[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)rf(o),o.blockedOn===null&&Ji.shift()}var ns=b.ReactCurrentBatchConfig,na=!0;function Cg(t,i,o,l){var f=At,h=ns.transition;ns.transition=null;try{At=1,Hl(t,i,o,l)}finally{At=f,ns.transition=h}}function bg(t,i,o,l){var f=At,h=ns.transition;ns.transition=null;try{At=4,Hl(t,i,o,l)}finally{At=f,ns.transition=h}}function Hl(t,i,o,l){if(na){var f=Gl(t,i,o,l);if(f===null)oc(t,i,l,ia,o),nf(t,l);else if(Ag(f,t,i,o,l))l.stopPropagation();else if(nf(t,l),i&4&&-1<Tg.indexOf(t)){for(;f!==null;){var h=mo(f);if(h!==null&&Qd(h),h=Gl(t,i,o,l),h===null&&oc(t,i,l,ia,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else oc(t,i,l,null,o)}}var ia=null;function Gl(t,i,o,l){if(ia=null,t=W(l),t=Rr(t),t!==null)if(i=fi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Zo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ia=t,null}function of(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Be:return 1;case tt:return 4;case it:case We:return 16;case gt:return 536870912;default:return 16}default:return 16}}var er=null,Wl=null,ra=null;function af(){if(ra)return ra;var t,i=Wl,o=i.length,l,f="value"in er?er.value:er.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===f[h-l];l++);return ra=f.slice(t,1<l?1-l:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function lf(){return!1}function Dn(t){function i(o,l,f,h,M){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oa:lf,this.isPropagationStopped=lf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Dn(is),io=re({},is,{view:0,detail:0}),Pg=Dn(io),Xl,$l,ro,aa=re({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Xl=t.screenX-ro.screenX,$l=t.screenY-ro.screenY):$l=Xl=0,ro=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),cf=Dn(aa),Ng=re({},aa,{dataTransfer:0}),Lg=Dn(Ng),Dg=re({},io,{relatedTarget:0}),ql=Dn(Dg),Ig=re({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=Dn(Ig),Fg=re({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Og=Dn(Fg),kg=re({},is,{data:0}),uf=Dn(kg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Vg[t])?!!i[t]:!1}function Yl(){return Hg}var Gg=re({},io,{key:function(t){if(t.key){var i=zg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wg=Dn(Gg),jg=re({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=Dn(jg),Xg=re({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),$g=Dn(Xg),qg=re({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=Dn(qg),Kg=re({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=Dn(Kg),Qg=[9,13,27,32],Kl=u&&"CompositionEvent"in window,so=null;u&&"documentMode"in document&&(so=document.documentMode);var Jg=u&&"TextEvent"in window&&!so,ff=u&&(!Kl||so&&8<so&&11>=so),hf=" ",pf=!1;function mf(t,i){switch(t){case"keyup":return Qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function e0(t,i){switch(t){case"compositionend":return gf(i);case"keypress":return i.which!==32?null:(pf=!0,hf);case"textInput":return t=i.data,t===hf&&pf?null:t;default:return null}}function t0(t,i){if(rs)return t==="compositionend"||!Kl&&mf(t,i)?(t=af(),ra=Wl=er=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ff&&i.locale!=="ko"?null:i.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!n0[t.type]:i==="textarea"}function _f(t,i,o,l){Pe(l),i=fa(i,"onChange"),0<i.length&&(o=new jl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var oo=null,ao=null;function i0(t){Ff(t,0)}function la(t){var i=cs(t);if(pt(i))return t}function r0(t,i){if(t==="change")return i}var xf=!1;if(u){var Zl;if(u){var Ql="oninput"in document;if(!Ql){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Ql=typeof yf.oninput=="function"}Zl=Ql}else Zl=!1;xf=Zl&&(!document.documentMode||9<document.documentMode)}function Sf(){oo&&(oo.detachEvent("onpropertychange",Mf),ao=oo=null)}function Mf(t){if(t.propertyName==="value"&&la(ao)){var i=[];_f(i,ao,t,W(t)),xn(i0,i)}}function s0(t,i,o){t==="focusin"?(Sf(),oo=i,ao=o,oo.attachEvent("onpropertychange",Mf)):t==="focusout"&&Sf()}function o0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return la(ao)}function a0(t,i){if(t==="click")return la(i)}function l0(t,i){if(t==="input"||t==="change")return la(i)}function c0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:c0;function lo(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!ei(t[f],i[f]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wf(t,i){var o=Ef(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ef(o)}}function Tf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Tf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Af(){for(var t=window,i=Nt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Nt(t.document)}return i}function Jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function u0(t){var i=Af(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Tf(o.ownerDocument.documentElement,o)){if(l!==null&&Jl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=wf(o,h);var M=wf(o,l);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d0=u&&"documentMode"in document&&11>=document.documentMode,ss=null,ec=null,co=null,tc=!1;function Rf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tc||ss==null||ss!==Nt(l)||(l=ss,"selectionStart"in l&&Jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),co&&lo(co,l)||(co=l,l=fa(ec,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ss)))}function ca(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var os={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},nc={},Cf={};u&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function ua(t){if(nc[t])return nc[t];if(!os[t])return t;var i=os[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Cf)return nc[t]=i[o];return t}var bf=ua("animationend"),Pf=ua("animationiteration"),Nf=ua("animationstart"),Lf=ua("transitionend"),Df=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,i){Df.set(t,i),c(i,[t])}for(var ic=0;ic<If.length;ic++){var rc=If[ic],f0=rc.toLowerCase(),h0=rc[0].toUpperCase()+rc.slice(1);tr(f0,"on"+h0)}tr(bf,"onAnimationEnd"),tr(Pf,"onAnimationIteration"),tr(Nf,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Lf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Uf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ko(l,i,void 0,t),t.currentTarget=null}function Ff(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var I=l[M],B=I.instance,ee=I.currentTarget;if(I=I.listener,B!==h&&f.isPropagationStopped())break e;Uf(f,I,ee),h=B}else for(M=0;M<l.length;M++){if(I=l[M],B=I.instance,ee=I.currentTarget,I=I.listener,B!==h&&f.isPropagationStopped())break e;Uf(f,I,ee),h=B}}}if(Ar)throw t=Yi,Ar=!1,Yi=null,t}function It(t,i){var o=i[fc];o===void 0&&(o=i[fc]=new Set);var l=t+"__bubble";o.has(l)||(Of(i,t,2,!1),o.add(l))}function sc(t,i,o){var l=0;i&&(l|=4),Of(o,t,l,i)}var da="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[da]){t[da]=!0,r.forEach(function(o){o!=="selectionchange"&&(p0.has(o)||sc(o,!1,t),sc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[da]||(i[da]=!0,sc("selectionchange",!1,i))}}function Of(t,i,o,l){switch(of(i)){case 1:var f=Cg;break;case 4:f=bg;break;default:f=Hl}o=f.bind(null,i,o,t),f=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function oc(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var I=l.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;I!==null;){if(M=Rr(I),M===null)return;if(B=M.tag,B===5||B===6){l=h=M;continue e}I=I.parentNode}}l=l.return}xn(function(){var ee=h,_e=W(o),ye=[];e:{var ge=Df.get(t);if(ge!==void 0){var Le=jl,ze=t;switch(t){case"keypress":if(sa(o)===0)break e;case"keydown":case"keyup":Le=Wg;break;case"focusin":ze="focus",Le=ql;break;case"focusout":ze="blur",Le=ql;break;case"beforeblur":case"afterblur":Le=ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=$g;break;case bf:case Pf:case Nf:Le=Ug;break;case Lf:Le=Yg;break;case"scroll":Le=Pg;break;case"wheel":Le=Zg;break;case"copy":case"cut":case"paste":Le=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=df}var Ve=(i&4)!==0,Bt=!Ve&&t==="scroll",q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var G=ee,Y;G!==null;){Y=G;var we=Y.stateNode;if(Y.tag===5&&we!==null&&(Y=we,q!==null&&(we=pn(G,q),we!=null&&Ve.push(ho(G,we,Y)))),Bt)break;G=G.return}0<Ve.length&&(ge=new Le(ge,ze,null,o,_e),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",ge&&o!==wt&&(ze=o.relatedTarget||o.fromElement)&&(Rr(ze)||ze[Ai]))break e;if((Le||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(ze=o.relatedTarget||o.toElement,Le=ee,ze=ze?Rr(ze):null,ze!==null&&(Bt=fi(ze),ze!==Bt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Le=null,ze=ee),Le!==ze)){if(Ve=cf,we="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=df,we="onPointerLeave",q="onPointerEnter",G="pointer"),Bt=Le==null?ge:cs(Le),Y=ze==null?ge:cs(ze),ge=new Ve(we,G+"leave",Le,o,_e),ge.target=Bt,ge.relatedTarget=Y,we=null,Rr(_e)===ee&&(Ve=new Ve(q,G+"enter",ze,o,_e),Ve.target=Y,Ve.relatedTarget=Bt,we=Ve),Bt=we,Le&&ze)t:{for(Ve=Le,q=ze,G=0,Y=Ve;Y;Y=as(Y))G++;for(Y=0,we=q;we;we=as(we))Y++;for(;0<G-Y;)Ve=as(Ve),G--;for(;0<Y-G;)q=as(q),Y--;for(;G--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=as(Ve),q=as(q)}Ve=null}else Ve=null;Le!==null&&kf(ye,ge,Le,Ve,!1),ze!==null&&Bt!==null&&kf(ye,Bt,ze,Ve,!0)}}e:{if(ge=ee?cs(ee):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var je=r0;else if(vf(ge))if(xf)je=l0;else{je=o0;var Ke=s0}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=a0);if(je&&(je=je(t,ee))){_f(ye,je,o,_e);break e}Ke&&Ke(t,ge,ee),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&Tt(ge,"number",ge.value)}switch(Ke=ee?cs(ee):window,t){case"focusin":(vf(Ke)||Ke.contentEditable==="true")&&(ss=Ke,ec=ee,co=null);break;case"focusout":co=ec=ss=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Rf(ye,o,_e);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":Rf(ye,o,_e)}var Ze;if(Kl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else rs?mf(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(ff&&o.locale!=="ko"&&(rs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&rs&&(Ze=af()):(er=_e,Wl="value"in er?er.value:er.textContent,rs=!0)),Ke=fa(ee,nt),0<Ke.length&&(nt=new uf(nt,t,null,o,_e),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=gf(o),Ze!==null&&(nt.data=Ze)))),(Ze=Jg?e0(t,o):t0(t,o))&&(ee=fa(ee,"onBeforeInput"),0<ee.length&&(_e=new uf("onBeforeInput","beforeinput",null,o,_e),ye.push({event:_e,listeners:ee}),_e.data=Ze))}Ff(ye,i)})}function ho(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fa(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=pn(t,o),h!=null&&l.unshift(ho(t,h,f)),h=pn(t,i),h!=null&&l.push(ho(t,h,f))),t=t.return}return l}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kf(t,i,o,l,f){for(var h=i._reactName,M=[];o!==null&&o!==l;){var I=o,B=I.alternate,ee=I.stateNode;if(B!==null&&B===l)break;I.tag===5&&ee!==null&&(I=ee,f?(B=pn(o,h),B!=null&&M.unshift(ho(o,B,I))):f||(B=pn(o,h),B!=null&&M.push(ho(o,B,I)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var m0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(m0,`
`).replace(g0,"")}function ha(t,i,o){if(i=zf(i),zf(t)!==i&&o)throw Error(n(425))}function pa(){}var ac=null,lc=null;function cc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,_0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(t){return Bf.resolve(null).then(t).catch(x0)}:uc;function x0(t){setTimeout(function(){throw t})}function dc(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),no(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);no(i)}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Vf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),pi="__reactFiber$"+ls,po="__reactProps$"+ls,Ai="__reactContainer$"+ls,fc="__reactEvents$"+ls,y0="__reactListeners$"+ls,S0="__reactHandles$"+ls;function Rr(t){var i=t[pi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ai]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Vf(t);t!==null;){if(o=t[pi])return o;t=Vf(t)}return i}t=o,o=t.parentNode}return null}function mo(t){return t=t[pi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ma(t){return t[po]||null}var hc=[],us=-1;function ir(t){return{current:t}}function Ut(t){0>us||(t.current=hc[us],hc[us]=null,us--)}function Lt(t,i){us++,hc[us]=t.current,t.current=i}var rr={},an=ir(rr),Sn=ir(!1),Cr=rr;function ds(t,i){var o=t.type.contextTypes;if(!o)return rr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Mn(t){return t=t.childContextTypes,t!=null}function ga(){Ut(Sn),Ut(an)}function Hf(t,i,o){if(an.current!==rr)throw Error(n(168));Lt(an,i),Lt(Sn,o)}function Gf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,xe(t)||"Unknown",f));return re({},o,l)}function va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Cr=an.current,Lt(an,t),Lt(Sn,Sn.current),!0}function Wf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Gf(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,Ut(Sn),Ut(an),Lt(an,t)):Ut(Sn),Lt(Sn,o)}var Ri=null,_a=!1,pc=!1;function jf(t){Ri===null?Ri=[t]:Ri.push(t)}function M0(t){_a=!0,jf(t)}function sr(){if(!pc&&Ri!==null){pc=!0;var t=0,i=At;try{var o=Ri;for(At=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ri=null,_a=!1}catch(f){throw Ri!==null&&(Ri=Ri.slice(t+1)),te(Be,sr),f}finally{At=i,pc=!1}}return null}var fs=[],hs=0,xa=null,ya=0,Gn=[],Wn=0,br=null,Ci=1,bi="";function Pr(t,i){fs[hs++]=ya,fs[hs++]=xa,xa=t,ya=i}function Xf(t,i,o){Gn[Wn++]=Ci,Gn[Wn++]=bi,Gn[Wn++]=br,br=t;var l=Ci;t=bi;var f=32-ot(l)-1;l&=~(1<<f),o+=1;var h=32-ot(i)+f;if(30<h){var M=f-f%5;h=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Ci=1<<32-ot(i)+f|o<<f|l,bi=h+t}else Ci=1<<h|o<<f|l,bi=t}function mc(t){t.return!==null&&(Pr(t,1),Xf(t,1,0))}function gc(t){for(;t===xa;)xa=fs[--hs],fs[hs]=null,ya=fs[--hs],fs[hs]=null;for(;t===br;)br=Gn[--Wn],Gn[Wn]=null,bi=Gn[--Wn],Gn[Wn]=null,Ci=Gn[--Wn],Gn[Wn]=null}var In=null,Un=null,Ft=!1,ti=null;function $f(t,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function qf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Un=nr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Ci,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,In=t,Un=null,!0):!1;default:return!1}}function vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _c(t){if(Ft){var i=Un;if(i){var o=i;if(!qf(t,i)){if(vc(t))throw Error(n(418));i=nr(o.nextSibling);var l=In;i&&qf(t,i)?$f(l,o):(t.flags=t.flags&-4097|2,Ft=!1,In=t)}}else{if(vc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,In=t}}}function Yf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function Sa(t){if(t!==In)return!1;if(!Ft)return Yf(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cc(t.type,t.memoizedProps)),i&&(i=Un)){if(vc(t))throw Kf(),Error(n(418));for(;i;)$f(t,i),i=nr(i.nextSibling)}if(Yf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Un=nr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=In?nr(t.stateNode.nextSibling):null;return!0}function Kf(){for(var t=Un;t;)t=nr(t.nextSibling)}function ps(){Un=In=null,Ft=!1}function xc(t){ti===null?ti=[t]:ti.push(t)}var E0=b.ReactCurrentBatchConfig;function go(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var I=f.refs;M===null?delete I[h]:I[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Zf(t){var i=t._init;return i(t._payload)}function Qf(t){function i(q,G){if(t){var Y=q.deletions;Y===null?(q.deletions=[G],q.flags|=16):Y.push(G)}}function o(q,G){if(!t)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function l(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function f(q,G){return q=hr(q,G),q.index=0,q.sibling=null,q}function h(q,G,Y){return q.index=Y,t?(Y=q.alternate,Y!==null?(Y=Y.index,Y<G?(q.flags|=2,G):Y):(q.flags|=2,G)):(q.flags|=1048576,G)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function I(q,G,Y,we){return G===null||G.tag!==6?(G=uu(Y,q.mode,we),G.return=q,G):(G=f(G,Y),G.return=q,G)}function B(q,G,Y,we){var je=Y.type;return je===F?_e(q,G,Y.props.children,we,Y.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&Zf(je)===G.type)?(we=f(G,Y.props),we.ref=go(q,G,Y),we.return=q,we):(we=Xa(Y.type,Y.key,Y.props,null,q.mode,we),we.ref=go(q,G,Y),we.return=q,we)}function ee(q,G,Y,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==Y.containerInfo||G.stateNode.implementation!==Y.implementation?(G=du(Y,q.mode,we),G.return=q,G):(G=f(G,Y.children||[]),G.return=q,G)}function _e(q,G,Y,we,je){return G===null||G.tag!==7?(G=kr(Y,q.mode,we,je),G.return=q,G):(G=f(G,Y),G.return=q,G)}function ye(q,G,Y){if(typeof G=="string"&&G!==""||typeof G=="number")return G=uu(""+G,q.mode,Y),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return Y=Xa(G.type,G.key,G.props,null,q.mode,Y),Y.ref=go(q,null,G),Y.return=q,Y;case U:return G=du(G,q.mode,Y),G.return=q,G;case ae:var we=G._init;return ye(q,we(G._payload),Y)}if(qe(G)||ce(G))return G=kr(G,q.mode,Y,null),G.return=q,G;Ma(q,G)}return null}function ge(q,G,Y,we){var je=G!==null?G.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return je!==null?null:I(q,G,""+Y,we);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case V:return Y.key===je?B(q,G,Y,we):null;case U:return Y.key===je?ee(q,G,Y,we):null;case ae:return je=Y._init,ge(q,G,je(Y._payload),we)}if(qe(Y)||ce(Y))return je!==null?null:_e(q,G,Y,we,null);Ma(q,Y)}return null}function Le(q,G,Y,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(Y)||null,I(G,q,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case V:return q=q.get(we.key===null?Y:we.key)||null,B(G,q,we,je);case U:return q=q.get(we.key===null?Y:we.key)||null,ee(G,q,we,je);case ae:var Ke=we._init;return Le(q,G,Y,Ke(we._payload),je)}if(qe(we)||ce(we))return q=q.get(Y)||null,_e(G,q,we,je,null);Ma(G,we)}return null}function ze(q,G,Y,we){for(var je=null,Ke=null,Ze=G,nt=G=0,Jt=null;Ze!==null&&nt<Y.length;nt++){Ze.index>nt?(Jt=Ze,Ze=null):Jt=Ze.sibling;var St=ge(q,Ze,Y[nt],we);if(St===null){Ze===null&&(Ze=Jt);break}t&&Ze&&St.alternate===null&&i(q,Ze),G=h(St,G,nt),Ke===null?je=St:Ke.sibling=St,Ke=St,Ze=Jt}if(nt===Y.length)return o(q,Ze),Ft&&Pr(q,nt),je;if(Ze===null){for(;nt<Y.length;nt++)Ze=ye(q,Y[nt],we),Ze!==null&&(G=h(Ze,G,nt),Ke===null?je=Ze:Ke.sibling=Ze,Ke=Ze);return Ft&&Pr(q,nt),je}for(Ze=l(q,Ze);nt<Y.length;nt++)Jt=Le(Ze,q,nt,Y[nt],we),Jt!==null&&(t&&Jt.alternate!==null&&Ze.delete(Jt.key===null?nt:Jt.key),G=h(Jt,G,nt),Ke===null?je=Jt:Ke.sibling=Jt,Ke=Jt);return t&&Ze.forEach(function(pr){return i(q,pr)}),Ft&&Pr(q,nt),je}function Ve(q,G,Y,we){var je=ce(Y);if(typeof je!="function")throw Error(n(150));if(Y=je.call(Y),Y==null)throw Error(n(151));for(var Ke=je=null,Ze=G,nt=G=0,Jt=null,St=Y.next();Ze!==null&&!St.done;nt++,St=Y.next()){Ze.index>nt?(Jt=Ze,Ze=null):Jt=Ze.sibling;var pr=ge(q,Ze,St.value,we);if(pr===null){Ze===null&&(Ze=Jt);break}t&&Ze&&pr.alternate===null&&i(q,Ze),G=h(pr,G,nt),Ke===null?je=pr:Ke.sibling=pr,Ke=pr,Ze=Jt}if(St.done)return o(q,Ze),Ft&&Pr(q,nt),je;if(Ze===null){for(;!St.done;nt++,St=Y.next())St=ye(q,St.value,we),St!==null&&(G=h(St,G,nt),Ke===null?je=St:Ke.sibling=St,Ke=St);return Ft&&Pr(q,nt),je}for(Ze=l(q,Ze);!St.done;nt++,St=Y.next())St=Le(Ze,q,nt,St.value,we),St!==null&&(t&&St.alternate!==null&&Ze.delete(St.key===null?nt:St.key),G=h(St,G,nt),Ke===null?je=St:Ke.sibling=St,Ke=St);return t&&Ze.forEach(function(nv){return i(q,nv)}),Ft&&Pr(q,nt),je}function Bt(q,G,Y,we){if(typeof Y=="object"&&Y!==null&&Y.type===F&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case V:e:{for(var je=Y.key,Ke=G;Ke!==null;){if(Ke.key===je){if(je=Y.type,je===F){if(Ke.tag===7){o(q,Ke.sibling),G=f(Ke,Y.props.children),G.return=q,q=G;break e}}else if(Ke.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&Zf(je)===Ke.type){o(q,Ke.sibling),G=f(Ke,Y.props),G.ref=go(q,Ke,Y),G.return=q,q=G;break e}o(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}Y.type===F?(G=kr(Y.props.children,q.mode,we,Y.key),G.return=q,q=G):(we=Xa(Y.type,Y.key,Y.props,null,q.mode,we),we.ref=go(q,G,Y),we.return=q,q=we)}return M(q);case U:e:{for(Ke=Y.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===Y.containerInfo&&G.stateNode.implementation===Y.implementation){o(q,G.sibling),G=f(G,Y.children||[]),G.return=q,q=G;break e}else{o(q,G);break}else i(q,G);G=G.sibling}G=du(Y,q.mode,we),G.return=q,q=G}return M(q);case ae:return Ke=Y._init,Bt(q,G,Ke(Y._payload),we)}if(qe(Y))return ze(q,G,Y,we);if(ce(Y))return Ve(q,G,Y,we);Ma(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,G!==null&&G.tag===6?(o(q,G.sibling),G=f(G,Y),G.return=q,q=G):(o(q,G),G=uu(Y,q.mode,we),G.return=q,q=G),M(q)):o(q,G)}return Bt}var ms=Qf(!0),Jf=Qf(!1),Ea=ir(null),wa=null,gs=null,yc=null;function Sc(){yc=gs=wa=null}function Mc(t){var i=Ea.current;Ut(Ea),t._currentValue=i}function Ec(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function vs(t,i){wa=t,yc=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(En=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(yc!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(wa===null)throw Error(n(308));gs=t,wa.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Nr=null;function wc(t){Nr===null?Nr=[t]:Nr.push(t)}function eh(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,wc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Pi(t,l)}function Pi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var or=!1;function Tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Pi(t,o)}return f=l.interleaved,f===null?(i.next=i,wc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Pi(t,o)}function Ta(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}function nh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Aa(t,i,o,l){var f=t.updateQueue;or=!1;var h=f.firstBaseUpdate,M=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var B=I,ee=B.next;B.next=null,M===null?h=ee:M.next=ee,M=B;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==M&&(I===null?_e.firstBaseUpdate=ee:I.next=ee,_e.lastBaseUpdate=B))}if(h!==null){var ye=f.baseState;M=0,_e=ee=B=null,I=h;do{var ge=I.lane,Le=I.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=t,Ve=I;switch(ge=i,Le=o,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ye=ze.call(Le,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(Le,ye,ge):ze,ge==null)break e;ye=re({},ye,ge);break e;case 2:or=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[I]:ge.push(I))}else Le={eventTime:Le,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ee=_e=Le,B=ye):_e=_e.next=Le,M|=ge;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(_e===null&&(B=ye),f.baseState=B,f.firstBaseUpdate=ee,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Ir|=M,t.lanes=M,t.memoizedState=ye}}function ih(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var vo={},mi=ir(vo),_o=ir(vo),xo=ir(vo);function Lr(t){if(t===vo)throw Error(n(174));return t}function Ac(t,i){switch(Lt(xo,i),Lt(_o,t),Lt(mi,vo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=He(i,t)}Ut(mi),Lt(mi,i)}function _s(){Ut(mi),Ut(_o),Ut(xo)}function rh(t){Lr(xo.current);var i=Lr(mi.current),o=He(i,t.type);i!==o&&(Lt(_o,t),Lt(mi,o))}function Rc(t){_o.current===t&&(Ut(mi),Ut(_o))}var Ot=ir(0);function Ra(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Cc=[];function bc(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Ca=b.ReactCurrentDispatcher,Pc=b.ReactCurrentBatchConfig,Dr=0,kt=null,$t=null,Zt=null,ba=!1,yo=!1,So=0,w0=0;function ln(){throw Error(n(321))}function Nc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ei(t[o],i[o]))return!1;return!0}function Lc(t,i,o,l,f,h){if(Dr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?C0:b0,t=o(l,f),yo){h=0;do{if(yo=!1,So=0,25<=h)throw Error(n(301));h+=1,Zt=$t=null,i.updateQueue=null,Ca.current=P0,t=o(l,f)}while(yo)}if(Ca.current=La,i=$t!==null&&$t.next!==null,Dr=0,Zt=$t=kt=null,ba=!1,i)throw Error(n(300));return t}function Dc(){var t=So!==0;return So=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?kt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Xn(){if($t===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=Zt===null?kt.memoizedState:Zt.next;if(i!==null)Zt=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Zt===null?kt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function Mo(t,i){return typeof i=="function"?i(t):i}function Ic(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var M=f.next;f.next=h.next,h.next=M}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var I=M=null,B=null,ee=h;do{var _e=ee.lane;if((Dr&_e)===_e)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var ye={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(I=B=ye,M=l):B=B.next=ye,kt.lanes|=_e,Ir|=_e}ee=ee.next}while(ee!==null&&ee!==h);B===null?M=l:B.next=I,ei(l,i.memoizedState)||(En=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,kt.lanes|=h,Ir|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Uc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do h=t(h,M.action),M=M.next;while(M!==f);ei(h,i.memoizedState)||(En=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function sh(){}function oh(t,i){var o=kt,l=Xn(),f=i(),h=!ei(l.memoizedState,f);if(h&&(l.memoizedState=f,En=!0),l=l.queue,Fc(ch.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,Eo(9,lh.bind(null,o,l,f,i),void 0,null),Qt===null)throw Error(n(349));(Dr&30)!==0||ah(o,i,f)}return f}function ah(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function lh(t,i,o,l){i.value=o,i.getSnapshot=l,uh(i)&&dh(t)}function ch(t,i,o){return o(function(){uh(i)&&dh(t)})}function uh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ei(t,o)}catch{return!0}}function dh(t){var i=Pi(t,1);i!==null&&si(i,t,1,-1)}function fh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},i.queue=t,t=t.dispatch=R0.bind(null,kt,t),[i.memoizedState,t]}function Eo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function hh(){return Xn().memoizedState}function Pa(t,i,o,l){var f=gi();kt.flags|=t,f.memoizedState=Eo(1|i,o,void 0,l===void 0?null:l)}function Na(t,i,o,l){var f=Xn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&Nc(l,M.deps)){f.memoizedState=Eo(i,o,h,l);return}}kt.flags|=t,f.memoizedState=Eo(1|i,o,h,l)}function ph(t,i){return Pa(8390656,8,t,i)}function Fc(t,i){return Na(2048,8,t,i)}function mh(t,i){return Na(4,2,t,i)}function gh(t,i){return Na(4,4,t,i)}function vh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function _h(t,i,o){return o=o!=null?o.concat([t]):null,Na(4,4,vh.bind(null,i,t),o)}function Oc(){}function xh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Nc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function yh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Nc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Sh(t,i,o){return(Dr&21)===0?(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=o):(ei(o,i)||(o=mn(),kt.lanes|=o,Ir|=o,t.baseState=!0),i)}function T0(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var l=Pc.transition;Pc.transition={};try{t(!1),i()}finally{At=o,Pc.transition=l}}function Mh(){return Xn().memoizedState}function A0(t,i,o){var l=dr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Eh(t))wh(i,o);else if(o=eh(t,i,o,l),o!==null){var f=vn();si(o,t,l,f),Th(o,i,l)}}function R0(t,i,o){var l=dr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Eh(t))wh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,I=h(M,o);if(f.hasEagerState=!0,f.eagerState=I,ei(I,M)){var B=i.interleaved;B===null?(f.next=f,wc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=eh(t,i,f,l),o!==null&&(f=vn(),si(o,t,l,f),Th(o,i,l))}}function Eh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function wh(t,i){yo=ba=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Th(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}var La={readContext:jn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},C0={readContext:jn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:ph,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4194308,4,vh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Pa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Pa(4,2,t,i)},useMemo:function(t,i){var o=gi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=gi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=A0.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:fh,useDebugValue:Oc,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=fh(!1),i=t[0];return t=T0.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,f=gi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(Dr&30)!==0||ah(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,ph(ch.bind(null,l,h,t),[t]),l.flags|=2048,Eo(9,lh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=gi(),i=Qt.identifierPrefix;if(Ft){var o=bi,l=Ci;o=(l&~(1<<32-ot(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=So++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=w0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},b0={readContext:jn,useCallback:xh,useContext:jn,useEffect:Fc,useImperativeHandle:_h,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Ic,useRef:hh,useState:function(){return Ic(Mo)},useDebugValue:Oc,useDeferredValue:function(t){var i=Xn();return Sh(i,$t.memoizedState,t)},useTransition:function(){var t=Ic(Mo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1},P0={readContext:jn,useCallback:xh,useContext:jn,useEffect:Fc,useImperativeHandle:_h,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Uc,useRef:hh,useState:function(){return Uc(Mo)},useDebugValue:Oc,useDeferredValue:function(t){var i=Xn();return $t===null?i.memoizedState=t:Sh(i,$t.memoizedState,t)},useTransition:function(){var t=Uc(Mo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function kc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Da={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),f=dr(t),h=Ni(l,f);h.payload=i,o!=null&&(h.callback=o),i=ar(t,h,f),i!==null&&(si(i,t,f,l),Ta(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),f=dr(t),h=Ni(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=ar(t,h,f),i!==null&&(si(i,t,f,l),Ta(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=dr(t),f=Ni(o,l);f.tag=2,i!=null&&(f.callback=i),i=ar(t,f,l),i!==null&&(si(i,t,l,o),Ta(i,t,l))}};function Ah(t,i,o,l,f,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!lo(o,l)||!lo(f,h):!0}function Rh(t,i,o){var l=!1,f=rr,h=i.contextType;return typeof h=="object"&&h!==null?h=jn(h):(f=Mn(i)?Cr:an.current,l=i.contextTypes,h=(l=l!=null)?ds(t,f):rr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ch(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Da.enqueueReplaceState(i,i.state,null)}function zc(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Tc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=jn(h):(h=Mn(i)?Cr:an.current,f.context=ds(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(kc(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Da.enqueueReplaceState(f,f.state,null),Aa(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Bc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function bh(t,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ba||(Ba=!0,nu=l),Vc(t,i)},o}function Ph(t,i,o){o=Ni(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Vc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Vc(t,i),typeof l!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Nh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new N0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=j0.bind(null,t,i,o),i.then(t,t))}function Lh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Dh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,ar(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var L0=b.ReactCurrentOwner,En=!1;function gn(t,i,o,l){i.child=t===null?Jf(i,null,o,l):ms(i,t.child,o,l)}function Ih(t,i,o,l,f){o=o.render;var h=i.ref;return vs(i,f),l=Lc(t,i,o,l,h,f),o=Dc(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(Ft&&o&&mc(i),i.flags|=1,gn(t,i,l,f),i.child)}function Uh(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!cu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Fh(t,i,h,l,f)):(t=Xa(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:lo,o(M,l)&&t.ref===i.ref)return Li(t,i,f)}return i.flags|=1,t=hr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Fh(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(lo(h,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,Li(t,i,f)}return Hc(t,i,o,l,f)}function Oh(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ss,Fn),Fn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ss,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(Ss,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(Ss,Fn),Fn|=l;return gn(t,i,f,o),i.child}function kh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Hc(t,i,o,l,f){var h=Mn(o)?Cr:an.current;return h=ds(i,h),vs(i,f),o=Lc(t,i,o,l,h,f),l=Dc(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(Ft&&l&&mc(i),i.flags|=1,gn(t,i,o,f),i.child)}function zh(t,i,o,l,f){if(Mn(o)){var h=!0;va(i)}else h=!1;if(vs(i,f),i.stateNode===null)Ua(t,i),Rh(i,o,l),zc(i,o,l,f),l=!0;else if(t===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var B=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=jn(ee):(ee=Mn(o)?Cr:an.current,ee=ds(i,ee));var _e=o.getDerivedStateFromProps,ye=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==l||B!==ee)&&Ch(i,M,l,ee),or=!1;var ge=i.memoizedState;M.state=ge,Aa(i,l,M,f),B=i.memoizedState,I!==l||ge!==B||Sn.current||or?(typeof _e=="function"&&(kc(i,o,_e,l),B=i.memoizedState),(I=or||Ah(i,o,I,l,ge,B,ee))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=ee,l=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,th(t,i),I=i.memoizedProps,ee=i.type===i.elementType?I:ni(i.type,I),M.props=ee,ye=i.pendingProps,ge=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=jn(B):(B=Mn(o)?Cr:an.current,B=ds(i,B));var Le=o.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==ye||ge!==B)&&Ch(i,M,l,B),or=!1,ge=i.memoizedState,M.state=ge,Aa(i,l,M,f);var ze=i.memoizedState;I!==ye||ge!==ze||Sn.current||or?(typeof Le=="function"&&(kc(i,o,Le,l),ze=i.memoizedState),(ee=or||Ah(i,o,ee,l,ge,ze,B)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=B,l=ee):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Gc(t,i,o,l,h,f)}function Gc(t,i,o,l,f,h){kh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return f&&Wf(i,o,!1),Li(t,i,h);l=i.stateNode,L0.current=i;var I=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ms(i,t.child,null,h),i.child=ms(i,null,I,h)):gn(t,i,I,h),i.memoizedState=l.state,f&&Wf(i,o,!0),i.child}function Bh(t){var i=t.stateNode;i.pendingContext?Hf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Hf(t,i.context,!1),Ac(t,i.containerInfo)}function Vh(t,i,o,l,f){return ps(),xc(f),i.flags|=256,gn(t,i,o,l),i.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hh(t,i,o){var l=i.pendingProps,f=Ot.current,h=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Lt(Ot,f&1),t===null)return _c(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=$a(M,l,0,null),t=kr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=jc(o),i.memoizedState=Wc,t):Xc(i,M));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return D0(t,i,M,l,I,f,o);if(h){h=l.fallback,M=i.mode,f=t.child,I=f.sibling;var B={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=hr(f,B),l.subtreeFlags=f.subtreeFlags&14680064),I!==null?h=hr(I,h):(h=kr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?jc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Wc,l}return h=t.child,t=h.sibling,l=hr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Xc(t,i){return i=$a({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ia(t,i,o,l){return l!==null&&xc(l),ms(i,t.child,null,o),t=Xc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function D0(t,i,o,l,f,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Bc(Error(n(422))),Ia(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=$a({mode:"visible",children:l.children},f,0,null),h=kr(h,f,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,M),i.child.memoizedState=jc(M),i.memoizedState=Wc,h);if((i.mode&1)===0)return Ia(t,i,M,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var I=l.dgst;return l=I,h=Error(n(419)),l=Bc(h,l,void 0),Ia(t,i,M,l)}if(I=(M&t.childLanes)!==0,En||I){if(l=Qt,l!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|M))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Pi(t,f),si(l,t,f,-1))}return lu(),l=Bc(Error(n(421))),Ia(t,i,M,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=X0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Un=nr(f.nextSibling),In=i,Ft=!0,ti=null,t!==null&&(Gn[Wn++]=Ci,Gn[Wn++]=bi,Gn[Wn++]=br,Ci=t.id,bi=t.overflow,br=i),i=Xc(i,l.children),i.flags|=4096,i)}function Gh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ec(t.return,i,o)}function $c(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function Wh(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(gn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,o,i);else if(t.tag===19)Gh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Ra(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),$c(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ra(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}$c(i,!0,o,null,h);break;case"together":$c(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ua(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=hr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=hr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function I0(t,i,o){switch(i.tag){case 3:Bh(i),ps();break;case 5:rh(i);break;case 1:Mn(i.type)&&va(i);break;case 4:Ac(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Lt(Ea,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Hh(t,i,o):(Lt(Ot,Ot.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Wh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Oh(t,i,o)}return Li(t,i,o)}var jh,qc,Xh,$h;jh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},qc=function(){},Xh=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Lr(mi.current);var h=null;switch(o){case"input":f=$(t,f),l=$(t,l),h=[];break;case"select":f=re({},f,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":f=R(t,f),l=R(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=pa)}dt(o,l);var M;o=null;for(ee in f)if(!l.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var I=f[ee];for(M in I)I.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var B=l[ee];if(I=f!=null?f[ee]:void 0,l.hasOwnProperty(ee)&&B!==I&&(B!=null||I!=null))if(ee==="style")if(I){for(M in I)!I.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&I[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(h||(h=[]),h.push(ee,o)),o=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(h=h||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&It("scroll",t),h||I===B||(h=[])):(h=h||[]).push(ee,B))}o&&(h=h||[]).push("style",o);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},$h=function(t,i,o,l){o!==l&&(i.flags|=4)};function wo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function U0(t,i,o){var l=i.pendingProps;switch(gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return Mn(i.type)&&ga(),cn(i),null;case 3:return l=i.stateNode,_s(),Ut(Sn),Ut(an),bc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(su(ti),ti=null))),qc(t,i),cn(i),null;case 5:Rc(i);var f=Lr(xo.current);if(o=i.type,t!==null&&i.stateNode!=null)Xh(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Lr(mi.current),Sa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[pi]=i,l[po]=h,t=(i.mode&1)!==0,o){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(f=0;f<uo.length;f++)It(uo[f],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":hn(l,h),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},It("invalid",l);break;case"textarea":Z(l,h),It("invalid",l)}dt(o,h),f=null;for(var M in h)if(h.hasOwnProperty(M)){var I=h[M];M==="children"?typeof I=="string"?l.textContent!==I&&(h.suppressHydrationWarning!==!0&&ha(l.textContent,I,t),f=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&ha(l.textContent,I,t),f=["children",""+I]):a.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&It("scroll",l)}switch(o){case"input":Ct(l),Ye(l,h,!0);break;case"textarea":Ct(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=pa)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[pi]=i,t[po]=l,jh(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(o,l),o){case"dialog":It("cancel",t),It("close",t),f=l;break;case"iframe":case"object":case"embed":It("load",t),f=l;break;case"video":case"audio":for(f=0;f<uo.length;f++)It(uo[f],t);f=l;break;case"source":It("error",t),f=l;break;case"img":case"image":case"link":It("error",t),It("load",t),f=l;break;case"details":It("toggle",t),f=l;break;case"input":hn(t,l),f=$(t,l),It("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=re({},l,{value:void 0}),It("invalid",t);break;case"textarea":Z(t,l),f=R(t,l),It("invalid",t);break;default:f=l}dt(o,f),I=f;for(h in I)if(I.hasOwnProperty(h)){var B=I[h];h==="style"?et(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ue(t,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ct(t,B):typeof B=="number"&&ct(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&It("scroll",t):B!=null&&L(t,h,B,M))}switch(o){case"input":Ct(t),Ye(t,l,!1);break;case"textarea":Ct(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?D(t,!!l.multiple,h,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=pa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)$h(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Lr(xo.current),Lr(mi.current),Sa(i)){if(l=i.stateNode,o=i.memoizedProps,l[pi]=i,(h=l.nodeValue!==o)&&(t=In,t!==null))switch(t.tag){case 3:ha(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return cn(i),null;case 13:if(Ut(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kf(),ps(),i.flags|=98560,h=!1;else if(h=Sa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[pi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else ti!==null&&(su(ti),ti=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?qt===0&&(qt=3):lu())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return _s(),qc(t,i),t===null&&fo(i.stateNode.containerInfo),cn(i),null;case 10:return Mc(i.type._context),cn(i),null;case 17:return Mn(i.type)&&ga(),cn(i),null;case 19:if(Ut(Ot),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)wo(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ra(t),M!==null){for(i.flags|=128,wo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>Ms&&(i.flags|=128,l=!0,wo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ra(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return cn(i),null}else 2*Me()-h.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,l=!0,wo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Ot.current,Lt(Ot,l?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return au(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function F0(t,i){switch(gc(i),i.tag){case 1:return Mn(i.type)&&ga(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Ut(Sn),Ut(an),bc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Rc(i),null;case 13:if(Ut(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ut(Ot),null;case 4:return _s(),null;case 10:return Mc(i.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Fa=!1,un=!1,O0=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ys(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){zt(t,i,l)}else o.current=null}function Yc(t,i,o){try{o()}catch(l){zt(t,i,l)}}var qh=!1;function k0(t,i){if(ac=na,t=Af(),Jl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,I=-1,B=-1,ee=0,_e=0,ye=t,ge=null;t:for(;;){for(var Le;ye!==o||f!==0&&ye.nodeType!==3||(I=M+f),ye!==h||l!==0&&ye.nodeType!==3||(B=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)ge=ye,ye=Le;for(;;){if(ye===t)break t;if(ge===o&&++ee===f&&(I=M),ge===h&&++_e===l&&(B=M),(Le=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Le}o=I===-1||B===-1?null:{start:I,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(lc={focusedElem:t,selectionRange:o},na=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Bt=ze.memoizedState,q=i.stateNode,G=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ni(i.type,Ve),Bt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Y=i.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){zt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=qh,qh=!1,ze}function To(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&Yc(i,o,h)}f=f.next}while(f!==l)}}function Oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Kc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Yh(t){var i=t.alternate;i!==null&&(t.alternate=null,Yh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[po],delete i[fc],delete i[y0],delete i[S0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kh(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=pa));else if(l!==4&&(t=t.child,t!==null))for(Zc(t,i,o),t=t.sibling;t!==null;)Zc(t,i,o),t=t.sibling}function Qc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,o),t=t.sibling;t!==null;)Qc(t,i,o),t=t.sibling}var tn=null,ii=!1;function lr(t,i,o){for(o=o.child;o!==null;)Qh(t,i,o),o=o.sibling}function Qh(t,i,o){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 5:un||ys(o,i);case 6:var l=tn,f=ii;tn=null,lr(t,i,o),tn=l,ii=f,tn!==null&&(ii?(t=tn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):tn.removeChild(o.stateNode));break;case 18:tn!==null&&(ii?(t=tn,o=o.stateNode,t.nodeType===8?dc(t.parentNode,o):t.nodeType===1&&dc(t,o),no(t)):dc(tn,o.stateNode));break;case 4:l=tn,f=ii,tn=o.stateNode.containerInfo,ii=!0,lr(t,i,o),tn=l,ii=f;break;case 0:case 11:case 14:case 15:if(!un&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Yc(o,i,M),f=f.next}while(f!==l)}lr(t,i,o);break;case 1:if(!un&&(ys(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(I){zt(o,i,I)}lr(t,i,o);break;case 21:lr(t,i,o);break;case 22:o.mode&1?(un=(l=un)||o.memoizedState!==null,lr(t,i,o),un=l):lr(t,i,o);break;default:lr(t,i,o)}}function Jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new O0),i.forEach(function(l){var f=$0.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ri(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:tn=I.stateNode,ii=!1;break e;case 3:tn=I.stateNode.containerInfo,ii=!0;break e;case 4:tn=I.stateNode.containerInfo,ii=!0;break e}I=I.return}if(tn===null)throw Error(n(160));Qh(h,M,f),tn=null,ii=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ee){zt(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ep(i,t),i=i.sibling}function ep(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),vi(t),l&4){try{To(3,t,t.return),Oa(3,t)}catch(Ve){zt(t,t.return,Ve)}try{To(5,t,t.return)}catch(Ve){zt(t,t.return,Ve)}}break;case 1:ri(i,t),vi(t),l&512&&o!==null&&ys(o,o.return);break;case 5:if(ri(i,t),vi(t),l&512&&o!==null&&ys(o,o.return),t.flags&32){var f=t.stateNode;try{ct(f,"")}catch(Ve){zt(t,t.return,Ve)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,I=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&ht(f,h),rt(I,M);var ee=rt(I,h);for(M=0;M<B.length;M+=2){var _e=B[M],ye=B[M+1];_e==="style"?et(f,ye):_e==="dangerouslySetInnerHTML"?Ue(f,ye):_e==="children"?ct(f,ye):L(f,_e,ye,ee)}switch(I){case"input":ut(f,h);break;case"textarea":pe(f,h);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?D(f,!!h.multiple,Le,!1):ge!==!!h.multiple&&(h.defaultValue!=null?D(f,!!h.multiple,h.defaultValue,!0):D(f,!!h.multiple,h.multiple?[]:"",!1))}f[po]=h}catch(Ve){zt(t,t.return,Ve)}}break;case 6:if(ri(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(ri(i,t),vi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(Ve){zt(t,t.return,Ve)}break;case 4:ri(i,t),vi(t);break;case 13:ri(i,t),vi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(tu=Me())),l&4&&Jh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(un=(ee=un)||_e,ri(i,t),un=ee):ri(i,t),vi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!_e&&(t.mode&1)!==0)for(Fe=t,_e=t.child;_e!==null;){for(ye=Fe=_e;Fe!==null;){switch(ge=Fe,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:To(4,ge,ge.return);break;case 1:ys(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){zt(l,o,Ve)}}break;case 5:ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){ip(ye);continue}}Le!==null?(Le.return=ge,Fe=Le):ip(ye)}_e=_e.sibling}e:for(_e=null,ye=t;;){if(ye.tag===5){if(_e===null){_e=ye;try{f=ye.stateNode,ee?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=ye.stateNode,B=ye.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Je("display",M))}catch(Ve){zt(t,t.return,Ve)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(Ve){zt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ri(i,t),vi(t),l&4&&Jh(t);break;case 21:break;default:ri(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Kh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ct(f,""),l.flags&=-33);var h=Zh(t);Qc(t,h,f);break;case 3:case 4:var M=l.stateNode.containerInfo,I=Zh(t);Zc(t,I,M);break;default:throw Error(n(161))}}catch(B){zt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function z0(t,i,o){Fe=t,tp(t)}function tp(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var f=Fe,h=f.child;if(f.tag===22&&l){var M=f.memoizedState!==null||Fa;if(!M){var I=f.alternate,B=I!==null&&I.memoizedState!==null||un;I=Fa;var ee=un;if(Fa=M,(un=B)&&!ee)for(Fe=f;Fe!==null;)M=Fe,B=M.child,M.tag===22&&M.memoizedState!==null?rp(f):B!==null?(B.return=M,Fe=B):rp(f);for(;h!==null;)Fe=h,tp(h),h=h.sibling;Fe=f,Fa=I,un=ee}np(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Fe=h):np(t)}}function np(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Oa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ni(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ih(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ih(i,M,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&no(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Kc(i)}catch(ge){zt(i,i.return,ge)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function ip(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function rp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Oa(4,i)}catch(B){zt(i,o,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){zt(i,f,B)}}var h=i.return;try{Kc(i)}catch(B){zt(i,h,B)}break;case 5:var M=i.return;try{Kc(i)}catch(B){zt(i,M,B)}}}catch(B){zt(i,i.return,B)}if(i===t){Fe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Fe=I;break}Fe=i.return}}var B0=Math.ceil,ka=b.ReactCurrentDispatcher,Jc=b.ReactCurrentOwner,$n=b.ReactCurrentBatchConfig,_t=0,Qt=null,Gt=null,nn=0,Fn=0,Ss=ir(0),qt=0,Ao=null,Ir=0,za=0,eu=0,Ro=null,wn=null,tu=0,Ms=1/0,Di=null,Ba=!1,nu=null,cr=null,Va=!1,ur=null,Ha=0,Co=0,iu=null,Ga=-1,Wa=0;function vn(){return(_t&6)!==0?Me():Ga!==-1?Ga:Ga=Me()}function dr(t){return(t.mode&1)===0?1:(_t&2)!==0&&nn!==0?nn&-nn:E0.transition!==null?(Wa===0&&(Wa=mn()),Wa):(t=At,t!==0||(t=window.event,t=t===void 0?16:of(t.type)),t)}function si(t,i,o,l){if(50<Co)throw Co=0,iu=null,Error(n(185));yn(t,o,l),((_t&2)===0||t!==Qt)&&(t===Qt&&((_t&2)===0&&(za|=o),qt===4&&fr(t,nn)),Tn(t,l),o===1&&_t===0&&(i.mode&1)===0&&(Ms=Me()+500,_a&&sr()))}function Tn(t,i){var o=t.callbackNode;Vn(t,i);var l=hi(t,t===Qt?nn:0);if(l===0)o!==null&&ne(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&ne(o),i===1)t.tag===0?M0(op.bind(null,t)):jf(op.bind(null,t)),_0(function(){(_t&6)===0&&sr()}),o=null;else{switch(Zd(l)){case 1:o=Be;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=gt;break;default:o=it}o=pp(o,sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function sp(t,i){if(Ga=-1,Wa=0,(_t&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Es()&&t.callbackNode!==o)return null;var l=hi(t,t===Qt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ja(t,l);else{i=l;var f=_t;_t|=2;var h=lp();(Qt!==t||nn!==i)&&(Di=null,Ms=Me()+500,Fr(t,i));do try{G0();break}catch(I){ap(t,I)}while(!0);Sc(),ka.current=h,_t=f,Gt!==null?i=0:(Qt=null,nn=0,i=qt)}if(i!==0){if(i===2&&(f=Ti(t),f!==0&&(l=f,i=ru(t,f))),i===1)throw o=Ao,Fr(t,0),fr(t,l),Tn(t,Me()),o;if(i===6)fr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!V0(f)&&(i=ja(t,l),i===2&&(h=Ti(t),h!==0&&(l=h,i=ru(t,h))),i===1))throw o=Ao,Fr(t,0),fr(t,l),Tn(t,Me()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Or(t,wn,Di);break;case 3:if(fr(t,l),(l&130023424)===l&&(i=tu+500-Me(),10<i)){if(hi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=uc(Or.bind(null,t,wn,Di),i);break}Or(t,wn,Di);break;case 4:if(fr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var M=31-ot(l);h=1<<M,M=i[M],M>f&&(f=M),l&=~h}if(l=f,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*B0(l/1960))-l,10<l){t.timeoutHandle=uc(Or.bind(null,t,wn,Di),l);break}Or(t,wn,Di);break;case 5:Or(t,wn,Di);break;default:throw Error(n(329))}}}return Tn(t,Me()),t.callbackNode===o?sp.bind(null,t):null}function ru(t,i){var o=Ro;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=ja(t,i),t!==2&&(i=wn,wn=o,i!==null&&su(i)),t}function su(t){wn===null?wn=t:wn.push.apply(wn,t)}function V0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!ei(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~eu,i&=~za,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ot(i),l=1<<o;t[o]=-1,i&=~l}}function op(t){if((_t&6)!==0)throw Error(n(327));Es();var i=hi(t,0);if((i&1)===0)return Tn(t,Me()),null;var o=ja(t,i);if(t.tag!==0&&o===2){var l=Ti(t);l!==0&&(i=l,o=ru(t,l))}if(o===1)throw o=Ao,Fr(t,0),fr(t,i),Tn(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,wn,Di),Tn(t,Me()),null}function ou(t,i){var o=_t;_t|=1;try{return t(i)}finally{_t=o,_t===0&&(Ms=Me()+500,_a&&sr())}}function Ur(t){ur!==null&&ur.tag===0&&(_t&6)===0&&Es();var i=_t;_t|=1;var o=$n.transition,l=At;try{if($n.transition=null,At=1,t)return t()}finally{At=l,$n.transition=o,_t=i,(_t&6)===0&&sr()}}function au(){Fn=Ss.current,Ut(Ss)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,v0(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(gc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ga();break;case 3:_s(),Ut(Sn),Ut(an),bc();break;case 5:Rc(l);break;case 4:_s();break;case 13:Ut(Ot);break;case 19:Ut(Ot);break;case 10:Mc(l.type._context);break;case 22:case 23:au()}o=o.return}if(Qt=t,Gt=t=hr(t.current,null),nn=Fn=i,qt=0,Ao=null,eu=za=Ir=0,wn=Ro=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=f,l.next=M}o.pending=l}Nr=null}return t}function ap(t,i){do{var o=Gt;try{if(Sc(),Ca.current=La,ba){for(var l=kt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}ba=!1}if(Dr=0,Zt=$t=kt=null,yo=!1,So=0,Jc.current=null,o===null||o.return===null){qt=1,Ao=i,Gt=null;break}e:{var h=t,M=o.return,I=o,B=i;if(i=nn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,_e=I,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Lh(M);if(Le!==null){Le.flags&=-257,Dh(Le,M,I,h,i),Le.mode&1&&Nh(h,ee,i),i=Le,B=ee;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(B),i.updateQueue=Ve}else ze.add(B);break e}else{if((i&1)===0){Nh(h,ee,i),lu();break e}B=Error(n(426))}}else if(Ft&&I.mode&1){var Bt=Lh(M);if(Bt!==null){(Bt.flags&65536)===0&&(Bt.flags|=256),Dh(Bt,M,I,h,i),xc(xs(B,I));break e}}h=B=xs(B,I),qt!==4&&(qt=2),Ro===null?Ro=[h]:Ro.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=bh(h,B,i);nh(h,q);break e;case 1:I=B;var G=h.type,Y=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(cr===null||!cr.has(Y)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Ph(h,I,i);nh(h,we);break e}}h=h.return}while(h!==null)}up(o)}catch(je){i=je,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function lp(){var t=ka.current;return ka.current=La,t===null?La:t}function lu(){(qt===0||qt===3||qt===2)&&(qt=4),Qt===null||(Ir&268435455)===0&&(za&268435455)===0||fr(Qt,nn)}function ja(t,i){var o=_t;_t|=2;var l=lp();(Qt!==t||nn!==i)&&(Di=null,Fr(t,i));do try{H0();break}catch(f){ap(t,f)}while(!0);if(Sc(),_t=o,ka.current=l,Gt!==null)throw Error(n(261));return Qt=null,nn=0,qt}function H0(){for(;Gt!==null;)cp(Gt)}function G0(){for(;Gt!==null&&!X();)cp(Gt)}function cp(t){var i=hp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?up(t):Gt=i,Jc.current=null}function up(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=U0(o,i,Fn),o!==null){Gt=o;return}}else{if(o=F0(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);qt===0&&(qt=5)}function Or(t,i,o){var l=At,f=$n.transition;try{$n.transition=null,At=1,W0(t,i,o,l)}finally{$n.transition=f,At=l}return null}function W0(t,i,o,l){do Es();while(ur!==null);if((_t&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Jo(t,h),t===Qt&&(Gt=Qt=null,nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Va||(Va=!0,pp(it,function(){return Es(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=$n.transition,$n.transition=null;var M=At;At=1;var I=_t;_t|=4,Jc.current=null,k0(t,o),ep(o,t),u0(lc),na=!!ac,lc=ac=null,t.current=o,z0(o),Te(),_t=I,At=M,$n.transition=h}else t.current=o;if(Va&&(Va=!1,ur=t,Ha=f),h=t.pendingLanes,h===0&&(cr=null),sn(o.stateNode),Tn(t,Me()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ba)throw Ba=!1,t=nu,nu=null,t;return(Ha&1)!==0&&t.tag!==0&&Es(),h=t.pendingLanes,(h&1)!==0?t===iu?Co++:(Co=0,iu=t):Co=0,sr(),null}function Es(){if(ur!==null){var t=Zd(Ha),i=$n.transition,o=At;try{if($n.transition=null,At=16>t?16:t,ur===null)var l=!1;else{if(t=ur,ur=null,Ha=0,(_t&6)!==0)throw Error(n(331));var f=_t;for(_t|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if((Fe.flags&16)!==0){var I=h.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ee=I[B];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:To(8,_e,h)}var ye=_e.child;if(ye!==null)ye.return=_e,Fe=ye;else for(;Fe!==null;){_e=Fe;var ge=_e.sibling,Le=_e.return;if(Yh(_e),_e===ee){Fe=null;break}if(ge!==null){ge.return=Le,Fe=ge;break}Fe=Le}}}var ze=h.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Bt=Ve.sibling;Ve.sibling=null,Ve=Bt}while(Ve!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:To(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Fe=q;break e}Fe=h.return}}var G=t.current;for(Fe=G;Fe!==null;){M=Fe;var Y=M.child;if((M.subtreeFlags&2064)!==0&&Y!==null)Y.return=M,Fe=Y;else e:for(M=G;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Oa(9,I)}}catch(je){zt(I,I.return,je)}if(I===M){Fe=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Fe=we;break e}Fe=I.return}}if(_t=f,sr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Et,t)}catch{}l=!0}return l}finally{At=o,$n.transition=i}}return!1}function dp(t,i,o){i=xs(o,i),i=bh(t,i,1),t=ar(t,i,1),i=vn(),t!==null&&(yn(t,1,i),Tn(t,i))}function zt(t,i,o){if(t.tag===3)dp(t,t,o);else for(;i!==null;){if(i.tag===3){dp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cr===null||!cr.has(l))){t=xs(o,t),t=Ph(i,t,1),i=ar(i,t,1),t=vn(),i!==null&&(yn(i,1,t),Tn(i,t));break}}i=i.return}}function j0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(nn&o)===o&&(qt===4||qt===3&&(nn&130023424)===nn&&500>Me()-tu?Fr(t,0):eu|=o),Tn(t,i)}function fp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Jn,Jn<<=1,(Jn&130023424)===0&&(Jn=4194304)));var o=vn();t=Pi(t,i),t!==null&&(yn(t,i,o),Tn(t,o))}function X0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),fp(t,o)}function $0(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),fp(t,o)}var hp;hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Sn.current)En=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return En=!1,I0(t,i,o);En=(t.flags&131072)!==0}else En=!1,Ft&&(i.flags&1048576)!==0&&Xf(i,ya,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ua(t,i),t=i.pendingProps;var f=ds(i,an.current);vs(i,o),f=Lc(null,i,l,t,f,o);var h=Dc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Mn(l)?(h=!0,va(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Tc(i),f.updater=Da,i.stateNode=f,f._reactInternals=i,zc(i,l,t,o),i=Gc(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&mc(i),gn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ua(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=Y0(l),t=ni(l,t),f){case 0:i=Hc(null,i,l,t,o);break e;case 1:i=zh(null,i,l,t,o);break e;case 11:i=Ih(null,i,l,t,o);break e;case 14:i=Uh(null,i,l,ni(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ni(l,f),Hc(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ni(l,f),zh(t,i,l,f,o);case 3:e:{if(Bh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,th(t,i),Aa(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=xs(Error(n(423)),i),i=Vh(t,i,l,o,f);break e}else if(l!==f){f=xs(Error(n(424)),i),i=Vh(t,i,l,o,f);break e}else for(Un=nr(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,ti=null,o=Jf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),l===f){i=Li(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return rh(i),t===null&&_c(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,M=f.children,cc(l,f)?M=null:h!==null&&cc(l,h)&&(i.flags|=32),kh(t,i),gn(t,i,M,o),i.child;case 6:return t===null&&_c(i),null;case 13:return Hh(t,i,o);case 4:return Ac(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ni(l,f),Ih(t,i,l,f,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,M=f.value,Lt(Ea,l._currentValue),l._currentValue=M,h!==null)if(ei(h.value,M)){if(h.children===f.children&&!Sn.current){i=Li(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var I=h.dependencies;if(I!==null){M=h.child;for(var B=I.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Ni(-1,o&-o),B.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ee.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),Ec(h.return,o,i),I.lanes|=o;break}B=B.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,I=M.alternate,I!==null&&(I.lanes|=o),Ec(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}gn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,vs(i,o),f=jn(f),l=l(f),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,f=ni(l,i.pendingProps),f=ni(l.type,f),Uh(t,i,l,f,o);case 15:return Fh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ni(l,f),Ua(t,i),i.tag=1,Mn(l)?(t=!0,va(i)):t=!1,vs(i,o),Rh(i,l,f),zc(i,l,f,o),Gc(null,i,l,!0,t,o);case 19:return Wh(t,i,o);case 22:return Oh(t,i,o)}throw Error(n(156,i.tag))};function pp(t,i){return te(t,i)}function q0(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,o,l){return new q0(t,i,o,l)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Y0(t){if(typeof t=="function")return cu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===me)return 14}return 2}function hr(t,i){var o=t.alternate;return o===null?(o=qn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Xa(t,i,o,l,f,h){var M=2;if(l=t,typeof t=="function")cu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return kr(o.children,f,h,i);case H:M=8,f|=8;break;case P:return t=qn(12,o,i,f|2),t.elementType=P,t.lanes=h,t;case J:return t=qn(13,o,i,f),t.elementType=J,t.lanes=h,t;case le:return t=qn(19,o,i,f),t.elementType=le,t.lanes=h,t;case de:return $a(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case z:M=9;break e;case se:M=11;break e;case me:M=14;break e;case ae:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(M,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function kr(t,i,o,l){return t=qn(7,t,l,i),t.lanes=o,t}function $a(t,i,o,l){return t=qn(22,t,l,i),t.elementType=de,t.lanes=o,t.stateNode={isHidden:!1},t}function uu(t,i,o){return t=qn(6,t,null,i),t.lanes=o,t}function du(t,i,o){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function K0(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function fu(t,i,o,l,f,h,M,I,B){return t=new K0(t,i,o,I,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(h),t}function Z0(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function mp(t){if(!t)return rr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Mn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Mn(o))return Gf(t,o,i)}return i}function gp(t,i,o,l,f,h,M,I,B){return t=fu(o,l,!0,t,f,h,M,I,B),t.context=mp(null),o=t.current,l=vn(),f=dr(o),h=Ni(l,f),h.callback=i??null,ar(o,h,f),t.current.lanes=f,yn(t,f,l),Tn(t,l),t}function qa(t,i,o,l){var f=i.current,h=vn(),M=dr(f);return o=mp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ar(f,i,M),t!==null&&(si(t,f,M,h),Ta(t,f,M)),M}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function hu(t,i){vp(t,i),(t=t.alternate)&&vp(t,i)}function Q0(){return null}var _p=typeof reportError=="function"?reportError:function(t){console.error(t)};function pu(t){this._internalRoot=t}Ka.prototype.render=pu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qa(t,i,null,null)},Ka.prototype.unmount=pu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){qa(null,t,null,null)}),i[Ai]=null}};function Ka(t){this._internalRoot=t}Ka.prototype.unstable_scheduleHydration=function(t){if(t){var i=ef();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,t),o===0&&rf(t)}};function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function J0(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var ee=Ya(M);h.call(ee)}}var M=gp(i,l,t,0,null,!1,!1,"",xp);return t._reactRootContainer=M,t[Ai]=M.current,fo(t.nodeType===8?t.parentNode:t),Ur(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var I=l;l=function(){var ee=Ya(B);I.call(ee)}}var B=fu(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=B,t[Ai]=B.current,fo(t.nodeType===8?t.parentNode:t),Ur(function(){qa(i,B,o,l)}),B}function Qa(t,i,o,l,f){var h=o._reactRootContainer;if(h){var M=h;if(typeof f=="function"){var I=f;f=function(){var B=Ya(M);I.call(B)}}qa(i,M,t,f)}else M=J0(o,i,t,f,l);return Ya(M)}Qd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Xt(i.pendingLanes);o!==0&&(zl(i,o|1),Tn(i,Me()),(_t&6)===0&&(Ms=Me()+500,sr()))}break;case 13:Ur(function(){var l=Pi(t,1);if(l!==null){var f=vn();si(l,t,1,f)}}),hu(t,1)}},Bl=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var o=vn();si(i,t,134217728,o)}hu(t,134217728)}},Jd=function(t){if(t.tag===13){var i=dr(t),o=Pi(t,i);if(o!==null){var l=vn();si(o,t,i,l)}hu(t,i)}},ef=function(){return At},tf=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},Ce=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=ma(l);if(!f)throw Error(n(90));pt(l),ut(l,f)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&D(t,!!o.multiple,i,!1)}},Dt=ou,jt=Ur;var ev={usingClientEntryPoint:!1,Events:[mo,cs,ma,Pe,st,ou]},bo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Et=Ja.inject(tv),mt=Ja}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev,An.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(i))throw Error(n(200));return Z0(t,i,null,o)},An.createRoot=function(t,i){if(!mu(t))throw Error(n(299));var o=!1,l="",f=_p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=fu(t,1,!1,null,null,o,!1,l,f),t[Ai]=i.current,fo(t.nodeType===8?t.parentNode:t),new pu(i)},An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=N(i),t=t===null?null:t.stateNode,t},An.flushSync=function(t){return Ur(t)},An.hydrate=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!0,o)},An.hydrateRoot=function(t,i,o){if(!mu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",M=_p;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=gp(i,null,t,1,o??null,f,!1,h,M),t[Ai]=i.current,fo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Ka(i)},An.render=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!1,o)},An.unmountComponentAtNode=function(t){if(!Za(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){Qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},An.unstable_batchedUpdates=ou,An.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Za(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qa(t,i,o,!1,l)},An.version="18.3.1-next-f1338f8080-20240426",An}var Rp;function dv(){if(Rp)return _u.exports;Rp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_u.exports=uv(),_u.exports}var Cp;function fv(){if(Cp)return el;Cp=1;var s=dv();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var hv=fv();const pv="modulepreload",mv=function(s,e){return new URL(s,e).href},bp={},gv=function(e,n,r){let a=Promise.resolve();if(n&&n.length>0){let d=function(_){return Promise.all(_.map(x=>Promise.resolve(x).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const u=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),m=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));a=d(n.map(_=>{if(_=mv(_,r),_ in bp)return;bp[_]=!0;const x=_.endsWith(".css"),g=x?'[rel="stylesheet"]':"";if(!!r)for(let T=u.length-1;T>=0;T--){const y=u[T];if(y.href===_&&(!x||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${g}`))return;const E=document.createElement("link");if(E.rel=x?"stylesheet":pv,x||(E.as="script"),E.crossOrigin="",E.href=_,m&&E.setAttribute("nonce",m),document.head.appendChild(E),x)return new Promise((T,y)=>{E.addEventListener("load",T),E.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=d,window.dispatchEvent(u),!u.defaultPrevented)throw d}return a.then(d=>{for(const u of d||[])u.status==="rejected"&&c(u.reason);return e().catch(c)})},km={reference_date:"Novembro/2026",selic_pct:13.75,ipca_pct:5.22,usd_brl:5.5,dbgg_gdp_pct:82.4,ibov_points:129480,ibov_delta_pct:.84},Vo=[{ticker:"ITUB4",name:"Itaú Unibanco",type:"ACAO",sector:"Bancos",group:"SELIC",price:36.4,target:44.5,upside:22.3,dy:7.8,pl:8.4,roe:22.4,beta:.82,volatility:16.5,score:96,status:"Top Core",pay_months:"Mensal + JCP",spark:[31.2,32.1,33.4,34,35.1,36.4],thesis:"Líder de rentabilidade na América Latina com ROE de 22,4%, beneficiado pela Selic elevada."},{ticker:"BBSE3",name:"BB Seguridade",type:"ACAO",sector:"Seguridade",group:"SELIC",price:37.1,target:43.8,upside:18.1,dy:9.6,pl:9.1,roe:74,beta:.58,volatility:13.2,score:95,status:"Renda",pay_months:"Fev / Ago",spark:[32.8,33.9,34.5,35.2,36.1,37.1],thesis:"Caixa bilionário aplicado ao CDI e zero dívida; mantém Dividend Yield próximo a 10%."},{ticker:"SBSP3",name:"Sabesp",type:"ACAO",sector:"Saneamento",group:"IPCA",price:94.2,target:126,upside:33.8,dy:3.4,pl:11.8,roe:17.2,beta:.74,volatility:18,score:95,status:"Top Core",pay_months:"Mai / Dez",spark:[78.5,82,85.4,88.9,91.5,94.2],thesis:"Pós-privatização com ganho de eficiência operacional e contratos atrelados à inflação."},{ticker:"WEGE3",name:"WEG S.A.",type:"ACAO",sector:"Indústria Global",group:"DOLLAR",price:52.9,target:66.5,upside:25.7,dy:1.8,pl:31,roe:34.2,beta:.79,volatility:21.4,score:96,status:"Hedge USD",pay_months:"Mar / Ago",spark:[43,45.2,47.9,49.5,51,52.9],thesis:"Mais de 55% da receita em moeda forte exportando transformadores globais e sistemas industriais."},{ticker:"PRIO3",name:"PRIO",type:"ACAO",sector:"Petróleo",group:"DOLLAR",price:44.6,target:61,upside:36.8,dy:2.2,pl:6.8,roe:28.5,beta:1.08,volatility:26.2,score:93,status:"Upside USD",pay_months:"Eventual",spark:[38.2,39.6,41,42.1,43.4,44.6],thesis:"Lifting cost abaixo de US$ 7/barril e geração de caixa diretamente em dólar."},{ticker:"EGIE3",name:"Engie Brasil",type:"ACAO",sector:"Energia Elétrica",group:"IPCA",price:43.8,target:52.2,upside:19.2,dy:7.4,pl:9.9,roe:23.6,beta:.52,volatility:12.8,score:92,status:"Defensiva",pay_months:"Mai / Nov",spark:[39.4,40.1,41,41.8,42.9,43.8],thesis:"Contratos de transmissão e geração reajustados pelo IPCA com forte previsibilidade de proventos."},{ticker:"KNCR11",name:"Kinea Rendimentos",type:"FII",sector:"FII Papel CDI",group:"FII",price:104.5,target:108,upside:3.3,dy:13.4,pl:1.01,roe:13.4,beta:.18,volatility:6.2,score:95,status:"Isento IR",pay_months:"Mensal (Dia 13)",spark:[101.2,102,102.6,103.3,103.9,104.5],thesis:"Carteira high-grade indexada ao CDI entregando renda mensal líquida isenta de IR para pessoa física."},{ticker:"HGLG11",name:"Pátria Logística",type:"FII",sector:"FII Tijolo",group:"FII",price:152,target:174,upside:14.5,dy:8.9,pl:.93,roe:8.9,beta:.31,volatility:9.4,score:94,status:"Desconto",pay_months:"Mensal (Dia 14)",spark:[144,145.6,147.2,149,150.5,152],thesis:"Galpões logísticos triple-A negociando com 7% de desconto patrimonial e aluguéis corrigidos pelo IPCA."},{ticker:"BPAC11",name:"BTG Pactual",type:"ACAO",sector:"Banco de Investimentos",group:"SELIC",price:38.2,target:47.5,upside:24.3,dy:3.2,pl:10.4,roe:23.1,beta:1.04,volatility:22,score:92,status:"Crescimento",pay_months:"Fev / Ago",spark:[32,33.4,34.9,36.1,37,38.2],thesis:"Expansão consistente em wealth management, crédito corporativo e tesouraria."},{ticker:"MGLU3_AVOID",name:"Varejo Alavancado",type:"ACAO",sector:"Varejo Discricionário",group:"AVOID",price:9.4,target:7.2,upside:-23.4,dy:0,pl:0,roe:-4.5,beta:1.65,volatility:44,score:28,status:"Evitado",pay_months:"Sem dividendos",spark:[13.2,12.1,11.4,10.6,9.9,9.4],thesis:"Margens comprimidas pelo custo da dívida e forte pressão competitiva no varejo."}],zm=[{id:"ion_itau",name:"Íon Itaú",short_code:"IT",subtitle:"Banco Itaú Unibanco",fee_stock:"R$ 0,00",fee_fii:"R$ 0,00",zero_fee:!0,cdb_rate:"100% CDI",ease_score:"9.7/10",verdict:"Melhor combinação de solidez bancária secular com corretagem zero real em Ações e FIIs."},{id:"inter",name:"Inter Invest",short_code:"IN",subtitle:"Banco Inter",fee_stock:"R$ 0,00",fee_fii:"R$ 0,00",zero_fee:!0,cdb_rate:"102% CDI",ease_score:"9.5/10",verdict:"Interface fluida para iniciantes, taxa zero na B3 e conta global integrada para dólar."},{id:"c6",name:"C6 Invest",short_code:"C6",subtitle:"C6 Bank",fee_stock:"R$ 0,00",fee_fii:"R$ 0,00",zero_fee:!0,cdb_rate:"102% CDI",ease_score:"9.3/10",verdict:"Home broker simplificado sem corretagem na B3 e CDBs acessíveis de liquidez diária."},{id:"nubank",name:"Nubank / NuInvest",short_code:"NU",subtitle:"Nu Holdings",fee_stock:"R$ 0,00",fee_fii:"R$ 0,00",zero_fee:!0,cdb_rate:"100% CDI",ease_score:"9.6/10",verdict:"Experiência direta no app para primeiros aportes em FIIs e Tesouro Selic sem custos."},{id:"btg",name:"BTG Pactual",short_code:"BP",subtitle:"Banco BTG Pactual",fee_stock:"R$ 4,50*",fee_fii:"R$ 0,00",zero_fee:!1,cdb_rate:"104% CDI",ease_score:"9.1/10",verdict:"Plataforma institucional completa; FIIs são isentos e ações ficam gratuitas em faixas maiores."},{id:"xp",name:"XP Investimentos",short_code:"XP",subtitle:"XP Inc.",fee_stock:"R$ 4,90",fee_fii:"R$ 0,00",zero_fee:!1,cdb_rate:"101% CDI",ease_score:"8.6/10",verdict:"Prateleira ampla de renda fixa, mas exige atenção à taxa de R$ 4,90/ordem em ações."}],rn="/api",Vd="larius_architect_token";let Si=null;function Ln(s){const e=s.headers.get("content-type")||"";return s.ok&&e.includes("application/json")}function Bm(){return window.sessionStorage.getItem(Vd)}function vv(){window.sessionStorage.removeItem(Vd)}function Jr(){const s=Bm();return s?{Authorization:`Bearer ${s}`}:{}}async function Pp(){try{const s=new AbortController,e=window.setTimeout(()=>s.abort(),700),n=await fetch(`${rn}/health`,{signal:s.signal});if(window.clearTimeout(e),Ln(n)&&(await n.json()).status==="online")return Si=!0,!0}catch{}return Si=!1,!1}async function Np(){if(Si===!0)try{const s=await fetch(`${rn}/market/telemetry`);if(Ln(s))return await s.json()}catch{}return km}async function _v(){if(Si===!0)try{const s=await fetch(`${rn}/assets`);if(Ln(s))return await s.json()}catch{}return Vo}async function xv(){if(Si===!0)try{const s=await fetch(`${rn}/brokers`);if(Ln(s))return await s.json()}catch{}return zm}async function yv(s,e){if(Si===!0)try{const n=await fetch(`${rn}/allocate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount_brl:s,risk_profile:e})});if(Ln(n))return await n.json()}catch{}return Vm(s,e)}async function Sv(s){if(Si===!0)try{const e=await fetch(`${rn}/simulate/compound`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({initial_capital:s.initialCapital,monthly_contribution:s.monthlyContribution,years:s.years,expected_annual_rate_pct:s.expectedRatePct,reinvest_dividends:s.reinvest})});if(Ln(e))return await e.json()}catch{}return Hm(s)}async function Mv(s,e,n,r=5e4){if(Si===!0)try{const a=await fetch(`${rn}/advisor/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:s,risk_profile:e,experience_level:n,portfolio_amount_brl:r})});if(Ln(a))return await a.json()}catch{}return wv(s,e,n)}async function Ev(s){if(Si===!1)return null;try{const e=await fetch(`${rn}/lariustts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s})}),n=e.headers.get("content-type")||"";if(e.ok&&n.startsWith("audio/"))return await e.blob()}catch{}return null}async function i1(s){try{const e=await fetch(`${rn}/admin/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({private_key:s})});if(!(e.headers.get("content-type")||"").includes("application/json"))return{ok:!1,error:"Servidor FastAPI offline. Inicie o back-end Python com .env para autenticar /admin."};const r=await e.json();return e.ok&&r.authenticated&&r.token?(window.sessionStorage.setItem(Vd,r.token),Si=!0,{ok:!0}):{ok:!1,error:r.detail||"Chave privada inválida."}}catch{return{ok:!1,error:"Não foi possível conectar ao FastAPI (/api/admin/login). Verifique se o back-end está em execução."}}}async function r1(){vv();try{await fetch(`${rn}/admin/logout`,{method:"POST",credentials:"include"})}catch{}}async function s1(){if(!Bm())return!1;try{const e=await fetch(`${rn}/admin/session`,{credentials:"include",headers:Jr()});return Ln(e)}catch{return!1}}async function o1(){const s=await fetch(`${rn}/admin/voice-config`,{credentials:"include",headers:Jr()});return Ln(s)?await s.json():null}async function a1(s){const e=await fetch(`${rn}/admin/voice-config`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json",...Jr()},body:JSON.stringify(s)});return Ln(e)?await e.json():null}async function l1(){const s=await fetch(`${rn}/admin/financial-params`,{credentials:"include",headers:Jr()});return Ln(s)?await s.json():null}async function c1(s){const e=await fetch(`${rn}/admin/financial-params`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json",...Jr()},body:JSON.stringify(s)});return Ln(e)?await e.json():null}async function u1(s,e){const n=await fetch(`${rn}/admin/prompt-blueprint?risk_profile=${s}&experience_level=${e}`,{credentials:"include",headers:Jr()});return Ln(n)?await n.json():null}async function d1(){const s=await fetch(`${rn}/admin/logs`,{credentials:"include",headers:Jr()});return Ln(s)?await s.json():[]}function Vm(s,e){const n={CONSERVADOR:[["KNCR11",.35,"Renda mensal pós-fixada isenta de IR"],["ITUB4",.25,"Carrego bancário com Selic elevada"],["EGIE3",.25,"Concessão elétrica blindada pelo IPCA"],["WEGE3",.15,"Proteção cambial em moeda forte"]],MODERADO:[["SBSP3",.25,"Saneamento IPCA+ e ganho operacional"],["ITUB4",.2,"Spread bancário e retorno sobre patrimônio > 22%"],["HGLG11",.2,"Logística prime com desconto patrimonial"],["WEGE3",.2,"Exportadora global dolarizada"],["BBSE3",.15,"Seguridade com dividendo próximo a 10%"]],ARROJADO:[["WEGE3",.25,"Indústria global dolarizada e expansão internacional"],["PRIO3",.25,"Receita 100% dólar e baixo custo de extração"],["SBSP3",.25,"Sensibilidade positiva ao fechamento da curva"],["BPAC11",.15,"Crescimento em wealth e investment banking"],["HGLG11",.1,"FII descontado isento de IR"]]};let r=0,a=0;const c=n[e].map(([d,u,p])=>{const m=Vo.find(S=>S.ticker===d)??Vo[0],_=Math.max(1,Math.floor(s*u/m.price)),x=Number((_*m.price).toFixed(2)),g=x*(m.dy/100);return r+=x,a+=g,{ticker:m.ticker,name:m.name,asset_type:m.type,role:p,weight_pct:Math.round(u*100),unit_price:m.price,quantity:_,subtotal_brl:x,monthly_dividend_brl:Number((g/12).toFixed(2))}});return{amount_brl:s,risk_profile:e,total_allocated_brl:Number(r.toFixed(2)),cash_reserve_selic_brl:Number(Math.max(0,s-r).toFixed(2)),added_monthly_income_brl:Number((a/12).toFixed(2)),added_annual_income_brl:Number(a.toFixed(2)),items:c}}function No(s,e,n,r){if(r<=0)return s;const a=Math.pow(1+n,1/12)-1;return s*Math.pow(1+a,r)+e*((Math.pow(1+a,r)-1)/a)}function Hm(s){const e=s.years<=1?.2:s.years===2?.175:.15,n=s.expectedRatePct/100*(s.reinvest?1:.62),r=.1375,a=.1375*.85,c=.074,d=[];for(let _=0;_<=s.years;_++){const x=_*12,g=s.initialCapital+s.monthlyContribution*x,S=No(s.initialCapital,s.monthlyContribution,n,x),E=No(s.initialCapital,s.monthlyContribution,r,x),T=No(s.initialCapital,s.monthlyContribution,a,x),y=No(s.initialCapital,s.monthlyContribution,c,x);d.push({year:_,label:`Ano ${_}`,invested:Math.round(g),larius_net:Math.round(S),cdb_100_net:Math.round(E-Math.max(0,E-g)*e),bank_85_net:Math.round(T-Math.max(0,T-g)*e),savings_net:Math.round(y)})}const u=d[d.length-1],p=No(s.initialCapital,s.monthlyContribution,r,s.years*12),m=Math.round(Math.max(0,p-u.invested)*e);return{years:s.years,expected_rate_pct:s.expectedRatePct,ir_rate_pct:Number((e*100).toFixed(1)),total_invested:u.invested,end_larius_net:u.larius_net,end_cdb_100_net:u.cdb_100_net,ir_retained_cdb:m,end_bank_85_net:u.bank_85_net,end_savings_net:u.savings_net,alpha_over_bank:u.larius_net-u.bank_85_net,series:d}}function wv(s,e,n){const r=s.toLowerCase(),a=Vo.find(u=>r.includes(u.ticker.toLowerCase())||r.includes(u.name.toLowerCase()));if(a){const u=n==="INICIANTE"?a.thesis:`${a.thesis} P/L ou P/VP: ${a.pl.toFixed(2)} | ROE: ${a.roe.toFixed(1)}% | Beta: ${a.beta.toFixed(2)}.`;return{risk_profile:e,experience_level:n,reply_markdown:`### Parecer ${a.ticker} — ${a.name}

${u}

- Cotação: R$ ${a.price.toFixed(2)} → Alvo: R$ ${a.target.toFixed(2)} (${a.upside>=0?"+":""}${a.upside}%)
- Dividend Yield: ${a.dy.toFixed(1)}% a.a. | Pagamentos: ${a.pay_months}`,speech_script:`Analisando ${a.name}, código ${a.ticker}. ${a.thesis} Hoje negocia a ${a.price.toFixed(2)} reais com dividendos de ${a.dy.toFixed(1)} por cento ao ano.`,referenced_tickers:[a.ticker],hud_focus_mode:"ASSET"}}if(r.includes("banco")||r.includes("corretora")||r.includes("taxa")||r.includes("c6")||r.includes("itau")||r.includes("itaú"))return{risk_profile:e,experience_level:n,reply_markdown:`### Comparativo de Bancos & Taxa Zero

- **Corretagem R$ 0,00 (Ações e FIIs):** Íon Itaú, Inter Invest, C6 Invest e Nubank.
- **Atenção ao custo fixo:** XP cobra R$ 4,90/ordem em ações; evite CDBs abaixo de 100% do CDI.`,speech_script:"Na escolha da corretora, prefira instituições com corretagem zero real em ações e fundos imobiliários, como Íon Itaú, Inter, C6 e Nubank.",referenced_tickers:["ITUB4","KNCR11"],hud_focus_mode:"BROKERS"};if(r.includes("juro")||r.includes("imposto")||r.includes("cdb")||r.includes("simula")){const u=Hm({initialCapital:1e4,monthlyContribution:1e3,years:10,expectedRatePct:16.2,reinvest:!0});return{risk_profile:e,experience_level:n,reply_markdown:`### Simulação Líquida em 10 Anos (R$ 10k + R$ 1.000/mês)

- **Carteira Recomendada (Isenta IR):** R$ ${u.end_larius_net.toLocaleString("pt-BR")}
- **CDB 100% CDI (-${u.ir_rate_pct}% IR):** R$ ${u.end_cdb_100_net.toLocaleString("pt-BR")}
- **Banco Tradicional (85% CDI):** R$ ${u.end_bank_85_net.toLocaleString("pt-BR")}

Diferença líquida estimada: +R$ ${u.alpha_over_bank.toLocaleString("pt-BR")}.`,speech_script:`Em dez anos mantendo aportes mensais de mil reais, a isenção de Imposto de Renda sobre dividendos e fundos imobiliários gera mais de ${Math.floor(u.alpha_over_bank/1e3)} mil reais de vantagem líquida sobre bancos tradicionais.`,referenced_tickers:["ITUB4","SBSP3","KNCR11"],hud_focus_mode:"COMPOUND"}}const c=Vm(3e3,e),d=c.items.map(u=>`- **${u.ticker}** (${u.weight_pct}%): ${u.quantity} ${u.asset_type==="FII"?"cotas":"ações"} — ${u.role}`).join(`
`);return{risk_profile:e,experience_level:n,reply_markdown:`### Alocação Recomendada — Perfil ${e}

${d}

Renda mensal estimada adicionada: +R$ ${c.added_monthly_income_brl.toFixed(2)}/mês isentos de IR.`,speech_script:`Para o seu perfil ${e.toLowerCase()}, estruturei uma alocação equilibrada para capturar juros, inflação e dólar, somando renda mensal isenta de Imposto de Renda.`,referenced_tickers:c.items.map(u=>u.ticker),hud_focus_mode:"CORE"}}function Tv(){const[s,e]=Xe.useState(!1),[n,r]=Xe.useState(!1),[a,c]=Xe.useState(!1),d=Xe.useRef(null),u=Xe.useRef(null),p=Xe.useRef(null),m=Xe.useRef(null),_=Xe.useRef(null),x=Xe.useRef(0),g=Xe.useCallback(()=>{if(!d.current){const A=window.AudioContext||window.webkitAudioContext;d.current=new A}if(d.current.state==="suspended"&&d.current.resume(),!u.current){const A=d.current.createAnalyser();A.fftSize=256,A.smoothingTimeConstant=.78,u.current=A,p.current=new Uint8Array(new ArrayBuffer(A.frequencyBinCount))}return{ctx:d.current,analyser:u.current}},[]),S=Xe.useCallback(()=>{if(u.current&&p.current&&s){u.current.getByteFrequencyData(p.current);let A=0;const L=28;for(let V=2;V<L+2;V++)A+=p.current[V];const b=A/(L*255);return x.current+=(b-x.current)*.25,x.current}return 0},[s]),E=Xe.useCallback(()=>{m.current&&(m.current.pause(),m.current=null),_.current&&(URL.revokeObjectURL(_.current),_.current=null),typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel(),e(!1)},[]),T=Xe.useCallback(A=>{if(typeof window>"u"||!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const L=A.match(/[^.!?]+[.!?]+/g)||[A],b=window.speechSynthesis.getVoices().filter(U=>U.lang.toLowerCase().includes("pt")),V=b.find(U=>U.name.includes("Natural"))||b[0];e(!0),L.forEach((U,F)=>{const H=new SpeechSynthesisUtterance(U.trim());H.lang="pt-BR",H.pitch=.96,H.rate=1.05,V&&(H.voice=V),F===L.length-1&&(H.onend=()=>e(!1)),window.speechSynthesis.speak(H)})},[]),y=Xe.useCallback(async A=>{if(a||!A.trim())return;E();const L=await Ev(A);if(L){const b=URL.createObjectURL(L);_.current=b;const V=new Audio(b);m.current=V;try{const{ctx:U,analyser:F}=g();U.createMediaElementSource(V).connect(F),F.connect(U.destination)}catch{}V.onplay=()=>e(!0),V.onended=()=>{e(!1),_.current&&(URL.revokeObjectURL(_.current),_.current=null)},V.onerror=()=>e(!1),await V.play().catch(()=>{T(A)});return}T(A)},[g,T,a,E]),v=Xe.useCallback(A=>{const L=window,b=L.SpeechRecognition||L.webkitSpeechRecognition;if(!b)return!1;const V=new b;return V.lang="pt-BR",V.onstart=()=>r(!0),V.onresult=U=>{r(!1),A(U.results[0][0].transcript)},V.onerror=()=>r(!1),V.onend=()=>r(!1),V.start(),!0},[]);return Xe.useEffect(()=>()=>{E()},[E]),{isSpeaking:s,isListening:n,muted:a,setMuted:c,getAudioEnergy:S,speak:y,stopSpeaking:E,startVoiceCommand:v}}const Lp=["12.6%","37.5%","61.9%","86.2%"],Dp=["32.7%","71.4%"],Ip=()=>w.jsxs("div",{className:"pointer-events-none fixed inset-0 z-0 overflow-hidden","aria-hidden":"true",children:[w.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(640px circle at 50% 18%, rgba(244,244,245,0.045), transparent 65%), radial-gradient(960px circle at 50% 50%, transparent 40%, rgba(3,3,4,0.85) 100%)"}}),Lp.map((s,e)=>w.jsx("div",{className:"anim-grid-v absolute top-0 h-full w-px bg-white/[0.045]",style:{left:s,animationDelay:`${260+e*80}ms`}},`v-${s}`)),Dp.map((s,e)=>w.jsx("div",{className:"anim-grid-h absolute left-0 h-px w-full bg-white/[0.045]",style:{top:s,animationDelay:`${360+e*120}ms`}},`h-${s}`)),Dp.map((s,e)=>Lp.map((n,r)=>w.jsxs("div",{className:"anim-cross absolute",style:{top:s,left:n,animationDelay:`${520+(e*4+r)*60}ms`},children:[w.jsx("span",{className:"absolute h-px w-[10px] -translate-x-1/2 -translate-y-1/2 bg-white/55"}),w.jsx("span",{className:"absolute h-[10px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/55"})]},`cross-${e}-${r}`)))]});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=Xe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:d,...u},p)=>Xe.createElement("svg",{ref:p,...Rv,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Gm("lucide",a),...u},[...d.map(([m,_])=>Xe.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=(s,e)=>{const n=Xe.forwardRef(({className:r,...a},c)=>Xe.createElement(Cv,{ref:c,iconNode:e,className:Gm(`lucide-${Av(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=$i("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=$i("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=$i("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=$i("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=$i("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=$i("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=$i("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=$i("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=$i("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Fp=[{id:"hud",num:"01",label:"VISÃO_HUD"},{id:"larius",num:"02",label:"LARIUS_IA"},{id:"assets",num:"03",label:"CARTEIRA_B3"},{id:"compound",num:"04",label:"JUROS_&_BANCOS"}],Uv=({activeView:s,onSelectView:e,macro:n,stealthMode:r,onToggleStealth:a,isVoiceActive:c,onQuickVoiceClick:d})=>{const[u,p]=Xe.useState(!1);return w.jsxs(w.Fragment,{children:[w.jsxs("header",{className:"fixed left-0 top-0 z-40 flex h-[64px] w-full items-center border-b border-white/[0.06] bg-[#030304]/80 px-5 backdrop-blur-md md:h-[72px] md:px-[36px]",children:[w.jsxs("button",{onClick:()=>e("hud"),className:"anim-hud-up flex items-center gap-3 text-left transition-opacity hover:opacity-85",style:{animationDelay:"60ms"},children:[w.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[w.jsx("polygon",{points:"12,1.5 22.5,12 12,22.5 1.5,12",stroke:"#F4F4F5",strokeWidth:"1.2"}),w.jsx("polygon",{points:"12,6.5 17.5,12 12,17.5 6.5,12",fill:"#F4F4F5"})]}),w.jsx("span",{className:"font-display text-[17px] font-medium tracking-[-0.02em] text-white md:text-[19px]",children:"D.INVESTIMENTOS"})]}),w.jsx("nav",{className:"ml-10 hidden items-center gap-8 xl:flex",children:Fp.map((m,_)=>{const x=s===m.id;return w.jsxs("button",{onClick:()=>e(m.id),className:"anim-hud-up group relative flex items-center gap-[4px] py-1 font-mono text-[12px] tracking-[0.04em] transition-colors",style:{animationDelay:`${140+_*60}ms`},children:[w.jsxs("span",{className:x?"text-[#F4F4F5]":"text-zinc-500 group-hover:text-zinc-300",children:[m.num,"."]}),w.jsx("span",{className:x?"font-semibold text-white":"text-zinc-400 group-hover:text-white",children:m.label}),x&&w.jsx("span",{className:"absolute -bottom-[2px] left-0 h-px w-full bg-[#F4F4F5]"})]},m.id)})}),w.jsxs("div",{className:"anim-hud-in ml-auto hidden items-center gap-3 lg:flex",style:{animationDelay:"320ms"},children:[w.jsxs("div",{className:"flex items-center gap-3 border-l border-white/[0.12] pl-3 font-mono text-[11px] tabular-nums text-zinc-400",children:[w.jsxs("span",{children:["SELIC ",w.jsxs("strong",{className:"text-zinc-200",children:[n.selic_pct.toFixed(2),"%"]})]}),w.jsxs("span",{children:["IPCA ",w.jsxs("strong",{className:"text-zinc-200",children:[n.ipca_pct.toFixed(2),"%"]})]}),w.jsxs("span",{children:["USD ",w.jsxs("strong",{className:"text-zinc-200",children:["R$ ",n.usd_brl.toFixed(2)]})]})]}),w.jsx("button",{onClick:a,title:"Ocultar Valores (Shift+H)",className:"flex h-8 w-8 items-center justify-center border border-white/[0.1] bg-[#09090B] text-zinc-400 transition-colors hover:border-white/30 hover:text-white",children:r?w.jsx(Pv,{className:"h-3.5 w-3.5"}):w.jsx(Nv,{className:"h-3.5 w-3.5"})}),w.jsxs("button",{onClick:d,className:`flex items-center gap-2 border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] transition-all ${c?"border-emerald-400/50 bg-emerald-400/10 text-emerald-300":"border-white/[0.14] bg-[#09090B] text-white hover:border-white/40"}`,children:[w.jsx(Wm,{className:`h-3.5 w-3.5 ${c?"animate-pulse text-emerald-300":""}`}),w.jsx("span",{children:c?"Larius Falando":"Falar com Larius"})]})]}),w.jsx("button",{onClick:()=>p(m=>!m),className:"ml-auto flex h-10 w-10 items-center justify-center border border-white/[0.12] bg-[#09090B] text-white xl:hidden","aria-label":"Alternar menu",children:u?w.jsx(Up,{className:"h-5 w-5"}):w.jsx(Lv,{className:"h-5 w-5"})})]}),u&&w.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col bg-[#030304]/95 px-5 pb-10 pt-24 backdrop-blur-lg xl:hidden",children:[w.jsx("button",{onClick:()=>p(!1),className:"absolute right-5 top-4 flex h-10 w-10 items-center justify-center border border-white/15 text-white","aria-label":"Fechar menu",children:w.jsx(Up,{className:"h-5 w-5"})}),w.jsx("div",{className:"flex flex-col gap-6",children:Fp.map(m=>{const _=s===m.id;return w.jsxs("button",{onClick:()=>{e(m.id),p(!1)},className:"flex items-center gap-3 text-left",children:[w.jsxs("span",{className:"font-mono text-sm text-zinc-500",children:[m.num,"."]}),w.jsx("span",{className:`font-display text-2xl ${_?"text-white":"text-zinc-400"}`,children:m.label})]},m.id)})}),w.jsxs("div",{className:"mt-auto flex items-center justify-between border-t border-white/10 pt-6 font-mono text-xs text-zinc-400",children:[w.jsxs("span",{children:["SELIC ",n.selic_pct.toFixed(2),"% · USD ",n.usd_brl.toFixed(2)]}),w.jsx("button",{onClick:a,className:"text-white underline",children:r?"Mostrar Valores":"Ocultar Valores"})]})]})]})},Fv=({badge:s,children:e,className:n="",strokeColor:r="rgba(244, 244, 245, 0.36)"})=>w.jsxs("div",{className:`relative ${n}`,children:[s&&w.jsx("div",{className:"mb-[10px] inline-block bg-[#F4F4F5] px-[7px] py-[2px] font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#030304]",children:s}),w.jsxs("div",{className:"relative bg-[#09090B]/80 p-5 backdrop-blur-md",style:{clipPath:"polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px))"},children:[w.jsx("svg",{className:"pointer-events-none absolute inset-0 h-full w-full",viewBox:"0 0 320 180",preserveAspectRatio:"none","aria-hidden":"true",children:w.jsx("polygon",{points:"0.5,0.5 319.5,0.5 319.5,179.5 24,179.5 0.5,156",fill:"none",stroke:r,strokeWidth:"1",vectorEffect:"non-scaling-stroke"})}),w.jsx("div",{className:"relative z-10",children:e})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="170",Ov=0,Op=1,kv=2,Xm=1,zv=2,zi=3,wr=0,bn=1,Bi=2,Mr=0,Bs=1,Zu=2,kp=3,zp=4,Bv=5,$r=100,Vv=101,Hv=102,Gv=103,Wv=104,jv=200,Xv=201,$v=202,qv=203,Qu=204,Ju=205,Yv=206,Kv=207,Zv=208,Qv=209,Jv=210,e_=211,t_=212,n_=213,i_=214,ed=0,td=1,nd=2,Gs=3,id=4,rd=5,sd=6,od=7,$m=0,r_=1,s_=2,Er=0,o_=1,a_=2,l_=3,c_=4,u_=5,d_=6,f_=7,qm=300,Ws=301,js=302,ad=303,ld=304,Dl=306,cd=1e3,Yr=1001,ud=1002,di=1003,h_=1004,tl=1005,xi=1006,Su=1007,Kr=1008,Wi=1009,Ym=1010,Km=1011,Ho=1012,Gd=1013,Zr=1014,Vi=1015,Go=1016,Wd=1017,jd=1018,Xs=1020,Zm=35902,Qm=1021,Jm=1022,ui=1023,eg=1024,tg=1025,Vs=1026,$s=1027,ng=1028,Xd=1029,ig=1030,$d=1031,qd=1033,wl=33776,Tl=33777,Al=33778,Rl=33779,dd=35840,fd=35841,hd=35842,pd=35843,md=36196,gd=37492,vd=37496,_d=37808,xd=37809,yd=37810,Sd=37811,Md=37812,Ed=37813,wd=37814,Td=37815,Ad=37816,Rd=37817,Cd=37818,bd=37819,Pd=37820,Nd=37821,Cl=36492,Ld=36494,Dd=36495,rg=36283,Id=36284,Ud=36285,Fd=36286,p_=3200,m_=3201,g_=0,v_=1,Sr="",Kn="srgb",Ys="srgb-linear",Il="linear",bt="srgb",ws=7680,Bp=519,__=512,x_=513,y_=514,sg=515,S_=516,M_=517,E_=518,w_=519,Vp=35044,Hp="300 es",Hi=2e3,Pl=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=Math.PI/180,Od=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function T_(s,e){return(s%e+e)%e}function Eu(s,e,n){return(1-n)*s+n*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,n=0){Mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,c,d,u,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,u,p,m)}set(e,n,r,a,c,d,u,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=u,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],u=r[3],p=r[6],m=r[1],_=r[4],x=r[7],g=r[2],S=r[5],E=r[8],T=a[0],y=a[3],v=a[6],A=a[1],L=a[4],b=a[7],V=a[2],U=a[5],F=a[8];return c[0]=d*T+u*A+p*V,c[3]=d*y+u*L+p*U,c[6]=d*v+u*b+p*F,c[1]=m*T+_*A+x*V,c[4]=m*y+_*L+x*U,c[7]=m*v+_*b+x*F,c[2]=g*T+S*A+E*V,c[5]=g*y+S*L+E*U,c[8]=g*v+S*b+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],u=e[5],p=e[6],m=e[7],_=e[8];return n*d*_-n*u*m-r*c*_+r*u*p+a*c*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],u=e[5],p=e[6],m=e[7],_=e[8],x=_*d-u*m,g=u*p-_*c,S=m*c-d*p,E=n*x+r*g+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(a*m-_*r)*T,e[2]=(u*r-a*d)*T,e[3]=g*T,e[4]=(_*n-a*p)*T,e[5]=(a*c-u*n)*T,e[6]=S*T,e[7]=(r*p-m*n)*T,e[8]=(d*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,u){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*u)+d+e,-a*m,a*p,-a*(-m*d+p*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(wu.makeScale(e,n)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new at;function og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A_(){const s=Nl("canvas");return s.style.display="block",s}const Gp={};function Oo(s){s in Gp||(Gp[s]=!0,console.warn(s))}function R_(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function C_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function b_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===bt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===bt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?Il:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Wp=[.64,.33,.3,.6,.15,.06],jp=[.2126,.7152,.0722],Xp=[.3127,.329],$p=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Ys]:{primaries:Wp,whitePoint:Xp,transfer:Il,toXYZ:$p,fromXYZ:qp,luminanceCoefficients:jp,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:Wp,whitePoint:Xp,transfer:bt,toXYZ:$p,fromXYZ:qp,luminanceCoefficients:jp,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Ts;class P_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Nl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=Gi(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N_=0;class ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,u=a.length;d<u;d++)a[d].isDataTexture?c.push(Tu(a[d].image)):c.push(Tu(a[d]))}else c=Tu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?P_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let L_=0;class Pn extends Ks{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Yr,a=Yr,c=xi,d=Kr,u=ui,p=Wi,m=Pn.DEFAULT_ANISOTROPY,_=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Wo(),this.name="",this.source=new ag(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=u,this.internalFormat=null,this.type=p,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=qm;Pn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,a=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],_=p[4],x=p[8],g=p[1],S=p[5],E=p[9],T=p[2],y=p[6],v=p[10];if(Math.abs(_-g)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,b=(S+1)/2,V=(v+1)/2,U=(_+g)/4,F=(x+T)/4,H=(E+y)/4;return L>b&&L>V?L<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(L),a=U/r,c=F/r):b>V?b<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(b),r=U/a,c=H/a):V<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(V),r=F/c,a=H/c),this.set(r,a,c,n),this}let A=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(y-E)/A,this.y=(x-T)/A,this.z=(g-_)/A,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D_ extends Ks{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let u=0;u<d;u++)this.textures[u]=c.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ag(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends D_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class lg extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I_ extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,u){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const g=c[d+0],S=c[d+1],E=c[d+2],T=c[d+3];if(u===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(u===1){e[n+0]=g,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(x!==T||p!==g||m!==S||_!==E){let y=1-u;const v=p*g+m*S+_*E+x*T,A=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const V=Math.sqrt(L),U=Math.atan2(V,v*A);y=Math.sin(y*U)/V,u=Math.sin(u*U)/V}const b=u*A;if(p=p*y+g*b,m=m*y+S*b,_=_*y+E*b,x=x*y+T*b,y===1-u){const V=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=V,m*=V,_*=V,x*=V}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,c,d){const u=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=c[d],g=c[d+1],S=c[d+2],E=c[d+3];return e[n]=u*E+_*x+p*S-m*g,e[n+1]=p*E+_*g+m*x-u*S,e[n+2]=m*E+_*S+u*g-p*x,e[n+3]=_*E-u*x-p*g-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,u=Math.cos,p=Math.sin,m=u(r/2),_=u(a/2),x=u(c/2),g=p(r/2),S=p(a/2),E=p(c/2);switch(d){case"XYZ":this._x=g*_*x+m*S*E,this._y=m*S*x-g*_*E,this._z=m*_*E+g*S*x,this._w=m*_*x-g*S*E;break;case"YXZ":this._x=g*_*x+m*S*E,this._y=m*S*x-g*_*E,this._z=m*_*E-g*S*x,this._w=m*_*x+g*S*E;break;case"ZXY":this._x=g*_*x-m*S*E,this._y=m*S*x+g*_*E,this._z=m*_*E+g*S*x,this._w=m*_*x-g*S*E;break;case"ZYX":this._x=g*_*x-m*S*E,this._y=m*S*x+g*_*E,this._z=m*_*E-g*S*x,this._w=m*_*x+g*S*E;break;case"YZX":this._x=g*_*x+m*S*E,this._y=m*S*x+g*_*E,this._z=m*_*E-g*S*x,this._w=m*_*x-g*S*E;break;case"XZY":this._x=g*_*x-m*S*E,this._y=m*S*x-g*_*E,this._z=m*_*E+g*S*x,this._w=m*_*x+g*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],u=n[5],p=n[9],m=n[2],_=n[6],x=n[10],g=r+u+x;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(d-a)*S}else if(r>u&&r>x){const S=2*Math.sqrt(1+r-u-x);this._w=(_-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(c+m)/S}else if(u>x){const S=2*Math.sqrt(1+u-r-x);this._w=(c-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-r-u);this._w=(d-a)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,u=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+d*u+a*m-c*p,this._y=a*_+d*p+c*u-r*m,this._z=c*_+d*m+r*p-a*u,this._w=d*_-r*u-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let u=d*e._w+r*e._x+a*e._y+c*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const p=1-u*u;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,u),x=Math.sin((1-n)*_)/m,g=Math.sin(n*_)/m;return this._w=d*x+this._w*g,this._x=r*x+this._x*g,this._y=a*x+this._y*g,this._z=c*x+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,u=e.z,p=e.w,m=2*(d*a-u*r),_=2*(u*n-c*a),x=2*(c*r-d*n);return this.x=n+p*m+d*x-u*_,this.y=r+p*_+u*m-c*x,this.z=a+p*x+c*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,u=n.y,p=n.z;return this.x=a*p-c*u,this.y=c*d-r*p,this.z=r*u-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new Q,Yp=new jo;class Xo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,u=c.count;d<u;d++)e.isMesh===!0?e.getVertexPosition(d,oi):oi.fromBufferAttribute(c,d),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),il.subVectors(this.max,Do),As.subVectors(e.a,Do),Rs.subVectors(e.b,Do),Cs.subVectors(e.c,Do),mr.subVectors(Rs,As),gr.subVectors(Cs,Rs),zr.subVectors(As,Cs);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-zr.z,zr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,zr.z,0,-zr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-zr.y,zr.x,0];return!Ru(n,As,Rs,Cs,il)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,As,Rs,Cs,il))?!1:(rl.crossVectors(mr,gr),n=[rl.x,rl.y,rl.z],Ru(n,As,Rs,Cs,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],oi=new Q,nl=new Xo,As=new Q,Rs=new Q,Cs=new Q,mr=new Q,gr=new Q,zr=new Q,Do=new Q,il=new Q,rl=new Q,Br=new Q;function Ru(s,e,n,r,a){for(let c=0,d=s.length-3;c<=d;c+=3){Br.fromArray(s,c);const u=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),p=e.dot(Br),m=n.dot(Br),_=r.dot(Br);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>u)return!1}return!0}const U_=new Xo,Io=new Q,Cu=new Q;class Ul{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):U_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Io,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Cu)),this.expandByPoint(Io.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new Q,bu=new Q,sl=new Q,vr=new Q,Pu=new Q,ol=new Q,Nu=new Q;class cg{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){bu.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(bu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(sl),u=vr.dot(this.direction),p=-vr.dot(sl),m=vr.lengthSq(),_=Math.abs(1-d*d);let x,g,S,E;if(_>0)if(x=d*p-u,g=d*u-p,E=c*_,x>=0)if(g>=-E)if(g<=E){const T=1/_;x*=T,g*=T,S=x*(x+d*g+2*u)+g*(d*x+g+2*p)+m}else g=c,x=Math.max(0,-(d*g+u)),S=-x*x+g*(g+2*p)+m;else g=-c,x=Math.max(0,-(d*g+u)),S=-x*x+g*(g+2*p)+m;else g<=-E?(x=Math.max(0,-(-d*c+u)),g=x>0?-c:Math.min(Math.max(-c,-p),c),S=-x*x+g*(g+2*p)+m):g<=E?(x=0,g=Math.min(Math.max(-c,-p),c),S=g*(g+2*p)+m):(x=Math.max(0,-(d*c+u)),g=x>0?c:Math.min(Math.max(-c,-p),c),S=-x*x+g*(g+2*p)+m);else g=d>0?-c:c,x=Math.max(0,-(d*g+u)),S=-x*x+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(bu).addScaledVector(sl,g),S}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),u=r-d,p=r+d;return p<0?null:u<0?this.at(p,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,u,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),_>=0?(c=(e.min.y-g.y)*_,d=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,d=(e.min.y-g.y)*_),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),x>=0?(u=(e.min.z-g.z)*x,p=(e.max.z-g.z)*x):(u=(e.max.z-g.z)*x,p=(e.min.z-g.z)*x),r>p||u>a)||((u>r||r!==r)&&(r=u),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,a,c){Pu.subVectors(n,e),ol.subVectors(r,e),Nu.crossVectors(Pu,ol);let d=this.direction.dot(Nu),u;if(d>0){if(a)return null;u=1}else if(d<0)u=-1,d=-d;else return null;vr.subVectors(this.origin,e);const p=u*this.direction.dot(ol.crossVectors(vr,ol));if(p<0)return null;const m=u*this.direction.dot(Pu.cross(vr));if(m<0||p+m>d)return null;const _=-u*vr.dot(Nu);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,a,c,d,u,p,m,_,x,g,S,E,T,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,u,p,m,_,x,g,S,E,T,y)}set(e,n,r,a,c,d,u,p,m,_,x,g,S,E,T,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=c,v[5]=d,v[9]=u,v[13]=p,v[2]=m,v[6]=_,v[10]=x,v[14]=g,v[3]=S,v[7]=E,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),d=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),u=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=d*_,S=d*x,E=u*_,T=u*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=S+E*m,n[5]=g-T*m,n[9]=-u*p,n[2]=T-g*m,n[6]=E+S*m,n[10]=d*p}else if(e.order==="YXZ"){const g=p*_,S=p*x,E=m*_,T=m*x;n[0]=g+T*u,n[4]=E*u-S,n[8]=d*m,n[1]=d*x,n[5]=d*_,n[9]=-u,n[2]=S*u-E,n[6]=T+g*u,n[10]=d*p}else if(e.order==="ZXY"){const g=p*_,S=p*x,E=m*_,T=m*x;n[0]=g-T*u,n[4]=-d*x,n[8]=E+S*u,n[1]=S+E*u,n[5]=d*_,n[9]=T-g*u,n[2]=-d*m,n[6]=u,n[10]=d*p}else if(e.order==="ZYX"){const g=d*_,S=d*x,E=u*_,T=u*x;n[0]=p*_,n[4]=E*m-S,n[8]=g*m+T,n[1]=p*x,n[5]=T*m+g,n[9]=S*m-E,n[2]=-m,n[6]=u*p,n[10]=d*p}else if(e.order==="YZX"){const g=d*p,S=d*m,E=u*p,T=u*m;n[0]=p*_,n[4]=T-g*x,n[8]=E*x+S,n[1]=x,n[5]=d*_,n[9]=-u*_,n[2]=-m*_,n[6]=S*x+E,n[10]=g-T*x}else if(e.order==="XZY"){const g=d*p,S=d*m,E=u*p,T=u*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=g*x+T,n[5]=d*_,n[9]=S*x-E,n[2]=E*x-S,n[6]=u*_,n[10]=T*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F_,e,O_)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),_r.crossVectors(r,On),_r.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),_r.crossVectors(r,On)),_r.normalize(),al.crossVectors(On,_r),a[0]=_r.x,a[4]=al.x,a[8]=On.x,a[1]=_r.y,a[5]=al.y,a[9]=On.y,a[2]=_r.z,a[6]=al.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],u=r[4],p=r[8],m=r[12],_=r[1],x=r[5],g=r[9],S=r[13],E=r[2],T=r[6],y=r[10],v=r[14],A=r[3],L=r[7],b=r[11],V=r[15],U=a[0],F=a[4],H=a[8],P=a[12],C=a[1],z=a[5],se=a[9],J=a[13],le=a[2],me=a[6],ae=a[10],de=a[14],k=a[3],ce=a[7],re=a[11],O=a[15];return c[0]=d*U+u*C+p*le+m*k,c[4]=d*F+u*z+p*me+m*ce,c[8]=d*H+u*se+p*ae+m*re,c[12]=d*P+u*J+p*de+m*O,c[1]=_*U+x*C+g*le+S*k,c[5]=_*F+x*z+g*me+S*ce,c[9]=_*H+x*se+g*ae+S*re,c[13]=_*P+x*J+g*de+S*O,c[2]=E*U+T*C+y*le+v*k,c[6]=E*F+T*z+y*me+v*ce,c[10]=E*H+T*se+y*ae+v*re,c[14]=E*P+T*J+y*de+v*O,c[3]=A*U+L*C+b*le+V*k,c[7]=A*F+L*z+b*me+V*ce,c[11]=A*H+L*se+b*ae+V*re,c[15]=A*P+L*J+b*de+V*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],u=e[5],p=e[9],m=e[13],_=e[2],x=e[6],g=e[10],S=e[14],E=e[3],T=e[7],y=e[11],v=e[15];return E*(+c*p*x-a*m*x-c*u*g+r*m*g+a*u*S-r*p*S)+T*(+n*p*S-n*m*g+c*d*g-a*d*S+a*m*_-c*p*_)+y*(+n*m*x-n*u*S-c*d*x+r*d*S+c*u*_-r*m*_)+v*(-a*u*_-n*p*x+n*u*g+a*d*x-r*d*g+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],u=e[5],p=e[6],m=e[7],_=e[8],x=e[9],g=e[10],S=e[11],E=e[12],T=e[13],y=e[14],v=e[15],A=x*y*m-T*g*m+T*p*S-u*y*S-x*p*v+u*g*v,L=E*g*m-_*y*m-E*p*S+d*y*S+_*p*v-d*g*v,b=_*T*m-E*x*m+E*u*S-d*T*S-_*u*v+d*x*v,V=E*x*p-_*T*p-E*u*g+d*T*g+_*u*y-d*x*y,U=n*A+r*L+a*b+c*V;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return e[0]=A*F,e[1]=(T*g*c-x*y*c-T*a*S+r*y*S+x*a*v-r*g*v)*F,e[2]=(u*y*c-T*p*c+T*a*m-r*y*m-u*a*v+r*p*v)*F,e[3]=(x*p*c-u*g*c-x*a*m+r*g*m+u*a*S-r*p*S)*F,e[4]=L*F,e[5]=(_*y*c-E*g*c+E*a*S-n*y*S-_*a*v+n*g*v)*F,e[6]=(E*p*c-d*y*c-E*a*m+n*y*m+d*a*v-n*p*v)*F,e[7]=(d*g*c-_*p*c+_*a*m-n*g*m-d*a*S+n*p*S)*F,e[8]=b*F,e[9]=(E*x*c-_*T*c-E*r*S+n*T*S+_*r*v-n*x*v)*F,e[10]=(d*T*c-E*u*c+E*r*m-n*T*m-d*r*v+n*u*v)*F,e[11]=(_*u*c-d*x*c-_*r*m+n*x*m+d*r*S-n*u*S)*F,e[12]=V*F,e[13]=(_*T*a-E*x*a+E*r*g-n*T*g-_*r*y+n*x*y)*F,e[14]=(E*u*a-d*T*a-E*r*p+n*T*p+d*r*y-n*u*y)*F,e[15]=(d*x*a-_*u*a+_*r*p-n*x*p-d*r*g+n*u*g)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,u=e.y,p=e.z,m=c*d,_=c*u;return this.set(m*d+r,m*u-a*p,m*p+a*u,0,m*u+a*p,_*u+r,_*p-a*d,0,m*p-a*u,_*p+a*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,u=n._z,p=n._w,m=c+c,_=d+d,x=u+u,g=c*m,S=c*_,E=c*x,T=d*_,y=d*x,v=u*x,A=p*m,L=p*_,b=p*x,V=r.x,U=r.y,F=r.z;return a[0]=(1-(T+v))*V,a[1]=(S+b)*V,a[2]=(E-L)*V,a[3]=0,a[4]=(S-b)*U,a[5]=(1-(g+v))*U,a[6]=(y+A)*U,a[7]=0,a[8]=(E+L)*F,a[9]=(y-A)*F,a[10]=(1-(g+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=bs.set(a[0],a[1],a[2]).length();const d=bs.set(a[4],a[5],a[6]).length(),u=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const m=1/c,_=1/d,x=1/u;return ai.elements[0]*=m,ai.elements[1]*=m,ai.elements[2]*=m,ai.elements[4]*=_,ai.elements[5]*=_,ai.elements[6]*=_,ai.elements[8]*=x,ai.elements[9]*=x,ai.elements[10]*=x,n.setFromRotationMatrix(ai),r.x=c,r.y=d,r.z=u,this}makePerspective(e,n,r,a,c,d,u=Hi){const p=this.elements,m=2*c/(n-e),_=2*c/(r-a),x=(n+e)/(n-e),g=(r+a)/(r-a);let S,E;if(u===Hi)S=-(d+c)/(d-c),E=-2*d*c/(d-c);else if(u===Pl)S=-d/(d-c),E=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=g,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,d,u=Hi){const p=this.elements,m=1/(n-e),_=1/(r-a),x=1/(d-c),g=(n+e)*m,S=(r+a)*_;let E,T;if(u===Hi)E=(d+c)*x,T=-2*x;else if(u===Pl)E=c*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-g,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new Q,ai=new Ht,F_=new Q(0,0,0),O_=new Q(1,1,1),_r=new Q,al=new Q,On=new Q,Kp=new Ht,Zp=new jo;class ji{constructor(e=0,n=0,r=0,a=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],u=a[8],p=a[1],m=a[5],_=a[9],x=a[2],g=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Cn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(u,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let k_=0;const Qp=new Q,Ps=new jo,Fi=new Ht,ll=new Q,Uo=new Q,z_=new Q,B_=new jo,Jp=new Q(1,0,0),em=new Q(0,1,0),tm=new Q(0,0,1),nm={type:"added"},V_={type:"removed"},Ns={type:"childadded",child:null},Lu={type:"childremoved",child:null};class Nn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new Q,n=new ji,r=new jo,a=new Q(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new at}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Uo,ll,this.up):Fi.lookAt(ll,Uo,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(V_),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,B_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(u,p){return u[p.uuid]===void 0&&(u[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const p=u.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let p=0,m=this.material.length;p<m;p++)u.push(c(e.materials,this.material[p]));a.material=u}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const p=this.animations[u];a.animations.push(c(e.animations,p))}}if(n){const u=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),x=d(e.shapes),g=d(e.skeletons),S=d(e.animations),E=d(e.nodes);u.length>0&&(r.geometries=u),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function d(u){const p=[];for(const m in u){const _=u[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Nn.DEFAULT_UP=new Q(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new Q,Oi=new Q,Du=new Q,ki=new Q,Ls=new Q,Ds=new Q,im=new Q,Iu=new Q,Uu=new Q,Fu=new Q,Ou=new Vt,ku=new Vt,zu=new Vt;class ci{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){li.subVectors(a,n),Oi.subVectors(r,n),Du.subVectors(e,n);const d=li.dot(li),u=li.dot(Oi),p=li.dot(Du),m=Oi.dot(Oi),_=Oi.dot(Du),x=d*m-u*u;if(x===0)return c.set(0,0,0),null;const g=1/x,S=(m*p-u*_)*g,E=(d*_-u*p)*g;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,r,a,c,d,u,p){return this.getBarycoord(e,n,r,a,ki)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ki.x),p.addScaledVector(d,ki.y),p.addScaledVector(u,ki.z),p)}static getInterpolatedAttribute(e,n,r,a,c,d){return Ou.setScalar(0),ku.setScalar(0),zu.setScalar(0),Ou.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,r),zu.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Ou,c.x),d.addScaledVector(ku,c.y),d.addScaledVector(zu,c.z),d}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),Oi.subVectors(e,n),li.cross(Oi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),li.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,u;Ls.subVectors(a,r),Ds.subVectors(c,r),Iu.subVectors(e,r);const p=Ls.dot(Iu),m=Ds.dot(Iu);if(p<=0&&m<=0)return n.copy(r);Uu.subVectors(e,a);const _=Ls.dot(Uu),x=Ds.dot(Uu);if(_>=0&&x<=_)return n.copy(a);const g=p*x-_*m;if(g<=0&&p>=0&&_<=0)return d=p/(p-_),n.copy(r).addScaledVector(Ls,d);Fu.subVectors(e,c);const S=Ls.dot(Fu),E=Ds.dot(Fu);if(E>=0&&S<=E)return n.copy(c);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return u=m/(m-E),n.copy(r).addScaledVector(Ds,u);const y=_*E-S*x;if(y<=0&&x-_>=0&&S-E>=0)return im.subVectors(c,a),u=(x-_)/(x-_+(S-E)),n.copy(a).addScaledVector(im,u);const v=1/(y+T+g);return d=T*v,u=g*v,n.copy(r).addScaledVector(Ls,d).addScaledVector(Ds,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Bu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=xt.workingColorSpace){return this.r=e,this.g=n,this.b=r,xt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=xt.workingColorSpace){if(e=T_(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Bu(d,c,e+1/3),this.g=Bu(d,c,e),this.b=Bu(d,c,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],u=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=dg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return xt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Cn(fn.r*255,0,255))*65536+Math.round(Cn(fn.g*255,0,255))*256+Math.round(Cn(fn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,c=fn.b,d=Math.max(r,a,c),u=Math.min(r,a,c);let p,m;const _=(u+d)/2;if(u===d)p=0,m=0;else{const x=d-u;switch(m=_<=.5?x/(d+u):x/(2-d-u),d){case r:p=(a-c)/x+(a<c?6:0);break;case a:p=(c-r)/x+2;break;case c:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Kn){xt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(cl);const r=Eu(xr.h,cl.h,n),a=Eu(xr.s,cl.s,n),c=Eu(xr.l,cl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Rt;Rt.NAMES=dg;let H_=0;class $o extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Wo(),this.name="",this.blending=Bs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=Ju,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qu&&(r.blendSrc=this.blendSrc),this.blendDst!==Ju&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const u in c){const p=c[u];delete p.metadata,d.push(p)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ks extends $o{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new Q,ul=new Mt;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Vp,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array),c=Rn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class fg extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class hg extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Bn extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let G_=0;const Yn=new Ht,Vu=new Nn,Is=new Q,kn=new Xo,Fo=new Xo,en=new Q;class Mi extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?hg:fg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new at().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Bn(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];kn.setFromBufferAttribute(c),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const u=n[c];Fo.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(kn.min,Fo.min),kn.expandByPoint(en),en.addVectors(kn.max,Fo.max),kn.expandByPoint(en)):(kn.expandByPoint(Fo.min),kn.expandByPoint(Fo.max))}kn.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)en.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(en));if(n)for(let c=0,d=n.length;c<d;c++){const u=n[c],p=this.morphTargetsRelative;for(let m=0,_=u.count;m<_;m++)en.fromBufferAttribute(u,m),p&&(Is.fromBufferAttribute(e,m),en.add(Is)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),u=[],p=[];for(let H=0;H<r.count;H++)u[H]=new Q,p[H]=new Q;const m=new Q,_=new Q,x=new Q,g=new Mt,S=new Mt,E=new Mt,T=new Q,y=new Q;function v(H,P,C){m.fromBufferAttribute(r,H),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,C),g.fromBufferAttribute(c,H),S.fromBufferAttribute(c,P),E.fromBufferAttribute(c,C),_.sub(m),x.sub(m),S.sub(g),E.sub(g);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(z),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(z),u[H].add(T),u[P].add(T),u[C].add(T),p[H].add(y),p[P].add(y),p[C].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let H=0,P=A.length;H<P;++H){const C=A[H],z=C.start,se=C.count;for(let J=z,le=z+se;J<le;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new Q,b=new Q,V=new Q,U=new Q;function F(H){V.fromBufferAttribute(a,H),U.copy(V);const P=u[H];L.copy(P),L.sub(V.multiplyScalar(V.dot(P))).normalize(),b.crossVectors(U,P);const z=b.dot(p[H])<0?-1:1;d.setXYZW(H,L.x,L.y,L.z,z)}for(let H=0,P=A.length;H<P;++H){const C=A[H],z=C.start,se=C.count;for(let J=z,le=z+se;J<le;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const a=new Q,c=new Q,d=new Q,u=new Q,p=new Q,m=new Q,_=new Q,x=new Q;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,y),_.subVectors(d,c),x.subVectors(a,c),_.cross(x),u.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),u.add(_),p.add(_),m.add(_),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,S=n.count;g<S;g+=3)a.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),d.fromBufferAttribute(n,g+2),_.subVectors(d,c),x.subVectors(a,c),_.cross(x),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(u,p){const m=u.array,_=u.itemSize,x=u.normalized,g=new m.constructor(p.length*_);let S=0,E=0;for(let T=0,y=p.length;T<y;T++){u.isInterleavedBufferAttribute?S=p[T]*u.data.stride+u.offset:S=p[T]*_;for(let v=0;v<_;v++)g[E++]=m[S++]}return new yi(g,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mi,r=this.index.array,a=this.attributes;for(const u in a){const p=a[u],m=e(p,r);n.setAttribute(u,m)}const c=this.morphAttributes;for(const u in c){const p=[],m=c[u];for(let _=0,x=m.length;_<x;_++){const g=m[_],S=e(g,r);p.push(S)}n.morphAttributes[u]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let u=0,p=d.length;u<p;u++){const m=d[u];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,g=m.length;x<g;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],x=c[m];for(let g=0,S=x.length;g<S;g++)_.push(x[g].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new Ht,Vr=new cg,dl=new Ul,sm=new Q,fl=new Q,hl=new Q,pl=new Q,Hu=new Q,ml=new Q,om=new Q,gl=new Q;class zn extends Nn{constructor(e=new Mi,n=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const u=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(c&&u){ml.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=u[p],x=c[p];_!==0&&(Hu.fromBufferAttribute(x,e),d?ml.addScaledVector(Hu,_):ml.addScaledVector(Hu.sub(n),_))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dl.copy(r.boundingSphere),dl.applyMatrix4(c),Vr.copy(e.ray).recast(e.near),!(dl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(dl,sm)===null||Vr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(c).invert(),Vr.copy(e.ray).applyMatrix4(rm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,u=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,S=c.drawRange;if(u!==null)if(Array.isArray(d))for(let E=0,T=g.length;E<T;E++){const y=g[E],v=d[y.materialIndex],A=Math.max(y.start,S.start),L=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let b=A,V=L;b<V;b+=3){const U=u.getX(b),F=u.getX(b+1),H=u.getX(b+2);a=vl(this,v,e,r,m,_,x,U,F,H),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(u.count,S.start+S.count);for(let y=E,v=T;y<v;y+=3){const A=u.getX(y),L=u.getX(y+1),b=u.getX(y+2);a=vl(this,d,e,r,m,_,x,A,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,T=g.length;E<T;E++){const y=g[E],v=d[y.materialIndex],A=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let b=A,V=L;b<V;b+=3){const U=b,F=b+1,H=b+2;a=vl(this,v,e,r,m,_,x,U,F,H),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let y=E,v=T;y<v;y+=3){const A=y,L=y+1,b=y+2;a=vl(this,d,e,r,m,_,x,A,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function W_(s,e,n,r,a,c,d,u){let p;if(e.side===bn?p=r.intersectTriangle(d,c,a,!0,u):p=r.intersectTriangle(a,c,d,e.side===wr,u),p===null)return null;gl.copy(u),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function vl(s,e,n,r,a,c,d,u,p,m){s.getVertexPosition(u,fl),s.getVertexPosition(p,hl),s.getVertexPosition(m,pl);const _=W_(s,e,n,r,fl,hl,pl,om);if(_){const x=new Q;ci.getBarycoord(om,fl,hl,pl,x),a&&(_.uv=ci.getInterpolatedAttribute(a,u,p,m,x,new Mt)),c&&(_.uv1=ci.getInterpolatedAttribute(c,u,p,m,x,new Mt)),d&&(_.normal=ci.getInterpolatedAttribute(d,u,p,m,x,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:u,b:p,c:m,normal:new Q,materialIndex:0};ci.getNormal(fl,hl,pl,g.normal),_.face=g,_.barycoord=x}return _}class qo extends Mi{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const u=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],_=[],x=[];let g=0,S=0;E("z","y","x",-1,-1,r,n,e,d,c,0),E("z","y","x",1,-1,r,n,-e,d,c,1),E("x","z","y",1,1,e,r,n,a,d,2),E("x","z","y",1,-1,e,r,-n,a,d,3),E("x","y","z",1,-1,e,n,r,a,c,4),E("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(x,2));function E(T,y,v,A,L,b,V,U,F,H,P){const C=b/F,z=V/H,se=b/2,J=V/2,le=U/2,me=F+1,ae=H+1;let de=0,k=0;const ce=new Q;for(let re=0;re<ae;re++){const O=re*z-J;for(let ie=0;ie<me;ie++){const De=ie*C-se;ce[T]=De*A,ce[y]=O*L,ce[v]=le,m.push(ce.x,ce.y,ce.z),ce[T]=0,ce[y]=0,ce[v]=U>0?1:-1,_.push(ce.x,ce.y,ce.z),x.push(ie/F),x.push(1-re/H),de+=1}}for(let re=0;re<H;re++)for(let O=0;O<F;O++){const ie=g+O+me*re,De=g+O+me*(re+1),K=g+(O+1)+me*(re+1),ue=g+(O+1)+me*re;p.push(ie,De,ue),p.push(De,K,ue),k+=6}u.addGroup(S,k,P),S+=k,g+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=qs(s[n]);for(const a in r)e[a]=r[a]}return e}function j_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function pg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const X_={clone:qs,merge:_n};var $_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends $o{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=j_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class mg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new Q,am=new Mt,lm=new Mt;class Zn extends mg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,am,lm),n.subVectors(lm,am)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const u=this.filmOffset;u!==0&&(c+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Fs=1;class Y_ extends Nn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Us,Fs,e,n);a.layers=this.layers,this.add(a);const c=new Zn(Us,Fs,e,n);c.layers=this.layers,this.add(c);const d=new Zn(Us,Fs,e,n);d.layers=this.layers,this.add(d);const u=new Zn(Us,Fs,e,n);u.layers=this.layers,this.add(u);const p=new Zn(Us,Fs,e,n);p.layers=this.layers,this.add(p);const m=new Zn(Us,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,u,p]=n;for(const m of n)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,u,p,m,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,u),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,g,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class gg extends Pn{constructor(e,n,r,a,c,d,u,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,r,a,c,d,u,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new gg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new qo(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:Mr});c.uniforms.tEquirect.value=n;const d=new zn(a,c),u=n.minFilter;return n.minFilter===Kr&&(n.minFilter=xi),new Y_(1,10,this).update(e,d),n.minFilter=u,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}const Gu=new Q,Z_=new Q,Q_=new at;class jr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Gu.subVectors(r,n).cross(Z_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Gu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Q_.getNormalMatrix(e),a=this.coplanarPoint(Gu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Ul,_l=new Q;class vg{constructor(e=new jr,n=new jr,r=new jr,a=new jr,c=new jr,d=new jr){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(r),u[3].copy(a),u[4].copy(c),u[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Hi){const r=this.planes,a=e.elements,c=a[0],d=a[1],u=a[2],p=a[3],m=a[4],_=a[5],x=a[6],g=a[7],S=a[8],E=a[9],T=a[10],y=a[11],v=a[12],A=a[13],L=a[14],b=a[15];if(r[0].setComponents(p-c,g-m,y-S,b-v).normalize(),r[1].setComponents(p+c,g+m,y+S,b+v).normalize(),r[2].setComponents(p+d,g+_,y+E,b+A).normalize(),r[3].setComponents(p-d,g-_,y-E,b-A).normalize(),r[4].setComponents(p-u,g-x,y-T,b-L).normalize(),n===Hi)r[5].setComponents(p+u,g+x,y+T,b+L).normalize();else if(n===Pl)r[5].setComponents(u,x,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _g(){let s=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function J_(s){const e=new WeakMap;function n(u,p){const m=u.array,_=u.usage,x=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,_),u.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)u.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:u.version,size:x}}function r(u,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,u),x.length===0)s.bufferSubData(m,0,_);else{x.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<x.length;S++){const E=x[g],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++g,x[g]=T)}x.length=g+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function c(u){u.isInterleavedBufferAttribute&&(u=u.data);const p=e.get(u);p&&(s.deleteBuffer(p.buffer),e.delete(u))}function d(u,p){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const _=e.get(u);(!_||_.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const m=e.get(u);if(m===void 0)e.set(u,n(u,p));else if(m.version<u.version){if(m.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,u,p),m.version=u.version}}return{get:a,remove:c,update:d}}class Fl extends Mi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,u=Math.floor(r),p=Math.floor(a),m=u+1,_=p+1,x=e/u,g=n/p,S=[],E=[],T=[],y=[];for(let v=0;v<_;v++){const A=v*g-d;for(let L=0;L<m;L++){const b=L*x-c;E.push(b,-A,0),T.push(0,0,1),y.push(L/u),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let A=0;A<u;A++){const L=A+m*v,b=A+m*(v+1),V=A+1+m*(v+1),U=A+1+m*v;S.push(L,b,U),S.push(b,V,U)}this.setIndex(S),this.setAttribute("position",new Bn(E,3)),this.setAttribute("normal",new Bn(T,3)),this.setAttribute("uv",new Bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.widthSegments,e.heightSegments)}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,px=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ex=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Px="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,by=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,By=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_S=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:ex,alphahash_pars_fragment:tx,alphamap_fragment:nx,alphamap_pars_fragment:ix,alphatest_fragment:rx,alphatest_pars_fragment:sx,aomap_fragment:ox,aomap_pars_fragment:ax,batching_pars_vertex:lx,batching_vertex:cx,begin_vertex:ux,beginnormal_vertex:dx,bsdfs:fx,iridescence_fragment:hx,bumpmap_pars_fragment:px,clipping_planes_fragment:mx,clipping_planes_pars_fragment:gx,clipping_planes_pars_vertex:vx,clipping_planes_vertex:_x,color_fragment:xx,color_pars_fragment:yx,color_pars_vertex:Sx,color_vertex:Mx,common:Ex,cube_uv_reflection_fragment:wx,defaultnormal_vertex:Tx,displacementmap_pars_vertex:Ax,displacementmap_vertex:Rx,emissivemap_fragment:Cx,emissivemap_pars_fragment:bx,colorspace_fragment:Px,colorspace_pars_fragment:Nx,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Ux,envmap_physical_pars_fragment:Xx,envmap_vertex:Fx,fog_vertex:Ox,fog_pars_vertex:kx,fog_fragment:zx,fog_pars_fragment:Bx,gradientmap_pars_fragment:Vx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Wx,lights_pars_begin:jx,lights_toon_fragment:$x,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:Kx,lights_physical_fragment:Zx,lights_physical_pars_fragment:Qx,lights_fragment_begin:Jx,lights_fragment_maps:ey,lights_fragment_end:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:oy,map_pars_fragment:ay,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:dy,morphinstance_vertex:fy,morphcolor_vertex:hy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:vy,normal_fragment_maps:_y,normal_pars_fragment:xy,normal_pars_vertex:yy,normal_vertex:Sy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:Ry,packing:Cy,premultiplied_alpha_fragment:by,project_vertex:Py,dithering_fragment:Ny,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Oy,shadowmask_pars_fragment:ky,skinbase_vertex:zy,skinning_pars_vertex:By,skinning_vertex:Vy,skinnormal_vertex:Hy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:jy,tonemapping_pars_fragment:Xy,transmission_fragment:$y,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:Ky,uv_vertex:Zy,worldpos_vertex:Qy,background_vert:Jy,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:rS,depth_vert:sS,depth_frag:oS,distanceRGBA_vert:aS,distanceRGBA_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:dS,linedashed_frag:fS,meshbasic_vert:hS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:vS,meshmatcap_frag:_S,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:ES,meshphysical_frag:wS,meshtoon_vert:TS,meshtoon_frag:AS,points_vert:RS,points_frag:CS,shadow_vert:bS,shadow_frag:PS,sprite_vert:NS,sprite_frag:LS},be={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},_i={basic:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:_n([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:_n([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:_n([be.points,be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:_n([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:_n([be.common,be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:_n([be.sprite,be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:_n([be.common,be.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:_n([be.lights,be.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};_i.physical={uniforms:_n([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const xl={r:0,b:0,g:0},Gr=new ji,DS=new Ht;function IS(s,e,n,r,a,c,d){const u=new Rt(0);let p=c===!0?0:1,m,_,x=null,g=0,S=null;function E(A){let L=A.isScene===!0?A.background:null;return L&&L.isTexture&&(L=(A.backgroundBlurriness>0?n:e).get(L)),L}function T(A){let L=!1;const b=E(A);b===null?v(u,p):b&&b.isColor&&(v(b,1),L=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(A,L){const b=E(L);b&&(b.isCubeTexture||b.mapping===Dl)?(_===void 0&&(_=new zn(new qo(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:qs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(V,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Gr.copy(L.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.material.uniforms.envMap.value=b,_.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(Gr)),_.material.toneMapped=xt.getTransfer(b.colorSpace)!==bt,(x!==b||g!==b.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=b,g=b.version,S=s.toneMapping),_.layers.enableAll(),A.unshift(_,_.geometry,_.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new zn(new Fl(2,2),new Xi({name:"BackgroundMaterial",uniforms:qs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=xt.getTransfer(b.colorSpace)!==bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(x!==b||g!==b.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=b,g=b.version,S=s.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function v(A,L){A.getRGB(xl,pg(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,L,d)}return{getClearColor:function(){return u},setClearColor:function(A,L=1){u.set(A),p=L,v(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,v(u,p)},render:T,addToRenderList:y}}function US(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let c=a,d=!1;function u(C,z,se,J,le){let me=!1;const ae=x(J,se,z);c!==ae&&(c=ae,m(c.object)),me=S(C,J,se,le),me&&E(C,J,se,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(me||d)&&(d=!1,b(C,z,se,J),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function x(C,z,se){const J=se.wireframe===!0;let le=r[C.id];le===void 0&&(le={},r[C.id]=le);let me=le[z.id];me===void 0&&(me={},le[z.id]=me);let ae=me[J];return ae===void 0&&(ae=g(p()),me[J]=ae),ae}function g(C){const z=[],se=[],J=[];for(let le=0;le<n;le++)z[le]=0,se[le]=0,J[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:se,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,z,se,J){const le=c.attributes,me=z.attributes;let ae=0;const de=se.getAttributes();for(const k in de)if(de[k].location>=0){const re=le[k];let O=me[k];if(O===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),re===void 0||re.attribute!==O||O&&re.data!==O.data)return!0;ae++}return c.attributesNum!==ae||c.index!==J}function E(C,z,se,J){const le={},me=z.attributes;let ae=0;const de=se.getAttributes();for(const k in de)if(de[k].location>=0){let re=me[k];re===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const O={};O.attribute=re,re&&re.data&&(O.data=re.data),le[k]=O,ae++}c.attributes=le,c.attributesNum=ae,c.index=J}function T(){const C=c.newAttributes;for(let z=0,se=C.length;z<se;z++)C[z]=0}function y(C){v(C,0)}function v(C,z){const se=c.newAttributes,J=c.enabledAttributes,le=c.attributeDivisors;se[C]=1,J[C]===0&&(s.enableVertexAttribArray(C),J[C]=1),le[C]!==z&&(s.vertexAttribDivisor(C,z),le[C]=z)}function A(){const C=c.newAttributes,z=c.enabledAttributes;for(let se=0,J=z.length;se<J;se++)z[se]!==C[se]&&(s.disableVertexAttribArray(se),z[se]=0)}function L(C,z,se,J,le,me,ae){ae===!0?s.vertexAttribIPointer(C,z,se,le,me):s.vertexAttribPointer(C,z,se,J,le,me)}function b(C,z,se,J){T();const le=J.attributes,me=se.getAttributes(),ae=z.defaultAttributeValues;for(const de in me){const k=me[de];if(k.location>=0){let ce=le[de];if(ce===void 0&&(de==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),de==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const re=ce.normalized,O=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const De=ie.buffer,K=ie.type,ue=ie.bytesPerElement,Ee=K===s.INT||K===s.UNSIGNED_INT||ce.gpuType===Gd;if(ce.isInterleavedBufferAttribute){const xe=ce.data,Ae=xe.stride,Ie=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<k.locationSize;Qe++)v(k.location+Qe,xe.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<k.locationSize;Qe++)y(k.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Qe=0;Qe<k.locationSize;Qe++)L(k.location+Qe,O/k.locationSize,K,re,Ae*ue,(Ie+O/k.locationSize*Qe)*ue,Ee)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)v(k.location+xe,ce.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<k.locationSize;xe++)y(k.location+xe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let xe=0;xe<k.locationSize;xe++)L(k.location+xe,O/k.locationSize,K,re,O*ue,O/k.locationSize*xe*ue,Ee)}}else if(ae!==void 0){const re=ae[de];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}A()}function V(){H();for(const C in r){const z=r[C];for(const se in z){const J=z[se];for(const le in J)_(J[le].object),delete J[le];delete z[se]}delete r[C]}}function U(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const se in z){const J=z[se];for(const le in J)_(J[le].object),delete J[le];delete z[se]}delete r[C.id]}function F(C){for(const z in r){const se=r[z];if(se[C.id]===void 0)continue;const J=se[C.id];for(const le in J)_(J[le].object),delete J[le];delete se[C.id]}}function H(){P(),d=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:H,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:U,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:A}}function FS(s,e,n){let r;function a(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function d(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function u(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];n.update(S,r,1)}function p(m,_,x,g){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)d(m[E],_[E],g[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,g,0,x);let E=0;for(let T=0;T<x;T++)E+=_[T]*g[T];n.update(E,r,1)}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function OS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(F){return!(F!==ui&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const H=F===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!H)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,g=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:u,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:V,maxSamples:U}}function kS(s){const e=this;let n=null,r=0,a=!1,c=!1;const d=new jr,u=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const S=x.length!==0||g||r!==0||a;return a=g,r=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){n=_(x,g,0)},this.setState=function(x,g,S){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,v=s.get(x);if(!a||E===null||E.length===0||c&&!y)c?_(null):m();else{const A=c?0:r,L=A*4;let b=v.clippingState||null;p.value=b,b=_(E,g,L,S);for(let V=0;V!==L;++V)b[V]=n[V];v.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=A}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,g,S,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const v=S+T*4,A=g.matrixWorldInverse;u.getNormalMatrix(A),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,b=S;L!==T;++L,b+=4)d.copy(x[L]).applyMatrix4(A,u),d.normal.toArray(y,b),y[b+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function zS(s){let e=new WeakMap;function n(d,u){return u===ad?d.mapping=Ws:u===ld&&(d.mapping=js),d}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===ad||u===ld)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new K_(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const u=d.target;u.removeEventListener("dispose",a);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class BS extends mg{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,u=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,u-=_*this.view.offsetY,p=u-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,u,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,cm=[.125,.215,.35,.446,.526,.582],qr=20,Wu=new BS,um=new Rt;let ju=null,Xu=0,$u=0,qu=!1;const Xr=(1+Math.sqrt(5))/2,Os=1/Xr,dm=[new Q(-Xr,Os,0),new Q(Xr,Os,0),new Q(-Os,0,Xr),new Q(Os,0,Xr),new Q(0,Xr,-Os),new Q(0,Xr,Os),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Xu,$u),this._renderer.xr.enabled=qu,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Go,format:ui,colorSpace:Ys,depthBuffer:!1},a=hm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VS(c)),this._blurMaterial=HS(c,e,n)}return a}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,Wu)}_sceneToCubeUV(e,n,r,a){const u=new Zn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,g=_.toneMapping;_.getClearColor(um),_.toneMapping=Er,_.autoClear=!1;const S=new ks({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),E=new zn(new qo,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(um),T=!0);for(let v=0;v<6;v++){const A=v%3;A===0?(u.up.set(0,p[v],0),u.lookAt(m[v],0,0)):A===1?(u.up.set(0,0,p[v]),u.lookAt(0,m[v],0)):(u.up.set(0,p[v],0),u.lookAt(0,0,m[v]));const L=this._cubeSize;yl(a,A*L,v>2?L:0,L,L),_.setRenderTarget(a),T&&_.render(E,u),_.render(e,u)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=g,_.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Ws||e.mapping===js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new zn(this._lodPlanes[0],c),u=c.uniforms;u.envMap.value=e;const p=this._cubeSize;yl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Wu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),u=dm[(a-c-1)%dm.length];this._blur(e,c-1,c,d,u)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,u){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new zn(this._lodPlanes[a],m),g=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*qr-1),T=c/E,y=isFinite(c)?1+Math.floor(_*T):qr;y>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const v=[];let A=0;for(let F=0;F<qr;++F){const H=F/T,P=Math.exp(-H*H/2);v.push(P),F===0?A+=P:F<y&&(A+=2*P)}for(let F=0;F<v.length;F++)v[F]=v[F]/A;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=d==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-r;const b=this._sizeLods[a],V=3*b*(a>L-zs?a-L+zs:0),U=4*(this._cubeSize-b);yl(n,V,U,3*b,2*b),p.setRenderTarget(n),p.render(x,Wu)}}function VS(s){const e=[],n=[],r=[];let a=s;const c=s-zs+1+cm.length;for(let d=0;d<c;d++){const u=Math.pow(2,a);n.push(u);let p=1/u;d>s-zs?p=cm[d-s+zs-1]:d===0&&(p=0),r.push(p);const m=1/(u-2),_=-m,x=1+m,g=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,T=3,y=2,v=1,A=new Float32Array(T*E*S),L=new Float32Array(y*E*S),b=new Float32Array(v*E*S);for(let U=0;U<S;U++){const F=U%3*2/3-1,H=U>2?0:-1,P=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];A.set(P,T*E*U),L.set(g,y*E*U);const C=[U,U,U,U,U,U];b.set(C,v*E*U)}const V=new Mi;V.setAttribute("position",new yi(A,T)),V.setAttribute("uv",new yi(L,y)),V.setAttribute("faceIndex",new yi(b,v)),e.push(V),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function hm(s,e,n){const r=new Qr(s,e,n);return r.texture.mapping=Dl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function HS(s,e,n){const r=new Float32Array(qr),a=new Q(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function pm(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function mm(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GS(s){let e=new WeakMap,n=null;function r(u){if(u&&u.isTexture){const p=u.mapping,m=p===ad||p===ld,_=p===Ws||p===js;if(m||_){let x=e.get(u);const g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new fm(s)),x=m?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),x.texture;if(x!==void 0)return x.texture;{const S=u.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new fm(s)),x=m?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),u.addEventListener("dispose",c),x.texture):null}}}return u}function a(u){let p=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function WS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Oo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function jS(s,e,n,r){const a={},c=new WeakMap;function d(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const T=g.morphAttributes[E];for(let y=0,v=T.length;y<v;y++)e.remove(T[y])}g.removeEventListener("dispose",d),delete a[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function u(x,g){return a[g.id]===!0||(g.addEventListener("dispose",d),a[g.id]=!0,n.memory.geometries++),g}function p(x){const g=x.attributes;for(const E in g)e.update(g[E],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const E in S){const T=S[E];for(let y=0,v=T.length;y<v;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(x){const g=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const A=S.array;T=S.version;for(let L=0,b=A.length;L<b;L+=3){const V=A[L+0],U=A[L+1],F=A[L+2];g.push(V,U,U,F,F,V)}}else if(E!==void 0){const A=E.array;T=E.version;for(let L=0,b=A.length/3-1;L<b;L+=3){const V=L+0,U=L+1,F=L+2;g.push(V,U,U,F,F,V)}}else return;const y=new(og(g)?hg:fg)(g,1);y.version=T;const v=c.get(x);v&&e.remove(v),c.set(x,y)}function _(x){const g=c.get(x);if(g){const S=x.index;S!==null&&g.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:u,update:p,getWireframeAttribute:_}}function XS(s,e,n){let r;function a(g){r=g}let c,d;function u(g){c=g.type,d=g.bytesPerElement}function p(g,S){s.drawElements(r,S,c,g*d),n.update(S,r,1)}function m(g,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,g*d,E),n.update(S,r,E))}function _(g,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,g,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];n.update(y,r,1)}function x(g,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<g.length;v++)m(g[v]/d,S[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,g,0,T,0,E);let v=0;for(let A=0;A<E;A++)v+=S[A]*T[A];n.update(v,r,1)}}this.setMode=a,this.setIndex=u,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function $S(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,u){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=u*(c/3);break;case s.LINES:n.lines+=u*(c/2);break;case s.LINE_STRIP:n.lines+=u*(c-1);break;case s.LINE_LOOP:n.lines+=u*c;break;case s.POINTS:n.points+=u*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function qS(s,e,n){const r=new WeakMap,a=new Vt;function c(d,u,p){const m=d.morphTargetInfluences,_=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let g=r.get(u);if(g===void 0||g.count!==x){let P=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),T===!0&&(L=3);let b=u.attributes.position.count*L,V=1;b>e.maxTextureSize&&(V=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const U=new Float32Array(b*V*4*x),F=new lg(U,b,V,x);F.type=Vi,F.needsUpdate=!0;const H=L*4;for(let C=0;C<x;C++){const z=y[C],se=v[C],J=A[C],le=b*V*4*C;for(let me=0;me<z.count;me++){const ae=me*H;S===!0&&(a.fromBufferAttribute(z,me),U[le+ae+0]=a.x,U[le+ae+1]=a.y,U[le+ae+2]=a.z,U[le+ae+3]=0),E===!0&&(a.fromBufferAttribute(se,me),U[le+ae+4]=a.x,U[le+ae+5]=a.y,U[le+ae+6]=a.z,U[le+ae+7]=0),T===!0&&(a.fromBufferAttribute(J,me),U[le+ae+8]=a.x,U[le+ae+9]=a.y,U[le+ae+10]=a.z,U[le+ae+11]=J.itemSize===4?a.w:1)}}g={count:x,texture:F,size:new Mt(b,V)},r.set(u,g),u.addEventListener("dispose",P)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let S=0;for(let T=0;T<m.length;T++)S+=m[T];const E=u.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function YS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",u)===!1&&p.addEventListener("dispose",u),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const g=p.skeleton;a.get(g)!==m&&(g.update(),a.set(g,m))}return x}function d(){a=new WeakMap}function u(p){const m=p.target;m.removeEventListener("dispose",u),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class xg extends Pn{constructor(e,n,r,a,c,d,u,p,m,_=Vs){if(_!==Vs&&_!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Vs&&(r=Zr),r===void 0&&_===$s&&(r=Xs),super(null,a,c,d,u,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:di,this.minFilter=p!==void 0?p:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const yg=new Pn,gm=new xg(1,1),Sg=new lg,Mg=new I_,Eg=new gg,vm=[],_m=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=vm[a];if(c===void 0&&(c=new Float32Array(a),vm[a]=c),e!==0){r.toArray(c,0);for(let d=1,u=0;d!==e;++d)u+=n,s[d].toArray(c,u)}return c}function Yt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ol(s,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function KS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function ZS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function eM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,r))return;Sm.set(r),s.uniformMatrix2fv(this.addr,!1,Sm),Kt(n,r)}}function tM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,r))return;ym.set(r),s.uniformMatrix3fv(this.addr,!1,ym),Kt(n,r)}}function nM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,r))return;xm.set(r),s.uniformMatrix4fv(this.addr,!1,xm),Kt(n,r)}}function iM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function aM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function dM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(gm.compareFunction=sg,c=gm):c=yg,n.setTexture2D(e||c,a)}function fM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Mg,a)}function hM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Eg,a)}function pM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Sg,a)}function mM(s){switch(s){case 5126:return KS;case 35664:return ZS;case 35665:return QS;case 35666:return JS;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(s,e){s.uniform1fv(this.addr,e)}function vM(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function _M(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function xM(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function yM(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function SM(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function MM(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function EM(s,e){s.uniform1iv(this.addr,e)}function wM(s,e){s.uniform2iv(this.addr,e)}function TM(s,e){s.uniform3iv(this.addr,e)}function AM(s,e){s.uniform4iv(this.addr,e)}function RM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function bM(s,e){s.uniform3uiv(this.addr,e)}function PM(s,e){s.uniform4uiv(this.addr,e)}function NM(s,e,n){const r=this.cache,a=e.length,c=Ol(n,a);Yt(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||yg,c[d])}function LM(s,e,n){const r=this.cache,a=e.length,c=Ol(n,a);Yt(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Mg,c[d])}function DM(s,e,n){const r=this.cache,a=e.length,c=Ol(n,a);Yt(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||Eg,c[d])}function IM(s,e,n){const r=this.cache,a=e.length,c=Ol(n,a);Yt(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Sg,c[d])}function UM(s){switch(s){case 5126:return gM;case 35664:return vM;case 35665:return _M;case 35666:return xM;case 35674:return yM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return EM;case 35667:case 35671:return wM;case 35668:case 35672:return TM;case 35669:case 35673:return AM;case 5125:return RM;case 36294:return CM;case 36295:return bM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return IM}}class FM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=mM(n.type)}}class OM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UM(n.type)}}class kM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const u=a[c];u.setValue(e,n[u.id],r)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function Mm(s,e){s.seq.push(e),s.map[e.id]=e}function zM(s,e,n){const r=s.name,a=r.length;for(Yu.lastIndex=0;;){const c=Yu.exec(r),d=Yu.lastIndex;let u=c[1];const p=c[2]==="]",m=c[3];if(p&&(u=u|0),m===void 0||m==="["&&d+2===a){Mm(n,m===void 0?new FM(u,s,e):new OM(u,s,e));break}else{let x=n.map[u];x===void 0&&(x=new kM(u),Mm(n,x)),n=x}}}class bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);zM(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const u=n[c],p=r[u.id];p.needsUpdate!==!1&&u.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const BM=37297;let VM=0;function HM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const u=d+1;r.push(`${u===e?">":" "} ${u}: ${n[d]}`)}return r.join(`
`)}const wm=new at;function GM(s){xt._getMatrix(wm,xt.workingColorSpace,s);const e=`mat3( ${wm.elements.map(n=>n.toFixed(4))} )`;switch(xt.getTransfer(s)){case Il:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+HM(s.getShaderSource(e),d)}else return a}function WM(s,e){const n=GM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jM(s,e){let n;switch(e){case o_:n="Linear";break;case a_:n="Reinhard";break;case l_:n="Cineon";break;case c_:n="ACESFilmic";break;case d_:n="AgX";break;case f_:n="Neutral";break;case u_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new Q;function XM(){xt.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function qM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function YM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),d=c.name;let u=1;c.type===s.FLOAT_MAT2&&(u=2),c.type===s.FLOAT_MAT3&&(u=3),c.type===s.FLOAT_MAT4&&(u=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:u}}return n}function ko(s){return s!==""}function Am(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(s){return s.replace(KM,QM)}const ZM=new Map;function QM(s,e){let n=lt[e];if(n===void 0){const r=ZM.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kd(n)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(s){return s.replace(JM,eE)}function eE(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===zv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function nE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ws:case js:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function rE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $m:e="ENVMAP_BLENDING_MULTIPLY";break;case r_:e="ENVMAP_BLENDING_MIX";break;case s_:e="ENVMAP_BLENDING_ADD";break}return e}function sE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function oE(s,e,n,r){const a=s.getContext(),c=n.defines;let d=n.vertexShader,u=n.fragmentShader;const p=tE(n),m=nE(n),_=iE(n),x=rE(n),g=sE(n),S=$M(n),E=qM(c),T=a.createProgram();let y,v,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ko).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ko).join(`
`),v.length>0&&(v+=`
`)):(y=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),v=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?lt.tonemapping_pars_fragment:"",n.toneMapping!==Er?jM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,WM("linearToOutputTexel",n.outputColorSpace),XM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),d=kd(d),d=Am(d,n),d=Rm(d,n),u=kd(u),u=Am(u,n),u=Rm(u,n),d=Cm(d),u=Cm(u),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=A+y+d,b=A+v+u,V=Em(a,a.VERTEX_SHADER,L),U=Em(a,a.FRAGMENT_SHADER,b);a.attachShader(T,V),a.attachShader(T,U),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(z){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(T).trim(),J=a.getShaderInfoLog(V).trim(),le=a.getShaderInfoLog(U).trim();let me=!0,ae=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,V,U);else{const de=Tm(a,V,"vertex"),k=Tm(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+se+`
`+de+`
`+k)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(J===""||le==="")&&(ae=!1);ae&&(z.diagnostics={runnable:me,programLog:se,vertexShader:{log:J,prefix:y},fragmentShader:{log:le,prefix:v}})}a.deleteShader(V),a.deleteShader(U),H=new bl(a,T),P=YM(a,T)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,BM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=U,this}let aE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new cE(e),n.set(e,r)),r}}class cE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function uE(s,e,n,r,a,c,d){const u=new ug,p=new lE,m=new Set,_=[],x=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,C,z,se,J){const le=se.fog,me=J.geometry,ae=P.isMeshStandardMaterial?se.environment:null,de=(P.isMeshStandardMaterial?n:e).get(P.envMap||ae),k=de&&de.mapping===Dl?de.image.height:null,ce=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,O=re!==void 0?re.length:0;let ie=0;me.morphAttributes.position!==void 0&&(ie=1),me.morphAttributes.normal!==void 0&&(ie=2),me.morphAttributes.color!==void 0&&(ie=3);let De,K,ue,Ee;if(ce){const vt=_i[ce];De=vt.vertexShader,K=vt.fragmentShader}else De=P.vertexShader,K=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),Ee=p.getFragmentShaderID(P);const xe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=J.isInstancedMesh===!0,Qe=J.isBatchedMesh===!0,Ct=!!P.map,pt=!!P.matcap,Nt=!!de,$=!!P.aoMap,hn=!!P.lightMap,ht=!!P.bumpMap,ut=!!P.normalMap,Ye=!!P.displacementMap,Tt=!!P.emissiveMap,qe=!!P.metalnessMap,D=!!P.roughnessMap,R=P.anisotropy>0,Z=P.clearcoat>0,pe=P.dispersion>0,ve=P.iridescence>0,fe=P.sheen>0,He=P.transmission>0,Re=R&&!!P.anisotropyMap,Ue=Z&&!!P.clearcoatMap,ct=Z&&!!P.clearcoatNormalMap,Se=Z&&!!P.clearcoatRoughnessMap,Oe=ve&&!!P.iridescenceMap,Je=ve&&!!P.iridescenceThicknessMap,et=fe&&!!P.sheenColorMap,ke=fe&&!!P.sheenRoughnessMap,dt=!!P.specularMap,rt=!!P.specularColorMap,wt=!!P.specularIntensityMap,W=He&&!!P.transmissionMap,Ce=He&&!!P.thicknessMap,oe=!!P.gradientMap,he=!!P.alphaMap,Ne=P.alphaTest>0,Pe=!!P.alphaHash,st=!!P.extensions;let Dt=Er;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const jt={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:K,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&J._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&J.instanceColor!==null,instancingMorph:Ie&&J.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ys,alphaToCoverage:!!P.alphaToCoverage,map:Ct,matcap:pt,envMap:Nt,envMapMode:Nt&&de.mapping,envMapCubeUVHeight:k,aoMap:$,lightMap:hn,bumpMap:ht,normalMap:ut,displacementMap:g&&Ye,emissiveMap:Tt,normalMapObjectSpace:ut&&P.normalMapType===v_,normalMapTangentSpace:ut&&P.normalMapType===g_,metalnessMap:qe,roughnessMap:D,anisotropy:R,anisotropyMap:Re,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:ct,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:Je,sheen:fe,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:rt,specularIntensityMap:wt,transmission:He,transmissionMap:W,thicknessMap:Ce,gradientMap:oe,opaque:P.transparent===!1&&P.blending===Bs&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Ne,alphaHash:Pe,combine:P.combine,mapUv:Ct&&T(P.map.channel),aoMapUv:$&&T(P.aoMap.channel),lightMapUv:hn&&T(P.lightMap.channel),bumpMapUv:ht&&T(P.bumpMap.channel),normalMapUv:ut&&T(P.normalMap.channel),displacementMapUv:Ye&&T(P.displacementMap.channel),emissiveMapUv:Tt&&T(P.emissiveMap.channel),metalnessMapUv:qe&&T(P.metalnessMap.channel),roughnessMapUv:D&&T(P.roughnessMap.channel),anisotropyMapUv:Re&&T(P.anisotropyMap.channel),clearcoatMapUv:Ue&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(P.sheenRoughnessMap.channel),specularMapUv:dt&&T(P.specularMap.channel),specularColorMapUv:rt&&T(P.specularColorMap.channel),specularIntensityMapUv:wt&&T(P.specularIntensityMap.channel),transmissionMapUv:W&&T(P.transmissionMap.channel),thicknessMapUv:Ce&&T(P.thicknessMap.channel),alphaMapUv:he&&T(P.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ut||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!me.attributes.uv&&(Ct||he),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ae,skinning:J.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ct&&P.map.isVideoTexture===!0&&xt.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&xt.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Bi,flipSided:P.side===bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function v(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(A(C,P),L(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function A(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reverseDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),P.push(u.mask)}function b(P){const C=E[P.type];let z;if(C){const se=_i[C];z=X_.clone(se.uniforms)}else z=P.uniforms;return z}function V(P,C){let z;for(let se=0,J=_.length;se<J;se++){const le=_[se];if(le.cacheKey===C){z=le,++z.usedTimes;break}}return z===void 0&&(z=new oE(s,C,P,c),_.push(z)),z}function U(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function F(P){p.remove(P)}function H(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:b,acquireProgram:V,releaseProgram:U,releaseShaderCache:F,programs:_,dispose:H}}function dE(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let u=s.get(d);return u===void 0&&(u={},s.set(d,u)),u}function r(d){s.delete(d)}function a(d,u,p){s.get(d)[u]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Pm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(x,g,S,E,T,y){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:g,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},s[e]=v):(v.id=x.id,v.object=x,v.geometry=g,v.material=S,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=T,v.group=y),e++,v}function u(x,g,S,E,T,y){const v=d(x,g,S,E,T,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function p(x,g,S,E,T,y){const v=d(x,g,S,E,T,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function m(x,g){n.length>1&&n.sort(x||fE),r.length>1&&r.sort(g||Pm),a.length>1&&a.sort(g||Pm)}function _(){for(let x=e,g=s.length;x<g;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:u,unshift:p,finish:_,sort:m}}function hE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let d;return c===void 0?(d=new Nm,s.set(r,[d])):a>=c.length?(d=new Nm,c.push(d)):d=c[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Rt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let gE=0;function vE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _E(s){const e=new pE,n=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,c=new Ht,d=new Ht;function u(m){let _=0,x=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,T=0,y=0,v=0,A=0,L=0,b=0,V=0,U=0,F=0;m.sort(vE);for(let P=0,C=m.length;P<C;P++){const z=m[P],se=z.color,J=z.intensity,le=z.distance,me=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=se.r*J,x+=se.g*J,g+=se.b*J;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(z.sh.coefficients[ae],J);F++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const de=z.shadow,k=n.get(z);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=me,r.directionalShadowMatrix[S]=z.shadow.matrix,A++}r.directional[S]=ae,S++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(se).multiplyScalar(J),ae.distance=le,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,r.spot[T]=ae;const de=z.shadow;if(z.map&&(r.spotLightMap[V]=z.map,V++,de.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[T]=de.matrix,z.castShadow){const k=n.get(z);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,r.spotShadow[T]=k,r.spotShadowMap[T]=me,b++}T++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(se).multiplyScalar(J),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ae,y++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const de=z.shadow,k=n.get(z);k.shadowIntensity=de.intensity,k.shadowBias=de.bias,k.shadowNormalBias=de.normalBias,k.shadowRadius=de.radius,k.shadowMapSize=de.mapSize,k.shadowCameraNear=de.camera.near,k.shadowCameraFar=de.camera.far,r.pointShadow[E]=k,r.pointShadowMap[E]=me,r.pointShadowMatrix[E]=z.shadow.matrix,L++}r.point[E]=ae,E++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(J),ae.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[v]=ae,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=g;const H=r.hash;(H.directionalLength!==S||H.pointLength!==E||H.spotLength!==T||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==A||H.numPointShadows!==L||H.numSpotShadows!==b||H.numSpotMaps!==V||H.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+V-U,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=F,H.directionalLength=S,H.pointLength=E,H.spotLength=T,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=A,H.numPointShadows=L,H.numSpotShadows=b,H.numSpotMaps=V,H.numLightProbes=F,r.version=gE++)}function p(m,_){let x=0,g=0,S=0,E=0,T=0;const y=_.matrixWorldInverse;for(let v=0,A=m.length;v<A;v++){const L=m[v];if(L.isDirectionalLight){const b=r.directional[x];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),x++}else if(L.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),d.identity(),c.copy(L.matrixWorld),c.premultiply(y),d.extractRotation(c),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(d),b.halfHeight.applyMatrix4(d),E++}else if(L.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const b=r.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(y),T++}}}return{setup:u,setupView:p,state:r}}function Lm(s){const e=new _E(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function d(_){r.push(_)}function u(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:u,setupLightsView:p,pushLight:c,pushShadow:d}}function xE(s){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let u;return d===void 0?(u=new Lm(s),e.set(a,[u])):c>=d.length?(u=new Lm(s),d.push(u)):u=d[c],u}function r(){e=new WeakMap}return{get:n,dispose:r}}class yE extends $o{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=p_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SE extends $o{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ME=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wE(s,e,n){let r=new vg;const a=new Mt,c=new Mt,d=new Vt,u=new yE({depthPacking:m_}),p=new SE,m={},_=n.maxTextureSize,x={[wr]:bn,[bn]:wr,[Bi]:Bi},g=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:ME,fragmentShader:EE}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Mi;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new zn(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xm;let v=this.type;this.render=function(U,F,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Mr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const J=v!==zi&&this.type===zi,le=v===zi&&this.type!==zi;for(let me=0,ae=U.length;me<ae;me++){const de=U[me],k=de.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ce=k.getFrameExtents();if(a.multiply(ce),c.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/ce.x),a.x=c.x*ce.x,k.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/ce.y),a.y=c.y*ce.y,k.mapSize.y=c.y)),k.map===null||J===!0||le===!0){const O=this.type!==zi?{minFilter:di,magFilter:di}:{};k.map!==null&&k.map.dispose(),k.map=new Qr(a.x,a.y,O),k.map.texture.name=de.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let O=0;O<re;O++){const ie=k.getViewport(O);d.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),se.viewport(d),k.updateMatrices(de,O),r=k.getFrustum(),b(F,H,k.camera,de,this.type)}k.isPointLightShadow!==!0&&this.type===zi&&A(k,H),k.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(P,C,z)};function A(U,F){const H=e.update(T);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Qr(a.x,a.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(F,null,H,g,T,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(F,null,H,S,T,null)}function L(U,F,H,P){let C=null;const z=H.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)C=z;else if(C=H.isPointLight===!0?p:u,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const se=C.uuid,J=F.uuid;let le=m[se];le===void 0&&(le={},m[se]=le);let me=le[J];me===void 0&&(me=C.clone(),le[J]=me,F.addEventListener("dispose",V)),C=me}if(C.visible=F.visible,C.wireframe=F.wireframe,P===zi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:x[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const se=s.properties.get(C);se.light=H}return C}function b(U,F,H,P,C){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===zi)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,U.matrixWorld);const J=e.update(U),le=U.material;if(Array.isArray(le)){const me=J.groups;for(let ae=0,de=me.length;ae<de;ae++){const k=me[ae],ce=le[k.materialIndex];if(ce&&ce.visible){const re=L(U,ce,P,C);U.onBeforeShadow(s,U,F,H,J,re,k),s.renderBufferDirect(H,null,J,re,U,k),U.onAfterShadow(s,U,F,H,J,re,k)}}}else if(le.visible){const me=L(U,le,P,C);U.onBeforeShadow(s,U,F,H,J,me,null),s.renderBufferDirect(H,null,J,me,U,null),U.onAfterShadow(s,U,F,H,J,me,null)}}const se=U.children;for(let J=0,le=se.length;J<le;J++)b(se[J],F,H,P,C)}function V(U){U.target.removeEventListener("dispose",V);for(const H in m){const P=m[H],C=U.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const TE={[ed]:td,[nd]:sd,[id]:od,[Gs]:rd,[td]:ed,[sd]:nd,[od]:id,[rd]:Gs};function AE(s,e){function n(){let W=!1;const Ce=new Vt;let oe=null;const he=new Vt(0,0,0,0);return{setMask:function(Ne){oe!==Ne&&!W&&(s.colorMask(Ne,Ne,Ne,Ne),oe=Ne)},setLocked:function(Ne){W=Ne},setClear:function(Ne,Pe,st,Dt,jt){jt===!0&&(Ne*=Dt,Pe*=Dt,st*=Dt),Ce.set(Ne,Pe,st,Dt),he.equals(Ce)===!1&&(s.clearColor(Ne,Pe,st,Dt),he.copy(Ce))},reset:function(){W=!1,oe=null,he.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,oe=null,he=null,Ne=null;return{setReversed:function(Pe){if(Ce!==Pe){const st=e.get("EXT_clip_control");Ce?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Ne;Ne=null,this.setClear(Dt)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?xe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!W&&(s.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(Ce&&(Pe=TE[Pe]),he!==Pe){switch(Pe){case ed:s.depthFunc(s.NEVER);break;case td:s.depthFunc(s.ALWAYS);break;case nd:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case id:s.depthFunc(s.EQUAL);break;case rd:s.depthFunc(s.GEQUAL);break;case sd:s.depthFunc(s.GREATER);break;case od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){Ne!==Pe&&(Ce&&(Pe=1-Pe),s.clearDepth(Pe),Ne=Pe)},reset:function(){W=!1,oe=null,he=null,Ne=null,Ce=!1}}}function a(){let W=!1,Ce=null,oe=null,he=null,Ne=null,Pe=null,st=null,Dt=null,jt=null;return{setTest:function(vt){W||(vt?xe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(vt){Ce!==vt&&!W&&(s.stencilMask(vt),Ce=vt)},setFunc:function(vt,xn,pn){(oe!==vt||he!==xn||Ne!==pn)&&(s.stencilFunc(vt,xn,pn),oe=vt,he=xn,Ne=pn)},setOp:function(vt,xn,pn){(Pe!==vt||st!==xn||Dt!==pn)&&(s.stencilOp(vt,xn,pn),Pe=vt,st=xn,Dt=pn)},setLocked:function(vt){W=vt},setClear:function(vt){jt!==vt&&(s.clearStencil(vt),jt=vt)},reset:function(){W=!1,Ce=null,oe=null,he=null,Ne=null,Pe=null,st=null,Dt=null,jt=null}}}const c=new n,d=new r,u=new a,p=new WeakMap,m=new WeakMap;let _={},x={},g=new WeakMap,S=[],E=null,T=!1,y=null,v=null,A=null,L=null,b=null,V=null,U=null,F=new Rt(0,0,0),H=0,P=!1,C=null,z=null,se=null,J=null,le=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,de=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(k)[1]),ae=de>=1):k.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ae=de>=2);let ce=null,re={};const O=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),De=new Vt().fromArray(O),K=new Vt().fromArray(ie);function ue(W,Ce,oe,he){const Ne=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(W,Pe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<oe;st++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Ce+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Pe}const Ee={};Ee[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),u.setClear(0),xe(s.DEPTH_TEST),d.setFunc(Gs),ht(!1),ut(Op),xe(s.CULL_FACE),$(Mr);function xe(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function Ae(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function Ie(W,Ce){return x[W]!==Ce?(s.bindFramebuffer(W,Ce),x[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(W,Ce){let oe=S,he=!1;if(W){oe=g.get(Ce),oe===void 0&&(oe=[],g.set(Ce,oe));const Ne=W.textures;if(oe.length!==Ne.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,st=Ne.length;Pe<st;Pe++)oe[Pe]=s.COLOR_ATTACHMENT0+Pe;oe.length=Ne.length,he=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,he=!0);he&&s.drawBuffers(oe)}function Ct(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const pt={[$r]:s.FUNC_ADD,[Vv]:s.FUNC_SUBTRACT,[Hv]:s.FUNC_REVERSE_SUBTRACT};pt[Gv]=s.MIN,pt[Wv]=s.MAX;const Nt={[jv]:s.ZERO,[Xv]:s.ONE,[$v]:s.SRC_COLOR,[Qu]:s.SRC_ALPHA,[Jv]:s.SRC_ALPHA_SATURATE,[Zv]:s.DST_COLOR,[Yv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[Ju]:s.ONE_MINUS_SRC_ALPHA,[Qv]:s.ONE_MINUS_DST_COLOR,[Kv]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function $(W,Ce,oe,he,Ne,Pe,st,Dt,jt,vt){if(W===Mr){T===!0&&(Ae(s.BLEND),T=!1);return}if(T===!1&&(xe(s.BLEND),T=!0),W!==Bv){if(W!==y||vt!==P){if((v!==$r||b!==$r)&&(s.blendEquation(s.FUNC_ADD),v=$r,b=$r),vt)switch(W){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zu:s.blendFunc(s.ONE,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}A=null,L=null,V=null,U=null,F.set(0,0,0),H=0,y=W,P=vt}return}Ne=Ne||Ce,Pe=Pe||oe,st=st||he,(Ce!==v||Ne!==b)&&(s.blendEquationSeparate(pt[Ce],pt[Ne]),v=Ce,b=Ne),(oe!==A||he!==L||Pe!==V||st!==U)&&(s.blendFuncSeparate(Nt[oe],Nt[he],Nt[Pe],Nt[st]),A=oe,L=he,V=Pe,U=st),(Dt.equals(F)===!1||jt!==H)&&(s.blendColor(Dt.r,Dt.g,Dt.b,jt),F.copy(Dt),H=jt),y=W,P=!1}function hn(W,Ce){W.side===Bi?Ae(s.CULL_FACE):xe(s.CULL_FACE);let oe=W.side===bn;Ce&&(oe=!oe),ht(oe),W.blending===Bs&&W.transparent===!1?$(Mr):$(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const he=W.stencilWrite;u.setTest(he),he&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Tt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){C!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),C=W)}function ut(W){W!==Ov?(xe(s.CULL_FACE),W!==z&&(W===Op?s.cullFace(s.BACK):W===kv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=W}function Ye(W){W!==se&&(ae&&s.lineWidth(W),se=W)}function Tt(W,Ce,oe){W?(xe(s.POLYGON_OFFSET_FILL),(J!==Ce||le!==oe)&&(s.polygonOffset(Ce,oe),J=Ce,le=oe)):Ae(s.POLYGON_OFFSET_FILL)}function qe(W){W?xe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function D(W){W===void 0&&(W=s.TEXTURE0+me-1),ce!==W&&(s.activeTexture(W),ce=W)}function R(W,Ce,oe){oe===void 0&&(ce===null?oe=s.TEXTURE0+me-1:oe=ce);let he=re[oe];he===void 0&&(he={type:void 0,texture:void 0},re[oe]=he),(he.type!==W||he.texture!==Ce)&&(ce!==oe&&(s.activeTexture(oe),ce=oe),s.bindTexture(W,Ce||Ee[W]),he.type=W,he.texture=Ce)}function Z(){const W=re[ce];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){De.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),De.copy(W))}function ke(W){K.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),K.copy(W))}function dt(W,Ce){let oe=m.get(Ce);oe===void 0&&(oe=new WeakMap,m.set(Ce,oe));let he=oe.get(W);he===void 0&&(he=s.getUniformBlockIndex(Ce,W.name),oe.set(W,he))}function rt(W,Ce){const he=m.get(Ce).get(W);p.get(Ce)!==he&&(s.uniformBlockBinding(Ce,he,W.__bindingPointIndex),p.set(Ce,he))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ce=null,re={},x={},g=new WeakMap,S=[],E=null,T=!1,y=null,v=null,A=null,L=null,b=null,V=null,U=null,F=new Rt(0,0,0),H=0,P=!1,C=null,z=null,se=null,J=null,le=null,De.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),u.reset()}return{buffers:{color:c,depth:d,stencil:u},enable:xe,disable:Ae,bindFramebuffer:Ie,drawBuffers:Qe,useProgram:Ct,setBlending:$,setMaterial:hn,setFlipSided:ht,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:Tt,setScissorTest:qe,activeTexture:D,bindTexture:R,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:He,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:et,viewport:ke,reset:wt}}function Dm(s,e,n,r){const a=RE(r);switch(n){case Qm:return s*e;case eg:return s*e;case tg:return s*e*2;case ng:return s*e/a.components*a.byteLength;case Xd:return s*e/a.components*a.byteLength;case ig:return s*e*2/a.components*a.byteLength;case $d:return s*e*2/a.components*a.byteLength;case Jm:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case qd:return s*e*4/a.components*a.byteLength;case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fd:case pd:return Math.max(s,16)*Math.max(e,8)/4;case dd:case hd:return Math.max(s,8)*Math.max(e,8)/2;case md:case gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Ld:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rg:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ud:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RE(s){switch(s){case Wi:case Ym:return{byteLength:1,components:1};case Ho:case Km:case Go:return{byteLength:2,components:1};case Wd:case jd:return{byteLength:2,components:4};case Zr:case Gd:case Vi:return{byteLength:4,components:1};case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function CE(s,e,n,r,a,c,d){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Mt,_=new WeakMap;let x;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,R){return S?new OffscreenCanvas(D,R):Nl("canvas")}function T(D,R,Z){let pe=1;const ve=qe(D);if((ve.width>Z||ve.height>Z)&&(pe=Z/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(pe*ve.width),He=Math.floor(pe*ve.height);x===void 0&&(x=E(fe,He));const Re=R?E(fe,He):x;return Re.width=fe,Re.height=He,Re.getContext("2d").drawImage(D,0,0,fe,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+He+")."),Re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function A(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,R,Z,pe,ve=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=R;if(R===s.RED&&(Z===s.FLOAT&&(fe=s.R32F),Z===s.HALF_FLOAT&&(fe=s.R16F),Z===s.UNSIGNED_BYTE&&(fe=s.R8)),R===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.R8UI),Z===s.UNSIGNED_SHORT&&(fe=s.R16UI),Z===s.UNSIGNED_INT&&(fe=s.R32UI),Z===s.BYTE&&(fe=s.R8I),Z===s.SHORT&&(fe=s.R16I),Z===s.INT&&(fe=s.R32I)),R===s.RG&&(Z===s.FLOAT&&(fe=s.RG32F),Z===s.HALF_FLOAT&&(fe=s.RG16F),Z===s.UNSIGNED_BYTE&&(fe=s.RG8)),R===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Z===s.UNSIGNED_INT&&(fe=s.RG32UI),Z===s.BYTE&&(fe=s.RG8I),Z===s.SHORT&&(fe=s.RG16I),Z===s.INT&&(fe=s.RG32I)),R===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Z===s.UNSIGNED_INT&&(fe=s.RGB32UI),Z===s.BYTE&&(fe=s.RGB8I),Z===s.SHORT&&(fe=s.RGB16I),Z===s.INT&&(fe=s.RGB32I)),R===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Z===s.BYTE&&(fe=s.RGBA8I),Z===s.SHORT&&(fe=s.RGBA16I),Z===s.INT&&(fe=s.RGBA32I)),R===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),R===s.RGBA){const He=ve?Il:xt.getTransfer(pe);Z===s.FLOAT&&(fe=s.RGBA32F),Z===s.HALF_FLOAT&&(fe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(fe=He===bt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(D,R){let Z;return D?R===null||R===Zr||R===Xs?Z=s.DEPTH24_STENCIL8:R===Vi?Z=s.DEPTH32F_STENCIL8:R===Ho&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Zr||R===Xs?Z=s.DEPTH_COMPONENT24:R===Vi?Z=s.DEPTH_COMPONENT32F:R===Ho&&(Z=s.DEPTH_COMPONENT16),Z}function V(D,R){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==xi?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function U(D){const R=D.target;R.removeEventListener("dispose",U),H(R),R.isVideoTexture&&_.delete(R)}function F(D){const R=D.target;R.removeEventListener("dispose",F),C(R)}function H(D){const R=r.get(D);if(R.__webglInit===void 0)return;const Z=D.source,pe=g.get(Z);if(pe){const ve=pe[R.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(D),Object.keys(pe).length===0&&g.delete(Z)}r.remove(D)}function P(D){const R=r.get(D);s.deleteTexture(R.__webglTexture);const Z=D.source,pe=g.get(Z);delete pe[R.__cacheKey],d.memory.textures--}function C(D){const R=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(R.__webglFramebuffer[pe]))for(let ve=0;ve<R.__webglFramebuffer[pe].length;ve++)s.deleteFramebuffer(R.__webglFramebuffer[pe][ve]);else s.deleteFramebuffer(R.__webglFramebuffer[pe]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[pe])}else{if(Array.isArray(R.__webglFramebuffer))for(let pe=0;pe<R.__webglFramebuffer.length;pe++)s.deleteFramebuffer(R.__webglFramebuffer[pe]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pe=0;pe<R.__webglColorRenderbuffer.length;pe++)R.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[pe]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=D.textures;for(let pe=0,ve=Z.length;pe<ve;pe++){const fe=r.get(Z[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(Z[pe])}r.remove(D)}let z=0;function se(){z=0}function J(){const D=z;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),z+=1,D}function le(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function me(D,R){const Z=r.get(D);if(D.isVideoTexture&&Ye(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Z,D,R);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+R)}function ae(D,R){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){K(Z,D,R);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+R)}function de(D,R){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){K(Z,D,R);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+R)}function k(D,R){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){ue(Z,D,R);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+R)}const ce={[cd]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[ud]:s.MIRRORED_REPEAT},re={[di]:s.NEAREST,[h_]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Su]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},O={[__]:s.NEVER,[w_]:s.ALWAYS,[x_]:s.LESS,[sg]:s.LEQUAL,[y_]:s.EQUAL,[E_]:s.GEQUAL,[S_]:s.GREATER,[M_]:s.NOTEQUAL};function ie(D,R){if(R.type===Vi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===xi||R.magFilter===Su||R.magFilter===tl||R.magFilter===Kr||R.minFilter===xi||R.minFilter===Su||R.minFilter===tl||R.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ce[R.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ce[R.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ce[R.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,re[R.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,re[R.minFilter]),R.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===di||R.minFilter!==tl&&R.minFilter!==Kr||R.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,a.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function De(D,R){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",U));const pe=R.source;let ve=g.get(pe);ve===void 0&&(ve={},g.set(pe,ve));const fe=le(R);if(fe!==D.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),ve[fe].usedTimes++;const He=ve[D.__cacheKey];He!==void 0&&(ve[D.__cacheKey].usedTimes--,He.usedTimes===0&&P(R)),D.__cacheKey=fe,D.__webglTexture=ve[fe].texture}return Z}function K(D,R,Z){let pe=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pe=s.TEXTURE_3D);const ve=De(D,R),fe=R.source;n.bindTexture(pe,D.__webglTexture,s.TEXTURE0+Z);const He=r.get(fe);if(fe.version!==He.__version||ve===!0){n.activeTexture(s.TEXTURE0+Z);const Re=xt.getPrimaries(xt.workingColorSpace),Ue=R.colorSpace===Sr?null:xt.getPrimaries(R.colorSpace),ct=R.colorSpace===Sr||Re===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Se=T(R.image,!1,a.maxTextureSize);Se=Tt(R,Se);const Oe=c.convert(R.format,R.colorSpace),Je=c.convert(R.type);let et=L(R.internalFormat,Oe,Je,R.colorSpace,R.isVideoTexture);ie(pe,R);let ke;const dt=R.mipmaps,rt=R.isVideoTexture!==!0,wt=He.__version===void 0||ve===!0,W=fe.dataReady,Ce=V(R,Se);if(R.isDepthTexture)et=b(R.format===$s,R.type),wt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,et,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,Oe,Je,null));else if(R.isDataTexture)if(dt.length>0){rt&&wt&&n.texStorage2D(s.TEXTURE_2D,Ce,et,dt[0].width,dt[0].height);for(let oe=0,he=dt.length;oe<he;oe++)ke=dt[oe],rt?W&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(s.TEXTURE_2D,oe,et,ke.width,ke.height,0,Oe,Je,ke.data);R.generateMipmaps=!1}else rt?(wt&&n.texStorage2D(s.TEXTURE_2D,Ce,et,Se.width,Se.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,Je,Se.data)):n.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,Oe,Je,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){rt&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,et,dt[0].width,dt[0].height,Se.depth);for(let oe=0,he=dt.length;oe<he;oe++)if(ke=dt[oe],R.format!==ui)if(Oe!==null)if(rt){if(W)if(R.layerUpdates.size>0){const Ne=Dm(ke.width,ke.height,R.format,R.type);for(const Pe of R.layerUpdates){const st=ke.data.subarray(Pe*Ne/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Ne/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Pe,ke.width,ke.height,1,Oe,st)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,et,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Se.depth,Oe,Je,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,et,ke.width,ke.height,Se.depth,0,Oe,Je,ke.data)}else{rt&&wt&&n.texStorage2D(s.TEXTURE_2D,Ce,et,dt[0].width,dt[0].height);for(let oe=0,he=dt.length;oe<he;oe++)ke=dt[oe],R.format!==ui?Oe!==null?rt?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(s.TEXTURE_2D,oe,et,ke.width,ke.height,0,Oe,Je,ke.data)}else if(R.isDataArrayTexture)if(rt){if(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,et,Se.width,Se.height,Se.depth),W)if(R.layerUpdates.size>0){const oe=Dm(Se.width,Se.height,R.format,R.type);for(const he of R.layerUpdates){const Ne=Se.data.subarray(he*oe/Se.data.BYTES_PER_ELEMENT,(he+1)*oe/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Oe,Je,Ne)}R.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Je,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,Oe,Je,Se.data);else if(R.isData3DTexture)rt?(wt&&n.texStorage3D(s.TEXTURE_3D,Ce,et,Se.width,Se.height,Se.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Je,Se.data)):n.texImage3D(s.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,Oe,Je,Se.data);else if(R.isFramebufferTexture){if(wt)if(rt)n.texStorage2D(s.TEXTURE_2D,Ce,et,Se.width,Se.height);else{let oe=Se.width,he=Se.height;for(let Ne=0;Ne<Ce;Ne++)n.texImage2D(s.TEXTURE_2D,Ne,et,oe,he,0,Oe,Je,null),oe>>=1,he>>=1}}else if(dt.length>0){if(rt&&wt){const oe=qe(dt[0]);n.texStorage2D(s.TEXTURE_2D,Ce,et,oe.width,oe.height)}for(let oe=0,he=dt.length;oe<he;oe++)ke=dt[oe],rt?W&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe,Je,ke):n.texImage2D(s.TEXTURE_2D,oe,et,Oe,Je,ke);R.generateMipmaps=!1}else if(rt){if(wt){const oe=qe(Se);n.texStorage2D(s.TEXTURE_2D,Ce,et,oe.width,oe.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Je,Se)}else n.texImage2D(s.TEXTURE_2D,0,et,Oe,Je,Se);y(R)&&v(pe),He.__version=fe.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function ue(D,R,Z){if(R.image.length!==6)return;const pe=De(D,R),ve=R.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const fe=r.get(ve);if(ve.version!==fe.__version||pe===!0){n.activeTexture(s.TEXTURE0+Z);const He=xt.getPrimaries(xt.workingColorSpace),Re=R.colorSpace===Sr?null:xt.getPrimaries(R.colorSpace),Ue=R.colorSpace===Sr||He===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ct=R.isCompressedTexture||R.image[0].isCompressedTexture,Se=R.image[0]&&R.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!ct&&!Se?Oe[he]=T(R.image[he],!0,a.maxCubemapSize):Oe[he]=Se?R.image[he].image:R.image[he],Oe[he]=Tt(R,Oe[he]);const Je=Oe[0],et=c.convert(R.format,R.colorSpace),ke=c.convert(R.type),dt=L(R.internalFormat,et,ke,R.colorSpace),rt=R.isVideoTexture!==!0,wt=fe.__version===void 0||pe===!0,W=ve.dataReady;let Ce=V(R,Je);ie(s.TEXTURE_CUBE_MAP,R);let oe;if(ct){rt&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,dt,Je.width,Je.height);for(let he=0;he<6;he++){oe=Oe[he].mipmaps;for(let Ne=0;Ne<oe.length;Ne++){const Pe=oe[Ne];R.format!==ui?et!==null?rt?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,Pe.width,Pe.height,et,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,dt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,Pe.width,Pe.height,et,ke,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,dt,Pe.width,Pe.height,0,et,ke,Pe.data)}}}else{if(oe=R.mipmaps,rt&&wt){oe.length>0&&Ce++;const he=qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Se){rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,et,ke,Oe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Oe[he].width,Oe[he].height,0,et,ke,Oe[he].data);for(let Ne=0;Ne<oe.length;Ne++){const st=oe[Ne].image[he].image;rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,st.width,st.height,et,ke,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,dt,st.width,st.height,0,et,ke,st.data)}}else{rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,ke,Oe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,et,ke,Oe[he]);for(let Ne=0;Ne<oe.length;Ne++){const Pe=oe[Ne];rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,et,ke,Pe.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,dt,et,ke,Pe.image[he])}}}y(R)&&v(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function Ee(D,R,Z,pe,ve,fe){const He=c.convert(Z.format,Z.colorSpace),Re=c.convert(Z.type),Ue=L(Z.internalFormat,He,Re,Z.colorSpace),ct=r.get(R),Se=r.get(Z);if(Se.__renderTarget=R,!ct.__hasExternalTextures){const Oe=Math.max(1,R.width>>fe),Je=Math.max(1,R.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,fe,Ue,Oe,Je,R.depth,0,He,Re,null):n.texImage2D(ve,fe,Ue,Oe,Je,0,He,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),ut(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ve,Se.__webglTexture,0,ht(R)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ve,Se.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(D,R,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),R.depthBuffer){const pe=R.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,fe=b(R.stencilBuffer,ve),He=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=ht(R);ut(R)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,fe,R.width,R.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,fe,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,fe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,D)}else{const pe=R.textures;for(let ve=0;ve<pe.length;ve++){const fe=pe[ve],He=c.convert(fe.format,fe.colorSpace),Re=c.convert(fe.type),Ue=L(fe.internalFormat,He,Re,fe.colorSpace),ct=ht(R);Z&&ut(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ue,R.width,R.height):ut(R)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Ue,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(R.depthTexture);pe.__renderTarget=R,(!pe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),me(R.depthTexture,0);const ve=pe.__webglTexture,fe=ht(R);if(R.depthTexture.format===Vs)ut(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(R.depthTexture.format===$s)ut(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ie(D){const R=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pe){const ve=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),R.__depthDisposeCallback=ve}R.__boundDepthTexture=pe}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(R.__webglFramebuffer,D)}else if(Z){R.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[pe]),R.__webglDepthbuffer[pe]===void 0)R.__webglDepthbuffer[pe]=s.createRenderbuffer(),xe(R.__webglDepthbuffer[pe],D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),xe(R.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(D,R,Z){const pe=r.get(D);R!==void 0&&Ee(pe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ie(D)}function Ct(D){const R=D.texture,Z=r.get(D),pe=r.get(R);D.addEventListener("dispose",F);const ve=D.textures,fe=D.isWebGLCubeRenderTarget===!0,He=ve.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=R.version,d.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<R.mipmaps.length;Ue++)Z.__webglFramebuffer[Re][Ue]=s.createFramebuffer()}else Z.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)Z.__webglFramebuffer[Re]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(He)for(let Re=0,Ue=ve.length;Re<Ue;Re++){const ct=r.get(ve[Re]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&ut(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<ve.length;Re++){const Ue=ve[Re];Z.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);const ct=c.convert(Ue.format,Ue.colorSpace),Se=c.convert(Ue.type),Oe=L(Ue.internalFormat,ct,Se,Ue.colorSpace,D.isXRRenderTarget===!0),Je=ht(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Oe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(s.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ue=0;Ue<R.mipmaps.length;Ue++)Ee(Z.__webglFramebuffer[Re][Ue],D,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else Ee(Z.__webglFramebuffer[Re],D,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(R)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let Re=0,Ue=ve.length;Re<Ue;Re++){const ct=ve[Re],Se=r.get(ct);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ie(s.TEXTURE_2D,ct),Ee(Z.__webglFramebuffer,D,ct,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),y(ct)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,pe.__webglTexture),ie(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let Ue=0;Ue<R.mipmaps.length;Ue++)Ee(Z.__webglFramebuffer[Ue],D,R,s.COLOR_ATTACHMENT0,Re,Ue);else Ee(Z.__webglFramebuffer,D,R,s.COLOR_ATTACHMENT0,Re,0);y(R)&&v(Re),n.unbindTexture()}D.depthBuffer&&Ie(D)}function pt(D){const R=D.textures;for(let Z=0,pe=R.length;Z<pe;Z++){const ve=R[Z];if(y(ve)){const fe=A(D),He=r.get(ve).__webglTexture;n.bindTexture(fe,He),v(fe),n.unbindTexture()}}}const Nt=[],$=[];function hn(D){if(D.samples>0){if(ut(D)===!1){const R=D.textures,Z=D.width,pe=D.height;let ve=s.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(D),Re=R.length>1;if(Re)for(let Ue=0;Ue<R.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ue=0;Ue<R.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const ct=r.get(R[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ve,s.NEAREST),p===!0&&(Nt.length=0,$.length=0,Nt.push(s.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Nt.push(fe),$.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<R.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const ct=r.get(R[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ct,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const R=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function ht(D){return Math.min(a.maxSamples,D.samples)}function ut(D){const R=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ye(D){const R=d.render.frame;_.get(D)!==R&&(_.set(D,R),D.update())}function Tt(D,R){const Z=D.colorSpace,pe=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Ys&&Z!==Sr&&(xt.getTransfer(Z)===bt?(pe!==ui||ve!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=se,this.setTexture2D=me,this.setTexture2DArray=ae,this.setTexture3D=de,this.setTextureCube=k,this.rebindTextures=Qe,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ut}function bE(s,e){function n(r,a=Sr){let c;const d=xt.getTransfer(a);if(r===Wi)return s.UNSIGNED_BYTE;if(r===Wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===jd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ym)return s.BYTE;if(r===Km)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===Gd)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===Qm)return s.ALPHA;if(r===Jm)return s.RGB;if(r===ui)return s.RGBA;if(r===eg)return s.LUMINANCE;if(r===tg)return s.LUMINANCE_ALPHA;if(r===Vs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===ng)return s.RED;if(r===Xd)return s.RED_INTEGER;if(r===ig)return s.RG;if(r===$d)return s.RG_INTEGER;if(r===qd)return s.RGBA_INTEGER;if(r===wl||r===Tl||r===Al||r===Rl)if(d===bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===wl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===wl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dd||r===fd||r===hd||r===pd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===md||r===gd||r===vd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===md||r===gd)return d===bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===vd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===wd||r===Td||r===Ad||r===Rd||r===Cd||r===bd||r===Pd||r===Nd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===_d)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Md)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ed)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Td)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===Ld||r===Dd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Cl)return d===bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rg||r===Id||r===Ud||r===Fd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Cl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Id)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class PE extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zo extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const u=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),v=this._getHandJoint(m,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=_.position.distanceTo(x.position),S=.02,E=.005;m.inputState.pinching&&g>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));u!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return u!==null&&(u.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new zo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Xi({vertexShader:LE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zn(new Fl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UE extends Ks{constructor(e,n){super();const r=this;let a=null,c=1,d=null,u="local-floor",p=1,m=null,_=null,x=null,g=null,S=null,E=null;const T=new IE,y=n.getContextAttributes();let v=null,A=null;const L=[],b=[],V=new Mt;let U=null;const F=new Zn;F.viewport=new Vt;const H=new Zn;H.viewport=new Vt;const P=[F,H],C=new PE;let z=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=L[K];return ue===void 0&&(ue=new Ku,L[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=L[K];return ue===void 0&&(ue=new Ku,L[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=L[K];return ue===void 0&&(ue=new Ku,L[K]=ue),ue.getHandSpace()};function J(K){const ue=b.indexOf(K.inputSource);if(ue===-1)return;const Ee=L[ue];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,m||d),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function le(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",me);for(let K=0;K<L.length;K++){const ue=b[K];ue!==null&&(b[K]=null,L[K].disconnect(ue))}z=null,se=null,T.reset(),e.setRenderTarget(v),S=null,g=null,x=null,a=null,A=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",le),a.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(V),a.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new Qr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=y.stencil?$s:Vs,Ee=y.stencil?Xs:Zr);const Ae={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};x=new XRWebGLBinding(a,n),g=x.createProjectionLayer(Ae),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new Qr(g.textureWidth,g.textureHeight,{format:ui,type:Wi,depthTexture:new xg(g.textureWidth,g.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(u),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function me(K){for(let ue=0;ue<K.removed.length;ue++){const Ee=K.removed[ue],xe=b.indexOf(Ee);xe>=0&&(b[xe]=null,L[xe].disconnect(Ee))}for(let ue=0;ue<K.added.length;ue++){const Ee=K.added[ue];let xe=b.indexOf(Ee);if(xe===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=b.length){b.push(Ee),xe=Ie;break}else if(b[Ie]===null){b[Ie]=Ee,xe=Ie;break}if(xe===-1)break}const Ae=L[xe];Ae&&Ae.connect(Ee)}}const ae=new Q,de=new Q;function k(K,ue,Ee){ae.setFromMatrixPosition(ue.matrixWorld),de.setFromMatrixPosition(Ee.matrixWorld);const xe=ae.distanceTo(de),Ae=ue.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Qe=Ae[14]/(Ae[10]-1),Ct=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],Nt=(Ae[9]-1)/Ae[5],$=(Ae[8]-1)/Ae[0],hn=(Ie[8]+1)/Ie[0],ht=Qe*$,ut=Qe*hn,Ye=xe/(-$+hn),Tt=Ye*-$;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const qe=Qe+Ye,D=Ct+Ye,R=ht-Tt,Z=ut+(xe-Tt),pe=pt*Ct/D*qe,ve=Nt*Ct/D*qe;K.projectionMatrix.makePerspective(R,Z,pe,ve,qe,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ue=K.near,Ee=K.far;T.texture!==null&&(T.depthNear>0&&(ue=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),C.near=H.near=F.near=ue,C.far=H.far=F.far=Ee,(z!==C.near||se!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,se=C.far),F.layers.mask=K.layers.mask|2,H.layers.mask=K.layers.mask|4,C.layers.mask=F.layers.mask|H.layers.mask;const xe=K.parent,Ae=C.cameras;ce(C,xe);for(let Ie=0;Ie<Ae.length;Ie++)ce(Ae[Ie],xe);Ae.length===2?k(C,F,H):C.projectionMatrix.copy(F.projectionMatrix),re(K,C,xe)};function re(K,ue,Ee){Ee===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Od*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(K){p=K,g!==null&&(g.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let O=null;function ie(K,ue){if(_=ue.getViewerPose(m||d),E=ue,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(A,S.framebuffer),e.setRenderTarget(A));let xe=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Qe=Ee[Ie];let Ct=null;if(S!==null)Ct=S.getViewport(Qe);else{const Nt=x.getViewSubImage(g,Qe);Ct=Nt.viewport,Ie===0&&(e.setRenderTargetTextures(A,Nt.colorTexture,g.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(A))}let pt=P[Ie];pt===void 0&&(pt=new Zn,pt.layers.enable(Ie),pt.viewport=new Vt,P[Ie]=pt),pt.matrix.fromArray(Qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ie===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(pt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=x.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&T.init(e,Ie,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=b[Ee],Ae=L[Ee];xe!==null&&Ae!==void 0&&Ae.update(xe,ue,m||d)}O&&O(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const De=new _g;De.setAnimationLoop(ie),this.setAnimationLoop=function(K){O=K},this.dispose=function(){}}}const Wr=new ji,FE=new Ht;function OE(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,pg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,A,L,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),x(y,v)):v.isMeshPhongMaterial?(c(y,v),_(y,v)):v.isMeshStandardMaterial?(c(y,v),g(y,v),v.isMeshPhysicalMaterial&&S(y,v,b)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&u(y,v)):v.isPointsMaterial?p(y,v,A,L):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===bn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===bn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const A=e.get(v),L=A.envMap,b=A.envMapRotation;L&&(y.envMap.value=L,Wr.copy(b),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(Wr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function u(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,A,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*A,y.scale.value=L*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,A){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===bn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const A=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function kE(s,e,n,r){let a={},c={},d=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,L){const b=L.program;r.uniformBlockBinding(A,b)}function m(A,L){let b=a[A.id];b===void 0&&(E(A),b=_(A),a[A.id]=b,A.addEventListener("dispose",y));const V=L.program;r.updateUBOMapping(A,V);const U=e.render.frame;c[A.id]!==U&&(g(A),c[A.id]=U)}function _(A){const L=x();A.__bindingPointIndex=L;const b=s.createBuffer(),V=A.__size,U=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,V,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function x(){for(let A=0;A<u;A++)if(d.indexOf(A)===-1)return d.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const L=a[A.id],b=A.uniforms,V=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let U=0,F=b.length;U<F;U++){const H=Array.isArray(b[U])?b[U]:[b[U]];for(let P=0,C=H.length;P<C;P++){const z=H[P];if(S(z,U,P,V)===!0){const se=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let me=0;me<J.length;me++){const ae=J[me],de=T(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,se+le,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,le),le+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(A,L,b,V){const U=A.value,F=L+"_"+b;if(V[F]===void 0)return typeof U=="number"||typeof U=="boolean"?V[F]=U:V[F]=U.clone(),!0;{const H=V[F];if(typeof U=="number"||typeof U=="boolean"){if(H!==U)return V[F]=U,!0}else if(H.equals(U)===!1)return H.copy(U),!0}return!1}function E(A){const L=A.uniforms;let b=0;const V=16;for(let F=0,H=L.length;F<H;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,z=P.length;C<z;C++){const se=P[C],J=Array.isArray(se.value)?se.value:[se.value];for(let le=0,me=J.length;le<me;le++){const ae=J[le],de=T(ae),k=b%V,ce=k%de.boundary,re=k+ce;b+=ce,re!==0&&V-re<de.storage&&(b+=V-re),se.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=b,b+=de.storage}}}const U=b%V;return U>0&&(b+=V-U),A.__size=b,A.__cache={},this}function T(A){const L={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(L.boundary=4,L.storage=4):A.isVector2?(L.boundary=8,L.storage=8):A.isVector3||A.isColor?(L.boundary=16,L.storage=12):A.isVector4?(L.boundary=16,L.storage=16):A.isMatrix3?(L.boundary=48,L.storage=48):A.isMatrix4?(L.boundary=64,L.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),L}function y(A){const L=A.target;L.removeEventListener("dispose",y);const b=d.indexOf(L.__bindingPointIndex);d.splice(b,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete c[L.id]}function v(){for(const A in a)s.deleteBuffer(a[A]);d=[],a={},c={}}return{bind:p,update:m,dispose:v}}class zE{constructor(e={}){const{canvas:n=A_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:u=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,v=null;const A=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Er,this.toneMappingExposure=1;const b=this;let V=!1,U=0,F=0,H=null,P=-1,C=null;const z=new Vt,se=new Vt;let J=null;const le=new Rt(0);let me=0,ae=n.width,de=n.height,k=1,ce=null,re=null;const O=new Vt(0,0,ae,de),ie=new Vt(0,0,ae,de);let De=!1;const K=new vg;let ue=!1,Ee=!1;const xe=new Ht,Ae=new Ht,Ie=new Q,Qe=new Vt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return H===null?k:1}let $=r;function hn(N,j){return n.getContext(N,j)}try{const N={alpha:!0,depth:a,stencil:c,antialias:u,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hd}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),$===null){const j="webgl2";if($=hn(j,N),$===null)throw hn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let ht,ut,Ye,Tt,qe,D,R,Z,pe,ve,fe,He,Re,Ue,ct,Se,Oe,Je,et,ke,dt,rt,wt,W;function Ce(){ht=new WS($),ht.init(),rt=new bE($,ht),ut=new OS($,ht,e,rt),Ye=new AE($,ht),ut.reverseDepthBuffer&&g&&Ye.buffers.depth.setReversed(!0),Tt=new $S($),qe=new dE,D=new CE($,ht,Ye,qe,ut,rt,Tt),R=new zS(b),Z=new GS(b),pe=new J_($),wt=new US($,pe),ve=new jS($,pe,Tt,wt),fe=new YS($,ve,pe,Tt),et=new qS($,ut,D),Se=new kS(qe),He=new uE(b,R,Z,ht,ut,wt,Se),Re=new OE(b,qe),Ue=new hE,ct=new xE(ht),Je=new IS(b,R,Z,Ye,fe,S,p),Oe=new wE(b,fe,ut),W=new kE($,Tt,ut,Ye),ke=new FS($,ht,Tt),dt=new XS($,ht,Tt),Tt.programs=He.programs,b.capabilities=ut,b.extensions=ht,b.properties=qe,b.renderLists=Ue,b.shadowMap=Oe,b.state=Ye,b.info=Tt}Ce();const oe=new UE(b,$);this.xr=oe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const N=ht.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ht.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(N){N!==void 0&&(k=N,this.setSize(ae,de,!1))},this.getSize=function(N){return N.set(ae,de)},this.setSize=function(N,j,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=N,de=j,n.width=Math.floor(N*k),n.height=Math.floor(j*k),te===!0&&(n.style.width=N+"px",n.style.height=j+"px"),this.setViewport(0,0,N,j)},this.getDrawingBufferSize=function(N){return N.set(ae*k,de*k).floor()},this.setDrawingBufferSize=function(N,j,te){ae=N,de=j,k=te,n.width=Math.floor(N*te),n.height=Math.floor(j*te),this.setViewport(0,0,N,j)},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(O)},this.setViewport=function(N,j,te,ne){N.isVector4?O.set(N.x,N.y,N.z,N.w):O.set(N,j,te,ne),Ye.viewport(z.copy(O).multiplyScalar(k).round())},this.getScissor=function(N){return N.copy(ie)},this.setScissor=function(N,j,te,ne){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,j,te,ne),Ye.scissor(se.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(N){Ye.setScissorTest(De=N)},this.setOpaqueSort=function(N){ce=N},this.setTransparentSort=function(N){re=N},this.getClearColor=function(N){return N.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(N=!0,j=!0,te=!0){let ne=0;if(N){let X=!1;if(H!==null){const Te=H.texture.format;X=Te===qd||Te===$d||Te===Xd}if(X){const Te=H.texture.type,Me=Te===Wi||Te===Zr||Te===Ho||Te===Xs||Te===Wd||Te===jd,Ge=Je.getClearColor(),Be=Je.getClearAlpha(),tt=Ge.r,it=Ge.g,We=Ge.b;Me?(E[0]=tt,E[1]=it,E[2]=We,E[3]=Be,$.clearBufferuiv($.COLOR,0,E)):(T[0]=tt,T[1]=it,T[2]=We,T[3]=Be,$.clearBufferiv($.COLOR,0,T))}else ne|=$.COLOR_BUFFER_BIT}j&&(ne|=$.DEPTH_BUFFER_BIT),te&&(ne|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),ct.dispose(),qe.dispose(),R.dispose(),Z.dispose(),fe.dispose(),wt.dispose(),W.dispose(),He.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",es),oe.removeEventListener("sessionend",qi),Ei.stop()};function he(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const N=Tt.autoReset,j=Oe.enabled,te=Oe.autoUpdate,ne=Oe.needsUpdate,X=Oe.type;Ce(),Tt.autoReset=N,Oe.enabled=j,Oe.autoUpdate=te,Oe.needsUpdate=ne,Oe.type=X}function Pe(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function st(N){const j=N.target;j.removeEventListener("dispose",st),Dt(j)}function Dt(N){jt(N),qe.remove(N)}function jt(N){const j=qe.get(N).programs;j!==void 0&&(j.forEach(function(te){He.releaseProgram(te)}),N.isShaderMaterial&&He.releaseShaderCache(N))}this.renderBufferDirect=function(N,j,te,ne,X,Te){j===null&&(j=Ct);const Me=X.isMesh&&X.matrixWorld.determinant()<0,Ge=Zo(N,j,te,ne,X);Ye.setMaterial(ne,Me);let Be=te.index,tt=1;if(ne.wireframe===!0){if(Be=ve.getWireframeAttribute(te),Be===void 0)return;tt=2}const it=te.drawRange,We=te.attributes.position;let gt=it.start*tt,Et=(it.start+it.count)*tt;Te!==null&&(gt=Math.max(gt,Te.start*tt),Et=Math.min(Et,(Te.start+Te.count)*tt)),Be!==null?(gt=Math.max(gt,0),Et=Math.min(Et,Be.count)):We!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,We.count));const mt=Et-gt;if(mt<0||mt===1/0)return;wt.setup(X,ne,Ge,te,Be);let sn,ot=ke;if(Be!==null&&(sn=pe.get(Be),ot=dt,ot.setIndex(sn)),X.isMesh)ne.wireframe===!0?(Ye.setLineWidth(ne.wireframeLinewidth*Nt()),ot.setMode($.LINES)):ot.setMode($.TRIANGLES);else if(X.isLine){let $e=ne.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*Nt()),X.isLineSegments?ot.setMode($.LINES):X.isLineLoop?ot.setMode($.LINE_LOOP):ot.setMode($.LINE_STRIP)}else X.isPoints?ot.setMode($.POINTS):X.isSprite&&ot.setMode($.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $e=X._multiDrawStarts,Qn=X._multiDrawCounts,yt=X._multiDrawCount,on=Be?pe.get(Be).bytesPerElement:1,Jn=qe.get(ne).currentProgram.getUniforms();for(let Xt=0;Xt<yt;Xt++)Jn.setValue($,"_gl_DrawID",Xt),ot.render($e[Xt]/on,Qn[Xt])}else if(X.isInstancedMesh)ot.renderInstances(gt,mt,X.count);else if(te.isInstancedBufferGeometry){const $e=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Qn=Math.min(te.instanceCount,$e);ot.renderInstances(gt,mt,Qn)}else ot.render(gt,mt)};function vt(N,j,te){N.transparent===!0&&N.side===Bi&&N.forceSinglePass===!1?(N.side=bn,N.needsUpdate=!0,ts(N,j,te),N.side=wr,N.needsUpdate=!0,ts(N,j,te),N.side=Bi):ts(N,j,te)}this.compile=function(N,j,te=null){te===null&&(te=N),v=ct.get(te),v.init(j),L.push(v),te.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),N!==te&&N.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const ne=new Set;return N.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let Me=0;Me<Te.length;Me++){const Ge=Te[Me];vt(Ge,te,X),ne.add(Ge)}else vt(Te,te,X),ne.add(Te)}),L.pop(),v=null,ne},this.compileAsync=function(N,j,te=null){const ne=this.compile(N,j,te);return new Promise(X=>{function Te(){if(ne.forEach(function(Me){qe.get(Me).currentProgram.isReady()&&ne.delete(Me)}),ne.size===0){X(N);return}setTimeout(Te,10)}ht.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let xn=null;function pn(N){xn&&xn(N)}function es(){Ei.stop()}function qi(){Ei.start()}const Ei=new _g;Ei.setAnimationLoop(pn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(N){xn=N,oe.setAnimationLoop(N),N===null?Ei.stop():Ei.start()},oe.addEventListener("sessionstart",es),oe.addEventListener("sessionend",qi),this.render=function(N,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,j,H),v=ct.get(N,L.length),v.init(j),L.push(v),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,Ee),y=Ue.get(N,A.length),y.init(),A.push(y),oe.enabled===!0&&oe.isPresenting===!0){const Te=b.xr.getDepthSensingMesh();Te!==null&&wi(Te,j,-1/0,b.sortObjects)}wi(N,j,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ce,re),pt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,pt&&Je.addToRenderList(y,N),this.info.render.frame++,ue===!0&&Se.beginShadows();const te=v.state.shadowsArray;Oe.render(te,N,j),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,X=y.transmissive;if(v.setupLights(),j.isArrayCamera){const Te=j.cameras;if(X.length>0)for(let Me=0,Ge=Te.length;Me<Ge;Me++){const Be=Te[Me];Ar(ne,X,N,Be)}pt&&Je.render(N);for(let Me=0,Ge=Te.length;Me<Ge;Me++){const Be=Te[Me];Tr(y,N,Be,Be.viewport)}}else X.length>0&&Ar(ne,X,N,j),pt&&Je.render(N),Tr(y,N,j);H!==null&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H)),N.isScene===!0&&N.onAfterRender(b,N,j),wt.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],ue===!0&&Se.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function wi(N,j,te,ne){if(N.visible===!1)return;if(N.layers.test(j.layers)){if(N.isGroup)te=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(j);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||K.intersectsSprite(N)){ne&&Qe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ae);const Me=fe.update(N),Ge=N.material;Ge.visible&&y.push(N,Me,Ge,te,Qe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||K.intersectsObject(N))){const Me=fe.update(N),Ge=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Qe.copy(N.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Qe.copy(Me.boundingSphere.center)),Qe.applyMatrix4(N.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const Be=Me.groups;for(let tt=0,it=Be.length;tt<it;tt++){const We=Be[tt],gt=Ge[We.materialIndex];gt&&gt.visible&&y.push(N,Me,gt,te,Qe.z,We)}}else Ge.visible&&y.push(N,Me,Ge,te,Qe.z,null)}}const Te=N.children;for(let Me=0,Ge=Te.length;Me<Ge;Me++)wi(Te[Me],j,te,ne)}function Tr(N,j,te,ne){const X=N.opaque,Te=N.transmissive,Me=N.transparent;v.setupLightsView(te),ue===!0&&Se.setGlobalState(b.clippingPlanes,te),ne&&Ye.viewport(z.copy(ne)),X.length>0&&Yi(X,j,te),Te.length>0&&Yi(Te,j,te),Me.length>0&&Yi(Me,j,te),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ar(N,j,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new Qr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Go:Wi,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[ne.id],Me=ne.viewport||z;Te.setSize(Me.z,Me.w);const Ge=b.getRenderTarget();b.setRenderTarget(Te),b.getClearColor(le),me=b.getClearAlpha(),me<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Je.render(te);const Be=b.toneMapping;b.toneMapping=Er;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),ue===!0&&Se.setGlobalState(b.clippingPlanes,ne),Yi(N,te,ne),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,gt=j.length;We<gt;We++){const Et=j[We],mt=Et.object,sn=Et.geometry,ot=Et.material,$e=Et.group;if(ot.side===Bi&&mt.layers.test(ne.layers)){const Qn=ot.side;ot.side=bn,ot.needsUpdate=!0,Yo(mt,te,ne,sn,ot,$e),ot.side=Qn,ot.needsUpdate=!0,it=!0}}it===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}b.setRenderTarget(Ge),b.setClearColor(le,me),tt!==void 0&&(ne.viewport=tt),b.toneMapping=Be}function Yi(N,j,te){const ne=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Te=N.length;X<Te;X++){const Me=N[X],Ge=Me.object,Be=Me.geometry,tt=ne===null?Me.material:ne,it=Me.group;Ge.layers.test(te.layers)&&Yo(Ge,j,te,Be,tt,it)}}function Yo(N,j,te,ne,X,Te){N.onBeforeRender(b,j,te,ne,X,Te),N.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),X.onBeforeRender(b,j,te,ne,N,Te),X.transparent===!0&&X.side===Bi&&X.forceSinglePass===!1?(X.side=bn,X.needsUpdate=!0,b.renderBufferDirect(te,j,ne,X,N,Te),X.side=wr,X.needsUpdate=!0,b.renderBufferDirect(te,j,ne,X,N,Te),X.side=Bi):b.renderBufferDirect(te,j,ne,X,N,Te),N.onAfterRender(b,j,te,ne,X,Te)}function ts(N,j,te){j.isScene!==!0&&(j=Ct);const ne=qe.get(N),X=v.state.lights,Te=v.state.shadowsArray,Me=X.state.version,Ge=He.getParameters(N,X.state,Te,j,te),Be=He.getProgramCacheKey(Ge);let tt=ne.programs;ne.environment=N.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(N.isMeshStandardMaterial?Z:R).get(N.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&N.envMap===null?j.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",st),tt=new Map,ne.programs=tt);let it=tt.get(Be);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===Me)return fi(N,Ge),it}else Ge.uniforms=He.getUniforms(N),N.onBeforeCompile(Ge,b),it=He.acquireProgram(Ge,Be),tt.set(Be,it),ne.uniforms=Ge.uniforms;const We=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(We.clippingPlanes=Se.uniform),fi(N,Ge),ne.needsLights=kl(N),ne.lightsStateVersion=Me,ne.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),ne.currentProgram=it,ne.uniformsList=null,it}function Ko(N){if(N.uniformsList===null){const j=N.currentProgram.getUniforms();N.uniformsList=bl.seqWithValue(j.seq,N.uniforms)}return N.uniformsList}function fi(N,j){const te=qe.get(N);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function Zo(N,j,te,ne,X){j.isScene!==!0&&(j=Ct),D.resetTextureUnits();const Te=j.fog,Me=ne.isMeshStandardMaterial?j.environment:null,Ge=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ys,Be=(ne.isMeshStandardMaterial?Z:R).get(ne.envMap||Me),tt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,Et=!!te.morphAttributes.color;let mt=Er;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(mt=b.toneMapping);const sn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ot=sn!==void 0?sn.length:0,$e=qe.get(ne),Qn=v.state.lights;if(ue===!0&&(Ee===!0||N!==C)){const mn=N===C&&ne.id===P;Se.setState(ne,N,mn)}let yt=!1;ne.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Qn.state.version||$e.outputColorSpace!==Ge||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isBatchedMesh&&$e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&$e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&$e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&$e.instancingMorph===!1&&X.morphTexture!==null||$e.envMap!==Be||ne.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Se.numPlanes||$e.numIntersection!==Se.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==it||$e.morphTargets!==We||$e.morphNormals!==gt||$e.morphColors!==Et||$e.toneMapping!==mt||$e.morphTargetsCount!==ot)&&(yt=!0):(yt=!0,$e.__version=ne.version);let on=$e.currentProgram;yt===!0&&(on=ts(ne,j,X));let Jn=!1,Xt=!1,hi=!1;const Pt=on.getUniforms(),Vn=$e.uniforms;if(Ye.useProgram(on.program)&&(Jn=!0,Xt=!0,hi=!0),ne.id!==P&&(P=ne.id,Xt=!0),Jn||C!==N){Ye.buffers.depth.getReversed()?(xe.copy(N.projectionMatrix),C_(xe),b_(xe),Pt.setValue($,"projectionMatrix",xe)):Pt.setValue($,"projectionMatrix",N.projectionMatrix),Pt.setValue($,"viewMatrix",N.matrixWorldInverse);const Hn=Pt.map.cameraPosition;Hn!==void 0&&Hn.setValue($,Ie.setFromMatrixPosition(N.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue($,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue($,"isOrthographic",N.isOrthographicCamera===!0),C!==N&&(C=N,Xt=!0,hi=!0)}if(X.isSkinnedMesh){Pt.setOptional($,X,"bindMatrix"),Pt.setOptional($,X,"bindMatrixInverse");const mn=X.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pt.setValue($,"boneTexture",mn.boneTexture,D))}X.isBatchedMesh&&(Pt.setOptional($,X,"batchingTexture"),Pt.setValue($,"batchingTexture",X._matricesTexture,D),Pt.setOptional($,X,"batchingIdTexture"),Pt.setValue($,"batchingIdTexture",X._indirectTexture,D),Pt.setOptional($,X,"batchingColorTexture"),X._colorsTexture!==null&&Pt.setValue($,"batchingColorTexture",X._colorsTexture,D));const Ti=te.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&et.update(X,te,on),(Xt||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,Pt.setValue($,"receiveShadow",X.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Vn.envMap.value=Be,Vn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(Vn.envMapIntensity.value=j.environmentIntensity),Xt&&(Pt.setValue($,"toneMappingExposure",b.toneMappingExposure),$e.needsLights&&Qo(Vn,hi),Te&&ne.fog===!0&&Re.refreshFogUniforms(Vn,Te),Re.refreshMaterialUniforms(Vn,ne,k,de,v.state.transmissionRenderTarget[N.id]),bl.upload($,Ko($e),Vn,D)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(bl.upload($,Ko($e),Vn,D),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue($,"center",X.center),Pt.setValue($,"modelViewMatrix",X.modelViewMatrix),Pt.setValue($,"normalMatrix",X.normalMatrix),Pt.setValue($,"modelMatrix",X.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const mn=ne.uniformsGroups;for(let Hn=0,yn=mn.length;Hn<yn;Hn++){const Jo=mn[Hn];W.update(Jo,on),W.bind(Jo,on)}}return on}function Qo(N,j){N.ambientLightColor.needsUpdate=j,N.lightProbe.needsUpdate=j,N.directionalLights.needsUpdate=j,N.directionalLightShadows.needsUpdate=j,N.pointLights.needsUpdate=j,N.pointLightShadows.needsUpdate=j,N.spotLights.needsUpdate=j,N.spotLightShadows.needsUpdate=j,N.rectAreaLights.needsUpdate=j,N.hemisphereLights.needsUpdate=j}function kl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,j,te){qe.get(N.texture).__webglTexture=j,qe.get(N.depthTexture).__webglTexture=te;const ne=qe.get(N);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,j){const te=qe.get(N);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(N,j=0,te=0){H=N,U=j,F=te;let ne=!0,X=null,Te=!1,Me=!1;if(N){const Be=qe.get(N);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer($.FRAMEBUFFER,null),ne=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(N);else if(Be.__hasExternalTextures)D.rebindTextures(N,qe.get(N.texture).__webglTexture,qe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const We=N.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(N.width!==We.image.width||N.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(N)}}const tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Me=!0);const it=qe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(it[j])?X=it[j][te]:X=it[j],Te=!0):N.samples>0&&D.useMultisampledRTT(N)===!1?X=qe.get(N).__webglMultisampledFramebuffer:Array.isArray(it)?X=it[te]:X=it,z.copy(N.viewport),se.copy(N.scissor),J=N.scissorTest}else z.copy(O).multiplyScalar(k).floor(),se.copy(ie).multiplyScalar(k).floor(),J=De;if(Ye.bindFramebuffer($.FRAMEBUFFER,X)&&ne&&Ye.drawBuffers(N,X),Ye.viewport(z),Ye.scissor(se),Ye.setScissorTest(J),Te){const Be=qe.get(N.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,te)}else if(Me){const Be=qe.get(N.texture),tt=j||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Be.__webglTexture,te||0,tt)}P=-1},this.readRenderTargetPixels=function(N,j,te,ne,X,Te,Me){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){Ye.bindFramebuffer($.FRAMEBUFFER,Ge);try{const Be=N.texture,tt=Be.format,it=Be.type;if(!ut.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=N.width-ne&&te>=0&&te<=N.height-X&&$.readPixels(j,te,ne,X,rt.convert(tt),rt.convert(it),Te)}finally{const Be=H!==null?qe.get(H).__webglFramebuffer:null;Ye.bindFramebuffer($.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(N,j,te,ne,X,Te,Me){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const Be=N.texture,tt=Be.format,it=Be.type;if(!ut.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=N.width-ne&&te>=0&&te<=N.height-X){Ye.bindFramebuffer($.FRAMEBUFFER,Ge);const We=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,We),$.bufferData($.PIXEL_PACK_BUFFER,Te.byteLength,$.STREAM_READ),$.readPixels(j,te,ne,X,rt.convert(tt),rt.convert(it),0);const gt=H!==null?qe.get(H).__webglFramebuffer:null;Ye.bindFramebuffer($.FRAMEBUFFER,gt);const Et=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await R_($,Et,4),$.bindBuffer($.PIXEL_PACK_BUFFER,We),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Te),$.deleteBuffer(We),$.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,j=null,te=0){N.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,N=arguments[1]);const ne=Math.pow(2,-te),X=Math.floor(N.image.width*ne),Te=Math.floor(N.image.height*ne),Me=j!==null?j.x:0,Ge=j!==null?j.y:0;D.setTexture2D(N,0),$.copyTexSubImage2D($.TEXTURE_2D,te,0,0,Me,Ge,X,Te),Ye.unbindTexture()},this.copyTextureToTexture=function(N,j,te=null,ne=null,X=0){N.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,N=arguments[1],j=arguments[2],X=arguments[3]||0,te=null);let Te,Me,Ge,Be,tt,it,We,gt,Et;const mt=N.isCompressedTexture?N.mipmaps[X]:N.image;te!==null?(Te=te.max.x-te.min.x,Me=te.max.y-te.min.y,Ge=te.isBox3?te.max.z-te.min.z:1,Be=te.min.x,tt=te.min.y,it=te.isBox3?te.min.z:0):(Te=mt.width,Me=mt.height,Ge=mt.depth||1,Be=0,tt=0,it=0),ne!==null?(We=ne.x,gt=ne.y,Et=ne.z):(We=0,gt=0,Et=0);const sn=rt.convert(j.format),ot=rt.convert(j.type);let $e;j.isData3DTexture?(D.setTexture3D(j,0),$e=$.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),$e=$.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),$e=$.TEXTURE_2D),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment);const Qn=$.getParameter($.UNPACK_ROW_LENGTH),yt=$.getParameter($.UNPACK_IMAGE_HEIGHT),on=$.getParameter($.UNPACK_SKIP_PIXELS),Jn=$.getParameter($.UNPACK_SKIP_ROWS),Xt=$.getParameter($.UNPACK_SKIP_IMAGES);$.pixelStorei($.UNPACK_ROW_LENGTH,mt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,mt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,Be),$.pixelStorei($.UNPACK_SKIP_ROWS,tt),$.pixelStorei($.UNPACK_SKIP_IMAGES,it);const hi=N.isDataArrayTexture||N.isData3DTexture,Pt=j.isDataArrayTexture||j.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const Vn=qe.get(N),Ti=qe.get(j),mn=qe.get(Vn.__renderTarget),Hn=qe.get(Ti.__renderTarget);Ye.bindFramebuffer($.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ye.bindFramebuffer($.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let yn=0;yn<Ge;yn++)hi&&$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,qe.get(N).__webglTexture,X,it+yn),N.isDepthTexture?(Pt&&$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,X,Et+yn),$.blitFramebuffer(Be,tt,Te,Me,We,gt,Te,Me,$.DEPTH_BUFFER_BIT,$.NEAREST)):Pt?$.copyTexSubImage3D($e,X,We,gt,Et+yn,Be,tt,Te,Me):$.copyTexSubImage2D($e,X,We,gt,Et+yn,Be,tt,Te,Me);Ye.bindFramebuffer($.READ_FRAMEBUFFER,null),Ye.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Pt?N.isDataTexture||N.isData3DTexture?$.texSubImage3D($e,X,We,gt,Et,Te,Me,Ge,sn,ot,mt.data):j.isCompressedArrayTexture?$.compressedTexSubImage3D($e,X,We,gt,Et,Te,Me,Ge,sn,mt.data):$.texSubImage3D($e,X,We,gt,Et,Te,Me,Ge,sn,ot,mt):N.isDataTexture?$.texSubImage2D($.TEXTURE_2D,X,We,gt,Te,Me,sn,ot,mt.data):N.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,X,We,gt,mt.width,mt.height,sn,mt.data):$.texSubImage2D($.TEXTURE_2D,X,We,gt,Te,Me,sn,ot,mt);$.pixelStorei($.UNPACK_ROW_LENGTH,Qn),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,yt),$.pixelStorei($.UNPACK_SKIP_PIXELS,on),$.pixelStorei($.UNPACK_SKIP_ROWS,Jn),$.pixelStorei($.UNPACK_SKIP_IMAGES,Xt),X===0&&j.generateMipmaps&&$.generateMipmap($e),Ye.unbindTexture()},this.copyTextureToTexture3D=function(N,j,te=null,ne=null,X=0){return N.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,N=arguments[2],j=arguments[3],X=arguments[4]||0),Oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,j,te,ne,X)},this.initRenderTarget=function(N){qe.get(N).__webglFramebuffer===void 0&&D.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?D.setTextureCube(N,0):N.isData3DTexture?D.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?D.setTexture2DArray(N,0):D.setTexture2D(N,0),Ye.unbindTexture()},this.resetState=function(){U=0,F=0,H=null,Ye.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),n.unpackColorSpace=xt._getUnpackColorSpace()}}class BE extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class VE extends $o{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Im=new Ht,zd=new cg,Ml=new Ul,El=new Q;class HE extends Nn{constructor(e=new Mi,n=new VE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(a),Ml.radius+=c,e.ray.intersectsSphere(Ml)===!1)return;Im.copy(a).invert(),zd.copy(e.ray).applyMatrix4(Im);const u=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=u*u,m=r.index,x=r.attributes.position;if(m!==null){const g=Math.max(0,d.start),S=Math.min(m.count,d.start+d.count);for(let E=g,T=S;E<T;E++){const y=m.getX(E);El.fromBufferAttribute(x,y),Um(El,y,p,a,e,n,this)}}else{const g=Math.max(0,d.start),S=Math.min(x.count,d.start+d.count);for(let E=g,T=S;E<T;E++)El.fromBufferAttribute(x,E),Um(El,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const u=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}}function Um(s,e,n,r,a,c,d){const u=zd.distanceSqToPoint(s);if(u<n){const p=new Q;zd.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(u),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Kd extends Mi{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],d=[];u(a),m(r),_(),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(c.slice(),3)),this.setAttribute("uv",new Bn(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function u(A){const L=new Q,b=new Q,V=new Q;for(let U=0;U<n.length;U+=3)S(n[U+0],L),S(n[U+1],b),S(n[U+2],V),p(L,b,V,A)}function p(A,L,b,V){const U=V+1,F=[];for(let H=0;H<=U;H++){F[H]=[];const P=A.clone().lerp(b,H/U),C=L.clone().lerp(b,H/U),z=U-H;for(let se=0;se<=z;se++)se===0&&H===U?F[H][se]=P:F[H][se]=P.clone().lerp(C,se/z)}for(let H=0;H<U;H++)for(let P=0;P<2*(U-H)-1;P++){const C=Math.floor(P/2);P%2===0?(g(F[H][C+1]),g(F[H+1][C]),g(F[H][C])):(g(F[H][C+1]),g(F[H+1][C+1]),g(F[H+1][C]))}}function m(A){const L=new Q;for(let b=0;b<c.length;b+=3)L.x=c[b+0],L.y=c[b+1],L.z=c[b+2],L.normalize().multiplyScalar(A),c[b+0]=L.x,c[b+1]=L.y,c[b+2]=L.z}function _(){const A=new Q;for(let L=0;L<c.length;L+=3){A.x=c[L+0],A.y=c[L+1],A.z=c[L+2];const b=y(A)/2/Math.PI+.5,V=v(A)/Math.PI+.5;d.push(b,1-V)}E(),x()}function x(){for(let A=0;A<d.length;A+=6){const L=d[A+0],b=d[A+2],V=d[A+4],U=Math.max(L,b,V),F=Math.min(L,b,V);U>.9&&F<.1&&(L<.2&&(d[A+0]+=1),b<.2&&(d[A+2]+=1),V<.2&&(d[A+4]+=1))}}function g(A){c.push(A.x,A.y,A.z)}function S(A,L){const b=A*3;L.x=e[b+0],L.y=e[b+1],L.z=e[b+2]}function E(){const A=new Q,L=new Q,b=new Q,V=new Q,U=new Mt,F=new Mt,H=new Mt;for(let P=0,C=0;P<c.length;P+=9,C+=6){A.set(c[P+0],c[P+1],c[P+2]),L.set(c[P+3],c[P+4],c[P+5]),b.set(c[P+6],c[P+7],c[P+8]),U.set(d[C+0],d[C+1]),F.set(d[C+2],d[C+3]),H.set(d[C+4],d[C+5]),V.copy(A).add(L).add(b).divideScalar(3);const z=y(V);T(U,C+0,A,z),T(F,C+2,L,z),T(H,C+4,b,z)}}function T(A,L,b,V){V<0&&A.x===1&&(d[L]=A.x-1),b.x===0&&b.z===0&&(d[L]=V/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function v(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kd(e.vertices,e.indices,e.radius,e.details)}}class Ll extends Kd{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ll(e.radius,e.detail)}}class Bo extends Mi{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c},r=Math.floor(r),a=Math.floor(a);const d=[],u=[],p=[],m=[],_=new Q,x=new Q,g=new Q;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const T=E/a*c,y=S/r*Math.PI*2;x.x=(e+n*Math.cos(y))*Math.cos(T),x.y=(e+n*Math.cos(y))*Math.sin(T),x.z=n*Math.sin(y),u.push(x.x,x.y,x.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),g.subVectors(x,_).normalize(),p.push(g.x,g.y,g.z),m.push(E/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const T=(a+1)*S+E-1,y=(a+1)*(S-1)+E-1,v=(a+1)*(S-1)+E,A=(a+1)*S+E;d.push(T,y,A),d.push(y,v,A)}this.setIndex(d),this.setAttribute("position",new Bn(u,3)),this.setAttribute("normal",new Bn(p,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);const GE=`
  uniform float uTime;
  uniform float uAudioEnergy;
  uniform float uTurbulence;
  uniform float uDisplacement;
  uniform float uPointSize;
  uniform vec2 uMouse;

  varying float vDisplacement;
  varying float vFresnel;
  varying vec3 vPos;

  float hash(float n) {
    return fract(sin(n) * 43758.5453123);
  }

  float noise3D(vec3 x) {
    const vec3 stepVec = vec3(110.0, 241.0, 171.0);
    vec3 i = floor(x);
    vec3 f = fract(x);
    float n = dot(i, stepVec);
    vec3 u = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(
        mix(hash(n + dot(stepVec, vec3(0.0, 0.0, 0.0))), hash(n + dot(stepVec, vec3(1.0, 0.0, 0.0))), u.x),
        mix(hash(n + dot(stepVec, vec3(0.0, 1.0, 0.0))), hash(n + dot(stepVec, vec3(1.0, 1.0, 0.0))), u.x),
        u.y
      ),
      mix(
        mix(hash(n + dot(stepVec, vec3(0.0, 0.0, 1.0))), hash(n + dot(stepVec, vec3(1.0, 0.0, 1.0))), u.x),
        mix(hash(n + dot(stepVec, vec3(0.0, 1.0, 1.0))), hash(n + dot(stepVec, vec3(1.0, 1.0, 1.0))), u.x),
        u.y
      ),
      u.z
    );
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.55;
    for (int i = 0; i < 3; i++) {
      v += a * noise3D(p);
      p = p * 2.04 + vec3(1.7, 9.2, 4.3);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 dir = normalize(position);
    float baseField = fbm(dir * (1.8 + uTurbulence * 0.9) + vec3(uTime * 0.24, -uTime * 0.18, uTime * 0.15));
    float acousticSpike = noise3D(dir * 4.8 - vec3(uTime * 1.9)) * uAudioEnergy * 0.85;

    float mouseInfluence = dot(dir.xy, normalize(uMouse + vec2(0.0001))) * length(uMouse) * 0.12;
    float disp = ((baseField - 0.5) * uDisplacement * 1.45) + acousticSpike + mouseInfluence;

    vDisplacement = clamp((disp + 0.35) * 1.15, 0.0, 1.0);
    vPos = position + normal * disp;

    vec4 mvPos = modelViewMatrix * vec4(vPos, 1.0);
    vec3 viewNormal = normalize(normalMatrix * normal);
    vec3 viewDir = normalize(-mvPos.xyz);
    vFresnel = pow(1.0 - abs(dot(viewNormal, viewDir)), 2.1);

    gl_Position = projectionMatrix * mvPos;
    float perspectiveSize = uPointSize + (uAudioEnergy * 2.1) + (vFresnel * 1.15);
    gl_PointSize = perspectiveSize * (3.6 / max(-mvPos.z, 1.0));
  }
`,WE=`
  uniform float uAudioEnergy;
  uniform float uCoreOpacity;

  varying float vDisplacement;
  varying float vFresnel;

  void main() {
    vec2 uv = 2.0 * gl_PointCoord - 1.0;
    float distSq = dot(uv, uv);
    if (distSq > 1.0) discard;

    float halo = 1.0 - smoothstep(0.05, 1.0, distSq);

    // Disciplined Obsidian -> Brushed Titanium -> Pure Platinum palette
    vec3 obsidianSteel = vec3(0.28, 0.29, 0.33);
    vec3 brushedTitanium = vec3(0.68, 0.70, 0.74);
    vec3 purePlatinum = vec3(0.98, 0.99, 1.00);
    vec3 mutedAlpha = vec3(0.32, 0.86, 0.67);

    float energyPeak = clamp(vDisplacement * 0.85 + vFresnel * 0.45 + uAudioEnergy * 0.4, 0.0, 1.0);
    vec3 baseShade = mix(obsidianSteel, brushedTitanium, smoothstep(0.15, 0.62, energyPeak));
    vec3 finalColor = mix(baseShade, purePlatinum, smoothstep(0.55, 0.96, energyPeak));

    // Whisper of emerald telemetry strictly on active vocal harmonics
    finalColor = mix(finalColor, mutedAlpha, uAudioEnergy * vFresnel * 0.24);

    float alpha = (uCoreOpacity * 0.62 + uAudioEnergy * 0.28 + vFresnel * 0.25) * halo;
    gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 0.95));
  }
`,wg=({isSpeaking:s,shaderParams:e,getAudioEnergy:n,className:r=""})=>{const a=Xe.useRef(null),c=Xe.useRef(s),d=Xe.useRef(e);return Xe.useEffect(()=>{c.current=s},[s]),Xe.useEffect(()=>{d.current=e},[e]),Xe.useEffect(()=>{const u=a.current;if(!u)return;const p=new BE,m=u.clientWidth||window.innerWidth,_=u.clientHeight||window.innerHeight,x=new Zn(42,m/_,.1,100);x.position.set(0,0,5.4);const g=new zE({antialias:!0,alpha:!0,powerPreference:"high-performance"});g.setSize(m,_),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(197380,0),u.appendChild(g.domElement);const S=new zo;p.add(S);const E={uTime:{value:0},uAudioEnergy:{value:d.current.audioEnergy},uTurbulence:{value:d.current.turbulence},uDisplacement:{value:d.current.displacement},uPointSize:{value:d.current.pointSize},uCoreOpacity:{value:d.current.coreOpacity},uMouse:{value:new Mt(0,0)}},T=new Ll(1.18,22),y=new Xi({vertexShader:GE,fragmentShader:WE,uniforms:E,transparent:!0,depthWrite:!1,blending:Zu}),v=new HE(T,y);S.add(v);const A=new Ll(1.24,2),L=new ks({color:"#A1A1AA",wireframe:!0,transparent:!0,opacity:.09}),b=new zn(A,L);S.add(b);const V=new ks({color:"#E4E4E7",transparent:!0,opacity:.28}),U=new zn(new Bo(1.74,.004,12,160),V);S.add(U);const F=new ks({color:"#71717A",transparent:!0,opacity:.24}),H=new zn(new Bo(2.04,.0035,12,160,Math.PI*1.45),F);S.add(H);const P=new ks({color:"#F4F4F5",transparent:!0,opacity:.16}),C=new zn(new Bo(2.32,.003,12,160,Math.PI*.72),P);S.add(C);const z=new Mt(0,0),se=de=>{const k=u.getBoundingClientRect();z.x=(de.clientX-k.left)/k.width*2-1,z.y=-((de.clientY-k.top)/k.height*2-1)};window.addEventListener("mousemove",se);const J=()=>{if(!u)return;const de=u.clientWidth,k=u.clientHeight;de>0&&k>0&&(x.aspect=de/k,x.updateProjectionMatrix(),g.setSize(de,k))};window.addEventListener("resize",J);let le=0,me=performance.now();const ae=de=>{le=window.requestAnimationFrame(ae);const k=Math.min((de-me)/1e3,.05);me=de;const ce=de/1e3,re=d.current,O=n(),ie=c.current?(Math.sin(ce*13)*.5+.5)*(Math.sin(ce*4.7)*.5+.5)*.7:0,De=Math.max(re.audioEnergy,O,ie);E.uTime.value=ce,E.uAudioEnergy.value+=(De-E.uAudioEnergy.value)*.16,E.uTurbulence.value=re.turbulence,E.uDisplacement.value=re.displacement,E.uPointSize.value=re.pointSize,E.uCoreOpacity.value=re.coreOpacity,E.uMouse.value.lerp(z,.06);const K=1+E.uAudioEnergy.value*2.2;v.rotation.y+=k*.16*K,v.rotation.z+=k*.05,b.rotation.y-=k*.12*K;const ue=1+E.uAudioEnergy.value*.12;b.scale.setScalar(ue),U.rotation.x=Math.PI/3.1+Math.sin(ce*.4)*.08,U.rotation.z+=k*.28*K,H.rotation.y=-Math.PI/4.2,H.rotation.x+=k*.24*K,C.rotation.z=Math.PI/2.2,C.rotation.y-=k*.34*K,S.rotation.y+=(z.x*.22-S.rotation.y)*.04,S.rotation.x+=(-z.y*.14-S.rotation.x)*.04,g.render(p,x)};return le=window.requestAnimationFrame(ae),()=>{window.cancelAnimationFrame(le),window.removeEventListener("mousemove",se),window.removeEventListener("resize",J),T.dispose(),y.dispose(),A.dispose(),L.dispose(),U.geometry.dispose(),V.dispose(),H.geometry.dispose(),F.dispose(),C.geometry.dispose(),P.dispose(),g.dispose(),g.domElement.parentNode===u&&u.removeChild(g.domElement)}},[n]),w.jsx("div",{ref:a,className:`pointer-events-none relative overflow-hidden ${r}`,style:{WebkitMaskImage:"radial-gradient(circle at 50% 50%, #000 48%, rgba(0,0,0,0.45) 68%, transparent 88%)",maskImage:"radial-gradient(circle at 50% 50%, #000 48%, rgba(0,0,0,0.45) 68%, transparent 88%)"}})},jE=[{id:"CONSERVADOR",label:"Conservador"},{id:"MODERADO",label:"Moderado"},{id:"ARROJADO",label:"Arrojado"}],XE=({macro:s,stealthMode:e,riskProfile:n,onChangeRiskProfile:r,isSpeaking:a,shaderParams:c,getAudioEnergy:d,onNavigate:u,onAskFromHud:p})=>{const[m,_]=Xe.useState(""),x=g=>{g.preventDefault(),m.trim()&&(p(m.trim()),_(""))};return w.jsxs("section",{className:"relative h-screen w-full overflow-hidden bg-transparent pt-[72px]",children:[w.jsx("div",{className:"absolute inset-0 z-0 flex items-center justify-center",children:w.jsx(wg,{isSpeaking:a,shaderParams:c,getAudioEnergy:d,className:"h-full w-full"})}),w.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10 hidden md:block",children:[w.jsxs("svg",{className:"h-full w-full","aria-hidden":"true",children:[w.jsx("line",{x1:"17%",y1:"21%",x2:"29%",y2:"21%",stroke:"rgba(255,255,255,0.22)",strokeWidth:"1"}),w.jsx("line",{x1:"29%",y1:"21%",x2:"36%",y2:"36%",stroke:"rgba(255,255,255,0.22)",strokeWidth:"1"}),w.jsx("circle",{cx:"36%",cy:"36%",r:"2.5",fill:"#F4F4F5"}),w.jsx("line",{x1:"81%",y1:"22%",x2:"70%",y2:"22%",stroke:"rgba(255,255,255,0.22)",strokeWidth:"1"}),w.jsx("line",{x1:"70%",y1:"22%",x2:"62%",y2:"35%",stroke:"rgba(255,255,255,0.22)",strokeWidth:"1"}),w.jsx("circle",{cx:"62%",cy:"35%",r:"2.5",fill:"#F4F4F5"}),w.jsx("line",{x1:"65%",y1:"45%",x2:"80%",y2:"45%",stroke:"rgba(255,255,255,0.16)",strokeWidth:"1"}),w.jsx("circle",{cx:"65%",cy:"45%",r:"2",fill:"#A1A1AA"})]}),w.jsxs("div",{className:"anim-hud-up absolute left-[36px] top-[122px] max-w-[195px]",style:{animationDelay:"380ms"},children:[w.jsx("div",{className:"font-mono text-[11px] tracking-[0.06em] text-white",children:"[ LARIUS_IA ]"}),w.jsx("p",{className:"mt-1 text-[11px] leading-[15px] text-zinc-400",children:"Consultoria patrimonial em tempo real por voz e texto."})]}),w.jsxs("div",{className:"anim-hud-up absolute right-[36px] top-[126px] max-w-[210px] text-right",style:{animationDelay:"480ms"},children:[w.jsx("div",{className:"font-mono text-[11px] tracking-[0.06em] text-white",children:"[ RENDA_ISENTA_IR ]"}),w.jsxs("p",{className:"mt-1 font-mono text-[11px] leading-[15px] text-zinc-400 tabular-nums",children:[e?"R$ ••••• / mês":"R$ 2.480/mês"," · Sem retenção na PF."]})]}),w.jsxs("div",{className:"anim-hud-up absolute right-[36px] top-[42%] max-w-[210px] text-right",style:{animationDelay:"580ms"},children:[w.jsx("div",{className:"font-mono text-[11px] tracking-[0.06em] text-white",children:"[ PROTEÇÃO_MACRO ]"}),w.jsxs("p",{className:"mt-1 font-mono text-[11px] leading-[15px] text-zinc-400 tabular-nums",children:["Selic ",s.selic_pct.toFixed(2),"% · Dólar R$ ",s.usd_brl.toFixed(2)," · IPCA"," ",s.ipca_pct.toFixed(2),"%"]})]})]}),w.jsxs("div",{className:"absolute bottom-6 left-5 right-5 z-20 flex flex-col items-start justify-between gap-6 md:bottom-[36px] md:left-[36px] md:right-[36px] lg:flex-row lg:items-end",children:[w.jsxs("div",{className:"anim-hud-up max-w-[540px] space-y-4",style:{animationDelay:"220ms"},children:[w.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[w.jsxs("span",{className:"inline-flex items-center gap-2 border border-white/[0.14] bg-[#09090B]/75 px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-zinc-300 backdrop-blur-md",children:[w.jsx("span",{className:"h-1.5 w-1.5 bg-emerald-400"}),w.jsx("span",{children:"PERFIL ATIVO"})]}),jE.map(g=>w.jsx("button",{onClick:()=>r(g.id),className:`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${n===g.id?"border-white/60 bg-[#F4F4F5] font-semibold text-[#030304]":"border-white/[0.12] bg-[#09090B]/80 text-zinc-400 hover:border-white/30 hover:text-white"}`,children:g.label},g.id))]}),w.jsxs("h1",{className:"font-display text-[36px] font-medium leading-[0.98] tracking-[-0.03em] text-white sm:text-[48px] md:text-[58px]",children:["Disciplina.",w.jsx("br",{}),w.jsx("span",{className:"text-zinc-400",children:"Capital Blindado."})]}),w.jsx("p",{className:"max-w-[440px] text-[13px] leading-[20px] text-zinc-400 md:text-[14px]",children:"Seleção de ações B3 e fundos imobiliários isentos, projeções líquidas contra bancos tradicionais e orientação por voz com o Larius."}),w.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-1",children:[w.jsxs("button",{onClick:()=>u("larius"),className:"flex items-center gap-2.5 bg-[#F4F4F5] px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.06em] text-[#030304] transition-colors hover:bg-white",children:[w.jsx("span",{children:"✦"}),w.jsx("span",{children:"Conversar com Larius"})]}),w.jsxs("button",{onClick:()=>u("assets"),className:"flex items-center gap-2 border border-white/[0.18] bg-[#09090B]/75 px-5 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-white backdrop-blur-md transition-colors hover:border-white/45",children:[w.jsx("span",{children:"Ver Recomendações"}),w.jsx(bv,{className:"h-3.5 w-3.5"})]})]})]}),w.jsx("div",{className:"anim-hud-up w-full sm:w-[340px]",style:{animationDelay:"400ms"},children:w.jsx(Fv,{badge:"RESUMO PATRIMONIAL // HUD",children:w.jsxs("div",{className:"space-y-3",children:[w.jsxs("div",{className:"flex items-baseline justify-between font-mono tabular-nums",children:[w.jsx("span",{className:"text-[11px] text-zinc-400",children:"PROJEÇÃO 10 ANOS"}),w.jsx("span",{className:"text-sm font-semibold text-white",children:e?"R$ ••••••":"R$ 321.922"})]}),w.jsxs("p",{className:"text-[12px] leading-[17px] text-zinc-300",children:["Carteira calibrada para superar em ",w.jsx("strong",{className:"text-emerald-400",children:"+79%"})," o CDI líquido de bancos tradicionais."]}),w.jsxs("form",{onSubmit:x,className:"flex items-center border border-white/[0.15] bg-[#030304]/90",children:[w.jsx("input",{type:"text",value:m,onChange:g=>_(g.target.value),placeholder:"Pergunte ao Larius (ex: ITUB4)...",className:"w-full bg-transparent px-3 py-2 font-mono text-[11px] text-white placeholder-zinc-600 focus:outline-none"}),w.jsx("button",{type:"submit",className:"flex h-8 w-8 shrink-0 items-center justify-center bg-[#F4F4F5] text-[#030304] hover:bg-white","aria-label":"Enviar para Larius",children:w.jsx(jm,{className:"h-3.5 w-3.5"})})]}),w.jsx("button",{onClick:()=>u("compound"),className:"block font-mono text-[11px] tracking-[0.04em] text-zinc-200 underline-offset-4 hover:text-white hover:underline",children:"SIMULADOR_IR_E_BANCOS →"})]})})})]})]})},$E=[{id:"CONSERVADOR",label:"Conservador"},{id:"MODERADO",label:"Moderado"},{id:"ARROJADO",label:"Arrojado"}],qE=[{id:"INICIANTE",label:"Iniciante"},{id:"INTERMEDIARIO",label:"Intermediário"},{id:"SENIOR",label:"Sênior"}],YE=["Onde devo alocar R$ 3.000 este mês?","Quais bancos têm corretagem zero para ações e FIIs?","Compare juros compostos e Imposto de Renda vs CDB.","Analise WEGE3 e ITUB4 para a minha carteira."],KE=({initialPrompt:s,onConsumeInitialPrompt:e,riskProfile:n,onChangeRiskProfile:r,experienceLevel:a,onChangeExperienceLevel:c,isSpeaking:d,isListening:u,muted:p,shaderParams:m,getAudioEnergy:_,onToggleMute:x,onStopSpeech:g,onSpeak:S,onStartVoice:E})=>{const[T,y]=Xe.useState(""),[v,A]=Xe.useState(!1),[L,b]=Xe.useState("CORE"),[V,U]=Xe.useState([{id:"init-1",sender:"larius",text:"Olá. Sou o Larius, seu consultor financeiro no D.investimentos. Ajuste seu perfil de risco acima e pergunte por voz ou texto sobre ações B3, FIIs, juros compostos ou bancos.",tickers:["ITUB4","SBSP3","WEGE3"],focusMode:"CORE"}]),F=async P=>{const C=P.trim();if(!C)return;U(se=>[...se,{id:`u-${Date.now()}`,sender:"user",text:C}]),A(!0);const z=await Mv(C,n,a);b(z.hud_focus_mode),U(se=>[...se,{id:`l-${Date.now()}`,sender:"larius",text:z.reply_markdown,tickers:z.referenced_tickers,focusMode:z.hud_focus_mode}]),A(!1),S(z.speech_script)};Xe.useEffect(()=>{s&&(F(s),e())},[s]);const H=P=>{if(P.preventDefault(),!T.trim()||v)return;const C=T;y(""),F(C)};return w.jsxs("section",{className:"mx-auto flex min-h-screen max-w-[1380px] flex-col gap-6 px-5 pb-10 pt-[96px] md:px-[36px]",children:[w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border border-white/[0.08] bg-[#09090B]/90 px-5 py-3.5 backdrop-blur-md",children:[w.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[w.jsx("span",{className:"mr-1 font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500",children:"PERFIL DE RISCO:"}),$E.map(P=>w.jsx("button",{onClick:()=>r(P.id),className:`border px-3 py-1.5 font-mono text-[11px] transition-colors ${n===P.id?"border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]":"border-white/[0.08] bg-[#030304] text-zinc-400 hover:border-white/25 hover:text-white"}`,children:P.label},P.id))]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[w.jsx("span",{className:"mr-1 font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500",children:"EXPERIÊNCIA:"}),qE.map(P=>w.jsx("button",{onClick:()=>c(P.id),className:`border px-3 py-1.5 font-mono text-[11px] transition-colors ${a===P.id?"border-white/40 bg-[#141418] font-semibold text-white":"border-white/[0.08] bg-[#030304] text-zinc-400 hover:text-white"}`,children:P.label},P.id))]})]}),w.jsxs("div",{className:"grid flex-1 grid-cols-1 gap-6 lg:grid-cols-12",children:[w.jsxs("div",{className:"relative flex min-h-[460px] flex-col justify-between overflow-hidden border border-white/[0.08] bg-[#030304] p-5 lg:col-span-6",children:[w.jsxs("div",{className:"relative z-10 flex items-center justify-between font-mono text-[11px]",children:[w.jsxs("div",{className:"flex items-center gap-2 text-zinc-300",children:[w.jsx("span",{className:`h-2 w-2 ${d||u?"animate-ping bg-emerald-400":"bg-zinc-500"}`}),w.jsxs("span",{children:["LARIUS // VISÃO ",L]})]}),w.jsx("button",{onClick:x,className:"border border-white/[0.12] bg-[#09090B] p-1.5 text-zinc-300 hover:text-white","aria-label":"Alternar áudio",children:p?w.jsx(Iv,{className:"h-3.5 w-3.5"}):w.jsx(Dv,{className:"h-3.5 w-3.5"})})]}),w.jsx("div",{className:"absolute inset-0 z-0",children:w.jsx(wg,{isSpeaking:d||u,shaderParams:m,getAudioEnergy:_,className:"h-full w-full"})}),w.jsxs("div",{className:"relative z-10 mt-auto flex flex-col items-center gap-3 pt-4",children:[w.jsx("div",{className:"flex h-6 items-end gap-1","aria-hidden":"true",children:Array.from({length:18}).map((P,C)=>w.jsx("span",{className:`w-1 transition-all duration-150 ${d||u?"bg-white":"bg-zinc-700"}`,style:{height:d||u?`${8+C*7%16}px`:"4px"}},C))}),w.jsxs("div",{className:"flex items-center gap-2.5",children:[w.jsxs("button",{onClick:()=>E(P=>void F(P)),className:"flex items-center gap-2 bg-[#F4F4F5] px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#030304] hover:bg-white",children:[w.jsx(Wm,{className:"h-3.5 w-3.5"}),w.jsx("span",{children:u?"Ouvindo Você...":"Falar com Larius"})]}),d&&w.jsx("button",{onClick:g,className:"border border-white/20 bg-[#09090B] px-3.5 py-2.5 font-mono text-[11px] text-zinc-300 hover:text-white",children:"Silenciar"})]})]})]}),w.jsxs("div",{className:"flex min-h-[460px] flex-col justify-between border border-white/[0.08] bg-[#09090B]/90 lg:col-span-6",children:[w.jsx("div",{className:"flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5",children:w.jsxs("div",{children:[w.jsx("h2",{className:"font-display text-sm font-medium text-white",children:"Consultor Larius"}),w.jsxs("p",{className:"font-mono text-[11px] text-zinc-500",children:["Orientação patrimonial adaptada ao perfil ",n]})]})}),w.jsxs("div",{className:"flex-1 space-y-4 overflow-y-auto p-5 text-[13px] leading-relaxed",children:[V.map(P=>w.jsxs("div",{className:P.sender==="user"?"ml-10 border border-white/20 bg-[#F4F4F5] p-3.5 font-medium text-[#030304]":"mr-4 space-y-2 border border-white/[0.08] bg-[#030304] p-4 text-zinc-200",children:[P.sender==="larius"&&w.jsxs("div",{className:"flex items-center justify-between font-mono text-[10px] text-zinc-400",children:[w.jsx("span",{className:"font-semibold text-white",children:"LARIUS // CONSULTORIA"}),P.tickers&&P.tickers.length>0&&w.jsxs("span",{children:["ATIVOS: ",P.tickers.join(" · ")]})]}),w.jsx("div",{className:"whitespace-pre-line",children:P.text})]},P.id)),v&&w.jsx("div",{className:"mr-8 border border-white/[0.07] bg-[#030304] p-3 font-mono text-xs text-zinc-400",children:"Analisando cenário e recomendações..."})]}),w.jsxs("div",{className:"space-y-3 border-t border-white/[0.07] bg-[#030304]/90 p-4",children:[w.jsx("div",{className:"flex flex-wrap gap-1.5",children:YE.map(P=>w.jsx("button",{onClick:()=>void F(P),className:"border border-white/[0.08] bg-[#09090B] px-2.5 py-1 text-left font-mono text-[10.5px] text-zinc-300 transition-colors hover:border-white/35 hover:text-white",children:P},P))}),w.jsxs("form",{onSubmit:H,className:"flex items-center gap-2",children:[w.jsx("input",{type:"text",value:T,onChange:P=>y(P.target.value),placeholder:"Pergunte sobre ações, FIIs, impostos ou bancos...",className:"flex-1 border border-white/[0.12] bg-[#09090B] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-white/40 focus:outline-none"}),w.jsxs("button",{type:"submit",disabled:v,className:"flex items-center gap-2 bg-[#F4F4F5] px-4 py-2.5 font-mono text-xs font-semibold uppercase text-[#030304] hover:bg-white disabled:opacity-50",children:[w.jsx(jm,{className:"h-3.5 w-3.5"}),w.jsx("span",{children:"Enviar"})]})]})]})]})]})]})},ZE=({data:s,positive:e})=>{const n=Math.min(...s),a=Math.max(...s)-n||1,c=s.map((d,u)=>{const p=u/Math.max(s.length-1,1)*78+2,m=20-(d-n)/a*16;return`${p.toFixed(1)},${m.toFixed(1)}`}).join(" ");return w.jsx("svg",{width:"82",height:"22",viewBox:"0 0 82 22",className:"inline-block",children:w.jsx("polyline",{fill:"none",stroke:e?"#34D399":"#F87171",strokeWidth:"1.5",points:c})})},QE=({assets:s,stealthMode:e,riskProfile:n,onChangeRiskProfile:r,onInspectAssetWithLarius:a})=>{const[c,d]=Xe.useState(3e3),[u,p]=Xe.useState(null),[m,_]=Xe.useState("ALL");Xe.useEffect(()=>{let g=!0;return yv(c,n).then(S=>{g&&p(S)}),()=>{g=!1}},[c,n]);const x=s.filter(g=>m==="ALL"||g.group===m);return w.jsxs("section",{className:"mx-auto max-w-[1380px] space-y-6 px-5 pb-16 pt-[96px] md:px-[36px]",children:[w.jsxs("div",{className:"space-y-5 border border-white/[0.08] bg-[#09090B]/90 p-6 backdrop-blur-md",children:[w.jsxs("div",{className:"flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-4 md:flex-row md:items-center",children:[w.jsxs("div",{children:[w.jsx("div",{className:"font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500",children:"RECOMENDAÇÃO DISCRETA DE COMPRA // CORRETAGEM ZERO"}),w.jsx("h2",{className:"font-display text-lg font-medium text-white",children:"Alocador Inteligente de Aporte Mensal"})]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[w.jsxs("div",{className:"border border-white/[0.1] bg-[#030304] px-3 py-2",children:[w.jsx("label",{className:"block font-mono text-[9.5px] uppercase text-zinc-500",children:"Aporte Hoje (R$)"}),w.jsx("input",{type:"number",min:100,step:250,value:c,onChange:g=>d(Math.max(100,Number(g.target.value)||100)),className:"w-32 bg-transparent font-mono text-sm font-bold text-white focus:outline-none tabular-nums"})]}),w.jsxs("div",{className:"border border-white/[0.1] bg-[#030304] px-3 py-2",children:[w.jsx("label",{className:"block font-mono text-[9.5px] uppercase text-zinc-500",children:"Perfil de Risco"}),w.jsxs("select",{value:n,onChange:g=>r(g.target.value),className:"bg-[#030304] font-mono text-xs font-medium text-white focus:outline-none",children:[w.jsx("option",{value:"CONSERVADOR",children:"Conservador (Foco Renda & Selic)"}),w.jsx("option",{value:"MODERADO",children:"Moderado (Equilíbrio IPCA + Dividendos)"}),w.jsx("option",{value:"ARROJADO",children:"Arrojado (Dólar & Crescimento)"})]})]})]})]}),u&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"grid grid-cols-1 gap-4 font-mono tabular-nums sm:grid-cols-3",children:[w.jsxs("div",{className:"border border-white/[0.07] bg-[#030304] p-4",children:[w.jsx("span",{className:"block text-[10px] uppercase text-zinc-500",children:"Total Alocado em Ativos"}),w.jsx("strong",{className:"mt-1 block text-lg text-white",children:e?"R$ •••••":`R$ ${u.total_allocated_brl.toLocaleString("pt-BR",{minimumFractionDigits:2})}`}),w.jsxs("span",{className:"text-[11px] text-zinc-500",children:["Troco Tesouro Selic: R$ ",u.cash_reserve_selic_brl.toFixed(2)]})]}),w.jsxs("div",{className:"border border-white/[0.07] bg-[#030304] p-4",children:[w.jsx("span",{className:"block text-[10px] uppercase text-zinc-500",children:"Nova Renda Passiva Mensal"}),w.jsxs("strong",{className:"mt-1 block text-lg text-emerald-400",children:["+R$ ",u.added_monthly_income_brl.toFixed(2)," / mês"]}),w.jsxs("span",{className:"text-[11px] text-zinc-500",children:["+R$ ",u.added_annual_income_brl.toFixed(2),"/ano isentos de IR"]})]}),w.jsxs("div",{className:"border border-white/[0.07] bg-[#030304] p-4",children:[w.jsx("span",{className:"block text-[10px] uppercase text-zinc-500",children:"Corretagem Prevista"}),w.jsx("strong",{className:"mt-1 block text-lg text-white",children:"R$ 0,00"}),w.jsx("span",{className:"text-[11px] text-emerald-400",children:"Via Íon Itaú / Inter / C6"})]})]}),w.jsx("div",{className:"overflow-x-auto border border-white/[0.07] bg-[#030304]",children:w.jsxs("table",{className:"w-full border-collapse text-left tabular-nums",children:[w.jsx("thead",{children:w.jsxs("tr",{className:"border-b border-white/[0.07] font-mono text-[10.5px] uppercase text-zinc-500",children:[w.jsx("th",{className:"px-4 py-3",children:"Ativo"}),w.jsx("th",{className:"px-4 py-3",children:"Função na Carteira"}),w.jsx("th",{className:"px-4 py-3 text-center",children:"Peso"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Cotação"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Quantidade"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Subtotal"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Renda/Mês"})]})}),w.jsx("tbody",{className:"divide-y divide-white/[0.05] text-xs",children:u.items.map(g=>w.jsxs("tr",{className:"hover:bg-white/[0.03]",children:[w.jsx("td",{className:"px-4 py-3 font-mono font-bold text-white",children:g.ticker}),w.jsxs("td",{className:"px-4 py-3",children:[w.jsx("div",{className:"font-medium text-zinc-200",children:g.name}),w.jsx("div",{className:"text-[11px] text-zinc-500",children:g.role})]}),w.jsxs("td",{className:"px-4 py-3 text-center font-mono text-zinc-400",children:[g.weight_pct,"%"]}),w.jsxs("td",{className:"px-4 py-3 text-right font-mono text-zinc-300",children:["R$ ",g.unit_price.toFixed(2)]}),w.jsx("td",{className:"px-4 py-3 text-right font-mono",children:w.jsxs("span",{className:"bg-[#F4F4F5] px-2.5 py-1 text-[11px] font-bold text-[#030304]",children:[g.quantity," ",g.asset_type==="FII"?"cotas":"ações"]})}),w.jsx("td",{className:"px-4 py-3 text-right font-mono font-semibold text-white",children:e?"R$ ••••":`R$ ${g.subtotal_brl.toFixed(2)}`}),w.jsxs("td",{className:"px-4 py-3 text-right font-mono text-emerald-400",children:["+R$ ",g.monthly_dividend_brl.toFixed(2)]})]},g.ticker))})]})})]})]}),w.jsxs("div",{className:"space-y-4 border border-white/[0.08] bg-[#09090B]/90 p-6 backdrop-blur-md",children:[w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[w.jsxs("div",{children:[w.jsx("div",{className:"font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500",children:"UNIVERSO MONITORADO B3 & FIIs"}),w.jsx("h2",{className:"font-display text-lg font-medium text-white",children:"Recomendações & Indicadores"})]}),w.jsx("div",{className:"flex flex-wrap gap-1.5 font-mono text-[11px]",children:[["ALL","Todos"],["SELIC","Ganhadores Selic"],["IPCA","Blindagem IPCA+"],["DOLLAR","Receita Dólar"],["FII","FIIs Isentos"],["AVOID","Evitados"]].map(([g,S])=>w.jsx("button",{onClick:()=>_(g),className:`border px-3 py-1.5 transition-colors ${m===g?"border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]":"border-white/[0.08] bg-[#030304] text-zinc-400 hover:text-white"}`,children:S},g))})]}),w.jsx("div",{className:"overflow-x-auto border border-white/[0.07] bg-[#030304]",children:w.jsxs("table",{className:"w-full border-collapse text-left tabular-nums",children:[w.jsx("thead",{children:w.jsxs("tr",{className:"border-b border-white/[0.07] font-mono text-[10.5px] uppercase text-zinc-500",children:[w.jsx("th",{className:"px-4 py-3",children:"Ativo"}),w.jsx("th",{className:"px-4 py-3",children:"Setor"}),w.jsx("th",{className:"px-4 py-3 text-center",children:"Tendência"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Preço"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Alvo"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Upside"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Yield"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"ROE"}),w.jsx("th",{className:"px-4 py-3 text-right",children:"Consultor"})]})}),w.jsx("tbody",{className:"divide-y divide-white/[0.05] text-xs",children:x.map(g=>{const S=g.upside>=0;return w.jsxs("tr",{className:"hover:bg-white/[0.03]",children:[w.jsxs("td",{className:"px-4 py-3.5",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"font-mono font-bold text-white",children:g.ticker.replace("_AVOID","")}),w.jsx("span",{className:`border px-1.5 py-0.5 font-mono text-[9.5px] ${S?"border-white/15 bg-white/[0.04] text-zinc-300":"border-rose-400/30 bg-rose-400/10 text-rose-300"}`,children:g.status})]}),w.jsx("div",{className:"mt-0.5 text-[11px] text-zinc-500",children:g.name})]}),w.jsx("td",{className:"px-4 py-3.5 text-zinc-300",children:g.sector}),w.jsx("td",{className:"px-4 py-3.5 text-center",children:w.jsx(ZE,{data:g.spark,positive:S})}),w.jsxs("td",{className:"px-4 py-3.5 text-right font-mono text-zinc-200",children:["R$ ",g.price.toFixed(2)]}),w.jsxs("td",{className:"px-4 py-3.5 text-right font-mono text-zinc-400",children:["R$ ",g.target.toFixed(2)]}),w.jsxs("td",{className:`px-4 py-3.5 text-right font-mono font-semibold ${S?"text-emerald-400":"text-rose-400"}`,children:[S?"+":"",g.upside.toFixed(1),"%"]}),w.jsxs("td",{className:"px-4 py-3.5 text-right font-mono text-zinc-200",children:[g.dy.toFixed(1),"%"]}),w.jsxs("td",{className:"px-4 py-3.5 text-right font-mono text-zinc-400",children:[g.roe.toFixed(1),"%"]}),w.jsx("td",{className:"px-4 py-3.5 text-right",children:w.jsx("button",{onClick:()=>a(g.ticker),className:"border border-white/15 bg-[#09090B] px-2.5 py-1 font-mono text-[10.5px] text-white hover:border-white/50",children:"Ouvir Larius →"})})]},g.ticker)})})]})})]})]})},JE=({series:s})=>{const[e,n]=Xe.useState(Math.max(0,s.length-1));if(s.length===0)return null;const r=760,a=270,c=56,d=20,u=22,p=34,m=r-c-d,_=a-u-p,x=Math.max(...s.map(v=>v.larius_net),1),g=v=>c+v/Math.max(s.length-1,1)*m,S=v=>u+_-v/x*_,E=v=>s.map((A,L)=>`${L===0?"M":"L"} ${g(L).toFixed(1)} ${S(v(A)).toFixed(1)}`).join(" "),T=v=>`${E(v)} L ${g(s.length-1).toFixed(1)} ${(u+_).toFixed(1)} L ${c} ${(u+_).toFixed(1)} Z`,y=s[Math.min(e,s.length-1)];return w.jsxs("div",{className:"relative w-full",children:[w.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tabular-nums",children:[w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsxs("span",{className:"flex items-center gap-1.5 text-white",children:[w.jsx("span",{className:"h-2 w-2 bg-[#F4F4F5]"})," Carteira Larius (Isenta IR)"]}),w.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400",children:[w.jsx("span",{className:"h-2 w-2 bg-emerald-400"})," CDB 100% CDI (Líq. IR)"]}),w.jsxs("span",{className:"flex items-center gap-1.5 text-zinc-500",children:[w.jsx("span",{className:"h-2 w-2 bg-zinc-500"})," Banco 85% CDI"]})]}),w.jsxs("div",{className:"border border-white/[0.1] bg-[#09090B] px-3 py-1 text-zinc-300",children:[y.label,": ",w.jsxs("strong",{className:"text-white",children:["R$ ",y.larius_net.toLocaleString("pt-BR")]})," vs Banco"," ",w.jsxs("span",{className:"text-zinc-400",children:["R$ ",y.bank_85_net.toLocaleString("pt-BR")]})]})]}),w.jsxs("svg",{viewBox:`0 0 ${r} ${a}`,className:"h-[260px] w-full overflow-visible",onMouseLeave:()=>n(s.length-1),children:[w.jsx("defs",{children:w.jsxs("linearGradient",{id:"platinumWaveGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[w.jsx("stop",{offset:"0%",stopColor:"#F4F4F5",stopOpacity:"0.24"}),w.jsx("stop",{offset:"100%",stopColor:"#030304",stopOpacity:"0"})]})}),[.25,.5,.75,1].map(v=>{const A=u+_-v*_,L=Math.round(x*v/1e3);return w.jsxs("g",{children:[w.jsx("line",{x1:c,y1:A,x2:r-d,y2:A,stroke:"rgba(255,255,255,0.06)",strokeWidth:"1"}),w.jsxs("text",{x:c-8,y:A+3,textAnchor:"end",fill:"#71717A",fontSize:"10",fontFamily:"JetBrains Mono",children:[L,"k"]})]},v)}),w.jsx("path",{d:T(v=>v.larius_net),fill:"url(#platinumWaveGrad)"}),w.jsx("path",{d:E(v=>v.bank_85_net),fill:"none",stroke:"#52525B",strokeDasharray:"4 4",strokeWidth:"1.5"}),w.jsx("path",{d:E(v=>v.cdb_100_net),fill:"none",stroke:"#34D399",strokeWidth:"1.8"}),w.jsx("path",{d:E(v=>v.larius_net),fill:"none",stroke:"#F4F4F5",strokeWidth:"2.4"}),w.jsx("line",{x1:g(e),y1:u,x2:g(e),y2:u+_,stroke:"rgba(244,244,245,0.28)",strokeWidth:"1"}),w.jsx("circle",{cx:g(e),cy:S(y.larius_net),r:"4.5",fill:"#F4F4F5",stroke:"#030304",strokeWidth:"2"}),w.jsx("circle",{cx:g(e),cy:S(y.cdb_100_net),r:"3.5",fill:"#34D399"}),s.map((v,A)=>{const L=A===0||A===s.length-1||A%Math.max(1,Math.floor(s.length/5))===0;return w.jsxs("g",{children:[L&&w.jsx("text",{x:g(A),y:a-8,textAnchor:"middle",fill:A===e?"#F4F4F5":"#71717A",fontSize:"10",fontFamily:"JetBrains Mono",children:v.label}),w.jsx("rect",{x:g(A)-m/Math.max(s.length*2,2),y:u,width:m/Math.max(s.length,1),height:_,fill:"transparent",className:"cursor-crosshair",onMouseEnter:()=>n(A)})]},v.year)})]})]})},e1=({brokers:s,stealthMode:e,onAskBrokerWithLarius:n})=>{const[r,a]=Xe.useState(1e4),[c,d]=Xe.useState(1e3),[u,p]=Xe.useState(10),[m,_]=Xe.useState(16.2),[x,g]=Xe.useState(!0),[S,E]=Xe.useState(null),[T,y]=Xe.useState(!1);Xe.useEffect(()=>{let A=!0;return Sv({initialCapital:r,monthlyContribution:c,years:u,expectedRatePct:m,reinvest:x}).then(L=>{A&&E(L)}),()=>{A=!1}},[r,c,u,m,x]);const v=s.filter(A=>!T||A.zero_fee);return w.jsxs("section",{className:"mx-auto max-w-[1380px] space-y-6 px-5 pb-16 pt-[96px] md:px-[36px]",children:[w.jsxs("div",{className:"space-y-6 border border-white/[0.08] bg-[#09090B]/90 p-6 backdrop-blur-md",children:[w.jsxs("div",{children:[w.jsx("div",{className:"font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500",children:"PROJEÇÃO TRIBUTÁRIA // TABELA REGRESSIVA IR (22,5% A 15%)"}),w.jsx("h2",{className:"font-display text-lg font-medium text-white",children:"Simulador Patrimonial: Juros Compostos, Imposto de Renda & Bancos"})]}),w.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5",children:[w.jsxs("div",{className:"border border-white/[0.08] bg-[#030304] p-3.5",children:[w.jsx("label",{className:"block font-mono text-[10px] uppercase text-zinc-500",children:"Capital Inicial (R$)"}),w.jsx("input",{type:"number",min:0,step:1e3,value:r,onChange:A=>a(Math.max(0,Number(A.target.value)||0)),className:"mt-1 w-full bg-transparent font-mono text-base font-bold text-white focus:outline-none"})]}),w.jsxs("div",{className:"border border-white/[0.08] bg-[#030304] p-3.5",children:[w.jsx("label",{className:"block font-mono text-[10px] uppercase text-zinc-500",children:"Aporte Mensal (R$)"}),w.jsx("input",{type:"number",min:0,step:250,value:c,onChange:A=>d(Math.max(0,Number(A.target.value)||0)),className:"mt-1 w-full bg-transparent font-mono text-base font-bold text-white focus:outline-none"})]}),w.jsxs("div",{className:"border border-white/[0.08] bg-[#030304] p-3.5",children:[w.jsxs("label",{className:"block font-mono text-[10px] uppercase text-zinc-500",children:["Horizonte: ",w.jsxs("span",{className:"text-white",children:[u," anos"]})]}),w.jsx("input",{type:"range",min:1,max:30,value:u,onChange:A=>p(Number(A.target.value)),className:"mt-3 w-full accent-white"})]}),w.jsxs("div",{className:"border border-white/[0.08] bg-[#030304] p-3.5",children:[w.jsx("label",{className:"block font-mono text-[10px] uppercase text-zinc-500",children:"Taxa Alvo (% a.a.)"}),w.jsx("input",{type:"number",min:4,max:35,step:.5,value:m,onChange:A=>_(Number(A.target.value)||16.2),className:"mt-1 w-full bg-transparent font-mono text-base font-bold text-emerald-400 focus:outline-none"})]}),w.jsxs("div",{className:"border border-white/[0.08] bg-[#030304] p-3.5",children:[w.jsx("label",{className:"block font-mono text-[10px] uppercase text-zinc-500",children:"Reinvestimento"}),w.jsxs("select",{value:x?"yes":"no",onChange:A=>g(A.target.value==="yes"),className:"mt-1.5 w-full bg-[#030304] font-mono text-xs font-semibold text-white focus:outline-none",children:[w.jsx("option",{value:"yes",children:"Sim (Compor Bola de Neve)"}),w.jsx("option",{value:"no",children:"Não (Sacar Dividendos)"})]})]})]}),S&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"grid grid-cols-1 gap-4 font-mono tabular-nums sm:grid-cols-2 lg:grid-cols-4",children:[w.jsxs("div",{className:"border border-white/25 bg-[#030304] p-4",children:[w.jsx("span",{className:"text-[11px] text-zinc-400",children:"Carteira Larius (Isenta IR)"}),w.jsx("div",{className:"mt-1 text-xl font-bold text-white",children:e?"R$ ••••••":`R$ ${S.end_larius_net.toLocaleString("pt-BR")}`}),w.jsx("span",{className:"text-[10.5px] text-emerald-400",children:"IR s/ Dividendos: R$ 0"})]}),w.jsxs("div",{className:"border border-white/[0.08] bg-[#030304] p-4",children:[w.jsx("span",{className:"text-[11px] text-zinc-400",children:"CDB 100% CDI (Líquido IR)"}),w.jsx("div",{className:"mt-1 text-xl font-bold text-zinc-200",children:e?"R$ ••••••":`R$ ${S.end_cdb_100_net.toLocaleString("pt-BR")}`}),w.jsxs("span",{className:"text-[10.5px] text-rose-400",children:["-R$ ",S.ir_retained_cdb.toLocaleString("pt-BR")," retidos (",S.ir_rate_pct,"% IR)"]})]}),w.jsxs("div",{className:"border border-white/[0.08] bg-[#030304] p-4",children:[w.jsx("span",{className:"text-[11px] text-zinc-400",children:"Banco Varejo (85% CDI Líq.)"}),w.jsx("div",{className:"mt-1 text-xl font-bold text-zinc-300",children:e?"R$ ••••••":`R$ ${S.end_bank_85_net.toLocaleString("pt-BR")}`}),w.jsx("span",{className:"text-[10.5px] text-zinc-500",children:"Spread + pedágio fiscal"})]}),w.jsxs("div",{className:"border border-white/[0.08] bg-[#030304] p-4",children:[w.jsx("span",{className:"text-[11px] text-zinc-400",children:"Vantagem Líquida Larius"}),w.jsx("div",{className:"mt-1 text-xl font-bold text-emerald-400",children:e?"+R$ ••••••":`+R$ ${S.alpha_over_bank.toLocaleString("pt-BR")}`}),w.jsx("span",{className:"text-[10.5px] text-zinc-500",children:"Acima do banco tradicional"})]})]}),w.jsx("div",{className:"border border-white/[0.07] bg-[#030304] p-5",children:w.jsx(JE,{series:S.series})})]})]}),w.jsxs("div",{className:"space-y-5 border border-white/[0.08] bg-[#09090B]/90 p-6 backdrop-blur-md",children:[w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[w.jsxs("div",{children:[w.jsx("div",{className:"font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500",children:"AUDITORIA DE CUSTÓDIA & TAXAS"}),w.jsx("h2",{className:"font-display text-lg font-medium text-white",children:"Comparativo Interativo de Bancos & Corretoras"})]}),w.jsxs("div",{className:"flex gap-1.5 font-mono text-[11px]",children:[w.jsxs("button",{onClick:()=>y(!1),className:`border px-3 py-1.5 ${T?"border-white/[0.1] bg-[#030304] text-zinc-400":"border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]"}`,children:["Todas (",s.length,")"]}),w.jsx("button",{onClick:()=>y(!0),className:`border px-3 py-1.5 ${T?"border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]":"border-white/[0.1] bg-[#030304] text-zinc-400"}`,children:"Taxa Zero Real"})]})]}),w.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:v.map(A=>w.jsxs("div",{className:"flex flex-col justify-between space-y-4 border border-white/[0.08] bg-[#030304] p-5 transition-colors hover:border-white/25",children:[w.jsxs("div",{className:"space-y-3",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"flex h-10 w-10 items-center justify-center border border-white/20 bg-[#141418] font-mono text-xs font-bold text-white",children:A.short_code}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-sm font-semibold text-white",children:A.name}),w.jsx("p",{className:"text-[11px] text-zinc-500",children:A.subtitle})]})]}),w.jsx("span",{className:`border px-2 py-0.5 font-mono text-[10px] ${A.zero_fee?"border-emerald-400/30 bg-emerald-400/10 text-emerald-300":"border-white/10 bg-white/[0.04] text-zinc-300"}`,children:A.zero_fee?"Taxa R$ 0":A.fee_stock})]}),w.jsx("p",{className:"text-xs leading-relaxed text-zinc-400",children:A.verdict}),w.jsxs("div",{className:"grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-3 font-mono text-[11px] tabular-nums",children:[w.jsxs("div",{children:[w.jsx("span",{className:"block text-[9.5px] text-zinc-500",children:"Ações"}),w.jsx("strong",{className:"text-white",children:A.fee_stock})]}),w.jsxs("div",{children:[w.jsx("span",{className:"block text-[9.5px] text-zinc-500",children:"FIIs"}),w.jsx("strong",{className:"text-emerald-400",children:A.fee_fii})]}),w.jsxs("div",{children:[w.jsx("span",{className:"block text-[9.5px] text-zinc-500",children:"CDB Padrão"}),w.jsx("strong",{className:"text-zinc-200",children:A.cdb_rate})]})]})]}),w.jsxs("button",{onClick:()=>n(A.name),className:"w-full border border-white/[0.12] bg-[#09090B] py-2 font-mono text-[11px] text-zinc-200 transition-colors hover:border-white/40 hover:text-white",children:["Consultar Larius sobre ",A.name," →"]})]},A.id))})]})]})},t1=av.lazy(()=>gv(()=>import("./AdminConsoleView-aqzdnfrR.js"),[],import.meta.url).then(s=>({default:s.AdminConsoleView})));function Fm(){return typeof window>"u"?!1:window.location.pathname==="/admin"||window.location.hash==="#/admin"}const Om={audioEnergy:.14,turbulence:1.05,displacement:.22,pointSize:2.1,coreOpacity:.84},n1=()=>{const[s,e]=Xe.useState(Fm),[n,r]=Xe.useState("hud"),[a,c]=Xe.useState(!1),[d,u]=Xe.useState("MODERADO"),[p,m]=Xe.useState("INTERMEDIARIO"),[_,x]=Xe.useState(km),[g,S]=Xe.useState(Vo),[E,T]=Xe.useState(zm),[y,v]=Xe.useState(null),A=Tv();Xe.useEffect(()=>{Pp().then(F=>{F&&Np().then(x),_v().then(S),xv().then(T)});const V=()=>e(Fm()),U=F=>{F.shiftKey&&F.key.toLowerCase()==="h"&&c(H=>!H)};return window.addEventListener("popstate",V),window.addEventListener("hashchange",V),window.addEventListener("keydown",U),()=>{window.removeEventListener("popstate",V),window.removeEventListener("hashchange",V),window.removeEventListener("keydown",U)}},[]);const L=V=>{v(V),r("larius")},b=()=>{window.location.pathname==="/admin"?window.history.pushState({},"","/"):window.location.hash==="#/admin"&&(window.location.hash=""),e(!1),Pp().then(V=>{V&&Np().then(x)})};return s?w.jsxs("div",{className:"relative min-h-screen w-full bg-[#030304] text-[#F4F4F5]",children:[w.jsx(Ip,{}),w.jsx(Xe.Suspense,{fallback:w.jsx("div",{className:"flex min-h-screen items-center justify-center font-mono text-xs text-zinc-400",children:"Carregando Modo Arquiteto..."}),children:w.jsx(t1,{onExitToPublic:b})})]}):w.jsxs("div",{className:"relative min-h-screen w-full bg-[#030304] text-[#F4F4F5]",children:[w.jsx(Ip,{}),w.jsx(Uv,{activeView:n,onSelectView:r,macro:_,stealthMode:a,onToggleStealth:()=>c(V=>!V),isVoiceActive:A.isSpeaking||A.isListening,onQuickVoiceClick:()=>r("larius")}),w.jsxs("main",{className:"relative z-10",children:[n==="hud"&&w.jsx(XE,{macro:_,stealthMode:a,riskProfile:d,onChangeRiskProfile:u,isSpeaking:A.isSpeaking||A.isListening,shaderParams:Om,getAudioEnergy:A.getAudioEnergy,onNavigate:r,onAskFromHud:L}),n==="larius"&&w.jsx(KE,{initialPrompt:y,onConsumeInitialPrompt:()=>v(null),riskProfile:d,onChangeRiskProfile:u,experienceLevel:p,onChangeExperienceLevel:m,isSpeaking:A.isSpeaking,isListening:A.isListening,muted:A.muted,shaderParams:Om,getAudioEnergy:A.getAudioEnergy,onToggleMute:()=>A.setMuted(V=>!V),onStopSpeech:A.stopSpeaking,onSpeak:V=>void A.speak(V),onStartVoice:V=>{A.startVoiceCommand(V)}}),n==="assets"&&w.jsx(QE,{assets:g,stealthMode:a,riskProfile:d,onChangeRiskProfile:u,onInspectAssetWithLarius:V=>L(`Larius, faça uma análise sobre ${V}.`)}),n==="compound"&&w.jsx(e1,{brokers:E,stealthMode:a,onAskBrokerWithLarius:V=>L(`Larius, compare taxas e benefícios do ${V}.`)})]})]})};hv.createRoot(document.getElementById("root")).render(w.jsx(Xe.StrictMode,{children:w.jsx(n1,{})}));export{Dv as V,l1 as a,u1 as b,$i as c,d1 as d,r1 as e,o1 as f,Ev as g,c1 as h,w as j,i1 as l,Xe as r,a1 as s,s1 as v};
