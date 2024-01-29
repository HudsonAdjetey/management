import React, { useState } from "react";
import { Images } from "../../constant/images";
import Select from "react-select";

const StudentRegister = () => {
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

  const handleSubmit = (e) => e.preventDefault();
  return (
    <div className="flex w-[80%] mx-auto  flex-col md:flex-row md:gap-[15%] md:items-start items-center ">
      <span className="flex md:w-[40%] w-[80%]">
        <img src={Images.Teacher} alt="backdrop" />
      </span>
      <form onSubmit={handleSubmit} className="md:w-[50%] w-[96%] ">
        <h3 className="mb-5 text-lg text-secondary font-medium">
          Student Register
        </h3>

        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="firstName"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
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
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="lastName"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
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
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="otherName"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Other Name
          </label>
          <input
            type="text"
            id="otherName"
            name="otherName"
            className=" border-gray-500 border-1 px-4 py-[6px] "
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="classSelect"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Select Class
          </label>
          <Select
            options={options}
            placeholder="Select Mode"
            onChange={handleSelectChange}
            id="classSelect"
            name="selectClass"
          />
        </div>
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="birth"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Date Of Birth
          </label>
          <input
            type="date"
            id="birth"
            name="dob"
            className=" border-gray-500 border-1 px-4 py-[6px] "
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="allergies"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Allergies
          </label>
          <textarea
            type="text"
            id="allergies"
            name="allergic"
            className=" border-gray-500 border-1 px-4 py-[6px] "
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default StudentRegister;
