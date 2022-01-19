INSERT INTO department(name) VALUES ('Management');
INSERT INTO department(name) VALUES ('Engineering');
INSERT INTO department(name) VALUES ('Accounting');

INSERT INTO role(title, salary, department_id) VALUES ('Manager', 1000000, 1);
INSERT INTO role(title, salary, department_id) VALUES ('Front End Dev', 1500000, 2);
INSERT INTO role(title, salary, department_id) VALUES ('Book Keeper', 500000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('John', 'Wick', 1, NULL);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Christian', 'Ouimet', 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Anderson', 3, 1);