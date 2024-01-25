import React from "react";
import data from "../../data.json";
import colorData from "../../colors.json";
import { Link } from "react-router-dom";
import { Images } from "../../constant/images";

const Card = () => {
  return (
    <div className="grid-container">
      {data?.map((items, index) => {
        const styleObject = colorData[index]; // Access the corresponding colorData object
        const styleClass = styleObject ? styleObject.style : ""; // Check if the object exists
        return (
          <div key={items.title} className={`py-2 px-5 ${styleClass}`}>
            <i className={` text-2xl ${items.icon}`}></i>
            <p className="mt-2 font-medium text-black opacity-80  ">
              {items.title}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl mr-6 font-semibold">{items.total}</span>
              <button className="w-[70px]">
                <Link
                  className="border-black text-[.8rem] font-semibold border-2  rounded-[5px] w-[inherit] block py-1 px-2"
                  to={items.path}
                >
                  View
                </Link>
              </button>
            </div>
          </div>
        );
      })}
      <div className="p-4 bg-blue-600 bg-opacity-80 rounded-[9px]  shadow justify-between items-center inline-flex">
        <div>
          <img className="w-[60%]" src={Images.BgDrop} alt="" />
        </div>
        <h2 className=" text-white text-[19px] font-medium ">
          Maintaining Efficient Data Flow
        </h2>
      </div>
    </div>
  );
};

export default Card;
