import { BORDER } from "../game.js";

export default class Food {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = 'food';
        this.x = this.rng();
        this.y = this.rng();
    }

    rng() {
        return Math.floor(Math.random() * (BORDER.min + BORDER.max) - BORDER.min);
    }

    respawn() {
        this.x = this.rng();
        this.y = this.rng();
    }
}