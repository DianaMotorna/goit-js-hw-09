function e(e,t){const o=Math.random()>.3;return new Promise(o?o=>setTimeout(o,t,{position:e,delay:t}):(o,n)=>setTimeout(n,t,{position:e,delay:t}))}document.querySelector(".form").addEventListener("submit",(async t=>{t.preventDefault();const o=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]'),i=Number(o.value),l=Number(n.value),m=Number(u.value);for(let t=1;t<=m;t++){e(t,i+(t-1)*l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.f59135f5.js.map
