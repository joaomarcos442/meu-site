function toggleTema(){

document.body.classList.toggle("dark")

}

function toggleMenu(){

let menu = document.getElementById("menu")

if(menu.style.display=="block"){
menu.style.display="none"
}else{
menu.style.display="block"
}

}

document.getElementById("ano").textContent = new Date().getFullYear()

document.getElementById("formContato").addEventListener("submit",function(e){

e.preventDefault()

let nome=document.getElementById("nome").value
let email=document.getElementById("email").value
let mensagem=document.getElementById("mensagem").value

let erro=document.getElementById("erro")

if(nome=="" || email=="" || mensagem==""){

erro.innerText="Preencha todos os campos."

}else{

erro.innerText="Mensagem enviada!"

}

})
