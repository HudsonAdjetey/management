import React, { useState } from "react";
import { Images } from "../../constant/images";
import { Tooltip } from "@mui/material";

const StudentInfo = ({ dataInfo }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    /* CONTAINER */
    <div className="rounded-xl w-[80%] mx-auto ">
      {/* SEARCH BAR */}

      <div className="searchBtn  mt-[4rem]  relative rounded-xl overflow-hidden ">
        {/* ADD CLICK FUNCTIONALITY */}
        <span className="absolute right-0 top-0 bg-slate-100 rounded-tr-lg rounded-br-lg h-full rounded-tl-2xl rounded-bl-2xl w-20 flex items-center justify-center font-medium text-sm">
          Search
        </span>
        {/* ADD CLICK FUNCTIONALITY */}

        {/* INPUT FIELD */}
        <input
          style={{ outline: "none" }}
          type="text"
          className="w-full px-7 pr-28 h-10 rounded-xl border-slate-100 border-2 border-solid font-medium"
        />
      </div>
      {/* INPUT FIELD */}

      {/* SEARCH BAR */}
      {dataInfo?.length < 1 ? (
        <div className="empty__data  ">
          {/* NOTHING TO SHOW */}

          <span className=" w-[200px] flex mx-auto mt-10 overflow-hidden ">
            <img src={Images.EmptyData} alt="empty data" />
          </span>
          <p className="text-center mt-7 font-semibold">
            <span className="inline-flex">Empty catalogue</span>
          </p>
          {/* NOTHING TO SHOW */}
        </div>
      ) : (
        /* SOMETHING TO SHOW */
        <div className="justify-center flex flex-col items-center mt-10 mb-7">
          {/* student info */}
          <div
            className="
            10 text-gray-800 dark:text-white shadow-md py-5 rounded-md md:w-[60%] w-[90%] flex flex-col items-center"
          >
            {/* STATUS: IF ACTIVE THE BACKGROUND IS GREEN ELSE RED  */}
            <span
              style={isActive ? { background: "green" } : { background: "red" }}
              className="flex w-[100px] bg-red-500 p-1 rounded-full"
            >
              {/* STATUS: IF ACTIVE THE BACKGROUND IS GREEN ELSE RED  */}

              {/* PROFILE IMAGE */}
              <img
                className="aspect-square object-cover rounded-full"
                src="https://media.wired.com/photos/5926e069af95806129f50e99/master/w_1600%2Cc_limit/Angelina-Jolie-100x130cm-2013.jpg"
                alt=""
              />
              {/* PROFILE IMAGE */}
            </span>

            {/* NAME OF USER */}
            <h1 className="text-secondary mt-5 font-medium text-xl">
              James Kimberley
            </h1>
            {/* NAME OF USER */}

            {/* ADMISSION ID */}
            <p className="font-medium text-base ">
              <span className="text-gray-500">Admission ID: </span>
              <span className="text-gray-500">123456</span>
            </p>
            {/* ADMISSION ID */}

            {/* DEPENDS ON USER */}
            <p className="mt-4">
              <Tooltip
                placement="bottom"
                title={
                  <React.Fragment>
                    <p>Student is no more active</p>
                    <a
                      href="#"
                      style={{
                        color: "lightGray",
                        fontSize: ".9rem",
                        textDecoration: "underline",
                        textDecorationColor: "white",
                      }}
                    >
                      Contact Admin for more information.
                    </a>
                  </React.Fragment>
                }
              >
                <i className="text-dark  opacity-70 bi  bi-info-circle-fill"></i>
              </Tooltip>
              <span className="text-slate-500 text-sm font-medium select-none  ml-2">
                Modification requires an Admin
              </span>
            </p>
            {/* DEPENDS ON USER */}
          </div>
        </div>
        /* SOMETHING TO SHOW */
      )}
    </div>
    /* CONTAINER */
  );
};

export default StudentInfo;
