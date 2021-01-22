var rect1;
var rect2;


function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "green";

  rect2 = createSprite(800,200,50,50);
  rect2.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;
//it is a collision algorithem in this if rect1 toches rect 2 from any direction they both will become red.
  if(rect1.x-rect2.x<rect2.width/2+rect1.width/2&&
    rect2.x-rect1.x<rect2.width/2+rect1.width/2
    &&rect1.y-rect2.y<rect2.height/2+rect1.height/2
    &&rect2.y-rect1.y<rect2.height/2+rect1.height/2){
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else{
    rect1.shapeColor = "green";
    rect2.shapeColor="green";
  }
  drawSprites();
}