(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(50),s=n.n(r),i=n(41),u=n(11),o=n(35),j=n(15),l=n(0),b=n.n(l),O=n(1),d=n(51),p=n(21),f=n(22),h=n(36);Object(d.a)({apiKey:"AIzaSyDiflkJwyYbf0e8RJAou9uLXPxehiW8hP8",authDomain:"nwitter-3b4d6.firebaseapp.com",projectId:"nwitter-3b4d6",storageBucket:"nwitter-3b4d6.appspot.com",messagingSenderId:"524408542813",appId:"1:524408542813:web:1bdfa561a6e46aed641fb4"});var x=Object(p.d)(),m=Object(f.e)(),v=Object(h.b)(),g=n(6),y=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(!0),l=Object(u.a)(j,2),d=l[0],f=l[1],h=Object(c.useState)(""),m=Object(u.a)(h,2),v=m[0],y=m[1],w=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&o(c)},N=function(){var e=Object(O.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,Object(p.c)(x,n,i);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,Object(p.f)(x,n,i);case 10:c=e.sent;case 11:console.log(c),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),y(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:N,className:"container",children:[Object(g.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:w,className:"authInput"}),Object(g.jsx)("input",{type:"submit",value:d?"Create Account":"Sign In",className:"authInput authSubmit"}),v&&Object(g.jsx)("span",{className:"authError",children:v})]}),Object(g.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:d?"Sign in":"Create Account"})]})},w=n(26),N=n(37),k=function(){var e=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"github"===(n=t.target.name)?c=new p.a:"google"===n&&(c=new p.b),e.next=4,Object(p.g)(x,c);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(w.a,{icon:N.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(g.jsx)(w.a,{icon:N.b})]}),Object(g.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(g.jsx)(w.a,{icon:N.a})]})]})]})},S=n(38),C=n(30),I=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(c.useState)(!1),r=Object(u.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(t.text),j=Object(u.a)(o,2),l=j[0],d=j[1],p=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you ant to delete this nweet?")){e.next=6;break}return e.next=4,Object(f.c)(Object(f.d)(m,"nweets/".concat(t.id)));case 4:return e.next=6,Object(S.a)(Object(S.d)(v,t.attachmentUrl));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return i((function(e){return!e}))},x=function(){var e=Object(O.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Object(f.i)(Object(f.d)(m,"nweets/".concat(t.id)),{text:l});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:s?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:x,className:"container nweetEdit",children:[Object(g.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:l,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;d(t)},className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(g.jsx)("span",{onClick:h,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl,alt:"#"}),n&&Object(g.jsxs)("div",{className:"nweet__actions",children:[Object(g.jsx)("span",{onClick:p,children:Object(g.jsx)(w.a,{icon:C.d})}),Object(g.jsx)("span",{onClick:h,children:Object(g.jsx)(w.a,{icon:C.a})})]})]})})},F=n(70),A=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),j=o[0],l=o[1],d=function(){var e=Object(O.a)(b.a.mark((function e(n){var c,a,i,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c="",""===j){e.next=10;break}return a=Object(h.c)(v,"".concat(t.uid,"/").concat(Object(F.a)())),e.next=6,Object(h.d)(a,j,"data_url");case 6:return i=e.sent,e.next=9,Object(h.a)(i.ref);case 9:c=e.sent;case 10:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.next=13,Object(f.a)(Object(f.b)(m,"nweets"),u);case 13:s(""),l("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:d,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(w.a,{icon:C.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;l(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:j,style:{backgroundImage:j},alt:"#"}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return l("")},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(w.a,{icon:C.c})]})]})]})})},_=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(u.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=Object(f.h)(Object(f.b)(m,"nweets"),Object(f.g)("createdAt","desc"));Object(f.f)(e,(function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(A,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(I,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},B=function(e){var t=e.refreshUser,n=e.userObj,a=Object(j.f)(),r=Object(c.useState)(n.displayName),s=Object(u.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(O.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===i){e.next=4;break}return e.next=4,Object(p.h)(n,{displayName:i});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:l,className:"profileForm",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:i,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){x.signOut(),a.push("/")},children:"Log Out"})]})},U=function(e){var t=e.userObj;return Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsxs)("li",{children:[Object(g.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(g.jsx)(w.a,{icon:N.c,color:"#04AAFF",size:"2x"})})," "]}),Object(g.jsx)("li",{children:Object(g.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(w.a,{icon:C.e,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})},D=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(g.jsxs)(o.a,{children:[n&&Object(g.jsx)(U,{userObj:c}),Object(g.jsx)(j.c,{children:n?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(_,{userObj:c})}),Object(g.jsx)(j.a,{exact:!0,path:"/profile",children:Object(g.jsx)(B,{userObj:c,refreshUser:t})})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(k,{})})})})]})};var E=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(u.a)(r,2),o=s[0],j=s[1];return Object(c.useEffect)((function(){Object(p.e)(x,(function(e){e?(null===e.displayName&&Object(p.h)(e,{displayName:"User"}),j(e)):j(null),a(!0)}))}),[]),Object(g.jsx)(g.Fragment,{children:n?Object(g.jsx)(D,{refreshUser:function(){var e=x.currentUser;j(Object(i.a)({},e)),j(e)},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};n(67);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f49dbddf.chunk.js.map