(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();let Ta="either";function ei(){return Ta}function ti(t){Ta=t}let sc="locked";const zr=new Set,me={get state(){return sc},subscribe(t){return zr.add(t),()=>{zr.delete(t)}},_set(t){sc=t,zr.forEach(e=>e(t))}};let ni=null,si=null,ri=null,As=null;function rs(t){t.kek,ni=t.dekVault,si=t.dekKeystore,ri=t.dekExport,As=t.prfKemSecretKey??null}function bu(){return Ma(),si}function ku(){return Ma(),ri}function Eu(){ni=si=ri=null,As&&(As.fill(0),As=null)}function Ma(){if(!ni)throw new Error("VaultLocked — call unlock first")}const Su="modulepreload",xu=function(t){return"/"+t},rc={},kr=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let i=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),a=c?.nonce||c?.getAttribute("nonce");r=i(n.map(l=>{if(l=xu(l),l in rc)return;rc[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Su,d||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),d)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return r.then(i=>{for(const c of i||[])c.status==="rejected"&&o(c.reason);return e().catch(o)})},Me=()=>new Map,Co=t=>{const e=Me();return t.forEach((n,s)=>{e.set(s,n)}),e},mt=(t,e,n)=>{let s=t.get(e);return s===void 0&&t.set(e,s=n()),s},Au=(t,e)=>{const n=[];for(const[s,r]of t)n.push(e(r,s));return n},Cu=(t,e)=>{for(const[n,s]of t)if(e(s,n))return!0;return!1},rn=()=>new Set,Gr=t=>t[t.length-1],_u=(t,e)=>{for(let n=0;n<e.length;n++)t.push(e[n])},Lt=Array.from,oi=(t,e)=>{for(let n=0;n<t.length;n++)if(!e(t[n],n,t))return!1;return!0},Oa=(t,e)=>{for(let n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1},Iu=(t,e)=>{const n=new Array(t);for(let s=0;s<t;s++)n[s]=e(s,n);return n},Er=Array.isArray;class Lu{constructor(){this._observers=Me()}on(e,n){return mt(this._observers,e,rn).add(n),n}once(e,n){const s=(...r)=>{this.off(e,s),n(...r)};this.on(e,s)}off(e,n){const s=this._observers.get(e);s!==void 0&&(s.delete(n),s.size===0&&this._observers.delete(e))}emit(e,n){return Lt((this._observers.get(e)||Me()).values()).forEach(s=>s(...n))}destroy(){this._observers=Me()}}const ze=Math.floor,Cs=Math.abs,Pa=(t,e)=>t<e?t:e,Ot=(t,e)=>t>e?t:e,Ka=t=>t!==0?t<0:1/t<0,oc=1,ic=2,Wr=4,Yr=8,$n=32,ot=64,Ee=128,Sr=31,_o=63,At=127,Du=2147483647,$s=Number.MAX_SAFE_INTEGER,cc=Number.MIN_SAFE_INTEGER,Bu=Number.isInteger||(t=>typeof t=="number"&&isFinite(t)&&ze(t)===t),Ru=String.fromCharCode,Tu=t=>t.toLowerCase(),Mu=/^\s*/g,Ou=t=>t.replace(Mu,""),Pu=/([A-Z])/g,ac=(t,e)=>Ou(t.replace(Pu,n=>`${e}${Tu(n)}`)),Ku=t=>{const e=unescape(encodeURIComponent(t)),n=e.length,s=new Uint8Array(n);for(let r=0;r<n;r++)s[r]=e.codePointAt(r);return s},Vn=typeof TextEncoder<"u"?new TextEncoder:null,Nu=t=>Vn.encode(t),Uu=Vn?Nu:Ku;let Dn=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});Dn&&Dn.decode(new Uint8Array).length===1&&(Dn=null);const $u=(t,e)=>Iu(e,()=>t).join("");class os{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const xr=()=>new os,Vu=t=>{let e=t.cpos;for(let n=0;n<t.bufs.length;n++)e+=t.bufs[n].length;return e},qe=t=>{const e=new Uint8Array(Vu(t));let n=0;for(let s=0;s<t.bufs.length;s++){const r=t.bufs[s];e.set(r,n),n+=r.length}return e.set(new Uint8Array(t.cbuf.buffer,0,t.cpos),n),e},Fu=(t,e)=>{const n=t.cbuf.length;n-t.cpos<e&&(t.bufs.push(new Uint8Array(t.cbuf.buffer,0,t.cpos)),t.cbuf=new Uint8Array(Ot(n,e)*2),t.cpos=0)},ie=(t,e)=>{const n=t.cbuf.length;t.cpos===n&&(t.bufs.push(t.cbuf),t.cbuf=new Uint8Array(n*2),t.cpos=0),t.cbuf[t.cpos++]=e},Io=ie,U=(t,e)=>{for(;e>At;)ie(t,Ee|At&e),e=ze(e/128);ie(t,At&e)},ii=(t,e)=>{const n=Ka(e);for(n&&(e=-e),ie(t,(e>_o?Ee:0)|(n?ot:0)|_o&e),e=ze(e/64);e>0;)ie(t,(e>At?Ee:0)|At&e),e=ze(e/128)},Lo=new Uint8Array(3e4),ju=Lo.length/3,qu=(t,e)=>{if(e.length<ju){const n=Vn.encodeInto(e,Lo).written||0;U(t,n);for(let s=0;s<n;s++)ie(t,Lo[s])}else ve(t,Uu(e))},Hu=(t,e)=>{const n=unescape(encodeURIComponent(e)),s=n.length;U(t,s);for(let r=0;r<s;r++)ie(t,n.codePointAt(r))},Gt=Vn&&Vn.encodeInto?qu:Hu,Ar=(t,e)=>{const n=t.cbuf.length,s=t.cpos,r=Pa(n-s,e.length),o=e.length-r;t.cbuf.set(e.subarray(0,r),s),t.cpos+=r,o>0&&(t.bufs.push(t.cbuf),t.cbuf=new Uint8Array(Ot(n*2,o)),t.cbuf.set(e.subarray(r)),t.cpos=o)},ve=(t,e)=>{U(t,e.byteLength),Ar(t,e)},ci=(t,e)=>{Fu(t,e);const n=new DataView(t.cbuf.buffer,t.cpos,e);return t.cpos+=e,n},zu=(t,e)=>ci(t,4).setFloat32(0,e,!1),Gu=(t,e)=>ci(t,8).setFloat64(0,e,!1),Wu=(t,e)=>ci(t,8).setBigInt64(0,e,!1),lc=new DataView(new ArrayBuffer(4)),Yu=t=>(lc.setFloat32(0,t),lc.getFloat32(0)===t),Fn=(t,e)=>{switch(typeof e){case"string":ie(t,119),Gt(t,e);break;case"number":Bu(e)&&Cs(e)<=Du?(ie(t,125),ii(t,e)):Yu(e)?(ie(t,124),zu(t,e)):(ie(t,123),Gu(t,e));break;case"bigint":ie(t,122),Wu(t,e);break;case"object":if(e===null)ie(t,126);else if(Er(e)){ie(t,117),U(t,e.length);for(let n=0;n<e.length;n++)Fn(t,e[n])}else if(e instanceof Uint8Array)ie(t,116),ve(t,e);else{ie(t,118);const n=Object.keys(e);U(t,n.length);for(let s=0;s<n.length;s++){const r=n[s];Gt(t,r),Fn(t,e[r])}}break;case"boolean":ie(t,e?120:121);break;default:ie(t,127)}};class dc extends os{constructor(e){super(),this.w=e,this.s=null,this.count=0}write(e){this.s===e?this.count++:(this.count>0&&U(this,this.count-1),this.count=1,this.w(this,e),this.s=e)}}const uc=t=>{t.count>0&&(ii(t.encoder,t.count===1?t.s:-t.s),t.count>1&&U(t.encoder,t.count-2))};class _s{constructor(){this.encoder=new os,this.s=0,this.count=0}write(e){this.s===e?this.count++:(uc(this),this.count=1,this.s=e)}toUint8Array(){return uc(this),qe(this.encoder)}}const fc=t=>{if(t.count>0){const e=t.diff*2+(t.count===1?0:1);ii(t.encoder,e),t.count>1&&U(t.encoder,t.count-2)}};class Xr{constructor(){this.encoder=new os,this.s=0,this.count=0,this.diff=0}write(e){this.diff===e-this.s?(this.s=e,this.count++):(fc(this),this.count=1,this.diff=e-this.s,this.s=e)}toUint8Array(){return fc(this),qe(this.encoder)}}class Xu{constructor(){this.sarr=[],this.s="",this.lensE=new _s}write(e){this.s+=e,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(e.length)}toUint8Array(){const e=new os;return this.sarr.push(this.s),this.s="",Gt(e,this.sarr.join("")),Ar(e,this.lensE.toUint8Array()),qe(e)}}const Ge=t=>new Error(t),Oe=()=>{throw Ge("Method unimplemented")},Ie=()=>{throw Ge("Unexpected case")},Na=Ge("Unexpected end of array"),Ua=Ge("Integer out of Range");class Cr{constructor(e){this.arr=e,this.pos=0}}const yn=t=>new Cr(t),Ju=t=>t.pos!==t.arr.length,Zu=(t,e)=>{const n=new Uint8Array(t.arr.buffer,t.pos+t.arr.byteOffset,e);return t.pos+=e,n},be=t=>Zu(t,R(t)),on=t=>t.arr[t.pos++],R=t=>{let e=0,n=1;const s=t.arr.length;for(;t.pos<s;){const r=t.arr[t.pos++];if(e=e+(r&At)*n,n*=128,r<Ee)return e;if(e>$s)throw Ua}throw Na},ai=t=>{let e=t.arr[t.pos++],n=e&_o,s=64;const r=(e&ot)>0?-1:1;if((e&Ee)===0)return r*n;const o=t.arr.length;for(;t.pos<o;){if(e=t.arr[t.pos++],n=n+(e&At)*s,s*=128,e<Ee)return r*n;if(n>$s)throw Ua}throw Na},Qu=t=>{let e=R(t);if(e===0)return"";{let n=String.fromCodePoint(on(t));if(--e<100)for(;e--;)n+=String.fromCodePoint(on(t));else for(;e>0;){const s=e<1e4?e:1e4,r=t.arr.subarray(t.pos,t.pos+s);t.pos+=s,n+=String.fromCodePoint.apply(null,r),e-=s}return decodeURIComponent(escape(n))}},ef=t=>Dn.decode(be(t)),Wt=Dn?ef:Qu,li=(t,e)=>{const n=new DataView(t.arr.buffer,t.arr.byteOffset+t.pos,e);return t.pos+=e,n},tf=t=>li(t,4).getFloat32(0,!1),nf=t=>li(t,8).getFloat64(0,!1),sf=t=>li(t,8).getBigInt64(0,!1),rf=[t=>{},t=>null,ai,tf,nf,sf,t=>!1,t=>!0,Wt,t=>{const e=R(t),n={};for(let s=0;s<e;s++){const r=Wt(t);n[r]=jn(t)}return n},t=>{const e=R(t),n=[];for(let s=0;s<e;s++)n.push(jn(t));return n},be],jn=t=>rf[127-on(t)](t);class hc extends Cr{constructor(e,n){super(e),this.reader=n,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),Ju(this)?this.count=R(this)+1:this.count=-1),this.count--,this.s}}class Is extends Cr{constructor(e){super(e),this.s=0,this.count=0}read(){if(this.count===0){this.s=ai(this);const e=Ka(this.s);this.count=1,e&&(this.s=-this.s,this.count=R(this)+2)}return this.count--,this.s}}class Jr extends Cr{constructor(e){super(e),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){const e=ai(this),n=e&1;this.diff=ze(e/2),this.count=1,n&&(this.count=R(this)+2)}return this.s+=this.diff,this.count--,this.s}}class of{constructor(e){this.decoder=new Is(e),this.str=Wt(this.decoder),this.spos=0}read(){const e=this.spos+this.decoder.read(),n=this.str.slice(this.spos,e);return this.spos=e,n}}const cf=crypto.getRandomValues.bind(crypto),$a=()=>cf(new Uint32Array(1))[0],af="10000000-1000-4000-8000"+-1e11,lf=()=>af.replace(/[018]/g,t=>(t^$a()&15>>t/4).toString(16)),pc=t=>new Promise(t);Promise.all.bind(Promise);const yc=t=>t===void 0?null:t;class df{constructor(){this.map=new Map}setItem(e,n){this.map.set(e,n)}getItem(e){return this.map.get(e)}}let Va=new df,uf=!0;try{typeof localStorage<"u"&&localStorage&&(Va=localStorage,uf=!1)}catch{}const ff=Va,qn=Symbol("Equality"),Fa=(t,e)=>t===e||!!t?.[qn]?.(e)||!1,hf=t=>typeof t=="object",pf=Object.assign,yf=Object.keys,gf=(t,e)=>{for(const n in t)e(t[n],n)},Vs=t=>yf(t).length,wf=t=>{for(const e in t)return!1;return!0},is=(t,e)=>{for(const n in t)if(!e(t[n],n))return!1;return!0},di=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),mf=(t,e)=>t===e||Vs(t)===Vs(e)&&is(t,(n,s)=>(n!==void 0||di(e,s))&&Fa(e[s],n)),vf=Object.freeze,ja=t=>{for(const e in t){const n=t[e];(typeof n=="object"||typeof n=="function")&&ja(t[e])}return vf(t)},ui=(t,e,n=0)=>{try{for(;n<t.length;n++)t[n](...e)}finally{n<t.length&&ui(t,e,n+1)}},bf=t=>t,Ls=(t,e)=>{if(t===e)return!0;if(t==null||e==null||t.constructor!==e.constructor&&(t.constructor||Object)!==(e.constructor||Object))return!1;if(t[qn]!=null)return t[qn](e);switch(t.constructor){case ArrayBuffer:t=new Uint8Array(t),e=new Uint8Array(e);case Uint8Array:{if(t.byteLength!==e.byteLength)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;break}case Set:{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;break}case Map:{if(t.size!==e.size)return!1;for(const n of t.keys())if(!e.has(n)||!Ls(t.get(n),e.get(n)))return!1;break}case void 0:case Object:if(Vs(t)!==Vs(e))return!1;for(const n in t)if(!di(t,n)||!Ls(t[n],e[n]))return!1;break;case Array:if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!Ls(t[n],e[n]))return!1;break;default:return!1}return!0},kf=(t,e)=>e.includes(t);var qa={};const Hn=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";let Ve;const Ef=()=>{if(Ve===void 0)if(Hn){Ve=Me();const t=process.argv;let e=null;for(let n=0;n<t.length;n++){const s=t[n];s[0]==="-"?(e!==null&&Ve.set(e,""),e=s):e!==null&&(Ve.set(e,s),e=null)}e!==null&&Ve.set(e,"")}else typeof location=="object"?(Ve=Me(),(location.search||"?").slice(1).split("&").forEach(t=>{if(t.length!==0){const[e,n]=t.split("=");Ve.set(`--${ac(e,"-")}`,n),Ve.set(`-${ac(e,"-")}`,n)}})):Ve=Me();return Ve},Do=t=>Ef().has(t),Fs=t=>yc(Hn?qa[t.toUpperCase().replaceAll("-","_")]:ff.getItem(t)),Ha=t=>Do("--"+t)||Fs(t)!==null,Sf=Ha("production"),xf=Hn&&kf(qa.FORCE_COLOR,["true","1","2"]),Af=xf||!Do("--no-colors")&&!Ha("no-color")&&(!Hn||process.stdout.isTTY)&&(!Hn||Do("--color")||Fs("COLORTERM")!==null||(Fs("TERM")||"").includes("color")),Cf=t=>new Uint8Array(t),_f=t=>{const e=Cf(t.byteLength);return e.set(t),e};class If{constructor(e,n){this.left=e,this.right=n}}const Qe=(t,e)=>new If(t,e),gc=t=>t.next()>=.5,Zr=(t,e,n)=>ze(t.next()*(n+1-e)+e),za=(t,e,n)=>ze(t.next()*(n+1-e)+e),fi=(t,e,n)=>za(t,e,n),Lf=t=>Ru(fi(t,97,122)),Df=(t,e=0,n=20)=>{const s=fi(t,e,n);let r="";for(let o=0;o<s;o++)r+=Lf(t);return r},Qr=(t,e)=>e[fi(t,0,e.length-1)],Bf=Symbol("0schema");class Rf{constructor(){this._rerrs=[]}extend(e,n,s,r=null){this._rerrs.push({path:e,expected:n,has:s,message:r})}toString(){const e=[];for(let n=this._rerrs.length-1;n>0;n--){const s=this._rerrs[n];e.push($u(" ",(this._rerrs.length-n)*2)+`${s.path!=null?`[${s.path}] `:""}${s.has} doesn't match ${s.expected}. ${s.message}`)}return e.join(`
`)}}const Bo=(t,e)=>t===e?!0:t==null||e==null||t.constructor!==e.constructor?!1:t[qn]?Fa(t,e):Er(t)?oi(t,n=>Oa(e,s=>Bo(n,s))):hf(t)?is(t,(n,s)=>Bo(n,e[s])):!1;class ye{static _dilutes=!1;extends(e){let[n,s]=[this.shape,e.shape];return this.constructor._dilutes&&([s,n]=[n,s]),Bo(n,s)}equals(e){return this.constructor===e.constructor&&Ls(this.shape,e.shape)}[Bf](){return!0}[qn](e){return this.equals(e)}validate(e){return this.check(e)}check(e,n){Oe()}get nullable(){return gn(this,Br)}get optional(){return new Ya(this)}cast(e){return wc(e,this),e}expect(e){return wc(e,this),e}}class hi extends ye{constructor(e,n){super(),this.shape=e,this._c=n}check(e,n=void 0){const s=e?.constructor===this.shape&&(this._c==null||this._c(e));return!s&&n?.extend(null,this.shape.name,e?.constructor.name,e?.constructor!==this.shape?"Constructor match failed":"Check failed"),s}}const ee=(t,e=null)=>new hi(t,e);ee(hi);class pi extends ye{constructor(e){super(),this.shape=e}check(e,n){const s=this.shape(e);return!s&&n?.extend(null,"custom prop",e?.constructor.name,"failed to check custom prop"),s}}const ae=t=>new pi(t);ee(pi);class _r extends ye{constructor(e){super(),this.shape=e}check(e,n){const s=this.shape.some(r=>r===e);return!s&&n?.extend(null,this.shape.join(" | "),e.toString()),s}}const Ir=(...t)=>new _r(t),Ga=ee(_r),Tf=RegExp.escape||(t=>t.replace(/[().|&,$^[\]]/g,e=>"\\"+e)),Wa=t=>{if(cn.check(t))return[Tf(t)];if(Ga.check(t))return t.shape.map(e=>e+"");if(rl.check(t))return["[+-]?\\d+.?\\d*"];if(ol.check(t))return[".*"];if(js.check(t))return t.shape.map(Wa).flat(1);Ie()};class Mf extends ye{constructor(e){super(),this.shape=e,this._r=new RegExp("^"+e.map(Wa).map(n=>`(${n.join("|")})`).join("")+"$")}check(e,n){const s=this._r.exec(e)!=null;return!s&&n?.extend(null,this._r.toString(),e.toString(),"String doesn't match string template."),s}}ee(Mf);const Of=Symbol("optional");class Ya extends ye{constructor(e){super(),this.shape=e}check(e,n){const s=e===void 0||this.shape.check(e);return!s&&n?.extend(null,"undefined (optional)","()"),s}get[Of](){return!0}}const Pf=ee(Ya);class Kf extends ye{check(e,n){return n?.extend(null,"never",typeof e),!1}}ee(Kf);class Lr extends ye{constructor(e,n=!1){super(),this.shape=e,this._isPartial=n}static _dilutes=!0;get partial(){return new Lr(this.shape,!0)}check(e,n){return e==null?(n?.extend(null,"object","null"),!1):is(this.shape,(s,r)=>{const o=this._isPartial&&!di(e,r)||s.check(e[r],n);return!o&&n?.extend(r.toString(),s.toString(),typeof e[r],"Object property does not match"),o})}}const Nf=t=>new Lr(t),Uf=ee(Lr),$f=ae(t=>t!=null&&(t.constructor===Object||t.constructor==null));class Xa extends ye{constructor(e,n){super(),this.shape={keys:e,values:n}}check(e,n){return e!=null&&is(e,(s,r)=>{const o=this.shape.keys.check(r,n);return!o&&n?.extend(r+"","Record",typeof e,o?"Key doesn't match schema":"Value doesn't match value"),o&&this.shape.values.check(s,n)})}}const Ja=(t,e)=>new Xa(t,e),Vf=ee(Xa);class Za extends ye{constructor(e){super(),this.shape=e}check(e,n){return e!=null&&is(this.shape,(s,r)=>{const o=s.check(e[r],n);return!o&&n?.extend(r.toString(),"Tuple",typeof s),o})}}const Ff=(...t)=>new Za(t);ee(Za);class Qa extends ye{constructor(e){super(),this.shape=e.length===1?e[0]:new yi(e)}check(e,n){const s=Er(e)&&oi(e,r=>this.shape.check(r));return!s&&n?.extend(null,"Array",""),s}}const el=(...t)=>new Qa(t),jf=ee(Qa),qf=ae(t=>Er(t));class tl extends ye{constructor(e,n){super(),this.shape=e,this._c=n}check(e,n){const s=e instanceof this.shape&&(this._c==null||this._c(e));return!s&&n?.extend(null,this.shape.name,e?.constructor.name),s}}const Hf=(t,e=null)=>new tl(t,e);ee(tl);const zf=Hf(ye);class Gf extends ye{constructor(e){super(),this.len=e.length-1,this.args=Ff(...e.slice(-1)),this.res=e[this.len]}check(e,n){const s=e.constructor===Function&&e.length<=this.len;return!s&&n?.extend(null,"function",typeof e),s}}const Wf=ee(Gf),Yf=ae(t=>typeof t=="function");class Xf extends ye{constructor(e){super(),this.shape=e}check(e,n){const s=oi(this.shape,r=>r.check(e,n));return!s&&n?.extend(null,"Intersectinon",typeof e),s}}ee(Xf,t=>t.shape.length>0);class yi extends ye{static _dilutes=!0;constructor(e){super(),this.shape=e}check(e,n){const s=Oa(this.shape,r=>r.check(e,n));return n?.extend(null,"Union",typeof e),s}}const gn=(...t)=>t.findIndex(e=>js.check(e))>=0?gn(...t.map(e=>zn(e)).map(e=>js.check(e)?e.shape:[e]).flat(1)):t.length===1?t[0]:new yi(t),js=ee(yi),nl=()=>!0,qs=ae(nl),Jf=ee(pi,t=>t.shape===nl),gi=ae(t=>typeof t=="bigint"),Zf=ae(t=>t===gi),sl=ae(t=>typeof t=="symbol");ae(t=>t===sl);const Yt=ae(t=>typeof t=="number"),rl=ae(t=>t===Yt),cn=ae(t=>typeof t=="string"),ol=ae(t=>t===cn),Dr=ae(t=>typeof t=="boolean"),Qf=ae(t=>t===Dr),il=Ir(void 0);ee(_r,t=>t.shape.length===1&&t.shape[0]===void 0);Ir(void 0);const Br=Ir(null),eh=ee(_r,t=>t.shape.length===1&&t.shape[0]===null);ee(Uint8Array);ee(hi,t=>t.shape===Uint8Array);const th=gn(Yt,cn,Br,il,gi,Dr,sl);(()=>{const t=el(qs),e=Ja(cn,qs),n=gn(Yt,cn,Br,Dr,t,e);return t.shape=n,e.shape.values=n,n})();const zn=t=>{if(zf.check(t))return t;if($f.check(t)){const e={};for(const n in t)e[n]=zn(t[n]);return Nf(e)}else{if(qf.check(t))return gn(...t.map(zn));if(th.check(t))return Ir(t);if(Yf.check(t))return ee(t)}Ie()},wc=Sf?()=>{}:(t,e)=>{const n=new Rf;if(!e.check(t,n))throw Ge(`Expected value to be of type ${e.constructor.name}.
${n.toString()}`)};class nh{constructor(e){this.patterns=[],this.$state=e}if(e,n){return this.patterns.push({if:zn(e),h:n}),this}else(e){return this.if(qs,e)}done(){return(e,n)=>{for(let s=0;s<this.patterns.length;s++){const r=this.patterns[s];if(r.if.check(e))return r.h(e,n)}throw Ge("Unhandled pattern")}}}const sh=t=>new nh(t),cl=sh(qs).if(rl,(t,e)=>Zr(e,cc,$s)).if(ol,(t,e)=>Df(e)).if(Qf,(t,e)=>gc(e)).if(Zf,(t,e)=>BigInt(Zr(e,cc,$s))).if(js,(t,e)=>Kt(e,Qr(e,t.shape))).if(Uf,(t,e)=>{const n={};for(const s in t.shape){let r=t.shape[s];if(Pf.check(r)){if(gc(e))continue;r=r.shape}n[s]=cl(r,e)}return n}).if(jf,(t,e)=>{const n=[],s=za(e,0,42);for(let r=0;r<s;r++)n.push(Kt(e,t.shape));return n}).if(Ga,(t,e)=>Qr(e,t.shape)).if(eh,(t,e)=>null).if(Wf,(t,e)=>{const n=Kt(e,t.res);return()=>n}).if(Jf,(t,e)=>Kt(e,Qr(e,[Yt,cn,Br,il,gi,Dr,el(Yt),Ja(gn("a","b","c"),Yt)]))).if(Vf,(t,e)=>{const n={},s=Zr(e,0,3);for(let r=0;r<s;r++){const o=Kt(e,t.shape.keys),i=Kt(e,t.shape.values);n[o]=i}return n}).done(),Kt=(t,e)=>cl(zn(e),t),Rr=typeof document<"u"?document:{};ae(t=>t.nodeType===ah);typeof DOMParser<"u"&&new DOMParser;ae(t=>t.nodeType===oh);ae(t=>t.nodeType===ih);const rh=t=>Au(t,(e,n)=>`${n}:${e};`).join(""),oh=Rr.ELEMENT_NODE,ih=Rr.TEXT_NODE,ch=Rr.DOCUMENT_NODE,ah=Rr.DOCUMENT_FRAGMENT_NODE;ae(t=>t.nodeType===ch);const ct=Symbol,al=ct(),ll=ct(),lh=ct(),dh=ct(),uh=ct(),dl=ct(),fh=ct(),wi=ct(),hh=ct(),ph=t=>{t.length===1&&t[0]?.constructor===Function&&(t=t[0]());const e=[],n=[];let s=0;for(;s<t.length;s++){const r=t[s];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)e.push(r);else if(r.constructor===Object)break}for(s>0&&n.push(e.join(""));s<t.length;s++){const r=t[s];r instanceof Symbol||n.push(r)}return n},yh={[al]:Qe("font-weight","bold"),[ll]:Qe("font-weight","normal"),[lh]:Qe("color","blue"),[uh]:Qe("color","green"),[dh]:Qe("color","grey"),[dl]:Qe("color","red"),[fh]:Qe("color","purple"),[wi]:Qe("color","orange"),[hh]:Qe("color","black")},gh=t=>{t.length===1&&t[0]?.constructor===Function&&(t=t[0]());const e=[],n=[],s=Me();let r=[],o=0;for(;o<t.length;o++){const i=t[o],c=yh[i];if(c!==void 0)s.set(c.left,c.right);else{if(i===void 0)break;if(i.constructor===String||i.constructor===Number){const a=rh(s);o>0||a.length>0?(e.push("%c"+i),n.push(a)):e.push(i)}else break}}for(o>0&&(r=n,r.unshift(e.join("")));o<t.length;o++){const i=t[o];i instanceof Symbol||r.push(i)}return r},ul=Af?gh:ph,wh=(...t)=>{console.log(...ul(t)),fl.forEach(e=>e.print(t))},mh=(...t)=>{console.warn(...ul(t)),t.unshift(wi),fl.forEach(e=>e.print(t))},fl=rn(),hl=t=>({[Symbol.iterator](){return this},next:t}),vh=(t,e)=>hl(()=>{let n;do n=t.next();while(!n.done&&!e(n.value));return n}),eo=(t,e)=>hl(()=>{const{done:n,value:s}=t.next();return{done:n,value:n?void 0:e(s)}});class Tr{constructor(e,n){this.clock=e,this.len=n}}class cs{constructor(){this.clients=new Map}}const pl=(t,e,n)=>e.clients.forEach((s,r)=>{const o=t.doc.store.clients.get(r);if(o!=null){const i=o[o.length-1],c=i.id.clock+i.length;for(let a=0,l=s[a];a<s.length&&l.clock<c;l=s[++a])xl(t,o,l.clock,l.len,n)}}),bh=(t,e)=>{let n=0,s=t.length-1;for(;n<=s;){const r=ze((n+s)/2),o=t[r],i=o.clock;if(i<=e){if(e<i+o.len)return r;n=r+1}else s=r-1}return null},yl=(t,e)=>{const n=t.clients.get(e.client);return n!==void 0&&bh(n,e.clock)!==null},mi=t=>{t.clients.forEach(e=>{e.sort((r,o)=>r.clock-o.clock);let n,s;for(n=1,s=1;n<e.length;n++){const r=e[s-1],o=e[n];r.clock+r.len>=o.clock?e[s-1]=new Tr(r.clock,Ot(r.len,o.clock+o.len-r.clock)):(s<n&&(e[s]=o),s++)}e.length=s})},kh=t=>{const e=new cs;for(let n=0;n<t.length;n++)t[n].clients.forEach((s,r)=>{if(!e.clients.has(r)){const o=s.slice();for(let i=n+1;i<t.length;i++)_u(o,t[i].clients.get(r)||[]);e.clients.set(r,o)}});return mi(e),e},Hs=(t,e,n,s)=>{mt(t.clients,e,()=>[]).push(new Tr(n,s))},Eh=()=>new cs,Sh=t=>{const e=Eh();return t.clients.forEach((n,s)=>{const r=[];for(let o=0;o<n.length;o++){const i=n[o];if(i.deleted){const c=i.id.clock;let a=i.length;if(o+1<n.length)for(let l=n[o+1];o+1<n.length&&l.deleted;l=n[++o+1])a+=l.length;r.push(new Tr(c,a))}}r.length>0&&e.clients.set(s,r)}),e},wn=(t,e)=>{U(t.restEncoder,e.clients.size),Lt(e.clients.entries()).sort((n,s)=>s[0]-n[0]).forEach(([n,s])=>{t.resetDsCurVal(),U(t.restEncoder,n);const r=s.length;U(t.restEncoder,r);for(let o=0;o<r;o++){const i=s[o];t.writeDsClock(i.clock),t.writeDsLen(i.len)}})},vi=t=>{const e=new cs,n=R(t.restDecoder);for(let s=0;s<n;s++){t.resetDsCurVal();const r=R(t.restDecoder),o=R(t.restDecoder);if(o>0){const i=mt(e.clients,r,()=>[]);for(let c=0;c<o;c++)i.push(new Tr(t.readDsClock(),t.readDsLen()))}}return e},mc=(t,e,n)=>{const s=new cs,r=R(t.restDecoder);for(let o=0;o<r;o++){t.resetDsCurVal();const i=R(t.restDecoder),c=R(t.restDecoder),a=n.clients.get(i)||[],l=ce(n,i);for(let d=0;d<c;d++){const u=t.readDsClock(),f=u+t.readDsLen();if(u<l){l<f&&Hs(s,i,l,f-l);let h=We(a,u),p=a[h];for(!p.deleted&&p.id.clock<u&&(a.splice(h+1,0,Zs(e,p,u-p.id.clock)),h++);h<a.length&&(p=a[h++],p.id.clock<f);)p.deleted||(f<p.id.clock+p.length&&a.splice(h,0,Zs(e,p,f-p.id.clock)),p.delete(e))}else Hs(s,i,u,f-u)}}if(s.clients.size>0){const o=new Bt;return U(o.restEncoder,0),wn(o,s),o.toUint8Array()}return null},gl=$a;class Dt extends Lu{constructor({guid:e=lf(),collectionid:n=null,gc:s=!0,gcFilter:r=()=>!0,meta:o=null,autoLoad:i=!1,shouldLoad:c=!0}={}){super(),this.gc=s,this.gcFilter=r,this.clientID=gl(),this.guid=e,this.collectionid=n,this.share=new Map,this.store=new El,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=c,this.autoLoad=i,this.meta=o,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=pc(l=>{this.on("load",()=>{this.isLoaded=!0,l(this)})});const a=()=>pc(l=>{const d=u=>{(u===void 0||u===!0)&&(this.off("sync",d),l())};this.on("sync",d)});this.on("sync",l=>{l===!1&&this.isSynced&&(this.whenSynced=a()),this.isSynced=l===void 0||l===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=a()}load(){const e=this._item;e!==null&&!this.shouldLoad&&q(e.parent.doc,n=>{n.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Lt(this.subdocs).map(e=>e.guid))}transact(e,n=null){return q(this,e,n)}get(e,n=de){const s=mt(this.share,e,()=>{const o=new n;return o._integrate(this,null),o}),r=s.constructor;if(n!==de&&r!==n)if(r===de){const o=new n;o._map=s._map,s._map.forEach(i=>{for(;i!==null;i=i.left)i.parent=o}),o._start=s._start;for(let i=o._start;i!==null;i=i.right)i.parent=o;return o._length=s._length,this.share.set(e,o),o._integrate(this,null),o}else throw new Error(`Type with the name ${e} has already been defined with a different constructor`);return s}getArray(e=""){return this.get(e,Jt)}getText(e=""){return this.get(e,dn)}getMap(e=""){return this.get(e,ln)}getXmlElement(e=""){return this.get(e,un)}getXmlFragment(e=""){return this.get(e,Rt)}toJSON(){const e={};return this.share.forEach((n,s)=>{e[s]=n.toJSON()}),e}destroy(){this.isDestroyed=!0,Lt(this.subdocs).forEach(n=>n.destroy());const e=this._item;if(e!==null){this._item=null;const n=e.content;n.doc=new Dt({guid:this.guid,...n.opts,shouldLoad:!1}),n.doc._item=e,q(e.parent.doc,s=>{const r=n.doc;e.deleted||s.subdocsAdded.add(r),s.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}}class wl{constructor(e){this.restDecoder=e}resetDsCurVal(){}readDsClock(){return R(this.restDecoder)}readDsLen(){return R(this.restDecoder)}}class ml extends wl{readLeftID(){return K(R(this.restDecoder),R(this.restDecoder))}readRightID(){return K(R(this.restDecoder),R(this.restDecoder))}readClient(){return R(this.restDecoder)}readInfo(){return on(this.restDecoder)}readString(){return Wt(this.restDecoder)}readParentInfo(){return R(this.restDecoder)===1}readTypeRef(){return R(this.restDecoder)}readLen(){return R(this.restDecoder)}readAny(){return jn(this.restDecoder)}readBuf(){return _f(be(this.restDecoder))}readJSON(){return JSON.parse(Wt(this.restDecoder))}readKey(){return Wt(this.restDecoder)}}class xh{constructor(e){this.dsCurrVal=0,this.restDecoder=e}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=R(this.restDecoder),this.dsCurrVal}readDsLen(){const e=R(this.restDecoder)+1;return this.dsCurrVal+=e,e}}class an extends xh{constructor(e){super(e),this.keys=[],R(e),this.keyClockDecoder=new Jr(be(e)),this.clientDecoder=new Is(be(e)),this.leftClockDecoder=new Jr(be(e)),this.rightClockDecoder=new Jr(be(e)),this.infoDecoder=new hc(be(e),on),this.stringDecoder=new of(be(e)),this.parentInfoDecoder=new hc(be(e),on),this.typeRefDecoder=new Is(be(e)),this.lenDecoder=new Is(be(e))}readLeftID(){return new Xt(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new Xt(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return jn(this.restDecoder)}readBuf(){return be(this.restDecoder)}readJSON(){return jn(this.restDecoder)}readKey(){const e=this.keyClockDecoder.read();if(e<this.keys.length)return this.keys[e];{const n=this.stringDecoder.read();return this.keys.push(n),n}}}class Ah{constructor(){this.restEncoder=xr()}toUint8Array(){return qe(this.restEncoder)}resetDsCurVal(){}writeDsClock(e){U(this.restEncoder,e)}writeDsLen(e){U(this.restEncoder,e)}}class as extends Ah{writeLeftID(e){U(this.restEncoder,e.client),U(this.restEncoder,e.clock)}writeRightID(e){U(this.restEncoder,e.client),U(this.restEncoder,e.clock)}writeClient(e){U(this.restEncoder,e)}writeInfo(e){Io(this.restEncoder,e)}writeString(e){Gt(this.restEncoder,e)}writeParentInfo(e){U(this.restEncoder,e?1:0)}writeTypeRef(e){U(this.restEncoder,e)}writeLen(e){U(this.restEncoder,e)}writeAny(e){Fn(this.restEncoder,e)}writeBuf(e){ve(this.restEncoder,e)}writeJSON(e){Gt(this.restEncoder,JSON.stringify(e))}writeKey(e){Gt(this.restEncoder,e)}}class Ch{constructor(){this.restEncoder=xr(),this.dsCurrVal=0}toUint8Array(){return qe(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(e){const n=e-this.dsCurrVal;this.dsCurrVal=e,U(this.restEncoder,n)}writeDsLen(e){e===0&&Ie(),U(this.restEncoder,e-1),this.dsCurrVal+=e}}class Bt extends Ch{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new Xr,this.clientEncoder=new _s,this.leftClockEncoder=new Xr,this.rightClockEncoder=new Xr,this.infoEncoder=new dc(Io),this.stringEncoder=new Xu,this.parentInfoEncoder=new dc(Io),this.typeRefEncoder=new _s,this.lenEncoder=new _s}toUint8Array(){const e=xr();return U(e,0),ve(e,this.keyClockEncoder.toUint8Array()),ve(e,this.clientEncoder.toUint8Array()),ve(e,this.leftClockEncoder.toUint8Array()),ve(e,this.rightClockEncoder.toUint8Array()),ve(e,qe(this.infoEncoder)),ve(e,this.stringEncoder.toUint8Array()),ve(e,qe(this.parentInfoEncoder)),ve(e,this.typeRefEncoder.toUint8Array()),ve(e,this.lenEncoder.toUint8Array()),Ar(e,qe(this.restEncoder)),qe(e)}writeLeftID(e){this.clientEncoder.write(e.client),this.leftClockEncoder.write(e.clock)}writeRightID(e){this.clientEncoder.write(e.client),this.rightClockEncoder.write(e.clock)}writeClient(e){this.clientEncoder.write(e)}writeInfo(e){this.infoEncoder.write(e)}writeString(e){this.stringEncoder.write(e)}writeParentInfo(e){this.parentInfoEncoder.write(e?1:0)}writeTypeRef(e){this.typeRefEncoder.write(e)}writeLen(e){this.lenEncoder.write(e)}writeAny(e){Fn(this.restEncoder,e)}writeBuf(e){ve(this.restEncoder,e)}writeJSON(e){Fn(this.restEncoder,e)}writeKey(e){const n=this.keyMap.get(e);n===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(e)):this.keyClockEncoder.write(n)}}const _h=(t,e,n,s)=>{s=Ot(s,e[0].id.clock);const r=We(e,s);U(t.restEncoder,e.length-r),t.writeClient(n),U(t.restEncoder,s);const o=e[r];o.write(t,s-o.id.clock);for(let i=r+1;i<e.length;i++)e[i].write(t,0)},bi=(t,e,n)=>{const s=new Map;n.forEach((r,o)=>{ce(e,o)>r&&s.set(o,r)}),ki(e).forEach((r,o)=>{n.has(o)||s.set(o,0)}),U(t.restEncoder,s.size),Lt(s.entries()).sort((r,o)=>o[0]-r[0]).forEach(([r,o])=>{_h(t,e.clients.get(r),r,o)})},Ih=(t,e)=>{const n=Me(),s=R(t.restDecoder);for(let r=0;r<s;r++){const o=R(t.restDecoder),i=new Array(o),c=t.readClient();let a=R(t.restDecoder);n.set(c,{i:0,refs:i});for(let l=0;l<o;l++){const d=t.readInfo();switch(Sr&d){case 0:{const u=t.readLen();i[l]=new Ae(K(c,a),u),a+=u;break}case 10:{const u=R(t.restDecoder);i[l]=new Ce(K(c,a),u),a+=u;break}default:{const u=(d&(ot|Ee))===0,f=new re(K(c,a),null,(d&Ee)===Ee?t.readLeftID():null,null,(d&ot)===ot?t.readRightID():null,u?t.readParentInfo()?e.get(t.readString()):t.readLeftID():null,u&&(d&$n)===$n?t.readString():null,jl(t,d));i[l]=f,a+=f.length}}}}return n},Lh=(t,e,n)=>{const s=[];let r=Lt(n.keys()).sort((h,p)=>h-p);if(r.length===0)return null;const o=()=>{if(r.length===0)return null;let h=n.get(r[r.length-1]);for(;h.refs.length===h.i;)if(r.pop(),r.length>0)h=n.get(r[r.length-1]);else return null;return h};let i=o();if(i===null)return null;const c=new El,a=new Map,l=(h,p)=>{const m=a.get(h);(m==null||m>p)&&a.set(h,p)};let d=i.refs[i.i++];const u=new Map,f=()=>{for(const h of s){const p=h.id.client,m=n.get(p);m?(m.i--,c.clients.set(p,m.refs.slice(m.i)),n.delete(p),m.i=0,m.refs=[]):c.clients.set(p,[h]),r=r.filter(w=>w!==p)}s.length=0};for(;;){if(d.constructor!==Ce){const p=mt(u,d.id.client,()=>ce(e,d.id.client))-d.id.clock;if(p<0)s.push(d),l(d.id.client,d.id.clock-1),f();else{const m=d.getMissing(t,e);if(m!==null){s.push(d);const w=n.get(m)||{refs:[],i:0};if(w.refs.length===w.i)l(m,ce(e,m)),f();else{d=w.refs[w.i++];continue}}else(p===0||p<d.length)&&(d.integrate(t,p),u.set(d.id.client,d.id.clock+d.length))}}if(s.length>0)d=s.pop();else if(i!==null&&i.i<i.refs.length)d=i.refs[i.i++];else{if(i=o(),i===null)break;d=i.refs[i.i++]}}if(c.clients.size>0){const h=new Bt;return bi(h,c,new Map),U(h.restEncoder,0),{missing:a,update:h.toUint8Array()}}return null},Dh=(t,e)=>bi(t,e.doc.store,e.beforeState),Bh=(t,e,n,s=new an(t))=>q(e,r=>{r.local=!1;let o=!1;const i=r.doc,c=i.store,a=Ih(s,i),l=Lh(r,c,a),d=c.pendingStructs;if(d){for(const[f,h]of d.missing)if(h<ce(c,f)){o=!0;break}if(l){for(const[f,h]of l.missing){const p=d.missing.get(f);(p==null||p>h)&&d.missing.set(f,h)}d.update=zs([d.update,l.update])}}else c.pendingStructs=l;const u=mc(s,r,c);if(c.pendingDs){const f=new an(yn(c.pendingDs));R(f.restDecoder);const h=mc(f,r,c);u&&h?c.pendingDs=zs([u,h]):c.pendingDs=u||h}else c.pendingDs=u;if(o){const f=c.pendingStructs.update;c.pendingStructs=null,vl(r.doc,f)}},n,!1),vl=(t,e,n,s=an)=>{const r=yn(e);Bh(r,t,n,new s(r))},Rh=(t,e,n)=>vl(t,e,n,ml),Th=(t,e,n=new Map)=>{bi(t,e.store,n),wn(t,Sh(e.store))},Mh=(t,e=new Uint8Array([0]),n=new Bt)=>{const s=bl(e);Th(n,t,s);const r=[n.toUint8Array()];if(t.store.pendingDs&&r.push(t.store.pendingDs),t.store.pendingStructs&&r.push(Gh(t.store.pendingStructs.update,e)),r.length>1){if(n.constructor===as)return Hh(r.map((o,i)=>i===0?o:Yh(o)));if(n.constructor===Bt)return zs(r)}return r[0]},Oh=(t,e)=>Mh(t,e,new as),Ph=t=>{const e=new Map,n=R(t.restDecoder);for(let s=0;s<n;s++){const r=R(t.restDecoder),o=R(t.restDecoder);e.set(r,o)}return e},bl=t=>Ph(new wl(yn(t)));class Kh{constructor(){this.l=[]}}const vc=()=>new Kh,bc=(t,e)=>t.l.push(e),kc=(t,e)=>{const n=t.l,s=n.length;t.l=n.filter(r=>e!==r),s===t.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},kl=(t,e,n)=>ui(t.l,[e,n]);class Xt{constructor(e,n){this.client=e,this.clock=n}}const ps=(t,e)=>t===e||t!==null&&e!==null&&t.client===e.client&&t.clock===e.clock,K=(t,e)=>new Xt(t,e),Nh=t=>{for(const[e,n]of t.doc.share.entries())if(n===t)return e;throw Ie()},Ft=(t,e)=>e===void 0?!t.deleted:e.sv.has(t.id.client)&&(e.sv.get(t.id.client)||0)>t.id.clock&&!yl(e.ds,t.id),Ro=(t,e)=>{const n=mt(t.meta,Ro,rn),s=t.doc.store;n.has(e)||(e.sv.forEach((r,o)=>{r<ce(s,o)&&yt(t,K(o,r))}),pl(t,e.ds,r=>{}),n.add(e))};class El{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}}const ki=t=>{const e=new Map;return t.clients.forEach((n,s)=>{const r=n[n.length-1];e.set(s,r.id.clock+r.length)}),e},ce=(t,e)=>{const n=t.clients.get(e);if(n===void 0)return 0;const s=n[n.length-1];return s.id.clock+s.length},Sl=(t,e)=>{let n=t.clients.get(e.id.client);if(n===void 0)n=[],t.clients.set(e.id.client,n);else{const s=n[n.length-1];if(s.id.clock+s.length!==e.id.clock)throw Ie()}n.push(e)},We=(t,e)=>{let n=0,s=t.length-1,r=t[s],o=r.id.clock;if(o===e)return s;let i=ze(e/(o+r.length-1)*s);for(;n<=s;){if(r=t[i],o=r.id.clock,o<=e){if(e<o+r.length)return i;n=i+1}else s=i-1;i=ze((n+s)/2)}throw Ie()},Uh=(t,e)=>{const n=t.clients.get(e.client);return n[We(n,e.clock)]},to=Uh,To=(t,e,n)=>{const s=We(e,n),r=e[s];return r.id.clock<n&&r instanceof re?(e.splice(s+1,0,Zs(t,r,n-r.id.clock)),s+1):s},yt=(t,e)=>{const n=t.doc.store.clients.get(e.client);return n[To(t,n,e.clock)]},Ec=(t,e,n)=>{const s=e.clients.get(n.client),r=We(s,n.clock),o=s[r];return n.clock!==o.id.clock+o.length-1&&o.constructor!==Ae&&s.splice(r+1,0,Zs(t,o,n.clock-o.id.clock+1)),o},$h=(t,e,n)=>{const s=t.clients.get(e.id.client);s[We(s,e.id.clock)]=n},xl=(t,e,n,s,r)=>{if(s===0)return;const o=n+s;let i=To(t,e,n),c;do c=e[i++],o<c.id.clock+c.length&&To(t,e,o),r(c);while(i<e.length&&e[i].id.clock<o)};class Vh{constructor(e,n,s){this.doc=e,this.deleteSet=new cs,this.beforeState=ki(e.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=n,this.meta=new Map,this.local=s,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}}const Sc=(t,e)=>e.deleteSet.clients.size===0&&!Cu(e.afterState,(n,s)=>e.beforeState.get(s)!==n)?!1:(mi(e.deleteSet),Dh(t,e),wn(t,e.deleteSet),!0),xc=(t,e,n)=>{const s=e._item;(s===null||s.id.clock<(t.beforeState.get(s.id.client)||0)&&!s.deleted)&&mt(t.changed,e,rn).add(n)},Ds=(t,e)=>{let n=t[e],s=t[e-1],r=e;for(;r>0;n=s,s=t[--r-1]){if(s.deleted===n.deleted&&s.constructor===n.constructor&&s.mergeWith(n)){n instanceof re&&n.parentSub!==null&&n.parent._map.get(n.parentSub)===n&&n.parent._map.set(n.parentSub,s);continue}break}const o=e-r;return o&&t.splice(e+1-o,o),o},Fh=(t,e,n)=>{for(const[s,r]of t.clients.entries()){const o=e.clients.get(s);for(let i=r.length-1;i>=0;i--){const c=r[i],a=c.clock+c.len;for(let l=We(o,c.clock),d=o[l];l<o.length&&d.id.clock<a;d=o[++l]){const u=o[l];if(c.clock+c.len<=u.id.clock)break;u instanceof re&&u.deleted&&!u.keep&&n(u)&&u.gc(e,!1)}}}},jh=(t,e)=>{t.clients.forEach((n,s)=>{const r=e.clients.get(s);for(let o=n.length-1;o>=0;o--){const i=n[o],c=Pa(r.length-1,1+We(r,i.clock+i.len-1));for(let a=c,l=r[a];a>0&&l.id.clock>=i.clock;l=r[a])a-=1+Ds(r,a)}})},Al=(t,e)=>{if(e<t.length){const n=t[e],s=n.doc,r=s.store,o=n.deleteSet,i=n._mergeStructs;try{mi(o),n.afterState=ki(n.doc.store),s.emit("beforeObserverCalls",[n,s]);const c=[];n.changed.forEach((a,l)=>c.push(()=>{(l._item===null||!l._item.deleted)&&l._callObserver(n,a)})),c.push(()=>{n.changedParentTypes.forEach((a,l)=>{l._dEH.l.length>0&&(l._item===null||!l._item.deleted)&&(a=a.filter(d=>d.target._item===null||!d.target._item.deleted),a.forEach(d=>{d.currentTarget=l,d._path=null}),a.sort((d,u)=>d.path.length-u.path.length),c.push(()=>{kl(l._dEH,a,n)}))}),c.push(()=>s.emit("afterTransaction",[n,s])),c.push(()=>{n._needFormattingCleanup&&lp(n)})}),ui(c,[])}finally{s.gc&&Fh(o,r,s.gcFilter),jh(o,r),n.afterState.forEach((d,u)=>{const f=n.beforeState.get(u)||0;if(f!==d){const h=r.clients.get(u),p=Ot(We(h,f),1);for(let m=h.length-1;m>=p;)m-=1+Ds(h,m)}});for(let d=i.length-1;d>=0;d--){const{client:u,clock:f}=i[d].id,h=r.clients.get(u),p=We(h,f);p+1<h.length&&Ds(h,p+1)>1||p>0&&Ds(h,p)}if(!n.local&&n.afterState.get(s.clientID)!==n.beforeState.get(s.clientID)&&(wh(wi,al,"[yjs] ",ll,dl,"Changed the client-id because another client seems to be using it."),s.clientID=gl()),s.emit("afterTransactionCleanup",[n,s]),s._observers.has("update")){const d=new as;Sc(d,n)&&s.emit("update",[d.toUint8Array(),n.origin,s,n])}if(s._observers.has("updateV2")){const d=new Bt;Sc(d,n)&&s.emit("updateV2",[d.toUint8Array(),n.origin,s,n])}const{subdocsAdded:c,subdocsLoaded:a,subdocsRemoved:l}=n;(c.size>0||l.size>0||a.size>0)&&(c.forEach(d=>{d.clientID=s.clientID,d.collectionid==null&&(d.collectionid=s.collectionid),s.subdocs.add(d)}),l.forEach(d=>s.subdocs.delete(d)),s.emit("subdocs",[{loaded:a,added:c,removed:l},s,n]),l.forEach(d=>d.destroy())),t.length<=e+1?(s._transactionCleanups=[],s.emit("afterAllTransactions",[s,t])):Al(t,e+1)}}},q=(t,e,n=null,s=!0)=>{const r=t._transactionCleanups;let o=!1,i=null;t._transaction===null&&(o=!0,t._transaction=new Vh(t,n,s),r.push(t._transaction),r.length===1&&t.emit("beforeAllTransactions",[t]),t.emit("beforeTransaction",[t._transaction,t]));try{i=e(t._transaction)}finally{if(o){const c=t._transaction===r[0];t._transaction=null,c&&Al(r,0)}}return i};function*qh(t){const e=R(t.restDecoder);for(let n=0;n<e;n++){const s=R(t.restDecoder),r=t.readClient();let o=R(t.restDecoder);for(let i=0;i<s;i++){const c=t.readInfo();if(c===10){const a=R(t.restDecoder);yield new Ce(K(r,o),a),o+=a}else if((Sr&c)!==0){const a=(c&(ot|Ee))===0,l=new re(K(r,o),null,(c&Ee)===Ee?t.readLeftID():null,null,(c&ot)===ot?t.readRightID():null,a?t.readParentInfo()?t.readString():t.readLeftID():null,a&&(c&$n)===$n?t.readString():null,jl(t,c));yield l,o+=l.length}else{const a=t.readLen();yield new Ae(K(r,o),a),o+=a}}}}class Ei{constructor(e,n){this.gen=qh(e),this.curr=null,this.done=!1,this.filterSkips=n,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===Ce);return this.curr}}class Si{constructor(e){this.currClient=0,this.startClock=0,this.written=0,this.encoder=e,this.clientStructs=[]}}const Hh=t=>zs(t,ml,as),zh=(t,e)=>{if(t.constructor===Ae){const{client:n,clock:s}=t.id;return new Ae(K(n,s+e),t.length-e)}else if(t.constructor===Ce){const{client:n,clock:s}=t.id;return new Ce(K(n,s+e),t.length-e)}else{const n=t,{client:s,clock:r}=n.id;return new re(K(s,r+e),null,K(s,r+e-1),null,n.rightOrigin,n.parent,n.parentSub,n.content.splice(e))}},zs=(t,e=an,n=Bt)=>{if(t.length===1)return t[0];const s=t.map(d=>new e(yn(d)));let r=s.map(d=>new Ei(d,!0)),o=null;const i=new n,c=new Si(i);for(;r=r.filter(f=>f.curr!==null),r.sort((f,h)=>{if(f.curr.id.client===h.curr.id.client){const p=f.curr.id.clock-h.curr.id.clock;return p===0?f.curr.constructor===h.curr.constructor?0:f.curr.constructor===Ce?1:-1:p}else return h.curr.id.client-f.curr.id.client}),r.length!==0;){const d=r[0],u=d.curr.id.client;if(o!==null){let f=d.curr,h=!1;for(;f!==null&&f.id.clock+f.length<=o.struct.id.clock+o.struct.length&&f.id.client>=o.struct.id.client;)f=d.next(),h=!0;if(f===null||f.id.client!==u||h&&f.id.clock>o.struct.id.clock+o.struct.length)continue;if(u!==o.struct.id.client)ft(c,o.struct,o.offset),o={struct:f,offset:0},d.next();else if(o.struct.id.clock+o.struct.length<f.id.clock)if(o.struct.constructor===Ce)o.struct.length=f.id.clock+f.length-o.struct.id.clock;else{ft(c,o.struct,o.offset);const p=f.id.clock-o.struct.id.clock-o.struct.length;o={struct:new Ce(K(u,o.struct.id.clock+o.struct.length),p),offset:0}}else{const p=o.struct.id.clock+o.struct.length-f.id.clock;p>0&&(o.struct.constructor===Ce?o.struct.length-=p:f=zh(f,p)),o.struct.mergeWith(f)||(ft(c,o.struct,o.offset),o={struct:f,offset:0},d.next())}}else o={struct:d.curr,offset:0},d.next();for(let f=d.curr;f!==null&&f.id.client===u&&f.id.clock===o.struct.id.clock+o.struct.length&&f.constructor!==Ce;f=d.next())ft(c,o.struct,o.offset),o={struct:f,offset:0}}o!==null&&(ft(c,o.struct,o.offset),o=null),xi(c);const a=s.map(d=>vi(d)),l=kh(a);return wn(i,l),i.toUint8Array()},Gh=(t,e,n=an,s=Bt)=>{const r=bl(e),o=new s,i=new Si(o),c=new n(yn(t)),a=new Ei(c,!1);for(;a.curr;){const d=a.curr,u=d.id.client,f=r.get(u)||0;if(a.curr.constructor===Ce){a.next();continue}if(d.id.clock+d.length>f)for(ft(i,d,Ot(f-d.id.clock,0)),a.next();a.curr&&a.curr.id.client===u;)ft(i,a.curr,0),a.next();else for(;a.curr&&a.curr.id.client===u&&a.curr.id.clock+a.curr.length<=f;)a.next()}xi(i);const l=vi(c);return wn(o,l),o.toUint8Array()},Cl=t=>{t.written>0&&(t.clientStructs.push({written:t.written,restEncoder:qe(t.encoder.restEncoder)}),t.encoder.restEncoder=xr(),t.written=0)},ft=(t,e,n)=>{t.written>0&&t.currClient!==e.id.client&&Cl(t),t.written===0&&(t.currClient=e.id.client,t.encoder.writeClient(e.id.client),U(t.encoder.restEncoder,e.id.clock+n)),e.write(t.encoder,n),t.written++},xi=t=>{Cl(t);const e=t.encoder.restEncoder;U(e,t.clientStructs.length);for(let n=0;n<t.clientStructs.length;n++){const s=t.clientStructs[n];U(e,s.written),Ar(e,s.restEncoder)}},Wh=(t,e,n,s)=>{const r=new n(yn(t)),o=new Ei(r,!1),i=new s,c=new Si(i);for(let l=o.curr;l!==null;l=o.next())ft(c,e(l),0);xi(c);const a=vi(r);return wn(i,a),i.toUint8Array()},Yh=t=>Wh(t,bf,an,as),Ac="You must not compute changes after the event-handler fired.";class Mr{constructor(e,n){this.target=e,this.currentTarget=e,this.transaction=n,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=Xh(this.currentTarget,this.target))}deletes(e){return yl(this.transaction.deleteSet,e.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw Ge(Ac);const e=new Map,n=this.target;this.transaction.changed.get(n).forEach(r=>{if(r!==null){const o=n._map.get(r);let i,c;if(this.adds(o)){let a=o.left;for(;a!==null&&this.adds(a);)a=a.left;if(this.deletes(o))if(a!==null&&this.deletes(a))i="delete",c=Gr(a.content.getContent());else return;else a!==null&&this.deletes(a)?(i="update",c=Gr(a.content.getContent())):(i="add",c=void 0)}else if(this.deletes(o))i="delete",c=Gr(o.content.getContent());else return;e.set(r,{action:i,oldValue:c})}}),this._keys=e}return this._keys}get delta(){return this.changes.delta}adds(e){return e.id.clock>=(this.transaction.beforeState.get(e.id.client)||0)}get changes(){let e=this._changes;if(e===null){if(this.transaction.doc._transactionCleanups.length===0)throw Ge(Ac);const n=this.target,s=rn(),r=rn(),o=[];if(e={added:s,deleted:r,delta:o,keys:this.keys},this.transaction.changed.get(n).has(null)){let c=null;const a=()=>{c&&o.push(c)};for(let l=n._start;l!==null;l=l.right)l.deleted?this.deletes(l)&&!this.adds(l)&&((c===null||c.delete===void 0)&&(a(),c={delete:0}),c.delete+=l.length,r.add(l)):this.adds(l)?((c===null||c.insert===void 0)&&(a(),c={insert:[]}),c.insert=c.insert.concat(l.content.getContent()),s.add(l)):((c===null||c.retain===void 0)&&(a(),c={retain:0}),c.retain+=l.length);c!==null&&c.retain===void 0&&a()}this._changes=e}return e}}const Xh=(t,e)=>{const n=[];for(;e._item!==null&&e!==t;){if(e._item.parentSub!==null)n.unshift(e._item.parentSub);else{let s=0,r=e._item.parent._start;for(;r!==e._item&&r!==null;)!r.deleted&&r.countable&&(s+=r.length),r=r.right;n.unshift(s)}e=e._item.parent}return n},fe=()=>{mh("Invalid access: Add Yjs type to a document before reading data.")},_l=80;let Ai=0;class Jh{constructor(e,n){e.marker=!0,this.p=e,this.index=n,this.timestamp=Ai++}}const Zh=t=>{t.timestamp=Ai++},Il=(t,e,n)=>{t.p.marker=!1,t.p=e,e.marker=!0,t.index=n,t.timestamp=Ai++},Qh=(t,e,n)=>{if(t.length>=_l){const s=t.reduce((r,o)=>r.timestamp<o.timestamp?r:o);return Il(s,e,n),s}else{const s=new Jh(e,n);return t.push(s),s}},Or=(t,e)=>{if(t._start===null||e===0||t._searchMarker===null)return null;const n=t._searchMarker.length===0?null:t._searchMarker.reduce((o,i)=>Cs(e-o.index)<Cs(e-i.index)?o:i);let s=t._start,r=0;for(n!==null&&(s=n.p,r=n.index,Zh(n));s.right!==null&&r<e;){if(!s.deleted&&s.countable){if(e<r+s.length)break;r+=s.length}s=s.right}for(;s.left!==null&&r>e;)s=s.left,!s.deleted&&s.countable&&(r-=s.length);for(;s.left!==null&&s.left.id.client===s.id.client&&s.left.id.clock+s.left.length===s.id.clock;)s=s.left,!s.deleted&&s.countable&&(r-=s.length);return n!==null&&Cs(n.index-r)<s.parent.length/_l?(Il(n,s,r),n):Qh(t._searchMarker,s,r)},Gn=(t,e,n)=>{for(let s=t.length-1;s>=0;s--){const r=t[s];if(n>0){let o=r.p;for(o.marker=!1;o&&(o.deleted||!o.countable);)o=o.left,o&&!o.deleted&&o.countable&&(r.index-=o.length);if(o===null||o.marker===!0){t.splice(s,1);continue}r.p=o,o.marker=!0}(e<r.index||n>0&&e===r.index)&&(r.index=Ot(e,r.index+n))}},Pr=(t,e,n)=>{const s=t,r=e.changedParentTypes;for(;mt(r,t,()=>[]).push(n),t._item!==null;)t=t._item.parent;kl(s._eH,n,e)};class de{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=vc(),this._dEH=vc(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(e,n){this.doc=e,this._item=n}_copy(){throw Oe()}clone(){throw Oe()}_write(e){}get _first(){let e=this._start;for(;e!==null&&e.deleted;)e=e.right;return e}_callObserver(e,n){!e.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(e){bc(this._eH,e)}observeDeep(e){bc(this._dEH,e)}unobserve(e){kc(this._eH,e)}unobserveDeep(e){kc(this._dEH,e)}toJSON(){}}const Ll=(t,e,n)=>{t.doc??fe(),e<0&&(e=t._length+e),n<0&&(n=t._length+n);let s=n-e;const r=[];let o=t._start;for(;o!==null&&s>0;){if(o.countable&&!o.deleted){const i=o.content.getContent();if(i.length<=e)e-=i.length;else{for(let c=e;c<i.length&&s>0;c++)r.push(i[c]),s--;e=0}}o=o.right}return r},Dl=t=>{t.doc??fe();const e=[];let n=t._start;for(;n!==null;){if(n.countable&&!n.deleted){const s=n.content.getContent();for(let r=0;r<s.length;r++)e.push(s[r])}n=n.right}return e},Wn=(t,e)=>{let n=0,s=t._start;for(t.doc??fe();s!==null;){if(s.countable&&!s.deleted){const r=s.content.getContent();for(let o=0;o<r.length;o++)e(r[o],n++,t)}s=s.right}},Bl=(t,e)=>{const n=[];return Wn(t,(s,r)=>{n.push(e(s,r,t))}),n},ep=t=>{let e=t._start,n=null,s=0;return{[Symbol.iterator](){return this},next:()=>{if(n===null){for(;e!==null&&e.deleted;)e=e.right;if(e===null)return{done:!0,value:void 0};n=e.content.getContent(),s=0,e=e.right}const r=n[s++];return n.length<=s&&(n=null),{done:!1,value:r}}}},Rl=(t,e)=>{t.doc??fe();const n=Or(t,e);let s=t._start;for(n!==null&&(s=n.p,e-=n.index);s!==null;s=s.right)if(!s.deleted&&s.countable){if(e<s.length)return s.content.getContent()[e];e-=s.length}},Gs=(t,e,n,s)=>{let r=n;const o=t.doc,i=o.clientID,c=o.store,a=n===null?e._start:n.right;let l=[];const d=()=>{l.length>0&&(r=new re(K(i,ce(c,i)),r,r&&r.lastId,a,a&&a.id,e,null,new Tt(l)),r.integrate(t,0),l=[])};s.forEach(u=>{if(u===null)l.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:l.push(u);break;default:switch(d(),u.constructor){case Uint8Array:case ArrayBuffer:r=new re(K(i,ce(c,i)),r,r&&r.lastId,a,a&&a.id,e,null,new ls(new Uint8Array(u))),r.integrate(t,0);break;case Dt:r=new re(K(i,ce(c,i)),r,r&&r.lastId,a,a&&a.id,e,null,new ds(u)),r.integrate(t,0);break;default:if(u instanceof de)r=new re(K(i,ce(c,i)),r,r&&r.lastId,a,a&&a.id,e,null,new at(u)),r.integrate(t,0);else throw new Error("Unexpected content type in insert operation")}}}),d()},Tl=()=>Ge("Length exceeded!"),Ml=(t,e,n,s)=>{if(n>e._length)throw Tl();if(n===0)return e._searchMarker&&Gn(e._searchMarker,n,s.length),Gs(t,e,null,s);const r=n,o=Or(e,n);let i=e._start;for(o!==null&&(i=o.p,n-=o.index,n===0&&(i=i.prev,n+=i&&i.countable&&!i.deleted?i.length:0));i!==null;i=i.right)if(!i.deleted&&i.countable){if(n<=i.length){n<i.length&&yt(t,K(i.id.client,i.id.clock+n));break}n-=i.length}return e._searchMarker&&Gn(e._searchMarker,r,s.length),Gs(t,e,i,s)},tp=(t,e,n)=>{let r=(e._searchMarker||[]).reduce((o,i)=>i.index>o.index?i:o,{index:0,p:e._start}).p;if(r)for(;r.right;)r=r.right;return Gs(t,e,r,n)},Ol=(t,e,n,s)=>{if(s===0)return;const r=n,o=s,i=Or(e,n);let c=e._start;for(i!==null&&(c=i.p,n-=i.index);c!==null&&n>0;c=c.right)!c.deleted&&c.countable&&(n<c.length&&yt(t,K(c.id.client,c.id.clock+n)),n-=c.length);for(;s>0&&c!==null;)c.deleted||(s<c.length&&yt(t,K(c.id.client,c.id.clock+s)),c.delete(t),s-=c.length),c=c.right;if(s>0)throw Tl();e._searchMarker&&Gn(e._searchMarker,r,-o+s)},Ws=(t,e,n)=>{const s=e._map.get(n);s!==void 0&&s.delete(t)},Ci=(t,e,n,s)=>{const r=e._map.get(n)||null,o=t.doc,i=o.clientID;let c;if(s==null)c=new Tt([s]);else switch(s.constructor){case Number:case Object:case Boolean:case Array:case String:case Date:case BigInt:c=new Tt([s]);break;case Uint8Array:c=new ls(s);break;case Dt:c=new ds(s);break;default:if(s instanceof de)c=new at(s);else throw new Error("Unexpected content type")}new re(K(i,ce(o.store,i)),r,r&&r.lastId,null,null,e,n,c).integrate(t,0)},_i=(t,e)=>{t.doc??fe();const n=t._map.get(e);return n!==void 0&&!n.deleted?n.content.getContent()[n.length-1]:void 0},Pl=t=>{const e={};return t.doc??fe(),t._map.forEach((n,s)=>{n.deleted||(e[s]=n.content.getContent()[n.length-1])}),e},Kl=(t,e)=>{t.doc??fe();const n=t._map.get(e);return n!==void 0&&!n.deleted},np=(t,e)=>{const n={};return t._map.forEach((s,r)=>{let o=s;for(;o!==null&&(!e.sv.has(o.id.client)||o.id.clock>=(e.sv.get(o.id.client)||0));)o=o.left;o!==null&&Ft(o,e)&&(n[r]=o.content.getContent()[o.length-1])}),n},ys=t=>(t.doc??fe(),vh(t._map.entries(),e=>!e[1].deleted));class sp extends Mr{}class Jt extends de{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(e){const n=new Jt;return n.push(e),n}_integrate(e,n){super._integrate(e,n),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new Jt}clone(){const e=new Jt;return e.insert(0,this.toArray().map(n=>n instanceof de?n.clone():n)),e}get length(){return this.doc??fe(),this._length}_callObserver(e,n){super._callObserver(e,n),Pr(this,e,new sp(this,e))}insert(e,n){this.doc!==null?q(this.doc,s=>{Ml(s,this,e,n)}):this._prelimContent.splice(e,0,...n)}push(e){this.doc!==null?q(this.doc,n=>{tp(n,this,e)}):this._prelimContent.push(...e)}unshift(e){this.insert(0,e)}delete(e,n=1){this.doc!==null?q(this.doc,s=>{Ol(s,this,e,n)}):this._prelimContent.splice(e,n)}get(e){return Rl(this,e)}toArray(){return Dl(this)}slice(e=0,n=this.length){return Ll(this,e,n)}toJSON(){return this.map(e=>e instanceof de?e.toJSON():e)}map(e){return Bl(this,e)}forEach(e){Wn(this,e)}[Symbol.iterator](){return ep(this)}_write(e){e.writeTypeRef(Ip)}}const rp=t=>new Jt;class op extends Mr{constructor(e,n,s){super(e,n),this.keysChanged=s}}class ln extends de{constructor(e){super(),this._prelimContent=null,e===void 0?this._prelimContent=new Map:this._prelimContent=new Map(e)}_integrate(e,n){super._integrate(e,n),this._prelimContent.forEach((s,r)=>{this.set(r,s)}),this._prelimContent=null}_copy(){return new ln}clone(){const e=new ln;return this.forEach((n,s)=>{e.set(s,n instanceof de?n.clone():n)}),e}_callObserver(e,n){Pr(this,e,new op(this,e,n))}toJSON(){this.doc??fe();const e={};return this._map.forEach((n,s)=>{if(!n.deleted){const r=n.content.getContent()[n.length-1];e[s]=r instanceof de?r.toJSON():r}}),e}get size(){return[...ys(this)].length}keys(){return eo(ys(this),e=>e[0])}values(){return eo(ys(this),e=>e[1].content.getContent()[e[1].length-1])}entries(){return eo(ys(this),e=>[e[0],e[1].content.getContent()[e[1].length-1]])}forEach(e){this.doc??fe(),this._map.forEach((n,s)=>{n.deleted||e(n.content.getContent()[n.length-1],s,this)})}[Symbol.iterator](){return this.entries()}delete(e){this.doc!==null?q(this.doc,n=>{Ws(n,this,e)}):this._prelimContent.delete(e)}set(e,n){return this.doc!==null?q(this.doc,s=>{Ci(s,this,e,n)}):this._prelimContent.set(e,n),n}get(e){return _i(this,e)}has(e){return Kl(this,e)}clear(){this.doc!==null?q(this.doc,e=>{this.forEach(function(n,s,r){Ws(e,r,s)})}):this._prelimContent.clear()}_write(e){e.writeTypeRef(Lp)}}const ip=t=>new ln,ht=(t,e)=>t===e||typeof t=="object"&&typeof e=="object"&&t&&e&&mf(t,e);class Mo{constructor(e,n,s,r){this.left=e,this.right=n,this.index=s,this.currentAttributes=r}forward(){switch(this.right===null&&Ie(),this.right.content.constructor){case oe:this.right.deleted||mn(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}}const Cc=(t,e,n)=>{for(;e.right!==null&&n>0;){switch(e.right.content.constructor){case oe:e.right.deleted||mn(e.currentAttributes,e.right.content);break;default:e.right.deleted||(n<e.right.length&&yt(t,K(e.right.id.client,e.right.id.clock+n)),e.index+=e.right.length,n-=e.right.length);break}e.left=e.right,e.right=e.right.right}return e},gs=(t,e,n,s)=>{const r=new Map,o=s?Or(e,n):null;if(o){const i=new Mo(o.p.left,o.p,o.index,r);return Cc(t,i,n-o.index)}else{const i=new Mo(null,e._start,0,r);return Cc(t,i,n)}},Nl=(t,e,n,s)=>{for(;n.right!==null&&(n.right.deleted===!0||n.right.content.constructor===oe&&ht(s.get(n.right.content.key),n.right.content.value));)n.right.deleted||s.delete(n.right.content.key),n.forward();const r=t.doc,o=r.clientID;s.forEach((i,c)=>{const a=n.left,l=n.right,d=new re(K(o,ce(r.store,o)),a,a&&a.lastId,l,l&&l.id,e,null,new oe(c,i));d.integrate(t,0),n.right=d,n.forward()})},mn=(t,e)=>{const{key:n,value:s}=e;s===null?t.delete(n):t.set(n,s)},Ul=(t,e)=>{for(;t.right!==null;){if(!(t.right.deleted||t.right.content.constructor===oe&&ht(e[t.right.content.key]??null,t.right.content.value)))break;t.forward()}},$l=(t,e,n,s)=>{const r=t.doc,o=r.clientID,i=new Map;for(const c in s){const a=s[c],l=n.currentAttributes.get(c)??null;if(!ht(l,a)){i.set(c,l);const{left:d,right:u}=n;n.right=new re(K(o,ce(r.store,o)),d,d&&d.lastId,u,u&&u.id,e,null,new oe(c,a)),n.right.integrate(t,0),n.forward()}}return i},no=(t,e,n,s,r)=>{n.currentAttributes.forEach((f,h)=>{r[h]===void 0&&(r[h]=null)});const o=t.doc,i=o.clientID;Ul(n,r);const c=$l(t,e,n,r),a=s.constructor===String?new Ye(s):s instanceof de?new at(s):new Pt(s);let{left:l,right:d,index:u}=n;e._searchMarker&&Gn(e._searchMarker,n.index,a.getLength()),d=new re(K(i,ce(o.store,i)),l,l&&l.lastId,d,d&&d.id,e,null,a),d.integrate(t,0),n.right=d,n.index=u,n.forward(),Nl(t,e,n,c)},_c=(t,e,n,s,r)=>{const o=t.doc,i=o.clientID;Ul(n,r);const c=$l(t,e,n,r);e:for(;n.right!==null&&(s>0||c.size>0&&(n.right.deleted||n.right.content.constructor===oe));){if(!n.right.deleted)switch(n.right.content.constructor){case oe:{const{key:a,value:l}=n.right.content,d=r[a];if(d!==void 0){if(ht(d,l))c.delete(a);else{if(s===0)break e;c.set(a,l)}n.right.delete(t)}else n.currentAttributes.set(a,l);break}default:s<n.right.length&&yt(t,K(n.right.id.client,n.right.id.clock+s)),s-=n.right.length;break}n.forward()}if(s>0){let a="";for(;s>0;s--)a+=`
`;n.right=new re(K(i,ce(o.store,i)),n.left,n.left&&n.left.lastId,n.right,n.right&&n.right.id,e,null,new Ye(a)),n.right.integrate(t,0),n.forward()}Nl(t,e,n,c)},Vl=(t,e,n,s,r)=>{let o=e;const i=Me();for(;o&&(!o.countable||o.deleted);){if(!o.deleted&&o.content.constructor===oe){const l=o.content;i.set(l.key,l)}o=o.right}let c=0,a=!1;for(;e!==o;){if(n===e&&(a=!0),!e.deleted){const l=e.content;switch(l.constructor){case oe:{const{key:d,value:u}=l,f=s.get(d)??null;(i.get(d)!==l||f===u)&&(e.delete(t),c++,!a&&(r.get(d)??null)===u&&f!==u&&(f===null?r.delete(d):r.set(d,f))),!a&&!e.deleted&&mn(r,l);break}}}e=e.right}return c},cp=(t,e)=>{for(;e&&e.right&&(e.right.deleted||!e.right.countable);)e=e.right;const n=new Set;for(;e&&(e.deleted||!e.countable);){if(!e.deleted&&e.content.constructor===oe){const s=e.content.key;n.has(s)?e.delete(t):n.add(s)}e=e.left}},ap=t=>{let e=0;return q(t.doc,n=>{let s=t._start,r=t._start,o=Me();const i=Co(o);for(;r;){if(r.deleted===!1)switch(r.content.constructor){case oe:mn(i,r.content);break;default:e+=Vl(n,s,r,o,i),o=Co(i),s=r;break}r=r.right}}),e},lp=t=>{const e=new Set,n=t.doc;for(const[s,r]of t.afterState.entries()){const o=t.beforeState.get(s)||0;r!==o&&xl(t,n.store.clients.get(s),o,r,i=>{!i.deleted&&i.content.constructor===oe&&i.constructor!==Ae&&e.add(i.parent)})}q(n,s=>{pl(t,t.deleteSet,r=>{if(r instanceof Ae||!r.parent._hasFormatting||e.has(r.parent))return;const o=r.parent;r.content.constructor===oe?e.add(o):cp(s,r)});for(const r of e)ap(r)})},Ic=(t,e,n)=>{const s=n,r=Co(e.currentAttributes),o=e.right;for(;n>0&&e.right!==null;){if(e.right.deleted===!1)switch(e.right.content.constructor){case at:case Pt:case Ye:n<e.right.length&&yt(t,K(e.right.id.client,e.right.id.clock+n)),n-=e.right.length,e.right.delete(t);break}e.forward()}o&&Vl(t,o,e.right,r,e.currentAttributes);const i=(e.left||e.right).parent;return i._searchMarker&&Gn(i._searchMarker,e.index,-s+n),e};class dp extends Mr{constructor(e,n,s){super(e,n),this.childListChanged=!1,this.keysChanged=new Set,s.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){const e={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=e}return this._changes}get delta(){if(this._delta===null){const e=this.target.doc,n=[];q(e,s=>{const r=new Map,o=new Map;let i=this.target._start,c=null;const a={};let l="",d=0,u=0;const f=()=>{if(c!==null){let h=null;switch(c){case"delete":u>0&&(h={delete:u}),u=0;break;case"insert":(typeof l=="object"||l.length>0)&&(h={insert:l},r.size>0&&(h.attributes={},r.forEach((p,m)=>{p!==null&&(h.attributes[m]=p)}))),l="";break;case"retain":d>0&&(h={retain:d},wf(a)||(h.attributes=pf({},a))),d=0;break}h&&n.push(h),c=null}};for(;i!==null;){switch(i.content.constructor){case at:case Pt:this.adds(i)?this.deletes(i)||(f(),c="insert",l=i.content.getContent()[0],f()):this.deletes(i)?(c!=="delete"&&(f(),c="delete"),u+=1):i.deleted||(c!=="retain"&&(f(),c="retain"),d+=1);break;case Ye:this.adds(i)?this.deletes(i)||(c!=="insert"&&(f(),c="insert"),l+=i.content.str):this.deletes(i)?(c!=="delete"&&(f(),c="delete"),u+=i.length):i.deleted||(c!=="retain"&&(f(),c="retain"),d+=i.length);break;case oe:{const{key:h,value:p}=i.content;if(this.adds(i)){if(!this.deletes(i)){const m=r.get(h)??null;ht(m,p)?p!==null&&i.delete(s):(c==="retain"&&f(),ht(p,o.get(h)??null)?delete a[h]:a[h]=p)}}else if(this.deletes(i)){o.set(h,p);const m=r.get(h)??null;ht(m,p)||(c==="retain"&&f(),a[h]=m)}else if(!i.deleted){o.set(h,p);const m=a[h];m!==void 0&&(ht(m,p)?m!==null&&i.delete(s):(c==="retain"&&f(),p===null?delete a[h]:a[h]=p))}i.deleted||(c==="insert"&&f(),mn(r,i.content));break}}i=i.right}for(f();n.length>0;){const h=n[n.length-1];if(h.retain!==void 0&&h.attributes===void 0)n.pop();else break}}),this._delta=n}return this._delta}}class dn extends de{constructor(e){super(),this._pending=e!==void 0?[()=>this.insert(0,e)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??fe(),this._length}_integrate(e,n){super._integrate(e,n);try{this._pending.forEach(s=>s())}catch(s){console.error(s)}this._pending=null}_copy(){return new dn}clone(){const e=new dn;return e.applyDelta(this.toDelta()),e}_callObserver(e,n){super._callObserver(e,n);const s=new dp(this,e,n);Pr(this,e,s),!e.local&&this._hasFormatting&&(e._needFormattingCleanup=!0)}toString(){this.doc??fe();let e="",n=this._start;for(;n!==null;)!n.deleted&&n.countable&&n.content.constructor===Ye&&(e+=n.content.str),n=n.right;return e}toJSON(){return this.toString()}applyDelta(e,{sanitize:n=!0}={}){this.doc!==null?q(this.doc,s=>{const r=new Mo(null,this._start,0,new Map);for(let o=0;o<e.length;o++){const i=e[o];if(i.insert!==void 0){const c=!n&&typeof i.insert=="string"&&o===e.length-1&&r.right===null&&i.insert.slice(-1)===`
`?i.insert.slice(0,-1):i.insert;(typeof c!="string"||c.length>0)&&no(s,this,r,c,i.attributes||{})}else i.retain!==void 0?_c(s,this,r,i.retain,i.attributes||{}):i.delete!==void 0&&Ic(s,r,i.delete)}}):this._pending.push(()=>this.applyDelta(e))}toDelta(e,n,s){this.doc??fe();const r=[],o=new Map,i=this.doc;let c="",a=this._start;function l(){if(c.length>0){const u={};let f=!1;o.forEach((p,m)=>{f=!0,u[m]=p});const h={insert:c};f&&(h.attributes=u),r.push(h),c=""}}const d=()=>{for(;a!==null;){if(Ft(a,e)||n!==void 0&&Ft(a,n))switch(a.content.constructor){case Ye:{const u=o.get("ychange");e!==void 0&&!Ft(a,e)?(u===void 0||u.user!==a.id.client||u.type!=="removed")&&(l(),o.set("ychange",s?s("removed",a.id):{type:"removed"})):n!==void 0&&!Ft(a,n)?(u===void 0||u.user!==a.id.client||u.type!=="added")&&(l(),o.set("ychange",s?s("added",a.id):{type:"added"})):u!==void 0&&(l(),o.delete("ychange")),c+=a.content.str;break}case at:case Pt:{l();const u={insert:a.content.getContent()[0]};if(o.size>0){const f={};u.attributes=f,o.forEach((h,p)=>{f[p]=h})}r.push(u);break}case oe:Ft(a,e)&&(l(),mn(o,a.content));break}a=a.right}l()};return e||n?q(i,u=>{e&&Ro(u,e),n&&Ro(u,n),d()},"cleanup"):d(),r}insert(e,n,s){if(n.length<=0)return;const r=this.doc;r!==null?q(r,o=>{const i=gs(o,this,e,!s);s||(s={},i.currentAttributes.forEach((c,a)=>{s[a]=c})),no(o,this,i,n,s)}):this._pending.push(()=>this.insert(e,n,s))}insertEmbed(e,n,s){const r=this.doc;r!==null?q(r,o=>{const i=gs(o,this,e,!s);no(o,this,i,n,s||{})}):this._pending.push(()=>this.insertEmbed(e,n,s||{}))}delete(e,n){if(n===0)return;const s=this.doc;s!==null?q(s,r=>{Ic(r,gs(r,this,e,!0),n)}):this._pending.push(()=>this.delete(e,n))}format(e,n,s){if(n===0)return;const r=this.doc;r!==null?q(r,o=>{const i=gs(o,this,e,!1);i.right!==null&&_c(o,this,i,n,s)}):this._pending.push(()=>this.format(e,n,s))}removeAttribute(e){this.doc!==null?q(this.doc,n=>{Ws(n,this,e)}):this._pending.push(()=>this.removeAttribute(e))}setAttribute(e,n){this.doc!==null?q(this.doc,s=>{Ci(s,this,e,n)}):this._pending.push(()=>this.setAttribute(e,n))}getAttribute(e){return _i(this,e)}getAttributes(){return Pl(this)}_write(e){e.writeTypeRef(Dp)}}const up=t=>new dn;class so{constructor(e,n=()=>!0){this._filter=n,this._root=e,this._currentNode=e._start,this._firstCall=!0,e.doc??fe()}[Symbol.iterator](){return this}next(){let e=this._currentNode,n=e&&e.content&&e.content.type;if(e!==null&&(!this._firstCall||e.deleted||!this._filter(n)))do if(n=e.content.type,!e.deleted&&(n.constructor===un||n.constructor===Rt)&&n._start!==null)e=n._start;else for(;e!==null;){const s=e.next;if(s!==null){e=s;break}else e.parent===this._root?e=null:e=e.parent._item}while(e!==null&&(e.deleted||!this._filter(e.content.type)));return this._firstCall=!1,e===null?{value:void 0,done:!0}:(this._currentNode=e,{value:e.content.type,done:!1})}}class Rt extends de{constructor(){super(),this._prelimContent=[]}get firstChild(){const e=this._first;return e?e.content.getContent()[0]:null}_integrate(e,n){super._integrate(e,n),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new Rt}clone(){const e=new Rt;return e.insert(0,this.toArray().map(n=>n instanceof de?n.clone():n)),e}get length(){return this.doc??fe(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(e){return new so(this,e)}querySelector(e){e=e.toUpperCase();const s=new so(this,r=>r.nodeName&&r.nodeName.toUpperCase()===e).next();return s.done?null:s.value}querySelectorAll(e){return e=e.toUpperCase(),Lt(new so(this,n=>n.nodeName&&n.nodeName.toUpperCase()===e))}_callObserver(e,n){Pr(this,e,new pp(this,n,e))}toString(){return Bl(this,e=>e.toString()).join("")}toJSON(){return this.toString()}toDOM(e=document,n={},s){const r=e.createDocumentFragment();return s!==void 0&&s._createAssociation(r,this),Wn(this,o=>{r.insertBefore(o.toDOM(e,n,s),null)}),r}insert(e,n){this.doc!==null?q(this.doc,s=>{Ml(s,this,e,n)}):this._prelimContent.splice(e,0,...n)}insertAfter(e,n){if(this.doc!==null)q(this.doc,s=>{const r=e&&e instanceof de?e._item:e;Gs(s,this,r,n)});else{const s=this._prelimContent,r=e===null?0:s.findIndex(o=>o===e)+1;if(r===0&&e!==null)throw Ge("Reference item not found");s.splice(r,0,...n)}}delete(e,n=1){this.doc!==null?q(this.doc,s=>{Ol(s,this,e,n)}):this._prelimContent.splice(e,n)}toArray(){return Dl(this)}push(e){this.insert(this.length,e)}unshift(e){this.insert(0,e)}get(e){return Rl(this,e)}slice(e=0,n=this.length){return Ll(this,e,n)}forEach(e){Wn(this,e)}_write(e){e.writeTypeRef(Rp)}}const fp=t=>new Rt;class un extends Rt{constructor(e="UNDEFINED"){super(),this.nodeName=e,this._prelimAttrs=new Map}get nextSibling(){const e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){const e=this._item?this._item.prev:null;return e?e.content.type:null}_integrate(e,n){super._integrate(e,n),this._prelimAttrs.forEach((s,r)=>{this.setAttribute(r,s)}),this._prelimAttrs=null}_copy(){return new un(this.nodeName)}clone(){const e=new un(this.nodeName),n=this.getAttributes();return gf(n,(s,r)=>{e.setAttribute(r,s)}),e.insert(0,this.toArray().map(s=>s instanceof de?s.clone():s)),e}toString(){const e=this.getAttributes(),n=[],s=[];for(const c in e)s.push(c);s.sort();const r=s.length;for(let c=0;c<r;c++){const a=s[c];n.push(a+'="'+e[a]+'"')}const o=this.nodeName.toLocaleLowerCase(),i=n.length>0?" "+n.join(" "):"";return`<${o}${i}>${super.toString()}</${o}>`}removeAttribute(e){this.doc!==null?q(this.doc,n=>{Ws(n,this,e)}):this._prelimAttrs.delete(e)}setAttribute(e,n){this.doc!==null?q(this.doc,s=>{Ci(s,this,e,n)}):this._prelimAttrs.set(e,n)}getAttribute(e){return _i(this,e)}hasAttribute(e){return Kl(this,e)}getAttributes(e){return e?np(this,e):Pl(this)}toDOM(e=document,n={},s){const r=e.createElement(this.nodeName),o=this.getAttributes();for(const i in o){const c=o[i];typeof c=="string"&&r.setAttribute(i,c)}return Wn(this,i=>{r.appendChild(i.toDOM(e,n,s))}),s!==void 0&&s._createAssociation(r,this),r}_write(e){e.writeTypeRef(Bp),e.writeKey(this.nodeName)}}const hp=t=>new un(t.readKey());class pp extends Mr{constructor(e,n,s){super(e,s),this.childListChanged=!1,this.attributesChanged=new Set,n.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}}class Ys extends ln{constructor(e){super(),this.hookName=e}_copy(){return new Ys(this.hookName)}clone(){const e=new Ys(this.hookName);return this.forEach((n,s)=>{e.set(s,n)}),e}toDOM(e=document,n={},s){const r=n[this.hookName];let o;return r!==void 0?o=r.createDom(this):o=document.createElement(this.hookName),o.setAttribute("data-yjs-hook",this.hookName),s!==void 0&&s._createAssociation(o,this),o}_write(e){e.writeTypeRef(Tp),e.writeKey(this.hookName)}}const yp=t=>new Ys(t.readKey());class Xs extends dn{get nextSibling(){const e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){const e=this._item?this._item.prev:null;return e?e.content.type:null}_copy(){return new Xs}clone(){const e=new Xs;return e.applyDelta(this.toDelta()),e}toDOM(e=document,n,s){const r=e.createTextNode(this.toString());return s!==void 0&&s._createAssociation(r,this),r}toString(){return this.toDelta().map(e=>{const n=[];for(const r in e.attributes){const o=[];for(const i in e.attributes[r])o.push({key:i,value:e.attributes[r][i]});o.sort((i,c)=>i.key<c.key?-1:1),n.push({nodeName:r,attrs:o})}n.sort((r,o)=>r.nodeName<o.nodeName?-1:1);let s="";for(let r=0;r<n.length;r++){const o=n[r];s+=`<${o.nodeName}`;for(let i=0;i<o.attrs.length;i++){const c=o.attrs[i];s+=` ${c.key}="${c.value}"`}s+=">"}s+=e.insert;for(let r=n.length-1;r>=0;r--)s+=`</${n[r].nodeName}>`;return s}).join("")}toJSON(){return this.toString()}_write(e){e.writeTypeRef(Mp)}}const gp=t=>new Xs;class Ii{constructor(e,n){this.id=e,this.length=n}get deleted(){throw Oe()}mergeWith(e){return!1}write(e,n,s){throw Oe()}integrate(e,n){throw Oe()}}const wp=0;class Ae extends Ii{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,n){n>0&&(this.id.clock+=n,this.length-=n),Sl(e.doc.store,this)}write(e,n){e.writeInfo(wp),e.writeLen(this.length-n)}getMissing(e,n){return null}}class ls{constructor(e){this.content=e}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new ls(this.content)}splice(e){throw Oe()}mergeWith(e){return!1}integrate(e,n){}delete(e){}gc(e){}write(e,n){e.writeBuf(this.content)}getRef(){return 3}}const mp=t=>new ls(t.readBuf());class Yn{constructor(e){this.len=e}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new Yn(this.len)}splice(e){const n=new Yn(this.len-e);return this.len=e,n}mergeWith(e){return this.len+=e.len,!0}integrate(e,n){Hs(e.deleteSet,n.id.client,n.id.clock,this.len),n.markDeleted()}delete(e){}gc(e){}write(e,n){e.writeLen(this.len-n)}getRef(){return 1}}const vp=t=>new Yn(t.readLen()),Fl=(t,e)=>new Dt({guid:t,...e,shouldLoad:e.shouldLoad||e.autoLoad||!1});class ds{constructor(e){e._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=e;const n={};this.opts=n,e.gc||(n.gc=!1),e.autoLoad&&(n.autoLoad=!0),e.meta!==null&&(n.meta=e.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new ds(Fl(this.doc.guid,this.opts))}splice(e){throw Oe()}mergeWith(e){return!1}integrate(e,n){this.doc._item=n,e.subdocsAdded.add(this.doc),this.doc.shouldLoad&&e.subdocsLoaded.add(this.doc)}delete(e){e.subdocsAdded.has(this.doc)?e.subdocsAdded.delete(this.doc):e.subdocsRemoved.add(this.doc)}gc(e){}write(e,n){e.writeString(this.doc.guid),e.writeAny(this.opts)}getRef(){return 9}}const bp=t=>new ds(Fl(t.readString(),t.readAny()));class Pt{constructor(e){this.embed=e}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new Pt(this.embed)}splice(e){throw Oe()}mergeWith(e){return!1}integrate(e,n){}delete(e){}gc(e){}write(e,n){e.writeJSON(this.embed)}getRef(){return 5}}const kp=t=>new Pt(t.readJSON());class oe{constructor(e,n){this.key=e,this.value=n}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new oe(this.key,this.value)}splice(e){throw Oe()}mergeWith(e){return!1}integrate(e,n){const s=n.parent;s._searchMarker=null,s._hasFormatting=!0}delete(e){}gc(e){}write(e,n){e.writeKey(this.key),e.writeJSON(this.value)}getRef(){return 6}}const Ep=t=>new oe(t.readKey(),t.readJSON());class Js{constructor(e){this.arr=e}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new Js(this.arr)}splice(e){const n=new Js(this.arr.slice(e));return this.arr=this.arr.slice(0,e),n}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,n){}delete(e){}gc(e){}write(e,n){const s=this.arr.length;e.writeLen(s-n);for(let r=n;r<s;r++){const o=this.arr[r];e.writeString(o===void 0?"undefined":JSON.stringify(o))}}getRef(){return 2}}const Sp=t=>{const e=t.readLen(),n=[];for(let s=0;s<e;s++){const r=t.readString();r==="undefined"?n.push(void 0):n.push(JSON.parse(r))}return new Js(n)},xp=Fs("node_env")==="development";class Tt{constructor(e){this.arr=e,xp&&ja(e)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new Tt(this.arr)}splice(e){const n=new Tt(this.arr.slice(e));return this.arr=this.arr.slice(0,e),n}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,n){}delete(e){}gc(e){}write(e,n){const s=this.arr.length;e.writeLen(s-n);for(let r=n;r<s;r++){const o=this.arr[r];e.writeAny(o)}}getRef(){return 8}}const Ap=t=>{const e=t.readLen(),n=[];for(let s=0;s<e;s++)n.push(t.readAny());return new Tt(n)};class Ye{constructor(e){this.str=e}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new Ye(this.str)}splice(e){const n=new Ye(this.str.slice(e));this.str=this.str.slice(0,e);const s=this.str.charCodeAt(e-1);return s>=55296&&s<=56319&&(this.str=this.str.slice(0,e-1)+"�",n.str="�"+n.str.slice(1)),n}mergeWith(e){return this.str+=e.str,!0}integrate(e,n){}delete(e){}gc(e){}write(e,n){e.writeString(n===0?this.str:this.str.slice(n))}getRef(){return 4}}const Cp=t=>new Ye(t.readString()),_p=[rp,ip,up,hp,fp,yp,gp],Ip=0,Lp=1,Dp=2,Bp=3,Rp=4,Tp=5,Mp=6;class at{constructor(e){this.type=e}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new at(this.type._copy())}splice(e){throw Oe()}mergeWith(e){return!1}integrate(e,n){this.type._integrate(e.doc,n)}delete(e){let n=this.type._start;for(;n!==null;)n.deleted?n.id.clock<(e.beforeState.get(n.id.client)||0)&&e._mergeStructs.push(n):n.delete(e),n=n.right;this.type._map.forEach(s=>{s.deleted?s.id.clock<(e.beforeState.get(s.id.client)||0)&&e._mergeStructs.push(s):s.delete(e)}),e.changed.delete(this.type)}gc(e){let n=this.type._start;for(;n!==null;)n.gc(e,!0),n=n.right;this.type._start=null,this.type._map.forEach(s=>{for(;s!==null;)s.gc(e,!0),s=s.left}),this.type._map=new Map}write(e,n){this.type._write(e)}getRef(){return 7}}const Op=t=>new at(_p[t.readTypeRef()](t)),Zs=(t,e,n)=>{const{client:s,clock:r}=e.id,o=new re(K(s,r+n),e,K(s,r+n-1),e.right,e.rightOrigin,e.parent,e.parentSub,e.content.splice(n));return e.deleted&&o.markDeleted(),e.keep&&(o.keep=!0),e.redone!==null&&(o.redone=K(e.redone.client,e.redone.clock+n)),e.right=o,o.right!==null&&(o.right.left=o),t._mergeStructs.push(o),o.parentSub!==null&&o.right===null&&o.parent._map.set(o.parentSub,o),e.length=n,o};class re extends Ii{constructor(e,n,s,r,o,i,c,a){super(e,a.getLength()),this.origin=s,this.left=n,this.right=r,this.rightOrigin=o,this.parent=i,this.parentSub=c,this.redone=null,this.content=a,this.info=this.content.isCountable()?ic:0}set marker(e){(this.info&Yr)>0!==e&&(this.info^=Yr)}get marker(){return(this.info&Yr)>0}get keep(){return(this.info&oc)>0}set keep(e){this.keep!==e&&(this.info^=oc)}get countable(){return(this.info&ic)>0}get deleted(){return(this.info&Wr)>0}set deleted(e){this.deleted!==e&&(this.info^=Wr)}markDeleted(){this.info|=Wr}getMissing(e,n){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=ce(n,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=ce(n,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===Xt&&this.id.client!==this.parent.client&&this.parent.clock>=ce(n,this.parent.client))return this.parent.client;if(this.origin&&(this.left=Ec(e,n,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=yt(e,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===Ae||this.right&&this.right.constructor===Ae)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===re?(this.parent=this.left.parent,this.parentSub=this.left.parentSub):this.right&&this.right.constructor===re&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===Xt){const s=to(n,this.parent);s.constructor===Ae?this.parent=null:this.parent=s.content.type}return null}integrate(e,n){if(n>0&&(this.id.clock+=n,this.left=Ec(e,e.doc.store,K(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(n),this.length-=n),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let s=this.left,r;if(s!==null)r=s.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;const o=new Set,i=new Set;for(;r!==null&&r!==this.right;){if(i.add(r),o.add(r),ps(this.origin,r.origin)){if(r.id.client<this.id.client)s=r,o.clear();else if(ps(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&i.has(to(e.doc.store,r.origin)))o.has(to(e.doc.store,r.origin))||(s=r,o.clear());else break;r=r.right}this.left=s}if(this.left!==null){const s=this.left.right;this.right=s,this.left.right=this}else{let s;if(this.parentSub!==null)for(s=this.parent._map.get(this.parentSub)||null;s!==null&&s.left!==null;)s=s.left;else s=this.parent._start,this.parent._start=this;this.right=s}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(e)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),Sl(e.doc.store,this),this.content.integrate(e,this),xc(e,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(e)}else new Ae(this.id,this.length).integrate(e,0)}get next(){let e=this.right;for(;e!==null&&e.deleted;)e=e.right;return e}get prev(){let e=this.left;for(;e!==null&&e.deleted;)e=e.left;return e}get lastId(){return this.length===1?this.id:K(this.id.client,this.id.clock+this.length-1)}mergeWith(e){if(this.constructor===e.constructor&&ps(e.origin,this.lastId)&&this.right===e&&ps(this.rightOrigin,e.rightOrigin)&&this.id.client===e.id.client&&this.id.clock+this.length===e.id.clock&&this.deleted===e.deleted&&this.redone===null&&e.redone===null&&this.content.constructor===e.content.constructor&&this.content.mergeWith(e.content)){const n=this.parent._searchMarker;return n&&n.forEach(s=>{s.p===e&&(s.p=this,!this.deleted&&this.countable&&(s.index-=this.length))}),e.keep&&(this.keep=!0),this.right=e.right,this.right!==null&&(this.right.left=this),this.length+=e.length,!0}return!1}delete(e){if(!this.deleted){const n=this.parent;this.countable&&this.parentSub===null&&(n._length-=this.length),this.markDeleted(),Hs(e.deleteSet,this.id.client,this.id.clock,this.length),xc(e,n,this.parentSub),this.content.delete(e)}}gc(e,n){if(!this.deleted)throw Ie();this.content.gc(e),n?$h(e,this,new Ae(this.id,this.length)):this.content=new Yn(this.length)}write(e,n){const s=n>0?K(this.id.client,this.id.clock+n-1):this.origin,r=this.rightOrigin,o=this.parentSub,i=this.content.getRef()&Sr|(s===null?0:Ee)|(r===null?0:ot)|(o===null?0:$n);if(e.writeInfo(i),s!==null&&e.writeLeftID(s),r!==null&&e.writeRightID(r),s===null&&r===null){const c=this.parent;if(c._item!==void 0){const a=c._item;if(a===null){const l=Nh(c);e.writeParentInfo(!0),e.writeString(l)}else e.writeParentInfo(!1),e.writeLeftID(a.id)}else c.constructor===String?(e.writeParentInfo(!0),e.writeString(c)):c.constructor===Xt?(e.writeParentInfo(!1),e.writeLeftID(c)):Ie();o!==null&&e.writeString(o)}this.content.write(e,n)}}const jl=(t,e)=>Pp[e&Sr](t),Pp=[()=>{Ie()},vp,Sp,mp,Cp,kp,Ep,Op,Ap,bp,()=>{Ie()}],Kp=10;class Ce extends Ii{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,n){Ie()}write(e,n){e.writeInfo(Kp),U(e.restEncoder,this.length-n)}getMissing(e,n){return null}}const ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},Hl="__ $YJS$ __";ql[Hl]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");ql[Hl]=!0;const Np="psw-pwa-vault-unlock-v1",Li=new TextEncoder().encode(Np),Up="psw-pwa-kek1-v1",$p="psw-pwa/prf-kem-seed/v1",zl=1,Oo=1,Vp=4,Fp=720*60*60*1e3,Te={m:65536,t:3,p:4,dkLen:32};class jp extends Error{constructor(e){super(e),this.name="UnsupportedEnvironmentError"}}async function gt(t,e,n,s=!1){if(s)throw new Error("PBKDF2 fast path is dev-only. Argon2id WASM must be wired for production.");let r;try{r=(await kr(()=>import("./index.esm-BNDTNUIh.js"),[])).argon2id}catch{throw new jp("Your browser doesn't support the security features required. Please update your browser.")}const o=n?.memory??Te.m,i=n?.iterations??Te.t,c=n?.parallelism??Te.p,a=await r({password:t,salt:e,parallelism:c,iterations:i,memorySize:o,hashLength:32,outputType:"binary"}),l=new Uint8Array(a.slice().buffer);return crypto.subtle.importKey("raw",l,{name:"AES-KW",length:256},!1,["wrapKey","unwrapKey"])}async function Di(t,e){const n=await crypto.subtle.importKey("raw",t,"HKDF",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:e.slice(),info:new TextEncoder().encode(Up)},n,{name:"AES-KW",length:256},!1,["wrapKey","unwrapKey"])}async function qp(t,e){const n=await crypto.subtle.importKey("raw",t,"HKDF",!1,["deriveKey"]),s=await crypto.subtle.deriveBits({name:"HKDF",hash:"SHA-256",salt:e.slice(),info:new TextEncoder().encode($p)},n,512);return new Uint8Array(s)}async function Hp(){return crypto.subtle.generateKey({name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function et(t,e){const n=await crypto.subtle.wrapKey("raw",t,e,"AES-KW");return Pe(new Uint8Array(n))}async function Zt(t,e,n=["encrypt","decrypt"]){const s=St(t);return crypto.subtle.unwrapKey("raw",s,e,"AES-KW",{name:"AES-GCM",length:256},!1,n)}function Pe(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function St(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=atob(e+"=".repeat((4-e.length%4)%4));return new Uint8Array(n.split("").map(s=>s.charCodeAt(0)))}class zp extends Error{constructor(e){super(e),this.name="UnsupportedEnvelopeError"}}const Gp=new Set(["passkey","personal","either","both-required"]);function Wp(t){if(typeof t.backupMode=="string"&&Gp.has(t.backupMode))return t.backupMode}async function Gl(t,e){const n=crypto.getRandomValues(new Uint8Array(12)),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,e);return{v:Oo,iv:Pe(n),ct:Pe(new Uint8Array(s))}}async function Yp(t,e){if(e.v>Oo)throw new zp(`Envelope v${e.v} not supported (max: ${Oo}) — update the app`);const n=St(e.iv),s=St(e.ct),r=await crypto.subtle.decrypt({name:"AES-GCM",iv:n},t,s);return new Uint8Array(r)}const Po=(t,e)=>e.some(n=>t instanceof n);let Lc,Dc;function Xp(){return Lc||(Lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jp(){return Dc||(Dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ko=new WeakMap,ro=new WeakMap,Kr=new WeakMap;function Zp(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(Ct(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)});return Kr.set(e,t),e}function Qp(t){if(Ko.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Ko.set(t,e)}let No={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ko.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wl(t){No=t(No)}function ey(t){return Jp().includes(t)?function(...e){return t.apply(Uo(this),e),Ct(this.request)}:function(...e){return Ct(t.apply(Uo(this),e))}}function ty(t){return typeof t=="function"?ey(t):(t instanceof IDBTransaction&&Qp(t),Po(t,Xp())?new Proxy(t,No):t)}function Ct(t){if(t instanceof IDBRequest)return Zp(t);if(ro.has(t))return ro.get(t);const e=ty(t);return e!==t&&(ro.set(t,e),Kr.set(e,t)),e}const Uo=t=>Kr.get(t);function ny(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const i=indexedDB.open(t,e),c=Ct(i);return s&&i.addEventListener("upgradeneeded",a=>{s(Ct(i.result),a.oldVersion,a.newVersion,Ct(i.transaction),a)}),n&&i.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{o&&a.addEventListener("close",()=>o()),r&&a.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const sy=["get","getKey","getAll","getAllKeys","count"],ry=["put","add","delete","clear"],oo=new Map;function Bc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ry.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||sy.includes(n)))return;const o=async function(i,...c){const a=this.transaction(i,r?"readwrite":"readonly");let l=a.store;return s&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),r&&a.done]))[0]};return oo.set(e,o),o}Wl(t=>({...t,get:(e,n,s)=>Bc(e,n)||t.get(e,n,s),has:(e,n)=>!!Bc(e,n)||t.has(e,n)}));const oy=["continue","continuePrimaryKey","advance"],Rc={},$o=new WeakMap,Yl=new WeakMap,iy={get(t,e){if(!oy.includes(e))return t[e];let n=Rc[e];return n||(n=Rc[e]=function(...s){$o.set(this,Yl.get(this)[e](...s))}),n}};async function*cy(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;e=e;const n=new Proxy(e,iy);for(Yl.set(n,e),Kr.set(n,Uo(e));e;)yield n,e=await($o.get(n)||e.continue()),$o.delete(n)}function Tc(t,e){return e===Symbol.asyncIterator&&Po(t,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&Po(t,[IDBIndex,IDBObjectStore])}Wl(t=>({...t,get(e,n,s){return Tc(e,n)?cy:t.get(e,n,s)},has(e,n){return Tc(e,n)||t.has(e,n)}}));const ay={version:1,description:"Create vault, keystore, devices, replay, cursors, meta stores",migrate(t){if(!t.objectStoreNames.contains("vault")){const e=t.createObjectStore("vault",{keyPath:"id"});e.createIndex("updatedAt","updatedAt"),e.createIndex("_deleted","_deleted")}if(t.objectStoreNames.contains("keystore")||t.createObjectStore("keystore",{keyPath:"credentialId"}),!t.objectStoreNames.contains("devices")){const e=t.createObjectStore("devices",{keyPath:"deviceId"});e.createIndex("lastKnownIp","lastKnownIp"),e.createIndex("revokedAt","revokedAt")}t.objectStoreNames.contains("replay")||t.createObjectStore("replay",{keyPath:"sessionId"}).createIndex("expiresAt","expiresAt"),t.objectStoreNames.contains("cursors")||t.createObjectStore("cursors",{keyPath:["localDeviceId","peerDeviceId"]}),t.objectStoreNames.contains("meta")||t.createObjectStore("meta",{keyPath:"id"})}},ly={version:2,description:"Add backup-handles store",migrate(t){t.objectStoreNames.contains("backup-handles")||t.createObjectStore("backup-handles",{keyPath:"key"})}},Vo=[ay,ly],Fo=Vo[Vo.length-1].version,dy=["vault","keystore","devices","replay","cursors","meta","backup-handles"];class we{constructor(e){this.db=e}async get(){return this.db.get("meta","meta")}async save(e){await this.db.put("meta",{...e,id:"meta"})}async bumpWrapVersion(e){await Xl(this.db,e)}}async function Xl(t,e){const n=t.transaction("meta","readwrite"),r=(await n.store.get("meta"))?.wrapVersion??0,o=r+1;if(e.wrapVersion!==r)throw await n.done,new Error(`wrapVersion concurrent modification: DB has wrapVersion=${r}, but caller's snapshot has wrapVersion=${e.wrapVersion}. Re-read MetaRecord and retry.`);await n.store.put({...e,id:"meta",wrapVersion:o}),await n.done}const Bi="psw-vault";async function te(){const t=await ny(Bi,Fo,{upgrade(e,n,s,r){for(const o of Vo)o.version>n&&o.migrate(e,r)}});return await uy(t).catch(e=>{console.warn("[openAppDB] syncMetaSchemaVersion failed (first open, no meta yet?):",e)}),t}async function uy(t){const e=new we(t),n=await e.get();n&&n.schemaVersion!==Fo&&await e.save({...n,schemaVersion:Fo})}const Mc="__psw_ydoc__";function fy(){const t=globalThis[Mc];if(t instanceof Dt)return t;const e=new Dt;return globalThis[Mc]=e,e}const pt=fy();async function hy(){const t=pt.getMap("vault");if(t.size>0)return;const n=await(await te()).getAll("vault");n.length!==0&&pt.transact(()=>{for(const s of n)s.id&&t.set(s.id,s)})}function Oc(t){const e=pt.getMap("vault");pt.transact(()=>{for(const n of Array.from(e.keys()))e.delete(n)}),Rh(pt,t)}const Jl={memory:Te.m,iterations:Te.t,parallelism:Te.p,dkLen:Te.dkLen};async function Zl(t){const e=await te(),s=await new we(e).get(),r=Pe(Oh(pt)),o={};let c=await e.transaction("keystore","readonly").store.openCursor();for(;c;){const l=c.value;o[l.credentialId]=l,c=await c.continue()}const a={yjsSnapshot:r,vaultEntries_legacy:null,keystoreEntries:o,metaSnapshot:s??null};return new TextEncoder().encode(JSON.stringify(a))}async function Ql(t){if(!t.password&&!t.recoveryPhrase)throw new Error("ExportPackage requires at least one credential (password or recovery phrase)");const e=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),n=crypto.getRandomValues(new Uint8Array(32)),s={v:1,createdAt:Date.now(),kdfAlgorithm:"argon2id",salt:Pe(n),kdfParams:Jl,wrapAlgorithm:"AES-KW",wrapVersion:1};if(t.password){const c=await gt(t.password,n,void 0,!1),a=await crypto.subtle.wrapKey("raw",e,c,"AES-KW");s.wrappedDekExport_password=Pe(new Uint8Array(a))}if(t.recoveryPhrase){const c=await gt(t.recoveryPhrase,n,void 0,!1),a=await crypto.subtle.wrapKey("raw",e,c,"AES-KW");s.wrappedDekExport_recovery=Pe(new Uint8Array(a))}const r=await Zl(),o=await Gl(e,r),i={header:s,payload:o};return new TextEncoder().encode(JSON.stringify(i)).buffer}async function py(t){const e={v:1,createdAt:Date.now(),kdfAlgorithm:"none",salt:Pe(crypto.getRandomValues(new Uint8Array(32))),kdfParams:Jl,wrapAlgorithm:"AES-KW",wrapVersion:1},n=await Zl(),s=await Gl(t,n),r={header:e,payload:s};return new TextEncoder().encode(JSON.stringify(r)).buffer}const ed="icloud-file-handle",td="icloud-last-save-at",Ri=typeof window.showSaveFilePicker=="function";let Qs=null,Ti=!1;function Mi(t){Qs=t}function yy(){Ti=!0}function gy(){Qs=null,Ti=!1}async function wy(){if(!Ri)throw new Error("showSaveFilePicker not supported on this platform");const t=await window.showSaveFilePicker({suggestedName:"vault.enc",types:[{description:"Encrypted vault backup",accept:{"application/octet-stream":[".enc"]}}],startIn:"documents"});return await ky(t),t}async function nd(t,e){const n=await t.createWritable();await n.write(new Blob([e])),await n.close(),await(await te()).put("backup-handles",{key:td,value:Date.now()})}async function sd(t){return await t.queryPermission({mode:"readwrite"})!=="granted"&&await t.requestPermission({mode:"readwrite"})!=="granted"?(window.dispatchEvent(new CustomEvent("icloud-handle-stale")),null):t}async function my(t){if(!Ri)return;const e=await Oi();if(!e)return;const n=await sd(e);if(!n)return;const s=await Ql(t);await nd(n,s)}async function vy(){if(!Ri)return;const t=await Oi();if(!t)return;const e=await sd(t);if(!e)return;const n=ku(),s=await py(n);await nd(e,s)}function io(){if(Qs){my(Qs).catch(t=>{console.warn("[icloud-autosave] Auto-save failed silently:",t)});return}Ti&&vy().catch(t=>{console.warn("[icloud-autosave] Passkey auto-save failed silently:",t)})}async function rd(){return(await(await te()).get("backup-handles",td))?.value??null}async function by(){const t=await Oi();if(!t)return null;try{return await t.queryPermission({mode:"readwrite"})==="granted"}catch{return!1}}async function ky(t){await(await te()).put("backup-handles",{key:ed,value:t})}async function Oi(){return(await(await te()).get("backup-handles",ed))?.value??null}function Mt(){Eu(),gy(),me._set("locked")}const od=900*1e3,Ey=Math.min(3e5,od);let Qt=null,Pc=!1,Kc=0,id=Ey;function Sy(){Mt()}function Ln(){Qt!==null&&clearTimeout(Qt),Qt=setTimeout(Sy,id)}function Nc(t){t!==void 0&&(id=Math.min(Math.max(t,6e4),od)),xy(),Ln()}function cd(){Qt!==null&&(clearTimeout(Qt),Qt=null),Ay()}function xy(){Pc||(Pc=!0,window.addEventListener("pointerdown",Ln,{passive:!0}),window.addEventListener("keydown",Ln,{passive:!0}),window.addEventListener("scroll",Ln,{passive:!0}),window.addEventListener("pointermove",()=>{const t=Date.now();t-Kc>1e3&&(Kc=t,Ln())},{passive:!0}))}function Ay(){const t=document.querySelector('[data-testid="idle-remaining"]');t&&(t.textContent="")}const Xn=new Map;let Bn=null;const Bs=[],Cy=50;function Xe(t,e){Xn.set(t,e)}function ad(t){for(const[,n]of Xn)n.style.display="none";const e=Xn.get(t);e.style.display=e.dataset.display||"contents",Bn=t}function J(t){if(!Xn.has(t)){console.warn(`[router] showScreen: unknown screen "${t}"`);return}Bn&&Bn!==t&&(Bs.push(Bn),Bs.length>Cy&&Bs.shift()),ad(t)}function Nr(){const t=Bs.pop();if(t){if(!Xn.has(t)){console.warn(`[router] back: unknown screen "${t}"`);return}ad(t)}}function _y(){document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?Mt():document.visibilityState==="visible"&&me.state==="locked"&&J("lock-screen")}),window.addEventListener("pagehide",()=>Mt()),me.subscribe(t=>{t==="unlocked"?te().then(e=>new we(e).get()).then(e=>Nc(e?.autoLockMs)).catch(()=>Nc()):cd()})}function Iy(){return me.subscribe(t=>{})}async function Ly(){if(navigator.storage?.persist){const t=await navigator.storage.persist();console.log(`Storage persistence: ${t?"granted":"not granted (data may be evicted)"}`)}}function Dy(){return crypto.getRandomValues(new Uint8Array(32))}/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function By(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Uc(t,e=""){if(!Number.isSafeInteger(t)||t<0){const n=e&&`"${e}" `;throw new Error(`${n}expected integer >= 0, got ${t}`)}}function it(t,e,n=""){const s=By(t),r=t?.length,o=e!==void 0;if(!s||o&&r!==e){const i=n&&`"${n}" `,c=o?` of length ${e}`:"",a=s?`length=${r}`:`type=${typeof t}`;throw new Error(i+"expected Uint8Array"+c+", got "+a)}return t}function er(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function ld(t,e){it(t,void 0,"digestInto() output");const n=e.outputLen;if(t.length<n)throw new Error('"digestInto() output" expected to be of length >='+n)}function dd(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Jn(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function co(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function Fe(t,e){return t<<32-e|t>>>e}const Ry=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Ty(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function My(t){for(let e=0;e<t.length;e++)t[e]=Ty(t[e]);return t}const tr=Ry?t=>t:My;function Pi(t,e={}){const n=(r,o)=>t(o).update(r).digest(),s=t(void 0);return n.outputLen=s.outputLen,n.blockLen=s.blockLen,n.create=r=>t(r),Object.assign(n,e),Object.freeze(n)}function Oy(t=32){const e=typeof globalThis=="object"?globalThis.crypto:null;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");return e.getRandomValues(new Uint8Array(t))}const us=t=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,t])});function Py(t,e,n){return t&e^~t&n}function Ky(t,e,n){return t&e^t&n^e&n}class Ny{blockLen;outputLen;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,n,s,r){this.blockLen=e,this.outputLen=n,this.padOffset=s,this.isLE=r,this.buffer=new Uint8Array(e),this.view=co(this.buffer)}update(e){er(this),it(e);const{view:n,buffer:s,blockLen:r}=this,o=e.length;for(let i=0;i<o;){const c=Math.min(r-this.pos,o-i);if(c===r){const a=co(e);for(;r<=o-i;i+=r)this.process(a,i);continue}s.set(e.subarray(i,i+c),this.pos),this.pos+=c,i+=c,this.pos===r&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){er(this),ld(e,this),this.finished=!0;const{buffer:n,view:s,blockLen:r,isLE:o}=this;let{pos:i}=this;n[i++]=128,Jn(this.buffer.subarray(i)),this.padOffset>r-i&&(this.process(s,0),i=0);for(let u=i;u<r;u++)n[u]=0;s.setBigUint64(r-8,BigInt(this.length*8),o),this.process(s,0);const c=co(e),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen must be aligned to 32bit");const l=a/4,d=this.get();if(l>d.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<l;u++)c.setUint32(4*u,d[u],o)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const s=e.slice(0,n);return this.destroy(),s}_cloneInto(e){e||=new this.constructor,e.set(...this.get());const{blockLen:n,buffer:s,length:r,finished:o,destroyed:i,pos:c}=this;return e.destroyed=i,e.finished=o,e.length=r,e.pos=c,r%n&&e.buffer.set(s),e}clone(){return this._cloneInto()}}const lt=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ws=BigInt(2**32-1),$c=BigInt(32);function Uy(t,e=!1){return e?{h:Number(t&ws),l:Number(t>>$c&ws)}:{h:Number(t>>$c&ws)|0,l:Number(t&ws)|0}}function $y(t,e=!1){const n=t.length;let s=new Uint32Array(n),r=new Uint32Array(n);for(let o=0;o<n;o++){const{h:i,l:c}=Uy(t[o],e);[s[o],r[o]]=[i,c]}return[s,r]}const Vy=(t,e,n)=>t<<n|e>>>32-n,Fy=(t,e,n)=>e<<n|t>>>32-n,jy=(t,e,n)=>e<<n-32|t>>>64-n,qy=(t,e,n)=>t<<n-32|e>>>64-n,Hy=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),dt=new Uint32Array(64);class zy extends Ny{constructor(e){super(64,e,8,!1)}get(){const{A:e,B:n,C:s,D:r,E:o,F:i,G:c,H:a}=this;return[e,n,s,r,o,i,c,a]}set(e,n,s,r,o,i,c,a){this.A=e|0,this.B=n|0,this.C=s|0,this.D=r|0,this.E=o|0,this.F=i|0,this.G=c|0,this.H=a|0}process(e,n){for(let u=0;u<16;u++,n+=4)dt[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){const f=dt[u-15],h=dt[u-2],p=Fe(f,7)^Fe(f,18)^f>>>3,m=Fe(h,17)^Fe(h,19)^h>>>10;dt[u]=m+dt[u-7]+p+dt[u-16]|0}let{A:s,B:r,C:o,D:i,E:c,F:a,G:l,H:d}=this;for(let u=0;u<64;u++){const f=Fe(c,6)^Fe(c,11)^Fe(c,25),h=d+f+Py(c,a,l)+Hy[u]+dt[u]|0,m=(Fe(s,2)^Fe(s,13)^Fe(s,22))+Ky(s,r,o)|0;d=l,l=a,a=c,c=i+h|0,i=o,o=r,r=s,s=h+m|0}s=s+this.A|0,r=r+this.B|0,o=o+this.C|0,i=i+this.D|0,c=c+this.E|0,a=a+this.F|0,l=l+this.G|0,d=d+this.H|0,this.set(s,r,o,i,c,a,l,d)}roundClean(){Jn(dt)}destroy(){this.set(0,0,0,0,0,0,0,0),Jn(this.buffer)}}class Gy extends zy{A=lt[0]|0;B=lt[1]|0;C=lt[2]|0;D=lt[3]|0;E=lt[4]|0;F=lt[5]|0;G=lt[6]|0;H=lt[7]|0;constructor(){super(32)}}const Wy=Pi(()=>new Gy,us(1));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function nr(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function ud(t,e){return Array.isArray(e)?e.length===0?!0:t?e.every(n=>typeof n=="string"):e.every(n=>Number.isSafeInteger(n)):!1}function Yy(t){if(typeof t!="function")throw new Error("function expected");return!0}function sr(t,e){if(typeof e!="string")throw new Error(`${t}: string expected`);return!0}function vn(t){if(!Number.isSafeInteger(t))throw new Error(`invalid integer: ${t}`)}function rr(t){if(!Array.isArray(t))throw new Error("array expected")}function or(t,e){if(!ud(!0,e))throw new Error(`${t}: array of strings expected`)}function fd(t,e){if(!ud(!1,e))throw new Error(`${t}: array of numbers expected`)}function Xy(...t){const e=o=>o,n=(o,i)=>c=>o(i(c)),s=t.map(o=>o.encode).reduceRight(n,e),r=t.map(o=>o.decode).reduce(n,e);return{encode:s,decode:r}}function Jy(t){const e=typeof t=="string"?t.split(""):t,n=e.length;or("alphabet",e);const s=new Map(e.map((r,o)=>[r,o]));return{encode:r=>(rr(r),r.map(o=>{if(!Number.isSafeInteger(o)||o<0||o>=n)throw new Error(`alphabet.encode: digit index outside alphabet "${o}". Allowed: ${t}`);return e[o]})),decode:r=>(rr(r),r.map(o=>{sr("alphabet.decode",o);const i=s.get(o);if(i===void 0)throw new Error(`Unknown letter: "${o}". Allowed: ${t}`);return i}))}}function Zy(t=""){return sr("join",t),{encode:e=>(or("join.decode",e),e.join(t)),decode:e=>(sr("join.decode",e),e.split(t))}}function Qy(t,e="="){return vn(t),sr("padding",e),{encode(n){for(or("padding.encode",n);n.length*t%8;)n.push(e);return n},decode(n){or("padding.decode",n);let s=n.length;if(s*t%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;s>0&&n[s-1]===e;s--)if((s-1)*t%8===0)throw new Error("padding: invalid, string has too much padding");return n.slice(0,s)}}}function jo(t,e,n){if(e<2)throw new Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: invalid to=${n}, base cannot be less than 2`);if(rr(t),!t.length)return[];let s=0;const r=[],o=Array.from(t,c=>{if(vn(c),c<0||c>=e)throw new Error(`invalid integer: ${c}`);return c}),i=o.length;for(;;){let c=0,a=!0;for(let l=s;l<i;l++){const d=o[l],u=e*c,f=u+d;if(!Number.isSafeInteger(f)||u/e!==c||f-d!==u)throw new Error("convertRadix: carry overflow");const h=f/n;c=f%n;const p=Math.floor(h);if(o[l]=p,!Number.isSafeInteger(p)||p*n+c!==f)throw new Error("convertRadix: carry overflow");if(a)p?a=!1:s=l;else continue}if(r.push(c),a)break}for(let c=0;c<t.length-1&&t[c]===0;c++)r.push(0);return r.reverse()}const hd=(t,e)=>e===0?t:hd(e,t%e),ir=(t,e)=>t+(e-hd(t,e)),ao=(()=>{let t=[];for(let e=0;e<40;e++)t.push(2**e);return t})();function qo(t,e,n,s){if(rr(t),e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(ir(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${ir(e,n)}`);let r=0,o=0;const i=ao[e],c=ao[n]-1,a=[];for(const l of t){if(vn(l),l>=i)throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);if(r=r<<e|l,o+e>32)throw new Error(`convertRadix2: carry overflow pos=${o} from=${e}`);for(o+=e;o>=n;o-=n)a.push((r>>o-n&c)>>>0);const d=ao[o];if(d===void 0)throw new Error("invalid carry");r&=d-1}if(r=r<<n-o&c,!s&&o>=e)throw new Error("Excess padding");if(!s&&r>0)throw new Error(`Non-zero padding: ${r}`);return s&&o>0&&a.push(r>>>0),a}function eg(t){vn(t);const e=2**8;return{encode:n=>{if(!nr(n))throw new Error("radix.encode input should be Uint8Array");return jo(Array.from(n),e,t)},decode:n=>(fd("radix.decode",n),Uint8Array.from(jo(n,t,e)))}}function tg(t,e=!1){if(vn(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(ir(8,t)>32||ir(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!nr(n))throw new Error("radix2.encode input should be Uint8Array");return qo(Array.from(n),8,t,!e)},decode:n=>(fd("radix2.decode",n),Uint8Array.from(qo(n,t,8,e)))}}function ng(t,e){return vn(t),Yy(e),{encode(n){if(!nr(n))throw new Error("checksum.encode: input should be Uint8Array");const s=e(n).slice(0,t),r=new Uint8Array(n.length+t);return r.set(n),r.set(s,n.length),r},decode(n){if(!nr(n))throw new Error("checksum.decode: input should be Uint8Array");const s=n.slice(0,-t),r=n.slice(-t),o=e(s).slice(0,t);for(let i=0;i<t;i++)if(o[i]!==r[i])throw new Error("Invalid checksum");return s}}}const ms={alphabet:Jy,chain:Xy,checksum:ng,convertRadix:jo,convertRadix2:qo,radix:eg,radix2:tg,join:Zy,padding:Qy};/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const sg=t=>t[0]==="あいこくしん";function rg(t){if(typeof t!="string")throw new TypeError("invalid mnemonic type: "+typeof t);return t.normalize("NFKD")}function og(t){const e=rg(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function pd(t){if(it(t),![16,20,24,28,32].includes(t.length))throw new Error("invalid entropy length")}const ig=t=>{const e=8-t.length/4;return new Uint8Array([Wy(t)[0]>>e<<e])};function yd(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error("wordlist: non-string element: "+e)}),ms.chain(ms.checksum(1,ig),ms.radix2(11,!0),ms.alphabet(t))}function cg(t,e){const{words:n}=og(t),s=yd(e).decode(n);return pd(s),s}function ag(t,e){return pd(t),yd(e).encode(t).join(sg(e)?"　":" ")}const gd=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`),lg=new TextEncoder().encode("psw-pwa/personal-wrap/v1");async function dg(){return crypto.subtle.generateKey({name:"ECDH",namedCurve:"X25519"},!0,["deriveKey","deriveBits"])}async function ug(t){const e=new Uint8Array(await crypto.subtle.exportKey("raw",t));try{return ag(e,gd)}finally{e.fill(0)}}async function Vc(t){const e=await crypto.subtle.exportKey("jwk",t),n=JSON.stringify({crv:e.crv,kty:e.kty,x:e.x}),s=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return Pe(new Uint8Array(s))}async function Fc(t,e){const n=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"X25519"},!0,["deriveKey"]),s=await crypto.subtle.deriveBits({name:"ECDH",public:e},n.privateKey,256),r=await crypto.subtle.importKey("raw",s,"HKDF",!1,["deriveKey"]),o=await crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:new Uint8Array(32),info:lg},r,{name:"AES-GCM",length:256},!1,["encrypt"]),i=new Uint8Array(await crypto.subtle.exportKey("raw",t)),c=crypto.getRandomValues(new Uint8Array(12)),a=await crypto.subtle.encrypt({name:"AES-GCM",iv:c},o,i),l=new Uint8Array(await crypto.subtle.exportKey("raw",n.publicKey)),d=new Uint8Array(44+a.byteLength);return d.set(l,0),d.set(c,32),d.set(new Uint8Array(a),44),Pe(d)}async function fg(t,e){let n;try{n=(await kr(()=>import("./index.esm-BNDTNUIh.js"),[])).argon2id}catch{throw new Error("Your browser doesn't support the security features required. Please update your browser.")}return n({password:new TextEncoder().encode(t),salt:e,parallelism:1,iterations:3,memorySize:65536,hashLength:32,outputType:"binary"})}async function hg(t){return crypto.subtle.importKey("raw",t.slice().buffer,{name:"ECDH",namedCurve:"X25519"},!1,["deriveKey","deriveBits"])}const Tv=new Uint8Array([111,26,60,142,34,212,87,185,160,95,126,17,144,188,68,45,56,250,108,5,29,155,115,204,228,39,129,15,85,210,174,99]).buffer;let wd;wd=t=>navigator.credentials.get(t);const pg=t=>wd(t);let md;md=t=>navigator.credentials.create(t);const yg=t=>md(t);let lo="both",vs="",uo="",Sn=null,Nt="bip39";const jc=!1;function gg(t){if(t.classList.add("onboarding"),!window.PublicKeyCredential){t.innerHTML=`
      <div class="onboarding-step active">
        <div class="top" style="text-align:center">
          <div class="logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <div class="page-title">Passkey Required</div>
          <div class="subtitle">This device does not support passkeys with PRF (Face ID / Touch ID).
