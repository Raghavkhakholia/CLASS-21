var fixedRect, movingRect;

var go1, go2, go3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(200, 400,40,60);
  go1.shapeColor = "green";
  go2 = createSprite(300,300,50,80);
  go2.shapeColor = "red";
  go3 = createSprite(400,200,60,100);
  go3.shapeColor = "purple";
  go3.velocityX = 2;
  go4 = createSprite(800,200,60,100);
  go4.velocityX = -2
}

function draw() {
  background(0,0,0);  
  //go3.x = World.mouseX;
  //go3.y = World.mouseY;

  if(isTouching(go3,go2)){
    go3.shapeColor = "blue";
    go2.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "pink";
    go2.shapeColor = "pink";
  }

  bounceOff(go3,go4);
  
  drawSprites();
}

