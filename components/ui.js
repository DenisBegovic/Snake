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