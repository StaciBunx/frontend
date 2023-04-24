
-- create
CREATE TABLE classmates (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO classmates (id, name, age, address) VALUES
(1, 'Вася',15,'Москва'),
(2, 'Петя',18,'Вологда'),
(3, 'Маша',17,'Краснодар'),
(4, 'Даша',18,'Москва'),
(5, 'Миша',29,'Москва');

-- fetch
SELECT name as 'имя' FROM classmates
where address='Москва'
AND age BETWEEN 18 AND 29;
