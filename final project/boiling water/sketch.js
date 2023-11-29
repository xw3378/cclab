let NUM_OF_PARTICLES = 8;

let particles = [];

let xPos = 10;
let m = 103;
let n = 303;

let speed = 10;
let cat = 10;
let colorA = 235;
let colorSpeed = 10;

function setup() {

  let cnv =  createCanvas(windowWidth,windowHeight);
    cnv.parent("canvasWrapper");
  background(255);

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(200, 500), random(180, 350));
  }
}

function draw() {
  noStroke();

  text(NUM_OF_PARTICLES, 22, 27);
  console.log(mouseX, mouseY);
  strokeWeight(1);
  stroke(0);
  if (keyIsPressed) {
    if (key == "x") {
      background3();
    }
  }
  if (keyIsPressed) {
    if (key == "n") {
      strokeWeight(random(4, 10));
      stroke(250, random(100, 190), 222, 99);
      line(xPos, 0, xPos, height);

      xPos += 5;
      if (xPos > width) {
        xPos = 0;
      }
    }
  }

  if (keyIsPressed) {
    if (key == "m") {
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.update();
        p.display();
      }
    }
  }
  if (keyIsPressed) {
    if (key == "a") {
      if (mouseIsPressed) {
        pen1();
      }
    }
  }
  if (keyIsPressed) {
    if (key == "b") {
      if (mouseIsPressed) {
        pen2();
      }
    }
  }
  if (keyIsPressed) {
    if (key == "c") {
      if (mouseIsPressed) {
        pen3();
      }
    }
  }
  strokeWeight(1);
  stroke(159, 62, 230);
  text("Firstly, create the background", 42, 40);
  text("background1  Press'm'", 42, 60);
  text("background2  Press'n'", 42, 80);
  text("background3  Press'x'", 42, 100);
  text("Then, choose your favourite pen to create your work", 280, 40);
  text("Pen1         Press'a'", 280, 60);
  text("Pen2         Press'b'", 280, 80);
  text("Pen3         Press'c'", 280, 100);
}
class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.xSpeed = random(1, 5);
    this.ySpeed = random(0.5, 2);
    this.dia = random(50,70);
    this.diaSpeed = random(1, 6);
    this.hueSpeed = random(3, 10);
  }

  update() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    this.dia = this.dia + this.diaSpeed;

    if (this.x > width || this.x < 0) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed = -this.ySpeed;
    }
    if (this.dia >= random(150,170) || this.dia <= random(50,80)) {
      this.diaSpeed = -this.diaSpeed;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(random(100, 190), random(0, 218), 235, 96);
    circle(0, 0, this.dia);

    pop();
  }
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}
function pen1() {
  noStroke();
  fill(129, 214, 164);
  circle(mouseX, mouseY, 15);
}
function pen2() {
  fill(129, 131, random(100, 214));
  push();
  noStroke();
  translate(mouseX, mouseY);
  fill(181, 212, 78);
  circle(0, 0, 30);
  circle(-10, -13, 15);
  circle(10, -13, 15);
  pop();
}
function background3() {
  noStroke();
  colorA = colorA + colorSpeed;
  fill(colorA, 120, 200);
  m = m + speed;
  n = n + cat;
  if (m > width || m < 0) {
    speed = -speed;
  }
  if (n > height || n < 0) {
    cat = -cat;
  }
  if (colorA > 245 || colorA < 0) {
    colorSpeed = -colorSpeed;
  }

  circle(m, n, random(20, 60));
}
function pen3() {
  fill(198, 204, 177);
  noStroke();
  rect(mouseX, mouseY, random(10, 20), random(5, 15));
}
