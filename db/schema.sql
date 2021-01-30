DROP DATABASE Employee_Management_Db;

CREATE DATABASE Employee_Management_Db; 

USE Employee_Management_Db;


CREATE TABLE department (
id INT AUTO_INCREMENT KEY NOT NULL,
name VARCHAR(225)
);

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
title VARCHAR(30),
salary DECIMAL(10),
department_id INT,
FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);



CREATE TABLE employee ( 
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL,
FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);


