// task 1
function createWindow() {
  let newWindow = window.open('', '', 'width=300,height=300');
  setTimeout(() => {
    newWindow.resizeTo(500, 500);
  }, 2000);

  setTimeout(() => {
    newWindow.moveTo(200, 200);
  }, 4000);

  setTimeout(() => {
    newWindow.close();
  }, 6000);
}

// task 2
function changeCss() {
  let textLine = document.querySelector('#text');
  textLine.style.color = 'orange';
  textLine.style.fontSize = '20px';
  textLine.style.fontFamily = 'Comic Sans MS';
}

// task 3
let firstBtn = document.querySelector('#makeBlue');
firstBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
});

let secondBtn = document.querySelector('#makePink');
secondBtn.addEventListener('dblclick', () => {
  document.body.style.backgroundColor = 'pink';
});

let thirdBtn = document.querySelector('#makeBrown');
thirdBtn.addEventListener('mousedown', () => {
  document.body.style.backgroundColor = 'brown';
});
thirdBtn.addEventListener('mouseup', () => {
  document.body.style.backgroundColor = 'white';
});

let hoverUrl = document.querySelector('#makeYellow');
hoverUrl.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'yellow';
});
hoverUrl.addEventListener('mouseout', () => {
  document.body.style.backgroundColor = 'white';
});

//task 4
function deleteOption() {
  let list = document.querySelector('#usersList');
  list.remove(list.selectedIndex);
}

// task 5
function mouseEvents() {
  let btn = document.querySelector('#eventButton');
  let testArea = document.querySelector('#textArea');
  btn.onmouseover = () => {
    testArea.prepend(document.createTextNode('Mouse is on me'));
    testArea.prepend(document.createElement('br'));
  }
  btn.onmouseout = () => {
    testArea.prepend(document.createTextNode('Mouse is not on me!'));
    testArea.prepend(document.createElement('br'));
  }
  btn.onclick = () => {
    testArea.prepend(document.createTextNode('I was pressed!'));
    testArea.prepend(document.createElement('br'));
  };
}

// task 6
function trackWindowDimensions() {
  const windowWidth = document.querySelector('#windowWidth');
  const windowHeigth = document.querySelector('#windowHeight');
  const handleResize = () => {
    windowWidth.textContent = window.innerWidth;
    windowHeigth.textContent = window.innerHeight;
  }
  window.addEventListener('resize', handleResize);
}

// task 7
const citiesList = {
  ger: ['Bremen', 'Frankfurt', 'Berlin', 'Nuremberg'],
  usa: ['New-York', 'Washington', 'Boston', 'Chicago'],
  ukr: ['Lviv', 'Che', 'Kyiv', 'Stryi']
}

let countryDropDownList = document.querySelector('#countries');
let citiesDropDownList = document.querySelector('#cities');
let infoLine = document.querySelector('#output');

function populateCitiesList() {
  citiesDropDownList.options.length = 0;
  const selectedCountry = countryDropDownList.value;
  let citiesInCountry = citiesList[selectedCountry];
  citiesInCountry.forEach(city => {
    let option = document.createElement('option');
    option.innerHTML = city;
    citiesDropDownList.append(option);
  });
}

function updateInfoLine() {
  infoLine.innerHTML = `${countryDropDownList.options[countryDropDownList.selectedIndex].textContent}, ${citiesDropDownList.options[citiesDropDownList.selectedIndex].textContent}`;
}

countryDropDownList.addEventListener('change', populateCitiesList);
countryDropDownList.addEventListener('change', updateInfoLine);
citiesDropDownList.addEventListener('change', updateInfoLine);
