// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collects employee data from prompt inputs
let employees = [];
const collectEmployees = function () {
// a loop that prompts the user for inputs 

  let addWorker = true;
  while (addWorker) {
    let inFirst = prompt(`Enter first name`);
    let inLast = prompt(`Enter last name`);
    let salary = parseFloat(prompt(`add Monie$$`));
//sets salary to 0 if inout is anything other then a number
    if (isNaN(salary)) {
      salary = 0}
//pushes all inputs as an object to the employees array
      employees.push({
        firstName: inFirst,
        lastName: inLast,
        salary: salary,
      });
// this alert will keep the loop going or cancel add inputs to table
    addWorker = confirm(`Add More?`);
  }
  //on cancel ^ add inputs to table
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
// searches the employees array for salaries and adds them to gether 
  let salarySum = 0;
  for (let i = 0; i < employeesArray.length; i++){
    salarySum += employeesArray[i].salary;
  };
// this does the basic math of taking the sum and dividing by the array length
 let salaryAv = salarySum / employeesArray.length;
console.log(`Average salary is ${salaryAv}`)
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
// gets a random rumber from the array index
let randomIndex = Math.floor(Math.random()* employeesArray.length);
// gets the random name from the employees array
let randomWorker = employeesArray[randomIndex];
// logs our first and last name based on the random index.//dot notation
console.log(`${randomWorker.firstName} ${randomWorker.lastName}You WON a trip to the"island"`);


};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
