(()=>{var e,t,r,n,a,o={5115:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(8081),a=r.n(n),o=r(3645),s=r.n(o)()(a());s.push([e.id,".dK5uF7R_g49DuwKpJBus{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}",""]),s.locals={app:"dK5uF7R_g49DuwKpJBus"};const i=s},8753:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(8081),a=r.n(n),o=r(3645),s=r.n(o)()(a());s.push([e.id,"*{margin:0;padding:0}html,body{height:100%;width:100%}a{text-decoration:none;background-color:rgba(0,0,0,0)}img{display:block;border-style:none}dl,dt,dd,ol,ul,li{list-style:none}",""]);const i=s},4087:(e,t,r)=>{"use strict";r(1539),r(8674);var n=r(1721);n.ZP.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),n.ZP.interceptors.response.use((function(e){var t=e.data,r=t.err;if(void 0===r)return t;switch(r){case 0:return t.params;case 8888:break;default:return t.message,Promise.reject(t)}}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录";break;case 403:e.message="拒绝访问";break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持"}return e.message,Promise.reject(e)}));var a=r(3379),o=r.n(a),s=r(7795),i=r.n(s),u=r(569),l=r.n(u),c=r(3565),d=r.n(c),f=r(9216),p=r.n(f),m=r(4589),g=r.n(m),v=r(8753),b={};b.styleTagTransform=g(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p();o()(v.Z,b);v.Z&&v.Z.locals&&v.Z.locals;var h=r(7294),y=(r(6992),r(8783),r(3948),function(e){var t=e.path,n=(0,h.lazy)((function(){return r(1455)("./pages".concat(t))}));return h.createElement(h.Suspense,{fallback:h.createElement("div",null,"loading...")},h.createElement(n,null))});const O=y;$RefreshReg$(y,"LazyWrapper");const k=[{path:"/",element:h.createElement(O,{path:"/RouterOne"})},{path:"/home",element:h.createElement(O,{path:"/RouterTwo"})},{path:"*",element:h.createElement("h1",null,"R U kidding me? What's this undefined urlPath")}];var w=r(9250),j=r(5115),P={};P.styleTagTransform=g(),P.setAttributes=d(),P.insert=l().bind(null,"head"),P.domAPI=i(),P.insertStyleElement=p();o()(j.Z,P);const E=j.Z&&j.Z.locals?j.Z.locals:void 0;var T=$RefreshSig$();function R(){T();var e=(0,w.V$)(k);return h.createElement("div",{className:E.app},e)}T(R,"aOVR8TVZgmYHBv4Z+JelzU/efHM=",!1,(function(){return[w.V$]}));const _=R;$RefreshReg$(R,"App");var x=r(427),Z=r(3756);const S=(0,x.xC)({reducer:{counter:Z.ZP}});var A=r(5998),C=r(745),M=r(9655),$=document.getElementById("root");$&&(0,C.s)($).render(h.createElement(A.zt,{store:S},h.createElement(M.VK,null,h.createElement(_,null))))},3756:(e,t,r)=>{"use strict";r.d(t,{Mj:()=>s,ZP:()=>i,nP:()=>o});var n=(0,r(427).oM)({name:"counter",initialState:{value:0,title:"redux toolkit pre"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1}}}),a=n.actions,o=a.increment,s=a.decrement;const i=n.reducer},1455:(e,t,r)=>{var n={"./pages/RouterOne":[113,27,113],"./pages/RouterOne/":[113,27,113],"./pages/RouterOne/index":[113,27,113],"./pages/RouterOne/index.tsx":[113,27,113],"./pages/RouterTwo":[4801,801],"./pages/RouterTwo/":[4801,801],"./pages/RouterTwo/index":[4801,801],"./pages/RouterTwo/index.module.sass":[1764,764],"./pages/RouterTwo/index.tsx":[4801,801]};function a(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(a)))}a.keys=()=>Object.keys(n),a.id=1455,e.exports=a}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,exports:{}};return o[e](r,r.exports,i),r.exports}i.m=o,e=[],i.O=(t,r,n,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],s=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](r[u])))?r.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var o={};t=t||[null,r({}),r([]),r(r)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,i.d(a,o),a},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"static/js/"+e+"."+{27:"b2cc8be6",113:"6b810a8f",764:"67994d7c",801:"252add59"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},a="default_react_porgram:",i.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var s,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+r){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",a+r),s.src=e),n[e]=[t];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var a=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{var e={179:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=i.p+i.u(t),s=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,s,u]=r,l=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(u)var c=u(i)}for(t&&t(r);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},r=self.webpackChunkdefault_react_porgram=self.webpackChunkdefault_react_porgram||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var u=i.O(void 0,[216],(()=>i(4087)));u=i.O(u)})();