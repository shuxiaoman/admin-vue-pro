import{d as e,p as a,q as l,i as r,j as o}from"./vendor.6f72d5fc.js";import{F as t}from"./Form.45c314c6.js";import{I as i}from"./Input.3d6d5d77.js";import{a as s}from"./index.e95576fb.js";import{B as d}from"./button.a72499c7.js";import"./debounce.53224f53.js";import"./SearchOutlined.911383eb.js";import"./_Set.00542764.js";import"./Col.d7314daf.js";import"./_setToArray.9043b94f.js";import"./isArrayLikeObject.f2926185.js";import"./_baseProperty.74f89655.js";import"./toInteger.358572ae.js";import"./ExclamationCircleFilled.e6098fac.js";import"./CloseCircleFilled.0d2049b6.js";import"./LoadingOutlined.fc56fea6.js";import"./initDefaultProps.e3db526a.js";import"./useSize.a8cdded3.js";import"./antInputDirective.093c4552.js";import"./index.9563d230.js";import"./Trigger.453d690e.js";import"./CheckOutlined.ea314fd5.js";import"./wave.fd760b9f.js";const n={sm:{span:7},lg:{span:7}},m={sm:{span:17},lg:10};var u=e({setup(){const e=a(void 0),u=l({email:"651487447@163.com",nickname:"GrainFull",profile:"",country:"zh",address:""}),p={email:[{required:!0,validator:(e,a)=>new Promise(((e,l)=>{if(!a)return void l("email is required");/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(a)?e(!0):l("邮箱格式不正确")}))}],address:[{required:!0,validator:()=>new Promise((e=>{e(!0)}))}]},c=()=>{var a,l;null==(l=null==(a=e.value)?void 0:a.validate)||l.call(a).then((()=>{console.log("values",u)})).catch((e=>{console.log("error",e)}))};return()=>r("div",null,[r(t,{ref:e,model:u,rules:p,"label-col":n,"wrapper-col":m},{default:()=>[r(t.Item,{label:"Email",name:"email"},{default:()=>[r(i,{value:u.email,"onUpdate:value":e=>u.email=e},null)]}),r(t.Item,{label:"Nickname",name:"nickname",required:!0},{default:()=>[r(i,{value:u.nickname,"onUpdate:value":e=>u.nickname=e},null)]}),r(t.Item,{label:"Personal profile",name:"profile"},{default:()=>[r(i.TextArea,{value:u.profile,"onUpdate:value":e=>u.profile=e,placeholder:"descrip yourself in some words"},null)]}),r(t.Item,{label:"Country",name:"country"},{default:()=>[r(s,{value:u.country,"onUpdate:value":e=>u.country=e},{default:()=>[r(s.Option,{value:"zh"},{default:()=>[o("中国")]})]})]}),r(t.Item,{label:"address",name:"address"},{default:()=>[r(i,{value:u.address,"onUpdate:value":e=>u.address=e},null)]}),r(t.Item,{label:" ",colon:!1},{default:()=>[r(d,{type:"primary",onClick:c},{default:()=>[o("Create")]})]})]})])}});export default u;
