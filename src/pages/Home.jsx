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
import MatchingLettersPicturs from "../sections/alphabet/MatchingLettersPicturs";
import SunWords from "../sections/alphabet/SunWords";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-primary text-center m-2 rounded">بچه ها حرف چ را یاد گرفتند و جملات زیر را با آنها تمرین کنید و  از روی 4 جمله آن بنویسند.   </h4>
      {/* <BrokenGlass/>   */}
      {/* <SunWords /> */}
      {/* <ObjectSentenceGame/> */}
      {/* <BouncingBalls/> */}
      <SylabeWords/>
    {/* <VideoCard
      title="قصه کوتاه امروز"
      description="متن فارسی داستان زیر را بخوانید."
      videoFileName={`${process.env.PUBLIC_URL}/video/big&big.mp4`}  // فقط اسم فایل ویدیوی mp4
    /> */}
        {/* <WordFlipBox/> */}
      {/* <SpellingGame/> */}
      {/* <MatchingLettersPicturs/> */}

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

    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
    {/* <WordCardsSingle/> */}   

  </>)
}
