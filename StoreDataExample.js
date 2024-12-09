// src/components/StoreDataExample.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore instance

const StoreDataExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'users'), formData); // Add to Firestore
      setMessage(`Data added with ID: ${docRef.id}`);
      setFormData({ name: '', email: '' }); // Reset form
    } catch (err) {
      setMessage('Error adding data.');
    }
  };

  return (
    <Box
      sx={{
        width: '400px',
        margin: '50px auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Store Data in Firestore
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginTop: '20px',
            backgroundColor: '#1976d2',
            color: 'white',
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          Submit
        </Button>
      </form>
      {message && (
        <Typography color="success.main" sx={{ marginTop: '20px' }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default StoreDataExample;
