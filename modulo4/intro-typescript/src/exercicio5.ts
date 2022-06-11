function checaRenovacaoRG(num1:number, num2:number, num3:number):boolean {
        const anoAtual:number = num1
        const anoNascimento:number = num2
        const anoEmissao:number = num3
     
        const idade:number = anoAtual - anoNascimento
        const tempoCarteira: number = anoAtual - anoEmissao
     
        const cond1:boolean = idade <= 20 && tempoCarteira >= 5
        const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
        const cond3:boolean = idade > 50 && tempoCarteira >= 15
     
        return (cond1 || cond2 || cond3)
     }
    
     console.log(checaRenovacaoRG(2022,1996,2020));