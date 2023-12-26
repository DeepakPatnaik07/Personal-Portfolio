import React from "react";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const workExperience = [
  {
    role: "Cyber Security Intern",
    company: "National Aluminium Company Limited.",
    img: "https://cdn.discordapp.com/attachments/811266748753903686/1184186186395295895/NALCO.png?ex=658b0e53&is=65789953&hm=cc22de8ea6562e131725b1876e784923185de536a247583bae701463be5d456c&",
    points: [
      "Learn about Active Windows Directory.",
      "Learnt about real time security steps to be taken to secure corporate office.",
    ],
    duration: "2019 - 2021",
    currentlyWorking: true,
  },
  {
    role: "B2C Consultancy Intern",
    company: "Highradius Technologies",
    img: "https://cdn.discordapp.com/attachments/811266748753903686/1184090558520643607/metasploit.png?ex=658ab544&is=65784044&hm=2019819b68f31cc3a4c2efdca26957926bf89a2a9b256df43326386af7f33db7&",
    points: [
      "Powerpoint skills, SQL, EXCEL, B2B and B2C skills.",
      "Cash Application Analytics",
      "Communication & Presentation",
    ],
    duration: "2019 - 2021",
    currentlyWorking: true,
  },
  {
    role: "Computer Science Subject Matter Expert",
    company: "CHEGG India",
    img: "https://cdn.discordapp.com/attachments/811266748753903686/1184090558520643607/metasploit.png?ex=658ab544&is=65784044&hm=2019819b68f31cc3a4c2efdca26957926bf89a2a9b256df43326386af7f33db7&",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    duration: "2019 - 2021",
    currentlyWorking: true,
  },
];

const ExperienceCard = ({ exp }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#E5E7EB",
        color: "#fff",
        borderRadius: "10px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #161616" }}
      iconStyle={{ background: "#161616", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={exp.img}
            alt={exp.company}
            className="w-[70%] h-[70%] object-contain"
            width={50}
            height={50}
          />
        </div>
      }
    >
      <div className="">
        <h3 className="text-light text-black text-2xl md:text-xl sm:text-lg font-bold">
          {exp.role}
        </h3>
        <p
          className="text-black text-base font-medium"
          style={{ margin: 0, fontSize: "16px" }}
        >
          {exp.company}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 spac-y-2">
        {exp.points.map((point, index) => (
          <li
            key={`exp-point-${index}`}
            className="text-black text-sm md:text-xs text-light pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <p className="text-black font-medium" style={{ fontSize: "14px" }}>
        {exp.duration} - {exp.currntlyWorking ? "Present" : exp.endingDate}
      </p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#1E2226]" id="work">
      <div className="!pt-16 px-20">
        <p className="xl:text-6xl lg:text-7xl md:text-5xl font-gilroy-extrabold text-black dark:text-[rgb(255,117,102)] text-center">
          WORK EXPERIENCE
        </p>
        <div className="mt-16 md:mt-10 flex flex-col">
          <VerticalTimeline lineColor="rgb(255,117,102)">
            {workExperience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
