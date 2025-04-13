
const Login = () => {
  return (
    <div className="flex flex-row justify-center gap-52 items-center px-10">

      <div>
          <img src="../images/login_motion.gif" className="w-[40rem] h-[40rem] mt-15" alt="login image"/>
      </div> 

      <div> 

        <div className="card bg-base-100 w-96 shadow-2xl flex flex-col justify-center items-center mx-auto my-20 h-96"> 

          <div className="flex justify-center items-center flex-col w-full h-full px-7"> 
            {/* userName */}
            <h2 className="my-1 mr-58 ">User Name:</h2>
            <div className="w-full">
              
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" className="w-full"/>
                </label>
                <p className="validator-hint">
                    Must be 3 to 30 characters
                    <br/>containing only letters, numbers or dash
                </p>
            </div>
            {/* email */}
            <h2 className="my-1 mr-70 ">Email:</h2>

            <div className="w-full">
              <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                <input type="email" placeholder="mail@site.com" required/>
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>
          </div>

          
          <div className="card-body items-center text-center w-full mt-[-40px]">
          
            <div className="card-actions w-full bg-secondary rounded-lg flex justify-center items-center">
              <button className="btn btn-secondary w-full text-white font-bold text-lg">Login</button>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Login