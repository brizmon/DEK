
DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR,
    lastname VARCHAR
);

DROP TABLE IF EXISTS deck;
CREATE TABLE deck(
    id BIGSERIAL PRIMARY KEY,
    question VARCHAR (255),
    answer VARCHAR (255),
    correct VARCHAR (255),
    setTime VARCHAR UNIQUE NOT NULL,
    timesRight VARCHAR UNIQUE NOT NULL,
    timesWrong VARCHAR UNIQUE NOT NULL,
    user_id INT REFERENCES users(id)
)


