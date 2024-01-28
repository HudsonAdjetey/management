import React from "react";

const ConfirmPayment = () => {
  return (
    <div className=" w-[80%] mx-auto flex flex-col md:flex-row md:justify-between md:items-start items-center">
      <div>
        {/* PROFILE CONTAINER */}
        <div>
          <span className="mb-4  w-[130px]  flex-initial flex ">
            <img
              className="aspect-square w-full rounded-md"
              src={
                "https://media.wired.com/photos/5926e069af95806129f50e99/master/w_1600%2Cc_limit/Angelina-Jolie-100x130cm-2013.jpg"
              }
              alt="profile"
            />
          </span>
          <span className="text-[1.1rem] font-semibold text-secondary">
            James Harden
          </span>
        </div>
        <p className="flex w-fit p-1 text-[.9rem] rounded-sm font-medium">
          <span>Admission ID</span>
          <span>23311ADE2344F</span>
        </p>
        {/* PROFILE CONTAINER */}
      </div>
      <div>
        <h5 className="font-medium mb-6 text-lg">Confirm Payment Details</h5>
      </div>
    </div>
  );
};

export default ConfirmPayment;
