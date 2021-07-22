var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4;
var form, player, game;
var cars;



function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  car1=createSprite(100,100,30,30);
  car2=createSprite(200,100,30,30);
  car3=createSprite(300,100,30,30);
  car4=createSprite(400,100,30,30);
  game = new Game();
  game.getState();
  game.start(); 
}



function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
