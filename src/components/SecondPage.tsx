import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import DepartmentList from "../components/DepartmentList"


interface Post {
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150, editable: true },
  { field: 'body', headerName: 'Body', width: 300, editable: true },
];

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
      alert('Please enter your details before accessing this page');
      return;
    }

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [navigate]);

  return (
    <>
    <Container>
      <Typography variant="h4">Posts</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
          <DataGrid 
            rows={posts} 
            columns={columns} 
            pageSize={5} 
            checkboxSelection 
            disableSelectionOnClick 
            sx={{
              '& .MuiDataGrid-root': {
                backgroundColor: 'white',
              },
              '& .MuiDataGrid-cell': {
                backgroundColor: 'white',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'white',
              },
              '& .MuiDataGrid-footerContainer': {
                backgroundColor: 'white',
              }
            }}
          />
        </div>
      )}
    </Container>

    
<div className="department">

<h1>DepartmentList</h1>
<DepartmentList/>

</div>
</>
  );
};

export default SecondPage;
