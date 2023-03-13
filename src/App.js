import React from "react";
import './App.css';
import Home from './pages/Home'
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from './pages/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Discover from './pages/Discover';
// import About from './pages/About';
// import Search from './pages/Search';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Wrapper from './components/Wrapper';
const App =()=>{
    return(
<div>
    <Router>
      <div>
         <h1>Hello World</h1>
          <Routes>
        
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Projects" element={<Projects/>}/>
        
          </Routes>
       
      </div>
    </Router>           
</div>
    )
}

export default App;