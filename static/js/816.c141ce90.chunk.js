"use strict";(self.webpackChunkgeekinsider_ui=self.webpackChunkgeekinsider_ui||[]).push([[816],{6802:function(e,s,n){n.d(s,{Z:function(){return t}});n(2791);var i=n(8817),c=n(184),t=function(e){var s=e.gitInfo,n=s.repoCount,t=s.skills,r=s.skillsOrder;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("section",{className:"skills-section",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("b",{children:"Skills"})}),t.map((function(e,s){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{children:e}),(0,c.jsx)(i.Z,{percent:r[s],showInfo:!1,strokeColor:"#F2EE8B"})]})}))]}),Boolean(n)&&(0,c.jsxs)("section",{className:"github-repo-section",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("b",{children:"Github repo count"})}),(0,c.jsx)("h2",{children:n})]})]})}},816:function(e,s,n){n.r(s),n.d(s,{SearchResults:function(){return i},default:function(){return Z}});var i={};n.r(i),n.d(i,{default:function(){return C}});var c=n(2791),t=n(8687),r=n(7781),a=n(1413),l=n(9439),d=n(7358),o=n(7492),h=n(6106),u=n(914),j=n(9421),x=n(6856),m=n(7309),f=n(6355),p=n(5850),v=n(8769),b=n(1142),g=n(6802),k=n(184),N=(0,t.$j)((function(e){return{searchType:e.searchType}}),(function(e){return(0,r.DE)({fetchCandidateDetails:b.r$},e)}))((function(e){var s,n=e.aboutid,i=e.ctc,t=e.exp,r=e.githubUrl,a=e.jobTitle,l=e.location,o=e.name,h=e.skills,u=e.whatsappNumber,j=e.about,b=e.fetchCandidateDetails,N=e.gitInfo,y=e.searchType;return(0,c.useEffect)((function(){N||b(n)}),[]),(0,c.useEffect)((function(){N||b(n)}),[n,y]),(0,k.jsxs)("div",{className:"recruiter-search-details",children:[(0,k.jsxs)("section",{className:"each-widget",children:[(0,k.jsxs)("div",{className:"right-section",children:[(0,k.jsx)("h2",{children:o}),(0,k.jsx)("span",{children:a})]}),(0,k.jsx)("div",{className:"action-buttons",children:(0,k.jsxs)(m.Z,{type:"primary",href:(0,p.yP)(u,o),target:"_blank",children:[(0,k.jsx)(f.xpo,{className:"whatsapp-icon"}),"\xa0Connect"]})})]}),(0,k.jsx)("section",{className:"tags-section",children:null===h||void 0===h?void 0:h.map((function(e){return(0,k.jsx)("span",{className:"tags",children:e},e)}))}),(0,k.jsxs)("section",{className:"footer-section",children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(x.$0r,{style:p.$b}),l]}),(0,k.jsxs)("div",{title:"".concat(i," lacs per annum"),children:[(0,k.jsx)(x.OQA,{style:p.$b}),i," LPA"]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(x.BMe,{style:p.$b}),t," year"]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(f.hJX,{style:p.$b}),(0,k.jsx)("a",{href:(0,p.Ed)(r),target:"_blank",rel:"noreferrer",children:"Github"})]})]}),(0,k.jsx)(v.Z,{title:"About",children:j}),(0,k.jsx)("br",{}),N&&(null===(s=Object.keys(N))||void 0===s?void 0:s.length)>0&&(0,k.jsx)(d.Z,{children:(0,k.jsx)("div",{className:"profile-footer",children:(0,k.jsx)(g.Z,{gitInfo:N})})})]})})),y=function(e){var s=e.itm,n=e.setSelectedData,i=e.selectedData,c=s.jobTitle,t=s.skills,r=s.location,a=s.ctc,l=s.exp,h=s.name;return(0,k.jsxs)(d.Z,{hoverable:!0,onClick:function(){return n(s)},className:(null===s||void 0===s?void 0:s.aboutid)===(null===i||void 0===i?void 0:i.aboutid)?"active-card":"",children:[(0,k.jsxs)("section",{className:"each-widget",children:[(0,k.jsx)(o.C,{size:55,children:h[0]}),(0,k.jsxs)("div",{className:"right-section",children:[(0,k.jsx)("h3",{title:h,children:h}),(0,k.jsx)("span",{children:c})]})]}),(0,k.jsx)("section",{className:"tags-section",children:t.map((function(e){return(0,k.jsx)("span",{className:"tags",children:e},e)}))}),(0,k.jsxs)("section",{className:"footer-section",children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(x.$0r,{style:p.$b}),r]}),(0,k.jsxs)("div",{title:"".concat(a," lacs per annum"),children:[(0,k.jsx)(x.OQA,{style:p.$b}),a," LPA"]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(x.BMe,{style:p.$b}),l," year"]})]})]})},C=(0,t.$j)((function(e){return{}}),(function(e){return(0,r.DE)({},e)}))((function(e){var s=e.data,n=(0,c.useState)({}),i=(0,l.Z)(n,2),t=i[0],r=i[1];return(0,c.useEffect)((function(){r(s[0])}),[s]),(0,k.jsx)("div",{className:"search__results",children:s.length?(0,k.jsxs)(h.Z,{children:[(0,k.jsx)(u.Z,{span:8,xs:{span:12},sm:{span:10},md:{span:8},lg:{span:6},children:(0,k.jsx)("div",{className:"search-result-widget-container",children:null===s||void 0===s?void 0:s.map((function(e,s){return(0,k.jsx)(y,{itm:e,index:s,selectedData:t,setSelectedData:r},e.aboutid)}))})}),(0,k.jsx)(u.Z,{span:16,xs:{span:12},sm:{span:14},md:{span:16},lg:{span:18},children:t&&Object.keys(t).length>0?(0,k.jsx)(N,(0,a.Z)({},(0,a.Z)({},t))):(0,k.jsx)(j.Z,{})})]}):(0,k.jsxs)("div",{className:"search__results__empty",children:[(0,k.jsx)("br",{}),(0,k.jsx)(j.Z,{})]})})})),Z=(0,t.$j)((function(e){return{skillSearch:e.skillSearch,recommendedCandidates:e.recommendedCandidates,searchType:e.searchType}}),(function(e){return(0,r.DE)({fetchRecommendedCandidates:b.VO},e)}))((function(e){var s,n=e.skillSearch,i=e.searchType,t=e.recommendedCandidates,r=e.fetchRecommendedCandidates;return(0,c.useEffect)((function(){"recommended"===i&&0===t.length&&r()}),[i]),(0,k.jsxs)("div",{className:"search",children:["recommended"===i&&(0,k.jsx)("div",{className:"search__heading",children:(0,k.jsx)("h2",{children:"Recommended Candidates"})}),"skillSearch"===i&&(0,k.jsx)("div",{className:"search__heading",children:(0,k.jsx)("h2",{children:"Results based on Skills"})}),(0,k.jsx)(C,{data:(s=i,"skillSearch"===s?n:t)})]})}))}}]);
//# sourceMappingURL=816.c141ce90.chunk.js.map