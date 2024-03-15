import React, { useEffect } from "react";

import iconMenuWhite from "../../../src/assets/icon/menu-white.svg";
import iconMenuGray from "../../../src/assets/icon/menu-gray.svg";

import "../Header/style.scss";

export interface HeaderProps {
  toggleMenu: () => void;
  setIsMenuOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
}

function Header({ toggleMenu, setIsMenuOpen, isMenuOpen }: HeaderProps) {

  useEffect(() => {
    const checkScreenWidth = () => {
      const isDesktop = window.innerWidth > 780;
      if (isDesktop) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <header>
      <div>
        <span>S&H</span>
        <button id="button-menu" onClick={toggleMenu}>
          {isMenuOpen ? <img className="button-menu-gray" src={iconMenuGray} alt="" /> : <img className="button-menu-white" src={iconMenuWhite} alt="" />}
          
        </button>
      </div>
    </header>
  );
}

export default Header;
