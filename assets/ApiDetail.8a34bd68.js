import{P as b,a as v}from"./Content.a3f02a4b.js";import{c as C,d as y,e as I,u as O}from"./project.43fa393b.js";import{d as _,l as m,p as x,E as g,i as e,B as A,j as P,F}from"./vendor.0aef34f5.js";import{A as S}from"./index.459e5535.js";import{C as h}from"./Card.d5621784.js";import{F as i}from"./Form.210842bd.js";import{I as s}from"./Input.8b770423.js";import{a as p}from"./index.9f492c9b.js";import{B as k}from"./button.80abb62f.js";import{m as c}from"./index.75ac00a3.js";import"./oauth.a753370a.js";import"./debounce.b47df357.js";import"./CloseCircleOutlined.99fb16f4.js";import"./InfoCircleOutlined.354af1bf.js";import"./code.aa7872b2.js";import"./index.de3dd9d1.js";import"./index.06c557a8.js";import"./Avatar.2c90d7ed.js";import"./useBreakpoint.0c1d4844.js";import"./_Set.b615e6a2.js";import"./useSize.10ad6ac6.js";import"./Menu.231ac2cf.js";import"./_setToArray.e78d1c9a.js";import"./Trigger.c2d15a0a.js";import"./EllipsisOutlined.1f4e2b9f.js";import"./index.b375f5f0.js";import"./index.40f0cc85.js";import"./LeftOutlined.14b5f9c0.js";import"./transButton.11ee6a98.js";import"./index.ed5ee94f.js";import"./tabs.be0aa087.js";import"./Col.b260d2ad.js";import"./SearchOutlined.299869a2.js";import"./isArrayLikeObject.4e55706c.js";import"./_baseProperty.74f89655.js";import"./toInteger.fd7802d2.js";import"./ExclamationCircleFilled.7a9ee298.js";import"./CloseCircleFilled.4ca4922c.js";import"./LoadingOutlined.e8e7e3ee.js";import"./initDefaultProps.c0b944b7.js";import"./antInputDirective.dcf4b893.js";import"./index.9563d230.js";import"./CheckOutlined.27ffbdda.js";import"./wave.49730b57.js";import"./createChainedFunction.2d5d7d53.js";function w(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!A(o)}var xe=_({props:{id:{type:[Number],require:!1},projectId:{type:[Number],require:!1}},setup(o){const a=m({}),d=m(void 0),u=x(()=>o.id?"edit":"add"),n=m([]),j=()=>{var r;(r=d==null?void 0:d.value)==null||r.validateFields().then(()=>{u.value==="add"?(I(a.value),c.success("\u6DFB\u52A0\u6210\u529F")):u.value==="edit"&&(O(a.value),c.success("\u4FEE\u6539\u6210\u529F"))})};return g(async()=>{if(C().then(r=>{n.value=r.list}),u.value==="edit"){const r=await y({id:o.id});a.value=r}}),()=>{let r;return e(F,null,[e(b,null,{default:()=>[e(S,null,{default:()=>[o.id?"api\u8BE6\u60C5\u9875":"\u65B0\u5EFAapi"]})]}),e(v,null,{default:()=>[e(h,null,{default:()=>[e(i,{layout:"vertical",model:a.value,ref:d},{default:()=>[e(i.Item,{label:"id",name:"id"},{default:()=>[e(s,{value:a.value.id,"onUpdate:value":t=>a.value.id=t,disabled:!0},null)]}),e(i.Item,{label:"api\u63CF\u8FF0",name:"name",required:!0},{default:()=>[e(s,{value:a.value.name,"onUpdate:value":t=>a.value.name=t},null)]}),e(i.Item,{label:"\u5173\u8054\u9879\u76EE\u82F1\u6587\u540D"},{default:()=>{var t;return[e(s,{value:(t=n.value.find(l=>l.id===a.value.project_id))==null?void 0:t.code,disabled:!0},null)]}}),e(i.Item,{label:"\u5173\u8054\u9879\u76EE",name:"project_id",rules:[{type:"number"},{validator:(t,l)=>l?Promise.resolve():Promise.reject("\u8BF7\u8F93\u5165\u5173\u8054\u9879\u76EE")}]},{default:()=>[e(p,{value:a.value.project_id,"onUpdate:value":t=>a.value.project_id=t},w(r=n.value.map(t=>e(p.Option,{key:t.id,value:t.id},{default:()=>[t.name]})))?r:{default:()=>[r]})]}),e(i.Item,{label:"\u8BF7\u6C42\u8DEF\u5F84",name:"url",required:!0},{default:()=>[e(s,{value:a.value.url,"onUpdate:value":t=>a.value.url=t},null)]}),e(i.Item,{label:"mock\u6570\u636E\u7684json\u5B57\u7B26\u4E32",name:"json_str",rules:[{validator:(t,l)=>{if(!l)return Promise.reject("json\u4E32\u4E0D\u80FD\u4E3A\u7A7A");try{if(typeof JSON.parse(l)!="object")throw new Error}catch{return Promise.reject("\u8BF7\u8F93\u5165\u6B63\u786E\u7684json\u683C\u5F0F")}return Promise.resolve()}}]},{default:()=>[e(s.TextArea,{value:a.value.json_str,"onUpdate:value":t=>a.value.json_str=t,allowClear:!0,autoSize:{minRows:8}},null)]}),e(i.Item,null,{default:()=>[e(k,{type:"primary",onClick:j},{default:()=>[P("\u63D0\u4EA4")]})]})]})]})]})])}}});export{xe as default};
