var sea, ship;
var seaImg, shipImg;

function preload() {

  shipImg1 = loadAnimation("ship-1.png");

  shipImg1 = loadAnimation("ship-1.png", "ship-2.png");

  shipImg2 = loadAnimation("ship-3.png", "ship-3.png", "ship-4.png", "ship-3.png");

  seaImg = loadImage("sea.png");
}

function setup() {
  createCanvas(400, 400);
  sea = createSprite(400, 200);
  sea.addImage(seaImg);
  sea.velocityX = -3
  sea.scale = 0.3;

  ship = createSprite(130, 250, 30, 30);
  ship.scale = 0.3;
  ship.addAnimation("movingShip", shipImg1);
  ship.addAnimation("shiplightOn", shipImg2);


}

ship = createSprite(130, 200, 30, 30);
ship.addAnimation("movingShip", shipImg1);
ship.scale = 0.25;

function draw() {
  background("blue");

  if (sea.x < 0) {
    sea.x = sea.width / 8
  }
  if (keyDown("space")) {
    ship.addAnimation("moving", shipImg2);

  }
  drawSprites();

}