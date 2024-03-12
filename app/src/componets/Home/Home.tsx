import React from "react";

import imgMarried from "../../../src/assets/img/married.jpg";
import Header from "../Header/Header";

import "../Home/style.scss";

function Home() {
  return (
    <div id="container-home">
      <Header />
      <main>
        <img src={imgMarried} alt="Imagem do casal" />
        <div>
          <h1>HIAGO & SAMARA</h1>
          <span>SAVE DATE</span>
          <h2>25.10.2024</h2>
          <p>
            “Um texto lindo sobre nós, que bom ter vocês aqui e compartilhar
            esse momento tão especial”
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
