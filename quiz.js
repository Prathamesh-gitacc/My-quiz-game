class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value", (data)=>{
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      'gameState': state
    });
  }

  async start(){
    if(gameState === 0){
      background("pink");
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
     
    }
  }

  play(){
    
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    fill("red");
    textSize(50);
    text("Results of the Quiz !!!", 250, 80);
    text("------------------------------", 240, 120);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined){
      var display_answers = 400;
      //write code to add a note here
      fill("blue");
      textSize(25);
      text("* Note: Contestants who answered correctly are highlighted in green!!", 100, 380);
  

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
        fill("green");
      else
        fill("red");
      
      display_answers += 40;
      noStroke();
      textSize(25);
      text(allContestants[plr].name + " : " + allContestants[plr].answer, 230, display_answers);
      noStroke();
      fill("black")
      textSize(25);
      text("Thank You All for Participating!!", 600, 550);

      noFill();
      stroke("red");
      strokeWeight(4);
      rect(580, 520, 380, 50);

      noStroke();
      fill("black");
      textSize(20);
      text("Press RESET and then Refresh to start again", 580, 500);
      
    }
    
  }
}

}