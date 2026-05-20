const questions = [
  { image: "anaume1.png", answerImage: "anaume_anser1.png" },
  { image: "anaume2.png", answerImage: "anaume_anser2.png" },
  { image: "anaume3.png", answerImage: "anaume_anser3.png" },
  { image: "anaume4.png", answerImage: "anaume_anser4.png" },
  { image: "anaume5.png", answerImage: "anaume_anser5.png" },
  { image: "anaume6.png", answerImage: "anaume_anser6.png" },
  { image: "anaume7.png", answerImage: "anaume_anser7.png" },
  { image: "anaume8.png", answerImage: "anaume_anser8.png" }
];

const startCard = document.getElementById("startCard");
const gameCard = document.getElementById("gameCard");
const finishCard = document.getElementById("finishCard");
const progressText = document.getElementById("progressText");
const quizImage = document.getElementById("quizImage");
const startButton = document.getElementById("startButton");
const answerButton = document.getElementById("answerButton");
const nextButton = document.getElementById("nextButton");
const replayButton = document.getElementById("replayButton");

let currentIndex = 0;

function renderQuestion() {
  const question = questions[currentIndex];

  progressText.textContent = `${currentIndex + 1} / ${questions.length}`;
  quizImage.src = question.image;
  quizImage.alt = `しまね穴埋めゲーム 第${currentIndex + 1}問`;
  quizImage.classList.remove("answer-shown");

  answerButton.hidden = false;
  nextButton.hidden = true;

  startCard.hidden = true;
  gameCard.hidden = false;
  finishCard.hidden = true;
}

function showStartScreen() {
  startCard.hidden = false;
  gameCard.hidden = true;
  finishCard.hidden = true;
}

function startGame() {
  currentIndex = 0;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showAnswer() {
  const question = questions[currentIndex];

  quizImage.src = question.answerImage;
  quizImage.alt = `しまね穴埋めゲーム 第${currentIndex + 1}問の答え`;
  quizImage.classList.remove("answer-shown");
  void quizImage.offsetWidth;
  quizImage.classList.add("answer-shown");

  answerButton.hidden = true;
  nextButton.hidden = false;
}

function goToNextQuestion() {
  currentIndex += 1;

  if (currentIndex >= questions.length) {
    showFinishScreen();
    return;
  }

  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFinishScreen() {
  startCard.hidden = true;
  gameCard.hidden = true;
  finishCard.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartGame() {
  currentIndex = 0;
  showStartScreen();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startButton.addEventListener("click", startGame);
answerButton.addEventListener("click", showAnswer);
nextButton.addEventListener("click", goToNextQuestion);
replayButton.addEventListener("click", restartGame);

showStartScreen();
