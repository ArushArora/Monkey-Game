
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  monkey = createSprite(50,100,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
   ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  
   invisibleGround = createSprite(200,180,400,10);
  invisibleGround.visible = false;
  
  
 
}


function draw() {
  background(280);

  
  
   monkey.collide(invisibleGround);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
 
  if (ground.x < 0){
      ground.velocityX = ground.width/2;
    }
  
  if (frameCount % 80 === 0) {
  banana = createSprite(120,100,20,20);
  banana.addImage("banana",bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime = 130;
    
  }
  
  if(frameCount % 100 === 0 ){
  obstacle = createSprite(120,150,20,20);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  obstacle.lifetime = 130;
    
    
  }
  stroke("white");
  textSize(20);
  fill("white");
  text("score: " + score,500,50);
  
  stroke(" black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text(  "survival time :" + survivalTime,400,50);
  
  
  drawSprites();
}






