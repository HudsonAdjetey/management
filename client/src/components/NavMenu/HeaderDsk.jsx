import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../constant/Icons";
import MobileNav from "./MobileNav";
import { Button, Tooltip } from "@mui/material";

const HeaderDsk = ({ title }) => {
  return (
    <nav className="flex align-middle items-center  w-full justify-between">
      <span className="s_head font-medium tracking-wider">{title}</span>

      <div className="list__content">
        {/* HEADER MENU ON SM SCREEN  */}
        {/* HEADER MENU ON SM SCREEN  */}
        <ul className="nav__links flex profileHeader items-center gap-10 mr-7">
          {/* NOTIFICATION */}

          <Tooltip title="Push Notification will be added to the next version">
            <span>
              <Button sx={{ m: 1, color: "black" }} className="mr-6" disabled>
                <Icons.notification className="opacity-30" />
              </Button>
            </span>
          </Tooltip>
          {/* NOTIFICATION */}

          {/* PROFILE */}

          <li className="flex items-center  gap-3">
            <Tooltip title="Profile">
              <Link to={"/"} className="w-[50px] overflow-hidden">
                <img
                  className="aspect-square rounded-[50%] object-cover "
                  src={
                    "https://media.wired.com/photos/5926e069af95806129f50e99/master/w_1600%2Cc_limit/Angelina-Jolie-100x130cm-2013.jpg"
                  }
                  alt="profile"
                />
              </Link>
            </Tooltip>
            <span className="text-sm font-medium">Nana Yaa</span>
          </li>
          {/* PROFILE */}
        </ul>
        <div className=" headerMenu right-3 fixed top-2 ">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default HeaderDsk;
