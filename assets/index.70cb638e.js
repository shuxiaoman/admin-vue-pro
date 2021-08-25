import{P as e,a as l}from"./Content.f115bc1c.js";import{i as t,m as a,d as r,u as i,q as u,j as n,F as d,C as o}from"./vendor.6f72d5fc.js";import{E as f}from"./EllipsisOutlined.78e82d0a.js";import{I as s,ap as m}from"./debounce.53224f53.js";import{B as p}from"./button.a72499c7.js";import{A as b}from"./index.d9397ec7.js";import{D as c}from"./index.0b0facf1.js";import{C as j}from"./Card.e20ada17.js";import{S as v}from"./index.96e76388.js";import{D as y}from"./index.99324301.js";import{T as g}from"./tabs.d659d406.js";import"./wave.fd760b9f.js";import"./_Set.00542764.js";import"./_setToArray.9043b94f.js";import"./LoadingOutlined.fc56fea6.js";import"./index.570620f8.js";import"./Avatar.58f4cd7b.js";import"./useBreakpoint.69150a26.js";import"./useSize.a8cdded3.js";import"./Menu.22711739.js";import"./Trigger.453d690e.js";import"./index.b2c4bfdc.js";import"./index.79ea523d.js";import"./LeftOutlined.de4386ac.js";import"./transButton.789181f2.js";import"./index.4b1d61e3.js";import"./Col.d7314daf.js";import"./initDefaultProps.e3db526a.js";import"./CheckOutlined.ea314fd5.js";var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z"}}]},name:"dingding",theme:"outlined"};function I(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}var O=function(e,l){var r=function(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?Object(arguments[l]):{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(l){I(e,l,t[l])}))}return e}({},e,l.attrs);return t(s,a(r,{icon:x}),null)};function S(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!o(e)}O.displayName="DingdingOutlined",O.inheritAttrs=!1;var h=r({setup(){const a=i(),r=u([{id:"creator",label:"创建人",value:"高斯奥特曼"},{id:"product",label:"订购产品",value:"打怪兽业务"},{id:"creatTime",label:"创建时间",value:"1962-03-02"},{id:"relateDoc",label:"关联单据",value:"12421"},{id:"effectDate",label:"生效日期",value:"1832-01-01 ~ 2012-11-11"},{id:"remark",label:"备注",value:"请尽快确认"},{id:"state",label:"状态",value:"待审批"},{id:"orderAmount",label:"订单金额",value:"210.21¥"}]),o=u([{id:"userName",label:"用户姓名",value:"奥特之王"},{id:"vipId",label:"会员卡号",value:"79872938479129239"},{id:"idCard",label:"身份证",value:"3213123913919312"},{id:"tel",label:"联系方式",value:"13112312312"},{id:"address",label:"联系地址",value:"M78星云-红色巨星"}]),s=t(d,null,[t(p.Group,{style:"margin-right:4px"},{default:()=>[t(p,null,{default:()=>[n("操作")]}),t(p,null,{default:()=>[n("操作")]}),t(p,null,{default:()=>[t(f,null,null)]})]}),t(p,{type:"primary"},{default:()=>[n("主操作")]})]),x=t(g,{activeKey:"1"},{default:()=>[t(g.TabPane,{key:"1",tab:"详情"},null),t(g.TabPane,{key:"2",tab:"规则"},null)]});return()=>{let i,u;return t(d,null,[t(e,null,{default:()=>[t(b,{title:"单号：21313221",extra:s,footer:x},{default:()=>[t(c,{title:"退款申请"},S(i=r.map((e=>t(c.Item,{label:e.label},{default:()=>["relateDoc"===e.id?t("a",null,[e.value]):e.value]}))))?i:{default:()=>[i]})]})]}),t(l,null,{default:()=>[t(j,{title:"流程进度"},{default:()=>[t(v,{progressDot:!0,direction:a.state.layout.isMobile?"vertical":"horizontal",current:1},{default:()=>[t(v.Step,{title:"创建项目",description:()=>t(d,null,[n("梦比优斯奥特曼"),t(O,{style:"margin-left:8px"},null),t("div",null,[n("2016-12-12 12:32")])])},null),t(v.Step,{title:"部门初审",description:()=>t(d,null,[n("雷欧奥特曼"),t(O,{style:"color: rgb(0, 160, 233); margin-left: 8px;"},null),t("div",null,[t("a",null,[n("催一下")])])])},null),t(v.Step,{title:"财务复核"},null),t(v.Step,{title:"完成"},null)]})]}),t(j,{title:"用户信息",style:"margin-top:24px"},{default:()=>[t(c,null,S(u=o.map((e=>t(c.Item,{label:e.label},{default:()=>[e.value]}))))?u:{default:()=>[u]}),t(c,{title:"信息组"},{default:()=>[t(c.Item,{label:"某数据"},{default:()=>[n("312")]}),t(c.Item,{label:"更新时间"},{default:()=>[n("2020-01-01")]}),t(c.Item,{label:"更新人"},{default:()=>[n("察克奥特曼")]}),t(c.Item,{label:"位置"},{default:()=>[n("尖沙咀")]})]}),t(j,{bordered:!0,title:"多层信息组",type:"inner"},{default:()=>[t(c,{title:"组名称"},{default:()=>[t(c.Item,{label:"负责人"},{default:()=>[n("尤莉安")]}),t(c.Item,{label:"角色码"},{default:()=>[n("1236543")]}),t(c.Item,{label:"部门"},{default:()=>[n("xx公司-yy部门")]}),t(c.Item,{label:"过期时间"},{default:()=>[n("2010-01-10")]}),t(c.Item,{label:"描述"},{default:()=>[n("奥特之星的公主，爱迪奥特曼的青梅竹马。被加尔坦大王追赶而来到了地球。")]})]}),t(y,null,null),t(c,{title:"组名称"},{default:()=>[t(c.Item,{label:"经历"},{default:()=>[n("奥特之星的公主，爱迪奥特曼的青梅竹马。被加尔坦大王追赶而来到了地球。以轻盈的动作玩弄敌人，与爱迪共同作战，但本来不是战士。在地球上的身姿是ＵＧＭ的星凉子准队员")]})]}),t(y,null,null),t(c,{title:"组名称"},{default:()=>[t(c.Item,{label:"负责人"},{default:()=>[n("基托奥特曼")]}),t(c.Item,{label:"出生地"},{default:()=>[n("Z95星云·闪光之国")]})]})]})]}),t(j,{title:"半年消灭怪兽记录",style:"margin-top:24px"},{default:()=>[t(m,null,null)]}),t(j,{title:"日志记录",style:"margin-top:24px"},{default:()=>[t(m,null,null)]})]})])}}});export default h;
