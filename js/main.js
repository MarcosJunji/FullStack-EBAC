const form = document.querySelector ("#form");
const valor1 = document.querySelector ("#valor1");
const valor2 = document.querySelector ("#valor2");

form.addEventListener ("submit", (event) => {
    event.preventDefault ();

    // Verifica se a pessoa escolheu o primeiro valor
    if (valor1.value === "") {
        alert ("Por favor digite um número");
        return;
    }
    
    // Verifica se a pessoa escolheu o segundo valor
    if (valor2.value === "") {
        alert ("Por favor digite um segundo número");
        return;
    }

    //Verifica se os valores são iguais
    if (+valor2.value === +valor1.value) {
        alert ("Os valores devem ser diferentes");
        return;
    }

    // Verifica se a pessoa escolheu valor1 maior que o valor2
    if (+valor1.value > +valor2.value) {
        alert ("O valor 2 deve ser maior que o valor 1");
        return;
    } else {
        alert ("Parabéns, o valor 2 é maior que o valor 1");
    }
    

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit()
})