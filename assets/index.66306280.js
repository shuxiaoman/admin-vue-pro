import{c as e,m as l,I as t,d as a,u,e as n,J as r,aE as i,a as d,bJ as o,B as f,bI as s,T as b}from"./index.c93545fe.js";import{P as c,a as m}from"./Content.73cc3fc5.js";import{A as p}from"./index.6a80ee80.js";import{D as v}from"./index.44ab451a.js";import{C as y}from"./index.435c44e5.js";import{S as g}from"./index.7f221492.js";import{D as j}from"./index.deaab1a6.js";import"./vendor.60046542.js";import"./transButton.d42f3692.js";import"./Col.5dd57322.js";import"./index.61bfb0cf.js";import"./CheckOutlined.494e2305.js";var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z"}}]},name:"dingding",theme:"outlined"};function I(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}var O=function(a,u){var n=function(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?Object(arguments[l]):{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(l){I(e,l,t[l])}))}return e}({},a,u.attrs);return e(t,l(n,{icon:x}),null)};function h(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}O.displayName="DingdingOutlined",O.inheritAttrs=!1;var S=a({setup(){const l=u(),t=n([{id:"creator",label:"创建人",value:"高斯奥特曼"},{id:"product",label:"订购产品",value:"打怪兽业务"},{id:"creatTime",label:"创建时间",value:"1962-03-02"},{id:"relateDoc",label:"关联单据",value:"12421"},{id:"effectDate",label:"生效日期",value:"1832-01-01 ~ 2012-11-11"},{id:"remark",label:"备注",value:"请尽快确认"},{id:"state",label:"状态",value:"待审批"},{id:"orderAmount",label:"订单金额",value:"210.21¥"}]),a=n([{id:"userName",label:"用户姓名",value:"奥特之王"},{id:"vipId",label:"会员卡号",value:"79872938479129239"},{id:"idCard",label:"身份证",value:"3213123913919312"},{id:"tel",label:"联系方式",value:"13112312312"},{id:"address",label:"联系地址",value:"M78星云-红色巨星"}]),r=()=>e(i,null,[e(f.Group,{style:"margin-right:4px"},{default:()=>[e(f,null,{default:()=>[d("操作")]}),e(f,null,{default:()=>[d("操作")]}),e(f,null,{default:()=>[e(s,null,null)]})]}),e(f,{type:"primary"},{default:()=>[d("主操作")]})]),x=()=>e(b,{activeKey:"1"},{default:()=>[e(b.TabPane,{key:"1",tab:"详情"},null),e(b.TabPane,{key:"2",tab:"规则"},null)]});return()=>{let u,n;return e(i,null,[e(c,null,{default:()=>[e(p,{title:"单号：21313221",extra:r,footer:x},{default:()=>[e(v,{title:"退款申请"},h(u=t.map((l=>e(v.Item,{label:l.label},{default:()=>["relateDoc"===l.id?e("a",null,[l.value]):l.value]}))))?u:{default:()=>[u]})]})]}),e(m,null,{default:()=>[e(y,{title:"流程进度"},{default:()=>[e(g,{progressDot:!0,direction:l.state.layout.isMobile?"vertical":"horizontal",current:1},{default:()=>[e(g.Step,{title:"创建项目",description:()=>e(i,null,[d("梦比优斯奥特曼"),e(O,{style:"margin-left:8px"},null),e("div",null,[d("2016-12-12 12:32")])])},null),e(g.Step,{title:"部门初审",description:()=>e(i,null,[d("雷欧奥特曼"),e(O,{style:"color: rgb(0, 160, 233); margin-left: 8px;"},null),e("div",null,[e("a",null,[d("催一下")])])])},null),e(g.Step,{title:"财务复核"},null),e(g.Step,{title:"完成"},null)]})]}),e(y,{title:"用户信息",style:"margin-top:24px"},{default:()=>[e(v,null,h(n=a.map((l=>e(v.Item,{label:l.label},{default:()=>[l.value]}))))?n:{default:()=>[n]}),e(v,{title:"信息组"},{default:()=>[e(v.Item,{label:"某数据"},{default:()=>[d("312")]}),e(v.Item,{label:"更新时间"},{default:()=>[d("2020-01-01")]}),e(v.Item,{label:"更新人"},{default:()=>[d("察克奥特曼")]}),e(v.Item,{label:"位置"},{default:()=>[d("尖沙咀")]})]}),e(y,{bordered:!0,title:"多层信息组",type:"inner"},{default:()=>[e(v,{title:"组名称"},{default:()=>[e(v.Item,{label:"负责人"},{default:()=>[d("尤莉安")]}),e(v.Item,{label:"角色码"},{default:()=>[d("1236543")]}),e(v.Item,{label:"部门"},{default:()=>[d("xx公司-yy部门")]}),e(v.Item,{label:"过期时间"},{default:()=>[d("2010-01-10")]}),e(v.Item,{label:"描述"},{default:()=>[d("奥特之星的公主，爱迪奥特曼的青梅竹马。被加尔坦大王追赶而来到了地球。")]})]}),e(j,null,null),e(v,{title:"组名称"},{default:()=>[e(v.Item,{label:"经历"},{default:()=>[d("奥特之星的公主，爱迪奥特曼的青梅竹马。被加尔坦大王追赶而来到了地球。以轻盈的动作玩弄敌人，与爱迪共同作战，但本来不是战士。在地球上的身姿是ＵＧＭ的星凉子准队员")]})]}),e(j,null,null),e(v,{title:"组名称"},{default:()=>[e(v.Item,{label:"负责人"},{default:()=>[d("基托奥特曼")]}),e(v.Item,{label:"出生地"},{default:()=>[d("Z95星云·闪光之国")]})]})]})]}),e(y,{title:"半年消灭怪兽记录",style:"margin-top:24px"},{default:()=>[e(o,null,null)]}),e(y,{title:"日志记录",style:"margin-top:24px"},{default:()=>[e(o,null,null)]})]})])}}});export default S;