
import React, { useEffect, useState } from "react";

/* =========================================================
   DATA
   ========================================================= */

const wordSets = [
    {
  id: "lesson-11",
  title: "توپِ فوتبال",
  description: "کلمه‌های داستان توپِ فوتبال",
  emoji: "⚽",
  words: [
    {
      word: "توپ",
      syllables: ["توپ"],
      sounds: ["ت", "و", "پ"],
      image: "/images/ball.png",
    },
    {
      word: "فوتبال",
      syllables: ["فوت", "بال"],
      sounds: ["ف", "و", "ت", "ب", "ا", "ل"],
      image: "/images/soccer.png",
    },
    {
      word: "عَلی",
      syllables: ["عَ", "لی"],
      sounds: ["ع", "َ", "ل", "ی"],
      image: "/images/ali.png",
    },
    {
      word: "دارَد",
      syllables: ["دا", "رَد"],
      sounds: ["د", "ا", "ر", "َ", "د"],
      image: "/images/have.png",
    },
    {
      word: "بازی",
      syllables: ["با", "زی"],
      sounds: ["ب", "ا", "ز", "ی"],
      image: "/images/play.png",
    },
    {
      word: "کَردَن",
      syllables: ["کَر", "دَن"],
      sounds: ["ک", "َ", "ر", "د", "َ", "ن"],
      image: "/images/do.png",
    },
    {
      word: "دوست",
      syllables: ["دوست"],
      sounds: ["د", "و", "س", "ت"],
      image: "/images/friend.png",
    },
    {
      word: "پارک",
      syllables: ["پارک"],
      sounds: ["پ", "ا", "ر", "ک"],
      image: "/images/park.png",
    },
    {
      word: "با",
      syllables: ["با"],
      sounds: ["ب", "ا"],
      image: "/images/with.png",
    },
    {
      word: "هَم",
      syllables: ["هَم"],
      sounds: ["ه", "َ", "م"],
      image: "/images/together.png",
    },
    {
      word: "سَریع",
      syllables: ["سَ", "ریع"],
      sounds: ["س", "َ", "ر", "ی", "ع"],
      image: "/images/fast.png",
    },
    {
      word: "دَویدَن",
      syllables: ["دَ", "وی", "دَن"],
      sounds: ["د", "َ", "و", "ی", "د", "َ", "ن"],
      image: "/images/running.png",
    },
    {
      word: "پا",
      syllables: ["پا"],
      sounds: ["پ", "ا"],
      image: "/images/foot.png",
    },
    {
      word: "شوت",
      syllables: ["شوت"],
      sounds: ["ش", "و", "ت"],
      image: "/images/kick.png",
    },
    {
      word: "هَر دو",
      syllables: ["هَر", "دو"],
      sounds: ["ه", "َ", "ر", "د", "و"],
      image: "/images/both.png",
    },
    {
      word: "خَندیدَن",
      syllables: ["خَن", "دی", "دَن"],
      sounds: ["خ", "َ", "ن", "د", "ی", "د", "َ", "ن"],
      image: "/images/laugh.png",
    },
  ],
},
  // {
  //   id: "he",
  //   title: "ح",
  //   description: "کلمه‌هایی که با ح شروع می‌شوند",
  //   emoji: "🌸",
  //   words: [
  //     {
  //       word: "حَیاط",
  //       syllables: ["حَ", "یاط"],
  //       sounds: ["ح", "َ", "ی", "ا", "ط"],
  //       image: "/images/hayat.png",
  //     },
  //     {
  //       word: "حُوت",
  //       syllables: ["حُوت"],
  //       sounds: ["ح", "ُ", "و", "ت"],
  //       image: "/images/hoot.png",
  //     },
  //     {
  //       word: "حَمام",
  //       syllables: ["حَ", "مام"],
  //       sounds: ["ح", "َ", "م", "ا", "م"],
  //       image: "/images/hamam.png",
  //     },
  //   ],
  // },

  // {
  //   id: "mim",
  //   title: "م",
  //   description: "کلمه‌هایی که با م شروع می‌شوند",
  //   emoji: "🌼",
  //   words: [
  //     {
  //       word: "مادَر",
  //       syllables: ["ما", "دَر"],
  //       sounds: ["م", "ا", "د", "َ", "ر"],
  //       image: "/images/mother.png",
  //     },
  //     {
  //       word: "مُوش",
  //       syllables: ["مُوش"],
  //       sounds: ["م", "ُ", "و", "ش"],
  //       image: "/images/mouse.png",
  //     },
  //     {
  //       word: "مَن",
  //       syllables: ["مَن"],
  //       sounds: ["م", "َ", "ن"],
  //     },
  //   ],
  // },

  // {
  //   id: "noon",
  //   title: "ن",
  //   description: "کلمه‌هایی که با ن شروع می‌شوند",
  //   emoji: "🌻",
  //   words: [
  //     {
  //       word: "نان",
  //       syllables: ["نان"],
  //       sounds: ["ن", "ا", "ن"],
  //       image: "/images/bread.png",
  //     },
  //     {
  //       word: "نُور",
  //       syllables: ["نُور"],
  //       sounds: ["ن", "ُ", "و", "ر"],
  //       image: "/images/light.png",
  //     },
  //     {
  //       word: "نارَس",
  //       syllables: ["نا", "رَس"],
  //       sounds: ["ن", "ا", "ر", "َ", "س"],
  //       image: "/images/naras.png",
  //     },
  //   ],
  // },

//   {
//     id: "lesson-1",
//     title: "درس با هم بخوانیم",
//     description: "کلمه‌های درس پنجم",
//     emoji: "📚",
// words: [
//   {
//   word: "دار",
//   syllables: ["دار"],
//   sounds: ["د", "ا", "ر"],
//   image: "/images/tree.png",
// },
// {
//   word: "داد",
//   syllables: ["داد"],
//   sounds: ["د", "ا", "د"],
//   image: "/images/give.png",
// },
// {
//   word: "دَر",
//   syllables: ["دَر"],
//   sounds: ["د", "َ", "ر"],
//   image: "/images/door.png",
// },
// {
//   word: "دُر",
//   syllables: ["دُر"],
//   sounds: ["د", "ُ", "ر"],
//   image: "/images/pearl.png",
// },
// {
//   word: "مادَر",
//   syllables: ["ما", "دَر"],
//   sounds: ["م", "ا", "د", "َ", "ر"],
//   image: "/images/mother.png",
// },
// {
//   word: "دارَم",
//   syllables: ["دا", "رَم"],
//   sounds: ["د", "ا", "ر", "َ", "م"],
//   image: "/images/have.png",
// },
// {
//   word: "دارَد",
//   syllables: ["دا", "رَد"],
//   sounds: ["د", "ا", "ر", "َ", "د"],
//   image: "/images/has.png",
// },
//   {
//     word: "مامان",
//     syllables: ["ما", "مان"],
//     sounds: ["م", "ا", "م", "ا", "ن"],
//     image: "",
//   },
//   {
//     word: "نام",
//     syllables: ["نام"],
//     sounds: ["ن", "ا", "م"],
//     image: "https://static.vecteezy.com/system/resources/previews/014/830/187/non_2x/name-writing-card-and-cute-boy-vector.jpg",
//   },
//   {
//     word: "نان",
//     syllables: ["نان"],
//     sounds: ["ن", "ا", "ن"],
//     image: "https://i.graphicmama.com/uploads/2023/3/6423e5bbaf34a-bread-chef-cartoon-character.png",
//   },
//   {
//     word: "مَن",
//     syllables: ["مَن"],
//     sounds: ["م", "َ", "ن"],
//     image: "https://thumbs.dreamstime.com/z/alphabet-kid-cartoon-letter-i-isolated-white-background-215870075.jpg",
//   },
//   {
//     word: "نَم",
//     syllables: ["نَم"],
//     sounds: ["ن", "َ", "م"],
//     image: "https://thumb.ac-illust.com/9a/9ad21602e3b0bc58f3c78a2f04c0b2eb_t.jpeg",
//   },
//   {
//     word: "مار",
//     syllables: ["مار"],
//     sounds: ["م", "ا", "ر"],
//     image: "https://png.pngtree.com/png-vector/20240216/ourmid/pngtree-snake-illustration-png-image_11743292.png",
//   },
//   {
//     word: "نَر",
//     syllables: ["نَر"],
//     sounds: ["ن", "َ", "ر"],
//     image: "/images/male.png",
//   },
//   {
//     word: "رَم",
//     syllables: ["رَم"],
//     sounds: ["ر", "َ", "م"],
//     image: "/images/ram.png",
//   },
//   {
//     word: "نَرم",
//     syllables: ["نَرم"],
//     sounds: ["ن", "َ", "ر", "م"],
//     image: "https://c8.alamy.com/comp/2AHXJAH/illustration-of-a-kid-girl-hugging-a-soft-pillow-soft-adjective-sample-2AHXJAH.jpg",
//   },
// ],
//   },
//   {
//   id: "lesson-1",
//   title: "درس با هم بخوانیم",
//   description: "کلمه‌های درس جدید",
//   emoji: "📚",
//   words: [
//     {
//   word: "سَر",
//   syllables: ["سَر"],
//   sounds: ["س", "َ", "ر"],
//   image: "",
// },
// {
//   word: "سَد",
//   syllables: ["سَد"],
//   sounds: ["س", "َ", "د"],
//   image: "",
// },
// {
//   word: "سَم",
//   syllables: ["سَم"],
//   sounds: ["س", "َ", "م"],
//   image: "",
// },
// {
//   word: "سَبَد",
//   syllables: ["سَ", "بَد"],
//   sounds: ["س", "َ", "ب", "َ", "د"],
//   image: "",
// },
// {
//   word: "سَرد",
//   syllables: ["سَرد"],
//   sounds: ["س", "َ", "ر", "د"],
//   image: "",
// },
// {
//   word: "اَسب",
//   syllables: ["اَسب"],
//   sounds: ["ا", "َ", "س", "ب"],
//   image: "/images/horse.png",
// },
// {
//   word: "اِسم",
//   syllables: ["اِسم"],
//   sounds: ["ا", "ِ", "س", "م"],
//   image: "",
// },
// {
//   word: "اَساس",
//   syllables: ["اَ", "ساس"],
//   sounds: ["ا", "َ", "س", "ا", "س"],
//   image: "",
// },
// {
//   word: "بَس",
//   syllables: ["بَس"],
//   sounds: ["ب", "َ", "س"],
//   image: "",
// },
// {
//   word: "مَس",
//   syllables: ["مَس"],
//   sounds: ["م", "َ", "س"],
//   image: "",
// },
// {
//   word: "رَسم",
//   syllables: ["رَسم"],
//   sounds: ["ر", "َ", "س", "م"],
//   image: "",
// },
// {
//   word: "رَسا",
//   syllables: ["رَ", "سا"],
//   sounds: ["ر", "َ", "س", "ا"],
//   image: "",
// },
// {
//   word: "دَرس",
//   syllables: ["دَرس"],
//   sounds: ["د", "َ", "ر", "س"],
//   image: "",
// },
//         {
//       word: "آب",
//       syllables: ["آب"],
//       sounds: ["آ", "ب"],
//       image: "/images/water.png",
//     },
//     {
//       word: "بابا",
//       syllables: ["با", "با"],
//       sounds: ["ب", "ا", "ب", "ا"],
//       image: "/images/dad.png",
//     },
//     {
//       word: "ناب",
//       syllables: ["ناب"],
//       sounds: ["ن", "ا", "ب"],
//       image: "",
//     },
//     {
//       word: "بار",
//       syllables: ["بار"],
//       sounds: ["ب", "ا", "ر"],
//       image: "",
//     },
//     {
//       word: "باد",
//       syllables: ["باد"],
//       sounds: ["ب", "ا", "د"],
//       image: "/images/wind.png",
//     },
//     {
//       word: "بام",
//       syllables: ["بام"],
//       sounds: ["ب", "ا", "م"],
//       image: "/images/roof.png",
//     },
//     {
//       word: "باران",
//       syllables: ["با", "ران"],
//       sounds: ["ب", "ا", "ر", "ا", "ن"],
//       image: "/images/rain.png",
//     },
//     {
//       word: "بَد",
//       syllables: ["بَد"],
//       sounds: ["ب", "َ", "د"],
//       image: "",
//     },
//     {
//       word: "بَم",
//       syllables: ["بَم"],
//       sounds: ["ب", "َ", "م"],
//       image: "",
//     },
//     {
//       word: "بَر",
//       syllables: ["بَر"],
//       sounds: ["ب", "َ", "ر"],
//       image: "",
//     },
//     {
//       word: "بُرد",
//       syllables: ["بُرد"],
//       sounds: ["ب", "ُ", "ر", "د"],
//       image: "",
//     },
//     {
//       word: "دار",
//       syllables: ["دار"],
//       sounds: ["د", "ا", "ر"],
//       image: "/images/tree.png",
//     },
//     {
//       word: "داد",
//       syllables: ["داد"],
//       sounds: ["د", "ا", "د"],
//       image: "/images/give.png",
//     },
//     {
//       word: "دَر",
//       syllables: ["دَر"],
//       sounds: ["د", "َ", "ر"],
//       image: "/images/door.png",
//     },
//     {
//       word: "دُر",
//       syllables: ["دُر"],
//       sounds: ["د", "ُ", "ر"],
//       image: "/images/pearl.png",
//     },
//     {
//       word: "مادَر",
//       syllables: ["ما", "دَر"],
//       sounds: ["م", "ا", "د", "َ", "ر"],
//       image: "/images/mother.png",
//     },
//     {
//       word: "دارَم",
//       syllables: ["دا", "رَم"],
//       sounds: ["د", "ا", "ر", "َ", "م"],
//       image: "/images/have.png",
//     },
//     {
//       word: "دارَد",
//       syllables: ["دا", "رَد"],
//       sounds: ["د", "ا", "ر", "َ", "د"],
//       image: "/images/has.png",
//     },
//     {
//       word: "مامان",
//       syllables: ["ما", "مان"],
//       sounds: ["م", "ا", "م", "ا", "ن"],
//       image: "",
//     },
//     {
//       word: "نام",
//       syllables: ["نام"],
//       sounds: ["ن", "ا", "م"],
//       image: "https://static.vecteezy.com/system/resources/previews/014/830/187/non_2x/name-writing-card-and-cute-boy-vector.jpg",
//     },
//     {
//       word: "نان",
//       syllables: ["نان"],
//       sounds: ["ن", "ا", "ن"],
//       image: "https://i.graphicmama.com/uploads/2023/3/6423e5bbaf34a-bread-chef-cartoon-character.png",
//     },
//     {
//       word: "مَن",
//       syllables: ["مَن"],
//       sounds: ["م", "َ", "ن"],
//       image: "https://thumbs.dreamstime.com/z/alphabet-kid-cartoon-letter-i-isolated-white-background-215870075.jpg",
//     },
//     {
//       word: "نَم",
//       syllables: ["نَم"],
//       sounds: ["ن", "َ", "م"],
//       image: "https://thumb.ac-illust.com/9a/9ad21602e3b0bc58f3c78a2f04c0b2eb_t.jpeg",
//     },
//     {
//       word: "مار",
//       syllables: ["مار"],
//       sounds: ["م", "ا", "ر"],
//       image: "https://png.pngtree.com/png-vector/20240216/ourmid/pngtree-snake-illustration-png-image_11743292.png",
//     },
//     {
//       word: "نَر",
//       syllables: ["نَر"],
//       sounds: ["ن", "َ", "ر"],
//       image: "/images/male.png",
//     },
//     {
//       word: "رَم",
//       syllables: ["رَم"],
//       sounds: ["ر", "َ", "م"],
//       image: "/images/ram.png",
//     },
//     {
//       word: "نَرم",
//       syllables: ["نَرم"],
//       sounds: ["ن", "َ", "ر", "م"],
//       image: "https://c8.alamy.com/comp/2AHXJAH/illustration-of-a-kid-girl-hugging-a-soft-pillow-soft-adjective-sample-2AHXJAH.jpg",
//     },
//   ],
// },
];


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function WordHouseGame() {
  /* -------------------------
     Collection
  ------------------------- */

  const [selectedSet, setSelectedSet] = useState(null);

  /* -------------------------
     Word navigation
  ------------------------- */

  const [currentIndex, setCurrentIndex] = useState(0);

  /* -------------------------
     User answers
  ------------------------- */

  const [syllables, setSyllables] = useState([]);
  const [sounds, setSounds] = useState([]);

  /* -------------------------
     Game status
  ------------------------- */

  const [score, setScore] = useState(0);
  const [answerShown, setAnswerShown] = useState(false);
  const [hasScored, setHasScored] = useState(false);

  /* -------------------------
     Animations
  ------------------------- */

  const [filledSyllables, setFilledSyllables] = useState([]);
  const [filledSounds, setFilledSounds] = useState([]);
  const [rewardStars, setRewardStars] = useState(0);

  /* =========================================================
     CURRENT WORD
     ========================================================= */

  const currentWords = selectedSet ? selectedSet.words : [];

  const currentWord =
    currentWords.length > 0
      ? currentWords[currentIndex]
      : null;


  /* =========================================================
     RESET WORD
     ========================================================= */

  useEffect(() => {
    if (!currentWord) return;

    setSyllables(
      new Array(currentWord.syllables.length).fill("")
    );

    setSounds(
      new Array(currentWord.sounds.length).fill("")
    );

    setAnswerShown(false);
    setHasScored(false);

    setFilledSyllables([]);
    setFilledSounds([]);

    setRewardStars(0);
  }, [currentWord]);


  /* =========================================================
     SELECT COLLECTION
     ========================================================= */

  const selectSet = (set) => {
    setSelectedSet(set);
    setCurrentIndex(0);
    setScore(0);
    setRewardStars(0);
  };


  /* =========================================================
     CHANGE COLLECTION
     ========================================================= */

  const changeSet = () => {
    setSelectedSet(null);
    setCurrentIndex(0);
    setScore(0);
    setRewardStars(0);
  };


  /* =========================================================
     INPUT - SYLLABLE
     ========================================================= */

  const handleSyllableChange = (index, value) => {
    if (answerShown) return;

    const updated = [...syllables];
    updated[index] = value;

    setSyllables(updated);

    if (value.trim() !== "") {
      setFilledSyllables((prev) => {
        if (prev.includes(index)) return prev;
        return [...prev, index];
      });
    }
  };


  /* =========================================================
     INPUT - SOUND
     ========================================================= */

  const handleSoundChange = (index, value) => {
    if (answerShown) return;

    const updated = [...sounds];
    updated[index] = value;

    setSounds(updated);

    if (value.trim() !== "") {
      setFilledSounds((prev) => {
        if (prev.includes(index)) return prev;
        return [...prev, index];
      });
    }
  };


  /* =========================================================
     CHECK ANSWER
  ========================================================= */

  const checkAnswer = () => {
    if (!currentWord || hasScored) return;

    const correctSyllables =
      JSON.stringify(syllables) ===
      JSON.stringify(currentWord.syllables);

    const correctSounds =
      JSON.stringify(sounds) ===
      JSON.stringify(currentWord.sounds);

    if (correctSyllables && correctSounds) {
      setScore((prev) => prev + 1);

      setRewardStars(3);

      setHasScored(true);
    } else {
      setRewardStars(0);
    }
  };


  /* =========================================================
     SHOW ANSWER
  ========================================================= */

  const showAnswer = () => {
    if (!currentWord) return;

    setSyllables([...currentWord.syllables]);
    setSounds([...currentWord.sounds]);

    setAnswerShown(true);

    setFilledSyllables(
      currentWord.syllables.map((_, index) => index)
    );

    setFilledSounds(
      currentWord.sounds.map((_, index) => index)
    );
  };


  /* =========================================================
     CLEAR ANSWER
  ========================================================= */

  const clearAnswer = () => {
    if (answerShown) return;

    setSyllables(
      new Array(currentWord.syllables.length).fill("")
    );

    setSounds(
      new Array(currentWord.sounds.length).fill("")
    );

    setFilledSyllables([]);
    setFilledSounds([]);

    setRewardStars(0);
  };


  /* =========================================================
     NEXT WORD
  ========================================================= */

  const nextWord = () => {
    if (!currentWords.length) return;

    if (currentIndex < currentWords.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // اگر آخرین کلمه بود، دوباره از اول شروع می‌کنیم
      setCurrentIndex(0);
      setScore(0);
    }
  };


  /* =========================================================
     COLLECTION SELECTION PAGE
  ========================================================= */

  if (!selectedSet) {
    return (
      <>
        <style>{styles}</style>

        <div className="word-game-page">

          <div className="game-container">

            <div className="selection-header">
              <div className="big-book">📚</div>

              <h1>
                بازی خانه‌ی کلمه‌ها
              </h1>

              <p>
                یک مجموعه را انتخاب کن و بازی را شروع کن! 🌈
              </p>
            </div>


            <div className="sets-grid">

              {wordSets.map((set) => (
                <button
                  key={set.id}
                  className="set-card"
                  onClick={() => selectSet(set)}
                >

                  <div className="set-emoji">
                    {set.emoji}
                  </div>

                  <div className="set-title">
                    {set.title}
                  </div>

                  <div className="set-description">
                    {set.description}
                  </div>

                  <div className="set-count">
                    📝 {set.words.length} کلمه
                  </div>

                  <div className="start-set">
                    شروع بازی ▶
                  </div>

                </button>
              ))}

            </div>

          </div>

        </div>
      </>
    );
  }


  /* =========================================================
     GAME PAGE
     ========================================================= */

  if (!currentWord) {
    return null;
  }


  return (
    <>
      <style>{styles}</style>

      <div className="word-game-page">

        <div className="game-container">


          {/* =================================================
              TOP BAR
          ================================================= */}

          <div className="top-bar">

            <button
              className="change-set-btn"
              onClick={changeSet}
            >
              📚 تغییر مجموعه
            </button>

            <div className="set-name">
              {selectedSet.emoji} {selectedSet.title}
            </div>

            <div className="score-box">
              ⭐ امتیاز: {score}
            </div>

          </div>


          {/* =================================================
              PROGRESS
          ================================================= */}

          <div className="progress-section">

            <div className="progress-text">
              کلمه {currentIndex + 1} از {currentWords.length}
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${
                    ((currentIndex + 1) /
                      currentWords.length) *
                    100
                  }%`,
                }}
              />

            </div>

          </div>


          {/* =================================================
              TITLE
          ================================================= */}

          <div className="game-title">

            <span>🏠</span>

            <h1>
              خانه‌ی کلمه
            </h1>

            <span>🏠</span>

          </div>


          {/* =================================================
              WORD CARD
          ================================================= */}

          <div className="word-house">


            {/* ROOF */}

            <div className="house-roof">

              <div className="roof-word">
                {currentWord.word}
              </div>

            </div>


            {/* HOUSE BODY */}

            <div className="house-body">


              {/* WORD + IMAGE */}

              <div className="target-area">

                <div className="target-word">
                  {currentWord.word}
                </div>

                {currentWord.image && (
                  <img
                    src={currentWord.image}
                    alt={currentWord.word}
                    className="word-image"
                  />
                )}

              </div>


              {/* ==========================================
                  SYLLABLES
              ========================================== */}

              <div className="section">

                <div className="section-title">
                  🧩 بخش‌های کلمه
                </div>

                <div className="cells-row">

                  {syllables.map((value, index) => (

                    <input
                      key={index}
                      className={`
                        answer-cell
                        syllable-cell
                        ${
                          filledSyllables.includes(index)
                            ? "input-filled"
                            : ""
                        }
                        ${
                          answerShown
                            ? "answer-visible"
                            : ""
                        }
                      `}
                      value={value}
                      readOnly={answerShown}
                      onChange={(e) =>
                        handleSyllableChange(
                          index,
                          e.target.value
                        )
                      }
                      maxLength={4}
                      dir="rtl"
                    />

                  ))}

                </div>

              </div>


              {/* ==========================================
                  SOUNDS
              ========================================== */}

              <div className="section">

                <div className="section-title">
                  🔤 صداهای کلمه
                </div>

                <div className="cells-row sound-row">

                  {sounds.map((value, index) => (

                    <input
                      key={index}
                      className={`
                        answer-cell
                        sound-cell
                        ${
                          filledSounds.includes(index)
                            ? "input-filled"
                            : ""
                        }
                        ${
                          answerShown
                            ? "answer-visible"
                            : ""
                        }
                      `}
                      value={value}
                      readOnly={answerShown}
                      onChange={(e) =>
                        handleSoundChange(
                          index,
                          e.target.value
                        )
                      }
                      maxLength={2}
                      dir="rtl"
                    />

                  ))}

                </div>

              </div>


              {/* ==========================================
                  REWARD STARS
              ========================================== */}

              <div className="star-reward-area">

                {rewardStars > 0 && (
                  <>
                    <div className="great-message">
                      آفرین! خیلی خوب بود! 🎉
                    </div>

                    <div className="stars">

                      {[1, 2, 3].map((star) => (

                        <span
                          key={star}
                          className="reward-star"
                          style={{
                            animationDelay:
                              `${star * 0.15}s`,
                          }}
                        >
                          ⭐
                        </span>

                      ))}

                    </div>
                  </>
                )}

              </div>


              {/* ==========================================
                  BUTTONS
              ========================================== */}

              <div className="buttons-area">

                <button
                  className="check-btn"
                  onClick={checkAnswer}
                  disabled={hasScored}
                >
                  ✅ بررسی پاسخ
                </button>


                <button
                  className="answer-btn"
                  onClick={showAnswer}
                >
                  💡 نمایش پاسخ
                </button>


                <button
                  className="clear-btn"
                  onClick={clearAnswer}
                  disabled={answerShown}
                >
                  🧹 پاک کردن
                </button>

              </div>


              {/* ==========================================
                  NEXT BUTTON
              ========================================== */}

              <button
                className="next-btn"
                onClick={nextWord}
              >

                {currentIndex <
                currentWords.length - 1
                  ? "کلمه‌ی بعدی ➜"
                  : "🔄 شروع دوباره"}

              </button>


            </div>

          </div>


          {/* =================================================
              BOTTOM MESSAGE
          ================================================= */}

          <div className="bottom-message">

            {hasScored ? (
              <>
                🌟 عالی بود! حالا می‌توانی به کلمه‌ی بعدی بروی.
              </>
            ) : (
              <>
                💭 با دقت به کلمه نگاه کن و خانه‌ها را پر کن.
              </>
            )}

          </div>


        </div>

      </div>
    </>
  );
}


/* =========================================================
   CSS
   ========================================================= */

const styles = `

/* =========================================================
   PAGE
========================================================= */

.word-game-page {

  min-height: 100vh;

  background:
    linear-gradient(
      180deg,
      #eaf7ff 0%,
      #f8fbff 50%,
      #fff8e8 100%
    );

  font-family:
    Tahoma,
    Arial,
    sans-serif;

  color: #333;

  padding: 25px 15px;

  direction: rtl;

}


/* =========================================================
   CONTAINER
========================================================= */

.game-container {

  width: 100%;

  max-width: 1000px;

  margin: auto;

}


/* =========================================================
   SELECTION HEADER
========================================================= */

.selection-header {

  text-align: center;

  margin-bottom: 35px;

}

.big-book {

  font-size: 70px;

  animation:
    bookBounce 2s
    infinite;

}

.selection-header h1 {

  font-size: 36px;

  color: #315c9b;

  margin: 10px 0;

}

.selection-header p {

  font-size: 20px;

  color: #666;

}


/* =========================================================
   SET GRID
========================================================= */

.sets-grid {

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(220px, 1fr)
    );

  gap: 22px;

}


/* =========================================================
   SET CARD
========================================================= */

.set-card {

  border: none;

  background:
    linear-gradient(
      145deg,
      #ffffff,
      #f4faff
    );

  border-radius: 28px;

  padding: 25px 20px;

  min-height: 260px;

  cursor: pointer;

  box-shadow:
    0 10px 25px
    rgba(60, 100, 150, 0.15);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  font-family: inherit;

  color: #333;

}

.set-card:hover {

  transform:
    translateY(-8px)
    scale(1.02);

  box-shadow:
    0 18px 35px
    rgba(60, 100, 150, 0.23);

}

.set-card:active {

  transform:
    translateY(-2px)
    scale(0.98);

}


/* =========================================================
   SET EMOJI
========================================================= */

.set-emoji {

  font-size: 65px;

  margin-bottom: 10px;

}


/* =========================================================
   SET TITLE
========================================================= */

.set-title {

  font-size: 34px;

  font-weight: bold;

  color: #315c9b;

  margin-bottom: 10px;

}


/* =========================================================
   SET DESCRIPTION
========================================================= */

.set-description {

  font-size: 15px;

  color: #777;

  line-height: 1.8;

  min-height: 50px;

}


/* =========================================================
   SET COUNT
========================================================= */

.set-count {

  display: inline-block;

  margin-top: 10px;

  padding: 6px 12px;

  border-radius: 20px;

  background: #fff2c7;

  color: #8a6510;

  font-size: 14px;

}


/* =========================================================
   START SET
========================================================= */

.start-set {

  margin-top: 15px;

  font-size: 17px;

  font-weight: bold;

  color: #2b8a5a;

}


/* =========================================================
   TOP BAR
========================================================= */

.top-bar {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  margin-bottom: 15px;

  flex-wrap: wrap;

}


/* =========================================================
   CHANGE SET
========================================================= */

.change-set-btn {

  border: none;

  background: #ffffff;

  color: #315c9b;

  padding: 10px 16px;

  border-radius: 18px;

  font-size: 15px;

  font-family: inherit;

  cursor: pointer;

  box-shadow:
    0 4px 12px
    rgba(0,0,0,0.08);

  transition: 0.2s;

}

.change-set-btn:hover {

  transform: translateY(-2px);

}


/* =========================================================
   SET NAME
========================================================= */

.set-name {

  font-size: 22px;

  font-weight: bold;

  color: #315c9b;

}


/* =========================================================
   SCORE
========================================================= */

.score-box {

  background: #fff4c4;

  padding: 10px 18px;

  border-radius: 20px;

  font-weight: bold;

  color: #8a6410;

  box-shadow:
    0 4px 10px
    rgba(0,0,0,0.08);

}


/* =========================================================
   PROGRESS
========================================================= */

.progress-section {

  margin-bottom: 20px;

}

.progress-text {

  text-align: center;

  font-size: 15px;

  color: #777;

  margin-bottom: 7px;

}

.progress-bar {

  width: 100%;

  height: 12px;

  background: #dce8f2;

  border-radius: 20px;

  overflow: hidden;

}

.progress-fill {

  height: 100%;

  background:
    linear-gradient(
      90deg,
      #6bc5ff,
      #6edb9a
    );

  border-radius: 20px;

  transition:
    width 0.5s ease;

}


/* =========================================================
   GAME TITLE
========================================================= */

.game-title {

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 15px;

  margin: 15px 0 20px;

}

.game-title h1 {

  margin: 0;

  color: #315c9b;

  font-size: 32px;

}

.game-title span {

  font-size: 35px;

}


/* =========================================================
   HOUSE
========================================================= */

.word-house {

  max-width: 850px;

  margin: auto;

}


/* =========================================================
   ROOF
========================================================= */

.house-roof {

  position: relative;

  width: 85%;

  margin: auto;

  height: 130px;

  background:
    linear-gradient(
      135deg,
      #ff8a8a,
      #ffb36b
    );

  clip-path:
    polygon(
      50% 0,
      100% 100%,
      0 100%
    );

  display: flex;

  justify-content: center;

  align-items: flex-end;

  padding-bottom: 20px;

  box-shadow:
    0 8px 15px
    rgba(0,0,0,0.15);

}


/* =========================================================
   ROOF WORD
========================================================= */

.roof-word {

  color: white;

  font-size: 38px;

  font-weight: bold;

  text-shadow:
    0 3px 5px
    rgba(0,0,0,0.2);

}


/* =========================================================
   HOUSE BODY
========================================================= */

.house-body {

  background: white;

  border-radius:
    0 0 30px 30px;

  padding:
    30px 25px 35px;

  box-shadow:
    0 12px 35px
    rgba(50,80,120,0.18);

}


/* =========================================================
   TARGET AREA
========================================================= */

.target-area {

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 25px;

  min-height: 130px;

  margin-bottom: 20px;

}


/* =========================================================
   TARGET WORD
========================================================= */

.target-word {

  font-size: 50px;

  font-weight: bold;

  color: #333;

  background: #fff9df;

  padding: 15px 30px;

  border-radius: 25px;

  box-shadow:
    inset 0 0 0 3px #ffe7a3;

}


/* =========================================================
   IMAGE
========================================================= */

.word-image {

  width: 120px;

  height: 120px;

  object-fit: contain;

  border-radius: 22px;

  background: #f5fbff;

  padding: 8px;

  box-shadow:
    0 6px 18px
    rgba(0,0,0,0.12);

  animation:
    imageFloat 3s
    ease-in-out
    infinite;

}


/* =========================================================
   SECTION
========================================================= */

.section {

  margin-top: 25px;

}


/* =========================================================
   SECTION TITLE
========================================================= */

.section-title {

  text-align: center;

  font-size: 20px;

  font-weight: bold;

  color: #315c9b;

  margin-bottom: 15px;

}


/* =========================================================
   CELLS ROW
========================================================= */

.cells-row {

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 10px;

  flex-wrap: wrap;

  direction: rtl;

}


/* =========================================================
   ANSWER CELL
========================================================= */

.answer-cell {

  width: 75px;

  height: 75px;

  border:
    3px solid #b8d8ef;

  border-radius: 18px;

  background: #f8fcff;

  text-align: center;

  font-family: Tahoma, Arial, sans-serif;

  font-size: 30px;

  font-weight: bold;

  color: #315c9b;

  outline: none;

  transition:
    transform 0.2s,
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s;

}


/* =========================================================
   FOCUS
========================================================= */

.answer-cell:focus {

  border-color: #65b5ee;

  background: #eef9ff;

  box-shadow:
    0 0 0 5px
    rgba(101,181,238,0.15);

  transform:
    translateY(-3px);

}


/* =========================================================
   INPUT FILLED
========================================================= */

.input-filled {

  animation:
    cellFill 0.35s
    ease-out;

}


/* =========================================================
   CORRECT / ANSWER SHOWN
========================================================= */

.answer-visible {

  background:
    linear-gradient(
      145deg,
      #e2ffe9,
      #f5fff7
    );

  border-color: #62c98a;

  color: #25834e;

  animation:
    answerPop 0.4s
    ease-out;

}


/* =========================================================
   SOUND CELLS
========================================================= */

.sound-cell {

  width: 58px;

  height: 58px;

  font-size: 25px;

}


/* =========================================================
   STARS
========================================================= */

.star-reward-area {

  min-height: 105px;

  text-align: center;

  margin-top: 25px;

}


.great-message {

  font-size: 23px;

  font-weight: bold;

  color: #e39a16;

  margin-bottom: 8px;

  animation:
    messagePop 0.5s
    ease-out;

}


.stars {

  display: flex;

  justify-content: center;

  gap: 8px;

}


.reward-star {

  font-size: 48px;

  display: inline-block;

  animation:
    starPop 0.6s
    ease-out
    forwards;

  opacity: 0;

}


/* =========================================================
   BUTTONS
========================================================= */

.buttons-area {

  display: flex;

  justify-content: center;

  gap: 12px;

  flex-wrap: wrap;

  margin-top: 20px;

}


.buttons-area button {

  border: none;

  border-radius: 18px;

  padding: 13px 20px;

  font-family: inherit;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  transition:
    transform 0.2s,
    box-shadow 0.2s,
    opacity 0.2s;

}


.buttons-area button:hover {

  transform:
    translateY(-3px);

  box-shadow:
    0 7px 15px
    rgba(0,0,0,0.12);

}


.buttons-area button:active {

  transform:
    translateY(0);

}


.buttons-area button:disabled {

  opacity: 0.5;

  cursor: not-allowed;

  transform: none;

}


/* =========================================================
   CHECK
========================================================= */

.check-btn {

  background:
    linear-gradient(
      135deg,
      #72d89c,
      #43b879
    );

  color: white;

}


/* =========================================================
   ANSWER
========================================================= */

.answer-btn {

  background:
    linear-gradient(
      135deg,
      #ffd978,
      #ffbd45
    );

  color: #6c4c00;

}


/* =========================================================
   CLEAR
========================================================= */

.clear-btn {

  background:
    linear-gradient(
      135deg,
      #e5edf4,
      #cfdce8
    );

  color: #4e6170;

}


/* =========================================================
   NEXT BUTTON
========================================================= */

.next-btn {

  display: block;

  width: 80%;

  max-width: 400px;

  margin:
    25px auto 0;

  border: none;

  border-radius: 22px;

  padding: 16px 25px;

  background:
    linear-gradient(
      135deg,
      #659cff,
      #806cff
    );

  color: white;

  font-family: inherit;

  font-size: 20px;

  font-weight: bold;

  cursor: pointer;

  box-shadow:
    0 8px 20px
    rgba(88,110,220,0.25);

  transition:
    transform 0.2s,
    box-shadow 0.2s;

}


.next-btn:hover {

  transform:
    translateY(-4px)
    scale(1.02);

  box-shadow:
    0 12px 25px
    rgba(88,110,220,0.32);

}


.next-btn:active {

  transform:
    translateY(0);

}


/* =========================================================
   BOTTOM MESSAGE
========================================================= */

.bottom-message {

  text-align: center;

  margin-top: 20px;

  color: #697989;

  font-size: 16px;

}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes cellFill {

  0% {
    transform:
      scale(0.7);
    opacity: 0.3;
  }

  70% {
    transform:
      scale(1.12);
  }

  100% {
    transform:
      scale(1);
    opacity: 1;
  }

}


@keyframes answerPop {

  0% {
    transform:
      scale(0.7)
      rotate(-4deg);
    opacity: 0;
  }

  70% {
    transform:
      scale(1.1)
      rotate(2deg);
  }

  100% {
    transform:
      scale(1)
      rotate(0);
    opacity: 1;
  }

}


@keyframes starPop {

  0% {
    transform:
      scale(0)
      rotate(-30deg);
    opacity: 0;
  }

  60% {
    transform:
      scale(1.35)
      rotate(10deg);
    opacity: 1;
  }

  100% {
    transform:
      scale(1)
      rotate(0);
    opacity: 1;
  }

}


@keyframes messagePop {

  0% {
    transform:
      scale(0.5);
    opacity: 0;
  }

  70% {
    transform:
      scale(1.1);
    opacity: 1;
  }

  100% {
    transform:
      scale(1);
  }

}


@keyframes bookBounce {

  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-8px);
  }

}


@keyframes imageFloat {

  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-6px);
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  .word-game-page {

    padding:
      15px 10px;

  }


  .selection-header h1 {

    font-size: 28px;

  }


  .selection-header p {

    font-size: 17px;

  }


  .sets-grid {

    grid-template-columns:
      1fr;

  }


  .set-card {

    min-height: 220px;

  }


  .top-bar {

    justify-content:
      center;

  }


  .set-name {

    order: -1;

    width: 100%;

    text-align: center;

  }


  .game-title h1 {

    font-size: 26px;

  }


  .game-title span {

    font-size: 27px;

  }


  .house-roof {

    width: 95%;

    height: 110px;

  }


  .roof-word {

    font-size: 30px;

  }


  .house-body {

    padding:
      20px 12px 25px;

  }


  .target-area {

    flex-direction:
      column;

    gap: 15px;

  }


  .target-word {

    font-size: 38px;

    padding:
      12px 20px;

  }


  .word-image {

    width: 90px;

    height: 90px;

  }


  .answer-cell {

    width: 62px;

    height: 62px;

    font-size: 25px;

  }


  .sound-cell {

    width: 48px;

    height: 48px;

    font-size: 21px;

  }


  .next-btn {

    width: 95%;

  }

}
`;

