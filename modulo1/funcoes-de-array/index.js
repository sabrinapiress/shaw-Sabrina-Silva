//1.a)Ira imprimir o conteudo da nosso array; primeiramente,
//os itens dentro da nossa lista, os indices dos elementos e por fim o nosso array completo.
//2.a)Vai imprimir os nomes.
//3.a)Vai imprimir os valores que são diferentes de "Chijo", no caso acho que o nome e o apelido do
//item 3 não apareceriam.

//1.a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 const nomeCachorros = pets.map((cachorro)=>{
        return cachorro.nome 
 })

console.log(nomeCachorros)

//b)
const arraySalsichas = []

for (let i = 0; i < pets.length; i++){
    if (pets[i].raca === "Salsicha"){
        arraySalsichas.push(pets[i].nome)
        arraySalsichas.push(pets[i].raca)
    }
}
console.log(arraySalsichas)

//c)

const poodle = pets.filter((item, index, array)=>{
            return item.raca === "Poodle"
     }).map((item)=> { console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a", ${item.nome}!`)
    })

//2.a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
const nomesFiltrados = produtos.map((produto)=>{
    return produto.nome
})
console.log(nomesFiltrados)

//b)
const desconto = produtos.map((produto)=>{
    return {
        nome: produto.nome.toUpperCase(),
        precoProduto: (produto.preco * 0.95)
    
    }
})
console.log(desconto)  

//c)
const  bebida = produtos.filter((produto)=>{
    return produto.categoria === "Bebidas"
})
console.log(bebida)

//d)
const produtosYpe = produtos.filter((produto)=>{
    if (produto.nome.includes("Ypê"))
    return produto
})
console.log(produtosYpe)


//e)
const mensagemYpe = produtosYpe.map((produto)=>{
    return `Compre, ${produto.nome}, por ${produto.preco}.`

})
console.log(mensagemYpe)