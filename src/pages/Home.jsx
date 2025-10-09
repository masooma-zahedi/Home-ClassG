import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import BouncingBalls from "../sections/alphabet/BouncingBalls";
import WordCardsSingle from "../sections/alphabet/WordCardsSingle";

export default function Home() {
  return (<>
    <CardAlphaCompo/> 
    {/* <BrokenGlass/> */}
    {/* <BouncingBalls/> */}
    <WordGameWithCategories initialCategory="وسایل مدرسه" />
    {/* <WordCardsSingle/> */}
  </>)
}
