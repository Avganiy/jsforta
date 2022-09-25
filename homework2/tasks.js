// task 1
function completeCodeLine() {
  let x = 1;
  let y = 2;

  let res1 = `${x}${y}`;
  let alterRes1 = x + '' + y;
  console.log(res1); // "12"
  console.log(alterRes1); // "12"
  console.log(typeof res1); // "string"
  console.log(typeof alterRes1); // "string"

  let res2 = (x < y ? 'true2' : false);
  console.log(res2); // "true2"
  console.log(typeof res2); // "string"

  let alter = x < y;
  let alterRes2 = `${alter}2`;
  console.log(alterRes2); // "true2"
  console.log(typeof alterRes2); // "string"

  let res3 = x !== null
  console.log(res3); // true
  console.log(typeof res3); // "boolean"

  let res4 = (y - x * y) / (y - x * y);
  console.log(res4); // NaN
  console.log(typeof res4); // "number"
}

// task 2
function checkIfNumberIsPositiveAndEven() {
  const providedNumber = Number(prompt('Please enter real number:'));
  if (isNaN(providedNumber)) {
    return alert('Please restart and try again with number value');
  }

  const checkIfNumberIsPositive = providedNumber > 0;
  const checkIfNumberIsEven = providedNumber % 2 === 0;
  const checkIfMultiplyBySeven = providedNumber % 7 === 0;

  if (checkIfNumberIsPositive && checkIfNumberIsEven) {
    console.log(`Provided number ${providedNumber} is even positive number`);
  } else {
    console.log(`Provided number ${providedNumber} is not positive even number`);
  }

  if (checkIfMultiplyBySeven) {
    console.log(`Provided number ${providedNumber} is a multiple of 7`);
  } else {
    console.log(`Provided number ${providedNumber} is not a multiple of 7`);
  }

  // simple solution
  const check = checkIfNumberIsPositive && checkIfNumberIsEven && checkIfMultiplyBySeven;
  check ? console.log('Provided number is even, positive number which is a multiple of 7') : console.log('Please try again');
}

// task 3
function arrayOperations() {
  let baseArray = [];
  baseArray[0] = 56700;
  baseArray[1] = 'Array string';
  baseArray[2] = 5 > 2;
  baseArray[3] = null;
  console.log(baseArray);
  alert(`Array length is ${baseArray.length}`); // show amount of elements in array
  console.log(`Array length is ${baseArray.length}`);

  baseArray[4] = prompt('Please enter any value into array:'); // adding new element
  console.log(baseArray);
  alert(`${baseArray.indexOf(baseArray[4]) + 1} element value is ${baseArray[4]}`);
  console.log(`${baseArray.indexOf(baseArray[4]) + 1} element value is ${baseArray[4]}`);

  baseArray.shift(); // remove 1st element
  alert(`Array content ${baseArray}`);
  console.log(`Array content ${baseArray}`);
}

// task 4
function concatinateArray() {
  let cities = ['Rome', 'Lviv', 'Warsaw'];
  let stringCities = cities.toString();
  let result = stringCities.replace(/,/g, '*');
  console.log(result);
}

// task 5
function isAdultCheck() {
  const isAdult = Number(prompt(`Please enter your age below:`));
  if (isAdult >= 18) {
    alert(`You are adult. Welcome to the club.`);
  } else {
    alert(`You're too young, enjoy :)`);
  }
}

// task 6
function triangleCalculations() {
  let triangleArray = [];
  triangleArray[0] = Number(prompt('Please enter length of side A in cm'));
  triangleArray[1] = Number(prompt('Please enter length of side B in cm'));
  triangleArray[2] = Number(prompt('Please enter length of side C in cm'));

  triangleArray.forEach(element => {
    const isNaNCheck = isNaN(element);
    const isPositiveCheck = element > 0;
    if (isNaNCheck || !isPositiveCheck) {
      return alert(`Incorrect data (${element}). Please try again`);
    }
  });

  // calculaate triangle area
  const halfPerimeter = (triangleArray[0] + triangleArray[1] + triangleArray[2]) / 2;
  const trianlgeArea = Math.sqrt(
    halfPerimeter * ((halfPerimeter - triangleArray[0]) * (halfPerimeter - triangleArray[1]) * (halfPerimeter - triangleArray[2]))
  );
  console.log(`Trianlge area value is ${trianlgeArea.toFixed(3)}`);

  // check if triangle is right
  const check1 = triangleArray[0] ** 2 === triangleArray[1] ** 2 + triangleArray[2] ** 2;
  const check2 = triangleArray[1] ** 2 === triangleArray[0] ** 2 + triangleArray[2] ** 2;
  const check3 = triangleArray[2] ** 2 === triangleArray[0] ** 2 + triangleArray[1] ** 2;

  if (check1 || check2 || check3) {
    console.log('The triangle is right');
  } else {
    console.log('The triangle is not right');
  }
}

// task 7
function daytimeAlert() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  const morningStart = 5;
  const dayStart = 11;
  const eveningStart = 17;
  const nightStart = 23;

  // if operator
  if (currentHour >= morningStart && currentHour < dayStart) {
    alert(`Good morning! It's ${currentHour} o'clock`);
  } else if (currentHour >= dayStart && currentHour < eveningStart) {
    alert(`Good day! It's ${currentHour} o'clock`);
  } else if (currentHour >= eveningStart && currentHour < nightStart) {
    alert(`Good evening! It's ${currentHour} o'clock`);
  } else if (currentHour >= nightStart && currentHour < morningStart) {
    alert(`Good night! It's ${currentHour} o'clock`);
  }

  // switch operator
  switch (true) {
    case (currentHour >= 5 && currentHour < 11):
      alert(`Good morning! It's ${currentHour} o'clock`);
      break;
    case (currentHour >= 11 && currentHour < 17):
      alert(`Good day! It's ${currentHour} o'clock`);
      break;
    case (currentHour >= 17 && currentHour < 23):
      alert(`Good evening! It's ${currentHour} o'clock`);
      break;
    case (currentHour >= 23 && currentHour < 5):
      alert(`Good night! It's ${currentHour} o'clock`);
      break;
  }
}