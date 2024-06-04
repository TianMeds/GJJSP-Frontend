const __vite__fileDeps=["assets/ErrMsg-DQePNNaK.js","assets/react-DyBbpTfo.js","assets/@babel-8cBiVioP.js","assets/LoaderAnimation-CH_DHjss.js","assets/zustand-BzSMVJrz.js","assets/use-sync-external-store-C98n5-Y-.js","assets/@mui-BieppYyU.js","assets/clsx-B-dksMZM.js","assets/@emotion-C_NMWrO_.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-BqmD5Vow.js","assets/react-transition-group-es_vqKy0.js","assets/react-dom-BKrvlAQh.js","assets/scheduler-CzFDRTuY.js","assets/@react-spring-V1f4ptoc.js","assets/d3-color-9lF95FHy.js","assets/d3-shape-D9lAmgB5.js","assets/d3-path-CimkQT29.js","assets/d3-scale-CFwq3Dxo.js","assets/internmap-BkD7Hj8s.js","assets/d3-array-DJclFi1f.js","assets/d3-format-CzD4bSOQ.js","assets/d3-interpolate-lgBfS8Nc.js","assets/d3-time-format-DZUSPL1N.js","assets/d3-time-Dz5jZYzf.js","assets/@popperjs-BQBsAJpH.js","assets/LoaderAnimation-DD__M5Fb.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as B,u as ns,_ as ds,b as f}from"./index-CLUh4Q3Z.js";import{r as O,j as e}from"./react-DyBbpTfo.js";import{T as cs,i as we,G as i,B as us,a as w,g as h,U as ms,V as hs,j as U,W as ee,t as xs,v as ps,w as js,x as ye,y as x,z as fs,c as M,X as gs,O as _s,Y as bs,Q as vs,R as As,H as R,J as E,K as N,k as p,b as y,d as j,I as q,e as Cs,f as Ss,l as G,N as $,Z as ws,M as g,S as ke,A as Ue}from"./@mui-BieppYyU.js";import{L as ys,S as ks,a as Us,b as Ms}from"./Layout-BTsGQOv-.js";import{t as Rs}from"./theme-D40dVDi4.js";import{u as Es}from"./UserStore-CIOHG4rb.js";import{u as Ns}from"./LoaderAnimation-CH_DHjss.js";import{u as $s,C as Me}from"./react-hook-form-BLdPXlwC.js";import{c as Ts}from"./classnames-BKHECdoj.js";import{a as Fs}from"./react-router-Cd-RU2wi.js";import"./react-dom-BKrvlAQh.js";import"./@babel-8cBiVioP.js";import"./scheduler-CzFDRTuY.js";import"./axios-B4uVmeYG.js";import"./zustand-BzSMVJrz.js";import"./use-sync-external-store-C98n5-Y-.js";import"./react-router-dom-CzVCKb4Q.js";import"./@remix-run-B-RBrVrq.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_NMWrO_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-es_vqKy0.js";import"./@react-spring-V1f4ptoc.js";import"./d3-color-9lF95FHy.js";import"./d3-shape-D9lAmgB5.js";import"./d3-path-CimkQT29.js";import"./d3-scale-CFwq3Dxo.js";import"./internmap-BkD7Hj8s.js";import"./d3-array-DJclFi1f.js";import"./d3-format-CzD4bSOQ.js";import"./d3-interpolate-lgBfS8Nc.js";import"./d3-time-format-DZUSPL1N.js";import"./d3-time-Dz5jZYzf.js";import"./@popperjs-BQBsAJpH.js";const Is=O.lazy(()=>ds(()=>import("./ErrMsg-DQePNNaK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]))),se=/^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/,Ls=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,zs=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,24}$/,Ds=/^\d{10}$/,Re={first_name:"",middle_name:"",last_name:"",user_mobile_num:"",email_address:"",password:"",role_id:"",user_status:""};function Ur({state:Ps}){var xe,pe,je,fe,ge,_e,be,ve,Ae;const T=$s(),{register:A,control:re,handleSubmit:ae,formState:Ee,reset:Ws,watch:X,validate:Bs,setValue:Ne}=T,{errors:t}=Ee,{users:V,setUsers:F,user:$e,handleOpenUser:te,handleCloseUser:I,filteredRole:Y,setFilteredRole:Te,editUser:u,setEditUser:H,searchQuery:_,handleSearch:Fe,filteredStatus:Z,setFilteredStatus:Ie,filterModal:Le,setFilterModal:qs,handleOpenFilterModal:ze,handleCloseFilterModal:le,selectedUser:b,setSelectedUser:L,setAvatarInitial:De,modalUsers:Pe,setModalUsers:Gs,handleOpenModalUsers:We,handleCloseModalUsers:C,deleteModal:Be,setDeleteModal:ie,userIdToDelete:oe,setUserIdToDelete:ne,restoreModal:qe,setRestoreModal:de,userIdToRestore:Ge,setUserIdToRestore:ce}=Es(),{showPassword:ue,handleTogglePassword:Oe,setLoading:l,setLoadingMessage:z,setErrMsg:Os}=Ns(),{getAuthToken:Xe,alertOpen:Ve,setAlertOpen:n,alertMessage:Ye,setAlertMessage:d,errorOpen:He,setErrorOpen:o,errorMessage:Ze,setErrorMessage:c}=B(),k=Fs(),[D,me]=O.useState(""),{auth:J}=ns(),Je=((xe=J==null?void 0:J.user)==null?void 0:xe.role_id)||"",he=async(s,r)=>{var P,W,Ce,Se;r.preventDefault();const a=B.getState().getAuthToken(),m=`63${String(s.user_mobile_num).replace(/^63/,"")}`,S={headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}};try{if(u){n(!0),d("Updating user..."),l(!0),z("Updating user");const os=await f.put(`/api/users/${b.id}`,{...s},S);I(),C(),H(!1),L(null),l(!1),n(!0),d("User Updated")}else{n(!0),d("Adding user..."),l(!0),z("Adding user");const os=await f.post("/api/register",{first_name:s.first_name,middle_name:s.middle_name,last_name:s.last_name,user_mobile_num:m,email_address:s.email_address,password:s.password,role_id:s.role_id},S);n(!0),d("User Added"),l(!1),I(),C()}const v=await f.get("/api/users",{headers:{Authorization:`Bearer ${a}`}});v.status===200?(F(v.data.data),n(!0),d("Users list has been updated")):(o(!0),d("Failed to fetch data")),T.reset(Re)}catch(v){((P=v.response)==null?void 0:P.status)===422?(me("Email already taken"),me("Email already taken"),o(!0),c("Email already been taken"),c("Email already been taken"),l(!1)):((W=v.response)==null?void 0:W.status)===409?(o(!0),c("Email already been taken"),l(!1)):((Ce=v.response)==null?void 0:Ce.status)===500?(c("Server Error"),l(!1)):((Se=v.response)==null?void 0:Se.status)===401?(o(!0),c("You've been logout"),k("/login")):(o(!0),c("Something went wrong"),l(!1)),C(),l(!1),C()}};O.useEffect(()=>{n(!0),o(!1),d("Please wait updating users list"),(async()=>{var r;try{const a=B.getState().getAuthToken(),m=await f.get("/api/users",{headers:{Authorization:`Bearer ${a}`}});m.status===200?(F(m.data.data),n(!0),d("Updated Users List")):(o(!0),c("Failed to fetch data"))}catch(a){((r=a.response)==null?void 0:r.status)===401&&(o(!0),c("You've been logout"),k("/login")),l(!1)}})()},[]);const Ke=s=>{const r=V.find(a=>a.id===s);H(!0),L(r),te(),T.reset(r)},Qe=(s,r,a)=>{ne(s),L({first_name:r,last_name:a}),ie(!0)},K=()=>{ne(null),ie(!1)},es=async s=>{if(oe)try{const r=B.getState().getAuthToken();l(!0),z("Deleting user"),n(!0),d("Deleting user..."),await f.delete(`/api/users/${oe}`,{headers:{Authorization:`Bearer ${r}`}});const a=await f.get("/api/users",{headers:{Authorization:`Bearer ${r}`}});if(a.status===200){const m=a.data.data.map(S=>{const{password:P,...W}=S;return W});F(m)}else o(!0),c("Failed to fetch data");n(!0),d("User Deleted"),l(!1)}catch(r){r.response.status===401&&(o(!0),c("Session expired. Please login again."),k("/login")),l(!1)}K()},ss=async s=>{l(!0),z("Restoring user"),n(!0),d("Restoring user...");try{const r=Xe();(await f.get(`/api/restoreUser/${s}`,{headers:{Authorization:`Bearer ${r}`}})).status===200?(n(!0),d("User restored")):(o(!0),c("Failed to restore user"));const m=await f.get("/api/users",{headers:{Authorization:`Bearer ${r}`}});m.status===200?(F(m.data.data),n(!0),d("Users list has been updated")):(o(!0),c("Failed to fetch data")),l(!1)}catch(r){r.response.status===401&&(o(!0),c("Session expired. Please login again."),k("/login")),l(!1)}},rs=s=>{ce(s),de(!0)},Q=()=>{ce(null),de(!1)},as=s=>{const r=V.find(a=>a.id===s);if(r){const{role_id:a,first_name:m,last_name:S}=r;L(r),De(`${m.charAt(0).toUpperCase()}${S.charAt(0).toUpperCase()}`),k(a===1||a===2?"/profile":a===3?"/scholar-profile":"/*")}else console.error("User not found")},ts=()=>{T.reset(Re),H(!1),I()},ls={Administrator:1,"Scholar Manager":2,Scholar:3},is=s=>{const r=s.target.value.replace(/[^0-9]/g,"").slice(0,10);Ne("user_mobile_num",r,{shouldValidate:!0})};return e.jsx(ys,{children:e.jsx(cs,{theme:Rs,children:e.jsx(we,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,mb:4,children:e.jsxs(us,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"left",md:"center"},margin:2,justifyContent:"space-between",children:[e.jsx(w,{variant:"h1",id:"tabsTitle",sx:{color:"black"},children:"Users"}),e.jsxs(h,{variant:"contained",id:"addButton",onClick:te,children:[e.jsx(ms,{sx:{mr:1}}),e.jsx(w,{variant:"body2",children:"Add Users"})]})]})}),e.jsxs(i,{sx:{borderRadius:"8px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",overflow:"auto",width:"100%"},children:[e.jsxs(we,{sx:{mt:4,mb:4,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(ks,{children:[e.jsx(Us,{children:e.jsx(hs,{})}),e.jsx(Ms,{placeholder:"Search for names, groups, or email addresses",inputProps:{"aria-label":"search"},value:_,onChange:Fe})]}),e.jsx(i,{children:e.jsx(U,{sx:{minWidth:120,mr:2},children:e.jsx(h,{variant:"outlined",onClick:ze,startIcon:e.jsx(ee,{}),children:"Add Filter"})})})]}),e.jsxs(xs,{children:[e.jsxs(ps,{children:[e.jsx(js,{children:e.jsxs(ye,{children:[e.jsx(x,{sx:{fontWeight:"bold",fontSize:"1rem"},children:"Name"}),e.jsx(x,{sx:{fontWeight:"bold",fontSize:"1rem"},children:"Email"}),e.jsx(x,{sx:{fontWeight:"bold",fontSize:"1rem"},children:"Role"}),e.jsx(x,{sx:{fontWeight:"bold",fontSize:"1rem"},children:"Status"}),e.jsx(x,{sx:{fontWeight:"bold",fontSize:"1rem"},children:"Action"})]})}),e.jsx(fs,{children:V.filter(s=>Y==="All"?!0:s.role_id===(ls[Y]||null)).filter(s=>Z==="All"?!0:s.user_status===Z).filter(s=>s.email_address&&s.email_address.toLowerCase().includes(_==null?void 0:_.toLowerCase())||`${s.first_name} ${s.middle_name} ${s.last_name}`.toLowerCase().includes(_==null?void 0:_.toLowerCase())).sort((s,r)=>s.user_status==="Revoked"&&r.user_status!=="Revoked"?-1:s.user_status!=="Revoked"&&r.user_status==="Revoked"?1:new Date(r.created_at)-new Date(s.created_at)).reverse().map((s,r)=>e.jsxs(ye,{className:"user",sx:{backgroundColor:r%2===0?"#eeeeee":"inherit"},children:[e.jsx(x,{sx:{borderBottom:"1px solid rgba(224, 224, 224, 1)"},className:"name",children:`${s.first_name} ${s.middle_name?s.middle_name:""} ${s.last_name}`}),e.jsx(x,{sx:{borderBottom:"1px solid rgba(224, 224, 224, 1)"},className:"email",children:s.email_address}),e.jsx(x,{sx:{borderBottom:"1px solid rgba(224, 224, 224, 1)"},className:"userRoles",children:s.role_id===1?e.jsx("span",{className:"Scholarship_Administrator",children:"Scholarship Administrator"}):s.role_id===2?e.jsx("span",{className:"Scholar_Manager",children:"Scholar Manager"}):e.jsx("span",{className:"Scholar",children:"Scholar"})}),e.jsx(x,{sx:{border:"none"},children:e.jsx("span",{className:Ts({Active:s.user_status==="Active",Inactive:s.user_status==="Inactive",Revoked:s.user_status==="Revoked"}),children:s.user_status})}),e.jsxs(x,{sx:{border:"none",color:"#2684ff"},children:[e.jsx(M,{color:"inherit",onClick:()=>as(s.id),children:e.jsx(gs,{sx:{transform:"rotate(90deg)"}})}),e.jsx(M,{color:"inherit",onClick:()=>Ke(s.id),children:e.jsx(_s,{})}),s.deleted_at!==null&&Je===1?e.jsx(M,{variant:"contained",sx:{borderRadius:"10px",borderColor:"primary.main",textTransform:"capitalize"},onClick:()=>rs(s.id),children:e.jsx(bs,{})}):e.jsx(M,{type:"button",color:"error",onClick:a=>Qe(s.id,s.first_name,s.last_name),sx:{textTransform:"capitalize"},children:e.jsx(vs,{})})]})]},r))})]}),e.jsx(As,{sx:{width:"100%"}})]})]}),e.jsxs(R,{open:$e,onClose:I,fullWidth:!0,maxWidth:"xs",onSubmit:ae(he),component:"form",method:"post",noValidate:!0,children:[e.jsx(E,{id:"dialogTitle",children:u?"Edit User":"New User"}),e.jsx(w,{variant:"body2",id:"dialogLabel",children:"Required fields are marked with an asterisk *"}),e.jsx(i,{sx:{marginLeft:3},children:e.jsx(O.Suspense,{fallback:"Scholarlink Loading...",children:e.jsx(Is,{})})}),e.jsxs(N,{children:[e.jsxs(i,{id:"userNameGrid",children:[e.jsx(p,{htmlFor:"first_name",id:"userNameLabel",children:"First Name"}),e.jsx(y,{type:"text",id:"first_name",placeholder:"Name",fullWidth:!0,...A("first_name",{required:{value:!0,message:"First name is required"},pattern:{value:se,message:"Names should only contain letters, periods, and hypens, with no leading or hanging spaces."}})}),t.first_name&&e.jsxs("p",{id:"errMsg",children:[e.jsx(j,{className:"infoErr"}),(pe=t.first_name)==null?void 0:pe.message]})]}),e.jsxs(i,{id:"userNameGrid",children:[e.jsx(p,{htmlFor:"middle_name",id:"middleNameLabel",children:"Middle Name"}),e.jsx(y,{type:"text",id:"middle_name",placeholder:"Name",fullWidth:!0,...A("middle_name",{pattern:{value:se,message:"Names should only contain letters, periods, and hypens, with no leading or hanging spaces."}})}),t.middle_name&&e.jsxs("p",{id:"errMsg",children:[e.jsx(j,{className:"infoErr"}),(je=t.middle_name)==null?void 0:je.message]})]}),e.jsxs(i,{id:"userNameGrid",children:[e.jsx(p,{htmlFor:"last_name",id:"userNameLabel",children:"Last Name"}),e.jsx(y,{type:"text",id:"last_name",placeholder:"Name",fullWidth:!0,...A("last_name",{required:{value:!0,message:"Last name is required"},pattern:{value:se,message:"Names should only contain letters, periods, and hypens, with no leading or hanging spaces."}})}),t.last_name&&e.jsxs("p",{id:"errMsg",children:[e.jsx(j,{className:"infoErr"}),(fe=t.last_name)==null?void 0:fe.message]})]}),e.jsxs(i,{id:"userMobileNumGrid",children:[e.jsx(p,{htmlFor:"user_mobile_num",id:"userMobileNumLabel",children:"Mobile Number"}),e.jsx(y,{type:"text",name:"user_mobile_num",id:"user_mobile_num",placeholder:"9XXXXXXXXX",fullWidth:!0,InputProps:{startAdornment:e.jsx(q,{position:"start",children:"+63"})},value:((ge=X("user_mobile_num"))==null?void 0:ge.replace(/^63/,""))||"",onInput:is,error:!!t.user_mobile_num,...A("user_mobile_num",{required:{value:!0,message:"Mobile Number is required"},pattern:{value:Ds,message:"Please enter a valid mobile number"}})}),t.user_mobile_num&&e.jsxs("p",{id:"errMsg",children:[e.jsx(j,{className:"infoErr"}),t.user_mobile_num.message]})]}),e.jsxs(i,{id:"emailAddressGrid",children:[e.jsx(p,{htmlFor:"email_address",id:"emailAddressLabel",children:"Email"}),e.jsx(y,{type:"email",id:"email_address",placeholder:"Email Address",fullWidth:!0,...A("email_address",{required:{value:!0,message:"Email Address is required"},pattern:{value:Ls,message:"Please enter a valid email address"}})}),t.email_address&&e.jsxs("p",{id:"errMsg",children:[" ",e.jsx(j,{className:"infoErr"})," ",(_e=t.email_address)==null?void 0:_e.message]}),D&&e.jsxs("p",{id:"errMsg",children:[" ",e.jsx(j,{className:"infoErr"})," ",D]}),D&&e.jsxs("p",{id:"errMsg",children:[" ",e.jsx(j,{className:"infoErr"})," ",D]})]}),!u&&e.jsxs(i,{id:"passwordGrid",children:[e.jsx(p,{htmlFor:"password",id:"passwordLabel",children:"Password"}),e.jsx(y,{type:ue?"text":"password",id:"password",placeholder:"Password",fullWidth:!0,InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(M,{onClick:Oe,edge:"end",children:ue?e.jsx(Cs,{sx:{fontSize:"1.2rem"}}):e.jsx(Ss,{sx:{fontSize:"1.2rem"}})})})},...A("password",{required:{value:!0,message:"Password is required"},pattern:{value:zs,message:"Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"}})}),t.password&&e.jsxs("p",{id:"errMsg",children:[" ",e.jsx(j,{className:"infoErr"})," ",(be=t.password)==null?void 0:be.message]})]}),e.jsxs(i,{id:"roleGrid",children:[e.jsx(p,{htmlFor:"role_id",id:"roleLabel",children:"Role"}),e.jsx(Me,{name:"role_id",control:re,defaultValue:"",rules:{required:"Role is required",validate:s=>s!==""||"Please select a role"},render:({field:s})=>e.jsx(U,{sx:{width:"100%",borderRadius:"8px"},children:e.jsxs(G,{id:"role_id",native:!0,...s,children:[e.jsx("option",{value:"",disabled:!0,children:"Select Role"}),e.jsx("option",{value:"1",children:"Scholarship Administrator"}),e.jsx("option",{value:"2",children:"Scholar Manager"}),e.jsx("option",{value:"3",children:"Scholar"})]})})}),t.role_id&&e.jsxs("p",{id:"errMsg",children:[" ",e.jsx(j,{className:"infoErr"})," ",(ve=t.role_id)==null?void 0:ve.message]})]}),u&&e.jsxs(i,{id:"userStatusGrid",style:{display:u||X("user_status")===""||X("user_status")==="Active"?"block":"none"},children:[e.jsx(p,{htmlFor:"user_status",id:"userStatusLabel",children:"Status"}),e.jsx(Me,{name:"user_status",control:re,defaultValue:"",rules:{required:"Status is required",validate:s=>s!==""||"Please select a status"},render:({field:s})=>e.jsx(U,{sx:{width:"100%",borderRadius:"8px"},children:e.jsxs(G,{id:"user_status",native:!0,...s,children:[e.jsx("option",{value:"",disabled:!0,children:"Select Status"}),e.jsx("option",{value:"Active",children:"Active"}),u&&e.jsx("option",{value:"Inactive",children:"Inactive"}),u&&e.jsx("option",{value:"Revoked",children:"Revoked"})]})})}),t.user_status&&e.jsxs("p",{id:"errMsg",children:[" ",e.jsx(j,{className:"infoErr"})," ",(Ae=t.user_status)==null?void 0:Ae.message]})]})]}),e.jsxs($,{children:[e.jsx(h,{onClick:ts,color:"primary",id:"Button",children:"Cancel"}),e.jsx(h,{color:"primary",variant:"contained",id:"addUserBtn",onClick:We,children:u?"Save Changes":"Add user"})]})]}),e.jsxs(R,{open:Pe,onClose:C,children:[e.jsx(E,{id:"dialogTitle",mt:2,children:u?"Heads Up!":"New Scholar Alert"}),e.jsx(N,{children:e.jsx(w,{variant:"h5",ml:1,sx:{color:"#44546F"},children:u?"You're about to make some changes to a user's information. Everything look good?":"Ready to welcome a new user? Make sure all the details are correct"})}),e.jsxs($,{children:[e.jsx(h,{onClick:C,color:"primary",children:"Cancel"}),e.jsx(h,{onClick:ae(he),type:"submit",color:"primary",variant:"contained",sx:{backgroundColor:"#0C66E4",borderRadius:"5px",mb:2,mt:2},children:u?"Confirm":"Yes, Add User"})]})]}),e.jsxs(R,{open:Be,onClose:K,children:[e.jsxs(E,{id:"dialogTitle",mt:2,children:[e.jsx(ws,{sx:{color:"#CA3521",fontSize:"1.2rem"}})," Deleting ",b?`${b.first_name} ${b.last_name}`:""]}),e.jsx(N,{children:e.jsxs(w,{variant:"h5",ml:1,sx:{color:"#44546F"},children:["Heads up! This will permanently delete's ",e.jsxs("b",{children:[b?`${b.first_name} ${b.last_name}`:"","  "]})," account. Are you sure you want to proceed?"]})}),e.jsxs($,{children:[e.jsx(h,{onClick:K,color:"primary",children:"Cancel"}),e.jsx(h,{onClick:es,color:"primary",variant:"contained",sx:{backgroundColor:"#CA3521",borderRadius:"5px",mb:2,mt:2,"&:hover":{backgroundColor:"#CA3521"}},children:"Yes, Delete User"})]})]}),e.jsxs(R,{open:qe,onClose:Q,children:[e.jsx(E,{id:"dialogTitle",mt:2,children:"Heads Up!"}),e.jsx(N,{children:e.jsx(w,{variant:"h5",ml:1,sx:{color:"#44546F"},children:"You're about to restore a user's account. Are you sure you want to proceed?"})}),e.jsxs($,{children:[e.jsx(h,{onClick:Q,color:"primary",children:"Cancel"}),e.jsx(h,{onClick:()=>{ss(Ge),Q()},color:"primary",variant:"contained",sx:{borderRadius:"5px",mb:2,mt:2,backgroundColor:"#43a047","&:hover":{backgroundColor:"#43a047"}},children:"Yes, Restore User"})]})]}),e.jsxs(R,{open:Le,onClose:le,children:[e.jsx(E,{id:"dialogFilter",children:"Filter Users"}),e.jsx(N,{dividers:!0,children:e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(U,{fullWidth:!0,sx:{minWidth:120},children:[e.jsx(p,{id:"role-filter-label",children:"Role Filter"}),e.jsxs(G,{labelId:"role-filter-label",value:Y,onChange:s=>Te(s.target.value),displayEmpty:!0,label:"Role Filter",startAdornment:e.jsx(q,{position:"start",children:e.jsx(ee,{viewBox:"0 0 24 24",sx:{width:20,height:20,color:"rgba(0, 0, 0, 0.54)"}})}),sx:{borderRadius:"12px"},children:[e.jsx(g,{value:"All",children:"All"}),e.jsx(g,{value:"Administrator",children:"Scholarship Administrator"}),e.jsx(g,{value:"Scholar Manager",children:"Scholar Manager"}),e.jsx(g,{value:"Scholar",children:"Scholar"})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(U,{fullWidth:!0,sx:{minWidth:120},children:[e.jsx(p,{id:"status-filter-label",children:"Status Filter"}),e.jsxs(G,{labelId:"status-filter-label",value:Z,onChange:s=>Ie(s.target.value),displayEmpty:!0,label:"Status Filter",startAdornment:e.jsx(q,{position:"start",children:e.jsx(ee,{viewBox:"0 0 24 24",sx:{width:20,height:20,color:"rgba(0, 0, 0, 0.54)"}})}),sx:{borderRadius:"12px"},children:[e.jsx(g,{value:"All",children:"All"}),e.jsx(g,{value:"Active",children:"Active"}),e.jsx(g,{value:"Inactive",children:"Inactive"}),e.jsx(g,{value:"Revoked",children:"Revoked"})]})]})})]})}),e.jsx($,{children:e.jsx(h,{onClick:le,children:"Apply"})})]}),e.jsx(ke,{open:Ve,autoHideDuration:5e3,onClose:()=>n(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(Ue,{onClose:()=>n(!1),variant:"filled",severity:"success",sx:{width:"100%"},children:Ye})}),e.jsx(ke,{open:He,autoHideDuration:5e3,onClose:()=>o(!1),anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(Ue,{onClose:()=>o(!1),variant:"filled",severity:"error",sx:{width:"100%"},children:Ze})})]})})})})}export{Ur as default};