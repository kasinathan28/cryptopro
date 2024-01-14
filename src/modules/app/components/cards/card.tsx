import React from 'react';
import style from "./cards.module.css";

interface CardProps {
  coin: {
    id: string;
    name: string;
    symbol: string;
    price: string;
    large: string;
    sparkline: string;
  };
}

function Card({ coin }: CardProps) {
  return (
    <div className={style.card}>
      <img className={style.coinImage} src={coin.large} alt={coin.id}/>
      <div className={style.textContainer}>
        <h3>{coin.name}</h3>
        <p>Symbol: {coin.symbol}</p>
        <p>Price: {coin.price}</p>
      </div>
      <img className={style.coinImage} src={coin.sparkline} alt={coin.id}/>
    </div>
  );
}

export default Card;
