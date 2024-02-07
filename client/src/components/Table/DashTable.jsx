import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../../mockData";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const columns = [
  {
    field: "id",
    headerName: "ID",
    cellClassName: "cell",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
    cellClassName: "cell",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
    cellClassName: "cell",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    cellClassName: "cell",
  },
];

export default function DashTable() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    if (mockDataTeam.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [mockDataTeam]);

  const handleRowClick = (params) => {
    const { id, name } = params.row;
    console.log(name.split(" ").join(""));
    navigate(`/user/${name}/${id}`);
  };
  const [data, setData] = React.useState({
    dataSet: "Commodity",
    rowLength: mockDataTeam?.length,
    maxColumns: 6,
  });

  return (
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
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        autoPageSize
        loading={isLoading}
        autoHeight
        columns={columns}
        rows={mockDataTeam || []}
        data
        onRowClick={handleRowClick}
      />
    </Box>
  );
}
