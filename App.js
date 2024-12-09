import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SelfAssessment from './components/SelfAssessment';
import Register from './components/Register'; 
import StoreDataExample from './components/StoreDataExample'; // Store data component
import FetchDataExample from './components/FetchDataExample'; // Fetch data component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/self-assessment" element={<SelfAssessment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store-data" element={<StoreDataExample />} /> {/* Add route for storing data */}
        <Route path="/fetch-data" element={<FetchDataExample />} /> {/* Add route for fetching data */}
      </Routes>
    </Router>
  );
};

export default App;

