(this.webpackJsonptokshop=this.webpackJsonptokshop||[]).push([[17],{108:function(e,t,s){"use strict";s(0);var r=s(12),a=s(44),l=s(16),d=s(72),c=s(43),n=s(62),i=s(93),o=s(1);t.a=e=>{let{orders:t}=e;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l.TableBody,{children:null===t||void 0===t?void 0:t.map(((e,t)=>Object(o.jsxs)(l.TableRow,{children:[Object(o.jsx)(l.TableCell,{children:Object(o.jsx)("span",{className:"text-sm",children:a(e.createdAt).format("MMM D, YYYY")})}),Object(o.jsx)(l.TableCell,{children:Object(o.jsx)("span",{className:"text-sm",children:e.customerId.firstName})}),Object(o.jsxs)(l.TableCell,{children:[" ","$",Object(o.jsx)("span",{className:"text-sm",children:e.servicefee})," "]}),Object(o.jsxs)(l.TableCell,{children:[" ",Object(o.jsxs)("span",{className:"text-sm font-semibold",children:["$",Math.round(e.totalCost),".00"]})," "]}),Object(o.jsx)(l.TableCell,{className:"text-center text-xs",children:Object(o.jsx)(d.a,{status:e.status})}),Object(o.jsx)(l.TableCell,{className:"text-center",children:Object(o.jsx)(i.a,{id:e._id,order:e})}),Object(o.jsx)(l.TableCell,{className:"text-right flex justify-end",children:Object(o.jsxs)("div",{className:"p-2 cursor-pointer text-gray-400 hover:text-green-600",children:[" ",Object(o.jsx)(r.b,{to:`/order/${e._id}`,children:Object(o.jsx)(n.a,{id:"view",Icon:c.r,title:"View Invoice",bgColor:"#34D399"})})]})})]},t+1)))})})}},213:function(e,t,s){"use strict";s.r(t);var r=s(0),a=s(129),l=s(16),d=s(48),c=s(47),n=s(55),i=s(61),o=s(60),j=s(50),u=s(108),b=s(45),h=s(17),x=s(11),g=s(1);t.default=()=>{const{state:e,dispatch:t}=Object(r.useContext)(x.a),{adminInfo:s}=e,{time:O,setTime:p,currentPage:m,searchText:v,searchRef:f,status:C,setStatus:y,handleChangePage:$,handleSubmitForAll:T,resultsPerPage:N}=Object(r.useContext)(h.a),{data:w,loading:D}=Object(c.a)((()=>o.a.getAllOrders({contact:v,status:C,page:m,limit:N,day:O,userid:"shopowner"==s.role?s._id:""}))),{dataTable:P,serviceData:S}=Object(n.a)(w.orders);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{children:"Orders"}),Object(g.jsx)(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:Object(g.jsx)(l.CardBody,{children:Object(g.jsxs)("form",{onSubmit:T,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:grid-cols-4 xl:grid-cols-4",children:[Object(g.jsx)("div",{children:Object(g.jsx)(l.Input,{ref:f,type:"search",className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",placeholder:"Search by invoice"})}),Object(g.jsx)("div",{children:Object(g.jsxs)(l.Select,{onChange:e=>y(e.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[Object(g.jsx)("option",{value:"Status",defaultValue:!0,hidden:!0,children:"Status"}),Object(g.jsx)("option",{value:"Delivered",children:"Delivered"}),Object(g.jsx)("option",{value:"Pending",children:"Pending"}),Object(g.jsx)("option",{value:"Processed",children:"Processing"}),Object(g.jsx)("option",{value:"Cancel",children:"Cancel"})]})}),Object(g.jsx)("div",{children:Object(g.jsxs)(l.Select,{onChange:e=>p(e.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[Object(g.jsx)("option",{value:"Order limits",defaultValue:!0,hidden:!0,children:"Order limits"}),Object(g.jsx)("option",{value:"5",children:"Last 5 days orders"}),Object(g.jsx)("option",{value:"7",children:"Last 7 days orders"}),Object(g.jsx)("option",{value:"15",children:"Last 15 days orders"}),Object(g.jsx)("option",{value:"30",children:"Last 30 days orders"})]})}),Object(g.jsx)("div",{children:Object(g.jsx)(a.a,{data:S,filename:"orders",children:Object(g.jsxs)("button",{type:"button",className:"flex items-center justify-center text-sm leading-5 h-12 text-center transition-colors duration-150 font-medium focus:outline-none px-6 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto",children:["Download all Orders",Object(g.jsx)("span",{className:"ml-2 text-base",children:Object(g.jsx)(d.e,{})})]})})})]})})}),D?Object(g.jsx)(j.a,{loading:D}):0!==S.length?Object(g.jsxs)(l.TableContainer,{className:"mb-8",children:[Object(g.jsxs)(l.Table,{children:[Object(g.jsx)(l.TableHeader,{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)(l.TableCell,{children:"Order Date"}),Object(g.jsx)(l.TableCell,{children:"Customer Name"}),Object(g.jsx)(l.TableCell,{children:"Service Fee"}),Object(g.jsx)(l.TableCell,{children:"Amount"}),Object(g.jsx)(l.TableCell,{className:"text-center",children:"Status"}),Object(g.jsx)(l.TableCell,{className:"text-center",children:"Action"}),Object(g.jsx)(l.TableCell,{className:"text-right",children:"Invoice"})]})}),Object(g.jsx)(u.a,{orders:P})]}),Object(g.jsx)(l.TableFooter,{children:Object(g.jsx)(l.Pagination,{totalResults:null===w||void 0===w?void 0:w.totalDoc,resultsPerPage:N,onChange:$,label:"Table navigation"})})]}):Object(g.jsx)(i.a,{title:"Order"})]})}},60:function(e,t,s){"use strict";var r=s(49);s(11),s(53);const a={getAllOrders(e){let{body:t,headers:s,contact:a,status:l,page:d=1,limit:c=8,day:n,userid:i=""}=e;const o=null!==a?a:"",j=null!==l?l:"",u=null!==n?n:"",b=null!==i?i:"";return r.a.get(`/orders/all/orders?contact=${o}&status=${j}&day=${u}&page=${d}&limit=${c}&userid=${b}`,t,s)},getRecentOrders(e){let{page:t=1,limit:s=8,startDate:a="1:00",endDate:l="23:59"}=e;return r.a.get(`/orders/recent?page=${t}&limit=${s}&startDate=${a}&endDate=${l}`)},getOrderAndSalesChart(e){let{startDate:t="1:00",endDate:s="23:59"}=e;return r.a.get(`/orders/sales/chart?startDate=${t}&endDate=${s}`)},getBestSellerProductChart(e){let{shopid:t=""}=e;return console.log("shopid",t),r.a.get(`/orders/dashboard/orders/best-seller/chart?shopid=${t}`)},async getDashboardOrdersData(e){let{page:t=1,limit:s=8,userid:a="",role:l="",shopid:d=""}=e;const c=null!==a?a:"";return"shopowner"==l?r.a.get(`/orders/dashboard/orders/shopowner?page=${t}&limit=${s}&userid=${c}&shopid=${d}`):r.a.get(`/orders/dashboard/orders?page=${t}&limit=${s}&userid=${c}`)},getOrderByUser:(e,t)=>r.a.get(`/orders/user/${e}`,t),getOrderById:(e,t)=>r.a.get(`/orders/orders/${e}`,t),updateOrder:(e,t,s)=>r.a.put(`/orders/orders/${e}`,t,s),deleteOrder:e=>r.a.delete(`/orders/${e}`)};t.a=a},72:function(e,t,s){"use strict";s(0);var r=s(16),a=s(1);t.a=e=>{let{status:t}=e;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("span",{className:"font-serif",children:["completed"===t&&Object(a.jsx)(r.Badge,{type:"success",children:t}),"pending"===t&&Object(a.jsx)(r.Badge,{type:"warning",children:t}),"processing"===t&&Object(a.jsx)(r.Badge,{children:t}),"shipped"===t&&Object(a.jsx)(r.Badge,{children:t}),"delivered"===t&&Object(a.jsx)(r.Badge,{type:"success",children:t}),"cancelled"===t&&Object(a.jsx)(r.Badge,{type:"danger",children:t})]})})}},93:function(e,t,s){"use strict";var r=s(0),a=s(16),l=s(60),d=s(18),c=s(17),n=s(1);t.a=e=>{let{id:t,order:s}=e;const{setIsUpdate:i}=Object(r.useContext)(c.a);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(a.Select,{onChange:e=>((e,t)=>{l.a.updateOrder(e,{status:t}).then((e=>{Object(d.c)(e.message),i(!0)})).catch((e=>Object(d.b)(e.message)))})(t,e.target.value),className:"border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none",children:[Object(n.jsx)("option",{value:"status",defaultValue:!0,hidden:!0,children:null===s||void 0===s?void 0:s.status}),Object(n.jsx)("option",{defaultValue:"completed"===(null===s||void 0===s?void 0:s.status),value:"completed",children:"Completed"}),Object(n.jsx)("option",{defaultValue:"pending"===(null===s||void 0===s?void 0:s.status),value:"pending",children:"Pending"}),Object(n.jsx)("option",{defaultValue:"processing"===(null===s||void 0===s?void 0:s.status),value:"processing",children:"Processing"}),Object(n.jsx)("option",{defaultValue:"refunded"===(null===s||void 0===s?void 0:s.status),value:"refunded",children:"Refunded"}),Object(n.jsx)("option",{defaultValue:"on-hold"===(null===s||void 0===s?void 0:s.status),value:"on-hold",children:"On Hold"}),Object(n.jsx)("option",{defaultValue:"failed"===(null===s||void 0===s?void 0:s.status),value:"failed",children:"Failed"}),Object(n.jsx)("option",{defaultValue:"cancelled"===(null===s||void 0===s?void 0:s.status),value:"cancelled",children:"Cancelled"})]})})}}}]);
//# sourceMappingURL=17.56629957.chunk.js.map