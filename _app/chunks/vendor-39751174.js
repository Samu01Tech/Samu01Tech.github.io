function k(){}function $(t,e){for(const n in e)t[n]=e[n];return t}function oe(t){return t()}function ce(){return Object.create(null)}function D(t){t.forEach(oe)}function Pe(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let F;function pt(t,e){return F||(F=document.createElement("a")),F.href=e,t===F.href}function Re(t){return Object.keys(t).length===0}function he(t,e,n,i){if(t){const l=_e(t,e,n,i);return t[0](l)}}function _e(t,e,n,i){return t[1]&&i?$(n.ctx.slice(),t[1](i(e))):n.ctx}function de(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const u=[],f=Math.max(e.dirty.length,l.length);for(let a=0;a<f;a+=1)u[a]=e.dirty[a]|l[a];return u}return e.dirty|l}return e.dirty}function me(t,e,n,i,l,u){if(l){const f=_e(e,n,i,u);t.p(f,l)}}function ge(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let G=!1;function We(){G=!0}function Fe(){G=!1}function Ge(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function Je(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<e.length;s++){const d=e[s];d.claim_order!==void 0&&r.push(d)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let r=0;r<e.length;r++){const s=e[r].claim_order,d=(l>0&&e[n[l]].claim_order<=s?l+1:Ge(1,l,y=>e[n[y]].claim_order,s))-1;i[r]=n[d]+1;const m=d+1;n[m]=r,l=Math.max(m,l)}const u=[],f=[];let a=e.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);a>=r;a--)f.push(e[a]);a--}for(;a>=0;a--)f.push(e[a]);u.reverse(),f.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<f.length;r++){for(;s<u.length&&f[r].claim_order>=u[s].claim_order;)s++;const d=s<u.length?u[s]:null;t.insertBefore(f[r],d)}}function Ke(t,e){if(G){for(Je(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function N(t,e,n){G&&!n?Ke(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function be(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Qe(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ee(t){return document.createTextNode(t)}function pe(){return ee(" ")}function E(){return ee("")}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function J(t,e){for(const n in e)g(t,n,e[n])}function T(t){return Array.from(t.childNodes)}function Ue(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ye(t,e,n,i,l=!1){Ue(t);const u=(()=>{for(let f=t.claim_info.last_index;f<t.length;f++){const a=t[f];if(e(a)){const r=n(a);return r===void 0?t.splice(f,1):t[f]=r,l||(t.claim_info.last_index=f),a}}for(let f=t.claim_info.last_index-1;f>=0;f--){const a=t[f];if(e(a)){const r=n(a);return r===void 0?t.splice(f,1):t[f]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=f,a}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function we(t,e,n,i){return ye(t,l=>l.nodeName===e,l=>{const u=[];for(let f=0;f<l.attributes.length;f++){const a=l.attributes[f];n[a.name]||u.push(a.name)}u.forEach(f=>l.removeAttribute(f))},()=>i(e))}function yt(t,e,n){return we(t,e,n,Qe)}function K(t,e,n){return we(t,e,n,I)}function Ve(t,e){return ye(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>ee(e),!0)}function ve(t){return Ve(t," ")}function wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let Q;function U(t){Q=t}function te(){if(!Q)throw new Error("Function called outside component initialization");return Q}function kt(t){te().$$.on_mount.push(t)}function qt(t){te().$$.after_update.push(t)}function Nt(t,e){te().$$.context.set(t,e)}const H=[],ne=[],V=[],le=[],Xe=Promise.resolve();let ie=!1;function Ye(){ie||(ie=!0,Xe.then(ke))}function fe(t){V.push(t)}function Ze(t){le.push(t)}let re=!1;const ue=new Set;function ke(){if(!re){re=!0;do{for(let t=0;t<H.length;t+=1){const e=H[t];U(e),xe(e.$$)}for(U(null),H.length=0;ne.length;)ne.pop()();for(let t=0;t<V.length;t+=1){const e=V[t];ue.has(e)||(ue.add(e),e())}V.length=0}while(H.length);for(;le.length;)le.pop()();ie=!1,re=!1,ue.clear()}}function xe(t){if(t.fragment!==null){t.update(),D(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}const X=new Set;let z;function A(){z={r:0,c:[],p:z}}function B(){z.r||D(z.c),z=z.p}function h(t,e){t&&t.i&&(X.delete(t),t.i(e))}function b(t,e,n,i){if(t&&t.o){if(X.has(t))return;X.add(t),z.c.push(()=>{X.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function qe(t,e){const n={},i={},l={$$scope:1};let u=t.length;for(;u--;){const f=t[u],a=e[u];if(a){for(const r in f)r in a||(i[r]=1);for(const r in a)l[r]||(n[r]=a[r],l[r]=1);t[u]=a}else for(const r in f)l[r]=1}for(const f in i)f in n||(n[f]=void 0);return n}function St(t){return typeof t=="object"&&t!==null?t:{}}function $e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Y(t){t&&t.c()}function Z(t,e){t&&t.l(e)}function L(t,e,n,i){const{fragment:l,on_mount:u,on_destroy:f,after_update:a}=t.$$;l&&l.m(e,n),i||fe(()=>{const r=u.map(oe).filter(Pe);f?f.push(...r):D(r),t.$$.on_mount=[]}),a.forEach(fe)}function O(t,e){const n=t.$$;n.fragment!==null&&(D(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(H.push(t),Ye(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,i,l,u,f,a=[-1]){const r=Q;U(t);const s=t.$$={fragment:null,ctx:null,props:u,update:k,not_equal:l,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:ce(),dirty:a,skip_bound:!1,root:e.target||r.$$.root};f&&f(s.root);let d=!1;if(s.ctx=n?n(t,e.props||{},(m,y,..._)=>{const w=_.length?_[0]:y;return s.ctx&&l(s.ctx[m],s.ctx[m]=w)&&(!s.skip_bound&&s.bound[m]&&s.bound[m](w),d&&et(t,m)),y}):[],s.update(),d=!0,D(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){We();const m=T(e.target);s.fragment&&s.fragment.l(m),m.forEach(p)}else s.fragment&&s.fragment.c();e.intro&&h(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),Fe(),ke()}U(r)}class R{$destroy(){O(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const C=[];function Et(t,e=k){let n;const i=new Set;function l(a){if(j(t,a)&&(t=a,n)){const r=!C.length;for(const s of i)s[1](),C.push(s,t);if(r){for(let s=0;s<C.length;s+=2)C[s][0](C[s+1]);C.length=0}}}function u(a){l(a(t))}function f(a,r=k){const s=[a,r];return i.add(s),i.size===1&&(n=e(l)||k),a(t),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:l,update:u,subscribe:f}}function tt(t){let e,n,i=[{id:n="path-"+t[0]},t[1]],l={};for(let u=0;u<i.length;u+=1)l=$(l,i[u]);return{c(){e=I("path"),this.h()},l(u){e=K(u,"path",{id:!0}),T(e).forEach(p),this.h()},h(){J(e,l)},m(u,f){N(u,e,f)},p(u,[f]){J(e,l=qe(i,[f&1&&n!==(n="path-"+u[0])&&{id:n},f&2&&u[1]]))},i:k,o:k,d(u){u&&p(e)}}}function nt(t,e,n){let{id:i}=e,{data:l={}}=e;return t.$$set=u=>{"id"in u&&n(0,i=u.id),"data"in u&&n(1,l=u.data)},[i,l]}class lt extends R{constructor(e){super();P(this,e,nt,tt,j,{id:0,data:1})}}function it(t){let e,n,i=[{id:n="polygon-"+t[0]},t[1]],l={};for(let u=0;u<i.length;u+=1)l=$(l,i[u]);return{c(){e=I("polygon"),this.h()},l(u){e=K(u,"polygon",{id:!0}),T(e).forEach(p),this.h()},h(){J(e,l)},m(u,f){N(u,e,f)},p(u,[f]){J(e,l=qe(i,[f&1&&n!==(n="polygon-"+u[0])&&{id:n},f&2&&u[1]]))},i:k,o:k,d(u){u&&p(e)}}}function ft(t,e,n){let{id:i}=e,{data:l={}}=e;return t.$$set=u=>{"id"in u&&n(0,i=u.id),"data"in u&&n(1,l=u.data)},[i,l]}class rt extends R{constructor(e){super();P(this,e,ft,it,j,{id:0,data:1})}}function ut(t){let e;return{c(){e=I("g")},l(n){e=K(n,"g",{});var i=T(e);i.forEach(p)},m(n,i){N(n,e,i),e.innerHTML=t[0]},p(n,[i]){i&1&&(e.innerHTML=n[0])},i:k,o:k,d(n){n&&p(e)}}}function at(t,e,n){let i=870711;function l(){return i+=1,`fa-${i.toString(16)}`}let u,{data:f}=e;function a(r){if(!r||!r.raw)return null;let s=r.raw;const d={};return s=s.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(m,y)=>{const _=l();return d[y]=_,` id="${_}"`}),s=s.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(m,y,_,w)=>{const q=y||w;return!q||!d[q]?m:`#${d[q]}`}),s}return t.$$set=r=>{"data"in r&&n(1,f=r.data)},t.$$.update=()=>{t.$$.dirty&2&&n(0,u=a(f))},[u,f]}class st extends R{constructor(e){super();P(this,e,at,ut,j,{data:1})}}function ot(t){let e,n,i,l;const u=t[13].default,f=he(u,t,t[12],null);return{c(){e=I("svg"),f&&f.c(),this.h()},l(a){e=K(a,"svg",{version:!0,class:!0,x:!0,y:!0,width:!0,height:!0,"aria-label":!0,role:!0,viewBox:!0,style:!0});var r=T(e);f&&f.l(r),r.forEach(p),this.h()},h(){g(e,"version","1.1"),g(e,"class",n="fa-icon "+t[0]+" svelte-1dof0an"),g(e,"x",t[8]),g(e,"y",t[9]),g(e,"width",t[1]),g(e,"height",t[2]),g(e,"aria-label",t[11]),g(e,"role",i=t[11]?"img":"presentation"),g(e,"viewBox",t[3]),g(e,"style",t[10]),S(e,"fa-spin",t[4]),S(e,"fa-pulse",t[6]),S(e,"fa-inverse",t[5]),S(e,"fa-flip-horizontal",t[7]==="horizontal"),S(e,"fa-flip-vertical",t[7]==="vertical")},m(a,r){N(a,e,r),f&&f.m(e,null),l=!0},p(a,[r]){f&&f.p&&(!l||r&4096)&&me(f,u,a,a[12],l?de(u,a[12],r,null):ge(a[12]),null),(!l||r&1&&n!==(n="fa-icon "+a[0]+" svelte-1dof0an"))&&g(e,"class",n),(!l||r&256)&&g(e,"x",a[8]),(!l||r&512)&&g(e,"y",a[9]),(!l||r&2)&&g(e,"width",a[1]),(!l||r&4)&&g(e,"height",a[2]),(!l||r&2048)&&g(e,"aria-label",a[11]),(!l||r&2048&&i!==(i=a[11]?"img":"presentation"))&&g(e,"role",i),(!l||r&8)&&g(e,"viewBox",a[3]),(!l||r&1024)&&g(e,"style",a[10]),r&17&&S(e,"fa-spin",a[4]),r&65&&S(e,"fa-pulse",a[6]),r&33&&S(e,"fa-inverse",a[5]),r&129&&S(e,"fa-flip-horizontal",a[7]==="horizontal"),r&129&&S(e,"fa-flip-vertical",a[7]==="vertical")},i(a){l||(h(f,a),l=!0)},o(a){b(f,a),l=!1},d(a){a&&p(e),f&&f.d(a)}}}function ct(t,e,n){let{$$slots:i={},$$scope:l}=e,{class:u}=e,{width:f}=e,{height:a}=e,{box:r}=e,{spin:s=!1}=e,{inverse:d=!1}=e,{pulse:m=!1}=e,{flip:y=null}=e,{x:_=void 0}=e,{y:w=void 0}=e,{style:q=void 0}=e,{label:M=void 0}=e;return t.$$set=c=>{"class"in c&&n(0,u=c.class),"width"in c&&n(1,f=c.width),"height"in c&&n(2,a=c.height),"box"in c&&n(3,r=c.box),"spin"in c&&n(4,s=c.spin),"inverse"in c&&n(5,d=c.inverse),"pulse"in c&&n(6,m=c.pulse),"flip"in c&&n(7,y=c.flip),"x"in c&&n(8,_=c.x),"y"in c&&n(9,w=c.y),"style"in c&&n(10,q=c.style),"label"in c&&n(11,M=c.label),"$$scope"in c&&n(12,l=c.$$scope)},[u,f,a,r,s,d,m,y,_,w,q,M,l,i]}class ht extends R{constructor(e){super();P(this,e,ct,ot,j,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function Ne(t,e,n){const i=t.slice();return i[24]=e[n],i[26]=n,i}function Se(t,e,n){const i=t.slice();return i[27]=e[n],i[26]=n,i}function Ee(t){let e,n,i,l,u=t[6].paths&&ze(t),f=t[6].polygons&&je(t),a=t[6].raw&&Be(t);return{c(){u&&u.c(),e=pe(),f&&f.c(),n=pe(),a&&a.c(),i=E()},l(r){u&&u.l(r),e=ve(r),f&&f.l(r),n=ve(r),a&&a.l(r),i=E()},m(r,s){u&&u.m(r,s),N(r,e,s),f&&f.m(r,s),N(r,n,s),a&&a.m(r,s),N(r,i,s),l=!0},p(r,s){r[6].paths?u?(u.p(r,s),s&64&&h(u,1)):(u=ze(r),u.c(),h(u,1),u.m(e.parentNode,e)):u&&(A(),b(u,1,1,()=>{u=null}),B()),r[6].polygons?f?(f.p(r,s),s&64&&h(f,1)):(f=je(r),f.c(),h(f,1),f.m(n.parentNode,n)):f&&(A(),b(f,1,1,()=>{f=null}),B()),r[6].raw?a?(a.p(r,s),s&64&&h(a,1)):(a=Be(r),a.c(),h(a,1),a.m(i.parentNode,i)):a&&(A(),b(a,1,1,()=>{a=null}),B())},i(r){l||(h(u),h(f),h(a),l=!0)},o(r){b(u),b(f),b(a),l=!1},d(r){u&&u.d(r),r&&p(e),f&&f.d(r),r&&p(n),a&&a.d(r),r&&p(i)}}}function ze(t){let e,n,i=t[6].paths,l=[];for(let f=0;f<i.length;f+=1)l[f]=Me(Se(t,i,f));const u=f=>b(l[f],1,1,()=>{l[f]=null});return{c(){for(let f=0;f<l.length;f+=1)l[f].c();e=E()},l(f){for(let a=0;a<l.length;a+=1)l[a].l(f);e=E()},m(f,a){for(let r=0;r<l.length;r+=1)l[r].m(f,a);N(f,e,a),n=!0},p(f,a){if(a&64){i=f[6].paths;let r;for(r=0;r<i.length;r+=1){const s=Se(f,i,r);l[r]?(l[r].p(s,a),h(l[r],1)):(l[r]=Me(s),l[r].c(),h(l[r],1),l[r].m(e.parentNode,e))}for(A(),r=i.length;r<l.length;r+=1)u(r);B()}},i(f){if(!n){for(let a=0;a<i.length;a+=1)h(l[a]);n=!0}},o(f){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)b(l[a]);n=!1},d(f){be(l,f),f&&p(e)}}}function Me(t){let e,n;return e=new lt({props:{id:t[26],data:t[27]}}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,l){L(e,i,l),n=!0},p(i,l){const u={};l&64&&(u.data=i[27]),e.$set(u)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}function je(t){let e,n,i=t[6].polygons,l=[];for(let f=0;f<i.length;f+=1)l[f]=Ae(Ne(t,i,f));const u=f=>b(l[f],1,1,()=>{l[f]=null});return{c(){for(let f=0;f<l.length;f+=1)l[f].c();e=E()},l(f){for(let a=0;a<l.length;a+=1)l[a].l(f);e=E()},m(f,a){for(let r=0;r<l.length;r+=1)l[r].m(f,a);N(f,e,a),n=!0},p(f,a){if(a&64){i=f[6].polygons;let r;for(r=0;r<i.length;r+=1){const s=Ne(f,i,r);l[r]?(l[r].p(s,a),h(l[r],1)):(l[r]=Ae(s),l[r].c(),h(l[r],1),l[r].m(e.parentNode,e))}for(A(),r=i.length;r<l.length;r+=1)u(r);B()}},i(f){if(!n){for(let a=0;a<i.length;a+=1)h(l[a]);n=!0}},o(f){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)b(l[a]);n=!1},d(f){be(l,f),f&&p(e)}}}function Ae(t){let e,n;return e=new rt({props:{id:t[26],data:t[24]}}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,l){L(e,i,l),n=!0},p(i,l){const u={};l&64&&(u.data=i[24]),e.$set(u)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}function Be(t){let e,n,i;function l(f){t[15](f)}let u={};return t[6]!==void 0&&(u.data=t[6]),e=new st({props:u}),ne.push(()=>$e(e,"data",l)),{c(){Y(e.$$.fragment)},l(f){Z(e.$$.fragment,f)},m(f,a){L(e,f,a),i=!0},p(f,a){const r={};!n&&a&64&&(n=!0,r.data=f[6],Ze(()=>n=!1)),e.$set(r)},i(f){i||(h(e.$$.fragment,f),i=!0)},o(f){b(e.$$.fragment,f),i=!1},d(f){O(e,f)}}}function _t(t){let e,n,i=t[6]&&Ee(t);return{c(){i&&i.c(),e=E()},l(l){i&&i.l(l),e=E()},m(l,u){i&&i.m(l,u),N(l,e,u),n=!0},p(l,u){l[6]?i?(i.p(l,u),u&64&&h(i,1)):(i=Ee(l),i.c(),h(i,1),i.m(e.parentNode,e)):i&&(A(),b(i,1,1,()=>{i=null}),B())},i(l){n||(h(i),n=!0)},o(l){b(i),n=!1},d(l){i&&i.d(l),l&&p(e)}}}function dt(t){let e;const n=t[14].default,i=he(n,t,t[16],null),l=i||_t(t);return{c(){l&&l.c()},l(u){l&&l.l(u)},m(u,f){l&&l.m(u,f),e=!0},p(u,f){i?i.p&&(!e||f&65536)&&me(i,n,u,u[16],e?de(n,u[16],f,null):ge(u[16]),null):l&&l.p&&(!e||f&64)&&l.p(u,e?f:-1)},i(u){e||(h(l,u),e=!0)},o(u){b(l,u),e=!1},d(u){l&&l.d(u)}}}function mt(t){let e,n;return e=new ht({props:{label:t[5],width:t[7],height:t[8],box:t[10],style:t[9],spin:t[1],flip:t[4],inverse:t[2],pulse:t[3],class:t[0],$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,l){L(e,i,l),n=!0},p(i,[l]){const u={};l&32&&(u.label=i[5]),l&128&&(u.width=i[7]),l&256&&(u.height=i[8]),l&1024&&(u.box=i[10]),l&512&&(u.style=i[9]),l&2&&(u.spin=i[1]),l&16&&(u.flip=i[4]),l&4&&(u.inverse=i[2]),l&8&&(u.pulse=i[3]),l&1&&(u.class=i[0]),l&65600&&(u.$$scope={dirty:l,ctx:i}),e.$set(u)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}let Ce=1;function gt(t){if("iconName"in t&&"icon"in t){let e={},n=t.icon,i=t.iconName,l=n[0],u=n[1],f=n[4],a={width:l,height:u,paths:[{d:f}]};return e[i]=a,e}return t}function bt(t,e,n){let{$$slots:i={},$$scope:l}=e,{class:u=""}=e,{data:f}=e,{scale:a=1}=e,{spin:r=!1}=e,{inverse:s=!1}=e,{pulse:d=!1}=e,{flip:m=null}=e,{label:y=null}=e,_=null,{style:w=null}=e,q,M,c,ae;function De(){if(typeof f=="undefined")return;const o=gt(f),[W]=Object.keys(o),v=o[W];v.paths||(v.paths=[]),v.d&&v.paths.push({d:v.d}),v.polygons||(v.polygons=[]),v.points&&v.polygons.push({points:v.points}),n(6,_=v)}function x(){let o=1;return typeof a!="undefined"&&(o=Number(a)),isNaN(o)||o<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),Ce):o*Ce}function Ie(){return _?`0 0 ${_.width} ${_.height}`:`0 0 ${q} ${M}`}function se(){return _?Math.max(_.width,_.height)/16:1}function Te(){return _?_.width/se()*x():0}function He(){return _?_.height/se()*x():0}function Le(){let o="";w!==null&&(o+=w);let W=x();return W===1?o.length===0?void 0:o:(o!==""&&!o.endsWith(";")&&(o+="; "),`${o}font-size: ${W}em`)}function Oe(o){_=o,n(6,_)}return t.$$set=o=>{"class"in o&&n(0,u=o.class),"data"in o&&n(11,f=o.data),"scale"in o&&n(12,a=o.scale),"spin"in o&&n(1,r=o.spin),"inverse"in o&&n(2,s=o.inverse),"pulse"in o&&n(3,d=o.pulse),"flip"in o&&n(4,m=o.flip),"label"in o&&n(5,y=o.label),"style"in o&&n(13,w=o.style),"$$scope"in o&&n(16,l=o.$$scope)},t.$$.update=()=>{t.$$.dirty&14336&&(De(),n(7,q=Te()),n(8,M=He()),n(9,c=Le()),n(10,ae=Ie()))},[u,r,s,d,m,y,_,q,M,c,ae,f,a,w,i,Oe,l]}class zt extends R{constructor(e){super();P(this,e,bt,mt,j,{class:0,data:11,scale:12,spin:1,inverse:2,pulse:3,flip:4,label:5,style:13})}}var Mt={envelope:{width:1792,height:1792,paths:[{d:"M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h1 1q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zM1792 416q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-1-1q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"}]}},jt={telegram:{width:1792,height:1792,paths:[{d:"M1189 1307l147-693q9-44-10.5-63t-51.5-7l-864 333q-29 11-39.5 25t-2.5 26.5 32 19.5l221 69 513-323q21-14 32-6 7 5-4 15l-415 375v0 0l-16 228q23 0 45-22l108-104 224 165q64 36 81-38zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"}]}};export{kt as A,$ as B,Et as C,he as D,me as E,ge as F,de as G,Ke as H,k as I,zt as J,jt as K,Mt as L,pt as M,be as N,vt as O,R as S,T as a,g as b,yt as c,p as d,Qe as e,N as f,Ve as g,wt as h,P as i,Y as j,pe as k,E as l,Z as m,ve as n,L as o,qe as p,St as q,A as r,j as s,ee as t,b as u,O as v,B as w,h as x,Nt as y,qt as z};
