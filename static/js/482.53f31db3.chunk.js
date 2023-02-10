"use strict";(self.webpackChunkgeekinsider_ui=self.webpackChunkgeekinsider_ui||[]).push([[482],{5482:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var o=t(4165),a=t(5861),c=t(2791),r=t(7781),i=t(8687),s=t(7689),u=t(1413),d=t(9421),l=t(7309),p=t(7358),f=t(7492),y=t(6856),h=t(5850),E=(t(2381),t(184)),_=function(e){var n=e.jobTitle,t=e.skills,o=e.jobLocation,a=e.exp,c=e.ctc,r=e.companyName,i=e.jobslug,s="string"===typeof t?t.split(","):t;return(0,E.jsx)("div",{className:"single-widget",children:(0,E.jsxs)(p.Z,{hoverable:!0,onClick:function(){return null===e||void 0===e?void 0:e.onClick(i)},children:[(0,E.jsxs)("section",{className:"single-widget__each-widget",children:[(0,E.jsx)(f.C,{size:55,children:n[0]}),(0,E.jsxs)("div",{className:"right-section",children:[(0,E.jsx)("span",{children:r}),(0,E.jsx)("h3",{title:n,children:n})]})]}),(0,E.jsx)("section",{className:"single-widget__tag-section",children:s.map((function(e){return(0,E.jsx)("span",{className:"tags",children:e},e)}))}),(0,E.jsxs)("section",{className:"single-widget__footer-section",children:[(0,E.jsxs)("div",{children:[(0,E.jsx)(y.$0r,{style:h.$b}),o]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(y.OQA,{style:h.$b,title:"".concat(c," Lacs per annum")}),c," LPA"]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(y.BMe,{style:h.$b}),a," year"]})]})]})})},j=t(1142),S=(0,i.$j)((function(e){return{recommendedJobs:e.recommendedJobs}}),(function(e){return(0,r.DE)({fetchRecommendedJobs:j.AZ},e)}))((function(e){var n=e.recommendedJobs,t=e.fetchRecommendedJobs,o=(0,s.s0)();(0,c.useEffect)((function(){0===n.length&&t()}),[]);var a=function(e){o("/job-detail/".concat(e))};return(0,E.jsxs)("div",{className:"recommended-job-widget",children:[(0,E.jsx)("h2",{children:"Recommended jobs for you"}),(0,E.jsx)("div",{className:"recommended-job-widget-container",children:n.length>0?n.slice(0,4).map((function(e){return(0,E.jsx)(_,(0,u.Z)({},(0,u.Z)((0,u.Z)({},e),{},{onClick:a})),e.jobslug)})):(0,E.jsx)("div",{className:"recommended-job-widget__empty",children:(0,E.jsx)(d.Z,{})})}),n.length>4?(0,E.jsx)("div",{className:"see-more-container",children:(0,E.jsx)(l.Z,{onClick:function(){return o("/search?q=recommended")},children:"See more..."})}):(0,E.jsx)("br",{})]})})),T=function(e){var n=e.title,t=e.subtitle,o=e.onClick;return(0,E.jsx)("div",{className:"quick-profile",onClick:o,children:(0,E.jsxs)(p.Z,{hoverable:!0,children:[(0,E.jsx)("div",{className:"quick-profile__avatar",children:(0,E.jsx)(f.C,{size:55,children:n?n[0]:""})}),(0,E.jsxs)("div",{className:"quick-profile__content",children:[(0,E.jsx)("h3",{children:(0,E.jsx)("strong",{title:n,children:n})}),(0,E.jsx)("p",{children:t})]})]})})},m=(0,i.$j)((function(e){return{trendingJobs:e.trendingJobs}}),(function(e){return(0,r.DE)({fetchTrendingJobs:j.dP,fetchJobDetail:j.RG},e)}))((function(e){var n=e.trendingJobs,t=e.fetchTrendingJobs,o=(0,s.s0)();(0,c.useEffect)((function(){0===n.length&&t()}),[]);var a=function(e){o("/job-detail/".concat(e))};return(0,E.jsxs)("div",{className:"recommended-job-widget",children:[(0,E.jsx)("h2",{children:"Top trending jobs"}),(0,E.jsx)("div",{className:"recommended-job-widget-container",children:n.length>0?n.slice(0,4).map((function(e){return(0,E.jsx)(_,(0,u.Z)({},(0,u.Z)((0,u.Z)({},e),{},{onClick:a})),e.jobslug)})):(0,E.jsx)("div",{className:"recommended-job-widget__empty",children:(0,E.jsx)(d.Z,{})})}),n.length>4?(0,E.jsx)("div",{className:"see-more-container",children:(0,E.jsx)(l.Z,{onClick:function(){o("/search?q=trending"),(0,j.oz)("trending")},children:"See more..."})}):(0,E.jsx)("br",{})]})})),N=(0,i.$j)((function(e){return{profileDetails:e.profileDetails}}),(function(e){return(0,r.DE)({fetchCanProfile:j.wF},e)}))((function(e){var n=e.handleProfileClick,t=e.fetchCanProfile,o=e.profileDetails;return(0,c.useEffect)((function(){0===Object.keys(o).length&&t()}),[]),(0,E.jsxs)("div",{className:"candidate-landing",children:[(0,E.jsx)("div",{className:"candidate-landing__left",children:(0,E.jsx)(T,{onClick:n,title:o.name,subtitle:o.jobTitle})}),(0,E.jsxs)("div",{className:"candidate-landing__right",children:[(0,E.jsx)(S,{}),(0,E.jsx)(m,{})]})]})})),D=function(e){var n=e.skills,t=e.jobTitle,o=e.name,a=e.handleClick;return(0,E.jsxs)(p.Z,{hoverable:!0,onClick:function(){return a(e)},className:"recommended-candidate__widget__card",children:[(0,E.jsxs)("section",{className:"each-widget",children:[(0,E.jsx)(f.C,{size:55,children:o[0]}),(0,E.jsxs)("div",{className:"right-section",children:[(0,E.jsx)("h3",{children:o}),(0,E.jsx)("span",{children:t})]})]}),(0,E.jsx)("div",{className:"tag-section",children:n.map((function(e){return(0,E.jsx)("span",{className:"tags",children:e},e)}))})]})},b=(0,i.$j)((function(e){return{recommendedCandidates:e.recommendedCandidates}}),(function(e){return(0,r.DE)({fetchRecommendedCandidates:j.VO,setRecruiterCandidateDetails:j.mT},e)}))((function(e){var n=e.recommendedCandidates,t=e.fetchRecommendedCandidates,o=e.setRecruiterCandidateDetails,a=(0,s.s0)();(0,c.useEffect)((function(){0===n.length&&t()}),[]);var r=function(e){o(e),a("/candidate/recommended/".concat(e.aboutid))};return(0,E.jsxs)("div",{className:"recommended-candidates-widget",children:[(0,E.jsx)("h2",{children:"Recommended candidates"}),n.length?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("div",{className:"recommended-candidates-widget-container",children:n.slice(0,3).map((function(e){return(0,E.jsx)(D,(0,u.Z)({},(0,u.Z)((0,u.Z)({},e),{},{handleClick:r})),e)}))}),n.length>3&&(0,E.jsx)("div",{className:"see-more-container",children:(0,E.jsx)(l.Z,{onClick:function(){a("/recruiter/search")},children:"See more..."})})]}):(0,E.jsx)("div",{children:(0,E.jsx)(d.Z,{})})]})})),v=t(6573),g=t(6355),A=(0,i.$j)((function(e){return{recentJobs:e.recentJobs}}),(function(e){return(0,r.DE)({fetchPostedJobs:j.PK,fetchJobDetail:j.RG},e)}))((function(e){var n=e.recentJobs,t=e.fetchPostedJobs,o=(0,s.s0)();(0,c.useEffect)((function(){0===n.length&&t()}),[]);var a=function(e){o("/recruiter/post/".concat(e))};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:"posted-jobs",children:[(0,E.jsx)("h2",{children:"Jobs posted by you"}),n.length>0?(0,E.jsx)("div",{className:"posted-jobs__container",children:n.map((function(e){return(0,E.jsx)(_,(0,u.Z)({},(0,u.Z)((0,u.Z)({},e),{},{onClick:a})),JSON.stringify(e))}))}):(0,E.jsxs)("div",{className:"post-jobs__empty-section__button",children:[(0,E.jsx)(d.Z,{description:"No Data, Please post a job and manage here!"}),(0,E.jsxs)(l.Z,{onClick:function(){return o("/recruiter/postjob")},type:"primary",children:[(0,E.jsx)(g.wEH,{className:"icon"}),"\xa0Post a Job"]})]})]}),(0,E.jsx)("div",{className:"posted-jobs__footer",children:(0,E.jsx)(v.Z,{title:"Post a job",children:(0,E.jsx)(l.Z,{shape:"circle",onClick:function(){return o("/recruiter/postjob")},type:"primary",children:(0,E.jsx)(g.wEH,{className:"icon"})})})})]})})),I=(0,i.$j)((function(e){return{profileDetails:e.profileDetails}}),(function(e){return(0,r.DE)({fetchRecProfile:j.NN},e)}))((function(e){var n=e.fetchRecProfile,t=e.handleProfileClick,o=e.profileDetails;return(0,c.useEffect)((function(){0===Object.keys(o).length&&n()}),[]),(0,E.jsxs)("div",{className:"recruiter-landing",children:[(0,E.jsxs)("div",{className:"recruiter-landing__left",children:[(0,E.jsx)(T,{onClick:t,title:o.name,subtitle:o.location}),(0,E.jsx)(b,{})]}),(0,E.jsx)("div",{className:"recruiter-landing__right",children:(0,E.jsx)(A,{})})]})})),O=t(8023),L=(0,i.$j)((function(e){return{userType:e.userType,loading:e.loading}}),(function(e){return(0,r.DE)({setUserType:j.ex},e)}))((function(e){var n=e.userType,t=e.setUserType,r=e.loading,i=(0,s.s0)();(0,c.useEffect)((function(){if((0,h.$8)()){var e="userCandidate"===(0,h.PR)().user.role?"candidate":"recruiter";t(e)}else i("/login")}),[]);var u=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var n,a,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,h.PR)(),a=n.user,c="userCandidate"===a.role?"candidate":"recruiter",t(c),i("/".concat(c,"/profile"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,E.jsx)("div",{className:"landing-page-container",children:function(e){switch(e){case"candidate":return(0,E.jsx)(N,{handleProfileClick:u});case"recruiter":return(0,E.jsx)(I,{handleProfileClick:u});default:return r?(0,E.jsx)("div",{}):(0,E.jsx)(O.Z,{})}}(n)})}))},1142:function(e,n,t){t.d(n,{HT:function(){return S},cS:function(){return C},FA:function(){return E},Kj:function(){return G},$u:function(){return I},wF:function(){return p},r$:function(){return O},gT:function(){return x},tz:function(){return A},RG:function(){return D},PK:function(){return _},NN:function(){return f},VO:function(){return b},AZ:function(){return N},Su:function(){return L},NF:function(){return R},VL:function(){return j},T7:function(){return Z},dP:function(){return m},ip:function(){return T},rs:function(){return y},s7:function(){return h},tR:function(){return u},K4:function(){return d},mT:function(){return v},oz:function(){return g},ex:function(){return l},h:function(){return k.h}});var o=t(1413),a=t(4165),c=t(5861),r=t(3085),i=t(3065),s=t(5850),u=function(e){return function(n){n({type:"SET_AUTH",payload:e})}},d=function(e){return function(n){n({type:"SET_LOADING",payload:e})}},l=function(e){return function(n){n({type:"SET_USER_TYPE",payload:e})}},p=function(){return function(){var e=(0,c.Z)((0,a.Z)().mark((function e(n){var t,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"SET_LOADING",payload:!0}),e.prev=1,e.next=4,i.Z.get("/api/user-can/user");case 4:t=e.sent,o=t.data,n({type:"SET_PROFILE_DETAIL",payload:o.user}),n({type:"SET_LOADING",payload:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n({type:"SET_LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}()},f=function(){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/user").then((function(n){e({type:"SET_PROFILE_DETAIL",payload:n.user}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},y=function(e,n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.post("/api/user-can/user",e).then((function(){t({type:"SET_PROFILE_DETAIL",payload:e}),n(),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},h=function(e,n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.post("/api/user-rec/user",e).then((function(){t({type:"SET_PROFILE_DETAIL",payload:e}),n(),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},E=function(e,n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.post("/api/jobs/job",e).then((function(e){var o;t({type:"ADD_JOB_POST",payload:null===e||void 0===e||null===(o=e.jobDetail)||void 0===o?void 0:o.jobUploaded}),r.Z.success({message:"Job posted successfully",description:"Please visit the recent jobs posted section to get updates!"}),n(),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},_=function(){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/job").then((function(n){e({type:"SET_POSTED_JOBS",payload:n.jobRecord}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},j=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/job?skills=".concat(e.join(","))).then((function(e){n({type:"SET_SKILL_SEARCH_RESULT",payload:(0,s.e)(k.h.getState().skillSearch,e.jobRecord,"jobslug")}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},S=function(e,n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.post("/api/user-can/apply",{jobid:e}).then((function(e){null!==e&&void 0!==e&&e.success?(t({type:"SET_LOADING",payload:!1}),n&&n(),r.Z.success({message:"Hurray!, applied successfully"})):null!==e&&void 0!==e&&e.message&&(r.Z.error({message:"Already applied!"}),t({type:"SET_LOADING",payload:!1}))})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},T=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/job?cname=".concat(e)).then((function(e){n({type:"SET_SKILL_SEARCH_RESULT",payload:e.jobRecord}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},m=function(){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/trend").then((function(n){null!==n&&void 0!==n&&n.jobRecord?e({type:"SET_TRENDING_JOBS",payload:n.jobRecord}):e({type:"SET_TRENDING_JOBS",payload:[]}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1}),e({type:"SET_TRENDING_JOBS",payload:[]})}))}},N=function(){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/reco").then((function(n){null!==n&&void 0!==n&&n.jobRecord?e({type:"SET_RECOMMENDED_JOBS",payload:n.jobRecord}):e({type:"SET_RECOMMENDED_JOBS",payload:[]}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1}),e({type:"SET_RECOMMENDED_JOBS",payload:[]})}))}},D=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/jobdetail?jobid=".concat(e)).then((function(e){n({type:"SET_ACTIVE_JOB",payload:e.jobRecord}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},b=function(){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/getcans").then((function(n){e({type:"SET_RECOMMENDED_CANDIDATES",payload:n.user}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},v=function(e){return function(n){n({type:"SET_RECRUITER_CANDIDATE_DETAILS",payload:e})}},g=function(e){return function(n){n({type:"SET_SEARCH_TYPE",payload:e})}},A=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/job?cname=".concat(e)).then((function(e){n({type:"SET_COMPANY_SEARCH",payload:e.jobRecord}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},I=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/applied?jobid=".concat(e)).then((function(e){null!==e&&void 0!==e&&e.enrolledCandidate?n({type:"SET_APPLIED_CANDIDATES",payload:(0,s.e)(k.h.getState().appliedCandidates,e.enrolledCandidate,"userId")}):n({type:"SET_APPLIED_CANDIDATES",payload:[]}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1}),n({type:"SET_APPLIED_CANDIDATES",payload:[]})}))}},O=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/getcan?canid=".concat(e)).then((function(t){var a;if(null!==t&&void 0!==t&&null!==(a=t.user)&&void 0!==a&&a.about){var c=k.h.getState(),r=[];switch(c.searchType){case"recommended":r=c.recommendedCandidates.map((function(a){var c;return(null===(c=a)||void 0===c?void 0:c.aboutid)===e&&(a=(0,o.Z)((0,o.Z)({},a),t.user),n({type:"SET_RECRUITER_CANDIDATE_DETAILS",payload:a})),a})),n({type:"SET_RECOMMENDED_CANDIDATES",payload:r});break;case"skillSearch":r=c.skillSearch.map((function(n){var a;return(null===(a=n)||void 0===a?void 0:a.aboutid)===e&&(n=(0,o.Z)((0,o.Z)({},n),t.user)),n})),n({type:"SET_SKILL_SEARCH_RESULT",payload:r});break;default:r=c.recommendedCandidates.map((function(n){var a;return(null===(a=n)||void 0===a?void 0:a.aboutid)===e&&(n=(0,o.Z)((0,o.Z)({},n),t.user)),n})),n({type:"SET_RECOMMENDED_CANDIDATES",payload:r})}}n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1}),n({type:"SET_APPLIED_CANDIDATES",payload:[]})}))}},L=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/search-can?skills=".concat(e.join(","))).then((function(e){n({type:"SET_SKILL_SEARCH_RESULT",payload:(0,s.e)(k.h.getState().skillSearch,null===e||void 0===e?void 0:e.user,"aboutid")}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},x=function(){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.get("/api/utils/cities").then((function(n){e({type:"SET_CITIES",payload:null===n||void 0===n?void 0:n.cities}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},Z=function(){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.get("/api/utils/skills").then((function(n){e({type:"SET_SKILLS",payload:null===n||void 0===n?void 0:n.skills}),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},C=function(){return function(e){e({type:"CLEAR_STATE",payload:{}})}},G=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/getcan?canid=".concat(e)).then((function(t){var a=k.h.getState().appliedCandidates.map((function(n){var a;return(null===(a=n)||void 0===a?void 0:a.userId)===e&&(n=(0,o.Z)((0,o.Z)({},n),t.user)),n}));n({type:"SET_APPLIED_CANDIDATES",payload:a}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},R=function(e){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/jobdetail?jobid=".concat(e)).then((function(t){var a=k.h.getState(),c=[];switch(a.searchType){case"companySearch":c=a.companySearch.map((function(n){var a;return(null===(a=n)||void 0===a?void 0:a.jobslug)===e&&(n=(0,o.Z)((0,o.Z)({},n),t.jobRecord)),n})),n({type:"SET_COMPANY_SEARCH",payload:c});break;case"skillSearch":c=a.skillSearch.map((function(n){var a;return(null===(a=n)||void 0===a?void 0:a.jobslug)===e&&(n=(0,o.Z)((0,o.Z)({},n),t.jobRecord)),n})),n({type:"SET_SKILL_SEARCH_RESULT",payload:c});break;case"recommended":c=a.recommendedJobs.map((function(n){var a;return(null===(a=n)||void 0===a?void 0:a.jobslug)===e&&(n=(0,o.Z)((0,o.Z)({},n),t.jobRecord)),n})),n({type:"SET_RECOMMENDED_JOBS",payload:c});break;case"trending":c=a.trendingJobs.map((function(n){var a;return(null===(a=n)||void 0===a?void 0:a.jobslug)===e&&(n=(0,o.Z)((0,o.Z)({},n),t.jobRecord)),n})),n({type:"SET_TRENDING_JOBS",payload:c});break;default:c=a.recommendedJobs.map((function(n){var a;return(null===(a=n)||void 0===a?void 0:a.jobslug)===e&&(n=(0,o.Z)((0,o.Z)({},n),t.jobRecord)),n})),n({type:"SET_RECOMMENDED_JOBS",payload:c})}n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},k=(t(8791),t(4025))},3065:function(e,n,t){var o=t(4165),a=t(5861),c="http://localhost:3005",r=function(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}};n.Z={auth:function(e,n){return(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c,"/api/auth/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})));case 1:case"end":return t.stop()}}),t)})))()},get:function(e){return(0,a.Z)((0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(c).concat(e),{method:"GET",headers:r()}).then((function(e){return e.json()})));case 1:case"end":return n.stop()}}),n)})))()},post:function(e,n){return(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c).concat(e),{method:"POST",headers:r(),body:JSON.stringify(n)}).then((function(e){return e.json()})));case 1:case"end":return t.stop()}}),t)})))()},put:function(e,n){return(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c).concat(e),{method:"PUT",headers:r(),body:JSON.stringify(n)}).then((function(e){return e.json()})));case 1:case"end":return t.stop()}}),t)})))()},delete:function(e,n){return(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c).concat(e),{method:"DELETE",headers:r(),body:JSON.stringify(n)}).then((function(e){return e.json()})));case 1:case"end":return t.stop()}}),t)})))()}}},2381:function(){}}]);
//# sourceMappingURL=482.53f31db3.chunk.js.map