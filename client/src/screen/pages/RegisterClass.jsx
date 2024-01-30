import React from "react";
import Header from "../../components/NavMenu/Header";
import MultiSelection from "../../components/selection/MultiSelection";
import RegisterClassComp from "../../components/Register/RegisterClass";

const RegisterClass = () => {
  return (
    <div>
      <Header title={"Register Class"} />
      <div className="sub_content">
        <RegisterClassComp />
      </div>
    </div>
  );
};

export default RegisterClass;
