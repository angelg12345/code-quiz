const mostRecentScore = localStorage.getItem('mostRecentScore')
const finalScore = document.getElementById('final-score');
const userInitials = document.getElementById('initials');
const scoreButton = document.getElementById('score-btn') 
const highscoreSec = document.getElementById('highscores')

const maxHighScores = 5
let currentQuiz = 0;
let score = 0;
let initials = ''

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)
finalScore.innerText = mostRecentScore;

saveHighScore = (e) => {
    console.log('clicked the view highScores')
    
    e.preventDefault(); 
    const score = {
        score: mostRecentScore,
        name: userInitials.value
    };

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score;
    })

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign(" index.html");
    console.log(highScores)
    
}