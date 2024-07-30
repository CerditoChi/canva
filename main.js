var canvas = document.getElementById("mc");
var d = canvas.getContext("2d");
var color = "pink";
var ancho = 4;
var mousevent = "empty";
canvas.addEventListener("mousedown", dibujar);

function dibujar(e) {
color=document.getElementById("color").value;
ancho=document.getElementById("ancho").value;
mousevent = "mousedown";
}

canvas.addEventListener("mousemove", pintar);

function pintar(e){
    currentX = e.clientX-canvas.offsetLeft;
    currentY = e.clientY-canvas.offsetTop;
    if (mousevent=="mousedown") {
        d.beginPath();
        d.strokeStyle=color;
        d.lineWidth=ancho;
        d.moveTo(lastX, lastY);
        d.lineTo(currentX, currentY);
        d.stroke();
    }
lastX=currentX;
lastY=currentY;
}

function l() {
    d.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mouseup", soltar);

function soltar() {
    mousevent = "mouseup"
}