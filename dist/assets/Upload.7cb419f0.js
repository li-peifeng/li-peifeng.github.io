import{b9 as W,_ as G,o as Y,d as J,u as q,e as P,by as K,f as o,m as S,a0 as U,B as O,v as N,I as L,W as R,a7 as _,n as Q,bh as j,Y as X,aS as Z,a6 as H,bx as E,aP as T,bz as ee,ai as te,bA as ae,bB as oe,bC as ne,p as re}from"./index.af742395.js";import{a as se,b as le}from"./index.def8ab8b.js";async function*ce(a,d,i){const n=new Set;async function u(){const[p,r]=await Promise.race(n);return n.delete(p),r}for(const p of d){const r=(async()=>await i(p,d))().then(c=>[r,c]);n.add(r),n.size>=a&&(yield await u())}for(;n.size;)yield await u()}const ie={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},de=async a=>{let d=[];const i=async(n,u)=>{await new Promise((r,c)=>{const s=l=>{console.error(l),c(l)};n.isFile?n.file(l=>{const m=new File([l],u+l.name,{type:l.type});d.push(m),console.log(m),r({})},s):n.isDirectory&&n.createReader().readEntries(async m=>{for(let g=0;g<m.length;g++)await i(m[g],u+n.name+"/");r({})},s)})};return await i(a,""),d},ue=a=>({name:a.name,path:a.webkitRelativePath?a.webkitRelativePath:a.name,size:a.size,progress:0,speed:0,status:"pending"}),pe=async(a,d,i,n=!1)=>{let u=new Date().valueOf(),p=0;const r=new FormData;r.append("file",d);const c=await W.put("/fs/form",r,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":"multipart/form-data",Password:G()},onUploadProgress:s=>{if(s.total){const l=s.loaded/s.total*100|0;i("progress",l);const m=new Date().valueOf(),g=(m-u)/1e3;if(g>1){const k=(s.loaded-p)/g,F=(s.total-s.loaded)/k;i("speed",k),console.log(F),u=m,p=s.loaded}l===100&&i("status","backending")}}});if(c.code!==200)return new Error(c.message)},me=async(a,d,i,n=!1)=>{let u=new Date().valueOf(),p=0;const r=await W.put("/fs/put",d,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":d.type||"application/octet-stream",Password:G()},onUploadProgress:c=>{if(c.total){const s=c.loaded/c.total*100|0;i("progress",s);const l=new Date().valueOf(),m=(l-u)/1e3;if(m>1){const b=(c.loaded-p)/m,f=(c.total-c.loaded)/b;i("speed",b),console.log(f),u=l,p=c.loaded}s===100&&i("status","backending")}}});if(r.code!==200)return new Error(r.message)},ge=[{name:"Stream",upload:me,provider:/.*/},{name:"Form",upload:pe,provider:/.*/}],fe=()=>ge.filter(a=>a.provider.test(Y.provider)),he=a=>{const d=J();return o(R,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${_()}`}},get children(){return[o(T,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(U,{spacing:"$2",get children(){return[o(ee,{get colorScheme(){return ie[a.status]},get children(){return d(`home.upload.${a.status}`)}}),o(T,{get children(){return[te(()=>ae(a.speed)),"/s"]}})]}}),o(oe,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(ne,{get color(){return _()},rounded:"$md"})}}),o(T,{color:"$danger10",get children(){return a.msg}})]}})},ke=()=>{const a=J(),{pathname:d}=q(),[i,n]=P(!1),[u,p]=P(!1),[r,c]=P(!1),[s,l]=K({uploads:[]}),m=()=>s.uploads.every(({status:e})=>["success","error"].includes(e));let g,b;const k=async e=>{if(e.length!==0){p(!0);for(const t of e){const w=ue(t);l("uploads",h=>[...h,w])}for await(const t of ce(3,e,V))console.log(t)}},f=(e,t,w)=>{l("uploads",h=>h.path===e,t,w)},F=fe(),[v,M]=P(F[0]),V=async e=>{const t=e.webkitRelativePath?e.webkitRelativePath:e.name;f(t,"status","uploading");const w=re(d(),t);try{const h=await v().upload(w,e,(D,C)=>{f(t,D,C)},r());h?(f(t,"status","error"),f(t,"msg",h.message)):(f(t,"status","success"),f(t,"progress",100))}catch(h){console.error(h),f(t,"status","error"),f(t,"msg",h.message)}};return o(R,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(S,{get when(){return!u()},get fallback(){return[o(U,{spacing:"$2",get children(){return[o(O,{colorScheme:"accent",onClick:()=>{l("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(s.uploads)},get children(){return a("home.upload.clear_done")}}),o(S,{get when(){return m()},get children(){return o(O,{onClick:()=>{p(!1)},get children(){return a("home.upload.back")}})}})]}}),o(N,{get each(){return s.uploads},children:e=>o(he,e)})]},get children(){return[o(L,{type:"file",multiple:!0,ref(e){const t=g;typeof t=="function"?t(e):g=e},display:"none",onChange:e=>{var t;k(Array.from((t=e.target.files)!=null?t:[]))}}),o(L,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=b;typeof t=="function"?t(e):b=e},display:"none",onChange:e=>{var t;k(Array.from((t=e.target.files)!=null?t:[]))}}),o(R,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${i()?_():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),n(!0)},onDragLeave:()=>{n(!1)},onDrop:async e=>{var x,A,z,I;e.preventDefault(),e.stopPropagation(),n(!1);const t=[],w=Array.from((A=(x=e.dataTransfer)==null?void 0:x.items)!=null?A:[]),h=Array.from((I=(z=e.dataTransfer)==null?void 0:z.files)!=null?I:[]);let D=w.length;const C=[];for(let $=0;$<D;$++){const y=w[$].webkitGetAsEntry();y!=null&&y.isFile?t.push(h[$]):y!=null&&y.isDirectory&&C.push(y)}for(const $ of C){const B=await de($);t.push(...B)}t.length===0&&Q.warning(a("home.upload.no_files_drag")),k(t)},spacing:"$4",h:"$56",get children(){return o(S,{get when(){return!i()},get fallback(){return o(j,{get children(){return a("home.upload.release")}})},get children(){return[o(j,{get children(){return a("home.upload.upload-tips")}}),o(X,{w:"30%",get children(){return o(Z,{get value(){return v().name},onChange:e=>{M(F.find(t=>t.name===e))},get options(){return F.map(e=>({label:e.name,value:e.name}))}})}}),o(U,{spacing:"$4",get children(){return[o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(se,{})},onClick:()=>{b.click()}}),o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(le,{})},onClick:()=>{g.click()}})]}}),o(E,{get checked(){return r()},onChange:()=>{c(!r())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{ke as default};
