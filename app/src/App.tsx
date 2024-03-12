import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routes";

import "../src/global.scss"

export function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  );
}
