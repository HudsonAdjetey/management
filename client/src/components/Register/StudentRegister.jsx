import React, { useRef, useState } from "react";
import { Images } from "../../constant/images";
import Select from "react-select";
import { FileInput, Label } from "flowbite-react";

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
    <div className="flex w-[80%] mx-auto  flex-col md:flex-row md:gap-[15%] md:items-start items-center ">
      <span className="flex md:w-[40%] w-[80%]">
        <img src={Images.Teacher} alt="backdrop" />
      </span>
      <form onSubmit={handleSubmit} className="md:w-[50%] w-[96%] ">
        <h3 className="mb-5 text-lg text-secondary font-medium">
          Student Register
        </h3>
        <input
          type="file"
          ref={fileRef}
          hidden
          onChange={handleSetImage}
          accept="image/*"
        />
        <img
          src={
            imageUpload ||
            "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
          }
          alt=""
          onClick={() => fileRef.current.click()}
        />

        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLineJoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <FileInput id="dropzone-file" className="hidden" />
          </Label>
        </div>

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
