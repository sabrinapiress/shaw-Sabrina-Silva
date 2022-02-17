/* 
1.
a. indefinida
b. null // mas a variavel não tem um valor, ela é null
c. 11
d. 3 // posição 0
e.Substitui o 4 pelo 19
f.vai ate a "casa" 7 

2. Subi num ônibus em Marrocos
 SUBI NUM ÔNIBUS EM MARROCOS
SUBI NUM ÔNIBUS EM MIRRICOS 27

*/

//const nome = prompt("Qual seu nome?")
//const email = prompt("Qual o seu e-mail?")
//const frase = `O e-mail ${email} foi cadastrado com sucesso. Bem vinda(o) ${nome}`

//console.log(frase)

//console.log ("O e-mail", email , "foi cadastrado com sucesso. Seja bem-vinda(o)" , nome)

const comidas = ['Doces','Pizza', 'Lanche', 'Sushi', 'Macarrão']
console.log(comidas)
const frase = "Essas são as minhas comidas preferidas:"
console.log(frase)
const doce = comidas [0]
console.log(doce)
const pizza = comidas [1]
console.log(pizza)
const lanche = comidas [2]
console.log(lanche)
const sushi = comidas [3]
console.log(sushi) 
const macarrao = comidas [4]
console.log(macarrao)

const comidaUsuario = prompt ("Qual sua comida favorita")
comidas.push(comidaUsuario)
comidas.splice(1, 0 ,  comidaUsuario)
console.log(comidas)
 //trocar a comida dois da minha lista pela comida do usuario

/*
const listaDeTarefas = []

const tarefa1 = prompt ("Escreva sua tarefa 1")
const tarefa2 = prompt ("Escreva sua tarefa 2")
const tarefa3 = prompt ("Escreva sua tarefa 3")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const tarefaConcluida = prompt("Digite de 0 a 2 o numero referente a sua tarefa concluida")

listaDeTarefas.splice(tarefaC, 1)

console.log(listaDeTarefas)
*/
