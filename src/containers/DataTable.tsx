import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button, styled } from '@mui/material';
import { columns, gridPageSize, rows } from '../utils/constants';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const ModelContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: 'background.paper',
  boxShadow: '24px',
  p: '4px'
}));
function DataTable(): JSX.Element {

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(gridPageSize);
  
  useEffect(() => {
    refresh();
  }, [page]);

  const refresh = (): void => {
   // GET DATA
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataTable;