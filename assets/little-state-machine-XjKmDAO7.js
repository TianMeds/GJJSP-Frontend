import{r as s}from"./react-DyBbpTfo.js";var t=function(){var e={name:"__LSM__",middleWares:[],persist:"action"},r={};try{e.storageType=typeof sessionStorage<"u"?window.sessionStorage:void 0}catch{}return{updateStore:function(n){try{r=e.storageType&&JSON.parse(e.storageType.getItem(e.name)||"")||n}catch{r=n}},saveStore:function(){e.storageType&&e.storageType.setItem(e.name,JSON.stringify(r))},get state(){return r},set state(n){r=n},get options(){return e},set options(n){e=n}}}(),m=s.createContext(void 0),b=function(e){var r=e.children,n=s.useState(t.state),o=n[0],a=n[1];return s.useEffect(function(){t.options.persist==="beforeUnload"&&(window.onbeforeunload=function(){return t.saveStore()},t.options.storageType&&t.options.storageType.removeItem(t.options.name))},[]),s.createElement(m.Provider,{value:{state:o,setState:a}},r)};function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function O(e,r){r&&(t.options=i({},t.options,r)),t.updateStore(e)}function T(e){var r=s.useContext(m),n=r.state,o=r.setState,a=s.useRef(Object.entries(e||{}).reduce(function(v,u){var c;return Object.assign({},v,((c={})[u[0]]=function(l,p){return function(f,d){t.state=p(t.state,f),t.options.middleWares&&(t.state=t.options.middleWares.reduce(function(g,y){return y(g,p.name,f)||g},t.state)),(!d||!d.skipRender)&&l(t.state),t.options.persist==="action"&&t.saveStore()}}(o,u[1]),c))},{}));return{actions:a.current,state:n,getState:s.useCallback(function(){return t.state},[])}}export{T as a,b as o,O as s};
