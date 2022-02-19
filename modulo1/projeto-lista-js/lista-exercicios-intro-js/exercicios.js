// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01  3 e 5 e 15
function calculaAreaRetangulo() {
let altura = Number(prompt("Altura do triangulo?"))
let largura = Number(prompt("Largura do triangulo??"))
let resultado = altura * largura
console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNasc = Number(prompt("Em que ano você nasceu??"))
  let resultado = anoAtual - anoNasc
  console.log(resultado)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

let resultado =  peso / (altura * altura)
    return resultado
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome??")
  const idade = prompt("Agora, qual a sua idade?")
  const email = prompt("Por ultimo, qual o seu email?")
  
    const frase = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
        console.log(frase)
 
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Escolha sua cor 1!")
  const cor2 = prompt("Esolha sua cor 2!")
  const cor3 = prompt("Escolha sua cor 3!")

  const cores = [cor1 , cor2, cor3] 
    console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 
  let stringMaiuscula = string.toUpperCase()
  stringMaiuscula.toString()
   return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let resultado = custo / valorIngresso

return resultado
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 let tamanhS1 = string1.length
 let tamanhS2 = string2.length
 let comparacao = tamanhS1 === tamanhS2
return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let tamanho = array.length
  let ultimoElemento = array[tamanho - 1]

  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let primeiroElemento = array[0]
  let tamanho = array.length
  let ultimoElemento = array[tamanho - 1]
        primeiroElemento.splice(0,1) 
        ultimoElemento.pop()
        ultimoElemento.push(primeiroElemento)
        

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 let stringM1 = string1.toUpperCase
 let stringM2 = string2.toUpperCase
 let comparacao = stringM1 === stringM2
  console.log(string2)
 console.log(string1)
return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Em que ano estamos?")
  let anoNasc = prompt("Qual seu ano de nascimento?")
  let anoIdent = prompt("Em que ano sua carteira de identidade foi emitida?")
  let idadeUsuario = anoNasc - anoAtual
  let tempoRg = anoIdent - anoAtual
  let vinte = idadeUsuario >= 20
  let vinteAcinquenta = idadeUsuario < 21 >= 50
  let maisCinquenta  = idadeUsuario < 50 
  let rgVinte = tempoRg <= 5
  let rgAcinquenta = tempoRg <= 10
  let rgMcinquenta =  tempoRg <= 15

let resultadoVinte = vinte === rgVinte
let resultadoAcinquenta = vinteAcinquenta === rgAcinquenta
let resultadoMcinquenta = maisCinquenta === rgMcinquenta

return resultadoVinte, resultadoAcinquenta , resultadoMcinquenta


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}