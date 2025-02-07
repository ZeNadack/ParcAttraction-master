DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);


DROP TABLE IF EXISTS critiques;

CREATE TABLE critiques (
    critiques_id int auto_increment,
    primary key(critiques_id),
    attraction_id int not null,
    foreign key (attraction_id) REFERENCES attraction(attraction_id),
    texte varchar(255) not null,
    note int not null,
    nom varchar(255) null,
    prenom varchar(255) null
);