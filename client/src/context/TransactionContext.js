import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { greeterAbi, greeterAddress } from "../components/utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [greeting, setGreetingValue] = useState("");
  const [loading, setLoading] = useState(false);

  const requestAccount = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      await ethereum.request({
        method: "eth_requestAccounts"
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getGreeting = async () => {
    if (!ethereum) return alert("Please install metamask");
    const provider = new ethers.providers.Web3Provider(ethereum);
    const contract = new ethers.Contract(greeterAddress, greeterAbi, provider);
    try {
      const data = await contract.greet();
      setGreetingValue(data);
      console.log("DATA: ", data);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const setGreeting = async (newGreeting) => {
    if (!ethereum) return alert("Please install metamask");
    const provider = new ethers.providers.Web3Provider(ethereum);
    await requestAccount();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(greeterAddress, greeterAbi, signer);
    try {
      setLoading(true);
      const tx = await contract.setGreeting(newGreeting);
      await tx.wait();
      await getGreeting();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("ERROR: ", error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        getGreeting,
        setGreeting,
        greeting,
        loading
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
