// src/index.js
import '../src/css/style.css'; // Импорт стилей
import goblinImage from '../src/img/goblin.png'; // Импорт картинки гоблина

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.querySelector('.game-board');
    const boardSize = 4;
    let currentPosition = null;

    // Функция для создания игрового поля
    function createBoard() {
        for (let i = 0; i < boardSize * boardSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('game-board-cell');
            cell.dataset.index = i;
            gameBoard.appendChild(cell);
        }
    }

    // Функция для создания гоблина
    function createGoblin() {
        const goblin = document.createElement('img');
        goblin.src = goblinImage;
        goblin.alt = 'Goblin';
        goblin.classList.add('goblin');
        return goblin;
    }

    // Функция для получения случайной позиции
    function getRandomPosition() {
        return Math.floor(Math.random() * boardSize * boardSize);
    }

    // Функция для перемещения гоблина
    function moveGoblin() {
        let newPosition = getRandomPosition();
        while (newPosition === currentPosition) {
            newPosition = getRandomPosition(); // Чтобы не оставался на месте
        }

        const cells = document.querySelectorAll('.game-board-cell');
        if (currentPosition !== null) {
            cells[currentPosition].innerHTML = ''; // Очищаем предыдущую позицию
        }

        cells[newPosition].appendChild(createGoblin()); // Добавляем гоблина в новую позицию
        currentPosition = newPosition;
    }

    createBoard();
    moveGoblin(); // Первоначальное размещение гоблина
    setInterval(moveGoblin, 1000); // Перемещаем гоблина каждую секунду
});
