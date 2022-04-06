CREATE DATABASE recipesblog;


CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    user_first VARCHAR(255),
    user_last VARCHAR(255),
    user_email VARCHAR(255)
)


CREATE TABLE recipes(
    blog_id SERIAL PRIMARY KEY,
    blog_text TEXT,
    blog_recipe TEXT,
    blod_date TEXT,
    users_id SERIAL REFERENCES users(user_id)
);



