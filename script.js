
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
var timerInterval;
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

const timeEl = document.getElementById('timer')

function startTimer(){
    timeEl.innerText = secondsLeft;
    const timerId = setInterval(() => {
        timeEl.innerHTML -= 1;
        if (Number.parseInt(timeEl.innerHTML)<= 0) {
            clearTimeout(timerId);
        }
    }, 1000);
}
//loads the first question and choices onto html
loadQuiz();
;
function loadQuiz() {
const startBtn = document.getElementById("start");
startBtn.style.display = "none";

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
//This makes it so that each time a new question comes up the check boxes are not checked. It also ensures that no more than one box is selected but I used a radio input.
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
startTimer();
submitBtn.addEventListener('click', () => {
   
    submitBtn.disabled = true;
    const answer = getSelected()
    if(answer) {
      
        if(answer === quizData[currentQuiz].correct) {
            score++
            clearInterval(timerInterval)
            console.log('correct')
        } else {
       timeEl.innerHTML -= 10;
        console.log('wrong')
           
        }
        // calls for a loop to ensure it goes through each question and answer
    currentQuiz++
    if(currentQuiz < quizData.length) {
        loadQuiz()
        // Tells the score at the end
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>`
    }    

    setTimeout(() => {
        submitBtn.disabled = false;
    }, 1000);
    }
})

