import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && phone && email) {
      localStorage.setItem('user', JSON.stringify({ name, phone, email }));
      navigate('/second');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4">User Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          fullWidth 
          margin="normal" 
          required 
          sx={{ 
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            }
          }}
        />
        <TextField 
          label="Phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          fullWidth 
          margin="normal" 
          required 
          sx={{ 
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            }
          }}
        />
        <TextField 
          label="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          fullWidth 
          margin="normal" 
          required 
          sx={{ 
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            }
          }}
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
  );
};

export default UserForm;
