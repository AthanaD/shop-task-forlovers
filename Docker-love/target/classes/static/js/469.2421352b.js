"use strict";(self["webpackChunkyy2"]=self["webpackChunkyy2"]||[]).push([[469],{6245:function(e,l,a){function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidCharacterError";var t="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var l=String(e).replace(/=+$/,"");if(l.length%4==1)throw new o("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,t,n=0,r=0,i="";t=l.charAt(r++);~t&&(a=n%4?64*a+t:t,n++%4)?i+=String.fromCharCode(255&a>>(-2*n&6)):0)t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(t);return i};function n(e){var l=e.replace(/-/g,"+").replace(/_/g,"/");switch(l.length%4){case 0:break;case 2:l+="==";break;case 3:l+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(t(e).replace(/(.)/g,(function(e,l){var a=l.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a})))}(l)}catch(e){return t(l)}}function r(e){this.message=e}function i(e,l){if("string"!=typeof e)throw new r("Invalid token specified");var a=!0===(l=l||{}).header?0:1;try{return JSON.parse(n(e.split(".")[a]))}catch(e){throw new r("Invalid token specified: "+e.message)}}r.prototype=new Error,r.prototype.name="InvalidTokenError",l.Z=i},6469:function(e,l,a){a.r(l),a.d(l,{default:function(){return I}});var o=a(3164),t=(a(6335),a(2876)),n=(a(2278),a(1116)),r=(a(8825),a(5267)),i=(a(1645),a(5160)),u=(a(6338),a(2406)),s=(a(6615),a(6252));const c={class:"content_displaySetting"},d=(0,s._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),v={style:{"--van-nav-bar-icon-color":"#f19290"}},h={style:{transform:"translate(5vw, 7vh)",position:"relative",overflow:"hidden",cursor:"grab","background-color":"#fff","box-shadow":"0px 0px 5px rgba(0, 0, 0, 0.2)","border-radius":"20px",width:"90%"}},p={style:{"margin-top":"2vh","margin-bottom":"2vh"}},m=(0,s._)("br",null,null,-1),w=(0,s._)("br",null,null,-1),g=(0,s._)("br",null,null,-1),f=(0,s._)("br",null,null,-1),y={style:{"margin-top":"3vh","margin-bottom":"4vh"}};function b(e,l,a,b,k,C){const _=u.l2,U=i.bL,x=r.TS,H=n.gb,L=t.Vq,I=o.gN;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[d,(0,s._)("div",v,[(0,s.Wm)(_,{title:"海报展示设置中心","left-text":"","left-arrow":"",onClickLeft:b.onClickLeft},null,8,["onClickLeft"])]),(0,s._)("div",h,[(0,s._)("div",p,[(0,s.Wm)(U,{center:"",title:"海报展示设置"}),(0,s.Wm)(x,{inset:""},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{title:"海报事件名称",label:b.displayItem,"is-link":"",onClick:l[0]||(l[0]=e=>b.requireName())},null,8,["label"]),(0,s.Wm)(U,{title:"海报事件时间",label:b.displayDay,"is-link":"",onClick:l[1]||(l[1]=e=>b.requireTime())},null,8,["label"]),(0,s.Wm)(U,{title:"海报名称",label:b.displayLogo,"is-link":"",onClick:l[2]||(l[2]=e=>b.requireLogo())},null,8,["label"]),(0,s.Wm)(U,{title:"海报二维码内容",label:b.displayUrl,"is-link":"",onClick:l[3]||(l[3]=e=>b.requireUrl())},null,8,["label"])])),_:1})])])]),(0,s.Wm)(L,{show:b.show_1,"onUpdate:show":l[4]||(l[4]=e=>b.show_1=e),"show-cancel-button":!1,"show-confirm-button":!1,width:"50vw"},{default:(0,s.w5)((()=>[m,w,(0,s.Wm)(H,{size:"40px",vertical:"","text-size":"15px",color:"#f19290"},{default:(0,s.w5)((()=>[(0,s.Uk)("🚀拼命加载中...")])),_:1}),g,f])),_:1},8,["show"]),(0,s.Wm)(L,{show:b.show_2,"onUpdate:show":l[5]||(l[5]=e=>b.show_2=e),title:"🥰提示",message:b.message,width:"70vw",height:"30vw","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1},null,8,["show","message"]),(0,s.Wm)(L,{show:b.show_3,"onUpdate:show":l[7]||(l[7]=e=>b.show_3=e),title:b.title,onConfirm:b.userCheckConfirm,onCancel:b.userCheckCancel,"show-cancel-button":""},{default:(0,s.w5)((()=>[(0,s._)("div",y,[(0,s.Wm)(x,{inset:""},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{inset:""},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{modelValue:b.userValue,"onUpdate:modelValue":l[6]||(l[6]=e=>b.userValue=e),rows:"3",autosize:"",label:b.key,type:"textarea",maxlength:b.maxlength,placeholder:b.keyValue,"show-word-limit":""},null,8,["modelValue","label","maxlength","placeholder"])])),_:1})])),_:1})])])),_:1},8,["show","title","onConfirm","onCancel"])],64)}var k=a(2262),C=a(2119),_=a(6154),U=a(6245),x={setup(){const e=(0,k.iH)(""),l=(0,k.iH)(""),a=(0,k.iH)(""),o=(0,k.iH)(""),t=(0,k.iH)(""),n=(0,k.iH)(""),r=(0,k.iH)(""),i=(0,k.iH)(""),u=(0,k.iH)(""),c=(0,k.iH)(""),d=(0,k.iH)(""),v=(0,k.iH)(""),h=(0,k.iH)(!1),p=(0,k.iH)(!1),m=(0,k.iH)(!1),w=(0,C.tv)(),g=localStorage.getItem("jwtToken");g||w.replace("/login");const f={Authorization:`Bearer ${g}`};(0,s.bv)((()=>{h.value=!0,y()}));const y=()=>{_.Z.post("/api/loginToken?token="+g).then((e=>{if(0==e.data.code)return console.error(e.data.data),void w.replace("/login");console.log(e.data.data);const l=(0,U.Z)(g);v.value=l.id,b()})).catch((e=>{console.error("请求loginToken接口失败",e),w.replace("/login")}))},b=async()=>{try{_.Z.get(`/api/selectUser?id=${v.value}`,{headers:f}).then((n=>{t.value=n.data.data,console.log(t.value),e.value=t.value.displayUrl,l.value=t.value.displayLogo,a.value=t.value.displayItem,o.value=t.value.displayDay}))}catch(n){console.error("获取数据失败",n)}h.value=!1},x=()=>{n.value="修改海报事件名称",r.value="海报事件名称",i.value=7,u.value="请输入事件名称",m.value=!0},H=()=>{n.value="修改海报事件起始时间",r.value="海报事件起始时间",i.value=20,u.value="请输入海报事件起始时间（例如：2022-10-06）",m.value=!0},L=()=>{n.value="修改海报Logo名称",r.value="海报Logo名称",i.value=10,u.value="请输入海报Logo名称",m.value=!0},I=()=>{n.value="修改海报二维码链接",r.value="海报二维码链接",i.value=50,u.value="请输入海报二维码链接",m.value=!0},W=()=>{const t={nameId:v.value,displayItem:"",displayDay:"",displayLogo:"",displayUrl:""};console.log(t),"修改海报二维码链接"==n.value?(t.displayUrl=c.value,e.value=c.value):"修改海报Logo名称"==n.value?(t.displayLogo=c.value,l.value=c.value):"修改海报事件起始时间"==n.value?(t.displayDay=c.value,o.value=c.value):"修改海报事件名称"==n.value&&(t.displayItem=c.value,a.value=c.value),fetch("/api/requireUser",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`},body:JSON.stringify(t)}).then((e=>{console.log(e.json().data),d.value="保存成功"})).catch((e=>{console.error("请求requireUser接口失败",e),d.value="保存失败"})),p.value=!0,setTimeout((()=>{p.value=!1}),1e3),c.value=""},q=()=>{c.value=""},T=()=>w.replace("/Setting");return{title:n,key:r,maxlength:i,keyValue:u,requireName:x,requireTime:H,requireLogo:L,requireUrl:I,displayUrl:e,displayLogo:l,displayItem:a,displayDay:o,userValue:c,userData:t,userId:v,show_1:h,show_2:p,show_3:m,onClickLeft:T,message:d,userCheckConfirm:W,userCheckCancel:q}}},H=a(3744);const L=(0,H.Z)(x,[["render",b]]);var I=L},6338:function(e,l,a){a(1958),a(368),a(6742),a(3094)}}]);
//# sourceMappingURL=469.2421352b.js.map