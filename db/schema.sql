DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  department_id INT NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT,
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
);