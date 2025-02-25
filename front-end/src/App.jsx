import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Body/>}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Feed/>}/>
                </Route>
            </Routes>
        
        
        </BrowserRouter>
    </div>
  )
}

export default App