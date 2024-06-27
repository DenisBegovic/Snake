const playground = document.getElementById("root");

const width = playground.clientWidth;
const height = playground.clientHeight;
const start = {
    x: width / 2,
    y: height / 2
}
console.log(start);

const snakeSeg = document.createElement("div");
snakeSeg.className = "snake-seg";


playground.appendChild(snakeSeg);