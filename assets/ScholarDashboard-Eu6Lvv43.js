import{j as e,r as f}from"./react-DyBbpTfo.js";import{L as he}from"./react-router-dom-CzVCKb4Q.js";import{u as xe}from"./UserStore-CIOHG4rb.js";import{a as Q,u as ue,b as h}from"./index-CLUh4Q3Z.js";import{P as me}from"./PrivacyNotice-PRl9JeOp.js";import{a as X}from"./react-router-Cd-RU2wi.js";import{H as ee,J as te,K as ae,a as t,g as y,T as pe,i as ge,G as c,B as H,n as fe,P as S,L as je,a6 as be,q as ve,a7 as ye,t as we,v as Re,w as Se,x as J,y as x,z as We,N as Be,S as K,A as Z}from"./@mui-BieppYyU.js";import{L as Ae}from"./Layout-BTsGQOv-.js";import{L as _e}from"./Scholarlink Logo (40 x 40 px)-BGz6WfLs.js";import{t as De}from"./theme-D40dVDi4.js";import{u as Ce}from"./DashboardStore-DET_fa4r.js";import"./@babel-8cBiVioP.js";import"./react-dom-BKrvlAQh.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-B-RBrVrq.js";import"./zustand-BzSMVJrz.js";import"./use-sync-external-store-C98n5-Y-.js";import"./axios-B4uVmeYG.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_NMWrO_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-es_vqKy0.js";import"./@react-spring-V1f4ptoc.js";import"./d3-color-9lF95FHy.js";import"./d3-shape-D9lAmgB5.js";import"./d3-path-CimkQT29.js";import"./d3-scale-CFwq3Dxo.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-DJclFi1f.js";import"./d3-format-CzD4bSOQ.js";import"./d3-interpolate-lgBfS8Nc.js";import"./d3-time-format-DZUSPL1N.js";import"./d3-time-Dz5jZYzf.js";import"./@popperjs-BQBsAJpH.js";import"./LoaderAnimation-CH_DHjss.js";function ke(){const{openDialog:j,setOpenDialog:w,openPrivacyNotice:W,setOpenPrivacyNotice:d}=Q(),{auth:o}=ue(),{role_id:b,first_name:B,last_name:n}=o.user,{setSelectedUser:i,setAvatarInitial:F}=xe(),N=X(),R=()=>{w(!1)},A=()=>{i(o.user),N(b===1||b===2?"/profile":b===3?"/scholar-profile":"/*"),F(`${B.charAt(0).toUpperCase()}${n.charAt(0).toUpperCase()}`),R()},_=()=>{w(!1),d(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{open:j,onClose:R,fullWidth:!0,width:"100%",sx:{margin:"20px"},children:[e.jsx(te,{sx:{backgroundColor:"#007AFF",color:"white",fontWeight:"bold",mb:5},variant:"h5",children:"Welcome to Scholarlink"}),e.jsxs(ae,{children:[e.jsx(t,{sx:{fontSize:"1.2rem",fontStyle:"italic",color:"#333",marginBottom:"16px"},children:`Welcome, Scholar! To make the most of your Scholarlink experience, it's essential to add your personal details. Before you proceed, kindly head to "See Profile" and complete your profile.`}),e.jsx("br",{}),e.jsx(t,{sx:{color:"rgba(0, 0, 0, 0.6)",fontStyle:"italic",marginBottom:"16px"},children:"You can skip this part if you've already edited your profile."}),e.jsx(y,{variant:"outlined",onClick:A,sx:{mr:3},children:"See Profile"}),e.jsx(y,{variant:"outlined",onClick:_,children:"Next"})]})]}),W&&e.jsx(me,{onClose:()=>d(!1)})]})}function gt(){var Y;X();const{getAuthToken:j,alertOpen:w,alertMessage:W,setAlertMessage:d,setAlertOpen:o,errorOpen:b,errorMessage:B,setErrorMessage:n,setErrorOpen:i,setOpenDialog:F,setOpenPrivacyDialog:N}=Q(),[R,A]=f.useState(!1),{schoolsData:_,setSchoolsData:D,undergraduateData:G,setUndergraduateData:T,renewalData:P,setRenewalData:E,graduatingData:z,setGraduatingData:q,alumniData:O,setAlumniData:$,viewModal:re,setViewModal:Fe,handleOpenViewModal:se,handleCloseViewModal:L,setSelectedUser:ie,selectedUser:a}=Ce(),[C,U]=f.useState([]),[I,oe]=f.useState(!1);[...P,...z,...O];const M=()=>{oe(!I),o(!0),d("Refreshing Dashboard")};f.useEffect(()=>{(async()=>{try{const r=j(),l=await h.get("/api/scholarsProfile",{headers:{Authorization:`Bearer ${r}`}});l.status===200?(U(l.data.data),o(!0),d("Scholar Dashboard loaded")):(i(!0),n("Request failed with status:",l.status));const g=await h.get("/api/undergrad-acad-detail",{headers:{Authorization:`Bearer ${r}`}});g.status===200?(T(g.data.data),o(!0),d("Undergraduate data loaded")):(i(!0),n("Request failed with status:",g.status));const p=await h.get("/api/scholar-renewal-documents",{headers:{Authorization:`Bearer ${r}`}});p.status===200?(E(p.data.data),o(!0),d("Renewal data loaded")):(i(!0),n("Request failed with status:",p.status));const m=await h.get("/api/scholar-graduating-documents",{headers:{Authorization:`Bearer ${r}`}});m.status===200?(q(m.data.data),o(!0),d("Graduating data loaded")):(i(!0),n("Request failed with status:"));const v=await h.get("/api/scholar-alumni-documents",{headers:{Authorization:`Bearer ${r}`}});v.status===200?($(v.data.data),o(!0),d("Alumni data loaded")):(i(!0),n("Request failed with status:"));const k=await h.get("/api/schools",{headers:{Authorization:`Bearer ${r}`}});k.status===200?(D(k.data.data),o(!0),d("Schools loaded")):(i(!0),n("Request failed with status:",k.status))}catch{n("Request failed with error:"),i(!0)}})()},[I]),f.useEffect(()=>{i(!1),M(),A(!1)},[R]),f.useEffect(()=>{(async()=>{try{const r=j(),l=await h.get("/api/scholarsProfile",{headers:{Authorization:`Bearer ${r}`}});l.status===200?(U(l.data.data),o(!0),d("Scholar Dashboard loaded")):(i(!0),n("Request failed with status:",l.status))}catch(r){console.error("Request failed with error:",r)}})()},[]),f.useEffect(()=>{(async()=>{try{const r=j(),l=await h.get("/api/schools",{headers:{Authorization:`Bearer ${r}`}});l.status===200?(D(l.data.data),o(!0),d("Schools loaded")):(i(!0),n("Request failed with status:"));const g=await h.get("/api/undergrad-acad-detail",{headers:{Authorization:`Bearer ${r}`}});g.status===200?(T(g.data.data),o(!0),d("Undergraduate data loaded")):(i(!0),n("Request failed with status:"));const p=await h.get("/api/scholar-renewal-documents",{headers:{Authorization:`Bearer ${r}`}});p.status===200?(E(p.data.data),o(!0),d("Renewal data loaded")):(i(!0),n("Request failed with status:"));const m=await h.get("/api/scholar-graduating-documents",{headers:{Authorization:`Bearer ${r}`}});m.status===200?(q(m.data.data),o(!0),d("Graduating data loaded")):(i(!0),n("Request failed with status:"));const v=await h.get("/api/scholar-alumni-documents",{headers:{Authorization:`Bearer ${r}`}});v.status===200?($(v.data.data),o(!0),d("Alumni data loaded")):(i(!0),n("Request failed with status:"))}catch{i(!0),n("Request failed with error:")}})()},[]);const ne={1:"New",2:"For Renewal",3:"For Renewal: Graduating",4:"Renewed",5:"Graduating",6:"Graduated",7:"Alumni",8:"Withdrew"},de=s=>{switch(s){case 1:return"New";case 2:return"For_Renewal";case 3:return"For_Renewal_Graduating";case 4:return"Renewed";case 5:return"Graduating";case 6:return"Graduated";case 7:return"Alumni";case 8:return"Withdrew";default:return""}},le=s=>{const r={month:"long",day:"numeric",year:"numeric"};return new Date(s).toLocaleDateString("en-US",r)},V=[...P,...z,...O],ce=s=>{const r=V.find(l=>l.id===s);r?(ie(r),se()):(i(!0),n("Submission not found"))},u=(s,r=50)=>{const l=s.split("/"),p=l[l.length-1].split(".");p.pop();let m=p.join(".");return m.length>r&&(m=m.substring(0,r)+"..."),m};return e.jsx(Ae,{children:e.jsxs(pe,{theme:De,children:[e.jsxs(ge,{maxWidth:"lg",sx:{mt:4,mb:4},children:[e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{item:!0,xs:12,children:e.jsxs(H,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"left",md:"center"},margin:2,justifyContent:"space-between",children:[e.jsx(t,{variant:"h1",id:"tabsTitle",sx:{color:"black"},children:"Dashboard"}),e.jsxs(y,{variant:"contained",onClick:M,sx:{backgroundColor:"#FFFFFF",color:"#091E42","&:hover":{backgroundColor:"transparent",boxShadow:"0px 2px 4px rgba(0, 0, 0, 1)"}},children:[e.jsx(t,{variant:"h5",children:"Refresh "}),e.jsx(fe,{})]})]})}),e.jsx(c,{item:!0,xs:12,md:8,lg:8,children:e.jsxs(S,{elevation:3,sx:{p:3,display:"flex",flexDirection:"row",height:"280px",justifyContent:"space-between",alignItems:"center",borderRadius:"12px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"h2",sx:{fontWeight:"bold"},m:2,children:"Welcome, Admin to Scholarlink"}),e.jsxs(H,{sx:{display:"flex",flexDirection:"column",m:2},children:[e.jsxs(t,{variant:"h5",pb:2,children:["Check out the",e.jsx(t,{component:he,to:"",variant:"h5",sx:{textDecoration:"none"},children:" Scholarlink User Guide "}),"for a quick tutorial"]}),e.jsxs(t,{variant:"h5",children:["Contact"," ",e.jsx(je,{href:"mailto:cbmedallada@student.apc.edu.ph",variant:"h5",sx:{textDecoration:"none"},children:"See So Support Team"})," ","for any issues or questions"]})]})]}),e.jsx("img",{src:_e,alt:"Your Image Alt Text",style:{width:"200px",height:"200px"}})]})}),e.jsxs(c,{item:!0,xs:12,md:2,lg:4,children:[e.jsxs(S,{sx:{p:2,display:"flex",flexDirection:"column",height:"auto"},children:[e.jsx(t,{variant:"h3",sx:{fontWeight:"bold"},children:"Academic Status"}),e.jsx("br",{}),e.jsxs(c,{container:!0,alignItems:"center",ml:1,children:[e.jsx(be,{sx:{color:"#1976d2"}}),e.jsx(c,{item:!0,children:e.jsx(t,{variant:"h5",sx:{color:"#1976d2",ml:1},children:((Y=_.find(s=>s.id===C.school_id))==null?void 0:Y.school_name)||"School Not Found"})})]}),e.jsx("br",{}),e.jsxs(c,{container:!0,alignItems:"center",ml:1,children:[e.jsx(ve,{sx:{color:"#1976d2"}}),e.jsx(c,{item:!0,children:e.jsx(t,{variant:"h5",sx:{color:"#1976d2",ml:1},children:G.current_yr_level||"No Data yet"})})]}),e.jsx("br",{}),e.jsxs(c,{container:!0,alignItems:"center",ml:1,children:[e.jsx(ye,{sx:{color:"#1976d2"}}),e.jsx(c,{item:!0,children:e.jsx(t,{variant:"h5",sx:{color:"#1976d2",ml:1},children:G.undergrad_sy||"No Data yet"})})]})]}),e.jsx(c,{item:!0,xs:12,md:8,lg:12,mt:2,children:e.jsx(S,{sx:{p:2,display:"flex",flexDirection:"column",height:"auto"},children:e.jsxs(c,{container:!0,alignItems:"center",children:[e.jsx(t,{variant:"h4",sx:{fontWeight:"bold"},children:"Scholar Status :"}),e.jsxs(t,{variant:"h5",ml:2,className:de(C.scholar_status_id),children:[" ",ne[C.scholar_status_id]||"Unknown"]})]})})})]})]}),e.jsx(c,{xs:12,mt:2,children:e.jsxs(S,{sx:{p:2,display:"flex",flexDirection:"column",height:"auto"},children:[e.jsx(t,{variant:"h3",sx:{fontWeight:"bold",mb:4},children:"Submissions"}),e.jsx(we,{children:e.jsxs(Re,{sx:{minWidth:650,borderCollapse:"separate",borderSpacing:0},children:[e.jsx(Se,{children:e.jsxs(J,{children:[e.jsx(x,{sx:{background:"#f5f5f5",fontWeight:"bold",fontSize:"1rem",padding:"16px",textAlign:"left",borderBottom:"none",borderRight:"none",borderTopLeftRadius:"12px"},children:"Submission"}),e.jsx(x,{sx:{background:"#f5f5f5",fontWeight:"bold",fontSize:"1rem",padding:"16px",textAlign:"left",borderBottom:"none",borderRight:"none"},children:"Submitted"}),e.jsx(x,{sx:{background:"#f5f5f5",fontWeight:"bold",fontSize:"1rem",padding:"16px",textAlign:"left",borderBottom:"none",borderRight:"none"},children:"Status"}),e.jsx(x,{sx:{background:"#f5f5f5",fontWeight:"bold",fontSize:"1rem",padding:"16px",textAlign:"left",borderBottom:"none",borderTopRightRadius:"12px"},children:"Remarks"}),e.jsx(x,{sx:{background:"#f5f5f5",fontWeight:"bold",fontSize:"1rem",padding:"16px",textAlign:"left",borderBottom:"none",borderTopRightRadius:"12px"},children:"Terms"}),e.jsx(x,{sx:{background:"#f5f5f5",fontWeight:"bold",fontSize:"1rem",padding:"16px",textAlign:"left",borderBottom:"none",borderTopRightRadius:"12px"},children:"Action"})]})}),e.jsx(We,{children:V.sort((s,r)=>new Date(r.updated_at)-new Date(s.updated_at)).map((s,r)=>e.jsxs(J,{children:[e.jsx(x,{sx:{borderBottom:"none",borderRight:"none",padding:"16px",textAlign:"left"},children:s.gwa_value?"Renewal Form":s.graduateName?"Graduating Form":s.company_name?"Alumni Form":""}),e.jsx(x,{sx:{borderBottom:"none",borderRight:"none",padding:"16px",textAlign:"left"},children:le(s.updated_at.replace("T"," ").replace(".000000Z",""))}),e.jsx(x,{sx:{borderBottom:"none",borderRight:"none",padding:"16px",textAlign:"left"},children:s.submission_status==="For Approval"?e.jsx("span",{className:"For_Approval",children:"For Approval"}):s.submission_status==="Approved"?e.jsx("span",{className:"Approved",children:"Approved"}):s.submission_status==="For Resubmission"?e.jsx("span",{className:"For_Resubmission",children:"For Resubmission"}):e.jsx("span",{className:"No_Submission",children:"No Submission"})}),e.jsx(x,{sx:{width:"30%",borderBottom:"none",borderRight:"none",padding:"16px",textAlign:"left"},children:s.remarks_message||"No Remarks yet"}),e.jsx(x,{sx:{borderBottom:"none",padding:"12px"},children:s.term_submitted||"No Terms"}),e.jsx(x,{sx:{borderBottom:"none",padding:"12px"},children:e.jsx(y,{variant:"contained",onClick:()=>ce(s.id),children:e.jsx(t,{variant:"h6",sx:{color:"#FFFFFF"},children:"View"})})})]},r))})]})})]})})]}),e.jsxs(ee,{open:re,onClose:L,fullWidth:!0,maxWidth:"md",children:[e.jsx(te,{children:e.jsx(t,{variant:"h4",sx:{fontWeight:"bold"},mb:2,children:"File Viewer"})}),e.jsx(ae,{children:e.jsx(c,{container:!0,spacing:2,children:e.jsxs(c,{item:!0,xs:12,md:6,children:[e.jsxs(t,{variant:"h5",sx:{fontWeight:"bold"},mb:2,children:["Year Submitted: ",a?a.school_yr_submitted||a.year_submitted:""]}),a&&a.gwa_value&&e.jsxs("div",{children:[e.jsxs(t,{variant:"h5",sx:{fontWeight:"bold"},mb:2,children:["Term Submitted: ",a.term_submitted]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx(t,{variant:"h4",sx:{fontWeight:"bold"},children:"Scholar Information"}),e.jsx("hr",{style:{border:"1px solid #ccc",margin:"10px 0"}}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"GWA Value:"}),e.jsx(t,{variant:"body1",children:a.gwa_value})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"GWA Remarks:"}),e.jsx(t,{variant:"body1",children:a.gwa_remarks})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h4",sx:{fontWeight:"bold"},children:"Documentary Requirements"}),e.jsx("hr",{style:{border:"1px solid #ccc",margin:"10px 0"}}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Copy of Report Card:"}),e.jsx(t,{variant:"body1",children:u(a.copyOfReportCard)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Copy of Registration Form:"}),e.jsx(t,{variant:"body1",children:u(a.copyOfRegistrationForm)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Scanned Written Essay:"}),e.jsx(t,{variant:"body1",children:u(a.scannedWrittenEssay)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Letter of Gratitude:"}),e.jsx(t,{variant:"body1",children:u(a.letterOfGratitude)})]})]})]}),a&&a.graduateName&&e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx(t,{variant:"h4",sx:{fontWeight:"bold"},children:"Scholar Information"}),e.jsx("hr",{style:{border:"1px solid #ccc",margin:"10px 0"}}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Graduating Name:"}),e.jsx(t,{variant:"body1",children:a.graduateName})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"School Graduated:"}),e.jsx(t,{variant:"body1",children:a.schoolGraduated})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Address School"}),e.jsx(t,{variant:"body1",children:a.addressSchool})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Year Entered and Graduated:"}),e.jsx(t,{variant:"body1",children:a.yearEnteredGraduated})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Program:"}),e.jsx(t,{variant:"body1",children:a.program})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Full Address:"}),e.jsx(t,{variant:"body1",children:a.street})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Email Address"}),e.jsx(t,{variant:"body1",children:a.user_email_address})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Mobile Number:"}),e.jsx(t,{variant:"body1",children:a.user_mobile_num})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Future Plan:"}),e.jsx(t,{variant:"body1",children:a.futurePlan})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h4",sx:{fontWeight:"bold"},children:"Documentary Requirements"}),e.jsx("hr",{style:{border:"1px solid #ccc",margin:"10px 0"}}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Copy of Report Card:"}),e.jsx(t,{variant:"body1",children:u(a.copyOfReportCard)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Copy of Registration Form:"}),e.jsx(t,{variant:"body1",children:u(a.copyOfRegistrationForm)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Scanned Written Essay:"}),e.jsx(t,{variant:"body1",children:u(a.scannedWrittenEssay)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Letter of Gratitude:"}),e.jsx(t,{variant:"body1",children:u(a.letterOfGratitude)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Statement of Account:"}),e.jsx(t,{variant:"body1",children:u(a.statementOfAccount)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Graduating of Picture:"}),e.jsx(t,{variant:"body1",children:u(a.graduationPicture)})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Transcript of Records:"}),e.jsx(t,{variant:"body1",children:u(a.transcriptOfRecords)})]})]})]}),a&&a.company_name&&e.jsx("div",{children:e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx(t,{variant:"h4",sx:{fontWeight:"bold"},children:"Alumni Information"}),e.jsx("hr",{style:{border:"1px solid #ccc",margin:"10px 0"}}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Company Name:"}),e.jsx(t,{variant:"body1",children:a.company_name})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Company Address:"}),e.jsx(t,{variant:"body1",children:a.company_location})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Position:"}),e.jsx(t,{variant:"body1",children:a.position_in_company})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Licensure Exam Type:"}),e.jsx(t,{variant:"body1",children:a.licensure_exam_type||"Didn't take any Licensure Examination"})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Exam Passed Date:"}),e.jsx(t,{variant:"body1",children:a.exam_passed_date||"Didn't take any Licensure Examination"})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Volunteer Group Name:"}),e.jsx(t,{variant:"body1",children:a.volunteer_group_name})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:"bold"},children:"Year Volunteered:"}),e.jsx(t,{variant:"body1",children:a.yr_volunteered})]})]})})]})})}),e.jsx(Be,{children:e.jsx(y,{onClick:L,variant:"contained",children:"Close"})})]}),e.jsx(ke,{}),e.jsx(K,{open:w,autoHideDuration:5e3,onClose:()=>o(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(Z,{onClose:()=>o(!1),variant:"filled",severity:"success",sx:{width:"100%"},children:W})}),e.jsx(K,{open:b,autoHideDuration:5e3,onClose:()=>i(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(Z,{onClose:()=>i(!1),variant:"filled",severity:"error",sx:{width:"100%"},children:B})})]})})}export{gt as default};