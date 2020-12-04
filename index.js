var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
var score = 0;

var userName = readlineSync.question(chalk.yellow('What is Your Name? '));
log(chalk.green('Hi ') + chalk.yellow(userName) + chalk.green(' Welcome to F.R.I.E.N.D.S Quiz!'));

const questions = [
  {
    question: `
      1. The series Friends is set in which city?
      a: Los Angeles
      b: New York City
      c: Miami
      d: Seattle `
      ,
      answer:"b"
  },
  {
    question: `
      2. What pet did Ross own?
      a: A dog named Keith
      b: A rabbit called Lancelot
      c: A monkey named Marcel
      d: A lizard named Alistair `
      ,
      answer:"c"
  },
  {
    question: `
      3. What is Monica skilled at?
      a: Bricklaying
      b: Cooking
      c: American football
      d: Singing `
      ,
      answer:"b"
  }
  ,  {
    question: `
      4. What’s the name of Joey’s penguin?
      a: Snowflake
      b: Waddle
      c: Huggsy
      d: Bobber `
      ,
      answer:"c"
  }
    ,  {
    question: `
      5. What song is Phoebe best known for?
      a: Smelly Cat
      b: Smelly Dog
      c: Smelly Rabbit
      d: Smelly Worm `
      ,
      answer:"a"
  },  {
    question: `
      5. What job does Ross have?
      a: Paleontologist
      b: Artist
      c: Photographer
      d: Insurance salesman `
      ,
      answer:"a"
  }
  ,  {
    question: `
      7. What does Joey never share?
      a: His books
      b: His information
      c: His food
      d: His DVDs `
      ,
      answer:"c"
  }
  ,  {
    question: `
      8. What is Janice most likely to say?
      a: Talk to the hand!
      b: Get me a coffee!
      c: Oh… my… God!
      d: No way! `
      ,
      answer:"c"
  }
  ,  {
    question: `
      9. What are Ross and Monica’s parents called?
      a: Jack and Jill
      b: Philip and Holly
      c: Jack and Judy
      d: Margaret and Peter `
      ,
      answer:"c"
  }
  ,  {
    question: `
      10. What’s the name of the grumpy person who works at the coffee shop?
      a: Herman
      b: Gunther
      c: Frasier
      d: Eddie `
      ,
      answer:"b"
  }
]

// high score data 

var highScores = [
  {
    name: "Varun",
    score: 10,
  }
]

function play (question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    log(chalk.green("Correct!")) ;
    score = score + 1 ;
  }
  else{
    log(chalk.red("Wrong!"));
  }
  log(chalk.green("Score is ") + chalk.green(score));
  log("-------------------")
}

if (readlineSync.keyInYN('Press Y to Start...Anyother Key to exit the quiz')) {
  // 'Y' key was pressed.
  console.log(chalk.red.bgYellowBright.bold(`Let's Start`));
  for (var i=0 ; i<questions.length ; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
} else {
  console.log('You choose to exit the Quiz');
}

console.log(chalk.green("YOUR FINAL SCORE IS ")+ chalk.green(score));
if (score === 10) {
  console.log(chalk.blueBright("Kudos to you, you have beaten the highscore. Send the screenshot of this to Varun to update the leader board."))
}
console.log("---------------------");
console.log("LEADER BOARD");
console.log("---------------------");

for (j=0; j<highScores.length ; j++){
  var currentListName = highScores[j];
  console.log(currentListName.name)
  console.log(currentListName.score)
  console.log("---------------------");
}



