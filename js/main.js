const links = [{
    label: 'Week 1 Notes',
    url: 'week1.html',
  },
  {
    label: 'Week 2 Notes',
    url: 'week2.html',
  },
  {
    label: 'Week 2 Team Activity',
    url: 'week2-team.html',
  },
  {
    label: 'Week 3 Notes',
    url: 'week3.html',
  },
  {
    label: 'Week 3 Team Activity',
    url: 'week3-team.html',
  },
  {
    label: 'Week 4 Notes',
    url: 'week4.html',
  },
  {
    label: 'Week 4 Team Activity',
    url: 'week4-team.html',
  },
  {
    label: 'Week 5 Notes',
    url: 'week5.html',
  },
  {
    label: 'Week 5 Team Activity',
    url: 'week5-team.html',
  },
  {
    label: 'To Do List',
    url: 'todo.html',
  }
];

// Create a new list item for each link
const ol = document.getElementById('assignments'); 

// Loop through the links array
links.forEach(link => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  
// Set the text of the anchor tag to the label of the link
  a.setAttribute('href', link.url);
  a.innerText = link.label;

// Append the anchor tag to the li 
  li.appendChild(a);
  ol.appendChild(li);

});

// Week 2 Team Activity
// Display a value entered into the textbox
function reqOne() {
  const input = document.getElementById('req1Input').value;
  const outputElement = document.getElementById('req1Output');
  outputElement.innerHTML = 'You entered: ' + input;
}
// Sum of numbers entered addition
function reqTwo() {
  const input = document.getElementById('req2Input').value;
  const outputElement = document.getElementById('req2Output');
  const inputInt = parseInt(input);
  if (inputInt !== NaN) {
    outputElement.innerHTML = 'total: ' + sum(inputInt);
  }
}
// Sum of numbers added from the box
function sum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}
// Adding the numbers entered into the textbox
function add() {
  const number1 = document.getElementById('req3Number1').value;
  const number2 = document.getElementById('req3Number2').value;
  const outputElement = document.getElementById('req3Output');
  const num1Float = parseFloat(number1);
  const num2Float = parseFloat(number2);
  if ((num1Float !== NaN) & (num2Float !== NaN)) {
    const total = num1Float + num2Float;
    outputElement.innerHTML = 'Total: ' + total;
  }
}

// Week 4 Team Activity
      const divBoard = document.querySelector('.divBoard');
      const resetButton = document.getElementById('reset');
      const player1 = 'X';
      const player2 = 'O';
      let player = player1;
      function addPiece(e) {
        console.log(e.target);
        e.target.innerHTML = player;
        if (player === player1) player = player2;
        else player = player1;
      }
      // div version
      function resetBoardDiv() {
        const divBoard = document.querySelector('.divBoard');
        for (let i = 0; i < divBoard.children.length; i++) {
          divBoard.children[i].innerText = '';
        }
        const children = Array.from(divBoard.children);
        const empty = children.filter(function(child) {
          return child.innerText == 'X' || child.innerText == 'O';
        });
        console.log(empty);
      }
      divBoard.addEventListener('click', addPiece);
      reset.addEventListener('click', resetBoardDiv);