!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,c=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);o=!0);}catch(l){a=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return c}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.23be00d9.js","./useUtil-legacy.8b49b02c.js","./File-legacy.f338964c.js","./api-legacy.39a6a8db.js","./icon-legacy.6dfb3d03.js","./index-legacy.576a3509.js","./index-legacy.35749d9c.js","./Layout-legacy.069ea82e.js","./Markdown-legacy.9d41e283.js","./index-legacy.85fa8795.js","./FolderTree-legacy.a5fe1385.js"],(function(e){"use strict";var t,r,i,c,o,a,l,u,f,s,y;return{setters:[function(n){t=n.d,r=n.e,i=n.f,c=n.a0,o=n.B,a=n.bc,l=n.cz,u=n.o,f=n.cy},function(n){s=n.a},function(n){y=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),d=n(r(!1),2),g=d[0],m=d[1],p=n(r(!1),2),h=p[0],b=p[1],j=s().currentObjLink;return i(y,{get children(){return i(c,{spacing:"$2",get children(){return[i(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(a,"/i/").concat(l(encodeURIComponent(u.raw_url)+"/"+f(encodeURIComponent(u.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),i(o,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){b(!0)},get children(){return e("home.preview.".concat(h()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
