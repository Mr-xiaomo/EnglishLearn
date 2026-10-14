// ============================================================
// 译林版（江苏专用）小学英语单词表 - 按年级分类
// 三年级起点，共 6 册 48 单元
// ============================================================

const WORD_DATA = [
  // ========== 三年级上册 ==========
  { grade: "三年级上", unit: "Unit 1 问候", words: [
    { en: "hello", zh: "你好", phonetic: "/həˈləʊ/", emoji: "👋" },
    { en: "hi", zh: "嗨", phonetic: "/haɪ/", emoji: "👋" },
    { en: "I", zh: "我", phonetic: "/aɪ/", emoji: "🙋" },
    { en: "am", zh: "是", phonetic: "/æm/", emoji: "✅" },
    { en: "cat", zh: "猫", phonetic: "/kæt/", emoji: "🐱" },
    { en: "Miss", zh: "小姐", phonetic: "/mɪs/", emoji: "👩‍🏫" },
    { en: "class", zh: "同学们", phonetic: "/klɑːs/", emoji: "👧👦" },
    { en: "goodbye", zh: "再见", phonetic: "/ˌɡʊdˈbaɪ/", emoji: "👋" }
  ]},
  { grade: "三年级上", unit: "Unit 2 你是谁", words: [
    { en: "you", zh: "你", phonetic: "/juː/", emoji: "👉" },
    { en: "are", zh: "是", phonetic: "/ɑː/", emoji: "✅" },
    { en: "yes", zh: "是", phonetic: "/jes/", emoji: "👍" },
    { en: "no", zh: "不", phonetic: "/nəʊ/", emoji: "👎" },
    { en: "not", zh: "不", phonetic: "/nɒt/", emoji: "❌" },
    { en: "name", zh: "名字", phonetic: "/neɪm/", emoji: "📛" },
    { en: "my", zh: "我的", phonetic: "/maɪ/", emoji: "👤" },
    { en: "what", zh: "什么", phonetic: "/wɒt/", emoji: "❓" }
  ]},
  { grade: "三年级上", unit: "Unit 3 我的朋友", words: [
    { en: "friend", zh: "朋友", phonetic: "/frend/", emoji: "👫" },
    { en: "she", zh: "她", phonetic: "/ʃiː/", emoji: "👩" },
    { en: "he", zh: "他", phonetic: "/hiː/", emoji: "👨" },
    { en: "too", zh: "也", phonetic: "/tuː/", emoji: "➕" },
    { en: "this", zh: "这", phonetic: "/ðɪs/", emoji: "👉" },
    { en: "sister", zh: "姐妹", phonetic: "/ˈsɪstə/", emoji: "👧" },
    { en: "brother", zh: "兄弟", phonetic: "/ˈbrʌðə/", emoji: "👦" },
    { en: "is", zh: "是", phonetic: "/ɪz/", emoji: "✅" }
  ]},
  { grade: "三年级上", unit: "Unit 4 我的家庭", words: [
    { en: "family", zh: "家庭", phonetic: "/ˈfæməli/", emoji: "👨‍👩‍👧‍👦" },
    { en: "father", zh: "爸爸", phonetic: "/ˈfɑːðə/", emoji: "👨" },
    { en: "mother", zh: "妈妈", phonetic: "/ˈmʌðə/", emoji: "👩" },
    { en: "me", zh: "我", phonetic: "/miː/", emoji: "🙋" },
    { en: "grandpa", zh: "爷爷", phonetic: "/ˈɡrænpɑː/", emoji: "👴" },
    { en: "grandma", zh: "奶奶", phonetic: "/ˈɡrænmɑː/", emoji: "👵" },
    { en: "evening", zh: "晚上", phonetic: "/ˈiːvnɪŋ/", emoji: "🌙" },
    { en: "brother", zh: "兄弟", phonetic: "/ˈbrʌðə/", emoji: "👦" }
  ]},
  { grade: "三年级上", unit: "Unit 5 衣服颜色", words: [
    { en: "T-shirt", zh: "T恤", phonetic: "/ˈtiːʃɜːt/", emoji: "👕" },
    { en: "skirt", zh: "裙子", phonetic: "/skɜːt/", emoji: "👗" },
    { en: "cap", zh: "帽子", phonetic: "/kæp/", emoji: "🧢" },
    { en: "jacket", zh: "夹克", phonetic: "/ˈdʒækɪt/", emoji: "🧥" },
    { en: "red", zh: "红色", phonetic: "/red/", emoji: "🔴" },
    { en: "new", zh: "新的", phonetic: "/njuː/", emoji: "✨" },
    { en: "nice", zh: "好看的", phonetic: "/naɪs/", emoji: "😊" },
    { en: "it", zh: "它", phonetic: "/ɪt/", emoji: "👉" }
  ]},
  { grade: "三年级上", unit: "Unit 6 颜色", words: [
    { en: "colour", zh: "颜色", phonetic: "/ˈkʌlə/", emoji: "🎨" },
    { en: "green", zh: "绿色", phonetic: "/ɡriːn/", emoji: "🟢" },
    { en: "yellow", zh: "黄色", phonetic: "/ˈjeləʊ/", emoji: "🟡" },
    { en: "blue", zh: "蓝色", phonetic: "/bluː/", emoji: "🔵" },
    { en: "black", zh: "黑色", phonetic: "/blæk/", emoji: "⚫" },
    { en: "white", zh: "白色", phonetic: "/waɪt/", emoji: "⚪" },
    { en: "orange", zh: "橙色", phonetic: "/ˈɒrɪndʒ/", emoji: "🟠" },
    { en: "brown", zh: "棕色", phonetic: "/braʊn/", emoji: "🟤" },
    { en: "and", zh: "和", phonetic: "/ænd/", emoji: "➕" },
    { en: "egg", zh: "鸡蛋", phonetic: "/eɡ/", emoji: "🥚" }
  ]},
  { grade: "三年级上", unit: "Unit 7 食物", words: [
    { en: "cake", zh: "蛋糕", phonetic: "/keɪk/", emoji: "🍰" },
    { en: "pie", zh: "馅饼", phonetic: "/paɪ/", emoji: "🥧" },
    { en: "ice cream", zh: "冰淇淋", phonetic: "/aɪs kriːm/", emoji: "🍦" },
    { en: "sweet", zh: "糖果", phonetic: "/swiːt/", emoji: "🍬" },
    { en: "hot dog", zh: "热狗", phonetic: "/hɒt dɒɡ/", emoji: "🌭" },
    { en: "look", zh: "看", phonetic: "/lʊk/", emoji: "👀" },
    { en: "what", zh: "什么", phonetic: "/wɒt/", emoji: "❓" },
    { en: "meet", zh: "遇见", phonetic: "/miːt/", emoji: "🤝" }
  ]},
  { grade: "三年级上", unit: "Unit 8 玩具", words: [
    { en: "doll", zh: "玩具娃娃", phonetic: "/dɒl/", emoji: "🪆" },
    { en: "ball", zh: "球", phonetic: "/bɔːl/", emoji: "⚽" },
    { en: "robot", zh: "机器人", phonetic: "/ˈrəʊbɒt/", emoji: "🤖" },
    { en: "car", zh: "小汽车", phonetic: "/kɑː/", emoji: "🚗" },
    { en: "toy", zh: "玩具", phonetic: "/tɔɪ/", emoji: "🧸" },
    { en: "that", zh: "那个", phonetic: "/ðæt/", emoji: "👉" },
    { en: "uncle", zh: "叔叔", phonetic: "/ˈʌŋkl/", emoji: "👨" },
    { en: "birthday", zh: "生日", phonetic: "/ˈbɜːθdeɪ/", emoji: "🎂" }
  ]},

  // ========== 三年级下册 ==========
  { grade: "三年级下", unit: "Unit 1 课堂", words: [
    { en: "open", zh: "打开", phonetic: "/ˈəʊpən/", emoji: "📖" },
    { en: "close", zh: "关上", phonetic: "/kləʊz/", emoji: "🚪" },
    { en: "door", zh: "门", phonetic: "/dɔː/", emoji: "🚪" },
    { en: "window", zh: "窗户", phonetic: "/ˈwɪndəʊ/", emoji: "🪟" },
    { en: "book", zh: "书", phonetic: "/bʊk/", emoji: "📚" },
    { en: "rubber", zh: "橡皮", phonetic: "/ˈrʌbə/", emoji: "🧼" },
    { en: "listen", zh: "听", phonetic: "/ˈlɪsn/", emoji: "👂" },
    { en: "parrot", zh: "鹦鹉", phonetic: "/ˈpærət/", emoji: "🦜" },
    { en: "sorry", zh: "对不起", phonetic: "/ˈsɒri/", emoji: "😅" }
  ]},
  { grade: "三年级下", unit: "Unit 2 图书馆", words: [
    { en: "in", zh: "在…里", phonetic: "/ɪn/", emoji: "📥" },
    { en: "run", zh: "跑", phonetic: "/rʌn/", emoji: "🏃" },
    { en: "eat", zh: "吃", phonetic: "/iːt/", emoji: "🍽️" },
    { en: "talk", zh: "说话", phonetic: "/tɔːk/", emoji: "💬" },
    { en: "sleep", zh: "睡觉", phonetic: "/sliːp/", emoji: "😴" },
    { en: "drink", zh: "喝", phonetic: "/drɪŋk/", emoji: "🥤" },
    { en: "milk", zh: "牛奶", phonetic: "/mɪlk/", emoji: "🥛" },
    { en: "shout", zh: "喊叫", phonetic: "/ʃaʊt/", emoji: "📢" },
    { en: "here", zh: "这里", phonetic: "/hɪə/", emoji: "📍" }
  ]},
  { grade: "三年级下", unit: "Unit 3 学习用品", words: [
    { en: "pencil", zh: "铅笔", phonetic: "/ˈpensl/", emoji: "✏️" },
    { en: "schoolbag", zh: "书包", phonetic: "/ˈskuːlbæɡ/", emoji: "🎒" },
    { en: "pen", zh: "钢笔", phonetic: "/pen/", emoji: "🖊️" },
    { en: "ruler", zh: "尺子", phonetic: "/ˈruːlə/", emoji: "📏" },
    { en: "crayon", zh: "蜡笔", phonetic: "/ˈkreɪən/", emoji: "🖍️" },
    { en: "where", zh: "哪里", phonetic: "/weə/", emoji: "❓" },
    { en: "your", zh: "你的", phonetic: "/jɔː/", emoji: "👉" },
    { en: "oh", zh: "哦", phonetic: "/əʊ/", emoji: "😲" }
  ]},
  { grade: "三年级下", unit: "Unit 4 方位", words: [
    { en: "bird", zh: "鸟", phonetic: "/bɜːd/", emoji: "🐦" },
    { en: "under", zh: "在…下", phonetic: "/ˈʌndə/", emoji: "⬇️" },
    { en: "on", zh: "在…上", phonetic: "/ɒn/", emoji: "⬆️" },
    { en: "behind", zh: "在…后", phonetic: "/bɪˈhaɪnd/", emoji: "🔙" },
    { en: "desk", zh: "课桌", phonetic: "/desk/", emoji: "🪑" },
    { en: "chair", zh: "椅子", phonetic: "/tʃeə/", emoji: "🪑" },
    { en: "tree", zh: "树", phonetic: "/triː/", emoji: "🌳" },
    { en: "beautiful", zh: "漂亮的", phonetic: "/ˈbjuːtɪfl/", emoji: "🌸" }
  ]},
  { grade: "三年级下", unit: "Unit 5 数字", words: [
    { en: "one", zh: "一", phonetic: "/wʌn/", emoji: "1️⃣" },
    { en: "two", zh: "二", phonetic: "/tuː/", emoji: "2️⃣" },
    { en: "three", zh: "三", phonetic: "/θriː/", emoji: "3️⃣" },
    { en: "four", zh: "四", phonetic: "/fɔː/", emoji: "4️⃣" },
    { en: "five", zh: "五", phonetic: "/faɪv/", emoji: "5️⃣" },
    { en: "six", zh: "六", phonetic: "/sɪks/", emoji: "6️⃣" },
    { en: "seven", zh: "七", phonetic: "/ˈsevn/", emoji: "7️⃣" },
    { en: "eight", zh: "八", phonetic: "/eɪt/", emoji: "8️⃣" },
    { en: "nine", zh: "九", phonetic: "/naɪn/", emoji: "9️⃣" },
    { en: "ten", zh: "十", phonetic: "/ten/", emoji: "🔟" }
  ]},
  { grade: "三年级下", unit: "Unit 6 时间", words: [
    { en: "apple", zh: "苹果", phonetic: "/ˈæpl/", emoji: "🍎" },
    { en: "pear", zh: "梨", phonetic: "/peə/", emoji: "🍐" },
    { en: "orange", zh: "橙子", phonetic: "/ˈɒrɪndʒ/", emoji: "🍊" },
    { en: "cow", zh: "奶牛", phonetic: "/kaʊ/", emoji: "🐄" },
    { en: "duck", zh: "鸭子", phonetic: "/dʌk/", emoji: "🦆" },
    { en: "chicken", zh: "鸡", phonetic: "/ˈtʃɪkɪn/", emoji: "🐔" },
    { en: "pig", zh: "猪", phonetic: "/pɪɡ/", emoji: "🐷" },
    { en: "breakfast", zh: "早餐", phonetic: "/ˈbrekfəst/", emoji: "🍳" },
    { en: "lunch", zh: "午餐", phonetic: "/lʌntʃ/", emoji: "🥪" },
    { en: "dinner", zh: "晚餐", phonetic: "/ˈdɪnə/", emoji: "🍽️" }
  ]},
  { grade: "三年级下", unit: "Unit 7 农场", words: [
    { en: "farm", zh: "农场", phonetic: "/fɑːm/", emoji: "🚜" },
    { en: "boy", zh: "男孩", phonetic: "/bɔɪ/", emoji: "👦" },
    { en: "girl", zh: "女孩", phonetic: "/ɡɜːl/", emoji: "👧" },
    { en: "man", zh: "男人", phonetic: "/mæn/", emoji: "👨" },
    { en: "woman", zh: "女人", phonetic: "/ˈwʊmən/", emoji: "👩" },
    { en: "baby", zh: "婴儿", phonetic: "/ˈbeɪbi/", emoji: "👶" },
    { en: "they", zh: "他们", phonetic: "/ðeɪ/", emoji: "👥" },
    { en: "welcome", zh: "欢迎", phonetic: "/ˈwelkəm/", emoji: "🙏" }
  ]},
  { grade: "三年级下", unit: "Unit 8 数字延伸", words: [
    { en: "eleven", zh: "十一", phonetic: "/ɪˈlevn/", emoji: "1️⃣1️⃣" },
    { en: "twelve", zh: "十二", phonetic: "/twelv/", emoji: "1️⃣2️⃣" },
    { en: "we", zh: "我们", phonetic: "/wiː/", emoji: "👥" },
    { en: "bag", zh: "包", phonetic: "/bæɡ/", emoji: "👜" },
    { en: "these", zh: "这些", phonetic: "/ðiːz/", emoji: "👉" },
    { en: "those", zh: "那些", phonetic: "/ðəʊz/", emoji: "👉" },
    { en: "aunt", zh: "阿姨", phonetic: "/ɑːnt/", emoji: "👩" },
    { en: "cousin", zh: "堂兄妹", phonetic: "/ˈkʌzn/", emoji: "👫" }
  ]},

  // ========== 四年级上册 ==========
  { grade: "四年级上", unit: "Unit 1 动物", words: [
    { en: "animal", zh: "动物", phonetic: "/ˈænɪml/", emoji: "🦁" },
    { en: "panda", zh: "熊猫", phonetic: "/ˈpændə/", emoji: "🐼" },
    { en: "elephant", zh: "大象", phonetic: "/ˈelɪfənt/", emoji: "🐘" },
    { en: "horse", zh: "马", phonetic: "/hɔːs/", emoji: "🐴" },
    { en: "lion", zh: "狮子", phonetic: "/ˈlaɪən/", emoji: "🦁" },
    { en: "monkey", zh: "猴子", phonetic: "/ˈmʌŋki/", emoji: "🐵" },
    { en: "tiger", zh: "老虎", phonetic: "/ˈtaɪɡə/", emoji: "🐯" },
    { en: "cute", zh: "可爱的", phonetic: "/kjuːt/", emoji: "🥰" },
    { en: "fat", zh: "胖的", phonetic: "/fæt/", emoji: "🐷" },
    { en: "like", zh: "喜欢", phonetic: "/laɪk/", emoji: "❤️" }
  ]},
  { grade: "四年级上", unit: "Unit 2 水果", words: [
    { en: "fruit", zh: "水果", phonetic: "/fruːt/", emoji: "🍉" },
    { en: "salad", zh: "沙拉", phonetic: "/ˈsæləd/", emoji: "🥗" },
    { en: "pineapple", zh: "菠萝", phonetic: "/ˈpaɪnæpl/", emoji: "🍍" },
    { en: "mango", zh: "芒果", phonetic: "/ˈmæŋɡəʊ/", emoji: "🥭" },
    { en: "banana", zh: "香蕉", phonetic: "/bəˈnɑːnə/", emoji: "🍌" },
    { en: "grape", zh: "葡萄", phonetic: "/ɡreɪp/", emoji: "🍇" },
    { en: "some", zh: "一些", phonetic: "/sʌm/", emoji: "🔢" },
    { en: "make", zh: "做", phonetic: "/meɪk/", emoji: "🔨" }
  ]},
  { grade: "四年级上", unit: "Unit 3 数字13-19", words: [
    { en: "thirteen", zh: "十三", phonetic: "/ˌθɜːˈtiːn/", emoji: "🔟" },
    { en: "fourteen", zh: "十四", phonetic: "/ˌfɔːˈtiːn/", emoji: "🔟" },
    { en: "fifteen", zh: "十五", phonetic: "/ˌfɪfˈtiːn/", emoji: "🔟" },
    { en: "sixteen", zh: "十六", phonetic: "/ˌsɪksˈtiːn/", emoji: "🔟" },
    { en: "seventeen", zh: "十七", phonetic: "/ˌsevnˈtiːn/", emoji: "🔟" },
    { en: "eighteen", zh: "十八", phonetic: "/ˌeɪˈtiːn/", emoji: "🔟" },
    { en: "nineteen", zh: "十九", phonetic: "/ˌnaɪnˈtiːn/", emoji: "🔟" },
    { en: "sticker", zh: "贴纸", phonetic: "/ˈstɪkə/", emoji: "🏷️" },
    { en: "play", zh: "玩", phonetic: "/pleɪ/", emoji: "🎮" }
  ]},
  { grade: "四年级上", unit: "Unit 4 运动", words: [
    { en: "basketball", zh: "篮球", phonetic: "/ˈbɑːskɪtbɔːl/", emoji: "🏀" },
    { en: "football", zh: "足球", phonetic: "/ˈfʊtbɔːl/", emoji: "⚽" },
    { en: "jump", zh: "跳", phonetic: "/dʒʌmp/", emoji: "🤸" },
    { en: "skate", zh: "滑冰", phonetic: "/skeɪt/", emoji: "⛸️" },
    { en: "swim", zh: "游泳", phonetic: "/swɪm/", emoji: "🏊" },
    { en: "fly", zh: "飞", phonetic: "/flaɪ/", emoji: "🦅" },
    { en: "sad", zh: "难过的", phonetic: "/sæd/", emoji: "😢" },
    { en: "well", zh: "好", phonetic: "/wel/", emoji: "👍" }
  ]},
  { grade: "四年级上", unit: "Unit 5 家", words: [
    { en: "home", zh: "家", phonetic: "/həʊm/", emoji: "🏠" },
    { en: "bedroom", zh: "卧室", phonetic: "/ˈbedruːm/", emoji: "🛏️" },
    { en: "living room", zh: "客厅", phonetic: "/ˈlɪvɪŋ ruːm/", emoji: "🛋️" },
    { en: "kitchen", zh: "厨房", phonetic: "/ˈkɪtʃɪn/", emoji: "🍳" },
    { en: "bathroom", zh: "卫生间", phonetic: "/ˈbɑːθruːm/", emoji: "🚿" },
    { en: "sofa", zh: "沙发", phonetic: "/ˈsəʊfə/", emoji: "🛋️" },
    { en: "fridge", zh: "冰箱", phonetic: "/frɪdʒ/", emoji: "🧊" },
    { en: "hungry", zh: "饿的", phonetic: "/ˈhʌŋɡri/", emoji: "🍔" }
  ]},
  { grade: "四年级上", unit: "Unit 6 餐饮", words: [
    { en: "sandwich", zh: "三明治", phonetic: "/ˈsænwɪtʃ/", emoji: "🥪" },
    { en: "coffee", zh: "咖啡", phonetic: "/ˈkɒfi/", emoji: "☕" },
    { en: "tea", zh: "茶", phonetic: "/tiː/", emoji: "🍵" },
    { en: "juice", zh: "果汁", phonetic: "/dʒuːs/", emoji: "🧃" },
    { en: "rice", zh: "米饭", phonetic: "/raɪs/", emoji: "🍚" },
    { en: "fish", zh: "鱼", phonetic: "/fɪʃ/", emoji: "🐟" },
    { en: "big", zh: "大的", phonetic: "/bɪɡ/", emoji: "🐘" },
    { en: "cup", zh: "杯子", phonetic: "/kʌp/", emoji: "☕" }
  ]},
  { grade: "四年级上", unit: "Unit 7 购物", words: [
    { en: "shoe", zh: "鞋子", phonetic: "/ʃuː/", emoji: "👟" },
    { en: "sock", zh: "袜子", phonetic: "/sɒk/", emoji: "🧦" },
    { en: "umbrella", zh: "雨伞", phonetic: "/ʌmˈbrelə/", emoji: "☂️" },
    { en: "twenty", zh: "二十", phonetic: "/ˈtwenti/", emoji: "🔟" },
    { en: "thirty", zh: "三十", phonetic: "/ˈθɜːti/", emoji: "🔟" },
    { en: "forty", zh: "四十", phonetic: "/ˈfɔːti/", emoji: "🔟" },
    { en: "fifty", zh: "五十", phonetic: "/ˈfɪfti/", emoji: "🔟" },
    { en: "long", zh: "长的", phonetic: "/lɒŋ/", emoji: "📏" },
    { en: "tail", zh: "尾巴", phonetic: "/teɪl/", emoji: "🐒" }
  ]},
  { grade: "四年级上", unit: "Unit 8 外貌", words: [
    { en: "hair", zh: "头发", phonetic: "/heə/", emoji: "💇" },
    { en: "eye", zh: "眼睛", phonetic: "/aɪ/", emoji: "👀" },
    { en: "nose", zh: "鼻子", phonetic: "/nəʊz/", emoji: "👃" },
    { en: "mouth", zh: "嘴", phonetic: "/maʊθ/", emoji: "👄" },
    { en: "ear", zh: "耳朵", phonetic: "/ɪə/", emoji: "👂" },
    { en: "small", zh: "小的", phonetic: "/smɔːl/", emoji: "🐜" },
    { en: "tall", zh: "高的", phonetic: "/tɔːl/", emoji: "🦒" },
    { en: "thin", zh: "瘦的", phonetic: "/θɪn/", emoji: "🥬" },
    { en: "short", zh: "矮的", phonetic: "/ʃɔːt/", emoji: "🐁" }
  ]},

  // ========== 四年级下册 ==========
  { grade: "四年级下", unit: "Unit 1 课程", words: [
    { en: "school", zh: "学校", phonetic: "/skuːl/", emoji: "🏫" },
    { en: "subject", zh: "课程", phonetic: "/ˈsʌbdʒɪkt/", emoji: "📚" },
    { en: "Chinese", zh: "语文", phonetic: "/ˌtʃaɪˈniːz/", emoji: "📖" },
    { en: "Maths", zh: "数学", phonetic: "/mæθs/", emoji: "🔢" },
    { en: "Art", zh: "美术", phonetic: "/ɑːt/", emoji: "🎨" },
    { en: "PE", zh: "体育", phonetic: "/ˌpiːˈiː/", emoji: "🏃" },
    { en: "Music", zh: "音乐", phonetic: "/ˈmjuːzɪk/", emoji: "🎵" },
    { en: "Science", zh: "科学", phonetic: "/ˈsaɪəns/", emoji: "🔬" },
    { en: "Monday", zh: "星期一", phonetic: "/ˈmʌndeɪ/", emoji: "📅" }
  ]},
  { grade: "四年级下", unit: "Unit 2 星期", words: [
    { en: "Monday", zh: "周一", phonetic: "/ˈmʌndeɪ/", emoji: "📅" },
    { en: "Tuesday", zh: "周二", phonetic: "/ˈtjuːzdeɪ/", emoji: "📅" },
    { en: "Wednesday", zh: "周三", phonetic: "/ˈwenzdeɪ/", emoji: "📅" },
    { en: "Thursday", zh: "周四", phonetic: "/ˈθɜːzdeɪ/", emoji: "📅" },
    { en: "Friday", zh: "周五", phonetic: "/ˈfraɪdeɪ/", emoji: "📅" },
    { en: "Saturday", zh: "周六", phonetic: "/ˈsætədeɪ/", emoji: "📅" },
    { en: "Sunday", zh: "周日", phonetic: "/ˈsʌndeɪ/", emoji: "📅" },
    { en: "today", zh: "今天", phonetic: "/təˈdeɪ/", emoji: "📅" },
    { en: "match", zh: "比赛", phonetic: "/mætʃ/", emoji: "🏆" }
  ]},
  { grade: "四年级下", unit: "Unit 3 日常作息", words: [
    { en: "usually", zh: "通常", phonetic: "/ˈjuːʒuəli/", emoji: "⏰" },
    { en: "morning", zh: "早上", phonetic: "/ˈmɔːnɪŋ/", emoji: "🌅" },
    { en: "afternoon", zh: "下午", phonetic: "/ˌɑːftəˈnuːn/", emoji: "☀️" },
    { en: "evening", zh: "晚上", phonetic: "/ˈiːvnɪŋ/", emoji: "🌆" },
    { en: "homework", zh: "作业", phonetic: "/ˈhəʊmwɜːk/", emoji: "📝" },
    { en: "dinner", zh: "晚餐", phonetic: "/ˈdɪnə/", emoji: "🍽️" },
    { en: "watch", zh: "看", phonetic: "/wɒtʃ/", emoji: "👀" },
    { en: "bed", zh: "床", phonetic: "/bed/", emoji: "🛏️" }
  ]},
  { grade: "四年级下", unit: "Unit 4 画画", words: [
    { en: "draw", zh: "画", phonetic: "/drɔː/", emoji: "🎨" },
    { en: "park", zh: "公园", phonetic: "/pɑːk/", emoji: "🌳" },
    { en: "flower", zh: "花", phonetic: "/ˈflaʊə/", emoji: "🌸" },
    { en: "boat", zh: "小船", phonetic: "/bəʊt/", emoji: "🚤" },
    { en: "river", zh: "河", phonetic: "/ˈrɪvə/", emoji: "🏞️" },
    { en: "lake", zh: "湖", phonetic: "/leɪk/", emoji: "🏞️" },
    { en: "hill", zh: "小山", phonetic: "/hɪl/", emoji: "⛰️" },
    { en: "easy", zh: "容易的", phonetic: "/ˈiːzi/", emoji: "😊" },
    { en: "difficult", zh: "难的", phonetic: "/ˈdɪfɪkəlt/", emoji: "😰" }
  ]},
  { grade: "四年级下", unit: "Unit 5 季节", words: [
    { en: "season", zh: "季节", phonetic: "/ˈsiːzn/", emoji: "🍂" },
    { en: "spring", zh: "春天", phonetic: "/sprɪŋ/", emoji: "🌱" },
    { en: "summer", zh: "夏天", phonetic: "/ˈsʌmə/", emoji: "☀️" },
    { en: "autumn", zh: "秋天", phonetic: "/ˈɔːtəm/", emoji: "🍁" },
    { en: "winter", zh: "冬天", phonetic: "/ˈwɪntə/", emoji: "❄️" },
    { en: "warm", zh: "温暖的", phonetic: "/wɔːm/", emoji: "🌡️" },
    { en: "hot", zh: "热的", phonetic: "/hɒt/", emoji: "🥵" },
    { en: "cold", zh: "冷的", phonetic: "/kəʊld/", emoji: "🥶" },
    { en: "cool", zh: "凉爽的", phonetic: "/kuːl/", emoji: "😎" },
    { en: "kite", zh: "风筝", phonetic: "/kaɪt/", emoji: "🪁" }
  ]},
  { grade: "四年级下", unit: "Unit 6 衣物", words: [
    { en: "dress", zh: "连衣裙", phonetic: "/dres/", emoji: "👗" },
    { en: "trousers", zh: "裤子", phonetic: "/ˈtraʊzəz/", emoji: "👖" },
    { en: "coat", zh: "外套", phonetic: "/kəʊt/", emoji: "🧥" },
    { en: "shirt", zh: "衬衫", phonetic: "/ʃɜːt/", emoji: "👔" },
    { en: "sweater", zh: "毛衣", phonetic: "/ˈswetə/", emoji: "🧶" },
    { en: "jeans", zh: "牛仔裤", phonetic: "/dʒiːnz/", emoji: "👖" },
    { en: "shorts", zh: "短裤", phonetic: "/ʃɔːts/", emoji: "🩳" },
    { en: "glove", zh: "手套", phonetic: "/ɡlʌv/", emoji: "🧤" },
    { en: "party", zh: "派对", phonetic: "/ˈpɑːti/", emoji: "🎉" }
  ]},
  { grade: "四年级下", unit: "Unit 7 感觉", words: [
    { en: "thirsty", zh: "渴的", phonetic: "/ˈθɜːsti/", emoji: "🥵" },
    { en: "water", zh: "水", phonetic: "/ˈwɔːtə/", emoji: "💧" },
    { en: "ill", zh: "生病的", phonetic: "/ɪl/", emoji: "🤒" },
    { en: "tired", zh: "累的", phonetic: "/ˈtaɪəd/", emoji: "😫" },
    { en: "happy", zh: "开心的", phonetic: "/ˈhæpi/", emoji: "😄" },
    { en: "speak", zh: "说话", phonetic: "/spiːk/", emoji: "🗣️" },
    { en: "dear", zh: "亲爱的", phonetic: "/dɪə/", emoji: "💝" }
  ]},
  { grade: "四年级下", unit: "Unit 8 生病", words: [
    { en: "cold", zh: "感冒", phonetic: "/kəʊld/", emoji: "🤧" },
    { en: "fever", zh: "发烧", phonetic: "/ˈfiːvə/", emoji: "🤒" },
    { en: "cough", zh: "咳嗽", phonetic: "/kɒf/", emoji: "😷" },
    { en: "headache", zh: "头痛", phonetic: "/ˈhedeɪk/", emoji: "🤕" },
    { en: "hear", zh: "听见", phonetic: "/hɪə/", emoji: "👂" },
    { en: "may", zh: "可以", phonetic: "/meɪ/", emoji: "🤲" },
    { en: "school", zh: "学校", phonetic: "/skuːl/", emoji: "🏫" }
  ]},

  // ========== 五年级上册 ==========
  { grade: "五年级上", unit: "Unit 1 金发姑娘和三只熊", words: [
    { en: "bear", zh: "熊", phonetic: "/beə/", emoji: "🐻" },
    { en: "forest", zh: "森林", phonetic: "/ˈfɒrɪst/", emoji: "🌲" },
    { en: "house", zh: "房子", phonetic: "/haʊs/", emoji: "🏠" },
    { en: "soup", zh: "汤", phonetic: "/suːp/", emoji: "🍲" },
    { en: "room", zh: "房间", phonetic: "/ruːm/", emoji: "🚪" },
    { en: "hard", zh: "硬的", phonetic: "/hɑːd/", emoji: "🪨" },
    { en: "soft", zh: "软的", phonetic: "/sɒft/", emoji: "🛋️" },
    { en: "afraid", zh: "害怕的", phonetic: "/əˈfreɪd/", emoji: "😨" },
    { en: "beside", zh: "在…旁边", phonetic: "/bɪˈsaɪd/", emoji: "👉" },
    { en: "between", zh: "在…中间", phonetic: "/bɪˈtwiːn/", emoji: "↔️" }
  ]},
  { grade: "五年级上", unit: "Unit 2 一位新学生", words: [
    { en: "student", zh: "学生", phonetic: "/ˈstjuːdnt/", emoji: "👨‍🎓" },
    { en: "classroom", zh: "教室", phonetic: "/ˈklɑːsruːm/", emoji: "🏫" },
    { en: "floor", zh: "楼层", phonetic: "/flɔː/", emoji: "🏢" },
    { en: "first", zh: "第一", phonetic: "/fɜːst/", emoji: "1️⃣" },
    { en: "second", zh: "第二", phonetic: "/ˈsekənd/", emoji: "2️⃣" },
    { en: "third", zh: "第三", phonetic: "/θɜːd/", emoji: "3️⃣" },
    { en: "computer", zh: "电脑", phonetic: "/kəmˈpjuːtə/", emoji: "💻" },
    { en: "swing", zh: "秋千", phonetic: "/swɪŋ/", emoji: "🪑" },
    { en: "heavy", zh: "重的", phonetic: "/ˈhevi/", emoji: "🏋️" },
    { en: "stop", zh: "停止", phonetic: "/stɒp/", emoji: "✋" }
  ]},
  { grade: "五年级上", unit: "Unit 3 我们的动物朋友", words: [
    { en: "body", zh: "身体", phonetic: "/ˈbɒdi/", emoji: "🧍" },
    { en: "leg", zh: "腿", phonetic: "/leɡ/", emoji: "🦵" },
    { en: "arm", zh: "手臂", phonetic: "/ɑːm/", emoji: "💪" },
    { en: "foot", zh: "脚", phonetic: "/fʊt/", emoji: "🦶" },
    { en: "rabbit", zh: "兔子", phonetic: "/ˈræbɪt/", emoji: "🐰" },
    { en: "give", zh: "给", phonetic: "/ɡɪv/", emoji: "🎁" },
    { en: "finger", zh: "手指", phonetic: "/ˈfɪŋɡə/", emoji: "👆" },
    { en: "wing", zh: "翅膀", phonetic: "/wɪŋ/", emoji: "🪽" }
  ]},
  { grade: "五年级上", unit: "Unit 4 爱好", words: [
    { en: "hobby", zh: "爱好", phonetic: "/ˈhɒbi/", emoji: "🎨" },
    { en: "read", zh: "读", phonetic: "/riːd/", emoji: "📖" },
    { en: "story", zh: "故事", phonetic: "/ˈstɔːri/", emoji: "📚" },
    { en: "dance", zh: "跳舞", phonetic: "/dɑːns/", emoji: "💃" },
    { en: "sing", zh: "唱歌", phonetic: "/sɪŋ/", emoji: "🎤" },
    { en: "piano", zh: "钢琴", phonetic: "/piˈænəʊ/", emoji: "🎹" },
    { en: "film", zh: "电影", phonetic: "/fɪlm/", emoji: "🎬" },
    { en: "both", zh: "两者都", phonetic: "/bəʊθ/", emoji: "👫" },
    { en: "also", zh: "也", phonetic: "/ˈɔːlsəʊ/", emoji: "➕" },
    { en: "idea", zh: "主意", phonetic: "/aɪˈdɪə/", emoji: "💡" }
  ]},
  { grade: "五年级上", unit: "Unit 5 他们是做什么的", words: [
    { en: "teacher", zh: "老师", phonetic: "/ˈtiːtʃə/", emoji: "👨‍🏫" },
    { en: "doctor", zh: "医生", phonetic: "/ˈdɒktə/", emoji: "👨‍⚕️" },
    { en: "writer", zh: "作家", phonetic: "/ˈraɪtə/", emoji: "✍️" },
    { en: "worker", zh: "工人", phonetic: "/ˈwɜːkə/", emoji: "👷" },
    { en: "cook", zh: "厨师", phonetic: "/kʊk/", emoji: "👨‍🍳" },
    { en: "driver", zh: "司机", phonetic: "/ˈdraɪvə/", emoji: "🚗" },
    { en: "farmer", zh: "农民", phonetic: "/ˈfɑːmə/", emoji: "👨‍🌾" },
    { en: "nurse", zh: "护士", phonetic: "/nɜːs/", emoji: "👩‍⚕️" },
    { en: "policeman", zh: "警察", phonetic: "/pəˈliːsmən/", emoji: "👮" },
    { en: "factory", zh: "工厂", phonetic: "/ˈfæktri/", emoji: "🏭" }
  ]},
  { grade: "五年级上", unit: "Unit 6 我的网友", words: [
    { en: "email", zh: "电子邮件", phonetic: "/ˈiːmeɪl/", emoji: "📧" },
    { en: "send", zh: "发送", phonetic: "/send/", emoji: "📤" },
    { en: "live", zh: "居住", phonetic: "/lɪv/", emoji: "🏠" },
    { en: "study", zh: "学习", phonetic: "/ˈstʌdi/", emoji: "📚" },
    { en: "UK", zh: "英国", phonetic: "/ˌjuːˈkeɪ/", emoji: "🇬🇧" },
    { en: "China", zh: "中国", phonetic: "/ˈtʃaɪnə/", emoji: "🇨🇳" },
    { en: "US", zh: "美国", phonetic: "/ˌjuːˈes/", emoji: "🇺🇸" },
    { en: "Australia", zh: "澳大利亚", phonetic: "/ɒˈstreɪliə/", emoji: "🇦🇺" },
    { en: "Canada", zh: "加拿大", phonetic: "/ˈkænədə/", emoji: "🇨🇦" },
    { en: "wait", zh: "等待", phonetic: "/weɪt/", emoji: "⏳" }
  ]},
  { grade: "五年级上", unit: "Unit 7 在周末", words: [
    { en: "weekend", zh: "周末", phonetic: "/ˌwiːkˈend/", emoji: "📅" },
    { en: "visit", zh: "拜访", phonetic: "/ˈvɪzɪt/", emoji: "🏠" },
    { en: "grandparent", zh: "祖父母", phonetic: "/ˈɡrænpeərənt/", emoji: "👴👵" },
    { en: "often", zh: "经常", phonetic: "/ˈɒfn/", emoji: "🔁" },
    { en: "chat", zh: "聊天", phonetic: "/tʃæt/", emoji: "💬" },
    { en: "Internet", zh: "互联网", phonetic: "/ˈɪntənet/", emoji: "🌐" },
    { en: "always", zh: "总是", phonetic: "/ˈɔːlweɪz/", emoji: "♾️" },
    { en: "sometimes", zh: "有时", phonetic: "/ˈsʌmtaɪmz/", emoji: "🔀" },
    { en: "cinema", zh: "电影院", phonetic: "/ˈsɪnəmə/", emoji: "🎬" }
  ]},
  { grade: "五年级上", unit: "Unit 8 在圣诞节", words: [
    { en: "Christmas", zh: "圣诞节", phonetic: "/ˈkrɪsməs/", emoji: "🎄" },
    { en: "buy", zh: "买", phonetic: "/baɪ/", emoji: "🛒" },
    { en: "present", zh: "礼物", phonetic: "/ˈpreznt/", emoji: "🎁" },
    { en: "put", zh: "放", phonetic: "/pʊt/", emoji: "📦" },
    { en: "pretty", zh: "漂亮的", phonetic: "/ˈprɪti/", emoji: "✨" },
    { en: "card", zh: "卡片", phonetic: "/kɑːd/", emoji: "💌" },
    { en: "children", zh: "孩子们", phonetic: "/ˈtʃɪldrən/", emoji: "👧👦" },
    { en: "song", zh: "歌曲", phonetic: "/sɒŋ/", emoji: "🎵" },
    { en: "early", zh: "早地", phonetic: "/ˈɜːli/", emoji: "🌅" }
  ]},

  // ========== 五年级下册 ==========
  { grade: "五年级下", unit: "Unit 1 灰姑娘", words: [
    { en: "prince", zh: "王子", phonetic: "/prɪns/", emoji: "🤴" },
    { en: "fairy", zh: "仙女", phonetic: "/ˈfeəri/", emoji: "🧚" },
    { en: "why", zh: "为什么", phonetic: "/waɪ/", emoji: "❓" },
    { en: "because", zh: "因为", phonetic: "/bɪˈkɒz/", emoji: "💡" },
    { en: "clothes", zh: "衣服", phonetic: "/kləʊðz/", emoji: "👗" },
    { en: "let", zh: "让", phonetic: "/let/", emoji: "🤲" },
    { en: "fit", zh: "合适", phonetic: "/fɪt/", emoji: "✅" },
    { en: "mushroom", zh: "蘑菇", phonetic: "/ˈmʌʃruːm/", emoji: "🍄" },
    { en: "late", zh: "迟的", phonetic: "/leɪt/", emoji: "⏰" },
    { en: "pick", zh: "摘", phonetic: "/pɪk/", emoji: "🧺" }
  ]},
  { grade: "五年级下", unit: "Unit 2 你怎么来学校", words: [
    { en: "near", zh: "在…附近", phonetic: "/nɪə/", emoji: "📍" },
    { en: "bus", zh: "公共汽车", phonetic: "/bʌs/", emoji: "🚌" },
    { en: "metro", zh: "地铁", phonetic: "/ˈmetrəʊ/", emoji: "🚇" },
    { en: "taxi", zh: "出租车", phonetic: "/ˈtæksi/", emoji: "🚕" },
    { en: "bike", zh: "自行车", phonetic: "/baɪk/", emoji: "🚲" },
    { en: "plane", zh: "飞机", phonetic: "/pleɪn/", emoji: "✈️" },
    { en: "train", zh: "火车", phonetic: "/treɪn/", emoji: "🚆" },
    { en: "ship", zh: "轮船", phonetic: "/ʃɪp/", emoji: "🚢" },
    { en: "city", zh: "城市", phonetic: "/ˈsɪti/", emoji: "🏙️" },
    { en: "ride", zh: "骑", phonetic: "/raɪd/", emoji: "🚴" }
  ]},
  { grade: "五年级下", unit: "Unit 3 问路", words: [
    { en: "walk", zh: "走", phonetic: "/wɔːk/", emoji: "🚶" },
    { en: "bookshop", zh: "书店", phonetic: "/ˈbʊkʃɒp/", emoji: "📚" },
    { en: "street", zh: "街道", phonetic: "/striːt/", emoji: "🛣️" },
    { en: "cinema", zh: "电影院", phonetic: "/ˈsɪnəmə/", emoji: "🎬" },
    { en: "hospital", zh: "医院", phonetic: "/ˈhɒspɪtl/", emoji: "🏥" },
    { en: "shop", zh: "商店", phonetic: "/ʃɒp/", emoji: "🏪" },
    { en: "zoo", zh: "动物园", phonetic: "/zuː/", emoji: "🦁" },
    { en: "supermarket", zh: "超市", phonetic: "/ˈsuːpəmɑːkɪt/", emoji: "🛒" },
    { en: "turn", zh: "转弯", phonetic: "/tɜːn/", emoji: "↪️" },
    { en: "left", zh: "左", phonetic: "/left/", emoji: "⬅️" }
  ]},
  { grade: "五年级下", unit: "Unit 4 看医生", words: [
    { en: "feel", zh: "感觉", phonetic: "/fiːl/", emoji: "🤔" },
    { en: "check", zh: "检查", phonetic: "/tʃek/", emoji: "🩺" },
    { en: "should", zh: "应该", phonetic: "/ʃʊd/", emoji: "💡" },
    { en: "rest", zh: "休息", phonetic: "/rest/", emoji: "😴" },
    { en: "medicine", zh: "药", phonetic: "/ˈmedsn/", emoji: "💊" },
    { en: "toothache", zh: "牙疼", phonetic: "/ˈtuːθeɪk/", emoji: "🦷" },
    { en: "dentist", zh: "牙医", phonetic: "/ˈdentɪst/", emoji: "🦷" },
    { en: "anything", zh: "任何东西", phonetic: "/ˈeniθɪŋ/", emoji: "❓" },
    { en: "giraffe", zh: "长颈鹿", phonetic: "/dʒəˈrɑːf/", emoji: "🦒" },
    { en: "neck", zh: "脖子", phonetic: "/nek/", emoji: "🦒" }
  ]},
  { grade: "五年级下", unit: "Unit 5 帮助父母", words: [
    { en: "parent", zh: "父或母", phonetic: "/ˈpeərənt/", emoji: "👨👩" },
    { en: "clean", zh: "打扫", phonetic: "/kliːn/", emoji: "🧹" },
    { en: "cook", zh: "烧饭", phonetic: "/kʊk/", emoji: "🍳" },
    { en: "wash", zh: "洗", phonetic: "/wɒʃ/", emoji: "🧼" },
    { en: "grow", zh: "种植", phonetic: "/ɡrəʊ/", emoji: "🌱" },
    { en: "garden", zh: "花园", phonetic: "/ˈɡɑːdn/", emoji: "🌷" },
    { en: "sweet", zh: "甜的", phonetic: "/swiːt/", emoji: "🍬" },
    { en: "pest", zh: "害虫", phonetic: "/pest/", emoji: "🐛" },
    { en: "ladybird", zh: "瓢虫", phonetic: "/ˈleɪdibɜːd/", emoji: "🐞" }
  ]},
  { grade: "五年级下", unit: "Unit 6 在厨房", words: [
    { en: "smell", zh: "闻", phonetic: "/smel/", emoji: "👃" },
    { en: "meat", zh: "肉", phonetic: "/miːt/", emoji: "🥩" },
    { en: "vegetable", zh: "蔬菜", phonetic: "/ˈvedʒtəbl/", emoji: "🥦" },
    { en: "tomato", zh: "西红柿", phonetic: "/təˈmɑːtəʊ/", emoji: "🍅" },
    { en: "potato", zh: "土豆", phonetic: "/pəˈteɪtəʊ/", emoji: "🥔" },
    { en: "ready", zh: "准备好的", phonetic: "/ˈredi/", emoji: "✅" },
    { en: "yummy", zh: "美味的", phonetic: "/ˈjʌmi/", emoji: "😋" },
    { en: "bread", zh: "面包", phonetic: "/bred/", emoji: "🍞" },
    { en: "angry", zh: "生气的", phonetic: "/ˈæŋɡri/", emoji: "😠" },
    { en: "catch", zh: "抓", phonetic: "/kætʃ/", emoji: "🤏" }
  ]},
  { grade: "五年级下", unit: "Unit 7 节日", words: [
    { en: "festival", zh: "节日", phonetic: "/ˈfestɪvl/", emoji: "🎉" },
    { en: "January", zh: "一月", phonetic: "/ˈdʒænjuəri/", emoji: "1️⃣" },
    { en: "February", zh: "二月", phonetic: "/ˈfebruəri/", emoji: "2️⃣" },
    { en: "March", zh: "三月", phonetic: "/mɑːtʃ/", emoji: "3️⃣" },
    { en: "April", zh: "四月", phonetic: "/ˈeɪprəl/", emoji: "4️⃣" },
    { en: "May", zh: "五月", phonetic: "/meɪ/", emoji: "5️⃣" },
    { en: "June", zh: "六月", phonetic: "/dʒuːn/", emoji: "6️⃣" },
    { en: "dumpling", zh: "饺子", phonetic: "/ˈdʌmplɪŋ/", emoji: "🥟" },
    { en: "moon", zh: "月亮", phonetic: "/muːn/", emoji: "🌙" },
    { en: "moon cake", zh: "月饼", phonetic: "/muːn keɪk/", emoji: "🥮" }
  ]},
  { grade: "五年级下", unit: "Unit 8 生日", words: [
    { en: "birthday", zh: "生日", phonetic: "/ˈbɜːθdeɪ/", emoji: "🎂" },
    { en: "together", zh: "一起", phonetic: "/təˈɡeðə/", emoji: "👨‍👩‍👧‍👦" },
    { en: "July", zh: "七月", phonetic: "/dʒuˈlaɪ/", emoji: "7️⃣" },
    { en: "August", zh: "八月", phonetic: "/ˈɔːɡəst/", emoji: "8️⃣" },
    { en: "September", zh: "九月", phonetic: "/sepˈtembə/", emoji: "9️⃣" },
    { en: "October", zh: "十月", phonetic: "/ɒkˈtəʊbə/", emoji: "🔟" },
    { en: "November", zh: "十一月", phonetic: "/nəʊˈvembə/", emoji: "1️⃣1️⃣" },
    { en: "December", zh: "十二月", phonetic: "/dɪˈsembə/", emoji: "1️⃣2️⃣" },
    { en: "number", zh: "数字", phonetic: "/ˈnʌmbə/", emoji: "🔢" },
    { en: "answer", zh: "答案", phonetic: "/ˈɑːnsə/", emoji: "💬" }
  ]},

  // ========== 六年级上册 ==========
  { grade: "六年级上", unit: "Unit 1 皇帝的新装", words: [
    { en: "magic", zh: "有魔力的", phonetic: "/ˈmædʒɪk/", emoji: "✨" },
    { en: "clever", zh: "聪明的", phonetic: "/ˈklevə/", emoji: "🧠" },
    { en: "foolish", zh: "愚蠢的", phonetic: "/ˈfuːlɪʃ/", emoji: "🤡" },
    { en: "through", zh: "穿过", phonetic: "/θruː/", emoji: "🚶" },
    { en: "laugh", zh: "笑", phonetic: "/lɑːf/", emoji: "😂" },
    { en: "wear", zh: "穿", phonetic: "/weə/", emoji: "👗" },
    { en: "tell", zh: "讲", phonetic: "/tel/", emoji: "📖" },
    { en: "say", zh: "说", phonetic: "/seɪ/", emoji: "🗣️" },
    { en: "child", zh: "孩子", phonetic: "/tʃaɪld/", emoji: "👶" },
    { en: "king", zh: "国王", phonetic: "/kɪŋ/", emoji: "🤴" }
  ]},
  { grade: "六年级上", unit: "Unit 2 多么糟糕的一天", words: [
    { en: "sunny", zh: "晴朗的", phonetic: "/ˈsʌni/", emoji: "☀️" },
    { en: "weather", zh: "天气", phonetic: "/ˈweðə/", emoji: "🌤️" },
    { en: "become", zh: "变成", phonetic: "/bɪˈkʌm/", emoji: "🔄" },
    { en: "windy", zh: "有风的", phonetic: "/ˈwɪndi/", emoji: "💨" },
    { en: "cloudy", zh: "多云的", phonetic: "/ˈklaʊdi/", emoji: "☁️" },
    { en: "rainy", zh: "下雨的", phonetic: "/ˈreɪni/", emoji: "🌧️" },
    { en: "sky", zh: "天空", phonetic: "/skaɪ/", emoji: "🌌" },
    { en: "bring", zh: "带来", phonetic: "/brɪŋ/", emoji: "🎁" },
    { en: "honey", zh: "蜂蜜", phonetic: "/ˈhʌni/", emoji: "🍯" },
    { en: "meet", zh: "遇见", phonetic: "/miːt/", emoji: "🤝" }
  ]},
  { grade: "六年级上", unit: "Unit 3 假日乐趣", words: [
    { en: "holiday", zh: "假日", phonetic: "/ˈhɒlədeɪ/", emoji: "🏖️" },
    { en: "National Day", zh: "国庆节", phonetic: "/ˈnæʃnəl deɪ/", emoji: "🇨🇳" },
    { en: "call", zh: "打电话", phonetic: "/kɔːl/", emoji: "📞" },
    { en: "star", zh: "星星", phonetic: "/stɑː/", emoji: "⭐" },
    { en: "Great Wall", zh: "长城", phonetic: "/ɡreɪt wɔːl/", emoji: "🏯" },
    { en: "museum", zh: "博物馆", phonetic: "/mjuˈziːəm/", emoji: "🏛️" },
    { en: "Summer Palace", zh: "颐和园", phonetic: "/ˈsʌmə ˈpæləs/", emoji: "🏞️" }
  ]},
  { grade: "六年级上", unit: "Unit 4 那时和现在", words: [
    { en: "then", zh: "那时", phonetic: "/ðen/", emoji: "⏰" },
    { en: "now", zh: "现在", phonetic: "/naʊ/", emoji: "📍" },
    { en: "ago", zh: "以前", phonetic: "/əˈɡəʊ/", emoji: "⏪" },
    { en: "write", zh: "写", phonetic: "/raɪt/", emoji: "✍️" },
    { en: "read", zh: "读", phonetic: "/riːd/", emoji: "📖" },
    { en: "email", zh: "电子邮件", phonetic: "/ˈiːmeɪl/", emoji: "📧" },
    { en: "telephone", zh: "电话", phonetic: "/ˈtelɪfəʊn/", emoji: "☎️" },
    { en: "mobile", zh: "手机", phonetic: "/ˈməʊbaɪl/", emoji: "📱" }
  ]},
  { grade: "六年级上", unit: "Unit 5 标识", words: [
    { en: "sign", zh: "标识", phonetic: "/saɪn/", emoji: "🚸" },
    { en: "smoke", zh: "吸烟", phonetic: "/sməʊk/", emoji: "🚭" },
    { en: "litter", zh: "乱扔垃圾", phonetic: "/ˈlɪtə/", emoji: "🗑️" },
    { en: "park", zh: "停车", phonetic: "/pɑːk/", emoji: "🅿️" },
    { en: "mean", zh: "意思是", phonetic: "/miːn/", emoji: "💡" },
    { en: "danger", zh: "危险", phonetic: "/ˈdeɪndʒə/", emoji: "⚠️" },
    { en: "careful", zh: "小心的", phonetic: "/ˈkeəfl/", emoji: "⚠️" },
    { en: "floor", zh: "地面", phonetic: "/flɔː/", emoji: "🚶" }
  ]},
  { grade: "六年级上", unit: "Unit 6 保持城市清洁", words: [
    { en: "clean", zh: "干净的", phonetic: "/kliːn/", emoji: "✨" },
    { en: "dirty", zh: "脏的", phonetic: "/ˈdɜːti/", emoji: "🤢" },
    { en: "city", zh: "城市", phonetic: "/ˈsɪti/", emoji: "🏙️" },
    { en: "rubbish", zh: "垃圾", phonetic: "/ˈrʌbɪʃ/", emoji: "🗑️" },
    { en: "smoke", zh: "烟", phonetic: "/sməʊk/", emoji: "💨" },
    { en: "river", zh: "河", phonetic: "/ˈrɪvə/", emoji: "🏞️" },
    { en: "tree", zh: "树", phonetic: "/triː/", emoji: "🌳" },
    { en: "keep", zh: "保持", phonetic: "/kiːp/", emoji: "🤲" }
  ]},
  { grade: "六年级上", unit: "Unit 7 保护地球", words: [
    { en: "earth", zh: "地球", phonetic: "/ɜːθ/", emoji: "🌍" },
    { en: "protect", zh: "保护", phonetic: "/prəˈtekt/", emoji: "🛡️" },
    { en: "save", zh: "节约", phonetic: "/seɪv/", emoji: "💧" },
    { en: "energy", zh: "能源", phonetic: "/ˈenədʒi/", emoji: "⚡" },
    { en: "water", zh: "水", phonetic: "/ˈwɔːtə/", emoji: "💧" },
    { en: "paper", zh: "纸", phonetic: "/ˈpeɪpə/", emoji: "📄" },
    { en: "plastic", zh: "塑料", phonetic: "/ˈplæstɪk/", emoji: "🥤" },
    { en: "reuse", zh: "再利用", phonetic: "/ˌriːˈjuːz/", emoji: "♻️" },
    { en: "waste", zh: "浪费", phonetic: "/weɪst/", emoji: " waste" }
  ]},
  { grade: "六年级上", unit: "Unit 8 农历新年", words: [
    { en: "fireworks", zh: "烟花", phonetic: "/ˈfaɪəwɜːks/", emoji: "🎆" },
    { en: "red packet", zh: "红包", phonetic: "/red ˈpækɪt/", emoji: "🧧" },
    { en: "lion dance", zh: "舞狮", phonetic: "/ˈlaɪən dɑːns/", emoji: "🦁" },
    { en: "food", zh: "食物", phonetic: "/fuːd/", emoji: "🍜" },
    { en: "buy", zh: "买", phonetic: "/baɪ/", emoji: "🛒" },
    { en: "happy", zh: "开心的", phonetic: "/ˈhæpi/", emoji: "😄" },
    { en: "excited", zh: "兴奋的", phonetic: "/ɪkˈsaɪtɪd/", emoji: "🤩" }
  ]},

  // ========== 六年级下册 ==========
  { grade: "六年级下", unit: "Unit 1 狮子和老鼠", words: [
    { en: "mouse", zh: "老鼠", phonetic: "/maʊs/", emoji: "🐭" },
    { en: "large", zh: "大的", phonetic: "/lɑːdʒ/", emoji: "🐘" },
    { en: "strong", zh: "强壮的", phonetic: "/strɒŋ/", emoji: "💪" },
    { en: "weak", zh: "弱的", phonetic: "/wiːk/", emoji: "🥺" },
    { en: "sharp", zh: "锋利的", phonetic: "/ʃɑːp/", emoji: "🗡️" },
    { en: "bite", zh: "咬", phonetic: "/baɪt/", emoji: "😬" },
    { en: "net", zh: "网", phonetic: "/net/", emoji: "🕸️" },
    { en: "sadly", zh: "伤心地", phonetic: "/ˈsædli/", emoji: "😢" },
    { en: "happily", zh: "开心地", phonetic: "/ˈhæpɪli/", emoji: "😄" }
  ]},
  { grade: "六年级下", unit: "Unit 2 好习惯", words: [
    { en: "habit", zh: "习惯", phonetic: "/ˈhæbɪt/", emoji: "📋" },
    { en: "good", zh: "好的", phonetic: "/ɡʊd/", emoji: "👍" },
    { en: "bad", zh: "坏的", phonetic: "/bæd/", emoji: "👎" },
    { en: "early", zh: "早", phonetic: "/ˈɜːli/", emoji: "🌅" },
    { en: "late", zh: "晚", phonetic: "/leɪt/", emoji: "🌙" },
    { en: "tidy", zh: "整齐的", phonetic: "/ˈtaɪdi/", emoji: "🧹" },
    { en: "sleepy", zh: "困的", phonetic: "/ˈsliːpi/", emoji: "😴" },
    { en: "slowly", zh: "慢地", phonetic: "/ˈsləʊli/", emoji: "🐢" },
    { en: "fast", zh: "快地", phonetic: "/fɑːst/", emoji: "🐇" }
  ]},
  { grade: "六年级下", unit: "Unit 3 健康饮食", words: [
    { en: "healthy", zh: "健康的", phonetic: "/ˈhelθi/", emoji: "🥗" },
    { en: "diet", zh: "饮食", phonetic: "/ˈdaɪət/", emoji: "🍽️" },
    { en: "a lot of", zh: "许多", phonetic: "/ə lɒt ɒv/", emoji: "🔢" },
    { en: "sweet", zh: "甜的", phonetic: "/swiːt/", emoji: "🍬" },
    { en: "a little", zh: "一点", phonetic: "/ə ˈlɪtl/", emoji: "🤏" },
    { en: "cola", zh: "可乐", phonetic: "/ˈkəʊlə/", emoji: "🥤" },
    { en: "need", zh: "需要", phonetic: "/niːd/", emoji: "💡" }
  ]},
  { grade: "六年级下", unit: "Unit 4 交通安全", words: [
    { en: "road", zh: "马路", phonetic: "/rəʊd/", emoji: "🛣️" },
    { en: "safety", zh: "安全", phonetic: "/ˈseɪfti/", emoji: "🦺" },
    { en: "cross", zh: "穿过", phonetic: "/krɒs/", emoji: "🚶" },
    { en: "must", zh: "必须", phonetic: "/mʌst/", emoji: "❗" },
    { en: "safe", zh: "安全的", phonetic: "/seɪf/", emoji: "🛡️" },
    { en: "zebra crossing", zh: "斑马线", phonetic: "/ˈziːbrə ˈkrɒsɪŋ/", emoji: "🦓" },
    { en: "pavement", zh: "人行道", phonetic: "/ˈpeɪvmənt/", emoji: "🚶" },
    { en: "follow", zh: "遵守", phonetic: "/ˈfɒləʊ/", emoji: "👣" },
    { en: "easily", zh: "容易地", phonetic: "/ˈiːzɪli/", emoji: "😊" }
  ]},
  { grade: "六年级下", unit: "Unit 5 一场派对", words: [
    { en: "party", zh: "派对", phonetic: "/ˈpɑːti/", emoji: "🎉" },
    { en: "begin", zh: "开始", phonetic: "/bɪˈɡɪn/", emoji: "▶️" },
    { en: "end", zh: "结束", phonetic: "/end/", emoji: "⏹️" },
    { en: "bring", zh: "带来", phonetic: "/brɪŋ/", emoji: "🎁" },
    { en: "drink", zh: "饮料", phonetic: "/drɪŋk/", emoji: "🥤" },
    { en: "snack", zh: "零食", phonetic: "/snæk/", emoji: "🍿" },
    { en: "balloon", zh: "气球", phonetic: "/bəˈluːn/", emoji: "🎈" }
  ]},
  { grade: "六年级下", unit: "Unit 6 一个有趣的国家", words: [
    { en: "country", zh: "国家", phonetic: "/ˈkʌntri/", emoji: "🌏" },
    { en: "learn", zh: "学习", phonetic: "/lɜːn/", emoji: "📚" },
    { en: "will", zh: "将要", phonetic: "/wɪl/", emoji: "🔮" },
    { en: "visitor", zh: "游客", phonetic: "/ˈvɪzɪtə/", emoji: "🚶" },
    { en: "month", zh: "月", phonetic: "/mʌnθ/", emoji: "📅" },
    { en: "Australian", zh: "澳大利亚的", phonetic: "/ɒˈstreɪliən/", emoji: "🦘" },
    { en: "kangaroo", zh: "袋鼠", phonetic: "/ˌkæŋɡəˈruː/", emoji: "🦘" }
  ]},
  { grade: "六年级下", unit: "Unit 7 暑假计划", words: [
    { en: "summer", zh: "夏天", phonetic: "/ˈsʌmə/", emoji: "☀️" },
    { en: "holiday", zh: "假期", phonetic: "/ˈhɒlədeɪ/", emoji: "🏖️" },
    { en: "plan", zh: "计划", phonetic: "/plæn/", emoji: "📝" },
    { en: "travel", zh: "旅行", phonetic: "/ˈtrævl/", emoji: "✈️" },
    { en: "stay", zh: "待", phonetic: "/steɪ/", emoji: "🏠" },
    { en: "visit", zh: "参观", phonetic: "/ˈvɪzɪt/", emoji: "🏞️" },
    { en: "sound", zh: "听起来", phonetic: "/saʊnd/", emoji: "🔊" }
  ]},
  { grade: "六年级下", unit: "Unit 8 我们的梦想", words: [
    { en: "dream", zh: "梦想", phonetic: "/driːm/", emoji: "💫" },
    { en: "future", zh: "未来", phonetic: "/ˈfjuːtʃə/", emoji: "🔮" },
    { en: "want", zh: "想要", phonetic: "/wɒnt/", emoji: "🙋" },
    { en: "job", zh: "工作", phonetic: "/dʒɒb/", emoji: "💼" },
    { en: "scientist", zh: "科学家", phonetic: "/ˈsaɪəntɪst/", emoji: "👨‍🔬" },
    { en: "artist", zh: "艺术家", phonetic: "/ˈɑːtɪst/", emoji: "👨‍🎨" },
    { en: "astronaut", zh: "宇航员", phonetic: "/ˈæstrənɔːt/", emoji: "👨‍🚀" },
    { en: "sure", zh: "确信的", phonetic: "/ʃʊə/", emoji: "💯" }
  ]},
];

