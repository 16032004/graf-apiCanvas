const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 1) Rectángulo
function drawRectangle() {
  ctx.fillStyle = "#9ad0f5";
  ctx.fillRect(50, 50, 200, 120);
  ctx.strokeStyle = "#1565c0";
  ctx.lineWidth = 4;
  ctx.strokeRect(50, 50, 200, 120);
}

// 2) Triángulo
function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.lineTo(250, 200);
  ctx.lineTo(50, 200);
  ctx.closePath();
  ctx.fillStyle = "#ffcc80";
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#ef6c00";
  ctx.stroke();
}

// 3) Happy face
function drawHappyFace() {
  const x = 250;
  const y = 180;
  const radius = 80;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.fillStyle = "#fff59d";
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#fbc02d";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y + 10, 50, 0, Math.PI, false);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#5d4037";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x - 30, y - 20, 8, 0, Math.PI * 2, true);
  ctx.fillStyle = "#000";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x + 30, y - 20, 8, 0, Math.PI * 2, true);
  ctx.fill();
}

// 4) Líneas
function drawLines() {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#000";

  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(450, 350);
  ctx.stroke();

  const widths = [1, 3, 5, 8];
  widths.forEach((w, i) => {
    ctx.beginPath();
    ctx.lineWidth = w;
    ctx.moveTo(50, 80 + i * 40);
    ctx.lineTo(450, 80 + i * 40);
    ctx.stroke();
  });
}

// 5) Arcos
function drawArcs() {
  const centerX = 250;
  const centerY = 200;

  ctx.beginPath();
  ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
  ctx.strokeStyle = "#3949ab";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(centerX, centerY, 60, 0, Math.PI, false);
  ctx.strokeStyle = "#ef5350";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(centerX, centerY, 40, Math.PI, Math.PI * 2, false);
  ctx.strokeStyle = "#66bb6a";
  ctx.lineWidth = 4;
  ctx.stroke();
}

// 6) Curvas
function drawCurves() {
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.strokeStyle = "#00897b";
  ctx.moveTo(50, 300);
  ctx.quadraticCurveTo(250, 50, 450, 300);
  ctx.stroke();

  ctx.fillStyle = "#00897b";
  ctx.beginPath();
  ctx.arc(50, 300, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(250, 50, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(450, 300, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "#6a1b9a";
  ctx.moveTo(50, 100);
  ctx.bezierCurveTo(150, 0, 350, 200, 450, 100);
  ctx.stroke();

  ctx.fillStyle = "#6a1b9a";
  ctx.beginPath();
  ctx.arc(50, 100, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(150, 0, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(350, 200, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(450, 100, 4, 0, Math.PI * 2);
  ctx.fill();
}

// 7) Combinación (casita)
function drawCombo() {
  ctx.fillStyle = "#ffcc80";
  ctx.fillRect(150, 170, 200, 150);

  ctx.beginPath();
  ctx.moveTo(140, 170);
  ctx.lineTo(260, 80);
  ctx.lineTo(360, 170);
  ctx.closePath();
  ctx.fillStyle = "#8d6e63";
  ctx.fill();

  ctx.fillStyle = "#6d4c41";
  ctx.fillRect(230, 230, 40, 90);

  ctx.fillStyle = "#bbdefb";
  ctx.fillRect(170, 200, 40, 40);
  ctx.fillRect(290, 200, 40, 40);

  ctx.beginPath();
  ctx.arc(70, 80, 30, 0, Math.PI * 2);
  ctx.fillStyle = "#ffeb3b";
  ctx.fill();

  ctx.strokeStyle = "#fbc02d";
  ctx.lineWidth = 3;
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    const x1 = 70 + Math.cos(angle) * 35;
    const y1 = 80 + Math.sin(angle) * 35;
    const x2 = 70 + Math.cos(angle) * 50;
    const y2 = 80 + Math.sin(angle) * 50;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}

function draw(example) {
  clearCanvas();

  switch (example) {
    case "rect":
      drawRectangle();
      break;
    case "triangle":
      drawTriangle();
      break;
    case "happy":
      drawHappyFace();
      break;
    case "lines":
      drawLines();
      break;
    case "arcs":
      drawArcs();
      break;
    case "curves":
      drawCurves();
      break;
    case "combo":
      drawCombo();
      break;
    default:
      drawRectangle();
  }
}

document.querySelectorAll("button[data-example]").forEach((button) => {
  button.addEventListener("click", () => {
    const example = button.dataset.example;
    draw(example);
  });
});

draw("combo");
