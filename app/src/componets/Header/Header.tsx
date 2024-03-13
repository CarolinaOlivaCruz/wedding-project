import React from "react";

import iconMenuWhite from "../../../src/assets/icon/menu-white.svg";

import "../Header/style.scss";

function Header() {
  return (
    <header>
      <div>
        <span>S&H</span>
        <button id="button-menu">
          <img className="button-menu-white" src={iconMenuWhite} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
