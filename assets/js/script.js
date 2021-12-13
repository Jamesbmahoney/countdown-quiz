var timerEl = document.querySelector("#count-clock");
var startEl = document.querySelector("#start-btn");
var openingEl = document.querySelector("#start-page");
var quizEl = document.querySelector("#quiz-questions");
var questsEl = document.querySelector("#quests");
var answersEl = document.querySelector("#answers");

var countdownTimer;
var time =  60;

function quizStart() {
    openingEl.setAttribute("class", "hide");

    quizEl.setAttribute("class", "show");

    countdownTimer = setInterval(countdown, 1000);

    timerEl.textContent = time;

};

function countdown() {
    time--;
    timerEl.textContent = time;
};


startEl.addEventListener("click", quizStart);

