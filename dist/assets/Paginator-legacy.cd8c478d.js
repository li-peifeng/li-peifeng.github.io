!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,c,o=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);u=!0);}catch(l){i=!0,c=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw c}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}System.register(["./index-legacy.23be00d9.js","./index-legacy.35749d9c.js"],(function(r){"use strict";var n,t,c,o,u,i,l,a,h,f,g;return{setters:[function(e){n=e.ap,t=e.by,c=e.t,o=e.f,u=e.a0,i=e.m,l=e.B,a=e.a6,h=e.v},function(e){f=e.l,g=e.m}],execute:function(){r("P",(function(r){var m=n({maxShowPage:4,defaultPageSize:30,defaultCurrent:1,hideOnSinglePage:!0},r),d=e(t({pageSize:m.defaultPageSize,current:m.defaultCurrent}),2),s=d[0],S=d[1],y=c((function(){return Math.ceil(m.total/s.pageSize)})),p=c((function(){var e=s.current,r=Math.max(2,e-Math.floor(m.maxShowPage/2));return Array.from({length:e-r},(function(e,n){return r+n}))})),v=c((function(){var e=s.current,r=Math.min(y()-1,e+Math.floor(m.maxShowPage/2));return Array.from({length:r-e},(function(r,n){return e+1+n}))})),x={"@initial":"sm","@md":"md"},b=function(e){var r;S("current",e),null===(r=m.onChange)||void 0===r||r.call(m,e)};return o(i,{get when(){return!m.hideOnSinglePage||y()>1},get children(){return o(u,{spacing:"$1",get children(){return[o(i,{get when(){return 1!==s.current},get children(){return[o(l,{size:x,get colorScheme(){return m.colorScheme},onClick:function(){b(1)},px:"$3",children:"1"}),o(a,{size:x,get icon(){return o(f,{})},"aria-label":"Previous",get colorScheme(){return m.colorScheme},onClick:function(){b(s.current-1)},w:"2rem !important"})]}}),o(h,{get each(){return p()},children:function(e){return o(l,{size:x,get colorScheme(){return m.colorScheme},onClick:function(){b(e)},px:e>10?"$2_5":"$3",children:e})}}),o(l,{size:x,get colorScheme(){return m.colorScheme},variant:"solid",get px(){return s.current>10?"$2_5":"$3"},get children(){return s.current}}),o(h,{get each(){return v()},children:function(e){return o(l,{size:x,get colorScheme(){return m.colorScheme},onClick:function(){b(e)},px:e>10?"$2_5":"$3",children:e})}}),o(i,{get when(){return s.current!==y()},get children(){return[o(a,{size:x,get icon(){return o(g,{})},"aria-label":"Next",get colorScheme(){return m.colorScheme},onClick:function(){b(s.current+1)},w:"2rem !important"}),o(l,{size:x,get colorScheme(){return m.colorScheme},onClick:function(){b(y())},get px(){return y()>10?"$2_5":"$3"},get children(){return y()}})]}})]}})}})}))}}}))}();
