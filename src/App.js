import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import from react-router-dom
import './App.css';
import Home from './Pages/Home'; // Ensure the correct path to your component
import WelcomePage from './components/WelcomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
