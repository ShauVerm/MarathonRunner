var runner;
var runnerImg;
var cactus;
var cactusImg;
var lion;
var lionImg;
var rock;
var rockImg;

function preload(){
runnerImg = loadAnimation("images/Animation1.png","images/Animation2.png","images/Animation3.png","images/Animation4.png","images/Animation5.png","images/Animation6.png","images/Animation7.png","images/Animation8.png","images/Animation9.png","images/Animation10.png");
cactusImg = loadImage("images/Cactus.png");
lionImg = loadAnimation("images/Lion/Lion (1).png","images/Lion/Lion (2).png","images/Lion/Lion (3).png","images/Lion/Lion (4).png","images/Lion/Lion (5).png","images/Lion/Lion (6).png","images/Lion/Lion (7).png","images/Lion/Lion (8).png","images/Lion/Lion (9).png","images/Lion/Lion (10).png","images/Lion/Lion (11).png","images/Lion/Lion (12).png","images/Lion/Lion (13).png","images/Lion/Lion (14).png","images/Lion/Lion (15).png","images/Lion/Lion (16).png","images/Lion/Lion (17).png","images/Lion/Lion (18).png","images/Lion/Lion (19).png","images/Lion/Lion (20).png");
rockImg = loadImage("images/rock.png");
}

function setup(){
createCanvas(displayWidth, displayHeight);    
runner = createSprite(displayWidth / 2, displayHeight / 2);
runner.addAnimation("runnerImg",runnerImg);
runner.scale = 2;
lion = createSprite(displayWidth - 100, displayHeight / 2);
lion.addAnimation("lionImg",lionImg);
}

function draw(){
background("white");    
spawnObstacle();
drawSprites();
}

function spawnObstacle(){
if(frameCount % 300 === 0){
    obstacle = createSprite(displayWidth - 300, displayHeight / 2);
    obstacle.velocityX = -1;

    var rand = Math.round(random(1,2));
    switch(rand) {
    case 1: obstacle.addImage(cactusImg); 
    break;
    case 2: obstacle.addImage(rockImg);  
    default: break;
    } 
    obstacle.scale = 0.2;
    obstacle.lifetime = displayWidth; 
}

}