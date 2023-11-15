CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    todo_body TEXT
);

INSERT INTO todos (todo_body)
VALUES  
    ('Make some new friendIn your 40s this is difficult');

