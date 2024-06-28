const CENTER = {x: 25, y: 25};

export class BodyPart {
    constructor(id, x, y) {
        this.element = document.createElement("div");
        this.element.id = id;
        this.element.className = "snake-seg";

        this.x = x;
        this.y = y;

        this.heading = 'd';
    }

    goto({x, y}) {
        this.x = x;
        this.y = y;
    }

    forward() {
        switch (this.heading) {
         case 'w': // UP
             this.y--;
             break; // DOWN
         case 's':
             this.y++;
             break;
         case 'a': // LEFT
             this.x--;
             break;
         case 'd': // RIGHT
             this.x++;
             break;
        
         default:
             break;
        } 
     }
 
     changeHeading(input) {
        switch (input) {
            case 'w':
                if (this.heading != 's') {
                    this.heading = input;
                }
                break;
            case 's':
                if (this.heading != 'w') {
                    this.heading = input;
                }
                break;
            case 'a':
                if (this.heading != 'd') {
                    this.heading = input;
                }
                break;
            case 'd':
                if (this.heading != 'a') {
                    this.heading = input;
                }
                break;
        
            default:
                break;
        }
     }
}



export class Snake {
    constructor() {
        this.body = this.createStartingBody();
        this.head = this.body[0];
        this.heading = 'd';
    }

    createStartingBody() {
        let body = [];
        for (let i = 0; i < 3; i++) {
            body.push(new BodyPart(i, CENTER.x - i, CENTER.y))
        }
        return body;
    }

    move() {
        let positions = [];
        for (let i = 0; i < this.body.length; i++) {
            positions.push(this.position(this.body[i]))
            if (i === 0) {
                this.head.forward();
            } else {
                this.body[i].goto(positions[i - 1]);
            }
        }
    }

    position(part) {
        return {x: part.x, y: part.y};
    }

    reset() {
        this.body = this.createStartingBody();
        this.head = this.body[0];
    }
}
