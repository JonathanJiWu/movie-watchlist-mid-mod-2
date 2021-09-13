import React from "react";
import AddMyFriend from "./header/AddMyFriend";
import LogIn from "./header/LogIn";
import Logo from "./header/Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header-right">
        <LogIn className="active"/>
        <AddMyFriend />
      </div>
    </div>
  );
};

export default Header;
{/* <div class="header">
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div> */}