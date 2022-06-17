//EXERCICIO 2

type AmostraDeIdades = {

    numeros: number[],

    obterEstatisticas: ()=>{
        estatisticas(numeros:number[]):object
    }
}

function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )
    //A função numerosOrdeados é um array de numeros, pois a mesma é atribuida ao parametro que recebemos nessa função.

    let soma:number = 0
    //Uma variavel do typo number.

    for (let num of numeros){
        soma += num
    }
    //Uma função que recebe numeros também.

    const estatisticas:object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    //Um objeto de numeros.

    return estatisticas
}

// const novaAmostra: AmostraDeIdades = {
//     numeros: [45,17,32], 
//     obterEstatisticas:
// }

console.log(obterEstatisticas([10,20,67]));
