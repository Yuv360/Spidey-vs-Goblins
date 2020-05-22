 var playerImg;
 var goblinImg;
 var backgroundImg;
 var boxGroup;
 var player;
 var goblin1;
 var goblin2;
 var canvas;
 var goblinsGroup1;
 var goblinsGroup2;
 var sound;
 var sound2;
 var gameState = "play";
 
function preload(){
  playerImg = loadImage("spiderman.png");
  backgroundImg = loadImage("space background image.jpg");
  goblinImg = loadImage("goblin.png");
 
}

function setup() {
 canvas = createCanvas(displayWidth,790);

   
   goblinsGroup1 = new Group();
   goblinsGroup2 = new Group();
player = createSprite(displayWidth/2,395,50,50);
player.addImage("Spidey",playerImg);  
player.scale = 0.11;

}

function draw() {
  background(backgroundImg);  




goblin11();
goblin12();
if(keyDown(LEFT_ARROW)){
  player.x = player.x-10;

}
 
if(keyDown(RIGHT_ARROW)){
  player.x = player.x+10;
}

if(keyDown(UP_ARROW)){
  player.y = player.y-10;
}

if(keyDown(DOWN_ARROW)){
  player.y = player.y+10;

  
}
if(goblinsGroup1.isTouching(player)){
player.destroy();
gameState = "end";

}

if(goblinsGroup2.isTouching(player)){
  player.destroy();
  gameState = "end";
  
 
  }

if(gameState==="end"){
  textSize(32);
  fill("white");
    text("BUSTED",displayWidth/2,395);
   
}
  drawSprites();
  


}
function goblin11(){
  if(frameCount%100===0){
    var goblin1 = createSprite(random(0,displayWidth),0);
    goblin1.addImage(goblinImg);
    if(goblin1.x<displayWidth/2){
      goblin1.velocityX = 5;
      goblin1.velocityY = 5;
     
    }
    else{
      goblin1.velocityX = -5;
      goblin1.velocityY = 5;
    }
  goblin1.scale = 0.5;
 // goblin1.debug = true;
  goblin1.setCollider("rectangle",0,0,300,300);
  goblinsGroup1.add(goblin1);
  }

}
function goblin12(){
  if(frameCount%100===0){
 var goblin2 = createSprite(random(0,displayWidth),790);
goblin2.addImage(goblinImg);
if(goblin2.x<displayWidth/2){
  goblin2.velocityX = 5;
  goblin2.velocityY = -5;

}
else{
  goblin2.velocityX = -5;
  goblin2.velocityY = -5;
  
}
goblin2.scale = 0.5
goblinsGroup2.add(goblin2);
}
  }
  



/*if(gameState==="end"){
  //player.destroy();
  text = "Busted";
}*/







