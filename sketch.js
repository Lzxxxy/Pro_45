var caballero;
var caballeroImg;
var bruja;
var brujaImg;
var bosque;


function preload() {
  caballeroImg = loadImage("assets/caballero.png");
  brujaImg = loadImage("assets/bruja.png");
  bosque = loadImage("assets/bosque.png");
}


function setup() {
  createCanvas(800,400);
  caballero = createSprite(130, 330, 50, 50);
  caballero.addImage("caballero",caballeroImg);
  caballero.scale = 0.10;

  bruja = createSprite(700,80,40,40);
  bruja.addImage("bruja",brujaImg);
  bruja.scale = 0.35;

  invisibleGround = createSprite(400,350,1600,10);
  invisibleGround.visible = false;
}

function draw() {
  background(bosque);    

  console.log(caballero.y)

  if(keyDown("space")&& caballero.y>270) {
    caballero.velocityY = -16;
  }

  caballero.velocityY = caballero.velocityY + 0.8;

  caballero.collide(invisibleGround);
  drawSprites();
}

