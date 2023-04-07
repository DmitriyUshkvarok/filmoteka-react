"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{9779:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var c,a,o=n(9439),r=n(7689),i=n(2791),u=n(7367),s=n(168),h=n(4313),f=h.ZP.p(c||(c=(0,s.Z)(["\n  margin-bottom: 50px;\n  font-size: 30px;\n  color: var(--border-color);\n"]))),v=h.ZP.p(a||(a=(0,s.Z)(["\n  font-size: 20px;\n  color: var(--color);\n  margin-bottom: 30px;\n  text-align: justify;\n"]))),d=n(5700),p=n(184);var l=function(){var t=(0,r.UO)().movieId,e=(0,i.useState)([]),n=(0,o.Z)(e,2),c=n[0],a=n[1],s=(0,i.useState)(!0),h=(0,o.Z)(s,2),l=h[0],g=h[1],m=(0,i.useState)(null),y=(0,o.Z)(m,2),_=y[0],Z=y[1];return(0,i.useEffect)((function(){u.Z.fetchMovieReview(t).then((function(t){a(t)})).catch((function(t){Z(t),g(!1)})).finally(g(!1))}),[t]),l?(0,p.jsx)("p",{children:"Loading..."}):_?(0,p.jsx)("p",{children:_.message}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.Z,{children:(0,p.jsx)("div",{className:"css.reviewList",children:c&&c.length>0?c.map((function(t){var e=t.author,n=t.content,c=t.id;return(0,p.jsxs)("div",{className:"css.reviewListItem",children:[(0,p.jsxs)(f,{children:["Author: ",e]}),(0,p.jsxs)(v,{children:["Content:",n]})]},c)})):(0,p.jsx)("p",{children:"No review members found"})})})})}},7367:function(t,e,n){var c=n(1243),a="https://api.themoviedb.org/3/",o="f27eea818d2010463700365b0c06a16e";var r={fetchMoviesbyActors:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.Z.get("".concat(a,"person/").concat(t,"/movie_credits?api_key=").concat(o,"&page=").concat(e)).then((function(t){return t.data.cast}))},fetchActorInfoAndMovies:function(t){return c.Z.get("".concat(a,"person/").concat(t,"?api_key=").concat(o)).then((function(t){return t.data}))},fetchTrending:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c.Z.get("".concat(a,"trending/all/day?api_key=").concat(o,"&page=").concat(t)).then((function(t){return t.data.results}))},fetchSearchMovie:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.Z.get("".concat(a,"search/movie?query=").concat(t,"&api_key=").concat(o,"&page=").concat(e)).then((function(t){return t.data.results}))},fetchMovieDetalis:function(t){return c.Z.get("".concat(a,"movie/").concat(t,"?api_key=").concat(o)).then((function(t){return t.data}))},fetchMovieCredits:function(t){return c.Z.get("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(o)).then((function(t){return t.data}))},fetchMovieReview:function(t){return c.Z.get("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(t){return t.data.results}))},fetchTrailerMovies:function(t){return c.Z.get("".concat(a,"movie/").concat(t,"/videos?api_key=").concat(o)).then((function(t){return t.data.results}))},fetchAllgenres:function(){return c.Z.get("".concat(a,"/genre/movie/list?api_key=").concat(o)).then((function(t){return t.data.genres}))},fetchByGenre:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.Z.get("".concat(a,"/discover/movie?api_key=").concat(o,"&with_genres=").concat(t,"&page=").concat(e)).then((function(t){return t.data}))},fetchActors:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e?"".concat(a,"search/person?api_key=").concat(o,"&page=").concat(t,"&query=").concat(e):"".concat(a,"person/popular?api_key=").concat(o,"&page=").concat(t);return c.Z.get(n).then((function(t){return t.data}))},fetchByYear:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return c.Z.get("".concat(a,"discover/movie?api_key=").concat(o,"&sort_by=popularity.desc&page=").concat(t,"&primary_release_year=").concat(e)).then((function(t){return t.data.results}))},fetchExpectedMovies:function(){return c.Z.get("".concat(a,"/movie/upcoming?api_key=").concat(o)).then((function(t){return t.data.results}))},fetchFilmsByRating:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c.Z.get("".concat(a,"/movie/top_rated?api_key=").concat(o,"&page=").concat(t)).then((function(t){return t.data}))},fetchWaitingForTheMovies:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c.Z.get("".concat(a,"/movie/upcoming?api_key=").concat(o,"&primary_release_date.gte=").concat((new Date).toISOString().slice(0,10),"&page=").concat(t)).then((function(t){return t.data}))}};e.Z=r}}]);
//# sourceMappingURL=779.e8a846dc.chunk.js.map