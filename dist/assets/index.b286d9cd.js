import{ap as L,b6 as T,br as f,a4 as B,J as _,f as e,Y as b,ar as D,E as S,u as M,as as F,ah as N,bn as k,bs as y,b9 as P,bj as A,bt as W,bu as H,bv as K,d as V,t as Z,e as p,bw as J,a as Y,W as q,bi as C,ae as Q,bh as X,m as ee,I as v,bx as te,aP as oe,a0 as ne,B as x,a_ as re,a$ as se,ak as ae,h as le,n as E}from"./index.af742395.js";import{p as ie,c as ce}from"./index.23721abf.js";const ue=B('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),ge=a=>{const l=L({startColor:"#28aff0",endColor:"#120fc4"},a);return(()=>{const t=ue.cloneNode(!0),c=t.firstChild,u=c.firstChild,r=u.nextSibling,o=r.firstChild,i=o.nextSibling;return T(n=>{const g=l.startColor,d=l.endColor;return g!==n._v$&&f(o,"stop-color",n._v$=g),d!==n._v$2&&f(i,"stop-color",n._v$2=d),n},{_v$:void 0,_v$2:void 0}),t})()},de=B('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),pe=a=>{const l=L({startColor:"#28aff0",endColor:"#120fc4"},a);return(()=>{const t=de.cloneNode(!0),c=t.firstChild,u=c.firstChild,r=u.nextSibling,o=r.firstChild,i=o.nextSibling;return T(n=>{const g=l.startColor,d=l.endColor;return g!==n._v$&&f(o,"stop-color",n._v$=g),d!==n._v$2&&f(i,"stop-color",n._v$2=d),n},{_v$:void 0,_v$2:void 0}),t})()},fe=()=>{const a=_("#a9c6ff","#062b74");return e(b,{get bgColor(){return a()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[e(b,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return e(pe,{})}}),e(b,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return e(ge,{})}})]}})},he=()=>{const a=D("sso_login_enabled"),l=S("sso_login_platform"),{searchParams:t,to:c}=M();function u(r){const o=r.data;o.token&&(k(o.token),c(decodeURIComponent(t.redirect||y||"/"),!0))}if(window.addEventListener("message",u),F(()=>{window.removeEventListener("message",u)}),a){const r=()=>{const i=P.getUri()+"/auth/sso?method=sso_get_token";window.open(i,"authPopup","width=500,height=600")};let o;switch(l){case"Github":o=K;break;case"Microsoft":o=ie;break;case"Google":o=H;break;case"Dingtalk":o=W;break;default:o=A}return e(N,{cursor:"pointer",boxSize:"$8",as:o,p:"$0_5",onclick:r})}},$e=()=>{const a=S("logo").split(`
`),l=_(a[0],a.pop()),t=V(),c=Z(()=>`${t("login.login_to")} ${S("site_title")}`);ce(c);const u=_("white","$neutral1"),[r,o]=p(localStorage.getItem("username")||""),[i,n]=p(localStorage.getItem("password")||""),[g,d]=p(""),[h,R]=J("remember-pwd","false"),[z,O]=Y(()=>P.post("/auth/login",{username:r(),password:i(),otp_code:g()})),{searchParams:I,to:G}=M(),m=async()=>{h()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",i())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const s=await O();le(s,$=>{E.success(t("login.success")),k($.token),G(decodeURIComponent(I.redirect||y||"/"),!0)},($,j)=>{!w()&&j===402?U(!0):E.error($)})},[w,U]=p(!1);return e(ae,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(q,{get bgColor(){return u()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(C,{alignItems:"center",justifyContent:"space-around",get children(){return[e(Q,{mr:"$2",boxSize:"$12",get src(){return l()}}),e(X,{color:"$info9",fontSize:"$2xl",get children(){return c()}})]}}),e(ee,{get when(){return!w()},get fallback(){return e(v,{id:"totp",name:"otp",get placeholder(){return t("login.otp-tips")},get value(){return g()},onInput:s=>d(s.currentTarget.value),onKeyDown:s=>{s.key==="Enter"&&m()}})},get children(){return[e(v,{name:"username",get placeholder(){return t("login.username-tips")},get value(){return r()},onInput:s=>o(s.currentTarget.value)}),e(v,{name:"password",get placeholder(){return t("login.password-tips")},type:"password",get value(){return i()},onInput:s=>n(s.currentTarget.value),onKeyDown:s=>{s.key==="Enter"&&m()}}),e(C,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(te,{get checked(){return h()==="true"},onChange:()=>R(h()==="true"?"false":"true"),get children(){return t("login.remember")}}),e(oe,{as:"a",target:"_blank",get href(){return t("login.forget_url")},get children(){return t("login.forget")}})]}})]}}),e(ne,{w:"$full",spacing:"$2",get children(){return[e(x,{colorScheme:"primary",w:"$full",onClick:()=>{w()?d(""):(o(""),n(""))},get children(){return t("login.clear")}}),e(x,{w:"$full",get loading(){return z()},onClick:m,get children(){return t("login.login")}})]}}),e(x,{w:"$full",colorScheme:"accent",onClick:()=>{k(),G(decodeURIComponent(I.redirect||y||"/"),!0)},get children(){return t("login.use_guest")}}),e(C,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(re,{}),e(se,{}),e(he,{})]}})]}}),e(fe,{})]}})};export{$e as default};
