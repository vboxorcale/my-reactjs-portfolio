import {Link} from "react-router-dom"; // Import the Link component from the react-router-dom package
import './Header.css' // Import a CSS file for styling
 //Set up a Link component for each page 
const Header=()=>{
    
   return <header>
   <Link className="home" to="/">Home</Link>
   <Link className="about" to="/about">About</Link>
   <Link className="contact" to="/contact">Contact</Link>  
   <Link className="projects" to="/Projects">Projects</Link>
</header> 

}

export default Header;