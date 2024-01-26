import React, { useEffect, useState } from "react";
import HeaderDsk from "../../components/NavMenu/HeaderDsk";
import Card from "../../components/card/Card";
import DashTable from "../../components/Table/DashTable";

const Dashboard = () => {
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
    <main className="main_container flex-1">
      <header
        style={isScrolled ? { boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" } : {}}
        className="bg-main-bg sticky z-40 top-0 right-0 left-0 h-[40-px]  p-2 flex items-center pl-5 pr-5 overflow-hidden"
      >
        <HeaderDsk title={"Dashboard"} />
      </header>

      {/* SUB CONTENT PAGE */}
      <div className="sub_content">
        <div className="card_contentMain">
          <h3 className="mb-6 font-semibold ml-6">Overview</h3>
          <Card />
        </div>
        <div className="table__content">
          <h3 className="my-8 font-semibold ml-6">Students</h3>
          <div className="w-[95%] m-auto">
            <DashTable />
          </div>
        </div>
      </div>
      {/* SUB CONTENT PAGE */}
    </main>
  );
};

export default Dashboard;
