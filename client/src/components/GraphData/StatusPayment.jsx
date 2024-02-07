import React, { memo } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
const StatusPayment = memo(() => {
  return (
    <Box className="flex-1 flex rounded-md  max-md:w-[100%] w-[100%] h-full shadow">
      <PieChart
        margin={{ top: 0, bottom: 30, left: 50, right: 50 }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        series={[
          {
            data: [
              { id: 0, value: 292, label: "Pending" },
              { id: 1, value: 122, label: "Approved" },
              { id: 2, value: 320, label: "Denied" },
            ],
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
            padding: 30,
            itemMarkWidth: 10,
            itemMarkHeight: 2,
            markGap: 5,
            itemGap: 15,
            labelStyle: {
              fontSize: ".8rem",
              fontWeight: "bold",
            },
          },
        }}
        height={330}
      />
    </Box>
  );
});

export default StatusPayment;
