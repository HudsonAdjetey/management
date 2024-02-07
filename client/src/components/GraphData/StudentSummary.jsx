import React, { memo } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";

const data = [
  { id: 0, value: 292, label: "Primary 1" },
  { id: 1, value: 12, label: "Primary 2" },
  { id: 2, value: 50, label: "Primary 3" },
  { id: 3, value: 40, label: "Primary 4" },
  { id: 4, value: 19, label: "Primary 5" },
  { id: 5, value: 11, label: "Primary 6" },
  { id: 6, value: 120, label: "JHS1" },
  { id: 7, value: 30, label: "JHS2" },
  { id: 8, value: 90, label: "JSH3" },
  { id: 9, value: 120, label: "KG1" },
  { id: 10, value: 30, label: "KG2" },
];
const StudentSummary = memo(() => {
  return (
    <Box className=" flex   max-md:w-[90%] w-[100%] h-full ">
      <PieChart
        colors={["#78ece8", "#f1c40f"]}
        margin={{ top: 0, bottom: 50, left: 50, right: 50 }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        series={[
          {
            data,
            highlightScope: { faded: "series", highlighted: "item" },
            faded: {
              innerRadius: 68,
              additionalRadius: -30,
              color: "gray",
            },
            outerRadius: 95,
            paddingAngle: 10,
            cornerRadius: 5,
            startAngle: -90,
            cx: "50%",
            highlighted: { label: null, index: -1 }, // Corrected line
            emptySpaceColor: "#eee",
            labels: null,
            arcLabel: null,
          },
        ]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            padding: -5,
            itemMarkWidth: 4,
            itemMarkHeight: 2,
            markGap: 5,
            itemGap: 15,
            labelStyle: {
              fontSize: ".8rem",
              fontWeight: "bold",
            },
          },
        }}
        height={290}
      />
    </Box>
  );
});

export default StudentSummary;
