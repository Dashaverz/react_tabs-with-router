(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),n=c.n(a),s=c(8),i=(c(28),c(29),c(30),c(0)),b=c.n(i),j=c(2),r=c(17),l=c.n(r),d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=c(3),x=b.a.memo((function(e){var t=e.selectedTab;return Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})})),h=function(e){var t=e.tab;return Object(o.jsx)(s.b,{to:"/tabs/".concat(t.id),children:t.title})},O=b.a.memo((function(){var e=Object(j.p)().tabId,t=void 0===e?"0":e,c=d.find((function(e){return e.id===t}))||null;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"Tabs page"}),Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:d.map((function(e){return Object(o.jsx)("li",{"data-cy":"Tab",className:l()({"is-active":e.id===t}),children:Object(o.jsx)(h,{tab:e})},e.id)}))})}),Object(o.jsx)(x,{selectedTab:c})]})})),m=function(e){var t=e.to,c=e.text;return Object(o.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},children:c})},u=function(){return Object(o.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(m,{to:"/",text:"Home"}),Object(o.jsx)(m,{to:"/tabs",text:"Tabs"})]})})})},v=function(){return Object(o.jsx)("h1",{className:"title",children:"Home page"})},p=function(){return Object(o.jsx)("h1",{className:"title",children:"Home page"})},f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{path:"/",element:Object(o.jsx)(v,{})}),Object(o.jsx)(j.b,{path:"/home",element:Object(o.jsx)(j.a,{to:"/",replace:!0})}),Object(o.jsxs)(j.b,{path:"tabs",children:[Object(o.jsx)(j.b,{index:!0,element:Object(o.jsx)(O,{})}),Object(o.jsx)(j.b,{path:":tabId",element:Object(o.jsx)(O,{})})]}),Object(o.jsx)(j.b,{path:"*",element:Object(o.jsx)(p,{})})]})})})]})};n.a.render(Object(o.jsx)(s.a,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.18b3f468.chunk.js.map