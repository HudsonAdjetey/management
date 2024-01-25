import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./screen/pages/Dashboard";
import MaxSideBar from "./components/NavMenu/MaxSideBar";
import SideBar from "./components/NavMenu/SideSingle";

const App = () => {
  const Layout = () => {
    return (
      <section className="flex">
        <div className=" z-50 dsk h-[100dvh] sticky left-0 top-0 bottom-0 w-[220px]">
          <MaxSideBar />
        </div>
        <div className="  dsk h-[100dvh] sticky left-0 top-0 w-[10%] mobile">
          <SideBar />
        </div>
        <Outlet />
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
