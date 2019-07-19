let input = document.querySelector("input")
let button = document.querySelector("button")
let squareObject = document.querySelector("#squareObject")
let text = document.createTextNode("input.value")

function create() {
    //alert(input.value)
    square = document.createElement("div") //Criando div interna
    square.style.height = 100
    square.style.width = 100
    square.style.backgroundColor = getRandomColor()
    square.innerHTML = input.value //innerHTML = "Texto dentro da div"
    squareObject.appendChild(square) //Colocando div dentro do da div principal
    input.value = ""
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}