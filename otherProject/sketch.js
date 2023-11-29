// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 80; // Decide the initial number of particles.

let particles = [];

function setup() {
  createCanvas(600, 600);

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(200, 500), random(180, 350));
  }
}

function draw() {
  background(255);
  console.log(mouseX, mouseY);
  strokeWeight(1)
  stroke(0)
text(mouseX + "," + mouseY, mouseX, mouseY);

  stroke(163, 161, 158);
  strokeWeight(6);
  fill(191, 195, 199, 99.9);
  rect(70, 50, 460, 450);
  noStroke();
  fill(27, 130, 209, 90);

  rect(70, 160, 460, 340);

  fill(179, 179, 179);
  circle(290, 20, 80);
  fill(133, 131, 129);
  rect(55, 40, 490, 40);
  fill(135, 134, 145, 99);
  rect(0, 500, 600, 100);

  // update and display
  if (keyIsPressed) {
    if (key == "m") {
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.update();
        p.display();
      }
    }
  }
  vegetables()
  bowl()
  button();
  stroke(86, 73, 222, 99);
  text("Press the mouse to add more bubbles", 100, 450);
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

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function potatoes() {
  push();

  ellipse(300, 300, 90, 100);
  pop();
}

function button() {
  stroke(138, 136, 134);
  strokeWeight(4);
  fill(201, 196, 189);
  circle(300, 550, 40);
  text("M", 295, 555);

  text("Press the key M to make the bubbles appear", 70, 520);
}


function vegetables(){
  push()
translate(500,530)
  fill(245, 49, 49)
  ellipse(0,0,80,70)
  fill(2, 230, 82)
  rect(-7,-42,15,15)
  pop()
}

function bowl(){
  beginShape()
  stroke(135, 138, 136,99)
  fill(191, 191, 191,98)
  vertex(360,410)
  vertex(590,410)
  vertex(560,590)
  vertex(400,590)
  vertex(360,410)
  
  
  
  
  endShape()
}






