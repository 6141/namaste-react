import { useState } from "react";
import { HEADER_LOGO } from "./constants";

export const Header = () => {
    return (
      <div className="header">
        <Logo />
        <h1 className="food-text">FOODIES WELCOME HERE.</h1>
        <NavBar />
      </div>
    );
  };

  const Logo = () => {
    return (
      <div className="logo">
        <img
          height="70px"
          width="70px"
          src={HEADER_LOGO}
        />
      </div>
    );
  };

  const NavBar = () => {
    const [login, setLogin] = useState('login')
    return (
      <div className="nav-bar">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CART</li>
        <button className="login" onClick={()=>{
          login === 'login' ? setLogin('logout') : setLogin('login')
        }}>{login}</button>
        </ul>
      </div>

    );
  };