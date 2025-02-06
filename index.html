// App.js
import React, { useState, useEffect, useRef } from "react";
import { ConnectWallet, useAddress, useSigner } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import Chart from "chart.js/auto";
import "./App.css";

function App() {
  // Thirdweb‑Hooks: Abfrage der verbundenen Adresse und des Signers
  const address = useAddress();
  const signer = useSigner();

  // State für den Token-Kauf
  const [buyAmount, setBuyAmount] = useState("");
  const [selectedChain, setSelectedChain] = useState("1");

  // Ref für das Chart‑Canvas
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Liquidity Pool", "Presale", "Reserve", "Team", "Marketing"],
          datasets: [{
            data: [45, 25, 15, 10, 5],
            backgroundColor: ["#28a745", "#007bff", "#ffca28", "#dc3545", "#6f42c1"]
          }]
        }
      });
    }
  }, []);

  // Mapping der Contract-Adressen pro Netzwerk
  const contractAddresses = {
    1: "0xE6Cf560B8bD1654fe6d4c3ba0C27D25C51edCBe2",   // Ethereum Mainnet
    137: "0x8cc0fC1678AF2C73D30D4f61ebc0783d49210BeD",  // Polygon (Matic)
    56: "0x1851778016C05e0d498bd38A8E9807c6c4Afb6BA"     // Binance Smart Chain
  };

  // Beispiel-ABI deines Presale-Smart-Contracts
  const contractABI = [
    "function buyTokens() public payable"
  ];

  // Kauf-Funktion für Tokens
  async function purchaseTokens() {
    if (!signer) {
      alert("Bitte verbinde zuerst deine Wallet!");
      return;
    }
    try {
      const contractAddress = contractAddresses[selectedChain];
      if (!contractAddress) {
        alert("Unsupported network. Bitte wähle Ethereum, Polygon oder Binance Smart Chain.");
        return;
      }
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      if (!buyAmount || isNaN(buyAmount)) {
        alert("Bitte gib einen gültigen Betrag in ETH ein.");
        return;
      }
      const tx = await contract.buyTokens({ value: ethers.utils.parseEther(buyAmount) });
      alert("Transaktion gesendet. Warte auf Bestätigung...");
      await tx.wait();
      alert("Tokens erfolgreich gekauft!");
    } catch (error) {
      console.error("Fehler beim Token-Kauf:", error);
      alert("Token-Kauf fehlgeschlagen. Sieh in der Konsole nach Details.");
    }
  }

  return (
    <div>
      <header>
        <h1 className="ai-title">QuantumPepe is here!</h1>
      </header>
      
      <main>
        {/* Presale-Bereich */}
        <section className="presale">
          <h2>Presale is live!</h2>
          <p>Connect your wallet and secure your QuantumPepe!</p>
          {/* Thirdweb ConnectWallet-Button */}
          <div style={{ margin: "10px 0" }}>
            <ConnectWallet 
              accentColor="#f213a4" 
              colorMode="light" 
              btnTitle="Mit Wallet verbinden" 
            />
          </div>
          {address && <p>Wallet verbunden: {address}</p>}
          
          <div className="fund-info">
            <p>Total collected: <span id="total-collected">0</span> ETH</p>
            <p>Going to liquidity: <span id="liquidity-flow">0</span> ETH</p>
          </div>
          <img src="logo.webp" alt="QuantumPepe Logo" className="pepe-logo" />
        </section>
        
        {/* Stages-Bereich */}
        <section className="stages">
          <div className="stage">
            <h3>Stage 1</h3>
            <ul>
              <li>Presale</li>
              <li>Liquidity/Safe</li>
              <li>10,000 Holders</li>
            </ul>
          </div>
          <div className="stage">
            <h3>Stage 2</h3>
            <ul>
              <li>DEX Exchange/Liquidity</li>
              <li>Staking-Rewards 10%</li>
              <li>25,000 Holders</li>
            </ul>
          </div>
          <div className="stage">
            <h3>Stage 3</h3>
            <ul>
              <li>$150M Market Cap</li>
              <li>Claim QuantumPepe</li>
              <li>CEX Listings</li>
              <li>50,000 Holders</li>
            </ul>
          </div>
        </section>
        
        {/* Token-Kauf-Bereich */}
        <section id="purchaseSection">
          <h2>Buy Tokens</h2>
          <p>Enter the amount in ETH to spend:</p>
          <input
            type="text"
            id="buyAmount"
            placeholder="Amount in ETH"
            value={buyAmount}
            onChange={(e) => setBuyAmount(e.target.value)}
          />
          <p>Select Network:</p>
          <select
            id="networkSelect"
            value={selectedChain}
            onChange={(e) => setSelectedChain(e.target.value)}
          >
            <option value="1">Ethereum Mainnet</option>
            <option value="137">Polygon (Matic)</option>
            <option value="56">Binance Smart Chain</option>
          </select>
          <button id="buyTokensButton" onClick={purchaseTokens}>Buy Tokens</button>
        </section>
        
        {/* Tokenomics-Bereich */}
        <section className="tokenomics">
          <h2>QuantumPepe Tokenomics</h2>
          <div className="tokenomics-content">
            <div className="tokenomics-info">
              <ul>
                <li>✔️ 45% Liquidity Pool</li>
                <li>✔️ 25% Presale</li>
                <li>✔️ 15% Reserve</li>
                <li>✔️ 10% Team</li>
                <li>✔️ 5% Marketing</li>
              </ul>
            </div>
            <div className="tokenomics-chart">
              <canvas id="tokenomicsChart" ref={chartRef}></canvas>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2025 QuantumPepe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
