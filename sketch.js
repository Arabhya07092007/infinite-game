var boy, boyImg, boyImg2;
var bus, busImg, car, carImg;
var ground , coinImg;

var city, cityImg, school, schoolImg,farmImg;
var playButton,playButtonImg;

var restart,restartImg;
var carGroup,coinGroup;

var PLAY = 1;
var END = 0 ;

var gameState = 1;

var score,coin;

function preload(){
  
  boyImg = loadAnimation("b1.png","b2.png","b3.png",
                        "b4.png","b5.png");
  
  boyImg2 = loadImage("b6.png");
  
  playButtonImg = loadImage("download (2).png");
  
  cityImg = loadImage("city.jpg");
  
  busImg = loadImage("download (1).png");
  
  carImg = loadImage("download (4).png");
  
  schoolImg  = loadImage("Schools-Logo.jpg");
  
  restartImg = loadImage("restart.png");
  
  coinImg = loadImage("download (3).png")}

function setup(){
  
  createCanvas(610,400);
  

  school = createSprite(612,200);
  school.addImage(schoolImg);
  school.x = school.width/2 ;
  school.velocityX = -3;
  
  city = createSprite(610,100);
  city.addImage(cityImg);
  city.velocityX = -3;
  city.x = school.width/2 + school.width +145;
  
  boy = createSprite(100,300,10,10);
  boy.addAnimation("running",boyImg);
  boy.scale = 0.95;
  
  bus =  createSprite(305,300);
  bus.addImage(busImg);
  bus.scale = 0.65;

  restart  = createSprite(300,200);
  restart.addImage(restartImg);
  
  ground  = createSprite(305,355,610,5);
  ground.visible = false
  
  coinGroup = createGroup();
  carGroup = createGroup();
  
  score =  0;
  
  
}

function draw(){
  
  background("skyblue");
  
  if (gameState  == PLAY){
    
    restart. visible = false

    if (coinGroup.isTouching (boy)){
      
      score = score+1;
      coinGroup.destroyEach();
      
    }
  
    boy.collide(ground);
    
    if (city.x < 200){
    city.x = city.width/2;}
    
    vehicle();
    coin1();
    
   
    
    if (keyDown("space")&& boy.y > 260){
      
     boy.velocityY = -13;
      
    }
    
    boy.velocityY = boy.velocityY + 0.4;
    
    if (carGroup.isTouching(boy)){
      
      gameState = END;
    }
    
       
   drawSprites();
    
  }
  
 if (gameState == END){


   textSize(20);
   fill ("orange");
   text("Game Over",250,200);
  
  

   
 }
  textSize(30);
  stroke("blue");
  strokeWeight(2);
  fill ("lightyellow")
  text("😅😆Bus chutee game !😅😆",70,70);
  
  fill ("indigo");
  textSize(20);
  text("score: " + score,500,70);
  
}

function vehicle(){
  
  if (frameCount % 200 == 0 ){
    
  car = createSprite(600,350);
  car.addImage(carImg);
  car.scale = 0.3;
  car.velocityX = -4;
  car.lifetime  = 150;
  carGroup.add(car);
  car.setCollider("rectangle",0,0,400,140);
  car.debug = true
    
    
  }
  
}

function coin1(){
  
  if ( frameCount % 40 == 0){
    
    var rand ; 
    rand =  Math.round(random(180,250))
    coin = createSprite(600,220,20,20);
    coin.y = rand;
    coin.addImage(coinImg);
    coin.velocityX = -2;
    coin.scale = 0.3;
    coin.lifetime = 300;
    coinGroup.add(coin);
    
  }
}

