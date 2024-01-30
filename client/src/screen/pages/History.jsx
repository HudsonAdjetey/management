import React from "react";
import Header from "../../components/NavMenu/Header";
import { Box } from "@mui/material";

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
const handleModify = (row) => {
  // Handle modify logic
  console.log("Modify clicked for row:", row);
};

const handleDelete = (row) => {
  // Handle delete logic
  console.log("Delete clicked for row:", row);
};

const HistoryPayment = () => {
  return (
    <div>
      <Header title={"History"} />
      <div className="sub_content">
        <Box
          sx={{
            width: "100%",
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
      </div>
    </div>
  );
};

export default HistoryPayment;
