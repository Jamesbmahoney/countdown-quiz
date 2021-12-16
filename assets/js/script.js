var timerEl = document.querySelector("#count-clock");
var startEl = document.querySelector("#start-btn");
var openingEl = document.querySelector("#start-page");
var quizEl = document.querySelector("#quiz-questions");
var answersEl = document.querySelector("#answer-section");
var feedbackEl = document.querySelector("#feedback");
var initialsEl = document.querySelector("#initials");
var submitEl = document.querySelector("#submit")

var countdownTimer;
var time = 60;
var questionIndex = 0;

function quizStart() {
    openingEl.setAttribute("class", "hide");

    quizEl.setAttribute("class", "show");

    countdownTimer = setInterval(countdown, 1000);

    timerEl.textContent = time;

    callQuestions();

};

function countdown() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
};

function callQuestions() {
    var quizQuestions = questions[questionIndex];

    var actualQuestion = document.getElementById("question-section");
    actualQuestion.textContent = quizQuestions.question;

    answersEl.innerHTML = "";

    quizQuestions.choice.forEach(function (choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);

        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = questionClick;

        answersEl.appendChild(choiceBtn);
    });
}

function questionClick() {
    if (this.value !== questions[questionIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
        return;
                
    } else {
        feedbackEl.textContent = "Correct!";
    }   

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    questionIndex++;

    if (questionIndex === questions.length) {
        quizEnd();
    } else {
        callQuestions();
    }
};

function quizEnd() {
    quizEl.setAttribute("class", "hide");

    clearInterval(countdownTimer);

    var finishEl = document.getElementById("end-page");
    finishEl.setAttribute("class", "show");

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;   
};

function highScore() {
    var initials = initialsEl.value.trim();

    if (initials !== "") {
        var finalScore = JSON.parse(window.localStorage.getItem("finalScore")) || [];

        var savedScore = {
            intials: initials,
            score: time,
        };

        finalScore.push(savedScore);
        window.localStorage.setItem("finalScore", JSON.stringify(finalScore));

        window.location.href = "highscores.html";
    }
};

submitEl.addEventListener("click", highScore);
startEl.addEventListener("click", quizStart);

