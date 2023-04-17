
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
var secondsLeft = 60
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionsEl = document.getElementById('question');

var secondsleft = 60;

startQuiz.addEventListener("click", function(){
// This is the timer
    var timerInterval = setInterval(function(){
        secondsleft--;
        timeEl.textContent = secondsleft + " seconds left "

        if(secondsleft === 0){
            clearInterval(timerInterval);
        }
    }, 1000)
//this is the question change that happens
});
startQuiz()