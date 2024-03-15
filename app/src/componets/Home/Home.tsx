import React, { useEffect, useState } from "react";

import imgMarried from "../../../src/assets/img/married.jpg";
import Header from "../Header/Header";

import "../Home/style.scss";
import Menu from "../Menu/Menu";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div id="container-home">
      <Header toggleMenu={toggleMenu} />
      <main>
        {isMenuOpen && <Menu />}
        <div className="container-main">
          <img src={imgMarried} alt="Imagem do casal" />
          <div>
            <h1>SAMARA & HIAGO</h1>
            <span>SAVE DATE</span>
            <h2>25.10.2024</h2>
            <p>
              “Um texto lindo sobre nós, que bom ter vocês aqui e compartilhar
              esse momento tão especial”
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
