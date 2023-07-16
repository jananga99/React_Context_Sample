import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const gridPageSize = 5;

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 90 },
  {
    field: "firstName",
    headerName: "First name",
    flex: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    flex: 110,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export const errorConstants = {
  dataFetch: "Error in data fetch",
};
