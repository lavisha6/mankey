
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0 , survival_time;
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
//creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
  console.log(ground.x);

  
}


function draw() {
  background("lightblue");
  //monkey.collide(ground);
  
  if(ground.x < 300){
    ground.x = ground.width/2;
  }
   
  if(keyDown("space") && monkey.y>=280){
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
   
  spawnObstacles();
    spawnBanana();
    
 stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score , 380,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survival_time = Math.round(frameCount/frameRate());
  text("survival_time"+ survival_time , 100,50);

  
monkey.collide(ground);  
  
 drawSprites();
}

function spawnObstacles(){
   if(frameCount % 80 === 0){
    obstacle = createSprite(400,305,10,40);
    obstacle.addImage(obstacleImage);
     obstacle.scale = 0.16;
    obstacle.velocityX = -6;
  }
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,305,10,40);
    banana.y = Math.round(random(100,140))
   banana.addImage(bananaImage);
   
    //banana = Math.round(random(100,140));
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth +1;
  }
}


