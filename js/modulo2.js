//question 1 and question 2
var appElement = document.querySelector("#app"); //busca a div com id='app' | get the div's id='app'

function squareClick () { //configura a ação do botão criado com uma função | setup a funcion action to button
    squareGenerate(); //função que desenha um quadrado | funcion to draw square
};

function squareGenerate() { // Gerar Quadrado // Square Generate
    var boxElement = document.createElement('div') //cria novo elemento | create a new element

    boxElement.onmouseover = function () { //adicionada a propriedade onmoseover com a execução da função para mudar a cor
        boxElement.style.backgroundColor = getRandomColor(); //mudando a cor do quadrado
    }

    boxElement.style.width = 100; // adiciona a largura 100 | set width 100
    boxElement.style.height = 100;// adiciona a altura 100 | set height 100
    boxElement.style.backgroundColor = getRandomColor(); //adiciona uma cor aleatoria | set a aleatory color

    appElement.appendChild(boxElement); //acrescenta o novo elemento a div app | apend a new element to div app
};

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// question 3

var names = ["Matheus", "Jefferson", "David"]; // cria vetor com nomes
var listElement = document.createElement('ul'); // cria ul

appElement.appendChild(listElement); // acrescenta a lista no ul

for(var i=0; i<names.length; i++){ 
    var itemtlistElement = document.createElement('li'); // cria li na ul
    itemtlistElement.appendChild(document.createTextNode(names[i])); // percorre todos os itens no vetor
    listElement.appendChild(itemtlistElement); // mostra todos os itens no vetor
};

// question 4

var input = document.querySelector("input"); //seleciona input | select input
var ul = document.querySelector("ul"); //seleciona ul | select ul
function addItem() { //função para adicionar os itens ao ul | function for add items in ul
    var text = document.createTextNode(input.value); // pega valor no input | capture value in input
    ul.appendChild(text); //acrescenta valor do input | add value of input
    var list = document.createElement("li"); // cria uma li para cada componente | create li for each component
    ul.appendChild(list); // acrescenta a li na ul | insert the li in ul
    list.appendChild(text); // mostra a ul | show the ul
    input.value = ""; // zera tudo para não ficar repetido | reset all
}