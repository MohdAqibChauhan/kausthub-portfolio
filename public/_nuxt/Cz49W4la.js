(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();function gu(t){const e=Object.create(null);for(const i of t.split(","))e[i]=1;return i=>i in e}const Fe={},zn=[],Gi=()=>{},wp=()=>!1,go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Na=t=>t.startsWith("onUpdate:"),gt=Object.assign,mu=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},xv=Object.prototype.hasOwnProperty,ze=(t,e)=>xv.call(t,e),de=Array.isArray,Bn=t=>cr(t)==="[object Map]",lr=t=>cr(t)==="[object Set]",mh=t=>cr(t)==="[object Date]",kv=t=>cr(t)==="[object RegExp]",ve=t=>typeof t=="function",qe=t=>typeof t=="string",li=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",vu=t=>(Le(t)||ve(t))&&ve(t.then)&&ve(t.catch),bp=Object.prototype.toString,cr=t=>bp.call(t),Tv=t=>cr(t).slice(8,-1),_p=t=>cr(t)==="[object Object]",Da=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cn=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return(i=>e[i]||(e[i]=t(i)))},Sv=/-\w/g,At=La(t=>t.replace(Sv,e=>e.slice(1).toUpperCase())),Ev=/\B([A-Z])/g,Vs=La(t=>t.replace(Ev,"-$1").toLowerCase()),Ia=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),gl=La(t=>t?`on${Ia(t)}`:""),Tt=(t,e)=>!Object.is(t,e),Un=(t,...e)=>{for(let i=0;i<t.length;i++)t[i](...e)},xp=(t,e,i,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:i})},za=t=>{const e=parseFloat(t);return isNaN(e)?t:e},kp=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let vh;const Ba=()=>vh||(vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mo(t){if(de(t)){const e={};for(let i=0;i<t.length;i++){const s=t[i],n=qe(s)?Mv(s):mo(s);if(n)for(const r in n)e[r]=n[r]}return e}else if(qe(t)||Le(t))return t}const Rv=/;(?![^(]*\))/g,Pv=/:([^]+)/,Cv=/\/\*[^]*?\*\//g;function Mv(t){const e={};return t.replace(Cv,"").split(Rv).forEach(i=>{if(i){const s=i.split(Pv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function It(t){let e="";if(qe(t))e=t;else if(de(t))for(let i=0;i<t.length;i++){const s=It(t[i]);s&&(e+=s+" ")}else if(Le(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const Av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ov=gu(Av);function Tp(t){return!!t||t===""}function Fv(t,e){if(t.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<t.length;s++)i=Ds(t[s],e[s]);return i}function Ds(t,e){if(t===e)return!0;let i=mh(t),s=mh(e);if(i||s)return i&&s?t.getTime()===e.getTime():!1;if(i=li(t),s=li(e),i||s)return t===e;if(i=de(t),s=de(e),i||s)return i&&s?Fv(t,e):!1;if(i=Le(t),s=Le(e),i||s){if(!i||!s)return!1;const n=Object.keys(t).length,r=Object.keys(e).length;if(n!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ds(t[o],e[o]))return!1}}return String(t)===String(e)}function yu(t,e){return t.findIndex(i=>Ds(i,e))}const Sp=t=>!!(t&&t.__v_isRef===!0),wu=t=>qe(t)?t:t==null?"":de(t)||Le(t)&&(t.toString===bp||!ve(t.toString))?Sp(t)?wu(t.value):JSON.stringify(t,Ep,2):String(t),Ep=(t,e)=>Sp(e)?Ep(t,e.value):Bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((i,[s,n],r)=>(i[ml(s,r)+" =>"]=n,i),{})}:lr(e)?{[`Set(${e.size})`]:[...e.values()].map(i=>ml(i))}:li(e)?ml(e):Le(e)&&!de(e)&&!_p(e)?String(e):e,ml=(t,e="")=>{var i;return li(t)?`Symbol(${(i=t.description)!=null?i:e})`:t};let yt;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&yt&&(yt.active?(this.parent=yt,this.index=(yt.scopes||(yt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,i;if(this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].pause()}for(e=0,i=this.effects.length;e<i;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,i;if(this.scopes){const n=this.scopes.slice();for(e=0,i=n.length;e<i;e++)n[e].resume()}const s=this.effects.slice();for(e=0,i=s.length;e<i;e++)s[e].resume()}}run(e){if(this._active){const i=yt;try{return yt=this,e()}finally{yt=i}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){if(this._on>0&&--this._on===0){if(yt===this)yt=this.prevScope;else{let e=yt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let i,s;for(i=0,s=this.effects.length;i<s;i++)this.effects[i].stop();for(this.effects.length=0,i=0,s=this.cleanups.length;i<s;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){const n=this.scopes.slice();for(i=0,s=n.length;i<s;i++)n[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Nv(t){return new Rp(t)}function ur(){return yt}function Pp(t,e=!1){yt&&yt.cleanups.push(t)}let $e;const vl=new WeakSet;class Cp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&(yt.active?yt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vl.has(this)&&(vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ap(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yh(this),Op(this);const e=$e,i=Ei;$e=this,Ei=!0;try{return this.fn()}finally{Fp(this),$e=e,Ei=i,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xu(e);this.deps=this.depsTail=void 0,yh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pc(this)&&this.run()}get dirty(){return pc(this)}}let Mp=0,Lr,Ir;function Ap(t,e=!1){if(t.flags|=8,e){t.next=Ir,Ir=t;return}t.next=Lr,Lr=t}function bu(){Mp++}function _u(){if(--Mp>0)return;if(Ir){let e=Ir;for(Ir=void 0;e;){const i=e.next;e.next=void 0,e.flags&=-9,e=i}}let t;for(;Lr;){let e=Lr;for(Lr=void 0;e;){const i=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=i}}if(t)throw t}function Op(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fp(t){let e,i=t.depsTail,s=i;for(;s;){const n=s.prevDep;s.version===-1?(s===i&&(i=n),xu(s),Dv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}t.deps=e,t.depsTail=i}function pc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Np(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Np(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yr)||(t.globalVersion=Yr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!pc(t))))return;t.flags|=2;const e=t.dep,i=$e,s=Ei;$e=t,Ei=!0;try{Op(t);const n=t.fn(t._value);(e.version===0||Tt(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(n){throw e.version++,n}finally{$e=i,Ei=s,Fp(t),t.flags&=-3}}function xu(t,e=!1){const{dep:i,prevSub:s,nextSub:n}=t;if(s&&(s.nextSub=n,t.prevSub=void 0),n&&(n.prevSub=s,t.nextSub=void 0),i.subs===t&&(i.subs=s,!s&&i.computed)){i.computed.flags&=-5;for(let r=i.computed.deps;r;r=r.nextDep)xu(r,!0)}!e&&!--i.sc&&i.map&&i.map.delete(i.key)}function Dv(t){const{prevDep:e,nextDep:i}=t;e&&(e.nextDep=i,t.prevDep=void 0),i&&(i.prevDep=e,t.nextDep=void 0)}let Ei=!0;const Dp=[];function ds(){Dp.push(Ei),Ei=!1}function ps(){const t=Dp.pop();Ei=t===void 0?!0:t}function yh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const i=$e;$e=void 0;try{e()}finally{$e=i}}}let Yr=0;class Lv{constructor(e,i){this.sub=e,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ua{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!$e||!Ei||$e===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==$e)i=this.activeLink=new Lv($e,this),$e.deps?(i.prevDep=$e.depsTail,$e.depsTail.nextDep=i,$e.depsTail=i):$e.deps=$e.depsTail=i,Lp(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const s=i.nextDep;s.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=s),i.prevDep=$e.depsTail,i.nextDep=void 0,$e.depsTail.nextDep=i,$e.depsTail=i,$e.deps===i&&($e.deps=s)}return i}trigger(e){this.version++,Yr++,this.notify(e)}notify(e){bu();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{_u()}}}function Lp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Lp(s)}const i=t.dep.subs;i!==t&&(t.prevSub=i,i&&(i.nextSub=t)),t.dep.subs=t}}const ta=new WeakMap,un=Symbol(""),gc=Symbol(""),Xr=Symbol("");function Rt(t,e,i){if(Ei&&$e){let s=ta.get(t);s||ta.set(t,s=new Map);let n=s.get(i);n||(s.set(i,n=new Ua),n.map=s,n.key=i),n.track()}}function as(t,e,i,s,n,r){const o=ta.get(t);if(!o){Yr++;return}const a=l=>{l&&l.trigger()};if(bu(),e==="clear")o.forEach(a);else{const l=de(t),u=l&&Da(i);if(l&&i==="length"){const c=Number(s);o.forEach((h,f)=>{(f==="length"||f===Xr||!li(f)&&f>=c)&&a(h)})}else switch((i!==void 0||o.has(void 0))&&a(o.get(i)),u&&a(o.get(Xr)),e){case"add":l?u&&a(o.get("length")):(a(o.get(un)),Bn(t)&&a(o.get(gc)));break;case"delete":l||(a(o.get(un)),Bn(t)&&a(o.get(gc)));break;case"set":Bn(t)&&a(o.get(un));break}}_u()}function Iv(t,e){const i=ta.get(t);return i&&i.get(e)}function xn(t){const e=Oe(t);return e===t?e:(Rt(e,"iterate",Xr),oi(t)?e:e.map(Ri))}function Va(t){return Rt(t=Oe(t),"iterate",Xr),t}function Ii(t,e){return ji(t)?Yn(Cs(t)?Ri(e):e):Ri(e)}const zv={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,t=>Ii(this,t))},concat(...t){return xn(this).concat(...t.map(e=>de(e)?xn(e):e))},entries(){return yl(this,"entries",t=>(t[1]=Ii(this,t[1]),t))},every(t,e){return Yi(this,"every",t,e,void 0,arguments)},filter(t,e){return Yi(this,"filter",t,e,i=>i.map(s=>Ii(this,s)),arguments)},find(t,e){return Yi(this,"find",t,e,i=>Ii(this,i),arguments)},findIndex(t,e){return Yi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Yi(this,"findLast",t,e,i=>Ii(this,i),arguments)},findLastIndex(t,e){return Yi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Yi(this,"forEach",t,e,void 0,arguments)},includes(...t){return wl(this,"includes",t)},indexOf(...t){return wl(this,"indexOf",t)},join(t){return xn(this).join(t)},lastIndexOf(...t){return wl(this,"lastIndexOf",t)},map(t,e){return Yi(this,"map",t,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...t){return wr(this,"push",t)},reduce(t,...e){return wh(this,"reduce",t,e)},reduceRight(t,...e){return wh(this,"reduceRight",t,e)},shift(){return wr(this,"shift")},some(t,e){return Yi(this,"some",t,e,void 0,arguments)},splice(...t){return wr(this,"splice",t)},toReversed(){return xn(this).toReversed()},toSorted(t){return xn(this).toSorted(t)},toSpliced(...t){return xn(this).toSpliced(...t)},unshift(...t){return wr(this,"unshift",t)},values(){return yl(this,"values",t=>Ii(this,t))}};function yl(t,e,i){const s=Va(t),n=s[e]();return s!==t&&!oi(t)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=i(r.value)),r}),n}const Bv=Array.prototype;function Yi(t,e,i,s,n,r){const o=Va(t),a=o!==t&&!oi(t),l=o[e];if(l!==Bv[e]){const h=l.apply(t,r);return a?Ri(h):h}let u=i;o!==t&&(a?u=function(h,f){return i.call(this,Ii(t,h),f,t)}:i.length>2&&(u=function(h,f){return i.call(this,h,f,t)}));const c=l.call(o,u,s);return a&&n?n(c):c}function wh(t,e,i,s){const n=Va(t),r=n!==t&&!oi(t);let o=i,a=!1;n!==t&&(r?(a=s.length===0,o=function(u,c,h){return a&&(a=!1,u=Ii(t,u)),i.call(this,u,Ii(t,c),h,t)}):i.length>3&&(o=function(u,c,h){return i.call(this,u,c,h,t)}));const l=n[e](o,...s);return a?Ii(t,l):l}function wl(t,e,i){const s=Oe(t);Rt(s,"iterate",Xr);const n=s[e](...i);return(n===-1||n===!1)&&Ha(i[0])?(i[0]=Oe(i[0]),s[e](...i)):n}function wr(t,e,i=[]){ds(),bu();const s=Oe(t)[e].apply(t,i);return _u(),ps(),s}const Uv=gu("__proto__,__v_isRef,__isVue"),Ip=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(li));function Vv(t){li(t)||(t=String(t));const e=Oe(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class zp{constructor(e=!1,i=!1){this._isReadonly=e,this._isShallow=i}get(e,i,s){if(i==="__v_skip")return e.__v_skip;const n=this._isReadonly,r=this._isShallow;if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return r;if(i==="__v_raw")return s===(n?r?Qv:Hp:r?Vp:Up).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=de(e);if(!n){let l;if(o&&(l=zv[i]))return l;if(i==="hasOwnProperty")return Vv}const a=Reflect.get(e,i,ot(e)?e:s);if((li(i)?Ip.has(i):Uv(i))||(n||Rt(e,"get",i),r))return a;if(ot(a)){const l=o&&Da(i)?a:a.value;return n&&Le(l)?vc(l):l}return Le(a)?n?vc(a):Mi(a):a}}class Bp extends zp{constructor(e=!1){super(!1,e)}set(e,i,s,n){let r=e[i];const o=de(e)&&Da(i);if(!this._isShallow){const u=ji(r);if(!oi(s)&&!ji(s)&&(r=Oe(r),s=Oe(s)),!o&&ot(r)&&!ot(s))return u||(r.value=s),!0}const a=o?Number(i)<e.length:ze(e,i),l=Reflect.set(e,i,s,ot(e)?e:n);return e===Oe(n)&&l&&(a?Tt(s,r)&&as(e,"set",i,s):as(e,"add",i,s)),l}deleteProperty(e,i){const s=ze(e,i);e[i];const n=Reflect.deleteProperty(e,i);return n&&s&&as(e,"delete",i,void 0),n}has(e,i){const s=Reflect.has(e,i);return(!li(i)||!Ip.has(i))&&Rt(e,"has",i),s}ownKeys(e){return Rt(e,"iterate",de(e)?"length":un),Reflect.ownKeys(e)}}class Hv extends zp{constructor(e=!1){super(!0,e)}set(e,i){return!0}deleteProperty(e,i){return!0}}const Gv=new Bp,$v=new Hv,jv=new Bp(!0);const mc=t=>t,_o=t=>Reflect.getPrototypeOf(t);function qv(t,e,i){return function(...s){const n=this.__v_raw,r=Oe(n),o=Bn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=n[t](...s),c=i?mc:e?Yn:Ri;return!e&&Rt(r,"iterate",l?gc:un),gt(Object.create(u),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}}})}}function xo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Wv(t,e){const i={get(n){const r=this.__v_raw,o=Oe(r),a=Oe(n);t||(Tt(n,a)&&Rt(o,"get",n),Rt(o,"get",a));const{has:l}=_o(o),u=e?mc:t?Yn:Ri;if(l.call(o,n))return u(r.get(n));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(n)},get size(){const n=this.__v_raw;return!t&&Rt(Oe(n),"iterate",un),n.size},has(n){const r=this.__v_raw,o=Oe(r),a=Oe(n);return t||(Tt(n,a)&&Rt(o,"has",n),Rt(o,"has",a)),n===a?r.has(n):r.has(n)||r.has(a)},forEach(n,r){const o=this,a=o.__v_raw,l=Oe(a),u=e?mc:t?Yn:Ri;return!t&&Rt(l,"iterate",un),a.forEach((c,h)=>n.call(r,u(c),u(h),o))}};return gt(i,t?{add:xo("add"),set:xo("set"),delete:xo("delete"),clear:xo("clear")}:{add(n){const r=Oe(this),o=_o(r),a=Oe(n),l=!e&&!oi(n)&&!ji(n)?a:n;return o.has.call(r,l)||Tt(n,l)&&o.has.call(r,n)||Tt(a,l)&&o.has.call(r,a)||(r.add(l),as(r,"add",l,l)),this},set(n,r){!e&&!oi(r)&&!ji(r)&&(r=Oe(r));const o=Oe(this),{has:a,get:l}=_o(o);let u=a.call(o,n);u||(n=Oe(n),u=a.call(o,n));const c=l.call(o,n);return o.set(n,r),u?Tt(r,c)&&as(o,"set",n,r):as(o,"add",n,r),this},delete(n){const r=Oe(this),{has:o,get:a}=_o(r);let l=o.call(r,n);l||(n=Oe(n),l=o.call(r,n)),a&&a.call(r,n);const u=r.delete(n);return l&&as(r,"delete",n,void 0),u},clear(){const n=Oe(this),r=n.size!==0,o=n.clear();return r&&as(n,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=qv(n,t,e)}),i}function ku(t,e){const i=Wv(t,e);return(s,n,r)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?s:Reflect.get(ze(i,n)&&n in s?i:s,n,r)}const Kv={get:ku(!1,!1)},Yv={get:ku(!1,!0)},Xv={get:ku(!0,!1)};const Up=new WeakMap,Vp=new WeakMap,Hp=new WeakMap,Qv=new WeakMap;function Jv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mi(t){return ji(t)?t:Tu(t,!1,Gv,Kv,Up)}function us(t){return Tu(t,!1,jv,Yv,Vp)}function vc(t){return Tu(t,!0,$v,Xv,Hp)}function Tu(t,e,i,s,n){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=n.get(t);if(r)return r;const o=Jv(Tv(t));if(o===0)return t;const a=new Proxy(t,o===2?s:i);return n.set(t,a),a}function Cs(t){return ji(t)?Cs(t.__v_raw):!!(t&&t.__v_isReactive)}function ji(t){return!!(t&&t.__v_isReadonly)}function oi(t){return!!(t&&t.__v_isShallow)}function Ha(t){return t?!!t.__v_raw:!1}function Oe(t){const e=t&&t.__v_raw;return e?Oe(e):t}function Zv(t){return!ze(t,"__v_skip")&&Object.isExtensible(t)&&xp(t,"__v_skip",!0),t}const Ri=t=>Le(t)?Mi(t):t,Yn=t=>Le(t)?vc(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function oe(t){return Gp(t,!1)}function Ms(t){return Gp(t,!0)}function Gp(t,e){return ot(t)?t:new ey(t,e)}class ey{constructor(e,i){this.dep=new Ua,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?e:Oe(e),this._value=i?e:Ri(e),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(e){const i=this._rawValue,s=this.__v_isShallow||oi(e)||ji(e);e=s?e:Oe(e),Tt(e,i)&&(this._rawValue=e,this._value=s?e:Ri(e),this.dep.trigger())}}function ne(t){return ot(t)?t.value:t}function $p(t){return ve(t)?t():ne(t)}const ty={get:(t,e,i)=>e==="__v_raw"?t:ne(Reflect.get(t,e,i)),set:(t,e,i,s)=>{const n=t[e];return ot(n)&&!ot(i)?(n.value=i,!0):Reflect.set(t,e,i,s)}};function jp(t){return Cs(t)?t:new Proxy(t,ty)}class iy{constructor(e){this.__v_isRef=!0,this._value=void 0;const i=this.dep=new Ua,{get:s,set:n}=e(i.track.bind(i),i.trigger.bind(i));this._get=s,this._set=n}get value(){return this._value=this._get()}set value(e){this._set(e)}}function sy(t){return new iy(t)}class ny{constructor(e,i,s){this._object=e,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._key=li(i)?i:String(i),this._raw=Oe(e);let n=!0,r=e;if(!de(e)||li(this._key)||!Da(this._key))do n=!Ha(r)||oi(r);while(n&&(r=r.__v_raw));this._shallow=n}get value(){let e=this._object[this._key];return this._shallow&&(e=ne(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&ot(this._raw[this._key])){const i=this._object[this._key];if(ot(i)){i.value=e;return}}this._object[this._key]=e}get dep(){return Iv(this._raw,this._key)}}class ry{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Su(t,e,i){return ot(t)?t:ve(t)?new ry(t):Le(t)&&arguments.length>1?oy(t,e,i):oe(t)}function oy(t,e,i){return new ny(t,e,i)}class ay{constructor(e,i,s){this.fn=e,this.setter=i,this._value=void 0,this.dep=new Ua(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Ap(this,!0),!0}get value(){const e=this.dep.track();return Np(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ly(t,e,i=!1){let s,n;return ve(t)?s=t:(s=t.get,n=t.set),new ay(s,n,i)}const ko={},ia=new WeakMap;let Zs;function cy(t,e=!1,i=Zs){if(i){let s=ia.get(i);s||ia.set(i,s=[]),s.push(t)}}function uy(t,e,i=Fe){const{immediate:s,deep:n,once:r,scheduler:o,augmentJob:a,call:l}=i,u=b=>n?b:oi(b)||n===!1||n===0?ls(b,1):ls(b);let c,h,f,d,g=!1,p=!1;if(ot(t)?(h=()=>t.value,g=oi(t)):Cs(t)?(h=()=>u(t),g=!0):de(t)?(p=!0,g=t.some(b=>Cs(b)||oi(b)),h=()=>t.map(b=>{if(ot(b))return b.value;if(Cs(b))return u(b);if(ve(b))return l?l(b,2):b()})):ve(t)?e?h=l?()=>l(t,2):t:h=()=>{if(f){ds();try{f()}finally{ps()}}const b=Zs;Zs=c;try{return l?l(t,3,[d]):t(d)}finally{Zs=b}}:h=Gi,e&&n){const b=h,v=n===!0?1/0:n;h=()=>ls(b(),v)}const _=ur(),w=()=>{c.stop(),_&&_.active&&mu(_.effects,c)};if(r&&e){const b=e;e=(...v)=>{const x=b(...v);return w(),x}}let y=p?new Array(t.length).fill(ko):ko;const m=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(e){const v=c.run();if(b||n||g||(p?v.some((x,k)=>Tt(x,y[k])):Tt(v,y))){f&&f();const x=Zs;Zs=c;try{const k=[v,y===ko?void 0:p&&y[0]===ko?[]:y,d];y=v,l?l(e,3,k):e(...k)}finally{Zs=x}}}else c.run()};return a&&a(m),c=new Cp(h),c.scheduler=o?()=>o(m,!1):m,d=b=>cy(b,!1,c),f=c.onStop=()=>{const b=ia.get(c);if(b){if(l)l(b,4);else for(const v of b)v();ia.delete(c)}},e?s?m(!0):y=c.run():o?o(m.bind(null,!0),!0):c.run(),w.pause=c.pause.bind(c),w.resume=c.resume.bind(c),w.stop=w,w}function ls(t,e=1/0,i){if(e<=0||!Le(t)||t.__v_skip||(i=i||new Map,(i.get(t)||0)>=e))return t;if(i.set(t,e),e--,ot(t))ls(t.value,e,i);else if(de(t))for(let s=0;s<t.length;s++)ls(t[s],e,i);else if(lr(t)||Bn(t))t.forEach(s=>{ls(s,e,i)});else if(_p(t)){for(const s in t)ls(t[s],e,i);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ls(t[s],e,i)}return t}function vo(t,e,i,s){try{return s?t(...s):t()}catch(n){yo(n,e,i)}}function bi(t,e,i,s){if(ve(t)){const n=vo(t,e,i,s);return n&&vu(n)&&n.catch(r=>{yo(r,e,i)}),n}if(de(t)){const n=[];for(let r=0;r<t.length;r++)n.push(bi(t[r],e,i,s));return n}}function yo(t,e,i,s=!0){const n=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${i}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,l,u)===!1)return}a=a.parent}if(r){ds(),vo(r,null,10,[t,l,u]),ps();return}}hy(t,i,n,s,o)}function hy(t,e,i,s=!0,n=!1){if(n)throw t;console.error(t)}const Lt=[];let Ni=-1;const Vn=[];let xs=null,Mn=0;const qp=Promise.resolve();let sa=null;function st(t){const e=sa||qp;return t?e.then(this?t.bind(this):t):e}function fy(t){let e=Ni+1,i=Lt.length;for(;e<i;){const s=e+i>>>1,n=Lt[s],r=Jr(n);r<t||r===t&&n.flags&2?e=s+1:i=s}return e}function Eu(t){if(!(t.flags&1)){const e=Jr(t),i=Lt[Lt.length-1];!i||!(t.flags&2)&&e>=Jr(i)?Lt.push(t):Lt.splice(fy(e),0,t),t.flags|=1,Wp()}}function Wp(){sa||(sa=qp.then(Kp))}function Qr(t){if(!de(t))xs&&t.id===-1?xs.splice(Mn+1,0,t):t.flags&1||(Vn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Vn.push(t[e]);Wp()}function bh(t,e,i=Ni+1){for(;i<Lt.length;i++){const s=Lt[i];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Lt.splice(i,1),i--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function na(t){if(Vn.length){const e=[...new Set(Vn)].sort((i,s)=>Jr(i)-Jr(s));if(Vn.length=0,xs){for(let i=0;i<e.length;i++)xs.push(e[i]);return}for(xs=e,Mn=0;Mn<xs.length;Mn++){const i=xs[Mn];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}xs=null,Mn=0}}const Jr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kp(t){try{for(Ni=0;Ni<Lt.length;Ni++){const e=Lt[Ni];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ni<Lt.length;Ni++){const e=Lt[Ni];e&&(e.flags&=-2)}Ni=-1,Lt.length=0,na(),sa=null,(Lt.length||Vn.length)&&Kp()}}let St=null,Yp=null;function ra(t){const e=St;return St=t,Yp=t&&t.type.__scopeId||null,e}function Ru(t,e=St,i){if(!e||t._n)return t;const s=(...n)=>{s._d&&da(-1);const r=ra(e),o=fs.length;let a;try{a=t(...n)}finally{for(let l=fs.length;l>o;l--)Ja();ra(r),s._d&&da(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function XP(t,e){if(St===null)return t;const i=Za(St),s=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[r,o,a,l=Fe]=e[n];r&&(ve(r)&&(r={mounted:r,updated:r}),r.deep&&ls(o),s.push({dir:r,instance:i,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Di(t,e,i,s){const n=t.dirs,r=e&&e.dirs;for(let o=0;o<n.length;o++){const a=n[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ds(),bi(l,i,8,[t.el,a,t,e]),ps())}}function Hn(t,e){if(Pt){let i=Pt.provides;const s=Pt.parent&&Pt.parent.provides;s===i&&(i=Pt.provides=Object.create(s)),i[t]=e}}function zt(t,e,i=!1){const s=Pi();if(s||fn){let n=fn?fn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&t in n)return n[t];if(arguments.length>1)return i&&ve(e)?e.call(s&&s.proxy):e}}function Ga(){return!!(Pi()||fn)}const dy=Symbol.for("v-scx"),py=()=>zt(dy);function gy(t,e){return $a(t,null,e)}function my(t,e){return $a(t,null,{flush:"sync"})}function je(t,e,i){return $a(t,e,i)}function $a(t,e,i=Fe){const{immediate:s,deep:n,flush:r,once:o}=i,a=gt({},i),l=e&&s||!e&&r!=="post";let u;if(Jn){if(r==="sync"){const d=py();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Gi,d.resume=Gi,d.pause=Gi,d}}const c=Pt;a.call=(d,g,p)=>bi(d,c,g,p);let h=!1;r==="post"?a.scheduler=d=>{wt(d,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Eu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const f=uy(t,e,a);return Jn&&(u?u.push(f):l&&f()),f}function vy(t,e,i){const s=this.proxy,n=qe(t)?t.includes(".")?Xp(s,t):()=>s[t]:t.bind(s,s);let r;ve(e)?r=e:(r=e.handler,i=e);const o=hr(this),a=$a(n,r.bind(s),i);return o(),a}function Xp(t,e){const i=e.split(".");return()=>{let s=t;for(let n=0;n<i.length&&s;n++)s=s[i[n]];return s}}const yy=Symbol("_vte"),ja=t=>t.__isTeleport,gi=Symbol("_leaveCb"),br=Symbol("_enterCb");function wy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qt(()=>{t.isMounted=!0}),Jt(()=>{t.isUnmounting=!0}),t}const fi=[Function,Array],Qp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fi,onEnter:fi,onAfterEnter:fi,onEnterCancelled:fi,onBeforeLeave:fi,onLeave:fi,onAfterLeave:fi,onLeaveCancelled:fi,onBeforeAppear:fi,onAppear:fi,onAfterAppear:fi,onAppearCancelled:fi},Jp=t=>{const e=t.subTree;return e.component?Jp(e.component):e},by={name:"BaseTransition",props:Qp,setup(t,{slots:e}){const i=Pi(),s=wy();return()=>{const n=e.default&&tg(e.default(),!0),r=n&&n.length?Zp(n):i.subTree?ss():void 0;if(!r)return;const o=Oe(t),{mode:a}=o;if(s.isLeaving)return bl(r);const l=oa(r);if(!l)return bl(r);let u=yc(l,o,s,i,h=>u=h);l.type!==pt&&Xn(l,u);let c=i.subTree&&oa(i.subTree);if(c&&c.type!==pt&&!Ti(c,l)&&Jp(i).type!==pt){let h=yc(c,o,s,i);if(Xn(c,h),a==="out-in"&&l.type!==pt)return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,i.job.flags&8||i.update(),delete h.afterLeave,c=void 0},bl(r);a==="in-out"&&l.type!==pt?h.delayLeave=(f,d,g)=>{const p=eg(s,c);p[String(c.key)]=c,f[gi]=()=>{d(),f[gi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function Zp(t){let e=t[0];if(t.length>1){for(const i of t)if(i.type!==pt){e=i;break}}return e}const _y=by;function eg(t,e){const{leavingVNodes:i}=t;let s=i.get(e.type);return s||(s=Object.create(null),i.set(e.type,s)),s}function yc(t,e,i,s,n){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:p,onBeforeAppear:_,onAppear:w,onAfterAppear:y,onAppearCancelled:m}=e,b=String(t.key),v=eg(i,t),x=(S,P)=>{S&&bi(S,s,9,P)},k=(S,P)=>{const A=P[1];x(S,P),de(S)?S.every(M=>M.length<=1)&&A():S.length<=1&&A()},R={mode:o,persisted:a,beforeEnter(S){let P=l;if(!i.isMounted)if(r)P=_||l;else return;S[gi]&&S[gi](!0);const A=v[b];A&&Ti(t,A)&&A.el[gi]&&A.el[gi](),x(P,[S])},enter(S){if(v[b]===t)return;let P=u,A=c,M=h;if(!i.isMounted)if(r)P=w||u,A=y||c,M=m||h;else return;let D=!1;S[br]=O=>{D||(D=!0,O?x(M,[S]):x(A,[S]),R.delayedLeave&&R.delayedLeave(),S[br]=void 0)};const F=S[br].bind(null,!1);P?k(P,[S,F]):F()},leave(S,P){const A=String(t.key);if(S[br]&&S[br](!0),i.isUnmounting)return P();x(f,[S]);let M=!1;S[gi]=F=>{M||(M=!0,P(),F?x(p,[S]):x(g,[S]),S[gi]=void 0,v[A]===t&&delete v[A])};const D=S[gi].bind(null,!1);v[A]=t,d?k(d,[S,D]):D()},clone(S){const P=yc(S,e,i,s,n);return n&&n(P),P}};return R}function bl(t){if(Wa(t))return t=gs(t),t.children=null,t}function oa(t){if(!Wa(t))return ja(t.type)&&t.children?Zp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:i}=t;if(i){if(e&16)return i[0];if(e&32&&ve(i.default))return i.default()}}function Xn(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const i=t.component.subTree;Xn(ja(i.type)&&oa(i)||i,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tg(t,e=!1,i){let s=[],n=0;for(let r=0;r<t.length;r++){let o=t[r];const a=i==null?o.key:String(i)+String(o.key!=null?o.key:r);o.type===Ye?(o.patchFlag&128&&n++,s=s.concat(tg(o.children,e,a))):(e||o.type!==pt)&&s.push(a!=null?gs(o,{key:a}):o)}if(n>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function qa(t,e){return ve(t)?gt({name:t.name},e,{setup:t}):t}function ig(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _h(t,e){let i;return!!((i=Object.getOwnPropertyDescriptor(t,e))&&!i.configurable)}const aa=new WeakMap;function Gn(t,e,i,s,n=!1){if(de(t)){t.forEach((p,_)=>Gn(p,e&&(de(e)?e[_]:e),i,s,n));return}if(hs(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Gn(t,e,i,s.component.subTree);return}const r=s.shapeFlag&4?Za(s.component):s.el,o=n?null:r,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Fe?a.refs={}:a.refs,h=a.setupState,f=Oe(h),d=h===Fe?wp:p=>_h(c,p)?!1:ze(f,p),g=(p,_)=>!(_&&_h(c,_));if(u!=null&&u!==l){if(xh(e),qe(u))c[u]=null,d(u)&&(h[u]=null);else if(ot(u)){const p=e;g(u,p.k)&&(u.value=null),p.k&&(c[p.k]=null)}}if(ve(l))vo(l,a,12,[o,c]);else{const p=qe(l),_=ot(l);if(p||_){const w=()=>{if(t.f){const y=p?d(l)?h[l]:c[l]:g()||!t.k?l.value:c[t.k];if(n)de(y)&&mu(y,r);else if(de(y))y.includes(r)||y.push(r);else if(p)c[l]=[r],d(l)&&(h[l]=c[l]);else{const m=[r];g(l,t.k)&&(l.value=m),t.k&&(c[t.k]=m)}}else p?(c[l]=o,d(l)&&(h[l]=o)):_&&(g(l,t.k)&&(l.value=o),t.k&&(c[t.k]=o))};if(o){const y=()=>{w(),aa.delete(t)};y.id=-1,aa.set(t,y),wt(y,i)}else xh(t),w()}}}function xh(t){const e=aa.get(t);e&&(e.flags|=8,aa.delete(t))}let kh=!1;const kn=()=>{kh||(console.error("Hydration completed but contains mismatches."),kh=!0)},xy=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",ky=t=>t.namespaceURI.includes("MathML"),To=t=>{if(t.nodeType===1){if(xy(t))return"svg";if(ky(t))return"mathml"}},So=t=>t.nodeType===8;function Ty(t){const{mt:e,p:i,o:{patchProp:s,createText:n,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:u}}=t,c=(m,b)=>{if(!b.hasChildNodes()){i(null,m,b),na(),b._vnode=m;return}h(b.firstChild,m,null,null,null),na(),b._vnode=m},h=(m,b,v,x,k,R=!1)=>{R=R||!!b.dynamicChildren;const S=So(m)&&m.data==="[",P=()=>p(m,b,v,x,k,S),{type:A,ref:M,shapeFlag:D,patchFlag:F}=b;let O=m.nodeType;b.el=m,F===-2&&(R=!1,b.dynamicChildren=null);let C=null;switch(A){case dn:O!==3?b.children===""?(l(b.el=n(""),o(m),m),C=m):C=P():(m.data!==b.children&&(kn(),m.data=b.children),C=r(m));break;case pt:y(m)?(C=r(m),w(b.el=m.content.firstChild,m,v)):O!==8||S?C=P():C=r(m);break;case Br:if(S&&(m=r(m),O=m.nodeType),O===1||O===3){C=m;const L=!b.children.length;for(let q=0;q<b.staticCount;q++)L&&(b.children+=C.nodeType===1?C.outerHTML:C.data),q===b.staticCount-1&&(b.anchor=C),C=r(C);return S?r(C):C}else P();break;case Ye:S?C=g(m,b,v,x,k,R):C=P();break;default:if(D&1)(O!==1||b.type.toLowerCase()!==m.tagName.toLowerCase())&&!y(m)?C=P():C=f(m,b,v,x,k,R);else if(D&6){b.slotScopeIds=k;const L=o(m);if(S?C=_(m):So(m)&&m.data==="teleport start"?C=_(m,m.data,"teleport end"):C=r(m),e(b,L,null,v,x,To(L),R),hs(b)&&!b.type.__asyncResolved){let q;S?(q=_e(Ye),q.anchor=C?C.previousSibling:L.lastChild):q=m.nodeType===3?Au(""):_e("div"),q.el=m,b.component.subTree=q}}else D&64?O!==8?C=P():C=b.type.hydrate(m,b,v,x,k,R,t,d):D&128&&(C=b.type.hydrate(m,b,v,x,To(o(m)),k,R,t,h))}return M!=null&&Gn(M,null,x,b),C},f=(m,b,v,x,k,R)=>{R=R||!!b.dynamicChildren;const{type:S,dynamicProps:P,props:A,patchFlag:M,shapeFlag:D,dirs:F,transition:O}=b,C=S==="input"||S==="option",L=!!P;if(C||L||M!==-1){F&&Di(b,null,v,"created");let q=!1;if(y(m)){q=Pg(null,O)&&v&&v.vnode.props&&v.vnode.props.appear;const he=m.content.firstChild;if(q){const fe=he.getAttribute("class");fe&&(he.$cls=fe),O.beforeEnter(he)}w(he,m,v),b.el=m=he}if(D&16&&!(A&&(A.innerHTML||A.textContent))){let he=d(m.firstChild,b,m,v,x,k,R);for(he&&!qo(m,1)&&kn();he;){const fe=he;he=he.nextSibling,a(fe)}}else if(D&8){let he=b.children;he[0]===`
`&&(m.tagName==="PRE"||m.tagName==="TEXTAREA")&&(he=he.slice(1));const{textContent:fe}=m;fe!==he&&fe!==he.replace(/\r\n|\r/g,`
`)&&(qo(m,0)||kn(),m.textContent=b.children)}if(A){if(C||L||!R||M&48){const he=m.tagName.includes("-"),fe=m.namespaceURI.includes("svg")?"svg":m.namespaceURI.includes("MathML")?"mathml":void 0;for(const ae in A)if(C&&(ae.endsWith("value")||ae==="indeterminate")||go(ae)&&!cn(ae)||ae[0]==="."||he&&!cn(ae)||P&&P.includes(ae)){if(Ey(m,ae,A[ae]))continue;s(m,ae,null,A[ae],fe,v)}}else if(A.onClick)s(m,"onClick",null,A.onClick,void 0,v);else if(M&4&&Cs(A.style))for(const he in A.style)A.style[he]}let ce;(ce=A&&A.onVnodeBeforeMount)&&Ht(ce,v,b),F&&Di(b,null,v,"beforeMount"),((ce=A&&A.onVnodeMounted)||F||q)&&Ng(()=>{ce&&Ht(ce,v,b),q&&O.enter(m),F&&Di(b,null,v,"mounted")},x)}return m.nextSibling},d=(m,b,v,x,k,R,S)=>{S=S||!!b.dynamicChildren;const P=b.children,A=P.length;let M=!1;for(let D=0;D<A;D++){const F=S?P[D]:P[D]=ei(P[D]),O=F.type===dn;m?(O&&!S&&D+1<A&&ei(P[D+1]).type===dn&&(l(n(m.data.slice(F.children.length)),v,r(m)),m.data=F.children),m=h(m,F,x,k,R,S)):O&&!F.children?l(F.el=n(""),v):(M||(M=!0,qo(v,1)||kn()),i(null,F,v,null,x,k,To(v),R))}return m},g=(m,b,v,x,k,R)=>{const{slotScopeIds:S}=b;S&&(k=k?k.concat(S):S);const P=o(m),A=d(r(m),b,P,v,x,k,R);return A&&So(A)&&A.data==="]"?r(b.anchor=A):(kn(),l(b.anchor=u("]"),P,A),A)},p=(m,b,v,x,k,R)=>{if(Py(m,b)||kn(),b.el=null,R){const A=_(m);for(;;){const M=r(m);if(M&&M!==A)a(M);else break}}const S=r(m),P=o(m);return a(m),i(null,b,P,S,v,x,To(P),k),v&&(v.vnode.el=b.el,Qa(v,b.el)),S},_=(m,b="[",v="]")=>{let x=0;for(;m;)if(m=r(m),m&&So(m)&&(m.data===b&&x++,m.data===v)){if(x===0)return r(m);x--}return m},w=(m,b,v)=>{const x=b.parentNode;x&&x.replaceChild(m,b);let k=v;for(;k;)k.vnode.el===b&&(k.vnode.el=k.subTree.el=m),k=k.parent},y=m=>m.nodeType===1&&m.tagName==="TEMPLATE";return[c,h]}const Sy=new Set(["src","srcset","href","poster"]);function Ey(t,e,i){return Sy.has(e)?t.getAttribute(e)===(i==null?null:`${i}`):!1}const la="data-allow-mismatch",Ry={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function qo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(la);)t=t.parentElement;return Pu(t&&t.getAttribute(la),e)}function Pu(t,e){if(t==null)return!1;if(t==="")return!0;{const i=t.split(",");return e===0&&i.includes("children")?!0:i.includes(Ry[e])}}function Py(t,e){return qo(t.parentElement,1)||Cy(t)||My(e)}function Cy(t){return t.nodeType===1&&Pu(t.getAttribute(la),1)}function My({props:t}){const e=t&&t[la];return typeof e=="string"&&Pu(e,1)}Ba().requestIdleCallback;Ba().cancelIdleCallback;const hs=t=>!!t.type.__asyncLoader,Wa=t=>t.type.__isKeepAlive,Ay={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const i=Pi(),s=i.ctx;if(!s.renderer)return()=>{const y=e.default&&e.default();return y&&y.length===1?y[0]:y};const n=new Map,r=new Set;let o=null;const a=i.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:h}}}=s,f=h("div");s.activate=(y,m,b,v,x)=>{const k=y.component;u(y,m,b,0,a),l(k.vnode,y,m,b,k,a,v,y.slotScopeIds,x),wt(()=>{k.isDeactivated=!1,k.a&&Un(k.a);const R=y.props&&y.props.onVnodeMounted;R&&Ht(R,k.parent,y)},a)},s.deactivate=y=>{const m=y.component;ha(m.m),ha(m.a),u(y,f,null,1,a),wt(()=>{m.da&&Un(m.da);const b=y.props&&y.props.onVnodeUnmounted;b&&Ht(b,m.parent,y),m.isDeactivated=!0},a)};function d(y){_l(y),c(y,i,a,!0)}function g(y){n.forEach((m,b)=>{const v=Sc(hs(m)?m.type.__asyncResolved||{}:m.type);v&&!y(v)&&p(b)})}function p(y){const m=n.get(y);m&&(!o||!Ti(m,o))?d(m):o&&_l(o),n.delete(y),r.delete(y)}je(()=>[t.include,t.exclude],([y,m])=>{y&&g(b=>Mr(y,b)),m&&g(b=>!Mr(m,b))},{flush:"post",deep:!0});let _=null;const w=()=>{_!=null&&(fa(i.subTree.type)?wt(()=>{n.set(_,Eo(i.subTree))},i.subTree.suspense):n.set(_,Eo(i.subTree)))};return Qt(w),ag(w),Jt(()=>{n.forEach(y=>{const{subTree:m,suspense:b}=i,v=Eo(m);if(y.type===v.type&&y.key===v.key){_l(v);const x=v.component.da;x&&wt(x,b);return}d(y)})}),()=>{if(_=null,!e.default)return o=null;const y=e.default(),m=y[0];if(y.length>1)return o=null,y;if(!Ls(m)||!(m.shapeFlag&4)&&!(m.shapeFlag&128))return o=null,m;let b=Eo(m);if(b.type===pt)return o=null,b;const v=b.type,x=Sc(hs(b)?b.type.__asyncResolved||{}:v),{include:k,exclude:R,max:S}=t;if(k&&(!x||!Mr(k,x))||R&&x&&Mr(R,x))return b.shapeFlag&=-257,o=b,m;const P=b.key==null?v:b.key,A=n.get(P);return b.el&&(b=gs(b),m.shapeFlag&128&&(m.ssContent=b)),_=P,A?(b.el=A.el,b.component=A.component,b.transition&&Xn(b,b.transition),b.shapeFlag|=512,r.delete(P),r.add(P)):(r.add(P),S&&r.size>parseInt(S,10)&&p(r.values().next().value)),b.shapeFlag|=256,o=b,fa(m.type)?m:b}}},Oy=Ay;function Mr(t,e){return de(t)?t.some(i=>Mr(i,e)):qe(t)?t.split(",").includes(e):kv(t)?(t.lastIndex=0,t.test(e)):!1}function sg(t,e){rg(t,"a",e)}function ng(t,e){rg(t,"da",e)}function rg(t,e,i=Pt){const s=t.__wdc||(t.__wdc=()=>{let n=i;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Ka(e,s,i),i){let n=i.parent;for(;n&&n.parent;)Wa(n.parent.vnode)&&Fy(s,e,i,n),n=n.parent}}function Fy(t,e,i,s){const n=Ka(e,t,s,!0);Ya(()=>{mu(s[e],n)},i)}function _l(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Eo(t){return t.shapeFlag&128?t.ssContent:t}function Ka(t,e,i=Pt,s=!1){if(i){const n=i[t]||(i[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ds();const a=hr(i),l=bi(e,i,t,o);return a(),ps(),l});return s?n.unshift(r):n.push(r),r}}const ys=t=>(e,i=Pt)=>{(!Jn||t==="sp")&&Ka(t,(...s)=>e(...s),i)},og=ys("bm"),Qt=ys("m"),Ny=ys("bu"),ag=ys("u"),Jt=ys("bum"),Ya=ys("um"),Dy=ys("sp"),Ly=ys("rtg"),Iy=ys("rtc");function lg(t,e=Pt){Ka("ec",t,e)}const zy="components",cg=Symbol.for("v-ndc");function ug(t){return qe(t)?By(zy,t,!1)||t:t||cg}function By(t,e,i=!0,s=!1){const n=St||Pt;if(n){const r=n.type;{const a=Sc(r,!1);if(a&&(a===e||a===At(e)||a===Ia(At(e))))return r}const o=Th(n[t]||r[t],e)||Th(n.appContext[t],e);return!o&&s?r:o}}function Th(t,e){return t&&(t[e]||t[At(e)]||t[Ia(At(e))])}function hn(t,e,i,s){let n;const r=i,o=de(t);if(o||qe(t)){const a=o&&Cs(t);let l=!1,u=!1;a&&(l=!oi(t),u=ji(t),t=Va(t)),n=new Array(t.length);for(let c=0,h=t.length;c<h;c++)n[c]=e(l?u?Yn(Ri(t[c])):Ri(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){n=new Array(t);for(let a=0;a<t;a++)n[a]=e(a+1,a,void 0,r)}else if(Le(t))if(t[Symbol.iterator])n=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);n=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];n[l]=e(t[c],c,l,r)}}else n=[];return n}function Uy(t,e,i,s,n,r){if(i==null&&(i={}),St.ce||St.parent&&hs(St.parent)&&St.parent.ce){const u=i,c=Object.keys(u).length>0;return Ee(),ti(Ye,null,[_e("slot",u,s&&s())],c?-2:64)}let o=t[e];o&&o._c&&(o._d=!1);const a=fs.length;Ee();let l;try{const u=o&&hg(o(i)),c=i.key||r||u&&u.key;l=ti(Ye,{key:(c&&!li(c)?c:`_${e}`)+(!u&&s?"_fb":"")},u||(s?s():[]),u&&t._===1?64:-2)}catch(u){for(let c=fs.length;c>a;c--)Ja();throw u}finally{o&&o._c&&(o._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function hg(t){return t.some(e=>Ls(e)?!(e.type===pt||e.type===Ye&&!hg(e.children)):!0)?t:null}const wc=t=>t?Ig(t)?Za(t):wc(t.parent):null,zr=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wc(t.parent),$root:t=>wc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>pg(t),$forceUpdate:t=>t.f||(t.f=()=>{Eu(t.update)}),$nextTick:t=>t.n||(t.n=st.bind(t.proxy)),$watch:t=>vy.bind(t)}),xl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&ze(t,e),Vy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:i,setupState:s,data:n,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return n[e];case 4:return i[e];case 3:return r[e]}else{if(xl(s,e))return o[e]=1,s[e];if(n!==Fe&&ze(n,e))return o[e]=2,n[e];if(ze(r,e))return o[e]=3,r[e];if(i!==Fe&&ze(i,e))return o[e]=4,i[e];bc&&(o[e]=0)}}const u=zr[e];let c,h;if(u)return e==="$attrs"&&Rt(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(i!==Fe&&ze(i,e))return o[e]=4,i[e];if(h=l.config.globalProperties,ze(h,e))return h[e]},set({_:t},e,i){const{data:s,setupState:n,ctx:r}=t;return xl(n,e)?(n[e]=i,!0):s!==Fe&&ze(s,e)?(s[e]=i,!0):ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:s,appContext:n,props:r,type:o}},a){let l;return!!(i[a]||t!==Fe&&a[0]!=="$"&&ze(t,a)||xl(e,a)||ze(r,a)||ze(s,a)||ze(zr,a)||ze(n.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,i){return i.get!=null?t._.accessCache[e]=0:ze(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function ca(t){return de(t)?t.reduce((e,i)=>(e[i]=null,e),{}):t}function QP(t,e){return!t||!e?t||e:de(t)&&de(e)?t.concat(e):gt({},ca(t),ca(e))}function fg(t){const e=Pi(),i=Jn;let s=t();eo(),i&&As(!1);const n=()=>{hr(e),i&&As(!0)},r=()=>{Pi()!==e&&e.scope.off(),eo(),i&&As(!1)};return vu(s)&&(s=s.catch(o=>{throw n(),Promise.resolve().then(()=>Promise.resolve().then(r)),o})),[s,()=>{n(),Promise.resolve().then(r)}]}let bc=!0;function Hy(t){const e=pg(t),i=t.proxy,s=t.ctx;bc=!1,e.beforeCreate&&Sh(e.beforeCreate,t,"bc");const{data:n,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:p,deactivated:_,beforeDestroy:w,beforeUnmount:y,destroyed:m,unmounted:b,render:v,renderTracked:x,renderTriggered:k,errorCaptured:R,serverPrefetch:S,expose:P,inheritAttrs:A,components:M,directives:D,filters:F}=e;if(u&&Gy(u,s,null),o)for(const L in o){const q=o[L];ve(q)&&(s[L]=q.bind(i))}if(n){const L=n.call(i,i);Le(L)&&(t.data=Mi(L))}if(bc=!0,r)for(const L in r){const q=r[L],ce=ve(q)?q.bind(i,i):ve(q.get)?q.get.bind(i,i):Gi,he=!ve(q)&&ve(q.set)?q.set.bind(i):Gi,fe=nt({get:ce,set:he});Object.defineProperty(s,L,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ae=>fe.value=ae})}if(a)for(const L in a)dg(a[L],s,i,L);if(l){const L=ve(l)?l.call(i):l;Reflect.ownKeys(L).forEach(q=>{Hn(q,L[q])})}c&&Sh(c,t,"c");function C(L,q){de(q)?q.forEach(ce=>L(ce.bind(i))):q&&L(q.bind(i))}if(C(og,h),C(Qt,f),C(Ny,d),C(ag,g),C(sg,p),C(ng,_),C(lg,R),C(Iy,x),C(Ly,k),C(Jt,y),C(Ya,b),C(Dy,S),de(P))if(P.length){const L=t.exposed||(t.exposed={});P.forEach(q=>{Object.defineProperty(L,q,{get:()=>i[q],set:ce=>i[q]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});v&&t.render===Gi&&(t.render=v),A!=null&&(t.inheritAttrs=A),M&&(t.components=M),D&&(t.directives=D),S&&ig(t)}function Gy(t,e,i=Gi){de(t)&&(t=_c(t));for(const s in t){const n=t[s];let r;Le(n)?"default"in n?r=zt(n.from||s,n.default,!0):r=zt(n.from||s):r=zt(n),ot(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Sh(t,e,i){bi(de(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,i)}function dg(t,e,i,s){let n=s.includes(".")?Xp(i,s):()=>i[s];if(qe(t)){const r=e[t];ve(r)&&je(n,r)}else if(ve(t))je(n,t.bind(i));else if(Le(t))if(de(t))t.forEach(r=>dg(r,e,i,s));else{const r=ve(t.handler)?t.handler.bind(i):e[t.handler];ve(r)&&je(n,r,t)}}function pg(t){const e=t.type,{mixins:i,extends:s}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!n.length&&!i&&!s?l=e:(l={},n.length&&n.forEach(u=>ua(l,u,o,!0)),ua(l,e,o)),Le(e)&&r.set(e,l),l}function ua(t,e,i,s=!1){const{mixins:n,extends:r}=e;r&&ua(t,r,i,!0),n&&n.forEach(o=>ua(t,o,i,!0));for(const o in e)if(!(s&&o==="expose")){const a=$y[o]||i&&i[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $y={data:Eh,props:Rh,emits:Rh,methods:Ar,computed:Ar,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Ar,directives:Ar,watch:qy,provide:Eh,inject:jy};function Eh(t,e){return e?t?function(){return gt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function jy(t,e){return Ar(_c(t),_c(e))}function _c(t){if(de(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ar(t,e){return t?gt(Object.create(null),t,e):e}function Rh(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:gt(Object.create(null),ca(t),ca(e??{})):e}function qy(t,e){if(!t)return e;if(!e)return t;const i=gt(Object.create(null),t);for(const s in e)i[s]=Nt(t[s],e[s]);return i}function gg(){return{app:null,config:{isNativeTag:wp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wy=0;function Ky(t,e){return function(s,n=null){ve(s)||(s=gt({},s)),n!=null&&!Le(n)&&(n=null);const r=gg(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Wy++,_component:s,_props:n,_container:null,_context:r,_instance:null,version:Pw,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&ve(c.install)?(o.add(c),c.install(u,...h)):ve(c)&&(o.add(c),c(u,...h))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,h){return h?(r.components[c]=h,u):r.components[c]},directive(c,h){return h?(r.directives[c]=h,u):r.directives[c]},mount(c,h,f){if(!l){const d=u._ceVNode||_e(s,n);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,c):t(d,c,f),l=!0,u._container=c,c.__vue_app__=u,Za(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(bi(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,h){return r.provides[c]=h,u},runWithContext(c){const h=fn;fn=u;try{return c()}finally{fn=h}}};return u}}let fn=null;function JP(t,e,i=Fe){const s=Pi(),n=At(e),r=Vs(e),o=mg(t,n),a=sy((l,u)=>{let c,h=Fe,f;return my(()=>{const d=t[n];Tt(c,d)&&(c=d,u())}),{get(){return l(),i.get?i.get(c):c},set(d){const g=i.set?i.set(d):d;if(!Tt(g,c)&&!(h!==Fe&&Tt(d,h)))return;const p=s.vnode.props,_=!!(p&&(e in p||n in p||r in p)&&(`onUpdate:${e}`in p||`onUpdate:${n}`in p||`onUpdate:${r}`in p));_||(c=d,u()),s.emit(`update:${e}`,g),Tt(d,h)&&(Tt(d,g)&&!Tt(g,f)||_&&h!==Fe&&!Tt(g,c))&&u(),h=d,f=g}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||Fe:a,done:!1}:{done:!0}}}},a}const mg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${At(e)}Modifiers`]||t[`${Vs(e)}Modifiers`];function Yy(t,e,...i){if(t.isUnmounted)return;const s=t.vnode.props||Fe;let n=i;const r=e.startsWith("update:"),o=r&&mg(s,e.slice(7));o&&(o.trim&&(n=i.map(c=>qe(c)?c.trim():c)),o.number&&(n=i.map(za)));let a,l=s[a=gl(e)]||s[a=gl(At(e))];!l&&r&&(l=s[a=gl(Vs(e))]),l&&bi(l,t,6,n);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bi(u,t,6,n)}}const Xy=new WeakMap;function vg(t,e,i=!1){const s=i?Xy:e.emitsCache,n=s.get(t);if(n!==void 0)return n;const r=t.emits;let o={},a=!1;if(!ve(t)){const l=u=>{const c=vg(u,e,!0);c&&(a=!0,gt(o,c))};!i&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Le(t)&&s.set(t,null),null):(de(r)?r.forEach(l=>o[l]=null):gt(o,r),Le(t)&&s.set(t,o),o)}function Xa(t,e){return!t||!go(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ze(t,e[0].toLowerCase()+e.slice(1))||ze(t,Vs(e))||ze(t,e))}function kl(t){const{type:e,vnode:i,proxy:s,withProxy:n,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:f,setupState:d,ctx:g,inheritAttrs:p}=t,_=ra(t);let w,y;try{if(i.shapeFlag&4){const b=n||s,v=b;w=ei(u.call(v,b,c,h,d,f,g)),y=a}else{const b=e;w=ei(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),y=e.props?a:Jy(a)}}catch(b){fs.length=0,yo(b,t,1),w=_e(pt)}let m=w;if(y&&p!==!1){const b=Object.keys(y),{shapeFlag:v}=m;b.length&&v&7&&(r&&b.some(Na)&&(y=Zy(y,r)),m=gs(m,y,!1,!0))}if(i.dirs&&(m=gs(m,null,!1,!0),m.dirs=m.dirs?m.dirs.concat(i.dirs):i.dirs),i.transition){const b=ja(m.type)&&oa(m)||m;Xn(b,i.transition)}return w=m,ra(_),w}function Qy(t,e=!0){let i;for(let s=0;s<t.length;s++){const n=t[s];if(Ls(n)){if(n.type!==pt||n.children==="v-if"){if(i)return;i=n}}else return}return i}const Jy=t=>{let e;for(const i in t)(i==="class"||i==="style"||go(i))&&((e||(e={}))[i]=t[i]);return e},Zy=(t,e)=>{const i={};for(const s in t)(!Na(s)||!(s.slice(9)in e))&&(i[s]=t[s]);return i};function ew(t,e,i){const{props:s,children:n,component:r}=t,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(i&&l>=0){if(l&1024)return!0;if(l&16)return s?Ph(s,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(yg(o,s,f)&&!Xa(u,f))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ph(s,o,u):!0:!!o;return!1}function Ph(t,e,i){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let n=0;n<s.length;n++){const r=s[n];if(yg(e,t,r)&&!Xa(i,r))return!0}return!1}function yg(t,e,i){const s=t[i],n=e[i];return i==="style"&&Le(s)&&Le(n)?!Ds(s,n):s!==n}function Qa({vnode:t,parent:e,suspense:i},s){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.suspense.vnode.el=n.el=s,t=n),n===t)(t=e.vnode).el=s,e=e.parent;else break}i&&i.activeBranch===t&&(i.vnode.el=s)}const wg={},bg=()=>Object.create(wg),_g=t=>Object.getPrototypeOf(t)===wg;function tw(t,e,i,s=!1){const n={},r=bg();t.propsDefaults=Object.create(null),xg(t,e,n,r);for(const o in t.propsOptions[0])o in n||(n[o]=void 0);i?t.props=s?n:us(n):t.type.props?t.props=n:t.props=r,t.attrs=r}function iw(t,e,i,s){const{props:n,attrs:r,vnode:{patchFlag:o}}=t,a=Oe(n),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(Xa(t.emitsOptions,f))continue;const d=e[f];if(l)if(ze(r,f))d!==r[f]&&(r[f]=d,u=!0);else{const g=At(f);n[g]=xc(l,a,g,d,t,!1)}else d!==r[f]&&(r[f]=d,u=!0)}}}else{xg(t,e,n,r)&&(u=!0);let c;for(const h in a)(!e||!ze(e,h)&&((c=Vs(h))===h||!ze(e,c)))&&(l?i&&(i[h]!==void 0||i[c]!==void 0)&&(n[h]=xc(l,a,h,void 0,t,!0)):delete n[h]);if(r!==a)for(const h in r)(!e||!ze(e,h))&&(delete r[h],u=!0)}u&&as(t.attrs,"set","")}function xg(t,e,i,s){const[n,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(cn(l))continue;const u=e[l];let c;n&&ze(n,c=At(l))?!r||!r.includes(c)?i[c]=u:(a||(a={}))[c]=u:Xa(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(r){const l=Oe(i),u=a||Fe;for(let c=0;c<r.length;c++){const h=r[c];i[h]=xc(n,l,h,u[h],t,!ze(u,h))}}return o}function xc(t,e,i,s,n,r){const o=t[i];if(o!=null){const a=ze(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ve(l)){const{propsDefaults:u}=n;if(i in u)s=u[i];else{const c=hr(n);s=u[i]=l.call(null,e),c()}}else s=l;n.ce&&n.ce._setProp(i,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Vs(i))&&(s=!0))}return s}const sw=new WeakMap;function kg(t,e,i=!1){const s=i?sw:e.propsCache,n=s.get(t);if(n)return n;const r=t.props,o={},a=[];let l=!1;if(!ve(t)){const c=h=>{l=!0;const[f,d]=kg(h,e,!0);gt(o,f),d&&a.push(...d)};!i&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!r&&!l)return Le(t)&&s.set(t,zn),zn;if(de(r))for(let c=0;c<r.length;c++){const h=At(r[c]);Ch(h)&&(o[h]=Fe)}else if(r)for(const c in r){const h=At(c);if(Ch(h)){const f=r[c],d=o[h]=de(f)||ve(f)?{type:f}:gt({},f),g=d.type;let p=!1,_=!0;if(de(g))for(let w=0;w<g.length;++w){const y=g[w],m=ve(y)&&y.name;if(m==="Boolean"){p=!0;break}else m==="String"&&(_=!1)}else p=ve(g)&&g.name==="Boolean";d[0]=p,d[1]=_,(p||ze(d,"default"))&&a.push(h)}}const u=[o,a];return Le(t)&&s.set(t,u),u}function Ch(t){return t[0]!=="$"&&!cn(t)}const Cu=t=>t==="_"||t==="_ctx"||t==="$stable",Mu=t=>de(t)?t.map(ei):[ei(t)],nw=(t,e,i)=>{if(e._n)return e;const s=Ru((...n)=>Mu(e(...n)),i);return s._c=!1,s},Tg=(t,e,i)=>{const s=t._ctx;for(const n in t){if(Cu(n))continue;const r=t[n];if(ve(r))e[n]=nw(n,r,s);else if(r!=null){const o=Mu(r);e[n]=()=>o}}},Sg=(t,e)=>{const i=Mu(e);t.slots.default=()=>i},Eg=(t,e,i)=>{for(const s in e)(i||!Cu(s))&&(t[s]=e[s])},rw=(t,e,i)=>{const s=t.slots=bg();if(t.vnode.shapeFlag&32){const n=e._;n?(Eg(s,e,i),i&&xp(s,"_",n,!0)):Tg(e,s)}else e&&Sg(t,e)},ow=(t,e,i)=>{const{vnode:s,slots:n}=t;let r=!0,o=Fe;if(s.shapeFlag&32){const a=e._;a?i&&a===1?r=!1:Eg(n,e,i):(r=!e.$stable,Tg(e,n)),o=e}else e&&(Sg(t,e),o={default:1});if(r)for(const a in n)!Cu(a)&&o[a]==null&&delete n[a]},wt=Ng;function aw(t){return Rg(t)}function lw(t){return Rg(t,Ty)}function Rg(t,e){const i=Ba();i.__VUE__=!0;const{insert:s,remove:n,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:d=Gi,insertStaticContent:g}=t,p=(T,E,N,$=null,B=null,H=null,Z=void 0,K=null,Q=!!E.dynamicChildren)=>{if(T===E)return;T&&!Ti(T,E)&&($=I(T),ae(T,B,H,!0),T=null),E.patchFlag===-2&&(Q=!1,E.dynamicChildren=null);const{type:j,ref:W,shapeFlag:V}=E;switch(j){case dn:_(T,E,N,$);break;case pt:w(T,E,N,$);break;case Br:T==null&&y(E,N,$,Z);break;case Ye:M(T,E,N,$,B,H,Z,K,Q);break;default:V&1?v(T,E,N,$,B,H,Z,K,Q):V&6?D(T,E,N,$,B,H,Z,K,Q):(V&64||V&128)&&j.process(T,E,N,$,B,H,Z,K,Q,ee)}W!=null&&B?Gn(W,T&&T.ref,H,E||T,!E):W==null&&T&&T.ref!=null&&Gn(T.ref,null,H,T,!0)},_=(T,E,N,$)=>{if(T==null)s(E.el=a(E.children),N,$);else{const B=E.el=T.el;E.children!==T.children&&u(B,E.children)}},w=(T,E,N,$)=>{T==null?s(E.el=l(E.children||""),N,$):E.el=T.el},y=(T,E,N,$)=>{[T.el,T.anchor]=g(T.children,E,N,$,T.el,T.anchor)},m=({el:T,anchor:E},N,$)=>{let B;for(;T&&T!==E;)B=f(T),s(T,N,$),T=B;s(E,N,$)},b=({el:T,anchor:E})=>{let N;for(;T&&T!==E;)N=f(T),n(T),T=N;n(E)},v=(T,E,N,$,B,H,Z,K,Q)=>{if(E.type==="svg"?Z="svg":E.type==="math"&&(Z="mathml"),T==null)x(E,N,$,B,H,Z,K,Q);else{const j=T.el&&T.el._isVueCE?T.el:null;try{j&&j._beginPatch(),S(T,E,B,H,Z,K,Q)}finally{j&&j._endPatch()}}},x=(T,E,N,$,B,H,Z,K)=>{let Q,j;const{props:W,shapeFlag:V,transition:Y,dirs:re}=T;if(Q=T.el=o(T.type,H,W&&W.is,W),V&8?c(Q,T.children):V&16&&R(T.children,Q,null,$,B,Tl(T,H),Z,K),re&&Di(T,null,$,"created"),k(Q,T,T.scopeId,Z,$),W){for(const be in W)be!=="value"&&!cn(be)&&r(Q,be,null,W[be],H,$);"value"in W&&r(Q,"value",null,W.value,H),(j=W.onVnodeBeforeMount)&&Ht(j,$,T)}re&&Di(T,null,$,"beforeMount");const me=Pg(B,Y);me&&Y.beforeEnter(Q),s(Q,E,N),((j=W&&W.onVnodeMounted)||me||re)&&wt(()=>{j&&Ht(j,$,T),me&&Y.enter(Q),re&&Di(T,null,$,"mounted")},B)},k=(T,E,N,$,B)=>{if(N&&d(T,N),$)for(let H=0;H<$.length;H++)d(T,$[H]);if(B){let H=B.subTree;if(E===H||fa(H.type)&&(H.ssContent===E||H.ssFallback===E)){const Z=B.vnode;k(T,Z,Z.scopeId,Z.slotScopeIds,B.parent)}}},R=(T,E,N,$,B,H,Z,K,Q=0)=>{for(let j=Q;j<T.length;j++){const W=T[j]=K?ns(T[j]):ei(T[j]);p(null,W,E,N,$,B,H,Z,K)}},S=(T,E,N,$,B,H,Z)=>{const K=E.el=T.el;let{patchFlag:Q,dynamicChildren:j,dirs:W}=E;Q|=T.patchFlag&16;const V=T.props||Fe,Y=E.props||Fe;let re;if(N&&js(N,!1),(re=Y.onVnodeBeforeUpdate)&&Ht(re,N,E,T),W&&Di(E,T,N,"beforeUpdate"),N&&js(N,!0),j&&(!T.dynamicChildren||T.dynamicChildren.length!==j.length)&&(Q=0,Z=!1,j=null),(V.innerHTML&&Y.innerHTML==null||V.textContent&&Y.textContent==null)&&c(K,""),j?P(T.dynamicChildren,j,K,N,$,Tl(E,B),H):Z||q(T,E,K,null,N,$,Tl(E,B),H,!1),Q>0){if(Q&16)A(K,V,Y,N,B);else if(Q&2&&V.class!==Y.class&&r(K,"class",null,Y.class,B),Q&4&&r(K,"style",V.style,Y.style,B),Q&8){const me=E.dynamicProps;for(let be=0;be<me.length;be++){const Te=me[be],Ae=V[Te],se=Y[Te];(se!==Ae||Te==="value")&&r(K,Te,Ae,se,B,N)}}Q&1&&T.children!==E.children&&c(K,E.children)}else!Z&&j==null&&A(K,V,Y,N,B);((re=Y.onVnodeUpdated)||W)&&wt(()=>{re&&Ht(re,N,E,T),W&&Di(E,T,N,"updated")},$)},P=(T,E,N,$,B,H,Z)=>{for(let K=0;K<E.length;K++){const Q=T[K],j=E[K],W=Q.el&&(Q.type===Ye||!Ti(Q,j)||Q.shapeFlag&198)?h(Q.el):N;p(Q,j,W,null,$,B,H,Z,!0)}},A=(T,E,N,$,B)=>{if(E!==N){if(E!==Fe)for(const H in E)!cn(H)&&!(H in N)&&r(T,H,E[H],null,B,$);for(const H in N){if(cn(H))continue;const Z=N[H],K=E[H];Z!==K&&H!=="value"&&r(T,H,K,Z,B,$)}"value"in N&&r(T,"value",E.value,N.value,B)}},M=(T,E,N,$,B,H,Z,K,Q)=>{const j=E.el=T?T.el:a(""),W=E.anchor=T?T.anchor:a("");let{patchFlag:V,dynamicChildren:Y,slotScopeIds:re}=E;re&&(K=K?K.concat(re):re),T==null?(s(j,N,$),s(W,N,$),R(E.children||[],N,W,B,H,Z,K,Q)):V>0&&V&64&&Y&&T.dynamicChildren&&T.dynamicChildren.length===Y.length?(P(T.dynamicChildren,Y,N,B,H,Z,K),(E.key!=null||B&&E===B.subTree)&&Cg(T,E,!0)):q(T,E,N,W,B,H,Z,K,Q)},D=(T,E,N,$,B,H,Z,K,Q)=>{E.slotScopeIds=K,T==null?E.shapeFlag&512?B.ctx.activate(E,N,$,Z,Q):F(E,N,$,B,H,Z,Q):O(T,E,Q)},F=(T,E,N,$,B,H,Z)=>{const K=T.component=xw(T,$,B);if(Wa(T)&&(K.ctx.renderer=ee),kw(K,!1,Z),K.asyncDep){if(B&&B.registerDep(K,C,Z),!T.el){const Q=K.subTree=_e(pt);w(null,Q,E,N),T.placeholder=Q.el}}else C(K,T,E,N,B,H,Z)},O=(T,E,N)=>{const $=E.component=T.component;if(ew(T,E,N))if($.asyncDep&&!$.asyncResolved){L($,E,N);return}else $.next=E,$.update();else E.el=T.el,$.vnode=E},C=(T,E,N,$,B,H,Z)=>{const K=()=>{if(T.isMounted){let{next:V,bu:Y,u:re,parent:me,vnode:be}=T;{const ke=Mg(T);if(ke){V&&(V.el=be.el,L(T,V,Z)),ke.asyncDep.then(()=>{wt(()=>{T.isUnmounted||j()},B)});return}}let Te=V,Ae;js(T,!1),V?(V.el=be.el,L(T,V,Z)):V=be,Y&&Un(Y),(Ae=V.props&&V.props.onVnodeBeforeUpdate)&&Ht(Ae,me,V,be),js(T,!0);const se=kl(T),le=T.subTree;T.subTree=se,p(le,se,h(le.el),I(le),T,B,H),V.el=se.el,Te===null&&Qa(T,se.el),re&&wt(re,B),(Ae=V.props&&V.props.onVnodeUpdated)&&wt(()=>Ht(Ae,me,V,be),B)}else{let V;const{el:Y,props:re}=E,{bm:me,m:be,parent:Te,root:Ae,type:se}=T,le=hs(E);if(js(T,!1),me&&Un(me),!le&&(V=re&&re.onVnodeBeforeMount)&&Ht(V,Te,E),js(T,!0),Y&&Se){const ke=()=>{T.subTree=kl(T),Se(Y,T.subTree,T,B,null)};le&&se.__asyncHydrate?se.__asyncHydrate(Y,T,ke):ke()}else{Ae.ce&&Ae.ce._hasShadowRoot()&&Ae.ce._injectChildStyle(se,T.parent?T.parent.type:void 0);const ke=T.subTree=kl(T);p(null,ke,N,$,T,B,H),E.el=ke.el}if(be&&wt(be,B),!le&&(V=re&&re.onVnodeMounted)){const ke=E;wt(()=>Ht(V,Te,ke),B)}(E.shapeFlag&256||Te&&hs(Te.vnode)&&Te.vnode.shapeFlag&256)&&T.a&&wt(T.a,B),T.isMounted=!0,E=N=$=null}};T.scope.on();const Q=T.effect=new Cp(K);T.scope.off();const j=T.update=Q.run.bind(Q),W=T.job=Q.runIfDirty.bind(Q);W.i=T,W.id=T.uid,Q.scheduler=()=>Eu(W),js(T,!0),j()},L=(T,E,N)=>{E.component=T;const $=T.vnode.props;T.vnode=E,T.next=null,iw(T,E.props,$,N),ow(T,E.children,N),ds(),bh(T),ps()},q=(T,E,N,$,B,H,Z,K,Q=!1)=>{const j=T&&T.children,W=T?T.shapeFlag:0,V=E.children,{patchFlag:Y,shapeFlag:re}=E;if(Y>0){if(Y&128){he(j,V,N,$,B,H,Z,K,Q);return}else if(Y&256){ce(j,V,N,$,B,H,Z,K,Q);return}}re&8?(W&16&&we(j,B,H),V!==j&&c(N,V)):W&16?re&16?he(j,V,N,$,B,H,Z,K,Q):we(j,B,H,!0):(W&8&&c(N,""),re&16&&R(V,N,$,B,H,Z,K,Q))},ce=(T,E,N,$,B,H,Z,K,Q)=>{T=T||zn,E=E||zn;const j=T.length,W=E.length,V=Math.min(j,W);let Y;for(Y=0;Y<V;Y++){const re=E[Y]=Q?ns(E[Y]):ei(E[Y]);p(T[Y],re,N,null,B,H,Z,K,Q)}j>W?we(T,B,H,!0,!1,V):R(E,N,$,B,H,Z,K,Q,V)},he=(T,E,N,$,B,H,Z,K,Q)=>{let j=0;const W=E.length;let V=T.length-1,Y=W-1;for(;j<=V&&j<=Y;){const re=T[j],me=E[j]=Q?ns(E[j]):ei(E[j]);if(Ti(re,me))p(re,me,N,null,B,H,Z,K,Q);else break;j++}for(;j<=V&&j<=Y;){const re=T[V],me=E[Y]=Q?ns(E[Y]):ei(E[Y]);if(Ti(re,me))p(re,me,N,null,B,H,Z,K,Q);else break;V--,Y--}if(j>V){if(j<=Y){const re=Y+1,me=re<W?E[re].el:$;for(;j<=Y;)p(null,E[j]=Q?ns(E[j]):ei(E[j]),N,me,B,H,Z,K,Q),j++}}else if(j>Y)for(;j<=V;)ae(T[j],B,H,!0),j++;else{const re=j,me=j,be=new Map;for(j=me;j<=Y;j++){const G=E[j]=Q?ns(E[j]):ei(E[j]);G.key!=null&&be.set(G.key,j)}let Te,Ae=0;const se=Y-me+1;let le=!1,ke=0;const Be=new Array(se);for(j=0;j<se;j++)Be[j]=0;for(j=re;j<=V;j++){const G=T[j];if(Ae>=se){ae(G,B,H,!0);continue}let te;if(G.key!=null)te=be.get(G.key);else for(Te=me;Te<=Y;Te++)if(Be[Te-me]===0&&Ti(G,E[Te])){te=Te;break}te===void 0?ae(G,B,H,!0):(Be[te-me]=j+1,te>=ke?ke=te:le=!0,p(G,E[te],N,null,B,H,Z,K,Q),Ae++)}const We=le?cw(Be):zn;for(Te=We.length-1,j=se-1;j>=0;j--){const G=me+j,te=E[G],Re=E[G+1],Ne=G+1<W?Re.el||Ag(Re):$;Be[j]===0?p(null,te,N,Ne,B,H,Z,K,Q):le&&(Te<0||j!==We[Te]?fe(te,N,Ne,2):Te--)}}},fe=(T,E,N,$,B=null)=>{const{el:H,type:Z,transition:K,children:Q,shapeFlag:j}=T;if(j&6){fe(T.component.subTree,E,N,$);return}if(j&128){T.suspense.move(E,N,$);return}if(j&64){Z.move(T,E,N,ee);return}if(Z===Ye){s(H,E,N);for(let V=0;V<Q.length;V++)fe(Q[V],E,N,$);s(T.anchor,E,N);return}if(Z===Br){m(T,E,N);return}if($!==2&&j&1&&K)if($===0)K.persisted&&!H[gi]?s(H,E,N):(K.beforeEnter(H),s(H,E,N),wt(()=>K.enter(H),B));else{const{leave:V,delayLeave:Y,afterLeave:re}=K,me=()=>{T.ctx.isUnmounted?n(H):s(H,E,N)},be=()=>{const Te=H._isLeaving||!!H[gi];H._isLeaving&&H[gi](!0),K.persisted&&!Te?me():V(H,()=>{me(),re&&re()})};Y?Y(H,me,be):be()}else s(H,E,N)},ae=(T,E,N,$=!1,B=!1)=>{const{type:H,props:Z,ref:K,children:Q,dynamicChildren:j,shapeFlag:W,patchFlag:V,dirs:Y,cacheIndex:re,memo:me}=T;if(V===-2&&(B=!1),K!=null&&(ds(),Gn(K,null,N,T,!0),ps()),re!=null&&(E.renderCache[re]=void 0),W&256){E.ctx.deactivate(T);return}const be=W&1&&Y,Te=!hs(T);let Ae;if(Te&&(Ae=Z&&Z.onVnodeBeforeUnmount)&&Ht(Ae,E,T),W&6)pe(T.component,N,$);else{if(W&128){T.suspense.unmount(N,$);return}be&&Di(T,null,E,"beforeUnmount"),W&64?T.type.remove(T,E,N,ee,$):j&&!j.hasOnce&&(H!==Ye||V>0&&V&64)?we(j,E,N,!1,!0):(H===Ye&&V&384||!B&&W&16)&&we(Q,E,N),$&&ie(T)}const se=me!=null&&re==null;(Te&&(Ae=Z&&Z.onVnodeUnmounted)||be||se)&&wt(()=>{Ae&&Ht(Ae,E,T),be&&Di(T,null,E,"unmounted"),se&&(T.el=null)},N)},ie=T=>{const{type:E,el:N,anchor:$,transition:B}=T;if(E===Ye){xe(N,$);return}if(E===Br){b(T);return}const H=()=>{n(N),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:Z,delayLeave:K}=B,Q=()=>Z(N,H);K?K(T.el,H,Q):Q()}else H()},xe=(T,E)=>{let N;for(;T!==E;)N=f(T),n(T),T=N;n(E)},pe=(T,E,N)=>{const{bum:$,scope:B,job:H,subTree:Z,um:K,m:Q,a:j}=T;ha(Q),ha(j),$&&Un($),B.stop(),H&&(H.flags|=8,ae(Z,T,E,N)),K&&wt(K,E),wt(()=>{T.isUnmounted=!0},E)},we=(T,E,N,$=!1,B=!1,H=0)=>{for(let Z=H;Z<T.length;Z++)ae(T[Z],E,N,$,B)},I=T=>{if(T.shapeFlag&6)return I(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const E=f(T.anchor||T.el),N=E&&E[yy];return N?f(N):E};let J=!1;const X=(T,E,N)=>{let $;T==null?E._vnode&&(ae(E._vnode,null,null,!0),$=E._vnode.component):p(E._vnode||null,T,E,null,null,null,N),E._vnode=T,J||(J=!0,bh($),na(),J=!1)},ee={p,um:ae,m:fe,r:ie,mt:F,mc:R,pc:q,pbc:P,n:I,o:t};let ge,Se;return e&&([ge,Se]=e(ee)),{render:X,hydrate:ge,createApp:Ky(X,ge)}}function Tl({type:t,props:e},i){return i==="svg"&&t==="foreignObject"||i==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:i}function js({effect:t,job:e},i){i?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Pg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cg(t,e,i=!1){const s=t.children,n=e.children;if(de(s)&&de(n))for(let r=0;r<s.length;r++){const o=s[r];let a=n[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[r]=ns(n[r]),a.el=o.el),!i&&a.patchFlag!==-2&&Cg(o,a)),a.type===dn&&(a.patchFlag===-1&&(a=n[r]=ns(a)),a.el=o.el),a.type===pt&&!a.el&&(a.el=o.el)}}function cw(t){const e=t.slice(),i=[0];let s,n,r,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(n=i[i.length-1],t[n]<u){e[s]=n,i.push(s);continue}for(r=0,o=i.length-1;r<o;)a=r+o>>1,t[i[a]]<u?r=a+1:o=a;u<t[i[r]]&&(r>0&&(e[s]=i[r-1]),i[r]=s)}}for(r=i.length,o=i[r-1];r-- >0;)i[r]=o,o=e[o];return i}function Mg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mg(e)}function ha(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ag(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ag(e.subTree):null}const fa=t=>t.__isSuspense;let kc=0;const uw={name:"Suspense",__isSuspense:!0,process(t,e,i,s,n,r,o,a,l,u){if(t==null)hw(e,i,s,n,r,o,a,l,u);else{if(r&&r.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}fw(t,e,i,s,n,o,a,l,u)}},hydrate:dw,normalize:pw},Og=uw;function Zr(t,e){const i=t.props&&t.props[e];ve(i)&&i()}function hw(t,e,i,s,n,r,o,a,l){const{p:u,o:{createElement:c}}=l,h=c("div"),f=t.suspense=Fg(t,n,s,e,h,i,r,o,a,l);u(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(Zr(t,"onPending"),Zr(t,"onFallback"),u(null,t.ssFallback,e,i,s,null,r,o),$n(f,t.ssFallback)):f.resolve(!1,!0)}function fw(t,e,i,s,n,r,o,a,{p:l,um:u,o:{createElement:c}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:p,isInFallback:_,isHydrating:w}=h;if(p)h.pendingBranch=f,Ti(p,f)?(l(p,f,h.hiddenContainer,null,n,h,r,o,a),h.deps<=0?h.resolve():_&&(w||(l(g,d,i,s,n,null,r,o,a),$n(h,d)))):(h.pendingId=kc++,w?(h.isHydrating=!1,h.activeBranch=p):u(p,n,h),h.deps=0,h.effects.length=0,h.hiddenContainer=c("div"),_?(l(null,f,h.hiddenContainer,null,n,h,r,o,a),h.deps<=0?h.resolve():(l(g,d,i,s,n,null,r,o,a),$n(h,d))):g&&Ti(g,f)?(l(g,f,i,s,n,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,n,h,r,o,a),h.deps<=0&&h.resolve()));else if(g&&Ti(g,f))l(g,f,i,s,n,h,r,o,a),$n(h,f);else if(Zr(e,"onPending"),h.pendingBranch=f,f.shapeFlag&512?h.pendingId=f.component.suspenseId:h.pendingId=kc++,l(null,f,h.hiddenContainer,null,n,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:y,pendingId:m}=h;y>0?setTimeout(()=>{h.pendingId===m&&h.fallback(d)},y):y===0&&h.fallback(d)}}function Fg(t,e,i,s,n,r,o,a,l,u,c=!1){const{p:h,m:f,um:d,n:g,o:{parentNode:p,remove:_}}=u;let w;const y=gw(t);y&&e&&e.pendingBranch&&(w=e.pendingId,e.deps++);const m=t.props?kp(t.props.timeout):void 0,b=r,v={vnode:t,parent:e,parentComponent:i,namespace:o,container:s,hiddenContainer:n,deps:0,pendingId:kc++,timeout:typeof m=="number"?m:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(x=!1,k=!1){const{vnode:R,activeBranch:S,pendingBranch:P,pendingId:A,effects:M,parentComponent:D,container:F,isInFallback:O}=v;let C=!1;if(v.isHydrating)v.isHydrating=!1;else if(!x){C=S&&P.transition&&P.transition.mode==="out-in";let ce=!1;C&&(S.transition.afterLeave=()=>{A===v.pendingId&&(f(P,F,r===b&&!ce?g(S):r,0),Qr(M),O&&R.ssFallback&&(R.ssFallback.el=null))}),S&&!v.isFallbackMountPending&&(p(S.el)===F&&(r=g(S),ce=!0),d(S,D,v,!0),!C&&O&&R.ssFallback&&wt(()=>R.ssFallback.el=null,v)),C||f(P,F,r,0)}v.isFallbackMountPending=!1,$n(v,P),v.pendingBranch=null,v.isInFallback=!1;let L=v.parent,q=!1;for(;L;){if(L.pendingBranch){for(let ce=0;ce<M.length;ce++)L.effects.push(M[ce]);q=!0;break}L=L.parent}!q&&!C&&Qr(M),v.effects=[],y&&e&&e.pendingBranch&&w===e.pendingId&&(e.deps--,e.deps===0&&!k&&e.resolve()),Zr(R,"onResolve")},fallback(x){if(!v.pendingBranch)return;const{vnode:k,activeBranch:R,parentComponent:S,container:P,namespace:A}=v;Zr(k,"onFallback");const M=g(R),D=()=>{v.isFallbackMountPending=!1,v.isInFallback&&(h(null,x,P,M,S,null,A,a,l),$n(v,x))},F=x.transition&&x.transition.mode==="out-in";F&&(v.isFallbackMountPending=!0,R.transition.afterLeave=D),v.isInFallback=!0,d(R,S,null,!0),F||D()},move(x,k,R){v.activeBranch&&f(v.activeBranch,x,k,R),v.container=x},next(){return v.activeBranch&&g(v.activeBranch)},registerDep(x,k,R){const S=!!v.pendingBranch;S&&v.deps++;const P=x.vnode.el;x.asyncDep.catch(A=>{yo(A,x,0)}).then(A=>{if(x.isUnmounted||v.isUnmounted||v.pendingId!==x.suspenseId)return;eo(),x.asyncResolved=!0;const{vnode:M}=x;Tc(x,A),P&&(M.el=P);const D=!P&&x.subTree.el;k(x,M,p(P||x.subTree.el),P?null:g(x.subTree),v,o,R),D&&(M.placeholder=null,_(D)),Qa(x,M.el),S&&--v.deps===0&&v.resolve()})},unmount(x,k){v.isUnmounted=!0,v.activeBranch&&d(v.activeBranch,i,x,k),v.pendingBranch&&d(v.pendingBranch,i,x,k)}};return v}function dw(t,e,i,s,n,r,o,a,l){const u=e.suspense=Fg(e,s,i,t.parentNode,document.createElement("div"),null,n,r,o,a,!0),c=l(t,u.pendingBranch=e.ssContent,i,u,r,o);return u.deps===0&&u.resolve(!1,!0),c}function pw(t){const{shapeFlag:e,children:i}=t,s=e&32;t.ssContent=Mh(s?i.default:i),t.ssFallback=s?Mh(i.fallback):_e(pt)}function Mh(t){let e;if(ve(t)){const i=Qn&&t._c;i&&(t._d=!1,Ee()),t=t(),i&&(t._d=!0,e=jt,Ja())}return de(t)&&(t=Qy(t)),t=ei(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(i=>i!==t)),t}function Ng(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):Qr(t)}function $n(t,e){t.activeBranch=e;const{vnode:i,parentComponent:s}=t;let n=e.el;for(;!n&&e.component;)e=e.component.subTree,n=e.el;i.el=n,s&&s.subTree===i&&(s.vnode.el=n,Qa(s,n))}function gw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ye=Symbol.for("v-fgt"),dn=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Br=Symbol.for("v-stc"),fs=[];let jt=null;function Ee(t=!1){fs.push(jt=t?null:[])}function Ja(){fs.pop(),jt=fs[fs.length-1]||null}let Qn=1;function da(t,e=!1){Qn+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function Dg(t){return t.dynamicChildren=Qn>0?jt||zn:null,Ja(),Qn>0&&jt&&jt.push(t),t}function Ge(t,e,i,s,n,r){return Dg(ye(t,e,i,s,n,r,!0))}function ti(t,e,i,s,n){return Dg(_e(t,e,i,s,n,!0))}function Ls(t){return t?t.__v_isVNode===!0:!1}function Ti(t,e){return t.type===e.type&&t.key===e.key}const Lg=({key:t})=>t??null,Wo=({ref:t,ref_key:e,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||ot(t)||ve(t)?{i:St,r:t,k:e,f:!!i}:t:null);function ye(t,e=null,i=null,s=0,n=null,r=t===Ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lg(e),ref:e&&Wo(e),scopeId:Yp,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:St};return a?(pa(l,i),r&128&&t.normalize(l)):i&&(l.shapeFlag|=qe(i)?8:16),Qn>0&&!o&&jt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&jt.push(l),l}const _e=mw;function mw(t,e=null,i=null,s=0,n=null,r=!1){if((!t||t===cg)&&(t=pt),Ls(t)){const a=gs(t,e,!0);return i&&pa(a,i),Qn>0&&!r&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag=-2,a}if(Rw(t)&&(t=t.__vccOpts),e){e=vw(e);let{class:a,style:l}=e;a&&!qe(a)&&(e.class=It(a)),Le(l)&&(Ha(l)&&!de(l)&&(l=gt({},l)),e.style=mo(l))}const o=qe(t)?1:fa(t)?128:ja(t)?64:Le(t)?4:ve(t)?2:0;return ye(t,e,i,s,n,o,r,!0)}function vw(t){return t?Ha(t)||_g(t)?gt({},t):t:null}function gs(t,e,i=!1,s=!1){const{props:n,ref:r,patchFlag:o,children:a,transition:l}=t,u=e?ww(n||{},e):n,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Lg(u),ref:e&&e.ref?i&&r?de(r)?r.concat(Wo(e)):[r,Wo(e)]:Wo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gs(t.ssContent),ssFallback:t.ssFallback&&gs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Xn(c,l.clone(c)),c}function Au(t=" ",e=0){return _e(dn,null,t,e)}function yw(t,e){const i=_e(Br,null,t);return i.staticCount=e,i}function ss(t="",e=!1){return e?(Ee(),ti(pt,null,t)):_e(pt,null,t)}function ei(t){return t==null||typeof t=="boolean"?_e(pt):de(t)?_e(Ye,null,t.slice()):Ls(t)?ns(t):_e(dn,null,String(t))}function ns(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gs(t)}function pa(t,e){let i=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(de(e))i=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),pa(t,n()),n._c&&(n._d=!0));return}else{i=32;const n=e._;!n&&!_g(e)?e._ctx=St:n===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ve(e)){if(s&65){pa(t,{default:e});return}e={default:e,_ctx:St},i=32}else e=String(e),s&64?(i=16,e=[Au(e)]):i=8;t.children=e,t.shapeFlag|=i}function ww(...t){const e={};for(let i=0;i<t.length;i++){const s=t[i];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=It([e.class,s.class]));else if(n==="style")e.style=mo([e.style,s.style]);else if(go(n)){const r=e[n],o=s[n];o&&r!==o&&!(de(r)&&r.includes(o))?e[n]=r?[].concat(r,o):o:o==null&&r==null&&!Na(n)&&(e[n]=o)}else n!==""&&(e[n]=s[n])}return e}function Ht(t,e,i,s=null){bi(t,e,7,[i,s])}const bw=gg();let _w=0;function xw(t,e,i){const s=t.type,n=(e?e.appContext:t.appContext)||bw,r={uid:_w++,vnode:t,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kg(s,n),emitsOptions:vg(s,n),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Yy.bind(null,r),t.ce&&t.ce(r),r}let Pt=null;const Pi=()=>Pt||St;let ga,As;{const t=Ba(),e=(i,s)=>{let n;return(n=t[i])||(n=t[i]=[]),n.push(s),r=>{n.length>1?n.forEach(o=>o(r)):n[0](r)}};ga=e("__VUE_INSTANCE_SETTERS__",i=>Pt=i),As=e("__VUE_SSR_SETTERS__",i=>Jn=i)}const hr=t=>{const e=Pt;return ga(t),t.scope.on(),()=>{t.scope.off(),ga(e)}},eo=()=>{Pt&&Pt.scope.off(),ga(null)};function Ig(t){return t.vnode.shapeFlag&4}let Jn=!1;function kw(t,e=!1,i=!1){e&&As(e);const{props:s,children:n}=t.vnode,r=Ig(t);tw(t,s,r,e),rw(t,n,i||e);const o=r?Tw(t,e):void 0;return e&&As(!1),o}function Tw(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vy);const{setup:s}=i;if(s){ds();const n=t.setupContext=s.length>1?Ew(t):null,r=hr(t),o=vo(s,t,0,[t.props,n]),a=vu(o);if(ps(),r(),(a||t.sp)&&!hs(t)&&ig(t),a){if(o.then(eo,eo),e)return o.then(l=>{As(!0);try{Tc(t,l,e)}finally{As(!1)}}).catch(l=>{yo(l,t,0)});t.asyncDep=o}else Tc(t,o)}else zg(t)}function Tc(t,e,i){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=jp(e)),zg(t)}function zg(t,e,i){const s=t.type;t.render||(t.render=s.render||Gi);{const n=hr(t);ds();try{Hy(t)}finally{ps(),n()}}}const Sw={get(t,e){return Rt(t,"get",""),t[e]}};function Ew(t){const e=i=>{t.exposed=i||{}};return{attrs:new Proxy(t.attrs,Sw),slots:t.slots,emit:t.emit,expose:e}}function Za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jp(Zv(t.exposed)),{get(e,i){if(i in e)return e[i];if(i in zr)return zr[i](t)},has(e,i){return i in e||i in zr}})):t.proxy}function Sc(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function Rw(t){return ve(t)&&"__vccOpts"in t}const nt=(t,e)=>ly(t,e,Jn);function mi(t,e,i){try{da(-1);const s=arguments.length;return s===2?Le(e)&&!de(e)?Ls(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?i=Array.prototype.slice.call(arguments,2):s===3&&Ls(i)&&(i=[i]),_e(t,e,i))}finally{da(1)}}const Pw="3.5.41";let Ec;const Ah=typeof window<"u"&&window.trustedTypes;if(Ah)try{Ec=Ah.createPolicy("vue",{createHTML:t=>t})}catch{}const Bg=Ec?t=>Ec.createHTML(t):t=>t,Cw="http://www.w3.org/2000/svg",Mw="http://www.w3.org/1998/Math/MathML",ts=typeof document<"u"?document:null,Oh=ts&&ts.createElement("template"),Aw={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,s)=>{const n=e==="svg"?ts.createElementNS(Cw,t):e==="mathml"?ts.createElementNS(Mw,t):i?ts.createElement(t,{is:i}):ts.createElement(t);return t==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:t=>ts.createTextNode(t),createComment:t=>ts.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ts.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,i,s,n,r){const o=i?i.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),i),!(n===r||!(n=n.nextSibling)););else{Oh.innerHTML=Bg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Oh.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,i)}return[o?o.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}},bs="transition",_r="animation",to=Symbol("_vtc"),Ug={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ow=gt({},Qp,Ug),Fw=t=>(t.displayName="Transition",t.props=Ow,t),Nw=Fw((t,{slots:e})=>mi(_y,Dw(t),e)),qs=(t,e=[])=>{de(t)?t.forEach(i=>i(...e)):t&&t(...e)},Fh=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function Dw(t){const e={};for(const M in t)M in Ug||(e[M]=t[M]);if(t.css===!1)return e;const{name:i="v",type:s,duration:n,enterFromClass:r=`${i}-enter-from`,enterActiveClass:o=`${i}-enter-active`,enterToClass:a=`${i}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${i}-leave-from`,leaveActiveClass:f=`${i}-leave-active`,leaveToClass:d=`${i}-leave-to`}=t,g=Lw(n),p=g&&g[0],_=g&&g[1],{onBeforeEnter:w,onEnter:y,onEnterCancelled:m,onLeave:b,onLeaveCancelled:v,onBeforeAppear:x=w,onAppear:k=y,onAppearCancelled:R=m}=e,S=(M,D,F,O)=>{M._enterCancelled=O,Ws(M,D?c:a),Ws(M,D?u:o),F&&F()},P=(M,D)=>{M._isLeaving=!1,Ws(M,h),Ws(M,d),Ws(M,f),D&&D()},A=M=>(D,F)=>{const O=M?k:y,C=()=>S(D,M,F);qs(O,[D,C]),Nh(()=>{Ws(D,M?l:r),Xi(D,M?c:a),Fh(O)||Dh(D,s,p,C)})};return gt(e,{onBeforeEnter(M){qs(w,[M]),Xi(M,r),Xi(M,o)},onBeforeAppear(M){qs(x,[M]),Xi(M,l),Xi(M,u)},onEnter:A(!1),onAppear:A(!0),onLeave(M,D){M._isLeaving=!0;const F=()=>P(M,D);Xi(M,h),M._enterCancelled?(Xi(M,f),zh(M)):(zh(M),Xi(M,f)),Nh(()=>{M._isLeaving&&(Ws(M,h),Xi(M,d),Fh(b)||Dh(M,s,_,F))}),qs(b,[M,F])},onEnterCancelled(M){S(M,!1,void 0,!0),qs(m,[M])},onAppearCancelled(M){S(M,!0,void 0,!0),qs(R,[M])},onLeaveCancelled(M){P(M),qs(v,[M])}})}function Lw(t){if(t==null)return null;if(Le(t))return[Sl(t.enter),Sl(t.leave)];{const e=Sl(t);return[e,e]}}function Sl(t){return kp(t)}function Xi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.add(i)),(t[to]||(t[to]=new Set)).add(e)}function Ws(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const i=t[to];i&&(i.delete(e),i.size||(t[to]=void 0))}function Nh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Iw=0;function Dh(t,e,i,s){const n=t._endId=++Iw,r=()=>{n===t._endId&&s()};if(i!=null)return setTimeout(r,i);const{type:o,timeout:a,propCount:l}=zw(t,e);if(!o)return s();const u=o+"end";let c=0;const h=()=>{t.removeEventListener(u,f),r()},f=d=>{d.target===t&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),t.addEventListener(u,f)}function zw(t,e){const i=window.getComputedStyle(t),s=g=>(i[g]||"").split(", "),n=s(`${bs}Delay`),r=s(`${bs}Duration`),o=Lh(n,r),a=s(`${_r}Delay`),l=s(`${_r}Duration`),u=Lh(a,l);let c=null,h=0,f=0;e===bs?o>0&&(c=bs,h=o,f=r.length):e===_r?u>0&&(c=_r,h=u,f=l.length):(h=Math.max(o,u),c=h>0?o>u?bs:_r:null,f=c?c===bs?r.length:l.length:0);const d=c===bs&&/\b(?:transform|all)(?:,|$)/.test(s(`${bs}Property`).toString());return{type:c,timeout:h,propCount:f,hasTransform:d}}function Lh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((i,s)=>Ih(i)+Ih(t[s])))}function Ih(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zh(t){return(t?t.ownerDocument:document).body.offsetHeight}function Bw(t,e,i){const s=t[to];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}const Bh=Symbol("_vod"),Uw=Symbol("_vsh"),Vw=Symbol(""),Hw=/(?:^|;)\s*display\s*:/;function Gw(t,e,i){const s=t.style,n=qe(i);let r=!1;if(i&&!n){if(e)if(qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();i[a]==null&&Or(s,a,"")}else for(const o in e)i[o]==null&&Or(s,o,"");for(const o in i){o==="display"&&(r=!0);const a=i[o];a!=null?jw(t,o,!qe(e)&&e?e[o]:void 0,a)||Or(s,o,a):Or(s,o,"")}}else if(n){if(e!==i){const o=s[Vw];o&&(i+=";"+o),s.cssText=i,r=Hw.test(i)}}else e&&t.removeAttribute("style");Bh in t&&(t[Bh]=r?s.display:"",t[Uw]&&(s.display="none"))}const Uh=/\s*!important$/;function Or(t,e,i){if(de(i))i.forEach(s=>Or(t,e,s));else if(i==null&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const s=$w(t,e);Uh.test(i)?t.setProperty(Vs(s),i.replace(Uh,""),"important"):t[s]=i}}const Vh=["Webkit","Moz","ms"],El={};function $w(t,e){const i=El[e];if(i)return i;let s=At(e);if(s!=="filter"&&s in t)return El[e]=s;s=Ia(s);for(let n=0;n<Vh.length;n++){const r=Vh[n]+s;if(r in t)return El[e]=r}return e}function jw(t,e,i,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&qe(s)&&i===s}const Hh="http://www.w3.org/1999/xlink";function Gh(t,e,i,s,n,r=Ov(e)){s&&e.startsWith("xlink:")?i==null?t.removeAttributeNS(Hh,e.slice(6,e.length)):t.setAttributeNS(Hh,e,i):i==null||r&&!Tp(i)?t.removeAttribute(e):t.setAttribute(e,r?"":li(i)?String(i):i)}function $h(t,e,i,s,n){if(e==="innerHTML"||e==="textContent"){i!=null&&(t[e]=e==="innerHTML"?Bg(i):i);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=i==null?t.type==="checkbox"?"on":"":String(i);(a!==l||!("_value"in t))&&(t.value=l),i==null&&t.removeAttribute(e),t._value=i;return}let o=!1;if(i===""||i==null){const a=typeof t[e];a==="boolean"?i=Tp(i):i==null&&a==="string"?(i="",o=!0):a==="number"&&(i=0,o=!0)}try{t[e]=i}catch{}o&&t.removeAttribute(n||e)}function cs(t,e,i,s){t.addEventListener(e,i,s)}function qw(t,e,i,s){t.removeEventListener(e,i,s)}const jh=Symbol("_vei");function Ww(t,e,i,s,n=null){const r=t[jh]||(t[jh]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Xw(e);if(s){const u=r[e]=Zw(s,n);cs(t,a,u,l)}else o&&(qw(t,a,o,l),r[e]=void 0)}}const Kw=/(Once|Passive|Capture)$/,Yw=/^on:?(?:Once|Passive|Capture)$/;function Xw(t){let e,i;for(;(i=t.match(Kw))&&!Yw.test(t);)e||(e={}),t=t.slice(0,t.length-i[1].length),e[i[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Vs(t.slice(2)),e]}let Rl=0;const Qw=Promise.resolve(),Jw=()=>Rl||(Qw.then(()=>Rl=0),Rl=Date.now());function Zw(t,e){const i=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=i.attached)return;const n=i.value;if(de(n)){const r=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{r.call(s),s._stopped=!0};const o=n.slice(),a=[s];for(let l=0;l<o.length&&!s._stopped;l++){const u=o[l];u&&bi(u,e,5,a)}}else bi(n,e,5,[s])};return i.value=t,i.attached=Jw(),i}const qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,e1=(t,e,i,s,n,r)=>{const o=n==="svg";e==="class"?Bw(t,s,o):e==="style"?Gw(t,i,s):go(e)?Na(e)||Ww(t,e,i,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t1(t,e,s,o))?($h(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gh(t,e,s,o,r,e!=="value")):t._isVueCE&&(i1(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!qe(s)))?$h(t,At(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Gh(t,e,s,o))};function t1(t,e,i,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&qh(e)&&ve(i));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=t.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return qh(e)&&qe(i)?!1:e in t}function i1(t,e){const i=t._def.props;if(!i)return!1;const s=At(e);return Array.isArray(i)?i.some(n=>At(n)===s):Object.keys(i).some(n=>At(n)===s)}const Is=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?i=>Un(e,i):e};function s1(t){t.target.composing=!0}function Wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const si=Symbol("_assign"),Ro=Symbol("_initialValue");function Pl(t,e,i){return e&&(t=t.trim()),i&&(t=za(t)),t}const Kh={created(t,{modifiers:{lazy:e,trim:i,number:s}},n){t.parentNode&&(t.type==="text"?t[Ro]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Ro]=t.defaultValue.replace(/\r\n?/g,`
`))),t[si]=Is(n);const r=s||n.props&&n.props.type==="number";cs(t,e?"change":"input",o=>{o.target.composing||t[si](Pl(t.value,i,r))}),(i||r)&&cs(t,"change",()=>{t.value=Pl(t.value,i,r)}),e||(cs(t,"compositionstart",s1),cs(t,"compositionend",Wh),cs(t,"change",Wh))},mounted(t,{value:e,modifiers:{trim:i,number:s}}){const n=e??"",r=t[Ro];delete t[Ro],r!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==r?t[si](Pl(t.value,i,s)):t.value=n},beforeUpdate(t,{value:e,oldValue:i,modifiers:{lazy:s,trim:n,number:r}},o){if(t[si]=Is(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?za(t.value):t.value,l=e??"";if(a===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(s&&e===i||n&&t.value.trim()===l)||(t.value=l)}},n1={deep:!0,created(t,e,i){t[si]=Is(i),cs(t,"change",()=>{const s=t._modelValue,n=Zn(t),r=t.checked,o=t[si];if(de(s)){const a=yu(s,n),l=a!==-1;if(r&&!l)o(s.concat(n));else if(!r&&l){const u=[...s];u.splice(a,1),o(u)}}else if(lr(s)){const a=new Set(s);r?a.add(n):a.delete(n),o(a)}else o(Vg(t,r))})},mounted:Yh,beforeUpdate(t,e,i){t[si]=Is(i),Yh(t,e,i)}};function Yh(t,{value:e,oldValue:i},s){t._modelValue=e;let n;if(de(e))n=yu(e,s.props.value)>-1;else if(lr(e))n=e.has(s.props.value);else{if(e===i)return;n=Ds(e,Vg(t,!0))}t.checked!==n&&(t.checked=n)}const r1={created(t,{value:e},i){t.checked=Ds(e,i.props.value),t[si]=Is(i),cs(t,"change",()=>{t[si](Zn(t))})},beforeUpdate(t,{value:e,oldValue:i},s){t[si]=Is(s),e!==i&&(t.checked=Ds(e,s.props.value))}},o1={deep:!0,created(t,{value:e,modifiers:{number:i}},s){t._modelValue=e,cs(t,"change",()=>{const n=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>i?za(Zn(r)):Zn(r));t[si](t.multiple?lr(t._modelValue)?new Set(n):n:n[0]),t._assigning=!0,st(()=>{t._assigning=!1})}),t[si]=Is(s)},mounted(t,{value:e}){Xh(t,e)},beforeUpdate(t,{value:e},i){t._modelValue=e,t[si]=Is(i)},updated(t,{value:e}){t._assigning||Xh(t,e)}};function Xh(t,e){const i=t.multiple,s=de(e);if(!(i&&!s&&!lr(e))){for(let n=0,r=t.options.length;n<r;n++){const o=t.options[n],a=Zn(o);if(i)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=yu(e,a)>-1}else o.selected=e.has(a);else if(Ds(Zn(o),e)){t.selectedIndex!==n&&(t.selectedIndex=n);return}}!i&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Zn(t){return"_value"in t?t._value:t.value}function Vg(t,e){const i=e?"_trueValue":"_falseValue";return i in t?t[i]:e}const ZP={created(t,e,i){Po(t,e,i,null,"created")},mounted(t,e,i){Po(t,e,i,null,"mounted")},beforeUpdate(t,e,i,s){Po(t,e,i,s,"beforeUpdate")},updated(t,e,i,s){Po(t,e,i,s,"updated")}};function a1(t,e){switch(t){case"SELECT":return o1;case"TEXTAREA":return Kh;default:switch(e){case"checkbox":return n1;case"radio":return r1;default:return Kh}}}function Po(t,e,i,s,n){const o=a1(t.tagName,i.props&&i.props.type)[n];o&&o(t,e,i,s)}const l1=["ctrl","shift","alt","meta"],c1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>l1.some(i=>t[`${i}Key`]&&!e.includes(i))},eC=(t,e)=>{if(!t)return t;const i=t._withMods||(t._withMods={}),s=e.join(".");return i[s]||(i[s]=((n,...r)=>{for(let o=0;o<e.length;o++){const a=c1[e[o]];if(a&&a(n,e))return}return t(n,...r)}))},Hg=gt({patchProp:e1},Aw);let Ur,Qh=!1;function u1(){return Ur||(Ur=aw(Hg))}function h1(){return Ur=Qh?Ur:lw(Hg),Qh=!0,Ur}const f1=((...t)=>{const e=u1().createApp(...t),{mount:i}=e;return e.mount=s=>{const n=$g(s);if(!n)return;const r=e._component;!ve(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const o=i(n,!1,Gg(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),o},e}),d1=((...t)=>{const e=h1().createApp(...t),{mount:i}=e;return e.mount=s=>{const n=$g(s);if(n)return i(n,!0,Gg(n))},e});function Gg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $g(t){return qe(t)?document.querySelector(t):t}const p1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,g1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,m1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function v1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){y1(t);return}return e}function y1(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ma(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const i=t.trim();if(i.length<=9)switch(i.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!m1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(p1.test(t)||g1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,v1)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const jg=/#/g,qg=/&/g,w1=/\//g,b1=/=/g,_1=/\?/g,el=/\+/g,x1=/%5e/gi,k1=/%60/gi,T1=/%7c/gi,S1=/%20/gi,E1=/%2f/gi,R1=/%252f/gi;function Wg(t){return encodeURI(""+t).replace(T1,"|")}function Rc(t){return Wg(typeof t=="string"?t:JSON.stringify(t)).replace(el,"%2B").replace(S1,"+").replace(jg,"%23").replace(qg,"%26").replace(k1,"`").replace(x1,"^").replace(w1,"%2F")}function Cl(t){return Rc(t).replace(b1,"%3D")}function P1(t){return Wg(t).replace(jg,"%23").replace(_1,"%3F").replace(R1,"%2F").replace(qg,"%26").replace(el,"%2B")}function io(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function C1(t){return io(t.replace(E1,"%252F"))}function M1(t){return io(t.replace(el," "))}function A1(t){return io(t.replace(el," "))}function Kg(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const i of t.split("&")){const s=i.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const n=M1(s[1]);if(n==="__proto__"||n==="constructor")continue;const r=A1(s[2]||"");e[n]===void 0?e[n]=r:Array.isArray(e[n])?e[n].push(r):e[n]=[e[n],r]}return e}function O1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(i=>`${Cl(t)}=${Rc(i)}`).join("&"):`${Cl(t)}=${Rc(e)}`:Cl(t)}function F1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>O1(e,t[e])).filter(Boolean).join("&")}const N1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,D1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,L1=/^([/\\]\s*){2,}[^/\\]/,I1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,z1=/^\.?\//;function fr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?N1.test(t):D1.test(t)||(e.acceptRelative?L1.test(t):!1)}function Pc(t){return!!t&&I1.test(t)}function B1(t="",e){return t.endsWith("/")}function va(t="",e){return(B1(t)?t.slice(0,-1):t)||"/"}function U1(t="",e){return t.endsWith("/")?t:t+"/"}function V1(t,e){if(Xg(e)||fr(t))return t;const i=va(e);if(t.startsWith(i)){const s=t[i.length];if(!s||s==="/"||s==="?")return t}return Qg(i,t)}function Jh(t,e){if(Xg(e))return t;const i=va(e);if(!t.startsWith(i))return t;const s=t[i.length];return s&&s!=="/"&&s!=="?"?t:"/"+t.slice(i.length).replace(/^\/+/,"")}function Yg(t,e){const i=tl(t),s={...Kg(i.search),...e};return i.search=F1(s),tm(i)}function Xg(t){return!t||t==="/"}function H1(t){return t&&t!=="/"}function Qg(t,...e){let i=t||"";for(const s of e.filter(n=>H1(n)))if(i){const n=s.replace(z1,"");i=U1(i)+n}else i=s;return i}function Jg(...t){const e=/\/(?!\/)/,i=t.filter(Boolean),s=[];let n=0;for(const o of i)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(s.length===1&&fr(s[0]))continue;s.pop(),n--;continue}if(a===1&&s[s.length-1]?.endsWith(":/")){s[s.length-1]+="/"+l;continue}s.push(l),n++}}let r=s.join("/");return n>=0?i[0]?.startsWith("/")&&!r.startsWith("/")?r="/"+r:i[0]?.startsWith("./")&&!r.startsWith("./")&&(r="./"+r):r="../".repeat(-1*n)+r,i[i.length-1]?.endsWith("/")&&!r.endsWith("/")&&(r+="/"),r}function Zg(t,e){return io(va(t))===io(va(e))}function Zh(t){return tm({...tl(t),hash:""})}const em=Symbol.for("ufo:protocolRelative");function tl(t="",e){const i=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(i){const[,h,f=""]=i;return{protocol:h.toLowerCase(),pathname:f,href:h+f,auth:"",host:"",search:"",hash:""}}if(!fr(t,{acceptRelative:!0}))return ef(t);const[,s="",n,r=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=r.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=ef(a);return{protocol:s.toLowerCase(),auth:n?n.slice(0,Math.max(0,n.length-1)):"",host:o,pathname:l,search:u,hash:c,[em]:!s}}function ef(t=""){const[e="",i="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:i,hash:s}}function tm(t){const e=t.pathname||"",i=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",n=t.auth?t.auth+"@":"",r=t.host||"";return(t.protocol||t[em]?(t.protocol||"")+"//":"")+n+r+e+i+s}class G1 extends Error{constructor(e,i){super(e,i),this.name="FetchError",i?.cause&&!this.cause&&(this.cause=i.cause)}}function $1(t){const e=t.error?.message||t.error?.toString()||"",i=t.request?.method||t.options?.method||"GET",s=t.request?.url||String(t.request)||"/",n=`[${i}] ${JSON.stringify(s)}`,r=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${n}: ${r}${e?` ${e}`:""}`,a=new G1(o,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return t[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return t.response&&t.response[u]}});return a}const j1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function tf(t="GET"){return j1.has(t.toUpperCase())}function q1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer||t instanceof FormData||t instanceof URLSearchParams?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const W1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),K1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Y1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return K1.test(e)?"json":e==="text/event-stream"?"stream":W1.has(e)||e.startsWith("text/")?"text":"blob"}function X1(t,e,i,s){const n=Q1(e?.headers??t?.headers,i?.headers,s);let r;return(i?.query||i?.params||e?.params||e?.query)&&(r={...i?.params,...i?.query,...e?.params,...e?.query}),{...i,...e,query:r,params:r,headers:n}}function Q1(t,e,i){if(!e)return new i(t);const s=new i(e);if(t)for(const[n,r]of Symbol.iterator in t||Array.isArray(t)?t:new i(t))s.set(n,r);return s}async function Co(t,e){if(e)if(Array.isArray(e))for(const i of e)await i(t);else await e(t)}const J1=new Set([408,409,425,429,500,502,503,504]),Z1=new Set([101,204,205,304]);function im(t={}){const{fetch:e=globalThis.fetch,Headers:i=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function n(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=tf(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):J1.has(h))){const f=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return f>0&&await new Promise(d=>setTimeout(d,f)),r(a.request,{...a.options,retry:c-1})}}const u=$1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}const r=async function(l,u={}){const c={request:l,options:X1(l,u,t.defaults,i),response:void 0,error:void 0};if(c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&(await Co(c,c.options.onRequest),c.options.headers instanceof i||(c.options.headers=new i(c.options.headers||{}))),typeof c.request=="string"&&(c.options.baseURL&&(c.request=V1(c.request,c.options.baseURL)),c.options.query&&(c.request=Yg(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&tf(c.options.method))if(q1(c.options.body)){const d=c.options.headers.get("content-type");typeof c.options.body!="string"&&(c.options.body=d==="application/x-www-form-urlencoded"?new URLSearchParams(c.options.body).toString():JSON.stringify(c.options.body)),d||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")}else("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half"));let h;if(!c.options.signal&&c.options.timeout){const d=new s;h=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,d.abort(g)},c.options.timeout),c.options.signal=d.signal}try{c.response=await e(c.request,c.options)}catch(d){return c.error=d,c.options.onRequestError&&await Co(c,c.options.onRequestError),await n(c)}finally{h&&clearTimeout(h)}if((c.response.body||c.response._bodyInit)&&!Z1.has(c.response.status)&&c.options.method!=="HEAD"){const d=(c.options.parseResponse?"json":c.options.responseType)||Y1(c.response.headers.get("content-type")||"");switch(d){case"json":{const g=await c.response.text(),p=c.options.parseResponse||ma;c.response._data=p(g);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[d]()}}return c.options.onResponse&&await Co(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await Co(c,c.options.onResponseError),await n(c)):c.response},o=async function(l,u){return(await r(l,u))._data};return o.raw=r,o.native=(...a)=>e(...a),o.create=(a={},l={})=>im({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const ya=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),eb=ya.fetch?(...t)=>ya.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),tb=ya.Headers,ib=ya.AbortController,sb=im({fetch:eb,Headers:tb,AbortController:ib}),nb=sb,rb=()=>window?.__NUXT__?.config||{},Ou=()=>rb().app,ob=()=>Ou().baseURL,ab=()=>Ou().buildAssetsDir,Fu=(...t)=>Jg(sm(),ab(),...t),sm=(...t)=>{const e=Ou(),i=e.cdnURL||e.baseURL;return t.length?Jg(i,...t):i};globalThis.__buildAssetsURL=Fu,globalThis.__publicAssetsURL=sm;globalThis.$fetch||(globalThis.$fetch=nb.create({baseURL:ob()}));"global"in globalThis||(globalThis.global=globalThis);function Cc(t,e={},i){for(const s in t){const n=t[s],r=i?`${i}:${s}`:s;typeof n=="object"&&n!==null?Cc(n,e,r):typeof n=="function"&&(e[r]=n)}return e}const lb={run:t=>t()},cb=()=>lb,nm=typeof console.createTask<"u"?console.createTask:cb;function ub(t,e){const i=e.shift(),s=nm(i);return t.reduce((n,r)=>n.then(()=>s.run(()=>r(...e))),Promise.resolve())}function hb(t,e){const i=e.shift(),s=nm(i);return Promise.all(t.map(n=>s.run(()=>n(...e))))}function Ml(t,e){for(const i of[...t])i(e)}let fb=class{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,i,s={}){if(!e||typeof i!="function")return()=>{};const n=e;let r;for(;this._deprecatedHooks[e];)r=this._deprecatedHooks[e],e=r.to;if(r&&!s.allowDeprecated){let o=r.message;o||(o=`${n} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!i.name)try{Object.defineProperty(i,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(i),()=>{i&&(this.removeHook(e,i),i=void 0)}}hookOnce(e,i){let s,n=(...r)=>(typeof s=="function"&&s(),s=void 0,n=void 0,i(...r));return s=this.hook(e,n),s}removeHook(e,i){if(this._hooks[e]){const s=this._hooks[e].indexOf(i);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,i){this._deprecatedHooks[e]=typeof i=="string"?{to:i}:i;const s=this._hooks[e]||[];delete this._hooks[e];for(const n of s)this.hook(e,n)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const i in e)this.deprecateHook(i,e[i])}addHooks(e){const i=Cc(e),s=Object.keys(i).map(n=>this.hook(n,i[n]));return()=>{for(const n of s.splice(0,s.length))n()}}removeHooks(e){const i=Cc(e);for(const s in i)this.removeHook(s,i[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...i){return i.unshift(e),this.callHookWith(ub,e,...i)}callHookParallel(e,...i){return i.unshift(e),this.callHookWith(hb,e,...i)}callHookWith(e,i,...s){const n=this._before||this._after?{name:i,args:s,context:{}}:void 0;this._before&&Ml(this._before,n);const r=e(i in this._hooks?[...this._hooks[i]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&n&&Ml(this._after,n)}):(this._after&&n&&Ml(this._after,n),r)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const i=this._before.indexOf(e);i!==-1&&this._before.splice(i,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const i=this._after.indexOf(e);i!==-1&&this._after.splice(i,1)}}}};function db(){return new fb}function pb(t={}){let e,i=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let n;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?n=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const r=()=>{if(n){const o=n.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=r();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>r(),set:(o,a)=>{a||s(o),e=o,i=!0},unset:()=>{e=void 0,i=!1},call:(o,a)=>{s(o),e=o;try{return n?n.run(o,a):a()}finally{i||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Mc.add(u);try{const c=n?n.run(o,a):a();return i||(e=void 0),await c}finally{Mc.delete(u)}}}}function gb(t={}){const e={};return{get(i,s={}){return e[i]||(e[i]=pb({...t,...s})),e[i]}}}const wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},sf="__unctx__",mb=wa[sf]||(wa[sf]=gb()),vb=(t,e={})=>mb.get(t,e),nf="__unctx_async_handlers__",Mc=wa[nf]||(wa[nf]=new Set);function Vr(t){const e=[];for(const n of Mc){const r=n();r&&e.push(r)}const i=()=>{for(const n of e)n()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(n=>{throw i(),n})),[s,i]}const rf=!1,yb=!1,Ui={value:null,errorValue:null,deep:!0},wb=null,bb="#__nuxt",rm="nuxt-app",of=36e5,_b="vite:preloadError";function om(t=rm){return vb(t,{asyncContext:!1})}const xb="__nuxt_plugin";function kb(t){let e=0;const i={_id:t.id||rm||"nuxt-app",_scope:Nv(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.21.11"},get vue(){return i.vueApp.version}},payload:us({...t.ssrContext?.payload||{},data:us({}),state:Mi({}),once:new Set,_errors:us({})}),static:{data:{}},runWithContext(n){return i._scope.active&&!ur()?i._scope.run(()=>af(i,n)):af(i,n)},isHydrating:!0,deferHydration(){if(!i.isHydrating)return()=>{};e++;let n=!1;return()=>{if(!n&&(n=!0,e--,e===0))return i.isHydrating=!1,i.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:us({}),_payloadRevivers:{},...t};{const n=window.__NUXT__;if(n)for(const r in n)switch(r){case"data":case"state":case"_errors":Object.assign(i.payload[r],n[r]);break;default:i.payload[r]=n[r]}}i.hooks=db(),i.hook=i.hooks.hook,i.callHook=i.hooks.callHook,i.provide=(n,r)=>{const o="$"+n;Mo(i,o,r),Mo(i.vueApp.config.globalProperties,o,r)},Mo(i.vueApp,"$nuxt",i),Mo(i.vueApp.config.globalProperties,"$nuxt",i);{window.addEventListener(_b,r=>{i.callHook("app:chunkError",{error:r.payload}),r.payload?.message?.includes("Unable to preload CSS")&&r.preventDefault()}),window.useNuxtApp||=Ce;const n=i.hook("app:error",(...r)=>{console.error("[nuxt] error caught during app initialization",...r)});i.hook("app:mounted",n)}const s=i.payload.config;return i.provide("config",s),i}function Tb(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function Sb(t,e){if(typeof e=="function"){const{provide:i}=await t.runWithContext(()=>e(t))||{};if(i&&typeof i=="object")for(const s in i)t.provide(s,i[s])}}async function Eb(t,e){const i=new Set,s=[],n=[];let r,o=0;async function a(l){const u=l.dependsOn?.filter(c=>e.some(h=>h._name===c)&&!i.has(c))??[];if(u.length>0)s.push([new Set(u),l]);else{const c=Sb(t,l).then(async()=>{l._name&&(i.add(l._name),await Promise.all(s.map(async([h,f])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(o++,await a(f)))})))}).catch(h=>{if(!l.parallel&&!t.payload.error)throw h;r||=h});l.parallel?n.push(c):await c}}for(const l of e)Tb(t,l);for(const l of e)await a(l);if(await Promise.all(n),o)for(let l=0;l<o;l++)await Promise.all(n);if(r)throw t.payload.error||r}function _t(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[xb]:!0,_name:e})}function af(t,e,i){const s=()=>e();return om(t._id).set(t),t.vueApp.runWithContext(s)}function am(t){let e;return Ga()&&(e=Pi()?.appContext.app.$nuxt),e||=om(t).tryUse(),e||null}function Ce(t){const e=am(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function il(t){return Ce().$config}function Mo(t,e,i){Object.defineProperty(t,e,{get:()=>i})}function Al(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Ac(t,e,i=".",s){if(!Al(e))return Ac(t,{},i,s);const n={...e};for(const r of Object.keys(t)){if(r==="__proto__"||r==="constructor")continue;const o=t[r];o!=null&&(s&&s(n,r,o,i)||(Array.isArray(o)&&Array.isArray(n[r])?n[r]=[...o,...n[r]]:Al(o)&&Al(n[r])?n[r]=Ac(o,n[r],(i?`${i}.`:"")+r.toString(),s):n[r]=o))}return n}function Rb(t){return(...e)=>e.reduce((i,s)=>Ac(i,s,"",t),{})}const Oc=Rb();function Pb(t,e){try{return e in t}catch{return!1}}class lf extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,i={}){super(e,i),i.cause&&!this.cause&&(this.cause=i.cause)}toJSON(){const e={message:this.message,statusCode:Fc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=lm(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function Cb(t){if(typeof t=="string")return new lf(t);if(Mb(t))return t;const e=new lf(t.message??t.statusMessage??"",{cause:t.cause||t});if(Pb(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Fc(t.statusCode,e.statusCode):t.status&&(e.statusCode=Fc(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const i=e.statusMessage;lm(e.statusMessage)!==i&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Mb(t){return t?.constructor?.__h3_error__===!0}const Ab=/[^\u0009\u0020-\u007E]/g;function lm(t=""){return t.replace(Ab,"")}function Fc(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Ob=Symbol("layout-meta"),sl=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const _i=()=>Ce()?.$router;function Fb(t){const e=t.scope;let i=ur();for(;i;){if(i===e)return!0;i=i.parent}return!1}const nl=()=>{if(Ga()){const t=Pi();if(!t||Fb(t))return zt(sl,Ce()._route)}return Ce()._route};const Nb=()=>{try{if(Ce()._processingMiddleware)return!0}catch{return!1}return!1},Db=(t,e)=>{t||="/";const i=typeof t=="string"?t:"path"in t?Ib(t):_i().resolve(t).href;if(e?.open){const{protocol:u}=new URL(i,window.location.href);if(u&&Pc(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`);const{target:c="_blank",windowFeatures:h={}}=e.open,f=[];for(const[d,g]of Object.entries(h))g!==void 0&&f.push(`${d.toLowerCase()}=${g}`);return open(i,c,f.join(", ")),Promise.resolve()}const s=fr(i,{acceptRelative:!0}),n=e?.external||s;if(n){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:u}=new URL(i,window.location.href);if(u&&Pc(u))throw new Error(`Cannot navigate to a URL with '${u}' protocol.`)}const r=Nb();if(!n&&r){if(typeof t=="string"){const{pathname:u,search:c,hash:h}=tl(t);return{path:u,...c&&{query:Kg(c)},...h&&{hash:h},replace:!0}}return{...t,replace:!0}}const o=_i(),a=Ce();if(n)return a._scope.stop(),location.replace(i),r?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve();const l=typeof t=="string"?zb(t):t;return e?.replace?o.replace(l):o.push(l)},Lb=t=>{if(!t)return!1;throw t=$i(t),t.fatal&&Ce().runWithContext(()=>ks(t)),t};function Ib(t){return Yg(t.path||"",t.query||{})+(t.hash||"")}function zb(t){const e=tl(t);return P1(C1(e.pathname))+e.search+e.hash}const cm="__nuxt_error",rl=()=>Su(Ce().payload,"error"),ks=t=>{const e=$i(t);try{const i=rl();Ce().hooks.callHook("app:error",e),i.value||=e}catch{throw e}return e},um=async(t={})=>{const e=Ce(),i=rl();e.callHook("app:error:cleared",t),t.redirect&&await _i().replace(t.redirect),i.value=wb},hm=t=>!!t&&typeof t=="object"&&cm in t,$i=t=>{typeof t!="string"&&t.statusText&&(t.message??=t.statusText);const e=Cb(t);return Object.defineProperty(e,cm,{value:!0,configurable:!1,writable:!1}),Object.defineProperty(e,"status",{get:()=>e.statusCode,configurable:!0}),Object.defineProperty(e,"statusText",{get:()=>e.statusMessage,configurable:!0}),e},Bb=-1,Ub=-2,Vb=-3,Hb=-4,Gb=-5,$b=-6,jb=-7,fm=2**32-1,Nc=fm-1;function qb(t){return!(!Number.isInteger(t)||t<0||t>Nc)}function Wb(t){return!(!Number.isInteger(t)||t<0||t>fm)}function Kb(t){return Uint8Array.fromBase64(t).buffer}function Yb(t){return Uint8Array.from(Buffer.from(t,"base64")).buffer}function Xb(t){const e=atob(t),i=e.length,s=new Uint8Array(i);for(let n=0;n<i;n++)s[n]=e.charCodeAt(n);return s.buffer}const Qb=typeof Uint8Array.fromBase64=="function",Jb=typeof process=="object"&&process.versions?.node!==void 0,Zb=Qb?Kb:Jb?Yb:Xb;function e_(t,e){return t}const t_={fromPrimitive:t=>t,fromISOString:t=>new Date(t),fromStringValue:(t,e)=>t==="URL"?new URL(e):t==="URLSearchParams"?new URLSearchParams(e):Temporal[t.slice(9)].from(e),fromArrayBuffer:t=>t,fromRegExpInfo:(t,e)=>new RegExp(t,e),fromViewInfo:(t,e,i,s)=>{const n=globalThis[t];return i!==void 0?new n(e,i,s):new n(e)},box:t=>Object(t),createArray:t=>new Array(t),createSparseArray:t=>{const e=[];return e[Nc]=void 0,delete e[Nc],e.length=t,e},createObject:()=>({}),createNullPrototypeObject:()=>Object.create(null),createSet:()=>new Set,createMap:()=>new Map,set:(t,e,i)=>{t[e]=i},addValue:(t,e)=>{t.add(e)},addEntry:(t,e,i)=>{t.set(e,i)}},i_=Object.freeze(t_);function s_(t,e,i){return n_(JSON.parse(t),e)}function n_(t,e,i){const s=e_(i_);if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);let o=null;function a(l,u=!1){if(l===Bb)return s.fromPrimitive(void 0);if(l===Vb)return s.fromPrimitive(NaN);if(l===Hb)return s.fromPrimitive(1/0);if(l===Gb)return s.fromPrimitive(-1/0);if(l===$b)return s.fromPrimitive(-0);if(u||typeof l!="number")throw new Error("Invalid input");if(l in r)return r[l];const c=n[l];if(!c||typeof c!="object")r[l]=s.fromPrimitive(c);else if(Array.isArray(c))if(typeof c[0]=="string"){const h=c[0],f=e&&Object.hasOwn(e,h)?e[h]:void 0;if(f){let d=c[1];if(typeof d!="number"&&(d=n.push(c[1])-1),Object.hasOwn(r,d))return r[l]=f(r[d]);if(o??=new Set,o.has(d))throw new Error("Invalid circular reference");return o.add(d),r[l]=f(a(d)),o.delete(d),r[l]}switch(h){case"Date":r[l]=s.fromISOString(c[1]);break;case"Set":const d=s.createSet();r[l]=d;for(let _=1;_<c.length;_+=1)s.addValue(d,a(c[_]));break;case"Map":const g=s.createMap();r[l]=g;for(let _=1;_<c.length;_+=2)s.addEntry(g,a(c[_]),a(c[_+1]));break;case"RegExp":r[l]=s.fromRegExpInfo(c[1],c[2]);break;case"Object":{const _=c[1];if(typeof n[_]=="object"&&n[_][0]!=="BigInt")throw new Error("Invalid input");r[l]=s.box(a(_));break}case"BigInt":r[l]=s.fromPrimitive(BigInt(c[1]));break;case"null":const p=s.createNullPrototypeObject();r[l]=p;for(let _=1;_<c.length;_+=2){if(c[_]==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");s.set(p,c[_],a(c[_+1]))}break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Float16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":case"DataView":{if(n[c[1]][0]!=="ArrayBuffer")throw new Error("Invalid data");const _=a(c[1]);r[l]=s.fromViewInfo(h,_,c[2],c[3]);break}case"ArrayBuffer":{const _=c[1];if(typeof _!="string")throw new Error("Invalid ArrayBuffer encoding");r[l]=s.fromArrayBuffer(Zb(_));break}case"URL":case"URLSearchParams":case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{r[l]=s.fromStringValue(h,c[1]);break}default:throw new Error(`Unknown type ${h}`)}}else if(c[0]===jb){const h=c[1];if(!Wb(h))throw new Error("Invalid input");const f=s.createSparseArray(h);r[l]=f;for(let d=2;d<c.length;d+=2){const g=c[d];if(!qb(g)||g>=h)throw new Error("Invalid input");s.set(f,g,a(c[d+1]))}}else{const h=s.createArray(c.length);r[l]=h;for(let f=0;f<c.length;f+=1){const d=c[f];d!==Ub&&s.set(h,f,a(d))}}else{const h=s.createObject();r[l]=h;for(const f of Object.keys(c)){if(f==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");s.set(h,f,a(c[f]))}}return r[l]}return a(0)}const r_=new Set(["link","style","script","noscript"]),o_=new Set(["title","titleTemplate","script","style","noscript"]),Dc=new Set(["base","meta","link","style","script","noscript"]),a_=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),l_=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),cf=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),c_=new Set(["templateParams","htmlAttrs","bodyAttrs"]),u_=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Ol=t=>typeof t=="number"?Number.isFinite(t):t;function dm(t){return t==="__proto__"||t==="constructor"||t==="prototype"}const Lc=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,uf={base:-10,title:10},h_={critical:-8,high:-1,low:2},hf={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},f_=/@import/,xr=t=>t===""||t===!0;function d_(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let i=100;const s=h_[e.tagPriority]||0,n=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:hf;if(e.tag in uf)i=uf[e.tag];else if(e.tag==="meta"){const r=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;r&&(i=hf.meta[r])}else if(e.tag==="link"&&e.props.rel)i=n.link[e.props.rel];else if(e.tag==="script"){const r=String(e.props.type);xr(e.props.async)?i=n.script.async:e.props.src&&!xr(e.props.defer)&&!xr(e.props.async)&&r!=="module"&&!r.endsWith("json")||e.innerHTML&&!r.endsWith("json")?i=n.script.sync:(xr(e.props.defer)&&e.props.src&&!xr(e.props.async)||r==="module")&&(i=n.script.defer)}else e.tag==="style"&&(i=e.innerHTML&&f_.test(e.innerHTML)?n.style.imported:n.style.sync);return(i||100)+s}function Ic(t,e={},i){for(const s in t){const n=t[s],r=i?`${i}:${s}`:s;typeof n=="object"&&n!==null?Ic(n,e,r):typeof n=="function"&&(e[r]=n)}return e}const pm=(()=>{if(console.createTask)return console.createTask;const t={run:e=>e()};return()=>t})();function gm(t,e,i,s){for(let n=i;n<t.length;n+=1)try{const r=s?s.run(()=>t[n](...e)):t[n](...e);if(r&&typeof r.then=="function")return Promise.resolve(r).then(()=>gm(t,e,n+1,s))}catch(r){return Promise.reject(r)}}function p_(t,e,i){if(t.length>0)return gm(t,e,0,pm(i))}function g_(t,e,i){if(t.length>0){const s=pm(i);return Promise.all(t.map(n=>s.run(()=>n(...e))))}}function Fl(t,e){for(const i of[...t])i(e)}var m_=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,i={}){if(!t||typeof e!="function")return()=>{};const s=t;let n;for(;this._deprecatedHooks[t];)n=this._deprecatedHooks[t],t=n.to;if(n&&!i.allowDeprecated){let r=n.message;r||(r=`${s} hook has been deprecated`+(n.to?`, please use ${n.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let i,s=(...n)=>(typeof i=="function"&&i(),i=void 0,s=void 0,e(...n));return i=this.hook(t,s),i}removeHook(t,e){const i=this._hooks[t];if(i){const s=i.indexOf(e);s!==-1&&i.splice(s,1),i.length===0&&(this._hooks[t]=void 0)}}clearHook(t){this._hooks[t]=void 0}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const i=this._hooks[t]||[];this._hooks[t]=void 0;for(const s of i)this.hook(t,s)}deprecateHooks(t){for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=Ic(t),i=Object.keys(e).map(s=>this.hook(s,e[s]));return()=>{for(const s of i)s();i.length=0}}removeHooks(t){const e=Ic(t);for(const i in e)this.removeHook(i,e[i])}removeAllHooks(){this._hooks={}}callHook(t,...e){return this.callHookWith(p_,t,e)}callHookParallel(t,...e){return this.callHookWith(g_,t,e)}callHookWith(t,e,i){const s=this._before||this._after?{name:e,args:i,context:{}}:void 0;this._before&&Fl(this._before,s);const n=t(this._hooks[e]?[...this._hooks[e]]:[],i,e);return n instanceof Promise?n.finally(()=>{this._after&&s&&Fl(this._after,s)}):(this._after&&s&&Fl(this._after,s),n)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}};function v_(){return new m_}const y_=["name","property","http-equiv"],w_=new Set(["viewport","description","keywords","robots"]);function mm(t){const e=t.indexOf(":");if(e===-1)return!1;const i=t.indexOf(":",e+1),s=t.slice(e+1,i===-1?t.length:i);return s==="twitter"?t==="meta:twitter:image"||t.startsWith("meta:twitter:image:"):u_.has(s)}function zc(t){const{props:e,tag:i}=t;if(l_.has(i))return i;if(i==="link"&&e.rel==="canonical")return"canonical";if(i==="link"&&e.rel==="alternate"){if(e.hreflang)return`alternate:${e.hreflang}`;if(e.type)return`alternate:${e.type}:${e.href||""}`}if(e.charset)return"charset";if(t.tag==="meta"){for(const s of y_)if(e[s]!==void 0){const n=e[s],r=n&&typeof n=="string"&&n.includes(":"),o=n&&w_.has(n),l=!(r||o)&&t.key?`:key:${t.key}`:"";return`${i}:${n}${l}`}}if(t.key)return`${i}:key:${t.key}`;if(e.id)return`${i}:id:${e.id}`;if(i==="link"&&e.rel==="alternate")return`alternate:${e.href||""}`;if(o_.has(i)){const s=t.textContent||t.innerHTML;if(s)return`${i}:content:${s}`}}function vm(t){const e=t._h||t._d;if(e)return e;const i=t.textContent||t.innerHTML;if(i)return i;const s=Object.keys(t.props).sort();return`${t.tag}:${s.map(n=>`${n}:${String(t.props[n])}`).join(",")}`}function ba(t,e,i){typeof t==="function"&&(!i||i!=="titleTemplate"&&!(i[0]==="o"&&i[1]==="n"))&&(t=t());const n=e?e(i,t):t;if(Array.isArray(n)){let r;for(let o=0;o<n.length;o++){const a=ba(n[o],e);r?r[o]=a:a!==n[o]&&(r=n.slice(0,o),r[o]=a)}return r||n}if(n?.constructor===Object){let r;for(const o in n){const a=dm(o),l=a?void 0:ba(n[o],e,o);if(!r&&(a||o==="_resolver"||l!==n[o])){r={};for(const c in n){if(c===o)break;r[c]=n[c]}}r&&!a&&(r[o]=l)}return r||n}return n}const b_=/[\s"'<>/=\x00-\x1F\x7F]/;function __(t,e){const i=t==="style"?new Map:new Set;function s(n){if(n==null||n===void 0)return;const r=String(n).trim();if(r)if(t==="style"){const[o,...a]=r.split(":").map(l=>l?l.trim():"");o&&a.length&&i.set(o,a.join(":"))}else r.split(" ").filter(Boolean).forEach(o=>i.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(s):s(e):Array.isArray(e)?e.forEach(n=>s(n)):e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>{r&&r!=="false"&&(t==="style"?i.set(String(n).trim(),String(r)):s(n))}),i}function ym(t,e){if(t.props=t.props||{},!e)return t;if(t.tag==="templateParams")return t.props=e,t;const i=Dc.has(t.tag)||t.tag==="htmlAttrs"||t.tag==="bodyAttrs";for(const s of Object.keys(e)){if(dm(s))continue;const n=s.startsWith("data-"),r=i&&!cf.has(s),o=r&&!n?s.toLowerCase():s;if(r&&(!o||b_.test(o)))continue;const a=e[s];if(a===null){t.props[o]=null;continue}if(s==="class"||s==="style"){t.props[s]=__(s,a);continue}if(cf.has(s)){if((s==="textContent"||s==="innerHTML")&&typeof a=="object"){let c=e.type;if(e.type||(c="application/json"),!c?.endsWith("json")&&c!=="speculationrules")continue;e.type=c,t.props.type=c,t[s]=JSON.stringify(a)}else t[s]=a;continue}const l=String(a),u=t.tag==="meta"&&o==="content";l==="true"||l===""?t.props[o]=n||u?l:!0:!a&&n&&l==="false"?t.props[o]="false":a!==void 0&&(t.props[o]=a)}return t}function x_(t,e){const i=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},s=ym({tag:t,props:{}},i);return s.key&&r_.has(s.tag)&&(s.props["data-hid"]=s._h=s.key),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(n=>({...s,props:{...s.props,content:n}})):s}function k_(t,e){if(!t)return[];typeof t=="function"&&(t=t());const i=(n,r)=>{for(let o=0;o<e.length;o++)r=e[o](n,r);return r};t=i(void 0,t);const s=[];return t=ba(t,i),Object.entries(t||{}).forEach(([n,r])=>{if(r!==void 0)for(const o of Array.isArray(r)?r:[r])s.push(x_(n,o))}),s.flat()}function ff(t,e){const i=typeof e=="function"?e(t):e,s=i.key||String(t.plugins.size+1);t.plugins.get(s)||(t.plugins.set(s,i),t.hooks.addHooks(i.hooks||{}))}function T_(t={}){const e=v_();e.addHooks(t.hooks||{});const i=!t.document,s=new Map,n=new Map,r=new Set,o={_entryCount:1,plugins:n,dirty:!1,resolvedOptions:t,hooks:e,ssr:i,entries:s,headEntries(){return[...s.values()]},use:a=>ff(o,a),push(a,l){const u={...l||{}};delete u.head;const c=u._index??o._entryCount++,h={_i:c,input:a,options:u},f={_poll(d=!1){o.dirty=!0,!d&&r.add(c),e.callHook("entries:updated",o)},dispose(){s.delete(c)&&o.invalidate()},patch(d){(!u.mode||u.mode==="server"&&i||u.mode==="client"&&!i)&&(h.input=d,s.set(c,h),f._poll())}};return f.patch(a),f},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);r.size;){const f=r.values().next().value;r.delete(f);const d=s.get(f);if(d){const g={tags:k_(d.input,t.propResolvers||[]).map(p=>Object.assign(p,d.options)),entry:d};await e.callHook("entries:normalize",g),d._tags=g.tags.map((p,_)=>(p._w=d_(o,p),p._p=(d._i<<10)+_,p._d=zc(p),p._d||(p._h=vm(p)),p))}}let l=!1;a.entries.flatMap(f=>(f._tags||[]).map(d=>({...d,props:{...d.props}}))).sort(Lc).reduce((f,d)=>{const g=d._d||d._h;if(!f.has(g))return f.set(g,d);const p=f.get(g);if((d?.tagDuplicateStrategy||(c_.has(d.tag)?"merge":null)||(d.key&&d.key===p.key?"merge":null))==="merge"){const w={...p.props};Object.entries(d.props).forEach(([y,m])=>w[y]=y==="style"?new Map([...p.props.style||new Map,...m]):y==="class"?new Set([...p.props.class||new Set,...m]):m),f.set(g,{...d,props:w})}else d._p>>10===p._p>>10&&d.tag==="meta"&&mm(g)?(f.set(g,Object.assign([...Array.isArray(p)?p:[p],d],d)),l=!0):(d._w===p._w?d._p>p._p:d?._w<p?._w)&&f.set(g,d);return f},a.tagMap);const u=a.tagMap.get("title"),c=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,c){const f=c?.textContent;if(o._titleTemplate=f,f){let d=typeof f=="function"?f(u?.textContent):f;typeof d=="string"&&!o.plugins.has("template-params")&&(d=d.replace("%s",u?.textContent||"")),u?d===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:d}):(c.tag="title",c.textContent=d)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(Lc)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const h=[];for(const f of a.tags){const{innerHTML:d,tag:g,props:p}=f;if(a_.has(g)&&!(Object.keys(p).length===0&&!Ol(f.innerHTML)&&!Ol(f.textContent))&&!(g==="meta"&&!Ol(p.content)&&!p["http-equiv"]&&!p.charset)){if(g==="script"&&d){if(String(p.type).endsWith("json")){const _=typeof d=="string"?d:JSON.stringify(d);f.innerHTML=_.replace(/</g,"\\u003C")}else typeof d=="string"&&(f.innerHTML=d.replace(new RegExp(`</${g}`,"g"),`<\\/${g}`));f._d=zc(f)}h.push(f)}}return h},invalidate(){for(const a of s.values())r.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>ff(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const Nl="%separator";function S_(t,e,i=!1){let s;if(e==="s"||e==="pageTitle")s=t.pageTitle;else if(e.includes(".")){const n=e.indexOf(".");s=t[e.substring(0,n)]?.[e.substring(n+1)]}else s=t[e];if(s!==void 0)return i?(s||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):s||""}function Ao(t,e,i,s=!1){if(typeof t!="string"||!t.includes("%"))return t;let n=t;try{n=decodeURI(t)}catch{}const r=n.match(/%\w+(?:\.\w+)?/g);if(!r)return t;const o=t.includes(Nl);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Nl||!r.includes(a))return a;const l=S_(e,a.slice(1),s);return l!==void 0?l:a}).trim(),o&&(t=t.split(Nl).map(a=>a.trim()).filter(a=>a!=="").join(i?` ${i} `:" ")),t}const df=t=>t.includes(":key")?t:t.split(":").join(":key:"),E_={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const i of t.tags){const s=i.tagPriority;if(!s)continue;const n=String(s);if(n.startsWith("before:")){const r=df(n.slice(7)),o=t.tagMap.get(r);o&&(typeof o.tagPriority=="number"&&(i.tagPriority=o.tagPriority),i._p=o._p-1,e=!0)}else if(n.startsWith("after:")){const r=df(n.slice(6)),o=t.tagMap.get(r);o&&(typeof o.tagPriority=="number"&&(i.tagPriority=o.tagPriority),i._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Lc))}}},R_={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Bc(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(i=>Bc(i)));if(t?.constructor===Object){const i={};for(const s of Object.keys(t))i[s]=await Bc(t[s]);return i}return t}const P_={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const i in t.entries)t.entries[i]._promisesProcessed||e.push(Bc(t.entries[i].input).then(s=>{t.entries[i].input=s,t.entries[i]._promisesProcessed=!0}));await Promise.all(e)}}},C_={meta:"content",link:"href",htmlAttrs:"lang"},M_=["innerHTML","textContent"],A_=t=>({key:"template-params",hooks:{"entries:normalize":e=>{const i=e.tags.filter(s=>s.tag==="templateParams"&&s.mode==="server")?.[0]?.props||{};Object.keys(i).length&&(t._ssrPayload={templateParams:{...t._ssrPayload?.templateParams||{},...i}})},"tags:resolve":({tagMap:e,tags:i})=>{const s=e.get("templateParams")?.props||{},n=s.separator||"|";delete s.separator,s.pageTitle=Ao(s.pageTitle||t._title||"",s,n);for(const r of i){if(r.processTemplateParams===!1)continue;const o=C_[r.tag];if(o&&typeof r.props[o]=="string")r.props[o]=Ao(r.props[o],s,n);else if(r.processTemplateParams||r.tag==="titleTemplate"||r.tag==="title")for(const a of M_)typeof r[a]=="string"&&(r[a]=Ao(r[a],s,n,r.tag==="script"&&r.props.type.endsWith("json")))}t._templateParams=s,t._separator=n},"tags:afterResolve":({tagMap:e})=>{const i=e.get("title");i?.textContent&&i.processTemplateParams!==!1&&(i.textContent=Ao(i.textContent,t._templateParams,t._separator))}}}),O_=(t,e)=>ot(e)?$p(e):e,Nu="usehead";function F_(t){return{install(i){i.config.globalProperties.$unhead=t,i.config.globalProperties.$head=t,i.provide(Nu,t)}}.install}function N_(){if(Ga()){const t=zt(Nu);if(t)return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function D_(t,e={}){const i=e.head||N_();return i.ssr?i.push(t||{},e):L_(i,t,e)}function L_(t,e,i={}){const s=ur();if(s&&!s.active)return{patch(){},dispose(){},_poll(){}};const n=oe(!1);let r;return gy(()=>{const a=n.value?{}:ba(e,O_);r?r.patch(a):r=t.push(a,i)}),Pi()&&(Jt(()=>{r.dispose()}),ng(()=>{n.value=!0}),sg(()=>{n.value=!1})),r}function I_(t){const e=t||am();return e?.ssrContext?.head||e?.runWithContext(()=>{if(Ga())return zt(Nu)})}function wm(t,e={}){const i=I_(e.nuxt);if(i)return D_(t,{head:i,...e})}const An=typeof document<"u";function bm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function z_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&bm(t.default)}const Ie=Object.assign;function Dl(t,e){const i={};for(const s in e){const n=e[s];i[s]=Ci(n)?n.map(t):t(n)}return i}const Hr=()=>{},Ci=Array.isArray;function pf(t,e){const i={};for(const s in t)i[s]=s in e?e[s]:t[s];return i}const _m=/#/g,B_=/&/g,U_=/\//g,V_=/=/g,H_=/\?/g,xm=/\+/g,G_=/%5B/g,$_=/%5D/g,km=/%5E/g,j_=/%60/g,Tm=/%7B/g,q_=/%7C/g,Sm=/%7D/g,W_=/%20/g;function Du(t){return t==null?"":encodeURI(""+t).replace(q_,"|").replace(G_,"[").replace($_,"]")}function K_(t){return Du(t).replace(Tm,"{").replace(Sm,"}").replace(km,"^")}function Uc(t){return Du(t).replace(xm,"%2B").replace(W_,"+").replace(_m,"%23").replace(B_,"%26").replace(j_,"`").replace(Tm,"{").replace(Sm,"}").replace(km,"^")}function Y_(t){return Uc(t).replace(V_,"%3D")}function X_(t){return Du(t).replace(_m,"%23").replace(H_,"%3F")}function Q_(t){return X_(t).replace(U_,"%2F")}function so(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const J_=/\/$/,Z_=t=>t.replace(J_,"");function Ll(t,e,i="/"){let s,n={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=e.slice(0,l),r=e.slice(l,a>0?a:e.length),n=t(r.slice(1))),a>=0&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=sx(s??e,i),{fullPath:s+r+o,path:s,query:n,hash:so(o)}}function ex(t,e){const i=e.query?t(e.query):"";return e.path+(i&&"?")+i+(e.hash||"")}function gf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tx(t,e,i){const s=e.matched.length-1,n=i.matched.length-1;return s>-1&&s===n&&er(e.matched[s],i.matched[n])&&Em(e.params,i.params)&&t(e.query)===t(i.query)&&e.hash===i.hash}function er(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Em(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var i in t)if(!ix(t[i],e[i]))return!1;return!0}function ix(t,e){return Ci(t)?mf(t,e):Ci(e)?mf(e,t):t?.valueOf()===e?.valueOf()}function mf(t,e){return Ci(e)?t.length===e.length&&t.every((i,s)=>i===e[s]):t.length===1&&t[0]===e}function sx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const i=e.split("/"),s=t.split("/"),n=s[s.length-1];(n===".."||n===".")&&s.push("");let r=i.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return i.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vc=(function(t){return t.pop="pop",t.push="push",t})({}),Il=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function nx(t){if(!t)if(An){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Z_(t)}const rx=/^[^#]+#/;function ox(t,e){return t.replace(rx,"#")+e}function ax(t,e){const i=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-i.left-(e.left||0),top:s.top-i.top-(e.top||0)}}const ol=()=>({left:window.scrollX,top:window.scrollY});function lx(t){let e;if("el"in t){const i=t.el,s=typeof i=="string"&&i.startsWith("#"),n=typeof i=="string"?s?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!n)return;e=ax(n,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vf(t,e){return(history.state?history.state.position-e:-1)+t}const Hc=new Map;function cx(t,e){Hc.set(t,e)}function ux(t){const e=Hc.get(t);return Hc.delete(t),e}function hx(t){return typeof t=="string"||t&&typeof t=="object"}function Rm(t){return typeof t=="string"||typeof t=="symbol"}let it=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Pm=Symbol("");it.MATCHER_NOT_FOUND+"",it.NAVIGATION_GUARD_REDIRECT+"",it.NAVIGATION_ABORTED+"",it.NAVIGATION_CANCELLED+"",it.NAVIGATION_DUPLICATED+"";function tr(t,e){return Ie(new Error,{type:t,[Pm]:!0},e)}function Qi(t,e){return t instanceof Error&&Pm in t&&(e==null||!!(t.type&e))}const fx=["params","query","hash"];function dx(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const i of fx)i in t&&(e[i]=t[i]);return JSON.stringify(e,null,2)}function px(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const n=i[s].replace(xm," "),r=n.indexOf("="),o=so(r<0?n:n.slice(0,r)),a=r<0?null:so(n.slice(r+1));if(o in e){let l=e[o];Ci(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function yf(t){let e="";for(let i in t){const s=t[i];if(i=Y_(i),s==null){s!==void 0&&(e+=(e.length?"&":"")+i);continue}(Ci(s)?s.map(n=>n&&Uc(n)):[s&&Uc(s)]).forEach(n=>{n!==void 0&&(e+=(e.length?"&":"")+i,n!=null&&(e+="="+n))})}return e}function gx(t){const e={};for(const i in t){const s=t[i];s!==void 0&&(e[i]=Ci(s)?s.map(n=>n==null?null:""+n):s==null?s:""+s)}return e}const mx=Symbol(""),wf=Symbol(""),Lu=Symbol(""),Cm=Symbol(""),Gc=Symbol("");function kr(){let t=[];function e(s){return t.push(s),()=>{const n=t.indexOf(s);n>-1&&t.splice(n,1)}}function i(){t=[]}return{add:e,list:()=>t.slice(),reset:i}}function Ts(t,e,i,s,n,r=o=>o()){const o=s&&(s.enterCallbacks[n]=s.enterCallbacks[n]||[]);return()=>new Promise((a,l)=>{const u=f=>{f===!1?l(tr(it.NAVIGATION_ABORTED,{from:i,to:e})):f instanceof Error?l(f):hx(f)?l(tr(it.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&s.enterCallbacks[n]===o&&typeof f=="function"&&o.push(f),a())},c=r(()=>t.call(s&&s.instances[n],e,i,u));let h=Promise.resolve(c);t.length<3&&(h=h.then(u)),h.catch(f=>l(f))})}function zl(t,e,i,s,n=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(bm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Ts(u,i,s,o,a,n))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=z_(c)?c.default:c;o.mods[a]=c,o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&Ts(f,i,s,o,a,n)()}))}}return r}function vx(t,e){const i=[],s=[],n=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>er(u,a))?s.push(a):i.push(a));const l=t.matched[o];l&&(e.matched.find(u=>er(u,l))||n.push(l))}return[i,s,n]}let yx=()=>location.protocol+"//"+location.host;function Mm(t,e){const{pathname:i,search:s,hash:n}=e,r=t.indexOf("#");if(r>-1){let o=n.includes(t.slice(r))?t.slice(r).length:1,a=n.slice(o);return a[0]!=="/"&&(a="/"+a),gf(a,"")}return gf(i,t)+s+n}function wx(t,e,i,s){let n=[],r=[],o=null;const a=({state:f})=>{const d=Mm(t,location),g=i.value,p=e.value;let _=0;if(f){if(i.value=d,e.value=f,o&&o===g){o=null;return}_=p?f.position-p.position:0}else s(d);n.forEach(w=>{w(i.value,g,{delta:_,type:Vc.pop,direction:_?_>0?Il.forward:Il.back:Il.unknown})})};function l(){o=i.value}function u(f){n.push(f);const d=()=>{const g=n.indexOf(f);g>-1&&n.splice(g,1)};return r.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Ie({},f.state,{scroll:ol()}),"")}}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:h}}function bf(t,e,i,s=!1,n=!1){return{back:t,current:e,forward:i,replaced:s,position:window.history.length,scroll:n?ol():null}}function bx(t){const{history:e,location:i}=window,s={value:Mm(t,i)},n={value:e.state};n.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const h=t.indexOf("#"),f=h>-1?(i.host&&document.querySelector("base")?t:t.slice(h))+l:yx()+t+l;try{e[c?"replaceState":"pushState"](u,"",f),n.value=u}catch(d){console.error(d),i[c?"replace":"assign"](f)}}function o(l,u){r(l,Ie({},e.state,bf(n.value.back,l,n.value.forward,!0),u,{position:n.value.position}),!0),s.value=l}function a(l,u){const c=Ie({},n.value,e.state,{forward:l,scroll:ol()});r(c.current,c,!0),r(l,Ie({},bf(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:n,push:a,replace:o}}function _x(t){t=nx(t);const e=bx(t),i=wx(t,e.state,e.location,e.replace);function s(r,o=!0){o||i.pauseListeners(),history.go(r)}const n=Ie({location:"",base:t,go:s,createHref:ox.bind(null,t)},e,i);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}let nn=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var mt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(mt||{});const xx={type:nn.Static,value:""},kx=/[a-zA-Z0-9_]/;function Tx(t){if(!t)return[[]];if(t==="/")return[[xx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${i})/"${u}": ${d}`)}let i=mt.Static,s=i;const n=[];let r;function o(){r&&n.push(r),r=[]}let a=0,l,u="",c="";function h(){u&&(i===mt.Static?r.push({type:nn.Static,value:u}):i===mt.Param||i===mt.ParamRegExp||i===mt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:nn.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&i!==mt.ParamRegExp){s=i,i=mt.EscapeNext;continue}switch(i){case mt.Static:l==="/"?(u&&h(),o()):l===":"?(h(),i=mt.Param):f();break;case mt.EscapeNext:f(),i=s;break;case mt.Param:l==="("?i=mt.ParamRegExp:kx.test(l)?f():(h(),i=mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case mt.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:i=mt.ParamRegExpEnd:c+=l;break;case mt.ParamRegExpEnd:h(),i=mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return i===mt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),n}const _f="[^/]+?",Sx={sensitive:!1,strict:!1,start:!0,end:!0};var Dt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Dt||{});const Ex=/[.+*?^${}()[\]/\\]/g;function Rx(t,e){const i=Ie({},Sx,e),s=[];let n=i.start?"^":"";const r=[];for(const u of t){const c=u.length?[]:[Dt.Root];i.strict&&!u.length&&(n+="/");for(let h=0;h<u.length;h++){const f=u[h];let d=Dt.Segment+(i.sensitive?Dt.BonusCaseSensitive:0);if(f.type===nn.Static)h||(n+="/"),n+=f.value.replace(Ex,"\\$&"),d+=Dt.Static;else if(f.type===nn.Param){const{value:g,repeatable:p,optional:_,regexp:w}=f;r.push({name:g,repeatable:p,optional:_});const y=w||_f;if(y!==_f){d+=Dt.BonusCustomRegExp;try{`${y}`}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+b.message)}}let m=p?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(m=_&&u.length<2?`(?:/${m})`:"/"+m),_&&(m+="?"),n+=m,d+=Dt.Dynamic,_&&(d+=Dt.BonusOptional),p&&(d+=Dt.BonusRepeatable),y===".*"&&(d+=Dt.BonusWildcard)}c.push(d)}s.push(c)}if(i.strict&&i.end){const u=s.length-1;s[u][s[u].length-1]+=Dt.BonusStrict}i.strict||(n+="/?"),i.end?n+="$":i.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const o=new RegExp(n,i.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let f=1;f<c.length;f++){const d=c[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(u){let c="",h=!1;for(const f of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const d of f)if(d.type===nn.Static)c+=d.value;else if(d.type===nn.Param){const{value:g,repeatable:p,optional:_}=d,w=g in u?u[g]:"";if(Ci(w)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Ci(w)?w.join("/"):w;if(!y)if(_)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);c+=y}}return c||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Px(t,e){let i=0;for(;i<t.length&&i<e.length;){const s=e[i]-t[i];if(s)return s;i++}return t.length<e.length?t.length===1&&t[0]===Dt.Static+Dt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Dt.Static+Dt.Segment?1:-1:0}function Am(t,e){let i=0;const s=t.score,n=e.score;for(;i<s.length&&i<n.length;){const r=Px(s[i],n[i]);if(r)return r;i++}if(Math.abs(n.length-s.length)===1){if(xf(s))return 1;if(xf(n))return-1}return n.length-s.length}function xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Cx={strict:!1,end:!0,sensitive:!1};function Mx(t,e,i){const s=Rx(Tx(t.path),i),n=Ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function Ax(t,e){const i=[],s=new Map;e=pf(Cx,e);function n(h){return s.get(h)}function r(h,f,d){const g=!d,p=Tf(h);p.aliasOf=d&&d.record;const _=pf(e,h),w=[p];if("alias"in h){const b=typeof h.alias=="string"?[h.alias]:h.alias;for(const v of b)w.push(Tf(Ie({},p,{components:d?d.record.components:p.components,path:v,aliasOf:d?d.record:p})))}let y,m;for(const b of w){const{path:v}=b;if(f&&v[0]!=="/"){const x=f.record.path,k=x[x.length-1]==="/"?"":"/";b.path=f.record.path+(v&&k+v)}if(y=Mx(b,f,_),d?d.alias.push(y):(m=m||y,m!==y&&m.alias.push(y),g&&h.name&&!Sf(y)&&o(h.name)),Om(y)&&l(y),p.children){const x=p.children;for(let k=0;k<x.length;k++)r(x[k],y,d&&d.children[k])}d=d||y}return m?()=>{o(m)}:Hr}function o(h){if(Rm(h)){const f=s.get(h);f&&(s.delete(h),i.splice(i.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=i.indexOf(h);f>-1&&(i.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return i}function l(h){const f=Nx(h,i);i.splice(f,0,h),h.record.name&&!Sf(h)&&s.set(h.record.name,h)}function u(h,f){let d,g={},p,_;if("name"in h&&h.name){if(d=s.get(h.name),!d)throw tr(it.MATCHER_NOT_FOUND,{location:h});_=d.record.name,g=Ie(kf(f.params,d.keys.filter(m=>!m.optional).concat(d.parent?d.parent.keys.filter(m=>m.optional):[]).map(m=>m.name)),h.params&&kf(h.params,d.keys.map(m=>m.name))),p=d.stringify(g)}else if(h.path!=null)p=h.path,d=i.find(m=>m.re.test(p)),d&&(g=d.parse(p),_=d.record.name);else{if(d=f.name?s.get(f.name):i.find(m=>m.re.test(f.path)),!d)throw tr(it.MATCHER_NOT_FOUND,{location:h,currentLocation:f});_=d.record.name,g=Ie({},f.params,h.params),p=d.stringify(g)}const w=[];let y=d;for(;y;)w.unshift(y.record),y=y.parent;return{name:_,path:p,params:g,matched:w,meta:Fx(w)}}t.forEach(h=>r(h));function c(){i.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:n}}function kf(t,e){const i={};for(const s of e)s in t&&(i[s]=t[s]);return i}function Tf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ox(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ox(t){const e={},i=t.props||!1;if("component"in t)e.default=i;else for(const s in t.components)e[s]=typeof i=="object"?i[s]:i;return e}function Sf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Fx(t){return t.reduce((e,i)=>Ie(e,i.meta),{})}function Nx(t,e){let i=0,s=e.length;for(;i!==s;){const r=i+s>>1;Am(t,e[r])<0?s=r:i=r+1}const n=Dx(t);return n&&(s=e.lastIndexOf(n,s-1)),s}function Dx(t){let e=t;for(;e=e.parent;)if(Om(e)&&Am(t,e)===0)return e}function Om({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ef(t){const e=zt(Lu),i=zt(Cm),s=nt(()=>{const l=ne(t.to);return e.resolve(l)}),n=nt(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],h=i.matched;if(!c||!h.length)return-1;const f=h.findIndex(er.bind(null,c));if(f>-1)return f;const d=Rf(l[u-2]);return u>1&&Rf(c)===d&&h[h.length-1].path!==d?h.findIndex(er.bind(null,l[u-2])):f}),r=nt(()=>n.value>-1&&Ux(i.params,s.value.params)),o=nt(()=>n.value>-1&&n.value===i.matched.length-1&&Em(i.params,s.value.params));function a(l={}){if(Bx(l)){const u=e[ne(t.replace)?"replace":"push"](ne(t.to)).catch(Hr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:nt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function Lx(t){return t.length===1?t[0]:t}const Ix=qa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ef,setup(t,{slots:e}){const i=Mi(Ef(t)),{options:s}=zt(Lu),n=nt(()=>({[Pf(t.activeClass,s.linkActiveClass,"router-link-active")]:i.isActive,[Pf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const r=e.default&&Lx(e.default(i));return t.custom?r:mi("a",{"aria-current":i.isExactActive?t.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:n.value},r)}}}),zx=Ix;function Bx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ux(t,e){for(const i in e){const s=e[i],n=t[i];if(typeof s=="string"){if(s!==n)return!1}else if(!Ci(n)||n.length!==s.length||s.some((r,o)=>r.valueOf()!==n[o].valueOf()))return!1}return!0}function Rf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pf=(t,e,i)=>t??e??i,Vx=qa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:i}){const s=zt(Gc),n=nt(()=>t.route||s.value),r=zt(wf,0),o=nt(()=>{let u=ne(r);const{matched:c}=n.value;let h;for(;(h=c[u])&&!h.components;)u++;return u}),a=nt(()=>n.value.matched[o.value]);Hn(wf,nt(()=>o.value+1)),Hn(mx,a),Hn(Gc,n);const l=oe();return je(()=>[l.value,a.value,t.name],([u,c,h],[f,d,g])=>{c&&(c.instances[h]=u,d&&d!==c&&u&&u===f&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!er(c,d)||!f)&&(c.enterCallbacks[h]||[]).forEach(p=>p(u))},{flush:"post"}),()=>{const u=n.value,c=t.name,h=a.value,f=h&&h.components[c];if(!f)return Cf(i.default,{Component:f,route:u});const d=h.props[c],g=d?d===!0?u.params:typeof d=="function"?d(u):d:null,_=mi(f,Ie({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[c]=null)},ref:l}));return Cf(i.default,{Component:_,route:u})||_}}});function Cf(t,e){if(!t)return null;const i=t(e);return i.length===1?i[0]:i}const Fm=Vx;function Hx(t){const e=Ax(t.routes,t),i=t.parseQuery||px,s=t.stringifyQuery||yf,n=t.history,r=kr(),o=kr(),a=kr(),l=Ms(pi);let u=pi;An&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Dl.bind(null,I=>""+I),h=Dl.bind(null,Q_),f=Dl.bind(null,so);function d(I,J){let X,ee;return Rm(I)?(X=e.getRecordMatcher(I),ee=J):ee=I,e.addRoute(ee,X)}function g(I){const J=e.getRecordMatcher(I);J&&e.removeRoute(J)}function p(){return e.getRoutes().map(I=>I.record)}function _(I){return!!e.getRecordMatcher(I)}function w(I,J){if(J=Ie({},J||l.value),typeof I=="string"){const E=Ll(i,I,J.path),N=e.resolve({path:E.path},J),$=n.createHref(E.fullPath);return Ie(E,N,{params:f(N.params),hash:so(E.hash),redirectedFrom:void 0,href:$})}let X;if(I.path!=null)X=Ie({},I,{path:Ll(i,I.path,J.path).path});else{const E=Ie({},I.params);for(const N in E)E[N]==null&&delete E[N];X=Ie({},I,{params:h(E)}),J.params=h(J.params)}const ee=e.resolve(X,J),ge=I.hash||"";ee.params=c(f(ee.params));const Se=ex(s,Ie({},I,{hash:K_(ge),path:ee.path})),T=n.createHref(Se);return Ie({fullPath:Se,hash:ge,query:s===yf?gx(I.query):I.query||{}},ee,{redirectedFrom:void 0,href:T})}function y(I){return typeof I=="string"?Ll(i,I,l.value.path):Ie({},I)}function m(I,J){if(u!==I)return tr(it.NAVIGATION_CANCELLED,{from:J,to:I})}function b(I){return k(I)}function v(I){return b(Ie(y(I),{replace:!0}))}function x(I,J){const X=I.matched[I.matched.length-1];if(X&&X.redirect){const{redirect:ee}=X;let ge=typeof ee=="function"?ee(I,J):ee;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=y(ge):{path:ge},ge.params={}),Ie({query:I.query,hash:I.hash,params:ge.path!=null?{}:I.params},ge)}}function k(I,J){const X=u=w(I),ee=l.value,ge=I.state,Se=I.force,T=I.replace===!0,E=x(X,ee);if(E)return k(Ie(y(E),{state:typeof E=="object"?Ie({},ge,E.state):ge,force:Se,replace:T}),J||X);const N=X;N.redirectedFrom=J;let $;return!Se&&tx(s,ee,X)&&($=tr(it.NAVIGATION_DUPLICATED,{to:N,from:ee}),fe(ee,ee,!0,!1)),($?Promise.resolve($):P(N,ee)).catch(B=>Qi(B)?Qi(B,it.NAVIGATION_GUARD_REDIRECT)?B:he(B):q(B,N,ee)).then(B=>{if(B){if(Qi(B,it.NAVIGATION_GUARD_REDIRECT))return k(Ie({replace:T},y(B.to),{state:typeof B.to=="object"?Ie({},ge,B.to.state):ge,force:Se}),J||N)}else B=M(N,ee,!0,T,ge);return A(N,ee,B),B})}function R(I,J){const X=m(I,J);return X?Promise.reject(X):Promise.resolve()}function S(I){const J=xe.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(I):I()}function P(I,J){let X;const[ee,ge,Se]=vx(I,J);X=zl(ee.reverse(),"beforeRouteLeave",I,J);for(const E of ee)E.leaveGuards.forEach(N=>{X.push(Ts(N,I,J))});const T=R.bind(null,I,J);return X.push(T),we(X).then(()=>{X=[];for(const E of r.list())X.push(Ts(E,I,J));return X.push(T),we(X)}).then(()=>{X=zl(ge,"beforeRouteUpdate",I,J);for(const E of ge)E.updateGuards.forEach(N=>{X.push(Ts(N,I,J))});return X.push(T),we(X)}).then(()=>{X=[];for(const E of Se)if(E.beforeEnter)if(Ci(E.beforeEnter))for(const N of E.beforeEnter)X.push(Ts(N,I,J));else X.push(Ts(E.beforeEnter,I,J));return X.push(T),we(X)}).then(()=>(I.matched.forEach(E=>E.enterCallbacks={}),X=zl(Se,"beforeRouteEnter",I,J,S),X.push(T),we(X))).then(()=>{X=[];for(const E of o.list())X.push(Ts(E,I,J));return X.push(T),we(X)}).catch(E=>Qi(E,it.NAVIGATION_CANCELLED)?E:Promise.reject(E))}function A(I,J,X){a.list().forEach(ee=>S(()=>ee(I,J,X)))}function M(I,J,X,ee,ge){const Se=m(I,J);if(Se)return Se;const T=J===pi,E=An?history.state:{};X&&(ee||T?n.replace(I.fullPath,Ie({scroll:T&&E&&E.scroll},ge)):n.push(I.fullPath,ge)),l.value=I,fe(I,J,X,T),he()}let D;function F(){D||(D=n.listen((I,J,X)=>{if(!pe.listening)return;const ee=w(I),ge=x(ee,pe.currentRoute.value);if(ge){k(Ie(ge,{replace:!0,force:!0}),ee).catch(Hr);return}u=ee;const Se=l.value;An&&cx(vf(Se.fullPath,X.delta),ol()),P(ee,Se).catch(T=>Qi(T,it.NAVIGATION_ABORTED|it.NAVIGATION_CANCELLED)?T:Qi(T,it.NAVIGATION_GUARD_REDIRECT)?(k(Ie(y(T.to),{force:!0}),ee).then(E=>{Qi(E,it.NAVIGATION_ABORTED|it.NAVIGATION_DUPLICATED)&&!X.delta&&X.type===Vc.pop&&n.go(-1,!1)}).catch(Hr),Promise.reject()):(X.delta&&n.go(-X.delta,!1),q(T,ee,Se))).then(T=>{T=T||M(ee,Se,!1),T&&(X.delta&&!Qi(T,it.NAVIGATION_CANCELLED)?n.go(-X.delta,!1):X.type===Vc.pop&&Qi(T,it.NAVIGATION_ABORTED|it.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),A(ee,Se,T)}).catch(Hr)}))}let O=kr(),C=kr(),L;function q(I,J,X){he(I);const ee=C.list();return ee.length?ee.forEach(ge=>ge(I,J,X)):console.error(I),Promise.reject(I)}function ce(){return L&&l.value!==pi?Promise.resolve():new Promise((I,J)=>{O.add([I,J])})}function he(I){return L||(L=!I,F(),O.list().forEach(([J,X])=>I?X(I):J()),O.reset()),I}function fe(I,J,X,ee){const{scrollBehavior:ge}=t;if(!An||!ge)return Promise.resolve();const Se=!X&&ux(vf(I.fullPath,0))||(ee||!X)&&history.state&&history.state.scroll||null;return st().then(()=>ge(I,J,Se)).then(T=>T&&lx(T)).catch(T=>q(T,I,J))}const ae=I=>n.go(I);let ie;const xe=new Set,pe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:p,resolve:w,options:t,push:b,replace:v,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:C.add,isReady:ce,install(I){I.component("RouterLink",zx),I.component("RouterView",Fm),I.config.globalProperties.$router=pe,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(l)}),An&&!ie&&l.value===pi&&(ie=!0,b(n.location).catch(ee=>{}));const J={};for(const ee in pi)Object.defineProperty(J,ee,{get:()=>l.value[ee],enumerable:!0});I.provide(Lu,pe),I.provide(Cm,us(J)),I.provide(Gc,l);const X=I.unmount;xe.add(I),I.unmount=function(){xe.delete(I),xe.size<1&&(u=pi,D&&D(),D=null,l.value=pi,ie=!1,L=!1),X()}}};function we(I){return I.reduce((J,X)=>J.then(()=>S(X)),Promise.resolve())}return pe}const Gx=(t,e)=>({default:()=>t?mi(Nw,t===!0?{}:t,e):e.default?.()}),$x=/(:\w+)\([^)]+\)/g,jx=/(:\w+)[?+*]/g,qx=/:\w+/g;function Mf(t){const e=t?.meta.key??t.path.replace($x,"$1").replace(jx,"$1").replace(qx,i=>t.params[i.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function Wx(t,e){return t===e||e===pi?!1:Mf(t)!==Mf(e)?!0:!t.matched.every((s,n)=>s.components&&s.components.default===e.matched[n]?.components?.default)}function Af(t){return Array.isArray(t)?t:[t]}function Kx(t){const e=[];for(const i of t)i&&e.push({...i,onAfterLeave:i.onAfterLeave?Af(i.onAfterLeave):void 0,onBeforeLeave:i.onBeforeLeave?Af(i.onBeforeLeave):void 0});return Oc(...e)}const Yx={scrollBehavior(t,e,i){const s=Ce(),n=_i(),r=n.options?.scrollBehaviorType??"auto";return t.path.replace(/\/$/,"")===e.path.replace(/\/$/,"")?e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Nm(t.hash),behavior:r}:!1:(typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1?!1:e===pi?Of(t,e,i,r):new Promise(a=>{const l=()=>{requestAnimationFrame(()=>{if(n.currentRoute.value.fullPath!==t.fullPath){a(!1);return}a(Of(t,e,i,r))})};s.hooks.hookOnce("page:loading:end",()=>{const u=s["~transitionPromise"];u?u.then(l):l()})})}};function Nm(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Of(t,e,i,s){return i||(t.hash?{el:t.hash,top:Nm(t.hash),behavior:Wx(t,e)?s:"instant"}:{left:0,top:0})}const Xx={hashMode:!1,scrollBehaviorType:"auto"},es={...Xx,...Yx},Dm=(()=>{const t={redirect:"/projects/**"};return(e,i)=>{let s=[];i.charCodeAt(i.length-1)===47&&(i=i.slice(0,-1));let n=i.split("/");return n.length>1&&n[n.length-1]===""&&(n.pop(),i=i.slice(0,-1)),n.length>1&&n[1]==="work"&&s.push({data:t,params:{_:i.slice(6)}}),s.reverse()}})(),Qx=Dm,Jx=function(e){if(!e.includes("%"))return e;const i=e.indexOf("?"),s=i===-1?e:e.slice(0,i);try{return i===-1?decodeURI(s):decodeURI(s)+e.slice(i)}catch{return e}},Ff=(t,e)=>{if(typeof t!="string")return t;const i=Jx(t);return e?i.toLowerCase():i},Zx=t=>es.sensitive?Oc({},...Dm("",Ff(t,!1)).map(e=>e.data).reverse()):Oc({},...Qx("",Ff(t,!0)).map(e=>e.data).reverse()),e2=Zx;let Ko;function t2(){let t;return t=$fetch(Fu(`builds/meta/${il().app.buildId}.json`),{responseType:"json"}).then(e=>{if(!e||typeof e!="object"||!Array.isArray(e.prerendered))throw new Error("[nuxt] Received malformed app manifest. Ensure that `builds/meta/*.json` is served as JSON by your hosting/proxy and not rewritten to an HTML fallback.");return e}),Ko=t,t.catch(e=>{Ko===t&&(Ko=void 0),console.error("[nuxt] Error fetching app manifest.",e)}),t}function Lm(){return Ko||t2()}function Iu(t){const e=typeof t=="string"?t:t.path;try{return e2(e)}catch(i){return console.error("[nuxt] Error matching route rules.",i),{}}}async function Nf(t,e={}){return null}async function i2(t,e){return null}function s2(t){return new URL(t,"http://localhost").pathname}function n2(t){return!!Iu({path:s2(t)}).payload}let Ks=null;async function r2(){if(Ks)return Ks;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await o2(t.textContent||""),i=t.dataset.src?await i2(t.dataset.src,e.prerenderedAt?"force-cache":"no-cache"):void 0;return Ks={...e,...i,...window.__NUXT__},Ks.config?.public&&(Ks.config.public=Mi(Ks.config.public)),Ks}async function o2(t){return await s_(t,Ce()._payloadRevivers)}function a2(t,e){Ce()._payloadRevivers[t]=e}const l2=[["NuxtError",t=>$i(t)],["EmptyShallowRef",t=>Ms(t==="_"?void 0:t==="0n"?BigInt(0):ma(t))],["EmptyRef",t=>oe(t==="_"?void 0:t==="0n"?BigInt(0):ma(t))],["ShallowRef",t=>Ms(t)],["ShallowReactive",t=>us(t)],["Ref",t=>oe(t)],["Reactive",t=>Mi(t)]],c2=_t({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,i;for(const[s,n]of l2)a2(s,n);Object.assign(t.payload,([e,i]=Vr(()=>t.runWithContext(r2)),e=await e,i(),e)),window.__NUXT__=t.payload}});async function zu(t,e={}){const i=e.document||t.resolvedOptions.document;if(!i||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async n=>{const r=new Map,o=new Promise(d=>{t.resolveTags().then(g=>{d(g.map(p=>{const _=r.get(p._d)||0,w={tag:p,id:(_?`${p._d}:${_}`:p._d)||p._h,shouldRender:!0};return p._d&&mm(p._d)&&r.set(p._d,_+1),w}))})});let a=t._dom;if(!a){a={title:i.title,elMap:new Map().set("htmlAttrs",i.documentElement).set("bodyAttrs",i.body)};for(const d of["body","head"]){const g=i[d]?.children;for(const p of g){const _=p.tagName.toLowerCase();if(!Dc.has(_))continue;const w=ym({tag:_,props:{}},{innerHTML:p.innerHTML,...p.getAttributeNames().reduce((y,m)=>(y[m]=p.getAttribute(m),y),{})||{}});if(w.key=p.getAttribute("data-hid")||void 0,w._d=zc(w)||vm(w),a.elMap.has(w._d)){let y=1,m=w._d;for(;a.elMap.has(m);)m=`${w._d}:${y++}`;a.elMap.set(m,p)}else a.elMap.set(w._d,p)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(d,g,p){const _=`${d}:${g}`;a.sideEffects[_]=p,delete a.pendingSideEffects[_]}function u({id:d,$el:g,tag:p}){const _=p.tag.endsWith("Attrs");a.elMap.set(d,g),_||(p.textContent&&p.textContent!==g.textContent&&(g.textContent=p.textContent),p.innerHTML&&p.innerHTML!==g.innerHTML&&(g.innerHTML=p.innerHTML),l(d,"el",()=>{g?.remove(),a.elMap.delete(d)}));for(const w in p.props){if(!Object.prototype.hasOwnProperty.call(p.props,w))continue;const y=p.props[w];if(w.startsWith("on")&&typeof y=="function"){const b=g?.dataset;if(b&&b[`${w}fired`]){const v=w.slice(0,-5);y.call(g,new Event(v.substring(2)))}g.getAttribute(`data-${w}`)!==""&&((p.tag==="bodyAttrs"?i.defaultView:g).addEventListener(w.substring(2),y.bind(g)),g.setAttribute(`data-${w}`,""));continue}const m=`attr:${w}`;if(w==="class"){if(!y)continue;for(const b of y)_&&l(d,`${m}:${b}`,()=>g.classList.remove(b)),!g.classList.contains(b)&&g.classList.add(b)}else if(w==="style"){if(!y)continue;for(const[b,v]of y)l(d,`${m}:${b}`,()=>{g.style.removeProperty(b)}),g.style.setProperty(b,v)}else y!==!1&&y!==null&&(g.getAttribute(w)!==y&&g.setAttribute(w,y===!0?"":String(y)),_&&l(d,m,()=>g.removeAttribute(w)))}}const c=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0},f=await o;for(const d of f){const{tag:g,shouldRender:p,id:_}=d;if(p){if(g.tag==="title"){i.title=g.textContent,l("title","",()=>i.title=a.title);continue}d.$el=d.$el||a.elMap.get(_),d.$el?u(d):Dc.has(g.tag)&&c.push(d)}}for(const d of c){const g=d.tag.tagPosition||"head";d.$el=i.createElement(d.tag.tag),u(d),h[g]=h[g]||i.createDocumentFragment(),h[g].appendChild(d.$el)}for(const d of f)await t.hooks.callHook("dom:renderTag",d,i,l);h.head&&i.head.appendChild(h.head),h.bodyOpen&&i.body.insertBefore(h.bodyOpen,i.body.firstChild),h.bodyClose&&i.body.appendChild(h.bodyClose);for(const d in a.pendingSideEffects)a.pendingSideEffects[d]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:f}),n()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function u2(t={}){const e=t.domOptions?.render||zu;t.document=t.document||(typeof window<"u"?document:void 0);const i=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1,s=T_({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[i?JSON.parse(i):!1,...t.init||[]]});return s.ssr=!1,s}function h2(t,e){let i=0;return()=>{const s=++i;e(()=>{i===s&&t()})}}function f2(t={}){const e=u2({domOptions:{render:h2(()=>zu(e),i=>setTimeout(i,0))},...t});return e.install=F_(e),e}const d2={disableDefaults:!0,disableCapoSorting:!1,plugins:[R_,P_,A_,E_]},p2=_t({name:"nuxt:head",enforce:"pre",setup(t){const e=f2(d2);t.vueApp.use(e);{let i=!0;const s=async()=>{i=!1,await zu(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!i}),t.hooks.hook("page:start",()=>{i=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s);const n=e.push.bind(e);e.push=((r,o)=>{const a=n(r,o),l=a.dispose.bind(a);return a.dispose=()=>{const u=t["~transitionPromise"];u?u.then(l):l()},a})}}}),g2=/(:\w+)\([^)]+\)/g,m2=/(:\w+)[?+*]/g,v2=/:\w+/g,y2=(t,e)=>e.path.replace(g2,"$1").replace(m2,"$1").replace(v2,i=>t.params[i.slice(1)]?.toString()||""),no=(t,e)=>{const i=t.route.matched.find(n=>n.components?.default===t.Component.type),s=e??i?.meta.key??(i&&y2(t.route,i));return typeof s=="function"?s(t.route):s},w2=(t,e)=>({default:()=>t?mi(Oy,t===!0?{}:t,e):e});function Im(t){return Array.isArray(t)?t:[t]}const b2="modulepreload",_2=function(t,e){return new URL(t,e).href},Df={},_a=function(e,i,s){let n=Promise.resolve();if(i&&i.length>0){let u=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");n=u(i.map(c=>{if(c=_2(c,s),c in Df)return;Df[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(s)for(let g=o.length-1;g>=0;g--){const p=o[g];if(p.href===c&&(!h||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":b2,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((g,p)=>{d.addEventListener("load",g),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},x2={key:"index",alias:["/projects/:slug","/contact","/about"]},k2={middleware:t=>/\.[a-z0-9]+$/i.test(t.path)?Lb($i({statusCode:404,statusMessage:"Not found"})):Db("/",{replace:!0})},T2=null,S2={},Bl=[{name:"index",path:"/",meta:x2||{},alias:["/projects/:slug","/contact","/about"],component:()=>_a(()=>import("./BEONk6xx.js"),[],import.meta.url)},{name:"all",path:"/:all(.*)*",meta:k2||{},component:()=>_a(()=>import("./ETDjYAm8.js"),[],import.meta.url)},{name:T2?.name,path:"/work/:pathMatch(.*)",component:S2}],E2=async t=>{let e,i;if(!t.meta?.validate)return;const s=([e,i]=Vr(()=>Promise.resolve(t.meta.validate(t))),e=await e,i(),e);return s===!0?void 0:$i({fatal:!0,status:s&&(s.status||s.statusCode)||404,statusText:s&&(s.statusText||s.statusMessage)||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}})},R2=t=>{const e=Iu({path:t.path});if(e.redirect){const i=e.redirect.includes("#")?e.redirect:e.redirect+t.hash;return fr(i,{acceptRelative:!0})?(window.location.href=i,!1):i}},P2=[E2,R2],$c={};function Lf(t,e,i){const{pathname:s,search:n,hash:r}=e,o=t.indexOf("#");if(o>-1){const u=r.includes(t.slice(o))?t.slice(o).length:1;let c=r.slice(u);return c[0]!=="/"&&(c="/"+c),Jh(c,"")}const a=Jh(s,t),l=!i||Zg(a,i)?a:i;return l+(l.includes("?")?"":n)+r}const C2=_t({name:"nuxt:router",enforce:"pre",async setup(t){let e,i,s=il().app.baseURL;const n=es.history?.(s)??_x(s),r=es.routes?([e,i]=Vr(()=>es.routes(Bl)),e=await e,i(),e??Bl):Bl;let o;const a=Hx({...es,scrollBehavior:(m,b,v)=>{if(b===pi){o=v;return}if(es.scrollBehavior){if(a.options.scrollBehavior=es.scrollBehavior,"scrollRestoration"in window.history){const x=a.beforeEach(()=>{x(),window.history.scrollRestoration="manual"})}return es.scrollBehavior(m,pi,o||v)}},history:n,routes:r});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Ms(a.currentRoute.value);a.afterEach((m,b)=>{l.value=b}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=Lf(s,window.location,t.payload.path),c=Ms(a.currentRoute.value),h=()=>{c.value=a.currentRoute.value};a.afterEach((m,b)=>{const v=m.matched.at(-1)?.components?.default,x=b.matched.at(-1)?.components?.default;if(v===x){const k=no({route:m,Component:{type:v}}),R=no({route:b,Component:{type:x}});k===R&&h();return}m.matched.length<b.matched.length&&m.matched.every((k,R)=>k.components?.default===b.matched[R]?.components?.default)&&h()});const f={sync:h};for(const m in c.value)Object.defineProperty(f,m,{get:()=>c.value[m],enumerable:!0});t._route=us(f),t._middleware||={global:[],named:{}};const d=rl();a.afterEach(async(m,b,v)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(um),v&&await t.callHook("page:loading:end")});try{[e,i]=Vr(()=>a.isReady()),await e,i()}catch(m){[e,i]=Vr(()=>t.runWithContext(()=>ks(m))),await e,i()}const g=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value,p=a.currentRoute.value.fullPath,_=t.isHydrating&&t.payload.prerenderedAt&&t.payload.path&&u!==t.payload.path&&Zg(a.currentRoute.value.path,t.payload.path);h();function w(m){!t.isHydrating&&m.fullPath!==Lf(s,window.location)&&n.push(m.fullPath)}const y=t.payload.state._layout;return a.beforeEach(async(m,b)=>{await t.callHook("page:loading:start"),m.meta=Mi(m.meta),t.isHydrating&&y&&!ji(m.meta.layout)&&(m.meta.layout=y),t._processingMiddleware=!0;{const v=new Set([...P2,...t._middleware.global]);for(const k of m.matched){const R=k.meta.middleware;if(R)for(const S of Im(R))v.add(S)}const x=Iu({path:m.path});if(x.appMiddleware)for(const k in x.appMiddleware)x.appMiddleware[k]?v.add(k):v.delete(k);for(const k of v){const R=typeof k=="string"?t._middleware.named[k]||await $c[k]?.().then(S=>S.default||S):k;if(!R)throw new Error(`Unknown route middleware: '${k}'.`);try{const S=await t.runWithContext(()=>R(m,b));if(!t.payload.serverRendered&&t.isHydrating&&(S===!1||S instanceof Error)){const P=S||$i({status:404,statusText:`Page Not Found: ${u}`});return await t.runWithContext(()=>ks(P)),!1}if(S===!0)continue;if(S===!1)return S;if(S)return hm(S)&&S.fatal&&(await t.runWithContext(()=>ks(S)),w(m)),S}catch(S){const P=$i(S);return P.fatal&&(await t.runWithContext(()=>ks(P)),w(m)),P}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(m=>{if(m.matched.length===0&&!d.value)return t.runWithContext(()=>ks($i({status:404,fatal:!1,statusText:`Page not found: ${m.fullPath}`,data:{path:m.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{if("name"in g&&(g.name=void 0),!(a.currentRoute.value.fullPath!==p))if(_){const b=a.resolve(t.payload.path);"name"in b&&(b.name=void 0),await a.replace({...b,force:!0});const v=()=>{t["~restoreDeferredRoute"]&&(t["~restoreDeferredRoute"]=void 0,a.currentRoute.value=a.resolve(u),h(),a.replace({...g,force:!0}).catch(()=>{}))};t["~restoreDeferredRoute"]=v,t.hooks.hookOnce("app:suspense:resolve",v)}else await a.replace({...g,force:!0});a.options.scrollBehavior=es.scrollBehavior}catch(m){await t.runWithContext(()=>ks(m))}}),{provide:{router:a}}}}),If=globalThis.requestIdleCallback||(t=>{const e=Date.now(),i={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(i)},1)}),Bu=t=>{const e=Ce();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{If(()=>t())}):If(()=>t())},M2=_t({name:"nuxt:payload",setup(t){const e=new Set;_i().beforeResolve(async(i,s)=>{const n=n2(i.path),r=n?Zh(i.fullPath):i.path,o=n?Zh(s.fullPath):s.path;if(r===o)return;const a=await Nf();if(a){for(const l of e)delete t.static.data[l];for(const l in a.data)l in t.static.data||e.add(l),t.static.data[l]=a.data[l]}}),Bu(()=>{t.hooks.hook("link:prefetch",async i=>{const{hostname:s}=new URL(i,window.location.href);s===window.location.hostname&&await Nf().catch(()=>{console.warn("[nuxt] Error preloading payload for",i)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Lm,1e3)})}}),A2=_t(()=>{const t=_i();Bu(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),O2=_t(t=>{let e;async function i(){let s;try{s=await Lm()}catch(n){const r=n;if(!("status"in r&&(r.status===404||r.status===403)))throw r}e&&clearTimeout(e),e=setTimeout(i,of);try{const n=await $fetch(Fu("builds/latest.json")+`?${Date.now()}`);n.id!==s?.id&&(t.hooks.callHook("app:manifest:update",n),e&&clearTimeout(e))}catch{}}Bu(()=>{e=setTimeout(i,of)})});function F2(t={}){const e=t.path||window.location.pathname,i=new URL(e,window.location.href);if(i.host!==window.location.host)throw new Error(`Cannot navigate to a URL with a different host: '${e}'.`);if(i.protocol&&Pc(i.protocol))throw new Error(`Cannot navigate to a URL with '${i.protocol}' protocol.`);let s={};try{s=ma(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||s?.path!==e||s?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ce().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const N2=_t({name:"nuxt:chunk-reload",setup(t){const e=_i(),i=il(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:r})=>{s.add(r)});function n(r){const o=Qg(i.app.baseURL,r.fullPath);F2({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(n)}),e.onError((r,o)=>{s.has(r)&&n(o)})}});function D2(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}const L2=_t({name:"nuxt:island-link-navigation",setup(t){}}),I2=_t({name:"nuxt:global-components"}),Oo={},z2=_t({name:"nuxt:prefetch",setup(t){const e=_i();t.hooks.hook("app:mounted",()=>{e.beforeEach(async i=>{const s=i?.meta?.layout;s&&typeof Oo[s]=="function"&&await Oo[s]()})}),t.hooks.hook("link:prefetch",i=>{if(fr(i))return;const s=e.resolve(i);if(!s)return;const n=s.meta.layout;let r=Im(s.meta.middleware);r=r.filter(o=>typeof o=="string");for(const o of r)typeof $c[o]=="function"&&$c[o]();typeof n=="string"&&n in Oo&&D2(Oo[n])})}});var B2=(function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,n){s.__proto__=n}||function(s,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])},t(e,i)};return function(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}})(),U2=(function(t){B2(e,t);function e(i,s,n){var r=this,o="status ".concat(i.status," (").concat(i.statusText,")"),a=typeof i.body=="string"?i.body:JSON.stringify(i.body);return r=t.call(this,i.status<200||i.status>=300?"Request failed with ".concat(o,": ").concat(a):"Request failed: ".concat(a))||this,r.name="ApiError",r.response=i,r.query=s,r.options=n,r}return e})(Error);function V2(t){var e={Accept:"application/json",Authorization:"Bearer ".concat(t.token)};return t.includeDrafts&&(e["X-Include-Drafts"]="true"),t.excludeInvalid&&(e["X-Exclude-Invalid"]="true"),t.environment&&(e["X-Environment"]=t.environment),t.returnCacheTags&&(e["X-Cache-Tags"]="true"),t.contentLink&&(e["X-Visual-Editing"]=t.contentLink),t.baseEditingUrl&&(e["X-Base-Editing-Url"]=t.baseEditingUrl),t.referer&&(e.Referer=t.referer),e}function Vt(t,e,i){for(var s="",n=0;n<t.length;n++)n&&(s+=e),s+=i(t[n]);return s}function H2(t){return JSON.stringify(t)}function G2(t){return`"""
`+t.replace(/"""/g,'\\"""')+`
"""`}var Fi=`
`,tt={OperationDefinition(t){var e="";t.description&&(e+=tt.StringValue(t.description)+`
`),e+=t.operation,t.name&&(e+=" "+t.name.value),t.variableDefinitions&&t.variableDefinitions.length&&(t.name||(e+=" "),e+="("+Vt(t.variableDefinitions,", ",tt.VariableDefinition)+")"),t.directives&&t.directives.length&&(e+=" "+Vt(t.directives," ",tt.Directive));var i=tt.SelectionSet(t.selectionSet);return e!=="query"?e+" "+i:i},VariableDefinition(t){var e="";return t.description&&(e+=tt.StringValue(t.description)+" "),e+=tt.Variable(t.variable)+": "+Ji(t.type),t.defaultValue&&(e+=" = "+Ji(t.defaultValue)),t.directives&&t.directives.length&&(e+=" "+Vt(t.directives," ",tt.Directive)),e},Field(t){var e=t.alias?t.alias.value+": "+t.name.value:t.name.value;if(t.arguments&&t.arguments.length){var i=Vt(t.arguments,", ",tt.Argument);e.length+i.length+2>80?e+="("+(Fi+="  ")+Vt(t.arguments,Fi,tt.Argument)+(Fi=Fi.slice(0,-2))+")":e+="("+i+")"}return t.directives&&t.directives.length&&(e+=" "+Vt(t.directives," ",tt.Directive)),t.selectionSet&&t.selectionSet.selections.length&&(e+=" "+tt.SelectionSet(t.selectionSet)),e},StringValue(t){return t.block?G2(t.value).replace(/\n/g,Fi):H2(t.value)},BooleanValue:t=>""+t.value,NullValue:t=>"null",IntValue:t=>t.value,FloatValue:t=>t.value,EnumValue:t=>t.value,Name:t=>t.value,Variable:t=>"$"+t.name.value,ListValue:t=>"["+Vt(t.values,", ",Ji)+"]",ObjectValue:t=>"{"+Vt(t.fields,", ",tt.ObjectField)+"}",ObjectField:t=>t.name.value+": "+Ji(t.value),Document(t){return!t.definitions||!t.definitions.length?"":Vt(t.definitions,`

`,Ji)},SelectionSet:t=>"{"+(Fi+="  ")+Vt(t.selections,Fi,Ji)+(Fi=Fi.slice(0,-2))+"}",Argument:t=>t.name.value+": "+Ji(t.value),FragmentSpread(t){var e="..."+t.name.value;return t.directives&&t.directives.length&&(e+=" "+Vt(t.directives," ",tt.Directive)),e},InlineFragment(t){var e="...";return t.typeCondition&&(e+=" on "+t.typeCondition.name.value),t.directives&&t.directives.length&&(e+=" "+Vt(t.directives," ",tt.Directive)),e+=" "+tt.SelectionSet(t.selectionSet)},FragmentDefinition(t){var e="";return t.description&&(e+=tt.StringValue(t.description)+`
`),e+="fragment "+t.name.value,e+=" on "+t.typeCondition.name.value,t.directives&&t.directives.length&&(e+=" "+Vt(t.directives," ",tt.Directive)),e+" "+tt.SelectionSet(t.selectionSet)},Directive(t){var e="@"+t.name.value;return t.arguments&&t.arguments.length&&(e+="("+Vt(t.arguments,", ",tt.Argument)+")"),e},NamedType:t=>t.name.value,ListType:t=>"["+Ji(t.type)+"]",NonNullType:t=>Ji(t.type)+"!"},Ji=t=>tt[t.kind](t);function zm(t){return Fi=`
`,tt[t.kind]?tt[t.kind](t):""}var xa=function(){return xa=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},xa.apply(this,arguments)};function $2(t,e){var i=typeof t=="string"?t:zm(t);return xa(xa({},e?.requestInitOptions),{headers:V2(e),body:JSON.stringify({query:i,variables:e?.variables}),method:"POST"})}var ka=function(){return ka=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},ka.apply(this,arguments)},Bm=function(t,e,i,s){function n(r){return r instanceof i?r:new i(function(o){o(r)})}return new(i||(i=Promise))(function(r,o){function a(c){try{u(s.next(c))}catch(h){o(h)}}function l(c){try{u(s.throw(c))}catch(h){o(h)}}function u(c){c.done?r(c.value):n(c.value).then(a,l)}u((s=s.apply(t,e||[])).next())})},Um=function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,n,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(s)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(i=0)),i;)try{if(s=1,n&&(r=u[0]&2?n.return:u[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,u[1])).done)return r;switch(n=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(r=i.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){i=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(u[0]===6&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(c){u=[6,c],n=0}finally{s=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}};function Vm(t,e){return Bm(this,void 0,void 0,function(){var i,s,n,r,o,a,l,u,c,h;return Um(this,function(f){switch(f.label){case 0:if(!t)throw new Error("Query is not valid");if(i=e.fetchFn||(typeof fetch>"u"?void 0:fetch)||(typeof globalThis>"u"?void 0:globalThis.fetch),typeof i>"u")throw new Error("fetch() is not available: either polyfill it globally, or provide it as fetchFn option.");return s=typeof t=="string"?t:zm(t),[4,i(e.graphqlEndpointUrl||"https://graphql.datocms.com/",$2(s,e))];case 1:return n=f.sent(),!((h=n.headers.get("content-type"))===null||h===void 0)&&h.includes("application/json")?[4,n.json()]:[3,3];case 2:return o=f.sent(),[3,5];case 3:return[4,n.text()];case 4:o=f.sent(),f.label=5;case 5:return r=o,a="autoRetry"in e?e.autoRetry:!0,n.status===429&&a?(l=n.headers.get("X-RateLimit-Reset"),u=(e.retryCount||0)+1,c=l?Number.parseInt(l,10):u,[4,q2(c*1e3)]):[3,7];case 6:return f.sent(),[2,Vm(s,ka(ka({},e),{retryCount:u}))];case 7:if(!n.ok||typeof r=="string"||typeof r=="object"&&"errors"in r)throw new U2({status:n.status,statusText:n.statusText,headers:n.headers,body:r},s,e);return[2,[r.data,n]]}})})}function j2(t,e){return Bm(this,void 0,void 0,function(){var i;return Um(this,function(s){switch(s.label){case 0:return[4,Vm(t,e)];case 1:return i=s.sent(),[2,i[0]]}})})}function q2(t){return new Promise(function(e){setTimeout(e,t)})}const W2=`query Services {
	cats: allCategories(first: 50) {
		id
		slug
		title
	}

	all: allServices(first: 100) {
		id
		slug
		title
		categories {
			id
		}
	}
}
`,K2={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Services"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"cats"},name:{kind:"Name",value:"allCategories"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"50"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"all"},name:{kind:"Name",value:"allServices"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"100"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:195,source:{name:"GraphQL request",locationOffset:{line:1,column:1},body:W2}}},Y2={definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AssetFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FileField"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"focalPoint"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"x"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"y"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"tile"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"imgixParams"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"fit"},value:{kind:"EnumValue",value:"max"}},{kind:"ObjectField",name:{kind:"Name",value:"w"},value:{kind:"IntValue",value:"1200"}},{kind:"ObjectField",name:{kind:"Name",value:"auto"},value:{kind:"EnumValue",value:"format"}}]}}],directives:[]},{kind:"Field",alias:{kind:"Name",value:"small"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"imgixParams"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"fit"},value:{kind:"EnumValue",value:"max"}},{kind:"ObjectField",name:{kind:"Name",value:"w"},value:{kind:"IntValue",value:"600"}},{kind:"ObjectField",name:{kind:"Name",value:"auto"},value:{kind:"EnumValue",value:"format"}}]}}],directives:[]},{kind:"Field",alias:{kind:"Name",value:"card"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"imgixParams"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"fit"},value:{kind:"EnumValue",value:"crop"}},{kind:"ObjectField",name:{kind:"Name",value:"w"},value:{kind:"IntValue",value:"1200"}},{kind:"ObjectField",name:{kind:"Name",value:"h"},value:{kind:"IntValue",value:"630"}},{kind:"ObjectField",name:{kind:"Name",value:"fm"},value:{kind:"EnumValue",value:"jpg"}},{kind:"ObjectField",name:{kind:"Name",value:"q"},value:{kind:"IntValue",value:"80"}}]}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"responsiveImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bgColor"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"video"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"mp4High"},name:{kind:"Name",value:"mp4Url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"res"},value:{kind:"EnumValue",value:"high"}}],directives:[]},{kind:"Field",alias:{kind:"Name",value:"mp4Medium"},name:{kind:"Name",value:"mp4Url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"res"},value:{kind:"EnumValue",value:"medium"}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"streamingUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"EnumValue",value:"jpg"}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]}]}}]}}]},X2=`#import "../fragments/asset.graphql"

query Works {
	all: allWorks(first: 100, orderBy: position_ASC) {
		id
		slug
		title
		desc
		about
		summary
		url
		year

		labsMedia {
			...AssetFragment
		}
		mainOnly

		media: featuredMedia {
			...AssetFragment
		}
		thumbnail {
			...AssetFragment
		}

		services {
			id
			slug
			title
		}
		industries {
			id
			slug
			title
		}

		blocks {
			... on MediaFullBlockRecord {
				id
				type: _modelApiKey
				media {
					...AssetFragment
				}
			}
			... on MediaColsBlockRecord {
				id
				type: _modelApiKey
				media {
					...AssetFragment
				}
			}
			... on MediaGridBlockRecord {
				id
				type: _modelApiKey
				media {
					...AssetFragment
				}
			}
			... on MediaCustomBlockRecord {
				id
				type: _modelApiKey
				items {
					id
					media {
						...AssetFragment
					}
					backgroundMedia {
						...AssetFragment
					}
				}
			}
		}
	}
}
`,Ta={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Works"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"all"},name:{kind:"Name",value:"allWorks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"100"}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"EnumValue",value:"position_ASC"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"desc"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"about"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"year"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"labsMedia"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"mainOnly"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"media"},name:{kind:"Name",value:"featuredMedia"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"services"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"industries"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"blocks"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MediaFullBlockRecord"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"type"},name:{kind:"Name",value:"_modelApiKey"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFragment"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MediaColsBlockRecord"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"type"},name:{kind:"Name",value:"_modelApiKey"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFragment"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MediaGridBlockRecord"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"type"},name:{kind:"Name",value:"_modelApiKey"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFragment"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MediaCustomBlockRecord"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"type"},name:{kind:"Name",value:"_modelApiKey"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"backgroundMedia"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFragment"},directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:958,source:{name:"GraphQL request",locationOffset:{line:1,column:1},body:X2}}},Q2=t=>{const e={};return t.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;const s=i.name.value;return e[s]?!1:(e[s]=!0,!0)})};Ta.definitions=Q2(Ta.definitions.concat(Y2.definitions));const J2=(t,e)=>{const i=(c,h)=>{if(c.kind==="FragmentSpread")h.add(c.name.value);else if(c.kind==="VariableDefinition"){const f=c.type;f.kind==="NamedType"&&h.add(f.name.value)}return c&&"selectionSet"in c&&c.selectionSet&&c.selectionSet.selections.forEach(f=>{i(f,h)}),c&&"variableDefinitions"in c&&c.variableDefinitions&&c.variableDefinitions.forEach(f=>{i(f,h)}),c&&"definitions"in c&&c.definitions&&c.definitions.forEach(f=>{i(f,h)}),h},s=c=>{const h={};return c.definitions.forEach(function(f){"name"in f&&f.name&&(h[f.name.value]=i(f,new Set))}),h},n=(c,h)=>{for(let f=0;f<c.definitions.length;f++){const d=c.definitions[f];if(d&&"name"in d&&d.name&&d.name.value==h)return d}},r=s(t),o=Object.assign({},t,{definitions:[n(t,e)]}),a=r[e]||new Set,l=new Set;let u=new Set;for(a.forEach(c=>{u.add(c)});u.size>0;){const c=u;u=new Set,c.forEach(h=>{l.has(h)||(l.add(h),(r[h]||new Set).forEach(d=>{u.add(d)}))})}return l.forEach(c=>{const h=n(t,c);h&&o.definitions.push(h)}),o};J2(Ta,"Works");const Z2=`query Site {
	_site {
		noIndex
		faviconMetaTags {
			attributes
			content
			tag
		}
		favicon {
			touch: url(imgixParams: { w: 180, h: 180, fit: crop, fm: png })
		}
		globalSeo {
			siteName
			titleSuffix
			twitterAccount
			facebookPageUrl
			fallbackSeo {
				title
				description
				twitterCard
				image {
					url
					alt
					card: url(imgixParams: { fit: crop, w: 1200, h: 630, fm: jpg, q: 80 })
				}
			}
		}
	}
	labsSeoPreference {
		labsSeo {
			title
			description
			twitterCard
			noIndex
			image {
				url
				alt
				card: url(imgixParams: { fit: crop, w: 1200, h: 630, fm: jpg, q: 80 })
			}
		}
	}
}
`,ek={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Site"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_site"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"noIndex"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"faviconMetaTags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tag"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"favicon"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"touch"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"imgixParams"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"w"},value:{kind:"IntValue",value:"180"}},{kind:"ObjectField",name:{kind:"Name",value:"h"},value:{kind:"IntValue",value:"180"}},{kind:"ObjectField",name:{kind:"Name",value:"fit"},value:{kind:"EnumValue",value:"crop"}},{kind:"ObjectField",name:{kind:"Name",value:"fm"},value:{kind:"EnumValue",value:"png"}}]}}],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"globalSeo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"siteName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"titleSuffix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twitterAccount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"facebookPageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fallbackSeo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twitterCard"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"card"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"imgixParams"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"fit"},value:{kind:"EnumValue",value:"crop"}},{kind:"ObjectField",name:{kind:"Name",value:"w"},value:{kind:"IntValue",value:"1200"}},{kind:"ObjectField",name:{kind:"Name",value:"h"},value:{kind:"IntValue",value:"630"}},{kind:"ObjectField",name:{kind:"Name",value:"fm"},value:{kind:"EnumValue",value:"jpg"}},{kind:"ObjectField",name:{kind:"Name",value:"q"},value:{kind:"IntValue",value:"80"}}]}}],directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"labsSeoPreference"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"labsSeo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twitterCard"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"noIndex"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"card"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"imgixParams"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"fit"},value:{kind:"EnumValue",value:"crop"}},{kind:"ObjectField",name:{kind:"Name",value:"w"},value:{kind:"IntValue",value:"1200"}},{kind:"ObjectField",name:{kind:"Name",value:"h"},value:{kind:"IntValue",value:"630"}},{kind:"ObjectField",name:{kind:"Name",value:"fm"},value:{kind:"EnumValue",value:"jpg"}},{kind:"ObjectField",name:{kind:"Name",value:"q"},value:{kind:"IntValue",value:"80"}}]}}],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:669,source:{name:"GraphQL request",locationOffset:{line:1,column:1},body:Z2}}},tk=`query News {
	labsTicker {
		lines {
			... on LabsTickerLineRecord {
				text
			}
		}
	}
}
`,ik={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"News"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"labsTicker"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lines"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"LabsTickerLineRecord"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:131,source:{name:"GraphQL request",locationOffset:{line:1,column:1},body:tk}}},sk=`query Copy {
	labsAbout {
		title
		body {
			value
		}
	}
	labsContact {
		title
		body {
			value
		}
	}
	global {
		foot {
			links {
				label
				external
			}
		}
	}
}
`,nk={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Copy"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"labsAbout"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"labsContact"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"global"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"foot"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"links"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"external"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:212,source:{name:"GraphQL request",locationOffset:{line:1,column:1},body:sk}}},rk={"/T6zJpB39oxgu2PJd0100GHWNPYVUjnd9xc/thumbnail.jpg":3,"/WcgTyNDYAsNkg3ZDQb4tbwPmilLY01ZPX/thumbnail.jpg":2,"/SGHIhJrR02eV3NAmaDLiJvh24nY32CWUI/thumbnail.jpg":4,"/zMo5HD4iwsdbzZCRZiQyYHTuYAPztsAM/thumbnail.jpg":1,"/TG02SJHKaDPzySsUZl01300LlCfXeycG8p7/thumbnail.jpg":1,"/4hFWoWK72HsnxXNl3yp57GDq5r8EPkaC/thumbnail.jpg":2,"/Cz6c7icggR8y01QbanyoWqUKgNFCjrbD1/thumbnail.jpg":3,"/lhvlqLwPrx2mKNuAfv2brBaOGLeUGz2a/thumbnail.jpg":1,"/qObHsIrM02TnwykTknAIvmrjledR2lFfE/thumbnail.jpg":1,"/h6up7sK6H01eA1RwUCcEEDTpqhUd02g39I/thumbnail.jpg":2,"/ZP8ODxvBQYrotuHrQzCcfzRzGHtYEgD01/thumbnail.jpg":4,"/PCDhcQopti3W71ioPi00vQekHL90123APv/thumbnail.jpg":3,"/9YFbtP97xBjffiO01kogHYdATynrkZYYu/thumbnail.jpg":2,"/CZ6RbQskvd900ZCOpHmCw7CC67DSRL00Hd/thumbnail.jpg":2,"/xl3Ww5OqHLdSFar0201oy3L9Qy600Cck12E/thumbnail.jpg":2,"/9ghx5iIAfKmtyafu7RQ138f02f1T6eAid/thumbnail.jpg":1,"/LUDe4lHhZsJ02FgjKn5LVSKGhMmtzerXr/thumbnail.jpg":1,"/NEYkCjjC01UicnxUV33i9a59pi01L3DOIK/thumbnail.jpg":2,"/wXHXpbXwwBB7fyoPpKYVs00J0002p8fdWo7/thumbnail.jpg":1,"/81PJuI01Vope6TPbMNoPqWzLnEtvF5ygu/thumbnail.jpg":2,"/VBEewJQSo8XPnQ8K1wdKS00bDcI2ui4Z2/thumbnail.jpg":2,"/uUJ4rCtm8a1nBLbyvXODjPzlutxg2fBh/thumbnail.jpg":1,"/udgvMiE7to3nS2DueJA41LU02MlpUubtn/thumbnail.jpg":2,"/00XKIB02QJUv5EoGxHqOj321fkxjH00wip2/thumbnail.jpg":1,"/uyMSWcWnD5EAHm74BIWcMKghSEG900VXz/thumbnail.jpg":1,"/B6vbCtzAE4dMrFlOR00HrX6CBc3hNcxOD/thumbnail.jpg":2,"/e7Gk4GKhVosSR02SpPeb6M4FHdW1ojO02V/thumbnail.jpg":3,"/GrMfEW6sVIUvFt51kJ6KGtoSAiODNXDa/thumbnail.jpg":1,"/NQWFRkWuUpQn02bTHAYaHOlN6c83X8ZKQ/thumbnail.jpg":1,"/2gIaCN028IFzK5kC9uA6N02GecAc00AdVBb/thumbnail.jpg":1,"/9DBugUxZjcOs2yrYfJ6KFNYdX92Oc1lZ/thumbnail.jpg":3,"/qWQrPqQj402NfZfclsZN021uhgOy9zu6hq/thumbnail.jpg":1,"/UJURJv9b00q6YjtMYmChdKwcuffxUYWXm/thumbnail.jpg":1,"/SfAlutCgineciaIDAIFwo89O01bsYZpiY/thumbnail.jpg":2,"/pujGGSASRtriUurXiyQxBFihv3KbSU6F/thumbnail.jpg":1,"/mowuAiPupsnRAUJgsLPp4101J5DbSHRep/thumbnail.jpg":1,"/6DGXmawAE0200fka02nhgV8eB4OdGx8YtZ02/thumbnail.jpg":4,"/qT02bX9tniQYnwBZGBlec8ghb0201qHQaav/thumbnail.jpg":1},ok=_t(()=>{const t=il(),e=({query:v,variables:x,preview:k}={})=>j2(v,{token:t.public.datoToken,includeDrafts:k??!1,excludeInvalid:!0,variables:x}).catch(R=>{throw R}),i=v=>rk[new URL(v.thumbnailUrl).pathname]||0,s=v=>{const x=new URL(v.thumbnailUrl);return x.searchParams.set("time",String(i(v))),x.searchParams.set("width",String(Math.min(1200,v.width||1200))),x.toString()},n=(v,x)=>{const k=i(x);return v&&k?`${v}#t=${k}`:v},r=v=>n(v.mp4Medium||v.mp4High||null,v),o=v=>v?{src:v.video?s(v.video):v.tile,card:v.video?`${v.video.thumbnailUrl}?width=1200&height=630&fit_mode=crop`:v.card,width:v.video?.width||v.width||4,height:v.video?.height||v.height||5,alt:v.alt||"",video:v.video?r(v.video):null,hls:v.video?.streamingUrl?n(v.video.streamingUrl,v.video):null}:null,a=v=>!!(v?.tile||v?.video?.thumbnailUrl),l={"&mdash;":"—","&ndash;":"–","&nbsp;":" ","&amp;":"&","&rsquo;":"’","&lsquo;":"‘","&ldquo;":"“","&rdquo;":"”","&hellip;":"…","&quot;":'"',"&#39;":"’"},u=v=>(v||"").replace(/<[^>]+>/g," ").replace(/&[a-z#0-9]+;/gi,x=>l[x]??" ").replace(/\s+/g," ").trim(),c=v=>{const x=(v||"").match(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/i);return x&&u(x[1])||null},h=420,f=v=>{const x=(v||"").replace(/<blockquote[^>]*>[\s\S]*?<\/blockquote>/i,""),k=x.match(/<p[^>]*>([\s\S]*?)<\/p>/i),R=u(k?k[1]:x);if(R.length<=h)return R||null;const S=R.slice(0,h),P=Math.max(S.lastIndexOf(". "),S.lastIndexOf("? "),S.lastIndexOf("! "));return P>120?S.slice(0,P+1):S.trimEnd()+"…"},d=v=>{const x=a(v.media)?v.media:v.thumbnail;if(!a(x))return null;const k=(v.labsMedia||[]).filter(a).slice(0,6).map(o);return{...p(v,x),gallery:k.length?k:g(v,x)}},g=(v,x)=>{const k=[o(x)];let R=x.video?1:0;const S=[];for(const P of v.blocks||[]){const A=P.items?P.items.flatMap(M=>[M.media,M.backgroundMedia]):Array.isArray(P.media)?P.media:[P.media];for(const M of A){if(k.length>=6)break;if(a(M)){if(M.video&&R>=2){S.push(M);continue}M.video&&R++,k.push(o(M))}}if(k.length>=6)break}for(;k.length<6&&S.length;)k.push(o(S.shift()));return k},p=(v,x)=>({id:v.id,slug:v.slug,title:v.title,summary:v.summary||f(v.about),quote:c(v.about),services:(v.services||[]).map(k=>({id:k.id,slug:k.slug,title:k.title})),industry:v.industries?.[0]?{slug:v.industries[0].slug,title:v.industries[0].title}:null,...o(x)});return{provide:{dato:{request:e,works:async({preview:v}={})=>{const{all:x}=await e({query:Ta,preview:v});return(x||[]).filter(k=>!k.mainOnly).map(d).filter(Boolean)},site:async({preview:v}={})=>{const{_site:x,labsSeoPreference:k}=await e({query:ek,preview:v}),R=k?.labsSeo||{};return{favicon:(x?.faviconMetaTags||[]).filter(S=>S.tag==="link").map(S=>S.attributes),touchIcon:x?.favicon?.touch||"",seo:x?.globalSeo||{},labs:R,noIndex:!!x?.noIndex||!!R.noIndex}},services:async({preview:v}={})=>{const{cats:x,all:k}=await e({query:K2,preview:v});return(x||[]).map(R=>({id:R.id,slug:R.slug,title:R.title,items:(k||[]).filter(S=>(S.categories||[]).some(P=>P.id===R.id)).map(S=>({id:S.id,slug:S.slug,title:S.title}))})).filter(R=>R.items.length)},news:async({preview:v}={})=>{try{const{labsTicker:x}=await e({query:ik,preview:v});return(x?.lines||[]).map(k=>k?.text||"").filter(Boolean)}catch{return[]}},copy:async({preview:v}={})=>{try{const{labsAbout:x,labsContact:k,global:R}=await e({query:nk,preview:v});return{about:x,contact:k,links:R?.foot?.links||[]}}catch{return null}}}}}});function ak(t){return{all:t=t||new Map,on:function(e,i){var s=t.get(e);s?s.push(i):t.set(e,[i])},off:function(e,i){var s=t.get(e);s&&(i?s.splice(s.indexOf(i)>>>0,1):t.set(e,[]))},emit:function(e,i){var s=t.get(e);s&&s.slice().map(function(n){n(i)}),(s=t.get("*"))&&s.slice().map(function(n){n(e,i)})}}}const lk=_t(()=>({provide:{event:ak()}})),ck=1e3,Hm=3e4,al=t=>Math.min(Hm,ck*2**t);function Uu(t){return new Promise(e=>{const i=()=>{clearTimeout(s),window.removeEventListener("online",i),e()},s=setTimeout(i,navigator.onLine===!1?Hm:t);window.addEventListener("online",i)})}async function wo(t,e=()=>!0){for(let i=0;;i++){try{const s=await t();if(s!=null)return s}catch{}if(!e(i+1)||(await Uu(al(i)),!e(i+1)))return null}}const uk=t=>String(t||"").trim().replace(/^["']|["']$/g,""),hk={normal:"400",bold:"700"},fk=t=>{const e=String(t||"normal").trim();return hk[e]??e},dk=t=>(String(t||"").trim()||"U+0-10FFFF").toUpperCase().split(",").map(e=>e.trim().replace("U+","").split("-").map(i=>parseInt(i,16).toString(16)).join("-")).join(","),Gm=(t,e,i,s)=>[uk(t),fk(e),String(i||"normal").trim(),dk(s)].join("|"),pk=(t,e)=>t.replace(/url\((["']?)([^"')]+)\1\)/g,(i,s,n)=>`url("${new URL(n,e).href}")`),gk=()=>{const t=new Map;for(const e of document.styleSheets){let i=null;try{i=e.cssRules}catch{continue}for(const s of i||[]){if(!(s instanceof CSSFontFaceRule))continue;const n=s.style,r=Gm(n.getPropertyValue("font-family"),n.getPropertyValue("font-weight"),n.getPropertyValue("font-style"),n.getPropertyValue("unicode-range"));t.set(r,{src:pk(n.getPropertyValue("src"),e.href||location.href),display:n.getPropertyValue("font-display")||"swap"})}}return t},mk=_t(()=>{const t=document.fonts;if(!t||typeof FontFace>"u")return;const e=new WeakSet,i=new WeakSet,s=async n=>{if(e.has(n)||i.has(n))return;e.add(n);const r=Gm(n.family,n.weight,n.style,n.unicodeRange);for(let o=0;;o++){await Uu(al(o));const a=gk().get(r);if(!a)return;const l=new FontFace(n.family,a.src,{weight:n.weight,style:n.style,unicodeRange:n.unicodeRange,display:a.display});i.add(l),t.add(l);try{await l.load();return}catch{t.delete(l)}}};t.addEventListener("loadingerror",n=>n.fontfaces?.forEach(s)),t.forEach(n=>n.status==="error"&&s(n))});function is(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $m(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ro={duration:.5,overwrite:!1,delay:0},Vu,Et,Xe,vi=1e8,He=1/vi,jc=Math.PI*2,vk=jc/4,yk=0,jm=Math.sqrt,wk=Math.cos,bk=Math.sin,bt=function(e){return typeof e=="string"},rt=function(e){return typeof e=="function"},ms=function(e){return typeof e=="number"},Hu=function(e){return typeof e>"u"},qi=function(e){return typeof e=="object"},qt=function(e){return e!==!1},Gu=function(){return typeof window<"u"},Fo=function(e){return rt(e)||bt(e)},qm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ot=Array.isArray,_k=/random\([^)]+\)/g,xk=/,\s*/g,zf=/(?:-?\.?\d|\.)+/gi,Wm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Nn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ul=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Km=/[+-]=-?[.\d]+/,kk=/[^,'"\[\]\s]+/gi,Tk=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,Li,qc,$u,ci={},Sa={},Ym,Xm=function(e){return(Sa=ir(e,ci))&&Xt},ju=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},oo=function(e,i){return!i&&console.warn(e)},Qm=function(e,i){return e&&(ci[e]=i)&&Sa&&(Sa[e]=i)||ci},ao=function(){return 0},Sk={suppressEvents:!0,isStart:!0,kill:!1},Yo={suppressEvents:!0,kill:!1},Ek={suppressEvents:!0},qu={},Os=[],Wc={},Jm,Zt={},Vl={},Bf=30,Xo=[],Wu="",Ku=function(e){var i=e[0],s,n;if(qi(i)||rt(i)||(e=[e]),!(s=(i._gsap||{}).harness)){for(n=Xo.length;n--&&!Xo[n].targetTest(i););s=Xo[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new b0(e[n],s)))||e.splice(n,1);return e},pn=function(e){return e._gsap||Ku(yi(e))[0]._gsap},Zm=function(e,i,s){return(s=e[i])&&rt(s)?e[i]():Hu(s)&&e.getAttribute&&e.getAttribute(i)||s},Wt=function(e,i){return(e=e.split(",")).forEach(i)||e},ut=function(e){return Math.round(e*1e5)/1e5||0},Qe=function(e){return Math.round(e*1e7)/1e7||0},jn=function(e,i){var s=i.charAt(0),n=parseFloat(i.substr(2));return e=parseFloat(e),s==="+"?e+n:s==="-"?e-n:s==="*"?e*n:e/n},Rk=function(e,i){for(var s=i.length,n=0;e.indexOf(i[n])<0&&++n<s;);return n<s},Ea=function(){var e=Os.length,i=Os.slice(0),s,n;for(Wc={},Os.length=0,s=0;s<e;s++)n=i[s],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Yu=function(e){return!!(e._initted||e._startAt||e.add)},e0=function(e,i,s,n){Os.length&&!Et&&Ea(),e.render(i,s,!!(Et&&i<0&&Yu(e))),Os.length&&!Et&&Ea()},t0=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(kk).length<2?i:bt(e)?e.trim():e},i0=function(e){return e},ui=function(e,i){for(var s in i)s in e||(e[s]=i[s]);return e},Pk=function(e){return function(i,s){for(var n in s)n in i||n==="duration"&&e||n==="ease"||(i[n]=s[n])}},ir=function(e,i){for(var s in i)e[s]=i[s];return e},Uf=function t(e,i){for(var s in i)s!=="__proto__"&&s!=="constructor"&&s!=="prototype"&&(e[s]=qi(i[s])?t(e[s]||(e[s]={}),i[s]):i[s]);return e},Ra=function(e,i){var s={},n;for(n in e)n in i||(s[n]=e[n]);return s},Gr=function(e){var i=e.parent||Je,s=e.keyframes?Pk(Ot(e.keyframes)):ui;if(qt(e.inherit))for(;i;)s(e,i.vars.defaults),i=i.parent||i._dp;return e},Ck=function(e,i){for(var s=e.length,n=s===i.length;n&&s--&&e[s]===i[s];);return s<0},s0=function(e,i,s,n,r){var o=e[n],a;if(r)for(a=i[r];o&&o[r]>a;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=e[s],e[s]=i),i._next?i._next._prev=i:e[n]=i,i._prev=o,i.parent=i._dp=e,i},ll=function(e,i,s,n){s===void 0&&(s="_first"),n===void 0&&(n="_last");var r=i._prev,o=i._next;r?r._next=o:e[s]===i&&(e[s]=o),o?o._prev=r:e[n]===i&&(e[n]=r),i._next=i._prev=i.parent=null},zs=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},gn=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var s=e;s;)s._dirty=1,s=s.parent;return e},Mk=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Kc=function(e,i,s,n){return e._startAt&&(Et?e._startAt.revert(Yo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,n))},Ak=function t(e){return!e||e._ts&&t(e.parent)},Vf=function(e){return e._repeat?sr(e._tTime,e=e.duration()+e._rDelay)*e:0},sr=function(e,i){var s=Math.floor(e=Qe(e/i));return e&&s===e?s-1:s},Pa=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},cl=function(e){return e._end=Qe(e._start+(e._tDur/Math.abs(e._ts||e._rts||He)||0))},ul=function(e,i){var s=e._dp;return s&&s.smoothChildTiming&&e._ts&&(e._start=Qe(s._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),cl(e),s._dirty||gn(s,e)),e},n0=function(e,i){var s;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(s=Pa(e.rawTime(),i),(!i._dur||bo(0,i.totalDuration(),s)-i._tTime>He)&&i.render(s,!0)),gn(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(s=e;s._dp;)s.rawTime()>=0&&s.totalTime(s._tTime),s=s._dp;e._zTime=-He}},zi=function(e,i,s,n){return i.parent&&zs(i),i._start=Qe((ms(s)?s:s||e!==Je?di(e,s,i):e._time)+i._delay),i._end=Qe(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),s0(e,i,"_first","_last",e._sort?"_start":0),Yc(i)||(e._recent=i),n||n0(e,i),e._ts<0&&ul(e,e._tTime),e},r0=function(e,i){return(ci.ScrollTrigger||ju("scrollTrigger",i))&&ci.ScrollTrigger.create(i,e)},o0=function(e,i,s,n,r){if(Qu(e,i,r),!e._initted)return 1;if(!s&&e._pt&&!Et&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jm!==ii.frame)return Os.push(e),e._lazy=[r,n],1},Ok=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||t(i))},Yc=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},Fk=function(e,i,s,n){var r=e.ratio,o=i<0||!i&&(!e._start&&Ok(e)&&!(!e._initted&&Yc(e))||(e._ts<0||e._dp._ts<0)&&!Yc(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=bo(0,e._tDur,i),c=sr(l,a),e._yoyo&&c&1&&(o=1-o),c!==sr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Et||n||e._zTime===He||!i&&e._zTime){if(!e._initted&&o0(e,i,n,s,l))return;for(h=e._zTime,e._zTime=i||(s?He:0),s||(s=i&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;i<0&&Kc(e,i,s,!0),e._onUpdate&&!s&&ni(e,"onUpdate"),l&&e._repeat&&!s&&e.parent&&ni(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===o&&(o&&zs(e,1),!s&&!Et&&(ni(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},Nk=function(e,i,s){var n;if(s>i)for(n=e._first;n&&n._start<=s;){if(n.data==="isPause"&&n._start>i)return n;n=n._next}else for(n=e._last;n&&n._start>=s;){if(n.data==="isPause"&&n._start<i)return n;n=n._prev}},nr=function(e,i,s,n){var r=e._repeat,o=Qe(i)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Qe(o*(r+1)+e._rDelay*r):o,a>0&&!n&&ul(e,e._tTime=e._tDur*a),e.parent&&cl(e),s||gn(e.parent,e),e},Hf=function(e){return e instanceof $t?gn(e):nr(e,e._dur)},Dk={_start:0,endTime:ao,totalDuration:ao},di=function t(e,i,s){var n=e.labels,r=e._recent||Dk,o=e.duration()>=vi?r.endTime(!1):e._dur,a,l,u;return bt(i)&&(isNaN(i)||i in n)?(l=i.charAt(0),u=i.substr(-1)==="%",a=i.indexOf("="),l==="<"||l===">"?(a>=0&&(i=i.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(i.substr(1))||0)*(u?(a<0?r:s).totalDuration()/100:1)):a<0?(i in n||(n[i]=o),n[i]):(l=parseFloat(i.charAt(a-1)+i.substr(a+1)),u&&s&&(l=l/100*(Ot(s)?s[0]:s).totalDuration()),a>1?t(e,i.substr(0,a-1),s)+l:o+l)):i==null?o:+i},$r=function(e,i,s){var n=ms(i[1]),r=(n?2:1)+(e<2?0:1),o=i[r],a,l;if(n&&(o.duration=i[1]),o.parent=s,e){for(a=o,l=s;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qt(l.vars.inherit)&&l.parent;o.immediateRender=qt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=i[r-1]}return new dt(i[0],o,i[r+1])},Hs=function(e,i){return e||e===0?i(e):i},bo=function(e,i,s){return s<e?e:s>i?i:s},Ct=function(e,i){return!bt(e)||!(i=Tk.exec(e))?"":i[1]},Lk=function(e,i,s){return Hs(s,function(n){return bo(e,i,n)})},Xc=[].slice,a0=function(e,i){return e&&qi(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&qi(e[0]))&&!e.nodeType&&e!==Li},Ik=function(e,i,s){return s===void 0&&(s=[]),e.forEach(function(n){var r;return bt(n)&&!i||a0(n,1)?(r=s).push.apply(r,yi(n)):s.push(n)})||s},yi=function(e,i,s){return Xe&&!i&&Xe.selector?Xe.selector(e):bt(e)&&!s&&(qc||!rr())?Xc.call((i||$u).querySelectorAll(e),0):Ot(e)?Ik(e,s):a0(e)?Xc.call(e,0):e?[e]:[]},Qc=function(e){return e=yi(e)[0]||oo("Invalid scope")||{},function(i){var s=e.current||e.nativeElement||e;return yi(i,s.querySelectorAll?s:s===e?oo("Invalid scope")||$u.createElement("div"):e)}},l0=function(e){return e.sort(function(){return .5-Math.random()})},c0=function(e){if(rt(e))return e;var i=qi(e)?e:{each:e},s=mn(i.ease),n=i.from||0,r=parseFloat(i.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,u=i.axis,c=n,h=n;return bt(n)?c=h={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(c=n[0],h=n[1]),function(f,d,g){var p=(g||i).length,_=o[p],w,y,m,b,v,x,k,R,S;if(!_){if(S=i.grid==="auto"?0:(i.grid||[1,vi])[1],!S){for(k=-vi;k<(k=g[S++].getBoundingClientRect().left)&&S<p;);S<p&&S--}for(_=o[p]=[],w=l?Math.min(S,p)*c-.5:n%S,y=S===vi?0:l?p*h/S-.5:n/S|0,k=0,R=vi,x=0;x<p;x++)m=x%S-w,b=y-(x/S|0),_[x]=v=u?Math.abs(u==="y"?b:m):jm(m*m+b*b),v>k&&(k=v),v<R&&(R=v);n==="random"&&l0(_),_.max=k-R,_.min=R,_.v=p=(parseFloat(i.amount)||parseFloat(i.each)*(S>p?p-1:u?u==="y"?p/S:S:Math.max(S,p/S))||0)*(n==="edges"?-1:1),_.b=p<0?r-p:r,_.u=Ct(i.amount||i.each)||0,s=s&&p<0?Xk(s):s}return p=(_[f]-_.min)/_.max||0,Qe(_.b+(s?s(p):p)*_.v)+_.u}},Jc=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(s){var n=Qe(Math.round(parseFloat(s)/e)*e*i);return(n-n%1)/i+(ms(s)?0:Ct(s))}},u0=function(e,i){var s=Ot(e),n,r;return!s&&qi(e)&&(n=s=e.radius||vi,e.values?(e=yi(e.values),(r=!ms(e[0]))&&(n*=n)):e=Jc(e.increment)),Hs(i,s?rt(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),u=vi,c=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!n||u<=n?e[c]:o,r||c===o||ms(o)?c:c+Ct(o)}:Jc(e))},h0=function(e,i,s,n){return Hs(Ot(e)?!i:s===!0?!!(s=0):!n,function(){return Ot(e)?e[~~(Math.random()*e.length)]:(s=s||1e-5)&&(n=s<1?Math.pow(10,(s+"").length-2):1)&&Math.floor(Math.round((e-s/2+Math.random()*(i-e+s*.99))/s)*s*n)/n})},zk=function(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return function(n){return i.reduce(function(r,o){return o(r)},n)}},Bk=function(e,i){return function(s){return e(parseFloat(s))+(i||Ct(s))}},Uk=function(e,i,s){return d0(e,i,0,1,s)},f0=function(e,i,s){return Hs(s,function(n){return e[~~i(n)]})},Vk=function t(e,i,s){var n=i-e;return Ot(e)?f0(e,t(0,e.length),i):Hs(s,function(r){return(n+(r-e)%n)%n+e})},Hk=function t(e,i,s){var n=i-e,r=n*2;return Ot(e)?f0(e,t(0,e.length-1),i):Hs(s,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},lo=function(e){return e.replace(_k,function(i){var s=i.indexOf("[")+1,n=i.substring(s||7,s?i.indexOf("]"):i.length-1).split(xk);return h0(s?n:+n[0],s?0:+n[1],+n[2]||1e-5)})},d0=function(e,i,s,n,r){var o=i-e,a=n-s;return Hs(r,function(l){return s+((l-e)/o*a||0)})},Gk=function t(e,i,s,n){var r=isNaN(e+i)?0:function(d){return(1-d)*e+d*i};if(!r){var o=bt(e),a={},l,u,c,h,f;if(s===!0&&(n=1)&&(s=null),o)e={p:e},i={p:i};else if(Ot(e)&&!Ot(i)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(t(e[u-1],e[u]));h--,r=function(g){g*=h;var p=Math.min(f,~~g);return c[p](g-p)},s=i}else n||(e=ir(Ot(e)?[]:{},e));if(!c){for(l in i)Xu.call(a,e,l,"get",i[l]);r=function(g){return eh(g,a)||(o?e.p:e)}}}return Hs(s,r)},Gf=function(e,i,s){var n=e.labels,r=vi,o,a,l;for(o in n)a=n[o]-i,a<0==!!s&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ni=function(e,i,s){var n=e.vars,r=n[i],o=Xe,a=e._ctx,l,u,c;if(r)return l=n[i+"Params"],u=n.callbackScope||e,s&&Os.length&&Ea(),a&&(Xe=a),c=l?r.apply(u,l):r.call(u),Xe=o,c},Fr=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Et),e.progress()<1&&ni(e,"onInterrupt"),e},Dn,p0=[],g0=function(e){if(e)if(e=!e.name&&e.default||e,Gu()||e.headless){var i=e.name,s=rt(e),n=i&&!s&&e.init?function(){this._props=[]}:e,r={init:ao,render:eh,add:Xu,kill:oT,modifier:rT,rawVars:0},o={targetTest:0,get:0,getSetter:Zu,aliases:{},register:0};if(rr(),e!==n){if(Zt[i])return;ui(n,ui(Ra(e,r),o)),ir(n.prototype,ir(r,Ra(e,o))),Zt[n.prop=i]=n,e.targetTest&&(Xo.push(n),qu[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}Qm(i,n),e.register&&e.register(Xt,n,Kt)}else p0.push(e)},Ve=255,Nr={aqua:[0,Ve,Ve],lime:[0,Ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ve],navy:[0,0,128],white:[Ve,Ve,Ve],olive:[128,128,0],yellow:[Ve,Ve,0],orange:[Ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ve,0,0],pink:[Ve,192,203],cyan:[0,Ve,Ve],transparent:[Ve,Ve,Ve,0]},Hl=function(e,i,s){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(s-i)*e*6:e<.5?s:e*3<2?i+(s-i)*(2/3-e)*6:i)*Ve+.5|0},m0=function(e,i,s){var n=e?ms(e)?[e>>16,e>>8&Ve,e&Ve]:0:Nr.black,r,o,a,l,u,c,h,f,d,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Nr[e])n=Nr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Ve,n&Ve,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Ve,e&Ve]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(zf),!i)l=+n[0]%360/360,u=+n[1]/100,c=+n[2]/100,o=c<=.5?c*(u+1):c+u-c*u,r=c*2-o,n.length>3&&(n[3]*=1),n[0]=Hl(l+1/3,r,o),n[1]=Hl(l,r,o),n[2]=Hl(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(Wm),s&&n.length<4&&(n[3]=1),n}else n=e.match(zf)||Nr.transparent;n=n.map(Number)}return i&&!g&&(r=n[0]/Ve,o=n[1]/Ve,a=n[2]/Ve,h=Math.max(r,o,a),f=Math.min(r,o,a),c=(h+f)/2,h===f?l=u=0:(d=h-f,u=c>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(u*100+.5),n[2]=~~(c*100+.5)),s&&n.length<4&&(n[3]=1),n},v0=function(e){var i=[],s=[],n=-1;return e.split(Fs).forEach(function(r){var o=r.match(Nn)||[];i.push.apply(i,o),s.push(n+=o.length+1)}),i.c=s,i},$f=function(e,i,s){var n="",r=(e+n).match(Fs),o=i?"hsla(":"rgba(",a=0,l,u,c,h;if(!r)return e;if(r=r.map(function(f){return(f=m0(f,i,1))&&o+(i?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),s&&(c=v0(e),l=s.c,l.join(n)!==c.c.join(n)))for(u=e.replace(Fs,"1").split(Nn),h=u.length-1;a<h;a++)n+=u[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:s).shift());if(!u)for(u=e.split(Fs),h=u.length-1;a<h;a++)n+=u[a]+r[a];return n+u[h]},Fs=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Nr)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),$k=/hsl[a]?\(/,y0=function(e){var i=e.join(" "),s;if(Fs.lastIndex=0,Fs.test(i))return s=$k.test(i),e[1]=$f(e[1],s),e[0]=$f(e[0],s,v0(e[1])),!0},co,ii=(function(){var t=Date.now,e=500,i=33,s=t(),n=s,r=1e3/240,o=r,a=[],l,u,c,h,f,d,g=function p(_){var w=t()-n,y=_===!0,m,b,v,x;if((w>e||w<0)&&(s+=w-i),n+=w,v=n-s,m=v-o,(m>0||y)&&(x=++h.frame,f=v-h.time*1e3,h.time=v=v/1e3,o+=m+(m>=r?4:r-m),b=1),y||(l=u(p)),b)for(d=0;d<a.length;d++)a[d](v,f,x,_)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Ym&&(!qc&&Gu()&&(Li=qc=window,$u=Li.document||{},ci.gsap=Xt,(Li.gsapVersions||(Li.gsapVersions=[])).push(Xt.version),Xm(Sa||Li.GreenSockGlobals||!Li.gsap&&Li||{}),p0.forEach(g0)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(_){return setTimeout(_,o-h.time*1e3+1|0)},co=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),co=0,u=ao},lagSmoothing:function(_,w){e=_||1/0,i=Math.min(w||33,e)},fps:function(_){r=1e3/(_||240),o=h.time*1e3+r},add:function(_,w,y){var m=w?function(b,v,x,k){_(b,v,x,k),h.remove(m)}:_;return h.remove(_),a[y?"unshift":"push"](m),rr(),m},remove:function(_,w){~(w=a.indexOf(_))&&a.splice(w,1)&&d>=w&&d--},_listeners:a},h})(),rr=function(){return!co&&ii.wake()},Me={},jk=/^[\d.\-M][\d.\-,\s]/,qk=/["']/g,Wk=function(e){for(var i={},s=e.substr(1,e.length-3).split(":"),n=s[0],r=1,o=s.length,a,l,u;r<o;r++)l=s[r],a=r!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),i[n]=isNaN(u)?u.replace(qk,"").trim():+u,n=l.substr(a+1).trim();return i},Kk=function(e){var i=e.indexOf("(")+1,s=e.indexOf(")"),n=e.indexOf("(",i);return e.substring(i,~n&&n<s?e.indexOf(")",s+1):s)},Yk=function(e){var i=(e+"").split("("),s=Me[i[0]];return s&&i.length>1&&s.config?s.config.apply(null,~e.indexOf("{")?[Wk(i[1])]:Kk(e).split(",").map(t0)):Me._CE&&jk.test(e)?Me._CE("",e):s},Xk=function(e){return function(i){return 1-e(1-i)}},mn=function(e,i){return e&&(rt(e)?e:Me[e]||Yk(e))||i},wn=function(e,i,s,n){s===void 0&&(s=function(l){return 1-i(1-l)}),n===void 0&&(n=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var r={easeIn:i,easeOut:s,easeInOut:n},o;return Wt(e,function(a){Me[a]=ci[a]=r,Me[o=a.toLowerCase()]=s;for(var l in r)Me[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Me[a+"."+l]=r[l]}),r},w0=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},Gl=function t(e,i,s){var n=i>=1?i:1,r=(s||(e?.3:.45))/(i<1?i:1),o=r/jc*(Math.asin(1/n)||0),a=function(c){return c===1?1:n*Math.pow(2,-10*c)*bk((c-o)*r)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:w0(a);return r=jc/r,l.config=function(u,c){return t(e,u,c)},l},$l=function t(e,i){i===void 0&&(i=1.70158);var s=function(o){return o?--o*o*((i+1)*o+i)+1:0},n=e==="out"?s:e==="in"?function(r){return 1-s(1-r)}:w0(s);return n.config=function(r){return t(e,r)},n};Wt("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;wn(t+",Power"+(i-1),e?function(s){return Math.pow(s,i)}:function(s){return s},function(s){return 1-Math.pow(1-s,i)},function(s){return s<.5?Math.pow(s*2,i)/2:1-Math.pow((1-s)*2,i)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;wn("Elastic",Gl("in"),Gl("out"),Gl());(function(t,e){var i=1/e,s=2*i,n=2.5*i,r=function(a){return a<i?t*a*a:a<s?t*Math.pow(a-1.5/e,2)+.75:a<n?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};wn("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);wn("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});wn("Circ",function(t){return-(jm(1-t*t)-1)});wn("Sine",function(t){return t===1?1:-wk(t*vk)+1});wn("Back",$l("in"),$l("out"),$l());Me.SteppedEase=Me.steps=ci.SteppedEase={config:function(e,i){e===void 0&&(e=1);var s=1/e,n=e+(i?0:1),r=i?1:0,o=1-He;return function(a){return((n*bo(0,o,a)|0)+r)*s}}};ro.ease=Me["quad.out"];Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Wu+=t+","+t+"Params,"});var b0=function(e,i){this.id=yk++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:Zm,this.set=i?i.getSetter:Zu},uo=(function(){function t(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,nr(this,+i.duration,1,1),this.data=i.data,Xe&&(this._ctx=Xe,Xe.data.push(this)),co||ii.wake()}var e=t.prototype;return e.delay=function(s){return s||s===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+s-this._delay),this._delay=s,this):this._delay},e.duration=function(s){return arguments.length?this.totalDuration(this._repeat>0?s+(s+this._rDelay)*this._repeat:s):this.totalDuration()&&this._dur},e.totalDuration=function(s){return arguments.length?(this._dirty=0,nr(this,this._repeat<0?s:(s-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(s,n){if(rr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ul(this,s),!r._dp||r.parent||n0(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&s<this._tDur||this._ts<0&&s>0||!this._tDur&&!s)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==s||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===He||!this._initted&&this._dur&&s||!s&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=s),e0(this,s,n)),this},e.time=function(s,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),s+Vf(this))%(this._dur+this._rDelay)||(s?this._dur:0),n):this._time},e.totalProgress=function(s,n){return arguments.length?this.totalTime(this.totalDuration()*s,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(s,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-s:s)+Vf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(s,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(s-1)*r,n):this._repeat?sr(this._tTime,r)+1:1},e.timeScale=function(s,n){if(!arguments.length)return this._rts===-He?0:this._rts;if(this._rts===s)return this;var r=this.parent&&this._ts?Pa(this.parent._time,this):this._tTime;return this._rts=+s||0,this._ts=this._ps||s===-He?0:this._rts,this.totalTime(bo(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),cl(this),Mk(this)},e.paused=function(s){return arguments.length?(this._ps!==s&&(this._ps=s,s?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==He&&(this._tTime-=He)))),this):this._ps},e.startTime=function(s){if(arguments.length){this._start=Qe(s);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&zi(n,this,this._start-this._delay),this}return this._start},e.endTime=function(s){return this._start+(qt(s)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(s){var n=this.parent||this._dp;return n?s&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pa(n.rawTime(s),this):this._tTime:this._tTime},e.revert=function(s){s===void 0&&(s=Ek);var n=Et;return Et=s,Yu(this)&&(this.timeline&&this.timeline.revert(s),this.totalTime(-.01,s.suppressEvents)),this.data!=="nested"&&s.kill!==!1&&this.kill(),Et=n,this},e.globalTime=function(s){for(var n=this,r=arguments.length?s:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(s):r},e.repeat=function(s){return arguments.length?(this._repeat=s===1/0?-2:s,Hf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(s){if(arguments.length){var n=this._time;return this._rDelay=s,Hf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(s){return arguments.length?(this._yoyo=s,this):this._yoyo},e.seek=function(s,n){return this.totalTime(di(this,s),qt(n))},e.restart=function(s,n){return this.play().totalTime(s?-this._delay:0,qt(n)),this._dur||(this._zTime=-He),this},e.play=function(s,n){return s!=null&&this.seek(s,n),this.reversed(!1).paused(!1)},e.reverse=function(s,n){return s!=null&&this.seek(s||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(s,n){return s!=null&&this.seek(s,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(s){return arguments.length?(!!s!==this.reversed()&&this.timeScale(-this._rts||(s?-He:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-He,this},e.isActive=function(){var s=this.parent||this._dp,n=this._start,r;return!!(!s||this._ts&&this._initted&&s.isActive()&&(r=s.rawTime(!0))>=n&&r<this.endTime(!0)-He)},e.eventCallback=function(s,n,r){var o=this.vars;return arguments.length>1?(n?(o[s]=n,r&&(o[s+"Params"]=r),s==="onUpdate"&&(this._onUpdate=n)):delete o[s],this):o[s]},e.then=function(s){var n=this,r=n._prom;return new Promise(function(o){var a=rt(s)?s:i0,l=function(){var c=n.then;n.then=null,r&&r(),rt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),o(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){Fr(this)},t})();ui(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-He,_prom:0,_ps:!1,_rts:1});var $t=(function(t){$m(e,t);function e(s,n){var r;return s===void 0&&(s={}),r=t.call(this,s)||this,r.labels={},r.smoothChildTiming=!!s.smoothChildTiming,r.autoRemoveChildren=!!s.autoRemoveChildren,r._sort=qt(s.sortChildren),Je&&zi(s.parent||Je,is(r),n),s.reversed&&r.reverse(),s.paused&&r.paused(!0),s.scrollTrigger&&r0(is(r),s.scrollTrigger),r}var i=e.prototype;return i.to=function(n,r,o){return $r(0,arguments,this),this},i.from=function(n,r,o){return $r(1,arguments,this),this},i.fromTo=function(n,r,o,a){return $r(2,arguments,this),this},i.set=function(n,r,o){return r.duration=0,r.parent=this,Gr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new dt(n,r,di(this,o),1),this},i.call=function(n,r,o){return zi(this,dt.delayedCall(0,n,r),o)},i.staggerTo=function(n,r,o,a,l,u,c){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new dt(n,o,di(this,l)),this},i.staggerFrom=function(n,r,o,a,l,u,c){return o.runBackwards=1,Gr(o).immediateRender=qt(o.immediateRender),this.staggerTo(n,r,o,a,l,u,c)},i.staggerFromTo=function(n,r,o,a,l,u,c,h){return a.startAt=o,Gr(a).immediateRender=qt(a.immediateRender),this.staggerTo(n,r,a,l,u,c,h)},i.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=n<=0?0:Qe(n),h=this._zTime<0!=n<0&&(this._initted||!u),f,d,g,p,_,w,y,m,b,v,x,k;if(this!==Je&&c>l&&n>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,n+=this._time-a),f=c,b=this._start,m=this._ts,w=!m,h&&(u||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(x=this._yoyo,_=u+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,r,o);if(f=Qe(c%_),c===l?(p=this._repeat,f=u):(v=Qe(c/_),p=~~v,p&&p===v&&(f=u,p--),f>u&&(f=u)),v=sr(this._tTime,_),!a&&this._tTime&&v!==p&&this._tTime-v*_-this._dur<=0&&(v=p),x&&p&1&&(f=u-f,k=1),p!==v&&!this._lock){var R=x&&v&1,S=R===(x&&p&1);if(p<v&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(k?0:Qe(p*_)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1,v=p),a&&a!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Nk(this,Qe(a),Qe(f)),y&&(c-=f-(f=y._start))),this._tTime=c,this._time=f,this._act=!!m,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&c&&u&&!r&&!v&&(ni(this,"onStart"),this._tTime!==c))return this;if(f>=a&&n>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=-He);break}}d=g}else{d=this._last;for(var P=n<0?n:f;d;){if(g=d._prev,(d._act||P<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,r,o);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,r,o||Et&&Yu(d)),f!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=P?-He:He);break}}d=g}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-He)._zTime=f>=a?1:-1,this._ts))return this._start=b,cl(this),this.render(n,r,o);this._onUpdate&&!r&&ni(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(b===this._start||Math.abs(m)!==Math.abs(this._ts))&&(this._lock||((n||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&zs(this,1),!r&&!(n<0&&!a)&&(c||a||!l)&&(ni(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(n,r){var o=this;if(ms(r)||(r=di(this,r,n)),!(n instanceof uo)){if(Ot(n))return n.forEach(function(a){return o.add(a,r)}),this;if(bt(n))return this.addLabel(n,r);if(rt(n))n=dt.delayedCall(0,n);else return this}return this!==n?zi(this,n,r):this},i.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof dt?r&&l.push(u):(o&&l.push(u),n&&l.push.apply(l,u.getChildren(!0,r,o)))),u=u._next;return l},i.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},i.remove=function(n){return bt(n)?this.removeLabel(n):rt(n)?this.killTweensOf(n):(n.parent===this&&ll(this,n),n===this._recent&&(this._recent=this._last),gn(this))},i.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Qe(ii.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),t.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},i.addLabel=function(n,r){return this.labels[n]=di(this,r),this},i.removeLabel=function(n){return delete this.labels[n],this},i.addPause=function(n,r,o){var a=dt.delayedCall(0,r||ao,o);return a.data="isPause",this._hasPause=1,zi(this,a,di(this,n))},i.removePause=function(n){var r=this._first;for(n=di(this,n);r;)r._start===n&&r.data==="isPause"&&zs(r),r=r._next},i.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Ss!==a[l]&&a[l].kill(n,r);return this},i.getTweensOf=function(n,r){for(var o=[],a=yi(n),l=this._first,u=ms(r),c;l;)l instanceof dt?Rk(l._targets,a)&&(u?(!Ss||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(a,r)).length&&o.push.apply(o,c),l=l._next;return o},i.tweenTo=function(n,r){r=r||{};var o=this,a=di(o,n),l=r,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=dt.to(o,ui({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||He,onStart:function(){if(o.pause(),!d){var _=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==_&&nr(g,_,0,1).render(g._time,!0,!0),d=1}c&&c.apply(g,h||[])}},r));return f?g.render(0):g},i.tweenFromTo=function(n,r,o){return this.tweenTo(r,ui({startAt:{time:di(this,n)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(n){return n===void 0&&(n=this._time),Gf(this,di(this,n))},i.previousLabel=function(n){return n===void 0&&(n=this._time),Gf(this,di(this,n),1)},i.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+He)},i.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(n=Qe(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(u in l)l[u]>=o&&(l[u]+=n);return gn(this)},i.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return t.prototype.invalidate.call(this,n)},i.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),gn(this)},i.totalDuration=function(n){var r=0,o=this,a=o._last,l=vi,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(r-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Qe(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=u;nr(o,o===Je&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(Je._ts&&(e0(Je,Pa(n,Je)),Jm=ii.frame),ii.frame>=Bf){Bf+=ai.autoSleep||120;var r=Je._first;if((!r||!r._ts)&&ai.autoSleep&&ii._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ii.sleep()}}},e})(uo);ui($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qk=function(e,i,s,n,r,o,a){var l=new Kt(this._pt,e,i,0,1,E0,null,r),u=0,c=0,h,f,d,g,p,_,w,y;for(l.b=s,l.e=n,s+="",n+="",(w=~n.indexOf("random("))&&(n=lo(n)),o&&(y=[s,n],o(y,e,i),s=y[0],n=y[1]),f=s.match(Ul)||[];h=Ul.exec(n);)g=h[0],p=n.substring(u,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[c++]&&(_=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:_,c:g.charAt(1)==="="?jn(_,g)-_:parseFloat(g)-_,m:d&&d<4?Math.round:0},u=Ul.lastIndex);return l.c=u<n.length?n.substring(u,n.length):"",l.fp=a,(Km.test(n)||w)&&(l.e=0),this._pt=l,l},Xu=function(e,i,s,n,r,o,a,l,u,c){rt(n)&&(n=n(r||0,e,o));var h=e[i],f=s!=="get"?s:rt(h)?u?e[i.indexOf("set")||!rt(e["get"+i.substr(3)])?i:"get"+i.substr(3)](u):e[i]():h,d=rt(h)?u?iT:T0:Ju,g;if(bt(n)&&(~n.indexOf("random(")&&(n=lo(n)),n.charAt(1)==="="&&(g=jn(f,n)+(Ct(f)||0),(g||g===0)&&(n=g))),!c||f!==n||Zc)return!isNaN(f*n)&&n!==""?(g=new Kt(this._pt,e,i,+f||0,n-(f||0),typeof h=="boolean"?nT:S0,0,d),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(i in e)&&ju(i,n),Qk.call(this,e,i,f,n,d,l||ai.stringFilter,u))},Jk=function(e,i,s,n,r){if(rt(e)&&(e=jr(e,r,i,s,n)),!qi(e)||e.style&&e.nodeType||Ot(e)||qm(e))return bt(e)?jr(e,r,i,s,n):e;var o={},a;for(a in e)o[a]=jr(e[a],r,i,s,n);return o},_0=function(e,i,s,n,r,o){var a,l,u,c;if(Zt[e]&&(a=new Zt[e]).init(r,a.rawVars?i[e]:Jk(i[e],n,r,o,s),s,n,o)!==!1&&(s._pt=l=new Kt(s._pt,r,e,0,1,a.render,a,0,a.priority),s!==Dn))for(u=s._ptLookup[s._targets.indexOf(r)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ss,Zc,Qu=function t(e,i,s){var n=e.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,u=n.onUpdate,c=n.runBackwards,h=n.yoyoEase,f=n.keyframes,d=n.autoRevert,g=e._dur,p=e._startAt,_=e._targets,w=e.parent,y=w&&w.data==="nested"?w.vars.targets:_,m=e._overwrite==="auto"&&!Vu,b=e.timeline,v=n.easeReverse||h,x,k,R,S,P,A,M,D,F,O,C,L,q;if(b&&(!f||!r)&&(r="none"),e._ease=mn(r,ro.ease),e._rEase=v&&(mn(v)||e._ease),e._from=!b&&!!n.runBackwards,e._from&&(e.ratio=1),!b||f&&!n.stagger){if(D=_[0]?pn(_[0]).harness:0,L=D&&n[D.prop],x=Ra(n,qu),p&&(p._zTime<0&&p.progress(1),i<0&&c&&a&&!d?p.render(-1,!0):p.revert(c&&g?Yo:Sk),p._lazy=0),o){if(zs(e._startAt=dt.set(_,ui({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!p&&qt(l),startAt:null,delay:0,onUpdate:u&&function(){return ni(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Et||!a&&!d)&&e._startAt.revert(Yo),a&&g&&i<=0&&s<=0){i&&(e._zTime=i);return}}else if(c&&g&&!p){if(i&&(a=!1),R=ui({overwrite:!1,data:"isFromStart",lazy:a&&!p&&qt(l),immediateRender:a,stagger:0,parent:w},x),L&&(R[D.prop]=L),zs(e._startAt=dt.set(_,R)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Et?e._startAt.revert(Yo):e._startAt.render(-1,!0)),e._zTime=i,!a)t(e._startAt,He,He);else if(!i)return}for(e._pt=e._ptCache=0,l=g&&qt(l)||l&&!g,k=0;k<_.length;k++){if(P=_[k],M=P._gsap||Ku(_)[k]._gsap,e._ptLookup[k]=O={},Wc[M.id]&&Os.length&&Ea(),C=y===_?k:y.indexOf(P),D&&(F=new D).init(P,L||x,e,C,y)!==!1&&(e._pt=S=new Kt(e._pt,P,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(ce){O[ce]=S}),F.priority&&(A=1)),!D||L)for(R in x)Zt[R]&&(F=_0(R,x,e,C,P,y))?F.priority&&(A=1):O[R]=S=Xu.call(e,P,R,"get",x[R],C,y,0,n.stringFilter);e._op&&e._op[k]&&e.kill(P,e._op[k]),m&&e._pt&&(Ss=e,Je.killTweensOf(P,O,e.globalTime(i)),q=!e.parent,Ss=0),e._pt&&l&&(Wc[M.id]=1)}A&&R0(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,f&&i<=0&&b.render(vi,!0,!0)},Zk=function(e,i,s,n,r,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[i],c,h,f,d;if(!u)for(u=e._ptCache[i]=[],f=e._ptLookup,d=e._targets.length;d--;){if(c=f[d][i],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==i&&c.fp!==i;)c=c._next;if(!c)return Zc=1,e.vars[i]="+=0",Qu(e,a),Zc=0,l?oo(i+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(d=u.length;d--;)h=u[d],c=h._pt||h,c.s=(n||n===0)&&!r?n:c.s+(n||0)+o*c.c,c.c=s-c.s,h.e&&(h.e=ut(s)+Ct(h.e)),h.b&&(h.b=c.s+Ct(h.b))},eT=function(e,i){var s=e[0]?pn(e[0]).harness:0,n=s&&s.aliases,r,o,a,l;if(!n)return i;r=ir({},i);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},tT=function(e,i,s,n){var r=i.ease||n||"power1.inOut",o,a;if(Ot(i))a=s[e]||(s[e]=[]),i.forEach(function(l,u){return a.push({t:u/(i.length-1)*100,v:l,e:r})});else for(o in i)a=s[o]||(s[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:i[o],e:r})},jr=function(e,i,s,n,r){return rt(e)?e.call(i,s,n,r):bt(e)&&~e.indexOf("random(")?lo(e):e},x0=Wu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",k0={};Wt(x0+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return k0[t]=1});var dt=(function(t){$m(e,t);function e(s,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=t.call(this,o?n:Gr(n))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,_=l.scrollTrigger,w=n.parent||Je,y=(Ot(s)||qm(s)?ms(s[0]):"length"in n)?[s]:yi(s),m,b,v,x,k,R,S,P;if(a._targets=y.length?Ku(y):oo("GSAP target "+s+" not found. https://gsap.com",!ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Fo(u)||Fo(c)){n=a.vars;var A=n.easeReverse||n.yoyoEase;if(m=a.timeline=new $t({data:"nested",defaults:p||{},targets:w&&w.data==="nested"?w.vars.targets:y}),m.kill(),m.parent=m._dp=is(a),m._start=0,f||Fo(u)||Fo(c)){if(x=y.length,S=f&&c0(f),qi(f))for(k in f)~x0.indexOf(k)&&(P||(P={}),P[k]=f[k]);for(b=0;b<x;b++)v=Ra(n,k0),v.stagger=0,A&&(v.easeReverse=A),P&&ir(v,P),R=y[b],v.duration=+jr(u,is(a),b,R,y),v.delay=(+jr(c,is(a),b,R,y)||0)-a._delay,!f&&x===1&&v.delay&&(a._delay=c=v.delay,a._start+=c,v.delay=0),m.to(R,v,S?S(b,R,y):0),m._ease=Me.none;m.duration()?u=c=0:a.timeline=0}else if(g){Gr(ui(m.vars.defaults,{ease:"none"})),m._ease=mn(g.ease||n.ease||"none");var M=0,D,F,O;if(Ot(g))g.forEach(function(C){return m.to(y,C,">")}),m.duration();else{v={};for(k in g)k==="ease"||k==="easeEach"||tT(k,g[k],v,g.easeEach);for(k in v)for(D=v[k].sort(function(C,L){return C.t-L.t}),M=0,b=0;b<D.length;b++)F=D[b],O={ease:F.e,duration:(F.t-(b?D[b-1].t:0))/100*u},O[k]=F.v,m.to(y,O,M),M+=O.duration;m.duration()<u&&m.to({},{duration:u-m.duration()})}}u||a.duration(u=m.duration())}else a.timeline=0;return d===!0&&!Vu&&(Ss=is(a),Je.killTweensOf(y),Ss=0),zi(w,is(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(h||!u&&!g&&a._start===Qe(w._time)&&qt(h)&&Ak(is(a))&&w.data!=="nested")&&(a._tTime=-He,a.render(Math.max(0,-c)||0)),_&&r0(is(a),_),a}var i=e.prototype;return i.render=function(n,r,o){var a=this._time,l=this._tDur,u=this._dur,c=n<0,h=n>l-He&&!c?l:n<He?0:n,f,d,g,p,_,w,y,m;if(!u)Fk(this,n,r,o);else if(h!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,m=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+n,r,o);if(f=Qe(h%p),h===l?(g=this._repeat,f=u):(_=Qe(h/p),g=~~_,g&&g===_?(f=u,g--):f>u&&(f=u)),w=this._yoyo&&g&1,w&&(f=u-f),_=sr(this._tTime,p),f===a&&!o&&this._initted&&g===_)return this._tTime=h,this;g!==_&&this.vars.repeatRefresh&&!w&&!this._lock&&f!==p&&this._initted&&(this._lock=o=1,this.render(Qe(p*g),!0).invalidate()._lock=0)}if(!this._initted){if(o0(this,c?n:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(u!==this._dur)return this.render(n,r,o)}if(this._rEase){var b=f<a;if(b!==this._inv){var v=b?a:u-a;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/u);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!r&&!_&&(ni(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;m&&m.render(n<0?n:m._dur*m._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(c&&Kc(this,n,r,o),ni(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!r&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Kc(this,n,!0,!0),(n||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zs(this,1),!r&&!(c&&!a)&&(h||a||w)&&(ni(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),t.prototype.invalidate.call(this,n)},i.resetTo=function(n,r,o,a,l){co||ii.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Qu(this,u),c=this._ease(u/this._dur),Zk(this,n,r,o,a,c,u,l)?this.resetTo(n,r,o,a,1):(ul(this,0),this.parent||s0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Fr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Et),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Ss&&Ss.vars.overwrite!==!0)._first||Fr(this),this.parent&&o!==this.timeline.totalDuration()&&nr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?yi(n):a,u=this._ptLookup,c=this._pt,h,f,d,g,p,_,w;if((!r||r==="all")&&Ck(a,l))return r==="all"&&(this._pt=0),Fr(this);for(h=this._op=this._op||[],r!=="all"&&(bt(r)&&(p={},Wt(r,function(y){return p[y]=1}),r=p),r=eT(a,r)),w=a.length;w--;)if(~l.indexOf(a[w])){f=u[w],r==="all"?(h[w]=r,g=f,d={}):(d=h[w]=h[w]||{},g=r);for(p in g)_=f&&f[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&ll(this,_,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&c&&Fr(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return $r(1,arguments)},e.delayedCall=function(n,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,r,o){return $r(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return Je.killTweensOf(n,r,o)},e})(uo);ui(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wt("staggerTo,staggerFrom,staggerFromTo",function(t){dt[t]=function(){var e=new $t,i=Xc.call(arguments,0);return i.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,i)}});var Ju=function(e,i,s){return e[i]=s},T0=function(e,i,s){return e[i](s)},iT=function(e,i,s,n){return e[i](n.fp,s)},sT=function(e,i,s){return e.setAttribute(i,s)},Zu=function(e,i){return rt(e[i])?T0:Hu(e[i])&&e.setAttribute?sT:Ju},S0=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},nT=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},E0=function(e,i){var s=i._pt,n="";if(!e&&i.b)n=i.b;else if(e===1&&i.e)n=i.e;else{for(;s;)n=s.p+(s.m?s.m(s.s+s.c*e):Math.round((s.s+s.c*e)*1e4)/1e4)+n,s=s._next;n+=i.c}i.set(i.t,i.p,n,i)},eh=function(e,i){for(var s=i._pt;s;)s.r(e,s.d),s=s._next},rT=function(e,i,s,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,i,s),r=o},oT=function(e){for(var i=this._pt,s,n;i;)n=i._next,i.p===e&&!i.op||i.op===e?ll(this,i,"_pt"):i.dep||(s=1),i=n;return!s},aT=function(e,i,s,n){n.mSet(e,i,n.m.call(n.tween,s,n.mt),n)},R0=function(e){for(var i=e._pt,s,n,r,o;i;){for(s=i._next,n=r;n&&n.pr>i.pr;)n=n._next;(i._prev=n?n._prev:o)?i._prev._next=i:r=i,(i._next=n)?n._prev=i:o=i,i=s}e._pt=r},Kt=(function(){function t(i,s,n,r,o,a,l,u,c){this.t=s,this.s=r,this.c=o,this.p=n,this.r=a||S0,this.d=l||this,this.set=u||Ju,this.pr=c||0,this._next=i,i&&(i._prev=this)}var e=t.prototype;return e.modifier=function(s,n,r){this.mSet=this.mSet||this.set,this.set=aT,this.m=s,this.mt=r,this.tween=n},t})();Wt(Wu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return qu[t]=1});ci.TweenMax=ci.TweenLite=dt;ci.TimelineLite=ci.TimelineMax=$t;Je=new $t({sortChildren:!1,defaults:ro,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=y0;var vn=[],Qo={},lT=[],jf=0,cT=0,jl=function(e){return(Qo[e]||lT).map(function(i){return i()})},eu=function(){var e=Date.now(),i=[];e-jf>2&&(jl("matchMediaInit"),vn.forEach(function(s){var n=s.queries,r=s.conditions,o,a,l,u;for(a in n)o=Li.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,u=1);u&&(s.revert(),l&&i.push(s))}),jl("matchMediaRevert"),i.forEach(function(s){return s.onMatch(s,function(n){return s.add(null,n)})}),jf=e,jl("matchMedia"))},P0=(function(){function t(i,s){this.selector=s&&Qc(s),this.data=[],this._r=[],this.isReverted=!1,this.id=cT++,i&&this.add(i)}var e=t.prototype;return e.add=function(s,n,r){rt(s)&&(r=n,n=s,s=rt);var o=this,a=function(){var u=Xe,c=o.selector,h;return u&&u!==o&&u.data.push(o),r&&(o.selector=Qc(r)),Xe=o,h=n.apply(o,arguments),rt(h)&&o._r.push(h),Xe=u,o.selector=c,o.isReverted=!1,h};return o.last=a,s===rt?a(o,function(l){return o.add(null,l)}):s?o[s]=a:a},e.ignore=function(s){var n=Xe;Xe=null,s(this),Xe=n},e.getTweens=function(){var s=[];return this.data.forEach(function(n){return n instanceof t?s.push.apply(s,n.getTweens()):n instanceof dt&&!(n.parent&&n.parent.data==="nested")&&s.push(n)}),s},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(s,n){var r=this;if(s?(function(){for(var a=r.getTweens(),l=r.data.length,u;l--;)u=r.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(s)}),l=r.data.length;l--;)u=r.data[l],u instanceof $t?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof dt)&&u.revert&&u.revert(s);r._r.forEach(function(c){return c(s,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=vn.length;o--;)vn[o].id===this.id&&vn.splice(o,1)},e.revert=function(s){this.kill(s||{})},t})(),uT=(function(){function t(i){this.contexts=[],this.scope=i,Xe&&Xe.data.push(this)}var e=t.prototype;return e.add=function(s,n,r){qi(s)||(s={matches:s});var o=new P0(0,r||this.scope),a=o.conditions={},l,u,c;Xe&&!o.selector&&(o.selector=Xe.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=s;for(u in s)u==="all"?c=1:(l=Li.matchMedia(s[u]),l&&(vn.indexOf(o)<0&&vn.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(eu):l.addEventListener("change",eu)));return c&&n(o,function(h){return o.add(null,h)}),this},e.revert=function(s){this.kill(s||{})},e.kill=function(s){this.contexts.forEach(function(n){return n.kill(s,!0)})},t})(),Ca={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];i.forEach(function(n){return g0(n)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,i){return Je.getTweensOf(e,i)},getProperty:function(e,i,s,n){bt(e)&&(e=yi(e)[0]);var r=pn(e||{}).get,o=s?i0:t0;return s==="native"&&(s=""),e&&(i?o((Zt[i]&&Zt[i].get||r)(e,i,s,n)):function(a,l,u){return o((Zt[a]&&Zt[a].get||r)(e,a,l,u))})},quickSetter:function(e,i,s){if(e=yi(e),e.length>1){var n=e.map(function(c){return Xt.quickSetter(c,i,s)}),r=n.length;return function(c){for(var h=r;h--;)n[h](c)}}e=e[0]||{};var o=Zt[i],a=pn(e),l=a.harness&&(a.harness.aliases||{})[i]||i,u=o?function(c){var h=new o;Dn._pt=0,h.init(e,s?c+s:c,Dn,0,[e]),h.render(1,h),Dn._pt&&eh(1,Dn)}:a.set(e,l);return o?u:function(c){return u(e,l,s?c+s:c,a,1)}},quickTo:function(e,i,s){var n,r=Xt.to(e,ui((n={},n[i]="+=0.1",n.paused=!0,n.stagger=0,n),s||{})),o=function(l,u,c){return r.resetTo(i,l,u,c)};return o.tween=r,o},isTweening:function(e){return Je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mn(e.ease,ro.ease)),Uf(ro,e||{})},config:function(e){return Uf(ai,e||{})},registerEffect:function(e){var i=e.name,s=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Zt[a]&&!ci[a]&&oo(i+" effect requires "+a+" plugin.")}),Vl[i]=function(a,l,u){return s(yi(a),ui(l||{},r),u)},o&&($t.prototype[i]=function(a,l,u){return this.add(Vl[i](a,qi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,i){Me[e]=mn(i)},parseEase:function(e,i){return arguments.length?mn(e,i):Me},getById:function(e){return Je.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var s=new $t(e),n,r;for(s.smoothChildTiming=qt(e.smoothChildTiming),Je.remove(s),s._dp=0,s._time=s._tTime=Je._time,n=Je._first;n;)r=n._next,(i||!(!n._dur&&n instanceof dt&&n.vars.onComplete===n._targets[0]))&&zi(s,n,n._start-n._delay),n=r;return zi(Je,s,0),s},context:function(e,i){return e?new P0(e,i):Xe},matchMedia:function(e){return new uT(e)},matchMediaRefresh:function(){return vn.forEach(function(e){var i=e.conditions,s,n;for(n in i)i[n]&&(i[n]=!1,s=1);s&&e.revert()})||eu()},addEventListener:function(e,i){var s=Qo[e]||(Qo[e]=[]);~s.indexOf(i)||s.push(i)},removeEventListener:function(e,i){var s=Qo[e],n=s&&s.indexOf(i);n>=0&&s.splice(n,1)},utils:{wrap:Vk,wrapYoyo:Hk,distribute:c0,random:h0,snap:u0,normalize:Uk,getUnit:Ct,clamp:Lk,splitColor:m0,toArray:yi,selector:Qc,mapRange:d0,pipe:zk,unitize:Bk,interpolate:Gk,shuffle:l0},install:Xm,effects:Vl,ticker:ii,updateRoot:$t.updateRoot,plugins:Zt,globalTimeline:Je,core:{PropTween:Kt,globals:Qm,Tween:dt,Timeline:$t,Animation:uo,getCache:pn,_removeLinkedListItem:ll,reverting:function(){return Et},context:function(e){return e&&Xe&&(Xe.data.push(e),e._ctx=Xe),Xe},suppressOverwrites:function(e){return Vu=e}}};Wt("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Ca[t]=dt[t]});ii.add($t.updateRoot);Dn=Ca.to({},{duration:0});var hT=function(e,i){for(var s=e._pt;s&&s.p!==i&&s.op!==i&&s.fp!==i;)s=s._next;return s},fT=function(e,i){var s=e._targets,n,r,o;for(n in i)for(r=s.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=hT(o,n)),o&&o.modifier&&o.modifier(i[n],e,s[r],n))},ql=function(e,i){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,u;if(bt(r)&&(l={},Wt(r,function(c){return l[c]=1}),r=l),i){l={};for(u in r)l[u]=i(r[u]);r=l}fT(a,r)}}}},Xt=Ca.registerPlugin({name:"attr",init:function(e,i,s,n,r){var o,a,l;this.tween=s;for(o in i)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",i[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,i){for(var s=i._pt;s;)Et?s.set(s.t,s.p,s.b,s):s.r(e,s.d),s=s._next}},{name:"endArray",headless:1,init:function(e,i){for(var s=i.length;s--;)this.add(e,s,e[s]||0,i[s],0,0,0,0,0,1)}},ql("roundProps",Jc),ql("modifiers"),ql("snap",u0))||Ca;dt.version=$t.version=Xt.version="3.15.0";Ym=1;Gu()&&rr();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;var qf,Es,qn,th,rn,Wf,ih,dT=function(){return typeof window<"u"},vs={},en=180/Math.PI,Wn=Math.PI/180,Tn=Math.atan2,Kf=1e8,sh=/([A-Z])/g,pT=/(left|right|width|margin|padding|x)/i,gT=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tu=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},mT=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},vT=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},yT=function(e,i){return i.set(i.t,i.p,e===1?i.e:e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},wT=function(e,i){var s=i.s+i.c*e;i.set(i.t,i.p,~~(s+(s<0?-.5:.5))+i.u,i)},C0=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},M0=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},bT=function(e,i,s){return e.style[i]=s},_T=function(e,i,s){return e.style.setProperty(i,s)},xT=function(e,i,s){return e._gsap[i]=s},kT=function(e,i,s){return e._gsap.scaleX=e._gsap.scaleY=s},TT=function(e,i,s,n,r){var o=e._gsap;o.scaleX=o.scaleY=s,o.renderTransform(r,o)},ST=function(e,i,s,n,r){var o=e._gsap;o[i]=s,o.renderTransform(r,o)},Ze="transform",Yt=Ze+"Origin",ET=function t(e,i){var s=this,n=this.target,r=n.style,o=n._gsap;if(e in vs&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return s.tfm[a]=rs(n,a)}):this.tfm[e]=o.x?o[e]:rs(n,e),e===Yt&&(this.tfm.zOrigin=o.zOrigin);else return Vi.transform.split(",").forEach(function(a){return t.call(s,a,i)});if(this.props.indexOf(Ze)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Yt,i,"")),e=Ze}(r||i)&&this.props.push(e,i,r[e])},A0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},RT=function(){var e=this.props,i=this.target,s=i.style,n=i._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?i[e[r]](e[r+2]):i[e[r]]=e[r+2]:e[r+2]?s[e[r]]=e[r+2]:s.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(sh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),r=ih(),(!r||!r.isStart)&&!s[Ze]&&(A0(s),n.zOrigin&&s[Yt]&&(s[Yt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},O0=function(e,i){var s={target:e,props:[],revert:RT,save:ET};return e._gsap||Xt.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(n){return s.save(n)}),s},F0,iu=function(e,i){var s=Es.createElementNS?Es.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Es.createElement(e);return s&&s.style?s:Es.createElement(e)},ri=function t(e,i,s){var n=getComputedStyle(e);return n[i]||n.getPropertyValue(i.replace(sh,"-$1").toLowerCase())||n.getPropertyValue(i)||!s&&t(e,or(i)||i,1)||""},Yf="O,Moz,ms,Ms,Webkit".split(","),or=function(e,i,s){var n=i||rn,r=n.style,o=5;if(e in r&&!s)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Yf[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Yf[o]:"")+e},su=function(){dT()&&window.document&&(qf=window,Es=qf.document,qn=Es.documentElement,rn=iu("div")||{style:{}},iu("div"),Ze=or(Ze),Yt=Ze+"Origin",rn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",F0=!!or("perspective"),ih=Xt.core.reverting,th=1)},Xf=function(e){var i=e.ownerSVGElement,s=iu("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",s.appendChild(n),qn.appendChild(s);try{r=n.getBBox()}catch{}return s.removeChild(n),qn.removeChild(s),r},Qf=function(e,i){for(var s=i.length;s--;)if(e.hasAttribute(i[s]))return e.getAttribute(i[s])},N0=function(e){var i,s;try{i=e.getBBox()}catch{i=Xf(e),s=1}return i&&(i.width||i.height)||s||(i=Xf(e)),i&&!i.width&&!i.x&&!i.y?{x:+Qf(e,["x","cx","x1"])||0,y:+Qf(e,["y","cy","y1"])||0,width:0,height:0}:i},D0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&N0(e))},Bs=function(e,i){if(i){var s=e.style,n;i in vs&&i!==Yt&&(i=Ze),s.removeProperty?(n=i.substr(0,2),(n==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),s.removeProperty(n==="--"?i:i.replace(sh,"-$1").toLowerCase())):s.removeAttribute(i)}},Rs=function(e,i,s,n,r,o){var a=new Kt(e._pt,i,s,0,1,o?M0:C0);return e._pt=a,a.b=n,a.e=r,e._props.push(s),a},Jf={deg:1,rad:1,turn:1},PT={grid:1,flex:1},Us=function t(e,i,s,n){var r=parseFloat(s)||0,o=(s+"").trim().substr((r+"").length)||"px",a=rn.style,l=pT.test(i),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=n==="px",d=n==="%",g,p,_,w;if(n===o||!r||Jf[n]||Jf[o])return r;if(o!=="px"&&!f&&(r=t(e,i,s,"px")),w=e.getCTM&&D0(e),(d||o==="%")&&(vs[i]||~i.indexOf("adius")))return g=w?e.getBBox()[l?"width":"height"]:e[c],ut(d?r/g*h:r/100*g);if(a[l?"width":"height"]=h+(f?o:n),p=n!=="rem"&&~i.indexOf("adius")||n==="em"&&e.appendChild&&!u?e:e.parentNode,w&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Es||!p.appendChild)&&(p=Es.body),_=p._gsap,_&&d&&_.width&&l&&_.time===ii.time&&!_.uncache)return ut(r/_.width*h);if(d&&(i==="height"||i==="width")){var y=e.style[i];e.style[i]=h+n,g=e[c],y?e.style[i]=y:Bs(e,i)}else(d||o==="%")&&!PT[ri(p,"display")]&&(a.position=ri(e,"position")),p===e&&(a.position="static"),p.appendChild(rn),g=rn[c],p.removeChild(rn),a.position="absolute";return l&&d&&(_=pn(p),_.time=ii.time,_.width=p[c]),ut(f?g*r/h:g&&r?h/g*r:0)},rs=function(e,i,s,n){var r;return th||su(),i in Vi&&i!=="transform"&&(i=Vi[i],~i.indexOf(",")&&(i=i.split(",")[0])),vs[i]&&i!=="transform"?(r=fo(e,n),r=i!=="transformOrigin"?r[i]:r.svg?r.origin:Aa(ri(e,Yt))+" "+r.zOrigin+"px"):(r=e.style[i],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Ma[i]&&Ma[i](e,i,s)||ri(e,i)||Zm(e,i)||(i==="opacity"?1:0))),s&&!~(r+"").trim().indexOf(" ")?Us(e,i,r,s)+s:r},CT=function(e,i,s,n){if(!s||s==="none"){var r=or(i,e,1),o=r&&ri(e,r,1);o&&o!==s?(i=r,s=o):i==="borderColor"&&(s=ri(e,"borderTopColor"))}var a=new Kt(this._pt,e.style,i,0,1,E0),l=0,u=0,c,h,f,d,g,p,_,w,y,m,b,v;if(a.b=s,a.e=n,s+="",n+="",n.substring(0,6)==="var(--"&&(n=ri(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(p=e.style[i],e.style[i]=n,n=ri(e,i)||n,p?e.style[i]=p:Bs(e,i)),c=[s,n],y0(c),s=c[0],n=c[1],f=s.match(Nn)||[],v=n.match(Nn)||[],v.length){for(;h=Nn.exec(n);)_=h[0],y=n.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),_!==(p=f[u++]||"")&&(d=parseFloat(p)||0,b=p.substr((d+"").length),_.charAt(1)==="="&&(_=jn(d,_)+b),w=parseFloat(_),m=_.substr((w+"").length),l=Nn.lastIndex-m.length,m||(m=m||ai.units[i]||b,l===n.length&&(n+=m,a.e+=m)),b!==m&&(d=Us(e,i,p,m)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:d,c:w-d,m:g&&g<4||i==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=i==="display"&&n==="none"?M0:C0;return Km.test(n)&&(a.e=0),this._pt=a,a},Zf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},MT=function(e){var i=e.split(" "),s=i[0],n=i[1]||"50%";return(s==="top"||s==="bottom"||n==="left"||n==="right")&&(e=s,s=n,n=e),i[0]=Zf[s]||s,i[1]=Zf[n]||n,i.join(" ")},AT=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var s=i.t,n=s.style,r=i.u,o=s._gsap,a,l,u;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],vs[a]&&(l=1,a=a==="transformOrigin"?Yt:Ze),Bs(s,a);l&&(Bs(s,Ze),o&&(o.svg&&s.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",fo(s,1),o.uncache=1,A0(n)))}},Ma={clearProps:function(e,i,s,n,r){if(r.data!=="isFromStart"){var o=e._pt=new Kt(e._pt,i,s,0,0,AT);return o.u=n,o.pr=-10,o.tween=r,e._props.push(s),1}}},ho=[1,0,0,1,0,0],L0={},I0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ed=function(e){var i=ri(e,Ze);return I0(i)?ho:i.substr(7).match(Wm).map(ut)},nh=function(e,i){var s=e._gsap||pn(e),n=e.style,r=ed(e),o,a,l,u;return s.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ho:r):(r===ho&&!e.offsetParent&&e!==qn&&!s.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,qn.appendChild(e)),r=ed(e),l?n.display=l:Bs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):qn.removeChild(e))),i&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},nu=function(e,i,s,n,r,o){var a=e._gsap,l=r||nh(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],p=l[2],_=l[3],w=l[4],y=l[5],m=i.split(" "),b=parseFloat(m[0])||0,v=parseFloat(m[1])||0,x,k,R,S;s?l!==ho&&(k=d*_-g*p)&&(R=b*(_/k)+v*(-p/k)+(p*y-_*w)/k,S=b*(-g/k)+v*(d/k)-(d*y-g*w)/k,b=R,v=S):(x=N0(e),b=x.x+(~m[0].indexOf("%")?b/100*x.width:b),v=x.y+(~(m[1]||m[0]).indexOf("%")?v/100*x.height:v)),n||n!==!1&&a.smooth?(w=b-u,y=v-c,a.xOffset=h+(w*d+y*p)-w,a.yOffset=f+(w*g+y*_)-y):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=v,a.smooth=!!n,a.origin=i,a.originIsAbsolute=!!s,e.style[Yt]="0px 0px",o&&(Rs(o,a,"xOrigin",u,b),Rs(o,a,"yOrigin",c,v),Rs(o,a,"xOffset",h,a.xOffset),Rs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},fo=function(e,i){var s=e._gsap||new b0(e);if("x"in s&&!i&&!s.uncache)return s;var n=e.style,r=s.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=ri(e,Yt)||"0",c,h,f,d,g,p,_,w,y,m,b,v,x,k,R,S,P,A,M,D,F,O,C,L,q,ce,he,fe,ae,ie,xe,pe;return c=h=f=p=_=w=y=m=b=0,d=g=1,s.svg=!!(e.getCTM&&D0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ze]!=="none"?l[Ze]:"")),n.scale=n.rotate=n.translate="none"),k=nh(e,s.svg),s.svg&&(s.uncache?(q=e.getBBox(),u=s.xOrigin-q.x+"px "+(s.yOrigin-q.y)+"px",L=""):L=!i&&e.getAttribute("data-svg-origin"),nu(e,L||u,!!L||s.originIsAbsolute,s.smooth!==!1,k)),v=s.xOrigin||0,x=s.yOrigin||0,k!==ho&&(A=k[0],M=k[1],D=k[2],F=k[3],c=O=k[4],h=C=k[5],k.length===6?(d=Math.sqrt(A*A+M*M),g=Math.sqrt(F*F+D*D),p=A||M?Tn(M,A)*en:0,y=D||F?Tn(D,F)*en+p:0,y&&(g*=Math.abs(Math.cos(y*Wn))),s.svg&&(c-=v-(v*A+x*D),h-=x-(v*M+x*F))):(pe=k[6],ie=k[7],he=k[8],fe=k[9],ae=k[10],xe=k[11],c=k[12],h=k[13],f=k[14],R=Tn(pe,ae),_=R*en,R&&(S=Math.cos(-R),P=Math.sin(-R),L=O*S+he*P,q=C*S+fe*P,ce=pe*S+ae*P,he=O*-P+he*S,fe=C*-P+fe*S,ae=pe*-P+ae*S,xe=ie*-P+xe*S,O=L,C=q,pe=ce),R=Tn(-D,ae),w=R*en,R&&(S=Math.cos(-R),P=Math.sin(-R),L=A*S-he*P,q=M*S-fe*P,ce=D*S-ae*P,xe=F*P+xe*S,A=L,M=q,D=ce),R=Tn(M,A),p=R*en,R&&(S=Math.cos(R),P=Math.sin(R),L=A*S+M*P,q=O*S+C*P,M=M*S-A*P,C=C*S-O*P,A=L,O=q),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,w=180-w),d=ut(Math.sqrt(A*A+M*M+D*D)),g=ut(Math.sqrt(C*C+pe*pe)),R=Tn(O,C),y=Math.abs(R)>2e-4?R*en:0,b=xe?1/(xe<0?-xe:xe):0),s.svg&&(L=e.getAttribute("transform"),s.forceCSS=e.setAttribute("transform","")||!I0(ri(e,Ze)),L&&e.setAttribute("transform",L))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),i=i||s.uncache,s.x=c-((s.xPercent=c&&(!i&&s.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*s.xPercent/100:0)+o,s.y=h-((s.yPercent=h&&(!i&&s.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*s.yPercent/100:0)+o,s.z=f+o,s.scaleX=ut(d),s.scaleY=ut(g),s.rotation=ut(p)+a,s.rotationX=ut(_)+a,s.rotationY=ut(w)+a,s.skewX=y+a,s.skewY=m+a,s.transformPerspective=b+o,(s.zOrigin=parseFloat(u.split(" ")[2])||!i&&s.zOrigin||0)&&(n[Yt]=Aa(u)),s.xOffset=s.yOffset=0,s.force3D=ai.force3D,s.renderTransform=s.svg?FT:F0?z0:OT,s.uncache=0,s},Aa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wl=function(e,i,s){var n=Ct(i);return ut(parseFloat(i)+parseFloat(Us(e,"x",s+"px",n)))+n},OT=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,z0(e,i)},Ys="0deg",Tr="0px",Xs=") ",z0=function(e,i){var s=i||this,n=s.xPercent,r=s.yPercent,o=s.x,a=s.y,l=s.z,u=s.rotation,c=s.rotationY,h=s.rotationX,f=s.skewX,d=s.skewY,g=s.scaleX,p=s.scaleY,_=s.transformPerspective,w=s.force3D,y=s.target,m=s.zOrigin,b="",v=w==="auto"&&e&&e!==1||w===!0;if(m&&(h!==Ys||c!==Ys)){var x=parseFloat(c)*Wn,k=Math.sin(x),R=Math.cos(x),S;x=parseFloat(h)*Wn,S=Math.cos(x),o=Wl(y,o,k*S*-m),a=Wl(y,a,-Math.sin(x)*-m),l=Wl(y,l,R*S*-m+m)}_!==Tr&&(b+="perspective("+_+Xs),(n||r)&&(b+="translate("+n+"%, "+r+"%) "),(v||o!==Tr||a!==Tr||l!==Tr)&&(b+=l!==Tr||v?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Xs),u!==Ys&&(b+="rotate("+u+Xs),c!==Ys&&(b+="rotateY("+c+Xs),h!==Ys&&(b+="rotateX("+h+Xs),(f!==Ys||d!==Ys)&&(b+="skew("+f+", "+d+Xs),(g!==1||p!==1)&&(b+="scale("+g+", "+p+Xs),y.style[Ze]=b||"translate(0, 0)"},FT=function(e,i){var s=i||this,n=s.xPercent,r=s.yPercent,o=s.x,a=s.y,l=s.rotation,u=s.skewX,c=s.skewY,h=s.scaleX,f=s.scaleY,d=s.target,g=s.xOrigin,p=s.yOrigin,_=s.xOffset,w=s.yOffset,y=s.forceCSS,m=parseFloat(o),b=parseFloat(a),v,x,k,R,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Wn,u*=Wn,v=Math.cos(l)*h,x=Math.sin(l)*h,k=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=Wn,S=Math.tan(u-c),S=Math.sqrt(1+S*S),k*=S,R*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),v*=S,x*=S)),v=ut(v),x=ut(x),k=ut(k),R=ut(R)):(v=h,R=f,x=k=0),(m&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(m=Us(d,"x",o,"px"),b=Us(d,"y",a,"px")),(g||p||_||w)&&(m=ut(m+g-(g*v+p*k)+_),b=ut(b+p-(g*x+p*R)+w)),(n||r)&&(S=d.getBBox(),m=ut(m+n/100*S.width),b=ut(b+r/100*S.height)),S="matrix("+v+","+x+","+k+","+R+","+m+","+b+")",d.setAttribute("transform",S),y&&(d.style[Ze]=S)},NT=function(e,i,s,n,r){var o=360,a=bt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?en:1),u=l-n,c=n+u+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*Kf)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*Kf)%o-~~(u/o)*o)),e._pt=f=new Kt(e._pt,i,s,n,u,mT),f.e=c,f.u="deg",e._props.push(s),f},td=function(e,i){for(var s in i)e[s]=i[s];return e},DT=function(e,i,s){var n=td({},s._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=s.style,a,l,u,c,h,f,d,g;n.svg?(u=s.getAttribute("transform"),s.setAttribute("transform",""),o[Ze]=i,a=fo(s,1),Bs(s,Ze),s.setAttribute("transform",u)):(u=getComputedStyle(s)[Ze],o[Ze]=i,a=fo(s,1),o[Ze]=u);for(l in vs)u=n[l],c=a[l],u!==c&&r.indexOf(l)<0&&(d=Ct(u),g=Ct(c),h=d!==g?Us(s,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new Kt(e._pt,a,l,h,f-h,tu),e._pt.u=g||0,e._props.push(l));td(a,n)};Wt("padding,margin,Width,Radius",function(t,e){var i="Top",s="Right",n="Bottom",r="Left",o=(e<3?[i,s,n,r]:[i+r,i+s,n+s,n+r]).map(function(a){return e<2?t+a:"border"+a+t});Ma[e>1?"border"+t:t]=function(a,l,u,c,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return rs(a,g,u)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(c+"").split(" "),d={},o.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,h)}});var B0={name:"css",register:su,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,s,n,r){var o=this._props,a=e.style,l=s.vars.startAt,u,c,h,f,d,g,p,_,w,y,m,b,v,x,k,R,S;th||su(),this.styles=this.styles||O0(e),R=this.styles.props,this.tween=s;for(p in i)if(p!=="autoRound"&&(c=i[p],!(Zt[p]&&_0(p,i,s,n,e,r)))){if(d=typeof c,g=Ma[p],d==="function"&&(c=c.call(s,n,e,r),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=lo(c)),g)g(this,e,p,c,s)&&(k=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),c+="",Fs.lastIndex=0,Fs.test(u)||(_=Ct(u),w=Ct(c),w?_!==w&&(u=Us(e,p,u,w)+w):_&&(c+=_)),this.add(a,"setProperty",u,c,n,r,0,0,p),o.push(p),R.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(s,n,e,r):l[p],bt(u)&&~u.indexOf("random(")&&(u=lo(u)),Ct(u+"")||u==="auto"||(u+=ai.units[p]||Ct(rs(e,p))||""),(u+"").charAt(1)==="="&&(u=rs(e,p))):u=rs(e,p),f=parseFloat(u),y=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),h=parseFloat(c),p in Vi&&(p==="autoAlpha"&&(f===1&&rs(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),Rs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Vi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),m=p in vs,m){if(this.styles.save(p),S=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=ri(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=c,c=ri(e,"perspective"),P?e.style.perspective=P:Bs(e,"perspective")}h=parseFloat(c)}if(b||(v=e._gsap,v.renderTransform&&!i.parseTransform||fo(e,i.parseTransform),x=i.smoothOrigin!==!1&&v.smooth,b=this._pt=new Kt(this._pt,a,Ze,0,1,v.renderTransform,v,0,-1),b.dep=1),p==="scale")this._pt=new Kt(this._pt,v,"scaleY",v.scaleY,(y?jn(v.scaleY,y+h):h)-v.scaleY||0,tu),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){R.push(Yt,0,a[Yt]),c=MT(c),v.svg?nu(e,c,0,x,0,this):(w=parseFloat(c.split(" ")[2])||0,w!==v.zOrigin&&Rs(this,v,"zOrigin",v.zOrigin,w),Rs(this,a,p,Aa(u),Aa(c)));continue}else if(p==="svgOrigin"){nu(e,c,1,x,0,this);continue}else if(p in L0){NT(this,v,p,f,y?jn(f,y+c):c);continue}else if(p==="smoothOrigin"){Rs(this,v,"smooth",v.smooth,c);continue}else if(p==="force3D"){v[p]=c;continue}else if(p==="transform"){DT(this,c,e);continue}}else p in a||(p=or(p)||p);if(m||(h||h===0)&&(f||f===0)&&!gT.test(c)&&p in a)_=(u+"").substr((f+"").length),h||(h=0),w=Ct(c)||(p in ai.units?ai.units[p]:_),_!==w&&(f=Us(e,p,u,w)),this._pt=new Kt(this._pt,m?v:a,p,f,(y?jn(f,y+h):h)-f,!m&&(w==="px"||p==="zIndex")&&i.autoRound!==!1?wT:tu),this._pt.u=w||0,m&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=yT):_!==w&&w!=="%"&&(this._pt.b=u,this._pt.r=vT);else if(p in a)CT.call(this,e,p,u,y?y+c:c);else if(p in e)this.add(e,p,u||e[p],y?y+c:c,n,r);else if(p!=="parseTransform"){ju(p,c);continue}m||(p in a?R.push(p,0,a[p]):typeof e[p]=="function"?R.push(p,2,e[p]()):R.push(p,1,u||e[p])),o.push(p)}}k&&R0(this)},render:function(e,i){if(i.tween._time||!ih())for(var s=i._pt;s;)s.r(e,s.d),s=s._next;else i.styles.revert()},get:rs,aliases:Vi,getSetter:function(e,i,s){var n=Vi[i];return n&&n.indexOf(",")<0&&(i=n),i in vs&&i!==Yt&&(e._gsap.x||rs(e,"x"))?s&&Wf===s?i==="scale"?kT:xT:(Wf=s||{})&&(i==="scale"?TT:ST):e.style&&!Hu(e.style[i])?bT:~i.indexOf("-")?_T:Zu(e,i)},core:{_removeProperty:Bs,_getMatrix:nh}};Xt.utils.checkPrefix=or;Xt.core.getStyleSaver=O0;(function(t,e,i,s){var n=Wt(t+","+e+","+i,function(r){vs[r]=1});Wt(e,function(r){ai.units[r]="deg",L0[r]=1}),Vi[n[13]]=t+","+e,Wt(s,function(r){var o=r.split(":");Vi[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ai.units[t]="px"});Xt.registerPlugin(B0);var z=Xt.registerPlugin(B0)||Xt;z.core.Tween;var LT=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,IT=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,zT=Math.PI/180,No=Math.sin,Do=Math.cos,qr=Math.abs,Sr=Math.sqrt,BT=function(e){return typeof e=="number"},id=1e5,_s=function(e){return Math.round(e*id)/id||0},sd=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001};function UT(t,e,i,s,n,r,o){for(var a=t.length,l,u,c,h,f;--a>-1;)for(l=t[a],u=l.length,c=0;c<u;c+=2)h=l[c],f=l[c+1],l[c]=h*e+f*s+r,l[c+1]=h*i+f*n+o;return t._dirty=1,t}function VT(t,e,i,s,n,r,o,a,l){if(!(t===a&&e===l)){i=qr(i),s=qr(s);var u=n%360*zT,c=Do(u),h=No(u),f=Math.PI,d=f*2,g=(t-a)/2,p=(e-l)/2,_=c*g+h*p,w=-h*g+c*p,y=_*_,m=w*w,b=y/(i*i)+m/(s*s);b>1&&(i=Sr(b)*i,s=Sr(b)*s);var v=i*i,x=s*s,k=(v*x-v*m-x*y)/(v*m+x*y);k<0&&(k=0);var R=(r===o?-1:1)*Sr(k),S=R*(i*w/s),P=R*-(s*_/i),A=(t+a)/2,M=(e+l)/2,D=A+(c*S-h*P),F=M+(h*S+c*P),O=(_-S)/i,C=(w-P)/s,L=(-_-S)/i,q=(-w-P)/s,ce=O*O+C*C,he=(C<0?-1:1)*Math.acos(O/Sr(ce)),fe=(O*q-C*L<0?-1:1)*Math.acos((O*L+C*q)/Sr(ce*(L*L+q*q)));isNaN(fe)&&(fe=f),!o&&fe>0?fe-=d:o&&fe<0&&(fe+=d),he%=d,fe%=d;var ae=Math.ceil(qr(fe)/(d/4)),ie=[],xe=fe/ae,pe=4/3*No(xe/2)/(1+Do(xe/2)),we=c*i,I=h*i,J=h*-s,X=c*s,ee;for(ee=0;ee<ae;ee++)n=he+ee*xe,_=Do(n),w=No(n),O=Do(n+=xe),C=No(n),ie.push(_-pe*w,w+pe*_,O+pe*C,C-pe*O,O,C);for(ee=0;ee<ie.length;ee+=2)_=ie[ee],w=ie[ee+1],ie[ee]=_*we+w*J+D,ie[ee+1]=_*I+w*X+F;return ie[ee-2]=a,ie[ee-1]=l,ie}}function HT(t){var e=(t+"").replace(IT,function(S){var P=+S;return P<1e-4&&P>-1e-4?0:P}).match(LT)||[],i=[],s=0,n=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+t,u,c,h,f,d,g,p,_,w,y,m,b,v,x,k,R=function(P,A,M,D){y=(M-P)/3,m=(D-A)/3,p.push(P+y,A+m,M-y,D-m,M,D)};if(!t||!isNaN(e[0])||isNaN(e[1]))return console.log(l),i;for(u=0;u<o;u++)if(v=d,isNaN(e[u])?(d=e[u].toUpperCase(),g=d!==e[u]):u--,h=+e[u+1],f=+e[u+2],g&&(h+=s,f+=n),u||(_=h,w=f),d==="M")p&&(p.length<8?i.length-=1:a+=p.length,sd(p)),s=_=h,n=w=f,p=[h,f],i.push(p),u+=2,d="L";else if(d==="C")p||(p=[0,0]),g||(s=n=0),p.push(h,f,s+e[u+3]*1,n+e[u+4]*1,s+=e[u+5]*1,n+=e[u+6]*1),u+=6;else if(d==="S")y=s,m=n,(v==="C"||v==="S")&&(y+=s-p[p.length-4],m+=n-p[p.length-3]),g||(s=n=0),p.push(y,m,h,f,s+=e[u+3]*1,n+=e[u+4]*1),u+=4;else if(d==="Q")y=s+(h-s)*r,m=n+(f-n)*r,g||(s=n=0),s+=e[u+3]*1,n+=e[u+4]*1,p.push(y,m,s+(h-s)*r,n+(f-n)*r,s,n),u+=4;else if(d==="T")y=s-p[p.length-4],m=n-p[p.length-3],p.push(s+y,n+m,h+(s+y*1.5-h)*r,f+(n+m*1.5-f)*r,s=h,n=f),u+=2;else if(d==="H")R(s,n,s=h,n),u+=1;else if(d==="V")R(s,n,s,n=h+(g?n-s:0)),u+=1;else if(d==="L"||d==="Z")d==="Z"&&(h=_,f=w,p.closed=!0),(d==="L"||qr(s-h)>.5||qr(n-f)>.5)&&(R(s,n,h,f),d==="L"&&(u+=2)),s=h,n=f;else if(d==="A"){if(x=e[u+4],k=e[u+5],y=e[u+6],m=e[u+7],c=7,x.length>1&&(x.length<3?(m=y,y=k,c--):(m=k,y=x.substr(2),c-=2),k=x.charAt(1),x=x.charAt(0)),b=VT(s,n,+e[u+1],+e[u+2],+e[u+3],+x,+k,(g?s:0)+y*1,(g?n:0)+m*1),u+=c,b)for(c=0;c<b.length;c++)p.push(b[c]);s=p[p.length-2],n=p[p.length-1]}else console.log(l);return u=p.length,u<6?(i.pop(),u=0):sd(p),i.totalPoints=a+u,i}function GT(t){BT(t[0])&&(t=[t]);var e="",i=t.length,s,n,r,o;for(n=0;n<i;n++){for(o=t[n],e+="M"+_s(o[0])+","+_s(o[1])+" C",s=o.length,r=2;r<s;r++)e+=_s(o[r++])+","+_s(o[r++])+" "+_s(o[r++])+","+_s(o[r++])+" "+_s(o[r++])+","+_s(o[r])+" ";o.closed&&(e+="z")}return e}var Gt,U0,V0=function(){return Gt||typeof window<"u"&&(Gt=window.gsap)&&Gt.registerPlugin&&Gt},nd=function(){Gt=V0(),Gt?(Gt.registerEase("_CE",dr.create),U0=1):console.warn("Please gsap.registerPlugin(CustomEase)")},$T=1e20,Lo=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},jT=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,qT=/[cLlsSaAhHvVtTqQ]/g,WT=function(e){var i=e.length,s=$T,n;for(n=1;n<i;n+=6)+e[n]<s&&(s=+e[n]);return s},KT=function(e,i,s){!s&&s!==0&&(s=Math.max(+e[e.length-1],+e[1]));var n=+e[0]*-1,r=-s,o=e.length,a=1/(+e[o-2]+n),l=-i||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?WT(e)+r:+e[o-1]+r),u;for(l?l=1/l:l=-a,u=0;u<o;u+=2)e[u]=(+e[u]+n)*a,e[u+1]=(+e[u+1]+r)*l},YT=function t(e,i,s,n,r,o,a,l,u,c,h){var f=(e+s)/2,d=(i+n)/2,g=(s+r)/2,p=(n+o)/2,_=(r+a)/2,w=(o+l)/2,y=(f+g)/2,m=(d+p)/2,b=(g+_)/2,v=(p+w)/2,x=(y+b)/2,k=(m+v)/2,R=a-e,S=l-i,P=Math.abs((s-a)*S-(n-l)*R),A=Math.abs((r-a)*S-(o-l)*R),M;return c||(c=[{x:e,y:i},{x:a,y:l}],h=1),c.splice(h||c.length-1,0,{x,y:k}),(P+A)*(P+A)>u*(R*R+S*S)&&(M=c.length,t(e,i,f,d,y,m,x,k,u,c,h),t(x,k,b,v,_,w,a,l,u,c,h+1+(c.length-M))),c},dr=(function(){function t(i,s,n){U0||nd(),this.id=i,this.setData(s,n)}var e=t.prototype;return e.setData=function(s,n){n=n||{},s=s||"0,0,1,1";var r=s.match(jT),o=1,a=[],l=[],u=n.precision||1,c=u<=1,h,f,d,g,p,_,w,y,m;if(this.data=s,(qT.test(s)||~s.indexOf("M")&&s.indexOf("C")<0)&&(r=HT(s)[0]),h=r.length,h===4)r.unshift(0,0),r.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[h-2]!=1)&&KT(r,n.height,n.originY),this.segment=r,g=2;g<h;g+=6)f={x:+r[g-2],y:+r[g-1]},d={x:+r[g+4],y:+r[g+5]},a.push(f,d),YT(f.x,f.y,+r[g],+r[g+1],+r[g+2],+r[g+3],d.x,d.y,1/(u*2e5),a,a.length-1);for(h=a.length,g=0;g<h;g++)w=a[g],y=a[g-1]||w,(w.x>y.x||y.y!==w.y&&y.x===w.x||w===y)&&w.x<=1?(y.cx=w.x-y.x,y.cy=w.y-y.y,y.n=w,y.nx=w.x,c&&g>1&&Math.abs(y.cy/y.cx-a[g-2].cy/a[g-2].cx)>2&&(c=0),y.cx<o&&(y.cx?o=y.cx:(y.cx=.001,g===h-1&&(y.x-=.001,o=Math.min(o,.001),c=0)))):(a.splice(g--,1),h--);if(h=1/o+1|0,p=1/h,_=0,w=a[0],c){for(g=0;g<h;g++)m=g*p,w.nx<m&&(w=a[++_]),f=w.y+(m-w.x)/w.cx*w.cy,l[g]={x:m,cx:p,y:f,cy:0,nx:9},g&&(l[g-1].cy=f-l[g-1].y);_=a[a.length-1],l[h-1].cy=_.y-f,l[h-1].cx=_.x-l[l.length-1].x}else{for(g=0;g<h;g++)w.nx<g*p&&(w=a[++_]),l[g]=w;_<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(b){var v=l[b*h|0]||l[h-1];return v.nx<b&&(v=v.n),v.y+(b-v.x)/v.cx*v.cy},this.ease.custom=this,this.id&&Gt&&Gt.registerEase(this.id,this.ease),this},e.getSVGData=function(s){return t.getSVGData(this,s)},t.create=function(s,n,r){return new t(s,n,r).ease},t.register=function(s){Gt=s,nd()},t.get=function(s){return Gt.parseEase(s)},t.getSVGData=function(s,n){n=n||{};var r=n.width||100,o=n.height||100,a=n.x||0,l=(n.y||0)+o,u=Gt.utils.toArray(n.path)[0],c,h,f,d,g,p,_,w,y,m;if(n.invert&&(o=-o,l=0),typeof s=="string"&&(s=Gt.parseEase(s)),s.custom&&(s=s.custom),s instanceof t)c=GT(UT([s.segment.slice(0)],r,0,0,-o,a,l));else{for(c=[a,l],_=Math.max(5,(n.precision||1)*200),d=1/_,_+=2,w=5/_,y=Lo(a+d*r),m=Lo(l+s(d)*-o),h=(m-l)/(y-a),f=2;f<_;f++)g=Lo(a+f*d*r),p=Lo(l+s(f*d)*-o),(Math.abs((p-m)/(g-y)-h)>w||f===_-1)&&(c.push(y,m),h=(p-m)/(g-y)),y=g,m=p;c="M"+c.join(",")}return u&&u.setAttribute("d",c),c},t})();dr.version="3.15.0";dr.headless=!0;V0()&&Gt.registerPlugin(dr);let Qs=null;const rd=new Map,H0=t=>{let e=rd.get(t);if(e)return e;if(!Qs){const s=document.createElement("canvas");s.width=s.height=1,Qs=s.getContext("2d",{willReadFrequently:!0})}if(!Qs)return[1,1,1,1];Qs.clearRect(0,0,1,1),Qs.fillStyle=t,Qs.fillRect(0,0,1,1);const i=Qs.getImageData(0,0,1,1).data;return e=[i[0]/255,i[1]/255,i[2]/255,i[3]/255],rd.set(t,e),e},XT=(t,e)=>{let i=t.get(e);if(i===void 0){const s=getComputedStyle(e),n=H0(s.color);i={size:parseFloat(s.fontSize),lh:parseFloat(s.lineHeight)||parseFloat(s.fontSize)*1.2,color:n,upper:s.textTransform==="uppercase"},t.set(e,i)}return i};function QT(t,e){const i=[];let s=0;const n=t.getBoundingClientRect(),r=new Map,o=document.createRange(),a=new Map,l=(h,f,d)=>{const g=Math.round(h);let p=a.get(g);if(!p){const _=(e.ascent+e.descent)*f,w=h-e.ascent*f-(d-_)/2;p={top:w,bottom:w+d,i:a.size},a.set(g,p)}return p},u=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);let c=0;for(let h=u.nextNode();h;h=u.nextNode()){const f=h.data,d=h.parentElement;if(!d)continue;const{size:g,lh:p,color:_,upper:w}=XT(r,d);for(let y=0;y<f.length;y++){const m=f.codePointAt(y),b=m>65535?2:1;if(m<=32||m===160){y+=b-1;continue}const v=e.glyph(w?String.fromCodePoint(m).toUpperCase().codePointAt(0)??m:m);if(y+=b-1,!v||!v.n){s++,c++;continue}o.setStart(h,y-b+1),o.setEnd(h,y+1);const x=o.getClientRects()[0];if(!x)continue;const k=x.top-n.top+Math.round(e.ascent*g);i.push({glyph:v,x:x.left-n.left,y:k,size:g,i:c++,color:_,line:l(k,g,p)})}}return o.detach(),{placed:i,missing:s}}const tn=[[.05,.85,.25],[.9,.14,.1],[.16,.1,.92],[.62,.16,.9]],od=t=>`vec3f(${t.map(e=>e.toFixed(3)).join(", ")})`,G0=`
	fn inkStop(i: u32) -> vec3f {
		switch i {
${tn.slice(0,-1).map((t,e)=>`			case ${e}u: { return ${od(t)}; }`).join(`
`)}
			default: { return ${od(tn[tn.length-1])}; }
		}
	}

	fn inkAt(pos: vec2f) -> vec3f {
		if (c.tint.w <= 0.0) { return c.ink.rgb; }

		let t = fract(length(pos - vp.size * 0.5) / max(c.tint.y, 1.0) - c.tint.x) * ${tn.length}.0;
		let i = u32(floor(t)) % ${tn.length}u;
		let k = fract(t);
		let e = k * k * (3.0 - 2.0 * k);

		return mix(c.ink.rgb, mix(inkStop(i), inkStop((i + 1u) % ${tn.length}u), e), c.tint.w);
	}
`,ad=128,ld=128,$0=`
	const FLANK_DEPTH = 0.75;
	const FLANK_REACH = 1.0;

	fn flankShade(pt: vec2f) -> f32 {
		let ra = max(c.axis, 0.0001) * max(c.mode.w, 1.0);
		let u = (pt.x - c.pole.x) / ra + c.rot;

		return mix(1.0 - FLANK_DEPTH, 1.0, smoothstep(0.0, FLANK_REACH, cos(u)));
	}
`,JT=`
	struct VP {
		size: vec2f,
		dpr: f32,
		pad: f32,
	}

	struct Curve {
		pole: vec2f,
		axis: f32,
		rot: f32,
		conform: f32,
		period: f32,
		fadeIn: f32,
		fadeOut: f32,
		ink: vec4f,
		view: vec4f,   /* travel, zoomT, panXT, panYT — see dom/shaders */
		focus: vec4f,  /* fx, fy, spread, dir */
		mode: vec4f,   /* x: flatten weight — see dom/shaders */
		tint: vec4f,   /* the ink's palette rings — see gpu/ink */
	}

	struct F {
		rect: vec4f,  /* the mesh box — css px */
		lat: vec4f,   /* meridian step, outermost meridian, ring step, half-width px */
		col: vec4f,   /* rgb, alpha */
		opt: vec4f,   /* ring strength, clipOn, unused, unused */
		clip: vec4f,  /* the box this is cut to — css px */
		clip2: vec4f, /* clip radius px, outline 0..1, unused, unused */
	}

	@group(0) @binding(0) var<uniform> vp: VP;
	@group(0) @binding(1) var<uniform> c: Curve;
	@group(0) @binding(2) var<uniform> f: F;
	/* the pointer fluid's dye field — screen-space ink. The lattice is the
	   ONLY consumer: lines run hot where the ink flows (see fs). A 1x1
	   transparent blank stands in when the sim is cold. */
	@group(0) @binding(3) var dye: texture_2d<f32>;
	@group(0) @binding(4) var dyeSamp: sampler;

	${G0}

	${$0}

	struct VOut {
		@builtin(position) pos: vec4f,
		/* the FLAT position, before the pinch. The fragment draws a plain
		   rectilinear lattice from it — evenly spaced verticals and
		   horizontals — and the pinch is what turns those into the comp's
		   half-ellipse meridians and straight rings.

		   Drawing it pre-warp rather than solving the ellipse in the fragment
		   is the whole reason the tiles cannot drift off it: this is the same
		   function they take, so the grid is a picture of the surface rather
		   than a second opinion about it. */
		@location(0) flat: vec2f,
		@location(1) fade: f32,
		/* the flanks' light — see flank; gone as the world flattens */
		@location(2) shade: f32,
	}

	/* the SAME centred sphere the tiles ride — see dom/shaders for the
	   derivation. Orthographic, arc length from the centre, straight rows,
	   meridian ellipses converging at both poles, z the facing. */
	fn sphere(pt: vec2f) -> vec3f {
		let r = max(c.axis, 0.0001);
		let ra = r * max(c.mode.w, 1.0);

		let u = (pt.x - c.pole.x) / ra + c.rot;
		let v = (pt.y - c.pole.y) / ra;

		let cv = cos(v);

		return vec3f(
			c.pole.x + r * cv * sin(u),
			c.pole.y + r * sin(v),
			cv * cos(u),
		);
	}

	override SX: u32 = 2u;
	override SY: u32 = 192u;

	@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
		var CORNER = array<vec2f, 6>(
			vec2f(0.0, 0.0), vec2f(1.0, 0.0), vec2f(0.0, 1.0),
			vec2f(0.0, 1.0), vec2f(1.0, 0.0), vec2f(1.0, 1.0),
		);

		let cell = i / 6u;
		let at = vec2f(f32(cell % SX), f32(cell / SX));
		let uv = (at + CORNER[i % 6u]) / vec2f(f32(SX), f32(SY));

		let px = f.rect.xy + uv * f.rect.zw;

		let s = sphere(px);

		/* the world transform — flatten toward layout, zoom about the
		   focus, pan; the lattice rides the GLOBAL clock (no stagger),
		   eased here (the raw clock arrives linear — see dom/shaders) */
		var wu = 1.0 - pow(1.0 - clamp(c.view.x, 0.0, 1.0), 2.8);
		if (c.focus.w < 0.5) { wu = pow(clamp(c.view.x, 0.0, 1.0), 2.8); }
		wu = mix(wu, clamp(c.view.x, 0.0, 1.0), c.mode.y);
		let g = mix(s.xy, px, wu * c.mode.x);
		let z = 1.0 + (c.view.y - 1.0) * wu;
		let w = c.focus.xy + (g - c.focus.xy) * z + c.view.zw * wu;

		var o: VOut;
		o.pos = vec4f(w / vp.size * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0), 0.0, 1.0);
		o.flat = px;
		/* per VERTEX, unlike a tile's per-object fade: the grid IS the field,
		   so it dims across its own surface — and it runs almost to the rim,
		   its own window, not the tiles': the pictures dissolve early (their
		   knobs), the lattice is what carries the ball's SHAPE to the edge */
		o.fade = smoothstep(0.0, 0.05, mix(s.z, 1.0, c.view.x));
		o.shade = mix(flankShade(px), 1.0, wu * c.mode.x);
		return o;
	}

	fn roundBox(pt: vec2f, b: vec2f, r: f32) -> f32 {
		return length(max(abs(pt) - b + vec2f(r), vec2f(0.0))) - r;
	}

	/*
	 * One line family, antialiased against its own screen-space derivative.
	 *
	 * fwidth is why the grid is drawn here rather than as line geometry.
	 * Toward the pole the meridians crowd into almost no pixels, so a
	 * fixed-width line would collapse to a shimmer; the derivative grows in
	 * the same proportion, so the ramp always spans the same number of pixels
	 * however hard they are squeezing.
	 */
	fn lines(x: f32, w: f32) -> f32 {
		let d = abs(fract(x - 0.5) - 0.5);
		let width = fwidth(x);

		/* Coverage, not a gradient. smoothstep(0, w*f, d) spends the ENTIRE
		   line width on its ramp, so a hairline is all falloff and no core
		   and reads as a smudge however much alpha is thrown at it.

		   d/width is the distance in PIXELS, so this is "how much of this
		   pixel the line covers": solid through the middle, one pixel of ramp
		   at the edge, and w is honestly a half-width in pixels rather than a
		   vague softness. */
		let a = clamp(w - d / width + 0.5, 0.0, 1.0);

		/* Below about a pixel per cell the family is no longer a thing that
		   can be drawn — every fragment reads as being on a line and it
		   washes to solid exactly where it should be dissolving — so it is
		   faded out instead. */
		return a * (1.0 - smoothstep(0.6, 1.8, width));
	}

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		let x = in.flat.x - f.opt.w;

		/* Half a step of ramp, so the outermost meridian ends rather than
		   being cut off mid-stroke. */
		let inside = 1.0 - smoothstep(f.lat.y - f.lat.x * 0.5, f.lat.y + f.lat.x * 0.5, abs(x));

		let meridian = lines(x / max(f.lat.x, 0.0001), f.lat.w) * inside;
		let ring = lines((in.flat.y - f.opt.z) / max(f.lat.z, 0.0001), f.lat.w) * f.opt.x;

		/* Combined as COVERAGE — 1 - (1-a)(1-b) — which is what two
		   overlapping strokes actually do. A max() leaves the crossings
		   visibly thin. */
		var cover = (1.0 - (1.0 - meridian) * (1.0 - ring)) * in.shade;
		var face = in.fade;

		/*
		 * The OUTLINE — the limb, the ball's silhouette, as one more family.
		 *
		 * Nothing above draws the edge of the ball. The rings run out to it
		 * and stop, and it only shows where a meridian happens to be turning
		 * over it, so on the small Contact globe the ring ends hang in the
		 * air as it spins. This is that circle, in the lattice's own ink,
		 * weight and ramp, folded in as coverage like the other two — a ring
		 * ending on it is a crossing like any other, not a stroke laid over a
		 * stroke, which would light a brighter dot at every joint.
		 *
		 * Measured in device px from the fragment's own position rather than
		 * from flat: out at the rim the mesh is sub-pixel slivers, and a
		 * varying interpolated across them is not to be trusted. Laid just
		 * INSIDE the limb, its outer ramp ending exactly at r, because the
		 * mesh stops at the limb and a line centred on it would be cut in
		 * half by its own edge. Not faded by the facing (zero at the rim by
		 * definition) nor by crowding (a circle does not crowd).
		 *
		 * A uniform branch: at 0 — everywhere but a settled corner — the
		 * wall's path is exactly what it was.
		 */
		if (f.clip2.y > 0.0) {
			let rim = length(in.pos.xy - c.pole * vp.dpr) - c.axis * vp.dpr + f.lat.w + 0.5;
			let limb = clamp(f.lat.w - abs(rim) + 0.5, 0.0, 1.0) * f.clip2.y;

			cover = 1.0 - (1.0 - cover * in.fade) * (1.0 - limb);
			face = 1.0;
		}

		var alpha = cover * f.col.a * face;

		/* the ink: where the fluid's dye runs, the lines turn RED and lift
		   toward full strength — the distortion field made visible through
		   the lattice alone. Sampled in screen uv, the dye's own space. */
		let ink = textureSample(dye, dyeSamp, in.pos.xy / vp.dpr / vp.size).rgb;
		let amt = clamp(max(ink.r, max(ink.g, ink.b)) * 3.2, 0.0, 1.0);

		var rgb = mix(f.col.rgb, inkAt(in.pos.xy / vp.dpr), amt);
		alpha = mix(alpha, cover * face, amt * 0.85);

		/* the loader's hush: sunk wherever the ink is not — see Field.hush */
		alpha *= 1.0 - c.ink.a * (1.0 - amt);

		if (f.opt.y > 0.5) {
			let half = f.clip.zw * 0.5;
			let d = roundBox(in.pos.xy / vp.dpr - f.clip.xy - half, half, f.clip2.x);
			alpha *= 1.0 - smoothstep(0.0, 1.5, d);
		}

		/* the DETAIL takes the whole lattice out, ink and all — col.a
		   already carries (1 - travel), but the ink term above mixes toward
		   a full-strength line wherever the dye flows, and a pointer over
		   the sheets kept lighting the globe's grid up beneath them */
		alpha *= 1.0 - clamp(c.view.x, 0.0, 1.0);

		return vec4f(rgb * alpha, alpha);
	}
`,ZT="#181616",eS="#FFFDDB",tS="#FF3831",iS="#46443D",Wr={ground:ZT,ink:eS,accent:tS,line:iS},Mt=t=>{const e=Wr[t];return[1,3,5].map(i=>parseInt(e.slice(i,i+2),16)/255)},Ln=256/4,ru=60,j0=240,Oa=24,ou=64,sS=`
	struct VP {
		size: vec2f,
		dpr: f32,
		pad: f32,
	}

	/*
	 * The globe, in css px — see gpu/field. Shared by every pipeline that
	 * poses against the page, because the grid and the pictures on it have to
	 * be evaluating one function: the lattice is a PICTURE of this, not a
	 * second opinion about it.
	 */
	struct Curve {
		pole: vec2f,   /* the sphere's CENTRE, px — flat anchor and screen anchor */
		axis: f32,     /* R — the sphere's radius, px */
		rot: f32,      /* the drag's spin — longitude offset, radians */
		conform: f32,  /* 0 a rigid picture, 1 fully plastered to the surface */
		period: f32,   /* content's own period around the ball, px — 0 = no wrap */
		fadeIn: f32,   /* facing where a cell starts to exist */
		fadeOut: f32,  /* facing where it is fully there */
		ink: vec4f,    /* the fluid's live colour — the palette's current stop */
		/* the WORLD transform — the detail transition, as TARGETS plus one
		   clock. view.x is the travel (0 ball, 1 landed), view.y the target
		   zoom, view.zw the target pan; focus.xy the zoom's fixed point,
		   focus.z the stagger spread — each tile lags the clock by its
		   distance from the focus, everyone arriving together at 1, so the
		   flight ripples outward from the click and every landing is exact. */
		view: vec4f,   /* travel, zoomT, panXT, panYT */
		focus: vec4f,  /* fx, fy, spread, dir */
		/* mode.x: how much of the clock FLATTENS the sphere (1 the deep
		   link's landed state, 0 the lift). mode.y: raw clock — gsap owns
		   the easing. mode.z: the wrap's rotation term in px against the
		   STABLE radius, so copy-picking never flips during the lift's
		   radius animation. mode.w: the miniature — how much larger the
		   radius the angles are measured against is than the one drawn
		   (0 or 1: the same; see Field.mini). */
		mode: vec4f,
		tint: vec4f,   /* the ink's palette rings — see gpu/ink */
	}

	struct P {
		rect: vec4f,   /* left, top, width, height — css px */
		tex: vec4f,    /* natural w, natural h, radius px, alpha */
		fx: vec4f,     /* dim, curve, shift, scroll */
		win: vec4f,    /* colour window: pos xy, size xy — element px */
		flags: vec4f,  /* winOn, clipOn, inked, spin 0..1 (angle / pi) */
		custom: vec4f, /* material extension slot */
		clip: vec4f,   /* the box this plane is cut to — css px */
		clip2: vec4f,  /* clip radius px, streak x, streak y, the CUT's bow */
		/*
		 * The bow: x is how far this plane's BOTTOM edge lags its top, px.
		 *
		 * Anchored at the top of the VIEWPORT — the profile leaves the top
		 * tangent to its anchor and reaches the full lag at the foot of the
		 * screen — so a panel hangs from its head and the bottom drags in
		 * behind it, rather than bending about its middle. The sign is free:
		 * negative leads instead of lagging, which is what a spring's
		 * overshoot does with it.
		 *
		 * y is the CUT's feather: how many px the cut fades over at its top
		 * and bottom edges, so a panel's copy dissolves into its own ground
		 * at both ends of the scroll rather than being sliced off. Nothing to
		 * do with the bow; it rides here because this is the vector with room
		 * left in it, and both are properties of the cut.
		 *
		 * z is a ground's rim on every edge but the bottom one — see
		 * groundFrag, and Plane's u.rim for why the head wants it.
		 *
		 * w is the PRESS: the quad drawn about its own centre at this scale.
		 * Paint only, never layout — see Plane's u.scale.
		 *
		 * Keyed to the SCREEN and not to each plane's own box, so that two
		 * planes making up one surface — a full-height ground and the band
		 * of it that sits behind the header, say — bend along the same curve
		 * and meet without a seam. A profile measured per plane would give
		 * the taller one a gentler bend and the two would part company
		 * wherever they touched.
		 */
		bow: vec4f,
		/*
		 * The press, as a place rather than an amount.
		 *
		 * xy is where the finger went down, in this plane's own box, 0..1 —
		 * the centre at rest, which is why every plane that has never been
		 * touched behaves exactly as it did when the press was a plain shrink.
		 *
		 * z is the REACH: how far the dent carries, as a fraction of the
		 * box's shorter side. A pill pressed at one end should barely trouble
		 * the other, and stating the reach against the short side rather than
		 * the long one is what makes a wide control behave like a narrow one
		 * under the same finger.
		 *
		 * The amount still lives in bow.w. This says where it lands.
		 */
		press: vec4f,
		/*
		 * A drawn MARK in a ground — the close X, jesper-folio's, stroke for
		 * stroke (see groundFrag). x is the stroke leaving (0 in place, 1
		 * gone), y the one arriving (0 outside, 1 landed), z the weight in css
		 * px, w on. markC is its ink.
		 */
		mark: vec4f,
		markC: vec4f,
		/* a ground's fluid wash: x how far the pointer fluid's dye turns it
		   white, 0 off — see groundFrag */
		wash: vec4f,
		/* the sheet column's depth: the screen's lower half bent as if
		   seen from inside a torus — xy the centre of the screen, z the
		   bend, w the lower half's height and front.x the horizontal
		   radius (the wider it is, the flatter the bend sideways).
		   front.yzw is a sheet's exit, applied first: the whole picture
		   scaled about (y, z) by 1 + w, so a sheet on its way out still
		   bends with the rest. */
		lift: vec4f,
		front: vec4f,
	}

	@group(0) @binding(0) var<uniform> vp: VP;
	@group(0) @binding(1) var samp: sampler;
	@group(0) @binding(2) var vsamp: sampler;
	@group(0) @binding(3) var<uniform> c: Curve;
	/* the pointer fluid's dye — the mask the ink shows through. A 1x1
	   transparent blank while the sim is cold. */
	@group(0) @binding(4) var dye: texture_2d<f32>;
	@group(0) @binding(5) var dyeSamp: sampler;

	${G0}

	${$0}

	@group(1) @binding(0) var<uniform> p: P;

	/* how much the deepest point of a press darkens, 0..1 — see finish() */
	const DENT_SHADE = 1.25;

	/* the page's own ground — what a plane's dim fades it into, so a fully
	   dimmed picture is the page and not a black hole in it */
	const GROUND = vec3f(${Mt("ground").map(t=>t.toFixed(4)).join(", ")});

	struct VOut {
		@builtin(position) pos: vec4f,
		@location(0) uv: vec2f,
		/* the surface's own dimming, read at the plane's CENTRE so a tile
		   dims as one object instead of wiping across itself at the limb */
		@location(1) fade: f32,
		/* which face the viewer sees: +1 front, -1 back — cos of the spin.
		   The fragment mirrors the picture on the way through the back. */
		@location(2) side: f32,
		/* how deep into the press this fragment sits, 0 at rest and at the
		   rim, most under the finger. The geometry gives here; this is what
		   lets the PAINT give with it — a hollow that does not darken reads
		   as a wobble rather than a dent. See finish(). */
		@location(3) dent: f32,
		/* the ball's light on a plane riding it, per vertex so a tile on a
		   flank darkens across itself like the surface under it — see
		   field/shaders' flank. 1 for anything off the ball. */
		@location(4) shade: f32,
	}

	/*
	 * A REAL sphere in orthographic projection, CENTRED — you stand square
	 * in front of a huge ball and see its front face fill the frame.
	 *
	 * The page wraps onto it by ARC LENGTH from the centre (layout spacing
	 * is surface distance, so rows stay evenly spaced ON the ball):
	 *
	 *   u = (x - cx) / R             v = (y - cy) / R
	 *   X = cx + R·cos v·sin u       Y = cy + R·sin v
	 *
	 * Rows stay dead straight (a latitude projects to a horizontal line) and
	 * compress toward the top and bottom silhouettes; columns are meridian
	 * ellipses converging toward both poles. At the centre the map is the
	 * identity — full size, no distortion — and everything outward is the
	 * patch turning away from the eye. Compression along the view direction
	 * is depth, not damage — why tiles travel instead of stretching.
	 *
	 * z is the FACING — the surface normal's component toward the viewer,
	 * cos u·cos v. 1 dead centre, 0 at the silhouette, negative behind; the
	 * fade dissolves cells as they roll past the rim.
	 */
	fn sphere(pt: vec2f) -> vec3f {
		let r = max(c.axis, 0.0001);
		let ra = r * max(c.mode.w, 1.0);

		let u = (pt.x - c.pole.x) / ra + c.rot;
		let v = (pt.y - c.pole.y) / ra;

		let cv = cos(v);

		return vec3f(
			c.pole.x + r * cv * sin(u),
			c.pole.y + r * sin(v),
			cv * cos(u),
		);
	}

	/* the flight's ease, in-shader — because each tile runs the WHOLE
	   curve over its own duration. Easing on the CPU and rescaling per
	   tile chopped the curve mid-slope: compressed tiles crossed 1 still
	   moving and the clamp read as a smash. The clock arrives RAW
	   (tween ease 'none'); this is the only easing there is. */
	fn easeT(t: f32) -> f32 {
		/* 2.8: soft enough that the tail's motion stays VISIBLE — at 3.5
		   every tile looked settled long before its clock ended and the
		   stagger read as nothing. mode.y bypasses the in-shader ease
		   entirely: the LIFT tweens the clock with gsap so the world can
		   share the planes' exact curve. */
		return mix(1.0 - pow(1.0 - t, 2.8), t, c.mode.y);
	}

	/* a tile's own clock: the nearer the click, the FASTER the flight —
	   the nearest tile's full ease compresses into the front of the raw
	   clock (lands early, softly), the farthest runs the whole ride and
	   finishes exactly with the globe. focus.w is the direction: flying
	   home mirrors the curve, so both legs leave fast and land soft. */
	fn stag(mid: vec2f) -> f32 {
		let near = 1.0 - clamp(distance(mid, c.focus.xy) / max(vp.size.x, vp.size.y), 0.0, 1.0);
		let lag = near * c.focus.z;

		if (c.focus.w > 0.5) {
			return easeT(clamp(c.view.x / max(1.0 - lag, 0.0001), 0.0, 1.0));
		}

		return 1.0 - easeT(clamp((1.0 - c.view.x) / max(1.0 - lag, 0.0001), 0.0, 1.0));
	}

	/* the GLOBAL clock — the lattice's, and the slowest tile's */
	fn worldU() -> f32 {
		if (c.focus.w > 0.5) { return easeT(clamp(c.view.x, 0.0, 1.0)); }
		return 1.0 - easeT(clamp(1.0 - c.view.x, 0.0, 1.0));
	}

	/* the flatten at progress u: the sphere's answer eased toward pure
	   layout — and the fade solidifies with it (a flat page has nothing
	   turning away) */
	fn ground(pt: vec2f, u: f32) -> vec3f {
		let s = sphere(pt);
		return vec3f(mix(s.xy, pt, u), mix(s.z, 1.0, u));
	}

	/* the zoom at progress u: one similarity — scale about the focus,
	   then pan — interpolated from the identity to the targets */
	fn viewMap(pt: vec2f, u: f32) -> vec2f {
		let z = 1.0 + (c.view.y - 1.0) * u;
		return c.focus.xy + (pt - c.focus.xy) * z + c.view.zw * u;
	}

	/* the GLOBAL path — the lattice and anything without a tile of its
	   own rides the unstaggered clock */
	fn curve(pt: vec2f) -> vec2f {
		let u = worldU();
		return viewMap(ground(pt, u * c.mode.x).xy, u);
	}

	/*
	 * The same surface, for a PICTURE.
	 *
	 * sphere() per vertex is what PLASTERS a thing to the surface: every
	 * point lands exactly where the projection says, so a tile's edges hug
	 * the meridians and rings and it cannot disagree with the lattice
	 * anywhere. The other end is RIGID: the projection sampled once at the
	 * centre, its local scale (the facing — uniform there) applied whole,
	 * no bend. conform blends between them.
	 */
	fn curvePlane(pt: vec2f, mid: vec2f) -> vec2f {
		let u = stag(mid);
		let uf = u * c.mode.x;
		let full = viewMap(ground(pt, uf).xy, u);

		let at = ground(mid, uf);
		let s = max(at.z, 0.0);
		let z = 1.0 + (c.view.y - 1.0) * u;

		return mix(viewMap(at.xy, u) + (pt - mid) * s * z, full, c.conform);
	}

	/* the cell's facing at this point — what the fade reads; the same
	   staggered clock as the tile it belongs to */
	fn facing(pt: vec2f) -> f32 {
		return ground(pt, stag(pt) * c.mode.x).z;
	}

	/* dims as the surface turns away — 1 square-on, gone at the rim */
	fn curveFade(face: f32) -> f32 {
		return smoothstep(c.fadeIn, c.fadeOut, face);
	}

	/*
	 * How finely the quad is diced. 1 for a flat plane (two triangles, the
	 * same draw the layer has always issued); SEG for one riding the globe,
	 * which needs something to deform. Pipeline-overridable, so both come out
	 * of one shader module and cannot drift apart.
	 */
	override SEG: u32 = 1u;

	/*
	 * One quad from the vertex index, triangle-list, diced SEG × SEG. uv is
	 * top-left origin — the same frame the rect, the window and the texture
	 * all live in.
	 */
	@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
		var CORNER = array<vec2f, 6>(
			vec2f(0.0, 0.0), vec2f(1.0, 0.0), vec2f(0.0, 1.0),
			vec2f(0.0, 1.0), vec2f(1.0, 0.0), vec2f(1.0, 1.0),
		);

		let cell = i / 6u;
		let seg = f32(SEG);
		let at = vec2f(f32(cell % SEG), f32(cell / SEG));

		let uv = (at + CORNER[i % 6u]) / seg;

		/* the press — the quad about its own centre, layout untouched. The
		   uv still spans the whole quad, so the corner SDF (and with it the
		   radius, and a ground's rim) comes along at the same scale. */
		/*
		 * ── The press: a dent, not a shrink ──
		 *
		 * It used to scale the whole quad about its centre, which is the one
		 * thing a real surface does not do — press a soft panel anywhere and
		 * it gives WHERE YOU PRESSED, most under the finger and less the
		 * further out you look.
		 *
		 * So every vertex is drawn toward the press point instead, by the
		 * press amount times a gaussian falloff in that point's distance. At
		 * the point itself there is nothing to move (the vertex IS the point);
		 * a reach away the pull has all but gone. Contracting toward a point
		 * is what a dip reads as once it is flattened into two dimensions.
		 *
		 * The uv is untouched and still spans the whole quad, so the corner
		 * SDF — the radius, a ground's rim — deforms WITH the mesh rather
		 * than sliding across it.
		 *
		 * A press needs vertices to bend; see the tier in Planes.drawQuadsInto,
		 * which dices anything being pressed. At rest the amount is zero and
		 * this is one compare per vertex.
		 */
		let s = select(1.0, p.bow.w, p.bow.w > 0.0001);

		var px = p.rect.xy + uv * p.rect.zw;

		/* how far this vertex is drawn in, and how deep it therefore sits —
		   one falloff, spent twice: once on the geometry here and once on the
		   shade in finish(), so the hollow and its shadow cannot disagree */
		var dip = 0.0;

		/* negative on the way back: the release swells past 1 (see
		   CHOREO.press.release), and the hollow overshoots with it into a
		   slight BULGE — the same falloff pushing out instead of in. finish()
		   only shades the hollow. */
		let give = (1.0 - s) * max(p.press.w, 0.0);

		if (abs(give) > 0.0001) {
			let anchor = p.rect.xy + clamp(p.press.xy, vec2f(0.0), vec2f(1.0)) * p.rect.zw;
			let reach = max(min(p.rect.z, p.rect.w) * max(p.press.z, 0.05), 1.0);
			let d = distance(px, anchor) / reach;

			dip = exp(-d * d);
			px = mix(px, anchor, give * dip);
		}

		var fade = 1.0;
		var shade = 1.0;

		/* riding the globe, or lying flat on the page — and every value
		   BETWEEN: fx.y is a continuous plaster amount now, tweened through
		   a flight so a plane UNWRAPS off the ball mid-air (and re-wraps
		   coming home). The curved half of the blend reads the LIVE wrap
		   and rotation, so a ball spun during the flight carries — or
		   catches — the tile at its true, current place. */
		let amt = clamp(p.fx.y, 0.0, 1.0);

		if (amt > 0.0001) {
			let raw = px;

			/*
			 * A FLIGHT plasters a FROZEN quad — its takeoff rect going out,
			 * its destination coming home (custom carries it; the wrap and
			 * rotation stay live, so a turning ball still hands off and
			 * catches truly). Plastering the MOVING spring rect instead
			 * pulled the visual through the element's far-off flat position
			 * mid-blend — the U-turn. The spring flies the straight line;
			 * the frozen plaster is only where the curve lives.
			 */
			var mid = p.rect.xy + p.rect.zw * 0.5;
			if (p.custom.w > 0.5) {
				mid = p.custom.xy + p.custom.zw * 0.5;
				px = p.custom.xy + uv * p.custom.zw;
			}

			/*
			 * The takeoff SLIDE: before the peel owns the flight, the tile
			 * travels ALONG the sphere — a flat-space push up the surface,
			 * exactly the motion a scrolling row makes — peaking early and
			 * handing off as the turn takes over. Applied pre-plaster so
			 * the path hugs the ball, and to mid too so the fade dims it
			 * over the crest like any travelling row.
			 */
			if (p.flags.w > 0.0001) {
				let t = p.flags.w;
				var spanF = p.rect.w;
				if (p.custom.y > 0.5) { spanF = p.custom.y * p.rect.w; }

				let slide = 1.1 * spanF * sin(3.14159265 * t) * pow(1.0 - t, 1.6);

				mid.y -= slide;
				px.y -= slide;
			}

			/*
			 * The wrap that makes the ball FULLY spinnable. Content covers a
			 * fixed arc of longitude; every row repeats with its own period
			 * (the page pads the seam gap-true), so each tile has a copy at
			 * every whole period around the circle — and the one drawn is
			 * whichever currently sits nearest the front. A tile carried past
			 * the rim by the spin re-enters from the other side as its next
			 * copy, seamlessly: the period is a whole number of lattice
			 * steps, so the copy lands on the same gridlines it left.
			 */
			if (c.period > 0.5) {
				let k = round((mid.x - c.pole.x + c.mode.z) / c.period);
				let dx = k * c.period;

				mid.x -= dx;
				px.x -= dx;
			}

			/* fade read at the TOP-CENTRE, not the middle: the clip shears a
			   tile's top edge first, and a mid-read window lags it by half a
			   tile of travel — alpha had to reach zero only after the shear
			   had already begun. The leading edge is what must be dead. */
			var cf = curveFade(facing(vec2f(mid.x, p.rect.y)));

			/* the FIRST fold is the only real one. On a viewport where the
			   content period exceeds the full circle (narrow panes, phones),
			   a wrapped copy can land beyond 3pi/2 of longitude — where the
			   facing turns positive AGAIN and a mirrored ghost passes the
			   fade. Hard window on |longitude|: nothing past the sphere's
			   own edge draws, whatever the facing claims. */
			let uw = abs((mid.x - c.pole.x) / max(c.axis * max(c.mode.w, 1.0), 0.0001) + c.rot);
			cf *= 1.0 - smoothstep(1.62, 1.75, uw);

			/* a flying tile dims with the surface while it slides, then
			   pulls up to full as the peel takes it off the ball */
			cf = max(cf, smoothstep(0.08, 0.3, p.flags.w));

			/* the flanks' light, at this vertex — released by the flatten
			   like the facing, and pulled up to full by the peel like the
			   fade, so nothing leaves the ball still in its shadow */
			let lit = max(mix(flankShade(px), 1.0, stag(mid) * c.mode.x), smoothstep(0.08, 0.3, p.flags.w));

			/* the blend: fully plastered at 1, the raw spring rect at 0 —
			   the flight IS the unwrap. The fade releases with it: a plane
			   half off the ball is half exempt from the surface's dimming. */
			fade = mix(1.0, cf, amt);
			shade = mix(1.0, lit, amt);
			px = mix(raw, curvePlane(px, mid), amt);
		}

		/*
		 * The FLIP IS THE WARP. No rotation term exists: a roll-front (a
		 * cylinder of radius r) enters at the sheet's TOP edge and travels
		 * down through the material on the flight's clock. Whatever the
		 * front has passed has wrapped over it — toward the viewer, then
		 * flat again, reversed. The sheet flips because the WAVE visits
		 * it; takeoff is the front entering, the landing is the front
		 * finishing its run through the last of the material. Piecewise,
		 * arc-length true:
		 *
		 *   q = F - m          (how far the front has passed this point)
		 *   q <= 0      flat            d' = m           z = 0
		 *   q <  pi r   on the roll     d' = F - r sin(q/r)   z = r(1-cos)
		 *   q >= pi r   flipped flat    d' = 2F - m - pi r    z = 2r
		 *
		 * The GROUP frame (custom slot) makes the six tiles one sheet with
		 * one front; the centre's own displacement is subtracted, so the
		 * springs keep the travel and the wave keeps the shape. A z lens
		 * gives the wrapped material its perspective.
		 */
		var side = 1.0;

		if (p.flags.w > 0.0001) {
			let t = p.flags.w;
			let h = p.rect.w;

			var sUp = (0.5 - uv.y) * h;
			var span = h;

			if (p.custom.y > 0.5) {
				sUp -= p.custom.x * h;
				span = p.custom.y * h;
			}

			/* material coordinate: depth from the GROUP's top edge */
			let m = span * 0.5 - sUp;
			let mC = span * 0.5;

			/*
			 * ONE front for the whole sheet: each tile reconstructs the
			 * GROUP clock (its own clock plus its stagger, custom.z), so
			 * the wave is shared — it visits the top tiles first and the
			 * bottom last, and that sweep IS the stagger. Without this,
			 * every tile ran a private wave: the early ones coasted in
			 * flipped-flat (the stiff landings), the late ones got the
			 * whole fold crammed into their final stretch.
			 */
			let gT = clamp(t + p.custom.z, 0.0, 1.0);

			let r = 0.3 * span;
			let piR = 3.14159265 * r;

			/*
			 * The front's own clock is EASED — fast out of the top, slow
			 * through the tail — so the wave spends most of the flight in
			 * the sheet's lower half and the last plane's unroll is a thing
			 * you watch rather than a rush at the buzzer. The sheet shares
			 * ONE front (the group frame below), which is also what keeps
			 * tiles from overlapping at the end: a single travelling fold
			 * cannot cross itself.
			 */
			let fe = 1.0 - pow(1.0 - gT, 1.7);
			let f = fe * (span + piR);

			let q = f - m;
			let qC = f - mC;

			var d = m;
			var z = 0.0;

			if (q >= piR) { d = 2.0 * f - m - piR; z = 2.0 * r; }
			else if (q > 0.0) { d = f - r * sin(q / r); z = r * (1.0 - cos(q / r)); }

			var dC = mC;
			if (qC >= piR) { dC = 2.0 * f - mC - piR; }
			else if (qC > 0.0) { dC = f - r * sin(qC / r); }

			/*
			 * The landing: the lift comes back to the table. Flipped material
			 * rests ON the roll (z = 2r), and left there the lens stays on at
			 * t = 1 — every landing arrives ~1.38x oversized and off its slot.
			 * Ease z out over the last stretch: full bow mid-air, persp exactly
			 * 1 at rest, the plane flat in its grid cell.
			 */
			z *= 1.0 - smoothstep(0.78, 1.0, fe);

			let mp = p.rect.xy + p.rect.zw * 0.5;
			let pc = curvePlane(mp, mp);

			/* the lens: wrapped material hangs toward the viewer */
			let focal = 1.6 * max(p.rect.z, span);
			let persp = focal / max(focal - z, focal * 0.25);

			/* the path: climb out of the globe, a leaf's S — sin-shaped,
			   gone at both ends */
			let climb = -0.45 * span * sin(3.14159265 * t);
			let sway = 0.2 * span * sin(6.28318 * t);

			/* the wave's shape, net of the centre's own displacement —
			   zero at takeoff, the exact mirror at rest */
			let wave = (d - m) - (dC - mC);

			px += vec2f(sway + (px.x - pc.x) * (persp - 1.0), wave * persp + climb);
			side = cos(clamp(q / r, 0.0, 3.14159265));
		}

		/* the sheet column's depth: a sheet on its way out shrunk about
		   the middle of its foot, then the screen's lower half bent while
		   the column moves, as if seen from inside a torus. t runs 0 at the
		   screen's middle to 1 at its foot (0 all the way up); every vertex
		   is pushed out from lift.xy by 1 + lift.z t² (1 + (x / front.x)²) —
		   nothing above the middle, the foot most, its corners a little
		   more — and the whole screen drawn back by the bend's mean growth
		   in AREA, to first order 1 + lift.z (1/3 + h²/6), h the half-width
		   over front.x: so the upper half shrinks evenly, the lower half
		   bends toward the viewer, and on average nothing is enlarged */
		if (abs(p.front.w) > 0.0001) {
			px = p.front.yz + (px - p.front.yz) * (1.0 + p.front.w);
		}

		if (p.lift.z > 0.0001) {
			let d = px - p.lift.xy;
			let t = max(d.y, 0.0) / max(p.lift.w, 1.0);
			let k = d.x / max(p.front.x, 1.0);
			let h = vp.size.x * 0.5 / max(p.front.x, 1.0);
			px = p.lift.xy + d * (1.0 + p.lift.z * t * t * (1.0 + k * k)) / (1.0 + p.lift.z * (1.0 / 3.0 + h * h / 6.0));
		}

		/* the bow: a quarter cosine down the SCREEN, so the top is tangent to
		   its anchor and the drag builds toward the foot */
		if (abs(p.bow.x) > 0.0001) {
			let bt = clamp(px.y / vp.size.y, 0.0, 1.0);
			px.x -= p.bow.x * (1.0 - cos(bt * 1.5707963));
		}

		let ndc = px / vp.size * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0);

		var o: VOut;
		o.pos = vec4f(ndc, 0.0, 1.0);
		o.uv = uv;
		o.fade = fade;
		o.side = side;
		o.dent = dip * give;
		o.shade = shade;
		return o;
	}

	/* cover-fit in px space: which part of a size-shaped image fills a
	   res-shaped box, centre-cropped */
	fn cover(res: vec2f, size: vec2f, uv: vec2f) -> vec2f {
		let rr = res.x / res.y;
		let ir = size.x / size.y;

		var s: vec2f;
		var o: vec2f;

		if (rr < ir) {
			s = vec2f(size.x * (res.y / size.y), res.y);
			o = vec2f((s.x - res.x) * 0.5, 0.0) / s;
		} else {
			s = vec2f(res.x, size.y * (res.x / size.x));
			o = vec2f(0.0, (s.y - res.y) * 0.5) / s;
		}

		return uv * res / s + o;
	}

	/* signed distance to a rounded box, px */
	fn roundBox(pt: vec2f, b: vec2f, r: f32) -> f32 {
		return length(max(abs(pt) - b + vec2f(r), vec2f(0.0))) - r;
	}

	/*
	 * The cut, in SCREEN px — which is what makes it work across planes that
	 * are nowhere near each other: a sheet publishes the box it occupies,
	 * everything inside it is cut to that box, and the cut follows the sheet
	 * wherever it flies. Evaluated against the fragment's own position, so it
	 * cuts the pixels a plane actually DREW rather than the flat box it would
	 * have occupied — which is the whole reason a curved tile can be clipped
	 * to a straight-edged field at all.
	 */
	/* through the back, the picture mirrors — and the roll is about the
	   HORIZONTAL axis, so the reverse flips top-for-bottom */
	fn backUv(in: VOut) -> vec2f {
		if (in.side < 0.0) { return vec2f(in.uv.x, 1.0 - in.uv.y); }
		return in.uv;
	}

	fn clipMask(frag: vec2f) -> f32 {
		if (p.flags.y < 0.5) { return 1.0; }

		/*
		 * The cut carries its HOST's bow. A cut is the shape the host DRAWS,
		 * not the flat rect it would have occupied, so the fragment is
		 * un-bowed by the same profile before the box test. Without it a
		 * bowed panel paints a curved edge while revealing its type along a
		 * straight one, and the two run apart by the whole of the lag.
		 */
		var f = frag;

		if (abs(p.clip2.w) > 0.0001) {
			let t = clamp(frag.y / vp.size.y, 0.0, 1.0);
			f.x += p.clip2.w * (1.0 - cos(t * 1.5707963));
		}

		let half = p.clip.zw * 0.5;
		let d = roundBox(f - p.clip.xy - half, half, p.clip2.x);

		var m = 1.0 - smoothstep(0.0, 1.5, d);

		/* the feather at the top and bottom — see p.bow.y */
		let fade = p.bow.y;

		if (fade > 0.5) {
			let top = smoothstep(0.0, fade, f.y - p.clip.y);
			let bot = smoothstep(0.0, fade, p.clip.y + p.clip.w - f.y);
			m *= min(top, bot);
		}

		return m;
	}

	/*
	 * Everything after the sample, shared by the image and video variants:
	 * the colour window, the corner mask, the globe's fade, the cut, dim,
	 * alpha — premultiplied out.
	 *
	 * c.a carries through so the transparent BLANK placeholder stays
	 * invisible — dropping it renders un-loaded planes as black slabs.
	 */
	fn finish(in: VOut, col: vec4f) -> vec4f {
		let uv = in.uv;
		let res = p.rect.zw;
		var rgb = col.rgb;

		/* the BACK of the card: same picture (already mirrored by the
		   sample — see backUv), a shade dimmer so the turn reads */
		rgb *= mix(0.78, 1.0, step(0.0, in.side));

		/*
		 * The press, in paint: the hollow darkens toward its deepest point.
		 *
		 * The geometry alone reads as a wobble — a surface that moves and does
		 * not shade has not gone anywhere. A dip takes light less squarely
		 * than the flat around it, so the same falloff that drew the vertices
		 * in is spent again here, and the deepest point is the darkest.
		 *
		 * Zero at rest, so nothing that is not being pressed pays for it.
		 */
		rgb *= 1.0 - clamp(in.dent, 0.0, 1.0) * DENT_SHADE;

		/* the ball's flanks — see field/shaders' flank */
		rgb *= in.shade;

		/* the window: a hard-edged (one px of antialias) cut in element
		   space — colour where it covers, grayscale outside */
		let e = abs(uv * res - p.win.xy - p.win.zw * 0.5) - p.win.zw * 0.5;
		let winm = 1.0 - smoothstep(-0.5, 0.5, max(e.x, e.y));
		let keep = mix(1.0, winm, p.flags.x);
		rgb = mix(vec3f(dot(rgb, vec3f(0.299, 0.587, 0.114))), rgb, keep);

		let hr = res * 0.5;
		let d = roundBox(uv * res - hr, hr, p.tex.z);
		let mask = 1.0 - smoothstep(0.0, 1.5, d);

		/* the ink: planes that opted in (the mark, the hairlines — never
		   the photographs) run toward the fluid's live colour where its dye
		   flows, same mask and palette as the lattice */
		if (p.flags.z > 0.5) {
			let k = textureSample(dye, dyeSamp, in.pos.xy / vp.dpr / vp.size).rgb;
			let amt = clamp(max(k.r, max(k.g, k.b)) * 3.2, 0.0, 1.0);
			rgb = mix(rgb, inkAt(in.pos.xy / vp.dpr), amt);
			rgb *= 1.0 - c.ink.a * (1.0 - amt);
		}

		let a = mask * p.tex.w * col.a * in.fade * clipMask(in.pos.xy / vp.dpr);
		return vec4f(mix(GROUND, rgb, p.fx.x) * a, a);
	}
`,nS=`
	@group(2) @binding(0) var tex: texture_2d<f32>;

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		var rgb = p.custom.rgb;

		if (p.flags.z > 0.5) {
			let k = textureSample(dye, dyeSamp, in.pos.xy / vp.dpr / vp.size).rgb;
			let amt = clamp(max(k.r, max(k.g, k.b)) * 3.2, 0.0, 1.0);
			rgb = mix(rgb, inkAt(in.pos.xy / vp.dpr), amt);
		}

		/* a hairline honours its host's cut like everything else — the site
		   head's rules end where its pill does */
		let a = p.custom.a * p.tex.w * in.fade * clipMask(in.pos.xy / vp.dpr);
		return vec4f(rgb * a, a);
	}
`,rS=`
	@group(2) @binding(0) var tex: texture_2d<f32>;

	const CHEV_BOX = 20.0;
	const CHEV_A = vec2f(6.55, -8.75);
	const CHEV_C = vec2f(0.0, 0.55);
	const CHEV_S = vec2f(0.0, 7.1);
	const CHEV_TOP = -7.75;
	const CHEV_W0 = 5.35;
	const CHEV_W1 = 1.45;
	const CHEV_EYE = 40.0;

	/* the distance to a quadratic bezier and the parameter it is nearest
	   at — iq's closed form */
	fn chevBez(at: vec2f, A: vec2f, B: vec2f, C: vec2f) -> vec2f {
		let a = B - A;
		let b = A - 2.0 * B + C;
		let e = a * 2.0;
		let d = A - at;

		let kk = 1.0 / dot(b, b);
		let kx = kk * dot(a, b);
		let ky = kk * (2.0 * dot(a, a) + dot(d, b)) / 3.0;
		let kz = kk * dot(d, a);

		let m = ky - kx * kx;
		let n = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
		let h = n * n + 4.0 * m * m * m;

		var t = 0.0;
		var r = 0.0;

		if (h >= 0.0) {
			let hs = sqrt(h);
			let x = (vec2f(hs, -hs) - n) * 0.5;
			let k = sign(x) * pow(abs(x), vec2f(1.0 / 3.0));
			t = clamp(k.x + k.y - kx, 0.0, 1.0);
			let q = d + (e + b * t) * t;
			r = dot(q, q);
		} else {
			let z = sqrt(-m);
			let v = acos(clamp(n / (m * z * 2.0), -1.0, 1.0)) / 3.0;
			let cv = cos(v);
			let sv = sin(v) * 1.732050808;
			let ts = clamp(vec3f(cv + cv, -sv - cv, sv - cv) * z - kx, vec3f(0.0), vec3f(1.0));
			let q1 = d + (e + b * ts.x) * ts.x;
			let q2 = d + (e + b * ts.y) * ts.y;
			let r1 = dot(q1, q1);
			let r2 = dot(q2, q2);
			t = select(ts.y, ts.x, r1 < r2);
			r = min(r1, r2);
		}

		return vec2f(sqrt(r), t);
	}

	fn chevron(g: vec2f) -> f32 {
		let arm = chevBez(vec2f(abs(g.x), g.y), CHEV_A, CHEV_C, CHEV_S);
		let u = 1.0 - arm.y;
		let w = CHEV_W1 + (CHEV_W0 - CHEV_W1) * u * u;

		return max(arm.x - w * 0.5, CHEV_TOP - g.y);
	}

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		let res = p.rect.zw;
		let unit = max(res.y, 0.0001) / CHEV_BOX;
		let at = (in.uv - 0.5) * res / unit;

		let turn = 3.14159265 * p.mark.x;
		let ct = cos(turn);
		let st = sin(turn);

		/* the ray through this fragment meets the turned plane at y below;
		   it misses (edge on, or behind the eye) where den and cos disagree */
		let den = CHEV_EYE * ct + at.y * st;
		let safe = select(1.0, den, abs(den) > 0.00001);
		let g = vec2f(at.x * CHEV_EYE * ct / safe, at.y * CHEV_EYE / safe);

		let d = select(1000.0, chevron(g), den * ct > 0.0001);
		let aa = clamp(fwidth(d), 0.0001, 2.0);
		let cov = clamp(0.5 - d / aa, 0.0, 1.0);

		/* a face turned away from the light reads darker, so the flip has
		   depth halfway rather than only a thinner shape */
		let lit = 0.65 + 0.35 * abs(ct);

		return finish(in, vec4f(p.custom.rgb * lit, p.custom.a * cov));
	}
`,oS=`
	@group(2) @binding(0) var tex: texture_2d<f32>;

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		var st = cover(p.rect.zw, p.tex.xy, backUv(in));
		st.y += p.fx.z + p.fx.w;

		return finish(in, textureSample(tex, samp, st));
	}
`,Dr={arm:.12,travel:.95,stretch:.5,lead:.16},Fa={from:.5,to:.8},cd=`
	@group(2) @binding(0) var tex: texture_2d<f32>;

	/*
	 * ── The close mark ──
	 *
	 * jesper-folio's pill X, constant for constant and stroke for stroke (its
	 * pill frag). Drawn, not typed: two diagonals that are capsules with their
	 * own ends, so each can leave along its OWN axis — the mark pulls apart
	 * rather than sliding — while its replacement comes in from the far side.
	 * Nothing fades: the pill's outline cuts it, so a stroke is always whole.
	 *
	 * Folio's space: the plane's HEIGHT is 1 and x is scaled by the aspect,
	 * so the mark keeps its proportion at any button size, and the weight is
	 * stated in px instead so the line stays the same line. y is flipped from
	 * this layer's uv (top-down) to folio's (bottom-up), so the diagonals
	 * travel the same way they do there.
	 *
	 * No easing in here: each progress arrives shaped by its own tween (see
	 * gl-button), and a curve applied here would be a second one on top.
	 */
	const MARK_ARM = ${Dr.arm.toFixed(4)};
	const MARK_TRAVEL = ${Dr.travel.toFixed(4)};
	const MARK_STRETCH = ${Dr.stretch.toFixed(4)};
	const MARK_LEAD = ${Dr.lead.toFixed(4)};

	fn markSeg(q: vec2f, a: vec2f, b: vec2f, w: f32) -> f32 {
		let pa = q - a;
		let ba = b - a;
		let h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.000001), 0.0, 1.0);

		let d = length(pa - ba * h) - w * 0.5;
		let aa = max(fwidth(d), 0.0001);

		return 1.0 - smoothstep(-aa, aa, d);
	}

	fn crossArm(q: vec2f, dir: vec2f, c: f32, l: f32, w: f32) -> f32 {
		return markSeg(q, dir * (c - l), dir * (c + l), w);
	}

	/* a diagonal: the stroke leaving and the stroke replacing it, same axis */
	fn crossPair(q: vec2f, dir: vec2f, a: f32, b: f32, w: f32) -> f32 {
		return max(
			crossArm(q, dir, a * MARK_TRAVEL, MARK_ARM * (1.0 + MARK_STRETCH * a), w),
			crossArm(q, dir, (b - 1.0) * MARK_TRAVEL, MARK_ARM * (1.0 + MARK_STRETCH * (1.0 - b)), w)
		);
	}

	fn crossMark(q: vec2f, leaving: f32, arriving: f32, w: f32) -> f32 {
		let lead = 1.0 - MARK_LEAD;

		return max(
			crossPair(q, vec2f(0.7071, 0.7071), clamp(leaving / lead, 0.0, 1.0), clamp(arriving / lead, 0.0, 1.0), w),
			crossPair(q, vec2f(-0.7071, 0.7071), clamp((leaving - MARK_LEAD) / lead, 0.0, 1.0), clamp((arriving - MARK_LEAD) / lead, 0.0, 1.0), w)
		);
	}

	/* a flat colour through the same finish as a picture: the corner SDF
	   (a panel's radius — the site head's pill), alpha, fade and cut. A
	   ground's radius is 0, so the backdrop is untouched.

	   Plus a BORDER of its own: the window slot (unused by a panel — flags.x
	   is 0) carries its colour in xyz and its width in px in w; a band of
	   that width inside the corner SDF, so it follows the radius exactly.
	   Width 0 is no border. */
	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		let res = p.rect.zw;
		let hr = res * 0.5;
		let r = p.tex.z;

		/* the SIGNED distance, interior included — roundBox() is the
		   exterior one (0 everywhere inside), which is all a cut needs but
		   made a band "at the edge" across the whole plane */
		let q = abs(in.uv * res - hr) - hr + vec2f(r);
		let d = length(max(q, vec2f(0.0))) + min(max(q.x, q.y), 0.0) - r;

		let w = p.win.w;
		var band = select(0.0, smoothstep(-w - 0.75, -w + 0.75, d), w > 0.001);

		/*
		 * The rim, edge by edge.
		 *
		 * Which way a bit of the outline faces comes from the SDF's own
		 * gradient, so it is right on the rounded corners too — no box test
		 * would be. A fragment facing DOWN is the bottom edge and always
		 * draws; the other three are dimmed by bow.z.
		 *
		 * The site head is what wants it: its ground overhangs the viewport,
		 * so the only rule showing at rest is the horizon along its foot, and
		 * folding to the pill would otherwise sweep the other three in from
		 * off-screen. They fade on their own clock instead.
		 */
		let g = vec2f(dpdx(d), dpdy(d));
		let down = select(0.0, clamp(normalize(g).y, 0.0, 1.0), length(g) > 1e-6);
		band *= max(p.bow.z, smoothstep(0.3, 0.9, down));

		var rgb = mix(p.custom.rgb, p.win.xyz, band);

		/* the fluid wash: white wherever the pointer fluid's dye lies, read
		   the way the ink reads it, and the mark under it takes the fill's
		   colour. The label's twin is in text/shaders (wash). */
		var lit = 0.0;
		if (p.wash.x > 0.0) {
			let k = textureSample(dye, dyeSamp, in.pos.xy / vp.dpr / vp.size).rgb;
			lit = smoothstep(${Fa.from.toFixed(4)}, ${Fa.to.toFixed(4)}, clamp(max(k.r, max(k.g, k.b)) * 3.2, 0.0, 1.0)) * p.wash.x;
			rgb = mix(rgb, vec3f(1.0), lit);
		}

		/* the close mark, inked over the fill and cut to the outline — see
		   crossMark. A branch on a uniform: every other ground pays a compare. */
		if (p.mark.w > 0.5) {
			let q = vec2f((in.uv.x - 0.5) * res.x / max(res.y, 0.0001), 0.5 - in.uv.y);
			let outline = 1.0 - smoothstep(-0.5, 0.5, d);
			let m = crossMark(q, p.mark.x, p.mark.y, p.mark.z / max(res.y, 1.0)) * outline;

			rgb = mix(rgb, mix(p.markC.rgb, p.custom.rgb, lit), m);
		}

		/*
		 * The fill's own alpha, so a ground can be an OUTLINE: custom.a 0
		 * with a border width paints the band and nothing else, which is
		 * every field box on the contact form. A ground used as a ground
		 * carries alpha 1 and this is the identity it always was.
		 */
		return finish(in, vec4f(rgb, mix(p.custom.a, 1.0, band)));
	}
`,q0=t=>`
	@group(2) @binding(0) var tex: texture_2d<f32>;

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		/*
		 * uv.y is 0 at the top — UVs are top-left everywhere here — so the
		 * distance from the edge being left is uv.y going down and 1 - uv.y
		 * going up.
		 *
		 * A power curve rather than a smoothstep, and that is the whole of the
		 * difference. smoothstep is flat at BOTH ends, so all of its change is
		 * crowded into the middle and the band reads as an edge with soft
		 * shoulders — which is the sudden part. This leaves at full strength
		 * and thins out the whole way across, so there is no band, just less
		 * and less shadow until there is none.
		 */
		let a = pow(1.0 - ${t}, 2.2) * p.custom.a;

		return finish(in, vec4f(p.custom.rgb, a));
	}
`,aS=q0("in.uv.y"),lS=q0("(1.0 - in.uv.y)"),cS=`
	@group(2) @binding(0) var tex: texture_2d<f32>;

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		var st = cover(p.rect.zw, p.tex.xy, backUv(in));
		st.y += p.fx.z + p.fx.w;

		var col = textureSample(tex, samp, st);

		let res = p.rect.zw;
		let hr = res * 0.5;
		let d = roundBox(in.uv * res - hr, hr, p.tex.z);

		let w = max(p.custom.a, 0.0001);
		col = vec4f(mix(col.rgb, p.custom.rgb, smoothstep(-w - 0.75, -w + 0.75, d)), col.a);

		return finish(in, col);
	}
`,ud=`
	@group(2) @binding(0) var tex: texture_external;

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		var st = cover(p.rect.zw, p.tex.xy, backUv(in));
		st.y += p.fx.z + p.fx.w;

		let col = textureSampleBaseClampToEdge(tex, vsamp, clamp(st, vec2f(0.0), vec2f(1.0)));
		return finish(in, col);
	}
`,uS=!0,on={y:1.25,alpha:.5,dist:5},hS=on.y/on.alpha,fS=`
	struct VP {
		size: vec2f,
		dpr: f32,
		pad: f32,
	}

	@group(0) @binding(0) var<uniform> vp: VP;
	/* the pointer sheen: xy css px, z the band's half width, w the lift */
	struct Shine {
		band: vec4f,  /* xy pos, z reach, w strength */
		ink: vec4f,   /* the fluid's live colour */
		/* up to six boxes the type passes UNDER — per box a rect (screen
		   px), then (corner radius, z, alpha, on). See TextLayer.Occluder. */
		occ: array<vec4f, 12>,
	}

	@group(0) @binding(1) var<uniform> shine: Shine;
	@group(0) @binding(2) var<storage, read> curves: array<vec4f>;
	@group(0) @binding(3) var<storage, read> rows: array<vec4f>;
	/* transition page filter: 0 draws everyone; 1/2 draw only elements whose
	   row carries that tag (rows[slot·7+1].w — see TextLayer.update) */
	@group(0) @binding(4) var<uniform> pageFilter: u32;
	/* the pointer fluid's dye field (a black 1×1 when the fluid is off) —
	   the ink turns the glyphs it touches iridescent */
	@group(0) @binding(5) var dye: texture_2d<f32>;
	@group(0) @binding(6) var dyeSamp: sampler;

	struct VOut {
		@builtin(position) pos: vec4f,
		@location(0) em: vec2f,
		@location(1) @interpolate(flat) glyph: vec2f,
		@location(2) @interpolate(flat) bbox: vec4f,
		@location(3) @interpolate(flat) color: vec4f,
		@location(4) vpx: vec2f,
		/* the element's cut: box (screen px) and (radius, on) */
		@location(5) @interpolate(flat) clip: vec4f,
		/* x corner radius, y cut on/off, z the ink's switch, w the cut's bow */
		@location(6) @interpolate(flat) clipR: vec4f,
		/* x how far the cut feathers at its top and bottom, px */
		@location(7) @interpolate(flat) cut2: vec4f,
		/* the element's own z, against the occluders' */
		@location(8) @interpolate(flat) z: f32,
		/* the fluid wash: the colour the glyphs wear where the dye lies, and
		   how far — see TextPlane.wash */
		@location(9) @interpolate(flat) wash: vec4f,
		/* how far the cut feathers at its left and right, px */
		@location(10) @interpolate(flat) cutX: f32,
	}

	@vertex fn vs(
		@builtin(vertex_index) vi: u32,
		/* per instance — one glyph */
		@location(0) a_origin: vec2f, /* pen position, px from the element's top-left */
		@location(1) a_size: f32,     /* font size, px */
		@location(2) a_bbox: vec4f,   /* ink box, em, y up */
		@location(3) a_glyph: vec2f,  /* band table texel, band count */
		@location(4) a_index: f32,    /* reading order 0..1, for staggers */
		@location(5) a_line: vec3f,   /* line box top, bottom (px), line index 0..1 */
		@location(6) a_color: vec4f,  /* the glyph's own colour + alpha, off its parent */
		@location(7) a_slot: f32,     /* the element's row in the element buffer */
	) -> VOut {
		let slot = u32(a_slot + 0.5);
		let rect = rows[slot * 7u];
		let st = rows[slot * 7u + 1u];
		let tint = rows[slot * 7u + 2u];
		let clip = rows[slot * 7u + 3u];
		let clipR = rows[slot * 7u + 4u];
		let cut2 = rows[slot * 7u + 5u];
		let zrow = rows[slot * 7u + 6u];

		var o: VOut;

		/* an element off screen or retired — or not this pass's page during
		   a transition split: collapse the quad */
		if (rect.z <= 0.0 || st.x <= 0.0 || (pageFilter != 0u && u32(st.w + 0.5) != pageFilter)) {
			o.pos = vec4f(2.0, 2.0, 2.0, 1.0);
			return o;
		}

		let rgb = mix(a_color.rgb, tint.rgb, tint.a);

		/* unit quad from the vertex index, y = 1 at the TOP of the ink box */
		let corner = vec2f(f32(vi & 1u), f32(vi >> 1u));

		/* ink box in em, padded a pixel so the edge AA has room */
		let pad = 1.0 / a_size;
		let lo = a_bbox.xy - vec2f(pad);
		let hi = a_bbox.zw + vec2f(pad);

		/* corner → em (y up) → element px (y down) */
		let em = mix(lo, hi, corner);
		var px = a_origin + vec2f(em.x, -em.y) * a_size;

		/*
		 * ── The reveal ──
		 *
		 * One motion, everywhere: each LINE rises into place from RISE px
		 * below and fades in, staggered a beat behind the line above it.
		 * Nothing is masked.
		 *
		 * Two clocks, because the eye reads them separately. The travel takes
		 * the long tail of an expo — most of it happens early and the last
		 * fraction settles — while the opacity is done in the first part of
		 * that, so the type is READABLE well before it stops moving. A fade
		 * carried all the way to the end of a 1.25s ease reads as sluggish
		 * even when the movement does not.
		 *
		 * A signed rise: positive comes up from below, negative down from
		 * above, which is the only difference between a word arriving and the
		 * word it replaced leaving.
		 *
		 * This replaced four separate reveals — a line mask, a per-glyph
		 * rise, a depth assemble and a letter-by-letter drop. They were all
		 * masked, and a mask is a hard edge at the scale of a line: next to
		 * small text doing the same thing a dozen times over, it read as a
		 * dozen gestures rather than one page arriving.
		 */
		/* the stagger, per line, authored in seconds — see LINE_STEP. The run
		   stretches by the whole of it so the LAST line still lands on 1. */
		let delay = a_line.z * cut2.w;
		let t = clamp(st.y * (1.0 + delay) - delay, 0.0, 1.0);

		/* the travel: expo out */
		let ty = select(1.0 - pow(2.0, -10.0 * t), 1.0, t >= 1.0);

		/* the opacity: LINEAR, over its own shorter share of the run — an
		   ease on top of an ease read as a second gesture, and the short run
		   is already doing the work an ease would */
		let fade = clamp(t * ${hS.toFixed(4)}, 0.0, 1.0);

		px.y += (1.0 - ty) * cut2.y;

		/* the press: the whole block about its box's centre. the em is left
		   alone — it is interpolated across a smaller triangle, so its
		   derivatives grow by exactly the same factor and the coverage stays
		   true at the new size. */
		let sc = select(1.0, cut2.z, cut2.z > 0.0001);
		px = (px - rect.zw * 0.5) * sc + rect.zw * 0.5;

		/* element px → viewport px → clip, no camera in between */
		o.vpx = rect.xy + px;
		o.clip = clip;
		o.clipR = clipR;
		o.cut2 = cut2;
		o.z = zrow.x;
		o.wash = vec4f(tint.rgb, zrow.y);
		o.cutX = zrow.z;
		let ndc = o.vpx / vp.size;

		o.em = em;
		/* the element's alpha times the colour's own — a text-white/60
		   inside a fading element multiplies through */
		o.color = vec4f(rgb, st.x * a_color.a * fade);
		o.glyph = a_glyph;
		o.bbox = a_bbox;

		o.pos = vec4f(ndc.x * 2.0 - 1.0, 1.0 - ndc.y * 2.0, 0.0, 1.0);
		return o;
	}

	/*
	 * Coverage along one ray from p, cast in +x. For the vertical ray the
	 * caller hands in swapped coordinates, so the same solve runs in +y.
	 * ppx = pixels per em along the ray; band is the ray's header texel.
	 */
	fn ray(p: vec2f, ppx: f32, band: u32, swapAxes: bool) -> f32 {
		var cov = 0.0;

		let h = curves[band];
		let offset = u32(h.x + 0.5);
		let count = u32(h.y + 0.5);

		/* a curve whose far end is behind the pixel's near edge cannot cross
		   the ray — and the list is sorted on that */
		let cut = -0.5 / ppx;

		for (var i = 0u; i < count; i++) {
			let ix = curves[offset + (i >> 2u)];
			let c = u32(ix[i & 3u] + 0.5);

			let t = c * 2u;
			let a = curves[t];
			let b = curves[t + 1u].xy;

			let p0 = select(a.xy, a.yx, swapAxes) - p;
			let p1 = select(a.zw, a.wz, swapAxes) - p;
			let p2 = select(b, b.yx, swapAxes) - p;

			if (max(p0.x, max(p1.x, p2.x)) < cut) { break; }

			/* which roots are crossings, from the control points' sides */
			let code = (0x2E74u >> (select(0u, 2u, p0.y > 0.0) + select(0u, 4u, p1.y > 0.0) + select(0u, 8u, p2.y > 0.0))) & 3u;
			if (code == 0u) { continue; }

			let ca = p0 - p1 * 2.0 + p2;
			let cb = p0 - p1;

			var t1: f32;
			var t2: f32;
			if (abs(ca.y) < 1e-5) {
				/* straight in y: one root */
				t1 = p0.y * 0.5 / cb.y;
				t2 = t1;
			} else {
				let ra = 1.0 / ca.y;
				let d = sqrt(max(cb.y * cb.y - ca.y * p0.y, 0.0));
				t1 = (cb.y - d) * ra;
				t2 = (cb.y + d) * ra;
			}

			if ((code & 1u) != 0u) {
				let x = (ca.x * t1 - cb.x * 2.0) * t1 + p0.x;
				cov += clamp(x * ppx + 0.5, 0.0, 1.0);
			}
			if (code > 1u) {
				let x = (ca.x * t2 - cb.x * 2.0) * t2 + p0.x;
				cov -= clamp(x * ppx + 0.5, 0.0, 1.0);
			}
		}

		return cov;
	}

	/* antiderivative of clamp(u, 0, 1) */
	fn F(u: f32) -> f32 {
		if (u < 0.0) { return 0.0; }
		if (u < 1.0) { return 0.5 * u * u; }
		return u - 0.5;
	}

	/*
	 * Signed coverage a segment contributes to the unit pixel centred on the
	 * origin: the area to the LEFT of the segment inside the pixel, signed by
	 * the segment's direction — what a +x ray's winding integrates to over
	 * the pixel's height. Exact for a line.
	 */
	fn seg(a: vec2f, b: vec2f) -> f32 {
		let dy = b.y - a.y;
		if (abs(dy) < 1e-7) { return 0.0; }

		/* clip to the pixel's row */
		let t0 = (-0.5 - a.y) / dy;
		let t1 = (0.5 - a.y) / dy;
		let lo = clamp(min(t0, t1), 0.0, 1.0);
		let hi = clamp(max(t0, t1), 0.0, 1.0);
		if (hi <= lo) { return 0.0; }

		let A = mix(a, b, lo);
		let B = mix(a, b, hi);
		let d = B.y - A.y;

		/* coverage left of x, as a fraction of the pixel: 0 at the left
		   edge, 1 at the right */
		let u0 = A.x + 0.5;
		let u1 = B.x + 0.5;

		if (abs(u1 - u0) < 1e-5) { return clamp(u0, 0.0, 1.0) * d; }
		return (F(u1) - F(u0)) / (u1 - u0) * d;
	}

	/* one curve's signed coverage of the pixel's row, control points about
	   the pixel in em. px = pixels per em each way */
	fn curveArea(q0: vec2f, q1: vec2f, q2: vec2f, px: vec2f) -> f32 {
		/* to pixel units */
		let p0 = q0 * px;
		let p1 = q1 * px;
		let p2 = q2 * px;

		/* flatten: segments by the curve's second difference on screen,
		   a quarter pixel of tolerance */
		let dd = p0 - 2.0 * p1 + p2;
		let n = u32(clamp(ceil(sqrt(length(dd) * 0.5)), 1.0, 8.0));

		var cov = 0.0;
		var prev = p0;
		for (var k = 1u; k <= n; k++) {
			let s = f32(k) / f32(n);
			let q = mix(mix(p0, p1, s), mix(p1, p2, s), s);
			cov += seg(prev, q);
			prev = q;
		}

		return cov;
	}

	/* exact-area coverage over the pixel's row from one band's curves. px =
	   pixels per em each way */
	fn rowBand(p: vec2f, px: vec2f, at: u32) -> f32 {
		var cov = 0.0;

		let h = curves[at];
		let offset = u32(h.x + 0.5);
		let count = u32(h.y + 0.5);

		/* a curve entirely left of the pixel contributes nothing — the list
		   is sorted on that */
		let cut = -0.5 / px.x;
		let halfY = 0.5 / px.y;

		for (var i = 0u; i < count; i++) {
			let ix = curves[offset + (i >> 2u)];
			let c = u32(ix[i & 3u] + 0.5);

			let t = c * 2u;
			let a = curves[t];
			let b = curves[t + 1u].xy;

			let p0 = a.xy - p;
			let p1 = a.zw - p;
			let p2 = b - p;

			if (max(p0.x, max(p1.x, p2.x)) < cut) { break; }

			/* outside the pixel's row entirely */
			let ymin = min(p0.y, min(p1.y, p2.y));
			let ymax = max(p0.y, max(p1.y, p2.y));
			if (ymax < -halfY || ymin > halfY) { continue; }

			cov += curveArea(p0, p1, p2, px);
		}

		return cov;
	}

	/* the same from only the curves the band below does not have — the rest
	   were counted from there — in their own copy sorted by lowest y (header
	   .z is where it starts, .w how many), so done at the first curve that
	   starts above the row */
	fn rowRise(p: vec2f, px: vec2f, at: u32) -> f32 {
		var cov = 0.0;

		let h = curves[at];
		let offset = u32(h.z + 0.5);
		let count = u32(h.w + 0.5);

		let cut = -0.5 / px.x;
		let halfY = 0.5 / px.y;

		for (var i = 0u; i < count; i++) {
			let ix = curves[offset + (i >> 2u)];
			let c = u32(ix[i & 3u] + 0.5);

			let t = c * 2u;
			let a = curves[t];
			let b = curves[t + 1u].xy;

			let p0 = a.xy - p;
			let p1 = a.zw - p;
			let p2 = b - p;

			if (min(p0.y, min(p1.y, p2.y)) > halfY) { break; }
			if (max(p0.x, max(p1.x, p2.x)) < cut || max(p0.y, max(p1.y, p2.y)) < -halfY) { continue; }

			cov += curveArea(p0, p1, p2, px);
		}

		return cov;
	}

	/* the pixel's whole row, from every band it reaches — a band's list is
	   only complete inside the band. Each curve once: the lowest band takes
	   its whole list, any above it only what the band below did not have.
	   lo/hi the ink box's bottom and top, em */
	fn area(p: vec2f, px: vec2f, table: u32, bands: i32, lo: f32, hi: f32) -> f32 {
		let span = max(hi - lo, 1e-6) / f32(bands);
		let halfY = 0.5 / px.y;

		let b0 = clamp(i32(floor((p.y - halfY - lo) / span)), 0, bands - 1);
		let b1 = clamp(i32(floor((p.y + halfY - lo) / span)), 0, bands - 1);

		var cov = rowBand(p, px, table + u32(b0));

		for (var b = b0 + 1; b <= b1; b++) {
			cov += rowRise(p, px, table + u32(b));
		}

		return cov;
	}

	const AREA = ${uS};

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		/*
		 * Pixel footprint in em, from the derivatives — dpr and zoom are
		 * already in it. FIRST: WGSL requires derivatives in uniform control
		 * flow, so nothing conditional may precede these.
		 */
		let dx = abs(dpdx(in.em.x));
		let dy = abs(dpdy(in.em.y));
		let ppx = 1.0 / max(dx, 1e-6);
		let ppy = 1.0 / max(dy, 1e-6);

		let table = u32(in.glyph.x + 0.5);
		let bands = i32(in.glyph.y + 0.5);

		/* the bands split the ink box evenly. Through i32: the AA pad puts
		   fragments OUTSIDE the box, and a negative fraction must clamp to
		   band 0, not wrap. */
		let bh = u32(clamp(i32((in.em.y - in.bbox.y) / max(in.bbox.w - in.bbox.y, 1e-6) * f32(bands)), 0, bands - 1));

		/*
		 * The sheen is a BAND, not a pool. A radial falloff reads as a torch;
		 * what a glossy surface does is answer the ANGLE — the highlight is a
		 * stripe across everything, and moving the light rotates it. The
		 * pointer's bearing from the middle of the screen gives the
		 * direction; the lift is a soft band perpendicular to it, through the
		 * pointer.
		 */
		let fromCentre = shine.band.xy - vp.size * 0.5;
		/* a pointer at dead centre has no bearing — hold a default rather
		   than spin */
		let dir = select(vec2f(0.7071, -0.7071), normalize(fromCentre), length(fromCentre) > 24.0);

		let along = dot(in.vpx - shine.band.xy, dir);
		let band = exp(-(along * along) / (shine.band.z * shine.band.z));
		/* a second, wider and dimmer pass — glass rarely throws one clean line */
		let wide = exp(-(along * along) / (shine.band.z * shine.band.z * 9.0)) * 0.35;

		/*
		 * The ink: where the pointer fluid's dye lies over a glyph, the
		 * glyph runs to the palette's live colour — the same green, red,
		 * blue, purple trip the lattice makes, so type, mark, hairlines and
		 * grid all heat as one system. A label on a washed ground wears the
		 * wash's colour there instead, before the sheen, so it turns red
		 * exactly where its button turns white. Sampled at an explicit
		 * level: implicit derivatives are off the table past the top.
		 */
		let duv = in.vpx / vp.size;
		let ink = textureSampleLevel(dye, dyeSamp, duv, 0.0).rgb;
		let amt = clamp(max(ink.r, max(ink.g, ink.b)) * 3.2, 0.0, 1.0);

		let base = mix(in.color.rgb, in.wash.rgb, smoothstep(${Fa.from.toFixed(4)}, ${Fa.to.toFixed(4)}, amt) * in.wash.w);

		var rgb = mix(base, vec3f(1.0), clamp((band + wide) * shine.band.w, 0.0, 1.0));

		rgb = mix(rgb, shine.ink.rgb, amt * in.clipR.z);

		/* the host's cut — a rounded box in screen px, the same SDF the
		   picture planes use (the site head's pill cuts its slogans) */
		var cut = 1.0;
		if (in.clipR.y > 0.5) {
			/* the host's BOW, in clipR.w: a bowed panel paints a curved edge,
			   so the fragment is un-bowed by the same quarter cosine before
			   the box test — otherwise the words appear along a straight line
			   the panel itself never draws. See dom/shaders clipMask. */
			var f = in.vpx;

			if (abs(in.clipR.w) > 0.0001) {
				let t = clamp(in.vpx.y / vp.size.y, 0.0, 1.0);
				f.x += in.clipR.w * (1.0 - cos(t * 1.5707963));
			}

			let half = in.clip.zw * 0.5;
			let q = abs(f - in.clip.xy - half) - half + vec2f(in.clipR.x);
			let d = length(max(q, vec2f(0.0))) + min(max(q.x, q.y), 0.0) - in.clipR.x;
			cut = 1.0 - smoothstep(-0.5, 0.5, d);

			/* the feather at the top and bottom, so copy dissolves into the
			   panel's ground at both ends of the scroll instead of being
			   sliced off — the twin of clipMask in gpu/dom/shaders */
			let feather = in.cut2.x;

			if (feather > 0.5) {
				let top = smoothstep(0.0, feather, f.y - in.clip.y);
				let bot = smoothstep(0.0, feather, in.clip.y + in.clip.w - f.y);
				cut *= min(top, bot);
			}

			/* and at its sides, where a host asks for it: a name wider than
			   the room it is cut to fades out before whatever sits past it
			   (the project menu's title, under its chevron) */
			if (in.cutX > 0.5) {
				let left = smoothstep(0.0, in.cutX, f.x - in.clip.x);
				let right = smoothstep(0.0, in.cutX, in.clip.x + in.clip.z - f.x);
				cut *= min(left, right);
			}
		}

		/* under an occluder whose z is above ours: taken out where its box
		   covers, as far as its alpha says. Same rounded-box SDF as the cut. */
		var under = 1.0;

		for (var i = 0u; i < 6u; i++) {
			let box = shine.occ[i * 2u];
			let op = shine.occ[i * 2u + 1u];

			if (op.w < 0.5 || in.z >= op.y) { continue; }

			let oh = box.zw * 0.5;
			let oq = abs(in.vpx - box.xy - oh) - oh + vec2f(op.x);
			let od = length(max(oq, vec2f(0.0))) + min(max(oq.x, oq.y), 0.0) - op.x;

			under *= 1.0 - (1.0 - smoothstep(-0.5, 0.5, od)) * op.z;
		}

		/*
		 * ── The coverage, only where something can show ──
		 *
		 * The curves are the whole cost of this shader and the three factors
		 * above are nearly free, so they go first and the solve runs only
		 * where they leave anything standing. Where any of them is zero the
		 * pixel is (0, 0, 0, 0) whatever the coverage would have been — the
		 * blend leaves the frame exactly as it was — so skipping it changes
		 * no pixel anywhere.
		 *
		 * And that is most of the type on screen. A closed panel's copy stands
		 * at its home position cut to a box parked off the edge, and the
		 * contact copy waits at progress 0 for its reveal: on the wall at 1440
		 * that was 823 of the 898 glyphs being rasterised, solving every curve
		 * in their bands to multiply the answer by nothing — a third of the
		 * frame's GPU time.
		 *
		 * No derivatives in here, so the branch is free to be non-uniform:
		 * they were all taken at the top.
		 */
		var cov = 0.0;

		if (in.color.a * cut * under > 0.0) {
			if (AREA) {
				cov = clamp(abs(area(in.em, vec2f(ppx, ppy), table, bands, in.bbox.y, in.bbox.w)), 0.0, 1.0);
			} else {
				let bv = u32(clamp(i32((in.em.x - in.bbox.x) / max(in.bbox.z - in.bbox.x, 1e-6) * f32(bands)), 0, bands - 1));
				let h = ray(in.em, ppx, table + bh, false);
				let v = ray(in.em.yx, ppy, table + u32(bands) + bv, true);

				/* the two rays agree inside and outside; on an edge each sees the
				   crossing its own axis resolves, and the mean is the coverage */
				cov = clamp((abs(h) + abs(v)) * 0.5, 0.0, 1.0);
			}
		}

		/* the reveal's own opacity is already in in.color.a — see the vertex
		   stage, which owns both of the reveal's clocks */
		let alpha = cov * in.color.a * cut * under;
		return vec4f(rgb * alpha, alpha);
	}
`;let W0=!1;function dS(t){W0=t}const hd=t=>{for(let e=t;e&&e!==document.body;e=e.parentElement){const i=getComputedStyle(e).position;if(i==="fixed"||i==="sticky")return!0}return!1};class hl{constructor(e){this.doc=null,this.el=e,this.pinned=hd(e)}adopt(e){this.el=e,this.doc=null,this.pinned=hd(e)}stale(){this.doc=null}read(e=!1){const i=this.el._vrect;if(i)return{left:i.left,top:i.top,width:i.width,height:i.height};if(e||W0||this.pinned)return this.measure();if(!this.doc){const s=this.measure();this.doc={left:s.left+window.scrollX,top:s.top+window.scrollY,width:s.width,height:s.height}}return{left:this.doc.left-window.scrollX,top:this.doc.top-window.scrollY,width:this.doc.width,height:this.doc.height}}measure(){const e=this.el.getBoundingClientRect();return{left:e.left,top:e.top,width:e.width,height:e.height}}drift(){return 0}}const au=.04,fd=()=>parseFloat(getComputedStyle(document.documentElement).fontSize)||10;class dd{constructor({core:e,el:i,layer:s}){this.dying=!1,this.held=!1,this.holdUntil=0,this.lastRect=null,this.bornAt=performance.now(),this.rect=null,this.shown=!1,this.alpha=1,this.progress=0,this.color={x:1,y:1,z:1},this.tint=0,this.wash=0,this.clip=null,this.clipR=0,this.clipBow=0,this.clipFade=0,this.clipFadeX=0,this.rise=0,this.stagLine=0,this.scale=1,this.lines=1,this.inked=1,this.z=0,this.tag=0,this.glyphs=null,this.watcher=null,this.measuredW=-1,this.measuredH=-1,this.measuredText="",this.core=e,this.el=i,this.layer=s,this.box=new hl(i),this.slot=s.add(this),this.measure(),this.watcher=new MutationObserver(()=>this.restyle()),this.watcher.observe(i,{attributes:!0,attributeFilter:["class"],subtree:!0})}cut(e,i=0,s=0,n=0,r=0){this.clip=e,this.clipR=i,this.clipBow=s,this.clipFade=n,this.clipFadeX=r}measure(){}restyle(){this.rect&&!this.dying&&this.layoutGlyphs(this.rect)}stale(){this.box.stale()}drift(){return this.box.drift()}layoutGlyphs(e){this.measuredW=e.width,this.measuredH=e.height,this.measuredText=this.el.textContent??"";const{placed:i,missing:s}=QT(this.el,this.layer.font);if(s){this.glyphs=null,this.layer.invalidate(),this.el.style.removeProperty("-webkit-text-fill-color");return}const n=i.length,r={count:n,origin:new Float32Array(n*2),size:new Float32Array(n),bbox:new Float32Array(n*4),glyph:new Float32Array(n*2),index:new Float32Array(n),line:new Float32Array(n*3),color:new Float32Array(n*4)};let o=1;for(const a of i)o=Math.max(o,a.line.i+1);this.lines=o;for(let a=0;a<n;a++){const l=i[a];r.origin[a*2]=l.x,r.origin[a*2+1]=l.y,r.size[a]=l.size,r.bbox.set(l.glyph.b,a*4),r.glyph[a*2]=l.glyph.t,r.glyph[a*2+1]=l.glyph.k,r.index[a]=n>1?l.i/(n-1):0,r.line[a*3]=l.line.top,r.line[a*3+1]=l.line.bottom,r.line[a*3+2]=o>1?l.line.i/(o-1):0,r.color.set(l.color,a*4)}this.glyphs=r,this.layer.invalidate(),this.el.style.setProperty("-webkit-text-fill-color","transparent")}resized(e){return Math.abs(e.width-this.measuredW)>1/128||Math.abs(e.height-this.measuredH)>1/128}sync(e=0){if(this.dying||!this.el.isConnected||this.slot<0)return;const i=this.box.read(),s={left:i.left,top:i.top,width:i.width,height:i.height};this.lastRect=s,this.rect=s,(this.resized(s)||this.el.textContent!==this.measuredText)&&this.layoutGlyphs(s),this.shown=!!this.glyphs?.count&&this.core.onScreen(s)}reveal(e=on.y,i=0,s=1,n=on.dist){const r=this.progress>0&&!0;if(r||(this.rise=s*n*fd()),this.stagLine=(this.lines-1)*au/Math.max(e,1e-4),z.killTweensOf(this,"progress"),r){z.to(this,{progress:1,duration:e*(1-this.progress),ease:"none"});return}this.progress=0,z.to(this,{progress:1,duration:e,delay:i,ease:"none"})}conceal(e=on.y,i=0,s=-1,n=on.dist){const r=this.progress<1;r||(this.rise=s*n*fd()),this.stagLine=(this.lines-1)*au/Math.max(e,1e-4),z.killTweensOf(this,"progress"),z.to(this,{progress:0,duration:r?e*this.progress:e,delay:r?0:i,ease:"none"})}fade(e,i=0){z.killTweensOf(this,"alpha"),z.to(this,{alpha:0,duration:e,delay:i,ease:"power1.out"})}retire(e,i=!0){if(!this.dying){if(this.dying=!0,z.killTweensOf(this),!i){this.dispose(),e();return}z.to(this,{alpha:0,duration:.3,ease:"power1.out",onComplete:()=>{this.dispose(),e()}})}}reset(){}dispose(){this.watcher?.disconnect(),this.watcher=null,this.layer.remove(this),this.el.style.removeProperty("-webkit-text-fill-color")}}const wi={text:{at:.35,dur:on.y,step:au},wall:{stagger:.08,home:.06,lift:{dur:1.25,zoom:.84},surface:{dur:.6,out:.15,back:.25},glide:1.25,resident:.4,appear:.3,retire:.2,revive:.3,teardown:1.4,aim:1.5,fade:1},press:{scale:.9,response:.3,dampingRatio:.6,reach:1,depth:2.5,release:{response:.4,dampingRatio:.4}},mark:{exit:{response:.38,dampingRatio:1},enter:{response:.5,dampingRatio:1},weight:2,morph:{response:.45,dampingRatio:.62}},flip:{duration:.5,ease:"snappy"},tuck:{response:.45,dampingRatio:1},room:{response:.5,dampingRatio:1},depth:{bend:.2,side:.25,spread:.25,norm:500,in:9,out:3.5},exit:{dim:1},intro:{spin:10,ink:{push:4,power:.5,rise:.5,hush:.75,burst:.3,kick:24,rings:{size:.8,rate:.5},linger:2.5},reveal:{spring:{response:.7,dampingRatio:1},ramp:{duration:.3,ease:"power1.in"}},fill:{min:1.25,ease:"snappy"},tiles:{delay:.6,dur:1},done:1.6},hint:{period:.75,taps:1,depth:.75,pop:1.1,down:.1,up:.15,settle:.2,beat:.15,ease:"power2.out"},scale:{slide:{response:.4,dampingRatio:1},fade:{duration:.35,ease:"power1.out"},melt:{period:.2,overlap:.25},order:[11,5,1,7,2,9,3,10,8,4,6],poke:{wait:0,out:.15,back:.45,taps:1,rest:0,times:1/0,reach:.5}}},pS=0,gS=1,mS=2,vS=6,pd=10,yS={"texture-compression-etc2":{opaque:pS,alpha:gS,format:t=>t?"etc2-rgba8unorm":"etc2-rgb8unorm",blockBytes:t=>t?16:8},"texture-compression-bc":{opaque:mS,alpha:vS,format:t=>t?"bc7-rgba-unorm":"bc1-rgba-unorm",blockBytes:t=>t?16:8},"texture-compression-astc":{opaque:pd,alpha:pd,format:()=>"astc-4x4-unorm",blockBytes:()=>16}},wS=["texture-compression-etc2","texture-compression-bc","texture-compression-astc"],bS=13;let rh={};const _S=1600;let Jo=null;function xS(){return wo(()=>fetch("/textures/manifest.json").then(t=>t.ok?t.json():{})).then(t=>{rh=t||{}})}let lu=null,cu=null;function K0(t){return t?(lu??Promise.resolve()).then(()=>kS(t)?cu??Promise.resolve():void 0):cu??Promise.resolve()}function kS(t){try{return!!rh[new URL(t,location.href).pathname]}catch{return!1}}let Bi=null,Ps=null,uu=!1,Kl=!1;const TS=3;let gd=0,SS=0;const hu=new Map;function ES(t){if(Bi)return;const e=wS.find(s=>t.features.has(s));if(!e)return;Bi=yS[e];const i=new Promise(s=>{Jo=s});lu=xS().then(()=>{}),cu=Promise.all([lu,i]).then(()=>{}),Y0()}function Y0(){if(!(!Bi||Ps||Kl)){Kl=!0;try{const t=new Worker("/tx/basis/worker.js"),e=()=>{if(t.terminate(),Ps!==t&&gd<TS){Uu(al(gd++)).then(()=>{Kl=!1,Y0()});return}Ps=null,Bi=null,uu=!1,Jo?.()};t.onmessage=({data:i})=>{if(i.type==="ready"){Ps=t,uu=!0,Jo?.();return}if(i.type==="failed"){e();return}const s=hu.get(i.id);s&&(hu.delete(i.id),s(i))},t.onerror=e,t.postMessage({type:"init",opaque:Bi.opaque,alpha:Bi.alpha})}catch{Bi=null,Jo?.()}}}function md(t,e=0){if(!uu)return null;let i;try{i=new URL(t,location.href)}catch{return null}const s=rh[i.pathname];if(!s)return null;if(typeof s=="string")return{path:s,cap:1/0};const n=Object.keys(s).map(Number).filter(l=>l>0).sort((l,u)=>l-u);if(!n.length)return null;const r=n[n.length-1],o=n.find(l=>l>=e)??r,a=s[o];return a?{path:a,cap:o<r||r<_S?o:1/0}:null}function X0(t,e={}){return fetch(t).then(i=>i.ok?i.arrayBuffer():null).then(i=>!i||!Ps?null:new Promise(s=>{const n=SS++;hu.set(n,r=>{const o=r;s(o.error||!o.levels?.length?null:o)}),Ps.postMessage({type:"transcode",id:n,buffer:i,...e},[i])})).catch(()=>null)}function vd(t){return!Ps||!Bi?Promise.resolve(null):X0(t).then(e=>e&&{width:e.width,height:e.height,format:Bi.format(e.hasAlpha),block:4,blockBytes:Bi.blockBytes(e.hasAlpha),levels:e.levels})}function RS(t){return K0().then(()=>Ps?X0(t,{format:bS,channel:0}).then(e=>e&&{width:e.width,height:e.height,format:"r8unorm",block:1,blockBytes:1,levels:e.levels.slice(0,1)}):null)}function yd(t,e){return e()}const Ns=new URLSearchParams(location.search).has("noaa")?1:4,po={grid:-1,planes:10,text:12,wipe:20},PS=["texture-compression-astc","texture-compression-bc","texture-compression-etc2","timestamp-query"],wd=8e3,bd=t=>Promise.race([t,new Promise((e,i)=>setTimeout(()=>i(new Error(`no answer in ${wd}ms`)),wd))]);class CS{constructor(e=2){this.device=null,this.format="bgra8unorm",this.dpr=1,this.label="",this.dead=!1,this.awake=!1,this.context=null,this.ww=0,this.wh=0,this.draws=[],this.faulted=new WeakSet,this.pres=new Set,this.joined=!0,this.stats={fps:0,dps:0},this.counts={frames:0,draws:0},this.meter=null,this.onVisible=()=>{document.hidden||(this.joined=!0)},this.post=null,this.overlay=null,this.solo=null,this.submitted=0,this.rt=null,this.rtView=null,this.msaa=null,this.msaaView=null,this.posted=!1,this.overed=!1,this.capturePending=null,this.captureTex=null,this.captured=null,this.blitPipe=null,this.blitSampler=null,this.maxDpr=e,this.canvas=document.createElement("canvas"),this.ready=this.init(),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("pageshow",this.onVisible)}get width(){return this.ww}get height(){return this.wh}addPre(e){this.pres.add(e),this.joined=!0}removePre(e){this.pres.delete(e),this.joined=!0}async init(){try{const e=await bd(navigator.gpu.requestAdapter({powerPreference:"high-performance"}));if(!e)throw new Error("no adapter");const i=await bd(e.requestDevice({requiredFeatures:PS.filter(n=>e.features.has(n))})),s=e.info;return this.label=[s.vendor,s.architecture].filter(Boolean).join(" "),this.attach(i),!0}catch(e){return console.warn("[gpu] init failed — DOM fallback",e),this.dead=!0,!1}}attach(e){if(this.device=e,this.format=navigator.gpu.getPreferredCanvasFormat(),this.dpr=Math.min(this.maxDpr,window.devicePixelRatio||1),this.ww&&this.resize(this.ww,this.wh),this.context=this.canvas.getContext("webgpu"),!this.context)throw new Error("no webgpu context");this.context.configure({device:e,format:this.format,alphaMode:"premultiplied",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),e.lost.then(i=>{i.reason!=="destroyed"&&(console.warn(`[gpu] device lost (${i.message}) — rebuilding`),this.device=null,this.ready=this.revive())}),this.joined=!0}async revive(){if(!await this.init())return!1;this.rt=null,this.rtView=null,this.msaa=null,this.msaaView=null,this.captureTex=null,this.captured=null,this.capturePending=null,this.blitPipe=null,this.blitSampler=null,this.post?.reset(),this.overlay?.reset();for(const i of this.draws)i.reset?.();return this.joined=!0,!0}mount(e){this.canvas.classList.add("absolute","inset-0","w-full","h-full"),e.appendChild(this.canvas)}unmount(){this.canvas.remove()}add(e,{order:i=0,dirty:s,reset:n}={}){this.remove(e),this.draws.push({fn:e,order:i,dirty:s,reset:n}),this.draws.sort((r,o)=>r.order-o.order),this.joined=!0}remove(e){this.draws=this.draws.filter(i=>i.fn!==e),this.joined=!0}wake(){this.joined=!0}get backdrop(){return this.rtView}sampled(){const e=this.canvas.width,i=this.canvas.height;return(!this.msaa||this.msaa.width!==e||this.msaa.height!==i)&&(this.msaa?.destroy(),this.msaa=this.device.createTexture({label:"msaa",size:[e,i],sampleCount:Ns,format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaa.createView()),this.msaaView}target(){const e=this.canvas.width,i=this.canvas.height;return(!this.rt||this.rt.width!==e||this.rt.height!==i)&&(this.rt?.destroy(),this.rt=this.device.createTexture({label:"frame",size:[e,i],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),this.rtView=this.rt.createView()),this.rtView}captureNext(e){this.capturePending=e,this.joined=!0}blitKit(){if(this.blitPipe)return;const e=this.device,i=e.createShaderModule({label:"stage blit",code:`
				struct VOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f }
				@group(0) @binding(0) var samp: sampler;
				@group(0) @binding(1) var src: texture_2d<f32>;
				@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
					let uv = vec2f(f32((i << 1u) & 2u), f32(i & 2u));
					var o: VOut;
					o.pos = vec4f(uv * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0), 0.0, 1.0);
					o.uv = uv;
					return o;
				}
				@fragment fn fs(in: VOut) -> @location(0) vec4f {
					return textureSample(src, samp, in.uv);
				}
			`});this.blitPipe=e.createRenderPipeline({label:"stage blit",layout:"auto",vertex:{module:i,entryPoint:"vs"},fragment:{module:i,entryPoint:"fs",targets:[{format:this.format}]},primitive:{topology:"triangle-list"}}),this.blitSampler=e.createSampler({minFilter:"linear",magFilter:"linear"})}warm(){this.device&&this.blitKit()}blit(e,i,s){const n=this.device;this.blitKit();const r=e.beginRenderPass({colorAttachments:[{view:s,loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0},storeOp:"store"}]});r.setPipeline(this.blitPipe),r.setBindGroup(0,n.createBindGroup({layout:this.blitPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.blitSampler},{binding:1,resource:i}]})),r.draw(3),r.end()}frame(e=1){if(!this.device||!this.context||!this.ww)return;const i=!!this.post?.active,s=!!this.overlay?.active&&!this.solo,n=this.joined||i!==this.posted||s!==this.overed||i||s&&(!this.overlay.dirty||this.overlay.dirty())||this.draws.some(h=>!h.dirty||h.dirty());if(this.joined=!1,this.awake=n,!n)return;this.posted=i,this.overed=s;const r=this.device.createCommandEncoder();i&&this.post.sim?.(r,e);for(const h of this.pres)h(r);const o=this.context.getCurrentTexture().createView(),a=i||!!this.capturePending||s,l=r.beginRenderPass({colorAttachments:[Ns>1?{view:this.sampled(),resolveTarget:a?this.target():o,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"discard"}:{view:a?this.target():o,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]}),u={pass:l,ratio:e,draws:0};for(const h of this.draws)try{h.fn(u)}catch(f){this.faulted.has(h)||(this.faulted.add(h),console.error("[gl] layer threw while encoding; frame continues without it",f))}l.end();let c=null;if(this.capturePending){const h=this.canvas.width,f=this.canvas.height;(!this.captureTex||this.captureTex.width!==h||this.captureTex.height!==f)&&(this.captureTex?.destroy(),this.captureTex=this.device.createTexture({label:"capture",size:[h,f],format:this.format,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING}),this.captured=this.captureTex.createView()),r.copyTextureToTexture({texture:this.rt},{texture:this.captureTex},[h,f]),c=this.capturePending,this.capturePending=null}if(i?this.post.composite(r,this.rtView,o):a&&this.blit(r,this.rtView,o),s){const h={encoder:r,view:o,backdrop:this.rtView,ratio:e,draws:0};this.overlay.draw(h),u.draws+=h.draws}this.device.queue.submit([r.finish()]),this.submitted++,c?.()}resize(e,i){this.ww=e,this.wh=i,this.dpr=Math.min(this.maxDpr,window.devicePixelRatio||1),this.canvas.width=Math.max(1,Math.round(e*this.dpr)),this.canvas.height=Math.max(1,Math.round(i*this.dpr)),this.joined=!0}dispose(){this.meter&&clearInterval(this.meter),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("pageshow",this.onVisible),this.rt?.destroy(),this.msaa?.destroy(),this.context?.unconfigure(),this.device?.destroy()}}const MS=`
	@group(0) @binding(0) var src: texture_2d<f32>;
	@group(0) @binding(1) var samp: sampler;

	struct VOut {
		@builtin(position) pos: vec4f,
		@location(0) uv: vec2f,
	}

	@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
		/* fullscreen triangle */
		let uv = vec2f(f32((i << 1u) & 2u), f32(i & 2u));

		var o: VOut;
		o.pos = vec4f(uv * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0), 0.0, 1.0);
		o.uv = uv;
		return o;
	}

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		return textureSample(src, samp, in.uv);
	}
`;class In{constructor(e,i="rgba8unorm"){this.device=e;const s=e.createShaderModule({label:"mips",code:MS});this.pipeline=e.createRenderPipeline({label:"mips",layout:"auto",vertex:{module:s,entryPoint:"vs"},fragment:{module:s,entryPoint:"fs",targets:[{format:i}]},primitive:{topology:"triangle-list"}}),this.sampler=e.createSampler({minFilter:"linear",magFilter:"linear"})}static count(e,i){return Math.floor(Math.log2(Math.max(e,i)))+1}generate(e){const i=this.device.createCommandEncoder({label:"mips"});for(let s=1;s<e.mipLevelCount;s++){const n=i.beginRenderPass({colorAttachments:[{view:e.createView({baseMipLevel:s,mipLevelCount:1}),loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0},storeOp:"store"}]});n.setPipeline(this.pipeline),n.setBindGroup(0,this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:e.createView({baseMipLevel:s-1,mipLevelCount:1})},{binding:1,resource:this.sampler}]})),n.draw(3),n.end()}this.device.queue.submit([i.finish()])}}const sn=()=>typeof window<"u"&&window.innerWidth<=649,_d=()=>(sn()?96:192)*1024*1024,Sn=/\.m3u8(\?|#|$)/,Er="#sheet",AS=t=>Number(t.match(/#t=([\d.]+)/)?.[1]||0);let OS=null;const FS=()=>OS??=_a(()=>import("./Cm5ppQ94.js"),[],import.meta.url).then(t=>t.default),NS=8,DS=30,LS=0,IS=1.1,zS=6,BS=3,Yl=/\.svg(\?|#|$)|^data:image\/svg\+xml/i;function US(t){let e=0,i=0,s=0,n=0;for(let r=0;r<t.length;r+=4){const o=t[r+3];e+=t[r]*o,i+=t[r+1]*o,s+=t[r+2]*o,n+=o}if(n){e/=n,i/=n,s/=n;for(let r=0;r<t.length;r+=4)t[r+3]||(t[r]=e,t[r+1]=i,t[r+2]=s)}}let Xl=1;class VS{constructor(){this.device=null,this.mips=null,this.blits=new Map,this.raw=new Set,this.blank=null,this.cache=new Map,this.resolved=new Map,this.videos=new Map,this.users=new Map,this.bytes=new Map,this.from=new Map,this.want=new Map,this.cap=new Map,this.climbing=new Set,this.touched=new Map,this.total=0,this.uploads=[],this.inflight=0,this.work=0,this.starved=0,this.stalls=new Map,this.online=()=>{this.stalls.clear()},this.onReplace=null,this.failing=new Set,this.epoch=0,this.pulseTimer=null,this.lastDrain=0,this.broken=new Set,this.canStream=null,typeof window<"u"&&window.addEventListener("online",this.online)}mipsFor(e){if(e==="rgba8unorm")return this.mips;let i=this.blits.get(e);return i||this.blits.set(e,i=new In(this.device,e)),i}asData(e){this.raw.add(e)}live(e){if(!this.device)return null;const i=Math.max(1,e.width),s=Math.max(1,e.height),n=this.device.createTexture({label:"live canvas",size:[i,s],format:"rgba8unorm",mipLevelCount:1,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return{id:Xl++,texture:n,view:n.createView(),width:i,height:s}}refresh(e,i){if(!this.device)return!1;try{this.device.queue.copyExternalImageToTexture({source:i},{texture:e.texture,premultipliedAlpha:!1},[e.width,e.height])}catch{return!1}return!0}arm(e){this.device=e,this.mips=new In(e),this.blits.clear();const i=e.createTexture({label:"blank",size:[1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});e.queue.writeTexture({texture:i},new Uint8Array([0,0,0,0]),{},[1,1]),this.blank={id:0,texture:i,view:i.createView(),width:1,height:1}}size(e,i){!i||i<=(this.want.get(e)??0)||this.want.set(e,i)}fits(e,i){return i<=(this.cap.get(e)??1/0)*IS}climb(e,i){if(this.climbing.has(e)||!this.resolved.has(e))return;const s=this.stalls.get(e);if(s&&(s.n>=zS||performance.now()<s.at))return;this.size(e,i);const n=Yl.test(e),r=n?null:md(e,this.want.get(e)??i);if(!r&&!n){this.cap.set(e,1/0);return}const o=!!r&&r.path!==this.from.get(e);this.climbing.add(e);const a=o?vd(r.path).then(u=>u?this.compressed(e,u):null):this.image(e),l=()=>{const u=(this.stalls.get(e)?.n??0)+1;this.stalls.set(e,{n:u,at:performance.now()+al(u-1)})};a.then(u=>{u?(this.from.set(e,o?r.path:null),n||this.cap.set(e,o?r.cap:1/0),this.cache.set(e,Promise.resolve(u)),this.stalls.delete(e)):l()}).catch(l).finally(()=>this.climbing.delete(e))}reset(){this.epoch++,this.failing.clear(),this.stalls.clear(),this.cache.clear(),this.from.clear(),this.cap.clear(),this.climbing.clear(),this.want.clear(),this.resolved.clear(),this.bytes.clear(),this.touched.clear(),this.total=0,this.uploads.length=0,this.inflight=0,this.blank=null}get busy(){return this.inflight>0||this.uploads.length>0}warm(e){const i=this.resolved.get(e);return i&&this.touched.set(e,performance.now()),i??null}ready(e,i){const s=this.warm(e);return s||(this.load(e).then(n=>{n&&i?.(n)}),null)}retain(e){this.users.set(e,(this.users.get(e)??0)+1),this.touched.set(e,performance.now()),this.stalls.delete(e)}release(e){const i=(this.users.get(e)??0)-1;i>0?this.users.set(e,i):this.users.delete(e),this.touched.set(e,performance.now())}load(e){let i=this.cache.get(e);if(i)return i;this.inflight++;const s=this.epoch;return i=wo(()=>this.attempt(e),n=>s!==this.epoch?!1:(this.failing.add(e),this.users.has(e)||n<BS)).then(n=>(s===this.epoch&&this.failing.delete(e),!n&&this.cache.get(e)===i&&this.cache.delete(e),n)).finally(()=>{s===this.epoch&&this.inflight--}),this.cache.set(e,i),i}isFailing(e){return this.failing.has(e)}attempt(e){return this.raw.has(e)?(this.cap.set(e,1/0),RS(e).then(i=>i?this.compressed(e,i):null)):Yl.test(e)?this.image(e):K0(e).then(()=>{const i=md(e,this.want.get(e)??LS);return this.from.set(e,i?.path??null),this.cap.set(e,i?.cap??1/0),i?vd(i.path):null}).then(i=>i?this.compressed(e,i):(this.cap.set(e,1/0),this.image(e)))}image(e){return new Promise(i=>{const s=new Image;s.crossOrigin="anonymous",s.onload=async()=>{try{const n=Yl.test(e)&&s.naturalWidth>0,r=this.want.get(e)??0;let o;if(n){const u=r||s.naturalWidth,c=Math.max(1,Math.round(u*s.naturalHeight/s.naturalWidth)),h=document.createElement("canvas");h.width=u,h.height=c;const f=h.getContext("2d",{willReadFrequently:!0});f.drawImage(s,0,0,u,c);const d=f.getImageData(0,0,u,c);US(d.data),o=await createImageBitmap(d,{premultiplyAlpha:"none"})}else o=await createImageBitmap(s,{premultiplyAlpha:"none"});const a=o.width,l=await this.upload(e,o,n?s.naturalWidth/s.naturalHeight:void 0);l&&n&&this.cap.set(e,a),i(l)}catch{i(null)}},s.onerror=()=>i(null),s.src=e})}upload(e,i,s){return new Promise(n=>{this.pulse(),this.uploads.push(()=>{if(!this.device||!this.mips)return n(null);const{width:r,height:o}=i,a=yd("texture upload",()=>{const l=this.device.createTexture({label:e.slice(-40),size:[r,o],format:"rgba8unorm",mipLevelCount:In.count(r,o),usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return this.device.queue.copyExternalImageToTexture({source:i},{texture:l},[r,o]),this.mips.generate(l),{id:Xl++,texture:l,view:l.createView(),width:r,height:o,aspect:s}});i.close(),this.install(e,a,a.width*a.height*4*(4/3)),n(a)})})}compressed(e,i){return new Promise(s=>{this.pulse(),this.uploads.push(()=>{if(!this.device)return s(null);let n=0;const r=i.block;let o=i.levels.length;for(let c=0;c<i.levels.length;c++){const h=i.levels[c];if((h.width%r!==0||h.height%r!==0)&&!(h.width<r&&h.height<r)){o=c;break}}if(!o)return s(null);const a=r===1&&o===1,l=a?In.count(i.width,i.height):o,u=yd("texture upload (ktx2)",()=>{const c=this.device.createTexture({label:e.slice(-40),size:[i.width,i.height],format:i.format,mipLevelCount:l,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|(a?GPUTextureUsage.RENDER_ATTACHMENT:0)});for(let h=0;h<o;h++){const f=i.levels[h];this.device.queue.writeTexture({texture:c,mipLevel:h},f.data,{bytesPerRow:Math.ceil(f.width/r)*i.blockBytes,rowsPerImage:Math.ceil(f.height/r)},[f.width,f.height]),n+=f.data.byteLength}return a&&l>1&&(this.mipsFor(i.format).generate(c),n*=4/3),{id:Xl++,texture:c,view:c.createView(),width:i.width,height:i.height}});this.install(e,u,n),s(u)})})}drain(e=1){if(this.lastDrain=performance.now(),!(!this.uploads.length||!this.device)){if(this.work>NS&&this.starved<DS){this.starved++;return}this.starved=0;for(let i=0;i<e;i++){const s=this.uploads.shift();if(!s)return;s()}this.pulse()}}pulse(){this.pulseTimer||!this.uploads.length||(this.pulseTimer=setTimeout(()=>{if(this.pulseTimer=null,!(performance.now()-this.lastDrain<600)){for(;this.uploads.length;)this.uploads.shift()();this.pulse()}},1200))}report(e){this.work=e}install(e,i,s){const n=this.resolved.get(e);n&&n!==i&&(this.total-=this.bytes.get(e)??0,n.dead=!0,this.onReplace?.(n,i),n.texture.destroy()),this.resolved.set(e,i),this.measure(e,s)}measure(e,i){this.bytes.set(e,i),this.touched.set(e,performance.now()),this.total+=i,this.sweep()}sweep(){if(this.total<=_d())return;const e=[...this.bytes.keys()].filter(i=>!this.users.has(i)).sort((i,s)=>(this.touched.get(i)??0)-(this.touched.get(s)??0));for(const i of e){if(this.total<=_d())return;const s=this.resolved.get(i);s&&(s.dead=!0,s.texture.destroy()),this.total-=this.bytes.get(i)??0,this.bytes.delete(i),this.touched.delete(i),this.resolved.delete(i),this.cache.delete(i)}}get vram(){return this.total}wake(e){const i=this.videos.get(e);if(!i||i.el.preload==="auto")return;i.el.preload="auto";const s=i.at;i.at=null,Sn.test(e)?this.attach(i,e,s??AS(e)):(i.el.getAttribute("src")||(i.el.src=this.rendition(e)),i.el.load(),s!=null&&i.el.addEventListener("loadedmetadata",()=>{i.el.currentTime=s},{once:!0})),this.watch(i)}attach(e,i,s){FS().then(n=>{if(e.el.preload!=="auto"||e.hls)return;const r=new n({autoStartLoad:!1,startPosition:s,maxBufferLength:10,maxMaxBufferLength:20});r.on(n.Events.MANIFEST_PARSED,(o,{levels:a})=>{r.loadLevel=a.length-1,r.startLoad(s)}),r.on(n.Events.ERROR,(o,{fatal:a})=>{a&&(this.broken.add(i),queueMicrotask(()=>this.sleep(i)))}),r.loadSource(this.rendition(i)),r.attachMedia(e.el),e.hls=r})}upgrade(e,i){return sn()&&e.includes("stream.mux.com")?e+Er:i}streamable(e){return Sn.test(e)?this.canStreamAt()&&!this.broken.has(e):!0}canStreamAt(){if(this.canStream!==null)return this.canStream;const e=window,i=e.ManagedMediaSource||e.MediaSource;return this.canStream=!!i?.isTypeSupported?.('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')}lines(e){return Sn.test(e)?sn()?480:720:e.endsWith(Er)?480:sn()?270:480}watch(e){const i=e.el,s=()=>{(i.getAttribute("src")||e.hls)&&i.preload==="auto"&&(e.shown=!0)};typeof i.requestVideoFrameCallback=="function"?i.requestVideoFrameCallback(s):i.addEventListener("playing",s,{once:!0})}sleep(e){const i=this.videos.get(e);return!i||i.el.preload==="none"?!1:(i.shown=!1,i.el.preload="none",i.hls?.destroy(),i.hls=null,i.el.removeAttribute("src"),i.el.load(),!0)}rendition(e){if(Sn.test(e)){const i=new URL(e);return i.hash="",i.searchParams.set("max_resolution",sn()?"480p":"720p"),i.toString()}return e.endsWith(Er)?e.slice(0,-Er.length):!e.includes("stream.mux.com")||!sn()?e:e.replace(/\/(medium|high)\.mp4(\?|#|$)/,"/low.mp4$2")}poster(e){return sn()&&!Sn.test(e)&&!e.endsWith(Er)?400:1/0}video(e){let i=this.videos.get(e);if(i)return i;const s=document.createElement("video");return s.muted=!0,s.loop=!0,s.playsInline=!0,s.crossOrigin="anonymous",Sn.test(e)||(s.src=this.rendition(e)),s.preload="none",i={el:s,users:0,shown:!1},this.videos.set(e,i),i}get active(){for(const e of this.videos.values())if(e.users>0&&!e.el.paused&&!e.el.ended)return!0;return!1}videoElement(e){return this.videos.get(e)?.el??null}useVideo(e){const i=this.video(e);return i.users++,i}dropVideo(e){const i=this.videos.get(e);i&&(i.users=Math.max(0,i.users-1),i.users===0&&i.el.pause())}preload(e,i){let s=0;return Promise.all(e.map(n=>this.load(n).then(()=>{i?.(++s/e.length)})))}}class HS extends CS{constructor(){super(...arguments),this.viewport=null,this.curve=null,this.textures=new VS,this.surface=new Float32Array([0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0])}async init(){const e=!!this.viewport;return await super.init()?(e&&this.textures.reset(),this.textures.arm(this.device),ES(this.device),this.viewport=this.device.createBuffer({label:"viewport",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.curve=this.device.createBuffer({label:"curve",size:112,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.write(),this.writeCurve(this.surface),!0):!1}write(){!this.device||!this.viewport||this.device.queue.writeBuffer(this.viewport,0,new Float32Array([this.ww,this.wh,this.dpr,0]))}writeCurve(e){e!==this.surface&&this.surface.set(e),!(!this.device||!this.curve)&&this.device.queue.writeBuffer(this.curve,0,this.surface)}onScreen(e){return e.width?e.left+e.width>0&&e.left<this.ww&&e.top+e.height>0&&e.top<this.wh:!1}resize(e,i){super.resize(e,i),this.write()}dispose(){this.viewport?.destroy(),this.curve?.destroy(),super.dispose()}}const GS="/scale/atlas.347cf009a9.ktx2",$S=[2496,3648],jS=11,qS=[384,1792],WS=16,KS=6,YS=48,XS=170,Zi={src:GS,size:$S,faces:jS,cell:qS,gutter:WS,cols:KS,spread:YS,swirl:XS},xd=t=>`vec3f(${t.map(e=>e.toFixed(5)).join(", ")})`,kt=t=>t.toFixed(1),kd=.62,Td=.45,Sd=[77,105],QS=.08,JS=120,ZS=40,eE=.7,Ed=[.2,.85],tE=.4,iE=.7,Rd=.4,Pd=[55,75],sE=160,nE=.06,rE=48,oE=.9,Cd=[.15,.9],aE=1.5,lE=44,cE=`
	@group(2) @binding(0) var tex: texture_2d<f32>;

	const CELL = vec2f(${kt(Zi.cell[0])}, ${kt(Zi.cell[1])});
	const GUT = ${kt(Zi.gutter)};
	const COLS = ${kt(Zi.cols)};
	const SIZE = vec2f(${kt(Zi.size[0])}, ${kt(Zi.size[1])});
	const SPREAD = ${kt(Zi.spread)};
	const FIELD = ${kt(Zi.faces)};
	const WAVE = ${kt(Zi.swirl)};

	const RED = ${xd(Mt("accent"))};
	const INK = ${xd(Mt("ground"))};

	const PI = 3.14159265;

	/* where cell i's texel (uv 0..1 across the cell) sits in the atlas */
	fn cellUv(i: f32, uv: vec2f) -> vec2f {
		let at = vec2f(i % COLS, floor(i / COLS + 0.001));
		return (at * (CELL + 2.0 * GUT) + GUT + uv * CELL) / SIZE;
	}

	/*
	 * Face i's signed distance at uv, cell px. Off the cell it is pushed
	 * further out by how far off it is, never in: a warped sample landing past
	 * the edge would otherwise read the edge's own value and streak it along
	 * the box.
	 */
	fn sd(i: f32, uv: vec2f, lod: f32) -> f32 {
		let c = clamp(uv, vec2f(0.0), vec2f(1.0));
		let d = (textureSampleLevel(tex, samp, cellUv(i, c), lod).r - 0.5) * 2.0 * SPREAD;
		let o = length((uv - c) * CELL);

		return select(d, min(d, 0.0) - o, o > 0.0);
	}

	fn psi(at: vec2f) -> f32 {
		return textureSampleLevel(tex, samp, cellUv(FIELD, clamp(at / CELL, vec2f(0.0), vec2f(1.0))), 0.0).r;
	}

	/* the curl of the stream function — divergence-free, so the swirl turns
	   the ink over rather than piling it up. The noise was baked at a
	   wavelength of WAVE cell px, so its slope is ~1/WAVE: scaled back up by
	   it, a push is ~1 cell px per unit of amount whatever the bake chose */
	fn flow(at: vec2f) -> vec2f {
		let h = 16.0;
		let c = psi(at);

		return vec2f(psi(at + vec2f(0.0, h)) - c, -(psi(at + vec2f(h, 0.0)) - c)) / h * WAVE;
	}

	fn pcg(v: u32) -> u32 {
		let s = v * 747796405u + 2891336453u;
		let w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u;
		return (w >> 22u) ^ w;
	}

	fn hash2(at: vec2f) -> f32 {
		let q = vec2u(vec2i(floor(at)) + vec2i(4096));
		return f32(pcg(q.x * 1597u + pcg(q.y))) / 4294967295.0;
	}

	fn vnoise(at: vec2f) -> f32 {
		let i = floor(at);
		let r = fract(at);
		let w = r * r * r * (r * (r * 6.0 - 15.0) + 10.0);

		return mix(
			mix(hash2(i), hash2(i + vec2f(1.0, 0.0)), w.x),
			mix(hash2(i + vec2f(0.0, 1.0)), hash2(i + vec2f(1.0, 1.0)), w.x),
			w.y,
		);
	}

	fn fbm(at: vec2f) -> f32 {
		return vnoise(at) * 0.65 + vnoise(at * 2.03 + 17.3) * 0.35;
	}

	/* where a face drawn at scale s about the foot of the word is read for
	   uv */
	fn zoom(uv: vec2f, s: f32) -> vec2f {
		let foot = vec2f(0.5, 1.0);
		return foot + (uv - foot) / s;
	}

	/* face i drawn at scale s: its distance read through the zoom, given back
	   in the plate's cell px off a mip that follows the zoom, and held to the
	   -SPREAD the atlas itself stops at. Over the head of a face drawn small
	   the read is far off its cell, and a distance left unbounded there
	   outweighs the other face in the mix and blanks the plate */
	fn scaled(i: f32, uv: vec2f, s: f32, lod: f32) -> f32 {
		return max(sd(i, zoom(uv, s), max(lod - log2(s), 0.0)) * s, -SPREAD);
	}

	/*
	 * The melt itself, for either mode: face leaving into face coming at blend
	 * e, each drawn at its own scale, under a swirl of the given reach turned by
	 * merge k's parity, fading over margin at the fitted box's edge.
	 */
	fn stir(uv: vec2f, lod: f32, leaving: f32, coming: f32, e: f32, zl: f32, zc: f32, k: u32, reach: f32, swell: f32, margin: f32) -> f32 {
		/* every other merge swirls the mirror way — the field is read with x
		   flipped, and its push flipped back — and every other pair the
		   other way round */
		let flip = select(1.0, -1.0, (k & 1u) == 1u);
		let turn = select(1.0, -1.0, (k & 2u) == 2u);

		let P = uv * CELL;

		let edge = smoothstep(vec2f(0.0), vec2f(margin), P) * smoothstep(vec2f(0.0), vec2f(margin), CELL - P);
		let amount = sin(PI * e) * reach * turn * edge.x * edge.y;

		var M = vec2f(select(P.x, CELL.x - P.x, flip < 0.0), P.y);
		let M0 = M;

		for (var s = 0; s < 4; s++) {
			M += flow(M) * (amount / 4.0);
		}

		/* the warp as a DISPLACEMENT of uv, never uv rebuilt from the warped
		   point: Metal striped the rest frames of the latter */
		let q = uv + vec2f((M.x - M0.x) * flip, M.y - M0.y) / CELL;

		let a = scaled(leaving, q, zl, lod);
		let b = scaled(coming, q, zc, lod);

		let d = mix(mix(a, b, e), max(a, b), ${tE} * sin(PI * e)) + swell * sin(PI * e) * SPREAD;

		/* outside the fitted box, never ink: the swell would otherwise lift
		   a face touching the inset a few px over it */
		let off = length((uv - clamp(uv, vec2f(0.0), vec2f(1.0))) * CELL);

		return select(d, min(d, 0.0) - off, off > 0.0);
	}

	/* STEPS: merge number mark.w, face mark.x into face mark.y, at t = mark.z */
	fn melt(uv: vec2f, lod: f32) -> f32 {
		let leaving = p.mark.x;
		let t = p.mark.z;

		let P = uv * CELL;

		let n = smoothstep(0.25, 0.75, fbm(P / vec2f(${kt(Sd[0])}, ${kt(Sd[1])}) + vec2f(3.1, 7.7) * leaving));
		let lateness = clamp((1.0 - uv.y) * ${Td} + n * ${(1-Td).toFixed(2)}, 0.0, 1.0);
		let e = smoothstep(0.0, 1.0, clamp((t - lateness * ${kd}) / ${(1-kd).toFixed(2)}, 0.0, 1.0));

		let z = mix(${(1/(1+eE)).toFixed(4)}, 1.0, smoothstep(${Ed[0].toFixed(2)}, ${Ed[1].toFixed(2)}, t));

		return stir(uv, lod, leaving, p.mark.y, e, 1.0, z, u32(p.mark.w), ${kt(JS)}, ${QS}, ${kt(ZS)});
	}

	/* MELT: face i of the three, 0..2 */
	fn face(i: f32) -> f32 {
		return select(select(p.mark.x, p.mark.y, i > 0.5), p.mark.z, i > 1.5);
	}

	/* MELT: a face's scale, age periods after it started coming in at the S */
	fn grown(age: f32) -> f32 {
		return mix(${(1/(1+oE)).toFixed(4)}, 1.0, smoothstep(${Cd[0].toFixed(2)}, ${Cd[1].toFixed(2)}, age));
	}

	fn melting(uv: vec2f, lod: f32) -> f32 {
		let at = p.markC.y;
		let k = p.markC.z - 1.0;
		let span = p.mark.w;

		/* how far the latest fragment trails the S, and how long each melts,
		   in periods */
		let lag = min(span * ${iE.toFixed(3)}, 1.0);
		let own = max(span - lag, 0.05);

		let P = uv * CELL;

		let ang = (k + at) * ${(2*Math.PI/lE).toFixed(6)};
		let drift = vec2f(cos(ang), sin(ang)) * ${aE.toFixed(3)};

		let n = smoothstep(0.25, 0.75, fbm(P / vec2f(${kt(Pd[0])}, ${kt(Pd[1])}) + drift));
		let lateness = clamp((1.0 - uv.y) * ${Rd.toFixed(2)} + n * ${(1-Rd).toFixed(2)}, 0.0, 1.0);

		let phase = max(at - lateness * lag, 0.0);
		let j = min(floor(phase), 1.0);
		let e = smoothstep(0.0, 1.0, clamp((phase - j) / own, 0.0, 1.0));

		return stir(uv, lod, face(j), face(j + 1.0), e, grown(at - j + 1.0), grown(at - j), u32(k + j), ${kt(sE)}, ${nE}, ${kt(rE)});
	}

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		let res = p.rect.zw;
		let inset = p.markC.x;

		let uv = (in.uv * res - vec2f(inset)) / max(res - 2.0 * inset, vec2f(1.0));

		/* once, in uniform flow: how many cell px a device pixel spans, so a
		   plate drawn small reads its distances off the mips and every
		   warped sample below can take an explicit level. The fit squeezes
		   the two axes unequally (3.6× across, 2.45× down on a 1440 laptop at
		   1x), and the level is their geometric mean: the harder axis alone
		   blurred the easier one out of its drawing — face 6's halftone went
		   to bare squares, face 1's mesh to blots — while the easier alone
		   under-filters across. Against a box-filtered source it is 6–18%
		   closer than the harder axis on every face measured */
		let span = uv * CELL;
		let lod = clamp(0.5 * log2(length(dpdx(span)) * length(dpdy(span))), 0.0, 8.0);

		var d = 0.0;

		if (p.markC.z >= 0.5) {
			d = melting(uv, lod);
		} else if (p.mark.z <= 0.0) {
			d = sd(p.mark.x, uv, lod);
		} else if (p.mark.z >= 1.0) {
			d = sd(p.mark.y, uv, lod);
		} else {
			d = melt(uv, lod);
		}

		let ink = clamp(0.5 + d / max(fwidth(d), 1e-4), 0.0, 1.0);

		return finish(in, vec4f(mix(RED, INK, ink), 1.0));
	}
`,Ql=new Map([["media",{frag:oS,videoFrag:ud}],["outline",{frag:cS,videoFrag:ud}],["ground",{frag:cd}],["panel",{frag:cd}],["falloff",{frag:aS}],["falloff-up",{frag:lS}],["line",{frag:nS}],["chevron",{frag:rS}],["scale",{frag:cE}]]);class uE{constructor(e,i){this.built=new Map,this.device=e,this.format=i,this.globals=e.createBindGroupLayout({label:"plane globals",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}}]}),this.plane=e.createBindGroupLayout({label:"plane slice",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform",hasDynamicOffset:!0,minBindingSize:j0}}]}),this.texImage=e.createBindGroupLayout({label:"plane texture",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]}),this.texVideo=e.createBindGroupLayout({label:"plane video",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,externalTexture:{}}]})}textureGroup(e){return this.device.createBindGroup({layout:this.texImage,entries:[{binding:0,resource:e}]})}videoGroup(e){return this.device.createBindGroup({layout:this.texVideo,entries:[{binding:0,resource:e}]})}warm(){for(const e of Ql.keys())this.get(e,0),this.get(e,1)}get(e,i=0){let s=this.built.get(e);return s||(s={flat:this.pair(e,1),curved:null,fine:null},this.built.set(e,s)),i===2?s.fine??=this.pair(e,ou):i===1?s.curved??=this.pair(e,Oa):s.flat}pair(e,i){const s=Ql.get(e)??Ql.get("media"),n=i>Oa?`${e}/fine`:i>1?`${e}/curved`:e;return{image:this.pipeline(n,s.frag,this.texImage,i),video:s.videoFrag?this.pipeline(`${n}/video`,s.videoFrag,this.texVideo,i):null}}pipeline(e,i,s,n){const r=this.device.createShaderModule({label:e,code:sS+i});return r.getCompilationInfo?.().then(o=>{for(const a of o.messages)a.type==="error"&&console.error(`[gpu] ${e} shader ${a.lineNum}:${a.linePos} — ${a.message}`)}),this.device.createRenderPipeline({label:e,layout:this.device.createPipelineLayout({bindGroupLayouts:[this.globals,this.plane,s]}),vertex:{module:r,entryPoint:"vs",constants:{SEG:n}},fragment:{module:r,entryPoint:"fs",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"},multisample:{count:Ns}})}}const Rr=(t,e,i,s)=>{const n=Math.min(s,.03333333333333333),r=2*Math.PI*e;return t.velocity+=(-2*i*r*t.velocity-r*r*(t.value-t.target))*n,t.value+=t.velocity*n,t.value},En={scale:.6,jump:400,in:30,out:14},Md=(t,e,i,s)=>e+(t-e)*Math.exp(-i*s),Oi={freq:1.6,damping:.94},hE=[0,0],Jl=[0,0];class vt{constructor({core:e,el:i,src:s,video:n=null,hls:r=null,frame:o=null,canvas:a=null,order:l=0,material:u="media",slot:c,flip:h=!1}){this.u={alpha:0,dim:1,shift:0,scroll:0,winX:0,winY:0,winW:0,winH:0,winOn:0,radius:0,custom:[0,0,0,0],inked:0,spin:0,curve:0,clip:[0,0,0,0],clipR:0,clipBow:0,clipFade:0,fade:0,fadeX:0,bow:0,rim:1,press:[.5,.5],mark:[0,0,0,0],markC:[1,1,1],wash:0,lift:[0,0,0,0],liftX:1,shrink:[0,0,0],reach:1.2,depth:1,scale:1,clipOn:0},this.tag=0,this.pose=null,this.streak={x:0,y:0},this.prevPose=null,this.dying=!1,this.occludes=!1,this.snap=!1,this.held=!1,this.holdUntil=0,this.lastRect=null,this.flip=!1,this.spinFly=!1,this.flyDelay=0,this.spinFrom=null,this.frozenQuad=!1,this.tweenFly=!1,this.flyT=0,this.tweenFrom=null,this.tweenAt=null,this.homeward=!1,this.ghostEl=null,this.ghostDone=!1,this.onArrive=null,this.bornAt=performance.now(),this.flight=null,this.needRadius=!1,this.parked=!1,this.offset={x:0,y:0},this.resting=!1,this.offscreen=!1,this.tex=null,this.group=null,this.drawnIn=0,this.video=null,this.streams=null,this.prior=null,this.priorSrc=null,this.handed=!1,this.frame=null,this.revealed=!1,this.liveCanvas=null,this.liveDirty=!0,this.st=null,this.unframe=null,this.retired=!1,this.core=e,this.el=i,this.box=new hl(i),this.src=s,this.videoSrc=n,this.frame=n&&o?.[0]&&o[1]?o:null;const f=n?e.textures.upgrade(n,r):null;this.streams=n&&f&&this.frame?[n,f]:null,this.material=u,this.order=l,this.baseOrder=l,this.slot=c,this.flip=h,this.loaded=new Promise(d=>{this.setLoaded=d}),a?(this.liveCanvas=a,this.revealed=!0,this.u.alpha=1,this.setLoaded(!0)):s?(e.textures.retain(s),this.streams&&(this.videoSrc=this.choose(this.need(i.getBoundingClientRect()))),this.acquire(!0),this.videoSrc&&this.wireVideo(this.videoSrc)):(this.revealed=!0,this.u.alpha=1,this.setLoaded(!0)),this.sync(),this.measure(),this.scrub()}glide(e,i=null){if(!e||this.dying)return;this.ghostEl=e,this.ghostDone=!1,this.onArrive=i;const s=this.pose??this.lastRect;this.tweenFrom=s?{left:s.left,top:s.top,width:s.width,height:s.height}:null,this.tweenFly=!0,this.flyT=0,this.tweenAt=null,this.order=100;const n=e.getBoundingClientRect();this.u.custom=[n.left,n.top,n.width,n.height],this.frozenQuad=!0,z.killTweensOf(this,"flyT"),z.killTweensOf(this.u,"curve"),z.to(this,{flyT:1,duration:1.25,ease:"snappy"}),z.to(this.u,{curve:1,duration:1.25,ease:"snappy"})}recall(){if(!this.ghostEl||this.dying)return;const e=[...this.u.custom],i=this.pose??this.lastRect;this.ghostEl=null,this.ghostDone=!1,this.onArrive=null,this.attach(this.el,!1),this.u.custom=e,this.frozenQuad=!0,this.tweenFrom=i?{left:i.left,top:i.top,width:i.width,height:i.height}:null}seenRect(e){const i=this.projectRect(e);return i?{left:i.left+i.width/2-e.width/2,top:i.top+i.height/2-e.height/2,width:e.width,height:e.height}:null}seen(){if(this.u.curve<=.5){if(!this.pose)return null;const d=this.lifted(this.shrunk(this.pose)),[g,p]=this.sway(d.top,d.height);return!g&&!p?{rect:d,facing:1}:{rect:{left:d.left+g,top:d.top,width:d.width+p-g,height:d.height},facing:1}}const e=this.pose,i=this.core.surface;if(!e||i[2]<1)return null;const[s,n,r]=[i[0],i[1],Math.max(i[2],1)],o=i[3],a=(i[5]||0)/r;let l=(e.left+e.width/2-s)/r+o;a>.001&&(l-=Math.round(l/a)*a);const u=(e.top+e.height/2-n)/r,c=Math.cos(u)*Math.cos(l),h=Math.abs(e.width*c),f=Math.abs(e.height*Math.cos(u));return{rect:{left:s+r*Math.cos(u)*Math.sin(l)-h/2,top:n+r*Math.sin(u)-f/2,width:h,height:f},facing:c}}sway(e,i){if(!this.u.bow)return hE;const s=this.core.height,n=-this.u.bow*(1-Math.cos(Math.min(1,Math.max(0,e/s))*Math.PI/2)),r=-this.u.bow*(1-Math.cos(Math.min(1,Math.max(0,(e+i)/s))*Math.PI/2));return Jl[0]=Math.min(n,r),Jl[1]=Math.max(n,r),Jl}projectRect(e){const i=this.core.surface,[s,n,r]=[i[0],i[1],Math.max(i[2],1)];if(i[2]<1)return null;const o=i[3],a=(i[5]||0)/r;let l=(e.left+e.width/2-s)/r+o;a>.001&&(l-=Math.round(l/a)*a);const u=(e.top+e.height/2-n)/r,c=e.width*Math.cos(u)*Math.cos(l),h=e.height*Math.cos(u);return{left:s+r*Math.cos(u)*Math.sin(l)-c/2,top:n+r*Math.sin(u)-h/2,width:c,height:h}}shrunk(e){const[i,s,n]=this.u.shrink;if(!n)return e;const r=1+n;return{left:i+(e.left-i)*r,top:s+(e.top-s)*r,width:e.width*r,height:e.height*r}}lifted(e){const[i,s,n,r]=this.u.lift;if(n<=0)return e;const o=Math.max(this.u.liftX,1),a=this.core.ww/2/o,l=1+n*(1/3+a*a/6),u=(b,v)=>{const x=Math.max(v-s,0)/Math.max(r,1),k=(b-i)/o,R=(1+n*x*x*(1+k*k))/l;return[i+(b-i)*R,s+(v-s)*R]},[c,h]=u(e.left,e.top),[f,d]=u(e.left+e.width,e.top),[g,p]=u(e.left,e.top+e.height),[_,w]=u(e.left+e.width,e.top+e.height),y=Math.min(c,f,g,_),m=Math.min(h,d,p,w);return{left:y,top:m,width:Math.max(c,f,g,_)-y,height:Math.max(h,d,p,w)-m}}get flying(){return!!this.flight||this.tweenFly||!!this.ghostEl}handoff(){const e=this.video;if(!e||e.shown||!this.prior?.shown||this.handed)return null;const i=e.el;if(i.readyState<3)return this.priorSrc;this.handed=!0;const s=this.prior.el.currentTime,n=i.buffered;for(let r=0;r<n.length;r++)if(s>=n.start(r)&&s<n.end(r)-.1){i.currentTime=s;break}return null}get videoEl(){return this.prior?.shown?this.prior.el:this.video?.shown?this.video.el:null}touch(){this.liveDirty=!0}acquire(e){const i=this.el.getBoundingClientRect(),s=this.videoSrc?this.core.textures.poster(this.videoSrc):1/0;i.width&&this.core.textures.size(this.src,Math.min(s,Math.ceil(i.width*this.core.dpr)));const n=this.core.textures.warm(this.src);if(n){this.take(n),this.revealed=!0,this.u.alpha=1,e&&this.setLoaded(!0);return}this.core.textures.ready(this.src,r=>{this.take(r),this.reveal(),e&&this.setLoaded(!0)}),e&&this.core.textures.load(this.src).then(r=>{r||this.setLoaded(!1)})}take(e){this.tex=e,this.group=null}wireVideo(e){const i=this.core.textures.useVideo(e);this.video=i,!i.shown&&this.prior?.shown&&i.el.preload==="none"&&(i.at=this.prior.el.currentTime);const s=i.el;let n=!1;const r=()=>{if(this.unframe=null,this.dying)return;const a=this.prior?.shown?this.prior.el:null;if(a&&!n&&s.duration&&Math.abs(s.currentTime-a.currentTime)>.25)return n=!0,s.currentTime=(a.currentTime+.05)%s.duration,o();this.release(),this.reveal(),this.setLoaded(!0)},o=()=>{if(typeof s.requestVideoFrameCallback=="function"){const a=s.requestVideoFrameCallback(r);this.unframe=()=>s.cancelVideoFrameCallback?.(a)}else{const a=s.paused?"playing":"seeked";s.addEventListener(a,r,{once:!0}),this.unframe=()=>s.removeEventListener(a,r)}};if(i.shown)return n=!0,r();o()}need(e){const[i,s]=this.frame;return Math.max(e.width/i,e.height/s)*Math.min(i,s)*this.core.dpr}choose(e){const[i,s]=this.streams;if(!this.core.textures.streamable(s))return i;const n=this.core.textures.lines(i);return e>n*1.25?s:e<n*1.05?i:this.videoSrc??i}fit(){if(!this.streams||!this.pose||this.flying||this.resting||this.dying)return;const e=this.choose(this.need(this.pose));e!==this.videoSrc&&this.swap(e)}swap(e){const i=this.core.textures,s=this.video?.shown?this.video:this.prior?.shown?this.prior:null,n=s===this.video?this.videoSrc:this.priorSrc;this.unframe?.(),this.unframe=null,this.video&&this.video!==s&&i.dropVideo(this.videoSrc),this.prior&&this.prior!==s&&i.dropVideo(this.priorSrc),this.prior=s,this.priorSrc=s?n:null,this.videoSrc=e,this.handed=!1,this.wireVideo(e)}release(){this.handed=!1,this.prior&&(this.core.textures.dropVideo(this.priorSrc),this.prior=null,this.priorSrc=null)}scrub(){this.st?.kill(),this.st=null;const e=this.el.dataset.parallax;if(!e)return;let i;try{i=JSON.parse(e)}catch{return}if(!Array.isArray(i)||i.length!==2)return;const[s,n]=i.map(Number);!isFinite(s)||!isFinite(n)||(this.u.scroll=s/100,this.st=z.fromTo(this.u,{scroll:s/100},{scroll:n/100,ease:"none",scrollTrigger:{trigger:this.el,start:"clamp(top bottom)",end:"clamp(bottom top)",scrub:!0}}).scrollTrigger??null)}sudden(){this.dying||this.retired||(this.revealed=!0,z.killTweensOf(this.u,"alpha"),this.u.alpha=1)}reveal(){this.revealed||this.dying||(this.revealed=!0,!this.retired&&z.to(this.u,{alpha:1,duration:.5,ease:"power1.out"}))}sync(e=1/60){if(!this.dying){if(this.material==="ground"){if(this.el.isConnected){const i={left:0,top:0,width:this.core.width,height:this.core.height};this.pose=i,this.lastRect=i}return}if(this.tweenFly&&this.tweenFrom&&this.ghostEl){const i=this.ghostEl.isConnected?this.ghostEl.getBoundingClientRect():null,s=i?this.seenRect({left:i.left,top:i.top,width:i.width,height:i.height})??i:null;if(s){const n=this.flyT;this.tweenAt&&(this.tweenFrom.left+=s.left-this.tweenAt.left,this.tweenFrom.top+=s.top-this.tweenAt.top),this.tweenAt={left:s.left,top:s.top,width:s.width,height:s.height},this.frozenQuad&&i&&(this.u.custom=[i.left,i.top,i.width,i.height]),this.pose={left:this.tweenFrom.left+(s.left-this.tweenFrom.left)*n,top:this.tweenFrom.top+(s.top-this.tweenFrom.top)*n,width:this.tweenFrom.width+(s.width-this.tweenFrom.width)*n,height:this.tweenFrom.height+(s.height-this.tweenFrom.height)*n},this.lastRect=this.pose,n>=.999&&!this.ghostDone&&(this.ghostDone=!0,this.fade(.18),this.onArrive?.(),this.onArrive=null),this.ghostDone&&this.u.alpha<.01&&(this.ghostDone=!1,this.ghostEl=null,this.tweenFly=!1,this.tweenFrom=null,this.tweenAt=null,this.frozenQuad=!1,this.u.custom=[0,0,0,0],this.order=this.baseOrder)}else this.pose=this.tweenFrom;return}if(this.flight){const i=this.flight;if(this.spinFly&&this.spinFrom){if(!this.parked&&this.el.isConnected){const r=this.box.read(!0),o=this.u.spin,a=Math.min(1,1.18*(o-Math.sin(2*Math.PI*o)/(2*Math.PI)));this.pose={left:this.spinFrom.left+(r.left-this.spinFrom.left)*a,top:this.spinFrom.top+(r.top-this.spinFrom.top)*a,width:this.spinFrom.width+(r.width-this.spinFrom.width)*a,height:this.spinFrom.height+(r.height-this.spinFrom.height)*a},this.u.radius=i.r.value+(i.r.target-i.r.value)*a,o>=.999&&(i.x.target=r.left,i.y.target=r.top,i.w.target=r.width,i.h.target=r.height,this.land())}else this.spinFrom&&(this.pose=this.spinFrom);return}if(this.tweenFly&&this.tweenFrom){if(!this.parked&&this.el.isConnected){const r=this.box.read(!0),o=this.homeward?this.seenRect(r)??r:r,a=this.flyT;this.tweenAt&&(this.tweenFrom.left+=o.left-this.tweenAt.left,this.tweenFrom.top+=o.top-this.tweenAt.top),this.tweenAt={left:o.left,top:o.top,width:o.width,height:o.height},this.homeward&&this.frozenQuad&&(this.u.custom=[r.left,r.top,r.width,r.height]),this.pose={left:this.tweenFrom.left+(o.left-this.tweenFrom.left)*a,top:this.tweenFrom.top+(o.top-this.tweenFrom.top)*a,width:this.tweenFrom.width+(o.width-this.tweenFrom.width)*a,height:this.tweenFrom.height+(o.height-this.tweenFrom.height)*a},this.u.radius=i.r.value+(i.r.target-i.r.value)*a,a>=.999&&(i.x.target=o.left,i.y.target=o.top,i.w.target=o.width,i.h.target=o.height,this.land())}else this.tweenFrom&&(this.pose=this.tweenFrom);return}if(this.parked){if(this.el.isConnected){const r=this.box.read(!0);i.x.target=r.left,i.y.target=r.top,i.w.target=r.width,i.h.target=r.height}i.sx=window.scrollX,i.sy=window.scrollY,this.pose={left:i.x.value,top:i.y.value,width:i.w.value,height:i.h.value};return}const s=window.scrollX,n=window.scrollY;if(this.el.isConnected){this.needRadius&&(this.needRadius=!1,this.measure()),i.x.value-=s-i.sx,i.y.value-=n-i.sy;const r=this.box.read(!0);i.x.target=r.left,i.y.target=r.top,i.w.target=r.width,i.h.target=r.height}i.sx=s,i.sy=n,Rr(i.x,Oi.freq,Oi.damping,e),Rr(i.y,Oi.freq,Oi.damping,e),Rr(i.w,Oi.freq,Oi.damping,e),Rr(i.h,Oi.freq,Oi.damping,e),Rr(i.r,Oi.freq,Oi.damping,e),this.u.radius=i.r.value,this.pose={left:i.x.value,top:i.y.value,width:i.w.value,height:i.h.value},this.el.isConnected&&this.arrived()&&this.land();return}if(this.el.isConnected){const i=this.box.read(!1),s={left:i.left,top:i.top,width:i.width,height:i.height};if(this.snap){const n=this.core.dpr;s.top=Math.round(s.top*n)/n,s.height=Math.max(1,Math.round(s.height*n))/n}this.lastRect=s,this.pose=s;return}this.held&&this.lastRect&&(this.pose=this.lastRect)}}arrived(){const e=this.flight,i=s=>Math.abs(s.value-s.target)<.5&&Math.abs(s.velocity)<12;return i(e.x)&&i(e.y)&&i(e.w)&&i(e.h)&&i(e.r)}land(){const e=this.flight;this.u.radius=e.r.target;const i=this.tweenFly||this.spinFly;this.pose=i&&this.el.isConnected?this.box.read(!0):{left:e.x.target,top:e.y.target,width:e.w.target,height:e.h.target},this.lastRect=this.pose,this.flight=null,this.order=this.baseOrder,this.spinFly=!1,this.spinFrom=null,this.tweenAt=null,this.frozenQuad&&(this.u.custom=[0,0,0,0],this.frozenQuad=!1),this.tweenFly=!1,this.tweenFrom=null,this.flyT=0,this.homeward=!1}motion(e){const i=this.pose;if(!i)return this.still();const s=this.prevPose;this.prevPose={left:i.left,top:i.top};let n=0,r=0;if(s){const o=i.left-s.left,a=i.top-s.top;if(Math.max(Math.abs(o),Math.abs(a))<En.jump){const l=En.scale*.5/(60*Math.max(e,1e-4));n=Math.abs(o)*l,r=Math.abs(a)*l}}this.streak.x=Md(this.streak.x,n,n>this.streak.x?En.in:En.out,e),this.streak.y=Md(this.streak.y,r,r>this.streak.y?En.in:En.out,e),this.streak.x<.05&&(this.streak.x=0),this.streak.y<.05&&(this.streak.y=0)}still(){this.prevPose=null,this.streak.x=0,this.streak.y=0}write(e,i,s=1){const n=this.pose;if(!n)return;const r=this.u;e[i]=n.left+this.offset.x,e[i+1]=n.top+this.offset.y,e[i+2]=n.width,e[i+3]=n.height,e[i+4]=this.frame?.[0]||this.videoEl?.videoWidth||this.tex?.width||1,e[i+5]=this.frame?.[1]||this.videoEl?.videoHeight||(this.tex?.aspect?this.tex.width/this.tex.aspect:this.tex?.height)||1,e[i+6]=r.radius;const o=Math.max(0,Math.min(1,r.curve));e[i+7]=r.alpha*(s+(1-s)*(1-o)),e[i+8]=r.dim,e[i+9]=r.curve,e[i+10]=r.shift,e[i+11]=r.scroll,e[i+12]=r.winX,e[i+13]=r.winY,e[i+14]=r.winW,e[i+15]=r.winH,e[i+16]=r.winOn,e[i+17]=r.clipOn,e[i+18]=r.inked,e[i+19]=r.spin,e[i+20]=r.custom[0],e[i+21]=r.custom[1],e[i+22]=r.custom[2],e[i+23]=r.custom[3],e[i+24]=r.clip[0],e[i+25]=r.clip[1],e[i+26]=r.clip[2],e[i+27]=r.clip[3],e[i+28]=r.clipR,e[i+29]=this.streak.x,e[i+30]=this.streak.y,e[i+31]=r.clipBow,e[i+32]=r.bow,e[i+33]=r.clipFade,e[i+34]=r.rim,e[i+35]=r.scale,e[i+36]=r.press[0],e[i+37]=r.press[1],e[i+38]=r.reach,e[i+39]=r.depth,e[i+40]=r.mark[0],e[i+41]=r.mark[1],e[i+42]=r.mark[2],e[i+43]=r.mark[3],e[i+44]=r.markC[0],e[i+45]=r.markC[1],e[i+46]=r.markC[2],e[i+47]=0,e[i+48]=r.wash,e[i+49]=0,e[i+50]=0,e[i+51]=0,e[i+52]=r.lift[0],e[i+53]=r.lift[1],e[i+54]=r.lift[2],e[i+55]=r.lift[3],e[i+56]=r.liftX,e[i+57]=r.shrink[0],e[i+58]=r.shrink[1],e[i+59]=r.shrink[2]}cut(e,i=0,s=0,n=0){if(!e){this.u.clipOn=0;return}this.u.clipOn=1,this.u.clip[0]=e.left,this.u.clip[1]=e.top,this.u.clip[2]=e.width,this.u.clip[3]=e.height,this.u.clipR=i,this.u.clipBow=s,this.u.clipFade=n}measure(){if(!this.el.isConnected)return;const e=getComputedStyle(this.el),i=parseFloat(e.borderRadius)||0;this.flight?this.flight.r.target=i:this.u.radius=i;const s=e.zIndex;if(s!=="auto"){const n=parseInt(s,10);isFinite(n)&&(this.baseOrder=n,this.flight||(this.order=n))}}dim(e,i=.6){z.to(this.u,{dim:e,duration:i,ease:"power2.out",overwrite:"auto"})}window(e,i,s,n,r=1){this.u.winX=e,this.u.winY=i,this.u.winW=s,this.u.winH=n,this.u.winOn=r}freezeScrub(){this.st?.disable(!1)}stale(){this.box.stale()}drift(){return this.box.drift()}settle(e){!e||this.dying||(z.killTweensOf(this,"flyT"),z.killTweensOf(this.u,"curve"),this.flight=null,this.tweenFly=!1,this.tweenFrom=null,this.tweenAt=null,this.spinFly=!1,this.spinFrom=null,this.ghostEl=null,this.ghostDone=!1,this.homeward=!1,this.flyT=0,this.u.spin=0,this.frozenQuad=!1,this.u.custom=[0,0,0,0],this.order=this.baseOrder,this.el=e,this.box.adopt(e),this.held=!1,this.scrub(),this.pose=null,this.lastRect=null,this.sync(),this.measure())}attach(e,i){const s=this.pose??this.lastRect;if(this.el=e,this.box.adopt(e),this.held=!1,this.scrub(),!s){this.sync(),this.measure();return}if(!this.flight){const n=r=>({value:r,velocity:0,target:r});this.flight={x:n(s.left),y:n(s.top),w:n(s.width),h:n(s.height),r:n(this.u.radius),sx:window.scrollX,sy:window.scrollY}}if(this.measure(),this.needRadius=!this.el.isConnected,this.order=100,!this.spinFly){z.killTweensOf(this.u,"curve");const n=i===void 0?this.u.curve>.5:!i,r=n?this.lastRect??this.pose:(()=>{const a=e.getBoundingClientRect();return{left:a.left,top:a.top,width:a.width,height:a.height}})();r&&(this.u.custom=[r.left,r.top,r.width,r.height],this.frozenQuad=!0);const o=(n&&r?this.seenRect(r):null)??this.pose??this.lastRect;this.tweenFrom=o?{left:o.left,top:o.top,width:o.width,height:o.height}:null,this.homeward=!n,this.tweenFly=!0,this.flyT=0,this.tweenAt=null,z.killTweensOf(this,"flyT"),z.to(this,{flyT:1,duration:1.25,ease:"snappy"}),z.to(this.u,{curve:n?0:1,duration:1.25,ease:"snappy"})}this.u.shift&&z.to(this.u,{shift:0,duration:1.2,ease:"expo.inOut"}),this.spinFly&&(this.spinFrom=s?{...s}:null,z.killTweensOf(this.u,"spin,curve"),this.u.spin=0,z.to(this.u,{spin:1,duration:1.25,ease:"power3.inOut",delay:this.flyDelay}),z.to(this.u,{curve:0,duration:.8,ease:"power2.inOut",delay:this.flyDelay+.4})),this.flyDelay>0&&(this.parked=!0,z.delayedCall(this.flyDelay,()=>{this.parked=!1}),this.flyDelay=0)}setParallax(e){this.u.shift=e}retire(e,i=!0){if(!this.dying){if(this.dying=!0,z.killTweensOf(this),z.killTweensOf(this.u),!i){this.dispose(),e();return}z.to(this.u,{alpha:0,duration:.3,ease:"power1.out",onComplete:()=>{this.dispose(),e()}})}}fade(e,i=0){z.killTweensOf(this.u),z.to(this.u,{alpha:0,duration:e,delay:i,ease:"power1.out"})}appear(e,i=0){this.dying||!this.revealed||(z.killTweensOf(this.u),this.u.alpha=0,z.to(this.u,{alpha:1,duration:e,delay:i,ease:"power1.out"}))}reset(){this.tex=null,this.group=null,this.dying||this.acquire(!1)}dispose(){this.st?.kill(),this.st=null,this.src&&!this.liveCanvas&&this.core.textures.release(this.src),this.unframe?.(),this.unframe=null,this.videoSrc&&this.core.textures.dropVideo(this.videoSrc),this.release(),this.liveCanvas&&this.tex&&(this.tex.texture.destroy(),this.tex=null)}}const fE=12,dE=2,pE=350,gE=150,Zl=Math.PI*2/gE,Ad=1,mE=.1,vE=3,yE=20*Math.PI/180,Od=.9,Ke={radius:1.35,crest:-.08,globeB:.168,conform:1,fadeLift:-.04,fadeSpan:.04,velGrow:0,velNorm:900,velIn:9,velOut:3.5,inks:tn,inkPeriod:9,color:[1,1,1],alpha:.2,width:.6,ringA:.9},Io=(t,e,i,s)=>e+(t-e)*Math.exp(-i*s);class wE{constructor(e){if(this.el=null,this.clip=null,this.reach=0,this.raised={left:0,top:0,width:0,height:0},this.velTarget=0,this.vel=0,this.travel=0,this.aim=null,this.aimT=0,this.mini=0,this.boost=0,this.fullR=1,this.hush=0,this.tint=0,this.tintSize=1,this.tintRate=0,this.tintPhase=0,this.still=!1,this.outline=0,this.opacity=1,this.zoomT=1,this.panXT=0,this.panYT=0,this.focusX=0,this.focusY=0,this.spread=0,this.dir=1,this.flatAmt=1,this.rawClock=0,this.data=new Float32Array(24),this.buffer=null,this.pipe=null,this.group=null,this.layout=null,this.shown=[],this.live=[],this.colW=-1,this.colH=-1,this.col=null,this.period=0,this.rowEl=null,this.anchorX=0,this.windPa=0,this.fluid=null,this.boundDye=null,this.inkClock=0,this.ink=[0,0,0],this.ringPhase=0,this.ringSeeded=!1,this.ringTops=new WeakMap,this.calm=!1,this.covered=!1,this.heading={x:-Math.SQRT1_2,y:Math.SQRT1_2},this.spinDir=-1,this.push={x:0,y:0},this.lean={x:0,y:0},this.lock="none",this.lifted=!1,this.slideV=0,this.swept=0,this.rot=0,this.rotTarget=0,this.rest=1,this.rotVel=0,this.dragging=!1,this.lastX=0,this.lastY=0,this.lastT=0,this.axis="none",this.went={x:0,y:0},this.pid=null,this.box=null,this.boxAt={ww:-1,wh:-1},this.drag=null,this.down=i=>{i.button===0&&this.pid===null&&(this.pid=i.pointerId,this.dragging=!0,this.banked=i.pointerType==="mouse"?null:{vel:this.rotVel,gap:this.rotTarget-this.rot,at:performance.now()},this.rotVel=0,this.rotTarget=this.rot,this.lastX=i.clientX,this.lastY=i.clientY,this.lastT=performance.now(),this.axis="none",this.lock="none",this.lifted=!1,this.went.x=0,this.went.y=0)},this.move=i=>{if(!this.dragging||i.pointerId!==this.pid)return;const s=performance.now(),n=i.clientX-this.lastX,r=i.clientY-this.lastY;if(r&&i.pointerType==="mouse"&&this.drag?.(-r),i.pointerType!=="mouse"&&(this.went.x+=Math.abs(n),this.went.y+=Math.abs(r),this.axis==="none"&&this.went.x+this.went.y>=fE&&(this.axis=this.went.x>this.went.y?"x":"y",this.lock=this.axis),this.axis==="y")){this.lastX=i.clientX,this.lastY=i.clientY,this.lastT=s;return}const o=i.pointerType==="mouse"?dE/this.rest:1/this.rest;n&&this.axis==="x"&&this.spend(n,s),this.rotTarget+=n*o,this.felt(-n*o*this.rest,0);const a=Math.max((s-this.lastT)/1e3,1/60),l=n*o/a;this.rotVel=Math.max(-4,Math.min(4,this.rotVel*.6+l*.4)),this.lastX=i.clientX,this.lastY=i.clientY,this.lastT=s},this.banked=null,this.up=i=>{!this.dragging||i.pointerId!==this.pid||(this.dragging=!1,this.pid=null,this.rotVel=Math.max(-4,Math.min(4,this.rotVel)),this.lifted=!0)},this.cancel=i=>{i.pointerId===this.pid&&(this.dragging=!1,this.pid=null,this.rotVel=0,this.push.x=this.push.y=0,this.lean.x=this.lean.y=0,this.lock="none")},this.sampler=null,this.reset=()=>{this.buffer=null,this.pipe=null,this.group=null},this.changed=()=>{if(this.fluid?.active)return!0;const i=this.signature(this.live);if(i.length!==this.shown.length)return!0;for(let s=0;s<i.length;s++)if(i[s]!==this.shown[s])return!0;return!1},this.draw=i=>{if(!this.clip||!this.core.device)return;if(this.pipe||this.init(),this.covered){this.shown=this.signature(this.shown);return}if(this.core.surface[12]>=1){this.shown=this.signature(this.shown);return}if(this.core.surface[2]<.5){this.shown=this.signature(this.shown);return}const s=this.fluid?.dye??this.core.textures.blank?.view??null;s&&s!==this.boundDye&&this.bind(),this.group&&(this.core.device.queue.writeBuffer(this.buffer,0,this.data),i.pass.setPipeline(this.pipe),i.pass.setBindGroup(0,this.group),i.pass.draw(ad*ld*6),i.draws+=1,this.shown=this.signature(this.shown))},this.core=e,this.core.add(this.draw,{order:po.grid,dirty:this.changed,reset:this.reset}),typeof window<"u"&&window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion: reduce)");this.calm=i.matches,i.addEventListener?.("change",s=>this.calm=s.matches)}}get speed(){return this.vel}ringTrack(){const e=this.rowEl?.parentElement?.children;if(!e)return;const i=[];let s=null;for(const o of e){const a=o;if(!a.isConnected)continue;this.ringSeeded||(this.ringSeeded=!0,this.ringPhase=a._vrect?.top??a.getBoundingClientRect().top);const l=a._vrect?.top??a.getBoundingClientRect().top,u=this.ringTops.get(a);s===null&&(s=l),this.ringTops.set(a,l),u!==void 0&&i.push(l-u)}if(!i.length)return;i.sort((o,a)=>o-a);const n=i[i.length>>1];i.filter(o=>Math.abs(o-n)<.5).length*2<i.length&&s!==null?this.ringPhase=s:this.ringPhase+=n}get slide(){return this.slideV}moved(e,i=0){this.swept+=e,this.felt(e,i)}felt(e,i){this.lock!=="y"&&(this.push.x+=e),this.lock!=="x"&&(this.push.y+=i)}claim(e){this.el&&this.el!==e&&this.unhand(this.el),this.el=e,this.colW=-1,this.box=null,e&&this.hand(e)}aimTarget(e){const i=(e-this.core.surface[0])/this.rest+this.rotTarget,s=this.period/this.rest,n=s>.001?i-Math.round(i/s)*s:i;return this.rotTarget-n}get around(){const e=this.period/this.rest;if(e<=.001)return 0;const i=this.rot/e;return i-Math.floor(i)}snapTurn(e){this.rotTarget=e,this.rot=e,this.rotVel=0}boxOf(e){if(this.box&&this.boxAt.ww===this.core.ww&&this.boxAt.wh===this.core.wh)return this.box;const i=e.getBoundingClientRect();return this.box={left:i.left,top:i.top,width:i.width,height:i.height},this.boxAt.ww=this.core.ww,this.boxAt.wh=this.core.wh,this.box}hand(e){typeof window<"u"&&new URLSearchParams(location.search).has("nospin")||(e.addEventListener("pointerdown",this.down),window.addEventListener("pointermove",this.move,{passive:!0}),window.addEventListener("pointerup",this.up),window.addEventListener("pointercancel",this.cancel))}unhand(e){e.removeEventListener("pointerdown",this.down),window.removeEventListener("pointermove",this.move),window.removeEventListener("pointerup",this.up),window.removeEventListener("pointercancel",this.cancel)}spend(e,i){const s=this.banked;if(!s)return;this.banked=null;const n=s.vel||s.gap;i-s.at>pE||!n||Math.sign(e)!==Math.sign(n)||(this.rotVel=s.vel,this.rotTarget+=s.gap)}velocity(e){this.velTarget=Math.min(1,Math.abs(e)/Ke.velNorm)}holds(e){return!!this.el?.contains(e)}sync(e){this.ringTrack(),this.vel=Io(this.vel,this.velTarget,this.velTarget>this.vel?Ke.velIn:Ke.velOut,e);const i=!this.el?.isConnected||this.travel>=1||this.covered,s=Zl*this.rest;if(this.swept&&(this.rotTarget-=this.swept/this.rest),this.swept=0,e>0){const L=1-Math.exp(-e/mE);this.lean.x+=(this.push.x/e-this.lean.x)*L,this.lean.y+=(this.push.y/e-this.lean.y)*L,this.push.x=this.push.y=0,this.lifted&&!this.dragging&&(this.lock="none",this.lifted=!1)}const n=Math.hypot(this.lean.x,this.lean.y)>s*vE;if(n){const L=Math.PI/2;let q=Math.atan2(this.lean.y,this.lean.x);const ce=Math.round(q/L)*L;Math.abs(q-ce)<yE&&(q=ce),this.heading.x=Math.abs(Math.cos(q))<1e-6?0:Math.cos(q),this.heading.y=Math.abs(Math.sin(q))<1e-6?0:Math.sin(q),this.heading.x&&(this.spinDir=Math.sign(this.heading.x))}const r=this.calm||i||this.still?0:1-Math.min(1,Math.max(0,this.travel)),o=Math.min(1,Math.max(0,this.aimT)),a=-(this.heading.x*(1-o)+this.spinDir*o)*Zl*r,l=(this.heading.y*(1-o)*s+Math.sign(this.heading.y)*Math.max(0,this.boost)*Zl*this.fullR)*r;i&&!this.dragging?(this.rotVel=0,this.slideV=0):this.dragging?this.slideV=0:(n&&(a&&Math.sign(a)===Math.sign(-this.lean.x)&&Math.abs(this.rotVel)<Math.abs(a)&&(this.rotVel=a),l&&Math.sign(l)===Math.sign(this.lean.y)&&Math.abs(this.slideV)<Math.abs(l)&&(this.slideV=l)),this.boost>0&&this.fullR>1&&(this.slideV=l),this.rotVel=Io(this.rotVel,a,Math.abs(this.rotVel)>Math.abs(a)?2.5:Ad,e),Math.abs(this.rotVel-a)<5e-4&&(this.rotVel=a),this.slideV=Io(this.slideV,l,Math.abs(this.slideV)>Math.abs(l)?2.5:Ad,e),Math.abs(this.slideV-l)<.05&&(this.slideV=l),this.rotTarget+=this.rotVel*e),this.rot=Io(this.rot,this.rotTarget,12,e),Math.abs(this.rot-this.rotTarget)<2e-4&&(this.rot=this.rotTarget);const u=this.period/this.rest;if(u>.001&&Math.abs(u-this.windPa)<1e-4){const L=Math.round(this.rot/u);L!==0&&(this.rot-=L*u,this.rotTarget-=L*u)}this.windPa=u;const c=this.el;if(!c?.isConnected){this.clip=null;return}const h=this.boxOf(c);if(this.reach>0){const L=this.raised;L.left=h.left,L.top=h.top-this.reach,L.width=h.width,L.height=h.height+this.reach,this.clip=L}else this.clip=h;const f=Math.max(0,Math.min(1,this.aimT)),d=this.aim,g=d&&f>0?{left:h.left+(d.left-h.left)*f,top:h.top+(d.top-h.top)*f,width:h.width+(d.width-h.width)*f,height:h.height+(d.height-h.height)*f}:h,p=Math.hypot(g.width,g.height)/2*Ke.radius,_=p*(1-this.vel*Ke.velGrow)*(1-.12*this.travel);this.rest=Math.max(p,1);const w=Math.hypot(h.width,h.height)/2*Ke.radius;this.fullR=Math.max(w,1);const y=1+(Math.max(1,w/this.rest)-1)*Math.min(1,Math.max(0,this.mini)),m=g.left+g.width/2,b=g.top+g.height*Ke.crest+_;this.fluid?.active&&(this.inkClock+=e),this.tint>0&&(this.tintPhase=(this.tintPhase+e*this.tintRate)%1);const v=Ke.inks,k=this.inkClock/Ke.inkPeriod%1*v.length,R=Math.floor(k)%v.length,S=(R+1)%v.length,P=k-Math.floor(k),A=P*P*(3-2*P),M=[v[R][0]+(v[S][0]-v[R][0])*A,v[R][1]+(v[S][1]-v[R][1])*A,v[R][2]+(v[S][2]-v[R][2])*A],D=this.core.surface;D[0]=m,D[1]=b,D[2]=_,D[3]=_>0?this.rot*this.rest/_:0,D[4]=Ke.conform,D[5]=this.period,D[6]=Ke.fadeLift,D[7]=Ke.fadeLift+Ke.fadeSpan,D[8]=M[0],D[9]=M[1],D[10]=M[2],D[11]=this.hush,D[12]=this.travel,D[13]=this.zoomT,D[14]=this.panXT,D[15]=this.panYT,D[16]=this.focusX,D[17]=this.focusY,D[18]=this.spread,D[19]=this.dir,D[20]=this.flatAmt,D[21]=this.rawClock,D[22]=this.rot*this.rest*y,D[23]=y,D[24]=this.tintPhase,D[25]=this.tintSize,D[27]=this.tint,this.core.writeCurve(D),this.ink=M;const F=this.column(g),O=_*y*Math.PI*.5,C=d?Math.min(1,Math.max(0,(f-Od)/(1-Od))):0;this.data.set([m-O-this.rot*this.rest*y,b-O,O*2,O*2,F,1e8,F,Ke.width,Ke.color[0],Ke.color[1],Ke.color[2],Ke.alpha*(1-this.travel)*this.opacity,Ke.ringA,1,this.ringPhase,this.anchorX,h.left,0,h.width,h.top+h.height,0,this.outline*C*C*(3-2*C),0,0])}column(e){return(this.colW!==e.width||this.colH!==this.core.wh)&&(this.col=this.measure(),this.colH=this.core.wh,this.colW=this.col===null?-1:e.width),this.col??e.width*Ke.globeB}measure(){const e=this.el?.querySelector("[data-gl]"),i=e?.closest("[data-cluster]")??e?.parentElement;if(!e||!i)return null;const s=i.parentElement;this.rowEl=s;const n=i.getBoundingClientRect(),r=i.nextElementSibling?.getBoundingClientRect();if(!s||!r)return null;const o=r.left-n.left;return o<=0?null:(this.anchorX=n.left,this.period=s.children.length*o,n.width/4)}init(){const e=this.core.device;this.buffer=e.createBuffer({label:"lattice",size:this.data.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.layout=e.createBindGroupLayout({label:"lattice",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}}]});const i=e.createShaderModule({label:"lattice",code:JT});this.pipe=e.createRenderPipeline({label:"lattice",layout:e.createPipelineLayout({bindGroupLayouts:[this.layout]}),vertex:{module:i,entryPoint:"vs",constants:{SX:ad,SY:ld}},fragment:{module:i,entryPoint:"fs",targets:[{format:this.core.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"},multisample:{count:Ns}}),this.sampler=e.createSampler({minFilter:"linear",magFilter:"linear"}),this.bind()}bind(){const e=this.core.device,i=this.fluid?.dye??this.core.textures.blank?.view??null;i&&(this.boundDye=i,this.group=e.createBindGroup({label:"lattice",layout:this.layout,entries:[{binding:0,resource:{buffer:this.core.viewport}},{binding:1,resource:{buffer:this.core.curve}},{binding:2,resource:{buffer:this.buffer}},{binding:3,resource:i},{binding:4,resource:this.sampler}]}))}signature(e){if(e.length=0,!this.clip)return e;for(let i=0;i<this.data.length;i++)e.push(this.data[i]);for(let i=0;i<this.core.surface.length;i++)e.push(this.core.surface[i]);return e}}const bE=""+new URL("mono-500.bin.Cp9sJ0rB.gz",import.meta.url).href,_E=""+new URL("mono-500.3mVdNGhQ.json",import.meta.url).href,xE=""+new URL("sans-400.bin.B1ole0wm.gz",import.meta.url).href,kE=""+new URL("sans-400.UP_hgoQ5.json",import.meta.url).href,TE=""+new URL("sans-500.bin.BHAcyDPe.gz",import.meta.url).href,SE=""+new URL("sans-500.D0TWIxjh.json",import.meta.url).href,EE=""+new URL("serif-400.bin.DZslexgu.gz",import.meta.url).href,RE=""+new URL("serif-400.6lmIy8cM.json",import.meta.url).href,ki=class ki{constructor(e,i,s){this.gpu=null,this.device=null,this.name=e,this.ascent=i.ascent,this.descent=i.descent,this.glyphs=i.glyphs,this.data=s}glyph(e){return this.glyphs[e]??null}buffer(e){return this.gpu&&this.device===e?this.gpu:(this.device=e,this.gpu=e.createBuffer({label:`font ${this.name}`,size:this.data.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.gpu,0,this.data),this.gpu)}static files(e){return{meta:Nd[`${Fd}${e}.json`]??null,curves:Nd[`${Fd}${e}.bin.gz`]??null}}static preloads(){const e=typeof location>"u"?null:location.origin;return ki.first.flatMap(i=>{const{meta:s,curves:n}=ki.files(i);return[s,n].filter(r=>!!r).map(r=>e&&r.startsWith(`${e}/`)?r.slice(e.length):r).map(r=>({rel:"preload",as:"fetch",href:r,crossorigin:"anonymous",fetchpriority:"high"}))})}static load(e){let i=ki.loads.get(e);return i||(i=wo(()=>ki.fetch(e)),ki.loads.set(e,i),i)}static async fetch(e){const{meta:i,curves:s}=ki.files(e);if(!i||!s)throw new Error(`[gpu] no glyphs baked for ${e} — npm run glyphs`);const[n,r]=await Promise.all([fetch(i).then(l=>{if(!l.ok)throw new Error(`${l.status} ${i}`);return l.json()}),fetch(s).then(l=>{if(!l.ok)throw new Error(`${l.status} ${s}`);return l.arrayBuffer()})]),o=n.width*n.height*16,a=r.byteLength===o?r:await PE(r);if(a.byteLength!==o)throw new Error(`[gpu] ${e}: ${a.byteLength} bytes of curves, wanted ${o}`);return new ki(e,n,new Float32Array(a))}};ki.first=["sans-400","serif-400","mono-500"],ki.loads=new Map;let ar=ki;const Fd="../../../glyphs/",Nd=Object.assign({"../../../glyphs/mono-500.bin.gz":bE,"../../../glyphs/mono-500.json":_E,"../../../glyphs/sans-400.bin.gz":xE,"../../../glyphs/sans-400.json":kE,"../../../glyphs/sans-500.bin.gz":TE,"../../../glyphs/sans-500.json":SE,"../../../glyphs/serif-400.bin.gz":EE,"../../../glyphs/serif-400.json":RE});function PE(t){const e=new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(e).arrayBuffer()}const ec=256,Rn=7,Zo=6,On=18,CE=[{format:"float32x2",offset:0,shaderLocation:0},{format:"float32",offset:8,shaderLocation:1},{format:"float32x4",offset:12,shaderLocation:2},{format:"float32x2",offset:28,shaderLocation:3},{format:"float32",offset:36,shaderLocation:4},{format:"float32x3",offset:40,shaderLocation:5},{format:"float32x4",offset:52,shaderLocation:6},{format:"float32",offset:68,shaderLocation:7}],Dd=new WeakMap;function Q0(t,e){const i=Dd.get(t);if(i)return i;const s=t.createBindGroupLayout({label:"text",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}}]}),n=t.createShaderModule({label:"text",code:fS}),r=t.createRenderPipeline({label:"text",layout:t.createPipelineLayout({bindGroupLayouts:[s]}),vertex:{module:n,entryPoint:"vs",buffers:[{arrayStride:On*4,stepMode:"instance",attributes:CE}]},fragment:{module:n,entryPoint:"fs",targets:[{format:e,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip"},multisample:{count:Ns}}),o={layout:s,pipeline:r};return Dd.set(t,o),o}class ME{constructor(e,i){this.rows=new Float32Array(ec*Rn*4),this.shown=new Float32Array(ec*Rn*4),this.planes=new Set,this.free=[],this.rebuild=!0,this.used=0,this.layout=0,this.shownLayout=-1,this.shine=(()=>{const s=new Float32Array(8+Zo*8);return s.set([-1e4,-1e4,240,.55]),s})(),this.shownShine=new Float32Array(8+Zo*8),this.data=new Float32Array(64*On),this.capacity=64,this.count=0,this.gpu=null,this.buffer=null,this.inks=new WeakMap,this.core=e,this.font=i;for(let s=ec-1;s>=0;s--)this.free.push(s)}add(e){const i=this.free.pop();return i===void 0?-1:(this.planes.add(e),this.rebuild=!0,this.used=Math.max(this.used,(i+1)*Rn*4),i)}remove(e){this.planes.delete(e)&&(this.free.push(e.slot),this.rows.fill(0,e.slot*Rn*4,(e.slot+1)*Rn*4),this.rebuild=!0)}invalidate(){this.rebuild=!0}get size(){return this.planes.size}reset(){this.gpu=null,this.buffer=null,this.rebuild=!0,this.shownLayout=-1}ensureGpu(){const e=this.core.device,{layout:i,pipeline:s}=Q0(e,this.core.format),n=e.createBuffer({label:"text rows",size:this.rows.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),r=e.createBuffer({label:"text shine",size:this.shine.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),o=[0,1,2].map(a=>{const l=e.createBuffer({label:`text filter ${a}`,size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(l,0,new Uint32Array([a])),l});e.queue.writeBuffer(n,0,this.rows),e.queue.writeBuffer(r,0,this.shine),this.gpu={pipeline:s,layout:i,groups:null,boundDye:null,filters:o,sampler:e.createSampler({minFilter:"linear",magFilter:"linear"}),rows:n,shine:r}}update(e,i=null,s,n=[]){if(!this.core.device||!this.core.viewport)return;this.gpu||this.ensureGpu();const r=this.gpu;if(i&&(!r.groups||r.boundDye!==i)){const l=this.core.device;r.groups=[0,1,2].map(u=>l.createBindGroup({label:`text ${u}`,layout:r.layout,entries:[{binding:0,resource:{buffer:this.core.viewport}},{binding:1,resource:{buffer:r.shine}},{binding:2,resource:{buffer:this.font.buffer(l)}},{binding:3,resource:{buffer:r.rows}},{binding:4,resource:{buffer:r.filters[u]}},{binding:5,resource:i},{binding:6,resource:r.sampler}]})),r.boundDye=i}this.rebuild&&this.pack(),s&&(this.shine[4]=s[0],this.shine[5]=s[1],this.shine[6]=s[2]),e&&(this.shine[0]=e.x,this.shine[1]=e.y,this.shine[2]=e.z,this.shine[3]=e.w);for(let l=0;l<Zo;l++){const u=n[l],c=8+l*8;this.shine[c]=u?u.x:0,this.shine[c+1]=u?u.y:0,this.shine[c+2]=u?u.w:0,this.shine[c+3]=u?u.h:0,this.shine[c+4]=u?u.r:0,this.shine[c+5]=u?u.z:0,this.shine[c+6]=u?u.a:0,this.shine[c+7]=u?1:0}const o=this.rows;for(const l of this.planes){const u=l.slot*Rn*4,c=l.rect;if(!c||!l.shown||this.unseen(l,c)){o[u+2]=0,o[u+3]=0;continue}o[u]=c.left,o[u+1]=c.top,o[u+2]=c.width,o[u+3]=c.height,o[u+4]=l.alpha,o[u+5]=l.progress,o[u+6]=0,o[u+7]=l.tag,o[u+8]=l.color.x,o[u+9]=l.color.y,o[u+10]=l.color.z,o[u+11]=l.tint;const h=l.clip;o[u+12]=h?h.left:0,o[u+13]=h?h.top:0,o[u+14]=h?h.width:0,o[u+15]=h?h.height:0,o[u+16]=l.clipR,o[u+17]=h?1:0,o[u+18]=l.inked,o[u+19]=l.clipBow,o[u+20]=l.clipFade,o[u+21]=l.rise,o[u+22]=l.scale,o[u+23]=l.stagLine,o[u+24]=l.z,o[u+25]=l.wash,o[u+26]=l.clipFadeX}const a=this.core.device.queue;zo(this.rows,this.shown,this.used)||a.writeBuffer(this.gpu.rows,0,this.rows,0,this.used),zo(this.shine,this.shownShine,this.shine.length)||a.writeBuffer(this.gpu.shine,0,this.shine)}unseen(e,i){if(e.progress<=0)return!0;const s=e.clip;if(!s||!e.glyphs)return!1;const[n,r,o,a]=this.ink(e.glyphs),l=e.scale>1e-4?e.scale:1,u=i.width*.5,c=i.height*.5,h=i.left+(n-u)*l+u,f=i.left+(o-u)*l+u,d=i.top+(r+Math.min(0,e.rise)-c)*l+c,g=i.top+(a+Math.max(0,e.rise)-c)*l+c,p=Math.min(s.left,s.left+s.width),_=Math.max(s.left,s.left+s.width),w=Math.min(s.top,s.top+s.height),y=Math.max(s.top,s.top+s.height),m=2+Math.abs(e.clipBow);return h>_+m||f<p-m||d>y+2||g<w-2}ink(e){let i=this.inks.get(e);if(i)return i;i=[1/0,1/0,-1/0,-1/0];for(let s=0;s<e.count;s++){const n=e.size[s],r=e.origin[s*2],o=e.origin[s*2+1];i[0]=Math.min(i[0],r+e.bbox[s*4]*n-1),i[2]=Math.max(i[2],r+e.bbox[s*4+2]*n+1),i[1]=Math.min(i[1],o-e.bbox[s*4+3]*n-1),i[3]=Math.max(i[3],o-e.bbox[s*4+1]*n+1)}return this.inks.set(e,i),i}pack(){this.rebuild=!1;let e=0;for(const r of this.planes)e+=r.glyphs?.count??0;e>this.capacity&&(this.capacity=Math.max(e,this.capacity*2),this.data=new Float32Array(this.capacity*On),this.buffer?.destroy(),this.buffer=null);const i=this.data;let s=0;for(const r of this.planes){const o=r.glyphs;if(o?.count){for(let a=0;a<o.count;a++){const l=(s+a)*On;i[l]=o.origin[a*2],i[l+1]=o.origin[a*2+1],i[l+2]=o.size[a],i[l+3]=o.bbox[a*4],i[l+4]=o.bbox[a*4+1],i[l+5]=o.bbox[a*4+2],i[l+6]=o.bbox[a*4+3],i[l+7]=o.glyph[a*2],i[l+8]=o.glyph[a*2+1],i[l+9]=o.index[a],i[l+10]=o.line[a*3],i[l+11]=o.line[a*3+1],i[l+12]=o.line[a*3+2],i[l+13]=o.color[a*4],i[l+14]=o.color[a*4+1],i[l+15]=o.color[a*4+2],i[l+16]=o.color[a*4+3],i[l+17]=r.slot}s+=o.count}}this.count=e;const n=this.core.device;this.buffer||(this.buffer=n.createBuffer({label:`text instances ${this.font.name}`,size:this.capacity*On*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),e&&n.queue.writeBuffer(this.buffer,0,i,0,e*On),this.layout++}draw(e,i=0){this.drawInto(e.pass,i),e.draws++}drawInto(e,i=0){!this.gpu?.groups||!this.buffer||!this.count||(e.setPipeline(this.gpu.pipeline),e.setBindGroup(0,this.gpu.groups[i]),e.setVertexBuffer(0,this.buffer),e.draw(4,this.count))}changed(){return this.rebuild||this.layout!==this.shownLayout||!zo(this.shine,this.shownShine,this.shine.length)?!0:!zo(this.rows,this.shown,this.used)}remember(){this.shown.set(this.rows.subarray(0,this.used)),this.shownShine.set(this.shine),this.shownLayout=this.layout}dispose(){this.buffer?.destroy(),this.gpu?.rows.destroy(),this.gpu?.shine.destroy(),this.gpu=null,this.buffer=null}}function zo(t,e,i){for(let s=0;s<i;s++)if(t[s]!==e[s])return!1;return!0}const Ld=.02,AE=32,Pr=2048,Bo={left:0,top:0,width:0,height:0},OE=(t,e)=>{const i=Math.max(t.left,e.left),s=Math.max(t.top,e.top);return{left:i,top:s,width:Math.max(0,Math.min(t.left+t.width,e.left+e.width)-i),height:Math.max(0,Math.min(t.top+t.height,e.top+e.height)-s)}};function FE(t,e,i){if(!(t instanceof vt))return i.length=0,i;let s=0;i[s++]=t.pose?t.resting?2:1:0,i[s++]=t.order,i[s++]=t.tex?.id??-1;const n=t.slot*Ln;for(let r=0;r<ru;r++)i[s++]=e[n+r];return i.length=s,i}function NE(t,e,i){if(!(t instanceof vt))return i.length===0;if(i.length!==3+ru||i[0]!==(t.pose?t.resting?2:1:0)||i[1]!==t.order||i[2]!==(t.tex?.id??-1))return!1;const s=t.slot*Ln;for(let n=0;n<ru;n++)if(e[s+n]!==i[3+n])return!1;return!0}class DE{constructor(e){this.planes=new Map,this.pending=new Map,this.arriving=new Map,this.data=new Float32Array(Ln*Pr),this.owed=!1,this.sent=new Float32Array(Ln*Pr),this.sentTo=null,this.sentN=0,this.free=[],this.next=0,this.high=0,this.gpu=null,this.shown=new WeakMap,this.count=0,this.ro=null,this.beat=0,this.fluid=null,this.sheen={x:-1e4,y:-1e4,z:240,w:0},this.occluders=[],this.sheenTarget={x:-1e4,y:-1e4,z:240,w:0},this.surfaceDim=1,this.missed=0,this.covered=!1,this.pointer=i=>{this.sheenTarget.x<-1e3&&(this.sheen.x=i.clientX,this.sheen.y=i.clientY,this.sheen.z=this.sheenTarget.z,this.sheen.w=this.sheenTarget.w),this.sheenTarget.x=i.clientX,this.sheenTarget.y=i.clientY},this.boundDye=null,this.samplers=null,this.reset=()=>{this.gpu=null,this.samplers=null,this.boundDye=null;for(const i of this.planes.values())i.reset();for(const i of this.ready)i.reset()},this.layers=new Map,this.ready=[],this.transitioning=!1,this.wanted=new Set,this.bids=[],this.priors=[],this.drawn=new Set,this.videoSrcs=new Set,this.cold=new Map,this.slots=new WeakMap,this.hosts=new WeakMap,this.oldRoot=null,this.newRoot=null,this.rekeyed=0,this.drawText=i=>{if(!(this.splitting||this.core.solo))for(const s of this.ready)s.draw(i)},this.draw=i=>{if(this.gpu){if(this.splitting){this.remember();return}i.draws+=this.drawQuadsInto(i.pass,0),this.remember()}},this.videoFrame=0,this.changed=()=>{if(!this.gpu)return!1;for(const i of this.planes.values())if(i instanceof vt&&i.liveCanvas&&i.liveDirty&&!i.resting&&i.u.alpha>.02)return!0;if(this.core.textures.active&&performance.now()-this.videoFrame>=1e3/30||this.fluid?.active)return!0;for(const i of this.ready)if(i.changed())return!0;if(this.planes.size!==this.count)return!0;for(const i of this.planes.values()){const s=this.shown.get(i);if(!s||!NE(i,this.data,s))return!0}return!1},this.spoken=()=>!1,this.ww=1,this.wh=1,this.invalidate=()=>{for(const i of this.planes.values())i.stale()},this.core=e,this.field=new wE(e),e.textures.onReplace=(i,s)=>{for(const n of this.planes.values())!(n instanceof vt)||n.tex!==i||(n.tex=s,n.group=this.gpu?this.gpu.materials.textureGroup(this.viewOf(n,s)):null)},this.core.add(this.draw,{order:po.planes,dirty:this.changed,reset:this.reset}),this.core.add(this.drawText,{order:po.text,dirty:this.spoken}),this.watch(),window.addEventListener("pointermove",this.pointer,{passive:!0})}shine(e=.55,i=240){this.sheenTarget.z=i,this.sheenTarget.w=e}acquire(){const e=this.free.pop()??this.next++;return e>=Pr?(console.warn("[gpu] plane slots exhausted"),Pr-1):(this.high=Math.max(this.high,e+1),e)}warm(){!this.gpu&&this.core.device&&this.core.viewport&&this.initGpu(),this.gpu?.materials.warm()}initGpu(){const e=this.core.device,i=new uE(e,this.core.format),s=e.createBuffer({label:"plane slices",size:256*Pr,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),n=e.createBindGroup({label:"plane slice",layout:i.plane,entries:[{binding:0,resource:{buffer:s,size:j0}}]});this.gpu={materials:i,buffer:s,slice:n,globals:null},this.buildGlobals()}buildGlobals(){const e=this.core.device,i=this.gpu;this.samplers??={media:e.createSampler({label:"media",minFilter:"linear",magFilter:"linear",mipmapFilter:"linear",maxAnisotropy:8}),video:e.createSampler({label:"video",minFilter:"linear",magFilter:"linear"}),dye:e.createSampler({label:"dye",minFilter:"linear",magFilter:"linear"})};const s=this.fluid?.dye??this.core.textures.blank?.view;s&&(this.boundDye=s,i.globals=e.createBindGroup({label:"plane globals",layout:i.materials.globals,entries:[{binding:0,resource:{buffer:this.core.viewport}},{binding:1,resource:this.samplers.media},{binding:2,resource:this.samplers.video},{binding:3,resource:{buffer:this.core.curve}},{binding:4,resource:s},{binding:5,resource:this.samplers.dye}]}))}ensure({el:e,src:i,id:s,video:n=null,hls:r=null,frame:o=null,canvas:a=null,order:l=0,material:u="media",flip:c=!1}){this.rekeyForSplit(s,e);const h=this.planes.get(s);if(h instanceof vt&&!h.dying){if(h.el===e)return h.flip=c,h;if(h.held)return this.hosts.delete(h),h.attach(e),h}const f=new vt({core:this.core,el:e,src:i,video:n,hls:r,frame:o,canvas:a,order:l,material:u,flip:c,slot:this.acquire()});this.planes.set(s,f);const d=this.pending.get(s);return d&&(this.pending.delete(s),f.setParallax(d.shift),z.to(f.u,{shift:0,duration:d.duration,ease:d.ease})),this.claim(f,e),this.claimTag(f,e),f}async ensureText({el:e,face:i,id:s}){this.rekeyForSplit(s,e);const n=this.planes.get(s);if(n instanceof dd&&!n.dying&&n.el===e)return n;const r=await this.layer(i);if(!e.isConnected)return null;const o=new dd({core:this.core,el:e,layer:r});return this.planes.set(s,o),this.claimTag(o,e),o}layer(e){let i=this.layers.get(e);return i||(i=ar.load(e).then(s=>{const n=new ME(this.core,s);return this.ready.push(n),n}),this.layers.set(e,i),i.catch(()=>{this.layers.get(e)===i&&this.layers.delete(e)}),i)}settle(e,i,s,n="expo.inOut"){const r=this.planes.get(e);if(r instanceof vt&&!r.dying){r.setParallax(i),z.to(r.u,{shift:0,duration:s,ease:n});return}this.pending.set(e,{shift:i,duration:s,ease:n})}get(e){return this.planes.get(e)??null}byEl(e){for(const i of this.planes.values())if(i instanceof vt&&i.el===e&&!i.dying)return i;return null}get busy(){return this.core.textures.busy}fade(e,i=.35,s=0){for(const n of this.planes.values())n.held||e.contains(n.el)&&n.fade(i,s)}appear(e,i=.5,s=0){this.arriving.set(e,{duration:i,delay:s,until:performance.now()+4e3});for(const n of this.planes.values())n instanceof vt&&!n.flying&&!n.held&&e.contains(n.el)&&n.appear(i,s)}claim(e,i){const s=performance.now();for(const[n,r]of this.arriving){if(s>r.until){this.arriving.delete(n);continue}if(n.contains(i)){e.appear(r.duration,r.delay);break}}}hold(e,i=4e3){const s=this.planes.get(e);!s||s.dying||(s.held=!0,s.holdUntil=performance.now()+i)}flipCandidates(e){const i=[];for(const[s,n]of this.planes){if(!(n instanceof vt)||n.dying)continue;const r=n.flip;(r===!0||Array.isArray(r)&&r.includes(e))&&i.push(s)}return i}expireHolds(){for(const e of this.planes.values())e.held&&!e.el.isConnected&&(e.holdUntil=0)}tick(e=0,i=1){this.core.textures.drain();const s=Math.min(1/30,i/60);this.field.velocity(e),this.field.sync(s);for(const[o,a]of this.planes)if(!a.dying){if(!a.el.isConnected){if(a.held){if(performance.now()<a.holdUntil){a.sync(s);continue}a.held=!1}if(!a.lastRect&&performance.now()<a.bornAt+4e3)continue;const l=a.el.getBoundingClientRect?.();a.retire(()=>{this.planes.get(o)===a&&this.planes.delete(o),a instanceof vt&&this.free.push(a.slot)},l?this.core.onScreen(l):!1);continue}a.resting=!a.flying&&this.parked(a.el),!a.resting&&a.sync(s)}if(this.surface(),!this.gpu&&this.core.device&&this.core.viewport&&this.initGpu(),this.gpu){const o=this.fluid?.dye??this.core.textures.blank?.view??null;o&&o!==this.boundDye&&this.buildGlobals();for(const a of this.planes.values()){if(!(a instanceof vt))continue;a.tex?.dead&&(a.tex=null,a.group=null),a.fit();const l=a.tex,u=a.pose;if(l&&u&&a.src&&!a.videoEl&&!a.liveCanvas&&!a.resting&&a.u.alpha>.02){const h=Math.max(u.width,u.height*l.width/Math.max(1,l.height))*this.core.dpr,f=a.videoSrc?Math.min(h,this.core.textures.poster(a.videoSrc)):h;!this.core.textures.fits(a.src,f)&&this.core.onScreen(u)&&this.core.textures.climb(a.src,Math.ceil(f))}a.liveCanvas&&this.refreshLive(a);const c=a.tex?this.viewOf(a,a.tex):a.src?null:this.core.textures.blank?.view??null;c&&!a.group&&(a.group=this.gpu.materials.textureGroup(c)),a.write(this.data,a.slot*Ln,this.surfaceDim)}this.owed=!0}const n=Math.min(1,.14*i);this.sheen.x+=(this.sheenTarget.x-this.sheen.x)*n,this.sheen.y+=(this.sheenTarget.y-this.sheen.y)*n,this.sheen.z=this.sheenTarget.z,this.sheen.w=this.sheenTarget.w,Math.abs(this.sheen.x-this.sheenTarget.x)<.5&&(this.sheen.x=this.sheenTarget.x),Math.abs(this.sheen.y-this.sheenTarget.y)<.5&&(this.sheen.y=this.sheenTarget.y),this.sheen.x=Math.round(this.sheen.x),this.sheen.y=Math.round(this.sheen.y);const r=this.occluders;r.length=0;for(const o of this.planes.values()){if(r.length>=Zo)break;if(!(o instanceof vt)||!o.occludes||o.dying||o.resting||!o.pose||o.u.alpha<=.02)continue;const a=o.pose,l=o.u.scale||1;let u=a.left+a.width*(1-l)/2,c=a.top+a.height*(1-l)/2,h=a.width*l,f=a.height*l;const[d,g]=o.sway(c,f);if(u+=d,h+=g-d,!(a.width<1||a.height<1||!this.core.onScreen({left:u,top:c,width:h,height:f}))){if(o.u.clipOn){const[p,_,w,y]=o.u.clip,m=Math.max(u,p),b=Math.max(c,_);if(h=Math.min(u+h,p+w)-m,f=Math.min(c+f,_+y)-b,u=m,c=b,h<1||f<1)continue}r.push({x:u,y:c,w:h,h:f,r:o.u.radius*l,z:o.order,a:o.u.alpha})}}for(const o of this.ready)o.update(this.sheen,this.fluid?.dye??this.core.textures.blank?.view??null,this.field.ink,r)}cap(){return window.innerWidth>649?8:3}viewOf(e,i){return!e.videoSrc||i.texture.mipLevelCount<2?i.view:i.base??=i.texture.createView({baseMipLevel:0,mipLevelCount:1})}surface(){const e=this.field.clip;this.wanted.clear(),this.bids.length=0,this.priors.length=0,this.drawn.clear();const i=new Map;for(const l of this.planes.values())l instanceof vt&&l.el.dataset.gl==="sheet"&&i.set(l.el,l);const s=new Map,n=l=>{let u=s.get(l);return u===void 0&&(u=l.el.isConnected?l.el.getBoundingClientRect().height:0,s.set(l,u)),u};for(const l of this.planes.values()){if(!(l instanceof vt))continue;const u=l.el,c=u.dataset.gl==="sheet";l.flying||(l.u.curve=!c&&this.field.holds(u)?1:0);const h=l.seen(),f=l.u.curve>.5&&(this.covered||this.surfaceDim<=.02),d=!l.offscreen,g=d?-Ld:Ld,p=d?AE:0;if(l.offscreen=!l.flying&&(f||!h||h.facing<=g||!this.inView(h.rect,p)),l.videoSrc){this.videoSrcs.add(l.videoSrc),l.priorSrc&&this.videoSrcs.add(l.priorSrc);const y=h,m=l.u.curve>.5&&this.surfaceDim<=.02;if(!l.offscreen&&!l.resting&&!m&&!this.covered&&l.u.alpha>.02&&l.u.dim>.02&&(this.drawn.add(l.videoSrc),l.priorSrc&&this.drawn.add(l.priorSrc)),!l.resting&&!m&&!this.covered&&l.u.dim>.02&&(l.u.alpha>.02||!l.videoEl)&&(l.flying||!!y&&y.facing>.15&&this.core.onScreen(y.rect))){const v=y?.rect,x=l.flying||!v?-1:Math.hypot(v.left+v.width/2-this.core.ww/2,v.top+v.height/2-this.core.wh/2),k=l.handoff();k?(this.bids.push({src:k,d:x}),this.core.textures.wake(l.videoSrc)):(this.bids.push({src:l.videoSrc,d:x}),l.priorSrc&&this.priors.push(l.priorSrc))}}const _=this.hostOf(l),w=_?i.get(_)??null:null;if(_&&!w?.pose&&this.hosts.get(l)){l.cut(Bo);continue}if(w?.pose){const y=n(w);l.cut(this.hostBox(w,i),w.u.radius*(y?w.pose.height/y:1),w.u.bow,w.u.fade);continue}l.cut(!c&&e&&this.field.holds(u)?e:null)}for(const l of this.planes.values()){if(l instanceof vt)continue;const u=this.hosts.get(l);if(!u){l.cut(null);continue}const c=i.get(u)??null;if(c?.pose){const h=n(c);l.cut(this.hostBox(c,i),c.u.radius*(h?c.pose.height/h:1),c.u.bow,c.u.fade,c.u.fadeX);continue}l.cut(Bo)}this.bids.sort((l,u)=>l.d-u.d);for(const l of this.bids){if(this.wanted.size>=this.cap())break;const u=this.core.textures.videoElement(l.src);u&&!u.paused&&this.wanted.add(l.src)}if(this.field.speed<.35)for(const l of this.bids)this.wanted.size>=this.cap()&&!this.wanted.has(l.src)||this.wanted.add(l.src);for(const l of this.priors){if(this.wanted.size>=this.cap())break;this.wanted.add(l)}const r=new Set(this.bids.map(l=>l.src));for(const l of this.priors)r.add(l);for(const l of this.drawn)r.add(l);let o=!1;for(const l of this.videoSrcs){const u=this.core.textures.videoElement(l);if(!u)continue;if(this.wanted.has(l)){this.cold.delete(l),this.core.textures.wake(l),u.paused&&u.play().catch(()=>{});continue}if(r.has(l)){this.cold.delete(l),u.paused||u.pause();continue}const c=(this.cold.get(l)??0)+1;this.cold.set(l,c),c>45&&(u.paused||u.pause(),o||(o=this.core.textures.sleep(l)))}const a=[];for(const l of this.videoSrcs){const u=this.core.textures.videoElement(l);u&&!u.paused&&a.push(l)}if(a.length>this.cap()){a.sort((l,u)=>(this.cold.get(u)??0)-(this.cold.get(l)??0));for(const l of a.slice(0,a.length-this.cap()))this.wanted.has(l)||this.core.textures.videoElement(l)?.pause()}}inView(e,i){return e.width?e.left+e.width>-i&&e.left<this.core.ww+i&&e.top+e.height>-i&&e.top<this.core.wh+i:!1}parked(e){let i=this.slots.get(e);if(i===void 0){for(let s=e;s;s=s.parentElement)if(s._parked!==void 0)return this.slots.set(e,s),!!s._parked;return!1}return!!i?._parked}host(e,i){this.hosts.set(e,i)}hostedBy(e){return this.hosts.get(e)}hostBox(e,i){if(!e.pose)return Bo;const s=this.hosts.get(e);if(!s)return e.pose;const n=i.get(s);return n?.pose?OE(e.pose,n.pose):Bo}hostOf(e){let i=this.hosts.get(e);return i===void 0&&(i=e.el.closest('[data-gl="sheet"]'),i===e.el&&(i=null),this.hosts.set(e,i)),i}get splitting(){return!!this.oldRoot}split(e){this.oldRoot=e,this.newRoot=null;for(const i of this.planes.values())i.tag=e.contains(i.el)?1:0}freezeScrubs(e){for(const i of this.planes.values())i instanceof vt&&e.contains(i.el)&&i.freezeScrub()}rekeyForSplit(e,i){if(!this.oldRoot)return;const s=this.planes.get(e);!s||s.dying||s.tag===1&&(this.newRoot?.contains(i)??!0)&&(this.planes.delete(e),this.planes.set(`${e} old-${this.rekeyed++}`,s))}assignNew(e){this.newRoot=e;for(const i of this.planes.values())e.contains(i.el)&&(i.tag=2)}endSplit(){this.oldRoot=null,this.newRoot=null;for(const e of this.planes.values())e.tag=0}claimTag(e,i){this.oldRoot&&(this.newRoot?.contains(i)?e.tag=2:this.oldRoot.contains(i)&&(e.tag=1))}drawQuadsInto(e,i=0){const s=this.gpu;if(!s)return 0;if(this.owed){this.owed=!1;const o=this.high*Ln;if(o){let a=0,l=o;if(this.sentTo===s.buffer&&this.sentN===o){for(;a<o&&this.data[a]===this.sent[a];)a++;for(;l>a&&this.data[l-1]===this.sent[l-1];)l--}if(l>a){this.core.device.queue.writeBuffer(s.buffer,a*4,this.data,a,l-a);for(let u=a;u<l;u++)this.sent[u]=this.data[u];this.sentTo=s.buffer,this.sentN=o}}}const n=[...this.planes.values()].filter(o=>o instanceof vt&&!!o.pose&&!o.resting&&!o.offscreen&&o.u.dim>.02&&!!(o.group||o.videoEl)&&(!this.core.solo||this.core.solo.has(o.el))&&(i===0||o.tag===i)).sort((o,a)=>o.order-a.order||o.u.lift[2]+o.u.shrink[2]-a.u.lift[2]-a.u.shrink[2]);if(!n.length||!s.globals)return 0;e.setBindGroup(0,s.globals);let r=null;for(const o of n){let a=null;if(o.videoEl&&(o.videoEl.getAttribute("src")||o.videoEl.querySelector("source")))try{a=this.core.device.importExternalTexture({source:o.videoEl})}catch{a=null,this.missed++}const u=!!a;if(!u&&!o.group||!u&&o.tex?.dead)continue;const c=o.u.spin>.001?2:o.u.curve>.001||Math.abs(o.u.bow)>.001||Math.abs(o.u.scale-1)>.001||o.u.lift[2]>.001?1:0,h=s.materials.get(o.material,c),f=u?h.video??s.materials.get("media",c).video:h.image;f!==r&&(e.setPipeline(f),r=f),e.setBindGroup(1,s.slice,[o.slot*256]),e.setBindGroup(2,u?s.materials.videoGroup(a):o.group),e.draw(c===2?ou*ou*6:c===1?Oa*Oa*6:6),o.drawnIn=this.core.submitted+1}return n.length}drawTextInto(e,i=0){for(const s of this.ready)s.drawInto(e,i)}refreshLive(e){const i=e.liveCanvas;if(i.width<1||i.height<1){e.liveDirty=!1;return}e.tex&&(e.tex.width!==i.width||e.tex.height!==i.height)&&(e.tex.texture.destroy(),e.tex=null,e.group=null,e.liveDirty=!0),e.tex||(e.tex=this.core.textures.live(i),e.group=null),!(!e.tex||!e.liveDirty)&&(e.resting||e.u.alpha<=.02||!e.pose||!this.core.onScreen(e.pose)||this.core.textures.refresh(e.tex,i)&&(e.liveDirty=!1))}remember(){this.count=this.planes.size,this.core.textures.active&&(this.videoFrame=performance.now());for(const e of this.ready)e.remember();for(const e of this.planes.values()){let i=this.shown.get(e);i||(i=[],this.shown.set(e,i)),FE(e,this.data,i)}}resize(e=this.ww,i=this.wh){this.ww=e,this.wh=i;for(const s of this.planes.values())s.dying||s.measure();this.invalidate()}live(e){dS(e),e||this.invalidate()}drift(){let e=0;for(const i of this.planes.values())e=Math.max(e,i.drift?.()??0);return e}watch(){this.ro=new ResizeObserver(()=>this.invalidate()),this.ro.observe(document.documentElement),document.fonts?.addEventListener?.("loadingdone",this.invalidate),this.beat=window.setInterval(this.invalidate,500)}preload(e,i){return this.core.textures.preload(e,i)}}const tc=256,LE=16,Id=16,IE=`
	struct U {
		texel: vec2f,     /* 1 / sim size */
		dt: f32,
		aspect: f32,      /* ww / wh */
		velDiss: f32,     /* per-frame decay factors, computed on the CPU */
		dyeDiss: f32,
		splatOn: f32,
		radius: f32,      /* splat radius², aspect-corrected uv */
		splatPos: vec2f,
		splatVel: vec2f,
		splatCol: vec4f,
	}

	@group(0) @binding(0) var<uniform> u: U;
	@group(0) @binding(1) var lin: sampler;

	fn gauss(uv: vec2f) -> f32 {
		var d = uv - u.splatPos;
		d.x *= u.aspect;
		return exp(-dot(d, d) / u.radius) * u.splatOn;
	}

	/* ── velocity: advect + splat ─────────────────────────────────────── */

	@group(1) @binding(0) var velSrc: texture_2d<f32>;
	@group(1) @binding(1) var velDst: texture_storage_2d<rgba16float, write>;

	@compute @workgroup_size(8, 8) fn advectVel(@builtin(global_invocation_id) id: vec3u) {
		let dim = textureDimensions(velDst);
		if (id.x >= dim.x || id.y >= dim.y) { return; }

		let uv = (vec2f(id.xy) + 0.5) * u.texel;
		let v = textureSampleLevel(velSrc, lin, uv, 0.0).xy;
		let back = uv - v * u.dt;

		var nv = textureSampleLevel(velSrc, lin, back, 0.0).xy * u.velDiss;
		nv += u.splatVel * gauss(uv);

		textureStore(velDst, id.xy, vec4f(nv, 0.0, 0.0));
	}

	/* ── projection ───────────────────────────────────────────────────── */

	@group(1) @binding(0) var pVel: texture_2d<f32>;
	@group(1) @binding(1) var divDst: texture_storage_2d<r32float, write>;

	fn vAt(t: texture_2d<f32>, p: vec2i) -> vec2f {
		let dim = vec2i(textureDimensions(t));
		return textureLoad(t, clamp(p, vec2i(0), dim - 1), 0).xy;
	}

	@compute @workgroup_size(8, 8) fn divergence(@builtin(global_invocation_id) id: vec3u) {
		let dim = textureDimensions(divDst);
		if (id.x >= dim.x || id.y >= dim.y) { return; }

		let p = vec2i(id.xy);
		let l = vAt(pVel, p + vec2i(-1, 0)).x;
		let r = vAt(pVel, p + vec2i(1, 0)).x;
		let t = vAt(pVel, p + vec2i(0, -1)).y;
		let b = vAt(pVel, p + vec2i(0, 1)).y;

		textureStore(divDst, id.xy, vec4f(0.5 * (r - l + b - t), 0.0, 0.0, 0.0));
	}

	@group(1) @binding(0) var jP: texture_2d<f32>;
	@group(1) @binding(1) var jDiv: texture_2d<f32>;
	@group(1) @binding(2) var jDst: texture_storage_2d<r32float, write>;

	fn sAt(t: texture_2d<f32>, p: vec2i) -> f32 {
		let dim = vec2i(textureDimensions(t));
		return textureLoad(t, clamp(p, vec2i(0), dim - 1), 0).x;
	}

	@compute @workgroup_size(8, 8) fn jacobi(@builtin(global_invocation_id) id: vec3u) {
		let dim = textureDimensions(jDst);
		if (id.x >= dim.x || id.y >= dim.y) { return; }

		let p = vec2i(id.xy);
		let l = sAt(jP, p + vec2i(-1, 0));
		let r = sAt(jP, p + vec2i(1, 0));
		let t = sAt(jP, p + vec2i(0, -1));
		let b = sAt(jP, p + vec2i(0, 1));
		let d = sAt(jDiv, p);

		textureStore(jDst, id.xy, vec4f((l + r + t + b - d) * 0.25, 0.0, 0.0, 0.0));
	}

	@group(1) @binding(0) var gVel: texture_2d<f32>;
	@group(1) @binding(1) var gP: texture_2d<f32>;
	@group(1) @binding(2) var gDst: texture_storage_2d<rgba16float, write>;

	@compute @workgroup_size(8, 8) fn subtract(@builtin(global_invocation_id) id: vec3u) {
		let dim = textureDimensions(gDst);
		if (id.x >= dim.x || id.y >= dim.y) { return; }

		let p = vec2i(id.xy);
		let l = sAt(gP, p + vec2i(-1, 0));
		let r = sAt(gP, p + vec2i(1, 0));
		let t = sAt(gP, p + vec2i(0, -1));
		let b = sAt(gP, p + vec2i(0, 1));

		let v = textureLoad(gVel, p, 0).xy - 0.5 * vec2f(r - l, b - t);
		textureStore(gDst, id.xy, vec4f(v, 0.0, 0.0));
	}

	/* ── dye: advect along the projected field + colour splat ─────────── */

	@group(1) @binding(0) var dyeSrc: texture_2d<f32>;
	@group(1) @binding(1) var dyeVel: texture_2d<f32>;
	@group(1) @binding(2) var dyeDst: texture_storage_2d<rgba16float, write>;

	@compute @workgroup_size(8, 8) fn advectDye(@builtin(global_invocation_id) id: vec3u) {
		let dim = textureDimensions(dyeDst);
		if (id.x >= dim.x || id.y >= dim.y) { return; }

		let uv = (vec2f(id.xy) + 0.5) * u.texel;
		let v = textureSampleLevel(dyeVel, lin, uv, 0.0).xy;
		let back = uv - v * u.dt;

		var d = textureSampleLevel(dyeSrc, lin, back, 0.0).rgb * u.dyeDiss;
		d += u.splatCol.rgb * gauss(uv);

		textureStore(dyeDst, id.xy, vec4f(d, 1.0));
	}
`,zE=`
	struct C {
		disp: f32,   /* displacement, uv per unit of velocity */
		glow: f32,   /* dye over the page */
		pad0: f32,
		pad1: f32,
	}

	@group(0) @binding(0) var<uniform> c: C;
	@group(0) @binding(1) var lin: sampler;
	@group(0) @binding(2) var page: texture_2d<f32>;
	@group(0) @binding(3) var vel: texture_2d<f32>;
	@group(0) @binding(4) var dye: texture_2d<f32>;

	struct VOut {
		@builtin(position) pos: vec4f,
		@location(0) uv: vec2f,
	}

	@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
		let uv = vec2f(f32((i << 1u) & 2u), f32(i & 2u));

		var o: VOut;
		o.pos = vec4f(uv * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0), 0.0, 1.0);
		o.uv = uv;
		return o;
	}

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		let v = textureSample(vel, lin, in.uv).xy;
		let off = v * c.disp;

		/* the page, pulled through the field — a whisper of dispersion so
		   the distortion reads as refraction rather than smear */
		let cr = textureSample(page, lin, in.uv - off * 1.06);
		let cg = textureSample(page, lin, in.uv - off);
		let cb = textureSample(page, lin, in.uv - off * 0.94);

		let ink = textureSample(dye, lin, in.uv).rgb;

		/* premultiplied out: adding rgb without alpha is additive light, so
		   the ink glows over the bare page ground too */
		return vec4f(vec3f(cr.r, cg.g, cb.b) + ink * c.glow, cg.a);
	}
`;class BE{constructor(e){this.active=!1,this.gpu=null,this.queue=[],this.energy=0,this.graveyard=[],this.hue=0,this.flip=0,this.keep=0,this.reach=0,this.core=e}pointer(e,i,s,n){const r=Math.hypot(s,n);r&&(this.queue.push({x:e,y:i,dx:s,dy:n}),this.queue.length>8&&this.queue.shift(),this.energy=Math.min(1,this.energy+r*.004),this.active=!0)}brush(e,i,s,n,r=1,o=0){this.reach=o,this.queue.push({x:e,y:i,dx:s,dy:n}),this.queue.length>8&&this.queue.shift(),this.energy=Math.max(this.energy,Math.min(1,r)),this.active=!0}dispose(){for(const e of[...this.graveyard,...this.gpu?.textures??[]])e.destroy();this.reset()}reset(){this.gpu=null,this.graveyard.length=0,this.active=!1,this.energy=0,this.queue.length=0}warm(){!this.gpu&&this.core.device&&this.build()}build(){const e=this.core.device,i=tc,s=Math.max(16,Math.round(tc*this.core.height/Math.max(1,this.core.width))),n=(ie,xe)=>e.createTexture({label:`fluid ${xe}`,size:[i,s],format:ie,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),r=n("rgba16float","velA"),o=n("rgba16float","velB"),a=n("rgba16float","dyeA"),l=n("rgba16float","dyeB"),u=n("r32float","pA"),c=n("r32float","pB"),h=n("r32float","div"),f=e.createBuffer({label:"fluid u",size:Id*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),d=e.createBuffer({label:"fluid c",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(d,0,new Float32Array([.06,.9,0,0]));const g=e.createSampler({minFilter:"linear",magFilter:"linear"}),p=e.createShaderModule({label:"fluid sim",code:IE}),_=e.createShaderModule({label:"fluid composite",code:zE}),w=e.createBindGroupLayout({label:"fluid shared",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}}]}),y=GPUShaderStage.COMPUTE,m={sampleType:"float"},b={sampleType:"unfilterable-float"},v=ie=>({access:"write-only",format:ie}),x={advectVel:e.createBindGroupLayout({entries:[{binding:0,visibility:y,texture:m},{binding:1,visibility:y,storageTexture:v("rgba16float")}]}),divergence:e.createBindGroupLayout({entries:[{binding:0,visibility:y,texture:m},{binding:1,visibility:y,storageTexture:v("r32float")}]}),jacobi:e.createBindGroupLayout({entries:[{binding:0,visibility:y,texture:b},{binding:1,visibility:y,texture:b},{binding:2,visibility:y,storageTexture:v("r32float")}]}),subtract:e.createBindGroupLayout({entries:[{binding:0,visibility:y,texture:m},{binding:1,visibility:y,texture:b},{binding:2,visibility:y,storageTexture:v("rgba16float")}]}),advectDye:e.createBindGroupLayout({entries:[{binding:0,visibility:y,texture:m},{binding:1,visibility:y,texture:m},{binding:2,visibility:y,storageTexture:v("rgba16float")}]})},k=ie=>e.createComputePipeline({label:`fluid ${ie}`,layout:e.createPipelineLayout({bindGroupLayouts:[w,x[ie]]}),compute:{module:p,entryPoint:ie}}),R=k("advectVel"),S=k("divergence"),P=k("jacobi"),A=k("subtract"),M=k("advectDye"),D=e.createRenderPipeline({label:"fluid composite",layout:"auto",vertex:{module:_,entryPoint:"vs"},fragment:{module:_,entryPoint:"fs",targets:[{format:this.core.format}]},primitive:{topology:"triangle-list"}}),F=e.createBindGroup({layout:w,entries:[{binding:0,resource:{buffer:f}},{binding:1,resource:g}]}),O=(ie,xe)=>e.createBindGroup({layout:ie.getBindGroupLayout(1),entries:xe.map((pe,we)=>({binding:we,resource:pe}))}),C=r.createView(),L=o.createView(),q=a.createView(),ce=l.createView(),he=u.createView(),fe=c.createView(),ae=h.createView();this.gpu={uniforms:f,cuniforms:d,sampler:g,advectVel:R,divergence:S,jacobi:P,subtract:A,advectDye:M,shared:F,cshared:ie=>e.createBindGroup({layout:D.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:d}},{binding:1,resource:g},{binding:2,resource:ie},{binding:3,resource:C},{binding:4,resource:this.flip?ce:q}]}),composite:D,advectVelG:O(R,[C,L]),divergenceG:O(S,[L,ae]),jacobiG:[O(P,[he,ae,fe]),O(P,[fe,ae,he])],subtractG:O(A,[L,he,C]),advectDyeG:[O(M,[q,C,ce]),O(M,[ce,C,q])],w:i,h:s,dyeViews:[q,ce],velView:C,textures:[r,o,a,l,u,c,h]}}get dye(){return this.gpu?.dyeViews[this.flip]??null}sim(e,i){const s=this.core.device;if(!s||!this.active)return;for(const b of this.graveyard)b.destroy();this.graveyard.length=0;const n=Math.max(16,Math.round(tc*this.core.height/Math.max(1,this.core.width)));(!this.gpu||this.gpu.h!==n)&&(this.graveyard.push(...this.gpu?.textures??[]),this.build());const r=this.gpu,o=Math.min(1/30,(i||1)/60);let a=0,l=0,u=0,c=0,h=0;if(this.queue.length){const b=this.queue[this.queue.length-1];for(const v of this.queue)c+=v.dx,h+=v.dy;l=b.x,u=b.y,a=1,this.queue.length=0,this.hue=(this.hue+.15*o+Math.atan2(h,c)*.002)%1}const[f,d,g]=UE(this.hue,.55,.6),p=.35*this.energy,_=new Float32Array(Id);_[0]=1/r.w,_[1]=1/r.h,_[2]=o,_[3]=this.core.width/Math.max(1,this.core.height),_[4]=Math.exp(-.8*o),_[5]=Math.exp(-1.3*(1-.95*Math.min(1,Math.max(0,this.keep)))*o),_[6]=a,_[7]=this.reach>0?(this.reach/Math.max(1,this.core.height))**2:.0012,this.reach=0,_[8]=l/Math.max(1,this.core.width),_[9]=u/Math.max(1,this.core.height),_[10]=c/Math.max(1,this.core.width)*9,_[11]=h/Math.max(1,this.core.height)*9,_[12]=f*p,_[13]=d*p,_[14]=g*p,_[15]=1,s.queue.writeBuffer(r.uniforms,0,_);const w=Math.ceil(r.w/8),y=Math.ceil(r.h/8),m=e.beginComputePass({label:"fluid"});m.setBindGroup(0,r.shared),m.setPipeline(r.advectVel),m.setBindGroup(1,r.advectVelG),m.dispatchWorkgroups(w,y),m.setPipeline(r.divergence),m.setBindGroup(1,r.divergenceG),m.dispatchWorkgroups(w,y),m.setPipeline(r.jacobi);for(let b=0;b<LE;b++)m.setBindGroup(1,r.jacobiG[b%2]),m.dispatchWorkgroups(w,y);m.setPipeline(r.subtract),m.setBindGroup(1,r.subtractG),m.dispatchWorkgroups(w,y),m.setPipeline(r.advectDye),m.setBindGroup(1,r.advectDyeG[this.flip]),m.dispatchWorkgroups(w,y),m.end(),this.flip=1-this.flip,this.energy*=Math.exp(-.55*o),!this.queue.length&&this.energy<.004&&(this.energy=0,this.active=!1)}composite(e,i,s){const n=this.gpu;if(!n)return;const r=e.beginRenderPass({label:"fluid composite",colorAttachments:[{view:s,loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0},storeOp:"store"}]});r.setPipeline(n.composite),r.setBindGroup(0,n.cshared(i)),r.draw(3),r.end()}}function UE(t,e,i){const s=e*Math.min(i,1-i),n=r=>{const o=(r+t*12)%12;return i-s*Math.max(-1,Math.min(o-3,Math.min(9-o,1)))};return[n(0),n(8),n(4)]}const an=8,Pn=24,VE=32,J0=48,Z0=`
	struct G {
		res: vec2f,      /* CSS px */
		mouse: vec2f,    /* CSS px, y up */
		/* the panes' colour under a transparent frame (see under() and
		   GlassPass.measure). vec3f aligns to 16, so it sits here rather
		   than after a scalar where it would open a hole the JS side has to
		   remember. */
		ground: vec3f,
		count: f32,      /* how many slots are live */
		merge: f32,      /* smin k, px — 0 switches the liquid merging off */
		disp: f32,       /* refraction strength, as a share of the bevel */
		frost: f32,      /* how far down the chain the rim reads, in levels */
		dark: f32,       /* tint toward dark glass, 0..1 */
		lift: f32,       /* lift toward white, 0..1 */
		warp: f32,       /* whole-face lens, px of sample offset at the edge */
		tilt: f32,       /* the slab's tilt toward the pointer, px of shift */
		reach: f32,      /* how far the pointer's influence extends, px */
		near: f32,       /* how much the whole rim brightens with the hand close */
		glow: f32,       /* radius of the pointer's hot spot on the rim, px */
		hot: f32,        /* how hard that spot burns, 0 = off */
		env: f32,        /* how much of the room the bevel reflects */
		/* the slab itself — see the profile and the refraction below */
		power: f32,      /* the bevel's superellipse exponent; 2 is a circle */
		thick: f32,      /* how deep the glass is, as a share of the bevel */
		/* the point every tilted pane turns about — px, y up. SHARED, which
		   is what makes two panes read as one object leaning rather than as
		   two that both happen to be leaning. */
		pivot: vec2f,
		ior: f32,        /* index of refraction */
		/* the page's own colour, the globe orb's under a transparent frame.
		   On a row of its own: three slots of padding after ior, JS side */
		page: vec3f,
	}

	struct E {
		rect: vec4f,   /* xy centre, zw half extents — CSS px, y up */
		a: vec4f,      /* radius px, presence 0..1, press 0..1, - */
		b: vec4f,      /* clear, haze, nested, bevel px */
		fill: vec4f,   /* the element's own tint, rgba */
		c: vec4f,      /* lens, face-warp share, -, frost */
		/* the pane's lean: radians about x and y, and the eye's distance in
		   px. Zero rotation is the flat page and costs one branch. */
		rot: vec4f,
	}

	@group(0) @binding(0) var<uniform> g: G;
	@group(0) @binding(1) var<uniform> els: array<E, ${an}>;
	@group(0) @binding(2) var samp: sampler;
	@group(0) @binding(3) var scene: texture_2d<f32>;
	@group(0) @binding(4) var blur1: texture_2d<f32>;
	@group(0) @binding(5) var blur2: texture_2d<f32>;
	@group(0) @binding(6) var blur3: texture_2d<f32>;
	@group(0) @binding(7) var blur4: texture_2d<f32>;
	@group(0) @binding(8) var matcap: texture_2d<f32>;

	struct VOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f }

	@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
		let uv = vec2f(f32((i << 1u) & 2u), f32(i & 2u));
		var o: VOut;
		o.pos = vec4f(uv * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0), 0.0, 1.0);
		o.uv = uv;
		return o;
	}

	/*
	 * TWO FRAMES, and keeping them apart is the whole of the y story.
	 *
	 * The field, the rects, the pointer and every light direction are Y-UP —
	 * what "a key from the top-left" means in the code below. The frame
	 * texture and its blur chain are Y-DOWN, image memory order, like every
	 * other texture in this layer. So the fragment's own uv samples textures
	 * directly, and this converts it once for the geometry. (Getting it wrong
	 * is silent: the SDF answers "far away" over the whole footprint and the
	 * pass draws nothing at all.)
	 */
	fn upPx(uv: vec2f) -> vec2f {
		return vec2f(uv.x, 1.0 - uv.y) * g.res;
	}

	/* a y-up offset in px, as a y-down uv delta */
	fn downUv(shift: vec2f) -> vec2f {
		return vec2f(shift.x, -shift.y) / g.res;
	}

	/*
	 * The environment, matcap style: a sphere shaded once and photographed
	 * head on, so the pixel at a normal's xy IS what a surface facing that way
	 * looks like — the room, as a lookup.
	 */
	fn env(n: vec3f) -> vec3f {
		return textureSampleLevel(matcap, samp, n.xy * 0.5 + 0.5, 0.0).rgb;
	}

	/*
	 * One refracted ray's lateral travel, in px.
	 *
	 * The eye is straight on (incident -z), so the whole of the deflection is
	 * the surface normal's doing. The travel is how far the ray goes to cross
	 * a slab of that depth at the angle it left at — the shallower the ray,
	 * the further it wanders before it reaches the far side, which is exactly
	 * why a bevel drags the background so much harder than a flat face does.
	 * The floor on the z term keeps a ray that leaves nearly parallel to the
	 * page from reaching the other side of the screen.
	 */
	fn ray(n: vec3f, ior: f32, depth: f32) -> vec2f {
		let eta = 1.0 / max(ior, 1.0001);
		let r = refract(vec3f(0.0, 0.0, -1.0), n, eta);

		return r.xy * (depth / max(abs(r.z), 0.2));
	}

	/*
	 * A screen point, in the coordinates of a TILTED plane — the inverse of
	 * the projection the DOM does with perspective() rotateX() rotateY().
	 *
	 * The plane turns about the shared pivot and is seen from an eye z px in
	 * front of it, so a point q on the plane lands at
	 *
	 *   w = q.x·e1 + q.y·e2            (e1, e2 the rotated basis)
	 *   s = w.xy · z / (z - w.z)
	 *
	 * which rearranges into a 2x2 system in q — one determinant to solve, per
	 * element, per field evaluation. Everything downstream then works exactly
	 * as it did on the flat page: the SDF, the merge, the bevel and the
	 * antialias are all evaluated in the plane's own space, so a leaning pane
	 * is not a special case anywhere but here.
	 *
	 * The reason this exists rather than a CSS transform on the glass: a
	 * plane mirrors its element's RECT, and the rect of a 3D-transformed
	 * element is the axis-aligned box its corners project into. The type
	 * would lean and the slab under it would not.
	 */
	fn planeLocal(d: vec2f, rx: f32, ry: f32, z: f32) -> vec2f {
		let cx = cos(rx);
		let sx = sin(rx);
		let cy = cos(ry);
		let sy = sin(ry);

		/*
		 * The plane's own axes after the two turns: R = Ry · Rx, so a point
		 * meets rotateX first and rotateY second.
		 *
		 * CSS multiplies its transform list LEFT TO RIGHT and applies the
		 * product to the point, so the rightmost function acts first — the
		 * matching declaration puts rotateY before rotateX, in that order.
		 * Written the other way round the two compose to a roll of about
		 * rx·ry between them, which is a degree of skew between the slab and
		 * the type printed on it.
		 *
		 * And this frame is Y-UP where the DOM's is Y-DOWN, so a turn about x
		 * means the opposite thing in each: the caller hands this one the
		 * negated angle (see components/cursor-stack).
		 */
		let e1 = vec3f(cy, 0.0, -sy);
		let e2 = vec3f(sx * sy, cx, sx * cy);

		let a = z * e1.xy + d * e1.z;
		let b = z * e2.xy + d * e2.z;
		let rhs = z * d;

		let det = a.x * b.y - a.y * b.x;
		if (abs(det) < 1e-5) { return d; }

		return vec2f(rhs.x * b.y - rhs.y * b.x, a.x * rhs.y - a.y * rhs.x) / det;
	}

	/* where this element's SDF is evaluated: the flat page, or the plane it
	   leans on. One branch, uniform per element. */
	fn atElement(frag: vec2f, e: E) -> vec2f {
		if (abs(e.rot.x) < 0.0002 && abs(e.rot.y) < 0.0002) {
			return frag - e.rect.xy;
		}

		return planeLocal(frag - g.pivot, e.rot.x, e.rot.y, max(e.rot.z, 1.0)) - (e.rect.xy - g.pivot);
	}

	/* rounded box, centred: p relative to the middle, b half extents */
	fn sdBox(p: vec2f, b: vec2f, r: f32) -> f32 {
		let q = abs(p) - b + vec2f(r);
		return min(max(q.x, q.y), 0.0) + length(max(q, vec2f(0.0))) - r;
	}

	/* polynomial smooth minimum (iq) — the liquid part of liquid glass */
	fn smin(a: f32, b: f32, k: f32) -> f32 {
		if (k < 0.001) { return min(a, b); }
		let h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
		return mix(b, a, h) - k * h * (1.0 - h);
	}

	/*
	 * The union field. A dead slot must not contribute at all — parked at zero
	 * size it still leaves a point-sized well smin smears into a dimple. A
	 * FADING element lifts off by having its whole field recede.
	 */
	fn field(p: vec2f) -> f32 {
		var d = 1e5;
		let n = i32(g.count);

		for (var i = 0; i < ${an}; i++) {
			if (i >= n) { break; }

			let e = els[i];
			var di = 1e5;
			if (e.a.y > 0.001) {
				di = sdBox(atElement(p, e), e.rect.zw, e.a.x) + (1.0 - e.a.y) * ${J0}.0;
			}

			d = smin(d, di, g.merge);
		}

		return d;
	}

	/* the pass's early-exit radius: the shape and its antialias, nothing
	   more — no shadow, which on a dark page read as a grey rectangle */
	const SKIRT = 2.0;
`,HE=`
	struct B { texel: vec2f, off: f32, pad: f32 }

	@group(0) @binding(0) var<uniform> b: B;
	@group(0) @binding(1) var samp: sampler;
	@group(0) @binding(2) var tex: texture_2d<f32>;

	struct VOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f }

	@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
		let uv = vec2f(f32((i << 1u) & 2u), f32(i & 2u));
		var o: VOut;
		o.pos = vec4f(uv * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0), 0.0, 1.0);
		o.uv = uv;
		return o;
	}

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		let o = b.texel * b.off;

		var c = textureSampleLevel(tex, samp, in.uv, 0.0) * 4.0;
		c += textureSampleLevel(tex, samp, in.uv + vec2f(-o.x, -o.y), 0.0);
		c += textureSampleLevel(tex, samp, in.uv + vec2f(o.x, -o.y), 0.0);
		c += textureSampleLevel(tex, samp, in.uv + vec2f(-o.x, o.y), 0.0);
		c += textureSampleLevel(tex, samp, in.uv + vec2f(o.x, o.y), 0.0);

		return c / 8.0;
	}
`,ev=`
	/* a transparent frame composited over the page — what the eye sees. The
	   frame is premultiplied, so its rgb is already weighted; where a ground
	   plane covers the canvas the alpha is 1 and this is a pass-through. */
	fn over(c: vec4f) -> vec3f {
		return under() * (1.0 - c.a) + c.rgb;
	}

	/*
	 * One frosted sample at a depth in the chain.
	 *
	 * The depth is continuous: 0 is the sharp frame, 4 the bottom rung, and
	 * everything between crossfades two rungs, so the frost eases with the rim
	 * instead of stepping. Two fetches at most.
	 */
	fn pick(t: texture_2d<f32>, uv: vec2f) -> vec3f {
		return over(textureSampleLevel(t, samp, uv, 0.0));
	}

	fn tap(uv: vec2f, lod: f32) -> vec3f {
		let l = clamp(lod, 0.0, 4.0);

		if (l < 1.0) { return mix(pick(scene, uv), pick(blur1, uv), l); }
		if (l < 2.0) { return mix(pick(blur1, uv), pick(blur2, uv), l - 1.0); }
		if (l < 3.0) { return mix(pick(blur2, uv), pick(blur3, uv), l - 2.0); }

		return mix(pick(blur3, uv), pick(blur4, uv), l - 3.0);
	}
`,GE=Z0+ev+`
	fn under() -> vec3f {
		return g.ground;
	}

	@fragment fn fsGlass(in: VOut) -> @location(0) vec4f {
		let frag = upPx(in.uv);
		let d = field(frag);

		/* most pixels: the frame stays what it was */
		if (d > SKIRT) { discard; }

		/*
		 * Which element this pixel belongs to, and everything that is a
		 * property of THAT element rather than of the pass: its bevel, its
		 * tint, whether it is pressed, whether it is clear.
		 *
		 * Read before the profile, because the bevel is per element — a fifty
		 * pixel pill and an eleven hundred pixel card cannot share one chamfer
		 * without one of them looking wrong.
		 */
		var press = 0.0;
		var near = 1e5;
		var clear = 0.0;
		var haze = 0.0;
		var nest = 0.0;
		var bevel = 24.0;
		var optics = 1.0;
		var warpMul = 1.0;
		var frostMul = 1.0;
		var fill = vec4f(0.0);
		var q = vec2f(0.0);
		var pc = vec2f(0.0);
		var reach = 0.0;

		let n0 = i32(g.count);

		for (var i = 0; i < ${an}; i++) {
			if (i >= n0) { break; }

			let e = els[i];
			let local = atElement(frag, e);
			let di = sdBox(local, e.rect.zw, e.a.x);
			press = max(press, e.a.z * e.a.y * (1.0 - smoothstep(0.0, 24.0, di)));

			if (e.a.y > 0.001 && di < near) {
				near = di;
				q = local / e.rect.zw;
				clear = e.b.x;
				haze = e.b.y;
				nest = e.b.z;
				bevel = e.b.w;
				fill = e.fill;
				optics = e.c.x;
				warpMul = e.c.y;
				frostMul = e.c.w;

				/* the pointer in this element's frame, and how near it is —
				   the lens answers the hand only while the hand is close */
				pc = atElement(g.mouse, e) / e.rect.zw;
				let dm = sdBox(atElement(g.mouse, e), e.rect.zw, e.a.x);
				reach = 1.0 - smoothstep(0.0, g.reach, dm);
			}
		}

		/*
		 * The height profile — a SUPERELLIPSE, not a quarter circle.
		 *
		 *   e = 1 + d/bevel          0 a bevel in, 1 at the outline
		 *   h = (1 - e^p)^(1/p)      1 a bevel in, 0 at the outline
		 *
		 * p = 2 IS the circle, which is what this used to be. Above it the
		 * middle flattens and the turn at the very edge sharpens — the
		 * difference between a pillow and a chamfered slab, and the reason
		 * the corner reads as glass with a thickness rather than as a blob.
		 * One dial for the whole family. (After the Codrops liquid-glass
		 * grid, which parameterises the same profile.)
		 */
		let e = clamp(1.0 + d / bevel, 0.0, 1.0);
		let pw = max(g.power, 1.0);
		let h = pow(max(1.0 - pow(e, pw), 0.0), 1.0 / pw);
		let rim = 1.0 - h;

		/* which way is out, off the merged field itself */
		let grad = normalize(vec2f(
			field(frag + vec2f(1.0, 0.0)) - field(frag - vec2f(1.0, 0.0)),
			field(frag + vec2f(0.0, 1.0)) - field(frag - vec2f(0.0, 1.0)),
		) + vec2f(1e-6));

		/*
		 * The surface's own slope, dh/dd, from the profile's derivative:
		 *
		 *   dh/de = -(e/h)^(p-1)     and     de/dd = 1/bevel
		 *
		 * so the normal is (thickness/bevel)·(e/h)^(p-1) along the gradient,
		 * against 1 in z. Capped, because the profile is vertical AT the
		 * outline and an infinite slope is a normal lying flat in the plane
		 * — every ray would refract sideways forever.
		 */
		let thick = bevel * max(g.thick, 0.0) * (1.0 - press * 0.35);
		let slope = min((thick / bevel) * pow(e / max(h, 0.02), pw - 1.0), 8.0);

		let n = normalize(vec3f(grad * slope, 1.0));

		/*
		 * Refraction: a RAY through the slab, not a fudge along the gradient.
		 *
		 * The eye looks straight down at the page, so the incident is -z; the
		 * ray bends at the surface by Snell, crosses the glass's thickness
		 * (further, the shallower its angle), and lands somewhere else on
		 * what is behind. That distance IS the sample offset — so the look
		 * falls out of two honest numbers, an index of refraction and a
		 * depth, instead of a curve tuned by hand per element.
		 *
		 * Clear glass in the flow has nothing passing under it — the bevel
		 * and the hairline are the whole look — so its lens is switched off
		 * by the depth going to zero.
		 */
		let lens = 1.0 - clear;
		let depth = thick * g.disp * lens;

		let bend = ray(n, g.ior, depth);

		/*
		 * ...and on top of the physics, the two things that make the pane
		 * answer the hand: the SLAB moving under the eye.
		 */

		/* the whole face is a lens: content pulls toward the centre by an
		   elliptical profile in the element's own frame — smooth everywhere,
		   unlike a box gradient, so no seam at the diagonals */
		let ql = min(length(q), 1.0);
		var swim = -q * (ql * ql) * g.warp * warpMul * (1.0 + press * 0.5) * lens;

		/* the hand: the lens's centre slides toward the pointer and the slab
		   tilts after it, so content under the glass swims as the cursor
		   passes — strongest with the pointer on the element, gone at reach */
		let pcl = clamp(pc, vec2f(-1.5), vec2f(1.5));
		let qm = q - pcl * 0.22;
		let qml = min(length(qm), 1.0);
		swim -= (qm * (qml * qml) - q * (ql * ql)) * g.warp * warpMul * reach * lens;
		swim += pcl * g.tilt * warpMul * reach * lens;

		/* an element can ask for a different lens — stronger or weaker than
		   the page's */
		let uv = in.uv + downUv((bend + swim) * optics);

		/* frost: a floor everywhere, deeper where the rim is. Glass ON glass
		   frosts shallow — it sits a pane away, not a room, and a deep blur of
		   an already-frosted surface reads as paint. */
		/* the multiplier is the ELEMENT's own say over the page's dial: a pane
		   carrying type wants more frost than one that is only a lens, or the
		   wall behind it reads straight through the words */
		let lod = (g.frost * frostMul * (0.5 + 0.5 * rim) + press * 0.7) * haze * mix(1.0, 0.3, nest);

		var col = tap(uv, lod);

		/* a slab-shaped tint, multiplied so it stays content-relative, plus a
		   vertical grade local to the element */
		let grade = clamp(d / (bevel * 4.0), -1.0, 0.0) + 1.0;
		col *= mix(1.0, 0.78 + grade * 0.08, g.dark * haze * (1.0 - nest * 0.6));

		/* the element's own tint — laid over the frost, under the light */
		col = mix(col, fill.rgb, fill.a);

		/*
		 * The lift — the pane's own milkiness — rides its FILL.
		 *
		 * It is what makes a panel read where nothing is behind it, so it
		 * cannot be global: a pane authored with almost no fill is asking to
		 * be glass, and a flat lift puts a grey wash over it that no amount of
		 * dialling the fill removes.
		 */
		col = mix(col, vec3f(1.0), g.lift * (1.0 - press * 0.4) * (0.2 + 0.8 * fill.a));

		let lum = dot(col, vec3f(0.299, 0.587, 0.114));
		col = mix(vec3f(lum), col, 1.12);

		/* fresnel off the real normal, trimmed at the outermost sliver. The
		   lit rim is a LINE, not a band: hold it to the outer 2px so the
		   highlight reads as an edge rather than a bevel. */
		var fres = pow(1.0 - n.z, 2.0) * (1.0 - smoothstep(0.985, 1.0, rim));
		fres *= 1.0 - smoothstep(1.0, 2.5, -d);

		/* two lights. The room: a fixed key from the top-left. The hand: the
		   pointer, one bright arc on the near rim and a dimmer counter-arc
		   opposite. */
		let key = dot(grad, normalize(vec2f(-0.6, 1.0)));
		let toMouse = normalize(g.mouse - frag + vec2f(1e-4));
		let facing = dot(grad, toMouse);

		var spec = fres
			* (smoothstep(0.2, 0.9, key) * 0.9
				+ smoothstep(0.35, 0.95, facing) * 0.8
				+ smoothstep(0.45, 1.0, -facing) * 0.35)
			* (1.0 - press * 0.4);

		/*
		 * The hot spot: the rim burns where the cursor actually IS.
		 *
		 * The facing term is angular, so it lights the whole side turned
		 * toward the pointer evenly — the edge brightens but nothing on it
		 * reads as the point of contact. This is the missing half: per-pixel
		 * distance from the cursor, squared for a tight core with a long tail.
		 */
		var hot = 1.0 - smoothstep(0.0, g.glow, length(g.mouse - frag));
		hot *= hot;
		hot *= g.hot;

		spec *= 1.0 + 4.5 * hot;

		/* the room, reflected off the bevel */
		col += env(n) * g.env * rim * (1.0 - press * 0.3);

		col += vec3f(spec);
		/* the fresnel edge brightens on its own near the hand, and burns at
		   the hot spot — the specular alone is too thin a line to carry it */
		col += vec3f(fres * (0.08 + reach * g.near + 1.8 * hot));

		/* inner shadow at the bevel's foot — where a slab's thickness reads */
		col *= 1.0 - 0.14 * smoothstep(0.15, 0.55, rim) * (1.0 - smoothstep(0.55, 0.95, rim)) * (1.0 - spec);

		/* the hairline: a fine light border, mixed not added — lit by the key
		   from the top-left, so it fades out toward the bottom-right edge
		   rather than ringing the whole shape. It goes with the bloom, or the
		   glow floats off an edge still drawn at its resting weight. */
		let line = 1.0 - smoothstep(0.25, 0.75, abs(d + 0.6));
		let lit = 0.1 + 0.9 * smoothstep(-0.4, 0.9, key);
		col = mix(col, vec3f(0.85 + 0.4 * hot), clamp(line * (0.45 + 1.4 * hot) * lit, 0.0, 1.0));

		/*
		 * PREMULTIPLIED out, over the frame — where reborn's pass wrote the
		 * ground back because it owned its pixels inside the frame. Here the
		 * frame is already on the canvas and this pass only adds to it, so the
		 * shape's own antialias IS the blend and there is nothing to
		 * re-composite. The over() composite still earns its fetch inside the
		 * glass, where a refracted sample genuinely needs the page under a
		 * transparent frame.
		 *
		 * (No backticks anywhere in this file's comments: they live inside a
		 * template literal, and one would end the string and take the whole
		 * module with it.)
		 */
		let shape = 1.0 - smoothstep(-1.5, 1.5, d);
		return vec4f(col * shape, shape);
	}
`,$E="M0 122.563C0 194.225 38.8427 242 97.4151 242C129.167 242 152.288 225.558 159.378 197.948H160.612V237.347H207.161V121.012H107.896V152.035H159.378V154.517C159.378 182.127 136.874 203.532 107.588 203.532C71.8282 203.532 48.3993 174.371 46.8579 128.458V116.979C48.3993 70.7559 71.5199 41.5948 108.205 41.5948C135.641 41.5948 156.296 60.8287 160.303 88.7489H207.161C200.071 35.08 163.386 3.12689 108.205 3.12689C39.7676 3.12689 0 47.7993 0 122.563Z",iC="0 3.127 207.161 238.873",zd=6;function jE(){const t=$E.match(/[MCHVZ]|-?[\d.]+/g)??[],e=[];let i=0,s=0,n=0;const r=()=>parseFloat(t[i++]);for(;i<t.length;){const m=t[i++];if(m==="M")s=r(),n=r(),e.push([s,n]);else if(m==="H")s=r(),e.push([s,n]);else if(m==="V")n=r(),e.push([s,n]);else if(m==="C"){const b=r(),v=r(),x=r(),k=r(),R=r(),S=r();for(let P=1;P<=zd;P++){const A=P/zd,M=1-A;e.push([M*M*M*s+3*M*M*A*b+3*M*A*A*x+A*A*A*R,M*M*M*n+3*M*M*A*v+3*M*A*A*k+A*A*A*S])}s=R,n=S}else break}const[o,a]=e[0],[l,u]=e[e.length-1];Math.hypot(l-o,u-a)<.001&&e.pop();const c=e.map(m=>m[0]),h=e.map(m=>m[1]),f=Math.min(...c),d=Math.max(...c),g=Math.min(...h),p=Math.max(...h),_=p-g,w=(f+d)/2,y=(g+p)/2;return e.map(([m,b])=>[(m-w)/_,-(b-y)/_])}const qE=1.45,tv=2.6,Bd=256,fu=.75,WE=t=>`vec3f(${t.map(e=>e.toFixed(5)).join(", ")})`,ic=([t,e])=>`vec2f(${t.toFixed(5)}, ${e.toFixed(5)})`;function KE(){const t=jE(),e=t.map((i,s)=>`e = edge(q, ${ic(i)}, ${ic(t[(s+t.length-1)%t.length])}); d = min(d, e.x); s *= e.y;`).join(`
		`);return`
	struct VOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f }

	@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
		let uv = vec2f(f32((i << 1u) & 2u), f32(i & 2u));
		var o: VOut;
		o.pos = vec4f(uv * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0), 0.0, 1.0);
		o.uv = uv;
		return o;
	}

	/* one edge, vi to the vertex before it: the squared distance to its
	   nearest point, and -1 where the crossing test flips the sign */
	fn edge(q: vec2f, vi: vec2f, vj: vec2f) -> vec2f {
		let e = vj - vi;
		let w = q - vi;
		let b = w - e * clamp(dot(w, e) / dot(e, e), 0.0, 1.0);

		let c0 = q.y >= vi.y;
		let c1 = q.y < vj.y;
		let c2 = e.x * w.y > e.y * w.x;

		return vec2f(dot(b, b), select(1.0, -1.0, (c0 && c1 && c2) || (!c0 && !c1 && !c2)));
	}

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		/* y UP, like the orb's frame */
		let q = (vec2f(in.uv.x, 1.0 - in.uv.y) * 2.0 - 1.0) * ${fu.toFixed(2)};

		let b = q - ${ic(t[0])};
		var d = dot(b, b);
		var s = 1.0;
		var e = vec2f(0.0);

		${e}

		return vec4f(s * sqrt(d), 0.0, 0.0, 1.0);
	}
`}function YE(){return Z0+ev+`
	struct O {
		a: vec4f,
		b: vec4f,
		c: vec4f,
	}

	@group(1) @binding(0) var<uniform> orb: O;
	@group(1) @binding(1) var letterField: texture_2d<f32>;

	/* the page itself under a transparent frame, not the panes' black —
	   magnified, black made the ball a pit (see GlassPass.measure) */
	fn under() -> vec3f {
		return g.page;
	}

	const INK = ${WE(Mt("ink"))};

	/* the axis tipped toward the eye — the Earth's 23.4 degrees */
	const TILT = 0.41;
	/* a line every 30 degrees, both families */
	const STEP = 0.5235988;
	/* the ball the weights below were drawn on: its radius, css px. They
	   belong to the drawing, not to the page, so each is scaled by the
	   resting radius over this one — a bigger ball is the same picture */
	const DRAWN = 24.0;
	/* the etched line's half-width, css px at DRAWN */
	const LINE = 0.2;
	/* the near lattice where it crosses the letter */
	const CROSS = 0.3;
	/* samples of the letter over the shutter while the coin spins, and how
	   soft its edge goes at full blur, as a share of its height */
	const TAPS = 24u;
	const BLUR = 0.12;

	/*
	 * The glass. Crown glass, one index for all three channels — no rainbow
	 * at the rim. The page sits DEEP under the centre, and a ray that leaves
	 * the back near-grazing is held to REACH, so a dark gutter an inch away
	 * cannot be magnified into the rim.
	 */
	const IOR = 1.5;
	const DEEP = 1.9;
	const REACH = ${tv.toFixed(2)};
	/* the outer band sees the whole far field squeezed into a sliver; this
	   much of it leans toward the page right under the ball instead */
	const DILUTE = 0.5;
	/* grey smoke, per unit radius of glass crossed — the ball's volume. The
	   same share of every channel, as the panes pass: no cast of its own */
	const SMOKE = 0.08;
	/*
	 * The panes' tint over what the glass shows: black, and then their milk
	 * (the pill's lift on its .4 fill). Matched by measurement, not copied:
	 * with the smoke and the rim's room, the body of the ball reads as dark
	 * as the pill over the same flat tile, .56 of the page plus .036, to
	 * within a level of luminance. The letter is not under it, as the pill's
	 * type is not.
	 */
	const TINT = 0.3;
	const MILK = 0.036;
	/* the tint under the hand */
	const DIM = 0.6;
	/* the frost floor, in rungs of the chain, over the ray's own footprint */
	const FROST = 0.35;
	const F0 = 0.05;
	const FPOW = 3.0;
	const SHADOW = 0.3;
	/* the letter's cap height, as a share of the radius — the front surface
	   magnifies it back to about 0.45 */
	const GSCALE = 0.3;
	const FRONT = 0.34;
	/* the groove's shaded wall, a device pixel down and right of each line —
	   what keeps the lattice readable on a pale tile */
	const GROOVE = 0.5;
	const BACK = 0.16;

	/* the light the etching is shaded by, top-left and toward the eye */
	const KEY = vec3f(-0.6593, 0.7092, 0.2497);

	/* a point of the page, css px from the centre, y up — as a frame uv */
	fn pageUv(x: vec2f) -> vec2f {
		let xy = orb.a.xy + x;
		return vec2f(xy.x / g.res.x, 1.0 - xy.y / g.res.y);
	}

	/* the page at the chain's third rung — the soft taps, one fetch */
	fn soft(x: vec2f) -> vec3f {
		return over(textureSampleLevel(blur3, samp, pageUv(x), 0.0));
	}

	/* the ball's shadow on the page: soft, and offset down and right */
	fn shadow(x: vec2f, R: f32) -> f32 {
		let o = (x - vec2f(0.14, -0.24) * R) / R;
		let s = 1.0 - smoothstep(0.35, 1.3, length(o * vec2f(1.0, 1.1)));
		return SHADOW * s * s * orb.b.x;
	}

	struct Tr { hit: vec2f, len: f32, tq: f32, q: vec2f, n2: vec3f }

	/*
	 * One ray through the ball, the eye straight on: in at the front, across
	 * the chord, out at the back (or back in, past the critical angle) and
	 * onto the page D under the centre. q is where it crosses the centre
	 * plane — the letter's space, so the G is seen through the front surface.
	 */
	fn trace(N1: vec3f, R: f32, D: f32) -> Tr {
		let T1 = refract(vec3f(0.0, 0.0, -1.0), N1, 1.0 / IOR);
		let P1 = N1 * R;
		let t = max(-2.0 * dot(P1, T1), 0.0);
		let P2 = P1 + T1 * t;
		let N2 = P2 / R;

		var T2 = refract(T1, -N2, IOR);
		if (dot(T2, T2) < 1e-6) { T2 = reflect(T1, -N2); }

		let s = max((-D - P2.z) / min(T2.z, -0.06), 0.0);
		var h = P2.xy + T2.xy * s;
		h *= min(1.0, REACH * R / max(length(h), 1e-4));

		var o: Tr;
		o.hit = h;
		o.len = t;
		o.tq = -P1.z / min(T1.z, -1e-3);
		o.q = P1.xy + T1.xy * o.tq;
		o.n2 = N2;
		return o;
	}

	/* the letter's signed distance at a point of its own space (see
	   letterCode). Past the baked square the edge texels stand in — outside,
	   and further than the antialias ever asks */
	fn sdG(q: vec2f) -> f32 {
		let uv = vec2f(0.5 + 0.5 * q.x / ${fu.toFixed(2)}, 0.5 - 0.5 * q.y / ${fu.toFixed(2)});
		return textureSampleLevel(letterField, samp, uv, 0.0).r;
	}

	/* the main globe's coverage form, with the derivative handed in: solid
	   through the core, one pixel of ramp, gone once too dense to draw */
	fn lines(x: f32, fw: f32, w: f32) -> f32 {
		let d = abs(fract(x - 0.5) - 0.5);
		let a = clamp(w - d / max(fw, 1e-5) + 0.5, 0.0, 1.0);
		return a * (1.0 - smoothstep(0.35, 0.9, fw));
	}

	/*
	 * The lattice at a point of the sphere, by its unit direction — the near
	 * face, the groove beside it and the far face all ask this one. The
	 * longitude's derivative is taken off the direction rather than the
	 * angle, so the atan2 seam at the back draws no line of its own.
	 */
	fn lattice(n: vec3f, spin: f32, w: f32, haze: f32) -> f32 {
		let ct = cos(TILT);
		let st = sin(TILT);
		let l = vec3f(n.x, ct * n.y + st * n.z, -st * n.y + ct * n.z);

		/* minus: a growing spin carries the near face west to east */
		let lon = atan2(l.x, l.z) - spin;
		let la = asin(clamp(l.y, -1.0, 1.0));

		let fwl = (fwidth(l.x) + fwidth(l.z)) / max(length(l.xz), 1e-3) / STEP;
		let fwp = fwidth(la) / STEP;

		let pole = 1.0 - smoothstep(0.8, 0.96, abs(l.y));
		let mean = min(1.0, (2.0 * w + 1.0) * fwl) * (1.0 - smoothstep(0.35, 0.9, fwl));
		let mer = mix(lines(lon / STEP, fwl, w), mean, haze) * pole;
		let par = lines(la / STEP, fwp, w) * (1.0 - step(2.5, abs(la / STEP)));

		return max(mer, par);
	}

	/* what a reflected ray sees: a plain room, darker below than above, and
	   the page itself behind. Procedural, and no lights in it */
	fn room(d: vec3f, page: vec3f) -> vec3f {
		let sweep = mix(vec3f(0.07, 0.066, 0.064), vec3f(0.60, 0.59, 0.55), smoothstep(-0.4, 0.9, d.y));
		return mix(sweep, page * 0.88 + INK * 0.1, smoothstep(0.15, -0.35, d.z));
	}

	@fragment fn fsOrb(in: VOut) -> @location(0) vec4f {
		let dpr = orb.a.w;
		let R0 = orb.a.z;
		let p = upPx(in.uv) - orb.a.xy;

		let on = orb.b.x;
		let press = orb.b.y;
		let spin = orb.b.z;
		let coin = orb.c.x;
		let shutter = orb.c.y;
		let taps = select(1u, TAPS, shutter > 0.001);
		let span = shutter / f32(max(taps - 1u, 1u));
		let haze = smoothstep(0.0, STEP, shutter);

		/* the field's recede, so the ball swells and dissolves with the panes
		   — a ball's is never less than its radius */
		let reff = max(R0 - (1.0 - on) * max(${J0.toFixed(1)}, R0), 0.0);
		let R = max(reff * (1.0 - 0.05 * press), 0.5);
		/* off the resting radius, so the weights hold still while it swells */
		let grow = R0 / DRAWN;

		let r = length(p);
		let pc = p * min(1.0, 0.9985 * R / max(r, 1e-4));
		let N1 = vec3f(pc / R, sqrt(max(1.0 - dot(pc, pc) / (R * R), 0.0)));
		let D = DEEP * R;

		let t = trace(N1, R, D);

		/* every derivative first, in uniform control flow: the depth down the
		   chain off the ray's own footprint on the page, the letter's
		   antialias in its own space, and the three lattices */
		let fwh = abs(dpdx(t.hit)) + abs(dpdy(t.hit));
		let lod = clamp(log2(max(length(fwh) * dpr, 1.0)) + FROST, 0.0, 4.0);
		let qfw = max(length(fwidth(t.q)), 1e-4) * 0.75;

		let w = LINE * grow * dpr;
		let po = pc + vec2f(0.7, -0.7) / dpr;
		let NS = vec3f(po / R, sqrt(max(1.0 - dot(po, po) / (R * R), 0.0)));

		let frontL = lattice(N1, spin, w, haze);
		let frontS = lattice(NS, spin, w, haze);
		let backL = lattice(t.n2, spin, w, haze);

		/* past the silhouette only the shadow is left — black at its own
		   alpha, so the page under it is darkened, never repainted. After
		   the derivatives, so they stay in uniform control flow */
		let sh = shadow(p, R);
		if (r > R + 1.0 || reff < 0.5) { return vec4f(0.0, 0.0, 0.0, sh); }

		/* the page through the ball */
		var col = tap(pageUv(t.hit), lod);
		col = mix(col, soft(pc * 0.9), smoothstep(0.8, 1.0, min(r / R, 1.0)) * DILUTE);

		/* what crosses more glass loses more light */
		let trans = exp(-SMOKE * t.len / R);
		col *= trans;

		/* the far side's etching, seen through the whole ball */
		col = mix(col, INK * 0.9 * trans, backL * BACK);

		col = mix(col * (1.0 - mix(TINT, DIM, orb.b.w)), vec3f(1.0), MILK);

		/* the G: flat, facing the eye, in the space the front surface
		   refracts the eye into — half the path's smoke on it */
		let gh = GSCALE * R;
		var letter = 0.0;
		var lit = 0.0;

		let fuzz = qfw + BLUR * gh * haze;

		if (all(abs(t.q) < vec2f(0.44, 0.5) * gh + vec2f(2.0) + fuzz)) {
			for (var i = 0u; i < taps; i++) {
				let c = cos(coin - span * f32(i));
				let ac = max(abs(c), 0.02);
				let u = vec2f(t.q.x / select(-ac, ac, c >= 0.0), t.q.y);
				let a = clamp(0.5 - sdG(u / gh) * gh * ac / fuzz, 0.0, 1.0);

				letter += a;
				lit += a * (0.55 + 0.45 * ac);
			}

			lit /= max(letter, 1e-4);
			letter /= f32(taps);
		}

		col = mix(col, INK * lit * exp(-SMOKE * 0.5 * t.tq / R), letter);

		/* the near face's etching, on the surface: the groove's shaded wall
		   first, then the line, shaded by the key */
		let crossG = mix(1.0, CROSS, letter);
		col = mix(col, col * 0.5, frontS * (1.0 - frontL) * GROOVE * crossG);
		col = mix(col, INK * (0.7 + 0.3 * max(dot(N1, KEY), 0.0)), frontL * FRONT * crossG);

		/* the reflection: the room and the page under the ball */
		let Rv = reflect(vec3f(0.0, 0.0, -1.0), N1);
		let F = F0 + (1.0 - F0) * pow(1.0 - N1.z, FPOW);
		let hitR = pc + Rv.xy * clamp((-D - N1.z * R) / min(Rv.z, -0.05), 0.0, 0.8 * R);
		let pageR = soft(hitR) * (1.0 - shadow(hitR, R));
		col = mix(col, room(Rv, pageR), clamp(F, 0.0, 1.0));

		col = clamp(col, vec3f(0.0), vec3f(1.0));

		/* the silhouette's antialias, over the shadow */
		let cover = clamp((R - r) * dpr + 0.5, 0.0, 1.0);

		return vec4f(col * cover, 1.0 - (1.0 - cover) * (1.0 - sh));
	}
`}const XE=.42,QE=64,JE=1,sc=[2,4,8,16],ZE=16,e3=140,t3=48,Ft={frost:3.6,merge:4,dark:.16,lift:.07,warp:14,tilt:4,reach:320,near:.375,glow:220,hot:1,env:.5,power:4,thick:1,ior:1.45},Ud=t=>{if(!t)return null;const e=getComputedStyle(t).backgroundColor.match(/[\d.]+/g);return!e||e.length<3||e.length>=4&&!(+e[3]>0)?null:[+e[0]/255,+e[1]/255,+e[2]/255]},nc=12;class i3{constructor(e){this.planes=new Set,this.free=[],this.orbs=new Map,this.balls=[],this.areas=[],this.pads=[],this.regions=[],this.globals=new Float32Array(VE),this.elements=new Float32Array(Pn*an),this.gpu=null,this.mouse={x:-1e4,y:-1e4},this.target={x:-1e4,y:-1e4},this.prev=[],this.cur=[],this.ww=1,this.wh=1,this.ground=[0,0,0],this.page=[0,0,0],this.pivotAt={x:0,y:0},this.box={x0:0,y0:0,x1:0,y1:0},this.live=0,this.drawnCount=0,this.move=s=>{this.target.x<-1e3&&(this.mouse.x=s.clientX,this.mouse.y=this.wh-s.clientY),this.target.x=s.clientX,this.target.y=this.wh-s.clientY},this.changed=()=>{if(!this.live&&!this.balls.length&&!this.prev[0]&&!this.prev[1])return!1;const s=this.signature(this.cur);if(s.length!==this.prev.length)return!0;for(let n=0;n<s.length;n++)if(s[n]!==this.prev[n])return!0;return!1},this.reset=()=>{this.gpu=null},this.matcapSrc="/matcap/glass.png",this.draw=s=>{const n=this.signature(this.cur);this.prev.length=0;for(const d of n)this.prev.push(d);const r=this.core.device;if(!r||!this.live&&!this.balls.length)return;this.gpu||this.build();const o=s.backdrop;this.surfaces(o);const a=this.gpu;this.writeUniforms(),r.queue.writeBuffer(a.elements,0,this.elements);const l=this.ensureGroup(o),{areas:u,pads:c}=this;u.length=0,c.length=0,this.live&&this.frosted()&&(u.push(this.box),c.push(e3));for(const d of this.balls)u.push(d.reads),c.push(t3);u.length&&this.chain(s);const h=s.encoder.beginRenderPass({label:"glass",colorAttachments:[{view:s.view,loadOp:"load",storeOp:"store"}]});let f=u.length*a.rungs.length;this.live&&this.scissor(h,this.box,ZE)&&(h.setPipeline(a.glass),h.setBindGroup(0,l),h.draw(3),f++);for(const d of this.balls){if(!this.scissor(h,d.box,1))continue;const g=this.orbGroup(d.orb);r.queue.writeBuffer(g.buffer,0,d.data),h.setPipeline(this.orbKit().pipeline),h.setBindGroup(0,l),h.setBindGroup(1,g.group),h.draw(3),f++}h.end(),s.draws+=f},this.core=e;for(let s=an-1;s>=0;s--)this.free.push(s);window.addEventListener("pointermove",this.move,{passive:!0});const i=this;e.overlay={get active(){return i.live>0||i.balls.length>0},draw:this.draw,dirty:this.changed,reset:this.reset}}pivot(e,i){this.pivotAt.x=e,this.pivotAt.y=i}add(e){const i=this.free.pop();return i===void 0?-1:(this.planes.add(e),i)}remove(e){this.planes.delete(e)&&this.free.push(e.slot)}addOrb(e){const i=()=>({x0:0,y0:0,x1:0,y1:0});this.orbs.set(e,{orb:e,data:new Float32Array(nc),box:i(),reads:i()})}removeOrb(e){const i=this.orbs.get(e);if(!i)return;this.orbs.delete(e);const s=this.balls.indexOf(i);s>=0&&this.balls.splice(s,1);const n=this.gpu?.orbs.get(e);n&&(n.buffer.destroy(),this.gpu.orbs.delete(e))}measure(){const e=Ud(document.documentElement);e&&(this.ground=e);const i=e??Ud(document.body);i&&(this.page=i)}update(e=1){const i=Math.min(1,.12*e);this.mouse.x+=(this.target.x-this.mouse.x)*i,this.mouse.y+=(this.target.y-this.mouse.y)*i,Math.hypot(this.target.x-this.mouse.x,this.target.y-this.mouse.y)<.5&&(this.mouse.x=this.target.x,this.mouse.y=this.target.y),this.mouse.x=Math.round(this.mouse.x),this.mouse.y=Math.round(this.mouse.y);const s=this.elements;let n=0;this.box={x0:1e5,y0:1e5,x1:-1e5,y1:-1e5};for(const r of this.planes){if(r.sync(),!r.rect||!r.shown||r.on<=.001)continue;if(n>=an)break;const o=r.rect,a=n*Pn;s[a]=o.left+o.width/2,s[a+1]=this.wh-(o.top+o.height/2),s[a+2]=o.width/2,s[a+3]=o.height/2,s[a+4]=Math.min(r.radius,Math.min(o.width,o.height)/2),s[a+5]=r.on,s[a+6]=r.press,s[a+7]=0,s[a+8]=r.clear,s[a+9]=r.haze,s[a+10]=r.nested,s[a+11]=Math.min(QE,Math.min(o.width,o.height)*.5*XE),s[a+12]=r.fill[0],s[a+13]=r.fill[1],s[a+14]=r.fill[2],s[a+15]=r.fill[3],s[a+16]=r.optics,s[a+17]=r.warp,s[a+18]=0,s[a+19]=r.frost,s[a+20]=r.rotX,s[a+21]=r.rotY,s[a+22]=r.eye,s[a+23]=0,this.box.x0=Math.min(this.box.x0,o.left),this.box.y0=Math.min(this.box.y0,o.top),this.box.x1=Math.max(this.box.x1,o.left+o.width),this.box.y1=Math.max(this.box.y1,o.top+o.height),n++}for(let r=n;r<this.drawnCount;r++)this.elements[r*Pn+5]=0;this.drawnCount=n,this.live=n,this.balls.length=0;for(const r of this.orbs.values()){const o=r.orb;if(o.on<=.001||(o.sync(),!o.rect||!o.shown))continue;const a=o.rect,l=a.left+a.width/2,u=a.top+a.height/2,c=Math.min(a.width,a.height)/2,h=c*qE,f=c*tv,{data:d,box:g,reads:p}=r;d[0]=l,d[1]=this.wh-u,d[2]=c,d[3]=this.core.dpr,d[4]=o.on,d[5]=o.press,d[6]=o.spin,d[7]=o.dim,d[8]=o.coin,d[9]=o.shutter,g.x0=l-c-2,g.y0=u-c-2,g.x1=l+h,g.y1=u+h,p.x0=l-f,p.y0=u-f,p.x1=l+f,p.y1=u+f,this.balls.push(r)}}signature(e){let i=0;e[i++]=this.live,e[i++]=this.balls.length,e[i++]=this.mouse.x,e[i++]=this.mouse.y;for(const s of this.balls)for(let n=0;n<nc;n++)e[i++]=s.data[n];for(let s=0;s<this.live;s++){const n=s*Pn;e[i++]=this.elements[n],e[i++]=this.elements[n+1],e[i++]=this.elements[n+2],e[i++]=this.elements[n+3],e[i++]=this.elements[n+4],e[i++]=this.elements[n+5],e[i++]=this.elements[n+6],e[i++]=this.elements[n+20],e[i++]=this.elements[n+21]}return e.length=i,e}warm(){!this.gpu&&this.core.device&&this.build()}build(){const e=this.core.device,i=e.createBindGroupLayout({label:"glass",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:5,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]}),s=e.createBindGroupLayout({label:"glass blur",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]}),n=e.createShaderModule({label:"glass",code:GE}),r=e.createShaderModule({label:"glass blur",code:HE}),o=this.core.format,a=e.createRenderPipeline({label:"glass",layout:e.createPipelineLayout({bindGroupLayouts:[i]}),vertex:{module:n,entryPoint:"vs"},fragment:{module:n,entryPoint:"fsGlass",targets:[{format:o,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),l=e.createRenderPipeline({label:"glass blur",layout:e.createPipelineLayout({bindGroupLayouts:[s]}),vertex:{module:r,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:o}]},primitive:{topology:"triangle-list"}}),u=e.createTexture({label:"glass matcap",size:[1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});e.queue.writeTexture({texture:u},new Uint8Array([0,0,0,255]),{},[1,1]),this.gpu={glass:a,blur:l,fieldLayout:i,blurLayout:s,orb:null,orbs:new Map,globals:e.createBuffer({label:"glass globals",size:256,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),elements:e.createBuffer({label:"glass elements",size:Pn*an*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),sampler:e.createSampler({minFilter:"linear",magFilter:"linear",mipmapFilter:"linear"}),rungs:[],matcap:u,matcapView:u.createView(),group:null,scene:null,w:0,h:0},this.loadMatcap()}orbKit(){const e=this.gpu;if(e.orb)return e.orb;const i=this.core.device,s=i.createBindGroupLayout({label:"glass orb",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]}),n=i.createShaderModule({label:"glass orb",code:YE()}),r=i.createRenderPipeline({label:"glass orb",layout:i.createPipelineLayout({bindGroupLayouts:[e.fieldLayout,s]}),vertex:{module:n,entryPoint:"vs"},fragment:{module:n,entryPoint:"fsOrb",targets:[{format:this.core.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}});return e.orb={pipeline:r,layout:s,letter:this.bakeLetter()},e.orb}bakeLetter(){const e=this.core.device,i="r16float",s=e.createTexture({label:"glass orb letter",size:[Bd,Bd],format:i,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),n=e.createShaderModule({label:"glass orb letter",code:KE()}),r=e.createRenderPipeline({label:"glass orb letter",layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:i}]},primitive:{topology:"triangle-list"}}),o=e.createCommandEncoder(),a=o.beginRenderPass({colorAttachments:[{view:s.createView(),loadOp:"clear",clearValue:{r:1,g:0,b:0,a:1},storeOp:"store"}]});return a.setPipeline(r),a.draw(3),a.end(),e.queue.submit([o.finish()]),s}async loadMatcap(){const e=this.core.device;if(e)try{const i=await fetch(this.matcapSrc);if(!i.ok)return;const s=await createImageBitmap(await i.blob(),{premultiplyAlpha:"none"}),n=this.gpu;if(!n||this.core.device!==e)return;n.matcap.destroy(),n.matcap=e.createTexture({label:"glass matcap",size:[s.width,s.height],format:"rgba8unorm",mipLevelCount:In.count(s.width,s.height),usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),e.queue.copyExternalImageToTexture({source:s},{texture:n.matcap},[s.width,s.height]),new In(e).generate(n.matcap),n.matcapView=n.matcap.createView(),n.group=null,s.close(),this.core.wake()}catch{}}surfaces(e){const i=this.core.device,s=this.gpu,n=this.core.canvas.width,r=this.core.canvas.height;if(!(s.w===n&&s.h===r&&s.scene===e&&s.rungs.length)){if(s.w!==n||s.h!==r||!s.rungs.length){for(const o of s.rungs)o.tex.destroy(),o.uniforms.destroy();s.rungs=sc.map((o,a)=>{const l=Math.max(1,Math.round(n/o)),u=Math.max(1,Math.round(r/o)),c=i.createTexture({label:`glass blur ${o}`,size:[l,u],format:this.core.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),h=a===0?{width:n,height:r}:{width:Math.max(1,Math.round(n/sc[a-1])),height:Math.max(1,Math.round(r/sc[a-1]))},f=i.createBuffer({label:`glass blur u ${o}`,size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return i.queue.writeBuffer(f,0,new Float32Array([1/h.width,1/h.height,1.25,0])),{tex:c,view:c.createView(),width:l,height:u,uniforms:f,group:null}})}s.rungs.forEach((o,a)=>{o.group=i.createBindGroup({layout:s.blurLayout,entries:[{binding:0,resource:{buffer:o.uniforms}},{binding:1,resource:s.sampler},{binding:2,resource:a===0?e:s.rungs[a-1].view}]})}),s.group=null,s.scene=e,s.w=n,s.h=r}}ensureGroup(e){const i=this.gpu;return i.group||(i.group=this.core.device.createBindGroup({label:"glass",layout:i.fieldLayout,entries:[{binding:0,resource:{buffer:i.globals,size:256}},{binding:1,resource:{buffer:i.elements}},{binding:2,resource:i.sampler},{binding:3,resource:e},{binding:4,resource:i.rungs[0].view},{binding:5,resource:i.rungs[1].view},{binding:6,resource:i.rungs[2].view},{binding:7,resource:i.rungs[3].view},{binding:8,resource:i.matcapView}]})),i.group}orbGroup(e){const i=this.gpu,s=i.orbs.get(e);if(s)return s;const n=this.orbKit(),r=this.core.device,o=r.createBuffer({label:"glass orb",size:nc*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),a=r.createBindGroup({label:"glass orb",layout:n.layout,entries:[{binding:0,resource:{buffer:o}},{binding:1,resource:n.letter.createView()}]}),l={buffer:o,group:a};return i.orbs.set(e,l),l}frosted(){const e=this.elements;for(let i=0;i<this.live;i++){const s=i*Pn;if(e[s+6]>0||e[s+9]>0&&e[s+19]*Ft.frost>0)return!0}return!1}chain(e){const i=this.gpu,s=this.core.dpr,n=i.w,r=i.h,{areas:o,pads:a,regions:l}=this;l.length=0;for(let u=0;u<o.length;u++){const c=o[u],h=a[u],f=Math.max(0,c.x0-h),d=Math.max(0,c.y0-h),g=Math.min(this.ww,c.x1+h),p=Math.min(this.wh,c.y1+h);if(g<=f||p<=d)continue;const _=Math.floor(f*s),w=Math.floor(d*s),y=Math.max(1,Math.min(n-_,Math.ceil((g-f)*s))),m=Math.max(1,Math.min(r-w,Math.ceil((p-d)*s)));l.push(_,w,y,m)}if(l.length)for(const u of i.rungs){const c=u.width/n,h=e.encoder.beginRenderPass({label:"glass blur",colorAttachments:[{view:u.view,loadOp:"load",storeOp:"store"}]});h.setPipeline(i.blur),h.setBindGroup(0,u.group);for(let f=0;f<l.length;f+=4){const d=l[f],g=l[f+1],p=l[f+2],_=l[f+3],w=Math.max(0,Math.min(u.width-1,Math.floor(d*c))),y=Math.max(0,Math.min(u.height-1,Math.floor(g*c))),m=Math.max(1,Math.min(u.width-w,Math.ceil(p*c))),b=Math.max(1,Math.min(u.height-y,Math.ceil(_*c)));h.setScissorRect(w,y,m,b),h.draw(3)}h.end()}}scissor(e,i,s){const n=this.core.dpr,r=this.core.canvas.width,o=this.core.canvas.height,a=Math.max(0,Math.min(r,Math.floor((i.x0-s)*n))),l=Math.max(0,Math.min(o,Math.floor((i.y0-s)*n))),u=Math.max(0,Math.min(r,Math.ceil((i.x1+s)*n))),c=Math.max(0,Math.min(o,Math.ceil((i.y1+s)*n)));return u<=a||c<=l?!1:(e.setScissorRect(a,l,u-a,c-l),!0)}writeUniforms(){const e=this.gpu,i=this.globals;i[0]=this.ww,i[1]=this.wh,i[2]=this.mouse.x,i[3]=this.mouse.y,i[4]=this.ground[0],i[5]=this.ground[1],i[6]=this.ground[2],i[7]=this.live,i[8]=Ft.merge,i[9]=JE,i[10]=Ft.frost,i[11]=Ft.dark,i[12]=Ft.lift,i[13]=Ft.warp,i[14]=Ft.tilt,i[15]=Ft.reach,i[16]=Ft.near,i[17]=Ft.glow,i[18]=Ft.hot,i[19]=Ft.env,i[20]=Ft.power,i[21]=Ft.thick,i[22]=this.pivotAt.x,i[23]=this.wh-this.pivotAt.y,i[24]=Ft.ior,i[25]=0,i[26]=0,i[27]=0,i[28]=this.page[0],i[29]=this.page[1],i[30]=this.page[2],i[31]=0,this.core.device.queue.writeBuffer(e.globals,0,i)}resize(e,i){this.ww=e,this.wh=i;for(const s of this.planes)s.stale(),s.measure();for(const s of this.orbs.keys())s.stale();this.measure()}dispose(){window.removeEventListener("pointermove",this.move),this.core.overlay?.draw===this.draw&&(this.core.overlay=null);const e=this.gpu;if(e){for(const i of e.rungs)i.tex.destroy(),i.uniforms.destroy();for(const i of e.orbs.values())i.buffer.destroy();e.orb?.letter.destroy(),e.globals.destroy(),e.elements.destroy(),e.matcap.destroy(),this.gpu=null}}}const iv=1.25,sv=.1,du=iv+sv*13,os=32,s3=2.5,n3=.45,r3=.28,ln=Ke.inks.length,o3=`
	struct U {
		progress: f32, /* the master clock, LINEAR 0..1 over the whole run */
		mode: f32,     /* 0 the column cascade, 1 the ink */
		aspect: f32,   /* w / h, so the noise cells are square on screen */
		seed: f32,     /* a fresh field every run — see the ink's note */
		/* snappy, sampled — lut[i/4][i%4] */
		lut: array<vec4f, ${os/4}>,
		/* the site's palette, the fluid's own stops — see CURVE.inks */
		inks: array<vec4f, ${ln}>,
	}

	@group(0) @binding(0) var<uniform> u: U;
	@group(0) @binding(1) var lin: sampler;
	@group(0) @binding(2) var pageA: texture_2d<f32>; /* the leaver */
	@group(0) @binding(3) var pageB: texture_2d<f32>; /* the enterer */

	struct VOut {
		@builtin(position) pos: vec4f,
		@location(0) uv: vec2f,
	}

	@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
		let uv = vec2f(f32((i << 1u) & 2u), f32(i & 2u));

		var o: VOut;
		o.pos = vec4f(uv * vec2f(2.0, -2.0) + vec2f(-1.0, 1.0), 0.0, 1.0);
		o.uv = uv;
		return o;
	}

	/* the site's grid — the transition steps on the same columns the
	   layout does */
	const COLS = 14.0;
	/* per-column run and stagger as shares of the master clock */
	const DUR = ${(iv/du).toFixed(6)};
	const STEP = ${(sv/du).toFixed(6)};
	/* the glass band riding each edge: half-height and bend, uv */
	const BAND = 0.06;
	const BEND = 0.055;

	/* the ink's own displacement, as a share of the height — see AMP */
	const AMP = ${n3.toFixed(2)};
	/* how much of the run the front's own start times are spread over */
	const SPREAD = ${r3.toFixed(2)};

	/*
	 * The house noise, unchanged from the GLSL it was ported from: 2D value
	 * noise off one fract(sin(dot)) hash. There is exactly one of these in
	 * the whole body of work and this is it, constants included.
	 */
	fn hash2(p: vec2f) -> f32 {
		return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
	}

	fn vnoise(p: vec2f) -> f32 {
		let i = floor(p);
		let f = fract(p);
		let u = f * f * (3.0 - 2.0 * f);

		return mix(
			mix(hash2(i), hash2(i + vec2f(1.0, 0.0)), u.x),
			mix(hash2(i + vec2f(0.0, 1.0)), hash2(i + vec2f(1.0, 1.0)), u.x),
			u.y,
		);
	}

	/*
	 * The site's colour, walked.
	 *
	 * The same four stops the fluid's ink cycles through and the same eased
	 * leg between them (Field's inkClock does it in JS for the one live
	 * colour every other shader is handed; here the whole ramp is wanted at
	 * once, along the length of an edge, so it is walked per fragment).
	 */
	fn palette(x: f32) -> vec3f {
		let f = fract(x) * ${ln}.0;
		let i = u32(f) % ${ln}u;
		let j = (i + 1u) % ${ln}u;
		let k = fract(f);

		return mix(u.inks[i].rgb, u.inks[j].rgb, k * k * (3.0 - 2.0 * k));
	}

	fn snappy(x: f32) -> f32 {
		let f = clamp(x, 0.0, 1.0) * ${os-1}.0;
		let i = u32(f);
		let j = min(i + 1u, ${os-1}u);
		let a = u.lut[i / 4u][i % 4u];
		let b = u.lut[j / 4u][j % 4u];
		return mix(a, b, fract(f));
	}

	@fragment fn fs(in: VOut) -> @location(0) vec4f {
		/* a pixel and a half of antialias, off the target's own height —
		   fwidth would do it too, but this holds across the branch */
		let aa = 1.5 / f32(textureDimensions(pageA).y);

		if (u.mode > 0.5) {
			/*
			 * ── The ink ──
			 *
			 * A front floods up from the foot of the screen, and it is not a
			 * line. The height it has reached at a pixel is DISPLACED by two
			 * unrolled octaves of value noise, so where the field runs low
			 * the ink races ahead into a finger and where it runs high the
			 * old page holds on as an island. That is the whole mask: no
			 * per-column choreography, no seam, one uneven thing spreading.
			 *
			 * The field is stretched upward (five cells across the width
			 * against two down the height) so the fingers wick rather than
			 * cloud, and it DRIFTS with progress — which is what makes the
			 * front crawl. A field that only translated would read as a
			 * torn sheet of paper being pulled up; a field that moves
			 * through itself reads as liquid finding its way.
			 *
			 * The displacement is envelope'd by sin(pi t): most unruly in
			 * the middle of the run, calm at both ends, so the expansion by
			 * AMP is enough to guarantee the mask empties and fills. It
			 * never reaches zero, because a front that straightened out at
			 * the end would look like it was healing.
			 */
			let up = 1.0 - in.uv.y;
			let q = in.uv * vec2f(u.aspect, 1.0);

			/*
			 * ── The spread ──
			 *
			 * Every point on the front runs on its OWN clock, offset by a
			 * third octave of the noise: where the lead is low the ink starts
			 * at once, where it is high it does not begin to move until
			 * SPREAD of the way through. That is the difference between a
			 * ragged edge and a spreading one — displacing the front's HEIGHT
			 * (below) bends one line, staggering its TIME lets pools run out
			 * ahead while whole stretches have not started.
			 *
			 * Big lobes deliberately: this is the shape you read at a glance,
			 * where the two octaves under it are the detail you only notice
			 * on the edge itself.
			 */
			let seed = vec2f(u.seed, u.seed * 0.73);
			let lead = vnoise(q * vec2f(3.0, 1.2) + seed + 11.3);
			let local = clamp((u.progress - lead * SPREAD) / (1.0 - SPREAD), 0.0, 1.0);

			/*
			 * Smoothstep, NOT the house snappy.
			 *
			 * Snappy is front-loaded — it is past half its travel in the
			 * first fifth of its run — which is right for a surface arriving
			 * and wrong for something soaking through paper: at two and a
			 * half seconds the front still crossed the screen in well under
			 * one and then crept. Soft at both ends and steady through the
			 * middle is what reads as a crawl.
			 */
			let t = local * local * (3.0 - 2.0 * local);
			let e = t * (1.0 + AMP * 2.0) - AMP;

			/*
			 * Four octaves, and the weight is deliberately BOTTOM-heavy: the
			 * first two carry the shape and the last two are grain. Ink on
			 * paper is not a smooth curve with a wobble in it — the front is
			 * fibrous at the scale of a few pixels, and that fine noise is
			 * most of what reads as ink rather than as liquid.
			 */
			let n1 = vnoise(q * vec2f(4.0, 1.6) + seed + vec2f(0.0, t * 0.9));
			let n2 = vnoise(q * vec2f(14.0, 5.5) + seed + vec2f(3.7, t * 1.4));
			let n3 = vnoise(q * vec2f(46.0, 18.0) + seed + vec2f(9.1, t * 2.2));
			let n4 = vnoise(q * vec2f(130.0, 52.0) + seed + vec2f(21.7, t * 3.1));

			/* zero-mean, so the front's AVERAGE height is still e */
			let rough = (n1 - 0.5) * 0.40
				+ (n2 - 0.5) * 0.22
				+ (n3 - 0.5) * 0.13
				+ (n4 - 0.5) * 0.07;

			let ramp = 0.35 + 0.65 * sin(t * 3.14159);

			/* spatter: a scatter of specks landing just ahead of the front,
			   the same shape as the embers in the burn shader. Fine and
			   dense, so it reads as the ink taking rather than as dots. */
			let speck = smoothstep(0.55, 0.92, vnoise(q * vec2f(110.0, 42.0) + seed + 5.3));

			let reach = e + rough * ramp + speck * 0.02 - up;
			let ink = smoothstep(-aa, aa, reach);

			/* level 0 by name, not by derivative: neither target is
			   mipmapped, and sampling inside a branch is one less thing for
			   the uniformity analysis to have an opinion about */
			let a0 = textureSampleLevel(pageA, lin, in.uv, 0.0).rgb;
			let b0 = textureSampleLevel(pageB, lin, in.uv, 0.0).rgb;

			/* the leaver recedes as it goes, so a black page arriving over a
			   black page still reads as two pages */
			let a1 = mix(a0, vec3f(0.5), t * 0.24);

			/*
			 * The wet line.
			 *
			 * A hard white core one pixel wide and a wide coloured halo
			 * around it, so the front reads as light on liquid rather than
			 * as a stroke. The halo takes the site's own palette — the
			 * green, red, blue and purple the fluid cycles — and the ramp
			 * runs BOTH along the edge and with progress, so no two moments
			 * of the crawl are the same colour and the whole front shifts as
			 * it climbs. It is torn wherever the front is, for free: the
			 * glow is a function of the same displaced distance.
			 */
			let core = exp(-(reach * reach) / (0.003 * 0.003 + aa * aa * 4.0));
			let halo = exp(-(reach * reach) / (0.02 * 0.02));
			let hue = palette(in.uv.x * 0.8 + t * 0.6);

			return vec4f(mix(a1, b0, ink) + hue * halo * 0.35 + vec3f(core * 0.25), 1.0);
		}

		/*
		 * The boundary, stepped: each of the site's 14 columns runs its own
		 * dead-straight edge bottom → top, starting a beat after its left
		 * neighbour and easing on the house snappy. No noise, no wobble —
		 * the layout's own discipline. What makes it unfakeable is the
		 * material: a refractive band rides every edge, and the LIVE pixels
		 * of both pages stretch through it with a breath of dispersion —
		 * the same glass the rain is made of, sweeping the page.
		 */
		let col = floor(in.uv.x * COLS);
		let t = snappy((u.progress - col * STEP) / DUR);

		let edge = 1.0 - t * (1.0 + BAND * 2.0) + BAND;

		/* signed distance to this column's seam: negative above (leaver) */
		let d = in.uv.y - edge;

		/*
		 * The lens: a cylinder of glass lying along the seam. Inside the
		 * band, sampling is displaced toward the seam by a half-sine — both
		 * pages' content compresses into it and releases — with the red and
		 * blue rays bending a little differently.
		 */
		let g = clamp(d / BAND, -1.0, 1.0);
		let lens = sin(g * 3.14159) * BEND;

		/* the pages ride their columns: the leaver follows its edge up a
		   touch, the enterer settles up into place from below */
		let aY = in.uv.y + t * 0.18 + lens;
		let bY = in.uv.y - (1.0 - t) * 0.10 + lens;

		/* every page carries its own GL ground plane, so both sides are
		   opaque by construction — live targets and frozen captures alike */
		let ar = textureSample(pageA, lin, vec2f(in.uv.x, aY + lens * 0.18)).rgb;
		let ag = textureSample(pageA, lin, vec2f(in.uv.x, aY)).rgb;
		let ab2 = textureSample(pageA, lin, vec2f(in.uv.x, aY - lens * 0.18)).rgb;

		let br = textureSample(pageB, lin, vec2f(in.uv.x, bY + lens * 0.18)).rgb;
		let bg = textureSample(pageB, lin, vec2f(in.uv.x, bY)).rgb;
		let bb = textureSample(pageB, lin, vec2f(in.uv.x, bY - lens * 0.18)).rgb;

		var a = vec3f(ar.r, ag.g, ab2.b);
		let b = vec3f(br.r, bg.g, bb.b);

		/*
		 * The leaver recedes tonally as its column exits — toward the mid
		 * grey, which reads as a lift off a dark page and a press off a
		 * light one with a single target — so same-ground navigations
		 * still cut as two distinct pages at every seam.
		 */
		a = mix(a, vec3f(0.5), t * 0.24);

		/* the seam itself: a hairline of light on the glass, and a soft
		   shadow the leaver casts down onto the enterer */
		let hold = 1.0 - smoothstep(-aa, aa, d);

		let glint = exp(-(d * d) / (0.0008 * 0.0008 + (aa * aa) * 4.0)) * 0.35;
		/* the shadow breathes with the column's own run, not the master's */
		let drop = select(0.0, exp(-d / (BAND * 0.5)) * 0.25, d > 0.0) * (1.0 - abs(t * 2.0 - 1.0));

		let out = mix(b * (1.0 - drop), a, hold) + vec3f(glint * hold);

		/* both targets cleared opaque to their own grounds — the composite
		   owns every pixel */
		return vec4f(out, 1.0);
	}
`;class a3{constructor(e,i){this.progress=0,this.armed=!1,this.ink=!1,this.seed=0,this.running=null,this.release=null,this.gpu=null,this.frozen=!1,this.deadline=0,this.reset=()=>{z.killTweensOf(this),this.gpu=null,this.armed=!1,this.frozen=!1,this.running=null,this.core.removePre(this.pre),this.core.remove(this.draw),this.planes.endSplit(),this.release?.(),this.release=null},this.pre=s=>{if(!this.core.device)return;const n=this.ensureGpu(),r=(o,a,l)=>{const u=s.beginRenderPass({label:`wipe page ${l}`,colorAttachments:[{view:a??o,resolveTarget:a?o:void 0,loadOp:"clear",clearValue:{r:.04,g:.04,b:.04,a:1},storeOp:"store"}]});this.planes.drawQuadsInto(u,l),this.planes.drawTextInto(u,l),u.end()};this.frozen||r(n.aView,n.aMsView,1),r(n.bView,n.bMsView,this.frozen?0:2)},this.lut=null,this.draw=s=>{const n=this.core.device,r=this.gpu;if(!n||!r)return;const o=this.frozen?this.core.captured:r.aView;if(!o)return;r.boundA!==o&&(r.group=n.createBindGroup({layout:r.layout,entries:[{binding:0,resource:{buffer:r.uniforms}},{binding:1,resource:r.sampler},{binding:2,resource:o},{binding:3,resource:r.bView}]}),r.boundA=o);const a=new Float32Array(4+os+ln*4);a[0]=this.progress,a[1]=this.ink?1:0,a[2]=this.core.canvas.width/Math.max(1,this.core.canvas.height),a[3]=this.seed,a.set(this.ease(),4);for(let l=0;l<ln;l++){const u=Ke.inks[l];a.set([u[0],u[1],u[2],0],4+os+l*4)}n.queue.writeBuffer(r.uniforms,0,a),s.pass.setPipeline(r.pipeline),s.pass.setBindGroup(0,r.group),s.pass.draw(3),s.draws++},this.core=e,this.planes=i}get active(){return this.armed}begin(e,i){this.release?.(),this.release=i,z.killTweensOf(this),this.progress=0,this.planes.split(e),this.armed||(this.armed=!0,this.core.addPre(this.pre),this.core.add(this.draw,{order:po.wipe,dirty:()=>this.armed,reset:this.reset})),clearTimeout(this.deadline),this.deadline=window.setTimeout(()=>this.finish(),4e3)}enter(e){return this.armed?(clearTimeout(this.deadline),this.frozen||this.planes.assignNew(e),this.start()):Promise.resolve()}start(){return this.running?this.running:(this.running=new Promise(e=>{z.killTweensOf(this),z.to(this,{progress:1,duration:this.ink?s3:du,ease:"none",onComplete:()=>{this.finish(),e()}})}),this.running)}freezeLeave(e){return new Promise(i=>{this.release?.(),this.release=null,z.killTweensOf(this),this.planes.endSplit(),this.frozen=!0,this.seed=Math.random()*997,this.core.captureNext(()=>{this.progress=0,this.armed||(this.armed=!0,this.core.addPre(this.pre),this.core.add(this.draw,{order:po.wipe,dirty:()=>this.armed,reset:this.reset})),this.start(),i()}),this.core.wake(),clearTimeout(this.deadline),this.deadline=window.setTimeout(()=>this.finish(),4e3)})}finish(){this.armed=!1,this.frozen=!1,this.running=null,this.core.removePre(this.pre),this.core.remove(this.draw),this.planes.endSplit(),this.release?.(),this.release=null,this.gpu?.a.destroy(),this.gpu?.b.destroy(),this.gpu?.aMs?.destroy(),this.gpu?.bMs?.destroy(),this.gpu=null}ensureGpu(){const e=this.core.device,i=this.core.canvas.width,s=this.core.canvas.height;if(this.gpu&&this.gpu.w===i&&this.gpu.h===s)return this.gpu;this.gpu?.a.destroy(),this.gpu?.b.destroy(),this.gpu?.aMs?.destroy(),this.gpu?.bMs?.destroy();const n=e.createShaderModule({label:"wipe",code:o3}),r=this.gpu?.layout??e.createBindGroupLayout({label:"wipe",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]}),o=this.gpu?.pipeline??e.createRenderPipeline({label:"wipe",layout:e.createPipelineLayout({bindGroupLayouts:[r]}),vertex:{module:n,entryPoint:"vs"},fragment:{module:n,entryPoint:"fs",targets:[{format:this.core.format}]},primitive:{topology:"triangle-list"},multisample:{count:Ns}}),a=m=>e.createTexture({label:`wipe ${m}`,size:[i,s],format:this.core.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),l=m=>Ns>1?e.createTexture({label:`wipe ${m} msaa`,size:[i,s],format:this.core.format,sampleCount:Ns,usage:GPUTextureUsage.RENDER_ATTACHMENT}):null,u=a("a"),c=a("b"),h=l("a"),f=l("b"),d=u.createView(),g=c.createView(),p=h?.createView()??null,_=f?.createView()??null,w=this.gpu?.uniforms??e.createBuffer({label:"wipe u",size:16+os*4+ln*16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),y=this.gpu?.sampler??e.createSampler({minFilter:"linear",magFilter:"linear"});return this.gpu={pipeline:o,uniforms:w,sampler:y,layout:r,a:u,b:c,aView:d,bView:g,aMs:h,bMs:f,aMsView:p,bMsView:_,group:e.createBindGroup({layout:r,entries:[{binding:0,resource:{buffer:w}},{binding:1,resource:y},{binding:2,resource:d},{binding:3,resource:g}]}),boundA:d,w:i,h:s},this.gpu}ease(){if(this.lut)return this.lut;const e=z.parseEase("snappy")??(i=>i*i*(3-2*i));this.lut=new Float32Array(os);for(let i=0;i<os;i++)this.lut[i]=e(i/(os-1));return this.lut}}let Uo=null;const l3=t=>(Uo??=document.createElement("span"),Uo.style.color="",Uo.style.color=t.trim(),Uo.style.color.match(/[\d.]+/g));class c3{constructor({core:e,el:i,pass:s}){this.dying=!1,this.rect=null,this.shown=!1,this.on=0,this.press=0,this.radius=0,this.clear=0,this.fill=[0,0,0,0],this.haze=1,this.nested=0,this.optics=1,this.warp=1,this.frost=1,this.rotX=0,this.rotY=0,this.eye=1600,this.radiusPct=0,this.core=e,this.el=i,this.pass=s,this.box=new hl(i),this.slot=s.add(this);const n=(r,o)=>{const a=parseFloat(i.getAttribute(r)??"");return Number.isNaN(a)?o:a};this.haze=i.hasAttribute("data-glass-clear")?0:1,this.clear=i.hasAttribute("data-glass-clear")?1:0,this.nested=i.parentElement?.closest("[data-glass]")?1:0,this.optics=n("data-glass-lens",1),this.warp=n("data-glass-warp",1),this.frost=n("data-glass-frost",1),this.measure()}measure(){if(!this.el.isConnected)return;const e=getComputedStyle(this.el),i=e.borderRadius;this.radiusPct=i.endsWith("%")?parseFloat(i)/100:0,this.radius=this.radiusPct?0:parseFloat(i)||0;const s=l3(e.getPropertyValue("--glass-fill"));s&&s.length>=3?this.fill=[+s[0]/255,+s[1]/255,+s[2]/255,s.length>3?+s[3]:1]:this.fill=[0,0,0,0]}stale(){this.box.stale()}sync(){if(this.dying||!this.el.isConnected||this.slot<0)return;const e=this.box.read();this.rect={left:e.left,top:e.top,width:e.width,height:e.height},this.shown=this.core.onScreen(this.rect),this.radiusPct&&(this.radius=this.radiusPct*Math.min(this.rect.width,this.rect.height))}pressed(e){z.to(this,{press:e?1:0,duration:e?.16:.5,ease:e?"power2.out":"elastic.out(1, 0.55)",overwrite:"auto"})}show(e,i=.35){z.to(this,{on:e?1:0,duration:i,ease:"power1.out",overwrite:"auto"})}dispose(){z.killTweensOf(this),this.dying=!0,this.pass.remove(this)}}class u3{constructor({core:e,el:i,pass:s}){this.dying=!1,this.rect=null,this.shown=!1,this.on=0,this.press=0,this.spin=0,this.dim=0,this.coin=0,this.shutter=0,this.core=e,this.el=i,this.pass=s,this.box=new hl(i),s.addOrb(this)}stale(){this.box.stale()}sync(){this.dying||!this.el.isConnected||(this.rect=this.box.read(),this.shown=this.core.onScreen(this.rect))}pressed(e){z.to(this,{press:e?1:0,duration:e?.16:.5,ease:e?"power2.out":"elastic.out(1, 0.55)",overwrite:"auto"})}dispose(){z.killTweensOf(this),this.dying=!0,this.pass.removeOrb(this)}}const Vd=39,ft=wi.wall;class h3{constructor(e,i){this.flightCalls=new Map,this.lent=new WeakSet,this.glides=new Map,this.flightTop=Vd,this.shadows=new Set,this.shadeOn=!0,this.core=e,this.planes=i}unglide(e){this.flightCalls.get(e)?.call.kill(),this.flightCalls.delete(e);const i=this.glides.get(e);this.glides.delete(e),i&&(i.fallback.kill(),i.resident&&(z.killTweensOf(i.resident.u,"alpha"),z.to(i.resident.u,{alpha:1,duration:ft.revive,ease:"power1.out"}))),e.recall()}giveBack(e){this.lent.delete(e)&&(z.killTweensOf(e.u,"radius"),e.measure())}flier(e){for(const[i,s]of this.flightCalls)if(s.to===e)return i;return this.planes.byEl(e)}launchOrder(){return[...this.planes.planes.values()].some(i=>i instanceof vt&&i.flying)||(this.flightTop=Vd),Math.max(1,this.flightTop--)}crew(e){const i=e.map(([r,o])=>({from:r,to:o,plane:this.flier(r)}));for(const{plane:r}of i)r&&(this.flightCalls.get(r)?.call.kill(),this.flightCalls.delete(r));const s=window.innerWidth/2,n=window.innerHeight/2;return i.map(({from:r,to:o,plane:a})=>{const l=r.getBoundingClientRect();return{from:r,to:o,plane:a,d:Math.hypot(l.left+l.width/2-s,l.top+l.height/2-n)}}).sort((r,o)=>r.d-o.d)}fly(e,i=ft.stagger){this.crew(e).forEach(({to:s,plane:n},r)=>{!n||!s||this.flightCalls.set(n,{to:s,call:z.delayedCall(r*i,()=>{this.flightCalls.delete(n),n.flight&&(n.flight.r.value=n.u.radius),n.attach(s,this.planes.field.holds(s)),n.order=this.launchOrder()})})})}clusterAt(e,i,s){const n=this.core.surface,[r,o,a]=[n[0],n[1],Math.max(n[2],1)],l=n[3],u=(n[5]||0)/a;let c=null,h=0;for(const f of e){const d=f.getBoundingClientRect(),g=(d.left+d.width/2-r)/a+l,p=u>.001?Math.round(g/u):0,_=(R,S)=>{const P=(R-r)/a+l-p*u;return r+a*Math.cos(S)*Math.sin(P)},w=(d.top+d.height/2-o)/a,y=Math.cos(w)*Math.cos(g-p*u);if(y<.1)continue;const m=_(d.left,w),b=_(d.right,w),v=o+a*Math.sin((d.top-o)/a),x=o+a*Math.sin((d.bottom-o)/a);i>=Math.min(m,b)-4&&i<=Math.max(m,b)+4&&s>=Math.min(v,x)-4&&s<=Math.max(v,x)+4&&y>h&&(h=y,c=f)}return c}aimAt(e,i=!1){const s=this.planes.field;if(s){if(e&&(s.aim={left:e.left,top:e.top,width:e.width,height:e.height}),z.killTweensOf(s,"aimT,outline"),i){s.aimT=e?1:0,s.outline=e?1:0;return}s.outline>0&&z.to(s,{outline:0,duration:.35,ease:"power1.out"}),z.to(s,{aimT:e?1:0,duration:ft.aim,ease:"snappy",onComplete:()=>{e&&z.to(s,{outline:1,duration:.35,ease:"power1.out"})}})}}miniature(e,i=0){const s=this.planes.field;s&&(z.killTweensOf(s,"mini"),i?z.to(s,{mini:e,duration:i,ease:"snappy"}):s.mini=e)}opacity(e){const i=this.planes.field;i&&(i.opacity=e)}freeze(e){const i=this.planes.field;i&&(i.still=e)}hush(e,i=0){const s=this.planes.field;s&&(z.killTweensOf(s,"hush"),i?z.to(s,{hush:e,duration:i,ease:"power1.out"}):s.hush=e)}spin(e,i=0){const s=this.planes.field;s&&(z.killTweensOf(s,"boost"),i?z.to(s,{boost:e,duration:i,ease:"snappy"}):s.boost=e)}tint(e,i=0,s,n){const r=this.planes.field;r&&(s!==void 0&&(r.tintSize=s),n!==void 0&&(r.tintRate=n),z.killTweensOf(r,"tint"),i?z.to(r,{tint:e,duration:i,ease:"power1.out"}):r.tint=e)}aimBox(e,i=1){const s=this.planes.field;s&&(s.aim={left:e.left,top:e.top,width:e.width,height:e.height},s.aimT=i)}ball(e,i,s){const n=s/(Math.SQRT2*Ke.radius);return{left:e-n/2,top:i-Ke.crest*n,width:n,height:n}}get around(){return this.planes.field?.around}get hidden(){return this.planes.surfaceDim<.5}aim(e){const i=this.planes.field,s=e.getBoundingClientRect(),n=i.aimTarget(s.left+s.width/2);i.snapTurn(n)}dim(e,i=.35){z.killTweensOf(this.planes,"surfaceDim"),z.to(this.planes,{surfaceDim:e,duration:i,ease:"power1.out"})}covered(e){this.planes.covered=e,this.planes.field.covered=e}reach(e){this.planes.field&&(this.planes.field.reach=Math.max(0,e))}moved(e,i=0){this.planes.field?.moved(e,i)}get slide(){return this.planes.field?.slide??0}shadow(e){for(const i of this.shadows)i.el?.isConnected||this.shadows.delete(i);this.shadows.add(e),e.u.alpha=this.shadeOn?1:0}shade(e,i=!1){this.shadeOn=e;for(const s of this.shadows){if(z.killTweensOf(s.u,"alpha"),i){s.u.alpha=e?1:0;continue}z.to(s.u,{alpha:e?1:0,duration:ft.surface.dur,delay:e?ft.surface.back:ft.surface.out,ease:"power1.out"})}}lift(e){const i=this.planes.field;z.killTweensOf(this.planes),z.killTweensOf(i,"travel"),i.spread=0,i.rawClock=1,e?(i.focusX=window.innerWidth/2,i.focusY=window.innerHeight/2,i.zoomT=ft.lift.zoom,i.panXT=0,i.panYT=0,i.flatAmt=0,i.dir=1,z.to(i,{travel:1,duration:ft.lift.dur,ease:"snappy"}),z.to(this.planes,{surfaceDim:0,duration:ft.surface.dur,delay:ft.surface.out,ease:"power1.out"})):(i.dir=0,z.to(i,{travel:0,duration:ft.lift.dur,ease:"snappy"}),z.to(this.planes,{surfaceDim:1,duration:ft.surface.dur,delay:ft.surface.back,ease:"power1.out"}))}flatten(){const e=this.planes.field;z.killTweensOf(this.planes),z.killTweensOf(e,"travel"),e.travel=1,e.dir=1,e.flatAmt=1,e.zoomT=1,e.panXT=0,e.panYT=0,this.planes.surfaceDim=0}retire(e){for(const i of e){const s=this.planes.byEl(i);s&&(s.retired=!0,s.fade(ft.retire))}}settle(e){for(const[i,s]of e){const n=this.flier(i);n&&(this.flightCalls.get(n)?.call.kill(),this.flightCalls.delete(n),n.settle(s),n.u.curve=this.planes.field.holds(s)?1:0)}}glide(e,i=ft.home){this.crew(e).forEach(({to:s,plane:n},r)=>{if(!n||!s)return;const o=this.planes.byEl(s);o&&(z.killTweensOf(o.u,"alpha"),o.u.alpha=0);const a=()=>{this.glides.delete(n),o&&(z.killTweensOf(o.u,"alpha"),o.u.alpha=1)},l=z.delayedCall(r*i+ft.glide+ft.resident,a);this.glides.set(n,{resident:o,fallback:l}),this.flightCalls.set(n,{to:s,call:z.delayedCall(r*i,()=>{this.flightCalls.delete(n),n.glide(s,()=>{l.kill(),a()}),n.order=this.launchOrder(),this.lent.add(n),z.killTweensOf(n.u,"radius"),z.to(n.u,{radius:parseFloat(getComputedStyle(s).borderRadius)||0,duration:ft.glide,ease:"snappy"})})})})}appear(e,i=ft.appear){for(const s of e){const n=this.planes.byEl(s);n&&(n.retired=!1,this.giveBack(n),z.killTweensOf(n.u,"alpha"),z.fromTo(n.u,{alpha:0},{alpha:1,duration:i,ease:"power1.out"}))}}nearestDrawn(e){const i=window.innerWidth/2,s=window.innerHeight/2;let n=null,r=1/0;for(const o of e){const a=o.querySelector('[data-gl="simple"]'),l=a?this.planes.byEl(a)?.seen():null;if(!l)continue;const u=l.rect,c=Math.abs(u.top+u.height/2-s),h=Math.abs(u.left+u.width/2-i),f=c*1e3+h;f<r&&(r=f,n=o)}return n}revive(e){for(const i of e){const s=this.planes.byEl(i);s&&(this.unglide(s),s.retired=!1,this.giveBack(s),z.killTweensOf(s.u,"alpha"),z.to(s.u,{alpha:1,duration:ft.revive,ease:"power1.out"}))}}}z.registerPlugin(dr);dr.create("snappy","M0,0 C0.094,0.026 0.124,0.127 0.157,0.29 0.197,0.486 0.254,0.8 0.348,0.884 0.42,0.949 0.374,1 1,1");const Hd=[400,500],f3=t=>Hd.reduce((e,i)=>Math.abs(i-t)<Math.abs(e-t)?i:e,Hd[0]);class d3{constructor(e){if(this.core=new HS,this.seq=0,this.novid=!1,this.resize=()=>{const i=this.ctx.$resize?.ww||window.innerWidth,s=this.ctx.$resize?.wh||window.innerHeight;this.stale=0,this.core.resize(i,s),this.planes.resize(i,s),this.glassPass.resize(i,s)},this.brief=!1,this.sim=i=>this.planes.fluid?.sim(i,this.ratio),this.presents=[],this.stale=0,this.staled=()=>{this.stale=performance.now()+150},this.typing=0,this.typed=[],this.velocity=0,this.ratio=1,this.found=new WeakMap,this.tick=({ratio:i=1}={})=>{this.ratio=i,this.planes.tick(this.velocity,i),this.glassPass.update(i),this.core.frame(i),this.presents.length&&this.present(),this.velocity*=.9,Math.abs(this.velocity)<1&&(this.velocity=0)},this.ctx=e,this.planes=new DE(this.core),this.glassPass=new i3(this.core),this.wipe=new a3(this.core,this.planes),this.wall=new h3(this.core,this.planes),this.booted=new Promise(i=>{this.bootDone=i}),this.started=new Promise(i=>{this.startDone=i}),"gpu"in navigator)for(const i of ar.first)ar.load(i)}async supported(){return"gpu"in navigator&&await this.core.ready}async mount(e){if(!e||!("gpu"in navigator)){this.startDone(!1);return}this.core.mount(e),this.resize(),this.planes.field.drag=n=>this.ctx.$scroll?.push(n,0);const i=window.matchMedia("(hover: hover) and (pointer: fine)").matches;if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const n=new BE(this.core);this.planes.field.fluid=n,this.planes.fluid=n,this.brief=!i,this.core.addPre(this.sim),i&&window.addEventListener("pointermove",r=>n.pointer(r.clientX,r.clientY,r.movementX,r.movementY),{passive:!0})}this.ctx.$resize?.add(this.resize),this.ctx.$event?.on("render",this.tick),window.addEventListener("resize",this.staled);const s=await this.core.ready;s||(this.ctx.$event?.off("render",this.tick),this.core.unmount()),this.startDone(s)}destroy(){window.removeEventListener("resize",this.staled),this.ctx.$resize?.remove(this.resize),this.ctx.$event?.off("render",this.tick),this.glassPass.dispose(),this.core.dispose()}nextPaint(){return new Promise(e=>{this.core.wake(),requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}release(){this.bootDone?.()}retireInk(){const e=this.planes.fluid;!this.brief||!e||(this.planes.fluid=null,this.planes.field.fluid=null,this.core.removePre(this.sim),this.core.wake(),requestAnimationFrame(()=>requestAnimationFrame(()=>e.dispose())))}warm(){const e=this.core.device;if(!e)return Promise.resolve();try{this.planes.warm(),this.planes.fluid?.warm(),this.glassPass.warm(),this.core.warm(),Q0(e,this.core.format)}catch(i){console.error("[gpu] warm",i)}return e.queue.onSubmittedWorkDone().catch(()=>{})}solo(e){this.core.solo=e?new Set(e):null,this.core.wake()}wake(){this.core.wake()}presented(e){return new Promise(i=>{this.presents.push({el:e,since:this.core.submitted,res:i}),this.core.wake()})}unpresent(e){this.presents=this.presents.filter(i=>i.el!==e?!0:(i.res(!1),!1))}get dense(){return(window.devicePixelRatio||1)>this.core.dpr+.01}present(){if(performance.now()<this.stale)return;const e=this.core.submitted;this.presents=this.presents.filter(({el:i,since:s,res:n})=>{if(!i.isConnected)return n(!1),!1;const r=this.planeOf(i);return!r||r.drawnIn<=s||r.drawnIn!==e||r.u.alpha<1?!0:(n(!0),!1)})}get inked(){return!!this.planes.fluid}ink(e,i,s,n,r=1,o=0){this.planes.fluid?.brush(e,i,s,n,r,o)}holdInk(e,i=0){const s=this.planes.fluid;s&&(z.killTweensOf(s,"keep"),i?z.to(s,{keep:e,duration:i,ease:"power1.out"}):s.keep=e)}typeset(){return this.typing?new Promise(e=>{this.typed.push(e)}):Promise.resolve()}shown(e=1/0){return new Promise(i=>{let s=0;e<1/0&&setTimeout(i,Math.max(0,e-performance.now()));const n=()=>{if(!this.core.device||performance.now()>e||++s>2&&!this.unshown())return i();requestAnimationFrame(n)};requestAnimationFrame(n)})}unshown(){const e=this.core.textures;for(const i of this.planes.planes.values())if(!(!i.src||i.liveCanvas||i.dying||i.tex||i.videoEl||i.resting||i.offscreen||!i.pose)&&!e.isFailing(i.src))return!0;return!1}field(e){this.planes.field.claim(e)}setVelocity(e){this.velocity=e}async preload(e,i){if(!("gpu"in navigator)||!await this.core.ready){i?.(1);return}return this.planes.preload(e.filter(Boolean),i)}planeOf(e){if(!e)return null;const i=this.found.get(e);if(i&&i.el===e&&!i.dying)return i;let s=this.planes.byEl(e);if(!s){for(const n of this.planes.planes.values())if(n.el===e&&!n.dying){s=n;break}}return s&&this.found.set(e,s),s??null}host(e,i,{unclaimed:s=!1}={}){for(const n of e){const r=this.planeOf(n);r&&(s&&this.planes.hostedBy(r)!==void 0||this.planes.host(r,i))}}border(e,[i,s,n],r=1){e&&(e.u.winX=i,e.u.winY=s,e.u.winW=n,e.u.winH=r)}pivot(e,i){this.glassPass.pivot(e,i)}live(e,i,{order:s=null}={}){if(!e||!i)return null;const n=this.planes.ensure({el:e,id:`page-${this.seq++}`,src:"",canvas:i,order:this.layer(e,s)});return n.tex||(n.liveDirty=!1),n}simple(e,{src:i,video:s=null,hls:n=null,width:r=0,height:o=0,ink:a=!1,order:l=null,material:u="media",data:c=!1,fade:h=!0}){if(!e||!i)return null;c&&this.core.textures.asData(i);const f=this.planes.ensure({el:e,id:`page-${this.seq++}`,src:i,video:this.novid?null:s,hls:n,frame:s&&r&&o?[r,o]:null,material:u,order:this.layer(e,l)});return a&&(f.u.inked=1),h||f.sudden(),f}async text(e,{order:i=0,reveal:s=!0,ink:n=!0}={}){if(!e||!this.core.device)return null;this.typing++;try{return await this.raise(e,{order:i,reveal:s,ink:n})}catch{return null}finally{if(this.typing--,!this.typing)for(const r of this.typed.splice(0))r()}}async raise(e,{order:i,reveal:s,ink:n}){const r=getComputedStyle(e),o=Math.round(parseFloat(r.fontWeight)||400),a=/mono|monospace/i.test(r.fontFamily),l=r.fontFamily.includes("serif")&&!r.fontFamily.includes("sans"),u=a?"mono-500":l?"serif-400":`sans-${f3(o)}`,c=await this.planes.ensureText({el:e,face:u,id:`text-${this.seq++}`});if(!c)return null;if(c.inked=n?1:0,c.z=this.textZ(e),e.style.setProperty("-webkit-text-fill-color","transparent"),!s)return c.progress=1,c;const h=wi.text;return c.reveal(h.dur,Math.max(0,h.at+i*h.step)),c}layer(e,i){if(i!==null)return i;const s=parseInt(getComputedStyle(e).zIndex,10);return Number.isNaN(s)?0:s}textZ(e){for(let i=e;i&&i!==document.body;i=i.parentElement){const s=parseInt(getComputedStyle(i).zIndex,10);if(!Number.isNaN(s))return s}return 0}background(e,{order:i=null,material:s="panel",shade:n=!0}={}){if(!e)return null;const[r,o,a]=H0(getComputedStyle(e).backgroundColor),l=this.planes.ensure({el:e,id:`ground-${this.seq++}`,src:"",material:s,order:this.layer(e,i)});return l.u.custom=[r,o,a,1],l.u.alpha=1,s.startsWith("falloff")&&n&&this.wall.shadow(l),e.dataset.gl="sheet",e.style.backgroundColor="transparent",l}glass(e){return!e||!this.core.device?null:new c3({core:this.core,el:e,pass:this.glassPass})}orb(e){return!e||!this.core.device?null:new u3({core:this.core,el:e,pass:this.glassPass})}hairline(e,{color:i=Mt("line"),alpha:s=1,order:n=null,snap:r=!1}={}){if(!e)return null;const o=this.planes.ensure({el:e,id:`line-${this.seq++}`,src:"",material:"line",order:this.layer(e,n)});return o.u.custom=[i[0],i[1],i[2],s],o.u.inked=1,o.snap=r,o}}const p3=_t(t=>({provide:{gl:new d3(t)}})),g3=_t(t=>{});var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rc,Gd;function m3(){if(Gd)return rc;Gd=1;var t="Expected a function",e=NaN,i="[object Symbol]",s=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,l=typeof Vo=="object"&&Vo&&Vo.Object===Object&&Vo,u=typeof self=="object"&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),h=Object.prototype,f=h.toString,d=Math.max,g=Math.min,p=function(){return c.Date.now()};function _(v,x,k){var R,S,P,A,M,D,F=0,O=!1,C=!1,L=!0;if(typeof v!="function")throw new TypeError(t);x=b(x)||0,w(k)&&(O=!!k.leading,C="maxWait"in k,P=C?d(b(k.maxWait)||0,x):P,L="trailing"in k?!!k.trailing:L);function q(I){var J=R,X=S;return R=S=void 0,F=I,A=v.apply(X,J),A}function ce(I){return F=I,M=setTimeout(ae,x),O?q(I):A}function he(I){var J=I-D,X=I-F,ee=x-J;return C?g(ee,P-X):ee}function fe(I){var J=I-D,X=I-F;return D===void 0||J>=x||J<0||C&&X>=P}function ae(){var I=p();if(fe(I))return ie(I);M=setTimeout(ae,he(I))}function ie(I){return M=void 0,L&&R?q(I):(R=S=void 0,A)}function xe(){M!==void 0&&clearTimeout(M),F=0,R=D=S=M=void 0}function pe(){return M===void 0?A:ie(p())}function we(){var I=p(),J=fe(I);if(R=arguments,S=this,D=I,J){if(M===void 0)return ce(D);if(C)return M=setTimeout(ae,x),q(D)}return M===void 0&&(M=setTimeout(ae,x)),A}return we.cancel=xe,we.flush=pe,we}function w(v){var x=typeof v;return!!v&&(x=="object"||x=="function")}function y(v){return!!v&&typeof v=="object"}function m(v){return typeof v=="symbol"||y(v)&&f.call(v)==i}function b(v){if(typeof v=="number")return v;if(m(v))return e;if(w(v)){var x=typeof v.valueOf=="function"?v.valueOf():v;v=w(x)?x+"":x}if(typeof v!="string")return v===0?v:+v;v=v.replace(s,"");var k=r.test(v);return k||o.test(v)?a(v.slice(2),k?2:8):n.test(v)?e:+v}return rc=_,rc}var v3=m3();const y3=nv(v3),w3="(max-width: 649.98px), (max-width: 999.98px) and (orientation: portrait)",b3={small:w3},_3=_t(t=>{const e=new Set,i=window.matchMedia(b3.small),s=window.matchMedia("(hover: hover) and (pointer: fine)"),n=Mi({ww:document.documentElement.clientWidth,wh:document.documentElement.clientHeight,small:i.matches,mouse:s.matches,add:u=>e.add(u),remove:u=>e.delete(u)});let r=window.devicePixelRatio||1,o=null;const a=y3(()=>{const u=document.documentElement.clientWidth,c=document.documentElement.clientHeight,h=window.devicePixelRatio||1;u===n.ww&&c===n.wh&&h===r||(n.ww=u,n.wh=c,h!==r&&(r=h,l()),n.small=i.matches,n.mouse=s.matches,e.forEach(f=>f(n.ww,n.wh)),t.$event.emit("resize",{ww:n.ww,wh:n.wh}))},100),l=()=>{o?.removeEventListener("change",a),o=window.matchMedia(`(resolution: ${r}dppx)`),o.addEventListener("change",a)};return l(),window.addEventListener("resize",a),s.addEventListener("change",()=>n.mouse=s.matches),{provide:{resize:n}}}),$d=1.25,x3=3.25,k3=35,jd=240,T3=40,qd=30,Wd=500,S3=.22,Kd=150,E3=2,Ho=100,R3=.9,P3=/^(input|textarea|select|audio|video)$/i,C3=/^(button|summary)$/i,Yd=t=>{const e=t.target;return!e||e===window||e===document?!1:e.isContentEditable||P3.test(e.tagName)?!0:t.key===" "&&C3.test(e.tagName)},M3=_t(t=>{const{$event:e,$resize:i}=t;let s=!1,n=0,r=0,o=null;const a=(F,O,C=0)=>{s||e.emit("vs",{deltaY:F,deltaX:C,event:O})},l={y:0,x:0};let u=null;const c={y:0,x:0};let h=0,f=-Wd;const d=new Set,g=()=>{for(const F of d)if(F())return!0;return!1};let p=null,_=-Kd;const w=(F,O)=>{const C=F?.closest?.("textarea");if(!C||C.scrollHeight<=C.clientHeight+1)return null;const L=C.scrollTop>0,q=C.scrollTop+C.clientHeight<C.scrollHeight-1;return(O<0?L:O>0&&q)?C:null},y=F=>{if(F.ctrlKey)return;const O=F.deltaMode===1?16:F.deltaMode===2?i.wh:1;let C=F.deltaY*O,L=F.deltaX*O;if(F.shiftKey&&!L&&(L=C,C=0),F.timeStamp-_>Kd&&(p=w(F.target,C)),_=F.timeStamp,p||(F.cancelable&&Math.abs(L)>Math.abs(C)&&g()&&F.preventDefault(),s))return;const q=F.timeStamp-h;q<qd&&(f=F.timeStamp);const ce=Math.max(Math.abs(L),Math.abs(C))>=T3&&q>=qd&&F.timeStamp-f>=Wd;h=F.timeStamp;const he=ce?c:l,fe=ce?$d*E3:$d;he.y+=C*fe,he.x+=L*fe,u=F},m=(F,O)=>{if(!c[F])return;const C=c[F]*O;l[F]+=C,c[F]-=C,Math.abs(c[F])<.05&&(l[F]+=c[F],c[F]=0)},b=F=>{if(c.y||c.x){const L=1-Math.pow(1-S3,Math.min(F||0,4));m("y",L),m("x",L)}if(!l.y&&!l.x)return;const{y:O,x:C}=l;l.y=0,l.x=0,a(O,u,C),u=null},v=F=>{const O=F.targetTouches??F.touches;if(!O||!O.length)return null;if(o!==null){for(const C of O)if(C.identifier===o)return C}return O[0]},x=F=>{o=F.identifier??null,n=F.clientY,r=0},k=F=>{const O=(F.targetTouches??F.touches)?.[0]??F;x(O)},R=F=>{const O=v(F)??F;if((O.identifier??null)!==o){x(O);return}r=Math.max(-jd,Math.min(jd,n-O.clientY)),n=O.clientY,a(r*x3,F)},S=F=>{const O=F.changedTouches;let C=o===null;if(O)for(const q of O)q.identifier===o&&(C=!0);if(!C)return;const L=(F.targetTouches??F.touches)?.[0];!L&&r&&a(r*k3,F),r=0,o=null,L&&x(L)},P=()=>{r=0,o=null},A=F=>{if(F.metaKey||F.ctrlKey||F.altKey||F.shiftKey&&F.key!==" "||Yd(F))return;const O=i.wh*R3;let C=0,L=0;switch(F.key){case"ArrowDown":C=Ho;break;case"ArrowUp":C=-Ho;break;case"ArrowRight":L=Ho;break;case"ArrowLeft":L=-Ho;break;case"PageDown":C=O;break;case"PageUp":C=-O;break;case" ":C=F.shiftKey?-O:O;break;default:return}F.preventDefault(),a(C,F,L)};window.addEventListener("wheel",y,{passive:!1}),window.addEventListener("touchstart",k,{passive:!0}),window.addEventListener("touchmove",R,{passive:!0}),window.addEventListener("touchend",S,{passive:!0}),window.addEventListener("touchcancel",P,{passive:!0}),window.addEventListener("keydown",A),z.config({autoSleep:!1}),z.ticker.lagSmoothing(0);let M=0;const D=F=>{requestAnimationFrame(D);const O=M?(F-M)/(1e3/60):0;M=F,b(O),e.emit("tick",{time:F,ratio:O}),e.emit("render",{time:F,ratio:O})};return requestAnimationFrame(D),{provide:{scroll:{stop:()=>{s=!0,c.y=0,c.x=0},start:()=>s=!1,push:(F,O,C)=>a(F,C,O),claimed:Yd,across:F=>(d.add(F),()=>d.delete(F))}}}}),A3=_t(async t=>{}),O3=[c2,p2,C2,M2,A2,O2,N2,L2,I2,z2,ok,lk,mk,p3,g3,_3,M3,A3],rv=(t="RouteProvider")=>qa({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const i=e.renderKey,s=e.route,n={};for(const r in e.route)Object.defineProperty(n,r,{get:()=>i===e.renderKey?e.route[r]:s[r],enumerable:!0});return Hn(sl,us(n)),()=>e.vnode?mi(e.vnode,{ref:e.vnodeRef}):e.vnode}}),F3=rv(),Xd=new WeakMap,N3=qa({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:i,expose:s}){const n=Ce(),r=oe(),o=zt(sl,null),a=new Set;let l;s({pageRef:r});const u=zt(Ob,null);let c;const h=n.deferHydration();let f=!1,d=!1,g,p=0;if(n.isHydrating){const w=n.hooks.hookOnce("app:error",h),y=_i().beforeEach(()=>{w(),y()})}t.pageKey&&je(()=>t.pageKey,(w,y)=>{w!==y&&n.callHook("page:loading:start")});let _=!1;{const w=_i().beforeResolve(()=>{_=!1});Jt(()=>{w(),h()})}return()=>mi(Fm,{name:t.name,route:t.route,...e},{default:I3(w=>{const y=D3(o,w.route,w.Component),m=o&&o.matched.length===w.route.matched.length;if(!w.Component){if(c&&!m&&!oc(c))return c;h();return}if(c&&u&&!oc(c)&&!u.isCurrent(w.route))return c;if(y&&o&&(!u||u?.isCurrent(o)))return(m||c)&&!oc(c)?c:null;const b=no(w,t.pageKey),v=L3(o,w.route,w.Component);!n.isHydrating&&l===b&&!v&&st(()=>{_||(_=!0,n.callHook("page:loading:end"))}),f&&l!==b&&d&&p++,l=b;const x=!!(t.transition??w.route.meta.pageTransition??rf),k=x&&Kx([t.transition,w.route.meta.pageTransition,rf,{onAfterLeave(){n["~transitionFinish"]?.(),delete n["~transitionFinish"],delete n["~transitionPromise"],n.callHook("page:transition:finish",w.Component)}}]),R=t.keepalive??w.route.meta.keepalive??yb,S=w.Component.type,P=S.name||S.__name;w.route.meta.keepalive&&P&&a.add(P);let A;if(a.size>0&&t.keepalive==null&&(!R||typeof R=="object"&&R&&R.include)){const D=typeof R=="object"&&R?{...R}:{},F=D.include?Array.isArray(D.include)?D.include:[D.include]:[];A={...D,include:Array.from(new Set([...F,...a]))}}else A=R;return c=Gx(x&&k,w2(A,mi(Og,{key:p,suspensible:!0,onPending:()=>{f=!0,x&&!n["~transitionPromise"]&&(n["~transitionPromise"]=new Promise(D=>{n["~transitionFinish"]=D})),g=n.callHook("page:start",w.Component)},onResolve:async()=>{f=!1,d=!0,n.isHydrating&&n["~restoreDeferredRoute"]?.();try{await st(),n._route.sync?.(),await g,await n.callHook("page:finish",w.Component),!_&&!v&&(_=!0,await n.callHook("page:loading:end"))}finally{h()}}},{default:()=>{const D={key:b||void 0,vnode:i.default?z3(i.default,w):w.Component,route:w.route,renderKey:b||void 0,trackRootNodes:x,vnodeRef:r};if(!A)return mi(F3,D);const F=S;let O=Xd.get(F);return O||(O=rv(P),Xd.set(F,O)),mi(O,D)}}))).default(),c})})}});function D3(t,e,i){if(!t)return!1;const s=e.matched.findIndex(o=>o.components?.default===i?.type);if(s===-1)return!1;const n=e.matched.slice(0,s).filter(o=>o.components?.default);if(!n.length)return!1;const r=t.matched.filter(o=>o.components?.default);return n.some((o,a)=>o.components?.default!==r[a]?.components?.default)||i&&no({route:e,Component:i})!==no({route:t,Component:i})}function L3(t,e,i){return t?e.matched.findIndex(n=>n.components?.default===i?.type)<e.matched.length-1:!1}function I3(t){const e=(i=>{const s=t(i);return Array.isArray(s)?s:s==null||!Ls(s)?[ss()]:[s]});return e._n=!0,e}function z3(t,e){const i=t(e);return i.length===1?mi(i[0]):mi(Ye,void 0,i)}function oc(t){return!!t&&(!!t.suspense?.isUnmounted||!!t.component?.isUnmounted)}const pr=(t,e,{early:i=!1}={})=>{const{$gl:s}=Ce();Qt(async()=>{if(await st(),!i)await s.booted;else if(!await s.started)return;const n=t.value?.$el??t.value;n?.isConnected&&e(n)})},fl={__name:"background",setup(t){const{$gl:e}=Ce(),i=oe(null);return pr(i,s=>e.background(s)),(s,n)=>(Ee(),Ge("div",{ref_key:"el",ref:i},null,512))}},B3={__name:"falloff",props:{edge:{type:String,default:"top"},shade:{type:Boolean,default:!0}},setup(t){const e=t,{$gl:i}=Ce(),s=oe(null);return pr(s,n=>i.background(n,{material:e.edge==="bottom"?"falloff-up":"falloff",shade:e.shade})),(n,r)=>(Ee(),Ge("div",{ref_key:"el",ref:s},null,512))}},dl={__name:"text",props:{text:{type:String,default:""},tag:{type:String,default:"div"},order:{type:Number,default:0},reveal:{type:Boolean,default:!0},ink:{type:Boolean,default:!0},hover:{type:Boolean,default:!1},lit:{type:Boolean,default:!1}},emits:["born"],setup(t,{emit:e}){const i=t,s=e,[n,r,o]=Mt("accent"),a={x:n,y:r,z:o},l={duration:.35,ease:"power1.out"},{$gl:u}=Ce(),c=oe(null),h=oe(!1),f=nt(()=>i.lit||h.value?1:0);let d=null,g=null;const p=y=>{!d||!i.hover&&!i.lit&&!d.tint||(d.color=a,z.killTweensOf(d,"tint"),y?d.tint=f.value:z.to(d,{tint:f.value,...l}))};je(f,()=>p(!1));const _=y=>{y.pointerType==="mouse"&&(h.value=!0)},w=()=>{h.value=!1};return pr(c,async y=>{i.hover&&(g=y.closest("a, button")??y,g.addEventListener("pointerenter",_),g.addEventListener("pointerleave",w)),d=await u.text(y,{order:i.order,reveal:i.reveal,ink:i.ink}),d&&(p(!0),s("born",d))}),Jt(()=>{g?.removeEventListener("pointerenter",_),g?.removeEventListener("pointerleave",w),d&&z.killTweensOf(d,"tint")}),(y,m)=>(Ee(),ti(ug(t.tag),{ref_key:"el",ref:c,"data-gl":"text",class:"[-webkit-text-fill-color:transparent]"},{default:Ru(()=>[Uy(y.$slots,"default",{},()=>[Au(wu(t.text),1)])]),_:3},512))}},U3=""+new URL("flame-man-still.BeC-05c3.riv",import.meta.url).href,V3=""+new URL("rive.BHUgDsdB.wasm",import.meta.url).href,H3=""+new URL("rive_fallback.CeBxpMvX.wasm",import.meta.url).href;let Qd=null;const ov=()=>_a(()=>import("./DTTm-hKv.js").then(t=>t.r),[],import.meta.url),G3=()=>(Qd??=wo(async()=>{const{RuntimeLoader:t}=await ov();return t.setWasmUrl(V3),t.setWasmFallbackUrl(H3),t.awaitInstance()}),Qd),$3=3e3,j3=()=>new Promise(t=>{window.requestIdleCallback?window.requestIdleCallback(()=>t(),{timeout:$3}):setTimeout(t,200)}),q3=()=>new Promise(t=>{document.readyState==="complete"?t():window.addEventListener("load",t,{once:!0})}).then(j3),ac=new Map,W3=async t=>{if(ac.has(t))return ac.get(t);const e=q3().then(()=>wo(()=>fetch(t,{priority:"low"}).then(i=>i.ok?i.arrayBuffer():null))).then(async i=>(await G3(),i));return ac.set(t,e),e},K3=3,Y3={__name:"rive",props:{name:{type:String,required:!0},machine:{type:String,default:""},file:{type:String,default:"flame-man-still"},light:{type:Boolean,default:!0}},setup(t){const e=t,i=Object.assign({"../../assets/rive/flame-man-still.riv":U3}),{$gl:s,$event:n}=Ce(),r=oe(null);let o=null,a=null,l=!1,u=!1;const c={duration:.35,ease:"power1.out"},h=()=>o?.resizeDrawingSurfaceToCanvas(Math.min(K3,(window.devicePixelRatio||1)*1.5));pr(r,g=>{a=s.live(g,g),a&&(a.u.alpha=u?1:0)});const f=()=>{u=!0,a&&z.to(a.u,{alpha:1,...c})},d=async()=>{if(l||!r.value?.getClientRects().length||(l=!0,!await s.supported()))return;const g=i[`../../assets/rive/${e.file}.riv`];if(!g||!r.value)return;const p=await W3(g);if(!r.value)return;const{Rive:_,EventType:w}=await ov();if(!r.value)return;const y=e.machine||e.name;o=new _({buffer:p,canvas:r.value,artboard:e.name,stateMachines:y,autoplay:!0,autoBind:!0,useOffscreenRenderer:!0,onLoad:()=>{h(),n.on("resize",h),setTimeout(h,500);const m=o.stateMachineInputs(y)?.find(b=>b.name==="light-mode");m&&(m.value=e.light),f()}}),o.on(w.Advance,()=>a?.touch())};return Qt(async()=>{await st(),n.on("resize",d),d()}),Ya(()=>{o?.cleanup(),o=null,n.off("resize",h),n.off("resize",d),a&&z.killTweensOf(a.u)}),(g,p)=>(Ee(),Ge("canvas",{ref_key:"el",ref:r,"aria-hidden":"true",class:"absolute inset-0 z-[42] size-full opacity-0"},null,512))}},X3=.001,Q3=.001;function J3(t){return t.response!==void 0}function av(t){if(!J3(t))return{stiffness:t.stiffness,damping:t.damping,mass:t.mass};const e=t.mass??1,i=t.dampingRatio??(t.bounce!==void 0?1-t.bounce:1),s=2*Math.PI/Math.max(t.response,1e-4),n=e*s*s,r=2*i*Math.sqrt(n*e);return{stiffness:n,damping:r,mass:e}}function Z3(t,e){return{...av(t),restVelocity:e?.restVelocity??X3,restDisplacement:e?.restDisplacement??Q3}}function eR(t,e){const{stiffness:i,damping:s,mass:n}=t,r=Math.sqrt(i/n),o=s/(2*Math.sqrt(i*n)),a=e;if(o<1){const y=r*Math.sqrt(1-o*o),m=Math.exp(-o*r*a),b=Math.cos(y*a),v=Math.sin(y*a),x=o*r,k=m*(b+x/y*v),R=m*(v/y),S=m*(-(x*x)/y-y)*v,P=m*(b-x/y*v);return{a:k,b:R,c:S,d:P}}if(o===1){const y=Math.exp(-r*a),m=y*(1+r*a),b=y*a,v=y*(-r*r*a),x=y*(1-r*a);return{a:m,b,c:v,d:x}}const l=Math.sqrt(o*o-1),u=-r*(o-l),c=-r*(o+l),h=Math.exp(u*a),f=Math.exp(c*a),d=1/(u-c),g=(-c*h+u*f)*d,p=(h-f)*d,_=(-u*c*h+u*c*f)*d,w=(u*h-c*f)*d;return{a:g,b:p,c:_,d:w}}function tR(t,e,i,s){const n=s??eR(e,i),r=t.value-t.target,o=t.velocity,a=n.a*r+n.b*o,l=n.c*r+n.d*o;return Math.abs(a)<e.restDisplacement&&Math.abs(l)<e.restVelocity?(t.value=t.target,t.velocity=0,!1):(t.value=t.target+a,t.velocity=l,!0)}class Hi{constructor(e,i,s){this.velocity=0,this.sleeping=!0,this.value=e,this.target=e,this.config=Z3(i,s)}setParams(e){return this.config={...this.config,...av(e)},this}setTarget(e){return e!==this.target&&(this.target=e,this.sleeping=!1),this}addVelocity(e){return this.velocity+=e,this.sleeping=!1,this}snap(e){return this.value=e,this.target=e,this.velocity=0,this.sleeping=!0,this}step(e,i){if(this.sleeping)return!1;const s=tR(this,this.config,e,i);return this.sleeping=!s,s}}class iR{constructor(e={}){this.steppables=new Set,this.writers=new Set,this.raf=0,this.last=0,this.running=!1,this.maxDt=e.maxDt??1/20,this.fixedDt=e.fixedDt}add(e){return this.steppables.add(e),()=>this.steppables.delete(e)}onWrite(e){return this.writers.add(e),()=>this.writers.delete(e)}tick(e){const i=Math.min(e,this.maxDt);for(const s of this.steppables)s.step(i);for(const s of this.writers)s(i)}start(){if(this.running||typeof requestAnimationFrame>"u")return this;this.running=!0,this.last=performance.now();const e=i=>{if(!this.running)return;const s=this.fixedDt??(i-this.last)/1e3;this.last=i,this.tick(s),this.raf=requestAnimationFrame(e)};return this.raf=requestAnimationFrame(e),this}stop(){return this.running=!1,this.raf&&cancelAnimationFrame(this.raf),this.raf=0,this}}const Kn=wi.mark,oh={out:.3,in:.4,travel:2},sR=t=>Math.ceil(t/2-1e-6)*2,nR=t=>Math.floor((t+1)/2+1e-6)*2+1,rR=()=>{const t=new Hi(-1,Kn.enter);let e=null;return{stroke:t,pose:()=>{let l=t.value;Math.abs(t.target%2)===1&&(l=Math.min(l,t.target));const u=((l+1)%2+2)%2-1;return u>=0?[u,0]:[1,1+u]},show:(l=0)=>{clearTimeout(e),e=setTimeout(()=>{t.setParams(Kn.enter),t.setTarget(sR(t.value))},l*1e3)},hide:()=>{clearTimeout(e),t.setParams(Kn.exit),t.setTarget(nR(t.value))},rebase:()=>{if(!t.sleeping)return;const l=Math.floor((t.value+1)/2);l&&t.snap(t.value-l*2)},set:l=>{clearTimeout(e),t.snap(l?0:-1)},dispose:()=>clearTimeout(e)}},{arm:Jd,travel:Zd,stretch:ep,lead:pu}=Dr,oR=[{dx:.7071,dy:.7071,lag:0},{dx:-.7071,dy:.7071,lag:pu}],tp=t=>Math.max(0,Math.min(1,t)),ip=(t,e,i,s)=>{t.setAttribute("x1",e.dx*(i-s)),t.setAttribute("y1",-e.dy*(i-s)),t.setAttribute("x2",e.dx*(i+s)),t.setAttribute("y2",-e.dy*(i+s))},sC=(t,[e,i])=>{oR.forEach((s,n)=>{const r=tp((e-s.lag)/(1-pu)),o=tp((i-s.lag)/(1-pu));t[n*2]&&ip(t[n*2],s,r*Zd,Jd*(1+ep*r)),t[n*2+1]&&ip(t[n*2+1],s,(o-1)*Zd,Jd*(1+ep*(1-o)))})},lc=t=>t.getBoundingClientRect(),nC=(t,e,i)=>Math.min(Math.max(i,t),e),De=t=>{const e=ne(t);return e?.$el??e??null},Si=()=>parseFloat(getComputedStyle(document.documentElement).fontSize)||10,ah=(t,e,{snap:i=t,rest:s,idle:n,auto:r=!0}={})=>{const{$event:o}=Ce(),a=new iR;for(const h of t)a.add(h);a.onWrite(e);const l=({ratio:h})=>{if(t.every(f=>f.sleeping)){if(i.some(f=>f.value!==f.target)){for(const f of i)f.snap(f.target);s?.(),e()}else n?.();return}a.tick(Math.max(h,.25)/60)},u=()=>o.on("tick",l),c=()=>o.off("tick",l);return r&&Qt(u),Jt(c),{start:u,stop:c}},aR=["type","aria-label","aria-expanded"],lR=-1,cR=1,uR={__name:"button",props:{text:{type:String,default:"Start A Project"},height:{type:String,default:"h-38"},pad:{type:String,default:"px-16"},radius:{type:String,default:"rounded-[0.75rem]"},size:{type:String,default:"text-18"},type:{type:String,default:"button"},active:{type:Boolean,default:!1},cross:{type:Boolean,default:!1},close:{type:String,default:"Close"},square:{type:Boolean,default:!1}},setup(t,{expose:e}){const i=t,{$gl:s}=Ce(),n=oe(null),r=oe(null),o=oe(null),a=O=>s.planeOf(De(O)),l=wi.press,u=new Hi(1,{response:l.response,dampingRatio:l.dampingRatio});let c=!1,h={x:.5,y:.5};const f=(O,C)=>{if(c!==O){if(c=O,O&&C&&n.value){const L=n.value.getBoundingClientRect();L.width&&L.height&&(h={x:(C.clientX-L.left)/L.width,y:(C.clientY-L.top)/L.height})}u.setParams(O?l:l.release),u.setTarget(O?l.scale:1)}},[d,g,p]=Mt("accent"),_={x:d,y:g,z:p};let w=!1,y=1;const m=()=>{const O=a(r),C=a(o);S(O),D();const L=u.value;O&&(O.occludes=!0,O.u.scale=L,O.u.press[0]=h.x,O.u.press[1]=h.y,O.u.reach=l.reach,O.u.depth=l.depth,O.u.wash=1);const q=n.value?n.value.getBoundingClientRect():null;let ce=L;if(q&&q.width&&q.height){const he=Math.max(Math.min(q.width,q.height)*l.reach,1),fe=(.5-h.x)*q.width,ae=(.5-h.y)*q.height;ce=1-(1-L)*Math.exp(-(fe*fe+ae*ae)/(he*he))}C&&(C.scale=ce*y,C.color=_,C.wash=1),!w&&O&&C&&(s.host([De(o)],De(r)),w=!0)},{out:b,in:v,travel:x}=oh;je(()=>i.active,O=>{if(!i.cross)return;const C=a(o);i.square&&(O&&P.sleeping&&P.target===0&&(A=M()),P.setTarget(O?1:0)),O?(C?.conceal(b,0,lR,x),R.show(b)):(R.hide(),C?.reveal(v,b,cR,x))});const k=Mt("ink"),R=rR(),S=(O=a(r))=>{if(!O||!i.cross)return;const[C,L]=R.pose();O.u.mark[0]=C,O.u.mark[1]=L,O.u.mark[2]=Kn.weight,O.u.mark[3]=1,O.u.markC[0]=k[0],O.u.markC[1]=k[1],O.u.markC[2]=k[2]},P=new Hi(0,{response:Kn.morph.response,dampingRatio:Kn.morph.dampingRatio});let A=0;const M=()=>n.value?(n.value.style.removeProperty("--w"),n.value.getBoundingClientRect().width):0,D=()=>{if(!i.square||!n.value)return;const O=P.value;if(P.sleeping&&P.target===0){n.value.style.removeProperty("--w");return}const C=n.value.getBoundingClientRect().height,L=A+(C-A)*O;n.value.style.setProperty("--w",`${L}px`)},F=O=>{O!==y&&(y=O,m())};return ah([u,R.stroke,P],m,{snap:[u,P,R.stroke],rest:R.rebase}),Qt(async()=>{await st(),await s.booted;let O=0;const C=()=>{m();const L=a(o);L&&(L.progress=i.active?0:1),i.cross&&R.stroke.sleeping&&R.set(i.active),i.square&&P.sleeping&&(i.active&&!A&&(A=M()),P.snap(i.active?1:0)),!w&&O++<120&&requestAnimationFrame(C)};C()}),Jt(()=>{R.dispose()}),e({el:n,ground:r,label:o,shrink:F}),(O,C)=>{const L=fl,q=dl;return Ee(),Ge("button",{ref_key:"el",ref:n,type:t.type,"aria-label":t.cross&&t.active?t.close:void 0,"aria-expanded":t.cross?t.active:void 0,class:It(["relative inline-flex shrink-0 cursor-pointer items-center justify-center will-change-transform [width:var(--w,auto)]",[t.height,t.pad,t.radius]]),onPointerdown:C[0]||(C[0]=ce=>f(!0,ce)),onPointerup:C[1]||(C[1]=ce=>f(!1)),onPointercancel:C[2]||(C[2]=ce=>f(!1)),onPointerleave:C[3]||(C[3]=ce=>f(!1))},[_e(L,{ref_key:"ground",ref:r,class:It(["absolute inset-0 z-[42] bg-accent",t.radius])},null,8,["class"]),_e(q,{ref_key:"label",ref:o,tag:"span",class:It(["serif relative z-[43] whitespace-nowrap text-ink",t.size]),text:t.text,reveal:!1,ink:!1},null,8,["class","text"])],42,aR)}}},lv={__name:"chevron",props:{up:{type:Boolean,default:!1},shown:{type:Boolean,default:!0},hover:{type:Boolean,default:!1},lit:{type:Boolean,default:!1}},setup(t){const e=t,i=Mt("ink"),s=Mt("accent"),n={duration:.35,ease:"power1.out"},r=wi.flip,{$gl:o}=Ce(),a=oe(null),l=oe(!1),u=nt(()=>e.lit||l.value?1:0),c={tint:u.value,alpha:e.shown?1:0,turn:e.up?1:0};let h=null,f=null;const d=()=>{if(h){for(let w=0;w<3;w++)h.u.custom[w]=i[w]+(s[w]-i[w])*c.tint;h.u.custom[3]=c.alpha,h.u.mark[0]=c.turn}},g=(w,y,m=n)=>{z.killTweensOf(c,w),z.to(c,{[w]:y,...m,onUpdate:d})};je(u,w=>g("tint",w)),je(()=>e.shown,w=>g("alpha",w?1:0)),je(()=>e.up,w=>g("turn",w?1:0,r));const p=w=>{w.pointerType==="mouse"&&(l.value=!0)},_=()=>{l.value=!1};return pr(a,w=>{h=o.background(w,{material:"chevron"}),h&&(e.hover&&(f=w.closest("a, button")??w,f.addEventListener("pointerenter",p),f.addEventListener("pointerleave",_)),d())}),Jt(()=>{f?.removeEventListener("pointerenter",p),f?.removeEventListener("pointerleave",_),z.killTweensOf(c)}),(w,y)=>(Ee(),Ge("span",{ref_key:"el",ref:a,class:"block"},null,512))}},rC=[[0,1,2],[3,4,5]],oC=[{cls:"rounded-5 w-[48.936%]",ratio:"2 / 1"},{cls:"rounded-5 w-[24.468%]",ratio:"1 / 1"},{cls:"rounded-5 w-[24.468%]",ratio:"1 / 1"},{cls:"rounded-5 w-[24.468%]",ratio:"1 / 1"},{cls:"rounded-5 w-[24.468%]",ratio:"1 / 1"},{cls:"rounded-5 w-[48.936%]",ratio:"2 / 1"}],aC=[{cls:"rounded-8 s:rounded-12 order-first w-full s:order-none s:w-[42.553%]",ratio:"20 / 13"},{cls:"rounded-8 s:rounded-12 w-[calc((100%-0.8rem)/2)] s:w-[27.66%]",ratio:"1 / 1"},{cls:"rounded-8 s:rounded-12 w-[calc((100%-0.8rem)/2)] s:w-[27.66%]",ratio:"1 / 1"},{cls:"rounded-8 s:rounded-12 w-[calc((100%-0.8rem)/2)] s:w-[27.66%]",ratio:"1 / 1"},{cls:"rounded-8 s:rounded-12 w-[calc((100%-0.8rem)/2)] s:w-[27.66%]",ratio:"1 / 1"},{cls:"rounded-8 s:rounded-12 order-first w-full s:order-none s:w-[42.553%]",ratio:"20 / 13"}],Kr=8,lC=t=>(t||[]).map(e=>{const i=e.gallery?.length?e.gallery:[e],s=Array.from({length:6},(n,r)=>i[r%i.length]);return{slug:e.slug,title:e.title,services:e.services||[],summary:e.summary||null,quote:e.quote||null,shots:s}}),hR=1.5,fR=5e-4,dR=30,pR=(t,e,i,s)=>{const n=Math.floor(t/s),r=Math.floor(e/s),o=Math.min(Math.abs(n-r),i-Math.abs(n-r)),a=Math.min(Math.abs(t%s-e%s),s-Math.abs(t%s-e%s))*hR;return o*o+a*a},gR=(t,e,i)=>{const s=e*i,n=Array.from({length:s},(w,y)=>y%t),r=Array.from({length:t},()=>[]);n.forEach((w,y)=>r[w].push(y));const o=w=>{const y=r[w];let m=0;for(let b=0;b<y.length;b++)for(let v=b+1;v<y.length;v++)m+=1/pR(y[b],y[v],e,i)**4;return m},a=w=>Math.floor(w/i)*i+(w%i+1)%i,l=w=>Math.floor(w/i)*i+(w%i+i-1)%i,u=w=>(w+i)%s,c=w=>(w-i+s)%s,h=([w,y,m])=>m*t*t+Math.min(n[w],n[y])*t+Math.max(n[w],n[y]),f=new Map;for(let w=0;w<s;w++)for(const y of[[w,a(w),0],[w,u(w),1]]){const m=h(y);f.set(m,(f.get(m)||0)+1)}const d=(w,y)=>{const m=new Set,b=[];for(const v of[w,y])for(const x of[[l(v),v,0],[v,a(v),0],[c(v),v,1],[v,u(v),1]]){const k=(x[0]*s+x[1])*2+x[2];m.has(k)||(m.add(k),b.push(x))}return b},g=w=>{let y=0;for(const m of w){const b=h(m),v=f.get(b);y-=v-1,f.set(b,v-1)}return y},p=w=>{let y=0;for(const m of w){const b=h(m),v=f.get(b)||0;y+=v,f.set(b,v+1)}return y},_=(w,y)=>{const m=n[w],b=n[y];n[w]=b,n[y]=m,r[m][r[m].indexOf(w)]=y,r[b][r[b].indexOf(y)]=w};for(let w=0;w<dR;w++){let y=!1;for(let m=0;m<s;m++)for(let b=m+1;b<s;b++){const v=n[m],x=n[b];if(v===x)continue;const k=d(m,b),R=o(v)+o(x);let S=g(k);_(m,b),S+=p(k),o(v)+o(x)-R+fR*S<-1e-12?y=!0:(g(k),_(m,b),p(k))}if(!y)break}return n},cv=t=>Math.max(8,Math.ceil(t/Kr)),mR=t=>t?gR(t,cv(t),Kr):[],cC=(t,e)=>{const i=t.length;if(!i)return[];const s=cv(i),n=e?.length===s*Kr&&e.every(r=>r<i)?e:mR(i);return Array.from({length:s},(r,o)=>Array.from({length:Kr},(a,l)=>{const u=n[o*Kr+l];return{k:u,chunk:t[u]}}))},uv=t=>{const e=new Map;(t||[]).forEach((s,n)=>{const r=s?.industry?.slug||"";e.has(r)||e.set(r,{slug:r,title:s?.industry?.title||"Other",ks:[]}),e.get(r).ks.push(n)});const i=[...e.values()];return[...i.filter(s=>s.slug),...i.filter(s=>!s.slug)]},uC=t=>uv(t).flatMap(e=>e.ks),vR=[[32,126],[160,255],[8208,8231],[8240,8250],[8364,8364],[8482,8482]],yR=new Set([..."‖‱‴‵‶‷‸"]),sp=new Map([["­",""],["‐","-"],["‑","-"],["⁃","-"],["−","-"],["‒","–"],["―","—"],["‛","‘"],["‟","“"],["ʼ","’"],["‣","•"],["․","."],["‧","·"],["ß","ss"],["ẞ","SS"],["ı","i"],["ł","l"],["Ł","L"],["đ","d"],["Đ","D"],["ħ","h"],["Ħ","H"],["œ","oe"],["Œ","OE"]]),np=t=>{const e=t.codePointAt(0);return!yR.has(t)&&vR.some(([i,s])=>e>=i&&e<=s)},rp=t=>{const e=t.toUpperCase();return np(t)&&[...e].length===1&&np(e)},wR=t=>{if(sp.has(t))return sp.get(t);if(rp(t))return t;for(const e of[t.normalize("NFKC"),t.normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")])if(e&&e!==t&&[...e].every(rp))return e;return""},ea=t=>[...String(t??"").normalize("NFC").replace(/\s+/g," ")].map(wR).join("").replace(/ {2,}/g," ").trim(),bR="$s";function yn(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[i,s]=t;if(!i||typeof i!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+i);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const n=bR+i,r=Ce(),o=Su(r.payload.state,n);if(o.value===void 0&&s){const a=s();if(ot(a))return r.payload.state[n]=a,a;o.value=a}return o}const hv=()=>yn("menu:projects",()=>!1),_R=()=>yn("menu:wheel",()=>!1),lh=()=>({about:yn("panel:about",()=>!1),contact:yn("panel:contact",()=>!1)}),xR={trailing:!0};function kR(t,e=25,i={}){if(i={...xR,...i},!Number.isFinite(e))throw new TypeError("Expected `wait` to be a finite number");let s,n,r=[],o,a;const l=(h,f)=>(o=TR(t,h,f),o.finally(()=>{if(o=null,i.trailing&&a&&!n){const d=l(h,a);return a=null,d}}),o),u=function(...h){return i.trailing&&(a=h),o||new Promise(f=>{const d=!n&&i.leading;clearTimeout(n),n=setTimeout(()=>{n=null;const g=i.leading?s:l(this,h);a=null;for(const p of r)p(g);r=[]},e),d?(s=l(this,h),f(s)):r.push(f)})},c=h=>{h&&(clearTimeout(h),n=null)};return u.isPending=()=>!!n,u.cancel=()=>{c(n),r=[],a=null},u.flush=()=>{if(c(n),!a||o)return;const h=a;return a=null,l(this,h)},u}async function TR(t,e,i){return await t.apply(e,i)}const SR=Symbol.for("nuxt:client-only"),ER=t=>t==="defer"||t===!1;function ch(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;RR(t[0],t[1])&&t.unshift(e);let[i,s,n={}]=t,r=!1;const o=nt(()=>$p(i));if(typeof o.value!="string")throw new TypeError("[nuxt] [useAsyncData] key must be a string.");if(typeof s!="function")throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");const a=Ce();n.server??=!0,n.default??=MR,n.getCachedData??=dv,n.lazy??=!1,n.immediate??=!0,n.deep??=Ui.deep,n.dedupe??="cancel",n._functionName,a._asyncData[o.value];function l(){const g={cause:"initial",dedupe:n.dedupe};return a._asyncData[o.value]?._init||(g.cachedData=n.getCachedData(o.value,a,{cause:"initial"}),a._asyncData[o.value]=op(a,o.value,s,n,g.cachedData)),()=>a._asyncData[o.value].execute(g)}const u=l(),c=a._asyncData[o.value];c._deps++;const h=n.server!==!1&&a.payload.serverRendered;{let g=function(b){const v=a._asyncData[b];v?._deps&&(v._deps--,v._deps===0&&v?._off())};const p=Pi();if(p&&h&&n.immediate&&!p.sp&&(p.sp=[]),p&&!p._nuxtOnBeforeMountCbs){p._nuxtOnBeforeMountCbs=[];const b=p._nuxtOnBeforeMountCbs;og(()=>{b.forEach(v=>{v()}),b.splice(0,b.length)}),Ya(()=>b.splice(0,b.length))}const _=p&&(p._nuxtClientOnly||zt(SR,!1));h&&a.isHydrating&&(c.error.value||c.data.value!=null)?(c.pending.value=!1,c.status.value=c.error.value?"error":"success"):p&&(!_&&a.payload.serverRendered&&a.isHydrating||n.lazy)&&n.immediate?p._nuxtOnBeforeMountCbs.push(u):n.immediate&&u();const w=ur(),y=je(o,(b,v)=>{if((b||v)&&b!==v){r=!0;const x=a._asyncData[v]?.data.value!==Ui.value,k=a._asyncDataPromises[v]!==void 0,R={cause:"initial",dedupe:n.dedupe};if(!a._asyncData[b]?._init){const S=n.getCachedData(b,a,{cause:"initial"});R.cachedData=S;const P=v&&x&&S===void 0?a._asyncData[v].data.value:S;a._asyncData[b]=op(a,b,s,n,P)}a._asyncData[b]._deps++,v&&g(v),(n.immediate||x||k)&&a._asyncData[b].execute(R),Qr(()=>{r=!1})}},{flush:"sync"}),m=n.watch?je(n.watch,()=>{r||(a._asyncData[o.value]?._execute.isPending()&&Qr(()=>{a._asyncData[o.value]?._execute.flush()}),a._asyncData[o.value]?._execute({cause:"watch",dedupe:n.dedupe}))}):()=>{};w&&Pp(()=>{y(),m(),g(o.value)})}const f={data:Go(()=>a._asyncData[o.value]?.data),pending:Go(()=>a._asyncData[o.value]?.pending),status:Go(()=>a._asyncData[o.value]?.status),error:Go(()=>a._asyncData[o.value]?.error),refresh:(...g)=>a._asyncData[o.value]?._init?a._asyncData[o.value].execute(...g):l()(),execute:(...g)=>f.refresh(...g),clear:()=>{const g=a._asyncData[o.value];if(g?._abortController)try{g._abortController.abort(new DOMException("AsyncData aborted by user.","AbortError"))}finally{g._abortController=void 0}fv(a,o.value)}},d=Promise.resolve(a._asyncDataPromises[o.value]).then(()=>f);return Object.assign(d,f),Object.defineProperties(d,{then:{enumerable:!0,value:d.then.bind(d)},catch:{enumerable:!0,value:d.catch.bind(d)},finally:{enumerable:!0,value:d.finally.bind(d)}}),d}function Go(t){return nt({get(){return t()?.value},set(e){const i=t();i&&(i.value=e)}})}function RR(t,e){return!(typeof t=="string"||typeof t=="object"&&t!==null||typeof t=="function"&&typeof e=="function")}function PR(t){const e=Ce();if(t in e.payload.data||(e.payload.data[t]=Ui.value),e._asyncData[t]){const i=e._asyncData[t];i._deps++,ur()&&Pp(()=>{i._deps--,i._deps===0&&i?._off()})}return{data:nt({get(){return e._asyncData[t]?.data.value??e.payload.data[t]},set(i){e._asyncData[t]?e._asyncData[t].data.value=i:e.payload.data[t]=i}})}}function fv(t,e){e in t.payload.data&&(t.payload.data[e]=void 0),e in t.payload._errors&&(t.payload._errors[e]=Ui.errorValue),t._asyncData[e]&&(t._asyncData[e].data.value=void 0,t._asyncData[e].error.value=Ui.errorValue,t._asyncData[e].pending.value=!1,t._asyncData[e].status.value="idle"),e in t._asyncDataPromises&&(t._asyncDataPromises[e]=void 0)}function CR(t,e){const i={};for(const s of e)i[s]=t[s];return i}function op(t,e,i,s,n){t.payload._errors[e]??=Ui.errorValue;const r=s.getCachedData!==dv,o=i,a=s.deep?oe:Ms,l=n!=null,u=t.hook("app:data:refresh",async h=>{(!h||h.includes(e))&&await c.execute({cause:"refresh:hook"})}),c={data:a(l?n:s.default()),pending:Ms(!l),error:Su(t.payload._errors,e),status:Ms("idle"),execute:(...h)=>{const[f,d=void 0]=h,g=f&&d===void 0&&typeof f=="object"?f:{};if(t._asyncDataPromises[e]&&ER(g.dedupe??s.dedupe))return t._asyncDataPromises[e];if(g.cause==="initial"||t.isHydrating){const w="cachedData"in g?g.cachedData:s.getCachedData(e,t,{cause:g.cause??"refresh:manual"});if(w!=null)return t.payload.data[e]=c.data.value=w,c.error.value=Ui.errorValue,c.status.value="success",Promise.resolve(w)}c.pending.value=!0,c._abortController&&c._abortController.abort(new DOMException("AsyncData request cancelled by deduplication","AbortError")),c._abortController=new AbortController,c.status.value="pending";const p=new AbortController,_=new Promise((w,y)=>{try{const m=g.timeout??s.timeout,b=AR([c._abortController?.signal,g?.signal],p.signal,m);if(b.aborted){const v=b.reason;y(v instanceof Error?v:new DOMException(String(v??"Aborted"),"AbortError"));return}return b.addEventListener("abort",()=>{const v=b.reason;y(v instanceof Error?v:new DOMException(String(v??"Aborted"),"AbortError"))},{once:!0,signal:p.signal}),Promise.resolve(o(t,{signal:b})).then(w,y)}catch(m){y(m)}}).then(async w=>{if(t._asyncDataPromises[e]!==_)return;let y=w;s.transform&&(y=await s.transform(w)),s.pick&&(y=CR(y,s.pick)),t.payload.data[e]=y,c.data.value=y,c.error.value=Ui.errorValue,c.status.value="success"}).catch(w=>{if(t._asyncDataPromises[e]!==_||c._abortController?.signal.aborted)return t._asyncDataPromises[e];if(typeof DOMException<"u"&&w instanceof DOMException&&w.name==="AbortError")return c.status.value="idle",t._asyncDataPromises[e];c.error.value=$i(w),c.data.value=ne(s.default()),c.status.value="error"}).finally(()=>{p.abort(),t._asyncDataPromises[e]===_&&(c.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=_,t._asyncDataPromises[e]},_execute:kR((...h)=>c.execute(...h),0,{leading:!0}),_default:s.default,_deps:0,_init:!0,_hash:void 0,_off:()=>{u(),t._asyncData[e]?._init&&(t._asyncData[e]._init=!1),t._asyncDataPromises[e]&&(c._abortController?.abort(new DOMException("AsyncData request cancelled by unmount","AbortError")),delete t._asyncDataPromises[e],c.status.value==="pending"&&(c.status.value="idle"),c.pending.value=!1),r||st(()=>{t._asyncData[e]?._init||(fv(t,e),c.execute=()=>Promise.resolve(),c.data.value=Ui.value)})}};return c}const MR=()=>Ui.value,dv=(t,e,i)=>{if(e.isHydrating)return e.payload.data[t];if(i.cause!=="refresh:manual"&&i.cause!=="refresh:hook")return e.static.data[t]};function AR(t,e,i){const s=t.filter(o=>!!o);if(typeof i=="number"&&i>=0){const o=AbortSignal.timeout?.(i);o&&s.push(o)}if(AbortSignal.any)return AbortSignal.any(s);const n=new AbortController;for(const o of s)if(o.aborted){const a=o.reason??new DOMException("Aborted","AbortError");try{n.abort(a)}catch{n.abort()}return n.signal}const r=()=>{const a=s.find(l=>l.aborted)?.reason??new DOMException("Aborted","AbortError");try{n.abort(a)}catch{n.abort()}};for(const o of s)o.addEventListener?.("abort",r,{once:!0,signal:e});return n.signal}var cc,ap;function OR(){if(ap)return cc;ap=1;function t(e,i,s){return e*(1-s)+i*s}return cc=t,cc}var uc,lp;function FR(){if(lp)return uc;lp=1;const t=OR();function e(i,s,n,r,o=60){if(typeof r>"u")return t(i,s,n);const a=r/(1/o),l=1-n;return t(i,s,1-Math.pow(l,a))}return uc=e,uc}var NR=FR();const DR=nv(NR),LR=({inner:t,outer:e,ease:i=.1,velocity:s,enabled:n=!0})=>{const{$event:r}=Ce(),o={t:0,c:0};let a=0;const l=()=>{t.value&&(t.value.style.transform=`translate3d(0px, ${-o.c}px, 0px)`)},u=()=>{!t.value||!e.value||(a=Math.max(0,t.value.scrollHeight-lc(e.value).height),o.t=Math.min(o.t,a),l())},c=w=>{o.t=Math.min(a,Math.max(0,w))},h=w=>{c(w),o.c=o.t,l()},f=({deltaY:w,event:y})=>{ne(n)&&(y?.ctrlKey||c(o.t+w))},d=()=>Math.max(0,a-o.t),g=(w,y=0,m=1/0)=>{if(!w||!e.value||!t.value?.contains(w))return;const b=lc(e.value),v=lc(w),x=window.visualViewport,k=Math.max(b.top,x?x.offsetTop:b.top)+y,R=Math.min(b.bottom,x?x.offsetTop+x.height:b.bottom,m)-y,S=o.t-o.c,P=v.top-S,A=v.bottom-S;A-P>R-k||P<k?c(o.t+P-k):A>R&&c(o.t+A-R)},p=({ratio:w})=>{o.c!==o.t&&(o.c=Math.round(DR(o.c,o.t,i*Math.min(w,2))*100)/100,Math.abs(o.t-o.c)<.1&&(o.c=o.t),l()),s?.(o.t-o.c)},_=()=>{o.t=0,o.c=0,l()};return Qt(()=>{r.on("vs",f),r.on("tick",p),r.on("resize",u)}),Jt(()=>{r.off("vs",f),r.off("tick",p),r.off("resize",u)}),{measure:u,reset:_,to:c,jump:h,left:d,reveal:g}},IR=["inert","aria-label","aria-expanded"],zR={class:"grid justify-items-start","aria-hidden":"true"},BR=["inert"],UR={class:"absolute inset-0 overflow-clip"},VR=["href","aria-current","onClick"],cp=.3,HR=17,GR=6,$R=1.5,jR=2,qR=4,WR=40,up=1,hp=1.5,KR="a, button, input, textarea, select, [data-info]",YR={__name:"index",props:{live:{type:Boolean,default:!1},ground:{type:Function,default:null}},emits:["room"],setup(t,{expose:e,emit:i}){const s=t,n=i,r={duration:.35,ease:"power1.out"},o={duration:.5,ease:"snappy"},a=Mt("ground").map(U=>U*.8+.2),{out:l,in:u,travel:c}=oh,{$gl:h,$event:f,$resize:d}=Ce(),g=hv(),p=_R(),_=lh(),{data:w}=PR("works"),y=oe(null),m=oe(null),b=oe(null),v=oe(null),x=oe(null),k=oe(null),R=oe(null),S=oe(null),P=oe(null),A=[],M=[],D=[],F=[],O=U=>U&&!F.includes(U)&&F.push(U),C=Mi(["",""]),L=oe(""),q=oe(!1),ce=oe(-1),he=nt(()=>d.small),fe=nt(()=>uv(w.value).map(U=>({slug:U.slug,title:ea(U.title),items:U.ks.map(ue=>({k:ue,slug:w.value[ue].slug,title:ea(w.value[ue].title||"")}))})));let ae=0,ie="",xe=1,pe=!1,we=!1,I=null,J=null,X=null,ee=[],ge=null,Se=null;const T={alpha:0},E={h:0};let N=0;const $=[],B=[],H=U=>h.planeOf(De(A[U])),Z=U=>h.planeOf(De(M[U])),K=U=>h.planeOf(De(D[U])),Q=(U=ae)=>{const ue=De(A[U])?.offsetWidth||0;n("room",Math.max(HR,ue/Si()+GR))},j=U=>{const ue=U?h.background(U):null;return ue&&(ue.u.custom=[0,0,0,0]),ue},W=()=>{const U=De(v),ue=De(b);if(!U||!ue||!ge||!Se)return;ge.u.fadeX=$R*Si(),h.host(A.map(De).filter(Boolean),U),h.host([U,De(x),...F].filter(Boolean),ue);const et=s.ground?.();et&&h.host([ue],et)},V=()=>De(R),Y=()=>{const U=h.planeOf(V());U&&(h.border(U,a,1),U.u.rim=d.small?0:1,U.u.fade=hp*Si(),h.host([...M,...D].map(De).filter(Boolean),V()))},re=(U,ue)=>{z.killTweensOf(ue,"progress"),ue.progress=we&&U===ae?1:0,W()},me=(U,ue)=>{z.killTweensOf(ue,"progress"),ue.progress=$[U]?1:0,Y()},be=(U,ue)=>{z.killTweensOf(ue,"progress"),ue.progress=B[U]?1:0,Y()},Te=async()=>{if(pe||ie===C[ae])return;if(!we){C[ae]=ie,L.value=ie,await st(),Q();return}pe=!0;const U=1-ae;C[U]=ie,L.value=ie,await st(),Q(U);const ue=H(ae),et=H(U),lt=l*(ue?.progress??0);ue?.conceal(l,0,-xe,c),we&&et?.reveal(u,lt,xe,c),ae=U,J=z.delayedCall(lt+u,()=>{pe=!1,Te()})},Ae=(U,ue)=>{ie=U,ue&&(xe=ue),Te()},se=U=>{U&&(ce.value=U.k??-1,Ae(ea(U.title||""),U.dir))},le=U=>{if(we===U)return;we=U,I?.kill(),W();const ue=H(ae);if(U){ue?.reveal(u,cp,1,c),I=z.delayedCall(cp,()=>q.value=!0);return}ue?.conceal(l,0,-1,c),q.value=!1,g.value=!1},ke=()=>{for(const U of ee)U.u.custom[3]=T.alpha},Be=oe(!1),We=nt(()=>g.value&&Be.value);je(We,U=>p.value=U,{flush:"sync"});let G=!1;const Re=LR({inner:P,outer:S,enabled:We,velocity:U=>{g.value&&((U||G)&&at(),G=!!U)}}),Ne=()=>{const U=k.value,ue=P.value,et=S.value;if(!U||!ue||!et)return;const lt=Si();if(d.small){const _n=document.querySelector("[data-ticker]");U.style.left="0px",U.style.top=`${_n?_n.getBoundingClientRect().bottom:0}px`,U.style.setProperty("--gap","0px")}const hi=ue.querySelector("a"),ht=hi?parseFloat(getComputedStyle(hi).paddingLeft)||0:jR*lt;let ct=0;for(const _n of[...M,...D])ct=Math.max(ct,De(_n)?.offsetWidth||0);const Pe=parseFloat(U.style.left)||0;U.style.width=`${d.small?window.innerWidth:Math.min(ct+ht*2,window.innerWidth-Pe-up*lt)}px`;const Ue=document.querySelector("[data-dock]"),Ut=Ue?.getClientRects().length?Ue.getBoundingClientRect().top-up*lt:window.innerHeight-qR*lt,$s=parseFloat(U.style.top)||U.offsetTop;N=Math.max(0,Math.min(ue.scrollHeight,WR*lt,Ut-$s)),et.style.height=`${N}px`,Re.measure()},at=()=>{const U=k.value;if(!U||(U.style.height=`${E.h}px`,!g.value))return;const ue=U.getBoundingClientRect().top,et=(lt,hi,ht)=>lt.forEach((ct,Pe)=>{if(hi[Pe])return;const Ue=De(ct)?.getBoundingClientRect(),Ut=Ue?Ue.top+Ue.height/2:-1/0;Ut<ue||Ut>ue+E.h||(hi[Pe]=!0,ht(Pe)?.reveal(u,0,1,c))});et(M,$,Z),et(D,B,K)},xt=()=>{const U=De(M[ce.value]);!U||!P.value||Re.jump(U.offsetTop+U.offsetHeight/2-N/2)},Wi=U=>{if(z.killTweensOf(E),U){Ne(),E.h<1&&xt(),Y(),z.to(E,{h:N,...o,onUpdate:at});return}const ue=(et,lt,hi)=>et.forEach((ht,ct)=>{lt[ct]&&(lt[ct]=!1,hi(ct)?.conceal(l,0,-1,c))});ue(M,$,Z),ue(D,B,K),z.to(E,{h:0,...o,onUpdate:at})},Ki=U=>{U.pointerType==="mouse"&&s.live&&(g.value=!0)},Bt=U=>{U.pointerType!=="mouse"||y.value?.contains(U.relatedTarget)||(g.value=!1)},Gs=()=>{const U=X==="mouse";if(X=null,U){g.value=!0;return}g.value=!g.value},bn=U=>U.metaKey||U.ctrlKey||U.shiftKey||U.altKey||(U.button??0)!==0,gr=(U,ue)=>{if(bn(ue))return;ue.preventDefault(),g.value=!1;const et=()=>{f.off("tick",et),f.emit("sheet:to",U)};f.on("tick",et)},pl=U=>Re.reveal(U.target,hp*Si()),ws=U=>{const ue=k.value?.getBoundingClientRect();Be.value=!!ue&&ue.height>0&&U.clientX>=ue.left&&U.clientX<=ue.right&&U.clientY>=ue.top&&U.clientY<=ue.bottom};je(q,U=>{z.killTweensOf(T),z.to(T,{alpha:U?1:0,...r,onUpdate:ke})}),je(()=>s.live,le),je(()=>d.small,()=>g.value=!1),je([_.about,_.contact],([U,ue])=>{(U||ue)&&(g.value=!1)});let mr=null;const vr=U=>{U.stopPropagation(),U.preventDefault()},yr=U=>{const ue=U.target;y.value?.contains(ue)||ue.closest?.("[data-menu-trigger]")||(g.value=!1,!ue.closest?.(KR)&&(clearTimeout(mr),window.addEventListener("click",vr,{capture:!0,once:!0}),mr=setTimeout(()=>window.removeEventListener("click",vr,{capture:!0}),700)))};je(g,U=>{U?window.addEventListener("pointerdown",yr,!0):window.removeEventListener("pointerdown",yr,!0),Wi(U)});const Ai=()=>{Q(),W(),g.value&&(Ne(),Y(),z.killTweensOf(E),E.h=N,at())};return Qt(async()=>{f.on("sheet:named",se),f.on("resize",Ai),f.emit("sheet:ask"),window.addEventListener("pointermove",ws,{passive:!0}),window.addEventListener("pointerdown",ws,{passive:!0}),window.addEventListener("wheel",ws,{passive:!0,capture:!0}),await st(),await h.booted,ee=F.filter(U=>U.isConnected).map(U=>h.hairline(U,{alpha:0})).filter(Boolean);for(const U of ee)U.u.inked=0;ge=j(De(v)),Se=j(De(b)),W(),Y()}),Jt(()=>{f.off("sheet:named",se),f.off("resize",Ai),window.removeEventListener("pointerdown",yr,!0),window.removeEventListener("click",vr,{capture:!0}),clearTimeout(mr),window.removeEventListener("pointermove",ws),window.removeEventListener("pointerdown",ws),window.removeEventListener("wheel",ws,{capture:!0}),I?.kill(),J?.kill(),z.killTweensOf(T),z.killTweensOf(E),g.value=!1,p.value=!1}),e({trigger:m,wipe:b,drop:k}),(U,ue)=>{const et=dl,lt=lv,hi=fl;return Ee(),Ge("div",{ref_key:"root",ref:y,"data-cut":"",class:"contents"},[ye("button",{ref_key:"trigger",ref:m,type:"button","data-menu-trigger":"",class:It(["absolute left-0 top-0 z-43 hidden cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-x-15 px-15 s:grid",t.live?"pointer-events-auto":"pointer-events-none"]),inert:!t.live,"aria-label":ne(L)?`Projects: ${ne(L)}`:"Projects","aria-expanded":ne(g),"aria-controls":"project-menu",onPointerdown:ue[0]||(ue[0]=ht=>ot(X)?X.value=ht.pointerType:X=ht.pointerType),onPointerenter:Ki,onPointerleave:Bt,onClick:Gs},[ye("span",{ref_key:"wipe",ref:b,class:"pointer-events-none absolute inset-y-0 left-0 right-0 z-[41]"},null,512),ye("span",{ref:O,class:"pointer-events-none absolute inset-y-0 left-0 z-[41] w-[1px]"},null,512),ye("span",{ref:O,class:"pointer-events-none absolute inset-y-0 right-0 z-[41] w-[1px]"},null,512),ye("span",{ref_key:"room",ref:v,class:"pointer-events-none absolute inset-y-0 left-0 right-30 z-[41]"},null,512),ye("span",zR,[(Ee(!0),Ge(Ye,null,hn(ne(C),(ht,ct)=>(Ee(),ti(et,{key:ct,ref_for:!0,ref:Pe=>A[ct]=Pe,tag:"span",class:"type-list relative z-43 whitespace-nowrap text-ink [grid-area:1/1]",text:ht||" ",reveal:!1,ink:!1,hover:"",lit:ne(g),onBorn:Pe=>re(ct,Pe)},null,8,["text","lit","onBorn"]))),128))]),_e(lt,{ref_key:"chevron",ref:x,class:"relative z-43 w-15 aspect-square",up:ne(g),shown:ne(q),hover:"",lit:ne(g),"aria-hidden":"true"},null,8,["up","shown","lit"])],42,IR),ye("nav",{id:"project-menu",ref_key:"drop",ref:k,"aria-label":"Projects",class:It(["absolute left-0 top-0 z-44 block h-0 before:absolute before:inset-x-0 before:bottom-full before:h-[var(--gap,0px)] before:content-['']",ne(g)?"pointer-events-auto":"pointer-events-none"]),inert:!ne(g),onPointerenter:Ki,onPointerleave:Bt},[_e(hi,{ref_key:"panel",ref:R,class:"pointer-events-none absolute inset-0 z-44 rounded-none bg-black s:rounded-20"},null,512),ye("div",UR,[ye("div",{ref_key:"outer",ref:S,class:"absolute inset-x-0 top-0"},[ye("ul",{ref_key:"inner",ref:P,class:"flex flex-col py-15 will-change-transform",onFocusin:pl},[(Ee(!0),Ge(Ye,null,hn(ne(fe),(ht,ct)=>(Ee(),Ge("li",{key:ht.slug||"other",class:It(ct&&"mt-20")},[_e(et,{ref_for:!0,ref:Pe=>D[ct]=Pe,tag:"p",class:"relative z-45 whitespace-nowrap px-20 py-5 s:px-15 font-mono font-medium text-11 uppercase text-ink/50",text:ht.title,reveal:!1,ink:!1,onBorn:Pe=>be(ct,Pe)},null,8,["text","onBorn"]),ye("ul",null,[(Ee(!0),Ge(Ye,null,hn(ht.items,Pe=>(Ee(),Ge("li",{key:Pe.slug},[ye("a",{href:`/projects/${Pe.slug}`,class:"flex px-20 py-5 s:px-15","aria-current":Pe.k===ne(ce)?"page":void 0,onClick:Ue=>gr(Pe.k,Ue)},[_e(et,{ref_for:!0,ref:Ue=>M[Pe.k]=Ue,tag:"span",class:"type-list relative z-45 whitespace-nowrap text-ink",text:Pe.title,reveal:!1,ink:!1,hover:"",lit:Pe.k===ne(ce)&&!ne(he),onBorn:Ue=>me(Pe.k,Ue)},null,8,["text","lit","onBorn"])],8,VR)]))),128))])],2))),128))],544)],512)])],42,BR)],512)}}},Fn={desk:{globe:25,gap:4},phone:{globe:17.5,gap:3},pad:2,window:{x:1.6,y:1,clear:.55}},pv="w-150 s:w-300",gv="/logo.svg?v=3";let Cr=null;const XR=()=>{const t=window.innerWidth,e=window.innerHeight;if(Cr?.w===t&&Cr.h===e)return Cr;const i=document.querySelector("[data-opening]")?.getBoundingClientRect();if(!i?.width)return{w:t,h:e,x:t/2,y:e/2};const s=window.devicePixelRatio||1,n=r=>Math.round(r*s)/s;return Cr={w:t,h:e,x:n(i.left)+i.width/2,y:n(i.top)+i.height/2},Cr},mv=t=>{const e=Si(),i=t?Fn.phone:Fn.desk,s=document.querySelector("[data-logo]"),n=s?.offsetWidth||0,r=s?.offsetHeight||0,o=i.globe*e,a=i.gap*e,l=(window.innerHeight-(r+a+o))/2,u=window.innerWidth/2,c=Math.max(n,o)+Fn.pad*2*e;return{start:XR(),logo:{x:u,y:l+r/2,w:n,h:r},ball:{x:u,top:l+r+a,d:o},hole:{left:u-c/2,top:l-Fn.pad*e,width:c,height:r+a+o+Fn.pad*2*e}}},vv=(t,e,i)=>{const{spring:s,ramp:n}=wi.intro.reveal,r=new Hi(0,s),o={v:0},a=z.to(o,{v:1,...n}),l=()=>{a.kill(),t.off("tick",u)},u=({ratio:c=1})=>{r.setTarget(o.v),r.step(Math.max(c,.25)/60),e(Math.min(1,r.value)),o.v>=1&&r.sleeping&&(l(),i?.())};return t.on("tick",u),l},yv=()=>({phase:yn("intro:phase",()=>"load"),staged:yn("intro:staged",()=>!1)}),QR=40,fp=12,uh=()=>yn("head:compact",()=>!1),hC=({live:t,view:e})=>{const{$event:i}=Ce(),s=uh();let n=0;const r={id:null,x:0,y:0,dx:0,dy:0,at:0,peak:0,way:0,axis:null,owed:0},o=p=>{n=Math.max(0,n+(s.value?-p:p)),!(n<QR)&&(n=0,s.value=!s.value)},a=()=>{if(r.axis||r.dx+r.dy<fp)return;r.axis=r.dx>r.dy?"x":"y";const p=r.owed;r.owed=0,r.axis==="y"&&t()&&o(p)},l=p=>{r.at+=p;const _=r.at-r.peak;_*r.way>0?r.peak=r.at:Math.abs(_)>=fp&&(r.way=Math.sign(_),r.peak=r.at)},u=p=>p?!!p.type?.startsWith("touch"):r.id!==null,c=({deltaY:p=0,deltaX:_=0,event:w})=>{if(!t()){n=0;return}if(!(!p||w?.ctrlKey)){if(!u(w)){Math.abs(p)>Math.abs(_)&&o(p);return}if(w?.type==="touchend"){r.owed=0,r.axis==="y"&&Math.sign(p)===r.way&&o(p);return}r.axis?r.axis==="y"&&o(p):r.owed+=p}},h=p=>{p.isPrimary&&(r.id=p.pointerId,r.x=p.clientX,r.y=p.clientY,r.dx=0,r.dy=0,r.at=0,r.peak=0,r.way=0,r.axis=null,r.owed=0)},f=p=>{p.pointerId===r.id&&(r.dx+=Math.abs(p.clientX-r.x),r.dy+=Math.abs(p.clientY-r.y),l(r.y-p.clientY),r.x=p.clientX,r.y=p.clientY,a())},d=p=>{p.pointerId===r.id&&(r.id=null)},g=()=>{n=0,s.value=!1};return je(e,g),Qt(()=>{g(),i.on("vs",c),window.addEventListener("pointerdown",h,{passive:!0}),window.addEventListener("pointermove",f,{passive:!0}),window.addEventListener("pointerup",d,{passive:!0}),window.addEventListener("pointercancel",d,{passive:!0})}),Jt(()=>{i.off("vs",c),window.removeEventListener("pointerdown",h),window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),g()}),s},JR={class:"grid h-full grid-cols-6 grid-rows-[auto] content-center px-20 s:grid-cols-11 s:grid-rows-3 s:content-normal s:px-0"},ZR={"data-nav":"",class:"pointer-events-auto relative z-43 col-span-3 col-start-4 row-start-1 flex grid-cols-2 items-center justify-end gap-x-15 s:col-span-1 s:col-start-1 s:grid s:justify-normal s:gap-x-[normal] s:[align-items:normal]"},eP=["aria-label","aria-expanded"],tP={"data-nav":"",class:"pointer-events-auto relative z-42 col-start-11 col-span-1 row-start-1 hidden grid-cols-2 s:grid"},iP={class:"relative flex items-center justify-center"},sP={class:"relative flex items-center justify-center"},nP={class:"relative col-start-1 col-span-1 row-start-2 row-span-2 hidden s:block"},rP={class:"absolute inset-0 flex items-center justify-center"},oP={class:"relative w-[35rem] shrink-0 aspect-square [clip-path:inset(5.5rem_0_11.5rem)]"},aP={class:"relative col-start-2 col-span-3 row-start-2 hidden s:block"},lP={class:"absolute inset-0 flex items-center justify-center"},cP={class:"relative col-span-4 col-start-1 row-start-1 s:col-span-3 s:col-start-5 s:row-start-2"},uP={class:"static inset-0 flex items-center justify-start s:absolute s:justify-center"},hP={class:"relative col-start-8 col-span-3 row-start-2 hidden s:block"},fP={class:"absolute inset-0 flex items-center justify-center"},Js="hidden s:block",dP=-1,pP=1,gP=.75,$o=1,mP=.35,vP={__name:"index",setup(t){const{$gl:e,$event:i,$resize:s}=Ce(),r=[...[9.091,36.364,63.636,90.909].map(G=>({c:Js,s:{left:`${G}%`,top:"0",width:"1px",height:"100%"}})),{c:Js,s:{left:"0",top:"33.333%",width:"36.364%",height:"1px"}},{c:Js,s:{left:"63.636%",top:"33.333%",right:"0",height:"1px"}},{c:Js,s:{left:"9.091%",top:"66.667%",width:"27.273%",height:"1px"}},{c:Js,s:{left:"63.636%",top:"66.667%",width:"27.273%",height:"1px"}},{c:Js,s:{left:"4.545%",top:"0",width:"1px",height:"33.333%"}},{c:Js,s:{left:"95.455%",top:"0",width:"1px",height:"33.333%"}}],o=[],a=G=>G&&!o.includes(G)&&o.push(G),l=_i(),u=nl(),c=G=>G==="/"||G==="/about"||G==="/contact"||G.startsWith("/projects/"),h=()=>{if(c(u.path)){i.emit("door","home");return}l.push("/")},f=()=>i.emit("door","about"),d=()=>i.emit("door","contact"),g=lh(),p=g.contact,_=g.about,w=nt(()=>_.value&&!s?.small),y=oe(null),m=oe(null),{out:b,in:v,travel:x}=oh,k=()=>{const G=V(De(y)),te=V(De(m));return G&&te?[G,te]:null},R=()=>{const G=V(De(y)),te=V(De(m)),Ne=g.about.value&&s.small;G&&(z.killTweensOf(G,"progress"),G.progress=Ne?0:1),te&&(z.killTweensOf(te,"progress"),te.progress=Ne?1:0)},S=G=>{const te=k();if(!te||!s.small)return;const[Re,Ne]=te,[at,xt]=G?[Re,Ne]:[Ne,Re],Wi=b*at.progress;at.conceal(b,0,dP,x),xt.reveal(v,Wi,pP,x)};je(g.about,S);const P=oe(null);pr(P,G=>e.simple(G,{src:gv,ink:!0,fade:!1}),{early:!0});const{phase:A}=yv(),M={v:0};let D=0;const F=G=>{D=G,me()};let O=null;const C={x:0,y:0},L=()=>{const G=P.value.getBoundingClientRect();return{x:G.left+G.width/2-C.x,y:G.top+G.height/2-C.y}},q=G=>{const te=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(O?.(),O=null,te||G==="done"){M.v=1,me();return}O=vv(i,Re=>{M.v=Re,me()})};je(A,G=>G!=="load"&&M.v<1&&q(G));const ce=oe(null),he=oe(null),fe=oe(null),ae=G=>{const te=De(he);te&&(te.style.transform=G?`translate3d(0, ${-G}px, 0)`:"")},ie={h:5.5,r:2,top:2.5,mark:17,room:17,logoScale:14/30,ctaInset:1,rgb:Mt("ground")},xe={gap:1},pe={gutter:1,radius:1,pillH:3.5,pillR:1,pillPad:1.5,pillType:15/18},we=oe(null),I=oe(null),J=oe(null),X=ie.rgb.map(G=>G*.8+.2),ee={v:0},ge=new Hi(0,{response:.65,dampingRatio:.75}),Se=new Hi(0,wi.tuck),T=new Hi(ie.room,wi.room),E=wi.press,N=new Hi(1,{response:E.response,dampingRatio:E.dampingRatio});let $=!1,B={x:.5,y:.5};const H=(G,te)=>{if($!==G){if($=G,G&&te&&P.value){const Re=P.value.getBoundingClientRect();Re.width&&Re.height&&(B={x:(te.clientX-Re.left)/Re.width,y:(te.clientY-Re.top)/Re.height})}N.setParams(G?E:E.release),N.setTarget(G?E.scale:1)}},Z=()=>De(ce);let K=0,Q=0;const j=()=>{const G=Z()?.parentElement;G&&(G.style.removeProperty("--head"),K=G.getBoundingClientRect().height)},W=()=>{const G=Z(),te=G?.parentElement;if(!G||!te)return;const Re=[...o,M.v>=1?P.value:null,...te.querySelectorAll('[data-gl="text"], button [data-gl="sheet"]')].filter(Ne=>Ne&&!Ne.closest("[data-nav], [data-cut]"));e.host(Re,G)},V=G=>e.planeOf(G);let Y=!1;const re=G=>{if(Y===G)return;const te=Z(),Re=te?.parentElement?.querySelector("canvas");Re&&(e.host([Re],G?te:null),Y=G)},me=()=>{const G=Z();if(!G)return;const te=Si(),Re=G.parentElement,Ne=Re?.clientWidth||window.innerWidth,at=ge.value,xt=(Pe,Ue)=>Pe+(Ue-Pe)*at,Wi=Math.max(0,at),Ki=s.small?1-(1-gP)*Se.value:1,Bt=K*Ki,Gs=(De(we.value?.label)?.offsetWidth||0)*pe.pillType+pe.pillPad*2*te,bn=(ie.mark+T.value+ie.ctaInset*2)*te+Gs,gr=(Ne-bn)/2,pl=xt(Ne+$o*2,bn),ws=xt(Bt+$o,ie.h*te),mr=xt(-$o,gr),vr=xt(-$o,ie.top*te),yr=ie.r*te*Wi;G.style.left=`${mr}px`,G.style.top=`${vr}px`,G.style.width=`${pl}px`,G.style.height=`${ws}px`,G.style.right="auto",G.style.bottom="auto";const Ai=V(G);Ai&&(Ai.u.radius=yr,Ai.u.custom[0]=ie.rgb[0],Ai.u.custom[1]=ie.rgb[1],Ai.u.custom[2]=ie.rgb[2],e.border(Ai,X,1),Ai.u.rim=ee.v);let U=-1/0;if(P.value){const Pe=(P.value.offsetWidth||0)/te,Ue=(Ki-1)*Pe*te/2;let Ut=0,$s=0;for(let xi=P.value;xi&&xi!==G.parentElement;xi=xi.offsetParent)Ut+=xi.offsetLeft,$s+=xi.offsetTop;const _n=($s+(P.value.offsetHeight||0)/2)/te,wv=ie.top+ie.h/2,bv=(ie.mark*te/2-bn/2)*at,_v=(wv-_n)*te*at;let hh=0,fh=0;if(M.v<1){const{start:xi,logo:ph}=mv(s.small),gh=L();hh=(xi.x+(ph.x-xi.x)*D-gh.x)*(1-M.v),fh=(xi.y+(ph.y-xi.y)*D-gh.y)*(1-M.v)}C.x=bv+Ue+hh,C.y=_v+fh;const dh=xt(1,ie.logoScale)*Ki;P.value.style.transform=`translate(${C.x}px, ${C.y}px) scale(${dh})`,U=Ut+C.x+Pe*te*(1+dh)/2}const ue=we.value?.el??we.value?.$el,et=I.value;if(ue&&et){const Pe=pe.pillH*te,Ue=et.getBoundingClientRect(),Ut=gr+bn;ue.style.left=`${xt(pe.gutter*te,Ut-ie.ctaInset*te-Gs-Ue.left)}px`,ue.style.top=`${xt(pe.gutter*te,ie.top*te+(ie.h*te-Pe)/2-Ue.top)}px`,ue.style.width=`${xt(Ue.width-pe.gutter*2*te,Gs)}px`,ue.style.height=`${xt(Ue.height-pe.gutter*2*te,Pe)}px`;const $s=V(De(we.value?.ground));$s&&($s.u.radius=xt(pe.radius,pe.pillR)*te),we.value.shrink(xt(1,pe.pillType))}const lt=De(J.value?.trigger);if(lt){const Pe=gr+ie.mark*te;lt.style.left=`${Pe}px`,lt.style.top=`${ie.top*te}px`,lt.style.width=`${T.value*te}px`,lt.style.height=`${ie.h*te}px`;const Ue=De(J.value?.wipe);Ue&&(Ue.style.left=`${Math.max(0,U-Pe)}px`);const Ut=De(J.value?.drop);Ut&&!s.small&&(Ut.style.left=`${Pe}px`,Ut.style.top=`${(ie.top+ie.h+xe.gap)*te}px`,Ut.style.setProperty("--gap",`${xe.gap*te}px`))}const hi=V(De(fe));hi&&(hi.u.alpha=Math.min(1,Wi));for(const Pe of o){const Ue=V(Pe);Ue&&(Ue.u.custom[3]=1-Math.min(1,Wi))}const ht=V(P.value);if(ht&&(ht.u.scale=N.value,ht.u.press[0]=B.x,ht.u.press[1]=B.y,ht.u.reach=E.reach,ht.u.depth=E.depth),W(),re(at>.01),!Re)return;Ki<1?Re.style.setProperty("--head",`${Bt}px`):Re.style.removeProperty("--head");const ct=K-Bt;ct!==Q&&(Q=ct,i.emit("head:rise",ct))},be=ah([ge,N,Se,T],me,{snap:[N,Se,T],auto:!1}),Te=G=>{if(Be.value){T.setTarget(G);return}T.snap(G),me()},Ae=uh();je(Ae,G=>Se.setTarget(G&&s.small?1:0));const se=()=>{j(),me()};let le=!1;const ke=G=>{le=G,We(G&&!s.small)},Be=oe(!1),We=G=>{Be.value=G,ge.setParams({response:.65,dampingRatio:G?.75:1}),ge.setTarget(G?1:0),z.to(ee,{v:G?1:0,duration:mP,ease:"power1.out"})};return je(()=>s.small,G=>{We(le&&!G),R(),Se.snap(Ae.value&&G?1:0),se()}),Qt(async()=>{await st(),j(),me(),i.on("intro:open",F),i.on("resize",se),await e.booted;for(const G of o)G.isConnected&&e.hairline(G);j(),be.start(),i.on("chrome",ke),i.on("ticker:lift",ae),await st(),W(),se()}),Jt(()=>{O?.(),i.off("intro:open",F),i.off("chrome",ke),i.off("ticker:lift",ae),i.off("resize",se)}),(G,te)=>{const Re=fl,Ne=B3,at=dl,xt=Y3,Wi=uR,Ki=YR;return Ee(),Ge("header",{class:It(["fixed inset-x-0 top-0 z-30 h-[var(--head,5rem)] [--floor:min(8px,0.75vw)] s:h-180",ne(Be)?"pointer-events-none":"pointer-events-auto"])},[_e(Re,{ref_key:"ground",ref:ce,class:"pointer-events-auto absolute inset-0 z-40 bg-black"},null,512),_e(Ne,{ref_key:"falloff",ref:he,class:"pointer-events-none absolute inset-x-0 top-90 z-33 h-90 bg-black s:top-full"},null,512),_e(Ne,{edge:"bottom",class:"pointer-events-none fixed inset-x-0 bottom-0 z-33 h-90 bg-black"}),_e(Ne,{ref_key:"veil",ref:fe,shade:!1,class:"pointer-events-none absolute inset-x-0 top-0 z-33 hidden h-90 bg-black s:block"},null,512),(Ee(),Ge(Ye,null,hn(r,(Bt,Gs)=>ye("div",{key:Gs,ref_for:!0,ref:a,class:It(["absolute z-[41]",Bt.c]),style:mo(Bt.s)},null,6)),64)),ye("div",JR,[ye("div",ZR,[ye("button",{type:"button",class:"relative hidden cursor-pointer items-center justify-center s:flex",onClick:h},[_e(at,{tag:"span",class:"type-label text-ink",text:"Home",reveal:!1,ink:!1,hover:""})]),ye("button",{type:"button",class:"relative grid cursor-pointer items-center justify-items-end s:justify-items-center","aria-label":ne(_)?"Close About":"About","aria-expanded":ne(_),onClick:f},[_e(at,{ref_key:"aboutLabel",ref:y,tag:"span",class:"type-label col-start-1 row-start-1 text-ink",text:"About",reveal:!1,ink:!1,hover:"",lit:ne(w),onBorn:R},null,8,["lit"]),_e(at,{ref_key:"closeLabel",ref:m,tag:"span",class:"type-label col-start-1 row-start-1 text-accent",text:"Close",reveal:!1,ink:!1,onBorn:R},null,512)],8,eP)]),ye("div",tP,[ye("div",iP,[_e(at,{tag:"a",href:"https://www.instagram.com/griflan/",target:"_blank",rel:"noopener","aria-label":"Instagram",class:"type-label text-ink after:absolute after:inset-0",text:"Insta",reveal:!1,ink:!1,hover:""})]),ye("div",sP,[_e(at,{tag:"a",href:"https://www.linkedin.com/company/griflan-design-inc/home/",target:"_blank",rel:"noopener","aria-label":"LinkedIn",class:"type-label text-ink after:absolute after:inset-0",text:"Link",reveal:!1,ink:!1,hover:""})])]),ye("div",nP,[ye("div",rP,[ye("div",oP,[_e(xt,{name:"flame-man_still",machine:"flame-man-still"})])])]),ye("div",aP,[ye("div",lP,[_e(at,{tag:"p",class:"serif text-ink [font-size:clamp(1.15rem,1.1vw,1.55rem)] whitespace-nowrap",text:"Graphics Designer | Video Editor | Motion Graphics",reveal:!1})])]),ye("div",cP,[ye("div",uP,[ye("div",{ref_key:"logo",ref:P,"data-logo":"",class:It(["pointer-events-auto relative z-[41] shrink-0 cursor-pointer aspect-[1652/242] origin-center",ne(pv)]),onClick:h,onPointerdown:te[0]||(te[0]=Bt=>H(!0,Bt)),onPointerup:te[1]||(te[1]=Bt=>H(!1)),onPointercancel:te[2]||(te[2]=Bt=>H(!1)),onPointerleave:te[3]||(te[3]=Bt=>H(!1))},null,34)])]),ye("div",hP,[ye("div",fP,[_e(at,{tag:"p",class:"serif text-ink [font-size:max(1.8rem,calc(1.8*var(--floor)))]",text:"“Stories in motion, designed to stick.”",reveal:!1})])]),ye("div",{ref_key:"ctaCell",ref:I,class:"relative z-42 col-start-11 col-span-1 row-start-2 row-span-2 hidden s:block"},[_e(Wi,{ref_key:"cta",ref:we,class:"pointer-events-auto absolute",text:"Start A Project",cross:"",close:"Close contact form",active:ne(p),onClick:d},null,8,["active"])],512)]),_e(Ki,{ref_key:"menu",ref:J,live:ne(Be),ground:Z,onRoom:Te},null,8,["live"])],2)}}},yP=6,dp=" • ",wP=(t,e,{paused:i=!1}={})=>(z.set(t,{x:0}),e>0?z.to(t,{x:-e,duration:e/(yP*Si()),ease:"none",repeat:-1,paused:i}):null),bP=t=>(document.fonts?.ready?.then(t),document.fonts?.addEventListener?.("loadingdone",t),()=>document.fonts?.removeEventListener?.("loadingdone",t)),_P=["AI agent startup TinyFish raises $47 million in ICONIQ-led round","Kaustubh Gondhali — Graphics Designer | Video Editor | Motion Graphics","Now booking projects for the new year"],xP=async()=>{const{$dato:t}=Ce(),{data:e}=await ch("news",()=>t.news());return nt(()=>{const i=(e.value||[]).map(ea).filter(Boolean);return i.length?i:_P})},kP=["inert","aria-label","aria-expanded"],TP={class:"grid items-center justify-items-start","aria-hidden":"true"},pp=2,SP=3.25,EP=1,RP=16.5,PP=15,CP={__name:"index",async setup(t){let e,i;const s={duration:.35,ease:"power1.out"},{$gl:n,$event:r,$resize:o}=Ce(),a=([e,i]=fg(()=>xP()),e=await e,i(),e),l=oe(null),u=oe(null),c=oe(null),h=oe(null),f=oe(null),d=oe(null),g=oe(null),p=oe(null),_=oe(null),w=oe(null),y=oe(null),m=hv(),b=oe(!1),v=oe(""),x=Mi([{text:a.value.join(dp),title:""},{text:"",title:""}]);let k=0;const R=[],S=[],P=[],A=De,M=W=>n.planeOf(W),D=[null,null];let F=null;const O=W=>{const V=R[W];if(D[W]?.kill(),D[W]=null,!!V){if(!l.value?.offsetWidth){z.set(V,{x:0});return}D[W]=wP(V,V.children[0]?.getBoundingClientRect().width||0)}},C=()=>{O(0),O(1),pe()};let L=0;const q=()=>{L=l.value?.getBoundingClientRect().height||0},ce=()=>{q(),C(),Se(),Z&&B()},he=W=>[A(S[W*2]),A(S[W*2+1]),A(P[W])].map(M).filter(Boolean),fe=(W,V)=>{for(const Y of he(W))z.to(Y,{alpha:V,...s,overwrite:"auto"})};let ae=!1;const ie=async({text:W,title:V})=>{const Y=1-k;if(ae){x[Y].text=W,x[Y].title=V;return}const re=x[k];if(re.text===W&&re.title===V){pe();return}if(!o.small){re.text=W,re.title=V;return}x[Y].text=W,x[Y].title=V,ae=!0,await st(),requestAnimationFrame(()=>{ae=!1,O(Y),fe(Y,1),fe(k,0),k=Y,pe()})},xe=new Hi(0,wi.room),pe=()=>{const W=l.value,V=A(P[k]);if(!W)return;let Y=0;if(b.value&&V?.offsetWidth){const re=Si();Y=Math.min(Math.max(V.offsetWidth+(pp+SP)*re,RP*re),W.offsetWidth-PP*re)}xe.setTarget(Math.max(0,Y))},we=new Hi(0,wi.tuck);let I=0,J=0,X=0;const ee=()=>{const W=l.value;if(!W)return;W.style.transform=I?`translate3d(0, ${-I}px, 0)`:"";const V=I+J;V!==X&&(X=V,n.wall?.reach(V),r.emit("ticker:lift",V))},ge=W=>{I=W,ee()},Se=()=>{const W=f.value,V=l.value;if(!W||!V)return;const Y=xe.value;xe.sleeping&&xe.target===0?W.style.removeProperty("--w"):W.style.setProperty("--w",`${Math.max(0,V.offsetWidth-Y)}px`),_.value&&(_.value.style.width=`${Math.max(0,Y)}px`);const re=M(g.value);re&&(re.u.alpha=Math.min(1,Math.max(0,Y/(pp*Si())))),J=o.small?we.value*L:0,c.value&&(c.value.style.transform=`translate3d(0, ${-J}px, 0)`),ee()};ah([xe,we],Se);const T=lh(),E=uh(),N=W=>{b.value=!!W?.detail,v.value=b.value&&W.title||"",b.value||xe.setTarget(0),$(),ie(b.value?{text:W.text||"",title:W.title||""}:{text:a.value.join(dp),title:""})},$=()=>{const W=E.value&&!b.value||T.about.value||T.contact.value?1:0;if(o.small){we.setTarget(W);return}we.snap(W),Se()},B=()=>{const W=M(A(u.value)),V=M(A(h.value)),Y=M(A(d.value));W&&(W.u.custom[3]=0),!K&&w.value&&(K=n.background(w.value),K&&(K.u.custom=[0,0,0,0])),K&&(K.u.fadeX=EP*Si()),n.host([A(h.value),A(d.value),K?w.value:null].filter(Boolean),A(u.value)),n.host([g.value,p.value,A(y.value)].filter(Boolean),A(h.value)),n.host(P.map(A).filter(Boolean),K?w.value:A(h.value)),n.host(S.map(A).filter(Boolean),A(d.value)),V&&(V.occludes=!0),Y&&(Y.occludes=!0)};let H=0,Z=!1,K=null;const Q=()=>{const W=M(A(u.value)),V=M(A(h.value)),Y=M(A(d.value)),re=[...S,...P].map(A).filter(Boolean),me=M(A(y.value));if((!W||!V||!Y||!me||re.some(be=>!M(be)))&&H++<240){requestAnimationFrame(Q);return}Z=!0,B();for(const be of he(1-k))be.alpha=0;C(),Se()},j=W=>{Z&&(B(),he(1-k).includes(W)&&(W.alpha=0))};return je([T.about,T.contact,E],$),Qt(async()=>{r.on("ticker",N),r.on("head:rise",ge),r.emit("ticker:ask"),q(),$(),await st(),await n.booted,g.value&&n.hairline(g.value),p.value&&n.hairline(p.value),Q(),r.on("resize",ce),F=bP(C)}),Jt(()=>{D.forEach(W=>W?.kill()),r.off("ticker",N),r.off("head:rise",ge),r.off("resize",ce),F?.()}),(W,V)=>{const Y=fl,re=dl,me=lv;return Ee(),Ge("div",{ref_key:"root",ref:l,"data-ticker":"",class:"pointer-events-none fixed inset-x-0 top-50 z-30 h-40 s:hidden"},[_e(Y,{ref_key:"win",ref:u,class:"absolute inset-0 z-36 bg-black"},null,512),ye("div",{ref_key:"slider",ref:c,class:"absolute inset-0 will-change-transform"},[_e(Y,{ref_key:"band",ref:h,class:"absolute inset-0 z-36 bg-black"},null,512),ye("button",{ref_key:"pick",ref:_,type:"button","data-menu-trigger":"",class:It(["absolute inset-y-0 left-0 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-10 pb-2 pl-20 pr-10",ne(b)?"pointer-events-auto":"pointer-events-none"]),inert:!ne(b),"aria-label":ne(v)?`Projects: ${ne(v)}`:"Projects","aria-expanded":ne(m),"aria-controls":"project-menu",onClick:V[0]||(V[0]=be=>m.value=!ne(m))},[ye("span",{ref_key:"room",ref:w,class:"pointer-events-none absolute inset-y-0 left-0 right-[2.25rem] z-36"},null,512),ye("span",TP,[(Ee(!0),Ge(Ye,null,hn(ne(x),(be,Te)=>(Ee(),ti(re,{key:`t${Te}`,ref_for:!0,ref:Ae=>P[Te]=Ae,tag:"span",class:"serif relative z-36 whitespace-nowrap text-12 text-ink [grid-area:1/1]",text:be.title||" ",reveal:!1,ink:!1,onBorn:j},null,8,["text"]))),128))]),_e(me,{ref_key:"chevron",ref:y,class:"relative z-37 w-[1.25rem] shrink-0 aspect-square",up:ne(m),shown:ne(b),"aria-hidden":"true"},null,8,["up","shown"])],10,kP),ye("div",{ref_key:"strip",ref:f,class:"absolute inset-y-0 right-0 overflow-hidden [width:var(--w,100%)]","aria-hidden":"true"},[_e(Y,{ref_key:"stripGround",ref:d,class:"absolute inset-0 z-37 bg-black"},null,512),ye("div",{ref_key:"edge",ref:g,class:"absolute inset-y-0 left-0 z-38 w-[1px]"},null,512),(Ee(!0),Ge(Ye,null,hn(ne(x),(be,Te)=>(Ee(),Ge("div",{key:`k${Te}`,ref_for:!0,ref:Ae=>R[Te]=Ae,class:"absolute inset-y-0 left-0 flex items-center pb-2 will-change-transform"},[(Ee(),Ge(Ye,null,hn(2,Ae=>_e(re,{key:Ae,ref_for:!0,ref:se=>S[Te*2+Ae-1]=se,tag:"span",class:"relative z-38 shrink-0 whitespace-nowrap pr-30 font-mono font-medium text-11 uppercase text-ink",text:be.text||" ",reveal:!1,ink:!1,onBorn:j},null,8,["text"])),64))]))),128))],512),ye("div",{ref_key:"rule",ref:p,class:"absolute inset-x-0 bottom-0 z-38 h-[1px]"},null,512)],512)],512)}}},MP=`<svg width="3304" height="484" viewBox="0 0 1652 242" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M195.65 138.13L195.65 142L161.05 142L161.05 138.13Q166.51 138.13 168.22 134.60Q169.94 131.08 169.94 123.27L169.94 30.73Q169.94 22.92 168.22 19.40Q166.51 15.87 161.05 15.87L161.05 12L195.65 12L195.65 15.87Q193.36 15.87 191.74 16.57Q190.12 17.27 189.17 18.38Q188.22 19.49 187.68 21.49Q187.14 23.49 186.98 25.55Q186.82 27.62 186.82 30.73L186.82 78.46Q189.17 74.97 194.31 67.35Q199.45 59.73 201.77 56.24Q204.09 52.75 208.15 46.31Q212.21 39.87 216.34 33.07Q220.78 25.46 217.99 20.66Q215.20 15.87 206.69 15.87L206.69 12L248.71 12L248.71 16.82Q246.55 16.82 244.40 17.46Q242.24 18.09 240.52 18.92Q238.81 19.74 236.81 21.46Q234.81 23.17 233.48 24.47Q232.15 25.77 230.11 28.28Q228.08 30.79 227 32.25Q225.92 33.71 223.77 36.69Q221.61 39.68 220.59 41.01Q217.86 44.69 213.45 50.69Q209.04 56.69 208.15 57.89L225.29 107.66Q230.30 122.07 233.03 127.27Q237.92 136.48 244.46 137.87Q245.79 138.13 247.25 138.13L247.25 142L206.31 142L206.31 138.13Q210.75 138.13 213.13 135.59Q215.51 133.05 213.99 127.72Q212.15 122.13 204.95 101.60Q197.74 81.06 195.77 75.16Q193.81 77.95 186.82 88.04L186.82 123.27Q186.82 126.38 186.98 128.45Q187.14 130.51 187.68 132.51Q188.22 134.51 189.17 135.62Q190.12 136.73 191.74 137.43Q193.36 138.13 195.65 138.13M282.93 138.13L282.93 142L244.78 142L244.78 138.13Q247.38 138.13 249.51 137.18Q251.63 136.22 253.44 134.29Q255.25 132.35 256.93 129.24Q258.61 126.13 260.17 122.10Q261.73 118.07 263.41 112.55Q265.09 107.02 266.87 100.65Q268.64 94.27 270.80 86.14Q271.25 84.55 271.44 83.73Q275.63 68.11 282.64 40.53Q289.65 12.95 289.91 12L295.75 12Q296 12.95 303.02 40.53Q310.03 68.11 314.22 83.73Q321.65 111.28 324.50 119.34Q329.01 132.10 334.02 135.91Q336.94 138.13 340.88 138.13L340.88 142L300.57 142L300.57 138.13Q303.56 138.13 305.90 136.26Q308.25 134.38 308.25 131.08Q308.25 129.30 302.54 107.66L272.52 107.66Q268.83 123.27 271.21 130.70Q273.60 138.13 282.93 138.13M273.66 102.45L301.21 102.45Q300.32 99.28 294.80 78.71Q289.27 58.15 286.93 49.32Q285.40 55.74 280.51 75.06Q275.63 94.39 273.66 102.45M372.68 138.13Q375.54 138.13 377.89 137.52Q380.24 136.92 381.95 136Q383.66 135.08 385.03 133.40Q386.39 131.72 387.25 130.29Q388.11 128.86 388.71 126.42Q389.31 123.97 389.60 122.26Q389.88 120.54 390.04 117.63Q390.20 114.71 390.23 113.05Q390.27 111.40 390.27 108.36L390.27 30.73Q390.27 22.92 388.55 19.40Q386.84 15.87 381.38 15.87L381.38 12L415.97 12L415.97 15.87Q413.69 15.87 412.07 16.57Q410.45 17.27 409.50 18.38Q408.55 19.49 408.01 21.49Q407.47 23.49 407.31 25.55Q407.15 27.62 407.15 30.73L407.15 107.91Q407.15 111.53 406.86 114.64Q406.58 117.75 405.69 121.56Q404.80 125.37 403.31 128.42Q401.82 131.46 399.18 134.45Q396.55 137.43 392.99 139.46Q389.44 141.49 384.23 142.73Q379.03 143.97 372.56 143.97Q366.08 143.97 360.88 142.73Q355.67 141.49 352.12 139.46Q348.56 137.43 345.93 134.45Q343.29 131.46 341.80 128.42Q340.31 125.37 339.42 121.56Q338.53 117.75 338.25 114.64Q337.96 111.53 337.96 107.91L337.96 30.73Q337.96 27.62 337.80 25.55Q337.64 23.49 337.10 21.49Q336.56 19.49 335.61 18.38Q334.66 17.27 333.04 16.57Q331.42 15.87 329.14 15.87L329.14 12L363.73 12L363.73 15.87Q361.45 15.87 359.83 16.57Q358.21 17.27 357.26 18.38Q356.31 19.49 355.77 21.49Q355.23 23.49 355.07 25.55Q354.91 27.62 354.91 30.73L354.91 108.36Q354.91 108.42 354.91 108.48Q354.91 113.12 355 115.56Q355.10 118.01 355.54 122.16Q355.99 126.32 357.13 128.61Q358.27 130.89 360.15 133.40Q362.02 135.91 365.19 137.02Q368.37 138.13 372.68 138.13M481.35 17.59L481.35 45.77L477.74 45.77Q474.94 33.20 467.87 24.60Q460.79 16 451.33 16Q445.62 16 440.89 19.24Q436.16 22.47 433.62 27.49Q431.08 32.50 431.08 37.90Q431.08 43.80 434.06 48.94Q437.05 54.08 441.78 58.15Q446.51 62.21 452.25 66.21Q457.99 70.21 463.77 74.68Q469.55 79.16 474.28 84.17Q479.01 89.19 481.99 96.30Q484.97 103.41 484.97 111.72Q484.97 117.63 482.91 122.83Q480.85 128.04 477.32 131.84Q473.80 135.65 469.20 138.41Q464.60 141.17 459.36 142.57Q454.12 143.97 448.73 143.97Q440.03 143.97 430.99 140.57Q421.94 137.18 417.43 132.48L417.43 100.42L421.05 100.42Q421.43 102.90 422.13 105.75Q422.83 108.61 424.16 112.36Q425.49 116.10 427.18 119.59Q428.86 123.08 431.33 126.51Q433.81 129.94 436.73 132.48Q439.65 135.02 443.55 136.57Q447.46 138.13 451.84 138.13Q459.65 138.13 464.34 131.94Q469.04 125.75 469.04 116.55Q469.04 111.15 467.23 106.36Q465.42 101.57 462.34 97.85Q459.26 94.14 455.30 90.74Q451.33 87.35 446.92 84.20Q442.51 81.06 438.09 77.89Q433.68 74.71 429.72 71.06Q425.75 67.42 422.67 63.42Q419.59 59.42 417.78 54.12Q415.97 48.82 415.97 42.79Q415.97 33.07 420.96 25.55Q425.94 18.03 434.41 14.03Q442.89 10.03 453.42 10.03Q460.98 10.03 467.29 11.97Q473.61 13.90 481.35 17.59M486.24 12L561.65 12L561.65 50.34L557.78 50.34Q556.89 42.98 555.21 37.45Q553.53 31.93 551.34 28.44Q549.15 24.95 546.07 22.70Q542.99 20.44 539.85 19.46Q536.71 18.47 532.58 18.09L532.58 123.27Q532.58 126.38 532.74 128.45Q532.90 130.51 533.44 132.51Q533.98 134.51 534.93 135.62Q535.88 136.73 537.50 137.43Q539.12 138.13 541.40 138.13L541.40 142L506.81 142L506.81 138.13Q509.09 138.13 510.71 137.43Q512.33 136.73 513.28 135.62Q514.23 134.51 514.77 132.51Q515.31 130.51 515.47 128.45Q515.63 126.38 515.63 123.27L515.63 18.09Q511.51 18.41 508.30 19.40Q505.09 20.38 501.98 22.60Q498.87 24.82 496.68 28.31Q494.49 31.80 492.78 37.36Q491.07 42.91 490.18 50.34L486.24 50.34L486.24 12M606.47 138.13Q609.32 138.13 611.67 137.52Q614.02 136.92 615.73 136Q617.45 135.08 618.81 133.40Q620.18 131.72 621.03 130.29Q621.89 128.86 622.49 126.42Q623.10 123.97 623.38 122.26Q623.67 120.54 623.83 117.63Q623.99 114.71 624.02 113.05Q624.05 111.40 624.05 108.36L624.05 30.73Q624.05 22.92 622.34 19.40Q620.62 15.87 615.16 15.87L615.16 12L649.76 12L649.76 15.87Q647.47 15.87 645.85 16.57Q644.23 17.27 643.28 18.38Q642.33 19.49 641.79 21.49Q641.25 23.49 641.09 25.55Q640.93 27.62 640.93 30.73L640.93 107.91Q640.93 111.53 640.65 114.64Q640.36 117.75 639.47 121.56Q638.59 125.37 637.09 128.42Q635.60 131.46 632.97 134.45Q630.33 137.43 626.78 139.46Q623.22 141.49 618.02 142.73Q612.81 143.97 606.34 143.97Q599.86 143.97 594.66 142.73Q589.45 141.49 585.90 139.46Q582.35 137.43 579.71 134.45Q577.08 131.46 575.58 128.42Q574.09 125.37 573.20 121.56Q572.32 117.75 572.03 114.64Q571.74 111.53 571.74 107.91L571.74 30.73Q571.74 27.62 571.59 25.55Q571.43 23.49 570.89 21.49Q570.35 19.49 569.40 18.38Q568.44 17.27 566.83 16.57Q565.21 15.87 562.92 15.87L562.92 12L597.52 12L597.52 15.87Q595.23 15.87 593.61 16.57Q591.99 17.27 591.04 18.38Q590.09 19.49 589.55 21.49Q589.01 23.49 588.85 25.55Q588.69 27.62 588.69 30.73L588.69 108.36Q588.69 108.42 588.69 108.48Q588.69 113.12 588.79 115.56Q588.88 118.01 589.33 122.16Q589.77 126.32 590.91 128.61Q592.06 130.89 593.93 133.40Q595.80 135.91 598.98 137.02Q602.15 138.13 606.47 138.13M693.56 142L651.03 142L651.03 138.13Q656.49 138.13 658.20 134.60Q659.91 131.08 659.91 123.27L659.91 30.73Q659.91 22.92 658.20 19.40Q656.49 15.87 651.03 15.87L651.03 12L690.95 12Q698.89 12 705.33 13.90Q711.77 15.81 716.69 19.71Q721.61 23.62 724.31 30.06Q727.01 36.50 727.01 45.01Q727.01 56.31 720.25 64.15Q713.49 71.99 703.33 75.16Q715.58 76.75 723.29 85.38Q731.01 94.01 731.01 107.41Q731.01 123.66 720.85 132.83Q710.69 142 693.56 142M676.80 17.71L676.80 71.79L683.02 71.79Q695.46 71.79 702.70 64.88Q709.93 57.96 709.93 45.39Q709.93 37.33 707.11 31.20Q704.28 25.08 698.09 21.39Q691.91 17.71 682.89 17.71L676.80 17.71M676.80 77.63L676.80 136.16L686.26 136.16Q691.78 136.16 696.41 134.51Q701.05 132.86 704.16 130.10Q707.27 127.34 709.46 123.59Q711.65 119.85 712.63 115.72Q713.61 111.59 713.61 107.15Q713.61 93.31 705.58 85.47Q697.56 77.63 683.02 77.63L676.80 77.63M794.74 123.27L794.74 77L758.05 77L758.05 123.27Q758.05 126.38 758.21 128.45Q758.37 130.51 758.91 132.51Q759.44 134.51 760.40 135.62Q761.35 136.73 762.97 137.43Q764.59 138.13 766.87 138.13L766.87 142L732.28 142L732.28 138.13Q737.74 138.13 739.45 134.60Q741.16 131.08 741.16 123.27L741.16 30.73Q741.16 22.92 739.45 19.40Q737.74 15.87 732.28 15.87L732.28 12L766.87 12L766.87 15.87Q764.59 15.87 762.97 16.57Q761.35 17.27 760.40 18.38Q759.44 19.49 758.91 21.49Q758.37 23.49 758.21 25.55Q758.05 27.62 758.05 30.73L758.05 71.16L794.74 71.16L794.74 30.73Q794.74 22.92 793.02 19.40Q791.31 15.87 785.85 15.87L785.85 12L820.45 12L820.45 15.87Q818.16 15.87 816.54 16.57Q814.92 17.27 813.97 18.38Q813.02 19.49 812.48 21.49Q811.94 23.49 811.78 25.55Q811.62 27.62 811.62 30.73L811.62 123.27Q811.62 126.38 811.78 128.45Q811.94 130.51 812.48 132.51Q813.02 134.51 813.97 135.62Q814.92 136.73 816.54 137.43Q818.16 138.13 820.45 138.13L820.45 142L785.85 142L785.85 138.13Q791.31 138.13 793.02 134.60Q794.74 131.08 794.74 123.27M902.97 71.54L902.97 67.67L937.56 67.67L937.56 71.54Q935.27 71.54 933.66 72.21Q932.04 72.87 931.09 74.02Q930.13 75.16 929.59 77.13Q929.05 79.09 928.90 81.16Q928.74 83.22 928.74 86.33L928.74 132.67Q924.36 137.87 915.63 140.92Q906.90 143.97 897.38 143.97Q887.41 143.97 879.16 138.70Q870.91 133.43 865.51 124.32Q860.12 115.21 857.17 103.06Q854.22 90.90 854.22 77Q854.22 63.10 857.20 50.94Q860.18 38.79 865.64 29.68Q871.10 20.57 879.38 15.30Q887.67 10.03 897.63 10.03Q907.41 10.03 913.63 12.51Q919.85 14.98 926.52 20.19L926.52 45.64L922.58 45.64Q918.64 30.34 912.36 23.11Q906.08 15.87 898.14 15.87Q890.71 15.87 885.45 20.51Q880.18 25.14 877.26 33.74Q874.34 42.34 873.04 52.91Q871.73 63.48 871.73 77Q871.73 88.49 872.50 97.57Q873.26 106.64 875.13 114.42Q877 122.20 879.99 127.31Q882.97 132.42 887.54 135.27Q892.11 138.13 898.14 138.13Q904.68 138.13 911.79 134.57L911.79 86.33Q911.79 83.22 911.63 81.16Q911.47 79.09 910.93 77.13Q910.39 75.16 909.44 74.02Q908.49 72.87 906.87 72.21Q905.25 71.54 902.97 71.54M945.40 103.09Q942.70 91.03 942.70 77Q942.70 62.97 945.40 50.91Q948.10 38.85 953.18 29.68Q958.25 20.51 966.22 15.27Q974.19 10.03 984.15 10.03Q994.12 10.03 1002.12 15.27Q1010.11 20.51 1015.26 29.68Q1020.40 38.85 1023.09 50.94Q1025.79 63.04 1025.79 77Q1025.79 90.96 1023.09 103.06Q1020.40 115.15 1015.26 124.32Q1010.11 133.49 1002.12 138.73Q994.12 143.97 984.15 143.97Q974.19 143.97 966.22 138.73Q958.25 133.49 953.18 124.32Q948.10 115.15 945.40 103.09M960.22 77Q960.22 93.88 963.20 107.79Q966.19 121.69 971.74 129.97Q977.30 138.25 984.41 138.25Q991.45 138.25 996.91 129.97Q1002.37 121.69 1005.29 107.79Q1008.21 93.88 1008.21 77Q1008.21 59.80 1005.29 45.96Q1002.37 32.12 996.91 24.06Q991.45 16 984.41 16Q977.30 16 971.74 24.16Q966.19 32.31 963.20 46.18Q960.22 60.05 960.22 77M1051.88 142L1026.36 142L1026.36 138.13Q1031.82 138.13 1033.54 134.60Q1035.25 131.08 1035.25 123.27L1035.25 30.73Q1035.25 22.92 1033.54 19.40Q1031.82 15.87 1026.36 15.87L1026.36 12L1050.93 12L1097.65 101.69L1097.65 30.73Q1097.65 22.92 1095.93 19.40Q1094.22 15.87 1088.76 15.87L1088.76 12L1114.28 12L1114.28 15.87Q1108.82 15.87 1107.11 19.40Q1105.39 22.92 1105.39 30.73L1105.39 143.97L1101.52 143.97L1042.99 35.55L1042.99 123.27Q1042.99 131.08 1044.71 134.60Q1046.42 138.13 1051.88 138.13L1051.88 142M1150.71 142L1116.12 142L1116.12 138.13Q1121.58 138.13 1123.29 134.60Q1125.01 131.08 1125.01 123.27L1125.01 30.73Q1125.01 22.92 1123.29 19.40Q1121.58 15.87 1116.12 15.87L1116.12 12L1150.71 12Q1161.25 12 1170.30 17.17Q1179.34 22.35 1185.47 31.14Q1191.59 39.93 1195.08 51.83Q1198.58 63.73 1198.58 77Q1198.58 90.27 1195.08 102.17Q1191.59 114.07 1185.47 122.86Q1179.34 131.65 1170.30 136.83Q1161.25 142 1150.71 142M1146.33 17.84L1141.89 17.84L1141.89 136.16L1146.33 136.16Q1153 136.16 1158.74 132.54Q1164.49 128.92 1168.49 122.96Q1172.49 116.99 1175.38 109.28Q1178.26 101.57 1179.63 93.35Q1180.99 85.13 1180.99 77Q1180.99 68.88 1179.63 60.65Q1178.26 52.43 1175.38 44.72Q1172.49 37.01 1168.49 31.04Q1164.49 25.08 1158.74 21.46Q1153 17.84 1146.33 17.84M1262.24 123.27L1262.24 77L1225.55 77L1225.55 123.27Q1225.55 126.38 1225.71 128.45Q1225.87 130.51 1226.41 132.51Q1226.95 134.51 1227.90 135.62Q1228.85 136.73 1230.47 137.43Q1232.09 138.13 1234.38 138.13L1234.38 142L1199.78 142L1199.78 138.13Q1205.24 138.13 1206.95 134.60Q1208.67 131.08 1208.67 123.27L1208.67 30.73Q1208.67 22.92 1206.95 19.40Q1205.24 15.87 1199.78 15.87L1199.78 12L1234.38 12L1234.38 15.87Q1232.09 15.87 1230.47 16.57Q1228.85 17.27 1227.90 18.38Q1226.95 19.49 1226.41 21.49Q1225.87 23.49 1225.71 25.55Q1225.55 27.62 1225.55 30.73L1225.55 71.16L1262.24 71.16L1262.24 30.73Q1262.24 22.92 1260.53 19.40Q1258.81 15.87 1253.36 15.87L1253.36 12L1287.95 12L1287.95 15.87Q1285.67 15.87 1284.05 16.57Q1282.43 17.27 1281.48 18.38Q1280.52 19.49 1279.98 21.49Q1279.44 23.49 1279.29 25.55Q1279.13 27.62 1279.13 30.73L1279.13 123.27Q1279.13 126.38 1279.29 128.45Q1279.44 130.51 1279.98 132.51Q1280.52 134.51 1281.48 135.62Q1282.43 136.73 1284.05 137.43Q1285.67 138.13 1287.95 138.13L1287.95 142L1253.36 142L1253.36 138.13Q1258.81 138.13 1260.53 134.60Q1262.24 131.08 1262.24 123.27M1324.77 138.13L1324.77 142L1286.62 142L1286.62 138.13Q1289.22 138.13 1291.35 137.18Q1293.47 136.22 1295.28 134.29Q1297.09 132.35 1298.77 129.24Q1300.46 126.13 1302.01 122.10Q1303.57 118.07 1305.25 112.55Q1306.93 107.02 1308.71 100.65Q1310.48 94.27 1312.64 86.14Q1313.09 84.55 1313.28 83.73Q1317.47 68.11 1324.48 40.53Q1331.50 12.95 1331.75 12L1337.59 12Q1337.84 12.95 1344.86 40.53Q1351.87 68.11 1356.06 83.73Q1363.49 111.28 1366.34 119.34Q1370.85 132.10 1375.87 135.91Q1378.79 138.13 1382.72 138.13L1382.72 142L1342.41 142L1342.41 138.13Q1345.40 138.13 1347.75 136.26Q1350.09 134.38 1350.09 131.08Q1350.09 129.30 1344.38 107.66L1314.36 107.66Q1310.68 123.27 1313.06 130.70Q1315.44 138.13 1324.77 138.13M1315.50 102.45L1343.05 102.45Q1342.16 99.28 1336.64 78.71Q1331.11 58.15 1328.77 49.32Q1327.24 55.74 1322.35 75.06Q1317.47 94.39 1315.50 102.45M1449.44 142L1381.39 142L1381.39 138.13Q1386.85 138.13 1388.56 134.60Q1390.27 131.08 1390.27 123.27L1390.27 30.73Q1390.27 22.92 1388.56 19.40Q1386.85 15.87 1381.39 15.87L1381.39 12L1415.98 12L1415.98 15.87Q1413.70 15.87 1412.08 16.57Q1410.46 17.27 1409.51 18.38Q1408.56 19.49 1408.02 21.49Q1407.48 23.49 1407.32 25.55Q1407.16 27.62 1407.16 30.73L1407.16 136.79Q1423.92 136.35 1436.01 129.24Q1448.10 122.13 1451.59 111.47L1455.15 111.47L1449.44 142M1490.95 142L1456.35 142L1456.35 138.13Q1461.81 138.13 1463.53 134.60Q1465.24 131.08 1465.24 123.27L1465.24 30.73Q1465.24 22.92 1463.53 19.40Q1461.81 15.87 1456.35 15.87L1456.35 12L1490.95 12L1490.95 15.87Q1488.66 15.87 1487.04 16.57Q1485.43 17.27 1484.47 18.38Q1483.52 19.49 1482.98 21.49Q1482.44 23.49 1482.28 25.55Q1482.13 27.62 1482.13 30.73L1482.13 123.27Q1482.13 126.38 1482.28 128.45Q1482.44 130.51 1482.98 132.51Q1483.52 134.51 1484.47 135.62Q1485.43 136.73 1487.04 137.43Q1488.66 138.13 1490.95 138.13"/>
<path d="M479.67 195.60L487.27 195.60L487.27 205L485.27 205L484.80 202.90Q483.57 204.29 482.33 204.86Q481.08 205.43 479.41 205.43Q477.85 205.43 476.48 204.95Q475.11 204.48 474.10 203.61Q473.08 202.75 472.34 201.59Q471.61 200.42 471.24 199.02Q470.87 197.61 470.87 196.08Q470.87 194.17 471.47 192.48Q472.06 190.78 473.14 189.50Q474.21 188.22 475.84 187.47Q477.47 186.73 479.41 186.73Q480.88 186.73 482.18 187.12Q483.48 187.51 484.51 188.26Q485.54 189.01 486.22 190.18Q486.89 191.35 487.07 192.83L484.01 192.83Q483.77 191.15 482.48 190.21Q481.19 189.28 479.41 189.28Q478.03 189.28 476.96 189.85Q475.90 190.42 475.26 191.40Q474.63 192.38 474.31 193.56Q473.99 194.75 473.99 196.08Q473.99 197.41 474.31 198.59Q474.63 199.78 475.26 200.75Q475.90 201.73 476.96 202.30Q478.03 202.88 479.41 202.88Q481.78 202.92 483.07 201.61Q484.36 200.30 484.42 197.98L479.67 197.98L479.67 195.60M493.79 205L490.67 205L490.67 187.15L499.19 187.15Q502.09 187.15 503.59 188.41Q505.08 189.67 505.08 191.98Q505.08 192.94 504.83 193.74Q504.57 194.54 504.23 194.99Q503.90 195.44 503.43 195.80Q502.96 196.15 502.69 196.27Q502.42 196.39 502.14 196.48L502.14 196.53Q502.59 196.58 503.01 196.78Q503.44 196.99 503.86 197.40Q504.28 197.81 504.53 198.56Q504.79 199.31 504.79 200.30Q504.79 201.95 505.03 203.21Q505.28 204.48 505.77 205L502.41 205Q502.19 204.65 502.08 204.15Q501.97 203.65 501.95 203.31Q501.93 202.97 501.93 202.38Q501.93 201.08 501.78 200.25Q501.63 199.41 501.24 198.80Q500.85 198.19 500.15 197.92Q499.46 197.65 498.38 197.65L493.79 197.65L493.79 205M498.86 189.70L493.79 189.70L493.79 195.27L498.91 195.27Q501.96 195.27 501.96 192.43Q501.96 191.76 501.79 191.26Q501.62 190.77 501.34 190.47Q501.07 190.18 500.65 190Q500.22 189.83 499.80 189.77Q499.38 189.70 498.86 189.70M509.40 205L506.18 205L513.03 187.15L516.35 187.15L523.22 205L519.88 205L518.21 200.28L511.08 200.28L509.40 205M514.70 190.23L514.63 190.23L511.93 197.90L517.38 197.90L514.70 190.23M528.06 205L524.93 205L524.93 187.15L532.81 187.15Q534.27 187.15 535.39 187.52Q536.50 187.89 537.15 188.45Q537.80 189.01 538.20 189.78Q538.60 190.55 538.74 191.24Q538.87 191.93 538.87 192.67Q538.87 193.42 538.74 194.10Q538.60 194.78 538.20 195.55Q537.80 196.32 537.15 196.87Q536.50 197.42 535.39 197.79Q534.27 198.15 532.81 198.15L528.06 198.15L528.06 205M532.68 189.70L528.06 189.70L528.06 195.60L532.62 195.60Q533.18 195.60 533.71 195.45Q534.23 195.30 534.70 194.97Q535.17 194.65 535.46 194.05Q535.75 193.45 535.75 192.65Q535.75 191.79 535.51 191.19Q535.27 190.60 534.83 190.28Q534.38 189.97 533.86 189.84Q533.34 189.70 532.68 189.70M544.66 205L541.53 205L541.53 187.15L544.66 187.15L544.66 194.25L552.78 194.25L552.78 187.15L555.90 187.15L555.90 205L552.78 205L552.78 196.96L544.66 196.96L544.66 205M562.77 205L559.65 205L559.65 187.15L562.77 187.15L562.77 205M581.77 192.83L578.64 192.83Q577.74 189.28 574.19 189.28Q572.81 189.28 571.74 189.85Q570.67 190.42 570.04 191.40Q569.40 192.38 569.08 193.56Q568.77 194.75 568.77 196.08Q568.77 197.41 569.08 198.59Q569.40 199.78 570.04 200.75Q570.67 201.73 571.74 202.30Q572.81 202.88 574.19 202.88Q576.19 202.88 577.35 201.58Q578.52 200.28 578.74 198.20L581.79 198.20Q581.58 201.42 579.50 203.43Q577.41 205.43 574.19 205.43Q572.62 205.43 571.26 204.95Q569.89 204.48 568.87 203.61Q567.85 202.75 567.12 201.59Q566.39 200.42 566.01 199.02Q565.64 197.61 565.64 196.08Q565.64 194.17 566.24 192.48Q566.84 190.78 567.91 189.50Q568.99 188.22 570.62 187.47Q572.25 186.73 574.19 186.73Q576.21 186.73 577.86 187.44Q579.50 188.15 580.53 189.55Q581.57 190.95 581.77 192.83M583.56 199.06L586.69 199.06Q586.69 200.04 587.04 200.79Q587.38 201.55 588.01 201.99Q588.64 202.44 589.44 202.66Q590.24 202.88 591.20 202.88Q593.12 202.88 594.05 202.09Q594.99 201.30 594.99 200.18Q594.99 198.55 593.51 197.98Q592.94 197.76 592.23 197.57Q591.52 197.37 590.26 197.05Q589.01 196.72 588.18 196.50Q584.23 195.47 584.23 191.98Q584.23 190.68 584.80 189.65Q585.36 188.62 586.29 188Q587.22 187.37 588.37 187.05Q589.51 186.73 590.75 186.73Q592.16 186.73 593.39 187.10Q594.62 187.47 595.57 188.17Q596.51 188.87 597.06 189.97Q597.61 191.07 597.61 192.43L594.49 192.43Q594.26 189.28 590.63 189.28Q590.04 189.28 589.50 189.39Q588.96 189.51 588.46 189.76Q587.96 190.01 587.66 190.49Q587.36 190.96 587.36 191.60Q587.36 193.27 589.48 193.90Q594.07 195.10 594.63 195.27Q596.31 195.78 597.21 197.05Q598.11 198.32 598.11 199.82Q598.11 201.26 597.51 202.38Q596.90 203.49 595.87 204.13Q594.84 204.78 593.61 205.10Q592.39 205.43 591.01 205.43Q589.45 205.43 588.13 205.04Q586.81 204.66 585.79 203.90Q584.77 203.14 584.18 201.91Q583.59 200.67 583.56 199.06M615.18 205L607.78 205L607.78 187.15L615.18 187.15Q617.18 187.15 618.72 187.85Q620.26 188.54 621.19 189.78Q622.12 191.01 622.59 192.60Q623.05 194.18 623.05 196.08Q623.05 197.97 622.59 199.56Q622.12 201.14 621.19 202.38Q620.26 203.61 618.72 204.30Q617.18 205 615.18 205M613.98 189.70L610.91 189.70L610.91 202.45L613.98 202.45Q615.41 202.45 616.47 202.13Q617.53 201.80 618.19 201.25Q618.84 200.70 619.24 199.87Q619.63 199.03 619.78 198.13Q619.93 197.24 619.93 196.08Q619.93 194.92 619.78 194.02Q619.63 193.12 619.24 192.29Q618.84 191.45 618.19 190.90Q617.53 190.35 616.47 190.03Q615.41 189.70 613.98 189.70M638.85 205L625.82 205L625.82 187.15L638.66 187.15L638.66 189.85L628.95 189.85L628.95 194.53L637.94 194.53L637.94 197.08L628.95 197.08L628.95 202.30L638.85 202.30L638.85 205M640.50 199.06L643.62 199.06Q643.62 200.04 643.97 200.79Q644.32 201.55 644.95 201.99Q645.57 202.44 646.37 202.66Q647.17 202.88 648.14 202.88Q650.05 202.88 650.99 202.09Q651.92 201.30 651.92 200.18Q651.92 198.55 650.44 197.98Q649.87 197.76 649.16 197.57Q648.45 197.37 647.20 197.05Q645.94 196.72 645.11 196.50Q641.17 195.47 641.17 191.98Q641.17 190.68 641.73 189.65Q642.29 188.62 643.22 188Q644.16 187.37 645.30 187.05Q646.44 186.73 647.69 186.73Q649.09 186.73 650.32 187.10Q651.56 187.47 652.50 188.17Q653.45 188.87 654 189.97Q654.55 191.07 654.55 192.43L651.42 192.43Q651.19 189.28 647.56 189.28Q646.98 189.28 646.43 189.39Q645.89 189.51 645.39 189.76Q644.89 190.01 644.59 190.49Q644.29 190.96 644.29 191.60Q644.29 193.27 646.42 193.90Q651.01 195.10 651.57 195.27Q653.24 195.78 654.14 197.05Q655.05 198.32 655.05 199.82Q655.05 201.26 654.44 202.38Q653.84 203.49 652.81 204.13Q651.78 204.78 650.55 205.10Q649.32 205.43 647.94 205.43Q646.38 205.43 645.06 205.04Q643.74 204.66 642.72 203.90Q641.70 203.14 641.11 201.91Q640.52 200.67 640.50 199.06M660.89 205L657.77 205L657.77 187.15L660.89 187.15L660.89 205M672.69 195.60L680.29 195.60L680.29 205L678.29 205L677.81 202.90Q676.59 204.29 675.35 204.86Q674.10 205.43 672.43 205.43Q670.87 205.43 669.50 204.95Q668.13 204.48 667.11 203.61Q666.09 202.75 665.36 201.59Q664.63 200.42 664.26 199.02Q663.88 197.61 663.88 196.08Q663.88 194.17 664.48 192.48Q665.08 190.78 666.16 189.50Q667.23 188.22 668.86 187.47Q670.49 186.73 672.43 186.73Q673.89 186.73 675.19 187.12Q676.49 187.51 677.53 188.26Q678.56 189.01 679.23 190.18Q679.91 191.35 680.08 192.83L677.03 192.83Q676.79 191.15 675.50 190.21Q674.21 189.28 672.43 189.28Q671.05 189.28 669.98 189.85Q668.91 190.42 668.28 191.40Q667.64 192.38 667.33 193.56Q667.01 194.75 667.01 196.08Q667.01 197.41 667.33 198.59Q667.64 199.78 668.28 200.75Q668.91 201.73 669.98 202.30Q671.05 202.88 672.43 202.88Q674.80 202.92 676.09 201.61Q677.37 200.30 677.43 197.98L672.69 197.98L672.69 195.60M686.53 205L683.55 205L683.55 187.15L686.86 187.15L695 200.30L695.05 200.30L695.05 187.15L698.03 187.15L698.03 205L694.73 205L686.60 191.88L686.53 191.88L686.53 205M714.75 205L701.73 205L701.73 187.15L714.57 187.15L714.57 189.85L704.85 189.85L704.85 194.53L713.85 194.53L713.85 197.08L704.85 197.08L704.85 202.30L714.75 202.30L714.75 205M720.60 205L717.47 205L717.47 187.15L725.99 187.15Q728.90 187.15 730.39 188.41Q731.89 189.67 731.89 191.98Q731.89 192.94 731.63 193.74Q731.38 194.54 731.04 194.99Q730.71 195.44 730.24 195.80Q729.77 196.15 729.50 196.27Q729.23 196.39 728.95 196.48L728.95 196.53Q729.40 196.58 729.82 196.78Q730.24 196.99 730.66 197.40Q731.08 197.81 731.34 198.56Q731.60 199.31 731.60 200.30Q731.60 201.95 731.84 203.21Q732.09 204.48 732.57 205L729.22 205Q729 204.65 728.89 204.15Q728.78 203.65 728.76 203.31Q728.74 202.97 728.74 202.38Q728.74 201.08 728.59 200.25Q728.44 199.41 728.04 198.80Q727.65 198.19 726.96 197.92Q726.26 197.65 725.19 197.65L720.60 197.65L720.60 205M725.66 189.70L720.60 189.70L720.60 195.27L725.71 195.27Q728.76 195.27 728.76 192.43Q728.76 191.76 728.59 191.26Q728.42 190.77 728.15 190.47Q727.87 190.18 727.45 190Q727.03 189.83 726.61 189.77Q726.19 189.70 725.66 189.70M744.16 210.35L741.61 210.35L741.61 185.35L744.16 185.35L744.16 210.35M761.89 205L758.42 205L752.47 187.15L755.72 187.15L760.20 201.28L760.25 201.28L764.81 187.15L768 187.15L761.89 205M772.89 205L769.77 205L769.77 187.15L772.89 187.15L772.89 205M784.11 205L776.71 205L776.71 187.15L784.11 187.15Q786.11 187.15 787.65 187.85Q789.19 188.54 790.12 189.78Q791.06 191.01 791.52 192.60Q791.99 194.18 791.99 196.08Q791.99 197.97 791.52 199.56Q791.06 201.14 790.12 202.38Q789.19 203.61 787.65 204.30Q786.11 205 784.11 205M782.92 189.70L779.84 189.70L779.84 202.45L782.92 202.45Q784.34 202.45 785.41 202.13Q786.47 201.80 787.12 201.25Q787.77 200.70 788.17 199.87Q788.57 199.03 788.71 198.13Q788.86 197.24 788.86 196.08Q788.86 194.92 788.71 194.02Q788.57 193.12 788.17 192.29Q787.77 191.45 787.12 190.90Q786.47 190.35 785.41 190.03Q784.34 189.70 782.92 189.70M807.78 205L794.76 205L794.76 187.15L807.60 187.15L807.60 189.85L797.88 189.85L797.88 194.53L806.88 194.53L806.88 197.08L797.88 197.08L797.88 202.30L807.78 202.30L807.78 205M818.10 189.28Q816.72 189.28 815.65 189.85Q814.58 190.42 813.95 191.40Q813.31 192.38 812.99 193.56Q812.68 194.75 812.68 196.08Q812.68 197.41 812.99 198.59Q813.31 199.78 813.95 200.75Q814.58 201.73 815.65 202.30Q816.72 202.88 818.10 202.88Q819.21 202.88 820.12 202.50Q821.04 202.12 821.66 201.47Q822.28 200.83 822.71 199.95Q823.14 199.08 823.33 198.10Q823.53 197.13 823.53 196.08Q823.53 195.03 823.33 194.05Q823.14 193.07 822.71 192.20Q822.28 191.33 821.66 190.68Q821.04 190.03 820.12 189.66Q819.21 189.28 818.10 189.28M814.53 187.47Q816.16 186.73 818.10 186.73Q820.04 186.73 821.67 187.47Q823.30 188.22 824.38 189.50Q825.46 190.78 826.05 192.48Q826.65 194.17 826.65 196.08Q826.65 198.65 825.64 200.76Q824.63 202.88 822.66 204.15Q820.68 205.43 818.10 205.43Q816.53 205.43 815.17 204.95Q813.80 204.48 812.78 203.61Q811.76 202.75 811.03 201.59Q810.30 200.42 809.92 199.02Q809.55 197.61 809.55 196.08Q809.55 194.17 810.15 192.48Q810.75 190.78 811.82 189.50Q812.90 188.22 814.53 187.47M849.47 205L836.44 205L836.44 187.15L849.28 187.15L849.28 189.85L839.57 189.85L839.57 194.53L848.56 194.53L848.56 197.08L839.57 197.08L839.57 202.30L849.47 202.30L849.47 205M859.59 205L852.19 205L852.19 187.15L859.59 187.15Q861.59 187.15 863.13 187.85Q864.67 188.54 865.60 189.78Q866.53 191.01 867 192.60Q867.46 194.18 867.46 196.08Q867.46 197.97 867 199.56Q866.53 201.14 865.60 202.38Q864.67 203.61 863.13 204.30Q861.59 205 859.59 205M858.39 189.70L855.32 189.70L855.32 202.45L858.39 202.45Q859.82 202.45 860.88 202.13Q861.94 201.80 862.60 201.25Q863.25 200.70 863.65 199.87Q864.04 199.03 864.19 198.13Q864.34 197.24 864.34 196.08Q864.34 194.92 864.19 194.02Q864.04 193.12 863.65 192.29Q863.25 191.45 862.60 190.90Q861.94 190.35 860.88 190.03Q859.82 189.70 858.39 189.70M873.36 205L870.23 205L870.23 187.15L873.36 187.15L873.36 205M881.12 189.85L875.47 189.85L875.47 187.15L889.92 187.15L889.92 189.85L884.25 189.85L884.25 205L881.12 205L881.12 189.85M899.59 189.28Q898.21 189.28 897.14 189.85Q896.07 190.42 895.44 191.40Q894.80 192.38 894.49 193.56Q894.17 194.75 894.17 196.08Q894.17 197.41 894.49 198.59Q894.80 199.78 895.44 200.75Q896.07 201.73 897.14 202.30Q898.21 202.88 899.59 202.88Q900.70 202.88 901.62 202.50Q902.53 202.12 903.15 201.47Q903.78 200.83 904.20 199.95Q904.63 199.08 904.83 198.10Q905.02 197.13 905.02 196.08Q905.02 195.03 904.83 194.05Q904.63 193.07 904.20 192.20Q903.78 191.33 903.15 190.68Q902.53 190.03 901.62 189.66Q900.70 189.28 899.59 189.28M896.02 187.47Q897.65 186.73 899.59 186.73Q901.53 186.73 903.16 187.47Q904.79 188.22 905.87 189.50Q906.95 190.78 907.55 192.48Q908.15 194.17 908.15 196.08Q908.15 198.65 907.13 200.76Q906.12 202.88 904.15 204.15Q902.18 205.43 899.59 205.43Q898.03 205.43 896.66 204.95Q895.29 204.48 894.27 203.61Q893.25 202.75 892.52 201.59Q891.79 200.42 891.42 199.02Q891.05 197.61 891.05 196.08Q891.05 194.17 891.64 192.48Q892.24 190.78 893.32 189.50Q894.39 188.22 896.02 187.47M914.12 205L910.99 205L910.99 187.15L919.51 187.15Q922.42 187.15 923.91 188.41Q925.41 189.67 925.41 191.98Q925.41 192.94 925.15 193.74Q924.90 194.54 924.56 194.99Q924.22 195.44 923.75 195.80Q923.28 196.15 923.02 196.27Q922.75 196.39 922.47 196.48L922.47 196.53Q922.92 196.58 923.34 196.78Q923.76 196.99 924.18 197.40Q924.60 197.81 924.86 198.56Q925.11 199.31 925.11 200.30Q925.11 201.95 925.36 203.21Q925.60 204.48 926.09 205L922.73 205Q922.51 204.65 922.41 204.15Q922.30 203.65 922.28 203.31Q922.26 202.97 922.26 202.38Q922.26 201.08 922.11 200.25Q921.95 199.41 921.56 198.80Q921.17 198.19 920.48 197.92Q919.78 197.65 918.71 197.65L914.12 197.65L914.12 205M919.18 189.70L914.12 189.70L914.12 195.27L919.23 195.27Q922.28 195.27 922.28 192.43Q922.28 191.76 922.11 191.26Q921.94 190.77 921.67 190.47Q921.39 190.18 920.97 190Q920.55 189.83 920.13 189.77Q919.71 189.70 919.18 189.70M937.68 210.35L935.12 210.35L935.12 185.35L937.68 185.35L937.68 210.35M950.93 205L947.97 205L947.97 187.15L952.36 187.15L957.28 201.13L957.34 201.13L962.14 187.15L966.48 187.15L966.48 205L963.51 205L963.51 191.23L963.46 191.23L958.51 205L955.94 205L950.98 191.23L950.93 191.23L950.93 205M977.82 189.28Q976.45 189.28 975.38 189.85Q974.31 190.42 973.67 191.40Q973.04 192.38 972.72 193.56Q972.41 194.75 972.41 196.08Q972.41 197.41 972.72 198.59Q973.04 199.78 973.67 200.75Q974.31 201.73 975.38 202.30Q976.45 202.88 977.82 202.88Q978.94 202.88 979.85 202.50Q980.77 202.12 981.39 201.47Q982.01 200.83 982.44 199.95Q982.87 199.08 983.06 198.10Q983.26 197.13 983.26 196.08Q983.26 195.03 983.06 194.05Q982.87 193.07 982.44 192.20Q982.01 191.33 981.39 190.68Q980.77 190.03 979.85 189.66Q978.94 189.28 977.82 189.28M974.25 187.47Q975.88 186.73 977.82 186.73Q979.77 186.73 981.40 187.47Q983.03 188.22 984.11 189.50Q985.19 190.78 985.78 192.48Q986.38 194.17 986.38 196.08Q986.38 198.65 985.37 200.76Q984.36 202.88 982.38 204.15Q980.41 205.43 977.82 205.43Q976.26 205.43 974.90 204.95Q973.53 204.48 972.51 203.61Q971.49 202.75 970.76 201.59Q970.02 200.42 969.65 199.02Q969.28 197.61 969.28 196.08Q969.28 194.17 969.88 192.48Q970.48 190.78 971.55 189.50Q972.62 188.22 974.25 187.47M993.17 189.85L987.52 189.85L987.52 187.15L1001.97 187.15L1001.97 189.85L996.29 189.85L996.29 205L993.17 205L993.17 189.85M1007.17 205L1004.05 205L1004.05 187.15L1007.17 187.15L1007.17 205M1018.58 189.28Q1017.20 189.28 1016.14 189.85Q1015.07 190.42 1014.43 191.40Q1013.80 192.38 1013.48 193.56Q1013.16 194.75 1013.16 196.08Q1013.16 197.41 1013.48 198.59Q1013.80 199.78 1014.43 200.75Q1015.07 201.73 1016.14 202.30Q1017.20 202.88 1018.58 202.88Q1019.70 202.88 1020.61 202.50Q1021.53 202.12 1022.15 201.47Q1022.77 200.83 1023.20 199.95Q1023.63 199.08 1023.82 198.10Q1024.02 197.13 1024.02 196.08Q1024.02 195.03 1023.82 194.05Q1023.63 193.07 1023.20 192.20Q1022.77 191.33 1022.15 190.68Q1021.53 190.03 1020.61 189.66Q1019.70 189.28 1018.58 189.28M1015.01 187.47Q1016.64 186.73 1018.58 186.73Q1020.53 186.73 1022.15 187.47Q1023.78 188.22 1024.86 189.50Q1025.95 190.78 1026.54 192.48Q1027.14 194.17 1027.14 196.08Q1027.14 198.65 1026.13 200.76Q1025.11 202.88 1023.14 204.15Q1021.17 205.43 1018.58 205.43Q1017.02 205.43 1015.65 204.95Q1014.29 204.48 1013.27 203.61Q1012.25 202.75 1011.52 201.59Q1010.78 200.42 1010.41 199.02Q1010.04 197.61 1010.04 196.08Q1010.04 194.17 1010.64 192.48Q1011.24 190.78 1012.31 189.50Q1013.38 188.22 1015.01 187.47M1032.83 205L1029.85 205L1029.85 187.15L1033.16 187.15L1041.30 200.30L1041.35 200.30L1041.35 187.15L1044.33 187.15L1044.33 205L1041.03 205L1032.90 191.88L1032.83 191.88L1032.83 205M1062.94 195.60L1070.55 195.60L1070.55 205L1068.55 205L1068.07 202.90Q1066.85 204.29 1065.61 204.86Q1064.36 205.43 1062.69 205.43Q1061.13 205.43 1059.76 204.95Q1058.39 204.48 1057.37 203.61Q1056.35 202.75 1055.62 201.59Q1054.89 200.42 1054.52 199.02Q1054.14 197.61 1054.14 196.08Q1054.14 194.17 1054.74 192.48Q1055.34 190.78 1056.41 189.50Q1057.49 188.22 1059.12 187.47Q1060.75 186.73 1062.69 186.73Q1064.15 186.73 1065.45 187.12Q1066.75 187.51 1067.78 188.26Q1068.82 189.01 1069.49 190.18Q1070.17 191.35 1070.34 192.83L1067.29 192.83Q1067.05 191.15 1065.76 190.21Q1064.47 189.28 1062.69 189.28Q1061.31 189.28 1060.24 189.85Q1059.17 190.42 1058.54 191.40Q1057.90 192.38 1057.59 193.56Q1057.27 194.75 1057.27 196.08Q1057.27 197.41 1057.59 198.59Q1057.90 199.78 1058.54 200.75Q1059.17 201.73 1060.24 202.30Q1061.31 202.88 1062.69 202.88Q1065.06 202.92 1066.34 201.61Q1067.63 200.30 1067.69 197.98L1062.94 197.98L1062.94 195.60M1077.07 205L1073.94 205L1073.94 187.15L1082.46 187.15Q1085.37 187.15 1086.86 188.41Q1088.36 189.67 1088.36 191.98Q1088.36 192.94 1088.10 193.74Q1087.85 194.54 1087.51 194.99Q1087.18 195.44 1086.71 195.80Q1086.24 196.15 1085.97 196.27Q1085.70 196.39 1085.42 196.48L1085.42 196.53Q1085.87 196.58 1086.29 196.78Q1086.71 196.99 1087.13 197.40Q1087.55 197.81 1087.81 198.56Q1088.07 199.31 1088.07 200.30Q1088.07 201.95 1088.31 203.21Q1088.55 204.48 1089.04 205L1085.69 205Q1085.47 204.65 1085.36 204.15Q1085.25 203.65 1085.23 203.31Q1085.21 202.97 1085.21 202.38Q1085.21 201.08 1085.06 200.25Q1084.91 199.41 1084.51 198.80Q1084.12 198.19 1083.43 197.92Q1082.73 197.65 1081.66 197.65L1077.07 197.65L1077.07 205M1082.13 189.70L1077.07 189.70L1077.07 195.27L1082.18 195.27Q1085.23 195.27 1085.23 192.43Q1085.23 191.76 1085.06 191.26Q1084.89 190.77 1084.62 190.47Q1084.34 190.18 1083.92 190Q1083.50 189.83 1083.08 189.77Q1082.66 189.70 1082.13 189.70M1092.68 205L1089.46 205L1096.31 187.15L1099.63 187.15L1106.50 205L1103.15 205L1101.48 200.28L1094.35 200.28L1092.68 205M1097.98 190.23L1097.91 190.23L1095.21 197.90L1100.65 197.90L1097.98 190.23M1111.33 205L1108.21 205L1108.21 187.15L1116.08 187.15Q1117.55 187.15 1118.66 187.52Q1119.78 187.89 1120.43 188.45Q1121.07 189.01 1121.48 189.78Q1121.88 190.55 1122.01 191.24Q1122.15 191.93 1122.15 192.67Q1122.15 193.42 1122.01 194.10Q1121.88 194.78 1121.48 195.55Q1121.07 196.32 1120.43 196.87Q1119.78 197.42 1118.66 197.79Q1117.55 198.15 1116.08 198.15L1111.33 198.15L1111.33 205M1115.96 189.70L1111.33 189.70L1111.33 195.60L1115.90 195.60Q1116.46 195.60 1116.99 195.45Q1117.51 195.30 1117.98 194.97Q1118.45 194.65 1118.74 194.05Q1119.02 193.45 1119.02 192.65Q1119.02 191.79 1118.79 191.19Q1118.55 190.60 1118.10 190.28Q1117.66 189.97 1117.14 189.84Q1116.62 189.70 1115.96 189.70M1127.93 205L1124.81 205L1124.81 187.15L1127.93 187.15L1127.93 194.25L1136.05 194.25L1136.05 187.15L1139.18 187.15L1139.18 205L1136.05 205L1136.05 196.96L1127.93 196.96L1127.93 205M1146.05 205L1142.93 205L1142.93 187.15L1146.05 187.15L1146.05 205M1165.04 192.83L1161.92 192.83Q1161.02 189.28 1157.46 189.28Q1156.08 189.28 1155.02 189.85Q1153.95 190.42 1153.31 191.40Q1152.68 192.38 1152.36 193.56Q1152.04 194.75 1152.04 196.08Q1152.04 197.41 1152.36 198.59Q1152.68 199.78 1153.31 200.75Q1153.95 201.73 1155.02 202.30Q1156.08 202.88 1157.46 202.88Q1159.47 202.88 1160.63 201.58Q1161.80 200.28 1162.02 198.20L1165.07 198.20Q1164.86 201.42 1162.77 203.43Q1160.69 205.43 1157.46 205.43Q1155.90 205.43 1154.53 204.95Q1153.17 204.48 1152.15 203.61Q1151.13 202.75 1150.40 201.59Q1149.66 200.42 1149.29 199.02Q1148.92 197.61 1148.92 196.08Q1148.92 194.17 1149.52 192.48Q1150.11 190.78 1151.19 189.50Q1152.26 188.22 1153.89 187.47Q1155.52 186.73 1157.46 186.73Q1159.49 186.73 1161.13 187.44Q1162.77 188.15 1163.81 189.55Q1164.85 190.95 1165.04 192.83M1166.84 199.06L1169.96 199.06Q1169.96 200.04 1170.31 200.79Q1170.66 201.55 1171.29 201.99Q1171.92 202.44 1172.72 202.66Q1173.52 202.88 1174.48 202.88Q1176.40 202.88 1177.33 202.09Q1178.26 201.30 1178.26 200.18Q1178.26 198.55 1176.79 197.98Q1176.21 197.76 1175.51 197.57Q1174.80 197.37 1173.54 197.05Q1172.28 196.72 1171.45 196.50Q1167.51 195.47 1167.51 191.98Q1167.51 190.68 1168.07 189.65Q1168.63 188.62 1169.57 188Q1170.50 187.37 1171.64 187.05Q1172.78 186.73 1174.03 186.73Q1175.43 186.73 1176.67 187.10Q1177.90 187.47 1178.84 188.17Q1179.79 188.87 1180.34 189.97Q1180.89 191.07 1180.89 192.43L1177.76 192.43Q1177.53 189.28 1173.91 189.28Q1173.32 189.28 1172.78 189.39Q1172.23 189.51 1171.73 189.76Q1171.23 190.01 1170.93 190.49Q1170.64 190.96 1170.64 191.60Q1170.64 193.27 1172.76 193.90Q1177.35 195.10 1177.91 195.27Q1179.58 195.78 1180.49 197.05Q1181.39 198.32 1181.39 199.82Q1181.39 201.26 1180.79 202.38Q1180.18 203.49 1179.15 204.13Q1178.12 204.78 1176.89 205.10Q1175.66 205.43 1174.28 205.43Q1172.72 205.43 1171.40 205.04Q1170.09 204.66 1169.07 203.90Q1168.05 203.14 1167.46 201.91Q1166.86 200.67 1166.84 199.06"/>
</svg>`;function AP(t){return new URL(globalThis.location.href)}const jo="Kaustubh Gondhali",OP=" – ",gp={w:1200,h:630},FP="@Griflan",hc=160,NP=t=>{if(t.length<=hc)return t;const e=t.slice(0,hc-1),i=e.lastIndexOf(" ");return`${(i>hc/2?e.slice(0,i):e).replace(/[\s,;:.–—-]+$/,"")}…`},DP=()=>{const{$dato:t}=Ce();return ch("site",()=>t.site())},LP=t=>{const{data:e}=DP(),{origin:i}=AP(),s=nl();wm(()=>{const{seo:n={},labs:r={},favicon:o=[],touchIcon:a,noIndex:l}=e.value||{},u=(typeof t=="function"?t():ne(t))||{},c=n.fallbackSeo||{},h=u.title?u.title+OP+jo:r.title||jo,f=NP((u.description||r.description||c.description||"").replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim()),d=u.image||r.image?.card||c.image?.card||"",g=(u.image?u.alt||`${u.title} by ${jo}`:(r.image||c.image)?.alt)||h,p=u.path??s.path,_=i+p,w=[{name:"description",content:f},{name:"theme-color",content:Wr.ground},{property:"og:type",content:p.startsWith("/projects/")?"article":"website"},{property:"og:site_name",content:jo},{property:"og:title",content:h},{property:"og:description",content:f},{property:"og:url",content:_},{name:"twitter:card",content:d?"summary_large_image":"summary"},{name:"twitter:site",content:n.twitterAccount||FP},{name:"twitter:title",content:h},{name:"twitter:description",content:f}];return d&&w.push({property:"og:image",content:d},{property:"og:image:width",content:String(gp.w)},{property:"og:image:height",content:String(gp.h)},{property:"og:image:alt",content:g},{name:"twitter:image",content:d},{name:"twitter:image:alt",content:g}),n.facebookPageUrl&&w.push({property:"article:publisher",content:n.facebookPageUrl}),l&&w.push({name:"robots",content:"noindex, nofollow"}),{title:h,meta:w.filter(y=>y.content),link:[...o,...a?[{rel:"apple-touch-icon",href:a}]:[],{rel:"canonical",href:_}]}})},IP={class:"bg-black"},zP=["innerHTML"],BP={class:"row-start-3 grid w-full justify-items-center self-start pt-30 s:pt-40"},fc="griflan:boot",UP=0.6,VP=1.2,HP=3,Cn=0.5,GP=0.6,mp=.85,$P=.95,dc=.7,jP={__name:"app",async setup(t){let e,i;const{$gl:s,$dato:n,$scroll:r,$event:o,$resize:a}=Ce(),l=nl(),u=oe(null),c=oe(null),h=oe(null),f=oe(null),d=oe(null),g=oe(null),p=oe(null),_=oe(null),w=oe(!0),y=oe(!0),m=oe(!1),b=oe(!0),v=oe(!1),x=oe(!1),k=oe({cx:0,cy:0,rx:0,ry:0,logo:null,ball:null}),R=oe(null),{phase:S,staged:P}=yv(),{data:A}=([e,i]=fg(()=>ch("works",()=>n.works())),e=await e,i(),e);LP();const M=JSON.stringify([...ar.preloads().map(se=>[se.href,"fetch"]),[gv,"image"]]);wm({script:[{key:"gpu",tagPosition:"head",innerHTML:"document.documentElement.setAttribute('data-gpu','gpu'in navigator?'yes':'none')"},{key:"faces",tagPosition:"head",innerHTML:`window.__faces||(window.__faces=1,'gpu'in navigator&&${M}.forEach(function(p){var l=document.createElement('link');l.rel='preload';l.as=p[1];l.href=p[0];l.crossOrigin='anonymous';l.setAttribute('fetchpriority','high');document.head.appendChild(l)}))`},{key:"boot",tagPosition:"head",innerHTML:`window.__boot||(window.__boot=1,addEventListener('error',function(e){var s=e.target,n=0;if(!s||s.tagName!=='SCRIPT'||s.type!=='module'||s.src.indexOf('/_nuxt/')<0)return;try{n=+sessionStorage.getItem('${fc}')||0;if(n>2){document.documentElement.setAttribute('data-boot','off');return}sessionStorage.setItem('${fc}',n+1)}catch(x){}function go(){setTimeout(function(){location.reload()},1e3*Math.pow(2,n))}navigator.onLine===false?addEventListener('online',go,{once:true}):go()},true))`}]});const D=()=>new Promise(se=>requestAnimationFrame(se)),{fill:F,done:O,ink:C}=wi.intro,L={duration:.35,ease:"power1.out"},q={duration:.2,ease:"power1.out"},ce={position:"fixed",inset:0,zIndex:100,background:Wr.ground},he=MP.match(/<path[^>]*>/g).join("").replace(/\sfill="[^"]*"/g,""),fe=se=>`rgb(${se.map(le=>Math.round(le*255)).join(" ")})`,ae={"--dim":fe(Mt("ink").map(se=>se*(1-C.hush))),"--calm":fe(Mt("ink").map((se,le)=>se*(1-dc)+Mt("ground")[le]*dc))},ie=se=>new Promise(le=>setTimeout(le,se*1e3)),xe=se=>new Promise(le=>{if(se.value)return le();const ke=je(se,Be=>{Be&&(ke(),le())})});let pe=0,we=0,I=0;const J={v:0};let X=0,ee=0,ge=0,Se=!0;const T=Math.PI*2,E=Math.PI*(3-Math.sqrt(5)),N=`rgb(${Mt("ground").map(se=>Math.round(se*255)).join(" ")} / ${dc})`,$=se=>{if(!x.value||!Se)return;const{logo:le,ball:ke}=k.value;if(!le||!ke||(X++,I<=0))return;ge+=se;const Be=I,We=C.power*Math.min(1,ge/C.rise)**2;if(X&1){const G=X&2?1:-1;s.ink(le.cx+G*le.half*Be,le.cy,G*C.push,0,We,le.tall*.6);return}ee+=se*2*T*.3,s.ink(ke.cx+Math.cos(ee)*ke.r*.12,ke.cy+Math.sin(ee)*ke.r*.12,Math.cos(ee)*C.push,Math.sin(ee)*C.push,We,ke.r*(.05+.5*Be))},B=()=>{if(!x.value)return;const{cx:se,cy:le,rx:ke,ry:Be}=k.value;let We=0;const G=({ratio:te=1})=>{We+=Math.max(te,.25)/60,X++;const Re=Math.min(1,We/C.burst),Ne=X*E;s.ink(se+Math.cos(Ne)*ke*(.5+Re),le+Math.sin(Ne)*Be*(.5+Re),Math.cos(Ne)*C.kick*4,Math.sin(Ne)*C.kick*4),We>=C.burst&&o.off("tick",G)};o.on("tick",G)},H=({ratio:se=1})=>{const le=Math.max(se,.25)/60;s.wake(),we+=(pe-we)*(1-Math.exp(-6*le)),pe-we<.001&&(we=pe),I=Math.min(J.v,we),Z(),$(le)},Z=()=>{if(!f.value)return;const{cx:se,cy:le,rx:ke,ry:Be}=k.value,We=Math.max(I,.001)/.6;f.value.style.background=`radial-gradient(${ke*We}px ${Be*We}px at ${se}px ${le}px, transparent 60%, ${N} 100%)`},K=()=>new Promise(se=>{const le=()=>{I<1||(o.off("tick",le),se())};o.on("tick",le)}),Q=(se,le)=>Promise.race([z.to(se,{...le,...L}),ie(Cn)]),j=()=>{const se=mv(a.small),le=se.hole,ke=Math.round(le.left+le.width/2),Be=le.top+le.height/2,{x:We,y:G,clear:te}=Fn.window,{logo:Re,ball:Ne}=se;return k.value={cx:ke,cy:Be,rx:le.width*.525,ry:le.height*.525,logo:{cx:Re.x,cy:Re.y,half:Re.w*.5,tall:Re.h},ball:{cx:Ne.x,cy:Ne.top+Ne.d/2,r:Ne.d*.5}},R.value={background:`radial-gradient(${le.width*We}px ${le.height*G}px at ${ke}px ${Be}px, transparent ${te*100}%, ${Wr.ground} 100%)`},se},W=()=>{if(S.value!=="load"){o.off("resize",W);return}j()};let V=null,Y=null;const re=async()=>{await Promise.race([xe(P),ie(Cn)]);const{ball:se}=j();o.on("resize",W),x.value=s.inked&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,x.value?(s.wall.hush(C.hush),s.wall.tint(1,0,se.d*C.rings.size,C.rings.rate),s.holdInk(1)):p.value&&(p.value.style.color="var(--calm)"),v.value=!0,await st(),Z(),o.emit("intro:open",0),await Promise.race([s.warm(),ie(GP)]),V=document.querySelector("[data-logo]"),!(!V||S.value!=="load")&&s.presented(V).then(le=>le&&s.presented(V)).then(le=>le&&me())},me=()=>{if(S.value!=="load"||Y)return;let se;Y=new Promise(ke=>se=ke),h.value&&z.set(h.value,{autoAlpha:0}),b.value=!1,be(_.value);const le=()=>{vv(o,ke=>{o.emit("intro:open",ke),ke>=$P&&se()},se),z.to(J,{v:1,duration:F.min,ease:F.ease})};if(!g.value)return le();if(s.dense){z.to(g.value,{autoAlpha:0,...q,onComplete:le});return}z.set(g.value,{autoAlpha:0}),le()},be=se=>{if(!se)return;const le=getComputedStyle(se).opacity;se.style.animation="none",z.fromTo(se,{opacity:le},{autoAlpha:0,...L})},Te=()=>{m.value=!0,be(_.value),d.value&&z.to(d.value,{autoAlpha:1,...L}),g.value&&z.to(g.value,{color:Wr.ink,...L})},Ae=async()=>{b.value=!0,await st(),z.killTweensOf(h.value),z.set(h.value,{autoAlpha:0}),await Q(h.value,{autoAlpha:1})};return Qt(async()=>{console.log("[INTRO 1] Started");try{sessionStorage.removeItem(fc)}catch{}s.mount(u.value),s.solo([document.querySelector("[data-logo]")].filter(Boolean)),r?.stop?.(),o.on("tick",H);const se=performance.now(),le=ie(HP);console.log("[INTRO 2] Checking s.started");const startedRes=await s.started;console.log("[INTRO 2.1] s.started result:",startedRes);if(!startedRes){o.off("tick",H),Te();setTimeout(function(){var sh=document.querySelector('[class*="z-[101]"]');var cv=document.querySelector('[class*="z-99"]');if(sh){sh.style.transition="opacity 0.6s ease";sh.style.opacity="0";sh.style.pointerEvents="none";setTimeout(function(){sh.style.display="none"},700);}if(cv){cv.style.transition="opacity 0.6s ease";cv.style.opacity="0";cv.style.pointerEvents="none";setTimeout(function(){cv.style.display="none"},700);}},1500);return}const ke=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Be=(A.value||[]).find(te=>te.slug===l.params.slug),We=[...(A.value||[]).map(te=>te.src),...(Be?.gallery||[]).map(te=>te.src)],G=s.preload(We,te=>pe=Math.max(pe,te*mp));console.log("[INTRO 3] Before re()"),await re(),console.log("[INTRO 4] After re()"),console.log("[INTRO 5] Before G race"),await Promise.race([G,ie(UP)]),console.log("[INTRO 6] After G race"),pe=Math.max(pe,mp),s.release(),await Promise.race([st().then(st),ie(Cn)]),console.log("[INTRO 7] Before shown()"),await Promise.all([Promise.race([s.typeset(),le]),s.shown(se+VP*1e3)]),console.log("[INTRO 8] After shown()"),await Promise.race([s.nextPaint().then(D),ie(Cn)]),console.log("[INTRO 9] Before K race"),pe=1,await Promise.race([K(),ie(F.min+Cn)]),console.log("[INTRO 10] After K race"),console.log("[INTRO 11] Before Y race, Y is:",!!Y),Y&&await Promise.race([Y,ie(Cn)]),console.log("[INTRO 12] After Y race"),o.off("tick",H),ke&&await Ae(),x.value&&(Se=!1,B(),s.wall.hush(0,L.duration),s.wall.tint(0,L.duration),s.holdInk(0,L.duration)),s.solo(null),Y||(V&&s.unpresent(V),o.emit("intro:open",1)),S.value="reveal",b.value?(y.value=!1,be(_.value),await st(),await Q([h.value,g.value].filter(Boolean),{autoAlpha:0}),b.value=!1):(c.value&&await Q(c.value,{autoAlpha:0}),y.value=!1),await ie(Math.max(0,O-L.duration)),console.log("[INTRO 13] COMPLETING! S=done, w=false"),S.value="done",w.value=!1,r?.start?.(),await ie(C.linger),s.retireInk()}),(se,le)=>{const ke=N3,Be=vP,We=CP;return Ee(),Ge("div",IP,[ne(b)?(Ee(),Ge("div",{key:0,ref_key:"blind",ref:h,style:ce},null,512)):ss("",!0),ne(w)?(Ee(),Ge("div",{key:1,ref_key:"shades",ref:p,class:"pointer-events-none fixed inset-0 z-[101] grid grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] justify-items-center px-20 text-[color:var(--dim)] motion-reduce:text-[color:var(--calm)]",style:ae},[(Ee(),Ge("svg",{ref_key:"svg",ref:g,"data-opening":"",viewBox:"0 0 1652 242",fill:"currentColor",role:"img","aria-label":"Kaustubh Gondhali",class:It(["row-start-2 block h-auto",ne(pv)]),innerHTML:ne(he)},null,10,zP)),ye("div",BP,[ye("p",{ref_key:"label",ref:_,"data-loading":"",class:"col-start-1 row-start-1 type-label"},"Loading…",512),ye("div",{ref_key:"notice",ref:d,"data-notice":"",class:"pointer-events-auto invisible col-start-1 row-start-1 flex w-full max-w-[45rem] flex-col items-center gap-10 text-center opacity-0 type-label text-ink"},[...le[0]||(le[0]=[yw('<p class="w-full"><span class="block">This site needs WebGPU.</span><span class="block [text-wrap:balance]">Open it in an <span class="whitespace-nowrap">up-to-date</span> Chrome, Edge or Safari.</span></p><a href="https://griflan.com" class="transition-colors duration-[350ms] ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[0.5rem] focus-visible:outline-ink [@media(hover:hover)_and_(pointer:fine)]:hover:text-accent">Visit griflan.com</a>',2)])],512)])],512)):ss("",!0),ne(y)?(Ee(),Ge("div",{key:2,ref_key:"cover",ref:c,class:It(["fixed inset-0 z-99",!ne(v)&&"bg-black"]),style:mo(ne(v)?ne(R):null)},[ne(v)&&!ne(x)?(Ee(),Ge("div",{key:0,ref_key:"veil",ref:f,class:"absolute inset-0"},null,512)):ss("",!0)],6)):ss("",!0),ye("div",{ref_key:"gl",ref:u,class:"gl","aria-hidden":"true"},null,512),_e(ke,{inert:ne(y)||ne(m)},null,8,["inert"]),ne(l).meta.bare?ss("",!0):(Ee(),ti(Be,{key:3,inert:ne(y)||ne(m)},null,8,["inert"])),ne(l).meta.bare?ss("",!0):(Ee(),ti(We,{key:4}))])}}},qP={class:"fixed inset-0 flex flex-col items-center justify-center gap-y-15 bg-black px-20 text-center text-white"},WP={class:"text-16 s:text-18 tracking-[-0.035em] opacity-60"},KP={__name:"error",props:{error:{type:Object,default:()=>({})}},setup(t){const e=t,i=nt(()=>e.error?.statusCode===404),s=()=>um({redirect:"/"});return Qt(()=>{i.value&&s()}),(n,r)=>(Ee(),Ge("div",qP,[ne(i)?ss("",!0):(Ee(),Ge(Ye,{key:0},[ye("p",WP,wu(t.error?.statusMessage||"Something went wrong"),1),ye("button",{type:"button",class:"text-16 s:text-18 tracking-[-0.035em] underline",onClick:s}," Back to the work ")],64))]))}},YP={key:0},vp={__name:"nuxt-root",setup(t){const e=()=>null,i=Ce(),s=i.deferHydration();if(i.isHydrating){const c=i.hooks.hookOnce("app:error",s),h=_i().beforeEach(()=>{c(),h()})}const n=!1;Hn(sl,nl()),i.hooks.callHookWith(c=>c.map(h=>h()),"vue:setup",[]);const r=rl(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;function l(c,h,f){const d=i.vueApp.config.errorHandler;if(d&&!d.__nuxt_default)try{d(c,h,f)}catch(g){console.error("[nuxt] Error in `app.config.errorHandler`",g)}}lg((c,h,f)=>{if(i.hooks.callHook("vue:error",c,h,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return i.hooks.callHook("app:error",c),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,c),!1;if(hm(c)&&(c.fatal||c.unhandled))return i.runWithContext(()=>ks(c)),l(c,h,f),!1});const u=!1;return(c,h)=>(Ee(),ti(Og,{onResolve:ne(s)},{default:Ru(()=>[ne(o)?(Ee(),Ge("div",YP)):ne(r)?(Ee(),ti(ne(KP),{key:1,error:ne(r)},null,8,["error"])):ne(u)?(Ee(),ti(ne(e),{key:2,context:ne(u)},null,8,["context"])):ne(n)?(Ee(),ti(ug(ne(n)),{key:3})):(Ee(),ti(ne(jP),{key:4}))]),_:1},8,["onResolve"]))}};let yp;{let t;yp=async function(){if(t)return t;const s=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?d1(vp):f1(vp),n=kb({vueApp:s});async function r(o){await n.callHook("app:error",o),n.payload.error||=$i(o)}r.__nuxt_default=!0,s.config.errorHandler=r,n.hook("app:suspense:resolve",()=>{s.config.errorHandler===r&&(s.config.errorHandler=void 0)});try{await Eb(n,O3)}catch(o){r(o)}try{await n.hooks.callHook("app:created",s),await n.hooks.callHook("app:beforeMount",s),s.mount(bb),await n.hooks.callHook("app:mounted",s),await st()}catch(o){r(o)}return s},t=yp().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{yv as $,Si as A,fg as B,wi as C,fl as D,ss as E,Ye as F,JP as G,ah as H,It as I,XP as J,Kh as K,au as L,o1 as M,ZP as N,QP as O,ot as P,uR as Q,on as R,Hi as S,eC as T,yw as U,Zi as V,iC as W,$E as X,J0 as Y,Uy as Z,dl as _,pr as a,rR as a0,sC as a1,oh as a2,bP as a3,Kn as a4,Nw as a5,wP as a6,dp as a7,xP as a8,nl as a9,lh as aa,DR as ab,lc as ac,nC as ad,yn as ae,_R as af,hC as ag,hv as ah,Ya as ai,LP as aj,mv as ak,mR as al,rC as am,oC as an,aC as ao,lC as ap,uC as aq,cC as ar,vv as as,nv as at,Mi as b,Ge as c,Qt as d,st as e,Jt as f,z as g,_e as h,ne as i,De as j,ea as k,Mt as l,ti as m,mo as n,Ee as o,Ru as p,hn as q,oe as r,Au as s,wu as t,Ce as u,ye as v,je as w,ch as x,nt as y,LR as z};
