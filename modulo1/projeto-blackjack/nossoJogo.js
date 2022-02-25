
console.log("Boas vindas ao jogo de Blackjack!")

    if (confirm("Quer iniciar uma nova rodada?")){
     confirm === true 

    }else{
       console.log("O jogo acabou.")
    }

let usuarioCompra1 = comprarCarta()
let usuarioCompra2 = comprarCarta()
   let somaUsuario =  usuarioCompra1.valor + usuarioCompra2.valor

let computadorCompra1 = comprarCarta()
let computadorCompra2 = comprarCarta()
let somaComputador = computadorCompra1.valor + computadorCompra2.valor

   console.log(`Usuario - cartas: ${usuarioCompra1.texto} ${usuarioCompra2.texto} - pontuação ${somaUsuario}`)
   console.log(`Computador - cartas: ${computadorCompra1.texto} ${computadorCompra2.texto}- pontuação ${somaComputador}`)
   
   if (somaUsuario > somaComputador){
      console.log("O usuário ganhou!")
    }else if(somaComputador > somaUsuario){
      console.log("O computador ganhou!")
    }else{
       console.log("Empate!")
    }





  
 