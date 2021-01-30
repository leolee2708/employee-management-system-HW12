USE Employee_Management_Db;
-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
INSERT INTO department (name)
VALUES ("Sales"), ("Marketing"), ("Accounting"),("HR"), ("R&D/IT");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO",50000,1), ("CFO", 48000,1),("Sales Manager", 45000, 1), 
("Marketing Manager",45000, 2), ("Accounting Manager",45000, 2),("HR director", 40000, 3),
("Lab researcher", 35000, 3), ("IT technician", 35000, 3),("Sales Excutive", 27000,4),
("Software engineer", 36500, 5), ("Lab technician", 37500, 5);

INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES ("John", "Doe",1,1),("Jane","Doe",2, NULL), ("Brad","Pitt", 1,2), ("Katy", "Perry", 2,3),
("Bloody", "Mary", 5, NULL), ("Anna", "Belle", 3,3),("Captain","Marvel", 4,5), ("Bruce", "Wayne", 5,5);
