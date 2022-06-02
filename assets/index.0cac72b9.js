import{P as B,a as y}from"./Content.04b38a87.js";import{a as u,d as O,u as I,f as C,b as t,F as p,s as S}from"./index.e1409c94.js";import{A as x,aq as g}from"./debounce.63695ae7.js";import{B as d}from"./button.6a459199.js";import{E as P}from"./EllipsisOutlined.90a80699.js";import{A as h}from"./index.9b3d4d87.js";import{D as e}from"./index.9c5644c5.js";import{C as m}from"./Card.72d41c0d.js";import{S as f}from"./index.f44a1c5b.js";import{D as v}from"./index.992e36e9.js";import{T as c}from"./tabs.e87a6b5b.js";import"./wave.af64de9e.js";import"./_Set.ed75c1de.js";import"./_setToArray.0ddff03f.js";import"./LoadingOutlined.3103cde2.js";import"./index.a46ebb6b.js";import"./Avatar.1434461f.js";import"./useBreakpoint.256f6e5f.js";import"./useSize.9fcd18e3.js";import"./Menu.fb13f539.js";import"./Trigger.7768cff1.js";import"./index.66957e12.js";import"./index.7b952c9e.js";import"./LeftOutlined.38c21891.js";import"./transButton.aaf2b8f0.js";import"./index.580754a0.js";import"./Col.8566bedb.js";import"./initDefaultProps.5e2544d9.js";import"./CheckOutlined.de965fe7.js";var T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z"}}]},name:"dingding",theme:"outlined"},j=T;function E(l){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?Object(arguments[a]):{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),i.forEach(function(o){N(l,o,r[o])})}return l}function N(l,a,r){return a in l?Object.defineProperty(l,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):l[a]=r,l}var b=function(a,r){var i=E({},a,r.attrs);return u(x,E({},i,{icon:j}),null)};b.displayName="DingdingOutlined";b.inheritAttrs=!1;var A=b;function D(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!S(l)}var du=O({setup(){const l=I(),a=C([{id:"creator",label:"\u521B\u5EFA\u4EBA",value:"\u9AD8\u65AF\u5965\u7279\u66FC"},{id:"product",label:"\u8BA2\u8D2D\u4EA7\u54C1",value:"\u6253\u602A\u517D\u4E1A\u52A1"},{id:"creatTime",label:"\u521B\u5EFA\u65F6\u95F4",value:"1962-03-02"},{id:"relateDoc",label:"\u5173\u8054\u5355\u636E",value:"12421"},{id:"effectDate",label:"\u751F\u6548\u65E5\u671F",value:"1832-01-01 ~ 2012-11-11"},{id:"remark",label:"\u5907\u6CE8",value:"\u8BF7\u5C3D\u5FEB\u786E\u8BA4"},{id:"state",label:"\u72B6\u6001",value:"\u5F85\u5BA1\u6279"},{id:"orderAmount",label:"\u8BA2\u5355\u91D1\u989D",value:"210.21\xA5"}]),r=C([{id:"userName",label:"\u7528\u6237\u59D3\u540D",value:"\u5965\u7279\u4E4B\u738B"},{id:"vipId",label:"\u4F1A\u5458\u5361\u53F7",value:"79872938479129239"},{id:"idCard",label:"\u8EAB\u4EFD\u8BC1",value:"3213123913919312"},{id:"tel",label:"\u8054\u7CFB\u65B9\u5F0F",value:"13112312312"},{id:"address",label:"\u8054\u7CFB\u5730\u5740",value:"M78\u661F\u4E91-\u7EA2\u8272\u5DE8\u661F"}]),i=u(p,null,[u(d.Group,{style:"margin-right:4px"},{default:()=>[u(d,null,{default:()=>[t("\u64CD\u4F5C")]}),u(d,null,{default:()=>[t("\u64CD\u4F5C")]}),u(d,null,{default:()=>[u(P,null,null)]})]}),u(d,{type:"primary"},{default:()=>[t("\u4E3B\u64CD\u4F5C")]})]),o=u(c,{activeKey:"1"},{default:()=>[u(c.TabPane,{key:"1",tab:"\u8BE6\u60C5"},null),u(c.TabPane,{key:"2",tab:"\u89C4\u5219"},null)]});return()=>{let s,F;return u(p,null,[u(B,null,{default:()=>[u(h,{title:"\u5355\u53F7\uFF1A21313221",extra:i,footer:o},{default:()=>[u(e,{title:"\u9000\u6B3E\u7533\u8BF7"},D(s=a.map(n=>u(e.Item,{label:n.label},{default:()=>[n.id==="relateDoc"?u("a",null,[n.value]):n.value]})))?s:{default:()=>[s]})]})]}),u(y,null,{default:()=>[u(m,{title:"\u6D41\u7A0B\u8FDB\u5EA6"},{default:()=>[u(f,{progressDot:!0,direction:l.state.layout.isMobile?"vertical":"horizontal",current:1},{default:()=>[u(f.Step,{title:"\u521B\u5EFA\u9879\u76EE",description:()=>u(p,null,[t("\u68A6\u6BD4\u4F18\u65AF\u5965\u7279\u66FC"),u(A,{style:"margin-left:8px"},null),u("div",null,[t("2016-12-12 12:32")])])},null),u(f.Step,{title:"\u90E8\u95E8\u521D\u5BA1",description:()=>u(p,null,[t("\u96F7\u6B27\u5965\u7279\u66FC"),u(A,{style:"color: rgb(0, 160, 233); margin-left: 8px;"},null),u("div",null,[u("a",null,[t("\u50AC\u4E00\u4E0B")])])])},null),u(f.Step,{title:"\u8D22\u52A1\u590D\u6838"},null),u(f.Step,{title:"\u5B8C\u6210"},null)]})]}),u(m,{title:"\u7528\u6237\u4FE1\u606F",style:"margin-top:24px"},{default:()=>[u(e,null,D(F=r.map(n=>u(e.Item,{label:n.label},{default:()=>[n.value]})))?F:{default:()=>[F]}),u(e,{title:"\u4FE1\u606F\u7EC4"},{default:()=>[u(e.Item,{label:"\u67D0\u6570\u636E"},{default:()=>[t("312")]}),u(e.Item,{label:"\u66F4\u65B0\u65F6\u95F4"},{default:()=>[t("2020-01-01")]}),u(e.Item,{label:"\u66F4\u65B0\u4EBA"},{default:()=>[t("\u5BDF\u514B\u5965\u7279\u66FC")]}),u(e.Item,{label:"\u4F4D\u7F6E"},{default:()=>[t("\u5C16\u6C99\u5480")]})]}),u(m,{bordered:!0,title:"\u591A\u5C42\u4FE1\u606F\u7EC4",type:"inner"},{default:()=>[u(e,{title:"\u7EC4\u540D\u79F0"},{default:()=>[u(e.Item,{label:"\u8D1F\u8D23\u4EBA"},{default:()=>[t("\u5C24\u8389\u5B89")]}),u(e.Item,{label:"\u89D2\u8272\u7801"},{default:()=>[t("1236543")]}),u(e.Item,{label:"\u90E8\u95E8"},{default:()=>[t("xx\u516C\u53F8-yy\u90E8\u95E8")]}),u(e.Item,{label:"\u8FC7\u671F\u65F6\u95F4"},{default:()=>[t("2010-01-10")]}),u(e.Item,{label:"\u63CF\u8FF0"},{default:()=>[t("\u5965\u7279\u4E4B\u661F\u7684\u516C\u4E3B\uFF0C\u7231\u8FEA\u5965\u7279\u66FC\u7684\u9752\u6885\u7AF9\u9A6C\u3002\u88AB\u52A0\u5C14\u5766\u5927\u738B\u8FFD\u8D76\u800C\u6765\u5230\u4E86\u5730\u7403\u3002")]})]}),u(v,null,null),u(e,{title:"\u7EC4\u540D\u79F0"},{default:()=>[u(e.Item,{label:"\u7ECF\u5386"},{default:()=>[t("\u5965\u7279\u4E4B\u661F\u7684\u516C\u4E3B\uFF0C\u7231\u8FEA\u5965\u7279\u66FC\u7684\u9752\u6885\u7AF9\u9A6C\u3002\u88AB\u52A0\u5C14\u5766\u5927\u738B\u8FFD\u8D76\u800C\u6765\u5230\u4E86\u5730\u7403\u3002\u4EE5\u8F7B\u76C8\u7684\u52A8\u4F5C\u73A9\u5F04\u654C\u4EBA\uFF0C\u4E0E\u7231\u8FEA\u5171\u540C\u4F5C\u6218\uFF0C\u4F46\u672C\u6765\u4E0D\u662F\u6218\u58EB\u3002\u5728\u5730\u7403\u4E0A\u7684\u8EAB\u59FF\u662F\uFF35\uFF27\uFF2D\u7684\u661F\u51C9\u5B50\u51C6\u961F\u5458")]})]}),u(v,null,null),u(e,{title:"\u7EC4\u540D\u79F0"},{default:()=>[u(e.Item,{label:"\u8D1F\u8D23\u4EBA"},{default:()=>[t("\u57FA\u6258\u5965\u7279\u66FC")]}),u(e.Item,{label:"\u51FA\u751F\u5730"},{default:()=>[t("Z95\u661F\u4E91\xB7\u95EA\u5149\u4E4B\u56FD")]})]})]})]}),u(m,{title:"\u534A\u5E74\u6D88\u706D\u602A\u517D\u8BB0\u5F55",style:"margin-top:24px"},{default:()=>[u(g,null,null)]}),u(m,{title:"\u65E5\u5FD7\u8BB0\u5F55",style:"margin-top:24px"},{default:()=>[u(g,null,null)]})]})])}}});export{du as default};
