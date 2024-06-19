// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let keepEntering = true;

// WHILE LOOP FOR THE USER TO CONTINUE ENTERING NAMES AND SALARIES UNTIL THEY ARE FINISHED
  while (keepEntering) {
    const firstName = prompt('First Name');
    const lastName = prompt('Last Name');
    const salary = prompt('Salary');
    if (isNaN(salary)) {
      salary = 0;
    }

// ADDED AN OBJECT AND CONVERTED SALARY PROPERTY INTO A FLOAT TO SHOW DECIMALS
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
  };
// ADDS THE EMPLOYEE OBJECT TO THE END OF THE EMPLOYEE ARRAY
    employees.push(employee);

// ASKS USER TO CONFIRM IF THEY WANT TO ADD ANOTHER EMPLOYEE
    keepEntering = confirm('Add Another Employee?');
 }
  return employees;
}

// DISPLAYS THE AVERAGE SALARY OF EACH EMPLOYEE
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  const numEmployees = employeesArray.length;

  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }
// CALCULATES AVERAGE SALARY BY DIVIDING THE SALARY TOTAL BY THE NUMBER OF EMPLOYEES AND THEN USES FIXED NOTATION TO DISPLAY ONLY 2 DIGITS AFTER THE DECIMAL POINT
  const averageSalary = totalSalary / numEmployees;
  console.log(`The average salary amongst our ${numEmployees} employees is ${averageSalary.toFixed(2)}`)
}

//SELECTS A RANDOM EMPLOYEE FROM THE ARRAY AND CONSOLE LOGS THE WINNER OF THE DRAWRING BASED ON A ROUNDED SALARY NUMBER
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
