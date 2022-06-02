var L=Object.defineProperty,G=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var H=(t,a,o)=>a in t?L(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,I=(t,a)=>{for(var o in a||(a={}))q.call(a,o)&&H(t,o,a[o]);if(R)for(var o of R(a))Q.call(a,o)&&H(t,o,a[o]);return t},$=(t,a)=>G(t,J(a));import{P as W,a as X}from"./Content.04b38a87.js";import{a as N}from"./style.module.a7afd161.js";import{T as Y}from"./index.1e2fd8c8.js";import{r as Z,B as ee,_ as b,P as u,G as ae,F as j,J as te,x as F,ao as O,h as le,a6 as oe}from"./debounce.63695ae7.js";import{o as ne}from"./index.9563d230.js";import{b as ie,T as se}from"./Menu.fb13f539.js";import{c as re,B as _}from"./button.6a459199.js";import"./index.7b952c9e.js";import{E as ue}from"./ExclamationCircleFilled.9f777fc4.js";import{d as z,k as de,a as e,f as B,r as D,x as fe,b as i,s as ce,F as me,K as pe}from"./index.e1409c94.js";import{A as ve}from"./index.9b3d4d87.js";import{C as A}from"./Card.72d41c0d.js";import{F as V}from"./Form.ccdeba7a.js";import{R as T,C as f}from"./index.580754a0.js";import{I as x}from"./Input.db60bf9c.js";import{a as g}from"./index.b893f673.js";import{D as M}from"./index.670df3ef.js";import{P as be}from"./tabs.e87a6b5b.js";import"./SearchOutlined.52ce1b8b.js";import"./_Set.ed75c1de.js";import"./isArrayLikeObject.d4b6bd5e.js";import"./_setToArray.0ddff03f.js";import"./toInteger.37a40d04.js";import"./Trigger.7768cff1.js";import"./index.66957e12.js";import"./LeftOutlined.38c21891.js";import"./EllipsisOutlined.90a80699.js";import"./index.67508f43.js";import"./index.d547124f.js";import"./index.6ba0dd6a.js";import"./index.91886a29.js";import"./initDefaultProps.5e2544d9.js";import"./transButton.aaf2b8f0.js";import"./wave.af64de9e.js";import"./LoadingOutlined.3103cde2.js";import"./index.a46ebb6b.js";import"./Avatar.1434461f.js";import"./useBreakpoint.256f6e5f.js";import"./useSize.9fcd18e3.js";import"./Col.8566bedb.js";import"./_baseProperty.74f89655.js";import"./CloseCircleFilled.4dc39271.js";import"./CheckOutlined.de965fe7.js";import"./createChainedFunction.2d5d7d53.js";import"./index.f1aa3e87.js";var S=ie(),he=z({name:"APopconfirm",mixins:[ee],props:b(b({},S),{prefixCls:u.string,transitionName:u.string.def("zoom-big"),content:u.any,title:u.any,trigger:S.trigger.def("click"),okType:{type:String,default:"primary"},disabled:u.looseBool.def(!1),okText:u.any,cancelText:u.any,icon:u.any,okButtonProps:u.object,cancelButtonProps:u.object,onConfirm:u.func,onCancel:u.func,onVisibleChange:u.func}),emits:["update:visible","confirm","cancel","visibleChange"],setup:function(){return{configProvider:de("configProvider",ae)}},data:function(){var a=j(this),o={sVisible:!1};return"visible"in a&&(o.sVisible=a.visible),"defaultVisible"in a&&(o.sVisible=a.defaultVisible),o},watch:{visible:function(a){this.sVisible=a}},methods:{onConfirmHandle:function(a){this.setVisible(!1,a),this.$emit("confirm",a)},onCancelHandle:function(a){this.setVisible(!1,a),this.$emit("cancel",a)},onVisibleChangeHandle:function(a){var o=this.$props.disabled;o||this.setVisible(a)},setVisible:function(a,o){te(this,"visible")||this.setState({sVisible:a}),this.$emit("update:visible",a),this.$emit("visibleChange",a,o)},getPopupDomNode:function(){return this.$refs.tooltip.getPopupDomNode()},renderOverlay:function(a,o){var h=this,m=this.okType,d=this.okButtonProps,p=this.cancelButtonProps,k=F(this,"icon")||e(ue,null,null),y=O(b({size:"small",onClick:this.onCancelHandle},p)),C=O(b(b(b({},re(m)),{size:"small",onClick:this.onConfirmHandle}),d));return e("div",{class:"".concat(a,"-inner-content")},[e("div",{class:"".concat(a,"-message")},[k,e("div",{class:"".concat(a,"-message-title")},[F(this,"title")])]),e("div",{class:"".concat(a,"-buttons")},[e(_,y,{default:function(){return[F(h,"cancelText")||o.cancelText]}}),e(_,C,{default:function(){return[F(h,"okText")||o.okText]}})])])}},render:function(){var a=this,o,h=j(this),m=h.prefixCls,d=this.configProvider.getPrefixCls,p=d("popover",m),k=ne(h,["title","content","cancelText","okText","onUpdate:visible"]),y=e(oe,{componentName:"Popconfirm",defaultLocale:le.Popconfirm,children:function(P){return a.renderOverlay(p,P)}},null),C=b(b({},k),{title:y,prefixCls:p,visible:this.sVisible,ref:"tooltip",onVisibleChange:this.onVisibleChangeHandle});return e(se,C,{default:function(){return[(o=a.$slots)===null||o===void 0?void 0:o.default()]}})}}),ge=Z(he),r={"advanced-form":"_advanced-form_mbvk7_1","editable-row-operations":"_editable-row-operations_mbvk7_7","footer-bar":"_footer-bar_mbvk7_10","footer-bar-left":"_footer-bar-left_mbvk7_25"};function ke(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ce(t)}const{Item:c}=V,{Option:s}=g,{RangePicker:ye}=M,Ce={},we={},xe=[{title:"name",dataIndex:"name",width:100,slots:{customRender:"name"}},{title:"\u5DE5\u53F7",dataIndex:"no",width:100,slots:{customRender:"no"}},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"org",width:100,slots:{customRender:"org"}},{title:"operation",dataIndex:"operation",fixed:"right",width:120,slots:{customRender:"operation"}}];var ba=z({setup(){const t=B({wareName:void 0,wareUrl:void 0,wareManager:void 0,wareApprover:void 0,wareEffectDate:void 0,wareType:void 0}),a=B({taskName:void 0,taskDesc:void 0,taskExecutor:void 0,taskResponser:void 0,taskNotifactionDate:void 0,taskType:void 0}),o=D(void 0),h=D(void 0),m=D([]),d=B({}),p=D(0),k=n=>{d[n]=pe(m.value.filter(l=>n===l.key)[0])},y=n=>{const l=m.value.find(v=>n===v.key);l&&(Object.keys(l).forEach(E=>{l[E]=d[n][E]}),delete d[n])},C=n=>{delete d[n]},w=n=>{const l=m.value.findIndex(v=>n===v.key);l>-1&&m.value.splice(l,1)},P=()=>{m.value.push({key:`key-${p.value}`,name:`name-${p.value}`,no:`${p.value}\u53F7`,org:`\u90E8\u95E8${p.value}\u53F7`}),p.value+=1},U={};["name","no","org"].forEach(n=>{U[n]=({text:l,record:v})=>e("div",null,[d[v.key]?e(x,{value:d[v.key][n],"onUpdate:value":E=>d[v.key][n]=E,style:"margin: -5px 0"},null):e("span",null,[l])])});const K=()=>$(I({},U),{operation({record:n}){return e("div",{class:r["editable-row-operations"]},[d[n.key]?e("span",null,[e("a",{onClick:()=>{y(n.key)}},[i("\u4FDD\u5B58")]),e("a",{onClick:()=>{C(n.key)}},[i("\u53D6\u6D88")])]):e("span",null,[e("a",{onClick:()=>{k(n.key)}},[i("\u7F16\u8F91")]),e(ge,{title:"\u786E\u5B9A\u8981\u5220\u9664\u7801\uFF1F",onConfirm:()=>{w(n.key)}},{default:()=>[e("a",null,[i("\u5220\u9664")])]})])])}});return fe(()=>{for(let n=1;n<4;n++)P()}),()=>{let n;return e(me,null,[e(W,null,{default:()=>[e(ve,{title:"\u9AD8\u7EA7\u8868\u5355"},{default:()=>[i("\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002")]})]}),e(X,null,{default:()=>[e(A,{title:"\u4ED3\u5E93\u7BA1\u7406",class:N["av-card"]},{default:()=>[e(V,{ref:o,model:t,rules:Ce,layout:"horizontal"},{default:()=>[e(T,null,{default:()=>[e(f,{sm:24,md:12,lg:6},{default:()=>[e(c,{label:"\u4ED3\u5E93\u540D",name:"wareName",class:r["advanced-form"]},{default:()=>[e(x,{value:t.wareName,"onUpdate:value":l=>t.wareName=l,placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"},null)]})]}),e(f,{sm:24,md:12,lg:8},{default:()=>[e(c,{label:"\u4ED3\u5E93\u57DF\u540D",name:"wareUrl",class:r["advanced-form"]},{default:()=>[e(x,{value:t.wareUrl,"onUpdate:value":l=>t.wareUrl=l,placeholder:"\u8BF7\u8F93\u5165","addon-before":"Http://","addon-after":".com"},null)]})]}),e(f,{sm:24,md:24,lg:10,xl:{span:9,offset:1}},{default:()=>[e(c,{label:"\u4ED3\u5E93\u7BA1\u7406\u5458",name:"wareManager",class:r["advanced-form"]},{default:()=>[e(g,{value:t.wareManager,"onUpdate:value":l=>t.wareManager=l,placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"},{default:()=>[e(s,{value:"dijia"},{default:()=>[i("\u8FEA\u8FE6")]}),e(s,{value:"tailuo"},{default:()=>[i("\u6CF0\u7F57")]}),e(s,{value:"aidi"},{default:()=>[i("\u827E\u8FEA")]})]})]})]})]}),e(T,null,{default:()=>[e(f,{sm:24,md:12,lg:6},{default:()=>[e(c,{label:"\u5BA1\u6279\u4EBA",name:"wareApprover",class:r["advanced-form"]},{default:()=>[e(g,{value:t.wareApprover,"onUpdate:value":l=>t.wareApprover=l,placeholder:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"},{default:()=>[e(s,{value:"dijia"},{default:()=>[i("\u5DE6\u83F2")]}),e(s,{value:"aisi"},{default:()=>[i("\u827E\u65AF")]}),e(s,{value:"aidi"},{default:()=>[i("\u8D5B\u6587")]})]})]})]}),e(f,{sm:24,md:12,lg:8},{default:()=>[e(c,{label:"\u751F\u6548\u65E5\u671F",name:"wareEffectDate",class:r["advanced-form"]},{default:()=>[e(ye,{value:t.wareEffectDate,"onUpdate:value":l=>t.wareEffectDate=l,style:{width:"100%"}},null)]})]}),e(f,{sm:24,md:24,lg:10,xl:{span:9,offset:1}},{default:()=>[e(c,{label:"\u4ED3\u5E93\u7C7B\u578B",name:"wareType",class:r["advanced-form"]},{default:()=>[e(g,{value:t.wareType,"onUpdate:value":l=>t.wareType=l,placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"},{default:()=>[e(s,{value:"public"},{default:()=>[i("\u516C\u5F00")]}),e(s,{value:"private"},{default:()=>[i("\u79C1\u5BC6")]})]})]})]})]})]})]}),e(A,{title:"\u4EFB\u52A1\u7BA1\u7406",class:N["av-card"]},{default:()=>[e(V,{ref:h,model:a,rules:we,layout:"horizontal"},{default:()=>[e(T,null,{default:()=>[e(f,{sm:24,md:12,lg:6},{default:()=>[e(c,{label:"\u4EFB\u52A1\u540D",name:"taskName",class:r["advanced-form"]},{default:()=>[e(x,{value:a.taskName,"onUpdate:value":l=>a.taskName=l,placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"},null)]})]}),e(f,{sm:24,md:12,lg:8},{default:()=>[e(c,{label:"\u4EFB\u52A1\u63CF\u8FF0",name:"taskDesc",class:r["advanced-form"]},{default:()=>[e(x,{value:a.taskDesc,"onUpdate:value":l=>a.taskDesc=l,placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u63CF\u8FF0"},null)]})]}),e(f,{sm:24,md:24,lg:10,xl:{span:9,offset:1}},{default:()=>[e(c,{label:"\u6267\u884C\u4EBA",name:"taskExecutor",class:r["advanced-form"]},{default:()=>[e(g,{value:a.taskExecutor,"onUpdate:value":l=>a.taskExecutor=l,placeholder:"\u8BF7\u9009\u62E9\u6267\u884C\u4EBA"},{default:()=>[e(s,{value:"dijia"},{default:()=>[i("\u8FEA\u8FE6")]}),e(s,{value:"tailuo"},{default:()=>[i("\u6CF0\u7F57")]}),e(s,{value:"aidi"},{default:()=>[i("\u827E\u8FEA")]})]})]})]})]}),e(T,null,{default:()=>[e(f,{sm:24,md:12,lg:6},{default:()=>[e(c,{label:"\u8D23\u4EFB\u4EBA",name:"taskResponser",class:r["advanced-form"]},{default:()=>[e(g,{value:a.taskResponser,"onUpdate:value":l=>a.taskResponser=l,placeholder:"\u8BF7\u9009\u62E9\u8D23\u4EFB\u4EBA"},{default:()=>[e(s,{value:"dijia"},{default:()=>[i("\u5DE6\u83F2")]}),e(s,{value:"aisi"},{default:()=>[i("\u827E\u65AF")]}),e(s,{value:"aidi"},{default:()=>[i("\u8D5B\u6587")]})]})]})]}),e(f,{sm:24,md:12,lg:8},{default:()=>[e(c,{label:"\u63D0\u9192\u65F6\u95F4",name:"taskNotifactionDate",class:r["advanced-form"]},{default:()=>[e(M,{value:a.taskNotifactionDate,"onUpdate:value":l=>a.taskNotifactionDate=l,style:{width:"100%"}},null)]})]}),e(f,{sm:24,md:24,lg:10,xl:{span:9,offset:1}},{default:()=>[e(c,{label:"\u4EFB\u52A1\u7C7B\u578B",name:"taskType",class:r["advanced-form"]},{default:()=>[e(g,{value:a.taskType,"onUpdate:value":l=>a.taskType=l,placeholder:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u7C7B\u578B"},{default:()=>[e(s,{value:"regular"},{default:()=>[i("\u5B9A\u671F\u6267\u884C")]}),e(s,{value:"cycle"},{default:()=>[i("\u5468\u671F\u6267\u884C")]})]})]})]})]})]})]}),e(A,{title:"\u6210\u5458\u7BA1\u7406",class:N["av-card"],style:"margin-bottom:45px"},{default:()=>[e(Y,{rowKey:"no",columns:xe,"data-source":m.value,pagination:!1,scroll:{x:"100%"}},ke(n=K())?n:{default:()=>[n]}),e(_,{type:"dashed",style:"width: 100%;margin-top:10px",onClick:P},{default:()=>[e(be,null,null),i("\u65B0\u589E\u6210\u5458")]})]}),e("div",{class:r["footer-bar"]},[e("div",{class:r["footer-bar-left"]},null),e("div",null,[e(_,{type:"primary"},{default:()=>[i("\u63D0\u4EA4")]})])])]})])}}});export{ba as default};
