"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(r,e,n){n.r(e),n.d(e,{default:function(){return b}});var t,a,o,c=n(9439),i=n(7689),s=n(2791),d=n(7367),p=n(1087),u=n(168),l=n(4313),h=l.ZP.ul(t||(t=(0,u.Z)(["\n  margin-top: 20px;\n  margin-bottom: 90px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),x=l.ZP.li(a||(a=(0,u.Z)(["\n  border: 1px solid var(--border-color);\n  max-width: 220px;\n  padding: 10px;\n  background: var(--background-header);\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n"]))),m=l.ZP.p(o||(o=(0,u.Z)(["\n  color: var(--color);\n"]))),f=n(184);var b=function(){var r=(0,i.UO)().movieId,e=(0,s.useState)([]),n=(0,c.Z)(e,2),t=n[0],a=n[1],o=(0,s.useState)(!0),u=(0,c.Z)(o,2),l=u[0],b=u[1],g=(0,s.useState)(null),v=(0,c.Z)(g,2),j=v[0],w=v[1];return(0,s.useEffect)((function(){b(!0),d.Z.fetchMovieCredits(r).then((function(r){a(r.cast),b(!1)})).catch((function(r){w(r),b(!1)}))}),[r]),l?(0,f.jsx)("p",{children:"Loading..."}):j?(0,f.jsx)("p",{children:j.message}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(h,{children:t&&t.length>0?t.map((function(r){var e=r.profile_path,n=r.name,t=r.id;return(0,f.jsx)(p.rU,{to:"/actors/movies/".concat(t,"/actors-info"),children:(0,f.jsxs)(x,{children:[(0,f.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://via.placeholder.com/200x300",alt:n,width:200}),(0,f.jsx)(m,{children:n})]},t)},t)})):(0,f.jsx)("p",{children:"No cast members found"})})})}}}]);
//# sourceMappingURL=387.1aa02f26.chunk.js.map