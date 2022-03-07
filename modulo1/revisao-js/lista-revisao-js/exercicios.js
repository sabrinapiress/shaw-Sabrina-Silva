// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const ordenando = array.sort((a, b)=> a - b)
  return ordenando
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let verificarPar = function(numero){ 
       return numero % 2 === 0
    }   
    //let numerosPares = array.filter(verificarPar) 
   return array.filter(verificarPar)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let verificarPar = function(numero){ 
        return numero % 2 === 0
     }  
     let numerosPares = numero * 2
    return array.filter(numerosPares)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
const maiorNumero = Math.max(...array)
    return maiorNumero
} 

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2)
    let menorNumero = Math.min(num1, num2)
    let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    let diferenca = maiorNumero % menorNumero
    const objeto = {
       maiorNumero:  maiorNumero,
       maiorDivisivelPorMenor: maiorDivisivelPorMenor,
       diferenca: diferenca
    }
        return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let par = []

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA && ladoB && ladoC){
        return "Equilátero"
    }else if( ladoA || ladoB || ladoC){
        return "Isósceles"
    }else if(ladoA !== ladoB !== ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b)=> a - b)
    const segundoNumeroMenor = array[1]
    const segundoNumeroMaior = array[array.length - 2]
    return [segundoNumeroMaior,segundoNumeroMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}