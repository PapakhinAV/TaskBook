(this.webpackJsonpbeejee=this.webpackJsonpbeejee||[]).push([[0],{12:function(e,t,a){e.exports={Main:"New_task_Main__1jnxC",TaskBlock:"New_task_TaskBlock__2zDMq",ButtonSize:"New_task_ButtonSize__w2MS1",newTaskInput:"New_task_newTaskInput__3NQal",newClassLable:"New_task_newClassLable__2c6WF"}},13:function(e,t,a){e.exports={MainBlock:"TaskHeader_MainBlock__1Rx0o",ElementBlockUsername:"TaskHeader_ElementBlockUsername__1WnjL",ElementBlockEmail:"TaskHeader_ElementBlockEmail__2f2pr",ElementBlockTask:"TaskHeader_ElementBlockTask__EslR6",ElementBlockStatus:"TaskHeader_ElementBlockStatus__3gtEW",ElementBlockStatusChange:"TaskHeader_ElementBlockStatusChange__1Gfuc",SortButtons:"TaskHeader_SortButtons__2-nXh"}},15:function(e,t,a){e.exports={MainBlock:"Task_MainBlock__1LL5Y",ElementBlockUsername:"Task_ElementBlockUsername__27-v_",ElementBlockEmail:"Task_ElementBlockEmail__18FZR",ElementBlockTask:"Task_ElementBlockTask__3FCgZ",ElementBlockStatus:"Task_ElementBlockStatus__vRhLt",SortButtons:"Task_SortButtons__2g4z3",ButtonSize:"Task_ButtonSize__29Lqs"}},18:function(e,t,a){e.exports={Main:"Login_Main__MClif",TaskBlock:"Login_TaskBlock__wtZJM",ButtonSize:"Login_ButtonSize__2g-l3",newTaskInput:"Login_newTaskInput__3DWZj",newClassLable:"Login_newClassLable__3uM77"}},26:function(e,t,a){e.exports={headerFlexParams:"Header_headerFlexParams__2DLVJ",buttonSize:"Header_buttonSize__2KHRC"}},32:function(e,t,a){e.exports={Main:"TasksBlock_Main__2EzQ8",TaskBlock:"TasksBlock_TaskBlock__3lTnX"}},35:function(e,t,a){e.exports={MainBlock:"MainPage_MainBlock__25CAM"}},36:function(e,t,a){e.exports={MainBlock:"Pagination_MainBlock__3EIVQ",ElementBlock:"Pagination_ElementBlock__3utg1"}},37:function(e,t,a){e.exports={MainBlock:"PaginationBar_MainBlock__xPs99"}},52:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(23),i=a.n(r),l=a(26),o=a.n(l),u=a(5),d=function(e){return Object(n.jsx)("button",{type:"button",className:"btn btn-outline-primary mx-3 w-100",children:e.title})},j=a(20),b=a(3),m=a.n(b),p=a(7),k="ADD_NEW_TASK",h="CHANGE_ADMIN_STATUS",x="ADD_NEW_TASK_CONTROLLER",O=function(e){return{type:x,payload:e}},v=function(e){return{type:h,payload:e}},f=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a,n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(v(e));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a,n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(v(e)),localStorage.removeItem("redux");case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},w=function(e,t,a,n){return function(){var s=Object(p.a)(m.a.mark((function s(c,r){var i,l;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(i=new FormData).append("status",e),i.append("token",t),s.next=6,fetch("https://uxcandy.com/~shapoval/test-task-backend/v2/edit/".concat(a,"?developer=PapakhinAV"),{method:"POST",body:i});case 6:return l=s.sent,s.next=9,l.json();case 9:if("ok"!==s.sent.status){s.next=12;break}return s.abrupt("return",n("Task ".concat(a," changed at ").concat(new Date,"!")));case 12:s.next=17;break;case 14:s.prev=14,s.t0=s.catch(0),alert(s.t0);case 17:case"end":return s.stop()}}),s,null,[[0,14]])})));return function(e,t){return s.apply(this,arguments)}}()},B=function(e,t,a,n){return function(){var s=Object(p.a)(m.a.mark((function s(c,r){var i,l;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(i=new FormData).append("text","!@#Edited: ".concat(e)),i.append("token",t),s.next=6,fetch("https://uxcandy.com/~shapoval/test-task-backend/v2/edit/".concat(a,"?developer=PapakhinAV"),{method:"POST",body:i});case 6:return l=s.sent,s.next=9,l.json();case 9:if("ok"!==s.sent.status){s.next=12;break}return s.abrupt("return",n("Task ".concat(a," changed at ").concat(new Date,"!")));case 12:s.next=16;break;case 14:s.prev=14,s.t0=s.catch(0);case 16:case"end":return s.stop()}}),s,null,[[0,14]])})));return function(e,t){return s.apply(this,arguments)}}()},S=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.Admin_status}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:o.a.headerFlexParams,children:t?Object(n.jsx)("div",{onClick:function(){e(_(!1))},className:o.a.buttonSize,children:Object(n.jsx)(d,{title:"Sign Out"})}):Object(n.jsx)("div",{className:o.a.buttonSize,children:Object(n.jsx)(j.b,{to:"/login",children:Object(n.jsx)(d,{title:"Sign In"})})})}),Object(n.jsx)("hr",{})]})},g=a(4),N=a(35),T=a.n(N),E=a(17),y=a(14),C=a(10),M=a(12),L=a.n(M),P=function(){var e=Object(u.b)(),t=Object(s.useState)({username:"",email:"",taskContent:""}),a=Object(C.a)(t,2),c=a[0],r=a[1];function i(e){var t=e.target,a=t.name,n=t.value;r(Object(y.a)(Object(y.a)({},c),{},Object(E.a)({},a,n)))}c.username,c.email,c.taskContent;return Object(n.jsx)("div",{className:L.a.Main,children:Object(n.jsxs)("div",{className:L.a.TaskBlock,children:[Object(n.jsx)("div",{children:"Add a new task"}),Object(n.jsxs)("form",{onSubmit:function(t){var a;t.preventDefault(),e((a=c,function(){var e=Object(p.a)(m.a.mark((function e(t,n){var s,c,r,i,l,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.username,c=a.email,r=a.taskContent,(i=new FormData).append("email",c),i.append("text",r),i.append("username",s),e.next=7,fetch("https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=PapakhinAV",{method:"POST",body:i});case 7:if(200!==(l=e.sent).status){e.next=14;break}return e.next=11,l.json();case 11:o=e.sent,alert("The task was registered successfully"),t(O("Last Task id - ".concat(o.message.id)));case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))},children:[Object(n.jsxs)("div",{className:L.a.newTaskInput,children:[Object(n.jsx)("label",{className:L.a.newClassLable,htmlFor:"email",children:"E-mail: "}),Object(n.jsx)("input",{onChange:i,required:!0,type:"email",id:"email",size:"30",name:"email",placeholder:"enter E-mail"})]}),Object(n.jsxs)("div",{className:L.a.newTaskInput,children:[Object(n.jsx)("label",{className:L.a.newClassLable,htmlFor:"username",children:"Username: "}),Object(n.jsx)("input",{onChange:i,required:!0,type:"text",id:"username",size:"30",name:"username",placeholder:"enter Username"})]}),Object(n.jsxs)("div",{className:L.a.newTaskInput,children:[Object(n.jsx)("label",{className:L.a.newClassLable,htmlFor:"taskContent",children:"Task: "}),Object(n.jsx)("textarea",{onChange:i,id:"taskContent",name:"taskContent",placeholder:"enter your Task",cols:"33",rows:"4"})]}),Object(n.jsx)("div",{className:L.a.ButtonSize,children:Object(n.jsx)("button",{className:"btn btn-outline-primary mx-3 w-100",children:"ADD"})})]})]})})},z=a(32),A=a.n(z),D=a(13),I=a.n(D),F=function(e){var t=e.setSort_direction,a=e.setSort_field,s=Object(u.c)((function(e){return e.Admin_status}));return Object(n.jsxs)("div",{className:I.a.MainBlock,children:[Object(n.jsxs)("div",{className:I.a.ElementBlockUsername,children:[Object(n.jsx)("div",{children:"Username"}),Object(n.jsxs)("div",{className:I.a.SortButtons,children:[Object(n.jsx)("div",{onClick:function(){t("asc"),a("username")},children:"\ud83d\udd3c"}),Object(n.jsx)("div",{onClick:function(){t("desc"),a("username")},children:"\ud83d\udd3d"})]})]}),Object(n.jsxs)("div",{className:I.a.ElementBlockEmail,children:[Object(n.jsx)("div",{children:"E-mail"}),Object(n.jsxs)("div",{className:I.a.SortButtons,children:[Object(n.jsx)("div",{onClick:function(){t("asc"),a("email")},children:"\ud83d\udd3c"}),Object(n.jsx)("div",{onClick:function(){t("desc"),a("email")},children:"\ud83d\udd3d"})]})]}),Object(n.jsx)("div",{className:I.a.ElementBlockTask,children:Object(n.jsx)("div",{children:"Task"})}),Object(n.jsxs)("div",{className:I.a.ElementBlockStatus,children:[Object(n.jsx)("div",{children:"Status"}),Object(n.jsxs)("div",{className:I.a.SortButtons,children:[Object(n.jsx)("div",{onClick:function(){t("asc"),a("status")},children:"\ud83d\udd3c"}),Object(n.jsx)("div",{onClick:function(){t("desc"),a("status")},children:"\ud83d\udd3d"})]})]}),s&&Object(n.jsx)("div",{className:I.a.ElementBlockStatusChange,children:Object(n.jsx)("div",{children:"Change Status"})})]})},U=a(15),H=a.n(U),J=function(e){var t=Object(u.c)((function(e){return e.Admin_status})),a=Object(g.f)(),c=Object(u.b)(),r=null;r="!@#Edited: "===e.data.text.slice(0,11)?e.data.text.slice(11):e.data.text;var i=Object(s.useState)({text:r}),l=Object(C.a)(i,2),o=l[0],d=l[1];function j(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(m.a.mark((function t(n){var s,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=localStorage.getItem("redux"),t.next=4,JSON.parse(s).Admin_status;case 4:r=t.sent,c(w(n,r,e.data.id,e.setChangeStatus)),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),alert("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f!"),c(_(!1)),a.push("/login");case 13:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(p.a)(m.a.mark((function t(n){var s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r===h){t.next=14;break}return t.prev=1,s=localStorage.getItem("redux"),t.next=5,JSON.parse(s).Admin_status;case 5:i=t.sent,c(B(n,i,e.data.id,e.setChangeStatus)),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),alert("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f!"),c(_(!1)),a.push("/login");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}var h=o.text,x=e.data.status;return Object(n.jsxs)("div",{className:H.a.MainBlock,children:[Object(n.jsx)("div",{className:H.a.ElementBlockUsername,children:Object(n.jsx)("p",{children:e.data.username})}),Object(n.jsx)("div",{className:H.a.ElementBlockEmail,children:Object(n.jsx)("p",{children:e.data.email})}),t?Object(n.jsxs)("div",{className:H.a.ElementBlockTask,children:[Object(n.jsx)("input",{onChange:function(e){var t=e.target,a=t.name,n=t.value;d(Object(y.a)(Object(y.a)({},o),{},Object(E.a)({},a,n)))},size:"20",name:"text",value:h,type:"text"}),Object(n.jsx)("button",{onClick:function(){!function(e){k.apply(this,arguments)}(h)},className:"btn btn-outline-primary mx-3 w-25",children:"Save!"})]}):Object(n.jsx)("div",{className:H.a.ElementBlockTask,children:Object(n.jsx)("p",{children:r})}),Object(n.jsxs)("div",{className:H.a.ElementBlockStatus,children:[10===x?Object(n.jsx)("div",{children:"Done"}):Object(n.jsx)("div",{children:"Not Done"}),t&&"!@#Edited: "===e.data.text.slice(0,11)?Object(n.jsx)("div",{children:"Edited"}):Object(n.jsx)("div",{})]}),t&&(x?Object(n.jsx)("div",{className:H.a.ButtonSize,children:Object(n.jsx)("button",{onClick:function(){j(0)},className:"btn btn-outline-primary mx-3 w-100",children:"Undo!"})}):Object(n.jsx)("div",{className:H.a.ButtonSize,children:Object(n.jsx)("button",{onClick:function(){j(10)},className:"btn btn-outline-primary mx-3 w-100",children:"Done!"})}))]})},R=a(36),V=a.n(R),W=function(e){var t=e.value,a=e.setPage;return Object(n.jsx)("div",{className:V.a.ElementBlock,children:Object(n.jsx)("p",{onClick:function(){a(t)},role:"button",className:"active page-link ",children:t})})},q=a(37),Z=a.n(q),K=function(e){for(var t=[],a=1;a<=e.value;a+=1)t.push(a);return Object(n.jsx)("div",{className:Z.a.MainBlock,children:t.map((function(t){return Object(n.jsx)(W,{value:t,setPage:e.setPage},t)}))})},Q=function(){var e=Object(u.c)((function(e){return e.addNewTask})),t=Object(s.useState)(1),a=Object(C.a)(t,2),c=a[0],r=a[1],i=Object(s.useState)("username"),l=Object(C.a)(i,2),o=l[0],d=l[1],j=Object(s.useState)("asc"),b=Object(C.a)(j,2),h=b[0],x=b[1],O=Object(s.useState)(""),v=Object(C.a)(O,2),f=v[0],_=v[1],w=Object(s.useState)(""),B=Object(C.a)(w,2),S=B[0],g=B[1],N=Object(u.b)();Object(s.useEffect)((function(){Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://uxcandy.com/~shapoval/test-task-backend/v2/?page=".concat(c,"&developer=PapakhinAV&sort_direction=").concat(h,"&sort_field=").concat(o),{});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),"ok"===a.status&&(_(Math.ceil(a.message.total_task_count/3)),N((n=a.message.tasks,{type:k,payload:n})));case 8:case"end":return e.stop()}var n}),e)})))()}),[c,o,h,e,S]);var T=Object(u.c)((function(e){return e.Tasks}));return Object(n.jsx)("div",{className:A.a.Main,children:Object(n.jsxs)("div",{className:A.a.TaskBlock,children:[Object(n.jsx)(F,{setSort_field:d,setSort_direction:x}),T.map((function(e){return Object(n.jsx)(J,{setChangeStatus:g,data:e},e.id)})),Object(n.jsx)(K,{value:f,setPage:r})]})})},G=function(){return Object(n.jsxs)("div",{className:T.a.MainBlock,children:[Object(n.jsx)(P,{}),Object(n.jsx)(Q,{})]})},X=a(18),Y=a.n(X),$=function(){var e=Object(g.f)(),t=Object(u.b)(),a=Object(s.useState)({username:"",email:"",taskContent:""}),c=Object(C.a)(a,2),r=c[0],i=c[1];function l(e){var t=e.target,a=t.name,n=t.value;i(Object(y.a)(Object(y.a)({},r),{},Object(E.a)({},a,n)))}var o=r.username,d=r.password;function j(){return(j=Object(p.a)(m.a.mark((function a(n){var s,c,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(s=new FormData).append("username",o),s.append("password",d),n.preventDefault(),a.next=6,fetch("https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=PapakhinAV",{method:"POST",body:s});case 6:return c=a.sent,a.next=9,c.json();case 9:"ok"===(r=a.sent).status?(t(f(r.message.token)),e.push("/")):alert("\u0412\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c");case 11:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.jsx)("div",{className:Y.a.Main,children:Object(n.jsxs)("div",{className:Y.a.TaskBlock,children:[Object(n.jsx)("div",{}),Object(n.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(n.jsxs)("div",{className:Y.a.newTaskInput,children:[Object(n.jsx)("label",{className:Y.a.newClassLable,htmlFor:"username",children:"Username: "}),Object(n.jsx)("input",{onChange:l,required:!0,type:"text",id:"username",size:"30",name:"username",placeholder:"enter Username"})]}),Object(n.jsxs)("div",{className:Y.a.newTaskInput,children:[Object(n.jsx)("label",{className:Y.a.newClassLable,htmlFor:"password",children:"Password "}),Object(n.jsx)("input",{onChange:l,required:!0,type:"password",id:"password",size:"30",name:"password",placeholder:"enter Password"})]}),Object(n.jsx)("div",{className:Y.a.ButtonSize,children:Object(n.jsx)("button",{className:"btn btn-outline-primary mx-3 w-100",children:"Sign In"})})]})]})})};var ee=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(S,{}),Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{exact:!0,path:"/",children:Object(n.jsx)(G,{})}),Object(n.jsx)(g.a,{exact:!0,path:"/login",children:Object(n.jsx)($,{})})]})]})})},te=a(16),ae=a(38),ne=a(39),se=function(){return JSON.parse(localStorage.getItem("redux"))||{Tasks:[],Admin_status:!1,addNewTask:""}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;default:return e}},re=a(40),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(re.a)(t.payload);default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;default:return e}},oe=Object(te.combineReducers)({Tasks:ie,Admin_status:ce,addNewTask:le}),ue=Object(te.createStore)(oe,se(),Object(ae.composeWithDevTools)(Object(te.applyMiddleware)(ne.a)));ue.subscribe((function(){localStorage.setItem("redux",JSON.stringify(ue.getState()))}));var de=ue;i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(u.a,{store:de,children:Object(n.jsx)(ee,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.3dbf56b2.chunk.js.map