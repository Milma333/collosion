var a,b,car1,wall1,car2,wall2,car3,wall3;
function setup() {
  createCanvas(800,800);
  a=createSprite(100, 300, 50, 50);
  a.velocityY=-2;
  b=createSprite(100,100,100,10);
  a.shapeColor="green";
  b.shapeColor="green";
  a.debug=1;
  b.debug=2;
  car1=createSprite(300, 300, 50, 50);
  car1.velocityY=-2;
 wall1=createSprite(300,100,100,10);
 car2=createSprite(500, 300, 50, 50);
 car2.velocityY=-2;
 wall2=createSprite(500,100,100,10);
 car3=createSprite(700, 300, 50, 50);
 car3.velocityY=-2;
 wall3=createSprite(700,100,100,10);
}

function draw() {
  background("pink"); 
 
  if(istouching(a,b)){
    a.shapeColor="blue";
  }
  bounceoff(car1,wall1)
  bounce1(car2,wall2)
  collide1(car3,wall3)
  drawSprites();
}



