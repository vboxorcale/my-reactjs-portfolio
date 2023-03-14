import {Link} from "react-router-dom";
import './Header.css'

const Header=()=>{
   return <header>
   <Link className="home" to="/">Home</Link>
   <Link className="about" to="/about">About</Link>
   <Link to="/contact">Contact</Link>  
   <Link to="/Projects">Projects</Link>
</header> 

}

export default Header;