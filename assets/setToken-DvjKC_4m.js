import{m as V,z as w,_ as U}from"./index-Sf-YYo1C.js";import{f as q,a6 as B,al as D,j as M,s as C,t as o,y as e,v as _,x as p,a2 as a}from"./libs-AHWYfG3N.js";import{w as F,$ as P,a0 as S,q as z,B as A,c as E,S as L,G as N,H as R}from"./arcoDesign-Bjphlx8G.js";import{I as j}from"./index-DgQ00YEp.js";const G=q({__name:"setToken",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(i){const{t}=B(),n=D(i,"modelValue"),u=async()=>{n.value.token=await m()},m=async()=>crypto.randomUUID?crypto.randomUUID():(await V(()=>import("./uuid-BilNJ4QT.js"),[],import.meta.url)).v4();return(d,s)=>{const f=F,g=P,y=S,h=j,k=z,T=w,v=A,I=E,l=L,b=N,x=R;return M(),C(l,{direction:"vertical"},{default:o(()=>[e(y,{style:{"text-align":"left"}},{default:o(()=>[e(f,null,{default:o(()=>[_(p(a(t)("page.oobe.setToken.title")),1)]),_:1}),e(g,null,{default:o(()=>[_(p(a(t)("page.oobe.setToken.description")),1)]),_:1})]),_:1}),e(x,{model:n.value,style:{"margin-top":"15vh"}},{default:o(()=>[e(b,{label:"Token",required:""},{default:o(()=>[e(l,null,{default:o(()=>[e(k,{modelValue:n.value.token,"onUpdate:modelValue":s[0]||(s[0]=r=>n.value.token=r),style:{width:"27em"},placeholder:"aa-bb-cc-dd-ee-ff","allow-clear":"",rules:[{required:!0,message:a(t)("login.form.password.errMsg")},{validator:(r,c)=>{/[a-zA-Z0-9-_]+/.test(r)?c():c(a(t)("login.form.password.errMsg"))}}],"validate-trigger":"blur"},{prefix:o(()=>[e(h)]),_:1},8,["modelValue","rules"]),e(I,{content:a(t)("page.oobe.setToken.generate")},{default:o(()=>[e(v,{class:"generate-btn",type:"text",shape:"circle",onClick:u},{icon:o(()=>[e(T)]),_:1})]),_:1},8,["content"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}}),J=U(G,[["__scopeId","data-v-8c8b7f4d"]]);export{J as default};