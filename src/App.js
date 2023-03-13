import React from "react";
import home from "./pages/index";
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
        
            <Route path="/" element={<index />} />
        
          </Routes>
       
      </div>
    </Router>           
</div>
    )
}

export default App;