import {Link} from "react-router-dom";
import Footer from "./Footer";
const About=()=>{
    return <div>
        <Link to="/Home" className="btn border border-black rounded mg-auto mt-2">Login</Link>
        <Footer/> 
    </div>
}
export default About;