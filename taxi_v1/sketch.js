console.log("js is linked!");




function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    //create instance of taxi class
    // and stores it variables "instanceOfTaxi"
    instanceOfTaxi = new Taxi()
    secondTaxi= new Taxi(300,200,0.5)
}

function draw() {
  background(90, 120, 250);
  instanceOfTaxi.display();
  secondTaxi.display()
  secondTaxi.update()
}

class Taxi{
  //every class must have a constructor function
  //it's call automatically when instances of the class
  //are created 
  constructor(startX,startY,s){
    //inside we list and dine the class's properties
    this.x=startX
   this. y=startY
    this.scaleFactor=s
    this.speed=random(-2,2)
    this.col= (120,150,90)//r g b in array

  }
  
 display(){

  push()
  translate(this.x,this.y)
  scale(this.scaleFactor)
  fill (this.col[0],this.col[1],this.col[2])
  rect(0,0,100,30) 
  pop()


 }
 update(){
  //here we will changr property values
  this.x =this.x +this.speed
  this.reappear();
  


 }
 reappear(){

 
if(this.x>width){
    this.x=-100
  }
}
}
