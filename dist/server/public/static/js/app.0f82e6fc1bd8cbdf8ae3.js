webpackJsonp([1],[,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return c});var r=n(25),o=n.n(r),s="pr-notify",a=function(e,t,n){return e.length?e.map(function(e){return e[n]}).indexOf(t[n]):-1},i=function(e,t){return"number"!=typeof e||0===t.length?t:[].concat(t.slice(0,e),t.slice(e+1,t.length))},u=function(e,t){var n=JSON.parse(localStorage[s]);n[e]=t,localStorage[s]=o()(n)},c=function(e){if(localStorage[s]){return JSON.parse(localStorage[s])[e]}}},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(26),o=n(3),s=n(45),a=n(44),i=n(43);r.a.use(o.c);var u=new o.c.Store({state:{username:"",repos:[],pull_requests:[]},getters:{getPRs:a.a,getUser:a.b,getRepos:a.c},mutations:{setPRs:s.a,setRepo:s.b,setUser:s.c,dropState:s.d,deleteRepo:s.e},actions:{setRepo:i.a,setUser:i.b,onDeleteRepo:i.c,fetchReposPRs:i.d,setReposOnMount:i.e,setUserOnMount:i.f,deleteData:i.g}});t.a=u},function(e,t,n){function r(e){n(98)}var o=n(2)(n(46),n(112),r,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),o=n.n(r),s=n(26),a=n(41),i=n.n(a),u=n(40),c=n(15);s.a.config.productionTip=!1,new s.a({el:"#app",store:u.a,render:function(e){return e(i.a)}}),localStorage[c.a]||(localStorage[c.a]=o()({}))},function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"c",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"g",function(){return m});var r=n(55),o=n.n(r),s=n(15),a=function(e){var t=n.i(s.b)("username");if(e.requested_reviewers.length){if(-1!==e.requested_reviewers.map(function(e){return e.login}).indexOf(t))return!0}return!1},i=function(e){return e.filter(a).map(function(e){return{url:e.url,id:e.id,body:e.body,title:e.title,branch:e.head.ref}})},u=function(e,t){var n=t.map(function(e){return fetch("http://localhost:8080/api/v1/pull_requests?repo="+e.repo+"&owner="+e.owner)});o.a.all(n).then(function(e){return o.a.all(e.map(function(e){return e.json()}))}).then(function(t){return t.forEach(function(t){var n=i(t);n.length&&e.commit("setPRs",n)})}).catch(function(e){return console.error(e)})},c=function(e,t){var r=n.i(s.b)("repos")||[];if(r.length){if(-1!==n.i(s.c)(r,t,"repo"))return}n.i(s.d)("repos",r.concat(t)),e.commit("setRepo",t)},l=function(e){var t=n.i(s.b)("repos");t&&e.commit("setRepo",t)},p=function(e,t){var r=t.target.getAttribute("data-repo-name"),o=n.i(s.b)("repos"),a=n.i(s.c)(o,{repo:r},"repo"),i=n.i(s.e)(a,o);n.i(s.d)("repos",i),e.commit("deleteRepo",r)},f=function(e,t){n.i(s.b)("username")!==t&&(n.i(s.d)("username",t),e.commit("setUser",t))},d=function(e){var t=n.i(s.b)("username");t&&e.commit("setUser",t)},m=function(e){n.i(s.d)("username",""),n.i(s.d)("repos",[]),e.commit("dropState")}},function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});var r=function(e){return e.repos},o=function(e){return e.pull_requests},s=function(e){return e.username}},function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"e",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return c});var r=n(15),o={username:"",repos:[],pull_requests:[]},s=function(e,t){e.repos=e.repos.concat(t)},a=function(e,t){var o=e,s=n.i(r.c)(e.repos,{repo:t},"repo"),a=n.i(r.e)(s,e.repos);o.repos=a},i=function(e,t){e.pull_requests=e.pull_requests.concat(t)},u=function(e,t){e.username=t},c=function(e){var t=e;t.username=o.username,t.repos=o.repos,t.pull_requests=o.pull_requests}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r),s=n(3),a=n(104),i=n.n(a),u=n(105),c=n.n(u),l=n(103),p=n.n(l),f=n(100),d=n.n(f);t.default={name:"app",components:{Repos:p.a,Logout:c.a,AddUser:i.a,PullRequests:d.a},computed:o()({},n.i(s.a)(["getUser"])),methods:o()({},n.i(s.b)(["setReposOnMount","setUserOnMount"])),mounted:function(){this.setReposOnMount(),this.setUserOnMount()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pull-request",props:["title","branch","description","link"],methods:{toggleOverlay:function(){var e=this.$el.querySelector(".wrapper"),t=e.classList.contains("collapsed");e.classList.toggle("collapsed",!t)},onShowCloseButton:function(e){var t=e.target.querySelector(".close");this.timeout=setTimeout(function(){t.style.display="block"},500)},onHideCloseButton:function(e){e.target.querySelector(".close").style.display="none",clearTimeout(this.timeout)},onDeleteNotification:function(e){console.log("event",e)}},timeout:0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r),s=n(3),a=n(99),i=n.n(a);t.default={name:"pull-requests",components:{PullRequest:i.a},computed:o()({},n.i(s.a)(["getPRs"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r),s=n(3);t.default={name:"add-repo",data:function(){return{isFormDisplayed:!1}},methods:o()({onSubmit:function(e){e.preventDefault();var t=e.target.form,n=new FormData(t),r=n.get("repo-name").trim().toLowerCase(),o=n.get("repo-owner").trim().toLowerCase();r.length&&o.length&&this.setRepo({repo:r,owner:o}),this.isFormDisplayed=!this.isFormDisplayed},onToggleForm:function(e){e.preventDefault(),this.isFormDisplayed=!this.isFormDisplayed}},n.i(s.b)(["setRepo"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r),s=n(3);t.default={name:"repo",props:["name","owner"],methods:o()({},n.i(s.b)(["onDeleteRepo"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r),s=n(3),a=n(101),i=n.n(a),u=n(102),c=n.n(u);t.default={name:"repos",components:{AddRepo:i.a,Repo:c.a},computed:o()({},n.i(s.a)(["getRepos"])),methods:o()({},n.i(s.b)(["fetchReposPRs"])),timeout:0,mounted:function(){var e=this;!function t(){e.fetchReposPRs(e.getRepos),e.timeout=setTimeout(t,15e3)}()},beforeDestroy:function(){clearTimeout(this.timeout)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r),s=n(3);t.default={name:"add-user",methods:o()({onSubmit:function(e){e.preventDefault();var t=e.target.form,n=new FormData(t),r=n.get("github-username").trim().toLowerCase();r&&this.setUser(r)}},n.i(s.b)(["setUser"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r),s=n(3);t.default={name:"logout",methods:o()({onClick:function(e){e.preventDefault(),this.deleteData()}},n.i(s.b)(["deleteData"]))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){function r(e){n(97)}var o=n(2)(n(47),n(111),r,"data-v-7034d90f",null);e.exports=o.exports},function(e,t,n){function r(e){n(94)}var o=n(2)(n(48),n(108),r,null,null);e.exports=o.exports},function(e,t,n){function r(e){n(93)}var o=n(2)(n(49),n(107),r,"data-v-203a1af4",null);e.exports=o.exports},function(e,t,n){function r(e){n(92)}var o=n(2)(n(50),n(106),r,"data-v-18a8d5a2",null);e.exports=o.exports},function(e,t,n){function r(e){n(96)}var o=n(2)(n(51),n(110),r,"data-v-5eb46abd",null);e.exports=o.exports},function(e,t,n){var r=n(2)(n(52),n(113),null,null,null);e.exports=r.exports},function(e,t,n){function r(e){n(95)}var o=n(2)(n(53),n(109),r,"data-v-5513d1ef",null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-wrapper"},[n("h3",[e._v(e._s(e.owner)+": "+e._s(e.name))]),e._v(" "),n("i",{staticClass:"fa fa-trash delete",attrs:{"data-repo-name":e.name.toLowerCase(),"aria-hidden":"true"},on:{click:e.onDeleteRepo}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-wrapper"},[n("p",[e.isFormDisplayed?e._e():n("a",{staticClass:"button",on:{click:e.onToggleForm}},[e._v("Add New Repo")])]),e._v(" "),e.isFormDisplayed?n("form",{staticClass:"add-repo-form",on:{submit:function(t){t.preventDefault(),e.onSubmit(t)}}},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("button",{staticClass:"button",attrs:{type:"button",name:"Submit"},on:{click:e.onSubmit}},[e._v("Add Repo")]),e._v(" "),n("button",{staticClass:"button",attrs:{type:"button",name:"Close"},on:{click:e.onToggleForm}},[e._v("Close")])]):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"repo-name-wrapper form-wrapper"},[n("label",{attrs:{for:"repo-name"}},[e._v("Repo Name")]),e._v(" "),n("input",{attrs:{id:"repo-name",type:"text",name:"repo-name",value:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"repo-owner-wrapper form-wrapper"},[n("label",{attrs:{for:"repo-ownder"}},[e._v("Repo Owner")]),e._v(" "),n("input",{attrs:{id:"repo-owner",type:"text",name:"repo-owner",value:""}})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-wrapper",attrs:{id:"pull-requests"}},e._l(e.getPRs,function(e){return n("pull-request",{key:e.id,attrs:{title:e.title,link:e.url,branch:e.branch,description:e.body}})}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{staticClass:"logout",on:{click:e.onClick}},[e._v("Logout")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-wrapper",attrs:{id:"repositories"}},[n("h2",[e._v("Monitored Repos")]),e._v(" "),e._l(e.getRepos,function(e){return n("repo",{key:e.id,attrs:{name:e.repo,owner:e.owner}})}),e._v(" "),n("add-repo")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"wrapper collapsed",on:{mouseenter:e.onShowCloseButton,mouseleave:e.onHideCloseButton}},[n("div",{staticClass:"close-button-wrapper"},[n("i",{staticClass:"fa fa-times-circle close",attrs:{"aria-hidden":"true"},on:{click:e.onDeleteNotification}})]),e._v(" "),n("article",[n("header",[n("h3",{staticClass:"title"},[n("a",{attrs:{href:e.link,target:"_blank"}},[e._v(e._s(e.title))])])]),e._v(" "),n("p",{staticClass:"sub-heading branch-name"},[n("a",{attrs:{href:"#",target:"_blank"}},[n("code",[e._v(e._s(e.branch))])])]),e._v(" "),n("p",{staticClass:"description"},[e._v(e._s(e.description))])]),e._v(" "),n("div",{staticClass:"overlay",on:{click:e.toggleOverlay}},[n("i",{staticClass:"fa fa-chevron-circle-up",attrs:{"aria-hidden":"true"}})])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper"},[n("div",{staticClass:"masthead"},[n("h1",[e._v("Github Pull Requests")]),e._v(" "),e.getUser?n("logout"):e._e()],1),e._v(" "),e.getUser?e._e():n("add-user"),e._v(" "),e.getUser?n("div",{staticClass:"main"},[n("pull-requests"),e._v(" "),n("repos")],1):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"add-user-form",on:{submit:function(t){t.preventDefault(),e.onSubmit(t)}}},[e._m(0),e._v(" "),n("button",{staticClass:"button",attrs:{type:"button",name:"Submit"},on:{click:e.onSubmit}},[e._v("Add User")])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-wrapper"},[n("label",{attrs:{for:"github-username"}},[e._v("Github Username")]),e._v(" "),n("input",{attrs:{id:"github-username",type:"text",name:"github-username",value:""}})])}]}}],[42]);
//# sourceMappingURL=app.0f82e6fc1bd8cbdf8ae3.js.map