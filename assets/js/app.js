var $mute = $('#mute');
var $startButton = $('#start-button');
var $quit = $('#quit');
// var audio = new Audio('./../music/Jeopardy-theme-song.mp3');

var used = [];
var quesNum = 0;
var r, interval;
var answered = false;
var running = false;
var timer = 20;
var correct = 0;
var wrong = 0;
var unAnswered = 0;

 var jeopardy = [
    item = {
      question: "What NFL team won Super Bowl 51",
      rightAnswer: "New England Patriots",
      answerArray: [
        "New England Patriots",
        "Dallas Cowboys",
        "Los Angeles Chargers", 
        "Atlanta Falcons"
      ]
    },
    item = {
      question: "Who was the NBA's Most Valuable Player (MVP) for 2017",
      rightAnswer: "Russell Westbrook",
      answerArray: [
        "Draymond Green",
        "Russell Westbrook",
        "Kawhi Leonard",
        "James Harden"
      ]
    },
    item = {
      question: "The 2017 Louis Vuitton Cup was awarded to Team New Zeland in which sport",
      rightAnswer: "Sailing",
      answerArray: [
        "Tennis",
        "Rugby",
        "Sailing",
        "Curling"
      ]
    },
    item = {
      question: "In what month did the 2017 Tour de France take place",
      rightAnswer: "July",
      answerArray: [
        "June",
        "July",
        "May",
        "April"
      ]
    },
    item = {
      question: "Which NHL team won the 2017 Stanley Cup finals against the Nashville Predators",
      rightAnswer: "Pittsburgh Penguins",
      answerArray: [
        "Ottawa Senators",
        "Pittsburgh Penguins",
        "Columbus Blue Jackets",
        "Washington Capitals"
      ]
    },
    item = {
      question: "What horse won the 2017 Kentucky Derby",
      rightAnswer: "Always Dreaming",
      answerArray: [
        "Always Dreaming",
        "Lookin At Lee",
        "Classic Empire",
        "Battle of Midway"
      ]
    },
    item = {
      question: "What country won the 2017 World Junior Ice Hockey Championship",
      rightAnswer: "United States",
      answerArray: [
        "United States",
        "Russia",
        "Finland",
        "Canada"
      ]
    },
    item = {
      question: "Who was the first pick of the 2017 NBA Draft",
      rightAnswer: "Markelle Fultz",
      answerArray: [
        "Lonzo Ball",
        "Jayson Tatum",
        "Josh Jackson",
        "Markelle Fultz"
      ]
    },
    item = {
      question: "Who was the first pick in the 2017 NFL Draft",
      rightAnswer: "Myles Garrett",
      answerArray: [
        "Leonard Fournette",
        "Mitchell Trubisky",
        "Myles Garrett",
        "Solomon Thomas"
      ]
    }
]

function random(){
  if (quesNum < 8){
    r = Math.ceil(Math.random() * 8);
    if (!used.includes(r)){
      used.push(r);
      return r;
    }
    else{
      random();
    }
  }
}

function displayQuestion(){
  random();
  $('#question').empty();
  $('#answer1').empty();
  $('#answer2').empty();
  $('#answer3').empty();
  $('#answer4').empty();
  $('#question').text(jeopardy[r].question);
  $('#answer1').text(jeopardy[r].answerArray[0]);
  $('#answer2').text(jeopardy[r].answerArray[1]);
  $('#answer3').text(jeopardy[r].answerArray[2]);
  $('#answer4').text(jeopardy[r].answerArray[3]);
}

function answerQuestion(){
  if($(this).text() === (jeopardy[r].rightAnswer)){
    answered = true;
    correct++;
    stop();
    $.alert({
      title: 'RIGHT!',
      content: "Correct: " + correct + '\n' + " Wrong: " + wrong + " Unanswered: " + unAnswered,
      theme: 'modern',
      buttons: {
        'Next Question': function(){
          gameReset();
          runGame();
        }
      }
    });
  }

  else if($(this).text() !== (jeopardy[r].rightAnswer)){
    answered = true;
    wrong++;
    stop();
    $.alert({
      title: 'WRONG',
      content: "Correct: " + correct + " Wrong: " + wrong + " Unanswered: " + unAnswered,
      theme: 'modern',
      buttons: {
        'Next Question': function(){
          gameReset();
          runGame();
        }
      }
    });
  }
}

function run() {
  clearInterval(interval);
  interval = setInterval(decrement, 1000);
  running = true;
}
function decrement() {
  timer--;
  $('#timer').text(":" + timer);
  if (timer === 0) {
    unAnswered++;
    stop();
    $.alert({
      title: 'Time Up!',
      content: "Correct: " + correct + " Wrong: " + wrong + " Unanswered: " + unAnswered,
      theme: 'modern',
      buttons: {
        'Next Question': function(){
          gameReset();
          runGame();
        }
      }
    });
    // setTimeout(function(){
    //   gameReset();
    //   runGame();
    // }, 1000 * 2);
  }
}
function stop() {
  clearInterval(interval);
  running = false;
}

function runGame(){
  if (used.length < 8){
    if(!answered){
      displayQuestion();
      run();
    }
    console.log(r);
    console.log(jeopardy[r].question);
    console.log(jeopardy[r].rightAnswer);
    console.log(jeopardy[r].answerArray);
    console.log(used);
  }
  else{
    stop();
    $.confirm({
      title: 'GAME OVER',
      content: 'Play Again?',
      theme: 'modern',
      buttons: {
          Yes: function () {
              stop();
              newGame();
          },
          No: function () {
              // $.alert('Ok!');
          }
      }
  });
  }
}

function gameReset(){
  timer = 20;
  answered = false;
}

function newGame(){
  used = [];
  quesNum = 0;
  answered = false;
  running = false;
  timer = 20;
  correct = 0;
  wrong = 0;
  unAnswered = 0;
  $("#timer").text(":" + timer);
  $("#start-button").show();
  $("#question-container").hide();
  $("#answer-container").hide();
}

$(document).on("click", ".answers", answerQuestion);
$("#start-button").click(function(){
  runGame();
  // audio.play();
  $("#start-button").hide();
  $("#question-container").show();
  $("#answer-container").show();
});

// $("#mute").on("click", audio.pause());

$(".answers").click(function(){
  stop();
})

$("#reset").click(function(){
  $.confirm({
    title: 'RESET',
    content: 'Are You Sure?',
    theme: 'modern',
    buttons: {
        Yes: function () {
            stop();
            newGame();
        },
        No: function () {
            // $.alert('Ok!');
        }
    }
});
})