"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{3342:function(n,t,e){e.d(t,{Z:function(){return o}});var a="ButtonBack_btnBack__tjozC",r=e(184),o=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{className:a,type:"button",children:"\u2190 Go Back"})})}},4332:function(n,t,e){e.d(t,{Z:function(){return D}});var a,r,o,i,c,s,l,u,d,g,f,h,p,v,m=e(1087),Z=e(7689),x="MoviesList_moviesList__P6SP5",_="MoviesList_moviesItem__r+0sq",b=e(168),y=e(4313),k=y.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"]))),j=y.ZP.div(r||(r=(0,b.Z)(["\n  overflow: hidden;\n  margin-bottom: 5px;\n"]))),w=y.ZP.img(o||(o=(0,b.Z)(["\n  max-width: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n  -webkit-transition: transform 0.4s;\n  -moz-transition: transform 0.4s;\n  -ms-transition: transform 0.4s;\n  -o-transition: transform 0.4s;\n\n  &:hover {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n"]))),P=y.ZP.h3(i||(i=(0,b.Z)(["\n  max-width: 300px;\n  color: var(--color);\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: auto;\n"]))),A=y.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n"]))),N=y.ZP.span(s||(s=(0,b.Z)(["\n  font-size: 10px;\n  color: gold;\n"]))),M=y.ZP.span(l||(l=(0,b.Z)(["\n  font-size: 10px;\n  color: gray;\n"]))),C=y.ZP.p(u||(u=(0,b.Z)(["\n  color: rgb(36, 35, 35);\n  font-size: 10px;\n"]))),z=y.ZP.span(d||(d=(0,b.Z)(["\n  font-size: 8px;\n"]))),B=y.ZP.p(g||(g=(0,b.Z)(["\n  color: red;\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: auto;\n"]))),F=(0,y.iv)(f||(f=(0,b.Z)(["\n  background: #f85032;\n  background: -webkit-linear-gradient(to right, #e73827, #f85032);\n  background: linear-gradient(to right, #e73827, #f85032);\n"]))),S=(0,y.iv)(h||(h=(0,b.Z)(["\n  background: #f7971e;\n  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);\n  background: linear-gradient(to right, #ffd200, #f7971e);\n  color: rgb(36, 35, 35);\n"]))),L=(0,y.iv)(p||(p=(0,b.Z)(["\n  background: #000000;\n  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);\n  background: linear-gradient(to right, #0f9b0f, #000000);\n  color: #fff;\n"]))),T=y.ZP.div(v||(v=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 10px;\n  heigth: 10px;\n  padding: 5px;\n  font-weight: bold;\n  margin-left: 10px;\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-red\n  &.rating-red {\n    ","\n  }\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-yellow\n  &.rating-yellow {\n    ","\n  }\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-green\n  &.rating-green {\n    ","\n  }\n"])),F,S,L),q=e(184);var R=function(n){var t=n.poster_path,e=n.title,a=n.vote_average,r=n.release_date,o=10*a,i=Math.floor(o/10),c=Array.from({length:10},(function(n,t){return t<i?(0,q.jsx)(N,{children:"\u2605"},"star-".concat(t)):(0,q.jsx)(M,{children:"\u2605"},"star-".concat(t))})),s=function(n){return n<=4?"red":n<7?"yellow":"green"}(a),l="rating-".concat(s);return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(k,{children:[(0,q.jsx)(j,{children:(0,q.jsx)(w,{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://via.placeholder.com/300x400",alt:e,width:300})}),(0,q.jsx)(P,{children:e||"Movie without a title"}),(0,q.jsxs)(A,{children:[(0,q.jsx)(C,{children:a?c:"N/A"}),(0,q.jsx)(T,{className:l,children:(0,q.jsx)(z,{children:a?a.toFixed(1):"N/A"})}),(0,q.jsx)(B,{children:r?r.slice(0,4):"N/A"})]})]})})};var D=function(n){var t=n.movies,e=(0,Z.TH)();return(0,q.jsx)("ul",{className:x,children:t.map((function(n,t){var a=n.id,r=n.poster_path,o=n.title,i=n.vote_average,c=n.release_date;return(0,q.jsx)("li",{className:_,children:(0,q.jsx)(m.rU,{to:"/movies/".concat(a),state:{from:e},children:(0,q.jsx)(R,{id:a,poster_path:r,title:o,vote_average:i,release_date:c},a)})},"".concat(a,"-").concat(t))}))})}},8676:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var a,r,o,i=e(9439),c=e(5700),s=e(4332),l=e(1312),u=e(168),d=e(4313),g=d.ZP.h2(a||(a=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n  color: var(--color);\n  text-transform: uppercase;\n  margin-bottom: 20px;\n"]))),f=d.ZP.p(r||(r=(0,u.Z)(["\n  width: 200px;\n  text-transform: uppercase;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--color);\n  font-size: 21px;\n"]))),h=d.ZP.p(o||(o=(0,u.Z)(["\n  margin-top: 150px;\n"]))),p=e(1087),v=e(7689),m=e(9085),Z=e(7367),x=e(2791),_=e(6048),b=e.n(_),y=e(3342),k=e(184),j=function(){var n,t,e=(0,x.useState)([]),a=(0,i.Z)(e,2),r=a[0],o=a[1],u=(0,x.useState)(!0),d=(0,i.Z)(u,2),_=d[0],j=d[1],w=(0,x.useState)(null),P=(0,i.Z)(w,2),A=P[0],N=P[1],M=(0,x.useState)(0),C=(0,i.Z)(M,2),z=C[0],B=C[1],F=(0,x.useState)(1),S=(0,i.Z)(F,2),L=S[0],T=S[1],q=null!==(n=null===(t=(0,v.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";if((0,x.useEffect)((function(){Z.Z.fetchFilmsByRating(L).then((function(n){var t=n.results,e=n.total_pages;o(t),B(Math.min(e,500)),0===t.length&&m.Am.error("sorry, that's all the actors we could find")})).catch((function(n){N(n)})).finally((function(){return j(!1)}))}),[L]),A)return(0,k.jsx)("p",{children:A.message});return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(c.Z,{children:[(0,k.jsx)(h,{children:(0,k.jsx)(p.rU,{to:q,children:(0,k.jsx)(y.Z,{})})}),(0,k.jsx)(g,{children:"Top rating movies"}),_?(0,k.jsx)(f,{children:"Loading..."}):(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(s.Z,{movies:r})}),(0,k.jsx)(b(),{pageCount:z,pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(n){var t=n.selected;t+1>z||T(t+1)},containerClassName:l.Z.pagination,pageClassName:l.Z.page,activeClassName:l.Z.active,previousClassName:l.Z.previous,nextClassName:l.Z.next,disabledClassName:l.Z.disabled,breakClassName:l.Z.break,previousLabel:"previous",nextLabel:"next",breakLabel:"..."})]})})}},7367:function(n,t,e){var a=e(1243),r="https://api.themoviedb.org/3/",o="f27eea818d2010463700365b0c06a16e";var i={fetchMoviesbyActors:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.Z.get("".concat(r,"person/").concat(n,"/movie_credits?api_key=").concat(o,"&page=").concat(t)).then((function(n){return n.data.cast}))},fetchActorInfoAndMovies:function(n){return a.Z.get("".concat(r,"person/").concat(n,"?api_key=").concat(o)).then((function(n){return n.data}))},fetchTrending:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.Z.get("".concat(r,"trending/all/day?api_key=").concat(o,"&page=").concat(n)).then((function(n){return n.data.results}))},fetchSearchMovie:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.Z.get("".concat(r,"search/movie?query=").concat(n,"&api_key=").concat(o,"&page=").concat(t)).then((function(n){return n.data.results}))},fetchMovieDetalis:function(n){return a.Z.get("".concat(r,"movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.data}))},fetchMovieCredits:function(n){return a.Z.get("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.data}))},fetchMovieReview:function(n){return a.Z.get("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.data.results}))},fetchTrailerMovies:function(n){return a.Z.get("".concat(r,"movie/").concat(n,"/videos?api_key=").concat(o)).then((function(n){return n.data.results}))},fetchAllgenres:function(){return a.Z.get("".concat(r,"/genre/movie/list?api_key=").concat(o)).then((function(n){return n.data.genres}))},fetchByGenre:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.Z.get("".concat(r,"/discover/movie?api_key=").concat(o,"&with_genres=").concat(n,"&page=").concat(t)).then((function(n){return n.data}))},fetchActors:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=t?"".concat(r,"search/person?api_key=").concat(o,"&page=").concat(n,"&query=").concat(t):"".concat(r,"person/popular?api_key=").concat(o,"&page=").concat(n);return a.Z.get(e).then((function(n){return n.data}))},fetchByYear:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return a.Z.get("".concat(r,"discover/movie?api_key=").concat(o,"&sort_by=popularity.desc&page=").concat(n,"&primary_release_year=").concat(t)).then((function(n){return n.data.results}))},fetchExpectedMovies:function(){return a.Z.get("".concat(r,"/movie/upcoming?api_key=").concat(o)).then((function(n){return n.data.results}))},fetchFilmsByRating:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.Z.get("".concat(r,"/movie/top_rated?api_key=").concat(o,"&page=").concat(n)).then((function(n){return n.data}))},fetchWaitingForTheMovies:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.Z.get("".concat(r,"/movie/upcoming?api_key=").concat(o,"&primary_release_date.gte=").concat((new Date).toISOString().slice(0,10),"&page=").concat(n)).then((function(n){return n.data}))}};t.Z=i},1312:function(n,t){t.Z={pagination:"ActorsPage_pagination__FWAiz",page:"ActorsPage_page__GvG8N",active:"ActorsPage_active__vEaUh",previous:"ActorsPage_previous__1YRPb",next:"ActorsPage_next__xkqqB",disabled:"ActorsPage_disabled__9XNEa"}}}]);
//# sourceMappingURL=676.a4010b9c.chunk.js.map