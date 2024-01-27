import React, { useState } from "react";
import LinearBuffer from "../../components/Loader/LinearBuffer";
import PaymentPage from "../../components/Loader/Stepper";

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex-1">
      {isLoading && <LinearBuffer />}
      Payment
      <PaymentPage />
    </div>
  );
};

export default Payment;
