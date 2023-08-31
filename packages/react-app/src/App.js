import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Swap from "./pages/Swap";
import About from "./pages/About";
import Tokens from "./pages/Tokens";
import CoinPage from "./pages/CoinPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/swap" element={<Swap/>} />
      <Route exact path="/" element={<Swap/>} />
      <Route path="/tokens" element={<Tokens/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/tokens/:id" element={<CoinPage/>} exact />
    </Routes>
  );
};

export default App;
