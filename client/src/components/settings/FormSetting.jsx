import React from "react";

const FormSetting = ({
  visible,
  visibleConfirm,
  handleVisibleSwitch,
  handleVisibleSwitchConfirm,
}) => {
  return (
    <div>
      <div className="flex justify-between gap-3 max-[560px]:flex-col ">
        {/* @ts-ignore */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="firstNameSett"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstNameSett"
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
            htmlFor="lastNameSett"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastNameSett"
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
      <div className="flex justify-between gap-3 max-[560px]:flex-col my-4 ">
        {/* @ts-ignore */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="emailSett"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Bio
          </label>
          <textarea
            type="email"
            id="emailSett"
            name="email"
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

      <div className="flex justify-between gap-3 max-[560px]:flex-col my-4 ">
        {/* @ts-ignore */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="emailSett"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="emailSett"
            name="email"
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
            htmlFor="contactSett"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Contact
          </label>
          <input
            type="text"
            id="contactSett"
            name="contact"
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

      <div className="flex justify-between  gap-3 max-[560px]:flex-col my-4 ">
        {/* @ts-ignore */}
        <div className="flex flex-col flex-1 relative">
          <label
            htmlFor="oldPasswordSett"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Old Password
          </label>
          <input
            type={visible ? "text" : "password"}
            id="oldPasswordSett"
            name="passwordOld"
            className=" border-gray-500 border-1 pl-4 pr-[2.4rem] py-[6px] "
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            required
          />

          <span
            onClick={handleVisibleSwitch}
            className={
              visible
                ? "eye_icon bi bi-eye-fill"
                : "eye_icon bi bi-eye-slash-fill"
            }
            style={{
              position: "absolute",
              top: "2.5rem",
              right: "1rem",
              fontSize: "1.1rem",
              display: "flex",
              borderRadius: "2px 4px 4px 2px",
              opacity: ".8",
            }}
          ></span>
        </div>

        <div className="flex flex-col flex-1 relative">
          <label
            htmlFor="passwordSett"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            New Password
          </label>
          <input
            type={visibleConfirm ? "text" : "password"}
            id="passwordSett"
            name="contact"
            className=" border-gray-500 border-1 pl-4 pr-[2.4rem] py-[6px] "
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            required
          />

          <span
            onClick={handleVisibleSwitchConfirm}
            className={
              visibleConfirm
                ? "eye_icon bi bi-eye-fill"
                : "eye_icon bi bi-eye-slash-fill"
            }
            style={{
              position: "absolute",
              top: "2.5rem",
              right: "1rem",
              fontSize: "1.1rem",
              display: "flex",
              borderRadius: "2px 4px 4px 2px",
              opacity: ".8",
            }}
          ></span>
          <button
            disabled
            className="disabled:cursor-not-allowed font-medium w-fit ml-auto mt-3 px-5 py-1 rounded-md border-2 border-red-400 bg-red-100 "
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSetting;
