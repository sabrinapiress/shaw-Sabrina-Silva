Exercicio 1
a) A chave estrangeira é um valor que referencia duas tabelas usando um mesmo valor, nos casos mais comuns o ID.
b)
CREATE TABLE Rating (
		id INT PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES moves(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(123, "Muito bom", 8, 1);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(456, "Incrivel", 9.5, 3);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(789, "Filme muito bom e pesado, recomendo", 10, 4);

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21814778-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `moves` (`id`))

Como não temos esse id, o banco não consegue adicionar o que passamos a ele.

d)
ALTER TABLE moves
DROP COLUMN avaliacao;

e)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`shaw-21814778-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `moves` (`id`))	0.156 sec

Não conseguimos apagar pois como o id é referenciado de outra tabela isso nos impede, por questão de hierarquia.

Exercicio 2
a)Essa tabela serve para juntarmos as outras duas tabelas.

b)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(1, 2), (3, 4), (2, 1);

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21814778-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Os ids não existem, assim ele não consegue referenciar os valores.

d) 
DELETE FROM MovieCast
WHERE id = 1;

Exercicio 3

a)SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

Ela tras todas as informações das nossas tabelasS, e o operador ON é a condição para isso ser possivel, no caso, os dois ids tem que ser iguais.

b)
SELECT title, Movie.id, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;