
const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];


// TIMER
// let demo = document.getElementById("demo")
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  demo.innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    demo.innerHTML = "EXPIRED";
  }
}, 1000);

const start = document.getElementById('start-btn')
const startCard = document.getElementById('start-card')
const quizCard = document.getElementById('quiz-card')
const scoreCard = document.getElementById('score-card')

const query = document.querySelector('#questions')
const remark = document.getElementById('remark')
let index =0
start.addEventListener('click', startQuiz)

function counter(){
  remark.innerText = ""
  if(index<questions.length-1){
    index++
    displayQuestion(index)
  }else{
  quizCard.classList.add('hide')
  scoreCard.classList.remove('hide')
  }
}

function startQuiz(){
  startCard.classList.add('hide')
  quizCard.classList.remove('hide')
  displayQuestion(index)
}

function displayQuestion(arg){
  query.innerHTML = `<h2>${questions[arg].questionText}</h2>`
  for (var i=0; i<4; i++){
  document.getElementById(`btn${i}`).innerText = questions[arg].options[`${i}`]
}
}

function setNextQuestion(){
  let arg = 0
  displayQuestion(arg+1)
  arg++
}

function checkAns(num){
  if(document.getElementById(`btn${num}`).innerText == questions[index].answer){
    remark.innerText = 'Correct!'
  }else{
    remark.innerText = 'Incorrect!'
  }
}

