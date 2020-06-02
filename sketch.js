var bullet, wall, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(200,120,75,75);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);   
  speed=random(5,50);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(225,225,225);
  if (hasCollided(bullet, wall)) {
    speed=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }
  if (damage>10) {
    wall.shapeColor=color(255,0,0);
  }
  if (damage<10) {
    wall.shapeColor=color(0,255,0);
  }
  bullet.velocityX=speed;
  drawSprites();
}