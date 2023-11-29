let faces = [];
let numFaces = 4;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");

    for (let i = 0; i < numFaces; i++) {
        faces.push(new Face(random(width), random(height)));
    }

}

function draw() {
    background(180);
    for (let i = 0; i < faces.length; i++) {
        faces[i].display()
        faces[i].update()
       
}
  if(frameCount>100){
        for (let i = 0; i < faces.length; i++) {
            faces[i].turnAngry()
           
    }
}

    
    }
  
class Face {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.offsetX = 0;

        this.angleForSineRadians = random(0,2*PI);
        this.normalColor=color(220,250,90)
        this.angryColor= color(255,90,20);
        this.speed=random(0.01,0.3)
        this.c=this.normalColor
        this.age=0
        this.ageToTurnAngry
    }
    update() {
        this.offsetX = map(sin(this.angleForSineRadians), -1, 1, -20, 20);

        this.angleForSineRadians += this.speed;
        this.age+=0.2
        if(this.age>22){
            this.turnAngry()
        }
    }
    display() {
        push();
        translate(this.x + this.offsetX, this.y);

        noStroke();
        fill(this.c);
        circle(0, 0, 50);
        fill(0);
        circle(-10, -10, 5)
        circle(10, -10, 5)
        ellipse(0, 10, 8, 9)
       text (round(this.age,0,0))
        pop();
    }

    turnAngry(){
        this.c=this.angryColor

    }
    turnNormal(){
        this.c=this.normalColor
    }

 checkIfClicked(){
    if(distanceMouseFace<this.r){
        this.angryColor()
    }
    let distanceMouseFace=dist(mouseX,mouseY,this.x,this.y)
 }






}
function mousePressed(){
  for (let i = 0; i < faces.length; i++) {
       faces[i].checkIfClicked()
 }
faces.push(new Face(mouseX,mouseY))
}