import{s as O,r as l,h as n,c as k,d as S,i as o,j as g,e as I,t as L,n as r,v as j,x as U,w as F,F as N,y as z,z as G,A as H,o as M,q as E,m as q,l as d,a as J,B as K,b as T,k as Q,C as X}from"./index.f9dfb1df.js";import{_ as Y}from"./mComments.07b44ed8.js";const Z=g("div",{class:"mb-4"},[g("span",{class:"p-content"},"add newly available powers to the database")],-1),ee={class:"p-content mt-2"},oe={class:"flex justify-content-end"},te={__name:"mAddPowers",setup(B){const{issueBonds:w}=O(),P=l([{type:"power",key:"startingPower",label:"Starting Power",prefix:"U5",number:0},{type:"number",key:"endingNumber",label:"Ending Power",number:0}]),b=l({startingPower:{prefix:null,number:null},endingNumber:null}),x=()=>{const u=b.value;w(u.startingPower.prefix,u.startingPower.number,u.endingNumber),console.log("submit",b.value)};return(u,h)=>{const v=n("mForm"),a=n("Button");return k(),S("div",null,[Z,o(v,{modelValue:b.value,"onUpdate:modelValue":h[0]||(h[0]=p=>b.value=p),items:P.value},null,8,["modelValue","items"]),g("div",ee,[I("Total powers being added: "),g("strong",null,L(b.value.endingNumber-b.value.startingPower.number),1)]),g("div",oe,[o(a,{class:"mt-4 justify-content-end",onClick:x},{default:r(()=>[I("Submit")]),_:1})])])}}},le={class:"m-Ledger p-component"},ae={__name:"mLedger",props:{bonds:Array},setup(B){const w=B,{ledger:P,addLedgerEntry:b,ledgerCategoriesOptions:x,getLedgerEntries:u}=j(),h=l([]),v=async()=>{a.value=!0;let t=[];w.bonds.forEach(e=>{t.push(e.id)}),h.value=await u(t),a.value=!1};l([{field:"date",header:"Date"},{field:"completePower",header:"bond"},{field:"description",header:"Description"},{field:"category",header:"Category"},{field:"credit",header:"Credit"},{field:"debit",header:"Debit"}]);const a=l(!1),p=l({show:!1,header:"Add Ledger Entry"}),i=l({show:!1,header:"Add Ledger Entry",data:{}}),s=U(()=>{let t=[];return w.bonds.forEach(e=>{t.push({...e,label:e.prefix+"-"+e.power})}),t}),f=l({show:!0,header:"Add Ledger Entry",form:[{label:"Date",type:"date",key:"date"},{label:"bond",type:"dropdown",key:"bond",options:s,optionLabel:"label",optionValue:"id"},{label:"Amount",type:"money",key:"amount"},{label:"Description",type:"textArea",key:"description"},{label:"category",type:"dropdown",key:"category",options:x,optionLabel:"label"},{type:"Button",label:"Add",key:"add",onClick:async()=>{a.value=!0,await b(y.value),await v(),y.value={date:new Date},a.value=!1,p.value={...i.value}}}]}),y=l({date:new Date}),_=async()=>{p.value={...f.value}};return F(()=>w.bonds,(t,e)=>{v(),console.log("newVal",t),console.log("oldVal",e)}),(t,e)=>{const m=n("Column"),D=n("DataTable"),C=n("Button"),V=n("mForm"),A=n("Dialog");return k(),S(N,null,[g("div",le,[o(D,{showGridlines:"",value:h.value,class:"p-datatable-sm mScroll",stripedRows:"",scrollHeight:"74vh",selectionMode:"single",loading:a.value},{default:r(()=>[o(m,{field:"date",header:"date",style:{width:"8rem"}}),o(m,{field:"completePower",header:"bond",style:{width:"8rem"}}),o(m,{field:"description",header:"Description"}),o(m,{field:"category",header:"Category",style:{width:"10rem"}}),o(m,{field:"credit",header:"Credit",style:{width:"4rem"}}),o(m,{field:"debit",header:"Debit",style:{width:"4rem"}})]),_:1},8,["value","loading"])]),o(C,{onClick:e[0]||(e[0]=R=>_())},{default:r(()=>[I("add entry")]),_:1}),o(A,{visible:p.value.show,"onUpdate:visible":e[2]||(e[2]=R=>p.value.show=R),header:p.value.header,class:"shadow-8"},{default:r(()=>[o(V,{modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=R=>y.value=R),items:p.value.form,direction:""},null,8,["modelValue","items"])]),_:1},8,["visible","header"])],64)}}},ne={class:"grid"},se={class:"col-6"},de={class:"col-6"},re={__name:"mBondReport",props:{id:Number},setup(B){const w=B,{getBond:P,unsubscribeBond:b,updateBond:x}=O(),{agents:u}=z(),{generalAgents:h}=G(),{offices:v}=H(),a=async _=>{await x(_.id,_)},p=U(()=>i.value.liability?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(i.value.liability):"unexecuted"),i=l({liability:null}),s=l([{key:"defendantID",label:"Defendant",type:"clientPicker",mClass:"col-12"},{type:"header",label:"Basic Info"},{key:"liability",label:"Liability",type:"money",mClass:"col-3"},{key:"premium",label:"Premium",type:"money",mClass:"col-3"},{key:"executionDate",label:"Exec Date",type:"date",mClass:"col-3"},{key:"underwritingAgentCode",label:"Underwriting Agent",type:"dropdown",mClass:"col-3",options:u.value,optionLabel:"name",optionValue:"agentCode"},{key:"executingAgentCode",label:"Exec Agent",type:"dropdown",mClass:"col-3",options:u.value,optionLabel:"name",optionValue:"agentCode"},{type:"header",label:"Rewrite Info"},{key:"rewriteBool",label:"is Rewrite",type:"switch",mClass:"col-4"},{key:"rewriteID",label:"Rewrite Power",type:"powerPicker",mClass:"col-4"},{key:"rewriteAmount",label:"Rewrite Amount",type:"money",mClass:"col-4"},{type:"header",label:"Charge Info"},{key:"charge",label:"Charge",type:"text",mClass:"col-5"},{key:"caseNumber",label:"Case Num",type:"text",mClass:"col-3"},{key:"arrestDate",label:"Arrest Date",type:"date",mClass:"col-3"},{key:"court",label:"Court",type:"text",mClass:"col-4"},{key:"county",label:"County",type:"text",mClass:"col-4"},{key:"state",label:"State",type:"text",mClass:"col-4"},{key:"judge",label:"Judge",type:"text",mClass:"col-4"},{key:"division",label:"division",type:"text",mClass:"col-4"},{type:"header",label:"Power Info"},{key:"generalAgentIssuedDate	",label:"Gen Agent Issued Date",type:"date",mClass:"col-4"},{key:"generalAgentCode",label:"General Agent",type:"dropdown",mClass:"col-4",options:h.value,optionLabel:"name",optionValue:"code"},{key:"subOfficeIssuedDate		",label:"SubOffice Issued Date",type:"date",mClass:"col-4"},{key:"reportDate",label:"Report Date",type:"date",mClass:"col-4"},{key:"issuingOfficeCode",label:"Issuing Office",type:"dropdown",mClass:"col-4",options:v.value,optionLabel:"name",optionValue:"code"},{key:"receivingOfficeCode",label:"Recieving Office",type:"dropdown",mClass:"col-4",options:v.value,optionLabel:"name",optionValue:"code"},{key:"forfeitedBool",label:"Forfeited?",type:"switch",mClass:"col-4"},{key:"memo",label:"memo(legacy)",type:"textARea",mClass:"col-4"}]),f=l(!1),y=async()=>{f.value=!0;const _=await P(w.id);i.value=_.data,f.value=!1};return F(()=>w.id,(_,t)=>{y()}),M(()=>{y()}),(_,t)=>{const e=n("ProgressBar"),m=n("mForm"),D=n("Button"),C=n("mPanel"),V=n("BlockUI");return k(),S(N,null,[f.value?(k(),E(e,{key:0,mode:"indeterminate"})):q("",!0),o(V,{blocked:f.value},{default:r(()=>[g("h1",null,L(i.value.prefix)+"-"+L(i.value.power)+": "+L(d(p)),1),g("div",ne,[g("div",se,[o(C,{header:"Bond Info"},{default:r(()=>[o(m,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=A=>i.value=A),items:s.value,direction:"horizontal"},null,8,["modelValue","items"]),o(D,{onClick:t[1]||(t[1]=A=>a(i.value))},{default:r(()=>[I("save")]),_:1})]),_:1}),o(C,{header:"Ledger ",toggleable:!0},{default:r(()=>[o(ae,{bonds:[i.value]},null,8,["bonds"])]),_:1})]),g("div",de,[o(C,{header:"comments",toggleable:!0},{default:r(()=>[o(Y,{attachNewCommentTo:{bondID:B.id},findCommentsAttachedTo:{bondID:B.id}},null,8,["attachNewCommentTo","findCommentsAttachedTo"])]),_:1})])])]),_:1},8,["blocked"])],64)}}};const ie={class:"flex"},me={__name:"bondsView",setup(B){const{getBonds:w,bondFields:P}=O(),b=l([{type:"title",label:"Bonds"},{type:"spacer"},{type:"slot",slotName:"powerSearch"},{type:"Button",label:"Advanced Reports",icon:"pi pi-angle-down",iconPos:"right",tooltip:"advanced report options",callback:()=>{console.log("TODO: Advanced Search")}},{type:"spacer"},{type:"Button",label:"",icon:"pi pi-refresh",iconPos:"right",tooltip:"add a new bond",callback:()=>{y()}},{type:"Button",label:"Issue Bonds",icon:"pi pi-plus",class:"p-button-success",tooltip:"add bonds issued to the company",callback:()=>{a.value={...p.value}}}]),x=l([{label:"edit",icon:"pi pi-file-edit",command:()=>v()}]),u=l(),h=t=>{console.log(t),u.value.show(t.originalEvent)},v=()=>{a.value={slot:"bondReport",show:!0,header:"Bond Report",bond:s.value.selected},console.log("showBondReport",a.value.bond.prefix+" "+a.value.bond.power)};let a=l({slotName:"",header:"",show:!1}),p=l({show:!0,slot:"addPowers",header:"Add Powers"});l({prefix:null,number:null});let i=l([]),s=l({rows:15,page:0,rowsOptions:[15,25,50],totalRecords:null,selected:null,filters:null}),f=l(!1);const y=async()=>{console.log("load Bonds",s.value),f.value=!0;const t=s.value;let e=t.page*t.rows,m=e+(t.rows-1);const{data:D,count:C}=await w({range:{from:e,to:m},order:{column:"id",ascending:!0}});i.value=D,s.value.totalRecords=C,f.value=!1};M(()=>{y()});const _=t=>{console.log("pageChange",t),s.value.rows=t.rows,s.value.page=t.page,y()};return(t,e)=>{const m=n("mSlotSelector"),D=n("Dialog"),C=n("mToolbar"),V=n("Column"),A=n("DataTable"),R=n("ContextMenu"),W=n("mCard"),$=J("auto-animate");return k(),S(N,null,[o(D,{visible:d(a).show,"onUpdate:visible":e[0]||(e[0]=c=>d(a).show=c),header:d(a).header,class:"shadow-8",style:{width:"97vw"}},{default:r(()=>[o(m,{slotName:d(a).slot},{addPowers:r(()=>[I(" addpowers "),o(te)]),bondReport:r(()=>[o(re,{id:d(a).bond.id},null,8,["id"])]),_:1},8,["slotName"])]),_:1},8,["visible","header"]),g("div",ie,[o(W,{class:"flex-grow-1",style:{width:"90vw"}},{default:r(()=>[o(C,{class:"mb-3",items:b.value,"onClick:addBond":e[1]||(e[1]=c=>t.addButton())},{powerSearch:r(()=>[o(K,{compact:!0,label:"Search"})]),_:1},8,["items"]),T((k(),E(A,{value:d(i),class:"p-datatable-sm mScroll",stripedRows:"",scrollHeight:"74vh",showGridlines:"",loading:d(f),selectionMode:"single",paginator:!0,paginatorPosition:"top",rows:d(s).rows,totalRecords:d(s).totalRecords,pageLinkSize:5,rowsPerPageOptions:d(s).rowsOptions,onPage:_,lazy:!0,contextMenu:"",contextMenuSelection:d(s).selected,"onUpdate:contextMenuSelection":e[2]||(e[2]=c=>d(s).selected=c),onRowContextmenu:e[3]||(e[3]=c=>h(c)),selection:d(s).selected,"onUpdate:selection":e[4]||(e[4]=c=>d(s).selected=c),onRowDblclick:e[5]||(e[5]=c=>v())},{default:r(()=>[(k(!0),S(N,null,Q(d(P),(c,ce)=>T((k(),E(V,X({key:c.field},c,{class:`${c.wordWrap?"mCellWordWrap":"mNoWordWrap"}`}),null,16,["class"])),[[$]])),128))]),_:1},8,["value","loading","rows","totalRecords","rowsPerPageOptions","contextMenuSelection","selection"])),[[$]]),o(R,{model:x.value,ref_key:"cm",ref:u},null,8,["model"])]),_:1})])],64)}}};export{me as default};
