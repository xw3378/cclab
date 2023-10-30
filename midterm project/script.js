let q = 0;
let growSpeed1 = 0.8;
let w = 0;
let growSpeed2 = 0.4;
let e = 0;
let growSpeed3 = 0.5;
let r = 0;
let growSpeed4 = 0.6;
let t = 0;
let growSpeed5 = 0.2;
let y = 800;
let growSpeed6 = 0.3;
let u = 0;
let growSpeed7 = 0.7;
let h = 0;
let growSpeed8 = 2;
let qw = 0;
let growSpeed9 = 0.9;

let o = 0;
let carSpeed1 = 3;
let p = 1;
let carSpeed2 = 1;
let j = 0;
let carSpeed3 = 0.7;
let k = 0;
let carSpeed4 = 3;
let m = 0;
let carSpeed5 = 3;
let rectWidth = 100;
let rectHeight = 50;
let widthSpeed = 10;
let heightSpeed = 0.8;
let z = 0;
let zSpeed = 1;
let c = 0;
let cSpeed = 1;
let circleX = 1;
let XSpeed = 1;
let circleDia = 0;
let diaSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(12, 44, 61);

  push();
  fill(212, 99, 113);
  if (circleX >= width) {
    fill(160, 221, 250);
  }
  rect(0, 0, windowWidth, windowHeight);
  pop();

  sun();
  building7();
  fill(169, 214, 207);
  building5();
  fill(127, 131, 133);
  rect(0, 550, windowWidth, 250);
  for (i = 0; i <= 800; i += 200) {
    fill(242, 247, 250);
    noStroke();
    rect(i, 600, 180, 30);
  }

  building6();

  building1();
  building2();
  building8();
  building3();

  building4();

  flyover();

  car1();
  car2();
  car3();
  car4();
  car5();
  space();
  bigCat();

  











  //console.log(mouseX, mouseY);
}

function building1() {
  fill(245, 243, 233);
  q = q - growSpeed1;
  if (q <= -300) {
    growSpeed1 = 0;
  }
  rect(50, 550, 100, q);
}
function building2() {
  fill(222, 209, 153);
  w = w - growSpeed2;
  if (w <= -200) {
    growSpeed2 = 0;
  }
  rect(80, 550, 110, w);
}
function building3() {
  e = e - growSpeed3;
  if (e <= -500) {
    growSpeed3 = 0;
  }
  fill(201, 16, 140, 99);
  rect(200, 550, 150, e);
  if (e <= -300) {
    r = r - growSpeed4;
    if (r <= -350) {
      growSpeed4 = 0;
    }
    fill(173, 199, 60, 99, 0.9);
    rect(300, 550, 100, r);
  }
}
function building4() {
  if (e <= -250) {
    t = t - growSpeed5;
    if (t <= -250) {
      growSpeed5 = 0;
    }
    fill(116, 212, 197, 98);
    rect(260, 550, 250, t);
  }
}
function building5() {
  noStroke();
  y = y - growSpeed5;
  if (y <= 330) {
    growSpeed5 = 0;
  }
  circle(690, y, 300);
}
function building6() {
  u = u - growSpeed7;
  if (u < -430) {
    growSpeed7 = 0;
  }
  if (mouseIsPressed) {
    growSpeed7 = 3;
  }
  fill(232, 207, 183, 99);
  rect(100, 550, 150, u);
}
function car1() {
  push();

  translate(o, 560);
  o = o + carSpeed1;
  if (mouseIsPressed) {
    carSpeed1 = 1.2 * carSpeed1;
  }
  if (o >= width || o <= 0) {
    carSpeed1 = -carSpeed1;
  }

  fill(232, 165, 102);
  rect(0, 10, 125, 40);
  rect(20, -15, 80, 40); //body

  // rotate(radians(frameCount))
  fill(89, 87, 85);

  circle(28, 50, 30);
  circle(95, 50, 30);
  pop();
}

