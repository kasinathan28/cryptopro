import React, { useEffect, useState } from "react";
import style from "./container.module.css";
import Card from "@/modules/app/components/cards/card";
import Quatue from "../quatue/quatue";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: string;
}

export default function Container() {
  const [coinDetails, setCoinDetails] = useState<Coin[]>([]); // Explicitly specify the type as Coin[]

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    const fetchCoinDetails = async () => {
      try {
        if (!apiUrl) {
          console.error("API URL is not defined.");
          return;
        }
  
        const response = await fetch(apiUrl);
        const { data } = await response.json();
        setCoinDetails(data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };
  
    fetchCoinDetails();
  }, []); // Empty dependency array means the effect runs once on component mount
  
  return (
    <div>
      <div className={style.container}>
        <div className={style.contents}>
          {coinDetails.map((coin) => (
            <Card key={coin.id} coin={coin} />
          ))}
        </div>
        <div>
          <Quatue></Quatue>
        </div>
      </div>
    </div>
  );
}
