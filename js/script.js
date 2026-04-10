window.onload = function(){

let savedTheme = localStorage.getItem("theme") || "dark";

document.documentElement.classList.remove("dark","light");

document.documentElement.classList.add(savedTheme);

let btn = document.getElementById("themeBtn");

if(btn){
btn.innerText = savedTheme === "dark" ? "🌙" : "☀️";
}

}

function toggleTheme(){

let html = document.documentElement;

let btn = document.getElementById("themeBtn");

if(html.classList.contains("dark")){

html.classList.replace("dark","light");

localStorage.setItem("theme","light");

btn.innerText="☀️";

}else{

html.classList.replace("light","dark");

localStorage.setItem("theme","dark");

btn.innerText="🌙";

}

}
