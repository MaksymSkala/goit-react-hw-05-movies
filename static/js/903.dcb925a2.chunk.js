"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[903],{242:function(e,n){n.Z={API_KEY:"b662b9fff2623bc504b15ec3b1ecfc8f",BASE_URL:"https://api.themoviedb.org/3"}},903:function(e,n,t){function r(e,n,t,r,c,o,a){try{var i=e[o](a),s=i.value}catch(u){return void t(u)}i.done?n(s):Promise.resolve(s).then(r,c)}t.r(n),t.d(n,{default:function(){return S}});var c,o,a,i,s,u=t(439),l=t(757),p=t.n(l),d=t(791),f=t(87),h=t(168),v=t(867),x=v.ZP.div(c||(c=(0,h.Z)(["\n  text-align: center;\n  margin: 20px 0;\n"]))),m=v.ZP.input(o||(o=(0,h.Z)(["\n  width: 300px;\n  padding: 5px;\n  border: 1px solid #ccc;\n"]))),b=v.ZP.button(a||(a=(0,h.Z)(["\n  background-color: rgb(172, 168, 168);\n  color: #181616;\n  border-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n  margin-bottom: 10px;\n"]))),Z=v.ZP.ul(i||(i=(0,h.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),g=v.ZP.li(s||(s=(0,h.Z)(["\n  margin: 10px 0;\n"]))),k=t(242),w=t(184);var S=function(){var e=(0,d.useState)(""),n=(0,u.Z)(e,2),t=n[0],c=n[1],o=(0,d.useState)([]),a=(0,u.Z)(o,2),i=a[0],s=a[1],l=(0,d.useState)(!1),h=(0,u.Z)(l,2),v=h[0],S=h[1],P=function(){var e,n=(e=p().mark((function e(n){var t,r,c,o;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=k.Z.API_KEY,r=k.Z.BASE_URL,e.next=4,fetch("".concat(r,"/search/movie?api_key=").concat(t,"&query=").concat(n));case 4:if(!(c=e.sent).ok){e.next=12;break}return e.next=8,c.json();case 8:o=e.sent,s(o.results),e.next=13;break;case 12:console.error("Failed to fetch search results");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})),function(){var n=this,t=arguments;return new Promise((function(c,o){var a=e.apply(n,t);function i(e){r(a,c,o,i,s,"next",e)}function s(e){r(a,c,o,i,s,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,d.useEffect)((function(){if(v)S(!1);else{var e=localStorage.getItem("previousSearchTerm");e&&(c(e),P(e))}}),[v]),(0,w.jsxs)("div",{children:[(0,w.jsxs)(x,{children:[(0,w.jsx)(m,{type:"text",value:t,onChange:function(e){return c(e.target.value)},placeholder:"Enter a keyword to search"}),(0,w.jsx)(b,{onClick:function(){localStorage.setItem("previousSearchTerm",t),P(t)},children:"Search"})]}),(0,w.jsx)(Z,{children:i.map((function(e){return(0,w.jsx)(g,{children:(0,w.jsx)(f.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=903.dcb925a2.chunk.js.map