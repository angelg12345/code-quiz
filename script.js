//this is when you press the start quiz button. It displays a question. 
var startQuiz = document.getElementById("start-quiz")
var timeEl = document.querySelector(".timer")


let questions = [
    {
        numb: 1,
        question: "What html tag is used to connnect the html to the javascript page?",
        answer: "<script><script/>",
        options: [
            "<link><link/>",
            "<java><java/>",
            "<src><src/>",
            "<script><script/>"
        ]
    },
    {
        numb: 2,
        question:
        answer:
        options: [
            
        ]
    }
        
]




















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