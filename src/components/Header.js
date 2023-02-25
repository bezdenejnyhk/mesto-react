import React from "react";

import Vector from '../images/Vector.png';

const Header = () => {
  return (
    <header className="header">
        <img className="header__logo" src={Vector} alt="Vector"/>
    </header>
  );
};

export default Header;