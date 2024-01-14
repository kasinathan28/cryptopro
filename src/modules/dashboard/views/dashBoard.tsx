import Navbar1 from "@/modules/app/components/navbar1/navbar1";
import React, { useEffect, useState } from "react";
import {
  fetchCoinDetails,
  Coin,
} from "../../mainContainer/services/coinService";
import CoinDetailsTable from "../components/coindetailstable/coinDetailsTable";

export default function DashBoard() {
  const [coinDetails, setCoinDetails] = useState<Coin[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchCoins = async () => {
      try {
        if (!apiUrl) {
          console.error("API URL is not defined.");
          return;
        }

        const data = await fetchCoinDetails(apiUrl);
        setCoinDetails(data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div>
      <Navbar1 />
      <CoinDetailsTable coinDetails={coinDetails} />
    </div>
  );
}
