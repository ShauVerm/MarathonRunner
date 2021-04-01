var runner;
var runnerImg;
var cactus;
var cactusImg;
var lion;
var lionImg;
var rock;
var rockImg;
var track;
var trackImg;
var obstaclesGroup;
var gameState = "play";

function preload() {
    runnerImg = loadAnimation("images/Animation1.png", "images/Animation2.png", "images/Animation3.png", "images/Animation4.png", "images/Animation5.png", "images/Animation6.png", "images/Animation7.png", "images/Animation8.png", "images/Animation9.png", "images/Animation10.png");
    cactusImg = loadImage("images/Cactus.png");
    lionImg = loadAnimation("images/Lion/Lion (1).png", "images/Lion/Lion (2).png", "images/Lion/Lion (3).png", "images/Lion/Lion (4).png", "images/Lion/Lion (5).png", "images/Lion/Lion (6).png", "images/Lion/Lion (7).png", "images/Lion/Lion (8).png", "images/Lion/Lion (9).png", "images/Lion/Lion (10).png", "images/Lion/Lion (11).png", "images/Lion/Lion (12).png", "images/Lion/Lion (13).png", "images/Lion/Lion (14).png", "images/Lion/Lion (15).png", "images/Lion/Lion (16).png", "images/Lion/Lion (17).png", "images/Lion/Lion (18).png", "images/Lion/Lion (19).png", "images/Lion/Lion (20).png");
    rockImg = loadImage("images/Rock.png");
    trackImg = loadImage("images/Track.png");
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    track = createSprite(0, displayHeight - 400);
    track.addImage("trackImg", trackImg);
    track.scale = 3;

    runner = createSprite(displayWidth / 2, displayHeight / 2 - 100);
    runner.addAnimation("runnerImg", runnerImg);
    runner.scale = 2;

    lion = createSprite(displayWidth - 100, displayHeight / 2 - 100);
    lion.addAnimation("lionImg", lionImg);
    lion.scale = 0.8;

    obstaclesGroup = new Group();
}

function draw() {
    background("#57B400");
    if (gameState === "play") {
        track.velocityX = -1;
        spawnObstacle();
        if (track.x < 0) {
            track.x = displayWidth / 2;
        }
        if (obstaclesGroup.isTouching(runner)) {
            gameState = "end";
        }
    }
    else if (gameState === "end") {
        track.velocityX = 0;
    }
    drawSprites();
}

function spawnObstacle() {
    if (frameCount % 300 === 0) {
        obstacle = createSprite(displayWidth - 300, displayHeight / 2 - 70);
        rand = Math.round(random(displayHeight / 2 - 100, displayHeight / 2 + 100));
        obstacle.y = rand;
        obstacle.velocityX = -1;

        var rand = Math.round(random(1, 2));
        switch (rand) {
            case 1: obstacle.addImage(cactusImg);
                break;
            case 2: obstacle.addImage(rockImg);
            default: break;
        }
        obstacle.scale = 0.2;
        obstacle.lifetime = displayWidth;
        obstacle.debug = true;
        obstacle.setCollider("rectangle", 0, 150, 100, 100);
        obstaclesGroup.add(obstacle);
    }

}