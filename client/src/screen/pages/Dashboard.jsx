import React, { useEffect, useState } from "react";
import HeaderDsk from "../../components/NavMenu/HeaderDsk";
import Card from "../../components/card/Card";
import DashTable from "../../components/Table/DashTable";
import Header from "../../components/NavMenu/Header";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

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

        {/* SUB CONTENT */}
        <div className="flex flex-col md:flex-row mt-10">
          <div className=" rounded-md px-4 py-2 shadow-lg  text-white md:w-[40%] w-full mt-7">
            <h3 className="text-secondary my-4 text-lg font-medium ">
              Student Summary
            </h3>
            <Box className=" flex">
              <SparkLineChart
                plotType="bar"
                data={[10, 40, 20, 50, 70, 20, 40, 60]}
                showTooltip
                showHighlight
                xAxis={{
                  scaleType: "band",
                }}
                height={240}
                width={250}
              />
            </Box>
          </div>
          <div className="table__content flex-1">
            <div className="w-[95%] m-auto">
              <DashTable />
            </div>
          </div>
        </div>
        {/* SUB CONTENT */}
      </div>
      {/* SUB CONTENT PAGE */}
    </main>
  );
};

export default Dashboard;

/* 
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function BasicSparkLine() {
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          plotType="bar"
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          height={100}
        />
      </Box>
    </Stack>
  );
} */
