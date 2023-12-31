import React from 'react';
import chamanchutiyekasign from '../assets/Signature.png';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/prometheus._07/' , icon: <FaInstagram/>},
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/deepak-patnaik-718086208/', icon: <FaLinkedinIn/> },
  { name: 'Github', href: 'https://github.com/DeepakPatnaik07/', icon: <FaGithub/> },
  { name: 'Twitter', href: 'https://twitter.com/DeepakPatnaik07', icon: <FaXTwitter/> },
];

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#work' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className='border-t-2 border-black bg-gray-300 dark:bg-[#15181b] dark:bg-dark py-2 px-2 flex flex-col items-center justify-center'>
      <a href='/' className='p-1'>
        <img
          src={chamanchutiyekasign}
          alt='Deepak Patnaik'
          className='dark:invert'
          width={200}
          height={200}
        />
      </a>
      <div className='flex flex-col sm:flex-row justify-center items-center sm:mt-4 sm:gap-6 gap-8 mt-5 font-medium text-lg lg:text-xl font-gilroy-extrabold'>
        {links.map((link) => (
          <a
            href={link.href}
            key={link.name}
            className='hover:dark:text-light text-gray-700 dark:text-gray-300 hover:text-dark'
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-center sm:mt-4 sm:gap-9 gap-8 mt-5 font-medium text-lg lg:text-xl font-gilroy-extrabold'>
        {socials.map((link) => (
          <a
            href={link.href}
            key={link.name}
            className='hover:dark:text-light text-gray-700 dark:text-gray-300 hover:text-dark'
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className='mt-6 flex flex-col justify-center items-center font-medium text-black dark:text-gray-300 '>
        <p className='text-2xl font-gilroy-bold'>DEEPAK PATNAIK &copy; {new Date().getFullYear()}</p>
        <p className='text-xl font-gilroy-bold'>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;