psw-pwa requires a passkey-capable device with the PRF extension.</div>
        </div>
      </div>`;return}const e=document.createElement("div");e.className="onboarding-step active",e.innerHTML=`
  <div class="top" style="text-align:center">
    <div class="logo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    </div>
    <div class="page-title">New Vault</div>
    <div class="subtitle">Choose how you unlock it</div>
  </div>

  <div class="middle" style="margin-top:40px">
    <div class="step-label">Unlock method</div>
    <div class="card">
      <div class="card-row" data-mode="both">
        <div class="check selected" data-check="both"></div>
        <div class="row-body">
          <div class="row-label">Strong — Face ID + Password</div>
          <div class="row-sub">Recommended · Both factors required to unlock</div>
        </div>
      </div>
      <div class="card-row" data-mode="either">
        <div class="check" data-check="either"></div>
        <div class="row-body">
          <div class="row-label">Normal — Face ID or Password</div>
          <div class="row-sub">Either factor unlocks the vault</div>
        </div>
      </div>
    </div>
  </div>

  <div class="bottom" style="padding-top:24px">
    <button class="btn" data-action="next1">Next</button>
  </div>`;const n=document.createElement("div");n.className="onboarding-step",n.innerHTML=`
  <div class="top" style="text-align:center">
    <div class="page-title">Set Password</div>
    <div class="subtitle">This is your master password</div>
  </div>

  <div class="middle" style="margin-top:40px">
    <div class="input-card">
      <input data-input="pw1" type="password" placeholder="Enter password" autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false"/>
    </div>
    <div class="input-card">
      <input data-input="pw2" type="password" placeholder="Confirm password" autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false"/>
    </div>
    <p class="pw-mismatch" data-el="pw-mismatch" style="display:none">Passwords do not match</p>
  </div>

  <div class="bottom" style="padding-top:24px">
    <button class="btn" data-action="next1_5" disabled>Next</button>
  </div>`;const s=document.createElement("div");s.className="onboarding-step",s.innerHTML=`
  <div class="top" style="text-align:center">
    <div class="page-title">Recovery Key</div>
    <div class="subtitle">Choose your recovery method</div>
  </div>

  <div class="middle" style="margin-top:24px">
    <!-- Toggle between BIP39 and passphrase -->
    <div class="key-type-toggle">
      <div class="toggle-option selected" data-key-type="bip39">
        <div class="toggle-label">Generate recovery phrase</div>
        <div class="toggle-sub">24-word BIP39 mnemonic</div>
      </div>
      <div class="toggle-option" data-key-type="passphrase">
        <div class="toggle-label">Use a passphrase</div>
        <div class="toggle-sub">Memorable but depends on you</div>
        <div class="toggle-tooltip" title="A passphrase you choose. Strength depends on you — use a long, unique phrase. A generated phrase is safer.">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </div>
      </div>
    </div>

    <!-- BIP39 content -->
    <div class="bip39-content" data-el="bip39Content">
      <div class="seed-grid" data-el="seedGrid"></div>
      <div class="confirm-row" data-action="toggleConfirm">
        <div class="confirm-box" data-el="confirmBox">
          <svg viewBox="0 0 12 12" fill="none"><polyline points="2 6 5 9 10 3"/></svg>
        </div>
        <span class="confirm-label">I've written this down</span>
      </div>
    </div>

    <!-- Passphrase content -->
    <div class="passphrase-content" data-el="passphraseContent" style="display:none">
      <div class="input-card">
        <input data-input="pass1" type="password" placeholder="Enter passphrase (min 12 characters)" autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false"/>
      </div>
      <div class="input-card">
        <input data-input="pass2" type="password" placeholder="Confirm passphrase" autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false"/>
      </div>
      <p class="pw-mismatch" data-el="pass-mismatch" style="display:none">Passphrases do not match</p>
      <p class="pass-length-hint" data-el="pass-length">Must be at least 12 characters</p>
    </div>
  </div>

  <div class="bottom" style="padding-top:24px">
    <button class="btn" data-action="continue" disabled>Continue</button>
    <p class="vault-error" data-el="vaultError" style="display:none"></p>
  </div>`,t.append(e,n,s);const r=e.querySelectorAll("[data-check]"),o=e.querySelectorAll("[data-mode]"),i=e.querySelector('[data-action="next1"]'),c=n.querySelector('[data-input="pw1"]'),a=n.querySelector('[data-input="pw2"]'),l=n.querySelector('[data-el="pw-mismatch"]'),d=n.querySelector('[data-action="next1_5"]'),u=s.querySelector('[data-el="seedGrid"]'),f=s.querySelector('[data-el="confirmBox"]'),h=s.querySelector('[data-action="toggleConfirm"]'),p=s.querySelector('[data-action="continue"]'),m=s.querySelector('[data-el="vaultError"]'),w=s.querySelector('[data-el="bip39Content"]'),y=s.querySelector('[data-el="passphraseContent"]'),g=s.querySelector('[data-input="pass1"]'),v=s.querySelector('[data-input="pass2"]'),S=s.querySelector('[data-el="pass-mismatch"]'),A=s.querySelector('[data-el="pass-length"]'),C=s.querySelectorAll("[data-key-type]");function T(M){lo=M,r.forEach(H=>H.classList.remove("selected")),e.querySelector(`[data-check="${M}"]`).classList.add("selected")}o.forEach(M=>{M.addEventListener("click",()=>T(M.dataset.mode))}),i.addEventListener("click",()=>{V(n),c.focus()});function L(){const M=c.value,H=a.value,W=M.length>0&&M===H;d.disabled=!W,H.length>0&&!W?l.style.display="block":l.style.display="none"}c.addEventListener("input",L),a.addEventListener("input",L),d.addEventListener("click",()=>{uo=c.value,V(s),F()});function B(M){Nt=M,C.forEach(H=>H.classList.remove("selected")),s.querySelector(`[data-key-type="${M}"]`).classList.add("selected"),M==="bip39"?(w.style.display="",y.style.display="none"):(w.style.display="none",y.style.display=""),D()}C.forEach(M=>{M.addEventListener("click",()=>B(M.dataset.keyType))});function $(){const M=g.value,H=v.value,W=M.length>0&&M===H,Le=M.length>=12;H.length>0&&!W?S.style.display="block":S.style.display="none",M.length>0?A.style.color=Le?"var(--text2)":"#e53935":A.style.color="",D()}g.addEventListener("input",$),v.addEventListener("input",$);let _=!1;h.addEventListener("click",()=>{_=!_,f.classList.toggle("checked",_),D()});function D(){if(Nt==="bip39")p.disabled=!_;else{const M=g.value,H=v.value,W=M.length>=12&&M===H;p.disabled=!W}}p.addEventListener("click",async()=>{p.disabled=!0,m.style.display="none";try{await Q()}catch(M){m.textContent=M instanceof Error?M.message:"Vault creation failed",m.style.display="block",Nt==="bip39"?p.disabled=!_:D()}});function V(M){e.classList.remove("active"),n.classList.remove("active"),s.classList.remove("active"),M.classList.add("active")}async function F(){Sn=await dg(),vs=await ug(Sn.privateKey);const M=vs.split(" ");u.innerHTML=M.map((H,W)=>`<div class="seed-word">${W+1}. ${H}</div>`).join(""),u.style.userSelect="none",u.style.webkitUserSelect="none"}async function Q(){const M=await wg(),H=Dy(),[W,Le,Je]=await Promise.all([crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"])]),Ue=Nt==="bip39"?vs:g.value,$e=await gt(Ue,H,void 0,jc),[kn,Ze,E]=await Promise.all([et(W,$e),et(Le,$e),et(Je,$e)]);let N,P;if(Nt==="bip39"){if(!Sn)throw new Error("Recovery keypair not generated — onboarding flow error");P=await Vc(Sn.publicKey),N=await Fc(W,Sn.publicKey)}else{const Hr=await fg(g.value,H);await hg(Hr);const mu=await crypto.subtle.importKey("raw",Hr.slice().buffer,{name:"ECDH",namedCurve:"X25519"},!0,["deriveKey","deriveBits"]),vu=await crypto.subtle.exportKey("jwk",mu),nc=await crypto.subtle.importKey("jwk",{kty:"OKP",crv:"X25519",x:vu.x},{name:"ECDH",namedCurve:"X25519"},!1,[]);P=await Vc(nc),N=await Fc(W,nc),Hr.fill(0)}const O={id:"meta",kdfAlgorithm:"argon2id",kdfParams:{algorithm:"argon2id",memory:Te.m,iterations:Te.t,parallelism:Te.p,dkLen:Te.dkLen},salt:H,unlockMode:lo,wrapAlgorithm:"AES-KW",wrapVersion:1,schemaVersion:1,metaVersion:Vp,recoveryKeyThumbprint:P,dek_wrapped_personal:N,personalKeyType:Nt,wrappedDekVault_recovery:kn,wrappedDekKeystore_recovery:Ze,wrappedDekExport_recovery:E,passkeySlots:{vault:{},keystore:{},export:{}}},xe=await gt(uo,H,void 0,jc),[k,x,I]=await Promise.all([et(W,xe),et(Le,xe),et(Je,xe)]);O.wrappedDekVault_password=k,O.wrappedDekKeystore_password=x,O.wrappedDekExport_password=I;const{credentialId:j,prfOutput:le}=M,he=await Di(le,H),[En,yu,gu]=await Promise.all([et(W,he),et(Le,he),et(Je,he)]);O.passkeySlots={vault:{[j]:En},keystore:{[j]:yu},export:{[j]:gu}};const wu=await te();await new we(wu).save(O),ti(lo),rs({kek:$e,dekVault:W,dekKeystore:Le,dekExport:Je}),me._set("unlocked"),vs="",uo="",c.value="",a.value="",J("vault-list"),window.dispatchEvent(new Event("vault-created"))}}async function wg(){const t=await yg({publicKey:{rp:{name:"psw-pwa"},user:{id:crypto.getRandomValues(new Uint8Array(16)),name:"vault-owner",displayName:"Vault Owner"},pubKeyCredParams:[{alg:-7,type:"public-key"},{alg:-257,type:"public-key"}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"required"},challenge:crypto.getRandomValues(new Uint8Array(32)),extensions:{prf:{eval:{first:Li}}}}});if(!t)throw new Error("Passkey creation was cancelled. Please try again.");const e=t.getClientExtensionResults().prf?.results?.first;if(!e)throw new Error("Your authenticator does not support the PRF extension required by psw-pwa.");const n=e instanceof ArrayBuffer?e:new Uint8Array(e).buffer;return{credentialId:t.id,prfOutput:n}}const qc=[{fromVersion:1,toVersion:2,description:"Backfill signCount: 0 on PasskeyEntry records (WebAuthn spec §6.1)",transform(t){if(t.type!=="passkey")return t;const e=t;return typeof e.signCount=="number"?t:{...e,signCount:0}}}];/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const vd={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:cr,n:Rs,Gx:Hc,Gy:zc,a:fo,d:ho,h:mg}=vd,rt=32,vg=(...t)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...t)},se=(t="")=>{const e=new Error(t);throw vg(e,se),e},bg=t=>typeof t=="bigint",kg=t=>typeof t=="string",Eg=t=>t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array",Ke=(t,e,n="")=>{const s=Eg(t),r=t?.length,o=e!==void 0;if(!s||o&&r!==e){const i=n&&`"${n}" `,c=o?` of length ${e}`:"",a=s?`length=${r}`:`type=${typeof t}`;se(i+"expected Uint8Array"+c+", got "+a)}return t},Ur=t=>new Uint8Array(t),bd=t=>Uint8Array.from(t),kd=(t,e)=>t.toString(16).padStart(e,"0"),Ed=t=>Array.from(Ke(t)).map(e=>kd(e,2)).join(""),tt={_0:48,_9:57,A:65,F:70,a:97,f:102},Gc=t=>{if(t>=tt._0&&t<=tt._9)return t-tt._0;if(t>=tt.A&&t<=tt.F)return t-(tt.A-10);if(t>=tt.a&&t<=tt.f)return t-(tt.a-10)},Sd=t=>{const e="hex invalid";if(!kg(t))return se(e);const n=t.length,s=n/2;if(n%2)return se(e);const r=Ur(s);for(let o=0,i=0;o<s;o++,i+=2){const c=Gc(t.charCodeAt(i)),a=Gc(t.charCodeAt(i+1));if(c===void 0||a===void 0)return se(e);r[o]=c*16+a}return r},xd=()=>globalThis?.crypto,Sg=()=>xd()?.subtle??se("crypto.subtle must be defined, consider polyfill"),fn=(...t)=>{const e=Ur(t.reduce((s,r)=>s+Ke(r).length,0));let n=0;return t.forEach(s=>{e.set(s,n),n+=s.length}),e},xg=(t=rt)=>xd().getRandomValues(Ur(t)),ar=BigInt,kt=(t,e,n,s="bad number: out of range")=>bg(t)&&e<=t&&t<n?t:se(s),G=(t,e=cr)=>{const n=t%e;return n>=0n?n:e+n},Wc=(1n<<255n)-1n,b=t=>{t<0n&&se("negative coordinate");let e=(t>>255n)*19n+(t&Wc);return e=(e>>255n)*19n+(e&Wc),e%cr},Ad=t=>G(t,Rs),Ag=(t,e)=>{(t===0n||e<=0n)&&se("no inverse n="+t+" mod="+e);let n=G(t,e),s=e,r=0n,o=1n;for(;n!==0n;){const i=s/n,c=s%n,a=r-o*i;s=n,n=c,r=o,o=a}return s===1n?G(r,e):se("no inverse")},Cg=t=>{const e=Rd[t];return typeof e!="function"&&se("hashes."+t+" not set"),e},po=t=>t instanceof ge?t:se("Point expected"),Ho=2n**256n;class ge{static BASE;static ZERO;X;Y;Z;T;constructor(e,n,s,r){const o=Ho;this.X=kt(e,0n,o),this.Y=kt(n,0n,o),this.Z=kt(s,1n,o),this.T=kt(r,0n,o),Object.freeze(this)}static CURVE(){return vd}static fromAffine(e){return new ge(e.x,e.y,1n,b(e.x*e.y))}static fromBytes(e,n=!1){const s=ho,r=bd(Ke(e,rt)),o=e[31];r[31]=o&-129;const i=Ki(r);kt(i,0n,n?Ho:cr);const a=b(i*i),l=G(a-1n),d=b(s*a+1n);let{isValid:u,value:f}=Ig(l,d);u||se("bad point: y not sqrt");const h=(f&1n)===1n,p=(o&128)!==0;return!n&&f===0n&&p&&se("bad point: x==0, isLastByteOdd"),p!==h&&(f=G(-f)),new ge(f,i,1n,b(f*i))}static fromHex(e,n){return ge.fromBytes(Sd(e),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const e=fo,n=ho,s=this;if(s.is0())return se("bad point: ZERO");const{X:r,Y:o,Z:i,T:c}=s,a=b(r*r),l=b(o*o),d=b(i*i),u=b(d*d),f=b(a*e),h=b(d*(f+l)),p=G(u+b(n*b(a*l)));if(h!==p)return se("bad point: equation left != right (1)");const m=b(r*o),w=b(i*c);return m!==w?se("bad point: equation left != right (2)"):this}equals(e){const{X:n,Y:s,Z:r}=this,{X:o,Y:i,Z:c}=po(e),a=b(n*c),l=b(o*r),d=b(s*c),u=b(i*r);return a===l&&d===u}is0(){return this.equals(Ht)}negate(){return new ge(G(-this.X),this.Y,this.Z,G(-this.T))}double(){const{X:e,Y:n,Z:s}=this,r=fo,o=b(e*e),i=b(n*n),c=b(2n*s*s),a=b(r*o),l=G(e+n),d=G(b(l*l)-o-i),u=G(a+i),f=G(u-c),h=G(a-i),p=b(d*f),m=b(u*h),w=b(d*h),y=b(f*u);return new ge(p,m,y,w)}add(e){const{X:n,Y:s,Z:r,T:o}=this,{X:i,Y:c,Z:a,T:l}=po(e),d=fo,u=ho,f=b(n*i),h=b(s*c),p=b(b(o*u)*l),m=b(r*a),w=G(b(G(n+s)*G(i+c))-f-h),y=G(m-p),g=G(m+p),v=G(h-b(d*f)),S=b(w*y),A=b(g*v),C=b(w*v),T=b(y*g);return new ge(S,A,T,C)}subtract(e){return this.add(po(e).negate())}multiply(e,n=!0){if(!n&&(e===0n||this.is0()))return Ht;if(kt(e,1n,Rs),e===1n)return this;if(this.equals(wt))return Pg(e).p;let s=Ht,r=wt;for(let o=this;e>0n;o=o.double(),e>>=1n)e&1n?s=s.add(o):n&&(r=r.add(o));return s}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:n,Z:s}=this;if(this.equals(Ht))return{x:0n,y:1n};const r=Ag(s,cr);b(s*r)!==1n&&se("invalid inverse");const o=b(e*r),i=b(n*r);return{x:o,y:i}}toBytes(){const{x:e,y:n}=this.toAffine(),s=Cd(n);return s[31]|=e&1n?128:0,s}toHex(){return Ed(this.toBytes())}clearCofactor(){return this.multiply(ar(mg),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let e=this.multiply(Rs/2n,!1).double();return Rs%2n&&(e=e.add(this)),e.is0()}}const wt=new ge(Hc,zc,1n,G(Hc*zc)),Ht=new ge(0n,1n,1n,0n);ge.BASE=wt;ge.ZERO=Ht;const Cd=t=>Sd(kd(kt(t,0n,Ho),64)).reverse(),Ki=t=>ar("0x"+Ed(bd(Ke(t)).reverse())),je=(t,e)=>{let n=t;for(;e-- >0n;)n=b(n*n);return n},_g=t=>{const e=b(t*t),n=b(e*t),s=b(je(n,2n)*n),r=b(je(s,1n)*t),o=b(je(r,5n)*r),i=b(je(o,10n)*o),c=b(je(i,20n)*i),a=b(je(c,40n)*c),l=b(je(a,80n)*a),d=b(je(l,80n)*a),u=b(je(d,10n)*o);return{pow_p_5_8:b(je(u,2n)*t),b2:n}},Yc=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Ig=(t,e)=>{const n=b(e*b(e*e)),s=b(b(n*n)*e),r=_g(b(t*s)).pow_p_5_8;let o=b(t*b(n*r));const i=b(e*b(o*o)),c=o,a=b(o*Yc),l=i===t,d=i===G(-t),u=i===G(-t*Yc);return l&&(o=c),(d||u)&&(o=a),(G(o)&1n)===1n&&(o=G(-o)),{isValid:l||d,value:o}},lr=t=>Ad(Ki(t)),Ni=(...t)=>Rd.sha512Async(fn(...t)),Lg=(...t)=>Cg("sha512")(fn(...t)),_d=t=>{const e=t.slice(0,32);e[0]&=248,e[31]&=127,e[31]|=64;const n=t.slice(32,64),s=lr(e),r=wt.multiply(s),o=r.toBytes();return{head:e,prefix:n,scalar:s,point:r,pointBytes:o}},Ui=t=>Ni(Ke(t,rt)).then(_d),Dg=t=>_d(Lg(Ke(t,rt))),Id=t=>Ui(t).then(e=>e.pointBytes),Ld=t=>Ni(t.hashable).then(t.finish),Bg=(t,e,n)=>{const{pointBytes:s,scalar:r}=t,o=lr(e),i=wt.multiply(o).toBytes();return{hashable:fn(i,s,n),finish:l=>{const d=Ad(o+lr(l)*r);return Ke(fn(i,Cd(d)),64)}}},Xc=async(t,e)=>{const n=Ke(t),s=await Ui(e),r=await Ni(s.prefix,n);return Ld(Bg(s,r,n))},Dd={zip215:!0},Rg=(t,e,n,s=Dd)=>{t=Ke(t,64),e=Ke(e),n=Ke(n,rt);const{zip215:r}=s,o=t.subarray(0,rt),i=Ki(t.subarray(rt,rt*2));let c,a,l,d=Uint8Array.of(),u=!1;try{c=ge.fromBytes(n,r),a=ge.fromBytes(o,r),l=wt.multiply(i,!1),d=fn(a.toBytes(),c.toBytes(),e),u=!0}catch{}return{hashable:d,finish:h=>{if(!u||!r&&c.isSmallOrder())return!1;const p=lr(h);return a.add(c.multiply(p,!1)).subtract(l).clearCofactor().is0()}}},Bd=async(t,e,n,s=Dd)=>Ld(Rg(t,e,n,s)),Rd={sha512Async:async t=>{const e=Sg(),n=fn(t);return Ur(await e.digest("SHA-512",n.buffer))},sha512:void 0},Tg=(t=xg(rt))=>t,Td={getExtendedPublicKeyAsync:Ui,getExtendedPublicKey:Dg,randomSecretKey:Tg},dr=8,Mg=256,Md=Math.ceil(Mg/dr)+1,zo=2**(dr-1),Og=()=>{const t=[];let e=wt,n=e;for(let s=0;s<Md;s++){n=e,t.push(n);for(let r=1;r<zo;r++)n=n.add(e),t.push(n);e=n.double()}return t};let Jc;const Zc=(t,e)=>{const n=e.negate();return t?n:e},Pg=t=>{const e=Jc||(Jc=Og());let n=Ht,s=wt;const r=2**dr,o=r,i=ar(r-1),c=ar(dr);for(let a=0;a<Md;a++){let l=Number(t&i);t>>=c,l>zo&&(l-=o,t+=1n);const d=a*zo,u=d,f=d+Math.abs(l)-1,h=a%2!==0,p=l<0;l===0?s=s.add(Zc(h,e[u])):n=n.add(Zc(p,e[f]))}return t!==0n&&se("invalid wnaf"),{p:n,f:s}};function Kg(t){const e={id:t.id,type:t.type,updatedAt:t.updatedAt,_deviceOrigin:t._deviceOrigin,_schemaVersion:t._schemaVersion,name:t.name};return new TextEncoder().encode(JSON.stringify(e))}function Ng(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=atob(e);return Uint8Array.from(n,s=>s.charCodeAt(0))}async function Ug(t,e){if(!t.sig)return!0;try{const n=Ng(t.sig);return await Bd(n,Kg(t),e)}catch(n){return console.warn("[entrySignature] verifyEntrySignature failed for entry",t.id,n),!1}}const Od=1440*60*1e3;class Pd{constructor(e){this.db=e}async get(e){return this.db.get("vault",e)}async save(e){await this.db.put("vault",e),io()}async delete(e){const n=await this.get(e);if(!n)return;const s=Date.now();await this.db.put("vault",{...n,_deleted:!0,_deletedAt:s,updatedAt:s}),io()}async purge(e=Date.now()-Fp){const n=this.db.transaction("vault","readwrite"),s=await n.store.getAll();let r=0;for(const o of s)o._deleted===!0&&o._deletedAt!=null&&o._deletedAt<e&&(await n.store.delete(o.id),r++);return await n.done,r}async delta(e){const s=this.db.transaction("vault","readonly").store.index("updatedAt"),r=IDBKeyRange.lowerBound(e,!0);return s.getAll(r)}async merge(e,n={}){const s=[],r=[];if(n.sessionId&&await this.db.get("replay",n.sessionId)){for(const l of e)r.push({id:l.id,reason:"replay"});return console.warn("[VaultStore.merge] rejected entries:",r),{accepted:0,rejected:r}}const o=new Set,i=new Map,c=await this.db.getAll("devices");for(const a of c)a.revokedAt!=null&&o.add(a.deviceId),a.pubSig&&i.set(a.deviceId,new Uint8Array(a.pubSig));for(const a of e){if(o.has(a._deviceOrigin)||a._updatedBy&&o.has(a._updatedBy)){r.push({id:a.id,reason:"revoked_device"});continue}const l=i.get(a._deviceOrigin);if(a.sig&&!l){r.push({id:a.id,reason:"bad_signature"});continue}if(!(l?await Ug(a,l):!0)){r.push({id:a.id,reason:"bad_signature"});continue}if(!$g(a)){r.push({id:a.id??"unknown",reason:"invalid_shape"});continue}s.push(a)}for(const a of s)await this.db.put("vault",a);if(r.length>0&&console.warn("[VaultStore.merge] rejected entries:",r),n.sessionId&&e.length>0){const a=Date.now();await this.db.put("replay",{sessionId:n.sessionId,peerId:n.peerId??"unknown",seenAt:a,expiresAt:a+Od})}return s.length>0&&io(),{accepted:s.length,rejected:r}}}function $g(t){if(typeof t!="object"||t===null)return!1;const e=t;return typeof e.id=="string"&&typeof e.type=="string"&&typeof e.createdAt=="number"&&typeof e.updatedAt=="number"&&typeof e.favorite=="boolean"&&typeof e._deviceOrigin=="string"&&typeof e._schemaVersion=="number"&&typeof e.name=="object"&&e.name!==null}async function Vg(t){const e={migrated:0,skipped:0,errors:[]};if(qc.length===0)return e;const n=new Pd(t);try{const s=await n.delta(0);for(const r of s)try{if(r._deleted===!0){e.skipped++;continue}if(r._schemaVersion>=zl){e.skipped++;continue}let o={...r},i=!1;for(const c of qc)o._schemaVersion===c.fromVersion&&(o=c.transform(o),o._schemaVersion=c.toVersion,i=!0);i?(await n.save(o),e.migrated++):e.skipped++}catch(o){const i=o instanceof Error?o.message:String(o);e.errors.push({id:r.id,error:i}),console.error(`[runEntryMigrations] failed for entry ${r.id}:`,o)}}catch(s){console.error("[runEntryMigrations] fatal error scanning entries:",s)}return(e.migrated>0||e.errors.length>0)&&console.log(`[runEntryMigrations] migrated=${e.migrated} skipped=${e.skipped} errors=${e.errors.length}`),e}const Fg=BigInt(0),xn=BigInt(1),jg=BigInt(2),qg=BigInt(7),Hg=BigInt(256),zg=BigInt(113),Kd=[],Nd=[],Ud=[];for(let t=0,e=xn,n=1,s=0;t<24;t++){[n,s]=[s,(2*n+3*s)%5],Kd.push(2*(5*s+n)),Nd.push((t+1)*(t+2)/2%64);let r=Fg;for(let o=0;o<7;o++)e=(e<<xn^(e>>qg)*zg)%Hg,e&jg&&(r^=xn<<(xn<<BigInt(o))-xn);Ud.push(r)}const $d=$y(Ud,!0),Gg=$d[0],Wg=$d[1],Qc=(t,e,n)=>n>32?jy(t,e,n):Vy(t,e,n),ea=(t,e,n)=>n>32?qy(t,e,n):Fy(t,e,n);function Yg(t,e=24){const n=new Uint32Array(10);for(let s=24-e;s<24;s++){for(let i=0;i<10;i++)n[i]=t[i]^t[i+10]^t[i+20]^t[i+30]^t[i+40];for(let i=0;i<10;i+=2){const c=(i+8)%10,a=(i+2)%10,l=n[a],d=n[a+1],u=Qc(l,d,1)^n[c],f=ea(l,d,1)^n[c+1];for(let h=0;h<50;h+=10)t[i+h]^=u,t[i+h+1]^=f}let r=t[2],o=t[3];for(let i=0;i<24;i++){const c=Nd[i],a=Qc(r,o,c),l=ea(r,o,c),d=Kd[i];r=t[d],o=t[d+1],t[d]=a,t[d+1]=l}for(let i=0;i<50;i+=10){for(let c=0;c<10;c++)n[c]=t[i+c];for(let c=0;c<10;c++)t[i+c]^=~n[(c+2)%10]&n[(c+4)%10]}t[0]^=Gg[s],t[1]^=Wg[s]}Jn(n)}class $r{state;pos=0;posOut=0;finished=!1;state32;destroyed=!1;blockLen;suffix;outputLen;enableXOF=!1;rounds;constructor(e,n,s,r=!1,o=24){if(this.blockLen=e,this.suffix=n,this.outputLen=s,this.enableXOF=r,this.rounds=o,Uc(s,"outputLen"),!(0<e&&e<200))throw new Error("only keccak-f1600 function is supported");this.state=new Uint8Array(200),this.state32=dd(this.state)}clone(){return this._cloneInto()}keccak(){tr(this.state32),Yg(this.state32,this.rounds),tr(this.state32),this.posOut=0,this.pos=0}update(e){er(this),it(e);const{blockLen:n,state:s}=this,r=e.length;for(let o=0;o<r;){const i=Math.min(n-this.pos,r-o);for(let c=0;c<i;c++)s[this.pos++]^=e[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:s,blockLen:r}=this;e[s]^=n,(n&128)!==0&&s===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){er(this,!1),it(e),this.finish();const n=this.state,{blockLen:s}=this;for(let r=0,o=e.length;r<o;){this.posOut>=s&&this.keccak();const i=Math.min(s-this.posOut,o-r);e.set(n.subarray(this.posOut,this.posOut+i),r),this.posOut+=i,r+=i}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Uc(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(ld(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,Jn(this.state)}_cloneInto(e){const{blockLen:n,suffix:s,outputLen:r,rounds:o,enableXOF:i}=this;return e||=new $r(n,s,r,i,o),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=s,e.outputLen=r,e.enableXOF=i,e.destroyed=this.destroyed,e}}const Vd=(t,e,n,s={})=>Pi(()=>new $r(e,t,n),s),Xg=Vd(6,136,32,us(8)),Jg=Vd(6,72,64,us(10)),Fd=(t,e,n,s={})=>Pi((r={})=>new $r(e,t,r.dkLen===void 0?n:r.dkLen,!0),s),Zg=Fd(31,168,16,us(11)),jd=Fd(31,136,32,us(12));function $i(t){if(!Number.isSafeInteger(t)||t<0||t>4294967295)throw new Error("wrong u32 integer:"+t);return t}function qd(t){return $i(t),(t&t-1)===0&&t!==0}function Hd(t,e){$i(t);let n=0;for(let s=0;s<e;s++,t>>>=1)n=n<<1|t&1;return n}function zd(t){return $i(t),31-Math.clz32(t)}function ta(t){const e=t.length;if(e<2||!qd(e))throw new Error("n must be a power of 2 and greater than 1. Got "+e);const n=zd(e);for(let s=0;s<e;s++){const r=Hd(s,n);if(s<r){const o=t[s];t[s]=t[r],t[r]=o}}return t}const na=(t,e)=>{const{N:n,roots:s,dit:r,invertButterflies:o=!1,skipStages:i=0,brp:c=!0}=e,a=zd(n);if(!qd(n))throw new Error("FFT: Polynomial size should be power of two");const l=r!==o;return d=>{if(d.length!==n)throw new Error("FFT: wrong Polynomial length");r&&c&&ta(d);for(let u=0,f=1;u<a-i;u++){const h=r?u+1+i:a-u,p=1<<h,m=p>>1,w=n>>h;for(let y=0;y<n;y+=p)for(let g=0,v=f++;g<m;g++){const S=o?r?n-v:v:g*w,A=y+g,C=y+g+m,T=s[S],L=d[C],B=d[A];if(l){const $=t.mul(L,T);d[A]=t.add(B,$),d[C]=t.sub(B,$)}else o?(d[A]=t.add(L,B),d[C]=t.mul(t.sub(L,B),T)):(d[A]=t.add(B,L),d[C]=t.mul(t.sub(B,L),T))}}return!r&&c&&ta(d),d}};/*! noble-post-quantum - MIT License (c) 2024 Paul Miller (paulmillr.com) */const jt=it,sa=Oy;function yo(t,e){if(t.length!==e.length)return!1;let n=0;for(let s=0;s<t.length;s++)n|=t[s]^e[s];return n===0}function Qg(t){return Uint8Array.from(t)}function Ts(t,...e){const n=r=>typeof r=="number"?r:r.bytesLen,s=e.reduce((r,o)=>r+n(o),0);return{bytesLen:s,encode:r=>{const o=new Uint8Array(s);for(let i=0,c=0;i<e.length;i++){const a=e[i],l=n(a),d=typeof a=="number"?r[i]:a.encode(r[i]);it(d,l,t),o.set(d,c),typeof a!="number"&&d.fill(0),c+=l}return o},decode:r=>{it(r,s,t);const o=[];for(const i of e){const c=n(i),a=r.subarray(0,c);o.push(typeof i=="number"?a:i.decode(a)),r=r.subarray(c)}return o}}}function go(t,e){const n=e*t.bytesLen;return{bytesLen:n,encode:s=>{if(s.length!==e)throw new RangeError(`vecCoder.encode: wrong length=${s.length}. Expected: ${e}`);const r=new Uint8Array(n);for(let o=0,i=0;o<s.length;o++){const c=t.encode(s[o]);r.set(c,i),c.fill(0),i+=c.length}return r},decode:s=>{it(s,n);const r=[];for(let o=0;o<s.length;o+=t.bytesLen)r.push(t.decode(s.subarray(o,o+t.bytesLen)));return r}}}function _e(...t){for(const e of t)if(Array.isArray(e))for(const n of e)n.fill(0);else e.fill(0)}function ra(t){if(!Number.isSafeInteger(t)||t<0||t>32)throw new RangeError(`expected bits in [0..32], got ${t}`);return t===32?4294967295:~(-1<<t)>>>0}/*! noble-post-quantum - MIT License (c) 2024 Paul Miller (paulmillr.com) */const ew=t=>{const{newPoly:e,N:n,Q:s,F:r,ROOT_OF_UNITY:o,brvBits:i}=t,c=(y,g=s)=>{const v=y%g|0;return(v>=0?v|0:g+v|0)|0},a=(y,g=s)=>{const v=c(y,g)|0;return(v>g>>1?v-g|0:v)|0};function l(){const y=e(n);for(let g=0;g<n;g++){const v=Hd(g,i),S=BigInt(o)**BigInt(v)%BigInt(s);y[g]=Number(S)|0}return y}const d=l(),u={add:(y,g)=>c((y|0)+(g|0))|0,sub:(y,g)=>c((y|0)-(g|0))|0,mul:(y,g)=>c((y|0)*(g|0))|0,inv:y=>{throw new Error("not implemented")}},f={N:n,roots:d,invertButterflies:!0,skipStages:1,brp:!1},h=na(u,{dit:!1,...f}),p=na(u,{dit:!0,...f});return{mod:c,smod:a,nttZetas:d,NTT:{encode:y=>h(y),decode:y=>{p(y);for(let g=0;g<y.length;g++)y[g]=c(r*y[g]);return y}},bitsCoder:(y,g)=>{const v=ra(y),S=y*(n/8);return{bytesLen:S,encode:A=>{const C=new Uint8Array(S);for(let T=0,L=0,B=0,$=0;T<A.length;T++)for(L|=(g.encode(A[T])&v)<<B,B+=y;B>=8;B-=8,L>>=8)C[$++]=L&ra(B);return C},decode:A=>{const C=e(n);for(let T=0,L=0,B=0,$=0;T<A.length;T++)for(L|=A[T]<<B,B+=8;B>=y;B-=y,L>>=y)C[$++]=g.decode(L&v);return C}}}}},tw=t=>(e,n)=>{n||(n=t.blockLen);const s=new Uint8Array(e.length+2);s.set(e);const r=e.length,o=new Uint8Array(n);let i=t.create({}),c=0,a=0;return{stats:()=>({calls:c,xofs:a}),get:(l,d)=>(s[r+0]=l,s[r+1]=d,i.destroy(),i=t.create({}).update(s),c++,()=>(a++,i.xofInto(o))),clean:()=>{i.destroy(),_e(o,s)}}},nw=tw(Zg);/*! noble-post-quantum - MIT License (c) 2024 Paul Miller (paulmillr.com) */const ue=256,ke=3329,sw=3303,rw=17,pe=ew({N:ue,Q:ke,F:sw,ROOT_OF_UNITY:rw,newPoly:t=>new Uint16Array(t),brvBits:7}),ow={512:{N:ue,Q:ke,K:2,ETA1:3,ETA2:2,du:10,dv:4,RBGstrength:128},768:{N:ue,Q:ke,K:3,ETA1:2,ETA2:2,du:10,dv:4,RBGstrength:192},1024:{N:ue,Q:ke,K:4,ETA1:2,ETA2:2,du:11,dv:5,RBGstrength:256}},iw=t=>{if(t>=12)return{encode:n=>n,decode:n=>n>=ke?n-ke:n};const e=2**(t-1);return{encode:n=>((n<<t)+ke/2)/ke,decode:n=>n*ke+e>>>t}},cw=t=>pe.bitsCoder(t,{encode:e=>e,decode:e=>e>=ke?e-ke:e}),An=t=>t===12?cw(12):pe.bitsCoder(t,iw(t));function vt(t,e){for(let n=0;n<ue;n++)t[n]=pe.mod(t[n]+e[n])}function aw(t,e){for(let n=0;n<ue;n++)t[n]=pe.mod(t[n]-e[n])}function lw(t,e,n,s,r){const o=pe.mod(e*s*r+t*n),i=pe.mod(t*s+e*n);return{c0:o,c1:i}}function bs(t,e){for(let n=0;n<ue/2;n++){let s=pe.nttZetas[64+(n>>1)];n&1&&(s=-s);const{c0:r,c1:o}=lw(t[2*n+0],t[2*n+1],e[2*n+0],e[2*n+1],s);t[2*n+0]=r,t[2*n+1]=o}return t}function oa(t){const e=new Uint16Array(ue);for(let n=0;n<ue;){const s=t();if(s.length%3)throw new Error("SampleNTT: unaligned block");for(let r=0;n<ue&&r+3<=s.length;r+=3){const o=(s[r+0]>>0|s[r+1]<<8)&4095,i=(s[r+1]>>4|s[r+2]<<4)&4095;o<ke&&(e[n++]=o),n<ue&&i<ke&&(e[n++]=i)}}return e}const dw=(t,e)=>{const n=new Uint16Array(ue),s=dd(t);tr(s);let r=0;for(let o=0,i=0,c=0,a=0;o<s.length;o++){let l=s[o];for(let d=0;d<32;d++)c+=l&1,l>>=1,r+=1,r===e?(a=c,c=0):r===2*e&&(n[i++]=pe.mod(a-c),c=0,r=0)}if(tr(s),r)throw new Error(`sampleCBD: leftover bits: ${r}`);return n};function Cn(t,e,n,s){return dw(t(s*ue/4,e,n),s)}const uw=t=>{const{K:e,PRF:n,XOF:s,HASH512:r,ETA1:o,ETA2:i,du:c,dv:a}=t,l=An(1),d=An(a),u=An(c),f=Ts("publicKey",go(An(12),e),32),h=go(An(12),e),p=Ts("ciphertext",go(u,e),d),m=Ts("seed",32,32);return{secretCoder:h,lengths:{secretKey:h.bytesLen,publicKey:f.bytesLen,cipherText:p.bytesLen},keygen:w=>{jt(w,32,"seed");const y=new Uint8Array(33);y.set(w),y[32]=e;const g=r(y),[v,S]=m.decode(g),A=[],C=[];for(let B=0;B<e;B++)A.push(pe.NTT.encode(Cn(n,S,B,o)));const T=s(v);for(let B=0;B<e;B++){const $=pe.NTT.encode(Cn(n,S,e+B,o));for(let _=0;_<e;_++){const D=oa(T.get(_,B));vt($,bs(D,A[_]))}C.push($)}T.clean();const L={publicKey:f.encode([C,v]),secretKey:h.encode(A)};return _e(v,S,A,C,y,g),L},encrypt:(w,y,g)=>{const[v,S]=f.decode(w),A=[];for(let _=0;_<e;_++)A.push(pe.NTT.encode(Cn(n,g,_,o)));const C=s(S),T=new Uint16Array(ue),L=[];for(let _=0;_<e;_++){const D=Cn(n,g,e+_,i),V=new Uint16Array(ue);for(let F=0;F<e;F++){const Q=oa(C.get(_,F));vt(V,bs(Q,A[F]))}vt(D,pe.NTT.decode(V)),L.push(D),vt(T,bs(v[_],A[_])),_e(V)}C.clean();const B=Cn(n,g,2*e,i);vt(B,pe.NTT.decode(T));const $=l.decode(y);return vt($,B),_e(v,A,T,B),p.encode([L,$])},decrypt:(w,y)=>{const[g,v]=p.decode(w),S=h.decode(y),A=new Uint16Array(ue);for(let C=0;C<e;C++)vt(A,bs(S[C],pe.NTT.encode(g[C])));return aw(v,pe.NTT.decode(A)),_e(A,S,g),l.encode(v)}}};function fw(t){const e=uw(t),{HASH256:n,HASH512:s,KDF:r}=t,{secretCoder:o,lengths:i}=e,c=Ts("secretKey",i.secretKey,i.publicKey,32,32),a=32,l=64;return{info:{type:"ml-kem"},lengths:{...i,seed:64,msg:a,msgRand:a,secretKey:c.bytesLen},keygen:(d=sa(l))=>{jt(d,l,"seed");const{publicKey:u,secretKey:f}=e.keygen(d.subarray(0,32)),h=n(u),p=c.encode([f,u,h,d.subarray(32)]);return _e(f,h),{publicKey:u,secretKey:p}},getPublicKey:d=>{const[u,f]=c.decode(d);return Uint8Array.from(f)},encapsulate:(d,u=sa(a))=>{jt(d,i.publicKey,"publicKey"),jt(u,a,"message");const f=d.subarray(0,384*t.K),h=o.encode(o.decode(Qg(f)));if(!yo(h,f))throw _e(h),new Error("ML-KEM.encapsulate: wrong publicKey modulus");_e(h);const p=s.create().update(u).update(n(d)).digest(),m=e.encrypt(d,u,p.subarray(32,64));return _e(p.subarray(32)),{cipherText:m,sharedSecret:p.subarray(0,32)}},decapsulate:(d,u)=>{jt(u,c.bytesLen,"secretKey"),jt(d,i.cipherText,"cipherText");const f=c.bytesLen-96,h=f+32,p=n(u.subarray(f/2,h));if(!yo(p,u.subarray(h,h+32)))throw new Error("invalid secretKey: hash check failed");const[m,w,y,g]=c.decode(u),v=e.decrypt(d,m),S=s.create().update(v).update(y).digest(),A=S.subarray(0,32),C=e.encrypt(w,v,S.subarray(32,64)),T=yo(d,C),L=r.create({dkLen:32}).update(g).update(d).digest();return _e(v,C,T?L:A),T?A:L}}}function hw(t,e,n){return jd.create({dkLen:t}).update(e).update(new Uint8Array([n])).digest()}const pw={HASH256:Xg,HASH512:Jg,KDF:jd,XOF:nw,PRF:hw},yw=t=>fw({...pw,...t}),Vr=yw(ow[768]);function gw(t){if(t.length!==64)throw new RangeError(`ML-KEM-768 seed must be 64 bytes, got ${t.length}`);try{const{publicKey:e,secretKey:n}=Vr.keygen(t);return{publicKey:e,secretKey:n}}finally{_e(t)}}const Gd="local-dev-device-001";class hn{constructor(e){this.db=e}async get(e){return this.db.get("devices",e)}async save(e){await this.db.put("devices",e)}async revoke(e){const n=await this.listActive();if(n.length===1&&n[0].deviceId===e)throw new Error("Cannot remove the only active device — vault would become inaccessible");const s=await this.get(e);if(!s)return;const r=this.db.transaction(["devices","meta"],"readwrite");s.revokedAt=Date.now(),await r.objectStore("devices").put(s);const o=s.credentialId;if(o){const i=await r.objectStore("meta").get("meta");i?.dek_wrapped_prf?.[o]&&(delete i.dek_wrapped_prf[o],await r.objectStore("meta").put({...i,id:"meta"}))}await r.done,await this.sweepCursorsForDevice(e)}async listActive(){return(await this.db.getAll("devices")).filter(n=>n.revokedAt==null)}async updateLastKnownIp(e,n){const s=await this.get(e);s&&await this.save({...s,lastKnownIp:n,lastSeenAt:Date.now()})}async sweepCursorsForDevice(e){const n=this.db.transaction("cursors","readwrite"),s=await n.store.getAll();for(const r of s)r.peerDeviceId===e&&await n.store.delete([r.localDeviceId,r.peerDeviceId]);await n.done}async verifySignature(e,n,s){const r=await this.get(e);if(!r||r.revokedAt!=null)return!1;try{const o=await crypto.subtle.importKey("jwk",r.publicKey,{name:"Ed25519"},!1,["verify"]);return crypto.subtle.verify({name:"Ed25519"},o,s,n)}catch{return!1}}}const wo=1088,mo=12,ww=new TextEncoder().encode("psw-pwa/kem-wrap/v1");async function mw(t,e){const{cipherText:n,sharedSecret:s}=Vr.encapsulate(e),r=await vw(s),o=crypto.getRandomValues(new Uint8Array(mo)),i=t.slice(),c=await crypto.subtle.encrypt({name:"AES-GCM",iv:o},r,i),a=new Uint8Array(wo+mo+c.byteLength);return a.set(n,0),a.set(o,wo),a.set(new Uint8Array(c),wo+mo),_e(s),Pe(a)}async function vw(t){const e=t.slice(),n=await crypto.subtle.importKey("raw",e,"HKDF",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:new Uint8Array(32),info:ww},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function Fr(t){try{await Vg(t)}catch(e){console.error("[onUnlockComplete] entry migration failed:",e)}}async function Vi(t,e,n,s,r,o){switch(t){case"both":{if(!n||!s)throw new Error("Both KEKs required for both-mode unlock");if(!r)throw new Error("credentialId required for both-mode unlock");const i=await ur(e,n,r,o),c=await ia(e,s),[a,l,d]=await Promise.all([vo(i.dekVault,c.dekVault),vo(i.dekKeystore,c.dekKeystore),vo(i.dekExport,c.dekExport)]);if(!a||!l||!d)throw new bw;return i}case"either":{if(n&&r)try{return await ur(e,n,r,o)}catch{}if(s)return ia(e,s);throw new Error("No valid KEK provided for either-mode unlock")}}}class bw extends Error{code="DEK_DIVERGENCE";constructor(){super("Vault integrity check failed")}}async function vo(t,e){const n=new Uint8Array(12),s=new Uint8Array(16),[r,o]=await Promise.all([crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,s),crypto.subtle.encrypt({name:"AES-GCM",iv:n},e,s)]),i=new Uint8Array(r),c=new Uint8Array(o);if(i.length!==c.length)throw new Error("Unexpected ciphertext length mismatch in dekMaterialsMatch");let a=0;for(let l=0;l<i.length;l++)a|=i[l]^c[l];return a===0}async function ia(t,e){if(!t.wrappedDekVault_password||!t.wrappedDekKeystore_password||!t.wrappedDekExport_password)throw new Error("Password DEK slots missing from MetaRecord");const[n,s,r]=await Promise.all([Zt(t.wrappedDekVault_password,e),Zt(t.wrappedDekKeystore_password,e),Zt(t.wrappedDekExport_password,e)]);return{dekVault:n,dekKeystore:s,dekExport:r}}async function ur(t,e,n,s){const r=t.passkeySlots.vault[n],o=t.passkeySlots.keystore[n],i=t.passkeySlots.export[n];if(!r||!o||!i)throw new Error(`Passkey DEK slots missing for credential ${n}`);const[c,a,l]=await Promise.all([Zt(r,e),Zt(o,e),Zt(i,e)]),d={dekVault:c,dekKeystore:a,dekExport:l};if(s){const u=await qp(s,t.salt),{publicKey:f,secretKey:h}=gw(u);return{...d,prfKemSecretKey:h,prfKemPublicKey:f}}return d}async function Fi(t,e,n,s){const r=new hn(t),o=await r.get(e);if(!o)throw new Error(`Device record missing for ${e}`);if(o.prfKemPublicKey&&o.credentialId===n){let i=o.prfKemPublicKey.length===s.length;if(i){for(let c=0;c<s.length;c++)if(o.prfKemPublicKey[c]!==s[c]){i=!1;break}}if(i)return{updated:!1}}return await r.save({...o,credentialId:n,prfKemPublicKey:s}),{updated:!0}}async function kw(t,e,n,s){if(s.length!==1184)throw new Error(`writePrfSlot: invalid prfPubKey length ${s.length} (expected 1184 for ML-KEM-768)`);const r=await crypto.subtle.exportKey("raw",n),o=new Uint8Array(r),i=await mw(o,s);o.fill(0);const c=await t.get("meta","meta");if(!c)throw new Error("MetaRecord not found");const a=c.dek_wrapped_prf??{};a[e]=i;const l={...c,dek_wrapped_prf:a};await Xl(t,l)}async function Ew(t){me._set("unlockCandidate");try{if(!t.trim())throw new Error("empty");{const e=await te(),s=await new we(e).get();if(!s)throw new Error("No vault found — please set up your vault first");const r=await gt(t,s.salt,s.kdfParams),o=await Vi("either",s,null,r);rs({kek:r,...o}),await Fr(e)}Mi({password:t}),me._set("unlocked")}catch{throw Mt(),new Error("Unlock failed")}}async function Sw(t){if(t.trim().split(/\s+/).length!==12)throw new Error("Recovery key must be exactly 12 words");me._set("unlockCandidate");try{{const n=await te(),r=await new we(n).get();if(!r)throw new Error("No vault found");const o=await gt(t,r.salt,r.kdfParams),i=await Vi("either",r,null,o);rs({kek:o,...i}),await Fr(n)}Mi({recoveryPhrase:t}),me._set("unlocked")}catch{throw Mt(),new Error("Recovery key invalid")}}async function xw(){me._set("unlockCandidate");try{let t,e;{const n=await pg({publicKey:{challenge:crypto.getRandomValues(new Uint8Array(32)),userVerification:"required",extensions:{prf:{eval:{first:Li}}}}});if(!n)throw new Error("No credential returned");e=n.id;const s=n.getClientExtensionResults().prf?.results?.first;if(!s)throw new Error("PRF extension unavailable");t=s instanceof ArrayBuffer?s:new Uint8Array(s).buffer;const r=await te(),i=await new we(r).get();if(!i)throw new Error("No vault found");const c=await Di(t,i.salt),a=await ur(i,c,e,t);if(rs({kek:c,...a}),"prfKemPublicKey"in a){const{updated:l}=await Fi(r,Gd,e,a.prfKemPublicKey)}await Fr(r)}yy(),me._set("unlocked")}catch{throw Mt(),new Error("Passkey unlock failed")}}async function Aw(t){const e=t.trim().split(/\s+/);if(e.length!==24)throw new Error("PRF recovery phrase must be exactly 24 words");me._set("unlockCandidate");try{let n;try{n=cg(e.join(" "),gd)}catch{throw new Error("Invalid recovery phrase — check spelling and word order")}if(n.length!==32)throw new Error(`PRF recovery: expected 32 entropy bytes, got ${n.length}`);const s=await te(),o=await new we(s).get();if(!o)throw new Error("No vault found — has this device been set up?");const i=Object.keys(o.passkeySlots.vault);if(i.length===0)throw new Error("No passkey slots found in vault — cannot perform PRF recovery");const c=await Di(n.buffer,o.salt);let a=null,l=null,d;for(const u of i)try{a=await ur(o,c,u,n.buffer),l=u;break}catch(f){d=f}if(!a||!l)throw d??new Error("Failed to unwrap DEKs from any passkey slot");if(rs({kek:c,...a}),"prfKemPublicKey"in a){const{updated:u}=await Fi(s,Gd,l,a.prfKemPublicKey)}await Fr(s),Mi({recoveryPhrase:t}),me._set("unlocked")}catch(n){throw Mt(),n instanceof Error?n:new Error("PRF recovery failed")}}let ji=!1;function Cw(){return ji}function _w(){ji=!1}async function Wd(t,e,n={}){const{replaceAll:s=!1,onConflict:r}=n;let o;try{o=JSON.parse(new TextDecoder().decode(t))}catch{return{success:!1,entriesRestored:0,conflictsFound:0,conflictsResolved:0,error:"Invalid backup file format"}}const i=o.header;if(i.v!==1)return{success:!1,entriesRestored:0,conflictsFound:0,conflictsResolved:0,error:`Unsupported backup version: ${i.v}`};if(i.kdfAlgorithm==="none")return{success:!1,entriesRestored:0,conflictsFound:0,conflictsResolved:0,error:"This backup was created with a passkey. To restore, unlock with your passkey (Face ID / Touch ID) on this device first, then re-export using your password or recovery phrase."};const c=e.type==="recovery"?i.wrappedDekExport_recovery:i.wrappedDekExport_password;if(!c)return{success:!1,entriesRestored:0,conflictsFound:0,conflictsResolved:0,error:`No ${e.type} slot in backup file. Was it exported with a ${e.type}?`};const a=St(i.salt);let l;try{l=await gt(e.value,a,void 0,!1)}catch{return{success:!1,entriesRestored:0,conflictsFound:0,conflictsResolved:0,error:"KDF derivation failed"}}let d;try{const w=St(c);d=await crypto.subtle.unwrapKey("raw",w,l,"AES-KW",{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}catch{return{success:!1,entriesRestored:0,conflictsFound:0,conflictsResolved:0,error:"Wrong password or recovery phrase"}}let u;try{const w=await Yp(d,o.payload);u=JSON.parse(new TextDecoder().decode(w))}catch{return{success:!1,entriesRestored:0,conflictsFound:0,conflictsResolved:0,error:"Payload decryption failed — backup may be corrupted"}}const f=await te();let h=0,p=0,m=0;if(s){if(u.yjsSnapshot){const y=typeof u.yjsSnapshot=="string"?St(u.yjsSnapshot):new Uint8Array(u.yjsSnapshot);Oc(y);const g=f.transaction("vault","readwrite");await g.store.clear();const v=pt.getMap("vault");for(const[,S]of v)await g.store.put(S),h++;await g.done}else if(Array.isArray(u.vaultEntries)){console.warn("[import] Legacy vaultEntries format detected — CRDT metadata not restored");const y=f.transaction("vault","readwrite");await y.store.clear();for(const g of u.vaultEntries)await y.store.put(g),h++;await y.done}const w=f.transaction(["keystore","meta"],"readwrite");if(await w.objectStore("keystore").clear(),u.keystoreEntries)for(const y of Object.values(u.keystoreEntries))await w.objectStore("keystore").put(y);await w.objectStore("meta").clear(),u.metaSnapshot&&await w.objectStore("meta").put({...u.metaSnapshot,id:"meta"}),await w.done}else{if(u.yjsSnapshot){const w=typeof u.yjsSnapshot=="string"?St(u.yjsSnapshot):new Uint8Array(u.yjsSnapshot);Oc(w);const y=pt.getMap("vault");for(const[,g]of y){const v=f.transaction("vault","readonly"),S=await v.store.get(g.id);if(await v.done,!S){const C=f.transaction("vault","readwrite");await C.store.put(g),await C.done,h++;continue}if(S.updatedAt===g.updatedAt)continue;p++;let A;if(r?A=await r(S,g):A=(g.updatedAt??0)>(S.updatedAt??0)?"keep-imported":"keep-local",A==="keep-imported"){const C=f.transaction("vault","readwrite");await C.store.put(g),await C.done,h++,m++}else A==="keep-local"&&m++}}else if(Array.isArray(u.vaultEntries))for(const w of u.vaultEntries){const y=f.transaction("vault","readonly"),g=await y.store.get(w.id);if(await y.done,!g){const S=f.transaction("vault","readwrite");await S.store.put(w),await S.done,h++;continue}if(g.updatedAt===w.updatedAt)continue;p++;let v;if(r?v=await r(g,w):v=(w.updatedAt??0)>(g.updatedAt??0)?"keep-imported":"keep-local",v==="keep-imported"){const S=f.transaction("vault","readwrite");await S.store.put(w),await S.done,h++,m++}else v==="keep-local"&&m++}if(u.keystoreEntries)for(const w of Object.values(u.keystoreEntries)){const y=f.transaction("keystore","readwrite");await y.store.get(w.credentialId??w.id)||await y.store.put(w),await y.done}if(u.metaSnapshot){const w=f.transaction("meta","readwrite");await w.store.get("meta")||await w.store.put({...u.metaSnapshot,id:"meta"}),await w.done}}return ji=!0,console.info("[import] Restore complete — restored:",h,"conflicts:",p),{success:!0,entriesRestored:h,conflictsFound:p,conflictsResolved:m}}const Iw=5,Lw=3e4;let ks=0,bo=0,_n=null,bt=null,Ut=!1;function Dw(){const t=document.getElementById("lock-screen"),e=document.getElementById("recoveryView"),n=document.getElementById("prfRecoveryView"),s=document.getElementById("biometricRow"),r=document.getElementById("face-id-btn"),o=document.getElementById("pw-divider"),i=document.getElementById("pw-card"),c=document.getElementById("pw"),a=document.getElementById("unlock-btn"),l=document.getElementById("recovery-btn"),d=document.getElementById("err"),u=document.getElementById("cooldown"),f=document.getElementById("wordGrid"),h=document.getElementById("recUnlockBtn"),p=document.getElementById("recCancelBtn"),m=document.getElementById("recErr"),w=document.getElementById("prfWordGrid"),y=document.getElementById("prfRecUnlockBtn"),g=document.getElementById("prfRecCancelBtn"),v=document.getElementById("prfRecErr");c.disabled=!1,ca(f,12),ca(w,24);function S(){s.style.display="block",o.style.display="block",i.style.display="block",a.style.display="block"}function A(){return Date.now()<bo}function C(){d.style.display="none",a.disabled=!0,c.disabled=!0,u.style.display="block",_n&&clearInterval(_n),_n=setInterval(()=>{const D=Math.ceil((bo-Date.now())/1e3);D<=0?(clearInterval(_n),_n=null,u.style.display="none",a.disabled=!1,c.disabled=!1,(document.activeElement===document.body||document.activeElement===u)&&c.focus()):u.textContent=`Try again in ${D}s`},500)}function T(D){ks++,ks>=Iw?(bo=Date.now()+Lw,ks=0,C()):(d.textContent=D,d.style.display="block")}async function L(){if(A())return;const D=c.value;if(!D.trim()){T("Please enter your password");return}d.style.display="none",a.disabled=!0;try{await Ew(D)}catch{T("Incorrect credentials")}finally{a.disabled=A()}}a.addEventListener("click",L),c.addEventListener("keydown",D=>{D.key==="Enter"&&L()}),r.addEventListener("click",async()=>{if(!A()){d.style.display="none";try{await xw()}catch{d.textContent="Passkey authentication failed",d.style.display="block",ei()==="either"&&B()}}});function B(){const D="either-pw-hint";if(!document.getElementById(D)){const V=document.createElement("p");V.id=D,V.style.cssText="margin-top:0.5rem;font-size:0.875rem;color:var(--color-text-muted);",V.textContent="Or enter your password below",d.insertAdjacentElement("afterend",V)}i.scrollIntoView({behavior:"smooth",block:"nearest"}),bt&&clearTimeout(bt),bt=setTimeout(()=>{bt=null,c.focus()},300)}function $(){document.getElementById("either-pw-hint")?.remove(),bt&&(clearTimeout(bt),bt=null)}function _(){e.style.display="none",n.style.display="none",t.style.display="contents",S(),$()}l.addEventListener("click",()=>{t.style.display="none",e.style.display="flex",m.style.display="none"}),p.addEventListener("click",_),g.addEventListener("click",_),h.addEventListener("click",async()=>{const D=f.querySelectorAll("input"),V=Array.from(D).map(Q=>Q.value.trim()),F=V.join(" ");if(V.some(Q=>Q.length===0)){m.textContent="Key not recognised",m.style.display="block";return}m.style.display="none";try{Ut=!0,await Sw(F)}catch{Ut=!1,m.textContent="Key not recognised",m.style.display="block"}}),y.addEventListener("click",async()=>{const D=w.querySelectorAll("input"),V=Array.from(D).map(Q=>Q.value.trim()),F=V.join(" ");if(V.some(Q=>Q.length===0)){v.textContent="Key not recognised",v.style.display="block";return}v.style.display="none";try{Ut=!0,await Aw(F)}catch{Ut=!1,v.textContent="Key not recognised",v.style.display="block"}}),me.subscribe(D=>{D==="unlocked"?(e.style.display="none",n.style.display="none",c.value="",d.style.display="none",ks=0,$(),J("vault-list"),Ut&&(Rw(),Ut=!1),Cw()&&(Mw(),_w())):D==="locked"&&!(Bn==="onboarding")&&(e.style.display="none",n.style.display="none",$(),Bw(),Tw(),J("lock-screen"),S());const F=document.querySelector('[data-testid="auth-state"]');F&&(F.textContent=D)}),window.addEventListener("vault-created",()=>S()),window.addEventListener("unlock-mode-restored",()=>S())}function ca(t,e){t.innerHTML="";for(let n=1;n<=e;n++){const s=document.createElement("div");s.className="word-row",s.innerHTML=`<span class="word-num">${n}.</span><input type="text" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="word"/>`,t.appendChild(s)}}function Bw(){const t=document.querySelector('[data-testid="recovery-banner"]');t&&t.remove()}function Rw(){const t=document.getElementById("vault-content");if(!t||t.querySelector(".recovery-banner"))return;const e=document.createElement("div");e.className="recovery-banner",e.setAttribute("data-testid","recovery-banner"),e.textContent="You unlocked with your recovery key. Consider setting a new primary unlock method in Settings.",t.insertBefore(e,t.firstChild)}function Tw(){const t=document.querySelector('[data-testid="repair-banner"]');t&&t.remove()}function Mw(){const t=document.getElementById("vault-content");if(!t||t.querySelector('[data-testid="repair-banner"]'))return;const e=document.createElement("div");e.className="repair-banner",e.setAttribute("data-testid","repair-banner"),e.setAttribute("role","alert"),e.innerHTML="Restore complete. To sync with your other devices, go to <strong>Settings → Devices</strong> and re-pair them.",t.insertBefore(e,t.firstChild)}const aa={integrity:{title:"Verification failed",message:"A file integrity check failed. A reload is required to continue.",primaryLabel:"Reload",primaryAction:()=>location.reload(),secondaryLabel:null},storage:{title:"Storage lost",message:"Local vault data was cleared by the OS. Restore from a paired device, iCloud backup, or an exported file.",primaryLabel:"Import backup",primaryAction:()=>J("settings-backup"),secondaryLabel:"Cancel",secondaryAction:()=>J("lock-screen")},corruption:{title:"Vault error",message:"An integrity check failed. Return to the lock screen and try again.",primaryLabel:"Back to lock screen",primaryAction:()=>J("lock-screen"),secondaryLabel:null}};let Go;function Ow(t){Go.innerHTML="";const e=document.createElement("div");e.className="top";const n=document.createElement("div");n.className="title",n.textContent=t.title;const s=document.createElement("p");s.className="message",s.textContent=t.message,e.append(n,s);const r=document.createElement("div");r.className="bottom";const o=document.createElement("button");if(o.className="btn",o.textContent=t.primaryLabel,o.addEventListener("click",t.primaryAction),r.append(o),t.secondaryLabel){const i=document.createElement("button");i.className="btn muted",i.textContent=t.secondaryLabel,i.addEventListener("click",t.secondaryAction??(()=>J("lock-screen"))),r.append(i)}Go.append(e,r)}function Pw(t){return aa[t]??aa.integrity}function Kw(t){Go=t;const n=new URLSearchParams(location.search).get("error");n&&Ow(Pw(n))}let Yd=null;function la(t){Yd=t}function Nw(){return Yd}function Xd(t){return t._schemaVersion>zl?{...t,_unsupported:!0}:t}const Uw='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',$w='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',Vw='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',Jd='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';function Fw(t){switch(t){case"password":return Uw;case"totp":return $w;case"passkey":return Vw;default:return Jd}}function ut(t){if(!t)return"";try{return atob(t.ct)}catch{return""}}let Wo=null,$t=null;function jw(t,e){Wo=e}function qw(){const t=document.getElementById("list"),e=document.getElementById("empty"),n=document.getElementById("q"),s=document.querySelector(".chips"),r=document.getElementById("addBtn"),o=document.getElementById("settingsBtn");let i="all",c="",a=[],l=new Map;s.addEventListener("click",w=>{const y=w.target.closest(".chip");y&&(s.querySelectorAll(".chip").forEach(g=>g.classList.remove("active")),y.classList.add("active"),i=y.dataset.f||"all",d())}),n.addEventListener("input",()=>{c=n.value.toLowerCase(),d()}),r.addEventListener("click",()=>{la(null),J("vault-detail")}),o.addEventListener("click",()=>{J("settings")});function d(){const w=t.querySelectorAll(".cred-row");let y=0;w.forEach(g=>{const v=l.get(g.dataset.id||"");if(!v){g.style.display="none";return}const S=i==="all"||v.entry.type===i,A=!c||v.name.toLowerCase().includes(c)||v.username.toLowerCase().includes(c)||v.domain.toLowerCase().includes(c),C=S&&A;g.style.display=C?"flex":"none",C&&y++}),e.classList.toggle("show",y===0),t.style.display=y===0?"none":""}function u(w){if(w._unsupported)return"Unsupported entry type";switch(w.type){case"password":return`Password · ${ut(w.username)}`;case"totp":{const y=Math.floor(Date.now()/1e3),g=w.totpPeriod||30;return`TOTP · ${g-y%g}s remaining`}case"passkey":return`Passkey · ${ut(w.rpId)}`;default:return"Unsupported entry type"}}function f(){t.innerHTML="";for(const w of a){const y=document.createElement("div");y.className="cred-row",w.entry._unsupported&&y.classList.add("locked"),y.dataset.type=w.entry.type,y.dataset.id=w.entry.id;const g=w.entry.type==="totp"&&!w.entry._unsupported?`<div class="cred-meta" data-totp-meta="${w.entry.id}"></div>`:"";y.innerHTML=`
        <div class="cred-icon">${w.entry._unsupported?Jd:Fw(w.entry.type)}</div>
        <div class="cred-body">
          <div class="cred-name">${w.entry._unsupported?"Update app to view":da(w.name)}</div>
          <div class="cred-sub">${da(w.subtitle)}</div>
        </div>
        ${g}
      `,w.entry._unsupported||y.addEventListener("click",()=>{la(w.entry.id),J("vault-detail")}),t.appendChild(y)}d()}function h(){const w=Math.floor(Date.now()/1e3);for(const y of a){if(y.entry.type!=="totp"||y.entry._unsupported)continue;const g=y.entry.totpPeriod||30,v=g-w%g,S=t.querySelector(`[data-id="${y.entry.id}"]`);if(S){const A=S.querySelector(".cred-sub");A&&(A.textContent=`TOTP · ${v}s remaining`)}}}async function p(){if(!Wo)return;a=(await Wo()).filter(g=>!g._deleted).map(g=>{const v=Xd(g),S=v._unsupported?"":ut(v.name),A=u(v);let C="",T="";if(!v._unsupported)if(v.type==="password"){const L=v;T=ut(L.username);try{C=JSON.parse(ut(L.domains))[0]||""}catch{C=""}}else v.type==="passkey"?(C=ut(v.rpId),T=ut(v.userHandle)):v.type==="totp"&&(T=ut(v.name));return{entry:v,name:S,subtitle:A,domain:C,username:T}}).sort((g,v)=>g.name.localeCompare(v.name,void 0,{sensitivity:"base"})),l=new Map(a.map(g=>[g.entry.id,g])),f(),h(),$t&&clearInterval($t),a.some(g=>g.entry.type==="totp"&&!g.entry._unsupported)&&($t=setInterval(h,1e3))}new MutationObserver(()=>{document.getElementById("vault-content").style.display!=="none"?(i="all",c="",n.value="",s.querySelectorAll(".chip").forEach(y=>y.classList.remove("active")),s.querySelector('[data-f="all"]')?.classList.add("active"),p()):$t&&(clearInterval($t),$t=null)}).observe(document.getElementById("vault-content"),{attributes:!0,attributeFilter:["style"]})}function da(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function z(t){return{v:1,iv:btoa("mock-iv-12bytes!").slice(0,16),ct:btoa(t)}}const Es={password:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',totp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',passkey:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'},Hw='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',ua={password:"Password",totp:"TOTP",passkey:"Passkey"};function Z(t){if(!t)return"";try{return atob(t.ct)}catch{return""}}let De=null;function zw(t,e){De=t}function Gw(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",n=t.toUpperCase().replace(/[^A-Z2-7]/g,""),s=[];for(const o of n){const i=e.indexOf(o);if(i!==-1)for(let c=4;c>=0;c--)s.push(i>>c&1)}const r=new Uint8Array(Math.floor(s.length/8));for(let o=0;o<r.length;o++){let i=0;for(let c=0;c<8;c++)i=i<<1|s[o*8+c];r[o]=i}return r}async function Ww(t,e=30,n=6){const s=Gw(t),r=Math.floor(Date.now()/1e3/e),o=new ArrayBuffer(8);new DataView(o).setUint32(4,r);const c=await crypto.subtle.importKey("raw",s.buffer,{name:"HMAC",hash:"SHA-1"},!1,["sign"]),a=await crypto.subtle.sign("HMAC",c,o),l=new Uint8Array(a),d=l[l.length-1]&15,u=(l[d]&127)<<24|(l[d+1]&255)<<16|(l[d+2]&255)<<8|l[d+3]&255,f=String(u%Math.pow(10,n)).padStart(n,"0");return f.slice(0,3)+" "+f.slice(3)}function fa(t,e){navigator.clipboard.writeText(e).catch(()=>{});const n=t.innerHTML;t.innerHTML=Hw,setTimeout(()=>{t.innerHTML=n},1500)}function Yw(){const t=document.createElement("div");t.className="sheet-bg",t.innerHTML=`
    <div class="sheet">
      <div class="sheet-handle"></div>
      <div class="sheet-title">About Passkeys</div>
      <div class="sheet-sub">
        Passkeys are created automatically when you sign in to a website or app that supports them.
        They are stored securely in your vault — no manual entry is needed.
      </div>
      <button class="modal-btn" id="_pkInfoDismiss">Got it</button>
    </div>`,document.body.appendChild(t);const e=()=>{t.remove()};t.addEventListener("click",n=>{n.target===t&&e()}),t.querySelector("#_pkInfoDismiss").addEventListener("click",e)}function Xw(){const t=document.getElementById("screen-vault-detail"),e=document.getElementById("detailBackBtn"),n=document.getElementById("backLabel"),s=document.getElementById("editBtn"),r=document.getElementById("hdrIcon"),o=document.getElementById("hdrName"),i=document.getElementById("hdrType"),c=document.getElementById("newPanel"),a=document.getElementById("passwordPanel"),l=document.getElementById("totpPanel"),d=document.getElementById("passkeyPanel"),u=document.getElementById("pwVal"),f=document.getElementById("togglePwBtn"),h=document.getElementById("savePwBtn"),p=document.getElementById("delPwBtn"),m=document.getElementById("totpCode"),w=document.getElementById("totpTimer"),y=document.getElementById("totpRing"),g=document.getElementById("copyCodeBtn"),v=document.getElementById("saveTotpBtn"),S=document.getElementById("delTotpBtn"),A=document.getElementById("pkDomain"),C=document.getElementById("pkUsername"),T=document.getElementById("pkCreated"),L=document.getElementById("pkLastUsed"),B=document.getElementById("delPkBtn"),$=t.querySelectorAll(".type-pick-row");let _=null,D=!1,V=!1,F=!1,Q=null;function M(){[c,a,l,d].forEach(k=>k.classList.remove("active"))}function H(k){M(),{password:a,totp:l,passkey:d,new:c}[k]?.classList.add("active")}function W(k){D=k,t.querySelectorAll(".view-field").forEach(x=>x.style.display=k?"none":""),t.querySelectorAll(".edit-field").forEach(x=>x.style.display=k?"":"none"),t.querySelectorAll(".view-only").forEach(x=>x.style.display=k?"none":""),t.querySelectorAll(".edit-only").forEach(x=>x.style.display=k?"":"none"),s.textContent=k?"Cancel":"Edit"}function Le(k){_=k,V=!1,F=!1;const x=k.type;if(r.innerHTML=Es[x]||Es.password,o.textContent=Z(k.name),i.textContent=ua[x]||"Credential",n.textContent="Back",s.style.display=x==="passkey"?"none":"",H(x),W(!1),x==="password"){const I=k;E("name",Z(I.name)),E("username",Z(I.username)),u.textContent="············",u.classList.add("masked"),N("name",Z(I.name)),N("username",Z(I.username)),N("password",Z(I.password));let j="";try{j=JSON.parse(Z(I.domains))[0]||""}catch{}E("domain",j),N("domain",j);const le=Z(I.notes);if(E("notes",le||"—"),!le){const he=a.querySelector('.view-field[data-field="notes"]');he&&(he.style.color="var(--text3)")}N("notes",le)}else if(x==="totp"){const I=k;E("issuer",Z(I.name)),N("issuer",Z(I.name)),E("account",Z(I.notes)),N("account",Z(I.notes)),Z(I.totpSecret),kn(I)}else if(x==="passkey"){const I=k;A.textContent=Z(I.rpId),C.textContent=Z(I.userHandle),T.textContent=O(I.createdAt),L.textContent=O(I.updatedAt)}}function Je(){_=null,V=!0,F=!1,r.innerHTML=Es.password,o.textContent="New Credential",i.textContent="Credential",n.textContent="Cancel",s.style.display="none",H("new")}function Ue(k){r.innerHTML=Es[k],o.textContent="",i.textContent=ua[k],s.style.display="none",H(k),t.querySelectorAll(".edit-field").forEach(x=>{x instanceof HTMLInputElement&&(x.value=""),x instanceof HTMLTextAreaElement&&(x.value="")}),W(!0)}$.forEach(k=>{k.addEventListener("click",()=>{const x=k.dataset.newType;if(x==="passkey"){Yw();return}(x==="password"||x==="totp")&&Ue(x)})}),e.addEventListener("click",()=>{D&&!V?W(!1):(Ze(),Nr())}),s.addEventListener("click",()=>{D?W(!1):(_?.type==="password"?N("password",Z(_.password)):_?.type==="totp"&&N("secret",Z(_.totpSecret)),W(!0))}),f.addEventListener("click",()=>{if(!_||_.type!=="password")return;F=!F;const k=Z(_.password);u.textContent=F?k:"············",u.classList.toggle("masked",!F)}),t.addEventListener("click",k=>{const x=k.target.closest(".copy-btn");if(!x)return;const I=x.dataset.copy;if(!I||!_)return;let j="";if(_.type==="password"){const le=_;I==="username"&&(j=Z(le.username)),I==="password"&&(j=Z(le.password))}j&&fa(x,j)}),g.addEventListener("click",()=>{const k=m.textContent?.replace(/\s/g,"")||"";k&&k!=="000000"&&fa(g,k)});async function $e(){!_||!De||confirm("Delete this credential?")&&(await De.delete(_.id),Ze(),J("vault-list"))}p.addEventListener("click",$e),S.addEventListener("click",$e),B.addEventListener("click",$e),h.addEventListener("click",async()=>{if(!De)return;const k=P("name"),x=P("username"),I=P("password"),j=P("domain"),le=P("notes");if(k){if(V){const he=Date.now(),En={id:crypto.randomUUID(),type:"password",createdAt:he,updatedAt:he,favorite:!1,_deviceOrigin:"local-device",_schemaVersion:1,name:z(k),notes:le?z(le):null,domains:z(JSON.stringify(j?[j]:[])),username:z(x),password:z(I)};await De.save(En),Ze(),J("vault-list")}else if(_){const he={..._,updatedAt:Date.now(),name:z(k),username:z(x),password:z(I),domains:z(JSON.stringify(j?[j]:[])),notes:le?z(le):null};await De.save(he),Le(he)}}}),v.addEventListener("click",async()=>{if(!De)return;const k=P("issuer"),x=P("account"),I=P("secret");if(!(!k||!I)){if(V){const j=Date.now(),le={id:crypto.randomUUID(),type:"totp",createdAt:j,updatedAt:j,favorite:!1,_deviceOrigin:"local-device",_schemaVersion:1,name:z(k),notes:x?z(x):null,totpSecret:z(I),totpAlgorithm:"SHA1",totpDigits:6,totpPeriod:30};await De.save(le),Ze(),J("vault-list")}else if(_){const j={..._,updatedAt:Date.now(),name:z(k),notes:x?z(x):null,totpSecret:z(I)};await De.save(j),Le(j)}}});function kn(k){Ze();const x=k.totpPeriod||30,I=Z(k.totpSecret);async function j(){try{const En=await Ww(I,x,k.totpDigits||6);m.textContent=En}catch{m.textContent="--- ---"}const le=Math.floor(Date.now()/1e3),he=x-le%x;w.textContent=`${he}s`,y.style.strokeDashoffset=String(100*(1-he/x))}j(),Q=setInterval(j,1e3)}function Ze(){Q&&(clearInterval(Q),Q=null)}function E(k,x){const I=t.querySelector(`.panel.active .view-field[data-field="${k}"]`);I&&(I.textContent=x)}function N(k,x){const I=t.querySelector(`.panel.active .edit-field[data-field="${k}"]`);I&&(I.value=x)}function P(k){return t.querySelector(`.panel.active .edit-field[data-field="${k}"]`)?.value?.trim()||""}function O(k){return new Date(k).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}new MutationObserver(async()=>{if(t.style.display!=="none"){const k=Nw();if(k&&De){const x=await De.get(k);if(x){const I=Xd(x);Le(I)}else Je()}else Je()}else Ze()}).observe(t,{attributes:!0,attributeFilter:["style"]})}const Jw=7777,Zw="/hello",Qw=2e3,ha=32;async function Yo(t,e){if(window.isSecureContext&&t!=="127.0.0.1"&&t!=="localhost")return console.warn(`[discovery] skipping http://${t} — mixed-content blocked in secure context`),null;const n=`http://${t}:${Jw}${Zw}`;try{const s=new AbortController,r=setTimeout(()=>s.abort(),Qw);e?.addEventListener("abort",()=>s.abort(),{once:!0});const o=await fetch(n,{signal:s.signal,mode:"cors"});if(clearTimeout(r),!o.ok)return null;const i=await o.json();return em(i)?i:null}catch{return null}}function em(t){if(typeof t!="object"||t===null)return!1;const e=t;return e.type==="psw-pwa"&&typeof e.deviceId=="string"&&typeof e.displayName=="string"&&Array.isArray(e.pubA_sig)&&typeof e.version=="string"}async function tm(t,e,n){let r=0;const o=Array.from({length:254},(i,c)=>`${t}.${c+1}`);for(let i=0;i<o.length;i+=ha){if(n?.aborted)return null;const c=o.slice(i,i+ha),l=(await Promise.all(c.map(async d=>{const u=await Yo(d,n);return r++,e?.(r,254),u?{ip:d,hello:u}:null}))).find(d=>d!==null);if(l)return e?.(254,254),l}return null}function nm(t){const e=t.match(/\b(10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})\b/);return e?e[1]:null}async function sm(){try{const t=new RTCPeerConnection({iceServers:[]});t.createDataChannel("");const e=await t.createOffer();return await t.setLocalDescription(e),new Promise(n=>{const s=setTimeout(()=>{t.close(),n(null)},2500);t.onicecandidate=r=>{if(!r.candidate)return;const o=nm(r.candidate.candidate);o&&(clearTimeout(s),t.close(),n(o.split(".").slice(0,3).join(".")))}})}catch{return null}}function Rn(...t){const e=[];for(const o of t){if(o.length>65535)throw new RangeError("concat: input exceeds 2-byte length prefix limit");const i=new Uint8Array(2);new DataView(i.buffer).setUint16(0,o.length,!1),e.push(i,o)}const n=e.reduce((o,i)=>o+i.length,0),s=new Uint8Array(n);let r=0;for(const o of e)s.set(o,r),r+=o.length;return s}const pa="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";function rm(t){let e=0,n=0,s="";for(const r of t)for(n=n<<8|r,e+=8;e>=5;)s+=pa[n>>>e-5&31],e-=5;return e>0&&(s+=pa[n<<5-e&31]),s}function om(t){const e=rm(t).slice(0,8);return e.slice(0,4)+"-"+e.slice(4)}async function im(t,e,n){const s=await crypto.subtle.importKey("raw",t,{name:"HKDF"},!1,["deriveBits"]),r=await crypto.subtle.deriveBits({name:"HKDF",hash:"SHA-256",salt:e,info:new TextEncoder().encode(n)},s,256);return new Uint8Array(r)}function cm(t){const e=new Uint8Array(4);return new DataView(e.buffer).setUint32(0,t,!1),e}class am{constructor(e){this.db=e}async has(e){const n=await this.db.get("replay",e);return n?n.expiresAt>Date.now():!1}async add(e,n){const s=Date.now();await this.db.put("replay",{sessionId:e,peerId:n,seenAt:s,expiresAt:s+Od})}async sweep(){const e=this.db.transaction("replay","readwrite"),s=await e.store.index("expiresAt").getAll(IDBKeyRange.upperBound(Date.now()));for(const r of s)await e.store.delete(r.sessionId);return await e.done,s.length}}async function lm(t,e,n,s,r,o){const i=Rn(n,s,o),c=await Xc(i,e),a=JSON.stringify({pubKem:Array.from(n),pubSig:Array.from(s),sig:Array.from(c)});t.send(new TextEncoder().encode(a).buffer);let l,d;return new Promise((u,f)=>{t.onmessage(async h=>{const p=JSON.parse(new TextDecoder().decode(h));{l=new Uint8Array(p.pubKem),d=new Uint8Array(p.pubSig);const m=new Uint8Array(p.sig),w=Rn(l,d,o);if(!await Bd(m,w,r)){f(new Error("LT exchange: Device B signature invalid"));return}const g=crypto.getRandomValues(new Uint8Array(32)),v=Rn(g,o),S=await Xc(v,e);t.send(new TextEncoder().encode(JSON.stringify({syncSalt:Array.from(g),sig:Array.from(S)})).buffer),e.fill(0),u({peerPubKem:l,peerPubSig:d,syncSalt:g})}})})}async function dm(t,e){const n={pairingSessionId:crypto.randomUUID(),sessionSalt:crypto.getRandomValues(new Uint8Array(32)),pubA_eph:new Uint8Array(0),privA_eph:new Uint8Array(0),pubB_eph:null,accepted:!1};return n.privA_eph=Td.randomSecretKey(),n.pubA_eph=await Id(n.privA_eph),t.register&&(t.register("/hello",()=>({type:"psw-pwa",deviceId:e.deviceId,displayName:e.displayName,pubA_sig:Array.from(e.pubSig),version:"1"})),t.register("/pair-init",()=>({pubA_eph:Array.from(n.pubA_eph),sessionSalt:Array.from(n.sessionSalt),pairingSessionId:n.pairingSessionId})),t.register("/pair-join",s=>{const r=s;return n.pubB_eph=new Uint8Array(r.pubB_eph),{ok:!0}})),n}async function um(t,e,n){const s=await crypto.subtle.digest("SHA-256",Rn(t,e,n));return om(new Uint8Array(s))}async function fm(t,e,n){await new am(t).add(e.pairingSessionId,n),e.accepted=!0}async function hm(t,e,n,s,r,o,i,c,a,l){const d=await lm(t,e,n,s,r,o),{updated:u}=await Fi(i,c,a,d.peerPubKem);return u&&await kw(i,a,l,d.peerPubKem),d}async function pm(t,e,n){const s=Vr.encapsulate(t),r=await im(s.sharedSecret,Rn(e,cm(n)),"psw-pwa-sync-v1");return{ciphertext:s.cipherText,sessionKey:{sharedKey:r,sessionCounter:n}}}async function ym(t,e,n,s){const{ciphertext:r,sessionKey:o}=await pm(e,n,s);return t.send(new TextEncoder().encode(JSON.stringify({ciphertext:Array.from(r)})).buffer),o}async function ya(t,e){const n=crypto.getRandomValues(new Uint8Array(12)),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},e,t),r=new Uint8Array(12+s.byteLength);return r.set(n,0),r.set(new Uint8Array(s),12),r.buffer}async function gm(t,e){const n=Vr.keygen(),s=Td.randomSecretKey(),r=await Id(s);return{deviceId:crypto.randomUUID(),displayName:t,pubKem:n.publicKey,pubSig:r,privKemWrapped:await ya(n.secretKey,e),privSigWrapped:await ya(s,e),createdAt:Date.now()}}async function Zd(){const t=await te();if((await new hn(t).listActive()).length===0)return;const s=new BroadcastChannel("psw-crdt-sync");try{s.postMessage({type:"sync-requested",reason:"revoke",ts:Date.now()})}finally{s.close()}}const Qd='<svg class="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',wm='<svg class="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>',mm='<svg class="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',vm='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',bm='<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';let Y,Se=null,fr=null,hr=null,_t=null,nt=null,Xo=null,Ms=null,qi=null,en=null;const km=3e4;let Os,pn,fs,zt,bn,Ps,Ne,tn,eu,Tn,tu,nu,pr=null;function Em(t,e){Se=t,fr=e}function su(t){if(!t)return"never";const e=Date.now()-t;if(e<6e4)return"just now";const n=Math.floor(e/6e4);if(n<60)return`${n}m ago`;const s=Math.floor(n/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}function Sm(t){return t&&Date.now()-t<5*6e4?"synced":"out of reach"}function ru(t){const e=new Date(t);return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]} ${e.getDate()}`}function xm(t){const e=t.toLowerCase();return e.includes("mac")||e.includes("laptop")||e.includes("book")?wm:Qd}function ko(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function ga(t,e){const n=btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");return e==="ed25519"?{kty:"OKP",crv:"Ed25519",x:n}:{kty:"OKP",crv:"ML-KEM-768",x:n}}async function Am(t,e){const n=Date.now()+e;for(;!t.pubB_eph;){if(Date.now()>n)throw new Error("Pairing timeout — no peer joined");await new Promise(s=>setTimeout(s,200))}}function Mn(){nt=null,Xo=null,Ms=null,qi=null,en=null}async function Hi(){if(!Se)return;const t=await Se.listActive(),e=t.find(s=>s.deviceId===hr),n=t.filter(s=>s.deviceId!==hr).sort((s,r)=>(r.lastSeenAt??0)-(s.lastSeenAt??0));if(Os.innerHTML="",e){const s=document.createElement("div");s.className="row",s.innerHTML=`
      ${Qd}
      <div class="row-body"><div class="row-label">${ko(e.displayName)}</div><div class="row-sub">This device</div></div>
    `,Os.appendChild(s)}for(const s of n){const r=document.createElement("div");r.className="row tap";const o=Sm(s.lastSeenAt),i=su(s.lastSeenAt),c=`Paired ${ru(s.pairedAt)} · ${o==="synced"?"seen "+i:o}`;r.innerHTML=`
      ${xm(s.displayName)}
      <div class="row-body"><div class="row-label">${ko(s.displayName)}</div><div class="row-sub">${ko(c)}</div></div>
      ${bm}
    `,r.addEventListener("click",()=>Lm(s)),Os.appendChild(r)}}function ou(){pn.style.display="none",Ne.style.display="none",zt.value="",Se&&Se.listActive().then(t=>{const e=t.filter(n=>n.deviceId!==hr&&n.lastKnownIp).sort((n,s)=>(s.lastSeenAt??0)-(n.lastSeenAt??0))[0];e?.lastKnownIp&&(zt.value=e.lastKnownIp)}).catch(()=>{}),fs.style.display="flex"}async function wa(t){fs.style.display="none",bn.style.display="flex",Ps.textContent="Looking for devices on your network…",_t?.abort(),_t=new AbortController;const e=_t.signal;try{const n=t?.trim();if(n){const o=await Yo(n,e);if(o){await Eo(n,o);return}Ks();return}if(Se){const i=(await Se.listActive()).filter(c=>c.lastKnownIp&&c.deviceId!==hr).map(c=>c.lastKnownIp);if(i.length>0){const c=i.map(async d=>{const u=await Yo(d,e);return u?{ip:d,hello:u}:null}),l=(await Promise.all(c)).find(d=>d!==null);if(l){await Eo(l.ip,l.hello);return}}}if(e.aborted)return;Ps.textContent="Scanning network…";const s=await sm()??"192.168.1",r=await tm(s,(o,i)=>{Ps.textContent=`Scanning ${o}/${i}…`},e);r?await Eo(r.ip,r.hello):Ks()}catch{Ks()}}async function Eo(t,e){bn.style.display="none",pn.style.display="flex",Se&&e.deviceId&&await Se.updateLastKnownIp(e.deviceId,t).catch(()=>{});try{if(!fr)throw new Error("DB not ready");const n=bu();en=await gm("This device",n);const{MockHTTPServer:s}=await kr(async()=>{const{MockHTTPServer:o}=await import("./http-eZyTbE1X.js");return{MockHTTPServer:o}},[]);Xo=new s,nt=await dm(Xo,en),qi=nt.privA_eph,await Am(nt,km);const r=await um(nt.sessionSalt,nt.pubA_eph,nt.pubB_eph);_m(r)}catch(n){console.warn("[pairing] onPeerFound failed:",n),Mn(),Ks()}}function Ks(){bn.style.display="none",fs.style.display="none",Ne.style.display="flex"}function Cm(){Ne.style.display="none",ou()}function _m(t){bn.style.display="none",pn.style.display="flex",eu.textContent=t,tn.classList.add("open")}function ma(){tn.classList.remove("open"),_t?.abort(),_t=null,Mn(),Ns()}async function Im(){if(tn.classList.remove("open"),!nt||!fr){Mn(),Ns();return}const t=nt,e=fr,n=qi;try{const s=crypto.randomUUID();await fm(e,t,s);const{MockChannel:r}=await kr(async()=>{const{MockChannel:a}=await import("./transport-BLE8PJhV.js");return{MockChannel:a}},[]);if(Ms=new r,!en)throw new Error("No local identity — startPairing() not called");const o=await Hp(),i=crypto.randomUUID(),c=await hm(Ms,n,en.pubKem,en.pubSig,t.pubB_eph,t.sessionSalt,e,s,i,o);if(await ym(Ms,c.peerPubKem,c.syncSalt,1),Se){const a=Date.now(),l={deviceId:s,displayName:"Paired Device",publicKey:ga(c.peerPubSig,"ed25519"),kemPublicKey:ga(c.peerPubKem,"ml-kem-768"),pairedAt:a,lastSeenAt:a,sessionCounter:1,syncSalt:c.syncSalt};await Se.save(l)}Mn(),Ns(),await Hi()}catch(s){console.warn("[pairing] acceptPairing failed:",s),Mn(),Ns(),Ne.style.display="flex";const r=Ne.querySelector("#retryBtn");r&&(r.textContent="Pairing failed — tap to retry")}}function Ns(){bn.style.display="none",fs.style.display="none",Ne.style.display="none",pn.style.display="flex",_t?.abort(),_t=null;const t=Ne.querySelector("#retryBtn");t&&(t.textContent="try again")}function Lm(t){pr=t.deviceId,tu.textContent=t.displayName;const e=su(t.lastSeenAt);nu.textContent=`Paired ${ru(t.pairedAt)} · seen ${e}`,Tn.classList.add("open")}function yr(){Tn.classList.remove("open"),pr=null}async function Dm(){if(!(!Se||!pr))try{await Se.revoke(pr),yr(),await Hi(),await Zd()}catch(t){console.warn("[devices] revoke or sync failed:",t),yr(),Ne.style.display="flex";const e=Ne.querySelector("#retryBtn");e&&(e.textContent=t instanceof Error?t.message:"Sync failed after revocation — tap to retry",e.style.color="var(--error, #ff3b30)",setTimeout(()=>{e&&(e.textContent="try again",e.style.color=""),Ne.style.display="none"},5e3))}}function Bm(){return`
