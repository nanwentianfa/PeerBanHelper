import{u as w,a as q,g as G,f,I as M,b as O,c as Q,d as W,_ as T}from"./index-D6ionoEm.js";import{_ as X}from"./queryIpLink.vue_vue_type_script_setup_true_lang-B0KPMCxe.js";import{f as v,r as Y,a6 as x,ak as Z,w as z,c as I,j as P,s as A,t as a,y as t,v as r,x as i,a2 as o,p as y}from"./libs-DaDHWX8D.js";import{I as ee}from"./index-Dfv4tBGb.js";import{T as C,am as te,S as N,K as ae,c as ne,t as oe}from"./arcoDesign-DkbNuMsn.js";async function le(p){const s=w();await s.serverAvailable;const c=new URL(q(s.endpoint,"api/bans/logs"),location.href);return c.searchParams.set("page",String(p.page)),p.pageSize&&c.searchParams.set("pageSize",String(p.pageSize)),fetch(c,{headers:G()}).then(n=>(s.assertResponseLogin(n),n.json()))}const se=v({__name:"banlogTable",setup(p){const s=Y(!0),c=w(),{t:n,d:u}=x(),{data:_,total:$,current:m,loading:k,pageSize:S,changeCurrent:K,changePageSize:U,refresh:B}=Z(le,{defaultParams:[{page:1,pageSize:10}],pagination:{currentKey:"page",pageSizeKey:"pageSize",totalKey:"data.total"},cacheKey:l=>`${c.endpoint}-banlogs-${(l==null?void 0:l[0].page)||1}-${(l==null?void 0:l[0].pageSize)||10}`,onAfter:()=>{s.value=!1}},[W]);z([S,m],()=>{s.value=!0}),z(()=>c.endpoint,B);const L=I(()=>s.value||k.value||!h.value),j=[{title:()=>n("page.banlog.banlogTable.column.banTime")+"/"+n("page.banlog.banlogTable.column.unbanTime"),slotName:"banAt",width:210},{title:()=>n("page.banlog.banlogTable.column.peerAddress"),slotName:"peerAddress",width:230},{title:()=>n("page.banlog.banlogTable.column.peerId"),slotName:"peerId",width:120},{title:()=>n("page.banlog.banlogTable.column.trafficSnapshot"),slotName:"peerStatus",width:150},{title:()=>n("page.banlog.banlogTable.column.torrentName"),dataIndex:"torrentName",ellipsis:!0,tooltip:!0},{title:()=>n("page.banlog.banlogTable.column.torrentSize"),slotName:"torrentSize",width:120},{title:()=>n("page.banlog.banlogTable.column.description"),dataIndex:"description",ellipsis:!0,tooltip:!0}],h=I(()=>{var l;return(l=_.value)==null?void 0:l.data.results});return(l,re)=>{const D=ee,g=C,H=te,d=N,V=M,F=O,R=ae,b=ne,E=Q,J=oe;return P(),A(J,{stripe:!0,columns:j,data:h.value,loading:L.value,pagination:{total:o($),current:o(m),pageSize:o(S),showPageSize:!0,baseSize:4,bufferSize:1},"column-resizable":"",size:"medium",class:"banlog-table",onPageChange:o(K),onPageSizeChange:o(U)},{banAt:a(({record:e})=>[t(d,{fill:"",direction:"vertical"},{default:a(()=>[t(g,null,{default:a(()=>[t(D),r(" "+i(o(u)(e.banAt,"long")),1)]),_:2},1024),t(g,null,{default:a(()=>[t(H),r(" "+i(e.unbanAt?o(u)(e.unbanAt,"long"):o(n)("page.banlog.banlogTable.notUnbanned")),1)]),_:2},1024)]),_:2},1024)]),peerAddress:a(({record:e})=>[t(g,{copyable:"",code:""},{default:a(()=>[t(X,{ip:e.peerIp,style:{color:"var(--color-text-2)"}},{default:a(()=>[r(i(e.peerIp)+":"+i(e.peerPort),1)]),_:2},1032,["ip"])]),_:2},1024)]),peerStatus:a(({record:e})=>[t(d,{fill:"",style:{"justify-content":"space-between"}},{default:a(()=>[t(d,{fill:"",direction:"vertical"},{default:a(()=>[t(g,null,{default:a(()=>[t(V,{class:"green"}),r(" "+i(o(f)(e.peerUploaded)),1)]),_:2},1024),t(g,null,{default:a(()=>[t(F,{class:"red"}),r(" "+i(o(f)(e.peerDownloaded)),1)]),_:2},1024)]),_:2},1024),t(b,{content:(e.peerProgress*100).toFixed(2)+"%"},{default:a(()=>[t(R,{percent:e.peerProgress,size:"mini"},null,8,["percent"])]),_:2},1032,["content"])]),_:2},1024)]),peerId:a(({record:e})=>[y("p",null,[r(i(e.peerId?e.peerId:o(n)("page.banlist.banlist.listItem.empty"))+" ",1),t(b,{content:e.peerClientName?e.peerClientName:o(n)("page.banlist.banlist.listItem.empty")},{default:a(()=>[t(E)]),_:2},1032,["content"])])]),torrentSize:a(({record:e})=>[t(b,{content:`Hash: ${e.torrentInfoHash}`},{default:a(()=>[y("p",null,i(o(f)(e.torrentSize)),1)]),_:2},1032,["content"])]),_:1},8,["data","loading","pagination","onPageChange","onPageSizeChange"])}}}),ie=T(se,[["__scopeId","data-v-e0a67653"]]),ce=v({__name:"index",setup(p){const{t:s}=x();return(c,n)=>{const u=C,_=N;return P(),A(_,{direction:"vertical",fill:""},{default:a(()=>[t(u,{style:{"font-size":"1.2em"}},{default:a(()=>[r(i(o(s)("page.banlog.description")),1)]),_:1}),t(ie)]),_:1})}}}),be=T(ce,[["__scopeId","data-v-e1fde76f"]]);export{be as default};
