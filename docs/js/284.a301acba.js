(self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[]).push([[284],{1284:(e,l,s)=>{"use strict";s.r(l),s.d(l,{default:()=>S});var t=s(3673);const a=(0,t.HX)("data-v-457b1a16"),o=a(((e,l,s,o,r,i)=>{const n=(0,t.up)("crossroads-card"),d=(0,t.up)("q-carousel-slide"),c=(0,t.up)("q-carousel"),u=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(u,{class:"flex flex-center"},{default:a((()=>[(0,t.Wm)(c,{modelValue:e.selected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.selected=l),class:"cr-carousel full-height full-width","transition-prev":"slide-right","transition-next":"slide-left",animated:""},{default:a((()=>[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.cards,(e=>((0,t.wg)(),(0,t.j4)(d,{key:e.name,name:e.name,class:"row justify-center"},{default:a((()=>[(0,t.Wm)(n,{info:e},null,8,["info"])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:1})}));var r=s(7874),i=s(2323),n=s(8880);const d=(0,t.HX)("data-v-42bd8351");(0,t.dD)("data-v-42bd8351");const c={class:"card-ctn row justify-center"},u={key:0,class:"card-name text-center text-uppercase"},f={key:"trigger",class:"absolute full-width full-height column justify-between"},g={class:"text-italic text-justify"},m={class:"row justify-around"},w={key:"options",class:"absolute full-width"},C={class:"text-justify"},p={class:"option-label text-center text-uppercase"},h={class:"row justify-center"},v={key:"result",class:"absolute full-width full-height column justify-between"},k={class:"text-justify"},b={class:"row justify-around"};(0,t.Cn)();const y=d(((e,l,s,a,o,r)=>{const y=(0,t.up)("q-btn"),j=(0,t.up)("q-card"),W=(0,t.up)("q-separator"),x=(0,t.up)("q-scroll-area"),_=(0,t.up)("q-card-section");return(0,t.wg)(),(0,t.j4)("div",c,[(0,t.Wm)(j,{class:["card side-back absolute column justify-end items-center",{"card-rotate":e.isVisible}]},{default:d((()=>[(0,t.Wm)(y,{color:"green-10",icon:"play_circle_filled",size:"2em",flat:"",round:"",onClick:e.showCard},null,8,["onClick"])])),_:1},8,["class"]),(0,t.Wm)(j,{class:["card side-front absolute",{"card-rotate":!e.isVisible}]},{default:d((()=>[e.isVisible?((0,t.wg)(),(0,t.j4)(_,{key:0,class:"full-height column"},{default:d((()=>[e.isTriggered?((0,t.wg)(),(0,t.j4)("div",u,(0,i.zw)(e.name),1)):(0,t.kq)("",!0),(0,t.Wm)(x,{class:"col-grow"},{default:d((()=>[(0,t.Wm)(n.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:d((()=>[e.isTriggered?e.isShowingResult?((0,t.wg)(),(0,t.j4)("div",v,[(0,t.Wm)("div",k,(0,i.zw)(e.result),1),(0,t.Wm)("div",b,[(0,t.Wm)(y,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideResult},null,8,["onClick"]),e.hideNextCardButton?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(y,{key:0,color:"red-10",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showNextCard},null,8,["onClick"]))])])):((0,t.wg)(),(0,t.j4)("div",w,[(0,t.Wm)("div",C,(0,i.zw)(e.intro),1),(0,t.Wm)(W,{color:"grey-10",spaced:""}),((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.options,(l=>((0,t.wg)(),(0,t.j4)("div",{key:l.label},[(0,t.Wm)("div",p,(0,i.zw)(l.label),1),(0,t.Wm)("div",{class:"cursor-pointer border-blink q-pa-xs",onClick:s=>e.showResult(l.result)},[(0,t.Wm)("div",null,(0,i.zw)(l.subtext),1)],8,["onClick"])])))),128)),(0,t.Wm)("div",h,[(0,t.Wm)(y,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCardInfo},null,8,["onClick"])])])):((0,t.wg)(),(0,t.j4)("div",f,[(0,t.Wm)("div",g,(0,i.zw)(e.trigger),1),(0,t.Wm)("div",m,[e.hideNextCardButton?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(y,{key:0,color:"grey-14",icon:"close",size:"1em",flat:"",round:"",onClick:e.showNextCard},null,8,["onClick"])),(0,t.Wm)(y,{color:"grey-14",icon:"undo",size:"1em",flat:"",round:"",onClick:e.hideCard},null,8,["onClick"]),(0,t.Wm)(y,{color:"red-10",icon:"arrow_forward",size:"1em",flat:"",round:"",onClick:e.showCardInfo},null,8,["onClick"])])]))])),_:1})])),_:1})])),_:1})):(0,t.kq)("",!0)])),_:1},8,["class"])])}));var j=s(1959);const W=(0,t.aZ)({props:{info:{type:Object,required:!0}},setup(e){const l=(0,j.iH)(!1),s=()=>{l.value=!0},a=(0,r.oR)(),o=(0,t.Fl)((()=>a.getters.getFilteredCards.length)),i=(0,t.Fl)((()=>a.getters.getCounter)),n=(0,t.Fl)((()=>i.value>=o.value-1)),d=()=>a.dispatch("showNextCard"),c=()=>{l.value=!1},u=(0,t.Fl)((()=>e.info?e.info.trigger:"")),f=(0,t.Fl)((()=>e.info?e.info.name:"")),g=(0,t.Fl)((()=>e.info?e.info.intro:"")),m=(0,t.Fl)((()=>e.info?e.info.options:"")),w=(0,j.iH)(!1),C=()=>{w.value=!0},p=()=>{w.value=!1},h=(0,j.iH)("Result"),v=(0,j.iH)(!1),k=e=>{h.value=e,v.value=!0},b=()=>{h.value="",v.value=!1};return{isVisible:l,showCard:s,hideNextCardButton:n,showNextCard:d,hideCard:c,trigger:u,name:f,intro:g,options:m,isTriggered:w,showCardInfo:C,hideCardInfo:p,result:h,isShowingResult:v,showResult:k,hideResult:b}}});var x=s(151),_=s(2165),q=s(5589),z=s(7704),F=s(5869),Z=s(7518),R=s.n(Z);W.render=y,W.__scopeId="data-v-42bd8351";const H=W;R()(W,"components",{QCard:x.Z,QBtn:_.Z,QCardSection:q.Z,QScrollArea:z.Z,QSeparator:F.Z});const Q=(0,t.aZ)({components:{CrossroadsCard:H},setup(){const e=(0,r.oR)();e.dispatch("shuffleCrossroads");const l=(0,t.Fl)((()=>e.getters.getFilteredCards)),s=(0,t.Fl)((()=>l.value.length?l.value[e.getters.getCounter].name:""));return{selected:s,cards:l}}});var I=s(4379),N=s(1277),V=s(4593);Q.render=o,Q.__scopeId="data-v-457b1a16";const S=Q;R()(Q,"components",{QPage:I.Z,QCarousel:N.Z,QCarouselSlide:V.Z})}}]);