"use strict";(self["webpackChunkyy2"]=self["webpackChunkyy2"]||[]).push([[485],{6485:function(e,l,a){a.r(l),a.d(l,{default:function(){return Z}});var t=a(1116),o=(a(8825),a(2876)),n=(a(2278),a(5185)),i=(a(3349),a(3164)),r=(a(6335),a(8480)),u=(a(5590),a(3579)),d=(a(492),a(2406)),s=(a(6615),a(6252));const c={style:{"--van-nav-bar-icon-color":"#f19290"}},m={class:"page-container"},p={class:"display_produce"},w=(0,s._)("br",null,null,-1),h={key:0},v={style:{transform:"translate(0px, -10px)"}},f={key:1},k={style:{display:"flex","justify-content":"center","align-items":"center"}},g=(0,s._)("br",null,null,-1),y={style:{transform:"translate(0px, 8px)"}},V=(0,s._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),b={style:{display:"flex","justify-content":"center","align-items":"center"}},_=(0,s._)("br",null,null,-1),T=(0,s._)("br",null,null,-1),W=(0,s._)("br",null,null,-1),H=(0,s._)("br",null,null,-1);function U(e,l,a,U,x,C){const N=d.l2,D=u.HY,z=r.Ee,L=i.gN,Z=n.l0,j=o.Vq,q=t.gb;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[(0,s.Wm)(N,{title:"任务","left-text":"","left-arrow":"",onClickLeft:U.onClickLeft},null,8,["onClickLeft"])]),(0,s._)("div",m,[(0,s._)("div",p,[w,null===U.resData?((0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",v,[(0,s.Wm)(D,{"image-size":"26rem",description:"😭任务不见啦，快去让你的小可爱再创建一个吧！"})])])):(0,s.kq)("",!0),U.resData?((0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)(Z,{class:"form-container"},{default:(0,s.w5)((()=>[(0,s._)("div",k,[(0,s.Wm)(z,{width:"50vw",height:"50vw",position:"center",fit:"cover",round:"",src:U.imageUrl,onClick:U.picture},null,8,["src","onClick"])]),g,(0,s._)("div",y,[V,(0,s.Wm)(L,{label:"📌任务名称",modelValue:U.title,"onUpdate:modelValue":l[0]||(l[0]=e=>U.title=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(L,{label:"📝任务详情",modelValue:U.desc,"onUpdate:modelValue":l[1]||(l[1]=e=>U.desc=e),type:"textarea",rows:"3",readonly:!0},null,8,["modelValue"]),(0,s.Wm)(L,{label:"💰积分价格",modelValue:U.credit,"onUpdate:modelValue":l[2]||(l[2]=e=>U.credit=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(L,{label:"🦄创建对象",modelValue:U.founderName,"onUpdate:modelValue":l[3]||(l[3]=e=>U.founderName=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(L,{label:"🤖任务对象",modelValue:U.useName,"onUpdate:modelValue":l[4]||(l[4]=e=>U.useName=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(L,{label:"🎁完成情况",modelValue:U.checkTask,"onUpdate:modelValue":l[5]||(l[5]=e=>U.checkTask=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(L,{label:"⏱更新时间",modelValue:U.updateTime,"onUpdate:modelValue":l[6]||(l[6]=e=>U.updateTime=e),readonly:!0},null,8,["modelValue"]),(0,s.Wm)(L,{label:"📅注册时间",modelValue:U.registerTime,"onUpdate:modelValue":l[7]||(l[7]=e=>U.registerTime=e),readonly:!0},null,8,["modelValue"])])])),_:1})])):(0,s.kq)("",!0)])]),(0,s.Wm)(j,{show:U.show,"onUpdate:show":l[8]||(l[8]=e=>U.show=e),"close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,width:U.picturewidth},{default:(0,s.w5)((()=>[(0,s._)("div",b,[(0,s.Wm)(z,{width:"100vw",height:"100vw",position:"center",fit:"cover",src:U.imageUrl},null,8,["src"])])])),_:1},8,["show","width"]),(0,s.Wm)(j,{show:U.show_1,"onUpdate:show":l[9]||(l[9]=e=>U.show_1=e),"show-cancel-button":!1,"show-confirm-button":!1,width:"50vw"},{default:(0,s.w5)((()=>[_,T,(0,s.Wm)(q,{size:"40px",vertical:"","text-size":"15px",color:"#f19290"},{default:(0,s.w5)((()=>[(0,s.Uk)("🚀拼命加载中...")])),_:1}),W,H])),_:1},8,["show"])],64)}var x=a(2262),C=a(6154),N=a(2119),D={setup(){const e=(0,x.iH)();e.value=.8*window.innerWidth;const l=(0,x.iH)(!1),a=(0,x.iH)(!0),t=()=>l.value=!0,o=(0,N.tv)(),n=()=>o.replace("/Task"),i=(0,x.iH)(""),r=(0,x.iH)(""),u=(0,x.iH)(""),d=(0,x.iH)(""),c=(0,x.iH)(""),m=(0,x.iH)(""),p=(0,x.iH)(""),w=(0,x.iH)(""),h=(0,x.iH)(""),v=(0,x.iH)(""),f=localStorage.getItem("jwtToken");f||o.replace("/login");const k={Authorization:`Bearer ${f}`},g=()=>{C.Z.post("/api/loginToken?token="+f).then((e=>{0==e.data.code&&(console.error(e.data.data),o.replace("/login")),console.log(e.data.data)})).catch((e=>{console.error("请求loginToken接口失败",e),o.replace("/login")}))},y=o.currentRoute.value.params.id;let V=y.replace(":","");const b=async()=>{try{const e=await C.Z.get(`/api/selectTask?id=${V}`,{headers:k});v.value=e.data.data;const l=e.data.data;i.value=l.userImage,r.value=l.taskName,""==l.taskText?u.value="😂这个人很懒，没有填写相关的任务详情！":u.value=l.taskText,d.value=l.taskCredit,p.value=l.useName,console.log(l.checkProduce),1==l.checkTask?c.value="🥰任务已成功完成":c.value="🧸还没完成任务呢，快去完成任务吧！",w.value=l.registerTime,h.value=l.updateTime;const a=l.founderId,t=await C.Z.get(`/api/selectUser?id=${a}`,{headers:k}),o=t.data.data;m.value=o.name}catch(e){console.error("获取数据失败",e)}a.value=!1};return(0,s.bv)((()=>{g(),b()})),{resData:v,picturewidth:e,show:l,show_1:a,picture:t,onClickLeft:n,imageUrl:i,title:r,desc:u,credit:d,checkTask:c,founderName:m,useName:p,registerTime:w,updateTime:h,fetchDataAndFillForm:b}}},z=a(3744);const L=(0,z.Z)(D,[["render",U]]);var Z=L},5590:function(e,l,a){a(1958),a(368),a(6742),a(7179)}}]);
//# sourceMappingURL=485.a4e5837f.js.map