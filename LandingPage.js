import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import images for features
import feature1Icon from '../assets/icon1.png';
import feature2Icon from '../assets/doctor.png';
import backgroundVideo from '../assets/dna.mp4';  // Import your video

// Import the ChatbotIcon component

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background video */}
      <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Main Title and Subtitle */}
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: { xs: '2rem', sm: '3rem' }, zIndex: 2, color: 'white' }}>
        Empower Your Health, Expert Insights, Anytime
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ fontStyle: 'italic', textAlign: 'center', mb: 4, zIndex: 2, color: 'white' }}>
        Your trusted platform for mental health assessments and resources.
      </Typography>

      {/* Button Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, zIndex: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'black',  // Change button text to black
            fontWeight: 'bold',
            padding: '10px 25px',
            '&:hover': {
              backgroundColor: '#1976d2',
              color: 'white',
            },
            fontSize: { xs: '14px', sm: '16px' },
          }}
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',  // Change button text to black
            fontWeight: 'bold',
            padding: '10px 25px',
            '&:hover': {
              borderColor: '#1976d2',
              color: '#1976d2',
            },
            fontSize: { xs: '14px', sm: '16px' },
          }}
          onClick={() => navigate('/register')}
        >
          Register
        </Button>

        {/* Self-Assessment Button */}
        <Button
          variant="outlined"
          sx={{
            borderColor: '#ffffff',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px 25px',
            marginTop: 3,
            '&:hover': {
              borderColor: '#1976d2',
              color: '#1976d2',
            },
            fontSize: { xs: '14px', sm: '16px' },
          }}
          onClick={() => navigate('/self-assessment')}
        >
          Start Self-Assessment
        </Button>
      </Box>

      {/* Feature Section */}
      <Container sx={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 4, flexDirection: { xs: 'column', sm: 'row' }, zIndex: 2 }}>
        
        {/* Feature 1 */}
        <Card sx={{ maxWidth: 200, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 1, borderRadius: 2, marginBottom: 12 }}>
          <CardContent>
            <img src={feature1Icon} alt="Feature 1" style={{ width: '60px', height: '60px', marginBottom: '15px' }} />
            <Typography variant="h6" sx={{ color: 'black' }}>24/7 Medicine</Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              Get your medicines anytime you want
            </Typography>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card sx={{ maxWidth: 200, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 1, borderRadius: 2, marginBottom: 12 }}>
          <CardContent>
            <img src={feature2Icon} alt="Feature 2" style={{ width: '60px', height: '60px', marginBottom: '15px' }} />
            <Typography variant="h6" sx={{ color: 'black' }}>Find the Best Doctors</Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              Best doctors available around you
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Footer */}
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'white', padding: 3, textAlign: 'center' }}>
        <Typography variant="body1">Contact Us: support@mindcare.com</Typography>
        <Typography variant="body2">© 2024 MindCare. All rights reserved.</Typography>
      </Box>

     
    </Box>
  );
};

export default LandingPage;
