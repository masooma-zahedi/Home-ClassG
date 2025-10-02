import React, { useState } from "react";

// داده‌ها با دسته‌بندی
const wordsData = [
//   {
//     category: " ص",
//     words: ["صابون","اِصرار","صَبر","صَدر","صُحبَت","بَصیرَت","تَصویر","صورَت"],
//   },
//   {
//     category: " غ",
//     words: ["غَذا","باغ","غُرور","غُروب","غار","غَریب","غُرِش","غَضَب","باغدار","بَستر","جَذاب","خَطَر","ضَرب","صَبر","تاریخ","پِدَر","سِپَس","بازار","سَبزی","ساعَت"],
//   },
//   {
//     category: " ف",
//     words: ["فَردا","فَرش","دَفتَر","رَفتَن","شَرَف","عَرف","حَرف","فَراموش","تَفریح","فانوس","سِفید","فارسی","فَریاد","ظَرف","فُروتَن","فَرزاد","فِردوس","فارس","فَرض","تُف"],
//   },
//   {
//     category: "ر",
//     words: ["بَرادَر","بَر","خِرَد","رُخ","بَرباد","پَرچَم","دارَد","تَر","دَرد","رَد","بار","تاجِر","رُب","چَتر","تُرُب","دَر","چَرخ","اَبر","خَرج","بُخار",],
//   },
//   {
//     category: "ز",
//     words: ["بُز","روز","زور","زَرد","زیب","باز","پاز","چیز","زِبر","بازی","تیز","زیر","زَر","خَز","زو","زیبا","زِشت","زار","راز","رُز"],
//   },
  {
    category: "ک",
    words: ["کِتاب","کوکَب","کَبک","کَبود","کوبید","کَفش","کِیک","کَبِد","کِبریت","کَپَک","کِشتی","کیش","کَثیف","کوثَر","کودَک","کاخ","کار","کَشف","کاشی","کوشا",],
  },
//   {
//     category: "گ",
//     words: ["گُربه","گُرگ","گاو","گُل","گوش","گوشی","گاز","تَگ","گُذاشت","توت فَرَنگی","اَگَر","شِگِفت","سازگار","سَگ","گِراف","گُذَر","دِگر","جِگَر","حَق گو","تَگَرگ",],
//   },
//   {
//     category: "ل",
//     words: ["طَلا","لاک","بالا","لیز","قالی","کالا","سالو","لولا","لوک","پِلاک","پولاد","کِلاس","لِباس","بُلور","لوکس","زُلال","جَلال","زِلزِلِه","بالارو","دِلاوَر","لاک پُشت","سالاد",],
//   },
//   {
//     category: "م",
//     words: ["مار","مات","موز","مَغز","مُلک","مَرد","موم","مَکر","ماست","ماسک","مِداد","ماکارونی","ماتیک","موتور","آمار","رام","کَلام","گام","سُماق","مَطبَخ","مُبل","مُپ","موج","سیمُرغ","مُقَوا","مَخمل","مُژده","ماتَم",],
//   },
//   {
//     category: "ن",
//     words: ["نان","اَنار","نارنج","نیش","نَرم","نَقاش","سَنگ","رَنگ","بَنَفش","دَندان","آب نَبات","نَسیم","کَمان","تَکان","نارِنگی","کَفَن","آتَش نِشان","نِگران","نَرگِس","نَوَسان","نازُک","ناقوس","نَعل","ناحَق","نِجات","ناخُن","نازَنین","نَردِبان","نارَس","نازِل","نیکو","دانِش","سَنجاق","نَمَد",],
//   },
//   {
//     category: "س",
//     words: ["سَبَد","سَرباز","سَبز","بَست","سیراب","بَسی","سِپاس","بَسیج","سِز","ساز","سُرب","سُرخ","سِپَر","سَر","اَست","سیر","سَبا","سیری","سیب","سوز",],
//   },
//   {
//     category: "ش",
//     words: ["شِش","شوش","شیشه","باش","پوش","پاش","پیش","بیش","تَشت","چِشم","خوش","خوشی","باشی","شاد","شَب","شور","شیر","شَب رو","شَبَح","بَشیر","شِتاب","چِشید",],
//   },
//   {
//     category: "ض",
//     words: ["ضَرب","ضِد","رِضا","راضی","رضوان","حُضور","وَضع","اِضطِراب","اِضافِه","تَضاد",],
//   },
//   {
//     category: "چ",
//     words: ["چای","چراغ","چتر","چاقو","چشم","چوب","چمن","چرخ","چکمه","چاه","چیپس","چمدان","چارقد","چسب","چنگال"],
//   },
//   {
//     category: "ق",
//     words: ["قاب","رَقیق","حُقوق","نُقرِه","صادِق","قارچ","ناطِق","یَقین","نَقاش","قُدرَت","عاشِق","سَقف","قاشُق","حَقیر","قَشَنگ","قَلب","مَقصَد","قِرمِز","قانون","قامَت",],
//   },
//   {
//     category:"کلاس G",
//     words: ["بام","دَر","بَر","پَر","مار","بَد","دام","پَد","تاب","مادَر","رَد","اَد","مَرد","باد","مام","بار","پا","را","تار","دار"],
//   },
//   {
//     category: "",
//     words: [],
//   },
];

