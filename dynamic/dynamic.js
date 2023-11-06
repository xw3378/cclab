let confettis = [];
let numConfetti = 100;
let backgroundHue = 0
function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");


    //   for(let i = 0; i < numConfetti; i++){
    //     confettis.push(new Confetti(width/2,height/2)) 
    //  } 


    colorMode(HSB)
    backgroundHue = random(0, 360)
}
function draw() {
    background(255, 255, 255);
   


for (let i = 0; i < confettis.length; i++) {
    confettis[i].update();
    confettis[i].display();
}
//limit number of confettis
//every time the number is bigger than a certain threshod(20),we delete the old
// if (condettis.length>20){

// let index=0//at which index to delete
// let numDelete=1//number of confettis to delete
// confettis.splice(index,numDelete)
while (confettis.length > 1000) {

    let index = 0//at which index to delete
    let numDelete = 1//number of confettis to delete
    confettis.splice(index, numDelete)
}
}






class Confetti {
    constructor(startX, startY) {
        //apply speeds to position
        this.x = startX;
        this.y = startY;


        //slowly change speeds
        //y slowly turns downwards (positive)
        this.size = random(2, 10);
        this.speedX = random(-2, 2);
        this.speedY = random(-1, -3);
        this.hue = random(0, 360)
        this.onCanvas=true
    }
    checkOutOfCanvas(){
        if(this.y>height){
            this.onCanvas=false
        }
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY = this.speedY + 1
    }
    display() {
        push();
        translate(this.x, this.y);
        fill(this.hue, 255, 255);
        noStroke();
        circle(0, 0, this.size);
        pop();
    }
}

function mousePressed() {
    for (let i = 0; i < numConfetti; i++) {
        confettis.push(new Confetti(mouseX, mouseY))
    }
}
