// task 1
function checkForUpperCase(str) {
  //if (str[0].toUpperCase() === str[0]) {
  if (/^[A-Z]/.test(str)) {
    return 'String starts with upper case character';
  } else {
    return 'String does not start with upper case character';
  }
}

function upperCase() {
  console.log(checkForUpperCase('regexp'));
  console.log(checkForUpperCase('Regexp'));
}

// task 2
function validateEmail(email) {
  //const conditions = /\S+@\S+\.\S+/; // easy way
  const conditions = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (conditions.test(email)) {
    return 'email is valid';
  } else {
    return 'email is not valid';
  }
}

function checkEmail() {
  console.log(validateEmail('Qmail2@mail.com'));
}

// task 3
function searchString() {
  const stringLine = 'cdbBdbsbz';
  const checkCondition = /d(b+)(d)/i;
  console.log(stringLine.match(checkCondition));
}

// task 4
function replaceLines() {
  const inputString = 'Java Script';
  // works for any number of string elements
  console.log(inputString.match(/(\w+)/g).reverse().toString());
  // solution for two elements 
  console.log(inputString.replace(/(\w+)\s(\w+)/, '$2,$1'));
}

// taks 5
function cardValidation() {
  const cardNumber = '9999-9999-9999-9999';
  const checkCondition = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
  //const checkCondition = /^([0-9]{4})-?([0-9]{4})-?([0-9]{4})-?([0-9]{4})$/;
  let check = checkCondition.test(cardNumber);
  console.log(check);
}

// taks 6
function checkEmailFormat(emailInput) {
  const checkCondition = /^[a-z0-9]+[-|_]?\w+@\w+\.\w{2,}$/i;
  if (checkCondition.test(emailInput)) {
    return 'Email is correct!';
  } else {
    return 'Email is not correct!';
  }
}

function validateEmails() {
  console.log(checkEmailFormat('mymail@gmail.com'));
  console.log(checkEmailFormat('#my_mail@gmail.com'));
  console.log(checkEmailFormat('my_ma--il@gmail.com'));
}

// task 7
function checkLogin(login) {
  const checkCondition = /^\D{1}[(A-Z0-9)+(\.)?(A-Z0-9)+?]{1,9}$/i; // first can't be a number, then any alphanumeric, including dot, ignore case
  const numberExtractor = /\d+\.?\d?/g;
  if (checkCondition.test(login)) {
    return `Login is valid.
    ${login.match(numberExtractor)}`;

  } else {
    return `Login is invalid.
    ${login.match(numberExtractor)}`;
  }
}

function validateLogins() {
  console.log(checkLogin('yYh1.13iuh'));
  console.log(checkLogin('ee1*1rew3'));
  console.log(checkLogin('1ee1.1et3'));
}
