INSERT INTO department(name) VALUES ('Team Avenger');
INSERT INTO department(name) VALUES ('Team Shield');
INSERT INTO department(name) VALUES ('Intern');

INSERT INTO role(title, salary, department_id) VALUES ('Avenger', 1000000, 1);
INSERT INTO role(title, salary, department_id) VALUES ('Shield Agent', 1000000, 2);
INSERT INTO role(title, salary, department_id) VALUES ('Guard', 500000, 1);
INSERT INTO role(title, salary, department_id) VALUES ('Support', 500000, 2);
INSERT INTO role(title, salary, department_id) VALUES ('Sorcerer', 250000, 1);
INSERT INTO role(title, salary, department_id) VALUES ('Agent', 250000, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Tony', 'Stark', 2, NULL);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Steve', 'Rogers', 1, NULL);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("T'Challa", 'Udaku', 4, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Bucky', 'Barnes', 3, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('James', 'Rhodes', 4, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Sam', 'Wilson', 3, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Natasha', 'Romanoff', 6, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Wanda', 'Maximoff', 5, 2);