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
  
  let peso = Number(prompt("Digite o seu peso!"))
  let altura = Number(prompt("Digite sua altura também!"))
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
  const frase = prompt("Oi?")
  const fraseM = frase.toUpperCase
  return fraseM

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let custo = Number(prompt("Qual o custo do show??"))
  let valorIngresso = Number(prompt("Valor do ingresso?"))
let resultado = custo / valorIngresso


return resultado
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}