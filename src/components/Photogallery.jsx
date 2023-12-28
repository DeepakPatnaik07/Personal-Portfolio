import React from "react";
import SplitType from "split-type";
import { useEffect } from "react";
import { gsap } from "gsap";

function Photogallery() {
  useEffect(() => {
    const myText = new SplitType("#my-text");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.5,
    });
    }, []);

  return (
    <div className="bg-gray-100 dark:bg-[#1E2226]" id="">
      <div className="flex relative justify-center overflow-hidden">
          <p className="text-center text-[8rem] font-gilroy-semibold font-extrabold text-gray-200 dark:text-gray-300">
        MY PHOTO GALLERY
          </p>
          <p id="my-text" className="text-7xl font-gilroy-heavy font-bold text-black dark:text-[rgb(205,94,81)] absolute top-12">
        MY PHOTO GALLERY
          </p>
        </div>
    </div>
  );
}

export default Photogallery;
