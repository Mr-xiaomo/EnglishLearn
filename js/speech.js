// 发音功能：基于 Web Speech API
const Speech = {
  synth: window.speechSynthesis,
  voice: null,

  // 初始化：加载英文女声
  init() {
    const loadVoices = () => {
      const voices = this.synth.getVoices();
      // 优先选择英语女声
      this.voice = voices.find(v => 
        v.lang.startsWith('en') && /female|samantha|victoria|karen|moira|tessa/i.test(v.name)
      ) || voices.find(v => v.lang.startsWith('en'));
    };
    loadVoices();
    this.synth.onvoiceschanged = loadVoices;
  },

  // 朗读单词或句子
  speak(text, rate = 0.8) {
    if (!this.synth) return;
    this.synth.cancel(); // 停止之前的朗读
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    utter.rate = rate;
    utter.pitch = 1.1; // 稍高一点，适合儿童
    if (this.voice) utter.voice = this.voice;
    this.synth.speak(utter);
  },

  // 慢读（拼写练习时用）
  speakSlow(text) {
    this.speak(text, 0.5);
  }
};

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', () => Speech.init());
