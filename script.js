const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startBtn = document.getElementById("startBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const soundBtn = document.getElementById("soundBtn");
const questionCount = document.getElementById("questionCount");
const progressFill = document.getElementById("progressFill");
const scoreText = document.getElementById("scoreText");
const finalScore = document.getElementById("finalScore");
const levelText = document.getElementById("levelText");
const questionText = document.getElementById("questionText");
const modelObject = document.getElementById("modelObject");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");
const blankWord = document.getElementById("blankWord");

let current = 0;
let score = 0;
let soundOn = true;
let voices = [];
let isSpeaking = false;

function loadVoices() {
  voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
}

if (window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function getMalayVoice() {
  if (!voices.length) loadVoices();

  // Best: real Malay voice. Fallbacks are chosen only if the browser has no Malay voice.
  return (
    voices.find(v => v.lang && v.lang.toLowerCase() === "ms-my") ||
    voices.find(v => v.lang && v.lang.toLowerCase().startsWith("ms")) ||
    voices.find(v => v.name && v.name.toLowerCase().includes("malay")) ||
    voices.find(v => v.lang && v.lang.toLowerCase() === "id-id") ||
    voices.find(v => v.lang && v.lang.toLowerCase().startsWith("id")) ||
    voices.find(v => v.lang && v.lang.toLowerCase().startsWith("en"))
  );
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function speak(text, options = {}) {
  return new Promise(resolve => {
    if (!soundOn || !window.speechSynthesis || !text) {
      resolve();
      return;
    }

    window.speechSynthesis.cancel();
    isSpeaking = true;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ms-MY";
    utterance.voice = getMalayVoice();
    utterance.rate = options.rate || 0.72;   // slower for preschool children
    utterance.pitch = options.pitch || 1.05;
    utterance.volume = 1;

    utterance.onend = () => {
      isSpeaking = false;
      resolve();
    };

    utterance.onerror = () => {
      isSpeaking = false;
      resolve();
    };

    window.speechSynthesis.speak(utterance);
  });
}

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function setOptionsDisabled(disabled) {
  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.disabled = disabled;
  });
}

async function startQuiz() {
  current = 0;
  score = 0;
  scoreText.textContent = score;
  showScreen(quizScreen);
  await loadQuestion();
}

function getQuestionSpeech(q) {
  if (q.type === "startSound") {
    return `Gambar ini ialah ${q.object}. Apakah bunyi awal bagi perkataan ${q.object}? Pilih jawapan yang betul.`;
  }

  if (q.type === "chooseImage") {
    return `${q.question} Pilih jawapan yang betul.`;
  }

  if (q.type === "blank") {
    return `${q.question} Perkataan ini ialah ${q.fullWord}. Huruf vokal manakah yang sesuai?`;
  }

  return q.speech || q.question;
}

async function loadQuestion() {
  const q = QUESTIONS[current];
  questionCount.textContent = `${current + 1} / ${QUESTIONS.length}`;
  progressFill.style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  levelText.textContent = q.level;
  questionText.textContent = q.question;
  modelObject.textContent = q.emoji;
  feedback.textContent = "";
  feedback.className = "feedback";
  optionsBox.innerHTML = "";

  if (q.blank) {
    blankWord.textContent = q.blank;
    blankWord.classList.remove("hidden");
  } else {
    blankWord.classList.add("hidden");
  }

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.onclick = () => checkAnswer(button, option);
    optionsBox.appendChild(button);
  });

  setOptionsDisabled(true);
  await wait(350);
  await speak(getQuestionSpeech(q));
  await wait(200);
  setOptionsDisabled(false);
}

async function checkAnswer(button, selected) {
  if (isSpeaking) return;

  const q = QUESTIONS[current];
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === q.answer) {
    score++;
    scoreText.textContent = score;
    button.classList.add("correct");
    feedback.textContent = "Tahniah! Jawapan betul ⭐";
    feedback.classList.add("good");
    await speak(`Tahniah! Jawapan betul. ${q.explain || ""}`, { rate: 0.72 });
  } else {
    button.classList.add("wrong");
    buttons.forEach(btn => {
      if (btn.textContent === q.answer) btn.classList.add("correct");
    });
    feedback.textContent = `Cuba lagi. Jawapan yang betul ialah ${q.answer}.`;
    feedback.classList.add("bad");
    await speak(`Cuba lagi. Jawapan yang betul ialah ${q.answer}. ${q.explain || ""}`, { rate: 0.72 });
  }

  await wait(900); // wait after voice completes, so it will not cut off
  current++;
  if (current < QUESTIONS.length) await loadQuestion();
  else await endQuiz();
}

async function endQuiz() {
  finalScore.textContent = score;
  showScreen(resultScreen);
  await speak(`Tahniah. Skor kamu ialah ${score} daripada ${QUESTIONS.length}. Kamu hebat!`, { rate: 0.72 });
}

startBtn.addEventListener("click", startQuiz);
playAgainBtn.addEventListener("click", startQuiz);
soundBtn.addEventListener("click", () => {
  soundOn = !soundOn;
  soundBtn.textContent = soundOn ? "🔊 Suara" : "🔇 Senyap";
  if (!soundOn) window.speechSynthesis?.cancel();
});
