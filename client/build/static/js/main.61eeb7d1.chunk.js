(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{87:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),s=n.n(c),i=n(45),o=n(11),u=n(23),l=n.n(u),j=n(38),p=n(135),b=n(131),d=n(128),m=n(132),h=n(130),x=n(134),O=n(125),f=n(129),g=n(133),v=n(127),y=n(58),w=n.n(y),k=n(60),S=n(126),C=n(6);function N(){return Object(C.jsxs)(k.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(C.jsx)(O.a,{color:"inherit",href:"https://www.linkedin.com/in/jorge-pezzuol/",children:"Jorge Pezzuol"})]})}var F=Object(S.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function P(){var e=F(),t=Object(o.g)().push,n=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:"jorge2@test.com",password:"testpass"})});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(j.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,n();case 3:e.sent&&t({pathname:"/profile",state:{}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(v.a,{container:!0,component:"main",className:e.root,children:[Object(C.jsx)(d.a,{}),Object(C.jsx)(v.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(C.jsx)(v.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,children:Object(C.jsxs)("div",{className:e.paper,children:[Object(C.jsx)(p.a,{className:e.avatar,children:Object(C.jsx)(w.a,{})}),Object(C.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(C.jsxs)("form",{className:e.form,onSubmit:r,children:[Object(C.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",autoFocus:!0}),Object(C.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(C.jsx)(h.a,{control:Object(C.jsx)(x.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(C.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(C.jsxs)(v.a,{container:!0,children:[Object(C.jsx)(v.a,{item:!0,xs:!0,children:Object(C.jsx)(O.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(C.jsx)(v.a,{item:!0,children:Object(C.jsx)(O.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(C.jsx)(g.a,{mt:5,children:Object(C.jsx)(N,{})})]})]})})]})}var z=n(49),I=n(54),T=n(59),D=function(e){var t=e.component,n=Object(T.a)(e,["component"]),a=Object(r.useState)(!1),c=Object(I.a)(a,2),s=c[0],i=c[1],u=Object(r.useState)(!0),p=Object(I.a)(u,2),b=p[0],d=p[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,i(t),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/authenticateToken",{credentials:"include"});case 2:return t=e.sent,e.abrupt("return",401!==t.status);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b?Object(C.jsx)("p",{children:"Loading..."}):Object(C.jsx)(o.b,Object(z.a)(Object(z.a)({},n),{},{render:function(e){return s?Object(C.jsx)(t,Object(z.a)({},e)):Object(C.jsx)(o.a,{to:"/login"})}}))};var J=function(){return Object(C.jsx)(i.a,{children:Object(C.jsxs)(o.d,{children:[Object(C.jsx)(o.b,{render:function(){return Object(C.jsx)("p",{children:"/"})},exact:!0,path:"/"}),Object(C.jsx)(o.b,{render:function(){return Object(C.jsx)("p",{children:"/home"})},exact:!0,path:"/home"}),Object(C.jsx)(o.b,{component:P,exact:!0,path:"/login"}),Object(C.jsx)(D,{component:P,path:"/profile",exact:!0})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(J,{})}),document.getElementById("root")),q()}},[[87,1,2]]]);
//# sourceMappingURL=main.61eeb7d1.chunk.js.map