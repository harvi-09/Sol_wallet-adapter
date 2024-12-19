import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import AirdropInput from "./components/AirdropInput";

import "@solana/wallet-adapter-react-ui/styles.css";
import ShowBalance from "./components/ShowBalance";
import SendToken from "./components/SendToken";

function App() {
  return (
    <ConnectionProvider endpoint={`https://api.devnet.solana.com`}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="body">
            
            <ShowBalance />
            <AirdropInput />
            <SendToken/>
            <WalletMultiButton />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
