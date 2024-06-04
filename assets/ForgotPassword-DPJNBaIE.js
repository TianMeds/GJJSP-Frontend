import{j as e}from"./react-DyBbpTfo.js";import{T as D,G as R,B as l,a as t,b as T,d as z,g as C,L as M,S as c,A as u}from"./@mui-BieppYyU.js";import{t as P}from"./theme-D40dVDi4.js";import{u as W}from"./react-hook-form-BLdPXlwC.js";import{a as F,b as B}from"./index-CLUh4Q3Z.js";import{u as G,L as Z}from"./LoaderAnimation-CH_DHjss.js";import{a as I}from"./react-router-Cd-RU2wi.js";import"./@babel-8cBiVioP.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_NMWrO_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-es_vqKy0.js";import"./react-dom-BKrvlAQh.js";import"./scheduler-CzFDRTuY.js";import"./@react-spring-V1f4ptoc.js";import"./d3-color-9lF95FHy.js";import"./d3-shape-D9lAmgB5.js";import"./d3-path-CimkQT29.js";import"./d3-scale-CFwq3Dxo.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-DJclFi1f.js";import"./d3-format-CzD4bSOQ.js";import"./d3-interpolate-lgBfS8Nc.js";import"./d3-time-format-DZUSPL1N.js";import"./d3-time-Dz5jZYzf.js";import"./@popperjs-BQBsAJpH.js";import"./axios-B4uVmeYG.js";import"./zustand-BzSMVJrz.js";import"./use-sync-external-store-C98n5-Y-.js";import"./react-router-dom-CzVCKb4Q.js";import"./@remix-run-B-RBrVrq.js";const N=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,q="/api/forgot";function Te(){const x=W(),{register:h,handleSubmit:g,control:H,formState:f}=x,{errors:m}=f,{setErrMsg:d,loading:y,setLoading:o,showPassword:$,expirationTime:J,setExpirationTime:U,handleTogglePassword:X,setLoadingMessage:j,email:K,setEmail:b}=G(),{alertOpen:v,setAlertOpen:p,alertMessage:w,setAlertMessage:Q,errorOpen:E,setErrorOpen:a,errorMessage:S,setErrorMessage:A}=F(),L=I(),O=s=>{const n=["yahoo.com","gmail.com","outlook.com"],i=/@[a-zA-Z0-9.-]+\.(edu(\.[a-zA-Z]{2})?|[a-zA-Z]{2}\.[a-zA-Z]{2})$/,r=s.split("@")[1];return n.includes(r)||i.test(s)},_=async(s,n)=>{var i;n.preventDefault();try{o(!0),j("Sending password reset link...");const r={headers:{"Content-type":"application/json"}},k={email_address:s.email_address};(await B.post(q,JSON.stringify(k),r)).status===200?(o(!1),d("A password reset link has been sent to your email address"),b(s.email_address),L("/reset-password")):(o(!1),d("An error occured. Please try again later"))}catch(r){((i=r.response)==null?void 0:i.status)===422&&(a(!0),A("Email is invalid or no such email in the system"),o(!1))}};return e.jsxs(D,{theme:P,children:[e.jsxs(R,{children:[e.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",border:"1px solid #ccc",borderRadius:"8px",margin:"auto",mt:"50px",width:"100%",maxWidth:"500px"},component:"form",onSubmit:g(_),fullWidth:!0,maxWidth:"xs",children:[e.jsx(l,{children:e.jsx("img",{src:"https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Scholarlink%20Logos.png",alt:"Logo",style:{width:"150px"}})}),e.jsx(t,{variant:"h1",align:"center",sx:{mb:"20px",fontSize:"2rem",fontWeight:"bold"},children:"Forgot your password?"}),e.jsx(t,{variant:"body1",align:"center",sx:{mb:"20px",width:"400px"},children:"Enter your email address below and we'll send you a link to reset your password."}),e.jsx(T,{type:"email",label:"Enter Email",variant:"outlined",fullWidth:!0,autoComplete:"off",sx:{mb:"20px"},...h("email_address",{pattern:{value:N,message:"Please enter a valid email address"},validate:s=>O(s)||"Email domain not supported",required:{value:!0,message:"Email address is required"}})}),m.email_address&&e.jsxs(t,{variant:"body2",sx:{color:"red",mb:"20px"},children:[e.jsx(z,{className:"infoErr"}),m.email_address.message]}),e.jsx(C,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Reset Password"}),y&&e.jsx(Z,{})]}),e.jsxs(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx(t,{variant:"body2",children:"Remember your password?"}),e.jsx(M,{href:"/login",children:e.jsx(t,{variant:"h6",sx:{fontSize:"0.9rem",ml:1,cursor:"pointer"},children:" Back to login"})})]})]}),e.jsx(c,{open:v,autoHideDuration:5e3,onClose:()=>p(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(u,{onClose:()=>p(!1),variant:"filled",severity:"success",sx:{width:"100%"},children:w})}),e.jsx(c,{open:E,autoHideDuration:5e3,onClose:()=>a(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(u,{onClose:()=>a(!1),variant:"filled",severity:"error",sx:{width:"100%"},children:S})})]})}export{Te as default};
