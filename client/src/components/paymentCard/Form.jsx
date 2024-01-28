import React, { useState } from "react";
import Select from "react-select";

const PaymentForm = () => {
  const options = [{ value: "mastercard", label: "MasterCard" }];
  const [selectedOption, setSelectedOption] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Selected Option:", selectedOption);
  };

  return (
    <div className=" w-[80%] mx-auto">
      <div>
        {/* INPUT FIELD */}
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="name"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Name on Card
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className=" border-gray-500 border-1 px-4 py-[6px]"
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
          />
        </div>
        {/* INPUT FIELD */}

        {/* INPUT FIELD */}
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="autoBy"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Paid By
          </label>
          <input
            type="text"
            id="autoBy"
            name="paidBy"
            readOnly
            value={"Accountant"}
            className=" border-gray-500 border-1 px-4 py-[6px]"
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        {/* INPUT FIELD */}

        {/* INPUT FIELD */}
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="fee"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Fee Type
          </label>
          <Select
            options={options}
            placeholder="Select Mode"
            onChange={handleSelectChange}
            id="fee"
            name="feeMode"
          />
        </div>
        {/* INPUT FIELD */}

        {/* INPUT FIELD */}
        <div className="input_field flex mb-4 flex-col">
          <label
            htmlFor="amt"
            className="text-[.9rem] font-medium text-gray-700 mb-2"
          >
            Amount
          </label>
          <input
            type="text"
            id="amt"
            name="amount"
            readOnly
            value={"Accountant"}
            className=" border-gray-500 border-1 px-4 py-[6px]"
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        {/* INPUT FIELD */}
      </div>
    </div>
  );
};

export default PaymentForm;
