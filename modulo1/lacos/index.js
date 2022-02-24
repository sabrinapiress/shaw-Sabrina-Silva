/*
1. Esta somando o valor. Vai ser impresso o valor 10. pois quando ele volta com o valor de 5,
logo depis ele soma mais 5, pois teve seu valor alterado.
mas está errada, e não sei o motivo ainda. valor 10
2.a)Ele está procurando um numeros maiores que 18. Sera impresso do 19 em diante.
b)Não entendi a pergunta.
3. *, **, ***, ****.. adiciona o numero que o usuario digita.
*/
//1.
// let numeroBichinhos = Number(prompt("Quantos animais de estimação voce tem?"))
// let nomeBicho = []
// let contador = 0 //somente se usarmos o while
// if(numeroBichinhos === 0){
//     console.log ("Que pena! Você pode adotar um pet")
// }
// else{
//    //for(let i = 0; i < numeroBichinhos; i++){
//     while(contador < numeroBichinhos){
//     let nomePet = prompt("Me fale o nome dos seus pets!")
//     nomeBicho.push(nomePet)
//     contador = contador + 1
//     //contador ++
// } 
// }
// console.log(nomeBicho)

//2.a)
let i = 0
let arrayOriginal = [8, 11, 25, 37, 54]

function imprimeValores(array){
 for(let numeros of array){
    console.log(numeros)
    }
}
imprimeValores(arrayOriginal)

//b)
function divisao (array){
    for(let numeros of array){
        let resultado = numeros / 10
        console.log(resultado)
    }
}
divisao(arrayOriginal)

//c)
function numerosPares(array){
    let arrayPares = []
    for(let numeros of array){
       if (numeros % 2 === 0){
            arrayPares.push(numeros)
    }
    }
    console.log(arrayPares)
}
numerosPares(arrayOriginal)

//d)

