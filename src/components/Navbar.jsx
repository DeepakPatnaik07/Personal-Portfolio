import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill} from "react-icons/bs";

function Navbar() {
  const [ mode, setMode ] = useState("light");

  useEffect(() => {
    if(mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  // useEffect(() => {
  //   const typingInterval = setInterval(() => {
  //     setTypingText((prevText) => {
  //       const truncatedText = name.substring(0, prevText.length + 1);
  //       return truncatedText === name ? prevText : truncatedText;
  //     });
  //   }, 100); 

  //   return () => clearInterval(typingInterval);
  // }, []);

  const changeTheme = () => {
    console.log(mode);
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <header>
      <nav className="bg-gray-200 dark:bg-[#1E2226] z-10 top-0 sticky">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start ">
              <a href="#home" className="flex-shrink-0 flex items-center font-gilroy-heavy text-xl dark:text-[#ffffff]">
                DEEPAK PATNAIK 
                </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex justify-center">
              <div className="flex space-x-4 items-center justify-center">
                <a
                  href="#home"
                  className="text-gray-900 dark:text-[#ffffff] hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-[rgb(255,255,255)] dark:hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-900 dark:text-[#ffffff] hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-[rgb(255,255,255)] dark:hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#work"
                  className="text-gray-900 dark:text-[#ffffff] hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-[rgb(255,255,255)] dark:hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Work Experience
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-900 dark:text-[#ffffff] hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-[rgb(255,255,255)] dark:hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-900 dark:text-[#ffffff] hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-[rgb(255,255,255)] dark:hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>

              <button
              type="button"
                onClick={changeTheme}
                className="dark_toggle ml-4 p-2 bg-gray-500 text-black dark:text-white rounded-full"
              >
                {mode === "dark" ? <BsSunFill /> : <FaMoon />}
              </button>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#home"
              class="text-gray-900 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              class="text-gray-900 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#work"
              class="text-gray-900 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Works
            </a>
            <a
              href="#contact"
              class="text-gray-900 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
