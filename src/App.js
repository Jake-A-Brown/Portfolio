import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="main-div">
      <Navbar />
      <div className="container-div">
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
