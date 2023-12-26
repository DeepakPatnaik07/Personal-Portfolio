
import { useEffect } from "react";
import chamanchutiya from "../assets/chamanchutiya.png";
import { gsap } from 'gsap';

const revealTextAnimation = () => {
  const textElement = document.querySelector('.reveal'); // Adjust this selector as needed

  if (textElement) {
    const tl = gsap.timeline();

    tl.fromTo(
      textElement,
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 4, ease: 'power4.out' }
    );
  }
};



const revealTextAnimation1 = () => {
  const textElements = document.querySelectorAll('.reveal-right');

  if (textElements.length > 0) {
    gsap.fromTo(
      textElements,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 4, ease: 'power4.out' }
    );
  }
};



export default function Hero() {
  useEffect(() => {
    revealTextAnimation();
    revealTextAnimation1(); 
  })
  return (
    <div className="bg-gray-200 dark:bg-[#1E2226]" id="home">
      <div className="relative isolate h-auto px-6 pt-32 sm:pt-48 lg:pt-64 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="-z-10 absolute top-5 left-48 h-[470px] w-[80vw] shadow-2xl rounded-xl bg-gray-300 dark:bg-[#131518]"/>
          <div className="flex justify-center z-10">
            <div className="flex flex-col items-end w-2/3">
              <div className="relative -mt-[320px] justify-center">
                <img
                  src={chamanchutiya}
                  alt="Deepak"
                  className="my_photo w-auto h-[500px] xl:h-[600px] object-cover relative z-10 opacity-100"
                />
                <div className="absolute top-1/2 -left-40 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="reveal text-7xl lg:text-[120px] font-extrabold text-gray-700 dark:text-[#f2f9ff] font-gilroy-bold text-left text-shadow-lg shadow-gray-600">
                    DEEPAK PATNAIK
                  </h1>
                </div>
              </div>
            </div>
            <div className="reveal-right text-gray-700 dark:text-[#1E2226] text-justify w-1/3">
              <p className="reveal-right text-gray-900 dark:text-[#f2f9ff] text-xl">CYBER SECURITY ANALYST IN TRAINING</p>
              <br/>
              <p className="reveal-right text-2xl font-gilroy-bold font-bold text-gray-900 dark:text-[#f2f9ff]">
                Based in India,<br/>
                  I am a 4th year CSE undergrad and a cyber security enthusiast.
              </p>
              <br/>
              <p className="reveal-right font-gilroy-bold text-gray-900 dark:text-[#f2f9ff]">Gmail: dpkptnk00007@gmail.com</p>
              <p className="reveal-right font-gilroy-bold text-gray-900 dark:text-[#f2f9ff]"> Phone: 9348564091</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
