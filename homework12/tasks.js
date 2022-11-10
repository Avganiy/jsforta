// task 1
function getPromise(message, delayValue) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delayValue);
  });
}

function checkPromise() {
  getPromise('test promise', 2000).then((data) => {
    console.log(data);
  });
}

// task 2
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    let check = true;
    let result = 1;
    arr.forEach(item => !isNaN(item) ? check : check = false);

    if (check) {
      arr.forEach(item => {
        result *= item;
      });
    } else {
      reject('Error! Incorrect array!');
    }
    resolve(result);
  });
}

function checkResult() {
  const arr1 = [3, 4, 5];
  const arr2 = [5, "user2", 7, 12];

  calcArrProduct(arr1)
    .then((result) => console.log(result))
    .catch(e => console.log(e));

  calcArrProduct(arr2)
    .then((result) => console.log(result))
    .catch(e => console.log(e));
}

// task 3
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
function showNumbers() {
  let delay = 0;
  for (let i = 0; i <= 10; i++) {
    let interval = Math.floor(Math.random() * 3000);
    getPromise(i, delay).then((result) => {
      console.log(`${result}, delay is ${interval / 1000}`);
    });
    delay += interval;
  }
}

// task 4
async function showNumbersAsync() {
  for (let i = 0; i <= 10; i++) {
    let interval = Math.floor(Math.random() * 3000);
    await getPromise(i, interval)
    console.log(`${i}, delay is ${interval / 1000}`);
  }
}
