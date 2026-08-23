
const menu=document.querySelector(".menu"), nav=document.querySelector("nav");
if(menu){menu.addEventListener("click",()=>nav.classList.toggle("open"));}
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const toast=document.getElementById("toast");
document.querySelectorAll("a.placeholder").forEach(a=>a.addEventListener("click",e=>{
  if(a.getAttribute("href")==="#"){e.preventDefault();toast.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>toast.classList.remove("show"),1600)}
}));
