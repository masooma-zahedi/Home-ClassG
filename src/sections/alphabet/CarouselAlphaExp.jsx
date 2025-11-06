import { Route, Routes } from 'react-router-dom'
import {infoCard} from "./CardAlphaCompo";

// import { alphaCrousel, alphaLongCrousel, alphaShortCrousel, aminFireFighter, pami, puyaStory, smallPea, storyAlpha1, storyAlpha2, storyAlpha3, storyAlpha4 } from './dataAlpha'
// import { TheStory } from '../story/TheStory'


// ************************************************* start short sound *************************
let shortSoundExa = [];
infoCard.map((item , index)=>{
    shortSoundExa =[...shortSoundExa, item.shortSoundPic]
})
 let alphaShortCrousel={
    buttonId:"shortCa1",
    carouselImg:shortSoundExa
}
// ************************************************* End short sound *****************************

// ********************************* start long sound ********************************************
let longSoundExa = [];
infoCard.map((item , index)=>{
    longSoundExa =[...longSoundExa, item.longSoundPic]
})
let alphaLongCrousel={
    buttonId:"longCa1",
    carouselImg:longSoundExa
}
//********************************** */ End long sound *******************************************


export const CarouselAlphaExp = ({dataCarousel={dataCarousel} ,idCarouselAlpha}) => {
// console.log(dataCarousel);
if(dataCarousel === "alphaShortCrousel"){
    dataCarousel = alphaShortCrousel;
}else if (dataCarousel === "alphaLongCrousel" ) {
    dataCarousel = alphaLongCrousel
} 
    




  return (
    <>
        <section className="container border border-3 border-info rounded-2  mt-4" id={idCarouselAlpha}>
            <div id={dataCarousel.buttonId} className="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="300000">
            <div className="carousel-inner ">
                {dataCarousel.carouselImg.map((item, index)=>{
                    return(
                        <>
                            <div key={index} className={`carousel-item ${index == 0 ? 'active' : ""}`}>
                            <img src={item} className="d-block w-100" alt="alphabet"/>
                            </div>
                        </>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${dataCarousel.buttonId}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-danger rounded-pill" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${dataCarousel.buttonId}`} data-bs-slide="next">
                <span className="carousel-control-next-icon bg-danger rounded-pill" aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
            </button>
            </div>
        </section>
    </>
)
}


