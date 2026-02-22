(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var eh={exports:{}},wo={};var b0;function gS(){if(b0)return wo;b0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var T0;function _S(){return T0||(T0=1,eh.exports=gS()),eh.exports}var jt=_S(),nh={exports:{}},re={};var A0;function vS(){if(A0)return re;A0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(O,Y,_t){this.props=O,this.context=Y,this.refs=M,this.updater=_t||b}x.prototype.isReactComponent={},x.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function C(){}C.prototype=x.prototype;function P(O,Y,_t){this.props=O,this.context=Y,this.refs=M,this.updater=_t||b}var N=P.prototype=new C;N.constructor=P,w(N,x.prototype),N.isPureReactComponent=!0;var G=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(O,Y,_t){var At=_t.ref;return{$$typeof:o,type:O,key:Y,ref:At!==void 0?At:null,props:_t}}function ht(O,Y){return D(O.type,Y,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function $(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_t){return Y[_t]})}var at=/\/+/g;function lt(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):Y.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,Y,_t,At,zt){var et=typeof O;(et==="undefined"||et==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(et){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case o:case e:vt=!0;break;case v:return vt=O._init,L(vt(O._payload),Y,_t,At,zt)}}if(vt)return zt=zt(O),vt=At===""?"."+lt(O,0):At,G(zt)?(_t="",vt!=null&&(_t=vt.replace(at,"$&/")+"/"),L(zt,Y,_t,"",function(Kt){return Kt})):zt!=null&&(H(zt)&&(zt=ht(zt,_t+(zt.key==null||O&&O.key===zt.key?"":(""+zt.key).replace(at,"$&/")+"/")+vt)),Y.push(zt)),1;vt=0;var bt=At===""?".":At+":";if(G(O))for(var Vt=0;Vt<O.length;Vt++)At=O[Vt],et=bt+lt(At,Vt),vt+=L(At,Y,_t,et,zt);else if(Vt=E(O),typeof Vt=="function")for(O=Vt.call(O),Vt=0;!(At=O.next()).done;)At=At.value,et=bt+lt(At,Vt++),vt+=L(At,Y,_t,et,zt);else if(et==="object"){if(typeof O.then=="function")return L(J(O),Y,_t,At,zt);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function B(O,Y,_t){if(O==null)return O;var At=[],zt=0;return L(O,At,"","",function(et){return Y.call(_t,et,zt++)}),At}function ot(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(_t){(O._status===0||O._status===-1)&&(O._status=1,O._result=_t)},function(_t){(O._status===0||O._status===-1)&&(O._status=2,O._result=_t)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var dt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:B,forEach:function(O,Y,_t){B(O,function(){Y.apply(this,arguments)},_t)},count:function(O){var Y=0;return B(O,function(){Y++}),Y},toArray:function(O){return B(O,function(Y){return Y})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return re.Activity=S,re.Children=Et,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},re.cache=function(O){return function(){return O.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(O,Y,_t){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=w({},O.props),zt=O.key;if(Y!=null)for(et in Y.key!==void 0&&(zt=""+Y.key),Y)!T.call(Y,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Y.ref===void 0||(At[et]=Y[et]);var et=arguments.length-2;if(et===1)At.children=_t;else if(1<et){for(var vt=Array(et),bt=0;bt<et;bt++)vt[bt]=arguments[bt+2];At.children=vt}return D(O.type,zt,At)},re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},re.createElement=function(O,Y,_t){var At,zt={},et=null;if(Y!=null)for(At in Y.key!==void 0&&(et=""+Y.key),Y)T.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(zt[At]=Y[At]);var vt=arguments.length-2;if(vt===1)zt.children=_t;else if(1<vt){for(var bt=Array(vt),Vt=0;Vt<vt;Vt++)bt[Vt]=arguments[Vt+2];zt.children=bt}if(O&&O.defaultProps)for(At in vt=O.defaultProps,vt)zt[At]===void 0&&(zt[At]=vt[At]);return D(O,et,zt)},re.createRef=function(){return{current:null}},re.forwardRef=function(O){return{$$typeof:p,render:O}},re.isValidElement=H,re.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ot}},re.memo=function(O,Y){return{$$typeof:d,type:O,compare:Y===void 0?null:Y}},re.startTransition=function(O){var Y=z.T,_t={};z.T=_t;try{var At=O(),zt=z.S;zt!==null&&zt(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,dt)}catch(et){dt(et)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),z.T=Y}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(O){return z.H.use(O)},re.useActionState=function(O,Y,_t){return z.H.useActionState(O,Y,_t)},re.useCallback=function(O,Y){return z.H.useCallback(O,Y)},re.useContext=function(O){return z.H.useContext(O)},re.useDebugValue=function(){},re.useDeferredValue=function(O,Y){return z.H.useDeferredValue(O,Y)},re.useEffect=function(O,Y){return z.H.useEffect(O,Y)},re.useEffectEvent=function(O){return z.H.useEffectEvent(O)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(O,Y,_t){return z.H.useImperativeHandle(O,Y,_t)},re.useInsertionEffect=function(O,Y){return z.H.useInsertionEffect(O,Y)},re.useLayoutEffect=function(O,Y){return z.H.useLayoutEffect(O,Y)},re.useMemo=function(O,Y){return z.H.useMemo(O,Y)},re.useOptimistic=function(O,Y){return z.H.useOptimistic(O,Y)},re.useReducer=function(O,Y,_t){return z.H.useReducer(O,Y,_t)},re.useRef=function(O){return z.H.useRef(O)},re.useState=function(O){return z.H.useState(O)},re.useSyncExternalStore=function(O,Y,_t){return z.H.useSyncExternalStore(O,Y,_t)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.4",re}var R0;function Ld(){return R0||(R0=1,nh.exports=vS()),nh.exports}var ts=Ld(),ih={exports:{}},Do={},ah={exports:{}},sh={};var C0;function xS(){return C0||(C0=1,(function(o){function e(L,B){var ot=L.length;L.push(B);t:for(;0<ot;){var dt=ot-1>>>1,Et=L[dt];if(0<l(Et,B))L[dt]=B,L[ot]=Et,ot=dt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var B=L[0],ot=L.pop();if(ot!==B){L[0]=ot;t:for(var dt=0,Et=L.length,O=Et>>>1;dt<O;){var Y=2*(dt+1)-1,_t=L[Y],At=Y+1,zt=L[At];if(0>l(_t,ot))At<Et&&0>l(zt,_t)?(L[dt]=zt,L[At]=ot,dt=At):(L[dt]=_t,L[Y]=ot,dt=Y);else if(At<Et&&0>l(zt,ot))L[dt]=zt,L[At]=ot,dt=At;else break t}}return B}function l(L,B){var ot=L.sortIndex-B.sortIndex;return ot!==0?ot:L.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,S=null,_=3,E=!1,b=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var B=i(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=L)s(d),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(d)}}function G(L){if(w=!1,N(L),!b)if(i(m)!==null)b=!0,I||(I=!0,$());else{var B=i(d);B!==null&&J(G,B.startTime-L)}}var I=!1,z=-1,T=5,D=-1;function ht(){return M?!0:!(o.unstable_now()-D<T)}function H(){if(M=!1,I){var L=o.unstable_now();D=L;var B=!0;try{t:{b=!1,w&&(w=!1,C(z),z=-1),E=!0;var ot=_;try{e:{for(N(L),S=i(m);S!==null&&!(S.expirationTime>L&&ht());){var dt=S.callback;if(typeof dt=="function"){S.callback=null,_=S.priorityLevel;var Et=dt(S.expirationTime<=L);if(L=o.unstable_now(),typeof Et=="function"){S.callback=Et,N(L),B=!0;break e}S===i(m)&&s(m),N(L)}else s(m);S=i(m)}if(S!==null)B=!0;else{var O=i(d);O!==null&&J(G,O.startTime-L),B=!1}}break t}finally{S=null,_=ot,E=!1}B=void 0}}finally{B?$():I=!1}}}var $;if(typeof P=="function")$=function(){P(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,lt=at.port2;at.port1.onmessage=H,$=function(){lt.postMessage(null)}}else $=function(){x(H,0)};function J(L,B){z=x(function(){L(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(L){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var ot=_;_=B;try{return L()}finally{_=ot}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ot=_;_=L;try{return B()}finally{_=ot}},o.unstable_scheduleCallback=function(L,B,ot){var dt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?dt+ot:dt):ot=dt,L){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,L={id:v++,callback:B,priorityLevel:L,startTime:ot,expirationTime:Et,sortIndex:-1},ot>dt?(L.sortIndex=ot,e(d,L),i(m)===null&&L===i(d)&&(w?(C(z),z=-1):w=!0,J(G,ot-dt))):(L.sortIndex=Et,e(m,L),b||E||(b=!0,I||(I=!0,$()))),L},o.unstable_shouldYield=ht,o.unstable_wrapCallback=function(L){var B=_;return function(){var ot=_;_=B;try{return L.apply(this,arguments)}finally{_=ot}}}})(sh)),sh}var w0;function SS(){return w0||(w0=1,ah.exports=xS()),ah.exports}var rh={exports:{}},Tn={};var D0;function MS(){if(D0)return Tn;D0=1;var o=Ld();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(m,d,null,v)},Tn.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},Tn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Tn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Tn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Tn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Tn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Tn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Tn.requestFormReset=function(m){s.d.r(m)},Tn.unstable_batchedUpdates=function(m,d){return m(d)},Tn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var U0;function yS(){if(U0)return rh.exports;U0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rh.exports=MS(),rh.exports}var N0;function ES(){if(N0)return Do;N0=1;var o=SS(),e=Ld(),i=yS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,A=c.child;A;){if(A===a){g=!0,a=c,r=f;break}if(A===r){g=!0,r=c,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,r=c;break}if(A===r){g=!0,r=f,a=c;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var J=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},dt=[],Et=-1;function O(t){return{current:t}}function Y(t){0>Et||(t.current=dt[Et],dt[Et]=null,Et--)}function _t(t,n){Et++,dt[Et]=t.current,t.current=n}var At=O(null),zt=O(null),et=O(null),vt=O(null);function bt(t,n){switch(_t(et,n),_t(zt,t),_t(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Yg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Yg(n),t=jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(At),_t(At,t)}function Vt(){Y(At),Y(zt),Y(et)}function Kt(t){t.memoizedState!==null&&_t(vt,t);var n=At.current,a=jg(n,t.type);n!==a&&(_t(zt,t),_t(At,a))}function $t(t){zt.current===t&&(Y(At),Y(zt)),vt.current===t&&(Y(vt),To._currentValue=ot)}var Ke,ve;function me(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+ve}var Ue=!1;function oe(t,n){if(!t||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var nt=rt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(rt){nt=rt}t.call(gt.prototype)}}else{try{throw Error()}catch(rt){nt=rt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&nt&&typeof rt.stack=="string")return[rt.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var F=g.split(`
`),Q=A.split(`
`);for(c=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===F.length||c===Q.length)for(r=F.length-1,c=Q.length-1;1<=r&&0<=c&&F[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(F[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||F[r]!==Q[c]){var ft=`
`+F[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=c);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?me(a):""}function Ze(t,n){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return me("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Ze(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,be=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,U=o.unstable_requestPaint,y=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Zt=o.log,te=o.unstable_setDisableYieldValue,yt=null,St=null;function Lt(t){if(typeof Zt=="function"&&te(t),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(yt,t)}catch{}}var Nt=Math.clz32?Math.clz32:W,Ot=Math.log,ue=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ot(t)/ue|0)|0}var Rt=256,Tt=262144,Pt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=Mt(r):(g&=A,g!==0?c=Mt(g):a||(a=A&~t,a!==0&&(c=Mt(a))))):(A=r&~f,A!==0?c=Mt(A):g!==0?c=Mt(g):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,F=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Nt(a),gt=1<<ft;A[ft]=0,F[ft]=-1;var nt=Q[ft];if(nt!==null)for(Q[ft]=null,ft=0;ft<nt.length;ft++){var rt=nt[ft];rt!==null&&(rt.lane&=-536870913)}a&=~gt}r!==0&&Ir(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ir(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Nt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ns(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Nt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Zo(t,n){var a=n&-n;return a=(a&42)!==0?1:Ls(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ls(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Os(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ui(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:_0(t.type))}function Ps(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var xi=Math.random().toString(36).slice(2),an="__reactFiber$"+xi,hn="__reactProps$"+xi,Wi="__reactContainer$"+xi,Sa="__reactEvents$"+xi,Ko="__reactListeners$"+xi,Qo="__reactHandles$"+xi,Jo="__reactResources$"+xi,ns="__reactMarker$"+xi;function Hr(t){delete t[an],delete t[hn],delete t[Sa],delete t[Ko],delete t[Qo]}function Ma(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Wi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=e0(t);t!==null;){if(a=t[an])return a;t=e0(t)}return n}t=a,a=t.parentNode}return null}function ya(t){if(t=t[an]||t[Wi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function is(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function R(t){var n=t[Jo];return n||(n=t[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[ns]=!0}var st=new Set,tt={};function Z(t,n){wt(t,n),wt(t+"Capture",n)}function wt(t,n){for(tt[t]=n,t=0;t<n.length;t++)st.add(n[t])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},kt={};function Yt(t){return We.call(kt,t)?!0:We.call(Dt,t)?!1:Bt.test(t)?kt[t]=!0:(Dt[t]=!0,!1)}function ee(t,n,a){if(Yt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function se(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function It(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Re(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function dn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=qe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function ie(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Un(t,n,a,r,c,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ce(n)):t.value!==""+ce(n)&&(t.value=""+ce(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Si(t,g,ce(n)):a!=null?Si(t,g,ce(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ce(A):t.removeAttribute("name")}function qn(t,n,a,r,c,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Re(t);return}a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Re(t)}function Si(t,n,a){n==="number"&&Gt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Yn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+ce(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ce(a):""}function sn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ce(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Re(t)}function Nn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||rn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Mi(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Mi(t,f,n[f])}function zs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(t){return dv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var Qu=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bs=null,Fs=null;function qd(t){var n=ya(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Un(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[hn]||null;if(!c)throw Error(s(90));Un(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&dn(r)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Yn(t,!!a.multiple,n,!1)}}}var $u=!1;function Yd(t,n,a){if($u)return t(n,a);$u=!0;try{var r=t(n);return r}finally{if($u=!1,(Bs!==null||Fs!==null)&&(Hl(),Bs&&(n=Bs,t=Fs,Fs=Bs=null,qd(n),t)))for(n=0;n<t.length;n++)qd(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=!1;if(ji)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){tc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{tc=!1}var Ea=null,ec=null,tl=null;function jd(){if(tl)return tl;var t,n=ec,a=n.length,r,c="value"in Ea?Ea.value:Ea.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return tl=c.slice(t,1<r?1-r:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Zd(){return!1}function zn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:Zd,this.isPropagationStopped=Zd,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=zn(as),Xr=S({},as,{view:0,detail:0}),pv=zn(Xr),nc,ic,kr,al=S({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kr&&(kr&&t.type==="mousemove"?(nc=t.screenX-kr.screenX,ic=t.screenY-kr.screenY):ic=nc=0,kr=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Kd=zn(al),mv=S({},al,{dataTransfer:0}),gv=zn(mv),_v=S({},Xr,{relatedTarget:0}),ac=zn(_v),vv=S({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=zn(vv),Sv=S({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mv=zn(Sv),yv=S({},as,{data:0}),Qd=zn(yv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Tv[t])?!!n[t]:!1}function sc(){return Av}var Rv=S({},Xr,{key:function(t){if(t.key){var n=Ev[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cv=zn(Rv),wv=S({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=zn(wv),Dv=S({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),Uv=zn(Dv),Nv=S({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=zn(Nv),Ov=S({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=zn(Ov),zv=S({},as,{newState:0,oldState:0}),Bv=zn(zv),Fv=[9,13,27,32],rc=ji&&"CompositionEvent"in window,Wr=null;ji&&"documentMode"in document&&(Wr=document.documentMode);var Iv=ji&&"TextEvent"in window&&!Wr,$d=ji&&(!rc||Wr&&8<Wr&&11>=Wr),tp=" ",ep=!1;function np(t,n){switch(t){case"keyup":return Fv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function Hv(t,n){switch(t){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(ep=!0,tp);case"textInput":return t=n.data,t===tp&&ep?null:t;default:return null}}function Gv(t,n){if(Is)return t==="compositionend"||!rc&&np(t,n)?(t=jd(),tl=ec=Ea=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $d&&n.locale!=="ko"?null:n.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Vv[t.type]:n==="textarea"}function sp(t,n,a,r){Bs?Fs?Fs.push(r):Fs=[r]:Bs=r,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function Xv(t){Gg(t,0)}function sl(t){var n=is(t);if(dn(n))return t}function rp(t,n){if(t==="change")return n}var op=!1;if(ji){var oc;if(ji){var lc="oninput"in document;if(!lc){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),lc=typeof lp.oninput=="function"}oc=lc}else oc=!1;op=oc&&(!document.documentMode||9<document.documentMode)}function up(){qr&&(qr.detachEvent("onpropertychange",cp),Yr=qr=null)}function cp(t){if(t.propertyName==="value"&&sl(Yr)){var n=[];sp(n,Yr,t,Ju(t)),Yd(Xv,n)}}function kv(t,n,a){t==="focusin"?(up(),qr=n,Yr=a,qr.attachEvent("onpropertychange",cp)):t==="focusout"&&up()}function Wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Yr)}function qv(t,n){if(t==="click")return sl(n)}function Yv(t,n){if(t==="input"||t==="change")return sl(n)}function jv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:jv;function jr(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!We.call(n,c)||!jn(t[c],n[c]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,n){var a=fp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fp(a)}}function dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Gt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Gt(t.document)}return n}function uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Zv=ji&&"documentMode"in document&&11>=document.documentMode,Hs=null,cc=null,Zr=null,fc=!1;function mp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Hs==null||Hs!==Gt(r)||(r=Hs,"selectionStart"in r&&uc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&jr(Zr,r)||(Zr=r,r=Yl(cc,"onSelect"),0<r.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Hs)))}function ss(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},hc={},gp={};ji&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function rs(t){if(hc[t])return hc[t];if(!Gs[t])return t;var n=Gs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in gp)return hc[t]=n[a];return t}var _p=rs("animationend"),vp=rs("animationiteration"),xp=rs("animationstart"),Kv=rs("transitionrun"),Qv=rs("transitionstart"),Jv=rs("transitioncancel"),Sp=rs("transitionend"),Mp=new Map,dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dc.push("scrollEnd");function yi(t,n){Mp.set(t,n),Z(n,[t])}var rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Vs=0,pc=0;function ol(){for(var t=Vs,n=pc=Vs=0;n<t;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&yp(a,c,f)}}function ll(t,n,a,r){si[Vs++]=t,si[Vs++]=n,si[Vs++]=a,si[Vs++]=r,pc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function mc(t,n,a,r){return ll(t,n,a,r),ul(t)}function os(t,n){return ll(t,null,null,n),ul(t)}function yp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Nt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(t){if(50<vo)throw vo=0,Tf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xs={};function $v(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,r){return new $v(t,n,a,r)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ep(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")gc(t)&&(g=1);else if(typeof t=="string")g=aS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Zn(31,a,n,c),t.elementType=D,t.lanes=f,t;case w:return ls(a.children,c,f,n);case M:g=8,c|=24;break;case x:return t=Zn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case G:return t=Zn(13,a,n,c),t.elementType=G,t.lanes=f,t;case I:return t=Zn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:g=10;break t;case C:g=9;break t;case N:g=11;break t;case z:g=14;break t;case T:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Zn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ls(t,n,a,r){return t=Zn(7,t,r,n),t.lanes=a,t}function _c(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function bp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function vc(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Tp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=Tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},Tp.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var ks=[],Ws=0,fl=null,Kr=0,oi=[],li=0,ba=null,Ni=1,Li="";function Ki(t,n){ks[Ws++]=Kr,ks[Ws++]=fl,fl=t,Kr=n}function Ap(t,n,a){oi[li++]=Ni,oi[li++]=Li,oi[li++]=ba,ba=t;var r=Ni;t=Li;var c=32-Nt(r)-1;r&=~(1<<c),a+=1;var f=32-Nt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ni=1<<32-Nt(n)+c|a<<c|r,Li=f+t}else Ni=1<<f|a<<c|r,Li=t}function xc(t){t.return!==null&&(Ki(t,1),Ap(t,1,0))}function Sc(t){for(;t===fl;)fl=ks[--Ws],ks[Ws]=null,Kr=ks[--Ws],ks[Ws]=null;for(;t===ba;)ba=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null,Ni=oi[--li],oi[li]=null}function Rp(t,n){oi[li++]=Ni,oi[li++]=Li,oi[li++]=ba,Ni=n.id,Li=n.overflow,ba=t}var xn=null,Xe=null,Me=!1,Ta=null,ui=!1,Mc=Error(s(519));function Aa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(ri(n,t)),Mc}function Cp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[an]=t,n[hn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)_e(So[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),qn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Wg(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Aa(t,!0)}function wp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:xn=xn.return}}function qs(t){if(t!==xn)return!1;if(!Me)return wp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&Xe&&Aa(t),wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=t0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=t0(t)}else n===27?(n=Xe,Ha(t.type)?(t=Wf,Wf=null,Xe=t):Xe=n):Xe=xn?fi(t.stateNode.nextSibling):null;return!0}function us(){Xe=xn=null,Me=!1}function yc(){var t=Ta;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Ta=null),t}function Qr(t){Ta===null?Ta=[t]:Ta.push(t)}var Ec=O(null),cs=null,Qi=null;function Ra(t,n,a){_t(Ec,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Ec.current,Y(Ec)}function bc(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Tc(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var F=0;F<n.length;F++)if(A.context===n[F]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),bc(f.return,a,t),r||(g=null);break t}f=A.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),bc(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ys(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=c.type;jn(c.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(c===vt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}c=c.return}t!==null&&Tc(n,t,a,r),n.flags|=262144}function hl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){cs=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return Dp(cs,t)}function dl(t,n){return cs===null&&fs(t),Dp(t,n)}function Dp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ex=o.unstable_scheduleCallback,nx=o.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ac(){return{controller:new tx,data:new Map,refCount:0}}function Jr(t){t.refCount--,t.refCount===0&&ex(nx,function(){t.controller.abort()})}var $r=null,Rc=0,js=0,Zs=null;function ix(t,n){if($r===null){var a=$r=[];Rc=0,js=Uf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Rc++,n.then(Up,Up),n}function Up(){if(--Rc===0&&$r!==null){Zs!==null&&(Zs.status="fulfilled");var t=$r;$r=null,js=0,Zs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ax(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Np=L.S;L.S=function(t,n){mg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(t,n),Np!==null&&Np(t,n)};var hs=O(null);function Cc(){var t=hs.current;return t!==null?t:Ve.pooledCache}function pl(t,n){n===null?_t(hs,hs.current):_t(hs,n.pool)}function Lp(){var t=Cc();return t===null?null:{parent:on._currentValue,pool:t}}var Ks=Error(s(460)),wc=Error(s(474)),ml=Error(s(542)),gl={then:function(){}};function Op(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bp(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bp(t),t}throw ps=n,Ks}}function ds(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Ks):a}}var ps=null;function zp(){if(ps===null)throw Error(s(459));var t=ps;return ps=null,t}function Bp(t){if(t===Ks||t===ml)throw Error(s(483))}var Qs=null,to=0;function _l(t){var n=to;return to+=1,Qs===null&&(Qs=[]),Pp(Qs,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fp(t){function n(j,X){if(t){var K=j.deletions;K===null?(j.deletions=[X],j.flags|=16):K.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function r(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=Zi(j,X),j.index=0,j.sibling=null,j}function f(j,X,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<X?(j.flags|=67108866,X):K):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,K,mt){return X===null||X.tag!==6?(X=_c(K,j.mode,mt),X.return=j,X):(X=c(X,K),X.return=j,X)}function F(j,X,K,mt){var Qt=K.type;return Qt===w?ft(j,X,K.props.children,mt,K.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&ds(Qt)===X.type)?(X=c(X,K.props),eo(X,K),X.return=j,X):(X=cl(K.type,K.key,K.props,null,j.mode,mt),eo(X,K),X.return=j,X)}function Q(j,X,K,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=vc(K,j.mode,mt),X.return=j,X):(X=c(X,K.children||[]),X.return=j,X)}function ft(j,X,K,mt,Qt){return X===null||X.tag!==7?(X=ls(K,j.mode,mt,Qt),X.return=j,X):(X=c(X,K),X.return=j,X)}function gt(j,X,K){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=_c(""+X,j.mode,K),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return K=cl(X.type,X.key,X.props,null,j.mode,K),eo(K,X),K.return=j,K;case b:return X=vc(X,j.mode,K),X.return=j,X;case T:return X=ds(X),gt(j,X,K)}if(J(X)||$(X))return X=ls(X,j.mode,K,null),X.return=j,X;if(typeof X.then=="function")return gt(j,_l(X),K);if(X.$$typeof===P)return gt(j,dl(j,X),K);vl(j,X)}return null}function nt(j,X,K,mt){var Qt=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:A(j,X,""+K,mt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Qt?F(j,X,K,mt):null;case b:return K.key===Qt?Q(j,X,K,mt):null;case T:return K=ds(K),nt(j,X,K,mt)}if(J(K)||$(K))return Qt!==null?null:ft(j,X,K,mt,null);if(typeof K.then=="function")return nt(j,X,_l(K),mt);if(K.$$typeof===P)return nt(j,X,dl(j,K),mt);vl(j,K)}return null}function rt(j,X,K,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(K)||null,A(X,j,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case E:return j=j.get(mt.key===null?K:mt.key)||null,F(X,j,mt,Qt);case b:return j=j.get(mt.key===null?K:mt.key)||null,Q(X,j,mt,Qt);case T:return mt=ds(mt),rt(j,X,K,mt,Qt)}if(J(mt)||$(mt))return j=j.get(K)||null,ft(X,j,mt,Qt,null);if(typeof mt.then=="function")return rt(j,X,K,_l(mt),Qt);if(mt.$$typeof===P)return rt(j,X,K,dl(X,mt),Qt);vl(X,mt)}return null}function Ht(j,X,K,mt){for(var Qt=null,Ce=null,qt=X,fe=X=0,Se=null;qt!==null&&fe<K.length;fe++){qt.index>fe?(Se=qt,qt=null):Se=qt.sibling;var we=nt(j,qt,K[fe],mt);if(we===null){qt===null&&(qt=Se);break}t&&qt&&we.alternate===null&&n(j,qt),X=f(we,X,fe),Ce===null?Qt=we:Ce.sibling=we,Ce=we,qt=Se}if(fe===K.length)return a(j,qt),Me&&Ki(j,fe),Qt;if(qt===null){for(;fe<K.length;fe++)qt=gt(j,K[fe],mt),qt!==null&&(X=f(qt,X,fe),Ce===null?Qt=qt:Ce.sibling=qt,Ce=qt);return Me&&Ki(j,fe),Qt}for(qt=r(qt);fe<K.length;fe++)Se=rt(qt,j,fe,K[fe],mt),Se!==null&&(t&&Se.alternate!==null&&qt.delete(Se.key===null?fe:Se.key),X=f(Se,X,fe),Ce===null?Qt=Se:Ce.sibling=Se,Ce=Se);return t&&qt.forEach(function(Wa){return n(j,Wa)}),Me&&Ki(j,fe),Qt}function Jt(j,X,K,mt){if(K==null)throw Error(s(151));for(var Qt=null,Ce=null,qt=X,fe=X=0,Se=null,we=K.next();qt!==null&&!we.done;fe++,we=K.next()){qt.index>fe?(Se=qt,qt=null):Se=qt.sibling;var Wa=nt(j,qt,we.value,mt);if(Wa===null){qt===null&&(qt=Se);break}t&&qt&&Wa.alternate===null&&n(j,qt),X=f(Wa,X,fe),Ce===null?Qt=Wa:Ce.sibling=Wa,Ce=Wa,qt=Se}if(we.done)return a(j,qt),Me&&Ki(j,fe),Qt;if(qt===null){for(;!we.done;fe++,we=K.next())we=gt(j,we.value,mt),we!==null&&(X=f(we,X,fe),Ce===null?Qt=we:Ce.sibling=we,Ce=we);return Me&&Ki(j,fe),Qt}for(qt=r(qt);!we.done;fe++,we=K.next())we=rt(qt,j,fe,we.value,mt),we!==null&&(t&&we.alternate!==null&&qt.delete(we.key===null?fe:we.key),X=f(we,X,fe),Ce===null?Qt=we:Ce.sibling=we,Ce=we);return t&&qt.forEach(function(mS){return n(j,mS)}),Me&&Ki(j,fe),Qt}function Ge(j,X,K,mt){if(typeof K=="object"&&K!==null&&K.type===w&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Qt=K.key;X!==null;){if(X.key===Qt){if(Qt=K.type,Qt===w){if(X.tag===7){a(j,X.sibling),mt=c(X,K.props.children),mt.return=j,j=mt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&ds(Qt)===X.type){a(j,X.sibling),mt=c(X,K.props),eo(mt,K),mt.return=j,j=mt;break t}a(j,X);break}else n(j,X);X=X.sibling}K.type===w?(mt=ls(K.props.children,j.mode,mt,K.key),mt.return=j,j=mt):(mt=cl(K.type,K.key,K.props,null,j.mode,mt),eo(mt,K),mt.return=j,j=mt)}return g(j);case b:t:{for(Qt=K.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){a(j,X.sibling),mt=c(X,K.children||[]),mt.return=j,j=mt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}mt=vc(K,j.mode,mt),mt.return=j,j=mt}return g(j);case T:return K=ds(K),Ge(j,X,K,mt)}if(J(K))return Ht(j,X,K,mt);if($(K)){if(Qt=$(K),typeof Qt!="function")throw Error(s(150));return K=Qt.call(K),Jt(j,X,K,mt)}if(typeof K.then=="function")return Ge(j,X,_l(K),mt);if(K.$$typeof===P)return Ge(j,X,dl(j,K),mt);vl(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,X!==null&&X.tag===6?(a(j,X.sibling),mt=c(X,K),mt.return=j,j=mt):(a(j,X),mt=_c(K,j.mode,mt),mt.return=j,j=mt),g(j)):a(j,X)}return function(j,X,K,mt){try{to=0;var Qt=Ge(j,X,K,mt);return Qs=null,Qt}catch(qt){if(qt===Ks||qt===ml)throw qt;var Ce=Zn(29,qt,null,j.mode);return Ce.lanes=mt,Ce.return=j,Ce}}}var ms=Fp(!0),Ip=Fp(!1),Ca=!1;function Dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ul(t),yp(t,null,a),n}return ll(t,r,n,a),ul(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}function Nc(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Lc=!1;function io(){if(Lc){var t=Zs;if(t!==null)throw t}}function ao(t,n,a,r){Lc=!1;var c=t.updateQueue;Ca=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var F=A,Q=F.next;F.next=null,g===null?f=Q:g.next=Q,g=F;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==g&&(A===null?ft.firstBaseUpdate=Q:A.next=Q,ft.lastBaseUpdate=F))}if(f!==null){var gt=c.baseState;g=0,ft=Q=F=null,A=f;do{var nt=A.lane&-536870913,rt=nt!==A.lane;if(rt?(xe&nt)===nt:(r&nt)===nt){nt!==0&&nt===js&&(Lc=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=t,Jt=A;nt=n;var Ge=a;switch(Jt.tag){case 1:if(Ht=Jt.payload,typeof Ht=="function"){gt=Ht.call(Ge,gt,nt);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Jt.payload,nt=typeof Ht=="function"?Ht.call(Ge,gt,nt):Ht,nt==null)break t;gt=S({},gt,nt);break t;case 2:Ca=!0}}nt=A.callback,nt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[nt]:rt.push(nt))}else rt={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(Q=ft=rt,F=gt):ft=ft.next=rt,g|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ft===null&&(F=gt),c.baseState=F,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Pa|=g,t.lanes=g,t.memoizedState=gt}}function Hp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Hp(a[t],n)}var Js=O(null),xl=O(0);function Vp(t,n){t=oa,_t(xl,t),_t(Js,n),oa=t|n.baseLanes}function Oc(){_t(xl,oa),_t(Js,Js.current)}function Pc(){oa=xl.current,Y(Js),Y(xl)}var Kn=O(null),ci=null;function Ua(t){var n=t.alternate;_t($e,$e.current&1),_t(Kn,t),ci===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(ci=t)}function zc(t){_t($e,$e.current),_t(Kn,t),ci===null&&(ci=t)}function Xp(t){t.tag===22?(_t($e,$e.current),_t(Kn,t),ci===null&&(ci=t)):Na()}function Na(){_t($e,$e.current),_t(Kn,Kn.current)}function Qn(t){Y(Kn),ci===t&&(ci=null),Y($e)}var $e=O(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,le=null,Ie=null,ln=null,Ml=!1,$s=!1,gs=!1,yl=0,so=0,tr=null,sx=0;function Qe(){throw Error(s(321))}function Bc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Fc(t,n,a,r,c,f){return $i=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Am:$c,gs=!1,f=a(r,c),gs=!1,$s&&(f=Wp(n,a,r,c)),kp(t),f}function kp(t){L.H=lo;var n=Ie!==null&&Ie.next!==null;if($i=0,ln=Ie=le=null,Ml=!1,so=0,tr=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&hl(t)&&(un=!0))}function Wp(t,n,a,r){le=t;var c=0;do{if($s&&(tr=null),so=0,$s=!1,25<=c)throw Error(s(301));if(c+=1,ln=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Rm,f=n(a,r)}while($s);return f}function rx(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(le.flags|=1024),n}function Ic(){var t=yl!==0;return yl=0,t}function Hc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gc(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}$i=0,ln=Ie=le=null,$s=!1,so=yl=0,tr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?le.memoizedState=ln=t:ln=ln.next=t,ln}function tn(){if(Ie===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=ln===null?le.memoizedState:ln.next;if(n!==null)ln=n,Ie=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ln===null?le.memoizedState=ln=t:ln=ln.next=t}return ln}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=so;return so+=1,tr===null&&(tr=[]),t=Pp(tr,t,n),n=le,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Am:$c),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===P)return Sn(t)}throw Error(s(438,String(t)))}function Vc(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=ht;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=tn();return Xc(n,Ie,t)}function Xc(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=g=null,F=null,Q=n,ft=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(xe&gt)===gt:($i&gt)===gt){var nt=Q.revertLane;if(nt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===js&&(ft=!0);else if(($i&nt)===nt){Q=Q.next,nt===js&&(ft=!0);continue}else gt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(A=F=gt,g=f):F=F.next=gt,le.lanes|=nt,Pa|=nt;gt=Q.action,gs&&a(f,gt),f=Q.hasEagerState?Q.eagerState:a(f,gt)}else nt={lane:gt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(A=F=nt,g=f):F=F.next=nt,le.lanes|=gt,Pa|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(F===null?g=f:F.next=A,!jn(f,t.memoizedState)&&(un=!0,ft&&(a=Zs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=F,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function kc(t){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);jn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function qp(t,n,a){var r=le,c=tn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!jn((Ie||c).memoizedState,a);if(g&&(c.memoizedState=a,un=!0),c=c.queue,Yc(Zp.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,er(9,{destroy:void 0},jp.bind(null,r,c,a,n),null),Ve===null)throw Error(s(349));f||($i&127)!==0||Yp(r,n,a)}return a}function Yp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=El(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function jp(t,n,a,r){n.value=a,n.getSnapshot=r,Kp(n)&&Qp(t)}function Zp(t,n,a){return a(function(){Kp(n)&&Qp(t)})}function Kp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Qp(t){var n=os(t,2);n!==null&&Gn(n,t,2)}function Wc(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),gs){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function Jp(t,n,a,r){return t.baseState=a,Xc(t,Ie,typeof r=="function"?r:ta)}function ox(t,n,a,r,c){if(Cl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,$p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function $p(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var A=a(c,r),F=L.S;F!==null&&F(g,A),tm(t,n,A)}catch(Q){qc(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(c,r),tm(t,n,f)}catch(Q){qc(t,n,Q)}}function tm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){em(t,n,r)},function(r){return qc(t,n,r)}):em(t,n,a)}function em(t,n,a){n.status="fulfilled",n.value=a,nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,$p(t,a)))}function qc(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,nm(n),n=n.next;while(n!==r)}t.action=null}function nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function im(t,n){return n}function am(t,n){if(Me){var a=Ve.formState;if(a!==null){t:{var r=le;if(Me){if(Xe){e:{for(var c=Xe,f=ui;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=fi(c.nextSibling),r=c.data==="F!";break t}}Aa(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:n},a.queue=r,a=Em.bind(null,le,r),r.dispatch=a,r=Wc(!1),f=Jc.bind(null,le,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=ox.bind(null,le,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function sm(t){var n=tn();return rm(n,Ie,t)}function rm(t,n,a){if(n=Xc(t,n,im)[0],t=Tl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(g){throw g===Ks?ml:g}else r=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,er(9,{destroy:void 0},lx.bind(null,c,a),null)),[r,f,t]}function lx(t,n){t.action=n}function om(t){var n=tn(),a=Ie;if(a!==null)return rm(n,a,t);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function er(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=El(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function lm(){return tn().memoizedState}function Al(t,n,a,r){var c=Ln();le.flags|=t,c.memoizedState=er(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(t,n,a,r){var c=tn();r=r===void 0?null:r;var f=c.memoizedState.inst;Ie!==null&&r!==null&&Bc(r,Ie.memoizedState.deps)?c.memoizedState=er(n,f,a,r):(le.flags|=t,c.memoizedState=er(1|n,f,a,r))}function um(t,n){Al(8390656,8,t,n)}function Yc(t,n){Rl(2048,8,t,n)}function ux(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=El(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function cm(t){var n=tn().memoizedState;return ux({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function fm(t,n){return Rl(4,2,t,n)}function hm(t,n){return Rl(4,4,t,n)}function dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function pm(t,n,a){a=a!=null?a.concat([t]):null,Rl(4,4,dm.bind(null,n,t),a)}function jc(){}function mm(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Bc(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function gm(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Bc(n,r[1]))return r[0];if(r=t(),gs){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r}function Zc(t,n,a){return a===void 0||($i&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=_g(),le.lanes|=t,Pa|=t,a)}function _m(t,n,a,r){return jn(a,n)?a:Js.current!==null?(t=Zc(t,a,r),jn(t,n)||(un=!0),t):($i&42)===0||($i&1073741824)!==0&&(xe&261930)===0?(un=!0,t.memoizedState=a):(t=_g(),le.lanes|=t,Pa|=t,n)}function vm(t,n,a,r,c){var f=B.p;B.p=f!==0&&8>f?f:8;var g=L.T,A={};L.T=A,Jc(t,!1,n,a);try{var F=c(),Q=L.S;if(Q!==null&&Q(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=ax(F,r);oo(t,n,ft,ti(t))}else oo(t,n,r,ti(t))}catch(gt){oo(t,n,{then:function(){},status:"rejected",reason:gt},ti())}finally{B.p=f,g!==null&&A.types!==null&&(g.types=A.types),L.T=g}}function cx(){}function Kc(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=xm(t).queue;vm(t,c,n,ot,a===null?cx:function(){return Sm(t),a(r)})}function xm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sm(t){var n=xm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},ti())}function Qc(){return Sn(To)}function Mm(){return tn().memoizedState}function ym(){return tn().memoizedState}function fx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=wa(a);var r=Da(n,t,a);r!==null&&(Gn(r,n,a),no(r,n,a)),n={cache:Ac()},t.payload=n;return}n=n.return}}function hx(t,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?bm(n,a):(a=mc(t,n,a,r),a!==null&&(Gn(a,t,r),Tm(a,n,r)))}function Em(t,n,a){var r=ti();oo(t,n,a,r)}function oo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))bm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(c.hasEagerState=!0,c.eagerState=A,jn(A,g))return ll(t,n,c,0),Ve===null&&ol(),!1}catch{}if(a=mc(t,n,c,r),a!==null)return Gn(a,t,r),Tm(a,n,r),!0}return!1}function Jc(t,n,a,r){if(r={lane:2,revertLane:Uf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(s(479))}else n=mc(t,a,r,2),n!==null&&Gn(n,t,2)}function Cl(t){var n=t.alternate;return t===le||n!==null&&n===le}function bm(t,n){$s=Ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}var lo={readContext:Sn,use:bl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};lo.useEffectEvent=Qe;var Am={readContext:Sn,use:bl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var r=t();if(gs){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(gs){Lt(!0);try{a(n)}finally{Lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=hx.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Wc(t);var n=t.queue,a=Em.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:jc,useDeferredValue:function(t,n){var a=Ln();return Zc(a,t,n)},useTransition:function(){var t=Wc(!1);return t=vm.bind(null,le,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,c=Ln();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(xe&127)!==0||Yp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,um(Zp.bind(null,r,f,t),[t]),r.flags|=2048,er(9,{destroy:void 0},jp.bind(null,r,f,a,n),null),a},useId:function(){var t=Ln(),n=Ve.identifierPrefix;if(Me){var a=Li,r=Ni;a=(r&~(1<<32-Nt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Qc,useFormState:am,useActionState:am,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Jc.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vc,useCacheRefresh:function(){return Ln().memoizedState=fx.bind(null,le)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$c={readContext:Sn,use:bl,useCallback:mm,useContext:Sn,useEffect:Yc,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:Tl,useRef:lm,useState:function(){return Tl(ta)},useDebugValue:jc,useDeferredValue:function(t,n){var a=tn();return _m(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Tl(ta)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:qp,useId:Mm,useHostTransitionStatus:Qc,useFormState:sm,useActionState:sm,useOptimistic:function(t,n){var a=tn();return Jp(a,Ie,t,n)},useMemoCache:Vc,useCacheRefresh:ym};$c.useEffectEvent=cm;var Rm={readContext:Sn,use:bl,useCallback:mm,useContext:Sn,useEffect:Yc,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:kc,useRef:lm,useState:function(){return kc(ta)},useDebugValue:jc,useDeferredValue:function(t,n){var a=tn();return Ie===null?Zc(a,t,n):_m(a,Ie.memoizedState,t,n)},useTransition:function(){var t=kc(ta)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:qp,useId:Mm,useHostTransitionStatus:Qc,useFormState:om,useActionState:om,useOptimistic:function(t,n){var a=tn();return Ie!==null?Jp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vc,useCacheRefresh:ym};Rm.useEffectEvent=cm;function tf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ti(),c=wa(r);c.payload=n,a!=null&&(c.callback=a),n=Da(t,c,r),n!==null&&(Gn(n,t,r),no(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ti(),c=wa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Da(t,c,r),n!==null&&(Gn(n,t,r),no(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),r=wa(a);r.tag=2,n!=null&&(r.callback=n),n=Da(t,r,a),n!==null&&(Gn(n,t,a),no(n,t,a))}};function Cm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!jr(a,r)||!jr(c,f):!0}function wm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ef.enqueueReplaceState(n,n.state,null)}function _s(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Dm(t){rl(t)}function Um(t){console.error(t)}function Nm(t){rl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Lm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nf(t,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Om(t){return t=wa(t),t.tag=3,t}function Pm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Lm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Lm(n,a,r),typeof c!="function"&&(za===null?za=new Set([this]):za.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function dx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Gl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cf(t,r,c)),!1;case 22:return a.flags|=65536,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cf(t,r,c)),!1}throw Error(s(435,a.tag))}return Cf(t,r,c),Gl(),!1}if(Me)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Mc&&(t=Error(s(422),{cause:r}),Qr(ri(t,a)))):(r!==Mc&&(n=Error(s(423),{cause:r}),Qr(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ri(r,a),c=nf(t.stateNode,r,c),Nc(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),_o===null?_o=[f]:_o.push(f),Je!==4&&(Je=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=nf(a.stateNode,r,t),Nc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Om(c),Pm(c,t,a,r),Nc(a,c),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),un=!1;function Mn(t,n,a,r){n.child=t===null?Ip(n,null,a,r):ms(n,t.child,a,r)}function zm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return fs(n),r=Fc(t,n,a,g,f,c),A=Ic(),t!==null&&!un?(Hc(t,n,c),ea(t,n,c)):(Me&&A&&xc(n),n.flags|=1,Mn(t,n,r,c),n.child)}function Bm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Fm(t,n,f,r,c)):(t=cl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(g,r)&&t.ref===n.ref)return ea(t,n,c)}return n.flags|=1,t=Zi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Fm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(jr(f,r)&&t.ref===n.ref)if(un=!1,n.pendingProps=r=f,hf(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ea(t,n,c)}return sf(t,n,a,r,c)}function Im(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Hm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Vp(n,f):Oc(),Xp(n);else return r=n.lanes=536870912,Hm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pl(n,f.cachePool),Vp(n,f),Na(),n.memoizedState=null):(t!==null&&pl(n,null),Oc(),Na());return Mn(t,n,c,a),n.child}function uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Hm(t,n,a,r,c){var f=Cc();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&pl(n,null),Oc(),Xp(n),t!==null&&Ys(t,n,r,!0),n.childLanes=c,null}function Dl(t,n){return n=Nl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Gm(t,n,a){return ms(n,t.child,null,a),t=Dl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function px(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(r.mode==="hidden")return t=Dl(n,r),n.lanes=536870912,uo(null,t);if(zc(n),(t=Xe)?(t=$g(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,xn=n,Xe=null)):t=null,t===null)throw Aa(n);return n.lanes=536870912,null}return Dl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(zc(n),c)if(n.flags&256)n.flags&=-257,n=Gm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ys(t,n,a,!1),c=(a&t.childLanes)!==0,un||c){if(r=Ve,r!==null&&(g=Zo(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,os(t,g),Gn(r,t,g),af;Gl(),n=Gm(t,n,a)}else t=f.treeContext,Xe=fi(g.nextSibling),xn=n,Me=!0,Ta=null,ui=!1,t!==null&&Rp(n,t),n=Dl(n,r),n.flags|=4096;return n}return t=Zi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sf(t,n,a,r,c){return fs(n),a=Fc(t,n,a,r,void 0,c),r=Ic(),t!==null&&!un?(Hc(t,n,c),ea(t,n,c)):(Me&&r&&xc(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Vm(t,n,a,r,c,f){return fs(n),n.updateQueue=null,a=Wp(n,r,a,c),kp(t),r=Ic(),t!==null&&!un?(Hc(t,n,f),ea(t,n,f)):(Me&&r&&xc(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Xm(t,n,a,r,c){if(fs(n),n.stateNode===null){var f=Xs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Dc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Xs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(tf(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&ef.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,F=_s(a,A);f.props=F;var Q=f.context,ft=a.contextType;g=Xs,typeof ft=="object"&&ft!==null&&(g=Sn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||Q!==g)&&wm(n,f,r,g),Ca=!1;var nt=n.memoizedState;f.state=nt,ao(n,r,f,c),io(),Q=n.memoizedState,A||nt!==Q||Ca?(typeof gt=="function"&&(tf(n,a,gt,r),Q=n.memoizedState),(F=Ca||Cm(n,a,F,r,nt,Q,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=g,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Uc(t,n),g=n.memoizedProps,ft=_s(a,g),f.props=ft,gt=n.pendingProps,nt=f.context,Q=a.contextType,F=Xs,typeof Q=="object"&&Q!==null&&(F=Sn(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||nt!==F)&&wm(n,f,r,F),Ca=!1,nt=n.memoizedState,f.state=nt,ao(n,r,f,c),io();var rt=n.memoizedState;g!==gt||nt!==rt||Ca||t!==null&&t.dependencies!==null&&hl(t.dependencies)?(typeof A=="function"&&(tf(n,a,A,r),rt=n.memoizedState),(ft=Ca||Cm(n,a,ft,r,nt,rt,F)||t!==null&&t.dependencies!==null&&hl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=F,r=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ul(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ms(n,t.child,null,c),n.child=ms(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ea(t,n,c),t}function km(t,n,a,r){return us(),n.flags|=256,Mn(t,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(t){return{baseLanes:t,cachePool:Lp()}}function lf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function Wm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?Ua(n):Na(),(t=Xe)?(t=$g(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,xn=n,Xe=null)):t=null,t===null)throw Aa(n);return kf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(Na(),c=n.mode,A=Nl({mode:"hidden",children:A},c),r=ls(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=of(a),r.childLanes=lf(t,g,a),n.memoizedState=rf,uo(null,r)):(Ua(n),uf(n,A))}var F=t.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=cf(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),A=r.fallback,c=n.mode,r=Nl({mode:"visible",children:r.children},c),A=ls(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,ms(n,t.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(t,g,a),n.memoizedState=rf,n=uo(null,r));else if(Ua(n),kf(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var Q=g.dgst;g=Q,r=Error(s(419)),r.stack="",r.digest=g,Qr({value:r,source:null,stack:null}),n=cf(t,n,a)}else if(un||Ys(t,n,a,!1),g=(a&t.childLanes)!==0,un||g){if(g=Ve,g!==null&&(r=Zo(g,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,os(t,r),Gn(g,t,r),af;Xf(A)||Gl(),n=cf(t,n,a)}else Xf(A)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Xe=fi(A.nextSibling),xn=n,Me=!0,Ta=null,ui=!1,t!==null&&Rp(n,t),n=uf(n,r.children),n.flags|=4096);return n}return c?(Na(),A=r.fallback,c=n.mode,F=t.child,Q=F.sibling,r=Zi(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,Q!==null?A=Zi(Q,A):(A=ls(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,uo(null,r),r=n.child,A=t.child.memoizedState,A===null?A=of(a):(c=A.cachePool,c!==null?(F=on._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Lp(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=lf(t,g,a),n.memoizedState=rf,uo(t.child,r)):(Ua(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function uf(t,n){return n=Nl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Nl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function cf(t,n,a){return ms(n,t.child,null,a),t=uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function qm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),bc(t.return,n,a)}function ff(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Ym(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=$e.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,_t($e,g),Mn(t,n,r,a),r=Me?Kr:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,a,n);else if(t.tag===19)qm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ff(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Sl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ff(n,!0,a,null,f,r);break;case"together":ff(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ys(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hl(t)))}function mx(t,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),Ra(n,on,t.memoizedState.cache),us();break;case 27:case 5:Kt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zc(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Wm(t,n,a):(Ua(n),t=ea(t,n,a),t!==null?t.sibling:null);Ua(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Ym(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t($e,$e.current),r)break;return null;case 22:return n.lanes=0,Im(t,n,a,n.pendingProps);case 24:Ra(n,on,t.memoizedState.cache)}return ea(t,n,a)}function jm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!hf(t,a)&&(n.flags&128)===0)return un=!1,mx(t,n,a);un=(t.flags&131072)!==0}else un=!1,Me&&(n.flags&1048576)!==0&&Ap(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ds(n.elementType),n.type=t,typeof t=="function")gc(t)?(r=_s(t,r),n.tag=1,n=Xm(null,n,t,r,a)):(n.tag=0,n=sf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=zm(null,n,t,r,a);break t}else if(c===z){n.tag=14,n=Bm(null,n,t,r,a);break t}}throw n=lt(t)||t,Error(s(306,n,""))}}return n;case 0:return sf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=_s(r,n.pendingProps),Xm(t,n,r,c,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Uc(t,n),ao(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Ra(n,on,r),r!==f.cache&&Tc(n,[on],a,!0),io(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(t,n,r,a);break t}else if(r!==c){c=ri(Error(s(424)),n),Qr(c),n=km(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Xe=fi(t.firstChild),xn=n,Me=!0,Ta=null,ui=!0,a=Ip(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(us(),r===c){n=ea(t,n,a);break t}Mn(t,n,r,a)}n=n.child}return n;case 26:return Ul(t,n),t===null?(a=s0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,r=jl(et.current).createElement(a),r[an]=n,r[hn]=t,yn(r,a,t),k(r),n.stateNode=r):n.memoizedState=s0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&Me&&(r=n.stateNode=n0(n.type,n.pendingProps,et.current),xn=n,ui=!0,c=Xe,Ha(n.type)?(Wf=c,Xe=fi(r.firstChild)):Xe=c),Mn(t,n,n.pendingProps.children,a),Ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=r=Xe)&&(r=Wx(r,n.type,n.pendingProps,ui),r!==null?(n.stateNode=r,xn=n,Xe=fi(r.firstChild),ui=!1,c=!0):c=!1),c||Aa(n)),Kt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Hf(c,f)?r=null:g!==null&&Hf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Fc(t,n,rx,null,null,a),To._currentValue=c),Ul(t,n),Mn(t,n,r,a),n.child;case 6:return t===null&&Me&&((t=a=Xe)&&(a=qx(a,n.pendingProps,ui),a!==null?(n.stateNode=a,xn=n,Xe=null,t=!0):t=!1),t||Aa(n)),null;case 13:return Wm(t,n,a);case 4:return bt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ms(n,null,r,a):Mn(t,n,r,a),n.child;case 11:return zm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ra(n,n.type,r.value),Mn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,fs(n),c=Sn(c),r=r(c),n.flags|=1,Mn(t,n,r,a),n.child;case 14:return Bm(t,n,n.type,n.pendingProps,a);case 15:return Fm(t,n,n.type,n.pendingProps,a);case 19:return Ym(t,n,a);case 31:return px(t,n,a);case 22:return Im(t,n,a,n.pendingProps);case 24:return fs(n),r=Sn(on),t===null?(c=Cc(),c===null&&(c=Ve,f=Ac(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Dc(n),Ra(n,on,c)):((t.lanes&a)!==0&&(Uc(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ra(n,on,r)):(r=f.cache,Ra(n,on,r),r!==c.cache&&Tc(n,[on],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(t){t.flags|=4}function df(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Mg())t.flags|=8192;else throw ps=gl,wc}else t.flags&=-16777217}function Zm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c0(n))if(Mg())t.flags|=8192;else throw ps=gl,wc}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,sr|=n)}function co(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function gx(t,n,a){var r=n.pendingProps;switch(Sc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(on),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qs(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yc())),ke(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(na(n),f!==null?(ke(n),Zm(n,f)):(ke(n),df(n,c,null,r,a))):f?f!==t.memoizedState?(na(n),ke(n),Zm(n,f)):(ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&na(n),ke(n),df(n,c,t,r,a)),null;case 27:if($t(n),a=et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),null}t=At.current,qs(n)?Cp(n):(t=n0(c,r,a),n.stateNode=t,na(n))}return ke(n),null;case 5:if($t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),null}if(f=At.current,qs(n))Cp(n);else{var g=jl(et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[an]=n,f[hn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&na(n)}}return ke(n),df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=et.current,qs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Wg(t.nodeValue,a)),t||Aa(n,!0)}else t=jl(t).createTextNode(r),t[an]=n,n.stateNode=t}return ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=qs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[an]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),t=!1}else a=yc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=qs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),c=!1}else c=yc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),ke(n),null);case 4:return Vt(),t===null&&Pf(n.stateNode.containerInfo),ke(n),null;case 10:return Ji(n.type),ke(n),null;case 19:if(Y($e),r=n.memoizedState,r===null)return ke(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)co(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,co(r,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ep(a,t),a=a.sibling;return _t($e,$e.current&1|2),Me&&Ki(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&y()>Fl&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304)}else{if(!c)if(t=Sl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return ke(n),null}else 2*y()-r.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=y(),t.sibling=null,a=$e.current,_t($e,c?a&1|2:a&1),Me&&Ki(n,r.treeForkCount),t):(ke(n),null);case 22:case 23:return Qn(n),Pc(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Y(hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(on),ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _x(t,n){switch(Sc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(on),Vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y($e),null;case 4:return Vt(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),Pc(),t!==null&&Y(hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(on),null;case 25:return null;default:return null}}function Km(t,n){switch(Sc(n),n.tag){case 3:Ji(on),Vt();break;case 26:case 27:case 5:$t(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:Y($e);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),Pc(),t!==null&&Y(hs);break;case 24:Ji(on)}}function fo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(A){Be(n,n.return,A)}}function La(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,c=n;var F=a,Q=A;try{Q()}catch(ft){Be(c,F,ft)}}}r=r.next}while(r!==f)}}catch(ft){Be(n,n.return,ft)}}function Qm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Gp(n,a)}catch(r){Be(t,t.return,r)}}}function Jm(t,n,a){a.props=_s(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Be(t,n,r)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Be(t,n,c)}}function Oi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function $m(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function pf(t,n,a){try{var r=t.stateNode;Ix(r,t.type,a,n),r[hn]=n}catch(c){Be(t,t.return,c)}}function tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function mf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(r===27&&Ha(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(gf(t,n,a),t=t.sibling;t!==null;)gf(t,n,a),t=t.sibling}function Ol(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function eg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,r,a),n[an]=t,n[hn]=a}catch(f){Be(t,t.return,f)}}var ia=!1,cn=!1,_f=!1,ng=typeof WeakSet=="function"?WeakSet:Set,_n=null;function vx(t,n){if(t=t.containerInfo,Ff=eu,t=pp(t),uc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,F=-1,Q=0,ft=0,gt=t,nt=null;e:for(;;){for(var rt;gt!==a||c!==0&&gt.nodeType!==3||(A=g+c),gt!==f||r!==0&&gt.nodeType!==3||(F=g+r),gt.nodeType===3&&(g+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)nt=gt,gt=rt;for(;;){if(gt===t)break e;if(nt===a&&++Q===c&&(A=g),nt===f&&++ft===r&&(F=g),(rt=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=rt}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:t,selectionRange:a},eu=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=_s(a.type,c);t=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Be(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function ig(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),r&4&&fo(5,a);break;case 1:if(sa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Be(a,a.return,g)}else{var c=_s(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(a,a.return,g)}}r&64&&Qm(a),r&512&&ho(a,a.return);break;case 3:if(sa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gp(t,n)}catch(g){Be(a,a.return,g)}}break;case 27:n===null&&r&4&&eg(a);case 26:case 5:sa(t,a),n===null&&r&4&&$m(a),r&512&&ho(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),r&4&&rg(t,a);break;case 13:sa(t,a),r&4&&og(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Rx.bind(null,a),Yx(t,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||cn,c=ia;var f=cn;ia=r,(cn=n)&&!f?ra(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),ia=c,cn=f}break;case 30:break;default:sa(t,a)}}function ag(t){var n=t.alternate;n!==null&&(t.alternate=null,ag(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Hr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Bn=!1;function aa(t,n,a){for(a=a.child;a!==null;)sg(t,n,a),a=a.sibling}function sg(t,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:cn||Oi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Oi(a,n);var r=je,c=Bn;Ha(a.type)&&(je=a.stateNode,Bn=!1),aa(t,n,a),yo(a.stateNode),je=r,Bn=c;break;case 5:cn||Oi(a,n);case 6:if(r=je,c=Bn,je=null,aa(t,n,a),je=r,Bn=c,je!==null)if(Bn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:je!==null&&(Bn?(t=je,Qg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),dr(t)):Qg(je,a.stateNode));break;case 4:r=je,c=Bn,je=a.stateNode.containerInfo,Bn=!0,aa(t,n,a),je=r,Bn=c;break;case 0:case 11:case 14:case 15:La(2,a,n),cn||La(4,a,n),aa(t,n,a);break;case 1:cn||(Oi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Jm(a,n,r)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,aa(t,n,a),cn=r;break;default:aa(t,n,a)}}function rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{dr(t)}catch(a){Be(n,n.return,a)}}}function og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{dr(t)}catch(a){Be(n,n.return,a)}}function xx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ng),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ng),n;default:throw Error(s(435,t.tag))}}function Pl(t,n){var a=xx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Cx.bind(null,t,r);r.then(c,c)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(Ha(A.type)){je=A.stateNode,Bn=!1;break t}break;case 5:je=A.stateNode,Bn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(je===null)throw Error(s(160));sg(f,g,c),je=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)lg(n,t),n=n.sibling}var Ei=null;function lg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),In(t),r&4&&(La(3,t,t.return),fo(3,t),La(5,t,t.return));break;case 1:Fn(n,t),In(t),r&512&&(cn||a===null||Oi(a,a.return)),r&64&&ia&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Ei;if(Fn(n,t),In(t),r&512&&(cn||a===null||Oi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ns]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,r,a),f[an]=t,k(f),r=f;break t;case"link":var g=l0("link","href",c).get(r+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=l0("meta","content",c).get(r+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=t,k(f),r=f}t.stateNode=r}else u0(c,t.type,t.stateNode);else t.stateNode=o0(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?u0(c,t.type,t.stateNode):o0(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&pf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),In(t),r&512&&(cn||a===null||Oi(a,a.return)),a!==null&&r&4&&pf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),In(t),r&512&&(cn||a===null||Oi(a,a.return)),t.flags&32){c=t.stateNode;try{Nn(c,"")}catch(Ht){Be(t,t.return,Ht)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,pf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(_f=!0);break;case 6:if(Fn(n,t),In(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ht){Be(t,t.return,Ht)}}break;case 3:if(Ql=null,c=Ei,Ei=Zl(n.containerInfo),Fn(n,t),Ei=c,In(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(Ht){Be(t,t.return,Ht)}_f&&(_f=!1,ug(t));break;case 4:r=Ei,Ei=Zl(t.stateNode.containerInfo),Fn(n,t),In(t),Ei=r;break;case 12:Fn(n,t),In(t);break;case 31:Fn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 13:Fn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=y()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,Q=ia,ft=cn;if(ia=Q||c,cn=ft||F,Fn(n,t),cn=ft,ia=Q,In(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||ia||cn||vs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=F.stateNode;var gt=F.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Ht){Be(F,F.return,Ht)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Ht){Be(F,F.return,Ht)}}}else if(n.tag===18){if(a===null){F=n;try{var rt=F.stateNode;c?Jg(rt,!0):Jg(F.stateNode,!1)}catch(Ht){Be(F,F.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(t,a))));break;case 19:Fn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 30:break;case 21:break;default:Fn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(tg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=mf(t);Ol(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Nn(g,""),a.flags&=-33);var A=mf(t);Ol(t,A,g);break;case 3:case 4:var F=a.stateNode.containerInfo,Q=mf(t);gf(t,Q,F);break;default:throw Error(s(161))}}catch(ft){Be(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ig(t,n.alternate,n),n=n.sibling}function vs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),vs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Jm(n,n.return,a),vs(n);break;case 27:yo(n.stateNode);case 26:case 5:Oi(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}t=t.sibling}}function ra(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ra(c,f,a),fo(4,f);break;case 1:if(ra(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Be(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Hp(F[c],A)}catch(Q){Be(r,r.return,Q)}}a&&g&64&&Qm(f),ho(f,f.return);break;case 27:eg(f);case 26:case 5:ra(c,f,a),a&&r===null&&g&4&&$m(f),ho(f,f.return);break;case 12:ra(c,f,a);break;case 31:ra(c,f,a),a&&g&4&&rg(c,f);break;case 13:ra(c,f,a),a&&g&4&&og(c,f);break;case 22:f.memoizedState===null&&ra(c,f,a),ho(f,f.return);break;case 30:break;default:ra(c,f,a)}n=n.sibling}}function vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jr(a))}function xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t))}function bi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(t,n,a,r),n=n.sibling}function cg(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,r),c&2048&&fo(9,n);break;case 1:bi(t,n,a,r);break;case 3:bi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t)));break;case 12:if(c&2048){bi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Be(n,n.return,F)}}else bi(t,n,a,r);break;case 31:bi(t,n,a,r);break;case 13:bi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?bi(t,n,a,r):po(t,n):f._visibility&2?bi(t,n,a,r):(f._visibility|=2,nr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&vf(g,n);break;case 24:bi(t,n,a,r),c&2048&&xf(n.alternate,n);break;default:bi(t,n,a,r)}}function nr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,F=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:nr(f,g,A,F,c),fo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?nr(f,g,A,F,c):po(f,g):(ft._visibility|=2,nr(f,g,A,F,c)),c&&Q&2048&&vf(g.alternate,g);break;case 24:nr(f,g,A,F,c),c&&Q&2048&&xf(g.alternate,g);break;default:nr(f,g,A,F,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&vf(r.alternate,r);break;case 24:po(a,r),c&2048&&xf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function ir(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)fg(t,n,a),t=t.sibling}function fg(t,n,a){switch(t.tag){case 26:ir(t,n,a),t.flags&mo&&t.memoizedState!==null&&sS(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:ir(t,n,a);break;case 3:case 4:var r=Ei;Ei=Zl(t.stateNode.containerInfo),ir(t,n,a),Ei=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,ir(t,n,a),mo=r):ir(t,n,a));break;default:ir(t,n,a)}}function hg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,pg(r,t)}hg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dg(t),t=t.sibling}function dg(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&La(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):go(t);break;default:go(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,pg(r,t)}hg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:La(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function pg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=t;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(ag(r),r===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var Sx={getCacheForType:function(t){var n=Sn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(on).controller.signal}},Mx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ve=null,ge=null,xe=0,ze=0,Jn=null,Oa=!1,ar=!1,Sf=!1,oa=0,Je=0,Pa=0,xs=0,Mf=0,$n=0,sr=0,_o=null,Hn=null,yf=!1,Bl=0,mg=0,Fl=1/0,Il=null,za=null,pn=0,Ba=null,rr=null,la=0,Ef=0,bf=null,gg=null,vo=0,Tf=null;function ti(){return(Ne&2)!==0&&xe!==0?xe&-xe:L.T!==null?Uf():Ui()}function _g(){if($n===0)if((xe&536870912)===0||Me){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Gn(t,n,a){(t===Ve&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(or(t,0),Fa(t,xe,$n,!1)),wn(t,a),((Ne&2)===0||t!==Ve)&&(t===Ve&&((Ne&2)===0&&(xs|=a),Je===4&&Fa(t,xe,$n,!1)),Pi(t))}function vg(t,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),c=r?bx(t,n):Rf(t,n,!0),f=r;do{if(c===0){ar&&!r&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!yx(a)){c=Rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;c=_o;var F=A.current.memoizedState.isDehydrated;if(F&&(or(A,g).flags|=256),g=Rf(A,g,!1),g!==2){if(Sf&&!F){A.errorRecoveryDisabledLanes|=f,xs|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){or(t,0),Fa(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fa(r,n,$n,!Oa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Bl+300-y(),10<c)){if(Fa(r,n,$n,!Oa),ut(r,0,!0)!==0)break t;la=n,r.timeoutHandle=Zg(xg.bind(null,r,a,Hn,Il,yf,n,$n,xs,sr,Oa,f,"Throttled",-0,0),c);break t}xg(r,a,Hn,Il,yf,n,$n,xs,sr,Oa,f,null,-0,0)}}break}while(!0);Pi(t)}function xg(t,n,a,r,c,f,g,A,F,Q,ft,gt,nt,rt){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},fg(n,f,gt);var Ht=(f&62914560)===f?Bl-y():(f&4194048)===f?mg-y():0;if(Ht=rS(gt,Ht),Ht!==null){la=f,t.cancelPendingCommit=Ht(Rg.bind(null,t,n,f,a,r,c,g,A,F,ft,gt,null,nt,rt)),Fa(t,f,g,!Q);return}}Rg(t,n,f,a,r,c,g,A,F)}function yx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,r){n&=~Mf,n&=~xs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Nt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Ir(t,a,n)}function Hl(){return(Ne&6)===0?(xo(0),!1):!0}function Af(){if(ge!==null){if(ze===0)var t=ge.return;else t=ge,Qi=cs=null,Gc(t),Qs=null,to=0,t=ge;for(;t!==null;)Km(t.alternate,t),t=t.return;ge=null}}function or(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Vx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Af(),Ve=t,ge=a=Zi(t.current,null),xe=n,ze=0,Jn=null,Oa=!1,ar=Ft(t,n),Sf=!1,sr=$n=Mf=xs=Pa=Je=0,Hn=_o=null,yf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Nt(r),f=1<<c;n|=t[c],r&=~f}return oa=n,ol(),a}function Sg(t,n){le=null,L.H=lo,n===Ks||n===ml?(n=zp(),ze=3):n===wc?(n=zp(),ze=4):ze=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ge===null&&(Je=1,wl(t,ri(n,t.current)))}function Mg(){var t=Kn.current;return t===null?!0:(xe&4194048)===xe?ci===null:(xe&62914560)===xe||(xe&536870912)!==0?t===ci:!1}function yg(){var t=L.H;return L.H=lo,t===null?lo:t}function Eg(){var t=L.A;return L.A=Sx,t}function Gl(){Je=4,Oa||(xe&4194048)!==xe&&Kn.current!==null||(ar=!0),(Pa&134217727)===0&&(xs&134217727)===0||Ve===null||Fa(Ve,xe,$n,!1)}function Rf(t,n,a){var r=Ne;Ne|=2;var c=yg(),f=Eg();(Ve!==t||xe!==n)&&(Il=null,or(t,n)),n=!1;var g=Je;t:do try{if(ze!==0&&ge!==null){var A=ge,F=Jn;switch(ze){case 8:Af(),g=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var Q=ze;if(ze=0,Jn=null,lr(t,A,F,Q),a&&ar){g=0;break t}break;default:Q=ze,ze=0,Jn=null,lr(t,A,F,Q)}}Ex(),g=Je;break}catch(ft){Sg(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Qi=cs=null,Ne=r,L.H=c,L.A=f,ge===null&&(Ve=null,xe=0,ol()),g}function Ex(){for(;ge!==null;)bg(ge)}function bx(t,n){var a=Ne;Ne|=2;var r=yg(),c=Eg();Ve!==t||xe!==n?(Il=null,Fl=y()+500,or(t,n)):ar=Ft(t,n);t:do try{if(ze!==0&&ge!==null){n=ge;var f=Jn;e:switch(ze){case 1:ze=0,Jn=null,lr(t,n,f,1);break;case 2:case 9:if(Op(f)){ze=0,Jn=null,Tg(n);break}n=function(){ze!==2&&ze!==9||Ve!==t||(ze=7),Pi(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Op(f)?(ze=0,Jn=null,Tg(n)):(ze=0,Jn=null,lr(t,n,f,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var A=ge;if(g?c0(g):A.stateNode.complete){ze=0,Jn=null;var F=A.sibling;if(F!==null)ge=F;else{var Q=A.return;Q!==null?(ge=Q,Vl(Q)):ge=null}break e}}ze=0,Jn=null,lr(t,n,f,5);break;case 6:ze=0,Jn=null,lr(t,n,f,6);break;case 8:Af(),Je=6;break t;default:throw Error(s(462))}}Tx();break}catch(ft){Sg(t,ft)}while(!0);return Qi=cs=null,L.H=r,L.A=c,Ne=a,ge!==null?0:(Ve=null,xe=0,ol(),Je)}function Tx(){for(;ge!==null&&!Wt();)bg(ge)}function bg(t){var n=jm(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?Vl(t):ge=n}function Tg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Vm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Vm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Gc(n);default:Km(a,n),n=ge=Ep(n,oa),n=jm(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?Vl(t):ge=n}function lr(t,n,a,r){Qi=cs=null,Gc(n),Qs=null,to=0;var c=n.return;try{if(dx(t,c,n,a,xe)){Je=1,wl(t,ri(a,t.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;Je=1,wl(t,ri(a,t.current)),ge=null;return}n.flags&32768?(Me||r===1?t=!0:ar||(xe&536870912)!==0?t=!1:(Oa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ag(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){Ag(n,Oa);return}t=n.return;var a=gx(n.alternate,n,oa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);Je===0&&(Je=5)}function Ag(t,n){do{var a=_x(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);Je=6,ge=null}function Rg(t,n,a,r,c,f,g,A,F){t.cancelPendingCommit=null;do Xl();while(pn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pc,vi(t,a,f,g,A,F),t===Ve&&(ge=Ve=null,xe=0),rr=n,Ba=t,la=a,Ef=f,bf=c,gg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wx(ct,function(){return Ng(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,c=B.p,B.p=2,g=Ne,Ne|=4;try{vx(t,n,a)}finally{Ne=g,B.p=c,L.T=r}}pn=1,Cg(),wg(),Dg()}}function Cg(){if(pn===1){pn=0;var t=Ba,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=B.p;B.p=2;var c=Ne;Ne|=4;try{lg(n,t);var f=If,g=pp(t.containerInfo),A=f.focusedElem,F=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&dp(A.ownerDocument.documentElement,A)){if(F!==null&&uc(A)){var Q=F.start,ft=F.end;if(ft===void 0&&(ft=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(ft,A.value.length);else{var gt=A.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var rt=nt.getSelection(),Ht=A.textContent.length,Jt=Math.min(F.start,Ht),Ge=F.end===void 0?Jt:Math.min(F.end,Ht);!rt.extend&&Jt>Ge&&(g=Ge,Ge=Jt,Jt=g);var j=hp(A,Jt),X=hp(A,Ge);if(j&&X&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var K=gt.createRange();K.setStart(j.node,j.offset),rt.removeAllRanges(),Jt>Ge?(rt.addRange(K),rt.extend(X.node,X.offset)):(K.setEnd(X.node,X.offset),rt.addRange(K))}}}}for(gt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}eu=!!Ff,If=Ff=null}finally{Ne=c,B.p=r,L.T=a}}t.current=n,pn=2}}function wg(){if(pn===2){pn=0;var t=Ba,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=B.p;B.p=2;var c=Ne;Ne|=4;try{ig(t,n.alternate,n)}finally{Ne=c,B.p=r,L.T=a}}pn=3}}function Dg(){if(pn===4||pn===3){pn=0,U();var t=Ba,n=rr,a=la,r=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,rr=Ba=null,Ug(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(za=null),Os(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,c=B.p,B.p=2,L.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var A=r[g];f(A.value,{componentStack:A.stack})}}finally{L.T=n,B.p=c}}(la&3)!==0&&Xl(),Pi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Tf?vo++:(vo=0,Tf=t):vo=0,xo(0)}}function Ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jr(n)))}function Xl(){return Cg(),wg(),Dg(),Ng()}function Ng(){if(pn!==5)return!1;var t=Ba,n=Ef;Ef=0;var a=Os(la),r=L.T,c=B.p;try{B.p=32>a?32:a,L.T=null,a=bf,bf=null;var f=Ba,g=la;if(pn=0,rr=Ba=null,la=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,dg(f.current),cg(f,f.current,g,a),Ne=A,xo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{B.p=c,L.T=r,Ug(t,n)}}function Lg(t,n,a){n=ri(a,n),n=nf(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(wn(t,2),Pi(t))}function Be(t,n,a){if(t.tag===3)Lg(t,t,a);else for(;n!==null;){if(n.tag===3){Lg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(za===null||!za.has(r))){t=ri(a,t),a=Om(2),r=Da(n,a,2),r!==null&&(Pm(a,r,n,t),wn(r,2),Pi(r));break}}n=n.return}}function Cf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Mx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Sf=!0,c.add(a),t=Ax.bind(null,t,n,a),n.then(t,t))}function Ax(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(xe&a)===a&&(Je===4||Je===3&&(xe&62914560)===xe&&300>y()-Bl?(Ne&2)===0&&or(t,0):Mf|=a,sr===xe&&(sr=0)),Pi(t)}function Og(t,n){n===0&&(n=Pe()),t=os(t,n),t!==null&&(wn(t,n),Pi(t))}function Rx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Og(t,a)}function Cx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Og(t,a)}function wx(t,n){return be(t,n)}var kl=null,ur=null,wf=!1,Wl=!1,Df=!1,Ia=0;function Pi(t){t!==ur&&t.next===null&&(ur===null?kl=ur=t:ur=ur.next=t),Wl=!0,wf||(wf=!0,Ux())}function xo(t,n){if(!Df&&Wl){Df=!0;do for(var a=!1,r=kl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Nt(42|t)+1)-1,f&=c&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fg(r,f))}else f=xe,f=ut(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ft(r,f)||(a=!0,Fg(r,f));r=r.next}while(a);Df=!1}}function Dx(){Pg()}function Pg(){Wl=wf=!1;var t=0;Ia!==0&&Gx()&&(t=Ia);for(var n=y(),a=null,r=kl;r!==null;){var c=r.next,f=zg(r,n);f===0?(r.next=null,a===null?kl=c:a.next=c,c===null&&(ur=a)):(a=r,(t!==0||(f&3)!==0)&&(Wl=!0)),r=c}pn!==0&&pn!==5||xo(t),Ia!==0&&(Ia=0)}function zg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Nt(f),A=1<<g,F=c[g];F===-1?((A&a)===0||(A&r)!==0)&&(c[g]=ne(A,n)):F<=n&&(t.expiredLanes|=A),f&=~A}if(n=Ve,a=xe,a=ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Le(r),Os(a)){case 2:case 8:a=xt;break;case 32:a=ct;break;case 268435456:a=Ct;break;default:a=ct}return r=Bg.bind(null,t),a=be(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Le(r),t.callbackPriority=2,t.callbackNode=null,2}function Bg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var r=xe;return r=ut(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(vg(t,r,n),zg(t,y()),t.callbackNode!=null&&t.callbackNode===a?Bg.bind(null,t):null)}function Fg(t,n){if(Xl())return null;vg(t,n,!0)}function Ux(){Xx(function(){(Ne&6)!==0?be(pt,Dx):Pg()})}function Uf(){if(Ia===0){var t=js;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ia=t}return Ia}function Ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$o(""+t)}function Hg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Nx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ig((c[hn]||null).action),g=r.submitter;g&&(n=(n=g[hn]||null)?Ig(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new il("action","action",null,r,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ia!==0){var F=g?Hg(c,g):new FormData(c);Kc(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(A.preventDefault(),F=g?Hg(c,g):new FormData(c),Kc(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Nf=0;Nf<dc.length;Nf++){var Lf=dc[Nf],Lx=Lf.toLowerCase(),Ox=Lf[0].toUpperCase()+Lf.slice(1);yi(Lx,"on"+Ox)}yi(_p,"onAnimationEnd"),yi(vp,"onAnimationIteration"),yi(xp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Kv,"onTransitionRun"),yi(Qv,"onTransitionStart"),yi(Jv,"onTransitionCancel"),yi(Sp,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Gg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],F=A.instance,Q=A.currentTarget;if(A=A.listener,F!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Q;try{f(c)}catch(ft){rl(ft)}c.currentTarget=null,f=F}else for(g=0;g<r.length;g++){if(A=r[g],F=A.instance,Q=A.currentTarget,A=A.listener,F!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Q;try{f(c)}catch(ft){rl(ft)}c.currentTarget=null,f=F}}}}function _e(t,n){var a=n[Sa];a===void 0&&(a=n[Sa]=new Set);var r=t+"__bubble";a.has(r)||(Vg(n,t,2,!1),a.add(r))}function Of(t,n,a){var r=0;n&&(r|=4),Vg(a,t,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Pf(t){if(!t[ql]){t[ql]=!0,st.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Of(a,!1,t),Of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,Of("selectionchange",!1,n))}}function Vg(t,n,a,r){switch(_0(n)){case 2:var c=uS;break;case 8:c=cS;break;default:c=Kf}a=c.bind(null,n,a,t),c=void 0,!tc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function zf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===c)break;if(g===4)for(g=r.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;A!==null;){if(g=Ma(A),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){r=f=g;continue t}A=A.parentNode}}r=r.return}Yd(function(){var Q=f,ft=Ju(a),gt=[];t:{var nt=Mp.get(t);if(nt!==void 0){var rt=il,Ht=t;switch(t){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":rt=Cv;break;case"focusin":Ht="focus",rt=ac;break;case"focusout":Ht="blur",rt=ac;break;case"beforeblur":case"afterblur":rt=ac;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Uv;break;case _p:case vp:case xp:rt=xv;break;case Sp:rt=Lv;break;case"scroll":case"scrollend":rt=pv;break;case"wheel":rt=Pv;break;case"copy":case"cut":case"paste":rt=Mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Jd;break;case"toggle":case"beforetoggle":rt=Bv}var Jt=(n&4)!==0,Ge=!Jt&&(t==="scroll"||t==="scrollend"),j=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var X=Q,K;X!==null;){var mt=X;if(K=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||K===null||j===null||(mt=Gr(X,j),mt!=null&&Jt.push(Mo(X,mt,K))),Ge)break;X=X.return}0<Jt.length&&(nt=new rt(nt,Ht,null,a,ft),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",nt&&a!==Qu&&(Ht=a.relatedTarget||a.fromElement)&&(Ma(Ht)||Ht[Wi]))break t;if((rt||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,rt?(Ht=a.relatedTarget||a.toElement,rt=Q,Ht=Ht?Ma(Ht):null,Ht!==null&&(Ge=u(Ht),Jt=Ht.tag,Ht!==Ge||Jt!==5&&Jt!==27&&Jt!==6)&&(Ht=null)):(rt=null,Ht=Q),rt!==Ht)){if(Jt=Kd,mt="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Jd,mt="onPointerLeave",j="onPointerEnter",X="pointer"),Ge=rt==null?nt:is(rt),K=Ht==null?nt:is(Ht),nt=new Jt(mt,X+"leave",rt,a,ft),nt.target=Ge,nt.relatedTarget=K,mt=null,Ma(ft)===Q&&(Jt=new Jt(j,X+"enter",Ht,a,ft),Jt.target=K,Jt.relatedTarget=Ge,mt=Jt),Ge=mt,rt&&Ht)e:{for(Jt=zx,j=rt,X=Ht,K=0,mt=j;mt;mt=Jt(mt))K++;mt=0;for(var Qt=X;Qt;Qt=Jt(Qt))mt++;for(;0<K-mt;)j=Jt(j),K--;for(;0<mt-K;)X=Jt(X),mt--;for(;K--;){if(j===X||X!==null&&j===X.alternate){Jt=j;break e}j=Jt(j),X=Jt(X)}Jt=null}else Jt=null;rt!==null&&Xg(gt,nt,rt,Jt,!1),Ht!==null&&Ge!==null&&Xg(gt,Ge,Ht,Jt,!0)}}t:{if(nt=Q?is(Q):window,rt=nt.nodeName&&nt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&nt.type==="file")var Ce=rp;else if(ap(nt))if(op)Ce=Yv;else{Ce=Wv;var qt=kv}else rt=nt.nodeName,!rt||rt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?Q&&zs(Q.elementType)&&(Ce=rp):Ce=qv;if(Ce&&(Ce=Ce(t,Q))){sp(gt,Ce,a,ft);break t}qt&&qt(t,nt,Q),t==="focusout"&&Q&&nt.type==="number"&&Q.memoizedProps.value!=null&&Si(nt,"number",nt.value)}switch(qt=Q?is(Q):window,t){case"focusin":(ap(qt)||qt.contentEditable==="true")&&(Hs=qt,cc=Q,Zr=null);break;case"focusout":Zr=cc=Hs=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,mp(gt,a,ft);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":mp(gt,a,ft)}var fe;if(rc)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Is?np(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&($d&&a.locale!=="ko"&&(Is||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Is&&(fe=jd()):(Ea=ft,ec="value"in Ea?Ea.value:Ea.textContent,Is=!0)),qt=Yl(Q,Se),0<qt.length&&(Se=new Qd(Se,t,null,a,ft),gt.push({event:Se,listeners:qt}),fe?Se.data=fe:(fe=ip(a),fe!==null&&(Se.data=fe)))),(fe=Iv?Hv(t,a):Gv(t,a))&&(Se=Yl(Q,"onBeforeInput"),0<Se.length&&(qt=new Qd("onBeforeInput","beforeinput",null,a,ft),gt.push({event:qt,listeners:Se}),qt.data=fe)),Nx(gt,t,Q,a,ft)}Gg(gt,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(t,a),c!=null&&r.unshift(Mo(t,c,f)),c=Gr(t,n),c!=null&&r.push(Mo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xg(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var A=a,F=A.alternate,Q=A.stateNode;if(A=A.tag,F!==null&&F===r)break;A!==5&&A!==26&&A!==27||Q===null||(F=Q,c?(Q=Gr(a,f),Q!=null&&g.unshift(Mo(a,Q,F))):c||(Q=Gr(a,f),Q!=null&&g.push(Mo(a,Q,F)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Bx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(Bx,`
`).replace(Fx,"")}function Wg(t,n){return n=kg(n),kg(t)===n}function He(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Nn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Nn(t,""+r);break;case"className":se(t,"class",r);break;case"tabIndex":se(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":se(t,a,r);break;case"style":qi(t,r,f);break;case"data":if(n!=="object"){se(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$o(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$o(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Yi);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=$o(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),ee(t,"popover",r);break;case"xlinkActuate":It(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":It(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":It(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":It(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":It(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":It(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":It(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":It(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":It(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ee(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hv.get(a)||a,ee(t,a,r))}}function Bf(t,n,a,r,c,f){switch(a){case"style":qi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Nn(t,r):(typeof r=="number"||typeof r=="bigint")&&Nn(t,""+r);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ee(t,a,r)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,f,g,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var A=f=g=c=null,F=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":g=ft;break;case"checked":F=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:He(t,n,r,ft,a,null)}}qn(t,f,A,F,Q,g,c,!1);return;case"select":_e("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:He(t,n,c,A,a,null)}n=f,a=g,t.multiple=!!r,n!=null?Yn(t,!!r,n,!1):a!=null&&Yn(t,!!r,a,!0);return;case"textarea":_e("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(t,n,g,A,a,null)}sn(t,r,c,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(r=a[F],r!=null)&&(F==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,F,r,a,null));return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<So.length;r++)_e(So[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,Q,r,a,null)}return;default:if(zs(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Bf(t,n,ft,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&He(t,n,A,r,a,null))}function Ix(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,A=null,F=null,Q=null,ft=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":F=gt;default:r.hasOwnProperty(rt)||He(t,n,rt,null,r,gt)}}for(var nt in r){var rt=r[nt];if(gt=a[nt],r.hasOwnProperty(nt)&&(rt!=null||gt!=null))switch(nt){case"type":f=rt;break;case"name":c=rt;break;case"checked":Q=rt;break;case"defaultChecked":ft=rt;break;case"value":g=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==gt&&He(t,n,nt,rt,r,gt)}}Un(t,g,A,F,Q,ft,f,c);return;case"select":rt=g=A=nt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":rt=F;default:r.hasOwnProperty(f)||He(t,n,f,null,r,F)}for(c in r)if(f=r[c],F=a[c],r.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==F&&He(t,n,c,f,r,F)}n=A,a=g,r=rt,nt!=null?Yn(t,!!a,nt,!1):!!r!=!!a&&(n!=null?Yn(t,!!a,n,!0):Yn(t,!!a,a?[]:"",!1));return;case"textarea":rt=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(t,n,A,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":nt=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&He(t,n,g,c,r,f)}Oe(t,nt,rt);return;case"option":for(var Ht in a)nt=a[Ht],a.hasOwnProperty(Ht)&&nt!=null&&!r.hasOwnProperty(Ht)&&(Ht==="selected"?t.selected=!1:He(t,n,Ht,null,r,nt));for(F in r)nt=r[F],rt=a[F],r.hasOwnProperty(F)&&nt!==rt&&(nt!=null||rt!=null)&&(F==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":He(t,n,F,nt,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!r.hasOwnProperty(Jt)&&He(t,n,Jt,null,r,nt);for(Q in r)if(nt=r[Q],rt=a[Q],r.hasOwnProperty(Q)&&nt!==rt&&(nt!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:He(t,n,Q,nt,r,rt)}return;default:if(zs(n)){for(var Ge in a)nt=a[Ge],a.hasOwnProperty(Ge)&&nt!==void 0&&!r.hasOwnProperty(Ge)&&Bf(t,n,Ge,void 0,r,nt);for(ft in r)nt=r[ft],rt=a[ft],!r.hasOwnProperty(ft)||nt===rt||nt===void 0&&rt===void 0||Bf(t,n,ft,nt,r,rt);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!r.hasOwnProperty(j)&&He(t,n,j,null,r,nt);for(gt in r)nt=r[gt],rt=a[gt],!r.hasOwnProperty(gt)||nt===rt||nt==null&&rt==null||He(t,n,gt,nt,r,rt)}function qg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,A=c.duration;if(f&&A&&qg(g)){for(g=0,A=c.responseEnd,r+=1;r<a.length;r++){var F=a[r],Q=F.startTime;if(Q>A)break;var ft=F.transferSize,gt=F.initiatorType;ft&&qg(gt)&&(F=F.responseEnd,g+=ft*(F<A?1:(A-Q)/(F-Q)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ff=null,If=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function Yg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function Gx(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(kx)}:Zg;function kx(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function Qg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),dr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[ns]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);dr(n)}function Jg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Wx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ns])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function qx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function $g(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Yx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Wf=null;function t0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function e0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function n0(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hr(t)}var hi=new Map,i0=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=B.d;B.d={f:jx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:eS,S:tS,M:nS};function jx(){var t=ua.f(),n=Hl();return t||n}function Zx(t){var n=ya(t);n!==null&&n.tag===5&&n.type==="form"?Sm(n):ua.r(t)}var cr=typeof document>"u"?null:document;function a0(t,n,a){var r=cr;if(r&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),i0.has(c)||(i0.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),yn(n,"link",t),k(n),r.head.appendChild(n)))}}function Kx(t){ua.D(t),a0("dns-prefetch",t,null)}function Qx(t,n){ua.C(t,n),a0("preconnect",t,n)}function Jx(t,n,a){ua.L(t,n,a);var r=cr;if(r&&t&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(t)+'"]';var f=c;switch(n){case"style":f=fr(t);break;case"script":f=hr(t)}hi.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),yn(n,"link",t),k(n),r.head.appendChild(n)))}}function $x(t,n){ua.m(t,n);var a=cr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(r)+'"][href="'+ie(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(t)}if(!hi.has(f)&&(t=S({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),yn(r,"link",t),k(r),a.head.appendChild(r)}}}function tS(t,n,a){ua.S(t,n,a);var r=cr;if(r&&t){var c=R(r).hoistableStyles,f=fr(t);n=n||"default";var g=c.get(f);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(Eo(f)))A.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&qf(t,a);var F=g=r.createElement("link");k(F),yn(F,"link",t),F._p=new Promise(function(Q,ft){F.onload=Q,F.onerror=ft}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Kl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},c.set(f,g)}}}function eS(t,n){ua.X(t,n);var a=cr;if(a&&t){var r=R(a).hoistableScripts,c=hr(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=S({src:t,async:!0},n),(n=hi.get(c))&&Yf(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function nS(t,n){ua.M(t,n);var a=cr;if(a&&t){var r=R(a).hoistableScripts,c=hr(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=hi.get(c))&&Yf(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function s0(t,n,a,r){var c=(c=et.current)?Zl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=R(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fr(a.href);var f=R(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Eo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||iS(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=R(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function fr(t){return'href="'+ie(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function r0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function iS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),yn(n,"link",a),k(n),t.head.appendChild(n))}function hr(t){return'[src="'+ie(t)+'"]'}function bo(t){return"script[async]"+t}function o0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(r)return n.instance=r,k(r),r;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),k(r),yn(r,"style",c),Kl(r,a.precedence,t),n.instance=r;case"stylesheet":c=fr(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=r0(a),(c=hi.get(c))&&qf(r,c),f=(t.ownerDocument||t).createElement("link"),k(f);var g=f;return g._p=new Promise(function(A,F){g.onload=A,g.onerror=F}),yn(f,"link",r),n.state.loading|=4,Kl(f,a.precedence,t),n.instance=f;case"script":return f=hr(a.src),(c=t.querySelector(bo(f)))?(n.instance=c,k(c),c):(r=a,(c=hi.get(f))&&(r=S({},a),Yf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),k(c),yn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kl(r,a.precedence,t));return n.instance}function Kl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function l0(t,n,a){if(Ql===null){var r=new Map,c=Ql=new Map;c.set(a,r)}else c=Ql,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ns]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(f):r.set(g,[f])}}return r}function u0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function aS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=fr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,r=r0(r),(c=hi.get(c))&&qf(r,c),f=f.createElement("link"),k(f);var g=f;g._p=new Promise(function(A,F){g.onload=A,g.onerror=F}),yn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function rS(t,n){return t.stylesheets&&t.count===0&&tu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&tu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&jf===0&&(jf=62500*Hx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>jf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function tu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(oS,t),$l=null,Jl.call(t))}function oS(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var r=a.get(null);else{a=new Map,$l.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Jl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var To={$$typeof:P,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function lS(t,n,a,r,c,f,g,A,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function f0(t,n,a,r,c,f,g,A,F,Q,ft,gt){return t=new lS(t,n,a,g,F,Q,ft,gt,A),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),t.current=f,f.stateNode=t,n=Ac(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Dc(f),t}function h0(t){return t?(t=Xs,t):Xs}function d0(t,n,a,r,c,f){c=h0(c),r.context===null?r.context=c:r.pendingContext=c,r=wa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Da(t,r,n),a!==null&&(Gn(a,t,n),no(a,t,n))}function p0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zf(t,n){p0(t,n),(t=t.alternate)&&p0(t,n)}function m0(t){if(t.tag===13||t.tag===31){var n=os(t,67108864);n!==null&&Gn(n,t,67108864),Zf(t,67108864)}}function g0(t){if(t.tag===13||t.tag===31){var n=ti();n=Ls(n);var a=os(t,n);a!==null&&Gn(a,t,n),Zf(t,n)}}var eu=!0;function uS(t,n,a,r){var c=L.T;L.T=null;var f=B.p;try{B.p=2,Kf(t,n,a,r)}finally{B.p=f,L.T=c}}function cS(t,n,a,r){var c=L.T;L.T=null;var f=B.p;try{B.p=8,Kf(t,n,a,r)}finally{B.p=f,L.T=c}}function Kf(t,n,a,r){if(eu){var c=Qf(r);if(c===null)zf(t,n,r,nu,a),v0(t,r);else if(hS(c,t,n,a,r))r.stopPropagation();else if(v0(t,r),n&4&&-1<fS.indexOf(t)){for(;c!==null;){var f=ya(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var F=1<<31-Nt(g);A.entanglements[1]|=F,g&=~F}Pi(f),(Ne&6)===0&&(Fl=y()+500,xo(0))}}break;case 31:case 13:A=os(f,2),A!==null&&Gn(A,f,2),Hl(),Zf(f,2)}if(f=Qf(r),f===null&&zf(t,n,r,nu,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else zf(t,n,r,null,a)}}function Qf(t){return t=Ju(t),Jf(t)}var nu=null;function Jf(t){if(nu=null,t=Ma(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nu=t,null}function _0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case xt:return 8;case ct:case Xt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var $f=!1,Ga=null,Va=null,Xa=null,Ao=new Map,Ro=new Map,ka=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ya(n),n!==null&&m0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function hS(t,n,a,r,c){switch(n){case"focusin":return Ga=Co(Ga,t,n,a,r,c),!0;case"dragenter":return Va=Co(Va,t,n,a,r,c),!0;case"mouseover":return Xa=Co(Xa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,r,c)),!0}return!1}function x0(t){var n=Ma(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ps(t.priority,function(){g0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ps(t.priority,function(){g0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function iu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Qu=r,a.target.dispatchEvent(r),Qu=null}else return n=ya(a),n!==null&&m0(n),t.blockedOn=a,!1;n.shift()}return!0}function S0(t,n,a){iu(t)&&a.delete(n)}function dS(){$f=!1,Ga!==null&&iu(Ga)&&(Ga=null),Va!==null&&iu(Va)&&(Va=null),Xa!==null&&iu(Xa)&&(Xa=null),Ao.forEach(S0),Ro.forEach(S0)}function au(t,n){t.blockedOn===n&&(t.blockedOn=null,$f||($f=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dS)))}var su=null;function M0(t){su!==t&&(su=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){su===t&&(su=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Jf(r||a)===null)continue;break}var f=ya(a);f!==null&&(t.splice(n,3),n-=3,Kc(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function dr(t){function n(F){return au(F,t)}Ga!==null&&au(Ga,t),Va!==null&&au(Va,t),Xa!==null&&au(Xa,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<ka.length;a++){var r=ka[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)x0(a),a.blockedOn===null&&ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[hn]||null;if(typeof f=="function")g||M0(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[hn]||null)A=g.formAction;else if(Jf(c)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),M0(a)}}}function y0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function th(t){this._internalRoot=t}ru.prototype.render=th.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();d0(a,r,t,n,null,null)},ru.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;d0(t.current,2,null,t,null,null),Hl(),n[Wi]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ui();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,t),a===0&&x0(t)}};var E0=e.version;if(E0!=="19.2.4")throw Error(s(527,E0,"19.2.4"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var pS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{yt=ou.inject(pS),St=ou}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Dm,f=Um,g=Nm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=f0(t,1,!1,null,null,a,r,null,c,f,g,y0),t[Wi]=n.current,Pf(t),new th(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Dm,g=Um,A=Nm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=f0(t,1,!0,n,a??null,r,c,F,f,g,A,y0),n.context=h0(null),a=n.current,r=ti(),r=Ls(r),c=wa(r),c.callback=null,Da(a,c,r),a=r,n.current.lanes=a,wn(n,a),Pi(n),t[Wi]=n.current,Pf(t),new ru(n)},Do.version="19.2.4",Do}var L0;function bS(){if(L0)return ih.exports;L0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ih.exports=ES(),ih.exports}var TS=bS();const AS="/SleighRide/assets/DSC09376-BmvvNO0T.png",RS=Object.freeze(Object.defineProperty({__proto__:null,default:AS},Symbol.toStringTag,{value:"Module"})),CS="/SleighRide/assets/airbus%20editeed-B78ChLot.png",wS=Object.freeze(Object.defineProperty({__proto__:null,default:CS},Symbol.toStringTag,{value:"Module"})),DS="/SleighRide/assets/%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%87%E1%85%A9%E1%86%AB-BuLPI8dq.png",US=Object.freeze(Object.defineProperty({__proto__:null,default:DS},Symbol.toStringTag,{value:"Module"})),NS=Object.assign({"../assets/bg-images/DSC09376.png":RS,"../assets/bg-images/airbus editeed.png":wS,"../assets/bg-images/편집본.png":US}),Uo=Object.values(NS).map(o=>o.default),LS=()=>{const[o,e]=ts.useState(0);return ts.useEffect(()=>{if(console.log("로드된 이미지 목록:",Uo),Uo.length===0)return;const i=setInterval(()=>{e(s=>(s+1)%Uo.length)},5e3);return()=>clearInterval(i)},[]),Uo.length===0?jt.jsx("div",{className:"absolute inset-0 bg-[#0a0a0b] z-0"}):jt.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden bg-[#0a0a0b]",children:[Uo.map((i,s)=>jt.jsx("div",{className:`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${s===o?"opacity-40":"opacity-0"}`,style:{backgroundImage:`url(${i})`}},i)),jt.jsx("div",{className:"absolute inset-0 bg-black/60 z-[1]"})]})},OS=()=>{const[o,e]=ts.useState([]),i=["const [isCustomBg, setIsCustomBg] = useState(false);","export default App;","backdrop-blur-md flex flex-col items-center","shadow-[0_0_20px_rgba(0,0,0,0.5)]","rendering_galaxy_particles... OK","Personal Archive v2.0.26","system_status: stable","fetching_assets_from_source... DONE","opacity: 0.4; filter: blur(0px);"];return ts.useEffect(()=>{const s=setInterval(()=>{const l={id:Math.random().toString(36).substr(2,9),text:i[Math.floor(Math.random()*i.length)]};e(u=>[...u.slice(-5),l])},3e3);return()=>clearInterval(s)},[]),jt.jsxs("div",{className:"fixed bottom-12 left-32 z-40 pointer-events-none font-mono",children:[jt.jsx("div",{className:"flex flex-col space-y-1.5",children:o.map((s,l)=>jt.jsx("div",{className:`relative text-[10px] tracking-tight transition-opacity duration-1000 ${l===o.length-1?"text-white/80":"text-white/20"}`,style:{animation:l===o.length-1?"glitch 0.4s ease-in-out":"none"},children:s.text},s.id))}),jt.jsx("style",{children:`
        @keyframes glitch {
          0% {
            transform: translate(0);
            opacity: 0;
          }
          20% {
            transform: translate(-2px, 1px);
            opacity: 0.8;
            clip-path: inset(10% 0 30% 0);
          }
          40% {
            transform: translate(2px, -1px);
            clip-path: inset(40% 0 10% 0);
          }
          60% {
            transform: translate(-1px, 0);
            clip-path: inset(0 0 50% 0);
          }
          80% {
            transform: translate(1px, 1px);
            opacity: 1;
          }
          100% {
            transform: translate(0);
            opacity: 0.8;
            clip-path: none;
          }
        }
      `})]})};const Od="183",PS=0,O0=1,zS=2,Lu=1,BS=2,Io=3,es=0,Xn=1,ma=2,Gi=0,Cr=1,Hu=2,P0=3,z0=4,FS=5,Rs=100,IS=101,HS=102,GS=103,VS=104,XS=200,kS=201,WS=202,qS=203,Hh=204,Gh=205,YS=206,jS=207,ZS=208,KS=209,QS=210,JS=211,$S=212,tM=213,eM=214,Vh=0,Xh=1,kh=2,Dr=3,Wh=4,qh=5,Yh=6,jh=7,U_=0,nM=1,iM=2,Vi=0,N_=1,L_=2,O_=3,P_=4,z_=5,B_=6,F_=7,I_=300,Us=301,Ur=302,oh=303,lh=304,qu=306,Zh=1e3,ga=1001,Kh=1002,En=1003,aM=1004,lu=1005,Cn=1006,uh=1007,ws=1008,gi=1009,H_=1010,G_=1011,Go=1012,Pd=1013,Xi=1014,Ii=1015,ii=1016,zd=1017,Bd=1018,Vo=1020,V_=35902,X_=35899,k_=1021,W_=1022,wi=1023,va=1026,Ds=1027,q_=1028,Fd=1029,Nr=1030,Id=1031,Hd=1033,Ou=33776,Pu=33777,zu=33778,Bu=33779,Qh=35840,Jh=35841,$h=35842,td=35843,ed=36196,nd=37492,id=37496,ad=37488,sd=37489,rd=37490,od=37491,ld=37808,ud=37809,cd=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,Sd=37820,Md=37821,yd=36492,Ed=36494,bd=36495,Td=36283,Ad=36284,Rd=36285,Cd=36286,sM=3200,rM=0,oM=1,Ja="",pi="srgb",Lr="srgb-linear",Gu="linear",Fe="srgb",pr=7680,B0=519,lM=512,uM=513,cM=514,Gd=515,fM=516,hM=517,Vd=518,dM=519,F0=35044,I0="300 es",Hi=2e3,Vu=2001;function pM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Xu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mM(){const o=Xu("canvas");return o.style.display="block",o}const H0={};function G0(...o){const e="THREE."+o.shift();console.log(e,...o)}function Y_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ae(...o){o=Y_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function De(...o){o=Y_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function ku(...o){const e=o.join(" ");e in H0||(H0[e]=!0,ae(...o))}function gM(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const _M={[Vh]:Xh,[kh]:Yh,[Wh]:jh,[Dr]:qh,[Xh]:Vh,[Yh]:kh,[jh]:Wh,[qh]:Dr};class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=Math.PI/180,wd=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function vM(o,e){return(o%e+e)%e}function fh(o,e,i){return(1-i)*o+i*e}function No(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,i=0){de.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Br{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],S=s[l+3],_=u[h+0],E=u[h+1],b=u[h+2],w=u[h+3];if(S!==w||m!==_||d!==E||v!==b){let M=m*_+d*E+v*b+S*w;M<0&&(_=-_,E=-E,b=-b,w=-w,M=-M);let x=1-p;if(M<.9995){const C=Math.acos(M),P=Math.sin(C);x=Math.sin(x*C)/P,p=Math.sin(p*C)/P,m=m*x+_*p,d=d*x+E*p,v=v*x+b*p,S=S*x+w*p}else{m=m*x+_*p,d=d*x+E*p,v=v*x+b*p,S=S*x+w*p;const C=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=C,d*=C,v*=C,S*=C}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,u,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],S=u[h],_=u[h+1],E=u[h+2],b=u[h+3];return e[i]=p*b+v*S+m*E-d*_,e[i+1]=m*b+v*_+d*S-p*E,e[i+2]=d*b+v*E+p*_-m*S,e[i+3]=v*b-p*S-m*_-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),S=p(u/2),_=m(s/2),E=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=_*v*S+d*E*b,this._y=d*E*S-_*v*b,this._z=d*v*b+_*E*S,this._w=d*v*S-_*E*b;break;case"YXZ":this._x=_*v*S+d*E*b,this._y=d*E*S-_*v*b,this._z=d*v*b-_*E*S,this._w=d*v*S+_*E*b;break;case"ZXY":this._x=_*v*S-d*E*b,this._y=d*E*S+_*v*b,this._z=d*v*b+_*E*S,this._w=d*v*S-_*E*b;break;case"ZYX":this._x=_*v*S-d*E*b,this._y=d*E*S+_*v*b,this._z=d*v*b-_*E*S,this._w=d*v*S+_*E*b;break;case"YZX":this._x=_*v*S+d*E*b,this._y=d*E*S+_*v*b,this._z=d*v*b-_*E*S,this._w=d*v*S-_*E*b;break;case"XZY":this._x=_*v*S-d*E*b,this._y=d*E*S-_*v*b,this._z=d*v*b+_*E*S,this._w=d*v*S+_*E*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],_=s+p+S;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-d)*E,this._z=(h-l)*E}else if(s>p&&s>S){const E=2*Math.sqrt(1+s-p-S);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+d)/E}else if(p>S){const E=2*Math.sqrt(1+p-s-S);this._w=(u-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+S-s-p);this._w=(h-l)/E,this._x=(u+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+h*p+l*d-u*m,this._y=l*v+h*m+u*p-s*d,this._z=u*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-u*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,u=-u,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,s=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(V0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(V0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),v=2*(p*i-u*l),S=2*(u*s-h*i);return this.x=i+m*d+h*S-p*v,this.y=s+m*v+p*d-u*S,this.z=l+m*S+u*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new it,V0=new Br;class he{constructor(e,i,s,l,u,h,p,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,p,m,d)}set(e,i,s,l,u,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],S=s[7],_=s[2],E=s[5],b=s[8],w=l[0],M=l[3],x=l[6],C=l[1],P=l[4],N=l[7],G=l[2],I=l[5],z=l[8];return u[0]=h*w+p*C+m*G,u[3]=h*M+p*P+m*I,u[6]=h*x+p*N+m*z,u[1]=d*w+v*C+S*G,u[4]=d*M+v*P+S*I,u[7]=d*x+v*N+S*z,u[2]=_*w+E*C+b*G,u[5]=_*M+E*P+b*I,u[8]=_*x+E*N+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-s*u*v+s*p*m+l*u*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=v*h-p*d,_=p*m-v*u,E=d*u-h*m,b=i*S+s*_+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=S*w,e[1]=(l*d-v*s)*w,e[2]=(p*s-l*h)*w,e[3]=_*w,e[4]=(v*i-l*m)*w,e[5]=(l*u-p*i)*w,e[6]=E*w,e[7]=(s*m-d*i)*w,e[8]=(h*i-s*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,p){const m=Math.cos(u),d=Math.sin(u);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(dh.makeScale(e,i)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,i){return this.premultiply(dh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new he,X0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),k0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ku("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ku("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:e,whitePoint:s,transfer:Gu,toXYZ:X0,fromXYZ:k0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:X0,fromXYZ:k0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Ae=xM();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mr;class SM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{mr===void 0&&(mr=Xu("canvas")),mr.width=e.width,mr.height=e.height;const l=mr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=_a(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:e.width,height:e.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MM=0;class Xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?u.push(ph(l[h].image)):u.push(ph(l[h]))}else u=ph(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function ph(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?SM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let yM=0;const mh=new it;class Pn extends zr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ga,l=ga,u=Cn,h=ws,p=wi,m=gi,d=Pn.DEFAULT_ANISOTROPY,v=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ko(),this.name="",this.source=new Xd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=I_;Pn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,d=m[0],v=m[4],S=m[8],_=m[1],E=m[5],b=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(S-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(S+w)<.1&&Math.abs(b+M)<.1&&Math.abs(d+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(d+1)/2,N=(E+1)/2,G=(x+1)/2,I=(v+_)/4,z=(S+w)/4,T=(b+M)/4;return P>N&&P>G?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=I/s,u=z/s):N>G?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=I/l,u=T/l):G<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),s=z/u,l=T/u),this.set(s,l,u,i),this}let C=Math.sqrt((M-b)*(M-b)+(S-w)*(S-w)+(_-v)*(_-v));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(S-w)/C,this.z=(_-v)/C,this.w=Math.acos((d+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EM extends zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Pn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Xd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends EM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class j_ extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e,i,s,l,u,h,p,m,d,v,S,_,E,b,w,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,p,m,d,v,S,_,E,b,w,M)}set(e,i,s,l,u,h,p,m,d,v,S,_,E,b,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=S,x[14]=_,x[3]=E,x[7]=b,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/gr.setFromMatrixColumn(e,0).length(),u=1/gr.setFromMatrixColumn(e,1).length(),h=1/gr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const _=h*v,E=h*S,b=p*v,w=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=E+b*d,i[5]=_-w*d,i[9]=-p*m,i[2]=w-_*d,i[6]=b+E*d,i[10]=h*m}else if(e.order==="YXZ"){const _=m*v,E=m*S,b=d*v,w=d*S;i[0]=_+w*p,i[4]=b*p-E,i[8]=h*d,i[1]=h*S,i[5]=h*v,i[9]=-p,i[2]=E*p-b,i[6]=w+_*p,i[10]=h*m}else if(e.order==="ZXY"){const _=m*v,E=m*S,b=d*v,w=d*S;i[0]=_-w*p,i[4]=-h*S,i[8]=b+E*p,i[1]=E+b*p,i[5]=h*v,i[9]=w-_*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const _=h*v,E=h*S,b=p*v,w=p*S;i[0]=m*v,i[4]=b*d-E,i[8]=_*d+w,i[1]=m*S,i[5]=w*d+_,i[9]=E*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const _=h*m,E=h*d,b=p*m,w=p*d;i[0]=m*v,i[4]=w-_*S,i[8]=b*S+E,i[1]=S,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*S+b,i[10]=_-w*S}else if(e.order==="XZY"){const _=h*m,E=h*d,b=p*m,w=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=_*S+w,i[5]=h*v,i[9]=E*S-b,i[2]=b*S-E,i[6]=p*v,i[10]=w*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,AM)}lookAt(e,i,s){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),qa.crossVectors(s,ei),qa.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),qa.crossVectors(s,ei)),qa.normalize(),uu.crossVectors(ei,qa),l[0]=qa.x,l[4]=uu.x,l[8]=ei.x,l[1]=qa.y,l[5]=uu.y,l[9]=ei.y,l[2]=qa.z,l[6]=uu.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],S=s[5],_=s[9],E=s[13],b=s[2],w=s[6],M=s[10],x=s[14],C=s[3],P=s[7],N=s[11],G=s[15],I=l[0],z=l[4],T=l[8],D=l[12],ht=l[1],H=l[5],$=l[9],at=l[13],lt=l[2],J=l[6],L=l[10],B=l[14],ot=l[3],dt=l[7],Et=l[11],O=l[15];return u[0]=h*I+p*ht+m*lt+d*ot,u[4]=h*z+p*H+m*J+d*dt,u[8]=h*T+p*$+m*L+d*Et,u[12]=h*D+p*at+m*B+d*O,u[1]=v*I+S*ht+_*lt+E*ot,u[5]=v*z+S*H+_*J+E*dt,u[9]=v*T+S*$+_*L+E*Et,u[13]=v*D+S*at+_*B+E*O,u[2]=b*I+w*ht+M*lt+x*ot,u[6]=b*z+w*H+M*J+x*dt,u[10]=b*T+w*$+M*L+x*Et,u[14]=b*D+w*at+M*B+x*O,u[3]=C*I+P*ht+N*lt+G*ot,u[7]=C*z+P*H+N*J+G*dt,u[11]=C*T+P*$+N*L+G*Et,u[15]=C*D+P*at+N*B+G*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],S=e[6],_=e[10],E=e[14],b=e[3],w=e[7],M=e[11],x=e[15],C=m*E-d*_,P=p*E-d*S,N=p*_-m*S,G=h*E-d*v,I=h*_-m*v,z=h*S-p*v;return i*(w*C-M*P+x*N)-s*(b*C-M*G+x*I)+l*(b*P-w*G+x*z)-u*(b*N-w*I+M*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=e[9],_=e[10],E=e[11],b=e[12],w=e[13],M=e[14],x=e[15],C=i*p-s*h,P=i*m-l*h,N=i*d-u*h,G=s*m-l*p,I=s*d-u*p,z=l*d-u*m,T=v*w-S*b,D=v*M-_*b,ht=v*x-E*b,H=S*M-_*w,$=S*x-E*w,at=_*x-E*M,lt=C*at-P*$+N*H+G*ht-I*D+z*T;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/lt;return e[0]=(p*at-m*$+d*H)*J,e[1]=(l*$-s*at-u*H)*J,e[2]=(w*z-M*I+x*G)*J,e[3]=(_*I-S*z-E*G)*J,e[4]=(m*ht-h*at-d*D)*J,e[5]=(i*at-l*ht+u*D)*J,e[6]=(M*N-b*z-x*P)*J,e[7]=(v*z-_*N+E*P)*J,e[8]=(h*$-p*ht+d*T)*J,e[9]=(s*ht-i*$-u*T)*J,e[10]=(b*I-w*N+x*C)*J,e[11]=(S*N-v*I-E*C)*J,e[12]=(p*D-h*H-m*T)*J,e[13]=(i*H-s*D+l*T)*J,e[14]=(w*P-b*G-M*C)*J,e[15]=(v*G-S*P+_*C)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,p=e.y,m=e.z,d=u*h,v=u*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,p=i._z,m=i._w,d=u+u,v=h+h,S=p+p,_=u*d,E=u*v,b=u*S,w=h*v,M=h*S,x=p*S,C=m*d,P=m*v,N=m*S,G=s.x,I=s.y,z=s.z;return l[0]=(1-(w+x))*G,l[1]=(E+N)*G,l[2]=(b-P)*G,l[3]=0,l[4]=(E-N)*I,l[5]=(1-(_+x))*I,l[6]=(M+C)*I,l[7]=0,l[8]=(b+P)*z,l[9]=(M-C)*z,l[10]=(1-(_+w))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let h=gr.set(l[0],l[1],l[2]).length();const p=gr.set(l[4],l[5],l[6]).length(),m=gr.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Ti.copy(this);const d=1/h,v=1/p,S=1/m;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=S,Ti.elements[9]*=S,Ti.elements[10]*=S,i.setFromRotationMatrix(Ti),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,u,h,p=Hi,m=!1){const d=this.elements,v=2*u/(i-e),S=2*u/(s-l),_=(i+e)/(i-e),E=(s+l)/(s-l);let b,w;if(m)b=u/(h-u),w=h*u/(h-u);else if(p===Hi)b=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(p===Vu)b=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=S,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,u,h,p=Hi,m=!1){const d=this.elements,v=2/(i-e),S=2/(s-l),_=-(i+e)/(i-e),E=-(s+l)/(s-l);let b,w;if(m)b=1/(h-u),w=h/(h-u);else if(p===Hi)b=-2/(h-u),w=-(h+u)/(h-u);else if(p===Vu)b=-1/(h-u),w=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=S,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const gr=new it,Ti=new nn,TM=new it(0,0,0),AM=new it(1,1,1),qa=new it,uu=new it,ei=new it,W0=new nn,q0=new Br;class xa{constructor(e=0,i=0,s=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return W0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return q0.setFromEuler(this),this.setFromQuaternion(q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class Z_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const Y0=new it,_r=new Br,ca=new nn,cu=new it,Lo=new it,CM=new it,wM=new Br,j0=new it(1,0,0),Z0=new it(0,1,0),K0=new it(0,0,1),Q0={type:"added"},DM={type:"removed"},vr={type:"childadded",child:null},gh={type:"childremoved",child:null};class Wn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new it,i=new xa,s=new Br,l=new it(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new he}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(Z0,e)}rotateZ(e){return this.rotateOnAxis(K0,e)}translateOnAxis(e,i){return Y0.copy(e).applyQuaternion(this.quaternion),this.position.add(Y0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(Z0,e)}translateZ(e){return this.translateOnAxis(K0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?cu.copy(e):cu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Lo,cu,this.up):ca.lookAt(cu,Lo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(ca),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Q0),vr.child=e,this.dispatchEvent(vr),vr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DM),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Q0),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,CM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,wM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),S=h(e.shapes),_=h(e.skeletons),E=h(e.animations),b=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new it(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fu extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UM={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(d,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],_=v.position.distanceTo(S.position),E=.02,b=.005;d.inputState.pinching&&_>E+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=E-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new fu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},hu={h:0,s:0,l:0};function vh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ee{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ae.workingColorSpace){if(e=vM(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=vh(h,u,e+1/3),this.g=vh(h,u,e),this.b=vh(h,u,e-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function s(u){u!==void 0&&parseFloat(u)<1&&ae("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ae("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const s=K_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Ae.workingToColorSpace(Rn.copy(this),e),Math.round(ye(Rn.r*255,0,255))*65536+Math.round(ye(Rn.g*255,0,255))*256+Math.round(ye(Rn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.workingToColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(s,l,u),p=Math.min(s,l,u);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=v<=.5?S/(h+p):S/(2-h-p),h){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=pi){Ae.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,s=Rn.g,l=Rn.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ya),this.setHSL(Ya.h+e,Ya.s+i,Ya.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ya),e.getHSL(hu);const s=fh(Ya.h,hu.h,i),l=fh(Ya.s,hu.s,i),u=fh(Ya.l,hu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ee;Ee.NAMES=K_;class NM extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new it,fa=new it,xh=new it,ha=new it,xr=new it,Sr=new it,J0=new it,Sh=new it,Mh=new it,yh=new it,Eh=new en,bh=new en,Th=new en;class Ci{constructor(e=new it,i=new it,s=new it){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ai.subVectors(e,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ai.subVectors(l,i),fa.subVectors(s,i),xh.subVectors(e,i);const h=Ai.dot(Ai),p=Ai.dot(fa),m=Ai.dot(xh),d=fa.dot(fa),v=fa.dot(xh),S=h*d-p*p;if(S===0)return u.set(0,0,0),null;const _=1/S,E=(d*m-p*v)*_,b=(h*v-p*m)*_;return u.set(1-E-b,b,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,s,l,u,h,p,m){return this.getBarycoord(e,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ha.x),m.addScaledVector(h,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return Eh.setScalar(0),bh.setScalar(0),Th.setScalar(0),Eh.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Eh,u.x),h.addScaledVector(bh,u.y),h.addScaledVector(Th,u.z),h}static isFrontFacing(e,i,s,l){return Ai.subVectors(s,i),fa.subVectors(e,i),Ai.cross(fa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ai.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,p;xr.subVectors(l,s),Sr.subVectors(u,s),Sh.subVectors(e,s);const m=xr.dot(Sh),d=Sr.dot(Sh);if(m<=0&&d<=0)return i.copy(s);Mh.subVectors(e,l);const v=xr.dot(Mh),S=Sr.dot(Mh);if(v>=0&&S<=v)return i.copy(l);const _=m*S-v*d;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(xr,h);yh.subVectors(e,u);const E=xr.dot(yh),b=Sr.dot(yh);if(b>=0&&E<=b)return i.copy(u);const w=E*d-m*b;if(w<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(Sr,p);const M=v*b-E*S;if(M<=0&&S-v>=0&&E-b>=0)return J0.subVectors(u,l),p=(S-v)/(S-v+(E-b)),i.copy(l).addScaledVector(J0,p);const x=1/(M+w+_);return h=w*x,p=_*x,i.copy(s).addScaledVector(xr,h).addScaledVector(Sr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wo{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=u.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ri):Ri.fromBufferAttribute(u,h),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),du.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),du.copy(s.boundingBox)),du.applyMatrix4(e.matrixWorld),this.union(du)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),pu.subVectors(this.max,Oo),Mr.subVectors(e.a,Oo),yr.subVectors(e.b,Oo),Er.subVectors(e.c,Oo),ja.subVectors(yr,Mr),Za.subVectors(Er,yr),Ss.subVectors(Mr,Er);let i=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-Ss.z,Ss.y,ja.z,0,-ja.x,Za.z,0,-Za.x,Ss.z,0,-Ss.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-Ss.y,Ss.x,0];return!Ah(i,Mr,yr,Er,pu)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,Mr,yr,Er,pu))?!1:(mu.crossVectors(ja,Za),i=[mu.x,mu.y,mu.z],Ah(i,Mr,yr,Er,pu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new it,new it,new it,new it,new it,new it,new it,new it],Ri=new it,du=new Wo,Mr=new it,yr=new it,Er=new it,ja=new it,Za=new it,Ss=new it,Oo=new it,pu=new it,mu=new it,Ms=new it;function Ah(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Ms.fromArray(o,u);const p=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=e.dot(Ms),d=i.dot(Ms),v=s.dot(Ms);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const fn=new it,gu=new de;let LM=0;class ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=F0,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gu.fromBufferAttribute(this,i),gu.applyMatrix3(e),this.setXY(i,gu.x,gu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==F0&&(e.usage=this.usage),e}}class Q_ extends ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class J_ extends ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Di extends ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}const OM=new Wo,Po=new it,Rh=new it;class Yu{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):OM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Rh)),this.expandByPoint(Po.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PM=0;const di=new nn,Ch=new Wn,br=new it,ni=new Wo,zo=new Wo,vn=new it;class _i extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pM(e)?J_:Q_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,s){return di.makeTranslation(e,i,s),this.applyMatrix4(di),this}scale(e,i,s){return di.makeScale(e,i,s),this.applyMatrix4(di),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Di(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const p=i[u];zo.setFromBufferAttribute(p),this.morphTargetsRelative?(vn.addVectors(ni.min,zo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,zo.max),ni.expandByPoint(vn)):(ni.expandByPoint(zo.min),ni.expandByPoint(zo.max))}ni.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const p=i[u],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)vn.fromBufferAttribute(p,d),m&&(br.fromBufferAttribute(e,d),vn.add(br)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new it,m[T]=new it;const d=new it,v=new it,S=new it,_=new de,E=new de,b=new de,w=new it,M=new it;function x(T,D,ht){d.fromBufferAttribute(s,T),v.fromBufferAttribute(s,D),S.fromBufferAttribute(s,ht),_.fromBufferAttribute(u,T),E.fromBufferAttribute(u,D),b.fromBufferAttribute(u,ht),v.sub(d),S.sub(d),E.sub(_),b.sub(_);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(S,-E.y).multiplyScalar(H),M.copy(S).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),p[T].add(w),p[D].add(w),p[ht].add(w),m[T].add(M),m[D].add(M),m[ht].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,D=C.length;T<D;++T){const ht=C[T],H=ht.start,$=ht.count;for(let at=H,lt=H+$;at<lt;at+=3)x(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const P=new it,N=new it,G=new it,I=new it;function z(T){G.fromBufferAttribute(l,T),I.copy(G);const D=p[T];P.copy(D),P.sub(G.multiplyScalar(G.dot(D))).normalize(),N.crossVectors(I,D);const H=N.dot(m[T])<0?-1:1;h.setXYZW(T,P.x,P.y,P.z,H)}for(let T=0,D=C.length;T<D;++T){const ht=C[T],H=ht.start,$=ht.count;for(let at=H,lt=H+$;at<lt;at+=3)z(e.getX(at+0)),z(e.getX(at+1)),z(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new it,u=new it,h=new it,p=new it,m=new it,d=new it,v=new it,S=new it;if(e)for(let _=0,E=e.count;_<E;_+=3){const b=e.getX(_+0),w=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,M),p.add(v),m.add(v),d.add(v),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,S=p.normalized,_=new d.constructor(m.length*v);let E=0,b=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?E=m[w]*p.data.stride+p.offset:E=m[w]*v;for(let x=0;x<v;x++)_[b++]=d[E++]}return new ai(_,v,S)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _i,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const u=this.morphAttributes;for(const p in u){const m=[],d=u[p];for(let v=0,S=d.length;v<S;v++){const _=d[v],E=e(_,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,_=d.length;S<_;S++){const E=d[S];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const u=e.morphAttributes;for(const d in u){const v=[],S=u[d];for(let _=0,E=S.length;_<E;_++)v.push(S[_].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zM=0;class qo extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Cr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Hh&&(s.blendSrc=this.blendSrc),this.blendDst!==Gh&&(s.blendDst=this.blendDst),this.blendEquation!==Rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const p in u){const m=u[p];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pa=new it,wh=new it,_u=new it,Ka=new it,Dh=new it,vu=new it,Uh=new it;class $_{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){wh.copy(e).add(i).multiplyScalar(.5),_u.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(wh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(_u),p=Ka.dot(this.direction),m=-Ka.dot(_u),d=Ka.lengthSq(),v=Math.abs(1-h*h);let S,_,E,b;if(v>0)if(S=h*m-p,_=h*p-m,b=u*v,S>=0)if(_>=-b)if(_<=b){const w=1/v;S*=w,_*=w,E=S*(S+h*_+2*p)+_*(h*S+_+2*m)+d}else _=u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;else _=-u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;else _<=-b?(S=Math.max(0,-(-h*u+p)),_=S>0?-u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+d):_<=b?(S=0,_=Math.min(Math.max(-u,-m),u),E=_*(_+2*m)+d):(S=Math.max(0,-(h*u+p)),_=S>0?u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+d);else _=h>0?-u:u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(wh).addScaledVector(_u,_),E}intersectSphere(e,i){pa.subVectors(e.center,this.origin);const s=pa.dot(this.direction),l=pa.dot(pa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,_=this.origin;return d>=0?(s=(e.min.x-_.x)*d,l=(e.max.x-_.x)*d):(s=(e.max.x-_.x)*d,l=(e.min.x-_.x)*d),v>=0?(u=(e.min.y-_.y)*v,h=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,h=(e.min.y-_.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),S>=0?(p=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(p=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,i,s,l,u){Dh.subVectors(i,e),vu.subVectors(s,e),Uh.crossVectors(Dh,vu);let h=this.direction.dot(Uh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Ka.subVectors(this.origin,e);const m=p*this.direction.dot(vu.crossVectors(Ka,vu));if(m<0)return null;const d=p*this.direction.dot(Dh.cross(Ka));if(d<0||m+d>h)return null;const v=-p*Ka.dot(Uh);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kd extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=U_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $0=new nn,ys=new $_,xu=new Yu,t_=new it,Su=new it,Mu=new it,yu=new it,Nh=new it,Eu=new it,e_=new it,bu=new it;class ki extends Wn{constructor(e=new _i,i=new kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Eu.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const v=p[m],S=u[m];v!==0&&(Nh.fromBufferAttribute(S,e),h?Eu.addScaledVector(Nh,v):Eu.addScaledVector(Nh.sub(i),v))}i.add(Eu)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xu.copy(s.boundingSphere),xu.applyMatrix4(u),ys.copy(e.ray).recast(e.near),!(xu.containsPoint(ys.origin)===!1&&(ys.intersectSphere(xu,t_)===null||ys.origin.distanceToSquared(t_)>(e.far-e.near)**2))&&($0.copy(u).invert(),ys.copy(e.ray).applyMatrix4($0),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ys)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,p=u.index,m=u.attributes.position,d=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,_=u.groups,E=u.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,w=_.length;b<w;b++){const M=_[b],x=h[M.materialIndex],C=Math.max(M.start,E.start),P=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let N=C,G=P;N<G;N+=3){const I=p.getX(N),z=p.getX(N+1),T=p.getX(N+2);l=Tu(this,x,e,s,d,v,S,I,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let M=b,x=w;M<x;M+=3){const C=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=Tu(this,h,e,s,d,v,S,C,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=_.length;b<w;b++){const M=_[b],x=h[M.materialIndex],C=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=C,G=P;N<G;N+=3){const I=N,z=N+1,T=N+2;l=Tu(this,x,e,s,d,v,S,I,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let M=b,x=w;M<x;M+=3){const C=M,P=M+1,N=M+2;l=Tu(this,h,e,s,d,v,S,C,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function BM(o,e,i,s,l,u,h,p){let m;if(e.side===Xn?m=s.intersectTriangle(h,u,l,!0,p):m=s.intersectTriangle(l,u,h,e.side===es,p),m===null)return null;bu.copy(p),bu.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(bu);return d<i.near||d>i.far?null:{distance:d,point:bu.clone(),object:o}}function Tu(o,e,i,s,l,u,h,p,m,d){o.getVertexPosition(p,Su),o.getVertexPosition(m,Mu),o.getVertexPosition(d,yu);const v=BM(o,e,i,s,Su,Mu,yu,e_);if(v){const S=new it;Ci.getBarycoord(e_,Su,Mu,yu,S),l&&(v.uv=Ci.getInterpolatedAttribute(l,p,m,d,S,new de)),u&&(v.uv1=Ci.getInterpolatedAttribute(u,p,m,d,S,new de)),h&&(v.normal=Ci.getInterpolatedAttribute(h,p,m,d,S,new it),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new it,materialIndex:0};Ci.getNormal(Su,Mu,yu,_.normal),v.face=_,v.barycoord=S}return v}class FM extends Pn{constructor(e=null,i=1,s=1,l,u,h,p,m,d=En,v=En,S,_){super(null,h,p,m,d,v,l,u,S,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lh=new it,IM=new it,HM=new he;class As{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Lh.subVectors(s,i).cross(IM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Lh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||HM.getNormalMatrix(e),l=this.coplanarPoint(Lh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Yu,GM=new de(.5,.5),Au=new it;class tv{constructor(e=new As,i=new As,s=new As,l=new As,u=new As,h=new As){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,u=e.elements,h=u[0],p=u[1],m=u[2],d=u[3],v=u[4],S=u[5],_=u[6],E=u[7],b=u[8],w=u[9],M=u[10],x=u[11],C=u[12],P=u[13],N=u[14],G=u[15];if(l[0].setComponents(d-h,E-v,x-b,G-C).normalize(),l[1].setComponents(d+h,E+v,x+b,G+C).normalize(),l[2].setComponents(d+p,E+S,x+w,G+P).normalize(),l[3].setComponents(d-p,E-S,x-w,G-P).normalize(),s)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(d-m,E-_,x-M,G-N).normalize();else if(l[4].setComponents(d-m,E-_,x-M,G-N).normalize(),i===Hi)l[5].setComponents(d+m,E+_,x+M,G+N).normalize();else if(i===Vu)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const i=GM.distanceTo(e.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Au.x=l.normal.x>0?e.max.x:e.min.x,Au.y=l.normal.y>0?e.max.y:e.min.y,Au.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Au)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class VM extends qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const n_=new nn,Dd=new $_,Ru=new Yu,Cu=new it;class XM extends Wn{constructor(e=new _i,i=new VM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ru.copy(s.boundingSphere),Ru.applyMatrix4(l),Ru.radius+=u,e.ray.intersectsSphere(Ru)===!1)return;n_.copy(l).invert(),Dd.copy(e.ray).applyMatrix4(n_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,S=s.attributes.position;if(d!==null){const _=Math.max(0,h.start),E=Math.min(d.count,h.start+h.count);for(let b=_,w=E;b<w;b++){const M=d.getX(b);Cu.fromBufferAttribute(S,M),i_(Cu,M,m,l,e,i,this)}}else{const _=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let b=_,w=E;b<w;b++)Cu.fromBufferAttribute(S,b),i_(Cu,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function i_(o,e,i,s,l,u,h){const p=Dd.distanceSqToPoint(o);if(p<i){const m=new it;Dd.closestPointToPoint(o,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;u.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class ev extends Pn{constructor(e=[],i=Us,s,l,u,h,p,m,d,v){super(e,i,s,l,u,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xo extends Pn{constructor(e,i,s=Xi,l,u,h,p=En,m=En,d,v=va,S=1){if(v!==va&&v!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:S};super(_,l,u,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kM extends Xo{constructor(e,i=Xi,s=Us,l,u,h=En,p=En,m,d=va){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,s,l,u,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yo extends _i{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const p=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],d=[],v=[],S=[];let _=0,E=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Di(d,3)),this.setAttribute("normal",new Di(v,3)),this.setAttribute("uv",new Di(S,2));function b(w,M,x,C,P,N,G,I,z,T,D){const ht=N/z,H=G/T,$=N/2,at=G/2,lt=I/2,J=z+1,L=T+1;let B=0,ot=0;const dt=new it;for(let Et=0;Et<L;Et++){const O=Et*H-at;for(let Y=0;Y<J;Y++){const _t=Y*ht-$;dt[w]=_t*C,dt[M]=O*P,dt[x]=lt,d.push(dt.x,dt.y,dt.z),dt[w]=0,dt[M]=0,dt[x]=I>0?1:-1,v.push(dt.x,dt.y,dt.z),S.push(Y/z),S.push(1-Et/T),B+=1}}for(let Et=0;Et<T;Et++)for(let O=0;O<z;O++){const Y=_+O+J*Et,_t=_+O+J*(Et+1),At=_+(O+1)+J*(Et+1),zt=_+(O+1)+J*Et;m.push(Y,_t,zt),m.push(_t,At,zt),ot+=6}p.addGroup(E,ot,D),E+=ot,_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ju extends _i{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,S=e/p,_=i/m,E=[],b=[],w=[],M=[];for(let x=0;x<v;x++){const C=x*_-h;for(let P=0;P<d;P++){const N=P*S-u;b.push(N,-C,0),w.push(0,0,1),M.push(P/p),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let C=0;C<p;C++){const P=C+d*x,N=C+d*(x+1),G=C+1+d*(x+1),I=C+1+d*x;E.push(P,N,I),E.push(N,G,I)}this.setIndex(E),this.setAttribute("position",new Di(b,3)),this.setAttribute("normal",new Di(w,3)),this.setAttribute("uv",new Di(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}function Or(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Or(o[i]);for(const l in s)e[l]=s[l]}return e}function WM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function iv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const Wu={clone:Or,merge:On};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=WM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class jM extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ZM extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KM extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wu=new it,Du=new Br,zi=new it;class av extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wu,Du,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Du,zi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(wu,Du,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Du,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new it,a_=new de,s_=new de;class mi extends av{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=wd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ch*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,a_,s_),i.subVectors(s_,a_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ch*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Wd extends av{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,h=u+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Tr=-90,Ar=1;class QM extends Wn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Tr,Ar,e,i);l.layers=this.layers,this.add(l);const u=new mi(Tr,Ar,e,i);u.layers=this.layers,this.add(u);const h=new mi(Tr,Ar,e,i);h.layers=this.layers,this.add(h);const p=new mi(Tr,Ar,e,i);p.layers=this.layers,this.add(p);const m=new mi(Tr,Ar,e,i);m.layers=this.layers,this.add(m);const d=new mi(Tr,Ar,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,p,m]=i;for(const d of i)this.remove(d);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,p,m,d,v]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,_,E),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class JM extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $M{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ty.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ty(){this._document.hidden===!1&&this.reset()}class ey{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ae("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function r_(o,e,i,s){const l=ny(s);switch(i){case k_:return o*e;case q_:return o*e/l.components*l.byteLength;case Fd:return o*e/l.components*l.byteLength;case Nr:return o*e*2/l.components*l.byteLength;case Id:return o*e*2/l.components*l.byteLength;case W_:return o*e*3/l.components*l.byteLength;case wi:return o*e*4/l.components*l.byteLength;case Hd:return o*e*4/l.components*l.byteLength;case Ou:case Pu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zu:case Bu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Jh:case td:return Math.max(o,16)*Math.max(e,8)/4;case Qh:case $h:return Math.max(o,8)*Math.max(e,8)/2;case ed:case nd:case ad:case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case id:case rd:case od:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yd:case Ed:case bd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Td:case Ad:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Rd:case Cd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ny(o){switch(o){case gi:case H_:return{byteLength:1,components:1};case Go:case G_:case ii:return{byteLength:2,components:1};case zd:case Bd:return{byteLength:2,components:4};case Xi:case Pd:case Ii:return{byteLength:4,components:1};case V_:case X_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);function sv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function iy(o){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const v=m.array,S=m.updateRanges;if(o.bindBuffer(d,p),S.length===0)o.bufferSubData(d,0,v);else{S.sort((E,b)=>E.start-b.start);let _=0;for(let E=1;E<S.length;E++){const b=S[_],w=S[E];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,S[_]=w)}S.length=_+1;for(let E=0,b=S.length;E<b;E++){const w=S[E];o.bufferSubData(d,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:u,update:h}}var ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sy=`#ifdef USE_ALPHAHASH
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
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
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
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hy=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,my=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_y=`#ifdef USE_IRIDESCENCE
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
#endif`,vy=`#ifdef USE_BUMPMAP
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ry=`#define PI 3.141592653589793
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
} // validated`,Cy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wy=`#ifdef USE_GRADIENTMAP
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
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zy=`uniform bool receiveShadow;
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
#endif`,Ky=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,nE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dE=`#if defined( USE_POINTS_UV )
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
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
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
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
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
}`,cb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fb=`#define DISTANCE
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
}`,hb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`uniform float scale;
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,vb=`uniform vec3 diffuse;
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
}`,xb=`#define LAMBERT
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
}`,Sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Mb=`#define MATCAP
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
}`,yb=`#define MATCAP
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
}`,Eb=`#define NORMAL
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
}`,bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tb=`#define PHONG
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
}`,Ab=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Rb=`#define STANDARD
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
}`,Cb=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,wb=`#define TOON
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
}`,Db=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ub=`uniform float size;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Ob=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Pb=`uniform float rotation;
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
}`,zb=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:ay,alphahash_pars_fragment:sy,alphamap_fragment:ry,alphamap_pars_fragment:oy,alphatest_fragment:ly,alphatest_pars_fragment:uy,aomap_fragment:cy,aomap_pars_fragment:fy,batching_pars_vertex:hy,batching_vertex:dy,begin_vertex:py,beginnormal_vertex:my,bsdfs:gy,iridescence_fragment:_y,bumpmap_pars_fragment:vy,clipping_planes_fragment:xy,clipping_planes_pars_fragment:Sy,clipping_planes_pars_vertex:My,clipping_planes_vertex:yy,color_fragment:Ey,color_pars_fragment:by,color_pars_vertex:Ty,color_vertex:Ay,common:Ry,cube_uv_reflection_fragment:Cy,defaultnormal_vertex:wy,displacementmap_pars_vertex:Dy,displacementmap_vertex:Uy,emissivemap_fragment:Ny,emissivemap_pars_fragment:Ly,colorspace_fragment:Oy,colorspace_pars_fragment:Py,envmap_fragment:zy,envmap_common_pars_fragment:By,envmap_pars_fragment:Fy,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Ky,envmap_vertex:Hy,fog_vertex:Gy,fog_pars_vertex:Vy,fog_fragment:Xy,fog_pars_fragment:ky,gradientmap_pars_fragment:Wy,lightmap_pars_fragment:qy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:jy,lights_pars_begin:Zy,lights_toon_fragment:Qy,lights_toon_pars_fragment:Jy,lights_phong_fragment:$y,lights_phong_pars_fragment:tE,lights_physical_fragment:eE,lights_physical_pars_fragment:nE,lights_fragment_begin:iE,lights_fragment_maps:aE,lights_fragment_end:sE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:uE,map_fragment:cE,map_pars_fragment:fE,map_particle_fragment:hE,map_particle_pars_fragment:dE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:_E,morphnormal_vertex:vE,morphtarget_pars_vertex:xE,morphtarget_vertex:SE,normal_fragment_begin:ME,normal_fragment_maps:yE,normal_pars_fragment:EE,normal_pars_vertex:bE,normal_vertex:TE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:CE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:DE,opaque_fragment:UE,packing:NE,premultiplied_alpha_fragment:LE,project_vertex:OE,dithering_fragment:PE,dithering_pars_fragment:zE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:FE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:VE,skinbase_vertex:XE,skinning_pars_vertex:kE,skinning_vertex:WE,skinnormal_vertex:qE,specularmap_fragment:YE,specularmap_pars_fragment:jE,tonemapping_fragment:ZE,tonemapping_pars_fragment:KE,transmission_fragment:QE,transmission_pars_fragment:JE,uv_pars_fragment:$E,uv_pars_vertex:tb,uv_vertex:eb,worldpos_vertex:nb,background_vert:ib,background_frag:ab,backgroundCube_vert:sb,backgroundCube_frag:rb,cube_vert:ob,cube_frag:lb,depth_vert:ub,depth_frag:cb,distance_vert:fb,distance_frag:hb,equirect_vert:db,equirect_frag:pb,linedashed_vert:mb,linedashed_frag:gb,meshbasic_vert:_b,meshbasic_frag:vb,meshlambert_vert:xb,meshlambert_frag:Sb,meshmatcap_vert:Mb,meshmatcap_frag:yb,meshnormal_vert:Eb,meshnormal_frag:bb,meshphong_vert:Tb,meshphong_frag:Ab,meshphysical_vert:Rb,meshphysical_frag:Cb,meshtoon_vert:wb,meshtoon_frag:Db,points_vert:Ub,points_frag:Nb,shadow_vert:Lb,shadow_frag:Ob,sprite_vert:Pb,sprite_frag:zb},Ut={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Fi={basic:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:On([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:On([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ee(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:On([Ut.points,Ut.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:On([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:On([Ut.common,Ut.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:On([Ut.sprite,Ut.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:On([Ut.common,Ut.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:On([Ut.lights,Ut.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Fi.physical={uniforms:On([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Uu={r:0,b:0,g:0},bs=new xa,Bb=new nn;function Fb(o,e,i,s,l,u){const h=new Ee(0);let p=l===!0?0:1,m,d,v=null,S=0,_=null;function E(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const N=C.backgroundBlurriness>0;P=e.get(P,N)}return P}function b(C){let P=!1;const N=E(C);N===null?M(h,p):N&&N.isColor&&(M(N,1),P=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(C,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===qu)?(d===void 0&&(d=new ki(new Yo(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Or(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),bs.copy(P.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(bs)),d.material.toneMapped=Ae.getTransfer(N.colorSpace)!==Fe,(v!==N||S!==N.version||_!==o.toneMapping)&&(d.material.needsUpdate=!0,v=N,S=N.version,_=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new ki(new ju(2,2),new bn({name:"BackgroundMaterial",uniforms:Or(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,v=N,S=N.version,_=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,P){C.getRGB(Uu,iv(o)),i.buffers.color.setClear(Uu.r,Uu.g,Uu.b,P,u)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,P=1){h.set(C),p=P,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(h,p)},render:b,addToRenderList:w,dispose:x}}function Ib(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,h=!1;function p(H,$,at,lt,J){let L=!1;const B=S(H,lt,at,$);u!==B&&(u=B,d(u.object)),L=E(H,lt,at,J),L&&b(H,lt,at,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,N(H,$,at,lt),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function S(H,$,at,lt){const J=lt.wireframe===!0;let L=s[$.id];L===void 0&&(L={},s[$.id]=L);const B=H.isInstancedMesh===!0?H.id:0;let ot=L[B];ot===void 0&&(ot={},L[B]=ot);let dt=ot[at.id];dt===void 0&&(dt={},ot[at.id]=dt);let Et=dt[J];return Et===void 0&&(Et=_(m()),dt[J]=Et),Et}function _(H){const $=[],at=[],lt=[];for(let J=0;J<i;J++)$[J]=0,at[J]=0,lt[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:at,attributeDivisors:lt,object:H,attributes:{},index:null}}function E(H,$,at,lt){const J=u.attributes,L=$.attributes;let B=0;const ot=at.getAttributes();for(const dt in ot)if(ot[dt].location>=0){const O=J[dt];let Y=L[dt];if(Y===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;B++}return u.attributesNum!==B||u.index!==lt}function b(H,$,at,lt){const J={},L=$.attributes;let B=0;const ot=at.getAttributes();for(const dt in ot)if(ot[dt].location>=0){let O=L[dt];O===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),J[dt]=Y,B++}u.attributes=J,u.attributesNum=B,u.index=lt}function w(){const H=u.newAttributes;for(let $=0,at=H.length;$<at;$++)H[$]=0}function M(H){x(H,0)}function x(H,$){const at=u.newAttributes,lt=u.enabledAttributes,J=u.attributeDivisors;at[H]=1,lt[H]===0&&(o.enableVertexAttribArray(H),lt[H]=1),J[H]!==$&&(o.vertexAttribDivisor(H,$),J[H]=$)}function C(){const H=u.newAttributes,$=u.enabledAttributes;for(let at=0,lt=$.length;at<lt;at++)$[at]!==H[at]&&(o.disableVertexAttribArray(at),$[at]=0)}function P(H,$,at,lt,J,L,B){B===!0?o.vertexAttribIPointer(H,$,at,J,L):o.vertexAttribPointer(H,$,at,lt,J,L)}function N(H,$,at,lt){w();const J=lt.attributes,L=at.getAttributes(),B=$.defaultAttributeValues;for(const ot in L){const dt=L[ot];if(dt.location>=0){let Et=J[ot];if(Et===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const O=Et.normalized,Y=Et.itemSize,_t=e.get(Et);if(_t===void 0)continue;const At=_t.buffer,zt=_t.type,et=_t.bytesPerElement,vt=zt===o.INT||zt===o.UNSIGNED_INT||Et.gpuType===Pd;if(Et.isInterleavedBufferAttribute){const bt=Et.data,Vt=bt.stride,Kt=Et.offset;if(bt.isInstancedInterleavedBuffer){for(let $t=0;$t<dt.locationSize;$t++)x(dt.location+$t,bt.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let $t=0;$t<dt.locationSize;$t++)M(dt.location+$t);o.bindBuffer(o.ARRAY_BUFFER,At);for(let $t=0;$t<dt.locationSize;$t++)P(dt.location+$t,Y/dt.locationSize,zt,O,Vt*et,(Kt+Y/dt.locationSize*$t)*et,vt)}else{if(Et.isInstancedBufferAttribute){for(let bt=0;bt<dt.locationSize;bt++)x(dt.location+bt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let bt=0;bt<dt.locationSize;bt++)M(dt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let bt=0;bt<dt.locationSize;bt++)P(dt.location+bt,Y/dt.locationSize,zt,O,Y*et,Y/dt.locationSize*bt*et,vt)}}else if(B!==void 0){const O=B[ot];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(dt.location,O);break;case 3:o.vertexAttrib3fv(dt.location,O);break;case 4:o.vertexAttrib4fv(dt.location,O);break;default:o.vertexAttrib1fv(dt.location,O)}}}}C()}function G(){D();for(const H in s){const $=s[H];for(const at in $){const lt=$[at];for(const J in lt){const L=lt[J];for(const B in L)v(L[B].object),delete L[B];delete lt[J]}}delete s[H]}}function I(H){if(s[H.id]===void 0)return;const $=s[H.id];for(const at in $){const lt=$[at];for(const J in lt){const L=lt[J];for(const B in L)v(L[B].object),delete L[B];delete lt[J]}}delete s[H.id]}function z(H){for(const $ in s){const at=s[$];for(const lt in at){const J=at[lt];if(J[H.id]===void 0)continue;const L=J[H.id];for(const B in L)v(L[B].object),delete L[B];delete J[H.id]}}}function T(H){for(const $ in s){const at=s[$],lt=H.isInstancedMesh===!0?H.id:0,J=at[lt];if(J!==void 0){for(const L in J){const B=J[L];for(const ot in B)v(B[ot].object),delete B[ot];delete J[L]}delete at[lt],Object.keys(at).length===0&&delete s[$]}}}function D(){ht(),h=!0,u!==l&&(u=l,d(u.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:ht,dispose:G,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function Hb(o,e,i){let s;function l(d){s=d}function u(d,v){o.drawArrays(s,d,v),i.update(v,s,1)}function h(d,v,S){S!==0&&(o.drawArraysInstanced(s,d,v,S),i.update(v,s,S))}function p(d,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,v,0,S);let E=0;for(let b=0;b<S;b++)E+=v[b];i.update(E,s,1)}function m(d,v,S,_){if(S===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<d.length;b++)h(d[b],v[b],_[b]);else{E.multiDrawArraysInstancedWEBGL(s,d,0,v,0,_,0,S);let b=0;for(let w=0;w<S;w++)b+=v[w]*_[w];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Gb(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==wi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==gi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ii&&!T)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(ae("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:N,maxSamples:G,samples:I}}function Vb(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new As,p=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const E=S.length!==0||_||s!==0||l;return l=_,s=S.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,_){i=v(S,_,0)},this.setState=function(S,_,E){const b=S.clippingPlanes,w=S.clipIntersection,M=S.clipShadows,x=o.get(S);if(!l||b===null||b.length===0||u&&!M)u?v(null):d();else{const C=u?0:s,P=C*4;let N=x.clippingState||null;m.value=N,N=v(b,_,P,E);for(let G=0;G!==P;++G)N[G]=i[G];x.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,_,E,b){const w=S!==null?S.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const x=E+w*4,C=_.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,N=E;P!==w;++P,N+=4)h.copy(S[P]).applyMatrix4(C,p),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const $a=4,o_=[.125,.215,.35,.446,.526,.582],Cs=20,Xb=256,Bo=new Wd,l_=new Ee;let Oh=null,Ph=0,zh=0,Bh=!1;const kb=new it;class u_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:p=kb}=u;Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Ph,zh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ii,format:wi,colorSpace:Lr,depthBuffer:!1},l=c_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wb(u)),this._blurMaterial=Yb(u,e,i),this._ggxMaterial=qb(u,e,i)}return l}_compileMaterial(e){const i=new ki(new _i,e);this._renderer.compile(i,Bo)}_sceneToCubeUV(e,i,s,l,u){const m=new mi(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,E=S.toneMapping;S.getClearColor(l_),S.toneMapping=Vi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new Yo,new kd({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const C=e.background;C?C.isColor&&(M.color.copy(C),e.background=null,x=!0):(M.color.copy(l_),x=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,d[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):N===1?(m.up.set(0,0,d[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,d[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const G=this._cubeSize;Rr(l,N*G,P>2?G:0,G,G),S.setRenderTarget(l),x&&S.render(w,m),S.render(e,m)}S.toneMapping=E,S.autoClear=_,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Us||e.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=h_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;Rr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Bo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),_=0+d*1.25,E=S*_,{_lodMax:b}=this,w=this._sizeLods[s],M=3*w*(s>b-$a?s-b+$a:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=b-i,Rr(u,M,x,3*w,2*w),l.setRenderTarget(u),l.render(p,Bo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Rr(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(p,Bo)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const _=d.uniforms,E=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Cs-1),w=u/b,M=isFinite(u)?1+Math.floor(v*w):Cs;M>Cs&&ae(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cs}`);const x=[];let C=0;for(let z=0;z<Cs;++z){const T=z/w,D=Math.exp(-T*T/2);x.push(D),z===0?C+=D:z<M&&(C+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/C;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=h==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=b,_.mipInt.value=P-s;const N=this._sizeLods[l],G=3*N*(l>P-$a?l-P+$a:0),I=4*(this._cubeSize-N);Rr(i,G,I,3*N,2*N),m.setRenderTarget(i),m.render(S,Bo)}}function Wb(o){const e=[],i=[],s=[];let l=o;const u=o-$a+1+o_.length;for(let h=0;h<u;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-$a?m=o_[h-o+$a-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,_=[v,v,S,v,S,S,v,v,S,S,v,S],E=6,b=6,w=3,M=2,x=1,C=new Float32Array(w*b*E),P=new Float32Array(M*b*E),N=new Float32Array(x*b*E);for(let I=0;I<E;I++){const z=I%3*2/3-1,T=I>2?0:-1,D=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(D,w*b*I),P.set(_,M*b*I);const ht=[I,I,I,I,I,I];N.set(ht,x*b*I)}const G=new _i;G.setAttribute("position",new ai(C,w)),G.setAttribute("uv",new ai(P,M)),G.setAttribute("faceIndex",new ai(N,x)),s.push(new ki(G,null)),l>$a&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function c_(o,e,i){const s=new kn(o,e,i);return s.texture.mapping=qu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function qb(o,e,i){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Yb(o,e,i){const s=new Float32Array(Cs),l=new it(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function f_(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function h_(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Zu(){return`

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
	`}class rv extends kn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yo(5,5,5),u=new bn({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Gi});u.uniforms.tEquirect.value=i;const h=new ki(l,u),p=i.minFilter;return i.minFilter===ws&&(i.minFilter=Cn),new QM(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}function jb(o){let e=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?h(_):u(_)}function u(_){if(_&&_.isTexture){const E=_.mapping;if(E===oh||E===lh)if(e.has(_)){const b=e.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new rv(b.height);return w.fromEquirectangularTexture(o,_),e.set(_,w),_.addEventListener("dispose",d),p(w.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const E=_.mapping,b=E===oh||E===lh,w=E===Us||E===Ur;if(b||w){let M=i.get(_);const x=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return s===null&&(s=new u_(o)),M=b?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const C=_.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new u_(o)),M=b?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",v),M.texture):null}}}return _}function p(_,E){return E===oh?_.mapping=Us:E===lh&&(_.mapping=Ur),_}function m(_){let E=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&E++;return E===b}function d(_){const E=_.target;E.removeEventListener("dispose",d);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function v(_){const E=_.target;E.removeEventListener("dispose",v);const b=i.get(E);b!==void 0&&(i.delete(E),b.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function Zb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ku("WebGLRenderer: "+s+" extension not supported."),l}}}function Kb(o,e,i,s){const l={},u=new WeakMap;function h(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",h),delete l[_.id];const E=u.get(_);E&&(e.remove(E),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(S,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function d(S){const _=[],E=S.index,b=S.attributes.position;let w=0;if(b===void 0)return;if(E!==null){const C=E.array;w=E.version;for(let P=0,N=C.length;P<N;P+=3){const G=C[P+0],I=C[P+1],z=C[P+2];_.push(G,I,I,z,z,G)}}else{const C=b.array;w=b.version;for(let P=0,N=C.length/3-1;P<N;P+=3){const G=P+0,I=P+1,z=P+2;_.push(G,I,I,z,z,G)}}const M=new(b.count>=65535?J_:Q_)(_,1);M.version=w;const x=u.get(S);x&&e.remove(x),u.set(S,M)}function v(S){const _=u.get(S);if(_){const E=S.index;E!==null&&_.version<E.version&&d(S)}else d(S);return u.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function Qb(o,e,i){let s;function l(_){s=_}let u,h;function p(_){u=_.type,h=_.bytesPerElement}function m(_,E){o.drawElements(s,E,u,_*h),i.update(E,s,1)}function d(_,E,b){b!==0&&(o.drawElementsInstanced(s,E,u,_*h,b),i.update(E,s,b))}function v(_,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,_,0,b);let M=0;for(let x=0;x<b;x++)M+=E[x];i.update(M,s,1)}function S(_,E,b,w){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)d(_[x]/h,E[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,u,_,0,w,0,b);let x=0;for(let C=0;C<b;C++)x+=E[C]*w[C];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function Jb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:De("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function $b(o,e,i){const s=new WeakMap,l=new en;function u(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let _=s.get(p);if(_===void 0||_.count!==S){let ht=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ht)};var E=ht;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),w===!0&&(N=2),M===!0&&(N=3);let G=p.attributes.position.count*N,I=1;G>e.maxTextureSize&&(I=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*I*4*S),T=new j_(z,G,I,S);T.type=Ii,T.needsUpdate=!0;const D=N*4;for(let H=0;H<S;H++){const $=x[H],at=C[H],lt=P[H],J=G*I*4*H;for(let L=0;L<$.count;L++){const B=L*D;b===!0&&(l.fromBufferAttribute($,L),z[J+B+0]=l.x,z[J+B+1]=l.y,z[J+B+2]=l.z,z[J+B+3]=0),w===!0&&(l.fromBufferAttribute(at,L),z[J+B+4]=l.x,z[J+B+5]=l.y,z[J+B+6]=l.z,z[J+B+7]=0),M===!0&&(l.fromBufferAttribute(lt,L),z[J+B+8]=l.x,z[J+B+9]=l.y,z[J+B+10]=l.z,z[J+B+11]=lt.itemSize===4?l.w:1)}}_={count:S,texture:T,size:new de(G,I)},s.set(p,_),p.addEventListener("dispose",ht)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function tT(o,e,i,s,l){let u=new WeakMap;function h(d){const v=l.render.frame,S=d.geometry,_=e.get(d,S);if(u.get(_)!==v&&(e.update(_),u.set(_,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),u.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),u.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;u.get(E)!==v&&(E.update(),u.set(E,v))}return _}function p(){u=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const eT={[N_]:"LINEAR_TONE_MAPPING",[L_]:"REINHARD_TONE_MAPPING",[O_]:"CINEON_TONE_MAPPING",[P_]:"ACES_FILMIC_TONE_MAPPING",[B_]:"AGX_TONE_MAPPING",[F_]:"NEUTRAL_TONE_MAPPING",[z_]:"CUSTOM_TONE_MAPPING"};function nT(o,e,i,s,l){const u=new kn(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new kn(e,i,{type:ii,depthBuffer:!1,stencilBuffer:!1}),p=new _i;p.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Di([0,2,0,0,2,0],2));const m=new jM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ki(p,m),v=new Wd(-1,1,1,-1,0,1);let S=null,_=null,E=!1,b,w=null,M=[],x=!1;this.setSize=function(C,P){u.setSize(C,P),h.setSize(C,P);for(let N=0;N<M.length;N++){const G=M[N];G.setSize&&G.setSize(C,P)}},this.setEffects=function(C){M=C,x=M.length>0&&M[0].isRenderPass===!0;const P=u.width,N=u.height;for(let G=0;G<M.length;G++){const I=M[G];I.setSize&&I.setSize(P,N)}},this.begin=function(C,P){if(E||C.toneMapping===Vi&&M.length===0)return!1;if(w=P,P!==null){const N=P.width,G=P.height;(u.width!==N||u.height!==G)&&this.setSize(N,G)}return x===!1&&C.setRenderTarget(u),b=C.toneMapping,C.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(C,P){C.toneMapping=b,E=!0;let N=u,G=h;for(let I=0;I<M.length;I++){const z=M[I];if(z.enabled!==!1&&(z.render(C,G,N,P),z.needsSwap!==!1)){const T=N;N=G,G=T}}if(S!==C.outputColorSpace||_!==C.toneMapping){S=C.outputColorSpace,_=C.toneMapping,m.defines={},Ae.getTransfer(S)===Fe&&(m.defines.SRGB_TRANSFER="");const I=eT[_];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(w),C.render(d,v),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),p.dispose(),m.dispose()}}const ov=new Pn,Ud=new Xo(1,1),lv=new j_,uv=new bM,cv=new ev,d_=[],p_=[],m_=new Float32Array(16),g_=new Float32Array(9),__=new Float32Array(4);function Fr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=d_[l];if(u===void 0&&(u=new Float32Array(l),d_[l]=u),e!==0){s.toArray(u,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(u,p)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Ku(o,e){let i=p_[e];i===void 0&&(i=new Int32Array(e),p_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function iT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function oT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;__.set(s),o.uniformMatrix2fv(this.addr,!1,__),gn(i,s)}}function lT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;g_.set(s),o.uniformMatrix3fv(this.addr,!1,g_),gn(i,s)}}function uT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;m_.set(s),o.uniformMatrix4fv(this.addr,!1,m_),gn(i,s)}}function cT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function pT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function vT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ud.compareFunction=i.isReversedDepthBuffer()?Vd:Gd,u=Ud):u=ov,i.setTexture2D(e||u,l)}function xT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||uv,l)}function ST(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||cv,l)}function MT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||lv,l)}function yT(o){switch(o){case 5126:return iT;case 35664:return aT;case 35665:return sT;case 35666:return rT;case 35674:return oT;case 35675:return lT;case 35676:return uT;case 5124:case 35670:return cT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function ET(o,e){o.uniform1fv(this.addr,e)}function bT(o,e){const i=Fr(e,this.size,2);o.uniform2fv(this.addr,i)}function TT(o,e){const i=Fr(e,this.size,3);o.uniform3fv(this.addr,i)}function AT(o,e){const i=Fr(e,this.size,4);o.uniform4fv(this.addr,i)}function RT(o,e){const i=Fr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function CT(o,e){const i=Fr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function wT(o,e){const i=Fr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function DT(o,e){o.uniform1iv(this.addr,e)}function UT(o,e){o.uniform2iv(this.addr,e)}function NT(o,e){o.uniform3iv(this.addr,e)}function LT(o,e){o.uniform4iv(this.addr,e)}function OT(o,e){o.uniform1uiv(this.addr,e)}function PT(o,e){o.uniform2uiv(this.addr,e)}function zT(o,e){o.uniform3uiv(this.addr,e)}function BT(o,e){o.uniform4uiv(this.addr,e)}function FT(o,e,i){const s=this.cache,l=e.length,u=Ku(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Ud:h=ov;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,u[p])}function IT(o,e,i){const s=this.cache,l=e.length,u=Ku(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||uv,u[h])}function HT(o,e,i){const s=this.cache,l=e.length,u=Ku(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||cv,u[h])}function GT(o,e,i){const s=this.cache,l=e.length,u=Ku(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||lv,u[h])}function VT(o){switch(o){case 5126:return ET;case 35664:return bT;case 35665:return TT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return wT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return NT;case 35669:case 35673:return LT;case 5125:return OT;case 36294:return PT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class XT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=yT(i.type)}}class kT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VT(i.type)}}class WT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const p=l[u];p.setValue(e,i[p.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function v_(o,e){o.seq.push(e),o.map[e.id]=e}function qT(o,e,i){const s=o.name,l=s.length;for(Fh.lastIndex=0;;){const u=Fh.exec(s),h=Fh.lastIndex;let p=u[1];const m=u[2]==="]",d=u[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){v_(i,d===void 0?new XT(p,o,e):new kT(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new WT(p),v_(i,S)),i=S}}}class Fu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);qT(p,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function x_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const YT=37297;let jT=0;function ZT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const S_=new he;function KT(o){Ae._getMatrix(S_,Ae.workingColorSpace,o);const e=`mat3( ${S_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Gu:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function M_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+ZT(o.getShaderSource(e),p)}else return u}function QT(o,e){const i=KT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const JT={[N_]:"Linear",[L_]:"Reinhard",[O_]:"Cineon",[P_]:"ACESFilmic",[B_]:"AgX",[F_]:"Neutral",[z_]:"Custom"};function $T(o,e){const i=JT[e];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nu=new it;function t1(){Ae.getLuminanceCoefficients(Nu);const o=Nu.x.toFixed(4),e=Nu.y.toFixed(4),i=Nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function n1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function i1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function Ho(o){return o!==""}function y_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(o){return o.replace(a1,r1)}const s1=new Map;function r1(o,e){let i=pe[e];if(i===void 0){const s=s1.get(e);if(s!==void 0)i=pe[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Nd(i)}const o1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b_(o){return o.replace(o1,l1)}function l1(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function T_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const u1={[Lu]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function c1(o){return u1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f1={[Us]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[qu]:"ENVMAP_TYPE_CUBE_UV"};function h1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":f1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const d1={[Ur]:"ENVMAP_MODE_REFRACTION"};function p1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":d1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m1={[U_]:"ENVMAP_BLENDING_MULTIPLY",[nM]:"ENVMAP_BLENDING_MIX",[iM]:"ENVMAP_BLENDING_ADD"};function g1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":m1[o.combine]||"ENVMAP_BLENDING_NONE"}function _1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function v1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=c1(i),d=h1(i),v=p1(i),S=g1(i),_=_1(i),E=e1(i),b=n1(u),w=l.createProgram();let M,x,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ho).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ho).join(`
`),x.length>0&&(x+=`
`)):(M=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),x=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Vi?$T("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,QT("linearToOutputTexel",i.outputColorSpace),t1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=Nd(h),h=y_(h,i),h=E_(h,i),p=Nd(p),p=y_(p,i),p=E_(p,i),h=b_(h),p=b_(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===I0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=C+M+h,N=C+x+p,G=x_(l,l.VERTEX_SHADER,P),I=x_(l,l.FRAGMENT_SHADER,N);l.attachShader(w,G),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(H){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(w)||"",at=l.getShaderInfoLog(G)||"",lt=l.getShaderInfoLog(I)||"",J=$.trim(),L=at.trim(),B=lt.trim();let ot=!0,dt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,G,I);else{const Et=M_(l,G,"vertex"),O=M_(l,I,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+Et+`
`+O)}else J!==""?ae("WebGLProgram: Program Info Log:",J):(L===""||B==="")&&(dt=!1);dt&&(H.diagnostics={runnable:ot,programLog:J,vertexShader:{log:L,prefix:M},fragmentShader:{log:B,prefix:x}})}l.deleteShader(G),l.deleteShader(I),T=new Fu(l,w),D=i1(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(w,YT)),ht},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=I,this}let x1=0;class S1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new M1(e),i.set(e,s)),s}}class M1{constructor(e){this.id=x1++,this.code=e,this.usedTimes=0}}function y1(o,e,i,s,l,u){const h=new Z_,p=new S1,m=new Set,d=[],v=new Map,S=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,D,ht,H,$){const at=H.fog,lt=$.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=e.get(T.envMap||J,L),ot=B&&B.mapping===qu?B.image.height:null,dt=E[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&ae("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const Et=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,O=Et!==void 0?Et.length:0;let Y=0;lt.morphAttributes.position!==void 0&&(Y=1),lt.morphAttributes.normal!==void 0&&(Y=2),lt.morphAttributes.color!==void 0&&(Y=3);let _t,At,zt,et;if(dt){const Te=Fi[dt];_t=Te.vertexShader,At=Te.fragmentShader}else _t=T.vertexShader,At=T.fragmentShader,p.update(T),zt=p.getVertexShaderID(T),et=p.getFragmentShaderID(T);const vt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Vt=$.isInstancedMesh===!0,Kt=$.isBatchedMesh===!0,$t=!!T.map,Ke=!!T.matcap,ve=!!B,me=!!T.aoMap,Ue=!!T.lightMap,oe=!!T.bumpMap,Ze=!!T.normalMap,V=!!T.displacementMap,We=!!T.emissiveMap,be=!!T.metalnessMap,Le=!!T.roughnessMap,Wt=T.anisotropy>0,U=T.clearcoat>0,y=T.dispersion>0,q=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ct=Wt&&!!T.anisotropyMap,Xt=U&&!!T.clearcoatMap,Ct=U&&!!T.clearcoatNormalMap,Zt=U&&!!T.clearcoatRoughnessMap,te=q&&!!T.iridescenceMap,yt=q&&!!T.iridescenceThicknessMap,St=pt&&!!T.sheenColorMap,Lt=pt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Ot=!!T.specularColorMap,ue=!!T.specularIntensityMap,W=xt&&!!T.transmissionMap,Rt=xt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,Mt=T.alphaTest>0,ut=!!T.alphaHash,Ft=!!T.extensions;let ne=Vi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Pe={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:At,defines:T.defines,customVertexShaderID:zt,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&$._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&$.instanceColor!==null,instancingMorph:Vt&&$.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Lr,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Ke,envMap:ve,envMapMode:ve&&B.mapping,envMapCubeUVHeight:ot,aoMap:me,lightMap:Ue,bumpMap:oe,normalMap:Ze,displacementMap:V,emissiveMap:We,normalMapObjectSpace:Ze&&T.normalMapType===oM,normalMapTangentSpace:Ze&&T.normalMapType===rM,metalnessMap:be,roughnessMap:Le,anisotropy:Wt,anisotropyMap:ct,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Zt,dispersion:y,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:yt,sheen:pt,sheenColorMap:St,sheenRoughnessMap:Lt,specularMap:Nt,specularColorMap:Ot,specularIntensityMap:ue,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===Cr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Mt,alphaHash:ut,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:me&&b(T.aoMap.channel),lightMapUv:Ue&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:Ze&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:We&&b(T.emissiveMap.channel),metalnessMapUv:be&&b(T.metalnessMap.channel),roughnessMapUv:Le&&b(T.roughnessMap.channel),anisotropyMapUv:ct&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:St&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:ue&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Rt&&b(T.thicknessMap.channel),alphaMapUv:Pt&&b(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ze||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!lt.attributes.uv&&($t||Pt),fog:!!at,useFog:T.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||lt.attributes.normal===void 0&&Ze===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:bt,skinning:$.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ht.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===Fe,decodeVideoTextureEmissive:We&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===Fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ma,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ft&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pe.vertexUv1s=m.has(1),Pe.vertexUv2s=m.has(2),Pe.vertexUv3s=m.has(3),m.clear(),Pe}function M(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)D.push(ht),D.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(x(D,T),C(D,T),D.push(o.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function x(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function C(T,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),T.push(h.mask)}function P(T){const D=E[T.type];let ht;if(D){const H=Fi[D];ht=Wu.clone(H.uniforms)}else ht=T.uniforms;return ht}function N(T,D){let ht=v.get(D);return ht!==void 0?++ht.usedTimes:(ht=new v1(o,D,T,l),d.push(ht),v.set(D,ht)),ht}function G(T){if(--T.usedTimes===0){const D=d.indexOf(T);d[D]=d[d.length-1],d.pop(),v.delete(T.cacheKey),T.destroy()}}function I(T){p.remove(T)}function z(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:G,releaseShaderCache:I,programs:d,dispose:z}}function E1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function b1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function A_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function R_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,b,w,M,x){let C=o[e];return C===void 0?(C={id:_.id,object:_,geometry:E,material:b,materialVariant:h(_),groupOrder:w,renderOrder:_.renderOrder,z:M,group:x},o[e]=C):(C.id=_.id,C.object=_,C.geometry=E,C.material=b,C.materialVariant=h(_),C.groupOrder=w,C.renderOrder=_.renderOrder,C.z=M,C.group=x),e++,C}function m(_,E,b,w,M,x){const C=p(_,E,b,w,M,x);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function d(_,E,b,w,M,x){const C=p(_,E,b,w,M,x);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function v(_,E){i.length>1&&i.sort(_||b1),s.length>1&&s.sort(E||A_),l.length>1&&l.sort(E||A_)}function S(){for(let _=e,E=o.length;_<E;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:d,finish:S,sort:v}}function T1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new R_,o.set(s,[h])):l>=u.length?(h=new R_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function A1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Ee};break;case"SpotLight":i={position:new it,direction:new it,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":i={color:new Ee,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function R1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let C1=0;function w1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function D1(o){const e=new A1,i=R1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new it);const l=new it,u=new nn,h=new nn;function p(d){let v=0,S=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,b=0,w=0,M=0,x=0,C=0,P=0,N=0,G=0,I=0,z=0;d.sort(w1);for(let D=0,ht=d.length;D<ht;D++){const H=d[D],$=H.color,at=H.intensity,lt=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Nr?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=$.r*at,S+=$.g*at,_+=$.b*at;else if(H.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(H.sh.coefficients[L],at);z++}else if(H.isDirectionalLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,s.directionalShadow[E]=ot,s.directionalShadowMap[E]=J,s.directionalShadowMatrix[E]=H.shadow.matrix,C++}s.directional[E]=L,E++}else if(H.isSpotLight){const L=e.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy($).multiplyScalar(at),L.distance=lt,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,s.spot[w]=L;const B=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,B.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[w]=B.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,s.spotShadow[w]=ot,s.spotShadowMap[w]=J,N++}w++}else if(H.isRectAreaLight){const L=e.get(H);L.color.copy($).multiplyScalar(at),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=L,M++}else if(H.isPointLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const B=H.shadow,ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,ot.shadowCameraNear=B.camera.near,ot.shadowCameraFar=B.camera.far,s.pointShadow[b]=ot,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=H.shadow.matrix,P++}s.point[b]=L,b++}else if(H.isHemisphereLight){const L=e.get(H);L.skyColor.copy(H.color).multiplyScalar(at),L.groundColor.copy(H.groundColor).multiplyScalar(at),s.hemi[x]=L,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==x||T.numDirectionalShadows!==C||T.numPointShadows!==P||T.numSpotShadows!==N||T.numSpotMaps!==G||T.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=N+G-I,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,T.directionalLength=E,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=x,T.numDirectionalShadows=C,T.numPointShadows=P,T.numSpotShadows=N,T.numSpotMaps=G,T.numLightProbes=z,s.version=C1++)}function m(d,v){let S=0,_=0,E=0,b=0,w=0;const M=v.matrixWorldInverse;for(let x=0,C=d.length;x<C;x++){const P=d[x];if(P.isDirectionalLight){const N=s.directional[S];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(P.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const N=s.point[_];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const N=s.hemi[w];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function C_(o){const e=new D1(o),i=[],s=[];function l(v){d.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function p(){e.setup(i)}function m(v){e.setupView(i,v)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:h}}function U1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let p;return h===void 0?(p=new C_(o),e.set(l,[p])):u>=h.length?(p=new C_(o),h.push(p)):p=h[u],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,O1=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],P1=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],w_=new nn,Fo=new it,Ih=new it;function z1(o,e,i){let s=new tv;const l=new de,u=new de,h=new en,p=new ZM,m=new KM,d={},v=i.maxTextureSize,S={[es]:Xn,[Xn]:es,[ma]:ma},_=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:N1,fragmentShader:L1}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const b=new _i;b.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ki(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let x=this.type;this.render=function(I,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===BS&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lu);const D=o.getRenderTarget(),ht=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Gi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const at=x!==this.type;at&&z.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(J=>J.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,J=I.length;lt<J;lt++){const L=I[lt],B=L.shadow;if(B===void 0){ae("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ot=B.getFrameExtents();l.multiply(ot),u.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ot.x),l.x=u.x*ot.x,B.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ot.y),l.y=u.y*ot.y,B.mapSize.y=u.y));const dt=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=dt,B.map===null||at===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Io){if(L.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kn(l.x,l.y,{format:Nr,type:ii,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new Xo(l.x,l.y,Ii),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=va,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=En,B.map.depthTexture.magFilter=En}else L.isPointLight?(B.map=new rv(l.x),B.map.depthTexture=new kM(l.x,Xi)):(B.map=new kn(l.x,l.y),B.map.depthTexture=new Xo(l.x,l.y,Xi)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=va,this.type===Lu?(B.map.depthTexture.compareFunction=dt?Vd:Gd,B.map.depthTexture.minFilter=Cn,B.map.depthTexture.magFilter=Cn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=En,B.map.depthTexture.magFilter=En);B.camera.updateProjectionMatrix()}const Et=B.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Et;O++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,O),o.clear();else{O===0&&(o.setRenderTarget(B.map),o.clear());const Y=B.getViewport(O);h.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),$.viewport(h)}if(L.isPointLight){const Y=B.camera,_t=B.matrix,At=L.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),Fo.setFromMatrixPosition(L.matrixWorld),Y.position.copy(Fo),Ih.copy(Y.position),Ih.add(O1[O]),Y.up.copy(P1[O]),Y.lookAt(Ih),Y.updateMatrixWorld(),_t.makeTranslation(-Fo.x,-Fo.y,-Fo.z),w_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(w_,Y.coordinateSystem,Y.reversedDepth)}else B.updateMatrices(L);s=B.getFrustum(),N(z,T,B.camera,L,this.type)}B.isPointLightShadow!==!0&&this.type===Io&&C(B,T),B.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(D,ht,H)};function C(I,z){const T=e.update(w);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new kn(l.x,l.y,{format:Nr,type:ii})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,T,_,w,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,T,E,w,null)}function P(I,z,T,D){let ht=null;const H=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)ht=H;else if(ht=T.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const $=ht.uuid,at=z.uuid;let lt=d[$];lt===void 0&&(lt={},d[$]=lt);let J=lt[at];J===void 0&&(J=ht.clone(),lt[at]=J,z.addEventListener("dispose",G)),ht=J}if(ht.visible=z.visible,ht.wireframe=z.wireframe,D===Io?ht.side=z.shadowSide!==null?z.shadowSide:z.side:ht.side=z.shadowSide!==null?z.shadowSide:S[z.side],ht.alphaMap=z.alphaMap,ht.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ht.map=z.map,ht.clipShadows=z.clipShadows,ht.clippingPlanes=z.clippingPlanes,ht.clipIntersection=z.clipIntersection,ht.displacementMap=z.displacementMap,ht.displacementScale=z.displacementScale,ht.displacementBias=z.displacementBias,ht.wireframeLinewidth=z.wireframeLinewidth,ht.linewidth=z.linewidth,T.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const $=o.properties.get(ht);$.light=T}return ht}function N(I,z,T,D,ht){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ht===Io)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const at=e.update(I),lt=I.material;if(Array.isArray(lt)){const J=at.groups;for(let L=0,B=J.length;L<B;L++){const ot=J[L],dt=lt[ot.materialIndex];if(dt&&dt.visible){const Et=P(I,dt,D,ht);I.onBeforeShadow(o,I,z,T,at,Et,ot),o.renderBufferDirect(T,null,at,Et,I,ot),I.onAfterShadow(o,I,z,T,at,Et,ot)}}}else if(lt.visible){const J=P(I,lt,D,ht);I.onBeforeShadow(o,I,z,T,at,J,null),o.renderBufferDirect(T,null,at,J,I,null),I.onAfterShadow(o,I,z,T,at,J,null)}}const $=I.children;for(let at=0,lt=$.length;at<lt;at++)N($[at],z,T,D,ht)}function G(I){I.target.removeEventListener("dispose",G);for(const T in d){const D=d[T],ht=I.target.uuid;ht in D&&(D[ht].dispose(),delete D[ht])}}}function B1(o,e){function i(){let W=!1;const Rt=new en;let Tt=null;const Pt=new en(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ut,Ft,ne,Pe){Pe===!0&&(Mt*=ne,ut*=ne,Ft*=ne),Rt.set(Mt,ut,Ft,ne),Pt.equals(Rt)===!1&&(o.clearColor(Mt,ut,Ft,ne),Pt.copy(Rt))},reset:function(){W=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,Tt=null,Pt=null,Mt=null;return{setReversed:function(ut){if(Rt!==ut){const Ft=e.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Rt=ut;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ut){ut?vt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(ut){Tt!==ut&&!W&&(o.depthMask(ut),Tt=ut)},setFunc:function(ut){if(Rt&&(ut=_M[ut]),Pt!==ut){switch(ut){case Vh:o.depthFunc(o.NEVER);break;case Xh:o.depthFunc(o.ALWAYS);break;case kh:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Wh:o.depthFunc(o.EQUAL);break;case qh:o.depthFunc(o.GEQUAL);break;case Yh:o.depthFunc(o.GREATER);break;case jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=ut}},setLocked:function(ut){W=ut},setClear:function(ut){Mt!==ut&&(Mt=ut,Rt&&(ut=1-ut),o.clearDepth(ut))},reset:function(){W=!1,Tt=null,Pt=null,Mt=null,Rt=!1}}}function l(){let W=!1,Rt=null,Tt=null,Pt=null,Mt=null,ut=null,Ft=null,ne=null,Pe=null;return{setTest:function(Te){W||(Te?vt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!W&&(o.stencilMask(Te),Rt=Te)},setFunc:function(Te,wn,vi){(Tt!==Te||Pt!==wn||Mt!==vi)&&(o.stencilFunc(Te,wn,vi),Tt=Te,Pt=wn,Mt=vi)},setOp:function(Te,wn,vi){(ut!==Te||Ft!==wn||ne!==vi)&&(o.stencilOp(Te,wn,vi),ut=Te,Ft=wn,ne=vi)},setLocked:function(Te){W=Te},setClear:function(Te){Pe!==Te&&(o.clearStencil(Te),Pe=Te)},reset:function(){W=!1,Rt=null,Tt=null,Pt=null,Mt=null,ut=null,Ft=null,ne=null,Pe=null}}}const u=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},_=new WeakMap,E=[],b=null,w=!1,M=null,x=null,C=null,P=null,N=null,G=null,I=null,z=new Ee(0,0,0),T=0,D=!1,ht=null,H=null,$=null,at=null,lt=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,B=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ot)[1]),L=B>=1):ot.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),L=B>=2);let dt=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),_t=new en().fromArray(O),At=new en().fromArray(Y);function zt(W,Rt,Tt,Pt){const Mt=new Uint8Array(4),ut=o.createTexture();o.bindTexture(W,ut),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Tt;Ft++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Rt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ut}const et={};et[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Dr),oe(!1),Ze(O0),vt(o.CULL_FACE),me(Gi);function vt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function bt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function Vt(W,Rt){return S[W]!==Rt?(o.bindFramebuffer(W,Rt),S[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Kt(W,Rt){let Tt=E,Pt=!1;if(W){Tt=_.get(Rt),Tt===void 0&&(Tt=[],_.set(Rt,Tt));const Mt=W.textures;if(Tt.length!==Mt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let ut=0,Ft=Mt.length;ut<Ft;ut++)Tt[ut]=o.COLOR_ATTACHMENT0+ut;Tt.length=Mt.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function $t(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const Ke={[Rs]:o.FUNC_ADD,[IS]:o.FUNC_SUBTRACT,[HS]:o.FUNC_REVERSE_SUBTRACT};Ke[GS]=o.MIN,Ke[VS]=o.MAX;const ve={[XS]:o.ZERO,[kS]:o.ONE,[WS]:o.SRC_COLOR,[Hh]:o.SRC_ALPHA,[QS]:o.SRC_ALPHA_SATURATE,[ZS]:o.DST_COLOR,[YS]:o.DST_ALPHA,[qS]:o.ONE_MINUS_SRC_COLOR,[Gh]:o.ONE_MINUS_SRC_ALPHA,[KS]:o.ONE_MINUS_DST_COLOR,[jS]:o.ONE_MINUS_DST_ALPHA,[JS]:o.CONSTANT_COLOR,[$S]:o.ONE_MINUS_CONSTANT_COLOR,[tM]:o.CONSTANT_ALPHA,[eM]:o.ONE_MINUS_CONSTANT_ALPHA};function me(W,Rt,Tt,Pt,Mt,ut,Ft,ne,Pe,Te){if(W===Gi){w===!0&&(bt(o.BLEND),w=!1);return}if(w===!1&&(vt(o.BLEND),w=!0),W!==FS){if(W!==M||Te!==D){if((x!==Rs||N!==Rs)&&(o.blendEquation(o.FUNC_ADD),x=Rs,N=Rs),Te)switch(W){case Cr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hu:o.blendFunc(o.ONE,o.ONE);break;case P0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case z0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",W);break}else switch(W){case Cr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hu:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case P0:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z0:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",W);break}C=null,P=null,G=null,I=null,z.set(0,0,0),T=0,M=W,D=Te}return}Mt=Mt||Rt,ut=ut||Tt,Ft=Ft||Pt,(Rt!==x||Mt!==N)&&(o.blendEquationSeparate(Ke[Rt],Ke[Mt]),x=Rt,N=Mt),(Tt!==C||Pt!==P||ut!==G||Ft!==I)&&(o.blendFuncSeparate(ve[Tt],ve[Pt],ve[ut],ve[Ft]),C=Tt,P=Pt,G=ut,I=Ft),(ne.equals(z)===!1||Pe!==T)&&(o.blendColor(ne.r,ne.g,ne.b,Pe),z.copy(ne),T=Pe),M=W,D=!1}function Ue(W,Rt){W.side===ma?bt(o.CULL_FACE):vt(o.CULL_FACE);let Tt=W.side===Xn;Rt&&(Tt=!Tt),oe(Tt),W.blending===Cr&&W.transparent===!1?me(Gi):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Pt=W.stencilWrite;p.setTest(Pt),Pt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){ht!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),ht=W)}function Ze(W){W!==PS?(vt(o.CULL_FACE),W!==H&&(W===O0?o.cullFace(o.BACK):W===zS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),H=W}function V(W){W!==$&&(L&&o.lineWidth(W),$=W)}function We(W,Rt,Tt){W?(vt(o.POLYGON_OFFSET_FILL),(at!==Rt||lt!==Tt)&&(at=Rt,lt=Tt,h.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,Tt))):bt(o.POLYGON_OFFSET_FILL)}function be(W){W?vt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function Le(W){W===void 0&&(W=o.TEXTURE0+J-1),dt!==W&&(o.activeTexture(W),dt=W)}function Wt(W,Rt,Tt){Tt===void 0&&(dt===null?Tt=o.TEXTURE0+J-1:Tt=dt);let Pt=Et[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[Tt]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(dt!==Tt&&(o.activeTexture(Tt),dt=Tt),o.bindTexture(W,Rt||et[W]),Pt.type=W,Pt.texture=Rt)}function U(){const W=Et[dt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Zt(){try{o.texStorage3D(...arguments)}catch(W){De("WebGLState:",W)}}function te(){try{o.texImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function yt(){try{o.texImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function St(W){_t.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Lt(W){At.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Nt(W,Rt){let Tt=d.get(Rt);Tt===void 0&&(Tt=new WeakMap,d.set(Rt,Tt));let Pt=Tt.get(W);Pt===void 0&&(Pt=o.getUniformBlockIndex(Rt,W.name),Tt.set(W,Pt))}function Ot(W,Rt){const Pt=d.get(Rt).get(W);m.get(Rt)!==Pt&&(o.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),m.set(Rt,Pt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},dt=null,Et={},S={},_=new WeakMap,E=[],b=null,w=!1,M=null,x=null,C=null,P=null,N=null,G=null,I=null,z=new Ee(0,0,0),T=0,D=!1,ht=null,H=null,$=null,at=null,lt=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:vt,disable:bt,bindFramebuffer:Vt,drawBuffers:Kt,useProgram:$t,setBlending:me,setMaterial:Ue,setFlipSided:oe,setCullFace:Ze,setLineWidth:V,setPolygonOffset:We,setScissorTest:be,activeTexture:Le,bindTexture:Wt,unbindTexture:U,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:te,texImage3D:yt,updateUBOMapping:Nt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:Zt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Xt,scissor:St,viewport:Lt,reset:ue}}function F1(o,e,i,s,l,u,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new de,v=new WeakMap;let S;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,y){return E?new OffscreenCanvas(U,y):Xu("canvas")}function w(U,y,q){let pt=1;const xt=Wt(U);if((xt.width>q||xt.height>q)&&(pt=q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ct=Math.floor(pt*xt.width),Xt=Math.floor(pt*xt.height);S===void 0&&(S=b(ct,Xt));const Ct=y?b(ct,Xt):S;return Ct.width=ct,Ct.height=Xt,Ct.getContext("2d").drawImage(U,0,0,ct,Xt),ae("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+Xt+")."),Ct}else return"data"in U&&ae("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,y,q,pt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=y;if(y===o.RED&&(q===o.FLOAT&&(ct=o.R32F),q===o.HALF_FLOAT&&(ct=o.R16F),q===o.UNSIGNED_BYTE&&(ct=o.R8)),y===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.R8UI),q===o.UNSIGNED_SHORT&&(ct=o.R16UI),q===o.UNSIGNED_INT&&(ct=o.R32UI),q===o.BYTE&&(ct=o.R8I),q===o.SHORT&&(ct=o.R16I),q===o.INT&&(ct=o.R32I)),y===o.RG&&(q===o.FLOAT&&(ct=o.RG32F),q===o.HALF_FLOAT&&(ct=o.RG16F),q===o.UNSIGNED_BYTE&&(ct=o.RG8)),y===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RG8UI),q===o.UNSIGNED_SHORT&&(ct=o.RG16UI),q===o.UNSIGNED_INT&&(ct=o.RG32UI),q===o.BYTE&&(ct=o.RG8I),q===o.SHORT&&(ct=o.RG16I),q===o.INT&&(ct=o.RG32I)),y===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),q===o.UNSIGNED_INT&&(ct=o.RGB32UI),q===o.BYTE&&(ct=o.RGB8I),q===o.SHORT&&(ct=o.RGB16I),q===o.INT&&(ct=o.RGB32I)),y===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),q===o.UNSIGNED_INT&&(ct=o.RGBA32UI),q===o.BYTE&&(ct=o.RGBA8I),q===o.SHORT&&(ct=o.RGBA16I),q===o.INT&&(ct=o.RGBA32I)),y===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),y===o.RGBA){const Xt=xt?Gu:Ae.getTransfer(pt);q===o.FLOAT&&(ct=o.RGBA32F),q===o.HALF_FLOAT&&(ct=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ct=Xt===Fe?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function N(U,y){let q;return U?y===null||y===Xi||y===Vo?q=o.DEPTH24_STENCIL8:y===Ii?q=o.DEPTH32F_STENCIL8:y===Go&&(q=o.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xi||y===Vo?q=o.DEPTH_COMPONENT24:y===Ii?q=o.DEPTH_COMPONENT32F:y===Go&&(q=o.DEPTH_COMPONENT16),q}function G(U,y){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==En&&U.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function I(U){const y=U.target;y.removeEventListener("dispose",I),T(y),y.isVideoTexture&&v.delete(y)}function z(U){const y=U.target;y.removeEventListener("dispose",z),ht(y)}function T(U){const y=s.get(U);if(y.__webglInit===void 0)return;const q=U.source,pt=_.get(q);if(pt){const xt=pt[y.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(pt).length===0&&_.delete(q)}s.remove(U)}function D(U){const y=s.get(U);o.deleteTexture(y.__webglTexture);const q=U.source,pt=_.get(q);delete pt[y.__cacheKey],h.memory.textures--}function ht(U){const y=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(y.__webglFramebuffer[pt]))for(let xt=0;xt<y.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(y.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(y.__webglFramebuffer[pt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[pt])}else{if(Array.isArray(y.__webglFramebuffer))for(let pt=0;pt<y.__webglFramebuffer.length;pt++)o.deleteFramebuffer(y.__webglFramebuffer[pt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let pt=0;pt<y.__webglColorRenderbuffer.length;pt++)y.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[pt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=U.textures;for(let pt=0,xt=q.length;pt<xt;pt++){const ct=s.get(q[pt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(q[pt])}s.remove(U)}let H=0;function $(){H=0}function at(){const U=H;return U>=l.maxTextures&&ae("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function lt(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function J(U,y){const q=s.get(U);if(U.isVideoTexture&&be(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const pt=U.image;if(pt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,U,y);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+y)}function L(U,y){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,y);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+y)}function B(U,y){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,y);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+y)}function ot(U,y){const q=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){vt(q,U,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+y)}const dt={[Zh]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[Kh]:o.MIRRORED_REPEAT},Et={[En]:o.NEAREST,[aM]:o.NEAREST_MIPMAP_NEAREST,[lu]:o.NEAREST_MIPMAP_LINEAR,[Cn]:o.LINEAR,[uh]:o.LINEAR_MIPMAP_NEAREST,[ws]:o.LINEAR_MIPMAP_LINEAR},O={[lM]:o.NEVER,[dM]:o.ALWAYS,[uM]:o.LESS,[Gd]:o.LEQUAL,[cM]:o.EQUAL,[Vd]:o.GEQUAL,[fM]:o.GREATER,[hM]:o.NOTEQUAL};function Y(U,y){if(y.type===Ii&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===uh||y.magFilter===lu||y.magFilter===ws||y.minFilter===Cn||y.minFilter===uh||y.minFilter===lu||y.minFilter===ws)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,dt[y.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,dt[y.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,dt[y.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[y.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[y.minFilter]),y.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==lu&&y.minFilter!==ws||y.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function _t(U,y){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",I));const pt=y.source;let xt=_.get(pt);xt===void 0&&(xt={},_.set(pt,xt));const ct=lt(y);if(ct!==U.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,q=!0),xt[ct].usedTimes++;const Xt=xt[U.__cacheKey];Xt!==void 0&&(xt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(y)),U.__cacheKey=ct,U.__webglTexture=xt[ct].texture}return q}function At(U,y,q){return Math.floor(Math.floor(U/q)/y)}function zt(U,y,q,pt){const ct=U.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,q,pt,y.data);else{ct.sort((yt,St)=>yt.start-St.start);let Xt=0;for(let yt=1;yt<ct.length;yt++){const St=ct[Xt],Lt=ct[yt],Nt=St.start+St.count,Ot=At(Lt.start,y.width,4),ue=At(St.start,y.width,4);Lt.start<=Nt+1&&Ot===ue&&At(Lt.start+Lt.count-1,y.width,4)===Ot?St.count=Math.max(St.count,Lt.start+Lt.count-St.start):(++Xt,ct[Xt]=Lt)}ct.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let yt=0,St=ct.length;yt<St;yt++){const Lt=ct[yt],Nt=Math.floor(Lt.start/4),Ot=Math.ceil(Lt.count/4),ue=Nt%y.width,W=Math.floor(Nt/y.width),Rt=Ot,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ue,W,Rt,Tt,q,pt,y.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function et(U,y,q){let pt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=_t(U,y),ct=y.source;i.bindTexture(pt,U.__webglTexture,o.TEXTURE0+q);const Xt=s.get(ct);if(ct.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+q);const Ct=Ae.getPrimaries(Ae.workingColorSpace),Zt=y.colorSpace===Ja?null:Ae.getPrimaries(y.colorSpace),te=y.colorSpace===Ja||Ct===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let yt=w(y.image,!1,l.maxTextureSize);yt=Le(y,yt);const St=u.convert(y.format,y.colorSpace),Lt=u.convert(y.type);let Nt=P(y.internalFormat,St,Lt,y.colorSpace,y.isVideoTexture);Y(pt,y);let Ot;const ue=y.mipmaps,W=y.isVideoTexture!==!0,Rt=Xt.__version===void 0||xt===!0,Tt=ct.dataReady,Pt=G(y,yt);if(y.isDepthTexture)Nt=N(y.format===Ds,y.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Nt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Nt,yt.width,yt.height,0,St,Lt,null));else if(y.isDataTexture)if(ue.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Nt,ue[0].width,ue[0].height);for(let Mt=0,ut=ue.length;Mt<ut;Mt++)Ot=ue[Mt],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Lt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Nt,Ot.width,Ot.height,0,St,Lt,Ot.data);y.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Nt,yt.width,yt.height),Tt&&zt(y,yt,St,Lt)):i.texImage2D(o.TEXTURE_2D,0,Nt,yt.width,yt.height,0,St,Lt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Nt,ue[0].width,ue[0].height,yt.depth);for(let Mt=0,ut=ue.length;Mt<ut;Mt++)if(Ot=ue[Mt],y.format!==wi)if(St!==null)if(W){if(Tt)if(y.layerUpdates.size>0){const Ft=r_(Ot.width,Ot.height,y.format,y.type);for(const ne of y.layerUpdates){const Pe=Ot.data.subarray(ne*Ft/Ot.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Ot.width,Ot.height,1,St,Pe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Nt,Ot.width,Ot.height,yt.depth,0,Ot.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Lt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Nt,Ot.width,Ot.height,yt.depth,0,St,Lt,Ot.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Nt,ue[0].width,ue[0].height);for(let Mt=0,ut=ue.length;Mt<ut;Mt++)Ot=ue[Mt],y.format!==wi?St!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Nt,Ot.width,Ot.height,0,Ot.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Lt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Nt,Ot.width,Ot.height,0,St,Lt,Ot.data)}else if(y.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Nt,yt.width,yt.height,yt.depth),Tt)if(y.layerUpdates.size>0){const Mt=r_(yt.width,yt.height,y.format,y.type);for(const ut of y.layerUpdates){const Ft=yt.data.subarray(ut*Mt/yt.data.BYTES_PER_ELEMENT,(ut+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ut,yt.width,yt.height,1,St,Lt,Ft)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,St,Lt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,yt.width,yt.height,yt.depth,0,St,Lt,yt.data);else if(y.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,Pt,Nt,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,St,Lt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,yt.width,yt.height,yt.depth,0,St,Lt,yt.data);else if(y.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,Pt,Nt,yt.width,yt.height);else{let Mt=yt.width,ut=yt.height;for(let Ft=0;Ft<Pt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Nt,Mt,ut,0,St,Lt,null),Mt>>=1,ut>>=1}}else if(ue.length>0){if(W&&Rt){const Mt=Wt(ue[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Nt,Mt.width,Mt.height)}for(let Mt=0,ut=ue.length;Mt<ut;Mt++)Ot=ue[Mt],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,St,Lt,Ot):i.texImage2D(o.TEXTURE_2D,Mt,Nt,St,Lt,Ot);y.generateMipmaps=!1}else if(W){if(Rt){const Mt=Wt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Nt,Mt.width,Mt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St,Lt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Nt,St,Lt,yt);M(y)&&x(pt),Xt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function vt(U,y,q){if(y.image.length!==6)return;const pt=_t(U,y),xt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+q);const ct=s.get(xt);if(xt.version!==ct.__version||pt===!0){i.activeTexture(o.TEXTURE0+q);const Xt=Ae.getPrimaries(Ae.workingColorSpace),Ct=y.colorSpace===Ja?null:Ae.getPrimaries(y.colorSpace),Zt=y.colorSpace===Ja||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,yt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let ut=0;ut<6;ut++)!te&&!yt?St[ut]=w(y.image[ut],!0,l.maxCubemapSize):St[ut]=yt?y.image[ut].image:y.image[ut],St[ut]=Le(y,St[ut]);const Lt=St[0],Nt=u.convert(y.format,y.colorSpace),Ot=u.convert(y.type),ue=P(y.internalFormat,Nt,Ot,y.colorSpace),W=y.isVideoTexture!==!0,Rt=ct.__version===void 0||pt===!0,Tt=xt.dataReady;let Pt=G(y,Lt);Y(o.TEXTURE_CUBE_MAP,y);let Mt;if(te){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ue,Lt.width,Lt.height);for(let ut=0;ut<6;ut++){Mt=St[ut].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){const ne=Mt[Ft];y.format!==wi?Nt!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,ne.width,ne.height,Nt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,ue,ne.width,ne.height,0,ne.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,ne.width,ne.height,Nt,Ot,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,ue,ne.width,ne.height,0,Nt,Ot,ne.data)}}}else{if(Mt=y.mipmaps,W&&Rt){Mt.length>0&&Pt++;const ut=Wt(St[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ue,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(yt){W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,St[ut].width,St[ut].height,Nt,Ot,St[ut].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ue,St[ut].width,St[ut].height,0,Nt,Ot,St[ut].data);for(let Ft=0;Ft<Mt.length;Ft++){const Pe=Mt[Ft].image[ut].image;W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,Pe.width,Pe.height,Nt,Ot,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,ue,Pe.width,Pe.height,0,Nt,Ot,Pe.data)}}else{W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Nt,Ot,St[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ue,Nt,Ot,St[ut]);for(let Ft=0;Ft<Mt.length;Ft++){const ne=Mt[Ft];W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,Nt,Ot,ne.image[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,ue,Nt,Ot,ne.image[ut])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),ct.__version=xt.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function bt(U,y,q,pt,xt,ct){const Xt=u.convert(q.format,q.colorSpace),Ct=u.convert(q.type),Zt=P(q.internalFormat,Xt,Ct,q.colorSpace),te=s.get(y),yt=s.get(q);if(yt.__renderTarget=y,!te.__hasExternalTextures){const St=Math.max(1,y.width>>ct),Lt=Math.max(1,y.height>>ct);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ct,Zt,St,Lt,y.depth,0,Xt,Ct,null):i.texImage2D(xt,ct,Zt,St,Lt,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,yt.__webglTexture,0,V(y)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,yt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(U,y,q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),y.depthBuffer){const pt=y.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ct=N(y.stencilBuffer,xt),Xt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(y),ct,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(y),ct,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ct,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const pt=y.textures;for(let xt=0;xt<pt.length;xt++){const ct=pt[xt],Xt=u.convert(ct.format,ct.colorSpace),Ct=u.convert(ct.type),Zt=P(ct.internalFormat,Xt,Ct,ct.colorSpace);We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(y),Zt,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(y),Zt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(U,y,q){const pt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(y.depthTexture);if(xt.__renderTarget=y,(!xt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y.depthTexture);const te=u.convert(y.depthTexture.format),yt=u.convert(y.depthTexture.type);let St;y.depthTexture.format===va?St=o.DEPTH_COMPONENT24:y.depthTexture.format===Ds&&(St=o.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,St,y.width,y.height,0,te,yt,null)}}else J(y.depthTexture,0);const ct=xt.__webglTexture,Xt=V(y),Ct=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Zt=y.depthTexture.format===Ds?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===va)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,Ct,ct,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,Ct,ct,0);else if(y.depthTexture.format===Ds)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,Ct,ct,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,Ct,ct,0);else throw new Error("Unknown depthTexture format")}function $t(U){const y=s.get(U),q=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),pt){const xt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),y.__depthDisposeCallback=xt}y.__boundDepthTexture=pt}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Kt(y.__webglFramebuffer[pt],U,pt);else{const pt=U.texture.mipmaps;pt&&pt.length>0?Kt(y.__webglFramebuffer[0],U,0):Kt(y.__webglFramebuffer,U,0)}else if(q){y.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[pt]),y.__webglDepthbuffer[pt]===void 0)y.__webglDepthbuffer[pt]=o.createRenderbuffer(),Vt(y.__webglDepthbuffer[pt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Vt(y.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(U,y,q){const pt=s.get(U);y!==void 0&&bt(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&$t(U)}function ve(U){const y=U.texture,q=s.get(U),pt=s.get(y);U.addEventListener("dispose",z);const xt=U.textures,ct=U.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=y.version,h.memory.textures++),ct){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Zt=0;Zt<y.mipmaps.length;Zt++)q.__webglFramebuffer[Ct][Zt]=o.createFramebuffer()}else q.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<y.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const te=s.get(xt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&We(U)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Zt=xt[Ct];q.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const te=u.convert(Zt.format,Zt.colorSpace),yt=u.convert(Zt.type),St=P(Zt.internalFormat,te,yt,Zt.colorSpace,U.isXRRenderTarget===!0),Lt=V(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,St,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y);for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)bt(q.__webglFramebuffer[Ct][Zt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt);else bt(q.__webglFramebuffer[Ct],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const te=xt[Ct],yt=s.get(te);let St=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(St=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,yt.__webglTexture),Y(St,te),bt(q.__webglFramebuffer,U,te,o.COLOR_ATTACHMENT0+Ct,St,0),M(te)&&x(St)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),Y(Ct,y),y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)bt(q.__webglFramebuffer[Zt],U,y,o.COLOR_ATTACHMENT0,Ct,Zt);else bt(q.__webglFramebuffer,U,y,o.COLOR_ATTACHMENT0,Ct,0);M(y)&&x(Ct),i.unbindTexture()}U.depthBuffer&&$t(U)}function me(U){const y=U.textures;for(let q=0,pt=y.length;q<pt;q++){const xt=y[q];if(M(xt)){const ct=C(U),Xt=s.get(xt).__webglTexture;i.bindTexture(ct,Xt),x(ct),i.unbindTexture()}}}const Ue=[],oe=[];function Ze(U){if(U.samples>0){if(We(U)===!1){const y=U.textures,q=U.width,pt=U.height;let xt=o.COLOR_BUFFER_BIT;const ct=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),Ct=y.length>1;if(Ct)for(let te=0;te<y.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let te=0;te<y.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const yt=s.get(y[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,q,pt,0,0,q,pt,xt,o.NEAREST),m===!0&&(Ue.length=0,oe.length=0,Ue.push(o.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ue.push(ct),oe.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<y.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const yt=s.get(y[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const y=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function V(U){return Math.min(l.maxSamples,U.samples)}function We(U){const y=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(U){const y=h.render.frame;v.get(U)!==y&&(v.set(U,y),U.update())}function Le(U,y){const q=U.colorSpace,pt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Lr&&q!==Ja&&(Ae.getTransfer(q)===Fe?(pt!==wi||xt!==gi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),y}function Wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=at,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=L,this.setTexture3D=B,this.setTextureCube=ot,this.rebindTextures=Ke,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function I1(o,e){function i(s,l=Ja){let u;const h=Ae.getTransfer(l);if(s===gi)return o.UNSIGNED_BYTE;if(s===zd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Bd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===V_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===X_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===H_)return o.BYTE;if(s===G_)return o.SHORT;if(s===Go)return o.UNSIGNED_SHORT;if(s===Pd)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===ii)return o.HALF_FLOAT;if(s===k_)return o.ALPHA;if(s===W_)return o.RGB;if(s===wi)return o.RGBA;if(s===va)return o.DEPTH_COMPONENT;if(s===Ds)return o.DEPTH_STENCIL;if(s===q_)return o.RED;if(s===Fd)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Id)return o.RG_INTEGER;if(s===Hd)return o.RGBA_INTEGER;if(s===Ou||s===Pu||s===zu||s===Bu)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Ou)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Ou)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qh||s===Jh||s===$h||s===td)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Qh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$h)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===td)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===ed||s===nd)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===ad)return u.COMPRESSED_R11_EAC;if(s===sd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===rd)return u.COMPRESSED_RG11_EAC;if(s===od)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ld||s===ud||s===cd||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===Md)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ud)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===md)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_d)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Md)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===Ed||s===bd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===yd)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ed)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Td||s===Ad||s===Rd||s===Cd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Td)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
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

}`;class V1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new nv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new bn({vertexShader:H1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ki(new ju(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X1 extends zr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,p="local-floor",m=1,d=null,v=null,S=null,_=null,E=null,b=null;const w=typeof XRWebGLBinding<"u",M=new V1,x={},C=i.getContextAttributes();let P=null,N=null;const G=[],I=[],z=new de;let T=null;const D=new mi;D.viewport=new en;const ht=new mi;ht.viewport=new en;const H=[D,ht],$=new JM;let at=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let vt=G[et];return vt===void 0&&(vt=new _h,G[et]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(et){let vt=G[et];return vt===void 0&&(vt=new _h,G[et]=vt),vt.getGripSpace()},this.getHand=function(et){let vt=G[et];return vt===void 0&&(vt=new _h,G[et]=vt),vt.getHandSpace()};function J(et){const vt=I.indexOf(et.inputSource);if(vt===-1)return;const bt=G[vt];bt!==void 0&&(bt.update(et.inputSource,et.frame,d||h),bt.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",B);for(let et=0;et<G.length;et++){const vt=I[et];vt!==null&&(I[et]=null,G[et].disconnect(vt))}at=null,lt=null,M.reset();for(const et in x)delete x[et];e.setRenderTarget(P),E=null,_=null,S=null,l=null,N=null,zt.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){p=et,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(et){d=et},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return S===null&&w&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",L),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,Kt=null;C.depth&&(Kt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=C.stencil?Ds:va,Vt=C.stencil?Vo:Xi);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:u};S=this.getBinding(),_=S.createProjectionLayer($t),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new kn(_.textureWidth,_.textureHeight,{format:wi,type:gi,depthTexture:new Xo(_.textureWidth,_.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new kn(E.framebufferWidth,E.framebufferHeight,{format:wi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(et){for(let vt=0;vt<et.removed.length;vt++){const bt=et.removed[vt],Vt=I.indexOf(bt);Vt>=0&&(I[Vt]=null,G[Vt].disconnect(bt))}for(let vt=0;vt<et.added.length;vt++){const bt=et.added[vt];let Vt=I.indexOf(bt);if(Vt===-1){for(let $t=0;$t<G.length;$t++)if($t>=I.length){I.push(bt),Vt=$t;break}else if(I[$t]===null){I[$t]=bt,Vt=$t;break}if(Vt===-1)break}const Kt=G[Vt];Kt&&Kt.connect(bt)}}const ot=new it,dt=new it;function Et(et,vt,bt){ot.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(bt.matrixWorld);const Vt=ot.distanceTo(dt),Kt=vt.projectionMatrix.elements,$t=bt.projectionMatrix.elements,Ke=Kt[14]/(Kt[10]-1),ve=Kt[14]/(Kt[10]+1),me=(Kt[9]+1)/Kt[5],Ue=(Kt[9]-1)/Kt[5],oe=(Kt[8]-1)/Kt[0],Ze=($t[8]+1)/$t[0],V=Ke*oe,We=Ke*Ze,be=Vt/(-oe+Ze),Le=be*-oe;if(vt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Le),et.translateZ(be),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Kt[10]===-1)et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=Ke+be,U=ve+be,y=V-Le,q=We+(Vt-Le),pt=me*ve/U*Wt,xt=Ue*ve/U*Wt;et.projectionMatrix.makePerspective(y,q,pt,xt,Wt,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function O(et,vt){vt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(vt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let vt=et.near,bt=et.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),$.near=ht.near=D.near=vt,$.far=ht.far=D.far=bt,(at!==$.near||lt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),at=$.near,lt=$.far),$.layers.mask=et.layers.mask|6,D.layers.mask=$.layers.mask&-5,ht.layers.mask=$.layers.mask&-3;const Vt=et.parent,Kt=$.cameras;O($,Vt);for(let $t=0;$t<Kt.length;$t++)O(Kt[$t],Vt);Kt.length===2?Et($,D,ht):$.projectionMatrix.copy(D.projectionMatrix),Y(et,$,Vt)};function Y(et,vt,bt){bt===null?et.matrix.copy(vt.matrixWorld):(et.matrix.copy(bt.matrixWorld),et.matrix.invert(),et.matrix.multiply(vt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=wd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(et){m=et,_!==null&&(_.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(et){return x[et]};let _t=null;function At(et,vt){if(v=vt.getViewerPose(d||h),b=vt,v!==null){const bt=v.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Vt=!1;bt.length!==$.cameras.length&&($.cameras.length=0,Vt=!0);for(let ve=0;ve<bt.length;ve++){const me=bt[ve];let Ue=null;if(E!==null)Ue=E.getViewport(me);else{const Ze=S.getViewSubImage(_,me);Ue=Ze.viewport,ve===0&&(e.setRenderTargetTextures(N,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(N))}let oe=H[ve];oe===void 0&&(oe=new mi,oe.layers.enable(ve),oe.viewport=new en,H[ve]=oe),oe.matrix.fromArray(me.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(me.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ve===0&&($.matrix.copy(oe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Vt===!0&&$.cameras.push(oe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){S=s.getBinding();const ve=S.getDepthInformation(bt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,l.renderState)}if(Kt&&Kt.includes("camera-access")&&w){e.state.unbindTexture(),S=s.getBinding();for(let ve=0;ve<bt.length;ve++){const me=bt[ve].camera;if(me){let Ue=x[me];Ue||(Ue=new nv,x[me]=Ue);const oe=S.getCameraImage(me);Ue.sourceTexture=oe}}}}for(let bt=0;bt<G.length;bt++){const Vt=I[bt],Kt=G[bt];Vt!==null&&Kt!==void 0&&Kt.update(Vt,vt,d||h)}_t&&_t(et,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const zt=new sv;zt.setAnimationLoop(At),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const Ts=new xa,k1=new nn;function W1(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,iv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,C,P,N){x.isMeshBasicMaterial?u(M,x):x.isMeshLambertMaterial?(u(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(M,x),S(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(M,x),_(M,x),x.isMeshPhysicalMaterial&&E(M,x,N)):x.isMeshMatcapMaterial?(u(M,x),b(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),w(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?m(M,x,C,P):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Xn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Xn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const C=e.get(x),P=C.envMap,N=C.envMapRotation;P&&(M.envMap.value=P,Ts.copy(N),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),M.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(Ts)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,C,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*C,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function S(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,C){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const C=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function q1(o,e,i,s){let l={},u={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const N=P.program;s.uniformBlockBinding(C,N)}function d(C,P){let N=l[C.id];N===void 0&&(b(C),N=v(C),l[C.id]=N,C.addEventListener("dispose",M));const G=P.program;s.updateUBOMapping(C,G);const I=e.render.frame;u[C.id]!==I&&(_(C),u[C.id]=I)}function v(C){const P=S();C.__bindingPointIndex=P;const N=o.createBuffer(),G=C.__size,I=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,G,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function S(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const P=l[C.id],N=C.uniforms,G=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let I=0,z=N.length;I<z;I++){const T=Array.isArray(N[I])?N[I]:[N[I]];for(let D=0,ht=T.length;D<ht;D++){const H=T[D];if(E(H,I,D,G)===!0){const $=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let J=0;J<at.length;J++){const L=at[J],B=w(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,$+lt,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,lt),lt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(C,P,N,G){const I=C.value,z=P+"_"+N;if(G[z]===void 0)return typeof I=="number"||typeof I=="boolean"?G[z]=I:G[z]=I.clone(),!0;{const T=G[z];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return G[z]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function b(C){const P=C.uniforms;let N=0;const G=16;for(let z=0,T=P.length;z<T;z++){const D=Array.isArray(P[z])?P[z]:[P[z]];for(let ht=0,H=D.length;ht<H;ht++){const $=D[ht],at=Array.isArray($.value)?$.value:[$.value];for(let lt=0,J=at.length;lt<J;lt++){const L=at[lt],B=w(L),ot=N%G,dt=ot%B.boundary,Et=ot+dt;N+=dt,Et!==0&&G-Et<B.storage&&(N+=G-Et),$.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=B.storage}}}const I=N%G;return I>0&&(N+=G-I),C.__size=N,C.__cache={},this}function w(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",C),P}function M(C){const P=C.target;P.removeEventListener("dispose",M);const N=h.indexOf(P.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:m,update:d,dispose:x}}const Y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function j1(){return Bi===null&&(Bi=new FM(Y1,16,16,Nr,ii),Bi.name="DFG_LUT",Bi.minFilter=Cn,Bi.magFilter=Cn,Bi.wrapS=ga,Bi.wrapT=ga,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class Z1{constructor(e={}){const{canvas:i=mM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:E=gi}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const w=E,M=new Set([Hd,Id,Fd]),x=new Set([gi,Xi,Go,Vo,zd,Bd]),C=new Uint32Array(4),P=new Int32Array(4);let N=null,G=null;const I=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ht=!1;this._outputColorSpace=pi;let H=0,$=0,at=null,lt=-1,J=null;const L=new en,B=new en;let ot=null;const dt=new Ee(0);let Et=0,O=i.width,Y=i.height,_t=1,At=null,zt=null;const et=new en(0,0,O,Y),vt=new en(0,0,O,Y);let bt=!1;const Vt=new tv;let Kt=!1,$t=!1;const Ke=new nn,ve=new it,me=new en,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ze(){return at===null?_t:1}let V=s;function We(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Od}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const k="webgl2";if(V=We(k,R),V===null)throw We(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let be,Le,Wt,U,y,q,pt,xt,ct,Xt,Ct,Zt,te,yt,St,Lt,Nt,Ot,ue,W,Rt,Tt,Pt;function Mt(){be=new Zb(V),be.init(),Rt=new I1(V,be),Le=new Gb(V,be,e,Rt),Wt=new B1(V,be),Le.reversedDepthBuffer&&_&&Wt.buffers.depth.setReversed(!0),U=new Jb(V),y=new E1,q=new F1(V,be,Wt,y,Le,Rt,U),pt=new jb(D),xt=new iy(V),Tt=new Ib(V,xt),ct=new Kb(V,xt,U,Tt),Xt=new tT(V,ct,xt,Tt,U),Ot=new $b(V,Le,q),St=new Vb(y),Ct=new y1(D,pt,be,Le,Tt,St),Zt=new W1(D,y),te=new T1,yt=new U1(be),Nt=new Fb(D,pt,Wt,Xt,b,m),Lt=new z1(D,Xt,Le),Pt=new q1(V,U,Le,Wt),ue=new Hb(V,be,U),W=new Qb(V,be,U),U.programs=Ct.programs,D.capabilities=Le,D.extensions=be,D.properties=y,D.renderLists=te,D.shadowMap=Lt,D.state=Wt,D.info=U}Mt(),w!==gi&&(T=new nT(w,i.width,i.height,l,u));const ut=new X1(D,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,k,st=!0){if(ut.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=k,i.width=Math.floor(R*_t),i.height=Math.floor(k*_t),st===!0&&(i.style.width=R+"px",i.style.height=k+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(O*_t,Y*_t).floor()},this.setDrawingBufferSize=function(R,k,st){O=R,Y=k,_t=st,i.width=Math.floor(R*st),i.height=Math.floor(k*st),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(w===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,k,st,tt){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,k,st,tt),Wt.viewport(L.copy(et).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,k,st,tt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,k,st,tt),Wt.scissor(B.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){Wt.setScissorTest(bt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){zt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,st=!0){let tt=0;if(R){let Z=!1;if(at!==null){const wt=at.texture.format;Z=M.has(wt)}if(Z){const wt=at.texture.type,Bt=x.has(wt),Dt=Nt.getClearColor(),kt=Nt.getClearAlpha(),Yt=Dt.r,ee=Dt.g,se=Dt.b;Bt?(C[0]=Yt,C[1]=ee,C[2]=se,C[3]=kt,V.clearBufferuiv(V.COLOR,0,C)):(P[0]=Yt,P[1]=ee,P[2]=se,P[3]=kt,V.clearBufferiv(V.COLOR,0,P))}else tt|=V.COLOR_BUFFER_BIT}k&&(tt|=V.DEPTH_BUFFER_BIT),st&&(tt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&V.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Pe,!1),Nt.dispose(),te.dispose(),yt.dispose(),y.dispose(),pt.dispose(),Xt.dispose(),Tt.dispose(),Pt.dispose(),Ct.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ls),ut.removeEventListener("sessionend",Os),Ui.stop()};function Ft(R){R.preventDefault(),G0("WebGLRenderer: Context Lost."),ht=!0}function ne(){G0("WebGLRenderer: Context Restored."),ht=!1;const R=U.autoReset,k=Lt.enabled,st=Lt.autoUpdate,tt=Lt.needsUpdate,Z=Lt.type;Mt(),U.autoReset=R,Lt.enabled=k,Lt.autoUpdate=st,Lt.needsUpdate=tt,Lt.type=Z}function Pe(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const k=R.target;k.removeEventListener("dispose",Te),wn(k)}function wn(R){vi(R),y.remove(R)}function vi(R){const k=y.get(R).programs;k!==void 0&&(k.forEach(function(st){Ct.releaseProgram(st)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,st,tt,Z,wt){k===null&&(k=Ue);const Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Dt=Jo(R,k,st,tt,Z);Wt.setMaterial(tt,Bt);let kt=st.index,Yt=1;if(tt.wireframe===!0){if(kt=ct.getWireframeAttribute(st),kt===void 0)return;Yt=2}const ee=st.drawRange,se=st.attributes.position;let It=ee.start*Yt,ce=(ee.start+ee.count)*Yt;wt!==null&&(It=Math.max(It,wt.start*Yt),ce=Math.min(ce,(wt.start+wt.count)*Yt)),kt!==null?(It=Math.max(It,0),ce=Math.min(ce,kt.count)):se!=null&&(It=Math.max(It,0),ce=Math.min(ce,se.count));const qe=ce-It;if(qe<0||qe===1/0)return;Tt.setup(Z,tt,Dt,st,kt);let Ye,Re=ue;if(kt!==null&&(Ye=xt.get(kt),Re=W,Re.setIndex(Ye)),Z.isMesh)tt.wireframe===!0?(Wt.setLineWidth(tt.wireframeLinewidth*Ze()),Re.setMode(V.LINES)):Re.setMode(V.TRIANGLES);else if(Z.isLine){let dn=tt.linewidth;dn===void 0&&(dn=1),Wt.setLineWidth(dn*Ze()),Z.isLineSegments?Re.setMode(V.LINES):Z.isLineLoop?Re.setMode(V.LINE_LOOP):Re.setMode(V.LINE_STRIP)}else Z.isPoints?Re.setMode(V.POINTS):Z.isSprite&&Re.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ku("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Re.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const dn=Z._multiDrawStarts,Gt=Z._multiDrawCounts,Dn=Z._multiDrawCount,ie=kt?xt.get(kt).bytesPerElement:1,Un=y.get(tt).currentProgram.getUniforms();for(let qn=0;qn<Dn;qn++)Un.setValue(V,"_gl_DrawID",qn),Re.render(dn[qn]/ie,Gt[qn])}else if(Z.isInstancedMesh)Re.renderInstances(It,qe,Z.count);else if(st.isInstancedBufferGeometry){const dn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Gt=Math.min(st.instanceCount,dn);Re.renderInstances(It,qe,Gt)}else Re.render(It,qe)};function Ir(R,k,st){R.transparent===!0&&R.side===ma&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Sa(R,k,st),R.side=es,R.needsUpdate=!0,Sa(R,k,st),R.side=ma):Sa(R,k,st)}this.compile=function(R,k,st=null){st===null&&(st=R),G=yt.get(st),G.init(k),z.push(G),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(G.pushLight(Z),Z.castShadow&&G.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(G.pushLight(Z),Z.castShadow&&G.pushShadow(Z))}),G.setupLights();const tt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const wt=Z.material;if(wt)if(Array.isArray(wt))for(let Bt=0;Bt<wt.length;Bt++){const Dt=wt[Bt];Ir(Dt,st,Z),tt.add(Dt)}else Ir(wt,st,Z),tt.add(wt)}),G=z.pop(),tt},this.compileAsync=function(R,k,st=null){const tt=this.compile(R,k,st);return new Promise(Z=>{function wt(){if(tt.forEach(function(Bt){y.get(Bt).currentProgram.isReady()&&tt.delete(Bt)}),tt.size===0){Z(R);return}setTimeout(wt,10)}be.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ns=null;function Zo(R){Ns&&Ns(R)}function Ls(){Ui.stop()}function Os(){Ui.start()}const Ui=new sv;Ui.setAnimationLoop(Zo),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Ns=R,ut.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},ut.addEventListener("sessionstart",Ls),ut.addEventListener("sessionend",Os),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const st=ut.enabled===!0&&ut.isPresenting===!0,tt=T!==null&&(at===null||st)&&T.begin(D,at);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,k,at),G=yt.get(R,z.length),G.init(k),z.push(G),Ke.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Vt.setFromProjectionMatrix(Ke,Hi,k.reversedDepth),$t=this.localClippingEnabled,Kt=St.init(this.clippingPlanes,$t),N=te.get(R,I.length),N.init(),I.push(N),ut.enabled===!0&&ut.isPresenting===!0){const Bt=D.xr.getDepthSensingMesh();Bt!==null&&Ps(Bt,k,-1/0,D.sortObjects)}Ps(R,k,0,D.sortObjects),N.finish(),D.sortObjects===!0&&N.sort(At,zt),oe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,oe&&Nt.addToRenderList(N,R),this.info.render.frame++,Kt===!0&&St.beginShadows();const Z=G.state.shadowsArray;if(Lt.render(Z,R,k),Kt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&T.hasRenderPass())===!1){const Bt=N.opaque,Dt=N.transmissive;if(G.setupLights(),k.isArrayCamera){const kt=k.cameras;if(Dt.length>0)for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const se=kt[Yt];an(Bt,Dt,R,se)}oe&&Nt.render(R);for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const se=kt[Yt];xi(N,R,se,se.viewport)}}else Dt.length>0&&an(Bt,Dt,R,k),oe&&Nt.render(R),xi(N,R,k)}at!==null&&$===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),tt&&T.end(D),R.isScene===!0&&R.onAfterRender(D,R,k),Tt.resetDefaultState(),lt=-1,J=null,z.pop(),z.length>0?(G=z[z.length-1],Kt===!0&&St.setGlobalState(D.clippingPlanes,G.state.camera)):G=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function Ps(R,k,st,tt){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)G.pushLight(R),R.castShadow&&G.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){tt&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ke);const Bt=Xt.update(R),Dt=R.material;Dt.visible&&N.push(R,Bt,Dt,st,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Bt=Xt.update(R),Dt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),me.copy(Bt.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(Ke)),Array.isArray(Dt)){const kt=Bt.groups;for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const se=kt[Yt],It=Dt[se.materialIndex];It&&It.visible&&N.push(R,Bt,It,st,me.z,se)}}else Dt.visible&&N.push(R,Bt,Dt,st,me.z,null)}}const wt=R.children;for(let Bt=0,Dt=wt.length;Bt<Dt;Bt++)Ps(wt[Bt],k,st,tt)}function xi(R,k,st,tt){const{opaque:Z,transmissive:wt,transparent:Bt}=R;G.setupLightsView(st),Kt===!0&&St.setGlobalState(D.clippingPlanes,st),tt&&Wt.viewport(L.copy(tt)),Z.length>0&&hn(Z,k,st),wt.length>0&&hn(wt,k,st),Bt.length>0&&hn(Bt,k,st),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function an(R,k,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[tt.id]===void 0){const It=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[tt.id]=new kn(1,1,{generateMipmaps:!0,type:It?ii:gi,minFilter:ws,samples:Le.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const wt=G.state.transmissionRenderTarget[tt.id],Bt=tt.viewport||L;wt.setSize(Bt.z*D.transmissionResolutionScale,Bt.w*D.transmissionResolutionScale);const Dt=D.getRenderTarget(),kt=D.getActiveCubeFace(),Yt=D.getActiveMipmapLevel();D.setRenderTarget(wt),D.getClearColor(dt),Et=D.getClearAlpha(),Et<1&&D.setClearColor(16777215,.5),D.clear(),oe&&Nt.render(st);const ee=D.toneMapping;D.toneMapping=Vi;const se=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),G.setupLightsView(tt),Kt===!0&&St.setGlobalState(D.clippingPlanes,tt),hn(R,st,tt),q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt),be.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ce=0,qe=k.length;ce<qe;ce++){const Ye=k[ce],{object:Re,geometry:dn,material:Gt,group:Dn}=Ye;if(Gt.side===ma&&Re.layers.test(tt.layers)){const ie=Gt.side;Gt.side=Xn,Gt.needsUpdate=!0,Wi(Re,st,tt,dn,Gt,Dn),Gt.side=ie,Gt.needsUpdate=!0,It=!0}}It===!0&&(q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt))}D.setRenderTarget(Dt,kt,Yt),D.setClearColor(dt,Et),se!==void 0&&(tt.viewport=se),D.toneMapping=ee}function hn(R,k,st){const tt=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,wt=R.length;Z<wt;Z++){const Bt=R[Z],{object:Dt,geometry:kt,group:Yt}=Bt;let ee=Bt.material;ee.allowOverride===!0&&tt!==null&&(ee=tt),Dt.layers.test(st.layers)&&Wi(Dt,k,st,kt,ee,Yt)}}function Wi(R,k,st,tt,Z,wt){R.onBeforeRender(D,k,st,tt,Z,wt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,k,st,tt,R,wt),Z.transparent===!0&&Z.side===ma&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,D.renderBufferDirect(st,k,tt,Z,R,wt),Z.side=es,Z.needsUpdate=!0,D.renderBufferDirect(st,k,tt,Z,R,wt),Z.side=ma):D.renderBufferDirect(st,k,tt,Z,R,wt),R.onAfterRender(D,k,st,tt,Z,wt)}function Sa(R,k,st){k.isScene!==!0&&(k=Ue);const tt=y.get(R),Z=G.state.lights,wt=G.state.shadowsArray,Bt=Z.state.version,Dt=Ct.getParameters(R,Z.state,wt,k,st),kt=Ct.getProgramCacheKey(Dt);let Yt=tt.programs;tt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,tt.fog=k.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;tt.envMap=pt.get(R.envMap||tt.environment,ee),tt.envMapRotation=tt.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",Te),Yt=new Map,tt.programs=Yt);let se=Yt.get(kt);if(se!==void 0){if(tt.currentProgram===se&&tt.lightsStateVersion===Bt)return Qo(R,Dt),se}else Dt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Dt,D),se=Ct.acquireProgram(Dt,kt),Yt.set(kt,se),tt.uniforms=Dt.uniforms;const It=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(It.clippingPlanes=St.uniform),Qo(R,Dt),tt.needsLights=Hr(R),tt.lightsStateVersion=Bt,tt.needsLights&&(It.ambientLightColor.value=Z.state.ambient,It.lightProbe.value=Z.state.probe,It.directionalLights.value=Z.state.directional,It.directionalLightShadows.value=Z.state.directionalShadow,It.spotLights.value=Z.state.spot,It.spotLightShadows.value=Z.state.spotShadow,It.rectAreaLights.value=Z.state.rectArea,It.ltc_1.value=Z.state.rectAreaLTC1,It.ltc_2.value=Z.state.rectAreaLTC2,It.pointLights.value=Z.state.point,It.pointLightShadows.value=Z.state.pointShadow,It.hemisphereLights.value=Z.state.hemi,It.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,It.spotLightMatrix.value=Z.state.spotLightMatrix,It.spotLightMap.value=Z.state.spotLightMap,It.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=se,tt.uniformsList=null,se}function Ko(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Fu.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Qo(R,k){const st=y.get(R);st.outputColorSpace=k.outputColorSpace,st.batching=k.batching,st.batchingColor=k.batchingColor,st.instancing=k.instancing,st.instancingColor=k.instancingColor,st.instancingMorph=k.instancingMorph,st.skinning=k.skinning,st.morphTargets=k.morphTargets,st.morphNormals=k.morphNormals,st.morphColors=k.morphColors,st.morphTargetsCount=k.morphTargetsCount,st.numClippingPlanes=k.numClippingPlanes,st.numIntersection=k.numClipIntersection,st.vertexAlphas=k.vertexAlphas,st.vertexTangents=k.vertexTangents,st.toneMapping=k.toneMapping}function Jo(R,k,st,tt,Z){k.isScene!==!0&&(k=Ue),q.resetTextureUnits();const wt=k.fog,Bt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?k.environment:null,Dt=at===null?D.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Lr,kt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Yt=pt.get(tt.envMap||Bt,kt),ee=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,se=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),It=!!st.morphAttributes.position,ce=!!st.morphAttributes.normal,qe=!!st.morphAttributes.color;let Ye=Vi;tt.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ye=D.toneMapping);const Re=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,dn=Re!==void 0?Re.length:0,Gt=y.get(tt),Dn=G.state.lights;if(Kt===!0&&($t===!0||R!==J)){const rn=R===J&&tt.id===lt;St.setState(tt,R,rn)}let ie=!1;tt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Dn.state.version||Gt.outputColorSpace!==Dt||Z.isBatchedMesh&&Gt.batching===!1||!Z.isBatchedMesh&&Gt.batching===!0||Z.isBatchedMesh&&Gt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Gt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Gt.instancing===!1||!Z.isInstancedMesh&&Gt.instancing===!0||Z.isSkinnedMesh&&Gt.skinning===!1||!Z.isSkinnedMesh&&Gt.skinning===!0||Z.isInstancedMesh&&Gt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Gt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Gt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Gt.instancingMorph===!1&&Z.morphTexture!==null||Gt.envMap!==Yt||tt.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==St.numPlanes||Gt.numIntersection!==St.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==se||Gt.morphTargets!==It||Gt.morphNormals!==ce||Gt.morphColors!==qe||Gt.toneMapping!==Ye||Gt.morphTargetsCount!==dn)&&(ie=!0):(ie=!0,Gt.__version=tt.version);let Un=Gt.currentProgram;ie===!0&&(Un=Sa(tt,k,Z));let qn=!1,Si=!1,Yn=!1;const Oe=Un.getUniforms(),sn=Gt.uniforms;if(Wt.useProgram(Un.program)&&(qn=!0,Si=!0,Yn=!0),tt.id!==lt&&(lt=tt.id,Si=!0),qn||J!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(V,"projectionMatrix",R.projectionMatrix),Oe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Mi=Oe.map.cameraPosition;Mi!==void 0&&Mi.setValue(V,ve.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Oe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Oe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,Si=!0,Yn=!0)}if(Gt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Oe.setValue(V,"directionalShadowMap",Dn.state.directionalShadowMap,q),Dn.state.spotShadowMap.length>0&&Oe.setValue(V,"spotShadowMap",Dn.state.spotShadowMap,q),Dn.state.pointShadowMap.length>0&&Oe.setValue(V,"pointShadowMap",Dn.state.pointShadowMap,q)),Z.isSkinnedMesh){Oe.setOptional(V,Z,"bindMatrix"),Oe.setOptional(V,Z,"bindMatrixInverse");const rn=Z.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Oe.setValue(V,"boneTexture",rn.boneTexture,q))}Z.isBatchedMesh&&(Oe.setOptional(V,Z,"batchingTexture"),Oe.setValue(V,"batchingTexture",Z._matricesTexture,q),Oe.setOptional(V,Z,"batchingIdTexture"),Oe.setValue(V,"batchingIdTexture",Z._indirectTexture,q),Oe.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Oe.setValue(V,"batchingColorTexture",Z._colorsTexture,q));const Nn=st.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Ot.update(Z,st,Un),(Si||Gt.receiveShadow!==Z.receiveShadow)&&(Gt.receiveShadow=Z.receiveShadow,Oe.setValue(V,"receiveShadow",Z.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&k.environment!==null&&(sn.envMapIntensity.value=k.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=j1()),Si&&(Oe.setValue(V,"toneMappingExposure",D.toneMappingExposure),Gt.needsLights&&ns(sn,Yn),wt&&tt.fog===!0&&Zt.refreshFogUniforms(sn,wt),Zt.refreshMaterialUniforms(sn,tt,_t,Y,G.state.transmissionRenderTarget[R.id]),Fu.upload(V,Ko(Gt),sn,q)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Fu.upload(V,Ko(Gt),sn,q),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Oe.setValue(V,"center",Z.center),Oe.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Oe.setValue(V,"normalMatrix",Z.normalMatrix),Oe.setValue(V,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const rn=tt.uniformsGroups;for(let Mi=0,qi=rn.length;Mi<qi;Mi++){const zs=rn[Mi];Pt.update(zs,Un),Pt.bind(zs,Un)}}return Un}function ns(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Hr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(R,k,st){const tt=y.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),y.get(R.texture).__webglTexture=k,y.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const st=y.get(R);st.__webglFramebuffer=k,st.__useDefaultFramebuffer=k===void 0};const Ma=V.createFramebuffer();this.setRenderTarget=function(R,k=0,st=0){at=R,H=k,$=st;let tt=null,Z=!1,wt=!1;if(R){const Dt=y.get(R);if(Dt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,Dt.__webglFramebuffer),L.copy(R.viewport),B.copy(R.scissor),ot=R.scissorTest,Wt.viewport(L),Wt.scissor(B),Wt.setScissorTest(ot),lt=-1;return}else if(Dt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Dt.__hasExternalTextures)q.rebindTextures(R,y.get(R.texture).__webglTexture,y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&y.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(wt=!0);const Yt=y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?tt=Yt[k][st]:tt=Yt[k],Z=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?tt=y.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?tt=Yt[st]:tt=Yt,L.copy(R.viewport),B.copy(R.scissor),ot=R.scissorTest}else L.copy(et).multiplyScalar(_t).floor(),B.copy(vt).multiplyScalar(_t).floor(),ot=bt;if(st!==0&&(tt=Ma),Wt.bindFramebuffer(V.FRAMEBUFFER,tt)&&Wt.drawBuffers(R,tt),Wt.viewport(L),Wt.scissor(B),Wt.setScissorTest(ot),Z){const Dt=y.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,st)}else if(wt){const Dt=k;for(let kt=0;kt<R.textures.length;kt++){const Yt=y.get(R.textures[kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,st,Dt)}}else if(R!==null&&st!==0){const Dt=y.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dt.__webglTexture,st)}lt=-1},this.readRenderTargetPixels=function(R,k,st,tt,Z,wt,Bt,Dt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);try{const Yt=R.textures[Dt],ee=Yt.format,se=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Le.textureFormatReadable(ee)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(se)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-tt&&st>=0&&st<=R.height-Z&&V.readPixels(k,st,tt,Z,Rt.convert(ee),Rt.convert(se),wt)}finally{const Yt=at!==null?y.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,k,st,tt,Z,wt,Bt,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt)if(k>=0&&k<=R.width-tt&&st>=0&&st<=R.height-Z){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);const Yt=R.textures[Dt],ee=Yt.format,se=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Le.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,It),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),V.readPixels(k,st,tt,Z,Rt.convert(ee),Rt.convert(se),0);const ce=at!==null?y.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,ce);const qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await gM(V,qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,It),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.deleteBuffer(It),V.deleteSync(qe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,st=0){const tt=Math.pow(2,-st),Z=Math.floor(R.image.width*tt),wt=Math.floor(R.image.height*tt),Bt=k!==null?k.x:0,Dt=k!==null?k.y:0;q.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Bt,Dt,Z,wt),Wt.unbindTexture()};const ya=V.createFramebuffer(),is=V.createFramebuffer();this.copyTextureToTexture=function(R,k,st=null,tt=null,Z=0,wt=0){let Bt,Dt,kt,Yt,ee,se,It,ce,qe;const Ye=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(st!==null)Bt=st.max.x-st.min.x,Dt=st.max.y-st.min.y,kt=st.isBox3?st.max.z-st.min.z:1,Yt=st.min.x,ee=st.min.y,se=st.isBox3?st.min.z:0;else{const sn=Math.pow(2,-Z);Bt=Math.floor(Ye.width*sn),Dt=Math.floor(Ye.height*sn),R.isDataArrayTexture?kt=Ye.depth:R.isData3DTexture?kt=Math.floor(Ye.depth*sn):kt=1,Yt=0,ee=0,se=0}tt!==null?(It=tt.x,ce=tt.y,qe=tt.z):(It=0,ce=0,qe=0);const Re=Rt.convert(k.format),dn=Rt.convert(k.type);let Gt;k.isData3DTexture?(q.setTexture3D(k,0),Gt=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(q.setTexture2DArray(k,0),Gt=V.TEXTURE_2D_ARRAY):(q.setTexture2D(k,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const Dn=V.getParameter(V.UNPACK_ROW_LENGTH),ie=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),qn=V.getParameter(V.UNPACK_SKIP_ROWS),Si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ye.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,se);const Yn=R.isDataArrayTexture||R.isData3DTexture,Oe=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const sn=y.get(R),Nn=y.get(k),rn=y.get(sn.__renderTarget),Mi=y.get(Nn.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,rn.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let qi=0;qi<kt;qi++)Yn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,y.get(R).__webglTexture,Z,se+qi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,y.get(k).__webglTexture,wt,qe+qi)),V.blitFramebuffer(Yt,ee,Bt,Dt,It,ce,Bt,Dt,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||y.has(R)){const sn=y.get(R),Nn=y.get(k);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,ya),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,is);for(let rn=0;rn<kt;rn++)Yn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,Z,se+rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,Z),Oe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nn.__webglTexture,wt,qe+rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nn.__webglTexture,wt),Z!==0?V.blitFramebuffer(Yt,ee,Bt,Dt,It,ce,Bt,Dt,V.COLOR_BUFFER_BIT,V.NEAREST):Oe?V.copyTexSubImage3D(Gt,wt,It,ce,qe+rn,Yt,ee,Bt,Dt):V.copyTexSubImage2D(Gt,wt,It,ce,Yt,ee,Bt,Dt);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Gt,wt,It,ce,qe,Bt,Dt,kt,Re,dn,Ye.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,wt,It,ce,qe,Bt,Dt,kt,Re,Ye.data):V.texSubImage3D(Gt,wt,It,ce,qe,Bt,Dt,kt,Re,dn,Ye):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,It,ce,Bt,Dt,Re,dn,Ye.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,It,ce,Ye.width,Ye.height,Re,Ye.data):V.texSubImage2D(V.TEXTURE_2D,wt,It,ce,Bt,Dt,Re,dn,Ye);V.pixelStorei(V.UNPACK_ROW_LENGTH,Dn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ie),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,qn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Si),wt===0&&k.generateMipmaps&&V.generateMipmap(Gt),Wt.unbindTexture()},this.initRenderTarget=function(R){y.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){H=0,$=0,at=null,Wt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Iu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class jo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const K1=new Wd(-1,1,1,-1,0,1);class Q1 extends _i{constructor(){super(),this.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Di([0,2,0,0,2,0],2))}}const J1=new Q1;class fv{constructor(e){this._mesh=new ki(J1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,K1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $1 extends jo{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wu.clone(e.uniforms),this.material=new bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fv(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class D_ extends jo{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),u=e.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let h,p;this.inverse?(h=0,p=1):(h=1,p=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),u.buffers.stencil.setClear(p),u.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class tA extends jo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class eA{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new de);this._width=s.width,this._height=s.height,i=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $1(Iu),this.copyPass.material.blending=Gi,this.timer=new $M}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),h.needsSwap){if(s){const p=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}D_!==void 0&&(h instanceof D_?s=!0:h instanceof tA&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nA extends jo{constructor(e,i,s=null,l=null,u=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ee}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let u,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(u=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const iA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Pr extends jo{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(u,h,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const S=new kn(u,h,{type:ii});S.texture.name="UnrealBloomPass.h"+v,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const _=new kn(u,h,{type:ii});_.texture.name="UnrealBloomPass.v"+v,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),u=Math.round(u/2),h=Math.round(h/2)}const p=iA;this.highPassUniforms=Wu.clone(p.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bn({uniforms:this.highPassUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new de(1/u,1/h),u=Math.round(u/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new it(1,1,1),new it(1,1,1),new it(1,1,1),new it(1,1,1),new it(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wu.clone(Iu.uniforms),this.blendMaterial=new bn({uniforms:this.copyUniforms,vertexShader:Iu.vertexShader,fragmentShader:Iu.fragmentShader,premultipliedAlpha:!0,blending:Hu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ee,this._oldClearAlpha=1,this._basic=new kd,this._fsQuad=new fv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new de(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,u){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),u&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let p=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=p.texture,this.separableBlurMaterials[m].uniforms.direction.value=Pr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Pr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),p=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[],s=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new bn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new bn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Pr.BlurDirectionX=new de(1,0);Pr.BlurDirectionY=new de(0,1);const aA=`uniform float uTime;
uniform float uPixelRatio;
uniform vec2 uMouse; 

attribute vec3 aRandom;
attribute float aSize;

varying vec3 vPosition;
varying float vNoise;
varying vec3 vRandom; 

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}

float fbm(vec3 x) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100.0);
    for (int i = 0; i < 3; ++i) {
        v += a * snoise(x);
        x = x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec3 newPosition = position;
    vRandom = aRandom; 

    float time = uTime; 

    float distanceToCenter = length(newPosition.xz);
    float twistAngle = distanceToCenter * 0.15; 
    
    float cosA = cos(twistAngle);
    float sinA = sin(twistAngle);
    
    float rotX = newPosition.x * cosA - newPosition.z * sinA;
    float rotZ = newPosition.x * sinA + newPosition.z * cosA;
    newPosition.x = rotX;
    newPosition.z = rotZ;
    
    float mouseEffect = snoise(vec3(newPosition.xy * 0.3, uMouse.x * uMouse.y));
    float noise = fbm(newPosition * 0.15 + time * 0.05 + mouseEffect * 0.5); 
    
    vec3 dir = length(newPosition) > 0.0001 ? normalize(newPosition) : vec3(0.0, 1.0, 0.0);
    newPosition += dir * noise * 0.2; 
    
    float distToMouse = distance(uMouse, newPosition.xy / 10.0);
    float repulsion = smoothstep(1.0, 0.0, distToMouse);
    vec2 dirXY = length(newPosition.xy) > 0.0001 ? normalize(newPosition.xy) : vec2(1.0, 0.0);
    newPosition += vec3(dirXY, 0.0) * repulsion * 1.5;

    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    gl_PointSize = aSize * 15.0 * uPixelRatio; 
    gl_PointSize *= (1.0 / -viewPosition.z);

    vPosition = newPosition;
    vNoise = noise;
}`,sA=`uniform float uTime;
uniform vec3 uColorBase; 
uniform vec3 uColorRim;  

varying vec3 vPosition;
varying vec3 vRandom;
varying float vNoise; 

void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / dist - 0.1;
    strength = clamp(strength, 0.0, 1.0); 
    float alpha = strength * 1.0; 

    float distanceToCenter = length(vPosition.xz);
    
    vec3 coreColor = vec3(1.0, 0.9, 0.8); 
    vec3 armColor = mix(uColorRim, vec3(1.0, 0.4, 0.1), vNoise * 0.5); 

    float mixFactor = smoothstep(2.0, 15.0, distanceToCenter + vNoise * 2.0);
    vec3 finalColor = mix(coreColor, armColor, mixFactor);

    float edgeFactor = smoothstep(15.0, 35.0, distanceToCenter);
    finalColor = mix(finalColor, uColorBase, edgeFactor);

    if (vRandom.z > 0.98) { 
        finalColor = vec3(1.5, 1.5, 1.5); 
        alpha = strength * (0.8 + sin(uTime * 0.3 + vRandom.x * 15.0) * 0.5); 
    }

    gl_FragColor = vec4(finalColor, alpha);
}`,rA=()=>{const o=ts.useRef(null);return ts.useEffect(()=>{if(!o.current)return;const e=new NM,i=new mi(60,window.innerWidth/window.innerHeight,.1,1e3);i.position.set(0,0,45),i.lookAt(0,0,0);const s=new Z1({antialias:!0,powerPreference:"high-performance"});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),s.setClearColor(0),o.current.appendChild(s.domElement);const l=new eA(s);l.setPixelRatio(window.devicePixelRatio),l.addPass(new nA(e,i)),l.addPass(new Pr(new de(window.innerWidth,window.innerHeight),1.6,.1,.1));const u=2e5,h=new _i,p=new Float32Array(u*3),m=new Float32Array(u*3),d=new Float32Array(u);for(let x=0;x<u;x++){const C=x*3,P=Math.random(),N=4;if(P<.6){const G=Math.pow(Math.random(),2)*20+N,I=Math.random()*Math.PI*2,z=1+Math.max(0,Math.cos(I))*.45;p[C]=Math.cos(I)*G*1.8*z,p[C+1]=(Math.random()-.5)*3.5*(1-N/G),p[C+2]=Math.sin(I)*G*.5,d[x]=Math.random()*1+.2}else if(P<.85){const G=Math.random()>.5?1:-1,I=Math.pow(Math.random(),1.2)*35+N,z=I*.3+1,T=Math.random()*Math.PI*2,D=Math.random()*z,ht=(I-N)/35,H=Math.pow(ht,2)*15;p[C]=Math.cos(T)*D-H*G,p[C+1]=I*G,p[C+2]=Math.sin(T)*D,d[x]=Math.random()*1.2+.3}else{const G=Math.pow(Math.random(),1.5)*100+15,I=Math.random()*Math.PI*2,z=Math.acos(Math.random()*2-1);p[C]=G*Math.sin(z)*Math.cos(I),p[C+1]=G*Math.sin(z)*Math.sin(I),p[C+2]=G*Math.cos(z),d[x]=Math.random()*.5+.1}m[C]=Math.random(),m[C+1]=Math.random(),m[C+2]=Math.random()}h.setAttribute("position",new ai(p,3)),h.setAttribute("aRandom",new ai(m,3)),h.setAttribute("aSize",new ai(d,1));const v=new bn({vertexShader:aA,fragmentShader:sA,uniforms:{uTime:{value:0},uPixelRatio:{value:window.devicePixelRatio},uMouse:{value:new de(0,0)},uColorBase:{value:new Ee("#ffffff")},uColorRim:{value:new Ee("#ff55aa")}},transparent:!0,blending:Hu,depthWrite:!1}),S=new XM(h,v);S.rotation.z=-Math.PI/6,S.rotation.x=Math.PI/8,e.add(S);const _=new ey,E=new de(0,0),b=x=>{E.x=x.clientX/window.innerWidth*2-1,E.y=-(x.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",b);const w=()=>{const x=_.getElapsedTime(),C=_.getDelta();v.uniforms.uTime.value=x*.1,v.uniforms.uMouse.value.lerp(E,.05),i.position.x+=(E.x*15-i.position.x)*.05,i.position.y+=(E.y*15-i.position.y)*.05,i.lookAt(0,0,0),S.rotateY(-C*.02),l.render(),requestAnimationFrame(w)};w();const M=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",M),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("resize",M),s.dispose(),l.dispose(),h.dispose(),v.dispose(),o.current&&o.current.removeChild(s.domElement)}},[]),jt.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,zIndex:-1,background:"black"}})};function oA(){const[o,e]=ts.useState(!1);return jt.jsxs("div",{className:`flex min-h-screen text-white font-sans selection:bg-gray-700 ${o?"bg-transparent":"bg-[#0a0a0b]"}`,children:[o&&jt.jsx(rA,{}),jt.jsx(OS,{}),jt.jsxs("aside",{className:"fixed left-0 top-0 h-screen w-18 bg-[#141416]/80 backdrop-blur-md flex flex-col items-center py-8 space-y-12 z-30",children:[jt.jsxs("div",{className:"flex flex-col items-center cursor-pointer group",children:[jt.jsx("img",{src:"/SleighRide/images/me.jpg",alt:"HOME",className:"w-14 h-14 rounded-2xl object-cover mb-1 transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]"}),jt.jsx("span",{className:"text-[10px] font-bold text-gray-400",children:"HOME"})]}),[{id:"books",label:"BOOKS",sub:"Archive"},{id:"reviews",label:"GEAR",sub:"Review"},{id:"human",label:"HFE",sub:"Ergo"}].map(i=>jt.jsxs("div",{className:"flex flex-col items-center opacity-40 hover:opacity-100 transition-all cursor-pointer group",children:[jt.jsxs("div",{className:"text-[11px] font-semi text-center leading-tight group-hover:text-white",children:[i.label,jt.jsx("br",{}),i.sub]}),jt.jsx("div",{className:"w-1 h-1 bg-white rounded-full mt-2 scale-0 group-hover:scale-100 transition-transform"})]},i.id))]}),jt.jsxs("div",{className:"flex-1 ml-24 relative",children:[jt.jsxs("section",{className:"h-screen relative flex flex-col",children:[!o&&jt.jsx(LS,{}),jt.jsx("nav",{className:"h-20 flex items-center px-10 z-20",children:jt.jsx("span",{className:"text-xs font-semi uppercase tracking-[0.4em] text-white/70",children:"Personal Archive"})}),jt.jsxs("main",{className:"flex-1 flex flex-col justify-center items-center text-center px-4 z-10",children:[jt.jsxs("div",{onClick:()=>e(!o),className:"fixed bottom-10 right-10 z-50 flex items-center space-x-3 bg-[#1a1b1e]/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-[#25262b] hover:border-white/20 transition-all group shadow-2xl shadow-black/50",children:[jt.jsx("div",{className:"w-2 h-2 bg-[#7e79e6] rounded-full animate-intense-pulse"}),jt.jsxs("div",{className:"flex flex-col items-start leading-none",children:[jt.jsx("span",{className:"text-[9px] font-black text-[#7e79e6] tracking-widest uppercase mb-0.5",children:"System"}),jt.jsx("span",{className:"text-[11px] text-gray-300 group-hover:text-white transition-colors",children:o?"Switch to Photo":"Switch to Galaxy"})]}),jt.jsx("div",{className:"w-[1px] h-4 bg-white/10 mx-1"}),jt.jsx("span",{className:"text-[11px] text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-0.5",children:"〉"})]}),jt.jsx("h1",{className:"text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 drop-shadow-2xl"}),jt.jsx("p",{className:"text-[10px] md:text-xs text-white max-w-xl font-semi tracking-[0.4em] uppercase text-glow-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse-glow mt-12",children:"WRITING DOWN ABOUT PHOTOGRAPH / GEAR / BOOK"}),jt.jsxs("div",{className:"absolute bottom-16 flex flex-col items-center z-20 opacity-30",children:[jt.jsx("span",{className:"text-[10px] font-bold tracking-[0.4em] uppercase text-white mb-2",children:"Scroll Down"}),jt.jsx("span",{className:"text-2xl animate-bounce",children:"∨"})]})]})]}),jt.jsxs("section",{className:`px-12 py-24 space-y-32 relative z-10 transition-colors duration-500 ${o?"bg-transparent":"bg-[#0a0a0b]"}`,children:[jt.jsxs("div",{id:"human",className:"max-w-5xl mx-auto",children:[jt.jsx("h2",{className:"text-sm font-bold tracking-[0.5em] text-gray-500 mb-8 uppercase border-b border-gray-800 pb-4",children:"01 / Human Factors"}),jt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[jt.jsx("div",{className:"aspect-video bg-[#141416]/50 border border-gray-800 rounded-sm flex items-center justify-center backdrop-blur-sm",children:jt.jsx("span",{className:"text-gray-600 italic font-light",children:"Concept Image / Illustration"})}),jt.jsxs("div",{className:"flex flex-col justify-center",children:[jt.jsxs("h3",{className:"text-3xl font-light mb-4 text-white leading-tight",children:["What is the important ",jt.jsx("br",{}),"concept I think is"]}),jt.jsx("p",{className:"text-gray-400 leading-relaxed font-light text-lg",children:"Writing my thoughts about ergonomics."})]})]})]}),jt.jsxs("div",{id:"books",className:"max-w-5xl mx-auto",children:[jt.jsx("h2",{className:"text-sm font-bold tracking-[0.5em] text-gray-500 mb-8 uppercase border-b border-gray-800 pb-4",children:"02 / Book Archive"}),jt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[1,2,3].map(i=>jt.jsxs("div",{className:"group cursor-pointer",children:[jt.jsx("div",{className:"aspect-[3/4] bg-[#141416]/50 backdrop-blur-sm border border-gray-800 mb-4 transition-all group-hover:border-white/30 group-hover:-translate-y-2"}),jt.jsxs("h4",{className:"font-medium text-white tracking-tight",children:["Book Title ",i]}),jt.jsx("p",{className:"text-xs text-gray-500 mt-1 uppercase tracking-widest",children:"Read in 2026"})]},i))})]})]})]})]})}TS.createRoot(document.getElementById("root")).render(jt.jsx(ts.StrictMode,{children:jt.jsx(oA,{})}));
