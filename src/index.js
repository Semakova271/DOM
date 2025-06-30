import './css/style.css';
import goblinImg from './img/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const rows = 4;
  const cols = 4;
  
  // Создаем игровое поле
  for (let i = 0; i < rows * cols; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    board.appendChild(cell);
  }
  
  const cells = document.querySelectorAll('.cell');
  const goblin = document.createElement('img');
  goblin.src = goblinImage; // Используем импортированное изображение
  goblin.className = 'goblin';
  
  let currentPosition = null;
  
  function getRandomPosition() {
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * cells.length);
    } while (newPosition === currentPosition && cells.length > 1);
    return newPosition;
  }
  
  function moveGoblin() {
    const newPosition = getRandomPosition();
    
    if (currentPosition !== null) {
      cells[currentPosition].innerHTML = '';
    }
    
    cells[newPosition].append(goblin);
    currentPosition = newPosition;
  }
  
  // Начальная позиция
  currentPosition = getRandomPosition();
  cells[currentPosition].append(goblin);
  
  // Перемещаем каждую секунду
  setInterval(moveGoblin, 1000);
});
// Добавляем пустую строку в конце файла