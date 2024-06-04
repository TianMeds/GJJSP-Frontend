const __vite__fileDeps=["assets/LeftGrid-B3X3QLMq.js","assets/react-DyBbpTfo.js","assets/@babel-8cBiVioP.js","assets/@mui-BieppYyU.js","assets/clsx-B-dksMZM.js","assets/@emotion-C_NMWrO_.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-BqmD5Vow.js","assets/react-transition-group-es_vqKy0.js","assets/react-dom-BKrvlAQh.js","assets/scheduler-CzFDRTuY.js","assets/@react-spring-V1f4ptoc.js","assets/d3-color-9lF95FHy.js","assets/d3-shape-D9lAmgB5.js","assets/d3-path-CimkQT29.js","assets/d3-scale-CFwq3Dxo.js","assets/internmap-BkD7Hj8s.js","assets/d3-array-DJclFi1f.js","assets/d3-format-CzD4bSOQ.js","assets/d3-interpolate-lgBfS8Nc.js","assets/d3-time-format-DZUSPL1N.js","assets/d3-time-Dz5jZYzf.js","assets/@popperjs-BQBsAJpH.js","assets/ErrMsg-DQePNNaK.js","assets/LoaderAnimation-CH_DHjss.js","assets/zustand-BzSMVJrz.js","assets/use-sync-external-store-C98n5-Y-.js","assets/LoaderAnimation-DD__M5Fb.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as W,a as v,_ as E,b as Z}from"./index-CLUh4Q3Z.js";import{j as e,r as c}from"./react-DyBbpTfo.js";import{T as $,G as o,P as J,B as L,a as p,b as w,d as S,I as V,c as U,e as X,f as H,F as K,C as Q,g as Y,L as ee}from"./@mui-BieppYyU.js";import{u as se,L as re}from"./LoaderAnimation-CH_DHjss.js";import{u as te}from"./react-hook-form-BLdPXlwC.js";import{D as oe}from"./@hookform-D0VPTTbZ.js";import"./UserStore-CIOHG4rb.js";import"./PrivacyNotice-PRl9JeOp.js";import{t as ae}from"./theme-D40dVDi4.js";import{a as ie}from"./react-router-Cd-RU2wi.js";import"./react-dom-BKrvlAQh.js";import"./@babel-8cBiVioP.js";import"./scheduler-CzFDRTuY.js";import"./axios-B4uVmeYG.js";import"./zustand-BzSMVJrz.js";import"./use-sync-external-store-C98n5-Y-.js";import"./react-router-dom-CzVCKb4Q.js";import"./@remix-run-B-RBrVrq.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_NMWrO_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-es_vqKy0.js";import"./@react-spring-V1f4ptoc.js";import"./d3-color-9lF95FHy.js";import"./d3-shape-D9lAmgB5.js";import"./d3-path-CimkQT29.js";import"./d3-scale-CFwq3Dxo.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-DJclFi1f.js";import"./d3-format-CzD4bSOQ.js";import"./d3-interpolate-lgBfS8Nc.js";import"./d3-time-format-DZUSPL1N.js";import"./d3-time-Dz5jZYzf.js";import"./@popperjs-BQBsAJpH.js";import"./little-state-machine-XjKmDAO7.js";import"./react-simple-animate-C3M8HUGx.js";import"./lodash-BeFwqRsT.js";import"./use-deep-compare-effect-DsItLPwu.js";import"./dequal-tFQomdd2.js";const ne=c.lazy(()=>E(()=>import("./LeftGrid-B3X3QLMq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))),me=c.lazy(()=>E(()=>import("./ErrMsg-DQePNNaK.js"),__vite__mapDeps([24,1,2,25,26,27,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28]))),de=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,le="/api/login";function ss(){const{setAuth:P}=W(),k=ie(),{setAuthToken:pe,setOpenDialog:ce,setOpenPrivacyDialog:A}=v(),{setErrMsg:r,setLoading:u,showPassword:h,expirationTime:T,setExpirationTime:D,handleTogglePassword:I,setLoadingMessage:x}=se(),z=te(),{register:g,handleSubmit:C,control:R,formState:q}=z,{errors:i}=q,G=s=>{const a=["yahoo.com","gmail.com","outlook.com"],n=/@[a-zA-Z0-9.-]+\.(edu(\.[a-zA-Z]{2})?|[a-zA-Z]{2}\.[a-zA-Z]{2})$/,m=s.split("@")[1];return a.includes(m)||n.test(s)},N=async(s,a)=>{var n,m,f,j,_,y;a.preventDefault(),u(!0),x("Logging in to Scholarlink...");try{const t={headers:{"Content-type":"application/json"}},O={email_address:s.email_address,password:s.password},d=await Z.post(le,JSON.stringify(O),t),{remember_token:b,user:F,roles_name:M,expires_at:B}=d.data,l=(m=(n=d==null?void 0:d.data)==null?void 0:n.user)==null?void 0:m.role_id;v.getState().setAuthToken(b),D(new Date(B).getTime()),u(!1),x(""),P({user:F,remember_token:b,roles_name:M,role_id:l,expirationTime:T}),r(""),k(l===1||l===2?"/":l===3?"/scholar-dashboard":"/login"),A(!0)}catch(t){u(!1),x(""),((f=t.response)==null?void 0:f.status)===422?r("Email address and password are required"):((j=t.response)==null?void 0:j.status)===409?r("Email Address already been taken"):((_=t.response)==null?void 0:_.status)===500?r("Server Error"):((y=t.response)==null?void 0:y.status)===401?r("Login failed. Please check your credentials and try again."):r("Network error occurred. Please try again.")}};return e.jsx($,{theme:ae,children:e.jsxs(o,{container:!0,component:"main",sx:{height:"100vh"},children:[e.jsx(c.Suspense,{fallback:"Scholarlink Loading...",children:e.jsx(ne,{})}),e.jsxs(o,{item:!0,xs:12,sm:12,md:5,component:J,elevation:6,square:!0,container:!0,alignItems:"center",justifyContent:"center",sx:{p:3},children:[e.jsx(re,{}),e.jsxs(L,{sx:{my:1,mx:4,display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"},children:[e.jsx("img",{src:"https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/GJJSP-SIS.png",alt:"Logo",style:{width:"200px",height:"180px"}}),e.jsx(p,{variant:"h1",children:"Login"}),e.jsx(p,{children:"Welcome back! Please enter your details."}),e.jsx("br",{}),e.jsxs(L,{component:"form",sx:{mt:1,width:"100%"},onSubmit:s=>C(a=>N(a,s))(s),method:"post",children:[e.jsxs(o,{item:!0,children:[e.jsx(w,{variant:"standard",margin:"dense",fullWidth:!0,type:"email",id:"email_address",autoComplete:"off",placeholder:"Email Address",...g("email_address",{pattern:{value:de,message:"Invalid email address"},validate:s=>G(s)||"Email domain not supported",required:{value:!0,message:"Email address is required"}})}),i.email_address&&e.jsxs(p,{variant:"error",children:[e.jsx(S,{className:"infoErr"}),i.email_address.message]})]}),e.jsx("br",{})," ",e.jsx("br",{}),e.jsxs(o,{item:!0,children:[e.jsx(w,{variant:"standard",margin:"dense",fullWidth:!0,type:h?"text":"password",id:"password",placeholder:"Password",autoComplete:"off",InputProps:{endAdornment:e.jsx(V,{position:"end",children:e.jsx(U,{onClick:I,edge:"end",children:h?e.jsx(X,{sx:{fontSize:"1.2rem"}}):e.jsx(H,{sx:{fontSize:"1.2rem"}})})})},...g("password",{required:{value:!0,message:"Password is required"}})}),i.password&&e.jsxs(p,{variant:"error",children:[e.jsx(S,{className:"infoErr"}),i.password.message]})]}),e.jsx(c.Suspense,{fallback:"Scholarlink Loading...",children:e.jsx(me,{})}),e.jsx("br",{}),e.jsx(K,{control:e.jsx(Q,{value:"remember",color:"primary"}),label:"Remember me"}),e.jsx(Y,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:5,mb:2},children:"Sign In"}),e.jsx(o,{container:!0,children:e.jsx(o,{item:!0,xs:!0,children:e.jsx(ee,{href:"/forgot-password",variant:"body1",children:"Forgot password?"})})})]})]})]}),e.jsx(oe,{control:R})]})})}export{ss as default};