import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import BouncingBalls from "../sections/alphabet/BouncingBalls";
import WordCardsSingle from "../sections/alphabet/WordCardsSingle";
import { CarouselAlphaExp } from "../sections/alphabet/CarouselAlphaExp";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import { SylabeWords } from "../sections/alphabet/SylabeWords";
import VideoCard from "../sections/alphabet/VideoCard";
import WordFlipBox from "../sections/alphabet/WordFlipBox";
import SpellingGame from "../sections/alphabet/SpellingGame";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-primary text-center m-2 rounded">بچه ها اسم حشرات را به فارسی یاد بگیرند. جملات داده شده را تمرین و از روی آن یک بار بنویسند. حروف الفبا و صداهای کوتاه و بلند را تمرین کنند.<span style={{color:" #eb1a82ff"}} className="">(تا این حروف  و کلماتی که با آن ساخته می شود را خوب یاد نگیرند حرف جدیدی درس داده نمیشه.)</span>  </h4>
      {/* <ObjectSentenceGame/> */}
    {/* <VideoCard
      title="قصه کوتاه امروز"
      description="متن فارسی داستان زیر را بخوانید."
      videoFileName={`${process.env.PUBLIC_URL}/video/bigThings.mp4`}  // فقط اسم فایل ویدیوی mp4
    /> */}
        {/* <WordFlipBox/> */}
      <SpellingGame/>
    <SylabeWords/>
    <CardAlphaCompo/> 
    <div className="my-4">
      <h4 className="my-4 text-center bg-info p-3 rounded">صداهای کوتاه</h4>
      <CarouselAlphaExp idCarouselAlpha="shorthref1"  dataCarousel="alphaShortCrousel"/>
    </div>
    <div className="border border-3 border-primary rounded"></div>
    <div className="my-4">
      <h4 className="my-4 text-center bg-warning p-3 rounded">صداهای کشیده</h4>
    <CarouselAlphaExp idCarouselAlpha="longhref1"  dataCarousel="alphaLongCrousel"/>
    </div>
    {/* <BrokenGlass/> */}

    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
    {/* <WordCardsSingle/> */}   
     {/* <BouncingBalls/> */}

  </>)
}
