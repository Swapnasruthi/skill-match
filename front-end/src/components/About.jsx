import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup" className="ml-4">
        Sign Up
      </Link>
    </div>
  );
};

export default About;
