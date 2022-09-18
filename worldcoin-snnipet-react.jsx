import { useState } from "react";
import "./App.css";
import axios from "axios";
import { WorldIDWidget } from "@worldcoin/id";
const ACTION_ID = ""; // obtain this from developer.worldcoin.org

function App() {
  const [accounts, setAccounts] = useState([]);

  async function connectAccount() {
    // if use Metamask
    if (window.ethereum && !accounts[0]) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      console.log(accounts);
    }
  }
  connectAccount();

  return (
    <div className="overlay">
      <div className="App">
        {accounts[0] && (
          <WorldIDWidget
            actionId={ACTION_ID}
            signal={accounts[0]}
            enableTelemetry
            onSuccess={(verificationResponse) => {
              // Check the correctness of Widget authentication with WorldCoinAPI
              const option = {
                action_id: ACTION_ID,
                signal: accounts[0],
                proof: verificationResponse.proof,
                nullifier_hash: verificationResponse.nullifier_hash,
                merkle_root: verificationResponse.merkle_root,
              };
              axios
                .post("https://developer.worldcoin.org/api/v1/verify", option, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            // you'll actually want to pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
