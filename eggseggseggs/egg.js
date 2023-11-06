console.log("js is linked!");
//         egg1  egg2  egg3
// let xArray=[40, 120, 290]
// let yArray=[140, 200, 90]
// //let basket=[eggs,eggs,eggs]

let eggBasket=[]
let numEgg=19
function setup(){   
    let cnv = createCanvas(400, 400);
    // cnv.parent("canvasWrapper");
    // eggBasket[0]=new Egg(100,200,random(0.3,1))
    // eggBasket[1]=new Egg(random(100,300),90,random(0.3,1))
    // console.log(eggBasket)
    
    // let newEgg=new Egg(random(100,300),90,random(0.3,1))
    // eggBasket.push(newEgg)
    for(i=0;i<5;i++){
    let newEgg= new Egg(random(width),random(height),random(0.3,1))
 eggBasket.push(newEgg)
    }
}

function draw() {
    background(120, 90, 230);

    // egg1.display()
    // egg2.display()
    for(let i=0;i<eggBasket.length;i++){
        eggBasket[i].display()
    }
    // for (let i=0;i<xArray.length;i++)
    // {
    //     let xPos=xArray[i]
    //     let yPos=yArray[i]
    //     //drawShape(xPos, yPos);
    // }
}

// function drawShape(x, y){
//     push();
//     translate(x,y);

//         noStroke();
//         fill(255, 200);
//         arc(0, 0, 80, 80,  0,  PI);
//         arc(0, 0, 80, 130, PI, 2*PI);

//     pop();
// }
class Egg{
 constructor(startX,startY,scaleFactor){
    this.x=startX
    this.y=startY
    this.s=scaleFactor
 }
 display(){
    push();
    translate(this.x,this.y)
    scale (this.s)
    noStroke();
    fill(255, 200);
    arc(0, 0, 80, 80,  0,  PI);
    arc(0, 0, 80, 130, PI, 2*PI);

    pop()
 }



}
function(mouseIsPressed)