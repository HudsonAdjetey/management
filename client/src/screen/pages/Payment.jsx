import React, { useState } from "react";
import LinearBuffer from "../../components/Loader/LinearBuffer";
import PaymentPage from "../../components/Loader/Stepper";
import Header from "../../components/NavMenu/Header";

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Header title={"Payment"} />
      <div className="flex-1 sub_content">
        {isLoading && <LinearBuffer />}
        <PaymentPage />
      </div>
    </div>
  );
};

export default Payment;
