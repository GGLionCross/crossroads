(self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[]).push([[407],{4407:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>oe});var a=o(3673);function l(e,r,o,l,s,n){const t=(0,a.up)("drawer-menu"),d=(0,a.up)("footer-controls"),i=(0,a.up)("router-view"),u=(0,a.up)("q-page-container"),m=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(m,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[1]||(r[1]=r=>e.leftDrawerOpen=r),bordered:"",dark:"",class:"text-white"},null,8,["modelValue"]),(0,a.Wm)(d,{onOpenMenu:e.toggleLeftDrawer},null,8,["onOpenMenu"]),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1})])),_:1})}var s=o(1959);function n(e,r,o,l,s,n){const t=(0,a.up)("login-register"),d=(0,a.up)("drawer-menu-item"),i=(0,a.up)("q-list"),u=(0,a.up)("q-drawer");return(0,a.wg)(),(0,a.j4)(u,(0,a.dG)(e.$attrs,{class:"bg-drawer column justify-between no-wrap"}),{default:(0,a.w5)((()=>[(0,a.Wm)(t),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:"Reset",icon:"loop",onClick:e.resetCrossroads},null,8,["onClick"]),(0,a.Wm)(d,{label:"Filter",icon:"filter_alt"})])),_:1})])),_:1},16)}var t=o(7874),d=o(2323);function i(e,r,o,l,s,n){const t=(0,a.up)("q-icon"),i=(0,a.up)("q-item-section"),u=(0,a.up)("q-item-label"),m=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(m,(0,a.dG)(e.$attrs,{clickable:""}),{default:(0,a.w5)((()=>[(0,a.Wm)(i,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{name:e.icon},null,8,["name"])])),_:1}),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,d.zw)(e.label),1)])),_:1})])),_:1})])),_:1},16)}const u=(0,a.aZ)({props:{label:{type:String},icon:{type:String}}});var m=o(3414),c=o(2035),g=o(4554),p=o(2350),w=o(7518),f=o.n(w);u.render=i;const v=u;f()(u,"components",{QItem:m.Z,QItemSection:c.Z,QIcon:g.Z,QItemLabel:p.Z});var $=o(8880);const b={class:"row"},C={class:"row justify-end"},I={class:"row justify-end"};function W(e,r,o,l,s,n){const t=(0,a.up)("q-tab"),d=(0,a.up)("q-tabs"),i=(0,a.up)("q-btn"),u=(0,a.up)("q-input"),m=(0,a.up)("q-tab-panel"),c=(0,a.up)("q-tab-panels"),g=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(g,{class:"bg-drawer overflow-hidden",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)("div",b,[(0,a.Wm)(d,{modelValue:e.tab,"onUpdate:modelValue":r[1]||(r[1]=r=>e.tab=r),class:"col-grow"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{name:"login",label:"Login"}),(0,a.Wm)(t,{name:"register",label:"Register"})])),_:1},8,["modelValue"]),(0,a.Wm)($.uT,{appear:"","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},{default:(0,a.w5)((()=>[e.isClosed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(i,{key:0,icon:"close",flat:"",onClick:e.closeLoginRegister},null,8,["onClick"]))])),_:1})]),(0,a.Wm)($.uT,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:(0,a.w5)((()=>[e.isClosed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(c,{key:0,modelValue:e.tab,"onUpdate:modelValue":r[7]||(r[7]=r=>e.tab=r),animated:"",class:"bg-drawer"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{name:"login",class:"q-gutter-y-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:e.v$.loginInfo.username.$model,"onUpdate:modelValue":r[2]||(r[2]=r=>e.v$.loginInfo.username.$model=r),error:e.v$.loginInfo.username.$error,"error-message":e.getErrorMessage(e.v$.loginInfo.username.$errors),label:"Username",color:"yellow-14",dark:"",dense:"","hide-bottom-space":"",outlined:""},null,8,["modelValue","error","error-message"]),(0,a.Wm)(u,{modelValue:e.v$.loginInfo.password.$model,"onUpdate:modelValue":r[3]||(r[3]=r=>e.v$.loginInfo.password.$model=r),error:e.v$.loginInfo.password.$error,"error-message":e.getErrorMessage(e.v$.loginInfo.password.$errors),label:"Password",color:"yellow-14",dark:"",dense:"","hide-bottom-space":"",outlined:""},null,8,["modelValue","error","error-message"]),(0,a.Wm)("div",C,[(0,a.Wm)(i,{color:"red-10",icon:"arrow_forward",size:"1em",flat:""})])])),_:1}),(0,a.Wm)(m,{name:"register",class:"q-gutter-y-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:e.v$.registerInfo.username.$model,"onUpdate:modelValue":r[4]||(r[4]=r=>e.v$.registerInfo.username.$model=r),error:e.v$.registerInfo.username.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.username.$errors),label:"Username",color:"yellow-14",dark:"",dense:"","hide-bottom-space":"",outlined:""},null,8,["modelValue","error","error-message"]),(0,a.Wm)(u,{modelValue:e.v$.registerInfo.password.$model,"onUpdate:modelValue":r[5]||(r[5]=r=>e.v$.registerInfo.password.$model=r),error:e.v$.registerInfo.password.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.password.$errors),label:"Password",color:"yellow-14",dark:"",dense:"","hide-bottom-space":"",outlined:""},null,8,["modelValue","error","error-message"]),(0,a.Wm)(u,{modelValue:e.v$.registerInfo.confirm.$model,"onUpdate:modelValue":r[6]||(r[6]=r=>e.v$.registerInfo.confirm.$model=r),error:e.v$.registerInfo.confirm.$error,"error-message":e.getErrorMessage(e.v$.registerInfo.confirm.$errors),label:"Confirm Password",color:"yellow-14",dark:"",dense:"","hide-bottom-space":"",outlined:""},null,8,["modelValue","error","error-message"]),(0,a.Wm)("div",I,[(0,a.Wm)(i,{color:"red-10",icon:"arrow_forward",size:"1em",flat:"",onClick:e.registerUser},null,8,["onClick"])])])),_:1})])),_:1},8,["modelValue"]))])),_:1})])),_:1})}var h=o(7191),k=o(515),q=o.n(k),_=(o(7280),o(8308));const Z=e=>e.length?e[0].$message:"",V=q()(q()({},_.C1),{},{$message:"Field is required"}),y={$message:"4-16 characters. Valid: a-z A-Z 0-9 _",$params:{type:"username"},$validator:e=>{const r=/^[a-zA-Z0-9_]{4,16}$/g;return e.match(r)}},Q={$message:"8-16 characters. Valid: a-z A-Z 0-9 _ ! @ # $ % ^ & *",$params:{type:"password"},$validator:e=>{const r=/^[a-zA-Z0-9_!@#$%^&*]{8,16}$/g;return e.match(r)}},U=e=>({vConfirm:_.BM.withParams({type:"confirm",confirm:e},(0,_.sH)(e))}),M=(0,a.aZ)({setup(){const e=(0,s.iH)(""),r=(0,a.Fl)((()=>""===e.value)),o=()=>{e.value=""},l=(0,s.iH)({username:"",password:""}),n=(0,s.iH)({username:"",password:"",confirm:""}),d=(0,t.oR)(),i={loginInfo:{username:{vRequired:V,vUsername:y},password:{vRequired:V,vPassword:Q}},registerInfo:{username:{vRequired:V,vUsername:y},password:{vRequired:V,vPassword:Q},confirm:U(n.value.password)}},u=(0,h.Xw)(i,{loginInfo:l,registerInfo:n}),m=()=>{},c=()=>{u.value.registerInfo.$touch(),u.value.registerInfo.$invalid||d.dispatch("registerUser")};return console.error("v$:",u.value),{v$:u,getErrorMessage:Z,tab:e,isClosed:r,loginInfo:l,registerInfo:n,closeLoginRegister:o,loginUser:m,registerUser:c}}});var P=o(151),R=o(9011),F=o(3269),L=o(4607),j=o(5906),x=o(6602),z=o(6112);M.render=W;const B=M;f()(M,"components",{QCard:P.Z,QTabs:R.Z,QTab:F.Z,QBtn:L.Z,QTabPanels:j.Z,QTabPanel:x.Z,QInput:z.Z});const O=(0,a.aZ)({components:{DrawerMenuItem:v,LoginRegister:B},setup(){const e=(0,t.oR)();return{resetCrossroads:()=>e.dispatch("resetCrossroads")}}});var T=o(3304),D=o(7011);O.render=n;const E=O;f()(O,"components",{QDrawer:T.Z,QList:D.Z});const H=(0,a.Uk)(" Crossroads "),N={class:"q-px-md"};function A(e,r,o,l,s,n){const t=(0,a.up)("q-btn"),i=(0,a.up)("q-toolbar-title"),u=(0,a.up)("q-toolbar"),m=(0,a.up)("q-footer");return(0,a.wg)(),(0,a.j4)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(t,{flat:"",dense:"",round:"",icon:"settings","aria-label":"Settings",onClick:e.emitOpenMenu},null,8,["onClick"]),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[H])),_:1}),(0,a.Wm)(t,{icon:e.disablePrevButton?"pan_tool":"chevron_left",flat:"",round:"",disable:e.disablePrevButton,onClick:e.showPrevCard},null,8,["icon","disable","onClick"]),(0,a.Wm)("div",N,(0,d.zw)(e.counter+1)+" / "+(0,d.zw)(e.cardMax),1),(0,a.Wm)(t,{icon:e.disableNextButton?"pan_tool":"chevron_right",flat:"",round:"",disable:e.disableNextButton,onClick:e.showNextCard},null,8,["icon","disable","onClick"])])),_:1})])),_:1})}const S=(0,a.aZ)({name:"FooterControls",setup(e,{emit:r}){const o=(0,t.oR)(),l=(0,a.Fl)((()=>o.getters.getFilteredCards.length)),s=(0,a.Fl)((()=>o.getters.getCounter)),n=(0,a.Fl)((()=>s.value<1)),d=()=>o.dispatch("showPrevCard"),i=(0,a.Fl)((()=>s.value>=l.value-1)),u=()=>o.dispatch("showNextCard"),m=()=>{r("openMenu")};return{cardMax:l,counter:s,disablePrevButton:n,showPrevCard:d,disableNextButton:i,showNextCard:u,emitOpenMenu:m}}});var G=o(1762),X=o(9570),J=o(3747);S.render=A;const K=S;f()(S,"components",{QFooter:G.Z,QToolbar:X.Z,QBtn:L.Z,QToolbarTitle:J.Z});const Y=(0,a.aZ)({name:"MainLayout",components:{DrawerMenu:E,FooterControls:K},setup(){const e=(0,s.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var ee=o(9214),re=o(2652);Y.render=l;const oe=Y;f()(Y,"components",{QLayout:ee.Z,QPageContainer:re.Z})}}]);