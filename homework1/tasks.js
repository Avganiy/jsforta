// task 2
function lastNameConsole() {
  console.log("Kramarets");
}

// task 3
function twoVariables() {
  // bullet a
  let firstVariable;
  let secondVariable;

  // bullet b
  firstVariable = true;
  secondVariable = 545;

  // bullet c
  console.log(`First variable value is ${firstVariable}`);
  console.log(`Second variable value is ${secondVariable}`);

  // bullet d
  secondVariable = firstVariable;

  // bullet e
  console.log(`First variable value is ${firstVariable}`);
  console.log(`Second variable value is ${secondVariable}`);
}

// task 4
function multiTypeObject() {
  const multiTypeObject = {
    stringProperty: 'String Property',
    numberProperty: 56700,
    boolProperty: true,
    undefinedProperty: undefined,
    nullProperty: null
  }
  console.log(multiTypeObject);
}

// task 5
function isAdultCheck() {
  let isAdult = confirm('Please confirm you are adult. Type Yes or No');
  console.log(isAdult ? 'User is adult' : 'User is not adult');
}

// task 6
function variablesDeclaration() {
  // declare variables
  let firstName;
  let lastName;
  let checkIfGroupIsTraining;
  let birthYear;
  let maritalStatus = false;

  // assign variables with values
  firstName = 'Yevgen';
  lastName = 'Kramarets';
  checkIfGroupIsTraining = true;
  birthYear = 1988;

  // output variables
  console.log(typeof birthYear); // number
  console.log(typeof checkIfGroupIsTraining); //boolean
  console.log(typeof maritalStatus); //boolean
  console.log(typeof firstName); // string
  console.log(typeof lastName); // string

  //sort and output variables
  const variablesArray = [firstName, lastName, checkIfGroupIsTraining, birthYear, maritalStatus];
  let numericVariables = [], booleanVariables = [], stringVariables = [];
  variablesArray.forEach(variable => {
    if (typeof variable === 'number') {
      numericVariables.push(variable);
    } else if (typeof variable === 'boolean') {
      booleanVariables.push(variable);
    } else if (typeof variable === 'string') {
      stringVariables.push(variable);
    }
  });
  console.log(`Numeric variables: ${numericVariables}`);
  console.log(`Boolean variables: ${booleanVariables}`);
  console.log(`String variables: ${stringVariables}`);

  // declare null and undefined variables
  const nullVariable = null;
  const undefinedVariable = undefined;

  // output variables type into console
  console.log(typeof nullVariable);
  console.log(typeof undefinedVariable);
}

// task 7
function userInfoPropmpt() {
  let login = prompt('Pleasea enter your login below:');
  let password = prompt('Please provide your fake password below:');
  let email = prompt('Please provide your email below:');

  alert(`Dear ${login}, your email is ${email}, your fake password is ${password}`);
}

// task 8
function timeCalculations() {
  const second = 1;
  const secondsInMinute = 60 * second;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInMonth = 30 * secondsInDay;
  // get current date
  const currentDate = new Date();
  const daysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const secondsInCurrentMonth = daysInCurrentMonth * secondsInDay;

  alert(`
    Hour contains ${secondsInHour} seconds.
    Day contains ${secondsInDay} seconds.
    30-days month contains ${secondsInMonth} seconds.
    Current month contains ${secondsInCurrentMonth} seconds.`);
}
