import React from "react";
import data from "../../data.json";
import colorData from "../../colors.json";
import { Link } from "react-router-dom";
import { Images } from "../../constant/images";
import { Skeleton, Stack, Tooltip, Typography } from "@mui/material";

const Card = () => {
  return (
    <div className=" grid-container">
      {data?.map((items, index) => {
        const styleObject = colorData[index];
        let styleClass = styleObject ? styleObject.style : "";

        return (
          <div
            key={items.title}
            className="card py-3 px-4 rounded-md shadow border-b-1"
          >
            <span
              className={`text-2xl w-10 h-10 bg-gray-100 mx-auto flex items-center shadow justify-center rounded-full ${items.icon}`}
            ></span>
            <div className="flex items-center mt-3 justify-between">
              <p className="text-[.9rem]  text-gray-900 font-semibold uppercase">
                {items.title}
              </p>
              <p className="text-xl font-medium text-secondary">
                {items?.total}
              </p>
            </div>
          </div>
        );
      })}
      {/* <Stack spacing={1}> */}
      {/* <Skeleton variant="rectangular" animation={"wave"} /> */}

      {/* </Stack> */}
    </div>
  );
};

export default Card;
