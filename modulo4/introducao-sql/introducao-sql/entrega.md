Exercicio 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
O id VARCHAR(255) PRIMARY KEY, representa uma variavel string, que sera nossa key de valor unico.
Já o name VARCHAR (255) NOT NULL, tbm representa uma variavel do tipo string, que não pode vir com o campo vazio, não podendo ser um valor null.
O birth_date DATE NOT NULL, vem com um valor que representa uma data, que tbm é obrigatorio.
E por ultimo, o gender VARCHAR(6) NOT NULL também uma string obrigatória.

b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
O SHOW DATABASES nos tras as nossas informações do DataBase, já o SHOW TABLES nos tras nossas tabelas que já foram criadas.

c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.
Esse comando nos tras as infromações contidas na nossa tabela, com o nome de "Actor".

Exercicio 2
a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Gloria Pires", 1200000, "1963-08-23", "female");

b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Cleo Pires", 900000, "1980-05-11", "female");

Error Code: 1062. Duplicate entry "002" for key "PRIMARY"
O erro diz que temos uma PRIMARY KEY duplicada, no caso dois id com o mesmo valor.

c)
Error Code: 1136. Column count doesn't match value count at row 1	0,156 sec
Temos esse erro pelo fato de passarmos somente 3 inserts (id, name, salary), mas nos valores passamos 5 ("003", "Fernanda Montenegro", 300000 ,"1929-10-19", "female"), o que não bate e torna impossivel completar nossa tabela.

Corrigindo:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("003", "Fernanda Montenegro", 300000 ,"1929-10-19", "female");

d)
Error Code: 1364. Field 'name' doesn't have a default value	0,156 sec
Aqui não passamos o valor de nome, que é um valor obrigatorio.

Corrigindo: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("004", "Carlos", 400000, "1949-04-18", "male");

e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0,172 sec
O valor de birth_date não esta como string.

Corrigindo:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes",719333.33,"1979-03-26", "female");

f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("006", "Jennifer Lawrence", 2719333.33,"1990-08-15", "female");

Exercicio 3
a) Escreva uma query que retorne todas as informações das atrizes
SELECT id, name from Actor WHERE gender = "female";

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT id, salary 
FROM Actor 
WHERE name LIKE "%Tony Ramos%";

c)Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
SELECT id, name from Actor WHERE gender = "invalid";
Não me retorna nada, pois nenhum dos meus atores possuem o "invalid" como genero.

d)Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary 
FROM Actor 
WHERE salary>50000;

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

Error Code: 1054. Unknown column 'nome' in 'field list'	0,141 sec
Não temos um valor com "nome" e sim "name", tbm temos que passar o ";" ao final.
Corrigindo:
SELECT id, name from Actor WHERE id = "002";

Exercicio 4

SELECT name
FROM Actor 
WHERE name LIKE "A%" OR name LIKE "J%"
AND (salary > 300000);

a) Explique com as suas palavras a query acima
Retorna o nome dos atores que começão com a letra A ou J e que tem um salario maior que 300000

b)
SELECT name
FROM Actor 
WHERE name NOT LIKE "A%" 
AND (salary > 350000);

c) 
SELECT name
FROM Actor 
WHERE name  LIKE "%g%"; 

d)
SELECT name
FROM Actor 
WHERE name LIKE "%g%" OR "%a%"
AND salary BETWEEN 350000 AND 900000; 

Exercício 5
a)
SELECT nome 
FROM moves
WHERE nome LIKE "%vida%";

b)
SELECT nome 
FROM moves
WHERE nome LIKE "%de%" OR sinopse LIKE "%la%";

c)
SELECT nome 
FROM moves
WHERE data_lancamento < "2022-06-06"

d)
SELECT nome 
FROM moves
WHERE avaliacao > 7;