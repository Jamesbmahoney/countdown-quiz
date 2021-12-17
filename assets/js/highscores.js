function printHighScore() {
    var finalScore = JSON.parse(localStorage.getItem("finalScore")) || [];
    finalScore.forEach(function (score) {

        var liCreate = document.createElement("li");
        liCreate.textContent = score.initials + " - " + score.score


        var olEl = document.getElementById("finalScore");
        olEl.appendChild(liCreate);
    });
};


printHighScore();


