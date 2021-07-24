var readlineSync = require("readline-sync");

var score = 0;

var name = readlineSync.question("what is your name?");

console.log(" welcome!" + name);
console.log(" let's see how well do you know               Shivangi!");

var highScore = [{
 name: "akash",
 score:10,},  {
   name:"ashi",
   score:10,
 
}]

function play(question , answer) {
  var userAnswer = readlineSync.question(question);
   if (userAnswer === answer ) {
     console.log("you are right!"); 
     score = score + 1; 
     
   }
     else{
       console.log("you are wrong!");
     }
     console.log("score is:" , score);
     console.log("---------"); 
   }
// directly write question and play 

// play (" where do i live?", "chandigarh ");
// play (" where do i study?", "cu");

// first define the question - answer , then call the function

// var quetionOne = { question:"where do i live?" ,
// answer: "chandigarh"
// }
// var questionnTwo = { question:"where do i study?" ,
// answer: "cu"
// }
//  var questions = [ questionOne, questionTwo]
  //  then write for loop or directly write the question as show 

  var questions = [{ question: "where do i live?", answer:"chandigarh"
  },
  
  { question:"where do i study?", answer:"cu"}]; 
 
 
  for( var i=0; i<questions.length; i++) {
var currentQuestion = questions[i];
play(currentQuestion.question , currentQuestion.answer);
  }
  console.log("final score:" , score);
  console.log("check the high score!");
   console.log(highScore[0]);
  