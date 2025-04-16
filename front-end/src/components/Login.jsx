
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants/constant";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("swapna@gmail.com"); 
  const [password, setPasssword]  = useState("Swapna@369");

  const handleLogin = async () => {
    // add valid auth swapna -- done
    try{
        const res = await axios.post(BACKEND_URL+"/auth/login", 
                  {email, password},
                  {withCredentials: true}
        );
        return navigate("/home");
    }
    catch(err){
        console.log(err || "something wrong at login api in frontend!" );
    }

  };
  return (
    <div className="flex flex-row justify-center gap-52 items-center px-10">
      <div>
        <img
          src="../images/login_motion.gif"
          className="w-[40rem] h-[40rem] mt-15"
          alt="login image"
        />
      </div>

      <div>
        <div className="card bg-base-100 w-96 shadow-2xl flex flex-col justify-center items-center mx-auto my-20 h-96">
          <div className="flex justify-center items-center flex-col w-full h-full px-7">
            
            {/* email */}
            <h2 className="my-1 mr-70 ">Email:</h2>

            <div className="w-full">
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input 
                type="email" 
                placeholder="mail@site.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>

            {/* password */}
            <h2 className="mt-5 mb-1 mr-[16rem] ">Password:</h2>
            <div className="w-full">
              <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                <input 
                className="" 
                type="password" 
                required 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPasssword(e.target.password)}
                
                />
              </label>
              
            </div>
              
          </div>

          <div className="card-body items-center text-center w-full mt-[-40px]">
            <div className="card-actions w-full bg-secondary rounded-lg flex justify-center items-center">
              <button
                onClick={handleLogin}
                className="btn btn-secondary w-full text-white font-bold text-lg"
              >
                Login
              </button>
            </div>

            {/* Don't have an account section */}
            <div className="mt-4 text-center w-full">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-secondary font-medium hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;