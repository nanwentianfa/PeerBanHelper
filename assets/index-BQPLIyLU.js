import{u as w,a as q,g as G,I as M,b as O,c as Q,f,d as W,e as X,_ as T}from"./index-DhO-k3OJ.js";import{_ as Y}from"./queryIpLink.vue_vue_type_script_setup_true_lang-C6arf18q.js";import{f as v,a as Z,a7 as P,ak as ee,w as z,c as I,s as x,a3 as o,t as a,y as t,m as y,x as i,v as c,k as A}from"./libs-BMxpkVOl.js";import{t as te,e as ae,S as C,T as N,K as ne,a5 as oe}from"./arcoDesign-D0ixelLT.js";import{I as le}from"./index-OXHYTrGU.js";async function se(p){const s=w();await s.serverAvailable;const r=new URL(q(s.endpoint,"api/bans/logs"),location.href);return r.searchParams.set("page",String(p.page)),p.pageSize&&r.searchParams.set("pageSize",String(p.pageSize)),fetch(r,{headers:G()}).then(n=>(s.assertResponseLogin(n),n.json()))}const ie=v({__name:"banlogTable",setup(p){const s=Z(!0),r=w(),{t:n,d:u}=P(),{data:_,total:k,current:m,loading:$,pageSize:S,changeCurrent:K,changePageSize:U,refresh:B}=ee(se,{defaultParams:[{page:1,pageSize:10}],pagination:{currentKey:"page",pageSizeKey:"pageSize",totalKey:"data.total"},cacheKey:l=>`${r.endpoint}-banlogs-${(l==null?void 0:l[0].page)||1}-${(l==null?void 0:l[0].pageSize)||10}`,onAfter:()=>{s.value=!1}},[X]);z([S,m],()=>{s.value=!0}),z(()=>r.endpoint,B);const L=I(()=>s.value||$.value||!h.value),D=[{title:()=>n("page.banlog.banlogTable.column.banTime")+"/"+n("page.banlog.banlogTable.column.unbanTime"),slotName:"banAt",width:210},{title:()=>n("page.banlog.banlogTable.column.peerAddress"),slotName:"peerAddress",width:230},{title:()=>n("page.banlog.banlogTable.column.peerId"),slotName:"peerId",width:120},{title:()=>n("page.banlog.banlogTable.column.trafficSnapshot"),slotName:"peerStatus",width:150},{title:()=>n("page.banlog.banlogTable.column.torrentName"),dataIndex:"torrentName",ellipsis:!0,tooltip:!0},{title:()=>n("page.banlog.banlogTable.column.torrentSize"),slotName:"torrentSize",width:120},{title:()=>n("page.banlog.banlogTable.column.description"),dataIndex:"description",ellipsis:!0,tooltip:!0}],h=I(()=>{var l;return(l=_.value)==null?void 0:l.data.results});return(l,pe)=>{const H=le,g=N,V=oe,d=C,j=O,F=Q,R=ne,b=ae,E=M,J=te;return A(),x(J,{stripe:!0,columns:D,data:h.value,loading:L.value,pagination:{total:o(k),current:o(m),pageSize:o(S),showPageSize:!0,baseSize:4,bufferSize:1},"column-resizable":"",size:"medium",class:"banlog-table",onPageChange:o(K),onPageSizeChange:o(U)},{banAt:a(({record:e})=>[t(d,{fill:"",direction:"vertical"},{default:a(()=>[t(g,null,{default:a(()=>[t(H),c(" "+i(o(u)(e.banAt,"long")),1)]),_:2},1024),t(g,null,{default:a(()=>[t(V),c(" "+i(e.unbanAt?o(u)(e.unbanAt,"long"):o(n)("page.banlog.banlogTable.notUnbanned")),1)]),_:2},1024)]),_:2},1024)]),peerAddress:a(({record:e})=>[t(g,{copyable:"",code:""},{default:a(()=>[t(Y,{ip:e.peerIp,style:{color:"var(--color-text-2)"}},{default:a(()=>[c(i(o(W)(e.peerIp,e.peerPort)),1)]),_:2},1032,["ip"])]),_:2},1024)]),peerStatus:a(({record:e})=>[t(d,{fill:"",style:{"justify-content":"space-between"}},{default:a(()=>[t(d,{fill:"",direction:"vertical"},{default:a(()=>[t(g,null,{default:a(()=>[t(j,{class:"green"}),c(" "+i(o(f)(e.peerUploaded)),1)]),_:2},1024),t(g,null,{default:a(()=>[t(F,{class:"red"}),c(" "+i(o(f)(e.peerDownloaded)),1)]),_:2},1024)]),_:2},1024),t(b,{content:(e.peerProgress*100).toFixed(2)+"%"},{default:a(()=>[t(R,{percent:e.peerProgress,size:"mini"},null,8,["percent"])]),_:2},1032,["content"])]),_:2},1024)]),peerId:a(({record:e})=>[y("p",null,[c(i(e.peerId?e.peerId:o(n)("page.banlist.banlist.listItem.empty"))+" ",1),t(b,{content:e.peerClientName?e.peerClientName:o(n)("page.banlist.banlist.listItem.empty")},{default:a(()=>[t(E)]),_:2},1032,["content"])])]),torrentSize:a(({record:e})=>[t(b,{content:`Hash: ${e.torrentInfoHash}`},{default:a(()=>[y("p",null,i(o(f)(e.torrentSize)),1)]),_:2},1032,["content"])]),_:1},8,["data","loading","pagination","onPageChange","onPageSizeChange"])}}}),re=T(ie,[["__scopeId","data-v-0fdeee12"]]),ce=v({__name:"index",setup(p){const{t:s}=P();return(r,n)=>{const u=N,_=C;return A(),x(_,{direction:"vertical",fill:""},{default:a(()=>[t(u,{style:{"font-size":"1.2em"}},{default:a(()=>[c(i(o(s)("page.banlog.description")),1)]),_:1}),t(re)]),_:1})}}}),fe=T(ce,[["__scopeId","data-v-e1fde76f"]]);export{fe as default};
