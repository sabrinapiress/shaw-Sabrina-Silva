Exercicio 1

a) Esse comando exclui a coluna salary.
 ALTER TABLE Actor DROP COLUMN salary;

b)Já esse altera o nome da nossa coluna de gender pra sex, e dimunui o valor limite de caracteres da nossa string
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

c) Aqui estamos retornando ao valor original da nossa string "(255)", sem alterar o nome da mesma
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercicio 2

a)
UPDATE Actor
SET name = "Tony Stark" , birth_date = "1979-08-03"
WHERE id = "003";

b)
UPDATE Actor
SET name = "CARLOS"
WHERE id = "004";

c)
UPDATE Actor
SET name = "Lazaro Ramos", 
birth_date = "1985-02-5",
salary = 60050
WHERE id = "004";

d)
UPDATE Actor
SET name = "Barbara" 
WHERE id = "008";
Ele aceita os dados passados

Exercicio 4

a)
SELECT max(salary) from Actor
WHERE gender="male";

b)
SELECT min(salary) from Actor
WHERE gender="female";

c)
SELECT count(*) from Actor
WHERE gender="female";

d)
SELECT sum(salary) FROM Actor;

Exercicio 5

a)Seleciona somente atizes do genero feminino, colocando um limite de 4 linhas, tbm faz a ordenação de forma ascendente.

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary DESC;

d)
SELECT * from Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary) gender FROM Actor
GROUP BY gender;

Exercicio 6

a)
ALTER TABLE Actor ADD playing_limit_date DATE

b)
ALTER TABLE moves CHANGE avaliacao avaliacao FLOAT;

c)
UPDATE moves 
SET playing_limit_date = "2022-06-15"
WHERE id = 1

d)
DELETE FROM moves WHERE id = 2;