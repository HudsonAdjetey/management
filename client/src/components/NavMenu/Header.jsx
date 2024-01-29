import React, { useEffect, useState } from "react";
import HeaderDsk from "./HeaderDsk";

const Header = ({ title }) => {
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
    <header
      style={isScrolled ? { boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" } : {}}
      className="bg-main-bg sticky z-40 top-0 right-0 left-0 h-[40-px]  p-2 flex items-center pl-5 pr-5 overflow-hidden"
    >
      <HeaderDsk title={title} />
    </header>
  );
};

export default Header;
