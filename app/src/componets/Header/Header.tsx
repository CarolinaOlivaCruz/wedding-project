import React from "react";

import iconMenuWhite from "../../../src/assets/icon/menu-white.svg";
import iconMenuGray from "../../../src/assets/icon/menu-gray-2.svg";

import "../Header/style.scss";

function Header() {
  return (
    <header>
      <div>
        <span>S&H</span>
        <button id="button-menu">
          <img src={iconMenuGray} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
