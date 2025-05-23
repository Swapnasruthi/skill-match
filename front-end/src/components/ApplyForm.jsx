import react from 'react';
import {useState} from 'react';
import ProjectCard from "../inner-components/ProjectCard";
const ApplyForm=()=>{
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email:'',
        ContactNumber:'',
        Occupation:'',
        Skills:'',
        Availability:'',
        
    
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,  // Keep the existing data
          [e.target.name]: e.target.value,  // Update the specific field (name or email)
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the form from refreshing the page
        console.log(formData);  // This will log the data to the console (you can send it to a server)
         
        // Redirect the user to the "/success" page after submitting the form
        
        <ProjectCard data={formData}/>// Passing form data to the next page
      };
    
    
    return(
        <div className="flex items-center justify-center min-h-screen  ">
        <form onSubmit={handleSubmit}><fieldset className="fieldset w-xl bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend font-bold text-xl">Details of the applicant</legend>
        
        <label className="fieldset-label w-xl text-white">First Name</label>
        <input type="text" name="FirstName" className="input w-xl" placeholder="ex:jhon" value={formData.FirstName}
  onChange={handleChange} />
        
        <label className="fieldset-label text-white">Last Name</label>
        <input type="text" className="input w-xl" name="LastName" placeholder="ex:doe" value={formData.LastName}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Email</label>
        <input type="email" className="input w-xl" name="Email" placeholder="web" value={formData.Email}
  onChange={handleChange}/>
        
        <label className="fieldset-label text-white">Contact Number</label>
        <input type="text" className="input w-xl" name="ContactNumber" placeholder="9876543210" value={formData.ContactNumber}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Occupation</label>
        <input type="text" className="input w-xl" name="Occupation" placeholder="MERN Developer" value={formData.Occupation}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Skills</label>
        <input type="text" className="input w-xl" name="Skills" placeholder="MERN" value={formData.Skills}
  onChange={handleChange}/>
        <label className="fieldset-label text-white">Available Upto</label>
        <input type="text" className="input w-xl"  name="Availability" placeholder="upto 3months" value={formData.Availability}
  onChange={handleChange}/>
       
        <button type="submit">Submit</button>
      </fieldset></form></div>
    )

}
export default ApplyForm;