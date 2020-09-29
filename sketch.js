var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(700,200, 30,60);
  box1 = createSprite(400,250, 30,60);
  box2 = createSprite(600,300, 30,60);
box1.velocityX=2;
box2.velocityX=-3;
  fixedRect.debug = true;
  movingRect.debug = true; 
  
  movingRect.shapeColor = "blue";
  //fixedRect.shapeColor = "blue";

  movingRect.velocityX = 2;
  fixedRect.velocityX = -2;
}
                   
function draw() {
  background(255,255,255);  
 // movingRect.x = mouseX;
 // movingRect.y = mouseY;

  if(isTouching(movingRect,box1)){
    movingRect.shapeColor = "red";
    box1.shapeColor = "red";
  }else{
    movingRect.shapeColor = "blue";
    box1.shapeColor = "blue";
  }

  if(isTouching(movingRect,box2)){
    movingRect.shapeColor = "red";
    box2.shapeColor = "red";
  }else{
    movingRect.shapeColor = "blue";
    box2.shapeColor = "blue";
  }

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  bounceOff(box1,movingRect);
  drawSprites();
}  


          