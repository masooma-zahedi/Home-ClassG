import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { nanoid } from "nanoid";

export const SylabeWords = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [animation, setAnimation] = useState("animate__bounceIn");
  const [selectedDatasetId, setSelectedDatasetId] = useState(9);
  const [sheetOpen, setSheetOpen] = useState(false); // for mobile bottom sheet

  const animations = [
    "animate__bounceIn",
    "animate__fadeIn",
    "animate__zoomIn",
    "animate__lightSpeedInRight",
    "animate__jackInTheBox",
    "animate__rotateIn",
  ];

  const datasets = [
    {
      id: nanoid(),
      titleHead: "کلاس G",
      titleColor: "rgba(58, 210, 111, 1)",
      sylabelBg: "rgba(36, 190, 190, 1)",
      sentenceRow: [
        // [{ word: "بابا", syla: "با + با" }, { word: "سوپ", syla: "سوپ " }, { word: "داد.", syla: "داد" }],
        // [{ word: "بابا", syla: "با + با" }, { word: "توپ", syla: "توپ" }, { word: "داد.", syla: "داد" }],
        // [{ word: "مادَر", syla: "ما + دَر" }, { word: "آب", syla: "آب" }, { word: "داد.", syla: "داد" }],
        // [{ word: "بابَک", syla: "با + بَک" }, { word: "شاد", syla: "شاد" }, { word: "اَست.", syla: "اَست" }],
        // [{ word: "مَت", syla: "مَت" }, { word: "پَد", syla: "پَد" }, { word: "داد.", syla: "داد" }],
        // [{ word: "شَب", syla: "شَب" }, { word: "تار", syla: "تار" }, { word: "است.", syla: "اَست" }],
        // [{ word: "پِدَر", syla: "پِ + دَر" }, { word: "آمَد.", syla: "آ + مَد" }],
        // [{ word: "مادَر", syla: "ما + دَر" }, { word: "دَست", syla: "دَست" }, { word: "داد.", syla: "داد" }],
        // [{ word: "بابا", syla: "با + با" }, { word: "اَسب", syla: "اَسب" }, { word: "را", syla: "را" }, { word: "بُرد.", syla: "بُرد" }],
        // [{ word: "کُمُد", syla: "کُ + مُد" }, { word: "پُر", syla: "پُر" }, { word: "بود.", syla: "بود" }],
        // [{ word: "مَت", syla: "مَت" }, { word: "شاد", syla: "شاد" }, { word: "شُد.", syla: "شُد" }],
        // [{ word: "پِدَر", syla: "پِ + دَر" }, { word: "آب", syla: "آب" }, { word: "داد.", syla: "داد" }],
        // [{ word: "مادَر", syla: "ما + دَر" }, { word: "بوس", syla: "بوس" }, { word: "داد.", syla: "داد" }],
        // [{ word: "بابَک", syla: "با + بَک" }, { word: "تاب", syla: "تاب" }, { word: "را", syla: "را" }, { word: "بَست.", syla: "بَست" }],
        // [{ word: "شَب", syla: "شَب" }, { word: "آرام", syla: "آ + رام" }, { word: "است.", syla: "اَست" }],
        // [{ word: "بابا", syla: "با + با" }, { word: "با", syla: "با" }, { word: "او", syla: "او" },{ word: "آمَد", syla: "آ + مَد" }],
        // [{word:"اَسَد",syla:"اَ+سَد"},{word:"با",syla:""},{word:"اَسب",syla:"اَسب"},{word:"آمَد.",syla:"آ+مَد"}],
        // [{word:"داماد",syla:"دا+ماد"},{word:"با",syla:""},{word:"اَدَب",syla:"اَ+دَب"},{word:"آمَد.",syla:"آ+مَد"}],
        // [{word:"سام",syla:"سام"},{word:"ماست",syla:"ماست"},{word:"داد.",syla:"داد"}],
        // [{word:"بابا",syla:"با+با"},{word:"با",syla:""},{word:"داس",syla:"داس"},{word:"آمَد.",syla:"آ+مَد"}],
        // [{word:"داماد",syla:"دا+ماد"},{word:"بادام",syla:"با+دام"},{word:"با",syla:""},{word:"سَبَد",syla:"سَ+بَد"},{word:"داد.",syla:"داد"}],
        // [{word:"سام",syla:"سام"},{word:"با",syla:""},{word:"داماد",syla:"دا+ماد"},{word:"آمَد.",syla:"آ+مَد"}],
        // [{word:"زاد",syla:"زا + د"},{word:"زار",syla:"زا + ر"},{word:"زان",syla:"زا + ن"},{word:"زاس",syla:"زا + س"},{word:"زام",syla:"زا + م"}],
        // [{word:"لال",syla:"لا + ل"},{word:"لاک",syla:"لا + ک"},{word:"لام",syla:"لا + م"},{word:"لاس",syla:"لا + س"},{word:"لار",syla:"لا + ر"}],
        // [{word:"مار",syla:"ما + ر"},{word:"ماس",syla:"ما + س"},{word:"ماش",syla:"ما + ش"},{word:"ماد",syla:"ما + د"},{word:"مادَر",syla:"ما + دَر"},],
        // [{word:"بار",syla:"با + ز"},{word:"باد",syla:"با + د"},{word:"باک",syla:"با + ک"},{word:"باش",syla:"با + ش"},{word:"بال",syla:"با + ل"},],
        // [{word:"تاب",syla:"تا + ب"},{word:"تار",syla:"تا + ر"},{word:"تاس",syla:"تا + س"},{word:"تاک",syla:"تا + ک"},{word:"تام",syla:"تا + م"},],
        // [{word:"داد",syla:"دا + د"},{word:"دار",syla:"دا + ر"},{word:"داش",syla:"دا + ش"},{word:"داس",syla:"دا + س"},{word:"دام",syla:"دا + م"},],
        // [{word:"سام",syla:"سا + م"},{word:"ساک",syla:"سا + ک"},{word:"سال",syla:"سا + ل"},{word:"سار",syla:"سا + ر"},{word:"سان",syla:"سا + ن"},],
        [
          { word: "نور", syla: "نو + ر" },
          { word: "نوم", syla: "نو + م" }
        ],
        [
          { word: "دور", syla: "دو + ر" },
          { word: "دود", syla: "دو + د" }
        ],
        [
          { word: "بوس", syla: "بو + س" },
          { word: "بوم", syla: "بو + م" }
        ],
        [
          { word: "مور", syla: "مو + ر" },
          { word: "موش", syla: "مو + ش" }
        ],
        [
          { word: "سور", syla: "سو + ر" },
          { word: "سود", syla: "سو + د" }
        ],
        [
          { word: "کور", syla: "کو + ر" },
          { word: "کود", syla: "کو + د" }
        ],
        [
          { word: "رود", syla: "رو + د" },
          { word: "روز", syla: "رو + ز" }
        ],
        [
          { word: "زور", syla: "زو + ر" },
          { word: "زود", syla: "زو + د" }
        ],
        [
          { word: "سوز", syla: "سو + ز" },
          { word: "سور", syla: "سو + ر" }
        ],
        [
          { word: "نور", syla: "نو + ر" },
          { word: "نوس", syla: "نو + س" }
        ],

        //  صدای کشیده ی 
        
        // [
        //   { word: "سیب", syla: "سی + ب" },
        //   { word: "شیر", syla: "شی + ر" }
        // ],
        // [
        //   { word: "دیر", syla: "دی + ر" },
        //   { word: "پیر", syla: "پی + ر" },
        //   { word: "سیر", syla: "سی + ر" },
        //   { word: "تیر", syla: "تی + ر" }
        // ],
        // [
        //   { word: "گیر", syla: "گی + ر" },
        //   { word: "میر", syla: "می + ر" },
        //   { word: "میل", syla: "می + ل" },
        //   { word: "ریش", syla: "ری + ش" }
        // ],
        // [
        //   { word: "دیل", syla: "دی + ل" },
        //   { word: "بیل", syla: "بی + ل" },
        //   { word: "نیز", syla: "نی + ز" },
        //   { word: "نیر", syla: "نی + ر" }
        // ],
        // [
        //   { word: "کیل", syla: "کی + ل" },
        //   { word: "میر", syla: "می + ر" },
        //   { word: "میل", syla: "می + ل" }
        // ]





      ],
    },

  ];

  const currentDataset = datasets.find((ds) => ds.id === selectedDatasetId) || datasets[0];

  const handleSelect = (word) => {
    setSelectedWord(word);
    setSheetOpen(true); // open bottom sheet on mobile when selecting
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    setAnimation(randomAnim);
  };

  // inject small css for responsive behaviors (keeps component self-contained)
  useEffect(() => {
    const css = `
      .main-box{
        background: linear-gradient(135deg, #ecff74bd, #0d983b66);
        padding:3px;
      }
      /* card appearance and hover for pointer devices */
      .syl-card {
        min-width: 100px;
        max-width: 140px;
        border-radius: 18px;
        transition: transform .18s ease, box-shadow .18s ease;
        user-select: none;
      }
      .syl-card:active { transform: translateY(2px); }
      @media (hover: hover) and (pointer: fine) {
        .syl-card:hover { transform: translateY(-6px); box-shadow: 0 10px 20px rgba(0,0,0,0.12); }
      }

      /* horizontal scroll row for small screens */
      .syl-row {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 6px;
      }
      .syl-row .syl-card { display: inline-block; margin-right: 2px; }

      /* remove scrollbar gap on some browsers */
      .syl-row::-webkit-scrollbar { height: 8px; }
      .syl-row::-webkit-scrollbar-thumb { border-radius: 10px; background: rgba(0,0,0,0.12); }

      /* bottom sheet for small screens */
      .bottom-sheet {
        display: none;
      }
      @media (max-width: 767.98px) {
        .desktop-right { display: none !important; } /* hide right column on mobile */
        .bottom-sheet {
          display: flex;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0px;
          z-index: 1050;
          border-top-left-radius: 14px;
          border-top-right-radius: 14px;
          box-shadow: 0 -8px 30px rgba(0,0,0,0.18);
          transition: transform .28s cubic-bezier(.2,.9,.2,1);
        }
        .bottom-sheet.closed { transform: translateY(86%); } /* mostly hidden bar */
        .bottom-sheet.open { transform: translateY(0%); } /* visible */
        .sheet-handle {
          width: 46px;
          height: 6px;
          border-radius: 12px;
          background: rgba(255,255,255,0.5);
          margin-bottom: 10px;
        }
        .sheet-content {
          padding: 12px;
          width: 100%;
        }
        .sheet-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .syl-card {
          min-width: 70px;
          // max-width: 80px;
          border-radius: 18px;
          transition: transform .18s ease, box-shadow .18s ease;
          user-select: none;
        }

      }
      /* ensure sticky on desktop works nicely */
      @media (min-width: 768px) {
        .bottom-sheet { display: none !important; }
      }
    `;
    const styleTag = document.createElement("style");
    styleTag.setAttribute("data-from", "SylabeWords");
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section className="mt-5 rounded-3 main-box" dir="rtl">
      {/* dataset buttons */}
      <div className="my-4 d-flex flex-wrap gap-2 justify-content-center">
        {datasets.map((ds) => (
          <button
            key={ds.id}
            className={`btn ${selectedDatasetId === ds.id ? "btn-primary" : "btn-outline-primary"} btn-lg`}
            onClick={() => { setSelectedDatasetId(ds.id); setSelectedWord(""); setSheetOpen(false); }}
            aria-pressed={selectedDatasetId === ds.id}
          >
            {ds.titleHead}
          </button>
        ))}
      </div>

      <div className="row g-4 mt-3">
        {/* Left: sentences - occupies full width on mobile */}
        <div className="col-md-7">
          <h2
            className="text-center text-light py-3 rounded-3 shadow"
            style={{ backgroundColor: currentDataset.titleColor || "#6c5ce7" }}
          >
            {currentDataset.titleHead}
          </h2>

          <div className="d-flex flex-column gap-3 mt-4">
            {currentDataset.sentenceRow.map((sentence, rowIndex) => (
              <div
                key={rowIndex}
                className="syl-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "6px 6px",
                }}
                aria-label={`ردیف جمله ${rowIndex + 1}`}
              >
                {sentence.map((item, wordIndex) => (
                  <button
                    key={wordIndex}
                    className="card text-center  syl-card  shadow-sm border-0 "
                    style={{
                      background: "linear-gradient(135deg, #dfcb63ff, #81bfecff)",
                      color: "#7a2222ff",
                      minHeight: "60px",
                      flex: "0 0 auto",
                    }}
                    onClick={() => handleSelect(item.syla || item.word)}
                    aria-label={`انتخاب کلمه ${item.word}`}
                  >
                    <div className="card-body d-flex justify-content-center align-items-center p-1" dir="rtl">
                      <h5 className="fw-bold mt-2" style={{ fontSize: "20px" }}>{item.word}</h5>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right: desktop sticky display */}
        <div className="col-md-5 desktop-right">
          <div
            className="d-flex flex-column justify-content-center align-items-center shadow-lg rounded-4 p-4"
            style={{
              minHeight: "350px",
              background: currentDataset.sylabelBg || "#cece00ff",
              position: "sticky",
              top: "20px",
            }}
            aria-live="polite"
          >
            {selectedWord ? (
              <h1
                key={selectedWord + animation}
                className={`display-2 fw-bold text-light animate__animated ${animation}`}
                style={{ fontSize: "3.2rem", textAlign: "center", lineHeight: 1.05 }}
              >
                {selectedWord}
              </h1>
            ) : (
              <span className="fs-5 text-light">یک کلمه را انتخاب کن ✨</span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom sheet for mobile */}
      <div
        className={`bottom-sheet ${sheetOpen ? "open" : "closed"}`}
        role="region"
        aria-label="نمایش سیلاب‌ها"
        style={{ background: currentDataset.sylabelBg || "#00a1ceff" }}
      >
        <div className="sheet-content d-flex flex-column" style={{ width: "100%" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100%", paddingTop: 8 }}
          >
            <div className="sheet-handle" aria-hidden="true"></div>
          </div>

          <div className="sheet-preview d-flex align-items-center gap-2">
            <div style={{ flex: 1 }}>
              {selectedWord ? (
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="small text-white-50">انتخاب شده</div>
                      <div className="fw-bold text-white" style={{ fontSize: "1.4rem" }}>{selectedWord}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-white-50">یک کلمه را انتخاب کن ✨</div>
              )}
            </div>

            <div>
              <button
                className="btn btn-sm btn-light"
                onClick={() => setSheetOpen((s) => !s)}
                aria-expanded={sheetOpen}
                aria-controls="sheet-full"
              >
                {sheetOpen ? "بستن" : "نمایش"}
              </button>
            </div>
          </div>

          {/* expanded content area (only visible when open) */}
          <div
            id="sheet-full"
            style={{
              marginTop: 10,
              display: sheetOpen ? "block" : "none",
            }}
          >
            {selectedWord && (
              <div className={`pb-3 animate__animated ${animation}`} style={{ textAlign: "center" }}>
                <div className="pb-4" style={{ fontSize: "3.2rem", fontWeight: 800, color: "white" }}>{selectedWord}</div>
              </div>
            )}

            {/* optional: quick list of a few tips or buttons */}
            {/* <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-sm btn-light flex-grow-1"
                onClick={() => {
                  // example action: clear selection
                  setSelectedWord("");
                  setSheetOpen(false);
                }}
              >
                پاک کردن
              </button>
              <button
                className="btn btn-sm btn-outline-light flex-grow-1"
                onClick={() => {
                  // keep selection but close sheet
                  setSheetOpen(false);
                }}
              >
                بستن
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
