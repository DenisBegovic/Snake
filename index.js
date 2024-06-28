import { Snake } from "./classes/snake.js";
import Food from "./classes/food.js";

const SPEED = 800;
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const OFFSET = 15;


function restartGame(canvas, snake, food) {
    snake.body.forEach(part => {
        canvas.removeChild(part.box);
    });
    snake.toStart(canvas);
    food.respawn();
}

function initGame() {
    const canvas = document.getElementById("root");
    const snake = new Snake();
    const food = new Food();
    snake.toStart(canvas);
    canvas.appendChild(food.element);

    return {canvas, snake, food};
}

function checkIfOutOfBounds(head) {
    let headPos = head.position();
    if (headPos.x < 5 || headPos.x > 575 || headPos.y < 5 || headPos.y > 575) {
        console.log("Out of bounds");
        return true;
    }
}

function checkCollisionWithFood(head, food) {
    const distance = head.distance(food.position());
    console.log(distance);
    if (distance.x < OFFSET && distance.y < OFFSET) {
        console.log("collision with food");
        return true;
    }
}

function game() {

}


window.addEventListener('load', () => {
    const {canvas, snake, food} = initGame();
    let isPaused = false;

    
});
