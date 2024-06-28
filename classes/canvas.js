
export default class Canvas {
    constructor() {
        this.element = document.getElementById("root");
    }

    place(head) {
        head.style.gridColumnStart = 15;
    }
}
