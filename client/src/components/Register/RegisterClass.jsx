import { Box } from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import MultiSelection from "../selection/MultiSelection";

const columns = [
  {
    field: "id",
    headerName: "ID",
    cellClassName: "cell",
  },
  {
    field: "fee",
    headerName: "Fee Type",
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "category",
    headerName: "Category",
    type: "number",
    headerAlign: "left",
    align: "left",
    flex: 1,
    cellClassName: "cell",
  },
  {
    field: "modify",
    headerName: "Modify",
    cellClassName: "cell",
    renderCell: (params) => (
      <span
        variant="contained"
        className="font-semibold text-blue-500 cursor-pointer"
        onClick={() => handleModify(params.row)}
      >
        Modify
      </span>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    cellClassName: "cell",
    renderCell: (params) => (
      <span
        variant="contained"
        className="font-semibold text-red-500 cursor-pointer"
        onClick={() => handleDelete(params.row)}
      >
        Delete
      </span>
    ),
  },
];

const rows = [
  {
    id: 1,
    fee: "Registration Fee",
    category: "General",
  },
  {
    id: 2,
    fee: "Tuition Fee",
    category: "Tuition",
  },
  {
    id: 3,
    fee: "Transport",
    category: "Transport",
  },
  {
    id: 4,
    fee: "Utilities",
    category: "Health",
  },
];
const handleModify = (row) => {
  // Handle modify logic
  console.log("Modify clicked for row:", row);
};

const handleDelete = (row) => {
  // Handle delete logic
  console.log("Delete clicked for row:", row);
};

const RegisterClassComp = () => {
  return (
    <div>
      <div className="flex flex-col p-[1rem]">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            py: "1.3rem",
            justifyContent: "space-between",
            mb: "3rem",
          }}
        >
          <input
            type="text"
            id="otherName"
            name="otherName"
            className=" border-gray-500 border-1 basis-[20%] px-4 py-[6px] "
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            required
            placeholder="Class Name"
          />

          <input
            type="text"
            id="otherName"
            name="otherName"
            className=" border-gray-500 border-1 px-4 basis-[20%] py-[6px] "
            style={{
              borderColor: "rgb(204, 204, 204)",
              outlineColor: "#2684FF",
              borderRadius: "4px",
            }}
            placeholder="Tutor"
            required
          />
          <MultiSelection />

          <button className="basis-[130px] h-[40px] bg-secondary-bg text-white rounded-md text-[.85rem] flex items-center justify-center gap-1 font-medium">
            <i className="bi bi-plus"></i> <span>Create Class</span>
          </button>
        </Box>
        <div className="  w-[95%] m-auto">
          <Box
            sx={{
              width: "100%",
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
              },
            }}
          >
            <DataGrid
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              autoHeight
              columns={columns}
              rows={rows || []}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default RegisterClassComp;
