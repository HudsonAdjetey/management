import React from "react";
import { Images } from "../../constant/images";

const ParentInfo = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="flex w-[80%] mx-auto  flex-col-reverse md:flex-row md:gap-[15%] md:items-start items-center ">
      <form onSubmit={handleSubmit} className="md:w-[50%] w-[96%] ">
        <h3 className="mb-5 text-lg text-secondary font-medium">
          Guardian Info
        </h3>

        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="guardName"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Guardian Name
          </label>
          <input
            type="text"
            id="guardName"
            name="guardName"
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
            htmlFor="guardOcc"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Occupation
          </label>
          <input
            type="text"
            id="guardOcc"
            name="guardOcc"
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
            htmlFor="guardContact"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Contacts
          </label>
          <input
            type="text"
            id="guardContact"
            name="guardContact"
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
            htmlFor="emeContact"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Emergency Contacts
          </label>
          <input
            type="text"
            id="emeContact"
            name="emeContact"
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
      <span className="flex md:w-[40%] w-[80%]">
        <img src={Images.Parent} alt="backdrop" />
      </span>
    </div>
  );
};

export default ParentInfo;
