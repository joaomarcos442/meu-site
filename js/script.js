window.onload = function(){

let savedTheme = localStorage.getItem("theme") || "dark"

document.documentElement.classList.remove("dark","light")

document.documentElement.classList.add(savedTheme)

let btn = document.getElementById("themeBtn")

if(btn){
btn.innerText = savedTheme === "dark" ? "🌙" : "☀️"
}

/* FORMULÁRIO */

let form = document.getElementById("contactForm")

if(form){

form.addEventListener("submit", function(event){

event.preventDefault()

let nome = document.getElementById("nome").value.trim()
let email = document.getElementById("email").value.trim()
let mensagem = document.getElementById("mensagem").value.trim()

let status = document.getElementById("statusMensagem")

if(nome === "" || email === "" || mensagem === ""){

status.innerText = "Preencha todos os campos antes de enviar."
status.style.color = "red"

return

}

status.innerText = "Mensagem enviada com sucesso!"
status.style.color = "#38bdf8"

form.reset()

})

}

}

function toggleTheme(){

let html = document.documentElement
let btn = document.getElementById("themeBtn")

if(html.classList.contains("dark")){

html.classList.remove("dark")
html.classList.add("light")
localStorage.setItem("theme","light")
btn.innerText="☀️"

}else{

html.classList.remove("light")
html.classList.add("dark")
localStorage.setItem("theme","dark")
btn.innerText="🌙"

}

}
