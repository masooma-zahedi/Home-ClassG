import React, { useState, useEffect } from "react";

export default function SunWordsSmooth() {
  const categories = {
    // صداآ: { circle: "ا", boxes: ["با","تا","کا","را","ما","پا","دا","کا","دا","پا","آ","کا"] },
    // صدا_و: { circle: "او-و", boxes: ["تو","او","کو","بو","پو","رو","دو","مو","کو"] },
    // صداکوتاه2: { circle: "-ُ -ِ -َ", boxes: ["بَ", "رِ","تُ","پُ","دَ","تَ","اُ","بِ","تِ","پِ","رَ","تِ","دِ","اِ","بُ","تَ","رُ","پَ","اُ","دُ","تُ"] },
    // ه: { circle: "کلمات ه", boxes: ["هیزُم","هَمکار","هَمر اه","هَشتُم","هُوش","هِزارپا","هَمه","کُوه","چاه","راه","نامِه","خانِه","شانِه","کاه","دانِه","ماه","سِپیدِه","آهُو","شیشِه","کُلاه"] },
    // صدا_م: { circle: "م", boxes: ["مار","مات","موز","مَغز","مَرد","موم","ماست","مِداد","موتور","آمار","رام","مُپ","موج","مُژده","ماتَم"] },
  صدا_ز: {circle: "ز", boxes: ["بُز","روز","زور","زَرد","زیب","باز","پاز","زِبر","بازی","تیز","زیر","زَر","زو","زیبا","زِشت","زار","راز","رُز"]},

  };

  const colors = [
    "#f44336", "#e91e63", "#9c27b0", "#3f51b5", "#2196f3",
    "#009688", "#4caf50", "#ff9800", "#795548", "#607d8b"
  ];

  const [category, setCategory] = useState("صدا_ز");
  const [words, setWords] = useState([...categories[category].boxes]);
  const [circleText, setCircleText] = useState(categories[category].circle);
  const [selected, setSelected] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [size, setSize] = useState(320);
  const [rotating, setRotating] = useState(false);
  const [showList, setShowList] = useState(false);

  // Responsive
  useEffect(() => {
    const resize = () => {
      const w = Math.min(window.innerWidth, 480);
      setSize(w - 40);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const radius = size * (window.innerWidth > 768 ? 0.45 : 0.38);

  const spin = () => {
    if (words.length === 0) return;
    setSelected(null);
    setRotating(true);

    const idx = Math.floor(Math.random() * words.length);
    const step = 360 / words.length;
    const target = -90 - idx * step;

    const extraTurns = 3;
    setRotation(rotation + extraTurns * 360 + target);

    setTimeout(() => setSelected(idx), 2500);
    setTimeout(() => setRotating(false), 2500);
  };

  const removeSelected = () => {
    if (selected === null) return;
    const newWords = words.filter((_, i) => i !== selected);
    setWords(newWords);
    setSelected(null);
  };

  const resetAll = () => {
    setWords([...categories[category].boxes]);
    setSelected(null);
    setRotation(0);
  };

  return (
    <div className="h-75 h-md-100 h-lg-75 pb-5" style={{ padding: 20,height:"", fontFamily: " Arial, sans-serif",background:"linear-gradient(135deg, #98ecf2ff, #aef2b7ff)" }}>
      {/* دکمه نمایش/پنهان فهرست */}
      <button
        onClick={() => setShowList(!showList)}
        style={{
          padding: "8px 12px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          background: "#4caf50",
          color: "#fff",
          marginBottom: 12,
        }}
      >
        {showList ? "پنهان کردن دسته‌ها" : "نمایش دسته‌ها"}
      </button>
                <button
          onClick={resetAll}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background: "#607d8b",
            color: "#fff",
            marginLeft:"5px"
          }}
        >
          ریست
        </button>
      {showList && (
        <div style={{ marginBottom: 20, display: "flex", flexWrap: "wrap", gap: 10 }}>
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setWords([...categories[cat].boxes]);
                setCircleText(categories[cat].circle);
                setSelected(null);
                setRotation(0);
              }}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: category === cat ? "#4caf50" : "#ddd",
                color: category === cat ? "#fff" : "#000",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* 🔺 Arrow */}
      {/* <div style={{ textAlign: "center", fontSize: 28, marginBottom: -8 }}>🔺</div> */}

      {/* ☀️ Circle */}
      <div
        style={{
          width: size,
          height: size,
          margin: "0 auto",
          position: "relative",
          touchAction: "manipulation",
        }}
      >
        {words.map((w, i) => {
          const step = 360 / words.length;
          const angle = i * step + rotation;
          const isSel = selected === i;

          const translateY = isSel ? 0 : -radius; // Selected moves to center
          const scale = isSel ? 2.8 : 1;          // Selected scales up
          const fadeOthers = selected !== null && !isSel ? 0.35 : 1;
          const boxWidth = Math.max(size * 0.12, w.length * 16);

          return (
            <div
              // className="py-2 px-3"
              key={i}
              style={{
                position: "absolute",
                left: "38%",
                top: "50%",
                transform: `rotate(${angle}deg) translateY(${translateY}px) rotate(${-angle}deg) scale(${scale})`,
                minWidth: boxWidth,
                height: size * 0.16,
                borderRadius: 16,
                background: colors[i % colors.length],
                color: "#fff",
                fontSize: size * 0.05,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 14px rgba(0,0,0,.2)",
                transition: "transform 2.5s cubic-bezier(.2,.8,.2,1), opacity .6s",
                opacity: fadeOthers,
                transformOrigin: "center center",
                zIndex: isSel ? 3 : 1,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                // padding: "5px",
              }}
              onClick={removeSelected}
            >
              {w}
            </div>
          );
        })}

        {/* 🌕 Center Button */}
        <div
          onClick={spin}
          style={{
            width: size * 0.30,
            height: size * 0.30,
            borderRadius: "50%",
            background: "#FFD54F",
            position: "absolute",
            left: "46%",
            top: "57%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: size * 0.06,
            fontWeight: 700,
            cursor: "pointer",
            userSelect: "none",
            boxShadow: "0 8px 20px rgba(0,0,0,.25)",
            touchAction: "manipulation",
          }}
        >
          بچرخان
        </div>
      </div>

      {/* دکمه‌های کنترل */}
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
        {/* <button
          onClick={removeSelected}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background: "#ff5722",
            color: "#fff",
          }}
        >
          حذف واژه وسط
        </button> */}


      </div>
    </div>
  );
}
