export function pauseOverlay(element, parent, isPaused) {
    let visibility;
    if (isPaused) {
        visibility = 'visible';
        parent.appendChild(element);
    } else {
        visibility = 'collapse';
        parent.removeChild(element);
    }
    element.style.visibility = visibility;
}


export class Score {
    constructor() {
        this.score = 0;
    }

    add(element) {
        this.score += 1;
        element.innerText = `${this.score}`;
    }

    reset(element) {
        this.score = 0;
        element.innerText = `${this.score}`
    }
}