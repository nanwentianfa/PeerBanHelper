import{G as I,S as b}from"./index-DhO-k3OJ.js";import{f as h}from"./time-_givNKBh.js";import{f as M,a7 as x,a as S,r as w,a9 as B,s as V,k as y,t as s,y as r,a3 as l,v as u,x as C}from"./libs-BMxpkVOl.js";import{G as O,H as F,ab as G,F as H,M as m}from"./arcoDesign-D0ixelLT.js";const R=M({__name:"settingsModal",setup(N,{expose:i}){const{t:c}=x(),o=S(!1);i({showModal:()=>{o.value=!0}});const d=e=>{const t=e.split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},f=e=>e.replace(/,/g,""),a=w({checkInterval:0});B(I,{onSuccess:e=>{a.checkInterval=e.data}});const p=async()=>{const e=await b(a.checkInterval);return e.success?(m.success({content:e.message,resetOnHover:!0}),!0):(m.error({content:e.message,resetOnHover:!0}),!1)};return(e,t)=>{const v=G,_=F,k=O,g=H;return y(),V(g,{visible:o.value,"onUpdate:visible":t[1]||(t[1]=n=>o.value=n),title:l(c)("page.rule_management.ruleSubscribe.settingsModal.title"),"unmount-on-close":"","modal-style":{width:"35vw"},onBeforeOk:p},{default:s(()=>[r(k,{model:a},{default:s(()=>[r(_,{field:"checkInterval",label:l(c)("page.rule_management.ruleSubscribe.settingsModal.checkInterval")},{extra:s(()=>[u(C(l(h)(a.checkInterval)),1)]),default:s(()=>[r(v,{modelValue:a.checkInterval,"onUpdate:modelValue":t[0]||(t[0]=n=>a.checkInterval=n),step:1e3,min:1e3,formatter:d,parser:f},{suffix:s(()=>t[2]||(t[2]=[u(" ms ")])),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title"])}}});export{R as default};
