import React, { useState } from "react";
import LinearBuffer from "../../components/Loader/LinearBuffer";
import Header from "../../components/NavMenu/Header";
import ContentRegister from "../../components/Register/ContentRegister";

const Payment = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <Header title={"Payment"} />
      <div className="flex-1 ">
        {isLoading && <LinearBuffer />}
        <ContentRegister />
      </div>
    </div>
  );
};

export default Payment;
