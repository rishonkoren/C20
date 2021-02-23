var moving, fixed;


function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  fixed = createSprite(200,300,50,70);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
}

function draw() {
  background(0);  

  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if(moving.x-fixed.x <= fixed.width/2 + moving.width/2 &&
    fixed.x - moving.x <= fixed.width/2 + moving.width/2 &&
    fixed.y - moving.y <= fixed.height/2 + moving.height/2 &&
    moving.y-fixed.y <= fixed.height/2 + moving.height/2){
moving.shapeColor = "red";
fixed.shapeColor = "red";

  }
  else{
    fixed.shapeColor = "green";
  moving.shapeColor = "green";
  }
  drawSprites();
}