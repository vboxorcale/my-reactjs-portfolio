import img from "../components/images/kuke.jpg";
import "./Home.css";
const Home = ({ name, title}) => {
 name = "Kururu"
    return <div>
        <section className="splash">
            <img alt="kruru" src={img}/> 
            <section>
                <h1>My name is {name}</h1> 
                <p>Title:  {title} </p>
            </section>
            
        </section>
    </div>
    
}

export default Home;