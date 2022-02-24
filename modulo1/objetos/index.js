//1.a)
//"Matheus Nachtergaele"
//"Virginia Cavendish"  
//"Globo, 14"

//2.a)
//"Juca"
// 3
//"SRD"

//"Juba"
//3
//"SRD"

//"Jubo"
//3
//"SRD"

//b)Os "..." são uma sintaxe que nos permite 
//fazer copias de um objeto ou array inteiro

//3.a)
//false
// undefined
//b)Iprimiu como "undefined" porque não temos
//nenhum valor com o nome de "altura"





//1.a) e b)
const pessoa = {
    nome: "Renatta",
    apelido: ['Rena','Renatinha','Re']
}

function pessoaFuncao(pessoa) {
    
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`)
   
}

const apelidosNovos = {
    ...pessoa,
    apelido: ['Reh','Rena', 'RT']

 }
pessoaFuncao(pessoa)
pessoaFuncao(apelidosNovos)

//2.a)

const pessoa1 = {
    nome: "Sabrina",
    idade: 25,
    profissao: "Estudante"
}
const pessoa2 = {
    nome: "Ana",
    idade: 27,
    profissao: "Fotografa"
}
function pessoaLista(pessoa) {
    const lista = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    return lista
}
pessoaLista(pessoa1)
pessoaLista(pessoa2)
console.log(pessoaLista(pessoa1))
console.log(pessoaLista(pessoa2))

//3.a)

const carrinho = []

const fruta1 = {
    nome: "Maça",
    disponibilidade: true

}

const fruta2 = {
    nome: "Uva",
    disponibilidade: true
}

const fruta3 = {
    nome: "Manga",
    disponibilidade: true

}
function recebeObj(fruta1, fruta2, fruta3){
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
}
recebeObj(fruta1)
recebeObj(fruta2)
recebeObj(fruta3)
console.log(carrinho)

