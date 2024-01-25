import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../constant/Icons";
import MobileNav from "./MobileNav";

const HeaderDsk = ({ title }) => {
  return (
    <nav className="flex align-middle items-center  w-full justify-between">
      <span className="s_head font-medium tracking-wider">{title}</span>

      <div className="list__content">
        {/* HEADER MENU ON SM SCREEN  */}
        {/* HEADER MENU ON SM SCREEN  */}
        <ul className="nav__links flex nDask items-center gap-10 mr-7">
          <li className="mr-6  ">
            <Icons.notification className="opacity-30" />
          </li>
          <li className="flex items-center  gap-3">
            <Link to={"/"} className="w-[50px] overflow-hidden">
              <img
                className="aspect-square rounded-[50%] object-cover "
                src={
                  "https://media.wired.com/photos/5926e069af95806129f50e99/master/w_1600%2Cc_limit/Angelina-Jolie-100x130cm-2013.jpg"
                }
                alt="profile"
              />
            </Link>
            <span className="text-sm font-medium">Nana Yaa</span>
          </li>
        </ul>
        <div className="nMobNav right-3 fixed top-2 ">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default HeaderDsk;
