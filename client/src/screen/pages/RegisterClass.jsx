import React from "react";
import Header from "../../components/NavMenu/Header";
import MultiSelection from "../../components/selection/MultiSelection";

const RegisterClass = () => {
  return (
    <div>
      <Header title={"Register Class"} />
      <div className="sub_content">
        <MultiSelection />
      </div>
    </div>
  );
};

export default RegisterClass;
