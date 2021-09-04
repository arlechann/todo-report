(this["webpackJsonptodo-report"]=this["webpackJsonptodo-report"]||[]).push([[0],{71:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),i=n.n(c),s=(n(71),n(13)),o=n(129),u=n(126),d=n(17),l=n(11),j=n(9),b=function(e){return function(t){return localStorage.setItem(e,JSON.stringify(t)),t}},O=function(e){return function(t){return Object(j.a)(Object(j.a)({},t),JSON.parse(localStorage.getItem(e)))}},x=function(e){localStorage.removeItem(e)},p=n(2),m={items:{},inProgress:[],done:[],nextId:1},h=Object(r.createContext)(m),f=Object(r.createContext)((function(){})),g=function(){return Object(r.useContext)(h)},v=function(){return Object(r.useContext)(f)},y={progress:0,dueDate:"",isProductive:!1,spentTimeMinutes:0,remarks:""},w=function(e,t,n){var r=[e[n],e[t]];return e[t]=r[0],e[n]=r[1],e},k=function(e){return function(t,n){var r=n.id,a=n[e];return Object(j.a)(Object(j.a)({},t),{},{items:Object(j.a)(Object(j.a)({},t.items),{},Object(l.a)({},r,Object(j.a)(Object(j.a)({},t.items[r]),{},Object(l.a)({},e,a))))})}},P=k("progress"),C=k("remarks"),T=k("spentTimeMinutes"),I=function(e,t){switch(t.type){case"add":return function(e,t){var n=Object(j.a)(Object(j.a)(Object(j.a)({},y),t.item),{},{id:e.nextId});return Object(j.a)(Object(j.a)({},e),{},{items:Object(j.a)(Object(j.a)({},e.items),{},Object(l.a)({},n.id,n)),inProgress:[].concat(Object(d.a)(e.inProgress),[n.id]),nextId:e.nextId+1})}(e,t.payload);case"up":return function(e,t){var n=t.index;return n-1<0||e.inProgress.length<=n?e:Object(j.a)(Object(j.a)({},e),{},{inProgress:w(Object(d.a)(e.inProgress),n-1,n)})}(e,t.payload);case"down":return function(e,t){var n=t.index;return n<0||e.inProgress.length<=n+1?e:Object(j.a)(Object(j.a)({},e),{},{inProgress:w(Object(d.a)(e.inProgress),n,n+1)})}(e,t.payload);case"done":return function(e,t){var n=t.id;return Object(j.a)(Object(j.a)({},e),{},{inProgress:e.inProgress.filter((function(e){return e!==n})),done:[].concat(Object(d.a)(e.done),[n])})}(e,t.payload);case"update progress":return P(e,t.payload);case"update remarks":return C(e,t.payload);case"update spent time":return T(e,t.payload);case"restore":return function(e,t){var n=t.id;return Object(j.a)(Object(j.a)({},e),{},{inProgress:[].concat(Object(d.a)(e.inProgress),[n]),done:e.done.filter((function(e){return e!==n}))})}(e,t.payload);case"all clear":return x(N),m;default:return e}},N="TodoContext",S=function(e){var t,n=Object(r.useReducer)(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){return n.reduce((function(e,t){return t(e)}),e.apply(void 0,arguments))}}(I,b(N)),null!==(t=e.initialState)&&void 0!==t?t:m,O(N)),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(p.jsx)(h.Provider,{value:c,children:Object(p.jsx)(f.Provider,{value:i,children:e.children})})},B={template:""},D=Object(r.createContext)(B),E=Object(r.createContext)((function(){})),L=function(){return Object(r.useContext)(D)},M=function(e,t){switch(t.type){case"set":return t.payload;case"reset":return x(R),B;default:return e}},R="ConfigContext",U=function(e){var t,n=Object(r.useReducer)(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){return n.reduce((function(e,t){return t(e)}),e.apply(void 0,arguments))}}(M,b(R)),null!==(t=e.initialState)&&void 0!==t?t:B,O(R)),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(p.jsx)(D.Provider,{value:c,children:Object(p.jsx)(E.Provider,{value:i,children:e.children})})},A=n(111),F=n(113),W=n(115),_=n(39),z=n(128),J=Object(A.a)((function(e){return{title:{display:"inline-block",width:"40%"},tab:{display:"inline-block",width:"80%",marginLeft:"auto"}}})),G=function(e){var t=J();return Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{position:"static",children:Object(p.jsxs)(W.a,{children:[Object(p.jsx)(_.a,{className:t.title,component:"h1",children:"Todo-Report"}),Object(p.jsx)(z.a,{className:t.tab,children:e.children})]})})})},V=n(116),Z=n(117),q=n(118),Y=n(119),H=n(131),K=n(127),Q=n(121),X=n(82),$=n(122),ee=n(123),te=n(124),ne=function(e,t){return("0".repeat(t)+e).slice(-t)},re=Object(A.a)((function(e){return{card:{margin:"auto",marginTop:"2rem",marginBottom:"2rem",width:"auto",maxWidth:600},moveBtn:{marginLeft:"auto"},restoreBtn:{marginLeft:"auto"}}})),ae=function(e){var t=e.item,n=e.dispatch,r=e.disabled,a=re(),c=0!==t.dueDate.length?t.dueDate.substring(t.dueDate.indexOf("-")+1).replace("-","/"):"\u672a\u8a2d\u5b9a",i=function(e){var t=ne(Math.floor(e/60),2),n=ne(e%60,2);return"".concat(t,":").concat(n)}(t.spentTimeMinutes),o=function(e){if(null==e)return 0;var t=e.split(":").map((function(e){return parseInt(e)})),n=Object(s.a)(t,2);return 60*n[0]+n[1]};return Object(p.jsxs)(V.a,{className:a.card,elevation:2,children:[Object(p.jsx)(Z.a,{title:"#".concat(t.id," ").concat(t.name)}),Object(p.jsxs)(q.a,{children:[Object(p.jsxs)(Y.a,{container:!0,alignItems:"center",children:[Object(p.jsx)(Y.a,{item:!0,xs:3,children:Object(p.jsxs)(_.a,{children:["\u671f\u9650 ",c]})}),Object(p.jsxs)(Y.a,{item:!0,xs:9,children:[Object(p.jsxs)(_.a,{children:["\u9032\u6357 ",t.progress,"%"]}),Object(p.jsx)(H.a,{value:t.progress,valueLabelDisplay:"auto",step:10,marks:!0,min:0,max:100,onChange:function(e,r){return n({type:"update progress",payload:{id:t.id,progress:r}})},disabled:r})]})]}),Object(p.jsxs)(Y.a,{container:!0,spaceing:2,alignItems:"flex-end",children:[Object(p.jsx)(Y.a,{item:!0,xs:3,children:Object(p.jsx)(_.a,{color:t.isProductive?"textPrimary":"textSecondary",children:t.isProductive?"\u751f\u7523":"\u975e\u751f\u7523"})}),Object(p.jsx)(Y.a,{item:!0,xs:2,children:Object(p.jsx)(K.a,{label:"\u6642\u9593",type:"time",value:i,InputLabelProps:{shrink:!0},inputProps:{step:1800},onChange:function(e){return n({type:"update spent time",payload:{id:t.id,spentTimeMinutes:o(e.target.value)}})},disabled:r})}),Object(p.jsx)(Y.a,{item:!0,xs:7,children:Object(p.jsx)(K.a,{label:"\u5099\u8003",type:"text",InputLabelProps:{shrink:!0},onChange:function(e){return n({type:"update remarks",payload:{id:t.id,remarks:e.target.value}})},fullWidth:!0})})]})]}),Object(p.jsx)(Q.a,{children:r?Object(p.jsx)(X.a,{className:a.restoreBtn,variant:"outlined",color:"default",size:"small",onClick:function(){return n({type:"restore",payload:{id:t.id}})},children:"\u623b\u3059"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)($.a,{className:a.moveBtn,variant:"outlined",color:"default",size:"small",children:[Object(p.jsx)(X.a,{onClick:function(){return n({type:"up",payload:{index:t.order}})},children:Object(p.jsx)(ee.a,{})}),Object(p.jsx)(X.a,{onClick:function(){return n({type:"down",payload:{index:t.order}})},children:Object(p.jsx)(te.a,{})})]}),Object(p.jsx)(X.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return n({type:"done",payload:{id:t.id}})},children:"\u5b8c\u4e86"})]})})]})},ce=function(e){var t=e.disabled?Object(d.a)(e.order).reverse():Object(d.a)(e.order);return Object(p.jsx)(z.a,{children:t.map((function(t,n){return Object(p.jsx)(ae,{item:Object(j.a)(Object(j.a)({},e.items[t]),{},{order:n}),dispatch:e.dispatch,disabled:e.disabled},t)}))})},ie=n(55),se=n(125),oe=n(130),ue=function(e){var t=Object(r.useState)(e),n=Object(s.a)(t,2),a=n[0],c=n[1];return{value:a,checked:a,onChange:function(e){return c("checkbox"===e.target.type?e.target.checked:e.target.value)}}},de=Object(A.a)((function(e){return{paper:{margin:"auto",marginTop:"2rem",marginBottom:"2rem",padding:"1rem",maxWidth:600,verticalAlign:"bottom"},marginZero:{margin:0}}})),le=function(e){var t=v(),n=ue(""),r=ue(""),a=ue(!1),c=de();return Object(p.jsx)(ie.a,{className:c.paper,elevation:2,children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault();var c={name:n.value,dueDate:r.value,isProductive:a.value};t({type:"add",payload:{item:c}})},children:Object(p.jsxs)(Y.a,{className:c.gridContainer,spacing:1,container:!0,alignItems:"flex-end",children:[Object(p.jsx)(Y.a,{item:!0,xs:12,children:Object(p.jsx)(K.a,Object(j.a)(Object(j.a)({label:"\u30bf\u30b9\u30af",type:"text",InputLabelProps:{shrink:!0}},n),{},{fullWidth:!0,required:!0}))}),Object(p.jsx)(Y.a,{item:!0,xs:4,children:Object(p.jsx)(K.a,Object(j.a)({label:"\u671f\u9650",type:"date",InputLabelProps:{shrink:!0}},r))}),Object(p.jsx)(Y.a,{item:!0,xs:4,children:Object(p.jsx)(se.a,{control:Object(p.jsx)(oe.a,Object(j.a)({className:c.marginZero,color:"primary"},a)),label:"\u751f\u7523\u7684",labelPlacement:"start"})}),Object(p.jsx)(Y.a,{item:!0,xs:2}),Object(p.jsx)(Y.a,{item:!0,xs:2,children:Object(p.jsx)(X.a,{type:"submit",variant:"contained",color:"default",children:"\u8ffd\u52a0"})})]})})})},je=function(e){var t=g(),n=v();return Object(p.jsxs)(z.a,{children:[Object(p.jsx)(ce,{items:t.items,order:t.inProgress,dispatch:n}),Object(p.jsx)(le,{dispatch:n})]})},be=function(e){var t=e.page,n=e.index,r=e.children;return Object(p.jsx)("div",{hidden:t!==n,children:t===n?r:null})},Oe=function(e){var t=g(),n=v();return Object(p.jsx)(z.a,{children:Object(p.jsx)(ce,{items:t.items,order:t.done,dispatch:n,disabled:!0})})},xe=n(120),pe=function(e){var t=Object(r.useState)(e),n=Object(s.a)(t,2),a=n[0],c=n[1];return{value:a,onChange:function(e){return c(e.target.value)}}},me=Object(A.a)((function(e){return{card:{margin:"auto",marginTop:"2rem",marginBottom:"2rem",width:"auto",maxWidth:600},textarea:{padding:"0.1rem",width:"100%",fontSize:"1rem"},actionBtn:{marginLeft:"auto"},deleteBtn:{display:"block",marginLeft:"auto"},saveBtn:{marginLeft:"0.5rem",marginRight:"0.5rem"},cancelBtn:{marginLeft:"0.5rem",marginRight:"0.5rem"}}})),he=function(e){var t=L(),n=Object(r.useContext)(E),a=v(),c=me(),i=pe(t.template);return Object(p.jsx)(z.a,{children:Object(p.jsxs)(V.a,{className:c.card,elevation:2,children:[Object(p.jsx)(Z.a,{title:"\u8a2d\u5b9a"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={template:i.value};n({type:"set",payload:t})},children:[Object(p.jsxs)(q.a,{children:[Object(p.jsxs)(Y.a,{container:!0,children:[Object(p.jsx)(Y.a,{item:!0,xs:8,children:Object(p.jsx)(_.a,{children:"LocalStorage\u306e\u30c7\u30fc\u30bf\u306e\u524a\u9664"})}),Object(p.jsx)(Y.a,{item:!0,xs:4,children:Object(p.jsx)(X.a,{className:c.deleteBtn,variant:"contained",color:"secondary",onClick:function(e){a({type:"all clear"}),n({type:"reset"})},children:"\u524a\u9664"})})]}),Object(p.jsxs)(Y.a,{container:!0,direction:"column",children:[Object(p.jsx)(Y.a,{container:!0,children:Object(p.jsx)(Y.a,{item:!0,xs:8,children:Object(p.jsx)(_.a,{children:"\u30ec\u30dd\u30fc\u30c8\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"})})}),Object(p.jsx)(Y.a,{item:!0,xs:12,children:Object(p.jsx)(xe.a,Object(j.a)({className:c.textarea,minRows:3},i))})]})]}),Object(p.jsx)(Q.a,{children:Object(p.jsxs)(z.a,{className:c.actionBtn,children:[Object(p.jsx)(X.a,{className:c.saveBtn,type:"submit",variant:"contained",color:"primary",children:"\u4fdd\u5b58"}),Object(p.jsx)(X.a,{className:c.cancelBtn,variant:"outlined",color:"secondary",onClick:function(e){},children:"\u30ea\u30bb\u30c3\u30c8"})]})})]})]})})},fe=n(45),ge=[{keyword:"%%",get:function(){return"%"}},{keyword:"%TODAY%",get:function(){return function(e){var t=ne(e.getMonth()+1,2),n=ne(e.getDate(),2);return"".concat(t,"/").concat(n)}(new Date)}},{keyword:"%ORDER%",get:function(e){return e.order+1}},{keyword:"%NAME%",get:function(e){var t=e.state,n=e.id;return t.items[n].name}},{keyword:"%DUE_DATE%",get:function(e){var t=e.state,n=e.id;return t.items[n].dueDate}},{keyword:"%PROGRESS%",get:function(e){var t=e.state,n=e.id;return t.items[n].progress}},{keyword:"%SPENT_TIME%",get:function(e){var t,n=e.state,r=e.id;return t=n.items[r].spentTimeMinutes,Math.floor(t/60)+t%60/60}},{keyword:"%PRODUCTIVE%",get:function(e){var t=e.state,n=e.id;return t.items[n].isProductive?"\u751f\u7523":"\u975e\u751f\u7523"}},{keyword:"%PRODUCTIVE_TIME_PERCENT%",get:function(e){var t=e.state,n=t.inProgress.reduce((function(e,n){return e+t.items[n].spentTimeMinutes}),0);return Math.floor(100*n/390)}}],ve=function e(t){Object(fe.a)(this,e),this.message=t,this.name="TemplateParseError"},ye=function(e,t,n){if("%"===e[t])return we(e,t,n);for(var r=t+1;r<e.length;r++)if("%"===e[r])return n.push({type:"text",text:e.substring(t,r)}),we(e,r,n);return n.push({type:"text",text:e.substring(t)}),n},we=function(e,t,n){for(var r=t+1;r<e.length;r++)if("%"===e[r])return n.push({type:"keyword",text:e.substring(t,r+1)}),ye(e,r+1,n);throw new ve("Unexpected end of template.")},ke="%LIST_BEGIN%",Pe="%LIST_END%",Ce=function(e,t,n){for(var r=t;r<e.length;r++)if("text"!==e[r].type)switch(e[r].text){case ke:throw new ve("Unexpected keyword ".concat(ke));case Pe:return[n,r];default:n.push(e[r])}else n.push(e[r]);throw new ve('Unexpected end of template. "'.concat(Pe,'" not found.'))},Te=function(e){return function(e,t,n){for(var r=t;r<e.length;r++)if("text"!==e[r].type)switch(e[r].text){case ke:var a=Ce(e,r+1,[]),c=Object(s.a)(a,2),i=c[0],o=c[1];n.push(i),r=o;break;case Pe:throw new ve("Unexpected keyword ".concat(Pe));default:n.push(e[r])}else n.push(e[r]);return n}(e,0,[])},Ie=function(e,t,n,r){var a=Object.fromEntries(ge.map((function(e){return[e.keyword,e.get]})));if(a.hasOwnProperty(e.text))return a[e.text]({state:t,id:n,order:r}).toString();throw new ve('Unknown keyword "'.concat(e.text,'".'))},Ne=function(e,t){return e.map((function(e){if(e instanceof Array)return function(e,t){return t.inProgress.map((function(n,r){return e.map((function(e){switch(e.type){case"text":return e.text;case"keyword":return Ie(e,t,n,r);default:throw new ve("Unexpected token type.")}})).join("")})).join("")}(e,t);switch(e.type){case"text":return e.text;case"keyword":return Ie(e,t,null,null);default:throw new ve("Unexpected token type.")}})).join("")},Se=function(e,t){try{var n=function(e){return ye(e,0,[])}(e),r=Te(n);return Ne(r,t)}catch(a){if(a instanceof ve)return a.message;throw a}},Be=Object(A.a)((function(e){return{card:{margin:"auto",marginTop:"2rem",marginBottom:"2rem",width:"auto",maxWidth:600}}})),De=function(e){var t=Be(),n=g(),a=L(),c=Se(a.template,n);return Object(p.jsxs)(V.a,{className:t.card,children:[Object(p.jsx)(Z.a,{title:"\u30ec\u30dd\u30fc\u30c8"}),Object(p.jsx)(q.a,{children:Object(p.jsx)(z.a,{children:c.split("\n").map((function(e,t){return Object(p.jsxs)(r.Fragment,{children:[e,Object(p.jsx)("br",{})]},"report-content-".concat(t))}))})})]})},Ee=function(e){return Object(p.jsxs)("main",{children:[Object(p.jsx)(be,{page:e.page,index:0,children:Object(p.jsx)(je,{})}),Object(p.jsx)(be,{page:e.page,index:1,children:Object(p.jsx)(Oe,{})}),Object(p.jsx)(be,{page:e.page,index:2,children:Object(p.jsx)(De,{})}),Object(p.jsx)(be,{page:e.page,index:3,children:Object(p.jsx)(he,{})})]})},Le=(n(78),function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(G,{page:n,children:Object(p.jsxs)(o.a,{value:n,onChange:function(e,t){return a(t)},children:[Object(p.jsx)(u.a,{label:"in progress"}),Object(p.jsx)(u.a,{label:"done"}),Object(p.jsx)(u.a,{label:"report"}),Object(p.jsx)(u.a,{label:"config"})]})}),Object(p.jsx)(U,{children:Object(p.jsx)(S,{children:Object(p.jsx)(Ee,{page:n})})})]})}),Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};n(79);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Le,{})}),document.getElementById("root")),Me()}},[[80,1,2]]]);
//# sourceMappingURL=main.f461a91b.chunk.js.map