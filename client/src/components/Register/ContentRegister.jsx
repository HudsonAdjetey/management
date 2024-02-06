import React, { useState } from "react";
import Banner from "../../assets/banner.svg";
import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Select from "react-select";

const ContentRegister = () => {
  const options = [{ value: "mastercard", label: "MasterCard" }];
  const [selectedOption, setSelectedOption] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Selected Option:", selectedOption);
  };
  return (
    <section className="px-10">
      {/* school logo banner */}
      <Box className="relative">
        <div className="flex ">
          <img
            className="w-full max-h-44 rounded-lg object-cover"
            src="https://t3.ftcdn.net/jpg/04/53/92/04/360_F_453920448_yMcff4E8ctdXQQegdaQ7WcXnHM3y3aMM.jpg"
            alt="banner"
          />
        </div>
        <div className="profile-container bg-white w-[95%] max-[600px]:w-full max-[600px]:flex-wrap left-[50%] right-[50%]  translate-x-[-50%] py-3 px-6 rounded-md -bottom-[2rem] shadow-md absolute flex overflow-hidden">
          <span className="flex w-[90px] items-center mr-5">
            <img
              className="aspect-square h-[100%] object-cover rounded-md "
              src="https://media.wired.com/photos/5926e069af95806129f50e99/master/w_1600%2Cc_limit/Angelina-Jolie-100x130cm-2013.jpg"
              alt=""
            />
          </span>
          <div className="flex justify-between w-full items-center">
            <div className="max-[600px]:flex-row flex-col  gap-1 flex">
              <h4 className="text-lg text-secondary font-medium">
                Mary Henson
              </h4>
              <h5 className="text-[auto] font-normal">Mrs. Kingsley Yankoh</h5>
            </div>
            <p className="text-md font-medium ">Primary 4</p>
            <Link to={"/"} className="text-md text-warn-color font-medium ">
              34466633GJSJ
            </Link>
          </div>
        </div>
      </Box>
      {/* form register student*/}
      <div className="sub_content mt-[4rem] shadow-md rounded-md ">
        <h3 className="mb-5 text-lg border-b-1 pb-2">Payment Info</h3>
        <div className="flex justify-between gap-3 max-[560px]:flex-col  mb-4">
          {/* @ts-ignore */}
          <div className="flex flex-col flex-1">
            <label
              htmlFor="firstNamePay"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Guardian Name
            </label>
            <input
              type="text"
              id="firstNamePay"
              name="firstName"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label
              htmlFor="lastNamePay"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Contact
            </label>
            <input
              type="text"
              id="lastNamePay"
              name="lastName"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
              required
            />
          </div>
        </div>
        <div className="flex justify-between gap-3 max-[560px]:flex-col  ">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="fee"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Payment Mode <i className="text-red-500 ">*</i>
            </label>
            <Select
              options={options}
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="fee"
              name="feeMode"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="fee"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Amount (GHS)
            </label>
            <input
              type="text"
              id="lastNamePay"
              name="lastName"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
              required
            />
          </div>
        </div>
        <div className="flex justify-between gap-3 max-[560px]:flex-col mt-4 ">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="fee"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Issued By
            </label>
            <input
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="fee"
              name="feeMode"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
                cursor: "not-allowed",
              }}
              value={"Admin"}
              readOnly
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="fee"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Date of Issue
            </label>
            <input
              type="date"
              id="lastNamePay"
              name="lastName"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
              required
            />
          </div>
        </div>
      </div>
      <div className="my-10  flex justify-end">
        <button className="w-[max-content] px-3 bg-secondary-bg py-3 text-white font-medium rounded-lg cursor-pointer">
          Submit payment
        </button>
      </div>
    </section>
  );
};

export default ContentRegister;
