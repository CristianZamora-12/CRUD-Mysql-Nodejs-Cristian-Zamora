-- Creating the database
CREATE DATABASE crudcristianz;

-- Using the database
use crudcristianz;

-- Creating a table
CREATE TABLE customer(
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- To show all tables
SHOW TABLES;

-- To describe the table
describe customer;
