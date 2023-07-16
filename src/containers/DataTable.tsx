import { useEffect } from 'react';
import { Box } from '@mui/system';
import { columns } from '../utils/constants';
import { DataGrid } from '@mui/x-data-grid';
import { useAppContext } from '../context/appContext';

function DataTable(): JSX.Element {
  
const {loading, fetchData, data, error} = useAppContext();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(error){
      alert(error);
    }
  }, [error]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        loading={loading}
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