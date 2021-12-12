var timeEl = document.querySelector("#time")

function countdown() {
    time--;
    timeEl.textContent = time;

    if (time <=0) {
        endQuiz();
    }
}