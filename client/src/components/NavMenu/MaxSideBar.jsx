import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Icons } from "../../constant/Icons";
const MaxSideBar = () => {
  return (
    <div
      className="bg-main-bg p-5 h-[100vh] overflow-y-scroll flex flex-col justify-between "
      style={{ boxShadow: "0px 1px 3.3px 0px rgba(0, 0, 0, 0.33)" }}
    >
      <h2 className="logo__container text-center text-secondary   text-2xl font-medium">
        Swift Tech
      </h2>

      <ul className="sideLinks mt-[2rem] flex  flex-col text-[1rem] justify-between gap-4 ">
        <li>
          <Link
            className="inline-flex gap-3 font-medium w-full p-2 rounded-[3px] hover:bg-gray-100 hover:text-secondary"
            to={"/"}
          >
            <span>
              <Icons.dashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex gap-3 font-medium w-full p-2 rounded-[3px] hover:bg-gray-100 hover:text-secondary"
            to={"/payment"}
          >
            <span>
              <Icons.payment />
            </span>
            <span>Payment</span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex gap-3 font-medium w-full p-2 rounded-[3px] hover:bg-gray-100 hover:text-secondary"
            to={"student-register"}
          >
            <span>
              <Icons.register />
            </span>
            <span>Register Student</span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex gap-3 font-medium w-full p-2 rounded-[3px] hover:bg-gray-100 hover:text-secondary"
            to={"/class-register"}
          >
            <span>
              <Icons.classes />
            </span>
            <span>Register Class</span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex gap-3 font-medium w-full p-2 rounded-[3px] hover:bg-gray-100 hover:text-secondary"
            to={"/fee-register"}
          >
            <span>
              <Icons.fees />
            </span>
            <span>Fees </span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex gap-3 font-medium w-full p-2 rounded-[3px] hover:bg-gray-100 hover:text-secondary"
            to={"history"}
          >
            <span>
              <Icons.history />
            </span>
            <span>History </span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex gap-3 font-medium w-full p-2 rounded-[3px] hover:bg-gray-100 hover:text-secondary"
            to={"/"}
          >
            <span>
              <Icons.settings />
            </span>
            <span>General Settings </span>
          </Link>
        </li>
      </ul>
      <div className="logout mt-[4rem]">
        <button type="button" className="flex w-full ">
          <Link
            className="pt-[10px]  pb-[10px] pl-[1rem] pr-[1rem] rounded-xl bg-transparent w-full border-2
            cursor-pointer border-dark font-medium"
            to={"/"}
          >
            Logout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MaxSideBar;
