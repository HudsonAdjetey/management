import React from "react";
import { Icons } from "../../constant/Icons";
import { Link } from "react-router-dom";

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
          <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
            <Icons.dashboard />
          </Link>
        </li>
        <li className="relative">
          <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
            <Icons.payment />
          </Link>
        </li>
        <li className="relative">
          <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
            <Icons.register />
          </Link>
        </li>
        <li className="relative">
          <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
            <Icons.classes style={{ transition: "all, 0.8s" }} />
          </Link>
        </li>
        <li className="relative">
          <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
            <Icons.fees />
          </Link>
        </li>
        <li className="relative">
          <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
            <Icons.history />
          </Link>
        </li>
        <li className="relative">
          <Link className="hover:bg-gray-300 flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] ">
            <Icons.settings />
          </Link>
        </li>
      </ul>
      <button>
        <Link
          className="bg-neutral-color text-white flex w-[40px] h-[40px] items-center  m-auto justify-center rounded-[50%] mt-9 mb-6 "
          to={""}
        >
          <Icons.logout />
        </Link>
      </button>
    </div>
  );
};

export default SideBar;
