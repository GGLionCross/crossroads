(self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[]).push([[17],{3562:(e,l,t)=>{"use strict";t.d(l,{Z:()=>F});var o=t(3673),r=t(2323),a=t(8880);const n=(0,o.HX)("data-v-7a1b6343");(0,o.dD)("data-v-7a1b6343");const s={class:"card-ctn absolute"},i={key:0,class:"card-name text-center text-uppercase"},c={key:"trigger",class:"absolute full-width full-height column justify-between"},u={class:"text-italic"},d={class:"row justify-around"},w={key:"options",class:"absolute full-width"},m={class:"option-label text-center text-uppercase"},p={class:"row justify-center"},g={key:"result",class:"absolute full-width full-height column justify-between"},f={class:"row justify-around"};(0,o.Cn)();const v=n(((e,l,t,v,b,C)=>{const h=(0,o.up)("q-btn"),k=(0,o.up)("q-card"),W=(0,o.up)("q-separator"),y=(0,o.up)("q-scroll-area"),x=(0,o.up)("q-card-section");return(0,o.wg)(),(0,o.j4)("div",s,[(0,o.Wm)(k,{class:["card side-back absolute column justify-end items-center",{"card-rotate":e.isVisible}]},{default:n((()=>[(0,o.Wm)(h,{color:"green-10",icon:"play_circle_filled",size:"2em",flat:"",round:"",onClick:e.showCard},null,8,["onClick"])])),_:1},8,["class"]),(0,o.Wm)(k,{class:["card side-front absolute",{"card-rotate":!e.isVisible}]},{default:n((()=>[e.isVisible?((0,o.wg)(),(0,o.j4)(x,{key:0,class:"full-height column"},{default:n((()=>[e.isTriggered?((0,o.wg)(),(0,o.j4)("div",i,(0,r.zw)(e.name),1)):(0,o.kq)("",!0),(0,o.Wm)(y,{class:"col-grow"},{default:n((()=>[(0,o.Wm)(a.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:n((()=>[e.isTriggered?e.isShowingResult?((0,o.wg)(),(0,o.j4)("div",g,[(0,o.Wm)("div",null,(0,r.zw)(e.result),1),(0,o.Wm)("div",f,[(0,o.Wm)(h,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideResult},null,8,["onClick"]),e.hideNextCardButton?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(h,{key:0,color:"negative",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showNextCard},null,8,["onClick"]))])])):((0,o.wg)(),(0,o.j4)("div",w,[(0,o.Wm)("div",null,(0,r.zw)(e.intro),1),(0,o.Wm)(W,{color:"grey-10",spaced:""}),((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.options,(l=>((0,o.wg)(),(0,o.j4)("div",{key:l.label},[(0,o.Wm)("div",m,(0,r.zw)(l.label),1),(0,o.Wm)("div",{class:"cursor-pointer border-blink q-pa-xs",onClick:t=>e.showResult(l.result)},[(0,o.Wm)("div",null,(0,r.zw)(l.subtext),1)],8,["onClick"])])))),128)),(0,o.Wm)("div",p,[(0,o.Wm)(h,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCardInfo},null,8,["onClick"])])])):((0,o.wg)(),(0,o.j4)("div",c,[(0,o.Wm)("div",u,(0,r.zw)(e.trigger),1),(0,o.Wm)("div",d,[e.hideNextCardButton?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(h,{key:0,color:"grey-14",icon:"close",size:"1em",flat:"",round:"",onClick:e.showNextCard},null,8,["onClick"])),e.preview?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(h,{key:1,color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCard},null,8,["onClick"])),(0,o.Wm)(h,{color:"negative",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showCardInfo},null,8,["onClick"])])]))])),_:1})])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1},8,["class"])])}));var b=t(1959),C=t(7874);const h=(0,o.aZ)({props:{info:{type:Object,required:!0},preview:{type:Boolean,default:!1}},setup(e,{emit:l}){const t=e.preview?(0,b.iH)(!0):(0,b.iH)(!1),r=()=>{t.value=!0},a=(0,C.oR)(),n=(0,o.Fl)((()=>a.getters.getFilteredCards.length)),s=(0,o.Fl)((()=>a.getters.getCounter)),i=(0,o.Fl)((()=>s.value>=n.value-1)),c=()=>{e.preview?l("closePreview"):a.dispatch("showNextCard")},u=()=>{t.value=!1},d=(0,o.Fl)((()=>e.info?e.info.trigger:"")),w=(0,o.Fl)((()=>e.info?e.info.name:"")),m=(0,o.Fl)((()=>e.info?e.info.intro:"")),p=(0,o.Fl)((()=>e.info?e.info.options:"")),g=(0,b.iH)(!1),f=()=>{g.value=!0},v=()=>{g.value=!1},h=(0,b.iH)("Result"),k=(0,b.iH)(!1),W=e=>{h.value=e,k.value=!0},y=()=>{h.value="",k.value=!1};return{isVisible:t,showCard:r,hideNextCardButton:i,showNextCard:c,hideCard:u,trigger:d,name:w,intro:m,options:p,isTriggered:g,showCardInfo:f,hideCardInfo:v,result:h,isShowingResult:k,showResult:W,hideResult:y}}});var k=t(151),W=t(2165),y=t(5589),x=t(7704),q=t(5869),_=t(7518),Z=t.n(_);h.render=v,h.__scopeId="data-v-7a1b6343";const F=h;Z()(h,"components",{QCard:k.Z,QBtn:W.Z,QCardSection:y.Z,QScrollArea:x.Z,QSeparator:q.Z})},17:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>Ce});var o=t(3673);const r=(0,o.Uk)(" Crossroads ");function a(e,l,t,a,n,s){const i=(0,o.up)("q-toolbar-title"),c=(0,o.up)("q-toolbar"),u=(0,o.up)("q-header"),d=(0,o.up)("drawer-menu"),w=(0,o.up)("footer-controls"),m=(0,o.up)("router-view"),p=(0,o.up)("q-page-container"),g=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(g,{view:"lHh Lpr lFr"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"mobile-only bg-header-footer"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"text-center"},{default:(0,o.w5)((()=>[r])),_:1})])),_:1})])),_:1}),(0,o.Wm)(d,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[1]||(l[1]=l=>e.leftDrawerOpen=l)},null,8,["modelValue"]),(0,o.Wm)(w,{onOpenMenu:e.toggleLeftDrawer},null,8,["onOpenMenu"]),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m)])),_:1})])),_:1})}var n=t(1959);const s={class:"row justify-center q-pa-sm"};function i(e,l,t,r,a,n){const i=(0,o.up)("sign-in-with-google"),c=(0,o.up)("user-card"),u=(0,o.up)("drawer-menu-item"),d=(0,o.up)("q-separator"),w=(0,o.up)("q-list"),m=(0,o.up)("q-drawer"),p=(0,o.up)("drawer-filter"),g=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)("div",null,[(0,o.Wm)(m,(0,o.dG)(e.$attrs,{class:"bg-drawer column justify-between no-wrap",side:"right",dark:""}),{default:(0,o.w5)((()=>[(0,o.Wm)("div",s,[e.isUserLoggedIn?((0,o.wg)(),(0,o.j4)(c,{key:1})):((0,o.wg)(),(0,o.j4)(i,{key:0}))]),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(u,{label:"Shuffle",icon:"shuffle",onClick:e.shuffleCrossroads},null,8,["onClick"]),[[g]]),(0,o.Wm)(u,{label:"Filter",icon:"filter_alt",onClick:e.showDrawerFilter},null,8,["onClick"]),(0,o.Wm)(d,{dark:""}),(0,o.Wm)(u,{label:"Close",icon:"close",onClick:e.hideDrawer},null,8,["onClick"])])),_:1})])),_:1},16),(0,o.Wm)(p,{modelValue:e.filtersVisible,"onUpdate:modelValue":l[1]||(l[1]=l=>e.filtersVisible=l)},null,8,["modelValue"])])}var c=t(7874);const u={class:"column overflow-hidden"},d={class:"close-ctn row justify-center"};function w(e,l,t,r,a,n){const s=(0,o.up)("filter-table"),i=(0,o.up)("q-scroll-area"),c=(0,o.up)("q-btn"),w=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(w,(0,o.dG)(e.$attrs,{class:"drawer-filter",position:"bottom",maximized:"",persistent:""}),{default:(0,o.w5)((()=>[(0,o.Wm)("div",u,[(0,o.Wm)(i,{class:"col-grow"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{category:"Basic",rows:e.basicCards,basic:""},null,8,["rows"]),(0,o.Wm)(s,{category:"Character Exclusive",rows:e.characterCards},null,8,["rows"]),(0,o.Wm)(s,{category:"Traitor",rows:e.traitorCards},null,8,["rows"]),(0,o.Wm)(s,{category:"Explicit",rows:e.explicitCards},null,8,["rows"]),(0,o.Wm)(s,{category:"Raxxon",rows:e.raxxonCards},null,8,["rows"]),(0,o.Wm)(s,{category:"Bandits",rows:e.banditsCards},null,8,["rows"])])),_:1}),(0,o.Wm)("div",d,[(0,o.Wm)(c,{class:"full-width",color:"white",icon:"close",dark:"",flat:"",onClick:e.hideDrawerFilter},null,8,["onClick"])])])])),_:1},16)}t(71);var m=t(2323);const p=(0,o.HX)("data-v-14eeaf00");(0,o.dD)("data-v-14eeaf00");const g={class:"filter-table"},f={class:"text-uppercase"},v={class:"preview-ctn absolute overflow-hidden"};(0,o.Cn)();const b=p(((e,l,t,r,a,n)=>{const s=(0,o.up)("q-icon"),i=(0,o.up)("q-checkbox"),c=(0,o.up)("q-btn"),u=(0,o.up)("q-td"),d=(0,o.up)("q-table"),w=(0,o.up)("crossroads-card"),b=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)("div",g,[(0,o.Wm)("div",{class:["row","justify-between","cursor-pointer","bg-negative","text-white","q-pa-sm"],onClick:l[1]||(l[1]=(...l)=>e.toggleTableVisible&&e.toggleTableVisible(...l))},[(0,o.Wm)("div",f,(0,m.zw)(e.category)+" ( "+(0,m.zw)(e.cardsAdded)+" / "+(0,m.zw)(e.rowCount)+" )",1),(0,o.Wm)(s,{name:"expand_more",size:"xs",class:["icon-dropdown",{"rotate-180":e.tableVisible}]},null,8,["class"])]),e.tableVisible?((0,o.wg)(),(0,o.j4)(d,(0,o.dG)({key:0},e.$attrs,{columns:e.columns,pagination:e.pagination,selection:"multiple",dark:"",flat:"","hide-pagination":"","virtual-scroll":""}),{"header-selection":p((()=>[(0,o.Wm)(i,{"model-value":e.areAllInFilter,color:"negative",dark:"","onUpdate:modelValue":e.toggleFilterAll},null,8,["model-value","onUpdate:modelValue"])])),"body-selection":p((l=>[(0,o.Wm)(i,{"model-value":e.isInFilter(l.row.key),color:"negative",disable:e.disableFilter(l.row.key),dark:"","onUpdate:modelValue":t=>e.toggleFilter(t,l.row.key)},null,8,["model-value","disable","onUpdate:modelValue"])])),"body-cell-preview":p((l=>[(0,o.Wm)(u,{props:l},{default:p((()=>[(0,o.Wm)(c,{color:"info",icon:"open_in_new","text-color":"negative",glossy:"",round:"",onClick:t=>e.previewCard(l.row)},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},16,["columns","pagination"])):(0,o.kq)("",!0),(0,o.Wm)(b,{modelValue:e.previewVisible,"onUpdate:modelValue":l[2]||(l[2]=l=>e.previewVisible=l),onHide:e.clearCardToPreview},{default:p((()=>[(0,o.Wm)("div",v,[(0,o.Wm)(w,{info:e.cardToPreview,preview:"",onClosePreview:e.closePreview},null,8,["info","onClosePreview"])])])),_:1},8,["modelValue","onHide"])])}));var C=t(3562);const h=[{name:"name",label:"Name",field:"name",align:"center"},{name:"preview",label:"Preview",field:"name",align:"center"}],k=(0,o.aZ)({props:{category:{type:String,required:!0},basic:{type:Boolean,default:!1}},components:{CrossroadsCard:C.Z},setup(e,{attrs:l}){const t=(0,c.oR)(),r=(0,n.iH)(!1),a=()=>{r.value=!r.value},s=(0,o.Fl)((()=>l.rows.length)),i=(0,o.Fl)((()=>{let e=0;for(let t of l.rows)w(t.key)&&e++;return e})),u=(0,n.iH)({sortBy:"name",descending:!1,rowsPerPage:0}),d=(0,o.Fl)((()=>t.getters.getFilter)),w=e=>d.value.includes(e),m=(e,l)=>t.dispatch("toggleFilter",{value:e,key:l}),p=(0,o.Fl)((()=>s.value===i.value||0!==i.value&&null)),g=l=>e.basic&&1===i.value&&w(l),f=t=>{for(let o=0;o<l.rows.length;o++)o||!e.basic||t?m(t,l.rows[o].key):m(!0,l.rows[o].key)},v=(0,n.iH)(!1),b=(0,n.iH)({}),C=e=>{b.value=e,v.value=!0},k=()=>b.value={},W=()=>v.value=!1;return{columns:h,tableVisible:r,toggleTableVisible:a,rowCount:s,cardsAdded:i,pagination:u,filter:d,isInFilter:w,toggleFilter:m,areAllInFilter:p,disableFilter:g,toggleFilterAll:f,previewVisible:v,cardToPreview:b,previewCard:C,clearCardToPreview:k,closePreview:W}}});var W=t(4554),y=t(8433),x=t(1420),q=t(3884),_=t(2165),Z=t(6778),F=t(7518),Q=t.n(F);k.render=b,k.__scopeId="data-v-14eeaf00";const j=k;Q()(k,"components",{QIcon:W.Z,QTable:y.Z,QCheckbox:x.Z,QTd:q.Z,QBtn:_.Z,QDialog:Z.Z});const V=(0,o.aZ)({components:{FilterTable:j},setup(e,{emit:l}){const t=(0,c.oR)(),r=(0,o.Fl)((()=>Object.values(t.getters.getCards))),a=(0,o.Fl)((()=>r.value.filter((e=>e.basic)))),n=(0,o.Fl)((()=>r.value.filter((e=>e.character)))),s=(0,o.Fl)((()=>r.value.filter((e=>e.traitor)))),i=(0,o.Fl)((()=>r.value.filter((e=>e.explicit)))),u=(0,o.Fl)((()=>r.value.filter((e=>e.raxxon)))),d=(0,o.Fl)((()=>r.value.filter((e=>e.bandits)))),w=()=>l("update:modelValue",!1);return{basicCards:a,characterCards:n,traitorCards:s,explicitCards:i,raxxonCards:u,banditsCards:d,hideDrawerFilter:w}}});var I=t(7704);V.render=w;const z=V;function B(e,l,t,r,a,n){const s=(0,o.up)("q-icon"),i=(0,o.up)("q-item-section"),c=(0,o.up)("q-item-label"),u=(0,o.up)("q-item");return(0,o.wg)(),(0,o.j4)(u,(0,o.dG)(e.$attrs,{clickable:""}),{default:(0,o.w5)((()=>[(0,o.Wm)(i,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:e.icon},null,8,["name"])])),_:1}),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(e.label),1)])),_:1})])),_:1})])),_:1},16)}Q()(V,"components",{QDialog:Z.Z,QScrollArea:I.Z,QBtn:_.Z});const D=(0,o.aZ)({props:{label:{type:String},icon:{type:String}}});var P=t(3414),T=t(2035),U=t(2350);D.render=B;const H=D;Q()(D,"components",{QItem:P.Z,QItemSection:T.Z,QIcon:W.Z,QItemLabel:U.Z});const L={class:"row items-center q-gutter-x-sm"},S=(0,o.Wm)("div",null,"Sign In With Google",-1);function R(e,l,t,r,a,n){const s=(0,o.up)("q-icon"),i=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(i,{color:"white","text-color":"black",onClick:e.login},{default:(0,o.w5)((()=>[(0,o.Wm)("div",L,[S,(0,o.Wm)(s,{name:"img:icons/google.svg"})])])),_:1},8,["onClick"])}const N=(0,o.aZ)({setup(){const e=(0,c.oR)();function l(){e.dispatch("userLogin")}return{login:l}}});N.render=R;const M=N;Q()(N,"components",{QBtn:_.Z,QIcon:W.Z});const O=(0,o.Uk)("Settings"),A=(0,o.Uk)("Logout");function G(e,l,t,r,a,n){const s=(0,o.up)("q-item-label"),i=(0,o.up)("q-item-section"),c=(0,o.up)("q-item"),u=(0,o.up)("q-list"),d=(0,o.up)("q-btn-dropdown"),w=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(w,{class:"bg-drawer",flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{label:e.currentUser.email,class:"full-width","dropdown-icon":"expand_more","auto-close":"",flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"bg-drawer text-white no-shadow",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"text-center"},{default:(0,o.w5)((()=>[O])),_:1})])),_:1})])),_:1}),(0,o.Wm)(c,{clickable:"",onClick:e.userLogout},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"text-center"},{default:(0,o.w5)((()=>[A])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1},8,["label"])])),_:1})}const $=(0,o.aZ)({setup(){const e=(0,c.oR)(),l=(0,o.Fl)((()=>e.getters.getCurrentUser)),t=()=>e.dispatch("userLogout");return{currentUser:l,userLogout:t}}});var E=t(151),X=t(2670),K=t(7011);$.render=G;const Y=$;Q()($,"components",{QCard:E.Z,QBtnDropdown:X.Z,QList:K.Z,QItem:P.Z,QItemSection:T.Z,QItemLabel:U.Z});const J=(0,o.aZ)({components:{DrawerMenuItem:H,UserCard:Y,DrawerFilter:z,SignInWithGoogle:M},setup(e,{emit:l}){const t=()=>l("update:modelValue",!1),r=(0,c.oR)(),a=(0,o.Fl)((()=>r.getters.isUserLoggedIn)),s=()=>{r.dispatch("shuffleCrossroads"),t()},i=(0,n.iH)(!1),u=()=>{i.value=!0};return{hideDrawer:t,isUserLoggedIn:a,shuffleCrossroads:s,filtersVisible:i,showDrawerFilter:u}}});var ee=t(2901),le=t(5869),te=t(677);J.render=i;const oe=J;Q()(J,"components",{QDrawer:ee.Z,QList:K.Z,QSeparator:le.Z}),Q()(J,"directives",{ClosePopup:te.Z});const re={class:"col-4"},ae=(0,o.Uk)(" Crossroads "),ne={class:"col-4 row justify-center items-center no-wrap"},se={class:"q-px-md text-no-wrap"},ie={class:"col-4 row justify-end"};function ce(e,l,t,r,a,n){const s=(0,o.up)("q-toolbar-title"),i=(0,o.up)("q-btn"),c=(0,o.up)("q-toolbar"),u=(0,o.up)("q-footer");return(0,o.wg)(),(0,o.j4)(u,{class:"bg-header-footer"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)("div",re,[(0,o.Wm)(s,{class:"mobile-hide"},{default:(0,o.w5)((()=>[ae])),_:1})]),(0,o.Wm)("div",ne,[(0,o.Wm)(i,{icon:e.disablePrevButton?"pan_tool":"chevron_left",flat:"",round:"",disable:e.disablePrevButton,onClick:e.showPrevCard},null,8,["icon","disable","onClick"]),(0,o.Wm)("div",se,(0,m.zw)(e.counter+1)+" / "+(0,m.zw)(e.cardMax),1),(0,o.Wm)(i,{icon:e.disableNextButton?"pan_tool":"chevron_right",flat:"",round:"",disable:e.disableNextButton,onClick:e.showNextCard},null,8,["icon","disable","onClick"])]),(0,o.Wm)("div",ie,[(0,o.Wm)(i,{flat:"",dense:"",round:"",icon:"settings","aria-label":"Settings",onClick:e.emitOpenMenu},null,8,["onClick"])])])),_:1})])),_:1})}const ue=(0,o.aZ)({name:"FooterControls",setup(e,{emit:l}){const t=(0,c.oR)(),r=(0,o.Fl)((()=>t.getters.getFilteredCards.length)),a=(0,o.Fl)((()=>t.getters.getCounter)),n=(0,o.Fl)((()=>a.value<1)),s=()=>t.dispatch("showPrevCard"),i=(0,o.Fl)((()=>a.value>=r.value-1)),u=()=>t.dispatch("showNextCard"),d=()=>{l("openMenu")};return{cardMax:r,counter:a,disablePrevButton:n,showPrevCard:s,disableNextButton:i,showNextCard:u,emitOpenMenu:d}}});var de=t(1762),we=t(9570),me=t(3747);ue.render=ce;const pe=ue;Q()(ue,"components",{QFooter:de.Z,QToolbar:we.Z,QToolbarTitle:me.Z,QBtn:_.Z});const ge=(0,o.aZ)({name:"MainLayout",components:{DrawerMenu:oe,FooterControls:pe},setup(){const e=(0,n.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var fe=t(9214),ve=t(3812),be=t(2652);ge.render=a;const Ce=ge;Q()(ge,"components",{QLayout:fe.Z,QHeader:ve.Z,QToolbar:we.Z,QToolbarTitle:me.Z,QPageContainer:be.Z})}}]);