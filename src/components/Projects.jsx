import React from 'react';
import Works from './Works';
import './works.css';


const Project = ()=> {
    return (
        <section className='py-12 bg-gray-200 dark:bg-[#1E2226]' id='portfolio'>
            <h2 className='text-center text-7xl font-gilroy-bold text-black dark:text-gray-300 '>MY PROJECTS</h2>
            <Works/>


        </section>
    )
}

export default Project
