import{B as e}from"./browser-polyfill-5e752e65.js";import{p as o,q as l,A as u}from"./user-config-bc7fd4f4.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,a){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,a),a)}};const p="https://plausible.midway.run";async function g(t,a){await o(`${p}/api/event`,{method:"POST",body:{domain:"chathub.gg",name:t,url:location.href,props:a},mode:"no-cors"})}async function d(){const{source:t}=await o("https://chathub.gg/api/user/source",{credentials:"include"});g("install",{source:t,language:navigator.language})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,a){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,a),a)}};async function n(){const t=await e.tabs.query({}),a=e.runtime.getURL("app.html"),s=t.find(h=>{var c;return(c=h.url)==null?void 0:c.startsWith(a)});if(s){await e.tabs.update(s.id,{active:!0});return}const{startupPage:i}=await l(),r=i===u?"":`#/chat/${i}`;await e.tabs.create({url:`app.html${r}`})}e.action.onClicked.addListener(()=>{n()});e.runtime.onInstalled.addListener(t=>{t.reason==="install"&&(e.tabs.create({url:"app.html#/setting"}),d())});e.commands.onCommand.addListener(async t=>{t==="open-app"&&n()});