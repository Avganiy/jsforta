// task 1
function calcRectangleArea() {
  try {
    let rectParams = prompt('Please enter width and height of rectangle, separated by comma:');
    let rectParamsArr = rectParams.split(',');
    const numbersArr = validateAndConvertToNumbers(rectParamsArr);
    const rectArea = numbersArr[0] * numbersArr[1];
    alert(`Rectangle area with sides ${numbersArr[0]} and ${numbersArr[1]} is ${rectArea} sq units`)
  }
  catch (e) {
    alert(e);
  }
}

function validateAndConvertToNumbers(paramsArray) {
  if (paramsArray === null) {
    throw ('No values were provided. Please try again.')
  }
  if (paramsArray.length !== 2) {
    throw ('You have entered incorrect number of parameters. Please try again with 2 parameters');
  }
  let numbersArr = [];
  paramsArray.forEach(parameter => {
    const checkedValue = Number(parameter);
    if (isNaN(checkedValue) || checkedValue <= 0) {
      throw (`You have entered incorrect parameter "${parameter}". Please try again with numbers greater than zero`);
    }
    numbersArr.push(checkedValue);
  });
  return numbersArr;
}

// task 2
function checkAge() {
  try {
    const age = prompt('Please enter your age:');
    if (age == null) {
      throw new Error('You did not enter any value. Please try again.')
    } else if (age === '') {
      throw new Error('The field is empty! Please enter your age')
    } else if (Number(age) < 14) {
      throw new Error(`You are too young for this content. Please wait ${14 - age} year(s)`);
    } else if (isNaN(Number(age))) {
      throw new Error('Your entered invalid value. Please enter a number')
    }
    alert('You can watch this film');

  } catch (e) {
    alert(`${e.name}
     ${e.message}`);
  }
}

// task 3
class MonthException {
  constructor(message) {
    this.name = 'MonthException';
    this.message = message;
  }
}

function showMonthName() {
  const userInput = prompt('Please enter a month number:');
  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  try {
    if (monthArray.length < userInput || userInput < 1 || userInput === '' || userInput === null || isNaN(userInput)) {
      throw new MonthException(`Incorrect month number`);
    }
    console.log(monthArray[userInput - 1]);
  } catch (e) {
    console.log(e.name, e.message);
  }
}

// task 4
function showUser(id) {
  if (id < 0) {
    throw new Error(`ID must not be negative: ${id}`);
  }
  return { id };
}

function showUsers(ids) {
  let resultArr = [];
  ids.forEach(id => {
    try {
      resultArr.push(showUser(id));
    } catch (e) {
      console.log(e.name, e.message);
    }
  });
  return console.log(resultArr);
}

function getRandomArray() {
  let numberOfElements = 4;
  const min = -500, max = 500;
  let randomArray = [];
  for (let i = 0; i < numberOfElements; i++) {
    randomArray[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return randomArray;
}

function showValidUsers() {
  const ids = getRandomArray();
  return showUsers(ids);
}
