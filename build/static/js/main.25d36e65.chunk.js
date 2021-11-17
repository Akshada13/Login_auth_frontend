(this.webpackJsonplogin_auth_frontend=this.webpackJsonplogin_auth_frontend||[]).push([[0],{38:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(30),c=a.n(n),o=(a(38),a(12)),i=a(3),l=a(17),u=a(33),p=a(0),j=["component"],d=function(e){var t=e.component,a=Object(u.a)(e,j);return Object(p.jsx)(i.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return localStorage.getItem("authToken")?Object(p.jsx)(t,Object(l.a)({},e)):Object(p.jsx)(i.a,{to:"/login"})}}))},b=a(5),m=a.n(b),h=a(10),O=a(2),f=a(11),g=a.n(f),x=(a(64),function(e){var t=e.history,a=Object(r.useState)(""),s=Object(O.a)(a,2),n=s[0],c=s[1],o=Object(r.useState)(""),i=Object(O.a)(o,2),l=i[0],u=i[1];Object(r.useEffect)((function(){localStorage.getItem("authToken")||t.push("/login");var e=function(){var e=Object(h.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},e.prev=1,e.next=4,g.a.get("https://login-auth123.herokuapp.com/api/private",t);case 4:a=e.sent,r=a.data,u(r.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),localStorage.removeItem("authToken"),c("You are not authorized please login");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return n?Object(p.jsx)("span",{className:"error-message",children:n}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:l}),Object(p.jsx)("button",{onClick:function(){localStorage.removeItem("authToken"),t.push("/login")},children:"LogOut"})]})}),v=(a(65),function(e){var t=e.history,a=Object(r.useState)(""),s=Object(O.a)(a,2),n=s[0],c=s[1],i=Object(r.useState)(""),l=Object(O.a)(i,2),u=l[0],j=l[1],d=Object(r.useState)(""),b=Object(O.a)(d,2),f=b[0],x=b[1];Object(r.useEffect)((function(){localStorage.getItem("authToken")&&t.push("/")}),[t]);var v=function(){var e=Object(h.a)(m.a.mark((function e(a){var r,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,g.a.post("https://login-auth123.herokuapp.com/api/auth/login",{email:n,password:u},r);case 5:s=e.sent,c=s.data,localStorage.setItem("authToken",c.token),t.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),x(e.t0.response.data.error),setTimeout((function(){x("")}),5e3);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"login-screen",children:Object(p.jsxs)("form",{onSubmit:v,className:"login-screen__form",children:[Object(p.jsx)("h3",{className:"login-screen__title",children:"Login"}),f&&Object(p.jsx)("span",{className:"error-message",children:f}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"email",className:"formTag",children:"Email:"}),Object(p.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",onChange:function(e){return c(e.target.value)},value:n,tabIndex:1})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("label",{htmlFor:"password",className:"formTag",children:["Password:"," "]}),Object(p.jsx)("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",onChange:function(e){return j(e.target.value)},value:u,tabIndex:2})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(p.jsxs)("span",{className:"login-screen__subtext",children:["Don't have an account? ",Object(p.jsx)(o.b,{to:"/register",children:"Register"})]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(o.b,{to:"/forgotpassword",className:"login-screen__forgotpassword",children:"Forgot Password?"})]})]})})}),w=(a(66),function(e){var t=e.history,a=Object(r.useState)(""),s=Object(O.a)(a,2),n=s[0],c=s[1],i=Object(r.useState)(""),l=Object(O.a)(i,2),u=l[0],j=l[1],d=Object(r.useState)(""),b=Object(O.a)(d,2),f=b[0],x=b[1],v=Object(r.useState)(""),w=Object(O.a)(v,2),N=w[0],k=w[1],S=Object(r.useState)(""),y=Object(O.a)(S,2),_=y[0],C=y[1];Object(r.useEffect)((function(){localStorage.getItem("authToken")&&t.push("/")}),[t]);var T=function(){var e=Object(h.a)(m.a.mark((function e(a){var r,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r={header:{"Content-Type":"application/json"}},f===N){e.next=7;break}return x(""),k(""),setTimeout((function(){C("")}),5e3),e.abrupt("return",C("Passwords do not match"));case 7:return e.prev=7,e.next=10,g.a.post("https://login-auth123.herokuapp.com/api/auth/register",{username:n,email:u,password:f},r);case 10:s=e.sent,c=s.data,localStorage.setItem("authToken",c.token),t.push("/"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),C(e.t0.response.data.error),setTimeout((function(){C("")}),5e3);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"register-screen",children:Object(p.jsxs)("form",{onSubmit:T,className:"register-screen__form",children:[Object(p.jsx)("h3",{className:"register-screen__title",children:"Register"}),_&&Object(p.jsx)("span",{className:"error-message",children:_}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:"Username:"}),Object(p.jsx)("input",{type:"text",required:!0,id:"name",placeholder:"Enter username",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(p.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(p.jsx)("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:f,onChange:function(e){return x(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm Password:"}),Object(p.jsx)("input",{type:"password",required:!0,id:"confirmpassword",autoComplete:"true",placeholder:"Confirm password",value:N,onChange:function(e){return k(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"}),Object(p.jsxs)("span",{className:"register-screen__subtext",children:["Already have an account? ",Object(p.jsx)(o.b,{to:"/login",children:"Login"})]})]})})}),N=(a(67),function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(""),c=Object(O.a)(n,2),o=c[0],i=c[1],l=Object(r.useState)(""),u=Object(O.a)(l,2),j=u[0],d=u[1],b=function(){var e=Object(h.a)(m.a.mark((function e(t){var r,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,g.a.post("https://login-auth123.herokuapp.com/api/auth/forgotpassword",{email:a},r);case 5:n=e.sent,c=n.data,d(c.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),i(e.t0.response.data.error),s(""),setTimeout((function(){i("")}),5e3);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"forgotpassword-screen",children:Object(p.jsxs)("form",{onSubmit:b,className:"forgotpassword-screen__form",children:[Object(p.jsx)("h3",{className:"forgotpassword-screen__title",children:"Forgot Password"}),o&&Object(p.jsx)("span",{className:"error-message",children:o}),j&&Object(p.jsx)("span",{className:"success-message",children:j}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("p",{className:"forgotpassword-screen__subtext",children:"Please enter the registered email."}),Object(p.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(p.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Email"})]})})}),k=(a(68),function(e){var t=e.match,a=Object(r.useState)(""),s=Object(O.a)(a,2),n=s[0],c=s[1],i=Object(r.useState)(""),l=Object(O.a)(i,2),u=l[0],j=l[1],d=Object(r.useState)(""),b=Object(O.a)(d,2),f=b[0],x=b[1],v=Object(r.useState)(""),w=Object(O.a)(v,2),N=w[0],k=w[1],S=function(){var e=Object(h.a)(m.a.mark((function e(a){var r,s,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r={header:{"Content-Type":"application/json"}},n===u){e.next=7;break}return c(""),j(""),setTimeout((function(){x("")}),5e3),e.abrupt("return",x("Passwords don't match"));case 7:return e.prev=7,e.next=10,g.a.put("https://login-auth123.herokuapp.com/api/auth/passwordreset/".concat(t.params.resetToken),{password:n},r);case 10:s=e.sent,o=s.data,console.log(o),k(o.data),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),x(e.t0.response.data.error),setTimeout((function(){x("")}),5e3);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"resetpassword-screen",children:Object(p.jsxs)("form",{onSubmit:S,className:"resetpassword-screen__form",children:[Object(p.jsx)("h3",{className:"resetpassword-screen__title",children:"Forgot Password"}),f&&Object(p.jsxs)("span",{className:"error-message",children:[f," "]}),N&&Object(p.jsxs)("span",{className:"success-message",children:[N," ",Object(p.jsx)(o.b,{to:"/login",children:"Login"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"password",children:"New Password:"}),Object(p.jsx)("input",{type:"password",required:!0,id:"password",placeholder:"Enter new password",autoComplete:"true",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm New Password:"}),Object(p.jsx)("input",{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",autoComplete:"true",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Reset Password"})]})})}),S=function(){return Object(p.jsx)(o.a,{children:Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)(i.d,{children:[Object(p.jsx)(d,{exact:!0,path:"/",component:x}),Object(p.jsx)(i.b,{exact:!0,path:"/login",component:v}),Object(p.jsx)(i.b,{exact:!0,path:"/register",component:w}),Object(p.jsx)(i.b,{exact:!0,path:"/forgotpassword",component:N}),Object(p.jsx)(i.b,{exact:!0,path:"/passwordreset/:resetToken",component:k})]})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),y()}},[[69,1,2]]]);
//# sourceMappingURL=main.25d36e65.chunk.js.map