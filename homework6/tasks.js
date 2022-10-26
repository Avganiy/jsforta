// task 1
function changeValue1() {
  document.querySelector('#test').innerHTML = 'Last';
}
function changeValue2() {
  document.getElementById('test').innerHTML = 'Last';
}

// task 2
function changeSource() {
  document.querySelector('.image').setAttribute('src', 'cat.jpg');
  alert(document.querySelector('.image').getAttribute('src'));
}

// task 3
function listAllDivs() {
  let divsArr = document.querySelector('#text').querySelectorAll('p');
  for (let i = 0; i < divsArr.length; i++) {
    console.log(`Selector text ${[i]}: ${divsArr[i].textContent}`);
  }
}

// task 4
function showList1() {
  let divsArr = document.querySelector('#list').querySelectorAll('li');
  alert(`${divsArr[0].innerHTML}, ${divsArr[4].innerHTML}, ${divsArr[1].innerHTML}, ${divsArr[3].innerHTML}, ${divsArr[2].innerHTML}`);
}

function showList2() {
  const listDiv = document.querySelector('#list');
  alert(`${listDiv.firstElementChild.textContent}, ${listDiv.lastElementChild.textContent}, ${listDiv.firstElementChild.nextElementSibling.textContent}, ${listDiv.lastElementChild.previousElementSibling.textContent}, ${listDiv.firstElementChild.nextElementSibling.nextElementSibling.textContent}`);
}

// task 5
function makeMagic() {
  document.querySelector('#styledheader').style.backgroundColor = '#90EE90'; // backgound color

  let listDiv = document.querySelector('#myDiv').querySelectorAll('p'); // list styling
  listDiv[0].style.fontWeight = 'bold';
  listDiv[1].style.color = 'red';
  listDiv[2].style.textDecoration = 'underline';
  listDiv[3].style.fontStyle = 'italic';

  let list = document.querySelector('#myList'); // horizontal line
  let listArr = list.querySelectorAll('li');
  let horizontalString = '';
  listArr.forEach(element => {
    horizontalString += element.textContent;
  });
  list.innerHTML = horizontalString;

  document.querySelector('span').style.visibility = 'hidden'; // hidden element
}


// tasks 6
function getUserInput() {
  document.querySelector('#input1').value = prompt('Enter values for input 1');
  document.querySelector('#input2').value = prompt('Enter values for input 2');
}

function flipInputs() {
  let firstInputValue = document.querySelector('#input1').value;
  let secondInputValue = document.querySelector('#input2').value;
  document.querySelector('#input1').value = secondInputValue;
  document.querySelector('#input2').value = firstInputValue;
}

function createNewDom() {
  const mainElement = document.createElement('main');
  mainElement.setAttribute('class', 'mainClass check item');
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'myDiv');
  const paragraphElement = document.createElement('p');
  paragraphElement.innerHTML = 'First paragraph';
  mainElement.appendChild(divElement);
  divElement.appendChild(paragraphElement);
  document.querySelector('body').appendChild(mainElement);
  console.log(mainElement);
}