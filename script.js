//this is when you press the start quiz button. It displays a question. 
var startQuiz = document.getElementById("start-quiz")
var timeEl = document.querySelector(".timer")

var secondsleft = 30;
startQuiz.addEventListener("click", function(){
    var timerInterval = setInterval(function(){
        secondsleft--;
        timeEl.textContent = secondsleft + " seconds left "

        if(secondsleft === 0){
            clearInterval(timerInterval);
        }
    }, 1000)
    var question = document.getElementById("question");
    question.innerHTML = "Whats your last name?";
});
startQuiz()