<div class="nav">
  <button class="nav-btn" id="devicesBackBtn">
    ${vm}
    Settings
  </button>
  <span class="nav-title">Devices</span>
  <span style="width:72px"></span>
</div>

<div class="content">
  <div>
    <div class="sec-label">Paired</div>
    <div class="rows" id="pairedRows"></div>
  </div>

  <div>
    <div class="sec-label">Add</div>
    <div class="rows">
      <div class="row tap" id="addRow">
        ${mm}
        <div class="row-label">Add device…</div>
      </div>
      <div class="ip-row" id="ipRow" style="display:none">
        <input
          id="ipInput"
          type="text"
          inputmode="numeric"
          placeholder="192.168.x.x  (or leave blank to scan)"
          autocomplete="off"
          spellcheck="false"
        />
        <button class="btn-inline" id="ipConnectBtn">Connect</button>
      </div>
      <div class="scan-row" id="scanRow" style="display:none">
        <div class="scan-spinner"></div>
        <span class="scan-label" id="scanLabel">Looking for devices on your network…</span>
      </div>
      <div class="not-found" id="notFoundRow" style="display:none">
        <span>No peer found — <span style="color:var(--text);cursor:pointer" id="retryBtn">try again</span></span>
      </div>
    </div>
  </div>
</div>

