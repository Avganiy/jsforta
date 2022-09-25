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
