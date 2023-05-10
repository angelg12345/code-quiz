const mostRecentScore = localStorage.getItem('mostRecentScore')
const finalScore = document.getElementById('final-score');
const userInitials = document.getElementById('initials');
const scoreButton = document.getElementById('score-btn') 
const highscoreSec = document.getElementById('highscores')

const maxHighScores = 5
let currentQuiz = 0;
let score = 0;
let initials = ''

// getting highscores and parsing and highscore to local storage into an array.
//displays the most recent score
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)
finalScore.innerText = mostRecentScore;
// event so that when saveHighscore is pushed it prevents default form submission.
saveHighScore = (e) => {
    console.log('clicked the view highScores')
    
    e.preventDefault(); 
// score object added to highscore by push
    const score = {
        score: mostRecentScore,
        name: userInitials.value
    };

    highScores.push(score)
// Puts the scores in order from highest to lowest
    highScores.sort((a,b) => {
        return b.score - a.score;
    })
// This removes any score below the top 5
    highScores.splice(5);
// stored in set item  redirects user back to the home page. 
//clear score clears the most recent score so it does not display the same score on the next time the quiz is played.
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign(" index.html");
    console.log(highScores)
    clearScore()
}


function clearScore(){
    localStorage.removeItem('mostRecentScore')
}