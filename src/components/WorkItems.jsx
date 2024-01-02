import React from "react";
import { useState, useEffect } from "react";
import {client, urlFor} from "../client";

const Work_items = ({ item }) => {

  return (
    <div className="border shadow-xl h-full w-60 rounded-xl" key={item.name}>
        <div className="overflow-hidden rounded-t-xl">
      <img
        src={urlFor(item.image).url()}
        alt="work"
        className="h-60 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        </div>
      <div className="py-2 px-4 flex flex-col justify-between">
        <h3 className="font-medium text-lg text-black dark:text-gray-300 ">{item.name}</h3>
        <a href={item.url} className="text-blue-500">
          View <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    // <div className="work_card" key={item.id}>
    //     <img src= {item.image} alt="work" className="work_img" />
    //     <h3 className="work_title">{item.title}</h3>
    //     <a href={item.url} className='work_button'>
    //         View  <i className="fas fa-arrow-right"></i>
    //         </a>
    // </div>
  );
};

export default Work_items;
