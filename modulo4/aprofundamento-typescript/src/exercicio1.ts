//EXERCICIO 1

//a) Se atribuimos um valor de number  essa variavel, não aceita por declaramos o tipo dela com string
//const minhaString: string = 10

//b) 
type stringAndNumber = number|string

const meuNumero: stringAndNumber = 10

//c) e d)

enum CoresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA ="Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL= "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFav: CoresArcoIris
}

const pessoa1: Pessoa = {
 nome:"Ana",
 idade: 20,
 corFav: CoresArcoIris.LARANJA
}

const pessoa2: Pessoa = {
    nome:"Maicon",
    idade: 45,
    corFav: CoresArcoIris.VIOLETA
}

const pessoa3: Pessoa = {
    nome:"Ariel",
    idade: 12,
    corFav: CoresArcoIris.AMARELO
}

console.log(pessoa1.nome, pessoa1.idade, pessoa1.corFav);

