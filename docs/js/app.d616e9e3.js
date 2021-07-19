(()=>{"use strict";var e={6367:(e,t,r)=>{r(7280),r(5363),r(71);var n=r(8880),o=r(9592),s=r(3673);function a(e,t,r,n,o,a){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}var i=r(7874);const u=(0,s.aZ)({name:"App",mounted(){const e=(0,i.oR)();e.dispatch("retrieveCards"),e.dispatch("handleAuthStateChanged")}});u.render=a;const c=u;var l=r(6852),d=r(7083),f=r(9582);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(194)]).then(r.bind(r,9194)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(803)]).then(r.bind(r,1803))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],p=h,m=(0,d.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("")});return t}));async function g(e,t){const n="function"===typeof l.default?await(0,l.default)({}):l.default,{storeKey:s}=await Promise.resolve().then(r.bind(r,6852)),a="function"===typeof m?await m({store:n}):m;n.$router=a;const i=e(c);return i.use(o.Z,t),{app:i,store:n,storeKey:s,router:a}}var b=r(7760),v=r(6249),y=r(6417);const w={config:{},iconSet:b.Z,plugins:{Loading:v.Z,Notify:y.Z}},C="";async function A({app:e,router:t,store:r,storeKey:n},o){let s=!1;const a=e=>{s=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===s&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:a,urlPath:i,publicPath:C})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==s&&(e.use(t),e.use(r,n),e.mount("#q-app"))}g(n.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,2490))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));A(e,r)}))))},2490:(e,t,r)=>{r.r(t),r.d(t,{firebaseAuth:()=>a,firebaseDb:()=>i});var n=r(5720);r(8849),r(4479),r(7758);const o={apiKey:"AIzaSyDXlfHiMaX5BmCmfnHwS9E14_ohGvFmO3Q",authDomain:"crossroads-f170f.firebaseapp.com",databaseURL:"https://crossroads-f170f-default-rtdb.firebaseio.com",projectId:"crossroads-f170f",storageBucket:"crossroads-f170f.appspot.com",messagingSenderId:"818271246635",appId:"1:818271246635:web:b7e4b9f4e0d86b6977cd6e",measurementId:"G-KEFZLL5RPG"};let s=n.Z.initializeApp(o),a=s.auth(),i=s.database()},6852:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n={};r.r(n),r.d(n,{getCards:()=>c,getCounter:()=>f,getCurrentUser:()=>h,getFilter:()=>l,getFilteredCards:()=>d,isUserLoggedIn:()=>p});var o={};r.r(o),r.d(o,{setCards:()=>m,setCounter:()=>g,setCurrentUser:()=>b,setFilter:()=>v});var s={};r.r(s),r.d(s,{filterAddAll:()=>j,handleAuthStateChanged:()=>E,retrieveCards:()=>S,showNextCard:()=>F,showPrevCard:()=>U,shuffleCrossroads:()=>x,toggleFilter:()=>I,userLogin:()=>L,userLogout:()=>Z,userRegister:()=>T});var a=r(7083),i=r(7874);function u(){return{cards:{},counter:0,currentUser:{},filter:[]}}r(71);function c(e){return e.cards}function l(e){return e.filter}function d(e){let t=e.cards,r=e.filter,n=[];for(const o of r)n.push(t[o]);return n}function f(e){return e.counter}function h(e){return e.currentUser}function p(e){return!!e.currentUser.userId}function m(e,t){e.cards=t}function g(e,t){e.counter=t}function b(e,t){e.currentUser=t}function v(e,t){e.filter=t}var y=r(515),w=r.n(y),C=r(2490),A=r(6249),O=r(6417),k=r(8719);function P(e){let t,r=e.length;while(0!==r)t=Math.floor(Math.random()*r),r--,[e[r],e[t]]=[e[t],e[r]];return e}function j({getters:e,commit:t}){const r=e.getCards;t("setFilter",Object.keys(r))}function E({commit:e,dispatch:t}){C.firebaseAuth.onAuthStateChanged((t=>{if(t){const t=C.firebaseAuth.currentUser.uid;C.firebaseDb.ref("users/"+t).once("value",(r=>{let n=r.val();e("setCurrentUser",w()(w()({},n),{},{userId:t})),e("setFilter",n.filter)}))}else e("setCurrentUser",{})}))}async function S({commit:e,dispatch:t}){A.Z.show({spinner:k.Z}),await C.firebaseDb.ref("cards").once("value",(r=>{let n=r.val();e("setCards",n),t("filterAddAll"),t("shuffleCrossroads")})),A.Z.hide()}function F({getters:e,commit:t}){const r=e.getFilter.length-1,n=e.getCounter;n<r&&t("setCounter",n+1)}function U({getters:e,commit:t}){const r=e.getCounter;r>0&&t("setCounter",r-1)}function x({getters:e,commit:t}){const r=P([...e.getFilter]);t("setFilter",r),t("setCounter",0)}function I({getters:e,commit:t},{value:r,key:n}){let o=[...e.getFilter];const s=o.indexOf(n);r&&-1===s?o.push(n):r||-1===s||o.splice(s,1),t("setFilter",o);const a=e.getCurrentUser.userId;a&&C.firebaseDb.ref("users/"+a).update({filter:o})}function L({},e){C.firebaseAuth.signInWithEmailAndPassword(e.email,e.password).then((e=>{console.log(e)})).catch((e=>{let t={type:"negative"};switch(e.code){case"auth/user-not-found":t.message="Unregistered email";break;case"auth/wrong-password":t.message="Incorrect password";break;default:t.message=e.message}O.Z.create(t)}))}function Z({},e){C.firebaseAuth.signOut()}function T({getters:e},t){C.firebaseAuth.createUserWithEmailAndPassword(t.email,t.password).then((r=>{console.log(r);const n=C.firebaseAuth.currentUser.uid;C.firebaseDb.ref("users/"+n).set({email:t.email,username:t.username,filter:Object.keys(e.getCards)})})).catch((e=>{console.error(e.message);let t={type:"negative",message:e.message};O.Z.create(t)}))}const D=(0,a.h)((function(){const e=(0,i.MT)({modules:{},state:u(),getters:n,mutations:o,actions:s,strict:!1});return e}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,s)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,s]=e[c],i=!0,u=0;u<n.length;u++)(!1&s||a>=s)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(i=!1,s<a&&(a=s));i&&(e.splice(c--,1),t=o())}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,o,s]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{193:"48065d0f",194:"182f79da",803:"0d20ebc5"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{194:"f1a26ac1",736:"0ab00590",803:"bfa45efa"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="crossroads:";r.l=(n,o,s,a)=>{if(e[n])e[n].push(o);else{var i,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[o];var f=(t,r)=>{i.onerror=i.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=s=>{if(o.onerror=o.onload=null,"load"===s.type)r();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,o.parentNode.removeChild(o),n(u)}};return o.onerror=o.onload=s,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],s=o.getAttribute("data-href");if(s===e||s===t)return o}},n=n=>new Promise(((o,s)=>{var a=r.miniCssF(n),i=r.p+a;if(t(a,i))return o();e(n,i,o,s)})),o={143:0};r.f.miniCss=(e,t)=>{var r={194:1,803:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=s);var a=r.p+r.u(t),i=new Error,u=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,o[1](i)}};r.l(a,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,[a,i,u]=n,c=0;for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(u)var l=u(r);for(t&&t(n);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[a[c]]=0;return r.O(l)},n=self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(6367)));n=r.O(n)})();