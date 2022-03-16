
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
// console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `Comparando igualdade ${a} === ${b} é ${a === b}`
}

// console.log(checarIgualdade(2, 2))

// c-)Faça uma função chamada "verificaSeEMaior"
const verificaSeEMaior = function(a,b){
    return `Verificando se ${a} é > ${b}, ${a > b}`
}
// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
// const nomeDoUsuario = prompt("Qual seu nome?")
// let anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
// let senhaDoUsuario = prompt("Escolha uma senha com no minimo 6 numeros.")
// const nacionalidae = prompt("Qual sua nacionalidade?")

// anoDeNascimento = 2022 - anoDeNascimento
// const cadastro = () => {
//     const usuario = []
    
//     if (anoDeNascimento >= 18 && senhaDoUsuario.length >= 6 && nacionalidae === "brasileira"){
//      console.log( usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario,nacionalidae))
//     }else{
//         console.log("Não foi possivel completar o cadastro")
//     }
//     return usuario
// }
// console.log(cadastro(nomeDoUsuario, anoDeNascimento,senhaDoUsuario, nacionalidae));

// Exercício 4-----------------------------------------------------------------------------------------------
// const senha = prompt("Qual sua senha?")
const login = () => {
    // const login = "labenu"
    if (senha === senhaDoUsuario){
        return "Usuário Logado"
    }else{
        return "Senha Invalida"
    }

}

// console.log(login(senha));

// Exercício 5----------------------------------------------------------------------------------------------------
// const nome = prompt("Qual seu nome?")
// const nomeVacina = prompt("Qua o nome da sua primeira dose da vacina?")
// let tempo = ""
// let data = ""
// const primeiraDose = () => {
   
//     if (nomeVacina === "Coronavac"){
//        return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempo = 28} dias. Compareça no posto na data ${data = "Dia 10 de Abril"}.`
//     }else if(nomeVacina === "Astrazenica"){
//         return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempo = 90} dias. Compareça no posto na data ${data = "Dia 11 de Julho"}.`
//     }else{
//         return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempo = 90} dias. Compareça no posto na data ${data = "Dia 10 de Julho"}.`
//     }


// }
// console.log(primeiraDose())

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     return {...usuarios, nomeDoUsuario, imunizacao: "completa"}
// }
// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

// const usuarios = [
//     { nome: "Artur", imunizacao: "incompleta" },
//     { nome: "Barbara", imunizacao: "completa" },
//     { nome: "Carlos", imunizacao: "incompleta"}
// ]
// for(let i = 0; i < usuarios.length; i++){
//    if (usuarios[i].imunizacao == "incompleta"){
//     console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
//    }
// }

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

// let nome = prompt("Qual seu nome?")
// let senha = prompt("Digite sua senha")

// const cadastroDesafio = (nomeUsuario, senhaUsuario) => {
    
//     for(let i = 0; i < usuarios.length; i++){
//         if(usuarios[i].nome === nomeUsuario && usuarios[i].senha === senhaUsuario){
//            console.log(`Usuario ${nomeUsuario} cadastrado`);
//         }else{
//             console.log("Cadastro não encontrado");
//         }
        
//     }
// }
// (cadastroDesafio(nome,senha));

// const nomeDoUsuario = prompt("Qual seu nome?")
// let anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
// let senhaDoUsuario = prompt("Escolha uma senha com no minimo 6 numeros.")
// const nacionalidae = prompt("Qual sua nacionalidade?")
// const nomeVacina = prompt("Qua o nome da sua primeira dose da vacina?")
// anoDeNascimento = 2022 - anoDeNascimento
// let obj = {}
// const loginDesafio = () => {
//    if(anoDeNascimento >= 18 && senhaDoUsuario.length >= 6 && nacionalidae === "brasileira"){
//     obj = {
//         nome: nomeDoUsuario,
//         ano: anoDeNascimento,
//         nacionalidae: nacionalidae,
//         senha: senhaDoUsuario,
//         vacina: nomeVacina,
//         imunizacao: "incompleta"
//     }

    
// }else{
//     console.log("Não foi possivel completarar");
// }
//     usuarios.push(obj)
//     return usuarios
// }
// console.log(loginDesafio(obj));


// const senha = prompt("Qual sua senha?")
// const login = () => {
//     if (senha === senhaDoUsuario){
//         return "Usuário Logado"
//     }else{
//         return "Senha Invalida"
//     }

// }

// console.log(login(senha));
// const nome = prompt("Qual seu nome?")
// const nomeVacina = prompt("Qua o nome da sua primeira dose da vacina?")
// let anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
// let senhaDoUsuario = prompt("Escolha uma senha com no minimo 6 numeros.")
// const nacionalidade = prompt("Qual sua nacionalidade?")
// let tempo = ""
// let data = ""

// const primeiraDoseDesafio = () => {
//     let novoUsuario = {...usuarios, 
//         nome: `${nome}`, 
//         ano: `${anoDeNascimento}`, 
//         nacionalidade: `${nacionalidade}`,
//         senha: `${senhaDoUsuario}`,
//         vacina: "incompleta"
//           }
// }

//     if (nomeVacina === "Coronavac"){
//        return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempo = 28} dias. Compareça no posto na data ${data = "Dia 10 de Abril"}.`
//     }else if(nomeVacina === "Astrazenica"){
//         return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempo = 90} dias. Compareça no posto na data ${data = "Dia 11 de Julho"}.`
//     }else{
//         return `Olá ${nome}! A próxima dose da ${nomeVacina} é daqui a ${tempo = 90} dias. Compareça no posto na data ${data = "Dia 10 de Julho"}.`
//     }
// }

// console.log(primeiraDoseDesafio())
let nome = prompt("Qual seu nome?")

const segundaDoseDesafio = (nomeDoUsuario) => {

    if(nomeDoUsuario === usuarios.nome){
        return {...usuarios, nomeDoUsuario, imunizacao: "completa"}
    }
}
console.log(segundaDoseDesafio(nome));

//const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     return {...usuarios, nomeDoUsuario, imunizacao: "completa"}
// }
// console.log(segundaDose("Barbara"));
const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
// console.log(avisoAosAtrasadosDesafio());

