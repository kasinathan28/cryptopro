// SearchResultTable.js

import React from "react";
import style from "./searchResultTable.module.css";
import Loader from "../loader/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface Coin {
  id: string;
  large: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
}

interface SearchResultTableProps {
  searchResults: Coin[];
}

const SearchResultTable: React.FC<SearchResultTableProps> = ({
  searchResults,
}) => {
  const username = window.localStorage.getItem("username");

  const handleAddToFavorites = async (coinId: string, coinLarge: string) => {
    try {
      console.log("Adding to favorites:", { username, coinId, coinLarge });

      const response = await fetch('http://localhost:5000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, coinId, coinLarge }),
      });

      if (response.ok) {
        console.log(`Coin ${coinId} added to favorites`);
      } else {
        console.error('Failed to add coin to favorites');
      }
    } catch (error) {
      console.error('Error adding coin to favorites', error);
    }
  };

  return (
    <div className={style.searchResultContainer}>
      <h2 className={style.h2}>Search Results</h2>
      {searchResults && searchResults.length > 0 ? (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img className={style.img} src={coin.large} alt="" />
                </td>
                <td>{coin.id}</td>
                <td>{coin.market_cap_rank}</td>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>
                  <FontAwesomeIcon
                    className={style.icon}
                    size="2x"
                    color="fff"
                    icon={faHeart}
                    onClick={() => handleAddToFavorites(coin.id, coin.large)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default SearchResultTable;
