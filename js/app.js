// 主应用逻辑
const App = {
  // 学习进度存储 key
  STORAGE_KEY: 'english_learn_progress',

  // 当前状态
  state: {
    currentPage: 'home',
    currentGrade: null,     // 当前选中的年级
    currentUnit: null,      // 当前单元索引
    currentWordIdx: 0,      // 当前单词索引
    learnedWords: {},       // { word: { known: true/false, lastReview: timestamp, count: n } }
    quizMode: null,         // 'choice' | 'spell' | 'listen'
    quizQuestions: [],
    quizIdx: 0,
    quizScore: 0,
  },

  // 初始化
  init() {
    this.loadProgress();
    this.bindEvents();
    this.showPage('home');
    this.renderHome();
  },

  // 加载进度
  loadProgress() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      this.state.learnedWords = JSON.parse(saved);
    }
  },

  // 保存进度
  saveProgress() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.learnedWords));
  },

  // 重置学习进度
  resetProgress() {
    if (confirm('确定要清空所有学习进度，重新开始吗？')) {
      localStorage.removeItem(this.STORAGE_KEY);
      this.state.learnedWords = {};
      this.renderHome();
      alert('✅ 学习进度已重置，从头开始吧！');
    }
  },

  // 绑定事件
  bindEvents() {
    // 导航按钮
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        this.showPage(page);
        if (page === 'home') this.renderHome();
        if (page === 'words') this.renderWordUnits();
        if (page === 'sentences') this.renderSentences();
        if (page === 'quiz') this.renderQuizHome();
      });
    });
  },

  // 切换页面
  showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.nav-btn[data-page="${pageId}"]`)?.classList.add('active');
    this.state.currentPage = pageId;
  },

  // ========== 首页 ==========
  renderHome() {
    const totalWords = WORD_DATA.reduce((sum, u) => sum + u.words.length, 0);
    const learnedCount = Object.keys(this.state.learnedWords).length;
    const knownCount = Object.values(this.state.learnedWords).filter(w => w.known).length;

    // 连续学习天数（简单实现：看今天有没有记录）
    const today = new Date().toDateString();
    const lastDay = this.state.learnedWords._lastDay;
    const streak = this.state.learnedWords._streak || 0;
    let newStreak = streak;
    if (lastDay !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      newStreak = (lastDay === yesterday) ? streak + 1 : 1;
      this.state.learnedWords._lastDay = today;
      this.state.learnedWords._streak = newStreak;
      this.saveProgress();
    }

    document.getElementById('home-stats').innerHTML = `
      <div class="stat-item">
        <div class="stat-num">${totalWords}</div>
        <div class="stat-label">总单词</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">${knownCount}</div>
        <div class="stat-label">已掌握</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">${newStreak}🔥</div>
        <div class="stat-label">连续学习</div>
      </div>
    `;
  },

  // ========== 单词学习 ==========
  // 第1层：显示年级列表
  renderWordUnits() {
    this.state.currentGrade = null;
    const container = document.getElementById('word-units');

    // 获取所有不重复的年级
    const grades = [...new Set(WORD_DATA.map(u => u.grade))];

    container.innerHTML = grades.map(grade => {
      const units = WORD_DATA.filter(u => u.grade === grade);
      const totalWords = units.reduce((s, u) => s + u.words.length, 0);
      const learned = units.reduce((s, u) => 
        s + u.words.filter(w => this.state.learnedWords[w.en]?.known).length, 0);
      return `
        <div class="unit-item" onclick="App.renderGradeUnits('${grade}')">
          <div>
            <div class="unit-name">${grade}</div>
            <div class="unit-progress">${units.length}个单元 · ${learned}/${totalWords} 已掌握</div>
          </div>
          <div style="color:#667eea;font-size:24px;">▶</div>
        </div>
      `;
    }).join('');

    this.showPage('words');
    document.getElementById('page-word-list').classList.remove('hidden');
    document.getElementById('page-word-learn').classList.add('hidden');
  },

  // 第2层：显示某年级的单元列表
  renderGradeUnits(grade) {
    this.state.currentGrade = grade;
    const container = document.getElementById('word-units');
    const units = WORD_DATA.map((u, idx) => ({...u, originalIdx: idx}))
                           .filter(u => u.grade === grade);

    container.innerHTML = `
      <div class="back-link" onclick="App.renderWordUnits()">← 返回年级列表</div>
      <h3 style="color:white;margin-bottom:12px;">${grade}</h3>
    ` + units.map(u => {
      const total = u.words.length;
      const learned = u.words.filter(w => this.state.learnedWords[w.en]?.known).length;
      return `
        <div class="unit-item" onclick="App.startLearn(${u.originalIdx})">
          <div>
            <div class="unit-name">${u.unit}</div>
            <div class="unit-progress">${learned}/${total} 已掌握</div>
          </div>
          <div style="color:#667eea;font-size:24px;">▶</div>
        </div>
      `;
    }).join('');
  },

  startLearn(unitIdx) {
    this.state.currentUnit = unitIdx;
    this.state.currentWordIdx = 0;
    document.getElementById('page-word-list').classList.add('hidden');
    document.getElementById('page-word-learn').classList.remove('hidden');
    this.renderWordCard();
  },

  // 从学习页返回上一级
  goBackFromLearn() {
    document.getElementById('page-word-learn').classList.add('hidden');
    document.getElementById('page-word-list').classList.remove('hidden');
    if (this.state.currentGrade) {
      this.renderGradeUnits(this.state.currentGrade);
    } else {
      this.renderWordUnits();
    }
  },

  renderWordCard() {
    const unit = WORD_DATA[this.state.currentUnit];
    const word = unit.words[this.state.currentWordIdx];
    const total = unit.words.length;
    const idx = this.state.currentWordIdx;

    document.getElementById('word-progress-text').textContent = `${idx + 1} / ${total}`;
    document.getElementById('word-progress-fill').style.width = `${(idx / total) * 100}%`;

    document.getElementById('word-card-inner').innerHTML = `
      <div class="word-emoji">${word.emoji}</div>
      <div class="word-en">${word.en}</div>
      <div class="word-phonetic">${word.phonetic}</div>
      <div class="word-zh">${word.zh}</div>
      <button class="speak-btn" onclick="Speech.speak('${word.en}')">🔊</button>
    `;

    // 自动朗读
    Speech.speak(word.en);
  },

  markWord(known) {
    const unit = WORD_DATA[this.state.currentUnit];
    const word = unit.words[this.state.currentWordIdx];

    this.state.learnedWords[word.en] = {
      known: known,
      lastReview: Date.now(),
      count: (this.state.learnedWords[word.en]?.count || 0) + 1
    };
    this.saveProgress();

    this.state.currentWordIdx++;
    if (this.state.currentWordIdx >= unit.words.length) {
      // 学完了，返回该年级单元列表
      alert('🎉 这个单元学完啦！');
      if (this.state.currentGrade) {
        this.renderGradeUnits(this.state.currentGrade);
      } else {
        this.renderWordUnits();
      }
    } else {
      this.renderWordCard();
    }
  },

  // ========== 例句学习 ==========
  // 第1层：显示年级列表
  renderSentences() {
    const container = document.getElementById('sentence-list');
    const grades = [...new Set(SENTENCE_DATA.map(u => u.grade))];

    container.innerHTML = grades.map(grade => {
      const units = SENTENCE_DATA.filter(u => u.grade === grade);
      const totalSentences = units.reduce((s, u) => s + u.sentences.length, 0);
      return `
        <div class="unit-item" onclick="App.renderGradeSentences('${grade}')">
          <div>
            <div class="unit-name">${grade}</div>
            <div class="unit-progress">${units.length}个单元 · ${totalSentences}个例句</div>
          </div>
          <div style="color:#667eea;font-size:24px;">▶</div>
        </div>
      `;
    }).join('');
  },

  // 第2层：显示某年级的例句
  renderGradeSentences(grade) {
    const container = document.getElementById('sentence-list');
    const units = SENTENCE_DATA.filter(u => u.grade === grade);

    container.innerHTML = `
      <div class="back-link" onclick="App.renderSentences()">← 返回年级列表</div>
      <h3 style="color:white;margin-bottom:16px;">${grade} 例句</h3>
    ` + units.map(unit => `
      <h3 style="margin:16px 0 8px;color:#667eea;">${unit.unit}</h3>
      ${unit.sentences.map(s => `
        <div class="sentence-card card">
          <div class="sentence-en">${s.en}</div>
          <div class="sentence-zh">${s.zh}</div>
          <button class="speak-btn" style="width:40px;height:40px;font-size:16px;margin-top:8px;" 
                  onclick="Speech.speak('${s.en.replace(/'/g, "\\'")}', 0.7)">🔊</button>
        </div>
      `).join('')}
    `).join('');
  },

  // ========== 练习模块 ==========
  renderQuizHome() {
    document.getElementById('page-quiz-home').classList.remove('hidden');
    document.getElementById('page-quiz-play').classList.add('hidden');
    document.getElementById('page-quiz-result').classList.add('hidden');
  },

  startQuiz(mode) {
    this.state.quizMode = mode;
    this.state.quizIdx = 0;
    this.state.quizScore = 0;

    // 从所有单词中随机抽 10 题
    const allWords = WORD_DATA.flatMap(u => u.words);
    this.state.quizQuestions = this.shuffle([...allWords]).slice(0, 10);

    document.getElementById('page-quiz-home').classList.add('hidden');
    document.getElementById('page-quiz-play').classList.remove('hidden');
    this.renderQuizQuestion();
  },

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  renderQuizQuestion() {
    const q = this.state.quizQuestions[this.state.quizIdx];
    const total = this.state.quizQuestions.length;
    document.getElementById('quiz-progress-text').textContent = `第 ${this.state.quizIdx + 1} 题 / 共 ${total} 题`;
    document.getElementById('quiz-progress-fill').style.width = `${(this.state.quizIdx / total) * 100}%`;

    const container = document.getElementById('quiz-area');

    if (this.state.quizMode === 'choice') {
      // 选择题：看 emoji 选英文
      const allWords = WORD_DATA.flatMap(u => u.words);
      const options = this.shuffle([q, ...this.shuffle(allWords.filter(w => w.en !== q.en)).slice(0, 3)]);
      container.innerHTML = `
        <div class="quiz-emoji">${q.emoji}</div>
        <div class="quiz-prompt">这个图片对应的单词是？</div>
        <div class="quiz-options">
          ${options.map(o => `
            <div class="quiz-option" onclick="App.answerQuiz('${o.en}', '${q.en}', this)">${o.en}</div>
          `).join('')}
        </div>
      `;
    } else if (this.state.quizMode === 'listen') {
      // 听音选义：听发音选中文
      setTimeout(() => Speech.speak(q.en), 300);
      const allWords = WORD_DATA.flatMap(u => u.words);
      const options = this.shuffle([q, ...this.shuffle(allWords.filter(w => w.en !== q.en)).slice(0, 3)]);
      container.innerHTML = `
        <div class="quiz-emoji">🔊</div>
        <div class="quiz-prompt">你听到的单词是什么意思？</div>
        <button class="speak-btn" onclick="Speech.speak('${q.en}')">再听一遍</button>
        <div class="quiz-options">
          ${options.map(o => `
            <div class="quiz-option" onclick="App.answerQuiz('${o.zh}', '${q.zh}', this)">${o.zh}</div>
          `).join('')}
        </div>
      `;
    } else if (this.state.quizMode === 'spell') {
      // 拼写题：看中文拼英文
      container.innerHTML = `
        <div class="quiz-emoji">${q.emoji}</div>
        <div class="quiz-prompt">中文意思：<strong style="color:#667eea;">${q.zh}</strong></div>
        <button class="speak-btn" onclick="Speech.speak('${q.en}')">🔊 听发音</button>
        <input type="text" class="spell-input" id="spell-input" placeholder="在这里拼出单词" 
               autocomplete="off" autocapitalize="off">
        <button class="big-btn btn-blue" onclick="App.checkSpell('${q.en}')">提交答案</button>
      `;
      document.getElementById('spell-input').focus();
      document.getElementById('spell-input').addEventListener('keydown', e => {
        if (e.key === 'Enter') this.checkSpell(q.en);
      });
    }
  },

  answerQuiz(selected, correct, el) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(o => o.style.pointerEvents = 'none');

    if (selected === correct) {
      el.classList.add('correct');
      this.state.quizScore++;
    } else {
      el.classList.add('wrong');
      // 标出正确答案
      options.forEach(o => {
        if (o.textContent === correct) o.classList.add('correct');
      });
    }

    setTimeout(() => this.nextQuiz(), 1200);
  },

  checkSpell(correct) {
    const input = document.getElementById('spell-input');
    const val = input.value.trim().toLowerCase();
    if (!val) return;

    if (val === correct.toLowerCase()) {
      input.style.borderColor = '#48bb78';
      input.style.background = '#c6f6d5';
      this.state.quizScore++;
    } else {
      input.style.borderColor = '#f56565';
      input.style.background = '#fed7d7';
      alert(`正确答案是：${correct}`);
    }

    setTimeout(() => this.nextQuiz(), 1500);
  },

  nextQuiz() {
    this.state.quizIdx++;
    if (this.state.quizIdx >= this.state.quizQuestions.length) {
      this.showQuizResult();
    } else {
      this.renderQuizQuestion();
    }
  },

  showQuizResult() {
    document.getElementById('page-quiz-play').classList.add('hidden');
    document.getElementById('page-quiz-result').classList.remove('hidden');

    const score = this.state.quizScore;
    const total = this.state.quizQuestions.length;
    const pct = Math.round(score / total * 100);

    let emoji = '😐';
    let title = '继续加油哦！';
    if (pct >= 90) { emoji = '🏆'; title = '太棒了！'; }
    else if (pct >= 70) { emoji = '😊'; title = '做得不错！'; }
    else if (pct >= 50) { emoji = '💪'; title = '还需要努力！'; }

    document.getElementById('result-area').innerHTML = `
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">${title}</div>
      <div class="result-score">${score} / ${total}</div>
      <p style="color:#888;margin-bottom:24px;">正确率 ${pct}%</p>
    `;
  },
};

// 启动
document.addEventListener('DOMContentLoaded', () => App.init());
