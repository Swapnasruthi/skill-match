<<<<<<< HEAD
import {Link} from "react-router-dom";
import Footer from "./Footer";
const About=()=>{
    return <div>
        <Link to="/Home" className="btn border border-black rounded mg-auto mt-2">Login</Link>
        <Footer/> 
=======
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup" className="ml-4">
        Sign Up
      </Link>
>>>>>>> main
    </div>
  );
};

export default About;
