import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Transparent white background
        color: 'black',  // Text color (change to black for visibility)
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Optional shadow for a clean effect
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
          MindCare
        </Typography>

        {/* Navbar buttons */}
        <Button color="inherit" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button color="inherit" onClick={() => navigate('/register')}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
