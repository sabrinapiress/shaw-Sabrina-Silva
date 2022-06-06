/*
1.1 a = false
   b = false
   c = true
   d = Bolelean

   1.2. Ele não soma os numero, somente junta, pois as variaveis estão como
   strings.

   1.3. Para solucionar teriamos que converter a variavel string em number,
   com o comando: Number().

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
let primeiroN = Number(primeiroNumero)
let segundoN = Number(segundoNumero)

let resul = primeiroN + segundoN

console.log (resul)*/

/*2.1

let idade = prompt ("Qual a sua idade?")
let idadeAmigo = prompt ("Qual a idade do seu melhor amigo?")

let idadeN = Number (idade)
let idadeA = Number (idadeAmigo)

const results = idade > idadeAmigo

const diferenca = idade - idadeAmigo

console.log ("Sua idade é maior do que a do seu amigo?", results)
console.log (diferenca)

*/

/*2.2

let numeroP = prompt ("Esvreva um numero Par!")
let numeroPar = Number (numeroP)
let divisor = 2

let resultado = numeroPar % divisor

console.log (resultado)*/

//Quando se coloca somente numeros pares não tem resto da divisão, 
//já se colocamos, numero impares ficamos com sobra.

/*let idade = prompt ("Qual a sua idade?")
let idadeN = Number (idade)
const meses = 12
const dias = 365
const horas = 24


const idadeMeses = meses * idade
const idadeDias = idade * dias
const idadeHoras = idade * dias * horas
console.log (idadeMeses , idadeDias , idadeHoras)*/


/*
let primeiroNumero = prompt ("Escreva um número!")
let segundoNumero = prompt ("Escolha mais um número!")

let primeiroN = Number (primeiroNumero)
let segundoN = Number (segundoNumero)
let divisiveisP = primeiroN % segundoN
let divisiveisS = segundoN % primeiroN
let zero = 0


console.log ("O primeiro numero é maior que o segundo?", primeiroN > segundoN)
console.log ("O primeiro numero é igual ao segundo?" , primeiroN === segundoN)
console.log ("O primeiro numero é divisível pelo segundo?", divisiveisP === zero)
console.log ("O segundo numero é divisível pelo primeiro?", divisiveisS === zero)
*/

