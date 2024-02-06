import React, { useRef, useState } from "react";
import { Images } from "../../constant/images";
import Select from "react-select";
import { FileInput, Label } from "flowbite-react";
import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const StudentRegister = () => {
  const [image, setImageFile] = useState(null);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);

  //  handle image uploading process
  /* HANDLE SET IMAGE  FILE FUNCTION */
  const handleSetImage = async (e) => {
    let file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const ext = file["name"].split(".").pop();

      const extensions = ["JPG", "JPEG", "PNG", "jpeg", "jpg", "png"];
      if (!extensions.includes(ext)) {
        alert("Invalid image file type");
        setImageUpload(null);
        return;
      }
    }
    const sizeInMb = getFileSizeInMb(file);
    if (sizeInMb > 4) {
      alert("Please upload an image with size less than 3MB");
      setImageUpload(null);
      return;
    }
    const fileContent = await readFileAsBase64(file);
    setImageUpload(fileContent);
  };

  const options = [
    {
      value: "classOne",
      label: "Class One",
    },
    {
      value: "classTwo",
      label: "Class Two",
    },
  ];
  const [selectedOption, setSelectedOption] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const fileRef = useRef(null);

  const handleSubmit = (e) => e.preventDefault();

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
            <input
              type="file"
              ref={fileRef}
              hidden
              name="file"
              accept="image/*"
              onChange={handleSetImage}
            />
            <img
              className="aspect-square h-[100%] object-cover rounded-md "
              src={
                imageUpload ||
                "https://media.wired.com/photos/5926e069af95806129f50e99/master/w_1600%2Cc_limit/Angelina-Jolie-100x130cm-2013.jpg"
              }
              alt=""
              onClick={() => fileRef.current.click()}
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
        <h3 className="mb-5 text-lg border-b-1 pb-2">Student Information</h3>

        {/* FIRST NAME AND LAST NAME */}

        <fieldset className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:gap-y-4 lg:gap-y-8 xl:gap-x-8  ">
          {/* @ts-ignore */}
          <div className="flex flex-col flex-1">
            <label
              htmlFor="firstNameReg"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstNameReg"
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
              Last Name
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
        </fieldset>

        {/* FIRST NAME AND LAST NAME */}

        {/* GENDER AND DOB */}

        <fieldset className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:gap-y-4 lg:gap-y-8 xl:gap-x-8 mt-4 ">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="gender"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Gender
            </label>
            <Select
              options={options}
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="gender"
              name="feeMode"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="dob"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
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
        </fieldset>

        {/* GENDER AND DOB */}

        {/* ADDRESS AND RELIGION */}

        <fieldset className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:gap-y-4 lg:gap-y-8 xl:gap-x-8 mt-4">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="addressReg"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="addressReg"
              name="feeMode"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="religion"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Religion
            </label>
            <input
              type="text"
              id="religion"
              name="lastName"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
            />
          </div>
        </fieldset>

        {/* ADDRESS AND RELIGION */}

        {/* ADMISSION ID, ADMISSION DATE AND CLASS */}

        <fieldset className="flex justify-between gap-4 max-[560px]:flex-col mt-4">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="admissionId"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Admission ID
            </label>
            <input
              type="text"
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="admissionId"
              name="feeMode"
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
              htmlFor="adDate"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Admission Date
            </label>
            <input
              type="date"
              id="adDate"
              name="lastName"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="fee"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Class
            </label>
            <Select
              options={options}
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="fee"
              name="feeMode"
              required
            />
          </div>
        </fieldset>

        {/* ADMISSION ID, ADMISSION DATE AND CLASS */}

        <h3 className="mb-5 mt-8 text-lg border-b-1 pb-2">
          Parent / Guardian Information
        </h3>

        {/* CONTACT  INFORMATION AND NAME */}

        <fieldset className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:gap-y-4 lg:gap-y-8 xl:gap-x-8">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="guardName"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Guardian Name
            </label>
            <input
              type="text"
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="guardName"
              name="feeMode"
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
              htmlFor="guardContact"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Contact Number (Parent/Guardian)
            </label>
            <input
              type="text"
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="guardContact"
              name="feeMode"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
              required
            />
          </div>
        </fieldset>

        {/* CONTACT  INFORMATION AND NAME */}

        {/* ADDRESS AND CONTACT */}

        <fieldset className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:gap-y-4 lg:gap-y-8 xl:gap-x-8 mt-4">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="addressParent"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="addressParent"
              name="feeMode"
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
              htmlFor="emergentContact"
              className="text-[.9rem] font-medium text-gray-700 mb-2"
            >
              Emergency Contact
            </label>
            <input
              type="text"
              placeholder="Select Mode"
              onChange={handleSelectChange}
              id="emergentContact"
              name="feeMode"
              className=" border-gray-500 border-1 px-4 py-[6px] "
              style={{
                borderColor: "rgb(204, 204, 204)",
                outlineColor: "#2684FF",
                borderRadius: "4px",
              }}
              required
            />
          </div>
        </fieldset>

        {/* ADDRESS AND CONTACT */}
      </div>
      <div className="my-10  flex justify-end">
        <button className="w-[120px] bg-secondary-bg py-3 text-white font-medium rounded-lg cursor-pointer">
          Submit
        </button>
      </div>
    </section>
  );
};

export default StudentRegister;

function getFileSizeInMb(file) {
  const fileSizeInByte = file?.size;
  const fileSizeInMb = fileSizeInByte / 1024 / 1024;
  return Math.round(fileSizeInMb * 100) / 100;
}

const readFileAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
