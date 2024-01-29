import React, { useEffect, useState } from "react";
import HeaderDsk from "../../components/NavMenu/HeaderDsk";
import Header from "../../components/NavMenu/Header";
import RegisterFee from "../../components/Register/RegisterFee";

const FeeRegisterInfo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sub_content">
      <Header title={"Class Register"} />
      <RegisterFee />
    </div>
  );
};

export default FeeRegisterInfo;
