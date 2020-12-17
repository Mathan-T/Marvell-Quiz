// Required Libraries
var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

// Getting name & Welcome the user
console.log(chalk.whiteBright.bold.bgRedBright(" Marvell Cinematic Universe "));
console.log(chalk.redBright("----------------------------"))
var welcomeMessage = readlineSync.question("May i Know Your Name? ");
console.log();
console.log(chalk.green.bold("Welcome"), chalk.cyanBright.bold(welcomeMessage), chalk.green.bold("to the Marvell Quiz!!!!"));
console.log("--------------------------------------");

// Instructions
console.log(chalk.cyanBright.bold("Quiz Instructions:"));
console.log(chalk.blueBright.italic("1. This Quiz contains 20 multiple choice questions about MCU."));
console.log(chalk.blueBright.italic("2. For every correct answer will give 5 points."));
console.log(chalk.blueBright.italic("3. For every wrong answer will reduce 2 points."));
console.log(chalk.blueBright.italic("4. Lets begin the game XD"));
console.log();
console.log();

// Functions behind the quiz to play
function play(question, a, b, c, d, answer)
{
  console.log(chalk.yellowBright.bold(question));
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log();
  var userAnswer = readlineSync.question("Enter your answer: ");
  if (userAnswer === answer){
    console.log(chalk.greenBright.bold("YAY!! Thats the right answer"));
    score = score + 5;
  }
  else{
    console.log(chalk.redBright.bold("answer is wrong"))
    score = score - 2;
    console.log(chalk.cyan.bold("The correct answer is: "), answer);
  }
  console.log(chalk.magentaBright.bold("The score is: "), score);
  console.log(chalk.redBright.bold("--------------------------"));
}

