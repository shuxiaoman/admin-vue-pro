var e=Object.assign;import{R as a,be as t,bf as l,d as s,q as i,P as o,f as n,h as r,k as d,j as u,g as c,c as f,ag as p,bg as m,B as v,o as b,bh as h,V as k,T as g,O as y,r as x,ap as w,a as j,i as C,bi as T,F as U,a$ as P}from"./index.6fdb0938.js";import{P as V,a as N}from"./Content.bd87d609.js";import{a as D}from"./style.module.03301349.js";import{A as O}from"./index.4225a46b.js";import{C as $,R as _,a as R}from"./index.73078f36.js";import{F as E}from"./index.2f50cedb.js";import{I as B}from"./index.cd1904fb.js";import{S as H}from"./index.7acb729a.js";import{D as I}from"./index.f7ac7599.js";import{T as A}from"./index.76ac4171.js";import"./vendor.60046542.js";import"./transButton.c661122c.js";import"./Col.e63dd459.js";import"./get.b972b994.js";import"./SearchOutlined.0a0f61d4.js";import"./CheckOutlined.adde7a30.js";import"./shallowequal.243ea648.js";import"./index.246f5ca4.js";import"./index.7dedb9b4.js";import"./index.6ce0e5ad.js";function z(){return(z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var M=t(),S=l(),q=a(s({name:"APopconfirm",mixins:[i],props:z(z({},M),{prefixCls:o.string,transitionName:o.string.def("zoom-big"),content:o.any,title:o.any,trigger:M.trigger.def("click"),okType:S.type.def("primary"),disabled:o.looseBool.def(!1),okText:o.any,cancelText:o.any,icon:o.any,okButtonProps:o.object,cancelButtonProps:o.object,onConfirm:o.func,onCancel:o.func,onVisibleChange:o.func}),emits:["update:visible","confirm","cancel","visibleChange"],setup:function(){return{configProvider:n("configProvider",r)}},data:function(){var e=d(this),a={sVisible:!1};return"visible"in e&&(a.sVisible=e.visible),"defaultVisible"in e&&(a.sVisible=e.defaultVisible),a},watch:{visible:function(e){this.sVisible=e}},methods:{onConfirmHandle:function(e){this.setVisible(!1,e),this.$emit("confirm",e)},onCancelHandle:function(e){this.setVisible(!1,e),this.$emit("cancel",e)},onVisibleChangeHandle:function(e){this.$props.disabled||this.setVisible(e)},setVisible:function(e,a){u(this,"visible")||this.setState({sVisible:e}),this.$emit("update:visible",e),this.$emit("visibleChange",e,a)},getPopupDomNode:function(){return this.$refs.tooltip.getPopupDomNode()},renderOverlay:function(e,a){var t=this,l=this.okType,s=this.okButtonProps,i=this.cancelButtonProps,o=c(this,"icon")||f(p,null,null),n=m(z({size:"small",onClick:this.onCancelHandle},i)),r=m(z({type:l,size:"small",onClick:this.onConfirmHandle},s));return f("div",{class:"".concat(e,"-inner-content")},[f("div",{class:"".concat(e,"-message")},[o,f("div",{class:"".concat(e,"-message-title")},[c(this,"title")])]),f("div",{class:"".concat(e,"-buttons")},[f(v,n,{default:function(){return[c(t,"cancelText")||a.cancelText]}}),f(v,r,{default:function(){return[c(t,"okText")||a.okText]}})])])}},render:function(){var e,a=this,t=d(this),l=t.prefixCls,s=(0,this.configProvider.getPrefixCls)("popover",l),i=b(t,["title","content","cancelText","okText","onUpdate:visible"]),o=f(k,{componentName:"Popconfirm",defaultLocale:h.Popconfirm,children:function(e){return a.renderOverlay(s,e)}},null),n=z(z({},i),{title:o,prefixCls:s,visible:this.sVisible,ref:"tooltip",onVisibleChange:this.onVisibleChangeHandle});return f(g,n,{default:function(){return[null===(e=a.$slots)||void 0===e?void 0:e.default()]}})}})),F="_advanced-form_mbvk7_1",K="_editable-row-operations_mbvk7_7",L="_footer-bar_mbvk7_10",G="_footer-bar-left_mbvk7_25";const{Item:J}=E,{Option:Q}=H,{RangePicker:W}=I,X={},Y={},Z=[{title:"name",dataIndex:"name",width:"25%",slots:{customRender:"name"}},{title:"工号",dataIndex:"no",width:"15%",slots:{customRender:"no"}},{title:"所属部门",dataIndex:"org",width:"15%",slots:{customRender:"org"}},{title:"operation",dataIndex:"operation",slots:{customRender:"operation"}}];var ee=s({setup(){const a=y({wareName:void 0,wareUrl:void 0,wareManager:void 0,wareApprover:void 0,wareEffectDate:void 0,wareType:void 0}),t=y({taskName:void 0,taskDesc:void 0,taskExecutor:void 0,taskResponser:void 0,taskNotifactionDate:void 0,taskType:void 0}),l=x(void 0),s=x(void 0),i=x([]),o=y({}),n=x(0),r=()=>{i.value.push({key:`key-${n.value}`,name:`name-${n.value}`,no:`${n.value}号`,org:`部门${n.value}号`}),n.value+=1},d={};["name","no","org"].forEach((e=>{d[e]=({text:a,record:t})=>f("div",null,[o[t.key]?f(B,{value:o[t.key][e],"onUpdate:value":a=>o[t.key][e]=a,style:"margin: -5px 0"},null):f("span",null,[a])])}));const u=()=>e(e({},d),{operation:({record:e})=>f("div",{class:K},[o[e.key]?f("span",null,[f("a",{onClick:()=>{(e=>{const a=i.value.find((a=>e===a.key));a&&(Object.keys(a).forEach((t=>{a[t]=o[e][t]})),delete o[e])})(e.key)}},[j("保存")]),f("a",{onClick:()=>{var a;a=e.key,delete o[a]}},[j("取消")])]):f("span",null,[f("a",{onClick:()=>{var a;a=e.key,o[a]=P(i.value.filter((e=>a===e.key))[0])}},[j("编辑")]),f(q,{title:"确定要删除码？",onConfirm:()=>{(e=>{const a=i.value.findIndex((a=>e===a.key));a>-1&&i.value.splice(a,1)})(e.key)}},{default:()=>[f("a",null,[j("删除")])]})])])});return w((()=>{for(let e=1;e<4;e++)r()})),()=>{let e;return f(U,null,[f(V,null,{default:()=>[f(O,{title:"高级表单"},{default:()=>[j("高级表单常见于一次性输入和提交大批量数据的场景。")]})]}),f(N,null,{default:()=>[f($,{title:"仓库管理",class:D["av-card"]},{default:()=>[f(E,{ref:l,model:a,rules:X,layout:"horizontal"},{default:()=>[f(_,null,{default:()=>[f(R,{sm:24,md:12,lg:6},{default:()=>[f(J,{label:"仓库名",name:"wareName",class:F},{default:()=>[f(B,{value:a.wareName,"onUpdate:value":e=>a.wareName=e,placeholder:"请输入仓库名称"},null)]})]}),f(R,{sm:24,md:12,lg:8},{default:()=>[f(J,{label:"仓库域名",name:"wareUrl",class:F},{default:()=>[f(B,{value:a.wareUrl,"onUpdate:value":e=>a.wareUrl=e,placeholder:"请输入","addon-before":"Http://","addon-after":".com"},null)]})]}),f(R,{sm:24,md:24,lg:10,xl:{span:9,offset:1}},{default:()=>[f(J,{label:"仓库管理员",name:"wareManager",class:F},{default:()=>[f(H,{value:a.wareManager,"onUpdate:value":e=>a.wareManager=e,placeholder:"请选择管理员"},{default:()=>[f(Q,{value:"dijia"},{default:()=>[j("迪迦")]}),f(Q,{value:"tailuo"},{default:()=>[j("泰罗")]}),f(Q,{value:"aidi"},{default:()=>[j("艾迪")]})]})]})]})]}),f(_,null,{default:()=>[f(R,{sm:24,md:12,lg:6},{default:()=>[f(J,{label:"审批人",name:"wareApprover",class:F},{default:()=>[f(H,{value:a.wareApprover,"onUpdate:value":e=>a.wareApprover=e,placeholder:"请选择审批员"},{default:()=>[f(Q,{value:"dijia"},{default:()=>[j("左菲")]}),f(Q,{value:"aisi"},{default:()=>[j("艾斯")]}),f(Q,{value:"aidi"},{default:()=>[j("赛文")]})]})]})]}),f(R,{sm:24,md:12,lg:8},{default:()=>[f(J,{label:"生效日期",name:"wareEffectDate",class:F},{default:()=>[f(W,{value:a.wareEffectDate,"onUpdate:value":e=>a.wareEffectDate=e,style:{width:"100%"}},null)]})]}),f(R,{sm:24,md:24,lg:10,xl:{span:9,offset:1}},{default:()=>[f(J,{label:"仓库类型",name:"wareType",class:F},{default:()=>[f(H,{value:a.wareType,"onUpdate:value":e=>a.wareType=e,placeholder:"请选择仓库类型"},{default:()=>[f(Q,{value:"public"},{default:()=>[j("公开")]}),f(Q,{value:"private"},{default:()=>[j("私密")]})]})]})]})]})]})]}),f($,{title:"任务管理",class:D["av-card"]},{default:()=>[f(E,{ref:s,model:t,rules:Y,layout:"horizontal"},{default:()=>[f(_,null,{default:()=>[f(R,{sm:24,md:12,lg:6},{default:()=>[f(J,{label:"任务名",name:"taskName",class:F},{default:()=>[f(B,{value:t.taskName,"onUpdate:value":e=>t.taskName=e,placeholder:"请输入任务名称"},null)]})]}),f(R,{sm:24,md:12,lg:8},{default:()=>[f(J,{label:"任务描述",name:"taskDesc",class:F},{default:()=>[f(B,{value:t.taskDesc,"onUpdate:value":e=>t.taskDesc=e,placeholder:"请输入任务描述"},null)]})]}),f(R,{sm:24,md:24,lg:10,xl:{span:9,offset:1}},{default:()=>[f(J,{label:"执行人",name:"taskExecutor",class:F},{default:()=>[f(H,{value:t.taskExecutor,"onUpdate:value":e=>t.taskExecutor=e,placeholder:"请选择执行人"},{default:()=>[f(Q,{value:"dijia"},{default:()=>[j("迪迦")]}),f(Q,{value:"tailuo"},{default:()=>[j("泰罗")]}),f(Q,{value:"aidi"},{default:()=>[j("艾迪")]})]})]})]})]}),f(_,null,{default:()=>[f(R,{sm:24,md:12,lg:6},{default:()=>[f(J,{label:"责任人",name:"taskResponser",class:F},{default:()=>[f(H,{value:t.taskResponser,"onUpdate:value":e=>t.taskResponser=e,placeholder:"请选择责任人"},{default:()=>[f(Q,{value:"dijia"},{default:()=>[j("左菲")]}),f(Q,{value:"aisi"},{default:()=>[j("艾斯")]}),f(Q,{value:"aidi"},{default:()=>[j("赛文")]})]})]})]}),f(R,{sm:24,md:12,lg:8},{default:()=>[f(J,{label:"提醒时间",name:"taskNotifactionDate",class:F},{default:()=>[f(I,{value:t.taskNotifactionDate,"onUpdate:value":e=>t.taskNotifactionDate=e,style:{width:"100%"}},null)]})]}),f(R,{sm:24,md:24,lg:10,xl:{span:9,offset:1}},{default:()=>[f(J,{label:"任务类型",name:"taskType",class:F},{default:()=>[f(H,{value:t.taskType,"onUpdate:value":e=>t.taskType=e,placeholder:"请选择任务类型"},{default:()=>[f(Q,{value:"regular"},{default:()=>[j("定期执行")]}),f(Q,{value:"cycle"},{default:()=>[j("周期执行")]})]})]})]})]})]})]}),f($,{title:"成员管理",class:D["av-card"],style:"margin-bottom:45px"},{default:()=>{return[f(A,{rowKey:"no",columns:Z,"data-source":i.value,pagination:!1},(a=e=u(),"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!C(a)?e:{default:()=>[e]})),f(v,{type:"dashed",style:"width: 100%;margin-top:10px",onClick:r},{default:()=>[f(T,null,null),j("新增成员")]})];var a}}),f("div",{class:L},[f("div",{class:G},null),f("div",null,[f(v,{type:"primary"},{default:()=>[j("提交")]})])])]})])}}});export default ee;
