import Navbar1 from "@/modules/app/components/navbar1/navbar1";
import React, { useEffect, useState } from "react";
import {fetchCoinDetails,Coin,} from "../../mainContainer/services/coinService";
import CoinDetailsTable from "../components/coindetailstable/coinDetailsTable";
import { addCoinToDatabase } from "@/modules/mainContainer/services/addCoin";
import { AxiosError } from "axios";
import socket from "@/modules/app/components/websocket/webSocket";

export default function DashBoard() {
  const [coinDetails, setCoinDetails] = useState<Coin[]>([]);


  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);
  
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchCoins = async () => {
      try {
        if (!apiUrl) {
          console.error("API URL is not defined.");
          return;
        }

        const data = await fetchCoinDetails(apiUrl);
        console.log("Data received:", data);

        setCoinDetails(data);
        console.log("Fetched data successfully:", data);
      } catch (error: unknown) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoins();

    const intervalId = setInterval(() => {
      fetchCoins();
      console.log("Interval triggered");
    }, 60000);

    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []);

  return (
    <div>
      <Navbar1 />
      <CoinDetailsTable coinDetails={coinDetails} />
    </div>
  );
}
