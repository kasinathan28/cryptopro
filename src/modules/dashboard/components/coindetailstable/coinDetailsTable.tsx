// CoinDetailsTable.tsx
import React from 'react';
import { Coin } from '../../../mainContainer/services/coinService'; // Adjust the import path based on your project structure
import style from './coindetails.module.css';
import SearchBar from '@/modules/app/components/searchbar/searchBar';

interface CoinDetailsTableProps {
  coinDetails: Coin[];
}

const CoinDetailsTable: React.FC<CoinDetailsTableProps> = ({ coinDetails }) => {
  return (
    <div className="coin-details-table">
        <div className={style.searchbar}>
            <SearchBar></SearchBar>
        </div>
      <h2 className={style.h2}>Treding Coins</h2>
      <table className={style.coin_details_table}>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Sparkline</th>
            <th>ID</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {coinDetails.map((coin) => (
            <tr key={coin.id}>
              <td><img src={coin.large} alt="" /></td>
              <td><img  className={style.sparkline} src={coin.sparkline} alt={coin.id} /></td>
              <td>{coin.id}</td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>{coin.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinDetailsTable;
