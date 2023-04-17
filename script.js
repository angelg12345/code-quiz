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
];
//all of the variables
var secondsLeft = 60
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionsEl = document.getElementById('question');
const a_choice = document.getElementById('a_choice');
const b_choice = document.getElementById('b_choice');
const c_choice = document.getElementById('c_choice');
const d_choice = document.getElementById('d_choice');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
//loads the first question and choices onto html
loadQuiz()
function loadQuiz() {
//keeps track of the question by number
    const currentQuizData = quizData[currentQuiz]
//Displays the Current question or the question that the user is on to the question element in html
    questionsEl.innerText = currentQuizData.question
    a_choice.innerText = currentQuizData.a
    b_choice.innerText = currentQuizData.b
    c_choice.innerText = currentQuizData.c
    d_choice.innerText = currentQuizData.d
}


// This is the timer
    var timerInterval = setInterval(function(){
        secondsleft--;
        timeEl.textContent = secondsleft + " seconds left "

        if(secondsleft === 0){
            clearInterval(timerInterval);
        }
    }, 1000)
