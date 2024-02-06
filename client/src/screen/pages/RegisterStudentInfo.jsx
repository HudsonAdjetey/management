import React from "react";
import Register from "../../components/Register/ContentRegister";
import Header from "../../components/NavMenu/Header";
import ContentRegister from "../../components/Register/ContentRegister";
import StudentRegister from "../../components/Register/StudentRegister";

const RegisterStudentInfo = () => {
  return (
    <div>
      <Header title={"Register Student"} />
      <StudentRegister />
    </div>
  );
};

export default RegisterStudentInfo;
