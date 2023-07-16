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

export const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];