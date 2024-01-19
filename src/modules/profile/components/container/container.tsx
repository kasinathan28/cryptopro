// ProfileContainer.tsx

import React, { useEffect, useState } from "react";
import style from "./container.module.css";
import { fetchFavoriteCoins, Coin } from "@/modules/profile/services/fetchFav";
import { removeFavoriteCoin } from "../../services/removeFav";
import Image from "next/image";
import Avatar from "../assets/avatar.png";

export default function Container() {
  const [username, setUsername] = useState("");
  const [favoriteCoins, setFavoriteCoins] = useState<Coin[]>([]);


  useEffect(() => {
    const storedUsername = window.localStorage.getItem("username");

    if (storedUsername) {
      setUsername(storedUsername);

      fetchFavoriteCoins(storedUsername).then((coins) => {
        setFavoriteCoins(coins);
      });
    }
  }, []);


  const removeFromFavorites = async (coinId: string) => {
    try {
      setFavoriteCoins((prevCoins) =>
        prevCoins.filter((coin) => coin.userId !== coinId)
      );
  
      const result = await removeFavoriteCoin(username, coinId);
      window.location.reload();
    
      if (!result.success) {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error removing coin from favorites", error);
    }
  };
  

  return (
    <div>
      <div className={style.main}>
        <div className={style.child1}>
          <div className={style.desc}>
            <h1>Welcome back, {username}!</h1>
          </div>
          <div className={style.avatar}>
            <Image src={Avatar} alt="avatar"/>
          </div>
        </div>
        <div className={style.child2}>
          <h1>Favorites</h1>
          {favoriteCoins.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {favoriteCoins.map((coin) => (
                  <tr key={coin.userId}>
                    <td>{coin.userId}</td>
                    <td>{coin.coinId}</td>
                    <td>
                      <img
                        src={coin.coinLarge}
                        alt={`${coin.coinId} Image`}
                        className={style.coinImage}
                      />
                    </td>
                    <td>
                      <button onClick={() => removeFromFavorites(coin.coinId)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No favorite coins yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
