"use strict";(self.webpackChunkgeekinsider_ui=self.webpackChunkgeekinsider_ui||[]).push([[451],{1284:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(2791),a=t(7358),s=t(7309),c=t(6856),o=t(7781),i=t(8687),l=t(8769),u=t(5850),d=t(1142),h=t(184),p=(0,i.$j)((function(e){return{searchType:e.searchType}}),(function(e){return(0,o.DE)({applyForJob:d.HT,fetchSearchJobDetail:d.NF},e)}))((function(e){var n=e.jobTitle,t=e.skills,o=e.jobLocation,i=e.ctc,d=e.exp,p=e.searchType,f=e.jobDescription,m=e.companyName,v=e.applyForJob,x=e.jobslug,b=e.fetchSearchJobDetail,y="string"===typeof t?t.split(","):t;return(0,r.useEffect)((function(){f||b(x)}),[]),(0,r.useEffect)((function(){f||b(x)}),[x,p]),(0,h.jsx)("div",{className:"job-posting-detail-widget",children:(0,h.jsxs)(a.Z,{children:[(0,h.jsxs)("section",{className:"each-widget",children:[(0,h.jsxs)("div",{className:"right-section",children:[(0,h.jsx)("h3",{children:n}),(0,h.jsx)("span",{children:m})]}),(0,h.jsx)("div",{className:"action-buttons",children:(0,h.jsx)(s.Z,{type:"primary",onClick:function(){x&&v(x)},children:"Apply"})})]}),(0,h.jsx)("section",{className:"tags-section",children:y.map((function(e){return(0,h.jsx)("span",{className:"tags",children:e},e)}))}),(0,h.jsxs)("section",{className:"footer-section",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(c.$0r,{style:u.$b}),o]}),(0,h.jsxs)("div",{title:"".concat(i," lacs per annum"),children:[(0,h.jsx)(c.OQA,{style:u.$b}),i," LPA"]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(c.BMe,{style:u.$b}),d," year"]})]}),(0,h.jsx)(l.Z,{title:"About the job",children:f})]})})}))},6451:function(e,n,t){t.r(n),t.d(n,{SearchResults:function(){return r},default:function(){return C}});var r={};t.r(r),t.d(r,{default:function(){return j}});var a=t(2791),s=t(6592),c=t(8687),o=t(7781),i=t(1413),l=t(9439),u=t(7358),d=t(7492),h=t(6106),p=t(914),f=t(9421),m=t(6856),v=t(1284),x=t(5850),b=t(184),y=function(e){var n=e.itm,t=e.setSelectedData,r=e.selectedData,a=n.jobTitle,s=n.skills,c=n.jobLocation,o=n.ctc,i=n.exp,l=n.companyName;return(0,b.jsxs)(u.Z,{hoverable:!0,onClick:function(){return t(n)},className:(null===n||void 0===n?void 0:n.jobslug)===(null===r||void 0===r?void 0:r.jobslug)?"active-card":"",children:[(0,b.jsxs)("section",{className:"each-widget",children:[(0,b.jsx)(d.C,{size:55,children:l[0]}),(0,b.jsxs)("div",{className:"right-section",children:[(0,b.jsx)("span",{children:l}),(0,b.jsx)("h3",{title:a,children:a})]})]}),(0,b.jsx)("section",{className:"tags-section",children:s.map((function(e){return(0,b.jsx)("span",{className:"tags",children:e},e)}))}),(0,b.jsxs)("section",{className:"footer-section",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(m.$0r,{style:x.$b}),c]}),(0,b.jsxs)("div",{title:"".concat(o," lacs per annum"),children:[(0,b.jsx)(m.OQA,{style:x.$b}),o," LPA"]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(m.BMe,{style:x.$b}),i," year"]})]})]})},j=(0,c.$j)((function(e){return{}}),(function(e){return(0,o.DE)({},e)}))((function(e){var n=e.data,t=(0,a.useState)({}),r=(0,l.Z)(t,2),s=r[0],c=r[1];return(0,a.useEffect)((function(){c(n[0])}),[n]),(0,b.jsx)("div",{className:"search__results",children:n.length?(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.Z,{span:8,xs:{span:12},sm:{span:10},md:{span:8},lg:{span:6},children:(0,b.jsx)("div",{className:"search-result-widget-container",children:n.map((function(e,n){return(0,b.jsx)(y,{itm:e,index:n,selectedData:s,setSelectedData:c},null===e||void 0===e?void 0:e.jobslug)}))})}),(0,b.jsx)(p.Z,{span:16,xs:{span:12},sm:{span:14},md:{span:16},lg:{span:18},children:s&&Object.keys(s).length>0?(0,b.jsx)(v.Z,(0,i.Z)({},(0,i.Z)({},s))):(0,b.jsx)(f.Z,{})})]}):(0,b.jsxs)("div",{className:"search__results__empty",children:[(0,b.jsx)("br",{}),(0,b.jsx)(f.Z,{})]})})})),g=t(1142),C=(0,c.$j)((function(e){return{skillSearch:e.skillSearch,trendingJobs:e.trendingJobs,recommendedJobs:e.recommendedJobs,companySearch:e.companySearch,searchType:e.searchType}}),(function(e){return(0,o.DE)({setSearchType:g.oz,fetchRecommendedJobs:g.AZ,fetchTrendingJobs:g.dP},e)}))((function(e){var n=e.skillSearch,t=e.searchType,r=e.trendingJobs,c=e.recommendedJobs,o=e.companySearch,i=e.setSearchType,l=e.fetchRecommendedJobs,u=e.fetchTrendingJobs;return(0,a.useEffect)((function(){"recommended"===t?0===c.length&&l():"trending"===t&&0===r.length&&u()}),[t]),(0,b.jsxs)("div",{className:"search",children:[("recommended"===t||"trending"===t)&&(0,b.jsxs)(s.ZP.Group,{defaultValue:t,buttonStyle:"solid",className:"toggle",onChange:function(e){var n=e.target.value;i(n)},children:[(0,b.jsx)(s.ZP.Button,{value:"recommended",children:"Recommended jobs"}),(0,b.jsx)(s.ZP.Button,{value:"trending",children:"Top trending jobs"})]}),"skillSearch"===t&&(0,b.jsx)("div",{className:"search__heading",children:(0,b.jsx)("h2",{children:"Results based on Skills"})}),"companySearch"===t&&(0,b.jsx)("div",{className:"search__heading",children:(0,b.jsx)("h2",{children:"Results based on Company Name"})}),(0,b.jsx)(j,{data:function(e){switch(e){case"companySearch":return o;case"skillSearch":return n;case"recommended":default:return c;case"trending":return r}}(t)}),(0,b.jsx)("br",{})]})}))},1940:function(e,n,t){t.d(n,{RV:function(){return l},Rk:function(){return u},Ux:function(){return h},aM:function(){return d},q3:function(){return o},qI:function(){return i}});var r=t(7462),a=t(3023),s=t(1818),c=t(2791),o=c.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),i=c.createContext(null),l=function(e){var n=(0,s.Z)(e,["prefixCls"]);return c.createElement(a.RV,(0,r.Z)({},n))},u=c.createContext({prefixCls:""}),d=c.createContext({}),h=function(e){var n=e.children,t=e.status,a=e.override,s=(0,c.useContext)(d),o=(0,c.useMemo)((function(){var e=(0,r.Z)({},s);return a&&delete e.isFormItemInput,t&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e}),[t,a,s]);return c.createElement(d.Provider,{value:o},n)}},6592:function(e,n,t){t.d(n,{ZP:function(){return J}});var r=t(7462),a=t(4942),s=t(9439),c=t(1694),o=t.n(c),i=t(5179),l=t(2791),u=t(1929),d=t(1815);var h=l.createContext(null),p=h.Provider,f=h,m=l.createContext(null),v=m.Provider,x=t(5987),b=t(1413),y=t(5671),j=t(3144),g=t(136),C=t(7277),k=function(e){(0,g.Z)(t,e);var n=(0,C.Z)(t);function t(e){var r;(0,y.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,b.Z)((0,b.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,j.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,s=n.className,c=n.style,i=n.name,u=n.id,d=n.type,h=n.disabled,p=n.readOnly,f=n.tabIndex,m=n.onClick,v=n.onFocus,b=n.onBlur,y=n.onKeyDown,j=n.onKeyPress,g=n.onKeyUp,C=n.autoFocus,k=n.value,Z=n.required,N=(0,x.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(N).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=N[n]),e}),{}),S=this.state.checked,O=o()(t,s,(e={},(0,a.Z)(e,"".concat(t,"-checked"),S),(0,a.Z)(e,"".concat(t,"-disabled"),h),e));return l.createElement("span",{className:O,style:c},l.createElement("input",(0,r.Z)({name:i,id:u,type:d,required:Z,readOnly:p,disabled:h,tabIndex:f,className:"".concat(t,"-input"),checked:!!S,onClick:m,onFocus:v,onBlur:b,onKeyUp:g,onKeyDown:y,onKeyPress:j,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},E)),l.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,b.Z)((0,b.Z)({},n),{},{checked:e.checked}):null}}]),t}(l.Component);k.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var Z=k,N=t(8834),E=t(9125),S=t(1940),O=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},P=function(e,n){var t,s=l.useContext(f),c=l.useContext(m),i=l.useContext(u.E_),d=i.getPrefixCls,h=i.direction,p=l.useRef(),v=(0,N.sQ)(n,p),x=(0,l.useContext)(S.aM).isFormItemInput,b=e.prefixCls,y=e.className,j=e.children,g=e.style,C=e.disabled,k=O(e,["prefixCls","className","children","style","disabled"]),P=d("radio",b),w="button"===((null===s||void 0===s?void 0:s.optionType)||c)?"".concat(P,"-button"):P,_=(0,r.Z)({},k),D=l.useContext(E.Z);_.disabled=C||D,s&&(_.name=s.name,_.onChange=function(n){var t,r;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(r=null===s||void 0===s?void 0:s.onChange)||void 0===r||r.call(s,n)},_.checked=e.value===s.value,_.disabled=_.disabled||s.disabled);var T=o()("".concat(w,"-wrapper"),(t={},(0,a.Z)(t,"".concat(w,"-wrapper-checked"),_.checked),(0,a.Z)(t,"".concat(w,"-wrapper-disabled"),_.disabled),(0,a.Z)(t,"".concat(w,"-wrapper-rtl"),"rtl"===h),(0,a.Z)(t,"".concat(w,"-wrapper-in-form-item"),x),t),y);return l.createElement("label",{className:T,style:g,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(Z,(0,r.Z)({},_,{type:"radio",prefixCls:w,ref:v})),void 0!==j?l.createElement("span",null,j):null)};var w=l.forwardRef(P),_=l.forwardRef((function(e,n){var t,c=l.useContext(u.E_),h=c.getPrefixCls,f=c.direction,m=l.useContext(d.Z),v=(0,i.Z)(e.defaultValue,{value:e.value}),x=(0,s.Z)(v,2),b=x[0],y=x[1],j=e.prefixCls,g=e.className,C=void 0===g?"":g,k=e.options,Z=e.buttonStyle,N=void 0===Z?"outline":Z,E=e.disabled,S=e.children,O=e.size,P=e.style,_=e.id,D=e.onMouseEnter,T=e.onMouseLeave,F=e.onFocus,R=e.onBlur,I=h("radio",j),J="".concat(I,"-group"),M=S;k&&k.length>0&&(M=k.map((function(e){return"string"===typeof e||"number"===typeof e?l.createElement(w,{key:e.toString(),prefixCls:I,disabled:E,value:e,checked:b===e},e):l.createElement(w,{key:"radio-group-value-options-".concat(e.value),prefixCls:I,disabled:e.disabled||E,value:e.value,checked:b===e.value,style:e.style},e.label)})));var K=O||m,B=o()(J,"".concat(J,"-").concat(N),(t={},(0,a.Z)(t,"".concat(J,"-").concat(K),K),(0,a.Z)(t,"".concat(J,"-rtl"),"rtl"===f),t),C);return l.createElement("div",(0,r.Z)({},function(e){return Object.keys(e).reduce((function(n,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(n[t]=e[t]),n}),{})}(e),{className:B,style:P,onMouseEnter:D,onMouseLeave:T,onFocus:F,onBlur:R,id:_,ref:n}),l.createElement(p,{value:{onChange:function(n){var t=b,r=n.target.value;"value"in e||y(r);var a=e.onChange;a&&r!==t&&a(n)},value:b,disabled:e.disabled,name:e.name,optionType:e.optionType}},M))})),D=l.memo(_),T=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},F=function(e,n){var t=l.useContext(u.E_).getPrefixCls,a=e.prefixCls,s=T(e,["prefixCls"]),c=t("radio",a);return l.createElement(v,{value:"button"},l.createElement(w,(0,r.Z)({prefixCls:c},s,{type:"radio",ref:n})))},R=l.forwardRef(F),I=w;I.Button=R,I.Group=D,I.__ANT_RADIO=!0;var J=I}}]);
//# sourceMappingURL=451.3d55066a.chunk.js.map