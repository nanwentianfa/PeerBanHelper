import{z as P,h as I}from"./index-DhO-k3OJ.js";import{f as k,a7 as K,a as T,c as f,ak as O,w as B,s as D,k as V,t,y as n,a3 as e,v as g,x as i}from"./libs-BMxpkVOl.js";import{t as F,c as G,T as j,F as q}from"./arcoDesign-D0ixelLT.js";var l=(u=>(u.AUTO="AUTO",u.MANUAL="MANUAL",u))(l||{});const Q=k({__name:"logModal",setup(u,{expose:S}){const{t:o,d:y}=K(),r=T(!1);S({showModal:()=>{r.value=!0}});const v=[{title:"ID",slotName:"ruleId"},{title:()=>o("page.rule_management.ruleSubscribe.updateLog.updateTime"),slotName:"updateTime"},{title:()=>o("page.rule_management.ruleSubscribe.updateLog.ruleCount"),dataIndex:"count"},{title:()=>o("page.rule_management.ruleSubscribe.updateLog.updateType"),slotName:"updateType"}],s=T(!0),h={[l.MANUAL]:"page.rule_management.ruleSubscribe.updateLog.updateType.manual",[l.AUTO]:"page.rule_management.ruleSubscribe.updateLog.updateType.auto"},L=f(()=>s.value||w.value||!m.value),{data:z,total:A,current:d,loading:w,pageSize:c,changeCurrent:x,changePageSize:C}=O(P,{defaultParams:[{page:1,pageSize:5}],pagination:{currentKey:"page",pageSizeKey:"pageSize",totalKey:"data.total"},onAfter:()=>{s.value=!1}});B([c,d],()=>{s.value=!0});const m=f(()=>{var p;return(p=z.value)==null?void 0:p.data.results});return(p,_)=>{const b=G,M=j,N=F,U=q;return V(),D(U,{visible:r.value,"onUpdate:visible":_[0]||(_[0]=a=>r.value=a),title:e(o)("page.rule_management.ruleSubscribe.updateLog"),"unmount-on-close":"","modal-style":{width:"30vw"}},{default:t(()=>[n(N,{stripe:!0,columns:v,data:m.value,loading:L.value,pagination:{total:e(A),current:e(d),pageSize:e(c),showPageSize:!0,baseSize:4,bufferSize:1},size:"medium",class:"banlog-table",onPageChange:e(x),onPageSizeChange:e(C)},{ruleId:t(({record:a})=>[n(b,{color:e(I)(a.ruleId)},{default:t(()=>[g(i(a.ruleId),1)]),_:2},1032,["color"])]),updateTime:t(({record:a})=>[n(M,null,{default:t(()=>[g(i(e(y)(a.updateTime,"long")),1)]),_:2},1024)]),updateType:t(({record:a})=>[n(b,{color:a.updateType===e(l).MANUAL?"green":"blue"},{default:t(()=>[g(i(e(o)(h[a.updateType]??"page.rule_management.ruleSubscribe.updateLog.updateType.unknown")),1)]),_:2},1032,["color"])]),_:1},8,["data","loading","pagination","onPageChange","onPageSizeChange"])]),_:1},8,["visible","title"])}}});export{Q as default};
