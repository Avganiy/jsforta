// task 1
function multiplierArray() {
  const initialArray = [2, 3, 4, 5];
  let multiplierResult = 1;
  let i = 0;
  while (i < initialArray.length) {
    multiplierResult = initialArray[i] * multiplierResult;
    i++;
  }
  return console.log(multiplierResult);
}

// task 2
function forLoopOddEvenNumbers() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

// task 3
function getNumberOfElements() {
  let numOfEl = Number(prompt('Please enter number of elements you want to see in array:'));
  if (isNaN(numOfEl)) {
    return alert('Please restart and try again with number value');
  }
  randArray(numOfEl);
}

function randArray(k) {
  const min = 1, max = 500;
  let randomArray = [];
  for (let i = 0; i < k; i++) {
    randomArray[i] = Math.floor(Math.random() * (max - min) + min);
  }
  console.log(randomArray);
}

// task 4
function calculateDegree() {
  const numValue = Number(prompt('Please enter whole number:'));
  if (numValue % 1 !== 0) {
    return alert('Please restart and try again with whole number value');
  }

  const degreeValue = Number(prompt('Please enter degree value:'));
  if (!Number.isInteger(degreeValue)) {
    return alert('Please restart and try again with whole degree number value');
  }

  raiseToDegree(numValue, degreeValue);
}
function raiseToDegree(a, b) {
  let result = a ** b;
  console.log(`${b} degree for ${a} is ${result}`);
}

// task 5
function getRandomArray() {
  let numberOfElements = Math.floor(Math.random() * 10); // get random number of elements in array
  if (numberOfElements === 0) numberOfElements = 1; // ensure array will get at least 1 element
  const min = -500, max = 500;
  let randomArray = []; //create array of random values
  for (let i = 0; i < numberOfElements; i++) {
    randomArray[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return randomArray;
}

function findMinSpread() {
  let randomArray = getRandomArray();
  console.log(randomArray);
  let minValue = Math.min(...randomArray); // get minimum value from passed array
  console.log(`Minimum value in ${randomArray} array is 
  ${minValue}`);
}

function minArgument() {
  let i = 0;
  let min = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    if (min > arguments[i]) {
      min = arguments[i];
    }
  }
  return min;
}

function fundMinArguments() {
  let randomArray = getRandomArray();
  console.log(randomArray);
  console.log(`Minimum value in ${randomArray} array is
  ${minArgument(...randomArray)}`);
}

// task 6
function fundUniqueLoop() { // via loop
  const arr = getRandomArray();
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j]) {
          result = true;
          break;
        }
      }
    }
    if (result) {
      break;
    }
  }
  if (result) {
    console.log(`Array ${arr} has duplicated values`);
  } else {
    console.log(`Array ${arr} has unique values`);
  }
}

function fundUniqueSet() { // via Set constructor
  const arr = getRandomArray();
  if (arr.length !== new Set(arr).size) {
    console.log(`Array ${arr} has duplicated values`);
  } else {
    console.log(`Array ${arr} has unique values`);
  }
}

// task 7

// task 8
function upperCase(){ 
  const inputString = 'i love java script';
}