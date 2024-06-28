
const BOUNDS = {min: 10, max: 575};


export default class Food {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = "food";
        this.x = this.rng();
        this.y = this.rng();

        this.element.style.top = `${this.y - 60}px`
        this.element.style.left = `${this.x}px`
    }

    rng() {
        return Math.floor(Math.random() * (BOUNDS.max - BOUNDS.min) + BOUNDS.min);
    }

    position() {
        return {x: this.x, y: this.y};
    }

    rePosition() {
        this.x = this.rng();
        this.y = this.rng();
    }

    respawn() {
        this.rePosition()
        this.element.style.top = `${this.y - 60}px`
        this.element.style.left = `${this.x}px`
    }
}