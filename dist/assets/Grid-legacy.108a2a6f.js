!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.23be00d9.js","./Folder-legacy.141d83d8.js","./Layout-legacy.069ea82e.js","./useUtil-legacy.8b49b02c.js","./index-legacy.35749d9c.js","./ImageWithError-legacy.d5b06231.js","./icon-legacy.6dfb3d03.js","./Paginator-legacy.cd8c478d.js","./index-legacy.576a3509.js","./api-legacy.39a6a8db.js","./Markdown-legacy.9d41e283.js","./index-legacy.85fa8795.js","./FolderTree-legacy.a5fe1385.js"],(function(t){"use strict";var n,r,o,a,i,l,u,c,f,s,d,g,b,y,h,m,p,j,x,v,w,$,k,A,S,M,E,I;return{setters:[function(e){n=e.f,r=e.a7,o=e.ah,a=e.e,i=e.t,l=e.aF,u=e.W,c=e.z,f=e.aE,s=e.aH,d=e.cq,g=e.ak,b=e.ag,y=e.m,h=e.bx,m=e.af,p=e.aP,j=e.v,x=e.o,v=e.c4},function(e){w=e.b},function(e){$=e.a,k=e.M},function(e){A=e.c},function(e){S=e.p},function(e){M=e.I},function(e){E=e.g,I=e.O},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var z=function(t){if((0,A().isHide)(t.obj))return null;var j=$().setPathAs,x=n(o,{get color(){return r()},boxSize:"$12",get as(){return E(t.obj)}}),v=e(a(!1),2),z=v[0],C=v[1],P=i((function(){return l()&&(z()||t.obj.selected)})),O=w({id:1}).show;return n(k.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(u,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:c()}},as:S,get href(){return t.obj.name},onMouseEnter:function(){C(!0),j(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){C(!1)},onContextMenu:function(e){f((function(){s(!1),d(t.index,!0,!0)})),O(e,{props:t.obj})},get children(){return[n(g,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===I.IMAGE&&(e.stopPropagation(),e.preventDefault(),b.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(y,{get when(){return P()},get children(){return n(h,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){d(t.index,e.target.checked)}})}}),n(y,{get when(){return t.obj.thumb},fallback:x,get children(){return n(M,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(m,{size:"lg"})},fallbackErr:x,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})};t("default",(function(){return n(v,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return n(j,{get each(){return x.objs},children:function(e,t){return n(z,{obj:e,get index(){return t()}})}})}})}))}}}))}();
