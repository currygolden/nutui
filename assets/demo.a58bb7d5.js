import{c as t}from"./mobile.33afaabf.js";import{r as s,o,c as a,f as i,H as e}from"./vendor.80bf15c7.js";import"./index.8a6798b9.js";const{createDemo:n}=t("toast"),r=n({setup(){const{ctx:t}=e();return{textToast:s=>{t.$toast.text(s,{duration:1e5})},successToast:s=>{t.$toast.success(s,{duration:1e5})},errorToast:s=>{t.$toast.fail(s)},warningToast:s=>{t.$toast.warn(s)},loadingToast:s=>{t.$toast.loading(s,{duration:0,id:"test"}),setTimeout((()=>{t.$toast.success("加载完成",{id:"test",duration:2e3})}),2e3)}}}}),l={class:"demo"},c=i("h2",null,"基本用法",-1),u=i("h2",null,"动态更新",-1);r.render=function(t,e,n,r,d,T){const k=s("nut-cell");return o(),a("div",l,[c,i("div",null,[i(k,{title:"Text 文字提示","is-link":"",onClick:e[1]||(e[1]=s=>t.textToast("网络失败，请稍后再试~"))}),i(k,{title:"Success 成功提示","is-link":"",onClick:e[2]||(e[2]=s=>t.successToast("成功提示"))}),i(k,{title:"Error 失败提示","is-link":"",onClick:e[3]||(e[3]=s=>t.errorToast("失败提示"))}),i(k,{title:"Warning 警告提示","is-link":"",onClick:e[4]||(e[4]=s=>t.warningToast("警告提示"))})]),u,i(k,{title:"Loading 加载提示","is-link":"",onClick:e[5]||(e[5]=s=>t.loadingToast("加载中"))})])};export default r;
