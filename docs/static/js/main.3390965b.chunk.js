(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(5),c=n.n(r),i=n(2),s=n(0),u=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c]})),u(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(t){u(t.target.value)}})})},o=function(t){var e=t.img;return Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("img",{src:e.url,alt:e.title}),Object(s.jsx)("p",{children:e.title})]})},d=n(4),j=n.n(d),l=n(6),f=function(){var t=Object(l.a)(j.a.mark((function t(e){var n,a,r,c,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=5&api_key=hW7RZNI5eJOZkKZdu3cwdsBVWAkzndqX"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){return c({data:t,loading:!1})}))}),[t]),r}(e),r=n.loading,c=n.data;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),r&&Object(s.jsx)("p",{className:"animate__animated animate__flash",children:"Loading ..."}),Object(s.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(s.jsx)(o,{img:t},t.id)}))})]})},p=function(){var t=Object(a.useState)(["Naruto"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Gif Expert App"}),Object(s.jsx)(u,{setCategories:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(m,{category:t},t)}))})]})},b=(n(13),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))});c.a.render(Object(s.jsx)(p,{}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.3390965b.chunk.js.map