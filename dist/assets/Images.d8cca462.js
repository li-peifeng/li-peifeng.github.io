import{f as t,a7 as n,ah as b,e as m,t as h,aF as f,W as j,aE as x,aH as $,cq as s,ak as k,m as p,bx as w,af as y,ag as C,v as I,o as v,bi as M}from"./index.af742395.js";import{b as E}from"./Folder.718f5422.js";import{a as L,M as S}from"./Layout.9787268b.js";import{c as F,a as O}from"./useUtil.744380d4.js";import{I as z}from"./ImageWithError.935465ed.js";import{O as A,g as H}from"./icon.69488739.js";import"./Paginator.3e48884d.js";import"./index.aea71eda.js";import"./index.23721abf.js";import"./api.265b16a7.js";import"./Markdown.baef59ec.js";import"./index.def8ab8b.js";import"./FolderTree.8728d4ff.js";const W=e=>{const{isHide:r}=F();if(r(e.obj)||e.obj.type!==A.IMAGE)return null;const{setPathAs:i}=L(),l=t(b,{get color(){return n()},boxSize:"$12",get as(){return H(e.obj)}}),[c,o]=m(!1),u=h(()=>f()&&(c()||e.obj.selected)),{show:d}=E({id:1}),{rawLink:g}=O();return t(S.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(j,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${n()}`}},onMouseEnter:()=>{o(!0),i(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{o(!1)},onContextMenu:a=>{x(()=>{$(!1),s(e.index,!0,!0)}),d(a,{props:e.obj})},get children(){return t(k,{w:"$full",pos:"relative",get children(){return[t(p,{get when(){return u()},get children(){return t(w,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:a=>{s(e.index,a.target.checked)}})}}),t(z,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(y,{size:"lg"})},fallbackErr:l,get src(){return g(e.obj)},loading:"lazy",onClick:()=>{C.emit("gallery",e.obj.name)}})]}})}})}})},R=()=>t(M,{w:"$full",gap:"$1",flexWrap:"wrap",get children(){return t(I,{get each(){return v.objs},children:(e,r)=>t(W,{obj:e,get index(){return r()}})})}});export{R as default};
