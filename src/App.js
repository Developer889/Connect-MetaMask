import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import { useEffect, useState } from 'react';
function App() {
  const[account,setAccount]=useState();
  const loadBlockchainData=async()=>{
    const web3=new Web3(Web3.givenProvider || "ws://localhost:8545")
    const network=await web3.eth.net.getNetworkType();
    console.log("network",network)
    const accounts=await web3.eth.requestAccounts();
    console.log("account",accounts)
    setAccount(accounts[0])
  }
  useEffect(()=>{
    loadBlockchainData();
  })
  return (
    <div className="App">
      <h1>MetaMask</h1>
      <p>Your account: <span>{account}</span></p>
    </div>
  );
}

export default App;
