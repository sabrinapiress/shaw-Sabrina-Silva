function operacoesSoma(num1: number, num2:number):number{
    const soma:number = num1 + num2
    return (soma)
}

function operacoesSub(num1: number, num2:number):number{
    const subtracao: number = num1 - num2
    return (subtracao)
}

function operacoesMult(num1: number, num2:number):number{
    const multiplicacao:number = num1 * num2
    return (multiplicacao)
}

function operacoesVerificaMaior(num1: number, num2:number):boolean{
    const verificaMaior: boolean = num1 > num2 
    return (verificaMaior)
}

function operacoes(num1: number, num2:number):void{
    const soma:number = num1 + num2
    const subtracao: number = num1 - num2
    const multiplicacao:number = num1 * num2
    const verificaMaior: boolean = num1 > num2   
    console.log(soma, subtracao, multiplicacao, verificaMaior)
}

operacoes(57,31)

console.log(operacoesSoma(2,7));
console.log(operacoesSub(2,7));
console.log(operacoesMult(2,7));
console.log(operacoesVerificaMaior(2,7));
