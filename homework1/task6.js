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
