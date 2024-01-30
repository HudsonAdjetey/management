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

const App = () => {
  const Layout = () => {
    return (
      <section className="flex w-full">
        <div className=" z-50  dsk h-[100dvh] sticky left-0 top-0 bottom-0 w-[220px]">
          <MaxSideBar />
        </div>
        <div className="dsk h-[100dvh] sticky left-0 top-0 w-[10%] mobile">
          <SideBar />
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
          path: "/",
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
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
