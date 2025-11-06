import React, { useState, useEffect, useCallback } from 'react';

const wordCategories = {
  "کلاس G-ن": ["نان","اَنار","نیش","نَرم","دَندان","آب نَبات","نَسیم","کَمان","تَکان","آتَش نِشان","نَردِبان","نارَس","نیکو","دانِش","نَمَد"],
};

const getRandomColor = () => {
  const colors = ['#90e8aa', '#90e0a3', '#fff3cd', '#87e3ea', '#85ccf0', '#88a8ea', '#c786eb', '#aae897'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const WordFlipBox = () => {
  const [selectedCategory, setSelectedCategory] = useState('کلاس G-ن');
  const [words, setWords] = useState(wordCategories[selectedCategory]);
  const [currentWord, setCurrentWord] = useState('');
  const [isSpinning, setIsSpinning] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [bgColor, setBgColor] = useState('#f8bcbc');
  const [showSecondBox, setShowSecondBox] = useState(false);
  const [showList, setShowList] = useState(true);

  // چرخش باکس
  useEffect(() => {
    let animation;
    if (isSpinning) {
      animation = setInterval(() => {
        setRotation((prev) => prev + 6);
      }, 16);
    }
    return () => clearInterval(animation);
  }, [isSpinning]);

  // تغییر دسته‌بندی
  useEffect(() => {
    setWords(wordCategories[selectedCategory]);
    setCurrentWord('');
    setIsSpinning(true);
    setRotation(0);
    setShowSecondBox(false);
  }, [selectedCategory]);

  // عملکرد توقف/شروع
  const handleClick = useCallback(() => {
    if (isSpinning && words.length > 0) {
      setIsSpinning(false);
      const randomIndex = Math.floor(Math.random() * words.length);
      const selected = words[randomIndex];
      const updatedWords = words.filter((_, i) => i !== randomIndex);
      setCurrentWord(selected);
      setWords(updatedWords);
      setBgColor(getRandomColor());
      setShowSecondBox(false);
    } else if (!isSpinning && words.length > 0) {
      setCurrentWord('');
      setIsSpinning(true);
      setShowSecondBox(false);
    }
  }, [isSpinning, words]);

  // دکمه Space
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClick]);

  // ✨ نمایش خودکار کلمه بعد از 2 ثانیه
  useEffect(() => {
    if (currentWord && !isSpinning) {
      const timer = setTimeout(() => {
        setShowSecondBox(true);
      }, 2000); // بعد از ۵ ثانیه
      return () => clearTimeout(timer);
    }
  }, [currentWord, isSpinning]);

  const resetGame = () => {
    setWords(wordCategories[selectedCategory]);
    setCurrentWord('');
    setIsSpinning(true);
    setRotation(0);
    setBgColor('#f4c3c3');
    setShowSecondBox(false);
  };

  return (
    <div className="container border p-4 my-5 border-success border-2 rounded" style={{background:"linear-gradient(135deg, #eb953ad3, #ee3a6dd6)"}}>
      <div className="container text-center mt-5">
        <style>{`
          .fade-slide-in {
            animation: fadeSlideIn 0.7s ease forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          @keyframes fadeSlideIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* انتخاب دسته */}
        <div className="mb-5 text-end">
          <h5>
            انتخاب دسته:{" "}
            <button className="btn btn-sm btn-warning" onClick={() => setShowList(!showList)}>
              {showList ? "HideList" : "ShowList"}
            </button>
          </h5>
          {showList &&
            Object.keys(wordCategories).map((category) => (
              <button
                key={category}
                className={`btn btn-sm me-2 mb-2 ${selectedCategory === category ? 'btn-success' : 'btn-outline-secondary'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
        </div>

        {/* باکس دوم چرخان */}
        <div
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: '#ffe4b5',
            borderRadius: '20px',
            position: 'absolute',
            left: '50%',
            transform: `translateX(-50%) rotate(${-rotation}deg)`,
            transition: isSpinning ? 'none' : 'transform 0.3s ease',
            zIndex: 0,
          }}
        ></div>

        {/* باکس اصلی کلمه */}
        <div
          onClick={handleClick}
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: bgColor,
            color: '#000',
            border: '2px solid #333',
            borderRadius: '15px',
            cursor: 'pointer',
            fontSize: '3rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'none' : 'transform 0.3s ease',
            zIndex: 1,
            position: 'relative',
            direction: 'rtl',
            textAlign: 'center',
          }}
        >
          {currentWord}
        </div>

        {/* دکمه‌ها */}
        <div className="my-5">
          <button className="btn btn-primary me-2" onClick={resetGame}>شروع دوباره</button>
        </div>

        {/* پیام پایان */}
        {words.length === 0 && !isSpinning && (
          <p className="mt-3 text-success">همهٔ کلمات این دسته نمایش داده شدند!</p>
        )}

        {/* باکس دوم نمایش کلمه */}
        {showSecondBox && currentWord && (
          <div
            className="mt-4 h1 p-3 rounded border fade-slide-in"
            style={{
              backgroundColor: '#e0f7fa',
              color: '#a02727ff',
              // fontSize: '1.5rem',
              maxWidth: '300px',
              margin: '0 auto',
            }}
          >
            {currentWord}
          </div>
        )}

        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <span>WordFlipBox</span>
    </div>
  );
};

export default WordFlipBox;
