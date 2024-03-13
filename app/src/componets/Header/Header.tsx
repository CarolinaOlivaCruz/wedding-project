import React from "react";

import iconMenuWhite from "../../../src/assets/icon/menu-white.svg";

import Menu from "../Menu/Menu";

import "../Header/style.scss";

interface HeaderProps {
  toggleMenu: () => void;
}

function Header({ toggleMenu }: HeaderProps) {
  return (
    <header>
      <div>
        <span>S&H</span>
        <button id="button-menu" onClick={toggleMenu}>
          <img className="button-menu-white" src={iconMenuWhite} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