<div class="sheet-bg" id="pinSheet">
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">Confirm Pairing</div>
    <div class="sheet-sub">Do the numbers match on both devices?</div>
    <div class="pin" id="pinDisplay">4 2 7 1</div>
    <div class="btn-row">
      <button class="btn" id="pinRejectBtn">Reject</button>
      <button class="btn" id="pinAcceptBtn">Accept</button>
    </div>
  </div>
</div>

<div class="sheet-bg" id="revokeSheet">
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title" id="revokeTitle">Device</div>
    <div class="sheet-sub" id="revokeSub"></div>
    <button class="btn full muted" id="confirmRevokeBtn">Remove device</button>
    <button class="btn full" id="cancelRevokeBtn">Cancel</button>
  </div>
</div>
`}function Rm(t){Y=t,Y.innerHTML=Bm(),Os=Y.querySelector("#pairedRows"),pn=Y.querySelector("#addRow"),fs=Y.querySelector("#ipRow"),zt=Y.querySelector("#ipInput"),bn=Y.querySelector("#scanRow"),Ps=Y.querySelector("#scanLabel"),Ne=Y.querySelector("#notFoundRow"),tn=Y.querySelector("#pinSheet"),eu=Y.querySelector("#pinDisplay"),Tn=Y.querySelector("#revokeSheet"),tu=Y.querySelector("#revokeTitle"),nu=Y.querySelector("#revokeSub"),Y.querySelector("#devicesBackBtn").addEventListener("click",()=>Nr()),pn.addEventListener("click",()=>ou()),Y.querySelector("#ipConnectBtn").addEventListener("click",()=>{wa(zt.value)}),zt.addEventListener("keydown",n=>{n.key==="Enter"&&wa(zt.value)}),Y.querySelector("#retryBtn").addEventListener("click",()=>{Cm()}),tn.addEventListener("click",n=>{n.target===tn&&ma()}),Y.querySelector("#pinRejectBtn").addEventListener("click",()=>ma()),Y.querySelector("#pinAcceptBtn").addEventListener("click",()=>{Im()}),Tn.addEventListener("click",n=>{n.target===Tn&&yr()}),Y.querySelector("#confirmRevokeBtn").addEventListener("click",()=>{Dm()}),Y.querySelector("#cancelRevokeBtn").addEventListener("click",()=>yr()),new MutationObserver(()=>{Y.style.display!=="none"&&Hi()}).observe(Y,{attributes:!0,attributeFilter:["style"]})}const Tm=typeof window.showSaveFilePicker=="function",Mm=/iP(hone|ad)/.test(navigator.userAgent)&&/WebKit/.test(navigator.userAgent)&&!window.MSStream,Om=10080*60*1e3,iu="safari-backup-reminder-dismissed-at";async function Pm(t){const e=await Ql(t),n=new Blob([e],{type:"application/octet-stream"}),s=`vault-${new Date().toISOString().slice(0,10)}.enc`;if(Tm)try{const o=await(await window.showSaveFilePicker({suggestedName:s,types:[{description:"Encrypted vault backup",accept:{"application/octet-stream":[".enc"]}}],startIn:"documents"})).createWritable();return await o.write(n),await o.close(),{success:!0,platform:"file-picker"}}catch(r){if(r.name==="AbortError")return{success:!1,platform:"file-picker"};throw r}else if(Mm){const r=new File([n],s,{type:"application/octet-stream"});return navigator.canShare&&navigator.canShare({files:[r]})?(await navigator.share({files:[r],title:"Vault Backup"}),{success:!0,platform:"share-sheet"}):(va(n,s),{success:!0,platform:"ios-download-fallback"})}else return va(n,s),Km(),{success:!0,platform:"blob-download"}}function va(t,e){const n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=e,document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(n),1e4)}async function cu(){const n=(await(await te()).get("backup-handles",iu))?.value??0;return Date.now()-n>Om}async function Km(){await cu()&&window.dispatchEvent(new CustomEvent("show-safari-backup-banner"))}async function Nm(){await(await te()).put("backup-handles",{key:iu,value:Date.now()})}function Um(t={}){const e=Date.now();return{id:crypto.randomUUID(),type:"password",createdAt:e,updatedAt:e,favorite:!1,_deviceOrigin:"test-device-001",_schemaVersion:1,name:z("GitHub"),notes:null,domains:z(JSON.stringify(["github.com"])),username:z("testuser"),password:z("hunter2"),...t}}const $m='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Ss='<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';let X,Jo=null,jr,zi="bip39",qt=null,hs=null,Zn=null,Qn=null,Gi=null,He=null,xt=null,st=null,au,Re,nn,lu,es,sn,On,qr,Us,gr,It=null;function Vm(t){Jo=t}function Fm(t){const e=Date.now()-t;if(e<6e4)return"just now";const n=Math.floor(e/6e4);if(n<60)return`${n}m ago`;const s=Math.floor(n/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}function ba(t){const e=[];let n="",s=!1;for(let r=0;r<t.length;r++){const o=t[r];s?o==='"'?r+1<t.length&&t[r+1]==='"'?(n+='"',r++):s=!1:n+=o:o==='"'?s=!0:o===","?(e.push(n),n=""):n+=o}return e.push(n),e}function jm(t){const e=t.map(n=>n.trim().toLowerCase());return e.includes("title")&&e.includes("username")&&e.includes("password")?"1password":e.includes("url")&&e.includes("name")&&e.includes("username")?"lastpass":null}function qm(t){const e=t.split(/\r?\n/).filter(i=>i.trim().length>0);if(e.length<2)return[];const n=ba(e[0]),s=jm(n);if(!s)return[];const r=new Map;n.forEach((i,c)=>r.set(i.trim().toLowerCase(),c));const o=[];for(let i=1;i<e.length;i++){const c=ba(e[i]);s==="1password"?o.push({title:c[r.get("title")??0]??"",url:c[r.get("url")??1]??"",username:c[r.get("username")??2]??"",password:c[r.get("password")??3]??"",notes:c[r.get("notes")??4]??"",otp:c[r.get("otpauth")??5]??""}):o.push({title:c[r.get("name")??5]??"",url:c[r.get("url")??0]??"",username:c[r.get("username")??1]??"",password:c[r.get("password")??2]??"",notes:c[r.get("extra")??4]??"",otp:c[r.get("totp")??3]??""})}return o}function ka(t){try{return new URL(t.startsWith("http")?t:`https://${t}`).hostname}catch{return t}}async function Hm(){try{(await Pm({})).success&&await Wi()}catch(t){console.warn("[backup] Export failed:",t)}}let ts=null;async function zm(){es.click()}async function Gm(){const t=es.files?.[0];if(!t)return;ts=await t.arrayBuffer(),es.value="";try{qt=JSON.parse(new TextDecoder().decode(ts)).header}catch{qt=null}const e=qt?Wp(qt):void 0,n=qt?.personalKeyType==="passphrase"?"passphrase":"bip39";Wm(e,n)}function Wm(t,e){jr=t,zi=e??"bip39",hs=null,Xm(t,e),Et(),On.classList.add("open")}function wr(){On.classList.remove("open"),ts=null,qt=null,jr=void 0,zi="bip39",hs=null,Zn=null,Qn=null,Gi=null,He=null,xt=null,st=null}function So(t,e){const n=document.createElement("textarea");return n.id=t,n.placeholder=e,n.autocomplete="off",n.setAttribute("autocorrect","off"),n.setAttribute("autocapitalize","off"),n.spellcheck=!1,n.className="seed-input",n}function Ym(t,e){const n=document.createElement("input");return n.id=t,n.type="password",n.placeholder=e,n.autocomplete="off",n.setAttribute("autocorrect","off"),n.setAttribute("autocapitalize","off"),n.spellcheck=!1,n.className="seed-input",n}function Ea(t){return t?.value.trim().split(/\s+/).filter(Boolean).length??0}function Et(){const t=!!hs||Ea(Zn)===24,e=Ea(Qn)===24,n=(Gi?.value.length??0)>=12,s=zi==="passphrase"?n:e;let r=!1;switch(jr){case"passkey":r=t;break;case"personal":r=s;break;case"either":r=t||s;break;case"both-required":r=t&&s;break;default:r=(qr?.querySelector("#backupSeedInput")?.value.trim().length??0)>0}He&&(He.disabled=!r)}function Xm(t,e){const n=qr;n.replaceChildren(),Zn=null,Qn=null,He=null,xt=null,st=null;const s=e??"bip39",r=n.querySelector("#restoreSheetTitle"),o=n.querySelector("#restoreSheetSub"),i=document.createElement("div");if(i.id="restoreSheetStatus",i.className="restore-status",i.hidden=!0,xt=i,t===void 0){r&&(r.textContent="Enter Recovery Key"),o&&(o.textContent="Enter your 12-word recovery phrase or master password to unlock the backup.");const u=So("backupSeedInput","Recovery phrase or master password");u.addEventListener("input",Et);const f=document.createElement("button");f.id="restoreSubmitBtn",f.className="btn",f.textContent="Restore",f.disabled=!0,f.addEventListener("click",()=>Sa()),He=f;const h=document.createElement("button");h.className="btn muted",h.textContent="Cancel",h.addEventListener("click",()=>wr()),n.append(u,i,f,h);return}r&&(r.textContent="Restore Backup"),o&&(o.textContent="Authenticate to decrypt your backup.");const c=t!=="personal",a=t!=="passkey";if(c){const u=document.createElement("button");u.id="passkeyAssertBtn",u.className="btn",u.textContent="Unlock with passkey",u.addEventListener("click",Jm);const f=document.createElement("div");f.id="passkeyStatus",f.hidden=!0,f.className="restore-status";const h=document.createElement("button");h.className="link-btn",h.textContent="Lost your passkey?";const p=So("passkeySeedInput","24 passkey seed words");p.hidden=!0,p.addEventListener("input",Et),Zn=p;let m=!1;h.addEventListener("click",()=>{m=!m,p.hidden=!m,m||(p.value=""),Et()}),st=f,n.append(u,f,h,p)}if(a)if(s==="passphrase"){const u=Ym("personalKeyInput","Personal recovery passphrase");u.addEventListener("input",Et),Gi=u,n.append(u)}else{const u=So("personalKeyInput","24 personal recovery key words");u.addEventListener("input",Et),Qn=u,n.append(u)}const l=document.createElement("button");l.id="restoreSubmitBtn",l.className="btn",l.textContent="Restore",l.disabled=!0,l.addEventListener("click",()=>Sa()),He=l;const d=document.createElement("button");d.className="btn muted",d.textContent="Cancel",d.addEventListener("click",()=>wr()),n.append(i,l,d)}async function Jm(){hs=null,Et(),st&&(st.textContent="Waiting for passkey…",st.hidden=!1);try{throw new Error("TODO: T5 passkey assertion not yet implemented")}catch(t){st&&(st.textContent=t instanceof Error?t.message:"Passkey assertion failed",st.classList.add("error"));return}}async function Zm(t){const n=qr?.querySelector("#backupSeedInput")?.value.trim();if(!n){t("Please enter a recovery phrase or master password",!0);return}t("Restoring…");const r=n.split(/\s+/).length===12?{type:"recovery",value:n}:{type:"password",value:n};let o=0;const i=(c,a)=>{o++;const l=c,d=a,u=l.updatedAt?new Date(l.updatedAt).toLocaleString():"unknown",f=d.updatedAt?new Date(d.updatedAt).toLocaleString():"unknown",h=`Conflict #${o}${l.id?` (${l.id.slice(0,8)}…)`:""} — Local: ${u} vs Imported: ${f}`;return rv(h),new Promise(p=>{It=p})};try{const c=await Wd(ts,r,{onConflict:i});if(c.success){wr();const a=c.conflictsFound>0?`, ${c.conflictsResolved} of ${c.conflictsFound} conflict${c.conflictsFound===1?"":"s"} resolved`:"";Re.textContent=`${c.entriesRestored} entries restored${a}`,Re.classList.add("success"),Re.style.display="block",J("lock-screen")}else t(c.error??"Restore failed",!0)}catch{t("Restore failed — try again",!0)}}async function Sa(){if(!ts)return;const t=(e,n=!1)=>{xt&&(xt.textContent=e,xt.classList.toggle("error",n),xt.hidden=!1)};if(jr===void 0)return Zm(t);He&&(He.disabled=!0),t("Restoring…");try{const e=Zn?.value.trim(),n=Qn?.value.trim();if(!(hs??void 0)&&e)throw new Error("TODO: T5 deriveFromSeedWords not yet implemented");let r;throw n?new Error("TODO: T5 importPersonalRecoveryKey not yet implemented"):new Error("TODO: T5 unwrapDekFromMatrix not yet implemented")}catch(e){t(e instanceof Error?e.message:"Restore failed",!0),He&&(He.disabled=!1)}}async function Qm(){sn.click()}async function ev(){const t=sn.files?.[0];if(!t||!Jo)return;Re.textContent="Importing…",Re.classList.remove("success"),Re.style.display="block";const e=await t.text(),n=qm(e);if(n.length===0){Re.textContent="No entries found in CSV file",sn.value="";return}let s=0;for(const r of n){if(!r.title&&!r.url&&!r.username)continue;const o=r.title||ka(r.url)||"Imported",i=ka(r.url),c=Um({name:z(o),username:z(r.username),password:z(r.password),domains:z(JSON.stringify(i?[i]:[])),notes:r.notes?z(r.notes):null});await Jo.save(c),s++}Re.textContent=`${s} entries imported`,Re.classList.add("success"),sn.value=""}async function tv(){try{await wy(),gr.style.display="none",await Wi()}catch(t){console.warn("[backup] iCloud setup failed:",t)}}async function nv(){try{const t=await by();gr.style.display=t===!1?"flex":"none"}catch{}}async function Wi(){const t=await rd();au.textContent=t?Fm(t):"Never"}async function sv(){typeof window.showSaveFilePicker!="function"&&(Us.style.display=await cu()?"flex":"none")}function rv(t){lu.textContent=`${cv(t)} already exists. Which version do you want to keep?`,nn.classList.add("open")}function ov(){nn.classList.remove("open"),It&&(It("skip"),It=null)}function xo(t){nn.classList.remove("open"),It&&(It(t),It=null)}function iv(){const t=typeof window.showSaveFilePicker=="function";return`
<div class="nav">
  <button class="nav-btn" id="backupBackBtn">
    ${$m}
    Settings
  </button>
  <span class="nav-title">Backup &amp; Export</span>
  <span style="width:72px"></span>
