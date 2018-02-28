$("#timer").text(":30");

//dom elements
var $mute = $('#mute');
var $questionBox = $('#question-box');
var $startButton = $('#start-button');
var $questionInner = $('#question-inner');
var $question = $('#question');
var $answer1 = $('#answer1');
var $answer2 = $('#answer2');
var $answer3 = $('#answer3');
var $answer4 = $('#answer4');
var $quit = $('#quit');
var $timer = $('#timer');

var jeopardy = [
  question = {
    ques: "What NFL team won Super Bowl 51",
    ansArray: [
      "1",
      "New England Patriots",
      "Dallas Cowboys",
      "Los Angeles Chargers", 
      "Atlanta Falcons"
    ]
  },
  question = {
    ques: "Who was the NBA's Most Valuable Player (MVP) for 2017",
    ansArray: [
      "2",
      "Draymond Green",
      "Russell Westbrook",
      "Kawhi Leonard",
      "James Harden"
    ]
  },
  
  question = {
    ques: "The 2017 Louis Vuitton Cup was awarded to Team New Zealand in which sport",
    ansArray: [
      "3",
      "Tennis",
      "Rugby",
      "Sailing",
      "Curling"
    ]
  },
  
  question = {
    ques:"In what month did the 2017 Tour de France take place",
    ansArray: [
      "2",
      "June",
      "July",
      "May",
      "April"
    ]
  },
  
  question = {
    ques: "Which NHL team won the 2017 Stanley Cup finals against the Nashville Predators",
    ansArray: [
      "2",
      "Ottawa Senators",
      "Pittsburgh Penguins",
      "Columbus Blue Jackets",
      "Washington Capitals"
    ]
  },

  question = {
    ques: "What horse won the 2017 Kentucky Derby in 2017",
    ansArray: [
      "1",
      "Always Dreaming",
      "Lookin At Lee",
      "Classic Empire",
      "Battle of Midway"
    ]
  },
  
  question = {
    ques: "What country won the 2017 World Junior Ice Hockey Championships in 2017",
    ansArray: [
      "1",
      "United States",
      "Russia",
      "Finland",
      "Canada"
    ]
  },
  
  question = {
    ques: "Who was the first pick of the 2017 NBA draft?",
    ansArray: [
      "4",
      "Lonzo Ball",
      "Jayson Tatum",
      "Josh Jackson",
      "Markelle Fultz"
    ]
  },
  
  question = {
    ques: "Who was the first pick in the 2017 NFL draft?",
    ansArray: [
      "3",
      "Leonard Fournette",
      "Mitchell Trubisky",
      "Myles Garrett",
      "Solomon Thomas"
    ]
  },
  
]


var currQues = "";
var running = false;
var r = Math.ceil(Math.random() * 8);

function newGame (){
  running = true;
  $question.text(jeopardy.question[r].ques);
  
  console.log(quesArray[r]);
  console.log(r);
};



$("#start-button").click(function(){
  $("#start-button").hide();
  $("#question-inner").show();
  newGame();
});

