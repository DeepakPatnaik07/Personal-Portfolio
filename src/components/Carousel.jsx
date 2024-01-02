import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import imgone from "../assets/imgone.jpg";
import { client, urlFor } from "../client";

const CarouselCard = ({ image }) => {
  return (
    <div className="h-[500px] w-full relative">
      <img src= {image ? urlFor(image).url() : imgone} alt="carousel" className="h-[500px] w-full opacity-50 object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <img src={image ? urlFor(image).url() : imgone} alt="carousel" className=" absolute h-[450px] w-3/4 top-[5%] left-[12%] object-cover" />
    </div>
  )
}

const Slider = () => {
  const [carousel, setCarousel] = useState([]);// variable to store the data from the API
  useEffect(() => {
    const query = '*[_type == "carousel"]';// query to fetch the data from the API
    client.fetch(query).then((res) => setCarousel(res)).catch((err) => console.log(err));// fetching the data from the API
  }, []);

  return (
    <div className="relative">
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
        {carousel.map((item, index) => {
          return (
            <div key={index}>
              <CarouselCard image={item.image} />
            </div>
          );
        })}
        {/* <CarouselCard image={CarouselCard[0]} />
        <CarouselCard image={CarouselCard[1]} />
        <CarouselCard image={CarouselCard[2]} />
        <CarouselCard image={CarouselCard[3]} />
        <CarouselCard image={CarouselCard[4]} />
        <CarouselCard image={CarouselCard[5]} /> */}
      </Carousel>
    </div>
  );
};
export default Slider;
