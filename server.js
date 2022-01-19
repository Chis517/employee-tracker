const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  questions()
});

function questions() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'mainQuestion',
      message: 'What would you like to do?',
      choices: ['View All',
                'View all Employees',
                'View all Managers',
                'View all Departments',
                'View all Roles',
                'Add an Employee',
                'Add a Department',
                'Add a Role',
                'Update a Role',
                'Done']
    }
  ])
  .then(answer => {
    if (answer.mainQuestion === 'View All') {
      viewAll()
    } else if (answer.mainQuestion === 'View all Employees') {
      viewAllEmployees()
    } else if (answer.mainQuestion === 'View all Managers') {
      viewAllManagers()
    } else if (answer.mainQuestion === 'View all Departments') {
      viewAllDepartments()
    } else if (answer.mainQuestion === 'View all Roles') {
      viewAllRoles()
    } else if (answer.mainQuestion === 'Add an Employee') {
      addAnEmployee()
    } else if (answer.mainQuestion === 'Add a Department') {
      addADepartment()
    } else if (answer.mainQuestion === 'Add a Role') {
      addARole()
    } else if (answer.mainQuestion === 'Update a Role') {
      updateARole()
    } else {
      db.end()
    };
  });
};

function viewAll() {
  db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", (err, res) => {
    if (err) throw err;
    console.table(res)
    questions()
  });
};

function viewAllEmployees() {
  db.query('SELECT * FROM employee;', (err, res) => {
    if (err) throw err;
    console.table(res)
    questions()
  });
};

function viewAllManagers() {
  db.query('SELECT * FROM employee WHERE id = 1', (err, res) => {
    if (err) throw err;
    console.table(res)
    questions()
  });
};

function viewAllDepartments() {
  db.query('SELECT * FROM department;', (err, res) => {
    if (err) throw err;
    console.table(res)
    questions()
  });
};

function viewAllRoles() {
  db.query('SELECT * FROM role;', (err, res) => {
    if (err) throw err;
    console.table(res)
    questions()
  });
};

function addAnEmployee() {
  inquirer.prompt([
    {
      name: 'first_name',
      type: 'input', 
      message: "What is the employee's first name? ",
    },
    {
      name: 'last_name',
      type: 'input', 
      message: "What is the employee's last name? "
    },
    {
      name: 'role_id',
      type: 'input', 
      message: "What is the employee's role ID? "
    },
    {
      name: 'manager_id',
      type: 'input', 
      message: "What is the employee's manager's ID? "
    },      
  ])
  .then(function (response) {  
    db.query(
      'INSERT INTO employee SET ?',
        {
          first_name: response.first_name,
          last_name: response.last_name,
          manager_id: response.manager_id,
          role_id: response.role_id,
        },
        function (err) {
          if (err) throw err;
          console.log('Your employee has been added!');
          questions();
        });
  });
};

function addADepartment() {
  inquirer.prompt([
    {
      name: 'newDepartment', 
      type: 'input', 
      message: 'Please enter new Department name'
    }
  ])
  .then(function (response) {
    db.query(
      'INSERT INTO department SET ?',
        {
          name: response.newDepartment
        }    
    );
    db.query(
      'SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res)
        console.log('Your new Department has been added!');
        questions()
    });
  });
};

function addARole() {
  inquirer.prompt([
    {
      name: 'title',
      type: 'input', 
      message: "Please enter new Role name"
    },
    {
      name: 'salary',
      type: 'input',
      message: 'What is the salary of this role? (Enter a number)'
    },
    {
      name: 'department_id',
      type: 'input',
      message:'Enter Department ID'
    },
  ])
  .then(function (response) {
    db.query(
      'INSERT INTO role SET ?',
        {
          title: response.title,
          salary: response.salary,
          department_id: response.department_id
        }    
      );
      db.query(
        'SELECT * FROM role', (err, res) => {
          if (err) throw err;
          console.table(res)
          console.log('Your new Role has been added!');
          questions()
    });
  });
};

function updateARole() {
  db.query('SELECT * FROM employee', (err, data) => {
    var emp = data.map(({id, first_name}) => ({id: id, name: first_name}))

    db.query('SELECT * FROM role', (err, roleData) => {
      var roleID = roleData.map(items => items.id)

      inquirer.prompt([
        {
          name: 'employee',
          type: 'list',
          message: 'Select an employee to update',
          choices: emp
        },
        {
          name: 'role',
          type: 'list',
          message: 'Select a new role for your employee.',
          choices: roleID
        },
      ])
      .then(answer => {
        db.query(`SELECT * FROM employee WHERE first_name = '${answer.employee}';`, (err, data) => {
          var id = data.map(item => item.id)
          console.log(id[0]);
          db.query('UPDATE employee SET ? WHERE ?', [
            {
              role_id: answer.role
            },
            {
              id: id[0]
            }
          ])
          questions()
        });
      });
    });
  });
};