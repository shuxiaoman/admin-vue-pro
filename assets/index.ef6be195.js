import{_ as o}from"./lodash.e651a1dc.js";import{a as r}from"./Content.f5575f33.js";import{d as e,l as t,E as a,i as s}from"./vendor.13fa0854.js";import{m as n}from"./index.fa6786fd.js";import{C as i}from"./Card.4aabf5b7.js";import"./debounce.7c4b284f.js";import"./createChainedFunction.2d5d7d53.js";import"./ExclamationCircleFilled.5fde2de7.js";import"./CloseCircleFilled.b1621eba.js";import"./LoadingOutlined.13f3bbc7.js";import"./index.cc37a535.js";import"./tabs.b235e8bb.js";import"./LeftOutlined.55549e0c.js";import"./Col.74b7851b.js";var d,l,m="_container_6zp9o_1",c="_cell_6zp9o_8";(l=d||(d={})).UP="ArrowUp",l.DOWN="ArrowDown",l.LEFT="ArrowLeft",l.RIGHT="ArrowRight";const f=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],p=[2,2,2,2,2,4,4,4];var u=e({setup(){const e=t([...f]);return a((()=>{document.onkeydown=o=>{o.code,d.UP},(()=>{const r=(o=>{const r=[];return o.forEach(((o,e)=>{o.forEach(((o,t)=>{o||r.push([t,e])}))})),r})(e.value);if(0===r.length)return void n.error("游戏结束");const[t,a]=r[o.random(0,r.length-1)],s=p[o.random(0,p.length-1)];e.value[a][t]=s})()})),()=>s(r,null,{default:()=>[s(i,null,{default:()=>{return[s("div",{class:m},[(o=e.value,o.map(((o,r)=>o.map(((o,e)=>s("div",{key:`${e}-${r}`,class:c},[o||""]))))))])];var o}})]})}});export{u as default};