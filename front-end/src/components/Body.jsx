import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
const Body = () => {
  return (
    <div>
       <Header/>
       <Outlet/>
       <Footer/> 
    </div>
  )
}

export default Body