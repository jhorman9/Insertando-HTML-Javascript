const contenedor = document.querySelector("#insert-content");
const lista = document.querySelector("#lista");
const btn = document.querySelector("#btn")
//const newListElement = document.createElement("li")//el elemento que creara, para meter contenido aqui de la siguiente manera

const container = document.querySelector("#container");

const cardArray = [];
const listArray = [];

//newListElement.textContent = "otro elemento";

function agregarElemento(){
    listArray.push("<li>elemento</li>")
    //lista.appendChild(newListElement);
}
const listText = listArray.join("");
lista.innerHTML = listText;
//para que pueda imprimirlo varias veces

function addCard(){
    cardArray.push(
        `<div class="card center">
        <h3>Titulo</h3>
        <p>Hola soy un parrafo</p>
        </div>`);
const textCard = cardArray.join("");//concatenar
container.innerHTML = textCard;//insertarlo al html
}

btn.addEventListener("click", addCard);//agregar el evento de la linea 21
