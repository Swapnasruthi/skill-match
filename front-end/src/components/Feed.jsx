import ProjectCard from "../inner-components/ProjectCard";

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
          <p className="mx-5 mt-10 mb-5 font-bold text-xl">Project Categories</p>

          <div className="w-6/12 mx-10">
              {projectCategories.map((category, index) => (
                <button key={index} className="btn btn-outline btn-secondary mx-2 mb-2 ">{category}</button>
              ))}
          </div>
          
          <div>
              <p className="font-bold text-xl mx-5 my-10">Featured Projects</p>
              <div>
                  <ProjectCard />
              </div>
          </div>
      
          



        </div>
    </div>
  )
}

export default Feed;