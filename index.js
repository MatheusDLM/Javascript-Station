// Atv 1

function Pessoa() {
    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };
    console.log('O usuario mora em ' + endereco.cidade + '/' + endereco.uf + ', no bairro ' + endereco.bairro, ', na rua " ', endereco.rua + '"', ' com nº ' + endereco.numero, '.');
};

// Pessoa();

// Atv 2

function pares(x, y) {
    for (x; x < y; x++) {
        if (x % 2 == 0) {
            console.log(x);
        }
    }
}
// pares(32, 321);


// Atv 3



function temHabilidade(skills) {

    var resultado = skills.indexOf("ReactJS");

    if (resultado < 0) {
        console.log('False')
    } else {
        console.log('True')
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
// temHabilidade(skills); // true ou false


// Atv 4

function experiencia(anos) {
    if (anosEstudo < 2) {
        console.log('Iniciante')
    } else if (anos > 1 && anos < 4) {
        console.log('Intermediario')
    } else if (anos > 3 && anos < 7) {
        console.log('Avançado')
    } else if (anos > 6) {
        console.log('Jedi Master')
    }
}
var anosEstudo = 3;
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
// experiencia(anosEstudo);

// Atv 5

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]; 






