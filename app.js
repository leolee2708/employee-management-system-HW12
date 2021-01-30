const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const db = require('./db');
const connection = require('./db/connection');
const chalk = require('chalk');
require("console.table");


function init() {
  const logoText = logo({ name: "Leo's Employee Manager" }).render();
  console.log(chalk.yellow.bgRedBright.bold(logoText));
  loadMainmenu();
}


async function loadMainmenu() {
  const { choices } = await inquirer.prompt([
    {
      type: "list",
      name: "choices",
      message: " What would you like to do",
      choices: [{
        name: "View All Employees",
        value: "VIEW_EMPLOYEES"
      },
      // {
      //   name: "View All Employees By Department",
      //   value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
      // },
      // {
      //   name: "View All Employees By Manager",
      //   value: "VIEW_EMPLOYEES_BY_MANAGER"
      // },
      {
        name: "Add Employee",
        value: "ADD_EMPLOYEE"
      },
      // {
      //   name: "Remove Employee",
      //   value: "REMOVE_EMPLOYEE"
      // },
      {
        name: "Update Employee Role",
        value: "UPDATE_EMPLOYEE_ROLE"
      },
      // {
      //   name: "Update Employee Manager",
      //   value: "UPDATE_EMPLOYEE_MANAGER"
      // },
      {
        name: "View All Roles",
        value: "VIEW_ROLES"
      },
      {
        name: "Add Role",
        value: "ADD_ROLE"
      },
      // {
      //   name: "Remove Role",
      //   value: "REMOVE_ROLE"
      // },
      {
        name: "View All Departments",
        value: "VIEW_DEPARTMENTS"
      },
      {
        name: "Add Department",
        value: "ADD_DEPARTMENT"
      }
      // {
      //   name: "Remove Department",
      //   value: "REMOVE_DEPARTMENT"
      // },
      // {
      //   name: "Quit",
      //   value: "QUIT"
      // }
      ]
    }
  ])
  switch (choices) {
    case "VIEW_EMPLOYEES":
      return viewEmployees();
    case "VIEW_EMPLOYEES_BY_DEPARTMENT":
      return viewEmployeesByDepartment();
    case "VIEW_EMPLOYEES_BY_MANAGER":
      return viewEmployeesByManager();
    case "ADD_EMPLOYEE":
      return addEmployee();
    case "REMOVE_EMPLOYEE":
      return removeEmployee();
    case "UPDATE_EMPLOYEE_ROLE":
      return updateEmployeeRole();
    case "UPDATE_EMPLOYEE_MANAGER":
      return updateEmployeeManager();
    case "VIEW_DEPARTMENTS":
      return viewDepartments();
    case "ADD_DEPARTMENT":
      return addDepartment();
    case "REMOVE_DEPARTMENT":
      return removeDepartment();
    case "VIEW_ROLES":
      return viewRoles();
    case "ADD_ROLE":
      return addRole();
    case "REMOVE_ROLE":
      return removeRole();
    default:
      return quit();
  }
}

async function viewEmployees() {
  var employee = await connection.query('SELECT * FROM employee ')
  console.table(employee);
  loadMainmenu();
}

async function viewDepartments() {
  var department = await connection.query('SELECT * FROM department')
  console.table(department);
  loadMainmenu();

}

async function viewRoles() {
  var role = await connection.query('SELECT * FROM role')
  console.table(role);
  loadMainmenu();
}

async function addEmployee() {
  inquirer.prompt([

    {
      type: 'input',
      name: 'firstname',
      message: 'Enter new employee first name:'

    },
    {
      type: 'input',
      name: 'lastname',
      message: 'Enter new employee last name:'
    },
    {
      type: 'input',
      name: 'roleID',
      message: 'Enter new employee role ID:'
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'Enter new employee manager ID:'

    }

  ]).then(function(res) {
    connection.query('INSERT INTO employee (first_name,last_name, role_ID, manager_ID) VALUE (?,?,?,?)',
      [res.firstName, res.lastName, res.roleID, res.ManagerID], function (err, data) {
        if (err) throw err;
        console.log('New employee added');
        console.table(data);
        loadMainmenu();
      })

  })
}
async function addDepartment(){
inquirer.prompt({
  
type:'input',
name:'department',
message:'Enter new department:'
  
}).then(function(res){
  connection.query('INSERT INTO department (name) VALUES(?)',[res.department],function(err,data){
    if (err) throw err;
    console.log('New department added');
    console.table(data);
    loadMainmenu();
  })
})
}

async function updateEmployeeRole(){
  inquirer.prompt([
{
type:'input',
name:'name',
message:'Update current employee name:'

},
{
type:'input',
name:'role_id',
message:'Enter current employee [NEW] role ID:'

}
  ]).then(function(res){
connection.query('UPDATE employee SET role_ID = ? WHERE first_name =?',[res.role_id,res.name], function(err, data){
console.table(data);
})
loadMainmenu();
  })
}
init();
// async function viewEmployeesByDepartment(){
//   var ebyDepartments = await connection.query ('SELECT * FROM department');
//   const departmentChoices = ebyDepartments.map(({id, name })) => ({

//     name: name,
//     value:id
//   })
// }



// async function mapEmployee (){
//   var employee = await connection.query('SELECT * FROM employee')
//   console.log(employee);
// // map employee will grab employees array from mysql db, map that array to an array of prompts to feed the inquirer

// }
// async function addEmployeemanger (){
// var employee = awai
// // inquire.prompt (mapEmployee)
// }
// // delete (remove) function will be developed later, together with other functions.