</div>

<div class="content">
  ${t?"":`
  <!-- Safari backup reminder banner (hidden by default, shown by event or on-screen check) -->
  <div class="safari-banner" id="safariBanner" style="display:none">
    <div class="safari-banner-body">
      <strong>No automatic backup on this browser.</strong>
      Use <em>Export vault</em> regularly to save a backup file to iCloud Drive manually.
    </div>
    <button class="safari-banner-dismiss" id="safariBannerDismiss">Got it</button>
  </div>
  `}

  <div>
    <div class="sec-label">Export</div>
    <div class="rows">
      ${t?`
      <div class="row tap" id="exportRow">
        <div class="row-body"><div class="row-label">Export vault</div><div class="row-sub">.enc encrypted file</div></div>
        ${Ss}
      </div>
      `:`
      <div class="platform-notice">Export is available on Chrome or Edge on macOS</div>
      `}
    </div>
  </div>

  <div>
    <div class="sec-label">Import</div>
    <div class="rows">
      <div class="row tap" id="importEncRow">
        <div class="row-body"><div class="row-label">Import vault</div><div class="row-sub">.enc backup file</div></div>
        ${Ss}
      </div>
      <div class="row tap" id="importCsvRow">
        <div class="row-body"><div class="row-label">Import from 1Password / LastPass</div><div class="row-sub">One-time migration</div></div>
        ${Ss}
      </div>
    </div>
    <div class="import-status" id="importStatus" style="display:none"></div>
  </div>

  <div>
    <div class="sec-label">iCloud</div>
    <div class="rows">
      <div class="row">
        <div class="row-body"><div class="row-label">Last backup</div><div class="row-sub">vault-latest.enc</div></div>
        <span class="row-value" id="lastBackupValue">Never</span>
      </div>
      ${t?`
      <div class="row row--warning" id="staleHandleWarning" style="display:none">
        <div class="row-body">
          <div class="row-label">Backup access lost</div>
          <div class="row-sub">Tap "Change backup location" to reconnect iCloud Drive</div>
        </div>
      </div>
      <div class="row tap" id="changeLocationRow">
        <div class="row-label">Change backup location</div>
        ${Ss}
      </div>
      `:""}
    </div>
  </div>
