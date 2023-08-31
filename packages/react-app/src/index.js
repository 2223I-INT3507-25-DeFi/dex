import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import { BrowserRouter } from 'react-router-dom'

import App from "./App";
import { DAPP_CONFIG } from "./config/config";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <DAppProvider config={DAPP_CONFIG}>
        <App />
      </DAppProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")

);