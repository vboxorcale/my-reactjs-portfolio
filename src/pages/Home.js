import img from "../components/images/kuke.jpg";
import {Link} from "react-router-dom";
import "./Home.css";
const Home = ({ name, title}) => {


    return <div>
        
        <header>
            <Link className="home" to="/">Home</Link>
            <Link className="about"to="/about">About</Link>
        </header>
        <section className="splash">
            <section>
                <img alt="kruru" src={img}/>
            </section>
            <section>
                <h1>My name is {name}</h1> 
                <p>Title:  {title} </p>
            </section>
        </section>
    </div>
    
}

export default Home;