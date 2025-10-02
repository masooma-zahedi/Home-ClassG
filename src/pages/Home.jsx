import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";

export default function Home() {
  return (<>
    <CardAlphaCompo/> 
    {/* <BrokenGlass/> */}
    <WordGameWithCategories initialCategory="وسایل مدرسه" />
  </>)
}
