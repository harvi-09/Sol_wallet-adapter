import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";
import '../App.css';

const AirdropInput = () => {
  const walllet = useWallet();
  const {connection} = useConnection();
  const RequestAirdrop = async () => {
    let amount = 1;
    await connection.requestAirdrop(
      walllet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    console.log( "airdropped" )
  };
  return (
    <>
     
     
      <button onClick={RequestAirdrop} >Request Airdrop of 1 SOL</button>
    </>
  );
};

export default AirdropInput;
