// Container.tsx

import React, { useEffect, useState } from "react";
import style from "./container.module.css";
import Card from "@/modules/app/components/cards/card";
import Quatue from "../quatue/quatue";
import Loader from "@/modules/app/components/loader/loader";
import { fetchCoinDetails, Coin } from "../../services/coinService";
import socket from "@/modules/app/components/websocket/webSocket";

export default function Container() {
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
        const data = await fetchCoinDetails(apiUrl );
        setCoinDetails(data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoins();
  }, []);

  
  return (
    <div>
      <div className={style.container}>
        <div className={style.contents}>
          {coinDetails && coinDetails.length > 0 ? (
            coinDetails.map((coin) => (
              <Card key={coin.id} coin={coin} />
            ))
          ) : (
            <Loader></Loader>
          )}
        </div>
        <div>
          <Quatue></Quatue>
        </div>
      </div>
    </div>
  );
}