// ============================================================
// 课本例句 - 按年级分类
// ============================================================
const SENTENCE_DATA = [
  // 三年级上
  { grade: "三年级上", unit: "Unit 1 问候", sentences: [
    { en: "Hello! I'm Mike.", zh: "你好！我是迈克。" },
    { en: "Hi, Miss Li!", zh: "你好，李老师！" },
    { en: "Good morning, class.", zh: "早上好，同学们。" },
    { en: "Goodbye!", zh: "再见！" }
  ]},
  { grade: "三年级上", unit: "Unit 2 你是谁", sentences: [
    { en: "What's your name?", zh: "你叫什么名字？" },
    { en: "My name is Su Hai.", zh: "我叫苏海。" },
    { en: "Are you Wang Bing?", zh: "你是王兵吗？" },
    { en: "Yes, I am.", zh: "是的，我是。" }
  ]},
  { grade: "三年级上", unit: "Unit 3 我的朋友", sentences: [
    { en: "She is my friend.", zh: "她是我的朋友。" },
    { en: "He is my brother.", zh: "他是我弟弟。" },
    { en: "This is my sister.", zh: "这是我妹妹。" },
    { en: "Nice to meet you.", zh: "很高兴认识你。" }
  ]},
  { grade: "三年级上", unit: "Unit 4 我的家庭", sentences: [
    { en: "This is my family.", zh: "这是我的家庭。" },
    { en: "This is my father.", zh: "这是我爸爸。" },
    { en: "Good evening, Grandma.", zh: "晚上好，奶奶。" },
    { en: "I love my family.", zh: "我爱我的家。" }
  ]},
  { grade: "三年级上", unit: "Unit 5 衣服颜色", sentences: [
    { en: "Look at my T-shirt.", zh: "看我的T恤。" },
    { en: "How nice!", zh: "真好看！" },
    { en: "What colour is it?", zh: "它是什么颜色的？" },
    { en: "It's red.", zh: "它是红色的。" }
  ]},
  { grade: "三年级上", unit: "Unit 6 颜色", sentences: [
    { en: "What colour is it?", zh: "它是什么颜色的？" },
    { en: "It's green and yellow.", zh: "它是绿黄相间的。" },
    { en: "Would you like an egg?", zh: "你想要个鸡蛋吗？" },
    { en: "Yes, please.", zh: "好的，太感谢了。" }
  ]},
  { grade: "三年级上", unit: "Unit 7 食物", sentences: [
    { en: "Would you like a cake?", zh: "你想要一块蛋糕吗？" },
    { en: "No, thank you.", zh: "不，谢谢你。" },
    { en: "What about an ice cream?", zh: "来个冰淇淋怎么样？" },
    { en: "Nice to meet you.", zh: "很高兴认识你。" }
  ]},
  { grade: "三年级上", unit: "Unit 8 玩具", sentences: [
    { en: "Happy Birthday!", zh: "生日快乐！" },
    { en: "This is for you.", zh: "这是给你的。" },
    { en: "Thank you!", zh: "谢谢你！" },
    { en: "What a nice robot!", zh: "多好看的机器人啊！" }
  ]},

  // 三年级下
  { grade: "三年级下", unit: "Unit 1 课堂", sentences: [
    { en: "Stand up, please.", zh: "请起立。" },
    { en: "Sit down, please.", zh: "请坐。" },
    { en: "Open your book.", zh: "打开你的书。" },
    { en: "Close the door.", zh: "关上门。" },
    { en: "I'm sorry.", zh: "对不起。" }
  ]},
  { grade: "三年级下", unit: "Unit 2 图书馆", sentences: [
    { en: "Don't run in the library.", zh: "不要在图书馆里跑。" },
    { en: "Don't eat here.", zh: "不要在这里吃东西。" },
    { en: "Don't talk.", zh: "不要说话。" },
    { en: "Don't sleep.", zh: "不要睡觉。" }
  ]},
  { grade: "三年级下", unit: "Unit 3 学习用品", sentences: [
    { en: "Is this your pencil?", zh: "这是你的铅笔吗？" },
    { en: "Where's my schoolbag?", zh: "我的书包在哪里？" },
    { en: "It's over there.", zh: "在那边。" },
    { en: "This isn't my pen.", zh: "这不是我的钢笔。" }
  ]},
  { grade: "三年级下", unit: "Unit 4 方位", sentences: [
    { en: "Where's the bird?", zh: "鸟在哪里？" },
    { en: "It's under the desk.", zh: "它在课桌下面。" },
    { en: "It's on the chair.", zh: "它在椅子上。" },
    { en: "It's behind the door.", zh: "它在门后面。" }
  ]},
  { grade: "三年级下", unit: "Unit 5 数字", sentences: [
    { en: "How old are you?", zh: "你几岁了？" },
    { en: "I'm nine.", zh: "我九岁了。" },
    { en: "How many pencils?", zh: "有多少支铅笔？" },
    { en: "I have five rulers.", zh: "我有五把尺子。" }
  ]},
  { grade: "三年级下", unit: "Unit 6 时间", sentences: [
    { en: "What time is it?", zh: "几点了？" },
    { en: "It's seven o'clock.", zh: "七点了。" },
    { en: "It's time for breakfast.", zh: "该吃早餐了。" },
    { en: "Hurry up!", zh: "快点！" }
  ]},
  { grade: "三年级下", unit: "Unit 7 农场", sentences: [
    { en: "Welcome to my farm.", zh: "欢迎来到我的农场。" },
    { en: "What are those?", zh: "那些是什么？" },
    { en: "They are cows.", zh: "它们是奶牛。" },
    { en: "Who's that boy?", zh: "那个男孩是谁？" }
  ]},
  { grade: "三年级下", unit: "Unit 8 数字延伸", sentences: [
    { en: "How old is your sister?", zh: "你妹妹几岁了？" },
    { en: "She's twelve.", zh: "她十二岁了。" },
    { en: "We are twins.", zh: "我们是双胞胎。" },
    { en: "Who is the man?", zh: "那个男人是谁？" }
  ]},

  // ========== 四年级例句 ==========
  { grade: "四年级上", unit: "Unit 1 动物", sentences: [
    { en: "I like dogs.", zh: "我喜欢狗。" },
    { en: "Do you like pandas?", zh: "你喜欢熊猫吗？" },
    { en: "The elephant is so big.", zh: "大象好大啊。" },
    { en: "Look at the monkey!", zh: "看那只猴子！" }
  ]},
  { grade: "四年级上", unit: "Unit 2 水果", sentences: [
    { en: "Let's make a fruit salad.", zh: "我们做个水果沙拉吧。" },
    { en: "I have a mango and a banana.", zh: "我有一个芒果和一根香蕉。" },
    { en: "Do you have any grapes?", zh: "你有葡萄吗？" },
    { en: "Thanks very much.", zh: "非常感谢。" }
  ]},
  { grade: "四年级上", unit: "Unit 3 数字", sentences: [
    { en: "How many stickers do you have?", zh: "你有多少张贴纸？" },
    { en: "I have fifteen.", zh: "我有十五张。" },
    { en: "Can I have a look?", zh: "我能看一看吗？" },
    { en: "They are very beautiful.", zh: "它们非常漂亮。" }
  ]},
  { grade: "四年级上", unit: "Unit 4 运动", sentences: [
    { en: "I can play basketball.", zh: "我会打篮球。" },
    { en: "Can you swim?", zh: "你会游泳吗？" },
    { en: "Have a try!", zh: "试一试！" },
    { en: "I can't fly either.", zh: "我也不会飞。" }
  ]},
  { grade: "四年级上", unit: "Unit 5 家", sentences: [
    { en: "Welcome to my home.", zh: "欢迎来到我家。" },
    { en: "Where is the fridge?", zh: "冰箱在哪里？" },
    { en: "It's in the kitchen.", zh: "它在厨房里。" },
    { en: "I'm hungry.", zh: "我饿了。" }
  ]},
  { grade: "四年级上", unit: "Unit 6 餐饮", sentences: [
    { en: "Can I help you?", zh: "需要点什么？" },
    { en: "I'd like a sandwich.", zh: "我想要一个三明治。" },
    { en: "Anything else?", zh: "还要别的吗？" },
    { en: "A cup of tea, please.", zh: "请来一杯茶。" }
  ]},
  { grade: "四年级上", unit: "Unit 7 购物", sentences: [
    { en: "How much is it?", zh: "这个多少钱？" },
    { en: "It's twenty yuan.", zh: "二十元。" },
    { en: "I'd like these shoes.", zh: "我想要这双鞋。" },
    { en: "Well done!", zh: "干得好！" }
  ]},
  { grade: "四年级上", unit: "Unit 8 外貌", sentences: [
    { en: "She has long hair.", zh: "她有长头发。" },
    { en: "He has big eyes.", zh: "他有大眼睛。" },
    { en: "You're tall and thin.", zh: "你又高又瘦。" },
    { en: "Look at the snowman!", zh: "看那个雪人！" }
  ]},

  // ========== 五年级例句 ==========
  { grade: "五年级上", unit: "Unit 1 金发姑娘", sentences: [
    { en: "There is a house in the forest.", zh: "森林里有一座房子。" },
    { en: "This soup is just right.", zh: "这汤刚刚好。" },
    { en: "I'm afraid of the bear.", zh: "我害怕那只熊。" },
    { en: "The ball is beside the dog.", zh: "球在狗的旁边。" }
  ]},
  { grade: "五年级上", unit: "Unit 2 新学生", sentences: [
    { en: "Welcome to our classroom.", zh: "欢迎来到我们的教室。" },
    { en: "The library is on the second floor.", zh: "图书馆在二楼。" },
    { en: "Let me show you around.", zh: "我带你参观一下。" },
    { en: "Push the swing, please.", zh: "请推秋千。" }
  ]},
  { grade: "五年级上", unit: "Unit 4 爱好", sentences: [
    { en: "What do you like doing?", zh: "你喜欢做什么？" },
    { en: "I like reading stories.", zh: "我喜欢读故事。" },
    { en: "He also likes playing football.", zh: "他也喜欢踢足球。" },
    { en: "They both like swimming.", zh: "他们俩都喜欢游泳。" }
  ]},
  { grade: "五年级上", unit: "Unit 5 职业", sentences: [
    { en: "What does your father do?", zh: "你爸爸是做什么的？" },
    { en: "He is a doctor.", zh: "他是一名医生。" },
    { en: "She works in a factory.", zh: "她在一家工厂工作。" },
    { en: "I want to be a teacher.", zh: "我想当一名老师。" }
  ]},
  { grade: "五年级上", unit: "Unit 6 网友", sentences: [
    { en: "Can I be your e-friend?", zh: "我能当你的网友吗？" },
    { en: "He lives in the UK.", zh: "他住在英国。" },
    { en: "I can speak English.", zh: "我会说英语。" },
    { en: "Send me an email, please.", zh: "请给我发邮件。" }
  ]},
  { grade: "五年级上", unit: "Unit 8 圣诞节", sentences: [
    { en: "Merry Christmas!", zh: "圣诞快乐！" },
    { en: "We buy presents for our family.", zh: "我们给家人买礼物。" },
    { en: "The Christmas tree looks pretty.", zh: "圣诞树真漂亮。" },
    { en: "We have a big dinner.", zh: "我们吃一顿丰盛的晚餐。" }
  ]},

  // ========== 六年级例句 ==========
  { grade: "六年级上", unit: "Unit 1 皇帝的新装", sentences: [
    { en: "Long long ago, there was a king.", zh: "很久以前，有一位国王。" },
    { en: "The king was clever but foolish.", zh: "国王既聪明又愚蠢。" },
    { en: "People laughed at him.", zh: "人们嘲笑他。" },
    { en: "A little boy pointed at the king.", zh: "一个小男孩指着国王。" }
  ]},
  { grade: "六年级上", unit: "Unit 2 糟糕的一天", sentences: [
    { en: "What a day!", zh: "多么糟糕的一天！" },
    { en: "It was sunny in the morning.", zh: "早上天气晴朗。" },
    { en: "Then it became rainy.", zh: "后来下雨了。" },
    { en: "We were wet and cold.", zh: "我们又湿又冷。" }
  ]},
  { grade: "六年级上", unit: "Unit 5 标识", sentences: [
    { en: "What does this sign mean?", zh: "这个标识是什么意思？" },
    { en: "It means \"No smoking\".", zh: "它的意思是\"禁止吸烟\"。" },
    { en: "You can't litter here.", zh: "你不能在这里乱扔垃圾。" },
    { en: "Danger! Please stay away.", zh: "危险！请远离。" }
  ]},
  { grade: "六年级下", unit: "Unit 1 狮子和老鼠", sentences: [
    { en: "The lion was large and strong.", zh: "狮子又大又强壮。" },
    { en: "The mouse was small and weak.", zh: "老鼠又小又弱。" },
    { en: "The lion caught the net with his teeth.", zh: "狮子用牙齿咬断了网。" },
    { en: "They became good friends.", zh: "它们成了好朋友。" }
  ]},
  { grade: "六年级下", unit: "Unit 4 交通安全", sentences: [
    { en: "You must look at the traffic lights.", zh: "你必须看红绿灯。" },
    { en: "Cross the road safely.", zh: "安全地过马路。" },
    { en: "Wait on the pavement.", zh: "在人行道上等待。" },
    { en: "Follow the rules, please.", zh: "请遵守规则。" }
  ]},
  { grade: "六年级下", unit: "Unit 8 我们的梦想", sentences: [
    { en: "What do you want to be in the future?", zh: "你将来想做什么？" },
    { en: "I want to be a scientist.", zh: "我想当一名科学家。" },
    { en: "I want to fly to the Moon.", zh: "我想飞到月球上去。" },
    { en: "Your dreams will come true.", zh: "你的梦想会实现的。" }
  ]},
];
