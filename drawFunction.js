// Main color
function returnColor() {
  let r = document.getElementById("red").value;
  let g = document.getElementById("green").value;
  let b = document.getElementById("blue").value;
  if (r < 0) {
    r = 0;
  } else if (r > 255) {
    r = 255;
  }
  if (g < 0) {
    g = 0;
  } else if (g > 255) {
    g = 255;
  }
  if (b < 0) {
    b = 0;
  } else if (b > 255) {
    b = 255;
  }
  let rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

// Border color
function returnColor2() {
  let r = document.getElementById("red").value - 50;
  let g = document.getElementById("green").value - 50;
  let b = document.getElementById("blue").value - 50;
  if (r < 0) {
    r = 0;
  } else if (r > 255) {
    r = 255;
  }
  if (g < 0) {
    g = 0;
  } else if (g > 255) {
    g = 255;
  }
  if (b < 0) {
    b = 0;
  } else if (b > 255) {
    b = 255;
  }
  let rgb2 = `rgb(${r}, ${g}, ${b})`;
  return rgb2;
}

function changeColors() {
  document.body.style.backgroundColor = returnColor();
  drawMage(400, 200, "male", returnColor(), returnColor2());
  drawMage(240, 320, "female", returnColor(), returnColor2());
  drawKnight(550, 350, "female", returnColor(), returnColor2());
  drawKnight(700, 200, "male", returnColor(), returnColor2());
}

// x = 80
// y = 20
function drawMage(x, y, gender, color, borderColor) {
  // Restrictions
  if (x < 20) {
    x = 20;
  } else if (x > 1100) {
    x = 1100;
  }

  if (y < 50) {
    y = 50;
  } else if (y > 450) {
    y = 450;
  }
  // Skin/Body

  // Hair
  ctx.fillStyle = "rgb(140, 113, 105)";
  ctx.strokeStyle = "rgb(117, 95, 88)";
  ctx.lineWidth = 2;
  if (gender == "female") {
    // F
    ctx.fillRect(x + 10, y + 75, 100, 100);
    ctx.strokeRect(x + 10, y + 75, 100, 100);
  } else {
    // M
    ctx.fillRect(x + 10, y + 75, 100, 60);
    ctx.strokeRect(x + 10, y + 75, 100, 60);
  }

  // Torso
  ctx.fillStyle = "rgb(247, 216, 181)";
  ctx.strokeStyle = "rgb(191, 167, 140)";
  ctx.lineWidth = 1;
  ctx.fillRect(x + 40, y + 150, 40, 35);
  ctx.strokeRect(x + 40, y + 150, 40, 35);

  // Head
  ctx.fillRect(x + 20, y + 80, 80, 70);
  ctx.strokeRect(x + 20, y + 80, 80, 70);

  // Hair (front)
  ctx.fillStyle = "rgb(140, 113, 105)";
  ctx.strokeStyle = "rgb(117, 95, 88)";
  ctx.lineWidth = 2;
  if (gender == "female") {
    // F
    ctx.fillRect(x + 15, y + 75, 90, 15);
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 75);
    ctx.lineTo(x + 50, y + 80);
    ctx.lineTo(x + 20, y + 110);
    ctx.lineTo(x + 15, y + 75);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x + 110, y + 75);
    ctx.lineTo(x + 110, y + 120);
    ctx.lineTo(x + 70, y + 80);
    ctx.lineTo(x + 110, y + 75);
    ctx.fill();
    ctx.fillRect(x + 40, y + 75, 5, 30);
    ctx.strokeRect(x + 40, y + 75, 5, 30);
    ctx.fillRect(x + 50, y + 75, 20, 30);
    ctx.strokeRect(x + 50, y + 75, 20, 30);
    ctx.fillRect(x + 75, y + 75, 5, 30);
    ctx.strokeRect(x + 75, y + 75, 5, 30);
  } else {
    // M
    ctx.fillRect(x + 15, y + 75, 13, 50);
    ctx.fillRect(x + 91, y + 75, 13, 50);
    ctx.fillRect(x + 15, y + 75, 25, 30);
    ctx.fillRect(x + 47, y + 75, 25, 30);
    ctx.strokeRect(x + 47, y + 75, 25, 30);
    ctx.fillRect(x + 79, y + 75, 25, 30);
  }

  // Face
  ctx.fillRect(x + 34, y + 112, 15, 5);
  ctx.fillRect(x + 70, y + 112, 15, 5);
  ctx.fillStyle = "black";
  ctx.fillRect(x + 37, y + 120, 10, 10);
  ctx.fillRect(x + 72, y + 120, 10, 10);

  // Cloak
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x + 20, y + 155);
  ctx.lineTo(x + 10, y + 190);
  ctx.lineTo(x + 110, y + 190);
  ctx.lineTo(x + 100, y + 155);
  ctx.lineTo(x + 20, y + 155);
  ctx.fill();
  ctx.stroke();

  // Arms
  ctx.fillStyle = "rgb(247, 216, 181)";
  ctx.strokeStyle = "rgb(191, 167, 140)";
  ctx.lineWidth = 1;
  ctx.fillRect(x + 25, y + 155, 15, 30);
  ctx.strokeRect(x + 25, y + 155, 15, 30);
  ctx.fillRect(x + 80, y + 155, 35, 15);
  ctx.strokeRect(x + 80, y + 155, 35, 15);

  // Legs
  ctx.fillRect(x + 40, y + 185, 20, 20);
  ctx.strokeRect(x + 40, y + 185, 20, 20);
  ctx.fillRect(x + 60, y + 185, 20, 20);
  ctx.strokeRect(x + 60, y + 185, 20, 20);

  // Feet
  ctx.fillRect(x + 35, y + 205, 25, 10);
  ctx.strokeRect(x + 35, y + 205, 25, 10);
  ctx.fillRect(x + 60, y + 205, 25, 10);
  ctx.strokeRect(x + 60, y + 205, 25, 10);

  // Accessories

  // Mage hat
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.fillRect(x, y + 80, 120, 10);
  ctx.strokeRect(x, y + 80, 120, 10);
  ctx.beginPath();
  ctx.moveTo(x + 10, y + 80);
  ctx.lineTo(x + 60, y);
  ctx.lineTo(x + 110, y + 80);
  ctx.lineTo(x + 10, y + 80);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "rgb(79, 69, 62)";
  ctx.strokeStyle = "black";
  ctx.fillRect(x + 7, y + 65, 106, 15);
  ctx.strokeRect(x + 7, y + 65, 106, 15);
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 4.5;
  ctx.strokeRect(x + 45, y + 65, 30, 15);

  // Mage robes
  ctx.fillStyle = "rgb(130, 92, 60)"; //top
  ctx.strokeStyle = "rgb(59, 45, 34)";
  ctx.lineWidth = 1;
  ctx.fillRect(x + 40, y + 151, 40, 25); //torso
  ctx.strokeRect(x + 40, y + 151, 40, 25);
  ctx.fillRect(x + 23, y + 155, 17, 22); //arms
  ctx.strokeRect(x + 23, y + 155, 17, 22);
  ctx.fillRect(x + 80, y + 155, 22, 17);
  ctx.strokeRect(x + 80, y + 155, 22, 17);
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.fillRect(x + 20, y + 152, 20, 5);
  ctx.strokeRect(x + 20, y + 152, 20, 5);
  ctx.fillRect(x + 80, y + 152, 20, 5);
  ctx.strokeRect(x + 80, y + 152, 20, 5);
  ctx.fillStyle = "rgb(247, 216, 181)"; //skin
  ctx.strokeStyle = "rgb(191, 167, 140)";
  ctx.beginPath();
  ctx.moveTo(x + 50, y + 150.5);
  ctx.lineTo(x + 70, y + 150.5);
  ctx.lineTo(x + 60, y + 160);
  ctx.lineTo(x + 50, y + 150.5);
  ctx.fill();
  ctx.stroke();

  // Pants
  ctx.fillStyle = "rgb(97, 75, 57)";
  ctx.strokeStyle = "rgb(59, 45, 34)";
  ctx.fillRect(x + 40, y + 185, 20, 20);
  ctx.strokeRect(x + 40, y + 185, 20, 20);
  ctx.fillRect(x + 60, y + 185, 20, 20);
  ctx.strokeRect(x + 60, y + 185, 20, 20);

  // Belt
  ctx.fillStyle = "rgb(79, 69, 62)";
  ctx.strokeStyle = "black";
  ctx.fillRect(x + 38, y + 175, 44, 10);
  ctx.strokeRect(x + 38, y + 175, 44, 10);
  ctx.fillRect(x + 45, y + 174, 7, 12);
  ctx.strokeRect(x + 45, y + 174, 7, 12);
  ctx.fillRect(x + 68, y + 174, 7, 12);
  ctx.strokeRect(x + 68, y + 174, 7, 12);

  //Shoes
  ctx.fillStyle = "rgb(56, 47, 39)";
  ctx.strokeStyle = "black";
  ctx.fillRect(x + 35, y + 205, 25, 10);
  ctx.strokeRect(x + 35, y + 205, 25, 10);
  ctx.fillRect(x + 60, y + 205, 25, 10);
  ctx.strokeRect(x + 60, y + 205, 25, 10);

  // Staff
  ctx.fillStyle = "rgb(105, 81, 68)";
  ctx.fillRect(x + 115, y + 100, 10, 115);
  ctx.strokeRect(x + 115, y + 100, 10, 115);
  ctx.fillRect(x + 115, y + 100, 50, 15);
  ctx.strokeRect(x + 115, y + 100, 50, 15);
  ctx.fillRect(x + 150, y + 100, 20, 50);
  ctx.strokeRect(x + 150, y + 100, 20, 50);
  ctx.fillRect(x + 130, y + 140, 20, 10);
  ctx.strokeRect(x + 130, y + 140, 20, 10);
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.fillRect(x + 131, y + 124.5, 15, 15);
  ctx.strokeRect(x + 131, y + 124.5, 15, 15);
}

