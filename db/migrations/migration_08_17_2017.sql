
DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR,
    lastname VARCHAR
);
-- psql -d project_3_db 
-- SELECT * FROM deck;
DROP TABLE IF EXISTS deck;
CREATE TABLE deck(
    id BIGSERIAL PRIMARY KEY,
    question TEXT,
    answer TEXT,
    correct BOOLEAN NOT NULL,
    setTime VARCHAR NOT NULL,
    timesRight INT NOT NULL,
    timesWrong INT NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    deckNumber INT NOT NULL
)


