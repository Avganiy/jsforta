function userInfoPropmpt() {
  let login = prompt('Pleasea enter your login below:');
  let password = prompt('Please provide your fake password below:');
  let email = prompt('Please provide your email below:');

  alert(`Dear ${login}, your email is ${email}, your fake password is ${password}`);
}
