function add() {
    let checkPromise = new Promise((resolve, reject) => {
        input = document.querySelector("input")
        button = document.querySelector("button")
        idade = input.value
        input.value = ""
        if (idade > 18) {
            resolve()
        } else {
            reject()
        }
    })
    checkPromise.then(function () {
        console.log("Maior que 18");
    })
        .catch(function () {
            console.log("Menor que 18");
        })
}

// atv 2

axios.get('https://api.github.com/users/MatheusDLM/repos')
.then(function(response) {
    console.log(response);
})

.catch (function(error){
    console.warn(error);
})
