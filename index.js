var readlineSync = require("readline-sync");
var chalk = require ("chalk");
var score = 0;

var name = readlineSync.question(" Hello!,what is your name?");

console.log(" welcome!" + name);
console.log(chalk.bgBlue(" let's see how well do you know Shivangi!"));


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
  
  { question:"where do i study?", answer:"cu"},
  
  { question:"what is my favorite color?", answer:"red"},
  { question:"what is my favorite waffer?", answer:"munch"},
  { question:"Do i like watching movies?", answer:"yes"},
  
  
  ]; 
 
 
  for( var i=0; i<questions.length; i++) {
var currentQuestion = questions[i];
play(currentQuestion.question , currentQuestion.answer);
  }
  console.log("final score:" , score);
  console.log("check the high score!");
  
  //array of highscore
highScore = [
    {
        username: "shruti",
        point: 4
    },
   
    {
        username: "abhi",
        point: 3
    },
];
//displaying highscore
console.log(chalk.bgRed(" High Score "));
console.table(highScore);
// getting high score
var max = highScore[0].point;
for (let i = 1; i < highScore.length; i++) {
  if (highScore[i].point > max) {
    max = highScore[i].point;
  }
}
//checking if user beat the hihg score
if(score>max){
    console.log(chalk.inverse.bold("\n Congrats u beat high score \n"));
}
else{
    console.log(chalk.inverse.bold("\n Pay attention Next Time \n"));

}
