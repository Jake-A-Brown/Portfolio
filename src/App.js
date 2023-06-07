import React from "react";
import Navbar from "./components/Nav/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import './App.css';


function App() {

  return (
    <div className="main-div">
      <Navbar />
      <div className="container-div">
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
      <Footer />
      </div>
  );
}

export default App;

