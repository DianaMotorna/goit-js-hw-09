let t;document.querySelector("[data-start]").addEventListener("click",(function(){const e=document.querySelector("body");t=setInterval((function(){e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3),document.querySelector("[data-start]").disabled=!0})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t),document.querySelector("[data-start]").disabled=!1}));
//# sourceMappingURL=01-color-switcher.9aec55c4.js.map