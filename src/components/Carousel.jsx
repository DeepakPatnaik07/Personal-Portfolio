import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FirstImage from '../assets/1.jpg'
import SecondImage from '../assets/2.jpg'
import ThirdImage from '../assets/3.jpg'
import FourthImage from '../assets/4.jpg'
import FifthImage from '../assets/5.jpg'
import SixthImage from '../assets/6.jpg'


const Carouselitems = [
  '../assets/1.jpg',
  '../assets/2.jpg',
  '../assets/3.jpg',
  '../assets/4.jpg',
  '../assets/5.jpg',
  '../assets/6.jpg',
];

const CarouselCard = ({ image }) => {
  return (
    <div className="h-[500px] w-full relative">
      <img src={image} alt="carousel" className="h-[500px] w-full opacity-50 object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <img src={image} alt="carousel" className=" absolute h-[450px] w-3/4 top-[5%] left-[12%] object-cover" />
    </div>
  )
}

const Slider = () => {
  return (
    <div className="relative">
    <div>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2300}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={1000}
      >
        {/* {Carouselitems.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="carousel" />
            </div>
          );
        })} */}
        <CarouselCard image={FirstImage} />
        <CarouselCard image={SecondImage} />
        <CarouselCard image={ThirdImage} />
        <CarouselCard image={FourthImage} />
        <CarouselCard image={FifthImage} />
        <CarouselCard image={SixthImage} />
      </Carousel>
    </div>
  );
};
export default Slider;