const BrokenGlass = () => {
  const [selectedGroup, setSelectedGroup] = useState(wordsData[0]); // دسته پیش‌فرض
  const [visiblePieces, setVisiblePieces] = useState(
    wordsData[0].words.map(() => true)
  );
  const [searchLetter, setSearchLetter] = useState(""); // نگه داشتن حرف ورودی

  // وقتی گروه تغییر کند، وضعیت خانه‌ها ریست می‌شود
  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    setVisiblePieces(group.words.map(() => true));
  };

  const handleClick = (index) => {
    setVisiblePieces((prev) => {
      const newVisiblePieces = [...prev];
      newVisiblePieces[index] = false;
      return newVisiblePieces;
    });
  };

  // تابعی برای رنگی کردن حرف مورد نظر
  const highlightLetter = (word) => {
    if (!searchLetter) return word;

    return word.split("").map((char, i) => (
      <span
        key={i}
        style={{
          color: char === searchLetter ? " #ac3164f2" : "black", // فقط حرف ورودی قرمز می‌شود
          fontWeight: "bold",
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <>
      {/* فهرست دسته‌ها */}
      <div className="border border-3 border-info rounded my-5"></div>
      <div className="text-center mb-4">
        {wordsData.map((group, idx) => (
          <button
            key={idx}
            className={`btn mx-2 ${
              selectedGroup.category === group.category
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => handleGroupChange(group)}
          >
            {group.category}
          </button>
        ))}
        <button className="btn btn-success" onClick={()=>setVisiblePieces(wordsData[0].words.map(() => true))}> Reset</button>
      </div>

      {/*( این بخش برای کارخانگی حذف شده به خاطر اینکه در گوشی حروف کلمات از هم جدا نمایش داده می شود. ) بخش input */}
      {/* <div className="mb-3 text-center">
        <label className="form-label">حرف مورد نظر:</label>
        <input
          type="text"
          maxLength="1"
          className="form-control w-25 mx-auto text-center"
          value={searchLetter}
          onChange={(e) => setSearchLetter(e.target.value)}
        />
      </div> */}

      {/* نمایش کلمات */}
      <section className="mt-5 border border-info" style={{background:"linear-gradient(135deg, #ecc079ff, #dca4b4ff)"}}>
        <div style={{ }}>
          <div
            className="  row"
            style={{
                //   position: "relative",
            //   height: "300px",
              backgroundColor: "transparent",
            }}
          >
            {selectedGroup.words.map((word, index) => (
              <div
                className="border border-success col-6 col-md-4 col-lg-3"
                key={index}
                onClick={() => handleClick(index)}
                style={{
                  minWidth: "25%",
                //   height: "100%",
                  border: "1px solid rgb(46, 95, 13)",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: visiblePieces[index]
                    ? `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
                        Math.random() * 255
                      }, 0.8)`
                    : "rgb(241, 239, 189)",
                  transition: "background-color 0.9s",
                }}
              >
                {visiblePieces[index] ? (
                  <span
                    style={{
                      color: "rgb(9, 17, 90)",
                      fontWeight: "bold",
                      padding: "15px",
                      fontSize: "36px",
                    }}
                  >
                    {index + 1}
                  </span>
                ) : (
                  <span
                    style={{
                      fontWeight: "bold",
                      padding: "20px",
                      fontSize: "40px",
                    //   marginBottom: "10px",
                    }}
                  >
                    {highlightLetter(word)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrokenGlass;
