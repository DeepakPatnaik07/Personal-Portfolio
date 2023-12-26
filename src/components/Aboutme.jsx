import React, { useEffect, useState } from "react";
import cybersecurity from "../assets/myself.jpg";
import resume from "../assets/resume.pdf";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { client } from "../client";

gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
  const [about, setAbout] = useState(null);// variable to store the data from the API
  useEffect(() => {
    const query = '*[_type == "about"]';// query to fetch the data from the API
    client.fetch(query).then((res) => setAbout(res[0]));// fetching the data from the API
  }, []);
  // useEffect(() => {
  //   gsap.from('.about_img', {
  //     scrollTrigger: {
  //       trigger: '.about_img',
  //       start: 'top bottom',
  //     },
  //     opacity: 0,
  //     x: -100,
  //     duration: 1,
  //   });

  //   gsap.from('.font-gilroy-bold', {
  //     scrollTrigger: {
  //       trigger: '.font-gilroy-bold',
  //       start: 'top bottom',
  //     },
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     stagger: 0.2,
  //   });

  //   gsap.from('.text-white', {
  //     scrollTrigger: {
  //       trigger: '.text-white',
  //       start: 'top bottom',
  //     },
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //   });
  // }, []);

  
  return (
    
    <div className="bg-gray-100 dark:bg-[#15181b]" id="about">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex relative justify-center">
          <p className="text-7xl font-gilroy-extrabold text-gray-200 dark:text-[rgb(38,38,41)]">
            ABOUT ME
          </p>
          <p className="text-3xl font-gilroy-heavy text-black dark:text-[rgb(205,94,81)] absolute top-4 underline underline-offset-4">
            ABOUT ME
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8 w-full">
          <img
            src={cybersecurity}
            alt="CyberSecurity"
            className="about_img h-96 w-96 rounded-2xl ml-8"
          />
          <div className="text-black dark:text-gray-300  text-justify flex-col">
            <p className="text-center md:text-left">DEEPAK PATNAIK</p>
            <br />
            <p className="text-center md:text-left">Cyber Security Analyst In Training</p>
            <br />
            <p className="font-gilroy-bold text-justify ">
              I am currently pursuing a Bachelor's degree in Computer Science
              and Communication Engineering at Kalinga University. My academic
              journey has ignited a fervent interest in various domains,
              particularly in the intersection of cybersecurity, web
              development, and collaborative project management. My passion for
              cybersecurity extends to exploring innovative ways to safeguard
              digital assets and networks. In the realm of web development, I
              have honed my skills to craft engaging and functional online
              experiences. Throughout my academic and extracurricular pursuits,
              I have developed a strong proficiency in interpersonal
              communication, problem-solving, and devising effective business
              strategies. I am enthusiastic about applying these skills to
              address complex challenges and contribute meaningfully to
              collaborative endeavors. I am driven by a relentless curiosity to
              learn and innovate, seeking opportunities to apply my knowledge
              and skills in real-world scenarios. I am committed to continual
              growth and development, aspiring to make a positive impact in the
              ever-evolving landscape of technology and security.
            </p>
            <div className="mt-[70px] flex justify-start">
              <a
                download=""
                href={resume}
                className="text-white dark:text-gray-300 bg-black dark:bg-[rgb(205,94,81)] py-2 px-4 rounded-lg text-lg font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
