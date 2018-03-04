// $("#timer").text(":30");

var $mute = $('#mute');
var $startButton = $('#start-button');
var $quit = $('#quit');


var r, interval;
var used = [];
var quesNum = 0;
var answered = false;
var timer = 15;

 var jeopardy = [
  // questionObj = {
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
      rightAnswer: "Russel Westbrook",
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
      question: "Which NHL team won teh 2017 Stanley Cup finals against the Nashville Predators",
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
  // }
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
  if (quesNum === 8){
    alert("Game Over");
  }
}

function displayQuestion(){
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
    alert("RIGHT");
  }

  if($(this).text() !== (jeopardy[r].rightAnswer)){
    answered = true;
    alert("WRONG");
  }
}

function run() {
  clearInterval(interval);
  interval = setInterval(decrement, 1000);
}
function decrement() {
  timer--;
  $('#timer').text(":" + timer);
  if (timer === 0) {
    stop();
    alert("Time Up!");
  }
}
function stop() {
  clearInterval(interval);
}


random();
displayQuestion();
run();
console.log(r);
console.log(jeopardy[r].question);
console.log(jeopardy[r].rightAnswer);
console.log(jeopardy[r].answerArray);

$("#start-button").click(function(){
  $("#start-button").hide();
  $("#answer-container").show();
});

$(document).on("click", ".answers", answerQuestion);