</div>

<!-- Hidden file inputs -->
<input type="file" id="encFileInput" accept=".enc" style="display:none"/>
<input type="file" id="csvFileInput" accept=".csv,.1pux" style="display:none"/>

<!-- Restore credential sheet (for .enc import) -->
<div class="sheet-bg" id="restoreSheet">
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title" id="restoreSheetTitle">Enter Recovery Key</div>
    <div class="sheet-sub" id="restoreSheetSub">Enter your 12-word recovery phrase or master password to unlock the backup.</div>
    <div class="restore-sheet-body" id="restoreSheetBody"></div>
  </div>
</div>

<!-- Conflict resolution sheet (for imports) -->
<div class="sheet-bg" id="conflictSheet">
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">Conflict</div>
    <div class="sheet-sub" id="conflictSub">github.com already exists. Which version do you want to keep?</div>
    <button class="btn" id="keepLocalBtn">Keep local</button>
    <button class="btn" id="keepImportedBtn">Keep imported</button>
    <button class="btn muted" id="skipConflictBtn">Skip</button>
  </div>
</div>
`}function cv(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function av(t){X=t,X.innerHTML=iv(),au=X.querySelector("#lastBackupValue"),Re=X.querySelector("#importStatus"),nn=X.querySelector("#conflictSheet"),lu=X.querySelector("#conflictSub"),es=X.querySelector("#encFileInput"),sn=X.querySelector("#csvFileInput"),On=X.querySelector("#restoreSheet"),qr=X.querySelector("#restoreSheetBody");const e=X.querySelector("#safariBanner");!e&&typeof window.showSaveFilePicker!="function"&&console.warn("[settings-backup] #safariBanner element missing — Safari banner will be a no-op orphan div"),Us=e??document.createElement("div");const n=X.querySelector("#staleHandleWarning");!n&&typeof window.showSaveFilePicker=="function"&&console.warn("[settings-backup] #staleHandleWarning element missing on a File System Access-capable browser"),gr=n??document.createElement("div"),X.querySelector("#backupBackBtn").addEventListener("click",()=>Nr());const s=X.querySelector("#exportRow");s&&s.addEventListener("click",()=>Hm()),X.querySelector("#importEncRow").addEventListener("click",()=>zm()),es.addEventListener("change",()=>Gm()),X.querySelector("#importCsvRow").addEventListener("click",()=>Qm()),sn.addEventListener("change",()=>ev());const r=X.querySelector("#changeLocationRow");r&&r.addEventListener("click",()=>tv());const o=()=>{gr.style.display="flex"};window.addEventListener("icloud-handle-stale",o),On.addEventListener("click",l=>{l.target===On&&wr()}),nn.addEventListener("click",l=>{l.target===nn&&ov()}),X.querySelector("#keepLocalBtn").addEventListener("click",()=>xo("keep-local")),X.querySelector("#keepImportedBtn").addEventListener("click",()=>xo("keep-imported")),X.querySelector("#skipConflictBtn").addEventListener("click",()=>xo("skip"));const i=()=>{Us.style.display="flex"};window.addEventListener("show-safari-backup-banner",i);const c=X.querySelector("#safariBannerDismiss");c&&c.addEventListener("click",async()=>{Us.style.display="none",await Nm()}),new MutationObserver(()=>{X.style.display!=="none"&&(Wi(),sv(),nv(),Re.style.display="none")}).observe(X,{attributes:!0,attributeFilter:["style"]})}async function Yi(t){await lv()||await dv()}async function lv(){return new Promise(t=>{const e=indexedDB.deleteDatabase(Bi);e.onsuccess=()=>t(!0),e.onerror=()=>{console.error("[wipeVault] deleteDatabase error:",e.error),t(!1)},e.onblocked=()=>{t(!1)}})}async function dv(){const t=await new Promise((e,n)=>{const s=indexedDB.open(Bi);s.onsuccess=()=>e(s.result),s.onerror=()=>n(s.error)});await new Promise((e,n)=>{const s=Array.from(t.objectStoreNames),r=dy.filter(i=>s.includes(i));if(r.length===0){t.close(),e();return}const o=t.transaction(r,"readwrite");o.oncomplete=()=>{t.close(),e()},o.onerror=()=>{t.close(),n(o.error)},o.onabort=()=>{t.close(),n(new Error("wipe transaction aborted"))};for(const i of r)o.objectStore(i).clear()})}const Ao='<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';let ne,Pn,mr,ns,xa,Aa,Ca,Kn,Nn,Xi,vr,Be,ss,Un,br=null;function uv(){Pn.style.display="none",ns.style.display="none",mr.style.display="flex",Un=setTimeout(fv,1e4)}function fv(){Un=void 0,mr.style.display="none",ns.style.display="flex",setTimeout(()=>{ns.style.display="none",Pn.style.display="flex"},3e3)}function _a(){ss.click()}async function hv(){const t=ss.files?.[0];t&&(br=await t.arrayBuffer(),ss.value="",pv())}function pv(){Be.style.display="none",Xi.value="",Nn.classList.add("open")}function Zo(){Nn.classList.remove("open"),br=null}async function yv(){if(!br)return;const t=Xi.value.trim();if(!t)return;vr.setAttribute("disabled",""),Be.textContent="Restoring…",Be.classList.remove("error"),Be.style.display="block";const n=t.split(/\s+/).length===12?{type:"recovery",value:t}:{type:"password",value:t};try{const s=await Wd(br,n);s.success?(Be.textContent=`${s.entriesRestored} entries restored`,Be.classList.remove("error"),Zo(),J("lock-screen")):(Be.textContent=s.error??"Restore failed",Be.classList.add("error"))}catch{Be.textContent="Restore failed — try again",Be.classList.add("error")}vr.removeAttribute("disabled")}function gv(){Kn.classList.add("open")}function Qo(){Kn.classList.remove("open")}function wv(){Qo(),Yi().finally(()=>location.reload())}function mv(){return`
<div class="top">
  <div class="page-title">Recover Vault</div>
  <div class="page-sub">Local data was lost. Try each option in order.</div>
