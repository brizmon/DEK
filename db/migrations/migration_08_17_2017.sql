
DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR,
    lastname VARCHAR
);

-- DROP TABLE IF EXISTS routinedek;
-- CREATE TABLE routinedek(
--     id BIGSERIAL PRIMARY KEY,
--     question VARCHAR (255),
--     answer VARCHAR (255),
--     user_id REFERENCES users(id)
-- )

-- DROP TABLE IF EXISTS spacedek;
-- CREATE TABLE spacedek(
--     id BIGSERIAL PRIMARY KEY,
--     question VARCHAR (255),
--     answer VARCHAR (255),
--     routinedek REFERENCES routinedek(id)
-- )


