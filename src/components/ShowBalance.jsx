import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React from "react";

const ShowBalance = () => {
    const wallet = useWallet();
  const { connection } = useConnection();
  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
  }
  getBalance();
  return (
    <div className="body">
      <h2>SOL Balance: <span id="balance"></span></h2>
    </div>
  );
};

export default ShowBalance;
