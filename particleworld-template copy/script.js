// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 80; // Decide the initial number of particles.

let particles = [];

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent("canvasWrapper")

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(200, 500), random(180, 350));
  }
}

function draw() {
  background(255);
  console.log(mouseX, mouseY);

  stroke(163, 161, 158);
  strokeWeight(6);
  fill(191, 195, 199, 99.9);
  rect(70, 50, 460, 450);
  noStroke();
  fill(27, 130, 209, 96);
  
  rect(70, 160, 460, 340);

  fill(179, 179, 179);
  circle(290, 20, 80);
  fill(133, 131, 129);
  rect(55, 40, 490, 40);
  fill(222, 188, 160);
  rect(0, 500, 600, 100);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;

    this.xSpeed = random(1, 5);
    this.ySpeed = random(0.5, 2);
    this.dia = random(10, 50);
    this.diaSpeed = random(1, 6);
    this.hueSpeed = random(3, 10);
  }
  // methods (functions): particle's behaviors
  update() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    this.dia = this.dia + this.diaSpeed;
    //this.hue=this.hue+this.hueSpeed
    if (this.x > random(200, 500) || this.x < 90) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y > 350 || this.y < 180) {
      this.ySpeed = -this.ySpeed;
    }
    if (this.dia >= random(50, 70) || this.dia <= random(2, 10)) {
      this.diaSpeed = -this.diaSpeed;
    }
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    fill(190, 218, 235, 96);
    circle(0, 0, this.dia);

    pop();
  }
}
