class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      cars=[car1,car2,car3,car4]

    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     // var display_position = 130;
     var x=0 
     var y=0
     var index=0
      for(var plr in allPlayers){

        x = x+200 ;
        y = displayHeight - allPlayers[plr].distance ;
        cars[index].x = x ;
        cars[index].y = y ;
        if(index+1 === player.index) {
          cars[index].shapeColor="red"
          camera.position.x = displayWidth/2
          camera.position.y = cars[index].y
        }
        index = index + 1 ;
        


      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=5
      
      player.update();
    }
    drawSprites();
  }
}
