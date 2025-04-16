import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ProjectCard from "./ProjectCard";
const ProjectForm=()=>{
    const navigate = useNavigate();  // Hook to navigate to another page when form is submitted

  // This is your JSON object where you store form data (initially empty)
  const [formData, setFormData] = useState({
    Title: '',
    Description: '',
    Domain:'',
    Creator:'',
    Tech:'',
    Count:'',
    Skills:'',
    Deadline:'',

  });

  // Update the JSON object when the user types in the form
  const handleChange = (e) => {
    setFormData({
      ...formData,  // Keep the existing data
      [e.target.name]: e.target.value,  // Update the specific field (name or email)
    });
  };

  // When the form is submitted, this function will be called
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the form from refreshing the page
    console.log(formData);  // This will log the data to the console (you can send it to a server)
     
    // Redirect the user to the "/success" page after submitting the form
    
    <ProjectCard data={formData}/>// Passing form data to the next page
  };
    return(
        <div className="flex items-center justify-center min-h-screen  ">
        <form onSubmit={handleSubmit}><fieldset className="fieldset w-xl bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend font-bold text-xl">Project details</legend>
        
        <label className="fieldset-label w-xl text-white">Project Title</label>
        <input type="text" name="Title" className="input w-xl" placeholder="Designing App" value={formData.Title}
  onChange={handleChange} />
        
        <label className="fieldset-label text-white">Project Description</label>
        <input type="text-field" className="input w-xl" name="Description" placeholder="my-awesome-page" value={formData.Description}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Project Domain</label>
        <input type="text" className="input w-xl" name="Domain" placeholder="web" value={formData.Domain}
  onChange={handleChange}/>
        
        <label className="fieldset-label text-white">Project Creator</label>
        <input type="text" className="input w-xl" name="Creator" placeholder="Jhon" value={formData.Creator}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Tech Stacks</label>
        <input type="text" className="input w-xl" name="Tech" placeholder="MERN" value={formData.Tech}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Team Members Count</label>
        <input type="text" className="input w-xl" name="Count" placeholder="3" value={formData.Count}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Skills Needed</label>
        <input type="text" className="input w-xl"  name="Skills" placeholder="Mongodb" value={formData.Skills}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Project Deadline</label>
        <input type="text" className="input w-xl" name="Deadline" placeholder="Dec 3" value={formData.Deadline}
  onChange={handleChange}/>
        <button type="submit">Submit</button>
      </fieldset></form></div>
    )
 }
 export default ProjectForm;