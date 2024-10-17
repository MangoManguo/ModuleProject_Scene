/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200; // can change
cnv.height = 700;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

// Background

// Sky
var grad = ctx.createLinearGradient(650, 400, 700, 50);
grad.addColorStop(0, "rgb(255, 231, 158)");
grad.addColorStop(1, "lightblue");
ctx.fillStyle = grad;
ctx.fillRect(0, 0, 1200, 700);

// Sun
ctx.fillStyle = "rgb(255, 231, 158)";
ctx.beginPath();
ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.fill();

// Mountains
ctx.fillStyle = "rgb(194, 199, 207)";
ctx.beginPath();
ctx.moveTo(300, 175);
ctx.lineTo(100, 400);
ctx.lineTo(550, 400);
ctx.lineTo(300, 175);
ctx.fill();
ctx.fillStyle = "rgb(174, 183, 191)";
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(50, 400);
ctx.lineTo(500, 400);
ctx.lineTo(200, 150);
ctx.fill();
ctx.beginPath();
ctx.moveTo(450, 100);
ctx.lineTo(150, 400);
ctx.lineTo(700, 400);
ctx.lineTo(450, 100);
ctx.fill();
ctx.fillStyle = "rgb(174, 198, 209)";
ctx.beginPath();
ctx.moveTo(0, 30);
ctx.lineTo(0, 400);
ctx.lineTo(300, 400);
ctx.lineTo(0, 30);
ctx.fill();
ctx.beginPath();
ctx.moveTo(600, 30);
ctx.lineTo(400, 400);
ctx.lineTo(800, 400);
ctx.lineTo(600, 30);
ctx.fill();

// Grass
var grad1 = ctx.createLinearGradient(500, 500, 500, 700);
grad1.addColorStop(0, "rgb(182, 196, 110)");
grad1.addColorStop(1, "rgb(93, 107, 63)");

ctx.fillStyle = grad1;
ctx.fillRect(0, 250, 1400, 450);
ctx.fillStyle = "rgb(230, 207, 161)";
// ctx.fillRect(0, 430, 1400, 100)

// Castle
ctx.fillStyle = "grey";
ctx.fillRect(800, 120, 300, 130);
ctx.fillStyle = "darkgrey";
ctx.fillRect(800, 100, 80, 150); // pillars
ctx.fillRect(1060, 100, 80, 150);
ctx.fillRect(900, 80, 140, 40); // middle
ctx.fillRect(890, 70, 160, 20);
ctx.fillStyle = "grey";
ctx.fillRect(815, 130, 20, 25); // windows L
ctx.fillRect(845, 190, 20, 25);
ctx.fillRect(1075, 130, 20, 25); // windows R
ctx.fillRect(1105, 190, 20, 25);
ctx.beginPath(); // roof L
ctx.moveTo(790, 110);
ctx.lineTo(840, 50);
ctx.lineTo(890, 110);
ctx.lineTo(790, 110);
ctx.fill();
ctx.beginPath(); // roof R
ctx.moveTo(1050, 110);
ctx.lineTo(1100, 50);
ctx.lineTo(1150, 110);
ctx.lineTo(1050, 110);
ctx.fill();
ctx.beginPath(); // roof M
ctx.moveTo(970, 20);
ctx.lineTo(910, 70);
ctx.lineTo(1030, 70);
ctx.lineTo(970, 20);
ctx.fill();
ctx.fillStyle = "rgb(102, 99, 97)";
ctx.fillRect(930, 170, 80, 80); // door

document.getElementById("red").addEventListener("change", returnColor);
document.getElementById("red").addEventListener("change", returnColor2);
document.getElementById("green").addEventListener("change", returnColor);
document.getElementById("green").addEventListener("change", returnColor2);
document.getElementById("blue").addEventListener("change", returnColor);
document.getElementById("blue").addEventListener("change", returnColor2);
document.getElementById("submit").addEventListener("click", changeColors);

drawFlower(460, 500, "orange");
drawFlower(100, 350, "red");
drawFlower(900, 300, "blue");
drawFlower(1100, 550, "hotpink");
drawFlower(600, 280, "purple");
drawFlower(750, 600, "darkgreen");

drawMage(400, 200, "male", "rgb(99, 198, 255)", "rgb(31, 103, 145)");
drawMage(240, 320, "female", "darkgreen", "rgb(47, 69, 31)");
drawKnight(550, 350, "female", "rgb(255, 255, 145)", "rgb(153, 153, 69)");
drawKnight(700, 200, "male", "red", "darkred");
drawMage(100, 100, "male", "lightpink", "hotpink");
drawKnight(50, 400, "male", "purple", "rgb(55, 42, 84)");
drawKnight(900, 375, "female", "orange", "rgb(112, 67, 33)");
drawKnight(1000, 150, "female", "rgb(46, 76, 176)", "rgb(24, 43, 112)");
