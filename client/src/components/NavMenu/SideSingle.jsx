import React from "react";
import { Icons } from "../../constant/Icons";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const SideBar = () => {
  return (
    <div
      className="overflow-y-auto overflow-x-hidden flex flex-col h-[100%]"
      style={{ boxShadow: "0px 1px 3.3px 0px rgba(0, 0, 0, 0.33)" }}
    >
      <span
        className="flex align-middle
      justify-center mt-4 p-4 mb-6"
      >
        ST
      </span>
      <ul className="links__sideBar flex-col flex gap-6">
        <li className="relative">
          <Tooltip title="dashboard" followCursor>
            <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
              <Icons.dashboard />
            </Link>
          </Tooltip>
        </li>
        <li className="relative">
          <Tooltip title="Payment" followCursor>
            <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
              <Icons.payment />
            </Link>
          </Tooltip>
        </li>
        <li className="relative">
          <Tooltip title="Register Student" placement="right" followCursor>
            <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
              <Icons.register />
            </Link>
          </Tooltip>
        </li>
        <li className="relative">
          <Tooltip
            title="Register Class"
            placement="right"
            children={Link}
            followCursor
          >
            <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
              <Icons.classes style={{ transition: "all, 0.8s" }} />
            </Link>
          </Tooltip>
        </li>
        <li className="relative">
          <Tooltip title="Fees">
            <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
              <Icons.fees />
            </Link>
          </Tooltip>
        </li>
        <li className="relative">
          <Tooltip title="History">
            <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
              <Icons.history />
            </Link>
          </Tooltip>
        </li>
        <li className="relative">
          <Tooltip title="General Settings" placement="right" translate="yes">
            <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
              <Icons.settings />
            </Link>
          </Tooltip>
        </li>
      </ul>
      <button>
        <Tooltip title="log out" sx={{ color: "red" }}>
          <Link
            rel="noopener"
            className="bg-neutral-color text-white flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] mt-9 mb-6 "
            to={""}
          >
            <Icons.logout />
          </Link>
        </Tooltip>
      </button>
    </div>
  );
};

export default SideBar;
