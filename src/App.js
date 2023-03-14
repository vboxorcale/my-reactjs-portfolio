import React from "react";
import './App.css';
import Home from './pages/Home'
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Discover from './pages/Discover';
// import About from './pages/About';
// import Search from './pages/Search';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Wrapper from './components/Wrapper';
const projectData = [
  { id: 1, title: 'Project 1', description: 'This is project 1' },
  { id: 2, title: 'Project 2', description: 'This is project 2' },
  { id: 3, title: 'Project 3', description: 'This is project 3' },
  { id: 4, title: 'Project 4', description: 'This is project 4' },
  { id: 5, title: 'Project 5', description: 'This is project 5' },
  { id: 6, title: 'Project 6', description: 'This is project 6' },
];

const App =()=>{
    return(
<div>

    <Router>
      <div>
        <Header/>
         <h1>KURURU's Portfolio</h1>
          <Routes>      
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Projects" element={<Projects/>}/>
          </Routes> 
          {projectData.map(project => (
        <Projects key={project.id} title={project.title} description={project.description} />
      ))}  
    
      </div>
    </Router>           
</div>
    )
}

export default App;