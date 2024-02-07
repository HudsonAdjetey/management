import React, { memo, useEffect, useState } from "react";
import Header from "../../components/NavMenu/Header";
import DashTable from "../../components/Table/DashTable";
import Card from "../../components/card/Card";

import PaymentTable from "../../components/GraphData/PaymentTable";
import StatusPayment from "../../components/GraphData/StatusPayment";
import StudentSummary from "../../components/GraphData/StudentSummary";
import SummaryPayment from "../../components/GraphData/SummaryPayment";

const Dashboard = memo(() => {
  const [, setIsScrolled] = useState(false);

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
        {/* CARDS DISPLAY */}
        <div className="card_contentMain">
          <h3 className="mb-6 font-semibold ml-6">Overview</h3>
          <Card />
        </div>
        {/* CARDS DISPLAY */}

        {/* STUDENT SUMMARY CHART */}
        <div className="flex flex-col md:flex-row mt-10 md:gap-3 gap-10 ">
          <div className=" rounded-md px-4 py-2 shadow  text-white md:w-[40%] w-full">
            <h3 className="text-secondary my-4 text-lg font-medium ">
              Student Summary
            </h3>

            <StudentSummary />
          </div>

          {/* TABLE STUDENT */}
          <div className="table__content flex-1 ">
            <div className="w-[98%] m-auto shadow">
              <DashTable />
            </div>
          </div>
          {/* TABLE STUDENT */}
        </div>
        {/* STUDENT SUMMARY CHART */}

        <h3 className="my-10 text-xl pb-2 border-b-1">Payment</h3>
        <PaymentTable />

        {/* PAYMENT SUMMARY */}
        <div className="flex  flex-col md:flex-row mt-10 md:gap-3 gap-10">
          <SummaryPayment />

          <StatusPayment />
        </div>
        {/* PAYMENT SUMMARY */}

        {/* STUDENT SUMMARY CHART */}
      </div>
      {/* SUB CONTENT PAGE */}
    </main>
  );
});

export default Dashboard;
