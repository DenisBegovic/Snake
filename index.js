import { Snake, SnakeSegment } from "./classes/snake.js";
const SPEED = 1000;

window.addEventListener('load', () => {
    const canvas = document.getElementById("root");
    const snake = new Snake();
    for (let i = 0; i < snake.body.length; i++) {
        let part = snake.body[i];
        canvas.appendChild(part.box);
    }

    const interval = setInterval(() => {
        snake.move();
    }, SPEED);

    document.addEventListener("keypress", (e) => {
        console.log(e.key);
        snake.head.changeHeading(e.key);
    });
}) 
