let circles
function setup() {
    
    let cnv =  createCanvas(600, 650);
    cnv.parent("canvasWrapper");
  circles=new Circle(110,340)
  
}

function draw() { 
    
  background(225);
 campus()
  laptop()
  
  circles.display()
  circles.update()
}
function campus(){


  console.log(mouseX + "," + mouseY);
  //text(mouseX + "," + mouseY, mouseX, mouseY);
  beginShape();
  vertex(260, 570);
  vertex(260, 450);
  vertex(600, 480);
  vertex(600, 615);
  vertex(260, 570);
  endShape();
  beginShape(); //rect middle
  vertex(150, 220);
  vertex(380, 185);
  vertex(380, 275);
  vertex(150, 310);
  vertex(150, 220);
  endShape();
  beginShape(); //shape under middle rect
  vertex(150, 310);
  vertex(180, 312);
  vertex(410, 276);
  vertex(380, 275);
  endShape();
  beginShape(); //beside rect middle
  vertex(380, 185);
  vertex(410, 193);
  vertex(410, 277);
  vertex(380, 275);
  endShape();
  line(180, 312, 180, 360);
  line(70, 345, 215, 365);
  //line(0,240,0,350)
  //line(0,240,70,255)
  //line(70,255,70,360)
  // line(0,350,70,360)
  beginShape(); //shape left middle
  vertex(0, 240);
  vertex(70, 255);
  vertex(70, 364);
  vertex(0, 358);
  vertex(0, 240);
  endShape();

  // beginShape()
  // vertex(180,312)
  //vertex(180,360)
  beginShape();
  vertex(0, 355);
  vertex(0, 480);
  vertex(215, 505);
  vertex(215, 380);
  vertex(0, 355);
  endShape();
  beginShape();
  vertex(0, 520);
  vertex(260, 480);
  vertex(260, 580);
  vertex(0, 620);
  vertex(0, 520);
  endShape();
  beginShape();
  vertex(0, 520);
  vertex(260, 480);
  vertex(215, 480);
  vertex(0, 510);
  endShape();

  beginShape();
  vertex(215, 380);
  vertex(460, 340);
  vertex(460, 500);
  vertex(215, 480);
  vertex(215, 380);
  endShape();
  line(0, 500, 260, 462);
  line(260, 462, 260, 481);
  beginShape();
  vertex(460, 340);
  vertex(500, 350);
  vertex(500, 485);
  vertex(460, 500);
  endShape();

  beginShape();
  vertex(243, 376);
  vertex(243, 302);
  vertex(410, 277);
  vertex(410, 350);
  vertex(243, 376);
  endShape();
  beginShape();
  vertex(500, 350);
  vertex(600, 338);
  vertex(600, 500);
  vertex(500, 485);
  endShape();
  beginShape();
  vertex(500, 490);
  vertex(460, 506);
  vertex(460, 500);
  vertex(500, 484);
  vertex(500, 490);
  endShape();
  beginShape();
  vertex(410, 276);
  vertex(410, 350);
  vertex(600, 322);
  vertex(600, 236);
  vertex(410, 276);
  endShape();
  beginShape();
  vertex(464, 342);
  vertex(500, 350);
  vertex(600, 340);
  vertex(600, 322);
  vertex(464, 342);
  endShape();
  beginShape();
  vertex(460, 506);
  vertex(260, 488);
  vertex(260, 485);
  vertex(460, 500);
  vertex(460, 506);
  endShape();
  beginShape();
  vertex(500, 490);
  vertex(500, 486);
  vertex(600, 500);
  vertex(600, 506);
  vertex(500, 490);
  endShape();
  beginShape();
  vertex(70, 364);
  vertex(62, 366);
  vertex(0, 357);
  vertex(0, 352);
  vertex(70, 364);
  endShape();
  beginShape();
  vertex(410, 213);
  vertex(410, 278);
  vertex(486, 260);
  vertex(486, 200);
  vertex(410, 213);
  endShape();
  beginShape();
  vertex(486, 260);
  vertex(458, 259);
  vertex(600, 230);
  vertex(600, 236);
  vertex(486, 260);
  endShape();
  beginShape();
  vertex(458, 259);
  vertex(458, 145);
  vertex(600, 116);
  vertex(600, 230);
  vertex(458, 259);
  endShape();
  beginShape();
  vertex(366, 187);
  vertex(380, 184);
  vertex(410, 192);
  vertex(410, 213);
  vertex(458, 205);
  vertex(460, 145);
  vertex(522, 132);
  vertex(522, 112);
  vertex(366, 155);
  vertex(366, 187);
  endShape();
  beginShape();
  vertex(522, 112);
  vertex(532, 130);
  vertex(522, 132);
  vertex(522, 112);
  endShape();
  line(215, 365, 460, 326);
  line(460, 326, 460, 342);
  line(215, 365, 215, 380);

  beginShape();
  vertex(0, 600);
  vertex(0, 640);
  vertex(600, 550);
  vertex(490, 535);
  vertex(0, 600);
  endShape();
  beginShape();
  vertex(0, 0);
  vertex(490, 80);
  vertex(600, 60);
  vertex(250, 0);

  endShape();
  beginShape();
  vertex(490, 80);
  vertex(490, 535);
  vertex(600, 550);
  vertex(600, 60);
  vertex(490, 80);
  endShape();
  beginShape();
  vertex(0, 640);
  vertex(0, 650);
  vertex(600, 650);
  vertex(600, 550);
  vertex(0, 640);
  endShape();
  beginShape();
  vertex(250, 0);
  vertex(600, 60);
  vertex(600, 0);
  vertex(250, 0);
  endShape();
  beginShape();
  vertex(244, 32);
  vertex(244, 576);
  vertex(297, 590);
  vertex(297, 15);
  vertex(244, 32);

  endShape();
  beginShape();
  vertex(297, 15);
  vertex(297, 590);
  vertex(305, 583);
  vertex(305, 20);
  vertex(297, 15);
  endShape();

  beginShape();
  vertex(0, 640);
  vertex(0, 650);
  vertex(600, 558);
  vertex(600, 550);
  vertex(0, 640);
  endShape();

}
function laptop(){
  push()
  noStroke()
  fill(140, 140, 139)
  rect(90,300,410,300)
  fill(189, 189, 189)
  rect(110,320,368,260)//screen
  fill(94, 94, 92)
  beginShape()
  vertex(90,600)
  vertex(45,650)
  vertex(550,650)
  vertex(500,600)
  vertex(90,600)//keyboard
  endShape()
  pop()
  
  
  
}
  

class Circle{
  constructor(startX,startY){ 

    this.x=startX
   this.y=startY
    this.xSpeed=1
    this.ySpeed=1
  }
  display(){
    push()
       translate(this.x,this.y)
    fill(31, 31, 31,99)
    circle(0,0,5)
   pop()
  }
  update(){
    if(keyIsPressed){
      if(key=="q"){
        this.x=this.x+this.xSpeed
 }
    if(key=="w"){
        this.x=this.x-this.xSpeed
 }
      
      if(key=="e"){
       this.y=this.y+this.ySpeed
     }
      if(key=="r"){
       this.y=this.y-this.ySpeed
     }
      }
    
   
    
    
    
    
    
    }
  
  
  
  
}
  













