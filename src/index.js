let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

ctx.fillStyle = "#f00";
ctx.fillRect(20, 20, 200, 200);
ctx.fillRect(600, 200, 50, 50);
