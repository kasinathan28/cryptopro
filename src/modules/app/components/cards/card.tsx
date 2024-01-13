import React from 'react';
import style from "./cards.module.css";

interface CardProps {
  coin: {
    id: string;
    name: string;
    symbol: string;
    price: string;
  };
}

function Card({ coin }: CardProps) {
  return (
    <div className={style.card}>
      <h3>{coin.name}</h3>
      <p>Symbol: {coin.symbol}</p>
      <p>Price: {coin.price}</p>
      {/* You can add more details as needed */}
    </div>
  );
}

export default Card;
