const STEP = 15;

export class SnakeSegment {
    constructor(id, x ,y) {
        this.box = document.createElement("div");
        this.box.className = "snake-seg";
        this.box.id = id;
        this.width = 20;

        this.x = x;
        this.y = y - this.width * id;
        this.heading = "right";

        this.box.style.top = `${this.y}px`;
        this.box.style.left = `${this.x}px`;
    }

    forward() {
        this.updatePosition();
        this.box.style.left = `${this.x}px`;
        this.box.style.top = `${this.y}px`;
    }

    goto({x, y}) {
        this.x = x;
        this.y = y;
        this.box.style.left = `${this.x}px`;
        this.box.style.top = `${this.y - 20 * this.box.id}px`;
    }

    updatePosition() {
        switch(this.heading) {
            case "up":
                this.y -= STEP;
                break;

            case "down":
                this.y += STEP;
                break;

            case "left":
                this.x -= STEP;
                break;

            case "right":
                this.x += STEP;
                break;
        }
    }

    position() {
        return {x: this.x, y: this.y};
    }

    changeHeading(input) {
        switch(input) {
            case "w":
                if(this.heading != "down") {
                    this.heading = "up"; 
                }
                break;

            case "s":
                if(this.heading != "up") {
                    this.heading = "down"; 
                }
                break;

            case "a":
                if(this.heading != "right") {
                    this.heading = "left"; 
                }
                break;

            case "d":
                if(this.heading != "left") {
                    this.heading = "right"; 
                }
                break;
        }
    }
    
    distance({x, y}) {
        return {x: Math.abs(this.x - x), y: Math.abs(this.y - y)};
    }
}

export class Snake {
    constructor() {
        this.body = [...this.createStartingBody()];
        this.head = this.body[0];
    }

    createStartingBody() {
        let smallSnake = [];
        for (let i = 0; i < 3; i++) {
            smallSnake.push(new SnakeSegment(i, 290, 290));
        }
        return smallSnake;
    }

    eat() {
        console.log("Snake ate");
        let newId = this.body.length;
        let position = this.body[newId - 1].position();
        let newPart = new SnakeSegment(newId, position.x, position.y);
        this.body.push(newPart);
    }
    
    move() {
        let positions = [];
        for (let i = 0; i < this.body.length; i++) {
            positions.push(this.body[i].position());
            if (i === 0) {
                this.head.forward();
            } else {
                this.body[i].goto(positions[i - 1]);
            }
        }
    }

    checkColisionToBody() {
        for (let i = 1; i < this.body.length; i++) {
            let distance = this.head.distance(this.body[i].position())
            if(distance.x < STEP && distance.y < STEP) {
                console.log("Collision with body");
                return true;
            }
        }
    }

    toStart(canvas) {
        this.body = [...this.createStartingBody()];
        this.body.forEach(part => {
            canvas.appendChild(part.box);
        });
        this.head = this.body[0];
    }
}

