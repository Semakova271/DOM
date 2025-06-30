import './css/style.css';
import goblinImg from './img/goblin.png';

const boardSize = 4;
const board = document.createElement('div');
board.classList.add('game-board');

// Создаем игровое поле
for (let i = 0; i < boardSize * boardSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
}

document.body.append(board);

let currentCell = null;

function getRandomCell() {
  const cells = document.querySelectorAll('.cell');
  return cells[Math.floor(Math.random() * cells.length)];
}

function moveGoblin() {
  const goblin = document.querySelector('.goblin');

  // Удаляем гоблина из текущей ячейки
  if (goblin) {
    goblin.remove();
  }

  let nextCell;
  do {
    nextCell = getRandomCell();
  } while (nextCell === currentCell); // Чтобы не попасть в ту же ячейку

  currentCell = nextCell;

  // Создаем нового гоблина
  const newGoblin = document.createElement('div');
  newGoblin.classList.add('goblin');
  currentCell.append(newGoblin);
}

// Запускаем интервал перемещения гоблина
setInterval(moveGoblin, 1000);