import React, { useEffect, useState } from "react";
import style from "./container.module.css";
import Card from "@/modules/app/components/cards/card";
import Quatue from "../quatue/quatue";
import Loader from "@/modules/app/components/loader/loader";
import { fetchCoinDetails, Coin } from "../../services/coinService";
import socket from "@/modules/app/components/websocket/webSocket";
import { addCoinToDatabase } from "../../services/addCoin";
import { AxiosError } from "axios";

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

        const data = await fetchCoinDetails(apiUrl);
        console.log("Data received:", data);

        setCoinDetails(data);
        console.log("Fetched data successfully:", data);

        data.forEach(async (coin) => {
          try {
            await addCoinToDatabase(coin);
            console.log(coin);
            
          } catch (error) {
            console.error("Error adding coin details to the database:", error);
          }
        });
      } catch (error: unknown) {
        console.error("Error fetching coin details:", error);

        if (isAxiosError(error)) {
          console.error(
            "Axios error details:",
            (error as AxiosError).response?.data
          );
        }
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

  function isAxiosError(err: unknown): err is AxiosError {
    return (err as AxiosError).isAxiosError !== undefined;
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.contents}>
          {coinDetails && coinDetails.length > 0 ? (
            coinDetails.map((coin) => <Card key={coin.id} coin={coin} />)
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
