const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./qbittorrent-DrtYh6Xe.js","./index-0Uajh6eT.js","./libs-DqULUV2u.js","./arcoDesign-Db67hvI-.js","./index-CMYa8Gbg.css","./qbittorrentee-ChosOFxz.js","./transmission-Ct3xEzp5.js","./biglybt-C5tR9FNK.js","./deluge-BnxuarAp.js","./bitcomet-DtHhG3Ht.js"])))=>i.map(i=>d[i]);
import{D as n,n as u}from"./index-0Uajh6eT.js";import{T as R}from"./init-0TEo-Tg0.js";import{f as L,a7 as H,am as N,a as S,q as U,s as c,k as v,t as o,y as t,v as r,x as _,a3 as l,u as $,E as G,m as J,O as W,aa as m}from"./libs-DqULUV2u.js";import{$ as j,A as z,a0 as K,G as Q,H as X,J as Y,O as Z,q as ee,f as oe,S as te,M as y}from"./arcoDesign-Db67hvI-.js";const ae={href:"https://github.com/PBH-BTN/PBH-Adapter-BiglyBT"},de=L({__name:"addDownloader",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(w){const b=m(()=>u(()=>import("./qbittorrent-DrtYh6Xe.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),B=m(()=>u(()=>import("./qbittorrentee-ChosOFxz.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url)),C=m(()=>u(()=>import("./transmission-Ct3xEzp5.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url)),E=m(()=>u(()=>import("./biglybt-C5tR9FNK.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url)),T=m(()=>u(()=>import("./deluge-BnxuarAp.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url)),V=m(()=>u(()=>import("./bitcomet-DtHhG3Ht.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url)),D={[n.qBittorrent]:b,[n.qBittorrentEE]:B,[n.Transmission]:C,[n.BiglyBT]:E,[n.Deluge]:T,[n.BitComet]:V},{t:i}=H(),a=N(w,"modelValue"),f=S(!1),q=async()=>{f.value=!0,a.value.downloaderConfig.config.endpoint.replace(/\/$/,"");try{const d=await R({name:a.value.downloaderConfig.name,config:a.value.downloaderConfig.config});if(!d.success)throw new Error(d.message)}catch(d){return d instanceof Error&&y.error({content:d.message,resetOnHover:!0}),!1}finally{f.value=!1}y.success({content:i("page.oobe.addDownloader.test.success"),resetOnHover:!0}),a.value.valid=!0};return(d,e)=>{const O=z,P=K,M=j,s=Z,A=Y,F=U("i18n-t"),g=X,I=ee,h=oe,k=Q,x=te;return v(),c(x,{direction:"vertical",style:{width:"70%"}},{default:o(()=>[t(M,{style:{"text-align":"left"}},{default:o(()=>[t(O,null,{default:o(()=>[r(_(l(i)("page.oobe.addDownloader.title")),1)]),_:1}),t(P,null,{default:o(()=>[r(_(l(i)("page.oobe.addDownloader.description")),1)]),_:1})]),_:1}),t(k,{model:a.value.downloaderConfig,"auto-label-width":""},{default:o(()=>[t(g,{field:"config.type",label:l(i)("page.dashboard.editModal.label.type"),required:""},G({default:o(()=>[t(A,{modelValue:a.value.downloaderConfig.config.type,"onUpdate:modelValue":e[0]||(e[0]=p=>a.value.downloaderConfig.config.type=p),style:{width:"10em"},"trigger-props":{autoFitPopupMinWidth:!0}},{default:o(()=>[t(s,{value:l(n).qBittorrent},{default:o(()=>e[3]||(e[3]=[r("qBittorrent")])),_:1},8,["value"]),t(s,{value:l(n).qBittorrentEE},{default:o(()=>e[4]||(e[4]=[r("qBittorrentEE")])),_:1},8,["value"]),t(s,{value:l(n).BiglyBT},{default:o(()=>e[5]||(e[5]=[r("BiglyBT")])),_:1},8,["value"]),t(s,{value:l(n).Deluge},{default:o(()=>e[6]||(e[6]=[r("Deluge")])),_:1},8,["value"]),t(s,{value:l(n).BitComet},{default:o(()=>e[7]||(e[7]=[r("BitComet")])),_:1},8,["value"]),t(s,{value:l(n).Transmission},{default:o(()=>e[8]||(e[8]=[r("Transmission")])),_:1},8,["value"])]),_:1},8,["modelValue"])]),_:2},[a.value.downloaderConfig.config.type===l(n).BiglyBT?{name:"extra",fn:o(()=>[t(F,{keypath:"page.dashboard.editModal.biglybt"},{url:o(()=>[J("a",ae,_(l(i)("page.dashboard.editModal.biglybt.url")),1)]),_:1})]),key:"0"}:void 0]),1032,["label"]),t(g,{field:"name",label:l(i)("page.dashboard.editModal.label.name"),required:""},{default:o(()=>[t(I,{modelValue:a.value.downloaderConfig.name,"onUpdate:modelValue":e[1]||(e[1]=p=>a.value.downloaderConfig.name=p),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),(v(),c(W(D[a.value.downloaderConfig.config.type]),{modelValue:a.value.downloaderConfig.config,"onUpdate:modelValue":e[2]||(e[2]=p=>a.value.downloaderConfig.config=p)},null,8,["modelValue"])),a.value.downloaderConfig.config.type?(v(),c(g,{key:0},{default:o(()=>[t(h,{loading:f.value,onClick:q},{default:o(()=>[r(_(l(i)("page.oobe.addDownloader.test")),1)]),_:1},8,["loading"])]),_:1})):$("",!0)]),_:1},8,["model"])]),_:1})}}});export{de as default};
