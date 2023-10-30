let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new YourNameDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  console.log(mouseX, mouseY);

  dancer.update();
  dancer.display();
}

class YourNameDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.mouthHeight = 15;
    this.mouthSpeed = 0.5;
   
 this.angle=45   
    this.angleSpeed=0.01
this.angleRed=radians(this.angle)
this.circleX1=10
    this.circleX2=-40
    this.circleSpeed=1
    
  }
  update() {
    this.mouthHeight = this.mouthSpeed + this.mouthHeight;
    if (this.mouthHeight >= 25 ||this.mouthHeight<=15) {
      this.mouthSpeed = -this.mouthSpeed;
    }
    if(this.circleX1>20||this.circleX1<5){
      this.circleSpeed=-this.circleSpeed
    }
    if(this.circleX2>-30||this.circleX2<-45){
      this.circleSpeed=this.circleSpeed
    }
    this.angle=this.angle+this.angleSpeed*noise(0.005* frameCount)
    this.circleX1=this.circleX1+this.circleSpeed
    this.circleX2=this.circleX2+this.circleSpeed
      }
  display() {
    push();
    translate(this.x,this.y)
   
    // ⬇️ draw your dancer here ⬇️
  push()
    noStroke();
    fill(255);
    circle(this.circleX1, -70, 30);
    circle(this.circleX2, -70, 30);
    fill(0);
    circle(this.circleX1, -70, 20);
    circle(this.circleX2, -70, 20);
    //eyes

    fill(16, random(100, 204), 163, 99.5);
 rotate(this.angle)
    rect(-70, -40,80, 70);
    rect(-40, -30, 90, 90);
    rect(-30, 0,70, 70);
    rect(-10, -50, 60, 60);
    rect(-80, -60, 90, 70);

    //body
    push();
    fill(255);

    ellipse(-40, -5, 40, this.mouthHeight); //mouth

    pop();
    stroke(26, random(0,189), 75)
    strokeWeight(4)
    line(-40,40,-70,60)
   pop()
  

    // ⬆️ draw your dancer here ⬆️

    this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
