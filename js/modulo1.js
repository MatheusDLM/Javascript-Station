// Atv 1

function Person() {
    var address = {
        street: "Rua dos pinheiros",
        number: 1293,
        district : "Centro",
        city: "São Paulo",
        uf: "SP"
    };
    console.log('The user lives in ' + address.city + '/' + address.uf + ', in district ' + address.district, ', in street "', address.street + '"', ' with nº ' + address.number, '.');
};

Person();

// Atv 2

function Pairs(x, y) {
    for (x; x < y; x++) {
        if (x % 2 == 0) {
            console.log(x);
        }
    }
}

Pairs(32, 321); // chamando a função com os numeros x e y


// Atv 3



function haveSkill(skills) {

    var resultado = skills.indexOf("Javascript");

    if (resultado < 0) {
        console.log('False')
    } else {
        console.log('True')
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
haveSkill(skills); // true ou false


// Atv 4

function experience(year) {
    if (yearsStudy < 2) {
        console.log('Beginner')
    } else if (year > 1 && year < 4) {
        console.log('Intermediate')
    } else if (year > 3 && year < 7) {
        console.log('Advanced')
    } else if (year > 6) {
        console.log('Jedi Master')
    }
}
var yearsStudy = 3;
// De 0-1 ano: Beginner (Iniciante)
// De 1-3 anos: Intermediate (Intermediário)
// De 3-6 anos: Advanced (Avançado)
// De 7 acima: Jedi Master
experience(yearsStudy);

// Atv 5

var user = [
    {
        name: "Diego",
        hability: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Gabriel",
        hability: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

for (var i = 0; i < user.length; i++)
{
        console.log(user[i].name + " has the skills: " + user[i].hability.join());
}
