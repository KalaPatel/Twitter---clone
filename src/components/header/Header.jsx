import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu";
import SideMenu from "../sideMenu";
import "./index.css";
const Header = () => {
  const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false);

  const HamburgerMenuOpen = () => {
    setHamburgerMenuStatus(!hamburgerMenuStatus);
    console.log(hamburgerMenuStatus);
  };

  return (
    <div className="Header">
      <div className="mobile_header">
        <img
          className="header_img hamburgerIcon"
          src="https://img.icons8.com/external-those-icons-flat-those-icons/256/external-Menu-interface-those-icons-flat-those-icons.png"
          alt="hamburger menu icon"
          onClick={HamburgerMenuOpen}
        />
        {hamburgerMenuStatus ? <HamburgerMenu /> : null}
        <img
          className="header_img"
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
        <img
          className="header_img"
          src="https://img.icons8.com/material-outlined/256/sparkling.png"
          alt="trends menu icon"
        />
      </div>
      <div className="larger_screen_header">
        <img
          className="header_img"
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
        <SideMenu styleType="header_fullscreen_sideMenu" />
        <button className="Btn_tweet">Tweet</button>
      </div>
    </div>
  );
};

export default Header;
