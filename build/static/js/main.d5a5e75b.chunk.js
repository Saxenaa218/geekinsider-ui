(this["webpackJsonpgeekinsider-ui"]=this["webpackJsonpgeekinsider-ui"]||[]).push([[0],{137:function(e,a,l){},216:function(e,a,l){},217:function(e,a,l){"use strict";l.r(a);var s=l(0),r=l.n(s),t=l(25),n=l.n(t),c=(l(137),l(65)),i=l(22),o=l(98),j=l(220),d=l(223),u=l(219),b=l(222),m=l(56),p=l(224),h=l(225),x=l(226),O=l(5),y=j.a.TabPane,f=function(){var e=Object(s.useState)(!0),a=Object(o.a)(e,2),l=a[0],r=a[1],t=function(e){console.log("Success:",e)},n=function(e){console.log("Failed:",e)};return Object(O.jsx)(d.a,{visible:l,centered:!0,maskClosable:!1,bodyStyle:{padding:"40px"},width:"420px",footer:null,onCancel:function(){r(!1)},children:Object(O.jsxs)(j.a,{defaultActiveKey:"Recruiter",onChange:function(e){return console.log(e)},centered:!0,children:[Object(O.jsx)(y,{tab:"Employee",children:"Form hai"},"Employee"),Object(O.jsx)(y,{tab:"Recruiter",children:Object(O.jsxs)(u.a,{name:"basic",initialValues:{remember:!0},onFinish:t,onFinishFailed:n,children:[Object(O.jsx)(u.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(O.jsx)(b.a,{prefix:Object(O.jsx)(h.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(O.jsx)(u.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a.Password,{prefix:Object(O.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Password"})}),Object(O.jsx)(u.a.Item,{children:Object(O.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,children:"Sign up"})}),Object(O.jsx)(u.a.Item,{children:Object(O.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(O.jsx)(c.b,{to:"/login",children:"Sign in"})})})]})},"Recruiter"),Object(O.jsx)(y,{tab:"Verify Email",children:Object(O.jsxs)(u.a,{name:"Email verification",initialValues:{remember:!0},onFinish:t,onFinishFailed:n,children:[Object(O.jsx)(u.a.Item,{children:Object(O.jsx)(p.a,{message:"Verification pin successfully sent to your email",type:"success",showIcon:!0})}),Object(O.jsx)(u.a.Item,{name:"pin",rules:[{required:!0,message:"Please input pin sent on your email!"}],children:Object(O.jsx)(b.a,{prefix:Object(O.jsx)(h.a,{}),placeholder:"PIN"})}),Object(O.jsx)(u.a.Item,{children:Object(O.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,children:"Confirm sign up"})})]})},"emailverification")]})})},g=j.a.TabPane,P=function(){var e=Object(s.useState)(!0),a=Object(o.a)(e,2),l=a[0],r=a[1];return Object(O.jsx)(d.a,{visible:l,centered:!0,maskClosable:!1,bodyStyle:{padding:"40px"},width:"420px",footer:null,onCancel:function(){r(!1)},children:Object(O.jsxs)(j.a,{defaultActiveKey:"1",onChange:function(e){return console.log(e)},centered:!0,children:[Object(O.jsx)(g,{tab:"Employee",children:"FOrm hai"},"Employee"),Object(O.jsx)(g,{tab:"Recruiter",children:Object(O.jsxs)(u.a,{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(O.jsx)(u.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(O.jsx)(b.a,{prefix:Object(O.jsx)(h.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(O.jsx)(u.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a.Password,{prefix:Object(O.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Password"})}),Object(O.jsx)(u.a.Item,{children:Object(O.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,children:"Login"})}),Object(O.jsx)(u.a.Item,{children:Object(O.jsx)(m.a,{htmlType:"submit",block:!0,children:"Sign in with Google"})}),Object(O.jsx)(u.a.Item,{children:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)("a",{className:"login-form-forgot",href:"",children:"Forgot password?"}),Object(O.jsx)(c.b,{to:"/signup",children:"Register"})]})})]})},"Recruiter")]})})},w=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{className:"App-header",children:"Hello Geek, you're at the landing page"})})},I=l(221),C=I.a.Option,S=function(){return Object(O.jsxs)("div",{className:"onboarding",children:[Object(O.jsx)("header",{className:"App-header",children:"Create your profile"}),Object(O.jsxs)(u.a,{name:"Candidate onboarding",labelCol:{span:8},wrapperCol:{span:12},initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(O.jsx)(u.a.Item,{label:"Full name",name:"fullName",rules:[{required:!0,message:"Please enter your full name!"}],children:Object(O.jsx)(b.a,{placeholder:"Please enter your full name"})}),Object(O.jsx)(u.a.Item,{label:"Job title",name:"jobTitle",rules:[{required:!0,message:"Please enter your current job title!"}],children:Object(O.jsx)(b.a,{placeholder:"Please enter your current job title"})}),Object(O.jsx)(u.a.Item,{label:"Location",name:"location",rules:[{required:!0,message:"Please select your current location!"}],children:Object(O.jsxs)(I.a,{showSearch:!0,placeholder:"Please select your current location",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(O.jsx)(C,{value:"jack",children:"Jack"}),Object(O.jsx)(C,{value:"lucy",children:"Lucy"}),Object(O.jsx)(C,{value:"tom",children:"Tom"})]})}),Object(O.jsx)(u.a.Item,{label:"Whatsapp number",name:"whatsappNumber",rules:[{required:!0,message:"Please add your whatsapp number!"}],children:Object(O.jsx)(b.a,{placeholder:"Please add your whatsapp number"})}),Object(O.jsx)(u.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please enter an email address!"}],children:Object(O.jsx)(b.a,{placeholder:"Please enter an email address"})}),Object(O.jsx)(u.a.Item,{label:"Years of experience",name:"yearsOfExperience",rules:[{required:!0,message:"Please select years of experience!"}],children:Object(O.jsx)(b.a,{placeholder:"Please select years of experience"})}),Object(O.jsx)(u.a.Item,{label:"Skills",name:"skills",rules:[{required:!0,message:"Please select atleast three skills!"}],children:Object(O.jsx)(I.a,{mode:"multiple",allowClear:!0,placeholder:"Please select atleast three skills",children:["React","JavaScript","HTML","CSS"].map((function(e){return Object(O.jsx)(C,{value:e,children:e})}))})}),Object(O.jsx)(u.a.Item,{label:"Current ctc",name:"currentCtc",rules:[{required:!0,message:"Please add current ctc!"}],children:Object(O.jsx)(b.a,{placeholder:"Please add current ctc"})}),Object(O.jsx)(u.a.Item,{label:"Introduction",name:"introduction",rules:[{required:!0,message:"Please enter a brief introduction about yourself!"}],children:Object(O.jsx)(b.a.TextArea,{placeholder:"Please enter a brief introduction about yourself"})}),Object(O.jsx)(u.a.Item,{label:"Github",name:"github",rules:[{required:!0,message:"Please enter your github profile link!"}],children:Object(O.jsx)(b.a,{placeholder:"Please enter your github profile link"})}),Object(O.jsx)(u.a.Item,{wrapperCol:{offset:8,span:12},children:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(O.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Submit details"}),Object(O.jsx)(m.a,{style:{marginLeft:"10px"},children:"Skip"})]})})]})]})},v=I.a.Option,k=function(){return Object(O.jsxs)("div",{className:"onboarding",children:[Object(O.jsx)("header",{className:"App-header",children:"Create your profile"}),Object(O.jsxs)(u.a,{name:"Candidate onboarding",labelCol:{span:8},wrapperCol:{span:12},initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(O.jsx)(u.a.Item,{label:"Company name",name:"companyName",rules:[{required:!0,message:"Please input your username!"}],children:Object(O.jsx)(b.a,{placeholder:"Please enter your full name"})}),Object(O.jsx)(u.a.Item,{label:"Industry",name:"industry",rules:[{required:!0,message:"Please enter the company name!"}],children:Object(O.jsxs)(I.a,{showSearch:!0,placeholder:"Please select your current location",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(O.jsx)(v,{value:"jack",children:"Jack"}),Object(O.jsx)(v,{value:"lucy",children:"Lucy"}),Object(O.jsx)(v,{value:"tom",children:"Tom"})]})}),Object(O.jsx)(u.a.Item,{label:"Location",name:"location",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsxs)(I.a,{showSearch:!0,placeholder:"Please select your current location",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(O.jsx)(v,{value:"jack",children:"Jack"}),Object(O.jsx)(v,{value:"lucy",children:"Lucy"}),Object(O.jsx)(v,{value:"tom",children:"Tom"})]})}),Object(O.jsx)(u.a.Item,{label:"Whatsapp number",name:"whatsappNumber",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a,{placeholder:"Please add your whatsapp number"})}),Object(O.jsx)(u.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a,{placeholder:"Please enter an email address"})}),Object(O.jsx)(u.a.Item,{label:"Employee size",name:"numberOfEmployees",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a,{placeholder:"Please select years of experience"})}),Object(O.jsx)(u.a.Item,{label:"Skills",name:"skills",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(I.a,{mode:"multiple",allowClear:!0,placeholder:"Please select atleast three skills",children:["React","JavaScript","HTML","CSS"].map((function(e){return Object(O.jsx)(v,{value:e,children:e})}))})}),Object(O.jsx)(u.a.Item,{label:"About",name:"about",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a.TextArea,{placeholder:"about"})}),Object(O.jsx)(u.a.Item,{label:"Website",name:"website",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a,{placeholder:"website"})}),Object(O.jsx)(u.a.Item,{wrapperCol:{offset:8,span:12},children:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(O.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Submit details"}),Object(O.jsx)(m.a,{style:{marginLeft:"10px"},children:"Skip"})]})})]})]})},F=I.a.Option,q=function(){return Object(O.jsxs)("div",{className:"onboarding",children:[Object(O.jsx)("header",{className:"App-header",children:"Add a job"}),Object(O.jsxs)(u.a,{name:"Add a job",labelCol:{span:8},wrapperCol:{span:12},initialValues:{remember:!0},x:!0,onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(O.jsx)(u.a.Item,{label:"Job title",name:"jobTitle",rules:[{required:!0,message:"Please input your username!"}],children:Object(O.jsx)(b.a,{placeholder:"Please enter your full name"})}),Object(O.jsx)(u.a.Item,{label:"Type of job position",name:"typeOfPosition",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a,{placeholder:"Please enter your current job title"})}),Object(O.jsx)(u.a.Item,{label:"Desired skills",name:"desiredSkills",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(I.a,{mode:"multiple",allowClear:!0,placeholder:"Please select atleast three skills",children:["React","JavaScript","HTML","CSS"].map((function(e){return Object(O.jsx)(F,{value:e,children:e})}))})}),Object(O.jsx)(u.a.Item,{label:"Office locations",name:"officeLocations",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(I.a,{mode:"multiple",allowClear:!0,placeholder:"Please select atleast three skills",children:["React","JavaScript","HTML","CSS"].map((function(e){return Object(O.jsx)(F,{value:e,children:e})}))})}),Object(O.jsx)(u.a.Item,{label:"Experience range",name:"experienceRange",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a,{placeholder:"Please select years of experience"})}),Object(O.jsx)(u.a.Item,{label:"Annual salary",name:"annualSalary",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a,{placeholder:"Please select years of experience"})}),Object(O.jsx)(u.a.Item,{label:"Job description",name:"jobDescription",rules:[{required:!0,message:"Please input your password!"}],children:Object(O.jsx)(b.a.TextArea,{placeholder:"about"})}),Object(O.jsx)(u.a.Item,{wrapperCol:{offset:8,span:12},children:Object(O.jsxs)("div",{children:[Object(O.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Create job"}),Object(O.jsx)(m.a,{style:{marginLeft:"10px"},children:"Cancel"})]})})]})]})};l(216);var T=function(){return Object(s.useEffect)((function(){localStorage.getItem("token")&&localStorage.setItem("token","abc"),console.log(localStorage)}),[]),Object(O.jsx)(c.a,{children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/login",children:Object(O.jsx)(P,{})}),Object(O.jsx)(i.a,{path:"/signup",children:Object(O.jsx)(f,{})}),Object(O.jsx)(i.a,{path:"/Landing",children:Object(O.jsx)(w,{})}),Object(O.jsx)(i.a,{path:"/candidate/onboarding",children:Object(O.jsx)(S,{})}),Object(O.jsx)(i.a,{path:"/recruiter/onboarding",children:Object(O.jsx)(k,{})}),Object(O.jsx)(i.a,{path:"/recruiter/postjob",children:Object(O.jsx)(q,{})}),Object(O.jsx)(i.a,{path:"/",children:Object(O.jsx)(w,{})})]})})},L=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,227)).then((function(a){var l=a.getCLS,s=a.getFID,r=a.getFCP,t=a.getLCP,n=a.getTTFB;l(e),s(e),r(e),t(e),n(e)}))};n.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),L()}},[[217,1,2]]]);
//# sourceMappingURL=main.d5a5e75b.chunk.js.map