function car2() {
  push();
  if (p >= width || p <= 0) {
    carSpeed2 = -carSpeed2;
  }
  p = p + carSpeed2;

  let sinValue = 250 * sin(p * 0.01) + 400;
  translate(p, sinValue);
  fill(100, random(140, 200), 109);
  circle(0, 0, 100);
  triangle(-83, 0, -36, -24, -36, 25);
  triangle(87, 0, 36, -24, 36, 25);
  stroke(66, 64, 62);
  pop();
}
function car3() {
  push();
  fill(random(100, 200), 103, 200);
  j = j + carSpeed3;

  translate(j, j);
  triangle(0, 100, -40, 200, 40, 200);
  if (j > 400 || j < 0) {
    carSpeed3 = -carSpeed3;
  }
  pop();
}

function car4() {
  push();
  k = k + carSpeed4;
  m = m + carSpeed5;
  translate(k * 2, m);
  if (k > width || k <= 0) {
    carSpeed4 = -carSpeed4;
  }
  if (m >= height || m <= 0) {
    carSpeed5 = -carSpeed5;
  }
  fill(196, 144, 114);
  ellipse(0, 0, 100, 50);
  circle(-50, 25, 40);
  circle(50, 25, 40);
  pop();
}

function car5() {
  push();
  translate(530, 540);
  fill(196, 114, 169);
  rectWidth = rectWidth + widthSpeed;
  // rectHeight=rectHeight+heightSpeed
  if (rectWidth >= 1000 || rectWidth <= -600) {
    widthSpeed = -widthSpeed;
  }
  // if(rectHeight>=80||rectHeight<=60){
  //   heightSpeed=-heightSpeed
  // }

  rect(rectWidth, 0, 100, 40);
  pop();
}

function flyover() {
  z = z - zSpeed;
  c = c + cSpeed;

  fill(random(100, 150), random(100, 150), 180);
  if (z <= -280) {
    zSpeed = 0;
    rect(40, 270, c, 30);
    if (c >= 650) {
      cSpeed = 0;
    }
  }
  rect(40, 550, 30, z);
  rect(670, 550, 30, z);
}
function building7() {
  push();
  fill(99, 219, 143, 99);
  h = h - growSpeed8;
  if (h <= -510) {
    growSpeed8 = 0;
  }
  rect(130, 550, 120, h);
  rect(0, 550, 90, h);
  pop();
}

function sun() {
  push();
  fill(201, 24, 45);
  circleX = circleX + XSpeed;
  circleDia = circleDia + diaSpeed;
  if (circleDia >= 800) {
    diaSpeed = -diaSpeed;
  }
  let circleSinValue = 500 * sin(circleX * 0.008) + 600;
  circle(circleX, circleSinValue, circleDia);

  pop();
}
function building8() {
  push();
  fill(110, 36, 214, 99);
  qw = qw - growSpeed9;

  rect(230, 550, 200, qw);
  pop();
}

function space() {
  if (keyIsPressed) {
    if (key == "v") {
      fill(64, 71, 133);
      rect(100, 100, 50, 30);
    }
  }
}

function bigCat() {
  push();
  translate(mouseX-200,mouseY-400)
  fill(214, 190, 188);
  stroke(230, 130, 94);
  strokeWeight(4);
  if(keyIsPressed){
    if(key=="c"){
    triangle(140, 350, 153, 410, 187, 367);
  triangle(368, 345, 315, 370, 350, 407); //ears
    }
  }
  circle(255, 465, 250); //face
  noStroke();
  if(keyIsPressed){
    if(key=="r"){
      fill(255)
    }else{
      fill(100, 52, 235)
    }
    
    
  }
  ;
  circle(200, 435, 30);
  circle(310, 435, 30);
  fill(13, 12, 12);
  circle(206, 435, 20);
  circle(315, 435, 20); //eyes
  fill(107, 84, 76);
  circle(255, 480, 19); //nose
  stroke(107, 84, 76);
  strokeWeight(2);
  line(255, 480, 119, 460);
  line(255, 480, 115, 493);
  line(255, 480, 123, 522);
  line(255, 480, 388, 459);
  line(255, 480, 392, 487);
  line(255, 480, 387, 514); //beards
  curve(220, 519, 228, 540, 265, 540, 300, 519);

  pop();
}


