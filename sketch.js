var fixedRect,movingRect;
var apple,mango;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(500, 400, 50, 80);
  movingRect= createSprite(500, 200, 80, 30);
  apple= createSprite(400,300,40,40)
  mango= createSprite(800,300,40,40)

  apple.shapeColor="red"
  mango.shapeColor="yellow"

  apple.velocityX=7
  mango.velocityX=-7
  // fixedRect.velocityY= -6
  // movingRect.velocityY=6
}

function draw() {
  background(10);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if (isTouching(fixedRect,movingRect)){

        movingRect.shapeColor= "purple"
        fixedRect.shapeColor= "gold"
}

else {
  
  movingRect.shapeColor= "green"
  fixedRect.shapeColor= "green"    
}

bounceOff(apple,mango)

  drawSprites();
}



