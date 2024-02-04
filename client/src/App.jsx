import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./screen/pages/Dashboard";
import MaxSideBar from "./components/NavMenu/MaxSideBar";
import SideBar from "./components/NavMenu/SideSingle";
import Payment from "./screen/pages/Payment";
import FeeRegisterInfo from "./screen/pages/ClassFeeRegister";
import RegisterStudentInfo from "./screen/pages/RegisterStudentInfo";
import RegisterClass from "./screen/pages/RegisterClass";
import HistoryPayment from "./screen/pages/History";
import GeneralSetting from "./screen/pages/Settings";
import SideBarSettings from "./components/settings/NavSettings";
import Students from "./screen/pages/Students";

const App = () => {
  const Layout = () => {
    return (
      <section className="flex w-full">
        <div className=" z-50   h-[100dvh] sticky left-0 top-0 bottom-0 w-[220px] max-[1100px]:hidden">
          <MaxSideBar />
        </div>
        <div className="h-[100dvh] sticky left-0 top-0 w-[10%] hNav">
          <SideBar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </section>
    );
  };

  const ConfigSettings = () => {
    return (
      <section className="flex w-full">
        <div className="z-50 dsk h-[100dvh] sticky left-0 top-0 bottom-0 w-[220px]">
          <SideBarSettings />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </section>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <Dashboard />,
          path: "",
        },
        {
          element: <Payment />,
          path: "payment",
        },
        {
          path: "student-register",
          element: <RegisterStudentInfo />,
        },
        {
          path: "fee-register",
          element: <FeeRegisterInfo />,
        },
        {
          path: "class-register",
          element: <RegisterClass />,
        },
        {
          path: "history",
          element: <HistoryPayment />,
        },
        {
          path: "settings",
          element: <GeneralSetting />,
        },
      ],
    },
    {
      path: "students",
      element: <Students />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
