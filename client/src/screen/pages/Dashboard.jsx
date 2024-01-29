import React, { useEffect, useState } from "react";
import HeaderDsk from "../../components/NavMenu/HeaderDsk";
import Card from "../../components/card/Card";
import DashTable from "../../components/Table/DashTable";
import Header from "../../components/NavMenu/Header";

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
      <Header title={"Dashboard"} />

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
