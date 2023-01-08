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
   var settings = {
      autoplay: true,
      autoplaySpeed: 100,
      accessibility: false,
      arrows: false,
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 8,
      slidesToScroll: 1,
      centerMode: true,
      pauseOnHover: true,
      className: 'carousel',
      easing: 'cubic-bezier(0, 1.05, 1, 0.06)',

   };
   return (
      <Slider {...settings}>
         {screenshots.map(screenshot => <Screenshot screenshot={screenshot} key={screenshot.id} />)}
      </Slider>
   );
}

export default SimpleSlider;