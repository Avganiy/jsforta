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
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
}

function getPropertiesAndValues() {
  return showProps(randomObject);
}

// task 3
class Person {
  constructor(fname, surname) {
    this.fname = fname;
    this.surname = surname;
  }
  showFullName() {
    return `${this.fname} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(fname, surname, year) {
    super(fname, surname);
    this.year = year;
  }
  showFullName(middleName) {
    return `${super.showFullName()} ${middleName}`;
  }

  showCourse() {
    const getCurrentYear = new Date().getFullYear();
    const getCurrentCourse = getCurrentYear - this.year;
    return getCurrentCourse;
  }
}

function inheritance() {
  let testStudent = new Student('Yerney', 'Yernson', 2018);
  console.log(testStudent.showFullName('Yernovych'));
  console.log(`Current course: ${testStudent.showCourse()}`);
}

// task 4
class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  get showExp() {
    return this.#experience;
  }

  set setExp(value) {
    this.#experience = value;
  }

  getSalary() {
    return this.dayRate * this.workingDays;
  }

  getSalaryWithExperience() {
    return this.getSalary() * this.#experience;
  }

  showSalary() {
    console.log(`${this.fullName} base salary: ${this.getSalary()}`);
  }

  showSalaryWithExperience() {
    console.log(`${this.fullName} salary with experience: ${this.getSalaryWithExperience()}`);
  }
}

function generateList(arr) {
  arr.forEach(worker => {
    console.log(`===== Start of Record =====`);
    console.log(worker.fullName);
    worker.showSalary();
    console.log('Experience: ' + worker.showExp);
    worker.showSalaryWithExperience();
    worker.setExp = (Math.random() * 10).toFixed(1);
    console.log('New experience: ' + worker.showExp);
    worker.showSalaryWithExperience();
  });
  console.log(`========`);
  let sortedArray = arr.sort((a, b) => a.showExp - b.showExp);
  sortedArray.forEach(worker => {
    console.log(`worker_${worker.fullName}: ${worker.getSalaryWithExperience()}`);
  })
}

function listWorkers() {
  const workers = [
    new Worker('Tom Thomson', 34, 20),
    new Worker("Adam Bishop", 12, 21),
    new Worker("Andy Ratch", 40, 22)
  ];
  generateList(workers);
}

// task 5
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, h) {
    super();
    this.a = a;
    this.h = h;
  }
  getArea() {
    return this.a * this.h * 0.5;
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.a = a;
  }
  getArea() {
    return Math.pow(this.a, 2);
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea() {
    return Math.PI * Math.pow(this.r, 2);
  }
}

class FakeObject {
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

function handleFigures(arr) {
  let totalArea = 0;
  arr.forEach(figure => {
    if (figure instanceof GeometricFigure) {
      console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
      totalArea += figure.getArea();
    } else {
      console.log(`${figure.toString()} is not a GeometricFigure`);
    }
  });
  console.log(`${totalArea} // total area`);
}

function executeFigures() {
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5), new FakeObject()];
  handleFigures(figures);
}