</div>

<div class="content">
  <div class="sec-label">Recovery options</div>
  <div class="rows">

    <!-- Option 1: LAN peer -->
    <div class="row" id="lanRow">
      <span class="row-num">1</span>
      <div class="row-body">
        <div class="row-label">Restore from nearby device</div>
        <div class="row-sub">Both devices must be on the same network</div>
      </div>
      ${Ao}
    </div>

    <div class="scan-row" id="lanScan" style="display:none">
      <div class="scan-spinner"></div>
      <span class="scan-label">Looking for devices on your network…</span>
    </div>

    <div class="not-found" id="lanNotFound" style="display:none">
      <span>No device found — try option 2</span>
    </div>

    <!-- Option 2: iCloud backup -->
    <div class="row" id="icloudRow">
      <span class="row-num">2</span>
      <div class="row-body">
        <div class="row-label">Restore from iCloud</div>
        <div class="row-sub">vault-latest.enc from iCloud Drive</div>
      </div>
      ${Ao}
    </div>

    <!-- Option 3: exported file -->
    <div class="row" id="fileRow">
      <span class="row-num">3</span>
      <div class="row-body">
        <div class="row-label">Restore from exported file</div>
        <div class="row-sub">Use a .enc file you exported earlier</div>
      </div>
      ${Ao}
    </div>

  </div>
