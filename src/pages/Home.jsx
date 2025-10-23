import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import BouncingBalls from "../sections/alphabet/BouncingBalls";
import WordCardsSingle from "../sections/alphabet/WordCardsSingle";
import { CarouselAlphaExp } from "../sections/alphabet/CarouselAlphaExp";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import { SylabeWords } from "../sections/alphabet/SylabeWords";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-primary text-center m-2 rounded">بچه ها امروز حرف س را یاد گرفتند. بچه ها از روی جملات زیر دو بار بنویسند. </h4>
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
    <SylabeWords/>
    {/* <ObjectSentenceGame/> */}

    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
    {/* <WordCardsSingle/> */}   
     {/* <BouncingBalls/> */}

  </>)
}
