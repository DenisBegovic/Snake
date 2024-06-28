export class SnakeSegment {
    constructor(id, x ,y) {
        this.box = document.createElement("div");
        this.box.className = "snake-seg";
        this.id = id
        this.box.id = id;
        this.width = 20

        this.x = x;
        this.y = y - this.width * this.id;
        this.heading = "right";
        this.step = 20;

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
                this.y -= this.step;
                break;

            case "down":
                this.y += this.step;
                break;

            case "left":
                this.x -= this.step;
                break;

            case "right":
                this.x += this.step;
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
 
}

export class Snake {
    constructor() {
        this.body = [new SnakeSegment(0, 290, 290), new SnakeSegment(1, 290, 290), new SnakeSegment(2, 290, 290)];
        this.head = this.body[0];
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
}

