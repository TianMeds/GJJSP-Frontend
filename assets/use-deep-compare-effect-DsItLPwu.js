import{r as t}from"./react-DyBbpTfo.js";import{d as n}from"./dequal-tFQomdd2.js";function f(e){var r=t.useRef(e),u=t.useRef(0);return n(e,r.current)||(r.current=e,u.current+=1),t.useMemo(function(){return r.current},[u.current])}function s(e,r){return t.useEffect(e,f(r))}export{s as u};