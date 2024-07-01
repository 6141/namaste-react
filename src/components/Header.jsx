import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlinestatus";
import { HEADER_LOGO } from "./constants";  // Ensure you have the correct path for HEADER_LOGO
import { LoggedInContext } from "../../utils/context";

const Logo = () => {
  return (
    <div className="logo">
      <img src={HEADER_LOGO} alt="Logo" className="h-16 w-16" />
    </div>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const status = useOnlineStatus();
  const { userName, isLoggedinUser} = useContext(LoggedInContext)
  console.log(userName, isLoggedinUser, 'hiii')

  return (
    <header className="bg-pink-200 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <h2 className="text-white font-bold text-2xl ml-4">
            {status ? "Online" : "Offline"}
          </h2>
          <nav className="ml-4">
            <ul className="flex space-x-4">
              <li><Link className="text-white hover:text-gray-300" to="/">Home</Link></li>
              <li><Link className="text-white hover:text-gray-300" to="/about">About</Link></li>
              <li><Link className="text-white hover:text-gray-300" to="/contact">Contact</Link></li>
              <li><Link className="text-white hover:text-gray-300" to="/cart">Cart</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          {isLoggedIn ? (
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </div>
      </div>
    </header>
  );
};
