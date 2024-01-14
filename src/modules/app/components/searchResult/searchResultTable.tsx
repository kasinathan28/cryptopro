// SearchResultTable.tsx
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
