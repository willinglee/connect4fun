var playerOne = 'red';
var playerTwo = 'black';
var currentPlayer = 'red';

window.onload = function() {
  createTable()
}

function createTable() {
  var tableHtml = document.createElement('table');

  for (var i = 0; i < 7; i++) {
    var row = tableHtml.insertRow(i);
    if(i === 0) {
      for(var k = 0; k < 7; k ++) {
        var cell = row.insertCell(k);
        cell.setAttribute('data-col-id', k);
        cell.setAttribute('class', 'cell-button');
        cell.addEventListener('click', chooseColumn);
      }
    } else {
      row.setAttribute('data-row-id', i);
      for(var k = 0; k < 7; k ++) {
        var cell = row.insertCell(k);
        cell.setAttribute('data-col-id', k);
        cell.setAttribute('value', 0);
        cell.setAttribute('class', 'cell');
      }
    }
  }
  document.getElementById('container').appendChild(tableHtml);
}

function pickPlayer() {

}

function chooseColumn() {
  var colId = this.getAttribute('data-col-id');
  var table = document.querySelector('table');

  for(var i = table.rows.length - 1; i > 0; i--) {
    var col = table.rows[i].cells[colId];
    var value = col.getAttribute('value');
    if(value === '0') {
      col.setAttribute('value', 1);
      col.style.backgroundColor = currentPlayer;
      nextTurn();
      return;
    }
  }
}

function nextTurn() {
  if(currentPlayer === 'red') {
    currentPlayer = 'black';
  } else {
    currentPlayer = 'red';
  }
  return currentPlayer;
}

function didWin() {

}
