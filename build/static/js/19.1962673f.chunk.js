(this.webpackJsonptokshop=this.webpackJsonptokshop||[]).push([[19],{185:function(e,t,a){"use strict";var s=a(3),l=a(7),c=a(0),n=a(63),r=a(206),i=a(92),o=a(68),d=a(65),b=a(207),j=a(236);function x(e){return Object(j.a)("MuiTableBody",e)}Object(b.a)("MuiTableBody",["root"]);var h=a(1);const O=["className","component"],m=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),u={variant:"body"},p="tbody",g=c.forwardRef((function(e,t){const a=Object(o.a)({props:e,name:"MuiTableBody"}),{className:c,component:d=p}=a,b=Object(l.a)(a,O),j=Object(s.a)({},a,{component:d}),g=(e=>{const{classes:t}=e;return Object(r.a)({root:["root"]},x,t)})(j);return Object(h.jsx)(i.a.Provider,{value:u,children:Object(h.jsx)(m,Object(s.a)({className:Object(n.a)(g.root,c),as:d,ref:t,role:d===p?null:"rowgroup",ownerState:j},b))})}));t.a=g},186:function(e,t,a){"use strict";var s=a(3),l=a(7),c=a(0),n=a(63),r=a(206),i=a(210),o=a(92),d=a(68),b=a(65),j=a(207),x=a(236);function h(e){return Object(x.a)("MuiTableRow",e)}var O=Object(j.a)("MuiTableRow",["root","selected","hover","head","footer"]),m=a(1);const u=["className","component","hover","selected"],p=Object(b.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((e=>{let{theme:t}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${O.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${O.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Object(i.a)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:Object(i.a)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}}})),g="tr",f=c.forwardRef((function(e,t){const a=Object(d.a)({props:e,name:"MuiTableRow"}),{className:i,component:b=g,hover:j=!1,selected:x=!1}=a,O=Object(l.a)(a,u),f=c.useContext(o.a),v=Object(s.a)({},a,{component:b,hover:j,selected:x,head:f&&"head"===f.variant,footer:f&&"footer"===f.variant}),w=(e=>{const{classes:t,selected:a,hover:s,head:l,footer:c}=e,n={root:["root",a&&"selected",s&&"hover",l&&"head",c&&"footer"]};return Object(r.a)(n,h,t)})(v);return Object(m.jsx)(p,Object(s.a)({as:b,ref:t,className:Object(n.a)(w.root,i),role:b===g?null:"row",ownerState:v},O))}));t.a=f},221:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a(16),c=a(47),n=a(55),r=a(61),i=a(50),o=a(46),d=a(45),b=a(44),j=a.n(b),x=a(91),h=a(48),O=a(56),m=a(43),u=a(1);var p=e=>{let{packages:t,openEdit:a,startDelete:s,openDetails:c}=e;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.TableBody,{children:null===t||void 0===t?void 0:t.map((e=>Object(u.jsxs)(l.TableRow,{children:[Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.title})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.plan})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.price})," "]}),Object(u.jsx)(l.TableCell,{children:Object(u.jsx)("span",{className:"text-sm",children:b(e.createdAt).format("MMM D, YYYY")})}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.numberOfProducts})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{children:e.isActive?Object(u.jsx)(h.b,{className:"text-green-500 text-2xl"}):Object(u.jsx)(O.a,{className:"text-red-500 text-xl"})})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{onClick:()=>c(e),className:"text-lg hover:text-yellow-300 duration-300 cursor-pointer",children:Object(u.jsx)(m.r,{})})," "]}),Object(u.jsx)(l.TableCell,{children:Object(u.jsx)(x.a,{id:e._id,title:e.title,openEdit:a,startDelete:s})})]},e._id)))})})};var g=e=>{let{closeHandler:t}=e;const[a,c]=Object(s.useState)(""),[n,r]=Object(s.useState)(""),[i,o]=Object(s.useState)(""),[d,b]=Object(s.useState)("free"),[j,x]=Object(s.useState)(""),[m,p]=Object(s.useState)(!1);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(l.Card,{className:"mt-10 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:[Object(u.jsx)("div",{className:"p-2 bg-gray-700 shadow-md border-gray-900 text-white m-2 inline-block rounded cursor-pointer",onClick:()=>{t(),p(!1)},children:Object(u.jsx)(O.b,{})}),Object(u.jsxs)(l.CardBody,{className:"flex flex-col justify-start",children:[j&&Object(u.jsxs)("p",{className:"mb-5 bg-red-600 text-white font-semibold p-2 rounded flex items-center gap-2",children:[Object(u.jsx)(h.j,{className:"text-2xl text-yellow-200"})," ",j]}),Object(u.jsxs)("div",{className:"mb-5 flex flex-col gap-4",children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{className:"text-white font-semibold",children:"Title"}),Object(u.jsx)("input",{type:"text",onChange:e=>c(e.target.value),value:a,className:"p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{className:"text-white font-semibold",children:"Price"}),Object(u.jsx)("input",{type:"number",onChange:e=>r(e.target.value),value:n,className:"p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{className:"text-white font-semibold mb-3",children:"Plan"}),Object(u.jsxs)(l.Select,{onChange:e=>b(e.target.value),children:[Object(u.jsx)("option",{value:"free",children:"Free"}),Object(u.jsx)("option",{value:"weekly",children:"Weekly"}),Object(u.jsx)("option",{value:"monthly",children:"Monthly"}),Object(u.jsx)("option",{value:"secondary",children:"Secondary"})]})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{className:"text-white font-semibold",children:"Number Of Products"}),Object(u.jsx)("input",{type:"number",onChange:e=>o(e.target.value),value:i,className:"p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"})]})]}),Object(u.jsx)("button",{disabled:m,onClick:()=>{p(!0),(()=>{if(console.log(""===a),""===a||""===n||""===i||""===d)return p(!1),x("Please Enter Non Empty Values");const e={title:a,price:n,numberOfProducts:i,plan:d},s="https://mix-mart.online/packages";console.log("URL => ",s),console.log("Data => ",e),fetch(s,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)return p(!1),x("Something Went Wrong, Please Refresh And Try Again");e.json()})).then((e=>{console.log(e),x(""),t(),p(!1),window.location.reload()}))})()},className:"bg-green-500 text-white rounded p-3 font-semibold hover:bg-green-600 duration-300 focus:outline-none",children:"Create Package"})]})]})})};var f=e=>{let{closeHandler:t,data:a}=e;const[c,n]=Object(s.useState)(a.title),[r,i]=Object(s.useState)(a.price),[o,d]=Object(s.useState)(a.numberOfProducts),[b,j]=Object(s.useState)(a.isActive),[x,m]=Object(s.useState)(""),[p,g]=Object(s.useState)(!1);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(l.Card,{className:"mt-10 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:[Object(u.jsx)("div",{className:"p-2 bg-gray-700 shadow-md border-gray-900 text-white m-2 inline-block rounded cursor-pointer",onClick:()=>{t(),g(!1)},children:Object(u.jsx)(O.b,{})}),Object(u.jsxs)(l.CardBody,{className:"flex flex-col justify-start",children:[x&&Object(u.jsxs)("p",{className:"mb-5 bg-red-600 text-white font-semibold p-2 rounded flex items-center gap-2",children:[Object(u.jsx)(h.j,{className:"text-2xl text-yellow-200"})," ",x]}),Object(u.jsxs)("div",{className:"mb-5 flex flex-col gap-4",children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{className:"text-white font-semibold",children:"Title"}),Object(u.jsx)("input",{onChange:e=>n(e.target.value),value:c,className:"p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{className:"text-white font-semibold",children:"Price"}),Object(u.jsx)("input",{type:"number",onChange:e=>i(e.target.value),value:r,className:"p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{className:"text-white font-semibold",children:"Number Of Products"}),Object(u.jsx)("input",{type:"number",onChange:e=>d(e.target.value),value:o,className:"p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"})]}),Object(u.jsxs)("label",{className:"flex items-center gap-4",children:[Object(u.jsx)("p",{className:"text-white font-semibold",children:"Is Active"}),Object(u.jsx)("input",{type:"checkbox",onChange:()=>j((e=>!e)),checked:b,className:"w-5 h-5"})]})]}),Object(u.jsx)("button",{disabled:p,onClick:()=>{g(!0),(()=>{if(""===c||""===r||""===o)return g(!1),m("Please Enter Non Empty Values");const e={title:c,price:r,numberOfProducts:o,isActive:b},s="https://mix-mart.online/packages/"+a._id;fetch(s,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)return m("Something Went Wrong, Please Refresh And Try Again");e.json()})).then((e=>{m(""),t(),g(!1),window.location.reload()}))})()},className:"bg-green-500 text-white rounded p-3 font-semibold hover:bg-green-600 duration-300 focus:outline-none",children:"Update Package"})]})]})})};var v=e=>{let{closeHandler:t,id:a,title:c}=e;const[n,r]=Object(s.useState)("");return Object(u.jsxs)(l.Card,{className:"mt-10 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:[Object(u.jsx)("div",{className:"p-2 bg-gray-700 shadow-md border-gray-900 text-white m-2 inline-block rounded cursor-pointer",onClick:t,children:Object(u.jsx)(O.b,{})}),n&&Object(u.jsxs)("p",{className:"mb-5 bg-red-600 text-white font-semibold p-2 rounded flex items-center gap-2",children:[Object(u.jsx)(h.j,{className:"text-2xl text-yellow-200"})," ",n]}),Object(u.jsxs)(l.CardBody,{className:"flex flex-col justify-start pt-0",children:[Object(u.jsxs)("p",{className:"text-center text-white mb-4 font-semibold",children:['Are You Sure You Want To Delete "',c,'" ?']}),Object(u.jsxs)("div",{className:"flex justify-center gap-5",children:[Object(u.jsx)("button",{onClick:t,className:"bg-gray-600 text-white rounded py-2 px-5 font-semibold hover:bg-gray-700 duration-300 focus:outline-none",children:"Cancel"}),Object(u.jsx)("button",{onClick:()=>{fetch("https://mix-mart.online/packages/"+a,{method:"DELETE"}).then((e=>{if(!e.ok)return r("Something Went Wrong, Please Refresh And Try Again");e.json()})).then((e=>{t(),window.location.reload()}))},className:"bg-red-600 text-white rounded py-2 px-5 font-semibold hover:bg-red-700 duration-300 focus:outline-none",children:"Delete Package"})]})]})]})};var w=e=>{let{subs:t}=e;return console.log(t,"Table"),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.TableBody,{children:null===t||void 0===t?void 0:t.map((e=>Object(u.jsxs)(l.TableRow,{children:[Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.userId?e.userId.firstName:"No User"})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.details})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.status})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:j()(e.expiryDate).format("MMM D, YYYY")})," "]})]},e._id)))})})},C=a(185),y=a(186);var N=e=>{let{closeHandler:t,packData:a}=e;console.log(a._id);const{data:s,loading:d}=Object(c.a)((()=>o.a.getAllSubs(a._id))),{userRef:b,setRole:x,handleChangePage:m,totalResults:p,resultsPerPage:g,dataTable:f,serviceData:v,handleSubmitUser:N}=Object(n.a)(s.subscriptions);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.Card,{className:"mt-10 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:[Object(u.jsx)("div",{className:"p-2 bg-gray-700 shadow-md border-gray-900 text-white m-2 inline-block rounded cursor-pointer",onClick:()=>{t()},children:Object(u.jsx)(O.b,{})}),Object(u.jsx)(l.CardBody,{className:"flex flex-col justify-start",children:Object(u.jsx)(l.TableContainer,{className:"mb-8 rounded-b-lg",children:Object(u.jsxs)(l.Table,{children:[Object(u.jsx)(l.TableHeader,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)(l.TableCell,{children:"Title"}),Object(u.jsx)(l.TableCell,{children:"Plan"}),Object(u.jsx)(l.TableCell,{children:"Price"}),Object(u.jsx)(l.TableCell,{children:"Created At"}),Object(u.jsx)(l.TableCell,{children:"Products"}),Object(u.jsx)(l.TableCell,{children:"Is Active"})]})}),Object(u.jsx)(C.a,{children:Object(u.jsxs)(y.a,{children:[Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm text-white",children:a.title})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm text-white",children:a.plan})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm text-white",children:a.price})," "]}),Object(u.jsx)(l.TableCell,{children:Object(u.jsx)("span",{className:"text-sm text-white",children:j()(a.createdAt).format("MMM D, YYYY")})}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm text-white",children:a.numberOfProducts})," "]}),Object(u.jsxs)(l.TableCell,{children:[Object(u.jsx)("span",{children:a.isActive?Object(u.jsx)(h.b,{className:"text-green-500 text-2xl"}):Object(u.jsx)(O.a,{className:"text-red-500 text-xl"})})," "]})]},a._id)})]})})})]}),Object(u.jsx)(l.Card,{children:Object(u.jsxs)(l.CardBody,{children:[Object(u.jsxs)("h2",{className:"text-xl mb-2 text-white uppercase font-semibold",children:["[ ",a.title," ] Supscripers"]}),d?Object(u.jsx)(i.a,{loading:d}):0!==p?Object(u.jsxs)(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[Object(u.jsxs)(l.Table,{children:[Object(u.jsx)(l.TableHeader,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)(l.TableCell,{children:"Name"}),Object(u.jsx)(l.TableCell,{children:"Details"}),Object(u.jsx)(l.TableCell,{children:"Status"}),Object(u.jsx)(l.TableCell,{children:"Expire Date"})]})}),Object(u.jsx)(w,{subs:f})]}),Object(u.jsx)(l.TableFooter,{children:Object(u.jsx)(l.Pagination,{totalResults:p,resultsPerPage:g,onChange:m,label:"Table navigation"})})]}):Object(u.jsx)(r.a,{title:"Users"})]})})]})};t.default=()=>{const{data:e,loading:t}=Object(c.a)((()=>o.a.getAllPackages())),[a,b]=Object(s.useState)(!1),[j,x]=Object(s.useState)({state:!1,data:"",id:""}),[h,O]=Object(s.useState)({state:!1,id:"",title:""}),[m,w]=Object(s.useState)({state:!1,packData:"",data:{}}),C=()=>{x({state:!1,packData:"",data:"",id:""}),b(!1),O({state:!1,id:"",title:""}),w({state:!1,packData:"",data:""})},{userRef:y,setRole:T,handleChangePage:k,totalResults:P,resultsPerPage:S,dataTable:D,serviceData:A,handleSubmitUser:R}=Object(n.a)(e.data);return Object(u.jsxs)(u.Fragment,{children:[a&&Object(u.jsx)(g,{closeHandler:C}),j.state&&Object(u.jsx)(f,{closeHandler:C,data:j.data}),h.state&&Object(u.jsx)(v,{closeHandler:C,id:h.id,title:h.title}),m.state&&Object(u.jsx)(N,{closeHandler:C,packData:m.packData}),Object(u.jsx)(d.a,{children:"All Packages"}),Object(u.jsx)(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:Object(u.jsx)(l.CardBody,{children:Object(u.jsx)(l.Button,{onClick:()=>{b(!0),x({state:!1,data:"",id:""}),O({state:!1,id:"",title:""})},children:"Add Package"})})}),t?Object(u.jsx)(i.a,{loading:t}):0!==A.length?Object(u.jsxs)(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[Object(u.jsxs)(l.Table,{children:[Object(u.jsx)(l.TableHeader,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)(l.TableCell,{children:"Title"}),Object(u.jsx)(l.TableCell,{children:"Plan"}),Object(u.jsx)(l.TableCell,{children:"Price"}),Object(u.jsx)(l.TableCell,{children:"Created At"}),Object(u.jsx)(l.TableCell,{children:"Products"}),Object(u.jsx)(l.TableCell,{children:"Is Active"}),Object(u.jsx)(l.TableCell,{children:"Details"}),Object(u.jsx)(l.TableCell,{className:"text-right",children:"Actions"})]})}),Object(u.jsx)(p,{packages:D,openEdit:e=>{x({state:!1,data:"",id:""});fetch("https://mix-mart.online/packages/"+e).then((e=>e.json())).then((t=>{x({state:!0,data:t.package,id:e}),b(!1),O({state:!1,id:"",title:""})}))},startDelete:(e,t)=>{O({state:!0,id:e,title:t}),x({state:!1,data:"",id:""}),b(!1)},openDetails:e=>{m.state&&C(),setTimeout((()=>{w({state:!0,packData:e})}),0),x({state:!1,data:"",id:""}),b(!1),O({state:!1,id:"",title:""})}})]}),Object(u.jsx)(l.TableFooter,{children:Object(u.jsx)(l.Pagination,{totalResults:P,resultsPerPage:S,onChange:k,label:"Table navigation"})})]}):Object(u.jsx)(r.a,{title:"Packages"})]})}},91:function(e,t,a){"use strict";a(0);var s=a(43),l=a(62),c=a(1);t.a=e=>{let{id:t,openEdit:a,startDelete:n,title:r}=e;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"flex justify-end text-right",children:[Object(c.jsx)("div",{onClick:()=>a(t),className:"p-2 cursor-pointer text-gray-400 hover:text-green-600",children:Object(c.jsx)(l.a,{id:"edit",Icon:s.c,title:"Edit",bgColor:"#10B981"})}),Object(c.jsx)("div",{onClick:()=>n(t,r),className:"p-2 cursor-pointer text-gray-400 hover:text-red-600",children:Object(c.jsx)(l.a,{id:"delete",Icon:s.l,title:"Delete",bgColor:"#EF4444"})})]})})}},92:function(e,t,a){"use strict";var s=a(0);const l=s.createContext();t.a=l}}]);
//# sourceMappingURL=19.1962673f.chunk.js.map