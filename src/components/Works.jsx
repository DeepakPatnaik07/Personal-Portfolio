import React from "react";
import { useState, useEffect } from "react";   
import { data } from "./Workdata";
import { categorynav } from "./Workdata";
import Work_items from "./WorkItems";

const Works = () => {
    const [item, setItems] = useState('All');
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        if (item === 'All') {
            setMenuItems(data);
        }else {
            const newItems = data.filter((work) => {
                return work.category === item;
            });
            setMenuItems(newItems);
        }
    }, [item]);


    const handleclick = (filter) => {
        setItems(filter);
    }
    console.log(item)
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-4 px-4 mt-8">
                {categorynav.map((cat, index) => {
                    return (
                        <span onClick={() => handleclick(cat.category)}
                            className={`${item === cat.category ? 'bg-red-500' : ' '} cursor-pointer border py-2 px-4 rounded-xl bg-blue-500 text-white font-medium` } key={index}> 
                            {cat.category}
                        </span>
                    )
                })}
            </div>
            <div className="work_container container mt-8 grid gap-8 sm:gap-12 md:gap-16 grid-cols-2 md:grid-cols-4">
                {
                    menuItems.map((item) => {
                        return (
                            <div className="flex justify-center w-full col-span-1" key={item.id}>
                            <Work_items item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Works