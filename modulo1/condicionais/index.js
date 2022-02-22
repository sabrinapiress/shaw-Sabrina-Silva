/*
1.a)
Na primeira variavel, fazemos uma ação de imprime na tela 
uma pergunta para o usuario!
Ja na segunda variavel convertemos a respota do usuario para numero, 
pois recebemos uma string.
Por ultimo fazemos as condições if/else. Nela queremos saber se o numero
que o usuario escolheu seria par. Se for ele imprime no console a mensagem 
"Passou no teste". Caso o numero escolhido não passe vamos para a proxima condição,
que imprime na tela a mensandem dizendo que o numero não passou no teste.
b) numeros pares.
c)impares.

2.a)O codigo serve para verificar o valor das frutas
b)"O preço da fruta, Maçã, é R$2.24"
c)Ira aparecer no console a mensagem de cima, pois acabamos colocando eles 
no mesmo bloco.
Como não botamos o break ele continua executando, e acaba subistituindo o valor dessa fruta pelo de

3a)Esta imprimindo uma mensagem na tela e já convertendo a mensagem que 
recebemos em string, em number.
b)Se o usuario digitar 10, seria "Essa mensagem é secreta!"
Ja se digitasse -10 haveria um erro no console.
c)Sim, apareceria o erro pois não colocamos outra condição, se caso o numero
não passasse no teste.
*/

//1.

// let idade = Number(prompt("Qual a sua idade?"))

//     if(idade >=18){
//         console.log("Você pode dirigir")
//     }else{
//         console.log("Você não pode dirigir.")
//     }

//2.

// let horario = (prompt("Digite M, se estuda no período Matutino, V para Vespertino, e N para Noturo!"))

//     if(horario === "M"){
//         console.log("Bom dia!")
//     }else if( horario === "V"){
//         console.log("Boa tarde!")
//     }else if(horario === "N"){
//         console.log("Boa noite!")

//     }

//3.

// let horario = (prompt("Digite M, se estuda no período Matutino, V para Vespertino, e N para Noturo!"))

// function imprimeTurno(turno){
//     switch(turno){
//         case "M":
//         console.log("Bom dia!")
//             break;
//         case "V":
//         console.log("Boa Tarde!")
//             break;
//                 default:
//         case "N":
//         console.log("Boa Noite!")
//         break;
//     }
// }
// imprimeTurno(horario)

//4 e 5

const generoFilme = prompt("Genero do filme")
const valorIngresso = Number(prompt("Valor do ingresso"))

if (generoFilme === "fantasia" && valorIngresso <= 15) {
    const lanche = prompt("Qual lanche vc gostaria de comprar?")
    console.log("Bom filme!")
    console.log("Aproveite o seu", lanche)
} else {
    console.log("Escolha outro filme :(")
}


//6
