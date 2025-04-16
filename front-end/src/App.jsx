import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Body from "./components/Body";
import Network from "./components/Network";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectForm from "./inner-components/ProjectForm";

const App = () => {
  return (
    <div>
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                   
                <Route path="/home" element={<Body/>}>
                    <Route path="/home" element={<Feed/>}/>
                    <Route path="network" element={<Network/>}/>
                    <Route path="messages" element={<Messages/>}/>
                    <Route path="notifications" element={<Notifications/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="settings" element={<Settings/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="addProject" element={<ProjectForm/>}/>

                    </Route>
              </Routes>
           
        
        
        </BrowserRouter>
    </div>
  )
}

          
  

export default App;
