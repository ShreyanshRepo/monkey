var bananaImage,banana;
var obstacleImage,obstacleGroup,foodGroup;
var backGround,backImg,score;
var player_running,player;
var ground;

function preload(){
backImg=loadImage("jungle.png");
  
player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png"); 
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();


}

function setup() {
  createCanvas(400, 400);
  
  backGround = createSprite(200,200,800,400);
  backGround.scale=2;
  backGround.addImage("backGround",backImg);
  backGround.x = backGround.width /2;
  backGround.velocityX = -4;
  
  player = createSprite(50,380,10,5);
  player.addAnimation("running",player_running);
  player.scale=0.08;
  
  
}

function draw() {
  background(220);
  
  if(backGround.x<0){
    backGround.x=backGround.width/2;
     
  }
  
if(keyCode===32 && player.y>=359){
   player.velocityY=-10;
   player.velocityY=player.velocityY+0.8;
}
  

  
  
spawnFood();
spawnObstacles();
  
if(foodGroup.isTouching(player)){

score=score+2;

foodGroup.destroyEach();
}
  
  switch(score){
  
  case 10 : player.scale=0.22;
      break;
      
  case 20 : player.scale=0.24;
      break;
  
  case 30: player.scale=0.26;
      break;
  case 40 : player.scale=0.28;
      break;
  default : break;
  }
  
  if(obstacleGroup.isTouching(player))
  {
  
  player.scale=0.2;
    
  }
  
stroke("white");
textSize(20);
fill("white");
text("Score: "+ score,500,50);  
  
  
  
  drawSprites();
}



function spawnFood() {
  
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = random(300,350);
    banana.addImage("banana.png",bananaImage);
    banana.scale = 0.050;
    banana.velocityX = -6;
    
    //assign lifetime to the variable
    banana.lifetime = 134;
    
    
    foodGroup.add(banana);
  }
  
}

function spawnObstacles(){  

  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*score/100);
    obstacle.addImage("stone.png",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }

}



