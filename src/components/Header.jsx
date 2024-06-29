import { useState } from "react";
import { HEADER_LOGO } from "./constants";
import { Link } from "react-router-dom";

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
      <img src={HEADER_LOGO} alt="Logo" />
    </div>
  );
};

const NavBar = () => {
  const [login, setLogin] = useState('login');
  return (
    <div className="nav-bar">
      <ul>
        <li><Link to='/'> HOME </Link></li>
        <li><Link to='about'>ABOUT US</Link></li>
        <li><Link to='contact'>CONTACT</Link></li>
        <li>CART</li>
        <button className="login" onClick={() => setLogin(login === 'login' ? 'logout' : 'login')}>
          {login}
        </button>
      </ul>
    </div>
  );
};
