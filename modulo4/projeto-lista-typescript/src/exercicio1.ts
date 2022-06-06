// EXERCICIO 1

// Crie um função que receba uma string com o nome e outra string com uma data de 
// nascimento (ex.: “24/04/1993”). 
// A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:

const separarData = (string:string, data:string) : string => {
    const dataSeparada:string[] = data.split("-")
    const frase: string = `Olá me chamo ${string}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}`
    return (frase)

} 

console.log(separarData("Sabrina","10-05-2022"));

