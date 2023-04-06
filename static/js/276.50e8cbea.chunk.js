"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{1276:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var o,r,c,a,i,s,d,p,u,l,h,f=e(9439),g=e(5700),v=e(9085),m=e(2791),x=e(7367),Z=e(7689),b=e(168),y=e(4313),_=y.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  padding: 20px;\n  margin-bottom: 20px;\n"]))),k=y.ZP.div(r||(r=(0,b.Z)(["\n  padding: 10px;\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  background: var(--background-header);\n"]))),j=y.ZP.img(c||(c=(0,b.Z)(["\n  border-radius: 5px;\n  margin-bottom: 10px;\n"]))),P=y.ZP.div(a||(a=(0,b.Z)(["\n  padding: 10px;\n  /* border: 1px solid var(--border-color); */\n  border-radius: 5px;\n  /* background: var(--background-header); */\n"]))),w=y.ZP.h3(i||(i=(0,b.Z)(["\n  color: var(--border-color);\n  font-size: 37px;\n  margin-bottom: 20px;\n"]))),M=y.ZP.p(s||(s=(0,b.Z)(["\n  color: var(--color);\n  margin-bottom: 15px;\n  font-size: 21px;\n\n  & > span {\n    margin-right: 5px;\n    color: var(--border-color);\n    margin-bottom: 15px;\n  }\n"]))),A=y.ZP.p(d||(d=(0,b.Z)(["\n  font-size: 21px;\n  margin-bottom: 15px;\n  color: var(--color);\n"]))),z=y.ZP.p(p||(p=(0,b.Z)(["\n  color: var(--color);\n  margin-bottom: 15px;\n  font-size: 21px;\n\n  & > span {\n    margin-right: 5px;\n    color: var(--border-color);\n    margin-bottom: 15px;\n  }\n"]))),S=y.ZP.div(u||(u=(0,b.Z)(["\n  color: var(--color);\n  margin-bottom: 15px;\n  font-size: 21px;\n\n  & > span {\n    margin-right: 5px;\n    color: var(--border-color);\n    margin-bottom: 15px;\n  }\n"]))),C=y.ZP.p(l||(l=(0,b.Z)(["\n  color: var(--color);\n  font-size: 21px;\n  line-height: 25px;\n"]))),B=y.ZP.button(h||(h=(0,b.Z)(["\n  color: var(--border-color);\n  font-size: 21px;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]))),D=e(184),F=function(){var n=(0,Z.UO)().id,t=(0,m.useState)([]),e=(0,f.Z)(t,2),o=e[0],r=e[1],c=(0,m.useState)(!0),a=(0,f.Z)(c,2),i=a[0],s=a[1],d=(0,m.useState)(null),p=(0,f.Z)(d,2),u=p[0],l=p[1],h=(0,m.useState)(!1),b=(0,f.Z)(h,2),y=b[0],F=b[1];if((0,m.useEffect)((function(){x.Z.fetchActorInfoAndMovies(n).then((function(n){r(n)})).catch((function(n){l(n),v.Am.error("sorry, hernya kakasja")})).finally((function(){s(!1)}))}),[n]),u)return(0,D.jsx)("p",{children:u.message});return(0,D.jsx)(g.Z,{children:i?(0,D.jsx)("p",{children:"Loading..."}):(0,D.jsx)("div",{children:o&&(0,D.jsxs)(_,{children:[(0,D.jsxs)(k,{children:[(0,D.jsx)(j,{src:o.profile_path?"https://image.tmdb.org/t/p/w500/".concat(o.profile_path):"https://via.placeholder.com/200x300",alt:o.name,width:300}),(0,D.jsxs)(M,{children:[(0,D.jsx)("span",{children:" Date of birth:"}),o.birthday]}),(0,D.jsx)(A,{children:o.known_for_department}),(0,D.jsxs)(z,{children:[(0,D.jsx)("span",{children:"Place of birth:"}),o.place_of_birth]}),(0,D.jsxs)(S,{children:[(0,D.jsx)("span",{children:"Popularity:"}),o.popularity.toFixed(1)]})]}),(0,D.jsxs)(P,{children:[(0,D.jsx)(w,{children:o.name}),(0,D.jsxs)(C,{children:[y?o.biography:"".concat(o.biography.slice(0,300),"..."),(0,D.jsx)(B,{onClick:function(){F(!y)},children:y?"Hide":"Read more"})]})]})]},o.id)})})}},7367:function(n,t,e){var o=e(1243),r="https://api.themoviedb.org/3/",c="f27eea818d2010463700365b0c06a16e";var a={fetchMoviesbyActors:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.Z.get("".concat(r,"person/").concat(n,"/movie_credits?api_key=").concat(c,"&page=").concat(t)).then((function(n){return n.data.cast}))},fetchActorInfoAndMovies:function(n){return o.Z.get("".concat(r,"person/").concat(n,"?api_key=").concat(c)).then((function(n){return n.data}))},fetchTrending:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.Z.get("".concat(r,"trending/all/day?api_key=").concat(c,"&page=").concat(n)).then((function(n){return n.data.results}))},fetchSearchMovie:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.Z.get("".concat(r,"search/movie?query=").concat(n,"&api_key=").concat(c,"&page=").concat(t)).then((function(n){return n.data.results}))},fetchMovieDetalis:function(n){return o.Z.get("".concat(r,"movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.data}))},fetchMovieCredits:function(n){return o.Z.get("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.data}))},fetchMovieReview:function(n){return o.Z.get("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.data.results}))},fetchTrailerMovies:function(n){return o.Z.get("".concat(r,"movie/").concat(n,"/videos?api_key=").concat(c)).then((function(n){return n.data.results}))},fetchAllgenres:function(){return o.Z.get("".concat(r,"/genre/movie/list?api_key=").concat(c)).then((function(n){return n.data.genres}))},fetchByGenre:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.Z.get("".concat(r,"/discover/movie?api_key=").concat(c,"&with_genres=").concat(n,"&page=").concat(t)).then((function(n){return n.data}))},fetchActors:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=t?"".concat(r,"search/person?api_key=").concat(c,"&page=").concat(n,"&query=").concat(t):"".concat(r,"person/popular?api_key=").concat(c,"&page=").concat(n);return o.Z.get(e).then((function(n){return n.data}))},fetchByYear:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return o.Z.get("".concat(r,"discover/movie?api_key=").concat(c,"&sort_by=popularity.desc&page=").concat(n,"&primary_release_year=").concat(t)).then((function(n){return n.data.results}))},fetchExpectedMovies:function(){return o.Z.get("".concat(r,"/movie/upcoming?api_key=").concat(c)).then((function(n){return n.data.results}))},fetchFilmsByRating:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.Z.get("".concat(r,"/movie/top_rated?api_key=").concat(c,"&page=").concat(n)).then((function(n){return n.data}))},fetchWaitingForTheMovies:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.Z.get("".concat(r,"/movie/upcoming?api_key=").concat(c,"&primary_release_date.gte=").concat((new Date).toISOString().slice(0,10),"&page=").concat(n)).then((function(n){return n.data}))}};t.Z=a}}]);
//# sourceMappingURL=276.50e8cbea.chunk.js.map