import React, { useEffect, useState } from "react";
import cybersecurity from "../assets/myself.jpg";
import resume from "../assets/resume.pdf";
import { client, urlFor } from "../client";

function Aboutme() {
  const [about, setAbout] = useState({});// variable to store the data from the API
  useEffect(() => {
    const query = '*[_type == "about"]';// query to fetch the data from the API
    client.fetch(query).then((res) => setAbout(res[0])).catch((err) => console.log(err));// fetching the data from the API
  }, []);


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
            src={about.cvimage ? urlFor(about.cvimage).url() : cybersecurity}
            alt="CyberSecurity"
            className="about_img h-96 w-96 rounded-2xl ml-8"
          />
          <div className="text-black dark:text-gray-300  text-justify flex-col">
            <p className="text-center md:text-left">{about.name}</p>
            <br />
            <p className="text-center md:text-left">{about.title}</p>
            <br />
            <p className="font-gilroy-bold text-justify ">
              {about.cvbio}
            </p>
            <div className="mt-[70px] flex justify-start">
              <a
                download=""
                href={`https://cdn.sanity.io/files/jqv3o1ff/production/${about?.resume?.asset?._ref}.pdf`}
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
