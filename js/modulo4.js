// Atv 1
function checkAge() { // Função para checar idade -- Function for check age
    let checkPromise = new Promise((resolve, reject) => { // Valida o resolve() que vai para o .then ou reject() que vai para o .catch -- Validate the resolve() that goes to the .then or reject() that goes to the .catch
        input = document.querySelector('input[name="age"]')  //seleciona input -- select input
        age = input.value // Diz que idade é o valor digitado no input -- age receives input value 
        input.value = "" // Limpa o input -- clean input
        if (age > 18) {  // Se idade for maior que 18, cai no resolve() -- If age is greater than 18, go to resolve()
            resolve()
        } else { // Senão reject() -- Else reject()
            reject()
        }
    })
    checkPromise.then(function () { // Checar se caiu no .then ou .catch -- Check if go to .then or .catch
        console.log("Maior que 18");
    })
        .catch(function () {
            console.log("Menor que 18");
        })
}

// Atv 2 and 3

var lista = document.querySelector('ul'); // Seleciona UL no html -- Select UL in html
var inputAtv2 = document.querySelector('input[name="user"]'); // Seleciona input com o nome "user" -- Select input with name "user"
function mostraRepositorio(repositorio) { //Função para mostrar os repositorios encontrados -- Function to display the repositories found
    lista.innerHTML = ""; // Tira a li "Carregando..." -- Delet the li "Carregando..."
    for (const i of repositorio) { // For para mostrar todos repositorios com "r" recebendo os repositorios -- For to display all repositories with "r" receiving repositories
        let texto = document.createTextNode(i.name); // texto recebe os nomes dos repositorios -- text receives the names of the repositories
        let url = document.createTextNode(i.url)
        let vazio = document.createTextNode("   URL: ")
        let liAtv2 = document.createElement('li'); // Cria uma li para cada nome -- Create one li for each name
        liAtv2.appendChild(texto); // Insere o nome dos repositorios dentro da li -- Insert the name of the repositories within the li
        liAtv2.appendChild(vazio);
        liAtv2.appendChild(url);
        lista.appendChild(liAtv2); // Insere a li dentro da ul -- Insert li within the ul
    }
}
function carregando() { // Função para aparecer a li ("Carregando...") antes de mostrar os nomes -- Function to display li ("Carregando...") before showing names
    lista.innerHTML = ""; // Apaga a lista para mostrar o "Carregando..." no topo -- Delet the list for display the "Carregando..." in top
    var textoCarregando = document.createTextNode('Carregando...'); // Cria o texto 'Carregando...' -- Create text 'Carregando...'
    var liCarregando = document.createElement('li'); // Cria li para o "Carregando..." -- Create li for the "Carregando..."
    liCarregando.appendChild(textoCarregando); // Insere o "Carregando..." na li -- Insert the "Carregando..." in li
    lista.appendChild(liCarregando); // Insere a li dentro da ul -- Insert li within the ul
}
function mostrarErro() { // Função para erros -- Function for error
    lista.innerHTML = ""; // Tira a li "Carregando..." -- Delet the li "Carregando..."
    var textoErro = document.createTextNode('Erro!'); // Cria o texto 'Erro!' -- Create text 'Erro!'
    var erro = document.createElement('li'); // Cria li para o "Erro!" -- Create li for the "Erro!"
    erro.style.color = "#F00"; // Muda a cor da letra para vermelho -- Changes the color of the letter to red
    erro.appendChild(textoErro); // Insere o "Erro!" na li -- Insert the "Erro!" in li
    lista.appendChild(erro); // Insere a li dentro da ul -- Insert li within the ul
}
function listarRepositorios() { // Função para listar os repositorios -- Function for list the repositories
    var user = inputAtv2.value; // A variavel user recebe o que foi escrito no input -- The user variable receives what was written in the input
    inputAtv2.value = '' // Limpa o input -- Clean input
    carregando(); // Carrega a função carregando() -- Call the funcion carregando()
    axios.get('https://api.github.com/users/' + user + '/repos') // Retorna as informações do github do usuario -- Return the github user information
        .then(function (repositorio) { // Verifica se o usuario foi encontrado -- Checks if user found
            mostraRepositorio(repositorio.data); // Mostra os repositorios do usuário -- Shows user repositories
        })
        .catch(function () {
            mostrarErro(); // Mostra o erro -- Show the error
        });
}


// Extra para mostrar minhas informações no console

axios.get('https://api.github.com/users/MatheusDLM/repos')
.then(function(response) {
    console.log(response);
})

.catch (function(error){
    console.warn(error);
})