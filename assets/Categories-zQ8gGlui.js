import{r as ie,j as e}from"./react-DyBbpTfo.js";import{T as $e,i as ne,G as u,B as We,a as p,g as x,$ as Ge,V as qe,j as D,W as U,a0 as Ye,a1 as Ve,q as He,H as w,J as P,K as k,k as S,b as de,d as z,l as O,N as F,Z as Ue,I as ce,M as A,S as he,A as ue}from"./@mui-BieppYyU.js";import{L as Qe,S as Ze,a as Je,b as Ke}from"./Layout-BTsGQOv-.js";import{t as Xe}from"./theme-D40dVDi4.js";import{u as et,C as pe}from"./react-hook-form-BLdPXlwC.js";import{u as tt,a as T,b as j}from"./index-CLUh4Q3Z.js";import{u as rt}from"./LoaderAnimation-CH_DHjss.js";import{c as at}from"./zustand-BzSMVJrz.js";import{u as st}from"./PartnerStore-zKy6r5WW.js";import{D as ot}from"./@hookform-D0VPTTbZ.js";import{a as lt}from"./react-router-Cd-RU2wi.js";import"./@babel-8cBiVioP.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_NMWrO_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-es_vqKy0.js";import"./react-dom-BKrvlAQh.js";import"./scheduler-CzFDRTuY.js";import"./@react-spring-V1f4ptoc.js";import"./d3-color-9lF95FHy.js";import"./d3-shape-D9lAmgB5.js";import"./d3-path-CimkQT29.js";import"./d3-scale-CFwq3Dxo.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-DJclFi1f.js";import"./d3-format-CzD4bSOQ.js";import"./d3-interpolate-lgBfS8Nc.js";import"./d3-time-format-DZUSPL1N.js";import"./d3-time-Dz5jZYzf.js";import"./@popperjs-BQBsAJpH.js";import"./react-router-dom-CzVCKb4Q.js";import"./@remix-run-B-RBrVrq.js";import"./UserStore-CIOHG4rb.js";import"./axios-B4uVmeYG.js";import"./use-sync-external-store-C98n5-Y-.js";import"./little-state-machine-XjKmDAO7.js";import"./react-simple-animate-C3M8HUGx.js";import"./lodash-BeFwqRsT.js";import"./use-deep-compare-effect-DsItLPwu.js";import"./dequal-tFQomdd2.js";const it=at(a=>({filteredStatus:"All",setFilteredStatus:r=>a({filteredStatus:r}),searchQuery:"",setSearchQuery:r=>a({searchQuery:r}),handleSearch:r=>a({searchQuery:r.target.value}),projects:[],project:!1,setProjects:r=>a({projects:r}),editCategories:!1,setEditCategories:r=>a({editCategories:r}),selectedCategories:null,setSelectedCategories:r=>a({selectedCategories:r}),currentProjectId:null,setCurrentProjectId:r=>a({currentProjectId:r}),projectName:"",alias:"",benefactor:"",projectStatus:"",projectPartner:"",setProjectName:r=>a({projectName:r}),setAlias:r=>a({alias:r}),setBenefactor:r=>a({benefactor:r}),setProjectStatus:r=>a({projectStatus:r}),setProjectPartner:r=>a({projectPartner:r}),modalCateg:!1,setModalCateg:r=>a({modalCateg:r}),handleOpenModalCateg:()=>a({modalCateg:!0}),handleCloseModalCateg:()=>a({modalCateg:!1}),deleteModal:!1,setDeleteModal:r=>a({deleteModal:r}),handleOpenDeleteModal:()=>a({deleteModal:!0}),handleCloseDeleteModal:()=>a({deleteModal:!1}),restoreModal:!1,setRestoreModal:r=>a({restoreModal:r}),handleOpenRestoreModal:()=>a({restoreModal:!0}),handleCloseRestoreModal:()=>a({restoreModal:!1}),projectIdToDelete:null,setProjectIdToDelete:r=>a({projectIdToDelete:r}),projectIdToRestore:null,setProjectIdToRestore:r=>a({projectIdToRestore:r}),handleOpenScholarship:()=>a({project:!0}),handleCloseScholarship:()=>a({project:!1}),isDeleted:!1,setIsDeleted:r=>a({isDeleted:r}),filterModal:!1,setFilterModal:r=>a({filterModal:r}),handleOpenFilterModal:()=>a({filterModal:!0}),handleCloseFilterModal:()=>a({filterModal:!1}),filteredDeleted:"All",setFilteredDeleted:r=>a({filteredDeleted:r})})),nt=it,xe={scholarship_categ_name:"",alias:"",benefactor:"",scholarship_categ_status:""};function nr({state:a}){var le;const r=et(),{register:Q,control:L,handleSubmit:Z,formState:ge,reset:dt,validate:ct}=r,{errors:C}=ge,R=lt(),{auth:$}=tt(),f=((le=$==null?void 0:$.user)==null?void 0:le.role_id)||"",{getAuthToken:me,alertOpen:fe,setAlertOpen:d,alertMessage:je,setAlertMessage:g,errorOpen:Ce,setErrorOpen:s,errorMessage:ye,setErrorMessage:o}=T(),{setLoading:m,setLoadingMessage:I}=rt(),{projects:J,setProjects:E,project:ve,searchQuery:W,handleSearch:be,filteredStatus:G,setFilteredStatus:Se,handleOpenScholarship:K,handleCloseScholarship:_,selectedCategories:M,setSelectedCategories:q,editCategories:y,setEditCategories:Y,currentProjectId:Ae,setCurrentProjectId:_e,modalCateg:Me,handleOpenModalCateg:De,handleCloseModalCateg:B,setModalCateg:ht,deleteModal:we,setDeleteModal:X,projectIdToDelete:ut,setProjectIdToDelete:ee,projectIdToRestore:Pe,setProjectIdToRestore:te,restoreModal:ke,setRestoreModal:re,filterModal:Fe,setFilterModal:pt,handleOpenFilterModal:Te,handleCloseFilterModal:ae,filteredDeleted:N,setFilteredDeleted:Re}=nt(),{partners:xt,partner:gt,setPartners:Ie,selectedProjectPartner:mt,setSelectedProjectPartner:ft,selectedProjectPartnerId:jt,setSelectedProjectPartnerId:Ct}=st();ie.useEffect(()=>{(async()=>{var l;try{const i=T.getState().getAuthToken(),c=await j.get("/api/project-partners",{headers:{Authorization:`Bearer ${i}`}});c.status===200?Ie(c.data.data):(s(!0),o("Failed to fetch project partners data"))}catch(i){((l=i.response)==null?void 0:l.status)===401&&(s(!0),o("You've been logout"),R("/login"))}})()},[]),-ie.useEffect(()=>{d(!0),s(!1),g("Please wait updating scholarship list"),(async()=>{var l;try{const i=T.getState().getAuthToken(),c=await j.get("/api/scholarships",{headers:{Authorization:`Bearer ${i}`}});c.status===200?(E(c.data.data),d(!0),g("Scholarship category list updated")):(s(!0),o("Failed to fetch scholarship data"))}catch(i){((l=i.response)==null?void 0:l.status)===401&&(s(!0),o("You've been logout"),R("/login"))}})()},[]);const Ee=(t,l,i)=>{ee(t),q({first_name:l,last_name:i}),X(!0)},V=()=>{ee(null),X(!1)},se=async(t,l)=>{var v,h,b;l.preventDefault();const i=T.getState().getAuthToken(),c={headers:{Authorization:`Bearer ${i}`,"Content-type":"application/json"}};try{if(y){d(!0),g("Please wait updating scholarship category"),m(!0),I("Updating category");const Le=await j.put(`/api/scholarships/${M.id}`,{...t},c);_(),B(),Y(!1),q(null),m(!1),d(!0),g("Scholarship category updated")}else{d(!0),g("Please wait adding scholarship category"),m(!0),I("Adding category");const Le=await j.post("/api/scholarships",{scholarship_categ_name:t.scholarship_categ_name,alias:t.alias,benefactor:t.benefactor,scholarship_categ_status:t.scholarship_categ_status},c);d(!0),g("Scholarship category added"),m(!1),_(),B()}const n=await j.get("/api/scholarships",{headers:{Authorization:`Bearer ${i}`}});n.status===200?(E(n.data.data),d(!0),g("Scholarship category list updated")):(d(!0),g("Failed to fetch scholarship category data")),r.reset(xe),m(!1)}catch(n){((v=n.response)==null?void 0:v.status)===422?(s(!0),o("Please fill up all the required fields")):((h=n.response)==null?void 0:h.status)===500?o("Server Error"):((b=n.response)==null?void 0:b.status)===401?(s(!0),o("You've been logout"),R("/login")):(console.error("Unhandled error:",n),s(!0),o("Something went wrong")),m(!1)}},Be=t=>{const l=J.find(i=>i.id===t);Y(!0),q(l),_e(t),K(),r.reset(l)},Ne=t=>{te(t),re(!0)},H=()=>{te(null),re(!1)},ze=async t=>{var l,i,c,v;m(!0),I("Restoring category"),d(!0),g("Restoring category...");try{const h=me();(await j.get(`/api/restoreScholarships/${t}`,{headers:{Authorization:`Bearer ${h}`}})).status===200?(g("Category restored"),d(!0)):(s(!0),o("Failed to restore category"));const n=await j.get("/api/scholarships",{headers:{Authorization:`Bearer ${h}`}});n.status===200?E(n.data.data):(s(!0),o("Failed to fetch data")),m(!1)}catch(h){((l=h.response)==null?void 0:l.status)===401?(s(!0),o("You've been logged out"),R("/login")):((i=h.response)==null?void 0:i.status)===404?(s(!0),o("Category not found")):((c=h.response)==null?void 0:c.status)===403?(s(!0),o("Unauthorized access")):((v=h.response)==null?void 0:v.status)===500?(s(!0),o("Server Error")):h.response?(s(!0),o("An unexpected error occurred")):(s(!0),o("Network Error: Failed to reach the server")),m(!1)}},Oe=async(t,l)=>{var c,v,h,b;t.preventDefault(),m(!0),I("Deleting category"),d(!0),g("Deleting category...");const i=T.getState().getAuthToken();try{await j.delete(`/api/scholarships/${l}`,{headers:{Authorization:`Bearer ${i}`}});const n=await j.get("/api/scholarships",{headers:{Authorization:`Bearer ${i}`}});n.status===200?(E(n.data.data),_(),V()):(s(!0),o("Failed to fetch data")),d(!0),g("Category Deleted"),m(!1)}catch(n){((c=n.response)==null?void 0:c.status)===401?(s(!0),o("You've been logged out")):((v=n.response)==null?void 0:v.status)===404?(s(!0),o("Category not found")):((h=n.response)==null?void 0:h.status)===403?(s(!0),o("Unauthorized access")):((b=n.response)==null?void 0:b.status)===500?(s(!0),o("Server Error")):n.response?(s(!0),o("An unexpected error occurred")):(s(!0),o("Network Error: Failed to reach the server"))}m(!1)},oe=()=>{r.reset(xe),Y(!1),_()};return e.jsx(Qe,{children:e.jsx($e,{theme:Xe,children:e.jsx(ne,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsxs(u,{container:!0,spacing:3,children:[e.jsx(u,{item:!0,xs:12,children:e.jsxs(We,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"left",md:"center"},margin:2,justifyContent:"space-between",children:[e.jsx(p,{variant:"h1",id:"tabsTitle",children:"Categories"}),e.jsxs(x,{variant:"contained",color:"primary",id:"addButton",onClick:K,disabled:f!==1,children:[e.jsx(Ge,{sx:{mr:1}}),e.jsx(p,{variant:"body2",children:"Add Categories"})]})]})}),e.jsxs(ne,{sx:{mt:4,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(Ze,{children:[e.jsx(Je,{children:e.jsx(qe,{})}),e.jsx(Ke,{placeholder:"Search for Scholarship Project or Benefactor",inputProps:{"aria-label":"search"},value:W,onChange:be})]}),e.jsx(u,{children:e.jsx(D,{sx:{minWidth:120,mr:2},children:e.jsx(x,{variant:"outlined",onClick:Te,startIcon:e.jsx(U,{}),children:"Add Filter"})})})]}),e.jsx(u,{container:!0,spacing:3,sx:{margin:5},children:J.filter(t=>N==="All"?!0:N==="Deleted"?t.deleted_at!==null:N==="Not Deleted"?t.deleted_at===null:!0).filter(t=>G==="All"?!0:t.scholarship_categ_status===G).filter(t=>t.scholarship_categ_name.toLowerCase().includes(W.toLowerCase())||t.benefactor.toLowerCase().includes(W.toLowerCase())).sort((t,l)=>t.deleted_at!==null&&l.deleted_at===null?1:t.deleted_at===null&&l.deleted_at!==null?-1:new Date(l.updated_at)-new Date(t.updated_at)).map((t,l)=>e.jsx(u,{item:!0,xs:12,sm:6,md:4,children:e.jsx(Ye,{sx:{maxWidth:345},children:e.jsxs(Ve,{sx:{textAlign:"center",alignItems:"center"},children:[e.jsx(He,{sx:{fontSize:100,color:"#1e88e5"}}),e.jsx(p,{gutterBottom:!0,variant:"h4",component:"div",sx:{fontWeight:"bold"},children:t.scholarship_categ_name}),e.jsx(p,{variant:"body2",color:"text.secondary",sx:{fontStyle:"italic",fontSize:"16px",margin:2},children:t.benefactor}),e.jsx(p,{variant:"body2",color:"text.secondary",sx:{fontSize:"18px"},children:t.scholarship_categ_status}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px"},children:[e.jsx("div",{style:{marginRight:"10px",flexGrow:1},children:e.jsx(x,{variant:"contained",sx:{borderRadius:"10px",borderColor:"primary.main",textTransform:"capitalize",width:"100%"},onClick:()=>Be(t.id),children:e.jsx(p,{variant:"h5",children:"See for Information"})})}),t.deleted_at!==null&&f===1&&e.jsx("div",{style:{flexGrow:1},children:e.jsx(x,{variant:"contained",sx:{borderRadius:"10px",borderColor:"primary.main",textTransform:"capitalize",width:"100%",backgroundColor:"#43a047","&:hover":{backgroundColor:"#43a047"}},onClick:()=>Ne(t.id),children:e.jsx(p,{variant:"h5",children:"Restore Category"})})})]})]})})},l))}),e.jsxs(w,{open:ve,onClose:_,fullWidth:!0,maxWidth:"xs",component:"form",onSubmit:Z(se),noValidate:!0,children:[e.jsx(P,{id:"dialogTitle",children:y?"Edit "+M.scholarship_categ_name:"New Categories"}),e.jsx(p,{variant:"body2",id:"dialogLabel",children:"Required fields are marked with an asterisk *"}),e.jsxs(k,{children:[e.jsxs(u,{id:"projectNameGrid",children:[e.jsx(S,{htmlFor:"scholarship_categ_name",id:"projectNameLabel",children:"Name"}),e.jsx(de,{type:"text",id:"scholarship_categ_name",placeholder:"Project Name",disabled:f===2,fullWidth:!0,...Q("scholarship_categ_name",{required:"Scholarship Name is required",maxLength:{value:100,message:"Scholarship Name should not exceed 100 characters"}})}),C.scholarship_categ_name&&e.jsxs("p",{id:"errMsg",children:[e.jsx(z,{className:"infoErr"}),C.scholarship_categ_name.message]})]}),e.jsxs(u,{id:"aliasGrid",children:[e.jsx(S,{htmlFor:"alias",id:"aliasLabel",children:"Alias"}),e.jsx(de,{type:"text",id:"alias",placeholder:"Project Alias (e.g., Formal Educ)",fullWidth:!0,disabled:f===2,...Q("alias",{required:"Project Alias is required",maxLength:{value:100,message:"Project Alias should not exceed 100 characters"}})}),C.alias&&e.jsxs("p",{id:"errMsg",children:[e.jsx(z,{className:"infoErr"}),C.alias.message]})]}),e.jsxs(u,{id:"benefactorGrid",children:[e.jsx(S,{htmlFor:"benefactor",id:"benefactorLabel",children:"Benefactor"}),e.jsx(pe,{name:"benefactor",control:L,defaultValue:"",rules:{required:"Benefactor is required",validate:t=>t!==""||"Please select a benefactor"},render:({field:t})=>e.jsx(D,{sx:{width:"100%",borderRadius:"8px"},children:e.jsxs(O,{...t,id:"benefactor",native:!0,disabled:f===2,children:[e.jsx("option",{value:"",disabled:!0,children:"Select Benefactor"}),e.jsx("option",{value:"Gado (Ganet Management Corporation)",children:"Gado (Ganet Management Corporation)"})]})})}),C.benefactor&&e.jsxs("p",{id:"errMsg",children:[e.jsx(z,{className:"infoErr"}),C.benefactor.message]})]}),e.jsxs(u,{id:"projectStatusGrid",children:[e.jsx(S,{htmlFor:"scholarship_categ_status",id:"projectStatusLabel",children:"Status"}),e.jsx(pe,{name:"scholarship_categ_status",control:L,defaultValue:"",rules:{required:"Scholarship Status is required",validate:t=>t!==""||"Please select a scholarship status"},render:({field:t})=>e.jsx(D,{sx:{width:"100%",borderRadius:"8px"},children:e.jsxs(O,{...t,id:"scholarship_categ_status",native:!0,disabled:f===2,children:[e.jsx("option",{value:"",disabled:!0,children:"Select Project Status"}),y&&e.jsx("option",{value:"Closed for Application",children:"Closed for Application"}),e.jsx("option",{value:"Open for Application",children:"Open for Application"})]})})}),C.projectStatus&&e.jsxs("p",{id:"errMsg",children:[e.jsx(z,{className:"infoErr"}),C.projectStatus.message]})]}),y&&f===1&&e.jsxs(u,{children:[e.jsx(p,{id:"deleteLabel",sx:{color:"red"},children:"Danger Zone"}),e.jsxs(u,{id:"deleteGrid",children:[e.jsx(x,{variant:"contained",color:"error",sx:{borderRadius:"5px",borderColor:"primary.main",textTransform:"capitalize"},onClick:Ee,children:e.jsx(p,{variant:"h6",sx:{color:"white"},children:"Delete Category"})}),e.jsx(p,{sx:{fontSize:"12px",mt:2},children:"This will permanently delete this category and may affect other data."})]})]})]}),e.jsxs(F,{children:[f!==2&&e.jsx(x,{onClick:oe,color:"primary",id:"Button",children:"Cancel"}),e.jsx(x,{color:"primary",variant:"contained",id:"Button",onClick:De,children:f===2?"Close":y?"Save Changes":"Add"})]})]}),e.jsxs(w,{open:ke,onClose:H,children:[e.jsx(P,{id:"dialogTitle",children:"Heads Up!"}),e.jsx(k,{children:e.jsx(p,{variant:"h5",ml:1,sx:{color:"#44546F"},children:"You're about to restore this scholarship category. Are you sure you want to proceed?"})}),e.jsxs(F,{children:[e.jsx(x,{onClick:H,color:"primary",children:"Cancel"}),e.jsx(x,{onClick:()=>{ze(Pe),H()},color:"primary",variant:"contained",sx:{backgroundColor:"#43a047","&:hover":{backgroundColor:"#43a047"}},children:"Yes, Restore Category"})]})]}),e.jsxs(w,{open:Me,onClose:B,children:[e.jsx(P,{id:"dialogTitle",mt:2,children:y?"Heads Up!":"New Categories Alert"}),e.jsx(k,{children:e.jsx(p,{variant:"h5",ml:1,sx:{color:"#44546F"},children:y?"You're about to make some changes to a user's information. Everything look good?":"Ready to add a new scholarship category? Make sure all the details are correct."})}),e.jsxs(F,{children:[e.jsx(x,{onClick:B,color:"primary",children:"Cancel"}),e.jsx(x,{onClick:f===2?oe:Z(se),color:"primary",variant:"contained",sx:{backgroundColor:"#0C66E4",borderRadius:"5px",mb:2,mt:2},children:f===2?"Close":y?"Save Changes":"Yes, Add Categories"})]})]}),e.jsxs(w,{open:we,onClose:V,children:[e.jsxs(P,{id:"dialogTitle",mt:2,children:[e.jsx(Ue,{sx:{color:"#CA3521",fontSize:"1.2rem"}}),"  Delete Category"]}),e.jsx(k,{children:e.jsxs(p,{variant:"h5",ml:1,sx:{color:"#CA3521"},children:["Heads up! This will permanently delete's ",M==null?void 0:M.scholarship_categ_name," category. Are you sure you want to proceed?"]})}),e.jsxs(F,{children:[e.jsx(x,{onClick:V,color:"primary",sx:{mb:2},children:"Cancel"}),e.jsx(x,{onClick:t=>Oe(t,Ae),color:"error",variant:"contained",sx:{mb:2},children:"Yes, Delete Category"})]})]}),e.jsxs(w,{open:Fe,onClose:ae,children:[e.jsx(P,{id:"dialogTitle",children:"Filter Categories"}),e.jsx(k,{dividers:!0,children:e.jsxs(u,{container:!0,spacing:2,children:[e.jsx(u,{item:!0,xs:12,sm:6,children:e.jsxs(D,{fullWidth:!0,sx:{minWidth:120},children:[e.jsx(S,{id:"status-filter-label",children:"Categories Filter"}),e.jsxs(O,{value:G,onChange:t=>Se(t.target.value),displayEmpty:!0,inputProps:{"aria-label":"Categories Filter"},label:"Categories Filter",startAdornment:e.jsx(ce,{position:"start",children:e.jsx(U,{viewBox:"0 0 24 24",sx:{width:20,height:20,color:"rgba(0, 0, 0, 0.54)"}})}),sx:{borderRadius:"12px"},children:[e.jsx(A,{value:"All",children:"All"}),e.jsx(A,{value:"Closed for Application",children:"Closed Application"}),e.jsx(A,{value:"Open for Application",children:"Open Application"})]})]})}),e.jsx(u,{item:!0,xs:12,sm:6,children:e.jsxs(D,{fullWidth:!0,sx:{minWidth:120},children:[e.jsx(S,{id:"deleted-filter-label",children:"Deleted Filter"}),e.jsxs(O,{value:N,onChange:t=>Re(t.target.value),displayEmpty:!0,inputProps:{"aria-label":"Deleted Filter"},label:"Deleted Filter",startAdornment:e.jsx(ce,{position:"start",children:e.jsx(U,{viewBox:"0 0 24 24",sx:{width:20,height:20,color:"rgba(0, 0, 0, 0.54)"}})}),sx:{borderRadius:"12px"},children:[e.jsx(A,{value:"All",children:"All"}),e.jsx(A,{value:"Deleted",children:"Deleted"}),e.jsx(A,{value:"Not Deleted",children:"Not Deleted"})]})]})})]})}),e.jsx(F,{children:e.jsx(x,{onClick:ae,children:"Apply"})})]}),e.jsx(ot,{control:L}),e.jsx(he,{open:fe,autoHideDuration:5e3,onClose:()=>d(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(ue,{onClose:()=>d(!1),variant:"filled",severity:"success",sx:{width:"100%"},children:je})}),e.jsx(he,{open:Ce,autoHideDuration:5e3,onClose:()=>s(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(ue,{onClose:()=>s(!1),variant:"filled",severity:"error",sx:{width:"100%"},children:ye})})]})})})})}export{nr as default};