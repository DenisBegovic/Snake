import { Snake } from "./classes/snake.js";
import Food from "./classes/food.js";

const canvas = document.getElementById("root");
const snake = new Snake();
const food = new Food();
const SPEED = 75;
const BORDER = {min: 0, max: 50};


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
    return head.x == food.x && head.y == food.y;
}

setInterval(() => {
    snake.move();
    draw();
    if (outOfBounds(snake.head) || snake.hitsItSelf()) {
        restart();
        snake.reset();
        food.respawn();
    } 
    if (foodColission(snake.head, food)) {
        snake.eat();
        food.respawn();
    }
}, SPEED);

window.addEventListener("keydown", (e) => {
    if (['w','s','a','d'].includes(e.key)) {
        snake.head.changeHeading(e.key);
    }
})