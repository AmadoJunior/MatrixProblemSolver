(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),o=n.n(r),i=n(16),j=n.n(i),s=n(8);n(24),n(25);var a=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(s.b,{to:"/",children:"Home"}),Object(c.jsx)(s.b,{to:"/projects",children:"Projects"})]})},u=n(2),h=n(14),l=n(18),b=n.n(l);var d=function(){var t=Object(r.useState)("Nothing yet."),e=Object(h.a)(t,2),n=e[0],o=e[1],i=Object(r.useState)(),j=Object(h.a)(i,2),s=j[0],a=j[1],u=Object(r.useRef)(null),l=Object(r.useCallback)((function(){var t=u.current.getScreenshot();a(t)}),[u]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Upload a file to read:"}),Object(c.jsx)(b.a,{audio:!1,ref:u,height:400,width:800,screenshotFormat:"image/png"}),Object(c.jsx)("p",{children:n}),Object(c.jsx)("button",{onClick:l,children:"Capture photo"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"file",onChange:function(t){var e;(e=t.target.files[0],new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(t){return n(t)}}))).then((function(t){a(t)})).catch((function(t){return Error(t)}))}}),Object(c.jsx)("button",{onClick:function(){fetch("/api/v1/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:s}).then((function(t){return t.json()})).then((function(t){console.log(t),o(t.text)})).catch((function(t){o(t)}))},children:"Upload"})]})]})};var O=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Projects"})})};var f=function(){return Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",component:d,exact:!0}),Object(c.jsx)(u.a,{path:"/projects",component:O,exact:!0})]})};var x=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(a,{}),Object(c.jsx)(f,{})]})};var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(x,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};j.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(s.a,{children:Object(c.jsx)(p,{})})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.4983d7dd.chunk.js.map