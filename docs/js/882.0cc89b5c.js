(self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[]).push([[882],{882:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>Ze});var l=o(3673);const a=(0,l.Uk)(" Crossroads ");function s(e,r,o,s,t,n){const u=(0,l.up)("q-toolbar-title"),i=(0,l.up)("q-toolbar"),d=(0,l.up)("q-header"),m=(0,l.up)("drawer-menu"),c=(0,l.up)("footer-controls"),p=(0,l.up)("router-view"),g=(0,l.up)("q-page-container"),w=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(w,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"mobile-only bg-header-footer"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-center"},{default:(0,l.w5)((()=>[a])),_:1})])),_:1})])),_:1}),(0,l.Wm)(m,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[1]||(r[1]=r=>e.leftDrawerOpen=r),bordered:"",dark:"",class:"text-white"},null,8,["modelValue"]),(0,l.Wm)(c,{onOpenMenu:e.toggleLeftDrawer},null,8,["onOpenMenu"]),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p)])),_:1})])),_:1})}var t=o(1959);function n(e,r,o,a,s,t){const n=(0,l.up)("login-register"),u=(0,l.up)("user-card"),i=(0,l.up)("drawer-menu-item"),d=(0,l.up)("q-list"),m=(0,l.up)("q-drawer"),c=(0,l.up)("drawer-filter"),p=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)("div",null,[(0,l.Wm)(m,(0,l.dG)(e.$attrs,{class:"bg-drawer column justify-between no-wrap",side:"right"}),{default:(0,l.w5)((()=>[e.isUserLoggedIn?((0,l.wg)(),(0,l.j4)(u,{key:1})):((0,l.wg)(),(0,l.j4)(n,{key:0})),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(i,{label:"Shuffle",icon:"shuffle",onClick:e.shuffleCrossroads},null,8,["onClick"]),[[p]]),(0,l.Wm)(i,{label:"Filter",icon:"filter_alt",onClick:e.showDrawerFilter},null,8,["onClick"])])),_:1})])),_:1},16),(0,l.Wm)(c,{modelValue:e.filtersVisible,"onUpdate:modelValue":r[1]||(r[1]=r=>e.filtersVisible=r)},null,8,["modelValue"])])}var u=o(7874);const i={class:"full-width row"},d={class:"col-grow"},m={class:"column justify-end"};function c(e,r,o,a,s,t){const n=(0,l.up)("q-table"),u=(0,l.up)("q-btn"),c=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(c,(0,l.dG)(e.$attrs,{class:"drawer-filter",position:"right",maximized:"",persistent:""}),{default:(0,l.w5)((()=>[(0,l.Wm)("div",i,[(0,l.Wm)("div",d,[(0,l.Wm)(n,{rows:e.cards,columns:e.columns,class:"bg-drawer",dark:""},null,8,["rows","columns"])]),(0,l.Wm)("div",m,[(0,l.Wm)(u,{color:"white",icon:"close",size:"1em",dark:"",flat:"",round:"",onClick:e.hideDrawerFilter},null,8,["onClick"])])])])),_:1},16)}const p=[{name:"name",label:"Name",field:"name",align:"center"},{name:"preview",label:"Preview",field:"name"}],g=(0,l.aZ)({setup(e,{emit:r}){const o=(0,u.oR)(),a=(0,l.Fl)((()=>o.getters.getFilteredCards)),s=()=>r("update:modelValue",!1);return{cards:a,columns:p,hideDrawerFilter:s}}});var w=o(6778),f=o(6536),v=o(2165),b=o(7518),$=o.n(b);g.render=c;const W=g;$()(g,"components",{QDialog:w.Z,QTable:f.Z,QBtn:v.Z});var h=o(2323);function C(e,r,o,a,s,t){const n=(0,l.up)("q-icon"),u=(0,l.up)("q-item-section"),i=(0,l.up)("q-item-label"),d=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(d,(0,l.dG)(e.$attrs,{clickable:""}),{default:(0,l.w5)((()=>[(0,l.Wm)(u,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{name:e.icon},null,8,["name"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,h.zw)(e.label),1)])),_:1})])),_:1})])),_:1},16)}const I=(0,l.aZ)({props:{label:{type:String},icon:{type:String}}});var Z=o(3414),_=o(2035),q=o(4554),k=o(2350);I.render=C;const V=I;$()(I,"components",{QItem:Z.Z,QItemSection:_.Z,QIcon:q.Z,QItemLabel:k.Z});const Q={class:"row justify-end"},y={class:"row justify-end"};function U(e,r,o,a,s,t){const n=(0,l.up)("q-tab"),u=(0,l.up)("q-tabs"),i=(0,l.up)("base-input"),d=(0,l.up)("q-btn"),m=(0,l.up)("q-tab-panel"),c=(0,l.up)("q-tab-panels"),p=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(p,{class:"bg-drawer",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{modelValue:e.tab,"onUpdate:modelValue":r[1]||(r[1]=r=>e.tab=r),class:"col-grow"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{name:"login",label:"Login"}),(0,l.Wm)(n,{name:"register",label:"Register"})])),_:1},8,["modelValue"]),e.isClosed?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(c,{key:0,modelValue:e.tab,"onUpdate:modelValue":r[8]||(r[8]=r=>e.tab=r),animated:"",class:"bg-drawer"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"login",class:"q-gutter-y-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{modelValue:e.v$.loginInfo.email.$model,"onUpdate:modelValue":r[2]||(r[2]=r=>e.v$.loginInfo.email.$model=r),error:e.v$.loginInfo.email.$error,"error-message":e.getErrorMessage(e.v$.loginInfo.email.$errors),label:"Email"},null,8,["modelValue","error","error-message"]),(0,l.Wm)(i,{modelValue:e.v$.loginInfo.password.$model,"onUpdate:modelValue":r[3]||(r[3]=r=>e.v$.loginInfo.password.$model=r),error:e.v$.loginInfo.password.$error,"error-message":e.getErrorMessage(e.v$.loginInfo.password.$errors),label:"Password",type:"password"},null,8,["modelValue","error","error-message"]),(0,l.Wm)("div",Q,[(0,l.Wm)(d,{color:"red-10",icon:"arrow_forward",size:"1em",flat:"",onClick:e.userLogin},null,8,["onClick"])])])),_:1}),(0,l.Wm)(m,{name:"register",class:"q-gutter-y-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{modelValue:e.v$.registerInfo.email.$model,"onUpdate:modelValue":r[4]||(r[4]=r=>e.v$.registerInfo.email.$model=r),error:e.v$.registerInfo.email.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.email.$errors),label:"Email"},null,8,["modelValue","error","error-message"]),(0,l.Wm)(i,{modelValue:e.v$.registerInfo.username.$model,"onUpdate:modelValue":r[5]||(r[5]=r=>e.v$.registerInfo.username.$model=r),modelModifiers:{lazy:!0},error:e.v$.registerInfo.username.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.username.$errors),label:"Username"},null,8,["modelValue","error","error-message"]),(0,l.Wm)(i,{modelValue:e.v$.registerInfo.password.$model,"onUpdate:modelValue":r[6]||(r[6]=r=>e.v$.registerInfo.password.$model=r),error:e.v$.registerInfo.password.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.password.$errors),label:"Password",type:"password"},null,8,["modelValue","error","error-message"]),(0,l.Wm)(i,{modelValue:e.registerInfo.confirm,"onUpdate:modelValue":r[7]||(r[7]=r=>e.registerInfo.confirm=r),rules:[r=>e.passwordsMatch||"Passwords don't match"],label:"Confirm Password",type:"password"},null,8,["modelValue","rules"]),(0,l.Wm)("div",y,[(0,l.Wm)(d,{color:"red-10",icon:"arrow_forward",size:"1em",flat:"",onClick:e.userRegister},null,8,["onClick"])])])),_:1})])),_:1},8,["modelValue"]))])),_:1})}var F=o(7191),L=o(515),M=o.n(L),j=(o(7280),o(8308));const x=e=>e.length?e[0].$message:"",P=M()(M()({},j.C1),{},{$message:"Field is required"}),D=M()(M()({},j.Do),{},{$message:"Invalid email"}),R={$message:"4-16 characters. Valid: a-z A-Z 0-9 _",$params:{type:"username"},$validator:e=>{const r=/^[a-zA-Z0-9_]{4,16}$/g;return e.match(r)}},z={$message:"6-16 characters. Valid: a-z A-Z 0-9 _ ! @ # $ % ^ & *",$params:{type:"password"},$validator:e=>{const r=/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/g;return e.match(r)}};function B(e,r,o,a,s,t){const n=(0,l.up)("q-input");return(0,l.wg)(),(0,l.j4)(n,(0,l.dG)(e.$attrs,{color:"yellow-14",dark:"",dense:"","hide-bottom-space":"",outlined:""}),null,16)}const T=(0,l.aZ)({setup(e){return{}}});var E=o(4842);T.render=B;const H=T;$()(T,"components",{QInput:E.Z});const N=(0,l.aZ)({components:{BaseInput:H},setup(){const e=(0,t.iH)("login"),r=(0,l.Fl)((()=>""===e.value)),o=()=>{e.value=""},a=(0,t.iH)({email:"",password:""}),s=(0,t.iH)({email:"",username:"",password:"",confirm:""}),n=(0,l.Fl)((()=>s.value.password===s.value.confirm)),i=(0,u.oR)(),d={loginInfo:{email:{vRequired:P,vEmail:D},password:{vRequired:P,vPassword:z}},registerInfo:{email:{vRequired:P,vEmail:D},username:{vRequired:P,vUsername:R},password:{vRequired:P,vPassword:z}}},m=(0,F.Xw)(d,{loginInfo:a,registerInfo:s}),c=()=>{m.value.loginInfo.$touch(),m.value.loginInfo.$invalid||i.dispatch("userLogin",a.value)},p=()=>{m.value.registerInfo.$touch(),!m.value.registerInfo.$invalid&&n&&i.dispatch("userRegister",s.value)};return{v$:m,getErrorMessage:x,tab:e,isClosed:r,registerInfo:s,passwordsMatch:n,closeLoginRegister:o,userLogin:c,userRegister:p}}});var O=o(151),S=o(7547),A=o(3269),G=o(5906),X=o(6602);N.render=U;const J=N;$()(N,"components",{QCard:O.Z,QTabs:S.Z,QTab:A.Z,QTabPanels:G.Z,QTabPanel:X.Z,QBtn:v.Z});const K=(0,l.Uk)("Settings"),Y=(0,l.Uk)("Logout");function ee(e,r,o,a,s,t){const n=(0,l.up)("q-item-label"),u=(0,l.up)("q-item-section"),i=(0,l.up)("q-item"),d=(0,l.up)("q-list"),m=(0,l.up)("q-btn-dropdown"),c=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(c,{class:"bg-drawer",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{label:e.currentUser.username,class:"full-width",icon:"account_circle","dropdown-icon":"expand_more","auto-close":"",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"bg-drawer text-white no-shadow",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{class:"text-center"},{default:(0,l.w5)((()=>[K])),_:1})])),_:1})])),_:1}),(0,l.Wm)(i,{clickable:"",onClick:e.userLogout},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{class:"text-center"},{default:(0,l.w5)((()=>[Y])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1},8,["label"])])),_:1})}const re=(0,l.aZ)({setup(){const e=(0,u.oR)(),r=(0,l.Fl)((()=>e.getters.getCurrentUser)),o=()=>e.dispatch("userLogout");return{currentUser:r,userLogout:o}}});var oe=o(2670),le=o(7011);re.render=ee;const ae=re;$()(re,"components",{QCard:O.Z,QBtnDropdown:oe.Z,QList:le.Z,QItem:Z.Z,QItemSection:_.Z,QItemLabel:k.Z});const se=(0,l.aZ)({components:{DrawerMenuItem:V,LoginRegister:J,UserCard:ae,DrawerFilter:W},setup(e,{emit:r}){const o=(0,u.oR)(),a=(0,l.Fl)((()=>o.getters.isUserLoggedIn)),s=()=>{o.dispatch("shuffleCrossroads"),r("update:modelValue",!1)},n=(0,t.iH)(!1),i=()=>{n.value=!0};return{isUserLoggedIn:a,shuffleCrossroads:s,filtersVisible:n,showDrawerFilter:i}}});var te=o(2901),ne=o(677);se.render=n;const ue=se;$()(se,"components",{QDrawer:te.Z,QList:le.Z}),$()(se,"directives",{ClosePopup:ne.Z});const ie={class:"col-4"},de=(0,l.Uk)(" Crossroads "),me={class:"col-4 row justify-center items-center no-wrap"},ce={class:"q-px-md text-no-wrap"},pe={class:"col-4 row justify-end"};function ge(e,r,o,a,s,t){const n=(0,l.up)("q-toolbar-title"),u=(0,l.up)("q-btn"),i=(0,l.up)("q-toolbar"),d=(0,l.up)("q-footer");return(0,l.wg)(),(0,l.j4)(d,{class:"bg-header-footer"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)("div",ie,[(0,l.Wm)(n,{class:"mobile-hide"},{default:(0,l.w5)((()=>[de])),_:1})]),(0,l.Wm)("div",me,[(0,l.Wm)(u,{icon:e.disablePrevButton?"pan_tool":"chevron_left",flat:"",round:"",disable:e.disablePrevButton,onClick:e.showPrevCard},null,8,["icon","disable","onClick"]),(0,l.Wm)("div",ce,(0,h.zw)(e.counter+1)+" / "+(0,h.zw)(e.cardMax),1),(0,l.Wm)(u,{icon:e.disableNextButton?"pan_tool":"chevron_right",flat:"",round:"",disable:e.disableNextButton,onClick:e.showNextCard},null,8,["icon","disable","onClick"])]),(0,l.Wm)("div",pe,[(0,l.Wm)(u,{flat:"",dense:"",round:"",icon:"settings","aria-label":"Settings",onClick:e.emitOpenMenu},null,8,["onClick"])])])),_:1})])),_:1})}const we=(0,l.aZ)({name:"FooterControls",setup(e,{emit:r}){const o=(0,u.oR)(),a=(0,l.Fl)((()=>o.getters.getFilteredCards.length)),s=(0,l.Fl)((()=>o.getters.getCounter)),t=(0,l.Fl)((()=>s.value<1)),n=()=>o.dispatch("showPrevCard"),i=(0,l.Fl)((()=>s.value>=a.value-1)),d=()=>o.dispatch("showNextCard"),m=()=>{r("openMenu")};return{cardMax:a,counter:s,disablePrevButton:t,showPrevCard:n,disableNextButton:i,showNextCard:d,emitOpenMenu:m}}});var fe=o(1762),ve=o(9570),be=o(3747);we.render=ge;const $e=we;$()(we,"components",{QFooter:fe.Z,QToolbar:ve.Z,QToolbarTitle:be.Z,QBtn:v.Z});const We=(0,l.aZ)({name:"MainLayout",components:{DrawerMenu:ue,FooterControls:$e},setup(){const e=(0,t.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var he=o(9214),Ce=o(3812),Ie=o(2652);We.render=s;const Ze=We;$()(We,"components",{QLayout:he.Z,QHeader:Ce.Z,QToolbar:ve.Z,QToolbarTitle:be.Z,QPageContainer:Ie.Z})}}]);