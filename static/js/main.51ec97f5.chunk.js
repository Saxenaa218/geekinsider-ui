(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[7],{103:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(28),s=a.n(n),i=(a(87),a(1)),o=a(60),b=a(5),j=a(50),d=a(66),l=a(12),O=a(13),u=a(17),E=a(18),S=a(108),p=a(104),T=a(8),h=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={hasError:!1},c}return Object(O.a)(a,[{key:"componentDidCatch",value:function(){}},{key:"render",value:function(){var e=this;return this.state.hasError?Object(T.jsx)(S.a,{status:"404",title:"404",subTitle:"Something went wrong!.",extra:Object(T.jsx)(p.a,{type:"primary",onClick:function(){return e.props.history.push("/home")},children:"Back Home"})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),a}(r.a.Component),_=a(61),y=(a(99),Object(c.lazy)((function(){return Promise.all([a.e(10),a.e(26)]).then(a.bind(null,301))}))),f=function(){return Object(T.jsx)("div",{children:Object(T.jsx)(c.Suspense,{fallback:Object(T.jsx)("div",{className:"loader--global",children:Object(T.jsx)(_.a,{})}),children:Object(T.jsx)(j.a,{store:d.a,children:Object(T.jsx)(o.a,{children:Object(T.jsx)(b.b,{path:"/",render:function(e){return Object(T.jsx)(h,Object(i.a)(Object(i.a)({},e),{},{children:Object(T.jsx)(y,Object(i.a)({},e))}))}})})})})})},D=function(e){e&&e instanceof Function&&a.e(28).then(a.bind(null,291)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(f,{})}),document.getElementById("root")),D()},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(0);var c=a(107),r=a(44),n=(a(91),a(8)),s=function(e){var t=e.fontSize,a=e.text;return Object(n.jsx)("div",{className:"loader--generic",children:Object(n.jsx)(c.a,{indicator:Object(n.jsx)(r.a,{style:{fontSize:t||30},spin:!0}),tip:a})})}},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(43),r=a(75),n=a(67),s=Object(c.c)(n.a,Object(c.a)(r.a))},67:function(e,t,a){"use strict";var c=a(51),r=a(1),n={userType:"",isAuth:!1,profileDetails:{},loading:!1,recentJobs:[],skillSearch:[],trendingJobs:[],recommendedJobs:[],activeJob:{},jobDetailModalVisible:!1,recommendedCandidates:[],recruiterCandidateDetails:{},searchType:"recommended",companySearch:[],appliedCandidates:[],skills:[],cities:[]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH":return Object(r.a)(Object(r.a)({},e),{},{isAuth:t.payload});case"SET_USER_TYPE":return Object(r.a)(Object(r.a)({},e),{},{userType:t.payload});case"SET_PROFILE_DETAIL":return Object(r.a)(Object(r.a)({},e),{},{profileDetails:t.payload});case"SET_MESSAGES":return Object(r.a)(Object(r.a)({},e),{},{messages:t.payload});case"SET_LOADING":return Object(r.a)(Object(r.a)({},e),{},{loading:t.payload});case"ADD_JOB_POST":return Object(r.a)(Object(r.a)({},e),{},{recentJobs:[t.payload].concat(Object(c.a)(e.recentJobs))});case"SET_POSTED_JOBS":return Object(r.a)(Object(r.a)({},e),{},{recentJobs:t.payload});case"SET_SKILL_SEARCH_RESULT":return Object(r.a)(Object(r.a)({},e),{},{skillSearch:t.payload});case"SET_TRENDING_JOBS":return Object(r.a)(Object(r.a)({},e),{},{trendingJobs:t.payload});case"SET_RECOMMENDED_JOBS":return Object(r.a)(Object(r.a)({},e),{},{recommendedJobs:t.payload});case"SET_ACTIVE_JOB":return Object(r.a)(Object(r.a)({},e),{},{activeJob:t.payload});case"SET_ACTIVE_JOB_MODAL_VISIBLE":return Object(r.a)(Object(r.a)({},e),{},{jobDetailModalVisible:t.payload});case"SET_RECOMMENDED_CANDIDATES":return Object(r.a)(Object(r.a)({},e),{},{recommendedCandidates:t.payload});case"SET_RECRUITER_CANDIDATE_DETAILS":return Object(r.a)(Object(r.a)({},e),{},{recruiterCandidateDetails:t.payload});case"SET_SEARCH_TYPE":return Object(r.a)(Object(r.a)({},e),{},{searchType:t.payload});case"SET_COMPANY_SEARCH":return Object(r.a)(Object(r.a)({},e),{},{companySearch:t.payload});case"SET_APPLIED_CANDIDATES":return Object(r.a)(Object(r.a)({},e),{},{appliedCandidates:t.payload});case"SET_CITIES":return Object(r.a)(Object(r.a)({},e),{},{cities:t.payload});case"SET_SKILLS":return Object(r.a)(Object(r.a)({},e),{},{skills:t.payload});case"CLEAR_STATE":return Object(r.a)({},n);default:return Object(r.a)({},e)}}},87:function(e,t,a){},91:function(e,t,a){},99:function(e,t,a){}},[[103,8,9]]]);
//# sourceMappingURL=main.51ec97f5.chunk.js.map