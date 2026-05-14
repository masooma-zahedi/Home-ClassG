import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BouncingBalls() {
  // ✅ دسته‌های مختلف
  const categories = {
    // "click to start":["سَبَد","سَرباز","سَبز","بَست","سیراب","بَسی","سِپاس","بَسیج","سِز","ساز","سُرب","سُرخ","سِپَر","سَر","اَست","سیر","سَبا","سیری","سیب","سوز",],
    // "click to start":["جِت","جو","جیب","جور","جوراب","جِلو","جُدا","جِرم","جَدید","جِسم","جُک"]
    "click to start": ["صابون","اِصرار","صَبر","صَد","صُحبَت","بَصیرَت","صابِر","صورَت"],

  };

  const colors = ["#ff6b6b", "#6bcfff", "#ffd93d", "#6bff95", "#c86bff", "#ff9f40"];

  const [selectedCategory, setSelectedCategory] = useState("click to start");
  const [words, setWords] = useState(categories["click to start"]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const [usedWords, setUsedWords] = useState({categories});
  const [gameOver, setGameOver] = useState(false);
  const [showList , setShowList] = useState(true)

  // ✅ تغییر دسته → ریست بازی
  const changeCategory = (cat) => {
    setSelectedCategory(cat);
    setWords(categories[cat]);
    setUsedWords({});
    setActiveIndex(null);
    setPaused(false);
    setGameOver(false);
  };

   // ✅ صداها
  const popSound = new Audio(`${process.env.PUBLIC_URL}/sounds/pop-1.wav`);
  const wooshSound = new Audio(`${process.env.PUBLIC_URL}/sounds/pop-2.wav`);
  const clapSound = new Audio(`${process.env.PUBLIC_URL}/sounds/clap-1.mp3`);
  // const softSound = new Audio("/sounds/soft-1.mp3");

  // ✅ انتخاب با کیبورد 1 تا 6
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= "1" && e.key <= "6") {
        const index = parseInt(e.key) - 1;
        handleClick(index);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });
  // useEffect(()=>{
  //   softSound.volume = 0.1;
  //   softSound.play();
  //   setTimeout(() => {
  //       softSound.volume = 0.1;
  //     softSound.play();
  //     }, 335000);

  // },[])
   
  const handleClick = (index) => {
    if (gameOver) return;

    if (activeIndex === index) {
      // دوباره کلیک → بستن و حذف کلمه
      const updatedUsedWords = { ...usedWords };
      delete updatedUsedWords[index];
      setUsedWords(updatedUsedWords);

       wooshSound.play(); // 🔊 صدای محو شدن

      if (words.length === 0) {
        setGameOver(true);
      } else {
        setActiveIndex(null);
        setPaused(false);
      }
    } else {
      if (words.length > 0) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setUsedWords({ ...usedWords, [index]: randomWord });
        setWords(words.filter((w) => w !== randomWord));
        setActiveIndex(index);
        setPaused(true);
        popSound.play(); // 🔊 صدای انتخاب توپ
      } else {
        setGameOver(true);
        setActiveIndex(index);
      }
    }
  };

  const resetGame = () => {
    setWords(categories[selectedCategory]);
    setUsedWords({});
    setActiveIndex(null);
    setPaused(false);
    setGameOver(false);
  };

  if (gameOver === true ) {
    console.log('hi');
    
  clapSound.play();
}

  const softSoundPlay = ()=>{
    document.getElementById("myAudio").volume = 0.1;
    document.getElementById("myAudio").play()
  }

  return (
    <div className="position-relative p-3  rounded-3 my-5 container" style={{ height: "97vh", background:"linear-gradient(135deg, #FFDEE9, #B5FFFC)"}}>
        <h2 className="text-center text-danger border border-3 border-danger p-2 rounded mb-3">بازی کلمات</h2>
      <audio id="myAudio" src={`${process.env.PUBLIC_URL}/sounds/soft-1.mp3`} preload="auto"></audio>
      <button className="btn btn-info" onClick={softSoundPlay}>
        Play Sound
      </button>
      {/* ✅ منوی انتخاب دسته */}
      <div className="d-flex justify-content-start mt-3 mb-5">
        {/* <button className="btn btn-warning outLine-none mx-2" onClick={()=>setShowList(!showList)}>فهرست</button> */}
        {showList && Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat)}
            className={`btn m-1 ${selectedCategory === cat ? "btn-primary" : "btn-outline-primary"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ توپ‌ها */}
      <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ height: "80%" }}>
        {Array.from({ length: 5 }).map((_, index) => {
          const randomSize = 60 + Math.floor(Math.random() * 50);

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`ball ${activeIndex === index ? "active" : ""} ${gameOver ? "celebrate" : ""}`}
              style={{
                backgroundColor: colors[index % colors.length],
                width: activeIndex === index ? (gameOver ? 180 : 120) : randomSize,
                height: activeIndex === index ? (gameOver ? 180 : 120) : randomSize,
                animationDelay: `${index * 0.3}s`,
                animationPlayState: paused && !gameOver ? "paused" : "running",
                
              }}
            >
              {usedWords[index] ? (
                <span className="word">
                  {gameOver ? "پایان 🎉" : usedWords[index]}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* توپ کوچک ریست */}
      <div className="reset-ball" onClick={resetGame}>
        🔄
      </div>

      <style>{`
        .ball {
          border-radius: 50%;
          margin: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.6s ease;
          animation: crazyBounce 1s ease-in-out infinite;
        }

        .ball.active {
          transform: scale(1.5);
          z-index: 10;
        }

        .ball.celebrate {
          animation: spinDance 1s linear infinite;
        }

        .word {
          font-size: 22px;
          color: #8b2c2cff;
          opacity: 0;
          animation: fadeIn 0.6s forwards;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        @keyframes crazyBounce {
          0%   { transform: translateY(0); }
          25%  { transform: translateY(-80px); }
          50%  { transform: translateY(0); }
          75%  { transform: translateY(-40px); }
          100% { transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* شادی بعد از پایان */
        @keyframes spinDance {
          0%   { transform: rotate(0deg) scale(1); }
          25%  { transform: rotate(10deg) scale(1.4); }
          50%  { transform: rotate(-10deg) scale(1); }
          75%  { transform: rotate(10deg) scale(1.3); }
          100% { transform: rotate(0deg) scale(1); }
        }

        .reset-ball {
          position: absolute;
          top: 60px;
          right: 60px;
          width: 40px;
          height: 40px;
          background-color: #2eaed1ff;
          color: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          cursor: pointer;
          animation: resetBounce 0.7s ease-in-out infinite;
        }

        @keyframes resetBounce {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}














      <style>{`
        .ball {
          border-radius: 50%;
          margin: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.6s ease;
          animation: crazyBounce 1s ease-in-out infinite;
        }

        .ball.active {
          transform: scale(1.5);
          z-index: 10;
        }

        .ball.celebrate {
          animation: spinDance 1s linear infinite;
        }

        .word {
          font-size: 22px;
          color: #8b2c2cff;
          opacity: 0;
          animation: fadeIn 0.6s forwards;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        @keyframes crazyBounce {
          0%   { transform: translateY(0); }
          25%  { transform: translateY(-80px); }
          50%  { transform: translateY(0); }
          75%  { transform: translateY(-40px); }
          100% { transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* شادی بعد از پایان */
        @keyframes spinDance {
          0%   { transform: rotate(0deg) scale(1); }
          25%  { transform: rotate(10deg) scale(1.4); }
          50%  { transform: rotate(-10deg) scale(1); }
          75%  { transform: rotate(10deg) scale(1.3); }
          100% { transform: rotate(0deg) scale(1); }
        }

        .reset-ball {
          position: absolute;
          top: 60px;
          right: 60px;
          width: 40px;
          height: 40px;
          background-color: #2eaed1ff;
          color: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          cursor: pointer;
          animation: resetBounce 0.7s ease-in-out infinite;
        }

        @keyframes resetBounce {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>