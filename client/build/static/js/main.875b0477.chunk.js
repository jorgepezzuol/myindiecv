(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{297:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),s=a(69),o=a(19),l=a(15),j=a.n(l),d=a(34),u=a(385),b=a(360),m=a(357),p=a(378),h=a(359),x=a(381),O=a(354),f=a(177),g=a(379),v=a(356),y=a(104),C=a.n(y),w=a(107),S=a(355),k=a(2);function N(){return Object(k.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(O.a,{color:"inherit",href:"https://www.linkedin.com/in/jorge-pezzuol/",children:"Jorge Pezzuol"})]})}var T=Object(S.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),z=function(){var e=T(),t=Object(o.g)().push,a=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:"jorge2@test.com",password:"testpass"})});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(d.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a();case 3:(r=e.sent)&&(localStorage.setItem("user",JSON.stringify(r)),t({pathname:"/dashboard",state:{}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)(v.a,{container:!0,component:"main",className:e.root,children:[Object(k.jsx)(m.a,{}),Object(k.jsx)(v.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,children:Object(k.jsxs)("div",{className:e.paper,children:[Object(k.jsx)(u.a,{className:e.avatar,children:Object(k.jsx)(C.a,{})}),Object(k.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(k.jsxs)("form",{className:e.form,onSubmit:n,children:[Object(k.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",autoFocus:!0}),Object(k.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(k.jsx)(h.a,{control:Object(k.jsx)(x.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(k.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(k.jsxs)(v.a,{container:!0,children:[Object(k.jsx)(v.a,{item:!0,xs:!0,children:Object(k.jsx)(O.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(k.jsx)(v.a,{item:!0,children:Object(k.jsx)(O.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(k.jsx)(g.a,{mt:5,children:Object(k.jsx)(N,{})})]})]})})]})},P=a(22),E=a(23),W=a(175),D=function(e){var t=e.component,a=Object(W.a)(e,["component"]),r=Object(n.useState)(!1),c=Object(E.a)(r,2),i=c[0],s=c[1],l=Object(n.useState)(!0),u=Object(E.a)(l,2),b=u[0],m=u[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,s(t),m(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/authenticateToken",{credentials:"include"});case 2:return t=e.sent,e.abrupt("return",401!==t.status);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b?Object(k.jsx)("p",{children:"Loading..."}):Object(k.jsx)(o.b,Object(P.a)(Object(P.a)({},a),{},{render:function(e){return i?Object(k.jsx)(t,Object(P.a)({},e)):Object(k.jsx)(o.a,{to:"/login"})}}))},B=a(363),I=a(83),F=a.n(I),L=a(364),J=a(365),M=a(366),A=a(367),H=a(361),q=a(362),_=a(174),G=a(386),R=a(167),U=a.n(R),V=Object(S.a)((function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)}}})),Y=function(){var e=V(),t=r.a.useState(null),a=Object(E.a)(t,2),n=a[0],c=a[1],i=function(){c(null)};return Object(k.jsx)(H.a,{position:"static",color:"default",elevation:0,className:e.appBar,children:Object(k.jsxs)(q.a,{className:e.toolbar,children:[Object(k.jsx)(w.a,{variant:"h6",color:"inherit",noWrap:!0,className:e.toolbarTitle,children:"CV Maker"}),Object(k.jsx)("nav",{children:Object(k.jsx)(O.a,{variant:"button",color:"textPrimary",href:"#",className:e.link,children:"Buy me a Coffee"})}),Object(k.jsxs)(b.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:["Jorge Pezzuol",Object(k.jsx)(U.a,{})]}),Object(k.jsxs)(_.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i,children:[Object(k.jsx)(G.a,{onClick:i,children:"My account"}),Object(k.jsx)(G.a,{onClick:i,children:"Logout"})]})]})})},K=function(){return Object(k.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(O.a,{color:"inherit",href:"https://www.linkedin.com/in/jorge-pezzuol/",children:"Jorge Pezzuol"})]})},Q=Object(S.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),X=function(){var e=Q();return Object(k.jsxs)("footer",{className:e.footer,children:[Object(k.jsx)(w.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(k.jsx)(w.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(k.jsx)(K,{})]})},Z=Object(S.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})),$=function(){var e=Z(),t=Object(n.useState)([]),a=Object(E.a)(t,2),c=a[0],i=a[1],s=Object(o.g)().push,l="http://localhost:5001";Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!JSON.parse(localStorage.getItem("user"))){e.next=9;break}return e.next=4,fetch("".concat(l,"/cv/user"),{credentials:"include"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,i(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/create/cv"),{method:"POST",credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s({pathname:"cv/edit/".concat(a._id),state:{cvId:a._id}});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(m.a,{}),Object(k.jsx)(Y,{}),Object(k.jsx)("div",{className:e.heroContent,children:Object(k.jsxs)(B.a,{maxWidth:"sm",children:[Object(k.jsx)(w.a,{component:"h1",variant:"h3",align:"center",color:"textPrimary",children:"Dashboard"}),Object(k.jsx)(w.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Lorem ipsum asdasd asdfgdgj asdijas"}),Object(k.jsx)("div",{className:e.heroButtons,children:Object(k.jsxs)(v.a,{container:!0,spacing:2,justify:"center",children:[Object(k.jsx)(v.a,{item:!0,children:Object(k.jsx)(b.a,{startIcon:Object(k.jsx)(F.a,{}),variant:"contained",color:"primary",size:"large",onClick:u,children:"Create New"})}),Object(k.jsx)(v.a,{item:!0,children:Object(k.jsx)(b.a,{variant:"outlined",color:"primary",children:"Play main CV"})})]})})]})}),Object(k.jsx)(B.a,{className:e.cardGrid,maxWidth:"md",children:Object(k.jsx)(v.a,{container:!0,spacing:4,children:c.map((function(t){return Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,md:4,children:Object(k.jsxs)(L.a,{className:e.card,children:[Object(k.jsx)(J.a,{className:e.cardMedia,image:"https://source.unsplash.com/random",title:"Image title"}),Object(k.jsxs)(M.a,{className:e.cardContent,children:[Object(k.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Heading"}),Object(k.jsx)(w.a,{children:"This is a media card. You can use this section to describe the content."})]}),Object(k.jsxs)(A.a,{children:[Object(k.jsx)(b.a,{size:"small",color:"primary",children:"Edit"}),Object(k.jsx)(b.a,{size:"small",color:"primary",children:"PDF"}),Object(k.jsx)(b.a,{size:"small",color:"primary",children:"Play"})]})]})},t)}))})}),Object(k.jsx)(X,{})]})},ee=a(375),te=a(376),ae=a(172),ne=a.n(ae),re=a(377),ce=function(e){var t=e.personalDetails,a=e.setPersonalDetails;return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(v.a,{item:!0,xs:12,sm:12,children:Object(k.jsx)(w.a,{variant:"h5",color:"textPrimary",children:"Personal Details"})}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{label:"Job Title",variant:"filled",placeholder:"e.g. Web Developer",style:{marginBottom:20},size:"small",fullWidth:!0,onChange:function(e){return a(Object(P.a)(Object(P.a)({},t),{},{jobTitle:e.target.value}))},value:t.jobTitle})}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{label:"Email",variant:"filled",style:{marginBottom:20},size:"small",fullWidth:!0,onChange:function(e){return a(Object(P.a)(Object(P.a)({},t),{},{mail:e.target.value}))},value:t.mail})}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{label:"First Name",variant:"filled",style:{marginBottom:20},size:"small",fullWidth:!0,onChange:function(e){return a(Object(P.a)(Object(P.a)({},t),{},{firstName:e.target.value}))},value:t.firstName})}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{label:"Last Name",variant:"filled",style:{marginBottom:20},size:"small",fullWidth:!0,onChange:function(e){return a(Object(P.a)(Object(P.a)({},t),{},{lastName:e.target.value}))},value:t.lastName})}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{label:"Phone",variant:"filled",size:"small",fullWidth:!0,onChange:function(e){return a(Object(P.a)(Object(P.a)({},t),{},{phone:e.target.value}))},value:t.phone})})]})},ie=a(168),se=a(17),oe=(a(296),a(297),a(173)),le=function(e){var t=e.object,a=e.setObject,r=Object(n.useState)(se.EditorState.createWithContent(se.ContentState.createFromBlockArray(Object(se.convertFromHTML)(t?t.description:"<p>Overall experience</p>")))),c=Object(E.a)(r,2),i=c[0],s=c[1],o=function(){var e=Object(oe.a)(i.getCurrentContent());a(Object(P.a)(Object(P.a)({},t),{},{description:e}))};return Object(k.jsx)(ie.Editor,{editorState:i,onEditorStateChange:function(e){s(e),o()},wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",toolbar:{options:["inline","list","link"],inline:{options:["bold","italic","underline","strikethrough"]}}})},je=function(e){var t=e.professionalSummary,a=e.setProfessionalSummary;return Object(k.jsx)(r.a.Fragment,{children:Object(k.jsxs)(v.a,{item:!0,xs:12,sm:12,children:[Object(k.jsx)(w.a,{variant:"h5",color:"textPrimary",children:"Professional Summay"}),Object(k.jsx)(w.a,{variant:"subtitle2",color:"textSecondary",paragraph:!0,children:"Include 2-3 clear sentences about your overall experience"}),t?Object(k.jsx)(le,{object:t,setObject:a}):Object(k.jsx)("p",{children:"Loading..."})]})})},de=a(384),ue=a(368),be=a(369),me=a(169),pe=a.n(me),he=a(170),xe=a.n(he),Oe=a(303),fe=function(e){var t=e.employment,a=e.setEmploymentIdToBeDeleted,r=Object(n.useState)("Not specified"),c=Object(E.a)(r,2),i=c[0],s=c[1];return Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsx)(v.a,{item:!0,xs:11,sm:11,children:Object(k.jsxs)(de.a,{children:[Object(k.jsx)(ue.a,{expandIcon:Object(k.jsx)(pe.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(k.jsxs)(w.a,{children:[i,Object(k.jsx)("br",{}),"Mar 2021 - Mar 2021"]})}),Object(k.jsx)(be.a,{children:Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{label:"Job Title",variant:"filled",size:"small",fullWidth:!0,onChange:function(e){return s(e.target.value)}})}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{label:"Employer",variant:"filled",size:"small",fullWidth:!0})}),Object(k.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(k.jsx)(p.a,{label:"Start date",variant:"filled",size:"small",fullWidth:!0})}),Object(k.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(k.jsx)(p.a,{label:"End date",variant:"filled",size:"small",fullWidth:!0})}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{label:"City",variant:"filled",size:"small",fullWidth:!0})}),Object(k.jsxs)(v.a,{item:!0,xs:12,sm:12,children:[Object(k.jsx)(w.a,{children:"Description"}),Object(k.jsx)(le,{})]})]})})]})}),Object(k.jsx)(v.a,{item:!0,xs:1,sm:1,alignItems:"center",container:!0,children:Object(k.jsx)(Oe.a,{onClick:function(){return a(t.id)},children:Object(k.jsx)(xe.a,{})})})]})},ge=function(e){var t=e.employmentList,a=e.addEmployment,n=e.setEmploymentIdToBeDeleted;return Object(k.jsxs)(v.a,{item:!0,xs:12,sm:12,children:[Object(k.jsx)(w.a,{variant:"h5",color:"textPrimary",children:"Employment History"}),Object(k.jsx)(w.a,{variant:"subtitle2",color:"textSecondary",paragraph:!0,children:"Include your last 10 years of relevant experience and dates in this section. List your most recent position first."}),t.map((function(e,t){return Object(k.jsx)(fe,{setEmploymentIdToBeDeleted:n,employment:e},t)})),Object(k.jsx)(g.a,{mt:2}),Object(k.jsx)(b.a,{style:{textTransform:"none"},startIcon:Object(k.jsx)(F.a,{}),color:"primary",size:"small",onClick:a,children:Object(k.jsx)("b",{children:"Add employment"})})]})},ve=a(382),ye=a(374),Ce=a(372),we=a(373),Se=a(371),ke=a(370),Ne=r.a.forwardRef((function(e,t){return Object(k.jsx)(ke.a,Object(P.a)({direction:"up",ref:t},e))})),Te=function(e){var t=e.title,a=e.contentText,n=e.handleConfirm,r=e.handleClose;return Object(k.jsx)("div",{children:Object(k.jsxs)(ve.a,{open:!0,TransitionComponent:Ne,keepMounted:!0,onClose:r,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(k.jsx)(Se.a,{id:"alert-dialog-slide-title",children:t}),Object(k.jsx)(Ce.a,{children:Object(k.jsx)(we.a,{id:"alert-dialog-slide-description",children:a})}),Object(k.jsxs)(ye.a,{children:[Object(k.jsx)(b.a,{onClick:r,color:"primary",children:"Cancel"}),Object(k.jsx)(b.a,{onClick:n,color:"primary",children:"Delete"})]})]})})},ze=a(383),Pe=a(171),Ee=a.n(Pe);function We(e){var t=e.setHasDeletedEntry,a=(e.message,function(e,a){"clickaway"!==a&&t(!1)});return Object(k.jsx)("div",{children:Object(k.jsx)(ze.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:!0,autoHideDuration:6e3,onClose:a,message:"Experience deleted",action:Object(k.jsx)(r.a.Fragment,{children:Object(k.jsx)(Oe.a,{size:"small","aria-label":"close",color:"inherit",onClick:a,children:Object(k.jsx)(Ee.a,{fontSize:"small"})})})})})}a(299);var De=Object(S.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),Be=function(){var e=De(),t=Object(o.h)(),a=Object(n.useState)(0),c=Object(E.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)(!1),u=Object(E.a)(l,2),b=u[0],p=u[1],h=Object(n.useState)(!0),x=Object(E.a)(h,2),O=x[0],f=x[1],y=Object(n.useState)(!1),C=Object(E.a)(y,2),S=C[0],N=C[1],T=Object(n.useState)([]),z=Object(E.a)(T,2),P=(z[0],z[1],Object(n.useState)({jobTitle:"",mail:"",firstName:"",lastName:"",_id:"",cv:"",phone:""})),W=Object(E.a)(P,2),D=W[0],I=W[1],F=Object(n.useState)(null),L=Object(E.a)(F,2),J=L[0],M=L[1],A="http://localhost:5001";Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t.state.cvId);case 2:a=e.sent,I(a.personalDetails),M(a.professionalSummary);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),f(!1)}),[]),Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,fetch("".concat(A,"/personaldetails/").concat(t._id),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,N(!1),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=setTimeout((function(){return e(D)}),2e3);return function(){return clearTimeout(t)}}),[D]),Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,fetch("".concat(A,"/professionalsummary/").concat(t._id),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,N(!1),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=setTimeout((function(){return e(J)}),2e3);return function(){return clearTimeout(t)}}),[J]);var H=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/edit/cv/").concat(t),{credentials:"include"});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return O?Object(k.jsx)("p",{children:"Loading..."}):Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(m.a,{}),Object(k.jsx)(Y,{}),b&&Object(k.jsx)(We,{setHasDeletedEntry:p}),i>0&&Object(k.jsx)(Te,{title:"Delete Entry",contentText:"Are you sure you want to delete this entry?",handleConfirm:function(){},handleClose:function(){return s(0)}}),Object(k.jsx)("div",{className:e.heroContent,children:Object(k.jsxs)(B.a,{maxWidth:"sm",children:[Object(k.jsx)(w.a,{variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0,children:"Untitled"}),Object(k.jsx)(w.a,{variant:"subtitle2",align:"center",color:"textSecondary",paragraph:!0,children:"English"})]})}),Object(k.jsx)(ee.a,{}),Object(k.jsxs)(B.a,{maxWidth:"md",style:{marginTop:30},children:[Object(k.jsx)(v.a,{container:!0,spacing:2,children:Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(ce,{personalDetails:D,setPersonalDetails:I}),Object(k.jsx)(g.a,{mt:10}),Object(k.jsx)(je,{professionalSummary:J,setProfessionalSummary:M}),Object(k.jsx)(g.a,{mt:10}),Object(k.jsx)(ge,{employmentList:[],addEmployment:function(){},setEmploymentIdToBeDeleted:function(){}})]})}),Object(k.jsxs)(te.a,{style:{textTransform:"none"},variant:"extended",size:"large",color:"primary","aria-label":"add",className:e.fab,children:[Object(k.jsx)("b",{children:"Preview & Download"}),Object(k.jsx)(g.a,{ml:1,children:S?Object(k.jsx)(re.a,{size:25,color:"white",fontSize:"small"}):Object(k.jsx)(ne.a,{})})]})]})]})};function Ie(){return Object(k.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(O.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var Fe=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Le(){var e=Fe();return Object(k.jsxs)(B.a,{component:"main",maxWidth:"xs",children:[Object(k.jsx)(m.a,{}),Object(k.jsxs)("div",{className:e.paper,children:[Object(k.jsx)(u.a,{className:e.avatar,children:Object(k.jsx)(C.a,{})}),Object(k.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(k.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(k.jsxs)(v.a,{container:!0,spacing:2,children:[Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(k.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(k.jsx)(v.a,{item:!0,xs:12,children:Object(k.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(k.jsx)(v.a,{item:!0,xs:12,children:Object(k.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})})]}),Object(k.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(k.jsx)(v.a,{container:!0,justify:"flex-end",children:Object(k.jsx)(v.a,{item:!0,children:Object(k.jsx)(O.a,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(k.jsx)(g.a,{mt:5,children:Object(k.jsx)(Ie,{})})]})}var Je=function(){return Object(k.jsx)(s.a,{children:Object(k.jsxs)(o.d,{children:[Object(k.jsx)(o.b,{component:$,exact:!0,path:"/"}),Object(k.jsx)(o.b,{component:z,exact:!0,path:"/login"}),Object(k.jsx)(D,{component:z,path:"/profile",exact:!0}),Object(k.jsx)(o.b,{component:$,exact:!0,path:"/dashboard"}),Object(k.jsx)(o.b,{component:Be,exact:!0,path:"/cv/edit/:id"}),Object(k.jsx)(o.b,{component:Le,exact:!0,path:"/signup"})]})})},Me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,388)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(k.jsx)(Je,{}),document.getElementById("root")),Me()}},[[301,1,2]]]);
//# sourceMappingURL=main.875b0477.chunk.js.map