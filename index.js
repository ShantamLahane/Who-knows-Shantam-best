
var readlineSync = require('readline-sync');

var userName = readlineSync.question("Give me your name? ");
log(" ");

function log(data) {
  console.log(data);
}

log("Welcome: " + userName + " May be you know Shantam better?");
log(" ");

score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    log("Well done right answer!!!");
    log("current score is added by 5")
    score = score + 5
    log("----------------------");
    log(" ");
    log(" ");
} else {
    log("wrong answer!!! ");
    log("Your current score is deducted by 5")
    score = score - 5
    log("----------------------");
    log(" ");
    log(" ");
  }
}
var question = [{
  question: "My favourite movie? a)Harry Potter b)Avenger c)Batman = ",
  answer: "a"
}, {
  question: "My favourite food? a)veg b)non-veg = ",
  answer: "b"
}, {
  question: "My favourite game? a)BGMI b)CODM c)Apex Legend = ",
  answer: "c"
}, {
  question: "My favourite drink? a)Water b)Thums Up c)coke = ",
  answer: "a"
}, {
  question:"My favourite sports? a)cricket b)football c)basketball = ",
  answer: "b"
}, {
  question: "My favourite football player? a)Cristiano Ronaldo b)Messi = ",
  answer: "a"
}, {
  question: "My favourite avenger? a)spiderman b)Ironman c)Dr.Strange = ",
  answer: "c"
}, {
  question: "My favourite pet? a)dog b)cat c)rat = ",
  answer: "a"
}]

for (var i=0; i < question.length; i++) {
  var currentQueston = question[i];
  play(currentQueston.question, currentQueston.answer);
}

log("Your finalscore is: " + score);
  log("----------------");
  log(" ");

var highScore = [
{
  name: "Yash",
  score: 40,
},
{
  name: "Sunil",
  score: 30,
},
{
  name: "Vedant",
  score: 30,
},
{
  name: "Haaris",
  score: 28,
},
{
namw: "Atharva",
answer: 0,
},
{
  name: "Kunal",
  score: -20,
},
{
  name: "Ebhrahim",
  score: -40,
}
]

log("WOW! your score ", score);
log("Check out the high score in this list = ");

for (var i=0; i < highScore.length; i++) {
  log(highScore[i].name + " ---> " + highScore[i].score);
  log("------------------");
  log(" ");
}


var score = [
{
  name: "name",
  score: 00, 
}]



