import{j as e}from"./react-DyBbpTfo.js";import{T as z,G as M,B as p,a as r,b as d,d as l,I as h,c as g,e as j,f as w,g as N,L as D,S as b,A as v}from"./@mui-BieppYyU.js";import{t as B}from"./theme-D40dVDi4.js";import{u as F}from"./react-hook-form-BLdPXlwC.js";import{a as G,b as $}from"./index-CLUh4Q3Z.js";import{u as H,L as J}from"./LoaderAnimation-CH_DHjss.js";import{a as U}from"./react-router-Cd-RU2wi.js";import"./@babel-8cBiVioP.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_NMWrO_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-es_vqKy0.js";import"./react-dom-BKrvlAQh.js";import"./scheduler-CzFDRTuY.js";import"./@react-spring-V1f4ptoc.js";import"./d3-color-9lF95FHy.js";import"./d3-shape-D9lAmgB5.js";import"./d3-path-CimkQT29.js";import"./d3-scale-CFwq3Dxo.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-DJclFi1f.js";import"./d3-format-CzD4bSOQ.js";import"./d3-interpolate-lgBfS8Nc.js";import"./d3-time-format-DZUSPL1N.js";import"./d3-time-Dz5jZYzf.js";import"./@popperjs-BQBsAJpH.js";import"./axios-B4uVmeYG.js";import"./zustand-BzSMVJrz.js";import"./use-sync-external-store-C98n5-Y-.js";import"./react-router-dom-CzVCKb4Q.js";import"./@remix-run-B-RBrVrq.js";const V="/api/reset",X=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,Y={email_address:"",token:"",password:"",password_confirmation:""};function Ie(){const c=F(),{register:t,handleSubmit:y,control:K,formState:P,watch:S}=c,{errors:s}=P,C=S("password",""),{setErrMsg:Q,loading:E,setLoading:a,showPassword:i,expirationTime:Z,setExpirationTime:ee,handleTogglePassword:u,setLoadingMessage:_,email:k}=H(),{alertOpen:A,setAlertOpen:m,alertMessage:L,setAlertMessage:T,errorOpen:R,setErrorOpen:n,errorMessage:W,setErrorMessage:x}=G();U();const q=async(o,I)=>{I.preventDefault();try{a(!0),_("Changing Password Link...");const f={headers:{"Content-type":"application/json"}},O={email_address:o.email_address,token:o.token,password:o.password,password_confirmation:o.password_confirmation};(await $.post(V,JSON.stringify(O),f)).status===201?(a(!1),T("Password has been changed successfully"),m(!0)):(a(!1),x("An error occured. Please try again later"),n(!0)),c.reset(Y)}catch{a(!1),x("Your token is invalid or has expired. Please request a new one."),n(!0)}};return e.jsxs(z,{theme:B,children:[e.jsxs(M,{children:[e.jsxs(p,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",border:"1px solid #ccc",borderRadius:"8px",margin:"auto",mt:"50px",width:"100%",maxWidth:"500px"},component:"form",onSubmit:y(q),fullWidth:!0,maxWidth:"xs",children:[e.jsx(p,{children:e.jsx("img",{src:"https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Scholarlink%20Logos.png",alt:"Logo",style:{width:"150px"}})}),e.jsx(r,{variant:"h1",align:"center",sx:{mb:"20px",fontSize:"2rem",fontWeight:"bold"},children:"Reset Password"}),e.jsx(d,{type:"email",label:"Enter Email",variant:"outlined",fullWidth:!0,autoComplete:"off",sx:{mb:"20px"},value:k,InputProps:{readOnly:!0},...t("email_address",{pattern:{value:X,message:"Please enter a valid email address"},required:{value:!0,message:"Email address is required"}})}),s.email_address&&e.jsxs(r,{variant:"body2",sx:{color:"red",mb:"20px"},children:[e.jsx(l,{className:"infoErr"}),s.email_address.message]}),e.jsx(d,{type:"text",label:"Enter Code",variant:"outlined",fullWidth:!0,autoComplete:"off",sx:{mb:"20px"},...t("token",{required:{value:!0,message:"Reset Token is required"}})}),s.token&&e.jsxs(r,{variant:"body2",sx:{color:"red",mb:"20px"},children:[e.jsx(l,{className:"infoErr"}),s.token.message]}),e.jsx(d,{type:i?"text":"password",label:"New Password",variant:"outlined",fullWidth:!0,autoComplete:"off",sx:{mb:"20px"},InputProps:{endAdornment:e.jsx(h,{position:"end",children:e.jsx(g,{onClick:u,edge:"end",children:i?e.jsx(j,{sx:{fontSize:"1.2rem"}}):e.jsx(w,{sx:{fontSize:"1.2rem"}})})})},...t("password",{required:{value:!0,message:"Password is required"}})}),s.password&&e.jsxs(r,{variant:"body2",sx:{color:"red",mb:"20px"},children:[e.jsx(l,{className:"infoErr"}),s.password.message]}),e.jsx(d,{type:i?"text":"password",label:"Confirm Password",variant:"outlined",fullWidth:!0,autoComplete:"off",sx:{mb:"20px"},InputProps:{endAdornment:e.jsx(h,{position:"end",children:e.jsx(g,{onClick:u,edge:"end",children:i?e.jsx(j,{sx:{fontSize:"1.2rem"}}):e.jsx(w,{sx:{fontSize:"1.2rem"}})})})},...t("password_confirmation",{required:{value:!0,message:"Confirm Password is required"},validate:o=>o===C||"The passwords do not match"})}),s.password_confirmation&&e.jsxs(r,{variant:"body2",sx:{color:"red",mb:"20px"},children:[e.jsx(l,{className:"infoErr"}),s.password_confirmation.message]}),e.jsx(N,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Change Password"}),E&&e.jsx(J,{})]}),e.jsxs(p,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx(r,{variant:"body2",children:"Remember your password?"}),e.jsx(D,{href:"/login",children:e.jsx(r,{variant:"h6",sx:{fontSize:"0.9rem",ml:1,cursor:"pointer"},children:" Back to login"})})]})]}),e.jsx(b,{open:A,autoHideDuration:5e3,onClose:()=>m(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(v,{onClose:()=>m(!1),variant:"filled",severity:"success",sx:{width:"100%"},children:L})}),e.jsx(b,{open:R,autoHideDuration:5e3,onClose:()=>n(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(v,{onClose:()=>n(!1),variant:"filled",severity:"error",sx:{width:"100%"},children:W})})]})}export{Ie as default};