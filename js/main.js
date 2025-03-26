const body=document.querySelector("body");
const moon=document.querySelector(".moon");
const sun=document.querySelector(".sun");

moon.addEventListener("click",()=>{
   body.classList.add("dark")
    
})
sun.addEventListener("click",()=>{
    body.classList.remove("dark")
     
 })