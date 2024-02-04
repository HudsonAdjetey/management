import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import SingleSelect from "../../components/selection/SingleSelect";
import Card from "../../components/card/Card";
import Header from "../../components/NavMenu/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  {
    field: "firstName",
    headerName: "First Name",
    cellClassName: "cell",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "AdmissionID",
    headerName: "Admission ID",
    type: "number",
    headerAlign: "left",
    align: "left",
    cellClassName: "cell",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    description: "The status of the user.",
    sortable: true,
    filterable: true,
    width: 120,
    renderCell: (params) => {
      return (
        <span
          className="font-semibold"
          style={
            params.row.status == "pending"
              ? { color: "blue" }
              : params.row.status == "approved"
              ? { color: "green" }
              : params.row.status == "rejected"
              ? { color: "red" }
              : {}
          }
        >
          {params.row.status}
        </span>
      );
    },
  },
  {
    field: "created",
    headerName: "Created At",
    flex: 1,

    valueGetter: (params) => {
      return new Date(params.row.created).toLocaleString();
    },
  },
];
// using valueGetters in dataGrid?
const rows = [
  {
    firstName: "Hudson",
    lastName: "Baker",
    AdmissionID: "123",
    status: "pending",
    created: "12/11/2023",
  },
  {
    firstName: "Sophie",
    lastName: "Williams",
    AdmissionID: "456",
    status: "approved",
    created: "9/27/2023",
  },
  {
    firstName: "Emmett",
    lastName: "Roberts",
    AdmissionID: "789",
    status: "rejected",
    created: "10/02/2023",
  },
];

const Students = () => {
  const data = [
    { id: 0, value: 10, label: "All Students" },
    { id: 1, value: 15, label: "Fees" },
    { id: 2, value: 20, label: "Active" },
    { id: 3, value: 20, label: "Unactive" },
  ];
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Header title={"History"} />
      <div className="sub_content min-h-screen">
        <div>
          <button onClick={handleBack}>Go Back</button>
        </div>

        <div className="w-[95%] mx-auto mt-6 flex justify-end">
          <input
            type="month"
            className=" border-gray-500 border-1 px-4 py-[6px] "
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
          />
        </div>
        <Box>
          <div></div>
        </Box>
        <h3 className="text-lg font-medium text-secondary">Data Statistics</h3>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mt: "2rem",
            gap: "2rem",
          }}
          className="max-md:flex-col max-md:items-center max-md:justify-center"
        >
          <div className="bg-gray-50 flex shadow max-md:w-[90%] w-[40%] h-[350px]">
            <PieChart
              margin={{ top: 0, bottom: 30, left: 50, right: 50 }}
              sx={{
                width: "100%",
                height: 400,
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
            />
          </div>
          <div className="bg-gray-50 flex shadow w-[50%] h-[350px] max-md:w-[90%] ">
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5], label: "Active", id: "1" }, // Change this line
                { data: [1, 6, 3], label: "data", id: "2" }, // Change this line
                { data: [2, 5, 6], label: "data", id: "3" }, // Change this line
              ]}
              slotProps={{
                legend: {
                  direction: "row",
                  position: { vertical: "top", horizontal: "middle" },
                  padding: 0,
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
            />
          </div>
        </Box>
        <h3 className="text-lg font-medium text-secondary my-9">
          Data History
        </h3>
        <Box
          sx={{
            width: "95%",
            mx: "auto",
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
          }}
        >
          <DataGrid
            // disableColumnFilter
            disableColumnSelector
            // disableDensitySelector
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            autoHeight
            columns={columns}
            rows={rows || []}
            getRowId={(rows) => rows.AdmissionID}
          />
        </Box>
        {/* EVENT ACTIVITIES */}
      </div>
    </>
  );
};

export default Students;
