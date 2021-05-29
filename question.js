class Question {

  constructor() {
    this.title = createElement('h1');
    this.instruction = createElement('h2')
    this.line = createElement('h1');
    this.input1 = createInput("").attribute(
      "placeholder",
      "Enter Name Here.."
    );
    this.input2 = createInput("").attribute(
      "placeholder",
      "Enter Option No. Here.."
    );
    this.button = createButton('Submit Your Answer');
    this.resetButton = createButton('RESET');
    this.question = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.line.hide();
    this.instruction.hide();
  }

  display(){
    this.title.html("IT IS QUIZZZ TIME !!!");
    this.title.position(830, 150);

    this.line.html("______________________");
    this.line.position(820, 160);

    this.instruction.html("* At least 2 players required");
    this.instruction.position(510, 100);

    this.question.html("QUESTION:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(600, 250);
    this.option1.html("1) Everyone " );
    this.option1.position(680, 300);
    this.option2.html("2) Envelope" );
    this.option2.position(980, 300);
    this.option3.html("3) Estimate " );
    this.option3.position(680, 350);
    this.option4.html("4) Example" );
    this.option4.position(980, 350);

    this.input1.position(680, 500);
    this.input2.position(980, 500);
    this.button.position(1200, 550);
    this.resetButton.position(1410, 120);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.line.hide();
      this.instruction.hide();
    
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.resetButton.mousePressed(()=>{
      contestant.updateCount(0);
      quiz.update(0);
      database.ref('/').update({
        'contestants' : null
      })
    })
  }
}

