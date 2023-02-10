"use strict";(self.webpackChunkgeekinsider_ui=self.webpackChunkgeekinsider_ui||[]).push([[677],{8769:function(n,t,e){e.d(t,{Z:function(){return a}});e(2791);var o=e(184),a=function(n){var t=n.children,e=n.title;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("b",{children:e})}),null===t||void 0===t?void 0:t.split(/[\n]+/).map((function(n,t){return(0,o.jsxs)("span",{children:[n,(0,o.jsx)("br",{})]},"".concat(n,"-").concat(t))}))]})}},6802:function(n,t,e){e.d(t,{Z:function(){return c}});e(2791);var o=e(8817),a=e(184),c=function(n){var t=n.gitInfo,e=t.repoCount,c=t.skills,r=t.skillsOrder;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"skills-section",children:[(0,a.jsx)("h3",{children:(0,a.jsx)("b",{children:"Skills"})}),c.map((function(n,t){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:n}),(0,a.jsx)(o.Z,{percent:r[t],showInfo:!1,strokeColor:"#F2EE8B"})]})}))]}),Boolean(e)&&(0,a.jsxs)("section",{className:"github-repo-section",children:[(0,a.jsx)("h3",{children:(0,a.jsx)("b",{children:"Github repo count"})}),(0,a.jsx)("h2",{children:e})]})]})}},6677:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var o=e(2791),a=e(7309),c=e(7358),r=e(7781),i=e(8687),u=e(7689),p=e(8023),d=e(6856),l=e(5850),s=e(1142),y=e(8769),f=e(6802),E=e(184),S=(0,i.$j)((function(n){return{activeJob:n.activeJob,appliedCandidates:n.appliedCandidates,loading:n.loading}}),(function(n){return(0,r.DE)({fetchJobDetail:s.RG},n)}))((function(n){var t,e=(0,u.s0)(),r=(0,u.bS)("/recruiter/post/:slug"),i=n.activeJob,s=n.loading,S=n.fetchJobDetail,T=i.companyName,_=i.ctc,h=i.exp,D=i.jobDescription,A=i.jobLocation,I=i.jobTitle,N=i.skills,O=i.gitInfo;(0,o.useEffect)((function(){S(r.params.slug)}),[]);return(0,E.jsx)(E.Fragment,{children:Object.keys(i).length>0?(0,E.jsxs)("div",{className:"application-manager",children:[(0,E.jsxs)("section",{className:"each-widget",children:[(0,E.jsxs)("div",{className:"right-section",children:[(0,E.jsx)("h2",{children:I}),(0,E.jsx)("span",{children:T})]}),(0,E.jsx)(a.Z,{type:"primary",onClick:function(){e("/recruiter/post/".concat(r.params.slug,"/applied-candidates"))},children:"Manage"})]}),(0,E.jsx)("section",{className:"tag-section",children:N.map((function(n){return(0,E.jsx)("span",{className:"tags",children:n},n)}))}),(0,E.jsxs)("section",{className:"footer-section",children:[(0,E.jsxs)("div",{children:[(0,E.jsx)(d.$0r,{style:l.$b}),A]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(d.BMe,{style:l.$b}),h," year"]}),(0,E.jsxs)("div",{title:"".concat(_," lacs per annum"),children:[(0,E.jsx)(d.OQA,{style:l.$b}),_," LPA"]})]}),(0,E.jsx)(y.Z,{title:"About the job",children:D}),O&&(null===(t=Object.keys(O))||void 0===t?void 0:t.length)>0&&(0,E.jsx)(c.Z,{children:(0,E.jsx)("div",{className:"profile-footer",children:(0,E.jsx)(f.Z,{gitInfo:O})})})]}):!s&&(0,E.jsx)(p.Z,{})})}))},1142:function(n,t,e){e.d(t,{HT:function(){return h},cS:function(){return R},FA:function(){return S},Kj:function(){return C},$u:function(){return v},wF:function(){return s},r$:function(){return G},gT:function(){return Z},tz:function(){return b},RG:function(){return N},PK:function(){return T},NN:function(){return y},VO:function(){return O},AZ:function(){return I},Su:function(){return g},NF:function(){return x},VL:function(){return _},T7:function(){return m},dP:function(){return A},ip:function(){return D},rs:function(){return f},s7:function(){return E},tR:function(){return p},K4:function(){return d},mT:function(){return L},oz:function(){return j},ex:function(){return l},h:function(){return k.h}});var o=e(1413),a=e(4165),c=e(5861),r=e(3085),i=e(3065),u=e(5850),p=function(n){return function(t){t({type:"SET_AUTH",payload:n})}},d=function(n){return function(t){t({type:"SET_LOADING",payload:n})}},l=function(n){return function(t){t({type:"SET_USER_TYPE",payload:n})}},s=function(){return function(){var n=(0,c.Z)((0,a.Z)().mark((function n(t){var e,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"SET_LOADING",payload:!0}),n.prev=1,n.next=4,i.Z.get("/api/user-can/user");case 4:e=n.sent,o=e.data,t({type:"SET_PROFILE_DETAIL",payload:o.user}),t({type:"SET_LOADING",payload:!1}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),t({type:"SET_LOADING",payload:!1});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t){return n.apply(this,arguments)}}()},y=function(){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/user").then((function(t){n({type:"SET_PROFILE_DETAIL",payload:t.user}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},f=function(n,t){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.post("/api/user-can/user",n).then((function(){e({type:"SET_PROFILE_DETAIL",payload:n}),t(),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},E=function(n,t){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.post("/api/user-rec/user",n).then((function(){e({type:"SET_PROFILE_DETAIL",payload:n}),t(),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},S=function(n,t){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.post("/api/jobs/job",n).then((function(n){var o;e({type:"ADD_JOB_POST",payload:null===n||void 0===n||null===(o=n.jobDetail)||void 0===o?void 0:o.jobUploaded}),r.Z.success({message:"Job posted successfully",description:"Please visit the recent jobs posted section to get updates!"}),t(),e({type:"SET_LOADING",payload:!1})})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},T=function(){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/job").then((function(t){n({type:"SET_POSTED_JOBS",payload:t.jobRecord}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},_=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/job?skills=".concat(n.join(","))).then((function(n){t({type:"SET_SKILL_SEARCH_RESULT",payload:(0,u.e)(k.h.getState().skillSearch,n.jobRecord,"jobslug")}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},h=function(n,t){return function(e){e({type:"SET_LOADING",payload:!0}),i.Z.post("/api/user-can/apply",{jobid:n}).then((function(n){null!==n&&void 0!==n&&n.success?(e({type:"SET_LOADING",payload:!1}),t&&t(),r.Z.success({message:"Hurray!, applied successfully"})):null!==n&&void 0!==n&&n.message&&(r.Z.error({message:"Already applied!"}),e({type:"SET_LOADING",payload:!1}))})).catch((function(){e({type:"SET_LOADING",payload:!1})}))}},D=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/job?cname=".concat(n)).then((function(n){t({type:"SET_SKILL_SEARCH_RESULT",payload:n.jobRecord}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},A=function(){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/trend").then((function(t){null!==t&&void 0!==t&&t.jobRecord?n({type:"SET_TRENDING_JOBS",payload:t.jobRecord}):n({type:"SET_TRENDING_JOBS",payload:[]}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1}),n({type:"SET_TRENDING_JOBS",payload:[]})}))}},I=function(){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/reco").then((function(t){null!==t&&void 0!==t&&t.jobRecord?n({type:"SET_RECOMMENDED_JOBS",payload:t.jobRecord}):n({type:"SET_RECOMMENDED_JOBS",payload:[]}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1}),n({type:"SET_RECOMMENDED_JOBS",payload:[]})}))}},N=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/jobdetail?jobid=".concat(n)).then((function(n){t({type:"SET_ACTIVE_JOB",payload:n.jobRecord}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},O=function(){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/getcans").then((function(t){n({type:"SET_RECOMMENDED_CANDIDATES",payload:t.user}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},L=function(n){return function(t){t({type:"SET_RECRUITER_CANDIDATE_DETAILS",payload:n})}},j=function(n){return function(t){t({type:"SET_SEARCH_TYPE",payload:n})}},b=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/job?cname=".concat(n)).then((function(n){t({type:"SET_COMPANY_SEARCH",payload:n.jobRecord}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},v=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/applied?jobid=".concat(n)).then((function(n){null!==n&&void 0!==n&&n.enrolledCandidate?t({type:"SET_APPLIED_CANDIDATES",payload:(0,u.e)(k.h.getState().appliedCandidates,n.enrolledCandidate,"userId")}):t({type:"SET_APPLIED_CANDIDATES",payload:[]}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1}),t({type:"SET_APPLIED_CANDIDATES",payload:[]})}))}},G=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/getcan?canid=".concat(n)).then((function(e){var a;if(null!==e&&void 0!==e&&null!==(a=e.user)&&void 0!==a&&a.about){var c=k.h.getState(),r=[];switch(c.searchType){case"recommended":r=c.recommendedCandidates.map((function(a){var c;return(null===(c=a)||void 0===c?void 0:c.aboutid)===n&&(a=(0,o.Z)((0,o.Z)({},a),e.user),t({type:"SET_RECRUITER_CANDIDATE_DETAILS",payload:a})),a})),t({type:"SET_RECOMMENDED_CANDIDATES",payload:r});break;case"skillSearch":r=c.skillSearch.map((function(t){var a;return(null===(a=t)||void 0===a?void 0:a.aboutid)===n&&(t=(0,o.Z)((0,o.Z)({},t),e.user)),t})),t({type:"SET_SKILL_SEARCH_RESULT",payload:r});break;default:r=c.recommendedCandidates.map((function(t){var a;return(null===(a=t)||void 0===a?void 0:a.aboutid)===n&&(t=(0,o.Z)((0,o.Z)({},t),e.user)),t})),t({type:"SET_RECOMMENDED_CANDIDATES",payload:r})}}t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1}),t({type:"SET_APPLIED_CANDIDATES",payload:[]})}))}},g=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/search-can?skills=".concat(n.join(","))).then((function(n){t({type:"SET_SKILL_SEARCH_RESULT",payload:(0,u.e)(k.h.getState().skillSearch,null===n||void 0===n?void 0:n.user,"aboutid")}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},Z=function(){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/utils/cities").then((function(t){n({type:"SET_CITIES",payload:null===t||void 0===t?void 0:t.cities}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},m=function(){return function(n){n({type:"SET_LOADING",payload:!0}),i.Z.get("/api/utils/skills").then((function(t){n({type:"SET_SKILLS",payload:null===t||void 0===t?void 0:t.skills}),n({type:"SET_LOADING",payload:!1})})).catch((function(){n({type:"SET_LOADING",payload:!1})}))}},R=function(){return function(n){n({type:"CLEAR_STATE",payload:{}})}},C=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/user-rec/getcan?canid=".concat(n)).then((function(e){var a=k.h.getState().appliedCandidates.map((function(t){var a;return(null===(a=t)||void 0===a?void 0:a.userId)===n&&(t=(0,o.Z)((0,o.Z)({},t),e.user)),t}));t({type:"SET_APPLIED_CANDIDATES",payload:a}),t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},x=function(n){return function(t){t({type:"SET_LOADING",payload:!0}),i.Z.get("/api/jobs/jobdetail?jobid=".concat(n)).then((function(e){var a=k.h.getState(),c=[];switch(a.searchType){case"companySearch":c=a.companySearch.map((function(t){var a;return(null===(a=t)||void 0===a?void 0:a.jobslug)===n&&(t=(0,o.Z)((0,o.Z)({},t),e.jobRecord)),t})),t({type:"SET_COMPANY_SEARCH",payload:c});break;case"skillSearch":c=a.skillSearch.map((function(t){var a;return(null===(a=t)||void 0===a?void 0:a.jobslug)===n&&(t=(0,o.Z)((0,o.Z)({},t),e.jobRecord)),t})),t({type:"SET_SKILL_SEARCH_RESULT",payload:c});break;case"recommended":c=a.recommendedJobs.map((function(t){var a;return(null===(a=t)||void 0===a?void 0:a.jobslug)===n&&(t=(0,o.Z)((0,o.Z)({},t),e.jobRecord)),t})),t({type:"SET_RECOMMENDED_JOBS",payload:c});break;case"trending":c=a.trendingJobs.map((function(t){var a;return(null===(a=t)||void 0===a?void 0:a.jobslug)===n&&(t=(0,o.Z)((0,o.Z)({},t),e.jobRecord)),t})),t({type:"SET_TRENDING_JOBS",payload:c});break;default:c=a.recommendedJobs.map((function(t){var a;return(null===(a=t)||void 0===a?void 0:a.jobslug)===n&&(t=(0,o.Z)((0,o.Z)({},t),e.jobRecord)),t})),t({type:"SET_RECOMMENDED_JOBS",payload:c})}t({type:"SET_LOADING",payload:!1})})).catch((function(){t({type:"SET_LOADING",payload:!1})}))}},k=(e(8791),e(4025))},3065:function(n,t,e){var o=e(4165),a=e(5861),c="http://localhost:3005",r=function(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}};t.Z={auth:function(n,t){return(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(c,"/api/auth/").concat(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(n){return n.json()})));case 1:case"end":return e.stop()}}),e)})))()},get:function(n){return(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(c).concat(n),{method:"GET",headers:r()}).then((function(n){return n.json()})));case 1:case"end":return t.stop()}}),t)})))()},post:function(n,t){return(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(c).concat(n),{method:"POST",headers:r(),body:JSON.stringify(t)}).then((function(n){return n.json()})));case 1:case"end":return e.stop()}}),e)})))()},put:function(n,t){return(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(c).concat(n),{method:"PUT",headers:r(),body:JSON.stringify(t)}).then((function(n){return n.json()})));case 1:case"end":return e.stop()}}),e)})))()},delete:function(n,t){return(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(c).concat(n),{method:"DELETE",headers:r(),body:JSON.stringify(t)}).then((function(n){return n.json()})));case 1:case"end":return e.stop()}}),e)})))()}}}}]);
//# sourceMappingURL=677.a6079cd1.chunk.js.map