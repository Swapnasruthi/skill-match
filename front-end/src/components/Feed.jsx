import ProjectCard from "../inner-components/ProjectCard";
import {Link} from "react-router-dom";
import FormData from "../utils/MockData";

const Feed = () => {

  const projectCategories = [
    "Web Development",
    "Mobile App Development",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
    "Blockchain",
    "Cloud Computing",
    "Game Development",
    "IoT (Internet of Things)",
    "Artificial Intelligence",
    "Augmented Reality (AR)",
    "Virtual Reality (VR)",
    "DevOps Projects",
    "Database Management",
    "Networking Projects",
    "Automation Projects",
    "E-commerce Projects",
    "Chatbot Development",
    "Healthcare Projects",
    "Finance & Banking Projects"
  ];
  
  return (
    <div>
        <div>
          <p className="mx-16 my-8 font-bold text-xl">Project Categories</p>

          <div className="w-6/12 mx-54 my-5 flex flex-wrap justify-start">
              {projectCategories.map((category, index) => (
                <button key={index} className="btn btn-outline btn-secondary mx-2 mb-2 text-[10px]">{category}</button>
              ))}
          </div>
          
          <div>
              <p className="font-bold text-xl mx-15 my-5">Featured Projects<Link to="/home/addProject"> <span><button className="cursor-pointer" >+</button></span></Link></p>
              
              <div>
                  <ProjectCard data={FormData}/>
                  
              </div>
          </div>
      
          



        </div>
    </div>
  )
}

export default Feed;