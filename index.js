// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

// Wähle den gewünschten ChainId (z.B. Mainnet)
// Du kannst hier auch einen anderen ChainId wählen, z.B. ChainId.Rinkeby oder ChainId.Polygon
const desiredChainId = ChainId.Mainnet;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId="DEINE_CLIENT_ID_HIER"  {/* Hier Client-ID einfügen */}
      desiredChainId={desiredChainId}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
