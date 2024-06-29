import { Snake } from "./components/snake.js";
import Food from "./components/food.js";
import { SPEED, BORDER, canvasSize, squareSize, gridCol, gridRow, CENTER } from "./components/game.js";
import {pauseOverlay, Score} from "./components/ui.js";


const canvas = document.getElementById("root");
const pauseH2 = document.getElementById("pause");
const scoreElement = document.getElementById("score");

canvas.style.gridTemplateColumns = `repeat(${gridCol}, ${squareSize}px)`;
canvas.style.gridTemplateRows = `repeat(${gridRow}, ${squareSize}px)`;
canvas.style.width = `${canvasSize}px`;
canvas.style.height = `${canvasSize}px`;

const snake = new Snake();
const food = new Food();
const score = new Score();
let isPaused = false;

function restart() {
    snake.body.forEach(part => {
        canvas.removeChild(part.element);
    })
}

function place(item) {
    item.element.style.gridColumn = item.x;
    item.element.style.gridRow = item.y;
    canvas.appendChild(item.element);
}

function draw() {
    canvas.innerHTML = "";
    snake.body.forEach(part => {
        place(part);
    });
    place(food)
}

function outOfBounds(head) {
    return head.x < BORDER.min || head.x >  BORDER.max || head.y < BORDER.min || head.y >  BORDER.max; 
}

function foodColission(head, food) {
    return head.x - food.x === 0 && head.y - food.y === 0;
}

const interval = setInterval(() => {
    if (!isPaused) {
        snake.move();
        draw();
        if (outOfBounds(snake.head) || snake.hitsItSelf()) {
            restart();
            snake.reset();
            food.respawn();
            score.reset(scoreElement)
        } 
        if (foodColission(snake.head, food)) {
            snake.eat();
            food.respawn();
            score.add(scoreElement);
        }
    }
}, SPEED);

window.addEventListener("keydown", (e) => {
    e.preventDefault(); 
    if (['w','s','a','d'].includes(e.key)) {
        snake.head.changeHeading(e.key);
    }
    if (e.key === "Tab") {
        isPaused = !isPaused;
        console.log(pauseH2);
        pauseOverlay(pauseH2,canvas, isPaused);
    }
})