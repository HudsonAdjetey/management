import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../constant/Icons";
import { Button, Tooltip } from "@mui/material";
import MobileNav from "../NavMenu/MobileNav";

const SettingHeader = ({ title }) => {
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
      className="bg-main-bg sticky z-40 top-0 right-0 left-0 h-[40-px]  p-3 flex items-center overflow-hidden"
    >
      <nav className="flex align-middle items-center  w-full justify-between">
        <span className="s_head font-medium tracking-wider">{title}</span>

        <div className="list__content">
          {/* HEADER MENU ON SM SCREEN  */}
          {/* HEADER MENU ON SM SCREEN  */}

          <div className="headerMenu right-3 fixed top-2 ">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SettingHeader;
