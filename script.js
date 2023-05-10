
//Questions and multiple choices including the correct answer
const quizData = [
    {
        question: "What html tag is used to connnect the html to the javascript page?",
           a: "<link><link/>",
           b: "<java><java/>",
           c: "<src><src/>",
           d: "<script><script/>",
        correct: "d",
    },
    {
        question: "which of the following is not a valid data type in JavaScript?",
            a:"string",
            b:"range",
            c:"boolean",
            d:"array",
        correct:"b",
    },
    {
        question:"How do you change the background color of an element in css?",
            a:"background-color:",
            b:"color:",
            c:"bg-color:",
            d:"background:",
        correct: "a",
    },
    {
        question: "Why do we use media query in CSS?",
            a:"To define a new class",
            b:"To display a video",
            c:"To set different font sizes",
            d:"To account styling for specific screen sizes or devices",
        correct: "d",
    },
    {
        question: "What does the acronym DOM stand for?",
           a: "Document Object Model",
           b: "Document Orientation Model",
           c: "Digital Object Model",
           d: "Data Object Model",
        correct: "c",
    },
    {
        question: "What is the difference between let and var in JavaScript?",
           a: "There is no difference.",
           b: "var has function-level scope, while let has block-level scope.",
           c: "let has function-level scope, while var has block-level scope.",
           d: "None of the above.",
        correct: "b",
    },
    {
        question: "What is an example of a JavaScript event?",
           a: "onclick",
           b: "onsubmit",
           c: "onload",
           d: "All of the above",
        correct: "d",
    },
    {
        question: "What is the CSS box model?",
           a: "A way of representing the size and positioning of HTML elements",
           b: " A set of predefined styles for boxes in CSS",
           c: "A type of layout used in CSS",
           d: " A way of representing the structure of a web page",
        correct: "a",
    },
    {
        question: "What is the purpose of HTML?",
           a: "To define the structure of web pages",
           b: "To style web pages",
           c: "To add interactivity to web pages",
           d: "To create animations",
        correct: "a",
    },
    {
        question: "What is the correct HTML tag for creating a list with bullet points?",
           a: "<ul>",
           b: "<ol>",
           c: "<li>",
           d: "Both <ul> and <li>",
        correct: "d",
    },
];
//all of the variables
const startSection = document.getElementById('start-page')
const startBtn = document.getElementById("start-btn");


var secondsLeft = 60
var timerInterval;
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionsEl = document.getElementById('question');
const a_choice = document.getElementById('a_choice');
const b_choice = document.getElementById('b_choice');
const c_choice = document.getElementById('c_choice');
const d_choice = document.getElementById('d_choice');
const submitBtn = document.getElementById('submit');

const scoreForm = document.getElementById('score-form');


let currentQuiz = 0;
let score = 0;
let initials = ''

const timeEl = document.getElementById('timer')
//This is the timer. It ends the game if it reaches 0.
function startTimer(){
    timeEl.innerText = secondsLeft;
    const timerId = setInterval(() => {
        timeEl.innerHTML -= 1;
        if (Number.parseInt(timeEl.innerHTML)<= 0) {
            clearTimeout(timerId);
            endGame()
        }
        
    }, 1000);
}
//when start button is pushed the start page is hidden and the quiz is then displayed
startBtn.addEventListener('click', () => {
    
    console.log('you pushed the button')
    startSection.style.display = 'none';
    loadQuiz();
    startTimer();
    
})
// function to end the game specifically for when the timer hits zero. Its called in the start timer function
function endGame(){
    return window.location.assign('end.html')
}
//loads the first question and choices onto html


function loadQuiz() {
    
        // check if all questions have been answered
        if (currentQuiz >= quizData.length) {
            console.log('quiz done')
          endQuiz();
          return;
        }

quiz.style.display = 'block';
deselectAnswers()
//keeps track of the question by number
    const currentQuizData = quizData[currentQuiz]
//Displays the Current question or the question that the user is on to the question element in html
    questionsEl.innerText = currentQuizData.question
    a_choice.innerText = currentQuizData.a
    b_choice.innerText = currentQuizData.b
    c_choice.innerText = currentQuizData.c
    d_choice.innerText = currentQuizData.d
   

}
//This makes it so that each time a new question comes up the check boxes are not checked. 
function deselectAnswers () {
    answerEls.forEach(answerEls => answerEls.checked = false)
}
//sets loop to go through each answer and checks if the answer is correct. It is getting the answer that the user selected. 
function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    });
    return answer;
}
// Puts a click function on to the submit button and checks to see if the question is correct.
clearInterval(timerInterval)

submitBtn.addEventListener('click', () => {
  
    
    const answer = getSelected()
    if(answer) {
      
        if(answer === quizData[currentQuiz].correct) {
            score++
            clearInterval(timerInterval)
            console.log('correct')
            console.log(currentQuiz)
        } else {
       timeEl.innerHTML -= 10;
        console.log('wrong')
        }
      
        // calls for a loop to ensure it goes through each question and answer
    currentQuiz++
    if(currentQuiz < quizData.length) {
        loadQuiz()
        // Tells the score at the end. Also sends to the end page. It also reads that if all questions are answered it ends the quiz.
    } else {
        endGame()
        localStorage.setItem('mostRecentScore', score);
        console.log(mostRecentScore)
       window.location.assign("end.html");
    //    displayScore()
    }    

    
    setTimeout(() => {
        submitBtn.disabled = false;
    }, 1000);
    }
})





