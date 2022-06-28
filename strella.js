let d = document
let contacto = d.querySelector("#contac")
let servicios = d.querySelector("#servicios")

contacto.addEventListener("click" , (e) =>{
    let contenedor = document.querySelector(".container")
    contenedor.classList.toggle("mostrar")
    
})
