import Screenshot from "./Screenshot";
import { screenshots } from '../data/screenshots'

/*function Carousel() {
   return (
      <section className="carousel">
         {screenshots.map(screenshot => <Screenshot screenshot={screenshot} key={screenshot.id} />)}
      </section>
   )
}

export default Carousel;*/
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {

   let settings = {
      speed: 2000,
      autoplaySpeed: 1,
      autoplay: true,
      accessibility: false,
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      centerMode: true,
      pauseOnHover: true,
      className: 'carousel',
      easing: 'cubic-bezier(0, 1.05, 1, 0.06)',
      responsive: [
         {
            breakpoint: 1800,
            settings: {
               slidesToShow: 7,
            }
         },
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 6,
            }
         },
         {
            breakpoint: 1400,
            settings: {
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 750,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 600,
            settings: {
               centerPadding: '70px',
               slidesToShow: 1,
            }
         }
      ]
   };


   return (
      <Slider {...settings}>
         {screenshots.map(screenshot => <Screenshot screenshot={screenshot} key={screenshot.id} />)}
      </Slider >
   );
}

export default SimpleSlider;