</div>

<div class="bottom">
  <button class="btn" id="startFreshBtn">Start fresh</button>
</div>

<!-- Hidden file input -->
<input type="file" id="recoveryEncInput" accept=".enc" style="display:none"/>

<!-- Restore credential sheet -->
<div class="sheet-bg" id="restoreSheet">
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">Enter Recovery Key</div>
    <div class="sheet-sub">Enter your 12-word recovery phrase or master password to unlock the backup.</div>
    <textarea class="seed-input" id="seedInput" placeholder="Recovery phrase or master password" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
    <div class="restore-status" id="restoreStatus" style="display:none"></div>
    <button class="btn" id="restoreSubmitBtn">Restore</button>
    <button class="btn muted" id="restoreCancelBtn">Cancel</button>
  </div>
</div>

<!-- Start fresh confirmation sheet -->
<div class="sheet-bg" id="confirmSheet">
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">Start fresh?</div>
    <div class="sheet-sub">This will permanently erase any remaining vault data.</div>
    <button class="btn danger" id="confirmEraseBtn">Erase and start over</button>
    <button class="btn muted" id="confirmCancelBtn">Cancel</button>
  </div>
</div>
`}function vv(t){ne=t,ne.innerHTML=mv(),Pn=ne.querySelector("#lanRow"),mr=ne.querySelector("#lanScan"),ns=ne.querySelector("#lanNotFound"),xa=ne.querySelector("#icloudRow"),Aa=ne.querySelector("#fileRow"),Ca=ne.querySelector("#startFreshBtn"),Kn=ne.querySelector("#confirmSheet"),Nn=ne.querySelector("#restoreSheet"),Xi=ne.querySelector("#seedInput"),vr=ne.querySelector("#restoreSubmitBtn"),Be=ne.querySelector("#restoreStatus"),ss=ne.querySelector("#recoveryEncInput"),Pn.addEventListener("click",()=>uv()),xa.addEventListener("click",()=>_a()),Aa.addEventListener("click",()=>_a()),ss.addEventListener("change",()=>hv()),Ca.addEventListener("click",()=>gv()),Kn.addEventListener("click",n=>{n.target===Kn&&Qo()}),ne.querySelector("#confirmEraseBtn").addEventListener("click",()=>wv()),ne.querySelector("#confirmCancelBtn").addEventListener("click",()=>Qo()),Nn.addEventListener("click",n=>{n.target===Nn&&Zo()}),vr.addEventListener("click",()=>yv()),ne.querySelector("#restoreCancelBtn").addEventListener("click",()=>Zo()),new MutationObserver(()=>{ne.style.display!=="none"&&(Pn.style.display="flex",mr.style.display="none",ns.style.display="none",Un&&(clearTimeout(Un),Un=void 0))}).observe(ne,{attributes:!0,attributeFilter:["style"]})}const In='<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',bv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',kv={both:"Face ID + Password",either:"Face ID or Password"};function Ev(t){if(t===null)return"Never";const e=Date.now()-t;if(e<6e4)return"Just now";if(e<36e5)return`${Math.floor(e/6e4)}m ago`;if(e<864e5)return`${Math.floor(e/36e5)}h ago`;if(e<2*864e5)return"Yesterday";const n=new Date(t),r=`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]} ${n.getDate()}`;return n.getFullYear()===new Date().getFullYear()?r:`${r}, ${n.getFullYear()}`}function Sv(){const t=document.getElementById("screen-settings");t.innerHTML=`
    <div class="settings-nav">
      <button class="nav-btn" id="settingsBackBtn">
        ${bv}
        Back
      </button>
      <span class="nav-title">Settings</span>
      <span style="width:72px"></span>
    </div>

    <div class="settings-content">

      <div>
        <div class="sec-label">Vault</div>
        <div class="card">
          <div class="card-row" id="settingsSecurityRow" style="cursor:pointer;-webkit-tap-highlight-color:transparent">
            <span class="row-label">Security</span>
            <span class="row-value" id="settingsSecurityValue">Face ID + Password</span>
            ${In}
          </div>
          <div class="card-row" id="settingsDevicesRow" style="cursor:pointer;-webkit-tap-highlight-color:transparent">
            <span class="row-label">Devices</span>
            <span class="row-value" id="settingsDevicesValue">—</span>
            ${In}
          </div>
          <div class="card-row" id="settingsBackupRow" style="cursor:pointer;-webkit-tap-highlight-color:transparent">
            <span class="row-label">Backup &amp; Export</span>
            <span class="row-value" id="settingsBackupValue">—</span>
            ${In}
          </div>
        </div>
      </div>

      <div>
        <div class="sec-label">App</div>
        <div class="card">
          <div class="card-row" id="settingsFeedbackRow" style="cursor:pointer;-webkit-tap-highlight-color:transparent">
            <span class="row-label">Feedback</span>
            ${In}
          </div>
          <div class="card-row" id="settingsPrivacyRow" style="cursor:pointer;-webkit-tap-highlight-color:transparent">
            <span class="row-label">Privacy</span>
            ${In}
          </div>
        </div>
      </div>

    </div>

    <div class="settings-footer">
      <div class="version">v1.0.0</div>
      <button class="btn" id="settingsDeleteVaultBtn" style="color:var(--red)">Delete Vault</button>
    </div>

    <div class="sheet-bg" id="settingsDeleteSheet" style="display:none">
      <div class="sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title">Delete Vault?</div>
        <div class="sheet-sub">All credentials and keys will be permanently erased.</div>
        <button class="btn" id="settingsDeleteConfirmBtn" style="color:var(--text2)">Delete everything</button>
        <button class="btn muted" id="settingsDeleteCancelBtn">Cancel</button>
      </div>
    </div>
  `,document.getElementById("settingsBackBtn").addEventListener("click",()=>J("vault-list")),document.getElementById("settingsSecurityRow").addEventListener("click",()=>J("settings-security")),document.getElementById("settingsDevicesRow").addEventListener("click",()=>J("settings-devices")),document.getElementById("settingsBackupRow").addEventListener("click",()=>J("settings-backup")),document.getElementById("settingsFeedbackRow").addEventListener("click",()=>console.warn("TODO: Feedback action not yet implemented")),document.getElementById("settingsPrivacyRow").addEventListener("click",()=>console.warn("TODO: Privacy action not yet implemented"));const c=document.getElementById("settingsDeleteVaultBtn"),a=document.getElementById("settingsDeleteSheet"),l=document.getElementById("settingsDeleteConfirmBtn"),d=document.getElementById("settingsDeleteCancelBtn");c.addEventListener("click",()=>{a.style.display="flex"}),a.addEventListener("click",w=>{w.target===a&&(a.style.display="none")}),d.addEventListener("click",()=>{a.style.display="none"}),l.addEventListener("click",async()=>{l.setAttribute("disabled",""),l.textContent="Deleting…";try{cd(),await Yi({willReload:!0})}finally{window.location.href="/"}});const u=document.getElementById("settingsSecurityValue"),f=document.getElementById("settingsDevicesValue"),h=document.getElementById("settingsBackupValue");function p(){u.textContent=kv[ei()]||"Unknown",te().then(w=>new hn(w).listActive()).then(w=>{f.textContent=w.length>0?`${w.length} device${w.length===1?"":"s"}`:"—"}).catch(()=>{f.textContent="—"}),rd().then(w=>{h.textContent=Ev(w)}).catch(()=>{h.textContent="—"})}new MutationObserver(()=>{t.style.display!=="none"&&p()}).observe(t,{attributes:!0,attributeFilter:["style"]})}async function xv(t){if(!t.trim())throw new Error("Password required");const e=await te(),s=await new we(e).get();if(!s)throw new Error("No vault found");const r=await gt(t,s.salt,s.kdfParams);await Vi("either",s,null,r)}async function Av(){const t=await navigator.credentials.create({publicKey:{rp:{name:"psw-pwa",id:location.hostname},user:{id:crypto.getRandomValues(new Uint8Array(16)),name:"vault",displayName:"Vault"},challenge:crypto.getRandomValues(new Uint8Array(32)),pubKeyCredParams:[{type:"public-key",alg:-8},{type:"public-key",alg:-7}],authenticatorSelection:{userVerification:"required",residentKey:"required"},extensions:{prf:{eval:{first:Li}}}}});if(!t)throw new Error("Passkey enrollment cancelled");if(!t.getClientExtensionResults().prf?.enabled)throw new Error("This authenticator does not support the PRF extension required by this app");return{credentialId:t.id}}const Cv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Ia='<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',Vt=[2,3,5,10,15],_v=["both","either"],La={both:"Face ID + Password",either:"Face ID or Password"};function xs(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Da(t){const e=Date.now()-t,n=Math.floor(e/6e4);if(n<60)return`${n}m ago`;const s=Math.floor(e/36e5);return s<24?`${s}h ago`:`${Math.floor(e/864e5)}d ago`}function Iv(){const t=document.getElementById("screen-settings-security");t.innerHTML=`
    <div class="settings-nav">
      <button class="nav-btn" id="secBackBtn">
        ${Cv}
        Settings
      </button>
      <span class="nav-title">Security</span>
      <span style="width:80px"></span>
    </div>

    <div class="settings-content">
      <div>
        <div class="sec-label">Unlock method</div>
        <div class="settings-rows">
          <div class="settings-row tap" data-mode="both"><div class="mode-dot" id="m-both"></div><span class="row-label">${La.both}</span><span style="font-size:12px;color:var(--text2)">Recommended</span></div>
          <div class="settings-row tap" data-mode="either"><div class="mode-dot" id="m-either"></div><span class="row-label">${La.either}</span></div>
        </div>
      </div>

      <div>
        <div class="sec-label">Auto-lock</div>
        <div class="settings-row">
          <span class="row-label">Lock after</span>
          <div class="stepper">
            <button class="stepper-btn" id="secDecBtn">−</button>
            <span class="stepper-val" id="secIdleVal">5 min</span>
            <button class="stepper-btn" id="secIncBtn">+</button>
          </div>
        </div>
      </div>

      <div>
        <div class="sec-label">Recovery</div>
        <div class="settings-rows">
          <div class="settings-row tap" id="secShowRecoveryRow"><span class="row-label">Show recovery key</span>${Ia}</div>
          <div class="settings-row tap" id="secPasskeysRow"><span class="row-label">Passkeys</span><span class="row-value" id="secPasskeyCount">1 enrolled</span>${Ia}</div>
        </div>
      </div>

      <div id="secPairedDevicesSection" style="display:none">
        <div class="sec-label">Paired Devices</div>
        <div class="settings-rows" id="secDeviceList"></div>
      </div>
    </div>

    <div class="settings-footer">
      <button class="btn" id="secDeleteVaultBtn" style="color:var(--red)">Delete Vault</button>
    </div>

    <div class="sheet-bg" id="secDeleteSheet" style="display:none">
      <div class="sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title">Delete Vault?</div>
        <div class="sheet-sub">All credentials and keys will be permanently erased.</div>
        <button class="btn" id="secDeleteConfirmBtn" style="color:var(--text2)">Delete everything</button>
        <button class="btn muted" id="secDeleteCancelBtn">Cancel</button>
      </div>
    </div>

    <div class="sheet-bg" id="secRevokeSheet" style="display:none">
      <div class="sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title" id="secRevokeSheetTitle">Remove device?</div>
        <div class="sheet-sub">
          This device will lose access to new entries immediately.
          Previously synced entries remain readable on that device.
        </div>
        <p id="secRevokeErr" style="display:none;font-size:13px;color:var(--red);text-align:center"></p>
        <button class="btn" id="secRevokeConfirmBtn" style="color:var(--red)">Remove device</button>
        <button class="btn muted" id="secRevokeCancelBtn">Cancel</button>
      </div>
    </div>

    <div class="modal-bg" id="secReauthModal" style="display:none">
      <div class="modal" id="secReauthInner">
        <div class="modal-handle"></div>
        <div class="modal-title">Re-authenticate</div>
        <p class="modal-body">Enter your password to continue.</p>
        <div style="background:var(--card);border-radius:var(--r);padding:16px">
          <input id="secReauthPw" type="password" placeholder="Password" style="width:100%;border:none;background:transparent;font-size:16px;color:var(--text);outline:none" autocomplete="current-password"/>
        </div>
        <p id="secReauthErr" style="display:none;font-size:13px;color:var(--text2);text-align:center">Password required</p>
        <button class="modal-btn" id="secReauthSubmit">Confirm</button>
        <button class="modal-btn" id="secReauthCancel" style="color:var(--text2)">Cancel</button>
      </div>
    </div>

    <div class="modal-bg" id="secSeedModal" style="display:none">
      <div class="modal" id="secSeedInner">
        <div class="modal-handle"></div>
        <div class="modal-title">Recovery Key</div>
        <p class="modal-body">Keep this offline. Never share it or store it digitally alongside your vault.</p>
        <div class="modal-seed" id="secSeedGrid"></div>
        <button class="modal-btn" id="secSeedDone">Done</button>
      </div>
    </div>
  `,document.getElementById("secBackBtn").addEventListener("click",()=>Nr());let n=2;const s=()=>ei();function r(){const E=s();for(const N of _v){const P=document.getElementById(`m-${N}`);P&&P.classList.toggle("on",N===E)}}t.querySelectorAll(".settings-row[data-mode]").forEach(E=>{E.addEventListener("click",async()=>{const N=E.dataset.mode;if(N!==s()){ti(N),r();try{const P=await c(),O=new we(P),xe=await O.get();xe&&(xe.unlockMode=N,await O.save(xe))}catch(P){console.error("[settings-security] failed to persist unlock mode:",P)}}})});let i=null;async function c(){return i||(i=await te()),i}const a=document.getElementById("secDecBtn"),l=document.getElementById("secIncBtn"),d=document.getElementById("secIdleVal");function u(){d.textContent=Vt[n]+" min",a.disabled=n===0,l.disabled=n===Vt.length-1}async function f(E){n=E,u();try{const N=await c(),P=new we(N),O=await P.get();if(!O)return;await P.save({...O,autoLockMs:Vt[n]*6e4})}catch{console.warn("[settings-security] Failed to persist autoLockMs")}}a.addEventListener("click",()=>{n>0&&f(n-1)}),l.addEventListener("click",()=>{n<Vt.length-1&&f(n+1)});async function h(){try{const E=await c(),N=await new we(E).get();if(N?.autoLockMs!=null){const P=Vt.findIndex(O=>O*6e4>=N.autoLockMs);n=P===-1?Vt.length-1:P,u()}}catch{}}let p=null;const m=document.getElementById("secPairedDevicesSection"),w=document.getElementById("secDeviceList"),y=document.getElementById("secRevokeSheet"),g=document.getElementById("secRevokeSheetTitle"),v=document.getElementById("secRevokeErr"),S=document.getElementById("secRevokeConfirmBtn"),A=document.getElementById("secRevokeCancelBtn");async function C(){try{const E=await c(),P=await new hn(E).listActive();if(m.style.display=P.length>1?"":"none",P.length<=1)return;w.innerHTML=P.map(O=>{const xe=Da(O.pairedAt),k=O.lastSeenAt?Da(O.lastSeenAt):"never";return`
          <div class="settings-row" data-device-id="${xs(O.deviceId)}">
            <div>
              <span class="row-label">${xs(O.displayName)}</span>
              <span style="font-size:12px;color:var(--text2);display:block">
                Paired ${xe} &middot; Last seen ${k}
              </span>
            </div>
            <button
              style="font-size:13px;color:var(--red);background:none;border:none;cursor:pointer;padding:4px 8px"
              data-remove-device="${xs(O.deviceId)}"
              data-device-name="${xs(O.displayName)}">
              Remove
            </button>
          </div>`}).join(""),w.querySelectorAll("[data-remove-device]").forEach(O=>{O.addEventListener("click",()=>{p=O.dataset.removeDevice??null;const xe=O.dataset.deviceName??"This device";g.textContent=`Remove “${xe}”?`,v.style.display="none",y.style.display="flex"})})}catch(E){console.error("[settings-security] loadDeviceList failed:",E)}}y.addEventListener("click",E=>{E.target===y&&(y.style.display="none")}),A.addEventListener("click",()=>{y.style.display="none"}),S.addEventListener("click",async()=>{if(p){S.disabled=!0,v.style.display="none";try{const E=await c();await new hn(E).revoke(p),await Zd(),y.style.display="none",p=null,await C()}catch(E){v.textContent=E instanceof Error?E.message:"Revoke failed",v.style.display="block"}finally{S.disabled=!1}}});const T=document.getElementById("secShowRecoveryRow"),L=document.getElementById("secReauthModal"),B=document.getElementById("secReauthInner"),$=document.getElementById("secReauthPw"),_=document.getElementById("secReauthErr"),D=document.getElementById("secReauthSubmit"),V=document.getElementById("secReauthCancel"),F=document.getElementById("secSeedModal"),Q=document.getElementById("secSeedInner"),M=document.getElementById("secSeedGrid"),H=document.getElementById("secSeedDone");T.addEventListener("click",()=>{$.value="",_.style.display="none",L.style.display="flex",setTimeout(()=>$.focus(),100)}),L.addEventListener("click",E=>{E.target===L&&(L.style.display="none")}),B.addEventListener("click",E=>E.stopPropagation()),V.addEventListener("click",()=>{L.style.display="none"}),D.addEventListener("click",async()=>{const E=$.value.trim();if(!E){_.textContent="Password required",_.style.display="block";return}D.setAttribute("disabled","true"),_.style.display="none";try{await xv(E),L.style.display="none",await W()}catch{_.textContent="Incorrect password",_.style.display="block",$.select()}finally{D.removeAttribute("disabled")}}),$.addEventListener("keydown",E=>{E.key==="Enter"&&D.click()});async function W(){M.innerHTML="";const E=document.createElement("p");E.className="modal-body",E.style.textAlign="center",E.textContent="Your recovery phrase was shown once when you set up your vault and is not stored. To get a new recovery phrase, delete your vault and create a new one.",M.appendChild(E);const N=Q.querySelector(".modal-title");N&&(N.textContent="Recovery Key Unavailable");const P=Q.querySelector("p.modal-body:not(#secSeedGrid p)");P&&(P.style.display="none"),F.style.display="flex"}F.addEventListener("click",E=>{E.target===F&&(F.style.display="none")}),Q.addEventListener("click",E=>E.stopPropagation()),H.addEventListener("click",()=>{F.style.display="none"}),document.getElementById("secPasskeysRow").addEventListener("click",()=>{(async()=>{const{credentialId:E}=await Av();try{const N=await c(),P=new we(N),O=await P.get();O&&(O.passkeySlots.vault[E]=O.passkeySlots.vault[E]??"",O.passkeySlots.keystore[E]=O.passkeySlots.keystore[E]??"",O.passkeySlots.export[E]=O.passkeySlots.export[E]??"",await P.save(O))}catch(N){console.error("[settings-security] failed to persist passkey enrollment:",N)}})().catch(E=>{console.error("[settings-security] passkey enrollment failed:",E)})});const Je=document.getElementById("secDeleteVaultBtn"),Ue=document.getElementById("secDeleteSheet"),$e=document.getElementById("secDeleteConfirmBtn"),kn=document.getElementById("secDeleteCancelBtn");Je.addEventListener("click",()=>{Ue.style.display="flex"}),Ue.addEventListener("click",E=>{E.target===Ue&&(Ue.style.display="none")}),kn.addEventListener("click",()=>{Ue.style.display="none"}),$e.addEventListener("click",()=>{Ue.style.display="none",Yi().finally(()=>location.reload())}),new MutationObserver(()=>{t.style.display!=="none"&&(r(),h(),u(),C())}).observe(t,{attributes:!0,attributeFilter:["style"]})}function Ba(t){const e=document.querySelector('[data-testid="boot-phase"]');e&&e.setAttribute("content",t)}function Lv(){const t=document.createElement("div");return t.id="sri-failure-sheet",t.setAttribute("data-testid","sri-failure-sheet"),t.style.cssText=["position:fixed","inset:0","background:rgba(0,0,0,0.3)","display:none","align-items:flex-end","justify-content:center","z-index:9999"].join(";"),t.innerHTML=`
    <div style="
      background:#fff;
      border-radius:24px 24px 0 0;
      padding:20px 24px calc(env(safe-area-inset-bottom,34px) + 24px);
      width:100%;
      max-width:430px;
      display:flex;
      flex-direction:column;
      gap:14px;
    ">
      <div style="width:36px;height:4px;background:#F2F2F2;border-radius:2px;margin:0 auto -4px"></div>
      <div style="font-size:20px;font-weight:400;text-align:center">Integrity check failed</div>
      <div style="font-size:14px;color:#8E8E93;text-align:center;line-height:1.5">
        A security check failed. Try a hard refresh
        (&#8984;&#8679;R&nbsp;/&nbsp;Ctrl+Shift+R) or reinstall the app.
      </div>
      <button
        id="sri-reload-btn"
        data-testid="sri-reload-btn"
        style="
          width:100%;padding:14px;
          background:#F2F2F2;border:none;
          border-radius:16px;
          font-size:16px;color:#000;
          cursor:pointer;
        "
      >Reload</button>
    </div>
  `,document.body.appendChild(t),t}const Dv=Lv();function Ra(){Dv.style.display="flex",document.body.style.overflow="hidden"}document.getElementById("sri-reload-btn").addEventListener("click",()=>{location.reload()});const Ji=document.getElementById("screen-onboarding"),du=document.getElementById("lock-screen"),uu=document.getElementById("vault-content"),Zi=document.getElementById("screen-error"),fu=document.getElementById("screen-vault-detail"),hu=document.getElementById("screen-settings"),pu=document.getElementById("screen-settings-security"),Qi=document.getElementById("screen-settings-devices"),ec=document.getElementById("screen-settings-backup"),tc=document.getElementById("screen-storage-recovery");Ji.dataset.display="block";du.dataset.display="contents";uu.dataset.display="contents";Zi.dataset.display="flex";fu.dataset.display="flex";hu.dataset.display="flex";pu.dataset.display="flex";Qi.dataset.display="flex";ec.dataset.display="flex";tc.dataset.display="flex";Xe("onboarding",Ji);Xe("lock-screen",du);Xe("vault-list",uu);Xe("vault-detail",fu);Xe("error",Zi);Xe("settings",hu);Xe("settings-security",pu);Xe("settings-devices",Qi);Xe("settings-backup",ec);Xe("storage-recovery",tc);gg(Ji);Dw();Kw(Zi);qw();Xw();Rm(Qi);av(ec);vv(tc);Sv();Iv();Iy();async function Bv(){let t;try{t=await te(),Ba("db-ready")}catch(c){document.body.innerHTML=`
      <div data-testid="boot-error" style="padding:2rem;font-family:sans-serif">
        <h1>Startup failed</h1>
        <p>Database could not be opened. Please hard-refresh or reinstall the app.</p>
        <pre>${String(c)}</pre>
      </div>
    `;return}await hy();const e=new Pd(t);jw(e,async()=>t.transaction("vault","readonly").store.getAll()),zw(e);const s=new hn(t);Em(s,t),Vm(e);const o=await new we(t).get();o&&(o.wrappedDekVault_password||o.wrappedDekVault_recovery||Object.keys(o.passkeySlots?.vault??{}).length>0)?(o!=null&&o.unlockMode!=null&&ti(o.unlockMode),J("lock-screen"),window.dispatchEvent(new Event("unlock-mode-restored"))):J("onboarding"),_y(),Ly(),Ba("ready"),"serviceWorker"in navigator&&(navigator.serviceWorker.addEventListener("message",c=>{c.data?.type==="SRI_FAILURE"&&Ra()}),navigator.serviceWorker.register("/sw.js").catch(c=>{console.error("[sw] Registration failed:",c),Ra()}))}Bv();
