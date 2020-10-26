var car,wall;
var weight,speed;
var deformation;
function setup() {
  createCanvas(1600,400);
  weight=random(400,1500);
  speed=random(55,90);
  car = createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  car.velocityX=speed;
  deformation=0.5*weight*speed/22500;
}

function draw() {
  background(220);  
  if(deformation>180){
   car.shapeColor=color(255,0,0);
  }
  if(deformation<180&&deformation>100){
  car.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
  drawSprites();
}