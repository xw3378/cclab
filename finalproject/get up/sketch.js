let curtain1width = 140;
let curtain2width = -150;
let curtain1Speed = 2;
let darkTransparency = 95;
let darkSpeed = 1;
let gameStarted = false;

let meX, meY;
let foodX, foodY;
let foodSize = 20;
let score = 0;

function setup() {
  let cnv = createCanvas(800, 800);
  cnv.parent("canvasWrapper");
  meX = width / 2;
  meY = height / 2;
  placeFood();
}

function draw() {
  background(42, 142, 181);
  noStroke();

  fill(207, 202, 196);
  rect(55, 70, 350, 300);
  fill(200, 226, 232);
  rect(80, 95, 300, 250); //window
  fill(82, 56, 4, 99);
  rect(0, 595, 800, 205); //floor

  fill(212, 171, 222);
  rect(726, 360, 50, 220); //床头
  fill(219, 204, 235);
  rect(270, 480, 456, 150); //床板

  fill(202, 227, 168);
  rect(604, 610, 20, 150);
  rect(790, 610, 20, 150);
  fill(222, 235, 204);
  ellipse(707, 594, 300, 100); //table

  curtains();
  light();
  clothes();
  fill(0, darkTransparency);
  rect(0, 0, width, height); //darkness

  if (gameStarted && curtain1width > 0) {
    curtain1width -= curtain1Speed;
    curtain2width += curtain1Speed;

    darkTransparency -= darkSpeed;
    if (darkTransparency <= 0) {
      darkTransparency = 0;
      darkSpeed = 0;
    }
  }

  if (curtain1width <= 0 && !gameStarted) {
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text('Click the light to start the game', width / 2, height / 2);
  } else if (gameStarted) {
    displayGame();
  }
  stroke(255)
  text("Press it!",669,280)
}

function curtains() {
  fill(247, 245, 242);
  rect(66, 79, 330, 10);
  fill(230, 232, 211, 99);

  rect(75, 89, 150, 300);
  rect(235, 89, 150, 300); //layor1
  fill(237, 231, 140);
  rect(73, 89, curtain1width, 303);
  rect(383, 89, curtain2width, 303);
}

function light() {
  fill(240, 237, 228);
  ellipse(800 / 2, 0, 150, 30);
  fill(255, 99);
  rect(669, 300, 50, 40);
  fill(255);
  rect(675, 305, 38, 30);
}

function clothes() {
  fill(130, 130, 130);
  rect(50, 460, 200, 15);
  rect(50, 460, 12, 180);
  rect(238, 460, 12, 180);
  rect(40, 640, 30, 12);
  rect(228, 640, 30, 12);
}

function displayGame() {
  moveMe();
  checkCollision();
  drawMe();
  drawFood();
  displayScore();
}

function moveMe() {
  if (keyIsPressed){
    if(key=="a")
   {
    meX -= 5;
  }
}
  if (keyIsPressed) {
   if(key=="d"){
     meX += 5;
   }
  }
  if (keyIsPressed) {
   if(key=="w"){
    meY -= 5
   } 
  }
  if (keyIsPressed) {
   if(key=="s"){
    meY += 5;
   } 
  }

  meX = constrain(meX, 0, width);
  meY = constrain(meY, 0, height);
}

function drawMe() {
  push();
  translate(meX, meY);
  stroke(5, 5, 5);
 fill("pink")
  circle(0, 0, 30);
  fill(5, 5, 5);
  circle(-10, -5, 5);
  circle(10, -5, 5);
  noFill();
  ellipse(0, 10, 10, 7);
  noStroke()
  fill(random(180,230), 161, 230)
 ellipse(0,30, 25, 30);

  pop();
}

function drawFood() {
  fill(255, 0, 0);
  ellipse(foodX, foodY, foodSize, foodSize);
}

function placeFood() {
  foodX = random(width - foodSize);
  foodY = random(height - foodSize);
}

function checkCollision() {
  let d = dist(meX, meY, foodX, foodY);
  if (d < 20) {
    score++;
    placeFood();
    if (score == 5) {
      // console.log(score)
      window.location.href = "../After%20get%20up"
    }

  }

}

function displayScore() {
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text('Score: ' + score, width / 2, 30);
}

function mousePressed() {
  if (!gameStarted && mouseX > 669 && mouseX < 719 && mouseY > 300 && mouseY < 340) {
    gameStarted = true;
  }
}