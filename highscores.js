const highScoresList = document.getElementById('highScoresList'); 

// geting item from local storage. stored in JSON and coverted to an object.
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores)
//Transforms each score obect to html string shown in web page.
// join is making them into a single string.
highScoresList.innerHTML =
highScores.map(score => {
    return `<li >${score.name} - ${score.score}</li>`
}).join("");