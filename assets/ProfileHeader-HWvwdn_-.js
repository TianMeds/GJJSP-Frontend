import{r as a,j as r}from"./react-DyBbpTfo.js";import{u}from"./index-CLUh4Q3Z.js";import{u as P}from"./UserStore-CIOHG4rb.js";import{c as m}from"./zustand-BzSMVJrz.js";import{i as p,B as t,af as g,a as w,g as l}from"./@mui-BieppYyU.js";const j=m(s=>({profiles:[],profile:!1,setProfiles:e=>s({profiles:e}),handleOpenProfile:()=>s({profile:!0}),handleCloseProfile:()=>s({profile:!1}),editProfile:!1,setEditProfile:e=>s({editProfile:e}),selectedProfile:null,setSelectedProfile:e=>s({selectedProfile:e}),changePasswords:[],changePassword:!1,setChangePasswords:e=>s({changePasswords:e}),editPassword:!1,setEditPassword:e=>s({editPassword:e}),selectedPassword:null,setSelectedPassword:e=>s({selectedPassword:e}),handleOpenChangePassword:()=>s({changePassword:!0}),handleCloseChangePassword:()=>s({changePassword:!1}),goBack:[],setGoBack:e=>s({goBack:e})})),S=j,E=({updateProfile:s,updatePassword:e,updateScholarProfile:c})=>{const{avatarInitial:f,selectedUser:o}=P();a.useState(null),a.useState("Anyone");const[i,C]=a.useState("");a.useState(!1);const{auth:n}=u();S();const{role_id:h}=n.user,x=o.id===n.user.id,d=h===3;return r.jsx(p,{sx:{mt:3,ml:-3},children:r.jsxs(t,{sx:{mt:3,display:"flex",alignItems:"center",justifyContent:"space-between",height:"200px",width:"100%",backgroundImage:"linear-gradient(to bottom, #FF8F73 50%, white 50%)",padding:"20px"},children:[r.jsxs(t,{sx:{display:"flex",alignItems:"center"},children:[r.jsx(g,{src:i||"",sx:{width:100,height:100,backgroundColor:"blue",fontSize:"30px",cursor:"pointer"},children:i?null:f}),r.jsx(t,{sx:{display:"flex",flexDirection:"column"},children:r.jsxs(w,{variant:"h2",sx:{color:"black",fontWeight:"bold",ml:1},children:[o.first_name," ",o.last_name]})})]}),r.jsx(t,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",mt:7},children:x&&r.jsxs(r.Fragment,{children:[!d&&r.jsx(l,{variant:"outlined",onClick:()=>s(),sx:{mr:2},children:"Edit Profile"}),d&&r.jsx(l,{variant:"outlined",onClick:()=>c(),sx:{mr:2},children:"Update Scholar Profile"}),r.jsx(l,{variant:"text",onClick:()=>e(),children:"Change Password"})]})})]})})};export{E as P,S as u};
