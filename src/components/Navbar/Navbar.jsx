import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Logo } from "../index";
import "./Navbar.scss";
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#privacy">Privacy</a>
    </p>
    <p>
      <a href="#terms">Terms</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="cadena__navbar">
      <div className="cadena__navbar-links">
        <div className="cadena__navbar-links_logo">
          <Logo />
        </div>
        <div className="cadena__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="cadena__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="cadena__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cadena__navbar-menu_container scale-up-center">
            <div className="cadena__navbar-menu_container-links">
              <Menu />
              <div className="cadena__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
