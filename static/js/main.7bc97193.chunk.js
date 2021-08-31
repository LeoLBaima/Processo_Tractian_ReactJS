(this.webpackJsonptractian=this.webpackJsonptractian||[]).push([[0],{21:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(15),l=i.n(n),d=i(3),a=(i(21),i(0));function r(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{className:"logo-title",children:"Traction Test"})}),Object(a.jsx)("div",{className:"line"})]})}i(23),i(24);function o(e){var t,i,s,n,l=Object(c.useState)(0),r=Object(d.a)(l,2),o=r[0],j=r[1];return Object(c.useEffect)((function(){var t=localStorage.getItem("temp".concat(null===e||void 0===e?void 0:e.id));t&&j(JSON.parse(t))}),[e.id]),Object(c.useEffect)((function(){localStorage.setItem("temp".concat(null===e||void 0===e?void 0:e.id),JSON.stringify(o))})),Object(a.jsx)("div",{className:"modal",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("button",{className:"close-btn",onClick:e.onClose}),Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["Asset: ",null===e||void 0===e?void 0:e.name]}),Object(a.jsxs)("li",{children:["Id: ",null===e||void 0===e?void 0:e.id]}),Object(a.jsxs)("li",{children:["Sensor: ",null===e||void 0===e?void 0:e.sensors]}),Object(a.jsxs)("li",{children:["Model: ",null===e||void 0===e?void 0:e.model]}),Object(a.jsxs)("li",{children:["Temp: ",null===e||void 0===e?void 0:e.status]}),Object(a.jsxs)("li",{children:["Healthscore: ",null===e||void 0===e?void 0:e.healthscore]}),Object(a.jsxs)("li",{children:["Max Temperature: ",o>0?o.toString():null===(t=e.specifications)||void 0===t?void 0:t.maxTemp]}),Object(a.jsxs)("li",{children:["Total Collects Uptime: ",null===(i=e.metrics)||void 0===i?void 0:i.totalCollectsUptime]}),Object(a.jsxs)("li",{children:["Total Uptime: ",null===(s=e.metrics)||void 0===s?void 0:s.totalUptime]}),Object(a.jsxs)("li",{children:["Last Uptime At: ",null===(n=e.metrics)||void 0===n?void 0:n.lastUptimeAt]}),Object(a.jsxs)("li",{children:["Unit id: ",null===e||void 0===e?void 0:e.unitId]}),Object(a.jsxs)("li",{children:["Company id: ",null===e||void 0===e?void 0:e.companyId]})]},e.id),Object(a.jsx)("input",{className:"input-modal",type:"number",placeholder:"Insira a temperatura m\xe1xima",onChange:function(e){var t=parseInt(e.target.value);j(t)}})]})]})})}function j(e){var t=Object(c.useState)(!1),i=Object(d.a)(t,2),s=i[0],n=i[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"card",onClick:function(){return n(!0)},children:Object(a.jsx)("a",{href:"#start",className:"link-card",children:Object(a.jsx)("img",{src:e.image,alt:null===e||void 0===e?void 0:e.name})})}),Object(a.jsx)("p",{className:"card-title",children:e.title}),Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{children:Object(a.jsx)(o,{onClose:function(){return n(!1)},name:null===e||void 0===e?void 0:e.name,id:null===e||void 0===e?void 0:e.id,sensors:null===e||void 0===e?void 0:e.sensors,model:null===e||void 0===e?void 0:e.model,status:null===e||void 0===e?void 0:e.status,healthscore:null===e||void 0===e?void 0:e.healthscore,specifications:null===e||void 0===e?void 0:e.specifications,metrics:null===e||void 0===e?void 0:e.metrics,unitId:null===e||void 0===e?void 0:e.unitId,companyId:null===e||void 0===e?void 0:e.companyId},e.id)},e.id):null})]})}var h=i(16),b=i.n(h).a.create({baseURL:"https://my-json-server.typicode.com/tractian/fake-api"}),m=(i(43),i(4)),u=i.n(m),v=i(6),O=i.n(v);function x(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),i=t[0],s=t[1],n=Object(c.useState)([]),l=Object(d.a)(n,2),o=l[0],h=l[1],m=Object(c.useState)([]),v=Object(d.a)(m,2),x=v[0],p=v[1],f=Object(c.useState)([]),N=Object(d.a)(f,2),g=N[0],I=N[1],y=[],S=[0,0,0];Object(c.useEffect)((function(){b.get("/assets",{params:{limit:1}}).then((function(e){s(e.data)})),b.get("/users",{params:{limit:1}}).then((function(e){h(e.data)})),b.get("/units",{params:{limit:1}}).then((function(e){I(e.data)})),b.get("/companies",{params:{limit:1}}).then((function(e){p(e.data)}))}),[]),function(){for(var e=0;e<i.length;e++)y.push(i[e].healthscore)}(),function(){for(var e=0;e<i.length;e++)"inAlert"===i[e].status?S[0]=S[0]+1:"inDowntime"===i[e].status?S[1]=S[1]+1:S[2]=S[2]+1}();var C={chart:{type:"line"},title:{text:""},series:[{type:"line",name:"Sa\xfade",data:y}]},U={chart:{type:"bar"},title:{text:""},xAxis:{categories:["In alert","In downtime","In operation"]},series:[{name:"Valores",data:S}]};return Object(a.jsxs)("div",{id:"start",children:[Object(a.jsx)(r,{}),Object(a.jsx)("h1",{className:"title",children:"Ativos"}),Object(a.jsx)("div",{className:"assets",children:i.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(j,{image:null===e||void 0===e?void 0:e.image,title:null===e||void 0===e?void 0:e.name,name:null===e||void 0===e?void 0:e.name,id:null===e||void 0===e?void 0:e.id,sensors:null===e||void 0===e?void 0:e.sensors,model:null===e||void 0===e?void 0:e.model,status:null===e||void 0===e?void 0:e.status,healthscore:null===e||void 0===e?void 0:e.healthscore,specifications:null===e||void 0===e?void 0:e.specifications,metrics:null===e||void 0===e?void 0:e.metrics,unitId:null===e||void 0===e?void 0:e.unitId,companyId:null===e||void 0===e?void 0:e.companyId},e.id)},e.id)}))}),Object(a.jsx)("h1",{className:"title",children:"Empresas"}),Object(a.jsx)("table",{className:"table",children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Empresa"}),Object(a.jsx)("th",{children:"Id"})]}),x.map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.id})]})})}))]})}),Object(a.jsx)("h1",{className:"title",children:"Usu\xe1rios"}),Object(a.jsx)("table",{className:"table",children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Nome"}),Object(a.jsx)("th",{children:"email"}),Object(a.jsx)("th",{children:"Company Id"}),Object(a.jsx)("th",{children:"Id"})]}),o.map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.companyId}),Object(a.jsx)("td",{children:e.id})]})})}))]})}),Object(a.jsx)("h1",{className:"title",children:"Unidades"}),Object(a.jsx)("table",{className:"table",children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Nome"}),Object(a.jsx)("th",{children:"Company Id"}),Object(a.jsx)("th",{children:"Id"})]}),g.map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.companyId}),Object(a.jsx)("td",{children:e.id})]})})}))]})}),Object(a.jsxs)("div",{className:"charts-container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"title",children:"Sa\xfade"}),Object(a.jsx)("div",{className:"chart",children:Object(a.jsx)(O.a,{highcharts:u.a,options:C})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"title",children:"Status"}),Object(a.jsx)("div",{className:"chart",children:Object(a.jsx)(O.a,{highcharts:u.a,options:U})})]})]})]})}var p=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(x,{})})};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7bc97193.chunk.js.map