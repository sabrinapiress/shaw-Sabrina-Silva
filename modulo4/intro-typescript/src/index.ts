console.log("Olá");
//EXERCICIO 1
// function checaTriangulo(a:number, b:number, c:number): string {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

//console.log(checaTriangulo(4, 5, 8))

//EXERCICIO 2
//  function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string):void {
//     console.log([cor1, cor2, cor3])
//  }

//  imprimeTresCoresFavoritas("azul","vermelho","verde")

//EXERCICIO 3
// function checaAnoBissexto(ano:number): boolean {
//     const cond1:boolean = ano % 400 === 0
//     const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

// console.log(checaAnoBissexto(2022));

//EXERCICIO 4
// function comparaDoisNumeros(num1:number, num2:number): number{
//     let maiorNumero:any
//     let menorNumero:any
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca:number = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

//   console.log(comparaDoisNumeros(375,25));

//EXERCICIO 5
//   function checaRenovacaoRG(num1:number, num2:number, num3:number):boolean {
//     const anoAtual:number = num1
//     const anoNascimento:number = num2
//     const anoEmissao:number = num3
 
//     const idade:number = anoAtual - anoNascimento
//     const tempoCarteira: number = anoAtual - anoEmissao
 
//     const cond1:boolean = idade <= 20 && tempoCarteira >= 5
//     const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
//     const cond3:boolean = idade > 50 && tempoCarteira >= 15
 
//     return (cond1 || cond2 || cond3)
//  }

//  console.log(checaRenovacaoRG(2022,1996,2020));