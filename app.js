// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// crear las variables de los amigos
let amigos = [""];
 let input = document.getElementById("amigo");
 let lista = document.getElementById("listaAmigos");
 let subirAmigo = document.getElementsByClassName("button-add");
 let nombreUnico = new Set();
 //En esta funcion agregamos y validamos los nombres a array amigos
  function agregarAmigo (){
    const nombres = input.value;
if (!nombres || !isNaN(nombres)){
    //input.value = "";
    alert("Ingrese un nombre válido")
    return;
}
    let nombreMinuscula = nombres.toLowerCase();
if (nombreUnico.has(nombreMinuscula)){
    alert("El nombre ya existe")
    input.value = "";
    return;
}
   nombreUnico.add(nombreMinuscula);
   alert(`Tu nombre: ${nombres} es válido`);
   amigos.push(nombres);
   input.value = ""; 
   input.focus();
   agregarLista();
   // console.log(nombres);
}
//En esta funcion agregamos los nombres a la lista en el html.
function agregarLista (){
    lista.innerHTML ="";
     for (let i = 0; i < amigos.length; i++){
        let nuevaLista = document.createElement("li");
        nuevaLista.textContent = amigos[i];
        lista.appendChild(nuevaLista);
}
}
function sortearAmigo (){
    const indiceAleatorio = amigos[Math.floor(Math.random() *amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (`El amigo ganador es: ${indiceAleatorio}`);
    lista.innerHTML = '';
    location.reload();
}
