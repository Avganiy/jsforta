// task 1
function destructArr() {
  let arr = ["Tom", "Sam", "Ray", "Bob"];
  let [x, y, , ...z] = arr;
  console.log(x); // "Tom"
  console.log(y); // "Sam"
  console.log(z); // [Bob]
}

// task 2
function desctructObj() {
  let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
  console.log(name2); // "Tom"
  console.log(age2); // 24
  console.log(name4); // "Bob"
  console.log(age4); // 26
}

// task 3
function mul(...arr) {
  //let obj = [1, "str", 2, 3, true];
  let res = 1;
  let indicator = false;
  arr.forEach(element => {
    if (typeof element === 'number') {
      res *= element;
      indicator = true;
    }
  });
  return indicator ? res : 0;

}
function checkArgs() {
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0
}

// task 4
function arrowFunc() {
  let server = {
    data: 0,
    convertToString: function (callback) {
      callback(() => {
        return this.data + "";
      });
    }
  };
  let client = {
    server: server,
    result: "",
    calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function () {
      return ((callback) => {
        this.result = callback();
      });
    }
  };
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"
}

// task 5
function mapBuilder(keys, values) {
  const mapping = new Map();
  for (let i = 0; i < keys.length; i++) {
    mapping.set(keys[i], values[i]);
  }
  return mapping;
}

function mapping() {
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  console.log(map.size); // 4
  console.log(map.get(2)); // "span"
}
