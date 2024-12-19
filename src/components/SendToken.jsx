import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {  LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction, } from "@solana/web3.js";
import React from "react";
import "../App.css"

const SendToken = () => {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens (){
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;

        const transcation = new Transaction();
        Transaction.add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            })
        )
        await wallet.sendTransaction(transcation,connection);
        console.log("transafered")
    } 


  return (
    <div className="body">
        <h1>SEND TOKENS</h1>
      <input id="to" type="text" placeholder="To" />
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={sendTokens}>Send</button>
    </div>
  );
};

export default SendToken;
