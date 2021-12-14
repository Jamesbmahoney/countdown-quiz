var timerEl = document.querySelector("#count-clock");
var startEl = document.querySelector("#start-btn");
var openingEl = document.querySelector("#start-page");
var quizEl = document.querySelector("#quiz-questions");
var answersEL = document.querySelector("#answer-section");
var feedbackEL = document.querySelector("#feedback");

var countdownTimer;
var time =  60;
var currentQuestionIndex = 0;

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
};

function callQuestions() {
    var quizQuestions = questions[currentQuestionIndex];

    var actualQuestion = document.getElementById("question-section");
    actualQuestion.textContent = quizQuestions.question;    

answersEL.innerHTML= "";    

quizQuestions.choice.forEach(function(choice, i){
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;
    choiceBtn.onclick = questionClick;

    answersEL.appendChild(choiceBtn);
});

    //var currentChoicesEl = document.getElementById("answer-section");
    //currentChoicesEl.textContent = quizQuestions.choice;       
}

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;
        feedbackEL.textContent = "Wrong!";      
    } else {
        feedbackEL.textContent = "Correct!";
    }

    feedbackEL.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEL.setAttribute("class", "feedback hide");
    }, 1000)

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        callQuestions();
    }
};




  


startEl.addEventListener("click", quizStart);