function drawKnight(x, y, gender, color, borderColor) {
  // Restrictions
  if (x < 20) {
    x = 20;
  } else if (x > 1100) {
    x = 1100;
  }

  if (y < 50) {
    y = 50;
  } else if (y > 450) {
    y = 450;
  }

  // Skin/Body

  // Hair
  ctx.fillStyle = "rgb(140, 113, 105)";
  ctx.strokeStyle = "rgb(117, 95, 88)";
  ctx.lineWidth = 2;
  if (gender == "female") {
    // F
    ctx.fillRect(x + 10, y + 75, 100, 100);
    ctx.strokeRect(x + 10, y + 75, 100, 100);
  } else {
    // M
    ctx.fillRect(x + 10, y + 75, 100, 60);
    ctx.strokeRect(x + 10, y + 75, 100, 60);
  }

  // Torso
  ctx.fillStyle = "rgb(247, 216, 181)";
  ctx.strokeStyle = "rgb(191, 167, 140)";
  ctx.lineWidth = 1;
  ctx.fillRect(x + 40, y + 150, 40, 35);
  ctx.strokeRect(x + 40, y + 150, 40, 35);

  // Head
  ctx.fillRect(x + 20, y + 80, 80, 70);
  ctx.strokeRect(x + 20, y + 80, 80, 70);

  // Hair (front)
  ctx.fillStyle = "rgb(140, 113, 105)";
  ctx.strokeStyle = "rgb(117, 95, 88)";
  ctx.lineWidth = 2;
  if (gender == "female") {
    // F
    ctx.fillRect(x + 15, y + 75, 90, 15);
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 75);
    ctx.lineTo(x + 50, y + 80);
    ctx.lineTo(x + 20, y + 110);
    ctx.lineTo(x + 15, y + 75);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x + 110, y + 75);
    ctx.lineTo(x + 110, y + 120);
    ctx.lineTo(x + 70, y + 80);
    ctx.lineTo(x + 110, y + 75);
    ctx.fill();
    ctx.fillRect(x + 40, y + 75, 5, 30);
    ctx.strokeRect(x + 40, y + 75, 5, 30);
    ctx.fillRect(x + 50, y + 75, 20, 30);
    ctx.strokeRect(x + 50, y + 75, 20, 30);
    ctx.fillRect(x + 75, y + 75, 5, 30);
    ctx.strokeRect(x + 75, y + 75, 5, 30);
  } else {
    // M
    ctx.fillRect(x + 15, y + 75, 13, 50);
    ctx.fillRect(x + 91, y + 75, 13, 50);
    ctx.fillRect(x + 15, y + 75, 25, 30);
    ctx.fillRect(x + 47, y + 75, 25, 30);
    ctx.strokeRect(x + 47, y + 75, 25, 30);
    ctx.fillRect(x + 79, y + 75, 25, 30);
  }

  // Face
  ctx.fillRect(x + 34, y + 112, 15, 5);
  ctx.fillRect(x + 70, y + 112, 15, 5);
  ctx.fillStyle = "black";
  ctx.fillRect(x + 37, y + 120, 10, 10);
  ctx.fillRect(x + 72, y + 120, 10, 10);

  // Cape
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  ctx.fillRect(x + 20, y + 155, 80, 50);
  ctx.strokeRect(x + 20, y + 155, 80, 50);

  // Arms
  ctx.fillStyle = "rgb(247, 216, 181)";
  ctx.strokeStyle = "rgb(191, 167, 140)";
  ctx.lineWidth = 1;
  ctx.fillRect(x + 25, y + 155, 15, 32);
  ctx.strokeRect(x + 25, y + 155, 15, 32);
  ctx.fillRect(x + 80, y + 155, 35, 15);
  ctx.strokeRect(x + 80, y + 155, 35, 15);

  // Accessories

  // Helmet
  ctx.fillStyle = "rgb(201, 201, 201)";
  ctx.strokeStyle = "rgb(145, 142, 142)";
  ctx.fillRect(x + 20, y + 55, 80, 30);
  ctx.strokeRect(x + 20, y + 55, 80, 30);
  ctx.fillRect(x, y + 75, 15, 50);
  ctx.strokeRect(x, y + 75, 15, 50);
  ctx.fillRect(x + 105, y + 75, 15, 50);
  ctx.strokeRect(x + 105, y + 75, 15, 50);
  ctx.fillRect(x + 9, y + 65, 102, 30);
  ctx.strokeRect(x + 9, y + 65, 102, 30);
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.fillRect(x + 53, y + 40, 15, 24);
  ctx.strokeRect(x + 53, y + 40, 15, 24);

  // Armor
  ctx.fillStyle = "rgb(201, 201, 201)";
  ctx.strokeStyle = "rgb(145, 142, 142)";
  ctx.lineWidth = 1;
  ctx.fillRect(x + 40, y + 151, 40, 30); //torso
  ctx.strokeRect(x + 40, y + 151, 40, 30);
  ctx.fillRect(x + 17, y + 155, 23, 15); // Shoulder L
  ctx.strokeRect(x + 17, y + 155, 23, 15);
  ctx.fillRect(x + 80, y + 155, 23, 15); // Shoulder R
  ctx.strokeRect(x + 80, y + 155, 23, 15);
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.fillRect(x + 15, y + 152, 25, 5);
  ctx.strokeRect(x + 15, y + 152, 25, 5);
  ctx.fillRect(x + 80, y + 152, 25, 5);
  ctx.strokeRect(x + 80, y + 152, 25, 5);
  ctx.fillStyle = "rgb(247, 216, 181)";
  ctx.strokeStyle = "rgb(191, 167, 140)";
  ctx.fillRect(x + 50, y + 151, 20, 5); // skin
  ctx.strokeRect(x + 50, y + 151, 20, 5);

  // Pants
  ctx.fillStyle = "rgb(97, 75, 57)";
  ctx.strokeStyle = "rgb(59, 45, 34)";
  ctx.fillRect(x + 40, y + 185, 20, 20);
  ctx.strokeRect(x + 40, y + 185, 20, 20);
  ctx.fillRect(x + 60, y + 185, 20, 20);
  ctx.strokeRect(x + 60, y + 185, 20, 20);

  // Belt
  ctx.fillStyle = "rgb(201, 201, 201)";
  ctx.strokeStyle = "rgb(145, 142, 142)";
  ctx.fillRect(x + 38, y + 178, 44, 7);
  ctx.strokeRect(x + 38, y + 178, 44, 7);

  // Shoes
  ctx.fillStyle = "grey";
  ctx.strokeStyle = "rgb(89, 87, 87)";
  ctx.fillRect(x + 39, y + 195, 21, 20);
  ctx.strokeRect(x + 39, y + 195, 21, 20);
  ctx.fillRect(x + 60, y + 195, 21, 20);
  ctx.strokeRect(x + 60, y + 195, 21, 20);
  ctx.fillRect(x + 35, y + 205, 25, 10);
  ctx.strokeRect(x + 35, y + 205, 25, 10);
  ctx.fillRect(x + 60, y + 205, 25, 10);
  ctx.strokeRect(x + 60, y + 205, 25, 10);

  // Sword
  ctx.fillStyle = "rgb(97, 75, 57)";
  ctx.strokeStyle = "rgb(59, 45, 34)";
  ctx.fillRect(x + 115, y + 150, 10, 25);
  ctx.strokeRect(x + 115, y + 150, 10, 25);
  ctx.fillStyle = "rgb(217, 217, 217)";
  ctx.strokeStyle = "rgb(163, 163, 163)";
  ctx.beginPath();
  ctx.moveTo(x + 105, y + 150);
  ctx.lineTo(x + 105, y + 80);
  ctx.lineTo(x + 120, y + 70);
  ctx.lineTo(x + 135, y + 80);
  ctx.lineTo(x + 135, y + 150);
  ctx.lineTo(x + 105, y + 150);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + 120, y + 70);
  ctx.lineTo(x + 120, y + 150);
  ctx.stroke();
  ctx.fillStyle = "grey";
  ctx.strokeStyle = "rgb(89, 87, 87)";
  ctx.fillRect(x + 100, y + 150, 40, 5);
  ctx.strokeRect(x + 100, y + 150, 40, 5);
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1.5;
  ctx.fillRect(x + 112.5, y + 142.5, 15, 15);
  ctx.strokeRect(x + 112.5, y + 142.5, 15, 15);
}

// x = 100
// y = 350
function drawFlower(x, y, color) {
  // restrictions
  if (y < 270) {
    y = 270;
  } else if (y > 670) {
    y = 670;
  }
  if (x < 0) {
    x = 0;
  } else if (x > 1160) {
    x = 1160;
  }
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 15, 15);
  ctx.fillRect(x + 25, y, 15, 15);
  ctx.fillRect(x + 12.5, y - 12.5, 15, 15);
  ctx.fillRect(x + 12.5, y + 12.5, 15, 15);
  ctx.fillStyle = "yellow";
  ctx.fillRect(x + 15, y + 2.5, 10, 10);
}
