import{r as i,j as e}from"./react-DyBbpTfo.js";import{L as Q}from"./Layout-BTsGQOv-.js";import{a as X,b as ee}from"./index-CLUh4Q3Z.js";import{u as re,C as y}from"./react-hook-form-BLdPXlwC.js";import{t as te}from"./theme-D40dVDi4.js";import{D as ae}from"./@hookform-D0VPTTbZ.js";import{u as oe}from"./LoaderAnimation-CH_DHjss.js";import{T as ne,i as se,G as s,a as j,P as ie,j as k,k as $,l as w,M as b,m as le,F as pe,C as ce,B as de,g as h,H as me,J as ue,K as he,N as xe,S as M,A as G}from"./@mui-BieppYyU.js";import"./@babel-8cBiVioP.js";import"./react-router-Cd-RU2wi.js";import"./@remix-run-B-RBrVrq.js";import"./react-router-dom-CzVCKb4Q.js";import"./react-dom-BKrvlAQh.js";import"./scheduler-CzFDRTuY.js";import"./UserStore-CIOHG4rb.js";import"./zustand-BzSMVJrz.js";import"./use-sync-external-store-C98n5-Y-.js";import"./axios-B4uVmeYG.js";import"./little-state-machine-XjKmDAO7.js";import"./react-simple-animate-C3M8HUGx.js";import"./@emotion-C_NMWrO_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./lodash-BeFwqRsT.js";import"./use-deep-compare-effect-DsItLPwu.js";import"./dequal-tFQomdd2.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-es_vqKy0.js";import"./@react-spring-V1f4ptoc.js";import"./d3-color-9lF95FHy.js";import"./d3-shape-D9lAmgB5.js";import"./d3-path-CimkQT29.js";import"./d3-scale-CFwq3Dxo.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-DJclFi1f.js";import"./d3-format-CzD4bSOQ.js";import"./d3-interpolate-lgBfS8Nc.js";import"./d3-time-format-DZUSPL1N.js";import"./d3-time-Dz5jZYzf.js";import"./@popperjs-BQBsAJpH.js";function ar(){const{getAuthToken:S,alertOpen:L,setAlertOpen:x,errorOpen:O,setErrorOpen:d,alertMessage:E,setAlertMessage:F,errorMessage:B,setErrorMessage:C}=X(),{setLoading:T,setLoadingMessage:P}=oe(),{control:m,watch:n,setValue:H,reset:R}=re({defaultValues:{reportType:"",year:"",currentYear:!1}}),[I,u]=i.useState(!1),[W,N]=i.useState(""),[c,q]=i.useState(new Date().getFullYear()),[z,U]=i.useState([]),[V,Y]=i.useState(!0);i.useEffect(()=>{const t=new Date().toLocaleString("ph-PH",{timeZone:"Asia/Manila"});q(new Date(t).getFullYear())},[]),i.useEffect(()=>{U(Array.from({length:c-1989},(t,r)=>1990+r))},[c]);const g=(t,r)=>{let a,o;switch(t){case"1":a=`${r}-01-01`,o=`${r}-06-30`;break;case"2":a=`${r}-07-01`,o=`${r}-12-31`;break}return{startDate:a,endDate:o}},J=()=>{R({reportType:"",year:"",currentYear:!1})},f=async({startDate:t,endDate:r,reportType:a})=>{const o=S(),A=`/api/generate-report?startDate=${t}&endDate=${r}&reportType=${a}`,Z={headers:{Authorization:`Bearer ${o}`},responseType:"blob"};try{const l=await ee.get(A,Z);if(l.headers["content-type"]==="application/json")l.data.dataAvailable||(console.log("No data available"),Y(!1),d(!0),C("No data found for the specified date range. Please adjust the date range and try again."));else if(l.headers["content-type"]==="application/pdf"){x(!0),F("Report generated successfully.");const D=new Blob([l.data],{type:"application/pdf"}),_=URL.createObjectURL(D),p=document.createElement("a");p.href=_,p.setAttribute("download",`Report-${a}-${t}-${r}.pdf`),document.body.appendChild(p),p.click(),p.parentNode.removeChild(p),R({reportType:"",year:"",currentYear:!1}),Y(!0)}}catch(l){console.error("Error generating report:",l),d(!0),C("Failed to generate the report. Please try again.")}finally{T(!1)}},v=t=>{console.log("Generating Report..."),t.preventDefault();const r=n(),a=r.currentYear?String(c):r.year;let o;r.reportType==="3"?o=`Both Mid-year and Year-end Accomplishment Reports for ${r.currentYear?"the current school year":`${a} period`} will be generated. Are you sure?`:o=`${r.reportType==="1"?"Mid-year":"Year-end"} Accomplishment Report ${r.currentYear?`${a}`:`${a}`} will be generated. Are you sure?`,N(o),u(!0)},K=()=>{console.log("Generating Report..."),u(!1),T(!0),P("Generating Report, please wait...");const t=n(),r=t.currentYear?String(c):t.year;if(t.reportType==="3"){console.log("Generating Report both...");const a=g("1",r),o=g("2",r);f({...a,reportType:"1"}),f({...o,reportType:"2"})}else{console.log(`Generating Report ${t.reportType}...`);const a=g(t.reportType,r);f({...a,reportType:t.reportType})}};return e.jsx(Q,{children:e.jsx(ne,{theme:te,children:e.jsxs(se,{maxWidth:"lg",sx:{mt:4,mb:4},children:[e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{item:!0,xs:12,mb:4,children:e.jsx(j,{variant:"h1",id:"tabsTitle",sx:{color:"black"},children:"Generate Report"})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(ie,{sx:{p:4,maxWidth:"600px",width:"100%",mx:"auto"},children:e.jsx("form",{onSubmit:v,children:e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(j,{variant:"h4",sx:{fontWeight:"bold",mb:2},children:"Accomplishment Report"})}),e.jsx(s,{item:!0,xs:12,children:e.jsxs(k,{fullWidth:!0,children:[e.jsx($,{id:"report-type-label",children:"Report Type *"}),e.jsx(y,{name:"reportType",control:m,rules:{required:"Report type is required"},render:({field:t,fieldState:r})=>e.jsxs(w,{labelId:"report-type-label",label:"Report Type *",...t,children:[e.jsx(b,{value:"1",children:"Mid-year Accomplishment Report"}),e.jsx(b,{value:"2",children:"Year-end Accomplishment Report"})]})})]})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(y,{name:"year",control:m,rules:{required:!n("currentYear")},render:({field:t,fieldState:r})=>e.jsxs(k,{fullWidth:!0,error:!V||!!r.error,children:[e.jsx($,{id:"year-label",children:"Year *"}),e.jsx(w,{labelId:"year-label",label:"Year *",...t,disabled:n("currentYear"),children:z.map(a=>e.jsx(b,{value:a,children:a},a))}),e.jsx(le,{children:r.error?r.error.message:null})]})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(y,{name:"currentYear",control:m,render:({field:t})=>e.jsx(pe,{control:e.jsx(ce,{...t,checked:t.value,onChange:r=>{const a=r.target.checked;t.onChange(a),H("year",a?String(c):"")}}),label:"Current Year"})})}),e.jsx(s,{item:!0,xs:12,children:e.jsxs(de,{display:"flex",justifyContent:"flex-end",children:[e.jsx(h,{onClick:J,disabled:!n("reportType")||!n("currentYear")&&!n("year"),children:"Clear"}),e.jsx(h,{variant:"contained",color:"primary",onClick:v,sx:{mt:3,mb:2},disabled:!n("reportType")||!n("currentYear")&&!n("year"),children:"Generate Report"}),e.jsxs(me,{open:I,onClose:()=>u(!1),children:[e.jsx(ue,{id:"dialogTitle",mt:2,children:"Confirm Generate"}),e.jsx(he,{children:e.jsx(j,{variant:"h5",ml:1,sx:{color:"#44546F"},children:W})}),e.jsxs(xe,{children:[e.jsx(h,{onClick:()=>u(!1),color:"primary",children:"Cancel"}),e.jsx(h,{onClick:()=>K(),color:"primary",variant:"contained",type:"submit",sx:{backgroundColor:"#0C66E4",borderRadius:"5px",mb:2,mt:2},children:"Yes, Generate now"})]})]})]})})]})})})})]}),e.jsx(M,{open:L,autoHideDuration:5e3,onClose:()=>x(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(G,{onClose:()=>x(!1),variant:"filled",severity:"success",sx:{width:"100%"},children:E})}),e.jsx(M,{open:O,autoHideDuration:5e3,onClose:()=>d(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(G,{onClose:()=>d(!1),variant:"filled",severity:"error",sx:{width:"100%"},children:B})}),e.jsx(ae,{control:m})]})})})}export{ar as default};