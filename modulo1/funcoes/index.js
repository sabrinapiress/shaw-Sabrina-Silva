/*
1.a)10
    50
  b)Nada, pois não teriamos pedido para mostrar o resultado no console.
2.a)Ela pede para um usuario escrever um texto na caixinha.
Depois chamamos uma função para deixar todas as letras minusculas.
Em seguida chamamos outra função que verifica se temos os caracteres pedidos
na frase que o usicario escreveu. Nesse caso seria a palavra cenoura.
  b) i.eu gosto de cenoura / true
    ii.cenoura é bom para a vista /true
    iii.cenouras crescem na terra / false

*/
/* 1. a)
function mensagem(){
  mensagem("Eu sou Sabrina, tenho 25 anos, moro em Joinville e sou estudante.")
}

//b)

function dados(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
dados("Sabrina",25,"Joinville", "estudante")


//2.a)

function numeros (n1, n2){
    let soma = n1 + n2
    return n1 = n2
}
const n1 = Number(prompt(`Escolha seu primeiro numero!`))
const n2 = Number(prompt(`Escolha seu segundo numero!`))

console.log(numeros(n1, n2))


//b)

const um = n1
const dois = n2

const comparacaoNumeros = n1 >= n2

console.log(comparacaoNumeros)

//c)

function boole(n1, n2){
return n1 % n2 === 0

}
const resultado = n1 % n2 === 0
console.log(resultado)
*/

//d)   
function mensagem(texto){
console.log(texto.length , texto.toUpperCase())

}
mensagem("Oi, tudo bem?")




//3.
/*
const numero1 = Number(prompt("Escolha um numero!"))
const numero2 = Number(prompt("Escolha outro numero!"))

function soma(n1, n2){
    return n1 + n2
}
function subtracao (n1, n2){
    return n1 - n2
}
function divisao (n1, n2){
    return n1 / n2
}
function multiplicacao (n1, n2){
    return n1 * n2
}

console.log("Resultado soma:", soma(numero1, numero2))
console.log("Resultado subtração:", subtracao(numero1, numero2))
console.log("Resultado divisão:", divisao(numero1, numero2))
console.log("Resultado multiplicação:", multiplicacao(numero1, numero2))
*/