(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[26],{281:function(e,t,n){"use strict";n.d(t,"w",(function(){return i})),n.d(t,"x",(function(){return u})),n.d(t,"A",(function(){return p})),n.d(t,"f",(function(){return l})),n.d(t,"l",(function(){return d})),n.d(t,"u",(function(){return s})),n.d(t,"v",(function(){return y})),n.d(t,"c",(function(){return f})),n.d(t,"k",(function(){return E})),n.d(t,"q",(function(){return S})),n.d(t,"a",(function(){return b})),n.d(t,"t",(function(){return O})),n.d(t,"s",(function(){return h})),n.d(t,"n",(function(){return T})),n.d(t,"j",(function(){return _})),n.d(t,"m",(function(){return j})),n.d(t,"y",(function(){return A})),n.d(t,"z",(function(){return D})),n.d(t,"i",(function(){return I})),n.d(t,"e",(function(){return N})),n.d(t,"g",(function(){return L})),n.d(t,"o",(function(){return v})),n.d(t,"h",(function(){return g})),n.d(t,"r",(function(){return m})),n.d(t,"b",(function(){return G})),n.d(t,"d",(function(){return R})),n.d(t,"p",(function(){return k})),n.d(t,"B",(function(){return w.a}));var a=n(4),o=n(459),c=n(323),r=n(284),i=function(e){return function(t){t({type:"SET_AUTH",payload:e})}},u=function(e){return function(t){t({type:"SET_LOADING",payload:e})}},p=function(e){return function(t){t({type:"SET_USER_TYPE",payload:e})}},l=function(){return function(e){e({type:"SET_LOADING",payload:!0}),c.a.get("/api/user-can/user").then((function(t){e({type:"SET_PROFILE_DETAIL",payload:t.user}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},d=function(){return function(e){e({type:"SET_LOADING",payload:!0}),c.a.get("/api/user-rec/user").then((function(t){e({type:"SET_PROFILE_DETAIL",payload:t.user}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},s=function(e,t){return function(n){n({type:"SET_LOADING",payload:!0}),c.a.post("/api/user-can/user",e).then((function(){n({type:"SET_PROFILE_DETAIL",payload:e}),t(),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},y=function(e,t){return function(n){n({type:"SET_LOADING",payload:!0}),c.a.post("/api/user-rec/user",e).then((function(){n({type:"SET_PROFILE_DETAIL",payload:e}),t(),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},f=function(e,t){return function(n){n({type:"SET_LOADING",payload:!0}),c.a.post("/api/jobs/job",e).then((function(e){var a;n({type:"ADD_JOB_POST",payload:null===e||void 0===e||null===(a=e.jobDetail)||void 0===a?void 0:a.jobUploaded}),o.a.success({message:"Job posted successfully",description:"Please visit the recent jobs posted section to get updates!"}),t(),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},E=function(){return function(e){e({type:"SET_LOADING",payload:!0}),c.a.get("/api/jobs/job").then((function(t){e({type:"SET_POSTED_JOBS",payload:t.jobRecord}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},S=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/jobs/job?skills=".concat(e.join(","))).then((function(e){t({type:"SET_SKILL_SEARCH_RESULT",payload:Object(r.g)(w.a.getState().skillSearch,e.jobRecord,"jobslug")}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},b=function(e,t){return function(n){n({type:"SET_LOADING",payload:!0}),c.a.post("/api/user-can/apply",{jobid:e}).then((function(e){null!==e&&void 0!==e&&e.success?(n({type:"SET_LOADING",payload:!1}),t&&t(),o.a.success({message:"Hurray!, applied successfully"})):null!==e&&void 0!==e&&e.message&&(o.a.error({message:"Already applied!"}),n({type:"SET_LOADING",payload:!1}))})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},O=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/jobs/job?cname=".concat(e)).then((function(e){t({type:"SET_SKILL_SEARCH_RESULT",payload:e.jobRecord}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},h=function(){return function(e){e({type:"SET_LOADING",payload:!0}),c.a.get("/api/jobs/trend").then((function(t){null!==t&&void 0!==t&&t.jobRecord?e({type:"SET_TRENDING_JOBS",payload:t.jobRecord}):e({type:"SET_TRENDING_JOBS",payload:[]}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1}),e({type:"SET_TRENDING_JOBS",payload:[]})}))}},T=function(){return function(e){e({type:"SET_LOADING",payload:!0}),c.a.get("/api/jobs/reco").then((function(t){null!==t&&void 0!==t&&t.jobRecord?e({type:"SET_RECOMMENDED_JOBS",payload:t.jobRecord}):e({type:"SET_RECOMMENDED_JOBS",payload:[]}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1}),e({type:"SET_RECOMMENDED_JOBS",payload:[]})}))}},_=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/jobs/jobdetail?jobid=".concat(e)).then((function(e){t({type:"SET_ACTIVE_JOB",payload:e.jobRecord}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},j=function(){return function(e){e({type:"SET_LOADING",payload:!0}),c.a.get("/api/user-rec/getcans").then((function(t){e({type:"SET_RECOMMENDED_CANDIDATES",payload:t.user}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},A=function(e){return function(t){t({type:"SET_RECRUITER_CANDIDATE_DETAILS",payload:e})}},D=function(e){return function(t){t({type:"SET_SEARCH_TYPE",payload:e})}},I=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/jobs/job?cname=".concat(e)).then((function(e){t({type:"SET_COMPANY_SEARCH",payload:e.jobRecord}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},N=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/user-rec/applied?jobid=".concat(e)).then((function(e){null!==e&&void 0!==e&&e.enrolledCandidate?t({type:"SET_APPLIED_CANDIDATES",payload:Object(r.g)(w.a.getState().appliedCandidates,e.enrolledCandidate,"userId")}):t({type:"SET_APPLIED_CANDIDATES",payload:[]}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1}),t({type:"SET_APPLIED_CANDIDATES",payload:[]})}))}},L=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/user-rec/getcan?canid=".concat(e)).then((function(n){var o;if(null!==n&&void 0!==n&&null!==(o=n.user)&&void 0!==o&&o.about){var c=w.a.getState(),r=[];switch(c.searchType){case"recommended":r=c.recommendedCandidates.map((function(o){var c;return(null===(c=o)||void 0===c?void 0:c.aboutid)===e&&(o=Object(a.a)(Object(a.a)({},o),n.user),t({type:"SET_RECRUITER_CANDIDATE_DETAILS",payload:o})),o})),t({type:"SET_RECOMMENDED_CANDIDATES",payload:r});break;case"skillSearch":r=c.skillSearch.map((function(t){var o;return(null===(o=t)||void 0===o?void 0:o.aboutid)===e&&(t=Object(a.a)(Object(a.a)({},t),n.user)),t})),t({type:"SET_SKILL_SEARCH_RESULT",payload:r});break;default:r=c.recommendedCandidates.map((function(t){var o;return(null===(o=t)||void 0===o?void 0:o.aboutid)===e&&(t=Object(a.a)(Object(a.a)({},t),n.user)),t})),t({type:"SET_RECOMMENDED_CANDIDATES",payload:r})}}t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1}),t({type:"SET_APPLIED_CANDIDATES",payload:[]})}))}},v=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/user-rec/search-can?skills=".concat(e.join(","))).then((function(e){t({type:"SET_SKILL_SEARCH_RESULT",payload:Object(r.g)(w.a.getState().skillSearch,null===e||void 0===e?void 0:e.user,"aboutid")}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},g=function(){return function(e){e({type:"SET_LOADING",payload:!0}),c.a.get("/api/utils/cities").then((function(t){e({type:"SET_CITIES",payload:null===t||void 0===t?void 0:t.cities}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},m=function(){return function(e){e({type:"SET_LOADING",payload:!0}),c.a.get("/api/utils/skills").then((function(t){e({type:"SET_SKILLS",payload:null===t||void 0===t?void 0:t.skills}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},G=function(){return function(e){e({type:"CLEAR_STATE",payload:{}})}},R=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/user-rec/getcan?canid=".concat(e)).then((function(n){var o=w.a.getState().appliedCandidates.map((function(t){var o;return(null===(o=t)||void 0===o?void 0:o.userId)===e&&(t=Object(a.a)(Object(a.a)({},t),n.user)),t}));t({type:"SET_APPLIED_CANDIDATES",payload:o}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},k=function(e){return function(t){t({type:"SET_LOADING",payload:!0}),c.a.get("/api/jobs/jobdetail?jobid=".concat(e)).then((function(n){var o=w.a.getState(),c=[];switch(o.searchType){case"companySearch":c=o.companySearch.map((function(t){var o;return(null===(o=t)||void 0===o?void 0:o.jobslug)===e&&(t=Object(a.a)(Object(a.a)({},t),n.jobRecord)),t})),t({type:"SET_COMPANY_SEARCH",payload:c});break;case"skillSearch":c=o.skillSearch.map((function(t){var o;return(null===(o=t)||void 0===o?void 0:o.jobslug)===e&&(t=Object(a.a)(Object(a.a)({},t),n.jobRecord)),t})),t({type:"SET_SKILL_SEARCH_RESULT",payload:c});break;case"recommended":c=o.recommendedJobs.map((function(t){var o;return(null===(o=t)||void 0===o?void 0:o.jobslug)===e&&(t=Object(a.a)(Object(a.a)({},t),n.jobRecord)),t})),t({type:"SET_RECOMMENDED_JOBS",payload:c});break;case"trending":c=o.trendingJobs.map((function(t){var o;return(null===(o=t)||void 0===o?void 0:o.jobslug)===e&&(t=Object(a.a)(Object(a.a)({},t),n.jobRecord)),t})),t({type:"SET_TRENDING_JOBS",payload:c});break;default:c=o.recommendedJobs.map((function(t){var o;return(null===(o=t)||void 0===o?void 0:o.jobslug)===e&&(t=Object(a.a)(Object(a.a)({},t),n.jobRecord)),t})),t({type:"SET_RECOMMENDED_JOBS",payload:c})}t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},w=(n(117),n(116))},284:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return p})),n.d(t,"b",(function(){return l}));var a=n(364),o=["Information Technology & Services","Hospital & Health Care","Construction","Retail","Education Management","Financial Services","Accounting","Computer Software","Higher Education","Automotive"],c={position:"relative",top:"2px",marginRight:"5px"},r=function(){return!!localStorage.getItem("access_token")},i=function(e){return"https://github.com/".concat(e)},u=function(e,t){var n,a=e;return a=null===(n=a)||void 0===n?void 0:n.replace(/[^\w\s]/gi,"").replace(/ /g,""),"".concat("https://wa.me","/").concat(a,"?text=").concat(encodeURI("Hello ".concat(t,"!!")))},p=function(e,t,n){var o,c={},r=Object(a.a)(e);try{for(r.s();!(o=r.n()).done;){var i=o.value;c[i[n]]=i}}catch(u){r.e(u)}finally{r.f()}return t.map((function(e){return c[e[n]]?c[e[n]]:e}))},l=function(){return{user:JSON.parse(localStorage.getItem("user")),token:localStorage.getItem("access_token")}}},323:function(e,t,n){"use strict";var a=n(307),o=n(303),c=n.n(o),r="http://localhost:8000";r="https://api.geekinsider.click";var i=function(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}};t.a={auth:function(e,t){return Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(r,"/api/auth/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return n.stop()}}),n)})))()},get:function(e){return Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(r).concat(e),{method:"GET",headers:i()}).then((function(e){return e.json()})));case 1:case"end":return t.stop()}}),t)})))()},post:function(e,t){return Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(r).concat(e),{method:"POST",headers:i(),body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return n.stop()}}),n)})))()},put:function(e,t){return Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(r).concat(e),{method:"PUT",headers:i(),body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return n.stop()}}),n)})))()},delete:function(e,t){return Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(r).concat(e),{method:"DELETE",headers:i(),body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return n.stop()}}),n)})))()}}},471:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(0),o=n(10),c=n(89),r=n(100),i=n(281),u=n(284),p=n(111),l=n(13),d=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(19)]).then(n.bind(null,472))})),s=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(6),n.e(15),n.e(27)]).then(n.bind(null,473))})),y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,464))})),f=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(25)]).then(n.bind(null,463))})),E=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,467))})),S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,468))})),b=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,469))})),O=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(24)]).then(n.bind(null,474))})),h=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,475))})),T=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(23)]).then(n.bind(null,476))})),_=[{pageLink:"/home",view:y,showNavbar:!0},{pageLink:"/recruiter/postjob",view:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(6),n.e(18)]).then(n.bind(null,479))})),showNavbar:!0},{pageLink:"/candidate/onboarding",view:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(6),n.e(16)]).then(n.bind(null,462))})),showNavbar:!1},{pageLink:"/recruiter/onboarding",view:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(6),n.e(17)]).then(n.bind(null,466))})),showNavbar:!1},{pageLink:"/search",view:E,showNavbar:!0},{pageLink:"/login",view:s,showNavbar:!1},{pageLink:"/signup",view:d,showNavbar:!1},{pageLink:"/candidate/profile",view:b,showNavbar:!0},{pageLink:"/recruiter/profile",view:O,showNavbar:!0},{pageLink:"/recruiter/post/:slug",view:T,showNavbar:!0},{pageLink:"/job-detail/:slug",view:h,showNavbar:!0},{pageLink:"/recruiter/post/:slug/applied-candidates",view:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,470))})),showNavbar:!0},{pageLink:"/candidate/recommended/:slug",view:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(22)]).then(n.bind(null,477))})),showNavbar:!0},{pageLink:"/recruiter/search",view:S,showNavbar:!0}],j=Object(r.b)((function(e){return{userType:e.userType,isAuth:e.isAuth,loading:e.loading,skills:e.skills,cities:e.cities}}),(function(e){return Object(c.b)({setIsAuth:i.w,setUserType:i.A},e)}))((function(e){var t=e.isAuth,n=e.location,c=e.setIsAuth,r=e.loading,d=["","/","/login","/signup"],s=Object(o.g)();return Object(a.useEffect)((function(){if(Object(u.f)()){var e=JSON.parse(localStorage.getItem("user"));c(!0);try{var t="userRecruiter"===e.role?"recruiter":"candidate";Object(i.A)(t)}catch(a){c(!1),Object(i.A)(""),s.push("/login")}null!==n&&void 0!==n&&n.pathname&&d.includes(n.pathname)&&s.push("/home")}else c(!1),Object(i.A)(""),s.push("/login")}),[]),Object(l.jsxs)(l.Fragment,{children:[t&&Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(f,{})}),Object(l.jsxs)(o.d,{children:[_.map((function(e,t){return Object(l.jsx)(o.b,{exact:!0,path:e.pageLink,render:function(){return Object(l.jsxs)(l.Fragment,{children:[r&&Object(l.jsx)("div",{className:"loader--global",children:Object(l.jsx)(p.a,{})}),Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(e.view,{})})]})}},t)})),Object(l.jsx)(o.a,{to:"/home"})]})]})}))}}]);
//# sourceMappingURL=26.35c7694a.chunk.js.map