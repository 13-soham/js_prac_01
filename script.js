var btn = document.querySelector("button");
var para = document.querySelector("p");

btn.addEventListener("click", ()=>{
    btn.textContent = "Clicked";
    para.textContent = "bhole baba par karega, magal murti par karega, aayein !?";
});