//EXERCICIO 3 

// Além dessas informações presentes em todos os filmes, alguns deles possuem uma 
//informação opcional: 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

// Considerando todas estas informações, crie uma função que receba todas essas 
//informações como parâmetros
//( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um `type`

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror",
}

const funcaoEx3 = (nome:string, ano:number, generoFilme:GENERO, pontuacao?:number):object=>{
type Filmes = {
nomeFilme:string,
anoLancamento:number,
generoFilme:GENERO
pontuacao?:number 
}
const filme: Filmes = {
    nomeFilme:nome,
    anoLancamento:ano,
    generoFilme:generoFilme,
    pontuacao:pontuacao
}
return filme
}


 console.log(funcaoEx3("Duna", 2021, GENERO.ACAO, 9));
