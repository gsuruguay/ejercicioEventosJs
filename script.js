const urlImg = document.getElementById("urlImg");
const inputFrase = document.getElementById("inputFrase");
const bntAgregar = document.getElementById("btnAdd")
const divContenedor = document.getElementById("contenedor");
const bntAgregarImg = document.getElementById("btnAddImg");

bntAgregar.addEventListener("click", function(){
    const nuevaCaja = document.createElement("div");
    const nuevaImg = document.createElement("img");
    const nuevaFrase = document.createElement("p");

    nuevaFrase.textContent= inputFrase.value;
    nuevaImg.src = urlImg.value;
    nuevaCaja.classList.add("caja");

    nuevaCaja.addEventListener("click", function(){
        this.classList.toggle("seleccionada");
    })    
    
    nuevaCaja.appendChild(nuevaImg);
    nuevaCaja.appendChild(nuevaFrase);
    divContenedor.appendChild(nuevaCaja);
    inputFrase.value= "";
    urlImg.value="";

});

