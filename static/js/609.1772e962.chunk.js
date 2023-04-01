(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[609],{3342:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r="ButtonBack_btnBack__tjozC",o=n(184),c=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{className:r,type:"button",children:"\u2190 Go Back"})})}},2609:function(e,t,n){"use strict";n.r(t);var r=n(5861),o=n(9439),c=n(4687),a=n.n(c),i=n(2791),u=n(1312),s=n(5700),f=n(7367),l=n(9085),p=n(6048),v=n.n(p),d=n(7689),h=n(1087),y=n(3342),g=n(3628),m=n.n(g),b=n(184);t.default=function(){var e,t,n=(0,i.useState)([]),c=(0,o.Z)(n,2),p=c[0],g=c[1],_=(0,i.useState)(!0),j=(0,o.Z)(_,2),O=j[0],w=j[1],x=(0,i.useState)(null),Z=(0,o.Z)(x,2),N=Z[0],P=Z[1],k=(0,i.useState)(1),D=(0,o.Z)(k,2),B=D[0],S=D[1],C=(0,i.useState)(0),A=(0,o.Z)(C,2),T=A[0],E=A[1],L=(0,i.useState)(""),R=(0,o.Z)(L,2),M=R[0],I=R[1],K=(0,i.useState)([]),F=(0,o.Z)(K,2),U=F[0],q=F[1],G=null!==(e=null===(t=(0,d.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.fetchActors(t,n);case 3:r=e.sent,o=r.results,c=r.total_pages,0===o.length&&l.Am.error("sorry, that's all the actors we could find"),g(o),E(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),P(e.t0);case 14:return e.prev=14,w(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t,n){return e.apply(this,arguments)}}();e(B,M)}),[B,M]),(0,i.useEffect)((function(){var e=p.filter((function(e){return e.name.toLowerCase().includes(M.toLowerCase())}));q(e)}),[p,M]),N?(0,b.jsx)("p",{children:N.message}):(0,b.jsxs)(s.Z,{children:[(0,b.jsx)("div",{className:u.Z.search,children:(0,b.jsx)(m(),{className:u.Z.inputActors,type:"text",placeholder:"Search actors",value:M,minLength:2,debounceTimeout:500,onChange:function(e){I(e.target.value)}})}),(0,b.jsx)(h.rU,{to:G,children:(0,b.jsx)(y.Z,{})}),O?(0,b.jsx)("p",{children:"Loading..."}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("ul",{className:u.Z.actorList,children:U.map((function(e,t){var n=e.profile_path,r=e.name,o=e.known_for_department,c=e.popularity,a=e.id;return(0,b.jsx)(h.rU,{to:"/actors/movies/".concat(a),children:(0,b.jsxs)("li",{className:u.Z.actorListItem,children:[(0,b.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://via.placeholder.com/200x300",alt:r,width:200}),(0,b.jsx)("p",{className:u.Z.actorsName,children:r}),(0,b.jsx)("p",{className:u.Z.actorsDepartment,children:o}),(0,b.jsxs)("p",{className:u.Z.actorsRating,children:[(.5*c).toFixed(0),"%"]})]},"".concat(a,"-").concat(t))},a)}))}),(0,b.jsx)(v(),{pageCount:T,pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(e){var t=e.selected;S(t+1)},containerClassName:u.Z.pagination,pageClassName:u.Z.page,activeClassName:u.Z.active,previousClassName:u.Z.previous,nextClassName:u.Z.next,disabledClassName:u.Z.disabled,breakClassName:u.Z.break,previousLabel:"previous",nextLabel:"next",breakLabel:"..."})]})]})}},7367:function(e,t,n){"use strict";var r=n(1243),o="https://api.themoviedb.org/3/",c="f27eea818d2010463700365b0c06a16e";var a={fetchMoviesbyActors:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"person/").concat(e,"/movie_credits?api_key=").concat(c,"&page=").concat(t)).then((function(e){return e.data.cast}))},fetchTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.Z.get("".concat(o,"trending/all/day?api_key=").concat(c,"&page=").concat(e)).then((function(e){return e.data.results}))},fetchSearchMovie:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"search/movie?query=").concat(e,"&api_key=").concat(c,"&page=").concat(t)).then((function(e){return e.data.results}))},fetchMovieDetalis:function(e){return r.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(c)).then((function(e){return e.data}))},fetchMovieCredits:function(e){return r.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.data}))},fetchMovieReview:function(e){return r.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.data.results}))},fetchTrailerMovies:function(e){return r.Z.get("".concat(o,"movie/").concat(e,"/videos?api_key=").concat(c)).then((function(e){return e.data.results}))},fetchAllgenres:function(){return r.Z.get("".concat(o,"/genre/movie/list?api_key=").concat(c)).then((function(e){return e.data.genres}))},fetchByGenre:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"/discover/movie?api_key=").concat(c,"&with_genres=").concat(e,"&page=").concat(t)).then((function(e){return e.data}))},fetchActors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t?"".concat(o,"search/person?api_key=").concat(c,"&page=").concat(e,"&query=").concat(t):"".concat(o,"person/popular?api_key=").concat(c,"&page=").concat(e);return r.Z.get(n).then((function(e){return e.data}))},fetchByYear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return r.Z.get("".concat(o,"discover/movie?api_key=").concat(c,"&sort_by=popularity.desc&page=").concat(e,"&primary_release_year=").concat(t)).then((function(e){return e.data.results}))},fetchExpectedMovies:function(){return r.Z.get("".concat(o,"/movie/upcoming?api_key=").concat(c)).then((function(e){return e.data.results}))},fetchFilmsByRating:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.Z.get("".concat(o,"/movie/top_rated?api_key=").concat(c,"&page=").concat(e)).then((function(e){return e.data}))},fetchWaitingForTheMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.Z.get("".concat(o,"/movie/upcoming?api_key=").concat(c,"&primary_release_date.gte=").concat((new Date).toISOString().slice(0,10),"&page=").concat(e)).then((function(e){return e.data}))}};t.Z=a},5095:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,f=u||s||Function("return this")(),l=Object.prototype.toString,p=Math.max,v=Math.min,d=function(){return f.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||a.test(e)?i(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,c,a,i,u,s=0,f=!1,l=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,c=o;return r=o=void 0,s=t,a=e.apply(c,n)}function b(e){return s=e,i=setTimeout(j,t),f?m(e):a}function _(e){var n=e-u;return void 0===u||n>=t||n<0||l&&e-s>=c}function j(){var e=d();if(_(e))return O(e);i=setTimeout(j,function(e){var n=t-(e-u);return l?v(n,c-(e-s)):n}(e))}function O(e){return i=void 0,g&&r?m(e):(r=o=void 0,a)}function w(){var e=d(),n=_(e);if(r=arguments,o=this,u=e,n){if(void 0===i)return b(u);if(l)return i=setTimeout(j,t),m(u)}return void 0===i&&(i=setTimeout(j,t)),a}return t=y(t)||0,h(n)&&(f=!!n.leading,c=(l="maxWait"in n)?p(y(n.maxWait)||0,t):c,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==i&&clearTimeout(i),s=0,r=u=o=i=void 0},w.flush=function(){return void 0===i?a:O(d())},w}},6674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=i(n(2791)),c=i(n(5095)),a=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,n,r,i=v(s);function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),g(h(t=i.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(f(f({},e),{},{target:f(f({},e.target),{},{value:""})}))}))})),g(h(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),g(h(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),g(h(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,c.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),g(h(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),g(h(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(f(f({},e),{},{target:f(f({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=s,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,c=e.value,a=this.state.value;"undefined"!==typeof n&&c!==n&&a!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,c=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),i=n.forceNotifyOnBlur,s=n.onKeyDown,l=n.onBlur,p=n.inputRef,v=u(n,a),d=this.state.value;e=c?{onKeyDown:this.onKeyDown}:s?{onKeyDown:s}:{},t=i?{onBlur:this.onBlur}:l?{onBlur:l}:{};var h=p?{ref:p}:{};return o.default.createElement(r,f(f(f(f({},v),{},{onChange:this.onChange,value:d},e),t),h))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.default.PureComponent);t.DebounceInput=m,g(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},3628:function(e,t,n){"use strict";var r=n(6674).DebounceInput;r.DebounceInput=r,e.exports=r},1312:function(e,t){"use strict";t.Z={search:"ActorsPage_search__ORjyk",inputActors:"ActorsPage_inputActors__fDvqV",actorList:"ActorsPage_actorList__-71G7",actorListItem:"ActorsPage_actorListItem__uEmdU",actorsName:"ActorsPage_actorsName__orZPB",actorsDepartment:"ActorsPage_actorsDepartment__K5n6X",actorsRating:"ActorsPage_actorsRating__VUZ3H",pagination:"ActorsPage_pagination__FWAiz",page:"ActorsPage_page__GvG8N",active:"ActorsPage_active__vEaUh",previous:"ActorsPage_previous__1YRPb",next:"ActorsPage_next__xkqqB",disabled:"ActorsPage_disabled__9XNEa"}},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,c,a){try{var i=e[c](a),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var a=e.apply(t,n);function i(e){r(a,o,c,i,u,"next",e)}function u(e){r(a,o,c,i,u,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=609.1772e962.chunk.js.map