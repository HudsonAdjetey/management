import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

const UserTable = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      cellClassName: "cell",
    },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      headerAlign: "left",
      align: "left",
      flex: 1,
      cellClassName: "cell",
    },
    {
      field: "permission",
      headerName: "Permission",
      cellClassName: "cell",
      renderCell: (params) => (
        <span
          variant="contained"
          className="font-semibold text-blue-500 cursor-pointer"
        >
          {params.row.permission}
        </span>
      ),
    },
    {
      field: "action",
      headerName: "Actions",
      cellClassName: "cell",
      renderCell: (params) => (
        <span
          variant="contained"
          className="font-semibold text-red-500 cursor-pointer"
          onClick={() => handleModify(params.row)}
        >
          Modify
        </span>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Kendrick Fumar",
      role: "Accountant",
      permission: "Read / Write",
    },
    {
      id: 2,
      name: "Kendrick Fumar",
      role: "Accountant",
      permission: "Read / Write",
    },
    {
      id: 3,
      name: "Kendrick Fumar",
      role: "Accountant",
      permission: "Read / Write",
    },
    {
      id: 4,
      name: "Kendrick Fumar",
      role: "Accountant",
      permission: "Read / Write",
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

  return (
    <div className="  w-[95%] m-auto">
      <div className="flex justify-end my-2 mb-4">
        <button
          style={{ transition: "all .4s" }}
          className="h-[fit-content] py-[8px] px-[12px] rounded-full text-[.9rem] text-white hover:bg-black  bg-secondary-bg  "
        >
          Add another User
        </button>
      </div>
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
  );
};

export default UserTable;
