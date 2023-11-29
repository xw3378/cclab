let clouds = [];
let NUM_OF_CLOUDS = 10;
let bus;
let img;
let bombs = [];
let NUM_OF_BOMBS = 30;

function setup() {
    let cnv =  createCanvas(800, 800);
    cnv.parent("canvasWrapper");
  for (let i = 0; i < NUM_OF_CLOUDS; i++) {
    clouds[i] = new Cloud(random(0, 800), random(10, 150));
  }
  bus = new Schoolbus(800 / 2,800 / 2);

  for (let o = 0; o < NUM_OF_BOMBS; o++) {
    bombs[o] = new Bomb(random(0, 800), 0);
  }
}

function draw() {
  background(84, 170, 235);

  console.log(mouseX, mouseY);
  for (let i = 0; i < clouds.length; i++) {
    let c = clouds[i];
    c.update();
    c.display();
  }

  noStroke();
  fill(181, 178, 184);
  rect(0, 450, 800, 800);
  // fill(186, 167, 204)
  // rect(0,650,width,200)
  bus.stop();
  bus.run();
  //me();
  gate();
  push()
  stroke(104, 110, 222)  

  strokeWeight(2)
  text("Press RIGHT_ARROW or LEFT_ARROW to control the moving of the bus", 50,250)
  
  pop()
  
  
  
  for (let o = 0; o < bombs.length; o++) {
    let b = bombs[o];
    b.update();
    b.display();
    for(let j = 0; j < bombs.length; j++){
    if(o!= j && b.isTouched == false){
                // only check for OTHER atoms, 
                // not for the current atom itself
                // console.log("    j is ", j);
                let student = bombs[j];
                let otherX = this.t;
                let otherY = this.k;
                // console.log("    otherX:", otherX);
                // console.log("    otherY:", otherY);
               student.checkIfTouched(otherX, otherY);
            }
    
    
    
  }
  
  
  } 
  
  
  
  
}

class Cloud {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpeed = random(0.02, 0.2);
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255, 99);
    circle(0, 0, 50);
    circle(-20, 25, 40);
    circle(20, 25, 40);
    circle(-30, 15, 50);
    circle(30, 15, 50);
    ellipse(-40, 30, 60, 50);
    ellipse(40, 30, 60, 50);
    ellipse(0, 42, 70, 40);
    pop();
  }

  update() {
    this.x = this.x + this.xSpeed;
  }
}

class Schoolbus {
  constructor(startZ, startM) {
    this.y = startZ;
    this.x = startM;
    this.xSpeed = 2;
  }

  stop() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(123, 32, 214);
    rect(-300, -100, 400, 200); //body
    fill(202, 166, 237);
    circle(-230, 100, 70);
    circle(30, 100, 70);
    fill(108, 106, 110);
    circle(-230, 100, 60);
    circle(30, 100, 60);
    //wheels
    fill(223, 222, 224);
    rect(-290, -90, 310, 90);
    rect(40, -90, 60, 90);
    //windows
    fill(123, 32, 214);
    rect(100, -100, 35, 15);
    rect(120, -100, 15, 38);
    //mirror

    pop();
  }

  run() {
    if (keyCode === RIGHT_ARROW) {
      this.x = this.x + this.xSpeed;
    } else if (keyCode === LEFT_ARROW) {
      this.x = this.x - this.xSpeed;
    }
  }
}
function me() {
  push();
  translate(mouseX, mouseY);
  //translate(width/2,height/2)
  stroke(5, 5, 5);
  noFill();
  circle(0, 0, 100);
  fill(5, 5, 5);
  circle(-20, -10, 5);
  circle(20, -10, 5);
  noFill();

  ellipse(0, 20, 20, 15);
  line(0, 50, 0, 110);
  line(0, 110, -30, 140);
  line(0, 110, 30, 140);
  line(0, 70, -30, 60);
  line(0, 70, 30, 60);
  pop();
}

function gate() {
  push();
  noStroke();
  fill(70, 98, 189);
  rect(350, 540, 30, 260);
  rect(740, 540, 30, 260);
  circle(365, 535, 35);
  circle(755, 535, 35);
  fill(220, 222, 227, 99);
  beginShape();
  vertex(380, 535);
  vertex(480, 495);
  vertex(480, 760);
  vertex(380, 800);
  vertex(380, 535);
  endShape();
  beginShape();
  vertex(740, 535);
  vertex(640, 495);
  vertex(640, 760);
  vertex(740, 800);
  vertex(740, 535);

  endShape();
  rect(0, 555, 350, 245);
  rect(770, 555, 30, 245);
  pop();
}

class Bomb {
  constructor(startT, startK) {
    this.t = startT;
    this.k = startK;
    this.kSpeed = random(0.1, 0.6);
  }
  display() {
    push();
    translate(this.t, this.k);
    
        if(this.isTouched == true){
            fill(255);
        }else{
            fill(0)
        }
    
    
    circle(0, 800, 40);
    fill(23, 135, 53)
    circle(-8,798,5)
    circle(8,798,5)
    ellipse(0,810,8,5)
    pop();
     this.isTouched = true
  }

  update() {
    this.k = this.k - this.kSpeed;
    
  }
  checkIfTouched(otherX,otherY){
 if(otherY<300){
 this.isTouched = true;
        }else{
            this.isTouched = false;
        }
 
 
 }
  
}





