import { HEADER_LOGO } from "./constants";

export const Header = () => {
    return (
      <div className="header">
        <Logo />
        <h1>ORDER YOUR FOOD NOW</h1>
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
    return (
      <div className="nav-bar">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CART</li>
        </ul>
      </div>
    );
  };