//EXERCICIO 4

//b) Retiraria a instalação de typescript, colocaria no arquivo package.json o comando necessario para rodar o arquivo que preciso,e também alterando o caminho a se seguir.
//c) Temos a opção de fazer diretamente pelo terminal colocando os nomes dos arquivos que desejamos. Ou usando a propriedade Outfile, que esta dentro do tsconfig.json, essa propriedade define um arquivo de codigo fonte, onde ele traspila todos os arquivos juntos.

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}