
const Header = () => {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-2xl ">
          <div className="flex-1 items-center justify-center">
            <a className="btn text-2xl border shadow-2xl">SkillMatch </a>

          </div>

          <div className="flex justify-center items-center">
            <div className="mx-5 text-sm hover:cursor-pointer btn btn-ghost border-black border-radius ">
              <a className="text-gray-400 hover:text-gray-100"> My Projects </a>
            </div>

            {/* home logo */}
            <div className="mx-5 flex flex-col justify-center items-center">
              <svg className="text-gray-400 hover:text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="26" height="26" focusable="false">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
              <p className="text-xs text-gray-400 hover:text-gray-100"> Home </p>
            </div>
            
             {/* Network */}
             <div className="mx-5 flex flex-col justify-center items-center">
             <svg className="text-gray-400 hover:text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
              <p className="text-xs text-gray-400 hover:text-gray-100"> Network </p>
            </div>

             {/* Messages */}
             <div className="mx-5 flex flex-col justify-center items-center">
             <svg className="text-gray-400 hover:text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
          </svg>
              <p className="text-xs text-gray-400 hover:text-gray-100"> Messages </p>
            </div>

             {/* Notifications */}
             <div className="mx-5 flex flex-col justify-center items-center">
             <svg className="text-gray-400 hover:text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
              <p className="text-xs text-gray-400 hover:text-gray-100"> Notifications </p>
            </div>

          
            <div className="dropdown dropdown-end mx-5">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;