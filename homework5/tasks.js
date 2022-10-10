// task 1
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};

function propsCount(obj) {
    console.log(Object.keys(obj).length);
}

function countProperties() {
    return propsCount(mentor);
}

// task 2
let randomObject = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    timeout: 1000,
    temination: true
};

function showProps(obj) {
    let propArr = Object.keys(obj);
    let propValArr = [];
    propArr.forEach(prop => {
        propValArr.push(obj[prop]);
    });

    // console.log(`Object has following properties: ${propArr}`);
    // console.log(`Object has following values: ${propValArr}`);
    console.log(propArr);
    console.log(propValArr);
}

function getPropertiesAndValues() {
    return showProps(randomObject);
}

// task 3
