var timerEl = document.querySelector("#count-clock");
var startEl = document.querySelector("#start-btn");
var openingEl = document.querySelector("#start-page");
var quizEl = document.querySelector("#quiz-questions");
var questsEl = document.querySelector("#quests");
var answersEl = document.querySelector("#answers");


function quizStart() {
    openingEl.setAttribute("class", "hide");

    quizEl.setAttribute("class", "show");
};

function toQuestions() {
    var quizQuestions = questions[currentQuestionIndex]

    var qTitleEl = document.getElementById("question-section");
    qTitleEl.textContent =currentQuestion.title;

    answersEl.innerHTML = "";

};

startEl.addEventListener("click", quizStart);

