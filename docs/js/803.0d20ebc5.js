(self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[]).push([[803],{3562:(e,l,t)=>{"use strict";t.d(l,{Z:()=>z});var s=t(3673),o=t(2323),a=t(8880);const r=(0,s.HX)("data-v-7a1b6343");(0,s.dD)("data-v-7a1b6343");const i={class:"card-ctn absolute"},n={key:0,class:"card-name text-center text-uppercase"},d={key:"trigger",class:"absolute full-width full-height column justify-between"},c={class:"text-italic"},u={class:"row justify-around"},f={key:"options",class:"absolute full-width"},g={class:"option-label text-center text-uppercase"},w={class:"row justify-center"},m={key:"result",class:"absolute full-width full-height column justify-between"},p={class:"row justify-around"};(0,s.Cn)();const v=r(((e,l,t,v,C,h)=>{const k=(0,s.up)("q-btn"),b=(0,s.up)("q-card"),y=(0,s.up)("q-separator"),j=(0,s.up)("q-scroll-area"),W=(0,s.up)("q-card-section");return(0,s.wg)(),(0,s.j4)("div",i,[(0,s.Wm)(b,{class:["card side-back absolute column justify-end items-center",{"card-rotate":e.isVisible}]},{default:r((()=>[(0,s.Wm)(k,{color:"green-10",icon:"play_circle_filled",size:"2em",flat:"",round:"",onClick:e.showCard},null,8,["onClick"])])),_:1},8,["class"]),(0,s.Wm)(b,{class:["card side-front absolute",{"card-rotate":!e.isVisible}]},{default:r((()=>[e.isVisible?((0,s.wg)(),(0,s.j4)(W,{key:0,class:"full-height column"},{default:r((()=>[e.isTriggered?((0,s.wg)(),(0,s.j4)("div",n,(0,o.zw)(e.name),1)):(0,s.kq)("",!0),(0,s.Wm)(j,{class:"col-grow"},{default:r((()=>[(0,s.Wm)(a.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:r((()=>[e.isTriggered?e.isShowingResult?((0,s.wg)(),(0,s.j4)("div",m,[(0,s.Wm)("div",null,(0,o.zw)(e.result),1),(0,s.Wm)("div",p,[(0,s.Wm)(k,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideResult},null,8,["onClick"]),e.hideNextCardButton?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(k,{key:0,color:"negative",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showNextCard},null,8,["onClick"]))])])):((0,s.wg)(),(0,s.j4)("div",f,[(0,s.Wm)("div",null,(0,o.zw)(e.intro),1),(0,s.Wm)(y,{color:"grey-10",spaced:""}),((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(e.options,(l=>((0,s.wg)(),(0,s.j4)("div",{key:l.label},[(0,s.Wm)("div",g,(0,o.zw)(l.label),1),(0,s.Wm)("div",{class:"cursor-pointer border-blink q-pa-xs",onClick:t=>e.showResult(l.result)},[(0,s.Wm)("div",null,(0,o.zw)(l.subtext),1)],8,["onClick"])])))),128)),(0,s.Wm)("div",w,[(0,s.Wm)(k,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCardInfo},null,8,["onClick"])])])):((0,s.wg)(),(0,s.j4)("div",d,[(0,s.Wm)("div",c,(0,o.zw)(e.trigger),1),(0,s.Wm)("div",u,[e.hideNextCardButton?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(k,{key:0,color:"grey-14",icon:"close",size:"1em",flat:"",round:"",onClick:e.showNextCard},null,8,["onClick"])),e.preview?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(k,{key:1,color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCard},null,8,["onClick"])),(0,s.Wm)(k,{color:"negative",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showCardInfo},null,8,["onClick"])])]))])),_:1})])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:1},8,["class"])])}));var C=t(1959),h=t(7874);const k=(0,s.aZ)({props:{info:{type:Object,required:!0},preview:{type:Boolean,default:!1}},setup(e,{emit:l}){const t=e.preview?(0,C.iH)(!0):(0,C.iH)(!1),o=()=>{t.value=!0},a=(0,h.oR)(),r=(0,s.Fl)((()=>a.getters.getFilteredCards.length)),i=(0,s.Fl)((()=>a.getters.getCounter)),n=(0,s.Fl)((()=>i.value>=r.value-1)),d=()=>{e.preview?l("closePreview"):a.dispatch("showNextCard")},c=()=>{t.value=!1},u=(0,s.Fl)((()=>e.info?e.info.trigger:"")),f=(0,s.Fl)((()=>e.info?e.info.name:"")),g=(0,s.Fl)((()=>e.info?e.info.intro:"")),w=(0,s.Fl)((()=>e.info?e.info.options:"")),m=(0,C.iH)(!1),p=()=>{m.value=!0},v=()=>{m.value=!1},k=(0,C.iH)("Result"),b=(0,C.iH)(!1),y=e=>{k.value=e,b.value=!0},j=()=>{k.value="",b.value=!1};return{isVisible:t,showCard:o,hideNextCardButton:n,showNextCard:d,hideCard:c,trigger:u,name:f,intro:g,options:w,isTriggered:m,showCardInfo:p,hideCardInfo:v,result:k,isShowingResult:b,showResult:y,hideResult:j}}});var b=t(151),y=t(2165),j=t(5589),W=t(7704),q=t(5869),x=t(7518),_=t.n(x);k.render=v,k.__scopeId="data-v-7a1b6343";const z=k;_()(k,"components",{QCard:b.Z,QBtn:y.Z,QCardSection:j.Z,QScrollArea:W.Z,QSeparator:q.Z})},1803:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>g});var s=t(3673);function o(e,l,t,o,a,r){const i=(0,s.up)("crossroads-card"),n=(0,s.up)("q-carousel-slide"),d=(0,s.up)("q-carousel"),c=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{modelValue:e.selected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.selected=l),class:"cr-carousel",height:"86vh","transition-prev":"slide-right","transition-next":"slide-left",animated:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(e.cards,(e=>((0,s.wg)(),(0,s.j4)(n,{key:e.name,name:e.name,class:"row justify-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{info:e},null,8,["info"])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:1})}var a=t(7874),r=t(3562);const i=(0,s.aZ)({components:{CrossroadsCard:r.Z},setup(){const e=(0,a.oR)();e.dispatch("shuffleCrossroads");const l=(0,s.Fl)((()=>e.getters.getFilteredCards)),t=(0,s.Fl)((()=>l.value.length?l.value[e.getters.getCounter].name:""));return{selected:t,cards:l}}});var n=t(4379),d=t(1277),c=t(4593),u=t(7518),f=t.n(u);i.render=o;const g=i;f()(i,"components",{QPage:n.Z,QCarousel:d.Z,QCarouselSlide:c.Z})}}]);