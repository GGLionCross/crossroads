(self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[]).push([[763],{3562:(e,r,l)=>{"use strict";l.d(r,{Z:()=>I});var o=l(3673),a=l(2323),t=l(8880);const s=(0,o.HX)("data-v-7a1b6343");(0,o.dD)("data-v-7a1b6343");const n={class:"card-ctn absolute"},i={key:0,class:"card-name text-center text-uppercase"},u={key:"trigger",class:"absolute full-width full-height column justify-between"},d={class:"text-italic"},c={class:"row justify-around"},m={key:"options",class:"absolute full-width"},p={class:"option-label text-center text-uppercase"},g={class:"row justify-center"},w={key:"result",class:"absolute full-width full-height column justify-between"},f={class:"row justify-around"};(0,o.Cn)();const v=s(((e,r,l,v,b,C)=>{const h=(0,o.up)("q-btn"),k=(0,o.up)("q-card"),W=(0,o.up)("q-separator"),y=(0,o.up)("q-scroll-area"),q=(0,o.up)("q-card-section");return(0,o.wg)(),(0,o.j4)("div",n,[(0,o.Wm)(k,{class:["card side-back absolute column justify-end items-center",{"card-rotate":e.isVisible}]},{default:s((()=>[(0,o.Wm)(h,{color:"green-10",icon:"play_circle_filled",size:"2em",flat:"",round:"",onClick:e.showCard},null,8,["onClick"])])),_:1},8,["class"]),(0,o.Wm)(k,{class:["card side-front absolute",{"card-rotate":!e.isVisible}]},{default:s((()=>[e.isVisible?((0,o.wg)(),(0,o.j4)(q,{key:0,class:"full-height column"},{default:s((()=>[e.isTriggered?((0,o.wg)(),(0,o.j4)("div",i,(0,a.zw)(e.name),1)):(0,o.kq)("",!0),(0,o.Wm)(y,{class:"col-grow"},{default:s((()=>[(0,o.Wm)(t.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:s((()=>[e.isTriggered?e.isShowingResult?((0,o.wg)(),(0,o.j4)("div",w,[(0,o.Wm)("div",null,(0,a.zw)(e.result),1),(0,o.Wm)("div",f,[(0,o.Wm)(h,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideResult},null,8,["onClick"]),e.hideNextCardButton?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(h,{key:0,color:"negative",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showNextCard},null,8,["onClick"]))])])):((0,o.wg)(),(0,o.j4)("div",m,[(0,o.Wm)("div",null,(0,a.zw)(e.intro),1),(0,o.Wm)(W,{color:"grey-10",spaced:""}),((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.options,(r=>((0,o.wg)(),(0,o.j4)("div",{key:r.label},[(0,o.Wm)("div",p,(0,a.zw)(r.label),1),(0,o.Wm)("div",{class:"cursor-pointer border-blink q-pa-xs",onClick:l=>e.showResult(r.result)},[(0,o.Wm)("div",null,(0,a.zw)(r.subtext),1)],8,["onClick"])])))),128)),(0,o.Wm)("div",g,[(0,o.Wm)(h,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCardInfo},null,8,["onClick"])])])):((0,o.wg)(),(0,o.j4)("div",u,[(0,o.Wm)("div",d,(0,a.zw)(e.trigger),1),(0,o.Wm)("div",c,[e.hideNextCardButton?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(h,{key:0,color:"grey-14",icon:"close",size:"1em",flat:"",round:"",onClick:e.showNextCard},null,8,["onClick"])),e.preview?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(h,{key:1,color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCard},null,8,["onClick"])),(0,o.Wm)(h,{color:"negative",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showCardInfo},null,8,["onClick"])])]))])),_:1})])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1},8,["class"])])}));var b=l(1959),C=l(7874);const h=(0,o.aZ)({props:{info:{type:Object,required:!0},preview:{type:Boolean,default:!1}},setup(e,{emit:r}){const l=e.preview?(0,b.iH)(!0):(0,b.iH)(!1),a=()=>{l.value=!0},t=(0,C.oR)(),s=(0,o.Fl)((()=>t.getters.getFilteredCards.length)),n=(0,o.Fl)((()=>t.getters.getCounter)),i=(0,o.Fl)((()=>n.value>=s.value-1)),u=()=>{e.preview?r("closePreview"):t.dispatch("showNextCard")},d=()=>{l.value=!1},c=(0,o.Fl)((()=>e.info?e.info.trigger:"")),m=(0,o.Fl)((()=>e.info?e.info.name:"")),p=(0,o.Fl)((()=>e.info?e.info.intro:"")),g=(0,o.Fl)((()=>e.info?e.info.options:"")),w=(0,b.iH)(!1),f=()=>{w.value=!0},v=()=>{w.value=!1},h=(0,b.iH)("Result"),k=(0,b.iH)(!1),W=e=>{h.value=e,k.value=!0},y=()=>{h.value="",k.value=!1};return{isVisible:l,showCard:a,hideNextCardButton:i,showNextCard:u,hideCard:d,trigger:c,name:m,intro:p,options:g,isTriggered:w,showCardInfo:f,hideCardInfo:v,result:h,isShowingResult:k,showResult:W,hideResult:y}}});var k=l(151),W=l(2165),y=l(5589),q=l(7704),$=l(5869),_=l(7518),Z=l.n(_);h.render=v,h.__scopeId="data-v-7a1b6343";const I=h;Z()(h,"components",{QCard:k.Z,QBtn:W.Z,QCardSection:y.Z,QScrollArea:q.Z,QSeparator:$.Z})},763:(e,r,l)=>{"use strict";l.r(r),l.d(r,{default:()=>ze});var o=l(3673);const a=(0,o.Uk)(" Crossroads ");function t(e,r,l,t,s,n){const i=(0,o.up)("q-toolbar-title"),u=(0,o.up)("q-toolbar"),d=(0,o.up)("q-header"),c=(0,o.up)("drawer-menu"),m=(0,o.up)("footer-controls"),p=(0,o.up)("router-view"),g=(0,o.up)("q-page-container"),w=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(w,{view:"lHh Lpr lFr"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"mobile-only bg-header-footer"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"text-center"},{default:(0,o.w5)((()=>[a])),_:1})])),_:1})])),_:1}),(0,o.Wm)(c,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[1]||(r[1]=r=>e.leftDrawerOpen=r)},null,8,["modelValue"]),(0,o.Wm)(m,{onOpenMenu:e.toggleLeftDrawer},null,8,["onOpenMenu"]),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p)])),_:1})])),_:1})}var s=l(1959);function n(e,r,l,a,t,s){const n=(0,o.up)("login-register"),i=(0,o.up)("user-card"),u=(0,o.up)("drawer-menu-item"),d=(0,o.up)("q-separator"),c=(0,o.up)("q-list"),m=(0,o.up)("q-drawer"),p=(0,o.up)("drawer-filter"),g=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)("div",null,[(0,o.Wm)(m,(0,o.dG)(e.$attrs,{class:"bg-drawer column justify-between no-wrap",side:"right",dark:""}),{default:(0,o.w5)((()=>[e.isUserLoggedIn?((0,o.wg)(),(0,o.j4)(i,{key:1})):((0,o.wg)(),(0,o.j4)(n,{key:0})),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(u,{label:"Shuffle",icon:"shuffle",onClick:e.shuffleCrossroads},null,8,["onClick"]),[[g]]),(0,o.Wm)(u,{label:"Filter",icon:"filter_alt",onClick:e.showDrawerFilter},null,8,["onClick"]),(0,o.Wm)(d,{dark:""}),(0,o.Wm)(u,{label:"Close",icon:"close",onClick:e.hideDrawer},null,8,["onClick"])])),_:1})])),_:1},16),(0,o.Wm)(p,{modelValue:e.filtersVisible,"onUpdate:modelValue":r[1]||(r[1]=r=>e.filtersVisible=r)},null,8,["modelValue"])])}var i=l(7874);const u={class:"column overflow-hidden"},d={class:"close-ctn row justify-center"};function c(e,r,l,a,t,s){const n=(0,o.up)("filter-table"),i=(0,o.up)("q-scroll-area"),c=(0,o.up)("q-btn"),m=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(m,(0,o.dG)(e.$attrs,{class:"drawer-filter",position:"bottom",maximized:"",persistent:""}),{default:(0,o.w5)((()=>[(0,o.Wm)("div",u,[(0,o.Wm)(i,{class:"col-grow"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{category:"Basic",rows:e.basicCards,basic:""},null,8,["rows"]),(0,o.Wm)(n,{category:"Character Exclusive",rows:e.characterCards},null,8,["rows"]),(0,o.Wm)(n,{category:"Traitor",rows:e.traitorCards},null,8,["rows"]),(0,o.Wm)(n,{category:"Explicit",rows:e.explicitCards},null,8,["rows"])])),_:1}),(0,o.Wm)("div",d,[(0,o.Wm)(c,{class:"full-width",color:"white",icon:"close",dark:"",flat:"",onClick:e.hideDrawerFilter},null,8,["onClick"])])])])),_:1},16)}l(71);var m=l(2323);const p=(0,o.HX)("data-v-14eeaf00");(0,o.dD)("data-v-14eeaf00");const g={class:"filter-table"},w={class:"text-uppercase"},f={class:"preview-ctn absolute overflow-hidden"};(0,o.Cn)();const v=p(((e,r,l,a,t,s)=>{const n=(0,o.up)("q-icon"),i=(0,o.up)("q-checkbox"),u=(0,o.up)("q-btn"),d=(0,o.up)("q-td"),c=(0,o.up)("q-table"),v=(0,o.up)("crossroads-card"),b=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)("div",g,[(0,o.Wm)("div",{class:["row","justify-between","cursor-pointer","bg-negative","text-white","q-pa-sm"],onClick:r[1]||(r[1]=(...r)=>e.toggleTableVisible&&e.toggleTableVisible(...r))},[(0,o.Wm)("div",w,(0,m.zw)(e.category)+" ( "+(0,m.zw)(e.cardsAdded)+" / "+(0,m.zw)(e.rowCount)+" )",1),(0,o.Wm)(n,{name:"expand_more",size:"xs",class:["icon-dropdown",{"rotate-180":e.tableVisible}]},null,8,["class"])]),e.tableVisible?((0,o.wg)(),(0,o.j4)(c,(0,o.dG)({key:0},e.$attrs,{columns:e.columns,pagination:e.pagination,selection:"multiple",dark:"",flat:"","hide-pagination":"","virtual-scroll":""}),{"header-selection":p((()=>[(0,o.Wm)(i,{"model-value":e.areAllInFilter,color:"negative",dark:"","onUpdate:modelValue":e.toggleFilterAll},null,8,["model-value","onUpdate:modelValue"])])),"body-selection":p((r=>[(0,o.Wm)(i,{"model-value":e.isInFilter(r.row.key),color:"negative",disable:e.disableFilter(r.row.key),dark:"","onUpdate:modelValue":l=>e.toggleFilter(l,r.row.key)},null,8,["model-value","disable","onUpdate:modelValue"])])),"body-cell-preview":p((r=>[(0,o.Wm)(d,{props:r},{default:p((()=>[(0,o.Wm)(u,{color:"info",icon:"open_in_new","text-color":"negative",glossy:"",round:"",onClick:l=>e.previewCard(r.row)},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},16,["columns","pagination"])):(0,o.kq)("",!0),(0,o.Wm)(b,{modelValue:e.previewVisible,"onUpdate:modelValue":r[2]||(r[2]=r=>e.previewVisible=r),onHide:e.clearCardToPreview},{default:p((()=>[(0,o.Wm)("div",f,[(0,o.Wm)(v,{info:e.cardToPreview,preview:"",onClosePreview:e.closePreview},null,8,["info","onClosePreview"])])])),_:1},8,["modelValue","onHide"])])}));var b=l(3562);const C=[{name:"name",label:"Name",field:"name",align:"center"},{name:"preview",label:"Preview",field:"name",align:"center"}],h=(0,o.aZ)({props:{category:{type:String,required:!0},basic:{type:Boolean,default:!1}},components:{CrossroadsCard:b.Z},setup(e,{attrs:r}){const l=(0,i.oR)(),a=(0,s.iH)(!1),t=()=>{a.value=!a.value},n=(0,o.Fl)((()=>r.rows.length)),u=(0,o.Fl)((()=>{let e=0;for(let l of r.rows)m(l.key)&&e++;return e})),d=(0,s.iH)({sortBy:"name",descending:!1,rowsPerPage:0}),c=(0,o.Fl)((()=>l.getters.getFilter)),m=e=>c.value.includes(e),p=(e,r)=>l.dispatch("toggleFilter",{value:e,key:r}),g=(0,o.Fl)((()=>n.value===u.value||0!==u.value&&null)),w=r=>e.basic&&1===u.value&&m(r),f=l=>{for(let o=0;o<r.rows.length;o++)o||!e.basic||l?p(l,r.rows[o].key):p(!0,r.rows[o].key)},v=(0,s.iH)(!1),b=(0,s.iH)({}),h=e=>{b.value=e,v.value=!0},k=()=>b.value={},W=()=>v.value=!1;return{columns:C,tableVisible:a,toggleTableVisible:t,rowCount:n,cardsAdded:u,pagination:d,filter:c,isInFilter:m,toggleFilter:p,areAllInFilter:g,disableFilter:w,toggleFilterAll:f,previewVisible:v,cardToPreview:b,previewCard:h,clearCardToPreview:k,closePreview:W}}});var k=l(4554),W=l(9890),y=l(1420),q=l(3884),$=l(2165),_=l(6778),Z=l(7518),I=l.n(Z);h.render=v,h.__scopeId="data-v-14eeaf00";const V=h;I()(h,"components",{QIcon:k.Z,QTable:W.Z,QCheckbox:y.Z,QTd:q.Z,QBtn:$.Z,QDialog:_.Z});const F=(0,o.aZ)({components:{FilterTable:V},setup(e,{emit:r}){const l=(0,i.oR)(),a=(0,o.Fl)((()=>Object.values(l.getters.getCards))),t=(0,o.Fl)((()=>a.value.filter((e=>e.basic)))),s=(0,o.Fl)((()=>a.value.filter((e=>e.character)))),n=(0,o.Fl)((()=>a.value.filter((e=>e.traitor)))),u=(0,o.Fl)((()=>a.value.filter((e=>e.explicit)))),d=()=>r("update:modelValue",!1);return{basicCards:t,characterCards:s,traitorCards:n,explicitCards:u,hideDrawerFilter:d}}});var Q=l(7704);F.render=c;const x=F;function j(e,r,l,a,t,s){const n=(0,o.up)("q-icon"),i=(0,o.up)("q-item-section"),u=(0,o.up)("q-item-label"),d=(0,o.up)("q-item");return(0,o.wg)(),(0,o.j4)(d,(0,o.dG)(e.$attrs,{clickable:""}),{default:(0,o.w5)((()=>[(0,o.Wm)(i,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{name:e.icon},null,8,["name"])])),_:1}),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(e.label),1)])),_:1})])),_:1})])),_:1},16)}I()(F,"components",{QDialog:_.Z,QScrollArea:Q.Z,QBtn:$.Z});const U=(0,o.aZ)({props:{label:{type:String},icon:{type:String}}});var z=l(3414),P=l(2035),R=l(2350);U.render=j;const T=U;I()(U,"components",{QItem:z.Z,QItemSection:P.Z,QIcon:k.Z,QItemLabel:R.Z});const L={class:"row justify-end"},D={class:"row justify-end"};function H(e,r,l,a,t,s){const n=(0,o.up)("q-tab"),i=(0,o.up)("q-tabs"),u=(0,o.up)("base-input"),d=(0,o.up)("q-btn"),c=(0,o.up)("q-tab-panel"),m=(0,o.up)("q-tab-panels"),p=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(p,{class:"bg-drawer",flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:e.tab,"onUpdate:modelValue":r[1]||(r[1]=r=>e.tab=r),class:"col-grow"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{name:"login",label:"Login"}),(0,o.Wm)(n,{name:"register",label:"Register"})])),_:1},8,["modelValue"]),e.isClosed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(m,{key:0,modelValue:e.tab,"onUpdate:modelValue":r[8]||(r[8]=r=>e.tab=r),animated:"",class:"bg-drawer"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{name:"login",class:"q-gutter-y-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:e.v$.loginInfo.email.$model,"onUpdate:modelValue":r[2]||(r[2]=r=>e.v$.loginInfo.email.$model=r),error:e.v$.loginInfo.email.$error,"error-message":e.getErrorMessage(e.v$.loginInfo.email.$errors),label:"Email"},null,8,["modelValue","error","error-message"]),(0,o.Wm)(u,{modelValue:e.v$.loginInfo.password.$model,"onUpdate:modelValue":r[3]||(r[3]=r=>e.v$.loginInfo.password.$model=r),error:e.v$.loginInfo.password.$error,"error-message":e.getErrorMessage(e.v$.loginInfo.password.$errors),label:"Password",type:"password"},null,8,["modelValue","error","error-message"]),(0,o.Wm)("div",L,[(0,o.Wm)(d,{color:"negative",icon:"arrow_forward",size:"1em",flat:"",onClick:e.userLogin},null,8,["onClick"])])])),_:1}),(0,o.Wm)(c,{name:"register",class:"q-gutter-y-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:e.v$.registerInfo.email.$model,"onUpdate:modelValue":r[4]||(r[4]=r=>e.v$.registerInfo.email.$model=r),error:e.v$.registerInfo.email.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.email.$errors),label:"Email"},null,8,["modelValue","error","error-message"]),(0,o.Wm)(u,{modelValue:e.v$.registerInfo.username.$model,"onUpdate:modelValue":r[5]||(r[5]=r=>e.v$.registerInfo.username.$model=r),modelModifiers:{lazy:!0},error:e.v$.registerInfo.username.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.username.$errors),label:"Username"},null,8,["modelValue","error","error-message"]),(0,o.Wm)(u,{modelValue:e.v$.registerInfo.password.$model,"onUpdate:modelValue":r[6]||(r[6]=r=>e.v$.registerInfo.password.$model=r),error:e.v$.registerInfo.password.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.password.$errors),label:"Password",type:"password"},null,8,["modelValue","error","error-message"]),(0,o.Wm)(u,{modelValue:e.registerInfo.confirm,"onUpdate:modelValue":r[7]||(r[7]=r=>e.registerInfo.confirm=r),rules:[r=>e.passwordsMatch||"Passwords don't match"],label:"Confirm Password",type:"password"},null,8,["modelValue","rules"]),(0,o.Wm)("div",D,[(0,o.Wm)(d,{color:"negative",icon:"arrow_forward",size:"1em",flat:"",onClick:e.userRegister},null,8,["onClick"])])])),_:1})])),_:1},8,["modelValue"]))])),_:1})}var B=l(7191),M=l(515),S=l.n(M),N=(l(7280),l(8308));const A=e=>e.length?e[0].$message:"",E=S()(S()({},N.C1),{},{$message:"Field is required"}),O=S()(S()({},N.Do),{},{$message:"Invalid email"}),G={$message:"4-16 characters. Valid: a-z A-Z 0-9 _",$params:{type:"username"},$validator:e=>{const r=/^[a-zA-Z0-9_]{4,16}$/g;return e.match(r)}},X={$message:"6-16 characters. Valid: a-z A-Z 0-9 _ ! @ # $ % ^ & *",$params:{type:"password"},$validator:e=>{const r=/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/g;return e.match(r)}};function K(e,r,l,a,t,s){const n=(0,o.up)("q-input");return(0,o.wg)(),(0,o.j4)(n,(0,o.dG)(e.$attrs,{color:"info",dark:"",dense:"","hide-bottom-space":"",outlined:""}),null,16)}const Y=(0,o.aZ)({setup(e){return{}}});var J=l(4842);Y.render=K;const ee=Y;I()(Y,"components",{QInput:J.Z});const re=(0,o.aZ)({components:{BaseInput:ee},setup(){const e=(0,s.iH)("login"),r=(0,o.Fl)((()=>""===e.value)),l=()=>{e.value=""},a=(0,s.iH)({email:"",password:""}),t=(0,s.iH)({email:"",username:"",password:"",confirm:""}),n=(0,o.Fl)((()=>t.value.password===t.value.confirm)),u=(0,i.oR)(),d={loginInfo:{email:{vRequired:E,vEmail:O},password:{vRequired:E,vPassword:X}},registerInfo:{email:{vRequired:E,vEmail:O},username:{vRequired:E,vUsername:G},password:{vRequired:E,vPassword:X}}},c=(0,B.Xw)(d,{loginInfo:a,registerInfo:t}),m=()=>{c.value.loginInfo.$touch(),c.value.loginInfo.$invalid||u.dispatch("userLogin",a.value)},p=()=>{c.value.registerInfo.$touch(),!c.value.registerInfo.$invalid&&n&&u.dispatch("userRegister",t.value)};return{v$:c,getErrorMessage:A,tab:e,isClosed:r,registerInfo:t,passwordsMatch:n,closeLoginRegister:l,userLogin:m,userRegister:p}}});var le=l(151),oe=l(7547),ae=l(3269),te=l(5906),se=l(6602);re.render=H;const ne=re;I()(re,"components",{QCard:le.Z,QTabs:oe.Z,QTab:ae.Z,QTabPanels:te.Z,QTabPanel:se.Z,QBtn:$.Z});const ie=(0,o.Uk)("Settings"),ue=(0,o.Uk)("Logout");function de(e,r,l,a,t,s){const n=(0,o.up)("q-item-label"),i=(0,o.up)("q-item-section"),u=(0,o.up)("q-item"),d=(0,o.up)("q-list"),c=(0,o.up)("q-btn-dropdown"),m=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(m,{class:"bg-drawer",flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{label:e.currentUser.username,class:"full-width",icon:"account_circle","dropdown-icon":"expand_more","auto-close":"",flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"bg-drawer text-white no-shadow",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"text-center"},{default:(0,o.w5)((()=>[ie])),_:1})])),_:1})])),_:1}),(0,o.Wm)(u,{clickable:"",onClick:e.userLogout},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"text-center"},{default:(0,o.w5)((()=>[ue])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1},8,["label"])])),_:1})}const ce=(0,o.aZ)({setup(){const e=(0,i.oR)(),r=(0,o.Fl)((()=>e.getters.getCurrentUser)),l=()=>e.dispatch("userLogout");return{currentUser:r,userLogout:l}}});var me=l(2670),pe=l(7011);ce.render=de;const ge=ce;I()(ce,"components",{QCard:le.Z,QBtnDropdown:me.Z,QList:pe.Z,QItem:z.Z,QItemSection:P.Z,QItemLabel:R.Z});const we=(0,o.aZ)({components:{DrawerMenuItem:T,LoginRegister:ne,UserCard:ge,DrawerFilter:x},setup(e,{emit:r}){const l=()=>r("update:modelValue",!1),a=(0,i.oR)(),t=(0,o.Fl)((()=>a.getters.isUserLoggedIn)),n=()=>{a.dispatch("shuffleCrossroads"),l()},u=(0,s.iH)(!1),d=()=>{u.value=!0};return{hideDrawer:l,isUserLoggedIn:t,shuffleCrossroads:n,filtersVisible:u,showDrawerFilter:d}}});var fe=l(2901),ve=l(5869),be=l(677);we.render=n;const Ce=we;I()(we,"components",{QDrawer:fe.Z,QList:pe.Z,QSeparator:ve.Z}),I()(we,"directives",{ClosePopup:be.Z});const he={class:"col-4"},ke=(0,o.Uk)(" Crossroads "),We={class:"col-4 row justify-center items-center no-wrap"},ye={class:"q-px-md text-no-wrap"},qe={class:"col-4 row justify-end"};function $e(e,r,l,a,t,s){const n=(0,o.up)("q-toolbar-title"),i=(0,o.up)("q-btn"),u=(0,o.up)("q-toolbar"),d=(0,o.up)("q-footer");return(0,o.wg)(),(0,o.j4)(d,{class:"bg-header-footer"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)("div",he,[(0,o.Wm)(n,{class:"mobile-hide"},{default:(0,o.w5)((()=>[ke])),_:1})]),(0,o.Wm)("div",We,[(0,o.Wm)(i,{icon:e.disablePrevButton?"pan_tool":"chevron_left",flat:"",round:"",disable:e.disablePrevButton,onClick:e.showPrevCard},null,8,["icon","disable","onClick"]),(0,o.Wm)("div",ye,(0,m.zw)(e.counter+1)+" / "+(0,m.zw)(e.cardMax),1),(0,o.Wm)(i,{icon:e.disableNextButton?"pan_tool":"chevron_right",flat:"",round:"",disable:e.disableNextButton,onClick:e.showNextCard},null,8,["icon","disable","onClick"])]),(0,o.Wm)("div",qe,[(0,o.Wm)(i,{flat:"",dense:"",round:"",icon:"settings","aria-label":"Settings",onClick:e.emitOpenMenu},null,8,["onClick"])])])),_:1})])),_:1})}const _e=(0,o.aZ)({name:"FooterControls",setup(e,{emit:r}){const l=(0,i.oR)(),a=(0,o.Fl)((()=>l.getters.getFilteredCards.length)),t=(0,o.Fl)((()=>l.getters.getCounter)),s=(0,o.Fl)((()=>t.value<1)),n=()=>l.dispatch("showPrevCard"),u=(0,o.Fl)((()=>t.value>=a.value-1)),d=()=>l.dispatch("showNextCard"),c=()=>{r("openMenu")};return{cardMax:a,counter:t,disablePrevButton:s,showPrevCard:n,disableNextButton:u,showNextCard:d,emitOpenMenu:c}}});var Ze=l(1762),Ie=l(9570),Ve=l(3747);_e.render=$e;const Fe=_e;I()(_e,"components",{QFooter:Ze.Z,QToolbar:Ie.Z,QToolbarTitle:Ve.Z,QBtn:$.Z});const Qe=(0,o.aZ)({name:"MainLayout",components:{DrawerMenu:Ce,FooterControls:Fe},setup(){const e=(0,s.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var xe=l(9214),je=l(3812),Ue=l(2652);Qe.render=t;const ze=Qe;I()(Qe,"components",{QLayout:xe.Z,QHeader:je.Z,QToolbar:Ie.Z,QToolbarTitle:Ve.Z,QPageContainer:Ue.Z})}}]);