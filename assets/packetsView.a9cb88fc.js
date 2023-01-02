import{D as j,G as te,I as ae,f as le,g as z,r as c,o as W,h as f,a as E,c as k,d as x,i as a,j as P,b as V,F as J,k as Z,l as R,t as U,m as H,n as L,q as G,y as oe,w as se,x as ne,_ as ce,p as re}from"./index.f9dfb1df.js";import{u as q,_ as K}from"./mComments.07b44ed8.js";function Q(){const{create:w,get:l,update:m,getRow:A}=j();return{createCustomerApplication:async(d={})=>{const{data:t}=await w("customerApplications",d);return t},getCustomerApplications:async d=>(console.log("getCustomerApplications",d),await l("customerApplications",{eq:d})),getCustomerApplication:async d=>{const{data:t}=await A("customerApplications",d);return t},updateCustomerApplication:async(d,t)=>{const{data:D,error:C}=await m("customerApplications",d,t);return{data:D,error:C}}}}function X(){const{get:w,create:l,update:m,getRow:A,search:h}=j(),{user:p}=te(),{currentUserProfile:_}=ae(),{addComment:y}=q();return{getPackets:async(n={})=>{const{data:s}=await w("packets",n);return s},getPacket:async n=>{const{data:s}=await A("packets",n);return s},createPacket:async n=>{n.assignedAgentID=_.value.leadAgentID;const{data:s}=await l("packets",{...n,createdBy:p.value.id});return y({packetID:s[0].id,comment:`Packet created under ${_.value.leadAgentName}`}),{data:s}},searchPackets:async(n,s={})=>(n!=""&&(s={...s,like:{searchIndex:n.toUpperCase()}}),await w("search_packet_index",s)),updatePacket:async(n,s)=>{s.modifiedAt=new Date;const{data:g,error:B}=await m("packets",n,s);return{data:g,error:B}}}}const ie={class:"mPacketSearch"},de={class:"p-input-icon-left mb-0",style:{width:"100%"}},ue=P("i",{class:"pi pi-search"},null,-1),me={class:"m-List p-component"},pe=["onClick"],ye={class:"m-List-Item-Header"},ve={class:"m-List-Item-SubHeader"},ke=P("hr",{class:"m-List-Item-Line mx-1 mb-0"},null,-1),ge={key:1},Ce={__name:"mPacketSearch",setup(w){const{createPacket:l,getPackets:m,searchPackets:A}=X(),h=le(),{debounce:p}=z(),_=c(""),y=c(!1);W(async()=>{t.value={...d.value},await o()});const d=c({page:0,rows:20,first:0,pageCount:0,totalRecords:0}),t=c({}),D=async b=>{console.log("pagechange",b),t.value.page=b.page,o()},C=async()=>{p(async()=>{t.value={...d.value},await o()})},o=async()=>{y.value=!0;const b=t.value,u=b.page*b.rows,F=u+b.rows-1,{data:v,count:S}=await A(_.value,{range:{from:u,to:F},order:{column:"modifiedAt",ascending:!1}});return console.log("\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}\u{1F60B}",S),n.value=v,t.value.totalRecords=S,y.value=!1,!0},n=c([]),s=c([{type:"title",label:"Packets"},{type:"spacer"},{type:"Button",label:"",icon:"pi pi-plus",class:"p-button-success ",callback:()=>{g.value={...N.value}}}]),g=c({show:!1,header:"Add Customer",slot:"addCustomer"}),B=c({show:!1,header:"Add Customer",slot:"addCustomer"}),N=c({show:!0,header:"Add Packet",slot:"addPacket",packetData:{},formItems:[{key:"firstName",label:"First Name",type:"text"},{key:"lastName",label:"Last Name",type:"text"},{type:"Button",label:"Add Packet",onClick:async()=>{let{data:b}=await l(N.value.packetData);console.log("MADE PACKET",b),h.push({name:"packets",params:{id:b[0].id}}),await o(),g.value={...B.value}}}]});return(b,u)=>{const F=f("mToolbar"),v=f("InputText"),S=f("Paginator"),$=f("Skeleton"),T=f("mForm"),M=f("Dialog"),i=E("auto-animate");return k(),x("div",ie,[a(F,{items:s.value},null,8,["items"]),P("span",de,[ue,a(v,{onInput:u[0]||(u[0]=e=>C()),modelValue:_.value,"onUpdate:modelValue":u[1]||(u[1]=e=>_.value=e),type:"search",placeholder:"Quick Search",class:"p-inputtext-sm flex-grow-1",style:{width:"100%"}},null,8,["modelValue"])]),a(S,{first:t.value.first,"onUpdate:first":u[2]||(u[2]=e=>t.value.first=e),rows:t.value.rows,totalRecords:t.value.totalRecords,template:"PrevPageLink CurrentPageReport NextPageLink",onPage:D},null,8,["first","rows","totalRecords"]),V((k(),x("div",me,[y.value?H("",!0):(k(!0),x(J,{key:0},Z(n.value,e=>V((k(),x("div",{key:e.id,class:"m-List-Item pt-1"},[V((k(),x("div",{class:"m-List-Item-Content px-1 mx-1",onClick:I=>R(h).push({name:"packets",params:{id:e.id}})},[P("div",ye,U(e.lastName)+", "+U(e.firstName)+" - "+U(e.liability),1),P("div",ve,U(e.Modified),1)],8,pe)),[[i]]),ke])),[[i]])),128)),y.value?(k(),x("div",ge,[a($,{width:"13rem",height:"3rem",class:"mt-2 mx-1"})])):H("",!0)])),[[i]]),a(M,{visible:g.value.show,"onUpdate:visible":u[4]||(u[4]=e=>g.value.show=e),header:g.value.header},{default:L(()=>[a(T,{modelValue:g.value.packetData,"onUpdate:modelValue":u[3]||(u[3]=e=>g.value.packetData=e),items:g.value.formItems,direction:"vertical"},null,8,["modelValue","items"])]),_:1},8,["visible","header"])])}}},be={__name:"mProspectiveInd",props:{id:[Number]},emits:["saveStatus"],setup(w,{emit:l}){const m=w,{debounce:A}=z(),{getCustomerApplication:h,updateCustomerApplication:p}=Q();W(async()=>{d()});const _=async()=>{l("saveStatus","unsaved"),A(async()=>{console.log("updating",m.id),l("saveStatus","loading"),await p(m.id,y.value),l("saveStatus","saved")},1e3)},y=c({}),d=async()=>{const D=await h(m.id);y.value=D},t=c([{type:"header",label:"Prospective Indemnitor"},{type:"text",label:"First Name",key:"firstName",mClass:"col-6 mInputStrong"},{type:"text",label:"Last Name",key:"lastName",mClass:"col-6 mInputStrong"},{type:"dropdown",label:"Relationship",key:"relationship",mClass:"col-12",editable:!0,options:["Aunt","Uncle","Boss","Brother","Cousin","Co-Worker","Daughter","Father","Friend","Girlfriend","Grandfather","Grandmother","Husband","Wife","Mother","Nephew","Niece","Other","Sister","Son"]},{type:"phoneNumber",label:"Phone",key:"primaryPhone",mClass:"col-12 mInputStrong"},{type:"text",label:"Job",key:"job",mClass:"col-12"},{type:"text",label:"E-mail",key:"email",mClass:"col-12"},{type:"text",label:"Address",key:"addressStreet",mClass:"col-12"},{type:"text",label:"City",key:"addressCity",mClass:"col-6"},{type:"state",label:"State",key:"addressState",mClass:"col-3"},{type:"text",label:"Zip",key:"addressZip",mClass:"col-3"}]);return(D,C)=>{const o=f("mForm"),n=f("mCard");return k(),G(n,null,{default:L(()=>[a(o,{modelValue:y.value,"onUpdate:modelValue":C[0]||(C[0]=s=>y.value=s),items:t.value,direction:"horizontal",onChange:C[1]||(C[1]=s=>_()),class:"-mt-3"},null,8,["modelValue","items"]),a(K,{findCommentsAttachedTo:{customerApplicationID:m.id},attachNewCommentTo:{customerApplicationID:m.id}},null,8,["findCommentsAttachedTo","attachNewCommentTo"])]),_:1})}}},fe={class:"grid mx-1 my-1"},he={class:"col-12 -mt-2 justify-content-end flex"},_e={class:"col-12 -mt-1 p-1"},xe={class:"sm:col-12 md:col-12 lg:col-6 xl:col-6 p-1 pt-1"},Pe={class:"sm:col-12 md:col-12 lg:col-6 xl:col-6 p-1 pt-1"},we={class:"sm:col-12 md:col-12 lg:col-6 xl:col-4 p-1 pt-1"},Ae={class:"sm:col-12 md:col-12 lg:col-6 xl:col-4 p-1 pt-2 pr-2"},Ie={__name:"mPacket",props:{packetID:[Number,String]},setup(w){const l=w,{debounce:m}=z(),{getPacket:A,updatePacket:h}=X(),{createCustomerApplication:p,getCustomerApplications:_,updateCustomerApplication:y,getCustomerApplication:d}=Q(),{agents:t}=oe(),{addComment:D}=q();se(()=>l.packetID,async(i,e)=>{o.value={},n(i)}),W(async()=>{n(l.packetID)});const C=c(!1),o=c({}),n=async i=>{C.value=!0;let e=await A(i);if(o.value=e,o.value.defendantAppID)await u(o.value.defendantAppID);else{const I=await p();o.value.defendantAppID=I[0].id,await S(),await u(I[0].id)}await T(),C.value=!1},s=c([{type:"header",label:"Verified by MBB"},{key:"arrestHistory",label:"Arrest History",type:"text",mClass:"col-12"},{key:"confirmedMbbClient",label:"confirmed MBB Client",type:"checkbox",mClass:"sm:col-12 md:col-12 lg:col-6 xl:col-4"},{key:"priorBalance",label:"Prior Balance",type:"money",mClass:"sm:col-12 md:col-12 lg:col-6 xl:col-8"},{key:"lawyer",label:"Lawyer",type:"text",mClass:"sm:col-12 md:col-12 lg:col-12 xl:col-12"},{key:"isOnProbation",label:"On Probation",type:"checkbox",mClass:"sm:col-12 md:col-12 lg:col-6 xl:col-3"},{key:"probationOfficer",label:"Probation Officer",type:"text",mClass:"sm:col-12 md:col-12 lg:col-6 xl:col-9"}]),g=c([{type:"header",label:"Payment Plan Information"},{key:"payCycle",label:"Pay Cycle",type:"dropdown",options:["Daily","Weekly","BiWeekly","Monthly"],editable:!0,mClass:"col-12"},{key:"moneyToPayPerCycle",label:"Money To Pay Per Cycle",type:"money",mClass:"col-12"},{key:"moneyInProperty",label:"Money In Property",type:"money",mClass:"col-12"},{key:"paymentUponRelease",label:"Payment Upon Release",type:"money",mClass:"col-12"}]),B=ne(()=>[{type:"header",label:"Lead Info"},{key:"lastName",label:"Last Name",type:"text",mClass:"col-12 md:col-3 lg:col-3 xl:col-3 mInputStrong"},{key:"firstName",label:"First Name",type:"text",mClass:"col-12 md:col-3 lg:col-3 xl:col-3 mInputStrong"},{key:"liability",label:"liability",type:"money",mClass:"col-12 md:col-3 lg:col-3 xl:col-3 mInputStrong"},{key:"premium",label:"Premium",type:"money",mClass:"col-12 md:col-3 lg:col-3 xl:col-3 mInputStrong"},{key:"created_at",label:"Created",type:"dateTime",mClass:"col-12 md:col-3 lg:col-3 xl:col-3 ",disabled:!0},{key:"assignedAgentID",label:"Agent",type:"dropdown",mClass:"col-12 md:col-3 lg:col-3 xl:col-3 ",options:t.value,optionLabel:"name",optionValue:"id"},{type:"dropdown",label:"Jail",key:"jail",mClass:"col-12 md:col-3 lg:col-3 xl:col-3 ",editable:!0,options:["Alachua","Baker","Bay","Bradford","Brevard","Broward","Calhoun","Charlotte","Citrus","Clay","Collier","Columbia","Desoto","Dixie","Duval","Escambia","Flagler","Franklin","Gadsden","Gilchrist","Glades","Gulf","Hamilton","Hardee","Hendry","Hernando","Highlands","Hillsborough","Holmes","Indian River","Jackson","Jefferson","Lafayette","Lake","Lee","Leon","Levy","Liberty","Madison","Manatee","Marion","Martin","Miami-Dade","Monroe","Nassau","Okaloosa","Okeechobee","Orange","Osceola","Palm Beach","Pasco","Pinellas","Polk","Putnam","St. Johns","St. Lucie","Santa Rosa","Sarasota","Seminole","Sumter","Suwannee","Taylor","Union","Volusia","Wakulla","Walton","Washington"]},{key:"deal",label:"Deal",type:"text",mClass:"col-12 md:col-12 lg:col-12 xl:col-12 mInputStrong"},{type:"header",label:"Risk Assesment"},{key:"riskFactors",label:"Risk Factors",type:"multiSelect",mClass:"col-12 redChip",showToggleAll:!1,scrollHeight:"500px",optionValue:"value",optionLabel:"label",options:[{label:"Paid Loss",value:"Paid Loss"},{label:"Prior FTA",value:"Prior FTA"},{label:"Lives out of State",value:"Lives out of State"},{label:"On active bond",value:"On active bond"},{label:"Out of state fugitive hold",value:"Out of state fugitive hold"},{label:"Not US Citizen",value:"Not US Citizen"},{label:"Immigration",value:"Immigration"},{label:"Old case number",value:"Old case number"},{label:"Out of county holds",value:"Out of county holds"}]},{key:"riskNote",label:"Risk Notes",type:"text",mClass:"col-12"}]),N=c({}),b=c([{type:"header",label:"Defendant details"},{type:"date",label:"DOB",key:"DOB",mClass:"col-12"},{type:"phoneNumber",label:"Phone",key:"primaryPhone",mClass:"col-12"},{type:"text",label:"Job",key:"job",mClass:"col-6"},{type:"text",label:"Location",key:"addressLength",mClass:"col-6"},{type:"text",label:"E-mail",key:"email",mClass:"col-12"},{type:"text",label:"Address",key:"addressStreet",mClass:"col-12"},{type:"text",label:"City",key:"addressCity",mClass:"col-6"},{type:"state",label:"State",key:"addressState",mClass:"col-3"},{type:"text",label:"Zip",key:"addressZip",mClass:"col-3"},{type:"text",label:"How Long at address",key:"addressLength",mClass:"col-12"},{type:"text",label:"Nickname/Alias",key:"alias",mClass:"col-12"}]),u=async i=>{N.value={};let e=await d(i);return N.value=e,!0},F=async()=>{v.value="unsaved",m(async()=>{v.value="loading";const{error:i}=await y(o.value.defendantAppID,N.value);return i?v.value="error":v.value="saved",!0},1e3)},v=c("saved"),S=async i=>{if(i.key==="assignedAgentID"){const e=t.value.findIndex(I=>I.id===i.value);D({packetID:l.packetID,comment:`Packet reassigned to ${t.value[e].name}`})}v.value="unsaved",m(async()=>{v.value="loading";const{error:e}=await h(l.packetID,o.value);return e?v.value="error":v.value="saved",!0},1e3)},$=c([]),T=async()=>{let{data:i}=await _({packetID:l.packetID});return $.value=i,!0},M=async()=>{await p({packetID:l.packetID}),T()};return(i,e)=>{const I=f("mForm"),O=f("mCard"),Y=f("Button");return k(),x("div",fe,[P("div",he,[a(ce,{status:v.value,class:"mr-2"},null,8,["status"])]),P("div",_e,[a(O,null,{default:L(()=>[a(I,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=r=>o.value=r),items:R(B),direction:"horizontal",onChange:e[1]||(e[1]=r=>S(r)),class:"-mt-3"},null,8,["modelValue","items"])]),_:1})]),P("div",xe,[a(O,null,{default:L(()=>[a(I,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=r=>o.value=r),items:s.value,direction:"horizontal",onChange:e[3]||(e[3]=r=>S(r)),class:"-mt-3"},null,8,["modelValue","items"])]),_:1})]),P("div",Pe,[a(O,null,{default:L(()=>[a(I,{modelValue:o.value,"onUpdate:modelValue":e[4]||(e[4]=r=>o.value=r),items:g.value,direction:"horizontal",onChange:e[5]||(e[5]=r=>S(r)),class:"-mt-3"},null,8,["modelValue","items"])]),_:1})]),P("div",we,[a(O,null,{default:L(()=>[a(I,{modelValue:N.value,"onUpdate:modelValue":e[6]||(e[6]=r=>N.value=r),items:b.value,direction:"horizontal",onChange:e[7]||(e[7]=r=>F()),class:"-mt-3"},null,8,["modelValue","items"]),a(K,{findCommentsAttachedTo:{packetID:l.packetID},attachNewCommentTo:{packetID:l.packetID}},null,8,["findCommentsAttachedTo","attachNewCommentTo"])]),_:1})]),(k(!0),x(J,null,Z($.value,r=>(k(),x("div",{class:"sm:col-12 md:col-12 lg:col-6 xl:col-4 p-1 pt-1",key:r.id},[a(be,{id:r.id,onSaveStatus:e[8]||(e[8]=ee=>v.value=ee)},null,8,["id"])]))),128)),P("div",Ae,[a(Y,{onClick:e[9]||(e[9]=r=>M()),class:"border-round-2xl justify-content-center shadow-6",label:"Add Prospect",style:{width:"100%",height:"5rem"}})])])}}},De={class:"flex p-component"},Se={class:"flex-grow-1"},Ve={__name:"packetsView",setup(w){const l=re();return(m,A)=>{const h=f("mCard"),p=E("auto-animate");return k(),x("div",De,[V((k(),G(h,{class:"flex-shrink-1"},{default:L(()=>[a(Ce)]),_:1})),[[p]]),V((k(),x("div",Se,[R(l).params.id?V((k(),G(h,{key:0,class:"",style:{"background-color":"var(--primary-100)"}},{default:L(()=>[V(a(Ie,{packetID:R(l).params.id,class:"flex-grow-1"},null,8,["packetID"]),[[p]])]),_:1})),[[p]]):H("",!0)])),[[p]])])}}};export{Ve as default};
