// ===== Config =====
const TIMER_DURATIONS = { easy: 30, medium: 20, hard: 12 };

const COMBO_LEVELS = [
  { min: 5, mult: 3,   label: 'x3'   },
  { min: 4, mult: 2.5, label: 'x2.5' },
  { min: 3, mult: 2,   label: 'x2'   },
  { min: 2, mult: 1.5, label: 'x1.5' },
  { min: 0, mult: 1,   label: 'x1'   },
];

// ===== État global =====
let state        = {};
let timerInterval = null;

// ===== Utilitaires =====
const shuffle  = (arr) => [...arr].sort(() => Math.random() - 0.5);
const getCombo = (streak) => COMBO_LEVELS.find(c => streak >= c.min);

const showScreen = (id) => {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
};

// ===== Démarrer le quiz =====
const startQuiz = (difficulty) => {
  clearInterval(timerInterval);
  state = {
    difficulty,
    questions:  shuffle(QUESTIONS.filter(q => q.difficulty === difficulty)).slice(0, 10),
    current:    0,
    score:      0,
    streak:     0,
    bestStreak: 0,
    timeLeft:   0,
    answers:    [],
  };
  showScreen('screen-quiz');
  showQuestion();
};

// ===== Afficher une question =====
const showQuestion = () => {
  const q    = state.questions[state.current];
  const maxT = TIMER_DURATIONS[state.difficulty];

  document.getElementById('q-num').textContent    = state.current + 1;
  document.getElementById('q-score').textContent  = state.score;
  document.getElementById('clue-text').textContent = q.clue;

  renderCombo();
  renderOptions(q);
  startTimer(maxT);
};

const renderOptions = (q) => {
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  shuffle(q.options).forEach(opt => {
    const btn       = document.createElement('button');
    btn.className   = 'btn-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => onAnswer(opt));
    grid.appendChild(btn);
  });
};

// ===== Timer =====
const startTimer = (duration) => {
  state.timeLeft = duration;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    state.timeLeft = Math.max(0, state.timeLeft - 0.1);
    updateTimerUI(duration);
    if (state.timeLeft <= 0) {
      clearInterval(timerInterval);
      onAnswer(null);
    }
  }, 100);
};

const updateTimerUI = (duration) => {
  const pct    = state.timeLeft / duration * 100;
  const danger = state.timeLeft <= duration * 0.3;
  const bar    = document.getElementById('timer-bar');
  const txt    = document.getElementById('timer-text');

  bar.style.width = pct + '%';
  bar.classList.toggle('danger', danger);
  txt.textContent = Math.ceil(state.timeLeft);
  txt.classList.toggle('danger', danger);
};

// ===== Combo =====
const renderCombo = () => {
  const info  = getCombo(state.streak);
  const badge = document.getElementById('combo-badge');
  document.getElementById('combo-value').textContent = info.label;
  badge.classList.toggle('lit', state.streak >= 2);
};

// ===== Répondre =====
const onAnswer = (chosen) => {
  clearInterval(timerInterval);
  const q       = state.questions[state.current];
  const correct = chosen === q.answer;
  const maxT    = TIMER_DURATIONS[state.difficulty];

  // Feedback visuel sur les boutons
  document.querySelectorAll('.btn-option').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.answer)                btn.classList.add('correct');
    else if (btn.textContent === chosen && !correct) btn.classList.add('wrong');
  });

  if (correct) {
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    const timeBonus  = Math.round((state.timeLeft / maxT) * 50);
    const mult       = getCombo(state.streak).mult;
    state.score     += Math.round((100 + timeBonus) * mult);
    document.getElementById('q-score').textContent = state.score;
  } else {
    state.streak = 0;
  }

  renderCombo();
  state.answers.push({ correct, chosen: chosen ?? '⏱ temps écoulé', answer: q.answer });

  setTimeout(() => {
    state.current++;
    if (state.current < state.questions.length) showQuestion();
    else showResults();
  }, 1400);
};

// ===== Résultats =====
const showResults = () => {
  showScreen('screen-results');

  // Compteur animé
  const target  = state.score;
  let   current = 0;
  const step    = Math.max(1, Math.ceil(target / 50));
  const el      = document.getElementById('final-score');
  el.textContent = 0;
  const ticker = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(ticker);
  }, 22);

  // Stats
  const correctCount = state.answers.filter(a => a.correct).length;
  document.getElementById('stat-correct').textContent = correctCount;
  document.getElementById('stat-combo').textContent   = getCombo(state.bestStreak).label;

  // Liste des réponses
  const list = document.getElementById('results-list');
  list.innerHTML = '';
  state.answers.forEach((a, i) => {
    const item       = document.createElement('div');
    item.className   = 'result-item ' + (a.correct ? 'ok' : 'bad');
    item.innerHTML   = `
      <span class="result-icon">${a.correct ? '✓' : '✗'}</span>
      <div>
        <div class="result-game">${state.questions[i].answer}</div>
        ${!a.correct
          ? `<div class="result-answer">Répondu : ${a.chosen} — Bonne réponse : <em>${a.answer}</em></div>`
          : ''}
      </div>`;
    list.appendChild(item);
  });
};

// ===== Événements =====
document.getElementById('btn-play')
  .addEventListener('click', () => showScreen('screen-difficulty'));

document.getElementById('btn-back-diff')
  .addEventListener('click', () => showScreen('screen-title'));

document.querySelectorAll('.btn-diff')
  .forEach(btn => btn.addEventListener('click', () => startQuiz(btn.dataset.diff)));

document.getElementById('btn-retry')
  .addEventListener('click', () => startQuiz(state.difficulty));

document.getElementById('btn-menu').addEventListener('click', () => {
  clearInterval(timerInterval);
  showScreen('screen-title');
});
