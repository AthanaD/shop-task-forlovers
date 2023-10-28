"use strict";(self["webpackChunkyy2"]=self["webpackChunkyy2"]||[]).push([[741],{6245:function(e,t,o){function n(e){this.message=e}n.prototype=new Error,n.prototype.name="InvalidCharacterError";var a="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,a,l=0,r=0,i="";a=t.charAt(r++);~a&&(o=l%4?64*o+a:a,l++%4)?i+=String.fromCharCode(255&o>>(-2*l&6)):0)a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);return i};function l(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(a(e).replace(/(.)/g,(function(e,t){var o=t.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o})))}(t)}catch(e){return a(t)}}function r(e){this.message=e}function i(e,t){if("string"!=typeof e)throw new r("Invalid token specified");var o=!0===(t=t||{}).header?0:1;try{return JSON.parse(l(e.split(".")[o]))}catch(e){throw new r("Invalid token specified: "+e.message)}}r.prototype=new Error,r.prototype.name="InvalidTokenError",t.Z=i},5741:function(e,t,o){o.r(t),o.d(t,{default:function(){return I}});var n=o(2876),a=(o(2278),o(5185)),l=(o(3349),o(6907)),r=(o(4746),o(5267)),i=(o(1645),o(3164)),c=(o(6335),o(7961)),s=(o(1605),o(1116)),u=(o(8825),o(294)),d=(o(6870),o(8480)),m=(o(5590),o(2406)),p=(o(6615),o(6252));const h={class:"content_useHome"},f={style:{"--van-nav-bar-icon-color":"#f19290"}},w={style:{display:"flex","justify-content":"center","align-items":"center",transform:"translateY(10px)"}},g=(0,p._)("br",null,null,-1),v=(0,p._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),b=(0,p._)("br",null,null,-1),k={style:{margin:"16px"}},y=(0,p._)("br",null,null,-1);function C(e,t,o,C,_,S){const U=m.l2,V=d.Ee,W=u.JO,T=s.gb,x=c.Qm,H=i.gN,I=r.TS,L=l.zx,j=a.l0,O=n.Vq;return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("div",h,[(0,p._)("div",f,[(0,p.Wm)(U,{title:"修改用户信息","left-text":"","left-arrow":"",onClickLeft:C.onClickLeft},null,8,["onClickLeft"])]),(0,p._)("div",w,[(0,p.Wm)(V,{width:"65%",height:"65%",fit:"cover",position:"center",src:C.image},null,8,["src"])]),e.isLoading?((0,p.wg)(),(0,p.j4)(T,{key:0,vertical:"",class:"loading-overlay"},{icon:(0,p.w5)((()=>[(0,p.Wm)(W,{name:"star-o",size:"30"})])),default:(0,p.w5)((()=>[(0,p.Uk)(" 加载中... ")])),_:1})):(0,p.kq)("",!0),(0,p.Wm)(j,{onSubmit:C.onSubmit},{default:(0,p.w5)((()=>[g,v,(0,p.Wm)(x,{modelValue:C.fileList,"onUpdate:modelValue":t[0]||(t[0]=e=>C.fileList=e),"after-read":C.afterRead,"upload-text":"上传头像"},null,8,["modelValue","after-read"]),(0,p.Wm)(I,{inset:""},{default:(0,p.w5)((()=>[b,(0,p.Wm)(H,{modelValue:C.username,"onUpdate:modelValue":t[1]||(t[1]=e=>C.username=e),name:"更改用户名",label:"🧩用户名",placeholder:"更改用户名（选填）",clearable:""},null,8,["modelValue"]),(0,p.Wm)(H,{modelValue:C.desc,"onUpdate:modelValue":t[2]||(t[2]=e=>C.desc=e),name:"更改用户详情",label:"📝用户详情",type:"textarea",rows:"2",placeholder:"更改用户详情（选填）",clearable:""},null,8,["modelValue"]),(0,p.Wm)(H,{modelValue:C.password,"onUpdate:modelValue":t[3]||(t[3]=e=>C.password=e),type:"password",name:"更改密码",label:"💥更改密码",placeholder:"更改用户密码（选填）",clearable:""},null,8,["modelValue"])])),_:1}),(0,p._)("div",k,[(0,p.Wm)(L,{round:"",block:"",color:"#F19290","native-type":"submit"},{default:(0,p.w5)((()=>[(0,p.Uk)(" 提交 ")])),_:1}),y,(0,p.Wm)(L,{round:"",block:"",type:"danger",onClick:C.logout},{default:(0,p.w5)((()=>[(0,p.Uk)(" 注销账号并退出 ")])),_:1},8,["onClick"])])])),_:1},8,["onSubmit"])]),(0,p.Wm)(O,{show:C.show_1,"onUpdate:show":t[4]||(t[4]=e=>C.show_1=e),title:"🥰恭喜",message:"修改成功！",width:"70vw",height:"30vw","show-cancel-button":!1,"show-confirm-button":!1},null,8,["show"]),(0,p.Wm)(O,{show:C.show_2,"onUpdate:show":t[5]||(t[5]=e=>C.show_2=e),onConfirm:C.checkConfirm,onCancel:C.checkCancel,title:"温馨提示",message:"😭您确定要注销账号吗，注销账号会清理所有的数据，请您要仔细考虑哦！","show-cancel-button":""},null,8,["show","onConfirm","onCancel"])],64)}var _=o(2262),S=o(6154),U=o(2518),V=o(2119),W=o(6245),T={setup(){const e=[U],t=(0,_.iH)(!1),o=(0,_.iH)(!1),n=(0,_.iH)(!1),a=(0,V.tv)();(0,p.bv)((()=>{c()}));const l=localStorage.getItem("jwtToken");l||a.replace("/login");const r={Authorization:`Bearer ${l}`};let i="";const c=()=>{S.Z.post("/api/loginToken?token="+l).then((e=>{if(0==e.data.code)return console.error(e.data.data),void a.replace("/login");const t=(0,W.Z)(l);i=t.id})).catch((e=>{console.error("请求loginToken接口失败",e),a.replace("/login")}))},s=()=>{n.value=!0,m()},u=()=>{},d=()=>{o.value=!0},m=()=>{S.Z.put(`/api/deleteUser?id=${i}`,"",{headers:r}).then((e=>{const t=e.data;1===t.code?(localStorage.removeItem("jwtToken"),a.replace("/login")):console.error("删除用户失败",t)})).catch((e=>{console.error("删除用户失败",e)}))},h=()=>a.replace("/Setting"),f=a.currentRoute.value.params.id;let w=f.replace(":","");const g=(0,_.iH)(""),v=(0,_.iH)(""),b=(0,_.iH)(""),k=(0,_.iH)([]);let y=(0,_.iH)("");const C=e=>{e.status="uploading",e.message="上传中...";const t=new FormData;t.append("file",e.file),fetch("/api/upload",{method:"POST",headers:r,body:t}).then((e=>e.json())).then((t=>{y.value=t.data,e.message="上传成功",e.status=""})).catch((e=>{console.error("上传失败：",e)}))},T=()=>{const e={nameId:w,name:g.value,userImage:y.value,userText:v.value,password:b.value};n.value=!0,fetch("/api/requireUser",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify(e)}).then((e=>{console.log(e.data);try{t.value=!0,setTimeout((()=>{a.replace("/")}),1e3)}catch(o){console.error("请求requireUser接口失败",o)}})).catch((e=>{console.error("请求requireUser接口失败",e)})),n.value=!1};return{show_1:t,show_2:o,image:e,onClickLeft:h,checkConfirm:s,checkCancel:u,logout:d,username:g,desc:v,password:b,onSubmit:T,fileList:k,afterRead:C}}},x=o(3744);const H=(0,x.Z)(T,[["render",C]]);var I=H},2518:function(e,t,o){e.exports=o.p+"img/useAdd.d67ec7fd.gif"},6870:function(e,t,o){o(1958),o(368),o(6742)},5590:function(e,t,o){o(1958),o(368),o(6742),o(7179)}}]);
//# sourceMappingURL=741.84fa69a7.js.map