// Questions using array of objects
var questions = [{
  question: "1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
  a: "a. 2005",
  b: "b. 2008",
  c: "c. 2010",
  d: "d. 2012",
  answer: "b"
},{
  question: "2. What is the name of Thor’s hammer?",
  a: "a. Vanir",
  b: "b. Mjolnir",
  c: "c. Aesir",
  d: "d. Norn",
  answer: "b"
},{
  question: "3. In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?",
  a: "a. That he wants to study The Hulk",
  b: "b. That he knows about S.H.I.E.L.D.",
  c: "c. That they are putting a team together",
  d: "d. That Thaddeus owes him money",
  answer: "c"
},{
  question: "4. What is Captain America’s shield made of?",
  a: "a. Adamantium",
  b: "b. Vibranium",
  c: "c. Promethium",
  d: "d. Carbonadium",
  answer: "b"
},{
  question: "5. The Flerkens are a race of extremely dangerous aliens that resembles what?",
  a: "a. Cats",
  b: "b. Ducks",
  c: "c. Reptiles",
  d: "d. Raccoons",
  answer: "a"
},{
  question: "6. Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
  a: "a. H.O.M.E.R.",
  b: "b. J.A.R.V.I.S.",
  c: "c. A.L.F.R.E.D.",
  d: "d. M.A.R.V.I.N.",
  answer: "b"
},{
  question: "7.  What is the real name of the Black Panther?",
  a: "a. T’Challa",
  b: "b. M’Baku",
  c: "c. N’Jadaka",
  d: "d. N’Jobu",
  answer: "a"
},{
  question: "8. What is the alien race Loki sends to invade Earth in The Avengers?",
  a: "a. The Chitauri",
  b: "b. The Skrulls",
  c: "c. The Kree",
  d: "d. The Flerkens",
  answer: "a"
},{
  question: "9. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
  a: "a. Thor",
  b: "b. Loki",
  c: "c. The Collector",
  d: "d. Tony Stark",
  answer: "b"
},{
  question: "10. What fake name does Natasha use when she first meets Tony?",
  a: "a. Natalie Rushman",
  b: "b. Natalia Romanoff",
  c: "c. Nicole Rohan",
  d: "d. Naya Rabe",
  answer: "a"
},{
  question: "11. What does Thor want another of when he’s in the diner?",
  a: "a. A slice of pie",
  b: "b. A pint of beer",
  c: "c. A stack of pancakes",
  d: "d. A cup of coffee",
  answer: "d"
},{
  question: "12. Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?",
  a: "a. The Cotton Club",
  b: "b. The Stork Club",
  c: "c. El Morocco",
  d: "d. The Copacabana",
  answer: "b"
},{
  question: "13. About which city do Hawkeye and Black Widow often reminisce?",
  a: "a. Budapest",
  b: "b. Prague",
  c: "c. Istanbul",
  d: "d. Sokovia",
  answer: "a"
},{
  question: "14. Who does the Mad Titan sacrifice to acquire the Soul Stone?",
  a: "a. Nebula",
  b: "b. Ebony Maw",
  c: "c. Cull Obsidian",
  d: "d. Gamora",
  answer: "d"
},{
  question: "15. What is the name of the little boy Tony befriends while stranded in the Iron Man 3?",
  a: "a. Harry",
  b: "b. Henry",
  c: "c. Harley",
  d: "d. Holden",
  answer: "c"
},{
  question: "16. Where do Lady Sif and Volstagg keep the Reality Stone after the Dark Elves tried to steal it?",
  a: "a. On Vormir",
  b: "b. In a vault on Asgard",
  c: "c. Inside Sif’s sword",
  d: "d. To the Collector",
  answer: "d"
},{
  question: "17. What does the Winter Soldier say after Steve recognizes him for the first time?",
  a: "a. “Who the hell is Bucky?”",
  b: "b. “Do i know you?”",
  c: "c. “He’s gone.”",
  d: "d. What did you say?",
  answer: "a"
},{
  question: "18. What were the three items Rocket claims he needs in order to escape the prison?",
  a: "a. A security card, a fork, and an ankle monitor",
  b: "b. A security band, a battery, and a prosthetic leg",
  c: "c. A pair of binoculars, a detonator, and a prosthetic leg",
  d: "d. A knife, cable wires, and Peter’s mixtape",
  answer: "b"
},{
  question: "19.  What word does Tony utter that makes Steve say, “Language”?",
  a: "a. “Crap!”",
  b: "b. “Asshole!”",
  c: "c. “Shit!”",
  d: "d. “Idiot!”",
  answer: "c"
},{
  question: "20. What animal does Darren Cross unsuccessfully shrink in the Ant-Man?",
  a: "a. Mouse",
  b: "b. Sheep",
  c: "c. Duck",
  d: "d. Hamster",
  answer: "b"
}]

// Using for loop to process the function
for (var i=0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.a, currentQuestion.b, currentQuestion.c, currentQuestion.d, currentQuestion.answer)
}

console.log();
console.log(chalk.whiteBright.bold.bgMagentaBright("Hurray!! your final score is:", score));
console.log();

// Database for Highscorers
var highscores = [{
  name: "1. Mathan",
  score: "100"
},{
  name: "2. Ashwin",
  score: "90"
},{
  name: "3. Marcus",
  score: "80"
}]

// loop to print the array of objects
console.log(chalk.bold.greenBright("Checkout the Highscores"));
for (var i=0; i<highscores.length; i++)
{
  var currentScore = highscores[i]
  console.log(chalk.cyanBright.bold(currentScore.name, currentScore.score));
}


// compare the user score with highscores using branching
if (score >= 80){
  console.log()
  console.log(chalk.white.bold.bgRedBright("Congrats", welcomeMessage, "you have beaten the high score!!!"))
  console.log()
  console.log(chalk.greenBright.italic("**Take a screenshot and send it to my twitter handle, ill update your name ASAP**"))
}
else{
  console.log();
  console.log(chalk.whiteBright.bold.bgBlackBright("You tried your best, better luck next time"));
}