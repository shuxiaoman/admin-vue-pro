import{P as e,a as t}from"./Content.0d71ca3d.js";import{B as i}from"./Badge.1fb76e1c.js";import{C as a}from"./index.bcd08af7.js";import{D as d}from"./index.d091420a.js";import{T as r}from"./index.651a5e11.js";import{D as o}from"./index.63c18367.js";import{A as l}from"./index.da5a312a.js";import{R as s}from"./oauth.60470a4b.js";import{f as n}from"./index.3829553f.js";import{d as m,l as u,G as c,i as p,j as f,y as j,F as b}from"./vendor.d7feebf9.js";import"./toNumber.5775a339.js";import"./index.9563d230.js";import"./isNumeric.2bec345d.js";import"./colors.ce005b5d.js";import"./index.de35a10b.js";import"./debounce.284ffcec.js";import"./index.f18c0985.js";import"./Col.b85f2d2f.js";import"./shallowequal.9b9488dd.js";import"./index.791c7395.js";import"./_Uint8Array.b94435ea.js";import"./identity.d1328b1c.js";import"./index.eb409cea.js";import"./SearchOutlined.698c58ba.js";import"./raf.edade736.js";import"./Trigger.c296f716.js";import"./initDefaultProps.f4792837.js";import"./CloseCircleFilled.411ac2a4.js";import"./LoadingOutlined.926f7c5c.js";import"./CheckOutlined.dd11a829.js";import"./index.6e873003.js";import"./isMobile.69f1a0da.js";import"./toInteger.3f41bba0.js";import"./Event.c36f22c9.js";import"./get.b17584b8.js";import"./index.f9bd59fe.js";import"./dropdown.a4bd35d8.js";import"./index.bf116e58.js";import"./wave.ccb9ab60.js";import"./EllipsisOutlined.aff4ca99.js";import"./index.43b65888.js";import"./transButton.cda24ec6.js";import"./index.689c294d.js";import"./index.396e6931.js";import"./index.02e8fda9.js";import"./createChainedFunction.2d5d7d53.js";import"./ExclamationCircleFilled.d25e78d8.js";import"./CloseCircleOutlined.17243ee6.js";import"./InfoCircleOutlined.6283f567.js";import"./code.aa7872b2.js";import"./index.adc74ecd.js";import"./lodash.6027cdf2.js";function x(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}var h=m({setup(){const m=u([{id:"pickUpNo",label:"取货单号",value:""},{id:"state",label:"状态",value:""},{id:"saleNo",label:"销售单号",value:""},{id:"childNo",label:"子订单",value:""}]),j=u([{id:"name",label:"用户姓名",value:""},{id:"tel",label:"联系电话",value:""},{id:"express",label:"常用快递",value:""},{id:"address",label:"取货地址",value:""},{id:"mark",label:"备注",value:""}]),h=({text:e,record:t})=>"总计"!==t.no?e:void 0,g=u([{title:"商品编号",dataIndex:"no",width:100,customRender:({text:e})=>p("a",null,[e])},{title:"商品名称",dataIndex:"name",width:120,customRender:h},{title:"商品条码",dataIndex:"barCode",width:150,customRender:h},{title:"单价",dataIndex:"price",width:100,customRender:h},{title:"数量",dataIndex:"number",width:100,customRender:({text:e,record:t})=>"总计"!==t.no?e:p("span",{style:"color:red"},[e])},{title:"金额",dataIndex:"amount",width:100}]),w=u([{title:"时间",dataIndex:"time",width:200,customRender:({text:e})=>n(Number(e))},{title:"当前进度",dataIndex:"process",width:150},{title:"状态",dataIndex:"state",width:100,customRender:({text:e})=>p(i,{status:"完成"===e?"success":"processing",text:e},null)},{title:"操作员ID",dataIndex:"userId",width:100},{title:"耗时",dataIndex:"timeConsuming",width:100}]),v=u([]),I=u([]);return c((async()=>{const{refund:e,userInfo:t}=await async function(){return s({url:"/profile/basic",method:"POST"})}(),{list:i}=await async function(){return s({url:"/profile/basic/return-gogds",method:"POST"})}(),{list:a}=await async function(){return s({url:"/profile/basic/return-process",method:"POST"})}();m.splice(0,m.length,...m.map((t=>{const i=t;return i.value=e[t.id],i}))),j.splice(0,j.length,...j.map((e=>{const i=e;return i.value=t[e.id],i}))),v.splice(0,v.length,...i,{id:0,no:"总计",name:"",barCode:0,price:0,number:i.map((e=>e.number)).reduce(((e,t)=>e+t)),amount:i.map((e=>e.amount)).reduce(((e,t)=>e+t))}),I.splice(0,I.length,...a)})),()=>{let i,s;return p(b,null,[p(e,null,{default:()=>[p(l,null,{default:()=>[f("基础详情页")]})]}),p(t,null,{default:()=>[p(a,null,{default:()=>[p(o,{title:"退款申请"},x(i=m.map((e=>p(o.Item,{label:e.label},{default:()=>[e.value]}))))?i:{default:()=>[i]}),p(d,null,null),p(o,{title:"用户信息"},x(s=j.map((e=>p(o.Item,{label:e.label},{default:()=>[e.value]}))))?s:{default:()=>[s]}),p(d,null,null),p(r,{rowKey:"id",style:{"margin-bottom":"24px"},scroll:{x:"100%"},title:()=>"退货商品",columns:g,dataSource:v,pagination:!1},null),p(r,{rowKey:"id",style:{"margin-bottom":"24px"},scroll:{x:"100%"},title:()=>"退货进度",columns:w,dataSource:I,pagination:!1},null)]})]})])}}});export default h;