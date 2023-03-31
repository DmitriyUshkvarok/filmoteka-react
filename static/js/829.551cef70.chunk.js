"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{4332:function(n,e,t){t.d(e,{Z:function(){return V}});var r,o,a,i,c,s,d,l,u,f,g,h,p,v,m=t(1087),x=t(7689),b="MoviesList_moviesList__P6SP5",Z="MoviesList_moviesItem__r+0sq",w=t(168),k=t(4313),j=k.ZP.div(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"]))),_=k.ZP.div(o||(o=(0,w.Z)(["\n  overflow: hidden;\n  margin-bottom: 5px;\n"]))),y=k.ZP.img(a||(a=(0,w.Z)(["\n  max-width: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n  -webkit-transition: transform 0.4s;\n  -moz-transition: transform 0.4s;\n  -ms-transition: transform 0.4s;\n  -o-transition: transform 0.4s;\n\n  &:hover {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n"]))),P=k.ZP.h3(i||(i=(0,w.Z)(["\n  max-width: 300px;\n  color: var(--color);\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: auto;\n"]))),z=k.ZP.div(c||(c=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n"]))),M=k.ZP.span(s||(s=(0,w.Z)(["\n  font-size: 10px;\n  color: gold;\n"]))),N=k.ZP.span(d||(d=(0,w.Z)(["\n  font-size: 10px;\n  color: gray;\n"]))),A=k.ZP.p(l||(l=(0,w.Z)(["\n  color: rgb(36, 35, 35);\n  font-size: 10px;\n"]))),L=k.ZP.span(u||(u=(0,w.Z)(["\n  font-size: 8px;\n"]))),S=k.ZP.p(f||(f=(0,w.Z)(["\n  color: red;\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: auto;\n"]))),E=(0,k.iv)(g||(g=(0,w.Z)(["\n  background: #f85032;\n  background: -webkit-linear-gradient(to right, #e73827, #f85032);\n  background: linear-gradient(to right, #e73827, #f85032);\n"]))),T=(0,k.iv)(h||(h=(0,w.Z)(["\n  background: #f7971e;\n  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);\n  background: linear-gradient(to right, #ffd200, #f7971e);\n  color: rgb(36, 35, 35);\n"]))),B=(0,k.iv)(p||(p=(0,w.Z)(["\n  background: #000000;\n  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);\n  background: linear-gradient(to right, #0f9b0f, #000000);\n  color: #fff;\n"]))),C=k.ZP.div(v||(v=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 10px;\n  heigth: 10px;\n  padding: 5px;\n  font-weight: bold;\n  margin-left: 10px;\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-red\n  &.rating-red {\n    ","\n  }\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-yellow\n  &.rating-yellow {\n    ","\n  }\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-green\n  &.rating-green {\n    ","\n  }\n"])),E,T,B),F=t(184);var U=function(n){var e=n.poster_path,t=n.title,r=n.vote_average,o=n.release_date,a=10*r,i=Math.floor(a/10),c=Array.from({length:10},(function(n,e){return e<i?(0,F.jsx)(M,{children:"\u2605"},"star-".concat(e)):(0,F.jsx)(N,{children:"\u2605"},"star-".concat(e))})),s=function(n){return n<=4?"red":n<7?"yellow":"green"}(r),d="rating-".concat(s);return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(j,{children:[(0,F.jsx)(_,{children:(0,F.jsx)(y,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://via.placeholder.com/300x400",alt:t,width:300})}),(0,F.jsx)(P,{children:t||"Movie without a title"}),(0,F.jsxs)(z,{children:[(0,F.jsx)(A,{children:r?c:"N/A"}),(0,F.jsx)(C,{className:d,children:(0,F.jsx)(L,{children:r?r.toFixed(1):"N/A"})}),(0,F.jsx)(S,{children:o?o.slice(0,4):"N/A"})]})]})})};var V=function(n){var e=n.movies,t=(0,x.TH)();return(0,F.jsx)("ul",{className:b,children:e.map((function(n,e){var r=n.id,o=n.poster_path,a=n.title,i=n.vote_average,c=n.release_date;return(0,F.jsx)("li",{className:Z,children:(0,F.jsx)(m.rU,{to:"/movies/".concat(r),state:{from:t},children:(0,F.jsx)(U,{id:r,poster_path:o,title:a,vote_average:i,release_date:c},r)})},"".concat(r,"-").concat(e))}))})}},8727:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r=t(3433),o=t(9439),a="HomePage_trandingMovies__2UC1J",i=t(5700),c=t(4332),s=t(2791),d=t(4771),l=t(7367),u=t(9085),f=t(1087),g=t(7689),h="GanreList_ganreList__Ukkui",p="GanreList_ganreListItem__oINk6",v=t(184);var m,x,b,Z,w,k,j,_,y,P,z,M,N,A,L,S=function(n){var e=n.genres,t=(0,g.TH)();return(0,v.jsx)("ul",{className:h,children:e.map((function(n){var e=n.id,r=n.name;return(0,v.jsx)(f.rU,{to:"genre/".concat(e),state:{from:t},children:(0,v.jsx)("li",{className:p,children:(0,v.jsx)("p",{children:r})})},e)}))})},E=t(794),T=t(6899),B=(t(4676),t(4432),t(168)),C=t(4313),F=t(8820),U=C.ZP.div(m||(m=(0,B.Z)(["\n  overflow: hidden;\n  margin-top: 150px;\n  padding: 5px;\n"]))),V=C.ZP.div(x||(x=(0,B.Z)(["\n  &.swiper-button-next,\n  &.swiper-button-prev {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 10;\n    width: 30px;\n    height: 30px;\n    padding: 5px;\n    border-radius: 50%;\n    border: 3px solid var(--border-color);\n    background: var(--background-header);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n  }\n\n  &.swiper-button-next {\n    right: 10px;\n    --swiper-navigation-size: 0;\n  }\n\n  &.swiper-button-prev {\n    left: 10px;\n    --swiper-navigation-size: 0;\n  }\n\n  &.swiper-button-disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]))),q=C.ZP.div(b||(b=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),H=C.ZP.div(Z||(Z=(0,B.Z)(["\n  padding: 5px;\n"]))),I=(0,C.ZP)(E.o5)(w||(w=(0,B.Z)(["\n  width: 100%;\n  height: 100%;\n  background: #232526;\n  background: var(--background-movies-item);\n  padding: 5px;\n  font-size: 14px;\n  color: var(--color);\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  box-sizing: border-box;\n"]))),G=(0,C.ZP)(F.VYc)(k||(k=(0,B.Z)(["\n  color: var(--color);\n"]))),Y=(0,C.ZP)(F.pAI)(j||(j=(0,B.Z)(["\n  color: var(--color);\n"]))),W=C.ZP.div(_||(_=(0,B.Z)(["\n  overflow: hidden;\n"]))),D=C.ZP.img(y||(y=(0,B.Z)(["\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n  -webkit-transition: transform 0.4s;\n  -moz-transition: transform 0.4s;\n  -ms-transition: transform 0.4s;\n  -o-transition: transform 0.4s;\n\n  &:hover {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    filter: saturate(165%);\n  }\n"]))),J=C.ZP.p(P||(P=(0,B.Z)(["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: 180px;\n  white-space: nowrap;\n  margin-bottom: 5px;\n  font-weight: bold;\n"]))),R=(0,C.iv)(z||(z=(0,B.Z)(["\n  background: #f85032;\n  background: -webkit-linear-gradient(to right, #e73827, #f85032);\n  background: linear-gradient(to right, #e73827, #f85032);\n"]))),K=(0,C.iv)(M||(M=(0,B.Z)(["\n  background: #f7971e;\n  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);\n  background: linear-gradient(to right, #ffd200, #f7971e);\n  color: rgb(36, 35, 35);\n"]))),O=(0,C.iv)(N||(N=(0,B.Z)(["\n  background: #000000;\n  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);\n  background: linear-gradient(to right, #0f9b0f, #000000);\n  color: #fff;\n"]))),Q=C.ZP.p(A||(A=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 10px;\n  heigth: 10px;\n  padding: 5px;\n  font-weight: bold;\n  font-size: 8px;\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-red\n  &.rating-red {\n    ","\n  }\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-yellow\n  &.rating-yellow {\n    ","\n  }\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-green\n  &.rating-green {\n    ","\n  }\n"])),R,K,O),X=C.ZP.p(L||(L=(0,B.Z)(["\n  color: red;\n  font-weight: bold;\n"]))),$=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(null),c=(0,o.Z)(a,2),d=c[0],h=c[1],p=(0,s.useState)(!0),m=(0,o.Z)(p,2),x=m[0],b=m[1],Z=(0,g.TH)();return(0,s.useEffect)((function(){l.Z.fetchExpectedMovies().then((function(n){r(n)})).catch((function(n){h(n),u.Am.error("sorry, hernya kakasja")})).finally(b(!1))}),[]),d?(0,v.jsx)("p",{children:d.message}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(i.Z,{children:x?(0,v.jsx)("p",{children:"Loading..."}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(U,{children:(0,v.jsxs)(E.tq,{modules:[T.W_,T.LW],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{draggable:!0},breakpoints:{320:{slidesPerView:1},480:{slidesPerView:3,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10},1200:{slidesPerView:6,spaceBetween:10}},children:[t.map((function(n){var e=n.poster_path,t=n.title,r=n.id,o=n.vote_average,a=n.release_date,i="rating-".concat(o<=4?"red":o<7?"yellow":"green");return(0,v.jsxs)(I,{children:[(0,v.jsx)(W,{children:(0,v.jsx)(f.rU,{to:"/movies/".concat(r),state:{from:Z},children:(0,v.jsx)(D,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://via.placeholder.com/300x400",alt:t,width:177})})}),(0,v.jsxs)(H,{children:[(0,v.jsx)(J,{children:t||"Movie without a title"}),(0,v.jsxs)(q,{children:[(0,v.jsx)(Q,{className:i,children:o?o.toFixed(1):"N/A"}),(0,v.jsx)(X,{children:a.slice(0,4)})]})]})]},r)})),(0,v.jsx)(V,{className:"swiper-button-next",children:(0,v.jsx)(G,{})}),(0,v.jsx)(V,{className:"swiper-button-prev",children:(0,v.jsx)(Y,{})})]})})})})})};var nn=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],f=e[1],g=(0,s.useState)(1),h=(0,o.Z)(g,2),p=h[0],m=h[1],x=(0,s.useState)(!1),b=(0,o.Z)(x,2),Z=b[0],w=b[1],k=(0,s.useState)([]),j=(0,o.Z)(k,2),_=j[0],y=j[1],P=(0,s.useState)(!1),z=(0,o.Z)(P,2),M=z[0],N=z[1],A=(0,s.useCallback)((function(n){w(!0),l.Z.fetchTrending(n).then((function(e){w(!1),0===e.length&&u.Am.error("sorry, that's all the movies we could find"),f((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e))})),m(n)})).catch((function(n){w(!1)}))}),[]);return(0,s.useEffect)((function(){return N(!0),function(){return N(!1)}}),[]),(0,s.useEffect)((function(){M&&0===t.length&&A(p)}),[p,A,t.length,M]),(0,s.useEffect)((function(){l.Z.fetchAllgenres().then((function(n){y(n)})).catch("error")}),[]),(0,v.jsxs)(i.Z,{children:[(0,v.jsx)($,{}),(0,v.jsx)(S,{genres:_}),(0,v.jsx)("section",{className:a,children:(0,v.jsx)(d.Z,{dataLength:t.length,next:function(){return A(p+1)},hasMore:!Z,loader:(0,v.jsx)("p",{children:"Loading..."}),children:(0,v.jsx)(c.Z,{movies:t})})})]})}},7367:function(n,e,t){var r=t(1243),o="https://api.themoviedb.org/3/",a="f27eea818d2010463700365b0c06a16e";var i={fetchMoviesbyActors:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"person/").concat(n,"/movie_credits?api_key=").concat(a,"&page=").concat(e)).then((function(n){return n.data.cast}))},fetchTrending:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.Z.get("".concat(o,"trending/all/day?api_key=").concat(a,"&page=").concat(n)).then((function(n){return n.data.results}))},fetchSearchMovie:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"search/movie?query=").concat(n,"&api_key=").concat(a,"&page=").concat(e)).then((function(n){return n.data.results}))},fetchMovieDetalis:function(n){return r.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(a)).then((function(n){return n.data}))},fetchMovieCredits:function(n){return r.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(a)).then((function(n){return n.data}))},fetchMovieReview:function(n){return r.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(a)).then((function(n){return n.data.results}))},fetchTrailerMovies:function(n){return r.Z.get("".concat(o,"movie/").concat(n,"/videos?api_key=").concat(a)).then((function(n){return n.data.results}))},fetchAllgenres:function(){return r.Z.get("".concat(o,"/genre/movie/list?api_key=").concat(a)).then((function(n){return n.data.genres}))},fetchByGenre:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"/discover/movie?api_key=").concat(a,"&with_genres=").concat(n,"&page=").concat(e)).then((function(n){return n.data}))},fetchActors:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e?"".concat(o,"search/person?api_key=").concat(a,"&page=").concat(n,"&query=").concat(e):"".concat(o,"person/popular?api_key=").concat(a,"&page=").concat(n);return r.Z.get(t).then((function(n){return n.data}))},fetchByYear:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return r.Z.get("".concat(o,"discover/movie?api_key=").concat(a,"&sort_by=popularity.desc&page=").concat(n,"&primary_release_year=").concat(e)).then((function(n){return n.data.results}))},fetchExpectedMovies:function(){return r.Z.get("".concat(o,"/movie/upcoming?api_key=").concat(a)).then((function(n){return n.data.results}))}};e.Z=i}}]);
//# sourceMappingURL=829.551cef70.chunk.js.map