import img from "../components/images/kuke.jpg";
import "./Home.css";
const Home = ({ name, title}) => {
 name = "Kururu"
 title = "Web Developer"
    return <div>
        <section className="splash">
            <img alt="kruru" src={img}/> 
            <section>
                <h1>My name is {name}</h1> 
                <h2>Title:  {title} </h2>
            </section>
            
        </section>
    </div>
    
}

export default Home;