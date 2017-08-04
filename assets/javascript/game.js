window.onload = function() {

  console.log("start");

  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var playing=false;
  var seconds=20;
  var currentQuestion=0;
  var triviaCard1 = {};
  var triviaCard2 = {};
  var triviaCard3 = {};
  var triviaCard4 = {};
  var triviaCard5 = {};
  var triviaCard6 = {};
  var triviaCard7 = {};
  var triviaCard8 = {};

  triviaCard1.question = "Which of the following is robust to outliers?";
  triviaCard1.answers = ["mean","median","sum","average"];
  triviaCard1.solution = 1;
  triviaCard1.image = "assets/images/trivia1.jpeg";

  triviaCard2.question = "Which of the following is NOT a distance?";
  triviaCard2.answers = ["Mahalanobis","L2","Arkansas","Great circle"];
  triviaCard2.solution = 2;
  triviaCard2.image = "assets/images/trivia2.jpeg";

  triviaCard3.question = "Which of the following is NOT used to model count data (positive numbers)?";
  triviaCard3.answers = ["Normal distribution","Poisson distribution","Negative binomial distribution","Latin squares design"];
  triviaCard3.solution = 3;
  triviaCard3.image = "assets/images/trivia3.jpeg";

  triviaCard4.question = "For a Normal distribution, what is the probability of being within one standard deviation of the mean?";
  triviaCard4.answers = [.5,.1,.68,.99];
  triviaCard4.solution = 2;
  triviaCard4.image = "assets/images/trivia4.jpeg";

  triviaCard5.question = "Which of the following distributions is NOT within the exponential family?";
  triviaCard5.answers = ["gamma","normal","uniform","Bernoulli"];
  triviaCard5.solution = 2;
  triviaCard5.image = "assets/images/trivia5.jpeg";

  triviaCard6.question = "Which of the following is not used for dimension reduction?";
  triviaCard6.answers = ["Principal Component Analysis","Variable Selection","exponentiation","sub sampling"];
  triviaCard6.solution = 2;
  triviaCard6.image = "assets/images/trivia6.jpeg";

  triviaCard7.question = "Which of the following is NOT a principle of experimental design?";
  triviaCard7.answers = ["Blocking", "Randomization","Replication","p-value"];
  triviaCard7.solution = 3;
  triviaCard7.image = "assets/images/trivia7.jpeg";

  triviaCard8.question = "What is the likelihood of flipping 4 coins and observing 4 tails?";
  triviaCard8.answers = ["1/16","1/4","1","1/2"];
  triviaCard8.solution = 0;
  triviaCard8.image = "assets/images/trivia8.jpeg";



  var questions = [triviaCard1,triviaCard2,triviaCard3,triviaCard4,triviaCard5,triviaCard6,triviaCard7,triviaCard8];


  $("#button1").click(function(){
    answer(0);
  });
  $("#button2").click(function(){
    answer(1);
  });
  $("#button3").click(function(){
    answer(2);
  });
  $("#button4").click(function(){
    answer(3);
  });

  //check current question for correct answers
  function answer(num){

    if (questions[currentQuestion].solution === num) {
      correctAnswers++;
      console.log("correct");
      displayWinBanner();
      console.log(currentQuestion);
      seconds=20;
      currentQuestion++;

    } else {
      incorrectAnswers++;
      console.log("incorrect");
      displayLoseBanner();
      currentQuestion++;
      seconds=20;
      console.log(currentQuestion);

    }

  }


//ToDo:   startGame(); banner expecting click
//       resetGame();
//       display number correct
//       display correct answer was:


function displayWinBanner(){

  $("#imageQ").attr("src","https://media.giphy.com/media/qJVASMVkxVIpW/giphy.gif");
  setTimeout(function(){
    $("#imageQ").attr("src","");

  },3000);
}

function displayLoseBanner(){

  $("#imageQ").attr("src","https://media.giphy.com/media/GW10shdM3oXok/giphy.gif");
  $("#headText").html("The correct answer was:"+questions[currentQuestion].answers[questions[currentQuestion].solution]);

  setTimeout(function(){
    $("#imageQ").attr("src","");
    $("#headText").html("");



  },3000);
}




  function resetHTML(){

    $("#headText").html("Welcome to statistics trivia!  You will be given a sequence of 8 multiple choice questions.  Good luck!");
    currentQuestion=0;
  }

  function playQuestion(num){
    $("#headText").html(questions[num].question);

    playing = true;
    $("#button1").text(questions[num].answers[0]);
    $("#button2").text(questions[num].answers[1]);
    $("#button3").text(questions[num].answers[2]);
    $("#button4").text(questions[num].answers[3]);
  }


  function myTimer(){
    $("#timer").html(seconds);
    seconds--;
    if (seconds===0){
      console.log("end time");
      seconds=20;
      currentQuestion++;
    }
  }

  function playGame(){
    resetHTML(); //function to reset all variables and return DOM to begining

    playQuestion(0);
    var countdown =setInterval(function(){playQuestion(currentQuestion)}, 3000);
    var myVar = setInterval(function(){ myTimer() }, 1000);


  }

  playGame();



};
