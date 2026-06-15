(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();var Pu={exports:{}},ao={};var Dg;function Yw(){if(Dg)return ao;Dg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(l,u,d){var h=null;if(d!==void 0&&(h=""+d),u.key!==void 0&&(h=""+u.key),"key"in u){d={};for(var p in u)p!=="key"&&(d[p]=u[p])}else d=u;return u=d.ref,{$$typeof:a,type:l,key:h,ref:u!==void 0?u:null,props:d}}return ao.Fragment=r,ao.jsx=o,ao.jsxs=o,ao}var Og;function Xw(){return Og||(Og=1,Pu.exports=Yw()),Pu.exports}var oe=Xw();const qw="0.3.34",nf=`bippy-${qw}`,Rg=Object.defineProperty,Vw=Object.prototype.hasOwnProperty,fo=()=>{},Iv=a=>{try{Function.prototype.toString.call(a).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},Wv=(a=li())=>"getFiberRoots"in a;let Pv=!1,Ug;const Nd=(a=li())=>Pv?!0:(typeof a.inject=="function"&&(Ug=a.inject.toString()),!!Ug?.includes("(injected)")),os=new Set,zd=new Set,Fw=a=>{const r=new Map;let o=0,l={_instrumentationIsActive:!1,_instrumentationSource:nf,checkDCE:Iv,hasUnsupportedRendererAttached:!1,inject(u){const d=++o;return r.set(d,u),zd.add(u),l._instrumentationIsActive||(l._instrumentationIsActive=!0,os.forEach(h=>h())),d},on:fo,onCommitFiberRoot:fo,onCommitFiberUnmount:fo,onPostCommitFiberRoot:fo,renderers:r,supportsFiber:!0,supportsFlight:!0};try{Rg(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return l},set(h){if(h&&typeof h=="object"){const p=l.renderers;l=h,p.size>0&&(p.forEach((m,v)=>{zd.add(m),h.renderers.set(v,m)}),Ad(a))}}});const u=window.hasOwnProperty;let d=!1;Rg(window,"hasOwnProperty",{configurable:!0,value:function(...h){try{if(!d&&h[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,d=!0,-0}catch{}return u.apply(this,h)},writable:!0})}catch{Ad(a)}return l},Ad=a=>{a&&os.add(a);try{const r=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!r)return;if(!r._instrumentationSource){const o=Wv();if(r.checkDCE=Iv,r.supportsFiber=!0,r.supportsFlight=!0,r.hasUnsupportedRendererAttached=!1,r._instrumentationSource=nf,r._instrumentationIsActive=!1,o||(r.on=fo),r.renderers.size){r._instrumentationIsActive=!0,os.forEach(u=>u());return}const l=r.inject;Nd(r)&&!o&&(Pv=!0,r.inject({scheduleRefresh(){}})&&(r._instrumentationIsActive=!0)),r.inject=u=>{const d=l(u);return zd.add(u),r._instrumentationIsActive=!0,os.forEach(h=>h()),d}}(r.renderers.size||r._instrumentationIsActive||Nd())&&a?.()}catch{}},Gw=()=>Vw.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),li=a=>Gw()?(Ad(a),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):Fw(a),$w=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),Qw=()=>{try{$w()&&li()}catch{}},Es=0,or=1,e0=3,Zw=5,Kw=6,Jw=7,Iw=9,Ns=11,zs=13,No=14,zo=15,Ww=18,Pw=22,e1=23,t1=26,n1=27,a1=60111,r1="Symbol(react.concurrent_mode)",i1="Symbol(react.async_mode)",Hg=1,o1=2,l1=4096,s1=4,jg=8,c1=16,u1=32,d1=1024,f1=8192,Lg=o1|s1|c1|u1|l1|f1|d1,yo=a=>{switch(a.tag){case Zw:case t1:case n1:return!0;default:return typeof a.type=="string"}},As=a=>{switch(a.tag){case or:case Ns:case Es:case No:case zo:return!0;default:return!1}},h1=(a,r)=>{try{const o=a.dependencies,l=a.alternate?.dependencies;if(!o||!l||typeof o!="object"||!("firstContext"in o)||typeof l!="object"||!("firstContext"in l))return!1;let u=o.firstContext,d=l.firstContext;for(;u&&typeof u=="object"&&"memoizedValue"in u||d&&typeof d=="object"&&"memoizedValue"in d;){if(r(u,d)===!0)return!0;u=u?.next,d=d?.next}}catch{}return!1},af=a=>{const r=a.memoizedProps,o=a.alternate?.memoizedProps||{},l=a.flags??a.effectTag??0;switch(a.tag){case or:case Iw:case Ns:case Es:case No:case zo:return(l&Hg)===Hg;default:return a.alternate?o!==r||a.alternate.memoizedState!==a.memoizedState||a.alternate.ref!==a.ref:!0}},rf=a=>(a.flags&(Lg|jg))!==0||(a.subtreeFlags&(Lg|jg))!==0,p1=a=>{const r=[],o=[a];for(;o.length;){const l=o.pop();l&&(yo(l)&&rf(l)&&af(l)&&r.push(l),l.child&&o.push(l.child),l.sibling&&o.push(l.sibling))}return r},of=a=>{switch(a.tag){case Ww:return!0;case Jw:case Kw:case e1:case Pw:return!0;case e0:return!1;default:{const r=typeof a.type=="object"&&a.type!==null?a.type.$$typeof:a.type;switch(typeof r=="symbol"?r.toString():r){case a1:case r1:case i1:return!0;default:return!1}}}},m1=a=>{const r=[],o=[];for(yo(a)?r.push(a):a.child&&o.push(a.child);o.length;){const l=o.pop();if(!l)break;yo(l)?r.push(l):l.child&&o.push(l.child),l.sibling&&o.push(l.sibling)}return r};function t0(a,r,o=!1){return a&&r(a)instanceof Promise?a0(a,r,o):n0(a,r,o)}const n0=(a,r,o=!1)=>{if(!a)return null;if(r(a)===!0)return a;let l=o?a.return:a.child;for(;l;){const u=n0(l,r,o);if(u)return u;l=o?null:l.sibling}return null},a0=async(a,r,o=!1)=>{if(!a)return null;if(await r(a)===!0)return a;let l=o?a.return:a.child;for(;l;){const u=await a0(l,r,o);if(u)return u;l=o?null:l.sibling}return null},er=a=>{const r=a?.actualDuration??0;let o=r,l=a?.child??null;for(;r>0&&l!=null;)o-=l.actualDuration??0,l=l.sibling;return{selfTime:o,totalTime:r}},bo=a=>!!a.updateQueue?.memoCache,lr=a=>{const r=a;return typeof r=="function"?r:typeof r=="object"&&r?lr(r.type||r.render):null},bt=a=>{const r=a;if(typeof r=="string")return r;if(typeof r!="function"&&!(typeof r=="object"&&r))return null;const o=r.displayName||r.name||null;if(o)return o;const l=lr(r);return l&&(l.displayName||l.name)||null},g1=a=>{try{if(typeof a.version=="string"&&a.bundleType>0)return"development"}catch{}return"production"},v1=()=>!!li()._instrumentationIsActive||Wv()||Nd();let r0=0;const ii=new WeakMap,y1=(a,r=r0++)=>{ii.set(a,r)},za=a=>{let r=ii.get(a);return!r&&a.alternate&&(r=ii.get(a.alternate)),r||(r=r0++,y1(a,r)),r},Na=(a,r,o)=>{let l=r;for(;l!=null;){if(ii.has(l)||za(l),!of(l)&&af(l)&&a(l,"mount"),l.tag===zs)if(l.memoizedState!==null){const h=l.child,p=h?h.sibling:null;if(p){const m=p.child;m!==null&&Na(a,m,!1)}}else{let h=null;l.child!==null&&(h=l.child.child),h!==null&&Na(a,h,!1)}else l.child!=null&&Na(a,l.child,!0);l=o?l.sibling:null}},Md=(a,r,o,l)=>{if(ii.has(r)||za(r),!o)return;ii.has(o)||za(o);const u=r.tag===zs;!of(r)&&af(r)&&a(r,"update");const h=u&&o.memoizedState!==null,p=u&&r.memoizedState!==null;if(h&&p){const m=r.child?.sibling??null,v=o.child?.sibling??null;m!==null&&v!==null&&Md(a,m,v)}else if(h&&!p){const m=r.child;m!==null&&Na(a,m,!0)}else if(!h&&p){i0(a,o);const m=r.child?.sibling??null;m!==null&&Na(a,m,!0)}else if(r.child!==o.child){let m=r.child;for(;m;){if(m.alternate){const v=m.alternate;Md(a,m,v)}else Na(a,m,!1);m=m.sibling}}},Dd=(a,r)=>{(r.tag===e0||!of(r))&&a(r,"unmount")},i0=(a,r)=>{const o=r.tag===zs&&r.memoizedState!==null;let l=r.child;for(o&&(l=(r.child?.sibling??null)?.child??null);l!==null;)l.return!==null&&(Dd(a,l),i0(a,l)),l=l.sibling};let b1=0;const Bg=new WeakMap,w1=(a,r)=>{const o="current"in a?a.current:a;let l=Bg.get(a);l||(l={id:b1++,prevFiber:null},Bg.set(a,l));const{prevFiber:u}=l;if(!o)Dd(r,o);else if(u!==null){const d=u&&u.memoizedState!=null&&u.memoizedState.element!=null&&u.memoizedState.isDehydrated!==!0,h=o.memoizedState!=null&&o.memoizedState.element!=null&&o.memoizedState.isDehydrated!==!0;!d&&h?Na(r,o,!1):d&&h?Md(r,o,o.alternate):d&&!h&&Dd(r,o)}else Na(r,o,!0);l.prevFiber=o},x1=a=>{const r=li(a.onActive);r._instrumentationSource=a.name??nf;const o=r.onCommitFiberRoot;if(a.onCommitFiberRoot){const d=(h,p,m)=>{r.onCommitFiberRoot===d&&(o?.(h,p,m),a.onCommitFiberRoot?.(h,p,m))};r.onCommitFiberRoot=d}const l=r.onCommitFiberUnmount;if(a.onCommitFiberUnmount){const d=(h,p)=>{r.onCommitFiberUnmount===d&&(l?.(h,p),a.onCommitFiberUnmount?.(h,p))};r.onCommitFiberUnmount=d}const u=r.onPostCommitFiberRoot;if(a.onPostCommitFiberRoot){const d=(h,p)=>{r.onPostCommitFiberRoot===d&&(u?.(h,p),a.onPostCommitFiberRoot?.(h,p))};r.onPostCommitFiberRoot=d}return r};Qw();var Ms,ye,o0,l0,Pa,Yg,s0,c0,u0,lf,Od,Rd,d0,wo={},f0=[],_1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ao=Array.isArray;function Kn(a,r){for(var o in r)a[o]=r[o];return a}function sf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function rr(a,r,o){var l,u,d,h={};for(d in r)d=="key"?l=r[d]:d=="ref"?u=r[d]:h[d]=r[d];if(arguments.length>2&&(h.children=arguments.length>3?Ms.call(arguments,2):o),typeof a=="function"&&a.defaultProps!=null)for(d in a.defaultProps)h[d]===void 0&&(h[d]=a.defaultProps[d]);return ls(a,h,l,u,null)}function ls(a,r,o,l,u){var d={type:a,props:r,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:u??++o0,__i:-1,__u:0};return u==null&&ye.vnode!=null&&ye.vnode(d),d}function Oe(a){return a.children}function cn(a,r){this.props=a,this.context=r}function oi(a,r){if(r==null)return a.__?oi(a.__,a.__i+1):null;for(var o;r<a.__k.length;r++)if((o=a.__k[r])!=null&&o.__e!=null)return o.__e;return typeof a.type=="function"?oi(a):null}function h0(a){var r,o;if((a=a.__)!=null&&a.__c!=null){for(a.__e=a.__c.base=null,r=0;r<a.__k.length;r++)if((o=a.__k[r])!=null&&o.__e!=null){a.__e=a.__c.base=o.__e;break}return h0(a)}}function Ud(a){(!a.__d&&(a.__d=!0)&&Pa.push(a)&&!hs.__r++||Yg!=ye.debounceRendering)&&((Yg=ye.debounceRendering)||s0)(hs)}function hs(){for(var a,r,o,l,u,d,h,p=1;Pa.length;)Pa.length>p&&Pa.sort(c0),a=Pa.shift(),p=Pa.length,a.__d&&(o=void 0,l=void 0,u=(l=(r=a).__v).__e,d=[],h=[],r.__P&&((o=Kn({},l)).__v=l.__v+1,ye.vnode&&ye.vnode(o),cf(r.__P,o,l,r.__n,r.__P.namespaceURI,32&l.__u?[u]:null,d,u??oi(l),!!(32&l.__u),h),o.__v=l.__v,o.__.__k[o.__i]=o,g0(d,o,h),l.__e=l.__=null,o.__e!=u&&h0(o)));hs.__r=0}function p0(a,r,o,l,u,d,h,p,m,v,x){var y,_,S,E,A,U,C,D=l&&l.__k||f0,q=r.length;for(m=S1(o,r,D,m,q),y=0;y<q;y++)(S=o.__k[y])!=null&&(_=S.__i==-1?wo:D[S.__i]||wo,S.__i=y,U=cf(a,S,_,u,d,h,p,m,v,x),E=S.__e,S.ref&&_.ref!=S.ref&&(_.ref&&uf(_.ref,null,S),x.push(S.ref,S.__c||E,S)),A==null&&E!=null&&(A=E),(C=!!(4&S.__u))||_.__k===S.__k?m=m0(S,m,a,C):typeof S.type=="function"&&U!==void 0?m=U:E&&(m=E.nextSibling),S.__u&=-7);return o.__e=A,m}function S1(a,r,o,l,u){var d,h,p,m,v,x=o.length,y=x,_=0;for(a.__k=new Array(u),d=0;d<u;d++)(h=r[d])!=null&&typeof h!="boolean"&&typeof h!="function"?(typeof h=="string"||typeof h=="number"||typeof h=="bigint"||h.constructor==String?h=a.__k[d]=ls(null,h,null,null,null):Ao(h)?h=a.__k[d]=ls(Oe,{children:h},null,null,null):h.constructor===void 0&&h.__b>0?h=a.__k[d]=ls(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):a.__k[d]=h,m=d+_,h.__=a,h.__b=a.__b+1,p=null,(v=h.__i=T1(h,o,m,y))!=-1&&(y--,(p=o[v])&&(p.__u|=2)),p==null||p.__v==null?(v==-1&&(u>x?_--:u<x&&_++),typeof h.type!="function"&&(h.__u|=4)):v!=m&&(v==m-1?_--:v==m+1?_++:(v>m?_--:_++,h.__u|=4))):a.__k[d]=null;if(y)for(d=0;d<x;d++)(p=o[d])!=null&&(2&p.__u)==0&&(p.__e==l&&(l=oi(p)),y0(p,p));return l}function m0(a,r,o,l){var u,d;if(typeof a.type=="function"){for(u=a.__k,d=0;u&&d<u.length;d++)u[d]&&(u[d].__=a,r=m0(u[d],r,o,l));return r}a.__e!=r&&(l&&(r&&a.type&&!r.parentNode&&(r=oi(a)),o.insertBefore(a.__e,r||null)),r=a.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function ps(a,r){return r=r||[],a==null||typeof a=="boolean"||(Ao(a)?a.some(function(o){ps(o,r)}):r.push(a)),r}function T1(a,r,o,l){var u,d,h,p=a.key,m=a.type,v=r[o],x=v!=null&&(2&v.__u)==0;if(v===null&&p==null||x&&p==v.key&&m==v.type)return o;if(l>(x?1:0)){for(u=o-1,d=o+1;u>=0||d<r.length;)if((v=r[h=u>=0?u--:d++])!=null&&(2&v.__u)==0&&p==v.key&&m==v.type)return h}return-1}function Xg(a,r,o){r[0]=="-"?a.setProperty(r,o??""):a[r]=o==null?"":typeof o!="number"||_1.test(r)?o:o+"px"}function Jl(a,r,o,l,u){var d,h;e:if(r=="style")if(typeof o=="string")a.style.cssText=o;else{if(typeof l=="string"&&(a.style.cssText=l=""),l)for(r in l)o&&r in o||Xg(a.style,r,"");if(o)for(r in o)l&&o[r]==l[r]||Xg(a.style,r,o[r])}else if(r[0]=="o"&&r[1]=="n")d=r!=(r=r.replace(u0,"$1")),h=r.toLowerCase(),r=h in a||r=="onFocusOut"||r=="onFocusIn"?h.slice(2):r.slice(2),a.l||(a.l={}),a.l[r+d]=o,o?l?o.u=l.u:(o.u=lf,a.addEventListener(r,d?Rd:Od,d)):a.removeEventListener(r,d?Rd:Od,d);else{if(u=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in a)try{a[r]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&r[4]!="-"?a.removeAttribute(r):a.setAttribute(r,r=="popover"&&o==1?"":o))}}function qg(a){return function(r){if(this.l){var o=this.l[r.type+a];if(r.t==null)r.t=lf++;else if(r.t<o.u)return;return o(ye.event?ye.event(r):r)}}}function cf(a,r,o,l,u,d,h,p,m,v){var x,y,_,S,E,A,U,C,D,q,Q,Z,P,W,de,se,ge,ue=r.type;if(r.constructor!==void 0)return null;128&o.__u&&(m=!!(32&o.__u),d=[p=r.__e=o.__e]),(x=ye.__b)&&x(r);e:if(typeof ue=="function")try{if(C=r.props,D="prototype"in ue&&ue.prototype.render,q=(x=ue.contextType)&&l[x.__c],Q=x?q?q.props.value:x.__:l,o.__c?U=(y=r.__c=o.__c).__=y.__E:(D?r.__c=y=new ue(C,Q):(r.__c=y=new cn(C,Q),y.constructor=ue,y.render=k1),q&&q.sub(y),y.state||(y.state={}),y.__n=l,_=y.__d=!0,y.__h=[],y._sb=[]),D&&y.__s==null&&(y.__s=y.state),D&&ue.getDerivedStateFromProps!=null&&(y.__s==y.state&&(y.__s=Kn({},y.__s)),Kn(y.__s,ue.getDerivedStateFromProps(C,y.__s))),S=y.props,E=y.state,y.__v=r,_)D&&ue.getDerivedStateFromProps==null&&y.componentWillMount!=null&&y.componentWillMount(),D&&y.componentDidMount!=null&&y.__h.push(y.componentDidMount);else{if(D&&ue.getDerivedStateFromProps==null&&C!==S&&y.componentWillReceiveProps!=null&&y.componentWillReceiveProps(C,Q),r.__v==o.__v||!y.__e&&y.shouldComponentUpdate!=null&&y.shouldComponentUpdate(C,y.__s,Q)===!1){for(r.__v!=o.__v&&(y.props=C,y.state=y.__s,y.__d=!1),r.__e=o.__e,r.__k=o.__k,r.__k.some(function(I){I&&(I.__=r)}),Z=0;Z<y._sb.length;Z++)y.__h.push(y._sb[Z]);y._sb=[],y.__h.length&&h.push(y);break e}y.componentWillUpdate!=null&&y.componentWillUpdate(C,y.__s,Q),D&&y.componentDidUpdate!=null&&y.__h.push(function(){y.componentDidUpdate(S,E,A)})}if(y.context=Q,y.props=C,y.__P=a,y.__e=!1,P=ye.__r,W=0,D){for(y.state=y.__s,y.__d=!1,P&&P(r),x=y.render(y.props,y.state,y.context),de=0;de<y._sb.length;de++)y.__h.push(y._sb[de]);y._sb=[]}else do y.__d=!1,P&&P(r),x=y.render(y.props,y.state,y.context),y.state=y.__s;while(y.__d&&++W<25);y.state=y.__s,y.getChildContext!=null&&(l=Kn(Kn({},l),y.getChildContext())),D&&!_&&y.getSnapshotBeforeUpdate!=null&&(A=y.getSnapshotBeforeUpdate(S,E)),se=x,x!=null&&x.type===Oe&&x.key==null&&(se=v0(x.props.children)),p=p0(a,Ao(se)?se:[se],r,o,l,u,d,h,p,m,v),y.base=r.__e,r.__u&=-161,y.__h.length&&h.push(y),U&&(y.__E=y.__=null)}catch(I){if(r.__v=null,m||d!=null)if(I.then){for(r.__u|=m?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;d[d.indexOf(p)]=null,r.__e=p}else{for(ge=d.length;ge--;)sf(d[ge]);Hd(r)}else r.__e=o.__e,r.__k=o.__k,I.then||Hd(r);ye.__e(I,r,o)}else d==null&&r.__v==o.__v?(r.__k=o.__k,r.__e=o.__e):p=r.__e=C1(o.__e,r,o,l,u,d,h,m,v);return(x=ye.diffed)&&x(r),128&r.__u?void 0:p}function Hd(a){a&&a.__c&&(a.__c.__e=!0),a&&a.__k&&a.__k.forEach(Hd)}function g0(a,r,o){for(var l=0;l<o.length;l++)uf(o[l],o[++l],o[++l]);ye.__c&&ye.__c(r,a),a.some(function(u){try{a=u.__h,u.__h=[],a.some(function(d){d.call(u)})}catch(d){ye.__e(d,u.__v)}})}function v0(a){return typeof a!="object"||a==null||a.__b&&a.__b>0?a:Ao(a)?a.map(v0):Kn({},a)}function C1(a,r,o,l,u,d,h,p,m){var v,x,y,_,S,E,A,U=o.props||wo,C=r.props,D=r.type;if(D=="svg"?u="http://www.w3.org/2000/svg":D=="math"?u="http://www.w3.org/1998/Math/MathML":u||(u="http://www.w3.org/1999/xhtml"),d!=null){for(v=0;v<d.length;v++)if((S=d[v])&&"setAttribute"in S==!!D&&(D?S.localName==D:S.nodeType==3)){a=S,d[v]=null;break}}if(a==null){if(D==null)return document.createTextNode(C);a=document.createElementNS(u,D,C.is&&C),p&&(ye.__m&&ye.__m(r,d),p=!1),d=null}if(D==null)U===C||p&&a.data==C||(a.data=C);else{if(d=d&&Ms.call(a.childNodes),!p&&d!=null)for(U={},v=0;v<a.attributes.length;v++)U[(S=a.attributes[v]).name]=S.value;for(v in U)if(S=U[v],v!="children"){if(v=="dangerouslySetInnerHTML")y=S;else if(!(v in C)){if(v=="value"&&"defaultValue"in C||v=="checked"&&"defaultChecked"in C)continue;Jl(a,v,null,S,u)}}for(v in C)S=C[v],v=="children"?_=S:v=="dangerouslySetInnerHTML"?x=S:v=="value"?E=S:v=="checked"?A=S:p&&typeof S!="function"||U[v]===S||Jl(a,v,S,U[v],u);if(x)p||y&&(x.__html==y.__html||x.__html==a.innerHTML)||(a.innerHTML=x.__html),r.__k=[];else if(y&&(a.innerHTML=""),p0(r.type=="template"?a.content:a,Ao(_)?_:[_],r,o,l,D=="foreignObject"?"http://www.w3.org/1999/xhtml":u,d,h,d?d[0]:o.__k&&oi(o,0),p,m),d!=null)for(v=d.length;v--;)sf(d[v]);p||(v="value",D=="progress"&&E==null?a.removeAttribute("value"):E!=null&&(E!==a[v]||D=="progress"&&!E||D=="option"&&E!=U[v])&&Jl(a,v,E,U[v],u),v="checked",A!=null&&A!=a[v]&&Jl(a,v,A,U[v],u))}return a}function uf(a,r,o){try{if(typeof a=="function"){var l=typeof a.__u=="function";l&&a.__u(),l&&r==null||(a.__u=a(r))}else a.current=r}catch(u){ye.__e(u,o)}}function y0(a,r,o){var l,u;if(ye.unmount&&ye.unmount(a),(l=a.ref)&&(l.current&&l.current!=a.__e||uf(l,null,r)),(l=a.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(d){ye.__e(d,r)}l.base=l.__P=null}if(l=a.__k)for(u=0;u<l.length;u++)l[u]&&y0(l[u],r,o||typeof a.type!="function");o||sf(a.__e),a.__c=a.__=a.__e=void 0}function k1(a,r,o){return this.constructor(a,o)}function po(a,r,o){var l,u,d,h;r==document&&(r=document.documentElement),ye.__&&ye.__(a,r),u=(l=!1)?null:r.__k,d=[],h=[],cf(r,a=r.__k=rr(Oe,null,[a]),u||wo,wo,r.namespaceURI,u?null:r.firstChild?Ms.call(r.childNodes):null,d,u?u.__e:r.firstChild,l,h),g0(d,a,h)}function b0(a){function r(o){var l,u;return this.getChildContext||(l=new Set,(u={})[r.__c]=this,this.getChildContext=function(){return u},this.componentWillUnmount=function(){l=null},this.shouldComponentUpdate=function(d){this.props.value!=d.value&&l.forEach(function(h){h.__e=!0,Ud(h)})},this.sub=function(d){l.add(d);var h=d.componentWillUnmount;d.componentWillUnmount=function(){l&&l.delete(d),h&&h.call(d)}}),o.children}return r.__c="__cC"+d0++,r.__=a,r.Provider=r.__l=(r.Consumer=function(o,l){return o.children(l)}).contextType=r,r}Ms=f0.slice,ye={__e:function(a,r,o,l){for(var u,d,h;r=r.__;)if((u=r.__c)&&!u.__)try{if((d=u.constructor)&&d.getDerivedStateFromError!=null&&(u.setState(d.getDerivedStateFromError(a)),h=u.__d),u.componentDidCatch!=null&&(u.componentDidCatch(a,l||{}),h=u.__d),h)return u.__E=u}catch(p){a=p}throw a}},o0=0,l0=function(a){return a!=null&&a.constructor===void 0},cn.prototype.setState=function(a,r){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Kn({},this.state),typeof a=="function"&&(a=a(Kn({},o),this.props)),a&&Kn(o,a),a!=null&&this.__v&&(r&&this._sb.push(r),Ud(this))},cn.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),Ud(this))},cn.prototype.render=Oe,Pa=[],s0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c0=function(a,r){return a.__v.__b-r.__v.__b},hs.__r=0,u0=/(PointerCapture)$|Capture$/i,lf=0,Od=qg(!1),Rd=qg(!0),d0=0;var ir,Pe,ed,Vg,xo=0,w0=[],lt=ye,Fg=lt.__b,Gg=lt.__r,$g=lt.diffed,Qg=lt.__c,Zg=lt.unmount,Kg=lt.__;function Mo(a,r){lt.__h&&lt.__h(Pe,a,xo||r),xo=0;var o=Pe.__H||(Pe.__H={__:[],__h:[]});return a>=o.__.length&&o.__.push({}),o.__[a]}function Te(a){return xo=1,E1(x0,a)}function E1(a,r,o){var l=Mo(ir++,2);if(l.t=a,!l.__c&&(l.__=[o?o(r):x0(void 0,r),function(p){var m=l.__N?l.__N[0]:l.__[0],v=l.t(m,p);m!==v&&(l.__N=[v,l.__[1]],l.__c.setState({}))}],l.__c=Pe,!Pe.__f)){var u=function(p,m,v){if(!l.__c.__H)return!0;var x=l.__c.__H.__.filter(function(_){return!!_.__c});if(x.every(function(_){return!_.__N}))return!d||d.call(this,p,m,v);var y=l.__c.props!==p;return x.forEach(function(_){if(_.__N){var S=_.__[0];_.__=_.__N,_.__N=void 0,S!==_.__[0]&&(y=!0)}}),d&&d.call(this,p,m,v)||y};Pe.__f=!0;var d=Pe.shouldComponentUpdate,h=Pe.componentWillUpdate;Pe.componentWillUpdate=function(p,m,v){if(this.__e){var x=d;d=void 0,u(p,m,v),d=x}h&&h.call(this,p,m,v)},Pe.shouldComponentUpdate=u}return l.__N||l.__}function Se(a,r){var o=Mo(ir++,3);!lt.__s&&hf(o.__H,r)&&(o.__=a,o.u=r,Pe.__H.__h.push(o))}function df(a,r){var o=Mo(ir++,4);!lt.__s&&hf(o.__H,r)&&(o.__=a,o.u=r,Pe.__h.push(o))}function le(a){return xo=5,yn(function(){return{current:a}},[])}function yn(a,r){var o=Mo(ir++,7);return hf(o.__H,r)&&(o.__=a(),o.__H=r,o.__h=a),o.__}function ot(a,r){return xo=8,yn(function(){return a},r)}function ff(a){var r=Pe.context[a.__c],o=Mo(ir++,9);return o.c=a,r?(o.__==null&&(o.__=!0,r.sub(Pe)),r.props.value):a.__}function N1(){for(var a;a=w0.shift();)if(a.__P&&a.__H)try{a.__H.__h.forEach(ss),a.__H.__h.forEach(jd),a.__H.__h=[]}catch(r){a.__H.__h=[],lt.__e(r,a.__v)}}lt.__b=function(a){Pe=null,Fg&&Fg(a)},lt.__=function(a,r){a&&r.__k&&r.__k.__m&&(a.__m=r.__k.__m),Kg&&Kg(a,r)},lt.__r=function(a){Gg&&Gg(a),ir=0;var r=(Pe=a.__c).__H;r&&(ed===Pe?(r.__h=[],Pe.__h=[],r.__.forEach(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(r.__h.forEach(ss),r.__h.forEach(jd),r.__h=[],ir=0)),ed=Pe},lt.diffed=function(a){$g&&$g(a);var r=a.__c;r&&r.__H&&(r.__H.__h.length&&(w0.push(r)!==1&&Vg===lt.requestAnimationFrame||((Vg=lt.requestAnimationFrame)||z1)(N1)),r.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.u=void 0})),ed=Pe=null},lt.__c=function(a,r){r.some(function(o){try{o.__h.forEach(ss),o.__h=o.__h.filter(function(l){return!l.__||jd(l)})}catch(l){r.some(function(u){u.__h&&(u.__h=[])}),r=[],lt.__e(l,o.__v)}}),Qg&&Qg(a,r)},lt.unmount=function(a){Zg&&Zg(a);var r,o=a.__c;o&&o.__H&&(o.__H.__.forEach(function(l){try{ss(l)}catch(u){r=u}}),o.__H=void 0,r&&lt.__e(r,o.__v))};var Jg=typeof requestAnimationFrame=="function";function z1(a){var r,o=function(){clearTimeout(l),Jg&&cancelAnimationFrame(r),setTimeout(a)},l=setTimeout(o,35);Jg&&(r=requestAnimationFrame(o))}function ss(a){var r=Pe,o=a.__c;typeof o=="function"&&(a.__c=void 0,o()),Pe=r}function jd(a){var r=Pe;a.__c=a.__(),Pe=r}function hf(a,r){return!a||a.length!==r.length||r.some(function(o,l){return o!==a[l]})}function x0(a,r){return typeof r=="function"?r(a):r}var A1=Symbol.for("preact-signals");function pf(){if(ei>1)ei--;else{for(var a,r=!1;mo!==void 0;){var o=mo;for(mo=void 0,Ld++;o!==void 0;){var l=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&S0(o))try{o.c()}catch(u){r||(a=u,r=!0)}o=l}}if(Ld=0,ei--,r)throw a}}var Be=void 0;function _o(a){var r=Be;Be=void 0;try{return a()}finally{Be=r}}var mo=void 0,ei=0,Ld=0,ms=0;function _0(a){if(Be!==void 0){var r=a.n;if(r===void 0||r.t!==Be)return r={i:0,S:a,p:Be.s,n:void 0,t:Be,e:void 0,x:void 0,r},Be.s!==void 0&&(Be.s.n=r),Be.s=r,a.n=r,32&Be.f&&a.S(r),r;if(r.i===-1)return r.i=0,r.n!==void 0&&(r.n.p=r.p,r.p!==void 0&&(r.p.n=r.n),r.p=Be.s,r.n=void 0,Be.s.n=r,Be.s=r),r}}function kt(a,r){this.v=a,this.i=0,this.n=void 0,this.t=void 0,this.W=r?.watched,this.Z=r?.unwatched,this.name=r?.name}kt.prototype.brand=A1;kt.prototype.h=function(){return!0};kt.prototype.S=function(a){var r=this,o=this.t;o!==a&&a.e===void 0&&(a.x=o,this.t=a,o!==void 0?o.e=a:_o(function(){var l;(l=r.W)==null||l.call(r)}))};kt.prototype.U=function(a){var r=this;if(this.t!==void 0){var o=a.e,l=a.x;o!==void 0&&(o.x=l,a.e=void 0),l!==void 0&&(l.e=o,a.x=void 0),a===this.t&&(this.t=l,l===void 0&&_o(function(){var u;(u=r.Z)==null||u.call(r)}))}};kt.prototype.subscribe=function(a){var r=this;return Ds(function(){var o=r.value,l=Be;Be=void 0;try{a(o)}finally{Be=l}},{name:"sub"})};kt.prototype.valueOf=function(){return this.value};kt.prototype.toString=function(){return this.value+""};kt.prototype.toJSON=function(){return this.value};kt.prototype.peek=function(){var a=Be;Be=void 0;try{return this.value}finally{Be=a}};Object.defineProperty(kt.prototype,"value",{get:function(){var a=_0(this);return a!==void 0&&(a.i=this.i),this.v},set:function(a){if(a!==this.v){if(Ld>100)throw new Error("Cycle detected");this.v=a,this.i++,ms++,ei++;try{for(var r=this.t;r!==void 0;r=r.x)r.t.N()}finally{pf()}}}});function ht(a,r){return new kt(a,r)}function S0(a){for(var r=a.s;r!==void 0;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function T0(a){for(var r=a.s;r!==void 0;r=r.n){var o=r.S.n;if(o!==void 0&&(r.r=o),r.S.n=r,r.i=-1,r.n===void 0){a.s=r;break}}}function C0(a){for(var r=a.s,o=void 0;r!==void 0;){var l=r.p;r.i===-1?(r.S.U(r),l!==void 0&&(l.n=r.n),r.n!==void 0&&(r.n.p=l)):o=r,r.S.n=r.r,r.r!==void 0&&(r.r=void 0),r=l}a.s=o}function sr(a,r){kt.call(this,void 0),this.x=a,this.s=void 0,this.g=ms-1,this.f=4,this.W=r?.watched,this.Z=r?.unwatched,this.name=r?.name}sr.prototype=new kt;sr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ms))return!0;if(this.g=ms,this.f|=1,this.i>0&&!S0(this))return this.f&=-2,!0;var a=Be;try{T0(this),Be=this;var r=this.x();(16&this.f||this.v!==r||this.i===0)&&(this.v=r,this.f&=-17,this.i++)}catch(o){this.v=o,this.f|=16,this.i++}return Be=a,C0(this),this.f&=-2,!0};sr.prototype.S=function(a){if(this.t===void 0){this.f|=36;for(var r=this.s;r!==void 0;r=r.n)r.S.S(r)}kt.prototype.S.call(this,a)};sr.prototype.U=function(a){if(this.t!==void 0&&(kt.prototype.U.call(this,a),this.t===void 0)){this.f&=-33;for(var r=this.s;r!==void 0;r=r.n)r.S.U(r)}};sr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var a=this.t;a!==void 0;a=a.x)a.t.N()}};Object.defineProperty(sr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var a=_0(this);if(this.h(),a!==void 0&&(a.i=this.i),16&this.f)throw this.v;return this.v}});function cr(a,r){return new sr(a,r)}function k0(a){var r=a.u;if(a.u=void 0,typeof r=="function"){ei++;var o=Be;Be=void 0;try{r()}catch(l){throw a.f&=-2,a.f|=8,mf(a),l}finally{Be=o,pf()}}}function mf(a){for(var r=a.s;r!==void 0;r=r.n)r.S.U(r);a.x=void 0,a.s=void 0,k0(a)}function M1(a){if(Be!==this)throw new Error("Out-of-order effect");C0(this),Be=a,this.f&=-2,8&this.f&&mf(this),pf()}function si(a,r){this.x=a,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=r?.name}si.prototype.c=function(){var a=this.S();try{if(8&this.f||this.x===void 0)return;var r=this.x();typeof r=="function"&&(this.u=r)}finally{a()}};si.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,k0(this),T0(this),ei++;var a=Be;return Be=this,M1.bind(this,a)};si.prototype.N=function(){2&this.f||(this.f|=2,this.o=mo,mo=this)};si.prototype.d=function(){this.f|=8,1&this.f||mf(this)};si.prototype.dispose=function(){this.d()};function Ds(a,r){var o=new si(a,r);try{o.c()}catch(u){throw o.d(),u}var l=o.d.bind(o);return l[Symbol.dispose]=l,l}var Il;function ci(a,r){ye[a]=r.bind(null,ye[a]||function(){})}function gs(a){if(Il){var r=Il;Il=void 0,r()}Il=a&&a.S()}function E0(a){var r=this,o=a.data,l=O1(o);l.value=o;var u=yn(function(){for(var d=r.__v;d=d.__;)if(d.__c){d.__c.__$f|=4;break}return r.__$u.c=function(){var h,p=r.__$u.S(),m=u.value;p(),l0(m)||((h=r.base)==null?void 0:h.nodeType)!==3?(r.__$f|=1,r.setState({})):r.base.data=m},cr(function(){var h=l.value.value;return h===0?0:h===!0?"":h||""})},[]);return u.value}E0.displayName="_st";Object.defineProperties(kt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:E0},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ci("__b",function(a,r){if(typeof r.type=="string"){var o,l=r.props;for(var u in l)if(u!=="children"){var d=l[u];d instanceof kt&&(o||(r.__np=o={}),o[u]=d,l[u]=d.peek())}}a(r)});ci("__r",function(a,r){a(r),gs();var o,l=r.__c;l&&(l.__$f&=-2,(o=l.__$u)===void 0&&(l.__$u=o=(function(u){var d;return Ds(function(){d=this}),d.c=function(){l.__$f|=1,l.setState({})},d})())),gs(o)});ci("__e",function(a,r,o,l){gs(),a(r,o,l)});ci("diffed",function(a,r){gs();var o;if(typeof r.type=="string"&&(o=r.__e)){var l=r.__np,u=r.props;if(l){var d=o.U;if(d)for(var h in d){var p=d[h];p!==void 0&&!(h in l)&&(p.d(),d[h]=void 0)}else o.U=d={};for(var m in l){var v=d[m],x=l[m];v===void 0?(v=D1(o,m,x,u),d[m]=v):v.o(x,u)}}}a(r)});function D1(a,r,o,l){var u=r in a&&a.ownerSVGElement===void 0,d=ht(o);return{o:function(h,p){d.value=h,l=p},d:Ds(function(){var h=d.value.value;l[r]!==h&&(l[r]=h,u?a[r]=h:h?a.setAttribute(r,h):a.removeAttribute(r))})}}ci("unmount",function(a,r){if(typeof r.type=="string"){var o=r.__e;if(o){var l=o.U;if(l){o.U=void 0;for(var u in l){var d=l[u];d&&d.d()}}}}else{var h=r.__c;if(h){var p=h.__$u;p&&(h.__$u=void 0,p.d())}}a(r)});ci("__h",function(a,r,o,l){(l<3||l===9)&&(r.__$f|=2),a(r,o,l)});cn.prototype.shouldComponentUpdate=function(a,r){if(this.__R)return!0;var o=this.__$u,l=o&&o.s!==void 0;for(var u in r)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(l||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(l||4&this.__$f)||3&this.__$f)return!0;for(var d in a)if(d!=="__source"&&a[d]!==this.props[d])return!0;for(var h in this.props)if(!(h in a))return!0;return!1};function O1(a){return yn(function(){return ht(a)},[])}function So(a){var r=le(a);r.current=a,Se(function(){return Ds(function(){return r.current()})},[])}function N0(a,r){for(var o in r)a[o]=r[o];return a}function Bd(a,r){for(var o in a)if(o!=="__source"&&!(o in r))return!0;for(var l in r)if(l!=="__source"&&a[l]!==r[l])return!0;return!1}function R1(a,r){var o=r(),l=Te({t:{__:o,u:r}}),u=l[0].t,d=l[1];return df(function(){u.__=o,u.u=r,td(u)&&d({t:u})},[a,o,r]),Se(function(){return td(u)&&d({t:u}),a(function(){td(u)&&d({t:u})})},[a]),o}function td(a){var r,o,l=a.u,u=a.__;try{var d=l();return!((r=u)===(o=d)&&(r!==0||1/r==1/o)||r!=r&&o!=o)}catch{return!0}}function Ig(a,r){this.props=a,this.context=r}function Os(a,r){function o(u){var d=this.props.ref,h=d==u.ref;return!h&&d&&(d.call?d(null):d.current=null),r?!r(this.props,u)||!h:Bd(this.props,u)}function l(u){return this.shouldComponentUpdate=o,rr(a,u)}return l.displayName="Memo("+(a.displayName||a.name)+")",l.prototype.isReactComponent=!0,l.__f=!0,l.type=a,l}(Ig.prototype=new cn).isPureReactComponent=!0,Ig.prototype.shouldComponentUpdate=function(a,r){return Bd(this.props,a)||Bd(this.state,r)};var Wg=ye.__b;ye.__b=function(a){a.type&&a.type.__f&&a.ref&&(a.props.ref=a.ref,a.ref=null),Wg&&Wg(a)};var U1=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function gf(a){function r(o){var l=N0({},o);return delete l.ref,a(l,o.ref||null)}return r.$$typeof=U1,r.render=a,r.prototype.isReactComponent=r.__f=!0,r.displayName="ForwardRef("+(a.displayName||a.name)+")",r}var H1=ye.__e;ye.__e=function(a,r,o,l){if(a.then){for(var u,d=r;d=d.__;)if((u=d.__c)&&u.__c)return r.__e==null&&(r.__e=o.__e,r.__k=o.__k),u.__c(a,r)}H1(a,r,o,l)};var Pg=ye.unmount;function z0(a,r,o){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),a.__c.__H=null),(a=N0({},a)).__c!=null&&(a.__c.__P===o&&(a.__c.__P=r),a.__c.__e=!0,a.__c=null),a.__k=a.__k&&a.__k.map(function(l){return z0(l,r,o)})),a}function A0(a,r,o){return a&&o&&(a.__v=null,a.__k=a.__k&&a.__k.map(function(l){return A0(l,r,o)}),a.__c&&a.__c.__P===r&&(a.__e&&o.appendChild(a.__e),a.__c.__e=!0,a.__c.__P=o)),a}function nd(){this.__u=0,this.o=null,this.__b=null}function M0(a){if(!a.__)return null;var r=a.__.__c;return r&&r.__a&&r.__a(a)}function Wl(){this.i=null,this.l=null}ye.unmount=function(a){var r=a.__c;r&&(r.__z=!0),r&&r.__R&&r.__R(),r&&32&a.__u&&(a.type=null),Pg&&Pg(a)},(nd.prototype=new cn).__c=function(a,r){var o=r.__c,l=this;l.o==null&&(l.o=[]),l.o.push(o);var u=M0(l.__v),d=!1,h=function(){d||l.__z||(d=!0,o.__R=null,u?u(m):m())};o.__R=h;var p=o.__P;o.__P=null;var m=function(){if(!--l.__u){if(l.state.__a){var v=l.state.__a;l.__v.__k[0]=A0(v,v.__c.__P,v.__c.__O)}var x;for(l.setState({__a:l.__b=null});x=l.o.pop();)x.__P=p,x.forceUpdate()}};l.__u++||32&r.__u||l.setState({__a:l.__b=l.__v.__k[0]}),a.then(h,h)},nd.prototype.componentWillUnmount=function(){this.o=[]},nd.prototype.render=function(a,r){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),l=this.__v.__k[0].__c;this.__v.__k[0]=z0(this.__b,o,l.__O=l.__P)}this.__b=null}var u=r.__a&&rr(Oe,null,a.fallback);return u&&(u.__u&=-33),[rr(Oe,null,r.__a?null:a.children),u]};var ev=function(a,r,o){if(++o[1]===o[0]&&a.l.delete(r),a.props.revealOrder&&(a.props.revealOrder[0]!=="t"||!a.l.size))for(o=a.i;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;a.i=o=o[2]}};function j1(a){return this.getChildContext=function(){return a.context},a.children}function L1(a){var r=this,o=a.h;if(r.componentWillUnmount=function(){po(null,r.v),r.v=null,r.h=null},r.h&&r.h!==o&&r.componentWillUnmount(),!r.v){for(var l=r.__v;l!==null&&!l.__m&&l.__!==null;)l=l.__;r.h=o,r.v={nodeType:1,parentNode:o,childNodes:[],__k:{__m:l.__m},contains:function(){return!0},namespaceURI:o.namespaceURI,insertBefore:function(u,d){this.childNodes.push(u),r.h.insertBefore(u,d)},removeChild:function(u){this.childNodes.splice(this.childNodes.indexOf(u)>>>1,1),r.h.removeChild(u)}}}po(rr(j1,{context:r.context},a.__v),r.v)}function B1(a,r){var o=rr(L1,{__v:a,h:r});return o.containerInfo=r,o}(Wl.prototype=new cn).__a=function(a){var r=this,o=M0(r.__v),l=r.l.get(a);return l[0]++,function(u){var d=function(){r.props.revealOrder?(l.push(u),ev(r,a,l)):u()};o?o(d):d()}},Wl.prototype.render=function(a){this.i=null,this.l=new Map;var r=ps(a.children);a.revealOrder&&a.revealOrder[0]==="b"&&r.reverse();for(var o=r.length;o--;)this.l.set(r[o],this.i=[1,0,this.i]);return a.children},Wl.prototype.componentDidUpdate=Wl.prototype.componentDidMount=function(){var a=this;this.l.forEach(function(r,o){ev(a,o,r)})};var Y1=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,X1=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,q1=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,V1=/[A-Z0-9]/g,F1=typeof document<"u",G1=function(a){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(a)};cn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(a){Object.defineProperty(cn.prototype,a,{configurable:!0,get:function(){return this["UNSAFE_"+a]},set:function(r){Object.defineProperty(this,a,{configurable:!0,writable:!0,value:r})}})});var tv=ye.event;function $1(){}function Q1(){return this.cancelBubble}function Z1(){return this.defaultPrevented}ye.event=function(a){return tv&&(a=tv(a)),a.persist=$1,a.isPropagationStopped=Q1,a.isDefaultPrevented=Z1,a.nativeEvent=a};var K1={enumerable:!1,configurable:!0,get:function(){return this.class}},nv=ye.vnode;ye.vnode=function(a){typeof a.type=="string"&&(function(r){var o=r.props,l=r.type,u={},d=l.indexOf("-")===-1;for(var h in o){var p=o[h];if(!(h==="value"&&"defaultValue"in o&&p==null||F1&&h==="children"&&l==="noscript"||h==="class"||h==="className")){var m=h.toLowerCase();h==="defaultValue"&&"value"in o&&o.value==null?h="value":h==="download"&&p===!0?p="":m==="translate"&&p==="no"?p=!1:m[0]==="o"&&m[1]==="n"?m==="ondoubleclick"?h="ondblclick":m!=="onchange"||l!=="input"&&l!=="textarea"||G1(o.type)?m==="onfocus"?h="onfocusin":m==="onblur"?h="onfocusout":q1.test(h)&&(h=m):m=h="oninput":d&&X1.test(h)?h=h.replace(V1,"-$&").toLowerCase():p===null&&(p=void 0),m==="oninput"&&u[h=m]&&(h="oninputCapture"),u[h]=p}}l=="select"&&u.multiple&&Array.isArray(u.value)&&(u.value=ps(o.children).forEach(function(v){v.props.selected=u.value.indexOf(v.props.value)!=-1})),l=="select"&&u.defaultValue!=null&&(u.value=ps(o.children).forEach(function(v){v.props.selected=u.multiple?u.defaultValue.indexOf(v.props.value)!=-1:u.defaultValue==v.props.value})),o.class&&!o.className?(u.class=o.class,Object.defineProperty(u,"className",K1)):(o.className&&!o.class||o.class&&o.className)&&(u.class=u.className=o.className),r.props=u})(a),a.$$typeof=Y1,nv&&nv(a)};var av=ye.__r;ye.__r=function(a){av&&av(a),a.__c};var rv=ye.diffed;ye.diffed=function(a){rv&&rv(a);var r=a.props,o=a.__e;o!=null&&a.type==="textarea"&&"value"in r&&r.value!==o.value&&(o.value=r.value==null?"":r.value)};var J1=0;function f(a,r,o,l,u,d){r||(r={});var h,p,m=r;if("ref"in m)for(p in m={},r)p=="ref"?h=r[p]:m[p]=r[p];var v={type:a,props:m,key:o,ref:h,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--J1,__i:-1,__u:0,__source:u,__self:d};if(typeof a=="function"&&(h=a.defaultProps))for(p in h)m[p]===void 0&&(m[p]=h[p]);return ye.vnode&&ye.vnode(v),v}var ad={exports:{}},pe={};var iv;function I1(){if(iv)return pe;iv=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),_=Symbol.iterator;function S(T){return T===null||typeof T!="object"?null:(T=_&&T[_]||T["@@iterator"],typeof T=="function"?T:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,U={};function C(T,H,F){this.props=T,this.context=H,this.refs=U,this.updater=F||E}C.prototype.isReactComponent={},C.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},C.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function D(){}D.prototype=C.prototype;function q(T,H,F){this.props=T,this.context=H,this.refs=U,this.updater=F||E}var Q=q.prototype=new D;Q.constructor=q,A(Q,C.prototype),Q.isPureReactComponent=!0;var Z=Array.isArray;function P(){}var W={H:null,A:null,T:null,S:null},de=Object.prototype.hasOwnProperty;function se(T,H,F){var K=F.ref;return{$$typeof:a,type:T,key:H,ref:K!==void 0?K:null,props:F}}function ge(T,H){return se(T.type,H,T.props)}function ue(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function I(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(F){return H[F]})}var ve=/\/+/g;function Ee(T,H){return typeof T=="object"&&T!==null&&T.key!=null?I(""+T.key):H.toString(36)}function Me(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(P,P):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function w(T,H,F,K,ee){var re=typeof T;(re==="undefined"||re==="boolean")&&(T=null);var he=!1;if(T===null)he=!0;else switch(re){case"bigint":case"string":case"number":he=!0;break;case"object":switch(T.$$typeof){case a:case r:he=!0;break;case x:return he=T._init,w(he(T._payload),H,F,K,ee)}}if(he)return ee=ee(T),he=K===""?"."+Ee(T,0):K,Z(ee)?(F="",he!=null&&(F=he.replace(ve,"$&/")+"/"),w(ee,H,F,"",function(pt){return pt})):ee!=null&&(ue(ee)&&(ee=ge(ee,F+(ee.key==null||T&&T.key===ee.key?"":(""+ee.key).replace(ve,"$&/")+"/")+he)),H.push(ee)),1;he=0;var Ue=K===""?".":K+":";if(Z(T))for(var we=0;we<T.length;we++)K=T[we],re=Ue+Ee(K,we),he+=w(K,H,F,re,ee);else if(we=S(T),typeof we=="function")for(T=we.call(T),we=0;!(K=T.next()).done;)K=K.value,re=Ue+Ee(K,we++),he+=w(K,H,F,re,ee);else if(re==="object"){if(typeof T.then=="function")return w(Me(T),H,F,K,ee);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return he}function N(T,H,F){if(T==null)return T;var K=[],ee=0;return w(T,K,"","",function(re){return H.call(F,re,ee++)}),K}function R(T){if(T._status===-1){var H=T._result;H=H(),H.then(function(F){(T._status===0||T._status===-1)&&(T._status=1,T._result=F)},function(F){(T._status===0||T._status===-1)&&(T._status=2,T._result=F)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var $=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},J={map:N,forEach:function(T,H,F){N(T,function(){H.apply(this,arguments)},F)},count:function(T){var H=0;return N(T,function(){H++}),H},toArray:function(T){return N(T,function(H){return H})||[]},only:function(T){if(!ue(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return pe.Activity=y,pe.Children=J,pe.Component=C,pe.Fragment=o,pe.Profiler=u,pe.PureComponent=q,pe.StrictMode=l,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,pe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return W.H.useMemoCache(T)}},pe.cache=function(T){return function(){return T.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(T,H,F){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var K=A({},T.props),ee=T.key;if(H!=null)for(re in H.key!==void 0&&(ee=""+H.key),H)!de.call(H,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&H.ref===void 0||(K[re]=H[re]);var re=arguments.length-2;if(re===1)K.children=F;else if(1<re){for(var he=Array(re),Ue=0;Ue<re;Ue++)he[Ue]=arguments[Ue+2];K.children=he}return se(T.type,ee,K)},pe.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},pe.createElement=function(T,H,F){var K,ee={},re=null;if(H!=null)for(K in H.key!==void 0&&(re=""+H.key),H)de.call(H,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ee[K]=H[K]);var he=arguments.length-2;if(he===1)ee.children=F;else if(1<he){for(var Ue=Array(he),we=0;we<he;we++)Ue[we]=arguments[we+2];ee.children=Ue}if(T&&T.defaultProps)for(K in he=T.defaultProps,he)ee[K]===void 0&&(ee[K]=he[K]);return se(T,re,ee)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(T){return{$$typeof:p,render:T}},pe.isValidElement=ue,pe.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:R}},pe.memo=function(T,H){return{$$typeof:v,type:T,compare:H===void 0?null:H}},pe.startTransition=function(T){var H=W.T,F={};W.T=F;try{var K=T(),ee=W.S;ee!==null&&ee(F,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(P,$)}catch(re){$(re)}finally{H!==null&&F.types!==null&&(H.types=F.types),W.T=H}},pe.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},pe.use=function(T){return W.H.use(T)},pe.useActionState=function(T,H,F){return W.H.useActionState(T,H,F)},pe.useCallback=function(T,H){return W.H.useCallback(T,H)},pe.useContext=function(T){return W.H.useContext(T)},pe.useDebugValue=function(){},pe.useDeferredValue=function(T,H){return W.H.useDeferredValue(T,H)},pe.useEffect=function(T,H){return W.H.useEffect(T,H)},pe.useEffectEvent=function(T){return W.H.useEffectEvent(T)},pe.useId=function(){return W.H.useId()},pe.useImperativeHandle=function(T,H,F){return W.H.useImperativeHandle(T,H,F)},pe.useInsertionEffect=function(T,H){return W.H.useInsertionEffect(T,H)},pe.useLayoutEffect=function(T,H){return W.H.useLayoutEffect(T,H)},pe.useMemo=function(T,H){return W.H.useMemo(T,H)},pe.useOptimistic=function(T,H){return W.H.useOptimistic(T,H)},pe.useReducer=function(T,H,F){return W.H.useReducer(T,H,F)},pe.useRef=function(T){return W.H.useRef(T)},pe.useState=function(T){return W.H.useState(T)},pe.useSyncExternalStore=function(T,H,F){return W.H.useSyncExternalStore(T,H,F)},pe.useTransition=function(){return W.H.useTransition()},pe.version="19.2.4",pe}var ov;function vf(){return ov||(ov=1,ad.exports=I1()),ad.exports}var Ae=vf();Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(a){return[...this].sort(a)},writable:!0,configurable:!0});function W1(a,r){return r-a}function P1(a){let r=a[0].name;const o=a.length,l=Math.min(4,o);for(let u=1;u<l;u++)r+=`, ${a[u].name}`;return r}function ex(a){let r=a[0].time;for(let o=1,l=a.length;o<l;o++)r+=a[o].time;return r}function tx(a){for(let r=0,o=a.length;r<o;r++)if(a[r].forget)return!0;return!1}var nx=a=>{let r="";const o=new Map;for(const h of a){const{forget:p,time:m,aggregatedCount:v,name:x}=h;o.has(v)||o.set(v,[]);const y=o.get(v);y&&y.push({name:x,forget:p,time:m??0})}const l=Array.from(o.keys()).sort(W1),u=[];let d=0;for(const h of l){const p=o.get(h);if(!p)continue;let m=P1(p);const v=ex(p),x=tx(p);d+=v,p.length>4&&(m+="…"),h>1&&(m+=` × ${h}`),x&&(m=`✨${m}`),u.push(m)}return r=u.join(", "),r.length?(r.length>40&&(r=`${r.slice(0,40)}…`),d>=.01&&(r+=` (${Number(d.toFixed(2))}ms)`),r):null};function Aa(a,r){return a===r||a!==a&&r!==r}var yf=a=>{const r=a.createOscillator(),o=a.createGain();r.connect(o),o.connect(a.destination);const l={type:"sine",freq:[392,600],duration:.3,gain:.12},u=l.freq,d=l.duration/u.length;u.forEach((h,p)=>{r.frequency.setValueAtTime(h,a.currentTime+p*d)}),r.type=l.type,o.gain.setValueAtTime(l.gain,a.currentTime),o.gain.setTargetAtTime(0,a.currentTime+l.duration*.7,.05),r.start(),r.stop(a.currentTime+l.duration)},ax=a=>new Promise(r=>{const o=new Map,l=new IntersectionObserver(u=>{for(const d of u){const h=d.target,p=d.boundingClientRect;o.set(h,p)}l.disconnect(),r(o)});for(const u of a)l.observe(u)}),rx={mount:1,update:2,unmount:4},nt=gf(({size:a=15,name:r,fill:o="currentColor",stroke:l="currentColor",className:u,externalURL:d="",style:h},p)=>{const m=Array.isArray(a)?a[0]:a,v=Array.isArray(a)?a[1]||a[0]:a,x=`${d}#${r}`;return f("svg",{ref:p,width:`${m}px`,height:`${v}px`,fill:o,stroke:l,className:u,style:{...h,minWidth:`${m}px`,maxWidth:`${m}px`,minHeight:`${v}px`,maxHeight:`${v}px`},children:[f("title",{children:r}),f("use",{href:x})]})}),me=24,ft={width:550,height:350,initialHeight:400},gn=240,Jn="react-scan-widget-settings-v2",cs="react-scan-widget-collapsed-v1",Zr="react-scan-widget-last-view-v1",En=typeof window<"u";function D0(a){var r,o,l="";if(typeof a=="string"||typeof a=="number")l+=a;else if(typeof a=="object")if(Array.isArray(a)){var u=a.length;for(r=0;r<u;r++)a[r]&&(o=D0(a[r]))&&(l&&(l+=" "),l+=o)}else for(o in a)a[o]&&(l&&(l+=" "),l+=o);return l}function ix(){for(var a,r,o=0,l="",u=arguments.length;o<u;o++)(a=arguments[o])&&(r=D0(a))&&(l&&(l+=" "),l+=r);return l}var bf="-",ox=a=>{const r=sx(a),{conflictingClassGroups:o,conflictingClassGroupModifiers:l}=a;return{getClassGroupId:h=>{const p=h.split(bf);return p[0]===""&&p.length!==1&&p.shift(),O0(p,r)||lx(h)},getConflictingClassGroupIds:(h,p)=>{const m=o[h]||[];return p&&l[h]?[...m,...l[h]]:m}}},O0=(a,r)=>{if(a.length===0)return r.classGroupId;const o=a[0],l=r.nextPart.get(o),u=l?O0(a.slice(1),l):void 0;if(u)return u;if(r.validators.length===0)return;const d=a.join(bf);return r.validators.find(({validator:h})=>h(d))?.classGroupId},lv=/^\[(.+)\]$/,lx=a=>{if(lv.test(a)){const r=lv.exec(a)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},sx=a=>{const{theme:r,prefix:o}=a,l={nextPart:new Map,validators:[]};return ux(Object.entries(a.classGroups),o).forEach(([d,h])=>{Yd(h,l,d,r)}),l},Yd=(a,r,o,l)=>{a.forEach(u=>{if(typeof u=="string"){const d=u===""?r:sv(r,u);d.classGroupId=o;return}if(typeof u=="function"){if(cx(u)){Yd(u(l),r,o,l);return}r.validators.push({validator:u,classGroupId:o});return}Object.entries(u).forEach(([d,h])=>{Yd(h,sv(r,d),o,l)})})},sv=(a,r)=>{let o=a;return r.split(bf).forEach(l=>{o.nextPart.has(l)||o.nextPart.set(l,{nextPart:new Map,validators:[]}),o=o.nextPart.get(l)}),o},cx=a=>a.isThemeGetter,ux=(a,r)=>r?a.map(([o,l])=>{const u=l.map(d=>typeof d=="string"?r+d:typeof d=="object"?Object.fromEntries(Object.entries(d).map(([h,p])=>[r+h,p])):d);return[o,u]}):a,dx=a=>{if(a<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,l=new Map;const u=(d,h)=>{o.set(d,h),r++,r>a&&(r=0,l=o,o=new Map)};return{get(d){let h=o.get(d);if(h!==void 0)return h;if((h=l.get(d))!==void 0)return u(d,h),h},set(d,h){o.has(d)?o.set(d,h):u(d,h)}}},R0="!",fx=a=>{const{separator:r,experimentalParseClassName:o}=a,l=r.length===1,u=r[0],d=r.length,h=p=>{const m=[];let v=0,x=0,y;for(let U=0;U<p.length;U++){let C=p[U];if(v===0){if(C===u&&(l||p.slice(U,U+d)===r)){m.push(p.slice(x,U)),x=U+d;continue}if(C==="/"){y=U;continue}}C==="["?v++:C==="]"&&v--}const _=m.length===0?p:p.substring(x),S=_.startsWith(R0),E=S?_.substring(1):_,A=y&&y>x?y-x:void 0;return{modifiers:m,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:A}};return o?p=>o({className:p,parseClassName:h}):h},hx=a=>{if(a.length<=1)return a;const r=[];let o=[];return a.forEach(l=>{l[0]==="["?(r.push(...o.sort(),l),o=[]):o.push(l)}),r.push(...o.sort()),r},px=a=>({cache:dx(a.cacheSize),parseClassName:fx(a),...ox(a)}),mx=/\s+/,gx=(a,r)=>{const{parseClassName:o,getClassGroupId:l,getConflictingClassGroupIds:u}=r,d=[],h=a.trim().split(mx);let p="";for(let m=h.length-1;m>=0;m-=1){const v=h[m],{modifiers:x,hasImportantModifier:y,baseClassName:_,maybePostfixModifierPosition:S}=o(v);let E=!!S,A=l(E?_.substring(0,S):_);if(!A){if(!E){p=v+(p.length>0?" "+p:p);continue}if(A=l(_),!A){p=v+(p.length>0?" "+p:p);continue}E=!1}const U=hx(x).join(":"),C=y?U+R0:U,D=C+A;if(d.includes(D))continue;d.push(D);const q=u(A,E);for(let Q=0;Q<q.length;++Q){const Z=q[Q];d.push(C+Z)}p=v+(p.length>0?" "+p:p)}return p};function vx(){let a=0,r,o,l="";for(;a<arguments.length;)(r=arguments[a++])&&(o=U0(r))&&(l&&(l+=" "),l+=o);return l}var U0=a=>{if(typeof a=="string")return a;let r,o="";for(let l=0;l<a.length;l++)a[l]&&(r=U0(a[l]))&&(o&&(o+=" "),o+=r);return o};function yx(a,...r){let o,l,u,d=h;function h(m){const v=r.reduce((x,y)=>y(x),a());return o=px(v),l=o.cache.get,u=o.cache.set,d=p,p(m)}function p(m){const v=l(m);if(v)return v;const x=gx(m,o);return u(m,x),x}return function(){return d(vx.apply(null,arguments))}}var Je=a=>{const r=o=>o[a]||[];return r.isThemeGetter=!0,r},H0=/^\[(?:([a-z-]+):)?(.+)\]$/i,bx=/^\d+\/\d+$/,wx=new Set(["px","full","screen"]),xx=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_x=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Sx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Tx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Cx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Qn=a=>ti(a)||wx.has(a)||bx.test(a),Ta=a=>ui(a,"length",Ox),ti=a=>!!a&&!Number.isNaN(Number(a)),rd=a=>ui(a,"number",ti),ro=a=>!!a&&Number.isInteger(Number(a)),kx=a=>a.endsWith("%")&&ti(a.slice(0,-1)),_e=a=>H0.test(a),Ca=a=>xx.test(a),Ex=new Set(["length","size","percentage"]),Nx=a=>ui(a,Ex,j0),zx=a=>ui(a,"position",j0),Ax=new Set(["image","url"]),Mx=a=>ui(a,Ax,Ux),Dx=a=>ui(a,"",Rx),io=()=>!0,ui=(a,r,o)=>{const l=H0.exec(a);return l?l[1]?typeof r=="string"?l[1]===r:r.has(l[1]):o(l[2]):!1},Ox=a=>_x.test(a)&&!Sx.test(a),j0=()=>!1,Rx=a=>Tx.test(a),Ux=a=>Cx.test(a),Hx=()=>{const a=Je("colors"),r=Je("spacing"),o=Je("blur"),l=Je("brightness"),u=Je("borderColor"),d=Je("borderRadius"),h=Je("borderSpacing"),p=Je("borderWidth"),m=Je("contrast"),v=Je("grayscale"),x=Je("hueRotate"),y=Je("invert"),_=Je("gap"),S=Je("gradientColorStops"),E=Je("gradientColorStopPositions"),A=Je("inset"),U=Je("margin"),C=Je("opacity"),D=Je("padding"),q=Je("saturate"),Q=Je("scale"),Z=Je("sepia"),P=Je("skew"),W=Je("space"),de=Je("translate"),se=()=>["auto","contain","none"],ge=()=>["auto","hidden","clip","visible","scroll"],ue=()=>["auto",_e,r],I=()=>[_e,r],ve=()=>["",Qn,Ta],Ee=()=>["auto",ti,_e],Me=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],w=()=>["solid","dashed","dotted","double","none"],N=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],R=()=>["start","end","center","between","around","evenly","stretch"],$=()=>["","0",_e],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>[ti,_e];return{cacheSize:500,separator:":",theme:{colors:[io],spacing:[Qn,Ta],blur:["none","",Ca,_e],brightness:T(),borderColor:[a],borderRadius:["none","","full",Ca,_e],borderSpacing:I(),borderWidth:ve(),contrast:T(),grayscale:$(),hueRotate:T(),invert:$(),gap:I(),gradientColorStops:[a],gradientColorStopPositions:[kx,Ta],inset:ue(),margin:ue(),opacity:T(),padding:I(),saturate:T(),scale:T(),sepia:$(),skew:T(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",_e]}],container:["container"],columns:[{columns:[Ca]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Me(),_e]}],overflow:[{overflow:ge()}],"overflow-x":[{"overflow-x":ge()}],"overflow-y":[{"overflow-y":ge()}],overscroll:[{overscroll:se()}],"overscroll-x":[{"overscroll-x":se()}],"overscroll-y":[{"overscroll-y":se()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ro,_e]}],basis:[{basis:ue()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",_e]}],grow:[{grow:$()}],shrink:[{shrink:$()}],order:[{order:["first","last","none",ro,_e]}],"grid-cols":[{"grid-cols":[io]}],"col-start-end":[{col:["auto",{span:["full",ro,_e]},_e]}],"col-start":[{"col-start":Ee()}],"col-end":[{"col-end":Ee()}],"grid-rows":[{"grid-rows":[io]}],"row-start-end":[{row:["auto",{span:[ro,_e]},_e]}],"row-start":[{"row-start":Ee()}],"row-end":[{"row-end":Ee()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",_e]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",_e]}],gap:[{gap:[_]}],"gap-x":[{"gap-x":[_]}],"gap-y":[{"gap-y":[_]}],"justify-content":[{justify:["normal",...R()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...R(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...R(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[D]}],px:[{px:[D]}],py:[{py:[D]}],ps:[{ps:[D]}],pe:[{pe:[D]}],pt:[{pt:[D]}],pr:[{pr:[D]}],pb:[{pb:[D]}],pl:[{pl:[D]}],m:[{m:[U]}],mx:[{mx:[U]}],my:[{my:[U]}],ms:[{ms:[U]}],me:[{me:[U]}],mt:[{mt:[U]}],mr:[{mr:[U]}],mb:[{mb:[U]}],ml:[{ml:[U]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",_e,r]}],"min-w":[{"min-w":[_e,r,"min","max","fit"]}],"max-w":[{"max-w":[_e,r,"none","full","min","max","fit","prose",{screen:[Ca]},Ca]}],h:[{h:[_e,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[_e,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[_e,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[_e,r,"auto","min","max","fit"]}],"font-size":[{text:["base",Ca,Ta]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",rd]}],"font-family":[{font:[io]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",_e]}],"line-clamp":[{"line-clamp":["none",ti,rd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Qn,_e]}],"list-image":[{"list-image":["none",_e]}],"list-style-type":[{list:["none","disc","decimal",_e]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...w(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Qn,Ta]}],"underline-offset":[{"underline-offset":["auto",Qn,_e]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",_e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",_e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Me(),zx]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Nx]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Mx]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[E]}],"gradient-via-pos":[{via:[E]}],"gradient-to-pos":[{to:[E]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[d]}],"rounded-s":[{"rounded-s":[d]}],"rounded-e":[{"rounded-e":[d]}],"rounded-t":[{"rounded-t":[d]}],"rounded-r":[{"rounded-r":[d]}],"rounded-b":[{"rounded-b":[d]}],"rounded-l":[{"rounded-l":[d]}],"rounded-ss":[{"rounded-ss":[d]}],"rounded-se":[{"rounded-se":[d]}],"rounded-ee":[{"rounded-ee":[d]}],"rounded-es":[{"rounded-es":[d]}],"rounded-tl":[{"rounded-tl":[d]}],"rounded-tr":[{"rounded-tr":[d]}],"rounded-br":[{"rounded-br":[d]}],"rounded-bl":[{"rounded-bl":[d]}],"border-w":[{border:[p]}],"border-w-x":[{"border-x":[p]}],"border-w-y":[{"border-y":[p]}],"border-w-s":[{"border-s":[p]}],"border-w-e":[{"border-e":[p]}],"border-w-t":[{"border-t":[p]}],"border-w-r":[{"border-r":[p]}],"border-w-b":[{"border-b":[p]}],"border-w-l":[{"border-l":[p]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...w(),"hidden"]}],"divide-x":[{"divide-x":[p]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[p]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:w()}],"border-color":[{border:[u]}],"border-color-x":[{"border-x":[u]}],"border-color-y":[{"border-y":[u]}],"border-color-s":[{"border-s":[u]}],"border-color-e":[{"border-e":[u]}],"border-color-t":[{"border-t":[u]}],"border-color-r":[{"border-r":[u]}],"border-color-b":[{"border-b":[u]}],"border-color-l":[{"border-l":[u]}],"divide-color":[{divide:[u]}],"outline-style":[{outline:["",...w()]}],"outline-offset":[{"outline-offset":[Qn,_e]}],"outline-w":[{outline:[Qn,Ta]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:ve()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[Qn,Ta]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",Ca,Dx]}],"shadow-color":[{shadow:[io]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":[...N(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":N()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[l]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Ca,_e]}],grayscale:[{grayscale:[v]}],"hue-rotate":[{"hue-rotate":[x]}],invert:[{invert:[y]}],saturate:[{saturate:[q]}],sepia:[{sepia:[Z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[l]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[v]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[x]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[h]}],"border-spacing-x":[{"border-spacing-x":[h]}],"border-spacing-y":[{"border-spacing-y":[h]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",_e]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",_e]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",_e]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[Q]}],"scale-x":[{"scale-x":[Q]}],"scale-y":[{"scale-y":[Q]}],rotate:[{rotate:[ro,_e]}],"translate-x":[{"translate-x":[de]}],"translate-y":[{"translate-y":[de]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",_e]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",_e]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",_e]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[Qn,Ta,rd]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},jx=yx(Hx),M=(...a)=>jx(ix(a));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var L0=(a,r)=>{let o=0;return l=>{const u=Date.now();if(u-o>=r)return o=u,a(l)}},In=a=>{if(!En)return null;try{const r=localStorage.getItem(a);return r?JSON.parse(r):null}catch{return null}},Lt=(a,r)=>{if(En)try{window.localStorage.setItem(a,JSON.stringify(r))}catch{}},cv=a=>{if(En)try{window.localStorage.removeItem(a)}catch{}},Lx=24,Bx=12,To=a=>{if(!a)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:r,type:o,elementType:l}=a;let u=bt(o);const d=[],h=[];if(bo(a)||r===zo||r===No||o?.$$typeof===Symbol.for("react.memo")||l?.$$typeof===Symbol.for("react.memo")){const p=bo(a);h.push({type:"memo",title:p?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:p})}if(r===Lx&&h.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),r===zs&&h.push({type:"suspense",title:"Component that can suspend while content is loading"}),r===Bx&&h.push({type:"profiler",title:"Component that measures rendering performance"}),typeof u=="string"){const p=/^(\w+)\((.*)\)$/;let m=u;for(;p.test(m);){const v=m.match(p);if(v?.[1]&&v?.[2])d.unshift(v[1]),m=v[2];else break}u=m}return{name:u||"Unknown",wrappers:d,wrapperTypes:h}},Rs=ht(!1),Xd=ht(null),Tn={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:ft.width,height:ft.height,position:{x:me,y:me}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:ft.width,height:ft.height,position:{x:me,y:me}},componentsTree:{width:gn}},Yx=()=>{const a=In(Jn);return a?{corner:a.corner??Tn.corner,dimensions:a.dimensions??Tn.dimensions,lastDimensions:a.lastDimensions??a.dimensions??Tn.lastDimensions,componentsTree:a.componentsTree??Tn.componentsTree}:(Lt(Jn,{corner:Tn.corner,dimensions:Tn.dimensions,lastDimensions:Tn.lastDimensions,componentsTree:Tn.componentsTree}),Tn)},ae=ht(Yx()),id=()=>{if(!En)return;const{dimensions:a}=ae.value,{width:r,height:o,position:l}=a;ae.value={...ae.value,dimensions:{isFullWidth:r>=window.innerWidth-me*2,isFullHeight:o>=window.innerHeight-me*2,width:r,height:o,position:l}}},Qe=ht({view:"none"}),Xx=In(cs),Kt=ht(Xx??null);function qx(){return!1}function wf(a){function r(o){return this.shouldComponentUpdate=qx,rr(a,o)}return r.displayName=`Memo(${a.displayName||a.name})`,r.prototype.isReactComponent=!0,r._forwarded=!0,r}var Vx=a=>{const{count:r,getScrollElement:o,estimateSize:l,overscan:u=5}=a,[d,h]=Te(0),[p,m]=Te(0),v=le(),x=le(null),y=le(null),_=l(),S=ot(C=>{if(!x.current)return;const D=C?.[0]?.contentRect.height??x.current.getBoundingClientRect().height;m(D)},[]),E=ot(()=>{y.current!==null&&cancelAnimationFrame(y.current),y.current=requestAnimationFrame(()=>{S(),y.current=null})},[S]);Se(()=>{const C=o();if(!C)return;x.current=C;const D=()=>{x.current&&h(x.current.scrollTop)};S(),v.current||(v.current=new ResizeObserver(()=>{E()})),v.current.observe(C),C.addEventListener("scroll",D,{passive:!0});const q=new MutationObserver(E);return q.observe(C,{attributes:!0,childList:!0,subtree:!0}),()=>{C.removeEventListener("scroll",D),v.current&&v.current.disconnect(),q.disconnect(),y.current!==null&&cancelAnimationFrame(y.current)}},[o,S,E]);const A=yn(()=>{const C=Math.floor(d/_),D=Math.ceil(p/_);return{start:Math.max(0,C-u),end:Math.min(r,C+D+u)}},[d,_,p,r,u]);return{virtualItems:yn(()=>{const C=[];for(let D=A.start;D<A.end;D++)C.push({key:D,index:D,start:D*_});return C},[A,_]),totalSize:r*_,scrollTop:d,containerHeight:p}};In("react-scann-pinned");var Fx=a=>{const r=[];let o=a;for(;o;){const l=o.elementType,u=typeof l=="function"?l.displayName||l.name:typeof l=="string"?l:"Unknown",d=o.index!==void 0?`[${o.index}]`:"";r.unshift(`${u}${d}`),o=o.return??null}return r.join("::")},Ja=new WeakMap,Gx=(a,r)=>{const o=r.bind(null,a);return document.addEventListener("scroll",o,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",o,{capture:!0})}},$x={activeFlashes:new Map,create(a){const r=a.querySelector(".react-scan-flash-overlay"),o=r instanceof HTMLElement?r:(()=>{const u=document.createElement("div");u.className="react-scan-flash-overlay",a.appendChild(u);const d=Gx(a,()=>{a.querySelector(".react-scan-flash-overlay")&&this.create(a)});return this.activeFlashes.set(a,{element:a,overlay:u,scrollCleanup:d}),u})(),l=Ja.get(o);l&&(clearTimeout(l),Ja.delete(o)),requestAnimationFrame(()=>{o.style.transition="none",o.style.opacity="0.9";const u=setTimeout(()=>{o.style.transition="opacity 150ms ease-out",o.style.opacity="0";const d=setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o);const h=this.activeFlashes.get(a);h?.scrollCleanup&&h.scrollCleanup(),this.activeFlashes.delete(a),Ja.delete(o)},150);Ja.set(o,d)},300);Ja.set(o,u)})},cleanup(a){const r=this.activeFlashes.get(a);if(r){const o=Ja.get(r.overlay);o&&(clearTimeout(o),Ja.delete(r.overlay)),r.overlay.parentNode&&r.overlay.parentNode.removeChild(r.overlay),r.scrollCleanup&&r.scrollCleanup(),this.activeFlashes.delete(a)}},cleanupAll(){for(const[,a]of this.activeFlashes)this.cleanup(a.element)}},uv=1e3,B0={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},At=ht(B0),xf=ht(0),tr=[],Ia=null,Qx=()=>{if(tr.length===0)return;const a=[...tr],{updates:r,totalUpdates:o,currentIndex:l,isViewingHistory:u}=At.value,d=[...r];let h=o;for(const{update:x}of a)d.length>=uv&&d.shift(),d.push(x),h++;const p=Math.max(0,h-uv);let m;u?l===o-1?m=d.length-1:l===0?m=0:p===0?m=l:m=l-1:m=d.length-1;const v=a[a.length-1];At.value={...At.value,latestFiber:v.fiber,updates:d,totalUpdates:h,windowOffset:p,currentIndex:m,isViewingHistory:u},tr=tr.slice(a.length)},Y0={showTimeline:()=>{At.value={...At.value,isVisible:!0}},hideTimeline:()=>{At.value={...At.value,isVisible:!1,currentIndex:At.value.updates.length-1}},updateFrame:(a,r)=>{At.value={...At.value,currentIndex:a,isViewingHistory:r}},updatePlaybackSpeed:a=>{At.value={...At.value,playbackSpeed:a}},addUpdate:(a,r)=>{if(tr.push({update:a,fiber:r}),!Ia){const o=()=>{Qx(),Ia=null,tr.length>0&&(Ia=setTimeout(o,96))};Ia=setTimeout(o,96)}},reset:()=>{Ia&&(clearTimeout(Ia),Ia=null),tr=[],At.value=B0}},Et=ht({query:"",matches:[],currentMatchIndex:-1}),od=ht(!1),X0=(a,r=0,o=null)=>a.reduce((l,u,d)=>{const h=u.element?Fx(u.fiber):`${o}-${d}`,p=u.fiber?.type?P0(u.fiber):void 0,m={...u,depth:r,nodeId:h,parentId:o,fiber:u.fiber,renderData:p};return l.push(m),u.children?.length&&l.push(...X0(u.children,r+1,h)),l},[]),Zx=a=>a.reduce((r,o)=>Math.max(r,o.depth),0),Kx=(a,r)=>{if(r<=0)return 24;const d=Math.max(0,a-gn);if(d<24)return 0;const p=Math.min(d*.3,r*24)/r;return Math.max(0,Math.min(24,p))},Jx=["memo","forwardRef","lazy","suspense"],q0=a=>{const r=a.match(/\[(.*?)\]/);if(!r)return null;const o=[],l=r[1].split(",");for(const u of l){const d=u.trim().toLowerCase();d&&o.push(d)}return o},Ix=a=>{if(a.length===0)return!1;for(const r of a){let o=!1;for(const l of Jx)if(l.toLowerCase().includes(r)){o=!0;break}if(!o)return!1}return!0},V0=(a,r)=>{if(a.length===0)return!0;if(!r.length)return!1;for(const o of a){let l=!1;for(const u of r)if(u.type.toLowerCase().includes(o)){l=!0;break}if(!l)return!1}return!0},Wx=(a,r)=>yn(()=>{const{query:o,matches:l}=r,u=l.some(v=>v.nodeId===a.nodeId),d=q0(o)||[],h=o?o.replace(/\[.*?\]/,"").trim():"";if(!o||!u)return{highlightedText:f("span",{className:"truncate",children:a.label}),typeHighlight:!1};let p=!0;if(d.length>0)if(!a.fiber)p=!1;else{const{wrapperTypes:v}=To(a.fiber);p=V0(d,v)}let m=f("span",{className:"truncate",children:a.label});if(h)try{if(h.startsWith("/")&&h.endsWith("/")){const v=h.slice(1,-1),x=new RegExp(`(${v})`,"i"),y=a.label.split(x);m=f("span",{className:"tree-node-search-highlight",children:y.map((_,S)=>x.test(_)?f("span",{className:M("regex",{start:x.test(_)&&S===0,middle:x.test(_)&&S%2===1,end:x.test(_)&&S===y.length-1,"!ml-0":S===1}),children:_},`${a.nodeId}-${_}`):_)})}else{const v=a.label.toLowerCase(),x=h.toLowerCase(),y=v.indexOf(x);y>=0&&(m=f("span",{className:"tree-node-search-highlight",children:[a.label.slice(0,y),f("span",{className:"single",children:a.label.slice(y,y+h.length)}),a.label.slice(y+h.length)]}))}}catch{}return{highlightedText:m,typeHighlight:p&&d.length>0}},[a.label,a.nodeId,a.fiber,r]),dv=a=>a>0?a<.1-Number.EPSILON?"< 0.1":a<1e3?Number(a.toFixed(1)).toString():`${(a/1e3).toFixed(1)}k`:"0",Px=({node:a,nodeIndex:r,hasChildren:o,isCollapsed:l,handleTreeNodeClick:u,handleTreeNodeToggle:d,searchValue:h})=>{const p=le(null),m=le(a.renderData?.renderCount??0),{highlightedText:v,typeHighlight:x}=Wx(a,h);Se(()=>{const S=a.renderData?.renderCount,E=p.current;!E||!m.current||!S||m.current===S||(E.classList.remove("count-flash"),E.offsetWidth,E.classList.add("count-flash"),m.current=S)},[a.renderData?.renderCount]);const y=yn(()=>{if(!a.renderData)return null;const{selfTime:S,totalTime:E,renderCount:A}=a.renderData;return A?f("span",{className:M("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:f("span",{ref:p,title:`Self time: ${dv(S)}ms
Total time: ${dv(E)}ms`,className:"count-badge",children:["×",A]})}):null},[a.renderData]),_=yn(()=>{if(!a.fiber)return null;const{wrapperTypes:S}=To(a.fiber),E=S[0];return f("span",{className:M("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[E&&f(Oe,{children:[f("span",{title:E?.title,className:M("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",E.type==="memo"&&"bg-[#8e61e3] text-white",x&&"bg-yellow-300 text-black"),children:E.type},E.type),E.compiler&&f("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),S.length>1&&`×${S.length}`,y]})},[a.fiber,x,y]);return f("button",{type:"button",title:a.title,"data-index":r,className:M("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:u,children:[f("button",{type:"button","data-index":r,onClick:d,className:M("w-6 h-6 flex items-center justify-center","text-left"),children:o&&f(nt,{name:"icon-chevron-right",size:12,className:M("transition-transform",!l&&"rotate-90")})}),v,_]})},e2=()=>{const a=le(null),r=le(null),o=le(null),l=le(null),u=le(null),d=le(0),h=le(!1),p=le(!1),m=le(null),[v,x]=Te([]),[y,_]=Te(new Set),[S,E]=Te(void 0),[A,U]=Te(Et.value),C=yn(()=>{const w=[],N=v,R=new Map(N.map($=>[$.nodeId,$]));for(const $ of N){let J=!0,T=$;for(;T.parentId;){const H=R.get(T.parentId);if(!H)break;if(y.has(H.nodeId)){J=!1;break}T=H}J&&w.push($)}return w},[y,v]),D=28,{virtualItems:q,totalSize:Q}=Vx({count:C.length,getScrollElement:()=>a.current,estimateSize:()=>D,overscan:5}),Z=ot(w=>{h.current=!0,l.current?.blur(),od.value=!0;const{parentCompositeFiber:N}=nr(w);if(!N)return;te.inspectState.value={kind:"focused",focusedDomElement:w,fiber:N};const R=C.findIndex($=>$.element===w);if(R!==-1){E(R);const $=R*D,J=a.current;if(J){const T=J.clientHeight,H=J.scrollTop;($<H||$+D>H+T)&&J.scrollTo({top:Math.max(0,$-T/2),behavior:"instant"})}}},[C]),P=ot(w=>{const N=w.currentTarget,R=Number(N.dataset.index);if(Number.isNaN(R))return;const $=C[R].element;$&&Z($)},[C,Z]),W=ot(w=>{_(N=>{const R=new Set(N);return R.has(w)?R.delete(w):R.add(w),R})},[]),de=ot(w=>{w.stopPropagation();const N=w.target,R=Number(N.dataset.index);if(Number.isNaN(R))return;const $=C[R].nodeId;W($)},[C,W]),se=ot(w=>{o.current?.classList.remove("!border-red-500");const N=[];if(!w){Et.value={query:w,matches:N,currentMatchIndex:-1};return}if(w.includes("[")&&!w.includes("]")&&w.length>w.indexOf("[")+1){o.current?.classList.add("!border-red-500");return}const R=q0(w)||[];if(w.includes("[")&&!Ix(R)){o.current?.classList.add("!border-red-500");return}const $=w.replace(/\[.*?\]/,"").trim(),J=/^\/.*\/$/.test($);let T=H=>!1;if($.startsWith("/")&&!J&&$.length>1){o.current?.classList.add("!border-red-500");return}if(J)try{const H=$.slice(1,-1),F=new RegExp(H,"i");T=K=>F.test(K)}catch{o.current?.classList.add("!border-red-500");return}else if($){const H=$.toLowerCase();T=F=>F.toLowerCase().includes(H)}for(const H of v){let F=!0;if($&&(F=T(H.label)),F&&R.length>0)if(!H.fiber)F=!1;else{const{wrapperTypes:K}=To(H.fiber);F=V0(R,K)}F&&N.push(H)}if(Et.value={query:w,matches:N,currentMatchIndex:N.length>0?0:-1},N.length>0){const H=N[0],F=C.findIndex(K=>K.nodeId===H.nodeId);if(F!==-1){const K=F*D,ee=a.current;if(ee){const re=ee.clientHeight;ee.scrollTo({top:Math.max(0,K-re/2),behavior:"instant"})}}}},[v,C]),ge=ot(w=>{const N=w.currentTarget;N&&se(N.value)},[se]),ue=ot(w=>{const{matches:N,currentMatchIndex:R}=Et.value;if(N.length===0)return;const $=w==="next"?(R+1)%N.length:(R-1+N.length)%N.length;Et.value={...Et.value,currentMatchIndex:$};const J=N[$],T=C.findIndex(H=>H.nodeId===J.nodeId);if(T!==-1){E(T);const H=T*D,F=a.current;if(F){const K=F.clientHeight;F.scrollTo({top:Math.max(0,H-K/2),behavior:"instant"})}}},[C]),I=ot(w=>{if(r.current&&(r.current.style.width=`${w}px`),a.current){a.current.style.width=`${w}px`;const N=Kx(w,d.current);a.current.style.setProperty("--indentation-size",`${N}px`)}},[]),ve=ot(w=>{if(!m.current)return;const N=ae.value.dimensions.width,R=Math.floor(N-gn/2);m.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),w<=gn?m.current.classList.add("cursor-w-resize"):w>=R?m.current.classList.add("cursor-e-resize"):m.current.classList.add("cursor-ew-resize")},[]),Ee=ot(w=>{if(w.preventDefault(),w.stopPropagation(),!a.current)return;a.current.style.setProperty("pointer-events","none"),p.current=!0;const N=w.clientX,R=a.current.offsetWidth,$=ae.value.dimensions.width,J=Math.floor($-gn/2);ve(R);const T=F=>{const K=N-F.clientX,ee=R+K;ve(ee);const re=Math.min(J,Math.max(gn,ee));I(re)},H=()=>{a.current&&(a.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",H),ae.value={...ae.value,componentsTree:{...ae.value.componentsTree,width:a.current.offsetWidth}},Lt(Jn,ae.value),p.current=!1)};document.addEventListener("pointermove",T),document.addEventListener("pointerup",H)},[I,ve]);Se(()=>{if(!a.current)return;const w=a.current.offsetWidth;return ve(w),ae.subscribe(()=>{a.current&&ve(a.current.offsetWidth)})},[ve]);const Me=ot(()=>{h.current=!1},[]);return Se(()=>{let w=!0;const N=H=>{const F=new Map,K=[];for(const{element:ee,name:re,fiber:he}of H){if(!ee)continue;let Ue=re;const{name:we,wrappers:pt}=To(he);we&&(pt.length>0?Ue=`${pt.join("(")}(${we})${")".repeat(pt.length)}`:Ue=we),F.set(ee,{label:we||re,title:Ue,children:[],element:ee,fiber:he})}for(const{element:ee,depth:re}of H){if(!ee)continue;const he=F.get(ee);if(he)if(re===0)K.push(he);else{let Ue=ee.parentElement;for(;Ue;){const we=F.get(Ue);if(we){we.children=we.children||[],we.children.push(he);break}Ue=Ue.parentElement}}}return K},R=()=>{const H=u.current;if(!H)return;const F=w2(),K=N(F);if(K.length>0){const ee=X0(K),re=Zx(ee);if(d.current=re,I(ae.value.componentsTree.width),x(ee),w){w=!1;const he=ee.findIndex(Ue=>Ue.element===H);if(he!==-1){const Ue=he*D,we=a.current;we&&setTimeout(()=>{we.scrollTo({top:Ue,behavior:"instant"})},96)}}}},$=te.inspectState.subscribe(H=>{if(H.kind==="focused"){if(od.value)return;se(""),u.current=H.focusedDomElement,R()}});let J=0;const T=xf.subscribe(()=>{if(te.inspectState.value.kind==="focused"){if(cancelAnimationFrame(J),p.current)return;J=requestAnimationFrame(()=>{od.value=!1,R()})}});return()=>{$(),T(),Et.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Se(()=>{const w=N=>{if(h.current&&S)switch(N.key){case"ArrowUp":{if(N.preventDefault(),N.stopPropagation(),S>0){const R=C[S-1];R?.element&&Z(R.element)}return}case"ArrowDown":{if(N.preventDefault(),N.stopPropagation(),S<C.length-1){const R=C[S+1];R?.element&&Z(R.element)}return}case"ArrowLeft":{N.preventDefault(),N.stopPropagation();const R=C[S];R?.nodeId&&W(R.nodeId);return}case"ArrowRight":{N.preventDefault(),N.stopPropagation();const R=C[S];R?.nodeId&&W(R.nodeId);return}}};return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[S,C,Z,W]),Se(()=>Et.subscribe(U),[]),Se(()=>ae.subscribe(N=>{r.current?.style.setProperty("transition","width 0.1s"),I(N.componentsTree.width),setTimeout(()=>{r.current?.style.removeProperty("transition")},500)}),[]),f("div",{className:"react-scan-components-tree flex",children:[f("div",{ref:m,onPointerDown:Ee,className:"relative resize-v-line",children:f("span",{children:f(nt,{name:"icon-ellipsis",size:18})})}),f("div",{ref:r,className:"flex flex-col h-full",children:[f("div",{className:"p-2 border-b border-[#1e1e1e]",children:f("div",{ref:o,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:M("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[f(nt,{name:"icon-search",size:12,className:" text-neutral-500"}),f("div",{className:"relative flex-1 h-7 overflow-hidden",children:f("input",{ref:l,type:"text",value:Et.value.query,onClick:w=>{w.stopPropagation(),w.currentTarget.focus()},onPointerDown:w=>{w.stopPropagation()},onKeyDown:w=>{w.key==="Escape"&&w.currentTarget.blur(),Et.value.matches.length&&(w.key==="Enter"&&w.shiftKey?ue("prev"):w.key==="Enter"&&(w.metaKey||w.ctrlKey?(w.preventDefault(),w.stopPropagation(),Z(Et.value.matches[Et.value.currentMatchIndex].element),w.currentTarget.focus()):ue("next")))},onChange:ge,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),Et.value.query?f(Oe,{children:[f("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[Et.value.currentMatchIndex+1,"|",Et.value.matches.length]}),!!Et.value.matches.length&&f(Oe,{children:[f("button",{type:"button",onClick:w=>{w.stopPropagation(),ue("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),f("button",{type:"button",onClick:w=>{w.stopPropagation(),ue("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),f("button",{type:"button",onClick:w=>{w.stopPropagation(),se("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-close",size:12})})]}):!!v.length&&f("span",{className:"text-xs text-neutral-500",children:v.length})]})}),f("div",{className:"flex-1 overflow-hidden",children:f("div",{ref:a,onPointerLeave:Me,className:"tree h-full overflow-auto will-change-transform",children:f("div",{className:"relative w-full",style:{height:Q},children:q.map(w=>{const N=C[w.index];if(!N)return null;const R=te.inspectState.value.kind==="focused"&&N.element===te.inspectState.value.focusedDomElement,$=w.index===S;return f("div",{className:M("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(R||$)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:w.start,height:D},children:f("div",{className:"w-full h-full",style:{paddingLeft:`calc(${N.depth} * var(--indentation-size))`},children:f(Px,{node:N,nodeIndex:w.index,hasChildren:!!N.children?.length,isCollapsed:y.has(N.nodeId),handleTreeNodeClick:P,handleTreeNodeToggle:de,searchValue:A})})},N.nodeId)})})})})]})]})},vs=Os(({text:a,children:r,onCopy:o,className:l,iconSize:u=14})=>{const[d,h]=Te(!1);Se(()=>{if(d){const v=setTimeout(()=>h(!1),600);return()=>{clearTimeout(v)}}},[d]);const p=ot(v=>{v.preventDefault(),v.stopPropagation(),navigator.clipboard.writeText(a).then(()=>{h(!0),o?.(!0,a)},()=>{o?.(!1,a)})},[a,o]),m=f("button",{onClick:p,type:"button",className:M("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${u}px]`,l),children:f(nt,{name:`icon-${d?"check":"copy"}`,size:[u],className:M(d&&"text-green-500")})});return r?r({ClipboardIcon:m,onClick:p}):m}),t2=({length:a,expanded:r,onToggle:o,isNegative:l})=>f("div",{className:"flex items-center gap-1",children:[f("button",{type:"button",onClick:o,className:"flex items-center p-0 opacity-50",children:f(nt,{name:"icon-chevron-right",size:12,className:M("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",r&&"rotate-90")})}),f("span",{children:["Array(",a,")"]})]}),qd=({value:a,path:r,isNegative:o})=>{const[l,u]=Te(!1);if(!(a!==null&&typeof a=="object"&&!(a instanceof Date)))return f("div",{className:"flex items-center gap-1",children:[f("span",{className:"text-gray-500",children:[r,":"]}),f("span",{className:"truncate",children:xs(a)})]});const h=Object.entries(a);return f("div",{className:"flex flex-col",children:[f("div",{className:"flex items-center gap-1",children:[f("button",{type:"button",onClick:()=>u(!l),className:"flex items-center p-0 opacity-50",children:f(nt,{name:"icon-chevron-right",size:12,className:M("transition-[color,transform]",o?"text-[#f87171]":"text-[#4ade80]",l&&"rotate-90")})}),f("span",{className:"text-gray-500",children:[r,":"]}),!l&&f("span",{className:"truncate",children:a instanceof Date?xs(a):`{${Object.keys(a).join(", ")}}`})]}),l&&f("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:h.map(([p,m])=>f(qd,{value:m,path:p,isNegative:o},p))})]})},ys=({value:a,expanded:r,onToggle:o,isNegative:l})=>{const{value:u,error:d}=S2(a);return d?f("span",{className:"text-gray-500 font-italic",children:d}):u!==null&&typeof u=="object"&&!(u instanceof Promise)?Array.isArray(u)?f("div",{className:"flex flex-col gap-1 relative",children:[f(t2,{length:u.length,expanded:r,onToggle:o,isNegative:l}),r&&f("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map((p,m)=>f(qd,{value:p,path:m.toString(),isNegative:l},m.toString()))}),f(vs,{text:gv(u),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:p})=>f(Oe,{children:p})})]}):f("div",{className:"flex items-start gap-1 relative",children:[f("button",{type:"button",onClick:o,className:M("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:f(nt,{name:"icon-chevron-right",size:12,className:M("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",r&&"rotate-90")})}),f("div",{className:"flex-1",children:r?f("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(u).map(([p,m])=>f(qd,{value:m,path:p,isNegative:l},p))}):f("span",{children:xs(u)})}),f(vs,{text:gv(u),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:p})=>f(Oe,{children:p})})]}):f("span",{children:xs(u)})},n2=50;ht({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Vd=a=>{switch(a.kind){case"initialized":return a.changes.currentValue;case"partially-initialized":return a.value}},fv=(a,r)=>{for(const o of a){const l=r.get(o.name);if(l){r.set(l.name,{count:l.count+1,currentValue:o.value,id:l.name,lastUpdated:Date.now(),name:l.name,previousValue:o.prevValue});continue}r.set(o.name,{count:1,currentValue:o.value,id:o.name,lastUpdated:Date.now(),name:o.name,previousValue:o.prevValue})}},a2=(a,r)=>{for(const o of a){const l=r.contextChanges.get(o.contextType);if(l){if(Aa(Vd(l),o.value))continue;if(l.kind==="partially-initialized"){r.contextChanges.set(o.contextType,{kind:"initialized",changes:{count:1,currentValue:o.value,id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,previousValue:l.value}});continue}r.contextChanges.set(o.contextType,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:o.value,id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,previousValue:l.changes.currentValue}});continue}r.contextChanges.set(o.contextType,{kind:"partially-initialized",id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,value:o.value})}},r2=a=>{const r={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return a.forEach(o=>{a2(o.contextChanges,r),fv(o.stateChanges,r.stateChanges),fv(o.propsChanges,r.propsChanges)}),r},hv=(a,r)=>{const o=new Map;return a.forEach((l,u)=>{o.set(u,l)}),r.forEach((l,u)=>{const d=o.get(u);if(!d){o.set(u,l);return}o.set(u,{count:d.count+l.count,currentValue:l.currentValue,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:l.previousValue})}),o},i2=(a,r)=>{const o=new Map;return a.contextChanges.forEach((l,u)=>{o.set(u,l)}),r.contextChanges.forEach((l,u)=>{const d=o.get(u);if(!d){o.set(u,l);return}if(Vd(l)!==Vd(d))switch(d.kind){case"initialized":switch(l.kind){case"initialized":{o.set(u,{kind:"initialized",changes:{...l.changes,count:l.changes.count+d.changes.count+1,currentValue:l.changes.currentValue,previousValue:l.changes.previousValue}});return}case"partially-initialized":{o.set(u,{kind:"initialized",changes:{count:d.changes.count+1,currentValue:l.value,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:d.changes.currentValue}});return}}case"partially-initialized":switch(l.kind){case"initialized":{o.set(u,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:l.changes.currentValue,id:l.changes.id,lastUpdated:l.changes.lastUpdated,name:l.changes.name,previousValue:d.value}});return}case"partially-initialized":{o.set(u,{kind:"initialized",changes:{count:1,currentValue:l.value,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:d.value}});return}}}}),o},o2=(a,r)=>{const o=i2(a,r),l=hv(a.propsChanges,r.propsChanges),u=hv(a.stateChanges,r.stateChanges);return{contextChanges:o,propsChanges:l,stateChanges:u}},Fd=a=>Array.from(a.propsChanges.values()).reduce((r,o)=>r+o.count,0)+Array.from(a.stateChanges.values()).reduce((r,o)=>r+o.count,0)+Array.from(a.contextChanges.values()).filter(r=>r.kind==="initialized").reduce((r,o)=>r+o.changes.count,0),l2=a=>{const r=le({queue:[]}),[o,l]=Te({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),u=te.inspectState.value.kind==="focused"?te.inspectState.value.fiber:null,d=u?za(u):null;return Se(()=>{const h=setInterval(()=>{r.current.queue.length!==0&&(l(p=>{const m=r2(r.current.queue),v=o2(p,m);return Fd(p),Fd(v),v}),r.current.queue=[])},n2);return()=>{clearInterval(h)}},[u]),Se(()=>{if(!d)return;const h=m=>{r.current?.queue.push(m)};let p=te.changesListeners.get(d);return p||(p=[],te.changesListeners.set(d,p)),p.push(h),()=>{l({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),r.current.queue=[],te.changesListeners.set(d,te.changesListeners.get(d)?.filter(m=>m!==h)??[])}},[d]),Se(()=>()=>{l({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),r.current.queue=[]},[d]),o},bs=a=>{if(a==null)return{value:a};if(typeof a=="function")return{value:a};if(typeof a!="object")return{value:a};if(ai(a))return{value:"Promise"};try{const r=Object.getPrototypeOf(a);return r===Promise.prototype||r?.constructor?.name==="Promise"?{value:"Promise"}:{value:a}}catch{return{value:null,error:"Error accessing value"}}},s2=Os(()=>{const[a,r]=Te(!0),o=l2(),[l,u]=Te(!1),d=Fd(o)>0;Se(()=>{if(!l&&d){const m=setTimeout(()=>{u(!0),requestAnimationFrame(()=>{r(!0)})},0);return()=>clearTimeout(m)}},[l,d]);const h=new Map(Array.from(o.contextChanges.entries()).filter(([,m])=>m.kind==="initialized").map(([m,v])=>[m,v.kind==="partially-initialized"?null:v.changes])),p=te.inspectState.value.kind==="focused"?te.inspectState.value.fiber:null;if(p)return f(Oe,{children:[f(u2,{}),f("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[f("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[f("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",f("span",{className:"text-[#A855F7]",children:bt(p)})," ","render?"]}),!d&&f("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[f("div",{children:"No changes detected since selecting"}),f("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),f("div",{className:M("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[f(ld,{changes:o.propsChanges,title:"Changed Props",isExpanded:a}),f(ld,{renderName:m=>c2(m,bt(lr(p))??"Unknown Component"),changes:o.stateChanges,title:"Changed State",isExpanded:a}),f(ld,{changes:h,title:"Changed Context",isExpanded:a})]})]})]})}),c2=(a,r)=>{if(Number.isNaN(Number(a)))return a;const o=Number.parseInt(a);return f("span",{className:"truncate",children:[f("span",{className:"text-white",children:[o,(u=>{const d=u%10,h=u%100;if(h>=11&&h<=13)return"th";switch(d){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(o)," hook"," "]}),f("span",{style:{color:"#666"},children:["called in ",f("i",{className:"text-[#A855F7] truncate",children:r})]})]})},u2=Os(()=>{const a=le(null),r=le(null),o=le(null),l=le({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Se(()=>{const u=L0(()=>{const h=[];a.current?.dataset.flash==="true"&&h.push(a.current),r.current?.dataset.flash==="true"&&h.push(r.current),o.current?.dataset.flash==="true"&&h.push(o.current);for(const p of h)p.classList.remove("count-flash-white"),p.offsetWidth,p.classList.add("count-flash-white")},400);return At.subscribe(h=>{if(!a.current||!r.current||!o.current)return;const{currentIndex:p,updates:m}=h,v=m[p];!v||p===0||(u(),l.current={isPropsChanged:(v.props?.changes?.size??0)>0,isStateChanged:(v.state?.changes?.size??0)>0,isContextChanged:(v.context?.changes?.size??0)>0},a.current.dataset.flash!=="true"&&(a.current.dataset.flash=l.current.isPropsChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=l.current.isStateChanged.toString()),o.current.dataset.flash!=="true"&&(o.current.dataset.flash=l.current.isContextChanged.toString()))})},[]),f("button",{type:"button",className:M("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:f("div",{className:M("flex-1 react-scan-expandable"),children:f("div",{className:"overflow-hidden",children:f("div",{className:"flex items-center whitespace-nowrap",children:[f("div",{className:"flex items-center gap-x-2",children:"What changed?"}),f("div",{className:M("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[f("div",{ref:a,children:"props"}),f("div",{ref:r,children:"state"}),f("div",{ref:o,children:"context"})]})]})})})})}),d2=a=>a,ld=Os(({title:a,changes:r,renderName:o=d2})=>{const[l,u]=Te(new Set),[d,h]=Te(new Set),p=Array.from(r.entries());return r.size===0?null:f("div",{children:[f("div",{className:"text-xs text-[#888] mb-1.5",children:a}),f("div",{className:"flex flex-col gap-2",children:p.map(([m,v])=>{const x=d.has(String(m)),{value:y,error:_}=bs(v.previousValue),{value:S,error:E}=bs(v.currentValue),A=Q0(y,S);return f("div",{children:[f("button",{onClick:()=>{h(U=>{const C=new Set(U);return C.has(String(m))?C.delete(String(m)):C.add(String(m)),C})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:f("div",{className:"flex items-center gap-1.5 flex-1",children:[f(nt,{name:"icon-chevron-right",size:12,className:M("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":x})}),f("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[o(v.name),f(m2,{count:v.count,isFunction:typeof v.currentValue=="function",showWarning:A.changes.length===0,forceFlash:!0})]})]})}),f("div",{className:M("react-scan-expandable",{"react-scan-expanded":x}),children:f("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:f("div",{className:"flex flex-col gap-0.5",children:_||E?f(f2,{currError:E,prevError:_}):A.changes.length>0?f(h2,{change:v,diff:A,expandedFns:l,renderName:o,setExpandedFns:u,title:a}):f(p2,{currValue:S,entryKey:m,expandedFns:l,prevValue:y,setExpandedFns:u})})})})]},m)})})]})}),f2=({prevError:a,currError:r})=>f(Oe,{children:[a&&f("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:a}),r&&f("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:r})]}),h2=({diff:a,title:r,renderName:o,change:l,expandedFns:u,setExpandedFns:d})=>a.changes.map((h,p)=>{const{value:m,error:v}=bs(h.prevValue),{value:x,error:y}=bs(h.currentValue),_=typeof m=="function"||typeof x=="function";let S;return r==="Props"&&(S=h.path.length>0?`${o(String(l.name))}.${hn(h.path)}`:void 0),r==="State"&&h.path.length>0&&(S=`state.${hn(h.path)}`),S||(S=hn(h.path)),f("div",{className:M("flex flex-col gap-y-1",p<a.changes.length-1&&"mb-4"),children:[S&&f("div",{className:"text-[#666] text-[10px]",children:S}),f("button",{type:"button",className:M("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",_&&"cursor-pointer"),onClick:_?()=>{const E=`${hn(h.path)}-prev`;d(A=>{const U=new Set(A);return U.has(E)?U.delete(E):U.add(E),U})}:void 0,children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),f("span",{className:"flex-1 whitespace-nowrap font-mono",children:v?f("span",{className:"italic text-[#f87171]",children:v}):_?f("div",{className:"flex gap-1 items-start flex-col",children:[f("div",{className:"flex gap-1 items-start w-full",children:[f("span",{className:"flex-1 max-h-40",children:$d(m,u.has(`${hn(h.path)}-prev`))}),typeof m=="function"&&f(vs,{text:m.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:E})=>f(Oe,{children:E})})]}),m?.toString()===x?.toString()&&f("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):f(ys,{value:m,expanded:u.has(`${hn(h.path)}-prev`),onToggle:()=>{const E=`${hn(h.path)}-prev`;d(A=>{const U=new Set(A);return U.has(E)?U.delete(E):U.add(E),U})},isNegative:!0})})]}),f("button",{type:"button",className:M("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",_&&"cursor-pointer"),onClick:_?()=>{const E=`${hn(h.path)}-current`;d(A=>{const U=new Set(A);return U.has(E)?U.delete(E):U.add(E),U})}:void 0,children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),f("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:y?f("span",{className:"italic text-[#4ade80]",children:y}):_?f("div",{className:"flex gap-1 items-start flex-col",children:[f("div",{className:"flex gap-1 items-start w-full",children:[f("span",{className:"flex-1",children:$d(x,u.has(`${hn(h.path)}-current`))}),typeof x=="function"&&f(vs,{text:x.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:E})=>f(Oe,{children:E})})]}),m?.toString()===x?.toString()&&f("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):f(ys,{value:x,expanded:u.has(`${hn(h.path)}-current`),onToggle:()=>{const E=`${hn(h.path)}-current`;d(A=>{const U=new Set(A);return U.has(E)?U.delete(E):U.add(E),U})},isNegative:!1})})]})]},`${S}-${l.name}-${p}`)}),p2=({prevValue:a,currValue:r,entryKey:o,expandedFns:l,setExpandedFns:u})=>f(Oe,{children:[f("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),f("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:f(ys,{value:a,expanded:l.has(`${String(o)}-prev`),onToggle:()=>{const d=`${String(o)}-prev`;u(h=>{const p=new Set(h);return p.has(d)?p.delete(d):p.add(d),p})},isNegative:!0})})]}),f("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),f("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:f(ys,{value:r,expanded:l.has(`${String(o)}-current`),onToggle:()=>{const d=`${String(o)}-current`;u(h=>{const p=new Set(h);return p.has(d)?p.delete(d):p.add(d),p})},isNegative:!1})})]}),typeof r=="object"&&r!==null&&f("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[f(nt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),f("span",{children:"Reference changed but objects are structurally the same"})]})]}),m2=({count:a,forceFlash:r,isFunction:o,showWarning:l})=>{const u=le(!0),d=le(null),h=le(a);return Se(()=>{const p=d.current;!p||h.current===a||(p.classList.remove("count-flash"),p.offsetWidth,p.classList.add("count-flash"),h.current=a)},[a]),Se(()=>{if(u.current){u.current=!1;return}if(r){let p=setTimeout(()=>{d.current?.classList.add("count-flash-white"),p=setTimeout(()=>{d.current?.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(p)}}},[r]),f("div",{ref:d,className:"count-badge",children:[l&&f(nt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),o&&f(nt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",a]})},Ea={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Ea.lastRendered.clear(),Ea.expandedPaths.clear(),$x.cleanupAll(),E2(),Y0.reset()}},F0=class extends cn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Ea.cleanup()}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){return this.state.hasError?f("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[f("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[f(nt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),f("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),f("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},g2=cr(()=>M("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Rs.value&&"opacity-100 delay-300 pointer-events-auto")),v2=wf(()=>{const a=le(null),r=o=>{if(!o)return;a.current=o;const{data:l,shouldUpdate:u}=z2(o);if(u){const d={timestamp:Date.now(),fiberInfo:T2(o),props:l.fiberProps,state:l.fiberState,context:l.fiberContext,stateNames:k2(o)};Y0.addUpdate(d,o)}};return So(()=>{const o=te.inspectState.value;_o(()=>{if(o.kind!=="focused"||!o.focusedDomElement){a.current=null,Ea.cleanup();return}o.kind==="focused"&&(Rs.value=!1);const{parentCompositeFiber:l}=mv(o.focusedDomElement,o.fiber);if(!l){te.inspectState.value={kind:"inspect-off"},Qe.value={view:"none"};return}a.current?.type!==l.type&&(a.current=l,Ea.cleanup(),r(l))})}),So(()=>{xf.value,_o(()=>{const o=te.inspectState.value;if(o.kind!=="focused"||!o.focusedDomElement){a.current=null,Ea.cleanup();return}const{parentCompositeFiber:l}=mv(o.focusedDomElement,o.fiber);if(!l){te.inspectState.value={kind:"inspect-off"},Qe.value={view:"none"};return}r(l),o.focusedDomElement.isConnected||(a.current=null,Ea.cleanup(),te.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Se(()=>()=>{Ea.cleanup()},[]),f(F0,{children:f("div",{className:g2,children:f("div",{className:"w-full h-full",children:f(s2,{})})})})}),y2=wf(()=>te.inspectState.value.kind!=="focused"?null:f(F0,{children:[f(v2,{}),f(e2,{})]})),G0=a=>{if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!r?.renderers)return null;for(const[,o]of Array.from(r.renderers))try{const l=o.findFiberByHostInstance?.(a);if(l)return l}catch{}}if("_reactRootContainer"in a)return a._reactRootContainer?._internalRoot?.current?.child??null;for(const r in a)if(r.startsWith("__reactInternalInstance$")||r.startsWith("__reactFiber"))return a[r];return null},_f=a=>{let r=a;for(;r;){if(r.stateNode instanceof Element)return r.stateNode;if(!r.child)break;r=r.child}for(;r;){if(r.stateNode instanceof Element)return r.stateNode;if(!r.return)break;r=r.return}return null},Sf=a=>{if(!a)return null;try{const r=G0(a);if(!r)return null;const o=ni(r);return o?o[0]:null}catch{return null}},ni=a=>{let r=a,o=null;for(;r;){if(As(r))return[r,o];yo(r)&&!o&&(o=r),r=r.return}return null},pv=(a,r)=>!!t0(r,l=>l===a),b2=async a=>{const r=Sf(a);if(!r)return null;const o=_f(r);if(!o)return null;const l=(await ax([o])).get(o);return l||null},nr=a=>{const r=Sf(a);if(!r)return{};if(!_f(r))return{};const l=ni(r);if(!l)return{};const[u]=l;return{parentCompositeFiber:u}},mv=(a,r)=>{if(!a.isConnected)return{};let o=r??Sf(a);if(!o)return{};let l=o,u=null,d=null;for(;l;){if(!l.stateNode){l=l.return;continue}if(Re.instrumentation?.fiberRoots.has(l.stateNode)){u=l,d=l.stateNode.current;break}l=l.return}if(!u||!d)return{};if(o=pv(o,d)?o:o.alternate??o,!o)return{};if(!_f(o))return{};const h=ni(o)?.[0];return h?{parentCompositeFiber:pv(h,d)?h:h.alternate??h}:{}},$0=a=>{const r=a.memoizedProps??{},o=a.alternate?.memoizedProps??{},l=[];for(const u in r){if(u==="children")continue;const d=r[u],h=o[u];Aa(d,h)||l.push({name:u,value:d,prevValue:h,type:1})}return l},Gd=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),ws=(a,r=!0)=>{if(a.stateNode&&"nodeType"in a.stateNode){const l=a.stateNode;return r&&l.tagName&&Gd.has(l.tagName.toLowerCase())?null:l}let o=a.child;for(;o;){const l=ws(o,r);if(l)return l;o=o.sibling}return null},w2=(a=document.body)=>{const r=[],o=u=>{if(!u)return null;const{parentCompositeFiber:d}=nr(u);return d&&ws(d)===u?u:null},l=(u,d=0)=>{const h=o(u);if(h){const{parentCompositeFiber:p}=nr(h);if(!p)return;r.push({element:h,depth:d,name:bt(p.type)??"Unknown",fiber:p})}for(const p of Array.from(u.children))l(p,h?d+1:d)};return l(a),r},gv=a=>{try{if(a===null)return"null";if(a===void 0)return"undefined";if(ai(a))return"Promise";if(typeof a=="function"){const r=a.toString();try{return r.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return r}}switch(!0){case a instanceof Date:return a.toISOString();case a instanceof RegExp:return a.toString();case a instanceof Error:return`${a.name}: ${a.message}`;case a instanceof Map:return JSON.stringify(Array.from(a.entries()),null,2);case a instanceof Set:return JSON.stringify(Array.from(a),null,2);case a instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(a.buffer)),null,2);case a instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(a)),null,2);case(ArrayBuffer.isView(a)&&"length"in a):return JSON.stringify(Array.from(a),null,2);case Array.isArray(a):return JSON.stringify(a,null,2);case typeof a=="object":return JSON.stringify(a,null,2);default:return String(a)}}catch{return String(a)}},x2=(a,r)=>{try{return typeof a!="function"||typeof r!="function"?!1:a.toString()===r.toString()}catch{return!1}},Q0=(a,r,o=[],l=new WeakSet)=>{if(a===r)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof a=="function"&&typeof r=="function"){const v=x2(a,r);return{type:"primitive",changes:[{path:o,prevValue:a,currentValue:r,sameFunction:v}],hasDeepChanges:!v}}if(a===null||r===null||a===void 0||r===void 0||typeof a!="object"||typeof r!="object")return{type:"primitive",changes:[{path:o,prevValue:a,currentValue:r}],hasDeepChanges:!0};if(l.has(a)||l.has(r))return{type:"object",changes:[{path:o,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};l.add(a),l.add(r);const u=a,d=r,h=new Set([...Object.keys(u),...Object.keys(d)]),p=[];let m=!1;for(const v of h){const x=u[v],y=d[v];if(x!==y)if(typeof x=="object"&&typeof y=="object"&&x!==null&&y!==null){const _=Q0(x,y,[...o,v],l);p.push(..._.changes),_.hasDeepChanges&&(m=!0)}else p.push({path:[...o,v],prevValue:x,currentValue:y}),m=!0}return{type:"object",changes:p,hasDeepChanges:m}},hn=a=>a.length===0?"":a.reduce((r,o,l)=>/^\d+$/.test(o)?`${r}[${o}]`:l===0?o:`${r}.${o}`,"");function _2(a){const r=a.replace(/\s+/g," ").trim(),o=[];let l="";for(let C=0;C<r.length;C++){const D=r[C];if(D==="="&&r[C+1]===">"){l.trim()&&o.push(l.trim()),o.push("=>"),l="",C++;continue}/[(){}[\];,<>:\?!]/.test(D)?(l.trim()&&o.push(l.trim()),o.push(D),l=""):/\s/.test(D)?(l.trim()&&o.push(l.trim()),l=""):l+=D}l.trim()&&o.push(l.trim());const u=[];for(let C=0;C<o.length;C++){const D=o[C],q=o[C+1];D==="("&&q===")"||D==="["&&q==="]"||D==="{"&&q==="}"||D==="<"&&q===">"?(u.push(D+q),C++):u.push(D)}const d=new Set,h=new Set;function p(C,D,q){let Q=0;for(let Z=q;Z<u.length;Z++){const P=u[Z];if(P===C)Q++;else if(P===D&&(Q--,Q===0))return Z}return-1}for(let C=0;C<u.length;C++)if(u[C]==="("){const q=p("(",")",C);if(q!==-1&&u[q+1]==="=>")for(let Q=C;Q<=q;Q++)d.add(Q)}for(let C=1;C<u.length;C++){const D=u[C-1],q=u[C];if(/^[a-zA-Z0-9_$]+$/.test(D)&&q==="<"){const Q=p("<",">",C);if(Q!==-1)for(let Z=C;Z<=Q;Z++)h.add(Z)}}let m=0;const v="  ",x=[];let y="";function _(){y.trim()&&x.push(y.replace(/\s+$/,"")),y=""}function S(){_(),y=v.repeat(m)}const E=[];function A(){return E.length?E[E.length-1]:null}function U(C,D=!1){y.trim()?D||/^[),;:\].}>]$/.test(C)?y+=C:y+=` ${C}`:y+=C}for(let C=0;C<u.length;C++){const D=u[C],q=u[C+1]||"";if(["(","{","[","<"].includes(D)){if(U(D),E.push(D),D==="{")m++,S();else if((D==="("||D==="["||D==="<")&&!(d.has(C)&&D==="("||h.has(C)&&D==="<")){const Q={"(":")","[":"]","<":">"}[D];q!==Q&&q!=="()"&&q!=="[]"&&q!=="<>"&&(m++,S())}}else if([")","}","]",">"].includes(D)){const Q=A();D===")"&&Q==="("||D==="]"&&Q==="["||D===">"&&Q==="<"?!(d.has(C)&&D===")")&&!(h.has(C)&&D===">")&&(m=Math.max(m-1,0),S()):D==="}"&&Q==="{"&&(m=Math.max(m-1,0),S()),E.pop(),U(D),D==="}"&&S()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(D))U(D);else if(D==="=>")U(D);else if(D===";")U(D,!0),S();else if(D===","){U(D,!0);const Q=A();!(d.has(C)&&Q==="(")&&!(h.has(C)&&Q==="<")&&Q&&["{","[","(","<"].includes(Q)&&S()}else U(D)}return _(),x.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var $d=(a,r=!1)=>{try{const o=a.toString(),l=o.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!l)return"ƒ";const d=(l[1]||l[2]||"").replace(/\s+/g,"");return r?_2(o):`ƒ (${d}) => ...`}catch{return"ƒ"}},xs=a=>{if(a===null)return"null";if(a===void 0)return"undefined";if(typeof a=="string")return`"${a.length>150?`${a.slice(0,20)}...`:a}"`;if(typeof a=="number"||typeof a=="boolean")return String(a);if(typeof a=="function")return $d(a);if(Array.isArray(a))return`Array(${a.length})`;if(a instanceof Map)return`Map(${a.size})`;if(a instanceof Set)return`Set(${a.size})`;if(a instanceof Date)return a.toISOString();if(a instanceof RegExp)return a.toString();if(a instanceof Error)return`${a.name}: ${a.message}`;if(typeof a=="object"){const r=Object.keys(a);return`{${r.length>2?`${r.slice(0,2).join(", ")}, ...`:r.join(", ")}}`}return String(a)},S2=a=>{if(a==null)return{value:a};if(typeof a=="function")return{value:a};if(typeof a!="object")return{value:a};if(a instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(a);return r===Promise.prototype||r?.constructor?.name==="Promise"?{value:"Promise"}:{value:a}}catch{return{value:null,error:"Error accessing value"}}},ai=a=>!!a&&(a instanceof Promise||typeof a=="object"&&"then"in a),T2=a=>{const r=er(a);return{displayName:bt(a)||"Unknown",type:a.type,key:a.key,id:a.index,selfTime:r?.selfTime??null,totalTime:r?.totalTime??null}},Tf=new Map,Z0=new Map,Cf=new Map,Qd=null,C2=/\[(?<name>\w+),\s*set\w+\]/g,k2=a=>{const r=a.type?.toString?.()||"";return r?Array.from(r.matchAll(C2),o=>o.groups?.name??""):[]},E2=()=>{Tf.clear(),Z0.clear(),Cf.clear(),Qd=null},N2=a=>{const r=a.type!==Qd;return Qd=a.type,r},sd=(a,r,o,l)=>{const u=a.get(r),d=a===Tf||a===Cf,h=!Aa(o,l);if(!u)return a.set(r,{count:h&&d?1:0,currentValue:o,previousValue:l,lastUpdated:Date.now()}),{hasChanged:h,count:h&&d?1:d?0:1};if(!Aa(u.currentValue,o)){const p=u.count+1;return a.set(r,{count:p,currentValue:o,previousValue:u.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:p}}return{hasChanged:!1,count:u.count}},vv=a=>{if(!a)return{};if(a.tag===Es||a.tag===Ns||a.tag===zo||a.tag===No){let r=a.memoizedState;const o={};let l=0;for(;r;)r.queue&&r.memoizedState!==void 0&&(o[l]=r.memoizedState),r=r.next,l++;return o}return a.tag===or?a.memoizedState||{}:{}},kf=a=>{const r=a.memoizedProps||{},o=a.alternate?.memoizedProps||{},l={},u={},d=Object.keys(r);for(const p of d)p in r&&(l[p]=r[p],u[p]=o[p]);const h=$0(a).map(p=>({name:p.name,value:p.value,prevValue:p.prevValue}));return{current:l,prev:u,changes:h}},Ef=a=>{const r=vv(a),o=a.alternate?vv(a.alternate):{},l=[];for(const[u,d]of Object.entries(r)){const h=a.tag===or?u:Number(u);a.alternate&&!Aa(o[u],d)&&l.push({name:h,value:d,prevValue:o[u]})}return{current:r,prev:o,changes:l}},Nf=a=>{const r=bv(a),o=a.alternate?bv(a.alternate):new Map,l={},u={},d=[],h=new Set;for(const[p,m]of r){const v=m.displayName,x=p;if(h.has(x))continue;h.add(x),l[v]=m.value;const y=o.get(p);y&&(u[v]=y.value,Aa(y.value,m.value)||d.push({name:v,value:m.value,prevValue:y.value,contextType:p}))}return{current:l,prev:u,changes:d}},z2=a=>{const r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!a)return{data:{fiberProps:r(),fiberState:r(),fiberContext:r()},shouldUpdate:!1};let o=!1;const l=N2(a),u=r();if(a.memoizedProps){const{current:y,changes:_}=kf(a);for(const[S,E]of Object.entries(y))u.current.push({name:S,value:ai(E)?{type:"promise",displayValue:"Promise"}:E});for(const S of _){const{hasChanged:E,count:A}=sd(Tf,S.name,S.value,S.prevValue);E&&(o=!0,u.changes.add(S.name),u.changesCounts.set(S.name,A))}}const d=r(),{current:h,changes:p}=Ef(a);for(const[y,_]of Object.entries(h)){const S=a.tag===or?y:Number(y);d.current.push({name:S,value:_})}for(const y of p){const{hasChanged:_,count:S}=sd(Z0,y.name,y.value,y.prevValue);_&&(o=!0,d.changes.add(y.name),d.changesCounts.set(y.name,S))}const m=r(),{current:v,changes:x}=Nf(a);for(const[y,_]of Object.entries(v))m.current.push({name:y,value:_});if(!l)for(const y of x){const{hasChanged:_,count:S}=sd(Cf,y.name,y.value,y.prevValue);_&&(o=!0,m.changes.add(y.name),m.changesCounts.set(y.name,S))}return!o&&!l&&(u.changes.clear(),d.changes.clear(),m.changes.clear()),{data:{fiberProps:u,fiberState:d,fiberContext:m},shouldUpdate:o||l}},yv=new WeakMap,bv=a=>{if(!a)return new Map;const r=yv.get(a);if(r)return r;const o=new Map;let l=a;for(;l;){const u=l.dependencies;if(u?.firstContext){let d=u.firstContext;for(;d;){const h=d.memoizedValue,p=d.context?.displayName;if(o.has(h)||o.set(d.context,{value:h,displayName:p??"UnnamedContext",contextType:null}),d===d.next)break;d=d.next}}l=l.return}return yv.set(a,o),o},wv=a=>{const r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!a)return{fiberProps:r(),fiberState:r(),fiberContext:r()};const o=r();if(a.memoizedProps){const{current:p,changes:m}=kf(a);for(const[v,x]of Object.entries(p))o.current.push({name:v,value:ai(x)?{type:"promise",displayValue:"Promise"}:x});for(const v of m)o.changes.add(v.name),o.changesCounts.set(v.name,1)}const l=r();if(a.memoizedState){const{current:p,changes:m}=Ef(a);for(const[v,x]of Object.entries(p))l.current.push({name:v,value:ai(x)?{type:"promise",displayValue:"Promise"}:x});for(const v of m)l.changes.add(v.name),l.changesCounts.set(v.name,1)}const u=r(),{current:d,changes:h}=Nf(a);for(const[p,m]of Object.entries(d))u.current.push({name:p,value:ai(m)?{type:"promise",displayValue:"Promise"}:m});for(const p of h)u.changes.add(p.name),u.changesCounts.set(p.name,1);return{fiberProps:o,fiberState:l,fiberContext:u}},Zd=0,xv=performance.now(),cd=0,_v=!1,K0=()=>{cd++;const a=performance.now();a-xv>=1e3&&(Zd=cd,cd=0,xv=a),requestAnimationFrame(K0)},J0=()=>(_v||(_v=!0,K0(),Zd=60),Zd),A2=a=>{if(!a)return[];const r=[];if(a.tag===Es||a.tag===Ns||a.tag===zo||a.tag===No){let o=a.memoizedState,l=a.alternate?.memoizedState,u=0;for(;o;){if(o.queue&&o.memoizedState!==void 0){const d={type:2,name:u.toString(),value:o.memoizedState,prevValue:l?.memoizedState};Aa(d.prevValue,d.value)||r.push(d)}o=o.next,l=l?.next,u++}return r}if(a.tag===or){const o={type:3,name:"state",value:a.memoizedState,prevValue:a.alternate?.memoizedState};return Aa(o.prevValue,o.value)||r.push(o),r}return r},ud=0,Sv=new WeakMap,M2=a=>{const r=Sv.get(a);return r||(ud++,Sv.set(a,ud),ud)};function D2(a,r){if(!a||!r)return;const o=a.memoizedValue,l={type:4,name:a.context.displayName??"Context.Provider",value:o,contextType:M2(a.context)};this.push(l)}var O2=a=>{const r=[];return h1(a,D2.bind(r)),r},I0=new Map,Tv=!1,dd=()=>Array.from(I0.values()),R2=16,Kd=new WeakMap;function W0(a){return String(za(a))}function P0(a){const r=W0(a),o=Kd.get(lr(a));if(o)return o.get(r)}function U2(a,r){const o=lr(a.type),l=W0(a);let u=Kd.get(o);u||(u=new Map,Kd.set(o,u)),u.set(l,r)}var H2=(a,r,o,l,u)=>{const d=Date.now(),h=P0(a);if((l||u)&&(!h||d-(h.lastRenderTimestamp||0)>R2)){const p=h||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:d};p.renderCount=(p.renderCount||0)+1,p.selfTime=r||0,p.totalTime=o||0,p.lastRenderTimestamp=d,U2(a,{...p})}},j2=(a,r)=>{const o={isPaused:ht(!Re.options.value.enabled),fiberRoots:new WeakSet};return I0.set(a,{key:a,config:r,instrumentation:o}),Tv||(Tv=!0,x1({name:"react-scan",onActive:r.onActive,onCommitFiberRoot(l,u){o.fiberRoots.add(u);const d=dd();for(const h of d)h.config.onCommitStart();w1(u.current,(h,p)=>{const m=lr(h.type);if(!m)return null;const v=dd(),x=[];for(let D=0,q=v.length;D<q;D++)v[D].config.isValidFiber(h)&&x.push(D);if(!x.length)return null;const y=[];if(v.some(D=>D.config.trackChanges)){const D=kf(h).changes,q=Ef(h).changes,Q=Nf(h).changes;y.push.apply(null,D.map(Z=>({type:1,name:Z.name,value:Z.value})));for(const Z of q)h.tag===or?y.push({type:3,name:Z.name.toString(),value:Z.value}):y.push({type:2,name:Z.name.toString(),value:Z.value});y.push.apply(null,Q.map(Z=>({type:4,name:Z.name,value:Z.value,contextType:Number(Z.contextType)})))}const{selfTime:_,totalTime:S}=er(h),E=J0(),A={phase:rx[p],componentName:bt(m),count:1,changes:y,time:_,forget:bo(h),unnecessary:null,didCommit:rf(h),fps:E},U=y.length>0,C=p1(h).length>0;p==="update"&&H2(h,_,S,U,C);for(let D=0,q=x.length;D<q;D++){const Q=x[D];v[Q].config.onRender(h,[A])}});for(const h of d)h.config.onCommitFinish()},onPostCommitFiberRoot(){const l=dd();for(const u of l)u.config.onPostCommitFiberRoot()}})),o},L2=a=>{const r=new Map;for(let o=0,l=a.length;o<l;o++){const u=a[o];if(!u.componentName)continue;const d=r.get(u.componentName)??[],h=nx([{aggregatedCount:1,computedKey:null,name:u.componentName,frame:null,...u,changes:{type:u.changes.reduce((v,x)=>v|x.type,0),unstable:u.changes.some(v=>v.unstable)},phase:u.phase,computedCurrent:null}]);if(!h)continue;let p=null,m=null;if(u.changes)for(let v=0,x=u.changes.length;v<x;v++){const{name:y,prevValue:_,nextValue:S,unstable:E,type:A}=u.changes[v];A===1?(p??={},m??={},p[`${E?"⚠️":""}${y} (prev)`]=_,m[`${E?"⚠️":""}${y} (next)`]=S):d.push({prev:_,next:S,type:A===4?"context":"state",unstable:E??!1})}p&&m&&d.push({prev:p,next:m,type:"props",unstable:!1}),r.set(h,d)}for(const[o,l]of Array.from(r.entries())){console.group(`%c${o}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:u,prev:d,next:h,unstable:p}of l)console.log(`${u}:`,p?"⚠️":"",d,"!==",h);console.groupEnd()}},B2=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},Cv=7,Y2="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",X2=.1,Pl=(a,r)=>Math.floor(a+(r-a)*X2),q2=4,_s=40,fd=45,hd="115,97,230";function V2(a,r){return r[0]-a[0]}function F2(a){return[...a.entries()].sort(V2)}function kv([a,r]){let o=`${r.slice(0,q2).join(", ")} ×${a}`;return o.length>_s&&(o=`${o.slice(0,_s)}…`),o}var Ev=a=>{const r=new Map;for(const{name:d,count:h}of a)r.set(d,(r.get(d)||0)+h);const o=new Map;for(const[d,h]of r){const p=o.get(h);p?p.push(d):o.set(h,[d])}const l=F2(o);let u=kv(l[0]);for(let d=1,h=l.length;d<h;d++)u+=", "+kv(l[d]);return u.length>_s?`${u.slice(0,_s)}…`:u},Nv=a=>{let r=0;for(const o of a)r+=o.width*o.height;return r},G2=(a,r)=>{for(const{id:o,name:l,count:u,x:d,y:h,width:p,height:m,didCommit:v}of r){const x={id:o,name:l,count:u,x:d,y:h,width:p,height:m,frame:0,targetX:d,targetY:h,targetWidth:p,targetHeight:m,didCommit:v},y=String(x.id),_=a.get(y);_?(_.count++,_.frame=0,_.targetX=d,_.targetY=h,_.targetWidth=p,_.targetHeight=m,_.didCommit=v):a.set(y,x)}},$2=(a,r,o)=>{for(const l of a.values()){const u=l.x-r,d=l.y-o;l.targetX=u,l.targetY=d}},Q2=(a,r)=>{const o=a.getContext("2d",{alpha:!0});return o&&o.scale(r,r),o},Z2=(a,r,o,l)=>{a.clearRect(0,0,r.width/o,r.height/o);const u=new Map,d=new Map;for(const m of l.values()){const{x:v,y:x,width:y,height:_,targetX:S,targetY:E,targetWidth:A,targetHeight:U,frame:C}=m;S!==v&&(m.x=Pl(v,S)),E!==x&&(m.y=Pl(x,E)),A!==y&&(m.width=Pl(y,A)),U!==_&&(m.height=Pl(_,U));const D=`${S??v},${E??x}`,q=`${D},${A??y},${U??_}`,Q=u.get(D);Q?Q.push(m):u.set(D,[m]);const Z=1-C/fd;m.frame++;const P=d.get(q)||{x:v,y:x,width:y,height:_,alpha:Z};Z>P.alpha&&(P.alpha=Z),d.set(q,P)}for(const{x:m,y:v,width:x,height:y,alpha:_}of d.values())a.strokeStyle=`rgba(${hd},${_})`,a.lineWidth=1,a.beginPath(),a.rect(m,v,x,y),a.stroke(),a.fillStyle=`rgba(${hd},${_*.1})`,a.fill();a.font=`11px ${Y2}`;const h=new Map;a.textRendering="optimizeSpeed";for(const m of u.values()){const v=m[0],{x,y,frame:_}=v,S=1-_/fd,E=Ev(m),{width:A}=a.measureText(E);if(h.set(`${x},${y},${A},${E}`,{text:E,width:A,height:11,alpha:S,x,y,outlines:m}),_>fd)for(const C of m)l.delete(String(C.id))}const p=Array.from(h.entries()).sort(([m,v],[x,y])=>Nv(y.outlines)-Nv(v.outlines));for(const[m,v]of p)if(h.has(m))for(const[x,y]of h.entries()){if(m===x)continue;const{x:_,y:S,width:E,height:A}=v,{x:U,y:C,width:D,height:q}=y;_+E>U&&U+D>_&&S+A>C&&C+q>S&&(v.text=Ev(v.outlines.concat(y.outlines)),v.width=a.measureText(v.text).width,h.delete(x))}for(const m of h.values()){const{x:v,y:x,alpha:y,width:_,height:S,text:E}=m;let A=x-S-4;A<0&&(A=0),a.fillStyle=`rgba(${hd},${y})`,a.fillRect(v,A,_+4,S+4),a.fillStyle=`rgba(255,255,255,${y})`,a.fillText(E,v+2,A+S)}return l.size>0},K2='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',kn=null,Ss=null,ar=null,sn=1,Ts=null,zf=new Map,go=new Map,Pr=new Set,J2=a=>{if(!As(a))return;const r=typeof a.type=="string"?a.type:bt(a);if(!r)return;const o=go.get(a),l=m1(a),u=rf(a);o?o.count++:(go.set(a,{name:r,count:1,elements:l.map(d=>d.stateNode),didCommit:u?1:0}),Pr.add(a))},I2=a=>{const r=a[0];if(a.length===1)return r;let o,l,u,d;for(let h=0,p=a.length;h<p;h++){const m=a[h];o=o==null?m.x:Math.min(o,m.x),l=l==null?m.y:Math.min(l,m.y),u=u==null?m.x+m.width:Math.max(u,m.x+m.width),d=d==null?m.y+m.height:Math.max(d,m.y+m.height)}return o==null||l==null||u==null||d==null?a[0]:new DOMRect(o,l,u-o,d-l)};function W2(a,r){const o=[];for(const l of a){const u=l.target;this.seenElements.has(u)||(this.seenElements.add(u),o.push(l))}o.length>0&&this.resolveNext&&(this.resolveNext(o),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(r.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var ey=async function*(a){const r={uniqueElements:new Set(a),seenElements:new Set,resolveNext:null,done:!1},o=new IntersectionObserver(W2.bind(r));for(const l of r.uniqueElements)o.observe(l);for(;!r.done;){const l=await new Promise(u=>{r.resolveNext=u});l.length>0&&(yield l)}},P2=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,e_=async()=>{const a=[];for(const o of Pr){const l=go.get(o);if(l)for(let u=0;u<l.elements.length;u++)l.elements[u]instanceof Element&&a.push(l.elements[u])}const r=new Map;for await(const o of ey(a)){for(const h of o){const p=h.target,m=h.intersectionRect;h.isIntersecting&&m.width&&m.height&&r.set(p,m)}const l=[],u=[],d=[];for(const h of Pr){const p=go.get(h);if(!p)continue;const m=[];for(let v=0;v<p.elements.length;v++){const x=p.elements[v],y=r.get(x);y&&m.push(y)}m.length&&(l.push(p),u.push(I2(m)),d.push(za(h)))}if(l.length>0){const h=new P2(l.length*Cv*4),p=new Float32Array(h),m=new Array(l.length);let v;for(let x=0,y=l.length;x<y;x++){const _=l[x],S=d[x],{x:E,y:A,width:U,height:C}=u[x],{count:D,name:q,didCommit:Q}=_;if(kn){const Z=x*Cv;p[Z]=S,p[Z+1]=D,p[Z+2]=E,p[Z+3]=A,p[Z+4]=U,p[Z+5]=C,p[Z+6]=Q,m[x]=q}else v||=new Array(l.length),v[x]={id:S,name:q,count:D,x:E,y:A,width:U,height:C,didCommit:Q}}kn?kn.postMessage({type:"draw-outlines",data:h,names:m}):Ss&&ar&&v&&(G2(zf,v),Ts||(Ts=requestAnimationFrame(Af)))}}for(const o of Pr)go.delete(o),Pr.delete(o)},Af=()=>{if(!ar||!Ss)return;Z2(ar,Ss,sn,zf)?Ts=requestAnimationFrame(Af):Ts=null},t_=typeof OffscreenCanvas<"u"&&typeof Worker<"u",zv=()=>Math.min(window.devicePixelRatio||1,2),n_=()=>{a_();const a=document.createElement("div");a.setAttribute("data-react-scan","true");const r=a.attachShadow({mode:"open"}),o=document.createElement("canvas");if(o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.pointerEvents="none",o.style.zIndex="2147483646",o.setAttribute("aria-hidden","true"),r.appendChild(o),!o)return null;sn=zv(),Ss=o;const{innerWidth:l,innerHeight:u}=window;o.style.width=`${l}px`,o.style.height=`${u}px`;const d=l*sn,h=u*sn;if(o.width=d,o.height=h,t_&&!window.__REACT_SCAN_EXTENSION__)try{kn=new Worker(URL.createObjectURL(new Blob([K2],{type:"application/javascript"})));const y=o.transferControlToOffscreen();kn?.postMessage({type:"init",canvas:y,width:o.width,height:o.height,dpr:sn},[y])}catch(y){console.warn("Failed to initialize OffscreenCanvas worker:",y)}kn||(ar=Q2(o,sn));let p=!1;window.addEventListener("resize",()=>{p||(p=!0,setTimeout(()=>{const y=window.innerWidth,_=window.innerHeight;sn=zv(),o.style.width=`${y}px`,o.style.height=`${_}px`,kn?kn.postMessage({type:"resize",width:y,height:_,dpr:sn}):(o.width=y*sn,o.height=_*sn,ar&&(ar.resetTransform(),ar.scale(sn,sn)),Af()),p=!1}))});let m=window.scrollX,v=window.scrollY,x=!1;return window.addEventListener("scroll",()=>{x||(x=!0,setTimeout(()=>{const{scrollX:y,scrollY:_}=window,S=y-m,E=_-v;m=y,v=_,kn?kn.postMessage({type:"scroll",deltaX:S,deltaY:E}):requestAnimationFrame($2.bind(null,zf,S,E)),x=!1},32))}),setInterval(()=>{Pr.size&&requestAnimationFrame(e_)},32),r.appendChild(o),a},Av=()=>globalThis.__REACT_SCAN_STOP__,a_=()=>{const a=document.querySelector("[data-react-scan]");a&&a.remove()},r_=a=>{if(As(a)&&Re.options.value.showToolbar!==!1&&te.inspectState.value.kind==="focused"){const r=a,{selfTime:o}=er(a),l=bt(a.type),u=za(r),d=te.reportData.get(u),h=d?.count??0,p=d?.time??0,m=[],v=te.changesListeners.get(za(a));if(v?.length){const y=$0(a).map(A=>({type:1,name:A.name,value:A.value,prevValue:A.prevValue,unstable:!1})),_=A2(a),E=O2(a).map(A=>({name:A.name,type:4,value:A.value,contextType:A.contextType}));v.forEach(A=>{A({propsChanges:y,stateChanges:_,contextChanges:E})})}const x={count:h+1,time:p+o||0,renders:[],displayName:l,type:lr(a.type)||null,changes:m};te.reportData.set(u,x),Jd=!0}},Jd=!1,Mv,i_=()=>{clearInterval(Mv),Mv=setInterval(()=>{Jd&&(te.lastReportTime.value=Date.now(),Jd=!1)},50)},o_=a=>!WS.has(a.memoizedProps),l_=a=>{if(Av())return;let r,o=!1;const l=()=>{o||(r&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{o=!0;const d=n_();d&&document.documentElement.appendChild(d),a()}))},u=j2("react-scan-devtools-0.1.0",{onCommitStart:()=>{Re.options.value.onCommitStart?.()},onActive:()=>{Av()||(l(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Re}),i_(),B2())},onError:()=>{},isValidFiber:o_,onRender:(d,h)=>{As(d)&&te.interactionListeningForRenders?.(d,h);const p=Re.instrumentation?.isPaused.value,m=te.inspectState.value.kind==="inspect-off"||te.inspectState.value.kind==="uninitialized";p&&m||(p||J2(d),Re.options.value.log&&L2(h),te.inspectState.value.kind==="focused"&&(xf.value=Date.now()),m||r_(d),Re.options.value.onRender?.(d,h))},onCommitFinish:()=>{l(),Re.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){l()},trackChanges:!1});Re.instrumentation=u},s_=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,c_=(a,r,o=r)=>{const[l,u]=Te(a);return Se(()=>{if(a===l)return;const h=setTimeout(()=>u(a),a?r:o);return()=>clearTimeout(h)},[a,r,o]),l},u_=cr(()=>M("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Rs.value&&"-translate-y-[200%]")),d_=()=>{const a=le(null),r=le(null),[o,l]=Te(null);So(()=>{const d=te.inspectState.value;d.kind==="focused"&&l(d.fiber)}),So(()=>{const d=At.value;_o(()=>{if(te.inspectState.value.kind!=="focused"||!a.current||!r.current)return;const{totalUpdates:h,currentIndex:p,updates:m,isVisible:v,windowOffset:x}=d,y=Math.max(0,h-1),_=v?`#${x+p} Re-render`:y>0?`×${y}`:"";let S;if(y>0&&p>=0&&p<m.length){const E=m[p]?.fiberInfo?.selfTime;S=E>0?E<.1-Number.EPSILON?"< 0.1ms":`${Number(E.toFixed(1))}ms`:void 0}a.current.dataset.text=_?` • ${_}`:"",r.current.dataset.text=S?` • ${S}`:""})});const u=yn(()=>{if(!o)return null;const{name:d,wrappers:h,wrapperTypes:p}=To(o),m=h.length?`${h.join("(")}(${d})${")".repeat(h.length)}`:d??"",v=p[0];return f("span",{title:m,className:"flex items-center gap-x-1",children:[d??"Unknown",f("span",{title:v?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!v&&f(Oe,{children:[f("span",{className:M("rounded py-[1px] px-1","truncate",v.compiler&&"bg-purple-800 text-neutral-400",!v.compiler&&"bg-neutral-700 text-neutral-300",v.type==="memo"&&"bg-[#5f3f9a] text-white"),children:v.type},v.type),v.compiler&&f("span",{className:"text-yellow-300",children:"✨"})]})}),p.length>1&&f("span",{className:"text-[10px] text-neutral-400",children:["×",p.length-1]})]})},[o]);return f("div",{className:u_,children:[u,f("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[f("span",{ref:a,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),f("span",{ref:r,className:"with-data-text !overflow-visible"})]})]})},f_=()=>{const a=c_(te.inspectState.value.kind==="focused",150,0),r=()=>{Qe.value={view:"none"},te.inspectState.value={kind:"inspect-off"}};if(Qe.value.view!=="notifications")return f("div",{className:"react-scan-header",children:[f("div",{className:"relative flex-1 h-full",children:f("div",{className:M("react-scan-header-item is-visible",!a&&"!duration-0"),children:f(d_,{})})}),f("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:r,children:f(nt,{name:"icon-close"})})]})},h_=({className:a,...r})=>f("div",{className:M("react-scan-toggle",a),children:[f("input",{type:"checkbox",...r}),f("div",{})]}),p_=({fps:a})=>{const r=o=>o<30?"#EF4444":o<50?"#F59E0B":"rgb(214,132,245)";return f("div",{className:M("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[f("div",{style:{color:r(a)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:a}),f("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},m_=()=>{const[a,r]=Te(null);return Se(()=>{const o=setInterval(()=>{r(J0())},200);return()=>clearInterval(o)},[]),f("div",{className:M("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:a===null?f(Oe,{children:"️"}):f(p_,{fps:a})})},mn=()=>En?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",vn=a=>a(),gt=class ty extends Array{constructor(r=25){super(),this.capacity=r}push(...r){const o=super.push(...r);for(;this.length>this.capacity;)this.shift();return o}static fromArray(r,o){const l=new ty(o);return l.push(...r),l}},g_=class{constructor(a){this.subscribers=new Set,this.currentValue=a}subscribe(a){return this.subscribers.add(a),a(this.currentValue),()=>{this.subscribers.delete(a)}}setState(a){this.currentValue=a,this.subscribers.forEach(r=>r(a))}getCurrentState(){return this.currentValue}},ny=150,Dv=new g_(new gt(ny)),Cn=50,v_=class{constructor(){this.channels={}}publish(a,r,o=!0){const l=this.channels[r];if(!l){if(!o)return;this.channels[r]={callbacks:new gt(Cn),state:new gt(Cn)},this.channels[r].state.push(a);return}l.state.push(a),l.callbacks.forEach(u=>u(a))}getAvailableChannels(){return gt.fromArray(Object.keys(this.channels),Cn)}subscribe(a,r,o=!1){const l=()=>(o||this.channels[a].state.forEach(d=>{r(d)}),()=>{const d=this.channels[a].callbacks.filter(h=>h!==r);this.channels[a].callbacks=gt.fromArray(d,Cn)}),u=this.channels[a];return u?(u.callbacks.push(r),l()):(this.channels[a]={callbacks:new gt(Cn),state:new gt(Cn)},this.channels[a].callbacks.push(r),l())}updateChannelState(a,r,o=!0){const l=this.channels[a];if(!l){if(!o)return;const u=new gt(Cn),d={callbacks:new gt(Cn),state:u};this.channels[a]=d,d.state=r(u);return}l.state=r(l.state)}getChannelState(a){return this.channels[a].state??new gt(Cn)}},Cs=new v_,ay={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},oo={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},y_=(a,r=ay)=>{const o=[];return r.skipProviders&&o.push(...oo.providers),r.skipHocs&&o.push(...oo.hocs),r.skipContainers&&o.push(...oo.containers),r.skipUtilities&&o.push(...oo.utilities),r.skipBoundaries&&o.push(...oo.boundaries),!o.some(l=>l.test(a))},Ov=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],b_=a=>{for(let d=0;d<Ov.length;d++)if(Ov[d].test(a))return!0;const r=!/[aeiou]/i.test(a),o=(a.match(/\d/g)?.length??0)>a.length/2,l=/^[a-z]+$/.test(a),u=/[$_]{2,}/.test(a);return Number(r)+Number(o)+Number(l)+Number(u)>=2},w_=(a,r=ay)=>{if(!a)return[];if(!bt(a.type))return[];const l=new Array;let u=a;for(;u.return;){const h=x_(u.type);h&&!b_(h)&&y_(h,r)&&h.toLowerCase()!==h&&l.push(h),u=u.return}const d=new Array(l.length);for(let h=0;h<l.length;h++)d[h]=l[l.length-h-1];return d},x_=a=>{const r=bt(a);return r?r.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},__=(a,r=()=>!0)=>{let o=a;for(;o;){const l=bt(o.type);if(l&&r(l))return l;o=o.return}return null},Rv,Id="never-hidden",S_=()=>{Rv?.();const a=()=>{document.hidden&&(Id=Date.now())};document.addEventListener("visibilitychange",a),Rv=()=>{document.removeEventListener("visibilitychange",a)}},T_=a=>["pointerup","click"].includes(a)?"pointer":(a.includes("key"),["keydown","keyup"].includes(a)?"keyboard":null),pd=null,C_=a=>{S_();const r=new Map,o=new Map,l=d=>{if(!d.interactionId)return;if(d.interactionId&&d.target&&!o.has(d.interactionId)&&o.set(d.interactionId,d.target),d.target){let p=d.target;for(;p;){if(p.id==="react-scan-toolbar-root"||p.id==="react-scan-root")return;p=p.parentElement}}const h=r.get(d.interactionId);if(h)d.duration>h.latency?(h.entries=[d],h.latency=d.duration):d.duration===h.latency&&d.startTime===h.entries[0].startTime&&h.entries.push(d);else{const p=T_(d.name);if(!p)return;const m={id:d.interactionId,latency:d.duration,entries:[d],target:d.target,type:p,startTime:d.startTime,endTime:Date.now(),processingStart:d.processingStart,processingEnd:d.processingEnd,duration:d.duration,inputDelay:d.processingStart-d.startTime,processingDuration:d.processingEnd-d.processingStart,presentationDelay:d.duration-(d.processingEnd-d.startTime),timestamp:Date.now(),timeSinceTabInactive:Id==="never-hidden"?"never-hidden":Date.now()-Id,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};r.set(m.id,m),pd||(pd=requestAnimationFrame(()=>{requestAnimationFrame(()=>{a(r.get(m.id)),pd=null})}))}},u=new PerformanceObserver(d=>{const h=d.getEntries();for(let p=0,m=h.length;p<m;p++){const v=h[p];l(v)}});try{u.observe({type:"event",buffered:!0,durationThreshold:16}),u.observe({type:"first-input",buffered:!0})}catch{}return()=>u.disconnect()},k_=()=>C_(a=>{Cs.publish({kind:"entry-received",entry:a},"recording")}),us=25,Zn=new gt(us),E_=(a,r)=>{let o=null;for(const l of r){if(l.type!==a.type)continue;if(o===null){o=l;continue}const u=(d,h)=>Math.abs(d.startDateTime)-(h.startTime+h.timeOrigin);u(l,a)<u(o,a)&&(o=l)}return o},N_=a=>Cs.subscribe("recording",o=>{const l=o.kind==="auto-complete-race"?Zn.find(d=>d.interactionUUID===o.interactionUUID):E_(o.entry,Zn);if(!l)return;const u=l.completeInteraction(o);a(u)}),z_=({onMicroTask:a,onRAF:r,onTimeout:o,abort:l})=>{queueMicrotask(()=>{l?.()!==!0&&a()&&requestAnimationFrame(()=>{l?.()!==!0&&r()&&setTimeout(()=>{l?.()!==!0&&o()},0)})})},A_=a=>{const r=G0(a);if(!r)return;let o=r?bt(r?.type):"N/A";return o||(o=__(r,u=>u.length>2)??"N/A"),o?{componentPath:w_(r),childrenTree:{},componentName:o,elementFiber:r}:void 0},Uv=(a,r)=>{let o=null;const l=m=>{switch(a){case"pointer":return m.phase==="start"?"pointerup":m.target instanceof HTMLInputElement||m.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return m.phase==="start"?"keydown":"change"}},u={current:{kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a}},d=m=>{if(m.composedPath().some(A=>A instanceof Element&&A.id==="react-scan-toolbar-root")||(Date.now()-u.current.stageStart>2e3&&(u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a}),u.current.kind!=="uninitialized-stage"))return;const x=performance.now();r?.onStart?.(u.current.interactionUUID);const y=A_(m.target);if(!y){r?.onError?.(u.current.interactionUUID);return}const _={},S=ry(_);u.current={...u.current,interactionType:a,blockingTimeStart:Date.now(),childrenTree:y.childrenTree,componentName:y.componentName,componentPath:y.componentPath,fiberRenders:_,kind:"interaction-start",interactionStartDetail:x,stopListeningForRenders:S};const E=l({phase:"end",target:m.target});document.addEventListener(E,h,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(E,h)})};document.addEventListener(l({phase:"start"}),d,{capture:!0});const h=(m,v,x)=>{if(u.current.kind!=="interaction-start"&&v===o){if(a==="pointer"&&m.target instanceof HTMLSelectElement){u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}r?.onError?.(u.current.interactionUUID),u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}o=v,z_({abort:x,onMicroTask:()=>u.current.kind==="uninitialized-stage"?!1:(u.current={...u.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>u.current.kind!=="js-end-stage"&&u.current.kind!=="raf-stage"?(r?.onError?.(u.current.interactionUUID),u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a},!1):(u.current={...u.current,kind:"raf-stage",rafStart:performance.now()},!0),onTimeout:()=>{if(u.current.kind!=="raf-stage"){r?.onError?.(u.current.interactionUUID),u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}const y=Date.now(),_=Object.freeze({...u.current,kind:"timeout-stage",blockingTimeEnd:y,commitEnd:performance.now()});u.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:y,interactionType:a};let S=!1;const E=U=>{S=!0;const C=U.kind==="auto-complete-race"?U.detailedTiming.commitEnd-U.detailedTiming.interactionStartDetail:U.entry.latency,D={detailedTiming:_,latency:C,completedAt:Date.now(),flushNeeded:!0};r?.onComplete?.(_.interactionUUID,D,U);const q=Zn.filter(Q=>Q.interactionUUID!==_.interactionUUID);return Zn=gt.fromArray(q,us),D},A={completeInteraction:E,endDateTime:Date.now(),startDateTime:_.blockingTimeStart,type:a,interactionUUID:_.interactionUUID};if(Zn.push(A),M_())setTimeout(()=>{if(S)return;E({kind:"auto-complete-race",detailedTiming:_,interactionUUID:_.interactionUUID});const U=Zn.filter(C=>C.interactionUUID!==_.interactionUUID);Zn=gt.fromArray(U,us)},1e3);else{const U=Zn.filter(C=>C.interactionUUID!==_.interactionUUID);Zn=gt.fromArray(U,us),E({kind:"auto-complete-race",detailedTiming:_,interactionUUID:_.interactionUUID})}}})},p=m=>{const v=mn();h(m,v,()=>v!==o)};return a==="keyboard"&&document.addEventListener("keypress",p),()=>{document.removeEventListener(l({phase:"start"}),d,{capture:!0}),document.removeEventListener("keypress",p)}},Hv=a=>t0(a,r=>{if(yo(r))return!0})?.stateNode,M_=()=>"PerformanceEventTiming"in globalThis,ry=a=>{const r=o=>{const l=bt(o.type);if(!l)return;const u=a[l];if(!u){const x=new Set,y=o.return&&ni(o.return),_=y&&bt(y[0]);_&&x.add(_);const{selfTime:S,totalTime:E}=er(o),A=wv(o),U={current:[],changes:new Set,changesCounts:new Map},C={fiberProps:A.fiberProps||U,fiberState:A.fiberState||U,fiberContext:A.fiberContext||U};a[l]={renderCount:1,hasMemoCache:bo(o),wasFiberRenderMount:jv(o),parents:x,selfTime:S,totalTime:E,nodeInfo:[{element:Hv(o),name:bt(o.type)??"Unknown",selfTime:er(o).selfTime}],changes:C};return}if(ni(o)?.[0]?.type){const x=o.return&&ni(o.return),y=x&&bt(x[0]);y&&u.parents.add(y)}const{selfTime:h,totalTime:p}=er(o),m=wv(o);if(!m)return;const v={current:[],changes:new Set,changesCounts:new Map};u.wasFiberRenderMount=u.wasFiberRenderMount||jv(o),u.hasMemoCache=u.hasMemoCache||bo(o),u.changes={fiberProps:md(u.changes?.fiberProps||v,m.fiberProps||v),fiberState:md(u.changes?.fiberState||v,m.fiberState||v),fiberContext:md(u.changes?.fiberContext||v,m.fiberContext||v)},u.renderCount+=1,u.selfTime+=h,u.totalTime+=p,u.nodeInfo.push({element:Hv(o),name:bt(o.type)??"Unknown",selfTime:er(o).selfTime})};return te.interactionListeningForRenders=r,()=>{te.interactionListeningForRenders===r&&(te.interactionListeningForRenders=null)}},md=(a,r)=>{const o={current:[...a.current],changes:new Set,changesCounts:new Map};for(const l of r.current)o.current.some(u=>u.name===l.name)||o.current.push(l);for(const l of r.changes)if(typeof l=="string"||typeof l=="number"){o.changes.add(l);const u=a.changesCounts.get(l)||0,d=r.changesCounts.get(l)||0;o.changesCounts.set(l,u+d)}return o},jv=a=>{if(!a.alternate)return!0;const r=a.alternate,o=r&&r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0,l=a.memoizedState!=null&&a.memoizedState.element!=null&&a.memoizedState.isDehydrated!==!0;return!o&&l},D_=a=>{let r;const o=new Set,l=(v,x)=>{const y=typeof v=="function"?v(r):v;if(!Object.is(y,r)){const _=r;r=x??(typeof y!="object"||y===null)?y:Object.assign({},r,y),o.forEach(S=>S(r,_))}},u=()=>r,p={setState:l,getState:u,getInitialState:()=>m,subscribe:(v,x)=>{let y,_;x?(y=v,_=x):_=v;let S=y?y(r):void 0;const E=(A,U)=>{if(y){const C=y(A),D=y(U);Object.is(S,C)||(S=C,_(C,D))}else _(A,U)};return o.add(E),()=>o.delete(E)}},m=r=a(l,u,p);return p},iy=a=>D_,es=null;iy()(a=>({state:{events:[]},actions:{addEvent:r=>{a(o=>({state:{events:[...o.state.events,r]}}))},clear:()=>{a({state:{events:[]}})}}}));var gd=200,Co=iy()((a,r)=>{const o=new Set;return{state:{events:new gt(gd)},actions:{addEvent:l=>{o.forEach(m=>m(l));const u=[...r().state.events,l],d=(m,v)=>{const x=u.find(y=>{if(y.kind!=="long-render"&&y.id!==m.id&&(m.data.startAt<=y.data.startAt&&m.data.endAt<=y.data.endAt&&m.data.endAt>=y.data.startAt||y.data.startAt<=m.data.startAt&&y.data.endAt>=m.data.startAt||m.data.startAt<=y.data.startAt&&m.data.endAt>=y.data.endAt))return!0});x&&v(x)},h=new Set;u.forEach(m=>{m.kind!=="interaction"&&d(m,()=>{h.add(m.id)})});const p=u.filter(m=>!h.has(m.id));a(()=>({state:{events:gt.fromArray(p,gd)}}))},addListener:l=>(o.add(l),()=>{o.delete(l)}),clear:()=>{a({state:{events:new gt(gd)}})}}}}),O_=()=>R1(Co.subscribe,Co.getState),ds=null,fs=null,vd=null,Wd,R_=()=>{const a=r=>{Wd=r.composedPath().map(o=>o.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",a),vd=a,()=>{vd&&document.removeEventListener("mouseover",vd)}},U_=()=>{const a=()=>{ds=performance.now(),fs=performance.timeOrigin};return document.addEventListener("visibilitychange",a),()=>{document.removeEventListener("visibilitychange",a)}},oy=150,yd=[];function H_(){let a,r;function o(){let u=null;es=null,es={},u=ry(es);const d=performance.timeOrigin,h=performance.now();return a=requestAnimationFrame(()=>{r=setTimeout(()=>{const p=performance.now(),m=p-h,v=performance.timeOrigin;yd.push(p+v);const x=yd.filter(E=>p+v-E<=1e3),y=x.length;yd=x;const _=ds!==null&&fs!==null?p+v-(fs+ds)<100:null,S=Wd!==null&&Wd;if(m>oy&&!_&&document.visibilityState==="visible"&&!S){const E=v+p,A=h+d;Co.getState().actions.addEvent({kind:"long-render",id:mn(),data:{endAt:E,startAt:A,meta:{fiberRenders:es,latency:m,fps:y}}})}ds=null,fs=null,u?.(),o()},0)}),u}const l=o();return()=>{l(),cancelAnimationFrame(a),clearTimeout(r)}}var j_=()=>{const a=k_(),r=R_(),o=U_(),l=H_(),u=async(m,v,x)=>{Co.getState().actions.addEvent({kind:"interaction",id:mn(),data:{startAt:v.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...v,kind:x.kind}}});const y=Cs.getChannelState("recording");v.detailedTiming.stopListeningForRenders(),y.length&&Cs.updateChannelState("recording",()=>new gt(Cn))},d=Uv("pointer",{onComplete:u}),h=Uv("keyboard",{onComplete:u}),p=N_(m=>{Dv.setState(gt.fromArray(Dv.getCurrentState().concat(m),ny))});return()=>{r(),o(),l(),a(),d(),p(),h()}},ko=a=>{const r=a.filter(o=>o.length>2);return r.length===0?a.at(-1)??"Unknown":r.at(-1)},wt=a=>{switch(a.kind){case"interaction":{const{renderTime:r,otherJSTime:o,framePreparation:l,frameConstruction:u,frameDraw:d}=a;return r+o+l+u+(d??0)}case"dropped-frames":return a.otherTime+a.renderTime}},L_=a=>a.wasFiberRenderMount||a.hasMemoCache?!1:a.changes.context.length===0&&a.changes.props.length===0&&a.changes.state.length===0,Do=a=>{const r=wt(a.timing);switch(a.kind){case"interaction":return r<200?"low":r<500?"needs-improvement":"high";case"dropped-frames":return r<50?"low":r<oy?"needs-improvement":"high"}},Jt=()=>ff(ly),ly=b0(null),sy=({size:a=24,className:r})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:M(["lucide lucide-chevron-right",r]),children:f("path",{d:"m9 18 6-6-6-6"})}),B_=({className:a="",size:r=24,events:o=[]})=>{const l=o.includes(!0),u=o.filter(p=>p).length,d=u>99?">99":u,h=l?Math.max(r*.6,14):Math.max(r*.4,6);return f("div",{className:"relative",children:[f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${a}`,children:[f("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),f("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),o.length>0&&u>0&&Re.options.value.showNotificationCount&&f("div",{className:M(["absolute",l?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",l?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${h}px`,height:`${h}px`,padding:l?"0.5px":"0"},children:l&&d})]})},ks=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M18 6 6 18"}),f("path",{d:"m6 6 12 12"})]}),Y_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),f("path",{d:"M16 9a5 5 0 0 1 0 6"}),f("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),X_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),f("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),f("path",{d:"m2 2 20 20"}),f("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),f("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),q_=({size:a=24,className:r})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:M(["lucide lucide-arrow-left",r]),children:[f("path",{d:"m12 19-7-7 7-7"}),f("path",{d:"M19 12H5"})]}),V_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M14 4.1 12 6"}),f("path",{d:"m5.1 8-2.9-.8"}),f("path",{d:"m6 12-1.9 2"}),f("path",{d:"M7.2 2.2 8 5.1"}),f("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),F_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M10 8h.01"}),f("path",{d:"M12 12h.01"}),f("path",{d:"M14 8h.01"}),f("path",{d:"M16 12h.01"}),f("path",{d:"M18 8h.01"}),f("path",{d:"M6 8h.01"}),f("path",{d:"M7 16h10"}),f("path",{d:"M8 12h.01"}),f("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),G_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,style:{transform:"rotate(180deg)"},children:[f("circle",{cx:"12",cy:"12",r:"10"}),f("path",{d:"m4.9 4.9 14.2 14.2"})]}),$_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:a,children:[f("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),f("polyline",{points:"16 17 22 17 22 11"})]}),cy=({children:a,triggerContent:r,wrapperProps:o})=>{const[l,u]=Te("closed"),[d,h]=Te(null),[p,m]=Te({width:window.innerWidth,height:window.innerHeight}),v=le(null),x=le(null),y=ff(Mf),_=le(!1);Se(()=>{const C=()=>{m({width:window.innerWidth,height:window.innerHeight}),S()};return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);const S=()=>{if(v.current&&y){const C=v.current.getBoundingClientRect(),D=y.getBoundingClientRect(),q=C.left+C.width/2,Q=C.top,Z=new DOMRect(q-D.left,Q-D.top,C.width,C.height);h(Z)}};Se(()=>{S()},[v.current]),Se(()=>{if(l==="opening"){const C=setTimeout(()=>u("open"),120);return()=>clearTimeout(C)}else if(l==="closing"){const C=setTimeout(()=>u("closed"),120);return()=>clearTimeout(C)}},[l]),Se(()=>{const C=setInterval(()=>{!_.current&&l!=="closed"&&u("closing")},1e3);return()=>clearInterval(C)},[l]);const E=()=>{_.current=!0,S(),u("opening")},A=()=>{_.current=!1,S(),u("closing")},U=()=>{if(!d||!y)return{top:0,left:0};const C=y.getBoundingClientRect(),D=175,q=x.current?.offsetHeight||40,Q=5,Z=d.x+C.left,P=d.y+C.top;let W=Z,de=P-4;return W-D/2<Q?W=Q+D/2:W+D/2>p.width-Q&&(W=p.width-Q-D/2),de-q<Q&&(de=P+d.height+4),{top:de-C.top,left:W-C.left}};return f(Oe,{children:[y&&d&&l!=="closed"&&B1(f("div",{ref:x,className:M(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",l==="opening"||l==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:U().top+"px",left:U().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:a}),y),f("div",{ref:v,onMouseEnter:E,onMouseLeave:A,...o,children:r})]})},Q_=({selectedEvent:a})=>{const{notificationState:r,setNotificationState:o,setRoute:l}=Jt();return f("div",{className:M(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[f("div",{className:M(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[f("button",{onClick:()=>{l({route:"render-visualization",routeMessage:null})},className:M(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="render-visualization"||r.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),f("button",{onClick:()=>{l({route:"other-visualization",routeMessage:null})},className:M(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),f("button",{onClick:()=>{l({route:"optimize",routeMessage:null})},className:M(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:f("span",{children:"Prompts"})})]}),f(cy,{triggerContent:f("button",{onClick:()=>{o(u=>{u.audioNotificationsOptions.enabled&&u.audioNotificationsOptions.audioContext.state!=="closed"&&u.audioNotificationsOptions.audioContext.close();const d=u.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!d));const h=new AudioContext;return u.audioNotificationsOptions.enabled||yf(h),d&&h.close(),{...u,audioNotificationsOptions:d?{audioContext:null,enabled:!1}:{audioContext:h,enabled:!0}}})},className:"ml-auto",children:f("div",{className:M(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[f("span",{children:"Alerts"}),r.audioNotificationsOptions.enabled?f(Y_,{size:16,className:"text-[#6E6E77]"}):f(X_,{size:16,className:"text-[#6E6E77]"})]})}),children:f(Oe,{children:"Play a chime when a slowdown is recorded"})})]})},Kr=a=>{let r="";return a.toSorted((l,u)=>u.totalTime-l.totalTime).slice(0,30).filter(l=>l.totalTime>5).forEach(l=>{let u="";u+="Component Name:",u+=l.name,u+=`
`,u+=`Rendered: ${l.count} times
`,u+=`Sum of self times for ${l.name} is ${l.totalTime.toFixed(0)}ms
`,l.changes.props.length>0&&(u+=`Changed props for all ${l.name} instances ("name:count" pairs)
`,l.changes.props.forEach(d=>{u+=`${d.name}:${d.count}x
`})),l.changes.state.length>0&&(u+=`Changed state for all ${l.name} instances ("hook index:count" pairs)
`,l.changes.state.forEach(d=>{u+=`${d.index}:${d.count}x
`})),l.changes.context.length>0&&(u+=`Changed context for all ${l.name} instances ("context display name (if exists):count" pairs)
`,l.changes.context.forEach(d=>{u+=`${d.name}:${d.count}x
`})),r+=u,r+=`
`}),r},Z_=({renderTime:a,eHandlerTimeExcludingRenders:r,toRafTime:o,commitTime:l,framePresentTime:u,formattedReactData:d})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${a.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${r.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${u===null?"":`- how long it took from dom commit for the frame to be presented: ${u.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${d}`,K_=({interactionType:a,name:r,componentPath:o,time:l,renderTime:u,eHandlerTimeExcludingRenders:d,toRafTime:h,commitTime:p,framePresentTime:m,formattedReactData:v})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${a} on the component named ${r}. This component has the following ancestors ${o}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${l.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${u.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${d.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${h.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${p.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${m===null?"":`- how long it took from dom commit for the frame to be presented: ${m.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${v}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,J_=({renderTime:a,otherTime:r,formattedReactData:o})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${a.toFixed(0)}ms
- other time: ${r}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${o}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,I_=({renderTime:a,otherTime:r,formattedReactData:o})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${a.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${r}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${o}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,W_=({renderTime:a,otherTime:r,formattedReactData:o})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${a.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${r}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${o}`,P_=({interactionType:a,name:r,time:o,renderTime:l,eHandlerTimeExcludingRenders:u,toRafTime:d,commitTime:h,framePresentTime:p,formattedReactData:m})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${a} on a component named ${r}. This means, roughly, the component that handled the ${a} event was named ${r}.

We have a set of high level, and low level data about the performance issue.

The click took ${o.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${l.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${u.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${d.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${h.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${p===null?"":`- how long it took from dom commit for the frame to be presented: ${p.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${m}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Pd=(a,r)=>vn(()=>{switch(a){case"data":switch(r.kind){case"dropped-frames":return W_({formattedReactData:Kr(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return Z_({commitTime:r.timing.frameConstruction,eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Kr(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),toRafTime:r.timing.framePreparation})}case"explanation":switch(r.kind){case"dropped-frames":return I_({formattedReactData:Kr(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return P_({commitTime:r.timing.frameConstruction,eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Kr(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,interactionType:r.type,name:ko(r.componentPath),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),time:wt(r.timing),toRafTime:r.timing.framePreparation})}case"fix":switch(r.kind){case"dropped-frames":return J_({formattedReactData:Kr(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return K_({commitTime:r.timing.frameConstruction,componentPath:r.componentPath.join(">"),eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Kr(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,interactionType:r.type,name:ko(r.componentPath),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),time:wt(r.timing),toRafTime:r.timing.framePreparation})}}}),eS=({selectedEvent:a})=>{const[r,o]=Te("fix"),[l,u]=Te(!1);return f("div",{className:M(["w-full h-full"]),children:[f("div",{className:M(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[f("div",{className:M(["bg-[#18181B] p-1 rounded-t-sm"]),children:f("div",{className:M(["flex items-center gap-x-1"]),children:[f("button",{onClick:()=>o("fix"),className:M(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),f("button",{onClick:()=>o("explanation"),className:M(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),f("button",{onClick:()=>o("data"),className:M(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),f("div",{className:M(["overflow-y-auto h-full"]),children:f("pre",{className:M(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Pd(r,a)})})]}),f("button",{onClick:async()=>{const d=Pd(r,a);await navigator.clipboard.writeText(d),u(!0),setTimeout(()=>u(!1),1e3)},className:M(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[f("span",{children:l?"Copied!":"Copy Prompt"}),f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:M(["transition-transform duration-200",l&&"scale-110"]),children:l?f("path",{d:"M20 6L9 17l-5-5"}):f(Oe,{children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},tS=(a,r)=>{switch(a.kind){case"dropped-frames":return[...r?[{name:"Total Processing Time",time:wt(a.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:a.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:a.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...r?[]:[{name:"Renders",time:a.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:r?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:a.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:wt(a.timing)-a.timing.renderTime-a.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},nS=({selectedEvent:a})=>{const[r]=Te(Us()??!1),{notificationState:o}=Jt(),[l,u]=Te(o.routeMessage?.name?[o.routeMessage.name]:[]),d=tS(a,r),h=ff(Mf);Se(()=>{if(o.routeMessage?.name){const m=h?.querySelector("#overview-scroll-container"),v=h?.querySelector(`#react-scan-overview-bar-${o.routeMessage.name}`);if(m&&v){const x=v.getBoundingClientRect().top,y=m.getBoundingClientRect().top,_=x-y;m.scrollTop=m.scrollTop+_}}},[o.route]),Se(()=>{o.route==="other-visualization"&&u(m=>o.routeMessage?.name?[o.routeMessage.name]:m)},[o.route]);const p=d.reduce((m,v)=>m+v.time,0);return f("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[f("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:f("div",{className:"flex items-center justify-between",children:[f("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),f("span",{className:"text-xs text-zinc-400",children:["Total: ",p.toFixed(0),"ms"]})]})}),f("div",{className:"divide-y divide-zinc-800",children:d.map(m=>{const v=l.includes(m.kind);return f("div",{id:`react-scan-overview-bar-${m.kind}`,children:[f("button",{onClick:()=>u(x=>x.includes(m.kind)?x.filter(y=>y!==m.kind):[...x,m.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:f("div",{className:"flex-1",children:[f("div",{className:"flex items-center justify-between mb-2",children:[f("div",{className:"flex items-center gap-0.5",children:[f("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${v?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),f("span",{className:"font-medium flex items-center text-left",children:m.name})]}),f("span",{className:" text-zinc-400",children:[m.time.toFixed(0),"ms"]})]}),f("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:f("div",{className:`h-full ${m.color} transition-all`,style:{width:`${m.time/p*100}%`}})})]})}),v&&f("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:f("p",{className:" text-zinc-400 mb-4 text-xs",children:vn(()=>{switch(a.kind){case"interaction":switch(m.kind){case"render":return f(Jr,{input:rS(a)});case"other-javascript":return f(Jr,{input:iS(a)});case"other-not-javascript":return f(Jr,{input:aS(a)})}case"dropped-frames":switch(m.kind){case"total-processing-time":return f(Jr,{input:{kind:"total-processing",data:{time:wt(a.timing)}}});case"render":return f(Oe,{children:f(Jr,{input:{kind:"render",data:{topByTime:a.groupedFiberRenders.toSorted((x,y)=>y.totalTime-x.totalTime).slice(0,3).map(x=>({name:x.name,percentage:x.totalTime/wt(a.timing)}))}}})});case"other-frame-drop":return f(Jr,{input:{kind:"other"}})}}})})})]},m.kind)})})]})},aS=a=>{const r=a.groupedFiberRenders.reduce((d,h)=>d+h.count,0),o=a.timing.renderTime,l=wt(a.timing),u=o/l*100;return r>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:r,percentageOfTotal:u,copyButton:f(Lv,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:f(Lv,{})}}},Lv=()=>{const[a,r]=Te(!1),{notificationState:o}=Jt();return f("button",{onClick:async()=>{o.selectedEvent&&(await navigator.clipboard.writeText(Pd("explanation",o.selectedEvent)),r(!0),setTimeout(()=>r(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[f("span",{children:a?"Copied!":"Copy Prompt"}),f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:M(["transition-transform duration-200",a&&"scale-110"]),children:a?f("path",{d:"M20 6L9 17l-5-5"}):f(Oe,{children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},rS=a=>a.timing.renderTime/wt(a.timing)>.3?{kind:"render",data:{topByTime:a.groupedFiberRenders.toSorted((r,o)=>o.totalTime-r.totalTime).slice(0,3).map(r=>({percentage:r.totalTime/wt(a.timing),name:r.name}))}}:{kind:"other"},iS=a=>{const r=a.groupedFiberRenders.reduce((o,l)=>o+l.count,0);return a.timing.otherJSTime/wt(a.timing)<.2?{kind:"js-explanation-base"}:a.groupedFiberRenders.find(o=>o.count>200)||a.groupedFiberRenders.reduce((o,l)=>o+l.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:r,topByCount:a.groupedFiberRenders.filter(o=>o.count>100).toSorted((o,l)=>l.count-o.count).slice(0,3)}}:a.timing.otherJSTime/wt(a.timing)>.3?a.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:r}}:{kind:"js-explanation-base"}},Jr=({input:a})=>{switch(a.kind){case"total-processing":return f("div",{className:M(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),f("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),f("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),f("p",{children:["To understand precisely what caused the slowdown while in production, use the ",f("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),f("p",{})]});case"render":return f("div",{className:M(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),f("div",{className:M(["flex flex-col"]),children:[f("p",{children:"The slowest components for this time period were:"}),a.data.topByTime.map(r=>f("div",{children:[f("strong",{children:r.name}),":"," ",(r.percentage*100).toFixed(0),"% of total"]},r.name))]}),f("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),f("p",{children:'The "Ranked" tab shows the render times of every component.'}),f("p",{children:"The render times of the same components are grouped together into one bar."}),f("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return f("div",{className:M(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),f("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",f("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",f("code",{children:"'onclick'"}),", ",f("code",{children:"'onchange'"}),") that performed expensive computation."]}),f("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),f("p",{children:["You should profile your app using the"," ",f("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return f("div",{className:M(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),a.data.renderCount===0?f(Oe,{children:[f("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),f("p",{children:["You should try to reproduce the slowdown while profiling your website with the",f("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):f(Oe,{children:[" ",f("p",{children:["There were ",f("strong",{children:a.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",f("code",{children:"useEffects"}),"."]}),f("div",{className:M(["flex flex-col"]),children:[f("p",{children:"You should try optimizing the renders of:"}),a.data.topByCount.map(r=>f("div",{children:["- ",f("strong",{children:r.name})," (rendered ",r.count,"x)"]},r.name))]}),"and then checking if the problem still exists.",f("p",{children:["You can also try profiling your app using the"," ",f("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return f("div",{className:M(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),f("p",{children:["There were only ",f("strong",{children:a.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",f("code",{children:"useEffect"}),"/",f("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),f("p",{children:["To understand precisely what caused the slowdown, use the"," ",f("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return f("div",{className:M(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),f("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),f("p",{children:["During this interaction, there were"," ",f("strong",{children:a.data.count})," renders, which was"," ",f("strong",{children:[a.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),f("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),f("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),f("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),f("p",{children:a.data.copyButton}),f("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),f("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return f("div",{className:M(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),f("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),f("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),f("p",{children:a.data.copyButton}),f("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),f("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return f("div",{className:M(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",f("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),f("p",{children:["To get a better picture of what happened, profile your app using the"," ",f("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},We=null,it=null,$e=ht({kind:"idle",current:null}),bd=null,ri=()=>{bd&&cancelAnimationFrame(bd),bd=requestAnimationFrame(()=>{if(!We||!it)return;it.clearRect(0,0,We.width,We.height);const a="hsl(271, 76%, 53%)",r=$e.value,{alpha:o,current:l}=vn(()=>{switch(r.kind){case"transition":{const u=r.current?.alpha&&r.current.alpha>0?r.current:r.transitionTo;return{alpha:u?u.alpha:0,current:u}}case"move-out":return{alpha:r.current?.alpha??0,current:r.current};case"idle":return{alpha:1,current:r.current}}});switch(l?.rects.forEach(u=>{it&&(it.shadowColor=a,it.shadowBlur=6,it.strokeStyle=a,it.lineWidth=2,it.globalAlpha=o,it.beginPath(),it.rect(u.left,u.top,u.width,u.height),it.stroke(),it.shadowBlur=0,it.beginPath(),it.rect(u.left,u.top,u.width,u.height),it.stroke())}),r.kind){case"move-out":{if(r.current.alpha===0){$e.value={kind:"idle",current:null};return}r.current.alpha<=.01&&(r.current.alpha=0),r.current.alpha=Math.max(0,r.current.alpha-.03),ri();return}case"transition":{if(r.current&&r.current.alpha>0){r.current.alpha=Math.max(0,r.current.alpha-.03),ri();return}if(r.transitionTo.alpha===1){$e.value={kind:"idle",current:r.transitionTo};return}r.transitionTo.alpha=Math.min(r.transitionTo.alpha+.03,1),ri()}case"idle":return}})},wd=null,oS=a=>{if(We=document.createElement("canvas"),it=We.getContext("2d",{alpha:!0}),!it)return null;const r=window.devicePixelRatio||1,{innerWidth:o,innerHeight:l}=window;We.style.width=`${o}px`,We.style.height=`${l}px`,We.width=o*r,We.height=l*r,We.style.position="fixed",We.style.left="0",We.style.top="0",We.style.pointerEvents="none",We.style.zIndex="2147483600",it.scale(r,r),a.appendChild(We),wd&&window.removeEventListener("resize",wd);const u=()=>{if(!We||!it)return;const d=window.devicePixelRatio||1,{innerWidth:h,innerHeight:p}=window;We.style.width=`${h}px`,We.style.height=`${p}px`,We.width=h*d,We.height=p*d,it.scale(d,d),ri()};return wd=u,window.addEventListener("resize",u),$e.subscribe(()=>{requestAnimationFrame(()=>{ri()})}),lS};function lS(){We?.parentNode&&We.parentNode.removeChild(We),We=null,it=null}var ho=()=>{const a=$e.value.current?$e.value.current:$e.value.kind==="transition"?$e.value.transitionTo:null;if(a){if($e.value.kind==="transition"){$e.value={kind:"move-out",current:$e.value.current?.alpha===0?$e.value.transitionTo:$e.value.current??$e.value.transitionTo};return}$e.value={kind:"move-out",current:{alpha:0,...a}}}},sS=({selectedEvent:a})=>{const r=wt(a.timing),o=r-a.timing.renderTime,[l]=Te(Us()),d=a.groupedFiberRenders.map(v=>({event:v,kind:"render",totalTime:l?v.count:v.totalTime})),h=vn(()=>{switch(a.kind){case"dropped-frames":return a.timing.renderTime/r<.1;case"interaction":return(a.timing.otherJSTime+a.timing.renderTime)/r<.2}});a.kind==="interaction"&&!l&&d.push({kind:"other-javascript",totalTime:a.timing.otherJSTime}),h&&!l&&(a.kind==="interaction"?d.push({kind:"other-not-javascript",totalTime:wt(a.timing)-a.timing.renderTime-a.timing.otherJSTime}):d.push({kind:"other-frame-drop",totalTime:o}));const p=le({lastCallAt:null,timer:null}),m=d.reduce((v,x)=>v+x.totalTime,0);return f("div",{className:M(["flex flex-col h-full w-full gap-y-1"]),children:[vn(()=>{if(l&&d.length===0)return f("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[f("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),f("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(d.length===0)return f("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[f("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),f("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),d.toSorted((v,x)=>x.totalTime-v.totalTime).map(v=>f(uy,{bars:d,bar:v,debouncedMouseEnter:p,totalBarTime:m,isProduction:l},v.kind==="render"?v.event.id:v.kind))]})},cS=a=>a.current&&a.current.alpha>0?"fading-out":"fading-in",uy=({bar:a,debouncedMouseEnter:r,totalBarTime:o,isProduction:l,bars:u,depth:d=0})=>{const{setNotificationState:h,setRoute:p}=Jt(),[m,v]=Te(!1),x=a.kind==="render"?a.event.parents.size===0:!0,y=u.filter(E=>E.kind==="render"&&a.kind==="render"?a.event.parents.has(E.event.name)&&E.event.name!==a.event.name:!1),_=a.kind==="render"?Array.from(a.event.parents).filter(E=>!u.some(A=>A.kind==="render"&&A.event.name===E)):[],S=()=>{a.kind==="render"?(h(E=>({...E,selectedFiber:a.event})),p({route:"render-explanation",routeMessage:null})):p({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:a.kind}})};return f("div",{className:"w-full",children:[f("div",{className:M(["w-full flex items-center relative text-xs min-w-0"]),children:[f("button",{onMouseLeave:()=>{r.current.timer&&clearTimeout(r.current.timer),ho()},onMouseEnter:async()=>{const E=async()=>{if(r.current.lastCallAt=Date.now(),a.kind!=="render"){const q=$e.value.current?$e.value.current:$e.value.kind==="transition"?$e.value.transitionTo:null;if(!q){$e.value={kind:"idle",current:null};return}$e.value={kind:"move-out",current:{alpha:0,...q}};return}const A=$e.value,U=vn(()=>{switch(A.kind){case"transition":return A.transitionTo;case"idle":case"move-out":return A.current}}),C=[];if(A.kind==="transition"){const q=cS(A);vn(()=>{switch(q){case"fading-in":{$e.value={kind:"transition",current:A.transitionTo,transitionTo:{rects:C,alpha:0,name:a.event.name}};return}case"fading-out":{$e.value={kind:"transition",current:$e.value.current?{alpha:0,...$e.value.current}:null,transitionTo:{rects:C,alpha:0,name:a.event.name}};return}}})}else $e.value={kind:"transition",transitionTo:{rects:C,alpha:0,name:a.event.name},current:U?{alpha:0,...U}:null};const D=a.event.elements.filter(q=>q instanceof Element);for await(const q of ey(D))q.forEach(({boundingClientRect:Q})=>{C.push(Q)}),ri()};if(r.current.lastCallAt&&Date.now()-r.current.lastCallAt<200){r.current.timer&&clearTimeout(r.current.timer),r.current.timer=setTimeout(()=>{E()},200);return}E()},onClick:S,className:M(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[f("div",{style:{minWidth:"fit-content",width:`${a.totalTime/o*100}%`},className:M(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",a.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",a.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",a.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",a.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),f("div",{className:M(["absolute inset-0 flex items-center px-2","min-w-0"]),children:f("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[f("span",{className:M(["truncate"]),children:vn(()=>{switch(a.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return a.event.name}})}),a.kind==="render"&&L_(a.event)&&f("div",{style:{lineHeight:"10px"},className:M(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),f("button",{onClick:()=>a.kind==="render"&&!x&&v(!m),className:M(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!x&&"hover:bg-[#0f0f0f]",a.kind==="render"&&!x?"cursor-pointer":"cursor-default"]),children:[f("div",{className:"w-[20px] flex items-center justify-center",children:a.kind==="render"&&!x&&f(sy,{className:M("transition-transform",m&&"rotate-90"),size:16})}),f("div",{style:{minWidth:x?"fit-content":l?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[a.kind==="render"&&f("span",{className:M(["text-[10px]"]),children:["x",a.event.count]}),(a.kind!=="render"||!l)&&f("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[a.totalTime<1?"<1":a.totalTime.toFixed(0),"ms"]})]})]}),d===0&&f("div",{className:M(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),m&&(y.length>0||_.length>0)&&f("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[y.toSorted((E,A)=>A.totalTime-E.totalTime).map((E,A)=>f(uy,{depth:d+1,bar:E,debouncedMouseEnter:r,totalBarTime:o,isProduction:l,bars:u},A)),_.map(E=>f("div",{className:"w-full",children:f("div",{className:"w-full flex items-center relative text-xs",children:f("div",{className:"h-full w-full flex items-center relative",children:[f("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),f("div",{className:"absolute inset-0 flex items-center px-2",children:f("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:E})})]})})},E))]})]})},uS=({selectedEvent:a,selectedFiber:r})=>{const{setRoute:o}=Jt(),[l,u]=Te(!0),[d]=Te(Us());df(()=>{const p=localStorage.getItem("react-scan-tip-shown"),m=p==="true"?!0:p==="false"?!1:null;if(m===null){u(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}m||u(!1)},[]);const h=r.changes.context.length===0&&r.changes.props.length===0&&r.changes.state.length===0;return f("div",{className:M(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[f("div",{className:M(["flex items-start gap-x-4 "]),children:[f("button",{onClick:()=>{o({route:"render-visualization",routeMessage:null})},className:M(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[f(q_,{size:14})," ",f("span",{children:"Overview"})]}),f("div",{className:M(["flex flex-col gap-y-1"]),children:[f("div",{className:M(["text-sm font-bold text-white overflow-x-hidden"]),children:f("div",{className:"flex items-center gap-x-2 truncate",children:r.name})}),f("div",{className:M(["flex gap-x-2"]),children:[!d&&f(Oe,{children:f("div",{className:M(["text-xs text-gray-400"]),children:["• Render time: ",r.totalTime.toFixed(0),"ms"]})}),f("div",{className:M(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",r.count,"x"]})]})]})]}),l&&!h&&f("div",{className:M(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[f("button",{onClick:()=>{u(!1),localStorage.setItem("react-scan-tip-shown","false")},className:M(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:f(ks,{size:12})}),f("div",{className:M(["w-1 bg-[#d36cff]"])}),f("div",{className:M(["flex-1"]),children:[f("div",{className:M(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),f("div",{className:M(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),h&&f("div",{className:M(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[f("div",{className:M(["w-1 bg-[#d36cff]"])}),f("div",{className:M(["flex-1"]),children:[f("div",{className:M(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),f("div",{className:M(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),f("div",{className:M(["flex w-full"]),children:[f("div",{className:M(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[f("div",{className:M(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),r.changes.props.length>0?r.changes.props.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:M(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[f("span",{className:M(["text-white "]),children:p.name}),f("div",{className:M([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[p.count,"/",r.count,"x"]})]},p.name)):f("div",{className:M(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),f("div",{className:M(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[f("div",{className:M([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),r.changes.state.length>0?r.changes.state.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:M(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[f("span",{className:M(["text-white "]),children:["index ",p.index]}),f("div",{className:M(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[p.count,"/",r.count,"x"]})]},p.index)):f("div",{className:M(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),f("div",{className:M(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[f("div",{className:M([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),r.changes.context.length>0?r.changes.context.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:M(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[f("span",{className:M(["text-white "]),children:p.name}),f("div",{className:M(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[p.count,"/",r.count,"x"]})]},p.name)):f("div",{className:M(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},dS=()=>{const{notificationState:a,setNotificationState:r}=Jt(),[o,l]=Te("..."),u=le(null);if(Se(()=>{const d=setInterval(()=>{l(h=>h==="..."?"":h+".")},500);return()=>clearInterval(d)},[]),!a.selectedEvent)return f("div",{ref:u,className:M(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[f("div",{className:M(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},children:f(ks,{size:18,className:"text-[#6F6F78]"})})}),f("div",{className:M(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:f("div",{className:M(["flex flex-col items-start gap-y-4"]),children:[f("div",{className:M(["flex items-center"]),children:f("span",{className:M(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",o]})}),a.events.length!==0&&f("p",{className:M(["text-xs"]),children:["Click on an item in the"," ",f("span",{className:M(["text-purple-400"]),children:"History"})," list to get started"]}),f("p",{className:M(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),f("p",{className:M(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),f("button",{onClick:()=>{if(a.audioNotificationsOptions.enabled){r(h=>(h.audioNotificationsOptions.audioContext?.state!=="closed"&&h.audioNotificationsOptions.audioContext?.close(),localStorage.setItem("react-scan-notifications-audio","false"),{...h,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem("react-scan-notifications-audio","true");const d=new AudioContext;yf(d),r(h=>({...h,audioNotificationsOptions:{enabled:!0,audioContext:d}}))},className:M(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:a.audioNotificationsOptions.enabled?f(Oe,{children:f("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):f(Oe,{children:f("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(a.route){case"render-visualization":return f(ts,{children:f(sS,{selectedEvent:a.selectedEvent})});case"render-explanation":{if(!a.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return f(ts,{children:f(uS,{selectedFiber:a.selectedFiber,selectedEvent:a.selectedEvent})})}case"other-visualization":return f(ts,{children:f("div",{className:M(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:f(nS,{selectedEvent:a.selectedEvent})})});case"optimize":return f(ts,{children:f(eS,{selectedEvent:a.selectedEvent})})}a.route},ts=({children:a})=>{const{notificationState:r}=Jt();if(!r.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return f("div",{className:M(["w-full h-full flex flex-col gap-y-2"]),children:[f("div",{className:M(["h-[50px] w-full"]),children:f(Q_,{selectedEvent:r.selectedEvent})}),f("div",{className:M(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:a})]})},fS=({selectedEvent:a})=>{const r=Do(a);switch(a.kind){case"interaction":return f("div",{className:M(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:f("div",{className:M(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[f("div",{className:M(["flex items-center gap-x-2 "]),children:[f("span",{className:M(["text-[#5a5a5a] mr-0.5"]),children:a.type==="click"?"Clicked ":"Typed in "}),f("span",{children:ko(a.componentPath)}),f("div",{className:M(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",r==="low"&&"bg-green-500/50",r==="needs-improvement"&&"bg-[#b77116]",r==="high"&&"bg-[#b94040]"]),children:[wt(a.timing).toFixed(0),"ms processing time"]})]}),f("div",{className:M(["flex items-center gap-x-2  justify-end ml-auto"]),children:f("div",{className:M(["p-2 flex justify-center items-center border-[#27272A]"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},title:"Close",children:f(ks,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return f("div",{className:M(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:f("div",{className:M(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[f("div",{className:M(["flex items-center gap-x-2 "]),children:["FPS Drop",f("div",{className:M(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",r==="low"&&"bg-green-500/50",r==="needs-improvement"&&"bg-[#b77116]",r==="high"&&"bg-[#b94040]"]),children:["dropped to ",a.fps," FPS"]})]}),f("div",{className:M(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:f("div",{className:M(["p-2 flex justify-center items-center border-[#27272A]"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},children:f(ks,{size:18,className:"text-[#6F6F78]"})})})})]})})}},hS=({flashingItemsCount:a,totalEvents:r})=>{const[o,l]=Te(!1),u=le(0),d=le(0);return Se(()=>{if(u.current>=r)return;const h=Date.now(),p=250,m=h-d.current;if(m>=p){l(!1);const v=setTimeout(()=>{u.current=r,d.current=Date.now(),l(!0),setTimeout(()=>{l(!1)},2e3)},50);return()=>clearTimeout(v)}else{const v=p-m,x=setTimeout(()=>{l(!1),setTimeout(()=>{u.current=r,d.current=Date.now(),l(!0),setTimeout(()=>{l(!1)},2e3)},50)},v);return()=>clearTimeout(x)}},[a]),o},Bv=({item:a,shouldFlash:r})=>{const[o,l]=Te(!1),u=a.events.map(Do).reduce((p,m)=>{switch(m){case"high":return"high";case"needs-improvement":return p==="high"?"high":"needs-improvement";case"low":return p}},"low"),d=a.events.reduce((p,m)=>r(m.id)?p+1:p,0),h=hS({flashingItemsCount:d,totalEvents:a.events.length});return f("div",{className:M(["flex flex-col gap-y-0.5"]),children:[f("button",{onClick:()=>l(p=>!p),className:M(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",h&&!o&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:M(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[f("span",{className:M(["min-w-fit"]),children:f(sy,{className:M(["text-[#A1A1AA] transition-transform",o?"rotate-90":""]),size:14},`chevron-${a.timestamp}`)}),f("span",{className:M(["text-xs"]),children:a.kind==="collapsed-frame-drops"?"FPS Drops":ko(a.events.at(0)?.componentPath??[])})]}),f("div",{className:M(["ml-auto min-w-fit flex justify-end items-center"]),children:f("div",{style:{lineHeight:"10px"},className:M(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",u==="low"&&"bg-green-500/60",u==="needs-improvement"&&"bg-[#b77116] text-[10px]",u==="high"&&"bg-[#b94040]"]),children:["x",a.events.length]})})]}),o&&f(pS,{children:a.events.toSorted((p,m)=>m.timestamp-p.timestamp).map(p=>f(dy,{event:p,shouldFlash:r(p.id)}))})]})},pS=({children:a})=>f("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[f("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),a]}),mS=a=>{const r=le([]),[o,l]=Te(new Set),u=le(!0);return Se(()=>{if(u.current){u.current=!1,r.current=a;return}const d=new Set(a.map(m=>m.id)),h=new Set(r.current.map(m=>m.id)),p=new Set;d.forEach(m=>{h.has(m)||p.add(m)}),p.size>0&&(l(p),setTimeout(()=>{l(new Set)},2e3)),r.current=a},[a]),d=>o.has(d)},gS=({shouldFlash:a})=>{const[r,o]=Te(a);return Se(()=>{if(a){o(!0);const l=setTimeout(()=>{o(!1)},1e3);return()=>clearTimeout(l)}},[a]),r},dy=({event:a,shouldFlash:r})=>{const{notificationState:o,setNotificationState:l}=Jt(),u=Do(a),d=gS({shouldFlash:r});switch(a.kind){case"interaction":return f("button",{onClick:()=>{l(h=>({...h,selectedEvent:a,route:"render-visualization",selectedFiber:null}))},className:M(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",a.id===o.selectedEvent?.id&&"bg-[#18181B]",d&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:M(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[f("span",{className:M(["min-w-fit text-xs"]),children:vn(()=>{switch(a.type){case"click":return f(V_,{size:14});case"keyboard":return f(F_,{size:14})}})}),f("span",{className:M(["text-xs pr-1 truncate"]),children:ko(a.componentPath)})]}),f("div",{className:M([" min-w-fit flex justify-end items-center ml-auto"]),children:f("div",{style:{lineHeight:"10px"},className:M(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",u==="low"&&"bg-green-500/50",u==="needs-improvement"&&"bg-[#b77116] text-[10px]",u==="high"&&"bg-[#b94040]"]),children:f("div",{style:{lineHeight:"10px"},className:M(["text-[10px] text-white flex items-end"]),children:[wt(a.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return f("button",{onClick:()=>{l(h=>({...h,selectedEvent:a,route:"render-visualization",selectedFiber:null}))},className:M(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",a.id===o.selectedEvent?.id&&"bg-[#18181B]",d&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:M(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[f($_,{size:14,className:"mr-1.5"})," FPS Drop"]}),f("div",{className:M([" min-w-fit flex justify-end items-center ml-auto"]),children:f("div",{style:{lineHeight:"10px"},className:M(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",u==="low"&&"bg-green-500/60",u==="needs-improvement"&&"bg-[#b77116] text-[10px]",u==="high"&&"bg-[#b94040]"]),children:[a.fps," FPS"]})})]})}},vS=a=>a.reduce((o,l)=>{const u=o.at(-1);if(!u)return[{kind:"single",event:l,timestamp:l.timestamp}];switch(u.kind){case"collapsed-keyboard":return l.kind==="interaction"&&l.type==="keyboard"&&l.componentPath.join("-")===u.events[0].componentPath.join("-")?[...o.filter(h=>h!==u),{kind:"collapsed-keyboard",events:[...u.events,l],timestamp:Math.max(...[...u.events,l].map(h=>h.timestamp))}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}];case"single":return u.event.kind==="interaction"&&u.event.type==="keyboard"&&l.kind==="interaction"&&l.type==="keyboard"&&u.event.componentPath.join("-")===l.componentPath.join("-")?[...o.filter(h=>h!==u),{kind:"collapsed-keyboard",events:[u.event,l],timestamp:Math.max(u.event.timestamp,l.timestamp)}]:u.event.kind==="dropped-frames"&&l.kind==="dropped-frames"?[...o.filter(h=>h!==u),{kind:"collapsed-frame-drops",events:[u.event,l],timestamp:Math.max(u.event.timestamp,l.timestamp)}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}];case"collapsed-frame-drops":return l.kind==="dropped-frames"?[...o.filter(h=>h!==u),{kind:"collapsed-frame-drops",events:[...u.events,l],timestamp:Math.max(...[...u.events,l].map(h=>h.timestamp))}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}]}},[]),fy=(a=150)=>{const{notificationState:r}=Jt(),[o,l]=Te(r.events);return Se(()=>{setTimeout(()=>{l(r.events)},a)},[r.events]),[o,l]},yS=()=>{const{notificationState:a,setNotificationState:r}=Jt(),o=mS(a.events),[l,u]=fy(),d=vS(l).toSorted((h,p)=>p.timestamp-h.timestamp);return f("div",{className:M(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[f("div",{className:M(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[f("span",{children:"History"}),f(cy,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:f("button",{className:M(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{Co.getState().actions.clear(),r(h=>({...h,selectedEvent:null,selectedFiber:null,route:h.route==="other-visualization"?"other-visualization":"render-visualization"})),u([])},children:f(G_,{className:M([""]),size:16})}),children:f("div",{className:M(["w-full flex justify-center"]),children:"Clear all events"})})]}),f("div",{className:M(["flex flex-col px-1 gap-y-1"]),children:[d.length===0&&f("div",{className:M(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),d.map(h=>vn(()=>{switch(h.kind){case"collapsed-keyboard":return f(Bv,{shouldFlash:o,item:h});case"single":return f(dy,{event:h.event,shouldFlash:o(h.event.id)},h.event.id);case"collapsed-frame-drops":return f(Bv,{shouldFlash:o,item:h})}}))]})]})},bS=a=>Object.values(a).map(o=>({id:mn(),totalTime:o.nodeInfo.reduce((l,u)=>l+u.selfTime,0),count:o.nodeInfo.length,name:o.nodeInfo[0].name,deletedAll:!1,parents:o.parents,hasMemoCache:o.hasMemoCache,wasFiberRenderMount:o.wasFiberRenderMount,elements:o.nodeInfo.map(l=>l.element),changes:{context:o.changes.fiberContext.current.filter(l=>o.changes.fiberContext.changesCounts.get(l.name)).map(l=>({name:String(l.name),count:o.changes.fiberContext.changesCounts.get(l.name)??0})),props:o.changes.fiberProps.current.filter(l=>o.changes.fiberProps.changesCounts.get(l.name)).map(l=>({name:String(l.name),count:o.changes.fiberProps.changesCounts.get(l.name)??0})),state:o.changes.fiberState.current.filter(l=>o.changes.fiberState.changesCounts.get(Number(l.name))).map(l=>({index:l.name,count:o.changes.fiberState.changesCounts.get(Number(l.name))??0}))}})),wS=a=>{Se(()=>{const o=setInterval(()=>{a.forEach(l=>{l.groupedFiberRenders&&l.groupedFiberRenders.forEach(u=>{if(u.deletedAll)return;if(!u.elements||u.elements.length===0){u.deletedAll=!0;return}const d=u.elements.length;u.elements=u.elements.filter(h=>h&&h.isConnected),u.elements.length===0&&d>0&&(u.deletedAll=!0)})})},5e3);return()=>{clearInterval(o)}},[a])},hy=()=>{const a=O_(),r=[];return wS(r),a.state.events.forEach(o=>{const l=o.kind==="interaction"?o.data.meta.detailedTiming.fiberRenders:o.data.meta.fiberRenders,u=bS(l),d=u.reduce((h,p)=>h+p.totalTime,0);switch(o.kind){case"interaction":{const{commitEnd:h,jsEndDetail:p,interactionStartDetail:m,rafStart:v}=o.data.meta.detailedTiming,x=Math.max(0,p-m-d),y=Math.max(o.data.meta.latency-(h-m),0);r.push({componentPath:o.data.meta.detailedTiming.componentPath,groupedFiberRenders:u,id:o.id,kind:"interaction",memory:null,timestamp:o.data.startAt,type:o.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:d,kind:"interaction",otherJSTime:x,framePreparation:v-p,frameConstruction:h-v,frameDraw:y}});return}case"long-render":{r.push({kind:"dropped-frames",id:o.id,memory:null,timing:{kind:"dropped-frames",renderTime:d,otherTime:o.data.meta.latency},groupedFiberRenders:u,timestamp:o.data.startAt,fps:o.data.meta.fps});return}}}),r},xS=1e3,_S=()=>{const{notificationState:a,setNotificationState:r}=Jt(),o=le(null),l=le(null),u=le(0),[d]=fy(),h=d.filter(p=>Do(p)==="high").length;return Se(()=>{const p=localStorage.getItem("react-scan-notifications-audio");if(p!=="false"&&p!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(p!=="false"){r(v=>v.audioNotificationsOptions.enabled?v:{...v,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Se(()=>{const{audioNotificationsOptions:p}=a;if(!p.enabled||h===0||o.current&&o.current>=h)return;l.current&&clearTimeout(l.current);const v=Date.now()-u.current,x=Math.max(0,xS-v);l.current=setTimeout(()=>{yf(p.audioContext),o.current=h,u.current=Date.now(),l.current=null},x)},[h]),Se(()=>{h===0&&(o.current=null)},[h]),Se(()=>()=>{l.current&&clearTimeout(l.current)},[]),null},SS=gf((a,r)=>{const o=hy(),[l,u]=Te({detailsExpanded:!1,events:o,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:o.toSorted((d,h)=>d.timestamp-h.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return l.events=o,f(ly.Provider,{value:{notificationState:l,setNotificationState:u,setRoute:({route:d,routeMessage:h})=>{u(p=>{const m={...p,route:d,routeMessage:h};switch(d){case"render-visualization":return ho(),{...m,selectedFiber:null};case"optimize":return ho(),{...m,selectedFiber:null};case"other-visualization":return ho(),{...m,selectedFiber:null};case"render-explanation":return ho(),m}})}},children:[f(_S,{}),f(TS,{ref:r})]})}),TS=gf((a,r)=>{const{notificationState:o}=Jt();return f("div",{ref:r,className:M(["h-full w-full flex flex-col"]),children:[o.selectedEvent&&f("div",{className:M(["w-full h-[48px] flex flex-col",o.moreInfoExpanded&&"h-[235px]",o.moreInfoExpanded&&o.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[f(fS,{selectedEvent:o.selectedEvent}),o.moreInfoExpanded&&f(CS,{})]}),f("div",{className:M(["flex ",o.selectedEvent?"h-[calc(100%-48px)]":"h-full",o.moreInfoExpanded&&"h-[calc(100%-200px)]",o.moreInfoExpanded&&o.selectedEvent?.kind==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[f("div",{className:M(["h-full min-w-[200px]"]),children:f(yS,{})}),f("div",{className:M(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:f(dS,{})})]})]})}),CS=()=>{const{notificationState:a}=Jt();if(!a.selectedEvent)throw new Error("Invariant must have selected event for more info");const r=a.selectedEvent;return f("div",{className:M(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",r.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:f("div",{className:M(["flex flex-col gap-y-4 h-full"]),children:vn(()=>{switch(r.kind){case"interaction":return f(Oe,{children:[f("div",{className:M(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:r.type==="click"?"Clicked component location":"Typed in component location"}),f("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:r.componentPath.toReversed().map((o,l)=>f(Oe,{children:[f("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:o},o),l<r.componentPath.length-1&&f("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),f("div",{className:M(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[wt(r.timing).toFixed(0),"ms"]})]}),f("div",{className:M(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-r.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return f(Oe,{children:[f("div",{className:M(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[wt(r.timing).toFixed(0),"ms"]})]}),f("div",{className:M(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-r.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},kS=wf(()=>{const a=hy(),[r,o]=Te(a);Se(()=>{const _=setTimeout(()=>{o(a)},600);return()=>{clearTimeout(_)}},[a]);const l=te.inspectState,u=l.value.kind==="inspecting",d=l.value.kind==="focused",[h,p]=Te([]),m=ot(()=>{switch(te.inspectState.value.kind){case"inspecting":{Qe.value={view:"none"},te.inspectState.value={kind:"inspect-off"};return}case"focused":{Qe.value={view:"inspector"},te.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Qe.value={view:"none"},te.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),v=ot(_=>{if(_.preventDefault(),_.stopPropagation(),!Re.instrumentation)return;const S=!Re.instrumentation.isPaused.value;Re.instrumentation.isPaused.value=S;const E=In("react-scan-options");Lt("react-scan-options",{...E,enabled:!S})},[]);So(()=>{te.inspectState.value.kind==="uninitialized"&&(te.inspectState.value={kind:"inspect-off"})});let x=null,y="#999";return u?(x=f(nt,{name:"icon-inspect"}),y="#8e61e3"):d?(x=f(nt,{name:"icon-focus"}),y="#8e61e3"):(x=f(nt,{name:"icon-inspect"}),y="#999"),df(()=>{if(Qe.value.view!=="notifications")return;const _=new Set(a.map(S=>S.id));p([..._.values()])},[a.length,Qe.value.view]),f("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[f("div",{className:"h-full flex items-center min-w-fit",children:f("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:m,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:y},children:x})}),f("div",{className:"h-full flex items-center justify-center",children:f("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(te.inspectState.value.kind!=="inspect-off"&&(te.inspectState.value={kind:"inspect-off"}),Qe.value.view){case"inspector":{te.inspectState.value={kind:"inspect-off"};const _=new Set(a.map(S=>S.id));p([..._.values()]),Qe.value={view:"notifications"};return}case"notifications":{Qe.value={view:"none"};return}case"none":{const _=new Set(a.map(S=>S.id));p([..._.values()]),Qe.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:y},children:f(B_,{events:r.filter(_=>!h.includes(_.id)).map(_=>Do(_)==="high"),size:16,className:M(["text-[#999]",Qe.value.view==="notifications"&&"text-[#8E61E3]"])})})}),f(h_,{checked:!Re.instrumentation?.isPaused.value,onChange:v,className:"place-self-center",title:"Outline Re-renders"}),Re.options.value.showFPS&&f(m_,{})]})}),ES=cr(()=>te.inspectState.value.kind==="inspecting"),NS=cr(()=>M("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",ES.value&&"opacity-0 duration-0 delay-0")),zS=cr(()=>Qe.value.view==="inspector"),AS=cr(()=>Qe.value.view==="notifications"),MS=()=>f("div",{className:M("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[f("div",{className:NS,children:[f(f_,{}),f("div",{className:M("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[f(Yv,{isOpen:zS,children:f(y2,{})}),f(Yv,{isOpen:AS,children:f(SS,{})})]})]}),f(kS,{})]}),Yv=({isOpen:a,children:r})=>f("div",{className:M("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",a.value&&"opacity-100 delay-150 pointer-events-auto"),children:f("div",{className:"absolute inset-0 flex",children:r})}),ns=(a,r,o)=>a+(r-a)*o,xd={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Ir=En&&window.devicePixelRatio||1,DS=()=>{const a=le(null),r=le(null),o=le(null),l=le(null),u=le(null),d=le(0),h=le(),p=le(new Map),m=le(!1),v=le(0),x=(w,N,R,$)=>{w.save(),w.strokeStyle="white",w.fillStyle="white",w.lineWidth=1.5;const J=$*.6,T=$*.5,H=N+($-J)/2,F=R;w.beginPath(),w.arc(H+J/2,F+T/2,J/2,Math.PI,0,!1),w.stroke();const K=$*.8,ee=$*.5,re=N+($-K)/2,he=R+T/2;w.fillRect(re,he,K,ee),w.restore()},y=(w,N,R,$)=>{if(!$)return;const J=24,T=8,F=($?.type&&bt($.type))??"Unknown";w.save(),w.font="12px system-ui, -apple-system, sans-serif";const ee=w.measureText(F).width,re=R==="locked"?14:0,he=R==="locked"?6:0,Ue=ee+T*2+re+he,we=N.left,pt=N.top-J-4;if(w.fillStyle="rgb(37, 37, 38, .75)",w.beginPath(),w.roundRect(we,pt,Ue,J,3),w.fill(),R==="locked"){const Wn=we+T,Ma=pt+(J-re)/2+2;x(w,Wn,Ma,re),l.current={x:Wn,y:Ma,width:re,height:re}}else l.current=null;w.fillStyle="white",w.textBaseline="middle";const Nn=we+T+(R==="locked"?re+he:0);w.fillText(F,Nn,pt+J/2),w.restore()},_=(w,N,R,$)=>{if(!o.current)return;const J=o.current;N.clearRect(0,0,w.width,w.height),N.strokeStyle="rgba(142, 97, 227, 0.5)",N.fillStyle="rgba(173, 97, 230, 0.10)",R==="locked"?N.setLineDash([]):N.setLineDash([4]),N.lineWidth=1,N.fillRect(J.left,J.top,J.width,J.height),N.strokeRect(J.left,J.top,J.width,J.height),y(N,J,R,$)},S=(w,N,R,$,J,T)=>{const H=Re.options.value.animationSpeed,F=xd.speeds[H]??xd.speeds.off,K=ee=>{if(ee-v.current<xd.frameInterval){d.current=requestAnimationFrame(K);return}if(v.current=ee,!o.current){cancelAnimationFrame(d.current);return}o.current={left:ns(o.current.left,R.left,F),top:ns(o.current.top,R.top,F),width:ns(o.current.width,R.width,F),height:ns(o.current.height,R.height,F)},_(w,N,$,J),Math.abs(o.current.left-R.left)>.1||Math.abs(o.current.top-R.top)>.1||Math.abs(o.current.width-R.width)>.1||Math.abs(o.current.height-R.height)>.1?d.current=requestAnimationFrame(K):(o.current=R,_(w,N,$,J),cancelAnimationFrame(d.current),N.restore())};cancelAnimationFrame(d.current),clearTimeout(h.current),d.current=requestAnimationFrame(K),h.current=setTimeout(()=>{cancelAnimationFrame(d.current),o.current=R,_(w,N,$,J),N.restore()},1e3)},E=(w,N,R,$,J)=>{if(N.save(),!o.current){o.current=R,_(w,N,$,J),N.restore();return}S(w,N,R,$,J)},A=async(w,N,R,$)=>{if(!w||!N||!R)return;const{parentCompositeFiber:J}=nr(w),T=await b2(w);!J||!T||E(N,R,T,$,J)},U=()=>{for(const w of p.current.values())w?.()},C=w=>{const N=w.getContext("2d");N&&N.clearRect(0,0,w.width,w.height),o.current=null,l.current=null,u.current=null,w.classList.remove("fade-in"),m.current=!1},D=w=>{if(!a.current||m.current)return;const N=$=>{!a.current||$.propertyName!=="opacity"||!m.current||(a.current.removeEventListener("transitionend",N),C(a.current),w?.())},R=p.current.get("fade-out");R&&(R(),p.current.delete("fade-out")),a.current.addEventListener("transitionend",N),p.current.set("fade-out",()=>{a.current?.removeEventListener("transitionend",N)}),m.current=!0,a.current.classList.remove("fade-in"),requestAnimationFrame(()=>{a.current?.classList.add("fade-out")})},q=()=>{a.current&&(m.current=!1,a.current.classList.remove("fade-out"),requestAnimationFrame(()=>{a.current?.classList.add("fade-in")}))},Q=w=>{w!==u.current&&(u.current=w,Gd.has(w.tagName)?D():q(),te.inspectState.value={kind:"inspecting",hoveredDomElement:w})},Z=()=>{!o.current||!a.current||m.current||D()},P=L0(w=>{if(te.inspectState.peek().kind!=="inspecting"||!r.current)return;r.current.style.pointerEvents="none";const R=document.elementFromPoint(w?.clientX??0,w?.clientY??0);if(r.current.style.removeProperty("pointer-events"),clearTimeout(h.current),R&&R!==a.current){const{parentCompositeFiber:$}=nr(R);if($){const J=ws($);if(J){Q(J);return}}}Z()},32),W=(w,N)=>{const R=l.current;if(!R)return!1;const $=N.getBoundingClientRect(),J=N.width/$.width,T=N.height/$.height,H=(w.clientX-$.left)*J,F=(w.clientY-$.top)*T,K=H/Ir,ee=F/Ir;return K>=R.x&&K<=R.x+R.width&&ee>=R.y&&ee<=R.y+R.height},de=w=>{w.kind==="focused"&&(te.inspectState.value={kind:"inspecting",hoveredDomElement:w.focusedDomElement})},se=w=>{const N=["react-scan-inspect-element","react-scan-power"];if(w.target instanceof HTMLElement&&N.includes(w.target.id))return;const R=u.current?.tagName;if(R&&Gd.has(R))return;w.preventDefault(),w.stopPropagation();const $=u.current??document.elementFromPoint(w.clientX,w.clientY);if(!$)return;const J=w.composedPath().at(0);if(J instanceof HTMLElement&&N.includes(J.id)){const F=new MouseEvent(w.type,w);F.__reactScanSyntheticEvent=!0,J.dispatchEvent(F);return}const{parentCompositeFiber:T}=nr($);if(!T)return;const H=ws(T);if(!H){u.current=null,te.inspectState.value={kind:"inspect-off"};return}te.inspectState.value={kind:"focused",focusedDomElement:H,fiber:T}},ge=w=>{if(w.__reactScanSyntheticEvent)return;const N=te.inspectState.peek(),R=a.current;if(!(!R||!r.current)){if(W(w,R)){w.preventDefault(),w.stopPropagation(),de(N);return}N.kind==="inspecting"&&se(w)}},ue=w=>{if(w.key!=="Escape")return;const N=te.inspectState.peek();if(a.current&&document.activeElement?.id!=="react-scan-root"&&(Qe.value={view:"none"},N.kind==="focused"||N.kind==="inspecting"))switch(w.preventDefault(),w.stopPropagation(),N.kind){case"focused":{q(),o.current=null,u.current=N.focusedDomElement,te.inspectState.value={kind:"inspecting",hoveredDomElement:N.focusedDomElement};break}case"inspecting":{D(()=>{Rs.value=!1,te.inspectState.value={kind:"inspect-off"}});break}}},I=(w,N,R)=>{p.current.get(w.kind)?.(),r.current&&w.kind!=="inspecting"&&(r.current.style.pointerEvents="none"),d.current&&cancelAnimationFrame(d.current);let $;switch(w.kind){case"inspect-off":D();return;case"inspecting":A(w.hoveredDomElement,N,R,"inspecting");break;case"focused":if(!w.focusedDomElement)return;u.current!==w.focusedDomElement&&(u.current=w.focusedDomElement),Qe.value={view:"inspector"},A(w.focusedDomElement,N,R,"locked"),$=te.lastReportTime.subscribe(()=>{if(d.current&&o.current){const{parentCompositeFiber:J}=nr(w.focusedDomElement);J&&A(w.focusedDomElement,N,R,"locked")}}),$&&p.current.set(w.kind,$);break}},ve=(w,N)=>{const R=w.getBoundingClientRect();w.width=R.width*Ir,w.height=R.height*Ir,N.scale(Ir,Ir),N.save()},Ee=()=>{const w=te.inspectState.peek(),N=a.current;if(!N)return;const R=N?.getContext("2d");R&&(cancelAnimationFrame(d.current),clearTimeout(h.current),ve(N,R),o.current=null,w.kind==="focused"&&w.focusedDomElement?A(w.focusedDomElement,N,R,"locked"):w.kind==="inspecting"&&w.hoveredDomElement&&A(w.hoveredDomElement,N,R,"inspecting"))},Me=w=>{const N=te.inspectState.peek(),R=a.current;R&&(N.kind==="inspecting"||W(w,R))&&(w.preventDefault(),w.stopPropagation(),w.stopImmediatePropagation())};return Se(()=>{const w=a.current;if(!w)return;const N=w?.getContext("2d");if(!N)return;ve(w,N);const R=te.inspectState.subscribe($=>{I($,w,N)});return window.addEventListener("scroll",Ee,{passive:!0}),window.addEventListener("resize",Ee,{passive:!0}),document.addEventListener("pointermove",P,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Me,{capture:!0}),document.addEventListener("click",ge,{capture:!0}),document.addEventListener("keydown",ue,{capture:!0}),()=>{U(),R(),window.removeEventListener("scroll",Ee),window.removeEventListener("resize",Ee),document.removeEventListener("pointermove",P,{capture:!0}),document.removeEventListener("click",ge,{capture:!0}),document.removeEventListener("pointerdown",Me,{capture:!0}),document.removeEventListener("keydown",ue,{capture:!0}),d.current&&cancelAnimationFrame(d.current),clearTimeout(h.current)}},[]),f(Oe,{children:[f("div",{ref:r,className:M("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),f("canvas",{ref:a,dir:"ltr",className:M("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},OS=class{constructor(a,r){this.width=a,this.height=r,this.maxWidth=a-me*2,this.maxHeight=r-me*2}rightEdge(a){return this.width-a-me}bottomEdge(a){return this.height-a-me}isFullWidth(a){return a>=this.maxWidth}isFullHeight(a){return a>=this.maxHeight}},Wr,Eo=()=>{const a=window.innerWidth,r=window.innerHeight;return Wr&&Wr.width===a&&Wr.height===r||(Wr=new OS(a,r)),Wr},RS=(a,r,o,l,u)=>{if(o){if(a==="top-left")return"bottom-right";if(a==="top-right")return"bottom-left";if(a==="bottom-left")return"top-right";if(a==="bottom-right")return"top-left";const[d,h]=r.split("-");if(a==="left")return`${d}-right`;if(a==="right")return`${d}-left`;if(a==="top")return`bottom-${h}`;if(a==="bottom")return`top-${h}`}if(l){if(a==="left")return`${r.split("-")[0]}-right`;if(a==="right")return`${r.split("-")[0]}-left`}if(u){if(a==="top")return`bottom-${r.split("-")[1]}`;if(a==="bottom")return`top-${r.split("-")[1]}`}return r},vo=(a,r,o)=>{const l=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth,d=window.innerHeight,h=r===ft.width,p=h?r:Math.min(r,u-me*2),m=h?o:Math.min(o,d-me*2);let v,x,y=me,_=u-p-me,S=me,E=d-m-me;switch(a){case"top-right":v=l?-y:_,x=S;break;case"bottom-right":v=l?-y:_,x=E;break;case"bottom-left":v=l?-_:y,x=E;break;case"top-left":v=l?-_:y,x=S;break;default:v=y,x=S;break}return h&&(l?v=Math.min(-y,Math.max(v,-_)):v=Math.max(y,Math.min(v,_)),x=Math.max(S,Math.min(x,E))),{x:v,y:x}},US=(a,r)=>{const[o,l]=r.split("-");return a!==o&&a!==l},HS=(a,r,o,l)=>o&&l?!0:!o&&!l?US(a,r):o?a!==r.split("-")[0]:l?a!==r.split("-")[1]:!1,as=(a,r,o)=>{const l=o?ft.width:ft.initialHeight,u=o?Eo().maxWidth:Eo().maxHeight,d=a+r;return Math.min(Math.max(l,d),u)},jS=(a,r,o,l,u)=>{const d=getComputedStyle(document.body).direction==="rtl",h=window.innerWidth-me*2,p=window.innerHeight-me*2;let m=r.width,v=r.height,x=o.x,y=o.y;if(d&&a.includes("right")){const U=-o.x+r.width-me,C=Math.min(r.width+l,U);m=Math.min(h,Math.max(ft.width,C)),x=o.x+(m-r.width)}if(d&&a.includes("left")){const U=window.innerWidth-o.x-me,C=Math.min(r.width-l,U);m=Math.min(h,Math.max(ft.width,C))}if(!d&&a.includes("right")){const U=window.innerWidth-o.x-me,C=Math.min(r.width+l,U);m=Math.min(h,Math.max(ft.width,C))}if(!d&&a.includes("left")){const U=o.x+r.width-me,C=Math.min(r.width-l,U);m=Math.min(h,Math.max(ft.width,C)),x=o.x-(m-r.width)}if(a.includes("bottom")){const U=window.innerHeight-o.y-me,C=Math.min(r.height+u,U);v=Math.min(p,Math.max(ft.initialHeight,C))}if(a.includes("top")){const U=o.y+r.height-me,C=Math.min(r.height-u,U);v=Math.min(p,Math.max(ft.initialHeight,C)),y=o.y-(v-r.height)}let _=me,S=window.innerWidth-me-m,E=me,A=window.innerHeight-me-v;return d?x=Math.min(-_,Math.max(x,-S)):x=Math.max(_,Math.min(x,S)),y=Math.max(E,Math.min(y,A)),{newSize:{width:m,height:v},newPosition:{x,y}}},LS=a=>{const r=Eo(),o={"top-left":Math.hypot(a.x,a.y),"top-right":Math.hypot(r.maxWidth-a.x,a.y),"bottom-left":Math.hypot(a.x,r.maxHeight-a.y),"bottom-right":Math.hypot(r.maxWidth-a.x,r.maxHeight-a.y)};let l="top-left";for(const u in o)o[u]<o[l]&&(l=u);return l},BS=(a,r,o,l,u=100)=>{const d=o!==void 0?a-o:0,h=l!==void 0?r-l:0,p=window.innerWidth/2,m=window.innerHeight/2,v=d>u,x=d<-u,y=h>u,_=h<-u;if(v||x){const S=r>m;return v?S?"bottom-right":"top-right":S?"bottom-left":"top-left"}if(y||_){const S=a>p;return y?S?"bottom-right":"bottom-left":S?"top-right":"top-left"}return a>p?r>m?"bottom-right":"top-right":r>m?"bottom-left":"top-left"},rs=({position:a})=>{const r=le(null),o=le(null),l=le(null),u=le(null);Se(()=>{const p=r.current;if(!p)return;const m=()=>{p.classList.remove("pointer-events-none");const y=te.inspectState.value.kind==="focused",_=Qe.value.view!=="none";(y||_)&&HS(a,ae.value.corner,ae.value.dimensions.isFullWidth,ae.value.dimensions.isFullHeight)?p.classList.remove("hidden","pointer-events-none","opacity-0"):p.classList.add("hidden","pointer-events-none","opacity-0")},v=ae.subscribe(y=>{o.current!==null&&l.current!==null&&u.current!==null&&y.dimensions.width===o.current&&y.dimensions.height===l.current&&y.corner===u.current||(m(),o.current=y.dimensions.width,l.current=y.dimensions.height,u.current=y.corner)}),x=te.inspectState.subscribe(()=>{m()});return()=>{v(),x(),o.current=null,l.current=null,u.current=null}},[]);const d=ot(p=>{p.preventDefault(),p.stopPropagation();const m=Xd.value;if(!m)return;const v=m.style,{dimensions:x}=ae.value,y=p.clientX,_=p.clientY,S=x.width,E=x.height,A=x.position;ae.value={...ae.value,dimensions:{...x,isFullWidth:!1,isFullHeight:!1,width:S,height:E,position:A}};let U=null;const C=q=>{U||(v.transition="none",U=requestAnimationFrame(()=>{const{newSize:Q,newPosition:Z}=jS(a,{width:S,height:E},A,q.clientX-y,q.clientY-_);v.transform=`translate3d(${Z.x}px, ${Z.y}px, 0)`,v.width=`${Q.width}px`,v.height=`${Q.height}px`;const P=Math.floor(Q.width-gn/2),W=ae.value.componentsTree.width,de=Math.min(P,Math.max(gn,W));ae.value={...ae.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:Q.width,height:Q.height,position:Z},componentsTree:{...ae.value.componentsTree,width:de}},U=null}))},D=()=>{U&&(cancelAnimationFrame(U),U=null),document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",D);const{dimensions:q,corner:Q}=ae.value,Z=Eo(),P=Z.isFullWidth(q.width),W=Z.isFullHeight(q.height),de=P&&W;let se=Q;(de||P||W)&&(se=LS(q.position));const ge=vo(se,q.width,q.height),ue=()=>{m.removeEventListener("transitionend",ue)};m.addEventListener("transitionend",ue),v.transform=`translate3d(${ge.x}px, ${ge.y}px, 0)`,ae.value={...ae.value,corner:se,dimensions:{isFullWidth:P,isFullHeight:W,width:q.width,height:q.height,position:ge},lastDimensions:{isFullWidth:P,isFullHeight:W,width:q.width,height:q.height,position:ge}},Lt(Jn,{corner:se,dimensions:ae.value.dimensions,lastDimensions:ae.value.lastDimensions,componentsTree:ae.value.componentsTree})};document.addEventListener("pointermove",C,{passive:!0}),document.addEventListener("pointerup",D)},[]),h=ot(p=>{p.preventDefault(),p.stopPropagation();const m=Xd.value;if(!m)return;const v=m.style,{dimensions:x,corner:y}=ae.value,_=Eo(),S=_.isFullWidth(x.width),E=_.isFullHeight(x.height),A=S&&E,U=(S||E)&&!A;let C=x.width,D=x.height;const q=RS(a,y,A,S,E);a==="left"||a==="right"?(C=S?x.width:_.maxWidth,U&&(C=S?ft.width:_.maxWidth)):(D=E?x.height:_.maxHeight,U&&(D=E?ft.initialHeight:_.maxHeight)),A&&(a==="left"||a==="right"?C=ft.width:D=ft.initialHeight);const Q=vo(q,C,D),Z={isFullWidth:_.isFullWidth(C),isFullHeight:_.isFullHeight(D),width:C,height:D,position:Q},P=Math.floor(C-ft.width/2),W=ae.value.componentsTree.width,de=Math.floor(C*.3),se=S?gn:(a==="left"||a==="right")&&!S?Math.min(P,Math.max(gn,de)):Math.min(P,Math.max(gn,W));requestAnimationFrame(()=>{ae.value={corner:q,dimensions:Z,lastDimensions:x,componentsTree:{...ae.value.componentsTree,width:se}},v.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",v.width=`${C}px`,v.height=`${D}px`,v.transform=`translate3d(${Q.x}px, ${Q.y}px, 0)`}),Lt(Jn,{corner:q,dimensions:Z,lastDimensions:x,componentsTree:{...ae.value.componentsTree,width:se}})},[]);return f("div",{ref:r,onPointerDown:d,onDblClick:h,className:M("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":a==="left","resize-right peer/right z-10":a==="right","resize-top peer/top":a==="top","resize-bottom peer/bottom":a==="bottom"}),children:f("span",{className:"resize-line-wrapper",children:f("span",{className:"resize-line",children:f(nt,{name:"icon-ellipsis",size:18,className:M("text-neutral-400",(a==="left"||a==="right")&&"rotate-90")})})})})},Xv={horizontal:{width:20,height:48},vertical:{width:48,height:20}},YS=()=>{const a=le(null),r=le(!1),o=le(0),l=le(0),u=le(!1),d=ot((_=!0)=>{if(!a.current)return;const{corner:S}=ae.value;let E,A;if(Kt.value){const se=Kt.value.orientation||"horizontal",ge=Xv[se];E=ge.width,A=ge.height}else if(r.current){const se=ae.value.lastDimensions;E=as(se.width,0,!0),A=as(se.height,0,!1),u.current&&(u.current=!1)}else E=o.current,A=l.current;let C=vo(S,E,A);if(Kt.value){const{corner:se,orientation:ge="horizontal"}=Kt.value,ue=Xv[ge];switch(se){case"top-left":C=ge==="horizontal"?{x:-1,y:me}:{x:me,y:-1};break;case"bottom-left":C=ge==="horizontal"?{x:-1,y:window.innerHeight-ue.height-me}:{x:me,y:window.innerHeight-ue.height+1};break;case"top-right":C=ge==="horizontal"?{x:window.innerWidth-ue.width+1,y:me}:{x:window.innerWidth-ue.width-me,y:-1};break;default:C=ge==="horizontal"?{x:window.innerWidth-ue.width+1,y:window.innerHeight-ue.height-me}:{x:window.innerWidth-ue.width-me,y:window.innerHeight-ue.height+1};break}}const D=E<ft.width||A<ft.initialHeight,q=_&&!D,Q=a.current,Z=Q.style;let P=null;const W=()=>{id(),Q.removeEventListener("transitionend",W),P&&(cancelAnimationFrame(P),P=null)};Q.addEventListener("transitionend",W),Z.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",P=requestAnimationFrame(()=>{Z.width=`${E}px`,Z.height=`${A}px`,Z.transform=`translate3d(${C.x}px, ${C.y}px, 0)`,P=null});const de={isFullWidth:E>=window.innerWidth-me*2,isFullHeight:A>=window.innerHeight-me*2,width:E,height:A,position:C};ae.value={corner:S,dimensions:de,lastDimensions:r?ae.value.lastDimensions:E>o.current?de:ae.value.lastDimensions,componentsTree:ae.value.componentsTree},q&&Lt(Jn,{corner:ae.value.corner,dimensions:ae.value.dimensions,lastDimensions:ae.value.lastDimensions,componentsTree:ae.value.componentsTree}),id()},[]),h=ot(_=>{if(_.preventDefault(),!a.current||_.target.closest("button"))return;const S=a.current,E=S.style,{dimensions:A}=ae.value,U=_.clientX,C=_.clientY,D=A.position.x,q=A.position.y;let Q=D,Z=q,P=null,W=!1,de=U,se=C;const ge=I=>{P||(W=!0,de=I.clientX,se=I.clientY,P=requestAnimationFrame(()=>{const ve=de-U,Ee=se-C;Q=Number(D)+ve,Z=Number(q)+Ee,E.transition="none",E.transform=`translate3d(${Q}px, ${Z}px, 0)`;const Me=Q+A.width,w=Z+A.height,N=Math.max(0,-Q),R=Math.max(0,Me-window.innerWidth),$=Math.max(0,-Z),J=Math.max(0,w-window.innerHeight),T=Math.min(A.width,N+R),H=Math.min(A.height,$+J),F=T*A.height+H*A.width-T*H,K=A.width*A.height;let ee=F>K*.35;if(!ee&&Re.options.value.showFPS){const re=Q+A.width,he=re-100;ee=re<=0||he>=window.innerWidth||Z+A.height<=0||Z>=window.innerHeight}if(ee){const re=Q+A.width/2,he=Z+A.height/2,Ue=window.innerWidth/2,we=window.innerHeight/2;let pt;re<Ue?pt=he<we?"top-left":"bottom-left":pt=he<we?"top-right":"bottom-right";let Nn;const Wn=Math.max(N,R),Ma=Math.max($,J);Nn=Wn>Ma?"horizontal":"vertical",ae.value={...ae.value,corner:pt,lastDimensions:{...A,position:vo(pt,A.width,A.height)}};const bn={corner:pt,orientation:Nn};Kt.value=bn,Lt(cs,bn),Lt(Jn,ae.value),d(!1),document.removeEventListener("pointermove",ge),document.removeEventListener("pointerup",ue),P&&(cancelAnimationFrame(P),P=null)}P=null}))},ue=()=>{if(!S)return;P&&(cancelAnimationFrame(P),P=null),document.removeEventListener("pointermove",ge),document.removeEventListener("pointerup",ue);const I=Math.abs(de-U),ve=Math.abs(se-C),Ee=Math.sqrt(I*I+ve*ve);if(!W||Ee<60)return;const Me=BS(de,se,U,C,te.inspectState.value.kind==="focused"?80:40);if(Me===ae.value.corner){E.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const R=ae.value.dimensions.position;requestAnimationFrame(()=>{E.transform=`translate3d(${R.x}px, ${R.y}px, 0)`});return}const w=vo(Me,A.width,A.height);if(Q===D&&Z===q)return;const N=()=>{E.transition="none",id(),S.removeEventListener("transitionend",N),P&&(cancelAnimationFrame(P),P=null)};S.addEventListener("transitionend",N),E.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{E.transform=`translate3d(${w.x}px, ${w.y}px, 0)`}),ae.value={corner:Me,dimensions:{isFullWidth:A.isFullWidth,isFullHeight:A.isFullHeight,width:A.width,height:A.height,position:w},lastDimensions:ae.value.lastDimensions,componentsTree:ae.value.componentsTree},Lt(Jn,{corner:Me,dimensions:ae.value.dimensions,lastDimensions:ae.value.lastDimensions,componentsTree:ae.value.componentsTree})};document.addEventListener("pointermove",ge),document.addEventListener("pointerup",ue)},[]),p=ot(_=>{if(_.preventDefault(),!a.current||!Kt.value)return;const{corner:S,orientation:E="horizontal"}=Kt.value,A=_.clientX,U=_.clientY;let C=null,D=!1;const q=50,Q=P=>{if(D||C)return;const W=P.clientX-A,de=P.clientY-U;let se=!1;if(E==="horizontal"?(S.endsWith("left")&&W>q||S.endsWith("right")&&W<-q)&&(se=!0):(S.startsWith("top")&&de>q||S.startsWith("bottom")&&de<-q)&&(se=!0),se){if(D=!0,Kt.value=null,Lt(cs,null),o.current===0&&a.current)requestAnimationFrame(()=>{if(a.current){a.current.style.width="min-content";const ge=a.current.offsetWidth;o.current=ge||300;const ue=ae.value.lastDimensions,I=as(ue.width,0,!0),ve=as(ue.height,0,!1);let Ee=P.clientX-I/2,Me=P.clientY-ve/2;Ee=Math.max(me,Math.min(Ee,window.innerWidth-I-me)),Me=Math.max(me,Math.min(Me,window.innerHeight-ve-me)),ae.value={...ae.value,dimensions:{...ae.value.dimensions,position:{x:Ee,y:Me}}},d(!0);const w=In(Zr);Qe.value=w||{view:"none"},setTimeout(()=>{if(a.current){const N=new PointerEvent("pointerdown",{clientX:P.clientX,clientY:P.clientY,pointerId:P.pointerId,bubbles:!0});a.current.dispatchEvent(N)}},100)}});else{d(!0);const ge=In(Zr);Qe.value=ge||{view:"none"}}document.removeEventListener("pointermove",Q),document.removeEventListener("pointerup",Z)}},Z=()=>{document.removeEventListener("pointermove",Q),document.removeEventListener("pointerup",Z)};document.addEventListener("pointermove",Q),document.addEventListener("pointerup",Z)},[]);Se(()=>{if(!a.current)return;cv(Zr),Kt.value?(l.current=36,o.current=0):(a.current.style.width="min-content",l.current=36,o.current=a.current.offsetWidth),a.current.style.maxWidth=`calc(100vw - ${me*2}px)`,a.current.style.maxHeight=`calc(100vh - ${me*2}px)`,d(),te.inspectState.value.kind!=="focused"&&!Kt.value&&!u.current&&(ae.value={...ae.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:o.current,height:l.current,position:ae.value.dimensions.position}}),Xd.value=a.current;const _=ae.subscribe(U=>{if(!a.current)return;const{x:C,y:D}=U.dimensions.position,{width:q,height:Q}=U.dimensions,Z=a.current;requestAnimationFrame(()=>{Z.style.transform=`translate3d(${C}px, ${D}px, 0)`,Z.style.width=`${q}px`,Z.style.height=`${Q}px`})}),S=Qe.subscribe(U=>{r.current=U.view!=="none",d(),Kt.value||(U.view!=="none"?Lt(Zr,U):cv(Zr))}),E=te.inspectState.subscribe(U=>{r.current=U.kind==="focused",d()}),A=()=>{d(!0)};return window.addEventListener("resize",A,{passive:!0}),()=>{window.removeEventListener("resize",A),S(),E(),_(),Lt(Jn,{...Tn,corner:ae.value.corner})}},[]);const[m,v]=Te(!1);Se(()=>{v(!0)},[]);const x=Kt.value;let y="";if(x){const{orientation:_="horizontal",corner:S}=x;_==="horizontal"?y=S?.endsWith("right")?"rotate-180":"":y=S?.startsWith("bottom")?"-rotate-90":"rotate-90"}return f(Oe,{children:[f(DS,{}),f(Mf.Provider,{value:a.current,children:f("div",{id:"react-scan-toolbar",dir:"ltr",ref:a,onPointerDown:x?p:h,className:M("fixed inset-0",x?(()=>{const{orientation:_="horizontal",corner:S}=x;return _==="horizontal"?S?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":S?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",x?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:x?f("button",{type:"button",onClick:()=>{Kt.value=null,Lt(cs,null),o.current===0&&a.current&&requestAnimationFrame(()=>{if(a.current){a.current.style.width="min-content";const S=a.current.offsetWidth;o.current=S||300,d(!0)}});const _=In(Zr);Qe.value=_||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:f(nt,{name:"icon-chevron-right",size:16,className:M("transition-transform",y)})}):f(Oe,{children:[f(rs,{position:"top"}),f(rs,{position:"bottom"}),f(rs,{position:"left"}),f(rs,{position:"right"}),f(MS,{})]})})})]})},Mf=b0(null),XS=()=>f("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[f("title",{children:"React Scan Icons"}),f("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),f("path",{d:"M5 3a2 2 0 0 0-2 2"}),f("path",{d:"M19 3a2 2 0 0 1 2 2"}),f("path",{d:"M5 21a2 2 0 0 1-2-2"}),f("path",{d:"M9 3h1"}),f("path",{d:"M9 21h2"}),f("path",{d:"M14 3h1"}),f("path",{d:"M3 9v1"}),f("path",{d:"M21 9v2"}),f("path",{d:"M3 14v1"})]}),f("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),f("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),f("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),f("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),f("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),f("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),f("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),f("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),f("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),f("circle",{cx:"12",cy:"12",r:"1"}),f("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),f("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("circle",{cx:"12",cy:"12",r:"1"}),f("circle",{cx:"19",cy:"12",r:"1"}),f("circle",{cx:"5",cy:"12",r:"1"})]}),f("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),f("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M20 6 9 17l-5-5"})}),f("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"m9 18 6-6-6-6"})}),f("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),f("circle",{cx:"12",cy:"12",r:"3"})]}),f("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:f("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),f("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),f("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),f("path",{d:"M9 11.2h5.7"})]}),f("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),f("path",{d:"M12 9v4"}),f("path",{d:"M12 17h.01"})]}),f("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M2 7v10"}),f("path",{d:"M6 5v14"}),f("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),f("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("circle",{cx:"11",cy:"11",r:"8"}),f("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),f("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),f("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),f("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),f("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),f("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),f("circle",{cx:"10",cy:"13",r:"8"}),f("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),f("path",{d:"M18 3 19.1 5.2"})]})]}),qS=class extends cn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){return this.state.hasError?f("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:f("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[f("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[f(nt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),f("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),f("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},VS=a=>{const r=document.createElement("div");r.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=r,a.appendChild(r),po(f(qS,{children:f(Oe,{children:[f(XS,{}),f(YS,{})]})}),r);const o=r.remove.bind(r);return r.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,r.hasChildNodes()&&(po(null,r),po(null,r)),o()},r},FS={version:"0.4.3"},Wa=null,lo=null,GS=()=>{if(Wa&&lo)return{rootContainer:Wa,shadowRoot:lo};Wa=document.createElement("div"),Wa.id="react-scan-root",lo=Wa.attachShadow({mode:"open"});const a=document.createElement("style");return a.textContent=s_,lo.appendChild(a),document.documentElement.appendChild(Wa),{rootContainer:Wa,shadowRoot:lo}},te={wasDetailsOpen:ht(!0),isInIframe:ht(En&&window.self!==window.top),inspectState:ht({kind:"uninitialized"}),monitor:ht(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:ht(0),interactionListeningForRenders:null,changesListeners:new Map},Re={instrumentation:null,componentAllowList:null,options:ht({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:te,version:FS.version};En&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Re.version);function $S(a){return a in Re.options.value}var py=a=>{const r=[],o={};for(const l in a){if(!$S(l))continue;const u=a[l];switch(l){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof u!="boolean"?r.push(`- ${l} must be a boolean. Got "${u}"`):o[l]=u;break;case"animationSpeed":["slow","fast","off"].includes(u)?o[l]=u:r.push(`- Invalid animation speed "${u}". Using default "fast"`);break;case"onCommitStart":typeof u!="function"?r.push(`- ${l} must be a function. Got "${u}"`):o.onCommitStart=u;break;case"onCommitFinish":typeof u!="function"?r.push(`- ${l} must be a function. Got "${u}"`):o.onCommitFinish=u;break;case"onRender":typeof u!="function"?r.push(`- ${l} must be a function. Got "${u}"`):o.onRender=u;break;case"onPaintStart":case"onPaintFinish":typeof u!="function"?r.push(`- ${l} must be a function. Got "${u}"`):o[l]=u;break;default:r.push(`- Unknown option "${l}"`)}}return r.length>0&&console.warn(`[React Scan] Invalid options:
${r.join(`
`)}`),o},QS=a=>{try{const r=py(a);if(Object.keys(r).length===0)return;const o="showToolbar"in r&&r.showToolbar!==void 0,l={...Re.options.value,...r},{instrumentation:u}=Re;u&&"enabled"in r&&(u.isPaused.value=r.enabled===!1),Re.options.value=l;try{const d=In("react-scan-options")?.enabled;typeof d=="boolean"&&(l.enabled=d)}catch(d){Re.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",d)}return Lt("react-scan-options",l),o&&my(!!l.showToolbar),l}catch(r){Re.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},ZS=()=>Re.options,is=null,qv,Us=()=>{if(is!==null)return is;qv??=li();for(const a of qv.renderers.values())g1(a)==="production"&&(is=!0);return is},KS=()=>{try{if(!En||!Re.runInAllEnvironments&&Us()&&!Re.options.value.dangerouslyForceRunInProduction)return;const a=In("react-scan-options");if(a){const o=py(a);Object.keys(o).length>0&&(Re.options.value={...Re.options.value,...o})}const r=ZS();l_(()=>{my(!!r.value.showToolbar)}),!te.monitor.value&&En&&setTimeout(()=>{v1()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(a){Re.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},my=a=>{window.reactScanCleanupListeners?.();const r=j_(),o=JS();window.reactScanCleanupListeners=()=>{r(),o?.()};const l=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!a){l?.remove();return}l?.remove();const{shadowRoot:u}=GS();VS(u)},JS=()=>{try{const a=document.documentElement;return oS(a)}catch(a){Re.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},IS=(a={})=>{QS(a),!(te.isInIframe.value&&!Re.options.value.allowInIframe&&!Re.runInAllEnvironments)&&(a.enabled===!1&&a.showToolbar!==!0||KS())},WS=new WeakSet,_d={exports:{}},so={},Sd={exports:{}},Td={};var Vv;function PS(){return Vv||(Vv=1,(function(a){function r(w,N){var R=w.length;w.push(N);e:for(;0<R;){var $=R-1>>>1,J=w[$];if(0<u(J,N))w[$]=N,w[R]=J,R=$;else break e}}function o(w){return w.length===0?null:w[0]}function l(w){if(w.length===0)return null;var N=w[0],R=w.pop();if(R!==N){w[0]=R;e:for(var $=0,J=w.length,T=J>>>1;$<T;){var H=2*($+1)-1,F=w[H],K=H+1,ee=w[K];if(0>u(F,R))K<J&&0>u(ee,F)?(w[$]=ee,w[K]=R,$=K):(w[$]=F,w[H]=R,$=H);else if(K<J&&0>u(ee,R))w[$]=ee,w[K]=R,$=K;else break e}}return N}function u(w,N){var R=w.sortIndex-N.sortIndex;return R!==0?R:w.id-N.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var m=[],v=[],x=1,y=null,_=3,S=!1,E=!1,A=!1,U=!1,C=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function Q(w){for(var N=o(v);N!==null;){if(N.callback===null)l(v);else if(N.startTime<=w)l(v),N.sortIndex=N.expirationTime,r(m,N);else break;N=o(v)}}function Z(w){if(A=!1,Q(w),!E)if(o(m)!==null)E=!0,P||(P=!0,I());else{var N=o(v);N!==null&&Me(Z,N.startTime-w)}}var P=!1,W=-1,de=5,se=-1;function ge(){return U?!0:!(a.unstable_now()-se<de)}function ue(){if(U=!1,P){var w=a.unstable_now();se=w;var N=!0;try{e:{E=!1,A&&(A=!1,D(W),W=-1),S=!0;var R=_;try{t:{for(Q(w),y=o(m);y!==null&&!(y.expirationTime>w&&ge());){var $=y.callback;if(typeof $=="function"){y.callback=null,_=y.priorityLevel;var J=$(y.expirationTime<=w);if(w=a.unstable_now(),typeof J=="function"){y.callback=J,Q(w),N=!0;break t}y===o(m)&&l(m),Q(w)}else l(m);y=o(m)}if(y!==null)N=!0;else{var T=o(v);T!==null&&Me(Z,T.startTime-w),N=!1}}break e}finally{y=null,_=R,S=!1}N=void 0}}finally{N?I():P=!1}}}var I;if(typeof q=="function")I=function(){q(ue)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Ee=ve.port2;ve.port1.onmessage=ue,I=function(){Ee.postMessage(null)}}else I=function(){C(ue,0)};function Me(w,N){W=C(function(){w(a.unstable_now())},N)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(w){w.callback=null},a.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<w?Math.floor(1e3/w):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(w){switch(_){case 1:case 2:case 3:var N=3;break;default:N=_}var R=_;_=N;try{return w()}finally{_=R}},a.unstable_requestPaint=function(){U=!0},a.unstable_runWithPriority=function(w,N){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var R=_;_=w;try{return N()}finally{_=R}},a.unstable_scheduleCallback=function(w,N,R){var $=a.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,w){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,w={id:x++,callback:N,priorityLevel:w,startTime:R,expirationTime:J,sortIndex:-1},R>$?(w.sortIndex=R,r(v,w),o(m)===null&&w===o(v)&&(A?(D(W),W=-1):A=!0,Me(Z,R-$))):(w.sortIndex=J,r(m,w),E||S||(E=!0,P||(P=!0,I()))),w},a.unstable_shouldYield=ge,a.unstable_wrapCallback=function(w){var N=_;return function(){var R=_;_=N;try{return w.apply(this,arguments)}finally{_=R}}}})(Td)),Td}var Fv;function eT(){return Fv||(Fv=1,Sd.exports=PS()),Sd.exports}var Cd={exports:{}},Nt={};var Gv;function tT(){if(Gv)return Nt;Gv=1;var a=vf();function r(m){var v="https://react.dev/errors/"+m;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)v+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(m,v,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:m,containerInfo:v,implementation:x}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,v){if(m==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Nt.createPortal=function(m,v){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(r(299));return d(m,v,null,x)},Nt.flushSync=function(m){var v=h.T,x=l.p;try{if(h.T=null,l.p=2,m)return m()}finally{h.T=v,l.p=x,l.d.f()}},Nt.preconnect=function(m,v){typeof m=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,l.d.C(m,v))},Nt.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},Nt.preinit=function(m,v){if(typeof m=="string"&&v&&typeof v.as=="string"){var x=v.as,y=p(x,v.crossOrigin),_=typeof v.integrity=="string"?v.integrity:void 0,S=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;x==="style"?l.d.S(m,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:S}):x==="script"&&l.d.X(m,{crossOrigin:y,integrity:_,fetchPriority:S,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Nt.preinitModule=function(m,v){if(typeof m=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var x=p(v.as,v.crossOrigin);l.d.M(m,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&l.d.M(m)},Nt.preload=function(m,v){if(typeof m=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var x=v.as,y=p(x,v.crossOrigin);l.d.L(m,x,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Nt.preloadModule=function(m,v){if(typeof m=="string")if(v){var x=p(v.as,v.crossOrigin);l.d.m(m,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else l.d.m(m)},Nt.requestFormReset=function(m){l.d.r(m)},Nt.unstable_batchedUpdates=function(m,v){return m(v)},Nt.useFormState=function(m,v,x){return h.H.useFormState(m,v,x)},Nt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nt.version="19.2.4",Nt}var $v;function nT(){if($v)return Cd.exports;$v=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Cd.exports=tT(),Cd.exports}var Qv;function aT(){if(Qv)return so;Qv=1;var a=eT(),r=vf(),o=nT();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(d(e)!==e)throw Error(l(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return m(s),e;if(c===i)return m(s),t;c=c.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=c;else{for(var g=!1,b=s.child;b;){if(b===n){g=!0,n=s,i=c;break}if(b===i){g=!0,i=s,n=c;break}b=b.sibling}if(!g){for(b=c.child;b;){if(b===n){g=!0,n=c,i=s;break}if(b===i){g=!0,i=c,n=s;break}b=b.sibling}if(!g)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),q=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function Ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case C:return"Profiler";case U:return"StrictMode";case Z:return"Suspense";case P:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case q:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Ee(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return Ee(e(t))}catch{}}return null}var Me=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},$=[],J=-1;function T(e){return{current:e}}function H(e){0>J||(e.current=$[J],$[J]=null,J--)}function F(e,t){J++,$[J]=e.current,e.current=t}var K=T(null),ee=T(null),re=T(null),he=T(null);function Ue(e,t){switch(F(re,t),F(ee,e),F(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tg(t),e=ng(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(K),F(K,e)}function we(){H(K),H(ee),H(re)}function pt(e){e.memoizedState!==null&&F(he,e);var t=K.current,n=ng(t,e.type);t!==n&&(F(ee,e),F(K,n))}function Nn(e){ee.current===e&&(H(K),H(ee)),he.current===e&&(H(he),Pi._currentValue=R)}var Wn,Ma;function bn(e){if(Wn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wn=t&&t[1]||"",Ma=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wn+e+Ma}var Hs=!1;function js(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(Y){var B=Y}Reflect.construct(e,[],G)}else{try{G.call()}catch(Y){B=Y}e.call(G.prototype)}}else{try{throw Error()}catch(Y){B=Y}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(Y){if(Y&&B&&typeof Y.stack=="string")return[Y.stack,B.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),g=c[0],b=c[1];if(g&&b){var k=g.split(`
`),L=b.split(`
`);for(s=i=0;i<k.length&&!k[i].includes("DetermineComponentFrameRoot");)i++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(i===k.length||s===L.length)for(i=k.length-1,s=L.length-1;1<=i&&0<=s&&k[i]!==L[s];)s--;for(;1<=i&&0<=s;i--,s--)if(k[i]!==L[s]){if(i!==1||s!==1)do if(i--,s--,0>s||k[i]!==L[s]){var X=`
`+k[i].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=i&&0<=s);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?bn(n):""}function vy(e,t){switch(e.tag){case 26:case 27:case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return e.child!==t&&t!==null?bn("Suspense Fallback"):bn("Suspense");case 19:return bn("SuspenseList");case 0:case 15:return js(e.type,!1);case 11:return js(e.type.render,!1);case 1:return js(e.type,!0);case 31:return bn("Activity");default:return""}}function Df(e){try{var t="",n=null;do t+=vy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ls=Object.prototype.hasOwnProperty,Bs=a.unstable_scheduleCallback,Ys=a.unstable_cancelCallback,yy=a.unstable_shouldYield,by=a.unstable_requestPaint,Bt=a.unstable_now,wy=a.unstable_getCurrentPriorityLevel,Of=a.unstable_ImmediatePriority,Rf=a.unstable_UserBlockingPriority,Oo=a.unstable_NormalPriority,xy=a.unstable_LowPriority,Uf=a.unstable_IdlePriority,_y=a.log,Sy=a.unstable_setDisableYieldValue,di=null,Yt=null;function Pn(e){if(typeof _y=="function"&&Sy(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(di,e)}catch{}}var Xt=Math.clz32?Math.clz32:ky,Ty=Math.log,Cy=Math.LN2;function ky(e){return e>>>=0,e===0?32:31-(Ty(e)/Cy|0)|0}var Ro=256,Uo=262144,Ho=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jo(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~c,i!==0?s=Da(i):(g&=b,g!==0?s=Da(g):n||(n=b&~e,n!==0&&(s=Da(n))))):(b=i&~c,b!==0?s=Da(b):g!==0?s=Da(g):n||(n=i&~e,n!==0&&(s=Da(n)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:s}function fi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ey(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hf(){var e=Ho;return Ho<<=1,(Ho&62914560)===0&&(Ho=4194304),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ny(e,t,n,i,s,c){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,k=e.expirationTimes,L=e.hiddenUpdates;for(n=g&~n;0<n;){var X=31-Xt(n),G=1<<X;b[X]=0,k[X]=-1;var B=L[X];if(B!==null)for(L[X]=null,X=0;X<B.length;X++){var Y=B[X];Y!==null&&(Y.lane&=-536870913)}n&=~G}i!==0&&jf(e,i,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(g&~t))}function jf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Xt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Lf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Xt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Bf(e,t){var n=t&-t;return n=(n&42)!==0?1:qs(n),(n&(e.suspendedLanes|t))!==0?0:n}function qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yf(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:Cg(e.type))}function Xf(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var ea=Math.random().toString(36).slice(2),xt="__reactFiber$"+ea,Mt="__reactProps$"+ea,ur="__reactContainer$"+ea,Fs="__reactEvents$"+ea,zy="__reactListeners$"+ea,Ay="__reactHandles$"+ea,qf="__reactResources$"+ea,pi="__reactMarker$"+ea;function Gs(e){delete e[xt],delete e[Mt],delete e[Fs],delete e[zy],delete e[Ay]}function dr(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ur]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cg(e);e!==null;){if(n=e[xt])return n;e=cg(e)}return t}e=n,n=e.parentNode}return null}function fr(e){if(e=e[xt]||e[ur]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function mi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function hr(e){var t=e[qf];return t||(t=e[qf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[pi]=!0}var Vf=new Set,Ff={};function Oa(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(Ff[e]=t,e=0;e<t.length;e++)Vf.add(t[e])}var My=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gf={},$f={};function Dy(e){return Ls.call($f,e)?!0:Ls.call(Gf,e)?!1:My.test(e)?$f[e]=!0:(Gf[e]=!0,!1)}function Lo(e,t,n){if(Dy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Bo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function zn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function It(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(g){n=""+g,c.call(this,g)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){if(!e._valueTracker){var t=Qf(e)?"checked":"value";e._valueTracker=Oy(e,t,""+e[t])}}function Zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Qf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ry=/[\n"\\]/g;function Wt(e){return e.replace(Ry,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Qs(e,t,n,i,s,c,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+It(t)):e.value!==""+It(t)&&(e.value=""+It(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Zs(e,g,It(t)):n!=null?Zs(e,g,It(n)):i!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+It(b):e.removeAttribute("name")}function Kf(e,t,n,i,s,c,g,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){$s(e);return}n=n!=null?""+It(n):"",t=t!=null?""+It(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),$s(e)}function Zs(e,t,n){t==="number"&&Yo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function mr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Jf(e,t,n){if(t!=null&&(t=""+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+It(n):""}function If(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(Me(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=It(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),$s(e)}function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Uy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Pf(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Wf(e,s,i)}else for(var c in t)t.hasOwnProperty(c)&&Wf(e,c,t[c])}function Ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return jy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var Js=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vr=null,yr=null;function eh(e){var t=fr(e);if(t&&(e=t.stateNode)){var n=e[Mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Qs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Mt]||null;if(!s)throw Error(l(90));Qs(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Zf(i)}break e;case"textarea":Jf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}}}var Ws=!1;function th(e,t,n){if(Ws)return e(t,n);Ws=!0;try{var i=e(t);return i}finally{if(Ws=!1,(vr!==null||yr!==null)&&(Nl(),vr&&(t=vr,e=yr,yr=vr=null,eh(t),e)))for(t=0;t<e.length;t++)eh(e[t])}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Mt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ps=!1;if(Mn)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Ps=!1}var ta=null,ec=null,qo=null;function nh(){if(qo)return qo;var e,t=ec,n=t.length,i,s="value"in ta?ta.value:ta.textContent,c=s.length;for(e=0;e<n&&t[e]===s[e];e++);var g=n-e;for(i=1;i<=g&&t[n-i]===s[c-i];i++);return qo=s.slice(e,1<i?1-i:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fo(){return!0}function ah(){return!1}function Dt(e){function t(n,i,s,c,g){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Fo:ah,this.isPropagationStopped=ah,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Dt(Ra),yi=y({},Ra,{view:0,detail:0}),Ly=Dt(yi),tc,nc,bi,$o=y({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(tc=e.screenX-bi.screenX,nc=e.screenY-bi.screenY):nc=tc=0,bi=e),tc)},movementY:function(e){return"movementY"in e?e.movementY:nc}}),rh=Dt($o),By=y({},$o,{dataTransfer:0}),Yy=Dt(By),Xy=y({},yi,{relatedTarget:0}),ac=Dt(Xy),qy=y({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Vy=Dt(qy),Fy=y({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=Dt(Fy),$y=y({},Ra,{data:0}),ih=Dt($y),Qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ky[e])?!!t[e]:!1}function rc(){return Jy}var Iy=y({},yi,{key:function(e){if(e.key){var t=Qy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wy=Dt(Iy),Py=y({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=Dt(Py),eb=y({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),tb=Dt(eb),nb=y({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),ab=Dt(nb),rb=y({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ib=Dt(rb),ob=y({},Ra,{newState:0,oldState:0}),lb=Dt(ob),sb=[9,13,27,32],ic=Mn&&"CompositionEvent"in window,wi=null;Mn&&"documentMode"in document&&(wi=document.documentMode);var cb=Mn&&"TextEvent"in window&&!wi,lh=Mn&&(!ic||wi&&8<wi&&11>=wi),sh=" ",ch=!1;function uh(e,t){switch(e){case"keyup":return sb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function ub(e,t){switch(e){case"compositionend":return dh(t);case"keypress":return t.which!==32?null:(ch=!0,sh);case"textInput":return e=t.data,e===sh&&ch?null:e;default:return null}}function db(e,t){if(br)return e==="compositionend"||!ic&&uh(e,t)?(e=nh(),qo=ec=ta=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lh&&t.locale!=="ko"?null:t.data;default:return null}}var fb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fb[e.type]:t==="textarea"}function hh(e,t,n,i){vr?yr?yr.push(i):yr=[i]:vr=i,t=Ul(t,"onChange"),0<t.length&&(n=new Go("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var xi=null,_i=null;function hb(e){Km(e,0)}function Qo(e){var t=mi(e);if(Zf(t))return e}function ph(e,t){if(e==="change")return t}var mh=!1;if(Mn){var oc;if(Mn){var lc="oninput"in document;if(!lc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),lc=typeof gh.oninput=="function"}oc=lc}else oc=!1;mh=oc&&(!document.documentMode||9<document.documentMode)}function vh(){xi&&(xi.detachEvent("onpropertychange",yh),_i=xi=null)}function yh(e){if(e.propertyName==="value"&&Qo(_i)){var t=[];hh(t,_i,e,Is(e)),th(hb,t)}}function pb(e,t,n){e==="focusin"?(vh(),xi=t,_i=n,xi.attachEvent("onpropertychange",yh)):e==="focusout"&&vh()}function mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(_i)}function gb(e,t){if(e==="click")return Qo(t)}function vb(e,t){if(e==="input"||e==="change")return Qo(t)}function yb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:yb;function Si(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Ls.call(t,s)||!qt(e[s],t[s]))return!1}return!0}function bh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wh(e,t){var n=bh(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bh(n)}}function xh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _h(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yo(e.document)}return t}function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bb=Mn&&"documentMode"in document&&11>=document.documentMode,wr=null,cc=null,Ti=null,uc=!1;function Sh(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uc||wr==null||wr!==Yo(i)||(i=wr,"selectionStart"in i&&sc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ti&&Si(Ti,i)||(Ti=i,i=Ul(cc,"onSelect"),0<i.length&&(t=new Go("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=wr)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},dc={},Th={};Mn&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Ha(e){if(dc[e])return dc[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Th)return dc[e]=t[n];return e}var Ch=Ha("animationend"),kh=Ha("animationiteration"),Eh=Ha("animationstart"),wb=Ha("transitionrun"),xb=Ha("transitionstart"),_b=Ha("transitioncancel"),Nh=Ha("transitionend"),zh=new Map,fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fc.push("scrollEnd");function un(e,t){zh.set(e,t),Oa(t,[e])}var Zo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pt=[],_r=0,hc=0;function Ko(){for(var e=_r,t=hc=_r=0;t<e;){var n=Pt[t];Pt[t++]=null;var i=Pt[t];Pt[t++]=null;var s=Pt[t];Pt[t++]=null;var c=Pt[t];if(Pt[t++]=null,i!==null&&s!==null){var g=i.pending;g===null?s.next=s:(s.next=g.next,g.next=s),i.pending=s}c!==0&&Ah(n,s,c)}}function Jo(e,t,n,i){Pt[_r++]=e,Pt[_r++]=t,Pt[_r++]=n,Pt[_r++]=i,hc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function pc(e,t,n,i){return Jo(e,t,n,i),Io(e)}function ja(e,t){return Jo(e,null,null,t),Io(e)}function Ah(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-Xt(n),e=c.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),c):null}function Io(e){if(50<$i)throw $i=0,Su=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sr={};function Sb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,i){return new Sb(e,t,n,i)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dn(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wo(e,t,n,i,s,c){var g=0;if(i=e,typeof e=="function")mc(e)&&(g=1);else if(typeof e=="string")g=Nw(e,n,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Vt(31,n,t,s),e.elementType=se,e.lanes=c,e;case A:return La(n.children,s,c,t);case U:g=8,s|=24;break;case C:return e=Vt(12,n,t,s|2),e.elementType=C,e.lanes=c,e;case Z:return e=Vt(13,n,t,s),e.elementType=Z,e.lanes=c,e;case P:return e=Vt(19,n,t,s),e.elementType=P,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:g=10;break e;case D:g=9;break e;case Q:g=11;break e;case W:g=14;break e;case de:g=16,i=null;break e}g=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=Vt(g,n,t,s),t.elementType=e,t.type=i,t.lanes=c,t}function La(e,t,n,i){return e=Vt(7,e,i,t),e.lanes=n,e}function gc(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function Dh(e){var t=Vt(18,null,null,0);return t.stateNode=e,t}function vc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Oh=new WeakMap;function en(e,t){if(typeof e=="object"&&e!==null){var n=Oh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Df(t)},Oh.set(e,t),t)}return{value:e,source:t,stack:Df(t)}}var Tr=[],Cr=0,Po=null,Ci=0,tn=[],nn=0,na=null,wn=1,xn="";function On(e,t){Tr[Cr++]=Ci,Tr[Cr++]=Po,Po=e,Ci=t}function Rh(e,t,n){tn[nn++]=wn,tn[nn++]=xn,tn[nn++]=na,na=e;var i=wn;e=xn;var s=32-Xt(i)-1;i&=~(1<<s),n+=1;var c=32-Xt(t)+s;if(30<c){var g=s-s%5;c=(i&(1<<g)-1).toString(32),i>>=g,s-=g,wn=1<<32-Xt(t)+s|n<<s|i,xn=c+e}else wn=1<<c|n<<s|i,xn=e}function yc(e){e.return!==null&&(On(e,1),Rh(e,1,0))}function bc(e){for(;e===Po;)Po=Tr[--Cr],Tr[Cr]=null,Ci=Tr[--Cr],Tr[Cr]=null;for(;e===na;)na=tn[--nn],tn[nn]=null,xn=tn[--nn],tn[nn]=null,wn=tn[--nn],tn[nn]=null}function Uh(e,t){tn[nn++]=wn,tn[nn++]=xn,tn[nn++]=na,wn=t.id,xn=t.overflow,na=e}var _t=null,Ze=null,De=!1,aa=null,an=!1,wc=Error(l(519));function ra(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ki(en(t,e)),wc}function Hh(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[xt]=e,t[Mt]=i,n){case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":case"embed":ke("load",t);break;case"video":case"audio":for(n=0;n<Zi.length;n++)ke(Zi[n],t);break;case"source":ke("error",t);break;case"img":case"image":case"link":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"input":ke("invalid",t),Kf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ke("invalid",t);break;case"textarea":ke("invalid",t),If(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Pm(t.textContent,n)?(i.popover!=null&&(ke("beforetoggle",t),ke("toggle",t)),i.onScroll!=null&&ke("scroll",t),i.onScrollEnd!=null&&ke("scrollend",t),i.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||ra(e,!0)}function jh(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 31:case 13:an=!1;return;case 27:case 3:an=!0;return;default:_t=_t.return}}function kr(e){if(e!==_t)return!1;if(!De)return jh(e),De=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lu(e.type,e.memoizedProps)),n=!n),n&&Ze&&ra(e),jh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ze=sg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ze=sg(e)}else t===27?(t=Ze,ya(e.type)?(e=Vu,Vu=null,Ze=e):Ze=t):Ze=_t?on(e.stateNode.nextSibling):null;return!0}function Ba(){Ze=_t=null,De=!1}function xc(){var e=aa;return e!==null&&(Ht===null?Ht=e:Ht.push.apply(Ht,e),aa=null),e}function ki(e){aa===null?aa=[e]:aa.push(e)}var _c=T(null),Ya=null,Rn=null;function ia(e,t,n){F(_c,t._currentValue),t._currentValue=n}function Un(e){e._currentValue=_c.current,H(_c)}function Sc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Tc(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var g=s.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=s;for(var k=0;k<t.length;k++)if(b.context===t[k]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),Sc(c.return,n,e),i||(g=null);break e}c=b.next}}else if(s.tag===18){if(g=s.return,g===null)throw Error(l(341));g.lanes|=n,c=g.alternate,c!==null&&(c.lanes|=n),Sc(g,n,e),g=null}else g=s.child;if(g!==null)g.return=s;else for(g=s;g!==null;){if(g===e){g=null;break}if(s=g.sibling,s!==null){s.return=g.return,g=s;break}g=g.return}s=g}}function Er(e,t,n,i){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var g=s.alternate;if(g===null)throw Error(l(387));if(g=g.memoizedProps,g!==null){var b=s.type;qt(s.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(s===he.current){if(g=s.alternate,g===null)throw Error(l(387));g.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Pi):e=[Pi])}s=s.return}e!==null&&Tc(t,e,n,i),t.flags|=262144}function el(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Ya=e,Rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Lh(Ya,e)}function tl(e,t){return Ya===null&&Xa(e),Lh(e,t)}function Lh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rn===null){if(e===null)throw Error(l(308));Rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rn=Rn.next=t;return n}var Tb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Cb=a.unstable_scheduleCallback,kb=a.unstable_NormalPriority,st={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cc(){return{controller:new Tb,data:new Map,refCount:0}}function Ei(e){e.refCount--,e.refCount===0&&Cb(kb,function(){e.controller.abort()})}var Ni=null,kc=0,Nr=0,zr=null;function Eb(e,t){if(Ni===null){var n=Ni=[];kc=0,Nr=zu(),zr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return kc++,t.then(Bh,Bh),t}function Bh(){if(--kc===0&&Ni!==null){zr!==null&&(zr.status="fulfilled");var e=Ni;Ni=null,Nr=0,zr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Yh=w.S;w.S=function(e,t){Sm=Bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Eb(e,t),Yh!==null&&Yh(e,t)};var qa=T(null);function Ec(){var e=qa.current;return e!==null?e:Ge.pooledCache}function nl(e,t){t===null?F(qa,qa.current):F(qa,t.pool)}function Xh(){var e=Ec();return e===null?null:{parent:st._currentValue,pool:e}}var Ar=Error(l(460)),Nc=Error(l(474)),al=Error(l(542)),rl={then:function(){}};function qh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gh(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gh(e),e}throw Fa=t,Ar}}function Va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Fa=n,Ar):n}}var Fa=null;function Fh(){if(Fa===null)throw Error(l(459));var e=Fa;return Fa=null,e}function Gh(e){if(e===Ar||e===al)throw Error(l(483))}var Mr=null,zi=0;function il(e){var t=zi;return zi+=1,Mr===null&&(Mr=[]),Vh(Mr,e,t)}function Ai(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ol(e,t){throw t.$$typeof===_?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $h(e){function t(O,z){if(e){var j=O.deletions;j===null?(O.deletions=[z],O.flags|=16):j.push(z)}}function n(O,z){if(!e)return null;for(;z!==null;)t(O,z),z=z.sibling;return null}function i(O){for(var z=new Map;O!==null;)O.key!==null?z.set(O.key,O):z.set(O.index,O),O=O.sibling;return z}function s(O,z){return O=Dn(O,z),O.index=0,O.sibling=null,O}function c(O,z,j){return O.index=j,e?(j=O.alternate,j!==null?(j=j.index,j<z?(O.flags|=67108866,z):j):(O.flags|=67108866,z)):(O.flags|=1048576,z)}function g(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function b(O,z,j,V){return z===null||z.tag!==6?(z=gc(j,O.mode,V),z.return=O,z):(z=s(z,j),z.return=O,z)}function k(O,z,j,V){var ce=j.type;return ce===A?X(O,z,j.props.children,V,j.key):z!==null&&(z.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===de&&Va(ce)===z.type)?(z=s(z,j.props),Ai(z,j),z.return=O,z):(z=Wo(j.type,j.key,j.props,null,O.mode,V),Ai(z,j),z.return=O,z)}function L(O,z,j,V){return z===null||z.tag!==4||z.stateNode.containerInfo!==j.containerInfo||z.stateNode.implementation!==j.implementation?(z=vc(j,O.mode,V),z.return=O,z):(z=s(z,j.children||[]),z.return=O,z)}function X(O,z,j,V,ce){return z===null||z.tag!==7?(z=La(j,O.mode,V,ce),z.return=O,z):(z=s(z,j),z.return=O,z)}function G(O,z,j){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=gc(""+z,O.mode,j),z.return=O,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return j=Wo(z.type,z.key,z.props,null,O.mode,j),Ai(j,z),j.return=O,j;case E:return z=vc(z,O.mode,j),z.return=O,z;case de:return z=Va(z),G(O,z,j)}if(Me(z)||I(z))return z=La(z,O.mode,j,null),z.return=O,z;if(typeof z.then=="function")return G(O,il(z),j);if(z.$$typeof===q)return G(O,tl(O,z),j);ol(O,z)}return null}function B(O,z,j,V){var ce=z!==null?z.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ce!==null?null:b(O,z,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return j.key===ce?k(O,z,j,V):null;case E:return j.key===ce?L(O,z,j,V):null;case de:return j=Va(j),B(O,z,j,V)}if(Me(j)||I(j))return ce!==null?null:X(O,z,j,V,null);if(typeof j.then=="function")return B(O,z,il(j),V);if(j.$$typeof===q)return B(O,z,tl(O,j),V);ol(O,j)}return null}function Y(O,z,j,V,ce){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return O=O.get(j)||null,b(z,O,""+V,ce);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return O=O.get(V.key===null?j:V.key)||null,k(z,O,V,ce);case E:return O=O.get(V.key===null?j:V.key)||null,L(z,O,V,ce);case de:return V=Va(V),Y(O,z,j,V,ce)}if(Me(V)||I(V))return O=O.get(j)||null,X(z,O,V,ce,null);if(typeof V.then=="function")return Y(O,z,j,il(V),ce);if(V.$$typeof===q)return Y(O,z,j,tl(z,V),ce);ol(z,V)}return null}function ne(O,z,j,V){for(var ce=null,He=null,ie=z,xe=z=0,ze=null;ie!==null&&xe<j.length;xe++){ie.index>xe?(ze=ie,ie=null):ze=ie.sibling;var je=B(O,ie,j[xe],V);if(je===null){ie===null&&(ie=ze);break}e&&ie&&je.alternate===null&&t(O,ie),z=c(je,z,xe),He===null?ce=je:He.sibling=je,He=je,ie=ze}if(xe===j.length)return n(O,ie),De&&On(O,xe),ce;if(ie===null){for(;xe<j.length;xe++)ie=G(O,j[xe],V),ie!==null&&(z=c(ie,z,xe),He===null?ce=ie:He.sibling=ie,He=ie);return De&&On(O,xe),ce}for(ie=i(ie);xe<j.length;xe++)ze=Y(ie,O,xe,j[xe],V),ze!==null&&(e&&ze.alternate!==null&&ie.delete(ze.key===null?xe:ze.key),z=c(ze,z,xe),He===null?ce=ze:He.sibling=ze,He=ze);return e&&ie.forEach(function(Sa){return t(O,Sa)}),De&&On(O,xe),ce}function fe(O,z,j,V){if(j==null)throw Error(l(151));for(var ce=null,He=null,ie=z,xe=z=0,ze=null,je=j.next();ie!==null&&!je.done;xe++,je=j.next()){ie.index>xe?(ze=ie,ie=null):ze=ie.sibling;var Sa=B(O,ie,je.value,V);if(Sa===null){ie===null&&(ie=ze);break}e&&ie&&Sa.alternate===null&&t(O,ie),z=c(Sa,z,xe),He===null?ce=Sa:He.sibling=Sa,He=Sa,ie=ze}if(je.done)return n(O,ie),De&&On(O,xe),ce;if(ie===null){for(;!je.done;xe++,je=j.next())je=G(O,je.value,V),je!==null&&(z=c(je,z,xe),He===null?ce=je:He.sibling=je,He=je);return De&&On(O,xe),ce}for(ie=i(ie);!je.done;xe++,je=j.next())je=Y(ie,O,xe,je.value,V),je!==null&&(e&&je.alternate!==null&&ie.delete(je.key===null?xe:je.key),z=c(je,z,xe),He===null?ce=je:He.sibling=je,He=je);return e&&ie.forEach(function(Bw){return t(O,Bw)}),De&&On(O,xe),ce}function Fe(O,z,j,V){if(typeof j=="object"&&j!==null&&j.type===A&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case S:e:{for(var ce=j.key;z!==null;){if(z.key===ce){if(ce=j.type,ce===A){if(z.tag===7){n(O,z.sibling),V=s(z,j.props.children),V.return=O,O=V;break e}}else if(z.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===de&&Va(ce)===z.type){n(O,z.sibling),V=s(z,j.props),Ai(V,j),V.return=O,O=V;break e}n(O,z);break}else t(O,z);z=z.sibling}j.type===A?(V=La(j.props.children,O.mode,V,j.key),V.return=O,O=V):(V=Wo(j.type,j.key,j.props,null,O.mode,V),Ai(V,j),V.return=O,O=V)}return g(O);case E:e:{for(ce=j.key;z!==null;){if(z.key===ce)if(z.tag===4&&z.stateNode.containerInfo===j.containerInfo&&z.stateNode.implementation===j.implementation){n(O,z.sibling),V=s(z,j.children||[]),V.return=O,O=V;break e}else{n(O,z);break}else t(O,z);z=z.sibling}V=vc(j,O.mode,V),V.return=O,O=V}return g(O);case de:return j=Va(j),Fe(O,z,j,V)}if(Me(j))return ne(O,z,j,V);if(I(j)){if(ce=I(j),typeof ce!="function")throw Error(l(150));return j=ce.call(j),fe(O,z,j,V)}if(typeof j.then=="function")return Fe(O,z,il(j),V);if(j.$$typeof===q)return Fe(O,z,tl(O,j),V);ol(O,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,z!==null&&z.tag===6?(n(O,z.sibling),V=s(z,j),V.return=O,O=V):(n(O,z),V=gc(j,O.mode,V),V.return=O,O=V),g(O)):n(O,z)}return function(O,z,j,V){try{zi=0;var ce=Fe(O,z,j,V);return Mr=null,ce}catch(ie){if(ie===Ar||ie===al)throw ie;var He=Vt(29,ie,null,O.mode);return He.lanes=V,He.return=O,He}}}var Ga=$h(!0),Qh=$h(!1),oa=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Io(e),Ah(e,null,n),t}return Jo(e,i,t,n),Io(e)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lf(e,n)}}function Mc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?s=c=g:c=c.next=g,n=n.next}while(n!==null);c===null?s=c=t:c=c.next=t}else s=c=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Dc=!1;function Di(){if(Dc){var e=zr;if(e!==null)throw e}}function Oi(e,t,n,i){Dc=!1;var s=e.updateQueue;oa=!1;var c=s.firstBaseUpdate,g=s.lastBaseUpdate,b=s.shared.pending;if(b!==null){s.shared.pending=null;var k=b,L=k.next;k.next=null,g===null?c=L:g.next=L,g=k;var X=e.alternate;X!==null&&(X=X.updateQueue,b=X.lastBaseUpdate,b!==g&&(b===null?X.firstBaseUpdate=L:b.next=L,X.lastBaseUpdate=k))}if(c!==null){var G=s.baseState;g=0,X=L=k=null,b=c;do{var B=b.lane&-536870913,Y=B!==b.lane;if(Y?(Ne&B)===B:(i&B)===B){B!==0&&B===Nr&&(Dc=!0),X!==null&&(X=X.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ne=e,fe=b;B=t;var Fe=n;switch(fe.tag){case 1:if(ne=fe.payload,typeof ne=="function"){G=ne.call(Fe,G,B);break e}G=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=fe.payload,B=typeof ne=="function"?ne.call(Fe,G,B):ne,B==null)break e;G=y({},G,B);break e;case 2:oa=!0}}B=b.callback,B!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=s.callbacks,Y===null?s.callbacks=[B]:Y.push(B))}else Y={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},X===null?(L=X=Y,k=G):X=X.next=Y,g|=B;if(b=b.next,b===null){if(b=s.shared.pending,b===null)break;Y=b,b=Y.next,Y.next=null,s.lastBaseUpdate=Y,s.shared.pending=null}}while(!0);X===null&&(k=G),s.baseState=k,s.firstBaseUpdate=L,s.lastBaseUpdate=X,c===null&&(s.shared.lanes=0),ha|=g,e.lanes=g,e.memoizedState=G}}function Zh(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Kh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Zh(n[e],t)}var Dr=T(null),ll=T(0);function Jh(e,t){e=Fn,F(ll,e),F(Dr,t),Fn=e|t.baseLanes}function Oc(){F(ll,Fn),F(Dr,Dr.current)}function Rc(){Fn=ll.current,H(Dr),H(ll)}var Ft=T(null),rn=null;function ca(e){var t=e.alternate;F(at,at.current&1),F(Ft,e),rn===null&&(t===null||Dr.current!==null||t.memoizedState!==null)&&(rn=e)}function Uc(e){F(at,at.current),F(Ft,e),rn===null&&(rn=e)}function Ih(e){e.tag===22?(F(at,at.current),F(Ft,e),rn===null&&(rn=e)):ua()}function ua(){F(at,at.current),F(Ft,Ft.current)}function Gt(e){H(Ft),rn===e&&(rn=null),H(at)}var at=T(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Xu(n)||qu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hn=0,be=null,qe=null,ct=null,cl=!1,Or=!1,$a=!1,ul=0,Ri=0,Rr=null,zb=0;function et(){throw Error(l(321))}function Hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function jc(e,t,n,i,s,c){return Hn=c,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Rp:Wc,$a=!1,c=n(i,s),$a=!1,Or&&(c=Ph(t,n,i,s)),Wh(e),c}function Wh(e){w.H=ji;var t=qe!==null&&qe.next!==null;if(Hn=0,ct=qe=be=null,cl=!1,Ri=0,Rr=null,t)throw Error(l(300));e===null||ut||(e=e.dependencies,e!==null&&el(e)&&(ut=!0))}function Ph(e,t,n,i){be=e;var s=0;do{if(Or&&(Rr=null),Ri=0,Or=!1,25<=s)throw Error(l(301));if(s+=1,ct=qe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}w.H=Up,c=t(n,i)}while(Or);return c}function Ab(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?Ui(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(be.flags|=1024),t}function Lc(){var e=ul!==0;return ul=0,e}function Bc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Yc(e){if(cl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cl=!1}Hn=0,ct=qe=be=null,Or=!1,Ri=ul=0,Rr=null}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?be.memoizedState=ct=e:ct=ct.next=e,ct}function rt(){if(qe===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=ct===null?be.memoizedState:ct.next;if(t!==null)ct=t,qe=e;else{if(e===null)throw be.alternate===null?Error(l(467)):Error(l(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ct===null?be.memoizedState=ct=e:ct=ct.next=e}return ct}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ui(e){var t=Ri;return Ri+=1,Rr===null&&(Rr=[]),e=Vh(Rr,e,t),t=be,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Rp:Wc),e}function fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ui(e);if(e.$$typeof===q)return St(e)}throw Error(l(438,String(e)))}function Xc(e){var t=null,n=be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=be.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=dl(),be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ge;return t.index++,n}function jn(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=rt();return qc(t,qe,e)}function qc(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var s=e.baseQueue,c=i.pending;if(c!==null){if(s!==null){var g=s.next;s.next=c.next,c.next=g}t.baseQueue=s=c,i.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var b=g=null,k=null,L=t,X=!1;do{var G=L.lane&-536870913;if(G!==L.lane?(Ne&G)===G:(Hn&G)===G){var B=L.revertLane;if(B===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),G===Nr&&(X=!0);else if((Hn&B)===B){L=L.next,B===Nr&&(X=!0);continue}else G={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},k===null?(b=k=G,g=c):k=k.next=G,be.lanes|=B,ha|=B;G=L.action,$a&&n(c,G),c=L.hasEagerState?L.eagerState:n(c,G)}else B={lane:G,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},k===null?(b=k=B,g=c):k=k.next=B,be.lanes|=G,ha|=G;L=L.next}while(L!==null&&L!==t);if(k===null?g=c:k.next=b,!qt(c,e.memoizedState)&&(ut=!0,X&&(n=zr,n!==null)))throw n;e.memoizedState=c,e.baseState=g,e.baseQueue=k,i.lastRenderedState=c}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Vc(e){var t=rt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,c=t.memoizedState;if(s!==null){n.pending=null;var g=s=s.next;do c=e(c,g.action),g=g.next;while(g!==s);qt(c,t.memoizedState)||(ut=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function ep(e,t,n){var i=be,s=rt(),c=De;if(c){if(n===void 0)throw Error(l(407));n=n()}else n=t();var g=!qt((qe||s).memoizedState,n);if(g&&(s.memoizedState=n,ut=!0),s=s.queue,$c(ap.bind(null,i,s,e),[e]),s.getSnapshot!==t||g||ct!==null&&ct.memoizedState.tag&1){if(i.flags|=2048,Ur(9,{destroy:void 0},np.bind(null,i,s,n,t),null),Ge===null)throw Error(l(349));c||(Hn&127)!==0||tp(i,t,n)}return n}function tp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t=dl(),be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function np(e,t,n,i){t.value=n,t.getSnapshot=i,rp(t)&&ip(e)}function ap(e,t,n){return n(function(){rp(t)&&ip(e)})}function rp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function ip(e){var t=ja(e,2);t!==null&&jt(t,e,2)}function Fc(e){var t=zt();if(typeof e=="function"){var n=e;if(e=n(),$a){Pn(!0);try{n()}finally{Pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function op(e,t,n,i){return e.baseState=n,qc(e,qe,typeof i=="function"?i:jn)}function Mb(e,t,n,i,s){if(gl(e))throw Error(l(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};w.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,lp(t,c)):(c.next=n.next,t.pending=n.next=c)}}function lp(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var c=w.T,g={};w.T=g;try{var b=n(s,i),k=w.S;k!==null&&k(g,b),sp(e,t,b)}catch(L){Gc(e,t,L)}finally{c!==null&&g.types!==null&&(c.types=g.types),w.T=c}}else try{c=n(s,i),sp(e,t,c)}catch(L){Gc(e,t,L)}}function sp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){cp(e,t,i)},function(i){return Gc(e,t,i)}):cp(e,t,n)}function cp(e,t,n){t.status="fulfilled",t.value=n,up(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,lp(e,n)))}function Gc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,up(t),t=t.next;while(t!==i)}e.action=null}function up(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dp(e,t){return t}function fp(e,t){if(De){var n=Ge.formState;if(n!==null){e:{var i=be;if(De){if(Ze){t:{for(var s=Ze,c=an;s.nodeType!==8;){if(!c){s=null;break t}if(s=on(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Ze=on(s.nextSibling),i=s.data==="F!";break e}}ra(i)}i=!1}i&&(t=n[0])}}return n=zt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dp,lastRenderedState:t},n.queue=i,n=Mp.bind(null,be,i),i.dispatch=n,i=Fc(!1),c=Ic.bind(null,be,!1,i.queue),i=zt(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=Mb.bind(null,be,s,c,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function hp(e){var t=rt();return pp(t,qe,e)}function pp(e,t,n){if(t=qc(e,t,dp)[0],e=hl(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ui(t)}catch(g){throw g===Ar?al:g}else i=t;t=rt();var s=t.queue,c=s.dispatch;return n!==t.memoizedState&&(be.flags|=2048,Ur(9,{destroy:void 0},Db.bind(null,s,n),null)),[i,c,e]}function Db(e,t){e.action=t}function mp(e){var t=rt(),n=qe;if(n!==null)return pp(t,n,e);rt(),t=t.memoizedState,n=rt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ur(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=be.updateQueue,t===null&&(t=dl(),be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function gp(){return rt().memoizedState}function pl(e,t,n,i){var s=zt();be.flags|=e,s.memoizedState=Ur(1|t,{destroy:void 0},n,i===void 0?null:i)}function ml(e,t,n,i){var s=rt();i=i===void 0?null:i;var c=s.memoizedState.inst;qe!==null&&i!==null&&Hc(i,qe.memoizedState.deps)?s.memoizedState=Ur(t,c,n,i):(be.flags|=e,s.memoizedState=Ur(1|t,c,n,i))}function vp(e,t){pl(8390656,8,e,t)}function $c(e,t){ml(2048,8,e,t)}function Ob(e){be.flags|=4;var t=be.updateQueue;if(t===null)t=dl(),be.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function yp(e){var t=rt().memoizedState;return Ob({ref:t,nextImpl:e}),function(){if((Le&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function bp(e,t){return ml(4,2,e,t)}function wp(e,t){return ml(4,4,e,t)}function xp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _p(e,t,n){n=n!=null?n.concat([e]):null,ml(4,4,xp.bind(null,t,e),n)}function Qc(){}function Sp(e,t){var n=rt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Hc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Tp(e,t){var n=rt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Hc(t,i[1]))return i[0];if(i=e(),$a){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[i,t],i}function Zc(e,t,n){return n===void 0||(Hn&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Cm(),be.lanes|=e,ha|=e,n)}function Cp(e,t,n,i){return qt(n,t)?n:Dr.current!==null?(e=Zc(e,n,i),qt(e,t)||(ut=!0),e):(Hn&42)===0||(Hn&1073741824)!==0&&(Ne&261930)===0?(ut=!0,e.memoizedState=n):(e=Cm(),be.lanes|=e,ha|=e,t)}function kp(e,t,n,i,s){var c=N.p;N.p=c!==0&&8>c?c:8;var g=w.T,b={};w.T=b,Ic(e,!1,t,n);try{var k=s(),L=w.S;if(L!==null&&L(b,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var X=Nb(k,i);Hi(e,t,X,Zt(e))}else Hi(e,t,i,Zt(e))}catch(G){Hi(e,t,{then:function(){},status:"rejected",reason:G},Zt())}finally{N.p=c,g!==null&&b.types!==null&&(g.types=b.types),w.T=g}}function Rb(){}function Kc(e,t,n,i){if(e.tag!==5)throw Error(l(476));var s=Ep(e).queue;kp(e,s,t,R,n===null?Rb:function(){return Np(e),n(i)})}function Ep(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Np(e){var t=Ep(e);t.next===null&&(t=e.alternate.memoizedState),Hi(e,t.next.queue,{},Zt())}function Jc(){return St(Pi)}function zp(){return rt().memoizedState}function Ap(){return rt().memoizedState}function Ub(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zt();e=la(n);var i=sa(t,e,n);i!==null&&(jt(i,t,n),Mi(i,t,n)),t={cache:Cc()},e.payload=t;return}t=t.return}}function Hb(e,t,n){var i=Zt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gl(e)?Dp(t,n):(n=pc(e,t,n,i),n!==null&&(jt(n,e,i),Op(n,t,i)))}function Mp(e,t,n){var i=Zt();Hi(e,t,n,i)}function Hi(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gl(e))Dp(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var g=t.lastRenderedState,b=c(g,n);if(s.hasEagerState=!0,s.eagerState=b,qt(b,g))return Jo(e,t,s,0),Ge===null&&Ko(),!1}catch{}if(n=pc(e,t,s,i),n!==null)return jt(n,e,i),Op(n,t,i),!0}return!1}function Ic(e,t,n,i){if(i={lane:2,revertLane:zu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(t)throw Error(l(479))}else t=pc(e,n,i,2),t!==null&&jt(t,e,2)}function gl(e){var t=e.alternate;return e===be||t!==null&&t===be}function Dp(e,t){Or=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Op(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lf(e,n)}}var ji={readContext:St,use:fl,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};ji.useEffectEvent=et;var Rp={readContext:St,use:fl,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:vp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,pl(4194308,4,xp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){pl(4,2,e,t)},useMemo:function(e,t){var n=zt();t=t===void 0?null:t;var i=e();if($a){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=zt();if(n!==void 0){var s=n(t);if($a){Pn(!0);try{n(t)}finally{Pn(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Hb.bind(null,be,e),[i.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:function(e){e=Fc(e);var t=e.queue,n=Mp.bind(null,be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Qc,useDeferredValue:function(e,t){var n=zt();return Zc(n,e,t)},useTransition:function(){var e=Fc(!1);return e=kp.bind(null,be,e.queue,!0,!1),zt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=be,s=zt();if(De){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ge===null)throw Error(l(349));(Ne&127)!==0||tp(i,t,n)}s.memoizedState=n;var c={value:n,getSnapshot:t};return s.queue=c,vp(ap.bind(null,i,c,e),[e]),i.flags|=2048,Ur(9,{destroy:void 0},np.bind(null,i,c,n,t),null),n},useId:function(){var e=zt(),t=Ge.identifierPrefix;if(De){var n=xn,i=wn;n=(i&~(1<<32-Xt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ul++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jc,useFormState:fp,useActionState:fp,useOptimistic:function(e){var t=zt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ic.bind(null,be,!0,n),n.dispatch=t,[e,t]},useMemoCache:Xc,useCacheRefresh:function(){return zt().memoizedState=Ub.bind(null,be)},useEffectEvent:function(e){var t=zt(),n={impl:e};return t.memoizedState=n,function(){if((Le&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Wc={readContext:St,use:fl,useCallback:Sp,useContext:St,useEffect:$c,useImperativeHandle:_p,useInsertionEffect:bp,useLayoutEffect:wp,useMemo:Tp,useReducer:hl,useRef:gp,useState:function(){return hl(jn)},useDebugValue:Qc,useDeferredValue:function(e,t){var n=rt();return Cp(n,qe.memoizedState,e,t)},useTransition:function(){var e=hl(jn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:Ui(e),t]},useSyncExternalStore:ep,useId:zp,useHostTransitionStatus:Jc,useFormState:hp,useActionState:hp,useOptimistic:function(e,t){var n=rt();return op(n,qe,e,t)},useMemoCache:Xc,useCacheRefresh:Ap};Wc.useEffectEvent=yp;var Up={readContext:St,use:fl,useCallback:Sp,useContext:St,useEffect:$c,useImperativeHandle:_p,useInsertionEffect:bp,useLayoutEffect:wp,useMemo:Tp,useReducer:Vc,useRef:gp,useState:function(){return Vc(jn)},useDebugValue:Qc,useDeferredValue:function(e,t){var n=rt();return qe===null?Zc(n,e,t):Cp(n,qe.memoizedState,e,t)},useTransition:function(){var e=Vc(jn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:Ui(e),t]},useSyncExternalStore:ep,useId:zp,useHostTransitionStatus:Jc,useFormState:mp,useActionState:mp,useOptimistic:function(e,t){var n=rt();return qe!==null?op(n,qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Xc,useCacheRefresh:Ap};Up.useEffectEvent=yp;function Pc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var eu={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Zt(),s=la(i);s.payload=t,n!=null&&(s.callback=n),t=sa(e,s,i),t!==null&&(jt(t,e,i),Mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Zt(),s=la(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sa(e,s,i),t!==null&&(jt(t,e,i),Mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zt(),i=la(n);i.tag=2,t!=null&&(i.callback=t),t=sa(e,i,n),t!==null&&(jt(t,e,n),Mi(t,e,n))}};function Hp(e,t,n,i,s,c,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,g):t.prototype&&t.prototype.isPureReactComponent?!Si(n,i)||!Si(s,c):!0}function jp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&eu.enqueueReplaceState(t,t.state,null)}function Qa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Lp(e){Zo(e)}function Bp(e){console.error(e)}function Yp(e){Zo(e)}function vl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Xp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function tu(e,t,n){return n=la(n),n.tag=3,n.payload={element:null},n.callback=function(){vl(e,t)},n}function qp(e){return e=la(e),e.tag=3,e}function Vp(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var c=i.value;e.payload=function(){return s(c)},e.callback=function(){Xp(t,n,i)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Xp(t,n,i),typeof s!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function jb(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Er(t,n,s,!0),n=Ft.current,n!==null){switch(n.tag){case 31:case 13:return rn===null?zl():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===rl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ku(e,i,s)),!1;case 22:return n.flags|=65536,i===rl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ku(e,i,s)),!1}throw Error(l(435,n.tag))}return ku(e,i,s),zl(),!1}if(De)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==wc&&(e=Error(l(422),{cause:i}),ki(en(e,n)))):(i!==wc&&(t=Error(l(423),{cause:i}),ki(en(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=en(i,n),s=tu(e.stateNode,i,s),Mc(e,s),tt!==4&&(tt=2)),!1;var c=Error(l(520),{cause:i});if(c=en(c,n),Gi===null?Gi=[c]:Gi.push(c),tt!==4&&(tt=2),t===null)return!0;i=en(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=tu(n.stateNode,i,e),Mc(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(pa===null||!pa.has(c))))return n.flags|=65536,s&=-s,n.lanes|=s,s=qp(s),Vp(s,e,n,i),Mc(n,s),!1}n=n.return}while(n!==null);return!1}var nu=Error(l(461)),ut=!1;function Tt(e,t,n,i){t.child=e===null?Qh(t,null,n,i):Ga(t,e.child,n,i)}function Fp(e,t,n,i,s){n=n.render;var c=t.ref;if("ref"in i){var g={};for(var b in i)b!=="ref"&&(g[b]=i[b])}else g=i;return Xa(t),i=jc(e,t,n,g,c,s),b=Lc(),e!==null&&!ut?(Bc(e,t,s),Ln(e,t,s)):(De&&b&&yc(t),t.flags|=1,Tt(e,t,i,s),t.child)}function Gp(e,t,n,i,s){if(e===null){var c=n.type;return typeof c=="function"&&!mc(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,$p(e,t,c,i,s)):(e=Wo(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!uu(e,s)){var g=c.memoizedProps;if(n=n.compare,n=n!==null?n:Si,n(g,i)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=Dn(c,i),e.ref=t.ref,e.return=t,t.child=e}function $p(e,t,n,i,s){if(e!==null){var c=e.memoizedProps;if(Si(c,i)&&e.ref===t.ref)if(ut=!1,t.pendingProps=i=c,uu(e,s))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return au(e,t,n,i,s)}function Qp(e,t,n,i){var s=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~c}else i=0,t.child=null;return Zp(e,t,c,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&nl(t,c!==null?c.cachePool:null),c!==null?Jh(t,c):Oc(),Ih(t);else return i=t.lanes=536870912,Zp(e,t,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(nl(t,c.cachePool),Jh(t,c),ua(),t.memoizedState=null):(e!==null&&nl(t,null),Oc(),ua());return Tt(e,t,s,n),t.child}function Li(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zp(e,t,n,i,s){var c=Ec();return c=c===null?null:{parent:st._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&nl(t,null),Oc(),Ih(t),e!==null&&Er(e,t,i,!0),t.childLanes=s,null}function yl(e,t){return t=wl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kp(e,t,n){return Ga(t,e.child,null,n),e=yl(t,t.pendingProps),e.flags|=2,Gt(t),t.memoizedState=null,e}function Lb(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(De){if(i.mode==="hidden")return e=yl(t,i),t.lanes=536870912,Li(null,e);if(Uc(t),(e=Ze)?(e=lg(e,an),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Dh(e),n.return=t,t.child=n,_t=t,Ze=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return yl(t,i)}var c=e.memoizedState;if(c!==null){var g=c.dehydrated;if(Uc(t),s)if(t.flags&256)t.flags&=-257,t=Kp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(ut||Er(e,t,n,!1),s=(n&e.childLanes)!==0,ut||s){if(i=Ge,i!==null&&(g=Bf(i,n),g!==0&&g!==c.retryLane))throw c.retryLane=g,ja(e,g),jt(i,e,g),nu;zl(),t=Kp(e,t,n)}else e=c.treeContext,Ze=on(g.nextSibling),_t=t,De=!0,aa=null,an=!1,e!==null&&Uh(t,e),t=yl(t,i),t.flags|=4096;return t}return e=Dn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function bl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function au(e,t,n,i,s){return Xa(t),n=jc(e,t,n,i,void 0,s),i=Lc(),e!==null&&!ut?(Bc(e,t,s),Ln(e,t,s)):(De&&i&&yc(t),t.flags|=1,Tt(e,t,n,s),t.child)}function Jp(e,t,n,i,s,c){return Xa(t),t.updateQueue=null,n=Ph(t,i,n,s),Wh(e),i=Lc(),e!==null&&!ut?(Bc(e,t,c),Ln(e,t,c)):(De&&i&&yc(t),t.flags|=1,Tt(e,t,n,c),t.child)}function Ip(e,t,n,i,s){if(Xa(t),t.stateNode===null){var c=Sr,g=n.contextType;typeof g=="object"&&g!==null&&(c=St(g)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=eu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},zc(t),g=n.contextType,c.context=typeof g=="object"&&g!==null?St(g):Sr,c.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Pc(t,n,g,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&eu.enqueueReplaceState(c,c.state,null),Oi(t,i,c,s),Di(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,k=Qa(n,b);c.props=k;var L=c.context,X=n.contextType;g=Sr,typeof X=="object"&&X!==null&&(g=St(X));var G=n.getDerivedStateFromProps;X=typeof G=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,X||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||L!==g)&&jp(t,c,i,g),oa=!1;var B=t.memoizedState;c.state=B,Oi(t,i,c,s),Di(),L=t.memoizedState,b||B!==L||oa?(typeof G=="function"&&(Pc(t,n,G,i),L=t.memoizedState),(k=oa||Hp(t,n,k,i,B,L,g))?(X||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=L),c.props=i,c.state=L,c.context=g,i=k):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Ac(e,t),g=t.memoizedProps,X=Qa(n,g),c.props=X,G=t.pendingProps,B=c.context,L=n.contextType,k=Sr,typeof L=="object"&&L!==null&&(k=St(L)),b=n.getDerivedStateFromProps,(L=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==G||B!==k)&&jp(t,c,i,k),oa=!1,B=t.memoizedState,c.state=B,Oi(t,i,c,s),Di();var Y=t.memoizedState;g!==G||B!==Y||oa||e!==null&&e.dependencies!==null&&el(e.dependencies)?(typeof b=="function"&&(Pc(t,n,b,i),Y=t.memoizedState),(X=oa||Hp(t,n,X,i,B,Y,k)||e!==null&&e.dependencies!==null&&el(e.dependencies))?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,Y,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,Y,k)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Y),c.props=i,c.state=Y,c.context=k,i=X):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,bl(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=Ga(t,e.child,null,s),t.child=Ga(t,null,n,s)):Tt(e,t,n,s),t.memoizedState=c.state,e=t.child):e=Ln(e,t,s),e}function Wp(e,t,n,i){return Ba(),t.flags|=256,Tt(e,t,n,i),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function iu(e){return{baseLanes:e,cachePool:Xh()}}function ou(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function Pp(e,t,n){var i=t.pendingProps,s=!1,c=(t.flags&128)!==0,g;if((g=c)||(g=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),g&&(s=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(s?ca(t):ua(),(e=Ze)?(e=lg(e,an),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Dh(e),n.return=t,t.child=n,_t=t,Ze=null)):e=null,e===null)throw ra(t);return qu(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,s?(ua(),s=t.mode,b=wl({mode:"hidden",children:b},s),i=La(i,s,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=iu(n),i.childLanes=ou(e,g,n),t.memoizedState=ru,Li(null,i)):(ca(t),lu(t,b))}var k=e.memoizedState;if(k!==null&&(b=k.dehydrated,b!==null)){if(c)t.flags&256?(ca(t),t.flags&=-257,t=su(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),b=i.fallback,s=t.mode,i=wl({mode:"visible",children:i.children},s),b=La(b,s,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,Ga(t,e.child,null,n),i=t.child,i.memoizedState=iu(n),i.childLanes=ou(e,g,n),t.memoizedState=ru,t=Li(null,i));else if(ca(t),qu(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var L=g.dgst;g=L,i=Error(l(419)),i.stack="",i.digest=g,ki({value:i,source:null,stack:null}),t=su(e,t,n)}else if(ut||Er(e,t,n,!1),g=(n&e.childLanes)!==0,ut||g){if(g=Ge,g!==null&&(i=Bf(g,n),i!==0&&i!==k.retryLane))throw k.retryLane=i,ja(e,i),jt(g,e,i),nu;Xu(b)||zl(),t=su(e,t,n)}else Xu(b)?(t.flags|=192,t.child=e.child,t=null):(e=k.treeContext,Ze=on(b.nextSibling),_t=t,De=!0,aa=null,an=!1,e!==null&&Uh(t,e),t=lu(t,i.children),t.flags|=4096);return t}return s?(ua(),b=i.fallback,s=t.mode,k=e.child,L=k.sibling,i=Dn(k,{mode:"hidden",children:i.children}),i.subtreeFlags=k.subtreeFlags&65011712,L!==null?b=Dn(L,b):(b=La(b,s,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,Li(null,i),i=t.child,b=e.child.memoizedState,b===null?b=iu(n):(s=b.cachePool,s!==null?(k=st._currentValue,s=s.parent!==k?{parent:k,pool:k}:s):s=Xh(),b={baseLanes:b.baseLanes|n,cachePool:s}),i.memoizedState=b,i.childLanes=ou(e,g,n),t.memoizedState=ru,Li(e.child,i)):(ca(t),n=e.child,e=n.sibling,n=Dn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function lu(e,t){return t=wl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wl(e,t){return e=Vt(22,e,null,t),e.lanes=0,e}function su(e,t,n){return Ga(t,e.child,null,n),e=lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Sc(e.return,t,n)}function cu(e,t,n,i,s,c){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:c}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=i,g.tail=n,g.tailMode=s,g.treeForkCount=c)}function tm(e,t,n){var i=t.pendingProps,s=i.revealOrder,c=i.tail;i=i.children;var g=at.current,b=(g&2)!==0;if(b?(g=g&1|2,t.flags|=128):g&=1,F(at,g),Tt(e,t,i,n),i=De?Ci:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,n,t);else if(e.tag===19)em(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),cu(t,!1,s,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&sl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}cu(t,!0,n,null,c,i);break;case"together":cu(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Er(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&el(e)))}function Bb(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),ia(t,st,e.memoizedState.cache),Ba();break;case 27:case 5:pt(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Uc(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ca(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Pp(e,t,n):(ca(t),e=Ln(e,t,n),e!==null?e.sibling:null);ca(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Er(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return tm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(at,at.current),i)break;return null;case 22:return t.lanes=0,Qp(e,t,n,t.pendingProps);case 24:ia(t,st,e.memoizedState.cache)}return Ln(e,t,n)}function nm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!uu(e,n)&&(t.flags&128)===0)return ut=!1,Bb(e,t,n);ut=(e.flags&131072)!==0}else ut=!1,De&&(t.flags&1048576)!==0&&Rh(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")mc(e)?(i=Qa(e,i),t.tag=1,t=Ip(null,t,e,i,n)):(t.tag=0,t=au(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Q){t.tag=11,t=Fp(null,t,e,i,n);break e}else if(s===W){t.tag=14,t=Gp(null,t,e,i,n);break e}}throw t=Ee(e)||e,Error(l(306,t,""))}}return t;case 0:return au(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Qa(i,t.pendingProps),Ip(e,t,i,s,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var c=t.memoizedState;s=c.element,Ac(e,t),Oi(t,i,null,n);var g=t.memoizedState;if(i=g.cache,ia(t,st,i),i!==c.cache&&Tc(t,[st],n,!0),Di(),i=g.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Wp(e,t,i,n);break e}else if(i!==s){s=en(Error(l(424)),t),ki(s),t=Wp(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=on(e.firstChild),_t=t,De=!0,aa=null,an=!0,n=Qh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ba(),i===s){t=Ln(e,t,n);break e}Tt(e,t,i,n)}t=t.child}return t;case 26:return bl(e,t),e===null?(n=hg(t.type,null,t.pendingProps,null))?t.memoizedState=n:De||(n=t.type,e=t.pendingProps,i=Hl(re.current).createElement(n),i[xt]=t,i[Mt]=e,Ct(i,n,e),vt(i),t.stateNode=i):t.memoizedState=hg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pt(t),e===null&&De&&(i=t.stateNode=ug(t.type,t.pendingProps,re.current),_t=t,an=!0,s=Ze,ya(t.type)?(Vu=s,Ze=on(i.firstChild)):Ze=s),Tt(e,t,t.pendingProps.children,n),bl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&De&&((s=i=Ze)&&(i=mw(i,t.type,t.pendingProps,an),i!==null?(t.stateNode=i,_t=t,Ze=on(i.firstChild),an=!1,s=!0):s=!1),s||ra(t)),pt(t),s=t.type,c=t.pendingProps,g=e!==null?e.memoizedProps:null,i=c.children,Lu(s,c)?i=null:g!==null&&Lu(s,g)&&(t.flags|=32),t.memoizedState!==null&&(s=jc(e,t,Ab,null,null,n),Pi._currentValue=s),bl(e,t),Tt(e,t,i,n),t.child;case 6:return e===null&&De&&((e=n=Ze)&&(n=gw(n,t.pendingProps,an),n!==null?(t.stateNode=n,_t=t,Ze=null,e=!0):e=!1),e||ra(t)),null;case 13:return Pp(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ga(t,null,i,n):Tt(e,t,i,n),t.child;case 11:return Fp(e,t,t.type,t.pendingProps,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ia(t,t.type,i.value),Tt(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Xa(t),s=St(s),i=i(s),t.flags|=1,Tt(e,t,i,n),t.child;case 14:return Gp(e,t,t.type,t.pendingProps,n);case 15:return $p(e,t,t.type,t.pendingProps,n);case 19:return tm(e,t,n);case 31:return Lb(e,t,n);case 22:return Qp(e,t,n,t.pendingProps);case 24:return Xa(t),i=St(st),e===null?(s=Ec(),s===null&&(s=Ge,c=Cc(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=n),s=c),t.memoizedState={parent:i,cache:s},zc(t),ia(t,st,s)):((e.lanes&n)!==0&&(Ac(e,t),Oi(t,null,null,n),Di()),s=e.memoizedState,c=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ia(t,st,i)):(i=c.cache,ia(t,st,i),i!==s.cache&&Tc(t,[st],n,!0))),Tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Bn(e){e.flags|=4}function du(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(zm())e.flags|=8192;else throw Fa=rl,Nc}else e.flags&=-16777217}function am(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yg(t))if(zm())e.flags|=8192;else throw Fa=rl,Nc}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hf():536870912,e.lanes|=t,Br|=t)}function Bi(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Yb(e,t,n){var i=t.pendingProps;switch(bc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Un(st),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(kr(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xc())),Ke(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(Bn(t),c!==null?(Ke(t),am(t,c)):(Ke(t),du(t,s,null,i,n))):c?c!==e.memoizedState?(Bn(t),Ke(t),am(t,c)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bn(t),Ke(t),du(t,s,e,i,n)),null;case 27:if(Nn(t),n=re.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ke(t),null}e=K.current,kr(t)?Hh(t):(e=ug(s,i,n),t.stateNode=e,Bn(t))}return Ke(t),null;case 5:if(Nn(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ke(t),null}if(c=K.current,kr(t))Hh(t);else{var g=Hl(re.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?g.createElement("select",{is:i.is}):g.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?g.createElement(s,{is:i.is}):g.createElement(s)}}c[xt]=t,c[Mt]=i;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=c;e:switch(Ct(c,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Bn(t)}}return Ke(t),du(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=re.current,kr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=_t,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Pm(e.nodeValue,n)),e||ra(t,!0)}else e=Hl(e).createTextNode(i),e[xt]=t,t.stateNode=e}return Ke(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=kr(t),n!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[xt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else n=xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Gt(t),t):(Gt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ke(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=kr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[xt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),s=!1}else s=xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Gt(t),t):(Gt(t),null)}return Gt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xl(t,t.updateQueue),Ke(t),null);case 4:return we(),e===null&&Ou(t.stateNode.containerInfo),Ke(t),null;case 10:return Un(t.type),Ke(t),null;case 19:if(H(at),i=t.memoizedState,i===null)return Ke(t),null;if(s=(t.flags&128)!==0,c=i.rendering,c===null)if(s)Bi(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=sl(e),c!==null){for(t.flags|=128,Bi(i,!1),e=c.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Mh(n,e),n=n.sibling;return F(at,at.current&1|2),De&&On(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Bt()>kl&&(t.flags|=128,s=!0,Bi(i,!1),t.lanes=4194304)}else{if(!s)if(e=sl(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),Bi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!De)return Ke(t),null}else 2*Bt()-i.renderingStartTime>kl&&n!==536870912&&(t.flags|=128,s=!0,Bi(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Bt(),e.sibling=null,n=at.current,F(at,s?n&1|2:n&1),De&&On(t,i.treeForkCount),e):(Ke(t),null);case 22:case 23:return Gt(t),Rc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),n=t.updateQueue,n!==null&&xl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&H(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Un(st),Ke(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Xb(e,t){switch(bc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(st),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nn(t),null;case 31:if(t.memoizedState!==null){if(Gt(t),t.alternate===null)throw Error(l(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(at),null;case 4:return we(),null;case 10:return Un(t.type),null;case 22:case 23:return Gt(t),Rc(),e!==null&&H(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Un(st),null;case 25:return null;default:return null}}function rm(e,t){switch(bc(t),t.tag){case 3:Un(st),we();break;case 26:case 27:case 5:Nn(t);break;case 4:we();break;case 31:t.memoizedState!==null&&Gt(t);break;case 13:Gt(t);break;case 19:H(at);break;case 10:Un(t.type);break;case 22:case 23:Gt(t),Rc(),e!==null&&H(qa);break;case 24:Un(st)}}function Yi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var c=n.create,g=n.inst;i=c(),g.destroy=i}n=n.next}while(n!==s)}}catch(b){Xe(t,t.return,b)}}function da(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&e)===e){var g=i.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,s=t;var k=n,L=b;try{L()}catch(X){Xe(s,k,X)}}}i=i.next}while(i!==c)}}catch(X){Xe(t,t.return,X)}}function im(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Kh(t,n)}catch(i){Xe(e,e.return,i)}}}function om(e,t,n){n.props=Qa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Xe(e,t,i)}}function Xi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){Xe(e,t,s)}}function _n(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Xe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Xe(e,t,s)}else n.current=null}function lm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Xe(e,e.return,s)}}function fu(e,t,n){try{var i=e.stateNode;cw(i,e.type,n,t),i[Mt]=t}catch(s){Xe(e,e.return,s)}}function sm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function _l(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(_l(e,t,n),e=e.sibling;e!==null;)_l(e,t,n),e=e.sibling}function cm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ct(t,i,n),t[xt]=e,t[Mt]=n}catch(c){Xe(e,e.return,c)}}var Yn=!1,dt=!1,mu=!1,um=typeof WeakSet=="function"?WeakSet:Set,yt=null;function qb(e,t){if(e=e.containerInfo,Hu=Vl,e=_h(e),sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var g=0,b=-1,k=-1,L=0,X=0,G=e,B=null;t:for(;;){for(var Y;G!==n||s!==0&&G.nodeType!==3||(b=g+s),G!==c||i!==0&&G.nodeType!==3||(k=g+i),G.nodeType===3&&(g+=G.nodeValue.length),(Y=G.firstChild)!==null;)B=G,G=Y;for(;;){if(G===e)break t;if(B===n&&++L===s&&(b=g),B===c&&++X===i&&(k=g),(Y=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=Y}n=b===-1||k===-1?null:{start:b,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(ju={focusedElem:e,selectionRange:n},Vl=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,s=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var ne=Qa(n.type,s);e=i.getSnapshotBeforeUpdate(ne,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Xe(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Yu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function dm(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:qn(e,n),i&4&&Yi(5,n);break;case 1:if(qn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Xe(n,n.return,g)}else{var s=Qa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Xe(n,n.return,g)}}i&64&&im(n),i&512&&Xi(n,n.return);break;case 3:if(qn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Kh(e,t)}catch(g){Xe(n,n.return,g)}}break;case 27:t===null&&i&4&&cm(n);case 26:case 5:qn(e,n),t===null&&i&4&&lm(n),i&512&&Xi(n,n.return);break;case 12:qn(e,n);break;case 31:qn(e,n),i&4&&pm(e,n);break;case 13:qn(e,n),i&4&&mm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ib.bind(null,n),vw(e,n))));break;case 22:if(i=n.memoizedState!==null||Yn,!i){t=t!==null&&t.memoizedState!==null||dt,s=Yn;var c=dt;Yn=i,(dt=t)&&!c?Vn(e,n,(n.subtreeFlags&8772)!==0):qn(e,n),Yn=s,dt=c}break;case 30:break;default:qn(e,n)}}function fm(e){var t=e.alternate;t!==null&&(e.alternate=null,fm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,Ot=!1;function Xn(e,t,n){for(n=n.child;n!==null;)hm(e,t,n),n=n.sibling}function hm(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(di,n)}catch{}switch(n.tag){case 26:dt||_n(n,t),Xn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:dt||_n(n,t);var i=Ie,s=Ot;ya(n.type)&&(Ie=n.stateNode,Ot=!1),Xn(e,t,n),Ji(n.stateNode),Ie=i,Ot=s;break;case 5:dt||_n(n,t);case 6:if(i=Ie,s=Ot,Ie=null,Xn(e,t,n),Ie=i,Ot=s,Ie!==null)if(Ot)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(n.stateNode)}catch(c){Xe(n,t,c)}else try{Ie.removeChild(n.stateNode)}catch(c){Xe(n,t,c)}break;case 18:Ie!==null&&(Ot?(e=Ie,ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Qr(e)):ig(Ie,n.stateNode));break;case 4:i=Ie,s=Ot,Ie=n.stateNode.containerInfo,Ot=!0,Xn(e,t,n),Ie=i,Ot=s;break;case 0:case 11:case 14:case 15:da(2,n,t),dt||da(4,n,t),Xn(e,t,n);break;case 1:dt||(_n(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&om(n,t,i)),Xn(e,t,n);break;case 21:Xn(e,t,n);break;case 22:dt=(i=dt)||n.memoizedState!==null,Xn(e,t,n),dt=i;break;default:Xn(e,t,n)}}function pm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(n){Xe(t,t.return,n)}}}function mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(n){Xe(t,t.return,n)}}function Vb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new um),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new um),t;default:throw Error(l(435,e.tag))}}function Sl(e,t){var n=Vb(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=Wb.bind(null,e,i);i.then(s,s)}})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],c=e,g=t,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(ya(b.type)){Ie=b.stateNode,Ot=!1;break e}break;case 5:Ie=b.stateNode,Ot=!1;break e;case 3:case 4:Ie=b.stateNode.containerInfo,Ot=!0;break e}b=b.return}if(Ie===null)throw Error(l(160));hm(c,g,s),Ie=null,Ot=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gm(t,e),t=t.sibling}var dn=null;function gm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Ut(e),i&4&&(da(3,e,e.return),Yi(3,e),da(5,e,e.return));break;case 1:Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),i&64&&Yn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=dn;if(Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":c=s.getElementsByTagName("title")[0],(!c||c[pi]||c[xt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(i),s.head.insertBefore(c,s.querySelector("head > title"))),Ct(c,i,n),c[xt]=e,vt(c),i=c;break e;case"link":var g=gg("link","href",s).get(i+(n.href||""));if(g){for(var b=0;b<g.length;b++)if(c=g[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(b,1);break t}}c=s.createElement(i),Ct(c,i,n),s.head.appendChild(c);break;case"meta":if(g=gg("meta","content",s).get(i+(n.content||""))){for(b=0;b<g.length;b++)if(c=g[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(b,1);break t}}c=s.createElement(i),Ct(c,i,n),s.head.appendChild(c);break;default:throw Error(l(468,i))}c[xt]=e,vt(c),i=c}e.stateNode=i}else vg(s,e.type,e.stateNode);else e.stateNode=mg(s,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?vg(s,e.type,e.stateNode):mg(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&fu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),n!==null&&i&4&&fu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),e.flags&32){s=e.stateNode;try{gr(s,"")}catch(ne){Xe(e,e.return,ne)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,fu(e,s,n!==null?n.memoizedProps:s)),i&1024&&(mu=!0);break;case 6:if(Rt(t,e),Ut(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ne){Xe(e,e.return,ne)}}break;case 3:if(Bl=null,s=dn,dn=jl(t.containerInfo),Rt(t,e),dn=s,Ut(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(ne){Xe(e,e.return,ne)}mu&&(mu=!1,vm(e));break;case 4:i=dn,dn=jl(e.stateNode.containerInfo),Rt(t,e),Ut(e),dn=i;break;case 12:Rt(t,e),Ut(e);break;case 31:Rt(t,e),Ut(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sl(e,i)));break;case 13:Rt(t,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Cl=Bt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sl(e,i)));break;case 22:s=e.memoizedState!==null;var k=n!==null&&n.memoizedState!==null,L=Yn,X=dt;if(Yn=L||s,dt=X||k,Rt(t,e),dt=X,Yn=L,Ut(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||k||Yn||dt||Za(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){k=n=t;try{if(c=k.stateNode,s)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=k.stateNode;var G=k.memoizedProps.style,B=G!=null&&G.hasOwnProperty("display")?G.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ne){Xe(k,k.return,ne)}}}else if(t.tag===6){if(n===null){k=t;try{k.stateNode.nodeValue=s?"":k.memoizedProps}catch(ne){Xe(k,k.return,ne)}}}else if(t.tag===18){if(n===null){k=t;try{var Y=k.stateNode;s?og(Y,!0):og(k.stateNode,!1)}catch(ne){Xe(k,k.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Sl(e,n))));break;case 19:Rt(t,e),Ut(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sl(e,i)));break;case 30:break;case 21:break;default:Rt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(sm(i)){n=i;break}i=i.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var s=n.stateNode,c=hu(e);_l(e,c,s);break;case 5:var g=n.stateNode;n.flags&32&&(gr(g,""),n.flags&=-33);var b=hu(e);_l(e,b,g);break;case 3:case 4:var k=n.stateNode.containerInfo,L=hu(e);pu(e,L,k);break;default:throw Error(l(161))}}catch(X){Xe(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dm(e,t.alternate,t),t=t.sibling}function Za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Za(t);break;case 1:_n(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&om(t,t.return,n),Za(t);break;case 27:Ji(t.stateNode);case 26:case 5:_n(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}e=e.sibling}}function Vn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,c=t,g=c.flags;switch(c.tag){case 0:case 11:case 15:Vn(s,c,n),Yi(4,c);break;case 1:if(Vn(s,c,n),i=c,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(L){Xe(i,i.return,L)}if(i=c,s=i.updateQueue,s!==null){var b=i.stateNode;try{var k=s.shared.hiddenCallbacks;if(k!==null)for(s.shared.hiddenCallbacks=null,s=0;s<k.length;s++)Zh(k[s],b)}catch(L){Xe(i,i.return,L)}}n&&g&64&&im(c),Xi(c,c.return);break;case 27:cm(c);case 26:case 5:Vn(s,c,n),n&&i===null&&g&4&&lm(c),Xi(c,c.return);break;case 12:Vn(s,c,n);break;case 31:Vn(s,c,n),n&&g&4&&pm(s,c);break;case 13:Vn(s,c,n),n&&g&4&&mm(s,c);break;case 22:c.memoizedState===null&&Vn(s,c,n),Xi(c,c.return);break;case 30:break;default:Vn(s,c,n)}t=t.sibling}}function gu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ei(n))}function vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ei(e))}function fn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ym(e,t,n,i),t=t.sibling}function ym(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:fn(e,t,n,i),s&2048&&Yi(9,t);break;case 1:fn(e,t,n,i);break;case 3:fn(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ei(e)));break;case 12:if(s&2048){fn(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,g=c.id,b=c.onPostCommit;typeof b=="function"&&b(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Xe(t,t.return,k)}}else fn(e,t,n,i);break;case 31:fn(e,t,n,i);break;case 13:fn(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,g=t.alternate,t.memoizedState!==null?c._visibility&2?fn(e,t,n,i):qi(e,t):c._visibility&2?fn(e,t,n,i):(c._visibility|=2,Hr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&gu(g,t);break;case 24:fn(e,t,n,i),s&2048&&vu(t.alternate,t);break;default:fn(e,t,n,i)}}function Hr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,g=t,b=n,k=i,L=g.flags;switch(g.tag){case 0:case 11:case 15:Hr(c,g,b,k,s),Yi(8,g);break;case 23:break;case 22:var X=g.stateNode;g.memoizedState!==null?X._visibility&2?Hr(c,g,b,k,s):qi(c,g):(X._visibility|=2,Hr(c,g,b,k,s)),s&&L&2048&&gu(g.alternate,g);break;case 24:Hr(c,g,b,k,s),s&&L&2048&&vu(g.alternate,g);break;default:Hr(c,g,b,k,s)}t=t.sibling}}function qi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:qi(n,i),s&2048&&gu(i.alternate,i);break;case 24:qi(n,i),s&2048&&vu(i.alternate,i);break;default:qi(n,i)}t=t.sibling}}var Vi=8192;function jr(e,t,n){if(e.subtreeFlags&Vi)for(e=e.child;e!==null;)bm(e,t,n),e=e.sibling}function bm(e,t,n){switch(e.tag){case 26:jr(e,t,n),e.flags&Vi&&e.memoizedState!==null&&zw(n,dn,e.memoizedState,e.memoizedProps);break;case 5:jr(e,t,n);break;case 3:case 4:var i=dn;dn=jl(e.stateNode.containerInfo),jr(e,t,n),dn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Vi,Vi=16777216,jr(e,t,n),Vi=i):jr(e,t,n));break;default:jr(e,t,n)}}function wm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];yt=i,_m(i,e)}wm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xm(e),e=e.sibling}function xm(e){switch(e.tag){case 0:case 11:case 15:Fi(e),e.flags&2048&&da(9,e,e.return);break;case 3:Fi(e);break;case 12:Fi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tl(e)):Fi(e);break;default:Fi(e)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];yt=i,_m(i,e)}wm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),Tl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Tl(t));break;default:Tl(t)}e=e.sibling}}function _m(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ei(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,yt=i;else e:for(n=e;yt!==null;){i=yt;var s=i.sibling,c=i.return;if(fm(i),i===n){yt=null;break e}if(s!==null){s.return=c,yt=s;break e}yt=c}}}var Fb={getCacheForType:function(e){var t=St(st),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return St(st).controller.signal}},Gb=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ge=null,Ce=null,Ne=0,Ye=0,$t=null,fa=!1,Lr=!1,yu=!1,Fn=0,tt=0,ha=0,Ka=0,bu=0,Qt=0,Br=0,Gi=null,Ht=null,wu=!1,Cl=0,Sm=0,kl=1/0,El=null,pa=null,mt=0,ma=null,Yr=null,Gn=0,xu=0,_u=null,Tm=null,$i=0,Su=null;function Zt(){return(Le&2)!==0&&Ne!==0?Ne&-Ne:w.T!==null?zu():Yf()}function Cm(){if(Qt===0)if((Ne&536870912)===0||De){var e=Uo;Uo<<=1,(Uo&3932160)===0&&(Uo=262144),Qt=e}else Qt=536870912;return e=Ft.current,e!==null&&(e.flags|=32),Qt}function jt(e,t,n){(e===Ge&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Xr(e,0),ga(e,Ne,Qt,!1)),hi(e,n),((Le&2)===0||e!==Ge)&&(e===Ge&&((Le&2)===0&&(Ka|=n),tt===4&&ga(e,Ne,Qt,!1)),Sn(e))}function km(e,t,n){if((Le&6)!==0)throw Error(l(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||fi(e,t),s=i?Zb(e,t):Cu(e,t,!0),c=i;do{if(s===0){Lr&&!i&&ga(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!$b(n)){s=Cu(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var b=e;s=Gi;var k=b.current.memoizedState.isDehydrated;if(k&&(Xr(b,g).flags|=256),g=Cu(b,g,!1),g!==2){if(yu&&!k){b.errorRecoveryDisabledLanes|=c,Ka|=c,s=4;break e}c=Ht,Ht=s,c!==null&&(Ht===null?Ht=c:Ht.push.apply(Ht,c))}s=g}if(c=!1,s!==2)continue}}if(s===1){Xr(e,0),ga(e,t,0,!0);break}e:{switch(i=e,c=s,c){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:ga(i,t,Qt,!fa);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=Cl+300-Bt(),10<s)){if(ga(i,t,Qt,!fa),jo(i,0,!0)!==0)break e;Gn=t,i.timeoutHandle=ag(Em.bind(null,i,n,Ht,El,wu,t,Qt,Ka,Br,fa,c,"Throttled",-0,0),s);break e}Em(i,n,Ht,El,wu,t,Qt,Ka,Br,fa,c,null,-0,0)}}break}while(!0);Sn(e)}function Em(e,t,n,i,s,c,g,b,k,L,X,G,B,Y){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},bm(t,c,G);var ne=(c&62914560)===c?Cl-Bt():(c&4194048)===c?Sm-Bt():0;if(ne=Aw(G,ne),ne!==null){Gn=c,e.cancelPendingCommit=ne(Um.bind(null,e,t,c,n,i,s,g,b,k,X,G,null,B,Y)),ga(e,c,g,!L);return}}Um(e,t,c,n,i,s,g,b,k)}function $b(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],c=s.getSnapshot;s=s.value;try{if(!qt(c(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,n,i){t&=~bu,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var c=31-Xt(s),g=1<<c;i[c]=-1,s&=~g}n!==0&&jf(e,n,t)}function Nl(){return(Le&6)===0?(Qi(0),!1):!0}function Tu(){if(Ce!==null){if(Ye===0)var e=Ce.return;else e=Ce,Rn=Ya=null,Yc(e),Mr=null,zi=0,e=Ce;for(;e!==null;)rm(e.alternate,e),e=e.return;Ce=null}}function Xr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,fw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gn=0,Tu(),Ge=e,Ce=n=Dn(e.current,null),Ne=t,Ye=0,$t=null,fa=!1,Lr=fi(e,t),yu=!1,Br=Qt=bu=Ka=ha=tt=0,Ht=Gi=null,wu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Xt(i),c=1<<s;t|=e[s],i&=~c}return Fn=t,Ko(),n}function Nm(e,t){be=null,w.H=ji,t===Ar||t===al?(t=Fh(),Ye=3):t===Nc?(t=Fh(),Ye=4):Ye=t===nu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$t=t,Ce===null&&(tt=1,vl(e,en(t,e.current)))}function zm(){var e=Ft.current;return e===null?!0:(Ne&4194048)===Ne?rn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===rn:!1}function Am(){var e=w.H;return w.H=ji,e===null?ji:e}function Mm(){var e=w.A;return w.A=Fb,e}function zl(){tt=4,fa||(Ne&4194048)!==Ne&&Ft.current!==null||(Lr=!0),(ha&134217727)===0&&(Ka&134217727)===0||Ge===null||ga(Ge,Ne,Qt,!1)}function Cu(e,t,n){var i=Le;Le|=2;var s=Am(),c=Mm();(Ge!==e||Ne!==t)&&(El=null,Xr(e,t)),t=!1;var g=tt;e:do try{if(Ye!==0&&Ce!==null){var b=Ce,k=$t;switch(Ye){case 8:Tu(),g=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var L=Ye;if(Ye=0,$t=null,qr(e,b,k,L),n&&Lr){g=0;break e}break;default:L=Ye,Ye=0,$t=null,qr(e,b,k,L)}}Qb(),g=tt;break}catch(X){Nm(e,X)}while(!0);return t&&e.shellSuspendCounter++,Rn=Ya=null,Le=i,w.H=s,w.A=c,Ce===null&&(Ge=null,Ne=0,Ko()),g}function Qb(){for(;Ce!==null;)Dm(Ce)}function Zb(e,t){var n=Le;Le|=2;var i=Am(),s=Mm();Ge!==e||Ne!==t?(El=null,kl=Bt()+500,Xr(e,t)):Lr=fi(e,t);e:do try{if(Ye!==0&&Ce!==null){t=Ce;var c=$t;t:switch(Ye){case 1:Ye=0,$t=null,qr(e,t,c,1);break;case 2:case 9:if(qh(c)){Ye=0,$t=null,Om(t);break}t=function(){Ye!==2&&Ye!==9||Ge!==e||(Ye=7),Sn(e)},c.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:qh(c)?(Ye=0,$t=null,Om(t)):(Ye=0,$t=null,qr(e,t,c,7));break;case 5:var g=null;switch(Ce.tag){case 26:g=Ce.memoizedState;case 5:case 27:var b=Ce;if(g?yg(g):b.stateNode.complete){Ye=0,$t=null;var k=b.sibling;if(k!==null)Ce=k;else{var L=b.return;L!==null?(Ce=L,Al(L)):Ce=null}break t}}Ye=0,$t=null,qr(e,t,c,5);break;case 6:Ye=0,$t=null,qr(e,t,c,6);break;case 8:Tu(),tt=6;break e;default:throw Error(l(462))}}Kb();break}catch(X){Nm(e,X)}while(!0);return Rn=Ya=null,w.H=i,w.A=s,Le=n,Ce!==null?0:(Ge=null,Ne=0,Ko(),tt)}function Kb(){for(;Ce!==null&&!yy();)Dm(Ce)}function Dm(e){var t=nm(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,t===null?Al(e):Ce=t}function Om(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jp(n,t,t.pendingProps,t.type,void 0,Ne);break;case 11:t=Jp(n,t,t.pendingProps,t.type.render,t.ref,Ne);break;case 5:Yc(t);default:rm(n,t),t=Ce=Mh(t,Fn),t=nm(n,t,Fn)}e.memoizedProps=e.pendingProps,t===null?Al(e):Ce=t}function qr(e,t,n,i){Rn=Ya=null,Yc(t),Mr=null,zi=0;var s=t.return;try{if(jb(e,s,t,n,Ne)){tt=1,vl(e,en(n,e.current)),Ce=null;return}}catch(c){if(s!==null)throw Ce=s,c;tt=1,vl(e,en(n,e.current)),Ce=null;return}t.flags&32768?(De||i===1?e=!0:Lr||(Ne&536870912)!==0?e=!1:(fa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ft.current,i!==null&&i.tag===13&&(i.flags|=16384))),Rm(t,e)):Al(t)}function Al(e){var t=e;do{if((t.flags&32768)!==0){Rm(t,fa);return}e=t.return;var n=Yb(t.alternate,t,Fn);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);tt===0&&(tt=5)}function Rm(e,t){do{var n=Xb(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);tt=6,Ce=null}function Um(e,t,n,i,s,c,g,b,k){e.cancelPendingCommit=null;do Ml();while(mt!==0);if((Le&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(c=t.lanes|t.childLanes,c|=hc,Ny(e,n,c,g,b,k),e===Ge&&(Ce=Ge=null,Ne=0),Yr=t,ma=e,Gn=n,xu=c,_u=s,Tm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Pb(Oo,function(){return Ym(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=w.T,w.T=null,s=N.p,N.p=2,g=Le,Le|=4;try{qb(e,t,n)}finally{Le=g,N.p=s,w.T=i}}mt=1,Hm(),jm(),Lm()}}function Hm(){if(mt===1){mt=0;var e=ma,t=Yr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=w.T,w.T=null;var i=N.p;N.p=2;var s=Le;Le|=4;try{gm(t,e);var c=ju,g=_h(e.containerInfo),b=c.focusedElem,k=c.selectionRange;if(g!==b&&b&&b.ownerDocument&&xh(b.ownerDocument.documentElement,b)){if(k!==null&&sc(b)){var L=k.start,X=k.end;if(X===void 0&&(X=L),"selectionStart"in b)b.selectionStart=L,b.selectionEnd=Math.min(X,b.value.length);else{var G=b.ownerDocument||document,B=G&&G.defaultView||window;if(B.getSelection){var Y=B.getSelection(),ne=b.textContent.length,fe=Math.min(k.start,ne),Fe=k.end===void 0?fe:Math.min(k.end,ne);!Y.extend&&fe>Fe&&(g=Fe,Fe=fe,fe=g);var O=wh(b,fe),z=wh(b,Fe);if(O&&z&&(Y.rangeCount!==1||Y.anchorNode!==O.node||Y.anchorOffset!==O.offset||Y.focusNode!==z.node||Y.focusOffset!==z.offset)){var j=G.createRange();j.setStart(O.node,O.offset),Y.removeAllRanges(),fe>Fe?(Y.addRange(j),Y.extend(z.node,z.offset)):(j.setEnd(z.node,z.offset),Y.addRange(j))}}}}for(G=[],Y=b;Y=Y.parentNode;)Y.nodeType===1&&G.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<G.length;b++){var V=G[b];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Vl=!!Hu,ju=Hu=null}finally{Le=s,N.p=i,w.T=n}}e.current=t,mt=2}}function jm(){if(mt===2){mt=0;var e=ma,t=Yr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=w.T,w.T=null;var i=N.p;N.p=2;var s=Le;Le|=4;try{dm(e,t.alternate,t)}finally{Le=s,N.p=i,w.T=n}}mt=3}}function Lm(){if(mt===4||mt===3){mt=0,by();var e=ma,t=Yr,n=Gn,i=Tm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mt=5:(mt=0,Yr=ma=null,Bm(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(pa=null),Vs(n),t=t.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(di,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=w.T,s=N.p,N.p=2,w.T=null;try{for(var c=e.onRecoverableError,g=0;g<i.length;g++){var b=i[g];c(b.value,{componentStack:b.stack})}}finally{w.T=t,N.p=s}}(Gn&3)!==0&&Ml(),Sn(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Su?$i++:($i=0,Su=e):$i=0,Qi(0)}}function Bm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ei(t)))}function Ml(){return Hm(),jm(),Lm(),Ym()}function Ym(){if(mt!==5)return!1;var e=ma,t=xu;xu=0;var n=Vs(Gn),i=w.T,s=N.p;try{N.p=32>n?32:n,w.T=null,n=_u,_u=null;var c=ma,g=Gn;if(mt=0,Yr=ma=null,Gn=0,(Le&6)!==0)throw Error(l(331));var b=Le;if(Le|=4,xm(c.current),ym(c,c.current,g,n),Le=b,Qi(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(di,c)}catch{}return!0}finally{N.p=s,w.T=i,Bm(e,t)}}function Xm(e,t,n){t=en(n,t),t=tu(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(hi(e,2),Sn(e))}function Xe(e,t,n){if(e.tag===3)Xm(e,e,n);else for(;t!==null;){if(t.tag===3){Xm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))){e=en(n,e),n=qp(2),i=sa(t,n,2),i!==null&&(Vp(n,i,t,e),hi(i,2),Sn(i));break}}t=t.return}}function ku(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Gb;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(yu=!0,s.add(n),e=Jb.bind(null,e,t,n),t.then(e,e))}function Jb(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ge===e&&(Ne&n)===n&&(tt===4||tt===3&&(Ne&62914560)===Ne&&300>Bt()-Cl?(Le&2)===0&&Xr(e,0):bu|=n,Br===Ne&&(Br=0)),Sn(e)}function qm(e,t){t===0&&(t=Hf()),e=ja(e,t),e!==null&&(hi(e,t),Sn(e))}function Ib(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qm(e,n)}function Wb(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),qm(e,n)}function Pb(e,t){return Bs(e,t)}var Dl=null,Vr=null,Eu=!1,Ol=!1,Nu=!1,va=0;function Sn(e){e!==Vr&&e.next===null&&(Vr===null?Dl=Vr=e:Vr=Vr.next=e),Ol=!0,Eu||(Eu=!0,tw())}function Qi(e,t){if(!Nu&&Ol){Nu=!0;do for(var n=!1,i=Dl;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var c=0;else{var g=i.suspendedLanes,b=i.pingedLanes;c=(1<<31-Xt(42|e)+1)-1,c&=s&~(g&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,$m(i,c))}else c=Ne,c=jo(i,i===Ge?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||fi(i,c)||(n=!0,$m(i,c));i=i.next}while(n);Nu=!1}}function ew(){Vm()}function Vm(){Ol=Eu=!1;var e=0;va!==0&&dw()&&(e=va);for(var t=Bt(),n=null,i=Dl;i!==null;){var s=i.next,c=Fm(i,t);c===0?(i.next=null,n===null?Dl=s:n.next=s,s===null&&(Vr=n)):(n=i,(e!==0||(c&3)!==0)&&(Ol=!0)),i=s}mt!==0&&mt!==5||Qi(e),va!==0&&(va=0)}function Fm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var g=31-Xt(c),b=1<<g,k=s[g];k===-1?((b&n)===0||(b&i)!==0)&&(s[g]=Ey(b,t)):k<=t&&(e.expiredLanes|=b),c&=~b}if(t=Ge,n=Ne,n=jo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ys(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||fi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ys(i),Vs(n)){case 2:case 8:n=Rf;break;case 32:n=Oo;break;case 268435456:n=Uf;break;default:n=Oo}return i=Gm.bind(null,e),n=Bs(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ys(i),e.callbackPriority=2,e.callbackNode=null,2}function Gm(e,t){if(mt!==0&&mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ml()&&e.callbackNode!==n)return null;var i=Ne;return i=jo(e,e===Ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(km(e,i,t),Fm(e,Bt()),e.callbackNode!=null&&e.callbackNode===n?Gm.bind(null,e):null)}function $m(e,t){if(Ml())return null;km(e,t,!0)}function tw(){hw(function(){(Le&6)!==0?Bs(Of,ew):Vm()})}function zu(){if(va===0){var e=Nr;e===0&&(e=Ro,Ro<<=1,(Ro&261888)===0&&(Ro=256)),va=e}return va}function Qm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function Zm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function nw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var c=Qm((s[Mt]||null).action),g=i.submitter;g&&(t=(t=g[Mt]||null)?Qm(t.formAction):g.getAttribute("formAction"),t!==null&&(c=t,g=null));var b=new Go("action","action",null,i,s);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(va!==0){var k=g?Zm(s,g):new FormData(s);Kc(n,{pending:!0,data:k,method:s.method,action:c},null,k)}}else typeof c=="function"&&(b.preventDefault(),k=g?Zm(s,g):new FormData(s),Kc(n,{pending:!0,data:k,method:s.method,action:c},c,k))},currentTarget:s}]})}}for(var Au=0;Au<fc.length;Au++){var Mu=fc[Au],aw=Mu.toLowerCase(),rw=Mu[0].toUpperCase()+Mu.slice(1);un(aw,"on"+rw)}un(Ch,"onAnimationEnd"),un(kh,"onAnimationIteration"),un(Eh,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(wb,"onTransitionRun"),un(xb,"onTransitionStart"),un(_b,"onTransitionCancel"),un(Nh,"onTransitionEnd"),pr("onMouseEnter",["mouseout","mouseover"]),pr("onMouseLeave",["mouseout","mouseover"]),pr("onPointerEnter",["pointerout","pointerover"]),pr("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zi));function Km(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var g=i.length-1;0<=g;g--){var b=i[g],k=b.instance,L=b.currentTarget;if(b=b.listener,k!==c&&s.isPropagationStopped())break e;c=b,s.currentTarget=L;try{c(s)}catch(X){Zo(X)}s.currentTarget=null,c=k}else for(g=0;g<i.length;g++){if(b=i[g],k=b.instance,L=b.currentTarget,b=b.listener,k!==c&&s.isPropagationStopped())break e;c=b,s.currentTarget=L;try{c(s)}catch(X){Zo(X)}s.currentTarget=null,c=k}}}}function ke(e,t){var n=t[Fs];n===void 0&&(n=t[Fs]=new Set);var i=e+"__bubble";n.has(i)||(Jm(t,e,2,!1),n.add(i))}function Du(e,t,n){var i=0;t&&(i|=4),Jm(n,e,i,t)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function Ou(e){if(!e[Rl]){e[Rl]=!0,Vf.forEach(function(n){n!=="selectionchange"&&(iw.has(n)||Du(n,!1,e),Du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rl]||(t[Rl]=!0,Du("selectionchange",!1,t))}}function Jm(e,t,n,i){switch(Cg(t)){case 2:var s=Ow;break;case 8:s=Rw;break;default:s=Zu}n=s.bind(null,t,n,e),s=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ru(e,t,n,i,s){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var b=i.stateNode.containerInfo;if(b===s)break;if(g===4)for(g=i.return;g!==null;){var k=g.tag;if((k===3||k===4)&&g.stateNode.containerInfo===s)return;g=g.return}for(;b!==null;){if(g=dr(b),g===null)return;if(k=g.tag,k===5||k===6||k===26||k===27){i=c=g;continue e}b=b.parentNode}}i=i.return}th(function(){var L=c,X=Is(n),G=[];e:{var B=zh.get(e);if(B!==void 0){var Y=Go,ne=e;switch(e){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":Y=Wy;break;case"focusin":ne="focus",Y=ac;break;case"focusout":ne="blur",Y=ac;break;case"beforeblur":case"afterblur":Y=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=tb;break;case Ch:case kh:case Eh:Y=Vy;break;case Nh:Y=ab;break;case"scroll":case"scrollend":Y=Ly;break;case"wheel":Y=ib;break;case"copy":case"cut":case"paste":Y=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=oh;break;case"toggle":case"beforetoggle":Y=lb}var fe=(t&4)!==0,Fe=!fe&&(e==="scroll"||e==="scrollend"),O=fe?B!==null?B+"Capture":null:B;fe=[];for(var z=L,j;z!==null;){var V=z;if(j=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||j===null||O===null||(V=gi(z,O),V!=null&&fe.push(Ki(z,V,j))),Fe)break;z=z.return}0<fe.length&&(B=new Y(B,ne,null,n,X),G.push({event:B,listeners:fe}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",B&&n!==Js&&(ne=n.relatedTarget||n.fromElement)&&(dr(ne)||ne[ur]))break e;if((Y||B)&&(B=X.window===X?X:(B=X.ownerDocument)?B.defaultView||B.parentWindow:window,Y?(ne=n.relatedTarget||n.toElement,Y=L,ne=ne?dr(ne):null,ne!==null&&(Fe=d(ne),fe=ne.tag,ne!==Fe||fe!==5&&fe!==27&&fe!==6)&&(ne=null)):(Y=null,ne=L),Y!==ne)){if(fe=rh,V="onMouseLeave",O="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(fe=oh,V="onPointerLeave",O="onPointerEnter",z="pointer"),Fe=Y==null?B:mi(Y),j=ne==null?B:mi(ne),B=new fe(V,z+"leave",Y,n,X),B.target=Fe,B.relatedTarget=j,V=null,dr(X)===L&&(fe=new fe(O,z+"enter",ne,n,X),fe.target=j,fe.relatedTarget=Fe,V=fe),Fe=V,Y&&ne)t:{for(fe=ow,O=Y,z=ne,j=0,V=O;V;V=fe(V))j++;V=0;for(var ce=z;ce;ce=fe(ce))V++;for(;0<j-V;)O=fe(O),j--;for(;0<V-j;)z=fe(z),V--;for(;j--;){if(O===z||z!==null&&O===z.alternate){fe=O;break t}O=fe(O),z=fe(z)}fe=null}else fe=null;Y!==null&&Im(G,B,Y,fe,!1),ne!==null&&Fe!==null&&Im(G,Fe,ne,fe,!0)}}e:{if(B=L?mi(L):window,Y=B.nodeName&&B.nodeName.toLowerCase(),Y==="select"||Y==="input"&&B.type==="file")var He=ph;else if(fh(B))if(mh)He=vb;else{He=mb;var ie=pb}else Y=B.nodeName,!Y||Y.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?L&&Ks(L.elementType)&&(He=ph):He=gb;if(He&&(He=He(e,L))){hh(G,He,n,X);break e}ie&&ie(e,B,L),e==="focusout"&&L&&B.type==="number"&&L.memoizedProps.value!=null&&Zs(B,"number",B.value)}switch(ie=L?mi(L):window,e){case"focusin":(fh(ie)||ie.contentEditable==="true")&&(wr=ie,cc=L,Ti=null);break;case"focusout":Ti=cc=wr=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,Sh(G,n,X);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":Sh(G,n,X)}var xe;if(ic)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else br?uh(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(lh&&n.locale!=="ko"&&(br||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&br&&(xe=nh()):(ta=X,ec="value"in ta?ta.value:ta.textContent,br=!0)),ie=Ul(L,ze),0<ie.length&&(ze=new ih(ze,e,null,n,X),G.push({event:ze,listeners:ie}),xe?ze.data=xe:(xe=dh(n),xe!==null&&(ze.data=xe)))),(xe=cb?ub(e,n):db(e,n))&&(ze=Ul(L,"onBeforeInput"),0<ze.length&&(ie=new ih("onBeforeInput","beforeinput",null,n,X),G.push({event:ie,listeners:ze}),ie.data=xe)),nw(G,e,L,n,X)}Km(G,t)})}function Ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ul(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=gi(e,n),s!=null&&i.unshift(Ki(e,s,c)),s=gi(e,t),s!=null&&i.push(Ki(e,s,c))),e.tag===3)return i;e=e.return}return[]}function ow(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Im(e,t,n,i,s){for(var c=t._reactName,g=[];n!==null&&n!==i;){var b=n,k=b.alternate,L=b.stateNode;if(b=b.tag,k!==null&&k===i)break;b!==5&&b!==26&&b!==27||L===null||(k=L,s?(L=gi(n,c),L!=null&&g.unshift(Ki(n,L,k))):s||(L=gi(n,c),L!=null&&g.push(Ki(n,L,k)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var lw=/\r\n?/g,sw=/\u0000|\uFFFD/g;function Wm(e){return(typeof e=="string"?e:""+e).replace(lw,`
`).replace(sw,"")}function Pm(e,t){return t=Wm(t),Wm(e)===t}function Ve(e,t,n,i,s,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||gr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&gr(e,""+i);break;case"className":Bo(e,"class",i);break;case"tabIndex":Bo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Bo(e,n,i);break;case"style":Pf(e,i,c);break;case"data":if(t!=="object"){Bo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Xo(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ve(e,t,"name",s.name,s,null),Ve(e,t,"formEncType",s.formEncType,s,null),Ve(e,t,"formMethod",s.formMethod,s,null),Ve(e,t,"formTarget",s.formTarget,s,null)):(Ve(e,t,"encType",s.encType,s,null),Ve(e,t,"method",s.method,s,null),Ve(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Xo(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=An);break;case"onScroll":i!=null&&ke("scroll",e);break;case"onScrollEnd":i!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Xo(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ke("beforetoggle",e),ke("toggle",e),Lo(e,"popover",i);break;case"xlinkActuate":zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":zn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":zn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":zn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":zn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Lo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Hy.get(n)||n,Lo(e,n,i))}}function Uu(e,t,n,i,s,c){switch(n){case"style":Pf(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?gr(e,i):(typeof i=="number"||typeof i=="bigint")&&gr(e,""+i);break;case"onScroll":i!=null&&ke("scroll",e);break;case"onScrollEnd":i!=null&&ke("scrollend",e);break;case"onClick":i!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ff.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),c=e[Mt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Lo(e,n,i)}}}function Ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var i=!1,s=!1,c;for(c in n)if(n.hasOwnProperty(c)){var g=n[c];if(g!=null)switch(c){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,c,g,n,null)}}s&&Ve(e,t,"srcSet",n.srcSet,n,null),i&&Ve(e,t,"src",n.src,n,null);return;case"input":ke("invalid",e);var b=c=g=s=null,k=null,L=null;for(i in n)if(n.hasOwnProperty(i)){var X=n[i];if(X!=null)switch(i){case"name":s=X;break;case"type":g=X;break;case"checked":k=X;break;case"defaultChecked":L=X;break;case"value":c=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:Ve(e,t,i,X,n,null)}}Kf(e,c,b,k,L,g,s,!1);return;case"select":ke("invalid",e),i=g=c=null;for(s in n)if(n.hasOwnProperty(s)&&(b=n[s],b!=null))switch(s){case"value":c=b;break;case"defaultValue":g=b;break;case"multiple":i=b;default:Ve(e,t,s,b,n,null)}t=c,n=g,e.multiple=!!i,t!=null?mr(e,!!i,t,!1):n!=null&&mr(e,!!i,n,!0);return;case"textarea":ke("invalid",e),c=s=i=null;for(g in n)if(n.hasOwnProperty(g)&&(b=n[g],b!=null))switch(g){case"value":i=b;break;case"defaultValue":s=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(l(91));break;default:Ve(e,t,g,b,n,null)}If(e,i,s,c);return;case"option":for(k in n)n.hasOwnProperty(k)&&(i=n[k],i!=null)&&(k==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ve(e,t,k,i,n,null));return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(i=0;i<Zi.length;i++)ke(Zi[i],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(i=n[L],i!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,L,i,n,null)}return;default:if(Ks(t)){for(X in n)n.hasOwnProperty(X)&&(i=n[X],i!==void 0&&Uu(e,t,X,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&Ve(e,t,b,i,n,null))}function cw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,g=null,b=null,k=null,L=null,X=null;for(Y in n){var G=n[Y];if(n.hasOwnProperty(Y)&&G!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":k=G;default:i.hasOwnProperty(Y)||Ve(e,t,Y,null,i,G)}}for(var B in i){var Y=i[B];if(G=n[B],i.hasOwnProperty(B)&&(Y!=null||G!=null))switch(B){case"type":c=Y;break;case"name":s=Y;break;case"checked":L=Y;break;case"defaultChecked":X=Y;break;case"value":g=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(l(137,t));break;default:Y!==G&&Ve(e,t,B,Y,i,G)}}Qs(e,g,b,k,L,X,c,s);return;case"select":Y=g=b=B=null;for(c in n)if(k=n[c],n.hasOwnProperty(c)&&k!=null)switch(c){case"value":break;case"multiple":Y=k;default:i.hasOwnProperty(c)||Ve(e,t,c,null,i,k)}for(s in i)if(c=i[s],k=n[s],i.hasOwnProperty(s)&&(c!=null||k!=null))switch(s){case"value":B=c;break;case"defaultValue":b=c;break;case"multiple":g=c;default:c!==k&&Ve(e,t,s,c,i,k)}t=b,n=g,i=Y,B!=null?mr(e,!!n,B,!1):!!i!=!!n&&(t!=null?mr(e,!!n,t,!0):mr(e,!!n,n?[]:"",!1));return;case"textarea":Y=B=null;for(b in n)if(s=n[b],n.hasOwnProperty(b)&&s!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ve(e,t,b,null,i,s)}for(g in i)if(s=i[g],c=n[g],i.hasOwnProperty(g)&&(s!=null||c!=null))switch(g){case"value":B=s;break;case"defaultValue":Y=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==c&&Ve(e,t,g,s,i,c)}Jf(e,B,Y);return;case"option":for(var ne in n)B=n[ne],n.hasOwnProperty(ne)&&B!=null&&!i.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Ve(e,t,ne,null,i,B));for(k in i)B=i[k],Y=n[k],i.hasOwnProperty(k)&&B!==Y&&(B!=null||Y!=null)&&(k==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":Ve(e,t,k,B,i,Y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)B=n[fe],n.hasOwnProperty(fe)&&B!=null&&!i.hasOwnProperty(fe)&&Ve(e,t,fe,null,i,B);for(L in i)if(B=i[L],Y=n[L],i.hasOwnProperty(L)&&B!==Y&&(B!=null||Y!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(l(137,t));break;default:Ve(e,t,L,B,i,Y)}return;default:if(Ks(t)){for(var Fe in n)B=n[Fe],n.hasOwnProperty(Fe)&&B!==void 0&&!i.hasOwnProperty(Fe)&&Uu(e,t,Fe,void 0,i,B);for(X in i)B=i[X],Y=n[X],!i.hasOwnProperty(X)||B===Y||B===void 0&&Y===void 0||Uu(e,t,X,B,i,Y);return}}for(var O in n)B=n[O],n.hasOwnProperty(O)&&B!=null&&!i.hasOwnProperty(O)&&Ve(e,t,O,null,i,B);for(G in i)B=i[G],Y=n[G],!i.hasOwnProperty(G)||B===Y||B==null&&Y==null||Ve(e,t,G,B,i,Y)}function eg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],c=s.transferSize,g=s.initiatorType,b=s.duration;if(c&&b&&eg(g)){for(g=0,b=s.responseEnd,i+=1;i<n.length;i++){var k=n[i],L=k.startTime;if(L>b)break;var X=k.transferSize,G=k.initiatorType;X&&eg(G)&&(k=k.responseEnd,g+=X*(k<b?1:(b-L)/(k-L)))}if(--i,t+=8*(c+g)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hu=null,ju=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ng(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bu=null;function dw(){var e=window.event;return e&&e.type==="popstate"?e===Bu?!1:(Bu=e,!0):(Bu=null,!1)}var ag=typeof setTimeout=="function"?setTimeout:void 0,fw=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,hw=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(e){return rg.resolve(null).then(e).catch(pw)}:ag;function pw(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function ig(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Qr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ji(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ji(n);for(var c=n.firstChild;c;){var g=c.nextSibling,b=c.nodeName;c[pi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=g}}else n==="body"&&Ji(e.ownerDocument.body);n=s}while(n);Qr(t)}function og(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Yu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yu(n),Gs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function mw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[pi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=on(e.nextSibling),e===null)break}return null}function gw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=on(e.nextSibling),e===null))return null;return e}function lg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=on(e.nextSibling),e===null))return null;return e}function Xu(e){return e.data==="$?"||e.data==="$~"}function qu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Vu=null;function sg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return on(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function cg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ug(e,t,n){switch(t=Hl(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ji(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gs(e)}var ln=new Map,dg=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=N.d;N.d={f:yw,r:bw,D:ww,C:xw,L:_w,m:Sw,X:Cw,S:Tw,M:kw};function yw(){var e=$n.f(),t=Nl();return e||t}function bw(e){var t=fr(e);t!==null&&t.tag===5&&t.type==="form"?Np(t):$n.r(e)}var Fr=typeof document>"u"?null:document;function fg(e,t,n){var i=Fr;if(i&&typeof t=="string"&&t){var s=Wt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),dg.has(s)||(dg.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Ct(t,"link",e),vt(t),i.head.appendChild(t)))}}function ww(e){$n.D(e),fg("dns-prefetch",e,null)}function xw(e,t){$n.C(e,t),fg("preconnect",e,t)}function _w(e,t,n){$n.L(e,t,n);var i=Fr;if(i&&e&&t){var s='link[rel="preload"][as="'+Wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Wt(n.imageSizes)+'"]')):s+='[href="'+Wt(e)+'"]';var c=s;switch(t){case"style":c=Gr(e);break;case"script":c=$r(e)}ln.has(c)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ln.set(c,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Ii(c))||t==="script"&&i.querySelector(Wi(c))||(t=i.createElement("link"),Ct(t,"link",e),vt(t),i.head.appendChild(t)))}}function Sw(e,t){$n.m(e,t);var n=Fr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Wt(i)+'"][href="'+Wt(e)+'"]',c=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=$r(e)}if(!ln.has(c)&&(e=y({rel:"modulepreload",href:e},t),ln.set(c,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wi(c)))return}i=n.createElement("link"),Ct(i,"link",e),vt(i),n.head.appendChild(i)}}}function Tw(e,t,n){$n.S(e,t,n);var i=Fr;if(i&&e){var s=hr(i).hoistableStyles,c=Gr(e);t=t||"default";var g=s.get(c);if(!g){var b={loading:0,preload:null};if(g=i.querySelector(Ii(c)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ln.get(c))&&Fu(e,n);var k=g=i.createElement("link");vt(k),Ct(k,"link",e),k._p=new Promise(function(L,X){k.onload=L,k.onerror=X}),k.addEventListener("load",function(){b.loading|=1}),k.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ll(g,t,i)}g={type:"stylesheet",instance:g,count:1,state:b},s.set(c,g)}}}function Cw(e,t){$n.X(e,t);var n=Fr;if(n&&e){var i=hr(n).hoistableScripts,s=$r(e),c=i.get(s);c||(c=n.querySelector(Wi(s)),c||(e=y({src:e,async:!0},t),(t=ln.get(s))&&Gu(e,t),c=n.createElement("script"),vt(c),Ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function kw(e,t){$n.M(e,t);var n=Fr;if(n&&e){var i=hr(n).hoistableScripts,s=$r(e),c=i.get(s);c||(c=n.querySelector(Wi(s)),c||(e=y({src:e,async:!0,type:"module"},t),(t=ln.get(s))&&Gu(e,t),c=n.createElement("script"),vt(c),Ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function hg(e,t,n,i){var s=(s=re.current)?jl(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Gr(n.href),n=hr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Gr(n.href);var c=hr(s).hoistableStyles,g=c.get(e);if(g||(s=s.ownerDocument||s,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,g),(c=s.querySelector(Ii(e)))&&!c._p&&(g.instance=c,g.state.loading=5),ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(e,n),c||Ew(s,e,n,g.state))),t&&i===null)throw Error(l(528,""));return g}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$r(n),n=hr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Gr(e){return'href="'+Wt(e)+'"'}function Ii(e){return'link[rel="stylesheet"]['+e+"]"}function pg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Ew(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ct(t,"link",n),vt(t),e.head.appendChild(t))}function $r(e){return'[src="'+Wt(e)+'"]'}function Wi(e){return"script[async]"+e}function mg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Wt(n.href)+'"]');if(i)return t.instance=i,vt(i),i;var s=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),vt(i),Ct(i,"style",s),Ll(i,n.precedence,e),t.instance=i;case"stylesheet":s=Gr(n.href);var c=e.querySelector(Ii(s));if(c)return t.state.loading|=4,t.instance=c,vt(c),c;i=pg(n),(s=ln.get(s))&&Fu(i,s),c=(e.ownerDocument||e).createElement("link"),vt(c);var g=c;return g._p=new Promise(function(b,k){g.onload=b,g.onerror=k}),Ct(c,"link",i),t.state.loading|=4,Ll(c,n.precedence,e),t.instance=c;case"script":return c=$r(n.src),(s=e.querySelector(Wi(c)))?(t.instance=s,vt(s),s):(i=n,(s=ln.get(c))&&(i=y({},n),Gu(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),vt(s),Ct(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ll(i,n.precedence,e));return t.instance}function Ll(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,c=s,g=0;g<i.length;g++){var b=i[g];if(b.dataset.precedence===t)c=b;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bl=null;function gg(e,t,n){if(Bl===null){var i=new Map,s=Bl=new Map;s.set(n,i)}else s=Bl,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var c=n[s];if(!(c[pi]||c[xt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(t)||"";g=e+g;var b=i.get(g);b?b.push(c):i.set(g,[c])}}return i}function vg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Nw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Gr(i.href),c=t.querySelector(Ii(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,vt(c);return}c=t.ownerDocument||t,i=pg(i),(s=ln.get(s))&&Fu(i,s),c=c.createElement("link"),vt(c);var g=c;g._p=new Promise(function(b,k){g.onload=b,g.onerror=k}),Ct(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Yl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var $u=0;function Aw(e,t){return e.stylesheets&&e.count===0&&ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&$u===0&&($u=62500*uw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>$u?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function ql(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,t.forEach(Mw,e),Xl=null,Yl.call(e))}function Mw(e,t){if(!(t.state.loading&4)){var n=Xl.get(e);if(n)var i=n.get(null);else{n=new Map,Xl.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var g=s[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),i=g)}i&&n.set(null,i)}s=t.instance,g=s.getAttribute("data-precedence"),c=n.get(g)||i,c===i&&n.set(null,s),n.set(g,s),this.count++,i=Yl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Pi={$$typeof:q,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function Dw(e,t,n,i,s,c,g,b,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.hiddenUpdates=Xs(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function bg(e,t,n,i,s,c,g,b,k,L,X,G){return e=new Dw(e,t,n,g,k,L,X,G,b),t=1,c===!0&&(t|=24),c=Vt(3,null,null,t),e.current=c,c.stateNode=e,t=Cc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},zc(c),e}function wg(e){return e?(e=Sr,e):Sr}function xg(e,t,n,i,s,c){s=wg(s),i.context===null?i.context=s:i.pendingContext=s,i=la(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=sa(e,i,t),n!==null&&(jt(n,e,t),Mi(n,e,t))}function _g(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qu(e,t){_g(e,t),(e=e.alternate)&&_g(e,t)}function Sg(e){if(e.tag===13||e.tag===31){var t=ja(e,67108864);t!==null&&jt(t,e,67108864),Qu(e,67108864)}}function Tg(e){if(e.tag===13||e.tag===31){var t=Zt();t=qs(t);var n=ja(e,t);n!==null&&jt(n,e,t),Qu(e,t)}}var Vl=!0;function Ow(e,t,n,i){var s=w.T;w.T=null;var c=N.p;try{N.p=2,Zu(e,t,n,i)}finally{N.p=c,w.T=s}}function Rw(e,t,n,i){var s=w.T;w.T=null;var c=N.p;try{N.p=8,Zu(e,t,n,i)}finally{N.p=c,w.T=s}}function Zu(e,t,n,i){if(Vl){var s=Ku(i);if(s===null)Ru(e,t,i,Fl,n),kg(e,i);else if(Hw(s,e,t,n,i))i.stopPropagation();else if(kg(e,i),t&4&&-1<Uw.indexOf(e)){for(;s!==null;){var c=fr(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=Da(c.pendingLanes);if(g!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var k=1<<31-Xt(g);b.entanglements[1]|=k,g&=~k}Sn(c),(Le&6)===0&&(kl=Bt()+500,Qi(0))}}break;case 31:case 13:b=ja(c,2),b!==null&&jt(b,c,2),Nl(),Qu(c,2)}if(c=Ku(i),c===null&&Ru(e,t,i,Fl,n),c===s)break;s=c}s!==null&&i.stopPropagation()}else Ru(e,t,i,null,n)}}function Ku(e){return e=Is(e),Ju(e)}var Fl=null;function Ju(e){if(Fl=null,e=dr(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fl=e,null}function Cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wy()){case Of:return 2;case Rf:return 8;case Oo:case xy:return 32;case Uf:return 268435456;default:return 32}default:return 32}}var Iu=!1,ba=null,wa=null,xa=null,eo=new Map,to=new Map,_a=[],Uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kg(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function no(e,t,n,i,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},t!==null&&(t=fr(t),t!==null&&Sg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Hw(e,t,n,i,s){switch(t){case"focusin":return ba=no(ba,e,t,n,i,s),!0;case"dragenter":return wa=no(wa,e,t,n,i,s),!0;case"mouseover":return xa=no(xa,e,t,n,i,s),!0;case"pointerover":var c=s.pointerId;return eo.set(c,no(eo.get(c)||null,e,t,n,i,s)),!0;case"gotpointercapture":return c=s.pointerId,to.set(c,no(to.get(c)||null,e,t,n,i,s)),!0}return!1}function Eg(e){var t=dr(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Xf(e.priority,function(){Tg(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,Xf(e.priority,function(){Tg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ku(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Js=i,n.target.dispatchEvent(i),Js=null}else return t=fr(n),t!==null&&Sg(t),e.blockedOn=n,!1;t.shift()}return!0}function Ng(e,t,n){Gl(e)&&n.delete(t)}function jw(){Iu=!1,ba!==null&&Gl(ba)&&(ba=null),wa!==null&&Gl(wa)&&(wa=null),xa!==null&&Gl(xa)&&(xa=null),eo.forEach(Ng),to.forEach(Ng)}function $l(e,t){e.blockedOn===t&&(e.blockedOn=null,Iu||(Iu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,jw)))}var Ql=null;function zg(e){Ql!==e&&(Ql=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Ju(i||n)===null)continue;break}var c=fr(n);c!==null&&(e.splice(t,3),t-=3,Kc(c,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Qr(e){function t(k){return $l(k,e)}ba!==null&&$l(ba,e),wa!==null&&$l(wa,e),xa!==null&&$l(xa,e),eo.forEach(t),to.forEach(t);for(var n=0;n<_a.length;n++){var i=_a[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<_a.length&&(n=_a[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&_a.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],c=n[i+1],g=s[Mt]||null;if(typeof c=="function")g||zg(n);else if(g){var b=null;if(c&&c.hasAttribute("formAction")){if(s=c,g=c[Mt]||null)b=g.formAction;else if(Ju(s)!==null)continue}else b=g.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),zg(n)}}}function Ag(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return s=g})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Wu(e){this._internalRoot=e}Zl.prototype.render=Wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=Zt();xg(n,i,e,t,null,null)},Zl.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xg(e.current,2,null,e,null,null),Nl(),t[ur]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_a.length&&t!==0&&t<_a[n].priority;n++);_a.splice(n,0,e),n===0&&Eg(e)}};var Mg=r.version;if(Mg!=="19.2.4")throw Error(l(527,Mg,"19.2.4"));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=v(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Lw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{di=Kl.inject(Lw),Yt=Kl}catch{}}return so.createRoot=function(e,t){if(!u(e))throw Error(l(299));var n=!1,i="",s=Lp,c=Bp,g=Yp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=bg(e,1,!1,null,null,n,i,null,s,c,g,Ag),e[ur]=t.current,Ou(e),new Wu(t)},so.hydrateRoot=function(e,t,n){if(!u(e))throw Error(l(299));var i=!1,s="",c=Lp,g=Bp,b=Yp,k=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(k=n.formState)),t=bg(e,1,!0,t,n??null,i,s,k,c,g,b,Ag),t.context=wg(null),n=t.current,i=Zt(),i=qs(i),s=la(i),s.callback=null,sa(n,s,i),n=i,t.current.lanes=n,hi(t,n),Sn(t),e[ur]=t.current,Ou(e),new Zl(t)},so.version="19.2.4",so}var Zv;function rT(){if(Zv)return _d.exports;Zv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),_d.exports=aT(),_d.exports}var iT=rT();const oT=()=>{const[a,r]=Ae.useState(null),[o,l]=Ae.useState(!0),[u,d]=Ae.useState(null);return Ae.useEffect(()=>{(async()=>{l(!0);try{const p=await fetch("/RSS-REACT-2026Q2/performance/data/owid-co2-data.json");if(!p.ok)throw new Error("Failed to fetch CO2 data");const m=await p.json(),v=Object.entries(m).map(([x,y])=>{const _=y;return{id:x,iso_code:_.iso_code,data:_.data}});r(v),d(null)}catch(p){console.error(p),d(p instanceof Error?p.message:"Unknown error"),r(null)}finally{l(!1)}})()},[]),{data:a,isLoading:o,error:u}},lT="_container_1m5gd_1",sT={container:lT},cT=()=>oe.jsx("div",{className:sT.container,children:oe.jsx("div",{className:"spinner",children:"Loading CO2 data..."})}),uT="_container_16mu1_1",dT="_label_16mu1_5",fT="_input_16mu1_9",kd={container:uT,label:dT,input:fT},hT=Ae.memo(({value:a,onChange:r})=>oe.jsxs("div",{className:kd.container,children:[oe.jsx("label",{htmlFor:"search",className:kd.label,children:"Search countries:"}),oe.jsx("input",{id:"search",type:"text",value:a,onChange:o=>r(o.target.value),placeholder:"Type to search...",className:kd.input})]})),pT="_container_8lebf_1",mT="_label_8lebf_5",gT="_select_8lebf_9",Ed={container:pT,label:mT,select:gT},vT=Ae.memo(({year:a,years:r,onChange:o})=>oe.jsxs("div",{className:Ed.container,children:[oe.jsx("label",{htmlFor:"year",className:Ed.label,children:"Select year:"}),oe.jsx("select",{id:"year",value:a,onChange:l=>o(Number(l.target.value)),className:Ed.select,children:r.map(l=>oe.jsx("option",{value:l,children:l},l))})]})),ef=(a,r)=>a==null?"N/A":a.toLocaleString("en-US",r??{maximumFractionDigits:0}),yT="_table_117q5_1",bT="_row_117q5_7",wT="_labelCell_117q5_11",xT="_valueCell_117q5_17",_T="_noData_117q5_21",co={table:yT,row:bT,labelCell:wT,valueCell:xT,noData:_T},ST=Ae.memo(({data:a,year:r,columns:o})=>{const l=Ae.useMemo(()=>a.filter(d=>d.year===r),[a,r]);if(l.length===0)return oe.jsxs("div",{className:co.noData,children:["No data available for year ",r]});const u=l[0];return oe.jsx("table",{className:co.table,children:oe.jsx("tbody",{children:o.map(d=>oe.jsxs("tr",{className:co.row,children:[oe.jsx("td",{className:co.labelCell,children:d.replace(/_/g," ").toUpperCase()}),oe.jsx("td",{className:co.valueCell,children:ef(u[d],{maximumFractionDigits:2})})]},d))})})}),TT=()=>["year","population","co2","co2_per_capita","cement_co2","cement_co2_per_capita","coal_co2","coal_co2_per_capita","gas_co2","gas_co2_per_capita","oil_co2","oil_co2_per_capita","methane","methane_per_capita","nitrous_oxide","nitrous_oxide_per_capita","temperature_change_from_co2","total_ghg","total_ghg_per_capita"],gy=a=>{const r=new Map;return a.forEach(o=>{r.set(o.year,o)}),r},tf=(a,r)=>a.get(r)?.population,CT=(a,r)=>a.get(r)?.co2,kT=a=>{const r=new Set;return a.forEach(o=>{o.data.forEach(l=>{r.add(l.year)})}),Array.from(r).sort((o,l)=>o-l)},ET="_card_16s5s_1",NT="_header_16s5s_9",zT="_title_16s5s_16",AT="_isoCode_16s5s_20",MT="_stats_16s5s_27",uo={card:ET,header:NT,title:zT,isoCode:AT,stats:MT},DT=Ae.memo(({country:a,selectedYear:r,selectedColumns:o})=>{const l=Ae.useMemo(()=>gy(a.data),[a.data]),u=Ae.useMemo(()=>tf(l,r),[l,r]),d=Ae.useMemo(()=>CT(l,r),[l,r]);return oe.jsxs("div",{className:uo.card,children:[oe.jsxs("div",{className:uo.header,children:[oe.jsx("h3",{className:uo.title,children:a.id}),a.iso_code&&oe.jsx("span",{className:uo.isoCode,children:a.iso_code})]}),oe.jsxs("div",{className:uo.stats,children:[oe.jsxs("div",{children:["Population (",r,"): ",ef(u)]}),oe.jsxs("div",{children:["CO₂ Emissions (",r,"): ",ef(d)," tonnes"]})]}),oe.jsx(ST,{data:a.data,year:r,columns:o})]})}),OT="_scrollContainer_1m8pl_2",Kv={scrollContainer:OT},Jv=3,RT=296,UT=600,HT=20,jT=Ae.memo(({countries:a,searchQuery:r,selectedColumns:o,selectedRegion:l,selectedYear:u,sortField:d,sortOrder:h})=>{const[p,m]=Ae.useState(0),[v,x]=Ae.useState(UT),[y,_]=Ae.useState(RT),S=Ae.useMemo(()=>Object.fromEntries(a.map(I=>[I.id,gy(I.data)])),[a]),E=Ae.useMemo(()=>a.filter(I=>{const ve=I.id.toLowerCase().includes(r.toLowerCase()),Ee=!l||I.data.some(Me=>Me.region===l);return ve&&Ee}).sort((I,ve)=>{if(d==="name")return h==="asc"?I.id.localeCompare(ve.id):ve.id.localeCompare(I.id);{const Ee=tf(S[I.id],u)||0,Me=tf(S[ve.id],u)||0;return h==="asc"?Ee-Me:Me-Ee}}),[a,r,l,u,d,h,S]),A=Ae.useRef(null),[U,C]=Ae.useState(""),D=`${r}-${l}-${d}-${h}`;D!==U&&(C(D),p!==0&&m(0)),Ae.useEffect(()=>{A.current&&(A.current.scrollTop=0)},[r,l,d,h]);const q=Ae.useCallback(()=>{if(A.current){const I=A.current.getBoundingClientRect(),ve=I.top+y>window.innerHeight?window.innerHeight:window.innerHeight-I.top-HT;ve>0&&x(ve)}},[y]);Ae.useEffect(()=>(q(),window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)),[q]);const Q=Ae.useCallback(I=>{if(I){const ve=I.getBoundingClientRect().height;ve>0&&ve!==y&&_(ve)}},[]),Z=E.length,P=Z*y;let W=Math.floor(p/y)-Jv;W=Math.max(0,W);let de=Math.floor((p+v)/y)+Jv;de=Math.min(Z,de);const se=Ae.useMemo(()=>E.slice(W,de),[E,W,de]),ge=W*y,ue=I=>{m(I.currentTarget.scrollTop)};return Z===0?oe.jsx("div",{className:Kv.noResults,children:"No countries found"}):oe.jsx("div",{ref:A,className:Kv.scrollContainer,style:{height:v},onScroll:ue,children:oe.jsx("div",{style:{height:P,width:"100%"},children:oe.jsx("div",{style:{transform:`translateY(${ge}px)`,width:"100%"},children:se.map((I,ve)=>{const Ee=ve===0;return oe.jsx("div",{ref:Ee?Q:void 0,children:oe.jsx(DT,{country:I,selectedYear:u,selectedColumns:o})},I.id)})})})})}),LT="_overlay_zpkao_1",BT="_modal_zpkao_14",YT="_title_zpkao_23",XT="_columnList_zpkao_28",qT="_columnItem_zpkao_32",VT="_checkbox_zpkao_36",FT="_buttonContainer_zpkao_40",GT="_closeButton_zpkao_46",ka={overlay:LT,modal:BT,title:YT,columnList:XT,columnItem:qT,checkbox:VT,buttonContainer:FT,closeButton:GT},$T=Ae.memo(({isOpen:a,availableColumns:r,selectedColumns:o,onToggle:l,onClose:u})=>a?oe.jsx("div",{className:ka.overlay,children:oe.jsxs("div",{className:ka.modal,children:[oe.jsx("h2",{className:ka.title,children:"Select columns to display"}),oe.jsx("div",{className:ka.columnList,children:r.map(d=>oe.jsx("div",{className:ka.columnItem,children:oe.jsxs("label",{children:[oe.jsx("input",{type:"checkbox",checked:o.includes(d),onChange:()=>l(d),className:ka.checkbox}),d]})},d))}),oe.jsx("div",{className:ka.buttonContainer,children:oe.jsx("button",{onClick:u,className:ka.closeButton,children:"Close"})})]})}):null),QT="_container_kqzw8_1",ZT="_title_kqzw8_7",KT="_controls_kqzw8_12",JT="_sortContainer_kqzw8_19",IT="_sortLabel_kqzw8_23",WT="_sortSelect_kqzw8_27",PT="_sortButton_kqzw8_33",e4="_columnButtonContainer_kqzw8_39",t4="_columnButton_kqzw8_39",n4="_errorMessage_kqzw8_49",a4="_noDataMessage_kqzw8_54",pn={container:QT,title:ZT,controls:KT,sortContainer:JT,sortLabel:IT,sortSelect:WT,sortButton:PT,columnButtonContainer:e4,columnButton:t4,errorMessage:n4,noDataMessage:a4},r4=()=>{const{data:a,isLoading:r,error:o}=oT(),[l,u]=Ae.useState({searchQuery:"",selectedRegion:"",selectedYear:2020,sortField:"population",sortOrder:"desc",selectedColumns:["year","population","co2","co2_per_capita"],isColumnModalOpen:!1}),d=Ae.useMemo(()=>a?kT(a):[],[a]),h=Ae.useMemo(()=>TT(),[]),p=Ae.useCallback(S=>{u(E=>({...E,searchQuery:S}))},[]),m=Ae.useCallback(S=>{u(E=>({...E,selectedYear:S}))},[]),v=Ae.useCallback(S=>{u(E=>({...E,sortField:S}))},[]),x=Ae.useCallback(()=>{u(S=>({...S,sortOrder:S.sortOrder==="asc"?"desc":"asc"}))},[]),y=Ae.useCallback(S=>{u(E=>({...E,selectedColumns:E.selectedColumns.includes(S)?E.selectedColumns.filter(A=>A!==S):[...E.selectedColumns,S]}))},[]),_=Ae.useCallback(()=>{u(S=>({...S,isColumnModalOpen:!S.isColumnModalOpen}))},[]);return r?oe.jsx(cT,{}):o?oe.jsxs("div",{className:pn.errorMessage,children:["Error: ",o]}):a?oe.jsxs("div",{className:pn.container,children:[oe.jsx("h1",{className:pn.title,children:"CO₂ Emissions Data Explorer"}),oe.jsxs("div",{className:pn.controls,children:[oe.jsx(hT,{value:l.searchQuery,onChange:p}),oe.jsx(vT,{year:l.selectedYear,years:d,onChange:m}),oe.jsxs("div",{className:pn.sortContainer,children:[oe.jsx("label",{className:pn.sortLabel,children:"Sort by:"}),oe.jsxs("select",{value:l.sortField,onChange:S=>v(S.target.value),className:pn.sortSelect,children:[oe.jsx("option",{value:"population",children:"Population"}),oe.jsx("option",{value:"name",children:"Name"})]}),oe.jsx("button",{onClick:x,className:pn.sortButton,children:l.sortOrder==="asc"?"Ascending":"Descending"})]}),oe.jsx("div",{className:pn.columnButtonContainer,children:oe.jsxs("button",{onClick:_,className:pn.columnButton,children:["Select columns (",l.selectedColumns.length," selected)"]})})]}),oe.jsx(jT,{countries:a,searchQuery:l.searchQuery,selectedColumns:l.selectedColumns,selectedRegion:l.selectedRegion,selectedYear:l.selectedYear,sortField:l.sortField,sortOrder:l.sortOrder,onYearChange:m}),oe.jsx($T,{isOpen:l.isColumnModalOpen,availableColumns:h,selectedColumns:l.selectedColumns,onToggle:y,onClose:_})]}):oe.jsx("div",{className:pn.noDataMessage,children:"No data available"})};IS({enabled:!0});iT.createRoot(document.getElementById("root")).render(oe.jsx(Ae.StrictMode,{children:oe.jsx(r4,{})}));
