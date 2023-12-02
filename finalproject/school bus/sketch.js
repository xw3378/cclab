let clouds = [];
let NUM_OF_CLOUDS = 10;
let bus;
let img;
let bombs = [];
let NUM_OF_BOMBS = 80;
let score = 0;
function setup() {
  let cnv = createCanvas(800, 800);
  cnv.parent("canvasWrapper");
  for (let i = 0; i < NUM_OF_CLOUDS; i++) {
    clouds[i] = new Cloud(random(0, 800), random(10, 150));
  }
  bus = new Schoolbus(800 / 2, 800 / 2);
  
  for (let o = 0; o < NUM_OF_BOMBS; o++) {
    bombs[o] = new Bomb(random(0, 800), 800);
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
  rect(0, 400, 800, 800);
  // fill(186, 167, 204)
  // rect(0,650,width,200)
  bus.stop();
  bus.run();
  //me();
  gate();
  push()
  stroke(104, 110, 222)

  strokeWeight(2)
  text("Your goal is 25", 50, 250)
  text("Score: " + score, 50, 280);
  text("The arrows can help you achieve what you want",50,300)
  pop()



  for (let o = 0; o < bombs.length; o++) {
    let b = bombs[o];
    b.update();
    b.display();
    b.checkIfTouchBus();
   
    if(bombs[o].isTouched == true){
      // delete this confetti
     bombs.splice(o, 1);
     score++; 
     if (score == 25) {
      // console.log(score)
      window.location.href = "../library"
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
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpeed = 2;
    this.ySpeed=2
  }

  stop() {
    push();
    translate(this.x,this.y);
    noStroke();
    fill(123, 32, 214);
    rect(-50, -25, 100, 50); //body
    stroke(255)
    text("NYUSH",-20,0)
    // fill(202, 166, 237);
    // circle(-230, 100, 70);
    // circle(30, 100, 70);
    // fill(108, 106, 110);
    // circle(-230, 100, 60);
    // circle(30, 100, 60);
    // //wheels
    // fill(223, 222, 224);
    // rect(-290, -90, 310, 90);
    // rect(40, -90, 60, 90);
    // //windows
    // fill(123, 32, 214);
    // rect(100, -100, 35, 15);
    // rect(120, -100, 15, 38);
    //mirror

    // fill("red")
    // circle(0,0, 10)


    pop();
  }

  run() {
    if (keyCode === RIGHT_ARROW) {
      this.x = this.x + this.xSpeed;
    } else if (keyCode === LEFT_ARROW) {
      this.x = this.x - this.xSpeed;
    }
    if (keyCode === UP_ARROW) {
      this.y= this.y -this.ySpeed;
    } else if (keyCode === DOWN_ARROW) {
      this.y = this.y + this.ySpeed;
    }
    // if(this.y<400){
    //   this.ySpeed=0
    // }
  }
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
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.ySpeed = random(0.2,1);
    this.xSpeed=random(-2,2)
  }
  display() {
    push();
    translate(this.x, this.y);

    if (this.isTouched == false&& this.y<bus.y) {
      fill(255);
    } else {
      fill(0)
    }


    circle(0, 0, 40);
    fill("purple")
    circle(-8,-8,5)
    circle(8,-8,5)
    ellipse(0,10,8,5)
    
    pop();
    
  }

  update() {
    this.y = this.y - this.ySpeed;
    if(this.y>=600){
      this.x=random(450,750)
    }else{
      this.x=this.x+-this.xSpeed
    }
    if(this.y<=400){
      this.ySpeed=0
    }
    
  }
  checkIfTouchBus() {


    if (this.x < bus.x + 50 && this.x>bus.x-50&& this.y<bus.y+25&&this.y>bus.y-25) {
      this.isTouched = true;
    } else {
      this.isTouched = false;
    }


  }
  
  
  
  

}


